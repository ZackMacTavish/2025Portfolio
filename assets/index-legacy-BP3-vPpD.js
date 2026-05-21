System.register(["./three-legacy-DtSyZuBP.js","./vendor-legacy-BmQ_CjD0.js"],function(e,t){"use strict";var n,o,r,i,a,s,l,c,d,p,u,m,h,f,g;return{setters:[e=>{n=e.j,o=e._,r=e.c},e=>{i=e.u,a=e.l,s=e.c,l=e.b,c=e.d,d=e.R,p=e.L,u=e.K,m=e.B,h=e.e,f=e.f,g=e.N}],execute:function(){var x=document.createElement("style");x.textContent="body{margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}code{font-family:source-code-pro,Menlo,Monaco,Consolas,Courier New,monospace}@media(hover:none)and (pointer:coarse){.nav-hover-bridge{pointer-events:none!important}}@font-face{font-family:Space Grotesk;font-style:normal;font-weight:500 700;font-display:swap;src:url("+new URL("../fonts/SpaceGrotesk-latin.woff2",t.meta.url).href+') format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Space Grotesk;font-style:normal;font-weight:500 700;font-display:swap;src:url('+new URL("../fonts/SpaceGrotesk-latin-ext.woff2",t.meta.url).href+') format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}body{overflow-x:hidden;font-family:Space Grotesk,sans-serif}.App{padding:0;margin:0;overflow-x:hidden}.shortcuts-pill{position:fixed;right:1rem;bottom:1rem;z-index:110;border:1px solid #d1d5db;background:#fff;color:#111827;border-radius:999px;padding:.5rem .85rem;font-size:.8rem;font-weight:600;letter-spacing:.04em;cursor:pointer;box-shadow:0 6px 18px rgba(0,0,0,.12)}@media(max-width:767px),(hover:none),(pointer:coarse){.shortcuts-pill{display:none}}::-webkit-scrollbar{background:#000;width:auto}::-webkit-scrollbar-track{border-radius:100vw;margin-top:.2em;margin-bottom:.2em}::-webkit-scrollbar-thumb{background:linear-gradient(0deg,#000,#444);border:.1em solid rgba(68,68,68,.322);border-radius:100vw}@supports (scrollbar-color: red blue){*{scrollbar-color:hsl(0,0%,0%) rgb(68,68,68);scrollbar-width:thin}}\n/*$vite$:1*/',document.head.appendChild(x),e({b:function(e){return e.every(e=>H.has(e.src))},m:Z,p:_,s:Q,w:function(e){const t=e.map(e=>J(e.src));return Promise.all(t).catch(()=>{}),Promise.resolve()}});const y={fonts:{body:"Space Grotesk, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",heading:"Space Grotesk, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",mono:'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'},fontSizes:{xs:"0.75rem",sm:"0.875rem",md:"1rem",lg:"1.125rem",xl:"1.25rem",h3:"1.15rem",h2:"clamp(1.4rem, 3vw, 2rem)",h1:"clamp(2rem, 6vw, 4.8rem)"},lineHeights:{tight:1.1,snug:1.2,normal:1.5,relaxed:1.7},spacing:{xs:"4px",sm:"8px",md:"12px",lg:"16px",xl:"24px","2xl":"32px","3xl":"48px"},radii:{none:"0",sm:"6px",md:"10px",lg:"16px",xl:"18px",pill:"999px",round:"50%",card:"18px"}},b={...y,backgroundColor:"#3F4739",backgroundTwo:"#ffffff",fontColor:"#5D5D5D"},w={...y,backgroundColor:"#303030",backgroundTwo:"#303030",fontColor:"#a1a1a1"},v=i`
    :root {
        --radius-card: ${y.radii.card};
        --space-lg: ${y.spacing.lg};
    }
    * { box-sizing: border-box; }
    html, body, #root { min-height: 100%; }
    body {
        margin: 0;
        background-color: ${e=>e.theme.backgroundColor};
        color: ${e=>e.theme.fontColor};
        font-family: ${y.fonts.body};
    }
`,j=a`
  0% { transform: translateX(-40%) translateY(0); opacity: 1; }
  25% { transform: translateX(-35%) translateY(-5px); opacity: 0.9; }
  50% { transform: translateX(-30%) translateY(3px); opacity: 0.8; }
  75% { transform: translateX(-35%) translateY(-2px); opacity: 0.9; }
  100% { transform: translateX(-40%) translateY(0); opacity: 0.85; }
`,k=a`
  0% { transform: translateX(140%) translateY(0); opacity: 1; }
  25% { transform: translateX(135%) translateY(4px); opacity: 0.95; }
  50% { transform: translateX(130%) translateY(-3px); opacity: 0.9; }
  75% { transform: translateX(135%) translateY(2px); opacity: 0.95; }
  100% { transform: translateX(140%) translateY(0); opacity: 0.9; }
`,C=s.span`
  position: absolute;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0,255,255,0.6) 0%, rgba(255,192,203,0.35) 60%, transparent 100%);
  filter: blur(70px);
  pointer-events: none;
  z-index: 997;
`,S=s(C)`
  left: 0;
  animation: ${j} 6s ease-in-out infinite;
`,E=s(C)`
  right: 0;
  animation: ${k} 6s ease-in-out infinite;
`,U=a`
  0% { transform: translateX(0); opacity: 1; }
  33% { transform: translateX(calc(100vw - 650px)); opacity: 1; }
  66% { transform: translateX(0); opacity: 1; }
  85% { transform: translateX(50vw); opacity: 0; }
  100% { transform: translateX(0); opacity: 0; }
`,z=s.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(0,0,0,0.6);
  backdrop-filter: blur(6px);
  position: fixed;
  width: 100vw;
  height: 8vh;
  padding: 0 3vw;
  z-index: 1000;
`,F=s.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 8px;
  pointer-events: none;
  overflow: visible;
`,D=s.span`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 650px;
  height: 1pt;
  background-color: #E88D67;
  mask-image: linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%);
  -webkit-mask-image: linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%);
  animation: ${U} 10s ease-in-out forwards;
  z-index: 998;
`,M=s.span`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 650px;
  height: 4px;
  background: linear-gradient(to right, #FF8D67, #E88D67, #FFAA88);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  filter: blur(20px);
  mask-image: linear-gradient(to right, transparent 5%, black 15%, black 85%, transparent 95%);
  -webkit-mask-image: linear-gradient(to right, transparent 5%, black 15%, black 85%, transparent 95%);
  animation: ${U} 10s ease-in-out forwards;
  z-index: 999;
`,A=a`
  0% { background-position: 0% 0; }
  50% { background-position: 50% 0; }
  100% { background-position: 0% 0; }
`,P=s.span`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 700px; 
  height: 16px;
  background: linear-gradient(
    to right,
    transparent 0%, 
    #ff6ec7 10%, 
    #ff1493 50%, 
    #ff6ec7 85%, 
    transparent 100%
  );
  background-size: 100% 100%;
  background-repeat: no-repeat;
  filter: blur(36px);
  mask-image: linear-gradient(to top, black 0%, transparent 100%);
  -webkit-mask-image: linear-gradient(to top, black 0%, transparent 100%);
  animation: ${U} 10s ease-in-out forwards;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to right,
      transparent 0%,
      rgba(255, 30, 150, 0.8) 35%,
      rgba(255, 30, 150, 1) 50%,
      rgba(255, 30, 150, 0.8) 65%,
      transparent 100%
    );
    background-size: 100% 100%;
    background-repeat: no-repeat;
    animation: ${A} 2s ease-in-out infinite;
  }

  &::before {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    width: 60px;
    height: 100%;
    background: linear-gradient(to right, rgba(255, 30, 150, 0.2), transparent);
    pointer-events: none;
  }

  z-index: 1001;
`,L=s.img`
  width: clamp(46px, 2.6vw, 90px);
  max-height: 5vh;
  object-fit: contain;
  transition: all 0.3s ease;

  &:hover {
    filter: invert(0.2) sepia(0.5) saturate(11.7) hue-rotate(313.2deg) brightness(1.2);
  }
`,R=s.div`
  display: flex;
  align-items: stretch;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  padding-right: 6vw;
  max-width: calc(100vw - 6vw);
`,$=s.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2.5rem;
  height: 100%;

  @media (max-width: 1200px) { gap: 1.5rem; }
  @media (max-width: 800px) { gap: 1rem; font-size: 1rem; }
  /* Remove mobile column layout so header nav stays in header */
  /* The dropdown menu handles mobile project links */
  
`,T=s.span`
  color: #a6d1ca;
  font-weight: 800;
  font-size: 1.2rem;
  text-decoration: none;
  padding: 0.5rem 0;
  transition: all 0.3s ease;
  cursor: default;

  &:hover {
    opacity: 0.85;
    transform: translateY(-1px);
  }
`,G=s.li`
  position: relative;
  white-space: nowrap;
  display: flex;
  align-items: center;
  height: 100%;

  /* enable hover-open for devices that support hover (desktop) */
  @media (hover: hover) {
    &:hover > div {
      display: block;
    }
  }
`,B=s(p)`
  color: #a6d1ca;
  font-weight: 800;
  font-size: 1.2rem;
  text-decoration: none;
  padding: 0.5rem 0;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.85;
    transform: translateY(-1px);
  }
`,I=s.button`
  position: absolute;
  top: 18px;
  right: 18px;
  width: 44px;
  height: 44px;
  background: none;
  border: none;
  color: #fff;
  font-size: 2.25rem;
  font-weight: 700;
  z-index: 1300;
  cursor: pointer;
  opacity: 0.85;
  display: none;
  transition: opacity 0.2s;
  &:hover { opacity: 1; }
  @media (max-width: 850px) {
    display: block;
  }
`,X=s.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0,0,0,0.6);
  backdrop-filter: blur(6px);
  border-radius: 0 0 0.25rem 0.25rem;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  display: ${e=>e.$open?"block":"none"};
  min-width: 10rem;
  z-index: 1200;

  @media (max-width: 850px) {
    position: fixed;
    top: 0;
    left: 0;
    transform: none;
    width: 100vw;
    height: 100vh;
    height: 100dvh;
    min-width: unset;
    border-radius: 0;
    display: ${e=>e.$open?"flex":"none"};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0,0.97);
    backdrop-filter: none;
    box-shadow: none;
    padding: 0;
    gap: 0.5rem;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }
`,O=s(p)`
  display: block;
  padding: 0.75rem 1rem;
  color: white;
  text-decoration: none;
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    background-color: rgba(166, 209, 202, 0.4);
    color: white;
  }

  @media (max-width: 850px) {
    font-family: 'Space Grotesk', sans-serif;
    font-size: clamp(1.5rem, 6vw, 2rem);
    font-weight: 600;
    padding: 0.6rem 1.5rem;
    text-align: center;
    min-height: 44px;
    width: auto;
  }
`;function Y(){const[e,t]=l.useState(!1),o=c(),r=d.useRef();l.useEffect(()=>{t(!1)},[o.pathname]),l.useEffect(()=>{if("undefined"==typeof document)return;const t="undefined"!=typeof window&&window.matchMedia("(max-width: 850px)").matches;if(!e||!t)return;const n=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=n}},[e]),l.useEffect(()=>{if(!e)return;if("undefined"==typeof window)return;if(!window.matchMedia("(hover: none) and (pointer: coarse)").matches)return;const n=e=>{r.current&&!r.current.contains(e.target)&&t(!1)};return document.addEventListener("mousedown",n),document.addEventListener("touchstart",n),()=>{document.removeEventListener("mousedown",n),document.removeEventListener("touchstart",n)}},[e]);const i=()=>t(!1);return n.jsxs(z,{children:[n.jsx(p,{to:"/MacTavish",style:{cursor:"none"},children:n.jsx(L,{src:"data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2025.4.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%20236.2%20238.3'%20style='enable-background:new%200%200%20236.2%20238.3;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%23FFFFFF;}%20.st1{fill:%23678983;}%20.st2{fill:%2395C4BC;}%20%3c/style%3e%3cpath%20class='st0'%20d='M236,124.2c-0.1-0.2-0.2-0.4-0.4-0.5L236,124.2L236,124.2z'/%3e%3cpath%20class='st1'%20d='M208.3,93c0.7-0.8,1.8-1.1,2.8-1c3.1,0.4,6,1.5,8.6,3.1c2.6,1.5,4.9,3.4,6.9,5.7c1.8,2.1,2.6,3.8,2.5,5%20c-0.1,0.9-0.4,1.7-0.8,2.5c-0.4,0.8-0.9,1.1-1.5,1c-0.7-0.1-1.4-0.4-2.1-0.8c-0.3-0.2-1.2-0.6-2.6-1.4c-1.7-0.9-3.5-1.6-5.3-2.1%20c-2.3-0.7-4.7-1.2-7.2-1.5c-2.4-0.3-3.4-2.1-3-5.4l0.2-1.6C206.9,95.3,207.4,94,208.3,93z'/%3e%3cpath%20class='st2'%20d='M176.6,117.4c-1.7,0.9-3.9,0.3-4.8-1.4c-0.9-1.7-0.3-3.9,1.4-4.8c0,0,0.1-0.1,0.1-0.1%20c6.8-3.5,14.3-5.7,21.9-6.4l6.5-41.1c0.9-5.5,1.7-11.2,0.9-16.7c-0.8-5.6-3.6-11.1-8.6-13.8c-4.9-2.7-10.9-2.2-15.8,0.1%20s-8.9,6.4-12.2,10.8c-20,26.3-19.4,48.4-28.4,94.2h-5.2c0-0.3,0.1-0.6,0.1-0.9l13.1-81.7c1.1-6.7,2.1-13.5,0.9-20.1%20c-1.2-6.6-5.2-13.2-11.5-15.6c-5.7-2.2-12.4-0.6-17.4,3s-8.7,8.7-11.7,14C99.3,48.2,95,60.6,91.8,73.4c0.2-22.7-4.4-40.6-13.8-53.5%20C70.3,9.2,58.5,2.1,45.4,0.4h-0.3C24.5-2.4,5.6,12.1,2.8,32.8s11.7,39.6,32.4,42.3c18.1,2.4,35.4-8.5,40.9-26%20c-0.5-2.1-1.2-4.3-2-6.3c-4.6-11.7-13.8-21.1-25.3-26c-1.8-0.8-2.6-3-1.7-4.7c0.8-1.7,2.8-2.5,4.5-1.8c19,8.1,30.8,25.9,32.7,46.2%20c1.4,14.8,0,30.4-2.1,45c-1.1,7.6-2.6,15.1-4.3,22.6c-0.4,2-6.1,21.7-5.6,22c3.5,1.9,6.9,4.1,10.1,6.6c1.6,1.2,1.8,3.5,0.6,5%20c-1.2,1.6-3.5,1.8-5,0.6l0,0c-23.6-18.3-49.2-15.5-66.9,7.2c-17.4,22.4-14,54.5,7.7,72.8l55.3-20.7c0.6-0.4,1.2-0.9,1.7-1.3%20c5.4-4.8,6.9-12.5,8.1-19.7l17.1-103c0.4-2.2,0.8-4.5,2.2-6.2c1.4-1.7,4.1-2.6,5.9-1.3c1.8,1.3,1.7,4.1,1.4,6.4L95.2,209%20c12.7-3.9,25.2-8.2,37.5-13c3.4-1.3,6.8-2.7,9.3-5.4c3-3.3,3.9-8,4.7-12.4l14.4-83.1c0.2-1.9,0.8-3.8,1.9-5.4%20c1.2-1.5,3.5-2.3,5.1-1.3c1.8,1.2,1.7,3.8,1.5,6l-7.7,60.9c-0.8,6.7-1.7,13.6-0.3,20.2c1.2,5.4,4.1,10.6,8.6,13.6%20c1,0.7,2.2,1.3,3.4,1.7c7.1,2.5,14.9-0.5,21.3-4.4c21.8-13.2,36.9-35.2,41.3-60.3c0-0.2,0.1-0.3,0.1-0.5%20C220.1,110.6,196.2,107.2,176.6,117.4z'/%3e%3c/svg%3e"})}),n.jsxs(R,{children:[n.jsxs($,{children:[n.jsxs(G,{children:[n.jsx(T,{role:"presentation","aria-haspopup":"true","aria-expanded":e,style:{cursor:"default"},onClick:e=>{"undefined"!=typeof window&&window.matchMedia("(hover: none)").matches?t(e=>!e):e.preventDefault()},children:"Projects"}),n.jsx("div",{style:{position:"absolute",left:"-20px",top:"0",width:"120px",height:"100%",background:"transparent",border:"none",pointerEvents:"auto",zIndex:1100},className:"nav-hover-bridge"}),n.jsxs(X,{$open:e,ref:r,children:[n.jsx(I,{"aria-label":"Close menu",onClick:i,style:{display:e?void 0:"none"},children:"×"}),n.jsx(O,{to:"/Microsoft",onClick:i,children:"Microsoft"}),n.jsx(O,{to:"/Outsource",onClick:i,children:"Outsource"}),n.jsx(O,{to:"/Ux",onClick:i,children:"Leysi"}),n.jsx(O,{to:"/Piton",onClick:i,children:"Piton"}),n.jsx(O,{to:"/ThreePillars",onClick:i,children:"Three Pillars"}),n.jsx(O,{to:"/AccessDirect",onClick:i,children:"Access Direct"}),n.jsx(O,{to:"/Giga",onClick:i,children:"Giga"}),n.jsx(O,{to:"/GraphicDesign",onClick:i,children:"Graphic Design"})]})]}),n.jsx(G,{children:n.jsx(B,{to:"/Resume",children:"Resume"})})]}),n.jsxs(F,{children:[n.jsx(D,{}),n.jsx(M,{}),n.jsx(P,{}),n.jsx(S,{}),n.jsx(E,{})]})]})]})}s.div`
  height: 1px;
  background-color: rgba(255, 255, 255, 0.3);
  margin: 0.25rem 0;
`;class N extends d.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(e){return{hasError:!0}}componentDidCatch(e,t){this.props.onError&&this.props.onError(e,t)}render(){return this.state.hasError?this.props.fallback||n.jsx("div",{style:{color:"red",padding:"2rem",textAlign:"center"},children:"Something went wrong loading this section."}):this.props.children}}e("E",N);const H=new Set,K=new Map,W=e("C",1400);let V=!1;const q=1;function J(e,t=0){if(H.has(e))return Promise.resolve(!0);const n=0===t?K.get(e):void 0;if(n)return n;const o=new Promise(n=>{const o=new Image;o.decoding="async";let r=!1;const i=o=>{r||(r=!0,o&&H.add(e),0===t&&K.delete(e),n(o))};o.onload=async()=>{if("function"==typeof o.decode)try{await o.decode()}catch{return void i(!1)}i(!0)},o.onerror=()=>{t<q?J(e,t+1).then(i):i(!1)},o.src=e,o.complete&&Promise.resolve().then(async()=>{if("function"==typeof o.decode)try{await o.decode()}catch{return void i(!1)}i(!0)})});return 0===t&&K.set(e,o),o}async function _(e){const t=e.map(e=>J(e.src));return(await Promise.all(t)).every(Boolean)}async function Z(e){const t=performance.now(),n=await _(e);return{duration:performance.now()-t,allDecoded:n}}async function Q(e,t=W,n){var o;if("undefined"==typeof window)return!0;const r=null===(o=null==n?void 0:n.lockSessionOnFailure)||void 0===o||o;if("undefined"!=typeof window&&["localhost","127.0.0.1","::1"].includes(window.location.hostname)){const{allDecoded:t}=await Z(e);return t}if(r&&V)return!1;const i=Z(e),a=new Promise(e=>{window.setTimeout(()=>e(!1),t)}),s=await Promise.race([i.then(({duration:e,allDecoded:n})=>n&&e<=t),a]);return!s&&r&&(V=!0),s}const ee=e("l",""+new URL("LeysiApp—Screens copy-DubS4EOU.jpg",t.meta.url).href),te=e("T",""+new URL("ThreePillars—pages-Cq3ArbG9.jpg",t.meta.url).href),ne=e("a",""+new URL("Piton—Screens-CUjjJnWT.jpg",t.meta.url).href),oe=e("g",""+new URL("BrandGuidelines—Mockup-Bw54MIwH.jpg",t.meta.url).href),re=l.lazy(()=>o(()=>t.import("./LandingPage-legacy-kC_nF5Rr.js").then(e=>e.L),void 0,t.meta.url)),ie=l.lazy(()=>o(()=>t.import("./CaseStudyTransition-legacy-DklXoIP2.js"),void 0,t.meta.url)),ae=s.div`
  display: flex;
  justify-content: center;
  align-items: center;
    width: 100vw;
    height: 100vh;
    @media (max-width: 900px) {
      height: 100dvh;
    }
  background-color: ${({$background:e})=>e};
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: 10;
  clip-path: inset(0% 0% 0% 0%);
`,se=s.h1`
  margin: 0;
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2.1rem, 7vw, 6.2rem);
  letter-spacing: 0.04em;
  color: #000;
  position: relative;
  text-align: center;
  z-index: 60;
  line-height: 1.04;

  @media (max-width: 900px) {
    letter-spacing: 0.03em;
  }
`,le=s.div`
  position: relative;
  z-index: 60;
`,ce=s.span`
  display: inline-block;
  overflow: hidden;
  vertical-align: top;
`,de=s.span`
  display: inline-block;
  will-change: transform, opacity;
  opacity: 0;
`,pe=s.div`
  position: absolute;
  right: clamp(18px, 2.8vw, 40px);
  bottom: clamp(18px, 2.8vw, 40px);
  z-index: 60;
  color: ${({$color:e})=>e};
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(0.9rem, 1.35vw, 1.2rem);
  letter-spacing: 0.08em;
`,ue=[{src:"/assets/HP.png",alt:"Microsoft shopping ecosystem preview",objectPosition:"top center"},{src:ee,alt:"Leysi project preview"},{src:te,alt:"ThreePillars project preview"},{src:ne,alt:"Piton project preview"},{src:oe,alt:"Outsource project preview"}];function me(){const e="ZACHARY MACTAVISH.",r="#ffffff",[i,a]=l.useState("000%"),[s,c]=l.useState(!0),[d]=l.useState(()=>function(e){const t=[...e];for(let n=t.length-1;n>0;n-=1){const e=Math.floor(Math.random()*(n+1));[t[n],t[e]]=[t[e],t[n]]}return t}(ue)),[p,u]=l.useState(!1),[m,h]=l.useState(!1),f=l.useRef(null),g=l.useRef([]),x=function(){const[e,t]=l.useState(()=>!("undefined"==typeof window||!window.matchMedia)&&window.matchMedia("(prefers-reduced-motion: reduce)").matches);return l.useEffect(()=>{var e;if("undefined"==typeof window||!window.matchMedia)return;const n=window.matchMedia("(prefers-reduced-motion: reduce)"),o=()=>t(n.matches);return null===(e=n.addEventListener)||void 0===e||e.call(n,"change",o),()=>{var e;return null===(e=n.removeEventListener)||void 0===e?void 0:e.call(n,"change",o)}},[]),e}(),y=p,b=r;return l.useEffect(()=>{let e=!1;return function(){var e,t,n;if("undefined"==typeof window||"undefined"==typeof navigator)return!1;const o=null!==(e=null===(t=(n=window).matchMedia)||void 0===t?void 0:t.call(n,"(hover: none) and (pointer: coarse)").matches)&&void 0!==e&&e,r=navigator.userAgent,i=/iPhone|iPad|iPod/i.test(r),a=/Safari/i.test(r)&&/Mobile/i.test(r)&&!/CriOS|Chrome|FxiOS|EdgiOS/i.test(r);return o&&(i||a)}()?(h(!1),u(!0),()=>{e=!0}):(Q(d,void 0,{lockSessionOnFailure:!1}).then(t=>{e||(h(t),u(!0))}).catch(()=>{e||(h(!1),u(!0))}),()=>{e=!0})},[d]),l.useEffect(()=>{if(!s)return;const e=document.body.style.overflow,t=document.body.style.paddingRight,n=window.innerWidth-document.documentElement.clientWidth;return document.body.style.overflow="hidden",n>0&&(document.body.style.paddingRight=`${n}px`),()=>{document.body.style.overflow="hidden"===e?"":e,document.body.style.paddingRight=t&&"0px"!==t?t:""}},[s]),l.useLayoutEffect(()=>{if(!s||!y)return;if(x)return a("100%"),void c(!1);let e=!1,n=null;return o(async()=>{const{gsap:e}=await t.import("./index-legacy-DfhH7qLc.js");return{gsap:e}},void 0,t.meta.url).then(({gsap:t})=>{if(e)return;const o=g.current.filter(Boolean),r={value:0};t.set(o,{yPercent:110,autoAlpha:0}),t.set(f.current,{clipPath:"inset(0% 0% 0% 0%)"});const i=t.timeline({onComplete:()=>{c(!1),window.dispatchEvent(new Event("intro-animation-done"))}});i.to(r,{value:100,duration:2.5,ease:"power2.inOut",onUpdate:()=>{a(`${String(Math.round(r.value)).padStart(3,"0")}%`)}}),i.to(o,{yPercent:0,autoAlpha:1,duration:.8,stagger:.04,ease:"power3.out"},"-=2"),i.to(f.current,{clipPath:"inset(0% 0% 100% 0%)",duration:.8,ease:"power4.inOut"}),n=i}),()=>{e=!0,n&&n.kill()}},[s,x,y]),n.jsxs(n.Fragment,{children:[n.jsx(l.Suspense,{fallback:null,children:n.jsx(re,{introDone:!s})}),s&&n.jsxs(ae,{ref:f,$background:b,style:{backgroundColor:b,position:"fixed",inset:0},children:[!y&&n.jsx("div",{style:{position:"absolute",inset:0,background:b,zIndex:1}}),m&&y&&n.jsx(l.Suspense,{fallback:null,children:n.jsx(ie,{images:d,isActive:s,onComplete:()=>{},overlayColor:r,loadingBackgroundColor:r})}),y&&n.jsx(le,{children:n.jsx(se,{"aria-label":e,children:Array.from(e).map((e,t)=>n.jsx(ce,{children:n.jsx(de,{ref:e=>{g.current[t]=e},children:" "===e?" ":e})},`intro-char-${t}`))})}),n.jsx(pe,{$color:"#111111",children:i})]})]})}const he=l.lazy(()=>o(()=>t.import("./LandingPage-legacy-kC_nF5Rr.js").then(e=>e.L),void 0,t.meta.url)),fe=l.lazy(()=>o(()=>t.import("./customcursor-legacy-Cfev6OTY.js"),void 0,t.meta.url));l.lazy(()=>o(()=>t.import("./index-legacy-Cqpi6H7r.js"),void 0,t.meta.url).then(e=>({default:e.Agentation})));const ge=l.lazy(()=>o(()=>t.import("./Resume-legacy-Ca_TQoh5.js"),void 0,t.meta.url)),xe=l.lazy(()=>o(()=>t.import("./AD-legacy-DwdavxwC.js"),void 0,t.meta.url)),ye=l.lazy(()=>o(()=>t.import("./Giga-legacy-472XEL4t.js"),void 0,t.meta.url)),be=l.lazy(()=>o(()=>t.import("./Graphicdesign-legacy-BHfg3ETM.js"),void 0,t.meta.url)),we=l.lazy(()=>o(()=>t.import("./Outsource-legacy-CvZBNB_W.js"),void 0,t.meta.url)),ve=l.lazy(()=>o(()=>t.import("./UX-legacy-BZD_Gsb-.js"),void 0,t.meta.url)),je=l.lazy(()=>o(()=>t.import("./ThreePillars-legacy-CYJRyYWu.js"),void 0,t.meta.url)),ke=l.lazy(()=>o(()=>t.import("./Piton-legacy-e_JLtBD1.js"),void 0,t.meta.url)),Ce=l.lazy(()=>o(()=>t.import("./Microsoft-legacy-D9OZNSeP.js"),void 0,t.meta.url)),Se=l.lazy(()=>o(()=>t.import("./BusinessConnectors-legacy-DZNnpz_p.js"),void 0,t.meta.url)),Ee=l.lazy(()=>o(()=>t.import("./CopilotPay-legacy-UIi79BFN.js"),void 0,t.meta.url)),Ue=l.lazy(()=>o(()=>t.import("./Journeys-legacy-DMrtQbC3.js"),void 0,t.meta.url));function ze(){const[e,t]=l.useState("light"),[o,r]=l.useState(!1),[i,a]=l.useState(!1),[s,c]=l.useState(!1),d=l.useRef(null),p=l.useRef(null);l.useEffect(()=>{var e;if("undefined"==typeof window||!window.matchMedia)return;const t=window.matchMedia("(hover: hover) and (pointer: fine)"),n=()=>c(t.matches);return n(),null===(e=t.addEventListener)||void 0===e||e.call(t,"change",n),()=>{var e;return null===(e=t.removeEventListener)||void 0===e?void 0:e.call(t,"change",n)}},[]),l.useEffect(()=>{const e=e=>{const t=e.target;t instanceof HTMLElement&&("INPUT"===t.tagName||"TEXTAREA"===t.tagName||"SELECT"===t.tagName||t.isContentEditable)||(("?"===e.key||"/"===e.key&&e.shiftKey)&&(e.preventDefault(),r(!0)),"Escape"===e.key&&r(!1))};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[]),l.useEffect(()=>{if(!o)return;p.current=document.activeElement;const e=document.body.style.overflow,t=document.body.style.paddingRight,n=window.innerWidth-document.documentElement.clientWidth;n>0&&(document.body.style.paddingRight=`${n}px`),document.body.style.overflow="hidden";const r=window.setTimeout(()=>{var e;null===(e=d.current)||void 0===e||e.focus()},0);return()=>{window.clearTimeout(r),document.body.style.overflow=e,document.body.style.paddingRight=t,p.current instanceof HTMLElement&&"true"!==p.current.getAttribute("data-carousel-frame")&&p.current.focus()}},[o]);const x=()=>{r(!1)};return l.useEffect(()=>{function e(){a(!0)}return window.addEventListener("intro-animation-done",e),()=>window.removeEventListener("intro-animation-done",e)},[]),n.jsxs(u,{theme:"light"===e?b:w,children:[n.jsx(v,{}),n.jsxs("div",{className:"App",children:[n.jsxs(m,{children:[s&&n.jsx(l.Suspense,{fallback:null,children:n.jsx(fe,{})}),n.jsx(Y,{}),i&&n.jsx("button",{type:"button",className:"shortcuts-pill",onClick:()=>r(!0),"aria-label":"Open keyboard shortcuts help",children:"? Shortcuts"}),o&&n.jsx("div",{role:"presentation",onClick:x,style:{position:"fixed",inset:0,zIndex:120,background:"rgba(0, 0, 0, 0.55)",display:"grid",placeItems:"center",padding:"1.25rem"},children:n.jsxs("div",{ref:d,role:"dialog","aria-modal":"true","aria-labelledby":"keyboard-shortcuts-title","aria-describedby":"keyboard-shortcuts-description",tabIndex:-1,onClick:e=>e.stopPropagation(),onKeyDown:e=>{if("Escape"===e.key)return e.preventDefault(),void x();if("Tab"!==e.key)return;const t=d.current;if(!t)return;const n=t.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');if(0===n.length)return e.preventDefault(),void t.focus();const o=n[0],r=n[n.length-1];if(e.shiftKey&&document.activeElement===o)return e.preventDefault(),void r.focus();e.shiftKey||document.activeElement!==r||(e.preventDefault(),o.focus())},style:{width:"min(520px, 100%)",background:"#ffffff",color:"#111827",borderRadius:"14px",border:"1px solid #e5e7eb",boxShadow:"0 30px 80px rgba(0, 0, 0, 0.35)",padding:"1.2rem 1.2rem 1rem"},children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"1rem"},children:[n.jsx("h2",{id:"keyboard-shortcuts-title",style:{margin:0,fontSize:"1.05rem",fontWeight:700},children:"Keyboard Shortcuts"}),n.jsx("button",{type:"button",onClick:x,"aria-label":"Close keyboard shortcuts help",style:{border:"1px solid #d1d5db",background:"#ffffff",borderRadius:"8px",padding:"0.25rem 0.5rem",cursor:"pointer"},children:"Esc"})]}),n.jsx("p",{id:"keyboard-shortcuts-description",style:{margin:"0.75rem 0 1rem",color:"#4b5563",fontSize:"0.92rem"},children:"Use these shortcuts to navigate transitions and media quickly."}),n.jsxs("ul",{style:{listStyle:"none",margin:0,padding:0,display:"grid",gap:"0.6rem"},children:[n.jsxs("li",{style:{display:"flex",justifyContent:"space-between",gap:"1rem"},children:[n.jsx("strong",{children:"? "}),n.jsx("span",{children:"Open this help panel"})]}),n.jsxs("li",{style:{display:"flex",justifyContent:"space-between",gap:"1rem"},children:[n.jsx("strong",{children:"Esc"}),n.jsx("span",{children:"Skip case study transition animation"})]}),n.jsxs("li",{style:{display:"flex",justifyContent:"space-between",gap:"1rem"},children:[n.jsx("strong",{children:"Esc"}),n.jsx("span",{children:"Close this panel"})]}),n.jsxs("li",{style:{display:"flex",justifyContent:"space-between",gap:"1rem"},children:[n.jsx("strong",{children:"← / →"}),n.jsx("span",{children:"Navigate image carousel slides"})]})]})]})}),n.jsx(l.Suspense,{fallback:n.jsx("div",{style:{position:"fixed",inset:0,zIndex:100,background:"light"===e?b.backgroundColor:w.backgroundColor,color:"light"===e?b.fontColor:w.fontColor,display:"grid",placeItems:"center",fontFamily:"Space Grotesk, sans-serif",letterSpacing:"0.04em"},children:"Loading…"}),children:n.jsxs(h,{children:[n.jsx(f,{path:"/",element:n.jsx(me,{})}),n.jsx(f,{path:"/MacTavish",element:n.jsx(N,{fallback:n.jsx("div",{style:{color:"red",padding:"2rem",textAlign:"center"},children:"Sorry, something went wrong loading the landing page."}),children:n.jsx(he,{})})}),n.jsx(f,{path:"/Giga",element:n.jsx(ye,{})}),n.jsx(f,{path:"/AccessDirect",element:n.jsx(xe,{})}),n.jsx(f,{path:"/Outsource",element:n.jsx(we,{})}),n.jsx(f,{path:"/GraphicDesign",element:n.jsx(be,{})}),n.jsx(f,{path:"/Ux",element:n.jsx(ve,{})}),n.jsx(f,{path:"/ThreePillars",element:n.jsx(je,{})}),n.jsx(f,{path:"/Piton",element:n.jsx(ke,{})}),n.jsx(f,{path:"/Microsoft",element:n.jsx(Ce,{})}),n.jsx(f,{path:"/BusinessConnectors",element:n.jsx(Se,{})}),n.jsx(f,{path:"/CopilotPay",element:n.jsx(Ee,{})}),n.jsx(f,{path:"/Journeys",element:n.jsx(Ue,{})}),n.jsx(f,{path:"/Resume",element:n.jsx(ge,{})}),n.jsx(f,{path:"*",element:n.jsx(g,{to:"/",replace:!0})})]})})]}),!1]})]})}r.createRoot(document.getElementById("root")).render(n.jsx(l.StrictMode,{children:n.jsx(ze,{})}))}}});
