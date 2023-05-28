import styled from 'styled-components';

export const Nav = styled.nav<{ variant: string }>`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-items: center;
  padding: 0 20px;
  color: var(--txt-color-negro);
  background-color: transparent;

  & .columna {
    width: 50%;
  }

  & .ContenedorLogo {
    position: relative;

    & .tijeras {
      position: absolute;
      transform: translate(100px, -45px) rotate(150deg);
      font-size: 1.4rem;
    }

    & .titulo {
      width: 100px;
      letter-spacing: -0.5px;
      font-weight: 600;
      border-bottom: 2px solid var(--color-general-uno);
    }

    & .subtitulo {
      padding: 2px;
      width: 100px;
      letter-spacing: -0.5px;
      font-size: 0.7rem;
      margin-left: 1rem;
      font-weight: 600;
      border-left: 2px solid var(--color-general-uno);
      border-bottom: 2px solid var(--color-general-uno);
    }
  }

  & .contenedorImg {
    width: 120px;

    & .img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
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
        color: var(--txt-color-negro);
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
