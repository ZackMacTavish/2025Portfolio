System.register(["./three-legacy-Dbu1oaxp.js","./vendor-legacy-lMxcQOgj.js","./metadata-legacy-DhvV8ong.js","./CaseStudyPrimitives-legacy-m2YLdA5E.js","./GigaPrimitives-legacy-DQgng_JI.js","./CaseStudyIntroCTA-legacy-BjL6Tl4c.js","./index-legacy-C8w4uAXj.js","./PortfolioCardsSection-legacy-B-3xuC04.js"],function(e,i){"use strict";var t,a,n,r,o,s,d,c,l,m,p,h,u,g,x,w,y,f,v,b,j,k,I,S,C,z,$,R,P,L,T,V;return{setters:[e=>{t=e.j,a=e._},e=>{n=e.c,r=e.e,o=e.b,s=e.R,d=e.l},e=>{c=e.E,l=e.s,m=e.p},e=>{p=e.f,h=e.T,u=e.S,g=e.F,x=e.a,w=e.R},e=>{y=e.S,f=e.a,v=e.b,b=e.c,j=e.d,k=e.e},e=>{I=e.C,S=e.a},e=>{C=e.z,z=e.x,$=e.t,R=e.y,P=e.C,L=e.w,T=e.A},e=>{V=e.P}],execute:function(){const U=""+new URL("Copilot style GRP-BosxFHQg.png",i.meta.url).href,M=""+new URL("Copilot style GRP-DowTFPoE.avif",i.meta.url).href,A=""+new URL("Copilot style GRP-s_4NMnd3.webp",i.meta.url).href,W=""+new URL("HP-Ck0dhCe7.png",i.meta.url).href,E=""+new URL("HP-CEl-KKvF.avif",i.meta.url).href,F=""+new URL("HP-B_oOarUu.webp",i.meta.url).href,B=""+new URL("Wallet-XTCp021N.png",i.meta.url).href,D=""+new URL("Wallet-5CNdOCa-.avif",i.meta.url).href,H=""+new URL("Wallet-BgqKW0ov.webp",i.meta.url).href,N=""+new URL("Ruby-BRMz_asY.png",i.meta.url).href,O=""+new URL("Ruby-DNkWeBUd.avif",i.meta.url).href,J=""+new URL("Ruby-Bv_l2Gu8.webp",i.meta.url).href,G=""+new URL("ReceiptScan-C-C8E7EX.png",i.meta.url).href,_=""+new URL("ReceiptScan-Wv6bqvXe.avif",i.meta.url).href,K=""+new URL("ReceiptScan-_45Kgagg.webp",i.meta.url).href,q=""+new URL("ShoppingCopilot-LmtofWTU.png",i.meta.url).href,X=""+new URL("ShoppingCopilot-yKuhCNsH.avif",i.meta.url).href,Q=""+new URL("ShoppingCopilot-BlSa8vEq.webp",i.meta.url).href,Y=""+new URL("Outlook-BIfrrwLP.png",i.meta.url).href,Z=""+new URL("Outlook-rNhdafsz.avif",i.meta.url).href,ee=""+new URL("Outlook-DTyC7tTV.webp",i.meta.url).href,ie=n.div`
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
`;function te(e){if(!e)return e;try{return encodeURI(decodeURI(e))}catch{return encodeURI(e)}}const ae=n.section`
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
`,ne=n.div`
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
    align-items: center;
    width: 100vw;
    max-width: 100vw;
    gap: 1.25rem;
    margin: 0 auto;
    padding: 0 1.25rem;
    box-sizing: border-box;
  }
`,re=n.div`
  flex: 1 1 0;
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
`,oe=n.div`
  flex: 2 1 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: none;
  /* Prevent the flex container from collapsing to zero width on the first
     paint tick (which would make the image's aspect-ratio produce 0 height
     and cause a jump when flex allocates proper space). */
  min-width: min(38vw, 100%);
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
`,se=n.picture`
  display: block;
  width: 100%;
`,de=n.img`
  width: 100%;
  max-width: ${e=>e.$imageWidth||"700px"};
  min-width: 0;
  height: auto;
  border-radius: 18px;
  object-fit: contain;
  display: block;
  margin: 0 auto;
  /* Explicit aspect-ratio prevents layout shift when flex-basis starts at 0.
     The HTML width/height attributes alone aren't enough when the containing
     flex item starts at zero width, so we set it explicitly in CSS too. */
  ${e=>e.$naturalWidth&&e.$naturalHeight?`aspect-ratio: ${e.$naturalWidth} / ${e.$naturalHeight};`:""}
  /* Opt-in: flip a monochrome black logo to white so it pops on the dark
     surface instead of disappearing into it. */
  ${e=>e.$invertOnDark&&"dark"===e.theme.name?"filter: invert(1);":""}
  @media (max-width: 1000px) {
    width: 100%;
    max-width: 340px;
    min-width: 0;
    margin: 0 auto;
  }
  @media (max-width: 850px) {
    width: 100%;
    max-width: 176px;
    min-width: 0;
    height: auto;
    margin-bottom: 0;
    object-fit: contain;
    border-radius: 18px;
  }
`,ce=n.h1`
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
`,le=n.div`
  height: 1px;
  background: ${e=>e.theme.border};
  width: 48px;
  margin: 0.1em 0 0.3em 0;

  @media (max-width: 850px) {
    margin: 0 auto 0.2rem;
  }
`,me=n(I).attrs({as:"a"})`
  padding-inline: 1.5rem;
  text-decoration: none;
  white-space: nowrap;
  flex-shrink: 0;
`,pe=n(ie)`
  @media (max-width: 850px) {
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 0.125rem 0 0;

    ${me} {
      min-height: 44px;
      margin: 0;
    }
  }
`;function he({imageBaseName:e=null,imageSrc:i="",imageAvif:a=null,imageWebp:n=null,imageAlt:r="",$imageWidth:o="38vw",buttons:s=[],divider:d=!0,imageExt:c="jpg",title:l="",imageNaturalWidth:m=null,imageNaturalHeight:h=null,invertOnDark:u=!1}){const g=e?`${e.startsWith("assets/")?"/":"/src/"}${e}`:null,x=g?te(`${g}.avif`):null,w=g?te(`${g}.webp`):null,y=g?te(`${g}.${c||"jpg"}`):null,f=Math.max(m||0,h||0)>900,v=f?p(x):null,b=f?p(w):null,j=f?p(y):null;return t.jsxs(ae,{children:[t.jsx("div",{className:"mobile-nav-spacer",style:{display:"block",width:"100%",height:"12vh",minHeight:0,padding:0,margin:0,background:"transparent",zIndex:0,pointerEvents:"none",position:"relative"}}),t.jsxs(ne,{className:"first",children:[t.jsxs(re,{children:[t.jsx(ce,{children:l}),d&&t.jsx(le,{}),t.jsx(pe,{children:s.map(({href:e,label:i},a)=>t.jsxs(me,{href:e,target:"_blank",rel:"noopener noreferrer",children:[i," ",t.jsx(C,{style:{marginLeft:6,fontSize:"1.2em"}})]},a))})]}),t.jsx(oe,{children:e?t.jsxs(se,{children:[v&&t.jsx("source",{srcSet:v,type:"image/avif",media:"(max-width: 900px)"}),t.jsx("source",{srcSet:x,type:"image/avif"}),b&&t.jsx("source",{srcSet:b,type:"image/webp",media:"(max-width: 900px)"}),t.jsx("source",{srcSet:w,type:"image/webp"}),j&&t.jsx("source",{srcSet:j,media:"(max-width: 900px)"}),t.jsx(de,{src:y,alt:r,$imageWidth:o,$invertOnDark:u,$naturalWidth:m||void 0,$naturalHeight:h||void 0,width:m||void 0,height:h||void 0,fetchPriority:"high",loading:"eager",decoding:"sync"})]}):t.jsx(de,{src:te(i),alt:r,$imageWidth:o,width:m||void 0,height:h||void 0,fetchPriority:"high",loading:"eager",decoding:"async"})})]})]})}function ue(e){try{return encodeURI(decodeURI(e))}catch{return encodeURI(e)}}const ge=n.section`
  background: ${e=>e.theme.sectionMuted};
  padding: 8rem 0;
  display: flex;
  align-items: center;

  @media (max-width: 1023px) {
    padding: 5.5rem 0;
  }

  @media (max-width: 640px) {
    padding: 4.5rem 0;
  }

  @media (min-width: 768px) {
    padding: 10rem 0;
  }
`,xe=n.div`
  box-sizing: border-box;
  max-width: 84rem;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;

  @media (max-width: 1023px) {
    gap: 2rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
`,we=n.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 1023px) {
    gap: 1.1rem;
    max-width: 64ch;
    margin: 0 auto;
  }
`,ye=n(L.h2)`
  font-family: var(--font-display);
  font-size: clamp(1.85rem, 4vw, 2.25rem);
  font-weight: 700;
  line-height: 1.2;
  color: ${e=>e.theme.strongText};
  margin: 0;

  @media (min-width: 768px) {
    font-size: 3rem;
  }

  @media (min-width: 1024px) {
    font-size: 3.5rem;
  }
`,fe=n(L.p)`
  font-size: var(--type-narrative-size);
  line-height: var(--type-narrative-leading);
  color: ${e=>e.theme.mutedText};
  margin: 0;
  max-width: 62ch;
`,ve=n(L.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  overflow: hidden;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 1023px) {
    order: -1;
    margin-bottom: 0.5rem;
  }
`,be=n.picture`
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;function je({onLaunch:e}){const i=ue("/assets/business-connectors/Connectors1.avif"),a=ue("/assets/business-connectors/Connectors1.webp"),n=ue("/assets/business-connectors/Connectors1.jpg"),r=ue("/assets/business-connectors/Connectors1-mobile-900.avif"),o=ue("/assets/business-connectors/Connectors1-mobile-900.webp"),s=ue("/assets/business-connectors/Connectors1-mobile-900.jpg");return t.jsx(ge,{children:t.jsxs(xe,{children:[t.jsxs(we,{children:[t.jsx(ye,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7},children:"Business Connectors"}),t.jsx(fe,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.1},children:"Within Microsoft Copilot, I designed Business Connectors—an intelligent system that empowers users to connect loyalty accounts across merchants and unlock personalized perks, discounts, and rewards."}),t.jsx(fe,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.2},children:"This work demonstrates how thoughtful interaction design and AI integration create genuine value for users by reducing friction and consolidating loyalty rewards into Copilot."}),t.jsxs(I,{type:"button",initial:{opacity:0,y:10},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.3},onClick:e,children:["See Case Study ",t.jsx(S,{children:"→"})]})]}),t.jsx(ve,{initial:{opacity:0,scale:.95},whileInView:{opacity:1,scale:1},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.1},children:t.jsxs(be,{children:[t.jsx("source",{srcSet:r,type:"image/avif",media:"(max-width: 900px)"}),t.jsx("source",{srcSet:i,type:"image/avif"}),t.jsx("source",{srcSet:o,type:"image/webp",media:"(max-width: 900px)"}),t.jsx("source",{srcSet:a,type:"image/webp"}),t.jsx("source",{srcSet:s,media:"(max-width: 900px)"}),t.jsx("img",{src:n,alt:"Business Connectors interface design",loading:"lazy",decoding:"async"})]})})]})})}function ke(){const e=r(),[i,a]=o.useState(!1),n=$[0];return o.useEffect(()=>{z(n.transitionImages)},[n.transitionImages]),t.jsxs(t.Fragment,{children:[t.jsx(je,{onLaunch:async()=>{await R(n.transitionImages)?a(!0):e("/BusinessConnectors")}}),i&&t.jsx(P,{images:n.transitionImages,isActive:!0,onComplete:()=>e("/BusinessConnectors"),layoutId:n.slug,sharedSourceImageSrc:n.coverImage.src})]})}const Ie=n.section`
  background: ${e=>e.theme.sectionAccent};
  padding: 8rem 0;

  @media (max-width: 640px) {
    padding: 4.5rem 0;
  }
`,Se=n.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 84rem;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
`,Ce=n.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,ze=n(L.h2)`
  font-family: var(--font-display);
  margin: 0;
  color: ${e=>e.theme.strongText};
  font-size: clamp(2rem, 4vw, 3.5rem);
  line-height: 1.15;
`,$e=n(L.p)`
  max-width: 62ch;
  margin: 0;
  color: ${e=>e.theme.mutedText};
  font-size: var(--type-narrative-size);
  line-height: var(--type-narrative-leading);
`,Re=n(L.div)`
  overflow: hidden;
  width: 100%;
  border-radius: 16px;

  @media (max-width: 1023px) {
    order: -1;
  }
`,Pe=n.picture`
  display: block;
  width: 100%;
  aspect-ratio: 16 / 9;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;function Le(){return t.jsx(Ie,{children:t.jsxs(Se,{children:[t.jsxs(Ce,{children:[t.jsx(ze,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7},children:"Phia"}),t.jsx($e,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.1},children:"A pre-owned luxury experience for Microsoft Shopping, bringing curated products from brands like Chanel, Dior, Gucci, Hermes, and Louis Vuitton into discovery, retailer, and product-page flows."}),t.jsx(T,{slug:"phia",to:"/Phia",preloadRoute:()=>a(()=>i.import("./Phia-legacy-BPjFJDky.js"),void 0,i.meta.url),children:({onClick:e,onIntent:i})=>t.jsxs(I,{type:"button",initial:{opacity:0,y:10},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.2},onClick:e,onPointerEnter:i,onFocus:i,onPointerDown:i,children:["See Case Study ",t.jsx(S,{children:"→"})]})})]}),t.jsx(Re,{initial:{opacity:0,scale:.97},whileInView:{opacity:1,scale:1},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.1},children:t.jsxs(Pe,{children:[t.jsx("source",{srcSet:"/assets/phia/hero-mobile-900.avif",type:"image/avif",media:"(max-width: 900px)"}),t.jsx("source",{srcSet:"/assets/phia/hero.avif",type:"image/avif"}),t.jsx("source",{srcSet:"/assets/phia/hero-mobile-900.webp",type:"image/webp",media:"(max-width: 900px)"}),t.jsx("source",{srcSet:"/assets/phia/hero.webp",type:"image/webp"}),t.jsx("source",{srcSet:"/assets/phia/hero-mobile-900.jpg",media:"(max-width: 900px)"}),t.jsx("img",{src:"/assets/phia/hero.jpg",alt:"Microsoft Shopping and Phia pre-owned luxury landing page",loading:"lazy",decoding:"async"})]})})]})})}function Te(e){try{return encodeURI(decodeURI(e))}catch{return encodeURI(e)}}const Ve=n.section`
  background: ${e=>e.theme.sectionBase};
  padding: 8rem 0;
  display: flex;
  align-items: center;

  @media (max-width: 1023px) {
    padding: 5.5rem 0;
  }

  @media (max-width: 640px) {
    padding: 4.5rem 0;
  }

  @media (min-width: 768px) {
    padding: 10rem 0;
  }
`,Ue=n.div`
  box-sizing: border-box;
  max-width: 84rem;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;

  @media (max-width: 1023px) {
    gap: 2rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
`,Me=n.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 1023px) {
    gap: 1.1rem;
    max-width: 64ch;
    margin: 0 auto;
  }
`,Ae=n(L.h2)`
  font-family: var(--font-display);
  font-size: clamp(1.85rem, 4vw, 2.25rem);
  font-weight: 700;
  line-height: 1.2;
  color: ${e=>e.theme.strongText};
  margin: 0;

  @media (min-width: 768px) {
    font-size: 3rem;
  }

  @media (min-width: 1024px) {
    font-size: 3.5rem;
  }
`,We=n(L.p)`
  font-size: var(--type-narrative-size);
  line-height: var(--type-narrative-leading);
  color: ${e=>e.theme.mutedText};
  margin: 0;
  max-width: 62ch;
`,Ee=n(L.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  overflow: hidden;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 1023px) {
    order: -1;
    margin-bottom: 0.5rem;
  }
`,Fe=n.picture`
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;function Be({onLaunch:e}){const i=Te("/assets/partnerships/Walmart 1.avif"),a=Te("/assets/partnerships/Walmart 1.webp"),n=Te("/assets/partnerships/Walmart 1.jpg");return t.jsx(Ve,{children:t.jsxs(Ue,{children:[t.jsxs(Me,{children:[t.jsx(Ae,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7},children:"Partnership Pitches"}),t.jsx(We,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.1},children:"I designed AI-to-AI and AI-to-business integration patterns for Microsoft Copilot, pitching bespoke flows to four active partnership conversations: Walmart, Amazon, Lyft, and DoorDash."}),t.jsx(We,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.2},children:"This work explored what unique value AI can actually add beyond being a faster way to open an app, and introduced a new AI-to-AI handoff standard designed to go beyond what MCP supports."}),t.jsxs(I,{type:"button",initial:{opacity:0,y:10},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.3},onClick:e,children:["See Case Study ",t.jsx(S,{children:"→"})]})]}),t.jsx(Ee,{initial:{opacity:0,scale:.95},whileInView:{opacity:1,scale:1},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.1},children:t.jsxs(Fe,{children:[t.jsx("source",{srcSet:i,type:"image/avif"}),t.jsx("source",{srcSet:a,type:"image/webp"}),t.jsx("img",{src:n,alt:"Partnership Pitches, Walmart Copilot shopping flow",loading:"lazy",decoding:"async"})]})})]})})}function De(){const e=r(),[i,a]=o.useState(!1),n=$.find(e=>"partnerships"===e.slug);return o.useEffect(()=>{n&&z(n.transitionImages)},[n]),n?t.jsxs(t.Fragment,{children:[t.jsx(Be,{onLaunch:async()=>{await R(n.transitionImages)?a(!0):e("/Partnerships")}}),i&&t.jsx(P,{images:n.transitionImages,isActive:!0,onComplete:()=>e("/Partnerships"),layoutId:n.slug,sharedSourceImageSrc:n.coverImage.src})]}):null}function He(e){try{return encodeURI(decodeURI(e))}catch{return encodeURI(e)}}const Ne=n.section`
  background: ${e=>e.theme.sectionBase};
  padding: 8rem 0;
  display: flex;
  align-items: center;

  @media (max-width: 1023px) {
    padding: 5.5rem 0;
  }

  @media (max-width: 640px) {
    padding: 4.5rem 0;
  }

  @media (min-width: 768px) {
    padding: 10rem 0;
  }
`,Oe=n.div`
  box-sizing: border-box;
  max-width: 84rem;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;

  @media (max-width: 1023px) {
    gap: 2rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
`,Je=n.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 1023px) {
    gap: 1.1rem;
    max-width: 64ch;
    margin: 0 auto;
  }
