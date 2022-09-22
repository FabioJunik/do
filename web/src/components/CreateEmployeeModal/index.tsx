import * as Dialog from '@radix-ui/react-dialog';
import { Content, Overlay, Title, Close } from './styles';


export function CreateEmployeesModal() {
    return (
        <Dialog.Portal>
            <Overlay>
                <Content>
                    <Title>Cadastrar funcionario</Title>
                    <form>
                        <div>
                            <label htmlFor="">Nome</label>
                            <input placeholder="Informe o nome completo" />
                        </div>
                        <div>
                            <label htmlFor="">E-mail</label>
                            <input placeholder="user@mail.com" />
                        </div>
                        <div>
                            <label htmlFor="">Cargo</label>
                            <select>
                                <option disabled selected>O funcionario exerce a função de ?</option>
                                <option>Front End</option>
                                <option>Back End</option>
                                <option>UI/UX</option>
                            </select>
                        </div>
                        <div className="options">
                            <Close>Cancelar</Close>
                            <button type="button">Cadastrar</button>
                        </div>
                    </form>
                </Content>
            </Overlay>
        </Dialog.Portal>
    )
}