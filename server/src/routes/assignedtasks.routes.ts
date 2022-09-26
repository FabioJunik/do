import { Router } from 'express';
import { createTaskComtroller } from '../useCases/Task/Create';
import { deleteTaskComtroller } from '../useCases/Task/Delete';
import { listTasksComtroller } from '../useCases/Task/List';

const assignedTasksRoutes = Router();

assignedTasksRoutes.post('/', (request, response) => {
    return createTaskComtroller.handle(request, response);
});

assignedTasksRoutes.get('/', (request, response) => {
    return listTasksComtroller.handle(request, response);
});

assignedTasksRoutes.delete('/:id', (request, response) => {
    return deleteTaskComtroller.handle(request, response);
});

export { assignedTasksRoutes };