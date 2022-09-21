import { Router } from 'express';
import { createEmployeeComtroller } from './useCases/createEmployee';
import { listEmployeesComtroller } from './useCases/ListEmployee';

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
export { router };

