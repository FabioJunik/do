import { AdminsRepository } from "../../../repositories/implementations/AdminsRepository";
import { DeleteAdminController } from "./DeleteAdminController";
import { DeleteAdminUseCase } from "./DeleteAdminUseCase";


const adminsRepository = AdminsRepository.getINSTANCE();
const deleteAdminUseCase = new DeleteAdminUseCase(adminsRepository);
const deleteAdminController = new DeleteAdminController(deleteAdminUseCase);


export { deleteAdminController }