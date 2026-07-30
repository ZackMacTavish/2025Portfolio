System.register(["./three-legacy-pzFKRJSU.js","./vendor-legacy-Dy2oZrq6.js","./metadata-legacy-D1k7S1BT.js","./CaseStudyPrimitives-legacy-QhpchpWo.js","./CaseStudyIntroCTA-legacy-DgJbOCwz.js","./index-legacy-rMHrgVJl.js","./index-legacy-BZX8nf4g.js"],function(e,i){"use strict";var t,a,n,r,o,s,d,c,m,l,p,h,g,u,x,f,w,y,b,j,v,k,I,S,C,z,R,$,L,P,U;return{setters:[e=>{t=e.j,a=e._},e=>{n=e.c,r=e.d,o=e.b,s=e.R,d=e.l},e=>{c=e.E,m=e.s,l=e.p},e=>{p=e.f,h=e.R,g=e.F,u=e.T,x=e.S,f=e.a},e=>{w=e.b,y=e.C,b=e.a,j=e.S,v=e.c,k=e.d,I=e.e,S=e.f,C=e.g},e=>{z=e.a},e=>{R=e.w,$=e.c,L=e.s,P=e.C,U=e.m}],execute:function(){const T=""+new URL("Copilot style GRP-BosxFHQg.png",i.meta.url).href,V=""+new URL("Copilot style GRP-DowTFPoE.avif",i.meta.url).href,M=""+new URL("Copilot style GRP-s_4NMnd3.webp",i.meta.url).href,W=""+new URL("HP-Ck0dhCe7.png",i.meta.url).href,A=""+new URL("HP-CEl-KKvF.avif",i.meta.url).href,E=""+new URL("HP-B_oOarUu.webp",i.meta.url).href,F=""+new URL("Wallet-XTCp021N.png",i.meta.url).href,D=""+new URL("Wallet-5CNdOCa-.avif",i.meta.url).href,B=""+new URL("Wallet-BgqKW0ov.webp",i.meta.url).href,H=""+new URL("Ruby-BRMz_asY.png",i.meta.url).href,N=""+new URL("Ruby-DNkWeBUd.avif",i.meta.url).href,O=""+new URL("Ruby-Bv_l2Gu8.webp",i.meta.url).href,J=""+new URL("ReceiptScan-C-C8E7EX.png",i.meta.url).href,G=""+new URL("ReceiptScan-Wv6bqvXe.avif",i.meta.url).href,_=""+new URL("ReceiptScan-_45Kgagg.webp",i.meta.url).href,q=""+new URL("ShoppingCopilot-LmtofWTU.png",i.meta.url).href,K=""+new URL("ShoppingCopilot-yKuhCNsH.avif",i.meta.url).href,X=""+new URL("ShoppingCopilot-BlSa8vEq.webp",i.meta.url).href,Q=""+new URL("Outlook-BIfrrwLP.png",i.meta.url).href,Y=""+new URL("Outlook-rNhdafsz.avif",i.meta.url).href,Z=""+new URL("Outlook-DTyC7tTV.webp",i.meta.url).href,ee=n.div`
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
`;function ie(e){if(!e)return e;try{return encodeURI(decodeURI(e))}catch{return encodeURI(e)}}const te=n.div`
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
      gap: 0.75rem;
      margin: 0 auto 4vh auto;
      padding-left: 2vw;
      padding-right: 2vw;
      padding-top: 0;
    }
`,ae=n.div`
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
      background: transparent;
      padding: 0;
`,ne=n.div`
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
`,re=n.img`
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
    max-width: 260px;
    min-width: 0;
    height: auto;
    margin-bottom: 0;
    object-fit: contain;
    border-radius: 18px;
  }
`,oe=n.h1`
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
`,se=n.div`
  height: 1px;
  background: ${e=>e.theme.border};
  width: 48px;
  margin: 0.1em 0 0.3em 0;

  @media (max-width: 850px) {
    margin: 0 auto 0.2rem;
  }
`;function de({imageBaseName:e=null,imageSrc:i="",imageAvif:a=null,imageWebp:n=null,imageAlt:r="",$imageWidth:o="38vw",buttons:s=[],divider:d=!0,imageExt:c="jpg",title:m="",imageNaturalWidth:l=null,imageNaturalHeight:h=null,invertOnDark:g=!1}){const u=e?`${e.startsWith("assets/")?"/":"/src/"}${e}`:null,x=u?ie(`${u}.avif`):null,f=u?ie(`${u}.webp`):null,y=u?ie(`${u}.${c||"jpg"}`):null,b=Math.max(l||0,h||0)>900,j=b?p(x):null,v=b?p(f):null,k=b?p(y):null;return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"mobile-nav-spacer",style:{display:"block",width:"100%",height:"12vh",minHeight:0,padding:0,margin:0,background:"transparent",zIndex:0,pointerEvents:"none",position:"relative"}}),t.jsxs(te,{className:"first",children:[t.jsxs(ae,{children:[t.jsx(oe,{children:m}),d&&t.jsx(se,{}),t.jsx(ee,{children:s.map(({href:e,label:i},a)=>t.jsxs(w,{href:e,target:"_blank",rel:"noopener noreferrer",children:[i," ",t.jsx(z,{style:{marginLeft:6,fontSize:"1.2em"}})]},a))})]}),t.jsx(ne,{children:e?t.jsxs("picture",{children:[j&&t.jsx("source",{srcSet:j,type:"image/avif",media:"(max-width: 900px)"}),t.jsx("source",{srcSet:x,type:"image/avif"}),v&&t.jsx("source",{srcSet:v,type:"image/webp",media:"(max-width: 900px)"}),t.jsx("source",{srcSet:f,type:"image/webp"}),k&&t.jsx("source",{srcSet:k,media:"(max-width: 900px)"}),t.jsx(re,{src:y,alt:r,$imageWidth:o,$invertOnDark:g,$naturalWidth:l||void 0,$naturalHeight:h||void 0,width:l||void 0,height:h||void 0,fetchPriority:"high",loading:"eager",decoding:"sync"})]}):t.jsx(re,{src:ie(i),alt:r,$imageWidth:o,width:l||void 0,height:h||void 0,fetchPriority:"high",loading:"eager",decoding:"async"})})]})]})}function ce(e){try{return encodeURI(decodeURI(e))}catch{return encodeURI(e)}}const me=n.section`
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
`,le=n.div`
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
`,pe=n.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 1023px) {
    gap: 1.1rem;
    max-width: 64ch;
    margin: 0 auto;
  }
