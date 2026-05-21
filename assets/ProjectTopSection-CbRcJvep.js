import{j as t}from"./three-CIqbc5c4.js";import{c as e}from"./vendor-hQudadcW.js";import{f as v}from"./GigaPrimitives-CXW3N2Wx.js";import{r as j}from"./index-B8bbBv4X.js";const y=e.div`
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
`;function a(i){if(!i)return i;try{return encodeURI(decodeURI(i))}catch{return encodeURI(i)}}const b=e.div`
  width: 60vw;
  max-width: 1000px;
  min-width: 320px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 1vw;
  margin: 0 auto 4vh auto;
  padding-top: 0;
  @media (max-width: 1320px) {
    width: 90vw;
    max-width: 90vw;
  }
    @media (max-width: 850px) {
      flex-direction: column-reverse;
      align-items: stretch;
      width: 100vw;
      max-width: 100vw;
      gap: 2vh;
      margin: 0 auto 4vh auto;
      padding-left: 2vw;
      padding-right: 2vw;
      padding-top: 0;
    }
`,S=e.div`
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  gap: 0.5em;
  height: 100%;

  @media (max-width: 850px) {
    width: min(40rem, 100%);
    align-items: center;
    text-align: center;
    gap: 0.75rem;
    }
      background: white;
      padding: 0;
`,I=e.div`
  flex: 2 1 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: none;
  min-width: 0;
  min-height: 0;
  background: white;
  padding: 0;
  @media (max-width: 1000px) {
    justify-content: center;
    width: 100%;
    margin-bottom: 2rem;
  }
  @media (max-width: 850px) {
    margin-top: 0;
    flex-basis: auto;
    min-height: 0;
    min-width: 0;
    width: 100%;
    padding: 0;
  }
`,d=e.img`
  width: 100%;
  max-width: 700px;
  min-width: 0;
  height: auto;
  border-radius: 18px;
  object-fit: contain;
  display: block;
  margin: 0 auto;
  @media (max-width: 1000px) {
    width: 98vw;
    max-width: 98vw;
    min-width: 0;
    margin: 0 auto;
  }
  @media (max-width: 850px) {
    width: 100%;
    max-width: 100vw;
    min-width: 0;
    height: auto;
    margin-bottom: 0;
    object-fit: contain;
    border-radius: 18px;
  }
`,k=e.h1`
  font-family: 'Space Grotesk', sans-serif;
  color: ${i=>i.theme.fontColor};
  margin: 0;
  font-size: clamp(2.2rem, 4vw + 0.6rem, 4.25rem);
  line-height: 0.96;
  text-wrap: balance;

  @media (max-width: 850px) {
    font-size: clamp(1.9rem, 8vw, 2.7rem);
    line-height: 1.02;
  }
`,z=e.div`
  height: 1px;
  background: #e0e0e0;
  width: 48px;
  margin: 0.1em 0 0.3em 0;

  @media (max-width: 850px) {
    margin: 0 auto 0.2rem;
  }
`;function C({imageBaseName:i=null,imageSrc:m="",imageAvif:T=null,imageWebp:$=null,imageAlt:r="",$imageWidth:o="38vw",buttons:s=[],divider:c=!0,imageExt:h="jpg",title:l=""}){const n=i?`${i.startsWith("assets/")?"/":"/src/"}${i}`:null,p=n?a(`${n}.avif`):null,x=n?a(`${n}.webp`):null,g=n?a(`${n}.${h||"jpg"}`):null;return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"mobile-nav-spacer",style:{display:"block",width:"100%",height:"12vh",minHeight:0,padding:0,margin:0,background:"transparent",zIndex:0,pointerEvents:"none",position:"relative"}}),t.jsxs(b,{className:"first",children:[t.jsxs(S,{children:[t.jsx(k,{children:l}),c&&t.jsx(z,{}),t.jsx(y,{children:s.map(({href:w,label:f},u)=>t.jsxs(v,{href:w,target:"_blank",rel:"noopener noreferrer",children:[f," ",t.jsx(j,{style:{marginLeft:6,fontSize:"1.2em"}})]},u))})]}),t.jsx(I,{children:i?t.jsxs("picture",{children:[t.jsx("source",{srcSet:p,type:"image/avif"}),t.jsx("source",{srcSet:x,type:"image/webp"}),t.jsx(d,{src:g,alt:r,$imageWidth:o,fetchpriority:"high",loading:"eager",decoding:"async"})]}):t.jsx(d,{src:a(m),alt:r,$imageWidth:o,fetchpriority:"high",loading:"eager",decoding:"async"})})]})]})}export{C as P};
