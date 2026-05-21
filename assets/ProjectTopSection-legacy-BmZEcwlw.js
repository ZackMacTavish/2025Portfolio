(function(){System.register(["./three-legacy-B14H55ob.js","./vendor-legacy-BOFKzYT_.js","./GigaPrimitives-legacy-Cdztag21.js","./index-legacy-2Abikzkg.js"],function(w,P){"use strict";var t,i,d,o,m,s,c,h,r,l,g;function a(e){if(!e)return e;try{return encodeURI(decodeURI(e))}catch{return encodeURI(e)}}function u({imageBaseName:e=null,imageSrc:f="",imageAvif:R=null,imageWebp:U=null,imageAlt:p="",$imageWidth:x="38vw",buttons:v=[],divider:j=!0,imageExt:y="jpg",title:b=""}){const n=e?`${e.startsWith("assets/")?"/":"/src/"}${e}`:null,S=n?a(`${n}.avif`):null,I=n?a(`${n}.webp`):null,k=n?a(`${n}.${y||"jpg"}`):null;return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"mobile-nav-spacer",style:{display:"block",width:"100%",height:"12vh",minHeight:0,padding:0,margin:0,background:"transparent",zIndex:0,pointerEvents:"none",position:"relative"}}),t.jsxs(s,{className:"first",children:[t.jsxs(c,{children:[t.jsx(l,{children:b}),j&&t.jsx(g,{}),t.jsx(m,{children:v.map(({href:z,label:T},$)=>t.jsxs(d,{href:z,target:"_blank",rel:"noopener noreferrer",children:[T," ",t.jsx(o,{style:{marginLeft:6,fontSize:"1.2em"}})]},$))})]}),t.jsx(h,{children:e?t.jsxs("picture",{children:[t.jsx("source",{srcSet:S,type:"image/avif"}),t.jsx("source",{srcSet:I,type:"image/webp"}),t.jsx(r,{src:k,alt:p,$imageWidth:x,fetchpriority:"high",loading:"eager",decoding:"async"})]}):t.jsx(r,{src:a(f),alt:p,$imageWidth:x,fetchpriority:"high",loading:"eager",decoding:"async"})})]})]})}return w("P",u),{setters:[function(e){t=e.j},function(e){i=e.c},function(e){d=e.f},function(e){o=e.r}],execute:function(){m=i.div`
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
`,s=i.div`
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
`,c=i.div`
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
`,h=i.div`
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
`,r=i.img`
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
`,l=i.h1`
  font-family: 'Space Grotesk', sans-serif;
  color: ${e=>e.theme.fontColor};
  margin: 0;
  font-size: clamp(2.2rem, 4vw + 0.6rem, 4.25rem);
  line-height: 0.96;
  text-wrap: balance;

  @media (max-width: 850px) {
    font-size: clamp(1.9rem, 8vw, 2.7rem);
    line-height: 1.02;
  }
`,g=i.div`
  height: 1px;
  background: #e0e0e0;
  width: 48px;
  margin: 0.1em 0 0.3em 0;

  @media (max-width: 850px) {
    margin: 0 auto 0.2rem;
  }
`}}})})();
