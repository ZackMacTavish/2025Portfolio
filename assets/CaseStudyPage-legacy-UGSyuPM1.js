System.register(["./three-legacy-DtSyZuBP.js","./vendor-legacy-BmQ_CjD0.js","./use-reduced-motion-legacy-BrKBsv_h.js"],function(e,i){"use strict";var t,r,n,a,o,d,s,l,c,m;return{setters:[e=>{t=e.j},e=>{r=e.b,n=e.c,a=e.R},e=>{o=e.u,d=e.a,s=e.M,l=e.r,c=e.b,m=e.m}],execute:function(){const i={some:0,all:1};function g(e,{root:t,margin:n,amount:a,once:o=!1,initial:d=!1}={}){const[s,c]=r.useState(d);return r.useEffect(()=>{if(!e.current||o&&s)return;const r={root:t&&t.current||void 0,margin:n,amount:a};return function(e,t,{root:r,margin:n,amount:a="some"}={}){const o=l(e),d=new WeakMap,s=new IntersectionObserver(e=>{e.forEach(e=>{const i=d.get(e.target);if(e.isIntersecting!==Boolean(i))if(e.isIntersecting){const i=t(e.target,e);"function"==typeof i?d.set(e.target,i):s.unobserve(e.target)}else"function"==typeof i&&(i(e),d.delete(e.target))})},{root:r,rootMargin:n,threshold:"number"==typeof a?a:i[a]});return o.forEach(e=>s.observe(e)),()=>s.disconnect()}(e.current,()=>(c(!0),o?void 0:()=>c(!1)),r)},[t,e,n,o,a]),s}function p(e){if(!e)return e;try{return encodeURI(decodeURI(e))}catch{return encodeURI(e)}}const h=n(m.div)`
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: ${e=>e.$borderRadius};
  background: ${e=>e.$backgroundColor||"transparent"};
  ${e=>e.$border?`border: ${e.$border};`:""}

  ${e=>e.$aspectRatio?`\n    aspect-ratio: ${e.$aspectRatio};\n  `:""}
`,u=n.picture`
  display: block;
  width: 100%;
  height: ${e=>e.$fillContainer?"100%":"auto"};
  overflow: hidden;
  border-radius: ${e=>e.$borderRadius};
`,x=n.div`
  position: ${e=>e.$fillContainer?"absolute":"relative"};
  inset: ${e=>e.$fillContainer?`${e.$imagePaddingBlock||"0"} ${e.$imagePaddingInline||"0"}`:"auto"};
  padding-block: ${e=>e.$fillContainer?"0":e.$imagePaddingBlock||"0"};
  padding-inline: ${e=>e.$fillContainer?"0":e.$imagePaddingInline||"0"};
  overflow: hidden;
  border-radius: ${e=>e.$borderRadius};
`,f=n(m.img)`
  display: block;
  width: 100%;
  height: ${e=>e.$fillContainer?e.$hasParallax?"110%":"100%":"auto"};
  object-fit: ${e=>e.$objectFit};
  object-position: ${e=>e.$objectPosition};
  border-radius: ${e=>e.$borderRadius};
`;function w({src:e,alt:i,avif:n,webp:a,aspectRatio:l,parallaxSpeed:m=0,className:g,borderRadius:w="12px",containerBorderRadius:b,backgroundColor:v,imagePaddingBlock:j,imagePaddingInline:y,objectFit:$="cover",objectPosition:k="center",imageScale:R=1,disableRevealAnimation:P=!1,loading:I="lazy",decoding:C="async",onLoad:B,border:z,mixBlendMode:F}){const S=r.useRef(null),V=c(),[E,A]=r.useState(()=>"undefined"!=typeof window&&window.innerWidth<768),L=function(e){const i=o(()=>d(e)),{isStatic:t}=r.useContext(s);if(t){const[,t]=r.useState(e);r.useEffect(()=>i.on("change",t),[])}return i}(0);r.useEffect(()=>{if("undefined"==typeof window)return;const e=()=>{A(window.innerWidth<768)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]);const M=60*Math.max(0,m),D=m>0&&!V&&!E,N=Boolean(l),W=null!=b?b:w,H=p(e),q=p(n),U=p(a);return r.useEffect(()=>{if(!D)return void L.set(0);const e=()=>{const e=S.current;if(!e)return;const i=e.getBoundingClientRect(),t=window.innerHeight,r=t+i.height,n=r>0?(t-i.top)/r:.5,a=Math.min(1,Math.max(0,n))*M*2-M;L.set(a)};return e(),window.addEventListener("scroll",e,{passive:!0}),window.addEventListener("resize",e),()=>{window.removeEventListener("scroll",e),window.removeEventListener("resize",e)}},[M,L,D]),t.jsx(h,{ref:S,className:g,$aspectRatio:l,$borderRadius:W,$backgroundColor:v,$border:z,...P?{}:{initial:{opacity:0,y:24},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.2},transition:{duration:.9,ease:[.25,.1,.25,1]}},children:t.jsx(x,{$imagePaddingBlock:j,$imagePaddingInline:y,$fillContainer:N,$borderRadius:w,children:t.jsxs(u,{$fillContainer:N,$borderRadius:w,children:[q&&t.jsx("source",{srcSet:q,type:"image/avif"}),U&&t.jsx("source",{srcSet:U,type:"image/webp"}),t.jsx(f,{src:H,alt:i,loading:I,decoding:C,onLoad:B,style:{y:D?L:0,scale:R,mixBlendMode:F},$objectFit:$,$objectPosition:k,$hasParallax:D,$fillContainer:N,$borderRadius:w})]})})})}const b=n.div`
  width: 100%;
`,v=a.forwardRef((e,i)=>{const{$aspectRatio:r,style:n,...a}=e;return t.jsx(m.div,{ref:i,style:{position:"relative",width:"100%",borderRadius:"12px",overflow:"hidden",aspectRatio:r||"3 / 2",maxHeight:"1080px",border:"1px solid rgba(15, 23, 42, 0.08)",...n||{}},...a})});v.displayName="Frame";const j=n.div`
  position: absolute;
  inset: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${e=>e.$visible?1:0};
  transition: opacity 0.2s ease;
  pointer-events: none;
`,y=n.button`
  pointer-events: auto;
  position: absolute;
  top: 50%;
  ${e=>e.$side}: 1rem;
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
`,$=n.button`
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
`,k=n.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  transition: opacity 320ms ease;
`,R=n(w)`
  width: 100%;
  height: 100%;
`,P=n.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`,I=n.button`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  padding: 0;
  background: ${e=>e.$active?"#333":"#ccc"};
  transform: ${e=>e.$active?"scale(1.3)":"scale(1)"};
  transition: all 0.3s;
`;function C({images:e,autoPlay:i=!1,intervalMs:n=4e3,showControls:a=!0,showDots:o=!0}){r.useEffect(()=>{if(!f.current)return;let e=!1;try{f.current.focus({preventScroll:!0}),e=!0}catch{}},[]);const[d,s]=r.useState(0),[l,c]=r.useState(0),[m,g]=r.useState(!0),[p,h]=r.useState(!1),[u,x]=r.useState(!1),f=r.useRef(null),w=e.length,C=e=>{if(!w)return;const i=(e+w)%w;c(d),g(!1),s(i)},B=()=>C(d+1),z=()=>C(d-1);if(r.useEffect(()=>{if(!i||u||w<2)return;const e=setInterval(()=>{s(e=>(e+1)%w)},n);return()=>clearInterval(e)},[i,n,u,w]),r.useEffect(()=>{w<2||(async()=>{const i=e.flatMap(e=>[e.avif,e.webp,e.src].filter(e=>Boolean(e)));await Promise.all(i.map(e=>(e=>new Promise(i=>{const t=new Image;t.onload=async()=>{if("function"==typeof t.decode)try{await t.decode()}catch{}i()},t.onerror=()=>i(),t.src=e}))(e)))})()},[e,w]),!w)return null;const F=e[d],S=e[l];return t.jsxs(b,{children:[t.jsxs(v,{ref:f,$aspectRatio:F.aspectRatio,tabIndex:0,"data-carousel-frame":"true",onMouseEnter:()=>h(!0),onMouseLeave:()=>h(!1),onKeyDown:e=>{"ArrowRight"===e.key&&(e.preventDefault(),x(!0),B()),"ArrowLeft"===e.key&&(e.preventDefault(),x(!0),z())},drag:"x",dragConstraints:{left:0,right:0},onDragEnd:(e,i)=>{i.offset.x>80?z():i.offset.x<-80&&B()},children:[!m&&t.jsx(k,{style:{zIndex:1},children:t.jsx(R,{src:S.src,alt:S.alt,avif:S.avif,webp:S.webp,aspectRatio:S.aspectRatio||"3/2",borderRadius:S.borderRadius||"8px",backgroundColor:S.backgroundColor,imagePaddingBlock:S.imagePaddingBlock,imagePaddingInline:S.imagePaddingInline,objectFit:S.objectFit||"cover",objectPosition:S.objectPosition||"center",border:S.containerBorder,disableRevealAnimation:!0,loading:"eager",decoding:"auto"},`prev-${S.src}-${l}`)}),t.jsx(k,{style:{zIndex:2},children:t.jsx(R,{src:F.src,alt:F.alt,avif:F.avif,webp:F.webp,aspectRatio:F.aspectRatio||"3/2",borderRadius:F.borderRadius||"8px",backgroundColor:F.backgroundColor,imagePaddingBlock:F.imagePaddingBlock,imagePaddingInline:F.imagePaddingInline,objectFit:F.objectFit||"cover",objectPosition:F.objectPosition||"center",border:F.containerBorder,disableRevealAnimation:!0,loading:"eager",decoding:"auto",onLoad:()=>g(!0),style:{position:m?"relative":"absolute"}},`active-${F.src}-${d}`)}),w>1&&a&&t.jsxs(j,{$visible:p,children:[t.jsx(y,{type:"button",$side:"left","aria-label":"Previous image",onClick:z,children:t.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:t.jsx("polyline",{points:"15 6 9 12 15 18"})})}),i&&t.jsx($,{type:"button","aria-label":u?"Resume slideshow":"Pause slideshow",onClick:()=>x(e=>!e),children:u?"▶":"❚❚"}),t.jsx(y,{type:"button",$side:"right","aria-label":"Next image",onClick:B,children:t.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:t.jsx("polyline",{points:"9 6 15 12 9 18"})})})]})]}),w>1&&o&&t.jsx(P,{children:e.map((e,i)=>t.jsx(I,{type:"button",$active:i===d,"aria-label":`Go to slide ${i+1}`,"aria-current":i===d,onClick:()=>C(i)},`${e.src}-${i}`))})]})}const B=n.div`
  min-height: 100vh;
  background: white;
`,z=n.section`
  position: relative;
  overflow: hidden;
  min-height: 110vh;
  background: #f5f5f5;
  padding: 5rem 1.5rem 10rem;

  @media (min-width: 768px) {
    min-height: 116vh;
    padding: 7rem 1.5rem 16rem;
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
`,F=n.div`
  position: relative;
  z-index: 2;
  margin: 0 auto;
  max-width: 64rem;
`,S=n.div`
  margin-bottom: 1.25rem;
`,V=n.div`
  position: absolute;
  left: 50%;
  bottom: -6%;
  transform: translateX(-50%);
  width: min(72rem, 92vw);
  z-index: 1;
  pointer-events: none;

  @media (max-width: 768px) {
    bottom: -8%;
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
`,E=n(w)`
  width: 100%;

  img {
    filter: saturate(0.96);
  }
`,A=n(m.div)`
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
`,L=n.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: ${({$backgroundColor:e})=>e||"transparent"};
  padding-block: ${({$backgroundColor:e})=>e?"clamp(1rem, 2vw, 1.5rem)":"0"};
  border-radius: ${({$backgroundColor:e})=>e?"24px":"0"};
  overflow: hidden;
