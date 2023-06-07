import styled from 'styled-components';

export const DivCartaLogin = styled.div<{ variant: string }>`
  width: 400px;
  height: 400px;
  background-color: var(--bg-color-blanco-transparent);
  backdrop-filter: blur(5px);
  box-shadow: 0 7px 20px 1px var(--color-sombra);
  border-radius: 10px;
  display: flex;
  padding: 15px 10px;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;

  & header {
    width: 100%;
    height: 20%;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
  }
  & main {
    width: 100%;
    height: ${(props) => (props.variant == 'registro' ? `80%` : `50%`)};

    & .alinear {
      ${(props) => props.variant == 'registro' && `display:flex; gap: 5px;`}
    }
  }
  & footer {
    width: 100%;
    height: 10%;
    text-align: center;
    font-size: 16px;

    & a {
      color: var(--color-azul-txt);
    }

    & button {
      appearance: none;
      border: none;
      background-color: var(--bg-color-blanco-transparent);
      font-size: 16px;
      color: var(--color-azul-txt);
      text-decoration: underline;
      &:hover {
        cursor: pointer;
      }
    }
  }
`;
