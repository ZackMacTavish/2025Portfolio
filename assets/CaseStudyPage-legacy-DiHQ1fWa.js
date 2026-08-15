System.register(["./three-legacy-Dbu1oaxp.js","./vendor-legacy-lMxcQOgj.js","./index-legacy-DxEbzP6Z.js","./CaseStudyIntroCTA-legacy-D8MXXXaw.js"],function(e,i){"use strict";var t,r,n,o,a,d,s,l,c,m,g,p,h,u;return{setters:[e=>{t=e.j},e=>{r=e.b,n=e.c,o=e.R,a=e.d},e=>{d=e.u,s=e.k,l=e.M,c=e.B,m=e.l,g=e.w,p=e.D,h=e.A},e=>{u=e.C}],execute:function(){function i(e){const i=d(()=>s(e)),{isStatic:t}=r.useContext(l);if(t){const[,t]=r.useState(e);r.useEffect(()=>i.on("change",t),[])}return i}const x={some:0,all:1};function b(e,{root:i,margin:t,amount:n,once:o=!1,initial:a=!1}={}){const[d,s]=r.useState(a);return r.useEffect(()=>{if(!e.current||o&&d)return;const r={root:i&&i.current||void 0,margin:t,amount:n};return function(e,i,{root:t,margin:r,amount:n="some"}={}){const o=c(e),a=new WeakMap,d=new IntersectionObserver(e=>{e.forEach(e=>{const t=a.get(e.target);if(e.isIntersecting!==Boolean(t))if(e.isIntersecting){const t=i(e.target,e);"function"==typeof t?a.set(e.target,t):d.unobserve(e.target)}else"function"==typeof t&&(t(e),a.delete(e.target))})},{root:t,rootMargin:r,threshold:"number"==typeof n?n:x[n]});return o.forEach(e=>d.observe(e)),()=>d.disconnect()}(e.current,()=>(s(!0),o?void 0:()=>s(!1)),r)},[i,e,t,o,n]),d}function f(e){if(!e)return e;try{return encodeURI(decodeURI(e))}catch{return encodeURI(e)}}const v=n(g.div)`
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: ${e=>e.$borderRadius};
  background: ${e=>e.$backgroundColor||"transparent"};
  ${e=>e.$border?`border: ${e.$border};`:""}

  ${e=>e.$aspectRatio?`\n    aspect-ratio: ${e.$aspectRatio};\n  `:""}
`,w=n.picture`
  display: block;
  width: 100%;
  height: ${e=>e.$fillContainer?"100%":"auto"};
  overflow: hidden;
  border-radius: ${e=>e.$borderRadius};
`,y=n.div`
  position: ${e=>e.$fillContainer?"absolute":"relative"};
  inset: ${e=>{var i,t;return e.$fillContainer?`${e.$imagePaddingBlock||"0"} ${e.$imagePaddingInline||"0"} ${null!==(i=null!==(t=e.$imagePaddingBottom)&&void 0!==t?t:e.$imagePaddingBlock)&&void 0!==i?i:"0"}`:"auto"}};
  padding-block: ${e=>e.$fillContainer?"0":e.$imagePaddingBlock||"0"};
  padding-inline: ${e=>e.$fillContainer?"0":e.$imagePaddingInline||"0"};
  overflow: hidden;
  border-radius: ${e=>e.$borderRadius};
`,$=n(g.img)`
  display: block;
  width: 100%;
  height: ${e=>e.$fillContainer?e.$hasParallax?"110%":"100%":"auto"};
  object-fit: ${e=>e.$objectFit};
  object-position: ${e=>e.$objectPosition};
  border-radius: ${e=>e.$borderRadius};
`;function j({src:e,alt:n,avif:o,webp:a,mobileSrc:d,mobileAvif:s,mobileWebp:l,aspectRatio:c,parallaxSpeed:g=0,className:p,borderRadius:h="12px",imageBorderRadius:u,containerBorderRadius:x,backgroundColor:b,imagePaddingBlock:j,imagePaddingInline:k,imagePaddingBottom:C,objectFit:R="cover",objectPosition:z="center",imageScale:B=1,disableRevealAnimation:S=!1,loading:I="lazy",decoding:P="async",onLoad:M,border:T,mixBlendMode:A}){const F=r.useRef(null),W=m(),[V,L]=r.useState(S||"eager"===I),[E,H]=r.useState(()=>"undefined"!=typeof window&&window.innerWidth<768),D=i(0);r.useEffect(()=>{if("undefined"==typeof window)return;const e=()=>{H(window.innerWidth<768)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]);const O=60*Math.max(0,g),q=g>0&&!W&&!E,N=Boolean(c),G=null!=x?x:h,Y=f(e),K=f(o),U=f(a),Z=f(d),X=f(s),_=f(l);return r.useEffect(()=>{if(S||!Y)return;if("undefined"==typeof window||!window.IntersectionObserver)return;const e=F.current;if(!e)return;const i=new IntersectionObserver(t=>{var r;if(null===(r=t[0])||void 0===r||!r.isIntersecting)return;i.disconnect();const n=e.querySelector("img");if(!n)return void L(!0);const o=()=>{"function"==typeof n.decode?n.decode().then(()=>L(!0)).catch(()=>L(!0)):L(!0)};n.complete?o():(n.onload=o,n.onerror=()=>L(!0))},{rootMargin:"400px 0px"});return i.observe(e),()=>i.disconnect()},[S,Y]),r.useEffect(()=>{if(!q)return void D.set(0);const e=()=>{const e=F.current;if(!e)return;const i=e.getBoundingClientRect(),t=window.innerHeight,r=t+i.height,n=r>0?(t-i.top)/r:.5,o=Math.min(1,Math.max(0,n))*O*2-O;D.set(o)};return e(),window.addEventListener("scroll",e,{passive:!0}),window.addEventListener("resize",e),()=>{window.removeEventListener("scroll",e),window.removeEventListener("resize",e)}},[O,D,q]),t.jsx(v,{ref:F,className:p,$aspectRatio:c,$borderRadius:G,$backgroundColor:b,$border:T,...S?{}:{initial:{opacity:0,y:10},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.2},transition:{duration:.7,ease:[.25,.1,.25,1]}},children:t.jsx(y,{$imagePaddingBlock:j,$imagePaddingInline:k,$imagePaddingBottom:C,$fillContainer:N,$borderRadius:h,children:t.jsxs(w,{$fillContainer:N,$borderRadius:h,children:[X&&t.jsx("source",{srcSet:X,type:"image/avif",media:"(max-width: 900px)"}),_&&t.jsx("source",{srcSet:_,type:"image/webp",media:"(max-width: 900px)"}),Z&&t.jsx("source",{srcSet:Z,media:"(max-width: 900px)"}),K&&t.jsx("source",{srcSet:K,type:"image/avif"}),U&&t.jsx("source",{srcSet:U,type:"image/webp"}),t.jsx($,{src:Y,alt:n,loading:I,decoding:P,onLoad:e=>{null==M||M(e)},style:{y:q?D:0,scale:B,mixBlendMode:A,opacity:V?1:0,transition:V?"opacity 0.3s ease":"none"},$objectFit:R,$objectPosition:z,$hasParallax:q,$fillContainer:N,$borderRadius:u||h})]})})})}const k=n.div`
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
`,C=o.forwardRef((e,i)=>{const{$aspectRatio:r,style:n,...o}=e;return t.jsx(g.div,{ref:i,style:{position:"relative",width:"100%",borderRadius:"16px",clipPath:"inset(0 round 16px)",overflow:"hidden",isolation:"isolate",aspectRatio:r||"16 / 9",maxHeight:"min(80vh, 1000px)",boxShadow:"0 4px 24px rgba(0,0,0,0.08)",outline:"none",cursor:"grab",touchAction:"pan-y",...n||{}},...o})});C.displayName="Frame";const R=n.div`
  position: absolute;
  inset: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${e=>e.$visible?1:0};
  transition: opacity 0.2s ease;
  pointer-events: none;
`,z=n.button`
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
`,B=n.button`
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
`,S=n.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background: ${e=>e.$backgroundColor||"transparent"};
  transition: opacity 320ms ease;
`,I=n(j)`
  width: 100%;
  height: 100%;
  border-radius: 0;
  overflow: visible;

  > div,
  picture,
  img {
    border-radius: 0;
    overflow: visible;
  }

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
`,M=n.button`
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
`;function T({images:e,autoPlay:i=!1,intervalMs:n=7e3,showControls:o=!0,showDots:a=!0,activeDecoding:d="sync",fixedAspectRatio:s}){const[l,c]=r.useState(0),[m,g]=r.useState(0),[p,h]=r.useState(!1),[u,x]=r.useState(!1),[b,f]=r.useState(!1),[v,w]=r.useState(!1),y=r.useRef(null),$=e.length;r.useEffect(()=>{const e=y.current;if(!e)return;const i=new IntersectionObserver(e=>{var i,t;const r=null!==(i=null===(t=e[0])||void 0===t?void 0:t.isIntersecting)&&void 0!==i&&i;w(r)},{threshold:.8});return i.observe(e),()=>i.disconnect()},[]);const j=e=>{if(!$)return;const i=(e+$)%$;g(l),h(!1),c(i)},T=()=>j(l+1),A=()=>j(l-1);if(r.useEffect(()=>{if(!i||b||$<2||!v)return;const e=setInterval(()=>{c(e=>(g(e),(e+1)%$)),h(!1)},n);return()=>clearInterval(e)},[i,n,b,$,v]),!$)return null;const F=e[l],W=e[m],V=e=>e.objectPosition||("contain"===e.objectFit?"center":"top center");return t.jsxs(k,{children:[t.jsxs(C,{ref:y,$aspectRatio:s||F.aspectRatio||"16 / 9",tabIndex:0,"data-carousel-frame":"true",onMouseEnter:()=>x(!0),onMouseLeave:()=>x(!1),onKeyDown:e=>{"ArrowRight"===e.key&&(e.preventDefault(),f(!0),T()),"ArrowLeft"===e.key&&(e.preventDefault(),f(!0),A())},drag:"x",dragDirectionLock:!0,dragElastic:.16,dragMomentum:!1,dragConstraints:{left:0,right:0},onDragStart:()=>f(!0),onDragEnd:(e,i)=>{var t,r;const n=Math.min(48,.12*(null!==(t=null===(r=y.current)||void 0===r?void 0:r.clientWidth)&&void 0!==t?t:400)),o=i.offset.x+.12*i.velocity.x;o>n?A():o<-n&&T()},children:[t.jsx(S,{$backgroundColor:W.backgroundColor,style:{zIndex:1},children:t.jsx(I,{src:W.src,alt:W.alt,avif:W.avif,webp:W.webp,mobileSrc:W.mobileSrc,mobileAvif:W.mobileAvif,mobileWebp:W.mobileWebp,aspectRatio:W.aspectRatio||"3/2",borderRadius:W.borderRadius||"16px",imageBorderRadius:W.imageBorderRadius,backgroundColor:W.backgroundColor,imagePaddingBlock:W.imagePaddingBlock?`var(--carousel-image-padding-block, ${W.imagePaddingBlock})`:void 0,imagePaddingInline:W.imagePaddingInline?`var(--carousel-image-padding-inline, ${W.imagePaddingInline})`:void 0,objectFit:W.objectFit||"cover",objectPosition:V(W),border:W.containerBorder,disableRevealAnimation:!0,loading:"lazy",decoding:"auto"},`prev-${W.src}-${m}`)}),t.jsx(S,{$backgroundColor:F.backgroundColor,style:{zIndex:2,opacity:p?1:0,transition:"opacity 400ms ease"},children:t.jsx(I,{src:F.src,alt:F.alt,avif:F.avif,webp:F.webp,mobileSrc:F.mobileSrc,mobileAvif:F.mobileAvif,mobileWebp:F.mobileWebp,aspectRatio:F.aspectRatio||"3/2",borderRadius:F.borderRadius||"16px",imageBorderRadius:F.imageBorderRadius,backgroundColor:F.backgroundColor,imagePaddingBlock:F.imagePaddingBlock?`var(--carousel-image-padding-block, ${F.imagePaddingBlock})`:void 0,imagePaddingInline:F.imagePaddingInline?`var(--carousel-image-padding-inline, ${F.imagePaddingInline})`:void 0,objectFit:F.objectFit||"cover",objectPosition:V(F),border:F.containerBorder,disableRevealAnimation:!0,loading:"lazy",decoding:d,onLoad:()=>h(!0)},`active-${F.src}-${l}`)}),$>1&&o&&t.jsxs(R,{$visible:u,children:[t.jsx(z,{type:"button",$side:"left","aria-label":"Previous image",onClick:()=>{f(!0),A()},children:t.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:t.jsx("polyline",{points:"15 6 9 12 15 18"})})}),i&&t.jsx(B,{type:"button","aria-label":b?"Resume slideshow":"Pause slideshow",onClick:()=>f(e=>!e),children:b?"▶":"❚❚"}),t.jsx(z,{type:"button",$side:"right","aria-label":"Next image",onClick:()=>{f(!0),T()},children:t.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:t.jsx("polyline",{points:"9 6 15 12 9 18"})})})]})]}),$>1&&a&&t.jsx(P,{children:e.map((e,i)=>t.jsx(M,{type:"button",$active:i===l,"aria-label":`Go to slide ${i+1}`,"aria-current":i===l,onClick:()=>{f(!0),j(i)}},`${e.src}-${i}`))})]})}const A=n(g.button)`
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
`,F=n.span`
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
  font-family: var(--font-body);
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

  ${A}:hover &,
  ${A}:focus-visible & {
    opacity: 1;
    transform: translateY(0);
  }
`,W=n(g.div)`
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
`,V=n(g.div)`
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
`,E=n.button`
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
`,H=n.div`
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
  font-family: var(--font-body);
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
`,O=n.span`
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
`,N=.18;function G(e){const i=e.trim();if(i.includes("/")){const[e,t]=i.split("/").map(e=>parseFloat(e));if(e&&t)return e/t}const t=parseFloat(i);return Number.isFinite(t)&&t>0?t:16/9}function Y({id:e,className:n,children:o,overlayContent:d,ariaLabel:s="Open image in full-screen viewer",aspectRatio:l="16/9"}){const[c,g]=r.useState(!1),[h,u]=r.useState(!1),x=r.useRef(null),b=m(),f=i(1),v=i(0),w=i(0),y=r.useCallback(()=>{const e=G(l);if(e>=.75||"undefined"==typeof window)return 0;const i=Math.min(.9*window.innerWidth,1400)/e,t=Math.min(Math.max(16,.04*window.innerWidth),48),r=window.innerHeight-2*t;return Math.max(0,(i-r)/2)},[l]);r.useEffect(()=>{u(!0)},[]);const $=r.useCallback(()=>{f.set(1),v.set(0),w.set(y())},[f,v,w,y]),j=r.useCallback(()=>{f.set(1),v.set(0),w.set(y()),g(!0)},[f,v,w,y]),k=r.useCallback(()=>{g(!1)},[]);r.useEffect(()=>{if(!c||"undefined"==typeof document)return;const e=document.body.style.overflow;document.body.style.overflow="hidden";const i=e=>{if("Escape"===e.key&&k(),"+"!==e.key&&"="!==e.key||f.set(Math.min(5,f.get()+N)),"-"===e.key||"_"===e.key){const e=Math.max(1,f.get()-N);f.set(e),1===e&&(v.set(0),w.set(y()))}"0"===e.key&&$()};return window.addEventListener("keydown",i),()=>{var t;document.body.style.overflow=e,window.removeEventListener("keydown",i),null===(t=x.current)||void 0===t||t.focus()}},[c,k,f,v,w,$]);const C={x:v,y:w,scale:f},R=null!=d?d:o;return t.jsxs(t.Fragment,{children:[t.jsxs(A,{ref:x,type:"button",layoutId:`zoomable-${e}`,className:n,onClick:j,"aria-label":s,style:{visibility:c?"hidden":"visible"},children:[o,t.jsxs(F,{"aria-hidden":"true",children:[t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("circle",{cx:"11",cy:"11",r:"7"}),t.jsx("line",{x1:"20",y1:"20",x2:"16.65",y2:"16.65"}),t.jsx("line",{x1:"11",y1:"8",x2:"11",y2:"14"}),t.jsx("line",{x1:"8",y1:"11",x2:"14",y2:"11"})]}),"Click to zoom"]})]}),h&&a.createPortal(t.jsx(p,{children:c&&t.jsxs(W,{role:"dialog","aria-modal":"true",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:b?0:.25},onClick:k,children:[t.jsx(E,{type:"button","aria-label":"Close image viewer",onClick:e=>{e.stopPropagation(),k()},children:"×"}),t.jsx(V,{onClick:e=>e.stopPropagation(),onWheel:e=>{e.preventDefault();const i=(e.deltaY>0?-1:1)*N,t=Math.min(5,Math.max(1,f.get()+i));f.set(t),1===t&&(v.set(0),w.set(y()))},children:t.jsx(L,{$ratio:G(l),layoutId:b?void 0:`zoomable-${e}`,style:C,drag:!0,dragMomentum:!1,dragElastic:.08,onDragEnd:()=>{!(G(l)<.75)&&f.get()<=1.001&&(v.set(0),w.set(0))},onDoubleClick:()=>{f.get()>1?$():f.set(2)},transition:{type:"spring",stiffness:260,damping:28},children:R})}),t.jsxs(H,{onClick:e=>e.stopPropagation(),children:[t.jsx(D,{type:"button","aria-label":"Zoom out",onClick:()=>{const e=Math.max(1,f.get()-N);f.set(e),1===e&&(v.set(0),w.set(y()))},children:"−"}),t.jsx(D,{type:"button","aria-label":"Reset zoom",onClick:$,children:"⤢"}),t.jsx(D,{type:"button","aria-label":"Zoom in",onClick:()=>{f.set(Math.min(5,f.get()+N))},children:"+"}),t.jsx(O,{}),t.jsx(q,{children:"Scroll to zoom · drag to pan · double-click to reset · Esc to close"})]})]},"zoomable-backdrop")}),document.body)]})}function K({children:e}){const i=r.Children.toArray(e);if(1!==i.length||"string"!=typeof i[0])return t.jsx(t.Fragment,{children:e});const n=i[0],o=n.trim().split(/\s+/);if(o.length<2)return t.jsx(t.Fragment,{children:n});const a=o.pop(),d=o.pop(),s=o.join(" ");return t.jsxs(t.Fragment,{children:[s,s?" ":"",d," ",a]})}const U=["base","muted","accent"],Z=(e,i)=>({base:i.sectionBase,muted:i.sectionMuted,accent:i.sectionAccent,primary:i.sectionPrimary,primaryMuted:i.sectionPrimaryMuted}[e]),X=(e,i)=>({strong:"accent"===e?i.sectionAccentText:"primary"===e||"primaryMuted"===e?i.onOlive:i.strongText,muted:"accent"===e?i.sectionAccentMutedText:"primary"===e||"primaryMuted"===e?i.onOliveMuted:i.mutedText}),_=new Set(["white","#fff","#ffffff","#fafafa","#f9fafb","#f5f5f5","#f6f8fc","#f0efeb","#e7e7e7","#eeeeee","#eee","var(--surface-muted, #f5f5f5)"]),J=e=>!e||_.has(e.toLowerCase()),Q=(e,i)=>e?"dark"!==i.name?e:J(e)?i.surface:e:e,ee=n.div`
  min-height: 100vh;
  background: ${e=>e.theme.surface};
`,ie=n.section`
  position: relative;
  overflow: hidden;
  min-height: 110vh;
  background-color: ${e=>e.theme.sectionPrimaryMuted};
  /* Horizontal gutter lives on HeroContent (mirroring SectionContent) so the
     hero headline/metadata align with every body section's grid. */
  padding: 5rem 0 10rem;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
      linear-gradient(180deg, ${e=>e.theme.projectHeroWash} 0%, transparent 24%),
      linear-gradient(120deg, ${e=>e.theme.projectHeroWash} 0%, ${e=>e.theme.projectHeroWash} 18%, transparent 68%);
    -webkit-mask-image: linear-gradient(to bottom, #000 0%, #000 48%, transparent 88%);
    mask-image: linear-gradient(to bottom, #000 0%, #000 48%, transparent 88%);
    pointer-events: none;
    z-index: 0;
  }

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
`,te=n.div`
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
`,re=n.div`
  margin-bottom: 1.25rem;
`,ne=n.div`
  position: absolute;
  z-index: 1;
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
`,oe=n(j)`
  width: 100%;

  img {
    filter: saturate(0.96);
  }
`,ae=n(g.div)`
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
`,de=n.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: ${({$backgroundColor:e})=>e||"transparent"};
  padding-block: ${({$backgroundColor:e})=>e?"clamp(1rem, 2vw, 1.5rem)":"0"};
  border-radius: ${({$backgroundColor:e,$borderRadius:i})=>e?"24px":i};
  ${({$border:e})=>e?`border: ${e};`:""}
  overflow: hidden;
`,se=n.div`
  margin-bottom: 3rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`,le=n.div`
  text-align: left;
`,ce=n.p`
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  color: ${e=>e.theme.mutedText};
  text-transform: uppercase;
  margin: 0;
  margin-bottom: 0.5rem;
`,me=n.p`
  font-family: var(--font-mono);
  font-size: 0.875rem;
  color: ${e=>e.theme.mutedText};
  margin: 0;
`,ge=n(g.h1)`
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
`,pe=e=>{const{children:i,...r}=e;return t.jsx(ge,{...r,children:t.jsx(K,{children:i})})},he=n(u).attrs({as:"a"})`
  margin-top: 1rem;
  text-decoration: none;
  white-space: nowrap;

  &:focus-visible {
    outline: 2px solid ${e=>e.theme.strongText};
    outline-offset: 3px;
  }
`,ue=n.div``,xe=n.section`
  background: ${e=>e.$tone?Z(e.$tone,e.theme):Q(e.$background,e.theme)};
  --section-text-strong: ${e=>e.$tone?X(e.$tone,e.theme).strong:e.theme.strongText};
  --section-text-muted: ${e=>e.$tone?X(e.$tone,e.theme).muted:e.theme.mutedText};
  padding: ${e=>{var i;return null!==(i=e.$padding)&&void 0!==i?i:e.$compact?"clamp(1.5rem, 3vw, 2.5rem) 0":e.$standaloneText?"3.75rem 0 clamp(4.75rem, 8vh, 6rem)":"3.75rem 0"}};
  min-height: ${e=>e.$minHeight||"auto"};
  margin-top: ${e=>e.$marginTop||(e.$continuesGroup?"-1px":"0")};
  ${e=>!e.$tone&&(e=>{if(!e)return!1;const i=e.trim().replace(/^#/,"");if(!/^[0-9a-fA-F]{3}$|^[0-9a-fA-F]{6}$/.test(i))return!1;const t=3===i.length?[...i].map(e=>e+e).join(""):i,r=[0,2,4].map(e=>parseInt(t.slice(e,e+2),16)/255).map(e=>e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4));return.2126*r[0]+.7152*r[1]+.0722*r[2]>.55})(Q(e.$background,e.theme))?"\n    h1, h2, h3, h4, h5, h6 { color: #1a1a1a; }\n    p { color: rgba(26, 26, 26, 0.78); }\n  ":""}
`,be=n.div`
  box-sizing: border-box;
  margin: 0 auto;
  max-width: 64rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;

  @media (max-width: 480px) {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }
`,fe=n.h2`
  font-family: var(--font-display);
  font-size: 1.875rem;
  font-weight: 700;
  color: var(--section-text-strong, ${e=>e.theme.strongText});
  margin-bottom: 1.5rem;
`,ve=e=>{const{children:i,...r}=e;return t.jsx(fe,{...r,children:t.jsx(K,{children:i})})},we=n.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,ye=n.p`
  margin: 0;
  max-width: 68ch;
  font-size: var(--type-narrative-size);
  line-height: var(--type-narrative-leading);
  color: var(--section-text-muted, ${e=>e.theme.mutedText});
`,$e=e=>{const{children:i,...r}=e;return t.jsx(ye,{...r,children:t.jsx(K,{children:i})})},je=n.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`,ke=n(g.div)``,Ce=n(g.div)`
  overflow: hidden;
  border-radius: 0.5rem;
`,Re=n(j)`
  width: 100%;
  height: ${e=>e.$hugHeightOnMobile?"auto":"24rem"};

  @media (min-width: 768px) {
    height: 100%;
  }
`,ze=n(g.div)`
  overflow: hidden;
  border-radius: 0;
`,Be=n.div`
  box-sizing: border-box;
  width: 100%;
  max-width: ${e=>e.$maxWidth||"none"};
  margin-inline: auto;
  padding-bottom: ${e=>e.$paddingBottom||"0"};
  padding-inline: ${e=>e.$paddingInline||"0"};
  border-radius: 16px;
  overflow: hidden;
  background: ${e=>e.$backgroundColor||"#000"};
  border: ${e=>e.$border||"0"};

  @media (max-width: 767px) {
    border-radius: 12px;
  }
`,Se=n.div`
  width: 100%;
  aspect-ratio: ${e=>e.$aspectRatio||"16 / 9"};
  overflow: hidden;
  border-radius: inherit;
  background: ${e=>e.$backgroundColor||"#000"};
  isolation: isolate;
  clip-path: inset(0 round 16px);
  transform: translateZ(0);

  @media (max-width: 767px) {
    clip-path: inset(0 round 12px);
  }
`,Ie=n.video`
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 0;
  background: ${e=>e.$backgroundColor||"#000"};
  object-fit: ${e=>e.$objectFit||"cover"};
  transform: scale(${e=>e.$contentScale||1});
  clip-path: ${e=>e.$contentClipInset?`inset(${e.$contentClipInset})`:"none"};
`;function Pe({video:e}){var i,n;const o=r.useRef(null),a=m();return r.useEffect(()=>{const i=o.current;if(!i||!e.autoplayOnView||a)return;const t=new IntersectionObserver(([e])=>{e.isIntersecting?i.play().catch(()=>{}):i.pause()},{threshold:.35});return t.observe(i),()=>t.disconnect()},[a,e.autoplayOnView]),t.jsx(Be,{$maxWidth:e.maxWidth,$backgroundColor:e.backgroundColor,$paddingBottom:e.paddingBottom,$paddingInline:e.paddingInline,$border:e.border,children:t.jsx(Se,{$aspectRatio:e.aspectRatio,$backgroundColor:e.backgroundColor,children:t.jsx(Ie,{ref:o,controls:null!==(i=e.controls)&&void 0!==i?i:Boolean(a||!e.autoplayOnView),playsInline:!0,muted:null!==(n=e.muted)&&void 0!==n?n:e.autoplayOnView,loop:e.loop,preload:"metadata",poster:e.poster,"aria-label":e.ariaLabel,$objectFit:e.objectFit,$contentScale:e.contentScale,$contentClipInset:e.contentClipInset,$backgroundColor:e.backgroundColor,children:t.jsx("source",{src:e.src,type:"video/mp4"})})})})}const Me=n.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
  align-items: center;

  @media (min-width: 900px) {
    grid-template-columns: ${e=>e.$stacked?"1fr":"1fr 1fr"};
  }
`,Te=n.p`
  margin-top: 0.75rem;
  font-size: 0.875rem;
  font-style: italic;
  color: ${e=>e.theme.mutedText};
`,Ae=n.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`,Fe=n(g.div)`
  overflow: hidden;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover img {
    transform: scale(1.02);
  }
`,We=n(j)`
  width: 100%;

  img {
    transition: transform 0.3s ease-out;
  }
`,Ve=n.div`
  display: grid;
  gap: 1rem;

  ${e=>3===e.$count?"\n        grid-template-columns: 1.2fr 0.8fr;\n        grid-template-rows: auto auto;\n      ":4===e.$count?"\n        grid-template-columns: 1fr 1fr 1fr;\n        grid-template-rows: auto auto;\n      ":"\n      grid-template-columns: repeat(3, 1fr);\n      grid-auto-rows: minmax(200px, auto);\n    "}

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 0.75rem;
    grid-template-rows: auto;
    grid-auto-rows: auto;
  }
`,Le=n(g.div)`
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
`,Ee=n(j)`
  width: 100%;

  img {
    transition: transform 0.5s ease-out;
  }
`,He=n.section`
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
`,De=n(g.div)`
  display: flex;
  flex-direction: column;
  grid-column: 1;
  grid-row: 1 / span 2;

  @media (max-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
  }
`,Oe=n.span`
  font-family: var(--font-mono);
  font-size: 0.85rem;
  line-height: 2.4;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${e=>e.$active?e.theme.strongText:e.theme.mutedText};
  font-weight: ${e=>e.$active?700:600};

  @media (max-width: 768px) {
    line-height: 1.6;
  }
`,qe=n.div`
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
`;const Ne=n(g.div)`
  position: relative;
  z-index: 1;
`,Ge=n(j)`
  width: 100%;
`,Ye=n(g.div)`
  grid-column: 2;
  grid-row: 2;
`,Ke=n.h3`
  margin: 0 0 0.35rem;
  font-family: var(--font-mono);
  font-size: 1.1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: ${e=>e.theme.mutedText};
`,Ue=n(we)`
  gap: 0.45rem;
`,Ze=n(we)`
  gap: 0.6rem;
`,Xe=n.section`
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
`,_e=n(g.div)`
  border-radius: 12px;
  overflow: hidden;
`,Je=n(g.div)`
  margin-top: 0;
  border-radius: 12px;
  overflow: hidden;

  @media (max-width: 768px) {
    margin-top: 0;
  }
`,Qe=n(j)`
  width: 100%;
`,ei=n.p`
  margin: 2rem auto 0;
  max-width: 600px;
  text-align: center;
  font-size: 0.95rem;
  color: ${e=>e.theme.mutedText};
`,ii=n.div`
  padding-top: 2.5rem;
`,ti=n.p`
  margin: 0 0 0.75rem;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${e=>e.theme.mutedText};
`,ri=n.a`
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
`,ni=n.div`
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
`,oi=n.div`
  padding: 1.25rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.4rem;
`,ai=n.h3`
  margin: 0 0 0.5rem;
  font-size: 1.25rem;
  font-weight: 700;
  color: ${e=>e.theme.strongText};
  line-height: 1.2;
`,di=n.p`
  margin: 0 0 1.25rem;
  font-size: 0.9rem;
  line-height: 1.6;
  color: ${e=>e.theme.mutedText};
`,si=n.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35em;
  font-size: 0.9rem;
  font-weight: 600;
  color: ${e=>e.theme.strongText};
`,li=n.div`
  margin: 0 0 2rem;
  max-width: 45rem;
`,ci=n(g.div)``,mi=n($e)`
  font-size: var(--type-narrative-size);
  line-height: var(--type-narrative-leading);
  max-width: 62ch;
  text-wrap: pretty;
`;n($e)`
  color: ${e=>e.theme.strongText};
  font-family: var(--font-display);
  font-size: var(--type-standalone-size);
  line-height: var(--type-standalone-leading);
  max-width: 50ch;
  text-wrap: pretty;
`;const gi=n($e)`
  color: ${e=>e.theme.mutedText};
  font-size: 0.875rem;
  line-height: 1.55;
  max-width: 70ch;
  text-wrap: pretty;
`,pi=n.div`
  margin: 0 auto;
  max-width: 800px;
  padding: 5rem 6%;
`,hi=n(g.div)`
  border-left: 3px solid ${e=>e.$accentColor||"#333"};
  padding-left: 2rem;
  margin-left: 0;

  ${e=>e.$accentColor?`\n    background: ${e.$accentColor}12;\n    padding: 3rem 2.5rem;\n    border-radius: 0 12px 12px 0;\n  `:""}
`,ui=n.p`
  margin: 0;
  text-align: left;
  font-family: var(--font-display);
  font-size: var(--type-quote-size);
  font-style: italic;
  line-height: var(--type-quote-leading);
  color: ${e=>e.theme.strongText};
  text-wrap: balance;
`,xi=n.cite`
  display: block;
  margin-top: 1.5rem;
  font-family: var(--font-mono);
  font-size: 0.85rem;
  font-style: normal;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${e=>e.theme.mutedText};
`,bi=n.section`
  display: flex;
  flex-direction: column;
  gap: 0;
  padding: 0;
  background: ${e=>e.$tone?Z(e.$tone,e.theme):Q(e.$background,e.theme)||e.theme.surface};
  --section-text-strong: ${e=>e.$tone?X(e.$tone,e.theme).strong:e.theme.strongText};
  --section-text-muted: ${e=>e.$tone?X(e.$tone,e.theme).muted:e.theme.mutedText};
`,fi=n.div`
  /* Body-width (not 100vw) so inner content lines up with the standard
     Section/SectionContent grid. A 100vw full-bleed here includes the
     scrollbar width and shifts the centered content ~half a scrollbar off. */
  width: 100%;
  padding: 0;
  background: transparent;
`,vi=n.div`
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
`,wi=n.div`
  position: relative;
  min-height: 0;
  overflow: hidden;
  border-radius: 12px;
  ${e=>e.$aspectRatio?"":"height: clamp(340px, 46vw, 680px);"}

  ${e=>e.$fullBleed?"\n    width: 100vw;\n    margin-left: calc(-50vw + 50%);\n  ":""}

  @media (max-width: 768px) {
    ${e=>e.$aspectRatio?"":"height: clamp(260px, 58vw, 460px);"}
  }
`,yi=n(j)`
  width: 100%;
`,$i=n.div`
  margin-top: 2.5rem;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.25rem;
`,ji=n.span`
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: ${e=>e.theme.mutedText};
  padding: 0.25rem 0;
`,ki=n.span`
  color: ${e=>e.theme.mutedText};
  margin: 0 0.25rem;
`,Ci=n.div`
  margin-top: 1rem;
  padding: 0 0 1.25rem;
`,Ri=n.div`
  width: 100%;
  padding: 3.5rem 0 4.5rem;
  background: transparent;

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
`,zi=n(g.div)`
  margin-bottom: 3rem;

  &:last-child {
    margin-bottom: 0;
  }
`,Bi=n.p`
  margin: 0;
  border-left: 3px solid currentColor;
  padding-left: 1.5rem;
  text-align: left;
  font-family: var(--font-display);
  font-size: var(--type-quote-size);
  font-style: italic;
  line-height: var(--type-quote-leading);
  color: ${e=>e.theme.strongText};
`,Si=n.section`
  position: relative;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background: ${e=>e.$tone?Z(e.$tone,e.theme):Q(e.$background,e.theme)||e.theme.surface};
  --section-text-strong: ${e=>e.$tone?X(e.$tone,e.theme).strong:e.theme.strongText};
  --section-text-muted: ${e=>e.$tone?X(e.$tone,e.theme).muted:e.theme.mutedText};

  @media (max-width: 768px) {
    min-height: 80vh;
  }
`,Ii=n(g.div)`
  position: relative;
  width: 100%;
  height: min(92vh, 920px);

  @media (max-width: 768px) {
    height: min(78vh, 620px);
  }
`,Pi=n(j)`
  height: 100%;
  border-radius: 0;
`,Mi=n.div`
  position: relative;
  z-index: 2;
  padding: 2.5rem 6% 3.5rem;
  background: transparent;

  @media (max-width: 768px) {
    padding: 2rem 1.25rem;
  }
`,Ti=n(g.h2)`
  color: ${e=>e.theme.strongText};
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  line-height: 1.15;
  max-width: 700px;
  margin: 0 0 1rem;
`,Ai=n(g.p)`
  margin: 0;
  color: ${e=>e.theme.mutedText};
  font-size: var(--type-narrative-size);
  line-height: var(--type-narrative-leading);
  max-width: 540px;
`,Fi=n.section`
  position: relative;
  padding: 3.5rem 0;
`,Wi=n.div`
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
`;const Vi=n(g.div)`
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
`,Li=n(j)`
  width: 100%;
`,Ei=n.div`
  position: relative;
  z-index: 1;
  max-width: 45rem;
  margin: 2.5rem 0 0;
  text-align: left;
`,Hi=n.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0;
`,Di=n.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  /* Cap-height center sits ~2px above the flex mathematical center;
     nudge the logo up so its center aligns with the text visually. */
  transform: translateY(-2px);
`,Oi=n.img`
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
`;const qi=n(g.button)`
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

  ${qi}:hover & {
    color: ${e=>e.theme.strongText};
  }
`;const Ni={duration:.7,ease:[.25,.1,.25,1]},Gi={duration:.9,ease:[.25,.1,.25,1]},Yi={once:!0,amount:.2};function Ki({tags:e}){const i=r.useRef(null),n=b(i,{once:!0,margin:"100px"});return t.jsx("div",{ref:i,children:n&&t.jsx($i,{children:e.map((i,r)=>t.jsx(g.div,{initial:{y:8},animate:{y:0},transition:{duration:.35,delay:.04*r},children:t.jsxs(ji,{children:[i,r<e.length-1&&t.jsx(ki,{children:"•"})]})},`${i}-${r}`))})})}function Ui({images:e}){const i=r.useRef(null),n=b(i,{once:!0,margin:"100px"});return t.jsx("div",{ref:i,children:n&&t.jsx(Ci,{children:t.jsx(g.div,{initial:{y:12},animate:{y:0},transition:{duration:.45},children:t.jsx(T,{images:e,autoPlay:!0,intervalMs:2800,activeDecoding:"auto"})})})})}const Zi=new Set(["full-width-image","parallax-reveal","image-pair","staggered-pair"]),Xi=new Set(["full-width-image","image-pair","gallery-grid","sticky-split","parallax-reveal","image-on-color-block","asymmetric-mosaic","image-carousel","three-column-feature","staggered-pair","video","text-left-image-right","text-right-image-left"]),_i=new Set(["sticky-split","parallax-reveal"]);e("C",r.memo(function({caseStudy:e,nextProject:i,onNextProject:n,topAction:o}){const[a,d]=r.useState(!1),[s,l]=r.useState("idle"),c=e.heroImage||e.coverImage,m=e=>e?e.split("\n\n").filter(e=>e.trim()):[],p=(e,i)=>e.sectionBackground?e.sectionBackground:(e=>{if(!e||!/^#[0-9a-fA-F]{6}$/.test(e.trim()))return null;const i=e.trim().slice(1),t=[0,2,4].map(e=>parseInt(i.slice(e,e+2),16));return`rgba(${t[0]}, ${t[1]}, ${t[2]}, 0.06)`})(e.accentColor)||(i?"white":"#f5f5f5"),u=e.sections.reduce((e,i,t)=>{const r=p(i,t%2==0),n=t>0?e[t-1]:void 0,o=J(i.sectionBackground),a=i.backgroundGroup||(i.sectionBackground?i.sectionBackground.toLowerCase():null!=n&&n.tone?n.groupKey:`default-${t}`),d=o&&(null==n?void 0:n.tone)&&a===n.groupKey,s=null!=n&&n.tone&&"primary"!==n.tone&&"primaryMuted"!==n.tone?U.indexOf(n.tone):-1,l=o?i.backgroundTone||(d?n.tone:U[(s+1)%U.length]):void 0;return e.push({background:r,tone:l,groupKey:a,continuesGroup:Boolean(d)}),e},[]),x=()=>t.jsxs(se,{children:[t.jsxs(le,{children:[t.jsx(ce,{children:"Client"}),t.jsx(me,{children:e.meta.client})]}),t.jsxs(le,{children:[t.jsx(ce,{children:"Role"}),t.jsx(me,{children:e.meta.role})]}),t.jsxs(le,{children:[t.jsx(ce,{children:"Timeline"}),t.jsx(me,{children:e.meta.timeline})]}),t.jsxs(le,{children:[t.jsx(ce,{children:"Platform"}),t.jsx(me,{children:e.meta.platform})]})]}),b=e=>t.jsxs("div",{children:[(e.heading||e.body)&&t.jsx(li,{style:{marginBottom:"3.75rem"},children:t.jsxs(ci,{children:[e.heading&&t.jsx(ve,{children:e.heading}),e.body&&t.jsx(we,{style:{alignItems:"flex-start"},children:m(e.body).map((e,i)=>t.jsx($e,{style:{textAlign:"left"},children:e},i))})]})}),t.jsx(ze,{initial:{scale:.97},whileInView:{scale:1},viewport:Yi,transition:Gi,children:e.images&&e.images[0]&&(()=>{const i=e.images[0],r=t.jsx(Re,{src:i.src,alt:i.alt,avif:i.avif,webp:i.webp,mobileSrc:i.mobileSrc,mobileAvif:i.mobileAvif,mobileWebp:i.mobileWebp,aspectRatio:i.aspectRatio,borderRadius:i.borderRadius||"16px",objectFit:i.objectFit||"cover",objectPosition:i.objectPosition,backgroundColor:i.backgroundColor,imagePaddingBlock:i.imagePaddingBlock,imageScale:i.imageScale,border:i.containerBorder,mixBlendMode:i.mixBlendMode,$hugHeightOnMobile:i.hugHeightOnMobile,style:{width:"100%"}});if(i.zoomable){const n=i.zoomAspectRatio||i.aspectRatio||"16/9",o=t.jsx(Re,{src:i.zoomSrc||i.src,alt:i.alt,avif:i.zoomAvif||i.avif,webp:i.zoomWebp||i.webp,aspectRatio:n,borderRadius:i.borderRadius||"8px",objectFit:"contain",backgroundColor:i.backgroundColor,disableRevealAnimation:!0,style:{width:"100%"}});return t.jsx(Y,{id:`${e.id}-0`,ariaLabel:`Open ${i.alt} in full-screen viewer`,aspectRatio:n,overlayContent:o,children:r})}return r})()}),e.caption&&t.jsx(Te,{children:e.caption})]},e.id),f=(e,i,r)=>{switch(e.layout){case"text-left-image-right":return(e=>t.jsx("div",{children:t.jsxs(je,{children:[t.jsxs(ke,{initial:{x:-30},whileInView:{x:0},viewport:Yi,transition:Ni,children:[e.heading&&t.jsx(ve,{children:e.heading}),t.jsx(we,{children:m(e.body).map((e,i)=>t.jsx($e,{children:e},i))})]}),e.images&&e.images[0]&&t.jsx(Ce,{initial:{x:30},whileInView:{x:0},viewport:Yi,transition:Gi,children:t.jsx(Re,{src:e.images[0].src,alt:e.images[0].alt,avif:e.images[0].avif,webp:e.images[0].webp,aspectRatio:e.images[0].aspectRatio||"3/2",borderRadius:"8px",objectFit:"cover"})})]})},e.id))(e);case"text-right-image-left":return(e=>t.jsx("div",{children:t.jsxs(je,{children:[e.images&&e.images[0]&&t.jsx(Ce,{style:{order:2},initial:{x:-30},whileInView:{x:0},viewport:Yi,transition:Gi,children:t.jsx(Re,{src:e.images[0].src,alt:e.images[0].alt,avif:e.images[0].avif,webp:e.images[0].webp,aspectRatio:e.images[0].aspectRatio||"3/2",borderRadius:"8px",objectFit:"cover"})}),t.jsxs(ke,{style:{order:1},initial:{x:30},whileInView:{x:0},viewport:Yi,transition:Ni,children:[e.heading&&t.jsx(ve,{children:e.heading}),t.jsx(we,{children:m(e.body).map((e,i)=>t.jsx($e,{children:e},i))})]})]})},e.id))(e);case"full-width-image":return b(e);case"image-pair":return(e=>t.jsxs("div",{children:[e.heading&&t.jsx(ve,{style:e.headingColor?{color:e.headingColor}:void 0,children:e.heading}),t.jsx(Me,{$stacked:e.stackImages,style:e.contentMaxWidth?{maxWidth:e.contentMaxWidth,marginInline:"auto"}:void 0,children:e.images&&(e.stackImages?e.images:e.images.slice(0,2)).map((e,i)=>t.jsx(Fe,{initial:{scale:.97},whileInView:{scale:1},viewport:Yi,transition:{...Gi,delay:.15*i},children:t.jsx(We,{src:e.src,alt:e.alt,avif:e.avif,webp:e.webp,mobileSrc:e.mobileSrc,mobileAvif:e.mobileAvif,mobileWebp:e.mobileWebp,aspectRatio:e.aspectRatio,borderRadius:"0.5rem",objectFit:e.objectFit||"contain",backgroundColor:e.backgroundColor,imagePaddingBlock:e.imagePaddingBlock,imagePaddingInline:e.imagePaddingInline,imagePaddingBottom:e.imagePaddingBottom,imageScale:e.imageScale,border:e.containerBorder,loading:e.loading})},i))})]},e.id))(e);case"gallery-grid":return(e=>t.jsxs("div",{children:[e.heading&&t.jsx(ve,{children:e.heading}),t.jsx(Ae,{children:e.images&&e.images.map((e,i)=>t.jsx(Fe,{initial:{scale:.95},whileInView:{scale:1},viewport:Yi,whileHover:{scale:1.02},transition:{...Gi,delay:.1*i},children:t.jsx(We,{src:e.src,alt:e.alt,avif:e.avif,webp:e.webp,aspectRatio:e.aspectRatio||"1/1",borderRadius:"8px",objectFit:"cover"})},i))})]},e.id))(e);case"asymmetric-mosaic":return(e=>{const i=e.images||[];return t.jsxs("div",{children:[e.heading&&t.jsx(ve,{children:e.heading}),t.jsx(Ve,{$count:i.length,children:i.map((e,r)=>t.jsx(Le,{$index:r,$count:i.length,initial:{y:20,scale:.97},whileInView:{y:0,scale:1},viewport:{once:!0,amount:.2},transition:{...Ni,delay:.08*r},children:t.jsx(Ee,{src:e.src,alt:e.alt,avif:e.avif,webp:e.webp,aspectRatio:e.aspectRatio||"4/3",borderRadius:"10px",objectFit:"cover"})},`${e.src}-${r}`))})]},e.id)})(e);case"three-column-feature":return(e=>{var i;const r=null===(i=e.images)||void 0===i?void 0:i[0],n=e.labels||[];return t.jsxs(He,{children:[t.jsx(De,{initial:{x:-20},whileInView:{x:0},viewport:{once:!0,amount:.2},transition:Ni,children:n.map((e,i)=>t.jsx(Oe,{$active:0===i,children:e},`${e}-${i}`))}),t.jsx(qe,{children:r&&t.jsx(Ne,{initial:{y:24},whileInView:{y:0},viewport:{once:!0,amount:.2},transition:Gi,children:t.jsx(Ge,{src:r.src,alt:r.alt,avif:r.avif,webp:r.webp,aspectRatio:r.aspectRatio||"4/5",borderRadius:"12px",objectFit:r.objectFit||"cover",objectPosition:r.objectPosition,backgroundColor:r.backgroundColor,imagePaddingBlock:r.imagePaddingBlock})})}),t.jsxs(Ye,{initial:{x:20},whileInView:{x:0},viewport:{once:!0,amount:.2},transition:Ni,children:[e.heading&&t.jsx(Ke,{children:e.heading}),t.jsx(Ue,{children:m(e.body).map((e,i)=>t.jsx($e,{children:e},i))})]})]},e.id)})(e);case"staggered-pair":return(e=>{const i=e.images||[];if(i.length<=1)return b(e);const r=i[0],n=i[1],o=Boolean(e.heading);return t.jsxs("div",{children:[o&&t.jsx(li,{children:t.jsxs(ci,{initial:{y:20},whileInView:{y:0},viewport:Yi,transition:Ni,children:[t.jsx(ve,{style:{textAlign:"left"},children:e.heading}),e.body&&t.jsx(we,{style:{alignItems:"flex-start"},children:m(e.body).map((e,i)=>t.jsx(mi,{style:{textAlign:"left"},children:e},i))})]})}),t.jsxs(Xe,{children:[t.jsx(_e,{initial:{y:30},whileInView:{y:0},viewport:{once:!0,amount:.2},transition:Gi,children:t.jsx(Qe,{src:r.src,alt:r.alt,avif:r.avif,webp:r.webp,aspectRatio:r.aspectRatio,borderRadius:"12px",backgroundColor:r.backgroundColor,imagePaddingBlock:r.imagePaddingBlock,objectFit:r.objectFit||"cover",objectPosition:r.objectPosition,border:r.containerBorder})}),t.jsx(Je,{initial:{y:30},whileInView:{y:0},viewport:{once:!0,amount:.2},transition:{...Gi,delay:.15},children:t.jsx(Qe,{src:n.src,alt:n.alt,avif:n.avif,webp:n.webp,aspectRatio:n.aspectRatio,borderRadius:"12px",backgroundColor:n.backgroundColor,imagePaddingBlock:n.imagePaddingBlock,objectFit:n.objectFit||"cover",objectPosition:n.objectPosition||"top center",border:n.containerBorder})})]}),!o&&e.body&&t.jsx(ei,{children:e.body})]},e.id)})(e);case"related-callout":return(e=>{var i,r;return t.jsx("div",{children:t.jsxs(ii,{children:[(null===(i=e.labels)||void 0===i?void 0:i[0])&&t.jsx(ti,{children:e.labels[0]}),t.jsxs(ri,{href:e.relatedHref||"#",children:[(null===(r=e.images)||void 0===r?void 0:r[0])&&t.jsx(ni,{children:t.jsxs("picture",{style:{display:"block",width:"100%",height:"100%"},children:[e.images[0].avif&&t.jsx("source",{srcSet:e.images[0].avif,type:"image/avif"}),e.images[0].webp&&t.jsx("source",{srcSet:e.images[0].webp,type:"image/webp"}),t.jsx("img",{src:e.images[0].src,alt:e.images[0].alt,loading:"lazy",decoding:"async",style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}})]})}),t.jsxs(oi,{children:[e.heading&&t.jsx(ai,{children:e.heading}),e.body&&t.jsx(di,{children:e.body}),t.jsxs(si,{children:[e.relatedLabel||"View Case Study"," →"]})]})]})]})},e.id)})(e);case"video":return(e=>t.jsxs("div",{children:[(e.heading||e.body)&&t.jsx(li,{style:{marginBottom:"3.75rem"},children:t.jsxs(ci,{children:[e.heading&&t.jsx(ve,{children:e.heading}),e.body&&t.jsx(we,{style:{alignItems:"flex-start"},children:m(e.body).map((e,i)=>t.jsx($e,{style:{textAlign:"left"},children:e},i))})]})}),e.video&&t.jsx(Pe,{video:e.video}),e.caption&&t.jsx(Te,{children:e.caption})]},e.id))(e);case"text-only":return(e=>{var i,r,n,o;return t.jsx("div",{children:t.jsx(li,{children:t.jsxs(ci,{initial:{y:20},whileInView:{y:0},viewport:Yi,transition:Ni,children:[e.heading&&(e.logoSrc?t.jsxs(Hi,{children:[t.jsx(Di,{children:t.jsxs("picture",{children:[e.logoAvif&&t.jsx("source",{srcSet:e.logoAvif,type:"image/avif"}),e.logoWebp&&t.jsx("source",{srcSet:e.logoWebp,type:"image/webp"}),t.jsx(Oi,{src:e.logoSrc,alt:`${e.heading} logo`,$rounded:null===(i=e.logoSrc)||void 0===i?void 0:i.includes("Walmart"),$whiteBg:(null===(r=e.logoSrc)||void 0===r?void 0:r.includes("Amazon"))||(null===(n=e.logoSrc)||void 0===n?void 0:n.includes("Lyft"))||(null===(o=e.logoSrc)||void 0===o?void 0:o.includes("DoorDash")),loading:"lazy",decoding:"async"})]})}),t.jsx(ve,{style:{marginBottom:0,marginTop:0,paddingBottom:"3px",lineHeight:1,...e.headingColor?{color:e.headingColor}:{}},children:e.heading})]}):t.jsx(ve,{style:{textAlign:"left"},children:e.heading})),t.jsx(we,{style:{alignItems:"flex-start"},children:m(e.body).map((i,r)=>"credits"===e.id?t.jsx(gi,{style:{textAlign:"left"},children:i},r):t.jsx(mi,{style:{textAlign:"left"},children:i},r))})]})})},e.id)})(e);case"quote":return(e=>t.jsx("div",{children:t.jsx(pi,{children:t.jsxs(hi,{$accentColor:e.accentColor,initial:{y:20},whileInView:{y:0},viewport:Yi,transition:Ni,children:[t.jsx(ui,{children:e.body}),e.heading&&t.jsx(xi,{children:e.heading})]})})},e.id))(e);case"image-carousel":return(e=>t.jsxs("div",{children:[(e.heading||e.body)&&t.jsx(li,{children:t.jsxs(ci,{initial:{y:20},whileInView:{y:0},viewport:Yi,transition:Ni,children:[e.heading&&t.jsx(ve,{style:{textAlign:"left"},children:e.heading}),e.body&&t.jsx(we,{style:{alignItems:"flex-start"},children:m(e.body).map((e,i)=>t.jsx(mi,{style:{textAlign:"left"},children:e},i))})]})}),e.images&&e.images.length>0&&t.jsx(g.div,{initial:{scale:.97},whileInView:{scale:1},viewport:Yi,transition:Gi,children:t.jsx(T,{images:e.images,autoPlay:!0,intervalMs:7e3,fixedAspectRatio:e.sectionAspectRatio})})]},e.id))(e);case"parallax-reveal":return((e,i,r)=>{var n,o;const a=null===(n=e.images)||void 0===n?void 0:n[0];return a?t.jsxs(Si,{$background:i,$tone:r,children:[t.jsx(Ii,{children:t.jsx(Pi,{src:a.src,alt:a.alt,avif:a.avif,webp:a.webp,parallaxSpeed:null!==(o=e.parallaxSpeed)&&void 0!==o?o:.4,objectFit:"cover"})}),t.jsxs(Mi,{children:[e.heading&&t.jsx(Ti,{initial:{y:40},whileInView:{y:0},viewport:Yi,transition:Ni,children:e.heading}),e.body&&t.jsx(Ai,{initial:{y:40},whileInView:{y:0},viewport:Yi,transition:{...Ni,delay:.15},children:e.body})]})]},e.id):null})(e,i,r);case"image-on-color-block":return(e=>{var i,r,n,o,a;const d=null===(i=e.images)||void 0===i?void 0:i[0];return d?t.jsx(Fi,{children:t.jsxs(Wi,{children:[t.jsx(Vi,{$containerBorder:d.containerBorder,$containerShadow:d.containerShadow,initial:{y:40},whileInView:{y:0},viewport:Yi,transition:Gi,children:t.jsx(Li,{src:d.src,alt:d.alt,avif:d.avif,webp:d.webp,aspectRatio:d.aspectRatio,borderRadius:d.borderRadius||"12px",containerBorderRadius:d.containerBorderRadius,objectFit:d.objectFit||"cover",objectPosition:d.objectPosition,imageScale:d.imageScale,backgroundColor:d.backgroundColor,imagePaddingBlock:d.imagePaddingBlock,imagePaddingInline:d.imagePaddingInline})}),(e.heading||e.body)&&t.jsxs(Ei,{children:[e.heading&&t.jsxs(Hi,{children:[e.logoSrc&&t.jsx(Di,{children:t.jsxs("picture",{children:[e.logoAvif&&t.jsx("source",{srcSet:e.logoAvif,type:"image/avif"}),e.logoWebp&&t.jsx("source",{srcSet:e.logoWebp,type:"image/webp"}),t.jsx(Oi,{src:e.logoSrc,alt:`${e.heading} logo`,$rounded:null===(r=e.logoSrc)||void 0===r?void 0:r.includes("Walmart"),$whiteBg:(null===(n=e.logoSrc)||void 0===n?void 0:n.includes("Amazon"))||(null===(o=e.logoSrc)||void 0===o?void 0:o.includes("Lyft"))||(null===(a=e.logoSrc)||void 0===a?void 0:a.includes("DoorDash")),loading:"lazy",decoding:"async"})]})}),t.jsx(ve,{style:{marginBottom:0,marginTop:0,paddingBottom:"3px",lineHeight:1,...e.headingColor?{color:e.headingColor}:{}},children:e.heading})]}),e.body&&t.jsx(we,{style:{alignItems:"flex-start",marginTop:"1.25rem"},children:m(e.body).map((i,r)=>t.jsx($e,{style:{textAlign:"left",...e.headingColor?{color:"rgba(255,255,255,0.8)"}:{}},children:i},r))})]})]})},e.id):null})(e);case"sticky-split":return((e,i,r)=>{var n,o,a,d,s,l;const c=(null===(n=e.stickyContent)||void 0===n?void 0:n.image)||(null===(o=e.images)||void 0===o?void 0:o[0]),g=(null===(a=e.stickyContent)||void 0===a?void 0:a.fullBleedImage)||!1,p=(null===(d=e.stickyContent)||void 0===d?void 0:d.tags)||[],h=(null===(s=e.stickyContent)||void 0===s?void 0:s.collateralImages)||[],u=(null===(l=e.scrollContent)||void 0===l?void 0:l.blocks)||[];return t.jsxs(bi,{$background:i,$tone:r,children:[u.length>0&&t.jsx(Ri,{children:u.map((i,r)=>{if("text"===i.type)return t.jsxs(zi,{initial:{x:20},whileInView:{x:0},viewport:Yi,transition:Ni,children:[i.heading&&t.jsx(ve,{children:i.heading}),t.jsx(Ze,{children:m(i.body).map((e,i)=>t.jsx($e,{children:e},i))})]},`${e.id}-text-${r}`);if("image"===i.type){var n;const o=null===(n=i.images)||void 0===n?void 0:n[0];return o?t.jsx(zi,{initial:{scale:.97},whileInView:{scale:1},viewport:Yi,transition:Gi,children:t.jsx(j,{src:o.src,alt:o.alt,avif:o.avif,webp:o.webp,aspectRatio:o.aspectRatio||"3/2",borderRadius:"8px",objectFit:"cover"})},`${e.id}-image-${r}`):null}return"carousel"===i.type?t.jsx(zi,{initial:{scale:.97},whileInView:{scale:1},viewport:Yi,transition:Gi,children:i.images&&i.images.length>0&&t.jsx(T,{images:i.images,showControls:!1,showDots:!1})},`${e.id}-carousel-${r}`):"quote"===i.type?t.jsx(zi,{initial:{x:30},whileInView:{x:0},viewport:Yi,transition:Ni,children:t.jsx(Bi,{children:i.body})},`${e.id}-quote-${r}`):null})}),(c||p.length>0||h.length>0)&&t.jsx(fi,{children:t.jsxs(vi,{$fullBleed:g,children:[c&&t.jsx(wi,{$fullBleed:g,$aspectRatio:c.aspectRatio,children:t.jsx(yi,{src:c.src,alt:c.alt,avif:c.avif,webp:c.webp,aspectRatio:c.aspectRatio||"16/9",borderRadius:"0",backgroundColor:c.backgroundColor,imagePaddingBlock:c.imagePaddingBlock,objectFit:c.objectFit||"cover",objectPosition:c.objectPosition||"center",imageScale:c.imageScale,border:c.containerBorder,mixBlendMode:c.mixBlendMode,disableRevealAnimation:!0})}),p.length>0&&t.jsx(Ki,{tags:p}),h.length>0&&t.jsx(Ui,{images:h})]})})]},e.id)})(e,i,r);default:return null}};return t.jsxs(ee,{children:[t.jsxs(ie,{children:[t.jsxs(te,{children:[o&&t.jsx(re,{children:o}),t.jsx(x,{}),t.jsx(pe,{initial:{y:30},animate:{y:0},transition:{duration:.8,delay:.2,ease:[.25,.1,.25,1]},children:e.heroHeadline}),e.website&&t.jsxs(he,{href:e.website.href,target:"_blank",rel:"noopener noreferrer",children:[e.website.label,t.jsx(h,{"aria-hidden":"true"})]})]}),t.jsx(ne,{children:t.jsxs(de,{$backgroundColor:c.backgroundColor,$borderRadius:c.borderRadius||"8px",$border:(c.backgroundColor,c.containerBorder||"1px solid var(--border, #d1d5db)"),children:[t.jsx(oe,{src:c.src,alt:c.alt,avif:c.avif,webp:c.webp,mobileSrc:c.mobileSrc,mobileAvif:c.mobileAvif,mobileWebp:c.mobileWebp,aspectRatio:c.aspectRatio||"16/9",borderRadius:c.borderRadius||"8px",objectFit:c.objectFit||"cover",objectPosition:c.objectPosition||"center",imageScale:1,border:void 0,loading:"eager",decoding:"sync",onLoad:()=>d(!0)}),!a&&t.jsx(ae,{initial:{opacity:1},animate:{opacity:0},transition:{duration:.4,delay:.3},"aria-hidden":"true"})]})})]}),t.jsx(ue,{children:e.sections.map((i,r)=>{const{background:n,tone:o,continuesGroup:a}=u[r],d=e.sections[r-1],s=e.sections[r+1],l=_i.has(i.layout),c=Zi.has(i.layout),m=!!d&&Zi.has(d.layout),g=!!s&&Zi.has(s.layout),p=!!s&&Xi.has(s.layout),h=!i.disableCompactPadding&&!i.heading&&!i.body&&c&&(m||g),x="text-only"===i.layout&&!i.sectionPadding&&!p;return l?t.jsx("div",{children:f(i,n,o)},i.id):t.jsx("div",{children:t.jsx(xe,{$background:n,$tone:o,$continuesGroup:a,$compact:h,$padding:i.sectionPadding,$minHeight:i.sectionMinHeight,$marginTop:i.sectionMarginTop,$standaloneText:x,children:t.jsx(be,{children:f(i,n,o)})})},i.id)})})]})}))}}});