`,he=n(U.h2)`
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
`,ge=n(U.p)`
  font-size: 0.98rem;
  line-height: 1.65;
  color: ${e=>e.theme.mutedText};
  margin: 0;
  max-width: 62ch;

  @media (min-width: 768px) {
    font-size: 1.125rem;
    line-height: 1.72;
  }
`,ue=n(U.div)`
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
`,xe=n.picture`
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;function fe({onLaunch:e}){const i=ce("/assets/business-connectors/Connectors1.avif"),a=ce("/assets/business-connectors/Connectors1.webp"),n=ce("/assets/business-connectors/Connectors1.jpg"),r=ce("/assets/business-connectors/Connectors1-mobile-900.avif"),o=ce("/assets/business-connectors/Connectors1-mobile-900.webp"),s=ce("/assets/business-connectors/Connectors1-mobile-900.jpg");return t.jsx(me,{children:t.jsxs(le,{children:[t.jsxs(pe,{children:[t.jsx(he,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7},children:"Business Connectors"}),t.jsx(ge,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.1},children:"Within Microsoft Copilot, I designed Business Connectors—an intelligent system that empowers users to connect loyalty accounts across merchants and unlock personalized perks, discounts, and rewards."}),t.jsx(ge,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.2},children:"This work demonstrates how thoughtful interaction design and AI integration create genuine value for users by reducing friction and consolidating loyalty rewards into Copilot."}),t.jsxs(y,{type:"button",initial:{opacity:0,y:10},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.3},onClick:e,children:["See Case Study ",t.jsx(b,{children:"→"})]})]}),t.jsx(ue,{initial:{opacity:0,scale:.95},whileInView:{opacity:1,scale:1},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.1},children:t.jsxs(xe,{children:[t.jsx("source",{srcSet:r,type:"image/avif",media:"(max-width: 900px)"}),t.jsx("source",{srcSet:i,type:"image/avif"}),t.jsx("source",{srcSet:o,type:"image/webp",media:"(max-width: 900px)"}),t.jsx("source",{srcSet:a,type:"image/webp"}),t.jsx("source",{srcSet:s,media:"(max-width: 900px)"}),t.jsx("img",{src:n,alt:"Business Connectors interface design",loading:"lazy",decoding:"async"})]})})]})})}function we(){const e=r(),[i,a]=o.useState(!1),n=$[0];return o.useEffect(()=>{R(n.transitionImages)},[n.transitionImages]),t.jsxs(t.Fragment,{children:[t.jsx(fe,{onLaunch:async()=>{await L(n.transitionImages)?a(!0):e("/BusinessConnectors")}}),i&&t.jsx(P,{images:n.transitionImages,isActive:!0,onComplete:()=>e("/BusinessConnectors"),layoutId:n.slug,sharedSourceImageSrc:n.coverImage.src})]})}function ye(e){try{return encodeURI(decodeURI(e))}catch{return encodeURI(e)}}const be=n.section`
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
`,je=n.div`
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
`,ve=n.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 1023px) {
    gap: 1.1rem;
    max-width: 64ch;
    margin: 0 auto;
  }
`,ke=n(U.h2)`
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
`,Ie=n(U.p)`
  font-size: 0.98rem;
  line-height: 1.65;
  color: ${e=>e.theme.mutedText};
  margin: 0;
  max-width: 62ch;

  @media (min-width: 768px) {
    font-size: 1.125rem;
    line-height: 1.72;
  }