`,Ge=n(L.h2)`
  font-family: var(--font-display);
  font-size: clamp(1.85rem, 4vw, 2.25rem);
  font-weight: 700;
  line-height: 1.2;
  color: ${e=>e.theme.strongText};
  margin: 0;

  @media (min-width: 768px) {
    font-size: 3rem;
  }

  @media (min-width: 1024px) {
    font-size: 3.5rem;
  }
`,_e=n(L.p)`
  font-size: var(--type-narrative-size);
  line-height: var(--type-narrative-leading);
  color: ${e=>e.theme.mutedText};
  margin: 0;
  max-width: 62ch;
`,Ke=n(L.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  overflow: hidden;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 1023px) {
    order: -1;
    margin-bottom: 0.5rem;
  }
`,qe=n.picture`
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 4 / 3;

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;function Xe({onLaunch:e}){const i=He("/assets/copilot-pay/Property 1=Default.avif"),a=He("/assets/copilot-pay/Property 1=Default.webp"),n=He("/assets/copilot-pay/Property 1=Default.jpg"),r=He("/assets/copilot-pay/Property 1=Default-mobile-900.avif"),o=He("/assets/copilot-pay/Property 1=Default-mobile-900.webp"),s=He("/assets/copilot-pay/Property 1=Default-mobile-900.jpg");return t.jsx(Ne,{children:t.jsxs(Oe,{children:[t.jsxs(Je,{children:[t.jsx(Ge,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7},children:"Copilot Pay"}),t.jsx(_e,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.1},children:"Copilot Pay is Microsoft's first native checkout inside Copilot across browser, desktop, and mobile. It replaces retailer redirects with a more continuous purchase flow using Apple Pay, PayPal, Venmo, Google Pay, Shop Pay, and Amazon Pay."}),t.jsx(_e,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.2},children:"This case study focuses on express checkout flows, multi-wallet interaction design, and the design-system work required to make AI commerce feel scalable and trustworthy across Microsoft surfaces."}),t.jsxs(I,{type:"button",initial:{opacity:0,y:10},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.3},onClick:e,children:["See Case Study ",t.jsx(S,{children:"→"})]})]}),t.jsx(Ke,{initial:{opacity:0,scale:.95},whileInView:{opacity:1,scale:1},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.1},children:t.jsxs(qe,{children:[t.jsx("source",{srcSet:r,type:"image/avif",media:"(max-width: 900px)"}),t.jsx("source",{srcSet:i,type:"image/avif"}),t.jsx("source",{srcSet:o,type:"image/webp",media:"(max-width: 900px)"}),t.jsx("source",{srcSet:a,type:"image/webp"}),t.jsx("source",{srcSet:s,media:"(max-width: 900px)"}),t.jsx("img",{src:n,alt:"Copilot Pay interface design",loading:"eager",fetchPriority:"high",decoding:"async"})]})})]})})}function Qe(){const e=r(),[n,s]=o.useState(!1),d=$.find(e=>"copilot-pay"===e.slug);return o.useEffect(()=>{d&&(z(d.transitionImages),a(()=>i.import("./CopilotPay-legacy-ujj-mibF.js"),void 0,i.meta.url))},[d]),d?t.jsxs(t.Fragment,{children:[t.jsx(Xe,{onLaunch:async()=>{await R(d.transitionImages)?s(!0):e("/CopilotPay")}}),n&&t.jsx(P,{images:d.transitionImages,isActive:!0,onComplete:()=>e("/CopilotPay"),layoutId:d.slug,sharedSourceImageSrc:d.coverImage.src})]}):null}function Ye(e){try{return encodeURI(decodeURI(e))}catch{return encodeURI(e)}}const Ze=n.section`
  background: ${e=>e.theme.sectionMuted};
  padding: 7rem 0;
  display: flex;
  align-items: center;

  @media (max-width: 1023px) {
    padding: 5rem 0;
  }

  @media (min-width: 768px) {
    padding: 8rem 0;
  }
