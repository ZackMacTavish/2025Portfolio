import{j as e}from"./three-CIqbc5c4.js";import{b as m,c as r,R as he}from"./vendor-hQudadcW.js";import{L as xe,M as fe,N as we,O as ve,Q as be,A as d}from"./index-Bw9meLqy.js";function ye(i){const o=xe(()=>fe(i)),{isStatic:w}=m.useContext(we);if(w){const[,y]=m.useState(i);m.useEffect(()=>o.on("change",y),[])}return o}const je={some:0,all:1};function $e(i,o,{root:w,margin:y,amount:u="some"}={}){const v=ve(i),C=new WeakMap,k=h=>{h.forEach(p=>{const M=C.get(p.target);if(p.isIntersecting!==!!M)if(p.isIntersecting){const L=o(p.target,p);typeof L=="function"?C.set(p.target,L):V.unobserve(p.target)}else typeof M=="function"&&(M(p),C.delete(p.target))})},V=new IntersectionObserver(k,{root:w,rootMargin:y,threshold:typeof u=="number"?u:je[u]});return v.forEach(h=>V.observe(h)),()=>V.disconnect()}function pe(i,{root:o,margin:w,amount:y,once:u=!1,initial:v=!1}={}){const[C,k]=m.useState(v);return m.useEffect(()=>{if(!i.current||u&&C)return;const V=()=>(k(!0),u?void 0:()=>k(!1)),h={root:o&&o.current||void 0,margin:w,amount:y};return $e(i.current,V,h)},[o,i,w,u,y]),C}function Z(i){if(!i)return i;try{return encodeURI(decodeURI(i))}catch{return encodeURI(i)}}const Ie=r(d.div)`
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: ${i=>i.$borderRadius};
  background: ${i=>i.$backgroundColor||"transparent"};

  ${i=>i.$aspectRatio?`
    aspect-ratio: ${i.$aspectRatio};
  `:""}
`,Ce=r.picture`
  display: block;
  width: 100%;
  height: ${i=>i.$fillContainer?"100%":"auto"};
  overflow: hidden;
  border-radius: ${i=>i.$borderRadius};
`,ke=r.div`
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
`;function F({src:i,alt:o,avif:w,webp:y,aspectRatio:u,parallaxSpeed:v=0,className:C,borderRadius:k="12px",containerBorderRadius:V,backgroundColor:h,imagePaddingBlock:p,objectFit:M="cover",objectPosition:L="center",imageScale:H=1,disableRevealAnimation:W=!1,loading:G="lazy",decoding:b="async",onLoad:N}){const O=m.useRef(null),D=be(),[j,$]=m.useState(window.innerWidth<768),l=ye(0);m.useEffect(()=>{const a=()=>{$(window.innerWidth<768)};return window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)},[]);const x=Math.max(0,v)*60,E=v>0&&!D&&!j,I=!!u,B=V??k,J=Z(i),U=Z(w),t=Z(y);return m.useEffect(()=>{if(!E){l.set(0);return}const a=()=>{const n=O.current;if(!n)return;const s=n.getBoundingClientRect(),c=window.innerHeight,T=c+s.height,g=T>0?(c-s.top)/T:.5,R=Math.min(1,Math.max(0,g)),P=-x+R*x*2;l.set(P)};return a(),window.addEventListener("scroll",a,{passive:!0}),window.addEventListener("resize",a),()=>{window.removeEventListener("scroll",a),window.removeEventListener("resize",a)}},[x,l,E]),e.jsx(Ie,{ref:O,className:C,$aspectRatio:u,$borderRadius:B,$backgroundColor:h,...W?{}:{initial:{opacity:0,y:24},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.2},transition:{duration:.9,ease:[.25,.1,.25,1]}},children:e.jsx(ke,{$imagePaddingBlock:p,$fillContainer:I,$borderRadius:k,children:e.jsxs(Ce,{$fillContainer:I,$borderRadius:k,children:[U&&e.jsx("source",{srcSet:U,type:"image/avif"}),t&&e.jsx("source",{srcSet:t,type:"image/webp"}),e.jsx(Re,{src:J,alt:o,loading:G,decoding:b,onLoad:N,style:{y:E?l:0,scale:H},$objectFit:M,$objectPosition:L,$hasParallax:E,$fillContainer:I,$borderRadius:k})]})})})}const Pe=r.div`
  width: 100%;
`,ge=he.forwardRef((i,o)=>e.jsx(d.div,{ref:o,style:{position:"relative",width:"100%",borderRadius:"12px",overflow:"hidden",aspectRatio:"3 / 2",background:"#f0efeb",...i.style||{}},...i}));ge.displayName="Frame";const Se=r.div`
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
`,Be=r.button`
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
`,Fe=r.button`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  padding: 0;
  background: ${i=>i.$active?"#333":"#ccc"};
  transform: ${i=>i.$active?"scale(1.3)":"scale(1)"};
  transition: all 0.3s;
`;function ie({images:i,autoPlay:o=!1,intervalMs:w=4e3,showControls:y=!0,showDots:u=!0}){m.useEffect(()=>{if(!G.current)return;let l=!1;try{G.current.focus({preventScroll:!0}),l=!0}catch{}},[]);const[v,C]=m.useState(0),[k,V]=m.useState(0),[h,p]=m.useState(!0),[M,L]=m.useState(!1),[H,W]=m.useState(!1),G=m.useRef(null),b=i.length,N=l=>{if(!b)return;const x=(l+b)%b;V(v),p(!1),C(x)},O=()=>N(v+1),D=()=>N(v-1);if(m.useEffect(()=>{if(!o||H||b<2)return;const l=setInterval(()=>{C(x=>(x+1)%b)},w);return()=>clearInterval(l)},[o,w,H,b]),m.useEffect(()=>{if(b<2)return;const l=E=>new Promise(I=>{const B=new Image;B.onload=async()=>{if(typeof B.decode=="function")try{await B.decode()}catch{}I()},B.onerror=()=>I(),B.src=E});(async()=>{const E=i.flatMap(I=>[I.avif,I.webp,I.src].filter(B=>!!B));await Promise.all(E.map(I=>l(I)))})()},[i,b]),!b)return null;const j=i[v],$=i[k];return e.jsxs(Pe,{children:[e.jsxs(ge,{ref:G,tabIndex:0,"data-carousel-frame":"true",onMouseEnter:()=>L(!0),onMouseLeave:()=>L(!1),onKeyDown:l=>{l.key==="ArrowRight"&&(l.preventDefault(),W(!0),O()),l.key==="ArrowLeft"&&(l.preventDefault(),W(!0),D())},drag:"x",dragConstraints:{left:0,right:0},onDragEnd:(l,x)=>{x.offset.x>80?D():x.offset.x<-80&&O()},children:[!h&&e.jsx(ae,{style:{zIndex:1},children:e.jsx(ne,{src:$.src,alt:$.alt,avif:$.avif,webp:$.webp,aspectRatio:$.aspectRatio||"3/2",borderRadius:"0",backgroundColor:$.backgroundColor,imagePaddingBlock:$.imagePaddingBlock,objectFit:$.objectFit||"cover",objectPosition:$.objectPosition||"center",disableRevealAnimation:!0,loading:"eager",decoding:"auto"},`prev-${$.src}-${k}`)}),e.jsx(ae,{style:{zIndex:2},children:e.jsx(ne,{src:j.src,alt:j.alt,avif:j.avif,webp:j.webp,aspectRatio:j.aspectRatio||"3/2",borderRadius:"0",backgroundColor:j.backgroundColor,imagePaddingBlock:j.imagePaddingBlock,objectFit:j.objectFit||"cover",objectPosition:j.objectPosition||"center",disableRevealAnimation:!0,loading:"eager",decoding:"auto",onLoad:()=>p(!0),style:{position:h?"relative":"absolute"}},`active-${j.src}-${v}`)}),b>1&&y&&e.jsxs(Se,{$visible:M,children:[e.jsx(re,{type:"button",$side:"left","aria-label":"Previous image",onClick:D,children:"‹"}),o&&e.jsx(Be,{type:"button","aria-label":H?"Resume slideshow":"Pause slideshow",onClick:()=>W(l=>!l),children:H?"▶":"❚❚"}),e.jsx(re,{type:"button",$side:"right","aria-label":"Next image",onClick:O,children:"›"})]})]}),b>1&&u&&e.jsx(ze,{children:i.map((l,x)=>e.jsx(Fe,{type:"button",$active:x===v,"aria-label":`Go to slide ${x+1}`,"aria-current":x===v,onClick:()=>N(x)},`${l.src}-${x}`))})]})}const Ve=r.div`
  min-height: 100vh;
  background: white;
`,Ee=r.section`
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
`,Te=r.div`
  position: relative;
  z-index: 2;
  margin: 0 auto;
  max-width: 64rem;
`,Me=r.div`
  margin-bottom: 1.25rem;
`,Le=r.div`
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
`,Ae=r(F)`
  width: 100%;

  img {
    filter: saturate(0.96);
  }
`,He=r(d.div)`
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
`,Oe=r.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: ${({$backgroundColor:i})=>i||"transparent"};
  padding-block: ${({$backgroundColor:i})=>i?"clamp(1rem, 2vw, 1.5rem)":"0"};
  border-radius: ${({$backgroundColor:i})=>i?"24px":"0"};
  overflow: hidden;
