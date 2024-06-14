import { Router } from 'express';

import { authMiddleware } from './middlewares/authMiddleware';

// import dos controllers
import UserControllers from './controllers/UserControllers';
import TaskControllers from './controllers/TaskControllers';

const routes = Router();

// rota para completar a task
routes.patch('/task/:id', authMiddleware, TaskControllers.completedTask);

// rota para se autenticar na api
routes.post('/login', UserControllers.authUser);

// rota para criar novo usuário
routes.post('/user', UserControllers.createUser);

// rota para adicionar uma nova task
routes.post('/task', authMiddleware, TaskControllers.createTask);

// rota para atualizar uma task
routes.put('/task/:id', authMiddleware, TaskControllers.updateTask);

// rota para exibir todas as tasks
routes.get('/task', authMiddleware, TaskControllers.getTask);

// rota para apagar a task
routes.delete('/task/:id', authMiddleware, TaskControllers.deleteTask);

export default routes;