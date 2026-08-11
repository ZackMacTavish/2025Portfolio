System.register(["./three-legacy-BdMASLzS.js","./vendor-legacy-C2msdADn.js","./index-legacy-DeusfXvR.js"],function(e,i){"use strict";var t,r,n,o,a,d,s,l,c,m,g,p,h;return{setters:[e=>{t=e.j},e=>{r=e.b,n=e.c,o=e.R,a=e.d},e=>{d=e.u,s=e.k,l=e.M,c=e.B,m=e.l,g=e.w,p=e.D,h=e.z}],execute:function(){function i(e){const i=d(()=>s(e)),{isStatic:t}=r.useContext(l);if(t){const[,t]=r.useState(e);r.useEffect(()=>i.on("change",t),[])}return i}const u={some:0,all:1};function x(e,{root:i,margin:t,amount:n,once:o=!1,initial:a=!1}={}){const[d,s]=r.useState(a);return r.useEffect(()=>{if(!e.current||o&&d)return;const r={root:i&&i.current||void 0,margin:t,amount:n};return function(e,i,{root:t,margin:r,amount:n="some"}={}){const o=c(e),a=new WeakMap,d=new IntersectionObserver(e=>{e.forEach(e=>{const t=a.get(e.target);if(e.isIntersecting!==Boolean(t))if(e.isIntersecting){const t=i(e.target,e);"function"==typeof t?a.set(e.target,t):d.unobserve(e.target)}else"function"==typeof t&&(t(e),a.delete(e.target))})},{root:t,rootMargin:r,threshold:"number"==typeof n?n:u[n]});return o.forEach(e=>d.observe(e)),()=>d.disconnect()}(e.current,()=>(s(!0),o?void 0:()=>s(!1)),r)},[i,e,t,o,n]),d}function f(e){if(!e)return e;try{return encodeURI(decodeURI(e))}catch{return encodeURI(e)}}const b=n(g.div)`
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: ${e=>e.$borderRadius};
  background: ${e=>e.$backgroundColor||"transparent"};
  ${e=>e.$border?`border: ${e.$border};`:""}

  ${e=>e.$aspectRatio?`\n    aspect-ratio: ${e.$aspectRatio};\n  `:""}
`,v=n.picture`
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
`,y=n(g.img)`
  display: block;
  width: 100%;
  height: ${e=>e.$fillContainer?e.$hasParallax?"110%":"100%":"auto"};
  object-fit: ${e=>e.$objectFit};
  object-position: ${e=>e.$objectPosition};
  border-radius: ${e=>e.$borderRadius};
`;function j({src:e,alt:n,avif:o,webp:a,mobileSrc:d,mobileAvif:s,mobileWebp:l,aspectRatio:c,parallaxSpeed:g=0,className:p,borderRadius:h="12px",containerBorderRadius:u,backgroundColor:x,imagePaddingBlock:j,imagePaddingInline:$,objectFit:k="cover",objectPosition:C="center",imageScale:R=1,disableRevealAnimation:z=!1,loading:I="lazy",decoding:S="async",onLoad:P,border:B,mixBlendMode:A}){const F=r.useRef(null),M=m(),[T,W]=r.useState(z||"eager"===I),[L,V]=r.useState(()=>"undefined"!=typeof window&&window.innerWidth<768),E=i(0);r.useEffect(()=>{if("undefined"==typeof window)return;const e=()=>{V(window.innerWidth<768)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]);const D=60*Math.max(0,g),N=g>0&&!M&&!L,q=Boolean(c),H=null!=u?u:h,O=f(e),Y=f(o),U=f(a),G=f(d),X=f(s),Z=f(l);return r.useEffect(()=>{if(z||!O)return;if("undefined"==typeof window||!window.IntersectionObserver)return;const e=F.current;if(!e)return;const i=new IntersectionObserver(t=>{var r;if(null===(r=t[0])||void 0===r||!r.isIntersecting)return;i.disconnect();const n=e.querySelector("img");if(!n)return void W(!0);const o=()=>{"function"==typeof n.decode?n.decode().then(()=>W(!0)).catch(()=>W(!0)):W(!0)};n.complete?o():(n.onload=o,n.onerror=()=>W(!0))},{rootMargin:"400px 0px"});return i.observe(e),()=>i.disconnect()},[z,O]),r.useEffect(()=>{if(!N)return void E.set(0);const e=()=>{const e=F.current;if(!e)return;const i=e.getBoundingClientRect(),t=window.innerHeight,r=t+i.height,n=r>0?(t-i.top)/r:.5,o=Math.min(1,Math.max(0,n))*D*2-D;E.set(o)};return e(),window.addEventListener("scroll",e,{passive:!0}),window.addEventListener("resize",e),()=>{window.removeEventListener("scroll",e),window.removeEventListener("resize",e)}},[D,E,N]),t.jsx(b,{ref:F,className:p,$aspectRatio:c,$borderRadius:H,$backgroundColor:x,$border:B,...z?{}:{initial:{opacity:0,y:10},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.2},transition:{duration:.7,ease:[.25,.1,.25,1]}},children:t.jsx(w,{$imagePaddingBlock:j,$imagePaddingInline:$,$fillContainer:q,$borderRadius:h,children:t.jsxs(v,{$fillContainer:q,$borderRadius:h,children:[X&&t.jsx("source",{srcSet:X,type:"image/avif",media:"(max-width: 900px)"}),Z&&t.jsx("source",{srcSet:Z,type:"image/webp",media:"(max-width: 900px)"}),G&&t.jsx("source",{srcSet:G,media:"(max-width: 900px)"}),Y&&t.jsx("source",{srcSet:Y,type:"image/avif"}),U&&t.jsx("source",{srcSet:U,type:"image/webp"}),t.jsx(y,{src:O,alt:n,loading:I,decoding:S,onLoad:e=>{null==P||P(e)},style:{y:N?E:0,scale:R,mixBlendMode:A,opacity:T?1:0,transition:T?"opacity 0.3s ease":"none"},$objectFit:k,$objectPosition:C,$hasParallax:N,$fillContainer:q,$borderRadius:h})]})})})}const $=n.div`
  width: 100%;

  @media (max-width: 767px) {
    --carousel-image-padding-inline: 1.25rem;
    --carousel-image-padding-block: 1rem;
    width: 100vw;
    margin-left: calc(50% - 50vw);

    [data-carousel-frame="true"] {
      width: calc(100% - 1rem) !important;
      margin-inline: 0.5rem;
      border-radius: 12px !important;
      box-shadow: none !important;
    }

    [data-carousel-frame="true"] > div,
    [data-carousel-frame="true"] picture,
    [data-carousel-frame="true"] img {
      border-radius: 12px !important;
    }
  }
`,k=o.forwardRef((e,i)=>{const{$aspectRatio:r,style:n,...o}=e;return t.jsx(g.div,{ref:i,style:{position:"relative",width:"100%",borderRadius:"16px",overflow:"hidden",aspectRatio:r||"16 / 9",maxHeight:"min(80vh, 1000px)",boxShadow:"0 4px 24px rgba(0,0,0,0.08)",outline:"none",cursor:"grab",touchAction:"pan-y",...n||{}},...o})});k.displayName="Frame";const C=n.div`
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
`,z=n.button`
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
`,S=n(j)`
  width: 100%;
  height: 100%;

  img {
    pointer-events: none;
    user-select: none;
    -webkit-user-drag: none;
  }
`,P=n.div`
  margin-top: 0.625rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0;
`,B=n.button`
  position: relative;
  width: 32px;
  height: 32px;
  border: none;
  cursor: pointer;
  padding: 0;
  background: transparent;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${e=>e.$active?"var(--text-strong, #333)":"var(--border, #ccc)"};
    transform: translate(-50%, -50%) scale(${e=>e.$active?1.3:1});
    transition: background 0.2s ease, transform 0.2s ease;
  }

  &:focus-visible {
    outline: 2px solid var(--text-strong, #333);
    outline-offset: -4px;
    border-radius: 50%;
  }
`;function A({images:e,autoPlay:i=!1,intervalMs:n=7e3,showControls:o=!0,showDots:a=!0,activeDecoding:d="sync",fixedAspectRatio:s}){const[l,c]=r.useState(0),[m,g]=r.useState(0),[p,h]=r.useState(!1),[u,x]=r.useState(!1),[f,b]=r.useState(!1),[v,w]=r.useState(!1),y=r.useRef(null),j=e.length;r.useEffect(()=>{const e=y.current;if(!e)return;const i=new IntersectionObserver(e=>{var i,t;const r=null!==(i=null===(t=e[0])||void 0===t?void 0:t.isIntersecting)&&void 0!==i&&i;w(r)},{threshold:.8});return i.observe(e),()=>i.disconnect()},[]);const A=e=>{if(!j)return;const i=(e+j)%j;g(l),h(!1),c(i)},F=()=>A(l+1),M=()=>A(l-1);if(r.useEffect(()=>{if(!i||f||j<2||!v)return;const e=setInterval(()=>{c(e=>(g(e),(e+1)%j)),h(!1)},n);return()=>clearInterval(e)},[i,n,f,j,v]),!j)return null;const T=e[l],W=e[m],L=e=>e.objectPosition||("contain"===e.objectFit?"center":"top center");return t.jsxs($,{children:[t.jsxs(k,{ref:y,$aspectRatio:s||T.aspectRatio||"16 / 9",tabIndex:0,"data-carousel-frame":"true",onMouseEnter:()=>x(!0),onMouseLeave:()=>x(!1),onKeyDown:e=>{"ArrowRight"===e.key&&(e.preventDefault(),b(!0),F()),"ArrowLeft"===e.key&&(e.preventDefault(),b(!0),M())},drag:"x",dragDirectionLock:!0,dragElastic:.16,dragMomentum:!1,dragConstraints:{left:0,right:0},onDragStart:()=>b(!0),onDragEnd:(e,i)=>{var t,r;const n=Math.min(48,.12*(null!==(t=null===(r=y.current)||void 0===r?void 0:r.clientWidth)&&void 0!==t?t:400)),o=i.offset.x+.12*i.velocity.x;o>n?M():o<-n&&F()},children:[t.jsx(I,{style:{zIndex:1},children:t.jsx(S,{src:W.src,alt:W.alt,avif:W.avif,webp:W.webp,mobileSrc:W.mobileSrc,mobileAvif:W.mobileAvif,mobileWebp:W.mobileWebp,aspectRatio:W.aspectRatio||"3/2",borderRadius:W.borderRadius||"16px",backgroundColor:W.backgroundColor,imagePaddingBlock:W.imagePaddingBlock?`var(--carousel-image-padding-block, ${W.imagePaddingBlock})`:void 0,imagePaddingInline:W.imagePaddingInline?`var(--carousel-image-padding-inline, ${W.imagePaddingInline})`:void 0,objectFit:W.objectFit||"cover",objectPosition:L(W),border:W.containerBorder,disableRevealAnimation:!0,loading:"lazy",decoding:"auto"},`prev-${W.src}-${m}`)}),t.jsx(I,{style:{zIndex:2,opacity:p?1:0,transition:"opacity 400ms ease"},children:t.jsx(S,{src:T.src,alt:T.alt,avif:T.avif,webp:T.webp,mobileSrc:T.mobileSrc,mobileAvif:T.mobileAvif,mobileWebp:T.mobileWebp,aspectRatio:T.aspectRatio||"3/2",borderRadius:T.borderRadius||"16px",backgroundColor:T.backgroundColor,imagePaddingBlock:T.imagePaddingBlock?`var(--carousel-image-padding-block, ${T.imagePaddingBlock})`:void 0,imagePaddingInline:T.imagePaddingInline?`var(--carousel-image-padding-inline, ${T.imagePaddingInline})`:void 0,objectFit:T.objectFit||"cover",objectPosition:L(T),border:T.containerBorder,disableRevealAnimation:!0,loading:"lazy",decoding:d,onLoad:()=>h(!0)},`active-${T.src}-${l}`)}),j>1&&o&&t.jsxs(C,{$visible:u,children:[t.jsx(R,{type:"button",$side:"left","aria-label":"Previous image",onClick:()=>{b(!0),M()},children:t.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:t.jsx("polyline",{points:"15 6 9 12 15 18"})})}),i&&t.jsx(z,{type:"button","aria-label":f?"Resume slideshow":"Pause slideshow",onClick:()=>b(e=>!e),children:f?"▶":"❚❚"}),t.jsx(R,{type:"button",$side:"right","aria-label":"Next image",onClick:()=>{b(!0),F()},children:t.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:t.jsx("polyline",{points:"9 6 15 12 9 18"})})})]})]}),j>1&&a&&t.jsx(P,{children:e.map((e,i)=>t.jsx(B,{type:"button",$active:i===l,"aria-label":`Go to slide ${i+1}`,"aria-current":i===l,onClick:()=>{b(!0),A(i)}},`${e.src}-${i}`))})]})}const F=n(g.button)`
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

  ${F}:hover &,
  ${F}:focus-visible & {
    opacity: 1;
    transform: translateY(0);
  }
`,T=n(g.div)`
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
`,W=n(g.div)`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  touch-action: none;
  cursor: inherit;
`,L=n(g.div)`
  position: relative;
  /* For tall images (ratio < 0.75) render at a fixed wide width so the browser
     allocates enough pixels for sharp zoom. The Viewer's overflow:hidden clips
     the excess height; users can pan/drag to explore the full image. */
  width: ${e=>e.$ratio<.75?"min(90vw, 1400px)":`min(95vw, ${92*e.$ratio}vh, 1800px)`};
  aspect-ratio: ${e=>e.$ratio};
  max-height: ${e=>e.$ratio<.75?"none":"92vh"};
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
`,V=n.button`
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
`,E=n.div`
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
`,D=n.button`
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
`,N=n.span`
  width: 1px;
  height: 1.25rem;
  background: rgba(255, 255, 255, 0.18);
  margin: 0 0.35rem;
`,q=n.span`
  padding: 0 0.35rem;
  color: rgba(255, 255, 255, 0.78);
  font-size: 0.78rem;

  @media (max-width: 640px) {
    display: none;
  }
`,H=.18;function O(e){const i=e.trim();if(i.includes("/")){const[e,t]=i.split("/").map(e=>parseFloat(e));if(e&&t)return e/t}const t=parseFloat(i);return Number.isFinite(t)&&t>0?t:16/9}function Y({id:e,className:n,children:o,overlayContent:d,ariaLabel:s="Open image in full-screen viewer",aspectRatio:l="16/9"}){const[c,g]=r.useState(!1),[h,u]=r.useState(!1),x=r.useRef(null),f=m(),b=i(1),v=i(0),w=i(0);r.useEffect(()=>{u(!0)},[]);const y=r.useCallback(()=>{const e=O(l);if(e>=.75||"undefined"==typeof window)return 0;const i=Math.min(.9*window.innerWidth,1400)/e,t=Math.min(Math.max(16,.04*window.innerWidth),48),r=window.innerHeight-2*t;return Math.max(0,(i-r)/2)},[l]),j=r.useCallback(()=>{b.set(1),v.set(0),w.set(y())},[b,v,w,y]),$=r.useCallback(()=>{b.set(1),v.set(0),w.set(y()),g(!0)},[b,v,w,y]),k=r.useCallback(()=>{g(!1)},[]);r.useEffect(()=>{if(!c||"undefined"==typeof document)return;const e=document.body.style.overflow;document.body.style.overflow="hidden";const i=e=>{if("Escape"===e.key&&k(),"+"!==e.key&&"="!==e.key||b.set(Math.min(5,b.get()+H)),"-"===e.key||"_"===e.key){const e=Math.max(1,b.get()-H);b.set(e),1===e&&(v.set(0),w.set(y()))}"0"===e.key&&j()};return window.addEventListener("keydown",i),()=>{var t;document.body.style.overflow=e,window.removeEventListener("keydown",i),null===(t=x.current)||void 0===t||t.focus()}},[c,k,b,v,w,j]);const C={x:v,y:w,scale:b},R=null!=d?d:o;return t.jsxs(t.Fragment,{children:[t.jsxs(F,{ref:x,type:"button",layoutId:`zoomable-${e}`,className:n,onClick:$,"aria-label":s,style:{visibility:c?"hidden":"visible"},children:[o,t.jsxs(M,{"aria-hidden":"true",children:[t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("circle",{cx:"11",cy:"11",r:"7"}),t.jsx("line",{x1:"20",y1:"20",x2:"16.65",y2:"16.65"}),t.jsx("line",{x1:"11",y1:"8",x2:"11",y2:"14"}),t.jsx("line",{x1:"8",y1:"11",x2:"14",y2:"11"})]}),"Click to zoom"]})]}),h&&a.createPortal(t.jsx(p,{children:c&&t.jsxs(T,{role:"dialog","aria-modal":"true",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:f?0:.25},onClick:k,children:[t.jsx(V,{type:"button","aria-label":"Close image viewer",onClick:e=>{e.stopPropagation(),k()},children:"×"}),t.jsx(W,{onClick:e=>e.stopPropagation(),onWheel:e=>{e.preventDefault();const i=(e.deltaY>0?-1:1)*H,t=Math.min(5,Math.max(1,b.get()+i));b.set(t),1===t&&(v.set(0),w.set(y()))},children:t.jsx(L,{$ratio:O(l),layoutId:f?void 0:`zoomable-${e}`,style:C,drag:!0,dragMomentum:!1,dragElastic:.08,onDragEnd:()=>{!(O(l)<.75)&&b.get()<=1.001&&(v.set(0),w.set(0))},onDoubleClick:()=>{b.get()>1?j():b.set(2)},transition:{type:"spring",stiffness:260,damping:28},children:R})}),t.jsxs(E,{onClick:e=>e.stopPropagation(),children:[t.jsx(D,{type:"button","aria-label":"Zoom out",onClick:()=>{const e=Math.max(1,b.get()-H);b.set(e),1===e&&(v.set(0),w.set(y()))},children:"−"}),t.jsx(D,{type:"button","aria-label":"Reset zoom",onClick:j,children:"⤢"}),t.jsx(D,{type:"button","aria-label":"Zoom in",onClick:()=>{b.set(Math.min(5,b.get()+H))},children:"+"}),t.jsx(N,{}),t.jsx(q,{children:"Scroll to zoom · drag to pan · double-click to reset · Esc to close"})]})]},"zoomable-backdrop")}),document.body)]})}function U({children:e}){const i=r.Children.toArray(e);if(1!==i.length||"string"!=typeof i[0])return t.jsx(t.Fragment,{children:e});const n=i[0],o=n.trim().split(/\s+/);if(o.length<2)return t.jsx(t.Fragment,{children:n});const a=o.pop(),d=o.pop(),s=o.join(" ");return t.jsxs(t.Fragment,{children:[s,s?" ":"",d," ",a]})}const G=new Set(["white","#fff","#ffffff","#fafafa","#f9fafb","#f5f5f5","#f6f8fc","#f0efeb","#e7e7e7","#eeeeee","#eee"]),X=(e,i)=>e?"dark"!==i.name?e:G.has(e.toLowerCase())?i.surface:e:e,Z=n.div`
  min-height: 100vh;
  background: ${e=>e.theme.surface};
`,_=n.section`
  position: relative;
  overflow: hidden;
  min-height: 110vh;
  background: ${e=>e.theme.surfaceMuted};
  /* Horizontal gutter lives on HeroContent (mirroring SectionContent) so the
     hero headline/metadata align with every body section's grid. */
  padding: 5rem 0 10rem;

  @media (min-width: 768px) {
    min-height: 116vh;
    padding: 7rem 0 16rem;
  }

  @media (max-height: 980px) and (min-width: 901px) {
    display: flex;
    flex-direction: column;
    gap: clamp(1rem, 2vh, 1.5rem);
    min-height: auto;
    padding: 6rem 0 3rem;
  }

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    gap: clamp(1rem, 3vw, 1.75rem);
    min-height: auto;
    /* Clear the fixed ~73px site header so the metadata bar doesn't touch it. */
    padding: 7rem 0 2rem;
  }
`,K=n.div`
  position: relative;
  z-index: 2;
  box-sizing: border-box;
  margin: 0 auto;
  /* width:100% so that as a flex item (the hero becomes a flex column on
     short/!mobile viewports) it fills to the 64rem cap and aligns with the
     body SectionContent grid, instead of shrinking to its content width. */
  width: 100%;
  max-width: 64rem;
  /* Match SectionContent's inner gutter so the hero aligns with body sections */
  padding-left: 1.5rem;
  padding-right: 1.5rem;

  @media (max-width: 480px) {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }
`,J=n.div`
  margin-bottom: 1.25rem;
`,Q=n.div`
  position: absolute;
  left: 50%;
  bottom: -6%;
  transform: translateX(-50%);
  box-sizing: border-box;
  /* Match SectionContent exactly (width:100% capped at 64rem + 1.5rem gutter)
     so the hero image tracks the body grid at every width. Using vw here
     pinched the image inward between ~900–1093px. */
  width: 100%;
  max-width: 64rem;
  padding: 0 1.5rem;
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
    padding: 0 1.5rem;
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
    width: 100%;
    max-width: 64rem;
    padding: 0 1.5rem;
    margin: 2rem auto 0;
  }

  @media (max-width: 480px) {
    padding: 0 1.25rem;
  }
`,ee=n(j)`
  width: 100%;

  img {
    filter: saturate(0.96);
  }
`,ie=n(g.div)`
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
`,te=n.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: ${({$backgroundColor:e})=>e||"transparent"};
  padding-block: ${({$backgroundColor:e})=>e?"clamp(1rem, 2vw, 1.5rem)":"0"};
  border-radius: ${({$backgroundColor:e})=>e?"24px":"0"};
  ${({$border:e})=>e?`border: ${e};`:""}
  overflow: hidden;
