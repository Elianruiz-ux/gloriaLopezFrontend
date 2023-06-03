import styled from 'styled-components';

export const DivPaginaInicialLogueoAdministrador = styled.div`
  width: 100%;
  height: 100vmin;
  & .contenedorGeneral {
    padding: 1%;
    display: grid;
    place-content: center;

    & .contendorCartas {
      width: 100%;
      max-width: 1024px;
      /* height: 70vh; */
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(2, 1fr);
      place-content: center;
      place-items: center;
      gap: 30px;
    }
  }
`;
