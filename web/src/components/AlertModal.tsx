import * as AlertDialog from '@radix-ui/react-alert-dialog';
import { StyledContent, StyledDescription, StyledOverlay, StyledTitle } from '../styles/alertModalStyles';


interface IAlertDialogProps {
  deleteId: string;
  title: string;
  description: string;
  handleDelete: (id: string) => void;
}

export function AlertModal({ deleteId, title, description, handleDelete }: IAlertDialogProps) {

  return (
    <AlertDialog.Portal>
      <StyledOverlay>
        <StyledContent>
          <StyledTitle>{title}</StyledTitle>
          <StyledDescription>{description}</StyledDescription>
          <div>
            <AlertDialog.Cancel className='cancel'>Cancelar</AlertDialog.Cancel>
            <AlertDialog.Action >
              <button
                className='delete'
                onClick={() => handleDelete(deleteId)}
              >
                Eliminar
              </button>
            </AlertDialog.Action>
          </div>
        </StyledContent>
      </StyledOverlay>
    </AlertDialog.Portal>
  );
}