`,ei=n.div`
  box-sizing: border-box;
  max-width: 84rem;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;

  @media (min-width: 1024px) {
    grid-template-columns: minmax(0, 1.05fr) minmax(0, 1fr);
    gap: 4rem;
  }
`,ii=n.div`
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  max-width: 68ch;
`,ti=n(L.p)`
  font-family: var(--font-mono);
  margin: 0;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${e=>"dark"===e.theme.name?"#8fb3df":"#416287"};
`,ai=n(L.h2)`
  font-family: var(--font-display);
  margin: 0;
  font-size: clamp(2.4rem, 4.5vw, 4.3rem);
  line-height: 0.96;
  color: ${e=>e.theme.strongText};
`,ni=n(L.p)`
  margin: 0;
  font-size: var(--type-narrative-size);
  line-height: var(--type-narrative-leading);
  color: ${e=>e.theme.mutedText};
`,ri=n(L.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  overflow: hidden;
  background: ${e=>"dark"===e.theme.name?"rgba(255, 255, 255, 0.04)":"rgba(255, 255, 255, 0.72)"};
  border: 1px solid ${e=>"dark"===e.theme.name?"rgba(143, 179, 223, 0.18)":"rgba(65, 98, 135, 0.14)"};
  box-shadow: 0 24px 50px rgba(0, 0, 0, 0.2);

  @media (max-width: 1023px) {
    order: -1;
  }
`,oi=n.picture`
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;function si({onLaunch:e}){const i=Ye("/assets/journeys/Journeys L2.avif"),a=Ye("/assets/journeys/Journeys L2.webp"),n=Ye("/assets/journeys/Journeys L2.jpg"),r=Ye("/assets/journeys/Journeys L2-mobile-900.avif"),o=Ye("/assets/journeys/Journeys L2-mobile-900.webp"),s=Ye("/assets/journeys/Journeys L2-mobile-900.jpg");return t.jsx(Ze,{children:t.jsxs(ei,{children:[t.jsxs(ii,{children:[t.jsx(ti,{initial:{opacity:0,y:16},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.6},children:"New Case Study"}),t.jsx(ai,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.05},children:"Journeys"}),t.jsx(ni,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.1},children:"My Shopping / Journeys for Microsoft Shopping explored how to create a central hub that reduces shopping complexity, helps users save money, and surfaces guidance based on where they are in the purchase journey."}),t.jsx(ni,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.18},children:"I worked with a principal designer on three user-flow scenarios, interaction models, and feed-based versus static hub layouts. The latest iteration of Journeys is now shipped in the Copilot app."}),t.jsxs(I,{type:"button",initial:{opacity:0,y:10},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.25},onClick:e,children:["See Case Study ",t.jsx(S,{children:"→"})]})]}),t.jsx(ri,{initial:{opacity:0,scale:.97},whileInView:{opacity:1,scale:1},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.1},children:t.jsxs(oi,{children:[t.jsx("source",{srcSet:r,type:"image/avif",media:"(max-width: 900px)"}),t.jsx("source",{srcSet:i,type:"image/avif"}),t.jsx("source",{srcSet:o,type:"image/webp",media:"(max-width: 900px)"}),t.jsx("source",{srcSet:a,type:"image/webp"}),t.jsx("source",{srcSet:s,media:"(max-width: 900px)"}),t.jsx("img",{src:n,alt:"Journeys dashboard with personalized shopping modules",loading:"lazy",decoding:"async"})]})})]})})}function di(){const e=r(),[n,s]=o.useState(!1),d=$.find(e=>"journeys"===e.slug);return o.useEffect(()=>{d&&(z(d.transitionImages),a(()=>i.import("./Journeys-legacy-BPkCtyEb.js"),void 0,i.meta.url))},[d]),d?t.jsxs(t.Fragment,{children:[t.jsx(si,{onLaunch:async()=>{await R(d.transitionImages)?s(!0):e("/Journeys")}}),n&&t.jsx(P,{images:d.transitionImages,isActive:!0,onComplete:()=>e("/Journeys"),layoutId:d.slug,sharedSourceImageSrc:d.coverImage.src})]}):null}function ci(e){try{return encodeURI(decodeURI(e))}catch{return encodeURI(e)}}const li=n.section`
  background: ${e=>e.theme.sectionAccent};
  padding: 8rem 0;
  display: flex;
  align-items: center;

  @media (max-width: 1023px) {
    padding: 5.5rem 0;
  }

  @media (max-width: 640px) {
    padding: 4.5rem 0;
  }

  @media (min-width: 768px) {
    padding: 10rem 0;
  }