`,re=n.div`
  margin-bottom: 3rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`,ne=n.div`
  text-align: left;
`,oe=n.p`
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  color: ${e=>e.theme.mutedText};
  text-transform: uppercase;
  margin: 0;
  margin-bottom: 0.5rem;
`,ae=n.p`
  font-family: var(--font-mono);
  font-size: 0.875rem;
  color: ${e=>e.theme.mutedText};
  margin: 0;
`,de=n(g.h1)`
  margin: 0;
  font-family: var(--font-display);
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
`,se=e=>{const{children:i,...r}=e;return t.jsx(de,{...r,children:t.jsx(U,{children:i})})},le=n.a`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
  padding: 0.75rem 1rem;
  border: 1px solid ${e=>e.theme.strongText};
  border-radius: 6px;
  color: ${e=>e.theme.strongText};
  font-size: 0.875rem;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 160ms ease, color 160ms ease;

  &:hover {
    background: ${e=>e.theme.strongText};
    color: ${e=>e.theme.surface};
  }

  &:focus-visible {
    outline: 2px solid ${e=>e.theme.strongText};
    outline-offset: 3px;
  }
`,ce=n.div``,me=n.section`
  background: ${e=>X(e.$background,e.theme)};
  padding: ${e=>{var i;return null!==(i=e.$padding)&&void 0!==i?i:e.$compact?"0":"3.75rem 0"}};
  ${e=>(e=>{if(!e)return!1;const i=e.trim().replace(/^#/,"");let t,r,n;if(3===i.length)t=parseInt(i[0]+i[0],16),r=parseInt(i[1]+i[1],16),n=parseInt(i[2]+i[2],16);else{if(6!==i.length)return!1;t=parseInt(i.slice(0,2),16),r=parseInt(i.slice(2,4),16),n=parseInt(i.slice(4,6),16)}if([t,r,n].some(Number.isNaN))return!1;const o=[t,r,n].map(e=>{const i=e/255;return i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4)});return.2126*o[0]+.7152*o[1]+.0722*o[2]>.55})(X(e.$background,e.theme))?"\n    h1, h2, h3, h4, h5, h6 { color: #1a1a1a; }\n    p { color: rgba(26, 26, 26, 0.78); }\n  ":""}
`,ge=n.div`
  box-sizing: border-box;
  margin: 0 auto;
  max-width: 64rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;

  @media (max-width: 480px) {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }
`,pe=n.h2`
  font-size: 1.875rem;
  font-weight: 700;
  color: ${e=>e.theme.strongText};
  margin-bottom: 1.5rem;
`,he=e=>{const{children:i,...r}=e;return t.jsx(pe,{...r,children:t.jsx(U,{children:i})})},ue=n.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,xe=n.p`
  margin: 0;
  max-width: 68ch;
  font-size: var(--type-narrative-size);
  line-height: var(--type-narrative-leading);
  color: ${e=>e.theme.mutedText};
`,fe=e=>{const{children:i,...r}=e;return t.jsx(xe,{...r,children:t.jsx(U,{children:i})})},be=n.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`,ve=n(g.div)``,we=n(g.div)`
  overflow: hidden;
  border-radius: 0.5rem;
`,ye=n(j)`
  width: 100%;
  height: 24rem;

  @media (min-width: 768px) {
    height: 100%;
  }
`,je=n(g.div)`
  overflow: hidden;
  border-radius: 0;
`,$e=n.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 16px;
  overflow: hidden;
  background: #000;

  @media (max-width: 767px) {
    border-radius: 12px;
  }
`,ke=n.video`
  display: block;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  background: #000;
  object-fit: cover;
`,Ce=n.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
  align-items: center;

  @media (min-width: 900px) {
    grid-template-columns: ${e=>e.$stacked?"1fr":"1fr 1fr"};
  }
`,Re=n.p`
  margin-top: 0.75rem;
  font-size: 0.875rem;
  font-style: italic;
  color: ${e=>e.theme.mutedText};
`,ze=n.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`,Ie=n(g.div)`
  overflow: hidden;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover img {
    transform: scale(1.02);
  }
`,Se=n(j)`
  width: 100%;

  img {
    transition: transform 0.3s ease-out;
  }
`,Pe=n.div`
  display: grid;
  gap: 1rem;

  ${e=>3===e.$count?"\n        grid-template-columns: 1.2fr 0.8fr;\n        grid-template-rows: auto auto;\n      ":4===e.$count?"\n        grid-template-columns: 1fr 1fr 1fr;\n        grid-template-rows: auto auto;\n      ":"\n      grid-template-columns: repeat(3, 1fr);\n      grid-auto-rows: minmax(200px, auto);\n    "}

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 0.75rem;
    grid-template-rows: auto;
    grid-auto-rows: auto;
  }
`,Be=n(g.div)`
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
`,Ae=n(j)`
  width: 100%;

  img {
    transition: transform 0.5s ease-out;
  }
`,Fe=n.section`
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
`,Me=n(g.div)`
  display: flex;
  flex-direction: column;
  grid-column: 1;
  grid-row: 1 / span 2;

  @media (max-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
  }
`,Te=n.span`
  font-size: 0.85rem;
  line-height: 2.4;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${e=>e.$active?e.theme.strongText:e.theme.mutedText};
  font-weight: ${e=>e.$active?700:600};

  @media (max-width: 768px) {
    line-height: 1.6;
  }
`,We=n.div`
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
`;const Le=n(g.div)`
  position: relative;
  z-index: 1;
`,Ve=n(j)`
  width: 100%;
`,Ee=n(g.div)`
  grid-column: 2;
  grid-row: 2;
`,De=n.h3`
  margin: 0 0 0.35rem;
  font-size: 1.1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: ${e=>e.theme.mutedText};
`,Ne=n(ue)`
  gap: 0.45rem;
`,qe=n(ue)`
  gap: 0.6rem;
`,He=n.section`
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
`,Oe=n(g.div)`
  border-radius: 12px;
  overflow: hidden;
`,Ye=n(g.div)`
  margin-top: 0;
  border-radius: 12px;
  overflow: hidden;

  @media (max-width: 768px) {
    margin-top: 0;
  }
`,Ue=n(j)`
  width: 100%;
`,Ge=n.p`
  margin: 2rem auto 0;
  max-width: 600px;
  text-align: center;
  font-size: 0.95rem;
  color: ${e=>e.theme.mutedText};
`,Xe=n.div`
  margin-top: 2.5rem;
`,Ze=n.p`
  margin: 0 0 0.75rem;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${e=>e.theme.mutedText};
`,_e=n.a`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  max-width: 36rem;
  border: 1px solid ${e=>e.theme.border};
  border-radius: 16px;
  overflow: hidden;
  background: ${e=>e.theme.surfaceMuted};
  text-decoration: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;

  &:hover {
    border-color: ${e=>e.theme.mutedText};
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
    transform: translateY(-2px);
  }
`,Ke=n.div`
  width: 200px;
  min-width: 200px;
  align-self: stretch;
  overflow: hidden;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  @media (max-width: 640px) {
    width: 120px;
    min-width: 120px;
  }
`,Je=n.div`
  padding: 1.25rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.4rem;
`,Qe=n.h3`
  margin: 0 0 0.5rem;
  font-size: 1.25rem;
  font-weight: 700;
  color: ${e=>e.theme.strongText};
  line-height: 1.2;
`,ei=n.p`
  margin: 0 0 1.25rem;
  font-size: 0.9rem;
  line-height: 1.6;
  color: ${e=>e.theme.mutedText};
`,ii=n.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35em;
  font-size: 0.9rem;
  font-weight: 600;
  color: ${e=>e.theme.strongText};
`,ti=n.div`
  margin: 0 0 2rem;
  max-width: 45rem;
`,ri=n(g.div)``,ni=n(fe)`
  font-size: var(--type-narrative-size);
  line-height: var(--type-narrative-leading);
  max-width: 62ch;
  text-wrap: pretty;
`,oi=n.div`
  margin: 0 auto;
  max-width: 800px;
  padding: 5rem 6%;
`,ai=n(g.div)`
  border-left: 3px solid ${e=>e.$accentColor||"#333"};
  padding-left: 2rem;
  margin-left: 0;

  ${e=>e.$accentColor?`\n    background: ${e.$accentColor}12;\n    padding: 3rem 2.5rem;\n    border-radius: 0 12px 12px 0;\n  `:""}
`,di=n.p`
  margin: 0;
  text-align: left;
  font-family: var(--font-display);
  font-size: var(--type-quote-size);
  font-style: italic;
  line-height: var(--type-quote-leading);
  color: ${e=>e.theme.strongText};
  text-wrap: balance;
`,si=n.cite`
  display: block;
  margin-top: 1.5rem;
  font-family: var(--font-mono);
  font-size: 0.85rem;
  font-style: normal;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${e=>e.theme.mutedText};
`,li=n.section`
  display: flex;
  flex-direction: column;
  gap: 0;
  padding: 0;
`,ci=n.div`
  /* Body-width (not 100vw) so inner content lines up with the standard
     Section/SectionContent grid. A 100vw full-bleed here includes the
     scrollbar width and shifts the centered content ~half a scrollbar off. */
  width: 100%;
  padding: 0;
  background: ${e=>X(e.$background,e.theme)||e.theme.surface};
`,mi=n.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  max-width: 64rem;
  margin: 0 auto;
  /* Match the standard SectionContent grid so this module aligns with the
     text/image sections above and below it at every breakpoint */
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: ${e=>e.$fullBleed?"0":"2.5rem"};
  padding-bottom: ${e=>e.$fullBleed?"0":"2.5rem"};

  @media (max-width: 480px) {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }
`,gi=n.div`
  position: relative;
  min-height: 0;
  overflow: hidden;
  border-radius: 12px;
  ${e=>e.$aspectRatio?"":"height: clamp(340px, 46vw, 680px);"}

  ${e=>e.$fullBleed?"\n    width: 100vw;\n    margin-left: calc(-50vw + 50%);\n  ":""}

  @media (max-width: 768px) {
    ${e=>e.$aspectRatio?"":"height: clamp(260px, 58vw, 460px);"}
  }
`,pi=n(j)`
  width: 100%;
`,hi=n.div`
  margin-top: 2.5rem;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.25rem;
`,ui=n.span`
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: ${e=>e.theme.mutedText};
  padding: 0.25rem 0;
`,xi=n.span`
  color: ${e=>e.theme.mutedText};
  margin: 0 0.25rem;
`,fi=n.div`
  margin-top: 1rem;
  padding: 0 0 1.25rem;
`,bi=n.div`
  width: 100%;
  padding: 3.5rem 0 4.5rem;
  background: ${e=>"dark"===e.theme.name?e.theme.surfaceMuted:"#f0efeb"};

  /* Inner blocks mirror SectionContent so the overview/scroll content aligns
     with the hero metadata and every body section on the 64rem grid. */
  > * {
    box-sizing: border-box;
    width: 100%;
    max-width: 64rem;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  @media (max-width: 480px) {
    > * {
      padding-left: 1.25rem;
      padding-right: 1.25rem;
    }
  }

  @media (max-width: 768px) {
    padding: 2.5rem 0 2.5rem;
  }
`,vi=n(g.div)`
  margin-bottom: 3rem;

  &:last-child {
    margin-bottom: 0;
  }
`,wi=n.p`
  margin: 0;
  border-left: 3px solid currentColor;
  padding-left: 1.5rem;
  text-align: left;
  font-family: var(--font-display);
  font-size: var(--type-quote-size);
  font-style: italic;
  line-height: var(--type-quote-leading);
  color: ${e=>e.theme.strongText};
`,yi=n.section`
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
`,ji=n(g.div)`
  position: relative;
  width: 100%;
  height: min(92vh, 920px);

  @media (max-width: 768px) {
    height: min(78vh, 620px);
  }
`,$i=n(j)`
  height: 100%;
  border-radius: 0;
`,ki=n.div`
  position: relative;
  z-index: 2;
  padding: 2.5rem 6% 3.5rem;
  background: ${e=>e.theme.surface};

  @media (max-width: 768px) {
    padding: 2rem 1.25rem;
  }
`,Ci=n(g.h2)`
  color: ${e=>e.theme.strongText};
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  line-height: 1.15;
  max-width: 700px;
  margin: 0 0 1rem;
`,Ri=n(g.p)`
  margin: 0;
  color: ${e=>e.theme.mutedText};
  font-size: var(--type-narrative-size);
  line-height: var(--type-narrative-leading);
  max-width: 540px;
`,zi=n.section`
  position: relative;
  padding: 3.5rem 0;
`,Ii=n.div`
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
`;const Si=n(g.div)`
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
`,Pi=n(j)`
  width: 100%;
`,Bi=n.div`
  position: relative;
  z-index: 1;
  max-width: 45rem;
  margin: 2.5rem 0 0;
  text-align: left;
`,Ai=n.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0;
`,Fi=n.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  /* Cap-height center sits ~2px above the flex mathematical center;
     nudge the logo up so its center aligns with the text visually. */
  transform: translateY(-2px);
`,Mi=n.img`
  height: 1.875rem;
  width: auto;
  max-width: 100px;
  object-fit: contain;
  display: block;
  border-radius: ${e=>e.$rounded?"6px":"0"};
  /* White backplate: constrain to a square so logos of varying natural
     aspect ratios all sit inside a consistent square chip. */
  ${e=>e.$whiteBg?"\n    background: #fff;\n    padding: 5px;\n    border-radius: 6px;\n    width: 1.875rem;\n    height: 1.875rem;\n    object-fit: contain;\n  ":""}
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
  font-family: var(--font-mono);
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
`;const Ti=n(g.button)`
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
  font-family: var(--font-mono);
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

  ${Ti}:hover & {
    color: ${e=>e.theme.strongText};
  }
`;const Wi={duration:.7,ease:[.25,.1,.25,1]},Li={duration:.9,ease:[.25,.1,.25,1]},Vi={once:!0,amount:.2};function Ei({tags:e}){const i=r.useRef(null),n=x(i,{once:!0,margin:"100px"});return t.jsx("div",{ref:i,children:n&&t.jsx(hi,{children:e.map((i,r)=>t.jsx(g.div,{initial:{y:8},animate:{y:0},transition:{duration:.35,delay:.04*r},children:t.jsxs(ui,{children:[i,r<e.length-1&&t.jsx(xi,{children:"•"})]})},`${i}-${r}`))})})}function Di({images:e}){const i=r.useRef(null),n=x(i,{once:!0,margin:"100px"});return t.jsx("div",{ref:i,children:n&&t.jsx(fi,{children:t.jsx(g.div,{initial:{y:12},animate:{y:0},transition:{duration:.45},children:t.jsx(A,{images:e,autoPlay:!0,intervalMs:2800,activeDecoding:"auto"})})})})}const Ni=new Set(["full-width-image","parallax-reveal","image-pair","staggered-pair"]),qi=new Set(["sticky-split","parallax-reveal"]);e("C",r.memo(function({caseStudy:e,nextProject:i,onNextProject:n,topAction:o}){const[a,d]=r.useState(!1),[s,l]=r.useState("idle"),c=e.heroImage||e.coverImage,m=e=>e?e.split("\n\n").filter(e=>e.trim()):[],p=(e,i)=>{if(e.sectionBackground)return e.sectionBackground;const t=(e=>{if(!e)return null;const i=e.trim(),t=/^#([0-9a-fA-F]{3})$/,r=/^#([0-9a-fA-F]{6})$/;if(t.test(i)){const[,e]=i.match(t);return`rgba(${parseInt(e[0]+e[0],16)}, ${parseInt(e[1]+e[1],16)}, ${parseInt(e[2]+e[2],16)}, 0.06)`}if(r.test(i)){const[,e]=i.match(r);return`rgba(${parseInt(e.slice(0,2),16)}, ${parseInt(e.slice(2,4),16)}, ${parseInt(e.slice(4,6),16)}, 0.06)`}return null})(e.accentColor);return t||(i?"white":"#f5f5f5")},u=()=>t.jsxs(re,{children:[t.jsxs(ne,{children:[t.jsx(oe,{children:"Client"}),t.jsx(ae,{children:e.meta.client})]}),t.jsxs(ne,{children:[t.jsx(oe,{children:"Role"}),t.jsx(ae,{children:e.meta.role})]}),t.jsxs(ne,{children:[t.jsx(oe,{children:"Timeline"}),t.jsx(ae,{children:e.meta.timeline})]}),t.jsxs(ne,{children:[t.jsx(oe,{children:"Platform"}),t.jsx(ae,{children:e.meta.platform})]})]}),x=e=>t.jsxs("div",{children:[(e.heading||e.body)&&t.jsx(ti,{style:{marginBottom:"3.75rem"},children:t.jsxs(ri,{children:[e.heading&&t.jsx(he,{children:e.heading}),e.body&&t.jsx(ue,{style:{alignItems:"flex-start"},children:m(e.body).map((e,i)=>t.jsx(fe,{style:{textAlign:"left"},children:e},i))})]})}),t.jsx(je,{initial:{scale:.97},whileInView:{scale:1},viewport:Vi,transition:Li,children:e.images&&e.images[0]&&(()=>{const i=e.images[0],r=t.jsx(ye,{src:i.src,alt:i.alt,avif:i.avif,webp:i.webp,mobileSrc:i.mobileSrc,mobileAvif:i.mobileAvif,mobileWebp:i.mobileWebp,aspectRatio:i.aspectRatio,borderRadius:i.borderRadius||"16px",objectFit:i.objectFit||"cover",objectPosition:i.objectPosition,backgroundColor:i.backgroundColor,imagePaddingBlock:i.imagePaddingBlock,imageScale:i.imageScale,border:i.containerBorder,mixBlendMode:i.mixBlendMode,style:{width:"100%"}});if(i.zoomable){const n=i.zoomAspectRatio||i.aspectRatio||"16/9",o=t.jsx(ye,{src:i.src,alt:i.alt,avif:i.avif,webp:i.webp,mobileSrc:i.mobileSrc,mobileAvif:i.mobileAvif,mobileWebp:i.mobileWebp,aspectRatio:n,borderRadius:i.borderRadius||"8px",objectFit:"contain",backgroundColor:i.backgroundColor,style:{width:"100%"}});return t.jsx(Y,{id:`${e.id}-0`,ariaLabel:`Open ${i.alt} in full-screen viewer`,aspectRatio:n,overlayContent:o,children:r})}return r})()}),e.caption&&t.jsx(Re,{children:e.caption})]},e.id),f=e=>{switch(e.layout){case"text-left-image-right":return(e=>t.jsx("div",{children:t.jsxs(be,{children:[t.jsxs(ve,{initial:{x:-30},whileInView:{x:0},viewport:Vi,transition:Wi,children:[e.heading&&t.jsx(he,{children:e.heading}),t.jsx(ue,{children:m(e.body).map((e,i)=>t.jsx(fe,{children:e},i))})]}),e.images&&e.images[0]&&t.jsx(we,{initial:{x:30},whileInView:{x:0},viewport:Vi,transition:Li,children:t.jsx(ye,{src:e.images[0].src,alt:e.images[0].alt,avif:e.images[0].avif,webp:e.images[0].webp,aspectRatio:e.images[0].aspectRatio||"3/2",borderRadius:"8px",objectFit:"cover"})})]})},e.id))(e);case"text-right-image-left":return(e=>t.jsx("div",{children:t.jsxs(be,{children:[e.images&&e.images[0]&&t.jsx(we,{style:{order:2},initial:{x:-30},whileInView:{x:0},viewport:Vi,transition:Li,children:t.jsx(ye,{src:e.images[0].src,alt:e.images[0].alt,avif:e.images[0].avif,webp:e.images[0].webp,aspectRatio:e.images[0].aspectRatio||"3/2",borderRadius:"8px",objectFit:"cover"})}),t.jsxs(ve,{style:{order:1},initial:{x:30},whileInView:{x:0},viewport:Vi,transition:Wi,children:[e.heading&&t.jsx(he,{children:e.heading}),t.jsx(ue,{children:m(e.body).map((e,i)=>t.jsx(fe,{children:e},i))})]})]})},e.id))(e);case"full-width-image":return x(e);case"image-pair":return(e=>t.jsxs("div",{children:[e.heading&&t.jsx(he,{style:e.headingColor?{color:e.headingColor}:void 0,children:e.heading}),t.jsx(Ce,{$stacked:e.stackImages,style:e.contentMaxWidth?{maxWidth:e.contentMaxWidth,marginInline:"auto"}:void 0,children:e.images&&(e.stackImages?e.images:e.images.slice(0,2)).map((e,i)=>t.jsx(Ie,{initial:{scale:.97},whileInView:{scale:1},viewport:Vi,transition:{...Li,delay:.15*i},children:t.jsx(Se,{src:e.src,alt:e.alt,avif:e.avif,webp:e.webp,mobileSrc:e.mobileSrc,mobileAvif:e.mobileAvif,mobileWebp:e.mobileWebp,aspectRatio:e.aspectRatio,borderRadius:"0.5rem",objectFit:e.objectFit||"contain",backgroundColor:e.backgroundColor,imagePaddingBlock:e.imagePaddingBlock,imagePaddingInline:e.imagePaddingInline,loading:e.loading})},i))})]},e.id))(e);case"gallery-grid":return(e=>t.jsxs("div",{children:[e.heading&&t.jsx(he,{children:e.heading}),t.jsx(ze,{children:e.images&&e.images.map((e,i)=>t.jsx(Ie,{initial:{scale:.95},whileInView:{scale:1},viewport:Vi,whileHover:{scale:1.02},transition:{...Li,delay:.1*i},children:t.jsx(Se,{src:e.src,alt:e.alt,avif:e.avif,webp:e.webp,aspectRatio:e.aspectRatio||"1/1",borderRadius:"8px",objectFit:"cover"})},i))})]},e.id))(e);case"asymmetric-mosaic":return(e=>{const i=e.images||[];return t.jsxs("div",{children:[e.heading&&t.jsx(he,{children:e.heading}),t.jsx(Pe,{$count:i.length,children:i.map((e,r)=>t.jsx(Be,{$index:r,$count:i.length,initial:{y:20,scale:.97},whileInView:{y:0,scale:1},viewport:{once:!0,amount:.2},transition:{...Wi,delay:.08*r},children:t.jsx(Ae,{src:e.src,alt:e.alt,avif:e.avif,webp:e.webp,aspectRatio:e.aspectRatio||"4/3",borderRadius:"10px",objectFit:"cover"})},`${e.src}-${r}`))})]},e.id)})(e);case"three-column-feature":return(e=>{var i;const r=null===(i=e.images)||void 0===i?void 0:i[0],n=e.labels||[];return t.jsxs(Fe,{children:[t.jsx(Me,{initial:{x:-20},whileInView:{x:0},viewport:{once:!0,amount:.2},transition:Wi,children:n.map((e,i)=>t.jsx(Te,{$active:0===i,children:e},`${e}-${i}`))}),t.jsx(We,{children:r&&t.jsx(Le,{initial:{y:24},whileInView:{y:0},viewport:{once:!0,amount:.2},transition:Li,children:t.jsx(Ve,{src:r.src,alt:r.alt,avif:r.avif,webp:r.webp,aspectRatio:r.aspectRatio||"4/5",borderRadius:"12px",objectFit:r.objectFit||"cover",objectPosition:r.objectPosition,backgroundColor:r.backgroundColor,imagePaddingBlock:r.imagePaddingBlock})})}),t.jsxs(Ee,{initial:{x:20},whileInView:{x:0},viewport:{once:!0,amount:.2},transition:Wi,children:[e.heading&&t.jsx(De,{children:e.heading}),t.jsx(Ne,{children:m(e.body).map((e,i)=>t.jsx(fe,{children:e},i))})]})]},e.id)})(e);case"staggered-pair":return(e=>{const i=e.images||[];if(i.length<=1)return x(e);const r=i[0],n=i[1],o=Boolean(e.heading);return t.jsxs("div",{children:[o&&t.jsx(ti,{children:t.jsxs(ri,{initial:{y:20},whileInView:{y:0},viewport:Vi,transition:Wi,children:[t.jsx(he,{style:{textAlign:"left"},children:e.heading}),e.body&&t.jsx(ue,{style:{alignItems:"flex-start"},children:m(e.body).map((e,i)=>t.jsx(ni,{style:{textAlign:"left"},children:e},i))})]})}),t.jsxs(He,{children:[t.jsx(Oe,{initial:{y:30},whileInView:{y:0},viewport:{once:!0,amount:.2},transition:Li,children:t.jsx(Ue,{src:r.src,alt:r.alt,avif:r.avif,webp:r.webp,aspectRatio:r.aspectRatio,borderRadius:"12px",backgroundColor:r.backgroundColor,imagePaddingBlock:r.imagePaddingBlock,objectFit:r.objectFit||"cover",objectPosition:r.objectPosition,border:r.containerBorder})}),t.jsx(Ye,{initial:{y:30},whileInView:{y:0},viewport:{once:!0,amount:.2},transition:{...Li,delay:.15},children:t.jsx(Ue,{src:n.src,alt:n.alt,avif:n.avif,webp:n.webp,aspectRatio:n.aspectRatio,borderRadius:"12px",backgroundColor:n.backgroundColor,imagePaddingBlock:n.imagePaddingBlock,objectFit:n.objectFit||"cover",objectPosition:n.objectPosition||"top center",border:n.containerBorder})})]}),!o&&e.body&&t.jsx(Ge,{children:e.body})]},e.id)})(e);case"related-callout":return(e=>{var i,r;return t.jsx("div",{children:t.jsxs(Xe,{children:[(null===(i=e.labels)||void 0===i?void 0:i[0])&&t.jsx(Ze,{children:e.labels[0]}),t.jsxs(_e,{href:e.relatedHref||"#",children:[(null===(r=e.images)||void 0===r?void 0:r[0])&&t.jsx(Ke,{children:t.jsxs("picture",{style:{display:"block",width:"100%",height:"100%"},children:[e.images[0].avif&&t.jsx("source",{srcSet:e.images[0].avif,type:"image/avif"}),e.images[0].webp&&t.jsx("source",{srcSet:e.images[0].webp,type:"image/webp"}),t.jsx("img",{src:e.images[0].src,alt:e.images[0].alt,loading:"lazy",decoding:"async",style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}})]})}),t.jsxs(Je,{children:[e.heading&&t.jsx(Qe,{children:e.heading}),e.body&&t.jsx(ei,{children:e.body}),t.jsxs(ii,{children:[e.relatedLabel||"View Case Study"," →"]})]})]})]})},e.id)})(e);case"video":return(e=>t.jsxs("div",{children:[(e.heading||e.body)&&t.jsx(ti,{style:{marginBottom:"3.75rem"},children:t.jsxs(ri,{children:[e.heading&&t.jsx(he,{children:e.heading}),e.body&&t.jsx(ue,{style:{alignItems:"flex-start"},children:m(e.body).map((e,i)=>t.jsx(fe,{style:{textAlign:"left"},children:e},i))})]})}),e.video&&t.jsx($e,{children:t.jsx(ke,{controls:!0,playsInline:!0,preload:"metadata",poster:e.video.poster,"aria-label":e.video.ariaLabel,children:t.jsx("source",{src:e.video.src,type:"video/mp4"})})}),e.caption&&t.jsx(Re,{children:e.caption})]},e.id))(e);case"text-only":return(e=>{var i,r,n,o;return t.jsx("div",{children:t.jsx(ti,{children:t.jsxs(ri,{initial:{y:20},whileInView:{y:0},viewport:Vi,transition:Wi,children:[e.heading&&(e.logoSrc?t.jsxs(Ai,{children:[t.jsx(Fi,{children:t.jsxs("picture",{children:[e.logoAvif&&t.jsx("source",{srcSet:e.logoAvif,type:"image/avif"}),e.logoWebp&&t.jsx("source",{srcSet:e.logoWebp,type:"image/webp"}),t.jsx(Mi,{src:e.logoSrc,alt:`${e.heading} logo`,$rounded:null===(i=e.logoSrc)||void 0===i?void 0:i.includes("Walmart"),$whiteBg:(null===(r=e.logoSrc)||void 0===r?void 0:r.includes("Amazon"))||(null===(n=e.logoSrc)||void 0===n?void 0:n.includes("Lyft"))||(null===(o=e.logoSrc)||void 0===o?void 0:o.includes("DoorDash")),loading:"lazy",decoding:"async"})]})}),t.jsx(he,{style:{marginBottom:0,marginTop:0,paddingBottom:"3px",lineHeight:1,...e.headingColor?{color:e.headingColor}:{}},children:e.heading})]}):t.jsx(he,{style:{textAlign:"left"},children:e.heading})),t.jsx(ue,{style:{alignItems:"flex-start"},children:m(e.body).map((e,i)=>t.jsx(ni,{style:{textAlign:"left"},children:e},i))})]})})},e.id)})(e);case"quote":return(e=>t.jsx("div",{children:t.jsx(oi,{children:t.jsxs(ai,{$accentColor:e.accentColor,initial:{y:20},whileInView:{y:0},viewport:Vi,transition:Wi,children:[t.jsx(di,{children:e.body}),e.heading&&t.jsx(si,{children:e.heading})]})})},e.id))(e);case"image-carousel":return(e=>t.jsxs("div",{children:[(e.heading||e.body)&&t.jsx(ti,{children:t.jsxs(ri,{initial:{y:20},whileInView:{y:0},viewport:Vi,transition:Wi,children:[e.heading&&t.jsx(he,{style:{textAlign:"left"},children:e.heading}),e.body&&t.jsx(ue,{style:{alignItems:"flex-start"},children:m(e.body).map((e,i)=>t.jsx(ni,{style:{textAlign:"left"},children:e},i))})]})}),e.images&&e.images.length>0&&t.jsx(g.div,{initial:{scale:.97},whileInView:{scale:1},viewport:Vi,transition:Li,children:t.jsx(A,{images:e.images,autoPlay:!0,intervalMs:7e3,fixedAspectRatio:e.sectionAspectRatio})})]},e.id))(e);case"parallax-reveal":return(e=>{var i,r;const n=null===(i=e.images)||void 0===i?void 0:i[0];return n?t.jsxs(yi,{children:[t.jsx(ji,{children:t.jsx($i,{src:n.src,alt:n.alt,avif:n.avif,webp:n.webp,parallaxSpeed:null!==(r=e.parallaxSpeed)&&void 0!==r?r:.4,objectFit:"cover"})}),t.jsxs(ki,{children:[e.heading&&t.jsx(Ci,{initial:{y:40},whileInView:{y:0},viewport:Vi,transition:Wi,children:e.heading}),e.body&&t.jsx(Ri,{initial:{y:40},whileInView:{y:0},viewport:Vi,transition:{...Wi,delay:.15},children:e.body})]})]},e.id):null})(e);case"image-on-color-block":return(e=>{var i,r,n,o,a;const d=null===(i=e.images)||void 0===i?void 0:i[0];return d?t.jsx(zi,{children:t.jsxs(Ii,{children:[t.jsx(Si,{$containerBorder:d.containerBorder,$containerShadow:d.containerShadow,initial:{y:40},whileInView:{y:0},viewport:Vi,transition:Li,children:t.jsx(Pi,{src:d.src,alt:d.alt,avif:d.avif,webp:d.webp,aspectRatio:d.aspectRatio,borderRadius:d.borderRadius||"12px",containerBorderRadius:d.containerBorderRadius,objectFit:d.objectFit||"cover",objectPosition:d.objectPosition,imageScale:d.imageScale,backgroundColor:d.backgroundColor,imagePaddingBlock:d.imagePaddingBlock,imagePaddingInline:d.imagePaddingInline})}),(e.heading||e.body)&&t.jsxs(Bi,{children:[e.heading&&t.jsxs(Ai,{children:[e.logoSrc&&t.jsx(Fi,{children:t.jsxs("picture",{children:[e.logoAvif&&t.jsx("source",{srcSet:e.logoAvif,type:"image/avif"}),e.logoWebp&&t.jsx("source",{srcSet:e.logoWebp,type:"image/webp"}),t.jsx(Mi,{src:e.logoSrc,alt:`${e.heading} logo`,$rounded:null===(r=e.logoSrc)||void 0===r?void 0:r.includes("Walmart"),$whiteBg:(null===(n=e.logoSrc)||void 0===n?void 0:n.includes("Amazon"))||(null===(o=e.logoSrc)||void 0===o?void 0:o.includes("Lyft"))||(null===(a=e.logoSrc)||void 0===a?void 0:a.includes("DoorDash")),loading:"lazy",decoding:"async"})]})}),t.jsx(he,{style:{marginBottom:0,marginTop:0,paddingBottom:"3px",lineHeight:1,...e.headingColor?{color:e.headingColor}:{}},children:e.heading})]}),e.body&&t.jsx(ue,{style:{alignItems:"flex-start",marginTop:"1.25rem"},children:m(e.body).map((i,r)=>t.jsx(fe,{style:{textAlign:"left",...e.headingColor?{color:"rgba(255,255,255,0.8)"}:{}},children:i},r))})]})]})},e.id):null})(e);case"sticky-split":return(e=>{var i,r,n,o,a,d;const s=(null===(i=e.stickyContent)||void 0===i?void 0:i.image)||(null===(r=e.images)||void 0===r?void 0:r[0]),l=(null===(n=e.stickyContent)||void 0===n?void 0:n.fullBleedImage)||!1,c=(null===(o=e.stickyContent)||void 0===o?void 0:o.tags)||[],g=(null===(a=e.stickyContent)||void 0===a?void 0:a.collateralImages)||[],p=(null===(d=e.scrollContent)||void 0===d?void 0:d.blocks)||[];return t.jsxs(li,{children:[p.length>0&&t.jsx(bi,{children:p.map((i,r)=>{if("text"===i.type)return t.jsxs(vi,{initial:{x:20},whileInView:{x:0},viewport:Vi,transition:Wi,children:[i.heading&&t.jsx(he,{children:i.heading}),t.jsx(qe,{children:m(i.body).map((e,i)=>t.jsx(fe,{children:e},i))})]},`${e.id}-text-${r}`);if("image"===i.type){var n;const o=null===(n=i.images)||void 0===n?void 0:n[0];return o?t.jsx(vi,{initial:{scale:.97},whileInView:{scale:1},viewport:Vi,transition:Li,children:t.jsx(j,{src:o.src,alt:o.alt,avif:o.avif,webp:o.webp,aspectRatio:o.aspectRatio||"3/2",borderRadius:"8px",objectFit:"cover"})},`${e.id}-image-${r}`):null}return"carousel"===i.type?t.jsx(vi,{initial:{scale:.97},whileInView:{scale:1},viewport:Vi,transition:Li,children:i.images&&i.images.length>0&&t.jsx(A,{images:i.images,showControls:!1,showDots:!1})},`${e.id}-carousel-${r}`):"quote"===i.type?t.jsx(vi,{initial:{x:30},whileInView:{x:0},viewport:Vi,transition:Wi,children:t.jsx(wi,{children:i.body})},`${e.id}-quote-${r}`):null})}),(s||c.length>0||g.length>0)&&t.jsx(ci,{$background:e.sectionBackground,children:t.jsxs(mi,{$fullBleed:l,children:[s&&t.jsx(gi,{$fullBleed:l,$aspectRatio:s.aspectRatio,children:t.jsx(pi,{src:s.src,alt:s.alt,avif:s.avif,webp:s.webp,aspectRatio:s.aspectRatio||"16/9",borderRadius:"0",backgroundColor:s.backgroundColor,imagePaddingBlock:s.imagePaddingBlock,objectFit:s.objectFit||"cover",objectPosition:s.objectPosition||"center",imageScale:s.imageScale,border:s.containerBorder,mixBlendMode:s.mixBlendMode,disableRevealAnimation:!0})}),c.length>0&&t.jsx(Ei,{tags:c}),g.length>0&&t.jsx(Di,{images:g})]})})]},e.id)})(e);default:return null}};return t.jsxs(Z,{children:[t.jsxs(_,{children:[t.jsxs(K,{children:[o&&t.jsx(J,{children:o}),t.jsx(u,{}),t.jsx(se,{initial:{y:30},animate:{y:0},transition:{duration:.8,delay:.2,ease:[.25,.1,.25,1]},children:e.heroHeadline}),e.website&&t.jsxs(le,{href:e.website.href,target:"_blank",rel:"noopener noreferrer",children:[e.website.label,t.jsx(h,{"aria-hidden":"true"})]})]}),t.jsx(Q,{children:t.jsxs(te,{$backgroundColor:c.backgroundColor,$border:c.backgroundColor?c.containerBorder:void 0,children:[t.jsx(ee,{src:c.src,alt:c.alt,avif:c.avif,webp:c.webp,mobileSrc:c.mobileSrc,mobileAvif:c.mobileAvif,mobileWebp:c.mobileWebp,aspectRatio:c.aspectRatio||"16/9",borderRadius:"8px",objectFit:c.objectFit||"cover",objectPosition:c.objectPosition||"center",imageScale:1,border:c.backgroundColor?void 0:c.containerBorder,loading:"eager",decoding:"sync",onLoad:()=>d(!0)}),!a&&t.jsx(ie,{initial:{opacity:1},animate:{opacity:0},transition:{duration:.4,delay:.3},"aria-hidden":"true"})]})})]}),t.jsx(ce,{children:e.sections.map((i,r)=>{const n=e.sections[r-1],o=e.sections[r+1],a=qi.has(i.layout),d=Ni.has(i.layout),s=!!n&&Ni.has(n.layout),l=!!o&&Ni.has(o.layout),c=!i.disableCompactPadding&&!i.heading&&!i.body&&d&&(s||l);return a?t.jsx("div",{children:f(i)},i.id):t.jsx("div",{children:t.jsx(me,{$background:p(i,r%2==0),$compact:c,$padding:i.sectionPadding,children:t.jsx(ge,{children:f(i)})})},i.id)})})]})}))}}});
