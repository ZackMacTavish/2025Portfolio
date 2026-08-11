System.register(["./three-legacy-BdMASLzS.js","./vendor-legacy-C2msdADn.js","./index-legacy-BYqiN8GS.js","./index-legacy-6qnG5w1e.js"],function(e,i){"use strict";var t,r,n,o,a,d,s,l,c,m,g,h,p;return{setters:[e=>{t=e.j},e=>{r=e.b,n=e.c,o=e.R,a=e.d},e=>{d=e.c},e=>{s=e.u,l=e.k,c=e.M,m=e.y,g=e.l,h=e.q,p=e.A}],execute:function(){function i(e){const i=s(()=>l(e)),{isStatic:t}=r.useContext(c);if(t){const[,t]=r.useState(e);r.useEffect(()=>i.on("change",t),[])}return i}const u={some:0,all:1};function x(e,{root:i,margin:t,amount:n,once:o=!1,initial:a=!1}={}){const[d,s]=r.useState(a);return r.useEffect(()=>{if(!e.current||o&&d)return;const r={root:i&&i.current||void 0,margin:t,amount:n};return function(e,i,{root:t,margin:r,amount:n="some"}={}){const o=m(e),a=new WeakMap,d=new IntersectionObserver(e=>{e.forEach(e=>{const t=a.get(e.target);if(e.isIntersecting!==Boolean(t))if(e.isIntersecting){const t=i(e.target,e);"function"==typeof t?a.set(e.target,t):d.unobserve(e.target)}else"function"==typeof t&&(t(e),a.delete(e.target))})},{root:t,rootMargin:r,threshold:"number"==typeof n?n:u[n]});return o.forEach(e=>d.observe(e)),()=>d.disconnect()}(e.current,()=>(s(!0),o?void 0:()=>s(!1)),r)},[i,e,t,o,n]),d}function f(e){if(!e)return e;try{return encodeURI(decodeURI(e))}catch{return encodeURI(e)}}const b=n(h.div)`
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
`,v=n.div`
  position: ${e=>e.$fillContainer?"absolute":"relative"};
  inset: ${e=>e.$fillContainer?`${e.$imagePaddingBlock||"0"} ${e.$imagePaddingInline||"0"}`:"auto"};
  padding-block: ${e=>e.$fillContainer?"0":e.$imagePaddingBlock||"0"};
  padding-inline: ${e=>e.$fillContainer?"0":e.$imagePaddingInline||"0"};
  overflow: hidden;
  border-radius: ${e=>e.$borderRadius};
`,j=n(h.img)`
  display: block;
  width: 100%;
  height: ${e=>e.$fillContainer?e.$hasParallax?"110%":"100%":"auto"};
  object-fit: ${e=>e.$objectFit};
  object-position: ${e=>e.$objectPosition};
  border-radius: ${e=>e.$borderRadius};
`;function y({src:e,alt:n,avif:o,webp:a,mobileSrc:d,mobileAvif:s,mobileWebp:l,aspectRatio:c,parallaxSpeed:m=0,className:h,borderRadius:p="12px",containerBorderRadius:u,backgroundColor:x,imagePaddingBlock:y,imagePaddingInline:$,objectFit:k="cover",objectPosition:C="center",imageScale:R=1,disableRevealAnimation:I=!1,loading:S="lazy",decoding:z="async",onLoad:P,border:B,mixBlendMode:F}){const A=r.useRef(null),M=g(),[T,V]=r.useState(I),[W,L]=r.useState(()=>"undefined"!=typeof window&&window.innerWidth<768),E=i(0);r.useEffect(()=>{if("undefined"==typeof window)return;const e=()=>{L(window.innerWidth<768)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]);const D=60*Math.max(0,m),N=m>0&&!M&&!W,H=Boolean(c),q=null!=u?u:p,O=f(e),Y=f(o),U=f(a),G=f(d),X=f(s),Z=f(l);return r.useEffect(()=>{if(I||!O)return;if("undefined"==typeof window||!window.IntersectionObserver)return;const e=A.current;if(!e)return;const i=new IntersectionObserver(t=>{var r;if(null===(r=t[0])||void 0===r||!r.isIntersecting)return;i.disconnect();const n=e.querySelector("img");if(!n)return void V(!0);const o=()=>{"function"==typeof n.decode?n.decode().then(()=>V(!0)).catch(()=>V(!0)):V(!0)};n.complete?o():(n.onload=o,n.onerror=()=>V(!0))},{rootMargin:"400px 0px"});return i.observe(e),()=>i.disconnect()},[I,O]),r.useEffect(()=>{if(!N)return void E.set(0);const e=()=>{const e=A.current;if(!e)return;const i=e.getBoundingClientRect(),t=window.innerHeight,r=t+i.height,n=r>0?(t-i.top)/r:.5,o=Math.min(1,Math.max(0,n))*D*2-D;E.set(o)};return e(),window.addEventListener("scroll",e,{passive:!0}),window.addEventListener("resize",e),()=>{window.removeEventListener("scroll",e),window.removeEventListener("resize",e)}},[D,E,N]),t.jsx(b,{ref:A,className:h,$aspectRatio:c,$borderRadius:q,$backgroundColor:x,$border:B,...I?{}:{initial:{opacity:0,y:10},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.2},transition:{duration:.7,ease:[.25,.1,.25,1]}},children:t.jsx(v,{$imagePaddingBlock:y,$imagePaddingInline:$,$fillContainer:H,$borderRadius:p,children:t.jsxs(w,{$fillContainer:H,$borderRadius:p,children:[X&&t.jsx("source",{srcSet:X,type:"image/avif",media:"(max-width: 900px)"}),Z&&t.jsx("source",{srcSet:Z,type:"image/webp",media:"(max-width: 900px)"}),G&&t.jsx("source",{srcSet:G,media:"(max-width: 900px)"}),Y&&t.jsx("source",{srcSet:Y,type:"image/avif"}),U&&t.jsx("source",{srcSet:U,type:"image/webp"}),t.jsx(j,{src:O,alt:n,loading:S,decoding:z,onLoad:e=>{null==P||P(e)},style:{y:N?E:0,scale:R,mixBlendMode:F,opacity:T?1:0,transition:T?"opacity 0.3s ease":"none"},$objectFit:k,$objectPosition:C,$hasParallax:N,$fillContainer:H,$borderRadius:p})]})})})}const $=n.div`
  width: 100%;
`,k=o.forwardRef((e,i)=>{const{$aspectRatio:r,style:n,...o}=e;return t.jsx(h.div,{ref:i,style:{position:"relative",width:"100%",borderRadius:"16px",overflow:"hidden",aspectRatio:r||"16 / 9",maxHeight:"min(80vh, 1000px)",boxShadow:"0 4px 24px rgba(0,0,0,0.08)",outline:"none",...n||{}},...o})});k.displayName="Frame";const C=n.div`
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
`,I=n.button`
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
  transition: opacity 320ms ease;
`,z=n(y)`
  width: 100%;
  height: 100%;
`,P=n.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`,B=n.button`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  padding: 0;
  background: ${e=>e.$active?"var(--text-strong, #333)":"var(--border, #ccc)"};
  transform: ${e=>e.$active?"scale(1.3)":"scale(1)"};
  transition: all 0.3s;
`;function F({images:e,autoPlay:i=!1,intervalMs:n=7e3,showControls:o=!0,showDots:a=!0,activeDecoding:d="sync",fixedAspectRatio:s}){const[l,c]=r.useState(0),[m,g]=r.useState(0),[h,p]=r.useState(!1),[u,x]=r.useState(!1),[f,b]=r.useState(!1),[w,v]=r.useState(!1),j=r.useRef(null),y=e.length;r.useEffect(()=>{const e=j.current;if(!e)return;const i=new IntersectionObserver(i=>{var t,r;const n=null!==(t=null===(r=i[0])||void 0===r?void 0:r.isIntersecting)&&void 0!==t&&t;v(n),n&&e.focus({preventScroll:!0})},{threshold:.8});return i.observe(e),()=>i.disconnect()},[]);const F=e=>{if(!y)return;const i=(e+y)%y;g(l),p(!1),c(i)},A=()=>F(l+1),M=()=>F(l-1);if(r.useEffect(()=>{if(!i||f||y<2||!w)return;const e=setInterval(()=>{c(e=>(g(e),(e+1)%y)),p(!1)},n);return()=>clearInterval(e)},[i,n,f,y,w]),!y)return null;const T=e[l],V=e[m];return t.jsxs($,{children:[t.jsxs(k,{ref:j,$aspectRatio:s||T.aspectRatio||"16 / 9",tabIndex:0,"data-carousel-frame":"true",onMouseEnter:()=>x(!0),onMouseLeave:()=>x(!1),onKeyDown:e=>{"ArrowRight"===e.key&&(e.preventDefault(),b(!0),A()),"ArrowLeft"===e.key&&(e.preventDefault(),b(!0),M())},drag:"x",dragConstraints:{left:0,right:0},onDragEnd:(e,i)=>{i.offset.x>80?M():i.offset.x<-80&&A()},children:[t.jsx(S,{style:{zIndex:1},children:t.jsx(z,{src:V.src,alt:V.alt,avif:V.avif,webp:V.webp,aspectRatio:V.aspectRatio||"3/2",borderRadius:V.borderRadius||"16px",backgroundColor:V.backgroundColor,imagePaddingBlock:V.imagePaddingBlock,imagePaddingInline:V.imagePaddingInline,objectFit:V.objectFit||"cover",objectPosition:V.objectPosition||"top center",border:V.containerBorder,disableRevealAnimation:!0,loading:"lazy",decoding:"auto"},`prev-${V.src}-${m}`)}),t.jsx(S,{style:{zIndex:2,opacity:h?1:0,transition:"opacity 400ms ease"},children:t.jsx(z,{src:T.src,alt:T.alt,avif:T.avif,webp:T.webp,aspectRatio:T.aspectRatio||"3/2",borderRadius:T.borderRadius||"16px",backgroundColor:T.backgroundColor,imagePaddingBlock:T.imagePaddingBlock,imagePaddingInline:T.imagePaddingInline,objectFit:T.objectFit||"cover",objectPosition:T.objectPosition||"top center",border:T.containerBorder,disableRevealAnimation:!0,loading:"lazy",decoding:d,onLoad:()=>p(!0)},`active-${T.src}-${l}`)}),y>1&&o&&t.jsxs(C,{$visible:u,children:[t.jsx(R,{type:"button",$side:"left","aria-label":"Previous image",onClick:M,children:t.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:t.jsx("polyline",{points:"15 6 9 12 15 18"})})}),i&&t.jsx(I,{type:"button","aria-label":f?"Resume slideshow":"Pause slideshow",onClick:()=>b(e=>!e),children:f?"▶":"❚❚"}),t.jsx(R,{type:"button",$side:"right","aria-label":"Next image",onClick:A,children:t.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:t.jsx("polyline",{points:"9 6 15 12 9 18"})})})]})]}),y>1&&a&&t.jsx(P,{children:e.map((e,i)=>t.jsx(B,{type:"button",$active:i===l,"aria-label":`Go to slide ${i+1}`,"aria-current":i===l,onClick:()=>F(i)},`${e.src}-${i}`))})]})}const A=n(h.button)`
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

  ${A}:hover &,
  ${A}:focus-visible & {
    opacity: 1;
    transform: translateY(0);
  }
`,T=n(h.div)`
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
`,V=n(h.div)`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  touch-action: none;
  cursor: inherit;
`,W=n(h.div)`
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
`,H=n.span`
  padding: 0 0.35rem;
  color: rgba(255, 255, 255, 0.78);
  font-size: 0.78rem;

  @media (max-width: 640px) {
    display: none;
  }
`,q=.18;function O(e){const i=e.trim();if(i.includes("/")){const[e,t]=i.split("/").map(e=>parseFloat(e));if(e&&t)return e/t}const t=parseFloat(i);return Number.isFinite(t)&&t>0?t:16/9}function Y({id:e,className:n,children:o,overlayContent:d,ariaLabel:s="Open image in full-screen viewer",aspectRatio:l="16/9"}){const[c,m]=r.useState(!1),[h,u]=r.useState(!1),x=r.useRef(null),f=g(),b=i(1),w=i(0),v=i(0);r.useEffect(()=>{u(!0)},[]);const j=r.useCallback(()=>{const e=O(l);if(e>=.75||"undefined"==typeof window)return 0;const i=Math.min(.9*window.innerWidth,1400)/e,t=Math.min(Math.max(16,.04*window.innerWidth),48),r=window.innerHeight-2*t;return Math.max(0,(i-r)/2)},[l]),y=r.useCallback(()=>{b.set(1),w.set(0),v.set(j())},[b,w,v,j]),$=r.useCallback(()=>{b.set(1),w.set(0),v.set(j()),m(!0)},[b,w,v,j]),k=r.useCallback(()=>{m(!1)},[]);r.useEffect(()=>{if(!c||"undefined"==typeof document)return;const e=document.body.style.overflow;document.body.style.overflow="hidden";const i=e=>{if("Escape"===e.key&&k(),"+"!==e.key&&"="!==e.key||b.set(Math.min(5,b.get()+q)),"-"===e.key||"_"===e.key){const e=Math.max(1,b.get()-q);b.set(e),1===e&&(w.set(0),v.set(j()))}"0"===e.key&&y()};return window.addEventListener("keydown",i),()=>{var t;document.body.style.overflow=e,window.removeEventListener("keydown",i),null===(t=x.current)||void 0===t||t.focus()}},[c,k,b,w,v,y]);const C={x:w,y:v,scale:b},R=null!=d?d:o;return t.jsxs(t.Fragment,{children:[t.jsxs(A,{ref:x,type:"button",layoutId:`zoomable-${e}`,className:n,onClick:$,"aria-label":s,style:{visibility:c?"hidden":"visible"},children:[o,t.jsxs(M,{"aria-hidden":"true",children:[t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("circle",{cx:"11",cy:"11",r:"7"}),t.jsx("line",{x1:"20",y1:"20",x2:"16.65",y2:"16.65"}),t.jsx("line",{x1:"11",y1:"8",x2:"11",y2:"14"}),t.jsx("line",{x1:"8",y1:"11",x2:"14",y2:"11"})]}),"Click to zoom"]})]}),h&&a.createPortal(t.jsx(p,{children:c&&t.jsxs(T,{role:"dialog","aria-modal":"true",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:f?0:.25},onClick:k,children:[t.jsx(L,{type:"button","aria-label":"Close image viewer",onClick:e=>{e.stopPropagation(),k()},children:"×"}),t.jsx(V,{onClick:e=>e.stopPropagation(),onWheel:e=>{e.preventDefault();const i=(e.deltaY>0?-1:1)*q,t=Math.min(5,Math.max(1,b.get()+i));b.set(t),1===t&&(w.set(0),v.set(j()))},children:t.jsx(W,{$ratio:O(l),layoutId:f?void 0:`zoomable-${e}`,style:C,drag:!0,dragMomentum:!1,dragElastic:.08,onDragEnd:()=>{!(O(l)<.75)&&b.get()<=1.001&&(w.set(0),v.set(0))},onDoubleClick:()=>{b.get()>1?y():b.set(2)},transition:{type:"spring",stiffness:260,damping:28},children:R})}),t.jsxs(E,{onClick:e=>e.stopPropagation(),children:[t.jsx(D,{type:"button","aria-label":"Zoom out",onClick:()=>{const e=Math.max(1,b.get()-q);b.set(e),1===e&&(w.set(0),v.set(j()))},children:"−"}),t.jsx(D,{type:"button","aria-label":"Reset zoom",onClick:y,children:"⤢"}),t.jsx(D,{type:"button","aria-label":"Zoom in",onClick:()=>{b.set(Math.min(5,b.get()+q))},children:"+"}),t.jsx(N,{}),t.jsx(H,{children:"Scroll to zoom · drag to pan · double-click to reset · Esc to close"})]})]},"zoomable-backdrop")}),document.body)]})}function U({children:e}){const i=r.Children.toArray(e);if(1!==i.length||"string"!=typeof i[0])return t.jsx(t.Fragment,{children:e});const n=i[0],o=n.trim().split(/\s+/);if(o.length<2)return t.jsx(t.Fragment,{children:n});const a=o.pop(),d=o.pop(),s=o.join(" ");return t.jsxs(t.Fragment,{children:[s,s?" ":"",d," ",a]})}const G=new Set(["white","#fff","#ffffff","#fafafa","#f9fafb","#f5f5f5","#f6f8fc","#f0efeb","#e7e7e7","#eeeeee","#eee"]),X=(e,i)=>e?"dark"!==i.name?e:G.has(e.toLowerCase())?i.surface:e:e,Z=n.div`
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
`,ee=n(y)`
  width: 100%;

  img {
    filter: saturate(0.96);
  }
`,ie=n(h.div)`
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
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  color: ${e=>e.theme.mutedText};
  text-transform: uppercase;
  margin: 0;
  margin-bottom: 0.5rem;
`,ae=n.p`
  font-size: 0.875rem;
  color: ${e=>e.theme.mutedText};
  margin: 0;
`,de=n(h.h1)`
  margin: 0;
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
`,he=n.h2`
  font-size: 1.875rem;
  font-weight: 700;
  color: ${e=>e.theme.strongText};
  margin-bottom: 1.5rem;
`,pe=e=>{const{children:i,...r}=e;return t.jsx(he,{...r,children:t.jsx(U,{children:i})})},ue=n.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,xe=n.p`
  margin: 0;
  max-width: 68ch;
  font-size: 1rem;
  line-height: 1.625;
  color: ${e=>e.theme.mutedText};
`,fe=e=>{const{children:i,...r}=e;return t.jsx(xe,{...r,children:t.jsx(U,{children:i})})},be=n.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`,we=n(h.div)``,ve=n(h.div)`
  overflow: hidden;
  border-radius: 0.5rem;
`,je=n(y)`
  width: 100%;
  height: 24rem;

  @media (min-width: 768px) {
    height: 100%;
  }
`,ye=n(h.div)`
  overflow: hidden;
  border-radius: 0;
`,$e=n.video`
  display: block;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 16px;
  background: #000;
  object-fit: cover;
`,ke=n.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
  align-items: center;

  @media (min-width: 900px) {
    grid-template-columns: ${e=>e.$stacked?"1fr":"1fr 1fr"};
  }
`,Ce=n.p`
  margin-top: 0.75rem;
  font-size: 0.875rem;
  font-style: italic;
  color: ${e=>e.theme.mutedText};
`,Re=n.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`,Ie=n(h.div)`
  overflow: hidden;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover img {
    transform: scale(1.02);
  }
`,Se=n(y)`
  width: 100%;

  img {
    transition: transform 0.3s ease-out;
  }
`,ze=n.div`
  display: grid;
  gap: 1rem;

  ${e=>3===e.$count?"\n        grid-template-columns: 1.2fr 0.8fr;\n        grid-template-rows: auto auto;\n      ":4===e.$count?"\n        grid-template-columns: 1fr 1fr 1fr;\n        grid-template-rows: auto auto;\n      ":"\n      grid-template-columns: repeat(3, 1fr);\n      grid-auto-rows: minmax(200px, auto);\n    "}

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 0.75rem;
    grid-template-rows: auto;
    grid-auto-rows: auto;
  }
`,Pe=n(h.div)`
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
`,Be=n(y)`
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
`,Ae=n(h.div)`
  display: flex;
  flex-direction: column;
  grid-column: 1;
  grid-row: 1 / span 2;

  @media (max-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
  }
`,Me=n.span`
  font-size: 0.85rem;
  line-height: 2.4;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${e=>e.$active?e.theme.strongText:e.theme.mutedText};
  font-weight: ${e=>e.$active?700:600};

  @media (max-width: 768px) {
    line-height: 1.6;
  }
`,Te=n.div`
  position: relative;
  grid-column: 2;
  grid-row: 1;
`;n(h.div)`
  position: absolute;
  inset: 0;
  margin: -20px;
  border-radius: 14px;
  z-index: 0;
  background: ${e=>e.$accentColor};
`;const Ve=n(h.div)`
  position: relative;
  z-index: 1;
`,We=n(y)`
  width: 100%;
`,Le=n(h.div)`
  grid-column: 2;
  grid-row: 2;
`,Ee=n.h3`
  margin: 0 0 0.35rem;
  font-size: 1.1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: ${e=>e.theme.mutedText};
`,De=n(ue)`
  gap: 0.45rem;
`,Ne=n(ue)`
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
`,qe=n(h.div)`
  border-radius: 12px;
  overflow: hidden;
`,Oe=n(h.div)`
  margin-top: 0;
  border-radius: 12px;
  overflow: hidden;

  @media (max-width: 768px) {
    margin-top: 0;
  }
`,Ye=n(y)`
  width: 100%;
`,Ue=n.p`
  margin: 2rem auto 0;
  max-width: 600px;
  text-align: center;
  font-size: 0.95rem;
  color: ${e=>e.theme.mutedText};
`,Ge=n.div`
  margin-top: 2.5rem;
`,Xe=n.p`
  margin: 0 0 0.75rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${e=>e.theme.mutedText};
`,Ze=n.a`
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
`,_e=n.div`
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
`,Ke=n.div`
  padding: 1.25rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.4rem;
`,Je=n.h3`
  margin: 0 0 0.5rem;
  font-size: 1.25rem;
  font-weight: 700;
  color: ${e=>e.theme.strongText};
  line-height: 1.2;
`,Qe=n.p`
  margin: 0 0 1.25rem;
  font-size: 0.9rem;
  line-height: 1.6;
  color: ${e=>e.theme.mutedText};
`,ei=n.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35em;
  font-size: 0.9rem;
  font-weight: 600;
  color: ${e=>e.theme.strongText};
`,ii=n.div`
  margin: 0 0 2rem;
  max-width: 45rem;
`,ti=n(h.div)``,ri=n(fe)`
  font-size: clamp(1rem, 1.15vw, 1.15rem);
  line-height: 1.65;
  max-width: 62ch;
  text-wrap: pretty;
`,ni=n.div`
  margin: 0 auto;
  max-width: 800px;
  padding: 5rem 6%;
`,oi=n(h.div)`
  border-left: 3px solid ${e=>e.$accentColor||"#333"};
  padding-left: 2rem;
  margin-left: 0;

  ${e=>e.$accentColor?`\n    background: ${e.$accentColor}12;\n    padding: 3rem 2.5rem;\n    border-radius: 0 12px 12px 0;\n  `:""}
`,ai=n.p`
  margin: 0;
  text-align: left;
  font-size: clamp(1.2rem, 2.1vw, 1.55rem);
  font-style: italic;
  line-height: 1.5;
  color: ${e=>e.theme.strongText};
  text-wrap: balance;
`,di=n.cite`
  display: block;
  margin-top: 1.5rem;
  font-size: 0.85rem;
  font-style: normal;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${e=>e.theme.mutedText};
`,si=n.section`
  display: flex;
  flex-direction: column;
  gap: 0;
  padding: 0;
`,li=n.div`
  /* Body-width (not 100vw) so inner content lines up with the standard
     Section/SectionContent grid. A 100vw full-bleed here includes the
     scrollbar width and shifts the centered content ~half a scrollbar off. */
  width: 100%;
  padding: 0;
  background: ${e=>X(e.$background,e.theme)||e.theme.surface};
`,ci=n.div`
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
`,mi=n.div`
  position: relative;
  min-height: 0;
  overflow: hidden;
  border-radius: 12px;
  ${e=>e.$aspectRatio?"":"height: clamp(340px, 46vw, 680px);"}

  ${e=>e.$fullBleed?"\n    width: 100vw;\n    margin-left: calc(-50vw + 50%);\n  ":""}

  @media (max-width: 768px) {
    ${e=>e.$aspectRatio?"":"height: clamp(260px, 58vw, 460px);"}
  }
`,gi=n(y)`
  width: 100%;
`,hi=n.div`
  margin-top: 2.5rem;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.25rem;
`,pi=n.span`
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: ${e=>e.theme.mutedText};
  padding: 0.25rem 0;
`,ui=n.span`
  color: ${e=>e.theme.mutedText};
  margin: 0 0.25rem;
`,xi=n.div`
  margin-top: 1rem;
  padding: 0 0 1.25rem;
`,fi=n.div`
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
`,bi=n(h.div)`
  margin-bottom: 3rem;

  &:last-child {
    margin-bottom: 0;
  }
`,wi=n.p`
  margin: 0;
  border-left: 3px solid currentColor;
  padding-left: 1.5rem;
  text-align: left;
  font-size: 1.5rem;
  font-style: italic;
  line-height: 1.5;
  color: ${e=>e.theme.strongText};
`,vi=n.section`
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
`,ji=n(h.div)`
  position: relative;
  width: 100%;
  height: min(92vh, 920px);

  @media (max-width: 768px) {
    height: min(78vh, 620px);
  }
`,yi=n(y)`
  height: 100%;
  border-radius: 0;
`,$i=n.div`
  position: relative;
  z-index: 2;
  padding: 2.5rem 6% 3.5rem;
  background: ${e=>e.theme.surface};

  @media (max-width: 768px) {
    padding: 2rem 1.25rem;
  }
`,ki=n(h.h2)`
  color: ${e=>e.theme.strongText};
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  line-height: 1.15;
  max-width: 700px;
  margin: 0 0 1rem;
`,Ci=n(h.p)`
  margin: 0;
  color: ${e=>e.theme.mutedText};
  font-size: 1.05rem;
  line-height: 1.7;
  max-width: 540px;
`,Ri=n.section`
  position: relative;
  padding: 3.5rem 0;
`,Ii=n.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 64rem;
`;n(h.div)`
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
`;const Si=n(h.div)`
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
`,zi=n(y)`
  width: 100%;
`,Pi=n.div`
  position: relative;
  z-index: 1;
  max-width: 45rem;
  margin: 2.5rem 0 0;
  text-align: left;
`,Bi=n.div`
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
`,Ai=n.img`
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
`;const Mi=n(h.button)`
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

  ${Mi}:hover & {
    color: ${e=>e.theme.strongText};
  }
`;const Ti={duration:.7,ease:[.25,.1,.25,1]},Vi={duration:.9,ease:[.25,.1,.25,1]},Wi={once:!0,amount:.2};function Li({tags:e}){const i=r.useRef(null),n=x(i,{once:!0,margin:"100px"});return t.jsx("div",{ref:i,children:n&&t.jsx(hi,{children:e.map((i,r)=>t.jsx(h.div,{initial:{y:8},animate:{y:0},transition:{duration:.35,delay:.04*r},children:t.jsxs(pi,{children:[i,r<e.length-1&&t.jsx(ui,{children:"•"})]})},`${i}-${r}`))})})}function Ei({images:e}){const i=r.useRef(null),n=x(i,{once:!0,margin:"100px"});return t.jsx("div",{ref:i,children:n&&t.jsx(xi,{children:t.jsx(h.div,{initial:{y:12},animate:{y:0},transition:{duration:.45},children:t.jsx(F,{images:e,autoPlay:!0,intervalMs:2800,activeDecoding:"auto"})})})})}const Di=new Set(["full-width-image","parallax-reveal","image-pair","staggered-pair"]),Ni=new Set(["sticky-split","parallax-reveal"]);e("C",r.memo(function({caseStudy:e,nextProject:i,onNextProject:n,topAction:o}){const[a,s]=r.useState(!1),[l,c]=r.useState("idle"),m=e.heroImage||e.coverImage,g=e=>e?e.split("\n\n").filter(e=>e.trim()):[],p=(e,i)=>{if(e.sectionBackground)return e.sectionBackground;const t=(e=>{if(!e)return null;const i=e.trim(),t=/^#([0-9a-fA-F]{3})$/,r=/^#([0-9a-fA-F]{6})$/;if(t.test(i)){const[,e]=i.match(t);return`rgba(${parseInt(e[0]+e[0],16)}, ${parseInt(e[1]+e[1],16)}, ${parseInt(e[2]+e[2],16)}, 0.06)`}if(r.test(i)){const[,e]=i.match(r);return`rgba(${parseInt(e.slice(0,2),16)}, ${parseInt(e.slice(2,4),16)}, ${parseInt(e.slice(4,6),16)}, 0.06)`}return null})(e.accentColor);return t||(i?"white":"#f5f5f5")},u=()=>t.jsxs(re,{children:[t.jsxs(ne,{children:[t.jsx(oe,{children:"Client"}),t.jsx(ae,{children:e.meta.client})]}),t.jsxs(ne,{children:[t.jsx(oe,{children:"Role"}),t.jsx(ae,{children:e.meta.role})]}),t.jsxs(ne,{children:[t.jsx(oe,{children:"Timeline"}),t.jsx(ae,{children:e.meta.timeline})]}),t.jsxs(ne,{children:[t.jsx(oe,{children:"Platform"}),t.jsx(ae,{children:e.meta.platform})]})]}),x=e=>t.jsxs("div",{children:[(e.heading||e.body)&&t.jsx(ii,{style:{marginBottom:"3.75rem"},children:t.jsxs(ti,{children:[e.heading&&t.jsx(pe,{children:e.heading}),e.body&&t.jsx(ue,{style:{alignItems:"flex-start"},children:g(e.body).map((e,i)=>t.jsx(fe,{style:{textAlign:"left"},children:e},i))})]})}),t.jsx(ye,{initial:{scale:.97},whileInView:{scale:1},viewport:Wi,transition:Vi,children:e.images&&e.images[0]&&(()=>{const i=e.images[0],r=t.jsx(je,{src:i.src,alt:i.alt,avif:i.avif,webp:i.webp,mobileSrc:i.mobileSrc,mobileAvif:i.mobileAvif,mobileWebp:i.mobileWebp,aspectRatio:i.aspectRatio,borderRadius:i.borderRadius||"16px",objectFit:i.objectFit||"cover",objectPosition:i.objectPosition,backgroundColor:i.backgroundColor,imagePaddingBlock:i.imagePaddingBlock,imageScale:i.imageScale,border:i.containerBorder,mixBlendMode:i.mixBlendMode,style:{width:"100%"}});if(i.zoomable){const n=i.zoomAspectRatio||i.aspectRatio||"16/9",o=t.jsx(je,{src:i.src,alt:i.alt,avif:i.avif,webp:i.webp,mobileSrc:i.mobileSrc,mobileAvif:i.mobileAvif,mobileWebp:i.mobileWebp,aspectRatio:n,borderRadius:i.borderRadius||"8px",objectFit:"contain",backgroundColor:i.backgroundColor,style:{width:"100%"}});return t.jsx(Y,{id:`${e.id}-0`,ariaLabel:`Open ${i.alt} in full-screen viewer`,aspectRatio:n,overlayContent:o,children:r})}return r})()}),e.caption&&t.jsx(Ce,{children:e.caption})]},e.id),f=e=>{switch(e.layout){case"text-left-image-right":return(e=>t.jsx("div",{children:t.jsxs(be,{children:[t.jsxs(we,{initial:{x:-30},whileInView:{x:0},viewport:Wi,transition:Ti,children:[e.heading&&t.jsx(pe,{children:e.heading}),t.jsx(ue,{children:g(e.body).map((e,i)=>t.jsx(fe,{children:e},i))})]}),e.images&&e.images[0]&&t.jsx(ve,{initial:{x:30},whileInView:{x:0},viewport:Wi,transition:Vi,children:t.jsx(je,{src:e.images[0].src,alt:e.images[0].alt,avif:e.images[0].avif,webp:e.images[0].webp,aspectRatio:e.images[0].aspectRatio||"3/2",borderRadius:"8px",objectFit:"cover"})})]})},e.id))(e);case"text-right-image-left":return(e=>t.jsx("div",{children:t.jsxs(be,{children:[e.images&&e.images[0]&&t.jsx(ve,{style:{order:2},initial:{x:-30},whileInView:{x:0},viewport:Wi,transition:Vi,children:t.jsx(je,{src:e.images[0].src,alt:e.images[0].alt,avif:e.images[0].avif,webp:e.images[0].webp,aspectRatio:e.images[0].aspectRatio||"3/2",borderRadius:"8px",objectFit:"cover"})}),t.jsxs(we,{style:{order:1},initial:{x:30},whileInView:{x:0},viewport:Wi,transition:Ti,children:[e.heading&&t.jsx(pe,{children:e.heading}),t.jsx(ue,{children:g(e.body).map((e,i)=>t.jsx(fe,{children:e},i))})]})]})},e.id))(e);case"full-width-image":return x(e);case"image-pair":return(e=>t.jsxs("div",{children:[e.heading&&t.jsx(pe,{style:e.headingColor?{color:e.headingColor}:void 0,children:e.heading}),t.jsx(ke,{$stacked:e.stackImages,style:e.contentMaxWidth?{maxWidth:e.contentMaxWidth,marginInline:"auto"}:void 0,children:e.images&&(e.stackImages?e.images:e.images.slice(0,2)).map((e,i)=>t.jsx(Ie,{initial:{scale:.97},whileInView:{scale:1},viewport:Wi,transition:{...Vi,delay:.15*i},children:t.jsx(Se,{src:e.src,alt:e.alt,avif:e.avif,webp:e.webp,mobileSrc:e.mobileSrc,mobileAvif:e.mobileAvif,mobileWebp:e.mobileWebp,aspectRatio:e.aspectRatio,borderRadius:"0.5rem",objectFit:e.objectFit||"contain",backgroundColor:e.backgroundColor,imagePaddingBlock:e.imagePaddingBlock,imagePaddingInline:e.imagePaddingInline})},i))})]},e.id))(e);case"gallery-grid":return(e=>t.jsxs("div",{children:[e.heading&&t.jsx(pe,{children:e.heading}),t.jsx(Re,{children:e.images&&e.images.map((e,i)=>t.jsx(Ie,{initial:{scale:.95},whileInView:{scale:1},viewport:Wi,whileHover:{scale:1.02},transition:{...Vi,delay:.1*i},children:t.jsx(Se,{src:e.src,alt:e.alt,avif:e.avif,webp:e.webp,aspectRatio:e.aspectRatio||"1/1",borderRadius:"8px",objectFit:"cover"})},i))})]},e.id))(e);case"asymmetric-mosaic":return(e=>{const i=e.images||[];return t.jsxs("div",{children:[e.heading&&t.jsx(pe,{children:e.heading}),t.jsx(ze,{$count:i.length,children:i.map((e,r)=>t.jsx(Pe,{$index:r,$count:i.length,initial:{y:20,scale:.97},whileInView:{y:0,scale:1},viewport:{once:!0,amount:.2},transition:{...Ti,delay:.08*r},children:t.jsx(Be,{src:e.src,alt:e.alt,avif:e.avif,webp:e.webp,aspectRatio:e.aspectRatio||"4/3",borderRadius:"10px",objectFit:"cover"})},`${e.src}-${r}`))})]},e.id)})(e);case"three-column-feature":return(e=>{var i;const r=null===(i=e.images)||void 0===i?void 0:i[0],n=e.labels||[];return t.jsxs(Fe,{children:[t.jsx(Ae,{initial:{x:-20},whileInView:{x:0},viewport:{once:!0,amount:.2},transition:Ti,children:n.map((e,i)=>t.jsx(Me,{$active:0===i,children:e},`${e}-${i}`))}),t.jsx(Te,{children:r&&t.jsx(Ve,{initial:{y:24},whileInView:{y:0},viewport:{once:!0,amount:.2},transition:Vi,children:t.jsx(We,{src:r.src,alt:r.alt,avif:r.avif,webp:r.webp,aspectRatio:r.aspectRatio||"4/5",borderRadius:"12px",objectFit:r.objectFit||"cover",objectPosition:r.objectPosition,backgroundColor:r.backgroundColor,imagePaddingBlock:r.imagePaddingBlock})})}),t.jsxs(Le,{initial:{x:20},whileInView:{x:0},viewport:{once:!0,amount:.2},transition:Ti,children:[e.heading&&t.jsx(Ee,{children:e.heading}),t.jsx(De,{children:g(e.body).map((e,i)=>t.jsx(fe,{children:e},i))})]})]},e.id)})(e);case"staggered-pair":return(e=>{const i=e.images||[];if(i.length<=1)return x(e);const r=i[0],n=i[1],o=Boolean(e.heading);return t.jsxs("div",{children:[o&&t.jsx(ii,{children:t.jsxs(ti,{initial:{y:20},whileInView:{y:0},viewport:Wi,transition:Ti,children:[t.jsx(pe,{style:{textAlign:"left"},children:e.heading}),e.body&&t.jsx(ue,{style:{alignItems:"flex-start"},children:g(e.body).map((e,i)=>t.jsx(ri,{style:{textAlign:"left"},children:e},i))})]})}),t.jsxs(He,{children:[t.jsx(qe,{initial:{y:30},whileInView:{y:0},viewport:{once:!0,amount:.2},transition:Vi,children:t.jsx(Ye,{src:r.src,alt:r.alt,avif:r.avif,webp:r.webp,aspectRatio:r.aspectRatio,borderRadius:"12px",backgroundColor:r.backgroundColor,imagePaddingBlock:r.imagePaddingBlock,objectFit:r.objectFit||"cover",objectPosition:r.objectPosition,border:r.containerBorder})}),t.jsx(Oe,{initial:{y:30},whileInView:{y:0},viewport:{once:!0,amount:.2},transition:{...Vi,delay:.15},children:t.jsx(Ye,{src:n.src,alt:n.alt,avif:n.avif,webp:n.webp,aspectRatio:n.aspectRatio,borderRadius:"12px",backgroundColor:n.backgroundColor,imagePaddingBlock:n.imagePaddingBlock,objectFit:n.objectFit||"cover",objectPosition:n.objectPosition||"top center",border:n.containerBorder})})]}),!o&&e.body&&t.jsx(Ue,{children:e.body})]},e.id)})(e);case"related-callout":return(e=>{var i,r;return t.jsx("div",{children:t.jsxs(Ge,{children:[(null===(i=e.labels)||void 0===i?void 0:i[0])&&t.jsx(Xe,{children:e.labels[0]}),t.jsxs(Ze,{href:e.relatedHref||"#",children:[(null===(r=e.images)||void 0===r?void 0:r[0])&&t.jsx(_e,{children:t.jsxs("picture",{style:{display:"block",width:"100%",height:"100%"},children:[e.images[0].avif&&t.jsx("source",{srcSet:e.images[0].avif,type:"image/avif"}),e.images[0].webp&&t.jsx("source",{srcSet:e.images[0].webp,type:"image/webp"}),t.jsx("img",{src:e.images[0].src,alt:e.images[0].alt,loading:"lazy",decoding:"async",style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}})]})}),t.jsxs(Ke,{children:[e.heading&&t.jsx(Je,{children:e.heading}),e.body&&t.jsx(Qe,{children:e.body}),t.jsxs(ei,{children:[e.relatedLabel||"View Case Study"," →"]})]})]})]})},e.id)})(e);case"video":return(e=>t.jsxs("div",{children:[(e.heading||e.body)&&t.jsx(ii,{style:{marginBottom:"3.75rem"},children:t.jsxs(ti,{children:[e.heading&&t.jsx(pe,{children:e.heading}),e.body&&t.jsx(ue,{style:{alignItems:"flex-start"},children:g(e.body).map((e,i)=>t.jsx(fe,{style:{textAlign:"left"},children:e},i))})]})}),e.video&&t.jsx($e,{controls:!0,playsInline:!0,preload:"metadata",poster:e.video.poster,"aria-label":e.video.ariaLabel,children:t.jsx("source",{src:e.video.src,type:"video/mp4"})}),e.caption&&t.jsx(Ce,{children:e.caption})]},e.id))(e);case"text-only":return(e=>{var i,r,n,o;return t.jsx("div",{children:t.jsx(ii,{children:t.jsxs(ti,{initial:{y:20},whileInView:{y:0},viewport:Wi,transition:Ti,children:[e.heading&&(e.logoSrc?t.jsxs(Bi,{children:[t.jsx(Fi,{children:t.jsxs("picture",{children:[e.logoAvif&&t.jsx("source",{srcSet:e.logoAvif,type:"image/avif"}),e.logoWebp&&t.jsx("source",{srcSet:e.logoWebp,type:"image/webp"}),t.jsx(Ai,{src:e.logoSrc,alt:`${e.heading} logo`,$rounded:null===(i=e.logoSrc)||void 0===i?void 0:i.includes("Walmart"),$whiteBg:(null===(r=e.logoSrc)||void 0===r?void 0:r.includes("Amazon"))||(null===(n=e.logoSrc)||void 0===n?void 0:n.includes("Lyft"))||(null===(o=e.logoSrc)||void 0===o?void 0:o.includes("DoorDash")),loading:"lazy",decoding:"async"})]})}),t.jsx(pe,{style:{marginBottom:0,marginTop:0,paddingBottom:"3px",lineHeight:1,...e.headingColor?{color:e.headingColor}:{}},children:e.heading})]}):t.jsx(pe,{style:{textAlign:"left"},children:e.heading})),t.jsx(ue,{style:{alignItems:"flex-start"},children:g(e.body).map((e,i)=>t.jsx(ri,{style:{textAlign:"left"},children:e},i))})]})})},e.id)})(e);case"quote":return(e=>t.jsx("div",{children:t.jsx(ni,{children:t.jsxs(oi,{$accentColor:e.accentColor,initial:{y:20},whileInView:{y:0},viewport:Wi,transition:Ti,children:[t.jsx(ai,{children:e.body}),e.heading&&t.jsx(di,{children:e.heading})]})})},e.id))(e);case"image-carousel":return(e=>t.jsxs("div",{children:[(e.heading||e.body)&&t.jsx(ii,{children:t.jsxs(ti,{initial:{y:20},whileInView:{y:0},viewport:Wi,transition:Ti,children:[e.heading&&t.jsx(pe,{style:{textAlign:"left"},children:e.heading}),e.body&&t.jsx(ue,{style:{alignItems:"flex-start"},children:g(e.body).map((e,i)=>t.jsx(ri,{style:{textAlign:"left"},children:e},i))})]})}),e.images&&e.images.length>0&&t.jsx(h.div,{initial:{scale:.97},whileInView:{scale:1},viewport:Wi,transition:Vi,children:t.jsx(F,{images:e.images,autoPlay:!0,intervalMs:7e3,fixedAspectRatio:e.sectionAspectRatio})})]},e.id))(e);case"parallax-reveal":return(e=>{var i,r;const n=null===(i=e.images)||void 0===i?void 0:i[0];return n?t.jsxs(vi,{children:[t.jsx(ji,{children:t.jsx(yi,{src:n.src,alt:n.alt,avif:n.avif,webp:n.webp,parallaxSpeed:null!==(r=e.parallaxSpeed)&&void 0!==r?r:.4,objectFit:"cover"})}),t.jsxs($i,{children:[e.heading&&t.jsx(ki,{initial:{y:40},whileInView:{y:0},viewport:Wi,transition:Ti,children:e.heading}),e.body&&t.jsx(Ci,{initial:{y:40},whileInView:{y:0},viewport:Wi,transition:{...Ti,delay:.15},children:e.body})]})]},e.id):null})(e);case"image-on-color-block":return(e=>{var i,r,n,o,a;const d=null===(i=e.images)||void 0===i?void 0:i[0];return d?t.jsx(Ri,{children:t.jsxs(Ii,{children:[t.jsx(Si,{$containerBorder:d.containerBorder,$containerShadow:d.containerShadow,initial:{y:40},whileInView:{y:0},viewport:Wi,transition:Vi,children:t.jsx(zi,{src:d.src,alt:d.alt,avif:d.avif,webp:d.webp,aspectRatio:d.aspectRatio,borderRadius:d.borderRadius||"12px",containerBorderRadius:d.containerBorderRadius,objectFit:d.objectFit||"cover",objectPosition:d.objectPosition,imageScale:d.imageScale,backgroundColor:d.backgroundColor,imagePaddingBlock:d.imagePaddingBlock,imagePaddingInline:d.imagePaddingInline})}),(e.heading||e.body)&&t.jsxs(Pi,{children:[e.heading&&t.jsxs(Bi,{children:[e.logoSrc&&t.jsx(Fi,{children:t.jsxs("picture",{children:[e.logoAvif&&t.jsx("source",{srcSet:e.logoAvif,type:"image/avif"}),e.logoWebp&&t.jsx("source",{srcSet:e.logoWebp,type:"image/webp"}),t.jsx(Ai,{src:e.logoSrc,alt:`${e.heading} logo`,$rounded:null===(r=e.logoSrc)||void 0===r?void 0:r.includes("Walmart"),$whiteBg:(null===(n=e.logoSrc)||void 0===n?void 0:n.includes("Amazon"))||(null===(o=e.logoSrc)||void 0===o?void 0:o.includes("Lyft"))||(null===(a=e.logoSrc)||void 0===a?void 0:a.includes("DoorDash")),loading:"lazy",decoding:"async"})]})}),t.jsx(pe,{style:{marginBottom:0,marginTop:0,paddingBottom:"3px",lineHeight:1,...e.headingColor?{color:e.headingColor}:{}},children:e.heading})]}),e.body&&t.jsx(ue,{style:{alignItems:"flex-start",marginTop:"1.25rem"},children:g(e.body).map((i,r)=>t.jsx(fe,{style:{textAlign:"left",...e.headingColor?{color:"rgba(255,255,255,0.8)"}:{}},children:i},r))})]})]})},e.id):null})(e);case"sticky-split":return(e=>{var i,r,n,o,a,d;const s=(null===(i=e.stickyContent)||void 0===i?void 0:i.image)||(null===(r=e.images)||void 0===r?void 0:r[0]),l=(null===(n=e.stickyContent)||void 0===n?void 0:n.fullBleedImage)||!1,c=(null===(o=e.stickyContent)||void 0===o?void 0:o.tags)||[],m=(null===(a=e.stickyContent)||void 0===a?void 0:a.collateralImages)||[],h=(null===(d=e.scrollContent)||void 0===d?void 0:d.blocks)||[];return t.jsxs(si,{children:[h.length>0&&t.jsx(fi,{children:h.map((i,r)=>{if("text"===i.type)return t.jsxs(bi,{initial:{x:20},whileInView:{x:0},viewport:Wi,transition:Ti,children:[i.heading&&t.jsx(pe,{children:i.heading}),t.jsx(Ne,{children:g(i.body).map((e,i)=>t.jsx(fe,{children:e},i))})]},`${e.id}-text-${r}`);if("image"===i.type){var n;const o=null===(n=i.images)||void 0===n?void 0:n[0];return o?t.jsx(bi,{initial:{scale:.97},whileInView:{scale:1},viewport:Wi,transition:Vi,children:t.jsx(y,{src:o.src,alt:o.alt,avif:o.avif,webp:o.webp,aspectRatio:o.aspectRatio||"3/2",borderRadius:"8px",objectFit:"cover"})},`${e.id}-image-${r}`):null}return"carousel"===i.type?t.jsx(bi,{initial:{scale:.97},whileInView:{scale:1},viewport:Wi,transition:Vi,children:i.images&&i.images.length>0&&t.jsx(F,{images:i.images,showControls:!1,showDots:!1})},`${e.id}-carousel-${r}`):"quote"===i.type?t.jsx(bi,{initial:{x:30},whileInView:{x:0},viewport:Wi,transition:Ti,children:t.jsx(wi,{children:i.body})},`${e.id}-quote-${r}`):null})}),(s||c.length>0||m.length>0)&&t.jsx(li,{$background:e.sectionBackground,children:t.jsxs(ci,{$fullBleed:l,children:[s&&t.jsx(mi,{$fullBleed:l,$aspectRatio:s.aspectRatio,children:t.jsx(gi,{src:s.src,alt:s.alt,avif:s.avif,webp:s.webp,aspectRatio:s.aspectRatio||"16/9",borderRadius:"0",backgroundColor:s.backgroundColor,imagePaddingBlock:s.imagePaddingBlock,objectFit:s.objectFit||"cover",objectPosition:s.objectPosition||"center",imageScale:s.imageScale,border:s.containerBorder,mixBlendMode:s.mixBlendMode,disableRevealAnimation:!0})}),c.length>0&&t.jsx(Li,{tags:c}),m.length>0&&t.jsx(Ei,{images:m})]})})]},e.id)})(e);default:return null}};return t.jsxs(Z,{children:[t.jsxs(_,{children:[t.jsxs(K,{children:[o&&t.jsx(J,{children:o}),t.jsx(u,{}),t.jsx(se,{initial:{y:30},animate:{y:0},transition:{duration:.8,delay:.2,ease:[.25,.1,.25,1]},children:e.heroHeadline}),e.website&&t.jsxs(le,{href:e.website.href,target:"_blank",rel:"noopener noreferrer",children:[e.website.label,t.jsx(d,{"aria-hidden":"true"})]})]}),t.jsx(Q,{children:t.jsxs(te,{$backgroundColor:m.backgroundColor,$border:m.backgroundColor?m.containerBorder:void 0,children:[t.jsx(ee,{src:m.src,alt:m.alt,avif:m.avif,webp:m.webp,mobileSrc:m.mobileSrc,mobileAvif:m.mobileAvif,mobileWebp:m.mobileWebp,aspectRatio:m.aspectRatio||"16/9",borderRadius:"8px",objectFit:m.objectFit||"cover",objectPosition:m.objectPosition||"center",imageScale:1,border:m.backgroundColor?void 0:m.containerBorder,loading:"eager",decoding:"sync",onLoad:()=>s(!0)}),!a&&t.jsx(ie,{initial:{opacity:1},animate:{opacity:0},transition:{duration:.4,delay:.3},"aria-hidden":"true"})]})})]}),t.jsx(ce,{children:e.sections.map((i,r)=>{const n=e.sections[r-1],o=e.sections[r+1],a=Ni.has(i.layout),d=Di.has(i.layout),s=!!n&&Di.has(n.layout),l=!!o&&Di.has(o.layout),c=!i.disableCompactPadding&&!i.heading&&!i.body&&d&&(s||l);return a?t.jsx("div",{children:f(i)},i.id):t.jsx("div",{children:t.jsx(me,{$background:p(i,r%2==0),$compact:c,$padding:i.sectionPadding,children:t.jsx(ge,{children:f(i)})})},i.id)})})]})}))}}});