`,Se=n(U.div)`
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
`,Ce=n.picture`
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;function ze({onLaunch:e}){const i=ye("/assets/partnerships/Walmart 1.avif"),a=ye("/assets/partnerships/Walmart 1.webp"),n=ye("/assets/partnerships/Walmart 1.jpg");return t.jsx(be,{children:t.jsxs(je,{children:[t.jsxs(ve,{children:[t.jsx(ke,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7},children:"Partnership Pitches"}),t.jsx(Ie,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.1},children:"I designed AI-to-AI and AI-to-business integration patterns for Microsoft Copilot, pitching bespoke flows to four active partnership conversations: Walmart, Amazon, Lyft, and DoorDash."}),t.jsx(Ie,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.2},children:"This work explored what unique value AI can actually add beyond being a faster way to open an app, and introduced a new AI-to-AI handoff standard designed to go beyond what MCP supports."}),t.jsxs(y,{type:"button",initial:{opacity:0,y:10},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.3},onClick:e,children:["See Case Study ",t.jsx(b,{children:"→"})]})]}),t.jsx(Se,{initial:{opacity:0,scale:.95},whileInView:{opacity:1,scale:1},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.1},children:t.jsxs(Ce,{children:[t.jsx("source",{srcSet:i,type:"image/avif"}),t.jsx("source",{srcSet:a,type:"image/webp"}),t.jsx("img",{src:n,alt:"Partnership Pitches, Walmart Copilot shopping flow",loading:"lazy",decoding:"async"})]})})]})})}function Re(){const e=r(),[i,a]=o.useState(!1),n=$.find(e=>"partnerships"===e.slug);return o.useEffect(()=>{n&&R(n.transitionImages)},[n]),n?t.jsxs(t.Fragment,{children:[t.jsx(ze,{onLaunch:async()=>{await L(n.transitionImages)?a(!0):e("/Partnerships")}}),i&&t.jsx(P,{images:n.transitionImages,isActive:!0,onComplete:()=>e("/Partnerships"),layoutId:n.slug,sharedSourceImageSrc:n.coverImage.src})]}):null}function $e(e){try{return encodeURI(decodeURI(e))}catch{return encodeURI(e)}}const Le=n.section`
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
`,Pe=n.div`
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
`,Ue=n.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 1023px) {
    gap: 1.1rem;
    max-width: 64ch;
    margin: 0 auto;
  }
`,Te=n(U.h2)`
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
`,Ve=n(U.p)`
  font-size: 0.98rem;
  line-height: 1.65;
  color: ${e=>e.theme.mutedText};
  margin: 0;
  max-width: 62ch;

  @media (min-width: 768px) {
    font-size: 1.125rem;
    line-height: 1.72;
  }
