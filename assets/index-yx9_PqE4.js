const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Resume-BnQyFaBA.js","./three-D9NkSzoP.js","./vendor-D7aqownG.js","./index-OWNjQ_yi.js","./AD-pta5sKp8.js","./Graphicdesign-B9_F-ZrU.js","./Grid60-DIOAOb55.js","./LandingPage-CDbLHaDO.js","./LeysiApp—Screens copy-CsLIUfOG.js","./ThreePillars—pages-De3L89hY.js","./Group 55618@2x-DJ5DP13a.js","./BrandGuidelines—Mockup-KdAEjx2l.js","./Outsource-yUaxyB1d.js","./UX-500d_f-K.js","./ThreePillars-BM0P0lOb.js","./Piton-DKbL4sBA.js","./Microsoft-3Aul5FKU.js","./IntroAnimation-CyhBCX8c.js"])))=>i.map(i=>d[i]);
import{j as e,_ as p,c as D}from"./three-D9NkSzoP.js";import{u as A,c as s,b as t,l as k,d as M,R as T,L as y,K as O,H as I,e as F,f as u,N as $}from"./vendor-D7aqownG.js";(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))d(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&d(i)}).observe(document,{childList:!0,subtree:!0});function a(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function d(o){if(o.ep)return;o.ep=!0;const r=a(o);fetch(o.href,r)}})();const v={fonts:{body:"Space Grotesk, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",heading:"Space Grotesk, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",mono:'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'},fontSizes:{xs:"0.75rem",sm:"0.875rem",md:"1rem",lg:"1.125rem",xl:"1.25rem",h3:"1.15rem",h2:"clamp(1.4rem, 3vw, 2rem)",h1:"clamp(2rem, 6vw, 4.8rem)"},lineHeights:{tight:1.1,snug:1.2,normal:1.5,relaxed:1.7},spacing:{xs:"4px",sm:"8px",md:"12px",lg:"16px",xl:"24px","2xl":"32px","3xl":"48px"},radii:{none:"0",sm:"6px",md:"10px",lg:"16px",xl:"18px",pill:"999px",round:"50%",card:"18px"}},X={backgroundColor:"#3F4739",backgroundTwo:"#ffffff",fontColor:"#5D5D5D"},G={backgroundColor:"#303030",backgroundTwo:"#303030",fontColor:"#a1a1a1"},N={...v,...X},V={...v,...G},Y=A`
    :root {
        --radius-card: ${v.radii.card};
        --space-lg: ${v.spacing.lg};
    }
    * { box-sizing: border-box; }
    html, body, #root { min-height: 100%; }
    body {
        margin: 0;
        background-color: ${n=>n.theme.backgroundColor};
        color: ${n=>n.theme.fontColor};
        font-family: ${v.fonts.body};
    }
`,H=A`
  html, body, * { cursor: none !important; }
  .hide-cursor, .hide-cursor * { cursor: none !important; }
  [data-agentation], [data-agentation] *, #feedback-toolbar, #feedback-toolbar * { cursor: auto !important; }
`,U=s.div`
  z-index: 2000;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  border: none;
  background-color: rgba(136,136,136,0.2);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  pointer-events: none;
  position: fixed;
  transform: translate3d(0,0,0) scale(1);
  will-change: transform;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  display: none;

  &.hovered {
    background-color: #E88D67;
    box-shadow: 0 0 12px 6px rgba(232,141,103,0.6);
  }

  &.visible {
    display: block;
  }
`,B=()=>{const[n,c]=t.useState(!1),a=t.useRef(null),d=t.useRef(!1),o=t.useRef(1),r=t.useRef({x:0,y:0});t.useRef({x:0,y:0});const i=t.useRef(!1),h=t.useRef(null);return t.useEffect(()=>{const g=window.matchMedia("(pointer: fine)").matches;if(/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)&&!g){c(!1);return}if(g){c(!0);return}const x=l=>{(l.sourceCapabilities&&!l.sourceCapabilities.firesTouchEvents||l.movementX!==0||l.movementY!==0)&&(c(!0),window.removeEventListener("mousemove",x))};return window.addEventListener("mousemove",x),()=>window.removeEventListener("mousemove",x)},[]),t.useEffect(()=>{if(!n)return;const g=25,_=25,x='a, button, input, textarea, select, [role="link"], [role="button"], [data-cursor="link"], [data-route], [data-routes-to], .nav-link, .router-link, .link, .btn';let l=null;const z=m=>{m&&m.closest&&!!m.closest(x)?(l&&(clearTimeout(l),l=null),d.current||(d.current=!0,a.current&&a.current.classList.add("hovered"))):d.current&&!l&&(l=setTimeout(()=>{l=null,d.current=!1,a.current&&a.current.classList.remove("hovered")},60))},L=m=>{if(!a.current)return;const b=m.clientX-g,C=m.clientY-_;r.current.x=b,r.current.y=C,i.current||(i.current=!0,a.current.classList.add("visible")),z(m.target),a.current.style.transform=`translate3d(${b}px, ${C}px, 0) scale(${o.current})`},w=()=>{a.current&&a.current.classList.remove("visible"),i.current=!1},E=()=>{document.visibilityState==="hidden"?w():i.current=!1},R=()=>{if(a.current&&i.current){const m=d.current?.3:1,b=m-o.current;o.current=Math.abs(b)<.01?m:o.current+b*.55,a.current.style.transform=`translate3d(${r.current.x}px, ${r.current.y}px, 0) scale(${o.current})`}h.current=requestAnimationFrame(R)};return document.addEventListener("mousemove",L),document.addEventListener("mouseleave",w),document.addEventListener("visibilitychange",E),h.current=requestAnimationFrame(R),()=>{document.removeEventListener("mousemove",L),document.removeEventListener("mouseleave",w),document.removeEventListener("visibilitychange",E),h.current&&cancelAnimationFrame(h.current),l&&clearTimeout(l)}},[n]),e.jsxs(e.Fragment,{children:[n&&e.jsx(H,{}),n&&e.jsx(U,{ref:a})]})},K="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2025.4.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%20236.2%20238.3'%20style='enable-background:new%200%200%20236.2%20238.3;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%23FFFFFF;}%20.st1{fill:%23678983;}%20.st2{fill:%2395C4BC;}%20%3c/style%3e%3cpath%20class='st0'%20d='M236,124.2c-0.1-0.2-0.2-0.4-0.4-0.5L236,124.2L236,124.2z'/%3e%3cpath%20class='st1'%20d='M208.3,93c0.7-0.8,1.8-1.1,2.8-1c3.1,0.4,6,1.5,8.6,3.1c2.6,1.5,4.9,3.4,6.9,5.7c1.8,2.1,2.6,3.8,2.5,5%20c-0.1,0.9-0.4,1.7-0.8,2.5c-0.4,0.8-0.9,1.1-1.5,1c-0.7-0.1-1.4-0.4-2.1-0.8c-0.3-0.2-1.2-0.6-2.6-1.4c-1.7-0.9-3.5-1.6-5.3-2.1%20c-2.3-0.7-4.7-1.2-7.2-1.5c-2.4-0.3-3.4-2.1-3-5.4l0.2-1.6C206.9,95.3,207.4,94,208.3,93z'/%3e%3cpath%20class='st2'%20d='M176.6,117.4c-1.7,0.9-3.9,0.3-4.8-1.4c-0.9-1.7-0.3-3.9,1.4-4.8c0,0,0.1-0.1,0.1-0.1%20c6.8-3.5,14.3-5.7,21.9-6.4l6.5-41.1c0.9-5.5,1.7-11.2,0.9-16.7c-0.8-5.6-3.6-11.1-8.6-13.8c-4.9-2.7-10.9-2.2-15.8,0.1%20s-8.9,6.4-12.2,10.8c-20,26.3-19.4,48.4-28.4,94.2h-5.2c0-0.3,0.1-0.6,0.1-0.9l13.1-81.7c1.1-6.7,2.1-13.5,0.9-20.1%20c-1.2-6.6-5.2-13.2-11.5-15.6c-5.7-2.2-12.4-0.6-17.4,3s-8.7,8.7-11.7,14C99.3,48.2,95,60.6,91.8,73.4c0.2-22.7-4.4-40.6-13.8-53.5%20C70.3,9.2,58.5,2.1,45.4,0.4h-0.3C24.5-2.4,5.6,12.1,2.8,32.8s11.7,39.6,32.4,42.3c18.1,2.4,35.4-8.5,40.9-26%20c-0.5-2.1-1.2-4.3-2-6.3c-4.6-11.7-13.8-21.1-25.3-26c-1.8-0.8-2.6-3-1.7-4.7c0.8-1.7,2.8-2.5,4.5-1.8c19,8.1,30.8,25.9,32.7,46.2%20c1.4,14.8,0,30.4-2.1,45c-1.1,7.6-2.6,15.1-4.3,22.6c-0.4,2-6.1,21.7-5.6,22c3.5,1.9,6.9,4.1,10.1,6.6c1.6,1.2,1.8,3.5,0.6,5%20c-1.2,1.6-3.5,1.8-5,0.6l0,0c-23.6-18.3-49.2-15.5-66.9,7.2c-17.4,22.4-14,54.5,7.7,72.8l55.3-20.7c0.6-0.4,1.2-0.9,1.7-1.3%20c5.4-4.8,6.9-12.5,8.1-19.7l17.1-103c0.4-2.2,0.8-4.5,2.2-6.2c1.4-1.7,4.1-2.6,5.9-1.3c1.8,1.3,1.7,4.1,1.4,6.4L95.2,209%20c12.7-3.9,25.2-8.2,37.5-13c3.4-1.3,6.8-2.7,9.3-5.4c3-3.3,3.9-8,4.7-12.4l14.4-83.1c0.2-1.9,0.8-3.8,1.9-5.4%20c1.2-1.5,3.5-2.3,5.1-1.3c1.8,1.2,1.7,3.8,1.5,6l-7.7,60.9c-0.8,6.7-1.7,13.6-0.3,20.2c1.2,5.4,4.1,10.6,8.6,13.6%20c1,0.7,2.2,1.3,3.4,1.7c7.1,2.5,14.9-0.5,21.3-4.4c21.8-13.2,36.9-35.2,41.3-60.3c0-0.2,0.1-0.3,0.1-0.5%20C220.1,110.6,196.2,107.2,176.6,117.4z'/%3e%3c/svg%3e",q=k`
  0% { transform: translateX(-40%) translateY(0); opacity: 1; }
  25% { transform: translateX(-35%) translateY(-5px); opacity: 0.9; }
  50% { transform: translateX(-30%) translateY(3px); opacity: 0.8; }
  75% { transform: translateX(-35%) translateY(-2px); opacity: 0.9; }
  100% { transform: translateX(-40%) translateY(0); opacity: 0.85; }
`,W=k`
  0% { transform: translateX(140%) translateY(0); opacity: 1; }
  25% { transform: translateX(135%) translateY(4px); opacity: 0.95; }
  50% { transform: translateX(130%) translateY(-3px); opacity: 0.9; }
  75% { transform: translateX(135%) translateY(2px); opacity: 0.95; }
  100% { transform: translateX(140%) translateY(0); opacity: 0.9; }
`,S=s.span`
  position: absolute;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0,255,255,0.6) 0%, rgba(255,192,203,0.35) 60%, transparent 100%);
  filter: blur(70px);
  pointer-events: none;
  z-index: 997;
`,J=s(S)`
  left: 0;
  animation: ${q} 6s ease-in-out infinite;
`,Q=s(S)`
  right: 0;
  animation: ${W} 6s ease-in-out infinite;
`,j=k`
  0% { transform: translateX(0); opacity: 1; }
  33% { transform: translateX(calc(100vw - 650px)); opacity: 1; }
  66% { transform: translateX(0); opacity: 1; }
  85% { transform: translateX(50vw); opacity: 0; }
  100% { transform: translateX(0); opacity: 0; }
`,Z=s.div`
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
`,ee=s.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 8px;
  pointer-events: none;
  overflow: visible;
