import styled from 'styled-components';

export const DivPaginaReportes = styled.div`
  width: 100%;
  height: 100vmin;

  & .contenedorGeneral {
    padding: 1%;

    & .contendortitulo {
      width: 100%;
      text-align: center;
      &::first-letter {
        text-transform: uppercase;
      }
    }

    & .contenedorFiltros {
      width: 100%;
      height: 70px;
      display: flex;

      & .contenedorBtn {
        width: 150px;
      }
    }

    & .contenedorReportes {
      width: 100%;
    }
  }
`;
