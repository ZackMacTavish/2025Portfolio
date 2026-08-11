System.register(["./three-legacy-BdMASLzS.js","./vendor-legacy-C2msdADn.js","./metadata-legacy-BfHXKqE3.js","./CaseStudyPrimitives-legacy-BtTEmq7i.js","./CaseStudyIntroCTA-legacy-DVGIWdMc.js","./index-legacy-Cx2Uh9sa.js"],function(e,i){"use strict";var t,a,n,r,o,s,d,c,l,m,p,h,g,u,x,f,w,y,v,b,j,k,I,S,C,z,$,R,P,L,V,T;return{setters:[e=>{t=e.j,a=e._},e=>{n=e.c,r=e.e,o=e.b,s=e.R,d=e.l},e=>{c=e.E,l=e.s,m=e.p},e=>{p=e.f,h=e.R,g=e.F,u=e.T,x=e.S,f=e.a},e=>{w=e.b,y=e.C,v=e.a,b=e.S,j=e.c,k=e.d,I=e.e,S=e.f,C=e.g},e=>{z=e.z,$=e.x,R=e.t,P=e.y,L=e.C,V=e.w,T=e.A}],execute:function(){const U=""+new URL("Copilot style GRP-BosxFHQg.png",i.meta.url).href,M=""+new URL("Copilot style GRP-DowTFPoE.avif",i.meta.url).href,A=""+new URL("Copilot style GRP-s_4NMnd3.webp",i.meta.url).href,E=""+new URL("HP-Ck0dhCe7.png",i.meta.url).href,W=""+new URL("HP-CEl-KKvF.avif",i.meta.url).href,F=""+new URL("HP-B_oOarUu.webp",i.meta.url).href,D=""+new URL("Wallet-XTCp021N.png",i.meta.url).href,B=""+new URL("Wallet-5CNdOCa-.avif",i.meta.url).href,H=""+new URL("Wallet-BgqKW0ov.webp",i.meta.url).href,N=""+new URL("Ruby-BRMz_asY.png",i.meta.url).href,O=""+new URL("Ruby-DNkWeBUd.avif",i.meta.url).href,J=""+new URL("Ruby-Bv_l2Gu8.webp",i.meta.url).href,G=""+new URL("ReceiptScan-C-C8E7EX.png",i.meta.url).href,_=""+new URL("ReceiptScan-Wv6bqvXe.avif",i.meta.url).href,K=""+new URL("ReceiptScan-_45Kgagg.webp",i.meta.url).href,q=""+new URL("ShoppingCopilot-LmtofWTU.png",i.meta.url).href,X=""+new URL("ShoppingCopilot-yKuhCNsH.avif",i.meta.url).href,Q=""+new URL("ShoppingCopilot-BlSa8vEq.webp",i.meta.url).href,Y=""+new URL("Outlook-BIfrrwLP.png",i.meta.url).href,Z=""+new URL("Outlook-rNhdafsz.avif",i.meta.url).href,ee=""+new URL("Outlook-DTyC7tTV.webp",i.meta.url).href,ie=n.div`
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
`;function te(e){if(!e)return e;try{return encodeURI(decodeURI(e))}catch{return encodeURI(e)}}const ae=n.div`
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
    margin: 0 auto 2.75rem;
    padding: 0 1.25rem;
    box-sizing: border-box;
  }
`,ne=n.div`
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
`,re=n.div`
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
`,oe=n.picture`
  display: block;
  width: 100%;
`,se=n.img`
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
`,de=n.h1`
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
`,ce=n.div`
  height: 1px;
  background: ${e=>e.theme.border};
  width: 48px;
  margin: 0.1em 0 0.3em 0;

  @media (max-width: 850px) {
    margin: 0 auto 0.2rem;
  }
`,le=n(ie)`
  @media (max-width: 850px) {
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 0.125rem 0 0;

    ${w} {
      min-height: 44px;
      margin: 0;
      padding: 0.7rem 1.2rem;
    }
  }
`;function me({imageBaseName:e=null,imageSrc:i="",imageAvif:a=null,imageWebp:n=null,imageAlt:r="",$imageWidth:o="38vw",buttons:s=[],divider:d=!0,imageExt:c="jpg",title:l="",imageNaturalWidth:m=null,imageNaturalHeight:h=null,invertOnDark:g=!1}){const u=e?`${e.startsWith("assets/")?"/":"/src/"}${e}`:null,x=u?te(`${u}.avif`):null,f=u?te(`${u}.webp`):null,y=u?te(`${u}.${c||"jpg"}`):null,v=Math.max(m||0,h||0)>900,b=v?p(x):null,j=v?p(f):null,k=v?p(y):null;return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"mobile-nav-spacer",style:{display:"block",width:"100%",height:"12vh",minHeight:0,padding:0,margin:0,background:"transparent",zIndex:0,pointerEvents:"none",position:"relative"}}),t.jsxs(ae,{className:"first",children:[t.jsxs(ne,{children:[t.jsx(de,{children:l}),d&&t.jsx(ce,{}),t.jsx(le,{children:s.map(({href:e,label:i},a)=>t.jsxs(w,{href:e,target:"_blank",rel:"noopener noreferrer",children:[i," ",t.jsx(z,{style:{marginLeft:6,fontSize:"1.2em"}})]},a))})]}),t.jsx(re,{children:e?t.jsxs(oe,{children:[b&&t.jsx("source",{srcSet:b,type:"image/avif",media:"(max-width: 900px)"}),t.jsx("source",{srcSet:x,type:"image/avif"}),j&&t.jsx("source",{srcSet:j,type:"image/webp",media:"(max-width: 900px)"}),t.jsx("source",{srcSet:f,type:"image/webp"}),k&&t.jsx("source",{srcSet:k,media:"(max-width: 900px)"}),t.jsx(se,{src:y,alt:r,$imageWidth:o,$invertOnDark:g,$naturalWidth:m||void 0,$naturalHeight:h||void 0,width:m||void 0,height:h||void 0,fetchPriority:"high",loading:"eager",decoding:"sync"})]}):t.jsx(se,{src:te(i),alt:r,$imageWidth:o,width:m||void 0,height:h||void 0,fetchPriority:"high",loading:"eager",decoding:"async"})})]})]})}function pe(e){try{return encodeURI(decodeURI(e))}catch{return encodeURI(e)}}const he=n.section`
  background: ${e=>"dark"===e.theme.name?"linear-gradient(135deg, #242424 0%, #1c1c1c 100%)":"#ffffff"};
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
`,ge=n.div`
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
`,ue=n.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 1023px) {
    gap: 1.1rem;
    max-width: 64ch;
    margin: 0 auto;
  }
