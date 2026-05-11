import{j as e}from"./three-CIqbc5c4.js";import{b as c,c as r,R as he}from"./vendor-hQudadcW.js";import{M as ue,N as xe,O as fe,Q as we,U as ve,I as d}from"./index-Dju1m2n4.js";function be(i){const o=ue(()=>xe(i)),{isStatic:w}=c.useContext(fe);if(w){const[,j]=c.useState(i);c.useEffect(()=>o.on("change",j),[])}return o}const ye={some:0,all:1};function je(i,o,{root:w,margin:j,amount:h="some"}={}){const v=we(i),R=new WeakMap,k=u=>{u.forEach(p=>{const T=R.get(p.target);if(p.isIntersecting!==!!T)if(p.isIntersecting){const M=o(p.target,p);typeof M=="function"?R.set(p.target,M):V.unobserve(p.target)}else typeof T=="function"&&(T(p),R.delete(p.target))})},V=new IntersectionObserver(k,{root:w,rootMargin:j,threshold:typeof h=="number"?h:ye[h]});return v.forEach(u=>V.observe(u)),()=>V.disconnect()}function pe(i,{root:o,margin:w,amount:j,once:h=!1,initial:v=!1}={}){const[R,k]=c.useState(v);return c.useEffect(()=>{if(!i.current||h&&R)return;const V=()=>(k(!0),h?void 0:()=>k(!1)),u={root:o&&o.current||void 0,margin:w,amount:j};return je(i.current,V,u)},[o,i,w,h,j]),R}function Z(i){if(!i)return i;try{return encodeURI(decodeURI(i))}catch{return encodeURI(i)}}const $e=r(d.div)`
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: ${i=>i.$borderRadius};
  background: ${i=>i.$backgroundColor||"transparent"};

  ${i=>i.$aspectRatio?`
    aspect-ratio: ${i.$aspectRatio};
  `:""}
`,Ie=r.picture`
  display: block;
  width: 100%;
  height: ${i=>i.$fillContainer?"100%":"auto"};
  overflow: hidden;
  border-radius: ${i=>i.$borderRadius};
`,Ce=r.div`
  position: ${i=>i.$fillContainer?"absolute":"relative"};
  inset: ${i=>i.$fillContainer?`${i.$imagePaddingBlock||"0"} 0`:"auto"};
  padding-block: ${i=>i.$fillContainer?"0":i.$imagePaddingBlock||"0"};
  overflow: hidden;
  border-radius: ${i=>i.$borderRadius};
`,Re=r(d.img)`
  display: block;
  width: 100%;
  height: ${i=>i.$fillContainer?i.$hasParallax?"110%":"100%":"auto"};
  object-fit: ${i=>i.$objectFit};
  object-position: ${i=>i.$objectPosition};
  border-radius: ${i=>i.$borderRadius};
`;function F({src:i,alt:o,avif:w,webp:j,aspectRatio:h,parallaxSpeed:v=0,className:R,borderRadius:k="12px",containerBorderRadius:V,backgroundColor:u,imagePaddingBlock:p,objectFit:T="cover",objectPosition:M="center",imageScale:A=1,disableRevealAnimation:O=!1,loading:W="lazy",decoding:b="async",onLoad:G}){const H=c.useRef(null),N=ve(),[$,I]=c.useState(window.innerWidth<768),l=be(0);c.useEffect(()=>{const a=()=>{I(window.innerWidth<768)};return window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)},[]);const x=Math.max(0,v)*60,E=v>0&&!N&&!$,C=!!h,z=V??k,J=Z(i),Q=Z(w),t=Z(j);return c.useEffect(()=>{if(!E){l.set(0);return}const a=()=>{const n=H.current;if(!n)return;const s=n.getBoundingClientRect(),m=window.innerHeight,g=m+s.height,P=g>0?(m-s.top)/g:.5,y=Math.min(1,Math.max(0,P)),U=-x+y*x*2;l.set(U)};return a(),window.addEventListener("scroll",a,{passive:!0}),window.addEventListener("resize",a),()=>{window.removeEventListener("scroll",a),window.removeEventListener("resize",a)}},[x,l,E]),e.jsx($e,{ref:H,className:R,$aspectRatio:h,$borderRadius:z,$backgroundColor:u,...O?{}:{initial:{opacity:0,y:24},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.2},transition:{duration:.9,ease:[.25,.1,.25,1]}},children:e.jsx(Ce,{$imagePaddingBlock:p,$fillContainer:C,$borderRadius:k,children:e.jsxs(Ie,{$fillContainer:C,$borderRadius:k,children:[Q&&e.jsx("source",{srcSet:Q,type:"image/avif"}),t&&e.jsx("source",{srcSet:t,type:"image/webp"}),e.jsx(Re,{src:J,alt:o,loading:W,decoding:b,onLoad:G,style:{y:E?l:0,scale:A},$objectFit:T,$objectPosition:M,$hasParallax:E,$fillContainer:C,$borderRadius:k})]})})})}const ke=r.div`
  width: 100%;
`,ge=he.forwardRef((i,o)=>e.jsx(d.div,{ref:o,style:{position:"relative",width:"100%",borderRadius:"12px",overflow:"hidden",aspectRatio:"3 / 2",background:"#f0efeb",...i.style||{}},...i}));ge.displayName="Frame";const Pe=r.div`
  position: absolute;
  inset: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${i=>i.$visible?1:0};
  transition: opacity 0.2s ease;
  pointer-events: none;
`,re=r.button`
  pointer-events: auto;
  position: absolute;
  top: 50%;
  ${i=>i.$side}: 1rem;
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
`,Se=r.button`
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
`,ae=r.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
`,ne=r(F)`
  width: 100%;
  height: 100%;
