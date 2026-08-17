System.register(["./three-legacy-Dbu1oaxp.js","./vendor-legacy-lMxcQOgj.js","./metadata-legacy-CnNiK46o.js","./index-legacy-DoTmSiw_.js","./CaseStudyPrimitives-legacy-m2YLdA5E.js","./PortfolioCardsSection-legacy-BlIGlt-w.js"],function(e,t){"use strict";var i,r,n,a,o,s,l,A,d,m,c,h,p,g,f,u,w,b,x,v,y,k,j,C,B,z,E,M,L,W,F,R,Z,U,D,T,I;return{setters:[e=>{i=e.j,r=e._},e=>{n=e.b,a=e.c,o=e.l,s=e.L},e=>{l=e.E,A=e.s,d=e.p,m=e.A},e=>{c=e.f,h=e.c,p=e.s,g=e.a,f=e.p,u=e.v,w=e.i,b=e.b,x=e.d,v=e.e,y=e.n,k=e.r,j=e.g,C=e.u,B=e.h,z=e.m,E=e.j,M=e.k,L=e.l,W=e.F,F=e.o,R=e.S,Z=e.E},e=>{U=e.F,D=e.T,T=e.a},e=>{I=e.P}],execute:function(){function X(e,t){let i;const r=()=>{const{currentTime:r}=t,n=(null===r?0:r.value)/100;i!==n&&e(n),i=n};return c.preUpdate(r,!0),()=>h(r)}function Y(e){return"undefined"!=typeof window&&(e?p():g())}const S={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function Q(e,t,i,r){const n=i[t],{length:a,position:o}=S[t],s=n.current,l=i.time;n.current=Math.abs(e[`scroll${o}`]),n.scrollLength=e[`scroll${a}`]-e[`client${a}`],n.offset.length=0,n.offset[0]=0,n.offset[1]=n.scrollLength,n.progress=f(0,n.scrollLength,n.current);const A=r-l;n.velocity=A>50?0:u(n.current-s,A)}const q={start:0,center:.5,end:1};function G(e,t,i=0){let r=0;if(e in q&&(e=q[e]),"string"==typeof e){const t=parseFloat(e);e.endsWith("px")?r=t:e.endsWith("%")?e=t/100:e.endsWith("vw")?r=t/100*document.documentElement.clientWidth:e.endsWith("vh")?r=t/100*document.documentElement.clientHeight:e=t}return"number"==typeof e&&(r=t*e),i+r}const P=[0,0];function N(e,t,i,r){let n=Array.isArray(e)?e:P,a=0,o=0;return"number"==typeof e?n=[e,e]:"string"==typeof e&&(n=(e=e.trim()).includes(" ")?e.split(" "):[e,q[e]?e:"0"]),a=G(n[0],i,r),o=G(n[1],t),a-o}const J={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},O={x:0,y:0};function H(e,t,i){const{offset:r=J.All}=i,{target:n=e,axis:a="y"}=i,o="y"===a?"height":"width",s=n!==e?function(e,t){const i={x:0,y:0};let r=e;for(;r&&r!==t;)if(w(r))i.x+=r.offsetLeft,i.y+=r.offsetTop,r=r.offsetParent;else if("svg"===r.tagName){const e=r.getBoundingClientRect();r=r.parentElement;const t=r.getBoundingClientRect();i.x+=e.left-t.left,i.y+=e.top-t.top}else{if(!(r instanceof SVGGraphicsElement))break;{const{x:e,y:t}=r.getBBox();i.x+=e,i.y+=t;let n=null,a=r.parentNode;for(;!n;)"svg"===a.tagName&&(n=a),a=r.parentNode;r=n}}return i}(n,e):O,l=n===e?{width:e.scrollWidth,height:e.scrollHeight}:function(e){return"getBBox"in e&&"svg"!==e.tagName?e.getBBox():{width:e.clientWidth,height:e.clientHeight}}(n),A={width:e.clientWidth,height:e.clientHeight};t[a].offset.length=0;let d=!t[a].interpolate;const m=r.length;for(let c=0;c<m;c++){const e=N(r[c],A[o],l[o],s[a]);d||e===t[a].interpolatorOffsets[c]||(d=!0),t[a].offset[c]=e}d&&(t[a].interpolate=b(t[a].offset,x(r),{clamp:!1}),t[a].interpolatorOffsets=[...t[a].offset]),t[a].progress=v(0,1,t[a].interpolate(t[a].current))}function K(e,t,i,r={}){return{measure:t=>{!function(e,t=e,i){if(i.x.targetOffset=0,i.y.targetOffset=0,t!==e){let r=t;for(;r&&r!==e;)i.x.targetOffset+=r.offsetLeft,i.y.targetOffset+=r.offsetTop,r=r.offsetParent}i.x.targetLength=t===e?t.scrollWidth:t.clientWidth,i.y.targetLength=t===e?t.scrollHeight:t.clientHeight,i.x.containerLength=e.clientWidth,i.y.containerLength=e.clientHeight}(e,r.target,i),function(e,t,i){Q(e,"x",t,i),Q(e,"y",t,i),t.time=i}(e,i,t),(r.offset||r.target)&&H(e,i,r)},notify:()=>t(i)}}const V=new WeakMap,$=new WeakMap,_=new WeakMap,ee=new WeakMap,te=new WeakMap,ie=e=>e===document.scrollingElement?window:e;function re(e,{container:t=document.scrollingElement,trackContentSize:i=!1,...r}={}){if(!t)return y;let n=_.get(t);n||(n=new Set,_.set(t,n));const a=K(t,e,{time:0,x:{current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0},y:{current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}},r);if(n.add(a),!V.has(t)){const e=()=>{for(const e of n)e.measure(j.timestamp);c.preUpdate(i)},i=()=>{for(const e of n)e.notify()},r=()=>c.read(e);V.set(t,r);const a=ie(t);window.addEventListener("resize",r),t!==document.documentElement&&$.set(t,k(t,r)),a.addEventListener("scroll",r),r()}if(i&&!te.has(t)){const e=V.get(t),i={width:t.scrollWidth,height:t.scrollHeight};ee.set(t,i);const r=()=>{const r=t.scrollWidth,n=t.scrollHeight;i.width===r&&i.height===n||(e(),i.width=r,i.height=n)},n=c.read(r,!0);te.set(t,n)}const o=V.get(t);return c.read(o,!1,!0),()=>{h(o);const e=_.get(t);if(!e)return;if(e.delete(a),e.size)return;const i=V.get(t);var r;V.delete(t),i&&(ie(t).removeEventListener("scroll",i),null===(r=$.get(t))||void 0===r||r(),window.removeEventListener("resize",i));const n=te.get(t);n&&(h(n),te.delete(t)),ee.delete(t)}}const ne=[[J.Enter,"entry"],[J.Exit,"exit"],[J.Any,"cover"],[J.All,"contain"]],ae={start:0,end:1};function oe(e){const t=e.trim().split(/\s+/);if(2!==t.length)return;const i=ae[t[0]],r=ae[t[1]];return void 0!==i&&void 0!==r?[i,r]:void 0}function se(e,t){const i=function(e){if(2!==e.length)return;const t=[];for(const i of e)if(Array.isArray(i))t.push(i);else{if("string"!=typeof i)return;{const e=oe(i);if(!e)return;t.push(e)}}return t}(e);if(!i)return!1;for(let r=0;r<2;r++){const e=i[r],n=t[r];if(e[0]!==n[0]||e[1]!==n[1])return!1}return!0}function le(e){if(!e)return{rangeStart:"contain 0%",rangeEnd:"contain 100%"};for(const[t,i]of ne)if(se(e,t))return{rangeStart:`${i} 0%`,rangeEnd:`${i} 100%`}}const Ae=new Map;function de(e){const t={value:0},i=re(i=>{t.value=100*i[e.axis].progress},e);return{currentTime:t,cancel:i}}function me({source:e,container:t,...i}){var r,n;const{axis:a}=i;e&&(t=e);let o=Ae.get(t);o||(o=new Map,Ae.set(t,o));const s=null!==(r=i.target)&&void 0!==r?r:"self";let l=o.get(s);l||(l={},o.set(s,l));const A=a+(null!==(n=i.offset)&&void 0!==n?n:[]).join(",");if(!l[A])if(i.target&&Y(i.target)){const e=le(i.offset);l[A]=e?new ViewTimeline({subject:i.target,axis:a}):de({container:t,...i})}else Y()?l[A]=new ScrollTimeline({source:t,axis:a}):l[A]=de({container:t,...i});return l[A]}function ce(e,{axis:t="y",container:i=document.scrollingElement,...r}={}){if(!i)return y;const n={axis:t,container:i,...r};return"function"==typeof e?function(e,t){return function(e){return 2===e.length}(e)||function(e){return e&&(e.target||e.offset)}(t)?re(i=>{e(i[t.axis].progress,i)},t):X(e,me(t))}(e,n):function(e,t){const i=me(t),r=t.target?le(t.offset):void 0,n=t.target?Y(t.target)&&!!r:Y();return e.attachTimeline({timeline:n?i:void 0,...r&&n&&{rangeStart:r.rangeStart,rangeEnd:r.rangeEnd},observe:e=>(e.pause(),X(t=>{e.time=e.iterationDuration*t},i))})}(e,n)}const he=()=>({scrollX:M(0),scrollY:M(0),scrollXProgress:M(0),scrollYProgress:M(0)}),pe=e=>!!e&&!e.current;function ge(e,t,i,r){return{factory:n=>{let a;const o=()=>{pe(i)||pe(r)?z.read(o):a=ce(n,{...t,axis:e,container:(null==i?void 0:i.current)||void 0,target:(null==r?void 0:r.current)||void 0})};return z.read(o),()=>{var e;E(o),null===(e=a)||void 0===e||e()}},times:[0,1],keyframes:[0,1],ease:e=>e,duration:1}}function fe({container:e,target:t,...i}={}){const r=C(he);(function(e,t){return"undefined"!=typeof window&&(e?p()&&!!le(t):g())})(t,i.offset)&&(r.scrollXProgress.accelerate=ge("x",i,e,t),r.scrollYProgress.accelerate=ge("y",i,e,t));const a=n.useRef(null),o=n.useRef(!1),s=n.useCallback(()=>(a.current=ce((e,{x:t,y:i})=>{r.scrollX.set(t.current),r.scrollXProgress.set(t.progress),r.scrollY.set(i.current),r.scrollYProgress.set(i.progress)},{...i,container:(null==e?void 0:e.current)||void 0,target:(null==t?void 0:t.current)||void 0}),()=>{var e;null===(e=a.current)||void 0===e||e.call(a)}),[e,t,JSON.stringify(i.offset)]);return B(()=>(o.current=!1,pe(e)||pe(t)?void(o.current=!0):s()),[s]),n.useEffect(()=>{if(!o.current)return;let i;const r=()=>{const r=pe(e),n=pe(t);r||n||(i=s())};return z.read(r),()=>{var e;E(r),null===(e=i)||void 0===e||e()}},[s]),r}const ue=""+new URL("Me-BEhJ50qd.jpeg",t.meta.url).href,we=""+new URL("Me-C1cwp5zy.avif",t.meta.url).href,be=""+new URL("Me-Rnuwi3im.webp",t.meta.url).href,xe=""+new URL("Me-mobile-600-WLZHCfmO.jpg",t.meta.url).href,ve=""+new URL("Me-mobile-900-BN16uvre.jpg",t.meta.url).href,ye=""+new URL("Me-mobile-600-BSb-mFgg.avif",t.meta.url).href,ke=""+new URL("Me-mobile-900-CxHqnoy3.avif",t.meta.url).href,je=""+new URL("Me-mobile-600-DPwCrVdf.webp",t.meta.url).href,Ce=""+new URL("Me-mobile-900-B5uf1C9A.webp",t.meta.url).href,Be=""+new URL("hangingquilts-CSgyMA7c.jpg",t.meta.url).href,ze=""+new URL("hangingquilts-4VrGTXBN.avif",t.meta.url).href,Ee=""+new URL("hangingquilts-DcA0AW0j.webp",t.meta.url).href,Me=""+new URL("hangingquilts-mobile-600-C3soRhp2.jpg",t.meta.url).href,Le=""+new URL("hangingquilts-mobile-600-Bkobji0e.avif",t.meta.url).href,We=""+new URL("hangingquilts-mobile-600-DMtoBjVZ.webp",t.meta.url).href,Fe=({desktop:e,desktopAvif:t,desktopWebp:r,mobile600:n,mobile900:a,mobile600Avif:o,mobile900Avif:s,mobile600Webp:l,mobile900Webp:A,alt:d,...m})=>i.jsxs("picture",{children:[o&&i.jsx("source",{srcSet:o,type:"image/avif",media:"(max-width: 650px)"}),s&&i.jsx("source",{srcSet:s,type:"image/avif",media:"(max-width: 900px)"}),t&&i.jsx("source",{srcSet:t,type:"image/avif"}),l&&i.jsx("source",{srcSet:l,type:"image/webp",media:"(max-width: 650px)"}),A&&i.jsx("source",{srcSet:A,type:"image/webp",media:"(max-width: 900px)"}),r&&i.jsx("source",{srcSet:r,type:"image/webp"}),n&&i.jsx("source",{srcSet:n,type:"image/jpeg",media:"(max-width: 650px)"}),a&&i.jsx("source",{srcSet:a,type:"image/jpeg",media:"(max-width: 900px)"}),i.jsx("img",{src:e,alt:d,style:{width:"100%",height:"auto",objectFit:"cover"},loading:"lazy",...m})]}),Re=""+new URL("Card1-3--mHPQ8.webp",t.meta.url).href,Ze=""+new URL("Card1-mobile-600-BkfbVUrr.webp",t.meta.url).href,Ue=""+new URL("Card1-mobile-900-C8Xtj9x1.webp",t.meta.url).href,De=""+new URL("Card2-DkNuGfII.webp",t.meta.url).href,Te=""+new URL("Card2-P4YhsQMd.avif",t.meta.url).href,Ie=""+new URL("Card2-mobile-600-BjqHkkHr.avif",t.meta.url).href,Xe=""+new URL("Card2-mobile-900-DQVeDyME.avif",t.meta.url).href,Ye=""+new URL("Card2-mobile-600-W6kg1FcH.webp",t.meta.url).href,Se=""+new URL("Card2-mobile-900-dl6vU5Aj.webp",t.meta.url).href,Qe=""+new URL("Card3-DFuv6FGk.webp",t.meta.url).href,qe=""+new URL("Card3-B-BNDMwV.avif",t.meta.url).href,Ge=""+new URL("Card3-mobile-600-DFcir8SO.avif",t.meta.url).href,Pe=""+new URL("Card3-mobile-900-Gk96WMup.avif",t.meta.url).href,Ne=""+new URL("Card3-mobile-600-D-2quC3k.webp",t.meta.url).href,Je=""+new URL("Card3-mobile-900-CcLct3mj.webp",t.meta.url).href,Oe=""+new URL("Card4-1NFXU0cZ.webp",t.meta.url).href,He=""+new URL("Card4-Bk11GJwc.avif",t.meta.url).href,Ke=""+new URL("Card4-mobile-600-KpZA3K_X.avif",t.meta.url).href,Ve=""+new URL("Card4-mobile-900-CGoJlkwG.avif",t.meta.url).href,$e=""+new URL("Card4-mobile-600-D0VLHbqc.webp",t.meta.url).href,_e=""+new URL("Card4-mobile-900-VCNqPyZD.webp",t.meta.url).href,et=""+new URL("Card5-BWd32u-m.webp",t.meta.url).href,tt=""+new URL("Card5-PjD3mgQy.avif",t.meta.url).href,it=""+new URL("Card6-Dy8ZNgWu.png",t.meta.url).href,rt="data:image/avif;base64,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",nt=""+new URL("Card6-3nvBusir.webp",t.meta.url).href,at=e("w",""+new URL("BlackTurtleneck-popart-01-B7xWLAvK.jpg",t.meta.url).href),ot=""+new URL("BlackTurtleneck-popart-01-BA8FMdCR.avif",t.meta.url).href,st=""+new URL("BlackTurtleneck-popart-01-DwuDl_Fi.webp",t.meta.url).href,lt=""+new URL("BlackTurtleneck-popart-01-mobile-900-DGvdBl1D.jpg",t.meta.url).href,At=""+new URL("BlackTurtleneck-popart-01-mobile-900-obcvLR-l.avif",t.meta.url).href,dt=""+new URL("BlackTurtleneck-popart-01-mobile-900-h5KDvAVg.webp",t.meta.url).href,mt=[{eyebrow:"How I work",title:"My Process",body:"Structured enough to scale, flexible enough to stay curious. Built to turn ambiguity into focused solutions.",range:[-.01,0,.02,.141]},{eyebrow:"01/04",title:"Discovery",body:"I start by getting into the client's world: competitive context, stakeholder kickoffs, and a FigJam brainstorm to pull everyone's perspective into one place. I also dig into past and existing research on the topic, then map pain points from both the business side and the user's side so we are solving the right problem before design starts.",range:[.168,.194,.274,.318]},{eyebrow:"02/04",title:"Ideation",body:"This is where solutions start taking shape: sketches, site maps, user flows, personas. I work through a lot of it solo first, then bring it to the team early for feedback, because the best ideas get sharper in the room. I also like building out the story behind a flow, not just screen A to B to C to D. A narrative helps a user journey land in a way a static screen sequence can't.",range:[.344,.371,.45,.494]},{eyebrow:"03/04",title:"Design & Research",body:"From here, ideas become real: low, medium, and high-fidelity mockups, then interactive prototypes to test the design. I validate the work with quantitative and qualitative research, including A/B testing on early screens and interview-style studies on platforms like UserTesting, so decisions are grounded in real behavior, not assumptions. Whether it's a Figma prototype or a working build, the goal is the same: get something real in front of users fast.",range:[.521,.547,.615,.655]},{eyebrow:"04/04",title:"Testing & Handoff",body:"I pressure-test the work with usability sessions, edge-case mapping, accessibility checks, and design-peer reviews to make sure every state holds up. Then I hand off with redlines, specs, and token-based guidance in Figma Dev Mode, staying close with engineers through check-ins and kickoff alignment with PMs and stakeholders.",range:[.675,.705,.775,.815]}],ct=[{question:"What is your design process?",answer:"Discovery and research, ideation, design, testing, and developer handoff, but it’s never a straight line. I loop back to earlier stages whenever new feedback or research calls for it."},{question:"What tools and software do you use for your UX design?",answer:"Figma is home base, alongside FigJam for workshops and brainstorms. I’ve also started building with Figma’s MCP and Claude Code to turn designs into working prototypes faster. AI is changing how quickly ideas can go from concept to something clickable."},{question:"Do you have experience with design systems?",answer:"Yes. At Microsoft I work across multiple design systems, including Bing, Copilot, Windows, and Outlook, each with its own patterns, tokens, and constraints. That’s taught me a lot about designing for consistency at scale without losing what makes each product distinct."},{question:"Have you worked cross-functionally?",answer:"Constantly. I work closely with engineers on edge cases and technical feasibility, PMs on scope and priorities, and researchers on testing, plus agency partners like Publicis Groupe, Prairie & Forge, and Varfaj Partners on brand and product work. Good design happens in the overlap between teams, not in isolation."},{question:"How do you measure the success of your UX design?",answer:"A mix of things: usability testing results, whether the design holds up across all user states and accessibility needs, and feedback from both users and design peers. If the experience feels intuitive and the team can build it without friction, that’s success."}],ht=a.section`
  width: 100%;
  background: #fff;
  color: #111;
  font-family: var(--font-body);
`,pt=a.div`
  height: 650vh;
  background: #fff;
`,gt=a.div`
  position: sticky;
  top: 0;
  display: grid;
  width: 100%;
  height: 100vh;
  height: 100dvh;
  overflow: hidden;
  isolation: isolate;
`,ft=a.div`
  position: absolute;
  bottom: clamp(1.25rem, 4vw, 3rem);
  left: 50%;
  z-index: 2;
  width: min(calc(100% - 3rem), 61rem);
  height: 1px;
  transform: translateX(-50%);
  background: currentColor;

  @media (max-width: 480px) {
    width: calc(100% - 2.5rem);
  }
`,ut=a.div`
  width: 100%;
  height: 1px;
  background: currentColor;
  transform-origin: left center;
`,wt=o`
  0%, 100% { transform: translateY(-1px); }
  50% { transform: translateY(3px); }
`,bt=a.div`
  position: absolute;
  left: 50%;
  bottom: clamp(2.75rem, 6vw, 4.5rem);
  z-index: 3;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.45rem 0.7rem 0.45rem 0.55rem;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 999px;
  background: rgba(15, 15, 15, 0.78);
  color: #fff;
  font-family: var(--font-mono);
  font-size: 0.78rem;
  letter-spacing: 0.04em;
  line-height: 1;
  transform: translateX(-50%);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  pointer-events: none;

  svg {
    width: 1rem;
    height: 1rem;
    animation: ${wt} 1.3s ease-in-out infinite;
  }

  @media (prefers-reduced-motion: reduce) {
    svg {
      animation: none;
    }
  }
`,xt=a.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 64rem;
  margin: 0 auto;
  padding: clamp(5rem, 11vh, 8rem) 1.5rem;
  box-sizing: border-box;
  pointer-events: none;

  @media (max-width: 480px) {
    padding-right: 1.25rem;
    padding-left: 1.25rem;
  }
`,vt=a.div`
  width: min(100%, 56rem);
`,yt=a.p`
  margin: 0 0 clamp(1.25rem, 3vh, 2rem);
  font-family: var(--font-mono);
  font-size: 0.78rem;
  font-weight: 600;
  line-height: 1;
  letter-spacing: 0.14em;
  text-transform: uppercase;
`,kt=a.h2`
  margin: 0 0 clamp(1.25rem, 3vh, 2rem);
  max-width: 14ch;
  font-family: var(--font-display);
  font-size: clamp(2.75rem, 8vw, 7.5rem);
  font-weight: 500;
  line-height: 0.96;
  letter-spacing: 0;
`,jt=a.p`
  margin: 0;
  max-width: 60rem;
  font-size: var(--type-narrative-size);
  font-weight: 400;
  line-height: var(--type-narrative-leading);
`,Ct=a.section`
  position: relative;
  z-index: 1;
  background: transparent;
  color: #111;
  margin-top: -150vh;
  padding: clamp(6rem, 14vh, 10rem) 0;
`,Bt=a.div`
  width: 100%;
  max-width: 64rem;
  margin: 0 auto;
  padding: 0 1.5rem;
  box-sizing: border-box;

  @media (max-width: 480px) {
    padding: 0 1.25rem;
  }
`,zt=a.h2`
  margin: 0 0 clamp(3rem, 8vh, 5rem);
  font-family: var(--font-display);
  font-size: clamp(2.75rem, 7vw, 6rem);
  font-weight: 500;
  line-height: 1;
  letter-spacing: 0;
`,Et=a.div`
  border-top: 1px solid #b7b7b7;
`,Mt=a.details`
  border-bottom: 1px solid #b7b7b7;

  &[open] svg {
    transform: rotate(45deg);
  }
`,Lt=a.summary`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 2rem;
  align-items: center;
  gap: 1.5rem;
  padding: clamp(1.5rem, 3vw, 2.25rem) 0;
  font-size: clamp(1.1rem, 2.2vw, 1.5rem);
  font-weight: 500;
  line-height: 1.3;
  cursor: pointer;
  list-style: none;

  &::-webkit-details-marker {
    display: none;
  }

  &:focus-visible {
    outline: 2px solid #111;
    outline-offset: 6px;
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
    justify-self: end;
    transition: transform 240ms ease;
  }
`,Wt=a.p`
  max-width: 48rem;
  margin: 0;
  padding: 0 3.5rem clamp(1.75rem, 4vw, 2.75rem) 0;
  color: #494949;
  font-size: var(--type-narrative-size);
  line-height: var(--type-narrative-leading);
`,Ft=(e,t,i)=>{if(e<=t[0])return i[0];if(e>=t[t.length-1])return i[i.length-1];const r=t.findIndex(t=>t>=e)-1,n=(e-t[r])/(t[r+1]-t[r]);return i[r]+(i[r+1]-i[r])*n},Rt=({step:e,progress:t,reduceMotion:r})=>{const n=Ft(t,e.range,[0,1,1,0]),a=r?0:Ft(t,e.range,[72,0,0,-72]),o=r?1:Ft(t,e.range,[.96,1,1,1.025]),s=r?0:Ft(t,e.range,[14,0,0,14]);return i.jsx(xt,{style:{opacity:n,filter:`blur(${s}px)`,transform:`translateY(${a}px) scale(${o})`},children:i.jsxs(vt,{children:[i.jsx(yt,{children:e.eyebrow}),i.jsx(kt,{children:e.title}),i.jsx(jt,{children:e.body})]})})},Zt=()=>{const e=n.useRef(null),[t,r]=n.useState(0),a=L(),{scrollYProgress:o}=fe({target:e,offset:["start start","end end"]});var s,l,A;s=o,l="change",A=r,n.useInsertionEffect(()=>s.on(l,A),[s,l,A]);const d=Ft(t,[0,.78,.88],[0,0,1]),m=Ft(t,[0,.74,.755],[.2,.2,0]),c=Ft(t,[0,.74,.755],[1,1,0]),h=Math.round(255*d),p=Math.round(255-238*d);return i.jsxs(ht,{children:[i.jsx(pt,{ref:e,children:i.jsxs(gt,{style:{backgroundColor:`rgb(${h}, ${h}, ${h})`,color:`rgb(${p}, ${p}, ${p})`},children:[mt.map(e=>i.jsx(Rt,{step:e,progress:t,reduceMotion:a},e.title)),i.jsx(ft,{"aria-hidden":"true",style:{opacity:m},children:i.jsx(ut,{style:{transform:`scaleX(${t})`}})}),i.jsxs(bt,{"aria-hidden":"true",style:{opacity:c},children:[i.jsx(W,{}),i.jsx("span",{children:"Scroll"})]})]})}),i.jsx(Ct,{"aria-labelledby":"faq-heading",children:i.jsxs(Bt,{children:[i.jsx(zt,{id:"faq-heading",children:"Frequently asked questions"}),i.jsx(Et,{children:ct.map(e=>i.jsxs(Mt,{children:[i.jsxs(Lt,{"data-cursor":"link",children:[i.jsx("span",{children:e.question}),i.jsx(F,{"aria-hidden":"true"})]}),i.jsx(Wt,{children:e.answer})]},e.question))})]})})]})},Ut=n.lazy(()=>r(()=>t.import("./three-legacy-BabL5_8v.js"),void 0,t.meta.url)),Dt=({desktop:e,desktopAvif:t,desktopWebp:r,mobile600:n,mobile900:a,mobile600Avif:o,mobile900Avif:s,mobile600Webp:l,mobile900Webp:A,alt:d})=>i.jsxs("picture",{children:[i.jsx("source",{srcSet:o,type:"image/avif",media:"(max-width: 650px)"}),i.jsx("source",{srcSet:s,type:"image/avif",media:"(max-width: 900px)"}),i.jsx("source",{srcSet:t,type:"image/avif"}),i.jsx("source",{srcSet:l,type:"image/webp",media:"(max-width: 650px)"}),i.jsx("source",{srcSet:A,type:"image/webp",media:"(max-width: 900px)"}),i.jsx("source",{srcSet:r,type:"image/webp"}),i.jsx("source",{srcSet:n,type:"image/jpeg",media:"(max-width: 650px)"}),i.jsx("source",{srcSet:a,type:"image/jpeg",media:"(max-width: 900px)"}),i.jsx("img",{src:e,alt:d,style:{width:"100%",height:"100%",objectFit:"cover"},loading:"lazy"})]}),Tt=a(U)`
  @media (max-width: 850px) {
    padding-inline: 1rem;
  }
`,It=a(m)`
  padding-block: clamp(5rem, 8vh, 7rem);

  @media (max-width: 1000px) {
    padding-block: clamp(3rem, 7vh, 4rem);
  }
`,Xt=a(D)`
  @media (max-width: 850px) {
    width: 100%;
    max-width: none;
  }
`,Yt=a(T)`
  font-family: var(--font-display);
  font-size: var(--type-standalone-size);
  line-height: var(--type-standalone-leading);
  width: 100%;
  max-width: none;

  @media (max-width: 850px) {
    width: 100%;
    max-width: none;
  }
`,St=a.a`
  color: var(--text-muted, #5d5d5d);
  text-decoration: underline;
  text-decoration-thickness: 0.75px;
  text-underline-offset: 0.2em;
`,Qt=o`
  0% { transform: translate(-50%, -60%) rotate(0deg); }
  20% { transform: translate(-20%, -80%) rotate(90deg); }
  40% { transform: translate(10%, -40%) rotate(180deg); }
  60% { transform: translate(-40%, -20%) rotate(270deg); }
  80% { transform: translate(-70%, -50%) rotate(320deg); }
  100% { transform: translate(-50%, -60%) rotate(360deg); }
`,qt=o`
  0% { transform: translate(60%, -50%) rotate(0deg); }
  20% { transform: translate(80%, -20%) rotate(90deg); }
  40% { transform: translate(40%, -70%) rotate(180deg); }
  60% { transform: translate(20%, -30%) rotate(270deg); }
  80% { transform: translate(70%, -60%) rotate(320deg); }
  100% { transform: translate(60%, -50%) rotate(360deg); }
`,Gt=o`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(6px); }
`,Pt=a.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3vw;
  width: 100vw;
  height: 100vh;
  height: 100dvh; /* avoid Safari URL bar jumping the hero height */
  background-color: ${e=>e.theme.backgroundColor};
  position: relative;
  overflow: hidden;
  padding: 0 5vw;
  box-sizing: border-box;

  &::before, &::after {
    content: '';
    position: absolute;
    width: 40vw;
    height: 40vw;
    border-radius: 50%;
    filter: blur(200px);
    z-index: 0;
  }

  &::before {
    top: 20%;
    left: 10%;
    background: ${e=>e.theme.heroSpotlightLeft};
    animation: ${Qt} 35s ease-in-out infinite;
  }

  &::after {
    top: 40%;
    left: 65%;
    background: ${e=>e.theme.heroSpotlightRight};
    animation: ${qt} 40s ease-in-out infinite;
  }

  /* Mobile: blur(200px) + large keyframe animations destroy GPU on phones.
     Drop blur radius dramatically and stop the animation. */
  @media (max-width: 1000px) {
    &::before, &::after {
      filter: blur(80px);
      animation: none;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    &::before, &::after {
      animation: none;
    }
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    height: auto;
    min-height: 100dvh;
    padding: 12vh 5vw 6vh;
    gap: 2vh;
    align-items: center;
    justify-content: center;
    overflow-x: hidden;
    overflow-y: visible;
  }

  @media (max-width: 768px) {
    padding: 10vh 5vw 5vh;
    gap: 1.5vh;
  }
`,Nt=e=>i.jsx(Fe,{desktop:ue,desktopAvif:we,desktopWebp:be,mobile600:xe,mobile900:ve,mobile600Avif:ye,mobile900Avif:ke,mobile600Webp:je,mobile900Webp:Ce,alt:"Zack MacTavish portrait",loading:"eager",decoding:"async",fetchPriority:"high",className:"about-picture-img",style:e.style}),Jt=a.div`
  display: flex;
  position: relative;
  z-index: 1;

  .about-picture-img {
    width: 21vw;
    height: 21vw;
    object-fit: cover;
    border-radius: 50%;
    flex-shrink: 0;
    position: relative;
    z-index: 1;
    display: block;
  }

  @media (max-width: 1000px) {
    width: 100%;
    display: grid;           /* grid centers perfectly even with subpixel widths */
    place-items: center;     /* center both horizontally and vertically */
  }
  @media (max-width: 700px) {
    margin-bottom: 3.5vh;

    .about-picture-img {
      width: 44vw;
      height: 44vw;
    }
  }
`,Ot=a.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: ${e=>e.theme.onOlive};
  position: relative;
  z-index: 1;

  @media (max-width: 1000px) {
    width: 90vw;
    align-items: center;
    text-align: center;
    margin: 0 auto;
  }
`,Ht=a.div`
  position: relative;
  font-family: var(--font-display);
  font-weight: 500;
  font-size: var(--type-standalone-size);
  line-height: var(--type-standalone-leading);
  width: 32vw;
  max-width: 34rem;
  color: ${e=>e.theme.onOlive};
  z-index: 1;

  @media (max-width: 1000px) {  
    width: 100%;
    max-width: 36rem;
    margin-top: 1vh;
    padding-bottom: 3vh;
    text-align: center;
  }

  @media (max-width: 850px) {
    padding-top: 2vh;
  }
`,Kt=a.h1`
  display: flex;
  flex-direction: column;
  margin: 0 0 1.25rem;
  font-family: var(--font-display);
  font-size: 5rem;
  font-weight: 600;
  line-height: 0.9;
  letter-spacing: 0;
  color: ${e=>e.theme.onOlive};

  @media (max-width: 1400px) {
    font-size: 4.25rem;
  }

  @media (max-width: 1000px) {
    align-items: center;
    font-size: 3.75rem;
  }

  @media (max-width: 700px) {
    margin-bottom: 1rem;
    font-size: 3rem;
  }
`,Vt=a.a`
  color: inherit;
  font-weight: 600;
  text-decoration: underline;
  text-decoration-thickness: 0.75px;
  text-underline-offset: 0.2em;
`,$t=a.div`
  position: relative;
  z-index: 10;
  margin-bottom: 2vh;
  @media (max-width: 1000px) {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  @media (max-width: 700px) {
    margin-bottom: 0.7vh;
  }
`,_t=a.div`
  position: fixed; /* desktop: center relative to the viewport */
  bottom: 6vh;     /* consistent viewport spacing from bottom */
  left: 0;
  right: 0;
  transform: none;
  display: grid;
  place-items: center; /* robust horizontal centering without relying on transforms */
  opacity: ${({$visible:e})=>e?.8:0};
  transition: opacity 0.6s ease;
  pointer-events: none;
  z-index: 2;      /* keep under intro overlay (which is z-index: 10) and above base content */

  /* mobile: keep the chevron inside the first section */
  @media (max-width: 1000px) {
    position: absolute; /* anchor to LandingDiv instead of viewport */
    bottom: 4vh;        /* inside the section's bottom */
    left: 0;
    right: 0;
    transform: none;
    display: grid;
    place-items: center;
  }
`,ei=a.div`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.45rem 0.7rem 0.45rem 0.55rem;
  border: 1px solid ${e=>"dark"===e.theme.name?"rgba(255, 255, 255, 0.18)":"rgba(15, 15, 15, 0.16)"};
  border-radius: 999px;
  background: ${e=>"dark"===e.theme.name?"rgba(15, 15, 15, 0.78)":"rgba(255, 255, 255, 0.72)"};
  color: ${e=>"dark"===e.theme.name?"#fff":"#1a1a1a"};
  font-family: var(--font-mono);
  font-size: 0.78rem;
  letter-spacing: 0.04em;
  line-height: 1;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);

  svg {
    width: 1rem;
    height: 1rem;
    animation: ${Gt} 1.3s ease-in-out infinite;
  }

  @media (prefers-reduced-motion: reduce) {
    svg {
      animation: none;
    }
  }
`,ti=a.section`
  position: relative;
  z-index: 2;
  width: 100%;
  background: ${e=>e.theme.surface};
  /* Vertical rhythm only; horizontal alignment is owned by ProjectsInner so the
     cards track the same 64rem grid as the rest of the site. */
  padding: 14vh 0;
  box-sizing: border-box;

  @media (max-width: 850px) {
    padding: 7vh 0; /* tighter vertical breathing room on mobile */
  }

  @media (max-width: 600px) {
    padding: 5vh 0;
  }
`,ii=a.div`
  width: 100%;
  max-width: 64rem;
  margin: 0 auto;
  padding: 0 1.5rem;
  box-sizing: border-box;

  @media (max-width: 480px) {
    padding: 0 1.25rem;
  }
`,ri=a.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 2rem;
  row-gap: 3rem; /* extra space between rows */

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`,ni=a(s)`
  position: relative;
  display: block;
  width: 100%;
  aspect-ratio: 16/10;
  border-radius: ${e=>e.theme.radii.card};
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0,0,0,0.08);
  background-color: #f5f5f5;
  text-decoration: none;
  transition: transform 180ms ease, box-shadow 180ms ease;
  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px rgba(25, 118, 210, 0.45);
  }
`,ai=a.div`
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  filter: saturate(0.9);
  transition: filter 180ms ease;
`,oi=a.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.45), rgba(0,0,0,0.15));
  transition: background 180ms ease;
`,si=a.div.attrs({"data-cursor":"link",role:"link"})`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 0.75rem; /* slightly below the image */
`,li=a.h3`
  margin: 0;
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 1.15rem;
  color: ${e=>e.theme.strongText};
  transition: color 160ms ease;
`,Ai=a.p`
  margin: 0;
  font-family: var(--font-body);
  font-size: 0.95rem;
  color: ${e=>e.theme.mutedText};
`,di=a.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 650px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
`,mi=a.h2`
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(1.4rem, 3vw, 2rem);
  color: ${e=>e.theme.strongText};
`,ci=a.p`
  margin: 0;
  font-family: var(--font-body);
  font-size: 1rem;
  color: ${e=>e.theme.mutedText};
  text-align: right;
  a {
    color: ${e=>e.theme.mutedText};
    text-decoration: none;
    transition: color 160ms ease;
  }
  a:hover {
    color: ${e=>e.theme.backgroundColor};
    text-decoration: none;
  }
`;a.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  pointer-events: none;
  color: #111;
`;const hi=a.div`
  display: flex;
  flex-direction: column;

  &:hover ${ni} {
    transform: translateY(-3px);
    box-shadow: 0 10px 36px rgba(0,0,0,0.12);
  }

  &:hover ${ai} {
    filter: saturate(1.08) brightness(1.05);
  }

  &:hover ${oi} {
    background: linear-gradient(to top, rgba(0,0,0,0.25), rgba(0,0,0,0.08));
  }

  &:hover ${li} {
    color: ${e=>e.theme.fontColor};
  }
`,pi=a.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center; /* center inner wrapper */
  width: 100%;
  padding: 8vh 0; /* add more vertical space */
  background-color: transparent;

  @media (max-width: 1000px) {
    flex-direction: column;
    padding: 4vh 0;
    align-items: center;
  }
`,gi=a.div`
  width: 62vw; /* +2vw for a bit more room */
  max-width: 1100px; /* aligns with other sections' inner width */
  margin: 0 auto;
  display: grid;
  grid-template-columns: 0.48fr 0.52fr; /* give ~2vw more space to text */
  align-items: center; /* vertically center text relative to image */
  justify-content: center;
  gap: calc(2rem + 16px); /* add ~16px more gap between image and text */

  @media (max-width: 1000px) {
    width: 90vw;
    grid-template-columns: 1fr;
    gap: 1rem;
    align-items: center;
  }
`,fi=a.img.attrs({loading:"lazy",decoding:"async"})`
  width: 100%;
  height: auto;
  display: block; /* avoid inline image spacing quirks */
  object-fit: contain;
  border-radius: ${e=>e.theme.radii.card}; /* standardized card radius */
`,ui=a(Ht)`
  width: 100%;
  min-width: 0; /* allow wrapping within grid cell */
  padding-right: 0;
  font-size: clamp(1.05rem, 1.6vw, 1.5rem); /* slightly smaller for better line length */
  line-height: 1.6; /* improve readability */
  color: ${e=>e.theme.onOlive};

  /* Keep stacked text readable without becoming visually oversized on smaller screens */
  @media (max-width: 1000px) {
    font-size: clamp(1rem, 2.7vw, 1.2rem);
    line-height: 1.65;
  }
`,wi=a.div`
  overflow-y: hidden;
  width: 100vw;
`,bi=a.div`
  display: grid;
  overflow-y: hidden;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  background-color: ${e=>e.theme.backgroundColor};
  height: 100dvh; /* ensure full viewport height on mobile browsers */
  width: 100vw;
  position: relative; /* allow absolute overlay of header on mobile */

  @media (max-width: 800px) {
    grid-template-columns: 1fr; /* single column on mobile for full-width content */
    grid-template-rows: 90dvh; /* slightly less tall on mobile; header overlays */
    grid-template-areas: 'image';
    height: 90dvh; /* match container height to image */
    overflow: visible; /* prevent absolute header from being clipped */
  }
`,xi=a.div`
  display: grid;
  grid-column-start: 2;
  grid-column-end: 5;
  grid-row-start: 2;
  grid-row-end: 4;
  align-self: center;
  justify-self: start;
  z-index: 200;
  gap: 0.3rem;
  width: fit-content;
  padding: 1.5rem 2rem;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  backdrop-filter: blur(4px);

  /* Mobile: backdrop-filter over a WebGL canvas is very expensive on iOS.
     Use a solid translucent background instead. */
  @media (max-width: 1000px) {
    padding: 1.2rem 1.5rem;
    backdrop-filter: none;
    background: rgba(0, 0, 0, 0.55);
  }
  @media (max-width: 800px) {
    grid-column: 1;
    grid-row: 1;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90vw;
    margin-left: 0;
    padding: 1.5rem;
    text-align: center;
    justify-self: center;
    align-self: center;
    box-sizing: border-box;
  }
`,vi=a.h1`
  font-size: clamp(16px, 5.5vw, 3.8rem);
  line-height: 1.2;
  color: white;
  font-family: var(--font-body);
  text-shadow: 2px 2px 50px rgba(0, 0, 0, 1);
  margin: 0;

  @media (max-width: 1400px) {
    font-size: clamp(14px, 4.2vw, 3.2rem);
  }
  @media (max-width: 1200px) {
    font-size: clamp(14px, 5vw, 3rem);
  }
  @media (max-width: 1000px) {
    font-size: clamp(14px, 4.5vw, 2.8rem);
  }
  @media (max-width: 800px) {
    font-size: clamp(12px, 3.5vw, 2rem);
  }
`,yi=a.p`
  font-size: clamp(14px, 2.5vw, 1.4rem);
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  font-family: var(--font-body);
  text-shadow: 1px 1px 30px rgba(0, 0, 0, 0.8);
  margin: 0;
  font-weight: 400;

  @media (max-width: 1000px) {
    font-size: clamp(12px, 2.2vw, 1.2rem);
  }
  @media (max-width: 800px) {
    font-size: clamp(14px, 3.5vw, 1.1rem);
    text-shadow: 0 0 15px rgba(0, 0, 0, 0.95), 1px 1px 8px rgba(0, 0, 0, 0.9);
  }
`,ki=a.a`
  display: inline-block;
  width: fit-content;
  padding: 0.85rem 2rem;
  background-color: white;
  color: #1a1a1a;
  font-family: var(--font-body);
  font-size: clamp(13px, 1.8vw, 1.1rem);
  font-weight: 600;
  text-decoration: none;
  border-radius: 4px;
  transition: all 0.3s ease;
  cursor: pointer;
  margin-top: 0.5rem;
  text-shadow: none;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: #f0f0f0;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 1000px) {
    padding: 0.75rem 1.8rem;
    font-size: clamp(12px, 1.5vw, 1rem);
  }
  @media (max-width: 800px) {
    padding: 0.7rem 1.6rem;
    font-size: clamp(11px, 1.3vw, 0.9rem);
    margin-left: auto;
    margin-right: auto;
  }
`,ji=a.div`
  display: grid; 
  grid-column-start: 1;
  grid-column-end: -1;
  grid-row-start: 2;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  
  canvas {
    width: 100vw !important;
    height: 100% !important;
    margin-left: calc(-50vw + 50%) !important;
  }

  @media (max-width: 800px) {
    grid-area: image;
    width: 100vw;
    margin-left: 0;

    canvas {
      width: 100vw !important;
      margin-left: 0 !important;
    }
  }
`,Ci=Object.freeze(Object.defineProperty({__proto__:null,QuiltContainer:pi,QuiltImage:fi,QuiltInner:gi,QuiltText:ui,default:({introDone:e=!0})=>{const[t,r]=n.useState(!1),[a,o]=n.useState(!1),[s,m]=n.useState(!1);return n.useLayoutEffect(()=>{window.scrollTo(0,0)},[]),n.useEffect(()=>{var e;if("undefined"==typeof window||!window.matchMedia)return;const t=window.matchMedia("(min-width: 1001px) and (pointer: fine) and (not (prefers-reduced-motion: reduce))"),i=()=>m(t.matches);return i(),null===(e=t.addEventListener)||void 0===e||e.call(t,"change",i),()=>{var e;return null===(e=t.removeEventListener)||void 0===e?void 0:e.call(t,"change",i)}},[]),n.useEffect(()=>{const e=()=>{!a&&window.scrollY>50&&(r(!1),o(!0))};return window.addEventListener("scroll",e,{passive:!0}),()=>window.removeEventListener("scroll",e)},[a]),n.useEffect(()=>{e&&(a||r(!0))},[e,a]),i.jsxs("div",{children:[i.jsx(l,{...d.landing,sameAs:A.sameAs,keywords:d.landing.keywords||A.keywords,siteDefaults:A}),i.jsxs(Pt,{children:[i.jsx(Jt,{children:i.jsx(Nt,{src:ue})}),i.jsxs(Ot,{children:[i.jsxs(Kt,{children:[i.jsx("span",{children:"Zack"}),i.jsx("span",{children:"MacTavish"})]}),i.jsx($t,{children:i.jsx(R,{})}),i.jsx(Ht,{$widthsize:"47vw",children:"A product designer based in Philadelphia, PA. I'm currently shaping shopping experiences at Microsoft."})]}),!a&&e&&i.jsx(_t,{$visible:t,children:i.jsxs(ei,{children:[i.jsx(W,{}),i.jsx("span",{children:"Scroll"})]})})]}),i.jsx(I,{}),i.jsx(Tt,{style:{backgroundColor:"var(--section-muted, #f7f7f7)"},children:i.jsx(Xt,{children:i.jsxs(Yt,{style:{color:"var(--text-muted, #5d5d5d)"},children:["I’ve partnered with agencies including"," ",i.jsx(St,{href:"https://www.publicisgroupe.com/en",target:"_blank",rel:"noopener noreferrer",children:"Publicis Groupe"}),","," ",i.jsx(St,{href:"https://prairieandforge.com/",target:"_blank",rel:"noopener noreferrer",children:"Prairie & Forge"}),", and"," ",i.jsx(St,{href:"https://varfaj.com/",target:"_blank",rel:"noopener noreferrer",children:"Varfaj Partners"})," ","on work spanning UX, product, and brand design. My background includes agency experience in New York City and formal design training in Chicago. Client collaborations have included Microsoft, Walmart, Seagate Technology, and Chip Ganassi Racing."]})})}),i.jsx(Zt,{}),i.jsx(ti,{children:i.jsxs(ii,{children:[i.jsxs(di,{children:[i.jsx(mi,{children:"My writing"}),i.jsx(ci,{children:i.jsx("a",{href:"https://medium.com/@zmactavish",target:"_blank",rel:"noopener noreferrer",children:"See my Medium Portfolio"})})]}),i.jsx(ri,{children:[...Array(6)].map((e,t)=>{const r=0===t,n=1===t,a=2===t,o=3===t,s=5===t,l=4===t,A=r?"https://medium.com/design-bootcamp/76-features-in-figma-to-know-7dbb35cdb5a7":n?"https://medium.com/design-bootcamp/my-journey-as-a-product-designer-at-microsoft-a5325be417b5":a?"https://medium.com/design-bootcamp/12-features-to-consider-when-designing-an-e-commerce-mobile-app-740efbeee7c8":o?"https://medium.com/design-bootcamp/designing-in-the-8pt-grid-system-f3c1183ea6e8":l?"https://medium.com/@zmactavish/0643beac797a":s?"https://medium.com/@zmactavish/30-html-tags-to-know-b0a85b122ded":"https://medium.com/@zmactavish",d=r?"76 features in Figma to know":n?"My journey as a Product designer at Microsoft":a?"12 features to consider when building an E-commerce app":o?"Designing in the 8pt grid system":l?"30 CSS styles to know":s?"30 HTML tags to know":"Medium",m=r?"A guide to all things Figma":n?"Shaping the shopping experience at Microsoft":a?"A practical UX checklist for e‑commerce mobile apps":o?"Consistent spacing for scalable UI components":l?"A beginner's guide to CSS for designers":"A beginner's guide to HTML for designers";let c=null;return r?c=i.jsx(Dt,{desktop:Re,desktopAvif:"data:image/avif;base64,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",desktopWebp:Re,mobile600:Ze,mobile900:Ue,mobile600Avif:"data:image/avif;base64,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",mobile900Avif:"data:image/avif;base64,AAAAHGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZgAAAZhtZXRhAAAAAAAAACFoZGxyAAAAAAAAAABwaWN0AAAAAAAAAAAAAAAAAAAAAA5waXRtAAAAAAABAAAANGlsb2MAAAAAREAAAgACAAAAAAG8AAEAAAAAAAAATgABAAAAAAIKAAEAAAAAAAAHkgAAADhpaW5mAAAAAAACAAAAFWluZmUCAAAAAAEAAGF2MDEAAAAAFWluZmUCAAAAAAIAAGF2MDEAAAAA12lwcnAAAACxaXBjbwAAABNjb2xybmNseAACAAIABoAAAAAMYXYxQ4EEHAAAAAAUaXNwZQAAAAAAAAOEAAABwgAAAA5waXhpAAAAAAEIAAAAOGF1eEMAAAAAdXJuOm1wZWc6bXBlZ0I6Y2ljcDpzeXN0ZW1zOmF1eGlsaWFyeTphbHBoYQAAAAAMYXYxQ4EkAgAAAAAUaXNwZQAAAAAAAAOEAAABwgAAABBwaXhpAAAAAAMICAgAAAAeaXBtYQAAAAAAAAACAAEEgYYHiAACBIIDhIUAAAAaaXJlZgAAAAAAAAAOYXV4bAACAAEAAQAAB+htZGF0EgAKBxkmOD4LCoAyQUSAAEEUApZWRU4I1GVuxteKgAA572Mtjjk9MCqaR83RPNhKvlFbTVsp7GICmP0DkB09DAABPYotm/Y5gPAQHIVgEgAKBzkmOD4LBIAyhA9EgACy4kxQAcErUZyBisN/oDL6v/B8k2bnfvLENbWEZJhlPtDENWgonosGfLI8cJGaKljS8RtzCXyJPC4U9D2OyPwnH/FExAxq/Z8eYPJr3KVZTjeWz4EJkOcdv9FpTO2F8bV7U6Db+UIa3FkbRg4os9YzAEyE83y4FJJrqYoKbgh7/2Y57pVap6NzyLzOCtK37i74gPS3mUQLz3sdr5vH/RvferLrPUA/9otLHuc21ux9zcUoBbcSV6HLkWP8bfn3sKlN06ra3eF5fZxYJbKG4BvUkAM5C0H9b4KDTB8iBNSwWatZt85yI0VYeUeS52fogmP4p6ljNSAycZz6qnDqzemGM9Rh4IeFOTbQCsI2wQoDetZgdPokxFBKpLPonKgLKR6yN5TYJZkmC/P1Ei/QMNGVFrSicgzrIGbLh8Jz/R6FJDBI8k7DUU2KUeYy9yoAFU7tqcxFazn9OU/i6yECq29DwwyzKYbN4J4N1E8CIeT8XZATImUGoze0mVSSxGJunkHTdPMgspdMBN6Lx0MPhfYo7w83cL4VsllqMRHOWEKRdN39U35bfCHPmt+xQ35rKVOrNRSzlHaFlwKjaFhMcpYQKUIjUASSWQnTSNQsFStXyEqZpT9RXQEUypnIlX5Cq82H7rmNQPUCMLTYWBXiBYOGvc1IEB/JTWqKMXelumxqpwnK7ZejX9FlQApFFzk4TW628pCyVvwCvwvG2PF12JQZykMySvmF2YdYy12YqSncqkyUX0BMD0nys3jfxbdoC1d65esZ5kZ5iuToKDN7pGrh+Nk+W0yg3ZJIkgiVb9iV3hZP4ygPj96QsJt4JZIKDOVI1WFaZroVvjiZQ1qHQAleIOqDgoj4+9XD7cFYl62nJh7Qy5mtHQ1gDOD+uo/XhC+1oLmXiBsifhPhc20wzYfBoaz7T3RnqguJR30SWIZHaxHXmcNkNGORSX0aKBzUr8Fn2tLoqzBP1+zeGHMlin07Eo08tr7JPNnvic5VBhWegwCjyHyvXJHH16KCK7UrP9/rOt8HIb5d7Z1uX4sz+j17hEVURF33GRRA8x2mL4qS8l2Z4nk1dmbsjgfJBV+55TT/U7EIth0f0dcDASlyA3psLAatWwCrVhRycmPbQ6nWOrTX/FZti6ToI2wEmBXzCVh2t68jJF5lPQxbfJqp9ARSz42f62RG/kiZxjRTY7uwXL8Z2LEC7VvD/Jbw+ISBrTW9/ypZ1dSTBB46RwS8ZPWV2HdL+GjWQc+sK2cdlONx5Y7QkZJPvtI8qgdm/Ckv6C+GBO239aHKElIMPGO7VZMGrWI3iUNePSP7qltkMEozDnih5Wzdrw3D5ru8RpTz2/v/9OPnYOYPU/68e6eRMlcCh8NLIXkHGhhIn02XCR2q/eKLLGlgXatofaKW6WR+Ou74YrxLSE7kMLuZBG4raCbldTpQ55IolsrWVmn6FfTn8hlKXr8vhUB8nrW9fFjAZHBoGtkDLfJrgdGDcdlkLQgGKLx48azNpMfQXB+94secFUYLArWU99FETi/swKTvqVIwlEjIEwmSRULvL88T8foKD0T8dEBNeW5zB5uB35vPCq47BtdriJhdDndBr6buBgyVe0EuxG/mqgnFphpaahH/yaGLqqTvTs7bgL+p6S6wX+1xlT3JL6OYH/MhRjcXavZIaZxeYT+hGtQBFtc7yNRUL/cZYYKmummQhr50sgvsJecGggMAR0u6N3LiPyfq2DxeTlIEh0diYHTYtHd6eBn+BPJVB7R1VxfcO+BCiBFyHgarJ/yKxOn2j/aeSqezMniaFBpTzZRW9Z98cw4+zxI7Y176NpADuYxFjvDEiatTTwJfC1VpotjKW9r/TVv+OOoVO/NH6fVKUoOB1irqZPq78CM70fZwWNlJXXDIuLAil5bECeWRz6MG8zFpNIR/qjP++zPhX6y+VMavx1KiJNDv+miyBqJKa0EKjziWIKxj5r7bfe2kj5fGT/vWb42UwD0gDePWv/8Xh6HTeiKwwnT6sy4O4mMAHK8GqvhWy/gIKgJyDLe2cNsaDXK3MenzSHxTNJZ85waz2iHn3nxZk7QUEvOF7nb399cC0gFZ/nvz5iMjgEfEqX3dD2HEDwmk0C9YtEYrZvTsOqcajrx6hRdkYFgZIIc+TerZb7Jc21h5Cl3SZrh1/8W8oYOacFfSVzYYGdury5BlBxkjSnFbVWwDbMNhxFzj4X6nyeuParuMe5rXZl+yXmNAi8E/IwqzFcTRAJ5n0He+MMGqSAHscHy0MzS7wLZ31DgpC2qLY9fpHF5skP8WmOFJSWzq7ECXB2iqJGUQmX7hJ7hKM9mKWlx7gghiBiRdpVqa+wNWwhbGdBnTGofw4wTMUYdu1Pbu8tpum2OtYX4maahL1XPVSHozSNKUFmV1kQHSqFgSsABe23Guq6F2UlJJ2uJA1rpI4KYm+LRs4uy6QwLtmf8boF7f11t4i2mj80IYoCFzdZ11SfN9AGmbeu8ZF5Zwk777Ml42Nriest++y6rrUQgcq7Fyy5aRlJlt/lmtD9B+pt6Lisbndachzh4Ps3H72C0eapFA",mobile600Webp:Ze,mobile900Webp:Ue,alt:"76 features in Figma to know — article cover"}):n?c=i.jsx(Dt,{desktop:De,desktopAvif:Te,desktopWebp:De,mobile600:Ye,mobile900:Se,mobile600Avif:Ie,mobile900Avif:Xe,mobile600Webp:Ye,mobile900Webp:Se,alt:"My journey as a Product designer at Microsoft — article cover"}):a?c=i.jsx(Dt,{desktop:Qe,desktopAvif:qe,desktopWebp:Qe,mobile600:Ne,mobile900:Je,mobile600Avif:Ge,mobile900Avif:Pe,mobile600Webp:Ne,mobile900Webp:Je,alt:"12 features to consider when designing an e-commerce mobile app — article cover"}):o?c=i.jsx(Dt,{desktop:Oe,desktopAvif:He,desktopWebp:Oe,mobile600:$e,mobile900:_e,mobile600Avif:Ke,mobile900Avif:Ve,mobile600Webp:$e,mobile900Webp:_e,alt:"Designing in the 8pt grid system — article cover"}):l?c=i.jsx(Dt,{desktop:it,desktopAvif:rt,desktopWebp:nt,mobile600:it,mobile900:it,mobile600Avif:rt,mobile900Avif:rt,mobile600Webp:nt,mobile900Webp:nt,alt:"Card 6"}):s&&(c=i.jsx(Dt,{desktop:et,desktopAvif:tt,desktopWebp:et,mobile600:et,mobile900:et,mobile600Avif:tt,mobile900Avif:tt,mobile600Webp:et,mobile900Webp:et,alt:"Card 5"})),i.jsxs(hi,{children:[i.jsxs(ni,{to:A,target:"_blank",rel:"noopener noreferrer","aria-label":r?"Medium article: 76 features in Figma to know":n?"Medium article: My journey as a Product designer at Microsoft.":a?"Medium article: 12 features to consider when building an E-commerce app":o?"Medium article: Designing in the 8pt grid system":l?"Medium article: 30 CSS styles to know":s?"Medium article: 30 HTML tags to know":`Medium writing card ${t+1}`,children:[i.jsx(ai,{as:"div",style:{background:"none",padding:0},children:c}),i.jsx(oi,{})]}),i.jsxs(si,{children:[i.jsx(li,{children:d}),i.jsx(Ai,{children:m})]})]},`medium-card-${t}`)})})]})}),i.jsx(It,{imageSrc:Be,imageAvif:ze,imageWebp:Ee,imageAlt:"Quilt hanging",mobileSrc:Me,mobileAvif:Le,mobileWebp:We,style:{color:"var(--on-olive)"},textSize:"var(--type-standalone-size)",textColor:"var(--on-olive)",children:i.jsxs("div",{style:{fontFamily:"var(--font-display)",fontSize:"var(--type-standalone-size)",lineHeight:"var(--type-standalone-leading)"},children:["Outside of work, I live with my partner ",i.jsx(Vt,{href:"https://oliviazitasmith.com",target:"_blank",rel:"noopener noreferrer",children:"Olivia Smith"}),", who is also an artist. In my own creative time, I focus on making quilts that combine photography, textile techniques, and mixed media, exploring the intersection of art, design, and storytelling."]})}),i.jsx(wi,{children:i.jsxs(bi,{children:[i.jsxs(xi,{children:[i.jsx(vi,{children:"Thanks for stopping by"}),i.jsx(yi,{children:"I'm also an artist. Check out my art portfolio."}),i.jsx(ki,{href:"https://zackmactavish.com",target:"_blank",rel:"noopener noreferrer",children:"View Portfolio"})]}),i.jsx(ji,{children:i.jsx(Z,{fallback:null,children:s?i.jsx(n.Suspense,{fallback:i.jsx("div",{style:{height:"50vh"}}),children:i.jsx(Ut,{})}):i.jsxs("picture",{children:[i.jsx("source",{srcSet:At,type:"image/avif",media:"(max-width: 900px)"}),i.jsx("source",{srcSet:ot,type:"image/avif"}),i.jsx("source",{srcSet:dt,type:"image/webp",media:"(max-width: 900px)"}),i.jsx("source",{srcSet:st,type:"image/webp"}),i.jsx("source",{srcSet:lt,media:"(max-width: 900px)"}),i.jsx("img",{src:at,alt:"","aria-hidden":"true",loading:"lazy",decoding:"async",style:{width:"100vw",height:"100%",objectFit:"cover",display:"block"}})]})})})]})})]})}},Symbol.toStringTag,{value:"Module"}));e("L",Ci)}}});