`,xe=n(V.h2)`
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
`,fe=n(V.p)`
  font-size: var(--type-narrative-size);
  line-height: var(--type-narrative-leading);
  color: ${e=>e.theme.mutedText};
  margin: 0;
  max-width: 62ch;
`,we=n(V.div)`
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
`,ye=n.picture`
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;function ve({onLaunch:e}){const i=pe("/assets/business-connectors/Connectors1.avif"),a=pe("/assets/business-connectors/Connectors1.webp"),n=pe("/assets/business-connectors/Connectors1.jpg"),r=pe("/assets/business-connectors/Connectors1-mobile-900.avif"),o=pe("/assets/business-connectors/Connectors1-mobile-900.webp"),s=pe("/assets/business-connectors/Connectors1-mobile-900.jpg");return t.jsx(he,{children:t.jsxs(ge,{children:[t.jsxs(ue,{children:[t.jsx(xe,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7},children:"Business Connectors"}),t.jsx(fe,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.1},children:"Within Microsoft Copilot, I designed Business Connectors—an intelligent system that empowers users to connect loyalty accounts across merchants and unlock personalized perks, discounts, and rewards."}),t.jsx(fe,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.2},children:"This work demonstrates how thoughtful interaction design and AI integration create genuine value for users by reducing friction and consolidating loyalty rewards into Copilot."}),t.jsxs(y,{type:"button",initial:{opacity:0,y:10},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.3},onClick:e,children:["See Case Study ",t.jsx(v,{children:"→"})]})]}),t.jsx(we,{initial:{opacity:0,scale:.95},whileInView:{opacity:1,scale:1},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.1},children:t.jsxs(ye,{children:[t.jsx("source",{srcSet:r,type:"image/avif",media:"(max-width: 900px)"}),t.jsx("source",{srcSet:i,type:"image/avif"}),t.jsx("source",{srcSet:o,type:"image/webp",media:"(max-width: 900px)"}),t.jsx("source",{srcSet:a,type:"image/webp"}),t.jsx("source",{srcSet:s,media:"(max-width: 900px)"}),t.jsx("img",{src:n,alt:"Business Connectors interface design",loading:"lazy",decoding:"async"})]})})]})})}function be(){const e=r(),[i,a]=o.useState(!1),n=R[0];return o.useEffect(()=>{$(n.transitionImages)},[n.transitionImages]),t.jsxs(t.Fragment,{children:[t.jsx(ve,{onLaunch:async()=>{await P(n.transitionImages)?a(!0):e("/BusinessConnectors")}}),i&&t.jsx(L,{images:n.transitionImages,isActive:!0,onComplete:()=>e("/BusinessConnectors"),layoutId:n.slug,sharedSourceImageSrc:n.coverImage.src})]})}const je=n.section`
  background: ${e=>"dark"===e.theme.name?"#202020":"#f7f3f6"};
  padding: 8rem 0;

  @media (max-width: 640px) {
    padding: 4.5rem 0;
  }
`,ke=n.div`
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
`,Ie=n.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,Se=n(V.h2)`
  font-family: var(--font-display);
  margin: 0;
  color: ${e=>e.theme.strongText};
  font-size: clamp(2rem, 4vw, 3.5rem);
  line-height: 1.15;
`,Ce=n(V.p)`
  max-width: 62ch;
  margin: 0;
  color: ${e=>e.theme.mutedText};
  font-size: var(--type-narrative-size);
  line-height: var(--type-narrative-leading);
`,ze=n(V.div)`
  overflow: hidden;
  width: 100%;
  border-radius: 16px;

  @media (max-width: 1023px) {
    order: -1;
  }
`,$e=n.picture`
  display: block;
  width: 100%;
  aspect-ratio: 16 / 9;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;function Re(){return t.jsx(je,{children:t.jsxs(ke,{children:[t.jsxs(Ie,{children:[t.jsx(Se,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7},children:"Phia"}),t.jsx(Ce,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.1},children:"A pre-owned luxury experience for Microsoft Shopping, bringing curated products from brands like Chanel, Dior, Gucci, Hermes, and Louis Vuitton into discovery, retailer, and product-page flows."}),t.jsx(T,{slug:"phia",to:"/Phia",preloadRoute:()=>a(()=>i.import("./Phia-legacy-667c9pRh.js"),void 0,i.meta.url),children:({onClick:e,onIntent:i})=>t.jsxs(y,{type:"button",initial:{opacity:0,y:10},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.2},onClick:e,onPointerEnter:i,onFocus:i,onPointerDown:i,children:["See Case Study ",t.jsx(v,{children:"→"})]})})]}),t.jsx(ze,{initial:{opacity:0,scale:.97},whileInView:{opacity:1,scale:1},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.1},children:t.jsxs($e,{children:[t.jsx("source",{srcSet:"/assets/phia/hero-mobile-900.avif",type:"image/avif",media:"(max-width: 900px)"}),t.jsx("source",{srcSet:"/assets/phia/hero.avif",type:"image/avif"}),t.jsx("source",{srcSet:"/assets/phia/hero-mobile-900.webp",type:"image/webp",media:"(max-width: 900px)"}),t.jsx("source",{srcSet:"/assets/phia/hero.webp",type:"image/webp"}),t.jsx("source",{srcSet:"/assets/phia/hero-mobile-900.jpg",media:"(max-width: 900px)"}),t.jsx("img",{src:"/assets/phia/hero.jpg",alt:"Microsoft Shopping and Phia pre-owned luxury landing page",loading:"lazy",decoding:"async"})]})})]})})}function Pe(e){try{return encodeURI(decodeURI(e))}catch{return encodeURI(e)}}const Le=n.section`
  background: ${e=>"dark"===e.theme.name?"linear-gradient(135deg, #242424 0%, #1c1c1c 100%)":"linear-gradient(135deg, #f5f5f5 0%, #fafafa 100%)"};
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
`,Ve=n.div`
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
`,Te=n.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 1023px) {
    gap: 1.1rem;
    max-width: 64ch;
    margin: 0 auto;
  }
`,Ue=n(V.h2)`
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
`,Me=n(V.p)`
  font-size: var(--type-narrative-size);
  line-height: var(--type-narrative-leading);
  color: ${e=>e.theme.mutedText};
  margin: 0;
  max-width: 62ch;
`,Ae=n(V.div)`
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
`,Ee=n.picture`
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;function We({onLaunch:e}){const i=Pe("/assets/partnerships/Walmart 1.avif"),a=Pe("/assets/partnerships/Walmart 1.webp"),n=Pe("/assets/partnerships/Walmart 1.jpg");return t.jsx(Le,{children:t.jsxs(Ve,{children:[t.jsxs(Te,{children:[t.jsx(Ue,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7},children:"Partnership Pitches"}),t.jsx(Me,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.1},children:"I designed AI-to-AI and AI-to-business integration patterns for Microsoft Copilot, pitching bespoke flows to four active partnership conversations: Walmart, Amazon, Lyft, and DoorDash."}),t.jsx(Me,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.2},children:"This work explored what unique value AI can actually add beyond being a faster way to open an app, and introduced a new AI-to-AI handoff standard designed to go beyond what MCP supports."}),t.jsxs(y,{type:"button",initial:{opacity:0,y:10},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.3},onClick:e,children:["See Case Study ",t.jsx(v,{children:"→"})]})]}),t.jsx(Ae,{initial:{opacity:0,scale:.95},whileInView:{opacity:1,scale:1},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.1},children:t.jsxs(Ee,{children:[t.jsx("source",{srcSet:i,type:"image/avif"}),t.jsx("source",{srcSet:a,type:"image/webp"}),t.jsx("img",{src:n,alt:"Partnership Pitches, Walmart Copilot shopping flow",loading:"lazy",decoding:"async"})]})})]})})}function Fe(){const e=r(),[i,a]=o.useState(!1),n=R.find(e=>"partnerships"===e.slug);return o.useEffect(()=>{n&&$(n.transitionImages)},[n]),n?t.jsxs(t.Fragment,{children:[t.jsx(We,{onLaunch:async()=>{await P(n.transitionImages)?a(!0):e("/Partnerships")}}),i&&t.jsx(L,{images:n.transitionImages,isActive:!0,onComplete:()=>e("/Partnerships"),layoutId:n.slug,sharedSourceImageSrc:n.coverImage.src})]}):null}function De(e){try{return encodeURI(decodeURI(e))}catch{return encodeURI(e)}}const Be=n.section`
  background: ${e=>"dark"===e.theme.name?"linear-gradient(135deg, #1a2438 0%, #14171f 100%)":"linear-gradient(135deg, #eef4ff 0%, #fbfdff 100%)"};
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
`,He=n.div`
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
`,Ne=n.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 1023px) {
    gap: 1.1rem;
    max-width: 64ch;
    margin: 0 auto;
  }
`,Oe=n(V.h2)`
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
`,Je=n(V.p)`
  font-size: var(--type-narrative-size);
  line-height: var(--type-narrative-leading);
  color: ${e=>e.theme.mutedText};
  margin: 0;
  max-width: 62ch;
`,Ge=n(V.div)`
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
`,_e=n.picture`
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 4 / 3;

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;function Ke({onLaunch:e}){const i=De("/assets/copilot-pay/Property 1=Default.avif"),a=De("/assets/copilot-pay/Property 1=Default.webp"),n=De("/assets/copilot-pay/Property 1=Default.jpg"),r=De("/assets/copilot-pay/Property 1=Default-mobile-900.avif"),o=De("/assets/copilot-pay/Property 1=Default-mobile-900.webp"),s=De("/assets/copilot-pay/Property 1=Default-mobile-900.jpg");return t.jsx(Be,{children:t.jsxs(He,{children:[t.jsxs(Ne,{children:[t.jsx(Oe,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7},children:"Copilot Pay"}),t.jsx(Je,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.1},children:"Copilot Pay is Microsoft's first native checkout inside Copilot across browser, desktop, and mobile. It replaces retailer redirects with a more continuous purchase flow using Apple Pay, PayPal, Venmo, Google Pay, Shop Pay, and Amazon Pay."}),t.jsx(Je,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.2},children:"This case study focuses on express checkout flows, multi-wallet interaction design, and the design-system work required to make AI commerce feel scalable and trustworthy across Microsoft surfaces."}),t.jsxs(y,{type:"button",initial:{opacity:0,y:10},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.3},onClick:e,children:["See Case Study ",t.jsx(v,{children:"→"})]})]}),t.jsx(Ge,{initial:{opacity:0,scale:.95},whileInView:{opacity:1,scale:1},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.1},children:t.jsxs(_e,{children:[t.jsx("source",{srcSet:r,type:"image/avif",media:"(max-width: 900px)"}),t.jsx("source",{srcSet:i,type:"image/avif"}),t.jsx("source",{srcSet:o,type:"image/webp",media:"(max-width: 900px)"}),t.jsx("source",{srcSet:a,type:"image/webp"}),t.jsx("source",{srcSet:s,media:"(max-width: 900px)"}),t.jsx("img",{src:n,alt:"Copilot Pay interface design",loading:"eager",fetchPriority:"high",decoding:"async"})]})})]})})}function qe(){const e=r(),[n,s]=o.useState(!1),d=R.find(e=>"copilot-pay"===e.slug);return o.useEffect(()=>{d&&($(d.transitionImages),a(()=>i.import("./CopilotPay-legacy-C0HFA2Sw.js"),void 0,i.meta.url))},[d]),d?t.jsxs(t.Fragment,{children:[t.jsx(Ke,{onLaunch:async()=>{await P(d.transitionImages)?s(!0):e("/CopilotPay")}}),n&&t.jsx(L,{images:d.transitionImages,isActive:!0,onComplete:()=>e("/CopilotPay"),layoutId:d.slug,sharedSourceImageSrc:d.coverImage.src})]}):null}function Xe(e){try{return encodeURI(decodeURI(e))}catch{return encodeURI(e)}}const Qe=n.section`
  background: ${e=>"dark"===e.theme.name?"linear-gradient(135deg, #182032 0%, #14171f 100%)":"linear-gradient(135deg, #edf5ff 0%, #fbfdff 100%)"};
  padding: 7rem 0;
  display: flex;
  align-items: center;

  @media (max-width: 1023px) {
    padding: 5rem 0;
  }

  @media (min-width: 768px) {
    padding: 8rem 0;
  }