`,ze=r.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`,Be=r.button`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  padding: 0;
  background: ${i=>i.$active?"#333":"#ccc"};
  transform: ${i=>i.$active?"scale(1.3)":"scale(1)"};
  transition: all 0.3s;
`;function ie({images:i,autoPlay:o=!1,intervalMs:w=4e3,showControls:j=!0,showDots:h=!0}){c.useEffect(()=>{if(!W.current)return;let l=!1;try{W.current.focus({preventScroll:!0}),l=!0}catch{}},[]);const[v,R]=c.useState(0),[k,V]=c.useState(0),[u,p]=c.useState(!0),[T,M]=c.useState(!1),[A,O]=c.useState(!1),W=c.useRef(null),b=i.length,G=l=>{if(!b)return;const x=(l+b)%b;V(v),p(!1),R(x)},H=()=>G(v+1),N=()=>G(v-1);if(c.useEffect(()=>{if(!o||A||b<2)return;const l=setInterval(()=>{R(x=>(x+1)%b)},w);return()=>clearInterval(l)},[o,w,A,b]),c.useEffect(()=>{if(b<2)return;const l=E=>new Promise(C=>{const z=new Image;z.onload=async()=>{if(typeof z.decode=="function")try{await z.decode()}catch{}C()},z.onerror=()=>C(),z.src=E});(async()=>{const E=i.flatMap(C=>[C.avif,C.webp,C.src].filter(z=>!!z));await Promise.all(E.map(C=>l(C)))})()},[i,b]),!b)return null;const $=i[v],I=i[k];return e.jsxs(ke,{children:[e.jsxs(ge,{ref:W,tabIndex:0,"data-carousel-frame":"true",onMouseEnter:()=>M(!0),onMouseLeave:()=>M(!1),onKeyDown:l=>{l.key==="ArrowRight"&&(l.preventDefault(),O(!0),H()),l.key==="ArrowLeft"&&(l.preventDefault(),O(!0),N())},drag:"x",dragConstraints:{left:0,right:0},onDragEnd:(l,x)=>{x.offset.x>80?N():x.offset.x<-80&&H()},children:[!u&&e.jsx(ae,{style:{zIndex:1},children:e.jsx(ne,{src:I.src,alt:I.alt,avif:I.avif,webp:I.webp,aspectRatio:I.aspectRatio||"3/2",borderRadius:"0",backgroundColor:I.backgroundColor,imagePaddingBlock:I.imagePaddingBlock,objectFit:I.objectFit||"cover",objectPosition:I.objectPosition||"center",disableRevealAnimation:!0,loading:"eager",decoding:"auto"},`prev-${I.src}-${k}`)}),e.jsx(ae,{style:{zIndex:2},children:e.jsx(ne,{src:$.src,alt:$.alt,avif:$.avif,webp:$.webp,aspectRatio:$.aspectRatio||"3/2",borderRadius:"0",backgroundColor:$.backgroundColor,imagePaddingBlock:$.imagePaddingBlock,objectFit:$.objectFit||"cover",objectPosition:$.objectPosition||"center",disableRevealAnimation:!0,loading:"eager",decoding:"auto",onLoad:()=>p(!0),style:{position:u?"relative":"absolute"}},`active-${$.src}-${v}`)}),b>1&&j&&e.jsxs(Pe,{$visible:T,children:[e.jsx(re,{type:"button",$side:"left","aria-label":"Previous image",onClick:N,children:"‹"}),o&&e.jsx(Se,{type:"button","aria-label":A?"Resume slideshow":"Pause slideshow",onClick:()=>O(l=>!l),children:A?"▶":"❚❚"}),e.jsx(re,{type:"button",$side:"right","aria-label":"Next image",onClick:H,children:"›"})]})]}),b>1&&h&&e.jsx(ze,{children:i.map((l,x)=>e.jsx(Be,{type:"button",$active:x===v,"aria-label":`Go to slide ${x+1}`,"aria-current":x===v,onClick:()=>G(x)},`${l.src}-${x}`))})]})}const Fe=r.div`
  min-height: 100vh;
  background: white;
`,Ve=r.section`
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
`,Ee=r.div`
  position: relative;
  z-index: 2;
  margin: 0 auto;
  max-width: 64rem;
`,Te=r.div`
  margin-bottom: 1.25rem;
`,Me=r.div`
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
`,Le=r(F)`
  width: 100%;

  img {
    filter: saturate(0.96);
  }
`,Ae=r(d.div)`
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
`,He=r.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: ${({$backgroundColor:i})=>i||"transparent"};
  padding-block: ${({$backgroundColor:i})=>i?"clamp(1rem, 2vw, 1.5rem)":"0"};
  border-radius: ${({$backgroundColor:i})=>i?"24px":"0"};
  overflow: hidden;
