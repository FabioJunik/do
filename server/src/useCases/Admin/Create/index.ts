import { AdminsRepository } from "../../../repositories/implementations/AdminsRepository";
import { CreateAdminController } from "./CreateAdminController";
import { CreateAdminUseCase } from "./CreateAdminUseCase";


const adminRepository = AdminsRepository.getINSTANCE();
const createAdminUseCase = new CreateAdminUseCase(adminRepository);
const createAdminController = new CreateAdminController(createAdminUseCase);


export { createAdminController };