`,Me=n(U.div)`
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
`,We=n.picture`
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 4 / 3;

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;function Ae({onLaunch:e}){const i=$e("/assets/copilot-pay/Property 1=Default.avif"),a=$e("/assets/copilot-pay/Property 1=Default.webp"),n=$e("/assets/copilot-pay/Property 1=Default.jpg"),r=$e("/assets/copilot-pay/Property 1=Default-mobile-900.avif"),o=$e("/assets/copilot-pay/Property 1=Default-mobile-900.webp"),s=$e("/assets/copilot-pay/Property 1=Default-mobile-900.jpg");return t.jsx(Le,{children:t.jsxs(Pe,{children:[t.jsxs(Ue,{children:[t.jsx(Te,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7},children:"Copilot Pay"}),t.jsx(Ve,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.1},children:"Copilot Pay is Microsoft's first native checkout inside Copilot across browser, desktop, and mobile. It replaces retailer redirects with a more continuous purchase flow using Apple Pay, PayPal, Venmo, Google Pay, Shop Pay, and Amazon Pay."}),t.jsx(Ve,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.2},children:"This case study focuses on express checkout flows, multi-wallet interaction design, and the design-system work required to make AI commerce feel scalable and trustworthy across Microsoft surfaces."}),t.jsxs(y,{type:"button",initial:{opacity:0,y:10},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.3},onClick:e,children:["See Case Study ",t.jsx(b,{children:"→"})]})]}),t.jsx(Me,{initial:{opacity:0,scale:.95},whileInView:{opacity:1,scale:1},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.1},children:t.jsxs(We,{children:[t.jsx("source",{srcSet:r,type:"image/avif",media:"(max-width: 900px)"}),t.jsx("source",{srcSet:i,type:"image/avif"}),t.jsx("source",{srcSet:o,type:"image/webp",media:"(max-width: 900px)"}),t.jsx("source",{srcSet:a,type:"image/webp"}),t.jsx("source",{srcSet:s,media:"(max-width: 900px)"}),t.jsx("img",{src:n,alt:"Copilot Pay interface design",loading:"eager",fetchPriority:"high",decoding:"async"})]})})]})})}function Ee(){const e=r(),[n,s]=o.useState(!1),d=$.find(e=>"copilot-pay"===e.slug);return o.useEffect(()=>{d&&(R(d.transitionImages),a(()=>i.import("./CopilotPay-legacy-D8IBK4vK.js"),void 0,i.meta.url))},[d]),d?t.jsxs(t.Fragment,{children:[t.jsx(Ae,{onLaunch:async()=>{await L(d.transitionImages)?s(!0):e("/CopilotPay")}}),n&&t.jsx(P,{images:d.transitionImages,isActive:!0,onComplete:()=>e("/CopilotPay"),layoutId:d.slug,sharedSourceImageSrc:d.coverImage.src})]}):null}function Fe(e){try{return encodeURI(decodeURI(e))}catch{return encodeURI(e)}}const De=n.section`
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
`,Be=n.div`
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
`,He=n.div`
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  max-width: 68ch;
`,Ne=n(U.p)`
  margin: 0;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${e=>"dark"===e.theme.name?"#8fb3df":"#416287"};
`,Oe=n(U.h2)`
  margin: 0;
  font-size: clamp(2.4rem, 4.5vw, 4.3rem);
  line-height: 0.96;
  color: ${e=>e.theme.strongText};
`,Je=n(U.p)`
  margin: 0;
  font-size: 1rem;
  line-height: 1.72;
  color: ${e=>e.theme.mutedText};

  @media (min-width: 768px) {
    font-size: 1.08rem;
  }
`,Ge=n(U.div)`
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
`,_e=n.picture`
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;function qe({onLaunch:e}){const i=Fe("/assets/journeys/Journeys L2.avif"),a=Fe("/assets/journeys/Journeys L2.webp"),n=Fe("/assets/journeys/Journeys L2.jpg"),r=Fe("/assets/journeys/Journeys L2-mobile-900.avif"),o=Fe("/assets/journeys/Journeys L2-mobile-900.webp"),s=Fe("/assets/journeys/Journeys L2-mobile-900.jpg");return t.jsx(De,{children:t.jsxs(Be,{children:[t.jsxs(He,{children:[t.jsx(Ne,{initial:{opacity:0,y:16},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.6},children:"New Case Study"}),t.jsx(Oe,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.05},children:"Journeys"}),t.jsx(Je,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.1},children:"My Shopping / Journeys for Microsoft Shopping explored how to create a central hub that reduces shopping complexity, helps users save money, and surfaces guidance based on where they are in the purchase journey."}),t.jsx(Je,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.18},children:"I worked with a principal designer on three user-flow scenarios, interaction models, and feed-based versus static hub layouts. The latest iteration of Journeys is now shipped in the Copilot app."}),t.jsxs(y,{type:"button",initial:{opacity:0,y:10},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.25},onClick:e,children:["See Case Study ",t.jsx(b,{children:"→"})]})]}),t.jsx(Ge,{initial:{opacity:0,scale:.97},whileInView:{opacity:1,scale:1},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.1},children:t.jsxs(_e,{children:[t.jsx("source",{srcSet:r,type:"image/avif",media:"(max-width: 900px)"}),t.jsx("source",{srcSet:i,type:"image/avif"}),t.jsx("source",{srcSet:o,type:"image/webp",media:"(max-width: 900px)"}),t.jsx("source",{srcSet:a,type:"image/webp"}),t.jsx("source",{srcSet:s,media:"(max-width: 900px)"}),t.jsx("img",{src:n,alt:"Journeys dashboard with personalized shopping modules",loading:"lazy",decoding:"async"})]})})]})})}function Ke(){const e=r(),[n,s]=o.useState(!1),d=$.find(e=>"journeys"===e.slug);return o.useEffect(()=>{d&&(R(d.transitionImages),a(()=>i.import("./Journeys-legacy-D785dqwM.js"),void 0,i.meta.url))},[d]),d?t.jsxs(t.Fragment,{children:[t.jsx(qe,{onLaunch:async()=>{await L(d.transitionImages)?s(!0):e("/Journeys")}}),n&&t.jsx(P,{images:d.transitionImages,isActive:!0,onComplete:()=>e("/Journeys"),layoutId:d.slug,sharedSourceImageSrc:d.coverImage.src})]}):null}function Xe(e){try{return encodeURI(decodeURI(e))}catch{return encodeURI(e)}}const Qe=n.section`
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
`,Ye=n.div`
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
`,Ze=n.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 1023px) {
    gap: 1.1rem;
    max-width: 64ch;
    margin: 0 auto;
  }
`,ei=n(U.h2)`
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
`,ii=n(U.p)`
  font-size: 0.98rem;
  line-height: 1.65;
  color: ${e=>e.theme.mutedText};
  margin: 0;
  max-width: 62ch;

  @media (min-width: 768px) {
    font-size: 1.125rem;
    line-height: 1.72;
  }
`,ti=n(U.div)`
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
`,ai=n.picture`
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;function ni({onLaunch:e}){const i=Xe("/assets/cashback-hub/hero.avif"),a=Xe("/assets/cashback-hub/hero.webp"),n=Xe("/assets/cashback-hub/hero.jpg"),r=Xe("/assets/cashback-hub/hero-mobile-900.avif"),o=Xe("/assets/cashback-hub/hero-mobile-900.webp"),s=Xe("/assets/cashback-hub/hero-mobile-900.jpg");return t.jsx(Qe,{children:t.jsxs(Ye,{children:[t.jsxs(Ze,{children:[t.jsx(ei,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7},children:"Cashback Hub"}),t.jsx(ii,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.1},children:"The Cashback Hub lets users track, manage, and redeem cashback rewards across Microsoft Shopping surfaces. I led end-to-end design — interaction, visual, and cross-platform layouts — for the full hub, stores search, interstitials, and the Edge Shoreline companion pane."}),t.jsx(ii,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.2},children:"The case study focuses on bringing clarity to a delayed-payout cashback journey, designing a compact Edge companion view, and aligning a shared visual system that scales across Microsoft Shopping surfaces."}),t.jsxs(y,{type:"button",initial:{opacity:0,y:10},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.3},onClick:e,children:["See Case Study ",t.jsx(b,{children:"→"})]})]}),t.jsx(ti,{initial:{opacity:0,scale:.95},whileInView:{opacity:1,scale:1},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.1},children:t.jsxs(ai,{children:[t.jsx("source",{srcSet:r,type:"image/avif",media:"(max-width: 900px)"}),t.jsx("source",{srcSet:i,type:"image/avif"}),t.jsx("source",{srcSet:o,type:"image/webp",media:"(max-width: 900px)"}),t.jsx("source",{srcSet:a,type:"image/webp"}),t.jsx("source",{srcSet:s,media:"(max-width: 900px)"}),t.jsx("img",{src:n,alt:"Microsoft Shopping Cashback Hub overview",loading:"lazy",decoding:"async"})]})})]})})}function ri(){const e=r(),[n,s]=o.useState(!1),d=$.find(e=>"cashback-hub"===e.slug);return o.useEffect(()=>{d&&(R(d.transitionImages),a(()=>i.import("./CashbackHub-legacy-y8sHmHW7.js"),void 0,i.meta.url))},[d]),d?t.jsxs(t.Fragment,{children:[t.jsx(ni,{onLaunch:async()=>{await L(d.transitionImages)?s(!0):e("/CashbackHub")}}),n&&t.jsx(P,{images:d.transitionImages,isActive:!0,onComplete:()=>e("/CashbackHub"),layoutId:d.slug,sharedSourceImageSrc:d.coverImage.src})]}):null}function oi(e){try{return encodeURI(decodeURI(e))}catch{return encodeURI(e)}}const si=n.section`
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
`,di=n.div`
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
`,ci=n.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 1023px) {
    gap: 1.1rem;
    max-width: 64ch;
    margin: 0 auto;
  }
`,mi=n(U.h2)`
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
`,li=n(U.p)`
  font-size: 0.98rem;
  line-height: 1.65;
  color: #d1d5db;
  margin: 0;
  max-width: 62ch;

  @media (min-width: 768px) {
    font-size: 1.125rem;
    line-height: 1.72;
  }
`,pi=n(U.div)`
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
`,hi=n.picture`
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;function gi({onLaunch:e}){const i=oi("/assets/video-commerce/Full Frame.avif"),a=oi("/assets/video-commerce/Full Frame.webp"),n=oi("/assets/video-commerce/Full Frame.jpg"),r=oi("/assets/video-commerce/Full Frame-mobile-900.avif"),o=oi("/assets/video-commerce/Full Frame-mobile-900.webp"),s=oi("/assets/video-commerce/Full Frame-mobile-900.jpg");return t.jsx(si,{children:t.jsxs(di,{children:[t.jsxs(ci,{children:[t.jsx(mi,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7},children:"Video Commerce"}),t.jsx(li,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.1},children:"An executive-driven moonshot exploring live and short-form video commerce across Bing, MSN, Edge, and Microsoft Start — partnering with TalkShopLive in the U.S., QVC Japan, and Roposo in India to bring creator-led product content into the Microsoft shopping ecosystem."}),t.jsx(li,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.2},children:"The case study covers the video shopping destination, multi-SKU product mapping, live commerce interactions, mobile hierarchy, and a first-party native player exploration."}),t.jsxs(y,{type:"button",initial:{opacity:0,y:10},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.3},onClick:e,children:["See Case Study ",t.jsx(b,{children:"→"})]})]}),t.jsx(pi,{initial:{opacity:0,scale:.95},whileInView:{opacity:1,scale:1},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.1},children:t.jsxs(hi,{children:[t.jsx("source",{srcSet:r,type:"image/avif",media:"(max-width: 900px)"}),t.jsx("source",{srcSet:i,type:"image/avif"}),t.jsx("source",{srcSet:o,type:"image/webp",media:"(max-width: 900px)"}),t.jsx("source",{srcSet:a,type:"image/webp"}),t.jsx("source",{srcSet:s,media:"(max-width: 900px)"}),t.jsx("img",{src:n,alt:"Microsoft Bing Shopping video commerce destination",loading:"lazy",decoding:"async"})]})})]})})}function ui(){const e=r(),[n,s]=o.useState(!1),d=$.find(e=>"video-commerce"===e.slug);return o.useEffect(()=>{d&&(R(d.transitionImages),a(()=>i.import("./VideoCommerce-legacy-D8_b-Ypg.js"),void 0,i.meta.url))},[d]),d?t.jsxs(t.Fragment,{children:[t.jsx(gi,{onLaunch:async()=>{await L(d.transitionImages)?s(!0):e("/VideoCommerce")}}),n&&t.jsx(P,{images:d.transitionImages,isActive:!0,onComplete:()=>e("/VideoCommerce"),layoutId:d.slug,sharedSourceImageSrc:d.coverImage.src})]}):null}function xi(e){try{return encodeURI(decodeURI(e))}catch{return encodeURI(e)}}const fi=n.section`
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
`,wi=n.div`
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
`,yi=n.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 1023px) {
    gap: 1.1rem;
    max-width: 64ch;
    margin: 0 auto;
  }
`,bi=n(U.span)`
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
`,ji=n(U.h2)`
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
`,vi=n(U.p)`
  font-size: 0.98rem;
  line-height: 1.65;
  color: ${e=>e.theme.mutedText};
  margin: 0;
  max-width: 62ch;

  @media (min-width: 768px) {
    font-size: 1.125rem;
    line-height: 1.72;
  }
`,ki=n(U.div)`
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
`;function Si({onLaunch:e}){const i=xi("/assets/windows-notifications/Prong 2 price drop.avif"),a=xi("/assets/windows-notifications/Prong 2 price drop.webp"),n=xi("/assets/windows-notifications/Prong 2 price drop.png"),r=xi("/assets/windows-notifications/Prong 2 price drop-mobile-900.avif"),o=xi("/assets/windows-notifications/Prong 2 price drop-mobile-900.webp"),s=xi("/assets/windows-notifications/Prong 2 price drop-mobile-900.png");return t.jsx(fi,{children:t.jsxs(wi,{children:[t.jsxs(yi,{children:[t.jsx(bi,{initial:{opacity:0,y:10},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.5},children:"Windows OS"}),t.jsx(ji,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7},children:"Windows Notifications"}),t.jsx(vi,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.1},children:"Bing and Edge Shopping give users ways to signal explicit commerce intent. The payoff for that intent used to stay inside the browser. I designed four experiences: price drops, back-in-stock, cash back, and coupons, to surface those moments in Windows itself, on the taskbar and notification surface every user sees."}),t.jsx(vi,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.2},children:"The case study covers OS-level governance, Windows UX Labs Value and Ad Perception testing, Triple Cashback Tuesday research findings, and what it took to ship shopping features from the browser into the Windows OS layer."}),t.jsxs(y,{type:"button",initial:{opacity:0,y:10},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.3},onClick:e,children:["See Case Study ",t.jsx(b,{children:"→"})]})]}),t.jsx(ki,{initial:{opacity:0,scale:.95},whileInView:{opacity:1,scale:1},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.1},children:t.jsxs(Ii,{children:[t.jsx("source",{srcSet:r,type:"image/avif",media:"(max-width: 900px)"}),t.jsx("source",{srcSet:i,type:"image/avif"}),t.jsx("source",{srcSet:o,type:"image/webp",media:"(max-width: 900px)"}),t.jsx("source",{srcSet:a,type:"image/webp"}),t.jsx("source",{srcSet:s,media:"(max-width: 900px)"}),t.jsx("img",{src:n,alt:"Windows price drop notification prong",loading:"lazy",decoding:"async"})]})})]})})}function Ci(){const e=r(),[n,s]=o.useState(!1),d=$.find(e=>"windows-notifications"===e.slug);return o.useEffect(()=>{d&&(R(d.transitionImages),a(()=>i.import("./WindowsNotifications-legacy-3iAqThAy.js"),void 0,i.meta.url))},[d]),d?t.jsxs(t.Fragment,{children:[t.jsx(Si,{onLaunch:async()=>{await L(d.transitionImages)?s(!0):e("/WindowsNotifications")}}),n&&t.jsx(P,{images:d.transitionImages,isActive:!0,onComplete:()=>e("/WindowsNotifications"),layoutId:d.slug,sharedSourceImageSrc:d.coverImage.src})]}):null}const zi=d`
  0% { transform: translate(-50%, -60%) rotate(0deg); }
  20% { transform: translate(-20%, -80%) rotate(90deg); }
  40% { transform: translate(10%, -40%) rotate(180deg); }
  60% { transform: translate(-40%, -20%) rotate(270deg); }
  80% { transform: translate(-70%, -50%) rotate(320deg); }
  100% { transform: translate(-50%, -60%) rotate(360deg); }
`,Ri=d`
  0% { transform: translate(60%, -50%) rotate(0deg); }
  20% { transform: translate(80%, -20%) rotate(90deg); }
  40% { transform: translate(40%, -70%) rotate(180deg); }
  60% { transform: translate(20%, -30%) rotate(270deg); }
  80% { transform: translate(70%, -60%) rotate(320deg); }
  100% { transform: translate(60%, -50%) rotate(360deg); }
`,$i=n.div`
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
    animation: ${zi} 35s ease-in-out infinite;
  }
  &::after {
    top: 40%;
    left: 65%;
    animation: ${Ri} 40s ease-in-out infinite;
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
`,Li=n.div`
  min-height: 100vh;
  width: 100%;
  display: grid;
  place-items: center;
  padding: 6rem 1.5rem 2rem;
  background: ${e=>e.theme.surface};
  position: relative;
  z-index: 1;
`,Pi=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.85rem;
  text-align: center;
  max-width: 40rem;
  margin-bottom: 1.5rem;
  color: ${e=>e.theme.strongText};
