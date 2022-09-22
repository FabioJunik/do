import { RolesRepository } from "../../../repositories/implementations/RolesRepository";
import { ListRolesUseCase } from "./ListRolesUseCase";
import { ListRolesComtroller } from "./ListRolesComtroller";


const rolesRepository = RolesRepository.getINSTANCE();
const listRolesUseCase = new ListRolesUseCase(rolesRepository);
const listRolesComtroller = new ListRolesComtroller(listRolesUseCase);


export { listRolesComtroller }