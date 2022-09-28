import { AdminsRepository } from "../../../repositories/implementations/AdminsRepository";
import { AuthenticationAdminController } from "./AuthenticationAdminController";
import { AuthenticationAdminUseCase } from "./AuthenticationAdminUseCase";

const adminsRepository = AdminsRepository.getINSTANCE();
const createAdminUseCase = new AuthenticationAdminUseCase(adminsRepository);
const authenticationAdminController = new AuthenticationAdminController(createAdminUseCase);


export { authenticationAdminController };