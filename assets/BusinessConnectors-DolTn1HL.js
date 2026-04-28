import{j as t}from"./three-CIqbc5c4.js";import{b as S,c as s}from"./vendor-hQudadcW.js";import{f as F,c as q,i as Se,s as Re,a as Pe,p as Be,v as Ne,b as Oe,d as Ge,e as De,n as Te,r as Ye,g as _e,u as N,h as Ae,j as le,k as W,M as Xe,l as ee,o as Qe,m as g,A as Ue}from"./use-reduced-motion-nfCoKMWW.js";import{P as qe}from"./PortfolioCardsSection-CjrZ6Cne.js";import{c as Ke}from"./caseStudies-CIotLOJm.js";import"./index-CAIcbJfl.js";import"./Grid60-JHQJiXRB.js";import"./AD-NPYKbg_9.js";import"./LeysiApp—Screens copy-CsLIUfOG.js";import"./ThreePillars—pages-BPOZPkZx.js";import"./Group 55618@2x-DJ5DP13a.js";import"./BrandGuidelines—Mockup-CZOd5Pwz.js";function Ee(e,i){let n;const a=()=>{const{currentTime:o}=i,d=(o===null?0:o.value)/100;n!==d&&e(d),n=d};return F.preUpdate(a,!0),()=>q(a)}function Je(...e){const i=!Array.isArray(e[0]),n=i?0:-1,a=e[0+n],o=e[1+n],c=e[2+n],d=e[3+n],u=Se(o,c,d);return i?u(a):u}function K(e){return typeof window>"u"?!1:e?Re():Pe()}const Ze=50,ce=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),et=()=>({time:0,x:ce(),y:ce()}),tt={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function de(e,i,n,a){const o=n[i],{length:c,position:d}=tt[i],u=o.current,h=n.time;o.current=Math.abs(e[`scroll${d}`]),o.scrollLength=e[`scroll${c}`]-e[`client${c}`],o.offset.length=0,o.offset[0]=0,o.offset[1]=o.scrollLength,o.progress=Be(0,o.scrollLength,o.current);const p=a-h;o.velocity=p>Ze?0:Ne(o.current-u,p)}function it(e,i,n){de(e,"x",i,n),de(e,"y",i,n),i.time=n}function rt(e,i){const n={x:0,y:0};let a=e;for(;a&&a!==i;)if(Oe(a))n.x+=a.offsetLeft,n.y+=a.offsetTop,a=a.offsetParent;else if(a.tagName==="svg"){const o=a.getBoundingClientRect();a=a.parentElement;const c=a.getBoundingClientRect();n.x+=o.left-c.left,n.y+=o.top-c.top}else if(a instanceof SVGGraphicsElement){const{x:o,y:c}=a.getBBox();n.x+=o,n.y+=c;let d=null,u=a.parentNode;for(;!d;)u.tagName==="svg"&&(d=u),u=a.parentNode;a=d}else break;return n}const ae={start:0,center:.5,end:1};function me(e,i,n=0){let a=0;if(e in ae&&(e=ae[e]),typeof e=="string"){const o=parseFloat(e);e.endsWith("px")?a=o:e.endsWith("%")?e=o/100:e.endsWith("vw")?a=o/100*document.documentElement.clientWidth:e.endsWith("vh")?a=o/100*document.documentElement.clientHeight:e=o}return typeof e=="number"&&(a=i*e),n+a}const nt=[0,0];function at(e,i,n,a){let o=Array.isArray(e)?e:nt,c=0,d=0;return typeof e=="number"?o=[e,e]:typeof e=="string"&&(e=e.trim(),e.includes(" ")?o=e.split(" "):o=[e,ae[e]?e:"0"]),c=me(o[0],n,a),d=me(o[1],i),c-d}const B={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},st={x:0,y:0};function ot(e){return"getBBox"in e&&e.tagName!=="svg"?e.getBBox():{width:e.clientWidth,height:e.clientHeight}}function lt(e,i,n){const{offset:a=B.All}=n,{target:o=e,axis:c="y"}=n,d=c==="y"?"height":"width",u=o!==e?rt(o,e):st,h=o===e?{width:e.scrollWidth,height:e.scrollHeight}:ot(o),p={width:e.clientWidth,height:e.clientHeight};i[c].offset.length=0;let w=!i[c].interpolate;const x=a.length;for(let y=0;y<x;y++){const R=at(a[y],p[d],h[d],u[c]);!w&&R!==i[c].interpolatorOffsets[y]&&(w=!0),i[c].offset[y]=R}w&&(i[c].interpolate=Se(i[c].offset,Ge(a),{clamp:!1}),i[c].interpolatorOffsets=[...i[c].offset]),i[c].progress=De(0,1,i[c].interpolate(i[c].current))}function ct(e,i=e,n){if(n.x.targetOffset=0,n.y.targetOffset=0,i!==e){let a=i;for(;a&&a!==e;)n.x.targetOffset+=a.offsetLeft,n.y.targetOffset+=a.offsetTop,a=a.offsetParent}n.x.targetLength=i===e?i.scrollWidth:i.clientWidth,n.y.targetLength=i===e?i.scrollHeight:i.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight}function dt(e,i,n,a={}){return{measure:o=>{ct(e,a.target,n),it(e,n,o),(a.offset||a.target)&&lt(e,n,a)},notify:()=>i(n)}}const V=new WeakMap,ue=new WeakMap,te=new WeakMap,pe=new WeakMap,D=new WeakMap,ge=e=>e===document.scrollingElement?window:e;function ze(e,{container:i=document.scrollingElement,trackContentSize:n=!1,...a}={}){if(!i)return Te;let o=te.get(i);o||(o=new Set,te.set(i,o));const c=et(),d=dt(i,e,c,a);if(o.add(d),!V.has(i)){const h=()=>{for(const y of o)y.measure(_e.timestamp);F.preUpdate(p)},p=()=>{for(const y of o)y.notify()},w=()=>F.read(h);V.set(i,w);const x=ge(i);window.addEventListener("resize",w),i!==document.documentElement&&ue.set(i,Ye(i,w)),x.addEventListener("scroll",w),w()}if(n&&!D.has(i)){const h=V.get(i),p={width:i.scrollWidth,height:i.scrollHeight};pe.set(i,p);const w=()=>{const y=i.scrollWidth,R=i.scrollHeight;(p.width!==y||p.height!==R)&&(h(),p.width=y,p.height=R)},x=F.read(w,!0);D.set(i,x)}const u=V.get(i);return F.read(u,!1,!0),()=>{q(u);const h=te.get(i);if(!h||(h.delete(d),h.size))return;const p=V.get(i);V.delete(i),p&&(ge(i).removeEventListener("scroll",p),ue.get(i)?.(),window.removeEventListener("resize",p));const w=D.get(i);w&&(q(w),D.delete(i)),pe.delete(i)}}const mt=[[B.Enter,"entry"],[B.Exit,"exit"],[B.Any,"cover"],[B.All,"contain"]],he={start:0,end:1};function ut(e){const i=e.trim().split(/\s+/);if(i.length!==2)return;const n=he[i[0]],a=he[i[1]];if(!(n===void 0||a===void 0))return[n,a]}function pt(e){if(e.length!==2)return;const i=[];for(const n of e)if(Array.isArray(n))i.push(n);else if(typeof n=="string"){const a=ut(n);if(!a)return;i.push(a)}else return;return i}function gt(e,i){const n=pt(e);if(!n)return!1;for(let a=0;a<2;a++){const o=n[a],c=i[a];if(o[0]!==c[0]||o[1]!==c[1])return!1}return!0}function se(e){if(!e)return{rangeStart:"contain 0%",rangeEnd:"contain 100%"};for(const[i,n]of mt)if(gt(e,i))return{rangeStart:`${n} 0%`,rangeEnd:`${n} 100%`}}const fe=new Map;function xe(e){const i={value:0},n=ze(a=>{i.value=a[e.axis].progress*100},e);return{currentTime:i,cancel:n}}function Le({source:e,container:i,...n}){const{axis:a}=n;e&&(i=e);let o=fe.get(i);o||(o=new Map,fe.set(i,o));const c=n.target??"self";let d=o.get(c);d||(d={},o.set(c,d));const u=a+(n.offset??[]).join(",");return d[u]||(n.target&&K(n.target)?se(n.offset)?d[u]=new ViewTimeline({subject:n.target,axis:a}):d[u]=xe({container:i,...n}):K()?d[u]=new ScrollTimeline({source:i,axis:a}):d[u]=xe({container:i,...n})),d[u]}function ht(e,i){const n=Le(i),a=i.target?se(i.offset):void 0,o=i.target?K(i.target)&&!!a:K();return e.attachTimeline({timeline:o?n:void 0,...a&&o&&{rangeStart:a.rangeStart,rangeEnd:a.rangeEnd},observe:c=>(c.pause(),Ee(d=>{c.time=c.iterationDuration*d},n))})}function ft(e){return e.length===2}function xt(e,i){return ft(e)?ze(n=>{e(n[i.axis].progress,n)},i):Ee(e,Le(i))}function Ve(e,{axis:i="y",container:n=document.scrollingElement,...a}={}){if(!n)return Te;const o={axis:i,container:n,...a};return typeof e=="function"?xt(e,o):ht(e,o)}const wt=()=>({scrollX:W(0),scrollY:W(0),scrollXProgress:W(0),scrollYProgress:W(0)}),Y=e=>e?!e.current:!1;function we(e,i,n,a){return{factory:o=>Ve(o,{...i,axis:e,container:n?.current||void 0,target:a?.current||void 0}),times:[0,1],keyframes:[0,1],ease:o=>o,duration:1}}function vt(e,i){return typeof window>"u"?!1:e?Re()&&!!se(i):Pe()}function yt({container:e,target:i,...n}={}){const a=N(wt);vt(i,n.offset)&&(a.scrollXProgress.accelerate=we("x",n,e,i),a.scrollYProgress.accelerate=we("y",n,e,i));const o=S.useRef(null),c=S.useRef(!1),d=S.useCallback(()=>(o.current=Ve((u,{x:h,y:p})=>{a.scrollX.set(h.current),a.scrollXProgress.set(h.progress),a.scrollY.set(p.current),a.scrollYProgress.set(p.progress)},{...n,container:e?.current||void 0,target:i?.current||void 0}),()=>{o.current?.()}),[e,i,JSON.stringify(n.offset)]);return Ae(()=>{if(c.current=!1,Y(e)||Y(i)){c.current=!0;return}else return d()},[d]),S.useEffect(()=>{if(c.current)return le(!Y(e)),le(!Y(i)),d()},[d]),a}function bt(e){const i=N(()=>W(e)),{isStatic:n}=S.useContext(Xe);if(n){const[,a]=S.useState(e);S.useEffect(()=>i.on("change",a),[])}return i}function He(e,i){const n=bt(i()),a=()=>n.set(i());return a(),Ae(()=>{const o=()=>F.preRender(a,!1,!0),c=e.map(d=>d.on("change",o));return()=>{c.forEach(d=>d()),q(a)}}),n}function jt(e){ee.current=[],e();const i=He(ee.current,e);return ee.current=void 0,i}function Fe(e,i,n,a){if(typeof e=="function")return jt(e);if(n!==void 0&&!Array.isArray(n)&&typeof i!="function")return It(e,i,n,a);const d=typeof i=="function"?i:Je(i,n,a),u=Array.isArray(e)?ve(e,d):ve([e],([p])=>d(p)),h=Array.isArray(e)?void 0:e.accelerate;return h&&!h.isTransformed&&typeof i!="function"&&Array.isArray(n)&&a?.clamp!==!1&&(u.accelerate={...h,times:i,keyframes:n,isTransformed:!0}),u}function ve(e,i){const n=N(()=>[]);return He(e,()=>{n.length=0;const a=e.length;for(let o=0;o<a;o++)n[o]=e[o].get();return i(n)})}function It(e,i,n,a){const o=N(()=>Object.keys(n)),c=N(()=>({}));for(const d of o)c[d]=Fe(e,i,n[d],a);return c}const $t=s(g.div)`
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: ${e=>e.$borderRadius};

  ${e=>e.$aspectRatio?`
    aspect-ratio: ${e.$aspectRatio};
  `:""}
`,Ct=s.picture`
  display: block;
  width: 100%;
  height: 100%;
`,kt=s(g.img)`
  display: block;
  width: 100%;
  height: ${e=>e.$hasParallax?"110%":"100%"};
  object-fit: ${e=>e.$objectFit};
  object-position: ${e=>e.$objectPosition};
`;function A({src:e,alt:i,avif:n,webp:a,aspectRatio:o,parallaxSpeed:c=0,className:d,borderRadius:u="12px",objectFit:h="cover",objectPosition:p="center",imageScale:w=1,disableRevealAnimation:x=!1,loading:y="lazy",decoding:R="async",onLoad:L}){const E=S.useRef(null),b=Qe(),{scrollYProgress:I}=yt({target:E,offset:["start end","end start"]}),O=Math.max(0,c)*60,J=Fe(I,[0,1],[-O,O]),G=c>0&&!b;return t.jsx($t,{ref:E,className:d,$aspectRatio:o,$borderRadius:u,initial:x?!1:{opacity:0,y:24},whileInView:x?void 0:{opacity:1,y:0},viewport:x?void 0:{once:!0,amount:.2},transition:x?void 0:{duration:.9,ease:[.25,.1,.25,1]},children:t.jsxs(Ct,{children:[n&&t.jsx("source",{srcSet:n,type:"image/avif"}),a&&t.jsx("source",{srcSet:a,type:"image/webp"}),t.jsx(kt,{src:e,alt:i,loading:y,decoding:R,onLoad:L,style:{y:G?J:0,scale:w},$objectFit:h,$objectPosition:p,$hasParallax:G})]})})}const St=s.div`
  width: 100%;
`,Rt=s(g.div)`
  position: relative;
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  aspect-ratio: 3 / 2;
  background: #111;
`,Pt=s.div`
  position: absolute;
  inset: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${e=>e.$visible?1:0};
  transition: opacity 0.2s ease;
  pointer-events: none;
`,ye=s.button`
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
`,Tt=s.button`
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
`,At=s(g.div)`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
`,Et=s(A)`
  width: 100%;
  height: 100%;
`,zt=s.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`,Lt=s.button`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  padding: 0;
  background: ${e=>e.$active?"#333":"#ccc"};
  transform: ${e=>e.$active?"scale(1.3)":"scale(1)"};
  transition: all 0.3s;
`,Vt={duration:0,ease:[.25,.1,.25,1]};function ie({images:e,autoPlay:i=!1,intervalMs:n=4e3,showControls:a=!0,showDots:o=!0}){const[c,d]=S.useState(0),[u,h]=S.useState(!1),[p,w]=S.useState(!1),x=e.length,y=b=>{if(!x)return;const I=(b+x)%x;d(I)},R=()=>y(c+1),L=()=>y(c-1);if(S.useEffect(()=>{if(!i||p||x<2)return;const b=setInterval(()=>{d(I=>(I+1)%x)},n);return()=>clearInterval(b)},[i,n,p,x]),S.useEffect(()=>{x<2||e.forEach(b=>{const I=new Image;I.src=b.src})},[e,x]),!x)return null;const E=e[c];return t.jsxs(St,{children:[t.jsxs(Rt,{tabIndex:0,onMouseEnter:()=>h(!0),onMouseLeave:()=>h(!1),onKeyDown:b=>{b.key==="ArrowRight"&&(b.preventDefault(),R()),b.key==="ArrowLeft"&&(b.preventDefault(),L())},drag:"x",dragConstraints:{left:0,right:0},onDragEnd:(b,I)=>{I.offset.x>80?L():I.offset.x<-80&&R()},children:[t.jsx(Ue,{initial:!1,mode:"sync",children:t.jsx(At,{initial:{opacity:1,x:0},animate:{opacity:1,x:0},exit:{opacity:1,x:0},transition:Vt,children:t.jsx(Et,{src:E.src,alt:E.alt,avif:E.avif,webp:E.webp,borderRadius:"0",objectFit:"cover",disableRevealAnimation:!0,loading:"eager",decoding:"auto"})},`${E.src}-${c}`)}),x>1&&a&&t.jsxs(Pt,{$visible:u,children:[t.jsx(ye,{type:"button",$side:"left","aria-label":"Previous image",onClick:L,children:"‹"}),i&&t.jsx(Tt,{type:"button","aria-label":p?"Resume slideshow":"Pause slideshow",onClick:()=>w(b=>!b),children:p?"▶":"❚❚"}),t.jsx(ye,{type:"button",$side:"right","aria-label":"Next image",onClick:R,children:"›"})]})]}),x>1&&o&&t.jsx(zt,{children:e.map((b,I)=>t.jsx(Lt,{type:"button",$active:I===c,"aria-label":`Go to slide ${I+1}`,"aria-current":I===c,onClick:()=>y(I)},`${b.src}-${I}`))})]})}const Ht=s.div`
  min-height: 100vh;
  background: white;
`,Ft=s.section`
  position: relative;
  overflow: hidden;
  min-height: 90vh;
  background: #f5f5f5;
  padding: 5rem 1.5rem 10rem;

  @media (min-width: 768px) {
    min-height: 96vh;
    padding: 7rem 1.5rem 14rem;
  }
`,Mt=s.div`
  position: relative;
  z-index: 2;
  margin: 0 auto;
  max-width: 64rem;
`,Wt=s.div`
  margin-bottom: 1.25rem;
`,Bt=s.div`
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
`,Nt=s(A)`
  width: 100%;

  img {
    filter: saturate(0.96);
  }
`,Ot=s.div`
  margin-bottom: 3rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`,_=s.div`
  text-align: left;
`,X=s.p`
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  color: #a3a3a3;
  text-transform: uppercase;
  margin: 0;
  margin-bottom: 0.5rem;
`,Q=s.p`
  font-size: 0.875rem;
  color: #4b5563;
  margin: 0;
`,Gt=s(g.h1)`
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
`,Dt=s.div``,Yt=s.section`
  background: ${e=>e.$background};
  padding: ${e=>e.$compact?"0":"3.75rem 0"};
`,_t=s.div`
  margin: 0 auto;
  max-width: 64rem;
`,z=s.h2`
  font-size: 1.875rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1.5rem;
`,M=s.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,H=s.p`
  margin: 0;
  font-size: 1rem;
  line-height: 1.625;
  color: #666666;
`,be=s.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`,je=s(g.div)``,Ie=s(g.div)`
  overflow: hidden;
  border-radius: 0.5rem;
`,re=s(A)`
  width: 100%;
  height: 24rem;

  @media (min-width: 768px) {
    height: 100%;
  }
`,Xt=s(g.div)`
  overflow: hidden;
  border-radius: 0;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
`,Qt=s.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;

  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
`,Ut=s.p`
  margin-top: 0.75rem;
  font-size: 0.875rem;
  font-style: italic;
  color: #8b8b8b;
`,qt=s.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`,$e=s(g.div)`
  overflow: hidden;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover img {
    transform: scale(1.02);
  }
`,Ce=s(A)`
  width: 100%;

  img {
    transition: transform 0.3s ease-out;
  }
`,Kt=s.div`
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
`,Jt=s(g.div)`
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
`,Zt=s(A)`
  width: 100%;

  img {
    transition: transform 0.5s ease-out;
  }
`,ei=s.section`
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
`,ti=s(g.div)`
  display: flex;
  flex-direction: column;
  grid-column: 1;
  grid-row: 1 / span 2;

  @media (max-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
  }
`,ii=s.span`
  font-size: 0.85rem;
  line-height: 2.4;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${e=>e.$active?"#000":"#bbb"};
  font-weight: ${e=>e.$active?700:600};

  @media (max-width: 768px) {
    line-height: 1.6;
  }
`,ri=s.div`
  position: relative;
  grid-column: 2;
  grid-row: 1;
`;s(g.div)`
  position: absolute;
  inset: 0;
  margin: -20px;
  border-radius: 14px;
  z-index: 0;
  background: ${e=>e.$accentColor};
`;const ni=s(g.div)`
  position: relative;
  z-index: 1;
`,ai=s(A)`
  width: 100%;
`,si=s(g.div)`
  grid-column: 2;
  grid-row: 2;
`,oi=s.h3`
  margin: 0 0 0.35rem;
  font-size: 1.1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #555;
`,li=s(M)`
  gap: 0.45rem;
`,ci=s(M)`
  gap: 0.6rem;
`,di=s.section`
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
`,mi=s(g.div)`
  border-radius: 12px;
  overflow: hidden;
`,ui=s(g.div)`
  margin-top: 0;
  border-radius: 12px;
  overflow: hidden;

  @media (max-width: 768px) {
    margin-top: 0;
  }
`,ke=s(A)`
  width: 100%;

  img {
    object-fit: contain;
  }
`,pi=s.p`
  margin: 2rem auto 0;
  max-width: 600px;
  text-align: center;
  font-size: 0.95rem;
  color: #888;
`,gi=s.div`
  margin: 0 auto;
  max-width: 45rem;
`,hi=s(g.div)``,fi=s(H)`
  font-size: clamp(1rem, 1.15vw, 1.15rem);
  line-height: 1.65;
  max-width: 62ch;
  text-wrap: pretty;
`,xi=s.div`
  margin: 0 auto;
  max-width: 800px;
  padding: 5rem 6%;
`,wi=s(g.div)`
  border-left: 3px solid ${e=>e.$accentColor||"#333"};
  padding-left: 2rem;
  margin-left: 0;

  ${e=>e.$accentColor?`
    background: ${e.$accentColor}12;
    padding: 3rem 2.5rem;
    border-radius: 0 12px 12px 0;
  `:""}
`,vi=s.p`
  margin: 0;
  text-align: left;
  font-size: clamp(1.2rem, 2.1vw, 1.55rem);
  font-style: italic;
  line-height: 1.5;
  color: #1a1a1a;
  text-wrap: balance;
`,yi=s.cite`
  display: block;
  margin-top: 1.5rem;
  font-size: 0.85rem;
  font-style: normal;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #999;
`,bi=s.section`
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,ji=s.div`
  padding: 0;
  background: white;

  @media (min-width: 769px) {
    padding: 0;
  }
`,Ii=s.div`
  position: sticky;
  top: 6rem;

  @media (max-width: 768px) {
    position: static;
    top: auto;
  }
`,$i=s.div`
  min-height: 76vh;
  max-height: 92vh;
  height: 84vh;

  @media (max-width: 768px) {
    min-height: 50vh;
    max-height: 70vh;
    height: 56vh;
  }
`,Ci=s(A)`
  height: 100%;
`,ki=s.div`
  margin-top: 1rem;
  padding: 0 1.25rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.25rem;
`,Si=s.span`
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #888;
  padding: 0.25rem 0;
`,Ri=s.span`
  color: #9a9a9a;
  margin: 0 0.25rem;
`,Pi=s.div`
  margin-top: 1rem;
  padding: 0 1.25rem 1.25rem;
`,Ti=s.div`
  padding: 4rem 2rem;
  background: #f0efeb;

  @media (max-width: 768px) {
    padding: 2rem 1.25rem;
  }
`,U=s(g.div)`
  margin-bottom: 3rem;

  &:last-child {
    margin-bottom: 0;
  }
`,Ai=s.p`
  margin: 0;
  border-left: 3px solid currentColor;
  padding-left: 1.5rem;
  text-align: left;
  font-size: 1.5rem;
  font-style: italic;
  line-height: 1.5;
  color: #222;
`,Ei=s.section`
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
`,zi=s(g.div)`
  position: relative;
  width: 100%;
  height: min(92vh, 920px);

  @media (max-width: 768px) {
    height: min(78vh, 620px);
  }
`,Li=s(A)`
  height: 100%;
  border-radius: 0;
`,Vi=s.div`
  position: relative;
  z-index: 2;
  padding: 2.5rem 6% 3.5rem;
  background: white;

  @media (max-width: 768px) {
    padding: 2rem 1.25rem;
  }
`,Hi=s(g.h2)`
  color: #111;
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  line-height: 1.15;
  max-width: 700px;
  margin: 0 0 1rem;
`,Fi=s(g.p)`
  margin: 0;
  color: #222;
  font-size: 1.05rem;
  line-height: 1.7;
  max-width: 540px;
`,Mi=s.section`
  position: relative;
  padding: 3.5rem 6%;
`,Wi=s.div`
  position: relative;
  margin: 0 auto;
  max-width: 1000px;
`;s(g.div)`
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
`;const Bi=s(g.div)`
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
`,Ni=s(A)`
  width: 100%;
`,Oi=s.div`
  position: relative;
  z-index: 1;
  max-width: 600px;
  margin: 2.5rem auto 0;
  text-align: left;
`,Gi=s.section`
  border-top: 1px solid #e5e7eb;
  background: white;
  padding: 4rem 1.5rem 6rem;

  @media (min-width: 768px) {
    padding: 6rem 1.5rem;
  }
`,Di=s.div`
  margin: 0 auto;
  max-width: 64rem;
`,Me=s(g.button)`
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
`,Yi=s.p`
  font-size: 0.875rem;
  letter-spacing: 0.1em;
  color: #a3a3a3;
  text-transform: uppercase;
  margin: 0;
`,_i=s.h3`
  margin-top: 0.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;

  @media (min-width: 768px) {
    margin-top: 0;
    font-size: 1.875rem;
  }
`,Xi=s.div`
  font-size: 1.5rem;
  color: #a3a3a3;
  transition: color 200ms;

  ${Me}:hover & {
    color: #111827;
  }
`,T={duration:.7,ease:[.25,.1,.25,1]},P={duration:.9,ease:[.25,.1,.25,1]},$={once:!0,amount:.2},ne=new Set(["full-width-image","parallax-reveal","image-pair","staggered-pair"]),Qi=new Set(["sticky-split","parallax-reveal"]);function Ui({caseStudy:e,nextProject:i,onNextProject:n,topAction:a}){const o=r=>r?r.split(`

`).filter(l=>l.trim()):[],c=r=>{if(!r)return null;const l=r.trim(),m=/^#([0-9a-fA-F]{3})$/,f=/^#([0-9a-fA-F]{6})$/;if(m.test(l)){const[,j]=l.match(m),v=parseInt(j[0]+j[0],16),C=parseInt(j[1]+j[1],16),k=parseInt(j[2]+j[2],16);return`rgba(${v}, ${C}, ${k}, 0.06)`}if(f.test(l)){const[,j]=l.match(f),v=parseInt(j.slice(0,2),16),C=parseInt(j.slice(2,4),16),k=parseInt(j.slice(4,6),16);return`rgba(${v}, ${C}, ${k}, 0.06)`}return null},d=(r,l)=>{const m=c(r.accentColor);return m||(l?"white":"#f5f5f5")},u=()=>t.jsxs(Ot,{children:[t.jsxs(_,{children:[t.jsx(X,{children:"Client"}),t.jsx(Q,{children:e.meta.client})]}),t.jsxs(_,{children:[t.jsx(X,{children:"Role"}),t.jsx(Q,{children:e.meta.role})]}),t.jsxs(_,{children:[t.jsx(X,{children:"Timeline"}),t.jsx(Q,{children:e.meta.timeline})]}),t.jsxs(_,{children:[t.jsx(X,{children:"Platform"}),t.jsx(Q,{children:e.meta.platform})]})]}),h=r=>t.jsx("div",{children:t.jsxs(be,{children:[t.jsxs(je,{initial:{opacity:0,x:-30},whileInView:{opacity:1,x:0},viewport:$,transition:T,children:[r.heading&&t.jsx(z,{children:r.heading}),t.jsx(M,{children:o(r.body).map((l,m)=>t.jsx(H,{children:l},m))})]}),r.images&&r.images[0]&&t.jsx(Ie,{initial:{opacity:0,x:30},whileInView:{opacity:1,x:0},viewport:$,transition:P,children:t.jsx(re,{src:r.images[0].src,alt:r.images[0].alt,avif:r.images[0].avif,webp:r.images[0].webp,aspectRatio:r.images[0].aspectRatio||"3/2",borderRadius:"8px",objectFit:"cover"})})]})},r.id),p=r=>t.jsx("div",{children:t.jsxs(be,{children:[r.images&&r.images[0]&&t.jsx(Ie,{style:{order:2},initial:{opacity:0,x:-30},whileInView:{opacity:1,x:0},viewport:$,transition:P,children:t.jsx(re,{src:r.images[0].src,alt:r.images[0].alt,avif:r.images[0].avif,webp:r.images[0].webp,aspectRatio:r.images[0].aspectRatio||"3/2",borderRadius:"8px",objectFit:"cover"})}),t.jsxs(je,{style:{order:1},initial:{opacity:0,x:30},whileInView:{opacity:1,x:0},viewport:$,transition:T,children:[r.heading&&t.jsx(z,{children:r.heading}),t.jsx(M,{children:o(r.body).map((l,m)=>t.jsx(H,{children:l},m))})]})]})},r.id),w=r=>t.jsxs("div",{children:[t.jsx(Xt,{initial:{opacity:0,scale:.97},whileInView:{opacity:1,scale:1},viewport:$,transition:P,children:r.images&&r.images[0]&&t.jsx(re,{src:r.images[0].src,alt:r.images[0].alt,avif:r.images[0].avif,webp:r.images[0].webp,aspectRatio:r.images[0].aspectRatio||"16/9",borderRadius:"8px",objectFit:"cover",style:{width:"100%"}})}),(r.caption||r.body)&&t.jsx(Ut,{children:r.caption||r.body})]},r.id),x=r=>t.jsxs("div",{children:[r.heading&&t.jsx(z,{children:r.heading}),t.jsx(Qt,{children:r.images&&r.images.slice(0,2).map((l,m)=>t.jsx($e,{initial:{opacity:0,scale:.97},whileInView:{opacity:1,scale:1},viewport:$,transition:{...P,delay:m*.15},children:t.jsx(Ce,{src:l.src,alt:l.alt,avif:l.avif,webp:l.webp,aspectRatio:l.aspectRatio||"3/2",borderRadius:"0",objectFit:"contain",style:{height:"26rem"}})},m))})]},r.id),y=r=>t.jsxs("div",{children:[r.heading&&t.jsx(z,{children:r.heading}),t.jsx(qt,{children:r.images&&r.images.map((l,m)=>t.jsx($e,{initial:{opacity:0,scale:.95},whileInView:{opacity:1,scale:1},viewport:$,whileHover:{scale:1.02},transition:{...P,delay:m*.1},children:t.jsx(Ce,{src:l.src,alt:l.alt,avif:l.avif,webp:l.webp,aspectRatio:l.aspectRatio||"1/1",borderRadius:"8px",objectFit:"cover"})},m))})]},r.id),R=r=>{const l=r.images||[];return t.jsxs("div",{children:[r.heading&&t.jsx(z,{children:r.heading}),t.jsx(Kt,{$count:l.length,children:l.map((m,f)=>t.jsx(Jt,{$index:f,$count:l.length,initial:{opacity:0,y:20,scale:.97},whileInView:{opacity:1,y:0,scale:1},viewport:{once:!0,amount:.2},transition:{...T,delay:f*.08},children:t.jsx(Zt,{src:m.src,alt:m.alt,avif:m.avif,webp:m.webp,aspectRatio:m.aspectRatio||"4/3",borderRadius:"10px",objectFit:"cover"})},`${m.src}-${f}`))})]},r.id)},L=r=>{const l=r.images?.[0],m=r.labels||[];return t.jsxs(ei,{children:[t.jsx(ti,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},viewport:{once:!0,amount:.2},transition:T,children:m.map((f,j)=>t.jsx(ii,{$active:j===0,children:f},`${f}-${j}`))}),t.jsx(ri,{children:l&&t.jsx(ni,{initial:{opacity:0,y:24},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.2},transition:P,children:t.jsx(ai,{src:l.src,alt:l.alt,avif:l.avif,webp:l.webp,aspectRatio:l.aspectRatio||"4/5",borderRadius:"12px",objectFit:"cover"})})}),t.jsxs(si,{initial:{opacity:0,x:20},whileInView:{opacity:1,x:0},viewport:{once:!0,amount:.2},transition:T,children:[r.heading&&t.jsx(oi,{children:r.heading}),t.jsx(li,{children:o(r.body).map((f,j)=>t.jsx(H,{children:f},j))})]})]},r.id)},E=r=>{const l=r.images||[];if(l.length<=1)return w(r);const m=l[0],f=l[1];return t.jsxs("div",{children:[t.jsxs(di,{children:[t.jsx(mi,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.2},transition:P,children:t.jsx(ke,{src:m.src,alt:m.alt,avif:m.avif,webp:m.webp,aspectRatio:m.aspectRatio||"16/9",borderRadius:"12px",objectFit:"contain"})}),t.jsx(ui,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.2},transition:{...P,delay:.15},children:t.jsx(ke,{src:f.src,alt:f.alt,avif:f.avif,webp:f.webp,aspectRatio:f.aspectRatio||"16/9",borderRadius:"12px",objectFit:"contain",objectPosition:"top center"})})]}),r.body&&t.jsx(pi,{children:r.body})]},r.id)},b=r=>t.jsx("div",{children:t.jsx(gi,{children:t.jsxs(hi,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:$,transition:T,children:[r.heading&&t.jsx(z,{style:{textAlign:"left"},children:r.heading}),t.jsx(M,{style:{alignItems:"flex-start"},children:o(r.body).map((l,m)=>t.jsx(fi,{style:{textAlign:"left"},children:l},m))})]})})},r.id),I=r=>t.jsx("div",{children:t.jsx(xi,{children:t.jsxs(wi,{$accentColor:r.accentColor,initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:$,transition:T,children:[t.jsx(vi,{children:r.body}),r.heading&&t.jsx(yi,{children:r.heading})]})})},r.id),O=r=>t.jsxs("div",{children:[r.heading&&t.jsx(z,{children:r.heading}),r.images&&r.images.length>0&&t.jsx(g.div,{initial:{opacity:0,scale:.97},whileInView:{opacity:1,scale:1},viewport:$,transition:P,children:t.jsx(ie,{images:r.images})})]},r.id),J=r=>{const l=r.stickyContent?.image||r.images?.[0],m=r.stickyContent?.tags||[],f=r.stickyContent?.collateralImages||[],j=r.scrollContent?.blocks||[];return t.jsxs(bi,{children:[t.jsx(ji,{children:t.jsxs(Ii,{children:[l&&t.jsx($i,{children:t.jsx(Ci,{src:l.src,alt:l.alt,avif:l.avif,webp:l.webp,borderRadius:"0",objectFit:"cover",imageScale:1.1})}),m.length>0&&t.jsx(ki,{children:m.map((v,C)=>t.jsx(g.div,{initial:{opacity:0,y:8},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.2},transition:{duration:.35,delay:C*.04},children:t.jsxs(Si,{children:[v,C<m.length-1&&t.jsx(Ri,{children:"•"})]})},`${v}-${C}`))}),f.length>0&&t.jsx(Pi,{children:t.jsx(g.div,{initial:{opacity:0,y:12},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.2},transition:{duration:.45},children:t.jsx(ie,{images:f,autoPlay:!0,intervalMs:2800})})})]})}),t.jsx(Ti,{children:j.map((v,C)=>{if(v.type==="text")return t.jsxs(U,{initial:{opacity:0,x:20},whileInView:{opacity:1,x:0},viewport:$,transition:T,children:[v.heading&&t.jsx(z,{children:v.heading}),t.jsx(ci,{children:o(v.body).map((k,Z)=>t.jsx(H,{children:k},Z))})]},`${r.id}-text-${C}`);if(v.type==="image"){const k=v.images?.[0];return k?t.jsx(U,{initial:{opacity:0,scale:.97},whileInView:{opacity:1,scale:1},viewport:$,transition:P,children:t.jsx(A,{src:k.src,alt:k.alt,avif:k.avif,webp:k.webp,aspectRatio:k.aspectRatio||"3/2",borderRadius:"8px",objectFit:"cover"})},`${r.id}-image-${C}`):null}return v.type==="carousel"?t.jsx(U,{initial:{opacity:0,scale:.97},whileInView:{opacity:1,scale:1},viewport:$,transition:P,children:v.images&&v.images.length>0&&t.jsx(ie,{images:v.images,showControls:!1,showDots:!1})},`${r.id}-carousel-${C}`):v.type==="quote"?t.jsx(U,{initial:{opacity:0,x:30},whileInView:{opacity:1,x:0},viewport:$,transition:T,children:t.jsx(Ai,{children:v.body})},`${r.id}-quote-${C}`):null})})]},r.id)},G=r=>{const l=r.images?.[0];return l?t.jsxs(Ei,{children:[t.jsx(zi,{children:t.jsx(Li,{src:l.src,alt:l.alt,avif:l.avif,webp:l.webp,parallaxSpeed:r.parallaxSpeed??.4,objectFit:"cover"})}),t.jsxs(Vi,{children:[r.heading&&t.jsx(Hi,{initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:$,transition:T,children:r.heading}),r.body&&t.jsx(Fi,{initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:$,transition:{...T,delay:.15},children:r.body})]})]},r.id):null},We=r=>{const l=r.images?.[0];return l?t.jsx(Mi,{children:t.jsxs(Wi,{children:[t.jsx(Bi,{initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:$,transition:P,children:t.jsx(Ni,{src:l.src,alt:l.alt,avif:l.avif,webp:l.webp,aspectRatio:l.aspectRatio||"3/2",borderRadius:"12px",objectFit:"cover"})}),(r.heading||r.body)&&t.jsxs(Oi,{children:[r.heading&&t.jsx(z,{children:r.heading}),r.body&&t.jsx(M,{style:{alignItems:"flex-start"},children:o(r.body).map((m,f)=>t.jsx(H,{style:{textAlign:"left"},children:m},f))})]})]})},r.id):null},oe=r=>{switch(r.layout){case"text-left-image-right":return h(r);case"text-right-image-left":return p(r);case"full-width-image":return w(r);case"image-pair":return x(r);case"gallery-grid":return y(r);case"asymmetric-mosaic":return R(r);case"three-column-feature":return L(r);case"staggered-pair":return E(r);case"text-only":return b(r);case"quote":return I(r);case"image-carousel":return O(r);case"parallax-reveal":return G(r);case"image-on-color-block":return We(r);case"sticky-split":return J(r);default:return null}};return t.jsxs(Ht,{children:[t.jsxs(Ft,{children:[t.jsxs(Mt,{children:[a&&t.jsx(Wt,{children:a}),t.jsx(u,{}),t.jsx(Gt,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.2,ease:[.25,.1,.25,1]},children:e.heroHeadline})]}),t.jsx(Bt,{children:t.jsx(Nt,{src:e.coverImage.src,alt:e.coverImage.alt,avif:e.coverImage.avif,webp:e.coverImage.webp,aspectRatio:e.coverImage.aspectRatio||"16/9",borderRadius:"0",objectFit:"cover",imageScale:1.08})})]}),t.jsx(Dt,{children:e.sections.map((r,l)=>{const m=e.sections[l-1],f=e.sections[l+1],j=Qi.has(r.layout),v=ne.has(r.layout),C=m?ne.has(m.layout):!1,k=f?ne.has(f.layout):!1,Z=v&&(C||k);return j?t.jsx("div",{children:oe(r)},r.id):t.jsx(Yt,{$background:d(r,l%2===0),$compact:Z,children:t.jsx(_t,{children:oe(r)})},r.id)})}),i&&t.jsx(Gi,{children:t.jsx(Di,{children:t.jsxs(Me,{onClick:()=>n?.(i.slug),whileHover:{x:8},transition:{duration:.3},children:[t.jsxs("div",{children:[t.jsx(Yi,{children:"Next Project"}),t.jsx(_i,{children:i.title})]}),t.jsx(Xi,{children:"→"})]})})})]})}const qi=s(g.div)`
  position: relative;
`;function cr(){const e=Ke[0];return S.useLayoutEffect(()=>{window.scrollTo(0,0)},[]),t.jsxs(qi,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},children:[t.jsx(Ui,{caseStudy:e}),t.jsx(qe,{})]})}export{cr as default};