`,M=n.div`
  margin-bottom: 3rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`,D=n.div`
  text-align: left;
`,N=n.p`
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  color: #a3a3a3;
  text-transform: uppercase;
  margin: 0;
  margin-bottom: 0.5rem;
`,W=n.p`
  font-size: 0.875rem;
  color: #4b5563;
  margin: 0;
`,H=n(m.h1)`
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
`,q=n.div``,U=n.section`
  background: ${e=>e.$background};
  padding: ${e=>{var i;return null!==(i=e.$padding)&&void 0!==i?i:e.$compact?"0":"3.75rem 0"}};
`,G=n.div`
  margin: 0 auto;
  max-width: 64rem;
`,K=n.h2`
  font-size: 1.875rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1.5rem;
`,O=n.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,T=n.p`
  margin: 0;
  max-width: 68ch;
  font-size: 1rem;
  line-height: 1.625;
  color: #666666;
`,X=n.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`,Y=n(m.div)``,J=n(m.div)`
  overflow: hidden;
  border-radius: 0.5rem;
`,Q=n(w)`
  width: 100%;
  height: 24rem;

  @media (min-width: 768px) {
    height: 100%;
  }
`,Z=n(m.div)`
  overflow: hidden;
  border-radius: 0;
`,_=n.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;

  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
