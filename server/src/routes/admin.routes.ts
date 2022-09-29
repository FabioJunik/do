import { Router } from "express";
import { createAdminController } from "../useCases/Admin/Create";
import { deleteAdminController } from "../useCases/Admin/Delete";
import { listAdminsController } from "../useCases/Admin/List";


const adminRoutes = Router();

adminRoutes.post("/", (request, response) => {
    return createAdminController.handle(request, response);
});

adminRoutes.get("/", (request, response) => {
    return listAdminsController.handle(request, response);
});

adminRoutes.delete("/:id", (request, response) => {
    return deleteAdminController.handle(request, response);
});

export { adminRoutes }