`,Ye=n.div`
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
`,Ze=n.div`
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  max-width: 68ch;
`,ei=n(V.p)`
  font-family: var(--font-mono);
  margin: 0;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${e=>"dark"===e.theme.name?"#8fb3df":"#416287"};
`,ii=n(V.h2)`
  font-family: var(--font-display);
  margin: 0;
  font-size: clamp(2.4rem, 4.5vw, 4.3rem);
  line-height: 0.96;
  color: ${e=>e.theme.strongText};
`,ti=n(V.p)`
  margin: 0;
  font-size: var(--type-narrative-size);
  line-height: var(--type-narrative-leading);
  color: ${e=>e.theme.mutedText};
`,ai=n(V.div)`
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
`,ni=n.picture`
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;function ri({onLaunch:e}){const i=Xe("/assets/journeys/Journeys L2.avif"),a=Xe("/assets/journeys/Journeys L2.webp"),n=Xe("/assets/journeys/Journeys L2.jpg"),r=Xe("/assets/journeys/Journeys L2-mobile-900.avif"),o=Xe("/assets/journeys/Journeys L2-mobile-900.webp"),s=Xe("/assets/journeys/Journeys L2-mobile-900.jpg");return t.jsx(Qe,{children:t.jsxs(Ye,{children:[t.jsxs(Ze,{children:[t.jsx(ei,{initial:{opacity:0,y:16},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.6},children:"New Case Study"}),t.jsx(ii,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.05},children:"Journeys"}),t.jsx(ti,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.1},children:"My Shopping / Journeys for Microsoft Shopping explored how to create a central hub that reduces shopping complexity, helps users save money, and surfaces guidance based on where they are in the purchase journey."}),t.jsx(ti,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.18},children:"I worked with a principal designer on three user-flow scenarios, interaction models, and feed-based versus static hub layouts. The latest iteration of Journeys is now shipped in the Copilot app."}),t.jsxs(y,{type:"button",initial:{opacity:0,y:10},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.25},onClick:e,children:["See Case Study ",t.jsx(v,{children:"→"})]})]}),t.jsx(ai,{initial:{opacity:0,scale:.97},whileInView:{opacity:1,scale:1},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.1},children:t.jsxs(ni,{children:[t.jsx("source",{srcSet:r,type:"image/avif",media:"(max-width: 900px)"}),t.jsx("source",{srcSet:i,type:"image/avif"}),t.jsx("source",{srcSet:o,type:"image/webp",media:"(max-width: 900px)"}),t.jsx("source",{srcSet:a,type:"image/webp"}),t.jsx("source",{srcSet:s,media:"(max-width: 900px)"}),t.jsx("img",{src:n,alt:"Journeys dashboard with personalized shopping modules",loading:"lazy",decoding:"async"})]})})]})})}function oi(){const e=r(),[n,s]=o.useState(!1),d=R.find(e=>"journeys"===e.slug);return o.useEffect(()=>{d&&($(d.transitionImages),a(()=>i.import("./Journeys-legacy-qZVqzN6y.js"),void 0,i.meta.url))},[d]),d?t.jsxs(t.Fragment,{children:[t.jsx(ri,{onLaunch:async()=>{await P(d.transitionImages)?s(!0):e("/Journeys")}}),n&&t.jsx(L,{images:d.transitionImages,isActive:!0,onComplete:()=>e("/Journeys"),layoutId:d.slug,sharedSourceImageSrc:d.coverImage.src})]}):null}function si(e){try{return encodeURI(decodeURI(e))}catch{return encodeURI(e)}}const di=n.section`
  background: ${e=>"dark"===e.theme.name?"linear-gradient(135deg, #1b2238 0%, #1a1622 100%)":"linear-gradient(135deg, #f1f6ff 0%, #fdfbff 100%)"};
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
`,ci=n.div`
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
`,li=n.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 1023px) {
    gap: 1.1rem;
    max-width: 64ch;
    margin: 0 auto;
  }