`,mi=n.div`
  box-sizing: border-box;
  max-width: 84rem;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;

  @media (max-width: 1023px) {
    gap: 2rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
`,pi=n.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 1023px) {
    gap: 1.1rem;
    max-width: 64ch;
    margin: 0 auto;
  }
`,hi=n(L.h2)`
  font-family: var(--font-display);
  font-size: clamp(1.85rem, 4vw, 2.25rem);
  font-weight: 700;
  line-height: 1.2;
  color: ${e=>e.theme.strongText};
  margin: 0;

  @media (min-width: 768px) {
    font-size: 3rem;
  }

  @media (min-width: 1024px) {
    font-size: 3.5rem;
  }
`,ui=n(L.p)`
  font-size: var(--type-narrative-size);
  line-height: var(--type-narrative-leading);
  color: ${e=>e.theme.mutedText};
  margin: 0;
  max-width: 62ch;
`,gi=n(L.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  overflow: hidden;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 1023px) {
    order: -1;
    margin-bottom: 0.5rem;
  }
`,xi=n.picture`
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;function wi({onLaunch:e}){const i=ci("/assets/cashback-hub/hero.avif"),a=ci("/assets/cashback-hub/hero.webp"),n=ci("/assets/cashback-hub/hero.jpg"),r=ci("/assets/cashback-hub/hero-mobile-900.avif"),o=ci("/assets/cashback-hub/hero-mobile-900.webp"),s=ci("/assets/cashback-hub/hero-mobile-900.jpg");return t.jsx(li,{children:t.jsxs(mi,{children:[t.jsxs(pi,{children:[t.jsx(hi,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7},children:"Cashback Hub"}),t.jsx(ui,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.1},children:"The Cashback Hub lets users track, manage, and redeem cashback rewards across Microsoft Shopping surfaces. I led end-to-end design — interaction, visual, and cross-platform layouts — for the full hub, stores search, interstitials, and the Edge Shoreline companion pane."}),t.jsx(ui,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.2},children:"The case study focuses on bringing clarity to a delayed-payout cashback journey, designing a compact Edge companion view, and aligning a shared visual system that scales across Microsoft Shopping surfaces."}),t.jsxs(I,{type:"button",initial:{opacity:0,y:10},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.3},onClick:e,children:["See Case Study ",t.jsx(S,{children:"→"})]})]}),t.jsx(gi,{initial:{opacity:0,scale:.95},whileInView:{opacity:1,scale:1},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.1},children:t.jsxs(xi,{children:[t.jsx("source",{srcSet:r,type:"image/avif",media:"(max-width: 900px)"}),t.jsx("source",{srcSet:i,type:"image/avif"}),t.jsx("source",{srcSet:o,type:"image/webp",media:"(max-width: 900px)"}),t.jsx("source",{srcSet:a,type:"image/webp"}),t.jsx("source",{srcSet:s,media:"(max-width: 900px)"}),t.jsx("img",{src:n,alt:"Microsoft Shopping Cashback Hub overview",loading:"lazy",decoding:"async"})]})})]})})}function yi(){const e=r(),[n,s]=o.useState(!1),d=$.find(e=>"cashback-hub"===e.slug);return o.useEffect(()=>{d&&(z(d.transitionImages),a(()=>i.import("./CashbackHub-legacy-CQpZ_j4K.js"),void 0,i.meta.url))},[d]),d?t.jsxs(t.Fragment,{children:[t.jsx(wi,{onLaunch:async()=>{await R(d.transitionImages)?s(!0):e("/CashbackHub")}}),n&&t.jsx(P,{images:d.transitionImages,isActive:!0,onComplete:()=>e("/CashbackHub"),layoutId:d.slug,sharedSourceImageSrc:d.coverImage.src})]}):null}function fi(e){try{return encodeURI(decodeURI(e))}catch{return encodeURI(e)}}const vi=n.section`
  background: ${e=>e.theme.sectionMuted};
  padding: 8rem 0;
  display: flex;
  align-items: center;

  @media (max-width: 1023px) {
    padding: 5.5rem 0;
  }

  @media (max-width: 640px) {
    padding: 4.5rem 0;
  }

  @media (min-width: 768px) {
    padding: 10rem 0;
  }
`,bi=n.div`
  box-sizing: border-box;
  max-width: 84rem;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;

  @media (max-width: 1023px) {
    gap: 2rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
`,ji=n.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 1023px) {
    gap: 1.1rem;
    max-width: 64ch;
    margin: 0 auto;
  }