`,Ui=n.p`
  margin: 0;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${e=>e.theme.mutedText};
`,Ti=n.h1`
  margin: 0;
  font-size: clamp(2rem, 4vw, 3.4rem);
  line-height: 1;
`,Vi=n.p`
  margin: 0;
  font-size: 1rem;
  line-height: 1.6;
  color: ${e=>e.theme.mutedText};
`,Mi=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,Wi=n.form`
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
`,Ai=n.input`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.1rem;
  padding: 0.6rem 1.1rem;
  border-radius: 999px;
  border: 1px solid ${e=>e.theme.border};
  min-width: 240px;
  outline: none;
  color: ${e=>e.theme.strongText};
  background: ${e=>e.theme.surface};
  &::placeholder { color: ${e=>e.theme.mutedText}; }
`,Ei=n.button`
  display: inline-flex;
  align-items: center;
  gap: 0.32em;
  background: #111;
  color: #fff;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 600;
  font-size: 1.05rem;
  border: none;
  border-radius: 999px;
  padding: 0.56rem 1.4rem;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  transition: background 0.2s ease;
  &:hover { background: #333; }
`,Fi={blue:{light:{bg:"#eaf6ff",fg:"#1a3a5d"},dark:{bg:"#0f1d2e",fg:"#cfe2f5"}},purple:{light:{bg:"#f7eaff",fg:"#5d2d5d"},dark:{bg:"#1f1226",fg:"#e4cdf0"}},cream:{light:{bg:"#fffbe6",fg:"#5d5d5d"},dark:{bg:"#1f1d12",fg:"#efe7c4"}}},Di=n(g)`
  background-color: ${e=>Fi[e.$tone]["dark"===e.theme.name?"dark":"light"].bg};
  --accent-fg: ${e=>Fi[e.$tone]["dark"===e.theme.name?"dark":"light"].fg};
`,Bi=n(f)`
  color: var(--accent-fg);
  /* Scales from ~1.25rem on phones up to ~2rem on large desktops, mirroring
     the clamp pattern used by the foundation typography tokens. */
  font-size: clamp(1.25rem, 1.4vw + 0.85rem, 2rem);
  max-width: 50ch;
  line-height: 1.45;
  margin: 0;
`,Hi=(e("default",()=>{const[e,i]=o.useState(""),[a,n]=o.useState(()=>"true"===sessionStorage.getItem("microsoftAuth")),[r,d]=o.useState(""),p=o.useMemo(()=>[s.createRef(),s.createRef(),s.createRef()],[]);o.useEffect(()=>(p.forEach((e,i)=>{e.current&&(e.current.onplay=(e=>()=>{p.forEach((i,t)=>{t!==e&&i.current&&i.current.pause()})})(i))}),()=>{p.forEach(e=>{e.current&&(e.current.onplay=null)})}),[a,p]),o.useLayoutEffect(()=>{window.scrollTo(0,0)},[]);const w=i=>{i.preventDefault(),"microsoftshopping"===e?(n(!0),d(""),sessionStorage.setItem("microsoftAuth","true")):d("Incorrect password.")};return a?t.jsxs(j,{children:[t.jsx(c,{...l.microsoft,sameAs:m.sameAs,keywords:l.microsoft.keywords,siteDefaults:m}),t.jsx(de,{title:"Microsoft",imageBaseName:"assets/MSFTlogo",imageExt:"png",imageAlt:"Microsoft Logo",imageWidth:"24vw",imageNaturalWidth:785,imageNaturalHeight:786,invertOnDark:!0,buttons:[{href:"https://www.microsoft.com/en-us/shopping/?form=MT00PA&cs=2199494592",label:"Visit Shopping"}],divider:!0}),t.jsx(v,{children:t.jsxs(k,{children:[t.jsxs(I,{children:[t.jsx(S,{children:"Project Type"}),t.jsx(C,{children:"Cross-platform product leadership"})]}),t.jsxs(I,{children:[t.jsx(S,{children:"Digital Product"}),t.jsx(C,{children:"Microsoft Shopping ecosystem across Bing, Copilot, Windows, Outlook, and Microsoft Start."})]}),t.jsxs(I,{children:[t.jsx(S,{children:"My Role"}),t.jsx(C,{children:"Product Designer leading research, concept development, and design execution across multiple teams and surfaces."})]}),t.jsxs(I,{children:[t.jsx(S,{children:"Timeframe"}),t.jsx(C,{children:"4 years"})]})]})}),t.jsx(h,{children:t.jsx(Gi,{ref:p[0],src:"/assets/microsoft-demo2.mp4",poster:"/assets/Preview1.png"})}),t.jsx(Re,{}),t.jsx(we,{}),t.jsx(Ee,{}),t.jsx(Ke,{}),t.jsx(ri,{}),t.jsx(Ci,{}),t.jsx(ui,{}),t.jsx(g,{style:{backgroundColor:"var(--surface-muted, #f5f5f5)"},children:t.jsx(u,{children:t.jsx(Bi,{style:{color:"var(--text-strong, #222)"},children:"This work focused on reimagining shopping as an educational experience rather than a transactional one. I designed early concepts for Copilot Shopping and a Generative Results Page (GRP) that helped users understand product categories, compare specs, and evaluate pricing. These experiences aimed to reduce decision fatigue while increasing trust and confidence for high-consideration purchases."})})}),t.jsx(h,{children:t.jsx(x,{src:T,avif:V,webp:M})}),t.jsx(h,{children:t.jsx(x,{src:W,avif:A,webp:E})}),t.jsx(h,{children:t.jsx(Gi,{ref:p[2],src:"/assets/microsoft-demo3.mp4",poster:"/assets/Preview3.png"})}),t.jsx(h,{children:t.jsx(Gi,{ref:p[1],src:"/assets/microsoft-demo.mp4",poster:"/assets/Preview2.png"})}),t.jsx(Di,{$tone:"purple",children:t.jsx(u,{children:t.jsx(Bi,{children:"This work focused on reducing friction at the moment of purchase through Microsoft Wallet and the Cashback Hub. I contributed to experiences that let users securely save payment methods, passwords, and rewards for faster checkout across Microsoft surfaces. More recently, this work has extended into Copilot, exploring how AI can surface cashback, apply rewards, and streamline checkout without disrupting user trust."})})}),t.jsx(h,{children:t.jsx(x,{src:F,avif:D,webp:B})}),t.jsx(Di,{$tone:"cream",children:t.jsx(u,{children:t.jsx(Bi,{children:"I worked across Bing Shopping, Microsoft Start, Windows, Outlook, and Copilot to create consistent commerce experiences at scale. This included Outlook shopping concepts for managing promotions, feed-based browsing, and unsubscribe flows. The goal was to unify shopping behavior across Microsoft’s surfaces while respecting context and user intent."})})}),t.jsx(h,{children:t.jsx(x,{src:H,avif:N,webp:O})}),t.jsx(h,{children:t.jsx(x,{src:J,avif:G,webp:_})}),t.jsx(h,{children:t.jsx(x,{src:q,avif:K,webp:X})}),t.jsx(h,{children:t.jsx(x,{src:Q,avif:Y,webp:Z})}),t.jsx(g,{style:{backgroundColor:"black"},children:t.jsx(u,{children:t.jsxs(f,{style:{color:"white",textAlign:"center"},children:["Microsoft AI CEO — Mustafa Suleyman",t.jsx("br",{}),"Shopping Design Lead — Ashley Hemingway",t.jsx("br",{}),"Development Lead — Avinash Vemuluru",t.jsx("br",{})]})})})]}):t.jsxs(Li,{children:[t.jsx(c,{...l.microsoft,sameAs:m.sameAs,keywords:l.microsoft.keywords,siteDefaults:m}),t.jsx($i,{}),t.jsxs(Mi,{children:[t.jsxs(Pi,{children:[t.jsx(Ui,{children:"Microsoft Case Studies"}),t.jsx(Ti,{children:"Protected Microsoft work samples"}),t.jsx(Vi,{children:"Enter the password to continue to the Microsoft project page and view the protected case study."})]}),t.jsxs(Wi,{onSubmit:w,children:[t.jsx("h2",{style:{margin:0},children:"Enter Password"}),t.jsx(Ai,{type:"password",value:e,onChange:e=>i(e.target.value),placeholder:"Password",autoFocus:!0}),t.jsx(Ei,{type:"submit",children:"Continue"}),r&&t.jsx("div",{style:{color:"red",marginTop:"0.5rem"},children:r})]})]})]})}),n.div`
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
`),Ni=n.div`
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
`,Oi=n.div`
  width: 100%;
  max-width: 64rem;
  margin: 0 auto 4vh auto;
  padding: 0 1.5rem;
  box-sizing: border-box;
`,Ji=n.div`
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
    border-radius: 0;
  }
