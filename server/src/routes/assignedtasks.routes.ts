import { Router } from 'express';
import { createAssignedTaskComtroller } from '../useCases/AssignedTask/Create';
import { deleteAssignedTaskComtroller } from '../useCases/AssignedTask/Delete';
import { listAssignedTasksComtroller } from '../useCases/AssignedTask/List';
import { listEmployeeTasksComtroller } from '../useCases/AssignedTask/ListEmployeeTasks';
import { updateStateTaskController } from '../useCases/AssignedTask/UpdateStateTask';

const assignedTasksRoutes = Router();

assignedTasksRoutes.post('/', (request, response) => {
    return createAssignedTaskComtroller.handle(request, response);
});

assignedTasksRoutes.post('/updatestate/:id', (request, response) => {
    return updateStateTaskController.handle(request, response);
})

assignedTasksRoutes.get('/', (request, response) => {
    return listAssignedTasksComtroller.handle(request, response);
});

assignedTasksRoutes.get('/:id', (request, response) => {
    return listEmployeeTasksComtroller.handle(request, response);
});

assignedTasksRoutes.delete('/:id', (request, response) => {
    return deleteAssignedTaskComtroller.handle(request, response);
});

export { assignedTasksRoutes };