`,ki=n(L.h2)`
  font-family: var(--font-display);
  font-size: clamp(1.85rem, 4vw, 2.25rem);
  font-weight: 700;
  line-height: 1.2;
  color: ${e=>e.theme.strongText};
  margin: 0;

  @media (min-width: 768px) {
    font-size: 3rem;
  }

  @media (min-width: 1024px) {
    font-size: 3.5rem;
  }
`,Ii=n(L.p)`
  font-size: var(--type-narrative-size);
  line-height: var(--type-narrative-leading);
  color: ${e=>e.theme.mutedText};
  margin: 0;
  max-width: 62ch;
`,Si=n(L.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  overflow: hidden;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 1023px) {
    order: -1;
    margin-bottom: 0.5rem;
  }
`,Ci=n.picture`
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;function zi({onLaunch:e}){const i=fi("/assets/video-commerce/Full Frame.avif"),a=fi("/assets/video-commerce/Full Frame.webp"),n=fi("/assets/video-commerce/Full Frame.jpg"),r=fi("/assets/video-commerce/Full Frame-mobile-900.avif"),o=fi("/assets/video-commerce/Full Frame-mobile-900.webp"),s=fi("/assets/video-commerce/Full Frame-mobile-900.jpg");return t.jsx(vi,{children:t.jsxs(bi,{children:[t.jsxs(ji,{children:[t.jsx(ki,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7},children:"Video Commerce"}),t.jsx(Ii,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.1},children:"An executive-driven moonshot exploring live and short-form video commerce across Bing, MSN, Edge, and Microsoft Start — partnering with TalkShopLive in the U.S., QVC Japan, and Roposo in India to bring creator-led product content into the Microsoft shopping ecosystem."}),t.jsx(Ii,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.2},children:"The case study covers the video shopping destination, multi-SKU product mapping, live commerce interactions, mobile hierarchy, and a first-party native player exploration."}),t.jsxs(I,{type:"button",initial:{opacity:0,y:10},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.3},onClick:e,children:["See Case Study ",t.jsx(S,{children:"→"})]})]}),t.jsx(Si,{initial:{opacity:0,scale:.95},whileInView:{opacity:1,scale:1},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.1},children:t.jsxs(Ci,{children:[t.jsx("source",{srcSet:r,type:"image/avif",media:"(max-width: 900px)"}),t.jsx("source",{srcSet:i,type:"image/avif"}),t.jsx("source",{srcSet:o,type:"image/webp",media:"(max-width: 900px)"}),t.jsx("source",{srcSet:a,type:"image/webp"}),t.jsx("source",{srcSet:s,media:"(max-width: 900px)"}),t.jsx("img",{src:n,alt:"Microsoft Bing Shopping video commerce destination",loading:"lazy",decoding:"async"})]})})]})})}function $i(){const e=r(),[n,s]=o.useState(!1),d=$.find(e=>"video-commerce"===e.slug);return o.useEffect(()=>{d&&(z(d.transitionImages),a(()=>i.import("./VideoCommerce-legacy-CgZkMHfB.js"),void 0,i.meta.url))},[d]),d?t.jsxs(t.Fragment,{children:[t.jsx(zi,{onLaunch:async()=>{await R(d.transitionImages)?s(!0):e("/VideoCommerce")}}),n&&t.jsx(P,{images:d.transitionImages,isActive:!0,onComplete:()=>e("/VideoCommerce"),layoutId:d.slug,sharedSourceImageSrc:d.coverImage.src})]}):null}function Ri(e){try{return encodeURI(decodeURI(e))}catch{return encodeURI(e)}}const Pi=n.section`
  background: ${e=>e.theme.sectionBase};
  padding: 8rem 0;
  display: flex;
  align-items: center;

  @media (max-width: 1023px) {
    padding: 5.5rem 0;
  }

  @media (max-width: 640px) {
    padding: 4.5rem 0;
  }

  @media (min-width: 768px) {
    padding: 10rem 0;
  }
