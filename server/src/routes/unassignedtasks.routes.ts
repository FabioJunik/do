import { Router } from 'express';
import { createUnassignedTaskComtroller } from '../useCases/UnassignedTask/Create';
import { deleteUnassignedTaskComtroller } from '../useCases/UnassignedTask/Delete';
import { listUnassignedTasksComtroller } from '../useCases/UnassignedTask/List';

const unassignedTasksRoutes = Router();

unassignedTasksRoutes.post('/', (request, response) => {
    return createUnassignedTaskComtroller.handle(request, response);
});

unassignedTasksRoutes.get('/', (request, response) => {
    return listUnassignedTasksComtroller.handle(request, response);
});

unassignedTasksRoutes.delete('/:id', (request, response) => {
    return deleteUnassignedTaskComtroller.handle(request, response);
});

export { unassignedTasksRoutes }