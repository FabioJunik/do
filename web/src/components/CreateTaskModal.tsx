import * as Dialog from '@radix-ui/react-dialog';
import { Content, Overlay, Title, Close } from '../styles/modalStyles';



export function CreateTaskModal() {

    return (
        <Dialog.Portal>
            <Overlay>
                <Content>
                    <Title>Adicionar tarefa</Title>
                    <form>
                        <div>
                            <label htmlFor="description">Descrição*</label>
                            <input
                                id='description'
                                name='description'
                                placeholder="Qual é tarefa"
                            />
                        </div>
                        <div className="options">
                            <Close>Cancelar</Close>
                            <button type="submit">Cadastrar</button>
                        </div>
                    </form>
                </Content>
            </Overlay>
        </Dialog.Portal>

    )
}