`,te=s.span`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 650px;
  height: 1pt;
  background-color: #E88D67;
  mask-image: linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%);
  -webkit-mask-image: linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%);
  animation: ${j} 10s ease-in-out forwards;
  z-index: 998;
`,re=s.span`
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
  animation: ${j} 10s ease-in-out forwards;
  z-index: 999;
`,oe=k`
  0% { background-position: 0% 0; }
  50% { background-position: 50% 0; }
  100% { background-position: 0% 0; }
`,ne=s.span`
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
  animation: ${j} 10s ease-in-out forwards;

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
    animation: ${oe} 2s ease-in-out infinite;
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
`,se=s.img`
  width: clamp(46px, 2.6vw, 90px);
  max-height: 5vh;
  object-fit: contain;
  transition: all 0.3s ease;

  &:hover {
    filter: invert(0.2) sepia(0.5) saturate(11.7) hue-rotate(313.2deg) brightness(1.2);
  }
`,ae=s.div`
  display: flex;
  align-items: stretch;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  padding-right: 6vw;
  max-width: calc(100vw - 6vw);
`,ie=s.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2.5rem;
  height: 100%;

  @media (max-width: 1200px) { gap: 1.5rem; }
  @media (max-width: 800px) { gap: 1rem; font-size: 1rem; }
`,ce=s.span`
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
`,P=s.li`
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
`,le=s(y)`
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
`,de=s.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0,0,0,0.6);
  backdrop-filter: blur(6px);
  border-radius: 0 0 0.25rem 0.25rem;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  display: ${n=>n.$open?"block":"none"};
  min-width: 10rem; /* Increased from 8rem */
  z-index: 1200;
