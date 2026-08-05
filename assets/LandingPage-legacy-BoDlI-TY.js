System.register(["./three-legacy-pzFKRJSU.js","./vendor-legacy-Dy2oZrq6.js","./metadata-legacy-D1k7S1BT.js","./index-legacy-CfatBxvy.js","./CaseStudyPrimitives-legacy-QhpchpWo.js","./PortfolioCardsSection-legacy-4ALzXClx.js","./index-legacy-Co7Prk6o.js"],function(e,t){"use strict";var i,r,a,n,o,s,l,A,d,m,c,h,p,g,f,u,w,b,x,v,y,k,j,C,B,E,M,z,L,W,F,R,U,Z,D,T,X;return{setters:[e=>{i=e.j,r=e._},e=>{a=e.b,n=e.c,o=e.l,s=e.L},e=>{l=e.E,A=e.s,d=e.p,m=e.A},e=>{c=e.f,h=e.c,p=e.s,g=e.a,f=e.p,u=e.v,w=e.i,b=e.b,x=e.d,v=e.e,y=e.n,k=e.r,j=e.g,C=e.u,B=e.h,E=e.m,M=e.j,z=e.k,L=e.l,W=e.S,F=e.E},e=>{R=e.F,U=e.T,Z=e.a},e=>{D=e.P},e=>{T=e.F,X=e.a}],execute:function(){function I(e,t){let i;const r=()=>{const{currentTime:r}=t,a=(null===r?0:r.value)/100;i!==a&&e(a),i=a};return c.preUpdate(r,!0),()=>h(r)}function S(e){return"undefined"!=typeof window&&(e?p():g())}const Y={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function G(e,t,i,r){const a=i[t],{length:n,position:o}=Y[t],s=a.current,l=i.time;a.current=Math.abs(e[`scroll${o}`]),a.scrollLength=e[`scroll${n}`]-e[`client${n}`],a.offset.length=0,a.offset[0]=0,a.offset[1]=a.scrollLength,a.progress=f(0,a.scrollLength,a.current);const A=r-l;a.velocity=A>50?0:u(a.current-s,A)}const Q={start:0,center:.5,end:1};function q(e,t,i=0){let r=0;if(e in Q&&(e=Q[e]),"string"==typeof e){const t=parseFloat(e);e.endsWith("px")?r=t:e.endsWith("%")?e=t/100:e.endsWith("vw")?r=t/100*document.documentElement.clientWidth:e.endsWith("vh")?r=t/100*document.documentElement.clientHeight:e=t}return"number"==typeof e&&(r=t*e),i+r}const P=[0,0];function N(e,t,i,r){let a=Array.isArray(e)?e:P,n=0,o=0;return"number"==typeof e?a=[e,e]:"string"==typeof e&&(a=(e=e.trim()).includes(" ")?e.split(" "):[e,Q[e]?e:"0"]),n=q(a[0],i,r),o=q(a[1],t),n-o}const J={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},H={x:0,y:0};function O(e,t,i){const{offset:r=J.All}=i,{target:a=e,axis:n="y"}=i,o="y"===n?"height":"width",s=a!==e?function(e,t){const i={x:0,y:0};let r=e;for(;r&&r!==t;)if(w(r))i.x+=r.offsetLeft,i.y+=r.offsetTop,r=r.offsetParent;else if("svg"===r.tagName){const e=r.getBoundingClientRect();r=r.parentElement;const t=r.getBoundingClientRect();i.x+=e.left-t.left,i.y+=e.top-t.top}else{if(!(r instanceof SVGGraphicsElement))break;{const{x:e,y:t}=r.getBBox();i.x+=e,i.y+=t;let a=null,n=r.parentNode;for(;!a;)"svg"===n.tagName&&(a=n),n=r.parentNode;r=a}}return i}(a,e):H,l=a===e?{width:e.scrollWidth,height:e.scrollHeight}:function(e){return"getBBox"in e&&"svg"!==e.tagName?e.getBBox():{width:e.clientWidth,height:e.clientHeight}}(a),A={width:e.clientWidth,height:e.clientHeight};t[n].offset.length=0;let d=!t[n].interpolate;const m=r.length;for(let c=0;c<m;c++){const e=N(r[c],A[o],l[o],s[n]);d||e===t[n].interpolatorOffsets[c]||(d=!0),t[n].offset[c]=e}d&&(t[n].interpolate=b(t[n].offset,x(r),{clamp:!1}),t[n].interpolatorOffsets=[...t[n].offset]),t[n].progress=v(0,1,t[n].interpolate(t[n].current))}function K(e,t,i,r={}){return{measure:t=>{!function(e,t=e,i){if(i.x.targetOffset=0,i.y.targetOffset=0,t!==e){let r=t;for(;r&&r!==e;)i.x.targetOffset+=r.offsetLeft,i.y.targetOffset+=r.offsetTop,r=r.offsetParent}i.x.targetLength=t===e?t.scrollWidth:t.clientWidth,i.y.targetLength=t===e?t.scrollHeight:t.clientHeight,i.x.containerLength=e.clientWidth,i.y.containerLength=e.clientHeight}(e,r.target,i),function(e,t,i){G(e,"x",t,i),G(e,"y",t,i),t.time=i}(e,i,t),(r.offset||r.target)&&O(e,i,r)},notify:()=>t(i)}}const V=new WeakMap,$=new WeakMap,_=new WeakMap,ee=new WeakMap,te=new WeakMap,ie=e=>e===document.scrollingElement?window:e;function re(e,{container:t=document.scrollingElement,trackContentSize:i=!1,...r}={}){if(!t)return y;let a=_.get(t);a||(a=new Set,_.set(t,a));const n=K(t,e,{time:0,x:{current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0},y:{current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}},r);if(a.add(n),!V.has(t)){const e=()=>{for(const e of a)e.measure(j.timestamp);c.preUpdate(i)},i=()=>{for(const e of a)e.notify()},r=()=>c.read(e);V.set(t,r);const n=ie(t);window.addEventListener("resize",r),t!==document.documentElement&&$.set(t,k(t,r)),n.addEventListener("scroll",r),r()}if(i&&!te.has(t)){const e=V.get(t),i={width:t.scrollWidth,height:t.scrollHeight};ee.set(t,i);const r=()=>{const r=t.scrollWidth,a=t.scrollHeight;i.width===r&&i.height===a||(e(),i.width=r,i.height=a)},a=c.read(r,!0);te.set(t,a)}const o=V.get(t);return c.read(o,!1,!0),()=>{h(o);const e=_.get(t);if(!e)return;if(e.delete(n),e.size)return;const i=V.get(t);var r;V.delete(t),i&&(ie(t).removeEventListener("scroll",i),null===(r=$.get(t))||void 0===r||r(),window.removeEventListener("resize",i));const a=te.get(t);a&&(h(a),te.delete(t)),ee.delete(t)}}const ae=[[J.Enter,"entry"],[J.Exit,"exit"],[J.Any,"cover"],[J.All,"contain"]],ne={start:0,end:1};function oe(e){const t=e.trim().split(/\s+/);if(2!==t.length)return;const i=ne[t[0]],r=ne[t[1]];return void 0!==i&&void 0!==r?[i,r]:void 0}function se(e,t){const i=function(e){if(2!==e.length)return;const t=[];for(const i of e)if(Array.isArray(i))t.push(i);else{if("string"!=typeof i)return;{const e=oe(i);if(!e)return;t.push(e)}}return t}(e);if(!i)return!1;for(let r=0;r<2;r++){const e=i[r],a=t[r];if(e[0]!==a[0]||e[1]!==a[1])return!1}return!0}function le(e){if(!e)return{rangeStart:"contain 0%",rangeEnd:"contain 100%"};for(const[t,i]of ae)if(se(e,t))return{rangeStart:`${i} 0%`,rangeEnd:`${i} 100%`}}const Ae=new Map;function de(e){const t={value:0},i=re(i=>{t.value=100*i[e.axis].progress},e);return{currentTime:t,cancel:i}}function me({source:e,container:t,...i}){var r,a;const{axis:n}=i;e&&(t=e);let o=Ae.get(t);o||(o=new Map,Ae.set(t,o));const s=null!==(r=i.target)&&void 0!==r?r:"self";let l=o.get(s);l||(l={},o.set(s,l));const A=n+(null!==(a=i.offset)&&void 0!==a?a:[]).join(",");if(!l[A])if(i.target&&S(i.target)){const e=le(i.offset);l[A]=e?new ViewTimeline({subject:i.target,axis:n}):de({container:t,...i})}else S()?l[A]=new ScrollTimeline({source:t,axis:n}):l[A]=de({container:t,...i});return l[A]}function ce(e,{axis:t="y",container:i=document.scrollingElement,...r}={}){if(!i)return y;const a={axis:t,container:i,...r};return"function"==typeof e?function(e,t){return function(e){return 2===e.length}(e)||function(e){return e&&(e.target||e.offset)}(t)?re(i=>{e(i[t.axis].progress,i)},t):I(e,me(t))}(e,a):function(e,t){const i=me(t),r=t.target?le(t.offset):void 0,a=t.target?S(t.target)&&!!r:S();return e.attachTimeline({timeline:a?i:void 0,...r&&a&&{rangeStart:r.rangeStart,rangeEnd:r.rangeEnd},observe:e=>(e.pause(),I(t=>{e.time=e.iterationDuration*t},i))})}(e,a)}const he=()=>({scrollX:z(0),scrollY:z(0),scrollXProgress:z(0),scrollYProgress:z(0)}),pe=e=>!!e&&!e.current;function ge(e,t,i,r){return{factory:a=>{let n;const o=()=>{pe(i)||pe(r)?E.read(o):n=ce(a,{...t,axis:e,container:(null==i?void 0:i.current)||void 0,target:(null==r?void 0:r.current)||void 0})};return E.read(o),()=>{var e;M(o),null===(e=n)||void 0===e||e()}},times:[0,1],keyframes:[0,1],ease:e=>e,duration:1}}function fe({container:e,target:t,...i}={}){const r=C(he);(function(e,t){return"undefined"!=typeof window&&(e?p()&&!!le(t):g())})(t,i.offset)&&(r.scrollXProgress.accelerate=ge("x",i,e,t),r.scrollYProgress.accelerate=ge("y",i,e,t));const n=a.useRef(null),o=a.useRef(!1),s=a.useCallback(()=>(n.current=ce((e,{x:t,y:i})=>{r.scrollX.set(t.current),r.scrollXProgress.set(t.progress),r.scrollY.set(i.current),r.scrollYProgress.set(i.progress)},{...i,container:(null==e?void 0:e.current)||void 0,target:(null==t?void 0:t.current)||void 0}),()=>{var e;null===(e=n.current)||void 0===e||e.call(n)}),[e,t,JSON.stringify(i.offset)]);return B(()=>(o.current=!1,pe(e)||pe(t)?void(o.current=!0):s()),[s]),a.useEffect(()=>{if(!o.current)return;let i;const r=()=>{const r=pe(e),a=pe(t);r||a||(i=s())};return E.read(r),()=>{var e;M(r),null===(e=i)||void 0===e||e()}},[s]),r}const ue=""+new URL("Me-BEhJ50qd.jpeg",t.meta.url).href,we=""+new URL("Me-C1cwp5zy.avif",t.meta.url).href,be=""+new URL("Me-Rnuwi3im.webp",t.meta.url).href,xe=""+new URL("Me-mobile-600-WLZHCfmO.jpg",t.meta.url).href,ve=""+new URL("Me-mobile-900-BN16uvre.jpg",t.meta.url).href,ye=""+new URL("Me-mobile-600-BSb-mFgg.avif",t.meta.url).href,ke=""+new URL("Me-mobile-900-CxHqnoy3.avif",t.meta.url).href,je=""+new URL("Me-mobile-600-DPwCrVdf.webp",t.meta.url).href,Ce=""+new URL("Me-mobile-900-B5uf1C9A.webp",t.meta.url).href,Be=""+new URL("hangingquilts-CSgyMA7c.jpg",t.meta.url).href,Ee=""+new URL("hangingquilts-4VrGTXBN.avif",t.meta.url).href,Me=""+new URL("hangingquilts-DcA0AW0j.webp",t.meta.url).href,ze=""+new URL("hangingquilts-mobile-600-C3soRhp2.jpg",t.meta.url).href,Le=""+new URL("hangingquilts-mobile-600-Bkobji0e.avif",t.meta.url).href,We=""+new URL("hangingquilts-mobile-600-DMtoBjVZ.webp",t.meta.url).href,Fe=({desktop:e,desktopAvif:t,desktopWebp:r,mobile600:a,mobile900:n,mobile600Avif:o,mobile900Avif:s,mobile600Webp:l,mobile900Webp:A,alt:d,...m})=>i.jsxs("picture",{children:[o&&i.jsx("source",{srcSet:o,type:"image/avif",media:"(max-width: 650px)"}),s&&i.jsx("source",{srcSet:s,type:"image/avif",media:"(max-width: 900px)"}),t&&i.jsx("source",{srcSet:t,type:"image/avif"}),l&&i.jsx("source",{srcSet:l,type:"image/webp",media:"(max-width: 650px)"}),A&&i.jsx("source",{srcSet:A,type:"image/webp",media:"(max-width: 900px)"}),r&&i.jsx("source",{srcSet:r,type:"image/webp"}),a&&i.jsx("source",{srcSet:a,type:"image/jpeg",media:"(max-width: 650px)"}),n&&i.jsx("source",{srcSet:n,type:"image/jpeg",media:"(max-width: 900px)"}),i.jsx("img",{src:e,alt:d,style:{width:"100%",height:"auto",objectFit:"cover"},loading:"lazy",...m})]}),Re=""+new URL("Card1-3--mHPQ8.webp",t.meta.url).href,Ue=""+new URL("Card1-mobile-600-BkfbVUrr.webp",t.meta.url).href,Ze=""+new URL("Card1-mobile-900-C8Xtj9x1.webp",t.meta.url).href,De=""+new URL("Card2-DkNuGfII.webp",t.meta.url).href,Te=""+new URL("Card2-P4YhsQMd.avif",t.meta.url).href,Xe=""+new URL("Card2-mobile-600-BjqHkkHr.avif",t.meta.url).href,Ie=""+new URL("Card2-mobile-900-DQVeDyME.avif",t.meta.url).href,Se=""+new URL("Card2-mobile-600-W6kg1FcH.webp",t.meta.url).href,Ye=""+new URL("Card2-mobile-900-dl6vU5Aj.webp",t.meta.url).href,Ge=""+new URL("Card3-DFuv6FGk.webp",t.meta.url).href,Qe=""+new URL("Card3-B-BNDMwV.avif",t.meta.url).href,qe=""+new URL("Card3-mobile-600-DFcir8SO.avif",t.meta.url).href,Pe=""+new URL("Card3-mobile-900-Gk96WMup.avif",t.meta.url).href,Ne=""+new URL("Card3-mobile-600-D-2quC3k.webp",t.meta.url).href,Je=""+new URL("Card3-mobile-900-CcLct3mj.webp",t.meta.url).href,He=""+new URL("Card4-1NFXU0cZ.webp",t.meta.url).href,Oe=""+new URL("Card4-Bk11GJwc.avif",t.meta.url).href,Ke=""+new URL("Card4-mobile-600-KpZA3K_X.avif",t.meta.url).href,Ve=""+new URL("Card4-mobile-900-CGoJlkwG.avif",t.meta.url).href,$e=""+new URL("Card4-mobile-600-D0VLHbqc.webp",t.meta.url).href,_e=""+new URL("Card4-mobile-900-VCNqPyZD.webp",t.meta.url).href,et=""+new URL("Card5-BWd32u-m.webp",t.meta.url).href,tt=""+new URL("Card5-PjD3mgQy.avif",t.meta.url).href,it=""+new URL("Card6-Dy8ZNgWu.png",t.meta.url).href,rt="data:image/avif;base64,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",at=""+new URL("Card6-3nvBusir.webp",t.meta.url).href,nt=e("w",""+new URL("BlackTurtleneck-popart-01-B7xWLAvK.jpg",t.meta.url).href),ot=""+new URL("BlackTurtleneck-popart-01-BA8FMdCR.avif",t.meta.url).href,st=""+new URL("BlackTurtleneck-popart-01-DwuDl_Fi.webp",t.meta.url).href,lt=""+new URL("BlackTurtleneck-popart-01-mobile-900-DGvdBl1D.jpg",t.meta.url).href,At=""+new URL("BlackTurtleneck-popart-01-mobile-900-obcvLR-l.avif",t.meta.url).href,dt=""+new URL("BlackTurtleneck-popart-01-mobile-900-h5KDvAVg.webp",t.meta.url).href,mt=[{eyebrow:"My Process",title:"My Process",body:"Structured enough to scale, flexible enough to stay curious. Here's my process.",range:[-.01,0,.02,.141]},{eyebrow:"01 / Discovery",title:"Discovery & Research",body:"I start by getting into the client's world: competitive research, stakeholder kickoffs, and a FigJam brainstorm to pull everyone's perspective into one place. I dig into pain points from both the business side and the user's side, then bring in quantitative and qualitative research, like A/B testing on early screens and interview-style studies with UX researchers on platforms like UserTesting, to make sure decisions are grounded in real behavior, not assumptions.",range:[.168,.194,.274,.318]},{eyebrow:"02 / Ideation",title:"Ideation",body:"This is where solutions start taking shape: sketches, site maps, user flows, personas. I work through a lot of it solo first, then bring it to the team early for feedback, because the best ideas get sharper in the room. I also like building out the story behind a flow, not just screen A to B to C to D. A narrative helps a user journey land in a way a static screen sequence can't.",range:[.344,.371,.45,.494]},{eyebrow:"03 / Design",title:"Design",body:"From here, ideas become real: low, medium, and high-fidelity mockups, then interactive prototypes to test the design. I've built in Figma for years and Adobe XD before that, and I'm now exploring how AI fits into the workflow, using Figma's MCP to hand design context straight to Claude Code and vibe-code functional prototypes. Whether it's a Figma prototype or a working build, the goal is the same: get something real in front of users fast.",range:[.521,.547,.627,.671]}],ct=[{question:"What is your design process?",answer:"Discovery and research, ideation, design, testing, and developer handoff, but it’s never a straight line. I loop back to earlier stages whenever new feedback or research calls for it."},{question:"What tools and software do you use for your UX design?",answer:"Figma is home base, alongside FigJam for workshops and brainstorms. I’ve also started building with Figma’s MCP and Claude Code to turn designs into working prototypes faster. AI is changing how quickly ideas can go from concept to something clickable."},{question:"Do you have experience with design systems?",answer:"Yes. At Microsoft I work across multiple design systems, including Bing, Copilot, Windows, and Outlook, each with its own patterns, tokens, and constraints. That’s taught me a lot about designing for consistency at scale without losing what makes each product distinct."},{question:"Have you worked cross-functionally?",answer:"Constantly. I work closely with engineers on edge cases and technical feasibility, PMs on scope and priorities, and researchers on testing, plus agency partners like Publicis Groupe, Prairie & Forge, and Varfaj Partners on brand and product work. Good design happens in the overlap between teams, not in isolation."},{question:"How do you measure the success of your UX design?",answer:"A mix of things: usability testing results, whether the design holds up across all user states and accessibility needs, and feedback from both users and design peers. If the experience feels intuitive and the team can build it without friction, that’s success."}],ht=n.section`
  width: 100%;
  background: #fff;
  color: #111;
  font-family: 'Space Grotesk', sans-serif;
`,pt=n.div`
  height: 650vh;
  background: #fff;
`,gt=n.div`
  position: sticky;
  top: 0;
  display: grid;
  width: 100%;
  height: 100vh;
  height: 100dvh;
  overflow: hidden;
  isolation: isolate;
`,ft=n.div`
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
`,ut=n.div`
  width: 100%;
  height: 1px;
  background: currentColor;
  transform-origin: left center;
`,wt=o`
  0%, 100% { transform: translateY(-1px); }
  50% { transform: translateY(3px); }
`,bt=n.div`
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
  font-family: 'Space Grotesk', sans-serif;
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
`,xt=n.div`
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
`,vt=n.div`
  width: min(100%, 56rem);
`,yt=n.p`
  margin: 0 0 clamp(1.25rem, 3vh, 2rem);
  font-size: 0.78rem;
  font-weight: 600;
  line-height: 1;
  letter-spacing: 0.14em;
  text-transform: uppercase;
`,kt=n.h2`
  margin: 0 0 clamp(1.25rem, 3vh, 2rem);
  max-width: 14ch;
  font-size: clamp(2.75rem, 8vw, 7.5rem);
  font-weight: 500;
  line-height: 0.96;
  letter-spacing: 0;
`,jt=n.p`
  margin: 0;
  max-width: 60rem;
  font-size: clamp(1rem, 1.7vw, 1.35rem);
  font-weight: 400;
  line-height: 1.55;

  @media (max-width: 600px) {
    font-size: clamp(0.94rem, 4vw, 1.08rem);
    line-height: 1.48;
  }

  @media (max-height: 700px) and (max-width: 600px) {
    font-size: 0.88rem;
    line-height: 1.42;
  }
`,Ct=n.section`
  position: relative;
  z-index: 1;
  background: transparent;
  color: #111;
  margin-top: -185vh;
  padding: clamp(6rem, 14vh, 10rem) 0;
`,Bt=n.div`
  width: 100%;
  max-width: 64rem;
  margin: 0 auto;
  padding: 0 1.5rem;
  box-sizing: border-box;

  @media (max-width: 480px) {
    padding: 0 1.25rem;
  }
`,Et=n.h2`
  margin: 0 0 clamp(3rem, 8vh, 5rem);
  font-size: clamp(2.75rem, 7vw, 6rem);
  font-weight: 500;
  line-height: 1;
  letter-spacing: 0;
`,Mt=n.div`
  border-top: 1px solid #b7b7b7;
`,zt=n.details`
  border-bottom: 1px solid #b7b7b7;

  &[open] svg {
    transform: rotate(45deg);
  }
`,Lt=n.summary`
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
`,Wt=n.p`
  max-width: 48rem;
  margin: 0;
  padding: 0 3.5rem clamp(1.75rem, 4vw, 2.75rem) 0;
  color: #494949;
  font-size: clamp(1rem, 1.6vw, 1.18rem);
  line-height: 1.65;
`,Ft=(e,t,i)=>{if(e<=t[0])return i[0];if(e>=t[t.length-1])return i[i.length-1];const r=t.findIndex(t=>t>=e)-1,a=(e-t[r])/(t[r+1]-t[r]);return i[r]+(i[r+1]-i[r])*a},Rt=({step:e,progress:t,reduceMotion:r})=>{const a=Ft(t,e.range,[0,1,1,0]),n=r?0:Ft(t,e.range,[72,0,0,-72]),o=r?1:Ft(t,e.range,[.96,1,1,1.025]),s=r?0:Ft(t,e.range,[14,0,0,14]);return i.jsx(xt,{style:{opacity:a,filter:`blur(${s}px)`,transform:`translateY(${n}px) scale(${o})`},children:i.jsxs(vt,{children:[i.jsx(yt,{children:e.eyebrow}),i.jsx(kt,{children:e.title}),i.jsx(jt,{children:e.body})]})})},Ut=()=>{const e=a.useRef(null),[t,r]=a.useState(0),n=L(),{scrollYProgress:o}=fe({target:e,offset:["start start","end end"]});var s,l,A;s=o,l="change",A=r,a.useInsertionEffect(()=>s.on(l,A),[s,l,A]);const d=Ft(t,[0,.72,.84],[0,0,1]),m=Ft(t,[0,.71,.76],[.2,.2,0]),c=Ft(t,[0,.69,.74],[1,1,0]),h=Math.round(255*d),p=Math.round(255-238*d);return i.jsxs(ht,{children:[i.jsx(pt,{ref:e,children:i.jsxs(gt,{style:{backgroundColor:`rgb(${h}, ${h}, ${h})`,color:`rgb(${p}, ${p}, ${p})`},children:[mt.map(e=>i.jsx(Rt,{step:e,progress:t,reduceMotion:n},e.title)),i.jsx(ft,{"aria-hidden":"true",style:{opacity:m},children:i.jsx(ut,{style:{transform:`scaleX(${t})`}})}),i.jsxs(bt,{"aria-hidden":"true",style:{opacity:c},children:[i.jsx(T,{}),i.jsx("span",{children:"Scroll"})]})]})}),i.jsx(Ct,{"aria-labelledby":"faq-heading",children:i.jsxs(Bt,{children:[i.jsx(Et,{id:"faq-heading",children:"Frequently asked questions"}),i.jsx(Mt,{children:ct.map(e=>i.jsxs(zt,{children:[i.jsxs(Lt,{"data-cursor":"link",children:[i.jsx("span",{children:e.question}),i.jsx(X,{"aria-hidden":"true"})]}),i.jsx(Wt,{children:e.answer})]},e.question))})]})})]})},Zt=a.lazy(()=>r(()=>t.import("./three-legacy-zFXQC5jR.js"),void 0,t.meta.url)),Dt=({desktop:e,desktopAvif:t,desktopWebp:r,mobile600:a,mobile900:n,mobile600Avif:o,mobile900Avif:s,mobile600Webp:l,mobile900Webp:A,alt:d})=>i.jsxs("picture",{children:[i.jsx("source",{srcSet:o,type:"image/avif",media:"(max-width: 650px)"}),i.jsx("source",{srcSet:s,type:"image/avif",media:"(max-width: 900px)"}),i.jsx("source",{srcSet:t,type:"image/avif"}),i.jsx("source",{srcSet:l,type:"image/webp",media:"(max-width: 650px)"}),i.jsx("source",{srcSet:A,type:"image/webp",media:"(max-width: 900px)"}),i.jsx("source",{srcSet:r,type:"image/webp"}),i.jsx("source",{srcSet:a,type:"image/jpeg",media:"(max-width: 650px)"}),i.jsx("source",{srcSet:n,type:"image/jpeg",media:"(max-width: 900px)"}),i.jsx("img",{src:e,alt:d,style:{width:"100%",height:"100%",objectFit:"cover"},loading:"lazy"})]}),Tt=o`
  0% { transform: translate(-50%, -60%) rotate(0deg); }
  20% { transform: translate(-20%, -80%) rotate(90deg); }
  40% { transform: translate(10%, -40%) rotate(180deg); }
  60% { transform: translate(-40%, -20%) rotate(270deg); }
  80% { transform: translate(-70%, -50%) rotate(320deg); }
  100% { transform: translate(-50%, -60%) rotate(360deg); }
`,Xt=o`
  0% { transform: translate(60%, -50%) rotate(0deg); }
  20% { transform: translate(80%, -20%) rotate(90deg); }
  40% { transform: translate(40%, -70%) rotate(180deg); }
  60% { transform: translate(20%, -30%) rotate(270deg); }
  80% { transform: translate(70%, -60%) rotate(320deg); }
  100% { transform: translate(60%, -50%) rotate(360deg); }
`,It=o`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(6px); }
`,St=n.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4vw;
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
    background: rgba(255, 255, 255, 0.3);
    z-index: 0;
  }

  &::before {
    top: 20%;
    left: 10%;
    animation: ${Tt} 35s ease-in-out infinite;
  }

  &::after {
    top: 40%;
    left: 65%;
    animation: ${Xt} 40s ease-in-out infinite;
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
`,Yt=e=>i.jsx(Fe,{desktop:ue,desktopAvif:we,desktopWebp:be,mobile600:xe,mobile900:ve,mobile600Avif:ye,mobile900Avif:ke,mobile600Webp:je,mobile900Webp:Ce,alt:"Zack MacTavish portrait",loading:"eager",decoding:"async",fetchPriority:"high",className:"about-picture-img",style:e.style}),Gt=n.div`
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
`,Qt=n.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  z-index: 1;

  @media (max-width: 1000px) {
    width: 90vw;
    align-items: center;
    text-align: center;
    margin: 0 auto;
  }
`,qt=n.div`
  position: relative;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 500;
  font-size: clamp(1.2rem, 1vw + 0.85rem, 1.7rem);
  width: 32vw;
  max-width: 34rem;
  color: white;
  z-index: 1;

  @media (max-width: 1400px) {  
    font-size: 1.3rem;
  }

  @media (max-width: 1000px) {  
    width: 100%;
    max-width: 36rem;
    margin-top: 1vh;
    padding-bottom: 3vh;
    text-align: center;
    font-size: clamp(1.1rem, 2.8vw, 1.25rem);
  }

  @media (max-width: 850px) {
    font-size: clamp(1.05rem, 4vw, 1.2rem);
    padding-top: 2vh;
  }

  @media (max-width: 450px) {
    font-size: 1.05rem;
  }
`,Pt=n.div`
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
`,Nt=n.div`
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
`,Jt=n.div`
  animation: ${It} 1.5s infinite ease-in-out; /* animate only Y so X-centering stays intact */
  will-change: transform;
`,Ht=n.div`
  width: 24px;
  height: 24px;
  border-left: 3px solid white;
  border-bottom: 3px solid white;
  transform: rotate(-45deg);
  border-radius: 2px;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.35)); /* maintain visibility even near light backgrounds */
`,Ot=n.section`
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
`,Kt=n.div`
  width: 100%;
  max-width: 64rem;
  margin: 0 auto;
  padding: 0 1.5rem;
  box-sizing: border-box;

  @media (max-width: 480px) {
    padding: 0 1.25rem;
  }
`,Vt=n.div`
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
`,$t=n(s)`
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
`,_t=n.div`
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  filter: saturate(0.9);
  transition: filter 180ms ease;
`,ei=n.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.45), rgba(0,0,0,0.15));
  transition: background 180ms ease;
`,ti=n.div.attrs({"data-cursor":"link",role:"link"})`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 0.75rem; /* slightly below the image */
`,ii=n.h3`
  margin: 0;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 600;
  font-size: 1.15rem;
  color: ${e=>e.theme.strongText};
  transition: color 160ms ease;
`,ri=n.p`
  margin: 0;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.95rem;
  color: ${e=>e.theme.mutedText};
`,ai=n.div`
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
`,ni=n.h2`
  margin: 0;
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(1.4rem, 3vw, 2rem);
  color: ${e=>e.theme.strongText};
`,oi=n.p`
  margin: 0;
  font-family: 'Space Grotesk', sans-serif;
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
`;n.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  pointer-events: none;
  color: #111;
`;const si=n.div`
  display: flex;
  flex-direction: column;

  &:hover ${$t} {
    transform: translateY(-3px);
    box-shadow: 0 10px 36px rgba(0,0,0,0.12);
  }

  &:hover ${_t} {
    filter: saturate(1.08) brightness(1.05);
  }

  &:hover ${ei} {
    background: linear-gradient(to top, rgba(0,0,0,0.25), rgba(0,0,0,0.08));
  }

  &:hover ${ii} {
    color: ${e=>e.theme.backgroundColor};
  }
`,li=n.div`
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
`,Ai=n.div`
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
`,di=n.img.attrs({loading:"lazy",decoding:"async"})`
  width: 100%;
  height: auto;
  display: block; /* avoid inline image spacing quirks */
  object-fit: contain;
  border-radius: ${e=>e.theme.radii.card}; /* standardized card radius */
`,mi=n(qt)`
  width: 100%;
  min-width: 0; /* allow wrapping within grid cell */
  padding-right: 0;
  font-size: clamp(1.05rem, 1.6vw, 1.5rem); /* slightly smaller for better line length */
  line-height: 1.6; /* improve readability */
  color: white;

  /* Keep stacked text readable without becoming visually oversized on smaller screens */
  @media (max-width: 1000px) {
    font-size: clamp(1rem, 2.7vw, 1.2rem);
    line-height: 1.65;
  }
`,ci=n.div`
  overflow-y: hidden;
  width: 100vw;
`,hi=n.div`
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
`,pi=n.div`
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
`,gi=n.h1`
  font-size: clamp(16px, 5.5vw, 3.8rem);
  line-height: 1.2;
  color: white;
  font-family: 'Space Grotesk', sans-serif;
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
`,fi=n.p`
  font-size: clamp(14px, 2.5vw, 1.4rem);
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  font-family: 'Space Grotesk', sans-serif;
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
`,ui=n.a`
  display: inline-block;
  width: fit-content;
  padding: 0.85rem 2rem;
  background-color: white;
  color: #1a1a1a;
  font-family: 'Space Grotesk', sans-serif;
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
`,wi=n.div`
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
`,bi=Object.freeze(Object.defineProperty({__proto__:null,QuiltContainer:li,QuiltImage:di,QuiltInner:Ai,QuiltText:mi,default:({introDone:e=!0})=>{const[t,r]=a.useState(!1),[n,o]=a.useState(!1),[s,c]=a.useState(!1);return a.useLayoutEffect(()=>{window.scrollTo(0,0)},[]),a.useEffect(()=>{var e;if("undefined"==typeof window||!window.matchMedia)return;const t=window.matchMedia("(min-width: 1001px) and (pointer: fine) and (not (prefers-reduced-motion: reduce))"),i=()=>c(t.matches);return i(),null===(e=t.addEventListener)||void 0===e||e.call(t,"change",i),()=>{var e;return null===(e=t.removeEventListener)||void 0===e?void 0:e.call(t,"change",i)}},[]),a.useEffect(()=>{const e=()=>{!n&&window.scrollY>50&&(r(!1),o(!0))};return window.addEventListener("scroll",e,{passive:!0}),()=>window.removeEventListener("scroll",e)},[n]),a.useEffect(()=>{e&&(n||r(!0))},[e,n]),i.jsxs("div",{children:[i.jsx(l,{...d.landing,sameAs:A.sameAs,keywords:d.landing.keywords||A.keywords,siteDefaults:A}),i.jsxs(St,{children:[i.jsx(Gt,{children:i.jsx(Yt,{src:ue})}),i.jsxs(Qt,{children:[i.jsx(Pt,{children:i.jsx(W,{})}),i.jsx(qt,{$widthsize:"47vw",children:"Hi, I'm Zack MacTavish, a product designer based in Philadelphia, PA. I'm currently shaping shopping experiences at Microsoft."})]}),!n&&e&&i.jsx(Nt,{$visible:t,children:i.jsx(Jt,{children:i.jsx(Ht,{})})})]}),i.jsx(D,{}),i.jsx(R,{style:{backgroundColor:"var(--surface-subtle, #f7f7f7)"},children:i.jsx(U,{children:i.jsxs(Z,{style:{color:"var(--text-muted, #5d5d5d)"},children:["I’ve partnered with agencies including"," ",i.jsx("a",{href:"https://www.publicisgroupe.com/en",target:"_blank",rel:"noopener noreferrer",style:{color:"var(--text-muted, #5d5d5d)",textDecoration:"underline"},children:"Publicis Groupe"}),","," ",i.jsx("a",{href:"https://prairieandforge.com/",target:"_blank",rel:"noopener noreferrer",style:{color:"var(--text-muted, #5d5d5d)",textDecoration:"underline"},children:"Prairie & Forge"}),", and"," ",i.jsx("a",{href:"https://varfaj.com/",target:"_blank",rel:"noopener noreferrer",style:{color:"var(--text-muted, #5d5d5d)",textDecoration:"underline"},children:"Varfaj Partners"})," ","on work spanning UX, product, and brand design. My background includes agency experience in New York City and formal design training in Chicago. Client collaborations have included Microsoft, Walmart, Seagate Technology, and Chip Ganassi Racing."]})})}),i.jsx(Ut,{}),i.jsx(Ot,{children:i.jsxs(Kt,{children:[i.jsxs(ai,{children:[i.jsx(ni,{children:"My writing"}),i.jsx(oi,{children:i.jsx("a",{href:"https://medium.com/@zmactavish",target:"_blank",rel:"noopener noreferrer",children:"See my Medium Portfolio"})})]}),i.jsx(Vt,{children:[...Array(6)].map((e,t)=>{const r=0===t,a=1===t,n=2===t,o=3===t,s=5===t,l=4===t,A=r?"https://medium.com/design-bootcamp/76-features-in-figma-to-know-7dbb35cdb5a7":a?"https://medium.com/design-bootcamp/my-journey-as-a-product-designer-at-microsoft-a5325be417b5":n?"https://medium.com/design-bootcamp/12-features-to-consider-when-designing-an-e-commerce-mobile-app-740efbeee7c8":o?"https://medium.com/design-bootcamp/designing-in-the-8pt-grid-system-f3c1183ea6e8":l?"https://medium.com/@zmactavish/0643beac797a":s?"https://medium.com/@zmactavish/30-html-tags-to-know-b0a85b122ded":"https://medium.com/@zmactavish",d=r?"76 features in Figma to know":a?"My journey as a Product designer at Microsoft.":n?"12 features to consider when building an E-commerce app":o?"Designing in the 8pt grid system":l?"30 CSS styles to know":s?"30 HTML tags to know":"Medium",m=r?"A guide to all things Figma":a?"Shaping the shopping experience at Microsoft":n?"A practical UX checklist for e‑commerce mobile apps":o?"Consistent spacing for scalable UI components":l?"A beginner's guide to CSS for designers":"A beginner's guide to HTML for designers";let c=null;return r?c=i.jsx(Dt,{desktop:Re,desktopAvif:"data:image/avif;base64,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",desktopWebp:Re,mobile600:Ue,mobile900:Ze,mobile600Avif:"data:image/avif;base64,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",mobile900Avif:"data:image/avif;base64,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",mobile600Webp:Ue,mobile900Webp:Ze,alt:"76 features in Figma to know — article cover"}):a?c=i.jsx(Dt,{desktop:De,desktopAvif:Te,desktopWebp:De,mobile600:Se,mobile900:Ye,mobile600Avif:Xe,mobile900Avif:Ie,mobile600Webp:Se,mobile900Webp:Ye,alt:"My journey as a Product designer at Microsoft — article cover"}):n?c=i.jsx(Dt,{desktop:Ge,desktopAvif:Qe,desktopWebp:Ge,mobile600:Ne,mobile900:Je,mobile600Avif:qe,mobile900Avif:Pe,mobile600Webp:Ne,mobile900Webp:Je,alt:"12 features to consider when designing an e-commerce mobile app — article cover"}):o?c=i.jsx(Dt,{desktop:He,desktopAvif:Oe,desktopWebp:He,mobile600:$e,mobile900:_e,mobile600Avif:Ke,mobile900Avif:Ve,mobile600Webp:$e,mobile900Webp:_e,alt:"Designing in the 8pt grid system — article cover"}):l?c=i.jsx(Dt,{desktop:it,desktopAvif:rt,desktopWebp:at,mobile600:it,mobile900:it,mobile600Avif:rt,mobile900Avif:rt,mobile600Webp:at,mobile900Webp:at,alt:"Card 6"}):s&&(c=i.jsx(Dt,{desktop:et,desktopAvif:tt,desktopWebp:et,mobile600:et,mobile900:et,mobile600Avif:tt,mobile900Avif:tt,mobile600Webp:et,mobile900Webp:et,alt:"Card 5"})),i.jsxs(si,{children:[i.jsxs($t,{to:A,target:"_blank",rel:"noopener noreferrer","aria-label":r?"Medium article: 76 features in Figma to know":a?"Medium article: My journey as a Product designer at Microsoft.":n?"Medium article: 12 features to consider when building an E-commerce app":o?"Medium article: Designing in the 8pt grid system":l?"Medium article: 30 CSS styles to know":s?"Medium article: 30 HTML tags to know":`Medium writing card ${t+1}`,children:[i.jsx(_t,{as:"div",style:{background:"none",padding:0},children:c}),i.jsx(ei,{})]}),i.jsxs(ti,{children:[i.jsx(ii,{children:d}),i.jsx(ri,{children:m})]})]},`medium-card-${t}`)})})]})}),i.jsx(m,{imageSrc:Be,imageAvif:Ee,imageWebp:Me,imageAlt:"Quilt hanging",mobileSrc:ze,mobileAvif:Le,mobileWebp:We,style:{color:"#fff"},textSize:"1.4rem",textColor:"#fff",children:i.jsxs("div",{style:{lineHeight:"1.6"},children:["Outside of work, I live with my partner ",i.jsx("a",{href:"https://oliviazitasmith.com",target:"_blank",rel:"noopener noreferrer",style:{color:"inherit",textDecoration:"underline"},children:"Olivia Smith"}),", who is also an artist. In my own creative time, I focus on making quilts that combine photography, textile techniques, and mixed media, exploring the intersection of art, design, and storytelling."]})}),i.jsx(ci,{children:i.jsxs(hi,{children:[i.jsxs(pi,{children:[i.jsx(gi,{children:"Thanks for stopping by"}),i.jsx(fi,{children:"I'm also an artist. Check out my art portfolio."}),i.jsx(ui,{href:"https://zackmactavish.com",target:"_blank",rel:"noopener noreferrer",children:"View Portfolio"})]}),i.jsx(wi,{children:i.jsx(F,{fallback:null,children:s?i.jsx(a.Suspense,{fallback:i.jsx("div",{style:{height:"50vh"}}),children:i.jsx(Zt,{})}):i.jsxs("picture",{children:[i.jsx("source",{srcSet:At,type:"image/avif",media:"(max-width: 900px)"}),i.jsx("source",{srcSet:ot,type:"image/avif"}),i.jsx("source",{srcSet:dt,type:"image/webp",media:"(max-width: 900px)"}),i.jsx("source",{srcSet:st,type:"image/webp"}),i.jsx("source",{srcSet:lt,media:"(max-width: 900px)"}),i.jsx("img",{src:nt,alt:"","aria-hidden":"true",loading:"lazy",decoding:"async",style:{width:"100vw",height:"100%",objectFit:"cover",display:"block"}})]})})})]})})]})}},Symbol.toStringTag,{value:"Module"}));e("L",bi)}}});
