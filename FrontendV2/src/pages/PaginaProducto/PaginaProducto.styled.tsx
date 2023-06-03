import styled from 'styled-components';

export const DivProducto = styled.div`
  width: 100%;
  height: 100vmin;

  & .contenedorGeneral {
    padding: 1%;

    & .contenedorFiltros {
      width: 100%;
      height: 70px;
      display: flex;

      & .contenedorBtn {
        width: 150px;
      }
    }

    & .contenedorTabla {
      width: 100%;
    }
  }
`;
