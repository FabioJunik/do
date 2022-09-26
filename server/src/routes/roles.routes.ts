import { Router } from 'express';
import { listRolesComtroller } from '../useCases/Role/List';


const rolesRoutes = Router();

rolesRoutes.get('/', (request, response) => {
    return listRolesComtroller.handle(request, response);
});


export { rolesRoutes }