`,mi=n(V.h2)`
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
`,pi=n(V.p)`
  font-size: var(--type-narrative-size);
  line-height: var(--type-narrative-leading);
  color: ${e=>e.theme.mutedText};
  margin: 0;
  max-width: 62ch;
`,hi=n(V.div)`
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
`,gi=n.picture`
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;function ui({onLaunch:e}){const i=si("/assets/cashback-hub/hero.avif"),a=si("/assets/cashback-hub/hero.webp"),n=si("/assets/cashback-hub/hero.jpg"),r=si("/assets/cashback-hub/hero-mobile-900.avif"),o=si("/assets/cashback-hub/hero-mobile-900.webp"),s=si("/assets/cashback-hub/hero-mobile-900.jpg");return t.jsx(di,{children:t.jsxs(ci,{children:[t.jsxs(li,{children:[t.jsx(mi,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7},children:"Cashback Hub"}),t.jsx(pi,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.1},children:"The Cashback Hub lets users track, manage, and redeem cashback rewards across Microsoft Shopping surfaces. I led end-to-end design — interaction, visual, and cross-platform layouts — for the full hub, stores search, interstitials, and the Edge Shoreline companion pane."}),t.jsx(pi,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.2},children:"The case study focuses on bringing clarity to a delayed-payout cashback journey, designing a compact Edge companion view, and aligning a shared visual system that scales across Microsoft Shopping surfaces."}),t.jsxs(y,{type:"button",initial:{opacity:0,y:10},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.3},onClick:e,children:["See Case Study ",t.jsx(v,{children:"→"})]})]}),t.jsx(hi,{initial:{opacity:0,scale:.95},whileInView:{opacity:1,scale:1},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.1},children:t.jsxs(gi,{children:[t.jsx("source",{srcSet:r,type:"image/avif",media:"(max-width: 900px)"}),t.jsx("source",{srcSet:i,type:"image/avif"}),t.jsx("source",{srcSet:o,type:"image/webp",media:"(max-width: 900px)"}),t.jsx("source",{srcSet:a,type:"image/webp"}),t.jsx("source",{srcSet:s,media:"(max-width: 900px)"}),t.jsx("img",{src:n,alt:"Microsoft Shopping Cashback Hub overview",loading:"lazy",decoding:"async"})]})})]})})}function xi(){const e=r(),[n,s]=o.useState(!1),d=R.find(e=>"cashback-hub"===e.slug);return o.useEffect(()=>{d&&($(d.transitionImages),a(()=>i.import("./CashbackHub-legacy-CwhEygl-.js"),void 0,i.meta.url))},[d]),d?t.jsxs(t.Fragment,{children:[t.jsx(ui,{onLaunch:async()=>{await P(d.transitionImages)?s(!0):e("/CashbackHub")}}),n&&t.jsx(L,{images:d.transitionImages,isActive:!0,onComplete:()=>e("/CashbackHub"),layoutId:d.slug,sharedSourceImageSrc:d.coverImage.src})]}):null}function fi(e){try{return encodeURI(decodeURI(e))}catch{return encodeURI(e)}}const wi=n.section`
  background: linear-gradient(135deg, #1a1a1a 0%, #2a1f3d 100%);
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
`,yi=n.div`
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
`,vi=n.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 1023px) {
    gap: 1.1rem;
    max-width: 64ch;
    margin: 0 auto;
  }
