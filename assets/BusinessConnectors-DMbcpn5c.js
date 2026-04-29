import{j as i}from"./three-CIqbc5c4.js";import{b as x,c as s,R as Qe}from"./vendor-hQudadcW.js";import{f as _,a as re,i as Ve,s as Fe,b as He,p as Ue,v as qe,d as Ke,e as Je,g as Ze,n as Me,r as et,h as tt,u as q,j as We,k as ge,l as Q,M as it,o as se,q as rt,t as nt,m as h,c as at}from"./index-Bp3crKZb.js";import{P as st,S as ot}from"./PortfolioCardsSection-oXr_rIi1.js";import{a as lt}from"./Grid60-JHQJiXRB.js";import"./index-CAIcbJfl.js";import"./AD-NPYKbg_9.js";import"./LeysiApp—Screens copy-CsLIUfOG.js";import"./ThreePillars—pages-BPOZPkZx.js";import"./Group 55618@2x-DJ5DP13a.js";import"./BrandGuidelines—Mockup-CZOd5Pwz.js";function Be(e,t){let n;const a=()=>{const{currentTime:o}=t,d=(o===null?0:o.value)/100;n!==d&&e(d),n=d};return _.preUpdate(a,!0),()=>re(a)}function ct(...e){const t=!Array.isArray(e[0]),n=t?0:-1,a=e[0+n],o=e[1+n],l=e[2+n],d=e[3+n],p=Ve(o,l,d);return t?p(a):p}function ne(e){return typeof window>"u"?!1:e?Fe():He()}const dt=50,fe=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),mt=()=>({time:0,x:fe(),y:fe()}),ut={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function he(e,t,n,a){const o=n[t],{length:l,position:d}=ut[t],p=o.current,f=n.time;o.current=Math.abs(e[`scroll${d}`]),o.scrollLength=e[`scroll${l}`]-e[`client${l}`],o.offset.length=0,o.offset[0]=0,o.offset[1]=o.scrollLength,o.progress=Ue(0,o.scrollLength,o.current);const u=a-f;o.velocity=u>dt?0:qe(o.current-p,u)}function pt(e,t,n){he(e,"x",t,n),he(e,"y",t,n),t.time=n}function gt(e,t){const n={x:0,y:0};let a=e;for(;a&&a!==t;)if(Ke(a))n.x+=a.offsetLeft,n.y+=a.offsetTop,a=a.offsetParent;else if(a.tagName==="svg"){const o=a.getBoundingClientRect();a=a.parentElement;const l=a.getBoundingClientRect();n.x+=o.left-l.left,n.y+=o.top-l.top}else if(a instanceof SVGGraphicsElement){const{x:o,y:l}=a.getBBox();n.x+=o,n.y+=l;let d=null,p=a.parentNode;for(;!d;)p.tagName==="svg"&&(d=p),p=a.parentNode;a=d}else break;return n}const de={start:0,center:.5,end:1};function xe(e,t,n=0){let a=0;if(e in de&&(e=de[e]),typeof e=="string"){const o=parseFloat(e);e.endsWith("px")?a=o:e.endsWith("%")?e=o/100:e.endsWith("vw")?a=o/100*document.documentElement.clientWidth:e.endsWith("vh")?a=o/100*document.documentElement.clientHeight:e=o}return typeof e=="number"&&(a=t*e),n+a}const ft=[0,0];function ht(e,t,n,a){let o=Array.isArray(e)?e:ft,l=0,d=0;return typeof e=="number"?o=[e,e]:typeof e=="string"&&(e=e.trim(),e.includes(" ")?o=e.split(" "):o=[e,de[e]?e:"0"]),l=xe(o[0],n,a),d=xe(o[1],t),l-d}const U={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},xt={x:0,y:0};function wt(e){return"getBBox"in e&&e.tagName!=="svg"?e.getBBox():{width:e.clientWidth,height:e.clientHeight}}function vt(e,t,n){const{offset:a=U.All}=n,{target:o=e,axis:l="y"}=n,d=l==="y"?"height":"width",p=o!==e?gt(o,e):xt,f=o===e?{width:e.scrollWidth,height:e.scrollHeight}:wt(o),u={width:e.clientWidth,height:e.clientHeight};t[l].offset.length=0;let g=!t[l].interpolate;const R=a.length;for(let v=0;v<R;v++){const C=ht(a[v],u[d],f[d],p[l]);!g&&C!==t[l].interpolatorOffsets[v]&&(g=!0),t[l].offset[v]=C}g&&(t[l].interpolate=Ve(t[l].offset,Je(a),{clamp:!1}),t[l].interpolatorOffsets=[...t[l].offset]),t[l].progress=Ze(0,1,t[l].interpolate(t[l].current))}function yt(e,t=e,n){if(n.x.targetOffset=0,n.y.targetOffset=0,t!==e){let a=t;for(;a&&a!==e;)n.x.targetOffset+=a.offsetLeft,n.y.targetOffset+=a.offsetTop,a=a.offsetParent}n.x.targetLength=t===e?t.scrollWidth:t.clientWidth,n.y.targetLength=t===e?t.scrollHeight:t.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight}function bt(e,t,n,a={}){return{measure:o=>{yt(e,a.target,n),pt(e,n,o),(a.offset||a.target)&&vt(e,n,a)},notify:()=>t(n)}}const G=new WeakMap,we=new WeakMap,oe=new WeakMap,ve=new WeakMap,K=new WeakMap,ye=e=>e===document.scrollingElement?window:e;function Oe(e,{container:t=document.scrollingElement,trackContentSize:n=!1,...a}={}){if(!t)return Me;let o=oe.get(t);o||(o=new Set,oe.set(t,o));const l=mt(),d=bt(t,e,l,a);if(o.add(d),!G.has(t)){const f=()=>{for(const v of o)v.measure(tt.timestamp);_.preUpdate(u)},u=()=>{for(const v of o)v.notify()},g=()=>_.read(f);G.set(t,g);const R=ye(t);window.addEventListener("resize",g),t!==document.documentElement&&we.set(t,et(t,g)),R.addEventListener("scroll",g),g()}if(n&&!K.has(t)){const f=G.get(t),u={width:t.scrollWidth,height:t.scrollHeight};ve.set(t,u);const g=()=>{const v=t.scrollWidth,C=t.scrollHeight;(u.width!==v||u.height!==C)&&(f(),u.width=v,u.height=C)},R=_.read(g,!0);K.set(t,R)}const p=G.get(t);return _.read(p,!1,!0),()=>{re(p);const f=oe.get(t);if(!f||(f.delete(d),f.size))return;const u=G.get(t);G.delete(t),u&&(ye(t).removeEventListener("scroll",u),we.get(t)?.(),window.removeEventListener("resize",u));const g=K.get(t);g&&(re(g),K.delete(t)),ve.delete(t)}}const jt=[[U.Enter,"entry"],[U.Exit,"exit"],[U.Any,"cover"],[U.All,"contain"]],be={start:0,end:1};function It(e){const t=e.trim().split(/\s+/);if(t.length!==2)return;const n=be[t[0]],a=be[t[1]];if(!(n===void 0||a===void 0))return[n,a]}function $t(e){if(e.length!==2)return;const t=[];for(const n of e)if(Array.isArray(n))t.push(n);else if(typeof n=="string"){const a=It(n);if(!a)return;t.push(a)}else return;return t}function Rt(e,t){const n=$t(e);if(!n)return!1;for(let a=0;a<2;a++){const o=n[a],l=t[a];if(o[0]!==l[0]||o[1]!==l[1])return!1}return!0}function ue(e){if(!e)return{rangeStart:"contain 0%",rangeEnd:"contain 100%"};for(const[t,n]of jt)if(Rt(e,t))return{rangeStart:`${n} 0%`,rangeEnd:`${n} 100%`}}const je=new Map;function Ie(e){const t={value:0},n=Oe(a=>{t.value=a[e.axis].progress*100},e);return{currentTime:t,cancel:n}}function Ne({source:e,container:t,...n}){const{axis:a}=n;e&&(t=e);let o=je.get(t);o||(o=new Map,je.set(t,o));const l=n.target??"self";let d=o.get(l);d||(d={},o.set(l,d));const p=a+(n.offset??[]).join(",");return d[p]||(n.target&&ne(n.target)?ue(n.offset)?d[p]=new ViewTimeline({subject:n.target,axis:a}):d[p]=Ie({container:t,...n}):ne()?d[p]=new ScrollTimeline({source:t,axis:a}):d[p]=Ie({container:t,...n})),d[p]}function St(e,t){const n=Ne(t),a=t.target?ue(t.offset):void 0,o=t.target?ne(t.target)&&!!a:ne();return e.attachTimeline({timeline:o?n:void 0,...a&&o&&{rangeStart:a.rangeStart,rangeEnd:a.rangeEnd},observe:l=>(l.pause(),Be(d=>{l.time=l.iterationDuration*d},n))})}function Ct(e){return e.length===2}function kt(e,t){return Ct(e)?Oe(n=>{e(n[t.axis].progress,n)},t):Be(e,Ne(t))}function Ge(e,{axis:t="y",container:n=document.scrollingElement,...a}={}){if(!n)return Me;const o={axis:t,container:n,...a};return typeof e=="function"?kt(e,o):St(e,o)}const Pt=()=>({scrollX:Q(0),scrollY:Q(0),scrollXProgress:Q(0),scrollYProgress:Q(0)}),J=e=>e?!e.current:!1;function $e(e,t,n,a){return{factory:o=>Ge(o,{...t,axis:e,container:n?.current||void 0,target:a?.current||void 0}),times:[0,1],keyframes:[0,1],ease:o=>o,duration:1}}function Et(e,t){return typeof window>"u"?!1:e?Fe()&&!!ue(t):He()}function Tt({container:e,target:t,...n}={}){const a=q(Pt);Et(t,n.offset)&&(a.scrollXProgress.accelerate=$e("x",n,e,t),a.scrollYProgress.accelerate=$e("y",n,e,t));const o=x.useRef(null),l=x.useRef(!1),d=x.useCallback(()=>(o.current=Ge((p,{x:f,y:u})=>{a.scrollX.set(f.current),a.scrollXProgress.set(f.progress),a.scrollY.set(u.current),a.scrollYProgress.set(u.progress)},{...n,container:e?.current||void 0,target:t?.current||void 0}),()=>{o.current?.()}),[e,t,JSON.stringify(n.offset)]);return We(()=>{if(l.current=!1,J(e)||J(t)){l.current=!0;return}else return d()},[d]),x.useEffect(()=>{if(l.current)return ge(!J(e)),ge(!J(t)),d()},[d]),a}function zt(e){const t=q(()=>Q(e)),{isStatic:n}=x.useContext(it);if(n){const[,a]=x.useState(e);x.useEffect(()=>t.on("change",a),[])}return t}function De(e,t){const n=zt(t()),a=()=>n.set(t());return a(),We(()=>{const o=()=>_.preRender(a,!1,!0),l=e.map(d=>d.on("change",o));return()=>{l.forEach(d=>d()),re(a)}}),n}function At(e){se.current=[],e();const t=De(se.current,e);return se.current=void 0,t}function _e(e,t,n,a){if(typeof e=="function")return At(e);if(n!==void 0&&!Array.isArray(n)&&typeof t!="function")return Lt(e,t,n,a);const d=typeof t=="function"?t:ct(t,n,a),p=Array.isArray(e)?Re(e,d):Re([e],([u])=>d(u)),f=Array.isArray(e)?void 0:e.accelerate;return f&&!f.isTransformed&&typeof t!="function"&&Array.isArray(n)&&a?.clamp!==!1&&(p.accelerate={...f,times:t,keyframes:n,isTransformed:!0}),p}function Re(e,t){const n=q(()=>[]);return De(e,()=>{n.length=0;const a=e.length;for(let o=0;o<a;o++)n[o]=e[o].get();return t(n)})}function Lt(e,t,n,a){const o=q(()=>Object.keys(n)),l=q(()=>({}));for(const d of o)l[d]=_e(e,t,n[d],a);return l}const Vt={some:0,all:1};function Ft(e,t,{root:n,margin:a,amount:o="some"}={}){const l=rt(e),d=new WeakMap,p=u=>{u.forEach(g=>{const R=d.get(g.target);if(g.isIntersecting!==!!R)if(g.isIntersecting){const v=t(g.target,g);typeof v=="function"?d.set(g.target,v):f.unobserve(g.target)}else typeof R=="function"&&(R(g),d.delete(g.target))})},f=new IntersectionObserver(p,{root:n,rootMargin:a,threshold:typeof o=="number"?o:Vt[o]});return l.forEach(u=>f.observe(u)),()=>f.disconnect()}function Ye(e,{root:t,margin:n,amount:a,once:o=!1,initial:l=!1}={}){const[d,p]=x.useState(l);return x.useEffect(()=>{if(!e.current||o&&d)return;const f=()=>(p(!0),o?void 0:()=>p(!1)),u={root:t&&t.current||void 0,margin:n,amount:a};return Ft(e.current,f,u)},[t,e,n,o,a]),d}const Ht=s(h.div)`
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: ${e=>e.$borderRadius};

  ${e=>e.$aspectRatio?`
    aspect-ratio: ${e.$aspectRatio};
  `:""}
`,Mt=s.picture`
  display: block;
  width: 100%;
  height: 100%;
`,Wt=s(h.img)`
  display: block;
  width: 100%;
  height: ${e=>e.$hasParallax?"110%":"100%"};
  object-fit: ${e=>e.$objectFit};
  object-position: ${e=>e.$objectPosition};
`;function z({src:e,alt:t,avif:n,webp:a,aspectRatio:o,parallaxSpeed:l=0,className:d,borderRadius:p="12px",objectFit:f="cover",objectPosition:u="center",imageScale:g=1,disableRevealAnimation:R=!1,loading:v="lazy",decoding:C="async",onLoad:W}){const F=x.useRef(null),S=nt(),[B,O]=x.useState(window.innerWidth<768);x.useEffect(()=>{const j=()=>{O(window.innerWidth<768)};return window.addEventListener("resize",j),()=>window.removeEventListener("resize",j)},[]);const{scrollYProgress:N}=Tt({target:F,offset:["start end","end start"]}),E=Math.max(0,l)*60,A=_e(N,[0,1],[-E,E]),y=l>0&&!S&&!B;return i.jsx(Ht,{ref:F,className:d,$aspectRatio:o,$borderRadius:p,...R?{}:{initial:{opacity:0,y:24},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.2},transition:{duration:.9,ease:[.25,.1,.25,1]}},children:i.jsxs(Mt,{children:[n&&i.jsx("source",{srcSet:n,type:"image/avif"}),a&&i.jsx("source",{srcSet:a,type:"image/webp"}),i.jsx(Wt,{src:e,alt:t,loading:v,decoding:C,onLoad:W,style:{y:y?A:0,scale:g},$objectFit:f,$objectPosition:u,$hasParallax:y})]})})}const Bt=s.div`
  width: 100%;
`,Xe=Qe.forwardRef((e,t)=>i.jsx(h.div,{ref:t,style:{position:"relative",width:"100%",borderRadius:"12px",overflow:"hidden",aspectRatio:"3 / 2",background:"#f0efeb",...e.style||{}},...e}));Xe.displayName="Frame";const Ot=s.div`
  position: absolute;
  inset: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${e=>e.$visible?1:0};
  transition: opacity 0.2s ease;
  pointer-events: none;
`,Se=s.button`
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
`,Nt=s.button`
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
`,Ce=s.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
`,ke=s(z)`
  width: 100%;
  height: 100%;
