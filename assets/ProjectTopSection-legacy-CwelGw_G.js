System.register(["./three-legacy-DtSyZuBP.js","./vendor-legacy-BmQ_CjD0.js","./GigaPrimitives-legacy-DFSqQ_NA.js","./index-legacy-DQy0XVbu.js","./CaseStudyPrimitives-legacy-4kh-ecEK.js"],function(e,i){"use strict";var t,a,n,r,d;return{setters:[e=>{t=e.j},e=>{a=e.c},e=>{n=e.f},e=>{r=e.a},e=>{d=e.f}],execute:function(){e("P",function({imageBaseName:e=null,imageSrc:a="",imageAvif:x=null,imageWebp:p=null,imageAlt:w="",$imageWidth:u="38vw",buttons:f=[],divider:v=!0,imageExt:j="jpg",title:y=""}){const b=e?`${e.startsWith("assets/")?"/":"/src/"}${e}`:null,S=b?m(`${b}.avif`):null,$=b?m(`${b}.webp`):null,k=b?m(`${b}.${j||"jpg"}`):null,P=d(S),W=d($),z=d(k);return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"mobile-nav-spacer",style:{display:"block",width:"100%",height:"12vh",minHeight:0,padding:0,margin:0,background:"transparent",zIndex:0,pointerEvents:"none",position:"relative"}}),t.jsxs(s,{className:"first",children:[t.jsxs(h,{children:[t.jsx(g,{children:y}),v&&t.jsx(l,{}),t.jsx(i,{children:f.map(({href:e,label:i},a)=>t.jsxs(n,{href:e,target:"_blank",rel:"noopener noreferrer",children:[i," ",t.jsx(r,{style:{marginLeft:6,fontSize:"1.2em"}})]},a))})]}),t.jsx(c,{children:e?t.jsxs("picture",{children:[P&&t.jsx("source",{srcSet:P,type:"image/avif",media:"(max-width: 900px)"}),t.jsx("source",{srcSet:S,type:"image/avif"}),W&&t.jsx("source",{srcSet:W,type:"image/webp",media:"(max-width: 900px)"}),t.jsx("source",{srcSet:$,type:"image/webp"}),z&&t.jsx("source",{srcSet:z,media:"(max-width: 900px)"}),t.jsx(o,{src:k,alt:w,$imageWidth:u,fetchPriority:"high",loading:"eager",decoding:"async"})]}):t.jsx(o,{src:m(a),alt:w,$imageWidth:u,fetchPriority:"high",loading:"eager",decoding:"async"})})]})]})});const i=a.div`
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
`;function m(e){if(!e)return e;try{return encodeURI(decodeURI(e))}catch{return encodeURI(e)}}const s=a.div`
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
`,h=a.div`
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
`,c=a.div`
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
`,o=a.img`
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
`,g=a.h1`
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
`,l=a.div`
  height: 1px;
  background: #e0e0e0;
  width: 48px;
  margin: 0.1em 0 0.3em 0;

  @media (max-width: 850px) {
    margin: 0 auto 0.2rem;
  }
`}}});
