import { Router } from 'express';
import { createAssignedTaskComtroller } from '../useCases/AssignedTask/Create';
import { deleteAssignedTaskComtroller } from '../useCases/AssignedTask/Delete';
import { listAssignedTasksComtroller } from '../useCases/AssignedTask/List';

const assignedTasksRoutes = Router();

assignedTasksRoutes.post('/', (request, response) => {
    return createAssignedTaskComtroller.handle(request, response);
});

assignedTasksRoutes.get('/', (request, response) => {
    return listAssignedTasksComtroller.handle(request, response);
});

assignedTasksRoutes.delete('/:id', (request, response) => {
    return deleteAssignedTaskComtroller.handle(request, response);
});

export { assignedTasksRoutes };