`,Gt=s.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`,Dt=s.button`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  padding: 0;
  background: ${e=>e.$active?"#333":"#ccc"};
  transform: ${e=>e.$active?"scale(1.3)":"scale(1)"};
  transition: all 0.3s;
`;function me({images:e,autoPlay:t=!1,intervalMs:n=4e3,showControls:a=!0,showDots:o=!0}){x.useEffect(()=>{if(!F.current)return;let y=!1;try{F.current.focus({preventScroll:!0}),y=!0}catch{}},[]);const[l,d]=x.useState(0),[p,f]=x.useState(0),[u,g]=x.useState(!0),[R,v]=x.useState(!1),[C,W]=x.useState(!1),F=x.useRef(null),S=e.length,B=y=>{if(!S)return;const j=(y+S)%S;f(l),g(!1),d(j)},O=()=>B(l+1),N=()=>B(l-1);if(x.useEffect(()=>{if(!t||C||S<2)return;const y=setInterval(()=>{d(j=>(j+1)%S)},n);return()=>clearInterval(y)},[t,n,C,S]),x.useEffect(()=>{if(S<2)return;const y=X=>new Promise(L=>{const H=new Image;H.onload=async()=>{if(typeof H.decode=="function")try{await H.decode()}catch{}L()},H.onerror=()=>L(),H.src=X});(async()=>{const X=e.flatMap(L=>[L.avif,L.webp,L.src].filter(H=>!!H));await Promise.all(X.map(L=>y(L)))})()},[e,S]),!S)return null;const E=e[l],A=e[p];return i.jsxs(Bt,{children:[i.jsxs(Xe,{ref:F,tabIndex:0,"data-carousel-frame":"true",onMouseEnter:()=>v(!0),onMouseLeave:()=>v(!1),onKeyDown:y=>{y.key==="ArrowRight"&&(y.preventDefault(),W(!0),O()),y.key==="ArrowLeft"&&(y.preventDefault(),W(!0),N())},drag:"x",dragConstraints:{left:0,right:0},onDragEnd:(y,j)=>{j.offset.x>80?N():j.offset.x<-80&&O()},children:[!u&&i.jsx(Ce,{style:{zIndex:1},children:i.jsx(ke,{src:A.src,alt:A.alt,avif:A.avif,webp:A.webp,aspectRatio:A.aspectRatio||"3/2",borderRadius:"0",objectFit:"cover",disableRevealAnimation:!0,loading:"eager",decoding:"auto"},`prev-${A.src}-${p}`)}),i.jsx(Ce,{style:{zIndex:2},children:i.jsx(ke,{src:E.src,alt:E.alt,avif:E.avif,webp:E.webp,aspectRatio:E.aspectRatio||"3/2",borderRadius:"0",objectFit:"cover",disableRevealAnimation:!0,loading:"eager",decoding:"auto",onLoad:()=>g(!0),style:{position:u?"relative":"absolute"}},`active-${E.src}-${l}`)}),S>1&&a&&i.jsxs(Ot,{$visible:R,children:[i.jsx(Se,{type:"button",$side:"left","aria-label":"Previous image",onClick:N,children:"‹"}),t&&i.jsx(Nt,{type:"button","aria-label":C?"Resume slideshow":"Pause slideshow",onClick:()=>W(y=>!y),children:C?"▶":"❚❚"}),i.jsx(Se,{type:"button",$side:"right","aria-label":"Next image",onClick:O,children:"›"})]})]}),S>1&&o&&i.jsx(Gt,{children:e.map((y,j)=>i.jsx(Dt,{type:"button",$active:j===l,"aria-label":`Go to slide ${j+1}`,"aria-current":j===l,onClick:()=>B(j)},`${y.src}-${j}`))})]})}const _t=s.div`
  min-height: 100vh;
  background: white;
`,Yt=s.section`
  position: relative;
  overflow: hidden;
  min-height: 90vh;
  background: #f5f5f5;
  padding: 5rem 1.5rem 10rem;

  @media (min-width: 768px) {
    min-height: 96vh;
    padding: 7rem 1.5rem 14rem;
  }

  @media (max-width: 900px) {
    min-height: auto;
    padding: 4.5rem 1.25rem 2rem;
  }
`,Xt=s.div`
  position: relative;
  z-index: 2;
  margin: 0 auto;
  max-width: 64rem;
`,Qt=s.div`
  margin-bottom: 1.25rem;
`,Ut=s.div`
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
`,qt=s(z)`
  width: 100%;

  img {
    filter: saturate(0.96);
  }
`,Kt=s(h.div)`
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
`,Jt=s.div`
  position: relative;
  width: 100%;
  height: 100%;
`,Zt=s.div`
  margin-bottom: 3rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`,Z=s.div`
  text-align: left;
`,ee=s.p`
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  color: #a3a3a3;
  text-transform: uppercase;
  margin: 0;
  margin-bottom: 0.5rem;
`,te=s.p`
  font-size: 0.875rem;
  color: #4b5563;
  margin: 0;
`,ei=s(h.h1)`
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
`,ti=s.div``,ii=s.section`
  background: ${e=>e.$background};
  padding: ${e=>e.$compact?"0":"3.75rem 0"};
`,ri=s.div`
  margin: 0 auto;
  max-width: 64rem;
`,M=s.h2`
  font-size: 1.875rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1.5rem;
`,Y=s.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,D=s.p`
  margin: 0;
  max-width: 68ch;
  font-size: 1rem;
  line-height: 1.625;
  color: #666666;
`,Pe=s.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`,Ee=s(h.div)``,Te=s(h.div)`
  overflow: hidden;
  border-radius: 0.5rem;
