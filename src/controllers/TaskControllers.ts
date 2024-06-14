import { Request, Response } from "express";
import jwt from 'jsonwebtoken'

import TaskServices from "../services/TaskServices";

class TaskControllers {

    // atualiza o status da task
    async completedTask(req: Request, res: Response) {

        const id = parseInt(req.params.id);
        const task = await TaskServices.completed(id, 'Concluída');
        res.status(200).json(task);
    }

    // busca todas as tasks relacionado ao usuário
    async getTask(req: Request, res: Response) {

        const userId = parseInt(req.user_id);
        const tasks = await TaskServices.getTask(userId);
        res.status(200).json(tasks);
    }

    // cria uma nova task
    async createTask(req: Request, res: Response) {

        const { title, description } = req.body;

        const userId = parseInt(req.user_id);

        const task = await TaskServices.createTask({ title, description, userId });
        res.status(201).json(task);
    }

    // atualiza uma task
    async updateTask(req: Request, res: Response) {

        const id = parseInt(req.params.id);
        const { title, description } = req.body;
        const task = await TaskServices.updateTask({ id, title, description });
        res.status(200).json(task);
    }

    // apaga uma task
    async deleteTask(req: Request, res: Response) {

        const { id } = req.params;
        const task = await TaskServices.deleteTask(parseInt(id));
        res.status(204).json(task);
    }

}

export default new TaskControllers();