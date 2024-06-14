import prismaClient from "../prisma";

import { CreateTaskDTO } from "../types/task";
import { UpdateTaskDTO } from "../types/task";

class TaskServices {

    async completed(id: number, status: string){
        try {
            const task = await prismaClient.task.update({
                where: {
                    id: id
                },
                data: {
                    status: status
                }
            })

            return task
        } catch {
            throw new Error("Error updating task");
        }
    }

    async getTask(userId: number) {

        try {
            const tasks = await prismaClient.task.findMany({
                where: {
                    userId: userId
                }
            });

            return tasks
        } catch {
            throw new Error("Error listing tasks");
        }
    }

    async createTask({ title, description, userId }: CreateTaskDTO) {

        try {
            const task = await prismaClient.task.create({
                data: {
                    title,
                    description,
                    userId
                }
            });

            return task;
        } catch {
            throw new Error("Error creating task");
        }
    }

    async updateTask({ id, title, description }: UpdateTaskDTO) {
        try {
            const task = await prismaClient.task.update({
                where: {
                    id: id
                },
                data: {
                    title: title,
                    description: description
                }
            });

            return task;
        } catch {
            throw new Error("Error updating task");
        }
    }

    async deleteTask(id: number) {
        try {
            const task = await prismaClient.task.delete({
                where: {
                    id: id
                }
            });

            return task;

        } catch {
            throw new Error("Error deleting task");
        }
    }
}

export default new TaskServices();