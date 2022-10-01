import { AdminsRepository } from "../../../repositories/implementations/AdminsRepository";
import { UpdateAdminController } from "./UpdateAdminController";
import { UpdateAdminUseCase } from "./UpdateAdminUseCase";

const adminsRepository = AdminsRepository.getINSTANCE();
const updateAdminUseCase = new UpdateAdminUseCase(adminsRepository);
const updateAdminController = new UpdateAdminController(updateAdminUseCase);

export { updateAdminController };