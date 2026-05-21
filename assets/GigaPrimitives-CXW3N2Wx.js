import{c as e}from"./vendor-hQudadcW.js";const o=e.a`
  display: inline-flex;
  align-items: center;
  gap: 0.32em;
  background: #111;
  color: #fff;
  font-weight: 600;
  font-size: 0.84rem;
  border: none;
  border-radius: 999px;
  padding: 0.36em 1.18em 0.36em 1.18em;
  margin-top: 0.7em;
  margin-bottom: 0.7em;
  text-decoration: none;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: background 0.2s;
  width: fit-content;
  min-width: 0;
  flex-shrink: 0;
  flex-grow: 0;
  white-space: nowrap;
  &:hover {
    background: #333;
  }
`,a=e.div`
  width: 60vw;
  max-width: 1000px;
  margin: 0 auto 6vh;
  padding: 4vh 4vw 6vh;
  background-color: #f5f5f5;
  border-radius: 24px;

  @media (max-width: 1320px) {
    width: 90vw;
    max-width: 90vw;
  }

  @media (max-width: 850px) {
    width: 100vw;
    max-width: 100vw;
    padding: 4vh 4vw 6vh;
    border-radius: 0;
  }
`,r=e.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  row-gap: 2rem;
  column-gap: 4rem;
  position: relative;

  @media (max-width: 850px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`,d=e.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`,n=e.h3`
  color: ${t=>t.theme.fontColor};
  font-size: 2.25rem;
  margin: 0;

  @media (max-width: 1320px) {
    font-size: 2.1rem;
  }

  @media (max-width: 850px) {
    font-size: 1.8rem;
  }
`,m=e.h6`
  color: ${t=>t.theme.fontColor};
  font-size: 1.125rem;
  margin-top: 0.4rem;

  @media (max-width: 1320px) {
    font-size: 1rem;
  }
  @media (max-width: 850px) {
    font-size: 0.95rem;
  }
  line-height: 1.45;
  font-weight: 400;
  font-family: 'Space Grotesk', sans-serif;

  @media (max-width: 1320px) {
    font-size: 1.15rem;
  }

  @media (max-width: 850px) {
    font-size: 1rem;
  }
`;e.img`
  width: 60vw;
  height: auto;
  grid-row-start: ${t=>t.RowStart};
  grid-row-end: 8;
  align-self: center;
  justify-self: center;
  grid-column-start: ${t=>t.ColumnStart};
  grid-column-end: ${t=>t.ColumnEnd};
  @media (max-width: 850px) {
    grid-row-start: 2;
    grid-row-end: 3;
    grid-column-start: 1;
    width: 95vw;
  }
`;e.h3`
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 7;
  font-size: ${t=>t.Fontsize};
  width: 80vw;
  font-family: 'Space Grotesk', sans-serif;
  justify-self: center;
  align-self: center;
  color: ${t=>t.theme.fontColor};

  @media (max-width: 1400px) {
    font-size: 1.8rem;
  }

  @media (max-width: 850px) {
    grid-column-start: 1;
    grid-row-end: 3;
    font-size: 1.2rem;
    width: 94vw;
    padding-left: 4vw;
    padding-right: 4vw;
    height: auto;
  }
`;const s=e.img.attrs({loading:"lazy",decoding:"async"})`
  width: 60vw;
  box-shadow: 5px 10px 24px rgba(0, 0, 0, 0.3);
  margin-top: 3vh;
  margin-bottom: 3vh;
  border-radius: 24px;

  @media (max-width: 1400px) {
    width: 96vw;
    height: auto;
  }

  @media (max-width: 850px) {
    width: 96vw;
    height: auto;
  }
`;e.div`
  width: 100vw;
  background-color: #2ca0fd;
  grid-row-start: 4;
  grid-row-end: 9;
  z-index: -5;
`;const h=e.div`
  background-color: ${t=>t.theme.backgroundTwo};
`,l=e.div`
  display: flex;
  width: 100vw;
  height: auto;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    height: auto;
  }
`;e.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2vw;
  padding: 8vh 4vw;

  @media (max-width: 1000px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 12vh 4vw 12vh 4vw;
    gap: 3vh;
  }
`;e.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  max-width: 600px;

  @media (max-width: 1000px) {
    align-items: center;
    text-align: left;
    margin-bottom: 2vh;
  }
`;e.img`
  width: ${t=>t.Width};
  height: auto;

  @media (max-width: 1000px) {
    width: 80vw;
  }
`;const w=e.h2`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 4.5rem;
  color: ${t=>t.theme.fontColor};
  margin: 0;

  @media (max-width: 850px) {
    font-size: 3rem;
  }
`;e.a`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.4rem;
  color: ${t=>t.theme.fontColor};
  text-decoration: none;
  margin-top: 1vh;

  &:hover {
    opacity: 0.75;
  }
`;export{l as C,a as P,s as R,h as S,r as a,d as b,n as c,m as d,w as e,o as f};