`,Li=n.div`
  box-sizing: border-box;
  max-width: 84rem;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;

  @media (max-width: 1023px) {
    gap: 2rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
`,Ti=n.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 1023px) {
    gap: 1.1rem;
    max-width: 64ch;
    margin: 0 auto;
  }
`,Vi=n(L.span)`
  font-family: var(--font-mono);
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #0078d4;
  background: ${e=>"dark"===e.theme.name?"rgba(0,120,212,0.15)":"rgba(0,120,212,0.1)"};
  border: 1px solid rgba(0, 120, 212, 0.25);
  padding: 0.3em 0.9em;
  border-radius: 999px;
  width: fit-content;
`,Ui=n(L.h2)`
  font-family: var(--font-display);
  font-size: clamp(1.85rem, 4vw, 2.25rem);
  font-weight: 700;
  line-height: 1.2;
  color: ${e=>e.theme.strongText};
  margin: 0;

  @media (min-width: 768px) {
    font-size: 3rem;
  }

  @media (min-width: 1024px) {
    font-size: 3.5rem;
  }
`,Mi=n(L.p)`
  font-size: var(--type-narrative-size);
  line-height: var(--type-narrative-leading);
  color: ${e=>e.theme.mutedText};
  margin: 0;
  max-width: 62ch;
`,Ai=n(L.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  overflow: hidden;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 1023px) {
    order: -1;
    margin-bottom: 0.5rem;
  }
`,Wi=n.picture`
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;function Ei({onLaunch:e}){const i=Ri("/assets/windows-notifications/Prong 2 price drop.avif"),a=Ri("/assets/windows-notifications/Prong 2 price drop.webp"),n=Ri("/assets/windows-notifications/Prong 2 price drop.png"),r=Ri("/assets/windows-notifications/Prong 2 price drop-mobile-900.avif"),o=Ri("/assets/windows-notifications/Prong 2 price drop-mobile-900.webp"),s=Ri("/assets/windows-notifications/Prong 2 price drop-mobile-900.png");return t.jsx(Pi,{children:t.jsxs(Li,{children:[t.jsxs(Ti,{children:[t.jsx(Vi,{initial:{opacity:0,y:10},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.5},children:"Windows OS"}),t.jsx(Ui,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7},children:"Windows Notifications"}),t.jsx(Mi,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.1},children:"Bing and Edge Shopping give users ways to signal explicit commerce intent. The payoff for that intent used to stay inside the browser. I designed four experiences: price drops, back-in-stock, cash back, and coupons, to surface those moments in Windows itself, on the taskbar and notification surface every user sees."}),t.jsx(Mi,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.2},children:"The case study covers OS-level governance, Windows UX Labs Value and Ad Perception testing, Triple Cashback Tuesday research findings, and what it took to ship shopping features from the browser into the Windows OS layer."}),t.jsxs(I,{type:"button",initial:{opacity:0,y:10},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.3},onClick:e,children:["See Case Study ",t.jsx(S,{children:"→"})]})]}),t.jsx(Ai,{initial:{opacity:0,scale:.95},whileInView:{opacity:1,scale:1},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.1},children:t.jsxs(Wi,{children:[t.jsx("source",{srcSet:r,type:"image/avif",media:"(max-width: 900px)"}),t.jsx("source",{srcSet:i,type:"image/avif"}),t.jsx("source",{srcSet:o,type:"image/webp",media:"(max-width: 900px)"}),t.jsx("source",{srcSet:a,type:"image/webp"}),t.jsx("source",{srcSet:s,media:"(max-width: 900px)"}),t.jsx("img",{src:n,alt:"Windows price drop notification prong",loading:"lazy",decoding:"async"})]})})]})})}function Fi(){const e=r(),[n,s]=o.useState(!1),d=$.find(e=>"windows-notifications"===e.slug);return o.useEffect(()=>{d&&(z(d.transitionImages),a(()=>i.import("./WindowsNotifications-legacy-GYRnm_75.js"),void 0,i.meta.url))},[d]),d?t.jsxs(t.Fragment,{children:[t.jsx(Ei,{onLaunch:async()=>{await R(d.transitionImages)?s(!0):e("/WindowsNotifications")}}),n&&t.jsx(P,{images:d.transitionImages,isActive:!0,onComplete:()=>e("/WindowsNotifications"),layoutId:d.slug,sharedSourceImageSrc:d.coverImage.src})]}):null}const Bi=d`
  0% { transform: translate(-50%, -60%) rotate(0deg); }
  20% { transform: translate(-20%, -80%) rotate(90deg); }
  40% { transform: translate(10%, -40%) rotate(180deg); }
  60% { transform: translate(-40%, -20%) rotate(270deg); }
  80% { transform: translate(-70%, -50%) rotate(320deg); }
  100% { transform: translate(-50%, -60%) rotate(360deg); }
`,Di=d`
  0% { transform: translate(60%, -50%) rotate(0deg); }
  20% { transform: translate(80%, -20%) rotate(90deg); }
  40% { transform: translate(40%, -70%) rotate(180deg); }
  60% { transform: translate(20%, -30%) rotate(270deg); }
  80% { transform: translate(70%, -60%) rotate(320deg); }
  100% { transform: translate(60%, -50%) rotate(360deg); }
`,Hi=n.div`
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  height: 100dvh;
  z-index: 0;
  pointer-events: none;
  &::before, &::after {
    content: '';
    position: absolute;
    width: 40vw;
    height: 40vw;
    border-radius: 50%;
    filter: blur(200px);
    z-index: 0;
  }
  &::before {
    top: 20%;
    left: 10%;
    background: ${e=>e.theme.heroSpotlightLeft};
    animation: ${Bi} 35s ease-in-out infinite;
  }
  &::after {
    top: 40%;
    left: 65%;
    background: ${e=>e.theme.heroSpotlightRight};
    animation: ${Di} 40s ease-in-out infinite;
  }

  /* Mobile: blur(200px) + rotating fullscreen pseudo-elements are very expensive
     on phones. Reduce blur radius and stop the animation. */
  @media (max-width: 1000px) {
    &::before, &::after {
      filter: blur(80px);
      animation: none;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    &::before, &::after {
      animation: none;
    }
  }
`,Ni=n.div`
  min-height: 100vh;
  width: 100%;
  display: grid;
  place-items: center;
  padding: 6rem 1.5rem 2rem;
  background: ${e=>e.theme.surface};
  position: relative;
  z-index: 1;
`,Oi=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.85rem;
  text-align: center;
  max-width: 40rem;
  margin-bottom: 1.5rem;
  color: ${e=>e.theme.strongText};
