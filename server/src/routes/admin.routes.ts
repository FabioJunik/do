import { Router } from "express";
import { createAdminController } from "../useCases/Admin/Create";
import { deleteAdminController } from "../useCases/Admin/Delete";
import { listAdminsController } from "../useCases/Admin/List";
import { updateAdminController } from "../useCases/Admin/Update";


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

adminRoutes.put("/:id", (request, response) => {
    return updateAdminController.handle(request, response);
});

export { adminRoutes }