`,Gi=s.forwardRef(({src:e,poster:i},a)=>{const[n,r]=o.useState(!1),s=o.useRef(null),d=a||s;return o.useEffect(()=>{const e=d.current;if(!e)return;const i=()=>r(!0),t=()=>r(!1),a=()=>r(!1);return e.addEventListener("play",i),e.addEventListener("pause",t),e.addEventListener("ended",a),()=>{e.removeEventListener("play",i),e.removeEventListener("pause",t),e.removeEventListener("ended",a)}},[d]),t.jsx(Oi,{children:t.jsxs(Ji,{"data-cursor":"link",children:[t.jsx("video",{ref:d,src:e,controls:!0,playsInline:!0,preload:"none",poster:i,"data-cursor":"link",style:{width:"100%",height:"100%",borderRadius:"inherit",background:"#000",display:"block",objectFit:"cover"}}),!n&&t.jsx(Hi,{onClick:()=>{const e=d.current;e&&(e.muted=!1,e.volume=1,e.play().catch(()=>{}))},role:"button","aria-label":"Play video","data-cursor":"link",children:t.jsx(Ni,{children:t.jsxs("svg",{width:"48",height:"48",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("circle",{cx:"24",cy:"24",r:"24",fill:"rgba(0,0,0,0.5)"}),t.jsx("polygon",{points:"18,14 36,24 18,34",fill:"#fff"})]})})})]})})})}}});