`,Ji=n.p`
  font-family: var(--font-mono);
  margin: 0;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${e=>e.theme.mutedText};
`,Gi=n.h1`
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3.4rem);
  line-height: 1;
`,_i=n.p`
  margin: 0;
  font-size: 1rem;
  line-height: 1.6;
  color: ${e=>e.theme.mutedText};
`,Ki=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,qi=n.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: min(100%, 28rem);
  background: ${e=>e.theme.surfaceMuted};
  padding: 2rem 3rem;
  border-radius: 12px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.08);
  border: 1px solid ${e=>e.theme.border};

  @media (max-width: 640px) {
    padding: 1.5rem;
  }
`,Xi=n.input`
  font-family: var(--font-body);
  font-size: 1.1rem;
  padding: 0.6rem 1.1rem;
  border-radius: 999px;
  border: 1px solid ${e=>e.theme.border};
  min-width: 240px;
  outline: none;
  color: ${e=>e.theme.strongText};
  background: ${e=>e.theme.surface};
  &::placeholder { color: ${e=>e.theme.mutedText}; }
`,Qi=n.button`
  display: inline-flex;
  align-items: center;
  gap: 0.32em;
  background: #111;
  color: #fff;
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 1.05rem;
  border: none;
  border-radius: 999px;
  padding: 0.56rem 1.4rem;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  transition: background 0.2s ease;
  &:hover { background: #333; }
`,Yi={primary:"sectionPrimary",base:"sectionBase",muted:"sectionMuted",accent:"sectionAccent"},Zi=n(g)`
  background-color: ${e=>e.theme[Yi[e.$tone]]};
  --section-text-strong: ${e=>"accent"===e.$tone?e.theme.sectionAccentText:"primary"===e.$tone?e.theme.onOlive:e.theme.strongText};
`,et=n(x)`
  color: var(--section-text-strong, ${e=>e.theme.strongText});
  font-family: var(--font-display);
  font-size: var(--type-standalone-size);
  max-width: 50ch;
  line-height: var(--type-standalone-leading);
  margin: 0;
`,it=n(w)`
  padding-top: clamp(4rem, 7vh, 6rem);
  padding-bottom: clamp(4.75rem, 8vh, 7rem);

  @media (max-width: 850px) {
    padding-top: clamp(3rem, 7vh, 4rem);
    padding-bottom: clamp(3.5rem, 8vh, 4.5rem);
  }
`,tt=(e("default",()=>{const[e,i]=o.useState(""),[a,n]=o.useState(()=>"true"===sessionStorage.getItem("microsoftAuth")),[r,d]=o.useState(""),p=o.useMemo(()=>[s.createRef(),s.createRef()],[]);o.useEffect(()=>(p.forEach((e,i)=>{e.current&&(e.current.onplay=(e=>()=>{p.forEach((i,t)=>{t!==e&&i.current&&i.current.pause()})})(i))}),()=>{p.forEach(e=>{e.current&&(e.current.onplay=null)})}),[a,p]),o.useLayoutEffect(()=>{window.scrollTo(0,0)},[]);const g=i=>{i.preventDefault(),"microsoftshopping"===e?(n(!0),d(""),sessionStorage.setItem("microsoftAuth","true")):d("Incorrect password.")};return a?t.jsxs(y,{children:[t.jsx(c,{...m.microsoft,sameAs:l.sameAs,keywords:m.microsoft.keywords,siteDefaults:l}),t.jsx(he,{title:"Microsoft",imageBaseName:"assets/MSFTlogo",imageExt:"png",imageAlt:"Microsoft Logo",imageWidth:"24vw",imageNaturalWidth:785,imageNaturalHeight:786,invertOnDark:!0,buttons:[{href:"https://www.microsoft.com/en-us/shopping/?form=MT00PA&cs=2199494592",label:"Visit Shopping"}],divider:!0}),t.jsx(f,{children:t.jsxs(v,{children:[t.jsxs(b,{children:[t.jsx(j,{children:"Project Type"}),t.jsx(k,{children:"Cross-platform product leadership"})]}),t.jsxs(b,{children:[t.jsx(j,{children:"Digital Product"}),t.jsx(k,{children:"Microsoft Shopping ecosystem across Bing, Copilot, Windows, Outlook, and Microsoft Start."})]}),t.jsxs(b,{children:[t.jsx(j,{children:"My Role"}),t.jsx(k,{children:"Product Designer leading research, concept development, and design execution across multiple teams and surfaces."})]}),t.jsxs(b,{children:[t.jsx(j,{children:"Timeframe"}),t.jsx(k,{children:"4 years"})]})]})}),t.jsx(it,{children:t.jsx(ot,{ref:p[0],src:"/assets/microsoft-demo2.mp4",poster:"/assets/Preview1.png"})}),t.jsx(De,{}),t.jsx(ke,{}),t.jsx(Le,{}),t.jsx(Qe,{}),t.jsx(di,{}),t.jsx(yi,{}),t.jsx(Fi,{}),t.jsx($i,{}),t.jsx(Zi,{$tone:"accent",children:t.jsx(h,{children:t.jsx(et,{children:"This work focused on reimagining shopping as an educational experience rather than a transactional one. I designed early concepts for Copilot Shopping and a Generative Results Page (GRP) that helped users understand product categories, compare specs, and evaluate pricing. These experiences aimed to reduce decision fatigue while increasing trust and confidence for high-consideration purchases."})})}),t.jsx(it,{children:t.jsx(u,{src:U,avif:M,webp:A})}),t.jsx(it,{children:t.jsx(u,{src:W,avif:E,webp:F})}),t.jsx(it,{children:t.jsx(ot,{ref:p[1],src:"/assets/microsoft-demo.mp4",poster:"/assets/Preview2.png"})}),t.jsx(Zi,{$tone:"base",children:t.jsx(h,{children:t.jsx(et,{children:"This work focused on reducing friction at the moment of purchase through Microsoft Wallet and the Cashback Hub. I contributed to experiences that let users securely save payment methods, passwords, and rewards for faster checkout across Microsoft surfaces. More recently, this work has extended into Copilot, exploring how AI can surface cashback, apply rewards, and streamline checkout without disrupting user trust."})})}),t.jsx(it,{children:t.jsx(u,{src:B,avif:D,webp:H})}),t.jsx(Zi,{$tone:"muted",children:t.jsx(h,{children:t.jsx(et,{children:"I worked across Bing Shopping, Microsoft Start, Windows, Outlook, and Copilot to create consistent commerce experiences at scale. This included Outlook shopping concepts for managing promotions, feed-based browsing, and unsubscribe flows. The goal was to unify shopping behavior across Microsoft’s surfaces while respecting context and user intent."})})}),t.jsx(it,{children:t.jsx(u,{src:N,avif:O,webp:J})}),t.jsx(it,{children:t.jsx(u,{src:G,avif:_,webp:K})}),t.jsx(it,{children:t.jsx(u,{src:q,avif:X,webp:Q})}),t.jsx(it,{children:t.jsx(u,{src:Y,avif:Z,webp:ee})}),t.jsx(Zi,{$tone:"primary",children:t.jsx(h,{children:t.jsxs(et,{style:{textAlign:"center"},children:["Microsoft AI CEO — Mustafa Suleyman",t.jsx("br",{}),"Shopping Design Lead — Ashley Hemingway",t.jsx("br",{}),"Development Lead — Avinash Vemuluru",t.jsx("br",{})]})})}),t.jsx(V,{})]}):t.jsxs(Ni,{children:[t.jsx(c,{...m.microsoft,sameAs:l.sameAs,keywords:m.microsoft.keywords,siteDefaults:l}),t.jsx(Hi,{}),t.jsxs(Ki,{children:[t.jsxs(Oi,{children:[t.jsx(Ji,{children:"Microsoft Case Studies"}),t.jsx(Gi,{children:"Protected Microsoft work samples"}),t.jsx(_i,{children:"Enter the password to continue to the Microsoft project page and view the protected case study."})]}),t.jsxs(qi,{onSubmit:g,children:[t.jsx("h2",{style:{margin:0},children:"Enter Password"}),t.jsx(Xi,{type:"password",value:e,onChange:e=>i(e.target.value),placeholder:"Password",autoFocus:!0}),t.jsx(Qi,{type:"submit",children:"Continue"}),r&&t.jsx("div",{style:{color:"red",marginTop:"0.5rem"},children:r})]})]})]})}),n.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  cursor: pointer;
`),at=n.div`
  width: 90px;
  height: 90px;
  background: rgba(0,0,0,0.5);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 64px;
  pointer-events: none;
`,nt=n.div`
  width: 100%;
  max-width: 64rem;
  margin: 0 auto 4vh auto;
  padding: 0 1.5rem;
  box-sizing: border-box;
`,rt=n.div`
  border-radius: 24px;
  overflow: hidden;
  position: relative;
  width: 100%;
  aspect-ratio: 16/9;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: none;

  @media (max-width: 850px) {
    border-radius: 12px;
  }
`,ot=s.forwardRef(({src:e,poster:i},a)=>{const[n,r]=o.useState(!1),s=o.useRef(null),d=a||s;return o.useEffect(()=>{const e=d.current;if(!e)return;const i=()=>r(!0),t=()=>r(!1),a=()=>r(!1);return e.addEventListener("play",i),e.addEventListener("pause",t),e.addEventListener("ended",a),()=>{e.removeEventListener("play",i),e.removeEventListener("pause",t),e.removeEventListener("ended",a)}},[d]),t.jsx(nt,{children:t.jsxs(rt,{"data-cursor":"link",children:[t.jsx("video",{ref:d,src:e,controls:!0,playsInline:!0,preload:"none",poster:i,"data-cursor":"link",style:{width:"100%",height:"100%",borderRadius:"inherit",background:"#000",display:"block",objectFit:"cover"}}),!n&&t.jsx(tt,{onClick:()=>{const e=d.current;e&&(e.muted=!1,e.volume=1,e.play().catch(()=>{}))},role:"button","aria-label":"Play video","data-cursor":"link",children:t.jsx(at,{children:t.jsxs("svg",{width:"48",height:"48",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("circle",{cx:"24",cy:"24",r:"24",fill:"rgba(0,0,0,0.5)"}),t.jsx("polygon",{points:"18,14 36,24 18,34",fill:"#fff"})]})})})]})})})}}});
