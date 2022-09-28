import { Router } from "express";
import { createAdminController } from "../useCases/Admin/Create";


const adminRoutes = Router();

adminRoutes.post("/", (request, response) => {
    return createAdminController.handle(request, response);
});

export { adminRoutes }