`,f=s(y)`
  display: block;
  padding: 0.75rem 1rem;
  color: white;
  text-decoration: none;
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    background-color: rgba(166, 209, 202, 0.4);
    color: white;
  }
`;s.div`
  height: 1px;
  background-color: rgba(255, 255, 255, 0.3);
  margin: 0.25rem 0;
`;function ue(){const[n,c]=t.useState(!1),a=M(),d=T.useRef();t.useEffect(()=>{c(!1)},[a.pathname]),t.useEffect(()=>{if(!n||!window.matchMedia("(hover: none) and (pointer: coarse)").matches)return;const i=()=>c(!1),h=g=>{d.current&&!d.current.contains(g.target)&&c(!1)};return window.addEventListener("scroll",i,{passive:!0}),document.addEventListener("mousedown",h),document.addEventListener("touchstart",h),()=>{window.removeEventListener("scroll",i),document.removeEventListener("mousedown",h),document.removeEventListener("touchstart",h)}},[n]);const o=()=>c(i=>!i),r=()=>c(!1);return e.jsxs(Z,{children:[e.jsx(y,{to:"/MacTavish",style:{cursor:"none"},children:e.jsx(se,{src:K})}),e.jsxs(ae,{children:[e.jsxs(ie,{children:[e.jsxs(P,{children:[e.jsx(ce,{role:"presentation","aria-haspopup":"true","aria-expanded":n,style:{cursor:"default"},onClick:i=>{window.matchMedia("(hover: none)").matches?o():i.preventDefault()},children:"Projects"}),e.jsx("div",{style:{position:"absolute",left:"-20px",top:"0",width:"120px",height:"100%",background:"transparent",border:"none",pointerEvents:window.matchMedia&&window.matchMedia("(hover: none) and (pointer: coarse)").matches?"none":"auto",zIndex:1100}}),e.jsxs(de,{$open:n,ref:d,children:[e.jsx(f,{to:"/Microsoft",onClick:r,children:"Microsoft"}),e.jsx(f,{to:"/Outsource",onClick:r,children:"Outsource"}),e.jsx(f,{to:"/Ux",onClick:r,children:"Leysi"}),e.jsx(f,{to:"/Piton",onClick:r,children:"Piton"}),e.jsx(f,{to:"/ThreePillars",onClick:r,children:"Three Pillars"}),e.jsx(f,{to:"/AccessDirect",onClick:r,children:"Access Direct"}),e.jsx(f,{to:"/Giga",onClick:r,children:"Giga"}),e.jsx(f,{to:"/GraphicDesign",onClick:r,children:"Graphic Design"})]})]}),e.jsx(P,{children:e.jsx(le,{to:"/Resume",children:"Resume"})})]}),e.jsxs(ee,{children:[e.jsx(te,{}),e.jsx(re,{}),e.jsx(ne,{}),e.jsx(J,{}),e.jsx(Q,{})]})]})]})}const pe=t.lazy(()=>p(()=>import("./Resume-BnQyFaBA.js"),__vite__mapDeps([0,1,2,3]),import.meta.url)),me=t.lazy(()=>p(()=>import("./AD-pta5sKp8.js").then(n=>n.A),__vite__mapDeps([4,1,2,3]),import.meta.url)),he=t.lazy(()=>p(()=>import("./AD-pta5sKp8.js").then(n=>n.G),__vite__mapDeps([4,1,2,3]),import.meta.url)),fe=t.lazy(()=>p(()=>import("./Graphicdesign-B9_F-ZrU.js"),__vite__mapDeps([5,1,2,4,3,6]),import.meta.url)),ge=t.lazy(()=>p(()=>import("./LandingPage-CDbLHaDO.js"),__vite__mapDeps([7,1,2,4,3,6,8,9,10,11]),import.meta.url)),xe=t.lazy(()=>p(()=>import("./Outsource-yUaxyB1d.js"),__vite__mapDeps([12,1,2,4,3,11]),import.meta.url)),be=t.lazy(()=>p(()=>import("./UX-500d_f-K.js"),__vite__mapDeps([13,1,2,4,3,8]),import.meta.url)),ve=t.lazy(()=>p(()=>import("./ThreePillars-BM0P0lOb.js"),__vite__mapDeps([14,1,2,4,3,9]),import.meta.url)),ke=t.lazy(()=>p(()=>import("./Piton-DKbL4sBA.js"),__vite__mapDeps([15,1,2,10,4,3,13,8]),import.meta.url)),we=t.lazy(()=>p(()=>import("./Microsoft-3Aul5FKU.js"),__vite__mapDeps([16,1,2,4,3]),import.meta.url)),ye=t.lazy(()=>p(()=>import("./IntroAnimation-CyhBCX8c.js"),__vite__mapDeps([17,1,2,7,4,3,6,8,9,10,11]),import.meta.url));function je(){const[n,c]=t.useState("light");return e.jsxs(O,{theme:n==="light"?N:V,children:[e.jsx(Y,{}),e.jsxs("div",{className:"App",children:[e.jsxs(I,{children:[e.jsx(B,{}),e.jsx(ue,{}),e.jsx(t.Suspense,{fallback:e.jsx("div",{style:{color:"#888",padding:"2rem",textAlign:"center"},children:"Loading…"}),children:e.jsxs(F,{children:[e.jsx(u,{path:"/",element:e.jsx(ye,{})}),e.jsx(u,{path:"/MacTavish",element:e.jsx(ge,{})}),e.jsx(u,{path:"/Giga",element:e.jsx(he,{})}),e.jsx(u,{path:"/AccessDirect",element:e.jsx(me,{})}),e.jsx(u,{path:"/Outsource",element:e.jsx(xe,{})}),e.jsx(u,{path:"/GraphicDesign",element:e.jsx(fe,{})}),e.jsx(u,{path:"/Ux",element:e.jsx(be,{})}),e.jsx(u,{path:"/ThreePillars",element:e.jsx(ve,{})}),e.jsx(u,{path:"/Piton",element:e.jsx(ke,{})}),e.jsx(u,{path:"/Microsoft",element:e.jsx(we,{})}),e.jsx(u,{path:"/Resume",element:e.jsx(pe,{})}),e.jsx(u,{path:"*",element:e.jsx($,{to:"/",replace:!0})})]})})]}),!1]})]})}D.createRoot(document.getElementById("root")).render(e.jsx(t.StrictMode,{children:e.jsx(je,{})}));