`,Oe=r.div`
  margin-bottom: 3rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`,Y=r.div`
  text-align: left;
`,q=r.p`
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  color: #a3a3a3;
  text-transform: uppercase;
  margin: 0;
  margin-bottom: 0.5rem;
`,X=r.p`
  font-size: 0.875rem;
  color: #4b5563;
  margin: 0;
`,We=r(d.h1)`
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
`,Ge=r.div``,Ne=r.section`
  background: ${i=>i.$background};
  padding: ${i=>i.$compact?"0":"3.75rem 0"};
`,De=r.div`
  margin: 0 auto;
  max-width: 64rem;
`,L=r.h2`
  font-size: 1.875rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1.5rem;
`,_=r.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,D=r.p`
  margin: 0;
  max-width: 68ch;
  font-size: 1rem;
  line-height: 1.625;
  color: #666666;
`,oe=r.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`,se=r(d.div)``,de=r(d.div)`
  overflow: hidden;
  border-radius: 0.5rem;
`,ee=r(F)`
  width: 100%;
  height: 24rem;

  @media (min-width: 768px) {
    height: 100%;
  }
`,_e=r(d.div)`
  overflow: hidden;
  border-radius: 0;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
`,Qe=r.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;

  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
`,Ue=r.p`
  margin-top: 0.75rem;
  font-size: 0.875rem;
  font-style: italic;
  color: #8b8b8b;
`,Ye=r.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`,le=r(d.div)`
  overflow: hidden;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover img {
    transform: scale(1.02);
  }
`,ce=r(F)`
  width: 100%;

  img {
    transition: transform 0.3s ease-out;
  }
`,qe=r.div`
  display: grid;
  gap: 1rem;

  ${i=>i.$count===3?`
        grid-template-columns: 1.2fr 0.8fr;
        grid-template-rows: auto auto;
      `:i.$count===4?`
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
`,Xe=r(d.div)`
  cursor: pointer;
  overflow: hidden;
  border-radius: 10px;

  ${i=>{if(i.$count===3){if(i.$index===0)return`
          grid-column: 1;
          grid-row: 1 / span 2;
        `;if(i.$index===1)return`
          grid-column: 2;
          grid-row: 1;
        `;if(i.$index===2)return`
          grid-column: 2;
          grid-row: 2;
        `}if(i.$count===4){if(i.$index===0)return`
          grid-column: 1 / span 2;
          grid-row: 1;
        `;if(i.$index===1)return`
          grid-column: 3;
          grid-row: 1;
        `;if(i.$index===2)return`
          grid-column: 1;
          grid-row: 2;
        `;if(i.$index===3)return`
          grid-column: 2 / span 2;
          grid-row: 2;
        `}return i.$count>=5&&i.$index===0?`
        grid-column: 1 / span 2;
      `:""}}

  @media (max-width: 768px) {
    grid-column: auto !important;
    grid-row: auto !important;
  }

  &:hover img {
    transform: scale(1.03);
  }
`,Ke=r(F)`
  width: 100%;

  img {
    transition: transform 0.5s ease-out;
  }
`,Je=r.section`
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
`,Ze=r(d.div)`
  display: flex;
  flex-direction: column;
  grid-column: 1;
  grid-row: 1 / span 2;

  @media (max-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
  }
