import { AdminsRepository } from "../../../repositories/implementations/AdminsRepository";
import { ListAdminsUseCase } from "./ListAdminsUseCase";
import { ListAdminsController } from "./ListAdminsController";


const adminsRepository = AdminsRepository.getINSTANCE();
const listAdminsUseCase = new ListAdminsUseCase(adminsRepository);
const listAdminsController = new ListAdminsController(listAdminsUseCase);


export { listAdminsController }