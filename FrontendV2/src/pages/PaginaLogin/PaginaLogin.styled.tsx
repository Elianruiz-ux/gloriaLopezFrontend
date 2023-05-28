import styled from 'styled-components';

export const DivPaginaLogin = styled.div`
  width: 100%;
  height: 100vmin;
  background-color: #ffffff;
  /* opacity: 0.5; */
  background-image: repeating-radial-gradient(circle at 0 0, transparent 0, #ffffff 320px),
    repeating-linear-gradient(#eb1d3514, #eb1d352d);

  & .contenedorFormulario {
    width: 100%;
    height: 80%;
    display: grid;
    place-content: center;
    place-items: center;
  }
`;
