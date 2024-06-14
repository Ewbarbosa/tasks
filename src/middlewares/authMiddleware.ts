// middleware para validar se o usuário está autenticado

import { Request, Response, NextFunction } from "express";

// biblioteca para utilização de token
import jwt from 'jsonwebtoken';

interface PayLoad {
    sub: string;
}

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    
    // obtem o token
    const token = req.headers.authorization?.split(' ')[1];

    // se não existir token retorna 401
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    try {
        const { sub } = jwt.verify(token, process.env.JWT_SECRET as jwt.Secret) as PayLoad;

        req.user_id = sub;
        
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token' });
    }
}