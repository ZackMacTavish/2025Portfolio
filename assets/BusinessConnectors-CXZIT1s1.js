import{j as e}from"./three-CIqbc5c4.js";import{b as l,c as i,R as ge}from"./vendor-hQudadcW.js";import{u as he,a as ue,M as xe,r as fe,b as we,m as s,c as ve}from"./index-Bj4d8meN.js";import{P as be,S as ye}from"./PortfolioCardsSection-BGVKKkIS.js";import{a as je}from"./Grid60-JHQJiXRB.js";import"./index-CAIcbJfl.js";import"./AD-D8vfZTEM.js";import"./LeysiApp—Screens copy-CsLIUfOG.js";import"./ThreePillars—pages-BPOZPkZx.js";import"./Group 55618@2x-DJ5DP13a.js";import"./BrandGuidelines—Mockup-CZOd5Pwz.js";function Ie(r){const o=he(()=>ue(r)),{isStatic:w}=l.useContext(xe);if(w){const[,j]=l.useState(r);l.useEffect(()=>o.on("change",j),[])}return o}const $e={some:0,all:1};function Re(r,o,{root:w,margin:j,amount:g="some"}={}){const v=fe(r),$=new WeakMap,T=x=>{x.forEach(b=>{const M=$.get(b.target);if(b.isIntersecting!==!!M)if(b.isIntersecting){const L=o(b.target,b);typeof L=="function"?$.set(b.target,L):V.unobserve(b.target)}else typeof M=="function"&&(M(b),$.delete(b.target))})},V=new IntersectionObserver(T,{root:w,rootMargin:j,threshold:typeof g=="number"?g:$e[g]});return v.forEach(x=>V.observe(x)),()=>V.disconnect()}function me(r,{root:o,margin:w,amount:j,once:g=!1,initial:v=!1}={}){const[$,T]=l.useState(v);return l.useEffect(()=>{if(!r.current||g&&$)return;const V=()=>(T(!0),g?void 0:()=>T(!1)),x={root:o&&o.current||void 0,margin:w,amount:j};return Re(r.current,V,x)},[o,r,w,g,j]),$}function J(r){if(!r)return r;try{return encodeURI(decodeURI(r))}catch{return encodeURI(r)}}const Ce=i(s.div)`
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: ${r=>r.$borderRadius};

  ${r=>r.$aspectRatio?`
    aspect-ratio: ${r.$aspectRatio};
  `:""}
`,Se=i.picture`
  display: block;
  width: 100%;
  height: 100%;
`,ke=i(s.img)`
  display: block;
  width: 100%;
  height: ${r=>r.$hasParallax?"110%":"100%"};
  object-fit: ${r=>r.$objectFit};
  object-position: ${r=>r.$objectPosition};
`;function P({src:r,alt:o,avif:w,webp:j,aspectRatio:g,parallaxSpeed:v=0,className:$,borderRadius:T="12px",objectFit:V="cover",objectPosition:x="center",imageScale:b=1,disableRevealAnimation:M=!1,loading:L="lazy",decoding:B="async",onLoad:W}){const A=l.useRef(null),y=we(),[O,N]=l.useState(window.innerWidth<768),E=Ie(0);l.useEffect(()=>{const p=()=>{N(window.innerWidth<768)};return window.addEventListener("resize",p),()=>window.removeEventListener("resize",p)},[]);const C=Math.max(0,v)*60,R=v>0&&!y&&!O,c=J(r),h=J(w),G=J(j);return l.useEffect(()=>{if(!R){E.set(0);return}const p=()=>{const S=A.current;if(!S)return;const Y=S.getBoundingClientRect(),t=window.innerHeight,a=t+Y.height,n=a>0?(t-Y.top)/a:.5,d=Math.min(1,Math.max(0,n)),m=-C+d*C*2;E.set(m)};return p(),window.addEventListener("scroll",p,{passive:!0}),window.addEventListener("resize",p),()=>{window.removeEventListener("scroll",p),window.removeEventListener("resize",p)}},[C,E,R]),e.jsx(Ce,{ref:A,className:$,$aspectRatio:g,$borderRadius:T,...M?{}:{initial:{opacity:0,y:24},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.2},transition:{duration:.9,ease:[.25,.1,.25,1]}},children:e.jsxs(Se,{children:[h&&e.jsx("source",{srcSet:h,type:"image/avif"}),G&&e.jsx("source",{srcSet:G,type:"image/webp"}),e.jsx(ke,{src:c,alt:o,loading:L,decoding:B,onLoad:W,style:{y:R?E:0,scale:b},$objectFit:V,$objectPosition:x,$hasParallax:R})]})})}const ze=i.div`
  width: 100%;
`,pe=ge.forwardRef((r,o)=>e.jsx(s.div,{ref:o,style:{position:"relative",width:"100%",borderRadius:"12px",overflow:"hidden",aspectRatio:"3 / 2",background:"#f0efeb",...r.style||{}},...r}));pe.displayName="Frame";const Pe=i.div`
  position: absolute;
  inset: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${r=>r.$visible?1:0};
  transition: opacity 0.2s ease;
  pointer-events: none;
`,ie=i.button`
  pointer-events: auto;
  position: absolute;
  top: 50%;
  ${r=>r.$side}: 1rem;
  transform: translateY(-50%);
  width: 52px;
  height: 52px;
  border-radius: 999px;
  border: none;
  background: rgba(17, 17, 17, 0.72);
  color: #fff;
  font-size: 1.8rem;
  line-height: 1;
  cursor: pointer;
  display: grid;
  place-items: center;

  &:hover {
    background: rgba(17, 17, 17, 0.88);
  }
`,Te=i.button`
  pointer-events: auto;
  width: 68px;
  height: 68px;
  border-radius: 999px;
  border: none;
  background: rgba(17, 17, 17, 0.72);
  color: #fff;
  font-size: 1.4rem;
  font-weight: 700;
  cursor: pointer;
  display: grid;
  place-items: center;

  &:hover {
    background: rgba(17, 17, 17, 0.88);
  }
`,re=i.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
`,ae=i(P)`
  width: 100%;
  height: 100%;
