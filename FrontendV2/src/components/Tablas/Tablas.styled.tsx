import styled from 'styled-components';

export const DivTablas = styled.div<{ variant: string }>`
  width: 100%;
  overflow: auto;
  height: 70vh;
  border-radius: 10px;

  & table {
    width: 100%;
    height: 100%;
    text-align: center;
    background-color: transparent;
    backdrop-filter: blur(15px);
    border-collapse: collapse;
    border: none;
    border-radius: 10px;

    & thead {
      text-transform: capitalize;
      position: sticky;
      top: 0;

      & tr {
        & th {
          padding: 10px 0;
          font-size: 1rem;
          background-color: var(--color-blanco);
          font-weight: 600;
        }
      }
    }
    & tbody {
      & tr {
        & td {
          padding: 10px 0;
          font-size: 0.8rem;

          &::first-letter {
            text-transform: uppercase;
          }
        }

        &:nth-of-type(even) {
          background-color: var(--color-tbl);
        }
      }
    }
  }
`;