`,ee=n.p`
  margin-top: 0.75rem;
  font-size: 0.875rem;
  font-style: italic;
  color: #8b8b8b;
`,ie=n.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`,te=n(m.div)`
  overflow: hidden;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover img {
    transform: scale(1.02);
  }
`,re=n(w)`
  width: 100%;

  img {
    transition: transform 0.3s ease-out;
  }
`,ne=n.div`
  display: grid;
  gap: 1rem;

  ${e=>3===e.$count?"\n        grid-template-columns: 1.2fr 0.8fr;\n        grid-template-rows: auto auto;\n      ":4===e.$count?"\n        grid-template-columns: 1fr 1fr 1fr;\n        grid-template-rows: auto auto;\n      ":"\n      grid-template-columns: repeat(3, 1fr);\n      grid-auto-rows: minmax(200px, auto);\n    "}

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 0.75rem;
    grid-template-rows: auto;
    grid-auto-rows: auto;
  }
`,ae=n(m.div)`
  cursor: pointer;
  overflow: hidden;
  border-radius: 10px;

  ${e=>{if(3===e.$count){if(0===e.$index)return"\n          grid-column: 1;\n          grid-row: 1 / span 2;\n        ";if(1===e.$index)return"\n          grid-column: 2;\n          grid-row: 1;\n        ";if(2===e.$index)return"\n          grid-column: 2;\n          grid-row: 2;\n        "}if(4===e.$count){if(0===e.$index)return"\n          grid-column: 1 / span 2;\n          grid-row: 1;\n        ";if(1===e.$index)return"\n          grid-column: 3;\n          grid-row: 1;\n        ";if(2===e.$index)return"\n          grid-column: 1;\n          grid-row: 2;\n        ";if(3===e.$index)return"\n          grid-column: 2 / span 2;\n          grid-row: 2;\n        "}return e.$count>=5&&0===e.$index?"\n        grid-column: 1 / span 2;\n      ":""}}

  @media (max-width: 768px) {
    grid-column: auto !important;
    grid-row: auto !important;
  }

  &:hover img {
    transform: scale(1.03);
  }
`,oe=n(w)`
  width: 100%;

  img {
    transition: transform 0.5s ease-out;
  }
`,de=n.section`
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
`,se=n(m.div)`
  display: flex;
  flex-direction: column;
  grid-column: 1;
  grid-row: 1 / span 2;

  @media (max-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
  }
`,le=n.span`
  font-size: 0.85rem;
  line-height: 2.4;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${e=>e.$active?"#000":"#bbb"};
  font-weight: ${e=>e.$active?700:600};

  @media (max-width: 768px) {
    line-height: 1.6;
  }
`,ce=n.div`
  position: relative;
  grid-column: 2;
  grid-row: 1;
`;n(m.div)`
  position: absolute;
  inset: 0;
  margin: -20px;
  border-radius: 14px;
  z-index: 0;
  background: ${e=>e.$accentColor};
`;const me=n(m.div)`
  position: relative;
  z-index: 1;
`,ge=n(w)`
  width: 100%;
`,pe=n(m.div)`
  grid-column: 2;
  grid-row: 2;
`,he=n.h3`
  margin: 0 0 0.35rem;
  font-size: 1.1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #555;
`,ue=n(O)`
  gap: 0.45rem;
`,xe=n(O)`
  gap: 0.6rem;
`,fe=n.section`
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
`,we=n(m.div)`
  border-radius: 12px;
  overflow: hidden;
`,be=n(m.div)`
  margin-top: 0;
  border-radius: 12px;
  overflow: hidden;

  @media (max-width: 768px) {
    margin-top: 0;
  }
`,ve=n(w)`
  width: 100%;
`,je=n.p`
  margin: 2rem auto 0;
  max-width: 600px;
  text-align: center;
  font-size: 0.95rem;
  color: #888;
`,ye=n.div`
  margin: 0 0 2rem;
  max-width: 45rem;
`,$e=n(m.div)``,ke=n(T)`
  font-size: clamp(1rem, 1.15vw, 1.15rem);
  line-height: 1.65;
  max-width: 62ch;
  text-wrap: pretty;
`,Re=n.div`
  margin: 0 auto;
  max-width: 800px;
  padding: 5rem 6%;
`,Pe=n(m.div)`
  border-left: 3px solid ${e=>e.$accentColor||"#333"};
  padding-left: 2rem;
  margin-left: 0;

  ${e=>e.$accentColor?`\n    background: ${e.$accentColor}12;\n    padding: 3rem 2.5rem;\n    border-radius: 0 12px 12px 0;\n  `:""}
`,Ie=n.p`
  margin: 0;
  text-align: left;
  font-size: clamp(1.2rem, 2.1vw, 1.55rem);
  font-style: italic;
  line-height: 1.5;
  color: #1a1a1a;
  text-wrap: balance;
`,Ce=n.cite`
  display: block;
  margin-top: 1.5rem;
  font-size: 0.85rem;
  font-style: normal;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #999;
`,Be=n.section`
  display: flex;
  flex-direction: column;
  gap: 0;
  padding: 0 0 6rem;
`,ze=n.div`
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  padding: 0;
  background: ${e=>e.$background||"white"};
`,Fe=n.div`
  position: relative;
  width: min(65vw, 1080px);
  margin: 0 auto;
  padding-top: ${e=>e.$fullBleed?"0":"3rem"};

  @media (max-width: 1024px) {
    width: min(72vw, 980px);
  }

  @media (max-width: 768px) {
    width: calc(100vw - 2.5rem);
    padding-top: ${e=>e.$fullBleed?"0":"2rem"};
  }
`,Se=n.div`
  position: relative;
  min-height: 0;
  height: clamp(340px, 46vw, 680px);

  ${e=>e.$fullBleed?"\n    width: 100vw;\n    margin-left: calc(-50vw + 50%);\n  ":""}

  @media (max-width: 768px) {
    height: clamp(260px, 58vw, 460px);
  }
`,Ve=n(w)`
  height: 100%;
`,Ee=n.div`
  margin-top: 2.5rem;
  padding: 0 1.25rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.25rem;
`,Ae=n.span`
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #888;
  padding: 0.25rem 0;
`,Le=n.span`
  color: #9a9a9a;
  margin: 0 0.25rem;
`,Me=n.div`
  margin-top: 1rem;
  padding: 0 0 1.25rem;
`,De=n.div`
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
`,Ne=n(m.div)`
  margin-bottom: 3rem;

  &:last-child {
    margin-bottom: 0;
  }
`,We=n.p`
  margin: 0;
  border-left: 3px solid currentColor;
  padding-left: 1.5rem;
  text-align: left;
  font-size: 1.5rem;
  font-style: italic;
  line-height: 1.5;
  color: #222;
`,He=n.section`
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
`,qe=n(m.div)`
  position: relative;
  width: 100%;
  height: min(92vh, 920px);

  @media (max-width: 768px) {
    height: min(78vh, 620px);
  }
`,Ue=n(w)`
  height: 100%;
  border-radius: 0;
`,Ge=n.div`
  position: relative;
  z-index: 2;
  padding: 2.5rem 6% 3.5rem;
  background: white;

  @media (max-width: 768px) {
    padding: 2rem 1.25rem;
  }
`,Ke=n(m.h2)`
  color: #111;
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  line-height: 1.15;
  max-width: 700px;
  margin: 0 0 1rem;
`,Oe=n(m.p)`
  margin: 0;
  color: #222;
  font-size: 1.05rem;
  line-height: 1.7;
  max-width: 540px;
`,Te=n.section`
  position: relative;
  padding: 3.5rem 0;
`,Xe=n.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 64rem;
`;n(m.div)`
  position: absolute;
  top: 15%;
  bottom: 5%;
  left: 8%;
  right: -2%;
  z-index: 0;
  border-radius: 16px;
  background: ${e=>e.$accentColor};

  @media (max-width: 768px) {
    top: 10%;
    bottom: 8%;
    left: 4%;
    right: -1%;
  }