`,Ve=i.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`,Ee=i.button`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  padding: 0;
  background: ${r=>r.$active?"#333":"#ccc"};
  transform: ${r=>r.$active?"scale(1.3)":"scale(1)"};
  transition: all 0.3s;
`;function te({images:r,autoPlay:o=!1,intervalMs:w=4e3,showControls:j=!0,showDots:g=!0}){l.useEffect(()=>{if(!A.current)return;let c=!1;try{A.current.focus({preventScroll:!0}),c=!0}catch{}},[]);const[v,$]=l.useState(0),[T,V]=l.useState(0),[x,b]=l.useState(!0),[M,L]=l.useState(!1),[B,W]=l.useState(!1),A=l.useRef(null),y=r.length,O=c=>{if(!y)return;const h=(c+y)%y;V(v),b(!1),$(h)},N=()=>O(v+1),E=()=>O(v-1);if(l.useEffect(()=>{if(!o||B||y<2)return;const c=setInterval(()=>{$(h=>(h+1)%y)},w);return()=>clearInterval(c)},[o,w,B,y]),l.useEffect(()=>{if(y<2)return;const c=G=>new Promise(p=>{const S=new Image;S.onload=async()=>{if(typeof S.decode=="function")try{await S.decode()}catch{}p()},S.onerror=()=>p(),S.src=G});(async()=>{const G=r.flatMap(p=>[p.avif,p.webp,p.src].filter(S=>!!S));await Promise.all(G.map(p=>c(p)))})()},[r,y]),!y)return null;const C=r[v],R=r[T];return e.jsxs(ze,{children:[e.jsxs(pe,{ref:A,tabIndex:0,"data-carousel-frame":"true",onMouseEnter:()=>L(!0),onMouseLeave:()=>L(!1),onKeyDown:c=>{c.key==="ArrowRight"&&(c.preventDefault(),W(!0),N()),c.key==="ArrowLeft"&&(c.preventDefault(),W(!0),E())},drag:"x",dragConstraints:{left:0,right:0},onDragEnd:(c,h)=>{h.offset.x>80?E():h.offset.x<-80&&N()},children:[!x&&e.jsx(re,{style:{zIndex:1},children:e.jsx(ae,{src:R.src,alt:R.alt,avif:R.avif,webp:R.webp,aspectRatio:R.aspectRatio||"3/2",borderRadius:"0",objectFit:"cover",disableRevealAnimation:!0,loading:"eager",decoding:"auto"},`prev-${R.src}-${T}`)}),e.jsx(re,{style:{zIndex:2},children:e.jsx(ae,{src:C.src,alt:C.alt,avif:C.avif,webp:C.webp,aspectRatio:C.aspectRatio||"3/2",borderRadius:"0",objectFit:"cover",disableRevealAnimation:!0,loading:"eager",decoding:"auto",onLoad:()=>b(!0),style:{position:x?"relative":"absolute"}},`active-${C.src}-${v}`)}),y>1&&j&&e.jsxs(Pe,{$visible:M,children:[e.jsx(ie,{type:"button",$side:"left","aria-label":"Previous image",onClick:E,children:"‹"}),o&&e.jsx(Te,{type:"button","aria-label":B?"Resume slideshow":"Pause slideshow",onClick:()=>W(c=>!c),children:B?"▶":"❚❚"}),e.jsx(ie,{type:"button",$side:"right","aria-label":"Next image",onClick:N,children:"›"})]})]}),y>1&&g&&e.jsx(Ve,{children:r.map((c,h)=>e.jsx(Ee,{type:"button",$active:h===v,"aria-label":`Go to slide ${h+1}`,"aria-current":h===v,onClick:()=>O(h)},`${c.src}-${h}`))})]})}const Fe=i.div`
  min-height: 100vh;
  background: white;
`,Me=i.section`
  position: relative;
  overflow: hidden;
  min-height: 90vh;
  background: #f5f5f5;
  padding: 5rem 1.5rem 10rem;

  @media (min-width: 768px) {
    min-height: 96vh;
    padding: 7rem 1.5rem 14rem;
  }

  @media (max-height: 980px) and (min-width: 901px) {
    display: flex;
    flex-direction: column;
    gap: clamp(1rem, 2vh, 1.5rem);
    min-height: auto;
    padding: 6rem 1.5rem 3rem;
  }

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    gap: clamp(1rem, 3vw, 1.75rem);
    min-height: auto;
    padding: 4.5rem 1.25rem 2rem;
  }
`,Le=i.div`
  position: relative;
  z-index: 2;
  margin: 0 auto;
  max-width: 64rem;
`,Ae=i.div`
  margin-bottom: 1.25rem;
`,He=i.div`
  position: absolute;
  left: 50%;
  bottom: -32%;
  transform: translateX(-50%);
  width: min(72rem, 92vw);
  z-index: 1;
  pointer-events: none;

  @media (max-width: 768px) {
    bottom: -18%;
    width: 120vw;
  }

  @media (max-width: 900px) {
    position: relative;
    left: auto;
    bottom: auto;
    transform: none;
    width: 100%;
    max-width: 100%;
    margin: 1rem auto 0;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 0.75rem;
  }

  @media (max-height: 980px) and (min-width: 901px) {
    position: relative;
    left: auto;
    bottom: auto;
    transform: none;
    width: min(64rem, 88vw);
    max-width: 100%;
    margin: 0 auto;
  }
`,Be=i(P)`
  width: 100%;

  img {
    filter: saturate(0.96);
  }
`,Ge=i(s.div)`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    #e8e8e8 0%,
    #f5f5f5 50%,
    #e8e8e8 100%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;

  @keyframes shimmer {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`,We=i.div`
  position: relative;
  width: 100%;
  height: 100%;
`,Oe=i.div`
  margin-bottom: 3rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`,Q=i.div`
  text-align: left;
`,U=i.p`
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  color: #a3a3a3;
  text-transform: uppercase;
  margin: 0;
  margin-bottom: 0.5rem;
`,q=i.p`
  font-size: 0.875rem;
  color: #4b5563;
  margin: 0;
`,Ne=i(s.h1)`
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 1.2;
  color: #111827;
  max-width: 56rem;

  @media (min-width: 768px) {
    font-size: 3rem;
  }

  @media (min-width: 1024px) {
    font-size: 3.75rem;
  }
`,_e=i.div``,De=i.section`
  background: ${r=>r.$background};
  padding: ${r=>r.$compact?"0":"3.75rem 0"};
`,Ye=i.div`
  margin: 0 auto;
  max-width: 64rem;
`,H=i.h2`
  font-size: 1.875rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1.5rem;
`,D=i.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,_=i.p`
  margin: 0;
  max-width: 68ch;
  font-size: 1rem;
  line-height: 1.625;
  color: #666666;
`,ne=i.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`,oe=i(s.div)``,se=i(s.div)`
  overflow: hidden;
  border-radius: 0.5rem;