`,et=r.span`
  font-size: 0.85rem;
  line-height: 2.4;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${i=>i.$active?"#000":"#bbb"};
  font-weight: ${i=>i.$active?700:600};

  @media (max-width: 768px) {
    line-height: 1.6;
  }
`,tt=r.div`
  position: relative;
  grid-column: 2;
  grid-row: 1;
`;r(d.div)`
  position: absolute;
  inset: 0;
  margin: -20px;
  border-radius: 14px;
  z-index: 0;
  background: ${i=>i.$accentColor};
`;const it=r(d.div)`
  position: relative;
  z-index: 1;
`,rt=r(F)`
  width: 100%;
`,at=r(d.div)`
  grid-column: 2;
  grid-row: 2;
`,nt=r.h3`
  margin: 0 0 0.35rem;
  font-size: 1.1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #555;
`,ot=r(_)`
  gap: 0.45rem;
`,st=r(_)`
  gap: 0.6rem;
`,dt=r.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  align-items: start;
  width: 100%;
  max-width: 64rem;
  margin: 0 auto;
  padding: 3rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 2.5rem 1.25rem;
  }
`,lt=r(d.div)`
  border-radius: 12px;
  overflow: hidden;
`,ct=r(d.div)`
  margin-top: 0;
  border-radius: 12px;
  overflow: hidden;

  @media (max-width: 768px) {
    margin-top: 0;
  }
`,me=r(F)`
  width: 100%;
`,mt=r.p`
  margin: 2rem auto 0;
  max-width: 600px;
  text-align: center;
  font-size: 0.95rem;
  color: #888;
`,pt=r.div`
  margin: 0 auto;
  max-width: 45rem;
`,gt=r(d.div)``,ht=r(D)`
  font-size: clamp(1rem, 1.15vw, 1.15rem);
  line-height: 1.65;
  max-width: 62ch;
  text-wrap: pretty;
`,ut=r.div`
  margin: 0 auto;
  max-width: 800px;
  padding: 5rem 6%;
`,xt=r(d.div)`
  border-left: 3px solid ${i=>i.$accentColor||"#333"};
  padding-left: 2rem;
  margin-left: 0;

  ${i=>i.$accentColor?`
    background: ${i.$accentColor}12;
    padding: 3rem 2.5rem;
    border-radius: 0 12px 12px 0;
  `:""}
`,ft=r.p`
  margin: 0;
  text-align: left;
  font-size: clamp(1.2rem, 2.1vw, 1.55rem);
  font-style: italic;
  line-height: 1.5;
  color: #1a1a1a;
  text-wrap: balance;
`,wt=r.cite`
  display: block;
  margin-top: 1.5rem;
  font-size: 0.85rem;
  font-style: normal;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #999;
`,vt=r.section`
  display: flex;
  flex-direction: column;
  gap: 0;
  padding: 0 0 4rem;
`,bt=r.div`
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  padding: 0;
  background: white;
`,yt=r.div`
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
`,jt=r.div`
  position: relative;
  min-height: 0;
  height: clamp(340px, 46vw, 680px);

  @media (max-width: 768px) {
    height: clamp(260px, 58vw, 460px);
  }
`,$t=r(F)`
  height: 100%;
`,It=r.div`
  margin-top: 1rem;
  padding: 0 1.25rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.25rem;
`,Ct=r.span`
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #888;
  padding: 0.25rem 0;
`,Rt=r.span`
  color: #9a9a9a;
  margin: 0 0.25rem;
`,kt=r.div`
  margin-top: 1rem;
  padding: 0 0 1.25rem;
`,Pt=r.div`
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
`,K=r(d.div)`
  margin-bottom: 3rem;

  &:last-child {
    margin-bottom: 0;
  }
`,St=r.p`
  margin: 0;
  border-left: 3px solid currentColor;
  padding-left: 1.5rem;
  text-align: left;
  font-size: 1.5rem;
  font-style: italic;
  line-height: 1.5;
  color: #222;
`,zt=r.section`
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
`,Bt=r(d.div)`
  position: relative;
  width: 100%;
  height: min(92vh, 920px);

  @media (max-width: 768px) {
    height: min(78vh, 620px);
  }
`,Ft=r(F)`
  height: 100%;
  border-radius: 0;
`,Vt=r.div`
  position: relative;
  z-index: 2;
  padding: 2.5rem 6% 3.5rem;
  background: white;

  @media (max-width: 768px) {
    padding: 2rem 1.25rem;
  }
`,Et=r(d.h2)`
  color: #111;
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  line-height: 1.15;
  max-width: 700px;
  margin: 0 0 1rem;
`,Tt=r(d.p)`
  margin: 0;
  color: #222;
  font-size: 1.05rem;
  line-height: 1.7;
  max-width: 540px;
`,Mt=r.section`
  position: relative;
  padding: 3.5rem 6%;
`,Lt=r.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 64rem;
`;r(d.div)`
  position: absolute;
  top: 15%;
  bottom: 5%;
  left: 8%;
  right: -2%;
  z-index: 0;
  border-radius: 16px;
  background: ${i=>i.$accentColor};

  @media (max-width: 768px) {
    top: 10%;
    bottom: 8%;
    left: 4%;
    right: -1%;
  }
