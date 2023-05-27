import styled from 'styled-components';

export const Nav = styled.nav<{ variant: string }>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  color: var(--txt-color-negro);
  background-color: transparent;

  & .columna {
    width: 50%;
  }

  & ul {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  & .objetosNabVar {
    display: flex;
    gap: 30px;
    & li {
      list-style: none;
      letter-spacing: 1px;

      &::first-letter {
        text-transform: uppercase;
      }

      & a {
        font-weight: 100;
        text-decoration: none;
        padding: 5px 10px;
      }

      & .iniciar {
        border-radius: 5px;
        border: 1.5px solid var(--color-borde-dos);
      }

      & .registro {
        border-radius: 5px;
        color: var(--bg-color-blanco);
        background-color: var(--color-general-dos);
      }
    }
  }
`;