`,Z=i(P)`
  width: 100%;
  height: 24rem;

  @media (min-width: 768px) {
    height: 100%;
  }
`,Qe=i(s.div)`
  overflow: hidden;
  border-radius: 0;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
`,Ue=i.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;

  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
`,qe=i.p`
  margin-top: 0.75rem;
  font-size: 0.875rem;
  font-style: italic;
  color: #8b8b8b;
`,Xe=i.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`,de=i(s.div)`
  overflow: hidden;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover img {
    transform: scale(1.02);
  }
`,le=i(P)`
  width: 100%;

  img {
    transition: transform 0.3s ease-out;
  }
`,Ke=i.div`
  display: grid;
  gap: 1rem;

  ${r=>r.$count===3?`
        grid-template-columns: 1.2fr 0.8fr;
        grid-template-rows: auto auto;
      `:r.$count===4?`
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: auto auto;
      `:`
      grid-template-columns: repeat(3, 1fr);
      grid-auto-rows: minmax(200px, auto);
    `}

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 0.75rem;
    grid-template-rows: auto;
    grid-auto-rows: auto;
  }
`,Je=i(s.div)`
  cursor: pointer;
  overflow: hidden;
  border-radius: 10px;

  ${r=>{if(r.$count===3){if(r.$index===0)return`
          grid-column: 1;
          grid-row: 1 / span 2;
        `;if(r.$index===1)return`
          grid-column: 2;
          grid-row: 1;
        `;if(r.$index===2)return`
          grid-column: 2;
          grid-row: 2;
        `}if(r.$count===4){if(r.$index===0)return`
          grid-column: 1 / span 2;
          grid-row: 1;
        `;if(r.$index===1)return`
          grid-column: 3;
          grid-row: 1;
        `;if(r.$index===2)return`
          grid-column: 1;
          grid-row: 2;
        `;if(r.$index===3)return`
          grid-column: 2 / span 2;
          grid-row: 2;
        `}return r.$count>=5&&r.$index===0?`
        grid-column: 1 / span 2;
      `:""}}

  @media (max-width: 768px) {
    grid-column: auto !important;
    grid-row: auto !important;
  }

  &:hover img {
    transform: scale(1.03);
  }
