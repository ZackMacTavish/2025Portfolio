import styled from 'styled-components';

// 2-column grid for buttons on desktop, 1 column on mobile
export const ButtonsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.7em 0.7em;
  margin-bottom: 0.5em;
  max-width: 520px;
  width: auto;
  align-items: center;
  justify-items: start;
  @media (max-width: 850px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    max-width: 100%;
    justify-items: stretch;
  }
`;
