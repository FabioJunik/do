import { Router } from 'express';
import { createEmployeeComtroller } from './useCases/createEmployee';

const router = Router();

router.get('/', (request, response) => {
    return response.send({ message: 'Hello code 😎' });
})

router.post('/employee', (request, response) => {
    return createEmployeeComtroller.handle(request, response);
})

export { router };