`,Ze=i(P)`
  width: 100%;

  img {
    transition: transform 0.5s ease-out;
  }
`,et=i.section`
  display: grid;
  grid-template-columns: 0.8fr 2.2fr;
  grid-template-rows: auto auto;
  gap: 1.5rem;
  align-items: start;
  max-width: 1200px;
  margin: 0 auto;
  padding: 3.5rem 6%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 2.5rem 1.25rem;
  }
`,tt=i(s.div)`
  display: flex;
  flex-direction: column;
  grid-column: 1;
  grid-row: 1 / span 2;

  @media (max-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
  }
`,it=i.span`
  font-size: 0.85rem;
  line-height: 2.4;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${r=>r.$active?"#000":"#bbb"};
  font-weight: ${r=>r.$active?700:600};

  @media (max-width: 768px) {
    line-height: 1.6;
  }
`,rt=i.div`
  position: relative;
  grid-column: 2;
  grid-row: 1;
`;i(s.div)`
  position: absolute;
  inset: 0;
  margin: -20px;
  border-radius: 14px;
  z-index: 0;
  background: ${r=>r.$accentColor};
`;const at=i(s.div)`
  position: relative;
  z-index: 1;
`,nt=i(P)`
  width: 100%;
`,ot=i(s.div)`
  grid-column: 2;
  grid-row: 2;
`,st=i.h3`
  margin: 0 0 0.35rem;
  font-size: 1.1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #555;
`,dt=i(D)`
  gap: 0.45rem;
`,lt=i(D)`
  gap: 0.6rem;
`,ct=i.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  align-items: start;
  width: 100%;
  max-width: none;
  margin: 0 auto;
  padding: 3rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 2.5rem 1.25rem;
  }
`,mt=i(s.div)`
  border-radius: 12px;
  overflow: hidden;
`,pt=i(s.div)`
  margin-top: 0;
  border-radius: 12px;
  overflow: hidden;

  @media (max-width: 768px) {
    margin-top: 0;
  }
`,ce=i(P)`
  width: 100%;

  img {
    object-fit: contain;
  }
`,gt=i.p`
  margin: 2rem auto 0;
  max-width: 600px;
  text-align: center;
  font-size: 0.95rem;
  color: #888;
`,ht=i.div`
  margin: 0 auto;
  max-width: 45rem;
`,ut=i(s.div)``,xt=i(_)`
  font-size: clamp(1rem, 1.15vw, 1.15rem);
  line-height: 1.65;
  max-width: 62ch;
  text-wrap: pretty;
`,ft=i.div`
  margin: 0 auto;
  max-width: 800px;
  padding: 5rem 6%;
`,wt=i(s.div)`
  border-left: 3px solid ${r=>r.$accentColor||"#333"};
  padding-left: 2rem;
  margin-left: 0;

  ${r=>r.$accentColor?`
    background: ${r.$accentColor}12;
    padding: 3rem 2.5rem;
    border-radius: 0 12px 12px 0;
  `:""}
`,vt=i.p`
  margin: 0;
  text-align: left;
  font-size: clamp(1.2rem, 2.1vw, 1.55rem);
  font-style: italic;
  line-height: 1.5;
  color: #1a1a1a;
  text-wrap: balance;
`,bt=i.cite`
  display: block;
  margin-top: 1.5rem;
  font-size: 0.85rem;
  font-style: normal;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #999;
`,yt=i.section`
  display: flex;
  flex-direction: column;
  gap: 0;
  padding: 0 0 4rem;
`,jt=i.div`
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  padding: 0;
  background: white;
`,It=i.div`
  position: relative;
  width: min(65vw, 1080px);
  margin: 0 auto;
  padding-top: 1.5rem;

  @media (max-width: 1024px) {
    width: min(72vw, 980px);
  }

  @media (max-width: 768px) {
    width: calc(100vw - 2.5rem);
    padding-top: 1rem;
  }
`,$t=i.div`
  position: relative;
  min-height: 0;
  height: clamp(340px, 46vw, 680px);

  @media (max-width: 768px) {
    height: clamp(260px, 58vw, 460px);
  }
`,Rt=i(P)`
  height: 100%;
`,Ct=i.div`
  margin-top: 1rem;
  padding: 0 1.25rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.25rem;
`,St=i.span`
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #888;
  padding: 0.25rem 0;
`,kt=i.span`
  color: #9a9a9a;
  margin: 0 0.25rem;
`,zt=i.div`
  margin-top: 1rem;
  padding: 0 0 1.25rem;
`,Pt=i.div`
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  padding: 3.5rem 0 3rem;
  background: #f0efeb;

  > * {
    width: min(65vw, 1080px);
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 1024px) {
    > * {
      width: min(72vw, 980px);
    }
  }

  @media (max-width: 768px) {
    padding: 2.5rem 0 2.5rem;

    > * {
      width: calc(100vw - 2.5rem);
    }
  }
`,X=i(s.div)`
  margin-bottom: 3rem;

  &:last-child {
    margin-bottom: 0;
  }
`,Tt=i.p`
  margin: 0;
  border-left: 3px solid currentColor;
  padding-left: 1.5rem;
  text-align: left;
  font-size: 1.5rem;
  font-style: italic;
  line-height: 1.5;
  color: #222;
`,Vt=i.section`
  position: relative;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    min-height: 80vh;
  }
`,Et=i(s.div)`
  position: relative;
  width: 100%;
  height: min(92vh, 920px);

  @media (max-width: 768px) {
    height: min(78vh, 620px);
  }
`,Ft=i(P)`
  height: 100%;
  border-radius: 0;
`,Mt=i.div`
  position: relative;
  z-index: 2;
  padding: 2.5rem 6% 3.5rem;
  background: white;

  @media (max-width: 768px) {
    padding: 2rem 1.25rem;
  }
`,Lt=i(s.h2)`
  color: #111;
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  line-height: 1.15;
  max-width: 700px;
  margin: 0 0 1rem;
`,At=i(s.p)`
  margin: 0;
  color: #222;
  font-size: 1.05rem;
  line-height: 1.7;
  max-width: 540px;
`,Ht=i.section`
  position: relative;
  padding: 3.5rem 6%;
`,Bt=i.div`
  position: relative;
  margin: 0 auto;
  max-width: 1000px;
`;i(s.div)`
  position: absolute;
  top: 15%;
  bottom: 5%;
  left: 8%;
  right: -2%;
  z-index: 0;
  border-radius: 16px;
  background: ${r=>r.$accentColor};

  @media (max-width: 768px) {
    top: 10%;
    bottom: 8%;
    left: 4%;
    right: -1%;
  }
`;const Gt=i(s.div)`
  position: relative;
  z-index: 1;
  max-width: 85%;
  margin: 0 auto;
  border-radius: 12px;
  box-shadow:
    0 24px 60px rgba(0, 0, 0, 0.15),
    0 8px 20px rgba(0, 0, 0, 0.08);

  @media (max-width: 768px) {
    max-width: 95%;
  }
`,Wt=i(P)`
  width: 100%;
`,Ot=i.div`
  position: relative;
  z-index: 1;
  max-width: 600px;
  margin: 2.5rem auto 0;
  text-align: left;
`;i.section`
  border-top: 1px solid #e5e7eb;
  background: white;
  padding: 4rem 1.5rem 6rem;

  @media (min-width: 768px) {
    padding: 6rem 1.5rem;
  }
`;i.div`
  margin: 0 auto;
  max-width: 64rem;
`;i.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 2rem;
`;i.p`
  margin: 0;
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  color: #9ca3af;
  text-transform: uppercase;
