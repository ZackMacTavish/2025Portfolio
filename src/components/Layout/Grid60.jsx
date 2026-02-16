import styled from 'styled-components';

// Grid60: a centered container using the portfolio's 60vw grid, capped at 1100px
// - On mobile, it expands to 92vw for comfortable margins
// - Use as a generic wrapper or extend it with styled() for layouts
const Grid60 = styled.div`
  width: 60vw;
  max-width: 1100px;
  margin: 0 auto;
  box-sizing: border-box;

  @media (max-width: 1000px) {
    width: 92vw;
  }
`;

// Grid60TwoCol: optional helper with a responsive two-column grid
// Switches to a single column under 1000px
export const Grid60TwoCol = styled(Grid60)`
  display: grid;
  grid-template-columns: ${(props) => props.columns || '0.48fr 0.52fr'};
  gap: ${(props) => props.gap || '2rem'};
  align-items: ${(props) => props.align || 'center'};

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;

export default Grid60;