`;const Ye=n(m.div)`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  border-radius: 12px;
  border: ${e=>e.$containerBorder||"none"};
  box-shadow: ${e=>e.$containerShadow||"0 24px 60px rgba(0, 0, 0, 0.15), 0 8px 20px rgba(0, 0, 0, 0.08)"};

  @media (max-width: 768px) {
    max-width: 100%;
  }
`,Je=n(w)`
  width: 100%;
`,Qe=n.div`
  position: relative;
  z-index: 1;
  max-width: 45rem;
  margin: 2.5rem 0 0;
  text-align: left;
`;n.section`
  border-top: 1px solid #e5e7eb;
  background: white;
  padding: 4rem 1.5rem 6rem;

  @media (min-width: 768px) {
    padding: 6rem 1.5rem;
  }
`,n.div`
  margin: 0 auto;
  max-width: 64rem;
`,n.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 2rem;
`,n.p`
  margin: 0;
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  color: #9ca3af;
  text-transform: uppercase;
`,n.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`,n.button`
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
`;const Ze=n(m.button)`
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
`;n.p`
  font-size: 0.875rem;
  letter-spacing: 0.1em;
  color: #a3a3a3;
  text-transform: uppercase;
  margin: 0;
`,n.h3`
  margin-top: 0.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;

  @media (min-width: 768px) {
    margin-top: 0;
    font-size: 1.875rem;
  }
