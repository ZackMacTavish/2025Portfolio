import{c as a}from"./vendor-hQudadcW.js";const t=a.div`
  width: 60vw;
  max-width: 1100px;
  margin: 0 auto;
  box-sizing: border-box;

  @media (max-width: 1000px) {
    width: 92vw;
  }
`,d=a(t)`
  display: grid;
  grid-template-columns: ${i=>i.columns||"0.48fr 0.52fr"};
  gap: ${i=>i.gap||"2rem"};
  align-items: ${i=>i.align||"center"};

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;export{d as G,t as a};
