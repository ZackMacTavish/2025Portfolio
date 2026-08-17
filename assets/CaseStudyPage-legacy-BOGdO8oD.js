System.register(["./three-legacy-Dbu1oaxp.js","./vendor-legacy-lMxcQOgj.js","./index-legacy-DtO131i3.js","./CaseStudyIntroCTA-legacy-pFymgbhT.js"],function(e,i){"use strict";var t,n,r,o,a,d,s,l,c,m,g,h,p,u;return{setters:[e=>{t=e.j},e=>{n=e.b,r=e.c,o=e.R,a=e.d},e=>{d=e.u,s=e.k,l=e.M,c=e.B,m=e.l,g=e.w,h=e.D,p=e.A},e=>{u=e.C}],execute:function(){function i(e){const i=d(()=>s(e)),{isStatic:t}=n.useContext(l);if(t){const[,t]=n.useState(e);n.useEffect(()=>i.on("change",t),[])}return i}const x={some:0,all:1};function b(e,{root:i,margin:t,amount:r,once:o=!1,initial:a=!1}={}){const[d,s]=n.useState(a);return n.useEffect(()=>{if(!e.current||o&&d)return;const n={root:i&&i.current||void 0,margin:t,amount:r};return function(e,i,{root:t,margin:n,amount:r="some"}={}){const o=c(e),a=new WeakMap,d=new IntersectionObserver(e=>{e.forEach(e=>{const t=a.get(e.target);if(e.isIntersecting!==Boolean(t))if(e.isIntersecting){const t=i(e.target,e);"function"==typeof t?a.set(e.target,t):d.unobserve(e.target)}else"function"==typeof t&&(t(e),a.delete(e.target))})},{root:t,rootMargin:n,threshold:"number"==typeof r?r:x[r]});return o.forEach(e=>d.observe(e)),()=>d.disconnect()}(e.current,()=>(s(!0),o?void 0:()=>s(!1)),n)},[i,e,t,o,r]),d}function f(e){if(!e)return e;try{return encodeURI(decodeURI(e))}catch{return encodeURI(e)}}const v=r(g.div)`
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: ${e=>e.$borderRadius};
  background: ${e=>e.$backgroundColor||"transparent"};
  ${e=>e.$border?`border: ${e.$border};`:""}

  ${e=>!e.$aspectRatio||e.$isMobile&&e.$hugHeightOnMobile?"":`\n    aspect-ratio: ${e.$aspectRatio};\n  `}
`,w=r.picture`
  display: block;
  width: 100%;
  height: ${e=>e.$fillContainer?"100%":"auto"};
  overflow: hidden;
  border-radius: ${e=>e.$borderRadius};
`,y=r.div`
  position: ${e=>e.$fillContainer?"absolute":"relative"};
  inset: ${e=>{var i,t;return e.$fillContainer?`${e.$imagePaddingBlock||"0"} ${e.$imagePaddingInline||"0"} ${null!==(i=null!==(t=e.$imagePaddingBottom)&&void 0!==t?t:e.$imagePaddingBlock)&&void 0!==i?i:"0"}`:"auto"}};
  padding-block: ${e=>e.$fillContainer?"0":e.$imagePaddingBlock||"0"};
  padding-inline: ${e=>e.$fillContainer?"0":e.$imagePaddingInline||"0"};
  overflow: hidden;
  border-radius: ${e=>e.$borderRadius};
`,j=r(g.img)`
  display: block;
  width: 100%;
  height: ${e=>e.$fillContainer?e.$hasParallax?"110%":"100%":"auto"};
  object-fit: ${e=>e.$objectFit};
  object-position: ${e=>e.$objectPosition};
  border-radius: ${e=>e.$borderRadius};
`;function $({src:e,alt:r,avif:o,webp:a,mobileSrc:d,mobileAvif:s,mobileWebp:l,aspectRatio:c,parallaxSpeed:g=0,className:h,borderRadius:p="12px",imageBorderRadius:u,containerBorderRadius:x,backgroundColor:b,imagePaddingBlock:$,imagePaddingInline:k,imagePaddingBottom:C,objectFit:R="cover",objectPosition:I="center",imageScale:B=1,hugHeightOnMobile:S=!1,disableRevealAnimation:z=!1,loading:P="lazy",decoding:T="async",onLoad:M,border:A,mixBlendMode:F}){const V=n.useRef(null),W=m(),[L,E]=n.useState(z||"eager"===P),[H,O]=n.useState(()=>"undefined"!=typeof window&&window.innerWidth<768),D=i(0);n.useEffect(()=>{if("undefined"==typeof window)return;const e=()=>{O(window.innerWidth<768)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]);const q=60*Math.max(0,g),N=g>0&&!W&&!H,G=Boolean(c),Y=null!=x?x:p,K=f(e),U=f(o),Z=f(a),X=f(d),_=f(s),J=f(l);return n.useEffect(()=>{if(z||!K)return;if("undefined"==typeof window||!window.IntersectionObserver)return;const e=V.current;if(!e)return;const i=new IntersectionObserver(t=>{var n;if(null===(n=t[0])||void 0===n||!n.isIntersecting)return;i.disconnect();const r=e.querySelector("img");if(!r)return void E(!0);const o=()=>{"function"==typeof r.decode?r.decode().then(()=>E(!0)).catch(()=>E(!0)):E(!0)};r.complete?o():(r.onload=o,r.onerror=()=>E(!0))},{rootMargin:"400px 0px"});return i.observe(e),()=>i.disconnect()},[z,K]),n.useEffect(()=>{if(!N)return void D.set(0);const e=()=>{const e=V.current;if(!e)return;const i=e.getBoundingClientRect(),t=window.innerHeight,n=t+i.height,r=n>0?(t-i.top)/n:.5,o=Math.min(1,Math.max(0,r))*q*2-q;D.set(o)};return e(),window.addEventListener("scroll",e,{passive:!0}),window.addEventListener("resize",e),()=>{window.removeEventListener("scroll",e),window.removeEventListener("resize",e)}},[q,D,N]),t.jsx(v,{ref:V,className:h,$aspectRatio:c,$isMobile:H,$hugHeightOnMobile:S,$borderRadius:Y,$backgroundColor:b,$border:A,...z?{}:{initial:{opacity:0,y:10},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.2},transition:{duration:.7,ease:[.25,.1,.25,1]}},children:t.jsx(y,{$imagePaddingBlock:$,$imagePaddingInline:k,$imagePaddingBottom:C,$fillContainer:G,$borderRadius:p,children:t.jsxs(w,{$fillContainer:G,$borderRadius:p,children:[_&&t.jsx("source",{srcSet:_,type:"image/avif",media:"(max-width: 900px)"}),J&&t.jsx("source",{srcSet:J,type:"image/webp",media:"(max-width: 900px)"}),X&&t.jsx("source",{srcSet:X,media:"(max-width: 900px)"}),U&&t.jsx("source",{srcSet:U,type:"image/avif"}),Z&&t.jsx("source",{srcSet:Z,type:"image/webp"}),t.jsx(j,{src:K,alt:r,loading:P,decoding:T,onLoad:e=>{null==M||M(e)},style:{y:N?D:0,scale:B,mixBlendMode:F,opacity:L?1:0,transition:L?"opacity 0.3s ease":"none"},$objectFit:R,$objectPosition:I,$hasParallax:N,$fillContainer:G,$borderRadius:u||p})]})})})}const k=r.div`
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
`,C=o.forwardRef((e,i)=>{const{$aspectRatio:n,style:r,...o}=e;return t.jsx(g.div,{ref:i,style:{position:"relative",width:"100%",borderRadius:"16px",clipPath:"inset(0 round 16px)",overflow:"hidden",isolation:"isolate",aspectRatio:n||"16 / 9",maxHeight:"min(80vh, 1000px)",boxShadow:"0 4px 24px rgba(0,0,0,0.08)",outline:"none",cursor:"grab",touchAction:"pan-y",...r||{}},...o})});C.displayName="Frame";const R=r.div`
  position: absolute;
  inset: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${e=>e.$visible?1:0};
  transition: opacity 0.2s ease;
  pointer-events: none;
`,I=r.button`
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
`,B=r.button`
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
`,S=r.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background: ${e=>e.$backgroundColor||"transparent"};
  transition: opacity 320ms ease;
`,z=r($)`
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
`,P=r.div`
  margin-top: 0.625rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0;
`,T=r.button`
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
`;function M({images:e,autoPlay:i=!1,intervalMs:r=7e3,showControls:o=!0,showDots:a=!0,activeDecoding:d="sync",fixedAspectRatio:s}){const[l,c]=n.useState(0),[m,g]=n.useState(0),[h,p]=n.useState(!1),[u,x]=n.useState(!1),[b,f]=n.useState(!1),[v,w]=n.useState(!1),y=n.useRef(null),j=e.length;n.useEffect(()=>{const e=y.current;if(!e)return;const i=new IntersectionObserver(e=>{var i,t;const n=null!==(i=null===(t=e[0])||void 0===t?void 0:t.isIntersecting)&&void 0!==i&&i;w(n)},{threshold:.8});return i.observe(e),()=>i.disconnect()},[]);const $=e=>{if(!j)return;const i=(e+j)%j;g(l),p(!1),c(i)},M=()=>$(l+1),A=()=>$(l-1);if(n.useEffect(()=>{if(!i||b||j<2||!v)return;const e=setInterval(()=>{c(e=>(g(e),(e+1)%j)),p(!1)},r);return()=>clearInterval(e)},[i,r,b,j,v]),!j)return null;const F=e[l],V=e[m],W=e=>e.objectPosition||("contain"===e.objectFit?"center":"top center");return t.jsxs(k,{children:[t.jsxs(C,{ref:y,$aspectRatio:s||F.aspectRatio||"16 / 9",tabIndex:0,"data-carousel-frame":"true",onMouseEnter:()=>x(!0),onMouseLeave:()=>x(!1),onKeyDown:e=>{"ArrowRight"===e.key&&(e.preventDefault(),f(!0),M()),"ArrowLeft"===e.key&&(e.preventDefault(),f(!0),A())},drag:"x",dragDirectionLock:!0,dragElastic:.16,dragMomentum:!1,dragConstraints:{left:0,right:0},onDragStart:()=>f(!0),onDragEnd:(e,i)=>{var t,n;const r=Math.min(48,.12*(null!==(t=null===(n=y.current)||void 0===n?void 0:n.clientWidth)&&void 0!==t?t:400)),o=i.offset.x+.12*i.velocity.x;o>r?A():o<-r&&M()},children:[t.jsx(S,{$backgroundColor:V.backgroundColor,style:{zIndex:1},children:t.jsx(z,{src:V.src,alt:V.alt,avif:V.avif,webp:V.webp,mobileSrc:V.mobileSrc,mobileAvif:V.mobileAvif,mobileWebp:V.mobileWebp,aspectRatio:V.aspectRatio||"3/2",borderRadius:V.borderRadius||"16px",imageBorderRadius:V.imageBorderRadius,backgroundColor:V.backgroundColor,imagePaddingBlock:V.imagePaddingBlock?`var(--carousel-image-padding-block, ${V.imagePaddingBlock})`:void 0,imagePaddingInline:V.imagePaddingInline?`var(--carousel-image-padding-inline, ${V.imagePaddingInline})`:void 0,objectFit:V.objectFit||"cover",objectPosition:W(V),border:V.containerBorder,disableRevealAnimation:!0,loading:"lazy",decoding:"auto"},`prev-${V.src}-${m}`)}),t.jsx(S,{$backgroundColor:F.backgroundColor,style:{zIndex:2,opacity:h?1:0,transition:"opacity 400ms ease"},children:t.jsx(z,{src:F.src,alt:F.alt,avif:F.avif,webp:F.webp,mobileSrc:F.mobileSrc,mobileAvif:F.mobileAvif,mobileWebp:F.mobileWebp,aspectRatio:F.aspectRatio||"3/2",borderRadius:F.borderRadius||"16px",imageBorderRadius:F.imageBorderRadius,backgroundColor:F.backgroundColor,imagePaddingBlock:F.imagePaddingBlock?`var(--carousel-image-padding-block, ${F.imagePaddingBlock})`:void 0,imagePaddingInline:F.imagePaddingInline?`var(--carousel-image-padding-inline, ${F.imagePaddingInline})`:void 0,objectFit:F.objectFit||"cover",objectPosition:W(F),border:F.containerBorder,disableRevealAnimation:!0,loading:"lazy",decoding:d,onLoad:()=>p(!0)},`active-${F.src}-${l}`)}),j>1&&o&&t.jsxs(R,{$visible:u,children:[t.jsx(I,{type:"button",$side:"left","aria-label":"Previous image",onClick:()=>{f(!0),A()},children:t.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:t.jsx("polyline",{points:"15 6 9 12 15 18"})})}),i&&t.jsx(B,{type:"button","aria-label":b?"Resume slideshow":"Pause slideshow",onClick:()=>f(e=>!e),children:b?"▶":"❚❚"}),t.jsx(I,{type:"button",$side:"right","aria-label":"Next image",onClick:()=>{f(!0),M()},children:t.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:t.jsx("polyline",{points:"9 6 15 12 9 18"})})})]})]}),j>1&&a&&t.jsx(P,{children:e.map((e,i)=>t.jsx(T,{type:"button",$active:i===l,"aria-label":`Go to slide ${i+1}`,"aria-current":i===l,onClick:()=>{f(!0),$(i)}},`${e.src}-${i}`))})]})}const A=r(g.button)`
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
`,F=r.span`
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
`,V=r(g.div)`
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
`,W=r(g.div)`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  touch-action: none;
  cursor: inherit;
`,L=r(g.div)`
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
`,E=r.button`
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
`,H=r.div`
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
`,O=r.button`
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
`,D=r.span`
  width: 1px;
  height: 1.25rem;
  background: rgba(255, 255, 255, 0.18);
  margin: 0 0.35rem;
`,q=r.span`
  padding: 0 0.35rem;
  color: rgba(255, 255, 255, 0.78);
  font-size: 0.78rem;

  @media (max-width: 640px) {
    display: none;
  }
`,N=.18;function G(e){const i=e.trim();if(i.includes("/")){const[e,t]=i.split("/").map(e=>parseFloat(e));if(e&&t)return e/t}const t=parseFloat(i);return Number.isFinite(t)&&t>0?t:16/9}function Y({id:e,className:r,children:o,overlayContent:d,ariaLabel:s="Open image in full-screen viewer",aspectRatio:l="16/9"}){const[c,g]=n.useState(!1),[p,u]=n.useState(!1),x=n.useRef(null),b=m(),f=i(1),v=i(0),w=i(0),y=n.useCallback(()=>{const e=G(l);if(e>=.75||"undefined"==typeof window)return 0;const i=Math.min(.9*window.innerWidth,1400)/e,t=Math.min(Math.max(16,.04*window.innerWidth),48),n=window.innerHeight-2*t;return Math.max(0,(i-n)/2)},[l]);n.useEffect(()=>{u(!0)},[]);const j=n.useCallback(()=>{f.set(1),v.set(0),w.set(y())},[f,v,w,y]),$=n.useCallback(()=>{f.set(1),v.set(0),w.set(y()),g(!0)},[f,v,w,y]),k=n.useCallback(()=>{g(!1)},[]);n.useEffect(()=>{if(!c||"undefined"==typeof document)return;const e=document.body.style.overflow;document.body.style.overflow="hidden";const i=e=>{if("Escape"===e.key&&k(),"+"!==e.key&&"="!==e.key||f.set(Math.min(5,f.get()+N)),"-"===e.key||"_"===e.key){const e=Math.max(1,f.get()-N);f.set(e),1===e&&(v.set(0),w.set(y()))}"0"===e.key&&j()};return window.addEventListener("keydown",i),()=>{var t;document.body.style.overflow=e,window.removeEventListener("keydown",i),null===(t=x.current)||void 0===t||t.focus()}},[c,k,f,v,w,j]);const C={x:v,y:w,scale:f},R=null!=d?d:o;return t.jsxs(t.Fragment,{children:[t.jsxs(A,{ref:x,type:"button",layoutId:`zoomable-${e}`,className:r,onClick:$,"aria-label":s,style:{visibility:c?"hidden":"visible"},children:[o,t.jsxs(F,{"aria-hidden":"true",children:[t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("circle",{cx:"11",cy:"11",r:"7"}),t.jsx("line",{x1:"20",y1:"20",x2:"16.65",y2:"16.65"}),t.jsx("line",{x1:"11",y1:"8",x2:"11",y2:"14"}),t.jsx("line",{x1:"8",y1:"11",x2:"14",y2:"11"})]}),"Click to zoom"]})]}),p&&a.createPortal(t.jsx(h,{children:c&&t.jsxs(V,{role:"dialog","aria-modal":"true",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:b?0:.25},onClick:k,children:[t.jsx(E,{type:"button","aria-label":"Close image viewer",onClick:e=>{e.stopPropagation(),k()},children:"×"}),t.jsx(W,{onClick:e=>e.stopPropagation(),onWheel:e=>{e.preventDefault();const i=(e.deltaY>0?-1:1)*N,t=Math.min(5,Math.max(1,f.get()+i));f.set(t),1===t&&(v.set(0),w.set(y()))},children:t.jsx(L,{$ratio:G(l),layoutId:b?void 0:`zoomable-${e}`,style:C,drag:!0,dragMomentum:!1,dragElastic:.08,onDragEnd:()=>{!(G(l)<.75)&&f.get()<=1.001&&(v.set(0),w.set(0))},onDoubleClick:()=>{f.get()>1?j():f.set(2)},transition:{type:"spring",stiffness:260,damping:28},children:R})}),t.jsxs(H,{onClick:e=>e.stopPropagation(),children:[t.jsx(O,{type:"button","aria-label":"Zoom out",onClick:()=>{const e=Math.max(1,f.get()-N);f.set(e),1===e&&(v.set(0),w.set(y()))},children:"−"}),t.jsx(O,{type:"button","aria-label":"Reset zoom",onClick:j,children:"⤢"}),t.jsx(O,{type:"button","aria-label":"Zoom in",onClick:()=>{f.set(Math.min(5,f.get()+N))},children:"+"}),t.jsx(D,{}),t.jsx(q,{children:"Scroll to zoom · drag to pan · double-click to reset · Esc to close"})]})]},"zoomable-backdrop")}),document.body)]})}function K({children:e}){const i=n.Children.toArray(e);if(1!==i.length||"string"!=typeof i[0])return t.jsx(t.Fragment,{children:e});const r=i[0],o=r.trim().split(/\s+/);if(o.length<2)return t.jsx(t.Fragment,{children:r});const a=o.pop(),d=o.pop(),s=o.join(" ");return t.jsxs(t.Fragment,{children:[s,s?" ":"",d," ",a]})}const U=["base","muted","accent"],Z=(e,i)=>({base:i.sectionBase,muted:i.sectionMuted,accent:i.sectionAccent,primary:i.sectionPrimary,primaryMuted:i.sectionPrimaryMuted}[e]),X=(e,i)=>({strong:"accent"===e?i.sectionAccentText:"primary"===e||"primaryMuted"===e?i.onOlive:i.strongText,muted:"accent"===e?i.sectionAccentMutedText:"primary"===e||"primaryMuted"===e?i.onOliveMuted:i.mutedText}),_=new Set(["white","#fff","#ffffff","#fafafa","#f9fafb","#f5f5f5","#f6f8fc","#f0efeb","#e7e7e7","#eeeeee","#eee","var(--surface-muted, #f5f5f5)"]),J=e=>!e||_.has(e.toLowerCase()),Q=(e,i)=>e?"dark"!==i.name?e:J(e)?i.surface:e:e,ee=r.div`
  min-height: 100vh;
  background: ${e=>e.theme.surface};
`,ie=r.section`
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
`,te=r.div`
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
`,ne=r.div`
  margin-bottom: 1.25rem;
`,re=r.div`
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
`,oe=r($)`
  width: 100%;

  img {
    filter: saturate(0.96);
  }
`,ae=r(g.div)`
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
`,de=r.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: ${({$backgroundColor:e})=>e||"transparent"};
  padding-block: ${({$backgroundColor:e})=>e?"clamp(1rem, 2vw, 1.5rem)":"0"};
  border-radius: ${({$backgroundColor:e,$borderRadius:i})=>e?"24px":i};
  ${({$border:e})=>e?`border: ${e};`:""}
  overflow: hidden;
`,se=r.div`
  margin-bottom: 3rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`,le=r.div`
  text-align: left;
`,ce=r.p`
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  color: ${e=>e.theme.mutedText};
  text-transform: uppercase;
  margin: 0;
  margin-bottom: 0.5rem;
`,me=r.p`
  font-family: var(--font-mono);
  font-size: 0.875rem;
  color: ${e=>e.theme.mutedText};
  margin: 0;
`,ge=r(g.h1)`
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
`,he=e=>{const{children:i,...n}=e;return t.jsx(ge,{...n,children:t.jsx(K,{children:i})})},pe=r(u).attrs({as:"a"})`
  margin-top: 1rem;
  text-decoration: none;
  white-space: nowrap;

  &:focus-visible {
    outline: 2px solid ${e=>e.theme.strongText};
    outline-offset: 3px;
  }
`,ue=r.div``,xe=r.section`
  background: ${e=>e.$tone?Z(e.$tone,e.theme):Q(e.$background,e.theme)};
  --section-text-strong: ${e=>e.$tone?X(e.$tone,e.theme).strong:e.theme.strongText};
  --section-text-muted: ${e=>e.$tone?X(e.$tone,e.theme).muted:e.theme.mutedText};
  padding: ${e=>{var i;return null!==(i=e.$padding)&&void 0!==i?i:e.$compact?"clamp(1.5rem, 3vw, 2.5rem) 0":e.$standaloneText?"3.75rem 0 clamp(4.75rem, 8vh, 6rem)":"3.75rem 0"}};
  min-height: ${e=>e.$minHeight||"auto"};
  margin-top: ${e=>e.$marginTop||(e.$continuesGroup?"-1px":"0")};
  ${e=>!e.$tone&&(e=>{if(!e)return!1;const i=e.trim().replace(/^#/,"");if(!/^[0-9a-fA-F]{3}$|^[0-9a-fA-F]{6}$/.test(i))return!1;const t=3===i.length?[...i].map(e=>e+e).join(""):i,n=[0,2,4].map(e=>parseInt(t.slice(e,e+2),16)/255).map(e=>e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4));return.2126*n[0]+.7152*n[1]+.0722*n[2]>.55})(Q(e.$background,e.theme))?"\n    h1, h2, h3, h4, h5, h6 { color: #1a1a1a; }\n    p { color: rgba(26, 26, 26, 0.78); }\n  ":""}
`,be=r.div`
  box-sizing: border-box;
  margin: 0 auto;
  max-width: 64rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;

  @media (max-width: 480px) {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }
`,fe=r.h2`
  font-family: var(--font-display);
  font-size: 1.875rem;
  font-weight: 700;
  color: var(--section-text-strong, ${e=>e.theme.strongText});
  margin-bottom: 1.5rem;
`,ve=e=>{const{children:i,...n}=e;return t.jsx(fe,{...n,children:t.jsx(K,{children:i})})},we=r.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,ye=r.p`
  margin: 0;
  max-width: 68ch;
  font-size: var(--type-narrative-size);
  line-height: var(--type-narrative-leading);
  color: var(--section-text-muted, ${e=>e.theme.mutedText});
`,je=e=>{const{children:i,...n}=e;return t.jsx(ye,{...n,children:t.jsx(K,{children:i})})},$e=r.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`,ke=r(g.div)``,Ce=r(g.div)`
  overflow: hidden;
  border-radius: 0.5rem;
`,Re=r($)`
  width: 100%;
  height: ${e=>e.$hugHeightOnMobile?"auto":"24rem"};

  @media (min-width: 768px) {
    height: 100%;
  }
`,Ie=r(g.div)`
  overflow: hidden;
  border-radius: 0;
`,Be=r.div`
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
`,Se=r.div`
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
`,ze=r.video`
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 0;
  background: ${e=>e.$backgroundColor||"#000"};
  object-fit: ${e=>e.$objectFit||"cover"};
  transform: scale(${e=>e.$contentScale||1});
  clip-path: ${e=>e.$contentClipInset?`inset(${e.$contentClipInset})`:"none"};
`;function Pe({video:e}){var i,r;const o=n.useRef(null),a=m();return n.useEffect(()=>{const i=o.current;if(!i||!e.autoplayOnView||a)return;const t=new IntersectionObserver(([e])=>{e.isIntersecting?i.play().catch(()=>{}):i.pause()},{threshold:.35});return t.observe(i),()=>t.disconnect()},[a,e.autoplayOnView]),t.jsx(Be,{$maxWidth:e.maxWidth,$backgroundColor:e.backgroundColor,$paddingBottom:e.paddingBottom,$paddingInline:e.paddingInline,$border:e.border,children:t.jsx(Se,{$aspectRatio:e.aspectRatio,$backgroundColor:e.backgroundColor,children:t.jsx(ze,{ref:o,controls:null!==(i=e.controls)&&void 0!==i?i:Boolean(a||!e.autoplayOnView),playsInline:!0,muted:null!==(r=e.muted)&&void 0!==r?r:e.autoplayOnView,loop:e.loop,preload:"metadata",poster:e.poster,"aria-label":e.ariaLabel,$objectFit:e.objectFit,$contentScale:e.contentScale,$contentClipInset:e.contentClipInset,$backgroundColor:e.backgroundColor,children:t.jsx("source",{src:e.src,type:"video/mp4"})})})})}const Te=r.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
  align-items: center;

  @media (min-width: 900px) {
    grid-template-columns: ${e=>e.$stacked?"1fr":"1fr 1fr"};
  }
`,Me=r.p`
  margin-top: 0.75rem;
  font-size: 0.875rem;
  font-style: italic;
  color: ${e=>e.theme.mutedText};
`,Ae=r.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`,Fe=r(g.div)`
  overflow: hidden;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover img {
    transform: scale(1.02);
  }
`,Ve=r($)`
  width: 100%;

  img {
    transition: transform 0.3s ease-out;
  }
`,We=r.div`
  display: grid;
  gap: 1rem;

  ${e=>3===e.$count?"\n        grid-template-columns: 1.2fr 0.8fr;\n        grid-template-rows: auto auto;\n      ":4===e.$count?"\n        grid-template-columns: 1fr 1fr 1fr;\n        grid-template-rows: auto auto;\n      ":"\n      grid-template-columns: repeat(3, 1fr);\n      grid-auto-rows: minmax(200px, auto);\n    "}

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 0.75rem;
    grid-template-rows: auto;
    grid-auto-rows: auto;
  }
`,Le=r(g.div)`
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
`,Ee=r($)`
  width: 100%;

  img {
    transition: transform 0.5s ease-out;
  }
`,He=r.section`
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
`,Oe=r(g.div)`
  display: flex;
  flex-direction: column;
  grid-column: 1;
  grid-row: 1 / span 2;

  @media (max-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
  }
`,De=r.span`
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
`,qe=r.div`
  position: relative;
  grid-column: 2;
  grid-row: 1;
`;r(g.div)`
  position: absolute;
  inset: 0;
  margin: -20px;
  border-radius: 14px;
  z-index: 0;
  background: ${e=>e.$accentColor};
`;const Ne=r(g.div)`
  position: relative;
  z-index: 1;
`,Ge=r($)`
  width: 100%;
`,Ye=r(g.div)`
  grid-column: 2;
  grid-row: 2;
`,Ke=r.h3`
  margin: 0 0 0.35rem;
  font-family: var(--font-mono);
  font-size: 1.1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: ${e=>e.theme.mutedText};
`,Ue=r(we)`
  gap: 0.45rem;
`,Ze=r(we)`
  gap: 0.6rem;
`,Xe=r.section`
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
`,_e=r(g.div)`
  border-radius: 12px;
  overflow: hidden;
`,Je=r(g.div)`
  margin-top: 0;
  border-radius: 12px;
  overflow: hidden;

  @media (max-width: 768px) {
    margin-top: 0;
  }
`,Qe=r($)`
  width: 100%;
`,ei=r.p`
  margin: 2rem auto 0;
  max-width: 600px;
  text-align: center;
  font-size: 0.95rem;
  color: ${e=>e.theme.mutedText};
`,ii=r.div`
  padding-top: 2.5rem;
`,ti=r.p`
  margin: 0 0 0.75rem;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${e=>e.theme.mutedText};
`,ni=r.a`
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
`,ri=r.div`
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
`,oi=r.div`
  padding: 1.25rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.4rem;
`,ai=r.h3`
  margin: 0 0 0.5rem;
  font-size: 1.25rem;
  font-weight: 700;
  color: ${e=>e.theme.strongText};
  line-height: 1.2;
`,di=r.p`
  margin: 0 0 1.25rem;
  font-size: 0.9rem;
  line-height: 1.6;
  color: ${e=>e.theme.mutedText};
`,si=r.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35em;
  font-size: 0.9rem;
  font-weight: 600;
  color: ${e=>e.theme.strongText};
`,li=r.div`
  margin: 0 0 2rem;
  max-width: 45rem;
`,ci=r(g.div)``,mi=r(je)`
  font-size: var(--type-narrative-size);
  line-height: var(--type-narrative-leading);
  max-width: 62ch;
  text-wrap: pretty;
`;r(je)`
  color: ${e=>e.theme.strongText};
  font-family: var(--font-display);
  font-size: var(--type-standalone-size);
  line-height: var(--type-standalone-leading);
  max-width: 50ch;
  text-wrap: pretty;
`;const gi=r(je)`
  color: ${e=>e.theme.mutedText};
  font-size: 0.875rem;
  line-height: 1.55;
  max-width: 70ch;
  text-wrap: pretty;
`,hi=r.div`
  margin: 0 auto;
  max-width: 800px;
  padding: 5rem 6%;
`,pi=r(g.div)`
  border-left: 3px solid ${e=>e.$accentColor||"#333"};
  padding-left: 2rem;
  margin-left: 0;

  ${e=>e.$accentColor?`\n    background: ${e.$accentColor}12;\n    padding: 3rem 2.5rem;\n    border-radius: 0 12px 12px 0;\n  `:""}
`,ui=r.p`
  margin: 0;
  text-align: left;
  font-family: var(--font-display);
  font-size: var(--type-quote-size);
  font-style: italic;
  line-height: var(--type-quote-leading);
  color: ${e=>e.theme.strongText};
  text-wrap: balance;
`,xi=r.cite`
  display: block;
  margin-top: 1.5rem;
  font-family: var(--font-mono);
  font-size: 0.85rem;
  font-style: normal;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${e=>e.theme.mutedText};
`,bi=r.section`
  display: flex;
  flex-direction: column;
  gap: 0;
  padding: 0;
  background: ${e=>e.$tone?Z(e.$tone,e.theme):Q(e.$background,e.theme)||e.theme.surface};
  --section-text-strong: ${e=>e.$tone?X(e.$tone,e.theme).strong:e.theme.strongText};
  --section-text-muted: ${e=>e.$tone?X(e.$tone,e.theme).muted:e.theme.mutedText};
`,fi=r.div`
  /* Body-width (not 100vw) so inner content lines up with the standard
     Section/SectionContent grid. A 100vw full-bleed here includes the
     scrollbar width and shifts the centered content ~half a scrollbar off. */
  width: 100%;
  padding: 0;
  background: transparent;
`,vi=r.div`
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
`,wi=r.div`
  position: relative;
  min-height: 0;
  overflow: hidden;
  border-radius: 12px;
  ${e=>e.$aspectRatio?"":"height: clamp(340px, 46vw, 680px);"}

  ${e=>e.$fullBleed?"\n    width: 100vw;\n    margin-left: calc(-50vw + 50%);\n  ":""}

  @media (max-width: 768px) {
    ${e=>e.$aspectRatio?"":"height: clamp(260px, 58vw, 460px);"}
  }
`,yi=r($)`
  width: 100%;
`,ji=r.div`
  margin-top: 2.5rem;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.25rem;
`,$i=r.span`
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: ${e=>e.theme.mutedText};
  padding: 0.25rem 0;
`,ki=r.span`
  color: ${e=>e.theme.mutedText};
  margin: 0 0.25rem;
`,Ci=r.div`
  margin-top: 1rem;
  padding: 0 0 1.25rem;
`,Ri=r.div`
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
`,Ii=r(g.div)`
  margin-bottom: 3rem;

  &:last-child {
    margin-bottom: 0;
  }
`,Bi=r.p`
  margin: 0;
  border-left: 3px solid currentColor;
  padding-left: 1.5rem;
  text-align: left;
  font-family: var(--font-display);
  font-size: var(--type-quote-size);
  font-style: italic;
  line-height: var(--type-quote-leading);
  color: ${e=>e.theme.strongText};
`,Si=r.section`
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
`,zi=r(g.div)`
  position: relative;
  width: 100%;
  height: min(92vh, 920px);

  @media (max-width: 768px) {
    height: min(78vh, 620px);
  }
`,Pi=r($)`
  height: 100%;
  border-radius: 0;
`,Ti=r.div`
  position: relative;
  z-index: 2;
  padding: 2.5rem 6% 3.5rem;
  background: transparent;

  @media (max-width: 768px) {
    padding: 2rem 1.25rem;
  }
`,Mi=r(g.h2)`
  color: ${e=>e.theme.strongText};
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  line-height: 1.15;
  max-width: 700px;
  margin: 0 0 1rem;
`,Ai=r(g.p)`
  margin: 0;
  color: ${e=>e.theme.mutedText};
  font-size: var(--type-narrative-size);
  line-height: var(--type-narrative-leading);
  max-width: 540px;
`,Fi=r.section`
  position: relative;
  padding: ${e=>e.$flushTop?"2rem 0 3.5rem":"3.5rem 0"};
`,Vi=r.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 64rem;
`;r(g.div)`
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
`;const Wi=r(g.div)`
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
`,Li=r($)`
  width: 100%;
`,Ei=r.div`
  position: relative;
  z-index: 1;
  max-width: 45rem;
  margin: 2.5rem 0 0;
  text-align: left;
`,Hi=r.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0;
`,Oi=r.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  /* Cap-height center sits ~2px above the flex mathematical center;
     nudge the logo up so its center aligns with the text visually. */
  transform: translateY(-2px);
`,Di=r.img`
  height: 1.875rem;
  width: auto;
  max-width: 100px;
  object-fit: contain;
  display: block;
  border-radius: ${e=>e.$rounded?"6px":"0"};
  /* White backplate: constrain to a square so logos of varying natural
     aspect ratios all sit inside a consistent square chip. */
  ${e=>e.$whiteBg?"\n    background: #fff;\n    padding: 5px;\n    border-radius: 6px;\n    width: 1.875rem;\n    height: 1.875rem;\n    object-fit: contain;\n  ":""}
`;r.section`
  border-top: 1px solid ${e=>e.theme.border};
  background: ${e=>e.theme.surface};
  padding: 4rem 1.5rem 6rem;

  @media (min-width: 768px) {
    padding: 6rem 1.5rem;
  }
`,r.div`
  margin: 0 auto;
  max-width: 64rem;
`,r.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 2rem;
`,r.p`
  margin: 0;
  font-family: var(--font-mono);
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  color: ${e=>e.theme.mutedText};
  text-transform: uppercase;
`,r.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`,r.button`
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
`;const qi=r(g.button)`
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
  font-family: var(--font-mono);
  font-size: 0.875rem;
  letter-spacing: 0.1em;
  color: ${e=>e.theme.mutedText};
  text-transform: uppercase;
  margin: 0;
`,r.h3`
  margin-top: 0.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${e=>e.theme.strongText};

  @media (min-width: 768px) {
    margin-top: 0;
    font-size: 1.875rem;
  }
`,r.div`
  font-size: 1.5rem;
  color: ${e=>e.theme.mutedText};
  transition: color 200ms;

  ${qi}:hover & {
    color: ${e=>e.theme.strongText};
  }
`;const Ni={duration:.7,ease:[.25,.1,.25,1]},Gi={duration:.9,ease:[.25,.1,.25,1]},Yi={once:!0,amount:.2};function Ki({tags:e}){const i=n.useRef(null),r=b(i,{once:!0,margin:"100px"});return t.jsx("div",{ref:i,children:r&&t.jsx(ji,{children:e.map((i,n)=>t.jsx(g.div,{initial:{y:8},animate:{y:0},transition:{duration:.35,delay:.04*n},children:t.jsxs($i,{children:[i,n<e.length-1&&t.jsx(ki,{children:"•"})]})},`${i}-${n}`))})})}function Ui({images:e}){const i=n.useRef(null),r=b(i,{once:!0,margin:"100px"});return t.jsx("div",{ref:i,children:r&&t.jsx(Ci,{children:t.jsx(g.div,{initial:{y:12},animate:{y:0},transition:{duration:.45},children:t.jsx(M,{images:e,autoPlay:!0,intervalMs:2800,activeDecoding:"auto"})})})})}const Zi=new Set(["full-width-image","parallax-reveal","image-pair","staggered-pair"]),Xi=new Set(["full-width-image","image-pair","gallery-grid","sticky-split","parallax-reveal","image-on-color-block","asymmetric-mosaic","image-carousel","three-column-feature","staggered-pair","video","text-left-image-right","text-right-image-left"]),_i=new Set(["sticky-split","parallax-reveal"]);e("C",n.memo(function({caseStudy:e,nextProject:i,onNextProject:r,topAction:o}){const[a,d]=n.useState(!1),[s,l]=n.useState("idle"),c=e.heroImage||e.coverImage,m=e=>e?e.split("\n\n").filter(e=>e.trim()):[],h=(e,i)=>e.sectionBackground?e.sectionBackground:(e=>{if(!e||!/^#[0-9a-fA-F]{6}$/.test(e.trim()))return null;const i=e.trim().slice(1),t=[0,2,4].map(e=>parseInt(i.slice(e,e+2),16));return`rgba(${t[0]}, ${t[1]}, ${t[2]}, 0.06)`})(e.accentColor)||(i?"white":"#f5f5f5"),u=e.sections.reduce((e,i,t)=>{const n=h(i,t%2==0),r=t>0?e[t-1]:void 0,o=J(i.sectionBackground),a=i.backgroundGroup||(i.sectionBackground?i.sectionBackground.toLowerCase():null!=r&&r.tone?r.groupKey:`default-${t}`),d=o&&(null==r?void 0:r.tone)&&a===r.groupKey,s=null!=r&&r.tone&&"primary"!==r.tone&&"primaryMuted"!==r.tone?U.indexOf(r.tone):-1,l=o?i.backgroundTone||(d?r.tone:U[(s+1)%U.length]):void 0;return e.push({background:n,tone:l,groupKey:a,continuesGroup:Boolean(d)}),e},[]),x=()=>t.jsxs(se,{children:[t.jsxs(le,{children:[t.jsx(ce,{children:"Client"}),t.jsx(me,{children:e.meta.client})]}),t.jsxs(le,{children:[t.jsx(ce,{children:"Role"}),t.jsx(me,{children:e.meta.role})]}),t.jsxs(le,{children:[t.jsx(ce,{children:"Timeline"}),t.jsx(me,{children:e.meta.timeline})]}),t.jsxs(le,{children:[t.jsx(ce,{children:"Platform"}),t.jsx(me,{children:e.meta.platform})]})]}),b=i=>t.jsxs("div",{children:["giga"===e.slug&&"v1-mockups"===i.id&&(()=>{const i=e.sections.find(e=>"v1"===e.id);return i?t.jsx(li,{style:{marginBottom:"3.75rem"},children:t.jsxs(ci,{children:[i.heading&&t.jsx(ve,{children:i.heading}),t.jsx(we,{style:{alignItems:"flex-start"},children:m(i.body).map((e,i)=>t.jsx(je,{style:{textAlign:"left"},children:e},i))})]})}):null})(),(i.heading||i.body)&&t.jsx(li,{style:{marginBottom:"3.75rem"},children:t.jsxs(ci,{children:[i.heading&&t.jsx(ve,{children:i.heading}),i.body&&t.jsx(we,{style:{alignItems:"flex-start"},children:m(i.body).map((e,i)=>t.jsx(je,{style:{textAlign:"left"},children:e},i))})]})}),t.jsx(Ie,{initial:{scale:.97},whileInView:{scale:1},viewport:Yi,transition:Gi,children:i.images&&i.images[0]&&(()=>{const e=i.images[0],n=t.jsx(Re,{src:e.src,alt:e.alt,avif:e.avif,webp:e.webp,mobileSrc:e.mobileSrc,mobileAvif:e.mobileAvif,mobileWebp:e.mobileWebp,aspectRatio:e.aspectRatio,borderRadius:e.borderRadius||"16px",objectFit:e.objectFit||"cover",objectPosition:e.objectPosition,backgroundColor:e.backgroundColor,imagePaddingBlock:e.imagePaddingBlock,imageScale:e.imageScale,border:e.containerBorder,mixBlendMode:e.mixBlendMode,$hugHeightOnMobile:e.hugHeightOnMobile,hugHeightOnMobile:e.hugHeightOnMobile,style:{width:"100%"}});if(e.zoomable){const r=e.zoomAspectRatio||e.aspectRatio||"16/9",o=t.jsx(Re,{src:e.zoomSrc||e.src,alt:e.alt,avif:e.zoomAvif||e.avif,webp:e.zoomWebp||e.webp,aspectRatio:r,borderRadius:e.borderRadius||"8px",objectFit:"contain",backgroundColor:e.backgroundColor,disableRevealAnimation:!0,hugHeightOnMobile:e.hugHeightOnMobile,style:{width:"100%"}});return t.jsx(Y,{id:`${i.id}-0`,ariaLabel:`Open ${e.alt} in full-screen viewer`,aspectRatio:r,overlayContent:o,children:n})}return n})()}),i.caption&&t.jsx(Me,{children:i.caption}),"giga"===e.slug&&"challenges-image"===i.id&&(()=>{const i=e.sections.find(e=>"outcome"===e.id);return i?t.jsx(li,{style:{marginTop:"3.75rem"},children:t.jsxs(ci,{initial:{y:20},whileInView:{y:0},viewport:Yi,transition:Ni,children:[i.heading&&t.jsx(ve,{children:i.heading}),t.jsx(we,{style:{alignItems:"flex-start"},children:m(i.body).map((e,i)=>t.jsx(je,{style:{textAlign:"left"},children:e},i))})]})}):null})(),"giga"===e.slug&&"v2-platform"===i.id&&(()=>{const i=e.sections.find(e=>"collaboration"===e.id);return i?t.jsx(li,{style:{marginTop:"clamp(3rem, 6vw, 5rem)"},children:t.jsxs(ci,{initial:{y:20},whileInView:{y:0},viewport:Yi,transition:Ni,children:[i.heading&&t.jsx(ve,{children:i.heading}),t.jsx(we,{style:{alignItems:"flex-start"},children:m(i.body).map((e,i)=>t.jsx(je,{style:{textAlign:"left"},children:e},i))})]})}):null})(),"giga"===e.slug&&"outcome-image"===i.id&&(()=>{const i=e.sections.find(e=>"reflection"===e.id);return i?t.jsx(li,{style:{marginTop:"clamp(3rem, 6vw, 5rem)"},children:t.jsxs(ci,{initial:{y:20},whileInView:{y:0},viewport:Yi,transition:Ni,children:[i.heading&&t.jsx(ve,{children:i.heading}),t.jsx(we,{style:{alignItems:"flex-start"},children:m(i.body).map((e,i)=>t.jsx(je,{style:{textAlign:"left"},children:e},i))})]})}):null})()]},i.id),f=(i,n,r)=>{switch(i.layout){case"text-left-image-right":return(e=>t.jsx("div",{children:t.jsxs($e,{children:[t.jsxs(ke,{initial:{x:-30},whileInView:{x:0},viewport:Yi,transition:Ni,children:[e.heading&&t.jsx(ve,{children:e.heading}),t.jsx(we,{children:m(e.body).map((e,i)=>t.jsx(je,{children:e},i))})]}),e.images&&e.images[0]&&t.jsx(Ce,{initial:{x:30},whileInView:{x:0},viewport:Yi,transition:Gi,children:t.jsx(Re,{src:e.images[0].src,alt:e.images[0].alt,avif:e.images[0].avif,webp:e.images[0].webp,aspectRatio:e.images[0].aspectRatio||"3/2",borderRadius:"8px",objectFit:"cover"})})]})},e.id))(i);case"text-right-image-left":return(e=>t.jsx("div",{children:t.jsxs($e,{children:[e.images&&e.images[0]&&t.jsx(Ce,{style:{order:2},initial:{x:-30},whileInView:{x:0},viewport:Yi,transition:Gi,children:t.jsx(Re,{src:e.images[0].src,alt:e.images[0].alt,avif:e.images[0].avif,webp:e.images[0].webp,aspectRatio:e.images[0].aspectRatio||"3/2",borderRadius:"8px",objectFit:"cover"})}),t.jsxs(ke,{style:{order:1},initial:{x:30},whileInView:{x:0},viewport:Yi,transition:Ni,children:[e.heading&&t.jsx(ve,{children:e.heading}),t.jsx(we,{children:m(e.body).map((e,i)=>t.jsx(je,{children:e},i))})]})]})},e.id))(i);case"full-width-image":return b(i);case"image-pair":return(e=>t.jsxs("div",{children:[e.heading&&t.jsx(ve,{style:e.headingColor?{color:e.headingColor}:void 0,children:e.heading}),t.jsx(Te,{$stacked:e.stackImages,style:e.contentMaxWidth?{maxWidth:e.contentMaxWidth,marginInline:"auto"}:void 0,children:e.images&&(e.stackImages?e.images:e.images.slice(0,2)).map((e,i)=>t.jsx(Fe,{initial:{scale:.97},whileInView:{scale:1},viewport:Yi,transition:{...Gi,delay:.15*i},children:t.jsx(Ve,{src:e.src,alt:e.alt,avif:e.avif,webp:e.webp,mobileSrc:e.mobileSrc,mobileAvif:e.mobileAvif,mobileWebp:e.mobileWebp,aspectRatio:e.aspectRatio,borderRadius:"0.5rem",objectFit:e.objectFit||"contain",backgroundColor:e.backgroundColor,imagePaddingBlock:e.imagePaddingBlock,imagePaddingInline:e.imagePaddingInline,imagePaddingBottom:e.imagePaddingBottom,imageScale:e.imageScale,border:e.containerBorder,loading:e.loading})},i))})]},e.id))(i);case"gallery-grid":return(e=>t.jsxs("div",{children:[e.heading&&t.jsx(ve,{children:e.heading}),t.jsx(Ae,{children:e.images&&e.images.map((e,i)=>t.jsx(Fe,{initial:{scale:.95},whileInView:{scale:1},viewport:Yi,whileHover:{scale:1.02},transition:{...Gi,delay:.1*i},children:t.jsx(Ve,{src:e.src,alt:e.alt,avif:e.avif,webp:e.webp,aspectRatio:e.aspectRatio||"1/1",borderRadius:"8px",objectFit:"cover"})},i))})]},e.id))(i);case"asymmetric-mosaic":return(e=>{const i=e.images||[];return t.jsxs("div",{children:[e.heading&&t.jsx(ve,{children:e.heading}),t.jsx(We,{$count:i.length,children:i.map((e,n)=>t.jsx(Le,{$index:n,$count:i.length,initial:{y:20,scale:.97},whileInView:{y:0,scale:1},viewport:{once:!0,amount:.2},transition:{...Ni,delay:.08*n},children:t.jsx(Ee,{src:e.src,alt:e.alt,avif:e.avif,webp:e.webp,aspectRatio:e.aspectRatio||"4/3",borderRadius:"10px",objectFit:"cover"})},`${e.src}-${n}`))})]},e.id)})(i);case"three-column-feature":return(e=>{var i;const n=null===(i=e.images)||void 0===i?void 0:i[0],r=e.labels||[];return t.jsxs(He,{children:[t.jsx(Oe,{initial:{x:-20},whileInView:{x:0},viewport:{once:!0,amount:.2},transition:Ni,children:r.map((e,i)=>t.jsx(De,{$active:0===i,children:e},`${e}-${i}`))}),t.jsx(qe,{children:n&&t.jsx(Ne,{initial:{y:24},whileInView:{y:0},viewport:{once:!0,amount:.2},transition:Gi,children:t.jsx(Ge,{src:n.src,alt:n.alt,avif:n.avif,webp:n.webp,aspectRatio:n.aspectRatio||"4/5",borderRadius:"12px",objectFit:n.objectFit||"cover",objectPosition:n.objectPosition,backgroundColor:n.backgroundColor,imagePaddingBlock:n.imagePaddingBlock})})}),t.jsxs(Ye,{initial:{x:20},whileInView:{x:0},viewport:{once:!0,amount:.2},transition:Ni,children:[e.heading&&t.jsx(Ke,{children:e.heading}),t.jsx(Ue,{children:m(e.body).map((e,i)=>t.jsx(je,{children:e},i))})]})]},e.id)})(i);case"staggered-pair":return(e=>{const i=e.images||[];if(i.length<=1)return b(e);const n=i[0],r=i[1],o=Boolean(e.heading);return t.jsxs("div",{children:[o&&t.jsx(li,{children:t.jsxs(ci,{initial:{y:20},whileInView:{y:0},viewport:Yi,transition:Ni,children:[t.jsx(ve,{style:{textAlign:"left"},children:e.heading}),e.body&&t.jsx(we,{style:{alignItems:"flex-start"},children:m(e.body).map((e,i)=>t.jsx(mi,{style:{textAlign:"left"},children:e},i))})]})}),t.jsxs(Xe,{children:[t.jsx(_e,{initial:{y:30},whileInView:{y:0},viewport:{once:!0,amount:.2},transition:Gi,children:t.jsx(Qe,{src:n.src,alt:n.alt,avif:n.avif,webp:n.webp,aspectRatio:n.aspectRatio,borderRadius:"12px",backgroundColor:n.backgroundColor,imagePaddingBlock:n.imagePaddingBlock,objectFit:n.objectFit||"cover",objectPosition:n.objectPosition,border:n.containerBorder})}),t.jsx(Je,{initial:{y:30},whileInView:{y:0},viewport:{once:!0,amount:.2},transition:{...Gi,delay:.15},children:t.jsx(Qe,{src:r.src,alt:r.alt,avif:r.avif,webp:r.webp,aspectRatio:r.aspectRatio,borderRadius:"12px",backgroundColor:r.backgroundColor,imagePaddingBlock:r.imagePaddingBlock,objectFit:r.objectFit||"cover",objectPosition:r.objectPosition||"top center",border:r.containerBorder})})]}),!o&&e.body&&t.jsx(ei,{children:e.body})]},e.id)})(i);case"related-callout":return(e=>{var i,n;return t.jsx("div",{children:t.jsxs(ii,{children:[(null===(i=e.labels)||void 0===i?void 0:i[0])&&t.jsx(ti,{children:e.labels[0]}),t.jsxs(ni,{href:e.relatedHref||"#",children:[(null===(n=e.images)||void 0===n?void 0:n[0])&&t.jsx(ri,{children:t.jsxs("picture",{style:{display:"block",width:"100%",height:"100%"},children:[e.images[0].avif&&t.jsx("source",{srcSet:e.images[0].avif,type:"image/avif"}),e.images[0].webp&&t.jsx("source",{srcSet:e.images[0].webp,type:"image/webp"}),t.jsx("img",{src:e.images[0].src,alt:e.images[0].alt,loading:"lazy",decoding:"async",style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}})]})}),t.jsxs(oi,{children:[e.heading&&t.jsx(ai,{children:e.heading}),e.body&&t.jsx(di,{children:e.body}),t.jsxs(si,{children:[e.relatedLabel||"View Case Study"," →"]})]})]})]})},e.id)})(i);case"video":return(e=>t.jsxs("div",{children:[(e.heading||e.body)&&t.jsx(li,{style:{marginBottom:"3.75rem"},children:t.jsxs(ci,{children:[e.heading&&t.jsx(ve,{children:e.heading}),e.body&&t.jsx(we,{style:{alignItems:"flex-start"},children:m(e.body).map((e,i)=>t.jsx(je,{style:{textAlign:"left"},children:e},i))})]})}),e.video&&t.jsx(Pe,{video:e.video}),e.caption&&t.jsx(Me,{children:e.caption})]},e.id))(i);case"text-only":return(i=>{var n,r,o,a,d,s;const l="giga"===e.slug&&"v2-flows"===i.id?e.sections.find(e=>"v2"===e.id):void 0;return t.jsxs("div",{children:[t.jsx(li,{children:t.jsxs(ci,{initial:{y:20},whileInView:{y:0},viewport:Yi,transition:Ni,children:[l&&t.jsxs(t.Fragment,{children:[l.heading&&t.jsx(ve,{children:l.heading}),t.jsx(we,{style:{alignItems:"flex-start",marginBottom:"3.75rem"},children:m(l.body).map((e,i)=>t.jsx(je,{style:{textAlign:"left"},children:e},i))})]}),i.heading&&(i.logoSrc?t.jsxs(Hi,{children:[t.jsx(Oi,{children:t.jsxs("picture",{children:[i.logoAvif&&t.jsx("source",{srcSet:i.logoAvif,type:"image/avif"}),i.logoWebp&&t.jsx("source",{srcSet:i.logoWebp,type:"image/webp"}),t.jsx(Di,{src:i.logoSrc,alt:`${i.heading} logo`,$rounded:null===(n=i.logoSrc)||void 0===n?void 0:n.includes("Walmart"),$whiteBg:(null===(r=i.logoSrc)||void 0===r?void 0:r.includes("Amazon"))||(null===(o=i.logoSrc)||void 0===o?void 0:o.includes("Lyft"))||(null===(a=i.logoSrc)||void 0===a?void 0:a.includes("DoorDash")),loading:"lazy",decoding:"async"})]})}),t.jsx(ve,{style:{marginBottom:0,marginTop:0,paddingBottom:"3px",lineHeight:1,...i.headingColor?{color:i.headingColor}:{}},children:i.heading})]}):t.jsx(ve,{style:{textAlign:"left"},children:i.heading})),t.jsx(we,{style:{alignItems:"flex-start"},children:m(i.body).map((e,n)=>"credits"===i.id?t.jsx(gi,{style:{textAlign:"left"},children:e},n):t.jsx(mi,{style:{textAlign:"left"},children:e},n))})]})}),"giga"===e.slug&&"my-role"===i.id&&(null===(d=e.sections.find(e=>"platform-today"===e.id))||void 0===d||null===(d=d.images)||void 0===d?void 0:d[0])&&(()=>{const i=e.sections.find(e=>"platform-today"===e.id).images[0];return t.jsx(Ie,{initial:{scale:.97},whileInView:{scale:1},viewport:Yi,transition:Gi,children:t.jsx(Re,{src:i.src,alt:i.alt,avif:i.avif,webp:i.webp,aspectRatio:i.aspectRatio,borderRadius:i.borderRadius||"16px",objectFit:i.objectFit||"cover",objectPosition:i.objectPosition,backgroundColor:i.backgroundColor,imageScale:i.imageScale,border:i.containerBorder,style:{width:"100%",marginTop:"2rem"}})})})(),"access-direct"===e.slug&&"challenges"===i.id&&(()=>{const i=e.sections.find(e=>"outcome"===e.id);return i?t.jsx(li,{style:{marginTop:"3.75rem"},children:t.jsxs(ci,{initial:{y:20},whileInView:{y:0},viewport:Yi,transition:Ni,children:[i.heading&&t.jsx(ve,{children:i.heading}),t.jsx(we,{style:{alignItems:"flex-start"},children:m(i.body).map((e,i)=>t.jsx(je,{style:{textAlign:"left"},children:e},i))})]})}):null})(),"giga"===e.slug&&"challenges"===i.id&&(null===(s=e.sections.find(e=>"challenges-image"===e.id))||void 0===s||null===(s=s.images)||void 0===s?void 0:s[0])&&(()=>{const i=e.sections.find(e=>"challenges-image"===e.id).images[0],n=e.sections.find(e=>"outcome"===e.id);return t.jsxs(t.Fragment,{children:[t.jsx(Ie,{initial:{scale:.97},whileInView:{scale:1},viewport:Yi,transition:Gi,style:{marginTop:"clamp(3rem, 6vw, 5rem)"},children:t.jsx(Re,{src:i.src,alt:i.alt,avif:i.avif,webp:i.webp,aspectRatio:i.aspectRatio,borderRadius:i.borderRadius||"16px",objectFit:i.objectFit||"cover",objectPosition:i.objectPosition,backgroundColor:i.backgroundColor,imageScale:i.imageScale,border:i.containerBorder,style:{width:"100%"}})}),n&&t.jsx(li,{style:{marginTop:"clamp(3rem, 6vw, 5rem)"},children:t.jsxs(ci,{initial:{y:20},whileInView:{y:0},viewport:Yi,transition:Ni,children:[n.heading&&t.jsx(ve,{children:n.heading}),t.jsx(we,{style:{alignItems:"flex-start"},children:m(n.body).map((e,i)=>t.jsx(je,{style:{textAlign:"left"},children:e},i))})]})})]})})()]},i.id)})(i);case"quote":return(e=>t.jsx("div",{children:t.jsx(hi,{children:t.jsxs(pi,{$accentColor:e.accentColor,initial:{y:20},whileInView:{y:0},viewport:Yi,transition:Ni,children:[t.jsx(ui,{children:e.body}),e.heading&&t.jsx(xi,{children:e.heading})]})})},e.id))(i);case"image-carousel":return(e=>t.jsxs("div",{children:[(e.heading||e.body)&&t.jsx(li,{children:t.jsxs(ci,{initial:{y:20},whileInView:{y:0},viewport:Yi,transition:Ni,children:[e.heading&&t.jsx(ve,{style:{textAlign:"left"},children:e.heading}),e.body&&t.jsx(we,{style:{alignItems:"flex-start"},children:m(e.body).map((e,i)=>t.jsx(mi,{style:{textAlign:"left"},children:e},i))})]})}),e.images&&e.images.length>0&&t.jsx(g.div,{initial:{scale:.97},whileInView:{scale:1},viewport:Yi,transition:Gi,children:t.jsx(M,{images:e.images,autoPlay:!0,intervalMs:7e3,fixedAspectRatio:e.sectionAspectRatio})})]},e.id))(i);case"parallax-reveal":return((e,i,n)=>{var r,o;const a=null===(r=e.images)||void 0===r?void 0:r[0];return a?t.jsxs(Si,{$background:i,$tone:n,children:[t.jsx(zi,{children:t.jsx(Pi,{src:a.src,alt:a.alt,avif:a.avif,webp:a.webp,parallaxSpeed:null!==(o=e.parallaxSpeed)&&void 0!==o?o:.4,objectFit:"cover"})}),t.jsxs(Ti,{children:[e.heading&&t.jsx(Mi,{initial:{y:40},whileInView:{y:0},viewport:Yi,transition:Ni,children:e.heading}),e.body&&t.jsx(Ai,{initial:{y:40},whileInView:{y:0},viewport:Yi,transition:{...Ni,delay:.15},children:e.body})]})]},e.id):null})(i,n,r);case"image-on-color-block":return(i=>{var n,r,o,a,d;const s=null===(n=i.images)||void 0===n?void 0:n[0];if(!s)return null;const l="giga"===e.slug&&"brand-system"===i.id?e.sections.find(e=>"brand-identity"===e.id):void 0,c="access-direct"===e.slug&&"credits"===i.id?e.sections.find(e=>"reflection"===e.id):void 0;return t.jsx(Fi,{$flushTop:"giga"===e.slug&&"brand-system"===i.id,children:t.jsxs(Vi,{children:[c&&t.jsxs(Ei,{style:{marginBottom:"clamp(3rem, 6vw, 5rem)"},children:[c.heading&&t.jsx(ve,{style:{marginBottom:"1.25rem"},children:c.heading}),t.jsx(we,{style:{alignItems:"flex-start",marginTop:0},children:m(c.body).map((e,i)=>t.jsx(je,{style:{textAlign:"left"},children:e},i))})]}),l&&t.jsxs(Ei,{style:{marginBottom:"clamp(3rem, 6vw, 5rem)"},children:[l.heading&&t.jsx(ve,{style:{marginBottom:"1.25rem"},children:l.heading}),l.body&&t.jsx(we,{style:{alignItems:"flex-start",marginTop:0},children:m(l.body).map((e,i)=>t.jsx(je,{style:{textAlign:"left"},children:e},i))})]}),t.jsx(Wi,{$containerBorder:s.containerBorder,$containerShadow:s.containerShadow,initial:{y:40},whileInView:{y:0},viewport:Yi,transition:Gi,children:t.jsx(Li,{src:s.src,alt:s.alt,avif:s.avif,webp:s.webp,aspectRatio:s.aspectRatio,borderRadius:s.borderRadius||"12px",containerBorderRadius:s.containerBorderRadius,objectFit:s.objectFit||"cover",objectPosition:s.objectPosition,imageScale:s.imageScale,backgroundColor:s.backgroundColor,imagePaddingBlock:s.imagePaddingBlock,imagePaddingInline:s.imagePaddingInline})}),(i.heading||i.body)&&t.jsxs(Ei,{children:[i.heading&&t.jsxs(Hi,{children:[i.logoSrc&&t.jsx(Oi,{children:t.jsxs("picture",{children:[i.logoAvif&&t.jsx("source",{srcSet:i.logoAvif,type:"image/avif"}),i.logoWebp&&t.jsx("source",{srcSet:i.logoWebp,type:"image/webp"}),t.jsx(Di,{src:i.logoSrc,alt:`${i.heading} logo`,$rounded:null===(r=i.logoSrc)||void 0===r?void 0:r.includes("Walmart"),$whiteBg:(null===(o=i.logoSrc)||void 0===o?void 0:o.includes("Amazon"))||(null===(a=i.logoSrc)||void 0===a?void 0:a.includes("Lyft"))||(null===(d=i.logoSrc)||void 0===d?void 0:d.includes("DoorDash")),loading:"lazy",decoding:"async"})]})}),t.jsx(ve,{style:{marginBottom:0,marginTop:0,paddingBottom:"3px",lineHeight:1,...i.headingColor?{color:i.headingColor}:{}},children:i.heading})]}),i.body&&t.jsx(we,{style:{alignItems:"flex-start",marginTop:"1.25rem"},children:m(i.body).map((e,n)=>t.jsx(je,{style:{textAlign:"left",...i.headingColor?{color:"rgba(255,255,255,0.8)"}:{}},children:e},n))})]})]})},i.id)})(i);case"sticky-split":return((i,n,r)=>{var o,a,d,s,l,c;const g=(null===(o=i.stickyContent)||void 0===o?void 0:o.image)||(null===(a=i.images)||void 0===a?void 0:a[0]),h=(null===(d=i.stickyContent)||void 0===d?void 0:d.fullBleedImage)||!1,p=(null===(s=i.stickyContent)||void 0===s?void 0:s.tags)||[],u=(null===(l=i.stickyContent)||void 0===l?void 0:l.collateralImages)||[],x="giga"===e.slug&&"intro"===i.id?e.sections.find(e=>"overview"===e.id):void 0,b=x?[{type:"text",heading:x.heading,body:x.body}]:(null===(c=i.scrollContent)||void 0===c?void 0:c.blocks)||[];return t.jsxs(bi,{$background:n,$tone:r,children:[b.length>0&&t.jsx(Ri,{children:b.map((e,n)=>{if("text"===e.type)return t.jsxs(Ii,{initial:{x:20},whileInView:{x:0},viewport:Yi,transition:Ni,children:[e.heading&&t.jsx(ve,{children:e.heading}),t.jsx(Ze,{children:m(e.body).map((e,i)=>t.jsx(je,{children:e},i))})]},`${i.id}-text-${n}`);if("image"===e.type){var r;const o=null===(r=e.images)||void 0===r?void 0:r[0];return o?t.jsx(Ii,{initial:{scale:.97},whileInView:{scale:1},viewport:Yi,transition:Gi,children:t.jsx($,{src:o.src,alt:o.alt,avif:o.avif,webp:o.webp,aspectRatio:o.aspectRatio||"3/2",borderRadius:"8px",objectFit:"cover"})},`${i.id}-image-${n}`):null}return"carousel"===e.type?t.jsx(Ii,{initial:{scale:.97},whileInView:{scale:1},viewport:Yi,transition:Gi,children:e.images&&e.images.length>0&&t.jsx(M,{images:e.images,showControls:!1,showDots:!1})},`${i.id}-carousel-${n}`):"quote"===e.type?t.jsx(Ii,{initial:{x:30},whileInView:{x:0},viewport:Yi,transition:Ni,children:t.jsx(Bi,{children:e.body})},`${i.id}-quote-${n}`):null})}),(g||p.length>0||u.length>0)&&t.jsx(fi,{children:t.jsxs(vi,{$fullBleed:h,children:[g&&t.jsx(wi,{$fullBleed:h,$aspectRatio:g.aspectRatio,children:t.jsx(yi,{src:g.src,alt:g.alt,avif:g.avif,webp:g.webp,aspectRatio:g.aspectRatio||"16/9",borderRadius:"0",backgroundColor:g.backgroundColor,imagePaddingBlock:g.imagePaddingBlock,objectFit:g.objectFit||"cover",objectPosition:g.objectPosition||"center",imageScale:g.imageScale,border:g.containerBorder,mixBlendMode:g.mixBlendMode,disableRevealAnimation:!0})}),p.length>0&&t.jsx(Ki,{tags:p}),u.length>0&&t.jsx(Ui,{images:u})]})})]},i.id)})(i,n,r);default:return null}};return t.jsxs(ee,{children:[t.jsxs(ie,{children:[t.jsxs(te,{children:[o&&t.jsx(ne,{children:o}),t.jsx(x,{}),t.jsx(he,{initial:{y:30},animate:{y:0},transition:{duration:.8,delay:.2,ease:[.25,.1,.25,1]},children:e.heroHeadline}),e.website&&t.jsxs(pe,{href:e.website.href,target:"_blank",rel:"noopener noreferrer",children:[e.website.label,t.jsx(p,{"aria-hidden":"true"})]})]}),t.jsx(re,{children:t.jsxs(de,{$backgroundColor:c.backgroundColor,$borderRadius:c.borderRadius||"8px",$border:(c.backgroundColor,c.containerBorder||"1px solid var(--border, #d1d5db)"),children:[t.jsx(oe,{src:c.src,alt:c.alt,avif:c.avif,webp:c.webp,mobileSrc:c.mobileSrc,mobileAvif:c.mobileAvif,mobileWebp:c.mobileWebp,aspectRatio:c.aspectRatio||"16/9",borderRadius:c.borderRadius||"8px",objectFit:c.objectFit||"cover",objectPosition:c.objectPosition||"center",imageScale:1,border:void 0,loading:"eager",decoding:"sync",onLoad:()=>d(!0)}),!a&&t.jsx(ae,{initial:{opacity:1},animate:{opacity:0},transition:{duration:.4,delay:.3},"aria-hidden":"true"})]})})]}),t.jsx(ue,{children:e.sections.map((i,n)=>{if("access-direct"===e.slug&&("outcome"===i.id||"reflection"===i.id))return null;if("giga"===e.slug&&("overview"===i.id||"platform-today"===i.id||"outcome"===i.id||"brand-identity"===i.id||"collaboration"===i.id||"challenges-image"===i.id||"v1"===i.id||"v2"===i.id||"reflection"===i.id))return null;const{background:r,tone:o,continuesGroup:a}=u[n],d=e.sections[n-1],s=e.sections[n+1],l=_i.has(i.layout),c=Zi.has(i.layout),m=!!d&&Zi.has(d.layout),g=!!s&&Zi.has(s.layout),h=!!s&&Xi.has(s.layout),p=!i.disableCompactPadding&&!i.heading&&!i.body&&c&&(m||g),x="text-only"===i.layout&&!i.sectionPadding&&!h;return l?t.jsx("div",{children:f(i,r,o)},i.id):t.jsx("div",{children:t.jsx(xe,{$background:r,$tone:o,$continuesGroup:a,$compact:p,$padding:"giga"===e.slug&&"brand-system"===i.id?"2rem 0 3.75rem":i.sectionPadding,$minHeight:i.sectionMinHeight,$marginTop:i.sectionMarginTop,$standaloneText:x,children:t.jsx(be,{children:f(i,r,o)})})},i.id)})})]})}))}}});