`;i.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;i.button`
  border: 1px solid #d1d5db;
  background: #ffffff;
  color: #111827;
  border-radius: 999px;
  padding: 0.45rem 0.75rem;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  cursor: pointer;
  transition: all 180ms ease;

  &:hover {
    border-color: #9ca3af;
    background: #f9fafb;
  }
`;const Nt=i(s.button)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;i.p`
  font-size: 0.875rem;
  letter-spacing: 0.1em;
  color: #a3a3a3;
  text-transform: uppercase;
  margin: 0;
`;i.h3`
  margin-top: 0.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;

  @media (min-width: 768px) {
    margin-top: 0;
    font-size: 1.875rem;
  }
`;i.div`
  font-size: 1.5rem;
  color: #a3a3a3;
  transition: color 200ms;

  ${Nt}:hover & {
    color: #111827;
  }
`;const z={duration:.7,ease:[.25,.1,.25,1]},k={duration:.9,ease:[.25,.1,.25,1]},f={once:!0,amount:.2};function _t({tags:r}){const o=l.useRef(null),w=me(o,{once:!0,margin:"100px"});return e.jsx("div",{ref:o,children:w&&e.jsx(Ct,{children:r.map((j,g)=>e.jsx(s.div,{initial:{opacity:0,y:8},animate:{opacity:1,y:0},transition:{duration:.35,delay:g*.04},children:e.jsxs(St,{children:[j,g<r.length-1&&e.jsx(kt,{children:"•"})]})},`${j}-${g}`))})})}function Dt({images:r}){const o=l.useRef(null),w=me(o,{once:!0,margin:"100px"});return e.jsx("div",{ref:o,children:w&&e.jsx(zt,{children:e.jsx(s.div,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{duration:.45},children:e.jsx(te,{images:r,autoPlay:!0,intervalMs:2800})})})})}const ee=new Set(["full-width-image","parallax-reveal","image-pair","staggered-pair"]),Yt=new Set(["sticky-split","parallax-reveal"]),Qt=l.memo(function({caseStudy:o,nextProject:w,onNextProject:j,topAction:g}){const[v,$]=l.useState(!1),[T,V]=l.useState("idle"),x=t=>t?t.split(`

