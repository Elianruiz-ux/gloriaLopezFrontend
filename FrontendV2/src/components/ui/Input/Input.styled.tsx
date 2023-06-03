import styled from 'styled-components';

export const Inputcss = styled.div<{ variant: string }>`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.theme.ancho};
  position: static;

  & label.text {
    font-size: 0.8rem;
    color: ${(props) => props.theme.color_texto};
    font-weight: 700;
    position: relative;
    top: 0.5rem;
    margin: 0 0 0 10px;
    padding: 0 3px;
    background-color: ${(props) => props.theme.color_fondo};
    width: fit-content;

    &::first-letter {
      text-transform: uppercase;
    }
  }

  & input.input {
    padding: 11px 10px;
    font-size: 0.77rem;
    border: 1.5px ${(props) => props.theme.color_borde} solid;
    border-radius: 5px;
    background-color: ${(props) => props.theme.color_fondo};
  }

  & input.input:focus {
    outline: none;
  }
`;
