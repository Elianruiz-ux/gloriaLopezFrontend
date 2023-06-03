import styled from 'styled-components';

export const DivCarta = styled.div<{ variant?: string }>`
  width: 300px;
  height: 250px;
  background-color: var(--bg-color-blanco-transparent);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  box-shadow: 0 0px 10px 2px var(--color-general-dos-sombra);
  overflow: hidden;

  & a {
    text-decoration: none;
    color: var(--color-negro);
  }

  & .contenedorImg {
    padding: 10px;
    width: 100%;
    height: 80%;
    overflow: hidden;
    display: flex;
    place-content: center;
    place-items: center;

    & .containerImg {
      width: 150px;
      height: 150px;

      & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  & .contenedorTexto {
    width: 100%;
    height: 100%;
    text-align: center;
    text-transform: capitalize;
  }
`;
