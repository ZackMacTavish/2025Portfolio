System.register(["./three-legacy-DtSyZuBP.js","./vendor-legacy-BmQ_CjD0.js","./use-reduced-motion-legacy-BrKBsv_h.js"],function(e,i){"use strict";var t,r,a,n,o,d,s,l,c,m;return{setters:[e=>{t=e.j},e=>{r=e.b,a=e.c,n=e.R},e=>{o=e.u,d=e.a,s=e.M,l=e.r,c=e.b,m=e.m}],execute:function(){const i={some:0,all:1};function p(e,{root:t,margin:a,amount:n,once:o=!1,initial:d=!1}={}){const[s,c]=r.useState(d);return r.useEffect(()=>{if(!e.current||o&&s)return;const r={root:t&&t.current||void 0,margin:a,amount:n};return function(e,t,{root:r,margin:a,amount:n="some"}={}){const o=l(e),d=new WeakMap,s=new IntersectionObserver(e=>{e.forEach(e=>{const i=d.get(e.target);if(e.isIntersecting!==Boolean(i))if(e.isIntersecting){const i=t(e.target,e);"function"==typeof i?d.set(e.target,i):s.unobserve(e.target)}else"function"==typeof i&&(i(e),d.delete(e.target))})},{root:r,rootMargin:a,threshold:"number"==typeof n?n:i[n]});return o.forEach(e=>s.observe(e)),()=>s.disconnect()}(e.current,()=>(c(!0),o?void 0:()=>c(!1)),r)},[t,e,a,o,n]),s}function g(e){if(!e)return e;try{return encodeURI(decodeURI(e))}catch{return encodeURI(e)}}const h=a(m.div)`
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: ${e=>e.$borderRadius};
  background: ${e=>e.$backgroundColor||"transparent"};
  ${e=>e.$border?`border: ${e.$border};`:""}

  ${e=>e.$aspectRatio?`\n    aspect-ratio: ${e.$aspectRatio};\n  `:""}
`,u=a.picture`
  display: block;
  width: 100%;
  height: ${e=>e.$fillContainer?"100%":"auto"};
  overflow: hidden;
  border-radius: ${e=>e.$borderRadius};
`,x=a.div`
  position: ${e=>e.$fillContainer?"absolute":"relative"};
  inset: ${e=>e.$fillContainer?`${e.$imagePaddingBlock||"0"} ${e.$imagePaddingInline||"0"}`:"auto"};
  padding-block: ${e=>e.$fillContainer?"0":e.$imagePaddingBlock||"0"};
  padding-inline: ${e=>e.$fillContainer?"0":e.$imagePaddingInline||"0"};
  overflow: hidden;
  border-radius: ${e=>e.$borderRadius};
`,w=a(m.img)`
  display: block;
  width: 100%;
  height: ${e=>e.$fillContainer?e.$hasParallax?"110%":"100%":"auto"};
  object-fit: ${e=>e.$objectFit};
  object-position: ${e=>e.$objectPosition};
  border-radius: ${e=>e.$borderRadius};
`;function f({src:e,alt:i,avif:a,webp:n,aspectRatio:l,parallaxSpeed:m=0,className:p,borderRadius:f="12px",containerBorderRadius:b,backgroundColor:v,imagePaddingBlock:j,imagePaddingInline:y,objectFit:$="cover",objectPosition:k="center",imageScale:R=1,disableRevealAnimation:P=!1,loading:I="lazy",decoding:C="async",onLoad:B,border:z}){const F=r.useRef(null),S=c(),[V,E]=r.useState(()=>"undefined"!=typeof window&&window.innerWidth<768),A=function(e){const i=o(()=>d(e)),{isStatic:t}=r.useContext(s);if(t){const[,t]=r.useState(e);r.useEffect(()=>i.on("change",t),[])}return i}(0);r.useEffect(()=>{if("undefined"==typeof window)return;const e=()=>{E(window.innerWidth<768)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]);const L=60*Math.max(0,m),M=m>0&&!S&&!V,D=Boolean(l),N=null!=b?b:f,H=g(e),q=g(a),U=g(n);return r.useEffect(()=>{if(!M)return void A.set(0);const e=()=>{const e=F.current;if(!e)return;const i=e.getBoundingClientRect(),t=window.innerHeight,r=t+i.height,a=r>0?(t-i.top)/r:.5,n=Math.min(1,Math.max(0,a))*L*2-L;A.set(n)};return e(),window.addEventListener("scroll",e,{passive:!0}),window.addEventListener("resize",e),()=>{window.removeEventListener("scroll",e),window.removeEventListener("resize",e)}},[L,A,M]),t.jsx(h,{ref:F,className:p,$aspectRatio:l,$borderRadius:N,$backgroundColor:v,$border:z,...P?{}:{initial:{opacity:0,y:24},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.2},transition:{duration:.9,ease:[.25,.1,.25,1]}},children:t.jsx(x,{$imagePaddingBlock:j,$imagePaddingInline:y,$fillContainer:D,$borderRadius:f,children:t.jsxs(u,{$fillContainer:D,$borderRadius:f,children:[q&&t.jsx("source",{srcSet:q,type:"image/avif"}),U&&t.jsx("source",{srcSet:U,type:"image/webp"}),t.jsx(w,{src:H,alt:i,loading:I,decoding:C,onLoad:B,style:{y:M?A:0,scale:R},$objectFit:$,$objectPosition:k,$hasParallax:M,$fillContainer:D,$borderRadius:f})]})})})}const b=a.div`
  width: 100%;
`,v=n.forwardRef((e,i)=>{const{$aspectRatio:r,style:a,...n}=e;return t.jsx(m.div,{ref:i,style:{position:"relative",width:"100%",borderRadius:"12px",overflow:"hidden",aspectRatio:r||"3 / 2",maxHeight:"1080px",border:"1px solid rgba(15, 23, 42, 0.08)",...a||{}},...n})});v.displayName="Frame";const j=a.div`
  position: absolute;
  inset: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${e=>e.$visible?1:0};
  transition: opacity 0.2s ease;
  pointer-events: none;
`,y=a.button`
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
`,$=a.button`
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
`,k=a.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
`,R=a(f)`
  width: 100%;
  height: 100%;
`,P=a.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`,I=a.button`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  padding: 0;
  background: ${e=>e.$active?"#333":"#ccc"};
  transform: ${e=>e.$active?"scale(1.3)":"scale(1)"};
  transition: all 0.3s;
`;function C({images:e,autoPlay:i=!1,intervalMs:a=4e3,showControls:n=!0,showDots:o=!0}){r.useEffect(()=>{if(!w.current)return;let e=!1;try{w.current.focus({preventScroll:!0}),e=!0}catch{}},[]);const[d,s]=r.useState(0),[l,c]=r.useState(0),[m,p]=r.useState(!0),[g,h]=r.useState(!1),[u,x]=r.useState(!1),w=r.useRef(null),f=e.length,C=e=>{if(!f)return;const i=(e+f)%f;c(d),p(!1),s(i)},B=()=>C(d+1),z=()=>C(d-1);if(r.useEffect(()=>{if(!i||u||f<2)return;const e=setInterval(()=>{s(e=>(e+1)%f)},a);return()=>clearInterval(e)},[i,a,u,f]),r.useEffect(()=>{f<2||(async()=>{const i=e.flatMap(e=>[e.avif,e.webp,e.src].filter(e=>Boolean(e)));await Promise.all(i.map(e=>(e=>new Promise(i=>{const t=new Image;t.onload=async()=>{if("function"==typeof t.decode)try{await t.decode()}catch{}i()},t.onerror=()=>i(),t.src=e}))(e)))})()},[e,f]),!f)return null;const F=e[d],S=e[l];return t.jsxs(b,{children:[t.jsxs(v,{ref:w,$aspectRatio:F.aspectRatio,tabIndex:0,"data-carousel-frame":"true",onMouseEnter:()=>h(!0),onMouseLeave:()=>h(!1),onKeyDown:e=>{"ArrowRight"===e.key&&(e.preventDefault(),x(!0),B()),"ArrowLeft"===e.key&&(e.preventDefault(),x(!0),z())},drag:"x",dragConstraints:{left:0,right:0},onDragEnd:(e,i)=>{i.offset.x>80?z():i.offset.x<-80&&B()},children:[!m&&t.jsx(k,{style:{zIndex:1},children:t.jsx(R,{src:S.src,alt:S.alt,avif:S.avif,webp:S.webp,aspectRatio:S.aspectRatio||"3/2",borderRadius:S.borderRadius||"8px",backgroundColor:S.backgroundColor,imagePaddingBlock:S.imagePaddingBlock,imagePaddingInline:S.imagePaddingInline,objectFit:S.objectFit||"cover",objectPosition:S.objectPosition||"center",border:S.containerBorder,disableRevealAnimation:!0,loading:"eager",decoding:"auto"},`prev-${S.src}-${l}`)}),t.jsx(k,{style:{zIndex:2},children:t.jsx(R,{src:F.src,alt:F.alt,avif:F.avif,webp:F.webp,aspectRatio:F.aspectRatio||"3/2",borderRadius:F.borderRadius||"8px",backgroundColor:F.backgroundColor,imagePaddingBlock:F.imagePaddingBlock,imagePaddingInline:F.imagePaddingInline,objectFit:F.objectFit||"cover",objectPosition:F.objectPosition||"center",border:F.containerBorder,disableRevealAnimation:!0,loading:"eager",decoding:"auto",onLoad:()=>p(!0),style:{position:m?"relative":"absolute"}},`active-${F.src}-${d}`)}),f>1&&n&&t.jsxs(j,{$visible:g,children:[t.jsx(y,{type:"button",$side:"left","aria-label":"Previous image",onClick:z,children:"‹"}),i&&t.jsx($,{type:"button","aria-label":u?"Resume slideshow":"Pause slideshow",onClick:()=>x(e=>!e),children:u?"▶":"❚❚"}),t.jsx(y,{type:"button",$side:"right","aria-label":"Next image",onClick:B,children:"›"})]})]}),f>1&&o&&t.jsx(P,{children:e.map((e,i)=>t.jsx(I,{type:"button",$active:i===d,"aria-label":`Go to slide ${i+1}`,"aria-current":i===d,onClick:()=>C(i)},`${e.src}-${i}`))})]})}const B=a.div`
  min-height: 100vh;
  background: white;
`,z=a.section`
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
`,F=a.div`
  position: relative;
  z-index: 2;
  margin: 0 auto;
  max-width: 64rem;
`,S=a.div`
  margin-bottom: 1.25rem;
`,V=a.div`
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
`,E=a(f)`
  width: 100%;

  img {
    filter: saturate(0.96);
  }
`,A=a(m.div)`
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
`,L=a.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: ${({$backgroundColor:e})=>e||"transparent"};
  padding-block: ${({$backgroundColor:e})=>e?"clamp(1rem, 2vw, 1.5rem)":"0"};
  border-radius: ${({$backgroundColor:e})=>e?"24px":"0"};
  overflow: hidden;
`,M=a.div`
  margin-bottom: 3rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`,D=a.div`
  text-align: left;
`,N=a.p`
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  color: #a3a3a3;
  text-transform: uppercase;
  margin: 0;
  margin-bottom: 0.5rem;
`,H=a.p`
  font-size: 0.875rem;
  color: #4b5563;
  margin: 0;
`,q=a(m.h1)`
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
`,U=a.div``,W=a.section`
  background: ${e=>e.$background};
  padding: ${e=>e.$compact?"0":"3.75rem 0"};
`,O=a.div`
  margin: 0 auto;
  max-width: 64rem;
`,G=a.h2`
  font-size: 1.875rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1.5rem;
`,K=a.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,T=a.p`
  margin: 0;
  max-width: 68ch;
  font-size: 1rem;
  line-height: 1.625;
  color: #666666;
`,X=a.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`,Y=a(m.div)``,J=a(m.div)`
  overflow: hidden;
  border-radius: 0.5rem;
`,Q=a(f)`
  width: 100%;
  height: 24rem;

  @media (min-width: 768px) {
    height: 100%;
  }
`,Z=a(m.div)`
  overflow: hidden;
  border-radius: 0;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
`,_=a.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;

  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
`,ee=a.p`
  margin-top: 0.75rem;
  font-size: 0.875rem;
  font-style: italic;
  color: #8b8b8b;
`,ie=a.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`,te=a(m.div)`
  overflow: hidden;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover img {
    transform: scale(1.02);
  }
`,re=a(f)`
  width: 100%;

  img {
    transition: transform 0.3s ease-out;
  }
`,ae=a.div`
  display: grid;
  gap: 1rem;

  ${e=>3===e.$count?"\n        grid-template-columns: 1.2fr 0.8fr;\n        grid-template-rows: auto auto;\n      ":4===e.$count?"\n        grid-template-columns: 1fr 1fr 1fr;\n        grid-template-rows: auto auto;\n      ":"\n      grid-template-columns: repeat(3, 1fr);\n      grid-auto-rows: minmax(200px, auto);\n    "}

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 0.75rem;
    grid-template-rows: auto;
    grid-auto-rows: auto;
  }
`,ne=a(m.div)`
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
`,oe=a(f)`
  width: 100%;

  img {
    transition: transform 0.5s ease-out;
  }
`,de=a.section`
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
`,se=a(m.div)`
  display: flex;
  flex-direction: column;
  grid-column: 1;
  grid-row: 1 / span 2;

  @media (max-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
  }
`,le=a.span`
  font-size: 0.85rem;
  line-height: 2.4;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${e=>e.$active?"#000":"#bbb"};
  font-weight: ${e=>e.$active?700:600};

  @media (max-width: 768px) {
    line-height: 1.6;
  }
`,ce=a.div`
  position: relative;
  grid-column: 2;
  grid-row: 1;
`;a(m.div)`
  position: absolute;
  inset: 0;
  margin: -20px;
  border-radius: 14px;
  z-index: 0;
  background: ${e=>e.$accentColor};
`;const me=a(m.div)`
  position: relative;
  z-index: 1;
`,pe=a(f)`
  width: 100%;
`,ge=a(m.div)`
  grid-column: 2;
  grid-row: 2;
`,he=a.h3`
  margin: 0 0 0.35rem;
  font-size: 1.1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #555;
`,ue=a(K)`
  gap: 0.45rem;
`,xe=a(K)`
  gap: 0.6rem;
`,we=a.section`
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
`,fe=a(m.div)`
  border-radius: 12px;
  overflow: hidden;
`,be=a(m.div)`
  margin-top: 0;
  border-radius: 12px;
  overflow: hidden;

  @media (max-width: 768px) {
    margin-top: 0;
  }
`,ve=a(f)`
  width: 100%;
`,je=a.p`
  margin: 2rem auto 0;
  max-width: 600px;
  text-align: center;
  font-size: 0.95rem;
  color: #888;
`,ye=a.div`
  margin: 0;
  max-width: 45rem;
`,$e=a(m.div)``,ke=a(T)`
  font-size: clamp(1rem, 1.15vw, 1.15rem);
  line-height: 1.65;
  max-width: 62ch;
  text-wrap: pretty;
`,Re=a.div`
  margin: 0 auto;
  max-width: 800px;
  padding: 5rem 6%;
`,Pe=a(m.div)`
  border-left: 3px solid ${e=>e.$accentColor||"#333"};
  padding-left: 2rem;
  margin-left: 0;

  ${e=>e.$accentColor?`\n    background: ${e.$accentColor}12;\n    padding: 3rem 2.5rem;\n    border-radius: 0 12px 12px 0;\n  `:""}
`,Ie=a.p`
  margin: 0;
  text-align: left;
  font-size: clamp(1.2rem, 2.1vw, 1.55rem);
  font-style: italic;
  line-height: 1.5;
  color: #1a1a1a;
  text-wrap: balance;
`,Ce=a.cite`
  display: block;
  margin-top: 1.5rem;
  font-size: 0.85rem;
  font-style: normal;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #999;
`,Be=a.section`
  display: flex;
  flex-direction: column;
  gap: 0;
  padding: 0 0 4rem;
`,ze=a.div`
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  padding: 0;
  background: white;
`,Fe=a.div`
  position: relative;
  width: min(65vw, 1080px);
  margin: 0 auto;
  padding-top: ${e=>e.$fullBleed?"0":"1.5rem"};

  @media (max-width: 1024px) {
    width: min(72vw, 980px);
  }

  @media (max-width: 768px) {
    width: calc(100vw - 2.5rem);
    padding-top: ${e=>e.$fullBleed?"0":"1rem"};
  }
`,Se=a.div`
  position: relative;
  min-height: 0;
  height: clamp(340px, 46vw, 680px);

  ${e=>e.$fullBleed?"\n    width: 100vw;\n    margin-left: calc(-50vw + 50%);\n  ":""}

  @media (max-width: 768px) {
    height: clamp(260px, 58vw, 460px);
  }
`,Ve=a(f)`
  height: 100%;
`,Ee=a.div`
  margin-top: 1rem;
  padding: 0 1.25rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.25rem;
`,Ae=a.span`
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #888;
  padding: 0.25rem 0;
`,Le=a.span`
  color: #9a9a9a;
  margin: 0 0.25rem;
`,Me=a.div`
  margin-top: 1rem;
  padding: 0 0 1.25rem;
`,De=a.div`
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
`,Ne=a(m.div)`
  margin-bottom: 3rem;

  &:last-child {
    margin-bottom: 0;
  }
`,He=a.p`
  margin: 0;
  border-left: 3px solid currentColor;
  padding-left: 1.5rem;
  text-align: left;
  font-size: 1.5rem;
  font-style: italic;
  line-height: 1.5;
  color: #222;
`,qe=a.section`
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
`,Ue=a(m.div)`
  position: relative;
  width: 100%;
  height: min(92vh, 920px);

  @media (max-width: 768px) {
    height: min(78vh, 620px);
  }
`,We=a(f)`
  height: 100%;
  border-radius: 0;
`,Oe=a.div`
  position: relative;
  z-index: 2;
  padding: 2.5rem 6% 3.5rem;
  background: white;

  @media (max-width: 768px) {
    padding: 2rem 1.25rem;
  }
`,Ge=a(m.h2)`
  color: #111;
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  line-height: 1.15;
  max-width: 700px;
  margin: 0 0 1rem;
`,Ke=a(m.p)`
  margin: 0;
  color: #222;
  font-size: 1.05rem;
  line-height: 1.7;
  max-width: 540px;
`,Te=a.section`
  position: relative;
  padding: 3.5rem 0;
`,Xe=a.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 64rem;
`;a(m.div)`
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
`;const Ye=a(m.div)`
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
`,Je=a(f)`
  width: 100%;
`,Qe=a.div`
  position: relative;
  z-index: 1;
  max-width: 45rem;
  margin: 2.5rem 0 0;
  text-align: left;
`;a.section`
  border-top: 1px solid #e5e7eb;
  background: white;
  padding: 4rem 1.5rem 6rem;

  @media (min-width: 768px) {
    padding: 6rem 1.5rem;
  }
`,a.div`
  margin: 0 auto;
  max-width: 64rem;
`,a.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 2rem;
`,a.p`
  margin: 0;
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  color: #9ca3af;
  text-transform: uppercase;
`,a.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`,a.button`
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
`;const Ze=a(m.button)`
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
`;a.p`
  font-size: 0.875rem;
  letter-spacing: 0.1em;
  color: #a3a3a3;
  text-transform: uppercase;
  margin: 0;
`,a.h3`
  margin-top: 0.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;

  @media (min-width: 768px) {
    margin-top: 0;
    font-size: 1.875rem;
  }
`,a.div`
  font-size: 1.5rem;
  color: #a3a3a3;
  transition: color 200ms;

  ${Ze}:hover & {
    color: #111827;
  }
`;const _e={duration:.7,ease:[.25,.1,.25,1]},ei={duration:.9,ease:[.25,.1,.25,1]},ii={once:!0,amount:.2};function ti({tags:e}){const i=r.useRef(null),a=p(i,{once:!0,margin:"100px"});return t.jsx("div",{ref:i,children:a&&t.jsx(Ee,{children:e.map((i,r)=>t.jsx(m.div,{initial:{opacity:0,y:8},animate:{opacity:1,y:0},transition:{duration:.35,delay:.04*r},children:t.jsxs(Ae,{children:[i,r<e.length-1&&t.jsx(Le,{children:"•"})]})},`${i}-${r}`))})})}function ri({images:e}){const i=r.useRef(null),a=p(i,{once:!0,margin:"100px"});return t.jsx("div",{ref:i,children:a&&t.jsx(Me,{children:t.jsx(m.div,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{duration:.45},children:t.jsx(C,{images:e,autoPlay:!0,intervalMs:2800})})})})}const ai=new Set(["full-width-image","parallax-reveal","image-pair","staggered-pair"]),ni=new Set(["sticky-split","parallax-reveal"]);e("C",r.memo(function({caseStudy:e,nextProject:i,onNextProject:a,topAction:n}){const[o,d]=r.useState(!1),[s,l]=r.useState("idle"),c=e.heroImage||e.coverImage,p=e=>e?e.split("\n\n").filter(e=>e.trim()):[],g=(e,i)=>{const t=(e=>{if(!e)return null;const i=e.trim(),t=/^#([0-9a-fA-F]{3})$/,r=/^#([0-9a-fA-F]{6})$/;if(t.test(i)){const[,e]=i.match(t);return`rgba(${parseInt(e[0]+e[0],16)}, ${parseInt(e[1]+e[1],16)}, ${parseInt(e[2]+e[2],16)}, 0.06)`}if(r.test(i)){const[,e]=i.match(r);return`rgba(${parseInt(e.slice(0,2),16)}, ${parseInt(e.slice(2,4),16)}, ${parseInt(e.slice(4,6),16)}, 0.06)`}return null})(e.accentColor);return t||(i?"white":"#f5f5f5")},h=()=>t.jsxs(M,{children:[t.jsxs(D,{children:[t.jsx(N,{children:"Client"}),t.jsx(H,{children:e.meta.client})]}),t.jsxs(D,{children:[t.jsx(N,{children:"Role"}),t.jsx(H,{children:e.meta.role})]}),t.jsxs(D,{children:[t.jsx(N,{children:"Timeline"}),t.jsx(H,{children:e.meta.timeline})]}),t.jsxs(D,{children:[t.jsx(N,{children:"Platform"}),t.jsx(H,{children:e.meta.platform})]})]}),u=e=>t.jsxs("div",{children:[(e.heading||e.body)&&t.jsx(ye,{style:{marginBottom:"2.5rem"},children:t.jsxs($e,{children:[e.heading&&t.jsx(G,{children:e.heading}),e.body&&t.jsx(K,{style:{alignItems:"flex-start"},children:p(e.body).map((e,i)=>t.jsx(T,{style:{textAlign:"left"},children:e},i))})]})}),t.jsx(Z,{initial:{opacity:0,scale:.97},whileInView:{opacity:1,scale:1},viewport:ii,transition:ei,children:e.images&&e.images[0]&&t.jsx(Q,{src:e.images[0].src,alt:e.images[0].alt,avif:e.images[0].avif,webp:e.images[0].webp,aspectRatio:e.images[0].aspectRatio||"16/9",borderRadius:"8px",objectFit:e.images[0].objectFit||"cover",objectPosition:e.images[0].objectPosition,backgroundColor:e.images[0].backgroundColor,imagePaddingBlock:e.images[0].imagePaddingBlock,border:e.images[0].containerBorder,style:{width:"100%"}})}),e.caption&&t.jsx(ee,{children:e.caption})]},e.id),x=e=>{switch(e.layout){case"text-left-image-right":return(e=>t.jsx("div",{children:t.jsxs(X,{children:[t.jsxs(Y,{initial:{opacity:0,x:-30},whileInView:{opacity:1,x:0},viewport:ii,transition:_e,children:[e.heading&&t.jsx(G,{children:e.heading}),t.jsx(K,{children:p(e.body).map((e,i)=>t.jsx(T,{children:e},i))})]}),e.images&&e.images[0]&&t.jsx(J,{initial:{opacity:0,x:30},whileInView:{opacity:1,x:0},viewport:ii,transition:ei,children:t.jsx(Q,{src:e.images[0].src,alt:e.images[0].alt,avif:e.images[0].avif,webp:e.images[0].webp,aspectRatio:e.images[0].aspectRatio||"3/2",borderRadius:"8px",objectFit:"cover"})})]})},e.id))(e);case"text-right-image-left":return(e=>t.jsx("div",{children:t.jsxs(X,{children:[e.images&&e.images[0]&&t.jsx(J,{style:{order:2},initial:{opacity:0,x:-30},whileInView:{opacity:1,x:0},viewport:ii,transition:ei,children:t.jsx(Q,{src:e.images[0].src,alt:e.images[0].alt,avif:e.images[0].avif,webp:e.images[0].webp,aspectRatio:e.images[0].aspectRatio||"3/2",borderRadius:"8px",objectFit:"cover"})}),t.jsxs(Y,{style:{order:1},initial:{opacity:0,x:30},whileInView:{opacity:1,x:0},viewport:ii,transition:_e,children:[e.heading&&t.jsx(G,{children:e.heading}),t.jsx(K,{children:p(e.body).map((e,i)=>t.jsx(T,{children:e},i))})]})]})},e.id))(e);case"full-width-image":return u(e);case"image-pair":return(e=>t.jsxs("div",{children:[e.heading&&t.jsx(G,{children:e.heading}),t.jsx(_,{children:e.images&&e.images.slice(0,2).map((e,i)=>t.jsx(te,{initial:{opacity:0,scale:.97},whileInView:{opacity:1,scale:1},viewport:ii,transition:{...ei,delay:.15*i},children:t.jsx(re,{src:e.src,alt:e.alt,avif:e.avif,webp:e.webp,aspectRatio:e.aspectRatio||"3/2",borderRadius:"0",objectFit:"contain",style:{height:"26rem"}})},i))})]},e.id))(e);case"gallery-grid":return(e=>t.jsxs("div",{children:[e.heading&&t.jsx(G,{children:e.heading}),t.jsx(ie,{children:e.images&&e.images.map((e,i)=>t.jsx(te,{initial:{opacity:0,scale:.95},whileInView:{opacity:1,scale:1},viewport:ii,whileHover:{scale:1.02},transition:{...ei,delay:.1*i},children:t.jsx(re,{src:e.src,alt:e.alt,avif:e.avif,webp:e.webp,aspectRatio:e.aspectRatio||"1/1",borderRadius:"8px",objectFit:"cover"})},i))})]},e.id))(e);case"asymmetric-mosaic":return(e=>{const i=e.images||[];return t.jsxs("div",{children:[e.heading&&t.jsx(G,{children:e.heading}),t.jsx(ae,{$count:i.length,children:i.map((e,r)=>t.jsx(ne,{$index:r,$count:i.length,initial:{opacity:0,y:20,scale:.97},whileInView:{opacity:1,y:0,scale:1},viewport:{once:!0,amount:.2},transition:{..._e,delay:.08*r},children:t.jsx(oe,{src:e.src,alt:e.alt,avif:e.avif,webp:e.webp,aspectRatio:e.aspectRatio||"4/3",borderRadius:"10px",objectFit:"cover"})},`${e.src}-${r}`))})]},e.id)})(e);case"three-column-feature":return(e=>{var i;const r=null===(i=e.images)||void 0===i?void 0:i[0],a=e.labels||[];return t.jsxs(de,{children:[t.jsx(se,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},viewport:{once:!0,amount:.2},transition:_e,children:a.map((e,i)=>t.jsx(le,{$active:0===i,children:e},`${e}-${i}`))}),t.jsx(ce,{children:r&&t.jsx(me,{initial:{opacity:0,y:24},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.2},transition:ei,children:t.jsx(pe,{src:r.src,alt:r.alt,avif:r.avif,webp:r.webp,aspectRatio:r.aspectRatio||"4/5",borderRadius:"12px",objectFit:r.objectFit||"cover",objectPosition:r.objectPosition,backgroundColor:r.backgroundColor,imagePaddingBlock:r.imagePaddingBlock})})}),t.jsxs(ge,{initial:{opacity:0,x:20},whileInView:{opacity:1,x:0},viewport:{once:!0,amount:.2},transition:_e,children:[e.heading&&t.jsx(he,{children:e.heading}),t.jsx(ue,{children:p(e.body).map((e,i)=>t.jsx(T,{children:e},i))})]})]},e.id)})(e);case"staggered-pair":return(e=>{const i=e.images||[];if(i.length<=1)return u(e);const r=i[0],a=i[1],n=Boolean(e.heading);return t.jsxs("div",{children:[n&&t.jsx(ye,{children:t.jsxs($e,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:ii,transition:_e,children:[t.jsx(G,{style:{textAlign:"left"},children:e.heading}),e.body&&t.jsx(K,{style:{alignItems:"flex-start"},children:p(e.body).map((e,i)=>t.jsx(ke,{style:{textAlign:"left"},children:e},i))})]})}),t.jsxs(we,{children:[t.jsx(fe,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.2},transition:ei,children:t.jsx(ve,{src:r.src,alt:r.alt,avif:r.avif,webp:r.webp,aspectRatio:r.aspectRatio,borderRadius:"12px",backgroundColor:r.backgroundColor,imagePaddingBlock:r.imagePaddingBlock,objectFit:r.objectFit||"cover",objectPosition:r.objectPosition,border:r.containerBorder})}),t.jsx(be,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.2},transition:{...ei,delay:.15},children:t.jsx(ve,{src:a.src,alt:a.alt,avif:a.avif,webp:a.webp,aspectRatio:a.aspectRatio,borderRadius:"12px",backgroundColor:a.backgroundColor,imagePaddingBlock:a.imagePaddingBlock,objectFit:a.objectFit||"cover",objectPosition:a.objectPosition||"top center",border:a.containerBorder})})]}),!n&&e.body&&t.jsx(je,{children:e.body})]},e.id)})(e);case"text-only":return(e=>t.jsx("div",{children:t.jsx(ye,{children:t.jsxs($e,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:ii,transition:_e,children:[e.heading&&t.jsx(G,{style:{textAlign:"left"},children:e.heading}),t.jsx(K,{style:{alignItems:"flex-start"},children:p(e.body).map((e,i)=>t.jsx(ke,{style:{textAlign:"left"},children:e},i))})]})})},e.id))(e);case"quote":return(e=>t.jsx("div",{children:t.jsx(Re,{children:t.jsxs(Pe,{$accentColor:e.accentColor,initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:ii,transition:_e,children:[t.jsx(Ie,{children:e.body}),e.heading&&t.jsx(Ce,{children:e.heading})]})})},e.id))(e);case"image-carousel":return(e=>t.jsxs("div",{children:[e.heading&&t.jsx(G,{children:e.heading}),e.images&&e.images.length>0&&t.jsx(m.div,{initial:{opacity:0,scale:.97},whileInView:{opacity:1,scale:1},viewport:ii,transition:ei,children:t.jsx(C,{images:e.images})})]},e.id))(e);case"parallax-reveal":return(e=>{var i,r;const a=null===(i=e.images)||void 0===i?void 0:i[0];return a?t.jsxs(qe,{children:[t.jsx(Ue,{children:t.jsx(We,{src:a.src,alt:a.alt,avif:a.avif,webp:a.webp,parallaxSpeed:null!==(r=e.parallaxSpeed)&&void 0!==r?r:.4,objectFit:"cover"})}),t.jsxs(Oe,{children:[e.heading&&t.jsx(Ge,{initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:ii,transition:_e,children:e.heading}),e.body&&t.jsx(Ke,{initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:ii,transition:{..._e,delay:.15},children:e.body})]})]},e.id):null})(e);case"image-on-color-block":return(e=>{var i;const r=null===(i=e.images)||void 0===i?void 0:i[0];return r?t.jsx(Te,{children:t.jsxs(Xe,{children:[t.jsx(Ye,{$containerBorder:r.containerBorder,$containerShadow:r.containerShadow,initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:ii,transition:ei,children:t.jsx(Je,{src:r.src,alt:r.alt,avif:r.avif,webp:r.webp,aspectRatio:r.aspectRatio,borderRadius:r.borderRadius||"12px",containerBorderRadius:r.containerBorderRadius,objectFit:r.objectFit||"cover",objectPosition:r.objectPosition,imageScale:r.imageScale,backgroundColor:r.backgroundColor,imagePaddingBlock:r.imagePaddingBlock,imagePaddingInline:r.imagePaddingInline})}),(e.heading||e.body)&&t.jsxs(Qe,{children:[e.heading&&t.jsx(G,{children:e.heading}),e.body&&t.jsx(K,{style:{alignItems:"flex-start"},children:p(e.body).map((e,i)=>t.jsx(T,{style:{textAlign:"left"},children:e},i))})]})]})},e.id):null})(e);case"sticky-split":return(e=>{var i,r,a,n,o,d;const s=(null===(i=e.stickyContent)||void 0===i?void 0:i.image)||(null===(r=e.images)||void 0===r?void 0:r[0]),l=(null===(a=e.stickyContent)||void 0===a?void 0:a.fullBleedImage)||!1,c=(null===(n=e.stickyContent)||void 0===n?void 0:n.tags)||[],m=(null===(o=e.stickyContent)||void 0===o?void 0:o.collateralImages)||[],g=(null===(d=e.scrollContent)||void 0===d?void 0:d.blocks)||[];return t.jsxs(Be,{children:[t.jsx(De,{children:g.map((i,r)=>{if("text"===i.type)return t.jsxs(Ne,{initial:{opacity:0,x:20},whileInView:{opacity:1,x:0},viewport:ii,transition:_e,children:[i.heading&&t.jsx(G,{children:i.heading}),t.jsx(xe,{children:p(i.body).map((e,i)=>t.jsx(T,{children:e},i))})]},`${e.id}-text-${r}`);if("image"===i.type){var a;const n=null===(a=i.images)||void 0===a?void 0:a[0];return n?t.jsx(Ne,{initial:{opacity:0,scale:.97},whileInView:{opacity:1,scale:1},viewport:ii,transition:ei,children:t.jsx(f,{src:n.src,alt:n.alt,avif:n.avif,webp:n.webp,aspectRatio:n.aspectRatio||"3/2",borderRadius:"8px",objectFit:"cover"})},`${e.id}-image-${r}`):null}return"carousel"===i.type?t.jsx(Ne,{initial:{opacity:0,scale:.97},whileInView:{opacity:1,scale:1},viewport:ii,transition:ei,children:i.images&&i.images.length>0&&t.jsx(C,{images:i.images,showControls:!1,showDots:!1})},`${e.id}-carousel-${r}`):"quote"===i.type?t.jsx(Ne,{initial:{opacity:0,x:30},whileInView:{opacity:1,x:0},viewport:ii,transition:_e,children:t.jsx(He,{children:i.body})},`${e.id}-quote-${r}`):null})}),t.jsx(ze,{children:t.jsxs(Fe,{$fullBleed:l,children:[s&&t.jsx(Se,{$fullBleed:l,children:t.jsx(Ve,{src:s.src,alt:s.alt,avif:s.avif,webp:s.webp,aspectRatio:s.aspectRatio||"16/9",borderRadius:"12px",backgroundColor:s.backgroundColor,imagePaddingBlock:s.imagePaddingBlock,objectFit:s.objectFit||"cover",objectPosition:s.objectPosition||"center",border:s.containerBorder})}),c.length>0&&t.jsx(ti,{tags:c}),m.length>0&&t.jsx(ri,{images:m})]})})]},e.id)})(e);default:return null}};return t.jsxs(B,{children:[t.jsxs(z,{children:[t.jsxs(F,{children:[n&&t.jsx(S,{children:n}),t.jsx(h,{}),t.jsx(q,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.2,ease:[.25,.1,.25,1]},children:e.heroHeadline})]}),t.jsx(V,{children:t.jsxs(L,{$backgroundColor:c.backgroundColor,children:[t.jsx(E,{src:c.src,alt:c.alt,avif:c.avif,webp:c.webp,aspectRatio:c.aspectRatio||"16/9",borderRadius:"8px",objectFit:c.objectFit||"cover",objectPosition:c.objectPosition||"center",imageScale:1,border:c.containerBorder,onLoad:()=>d(!0)}),!o&&t.jsx(A,{initial:{opacity:1},animate:{opacity:0},transition:{duration:.4,delay:.3},"aria-hidden":"true"})]})})]}),t.jsx(U,{children:e.sections.map((i,r)=>{const a=e.sections[r-1],n=e.sections[r+1],o=ni.has(i.layout),d=ai.has(i.layout),s=!!a&&ai.has(a.layout),l=!!n&&ai.has(n.layout),c=!i.disableCompactPadding&&!i.heading&&!i.body&&d&&(s||l);return o?t.jsx("div",{children:x(i)},i.id):t.jsx(m.div,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0,margin:"200px"},transition:{duration:.6,ease:"easeOut"},children:t.jsx(W,{$background:g(i,r%2==0),$compact:c,children:t.jsx(O,{children:x(i)})})},i.id)})})]})}))}}});
