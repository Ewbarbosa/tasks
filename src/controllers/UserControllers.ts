import { Request, Response } from "express";

import UserServices from "../services/UserServices";

class UserControllers {

    // cria um novo usuário
    async createUser(req: Request, res: Response) {

        const { username, password } = req.body;
        const user = await UserServices.createUser({ username, password });
        res.status(201).json(user);
    }

    // autentica o usuário
    async authUser(req: Request, res: Response) {

        const { username, password } = req.body;
        const user = await UserServices.authUser({ username, password });
        res.status(200).json(user);        
    }

}

export default new UserControllers();