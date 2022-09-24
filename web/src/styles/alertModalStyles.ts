import * as AlertDialog from '@radix-ui/react-alert-dialog';
import styled from 'styled-components';



export const StyledOverlay = styled(AlertDialog.Overlay)`
  background: rgba(0 0 0 / 0.5);
    position: fixed;
    inset: 0;
    display: flex;
    align-items: start;
    justify-content:center;
`;

export const AlertTrigger = styled(AlertDialog.Trigger)`    
    background-color: transparent;
    border: none;
`

export const StyledContent = styled(AlertDialog.Content)`
  background-color: var(--white);
  border-radius: 1rem;

  margin-top: 4rem;	
  max-width: 500px;
  max-height: 85vh;
  padding: 2.5rem;

  > div{
    display: flex;
    justify-content: end;

    .cancel{
      background-color: var(--gray-300);
    }

    .delete{
      background-color: var(--red-200);
      color: var(--red-600);
    }
  }
  button{
    all: unset;
    border-radius: .4rem;
    padding: 0 15px;
    font-size: 1.2rem;
    font-weight: 600;
    height: 2.5rem;
  } 

`

export const StyledTitle = styled(AlertDialog.Title)`
  margin: 0;
  color: var(--red-600);
  font-size: 1.7rem;
  font-weight: 600;
`

export const StyledDescription = styled(AlertDialog.Description)`
  margin: 1.5rem 0;
  color: #1c1c1c;
  font-size: 1.4rem;
  line-height: 1.5;
`