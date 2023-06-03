import styled from 'styled-components';

export const DivPopUp = styled.div<{ variant: string }>`
  position: relative;

  & .popupContainer {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & .popupBackground {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--bg-popup-blur);
    backdrop-filter: blur(5px);
  }

  & .popupContent {
    width: 80%;
    height: 90%;
    background-color: var(--color-blanco);
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 2px 5px var(--bg-popup-shadow);
    position: relative;
    z-index: 10;
    overflow: hidden;

    & .contenedorCerrarPopUp {
      width: 100%;
      height: 25px;
      display: flex;
      place-content: flex-end;

      & button {
        appearance: none;
        border: none;
        background-color: var(--bg-color-blanco-transparent);
        font-size: 1.6rem;

        &:hover {
          cursor: pointer;
        }
      }
    }

    & .contenedorFormulario {
      width: 100%;
      height: 80%;
      overflow: auto;
      padding: 10px;

      & .alinear {
        display: flex;
        gap: 5px;
      }
    }

    & .contenedortitulo {
      width: 100%;
      height: 30px;
      text-align: center;
      &::first-letter {
        text-transform: uppercase;
      }
    }

    & .contenedorbtnAgregar {
      width: 100%;
      display: flex;
      gap: 10px;

      & .column {
        width: 50%;
      }
    }
  }
`;
