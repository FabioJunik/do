import { Router } from 'express';
import { createEmployeeComtroller } from './useCases/createEmployee';
import { listEmployeesComtroller } from './useCases/ListEmployee';
import { listRolesComtroller } from './useCases/Role/List';
import { createTaskComtroller } from './useCases/Task/Create';
import { listTasksComtroller } from './useCases/Task/List';
import { createUnassignedTaskComtroller } from './useCases/UnassignedTask/Create';

const router = Router();

router.get('/', (request, response) => {
    return response.send({ message: 'Hello code 😎' });
})

router.post('/employees', (request, response) => {
    return createEmployeeComtroller.handle(request, response);
})

router.get('/employees', (request, response) => {
    return listEmployeesComtroller.handle(request, response);
})

router.post('/tasks', (request, response) => {
    return createTaskComtroller.handle(request, response);
});

router.get('/tasks', (request, response) => {
    return listTasksComtroller.handle(request, response);
});

router.post('/unassignedtasks', (request, response) => {
    return createUnassignedTaskComtroller.handle(request, response);
});

router.get('/roles', (request, response) => {
    return listRolesComtroller.handle(request, response);
});

export { router };