`,le=s(z)`
  width: 100%;
  height: 24rem;

  @media (min-width: 768px) {
    height: 100%;
  }
`,ni=s(h.div)`
  overflow: hidden;
  border-radius: 0;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
`,ai=s.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;

  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
`,si=s.p`
  margin-top: 0.75rem;
  font-size: 0.875rem;
  font-style: italic;
  color: #8b8b8b;
`,oi=s.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`,ze=s(h.div)`
  overflow: hidden;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover img {
    transform: scale(1.02);
  }
`,Ae=s(z)`
  width: 100%;

  img {
    transition: transform 0.3s ease-out;
  }
`,li=s.div`
  display: grid;
  gap: 1rem;

  ${e=>e.$count===3?`
        grid-template-columns: 1.2fr 0.8fr;
        grid-template-rows: auto auto;
      `:e.$count===4?`
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
`,ci=s(h.div)`
  cursor: pointer;
  overflow: hidden;
  border-radius: 10px;

  ${e=>{if(e.$count===3){if(e.$index===0)return`
          grid-column: 1;
          grid-row: 1 / span 2;
        `;if(e.$index===1)return`
          grid-column: 2;
          grid-row: 1;
        `;if(e.$index===2)return`
          grid-column: 2;
          grid-row: 2;
        `}if(e.$count===4){if(e.$index===0)return`
          grid-column: 1 / span 2;
          grid-row: 1;
        `;if(e.$index===1)return`
          grid-column: 3;
          grid-row: 1;
        `;if(e.$index===2)return`
          grid-column: 1;
          grid-row: 2;
        `;if(e.$index===3)return`
          grid-column: 2 / span 2;
          grid-row: 2;
        `}return e.$count>=5&&e.$index===0?`
        grid-column: 1 / span 2;
      `:""}}

  @media (max-width: 768px) {
    grid-column: auto !important;
    grid-row: auto !important;
  }

  &:hover img {
    transform: scale(1.03);
  }
`,di=s(z)`
  width: 100%;

  img {
    transition: transform 0.5s ease-out;
  }
`,mi=s.section`
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
`,ui=s(h.div)`
  display: flex;
  flex-direction: column;
  grid-column: 1;
  grid-row: 1 / span 2;

  @media (max-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
  }
`,pi=s.span`
  font-size: 0.85rem;
  line-height: 2.4;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${e=>e.$active?"#000":"#bbb"};
  font-weight: ${e=>e.$active?700:600};

  @media (max-width: 768px) {
    line-height: 1.6;
  }
`,gi=s.div`
  position: relative;
  grid-column: 2;
  grid-row: 1;
`;s(h.div)`
  position: absolute;
  inset: 0;
  margin: -20px;
  border-radius: 14px;
  z-index: 0;
  background: ${e=>e.$accentColor};
`;const fi=s(h.div)`
  position: relative;
  z-index: 1;
`,hi=s(z)`
  width: 100%;
`,xi=s(h.div)`
  grid-column: 2;
  grid-row: 2;
`,wi=s.h3`
  margin: 0 0 0.35rem;
  font-size: 1.1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #555;
`,vi=s(Y)`
  gap: 0.45rem;
`,yi=s(Y)`
  gap: 0.6rem;
`,bi=s.section`
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
`,ji=s(h.div)`
  border-radius: 12px;
  overflow: hidden;
`,Ii=s(h.div)`
  margin-top: 0;
  border-radius: 12px;
  overflow: hidden;

  @media (max-width: 768px) {
    margin-top: 0;
  }
`,Le=s(z)`
  width: 100%;

  img {
    object-fit: contain;
  }
`,$i=s.p`
  margin: 2rem auto 0;
  max-width: 600px;
  text-align: center;
  font-size: 0.95rem;
  color: #888;
`,Ri=s.div`
  margin: 0 auto;
  max-width: 45rem;
`,Si=s(h.div)``,Ci=s(D)`
  font-size: clamp(1rem, 1.15vw, 1.15rem);
  line-height: 1.65;
  max-width: 62ch;
  text-wrap: pretty;
`,ki=s.div`
  margin: 0 auto;
  max-width: 800px;
  padding: 5rem 6%;
`,Pi=s(h.div)`
  border-left: 3px solid ${e=>e.$accentColor||"#333"};
  padding-left: 2rem;
  margin-left: 0;

  ${e=>e.$accentColor?`
    background: ${e.$accentColor}12;
    padding: 3rem 2.5rem;
    border-radius: 0 12px 12px 0;
  `:""}
`,Ei=s.p`
  margin: 0;
  text-align: left;
  font-size: clamp(1.2rem, 2.1vw, 1.55rem);
  font-style: italic;
  line-height: 1.5;
  color: #1a1a1a;
  text-wrap: balance;
`,Ti=s.cite`
  display: block;
  margin-top: 1.5rem;
  font-size: 0.85rem;
  font-style: normal;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #999;
`,zi=s.section`
  display: flex;
  flex-direction: column;
  gap: 0;
  padding: 0 0 4rem;
`,Ai=s.div`
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  padding: 0;
  background: white;
`,Li=s.div`
  position: static;
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
`,Vi=s.div`
  min-height: 0;
  height: clamp(340px, 46vw, 680px);

  @media (max-width: 768px) {
    height: clamp(260px, 58vw, 460px);
  }
`,Fi=s(z)`
  height: 100%;
`,Hi=s.div`
  margin-top: 1rem;
  padding: 0 1.25rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.25rem;
`,Mi=s.span`
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #888;
  padding: 0.25rem 0;
`,Wi=s.span`
  color: #9a9a9a;
  margin: 0 0.25rem;
`,Bi=s.div`
  margin-top: 1rem;
  padding: 0 0 1.25rem;
`,Oi=s.div`
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
`,ie=s(h.div)`
  margin-bottom: 3rem;

  &:last-child {
    margin-bottom: 0;
  }
`,Ni=s.p`
  margin: 0;
  border-left: 3px solid currentColor;
  padding-left: 1.5rem;
  text-align: left;
  font-size: 1.5rem;
  font-style: italic;
  line-height: 1.5;
  color: #222;
`,Gi=s.section`
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
`,Di=s(h.div)`
  position: relative;
  width: 100%;
  height: min(92vh, 920px);

  @media (max-width: 768px) {
    height: min(78vh, 620px);
  }
`,_i=s(z)`
  height: 100%;
  border-radius: 0;
`,Yi=s.div`
  position: relative;
  z-index: 2;
  padding: 2.5rem 6% 3.5rem;
  background: white;

  @media (max-width: 768px) {
    padding: 2rem 1.25rem;
  }
`,Xi=s(h.h2)`
  color: #111;
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  line-height: 1.15;
  max-width: 700px;
  margin: 0 0 1rem;
`,Qi=s(h.p)`
  margin: 0;
  color: #222;
  font-size: 1.05rem;
  line-height: 1.7;
  max-width: 540px;
`,Ui=s.section`
  position: relative;
  padding: 3.5rem 6%;
`,qi=s.div`
  position: relative;
  margin: 0 auto;
  max-width: 1000px;
`;s(h.div)`
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
`;const Ki=s(h.div)`
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
`,Ji=s(z)`
  width: 100%;
`,Zi=s.div`
  position: relative;
  z-index: 1;
  max-width: 600px;
  margin: 2.5rem auto 0;
  text-align: left;
`;s.section`
  border-top: 1px solid #e5e7eb;
  background: white;
  padding: 4rem 1.5rem 6rem;

  @media (min-width: 768px) {
    padding: 6rem 1.5rem;
  }
`;s.div`
  margin: 0 auto;
  max-width: 64rem;
`;s.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 2rem;
`;s.p`
  margin: 0;
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  color: #9ca3af;
  text-transform: uppercase;
`;s.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;s.button`
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
`;const er=s(h.button)`
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
`;s.p`
  font-size: 0.875rem;
  letter-spacing: 0.1em;
  color: #a3a3a3;
  text-transform: uppercase;
  margin: 0;
`;s.h3`
  margin-top: 0.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;

  @media (min-width: 768px) {
    margin-top: 0;
    font-size: 1.875rem;
  }
`;s.div`
  font-size: 1.5rem;
  color: #a3a3a3;
  transition: color 200ms;

  ${er}:hover & {
    color: #111827;
  }
`;const T={duration:.7,ease:[.25,.1,.25,1]},P={duration:.9,ease:[.25,.1,.25,1]},$={once:!0,amount:.2};function tr({tags:e}){const t=x.useRef(null),n=Ye(t,{once:!0,margin:"100px"});return i.jsx("div",{ref:t,children:n&&i.jsx(Hi,{children:e.map((a,o)=>i.jsx(h.div,{initial:{opacity:0,y:8},animate:{opacity:1,y:0},transition:{duration:.35,delay:o*.04},children:i.jsxs(Mi,{children:[a,o<e.length-1&&i.jsx(Wi,{children:"•"})]})},`${a}-${o}`))})})}function ir({images:e}){const t=x.useRef(null),n=Ye(t,{once:!0,margin:"100px"});return i.jsx("div",{ref:t,children:n&&i.jsx(Bi,{children:i.jsx(h.div,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{duration:.45},children:i.jsx(me,{images:e,autoPlay:!0,intervalMs:2800})})})})}const ce=new Set(["full-width-image","parallax-reveal","image-pair","staggered-pair"]),rr=new Set(["sticky-split","parallax-reveal"]),nr=x.memo(function({caseStudy:t,nextProject:n,onNextProject:a,topAction:o}){const[l,d]=x.useState(!1),[p,f]=x.useState("idle"),u=r=>r?r.split(`

`).filter(c=>c.trim()):[],g=r=>{if(!r)return null;const c=r.trim(),m=/^#([0-9a-fA-F]{3})$/,w=/^#([0-9a-fA-F]{6})$/;if(m.test(c)){const[,b]=c.match(m),I=parseInt(b[0]+b[0],16),V=parseInt(b[1]+b[1],16),k=parseInt(b[2]+b[2],16);return`rgba(${I}, ${V}, ${k}, 0.06)`}if(w.test(c)){const[,b]=c.match(w),I=parseInt(b.slice(0,2),16),V=parseInt(b.slice(2,4),16),k=parseInt(b.slice(4,6),16);return`rgba(${I}, ${V}, ${k}, 0.06)`}return null},R=(r,c)=>{const m=g(r.accentColor);return m||(c?"white":"#f5f5f5")},v=()=>i.jsxs(Zt,{children:[i.jsxs(Z,{children:[i.jsx(ee,{children:"Client"}),i.jsx(te,{children:t.meta.client})]}),i.jsxs(Z,{children:[i.jsx(ee,{children:"Role"}),i.jsx(te,{children:t.meta.role})]}),i.jsxs(Z,{children:[i.jsx(ee,{children:"Timeline"}),i.jsx(te,{children:t.meta.timeline})]}),i.jsxs(Z,{children:[i.jsx(ee,{children:"Platform"}),i.jsx(te,{children:t.meta.platform})]})]}),C=r=>i.jsx("div",{children:i.jsxs(Pe,{children:[i.jsxs(Ee,{initial:{opacity:0,x:-30},whileInView:{opacity:1,x:0},viewport:$,transition:T,children:[r.heading&&i.jsx(M,{children:r.heading}),i.jsx(Y,{children:u(r.body).map((c,m)=>i.jsx(D,{children:c},m))})]}),r.images&&r.images[0]&&i.jsx(Te,{initial:{opacity:0,x:30},whileInView:{opacity:1,x:0},viewport:$,transition:P,children:i.jsx(le,{src:r.images[0].src,alt:r.images[0].alt,avif:r.images[0].avif,webp:r.images[0].webp,aspectRatio:r.images[0].aspectRatio||"3/2",borderRadius:"8px",objectFit:"cover"})})]})},r.id),W=r=>i.jsx("div",{children:i.jsxs(Pe,{children:[r.images&&r.images[0]&&i.jsx(Te,{style:{order:2},initial:{opacity:0,x:-30},whileInView:{opacity:1,x:0},viewport:$,transition:P,children:i.jsx(le,{src:r.images[0].src,alt:r.images[0].alt,avif:r.images[0].avif,webp:r.images[0].webp,aspectRatio:r.images[0].aspectRatio||"3/2",borderRadius:"8px",objectFit:"cover"})}),i.jsxs(Ee,{style:{order:1},initial:{opacity:0,x:30},whileInView:{opacity:1,x:0},viewport:$,transition:T,children:[r.heading&&i.jsx(M,{children:r.heading}),i.jsx(Y,{children:u(r.body).map((c,m)=>i.jsx(D,{children:c},m))})]})]})},r.id),F=r=>i.jsxs("div",{children:[i.jsx(ni,{initial:{opacity:0,scale:.97},whileInView:{opacity:1,scale:1},viewport:$,transition:P,children:r.images&&r.images[0]&&i.jsx(le,{src:r.images[0].src,alt:r.images[0].alt,avif:r.images[0].avif,webp:r.images[0].webp,aspectRatio:r.images[0].aspectRatio||"16/9",borderRadius:"8px",objectFit:"cover",style:{width:"100%"}})}),(r.caption||r.body)&&i.jsx(si,{children:r.caption||r.body})]},r.id),S=r=>i.jsxs("div",{children:[r.heading&&i.jsx(M,{children:r.heading}),i.jsx(ai,{children:r.images&&r.images.slice(0,2).map((c,m)=>i.jsx(ze,{initial:{opacity:0,scale:.97},whileInView:{opacity:1,scale:1},viewport:$,transition:{...P,delay:m*.15},children:i.jsx(Ae,{src:c.src,alt:c.alt,avif:c.avif,webp:c.webp,aspectRatio:c.aspectRatio||"3/2",borderRadius:"0",objectFit:"contain",style:{height:"26rem"}})},m))})]},r.id),B=r=>i.jsxs("div",{children:[r.heading&&i.jsx(M,{children:r.heading}),i.jsx(oi,{children:r.images&&r.images.map((c,m)=>i.jsx(ze,{initial:{opacity:0,scale:.95},whileInView:{opacity:1,scale:1},viewport:$,whileHover:{scale:1.02},transition:{...P,delay:m*.1},children:i.jsx(Ae,{src:c.src,alt:c.alt,avif:c.avif,webp:c.webp,aspectRatio:c.aspectRatio||"1/1",borderRadius:"8px",objectFit:"cover"})},m))})]},r.id),O=r=>{const c=r.images||[];return i.jsxs("div",{children:[r.heading&&i.jsx(M,{children:r.heading}),i.jsx(li,{$count:c.length,children:c.map((m,w)=>i.jsx(ci,{$index:w,$count:c.length,initial:{opacity:0,y:20,scale:.97},whileInView:{opacity:1,y:0,scale:1},viewport:{once:!0,amount:.2},transition:{...T,delay:w*.08},children:i.jsx(di,{src:m.src,alt:m.alt,avif:m.avif,webp:m.webp,aspectRatio:m.aspectRatio||"4/3",borderRadius:"10px",objectFit:"cover"})},`${m.src}-${w}`))})]},r.id)},N=r=>{const c=r.images?.[0],m=r.labels||[];return i.jsxs(mi,{children:[i.jsx(ui,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},viewport:{once:!0,amount:.2},transition:T,children:m.map((w,b)=>i.jsx(pi,{$active:b===0,children:w},`${w}-${b}`))}),i.jsx(gi,{children:c&&i.jsx(fi,{initial:{opacity:0,y:24},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.2},transition:P,children:i.jsx(hi,{src:c.src,alt:c.alt,avif:c.avif,webp:c.webp,aspectRatio:c.aspectRatio||"4/5",borderRadius:"12px",objectFit:"cover"})})}),i.jsxs(xi,{initial:{opacity:0,x:20},whileInView:{opacity:1,x:0},viewport:{once:!0,amount:.2},transition:T,children:[r.heading&&i.jsx(wi,{children:r.heading}),i.jsx(vi,{children:u(r.body).map((w,b)=>i.jsx(D,{children:w},b))})]})]},r.id)},E=r=>{const c=r.images||[];if(c.length<=1)return F(r);const m=c[0],w=c[1];return i.jsxs("div",{children:[i.jsxs(bi,{children:[i.jsx(ji,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.2},transition:P,children:i.jsx(Le,{src:m.src,alt:m.alt,avif:m.avif,webp:m.webp,aspectRatio:m.aspectRatio||"16/9",borderRadius:"12px",objectFit:"contain"})}),i.jsx(Ii,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.2},transition:{...P,delay:.15},children:i.jsx(Le,{src:w.src,alt:w.alt,avif:w.avif,webp:w.webp,aspectRatio:w.aspectRatio||"16/9",borderRadius:"12px",objectFit:"contain",objectPosition:"top center"})})]}),r.body&&i.jsx($i,{children:r.body})]},r.id)},A=r=>i.jsx("div",{children:i.jsx(Ri,{children:i.jsxs(Si,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:$,transition:T,children:[r.heading&&i.jsx(M,{style:{textAlign:"left"},children:r.heading}),i.jsx(Y,{style:{alignItems:"flex-start"},children:u(r.body).map((c,m)=>i.jsx(Ci,{style:{textAlign:"left"},children:c},m))})]})})},r.id),y=r=>i.jsx("div",{children:i.jsx(ki,{children:i.jsxs(Pi,{$accentColor:r.accentColor,initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:$,transition:T,children:[i.jsx(Ei,{children:r.body}),r.heading&&i.jsx(Ti,{children:r.heading})]})})},r.id),j=r=>i.jsxs("div",{children:[r.heading&&i.jsx(M,{children:r.heading}),r.images&&r.images.length>0&&i.jsx(h.div,{initial:{opacity:0,scale:.97},whileInView:{opacity:1,scale:1},viewport:$,transition:P,children:i.jsx(me,{images:r.images})})]},r.id),X=r=>{const c=r.stickyContent?.image||r.images?.[0],m=r.stickyContent?.tags||[],w=r.stickyContent?.collateralImages||[],b=r.scrollContent?.blocks||[];return i.jsxs(zi,{children:[i.jsx(Oi,{children:b.map((I,V)=>{if(I.type==="text")return i.jsxs(ie,{initial:{opacity:0,x:20},whileInView:{opacity:1,x:0},viewport:$,transition:T,children:[I.heading&&i.jsx(M,{children:I.heading}),i.jsx(yi,{children:u(I.body).map((k,ae)=>i.jsx(D,{children:k},ae))})]},`${r.id}-text-${V}`);if(I.type==="image"){const k=I.images?.[0];return k?i.jsx(ie,{initial:{opacity:0,scale:.97},whileInView:{opacity:1,scale:1},viewport:$,transition:P,children:i.jsx(z,{src:k.src,alt:k.alt,avif:k.avif,webp:k.webp,aspectRatio:k.aspectRatio||"3/2",borderRadius:"8px",objectFit:"cover"})},`${r.id}-image-${V}`):null}return I.type==="carousel"?i.jsx(ie,{initial:{opacity:0,scale:.97},whileInView:{opacity:1,scale:1},viewport:$,transition:P,children:I.images&&I.images.length>0&&i.jsx(me,{images:I.images,showControls:!1,showDots:!1})},`${r.id}-carousel-${V}`):I.type==="quote"?i.jsx(ie,{initial:{opacity:0,x:30},whileInView:{opacity:1,x:0},viewport:$,transition:T,children:i.jsx(Ni,{children:I.body})},`${r.id}-quote-${V}`):null})}),i.jsx(Ai,{children:i.jsxs(Li,{children:[c&&i.jsx(Vi,{children:i.jsx(Fi,{src:c.src,alt:c.alt,avif:c.avif,webp:c.webp,aspectRatio:c.aspectRatio||"16/9",borderRadius:"12px",objectFit:"cover"})}),m.length>0&&i.jsx(tr,{tags:m}),w.length>0&&i.jsx(ir,{images:w})]})})]},r.id)},L=r=>{const c=r.images?.[0];return c?i.jsxs(Gi,{children:[i.jsx(Di,{children:i.jsx(_i,{src:c.src,alt:c.alt,avif:c.avif,webp:c.webp,parallaxSpeed:r.parallaxSpeed??.4,objectFit:"cover"})}),i.jsxs(Yi,{children:[r.heading&&i.jsx(Xi,{initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:$,transition:T,children:r.heading}),r.body&&i.jsx(Qi,{initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:$,transition:{...T,delay:.15},children:r.body})]})]},r.id):null},H=r=>{const c=r.images?.[0];return c?i.jsx(Ui,{children:i.jsxs(qi,{children:[i.jsx(Ki,{initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:$,transition:P,children:i.jsx(Ji,{src:c.src,alt:c.alt,avif:c.avif,webp:c.webp,aspectRatio:c.aspectRatio||"3/2",borderRadius:"12px",objectFit:"cover"})}),(r.heading||r.body)&&i.jsxs(Zi,{children:[r.heading&&i.jsx(M,{children:r.heading}),r.body&&i.jsx(Y,{style:{alignItems:"flex-start"},children:u(r.body).map((m,w)=>i.jsx(D,{style:{textAlign:"left"},children:m},w))})]})]})},r.id):null},pe=r=>{switch(r.layout){case"text-left-image-right":return C(r);case"text-right-image-left":return W(r);case"full-width-image":return F(r);case"image-pair":return S(r);case"gallery-grid":return B(r);case"asymmetric-mosaic":return O(r);case"three-column-feature":return N(r);case"staggered-pair":return E(r);case"text-only":return A(r);case"quote":return y(r);case"image-carousel":return j(r);case"parallax-reveal":return L(r);case"image-on-color-block":return H(r);case"sticky-split":return X(r);default:return null}};return i.jsxs(_t,{children:[i.jsxs(Yt,{children:[i.jsxs(Xt,{children:[o&&i.jsx(Qt,{children:o}),i.jsx(v,{}),i.jsx(ei,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.2,ease:[.25,.1,.25,1]},children:t.heroHeadline})]}),i.jsx(Ut,{children:i.jsxs(Jt,{children:[i.jsx(qt,{src:t.coverImage.src,alt:t.coverImage.alt,avif:t.coverImage.avif,webp:t.coverImage.webp,aspectRatio:t.coverImage.aspectRatio||"16/9",borderRadius:"8px",objectFit:"cover",imageScale:1,onLoad:()=>d(!0)}),!l&&i.jsx(Kt,{initial:{opacity:1},animate:{opacity:0},transition:{duration:.4,delay:.3},"aria-hidden":"true"})]})})]}),i.jsx(ti,{children:t.sections.map((r,c)=>{const m=t.sections[c-1],w=t.sections[c+1],b=rr.has(r.layout),I=ce.has(r.layout),V=m?ce.has(m.layout):!1,k=w?ce.has(w.layout):!1,ae=I&&(V||k);return b?i.jsx("div",{children:pe(r)},r.id):i.jsx(h.div,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0,margin:"200px"},transition:{duration:.6,ease:"easeOut"},children:i.jsx(ii,{$background:R(r,c%2===0),$compact:ae,children:i.jsx(ri,{children:pe(r)})})},r.id)})})]})}),ar=s(h.div)`
  position: relative;
`;function xr(){const e=at[0];return x.useLayoutEffect(()=>{window.scrollTo(0,0)},[]),i.jsxs(ar,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},children:[i.jsx(nr,{caseStudy:e}),i.jsx("div",{style:{borderTop:"1px solid #e5e7eb",width:"100vw",position:"relative",left:0,right:0}}),i.jsx(st,{}),i.jsxs(lt,{style:{paddingTop:"1.5rem",paddingBottom:"4rem",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"},children:[i.jsx(ot,{}),i.jsxs("a",{href:"https://zackmactavish.com",target:"_blank",rel:"noopener noreferrer",style:{fontFamily:"Space Grotesk, sans-serif",fontWeight:600,fontSize:"1.1rem",color:"#fff",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:"0.4em",transition:"color 0.18s"},children:["Art Portfolio ",i.jsx("span",{style:{fontSize:"1.3em",lineHeight:1,display:"inline-block",transform:"translateY(1px)"},children:"→"})]})]})]})}export{xr as default};