`,bi=n(V.h2)`
  font-family: var(--font-display);
  font-size: clamp(1.85rem, 4vw, 2.25rem);
  font-weight: 700;
  line-height: 1.2;
  color: #ffffff;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 3rem;
  }

  @media (min-width: 1024px) {
    font-size: 3.5rem;
  }
`,ji=n(V.p)`
  font-size: var(--type-narrative-size);
  line-height: var(--type-narrative-leading);
  color: #d1d5db;
  margin: 0;
  max-width: 62ch;
`,ki=n(V.div)`
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
`,Ii=n.picture`
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;function Si({onLaunch:e}){const i=fi("/assets/video-commerce/Full Frame.avif"),a=fi("/assets/video-commerce/Full Frame.webp"),n=fi("/assets/video-commerce/Full Frame.jpg"),r=fi("/assets/video-commerce/Full Frame-mobile-900.avif"),o=fi("/assets/video-commerce/Full Frame-mobile-900.webp"),s=fi("/assets/video-commerce/Full Frame-mobile-900.jpg");return t.jsx(wi,{children:t.jsxs(yi,{children:[t.jsxs(vi,{children:[t.jsx(bi,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7},children:"Video Commerce"}),t.jsx(ji,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.1},children:"An executive-driven moonshot exploring live and short-form video commerce across Bing, MSN, Edge, and Microsoft Start — partnering with TalkShopLive in the U.S., QVC Japan, and Roposo in India to bring creator-led product content into the Microsoft shopping ecosystem."}),t.jsx(ji,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.2},children:"The case study covers the video shopping destination, multi-SKU product mapping, live commerce interactions, mobile hierarchy, and a first-party native player exploration."}),t.jsxs(y,{type:"button",initial:{opacity:0,y:10},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.3},onClick:e,children:["See Case Study ",t.jsx(v,{children:"→"})]})]}),t.jsx(ki,{initial:{opacity:0,scale:.95},whileInView:{opacity:1,scale:1},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.1},children:t.jsxs(Ii,{children:[t.jsx("source",{srcSet:r,type:"image/avif",media:"(max-width: 900px)"}),t.jsx("source",{srcSet:i,type:"image/avif"}),t.jsx("source",{srcSet:o,type:"image/webp",media:"(max-width: 900px)"}),t.jsx("source",{srcSet:a,type:"image/webp"}),t.jsx("source",{srcSet:s,media:"(max-width: 900px)"}),t.jsx("img",{src:n,alt:"Microsoft Bing Shopping video commerce destination",loading:"lazy",decoding:"async"})]})})]})})}function Ci(){const e=r(),[n,s]=o.useState(!1),d=R.find(e=>"video-commerce"===e.slug);return o.useEffect(()=>{d&&($(d.transitionImages),a(()=>i.import("./VideoCommerce-legacy-CKW_qh_N.js"),void 0,i.meta.url))},[d]),d?t.jsxs(t.Fragment,{children:[t.jsx(Si,{onLaunch:async()=>{await P(d.transitionImages)?s(!0):e("/VideoCommerce")}}),n&&t.jsx(L,{images:d.transitionImages,isActive:!0,onComplete:()=>e("/VideoCommerce"),layoutId:d.slug,sharedSourceImageSrc:d.coverImage.src})]}):null}function zi(e){try{return encodeURI(decodeURI(e))}catch{return encodeURI(e)}}const $i=n.section`
  background: ${e=>"dark"===e.theme.name?"linear-gradient(135deg, #0d1b2e 0%, #1a1622 100%)":"linear-gradient(135deg, #e8f4ff 0%, #f5f8ff 100%)"};
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
`,Ri=n.div`
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
`,Pi=n.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 1023px) {
    gap: 1.1rem;
    max-width: 64ch;
    margin: 0 auto;
  }
