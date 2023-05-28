import styled from 'styled-components';

export const ButtonCss = styled.button<{ variant: string }>`
  appearance: none;
  border: none;
  margin-top: 1rem;
  padding: 11px 10px;
  width: 100%;
  border-radius: 5px;
  font-size: 18px;
  color: ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.bgColor};
  &:hover {
    cursor: pointer;
  }
`;
