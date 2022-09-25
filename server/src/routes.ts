import { Router } from 'express';
import { EndureAuthenticated } from './middlewares/endureAuthenticated';
import { createEmployeeComtroller } from './useCases/createEmployee';
import { authenticationEmployeeComtroller } from './useCases/Employee/Authentication';
import { listEmployeesComtroller } from './useCases/ListEmployee';
import { listRolesComtroller } from './useCases/Role/List';
import { createTaskComtroller } from './useCases/Task/Create';
import { deleteTaskComtroller } from './useCases/Task/Delete';
import { listTasksComtroller } from './useCases/Task/List';
import { createUnassignedTaskComtroller } from './useCases/UnassignedTask/Create';
import { deleteUnassignedTaskComtroller } from './useCases/UnassignedTask/Delete';
import { listUnassignedTasksComtroller } from './useCases/UnassignedTask/List';

const router = Router();

const endureAuthenticated = new EndureAuthenticated();

router.post("/employees/authenticate", (request, response) =>
    authenticationEmployeeComtroller.handle(request, response)
);

router.use(endureAuthenticated.auth);

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

router.delete('/tasks/:id', (request, response) => {
    return deleteTaskComtroller.handle(request, response);
});

router.post('/unassignedtasks', (request, response) => {
    return createUnassignedTaskComtroller.handle(request, response);
});

router.get('/unassignedtasks', (request, response) => {
    return listUnassignedTasksComtroller.handle(request, response);
});

router.delete('/unassignedtasks/:id', (request, response) => {
    return deleteUnassignedTaskComtroller.handle(request, response);
});

router.get('/roles', (request, response) => {
    return listRolesComtroller.handle(request, response);
});

export { router };