`).filter(a=>a.trim()):[],b=t=>{if(!t)return null;const a=t.trim(),n=/^#([0-9a-fA-F]{3})$/,d=/^#([0-9a-fA-F]{6})$/;if(n.test(a)){const[,m]=a.match(n),u=parseInt(m[0]+m[0],16),F=parseInt(m[1]+m[1],16),I=parseInt(m[2]+m[2],16);return`rgba(${u}, ${F}, ${I}, 0.06)`}if(d.test(a)){const[,m]=a.match(d),u=parseInt(m.slice(0,2),16),F=parseInt(m.slice(2,4),16),I=parseInt(m.slice(4,6),16);return`rgba(${u}, ${F}, ${I}, 0.06)`}return null},M=(t,a)=>{const n=b(t.accentColor);return n||(a?"white":"#f5f5f5")},L=()=>e.jsxs(Oe,{children:[e.jsxs(Q,{children:[e.jsx(U,{children:"Client"}),e.jsx(q,{children:o.meta.client})]}),e.jsxs(Q,{children:[e.jsx(U,{children:"Role"}),e.jsx(q,{children:o.meta.role})]}),e.jsxs(Q,{children:[e.jsx(U,{children:"Timeline"}),e.jsx(q,{children:o.meta.timeline})]}),e.jsxs(Q,{children:[e.jsx(U,{children:"Platform"}),e.jsx(q,{children:o.meta.platform})]})]}),B=t=>e.jsx("div",{children:e.jsxs(ne,{children:[e.jsxs(oe,{initial:{opacity:0,x:-30},whileInView:{opacity:1,x:0},viewport:f,transition:z,children:[t.heading&&e.jsx(H,{children:t.heading}),e.jsx(D,{children:x(t.body).map((a,n)=>e.jsx(_,{children:a},n))})]}),t.images&&t.images[0]&&e.jsx(se,{initial:{opacity:0,x:30},whileInView:{opacity:1,x:0},viewport:f,transition:k,children:e.jsx(Z,{src:t.images[0].src,alt:t.images[0].alt,avif:t.images[0].avif,webp:t.images[0].webp,aspectRatio:t.images[0].aspectRatio||"3/2",borderRadius:"8px",objectFit:"cover"})})]})},t.id),W=t=>e.jsx("div",{children:e.jsxs(ne,{children:[t.images&&t.images[0]&&e.jsx(se,{style:{order:2},initial:{opacity:0,x:-30},whileInView:{opacity:1,x:0},viewport:f,transition:k,children:e.jsx(Z,{src:t.images[0].src,alt:t.images[0].alt,avif:t.images[0].avif,webp:t.images[0].webp,aspectRatio:t.images[0].aspectRatio||"3/2",borderRadius:"8px",objectFit:"cover"})}),e.jsxs(oe,{style:{order:1},initial:{opacity:0,x:30},whileInView:{opacity:1,x:0},viewport:f,transition:z,children:[t.heading&&e.jsx(H,{children:t.heading}),e.jsx(D,{children:x(t.body).map((a,n)=>e.jsx(_,{children:a},n))})]})]})},t.id),A=t=>e.jsxs("div",{children:[e.jsx(Qe,{initial:{opacity:0,scale:.97},whileInView:{opacity:1,scale:1},viewport:f,transition:k,children:t.images&&t.images[0]&&e.jsx(Z,{src:t.images[0].src,alt:t.images[0].alt,avif:t.images[0].avif,webp:t.images[0].webp,aspectRatio:t.images[0].aspectRatio||"16/9",borderRadius:"8px",objectFit:"cover",style:{width:"100%"}})}),(t.caption||t.body)&&e.jsx(qe,{children:t.caption||t.body})]},t.id),y=t=>e.jsxs("div",{children:[t.heading&&e.jsx(H,{children:t.heading}),e.jsx(Ue,{children:t.images&&t.images.slice(0,2).map((a,n)=>e.jsx(de,{initial:{opacity:0,scale:.97},whileInView:{opacity:1,scale:1},viewport:f,transition:{...k,delay:n*.15},children:e.jsx(le,{src:a.src,alt:a.alt,avif:a.avif,webp:a.webp,aspectRatio:a.aspectRatio||"3/2",borderRadius:"0",objectFit:"contain",style:{height:"26rem"}})},n))})]},t.id),O=t=>e.jsxs("div",{children:[t.heading&&e.jsx(H,{children:t.heading}),e.jsx(Xe,{children:t.images&&t.images.map((a,n)=>e.jsx(de,{initial:{opacity:0,scale:.95},whileInView:{opacity:1,scale:1},viewport:f,whileHover:{scale:1.02},transition:{...k,delay:n*.1},children:e.jsx(le,{src:a.src,alt:a.alt,avif:a.avif,webp:a.webp,aspectRatio:a.aspectRatio||"1/1",borderRadius:"8px",objectFit:"cover"})},n))})]},t.id),N=t=>{const a=t.images||[];return e.jsxs("div",{children:[t.heading&&e.jsx(H,{children:t.heading}),e.jsx(Ke,{$count:a.length,children:a.map((n,d)=>e.jsx(Je,{$index:d,$count:a.length,initial:{opacity:0,y:20,scale:.97},whileInView:{opacity:1,y:0,scale:1},viewport:{once:!0,amount:.2},transition:{...z,delay:d*.08},children:e.jsx(Ze,{src:n.src,alt:n.alt,avif:n.avif,webp:n.webp,aspectRatio:n.aspectRatio||"4/3",borderRadius:"10px",objectFit:"cover"})},`${n.src}-${d}`))})]},t.id)},E=t=>{const a=t.images?.[0],n=t.labels||[];return e.jsxs(et,{children:[e.jsx(tt,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},viewport:{once:!0,amount:.2},transition:z,children:n.map((d,m)=>e.jsx(it,{$active:m===0,children:d},`${d}-${m}`))}),e.jsx(rt,{children:a&&e.jsx(at,{initial:{opacity:0,y:24},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.2},transition:k,children:e.jsx(nt,{src:a.src,alt:a.alt,avif:a.avif,webp:a.webp,aspectRatio:a.aspectRatio||"4/5",borderRadius:"12px",objectFit:"cover"})})}),e.jsxs(ot,{initial:{opacity:0,x:20},whileInView:{opacity:1,x:0},viewport:{once:!0,amount:.2},transition:z,children:[t.heading&&e.jsx(st,{children:t.heading}),e.jsx(dt,{children:x(t.body).map((d,m)=>e.jsx(_,{children:d},m))})]})]},t.id)},C=t=>{const a=t.images||[];if(a.length<=1)return A(t);const n=a[0],d=a[1];return e.jsxs("div",{children:[e.jsxs(ct,{children:[e.jsx(mt,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.2},transition:k,children:e.jsx(ce,{src:n.src,alt:n.alt,avif:n.avif,webp:n.webp,aspectRatio:n.aspectRatio||"16/9",borderRadius:"12px",objectFit:"contain"})}),e.jsx(pt,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.2},transition:{...k,delay:.15},children:e.jsx(ce,{src:d.src,alt:d.alt,avif:d.avif,webp:d.webp,aspectRatio:d.aspectRatio||"16/9",borderRadius:"12px",objectFit:"contain",objectPosition:"top center"})})]}),t.body&&e.jsx(gt,{children:t.body})]},t.id)},R=t=>e.jsx("div",{children:e.jsx(ht,{children:e.jsxs(ut,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:f,transition:z,children:[t.heading&&e.jsx(H,{style:{textAlign:"left"},children:t.heading}),e.jsx(D,{style:{alignItems:"flex-start"},children:x(t.body).map((a,n)=>e.jsx(xt,{style:{textAlign:"left"},children:a},n))})]})})},t.id),c=t=>e.jsx("div",{children:e.jsx(ft,{children:e.jsxs(wt,{$accentColor:t.accentColor,initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:f,transition:z,children:[e.jsx(vt,{children:t.body}),t.heading&&e.jsx(bt,{children:t.heading})]})})},t.id),h=t=>e.jsxs("div",{children:[t.heading&&e.jsx(H,{children:t.heading}),t.images&&t.images.length>0&&e.jsx(s.div,{initial:{opacity:0,scale:.97},whileInView:{opacity:1,scale:1},viewport:f,transition:k,children:e.jsx(te,{images:t.images})})]},t.id),G=t=>{const a=t.stickyContent?.image||t.images?.[0],n=t.stickyContent?.tags||[],d=t.stickyContent?.collateralImages||[],m=t.scrollContent?.blocks||[];return e.jsxs(yt,{children:[e.jsx(Pt,{children:m.map((u,F)=>{if(u.type==="text")return e.jsxs(X,{initial:{opacity:0,x:20},whileInView:{opacity:1,x:0},viewport:f,transition:z,children:[u.heading&&e.jsx(H,{children:u.heading}),e.jsx(lt,{children:x(u.body).map((I,K)=>e.jsx(_,{children:I},K))})]},`${t.id}-text-${F}`);if(u.type==="image"){const I=u.images?.[0];return I?e.jsx(X,{initial:{opacity:0,scale:.97},whileInView:{opacity:1,scale:1},viewport:f,transition:k,children:e.jsx(P,{src:I.src,alt:I.alt,avif:I.avif,webp:I.webp,aspectRatio:I.aspectRatio||"3/2",borderRadius:"8px",objectFit:"cover"})},`${t.id}-image-${F}`):null}return u.type==="carousel"?e.jsx(X,{initial:{opacity:0,scale:.97},whileInView:{opacity:1,scale:1},viewport:f,transition:k,children:u.images&&u.images.length>0&&e.jsx(te,{images:u.images,showControls:!1,showDots:!1})},`${t.id}-carousel-${F}`):u.type==="quote"?e.jsx(X,{initial:{opacity:0,x:30},whileInView:{opacity:1,x:0},viewport:f,transition:z,children:e.jsx(Tt,{children:u.body})},`${t.id}-quote-${F}`):null})}),e.jsx(jt,{children:e.jsxs(It,{children:[a&&e.jsx($t,{children:e.jsx(Rt,{src:a.src,alt:a.alt,avif:a.avif,webp:a.webp,aspectRatio:a.aspectRatio||"16/9",borderRadius:"12px",objectFit:"cover"})}),n.length>0&&e.jsx(_t,{tags:n}),d.length>0&&e.jsx(Dt,{images:d})]})})]},t.id)},p=t=>{const a=t.images?.[0];return a?e.jsxs(Vt,{children:[e.jsx(Et,{children:e.jsx(Ft,{src:a.src,alt:a.alt,avif:a.avif,webp:a.webp,parallaxSpeed:t.parallaxSpeed??.4,objectFit:"cover"})}),e.jsxs(Mt,{children:[t.heading&&e.jsx(Lt,{initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:f,transition:z,children:t.heading}),t.body&&e.jsx(At,{initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:f,transition:{...z,delay:.15},children:t.body})]})]},t.id):null},S=t=>{const a=t.images?.[0];return a?e.jsx(Ht,{children:e.jsxs(Bt,{children:[e.jsx(Gt,{initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:f,transition:k,children:e.jsx(Wt,{src:a.src,alt:a.alt,avif:a.avif,webp:a.webp,aspectRatio:a.aspectRatio||"3/2",borderRadius:"12px",objectFit:"cover"})}),(t.heading||t.body)&&e.jsxs(Ot,{children:[t.heading&&e.jsx(H,{children:t.heading}),t.body&&e.jsx(D,{style:{alignItems:"flex-start"},children:x(t.body).map((n,d)=>e.jsx(_,{style:{textAlign:"left"},children:n},d))})]})]})},t.id):null},Y=t=>{switch(t.layout){case"text-left-image-right":return B(t);case"text-right-image-left":return W(t);case"full-width-image":return A(t);case"image-pair":return y(t);case"gallery-grid":return O(t);case"asymmetric-mosaic":return N(t);case"three-column-feature":return E(t);case"staggered-pair":return C(t);case"text-only":return R(t);case"quote":return c(t);case"image-carousel":return h(t);case"parallax-reveal":return p(t);case"image-on-color-block":return S(t);case"sticky-split":return G(t);default:return null}};return e.jsxs(Fe,{children:[e.jsxs(Me,{children:[e.jsxs(Le,{children:[g&&e.jsx(Ae,{children:g}),e.jsx(L,{}),e.jsx(Ne,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.2,ease:[.25,.1,.25,1]},children:o.heroHeadline})]}),e.jsx(He,{children:e.jsxs(We,{children:[e.jsx(Be,{src:o.coverImage.src,alt:o.coverImage.alt,avif:o.coverImage.avif,webp:o.coverImage.webp,aspectRatio:o.coverImage.aspectRatio||"16/9",borderRadius:"8px",objectFit:"cover",imageScale:1,onLoad:()=>$(!0)}),!v&&e.jsx(Ge,{initial:{opacity:1},animate:{opacity:0},transition:{duration:.4,delay:.3},"aria-hidden":"true"})]})})]}),e.jsx(_e,{children:o.sections.map((t,a)=>{const n=o.sections[a-1],d=o.sections[a+1],m=Yt.has(t.layout),u=ee.has(t.layout),F=n?ee.has(n.layout):!1,I=d?ee.has(d.layout):!1,K=u&&(F||I);return m?e.jsx("div",{children:Y(t)},t.id):e.jsx(s.div,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0,margin:"200px"},transition:{duration:.6,ease:"easeOut"},children:e.jsx(De,{$background:M(t,a%2===0),$compact:K,children:e.jsx(Ye,{children:Y(t)})})},t.id)})})]})}),Ut=i(s.div)`
  position: relative;
`;function oi(){const r=ve[0];return l.useLayoutEffect(()=>{window.scrollTo(0,0)},[]),e.jsxs(Ut,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},children:[e.jsx(Qt,{caseStudy:r}),e.jsx("div",{style:{borderTop:"1px solid #e5e7eb",width:"100vw",position:"relative",left:0,right:0}}),e.jsx(be,{}),e.jsxs(je,{style:{paddingTop:"1.5rem",paddingBottom:"4rem",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"},children:[e.jsx(ye,{}),e.jsxs("a",{href:"https://zackmactavish.com",target:"_blank",rel:"noopener noreferrer",style:{fontFamily:"Space Grotesk, sans-serif",fontWeight:600,fontSize:"1.1rem",color:"#fff",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:"0.4em",transition:"color 0.18s"},children:["Art Portfolio ",e.jsx("span",{style:{fontSize:"1.3em",lineHeight:1,display:"inline-block",transform:"translateY(1px)"},children:"→"})]})]})]})}export{oi as default};