`,Li=n(V.span)`
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
`,Vi=n(V.h2)`
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
`,Ti=n(V.p)`
  font-size: var(--type-narrative-size);
  line-height: var(--type-narrative-leading);
  color: ${e=>e.theme.mutedText};
  margin: 0;
  max-width: 62ch;
`,Ui=n(V.div)`
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
`,Mi=n.picture`
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;function Ai({onLaunch:e}){const i=zi("/assets/windows-notifications/Prong 2 price drop.avif"),a=zi("/assets/windows-notifications/Prong 2 price drop.webp"),n=zi("/assets/windows-notifications/Prong 2 price drop.png"),r=zi("/assets/windows-notifications/Prong 2 price drop-mobile-900.avif"),o=zi("/assets/windows-notifications/Prong 2 price drop-mobile-900.webp"),s=zi("/assets/windows-notifications/Prong 2 price drop-mobile-900.png");return t.jsx($i,{children:t.jsxs(Ri,{children:[t.jsxs(Pi,{children:[t.jsx(Li,{initial:{opacity:0,y:10},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.5},children:"Windows OS"}),t.jsx(Vi,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7},children:"Windows Notifications"}),t.jsx(Ti,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.1},children:"Bing and Edge Shopping give users ways to signal explicit commerce intent. The payoff for that intent used to stay inside the browser. I designed four experiences: price drops, back-in-stock, cash back, and coupons, to surface those moments in Windows itself, on the taskbar and notification surface every user sees."}),t.jsx(Ti,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.2},children:"The case study covers OS-level governance, Windows UX Labs Value and Ad Perception testing, Triple Cashback Tuesday research findings, and what it took to ship shopping features from the browser into the Windows OS layer."}),t.jsxs(y,{type:"button",initial:{opacity:0,y:10},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.3},onClick:e,children:["See Case Study ",t.jsx(v,{children:"→"})]})]}),t.jsx(Ui,{initial:{opacity:0,scale:.95},whileInView:{opacity:1,scale:1},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.1},children:t.jsxs(Mi,{children:[t.jsx("source",{srcSet:r,type:"image/avif",media:"(max-width: 900px)"}),t.jsx("source",{srcSet:i,type:"image/avif"}),t.jsx("source",{srcSet:o,type:"image/webp",media:"(max-width: 900px)"}),t.jsx("source",{srcSet:a,type:"image/webp"}),t.jsx("source",{srcSet:s,media:"(max-width: 900px)"}),t.jsx("img",{src:n,alt:"Windows price drop notification prong",loading:"lazy",decoding:"async"})]})})]})})}function Ei(){const e=r(),[n,s]=o.useState(!1),d=R.find(e=>"windows-notifications"===e.slug);return o.useEffect(()=>{d&&($(d.transitionImages),a(()=>i.import("./WindowsNotifications-legacy-BGXSmBl5.js"),void 0,i.meta.url))},[d]),d?t.jsxs(t.Fragment,{children:[t.jsx(Ai,{onLaunch:async()=>{await P(d.transitionImages)?s(!0):e("/WindowsNotifications")}}),n&&t.jsx(L,{images:d.transitionImages,isActive:!0,onComplete:()=>e("/WindowsNotifications"),layoutId:d.slug,sharedSourceImageSrc:d.coverImage.src})]}):null}const Wi=d`
  0% { transform: translate(-50%, -60%) rotate(0deg); }
  20% { transform: translate(-20%, -80%) rotate(90deg); }
  40% { transform: translate(10%, -40%) rotate(180deg); }
  60% { transform: translate(-40%, -20%) rotate(270deg); }
  80% { transform: translate(-70%, -50%) rotate(320deg); }
  100% { transform: translate(-50%, -60%) rotate(360deg); }
`,Fi=d`
  0% { transform: translate(60%, -50%) rotate(0deg); }
  20% { transform: translate(80%, -20%) rotate(90deg); }
  40% { transform: translate(40%, -70%) rotate(180deg); }
  60% { transform: translate(20%, -30%) rotate(270deg); }
  80% { transform: translate(70%, -60%) rotate(320deg); }
  100% { transform: translate(60%, -50%) rotate(360deg); }
`,Di=n.div`
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
    background: rgba(255, 255, 255, 0.3);
    z-index: 0;
  }
  &::before {
    top: 20%;
    left: 10%;
    animation: ${Wi} 35s ease-in-out infinite;
  }
  &::after {
    top: 40%;
    left: 65%;
    animation: ${Fi} 40s ease-in-out infinite;
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
`,Bi=n.div`
  min-height: 100vh;
  width: 100%;
  display: grid;
  place-items: center;
  padding: 6rem 1.5rem 2rem;
  background: ${e=>e.theme.surface};
  position: relative;
  z-index: 1;
`,Hi=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.85rem;
  text-align: center;
  max-width: 40rem;
  margin-bottom: 1.5rem;
  color: ${e=>e.theme.strongText};