`,We=r.div`
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
`,Ge=r(d.h1)`
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
`,Ne=r.div``,De=r.section`
  background: ${i=>i.$background};
  padding: ${i=>i.$compact?"0":"3.75rem 0"};
`,_e=r.div`
  margin: 0 auto;
  max-width: 64rem;
`,A=r.h2`
  font-size: 1.875rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1.5rem;
`,Q=r.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,_=r.p`
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
`,Qe=r(d.div)`
  overflow: hidden;
  border-radius: 0;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
`,Ue=r.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;

  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
`,Ye=r.p`
  margin-top: 0.75rem;
  font-size: 0.875rem;
  font-style: italic;
  color: #8b8b8b;
`,qe=r.div`
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
`,Xe=r.div`
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
`,Ke=r(d.div)`
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
`,Je=r(F)`
  width: 100%;

  img {
    transition: transform 0.5s ease-out;
  }
`,Ze=r.section`
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
`,et=r(d.div)`
  display: flex;
  flex-direction: column;
  grid-column: 1;
  grid-row: 1 / span 2;

  @media (max-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
  }
`,tt=r.span`
  font-size: 0.85rem;
  line-height: 2.4;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${i=>i.$active?"#000":"#bbb"};
  font-weight: ${i=>i.$active?700:600};

  @media (max-width: 768px) {
    line-height: 1.6;
  }
`,it=r.div`
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
`;const rt=r(d.div)`
  position: relative;
  z-index: 1;
`,at=r(F)`
  width: 100%;
`,nt=r(d.div)`
  grid-column: 2;
  grid-row: 2;
`,ot=r.h3`
  margin: 0 0 0.35rem;
  font-size: 1.1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #555;
`,st=r(Q)`
  gap: 0.45rem;
`,dt=r(Q)`
  gap: 0.6rem;
`,lt=r.section`
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
`,ct=r(d.div)`
  border-radius: 12px;
  overflow: hidden;
`,mt=r(d.div)`
  margin-top: 0;
  border-radius: 12px;
  overflow: hidden;

  @media (max-width: 768px) {
    margin-top: 0;
  }
`,me=r(F)`
  width: 100%;
`,pt=r.p`
  margin: 2rem auto 0;
  max-width: 600px;
  text-align: center;
  font-size: 0.95rem;
  color: #888;
`,gt=r.div`
  margin: 0 auto;
  max-width: 45rem;
`,ut=r(d.div)``,ht=r(_)`
  font-size: clamp(1rem, 1.15vw, 1.15rem);
  line-height: 1.65;
  max-width: 62ch;
  text-wrap: pretty;
`,xt=r.div`
  margin: 0 auto;
  max-width: 800px;
  padding: 5rem 6%;
`,ft=r(d.div)`
  border-left: 3px solid ${i=>i.$accentColor||"#333"};
  padding-left: 2rem;
  margin-left: 0;

  ${i=>i.$accentColor?`
    background: ${i.$accentColor}12;
    padding: 3rem 2.5rem;
    border-radius: 0 12px 12px 0;
  `:""}
`,wt=r.p`
  margin: 0;
  text-align: left;
  font-size: clamp(1.2rem, 2.1vw, 1.55rem);
  font-style: italic;
  line-height: 1.5;
  color: #1a1a1a;
  text-wrap: balance;
`,vt=r.cite`
  display: block;
  margin-top: 1.5rem;
  font-size: 0.85rem;
  font-style: normal;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #999;
`,bt=r.section`
  display: flex;
  flex-direction: column;
  gap: 0;
  padding: 0 0 4rem;
`,yt=r.div`
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  padding: 0;
  background: white;
`,jt=r.div`
  position: relative;
  width: min(65vw, 1080px);
  margin: 0 auto;
  padding-top: ${i=>i.$fullBleed?"0":"1.5rem"};

  @media (max-width: 1024px) {
    width: min(72vw, 980px);
  }

  @media (max-width: 768px) {
    width: calc(100vw - 2.5rem);
    padding-top: ${i=>i.$fullBleed?"0":"1rem"};
  }
`,$t=r.div`
  position: relative;
  min-height: 0;
  height: clamp(340px, 46vw, 680px);

  ${i=>i.$fullBleed?`
    width: 100vw;
    margin-left: calc(-50vw + 50%);
  `:""}

  @media (max-width: 768px) {
    height: clamp(260px, 58vw, 460px);
  }
`,It=r(F)`
  height: 100%;
`,Ct=r.div`
  margin-top: 1rem;
  padding: 0 1.25rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.25rem;
`,kt=r.span`
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #888;
  padding: 0.25rem 0;
`,Rt=r.span`
  color: #9a9a9a;
  margin: 0 0.25rem;
`,Pt=r.div`
  margin-top: 1rem;
  padding: 0 0 1.25rem;
`,St=r.div`
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
`,Bt=r.p`
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
`,Ft=r(d.div)`
  position: relative;
  width: 100%;
  height: min(92vh, 920px);

  @media (max-width: 768px) {
    height: min(78vh, 620px);
  }
`,Vt=r(F)`
  height: 100%;
  border-radius: 0;
`,Et=r.div`
  position: relative;
  z-index: 2;
  padding: 2.5rem 6% 3.5rem;
  background: white;

  @media (max-width: 768px) {
    padding: 2rem 1.25rem;
  }
`,Tt=r(d.h2)`
  color: #111;
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  line-height: 1.15;
  max-width: 700px;
  margin: 0 0 1rem;
`,Mt=r(d.p)`
  margin: 0;
  color: #222;
  font-size: 1.05rem;
  line-height: 1.7;
  max-width: 540px;
`,Lt=r.section`
  position: relative;
  padding: 3.5rem 6%;
`,At=r.div`
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
`;const Ht=r(d.div)`
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
`,Ot=r(F)`
  width: 100%;
`,Wt=r.div`
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
`;const Gt=r(d.button)`
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

  ${Gt}:hover & {
    color: #111827;
  }
`;const z={duration:.7,ease:[.25,.1,.25,1]},S={duration:.9,ease:[.25,.1,.25,1]},f={once:!0,amount:.2};function Nt({tags:i}){const o=m.useRef(null),w=pe(o,{once:!0,margin:"100px"});return e.jsx("div",{ref:o,children:w&&e.jsx(Ct,{children:i.map((y,u)=>e.jsx(d.div,{initial:{opacity:0,y:8},animate:{opacity:1,y:0},transition:{duration:.35,delay:u*.04},children:e.jsxs(kt,{children:[y,u<i.length-1&&e.jsx(Rt,{children:"•"})]})},`${y}-${u}`))})})}function Dt({images:i}){const o=m.useRef(null),w=pe(o,{once:!0,margin:"100px"});return e.jsx("div",{ref:o,children:w&&e.jsx(Pt,{children:e.jsx(d.div,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{duration:.45},children:e.jsx(ie,{images:i,autoPlay:!0,intervalMs:2800})})})})}const te=new Set(["full-width-image","parallax-reveal","image-pair","staggered-pair"]),_t=new Set(["sticky-split","parallax-reveal"]),qt=m.memo(function({caseStudy:o,nextProject:w,onNextProject:y,topAction:u}){const[v,C]=m.useState(!1),[k,V]=m.useState("idle"),h=o.heroImage||o.coverImage,p=t=>t?t.split(`

`).filter(a=>a.trim()):[],M=t=>{if(!t)return null;const a=t.trim(),n=/^#([0-9a-fA-F]{3})$/,s=/^#([0-9a-fA-F]{6})$/;if(n.test(a)){const[,c]=a.match(n),T=parseInt(c[0]+c[0],16),g=parseInt(c[1]+c[1],16),R=parseInt(c[2]+c[2],16);return`rgba(${T}, ${g}, ${R}, 0.06)`}if(s.test(a)){const[,c]=a.match(s),T=parseInt(c.slice(0,2),16),g=parseInt(c.slice(2,4),16),R=parseInt(c.slice(4,6),16);return`rgba(${T}, ${g}, ${R}, 0.06)`}return null},L=(t,a)=>{const n=M(t.accentColor);return n||(a?"white":"#f5f5f5")},H=()=>e.jsxs(We,{children:[e.jsxs(Y,{children:[e.jsx(q,{children:"Client"}),e.jsx(X,{children:o.meta.client})]}),e.jsxs(Y,{children:[e.jsx(q,{children:"Role"}),e.jsx(X,{children:o.meta.role})]}),e.jsxs(Y,{children:[e.jsx(q,{children:"Timeline"}),e.jsx(X,{children:o.meta.timeline})]}),e.jsxs(Y,{children:[e.jsx(q,{children:"Platform"}),e.jsx(X,{children:o.meta.platform})]})]}),W=t=>e.jsx("div",{children:e.jsxs(oe,{children:[e.jsxs(se,{initial:{opacity:0,x:-30},whileInView:{opacity:1,x:0},viewport:f,transition:z,children:[t.heading&&e.jsx(A,{children:t.heading}),e.jsx(Q,{children:p(t.body).map((a,n)=>e.jsx(_,{children:a},n))})]}),t.images&&t.images[0]&&e.jsx(de,{initial:{opacity:0,x:30},whileInView:{opacity:1,x:0},viewport:f,transition:S,children:e.jsx(ee,{src:t.images[0].src,alt:t.images[0].alt,avif:t.images[0].avif,webp:t.images[0].webp,aspectRatio:t.images[0].aspectRatio||"3/2",borderRadius:"8px",objectFit:"cover"})})]})},t.id),G=t=>e.jsx("div",{children:e.jsxs(oe,{children:[t.images&&t.images[0]&&e.jsx(de,{style:{order:2},initial:{opacity:0,x:-30},whileInView:{opacity:1,x:0},viewport:f,transition:S,children:e.jsx(ee,{src:t.images[0].src,alt:t.images[0].alt,avif:t.images[0].avif,webp:t.images[0].webp,aspectRatio:t.images[0].aspectRatio||"3/2",borderRadius:"8px",objectFit:"cover"})}),e.jsxs(se,{style:{order:1},initial:{opacity:0,x:30},whileInView:{opacity:1,x:0},viewport:f,transition:z,children:[t.heading&&e.jsx(A,{children:t.heading}),e.jsx(Q,{children:p(t.body).map((a,n)=>e.jsx(_,{children:a},n))})]})]})},t.id),b=t=>e.jsxs("div",{children:[e.jsx(Qe,{initial:{opacity:0,scale:.97},whileInView:{opacity:1,scale:1},viewport:f,transition:S,children:t.images&&t.images[0]&&e.jsx(ee,{src:t.images[0].src,alt:t.images[0].alt,avif:t.images[0].avif,webp:t.images[0].webp,aspectRatio:t.images[0].aspectRatio||"16/9",borderRadius:"8px",objectFit:"cover",style:{width:"100%"}})}),(t.caption||t.body)&&e.jsx(Ye,{children:t.caption||t.body})]},t.id),N=t=>e.jsxs("div",{children:[t.heading&&e.jsx(A,{children:t.heading}),e.jsx(Ue,{children:t.images&&t.images.slice(0,2).map((a,n)=>e.jsx(le,{initial:{opacity:0,scale:.97},whileInView:{opacity:1,scale:1},viewport:f,transition:{...S,delay:n*.15},children:e.jsx(ce,{src:a.src,alt:a.alt,avif:a.avif,webp:a.webp,aspectRatio:a.aspectRatio||"3/2",borderRadius:"0",objectFit:"contain",style:{height:"26rem"}})},n))})]},t.id),O=t=>e.jsxs("div",{children:[t.heading&&e.jsx(A,{children:t.heading}),e.jsx(qe,{children:t.images&&t.images.map((a,n)=>e.jsx(le,{initial:{opacity:0,scale:.95},whileInView:{opacity:1,scale:1},viewport:f,whileHover:{scale:1.02},transition:{...S,delay:n*.1},children:e.jsx(ce,{src:a.src,alt:a.alt,avif:a.avif,webp:a.webp,aspectRatio:a.aspectRatio||"1/1",borderRadius:"8px",objectFit:"cover"})},n))})]},t.id),D=t=>{const a=t.images||[];return e.jsxs("div",{children:[t.heading&&e.jsx(A,{children:t.heading}),e.jsx(Xe,{$count:a.length,children:a.map((n,s)=>e.jsx(Ke,{$index:s,$count:a.length,initial:{opacity:0,y:20,scale:.97},whileInView:{opacity:1,y:0,scale:1},viewport:{once:!0,amount:.2},transition:{...z,delay:s*.08},children:e.jsx(Je,{src:n.src,alt:n.alt,avif:n.avif,webp:n.webp,aspectRatio:n.aspectRatio||"4/3",borderRadius:"10px",objectFit:"cover"})},`${n.src}-${s}`))})]},t.id)},j=t=>{const a=t.images?.[0],n=t.labels||[];return e.jsxs(Ze,{children:[e.jsx(et,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},viewport:{once:!0,amount:.2},transition:z,children:n.map((s,c)=>e.jsx(tt,{$active:c===0,children:s},`${s}-${c}`))}),e.jsx(it,{children:a&&e.jsx(rt,{initial:{opacity:0,y:24},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.2},transition:S,children:e.jsx(at,{src:a.src,alt:a.alt,avif:a.avif,webp:a.webp,aspectRatio:a.aspectRatio||"4/5",borderRadius:"12px",objectFit:a.objectFit||"cover",objectPosition:a.objectPosition,backgroundColor:a.backgroundColor,imagePaddingBlock:a.imagePaddingBlock})})}),e.jsxs(nt,{initial:{opacity:0,x:20},whileInView:{opacity:1,x:0},viewport:{once:!0,amount:.2},transition:z,children:[t.heading&&e.jsx(ot,{children:t.heading}),e.jsx(st,{children:p(t.body).map((s,c)=>e.jsx(_,{children:s},c))})]})]},t.id)},$=t=>{const a=t.images||[];if(a.length<=1)return b(t);const n=a[0],s=a[1];return e.jsxs("div",{children:[e.jsxs(lt,{children:[e.jsx(ct,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.2},transition:S,children:e.jsx(me,{src:n.src,alt:n.alt,avif:n.avif,webp:n.webp,aspectRatio:n.aspectRatio,borderRadius:"12px",backgroundColor:n.backgroundColor,imagePaddingBlock:n.imagePaddingBlock,objectFit:n.objectFit||"cover",objectPosition:n.objectPosition})}),e.jsx(mt,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.2},transition:{...S,delay:.15},children:e.jsx(me,{src:s.src,alt:s.alt,avif:s.avif,webp:s.webp,aspectRatio:s.aspectRatio,borderRadius:"12px",backgroundColor:s.backgroundColor,imagePaddingBlock:s.imagePaddingBlock,objectFit:s.objectFit||"cover",objectPosition:s.objectPosition||"top center"})})]}),t.body&&e.jsx(pt,{children:t.body})]},t.id)},l=t=>e.jsx("div",{children:e.jsx(gt,{children:e.jsxs(ut,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:f,transition:z,children:[t.heading&&e.jsx(A,{style:{textAlign:"left"},children:t.heading}),e.jsx(Q,{style:{alignItems:"flex-start"},children:p(t.body).map((a,n)=>e.jsx(ht,{style:{textAlign:"left"},children:a},n))})]})})},t.id),x=t=>e.jsx("div",{children:e.jsx(xt,{children:e.jsxs(ft,{$accentColor:t.accentColor,initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:f,transition:z,children:[e.jsx(wt,{children:t.body}),t.heading&&e.jsx(vt,{children:t.heading})]})})},t.id),E=t=>e.jsxs("div",{children:[t.heading&&e.jsx(A,{children:t.heading}),t.images&&t.images.length>0&&e.jsx(d.div,{initial:{opacity:0,scale:.97},whileInView:{opacity:1,scale:1},viewport:f,transition:S,children:e.jsx(ie,{images:t.images})})]},t.id),I=t=>{const a=t.stickyContent?.image||t.images?.[0],n=t.stickyContent?.fullBleedImage||!1,s=t.stickyContent?.tags||[],c=t.stickyContent?.collateralImages||[],T=t.scrollContent?.blocks||[];return e.jsxs(bt,{children:[e.jsx(St,{children:T.map((g,R)=>{if(g.type==="text")return e.jsxs(K,{initial:{opacity:0,x:20},whileInView:{opacity:1,x:0},viewport:f,transition:z,children:[g.heading&&e.jsx(A,{children:g.heading}),e.jsx(dt,{children:p(g.body).map((P,ue)=>e.jsx(_,{children:P},ue))})]},`${t.id}-text-${R}`);if(g.type==="image"){const P=g.images?.[0];return P?e.jsx(K,{initial:{opacity:0,scale:.97},whileInView:{opacity:1,scale:1},viewport:f,transition:S,children:e.jsx(F,{src:P.src,alt:P.alt,avif:P.avif,webp:P.webp,aspectRatio:P.aspectRatio||"3/2",borderRadius:"8px",objectFit:"cover"})},`${t.id}-image-${R}`):null}return g.type==="carousel"?e.jsx(K,{initial:{opacity:0,scale:.97},whileInView:{opacity:1,scale:1},viewport:f,transition:S,children:g.images&&g.images.length>0&&e.jsx(ie,{images:g.images,showControls:!1,showDots:!1})},`${t.id}-carousel-${R}`):g.type==="quote"?e.jsx(K,{initial:{opacity:0,x:30},whileInView:{opacity:1,x:0},viewport:f,transition:z,children:e.jsx(Bt,{children:g.body})},`${t.id}-quote-${R}`):null})}),e.jsx(yt,{children:e.jsxs(jt,{$fullBleed:n,children:[a&&e.jsx($t,{$fullBleed:n,children:e.jsx(It,{src:a.src,alt:a.alt,avif:a.avif,webp:a.webp,aspectRatio:a.aspectRatio||"16/9",borderRadius:"12px",backgroundColor:a.backgroundColor,imagePaddingBlock:a.imagePaddingBlock,objectFit:a.objectFit||"cover",objectPosition:a.objectPosition||"center"})}),s.length>0&&e.jsx(Nt,{tags:s}),c.length>0&&e.jsx(Dt,{images:c})]})})]},t.id)},B=t=>{const a=t.images?.[0];return a?e.jsxs(zt,{children:[e.jsx(Ft,{children:e.jsx(Vt,{src:a.src,alt:a.alt,avif:a.avif,webp:a.webp,parallaxSpeed:t.parallaxSpeed??.4,objectFit:"cover"})}),e.jsxs(Et,{children:[t.heading&&e.jsx(Tt,{initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:f,transition:z,children:t.heading}),t.body&&e.jsx(Mt,{initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:f,transition:{...z,delay:.15},children:t.body})]})]},t.id):null},J=t=>{const a=t.images?.[0];return a?e.jsx(Lt,{children:e.jsxs(At,{children:[e.jsx(Ht,{$containerBorder:a.containerBorder,$containerShadow:a.containerShadow,initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:f,transition:S,children:e.jsx(Ot,{src:a.src,alt:a.alt,avif:a.avif,webp:a.webp,aspectRatio:a.aspectRatio,borderRadius:a.borderRadius||"12px",containerBorderRadius:a.containerBorderRadius,objectFit:a.objectFit||"cover",objectPosition:a.objectPosition,imageScale:a.imageScale,backgroundColor:a.backgroundColor,imagePaddingBlock:a.imagePaddingBlock})}),(t.heading||t.body)&&e.jsxs(Wt,{children:[t.heading&&e.jsx(A,{children:t.heading}),t.body&&e.jsx(Q,{style:{alignItems:"flex-start"},children:p(t.body).map((n,s)=>e.jsx(_,{style:{textAlign:"left"},children:n},s))})]})]})},t.id):null},U=t=>{switch(t.layout){case"text-left-image-right":return W(t);case"text-right-image-left":return G(t);case"full-width-image":return b(t);case"image-pair":return N(t);case"gallery-grid":return O(t);case"asymmetric-mosaic":return D(t);case"three-column-feature":return j(t);case"staggered-pair":return $(t);case"text-only":return l(t);case"quote":return x(t);case"image-carousel":return E(t);case"parallax-reveal":return B(t);case"image-on-color-block":return J(t);case"sticky-split":return I(t);default:return null}};return e.jsxs(Ve,{children:[e.jsxs(Ee,{children:[e.jsxs(Te,{children:[u&&e.jsx(Me,{children:u}),e.jsx(H,{}),e.jsx(Ge,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.2,ease:[.25,.1,.25,1]},children:o.heroHeadline})]}),e.jsx(Le,{children:e.jsxs(Oe,{$backgroundColor:h.backgroundColor,children:[e.jsx(Ae,{src:h.src,alt:h.alt,avif:h.avif,webp:h.webp,aspectRatio:h.aspectRatio||"16/9",borderRadius:"8px",objectFit:h.objectFit||"cover",objectPosition:h.objectPosition||"center",imageScale:1,onLoad:()=>C(!0)}),!v&&e.jsx(He,{initial:{opacity:1},animate:{opacity:0},transition:{duration:.4,delay:.3},"aria-hidden":"true"})]})})]}),e.jsx(Ne,{children:o.sections.map((t,a)=>{const n=o.sections[a-1],s=o.sections[a+1],c=_t.has(t.layout),T=te.has(t.layout),g=n?te.has(n.layout):!1,R=s?te.has(s.layout):!1,P=!t.disableCompactPadding&&T&&(g||R);return c?e.jsx("div",{children:U(t)},t.id):e.jsx(d.div,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0,margin:"200px"},transition:{duration:.6,ease:"easeOut"},children:e.jsx(De,{$background:L(t,a%2===0),$compact:P,children:e.jsx(_e,{children:U(t)})})},t.id)})})]})});export{qt as C};
