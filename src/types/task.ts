// interface do tipo TASK
export interface Task{
    id: number;
    title: string;
    description: string;
    userId: number;
    createdAt: Date
}

// aqui é exportado uma task omitindo o ID e CREATEDAT
export type CreateTaskDTO = Omit<Task, 'id' | 'createdAt'>;

// aqui é exportado tudo da Task como opcional
export type UpdateTaskDTO = Partial<Task>;