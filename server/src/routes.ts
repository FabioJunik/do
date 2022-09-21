import { Router } from 'express';
import { createEmployeeComtroller } from './useCases/createEmployee';
import { listEmployeesComtroller } from './useCases/ListEmployee';
import { createTaskComtroller } from './useCases/Task/Create';

const router = Router();

router.get('/', (request, response) => {
    return response.send({ message: 'Hello code 😎' });
})

router.post('/employee', (request, response) => {
    return createEmployeeComtroller.handle(request, response);
})

router.get('/employee', (request, response) => {
    return listEmployeesComtroller.handle(request, response);
})

router.post('/tasks', (request, response) => {
    return createTaskComtroller.handle(request, response);
});

export { router };

