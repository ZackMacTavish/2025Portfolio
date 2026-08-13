System.register(["./vendor-legacy-lMxcQOgj.js"],function(i,t){"use strict";var e;return{setters:[i=>{e=i.c}],execute:function(){e.a`
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
`,i("a",e.div`
  width: 60vw;
  max-width: 1000px;
  margin: 0 auto 6vh;
  padding: 4vh 4vw 6vh;
  background-color: ${i=>i.theme.surfaceMuted};
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
`),i("b",e.div`
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
`),i("c",e.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`),i("d",e.h3`
  color: ${i=>i.theme.fontColor};
  font-size: 2.25rem;
  margin: 0;

  @media (max-width: 1320px) {
    font-size: 2.1rem;
  }

  @media (max-width: 850px) {
    font-size: 1.8rem;
  }
`),i("e",e.h6`
  color: ${i=>i.theme.fontColor};
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
  font-family: var(--font-body);

  @media (max-width: 1320px) {
    font-size: 1.15rem;
  }

  @media (max-width: 850px) {
    font-size: 1rem;
  }
`),e.img`
  width: 60vw;
  height: auto;
  grid-row-start: ${i=>i.RowStart};
  grid-row-end: 8;
  align-self: center;
  justify-self: center;
  grid-column-start: ${i=>i.ColumnStart};
  grid-column-end: ${i=>i.ColumnEnd};
  @media (max-width: 850px) {
    grid-row-start: 2;
    grid-row-end: 3;
    grid-column-start: 1;
    width: 95vw;
  }
`,e.h3`
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 7;
  font-size: ${i=>i.Fontsize};
  width: 80vw;
  font-family: var(--font-display);
  justify-self: center;
  align-self: center;
  color: ${i=>i.theme.fontColor};

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
`,e.img.attrs({loading:"lazy",decoding:"async"})`
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
`,e.div`
  width: 100vw;
  background-color: #2ca0fd;
  grid-row-start: 4;
  grid-row-end: 9;
  z-index: -5;
`,i("S",e.div`
  background-color: ${i=>i.theme.backgroundTwo};
`),e.div`
  display: flex;
  width: 100vw;
  height: auto;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    height: auto;
  }
`,e.div`
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
`,e.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  max-width: 600px;

  @media (max-width: 1000px) {
    align-items: center;
    text-align: left;
    margin-bottom: 2vh;
  }
`,e.img`
  width: ${i=>i.Width};
  height: auto;

  @media (max-width: 1000px) {
    width: 80vw;
  }
`,i("P",e.h2`
  font-family: var(--font-display);
  font-size: 4.5rem;
  color: ${i=>i.theme.fontColor};
  margin: 0;

  @media (max-width: 850px) {
    font-size: 3rem;
  }
`),e.a`
  font-family: var(--font-body);
  font-size: 1.4rem;
  color: ${i=>i.theme.fontColor};
  text-decoration: none;
  margin-top: 1vh;

  &:hover {
    opacity: 0.75;
  }
`}}});