`,Ni=n.p`
  font-family: var(--font-mono);
  margin: 0;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${e=>e.theme.mutedText};
`,Oi=n.h1`
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3.4rem);
  line-height: 1;
`,Ji=n.p`
  margin: 0;
  font-size: 1rem;
  line-height: 1.6;
  color: ${e=>e.theme.mutedText};
`,Gi=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,_i=n.form`
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
`,Ki=n.input`
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
`,qi=n.button`
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
`,Xi={blue:{light:{bg:"#eaf6ff",fg:"#1a3a5d"},dark:{bg:"#0f1d2e",fg:"#cfe2f5"}},purple:{light:{bg:"#f7eaff",fg:"#5d2d5d"},dark:{bg:"#1f1226",fg:"#e4cdf0"}},cream:{light:{bg:"#fffbe6",fg:"#5d5d5d"},dark:{bg:"#1f1d12",fg:"#efe7c4"}}},Qi=n(g)`
  background-color: ${e=>Xi[e.$tone]["dark"===e.theme.name?"dark":"light"].bg};
  --accent-fg: ${e=>Xi[e.$tone]["dark"===e.theme.name?"dark":"light"].fg};
`,Yi=n(f)`
  color: var(--accent-fg);
  font-family: var(--font-display);
  /* Scales from ~1.25rem on phones up to ~2rem on large desktops, mirroring
     the clamp pattern used by the foundation typography tokens. */
  font-size: clamp(1.25rem, 1.4vw + 0.85rem, 2rem);
  max-width: 50ch;
  line-height: 1.45;
  margin: 0;
