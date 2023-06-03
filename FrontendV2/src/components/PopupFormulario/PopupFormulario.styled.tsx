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
    height: 80%;
    background-color: var(--color-blanco);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 5px var(--bg-popup-shadow);
    position: relative;
    z-index: 10;
  }
`;