`;const At=r(d.div)`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  border-radius: 12px;
  border: ${i=>i.$containerBorder||"none"};
  box-shadow: ${i=>i.$containerShadow||"0 24px 60px rgba(0, 0, 0, 0.15), 0 8px 20px rgba(0, 0, 0, 0.08)"};

  @media (max-width: 768px) {
    max-width: 100%;
  }
`,Ht=r(F)`
  width: 100%;
`,Ot=r.div`
  position: relative;
  z-index: 1;
  max-width: 600px;
  margin: 2.5rem auto 0;
  text-align: left;
`;r.section`
  border-top: 1px solid #e5e7eb;
  background: white;
  padding: 4rem 1.5rem 6rem;

  @media (min-width: 768px) {
    padding: 6rem 1.5rem;
  }
`;r.div`
  margin: 0 auto;
  max-width: 64rem;
`;r.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 2rem;
`;r.p`
  margin: 0;
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  color: #9ca3af;
  text-transform: uppercase;
`;r.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;r.button`
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
`;const Wt=r(d.button)`
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
`;r.p`
  font-size: 0.875rem;
  letter-spacing: 0.1em;
  color: #a3a3a3;
  text-transform: uppercase;
  margin: 0;
`;r.h3`
  margin-top: 0.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;

  @media (min-width: 768px) {
    margin-top: 0;
    font-size: 1.875rem;
  }
`;r.div`
  font-size: 1.5rem;
  color: #a3a3a3;
  transition: color 200ms;

  ${Wt}:hover & {
    color: #111827;
  }
`;const B={duration:.7,ease:[.25,.1,.25,1]},S={duration:.9,ease:[.25,.1,.25,1]},f={once:!0,amount:.2};function Gt({tags:i}){const o=c.useRef(null),w=pe(o,{once:!0,margin:"100px"});return e.jsx("div",{ref:o,children:w&&e.jsx(It,{children:i.map((j,h)=>e.jsx(d.div,{initial:{opacity:0,y:8},animate:{opacity:1,y:0},transition:{duration:.35,delay:h*.04},children:e.jsxs(Ct,{children:[j,h<i.length-1&&e.jsx(Rt,{children:"•"})]})},`${j}-${h}`))})})}function Nt({images:i}){const o=c.useRef(null),w=pe(o,{once:!0,margin:"100px"});return e.jsx("div",{ref:o,children:w&&e.jsx(kt,{children:e.jsx(d.div,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{duration:.45},children:e.jsx(ie,{images:i,autoPlay:!0,intervalMs:2800})})})})}const te=new Set(["full-width-image","parallax-reveal","image-pair","staggered-pair"]),Dt=new Set(["sticky-split","parallax-reveal"]),Yt=c.memo(function({caseStudy:o,nextProject:w,onNextProject:j,topAction:h}){const[v,R]=c.useState(!1),[k,V]=c.useState("idle"),u=o.heroImage||o.coverImage,p=t=>t?t.split(`

`).filter(a=>a.trim()):[],T=t=>{if(!t)return null;const a=t.trim(),n=/^#([0-9a-fA-F]{3})$/,s=/^#([0-9a-fA-F]{6})$/;if(n.test(a)){const[,m]=a.match(n),g=parseInt(m[0]+m[0],16),P=parseInt(m[1]+m[1],16),y=parseInt(m[2]+m[2],16);return`rgba(${g}, ${P}, ${y}, 0.06)`}if(s.test(a)){const[,m]=a.match(s),g=parseInt(m.slice(0,2),16),P=parseInt(m.slice(2,4),16),y=parseInt(m.slice(4,6),16);return`rgba(${g}, ${P}, ${y}, 0.06)`}return null},M=(t,a)=>{const n=T(t.accentColor);return n||(a?"white":"#f5f5f5")},A=()=>e.jsxs(Oe,{children:[e.jsxs(Y,{children:[e.jsx(q,{children:"Client"}),e.jsx(X,{children:o.meta.client})]}),e.jsxs(Y,{children:[e.jsx(q,{children:"Role"}),e.jsx(X,{children:o.meta.role})]}),e.jsxs(Y,{children:[e.jsx(q,{children:"Timeline"}),e.jsx(X,{children:o.meta.timeline})]}),e.jsxs(Y,{children:[e.jsx(q,{children:"Platform"}),e.jsx(X,{children:o.meta.platform})]})]}),O=t=>e.jsx("div",{children:e.jsxs(oe,{children:[e.jsxs(se,{initial:{opacity:0,x:-30},whileInView:{opacity:1,x:0},viewport:f,transition:B,children:[t.heading&&e.jsx(L,{children:t.heading}),e.jsx(_,{children:p(t.body).map((a,n)=>e.jsx(D,{children:a},n))})]}),t.images&&t.images[0]&&e.jsx(de,{initial:{opacity:0,x:30},whileInView:{opacity:1,x:0},viewport:f,transition:S,children:e.jsx(ee,{src:t.images[0].src,alt:t.images[0].alt,avif:t.images[0].avif,webp:t.images[0].webp,aspectRatio:t.images[0].aspectRatio||"3/2",borderRadius:"8px",objectFit:"cover"})})]})},t.id),W=t=>e.jsx("div",{children:e.jsxs(oe,{children:[t.images&&t.images[0]&&e.jsx(de,{style:{order:2},initial:{opacity:0,x:-30},whileInView:{opacity:1,x:0},viewport:f,transition:S,children:e.jsx(ee,{src:t.images[0].src,alt:t.images[0].alt,avif:t.images[0].avif,webp:t.images[0].webp,aspectRatio:t.images[0].aspectRatio||"3/2",borderRadius:"8px",objectFit:"cover"})}),e.jsxs(se,{style:{order:1},initial:{opacity:0,x:30},whileInView:{opacity:1,x:0},viewport:f,transition:B,children:[t.heading&&e.jsx(L,{children:t.heading}),e.jsx(_,{children:p(t.body).map((a,n)=>e.jsx(D,{children:a},n))})]})]})},t.id),b=t=>e.jsxs("div",{children:[e.jsx(_e,{initial:{opacity:0,scale:.97},whileInView:{opacity:1,scale:1},viewport:f,transition:S,children:t.images&&t.images[0]&&e.jsx(ee,{src:t.images[0].src,alt:t.images[0].alt,avif:t.images[0].avif,webp:t.images[0].webp,aspectRatio:t.images[0].aspectRatio||"16/9",borderRadius:"8px",objectFit:"cover",style:{width:"100%"}})}),(t.caption||t.body)&&e.jsx(Ue,{children:t.caption||t.body})]},t.id),G=t=>e.jsxs("div",{children:[t.heading&&e.jsx(L,{children:t.heading}),e.jsx(Qe,{children:t.images&&t.images.slice(0,2).map((a,n)=>e.jsx(le,{initial:{opacity:0,scale:.97},whileInView:{opacity:1,scale:1},viewport:f,transition:{...S,delay:n*.15},children:e.jsx(ce,{src:a.src,alt:a.alt,avif:a.avif,webp:a.webp,aspectRatio:a.aspectRatio||"3/2",borderRadius:"0",objectFit:"contain",style:{height:"26rem"}})},n))})]},t.id),H=t=>e.jsxs("div",{children:[t.heading&&e.jsx(L,{children:t.heading}),e.jsx(Ye,{children:t.images&&t.images.map((a,n)=>e.jsx(le,{initial:{opacity:0,scale:.95},whileInView:{opacity:1,scale:1},viewport:f,whileHover:{scale:1.02},transition:{...S,delay:n*.1},children:e.jsx(ce,{src:a.src,alt:a.alt,avif:a.avif,webp:a.webp,aspectRatio:a.aspectRatio||"1/1",borderRadius:"8px",objectFit:"cover"})},n))})]},t.id),N=t=>{const a=t.images||[];return e.jsxs("div",{children:[t.heading&&e.jsx(L,{children:t.heading}),e.jsx(qe,{$count:a.length,children:a.map((n,s)=>e.jsx(Xe,{$index:s,$count:a.length,initial:{opacity:0,y:20,scale:.97},whileInView:{opacity:1,y:0,scale:1},viewport:{once:!0,amount:.2},transition:{...B,delay:s*.08},children:e.jsx(Ke,{src:n.src,alt:n.alt,avif:n.avif,webp:n.webp,aspectRatio:n.aspectRatio||"4/3",borderRadius:"10px",objectFit:"cover"})},`${n.src}-${s}`))})]},t.id)},$=t=>{const a=t.images?.[0],n=t.labels||[];return e.jsxs(Je,{children:[e.jsx(Ze,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},viewport:{once:!0,amount:.2},transition:B,children:n.map((s,m)=>e.jsx(et,{$active:m===0,children:s},`${s}-${m}`))}),e.jsx(tt,{children:a&&e.jsx(it,{initial:{opacity:0,y:24},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.2},transition:S,children:e.jsx(rt,{src:a.src,alt:a.alt,avif:a.avif,webp:a.webp,aspectRatio:a.aspectRatio||"4/5",borderRadius:"12px",objectFit:a.objectFit||"cover",objectPosition:a.objectPosition,backgroundColor:a.backgroundColor,imagePaddingBlock:a.imagePaddingBlock})})}),e.jsxs(at,{initial:{opacity:0,x:20},whileInView:{opacity:1,x:0},viewport:{once:!0,amount:.2},transition:B,children:[t.heading&&e.jsx(nt,{children:t.heading}),e.jsx(ot,{children:p(t.body).map((s,m)=>e.jsx(D,{children:s},m))})]})]},t.id)},I=t=>{const a=t.images||[];if(a.length<=1)return b(t);const n=a[0],s=a[1];return e.jsxs("div",{children:[e.jsxs(dt,{children:[e.jsx(lt,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.2},transition:S,children:e.jsx(me,{src:n.src,alt:n.alt,avif:n.avif,webp:n.webp,aspectRatio:n.aspectRatio,borderRadius:"12px",backgroundColor:n.backgroundColor,imagePaddingBlock:n.imagePaddingBlock,objectFit:n.objectFit||"cover",objectPosition:n.objectPosition})}),e.jsx(ct,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.2},transition:{...S,delay:.15},children:e.jsx(me,{src:s.src,alt:s.alt,avif:s.avif,webp:s.webp,aspectRatio:s.aspectRatio,borderRadius:"12px",backgroundColor:s.backgroundColor,imagePaddingBlock:s.imagePaddingBlock,objectFit:s.objectFit||"cover",objectPosition:s.objectPosition||"top center"})})]}),t.body&&e.jsx(mt,{children:t.body})]},t.id)},l=t=>e.jsx("div",{children:e.jsx(pt,{children:e.jsxs(gt,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:f,transition:B,children:[t.heading&&e.jsx(L,{style:{textAlign:"left"},children:t.heading}),e.jsx(_,{style:{alignItems:"flex-start"},children:p(t.body).map((a,n)=>e.jsx(ht,{style:{textAlign:"left"},children:a},n))})]})})},t.id),x=t=>e.jsx("div",{children:e.jsx(ut,{children:e.jsxs(xt,{$accentColor:t.accentColor,initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:f,transition:B,children:[e.jsx(ft,{children:t.body}),t.heading&&e.jsx(wt,{children:t.heading})]})})},t.id),E=t=>e.jsxs("div",{children:[t.heading&&e.jsx(L,{children:t.heading}),t.images&&t.images.length>0&&e.jsx(d.div,{initial:{opacity:0,scale:.97},whileInView:{opacity:1,scale:1},viewport:f,transition:S,children:e.jsx(ie,{images:t.images})})]},t.id),C=t=>{const a=t.stickyContent?.image||t.images?.[0],n=t.stickyContent?.tags||[],s=t.stickyContent?.collateralImages||[],m=t.scrollContent?.blocks||[];return e.jsxs(vt,{children:[e.jsx(Pt,{children:m.map((g,P)=>{if(g.type==="text")return e.jsxs(K,{initial:{opacity:0,x:20},whileInView:{opacity:1,x:0},viewport:f,transition:B,children:[g.heading&&e.jsx(L,{children:g.heading}),e.jsx(st,{children:p(g.body).map((y,U)=>e.jsx(D,{children:y},U))})]},`${t.id}-text-${P}`);if(g.type==="image"){const y=g.images?.[0];return y?e.jsx(K,{initial:{opacity:0,scale:.97},whileInView:{opacity:1,scale:1},viewport:f,transition:S,children:e.jsx(F,{src:y.src,alt:y.alt,avif:y.avif,webp:y.webp,aspectRatio:y.aspectRatio||"3/2",borderRadius:"8px",objectFit:"cover"})},`${t.id}-image-${P}`):null}return g.type==="carousel"?e.jsx(K,{initial:{opacity:0,scale:.97},whileInView:{opacity:1,scale:1},viewport:f,transition:S,children:g.images&&g.images.length>0&&e.jsx(ie,{images:g.images,showControls:!1,showDots:!1})},`${t.id}-carousel-${P}`):g.type==="quote"?e.jsx(K,{initial:{opacity:0,x:30},whileInView:{opacity:1,x:0},viewport:f,transition:B,children:e.jsx(St,{children:g.body})},`${t.id}-quote-${P}`):null})}),e.jsx(bt,{children:e.jsxs(yt,{children:[a&&e.jsx(jt,{children:e.jsx($t,{src:a.src,alt:a.alt,avif:a.avif,webp:a.webp,aspectRatio:a.aspectRatio||"16/9",borderRadius:"12px",backgroundColor:a.backgroundColor,imagePaddingBlock:a.imagePaddingBlock,objectFit:a.objectFit||"cover",objectPosition:a.objectPosition||"center"})}),n.length>0&&e.jsx(Gt,{tags:n}),s.length>0&&e.jsx(Nt,{images:s})]})})]},t.id)},z=t=>{const a=t.images?.[0];return a?e.jsxs(zt,{children:[e.jsx(Bt,{children:e.jsx(Ft,{src:a.src,alt:a.alt,avif:a.avif,webp:a.webp,parallaxSpeed:t.parallaxSpeed??.4,objectFit:"cover"})}),e.jsxs(Vt,{children:[t.heading&&e.jsx(Et,{initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:f,transition:B,children:t.heading}),t.body&&e.jsx(Tt,{initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:f,transition:{...B,delay:.15},children:t.body})]})]},t.id):null},J=t=>{const a=t.images?.[0];return a?e.jsx(Mt,{children:e.jsxs(Lt,{children:[e.jsx(At,{$containerBorder:a.containerBorder,$containerShadow:a.containerShadow,initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:f,transition:S,children:e.jsx(Ht,{src:a.src,alt:a.alt,avif:a.avif,webp:a.webp,aspectRatio:a.aspectRatio,borderRadius:a.borderRadius||"12px",containerBorderRadius:a.containerBorderRadius,objectFit:a.objectFit||"cover",objectPosition:a.objectPosition,imageScale:a.imageScale,backgroundColor:a.backgroundColor,imagePaddingBlock:a.imagePaddingBlock})}),(t.heading||t.body)&&e.jsxs(Ot,{children:[t.heading&&e.jsx(L,{children:t.heading}),t.body&&e.jsx(_,{style:{alignItems:"flex-start"},children:p(t.body).map((n,s)=>e.jsx(D,{style:{textAlign:"left"},children:n},s))})]})]})},t.id):null},Q=t=>{switch(t.layout){case"text-left-image-right":return O(t);case"text-right-image-left":return W(t);case"full-width-image":return b(t);case"image-pair":return G(t);case"gallery-grid":return H(t);case"asymmetric-mosaic":return N(t);case"three-column-feature":return $(t);case"staggered-pair":return I(t);case"text-only":return l(t);case"quote":return x(t);case"image-carousel":return E(t);case"parallax-reveal":return z(t);case"image-on-color-block":return J(t);case"sticky-split":return C(t);default:return null}};return e.jsxs(Fe,{children:[e.jsxs(Ve,{children:[e.jsxs(Ee,{children:[h&&e.jsx(Te,{children:h}),e.jsx(A,{}),e.jsx(We,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.2,ease:[.25,.1,.25,1]},children:o.heroHeadline})]}),e.jsx(Me,{children:e.jsxs(He,{$backgroundColor:u.backgroundColor,children:[e.jsx(Le,{src:u.src,alt:u.alt,avif:u.avif,webp:u.webp,aspectRatio:u.aspectRatio||"16/9",borderRadius:"8px",objectFit:u.objectFit||"cover",objectPosition:u.objectPosition||"center",imageScale:1,onLoad:()=>R(!0)}),!v&&e.jsx(Ae,{initial:{opacity:1},animate:{opacity:0},transition:{duration:.4,delay:.3},"aria-hidden":"true"})]})})]}),e.jsx(Ge,{children:o.sections.map((t,a)=>{const n=o.sections[a-1],s=o.sections[a+1],m=Dt.has(t.layout),g=te.has(t.layout),P=n?te.has(n.layout):!1,y=s?te.has(s.layout):!1,U=g&&(P||y);return m?e.jsx("div",{children:Q(t)},t.id):e.jsx(d.div,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0,margin:"200px"},transition:{duration:.6,ease:"easeOut"},children:e.jsx(Ne,{$background:M(t,a%2===0),$compact:U,children:e.jsx(De,{children:Q(t)})})},t.id)})})]})});export{Yt as C};
