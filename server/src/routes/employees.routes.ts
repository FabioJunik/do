import { Router } from 'express';
import { createEmployeeComtroller } from '../useCases/Employee/Create';
import { deleteEmployeeComtroller } from '../useCases/Employee/Delete';
import { listEmployeesComtroller } from '../useCases/Employee/List';

const employeesRoutes = Router();

employeesRoutes.post('/', (request, response) => {
    return createEmployeeComtroller.handle(request, response);
})

employeesRoutes.get('/', (request, response) => {
    return listEmployeesComtroller.handle(request, response);
})

employeesRoutes.delete('/:id', (request, response) => {
    return deleteEmployeeComtroller.handle(request, response);
})

export { employeesRoutes }