`,Zi=(e("default",()=>{const[e,i]=o.useState(""),[a,n]=o.useState(()=>"true"===sessionStorage.getItem("microsoftAuth")),[r,d]=o.useState(""),p=o.useMemo(()=>[s.createRef(),s.createRef()],[]);o.useEffect(()=>(p.forEach((e,i)=>{e.current&&(e.current.onplay=(e=>()=>{p.forEach((i,t)=>{t!==e&&i.current&&i.current.pause()})})(i))}),()=>{p.forEach(e=>{e.current&&(e.current.onplay=null)})}),[a,p]),o.useLayoutEffect(()=>{window.scrollTo(0,0)},[]);const w=i=>{i.preventDefault(),"microsoftshopping"===e?(n(!0),d(""),sessionStorage.setItem("microsoftAuth","true")):d("Incorrect password.")};return a?t.jsxs(b,{children:[t.jsx(c,{...m.microsoft,sameAs:l.sameAs,keywords:m.microsoft.keywords,siteDefaults:l}),t.jsx(me,{title:"Microsoft",imageBaseName:"assets/MSFTlogo",imageExt:"png",imageAlt:"Microsoft Logo",imageWidth:"24vw",imageNaturalWidth:785,imageNaturalHeight:786,invertOnDark:!0,buttons:[{href:"https://www.microsoft.com/en-us/shopping/?form=MT00PA&cs=2199494592",label:"Visit Shopping"}],divider:!0}),t.jsx(j,{children:t.jsxs(k,{children:[t.jsxs(I,{children:[t.jsx(S,{children:"Project Type"}),t.jsx(C,{children:"Cross-platform product leadership"})]}),t.jsxs(I,{children:[t.jsx(S,{children:"Digital Product"}),t.jsx(C,{children:"Microsoft Shopping ecosystem across Bing, Copilot, Windows, Outlook, and Microsoft Start."})]}),t.jsxs(I,{children:[t.jsx(S,{children:"My Role"}),t.jsx(C,{children:"Product Designer leading research, concept development, and design execution across multiple teams and surfaces."})]}),t.jsxs(I,{children:[t.jsx(S,{children:"Timeframe"}),t.jsx(C,{children:"4 years"})]})]})}),t.jsx(h,{children:t.jsx(at,{ref:p[0],src:"/assets/microsoft-demo2.mp4",poster:"/assets/Preview1.png"})}),t.jsx(Fe,{}),t.jsx(be,{}),t.jsx(Re,{}),t.jsx(qe,{}),t.jsx(oi,{}),t.jsx(xi,{}),t.jsx(Ei,{}),t.jsx(Ci,{}),t.jsx(g,{style:{backgroundColor:"var(--surface-muted, #f5f5f5)"},children:t.jsx(u,{children:t.jsx(Yi,{style:{color:"var(--text-strong, #222)"},children:"This work focused on reimagining shopping as an educational experience rather than a transactional one. I designed early concepts for Copilot Shopping and a Generative Results Page (GRP) that helped users understand product categories, compare specs, and evaluate pricing. These experiences aimed to reduce decision fatigue while increasing trust and confidence for high-consideration purchases."})})}),t.jsx(h,{children:t.jsx(x,{src:U,avif:M,webp:A})}),t.jsx(h,{children:t.jsx(x,{src:E,avif:W,webp:F})}),t.jsx(h,{children:t.jsx(at,{ref:p[1],src:"/assets/microsoft-demo.mp4",poster:"/assets/Preview2.png"})}),t.jsx(Qi,{$tone:"purple",children:t.jsx(u,{children:t.jsx(Yi,{children:"This work focused on reducing friction at the moment of purchase through Microsoft Wallet and the Cashback Hub. I contributed to experiences that let users securely save payment methods, passwords, and rewards for faster checkout across Microsoft surfaces. More recently, this work has extended into Copilot, exploring how AI can surface cashback, apply rewards, and streamline checkout without disrupting user trust."})})}),t.jsx(h,{children:t.jsx(x,{src:D,avif:B,webp:H})}),t.jsx(Qi,{$tone:"cream",children:t.jsx(u,{children:t.jsx(Yi,{children:"I worked across Bing Shopping, Microsoft Start, Windows, Outlook, and Copilot to create consistent commerce experiences at scale. This included Outlook shopping concepts for managing promotions, feed-based browsing, and unsubscribe flows. The goal was to unify shopping behavior across Microsoft’s surfaces while respecting context and user intent."})})}),t.jsx(h,{children:t.jsx(x,{src:N,avif:O,webp:J})}),t.jsx(h,{children:t.jsx(x,{src:G,avif:_,webp:K})}),t.jsx(h,{children:t.jsx(x,{src:q,avif:X,webp:Q})}),t.jsx(h,{children:t.jsx(x,{src:Y,avif:Z,webp:ee})}),t.jsx(g,{style:{backgroundColor:"black"},children:t.jsx(u,{children:t.jsxs(f,{style:{color:"white",textAlign:"center"},children:["Microsoft AI CEO — Mustafa Suleyman",t.jsx("br",{}),"Shopping Design Lead — Ashley Hemingway",t.jsx("br",{}),"Development Lead — Avinash Vemuluru",t.jsx("br",{})]})})})]}):t.jsxs(Bi,{children:[t.jsx(c,{...m.microsoft,sameAs:l.sameAs,keywords:m.microsoft.keywords,siteDefaults:l}),t.jsx(Di,{}),t.jsxs(Gi,{children:[t.jsxs(Hi,{children:[t.jsx(Ni,{children:"Microsoft Case Studies"}),t.jsx(Oi,{children:"Protected Microsoft work samples"}),t.jsx(Ji,{children:"Enter the password to continue to the Microsoft project page and view the protected case study."})]}),t.jsxs(_i,{onSubmit:w,children:[t.jsx("h2",{style:{margin:0},children:"Enter Password"}),t.jsx(Ki,{type:"password",value:e,onChange:e=>i(e.target.value),placeholder:"Password",autoFocus:!0}),t.jsx(qi,{type:"submit",children:"Continue"}),r&&t.jsx("div",{style:{color:"red",marginTop:"0.5rem"},children:r})]})]})]})}),n.div`
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
`),et=n.div`
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
`,it=n.div`
  width: 100%;
  max-width: 64rem;
  margin: 0 auto 4vh auto;
  padding: 0 1.5rem;
  box-sizing: border-box;
`,tt=n.div`
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
`,at=s.forwardRef(({src:e,poster:i},a)=>{const[n,r]=o.useState(!1),s=o.useRef(null),d=a||s;return o.useEffect(()=>{const e=d.current;if(!e)return;const i=()=>r(!0),t=()=>r(!1),a=()=>r(!1);return e.addEventListener("play",i),e.addEventListener("pause",t),e.addEventListener("ended",a),()=>{e.removeEventListener("play",i),e.removeEventListener("pause",t),e.removeEventListener("ended",a)}},[d]),t.jsx(it,{children:t.jsxs(tt,{"data-cursor":"link",children:[t.jsx("video",{ref:d,src:e,controls:!0,playsInline:!0,preload:"none",poster:i,"data-cursor":"link",style:{width:"100%",height:"100%",borderRadius:"inherit",background:"#000",display:"block",objectFit:"cover"}}),!n&&t.jsx(Zi,{onClick:()=>{const e=d.current;e&&(e.muted=!1,e.volume=1,e.play().catch(()=>{}))},role:"button","aria-label":"Play video","data-cursor":"link",children:t.jsx(et,{children:t.jsxs("svg",{width:"48",height:"48",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("circle",{cx:"24",cy:"24",r:"24",fill:"rgba(0,0,0,0.5)"}),t.jsx("polygon",{points:"18,14 36,24 18,34",fill:"#fff"})]})})})]})})})}}});
