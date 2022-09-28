import { Router } from "express";
import { EndureAuthenticated } from '../middlewares/endureAuthenticated';
import { authenticationEmployeeComtroller } from '../useCases/Employee/Authentication';
import { assignedTasksRoutes } from "./assignedtasks.routes";
import { employeesRoutes } from "./employees.routes";
import { rolesRoutes } from "./roles.routes";
import { unassignedTasksRoutes } from "./unassignedtasks.routes";
import { uploadRoutes } from "./uploads.routes";


const router = Router();

const endureAuthenticated = new EndureAuthenticated();

router.post("/employees/authenticate", (request, response) =>
    authenticationEmployeeComtroller.handle(request, response)
);

router.use(endureAuthenticated.auth);
router.use("/employees", employeesRoutes)
router.use("/roles", rolesRoutes)
router.use("/assignedtasks", assignedTasksRoutes);
router.use("/unassignedtasks", unassignedTasksRoutes);
router.use("/uploads", uploadRoutes);

export { router }