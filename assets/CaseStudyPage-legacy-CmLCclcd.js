System.register(["./three-legacy-pzFKRJSU.js","./vendor-legacy-Dy2oZrq6.js","./index-legacy-BYJUkOj0.js"],function(e,i){"use strict";var t,r,n,o,a,d,s,l,c,m,g,p;return{setters:[e=>{t=e.j},e=>{r=e.b,n=e.c,o=e.R,a=e.i},e=>{d=e.u,s=e.b,l=e.M,c=e.r,m=e.d,g=e.m,p=e.A}],execute:function(){function i(e){const i=d(()=>s(e)),{isStatic:t}=r.useContext(l);if(t){const[,t]=r.useState(e);r.useEffect(()=>i.on("change",t),[])}return i}const h={some:0,all:1};function u(e,{root:i,margin:t,amount:n,once:o=!1,initial:a=!1}={}){const[d,s]=r.useState(a);return r.useEffect(()=>{if(!e.current||o&&d)return;const r={root:i&&i.current||void 0,margin:t,amount:n};return function(e,i,{root:t,margin:r,amount:n="some"}={}){const o=c(e),a=new WeakMap,d=new IntersectionObserver(e=>{e.forEach(e=>{const t=a.get(e.target);if(e.isIntersecting!==Boolean(t))if(e.isIntersecting){const t=i(e.target,e);"function"==typeof t?a.set(e.target,t):d.unobserve(e.target)}else"function"==typeof t&&(t(e),a.delete(e.target))})},{root:t,rootMargin:r,threshold:"number"==typeof n?n:h[n]});return o.forEach(e=>d.observe(e)),()=>d.disconnect()}(e.current,()=>(s(!0),o?void 0:()=>s(!1)),r)},[i,e,t,o,n]),d}function x(e){if(!e)return e;try{return encodeURI(decodeURI(e))}catch{return encodeURI(e)}}const f=n(g.div)`
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: ${e=>e.$borderRadius};
  background: ${e=>e.$backgroundColor||"transparent"};
  ${e=>e.$border?`border: ${e.$border};`:""}

  ${e=>e.$aspectRatio?`\n    aspect-ratio: ${e.$aspectRatio};\n  `:""}
`,b=n.picture`
  display: block;
  width: 100%;
  height: ${e=>e.$fillContainer?"100%":"auto"};
  overflow: hidden;
  border-radius: ${e=>e.$borderRadius};
`,w=n.div`
  position: ${e=>e.$fillContainer?"absolute":"relative"};
  inset: ${e=>e.$fillContainer?`${e.$imagePaddingBlock||"0"} ${e.$imagePaddingInline||"0"}`:"auto"};
  padding-block: ${e=>e.$fillContainer?"0":e.$imagePaddingBlock||"0"};
  padding-inline: ${e=>e.$fillContainer?"0":e.$imagePaddingInline||"0"};
  overflow: hidden;
  border-radius: ${e=>e.$borderRadius};
`,v=n(g.img)`
  display: block;
  width: 100%;
  height: ${e=>e.$fillContainer?e.$hasParallax?"110%":"100%":"auto"};
  object-fit: ${e=>e.$objectFit};
  object-position: ${e=>e.$objectPosition};
  border-radius: ${e=>e.$borderRadius};
`;function j({src:e,alt:n,avif:o,webp:a,aspectRatio:d,parallaxSpeed:s=0,className:l,borderRadius:c="12px",containerBorderRadius:g,backgroundColor:p,imagePaddingBlock:h,imagePaddingInline:u,objectFit:j="cover",objectPosition:y="center",imageScale:$=1,disableRevealAnimation:k=!1,loading:R="lazy",decoding:C="async",onLoad:I,border:P,mixBlendMode:B}){const z=r.useRef(null),F=m(),[S,M]=r.useState(()=>"undefined"!=typeof window&&window.innerWidth<768),V=i(0);r.useEffect(()=>{if("undefined"==typeof window)return;const e=()=>{M(window.innerWidth<768)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]);const E=60*Math.max(0,s),T=s>0&&!F&&!S,L=Boolean(d),A=null!=g?g:c,N=x(e),W=x(o),D=x(a);return r.useEffect(()=>{if(!T)return void V.set(0);const e=()=>{const e=z.current;if(!e)return;const i=e.getBoundingClientRect(),t=window.innerHeight,r=t+i.height,n=r>0?(t-i.top)/r:.5,o=Math.min(1,Math.max(0,n))*E*2-E;V.set(o)};return e(),window.addEventListener("scroll",e,{passive:!0}),window.addEventListener("resize",e),()=>{window.removeEventListener("scroll",e),window.removeEventListener("resize",e)}},[E,V,T]),t.jsx(f,{ref:z,className:l,$aspectRatio:d,$borderRadius:A,$backgroundColor:p,$border:P,...k?{}:{initial:{opacity:0,y:24},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.2},transition:{duration:.9,ease:[.25,.1,.25,1]}},children:t.jsx(w,{$imagePaddingBlock:h,$imagePaddingInline:u,$fillContainer:L,$borderRadius:c,children:t.jsxs(b,{$fillContainer:L,$borderRadius:c,children:[W&&t.jsx("source",{srcSet:W,type:"image/avif"}),D&&t.jsx("source",{srcSet:D,type:"image/webp"}),t.jsx(v,{src:N,alt:n,loading:R,decoding:C,onLoad:I,style:{y:T?V:0,scale:$,mixBlendMode:B},$objectFit:j,$objectPosition:y,$hasParallax:T,$fillContainer:L,$borderRadius:c})]})})})}const y=n.div`
  width: 100%;
`,$=o.forwardRef((e,i)=>{const{$aspectRatio:r,style:n,...o}=e;return t.jsx(g.div,{ref:i,style:{position:"relative",width:"100%",borderRadius:"8px",overflow:"hidden",aspectRatio:r||"3 / 2",maxHeight:"1080px",...n||{}},...o})});$.displayName="Frame";const k=n.div`
  position: absolute;
  inset: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${e=>e.$visible?1:0};
  transition: opacity 0.2s ease;
  pointer-events: none;
`,R=n.button`
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
`,C=n.button`
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
`,I=n.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  transition: opacity 320ms ease;
`,P=n(j)`
  width: 100%;
  height: 100%;
`,B=n.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`,z=n.button`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  padding: 0;
  background: ${e=>e.$active?"var(--text-strong, #333)":"var(--border, #ccc)"};
  transform: ${e=>e.$active?"scale(1.3)":"scale(1)"};
  transition: all 0.3s;
`;function F({images:e,autoPlay:i=!1,intervalMs:n=4e3,showControls:o=!0,showDots:a=!0}){r.useEffect(()=>{if(!f.current)return;let e=!1;try{f.current.focus({preventScroll:!0}),e=!0}catch{}},[]);const[d,s]=r.useState(0),[l,c]=r.useState(0),[m,g]=r.useState(!0),[p,h]=r.useState(!1),[u,x]=r.useState(!1),f=r.useRef(null),b=e.length,w=e=>{if(!b)return;const i=(e+b)%b;c(d),g(!1),s(i)},v=()=>w(d+1),j=()=>w(d-1);if(r.useEffect(()=>{if(!i||u||b<2)return;const e=setInterval(()=>{s(e=>(e+1)%b)},n);return()=>clearInterval(e)},[i,n,u,b]),r.useEffect(()=>{b<2||(async()=>{const i=e.flatMap(e=>[e.avif,e.webp,e.src].filter(e=>Boolean(e)));await Promise.all(i.map(e=>(e=>new Promise(i=>{const t=new Image;t.onload=async()=>{if("function"==typeof t.decode)try{await t.decode()}catch{}i()},t.onerror=()=>i(),t.src=e}))(e)))})()},[e,b]),!b)return null;const F=e[d],S=e[l];return t.jsxs(y,{children:[t.jsxs($,{ref:f,$aspectRatio:F.aspectRatio,tabIndex:0,"data-carousel-frame":"true",onMouseEnter:()=>h(!0),onMouseLeave:()=>h(!1),onKeyDown:e=>{"ArrowRight"===e.key&&(e.preventDefault(),x(!0),v()),"ArrowLeft"===e.key&&(e.preventDefault(),x(!0),j())},drag:"x",dragConstraints:{left:0,right:0},onDragEnd:(e,i)=>{i.offset.x>80?j():i.offset.x<-80&&v()},children:[!m&&t.jsx(I,{style:{zIndex:1},children:t.jsx(P,{src:S.src,alt:S.alt,avif:S.avif,webp:S.webp,aspectRatio:S.aspectRatio||"3/2",borderRadius:S.borderRadius||"8px",backgroundColor:S.backgroundColor,imagePaddingBlock:S.imagePaddingBlock,imagePaddingInline:S.imagePaddingInline,objectFit:S.objectFit||"cover",objectPosition:S.objectPosition||"center",border:S.containerBorder,disableRevealAnimation:!0,loading:"eager",decoding:"auto"},`prev-${S.src}-${l}`)}),t.jsx(I,{style:{zIndex:2},children:t.jsx(P,{src:F.src,alt:F.alt,avif:F.avif,webp:F.webp,aspectRatio:F.aspectRatio||"3/2",borderRadius:F.borderRadius||"8px",backgroundColor:F.backgroundColor,imagePaddingBlock:F.imagePaddingBlock,imagePaddingInline:F.imagePaddingInline,objectFit:F.objectFit||"cover",objectPosition:F.objectPosition||"center",border:F.containerBorder,disableRevealAnimation:!0,loading:"eager",decoding:"auto",onLoad:()=>g(!0),style:{position:m?"relative":"absolute"}},`active-${F.src}-${d}`)}),b>1&&o&&t.jsxs(k,{$visible:p,children:[t.jsx(R,{type:"button",$side:"left","aria-label":"Previous image",onClick:j,children:t.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:t.jsx("polyline",{points:"15 6 9 12 15 18"})})}),i&&t.jsx(C,{type:"button","aria-label":u?"Resume slideshow":"Pause slideshow",onClick:()=>x(e=>!e),children:u?"▶":"❚❚"}),t.jsx(R,{type:"button",$side:"right","aria-label":"Next image",onClick:v,children:t.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:t.jsx("polyline",{points:"9 6 15 12 9 18"})})})]})]}),b>1&&a&&t.jsx(B,{children:e.map((e,i)=>t.jsx(z,{type:"button",$active:i===d,"aria-label":`Go to slide ${i+1}`,"aria-current":i===d,onClick:()=>w(i)},`${e.src}-${i}`))})]})}const S=n(g.button)`
  appearance: none;
  background: transparent;
  border: 0;
  padding: 0;
  margin: 0;
  display: block;
  width: 100%;
  cursor: zoom-in;
  border-radius: inherit;
  position: relative;

  &:focus-visible {
    outline: 2px solid #38bdf8;
    outline-offset: 4px;
  }
`,M=n.span`
  position: absolute;
  top: clamp(0.75rem, 1.5vw, 1rem);
  right: clamp(0.75rem, 1.5vw, 1rem);
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.45rem 0.7rem 0.45rem 0.55rem;
  border-radius: 999px;
  background: rgba(15, 15, 15, 0.78);
  color: #fff;
  font-family: "Space Grotesk", sans-serif;
  font-size: 0.78rem;
  letter-spacing: 0.04em;
  border: 1px solid rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  opacity: 0;
  transform: translateY(-4px);
  transition: opacity 0.18s ease, transform 0.18s ease;
  pointer-events: none;

  svg {
    width: 1rem;
    height: 1rem;
    display: block;
  }

  ${S}:hover &,
  ${S}:focus-visible & {
    opacity: 1;
    transform: translateY(0);
  }
`,V=n(g.div)`
  position: fixed;
  inset: 0;
  z-index: 2000;
  background: rgba(10, 10, 10, 0.88);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(1rem, 4vw, 3rem);
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
`,E=n(g.div)`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  touch-action: none;
  cursor: inherit;
`,T=n(g.div)`
  position: relative;
  width: min(95vw, ${e=>92*e.$ratio}vh, 1800px);
  aspect-ratio: ${e=>e.$ratio};
  max-height: 92vh;
  cursor: inherit;
  will-change: transform;
  display: flex;
  align-items: stretch;
  justify-content: stretch;

  > * {
    width: 100%;
    height: 100%;
    user-select: none;
    -webkit-user-drag: none;
    pointer-events: none;
  }
`,L=n.button`
  position: absolute;
  top: clamp(0.75rem, 2vw, 1.25rem);
  right: clamp(0.75rem, 2vw, 1.25rem);
  z-index: 2;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.35);
  background: rgba(0, 0, 0, 0.55);
  color: #fff;
  font-size: 1.5rem;
  line-height: 1;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background 0.18s ease, transform 0.18s ease;
  &:hover {
    background: rgba(0, 0, 0, 0.75);
    transform: scale(1.04);
  }

  &:focus-visible {
    outline: 2px solid #38bdf8;
    outline-offset: 3px;
  }
`,A=n.div`
  position: fixed;
  left: 50%;
  bottom: clamp(0.75rem, 2.5vw, 1.5rem);
  transform: translateX(-50%);
  z-index: 3;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(10px);
  color: rgba(255, 255, 255, 0.92);
  font-family: "Space Grotesk", sans-serif;
  font-size: 0.82rem;
  letter-spacing: 0.03em;
  white-space: nowrap;
  pointer-events: auto;
`,N=n.button`
  appearance: none;
  width: 2rem;
  height: 2rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  background: rgba(255, 255, 255, 0.06);
  color: #fff;
  font-size: 1rem;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.15s ease, transform 0.15s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.18);
  }

  &:focus-visible {
    outline: 2px solid #38bdf8;
    outline-offset: 2px;
  }
`,W=n.span`
  width: 1px;
  height: 1.25rem;
  background: rgba(255, 255, 255, 0.18);
  margin: 0 0.35rem;
`,D=n.span`
  padding: 0 0.35rem;
  color: rgba(255, 255, 255, 0.78);
  font-size: 0.78rem;

  @media (max-width: 640px) {
    display: none;
  }
`,H=.18;function Y(e){const i=e.trim();if(i.includes("/")){const[e,t]=i.split("/").map(e=>parseFloat(e));if(e&&t)return e/t}const t=parseFloat(i);return Number.isFinite(t)&&t>0?t:16/9}function q({id:e,className:n,children:o,overlayContent:d,ariaLabel:s="Open image in full-screen viewer",aspectRatio:l="16/9"}){const[c,g]=r.useState(!1),[h,u]=r.useState(!1),x=r.useRef(null),f=m(),b=i(1),w=i(0),v=i(0);r.useEffect(()=>{u(!0)},[]);const j=r.useCallback(()=>{b.set(1),w.set(0),v.set(0)},[b,w,v]),y=r.useCallback(()=>{j(),g(!0)},[j]),$=r.useCallback(()=>{g(!1)},[]);r.useEffect(()=>{if(!c||"undefined"==typeof document)return;const e=document.body.style.overflow;document.body.style.overflow="hidden";const i=e=>{if("Escape"===e.key&&$(),"+"!==e.key&&"="!==e.key||b.set(Math.min(5,b.get()+H)),"-"===e.key||"_"===e.key){const e=Math.max(1,b.get()-H);b.set(e),1===e&&(w.set(0),v.set(0))}"0"===e.key&&j()};return window.addEventListener("keydown",i),()=>{var t;document.body.style.overflow=e,window.removeEventListener("keydown",i),null===(t=x.current)||void 0===t||t.focus()}},[c,$,b,w,v,j]);const k={x:w,y:v,scale:b},R=null!=d?d:o;return t.jsxs(t.Fragment,{children:[t.jsxs(S,{ref:x,type:"button",layoutId:`zoomable-${e}`,className:n,onClick:y,"aria-label":s,style:{visibility:c?"hidden":"visible"},children:[o,t.jsxs(M,{"aria-hidden":"true",children:[t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("circle",{cx:"11",cy:"11",r:"7"}),t.jsx("line",{x1:"20",y1:"20",x2:"16.65",y2:"16.65"}),t.jsx("line",{x1:"11",y1:"8",x2:"11",y2:"14"}),t.jsx("line",{x1:"8",y1:"11",x2:"14",y2:"11"})]}),"Click to zoom"]})]}),h&&a.createPortal(t.jsx(p,{children:c&&t.jsxs(V,{role:"dialog","aria-modal":"true",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:f?0:.25},onClick:$,children:[t.jsx(L,{type:"button","aria-label":"Close image viewer",onClick:e=>{e.stopPropagation(),$()},children:"×"}),t.jsx(E,{onClick:e=>e.stopPropagation(),onWheel:e=>{e.preventDefault();const i=(e.deltaY>0?-1:1)*H,t=Math.min(5,Math.max(1,b.get()+i));b.set(t),1===t&&(w.set(0),v.set(0))},children:t.jsx(T,{$ratio:Y(l),layoutId:f?void 0:`zoomable-${e}`,style:k,drag:!0,dragMomentum:!1,dragElastic:.08,onDragEnd:()=>{b.get()<=1.001&&(w.set(0),v.set(0))},onDoubleClick:()=>{b.get()>1?j():b.set(2)},transition:{type:"spring",stiffness:260,damping:28},children:R})}),t.jsxs(A,{onClick:e=>e.stopPropagation(),children:[t.jsx(N,{type:"button","aria-label":"Zoom out",onClick:()=>{const e=Math.max(1,b.get()-H);b.set(e),1===e&&(w.set(0),v.set(0))},children:"−"}),t.jsx(N,{type:"button","aria-label":"Reset zoom",onClick:j,children:"⤢"}),t.jsx(N,{type:"button","aria-label":"Zoom in",onClick:()=>{b.set(Math.min(5,b.get()+H))},children:"+"}),t.jsx(W,{}),t.jsx(D,{children:"Scroll to zoom · drag to pan · double-click to reset · Esc to close"})]})]},"zoomable-backdrop")}),document.body)]})}function G({children:e}){const i=r.Children.toArray(e);if(1!==i.length||"string"!=typeof i[0])return t.jsx(t.Fragment,{children:e});const n=i[0],o=n.trim().split(/\s+/);if(o.length<2)return t.jsx(t.Fragment,{children:n});const a=o.pop(),d=o.pop(),s=o.join(" ");return t.jsxs(t.Fragment,{children:[s,s?" ":"",d," ",a]})}const O=new Set(["white","#fff","#ffffff","#fafafa","#f9fafb","#f5f5f5","#f6f8fc","#f0efeb","#e7e7e7","#eeeeee","#eee"]),U=(e,i)=>e?"dark"!==i.name?e:O.has(e.toLowerCase())?i.surface:e:e,X=n.div`
  min-height: 100vh;
  background: ${e=>e.theme.surface};
`,Z=n.section`
  position: relative;
  overflow: hidden;
  min-height: 110vh;
  background: ${e=>e.theme.surfaceMuted};
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
`,K=n.div`
  position: relative;
  z-index: 2;
  margin: 0 auto;
  max-width: 64rem;
`,_=n.div`
  margin-bottom: 1.25rem;
`,J=n.div`
  position: absolute;
  left: 50%;
  bottom: -6%;
  transform: translateX(-50%);
  width: min(64rem, 92vw);
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
`,Q=n(j)`
  width: 100%;

  img {
    filter: saturate(0.96);
  }
`,ee=n(g.div)`
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
`,ie=n.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: ${({$backgroundColor:e})=>e||"transparent"};
  padding-block: ${({$backgroundColor:e})=>e?"clamp(1rem, 2vw, 1.5rem)":"0"};
  border-radius: ${({$backgroundColor:e})=>e?"24px":"0"};
  ${({$border:e})=>e?`border: ${e};`:""}
  overflow: hidden;
