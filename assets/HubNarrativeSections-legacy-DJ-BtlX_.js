System.register(["./three-legacy-Dbu1oaxp.js","./vendor-legacy-lMxcQOgj.js","./GigaPrimitives-legacy-Dt0OB-jF.js","./CaseStudyIntroCTA-legacy-OZk5Osdr.js","./index-legacy-XUe54GLD.js","./CaseStudyPrimitives-legacy-m2YLdA5E.js"],function(e,t){"use strict";var i,a,n,r,o;return{setters:[e=>{i=e.j},e=>{a=e.c},null,e=>{n=e.C},e=>{r=e.A},e=>{o=e.f}],execute:function(){e({H:function({sections:e,grouped:t=!1,groupedTone:a="muted"}){return t?i.jsx(k,{$tone:a,children:i.jsx(C,{children:e.map(e=>i.jsxs(z,{children:[i.jsx(S,{children:e.heading}),i.jsx(H,{children:e.body})]},e.heading))})}):e.map((e,t)=>i.jsx(k,{$tone:e.tone||(t%2==0?"base":"muted"),children:i.jsxs(T,{children:[i.jsx(S,{children:e.heading}),i.jsx(H,{children:e.body})]})},e.heading))},P:function({imageBaseName:e=null,imageSrc:t="",imageAvif:a=null,imageWebp:n=null,imageAlt:W="",imageWidth:k="38vw",logoTile:T=!1,logoContentWidth:C=null,buttons:z=[],metadata:S=[],divider:H=!0,imageExt:P="jpg",title:A="",imageNaturalWidth:O=null,imageNaturalHeight:D=null,invertOnDark:I=!1}){const M=e?`${e.startsWith("assets/")?"/":"/src/"}${e}`:null,N=M?d(`${M}.avif`):null,B=M?d(`${M}.webp`):null,R=M?d(`${M}.${P||"jpg"}`):null,U=d(a),E=d(n),L=d(t),G=Math.max(O||0,D||0)>900,_=G?o(N):null,q=G?o(B):null,F=G?o(R):null;return i.jsxs(l,{children:[i.jsx(m,{"aria-hidden":"true"}),S.length>0&&i.jsx(h,{"aria-label":"Project details",children:i.jsx(g,{children:S.map(({label:e,value:t})=>i.jsxs("div",{children:[i.jsx(c,{children:e}),i.jsx(p,{children:t})]},e))})}),i.jsxs(s,{className:"first",$logoTile:T,$tileWidth:k,children:[i.jsx(u,{$logoTile:T,children:i.jsx(f,{$enabled:T,$imageWidth:k,children:e?i.jsxs($,{children:[_&&i.jsx("source",{srcSet:_,type:"image/avif",media:"(max-width: 900px)"}),i.jsx("source",{srcSet:N,type:"image/avif"}),q&&i.jsx("source",{srcSet:q,type:"image/webp",media:"(max-width: 900px)"}),i.jsx("source",{srcSet:B,type:"image/webp"}),F&&i.jsx("source",{srcSet:F,media:"(max-width: 900px)"}),i.jsx(w,{src:R,alt:W,$imageWidth:k,$fillTile:T,$logoContentWidth:C,$invertOnDark:I,$naturalWidth:O||void 0,$naturalHeight:D||void 0,width:O||void 0,height:D||void 0,fetchPriority:"high",loading:"eager",decoding:"sync"})]}):i.jsxs($,{children:[U&&i.jsx("source",{srcSet:U,type:"image/avif"}),E&&i.jsx("source",{srcSet:E,type:"image/webp"}),i.jsx(w,{src:L,alt:W,$imageWidth:k,$fillTile:T,$logoContentWidth:C,$invertOnDark:I,width:O||void 0,height:D||void 0,fetchPriority:"high",loading:"eager",decoding:"async"})]})})}),i.jsxs(x,{children:[i.jsx(b,{children:A}),H&&i.jsx(v,{}),i.jsx(y,{children:z.map(({href:e,label:t},a)=>i.jsxs(j,{href:e,target:"_blank",rel:"noopener noreferrer",children:[t," ",i.jsx(r,{style:{marginLeft:6,fontSize:"1.2em"}})]},a))})]})]})]})}});const t=a.div`
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
`;function d(e){if(!e)return e;try{return encodeURI(decodeURI(e))}catch{return encodeURI(e)}}const l=a.section`
  position: relative;
  overflow: visible;
  background-color: ${e=>e.theme.sectionPrimaryMuted};

  @media (max-width: 850px) {
    padding-bottom: 2.75rem;
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0 0 -24vh;
    background:
      linear-gradient(180deg, ${e=>e.theme.projectHeroWash} 0%, transparent 25%),
      linear-gradient(120deg, ${e=>e.theme.projectHeroWash} 0%, ${e=>e.theme.projectHeroWash} 20%, transparent 70%);
    -webkit-mask-image: linear-gradient(to bottom, #000 0%, #000 48%, transparent 100%);
    mask-image: linear-gradient(to bottom, #000 0%, #000 48%, transparent 100%);
    pointer-events: none;
    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }
`,m=a.div`
  width: 100%;
  height: 6rem;
  pointer-events: none;

  @media (max-width: 900px) {
    height: 7rem;
  }
`,s=a.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 64rem;
  min-width: 320px;
  display: grid;
  grid-template-columns: ${e=>e.$logoTile?`${e.$tileWidth} auto`:"1fr 2fr"};
  align-items: center;
  justify-content: flex-start;
  gap: ${e=>e.$logoTile?"2rem":"clamp(2.5rem, 5vw, 5rem)"};
  margin: 0 auto;
  min-height: 20rem;
  padding: 0 1.5rem;

  @media (max-width: 850px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    max-width: 100vw;
    gap: 1.25rem;
    margin: 0 auto;
    min-height: 0;
    padding: 0 1.25rem;
  }
`,h=a.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 64rem;
  margin: 0 auto;
  padding: 0 1.5rem;

  @media (max-width: 480px) {
    padding: 0 1.25rem;
  }
`,g=a.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`,c=a.p`
  margin: 0 0 0.5rem;
  color: ${e=>e.theme.mutedText};
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`,p=a.p`
  margin: 0;
  color: ${e=>e.theme.fontColor};
  font-family: var(--font-mono);
  font-size: 0.875rem;
  line-height: 1.5;
`,x=a.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  gap: 0.5em;
  height: 100%;

  @media (max-width: 850px) {
    width: 100%;
    align-items: center;
    text-align: center;
    gap: 0.625rem;
  }

  background: transparent;
  padding: 0;
`,u=a.div`
  display: flex;
  justify-content: ${e=>e.$logoTile?"flex-start":"center"};
  align-items: center;
  width: 100%;
  max-width: none;
  /* Prevent the flex container from collapsing to zero width on the first
     paint tick (which would make the image's aspect-ratio produce 0 height
     and cause a jump when flex allocates proper space). */
  min-width: ${e=>e.$logoTile?"0":"min(38vw, 100%)"};
  min-height: 0;
  background: transparent;
  padding: 0;
  @media (max-width: 1000px) {
    justify-content: center;
    width: 100%;
    margin-bottom: 0.5rem;
  }
  @media (max-width: 850px) {
    margin-top: 0;
    flex-basis: auto;
    min-height: 0;
    min-width: 0;
    width: 100%;
    padding: 0;
  }
`,$=a.picture`
  display: block;
  width: 100%;
`,f=a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: ${e=>e.$enabled?e.$imageWidth:"none"};
  aspect-ratio: ${e=>e.$enabled?"1 / 1":"auto"};
  margin: ${e=>e.$enabled?"0":"0 auto"};
  overflow: ${e=>e.$enabled?"hidden":"visible"};
  border: ${e=>e.$enabled?`1px solid ${e.theme.border}`:"0"};
  border-radius: ${e=>e.$enabled?"18px":"0"};
  background: ${e=>e.$enabled?e.theme.sectionBase:"transparent"};
  transition: background-color 180ms ease, border-color 180ms ease;

  > picture {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 850px) {
    max-width: ${e=>e.$enabled?"176px":"none"};
    margin: 0 auto;
  }
`,w=a.img`
  width: ${e=>e.$fillTile&&e.$logoContentWidth?e.$logoContentWidth:"100%"};
  max-width: ${e=>e.$fillTile&&e.$logoContentWidth?e.$logoContentWidth:e.$imageWidth||"700px"};
  min-width: 0;
  height: auto;
  border-radius: 18px;
  object-fit: contain;
  display: block;
  margin: 0 auto;
  ${e=>e.$fillTile?"\n    height: auto;\n    border-radius: 0;\n  ":""}
  /* Explicit aspect-ratio prevents layout shift when flex-basis starts at 0.
     The HTML width/height attributes alone aren't enough when the containing
     flex item starts at zero width, so we set it explicitly in CSS too. */
  ${e=>e.$naturalWidth&&e.$naturalHeight?`aspect-ratio: ${e.$naturalWidth} / ${e.$naturalHeight};`:""}
  /* Opt-in: flip a monochrome black logo to white so it pops on the dark
     surface instead of disappearing into it. */
  ${e=>e.$invertOnDark&&"dark"===e.theme.name?"filter: invert(1);":""}
  @media (max-width: 1000px) {
    width: ${e=>e.$fillTile&&e.$logoContentWidth?e.$logoContentWidth:"100%"};
    max-width: ${e=>e.$fillTile&&e.$logoContentWidth?e.$logoContentWidth:"340px"};
    min-width: 0;
    margin: 0 auto;
  }
  @media (max-width: 850px) {
    width: ${e=>e.$fillTile&&e.$logoContentWidth?e.$logoContentWidth:"100%"};
    max-width: ${e=>e.$fillTile&&e.$logoContentWidth?e.$logoContentWidth:"176px"};
    min-width: 0;
    height: auto;
    margin-bottom: 0;
    object-fit: contain;
    border-radius: 18px;
  }
`,b=a.h1`
  font-family: var(--font-display);
  color: ${e=>e.theme.fontColor};
  margin: 0;
  font-size: clamp(2.2rem, 4vw + 0.6rem, 4.25rem);
  line-height: 0.96;
  text-wrap: balance;

  @media (max-width: 850px) {
    font-size: clamp(1.9rem, 8vw, 2.7rem);
    line-height: 1.02;
  }
`,v=a.div`
  height: 1px;
  background: ${e=>e.theme.border};
  width: 48px;
  margin: 0.1em 0 0.3em 0;

  @media (max-width: 850px) {
    margin: 0 auto 0.2rem;
  }
`,j=a(n).attrs({as:"a"})`
  padding-inline: 1.5rem;
  text-decoration: none;
  white-space: nowrap;
  flex-shrink: 0;
`,y=a(t)`
  @media (max-width: 850px) {
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 0.125rem 0 0;

    ${j} {
      min-height: 44px;
      margin: 0;
    }
  }
`,W={base:"sectionBase",muted:"sectionMuted"},k=a.section`
  background: ${e=>e.theme[W[e.$tone]]};
  padding: clamp(4.5rem, 9vh, 7rem) 0;
`,T=a.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 64rem;
  margin: 0 auto;
  padding: 0 1.5rem;

  @media (max-width: 480px) {
    padding: 0 1.25rem;
  }
`,C=a(T)`
  display: grid;
  gap: clamp(3.5rem, 7vh, 5.5rem);
`,z=a.div`
  display: flex;
  flex-direction: column;
`,S=a.h2`
  max-width: 22ch;
  margin: 0 0 1.5rem;
  color: ${e=>e.theme.strongText};
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3.5rem);
  line-height: 1.1;
`,H=a.p`
  max-width: 68ch;
  margin: 0;
  color: ${e=>e.theme.mutedText};
  font-size: var(--type-narrative-size);
  line-height: var(--type-narrative-leading);
`}}});