`,n.div`
  font-size: 1.5rem;
  color: #a3a3a3;
  transition: color 200ms;

  ${Ze}:hover & {
    color: #111827;
  }
`;const _e={duration:.7,ease:[.25,.1,.25,1]},ei={duration:.9,ease:[.25,.1,.25,1]},ii={once:!0,amount:.2};function ti({tags:e}){const i=r.useRef(null),n=g(i,{once:!0,margin:"100px"});return t.jsx("div",{ref:i,children:n&&t.jsx(Ee,{children:e.map((i,r)=>t.jsx(m.div,{initial:{y:8},animate:{y:0},transition:{duration:.35,delay:.04*r},children:t.jsxs(Ae,{children:[i,r<e.length-1&&t.jsx(Le,{children:"•"})]})},`${i}-${r}`))})})}function ri({images:e}){const i=r.useRef(null),n=g(i,{once:!0,margin:"100px"});return t.jsx("div",{ref:i,children:n&&t.jsx(Me,{children:t.jsx(m.div,{initial:{y:12},animate:{y:0},transition:{duration:.45},children:t.jsx(C,{images:e,autoPlay:!0,intervalMs:2800})})})})}const ni=new Set(["full-width-image","parallax-reveal","image-pair","staggered-pair"]),ai=new Set(["sticky-split","parallax-reveal"]);e("C",r.memo(function({caseStudy:e,nextProject:i,onNextProject:n,topAction:a}){const[o,d]=r.useState(!1),[s,l]=r.useState("idle"),c=e.heroImage||e.coverImage,g=e=>e?e.split("\n\n").filter(e=>e.trim()):[],p=(e,i)=>{if(e.sectionBackground)return e.sectionBackground;const t=(e=>{if(!e)return null;const i=e.trim(),t=/^#([0-9a-fA-F]{3})$/,r=/^#([0-9a-fA-F]{6})$/;if(t.test(i)){const[,e]=i.match(t);return`rgba(${parseInt(e[0]+e[0],16)}, ${parseInt(e[1]+e[1],16)}, ${parseInt(e[2]+e[2],16)}, 0.06)`}if(r.test(i)){const[,e]=i.match(r);return`rgba(${parseInt(e.slice(0,2),16)}, ${parseInt(e.slice(2,4),16)}, ${parseInt(e.slice(4,6),16)}, 0.06)`}return null})(e.accentColor);return t||(i?"white":"#f5f5f5")},h=()=>t.jsxs(M,{children:[t.jsxs(D,{children:[t.jsx(N,{children:"Client"}),t.jsx(W,{children:e.meta.client})]}),t.jsxs(D,{children:[t.jsx(N,{children:"Role"}),t.jsx(W,{children:e.meta.role})]}),t.jsxs(D,{children:[t.jsx(N,{children:"Timeline"}),t.jsx(W,{children:e.meta.timeline})]}),t.jsxs(D,{children:[t.jsx(N,{children:"Platform"}),t.jsx(W,{children:e.meta.platform})]})]}),u=e=>t.jsxs("div",{children:[(e.heading||e.body)&&t.jsx(ye,{style:{marginBottom:"3.75rem"},children:t.jsxs($e,{children:[e.heading&&t.jsx(K,{children:e.heading}),e.body&&t.jsx(O,{style:{alignItems:"flex-start"},children:g(e.body).map((e,i)=>t.jsx(T,{style:{textAlign:"left"},children:e},i))})]})}),t.jsx(Z,{initial:{scale:.97},whileInView:{scale:1},viewport:ii,transition:ei,children:e.images&&e.images[0]&&t.jsx(Q,{src:e.images[0].src,alt:e.images[0].alt,avif:e.images[0].avif,webp:e.images[0].webp,aspectRatio:e.images[0].aspectRatio||"16/9",borderRadius:"8px",objectFit:e.images[0].objectFit||"cover",objectPosition:e.images[0].objectPosition,backgroundColor:e.images[0].backgroundColor,imagePaddingBlock:e.images[0].imagePaddingBlock,border:e.images[0].containerBorder,mixBlendMode:e.images[0].mixBlendMode,style:{width:"100%"}})}),e.caption&&t.jsx(ee,{children:e.caption})]},e.id),x=e=>{switch(e.layout){case"text-left-image-right":return(e=>t.jsx("div",{children:t.jsxs(X,{children:[t.jsxs(Y,{initial:{x:-30},whileInView:{x:0},viewport:ii,transition:_e,children:[e.heading&&t.jsx(K,{children:e.heading}),t.jsx(O,{children:g(e.body).map((e,i)=>t.jsx(T,{children:e},i))})]}),e.images&&e.images[0]&&t.jsx(J,{initial:{x:30},whileInView:{x:0},viewport:ii,transition:ei,children:t.jsx(Q,{src:e.images[0].src,alt:e.images[0].alt,avif:e.images[0].avif,webp:e.images[0].webp,aspectRatio:e.images[0].aspectRatio||"3/2",borderRadius:"8px",objectFit:"cover"})})]})},e.id))(e);case"text-right-image-left":return(e=>t.jsx("div",{children:t.jsxs(X,{children:[e.images&&e.images[0]&&t.jsx(J,{style:{order:2},initial:{x:-30},whileInView:{x:0},viewport:ii,transition:ei,children:t.jsx(Q,{src:e.images[0].src,alt:e.images[0].alt,avif:e.images[0].avif,webp:e.images[0].webp,aspectRatio:e.images[0].aspectRatio||"3/2",borderRadius:"8px",objectFit:"cover"})}),t.jsxs(Y,{style:{order:1},initial:{x:30},whileInView:{x:0},viewport:ii,transition:_e,children:[e.heading&&t.jsx(K,{children:e.heading}),t.jsx(O,{children:g(e.body).map((e,i)=>t.jsx(T,{children:e},i))})]})]})},e.id))(e);case"full-width-image":return u(e);case"image-pair":return(e=>t.jsxs("div",{children:[e.heading&&t.jsx(K,{children:e.heading}),t.jsx(_,{children:e.images&&e.images.slice(0,2).map((e,i)=>t.jsx(te,{initial:{scale:.97},whileInView:{scale:1},viewport:ii,transition:{...ei,delay:.15*i},children:t.jsx(re,{src:e.src,alt:e.alt,avif:e.avif,webp:e.webp,aspectRatio:e.aspectRatio||"3/2",borderRadius:"0",objectFit:"contain",style:{height:"26rem"}})},i))})]},e.id))(e);case"gallery-grid":return(e=>t.jsxs("div",{children:[e.heading&&t.jsx(K,{children:e.heading}),t.jsx(ie,{children:e.images&&e.images.map((e,i)=>t.jsx(te,{initial:{scale:.95},whileInView:{scale:1},viewport:ii,whileHover:{scale:1.02},transition:{...ei,delay:.1*i},children:t.jsx(re,{src:e.src,alt:e.alt,avif:e.avif,webp:e.webp,aspectRatio:e.aspectRatio||"1/1",borderRadius:"8px",objectFit:"cover"})},i))})]},e.id))(e);case"asymmetric-mosaic":return(e=>{const i=e.images||[];return t.jsxs("div",{children:[e.heading&&t.jsx(K,{children:e.heading}),t.jsx(ne,{$count:i.length,children:i.map((e,r)=>t.jsx(ae,{$index:r,$count:i.length,initial:{y:20,scale:.97},whileInView:{y:0,scale:1},viewport:{once:!0,amount:.2},transition:{..._e,delay:.08*r},children:t.jsx(oe,{src:e.src,alt:e.alt,avif:e.avif,webp:e.webp,aspectRatio:e.aspectRatio||"4/3",borderRadius:"10px",objectFit:"cover"})},`${e.src}-${r}`))})]},e.id)})(e);case"three-column-feature":return(e=>{var i;const r=null===(i=e.images)||void 0===i?void 0:i[0],n=e.labels||[];return t.jsxs(de,{children:[t.jsx(se,{initial:{x:-20},whileInView:{x:0},viewport:{once:!0,amount:.2},transition:_e,children:n.map((e,i)=>t.jsx(le,{$active:0===i,children:e},`${e}-${i}`))}),t.jsx(ce,{children:r&&t.jsx(me,{initial:{y:24},whileInView:{y:0},viewport:{once:!0,amount:.2},transition:ei,children:t.jsx(ge,{src:r.src,alt:r.alt,avif:r.avif,webp:r.webp,aspectRatio:r.aspectRatio||"4/5",borderRadius:"12px",objectFit:r.objectFit||"cover",objectPosition:r.objectPosition,backgroundColor:r.backgroundColor,imagePaddingBlock:r.imagePaddingBlock})})}),t.jsxs(pe,{initial:{x:20},whileInView:{x:0},viewport:{once:!0,amount:.2},transition:_e,children:[e.heading&&t.jsx(he,{children:e.heading}),t.jsx(ue,{children:g(e.body).map((e,i)=>t.jsx(T,{children:e},i))})]})]},e.id)})(e);case"staggered-pair":return(e=>{const i=e.images||[];if(i.length<=1)return u(e);const r=i[0],n=i[1],a=Boolean(e.heading);return t.jsxs("div",{children:[a&&t.jsx(ye,{children:t.jsxs($e,{initial:{y:20},whileInView:{y:0},viewport:ii,transition:_e,children:[t.jsx(K,{style:{textAlign:"left"},children:e.heading}),e.body&&t.jsx(O,{style:{alignItems:"flex-start"},children:g(e.body).map((e,i)=>t.jsx(ke,{style:{textAlign:"left"},children:e},i))})]})}),t.jsxs(fe,{children:[t.jsx(we,{initial:{y:30},whileInView:{y:0},viewport:{once:!0,amount:.2},transition:ei,children:t.jsx(ve,{src:r.src,alt:r.alt,avif:r.avif,webp:r.webp,aspectRatio:r.aspectRatio,borderRadius:"12px",backgroundColor:r.backgroundColor,imagePaddingBlock:r.imagePaddingBlock,objectFit:r.objectFit||"cover",objectPosition:r.objectPosition,border:r.containerBorder})}),t.jsx(be,{initial:{y:30},whileInView:{y:0},viewport:{once:!0,amount:.2},transition:{...ei,delay:.15},children:t.jsx(ve,{src:n.src,alt:n.alt,avif:n.avif,webp:n.webp,aspectRatio:n.aspectRatio,borderRadius:"12px",backgroundColor:n.backgroundColor,imagePaddingBlock:n.imagePaddingBlock,objectFit:n.objectFit||"cover",objectPosition:n.objectPosition||"top center",border:n.containerBorder})})]}),!a&&e.body&&t.jsx(je,{children:e.body})]},e.id)})(e);case"text-only":return(e=>t.jsx("div",{children:t.jsx(ye,{children:t.jsxs($e,{initial:{y:20},whileInView:{y:0},viewport:ii,transition:_e,children:[e.heading&&t.jsx(K,{style:{textAlign:"left"},children:e.heading}),t.jsx(O,{style:{alignItems:"flex-start"},children:g(e.body).map((e,i)=>t.jsx(ke,{style:{textAlign:"left"},children:e},i))})]})})},e.id))(e);case"quote":return(e=>t.jsx("div",{children:t.jsx(Re,{children:t.jsxs(Pe,{$accentColor:e.accentColor,initial:{y:20},whileInView:{y:0},viewport:ii,transition:_e,children:[t.jsx(Ie,{children:e.body}),e.heading&&t.jsx(Ce,{children:e.heading})]})})},e.id))(e);case"image-carousel":return(e=>t.jsxs("div",{children:[(e.heading||e.body)&&t.jsx(ye,{children:t.jsxs($e,{initial:{y:20},whileInView:{y:0},viewport:ii,transition:_e,children:[e.heading&&t.jsx(K,{style:{textAlign:"left"},children:e.heading}),e.body&&t.jsx(O,{style:{alignItems:"flex-start"},children:g(e.body).map((e,i)=>t.jsx(ke,{style:{textAlign:"left"},children:e},i))})]})}),e.images&&e.images.length>0&&t.jsx(m.div,{initial:{scale:.97},whileInView:{scale:1},viewport:ii,transition:ei,children:t.jsx(C,{images:e.images})})]},e.id))(e);case"parallax-reveal":return(e=>{var i,r;const n=null===(i=e.images)||void 0===i?void 0:i[0];return n?t.jsxs(He,{children:[t.jsx(qe,{children:t.jsx(Ue,{src:n.src,alt:n.alt,avif:n.avif,webp:n.webp,parallaxSpeed:null!==(r=e.parallaxSpeed)&&void 0!==r?r:.4,objectFit:"cover"})}),t.jsxs(Ge,{children:[e.heading&&t.jsx(Ke,{initial:{y:40},whileInView:{y:0},viewport:ii,transition:_e,children:e.heading}),e.body&&t.jsx(Oe,{initial:{y:40},whileInView:{y:0},viewport:ii,transition:{..._e,delay:.15},children:e.body})]})]},e.id):null})(e);case"image-on-color-block":return(e=>{var i;const r=null===(i=e.images)||void 0===i?void 0:i[0];return r?t.jsx(Te,{children:t.jsxs(Xe,{children:[t.jsx(Ye,{$containerBorder:r.containerBorder,$containerShadow:r.containerShadow,initial:{y:40},whileInView:{y:0},viewport:ii,transition:ei,children:t.jsx(Je,{src:r.src,alt:r.alt,avif:r.avif,webp:r.webp,aspectRatio:r.aspectRatio,borderRadius:r.borderRadius||"12px",containerBorderRadius:r.containerBorderRadius,objectFit:r.objectFit||"cover",objectPosition:r.objectPosition,imageScale:r.imageScale,backgroundColor:r.backgroundColor,imagePaddingBlock:r.imagePaddingBlock,imagePaddingInline:r.imagePaddingInline})}),(e.heading||e.body)&&t.jsxs(Qe,{children:[e.heading&&t.jsx(K,{children:e.heading}),e.body&&t.jsx(O,{style:{alignItems:"flex-start"},children:g(e.body).map((e,i)=>t.jsx(T,{style:{textAlign:"left"},children:e},i))})]})]})},e.id):null})(e);case"sticky-split":return(e=>{var i,r,n,a,o,d;const s=(null===(i=e.stickyContent)||void 0===i?void 0:i.image)||(null===(r=e.images)||void 0===r?void 0:r[0]),l=(null===(n=e.stickyContent)||void 0===n?void 0:n.fullBleedImage)||!1,c=(null===(a=e.stickyContent)||void 0===a?void 0:a.tags)||[],m=(null===(o=e.stickyContent)||void 0===o?void 0:o.collateralImages)||[],p=(null===(d=e.scrollContent)||void 0===d?void 0:d.blocks)||[];return t.jsxs(Be,{children:[p.length>0&&t.jsx(De,{children:p.map((i,r)=>{if("text"===i.type)return t.jsxs(Ne,{initial:{x:20},whileInView:{x:0},viewport:ii,transition:_e,children:[i.heading&&t.jsx(K,{children:i.heading}),t.jsx(xe,{children:g(i.body).map((e,i)=>t.jsx(T,{children:e},i))})]},`${e.id}-text-${r}`);if("image"===i.type){var n;const a=null===(n=i.images)||void 0===n?void 0:n[0];return a?t.jsx(Ne,{initial:{scale:.97},whileInView:{scale:1},viewport:ii,transition:ei,children:t.jsx(w,{src:a.src,alt:a.alt,avif:a.avif,webp:a.webp,aspectRatio:a.aspectRatio||"3/2",borderRadius:"8px",objectFit:"cover"})},`${e.id}-image-${r}`):null}return"carousel"===i.type?t.jsx(Ne,{initial:{scale:.97},whileInView:{scale:1},viewport:ii,transition:ei,children:i.images&&i.images.length>0&&t.jsx(C,{images:i.images,showControls:!1,showDots:!1})},`${e.id}-carousel-${r}`):"quote"===i.type?t.jsx(Ne,{initial:{x:30},whileInView:{x:0},viewport:ii,transition:_e,children:t.jsx(We,{children:i.body})},`${e.id}-quote-${r}`):null})}),t.jsx(ze,{$background:e.sectionBackground,children:t.jsxs(Fe,{$fullBleed:l,children:[s&&t.jsx(Se,{$fullBleed:l,children:t.jsx(Ve,{src:s.src,alt:s.alt,avif:s.avif,webp:s.webp,aspectRatio:s.aspectRatio||"16/9",borderRadius:"12px",backgroundColor:s.backgroundColor,imagePaddingBlock:s.imagePaddingBlock,objectFit:s.objectFit||"cover",objectPosition:s.objectPosition||"center",border:s.containerBorder})}),c.length>0&&t.jsx(ti,{tags:c}),m.length>0&&t.jsx(ri,{images:m})]})})]},e.id)})(e);default:return null}};return t.jsxs(B,{children:[t.jsxs(z,{children:[t.jsxs(F,{children:[a&&t.jsx(S,{children:a}),t.jsx(h,{}),t.jsx(H,{initial:{y:30},animate:{y:0},transition:{duration:.8,delay:.2,ease:[.25,.1,.25,1]},children:e.heroHeadline})]}),t.jsx(V,{children:t.jsxs(L,{$backgroundColor:c.backgroundColor,children:[t.jsx(E,{src:c.src,alt:c.alt,avif:c.avif,webp:c.webp,aspectRatio:c.aspectRatio||"16/9",borderRadius:"8px",objectFit:c.objectFit||"cover",objectPosition:c.objectPosition||"center",imageScale:1,border:c.containerBorder,onLoad:()=>d(!0)}),!o&&t.jsx(A,{initial:{opacity:1},animate:{opacity:0},transition:{duration:.4,delay:.3},"aria-hidden":"true"})]})})]}),t.jsx(q,{children:e.sections.map((i,r)=>{const n=e.sections[r-1],a=e.sections[r+1],o=ai.has(i.layout),d=ni.has(i.layout),s=!!n&&ni.has(n.layout),l=!!a&&ni.has(a.layout),c=!i.disableCompactPadding&&!i.heading&&!i.body&&d&&(s||l);return o?t.jsx("div",{children:x(i)},i.id):t.jsx("div",{children:t.jsx(U,{$background:p(i,r%2==0),$compact:c,$padding:i.sectionPadding,children:t.jsx(G,{children:x(i)})})},i.id)})})]})}))}}});