`,te=n.div`
  margin-bottom: 3rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`,re=n.div`
  text-align: left;
`,ne=n.p`
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  color: ${e=>e.theme.mutedText};
  text-transform: uppercase;
  margin: 0;
  margin-bottom: 0.5rem;
`,oe=n.p`
  font-size: 0.875rem;
  color: ${e=>e.theme.mutedText};
  margin: 0;
`,ae=n(g.h1)`
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 1.2;
  color: ${e=>e.theme.strongText};
  max-width: 56rem;

  @media (min-width: 768px) {
    font-size: 3rem;
  }

  @media (min-width: 1024px) {
    font-size: 3.75rem;
  }
`,de=e=>{const{children:i,...r}=e;return t.jsx(ae,{...r,children:t.jsx(G,{children:i})})},se=n.div``,le=n.section`
  background: ${e=>U(e.$background,e.theme)};
  padding: ${e=>{var i;return null!==(i=e.$padding)&&void 0!==i?i:e.$compact?"0":"3.75rem 0"}};
  ${e=>(e=>{if(!e)return!1;const i=e.trim().replace(/^#/,"");let t,r,n;if(3===i.length)t=parseInt(i[0]+i[0],16),r=parseInt(i[1]+i[1],16),n=parseInt(i[2]+i[2],16);else{if(6!==i.length)return!1;t=parseInt(i.slice(0,2),16),r=parseInt(i.slice(2,4),16),n=parseInt(i.slice(4,6),16)}if([t,r,n].some(Number.isNaN))return!1;const o=[t,r,n].map(e=>{const i=e/255;return i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4)});return.2126*o[0]+.7152*o[1]+.0722*o[2]>.55})(U(e.$background,e.theme))?"\n    h1, h2, h3, h4, h5, h6 { color: #1a1a1a; }\n    p { color: rgba(26, 26, 26, 0.78); }\n  ":""}
`,ce=n.div`
  margin: 0 auto;
  max-width: 64rem;
`,me=n.h2`
  font-size: 1.875rem;
  font-weight: 700;
  color: ${e=>e.theme.strongText};
  margin-bottom: 1.5rem;
`,ge=e=>{const{children:i,...r}=e;return t.jsx(me,{...r,children:t.jsx(G,{children:i})})},pe=n.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,he=n.p`
  margin: 0;
  max-width: 68ch;
  font-size: 1rem;
  line-height: 1.625;
  color: ${e=>e.theme.mutedText};
`,ue=e=>{const{children:i,...r}=e;return t.jsx(he,{...r,children:t.jsx(G,{children:i})})},xe=n.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`,fe=n(g.div)``,be=n(g.div)`
  overflow: hidden;
  border-radius: 0.5rem;
`,we=n(j)`
  width: 100%;
  height: 24rem;

  @media (min-width: 768px) {
    height: 100%;
  }
`,ve=n(g.div)`
  overflow: hidden;
  border-radius: 0;
`,je=n.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
  align-items: center;

  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
`,ye=n.p`
  margin-top: 0.75rem;
  font-size: 0.875rem;
  font-style: italic;
  color: ${e=>e.theme.mutedText};
`,$e=n.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`,ke=n(g.div)`
  overflow: hidden;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover img {
    transform: scale(1.02);
  }
`,Re=n(j)`
  width: 100%;

  img {
    transition: transform 0.3s ease-out;
  }
`,Ce=n.div`
  display: grid;
  gap: 1rem;

  ${e=>3===e.$count?"\n        grid-template-columns: 1.2fr 0.8fr;\n        grid-template-rows: auto auto;\n      ":4===e.$count?"\n        grid-template-columns: 1fr 1fr 1fr;\n        grid-template-rows: auto auto;\n      ":"\n      grid-template-columns: repeat(3, 1fr);\n      grid-auto-rows: minmax(200px, auto);\n    "}

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 0.75rem;
    grid-template-rows: auto;
    grid-auto-rows: auto;
  }
`,Ie=n(g.div)`
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
`,Pe=n(j)`
  width: 100%;

  img {
    transition: transform 0.5s ease-out;
  }
`,Be=n.section`
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
`,ze=n(g.div)`
  display: flex;
  flex-direction: column;
  grid-column: 1;
  grid-row: 1 / span 2;

  @media (max-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
  }
`,Fe=n.span`
  font-size: 0.85rem;
  line-height: 2.4;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${e=>e.$active?e.theme.strongText:e.theme.mutedText};
  font-weight: ${e=>e.$active?700:600};

  @media (max-width: 768px) {
    line-height: 1.6;
  }
`,Se=n.div`
  position: relative;
  grid-column: 2;
  grid-row: 1;
`;n(g.div)`
  position: absolute;
  inset: 0;
  margin: -20px;
  border-radius: 14px;
  z-index: 0;
  background: ${e=>e.$accentColor};
`;const Me=n(g.div)`
  position: relative;
  z-index: 1;
`,Ve=n(j)`
  width: 100%;
`,Ee=n(g.div)`
  grid-column: 2;
  grid-row: 2;
`,Te=n.h3`
  margin: 0 0 0.35rem;
  font-size: 1.1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: ${e=>e.theme.mutedText};
`,Le=n(pe)`
  gap: 0.45rem;
`,Ae=n(pe)`
  gap: 0.6rem;
`,Ne=n.section`
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
`,We=n(g.div)`
  border-radius: 12px;
  overflow: hidden;
`,De=n(g.div)`
  margin-top: 0;
  border-radius: 12px;
  overflow: hidden;

  @media (max-width: 768px) {
    margin-top: 0;
  }
`,He=n(j)`
  width: 100%;
`,Ye=n.p`
  margin: 2rem auto 0;
  max-width: 600px;
  text-align: center;
  font-size: 0.95rem;
  color: ${e=>e.theme.mutedText};
`,qe=n.div`
  margin: 0 0 2rem;
  max-width: 45rem;
`,Ge=n(g.div)``,Oe=n(ue)`
  font-size: clamp(1rem, 1.15vw, 1.15rem);
  line-height: 1.65;
  max-width: 62ch;
  text-wrap: pretty;
`,Ue=n.div`
  margin: 0 auto;
  max-width: 800px;
  padding: 5rem 6%;
`,Xe=n(g.div)`
  border-left: 3px solid ${e=>e.$accentColor||"#333"};
  padding-left: 2rem;
  margin-left: 0;

  ${e=>e.$accentColor?`\n    background: ${e.$accentColor}12;\n    padding: 3rem 2.5rem;\n    border-radius: 0 12px 12px 0;\n  `:""}
`,Ze=n.p`
  margin: 0;
  text-align: left;
  font-size: clamp(1.2rem, 2.1vw, 1.55rem);
  font-style: italic;
  line-height: 1.5;
  color: ${e=>e.theme.strongText};
  text-wrap: balance;
`,Ke=n.cite`
  display: block;
  margin-top: 1.5rem;
  font-size: 0.85rem;
  font-style: normal;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${e=>e.theme.mutedText};
`,_e=n.section`
  display: flex;
  flex-direction: column;
  gap: 0;
  padding: 0 0 6rem;
`,Je=n.div`
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  padding: 0;
  background: ${e=>U(e.$background,e.theme)||e.theme.surface};
`,Qe=n.div`
  position: relative;
  width: min(64rem, 92vw);
  margin: 0 auto;
  padding-top: ${e=>e.$fullBleed?"0":"3rem"};

  @media (max-width: 1024px) {
    width: min(72vw, 980px);
  }

  @media (max-width: 768px) {
    width: calc(100vw - 2.5rem);
    padding-top: ${e=>e.$fullBleed?"0":"2rem"};
  }
`,ei=n.div`
  position: relative;
  min-height: 0;
  height: clamp(340px, 46vw, 680px);

  ${e=>e.$fullBleed?"\n    width: 100vw;\n    margin-left: calc(-50vw + 50%);\n  ":""}

  @media (max-width: 768px) {
    height: clamp(260px, 58vw, 460px);
  }
`,ii=n(j)`
  height: 100%;
`,ti=n.div`
  margin-top: 2.5rem;
  padding: 0 1.25rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.25rem;
`,ri=n.span`
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: ${e=>e.theme.mutedText};
  padding: 0.25rem 0;
`,ni=n.span`
  color: ${e=>e.theme.mutedText};
  margin: 0 0.25rem;
`,oi=n.div`
  margin-top: 1rem;
  padding: 0 0 1.25rem;
`,ai=n.div`
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  padding: 3.5rem 0 3rem;
  background: ${e=>"dark"===e.theme.name?e.theme.surfaceMuted:"#f0efeb"};

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
`,di=n(g.div)`
  margin-bottom: 3rem;

  &:last-child {
    margin-bottom: 0;
  }
`,si=n.p`
  margin: 0;
  border-left: 3px solid currentColor;
  padding-left: 1.5rem;
  text-align: left;
  font-size: 1.5rem;
  font-style: italic;
  line-height: 1.5;
  color: ${e=>e.theme.strongText};
`,li=n.section`
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
`,ci=n(g.div)`
  position: relative;
  width: 100%;
  height: min(92vh, 920px);

  @media (max-width: 768px) {
    height: min(78vh, 620px);
  }
`,mi=n(j)`
  height: 100%;
  border-radius: 0;
`,gi=n.div`
  position: relative;
  z-index: 2;
  padding: 2.5rem 6% 3.5rem;
  background: ${e=>e.theme.surface};

  @media (max-width: 768px) {
    padding: 2rem 1.25rem;
  }
`,pi=n(g.h2)`
  color: ${e=>e.theme.strongText};
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  line-height: 1.15;
  max-width: 700px;
  margin: 0 0 1rem;
`,hi=n(g.p)`
  margin: 0;
  color: ${e=>e.theme.mutedText};
  font-size: 1.05rem;
  line-height: 1.7;
  max-width: 540px;
`,ui=n.section`
  position: relative;
  padding: 3.5rem 0;
`,xi=n.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 64rem;
`;n(g.div)`
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
`;const fi=n(g.div)`
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
`,bi=n(j)`
  width: 100%;
`,wi=n.div`
  position: relative;
  z-index: 1;
  max-width: 45rem;
  margin: 2.5rem 0 0;
  text-align: left;
`;n.section`
  border-top: 1px solid ${e=>e.theme.border};
  background: ${e=>e.theme.surface};
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
  color: ${e=>e.theme.mutedText};
  text-transform: uppercase;
`,n.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`,n.button`
  border: 1px solid ${e=>e.theme.pillBorder};
  background: ${e=>e.theme.pillBg};
  color: ${e=>e.theme.pillText};
  border-radius: 999px;
  padding: 0.45rem 0.75rem;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  cursor: pointer;
  transition: all 180ms ease;

  &:hover {
    border-color: ${e=>e.theme.mutedText};
    background: ${e=>e.theme.surfaceMuted};
  }
`;const vi=n(g.button)`
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
  color: ${e=>e.theme.mutedText};
  text-transform: uppercase;
  margin: 0;
`,n.h3`
  margin-top: 0.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${e=>e.theme.strongText};

  @media (min-width: 768px) {
    margin-top: 0;
    font-size: 1.875rem;
  }
`,n.div`
  font-size: 1.5rem;
  color: ${e=>e.theme.mutedText};
  transition: color 200ms;

  ${vi}:hover & {
    color: ${e=>e.theme.strongText};
  }
`;const ji={duration:.7,ease:[.25,.1,.25,1]},yi={duration:.9,ease:[.25,.1,.25,1]},$i={once:!0,amount:.2};function ki({tags:e}){const i=r.useRef(null),n=u(i,{once:!0,margin:"100px"});return t.jsx("div",{ref:i,children:n&&t.jsx(ti,{children:e.map((i,r)=>t.jsx(g.div,{initial:{y:8},animate:{y:0},transition:{duration:.35,delay:.04*r},children:t.jsxs(ri,{children:[i,r<e.length-1&&t.jsx(ni,{children:"•"})]})},`${i}-${r}`))})})}function Ri({images:e}){const i=r.useRef(null),n=u(i,{once:!0,margin:"100px"});return t.jsx("div",{ref:i,children:n&&t.jsx(oi,{children:t.jsx(g.div,{initial:{y:12},animate:{y:0},transition:{duration:.45},children:t.jsx(F,{images:e,autoPlay:!0,intervalMs:2800})})})})}const Ci=new Set(["full-width-image","parallax-reveal","image-pair","staggered-pair"]),Ii=new Set(["sticky-split","parallax-reveal"]);e("C",r.memo(function({caseStudy:e,nextProject:i,onNextProject:n,topAction:o}){const[a,d]=r.useState(!1),[s,l]=r.useState("idle"),c=e.heroImage||e.coverImage,m=e=>e?e.split("\n\n").filter(e=>e.trim()):[],p=(e,i)=>{if(e.sectionBackground)return e.sectionBackground;const t=(e=>{if(!e)return null;const i=e.trim(),t=/^#([0-9a-fA-F]{3})$/,r=/^#([0-9a-fA-F]{6})$/;if(t.test(i)){const[,e]=i.match(t);return`rgba(${parseInt(e[0]+e[0],16)}, ${parseInt(e[1]+e[1],16)}, ${parseInt(e[2]+e[2],16)}, 0.06)`}if(r.test(i)){const[,e]=i.match(r);return`rgba(${parseInt(e.slice(0,2),16)}, ${parseInt(e.slice(2,4),16)}, ${parseInt(e.slice(4,6),16)}, 0.06)`}return null})(e.accentColor);return t||(i?"white":"#f5f5f5")},h=()=>t.jsxs(te,{children:[t.jsxs(re,{children:[t.jsx(ne,{children:"Client"}),t.jsx(oe,{children:e.meta.client})]}),t.jsxs(re,{children:[t.jsx(ne,{children:"Role"}),t.jsx(oe,{children:e.meta.role})]}),t.jsxs(re,{children:[t.jsx(ne,{children:"Timeline"}),t.jsx(oe,{children:e.meta.timeline})]}),t.jsxs(re,{children:[t.jsx(ne,{children:"Platform"}),t.jsx(oe,{children:e.meta.platform})]})]}),u=e=>t.jsxs("div",{children:[(e.heading||e.body)&&t.jsx(qe,{style:{marginBottom:"3.75rem"},children:t.jsxs(Ge,{children:[e.heading&&t.jsx(ge,{children:e.heading}),e.body&&t.jsx(pe,{style:{alignItems:"flex-start"},children:m(e.body).map((e,i)=>t.jsx(ue,{style:{textAlign:"left"},children:e},i))})]})}),t.jsx(ve,{initial:{scale:.97},whileInView:{scale:1},viewport:$i,transition:yi,children:e.images&&e.images[0]&&(()=>{const i=e.images[0],r=t.jsx(we,{src:i.src,alt:i.alt,avif:i.avif,webp:i.webp,aspectRatio:i.aspectRatio||"16/9",borderRadius:i.borderRadius||"8px",objectFit:i.objectFit||"cover",objectPosition:i.objectPosition,backgroundColor:i.backgroundColor,imagePaddingBlock:i.imagePaddingBlock,border:i.containerBorder,mixBlendMode:i.mixBlendMode,style:{width:"100%"}});if(i.zoomable){const n=i.zoomAspectRatio||i.aspectRatio||"16/9",o=t.jsx(we,{src:i.src,alt:i.alt,avif:i.avif,webp:i.webp,aspectRatio:n,borderRadius:i.borderRadius||"8px",objectFit:"contain",backgroundColor:i.backgroundColor,style:{width:"100%"}});return t.jsx(q,{id:`${e.id}-0`,ariaLabel:`Open ${i.alt} in full-screen viewer`,aspectRatio:n,overlayContent:o,children:r})}return r})()}),e.caption&&t.jsx(ye,{children:e.caption})]},e.id),x=e=>{switch(e.layout){case"text-left-image-right":return(e=>t.jsx("div",{children:t.jsxs(xe,{children:[t.jsxs(fe,{initial:{x:-30},whileInView:{x:0},viewport:$i,transition:ji,children:[e.heading&&t.jsx(ge,{children:e.heading}),t.jsx(pe,{children:m(e.body).map((e,i)=>t.jsx(ue,{children:e},i))})]}),e.images&&e.images[0]&&t.jsx(be,{initial:{x:30},whileInView:{x:0},viewport:$i,transition:yi,children:t.jsx(we,{src:e.images[0].src,alt:e.images[0].alt,avif:e.images[0].avif,webp:e.images[0].webp,aspectRatio:e.images[0].aspectRatio||"3/2",borderRadius:"8px",objectFit:"cover"})})]})},e.id))(e);case"text-right-image-left":return(e=>t.jsx("div",{children:t.jsxs(xe,{children:[e.images&&e.images[0]&&t.jsx(be,{style:{order:2},initial:{x:-30},whileInView:{x:0},viewport:$i,transition:yi,children:t.jsx(we,{src:e.images[0].src,alt:e.images[0].alt,avif:e.images[0].avif,webp:e.images[0].webp,aspectRatio:e.images[0].aspectRatio||"3/2",borderRadius:"8px",objectFit:"cover"})}),t.jsxs(fe,{style:{order:1},initial:{x:30},whileInView:{x:0},viewport:$i,transition:ji,children:[e.heading&&t.jsx(ge,{children:e.heading}),t.jsx(pe,{children:m(e.body).map((e,i)=>t.jsx(ue,{children:e},i))})]})]})},e.id))(e);case"full-width-image":return u(e);case"image-pair":return(e=>t.jsxs("div",{children:[e.heading&&t.jsx(ge,{style:e.headingColor?{color:e.headingColor}:void 0,children:e.heading}),t.jsx(je,{style:e.contentMaxWidth?{maxWidth:e.contentMaxWidth,marginInline:"auto"}:void 0,children:e.images&&e.images.slice(0,2).map((e,i)=>t.jsx(ke,{initial:{scale:.97},whileInView:{scale:1},viewport:$i,transition:{...yi,delay:.15*i},children:t.jsx(Re,{src:e.src,alt:e.alt,avif:e.avif,webp:e.webp,aspectRatio:e.aspectRatio,borderRadius:"0.5rem",objectFit:e.objectFit||"contain",backgroundColor:e.backgroundColor,imagePaddingBlock:e.imagePaddingBlock,imagePaddingInline:e.imagePaddingInline})},i))})]},e.id))(e);case"gallery-grid":return(e=>t.jsxs("div",{children:[e.heading&&t.jsx(ge,{children:e.heading}),t.jsx($e,{children:e.images&&e.images.map((e,i)=>t.jsx(ke,{initial:{scale:.95},whileInView:{scale:1},viewport:$i,whileHover:{scale:1.02},transition:{...yi,delay:.1*i},children:t.jsx(Re,{src:e.src,alt:e.alt,avif:e.avif,webp:e.webp,aspectRatio:e.aspectRatio||"1/1",borderRadius:"8px",objectFit:"cover"})},i))})]},e.id))(e);case"asymmetric-mosaic":return(e=>{const i=e.images||[];return t.jsxs("div",{children:[e.heading&&t.jsx(ge,{children:e.heading}),t.jsx(Ce,{$count:i.length,children:i.map((e,r)=>t.jsx(Ie,{$index:r,$count:i.length,initial:{y:20,scale:.97},whileInView:{y:0,scale:1},viewport:{once:!0,amount:.2},transition:{...ji,delay:.08*r},children:t.jsx(Pe,{src:e.src,alt:e.alt,avif:e.avif,webp:e.webp,aspectRatio:e.aspectRatio||"4/3",borderRadius:"10px",objectFit:"cover"})},`${e.src}-${r}`))})]},e.id)})(e);case"three-column-feature":return(e=>{var i;const r=null===(i=e.images)||void 0===i?void 0:i[0],n=e.labels||[];return t.jsxs(Be,{children:[t.jsx(ze,{initial:{x:-20},whileInView:{x:0},viewport:{once:!0,amount:.2},transition:ji,children:n.map((e,i)=>t.jsx(Fe,{$active:0===i,children:e},`${e}-${i}`))}),t.jsx(Se,{children:r&&t.jsx(Me,{initial:{y:24},whileInView:{y:0},viewport:{once:!0,amount:.2},transition:yi,children:t.jsx(Ve,{src:r.src,alt:r.alt,avif:r.avif,webp:r.webp,aspectRatio:r.aspectRatio||"4/5",borderRadius:"12px",objectFit:r.objectFit||"cover",objectPosition:r.objectPosition,backgroundColor:r.backgroundColor,imagePaddingBlock:r.imagePaddingBlock})})}),t.jsxs(Ee,{initial:{x:20},whileInView:{x:0},viewport:{once:!0,amount:.2},transition:ji,children:[e.heading&&t.jsx(Te,{children:e.heading}),t.jsx(Le,{children:m(e.body).map((e,i)=>t.jsx(ue,{children:e},i))})]})]},e.id)})(e);case"staggered-pair":return(e=>{const i=e.images||[];if(i.length<=1)return u(e);const r=i[0],n=i[1],o=Boolean(e.heading);return t.jsxs("div",{children:[o&&t.jsx(qe,{children:t.jsxs(Ge,{initial:{y:20},whileInView:{y:0},viewport:$i,transition:ji,children:[t.jsx(ge,{style:{textAlign:"left"},children:e.heading}),e.body&&t.jsx(pe,{style:{alignItems:"flex-start"},children:m(e.body).map((e,i)=>t.jsx(Oe,{style:{textAlign:"left"},children:e},i))})]})}),t.jsxs(Ne,{children:[t.jsx(We,{initial:{y:30},whileInView:{y:0},viewport:{once:!0,amount:.2},transition:yi,children:t.jsx(He,{src:r.src,alt:r.alt,avif:r.avif,webp:r.webp,aspectRatio:r.aspectRatio,borderRadius:"12px",backgroundColor:r.backgroundColor,imagePaddingBlock:r.imagePaddingBlock,objectFit:r.objectFit||"cover",objectPosition:r.objectPosition,border:r.containerBorder})}),t.jsx(De,{initial:{y:30},whileInView:{y:0},viewport:{once:!0,amount:.2},transition:{...yi,delay:.15},children:t.jsx(He,{src:n.src,alt:n.alt,avif:n.avif,webp:n.webp,aspectRatio:n.aspectRatio,borderRadius:"12px",backgroundColor:n.backgroundColor,imagePaddingBlock:n.imagePaddingBlock,objectFit:n.objectFit||"cover",objectPosition:n.objectPosition||"top center",border:n.containerBorder})})]}),!o&&e.body&&t.jsx(Ye,{children:e.body})]},e.id)})(e);case"text-only":return(e=>t.jsx("div",{children:t.jsx(qe,{children:t.jsxs(Ge,{initial:{y:20},whileInView:{y:0},viewport:$i,transition:ji,children:[e.heading&&t.jsx(ge,{style:{textAlign:"left"},children:e.heading}),t.jsx(pe,{style:{alignItems:"flex-start"},children:m(e.body).map((e,i)=>t.jsx(Oe,{style:{textAlign:"left"},children:e},i))})]})})},e.id))(e);case"quote":return(e=>t.jsx("div",{children:t.jsx(Ue,{children:t.jsxs(Xe,{$accentColor:e.accentColor,initial:{y:20},whileInView:{y:0},viewport:$i,transition:ji,children:[t.jsx(Ze,{children:e.body}),e.heading&&t.jsx(Ke,{children:e.heading})]})})},e.id))(e);case"image-carousel":return(e=>t.jsxs("div",{children:[(e.heading||e.body)&&t.jsx(qe,{children:t.jsxs(Ge,{initial:{y:20},whileInView:{y:0},viewport:$i,transition:ji,children:[e.heading&&t.jsx(ge,{style:{textAlign:"left"},children:e.heading}),e.body&&t.jsx(pe,{style:{alignItems:"flex-start"},children:m(e.body).map((e,i)=>t.jsx(Oe,{style:{textAlign:"left"},children:e},i))})]})}),e.images&&e.images.length>0&&t.jsx(g.div,{initial:{scale:.97},whileInView:{scale:1},viewport:$i,transition:yi,children:t.jsx(F,{images:e.images})})]},e.id))(e);case"parallax-reveal":return(e=>{var i,r;const n=null===(i=e.images)||void 0===i?void 0:i[0];return n?t.jsxs(li,{children:[t.jsx(ci,{children:t.jsx(mi,{src:n.src,alt:n.alt,avif:n.avif,webp:n.webp,parallaxSpeed:null!==(r=e.parallaxSpeed)&&void 0!==r?r:.4,objectFit:"cover"})}),t.jsxs(gi,{children:[e.heading&&t.jsx(pi,{initial:{y:40},whileInView:{y:0},viewport:$i,transition:ji,children:e.heading}),e.body&&t.jsx(hi,{initial:{y:40},whileInView:{y:0},viewport:$i,transition:{...ji,delay:.15},children:e.body})]})]},e.id):null})(e);case"image-on-color-block":return(e=>{var i;const r=null===(i=e.images)||void 0===i?void 0:i[0];return r?t.jsx(ui,{children:t.jsxs(xi,{children:[t.jsx(fi,{$containerBorder:r.containerBorder,$containerShadow:r.containerShadow,initial:{y:40},whileInView:{y:0},viewport:$i,transition:yi,children:t.jsx(bi,{src:r.src,alt:r.alt,avif:r.avif,webp:r.webp,aspectRatio:r.aspectRatio,borderRadius:r.borderRadius||"12px",containerBorderRadius:r.containerBorderRadius,objectFit:r.objectFit||"cover",objectPosition:r.objectPosition,imageScale:r.imageScale,backgroundColor:r.backgroundColor,imagePaddingBlock:r.imagePaddingBlock,imagePaddingInline:r.imagePaddingInline})}),(e.heading||e.body)&&t.jsxs(wi,{children:[e.heading&&t.jsx(ge,{children:e.heading}),e.body&&t.jsx(pe,{style:{alignItems:"flex-start"},children:m(e.body).map((e,i)=>t.jsx(ue,{style:{textAlign:"left"},children:e},i))})]})]})},e.id):null})(e);case"sticky-split":return(e=>{var i,r,n,o,a,d;const s=(null===(i=e.stickyContent)||void 0===i?void 0:i.image)||(null===(r=e.images)||void 0===r?void 0:r[0]),l=(null===(n=e.stickyContent)||void 0===n?void 0:n.fullBleedImage)||!1,c=(null===(o=e.stickyContent)||void 0===o?void 0:o.tags)||[],g=(null===(a=e.stickyContent)||void 0===a?void 0:a.collateralImages)||[],p=(null===(d=e.scrollContent)||void 0===d?void 0:d.blocks)||[];return t.jsxs(_e,{children:[p.length>0&&t.jsx(ai,{children:p.map((i,r)=>{if("text"===i.type)return t.jsxs(di,{initial:{x:20},whileInView:{x:0},viewport:$i,transition:ji,children:[i.heading&&t.jsx(ge,{children:i.heading}),t.jsx(Ae,{children:m(i.body).map((e,i)=>t.jsx(ue,{children:e},i))})]},`${e.id}-text-${r}`);if("image"===i.type){var n;const o=null===(n=i.images)||void 0===n?void 0:n[0];return o?t.jsx(di,{initial:{scale:.97},whileInView:{scale:1},viewport:$i,transition:yi,children:t.jsx(j,{src:o.src,alt:o.alt,avif:o.avif,webp:o.webp,aspectRatio:o.aspectRatio||"3/2",borderRadius:"8px",objectFit:"cover"})},`${e.id}-image-${r}`):null}return"carousel"===i.type?t.jsx(di,{initial:{scale:.97},whileInView:{scale:1},viewport:$i,transition:yi,children:i.images&&i.images.length>0&&t.jsx(F,{images:i.images,showControls:!1,showDots:!1})},`${e.id}-carousel-${r}`):"quote"===i.type?t.jsx(di,{initial:{x:30},whileInView:{x:0},viewport:$i,transition:ji,children:t.jsx(si,{children:i.body})},`${e.id}-quote-${r}`):null})}),t.jsx(Je,{$background:e.sectionBackground,children:t.jsxs(Qe,{$fullBleed:l,children:[s&&t.jsx(ei,{$fullBleed:l,children:t.jsx(ii,{src:s.src,alt:s.alt,avif:s.avif,webp:s.webp,aspectRatio:s.aspectRatio||"16/9",borderRadius:"12px",backgroundColor:s.backgroundColor,imagePaddingBlock:s.imagePaddingBlock,objectFit:s.objectFit||"cover",objectPosition:s.objectPosition||"center",border:s.containerBorder,mixBlendMode:s.mixBlendMode})}),c.length>0&&t.jsx(ki,{tags:c}),g.length>0&&t.jsx(Ri,{images:g})]})})]},e.id)})(e);default:return null}};return t.jsxs(X,{children:[t.jsxs(Z,{children:[t.jsxs(K,{children:[o&&t.jsx(_,{children:o}),t.jsx(h,{}),t.jsx(de,{initial:{y:30},animate:{y:0},transition:{duration:.8,delay:.2,ease:[.25,.1,.25,1]},children:e.heroHeadline})]}),t.jsx(J,{children:t.jsxs(ie,{$backgroundColor:c.backgroundColor,$border:c.backgroundColor?c.containerBorder:void 0,children:[t.jsx(Q,{src:c.src,alt:c.alt,avif:c.avif,webp:c.webp,aspectRatio:c.aspectRatio||"16/9",borderRadius:"8px",objectFit:c.objectFit||"cover",objectPosition:c.objectPosition||"center",imageScale:1,border:c.backgroundColor?void 0:c.containerBorder,onLoad:()=>d(!0)}),!a&&t.jsx(ee,{initial:{opacity:1},animate:{opacity:0},transition:{duration:.4,delay:.3},"aria-hidden":"true"})]})})]}),t.jsx(se,{children:e.sections.map((i,r)=>{const n=e.sections[r-1],o=e.sections[r+1],a=Ii.has(i.layout),d=Ci.has(i.layout),s=!!n&&Ci.has(n.layout),l=!!o&&Ci.has(o.layout),c=!i.disableCompactPadding&&!i.heading&&!i.body&&d&&(s||l);return a?t.jsx("div",{children:x(i)},i.id):t.jsx("div",{children:t.jsx(le,{$background:p(i,r%2==0),$compact:c,$padding:i.sectionPadding,children:t.jsx(ce,{children:x(i)})})},i.id)})})]})}))}}});
