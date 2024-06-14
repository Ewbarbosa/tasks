import prismaClient from "../prisma";

import { compare, hash } from 'bcryptjs'
import jwt from "jsonwebtoken";

interface UserRequest {
    username: string;
    password: string;
}

class UserServices {

    async createUser({ username, password }: UserRequest) {

        // gera um hash da senha recebida
        const hashedPassword = await hash(password, 8);

        // busca o usuário no banco
        const userExists = await prismaClient.user.findFirst({
            where: {
                username: username
            }
        })


        // se existir um usuário igual ao recebido retorna um erro
        if (userExists) {
            throw new Error("Already registered user");
        }

        try {
            const user = await prismaClient.user.create({
                data: {
                    username,
                    password: hashedPassword
                },
                select: {
                    id: true,
                    username: true
                }
            })

            return user;

        } catch {
            return { message: 'Error creating user' }
        }
    }

    async authUser({ username, password }: UserRequest) {

        const user = await prismaClient.user.findFirst({
            where: {
                username: username
            }
        })

        if (!user) {
            throw new Error('Username incorrect');
        }

        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new Error('Password incorrect');
        }

        const token = jwt.sign(
            { id: user.id, username: user.username },
            process.env.JWT_SECRET as jwt.Secret,
            { subject: user.id.toString(), expiresIn: '1h' }
        );

        return {
            id: user.id,
            username: user.username,
            token: token
        }

    }

}

export default new UserServices();