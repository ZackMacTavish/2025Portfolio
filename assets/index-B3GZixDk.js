const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./three-Cragz5qr.js","./three-CIqbc5c4.js","./vendor-hQudadcW.js","./Resume-CpMtkWBz.js","./Graphicdesign-11DH-lWD.js","./Outsource-CqbrtY9b.js","./UX-CoVCvBHB.js","./ThreePillars-ivTZcT5K.js","./Piton-GPuWxldr.js","./Microsoft-DG_uwPsS.js","./caseStudies-CBR6CWpU.js","./BusinessConnectors-CqrK1u8f.js","./CaseStudyPage-_snpQS3H.js","./CopilotPay-DkIx2zsg.js","./Journeys-CDplj6wd.js"])))=>i.map(i=>d[i]);
import'data:text/javascript,"assets/index-B3GZixDk.js";if(!import.meta.resolve)throw Error("import.meta.resolve not supported")';import{j as f,_ as Ee,c as xd}from"./three-CIqbc5c4.js";import{u as Un,c as P,b as T,l as Ut,d as vd,R as rt,L as Ki,K as wd,H as bd,e as _d,f as pe,N as Ad}from"./vendor-hQudadcW.js";function cw(){import.meta.url,import("_").catch(()=>1),(async function*(){})().next()}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function i(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=i(r);fetch(r.href,s)}})();const ji={fonts:{body:"Space Grotesk, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",heading:"Space Grotesk, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",mono:'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'},fontSizes:{xs:"0.75rem",sm:"0.875rem",md:"1rem",lg:"1.125rem",xl:"1.25rem",h3:"1.15rem",h2:"clamp(1.4rem, 3vw, 2rem)",h1:"clamp(2rem, 6vw, 4.8rem)"},lineHeights:{tight:1.1,snug:1.2,normal:1.5,relaxed:1.7},spacing:{xs:"4px",sm:"8px",md:"12px",lg:"16px",xl:"24px","2xl":"32px","3xl":"48px"},radii:{none:"0",sm:"6px",md:"10px",lg:"16px",xl:"18px",pill:"999px",round:"50%",card:"18px"}},Td={backgroundColor:"#3F4739",backgroundTwo:"#ffffff",fontColor:"#5D5D5D"},Sd={backgroundColor:"#303030",backgroundTwo:"#303030",fontColor:"#a1a1a1"},$n={...ji,...Td},qn={...ji,...Sd},kd=Un`
    :root {
        --radius-card: ${ji.radii.card};
        --space-lg: ${ji.spacing.lg};
    }
    * { box-sizing: border-box; }
    html, body, #root { min-height: 100%; }
    body {
        margin: 0;
        background-color: ${t=>t.theme.backgroundColor};
        color: ${t=>t.theme.fontColor};
        font-family: ${ji.fonts.body};
    }
`,Pd=Un`
  html, body, * { cursor: none !important; }
  .hide-cursor, .hide-cursor * { cursor: none !important; }
  [data-agentation], [data-agentation] *, #feedback-toolbar, #feedback-toolbar * { cursor: auto !important; }
`,Cd=P.div`
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
`,jd=()=>{const[t,e]=T.useState(!1),i=T.useRef(null),n=T.useRef(!1),r=T.useRef(1),s=T.useRef({x:0,y:0});T.useRef({x:0,y:0});const o=T.useRef(!1),a=T.useRef(null);return T.useEffect(()=>{const l=window.matchMedia("(pointer: fine)").matches;if(/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)&&!l){e(!1);return}if(l){e(!0);return}const c=d=>{(d.sourceCapabilities&&!d.sourceCapabilities.firesTouchEvents||d.movementX!==0||d.movementY!==0)&&(e(!0),window.removeEventListener("mousemove",c))};return window.addEventListener("mousemove",c),()=>window.removeEventListener("mousemove",c)},[]),T.useEffect(()=>{if(!t)return;const l=25,u=25,c='a, button, input, textarea, select, [role="link"], [role="button"], [data-cursor="link"], [data-route], [data-routes-to], .nav-link, .router-link, .link, .btn';let d=null;const h=v=>{v&&v.closest&&!!v.closest(c)?(d&&(clearTimeout(d),d=null),n.current||(n.current=!0,i.current&&i.current.classList.add("hovered"))):n.current&&!d&&(d=setTimeout(()=>{d=null,n.current=!1,i.current&&i.current.classList.remove("hovered")},60))},m=v=>{if(!i.current)return;const w=v.clientX-l,x=v.clientY-u;s.current.x=w,s.current.y=x,o.current||(o.current=!0,i.current.classList.add("visible")),h(v.target),i.current.style.transform=`translate3d(${w}px, ${x}px, 0) scale(${r.current})`},g=()=>{i.current&&i.current.classList.remove("visible"),o.current=!1},p=()=>{document.visibilityState==="hidden"?g():o.current=!1},y=()=>{if(i.current&&o.current){const v=n.current?.3:1,w=v-r.current;r.current=Math.abs(w)<.01?v:r.current+w*.55,i.current.style.transform=`translate3d(${s.current.x}px, ${s.current.y}px, 0) scale(${r.current})`}a.current=requestAnimationFrame(y)};return document.addEventListener("mousemove",m),document.addEventListener("mouseleave",g),document.addEventListener("visibilitychange",p),a.current=requestAnimationFrame(y),()=>{document.removeEventListener("mousemove",m),document.removeEventListener("mouseleave",g),document.removeEventListener("visibilitychange",p),a.current&&cancelAnimationFrame(a.current),d&&clearTimeout(d)}},[t]),f.jsxs(f.Fragment,{children:[t&&f.jsx(Pd,{}),t&&f.jsx(Cd,{ref:i})]})},Md="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2025.4.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%20236.2%20238.3'%20style='enable-background:new%200%200%20236.2%20238.3;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%23FFFFFF;}%20.st1{fill:%23678983;}%20.st2{fill:%2395C4BC;}%20%3c/style%3e%3cpath%20class='st0'%20d='M236,124.2c-0.1-0.2-0.2-0.4-0.4-0.5L236,124.2L236,124.2z'/%3e%3cpath%20class='st1'%20d='M208.3,93c0.7-0.8,1.8-1.1,2.8-1c3.1,0.4,6,1.5,8.6,3.1c2.6,1.5,4.9,3.4,6.9,5.7c1.8,2.1,2.6,3.8,2.5,5%20c-0.1,0.9-0.4,1.7-0.8,2.5c-0.4,0.8-0.9,1.1-1.5,1c-0.7-0.1-1.4-0.4-2.1-0.8c-0.3-0.2-1.2-0.6-2.6-1.4c-1.7-0.9-3.5-1.6-5.3-2.1%20c-2.3-0.7-4.7-1.2-7.2-1.5c-2.4-0.3-3.4-2.1-3-5.4l0.2-1.6C206.9,95.3,207.4,94,208.3,93z'/%3e%3cpath%20class='st2'%20d='M176.6,117.4c-1.7,0.9-3.9,0.3-4.8-1.4c-0.9-1.7-0.3-3.9,1.4-4.8c0,0,0.1-0.1,0.1-0.1%20c6.8-3.5,14.3-5.7,21.9-6.4l6.5-41.1c0.9-5.5,1.7-11.2,0.9-16.7c-0.8-5.6-3.6-11.1-8.6-13.8c-4.9-2.7-10.9-2.2-15.8,0.1%20s-8.9,6.4-12.2,10.8c-20,26.3-19.4,48.4-28.4,94.2h-5.2c0-0.3,0.1-0.6,0.1-0.9l13.1-81.7c1.1-6.7,2.1-13.5,0.9-20.1%20c-1.2-6.6-5.2-13.2-11.5-15.6c-5.7-2.2-12.4-0.6-17.4,3s-8.7,8.7-11.7,14C99.3,48.2,95,60.6,91.8,73.4c0.2-22.7-4.4-40.6-13.8-53.5%20C70.3,9.2,58.5,2.1,45.4,0.4h-0.3C24.5-2.4,5.6,12.1,2.8,32.8s11.7,39.6,32.4,42.3c18.1,2.4,35.4-8.5,40.9-26%20c-0.5-2.1-1.2-4.3-2-6.3c-4.6-11.7-13.8-21.1-25.3-26c-1.8-0.8-2.6-3-1.7-4.7c0.8-1.7,2.8-2.5,4.5-1.8c19,8.1,30.8,25.9,32.7,46.2%20c1.4,14.8,0,30.4-2.1,45c-1.1,7.6-2.6,15.1-4.3,22.6c-0.4,2-6.1,21.7-5.6,22c3.5,1.9,6.9,4.1,10.1,6.6c1.6,1.2,1.8,3.5,0.6,5%20c-1.2,1.6-3.5,1.8-5,0.6l0,0c-23.6-18.3-49.2-15.5-66.9,7.2c-17.4,22.4-14,54.5,7.7,72.8l55.3-20.7c0.6-0.4,1.2-0.9,1.7-1.3%20c5.4-4.8,6.9-12.5,8.1-19.7l17.1-103c0.4-2.2,0.8-4.5,2.2-6.2c1.4-1.7,4.1-2.6,5.9-1.3c1.8,1.3,1.7,4.1,1.4,6.4L95.2,209%20c12.7-3.9,25.2-8.2,37.5-13c3.4-1.3,6.8-2.7,9.3-5.4c3-3.3,3.9-8,4.7-12.4l14.4-83.1c0.2-1.9,0.8-3.8,1.9-5.4%20c1.2-1.5,3.5-2.3,5.1-1.3c1.8,1.2,1.7,3.8,1.5,6l-7.7,60.9c-0.8,6.7-1.7,13.6-0.3,20.2c1.2,5.4,4.1,10.6,8.6,13.6%20c1,0.7,2.2,1.3,3.4,1.7c7.1,2.5,14.9-0.5,21.3-4.4c21.8-13.2,36.9-35.2,41.3-60.3c0-0.2,0.1-0.3,0.1-0.5%20C220.1,110.6,196.2,107.2,176.6,117.4z'/%3e%3c/svg%3e",Rd=Ut`
  0% { transform: translateX(-40%) translateY(0); opacity: 1; }
  25% { transform: translateX(-35%) translateY(-5px); opacity: 0.9; }
  50% { transform: translateX(-30%) translateY(3px); opacity: 0.8; }
  75% { transform: translateX(-35%) translateY(-2px); opacity: 0.9; }
  100% { transform: translateX(-40%) translateY(0); opacity: 0.85; }
`,Dd=Ut`
  0% { transform: translateX(140%) translateY(0); opacity: 1; }
  25% { transform: translateX(135%) translateY(4px); opacity: 0.95; }
  50% { transform: translateX(130%) translateY(-3px); opacity: 0.9; }
  75% { transform: translateX(135%) translateY(2px); opacity: 0.95; }
  100% { transform: translateX(140%) translateY(0); opacity: 0.9; }
`,dl=P.span`
  position: absolute;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0,255,255,0.6) 0%, rgba(255,192,203,0.35) 60%, transparent 100%);
  filter: blur(70px);
  pointer-events: none;
  z-index: 997;
`,Ed=P(dl)`
  left: 0;
  animation: ${Rd} 6s ease-in-out infinite;
`,Ld=P(dl)`
  right: 0;
  animation: ${Dd} 6s ease-in-out infinite;
`,fs=Ut`
  0% { transform: translateX(0); opacity: 1; }
  33% { transform: translateX(calc(100vw - 650px)); opacity: 1; }
  66% { transform: translateX(0); opacity: 1; }
  85% { transform: translateX(50vw); opacity: 0; }
  100% { transform: translateX(0); opacity: 0; }
`,Vd=P.div`
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
`,Od=P.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 8px;
  pointer-events: none;
  overflow: visible;
`,Id=P.span`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 650px;
  height: 1pt;
  background-color: #E88D67;
  mask-image: linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%);
  -webkit-mask-image: linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%);
  animation: ${fs} 10s ease-in-out forwards;
  z-index: 998;
`,zd=P.span`
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
  animation: ${fs} 10s ease-in-out forwards;
  z-index: 999;
`,Fd=Ut`
  0% { background-position: 0% 0; }
  50% { background-position: 50% 0; }
  100% { background-position: 0% 0; }
`,Bd=P.span`
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
  animation: ${fs} 10s ease-in-out forwards;

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
    animation: ${Fd} 2s ease-in-out infinite;
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
`,Ud=P.img`
  width: clamp(46px, 2.6vw, 90px);
  max-height: 5vh;
  object-fit: contain;
  transition: all 0.3s ease;

  &:hover {
    filter: invert(0.2) sepia(0.5) saturate(11.7) hue-rotate(313.2deg) brightness(1.2);
  }
`,Nd=P.div`
  display: flex;
  align-items: stretch;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  padding-right: 6vw;
  max-width: calc(100vw - 6vw);
`,Wd=P.ul`
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
  
`,Gd=P.span`
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
`,wo=P.li`
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
`,Xd=P(Ki)`
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
`,Hd=P.button`
  position: absolute;
  top: 18px;
  right: 18px;
  width: 36px;
  height: 36px;
  background: none;
  border: none;
  color: #fff;
  font-size: 2rem;
  font-weight: 700;
  z-index: 1300;
  cursor: pointer;
  opacity: 0.85;
  display: none;
  transition: opacity 0.2s;
  &:hover { opacity: 1; }
  @media (max-width: 700px) {
    display: block;
  }
`,Yd=P.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0,0,0,0.6);
  backdrop-filter: blur(6px);
  border-radius: 0 0 0.25rem 0.25rem;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  display: ${t=>t.$open?"block":"none"};
  min-width: 10rem;
  z-index: 1200;

  @media (max-width: 700px) {
    position: fixed;
    top: 0;
    left: 0;
    transform: none;
    width: 100vw;
    height: 100vh;
    min-width: unset;
    border-radius: 0;
    display: ${t=>t.$open?"flex":"none"};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0,0.95);
    box-shadow: none;
    padding: 0;
    gap: 2.5rem;
  }
`,at=P(Ki)`
  display: block;
  padding: 0.75rem 1rem;
  color: white;
  text-decoration: none;
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    background-color: rgba(166, 209, 202, 0.4);
    color: white;
  }
`;P.div`
  height: 1px;
  background-color: rgba(255, 255, 255, 0.3);
  margin: 0.25rem 0;
`;function Zd(){const[t,e]=T.useState(!1),i=vd(),n=rt.useRef();T.useEffect(()=>{e(!1)},[i.pathname]),T.useEffect(()=>{if(!t||!window.matchMedia("(hover: none) and (pointer: coarse)").matches)return;const o=()=>e(!1),a=l=>{n.current&&!n.current.contains(l.target)&&e(!1)};return window.addEventListener("scroll",o,{passive:!0}),document.addEventListener("mousedown",a),document.addEventListener("touchstart",a),()=>{window.removeEventListener("scroll",o),document.removeEventListener("mousedown",a),document.removeEventListener("touchstart",a)}},[t]);const r=()=>e(o=>!o),s=()=>e(!1);return f.jsxs(Vd,{children:[f.jsx(Ki,{to:"/MacTavish",style:{cursor:"none"},children:f.jsx(Ud,{src:Md})}),f.jsxs(Nd,{children:[f.jsxs(Wd,{children:[f.jsxs(wo,{children:[f.jsx(Gd,{role:"presentation","aria-haspopup":"true","aria-expanded":t,style:{cursor:"default"},onClick:o=>{window.matchMedia("(hover: none)").matches?r():o.preventDefault()},children:"Projects"}),f.jsx("div",{style:{position:"absolute",left:"-20px",top:"0",width:"120px",height:"100%",background:"transparent",border:"none",pointerEvents:window.matchMedia&&window.matchMedia("(hover: none) and (pointer: coarse)").matches?"none":"auto",zIndex:1100}}),f.jsxs(Yd,{$open:t,ref:n,children:[f.jsx(Hd,{"aria-label":"Close menu",onClick:s,style:{display:t?void 0:"none"},children:"×"}),f.jsx(at,{to:"/Microsoft",onClick:s,children:"Microsoft"}),f.jsx(at,{to:"/Outsource",onClick:s,children:"Outsource"}),f.jsx(at,{to:"/Ux",onClick:s,children:"Leysi"}),f.jsx(at,{to:"/Piton",onClick:s,children:"Piton"}),f.jsx(at,{to:"/ThreePillars",onClick:s,children:"Three Pillars"}),f.jsx(at,{to:"/AccessDirect",onClick:s,children:"Access Direct"}),f.jsx(at,{to:"/Giga",onClick:s,children:"Giga"}),f.jsx(at,{to:"/GraphicDesign",onClick:s,children:"Graphic Design"})]})]}),f.jsx(wo,{children:f.jsx(Xd,{to:"/Resume",children:"Resume"})})]}),f.jsxs(Od,{children:[f.jsx(Id,{}),f.jsx(zd,{}),f.jsx(Bd,{}),f.jsx(Ed,{}),f.jsx(Ld,{})]})]})]})}const ps=({title:t,description:e,url:i,image:n,images:r=null,type:s="website",authorName:o="Zack MacTavish",authorAlternateNames:a=["Zachary MacTavish"],sameAs:l=[],keywords:u=[],jsonLd:c=null,favicons:d=null,siteDefaults:h=null,siteName:m=null,locale:g=null,robots:p=null,themeColor:y=null,twitterSite:v=null,twitterCreator:w=null})=>(T.useEffect(()=>{t&&(document.title=t);const x=(D,I,J)=>{let de=document.querySelector(D);if(!de){de=document.createElement("meta");const Ae=D.match(/\[(name|property)=['"]([^'"]+)['"]\]/);Ae&&de.setAttribute(Ae[1],Ae[2]),document.head.appendChild(de)}de.setAttribute(I,J)};e&&(x("[name='description']","content",e),x("[property='og:description']","content",e),x("[name='twitter:description']","content",e)),u&&u.length&&x("[name='keywords']","content",Array.isArray(u)?u.join(", "):u),t&&(x("[property='og:title']","content",t),x("[name='twitter:title']","content",t)),x("[property='og:type']","content",s),i&&x("[property='og:url']","content",i);const b=m||h&&h.siteName||null,_=g||h&&h.locale||null,j=p||h&&h.robots||null,S=y||h&&h.themeColor||null,A=v||h&&h.twitterSite||null,k=w||h&&h.twitterCreator||null;b&&x("[property='og:site_name']","content",b),_&&x("[property='og:locale']","content",_),j&&x("[name='robots']","content",j),S&&x("[name='theme-color']","content",S),A&&x("[name='twitter:site']","content",A),k&&x("[name='twitter:creator']","content",k);const C=h&&h.ogImages||[],R=r||(n?[n]:null)||C,E=D=>{document.querySelectorAll(D).forEach(I=>I.remove())};E("meta[property='og:image']"),E("meta[property='og:image:width']"),E("meta[property='og:image:height']");let L=null;if(R&&R.length?R.forEach(D=>{let I=D;if(typeof D=="string"&&(I={url:D}),!I||!I.url)return;const J=document.createElement("meta");if(J.setAttribute("property","og:image"),J.setAttribute("content",I.url),document.head.appendChild(J),I.width){const de=document.createElement("meta");de.setAttribute("property","og:image:width"),de.setAttribute("content",String(I.width)),document.head.appendChild(de)}if(I.height){const de=document.createElement("meta");de.setAttribute("property","og:image:height"),de.setAttribute("content",String(I.height)),document.head.appendChild(de)}L||(L=I.url)}):n&&(x("[property='og:image']","content",n),L=n),L?(x("[name='twitter:image']","content",L),x("[name='twitter:card']","content","summary_large_image")):x("[name='twitter:card']","content","summary"),i){let D=document.querySelector("link[rel='canonical']");D||(D=document.createElement("link"),D.setAttribute("rel","canonical"),document.head.appendChild(D)),D.setAttribute("href",i)}const V="seo-json-ld";let O=document.getElementById(V);const z={"@context":"https://schema.org","@type":"Person",name:o,url:i||window.location.href};a&&a.length&&(z.alternateName=a.length===1?a[0]:a),l&&l.length&&(z.sameAs=l);let U=c||z;if(!c)U=z;else try{const D=c;(D["@type"]==="CreativeWork"||D["@type"]==="Article")&&!D.author&&(D.author={"@type":"Person",name:o,url:i||window.location.href},a&&a.length&&(D.author.alternateName=a.length===1?a[0]:a),l&&l.length&&(D.author.sameAs=l)),U=D}catch{U=c}if(O?O.text=JSON.stringify(U):(O=document.createElement("script"),O.id=V,O.type="application/ld+json",O.text=JSON.stringify(U),document.head.appendChild(O)),o||a&&a.length){const D=[o].concat(a||[]).filter(Boolean).join(", ");x("[name='author']","content",D)}l&&l.length&&x("[name='sameAs']","content",l.join(", "));const F=d||h&&h.favicons||null,H=D=>{document.querySelectorAll(`link[rel='${D}']`).forEach(I=>I.remove())};H("icon"),H("shortcut icon"),H("apple-touch-icon"),H("manifest"),F&&(Array.isArray(F)?F.forEach(D=>{const I=document.createElement("link");D.rel?I.setAttribute("rel",D.rel):I.setAttribute("rel",D.sizes==="180x180"?"apple-touch-icon":"icon"),D.sizes&&I.setAttribute("sizes",D.sizes),I.setAttribute("href",D.href),document.head.appendChild(I)}):Object.entries(F).forEach(([D,I])=>{const J=document.createElement("link");D==="180x180"?J.setAttribute("rel","apple-touch-icon"):J.setAttribute("rel","icon"),J.setAttribute("sizes",D),J.setAttribute("href",I),document.head.appendChild(J)}))},[t,e,i,n,s,o,a,l,u,c,d,h,m,g,p,y,v,w]),null);var bo={exports:{}},bi={},_o;function Kd(){if(_o)return bi;_o=1;var t=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(n,r,s){var o=null;if(s!==void 0&&(o=""+s),r.key!==void 0&&(o=""+r.key),"key"in r){s={};for(var a in r)a!=="key"&&(s[a]=r[a])}else s=r;return r=s.ref,{$$typeof:t,type:n,key:o,ref:r!==void 0?r:null,props:s}}return bi.Fragment=e,bi.jsx=i,bi.jsxs=i,bi}var Ao;function $d(){return Ao||(Ao=1,bo.exports=Kd()),bo.exports}var We=$d();Un`
  html, body, * { cursor: none !important; }
`;P.div`
  z-index: 2000;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  border: none;
  background-color: rgba(136,136,136,0.2);
  backdrop-filter: blur(6px);
  pointer-events: none;
  position: fixed;
  transform: translate3d(0,0,0) scale(1);
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  display: none;

  &.hovered {
    background-color: #E88D67;
    box-shadow: 0 0 12px 6px rgba(232,141,103,0.6);
  }

  &.visible {
    display: block;
  }
`;const qd=P.div`
  width: 60vw;
  max-width: 1100px;
  margin: 0 auto;
  box-sizing: border-box;

  @media (max-width: 1000px) {
    width: 92vw;
  }
`;P(qd)`
  display: grid;
  grid-template-columns: ${t=>t.columns||"0.48fr 0.52fr"};
  gap: ${t=>t.gap||"2rem"};
  align-items: ${t=>t.align||"center"};

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;const Qn={fonts:{body:"Space Grotesk, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif"},spacing:{lg:"16px"},radii:{card:"18px"}};Un`
  :root {
    /* expose some common tokens as CSS vars for non-styled consumers */
    --radius-card: ${Qn.radii.card};
    --space-lg: ${Qn.spacing.lg};
  }
  * { box-sizing: border-box; }
  html, body, #root { height: 100%; }
  body {
    margin: 0;
    background-color: ${t=>t.theme.backgroundColor};
    color: ${t=>t.theme.fontColor};
    font-family: ${Qn.fonts.body};
  }
`;const Qd=P.div`
  width: ${t=>t.$width||"62vw"};
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  gap: 2.2vw;
  align-items: center; /* Vertically center both image and text */
  padding: ${t=>t.theme?.spacing?.["3xl"]||"3rem"} 0;
  height: auto;

  @media (max-width: 1320px) {
    width: 90vw;
    max-width: 90vw;
  }
  @media (max-width: 1000px) {
    width: 100vw;
    max-width: 100vw;
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
    height: auto;
  }
`,Jd=P.div`
  flex: 1 1 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 0;
  min-height: 0;
  @media (max-width: 1000px) {
    width: 100vw;
    justify-content: center;
    margin-bottom: 1.2rem;
  }
`,eh=P.img`
  width: 100%;
  max-width: 480px;
  min-width: 260px;
  height: auto;
  min-height: 200px;
  object-fit: cover;
  display: block;
  margin: 0;
  border-radius: 24px;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,0.06);
  overflow: hidden;

  @media (max-width: 1200px) {
    max-width: 340px;
    min-width: 160px;
    min-height: 140px;
  }
  @media (max-width: 1000px) {
    width: 80vw;
    max-width: 92vw;
    min-width: 120px;
    min-height: 120px;
    border-radius: 16px;
    margin: 0 auto;
    display: block;
  }
`,th=P.div`
  flex: 1 1 50%;
  font-family: 'Space Grotesk', sans-serif;
  font-size: ${t=>t.$textSize||"1.4rem"};
  color: ${t=>t.$textColor||"#fff"};
  line-height: 1.4;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* children left-aligned */
  justify-content: center; /* center children vertically in text block */
  gap: 0.25em;
  text-align: left;
  min-width: 0;
  height: auto;
  @media (max-width: 1000px) {
    font-size: 1.7rem;
    width: 92vw;
    margin: 0 auto;
    min-height: 40px;
  }
`;function Wt(t){if(!t)return t;try{return encodeURI(decodeURI(t))}catch{return encodeURI(t)}}function ih(t){const{imageSrc:e,imageAvif:i,imageWebp:n,imageAlt:r,mobileSrc:s,mobileAvif:o,mobileWebp:a,width:l,className:u,textSize:c,textColor:d,children:h,...m}=t;function g(j){if(!j||typeof j!="object")return j;if(Array.isArray(j))return j.map(g);const S={};for(const A in j){if(A==="mobileSrc"||A==="mobileAvif"||A==="mobileWebp")continue;const k=j[A];typeof k=="object"&&k!==null?S[A]=g(k):S[A]=k}return S}const p=g(m),y=Wt(e),v=Wt(i),w=Wt(n),x=Wt(s),b=Wt(o),_=Wt(a);return We.jsxs(Qd,{$width:l,className:u,...p,children:[We.jsx(Jd,{children:We.jsxs("picture",{children:[b&&We.jsx("source",{srcSet:b,type:"image/avif",media:"(max-width: 700px)"}),_&&We.jsx("source",{srcSet:_,type:"image/webp",media:"(max-width: 700px)"}),x&&We.jsx("source",{srcSet:x,media:"(max-width: 700px)"}),v&&We.jsx("source",{srcSet:v,type:"image/avif"}),w&&We.jsx("source",{srcSet:w,type:"image/webp"}),We.jsx(eh,{src:y,alt:r})]})}),We.jsx(th,{$textSize:c,$textColor:d,children:h})]})}const re="https://mactavish.xyz",Ue={name:"Zack MacTavish",url:re,defaultImage:`${re}/assets/og/website-logoresolutions-1200x630.png`,sameAs:["https://dribbble.com/Zmactavish","https://www.instagram.com/zackmichaelmactavish","https://www.linkedin.com/in/zacharymactavish/","https://github.com/ZackMacTavish","https://medium.com/@zmactavish"],keywords:["product design","graphic design","UX","portfolio","Zack MacTavish"]},se={landing:{title:`${Ue.name} — Product & Graphic Designer`,description:"Product & graphic designer focused on brand, UX, and digital experiences. View work and contact.",url:`${re}/`,image:Ue.defaultImage,keywords:["portfolio","home","design","Zack MacTavish"]},giga:{title:"Giga — UX/UI & Branding | Zack MacTavish",description:"Case study: Giga — UX/UI, branding, and product design by Zack MacTavish.",url:`${re}/projects/giga`,image:`${re}/assets/Giga—Macbookv2.png`,datePublished:"2024-10-01",keywords:["giga","product design","ux","branding"]},outsource:{title:"Outsource — UX/UI & Branding | Zack MacTavish",description:"Case study: Outsource — branding, websites and UX work by Zack MacTavish.",url:`${re}/projects/outsource`,image:`${re}/assets/Outsource—Macbook.png`,datePublished:"2023-08-01",keywords:["outsource","branding","ux"]},piton:{title:"Piton — Project | Zack MacTavish",description:"Case study: Piton — UX and visual design work by Zack MacTavish.",url:`${re}/projects/piton`,image:`${re}/assets/Piton—Screens.jpg`,datePublished:"2023-02-01",keywords:["piton","branding","app design"]},ux:{title:"UX — Product & UX Projects | Zack MacTavish",description:"Portfolio of UX and product design projects by Zack MacTavish.",url:`${re}/projects/ux`,image:`${re}/assets/Giga—mockup.jpg`,keywords:["ux","product design"]},"access-direct":{title:"Access Direct — UX & Brand | Zack MacTavish",description:"Case study: Access Direct — brand, UX and website built by Zack MacTavish.",url:`${re}/projects/access-direct`,image:`${re}/assets/AD—Macs.jpg`,datePublished:"2022-10-01",keywords:["access direct","ux","brand"]},"graphic-design":{title:"Graphic Design — Portfolio | Zack MacTavish",description:"Graphic design and art pieces by Zack MacTavish, including posters, packaging, and editorial work.",url:`${re}/projects/graphic-design`,image:`${re}/assets/Cover.png`,keywords:["graphic design","posters","packaging"]},threepillars:{title:"ThreePillars — UX & Branding | Zack MacTavish",description:"Case study: ThreePillars — brand and web app design by Zack MacTavish.",url:`${re}/projects/threepillars`,image:`${re}/assets/ThreePillars—Macbook.png`,keywords:["threepillars","branding","ux"]},microsoft:{title:"Microsoft — Project | Zack MacTavish",description:"Case study: Microsoft — UX and visual design work by Zack MacTavish. Password protected.",url:`${re}/projects/microsoft`,image:Ue.defaultImage,keywords:["microsoft","branding","ux","password protected"]}};class hl extends rt.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(e){return{hasError:!0}}componentDidCatch(e,i){this.props.onError&&this.props.onError(e,i)}render(){return this.state.hasError?this.props.fallback||f.jsx("div",{style:{color:"red",padding:"2rem",textAlign:"center"},children:"Something went wrong loading this section."}):this.props.children}}const ms=P.div`
  width: 60vw;
  max-width: 1100px;
  margin: 0 auto;
  box-sizing: border-box;

  @media (max-width: 1000px) {
    width: 92vw;
  }
`,hw=P(ms)`
  display: grid;
  grid-template-columns: ${t=>t.columns||"0.48fr 0.52fr"};
  gap: ${t=>t.gap||"2rem"};
  align-items: ${t=>t.align||"center"};

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`,fl=""+new URL("Me-BEhJ50qd.jpeg",import.meta.url).href,nh=""+new URL("Me-C1cwp5zy.avif",import.meta.url).href,rh=""+new URL("Me-Rnuwi3im.webp",import.meta.url).href,sh=""+new URL("Me-mobile-600-WLZHCfmO.jpg",import.meta.url).href,oh=""+new URL("Me-mobile-900-BN16uvre.jpg",import.meta.url).href,ah=""+new URL("Me-mobile-600-BSb-mFgg.avif",import.meta.url).href,lh=""+new URL("Me-mobile-900-DRJcgzgw.avif",import.meta.url).href,ch=""+new URL("Me-mobile-600-DPwCrVdf.webp",import.meta.url).href,uh=""+new URL("Me-mobile-900-B_xwoMl7.webp",import.meta.url).href,dh=""+new URL("hangingquilts-CSgyMA7c.jpg",import.meta.url).href,hh=""+new URL("hangingquilts-4VrGTXBN.avif",import.meta.url).href,fh=""+new URL("hangingquilts-DcA0AW0j.webp",import.meta.url).href,ph=""+new URL("hangingquilts-mobile-600-C3soRhp2.jpg",import.meta.url).href,mh=""+new URL("hangingquilts-mobile-600-Bkobji0e.avif",import.meta.url).href,gh=""+new URL("hangingquilts-mobile-600-DMtoBjVZ.webp",import.meta.url).href,yh=({desktop:t,desktopAvif:e,desktopWebp:i,mobile600:n,mobile900:r,mobile600Avif:s,mobile900Avif:o,mobile600Webp:a,mobile900Webp:l,alt:u,...c})=>f.jsxs("picture",{children:[s&&f.jsx("source",{srcSet:s,type:"image/avif",media:"(max-width: 650px)"}),o&&f.jsx("source",{srcSet:o,type:"image/avif",media:"(max-width: 900px)"}),e&&f.jsx("source",{srcSet:e,type:"image/avif"}),a&&f.jsx("source",{srcSet:a,type:"image/webp",media:"(max-width: 650px)"}),l&&f.jsx("source",{srcSet:l,type:"image/webp",media:"(max-width: 900px)"}),i&&f.jsx("source",{srcSet:i,type:"image/webp"}),n&&f.jsx("source",{srcSet:n,type:"image/jpeg",media:"(max-width: 650px)"}),r&&f.jsx("source",{srcSet:r,type:"image/jpeg",media:"(max-width: 900px)"}),f.jsx("img",{src:t,alt:u,style:{width:"100%",height:"auto",objectFit:"cover"},loading:"lazy",...c})]});var pl={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},To=rt.createContext&&rt.createContext(pl),xh=["attr","size","title"];function vh(t,e){if(t==null)return{};var i=wh(t,e),n,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)n=s[r],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}function wh(t,e){if(t==null)return{};var i={};for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){if(e.indexOf(n)>=0)continue;i[n]=t[n]}return i}function _n(){return _n=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},_n.apply(this,arguments)}function So(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),i.push.apply(i,n)}return i}function An(t){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?So(Object(i),!0).forEach(function(n){bh(t,n,i[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):So(Object(i)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(i,n))})}return t}function bh(t,e,i){return e=_h(e),e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function _h(t){var e=Ah(t,"string");return typeof e=="symbol"?e:e+""}function Ah(t,e){if(typeof t!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var n=i.call(t,e);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function ml(t){return t&&t.map((e,i)=>rt.createElement(e.tag,An({key:i},e.attr),ml(e.child)))}function gs(t){return e=>rt.createElement(Th,_n({attr:An({},t.attr)},e),ml(t.child))}function Th(t){var e=i=>{var{attr:n,size:r,title:s}=t,o=vh(t,xh),a=r||i.size||"1em",l;return i.className&&(l=i.className),t.className&&(l=(l?l+" ":"")+t.className),rt.createElement("svg",_n({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},i.attr,n,o,{className:l,style:An(An({color:t.color||i.color},i.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&rt.createElement("title",null,s),t.children)};return To!==void 0?rt.createElement(To.Consumer,null,i=>e(i)):e(pl)}function Sh(t){return gs({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"7",y1:"17",x2:"17",y2:"7"},child:[]},{tag:"polyline",attr:{points:"7 7 17 7 17 17"},child:[]}]})(t)}function fw(t){return gs({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"},child:[]},{tag:"polyline",attr:{points:"7 10 12 15 17 10"},child:[]},{tag:"line",attr:{x1:"12",y1:"15",x2:"12",y2:"3"},child:[]}]})(t)}function kh(t){return gs({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M7 11V7a5 5 0 0 1 10 0v4"},child:[]}]})(t)}const Ph=P.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.7em 0.7em;
  margin-bottom: 0.5em;
  max-width: 520px;
  width: auto;
  align-items: center;
  justify-items: start;
  @media (max-width: 850px) {
    grid-template-columns: 1fr;
    max-width: 100%;
  }
`;function tn(t){if(!t)return t;try{return encodeURI(decodeURI(t))}catch{return encodeURI(t)}}const Ch=P.div`
  width: 60vw;
  max-width: 1000px;
  min-width: 320px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 1vw;
  margin: 0 auto 4vh auto;
  padding-top: 0;
  @media (max-width: 1320px) {
    width: 90vw;
    max-width: 90vw;
  }
    @media (max-width: 850px) {
      flex-direction: column-reverse;
      align-items: stretch;
      width: 100vw;
      max-width: 100vw;
      gap: 2vh;
      margin: 0 auto 4vh auto;
      padding-left: 2vw;
      padding-right: 2vw;
      padding-top: 0;
    }
`,jh=P.div`
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  gap: 0.5em;
  height: 100%;

  @media (max-width: 850px) {
    width: min(40rem, 100%);
    align-items: center;
    text-align: center;
    gap: 0.75rem;
    }
      background: white;
      padding: 0;
`,Mh=P.div`
  flex: 2 1 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: none;
  min-width: 0;
  min-height: 0;
  background: white;
  padding: 0;
  @media (max-width: 1000px) {
    justify-content: center;
    width: 100%;
    margin-bottom: 2rem;
  }
  @media (max-width: 850px) {
    margin-top: 0;
    flex-basis: auto;
    min-height: 0;
    min-width: 0;
    width: 100%;
    padding: 0;
  }
`,ko=P.img`
  width: 100%;
  max-width: 700px;
  min-width: 0;
  height: auto;
  border-radius: 18px;
  object-fit: contain;
  display: block;
  margin: 0 auto;
  @media (max-width: 1000px) {
    width: 98vw;
    max-width: 98vw;
    min-width: 0;
    margin: 0 auto;
  }
  @media (max-width: 850px) {
    width: 100%;
    max-width: 100vw;
    min-width: 0;
    height: auto;
    margin-bottom: 0;
    object-fit: contain;
    border-radius: 18px;
  }
`,Rh=P.h1`
  font-family: 'Space Grotesk', sans-serif;
  color: ${t=>t.theme.fontColor};
  margin: 0;
  font-size: clamp(2.2rem, 4vw + 0.6rem, 4.25rem);
  line-height: 0.96;
  text-wrap: balance;

  @media (max-width: 850px) {
    font-size: clamp(1.9rem, 8vw, 2.7rem);
    line-height: 1.02;
  }
`,Dh=P.div`
  height: 1px;
  background: #e0e0e0;
  width: 48px;
  margin: 0.1em 0 0.3em 0;

  @media (max-width: 850px) {
    margin: 0 auto 0.2rem;
  }
`;function gl({imageBaseName:t=null,imageSrc:e="",imageAvif:i=null,imageWebp:n=null,imageAlt:r="",$imageWidth:s="38vw",buttons:o=[],divider:a=!0,imageExt:l="jpg",title:u=""}){const c=t?`${t.startsWith("assets/")?"/":"/src/"}${t}`:null,d=c?tn(`${c}.avif`):null,h=c?tn(`${c}.webp`):null,m=c?tn(`${c}.${l||"jpg"}`):null;return f.jsxs(f.Fragment,{children:[f.jsx("div",{className:"mobile-nav-spacer",style:{display:"block",width:"100%",height:"12vh",minHeight:0,padding:0,margin:0,background:"transparent",zIndex:0,pointerEvents:"none",position:"relative"}}),f.jsxs(Ch,{className:"first",children:[f.jsxs(jh,{children:[f.jsx(Rh,{children:u}),a&&f.jsx(Dh,{}),f.jsx(Ph,{children:o.map(({href:g,label:p},y)=>f.jsxs(yl,{href:g,target:"_blank",rel:"noopener noreferrer",children:[p," ",f.jsx(Sh,{style:{marginLeft:6,fontSize:"1.2em"}})]},y))})]}),f.jsx(Mh,{children:t?f.jsxs("picture",{children:[f.jsx("source",{srcSet:d,type:"image/avif"}),f.jsx("source",{srcSet:h,type:"image/webp"}),f.jsx(ko,{src:m,alt:r,$imageWidth:s})]}):f.jsx(ko,{src:tn(e),alt:r,$imageWidth:s})})]})]})}const Eh=""+new URL("iphones—Mockup-Bvav94lR.avif",import.meta.url).href,Lh=""+new URL("iphones—Mockup-BBerJEYg.webp",import.meta.url).href,Vh=""+new URL("iphones—Mockup-huIJePT7.png",import.meta.url).href,Oh=""+new URL("Giga—mockup-Cnh_KW7P.jpg",import.meta.url).href,Ih=""+new URL("Messages—1920 x 1400-FBHNown_.png",import.meta.url).href,zh=""+new URL("Messages—1920 x 1400-Vn-3sQrl.avif",import.meta.url).href,Fh=""+new URL("Messages—1920 x 1400-Df8RyXSi.webp",import.meta.url).href,Bh=""+new URL("iMac_2-ByB4ft45.jpg",import.meta.url).href,Uh=""+new URL("iPad2-7y6oKxfc.jpg",import.meta.url).href,Nh=""+new URL("iPad2-CzLEDSAu.avif",import.meta.url).href,Wh=""+new URL("iPad2-C6zybvis.webp",import.meta.url).href,Gh=""+new URL("iPhone_2—Dark—Sq-CMwx-i__.jpg",import.meta.url).href,Xh=""+new URL("iPhone_2—Dark—Sq-o8OVfniw.avif",import.meta.url).href,Hh=""+new URL("iPhone_2—Dark—Sq-CN0kweFU.webp",import.meta.url).href,Yh=""+new URL("LightPhone2—Sq-BQ4v3uUl.jpg",import.meta.url).href,Zh=""+new URL("LightPhone2—Sq-BAf3JCmK.avif",import.meta.url).href,Kh=""+new URL("LightPhone2—Sq-BILeUpsy.webp",import.meta.url).href,$h=""+new URL("iMac-BBUHxs4x.jpg",import.meta.url).href,qh=""+new URL("iMac-D7y2uSFv.avif",import.meta.url).href,Qh=""+new URL("iMac-Cm5Zrfme.webp",import.meta.url).href,Jh=""+new URL("About-DuQLmo8y.png",import.meta.url).href,ef=""+new URL("About-DLK3SCR5.avif",import.meta.url).href,tf=""+new URL("About-Cx6Nw1aR.webp",import.meta.url).href,nf=""+new URL("Guides-CQbHOjad.jpg",import.meta.url).href,rf=""+new URL("Guides-6vl73ahM.avif",import.meta.url).href,sf=""+new URL("Guides-sAG3dRfa.webp",import.meta.url).href,of=""+new URL("CreateNewPost-CaFWZEze.png",import.meta.url).href,af=""+new URL("CreateNewPost-DFUk0sow.avif",import.meta.url).href,lf=""+new URL("CreateNewPost-DIIwIC2x.webp",import.meta.url).href,yl=P.a`
  display: inline-flex;
  align-items: center;
  gap: 0.32em;
  background: #111;
  color: #fff;
  font-weight: 600;
  font-size: 0.84rem;
  border: none;
  border-radius: 999px;
  padding: 0.36em 1.18em 0.36em 1.18em;
  margin-top: 0.7em;
  margin-bottom: 0.7em;
  text-decoration: none;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  transition: background 0.2s;
  width: fit-content;
  min-width: 0;
  flex-shrink: 0;
  flex-grow: 0;
  white-space: nowrap;
  &:hover {
    background: #333;
  }
`,ys=P.div`
  width: 60vw;
  max-width: 1000px;
  margin: 0 auto 6vh;
  padding: 4vh 4vw 6vh;
  background-color: #f5f5f5;
  border-radius: 24px;

  @media (max-width: 1320px) {
    width: 90vw;
    max-width: 90vw;
  }

  @media (max-width: 850px) {
    width: 100vw;
    max-width: 100vw;
    padding: 4vh 4vw 6vh;
    border-radius: 0;
  }
`,xs=P.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  row-gap: 2rem;
  column-gap: 4rem;
  position: relative;

  @media (max-width: 850px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`,tt=P.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`,it=P.h3`
  color: ${t=>t.theme.fontColor};
  font-size: 2.25rem;
  margin: 0;

  @media (max-width: 1320px) {
    font-size: 2.1rem;
  }

  @media (max-width: 850px) {
    font-size: 1.8rem;
  }
`,nt=P.h6`
  color: ${t=>t.theme.fontColor};
  font-size: 1.125rem;
  margin-top: 0.4rem;
  
  @media (max-width: 1320px) {
    font-size: 1rem;
  }
  @media (max-width: 850px) {
    font-size: 0.95rem;
  }
  line-height: 1.45;
  font-weight: 400;
  font-family: 'Space Grotesk', sans-serif;

  @media (max-width: 1320px) {
    font-size: 1.15rem;
  }

  @media (max-width: 850px) {
    font-size: 1rem;
  }
`,cf=P.img`
width: 60vw;
height: auto;
grid-row-start: ${t=>t.RowStart};
grid-row-end: 8;
align-self: center;
justify-self: center;
grid-column-start: ${t=>t.ColumnStart};
grid-column-end: ${t=>t.ColumnEnd};
@media (max-width: 850px) {
    grid-row-start: 2;
    grid-row-end: 3;
      grid-column-start: 1;
      width: 95vw;

  }
`,uf=P.h3`
grid-column-start: 2;
grid-column-end: 4;
grid-row-start: 2;
grid-row-end: 7;
font-size: ${t=>t.Fontsize};
width: 80vw;
font-family: 'Space Grotesk', sans-serif;
justify-self: center;
align-self: center;
color: ${t=>t.theme.fontColor};

@media (max-width: 1400px) {  
font-size: 1.8rem;
;}

@media (max-width: 850px){
    grid-column-start: 1;
    grid-row-end: 3;
    font-size: 1.2rem;
    width: 94vw;
    padding-left: 4vw;
    padding-right: 4vw;
    height: auto;
}
`,df=P.img.attrs({loading:"lazy",decoding:"async"})`
width: 60vw;
box-shadow: 5px 10px 24px rgba(0, 0, 0, 0.3);
margin-top: 3vh;
margin-bottom: 3vh;
border-radius: 24px;

@media(max-width: 1400px) {
  width: 96vw;
  height: auto;
}

@media(max-width: 850px) {
  width: 96vw;
  height: auto;
}
`,hf=P.div`
width: 100vw;
background-color: #2CA0FD;
grid-row-start: 4;
grid-row-end: 9;
z-index: -5;
`,vs=P.div`
background-color: ${t=>t.theme.backgroundTwo};
`,ff=P.div`
display: flex;
width: 100vw;
height: auto;

@media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    height: auto;
}
`,pf=P.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2vw;
  padding: 8vh 4vw;

  @media (max-width: 1000px) {
    flex-direction: column;       /* stack vertically */
    justify-content: center;
    align-items: center;          /* centers the block */
    padding: 12vh 4vw 12vh 4vw;   /* extra top/bottom padding */
    gap: 3vh;
  }
`,mf=P.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  max-width: 600px;

  @media (max-width: 1000px) {
    align-items: center;    /* centers the block horizontally */
    text-align: left;       /* keeps text left-aligned inside */
    margin-bottom: 2vh;     /* spacing below the text before image */
  }
`,gf=P.img`
  width: ${t=>t.Width};
  height: auto;

  @media (max-width: 1000px) {
    width: 80vw; /* image slightly bigger on vertical stack */
  }
`,yf=P.h2`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 4.5rem;
  color: ${t=>t.theme.fontColor};
  margin: 0;

  @media (max-width: 850px) {
    font-size: 3rem;
  }
`,xf=P.a`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.4rem;
  color: ${t=>t.theme.fontColor};
  text-decoration: none;
  margin-top: 1vh;

  &:hover {
    opacity: 0.75;
  }
`;function vf(){return T.useLayoutEffect(()=>{window.scrollTo(0,0)}),f.jsxs(vs,{children:[f.jsx(ps,{...se.giga,sameAs:Ue.sameAs,keywords:se.giga.keywords,jsonLd:{"@context":"https://schema.org","@type":"CreativeWork",headline:se.giga.title,description:se.giga.description,image:se.giga.image,author:{"@type":"Person",name:Ue.name,url:`${Ue.url}/about`},url:se.giga.url,datePublished:se.giga.datePublished,keywords:se.giga.keywords}}),f.jsx(gl,{title:"Giga",imageBaseName:"assets/Giga—Macbookv2",imageExt:"png",imageAlt:"Giga Macbook Mockup",imageWidth:"38vw",buttons:[{href:"https://gigaintelligence.com",label:"Visit Giga"}]}),f.jsx(ys,{children:f.jsxs(xs,{children:[f.jsxs(tt,{children:[f.jsx(it,{children:"Project Type"}),f.jsx(nt,{children:"UX/UI, Branding, Strategy"})]}),f.jsxs(tt,{children:[f.jsx(it,{children:"Digital Product"}),f.jsx(nt,{children:"Digital strategy platform used for data management, and private channel creation"})]}),f.jsxs(tt,{children:[f.jsx(it,{children:"My Role"}),f.jsx(nt,{children:"Responsible for researching, ideating, and generating ideas for a cohesive Giga experience. Designed and prototyped the Giga system & Web App"})]}),f.jsxs(tt,{children:[f.jsx(it,{children:"Timeframe"}),f.jsx(nt,{children:"1 1/2 years"})]})]})}),f.jsx(Lt,{src:Eh,webp:Lh,fallback:Vh,style:{width:"100vw",maxWidth:"100vw",height:"auto",objectFit:"cover",display:"block",margin:0,padding:0,borderRadius:0}}),f.jsx(ci,{style:{backgroundColor:"#ffffff"},children:f.jsx(li,{children:f.jsx(ai,{style:{color:"#5D5D5D"},children:"Giga is a startup focused on sharing experiences between its users. Through a robust data management system, users can share information and learn about their favorite subjects"})})}),f.jsx(Lt,{src:Oh}),f.jsx(Se,{children:f.jsx(oe,{src:Ih,avif:zh,webp:Fh})}),f.jsx(Se,{children:f.jsx(oe,{src:of,avif:af,webp:lf})}),f.jsx(Lt,{src:Bh}),f.jsx(Se,{children:f.jsx(oe,{src:Uh,avif:Nh,webp:Wh})}),f.jsx(ws,{srcLeft:Gh,avifLeft:Xh,webpLeft:Hh,srcRight:Yh,avifRight:Zh,webpRight:Kh}),f.jsx(Se,{children:f.jsx(oe,{src:$h,avif:qh,webp:Qh})}),f.jsx(Se,{style:{paddingBottom:"7vh"},children:f.jsxs("div",{style:{width:"100%",display:"flex",justifyContent:"center"},children:[f.jsx(oe,{src:Jh,avif:ef,webp:tf,style:{width:"60vw",maxWidth:"420px",minHeight:"auto",height:"auto",borderRadius:24,boxShadow:"0 2px 12px 0 rgba(0,0,0,0.06)"}}),f.jsx("style",{children:`
      @media (max-width: 850px) {
        .about-me-img {
          width: 96vw !important;
          max-width: 96vw !important;
          min-height: 60vw !important;
          border-radius: 0 !important;
        }
      }
    `})]})}),f.jsx(Se,{style:{justifyContent:"center"},children:f.jsx(oe,{src:nf,avif:rf,webp:sf})}),f.jsx(ci,{style:{backgroundColor:"black"},children:f.jsx(li,{children:f.jsxs(ai,{style:{color:"white",textAlign:"center"},children:["Founder — Rich Devlin",f.jsx("br",{}),"Lead Designer — Zachary MacTavish",f.jsx("br",{}),"Front-End Development — Xing Yi & Joel Fernando",f.jsx("br",{}),"Back-End Development — Rich Devlin"]})})})]})}const wf=Object.freeze(Object.defineProperty({__proto__:null,BackgroundColor:hf,Cellphones:ff,GigaRocket:cf,ProjectBlock:tt,ProjectButton:yl,ProjectContent:mf,ProjectDetails:xs,ProjectDetailsContainer:ys,ProjectGrid:pf,ProjectHeader:it,ProjectImage:gf,ProjectLink:xf,ProjectSubtitle:nt,ProjectTitle:yf,RisoItemtwo:df,StyledDiv:vs,TextSection:uf,default:vf},Symbol.toStringTag,{value:"Module"})),bf=""+new URL("Highpower-CRTc0nnX.jpg",import.meta.url).href,_f=""+new URL("Highpower-CsvHkKEI.avif",import.meta.url).href,Af=""+new URL("Highpower-boH7bfqj.webp",import.meta.url).href,Tf=""+new URL("AD—iphones-Ds9NHmDv.jpg",import.meta.url).href,Sf=""+new URL("AD—iphones-BiYAAO7N.avif",import.meta.url).href,kf=""+new URL("AD—iphones-DGO6M8H3.webp",import.meta.url).href,Pf=""+new URL("AD—pages-DKeMWlEm.jpg",import.meta.url).href,Cf=""+new URL("AD—pages-BS_f5aWS.avif",import.meta.url).href,jf=""+new URL("AD—pages-sKiLGjS1.webp",import.meta.url).href,Mf=""+new URL("AD—Macs-C-BI5_ml.jpg",import.meta.url).href,Rf=""+new URL("AD—Macs-CXf9hZaT.avif",import.meta.url).href,Df=""+new URL("AD—Macs--XjCyU3R.webp",import.meta.url).href,Ef=""+new URL("AD-ipad-7WzgOi0E.jpg",import.meta.url).href,Lf=""+new URL("AD-ipad-CUp8F2b6.avif",import.meta.url).href,Vf=""+new URL("AD-ipad-B7-837tt.webp",import.meta.url).href,Of=""+new URL("ADiPhone_2—Dark-BP_0B_M9.jpg",import.meta.url).href,If=""+new URL("ADLightPhone2-C7enY0US.jpg",import.meta.url).href,zf=""+new URL("ADiMac-Bsrxdz-Q.png",import.meta.url).href,Ff=""+new URL("ADiMac-DlvZlRIn.avif",import.meta.url).href,Bf=""+new URL("ADiMac-CKTwTd3P.webp",import.meta.url).href,Uf=""+new URL("Group 375-vcp1kghj.png",import.meta.url).href,Nf=""+new URL("Group 375-mZsO1BcE.avif",import.meta.url).href,Wf=""+new URL("Group 375-TF0Alkqk.webp",import.meta.url).href,Gf=""+new URL("Guides2-C--leQ0V.png",import.meta.url).href,Xf=""+new URL("Guides2-DiNUbQbr.avif",import.meta.url).href,Hf=""+new URL("Guides2-DIlDKfWv.webp",import.meta.url).href,Yf=""+new URL("Group 274-k1yUScXs.png",import.meta.url).href,Zf=""+new URL("Group 274-CN_qORPC.avif",import.meta.url).href,Kf=""+new URL("Group 274-CPP1pgPP.webp",import.meta.url).href,ni=t=>{if(!t)return t;try{return encodeURI(decodeURI(t))}catch{return encodeURI(t)}},Lt=({src:t,avif:e,webp:i,alt:n="",style:r={}})=>{typeof t=="string"&&t.split("/").pop().replace(/\.[^.]+$/,"");const s=ni(t),o=ni(e),a=ni(i);return f.jsxs("picture",{children:[o&&f.jsx("source",{srcSet:o,type:"image/avif"}),a&&f.jsx("source",{srcSet:a,type:"image/webp"}),f.jsx("img",{src:s,alt:n,style:{width:"100vw",height:"auto",margin:"3vh auto",display:"block",backgroundColor:"white",...r},loading:"lazy",decoding:"async"})]})},$f=P.div`
  position: relative;
  padding-right: 6vw;       /* desktop padding */
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 500;
  font-size: 2.5rem;
  width: 40vw;
  color: #a0a0a0;

  @media (max-width: 1770px) {
    font-size: 1.8rem;
  }

  @media (max-width: 1000px) {
    width: 90vw;               /* block takes most of the width */
    max-width: 700px;          /* prevents it from being too wide */
    font-size: 1.6rem;
    margin: 4vh auto 0 auto;   /* centers the block horizontally */
    padding-right: 0;          /* remove desktop padding on mobile */
    text-align: left;          /* text stays left-aligned inside the block */
  }
`,ai=P.p`
  font-family: 'Space Grotesk', sans-serif;
  color: #ffffff;
  font-size: clamp(1.05rem, 1.4vw + 0.75rem, 1.55rem);
  max-width: 60ch; /* comfortable measure inside 60vw container */
  line-height: 1.6;
  margin: 0;
  text-align: left; /* always left-aligned */

  @media (max-width: 850px) {
    font-size: clamp(1rem, 3.8vw, 1.2rem);
    max-width: 90vw;
    line-height: 1.65;
  }

  a.inline-link {
    color: #ffffff;
    text-decoration: underline;
    display: inline-flex;
    align-items: center;
    gap: 0.3em;

    svg {
      width: 0.8em;
      height: 0.8em;
      vertical-align: middle;
    }
  }
`,li=P.div`
  display: flex !important;
  flex-direction: column !important;
  justify-content: center !important; /* vertical centering */
  align-items: center !important;     /* horizontal centering */
  width: 60vw; /* constrain to site grid */
  max-width: 1000px; /* slightly smaller cap for consistency across pages */
  margin: 0 auto; /* center within section */
  box-sizing: border-box;
  padding: 0; /* no extra horizontal padding so width is true 60vw */

  @media (max-width: 850px) {
    width: 90vw;
    max-width: 650px; /* slightly smaller mobile cap to match perceived size */
    padding: 0;
    justify-content: center !important;
  }
`,ci=P.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #191919;
  width: 100vw; /* full width */
  min-height: 70vh; /* align section height with landing page text section */
  padding: 10vh 5vw; /* match landing page spacing */
  box-sizing: border-box;
  text-align: left;

  /* Prevent section from feeling too tall on short screens */
  @media (max-height: 700px) {
    min-height: 60vh;
    padding: 8vh 5vw; /* keep comfortable spacing on shorter viewports */
  }

  @media (max-height: 500px) {
    min-height: 50vh;
  }

  @media (max-width: 850px) {
    flex-direction: column;
    justify-content: center;
    min-height: 70vh;
    padding: 2.5vh 4vw;
  }
`,oe=({src:t,avif:e,webp:i,alt:n="",width:r="60vw",style:s={},responsive:o=!0,loading:a="lazy",decoding:l="async"})=>{typeof t=="string"&&t.split("/").pop().replace(/\.[^.]+$/,"");const u=ni(t),c=ni(e),d=ni(i),h={width:r,maxWidth:"1000px",height:"auto",display:"block",borderRadius:"24px",boxShadow:"0 2px 12px 0 rgba(0,0,0,0.06)",...s};return f.jsxs("picture",{children:[c&&f.jsx("source",{srcSet:c,type:"image/avif"}),d&&f.jsx("source",{srcSet:d,type:"image/webp"}),o&&f.jsx("style",{children:".single-image-responsive { @media (max-width: 1320px) { width: 90vw !important; max-width: 90vw !important; } @media (max-width: 850px) { width: 100vw !important; max-width: 100vw !important; border-radius: 0 !important; } }"}),f.jsx("img",{src:u,alt:n,className:o?"single-image-responsive":void 0,style:h,loading:a,decoding:l})]})},Se=P.div`
  display: flex;
  justify-content: center;
  background-color: ${t=>t.theme.backgroundTwo};
  align-items: center;
  height: auto;
  padding: 3vh 0;
  width: 100vw;
`,qf=P.div`
  display: grid;
  grid-template-columns: ${t=>t.ColumnsSet};
  grid-template-rows: ${t=>t.RowsSet};
  background-color: ${t=>t.theme.backgroundTwo};
  height: 100vh;
  width: 100vw;

  @media (max-width: 500px) {
      grid-template-columns: 100vw;
      height: auto;
      padding-top: 2vh;
      padding-bottom: 2vh;
      grid-template-rows: auto 1fr auto ;
  }
`,ws=({srcLeft:t,srcRight:e,altLeft:i="",altRight:n="",styleLeft:r={},styleRight:s={}})=>f.jsxs("div",{style:{display:"flex",width:"100vw",height:"auto",flexWrap:"wrap",margin:0,padding:0},children:[f.jsx("img",{src:t,alt:i,style:{width:"50vw",height:"auto",display:"block",borderRadius:0,boxShadow:"none",margin:0,padding:0,...r},loading:"lazy",decoding:"async"}),f.jsx("img",{src:e,alt:n,style:{width:"50vw",height:"auto",display:"block",borderRadius:0,boxShadow:"none",margin:0,padding:0,...s},loading:"lazy",decoding:"async"})]});function Qf(){return T.useEffect(()=>{window.scrollTo(0,0)},[]),f.jsxs(vs,{children:[f.jsx(ps,{...se["access-direct"],sameAs:Ue.sameAs,keywords:se["access-direct"].keywords,jsonLd:{"@context":"https://schema.org","@type":"CreativeWork",headline:se["access-direct"].title,description:se["access-direct"].description,image:se["access-direct"].image,author:{"@type":"Person",name:Ue.name,url:`${Ue.url}/about`},url:se["access-direct"].url,datePublished:se["access-direct"].datePublished,keywords:se["access-direct"].keywords}}),f.jsx(gl,{title:"Access Direct",imageBaseName:"assets/AD—Macbook",imageExt:"png",imageAlt:"Access Direct Macbook Mockup",imageWidth:"38vw",buttons:[{href:"https://access-direct.net",label:"Visit Access Direct"}]}),f.jsx(ys,{children:f.jsxs(xs,{children:[f.jsxs(tt,{children:[f.jsx(it,{children:"Project Type"}),f.jsx(nt,{children:"UX/UI, Branding, Strategy, Front-end development"})]}),f.jsxs(tt,{children:[f.jsx(it,{children:"Product"}),f.jsx(nt,{children:"Brand identity, print materials, and a website built with React.js"})]}),f.jsxs(tt,{children:[f.jsx(it,{children:"My Role"}),f.jsx(nt,{children:"Responsible for tidying up the brand logo, colors, creating print materials for tradeshows, social media, digital brochures and flyers, and building the company website"})]}),f.jsxs(tt,{children:[f.jsx(it,{children:"Timeframe"}),f.jsx(nt,{children:"4 years (Part-time)"})]})]})}),f.jsx(Lt,{src:Tf,avif:Sf,webp:kf,style:{backgroundColor:"white",width:"100vw",maxWidth:"100vw",height:"auto",objectFit:"cover",display:"block",margin:0,padding:0,borderRadius:0}}),f.jsx(ci,{style:{backgroundColor:"white"},children:f.jsx(li,{children:f.jsx(ai,{style:{color:"#5d5d5d"},children:"Access Direct is a company focused on security solutions. I collaborated closely on the project, working on their brand identity, logos, and website. I served as the UI Designer and Webmaster, redesigning the site and building it using React.js."})})}),f.jsx(Lt,{src:Pf,avif:Cf,webp:jf,style:{backgroundColor:"white",width:"100vw",maxWidth:"100vw",borderRadius:0,margin:"0 auto"}}),f.jsx(Se,{children:f.jsx(oe,{src:bf,avif:_f,webp:Af})}),f.jsx(Se,{children:f.jsx(oe,{src:Yf,avif:Zf,webp:Kf})}),f.jsx(Lt,{src:Mf,avif:Rf,webp:Df,style:{backgroundColor:"white",width:"100vw",maxWidth:"100vw",borderRadius:0,margin:"0 auto"}}),f.jsx(Se,{children:f.jsx(oe,{src:Ef,avif:Lf,webp:Vf})}),f.jsx(ws,{srcLeft:Of,srcRight:If,altLeft:"AD iPhone 2 Dark",altRight:"AD Light Phone 2",styleLeft:{},styleRight:{}}),f.jsx(Se,{children:f.jsx(oe,{src:zf,avif:Ff,webp:Bf})}),f.jsx(Se,{children:f.jsx(oe,{src:Uf,avif:Nf,webp:Wf})}),f.jsx(Se,{children:f.jsx(oe,{src:Gf,avif:Xf,webp:Hf})}),f.jsx(ci,{style:{backgroundColor:"black"},children:f.jsx(li,{children:f.jsxs(ai,{style:{color:"white",textAlign:"center"},children:["Founder — David Smith",f.jsx("br",{}),"Lead Designer — Zachary MacTavish",f.jsx("br",{}),"Website Development — Zachary MacTavish",f.jsx("br",{}),"Content Direction — Wendy Majewski, Alek Vasic"]})})})]})}const Jf=Object.freeze(Object.defineProperty({__proto__:null,DoubleImage:ws,FullBg:Lt,FullHeightTextSection:ci,ParagraphFour:$f,RisoFlex:Se,SingleGrid:qf,SingleImage:oe,TextContainer:li,TextContent:ai,default:Qf},Symbol.toStringTag,{value:"Module"})),bs=""+new URL("LeysiApp—Screens copy-BaSGok0d.jpg",import.meta.url).href,xl=""+new URL("LeysiApp—Screens copy-DyDGGxMx.avif",import.meta.url).href,vl=""+new URL("LeysiApp—Screens copy-Bn1_GwZn.webp",import.meta.url).href,ep=""+new URL("LeysiApp—Screens copy-mobile-600-C8iqQXxo.jpg",import.meta.url).href,tp=""+new URL("LeysiApp—Screens copy-mobile-900-Oa5Ykggn.jpg",import.meta.url).href,ip=""+new URL("LeysiApp—Screens copy-mobile-600-IR6MYy0y.avif",import.meta.url).href,np=""+new URL("LeysiApp—Screens copy-mobile-900-Pj5PYhXZ.avif",import.meta.url).href,rp=""+new URL("LeysiApp—Screens copy-mobile-600-C9_a0Bzk.webp",import.meta.url).href,sp=""+new URL("LeysiApp—Screens copy-mobile-900-C_adYz_k.webp",import.meta.url).href,_s=""+new URL("ThreePillars—pages-HOFvvO-e.jpg",import.meta.url).href,wl=""+new URL("ThreePillars—pages-qf8SA0OC.avif",import.meta.url).href,bl=""+new URL("ThreePillars—pages-DaWfehtu.webp",import.meta.url).href,op=""+new URL("ThreePillars—pages-mobile-600-D4sNL6Vg.jpg",import.meta.url).href,ap=""+new URL("ThreePillars—pages-mobile-900-BCwwWatW.jpg",import.meta.url).href,lp=""+new URL("ThreePillars—pages-mobile-600-X4PdkSeY.avif",import.meta.url).href,cp=""+new URL("ThreePillars—pages-mobile-900-ATpQH6Vw.avif",import.meta.url).href,up=""+new URL("ThreePillars—pages-mobile-600-CyM3YB0-.webp",import.meta.url).href,dp=""+new URL("ThreePillars—pages-mobile-900-BFWFD6u6.webp",import.meta.url).href,hp=""+new URL("Group 55618@2x-BcOmtPnh.png",import.meta.url).href,fp=""+new URL("Group 55618@2x-CX4oNLta.avif",import.meta.url).href,pp=""+new URL("Group 55618@2x-BM0PHBLp.webp",import.meta.url).href,As=""+new URL("BrandGuidelines—Mockup-ChTa7oCn.jpg",import.meta.url).href,_l=""+new URL("BrandGuidelines—Mockup-DB0KQvec.avif",import.meta.url).href,Al=""+new URL("BrandGuidelines—Mockup-CdO6X1p5.webp",import.meta.url).href,mp=""+new URL("BrandGuidelines—Mockup-mobile-600-BtKDHu9L.jpg",import.meta.url).href,gp=""+new URL("BrandGuidelines—Mockup-mobile-900-DVPJejGx.jpg",import.meta.url).href,yp="data:image/avif;base64,AAAAHGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZgAAAOptZXRhAAAAAAAAACFoZGxyAAAAAAAAAABwaWN0AAAAAAAAAAAAAAAAAAAAAA5waXRtAAAAAAABAAAAImlsb2MAAAAAREAAAQABAAAAAAEOAAEAAAAAAAAOmAAAACNpaW5mAAAAAAABAAAAFWluZmUCAAAAAAEAAGF2MDEAAAAAamlwcnAAAABLaXBjbwAAABNjb2xybmNseAACAAIABoAAAAAMYXYxQ4EhAgAAAAAUaXNwZQAAAAAAAAJYAAABkAAAABBwaXhpAAAAAAMICAgAAAAXaXBtYQAAAAAAAAABAAEEgYIDhAAADqBtZGF0EgAKBzhmJXx7BIAyih1EgAEEESRQAcB9illYVjQvWDnWu+rFz9KNeagvz/E2zZw0jp98j61HThP5cv4l4XEiHoAk+DewSWoNUqu2u+jG/oH6UeuP79F8VXK6gr4TmG4yMwXHYu/o+AjyZs6RMy6g8LPM89Xrjl1fnkYQc+iNowTkOdJrRmpOnwtdxldF2M5yeBGlErXvVckQAEXBsymSxNLZdkVGnFjWT27XtcL/8qP+ZhQCe2aJzQlr9MN2cn/2HNMG3SpZYPzh5icjQ+38vcf84i4AFsoJRzOw1HCUXJxyKZWjwxrpsNRaHM0o/F4zXlx3hjoVn+Gdpx8WG78D/tFr2IDg6bvJ20NaWaC2UMF5+90KrAVIOzR/b3OZ0b0T9YMoHr7b0w6LngHmk7wOXRK3vU9N9ZaN/RZPNWr9l72EXvulqFJX3Q6YFABG3kSbJyzuY6wGij9px8tTSjmiD+p+wabGVPP5yEjlHTP35bwUMGAtVSEmTsQGx9slkaAwOjb2e7dqMwUmtTnh5Z+3nTzaMUYPw9ajMPy5NZMpnC5NYTzG/CsH/zFpIgQxzptgUNfXWlJ1bkFY3QcuSmdhlFV+TvPL/WFsQY2ZUdWUIeVQ1HhvphRA1ew5CfoT45MCivTC1Tfo0unHs4LQzilZzl0CRNNPsrM4XTDi7yAn1btBQAT7ISHkLBMczkJpuUGLGlGnU1EA4+S03QQQOwxqA+schnH3UvsQqt0pi4QVqF2X/giXwq7u7G/3b1HweQi6PiPglXqneRWNbI0ngItxDu1SZUzYVBrzVSD4otyUvAYX2zQTR3cp/Ek890k+GphcSrp7Ym1QoBwH28UhnErLFtTkgUGc/rPvHPN2WL6dqBkOWoPTW2ftyDhKijXBFKFtYNSAy6blQLsvq8Wbg5TPWe3obVgwlFHhH7WSp0j8O6XPs/zg+3qsyIxQpgojNQmfi/NIBj44hXpdlXz+KsRHSZQzFqvQ0g9uhcXZY3vFbX1su4j0XxiG1HSFEEX5ws4/YSlwQOHh7kvVBx+UaznMgynt4U90/bylGC1DDKWh7YKwM1+THnhfi6cXd7DCz5CzTC7pbyVSKI6INn+b+QhWcggoQ5SrsWG4AHD1ZLuqiCFsUrG9+MeaPZrwZo1tWlki8+u2x7z0q0P+5f1Vt0tX4OuZJF7m8IhKtGNsiTcZUtWV+m0Axmz1P6yVnT2k6WD6doODab/vqPOM/tyhGCgBBzFqLUHz/QmxVTpvoHj3Hh7nDXbNUMmbKLxTwZGabBDgDL4Ah7h9BW+OQtT1x+jYfU7ARkYUx386ONL3vXBiANWOQQQK6jB8ECca4KBsRHB4J+0FWGKnTCJx2UFGzpHzF7w1FlyesTJpWQq4VaNKikQRG8Ic1wPoN0ByMZOqJwCNiF6NftTjy5PhngZj+PDF/PnhNJqjVyFFlX9CBx4rAQyGSbxOKu1H5BcJkvfB0diGO0qaRm9pV0WdSruZq9BWBvU2selTuv2TVNgD95d98Oqpdxu8TT7zoT06n5nBjDrMlqaVUl6m0k+rr18N9eHn0iG0+dI5rNULIuvl/B1ZwhDrge9pJ6PXbV/3JrDiHc2HnKUK1fgdlQo6RaBcP/g6HpXaboq2kVACRJXIzof3GDy+i/ya0DpLLpRefLOJv9BV9OLBm5oKjLLvYn7opvwf+Yz0k9CBibL53bGpLvHCGu9VDGCDxKimuu6/rEmR5oDDbYp1M4hD4+U5BN/1GUeHkaqMaiJwMeYBAw3ZBHY/LqV5Rl2lQnXsWJT6V5bP1HQDNd2t7kmSTdsabtirofLa8sw80uZAfXgmAKPKUJ5sUv7MsiHsdtZEduMVBXbpz1WUEhsVnSgQZ96NMVyTx1SGbExX/4TPQyoQs6UN6g7fsN67ku9wqiWn0MRgNytFgIBTfC5pF1YkTNVjGMhwOqtuKDNmNxO0mo5ma7hKvJuJQi+68VaYUxAnid4XxFtOZ1nKqRfGfmx4+Jcyk23jd/jjsAitnNxRk8LZ0vgucV+OW+Sy5AC7BsliCzxOPlfCrtRi48tiA2wg7cpMz7FH/a4Ifcebx2cGLmSJ+O08psQFRimNragUQRbVrXvT260JcQ6vNMrNLTFwewrWPl2YJCBFZcwHZcb/jql7Qla7VxXQEooUVQpPZfNskfSj0irl38nANpBgcoY/Px3koE9fNedop67ZVKtTNNnOTom+6W5xjWfv+wlonl2hjxxLiuUSiwqPk2ZCvqQAbsv1nphcsIY9lXHsy4lSg5IRSpk4TbRBw/mJdBNRZGj3HbmKEsOHEur3ShDFRJhlFsJDtvu6p9uxJJpYBrZthQCVjcmpq8wIe3O3FLT5JPl7F8/DCqWZpimmFidUbd0QNCLf7tFR69QI0dTYakNyWdhxyhg+a5aeEYw4IGFFUukd9uh9wE0LTjC32yuU5syi6GZEPTS6KpY6KBDFIkTmRkDZMX3G32oKgAcFCrwa+RvFuXMKUgfpAgH82v/5M5aZj20Bw3xRvtB5lzXHXNobJcPX8GI0Z/dVJCOA6X7Q3yhmnBVT2OQTPmDktm0Sh5vT0fMjSqf0/YrPXuy7lJtkxgj7dc5sAcnffbRtAT3nZGwCNTKtd+PJN9L4RZpO6uTQnqSumeZZfoeN7fhvRGIMjhiqUMIEjgaOGARA7Hls2TDOnEAxEnR93bkAk7j2ynZ5lBbqjM+MFBy1hi0n0/LL8Px99YEHvk+PD063k3A+FMTqPKPBEFzZMbHm0w5tabyqkCEmkpD3jv5RW4EMG1AKSBJdWGsiUf6AbqwProzMVV5Wddd8Q4Rg/AYHx4i7GykiSOuCHpl8UX3fB3EoEqnnGnEyxzBe+/gU/Gg6bQXa0LvjHhaoVmsDpeoptoYcWvS5/wGO7OR0/qoM4uBoZaCS+uSAUwcckhycOJv7VNsttxFIQjkzCLOOvulzjUq9ymd1HW3GKE0zqyZthSQCWjSCcWGYs5kycGzP6Ak5yPmvlELoWEAvnyPfj+zO0hEDAxP1ITPWI5UMiLYp4PD/TNbybFYfa7J6bnuVFjLsWGeOFYFfvy75lBhFi0AYP+VGtVEzZw2EL5pwDUyRuCPYqys0/qeQ4g3mrGX1zlw88OkACsV88pSOYjz2k7G7O5dQi6a+bAffXj2u3Pe7AeHvaZCvKz8GZcUaScojJCYiTLOMemlkYUcBzp/ojRjOr0HYHuzJ0dw706cDldeKxJkYdqqm3tlYqyZJUVQrYb7GBCx/3cmJVh1N0AcrN+RsY1nbkL5tLhzcoFydaYTZUBuFnFTcpAToko1pI5GK/AMIX8IEgcK0GmJ8sdApImnpn2P4Z0B1SaxI84ZLIY1Pm3ogyDMcE6Ycx6ZlLID2K8zwcpgE7a1l+0Yqsyr42IPswOIq8RD0MqHmbfgF1FROYuDa8Gnjpx7FjvMUbWY7R8qqvS0IFWM08/4PT8qlwMClMcrcY6PjJb7+BC74CCM4GcTMTVD8vPiXFCVD8pqXYBajtFKOSQv1N9mtKUKrH0BHd73V7JVNVUtsjHYHxvfn7AoztVEVLGwka5vjRVE5LIU3ZbHKYADRjXofqD8g0X9fKFhyJ5phkfa/COyGqmRODFZSJ+0ehGxXvj4mg3zJwXvYTKb17gpjCmjwTT0WvOwazg43EDM7Pv58hqGsQBGbG+xLVirHhJxBWK3YQl1Vbm6l7mcZY3ceCFdFvmqBip+h27GWxgxzqEdeJWu/ugxK97ORrYHpzGvg3oRtENEpmUiezvdlRYr33q31mC5R3HIcbLRNc6gwQf+R7QHr5O75pfPteAwMOFIdIpyaCetW2ZASTEROSDs6uI7BEzplfreEfZmvxkxWTWHlt+AeUPcujrlAbGD7/k2cVqxrxKhJ8Jyzb3aBPUUA3gSgfEyOzLcUr0q4JLtG5xemG/fxJyCbX/tizB/sbDT991Z7fKnpS493wiM0YXpRrQgoJPa810avmzVy8jLSgmdKvMdR4GF4JpGxjiaDktaIWmjW2FB4ETdz7H10SDVxazSyrOKrOWTvJ/k51T8Cp1R2w9fGg6sSGg9iNHTrfdNkzQWg0Id6+LsrxBVa3QY28pGL+cxXhKKLJ9Scxb+uSJ28OjWSfIra6Paq0RGQ76ikNMH8xh4p3cszbwjrcOoZsXKE82ZFM39jm5zjZAZR2GATe8gZfLC82XjEcQBoHSFSVPEXyIwsOpeVtM/YAokxZAS19aWNFl8Cv/33DgKOEZf8LcVSnqjas0TSzdf1NcWK57LNDQpUsHjdq/zd26LWDAIKBLKCzNFsfFo+xkH4eVTKfHAzIQqwFTLVcQwi9/ja+nqZsyeG7eh/yVjkL7pZ+881A4SE20VRWYENeUq0U7xa2KTfdy/rLfrcVlngFNbYNTxhnMT9oQYMHT/ZdNgd+tZUFv/0rLpGT3jQbmbxAjeIEagOBPdl5dT3JsPgo+JqQ/+oz170G2VUG7iLNf3UOHgNdj7mJp3NEDHDdoZ4xKxBnyED9fmQ1wje8F6Wj8BT5/9RhTC0PtsZaJr4DjRqyf3YptvhRxJn1mTPJk0y4tGh3Oc0kuST4b1xEF71rbu+9Z9qNqIIgyKTrncHj4+pu3JXVmXdxbPyScaGmd85g+75m9lw15WGLu7VNo2o7O2IsU06mCOYFnULk63Ip/5ZX6ec3IAoUgyR6VNYtpub6eX5cnQFyUqZwLD94s9u05qYY26DPwjtsjHxR4fNteLaHLNLv/PyJSNZUNjpxYO7B7cTntAhJ4XlwJmdysNjyDlJJaZRAFTbqOue8T5e3fSQpsUmAPL0NC6wxzeaYIU/b36WHOWfKHJWwkpdaVctseWXsogrV9emR7Bswk7QJTibsXt6gQ6nB6UJkFswCdVFix+t/a8lFVfnqTlkTq1Kt9zZzJnVKKfXXg1+x1yRbjhngVgOHpR2ZYoqYvXRcQCdVLIfLiJfWbulWfaEmpA7VIt0nzwk8gE/LT3gLa/OQBix1A==",xp=""+new URL("BrandGuidelines—Mockup-mobile-900-CRKeZG0r.avif",import.meta.url).href,vp=""+new URL("BrandGuidelines—Mockup-mobile-600-qD1PgM20.webp",import.meta.url).href,wp=""+new URL("BrandGuidelines—Mockup-mobile-900-zYjTaWO-.webp",import.meta.url).href,Tl=""+new URL("iphones—Mockup copy-BrqRRBeO.png",import.meta.url).href,Sl=""+new URL("iphones—Mockup copy-CKCSpVv0.avif",import.meta.url).href,kl=""+new URL("iphones—Mockup copy-R29mjgfV.webp",import.meta.url).href,bp=""+new URL("iphones—Mockup copy-mobile-600-ChLuUJod.jpg",import.meta.url).href,_p=""+new URL("iphones—Mockup copy-mobile-900-B9wNZ6mL.jpg",import.meta.url).href,Ap=""+new URL("iphones—Mockup copy-mobile-600-CPc0sSrA.avif",import.meta.url).href,Tp=""+new URL("iphones—Mockup copy-mobile-900-CXuQpuaG.avif",import.meta.url).href,Sp=""+new URL("iphones—Mockup copy-mobile-600-CXjJSlQg.webp",import.meta.url).href,kp=""+new URL("iphones—Mockup copy-mobile-900-C9zIkUDh.webp",import.meta.url).href,Pp="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2025.4.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2084.5%2048'%20style='enable-background:new%200%200%2084.5%2048;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%23A6D1CA;}%20%3c/style%3e%3cg%3e%3cpath%20class='st0'%20d='M23.8,0C37,0,47.7,10.7,47.7,24S37,48,23.8,48S0,37.2,0,24S10.7,0,23.8,0z%20M61.9,1.4%20c6.6,0,11.9,10.1,11.9,22.6h0c0,12.5-5.3,22.6-11.9,22.6S50,36.5,50,24S55.3,1.4,61.9,1.4z%20M80.3,3.8c2.3,0,4.2,9.1,4.2,20.2%20c0,11.2-1.9,20.2-4.2,20.2s-4.2-9.1-4.2-20.2S78,3.8,80.3,3.8z'/%3e%3c/g%3e%3c/svg%3e",Gt=""+new URL("Card5-BWd32u-m.webp",import.meta.url).href,Jn=""+new URL("Card5-PjD3mgQy.avif",import.meta.url).href,er=""+new URL("Card6-Dy8ZNgWu.png",import.meta.url).href,tr="data:image/avif;base64,AAAAHGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZgAAAOptZXRhAAAAAAAAACFoZGxyAAAAAAAAAABwaWN0AAAAAAAAAAAAAAAAAAAAAA5waXRtAAAAAAABAAAAImlsb2MAAAAAREAAAQABAAAAAAEOAAEAAAAAAAAKPAAAACNpaW5mAAAAAAABAAAAFWluZmUCAAAAAAEAAGF2MDEAAAAAamlwcnAAAABLaXBjbwAAABNjb2xybmNseAACAAIABoAAAAAMYXYxQ4EoAgAAAAAUaXNwZQAAAAAAAAV4AAADVgAAABBwaXhpAAAAAAMICAgAAAAXaXBtYQAAAAAAAAABAAEEgYIDhAAACkRtZGF0EgAKBzoqa76rwSAyrhQSAAKKZPFAAKkSlem9UMtk7VKEpcq6CM/MZkhfr7F/m5imu7H5Krs2s5D3ZGOtgYVL3FVWA5sQ99dpIA11ez1jycIFrR2Hj8J197TH3gVD7U8lun2Bi0ZlqyKUkVV1y2oAVSwhN+NbYibOK+4ZAPyRHIvotAuNHewQcvXH+2ErlxP2XI54C0qJawDJsQ8JNOMr2vLLm13iBo2lWmXjwAf+n8FDuB3EHqktjkOnvBV2EZQyVZ2uAM9VwBX+F4FmnavJicVJM1o0Ubw67SnAKV1JeT2WT2VjQ2PBxHpmIYdHEmcKMAd1tjkDp/CDX8cFpKUDvZlxEBNtrvxC24g3ZtCx+JZaoaZ/e8NsWF87H+prtwUnEYX4Cj3fgGUHsklQuwkA/VNgdlBSkGiyAC+7tQ6M9BxmZktqjJoT/QnLk5b6AX5CL6C+iuMLcLc3Xvfr1c7IraGQnY13yDPiAKpRD72AiQaRVaviBBzCuMnE0SLWMcphdW7NZ/aMARXlUVgvBTzw1L6GXB6S2gEUG6O1YmqARIwfxnVgpFnQO2XWSay1ATdZIJq7v7trw13/81gN/EnARC83gns17LwB/ijrtiEeNHt5JwaqDnm5LmKEkFUuZvanDSN5hzoZMkvt3jM3jsowSBPt2GgyNHLO1o/XgoM7cHDS3KkJtxJU8Vy7FfSOlkyaWoFdvK69Wp/BQEJlgZADnQ0h+gIl6vtZgskC+KYEvSJUeTOSzizaOC/iaLJmdowtH/FEU2iQrqXsCBr9dTQmyQYg0vW/yVZDb8ht3Gaugb7mKOQmDflopA535k2F2HT82eAGcb2tvqyRoztJb7JZT38aJsSOC/TerPecc6NQXm+cwv3+1hiubodxF7aRruk8QZNC2bLCRbTXX4p+zY521NUzrpNIhDTfnNxPwqAlGboI3rFiTgQNsaPA5A8549oZQMOd9OPq2BvEA3iOqKHpLZ7sRJR5xfT6X+FhKht3iEoAbADnloAZKHG5BZJuXkZI2q4SakoTd6QkkwIgErZOaPLSX85ty8CN3cY/LBM3TyMBLlMCnpUEJIARK/yYlO8ia9Lk3+fACuNYOBI7PVbv9ErQeWV7mptRek1U6+++J8XGyQUNm/lC9qGL/qX2CaDuI0clQ84qEpp9+WZLIwXPoQdpJvhKoBB2oi4FbM/3jcGyqDojQazgM/y0uuVe6/szjvdT508xL/cmShUJBerTij0iI76MQa8L80revaoxs4xiEYNg6odjOdLTE6DYvCwBWiVohkqA24gJEMY7UbwbfuSdZY4TiyLEf7uPHv/njowmOn4LSrSCwhGRrwLCU29uattb1NULCRiYS5j3dJOwOKGjjaap5qQ9zMb6T3dw6zlHOTWz7t9V52xcJvwYgt2l3ez7P5veAowIpdujTlls6xZyOUiyamjMRGODDCZL4wbLemrXojmwbKu8MaCmoAr6Mvmf4q9QIHrhGiDbbluYhlzSyzaoV6IChqt0L/CCeewsoK7oCgbviIzeYRhO1c5YcxwU0pdsaq8UNqmnKpEpG54CXiLALXxuhsOGNQBLYx0gwTTJ4MG8esw1XwUyjEGhDYSvEt1Wiek5qUqdzw60HMPlG2ubJLai5PewLXQx2Hc70Tb7QXcTU0j9EKwzVxqHl6B+urf73XjQmgx+JDNvCvNI9+vOwJMAOsp/KsrPk7LEOj19hvjwb5zAhaRjrLNbxsD3qcgPpg8UTEY/hL0e4DUeNP6NJs42xHI1Jhptu0Vk99CJ4y3pzjGwQ7UT8RPDpamCFPDfF4lk88jYBsni3uBCZMGEMAurAp5Ec35O+BlCPquhL36Lh3BNJW4HG4vYYa126sp4S3apevHZBI9RTbNaZyZFl8e2FguBjM8z+ZNM4wLpzSU5nPpRzus+9CXF43oX3pDvzFZKP+IlLm76WCT7xvPCeNDxg/T1yowhG2hZxYdQ63/kNCqQPmCtYX268mVmetzXywtSzCXV8MXhWZ6W1SB1G5/6bjsMLrRNksmyhLRxS5/l/a5543A0hyzcKFWOCh3RTNDelqbtVHW7I4rRutW1xDR7xeSsYrXVcx7c8P2adtyngWOnPAIxbhtEM9CnElZBvWEsSIJ7FTvd4qftRr8b87POHJudtzUf8TFlwhYhceIdpK43SxnQNgJso57NtTrkwrqu/lOWlkzXQ4+uUAWFaKDh9/7OEJHMqptAGAyQL+SMLcG2wU/3kzgP+QC3Jpj1GjZ9ium33LSXF9BtGivGtyk8x5J58g4Z5VCcaoDdG1pPTT6TsmoC7glmIqURhoto8t44MSdQAXO2ygJ65pgFJZ02bLn3L5rVB6dKY4BYh3CUXmkARnNQCZXT6qkGNRCZsnOgsrbnHlFtHbRzCEIN9ky0H7fgu6YIt6HXMqGjGmVUf4pOTKA75ISAj74z7B54fewmF9DB9zonSSKKxQht3jW6ONsWDq2854ZRydE5mAm/ezxTmiCw8oNnZH2ymnwqx6CnTQq+kvLtIFC8TLwCXeKTvJttTL42LjlTz+99scuxygibPv4KyTvJ8Mql8pSrxIcvvPFIvc3y/DJ7vZU1yi1usPru4DgRi4dOC0SYlh1/sfYotXu65vRv46Xjm4xcMi9MeNUx5JyVklg1HKA3QMKzJ4Z+Lm51MzGWDYLxZKar0DQaJp8u/kVKpbxzrgxr5ffm4S29CBKe3jgsPXxKIofQV2Fq4TtYNH6knVf0K2xVA8s1aZJHw/we06uah39fzVWge/6yL7nS+mlsR7gojxUnaGgq5N4Y5EQq8xjUWCF49pK2ZQYDFXqJmWM3lTOqHxxIWzpqIO9Ut9SwfRjS59/oxZJ/m+YhmyTlp+hwAbXQNA2bP4079J4aagffwlL/gCn8Lnm1mLpVfxNUE+ZklNnUzOY1tY/ys1T+WCQcz5I5kjiubTvQBVlYoRD57YzoOArA4ZaETgI1C5YWInmsBZMNvuCRCiKXeDRw4fSWeqLIzHWqoThdBD3zaTKxdh+TMp6YGkN70UzDBA4UvCTZFu88vK/nEm4Y/mQv/pw6frGciWWuAe77fnsPav1BDfpHcO/cCDl+zSD/9Rsurzizw25Fmse1yGUxv958H3LFyC+YRkt7FMlo7NJWCqGSrk+FXLFNwPQ2gKJAICHKCP27cWR9wMW/TCh60Zc7Ee7UnYXc46jWgYdrPLZweuBU3CM6nZ1ODMVZujBCyNAjDyWvHqbrnOgmQ8bv/UH9myWkH7x5igiR+mQ0XOU/iwBPX9cHcOp3UQoz43CKTrvRvmoQErUCqBCMiw6WvdhB2+cA/wte0Hb43pkJBz2d5xHqForQjSQVSgM4Nw8y4cPGhJn2eMTSl38R23l1hH/BWsmZ6xCZgFH6zf2qzCLi0yLE1ljfVrWVNeqoMbC2y//j6/eLvZWe4jJlRcRJz0DpFvOCE91U89/4dTpqPtpppANV9nJjrHM4/ihbeQWk9lVH1SnSDm4u0mpXaA==",ir=""+new URL("Card6-3nvBusir.webp",import.meta.url).href,Cp="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2025.4.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2084.5%2084.5'%20style='enable-background:new%200%200%2084.5%2084.5;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%23A6D1CA;}%20%3c/style%3e%3cpath%20class='st0'%20d='M42.3,0C19,0,0,19,0,42.3s19,42.3,42.3,42.3s42.3-19,42.3-42.3S65.6,0,42.3,0z%20M42.3,7c8.9,0,17,3.4,23.2,8.8%20c-0.7,0.9-1.6,2-3,3.4c-3,2.9-7.8,6.4-15.2,9.1c-5-9.2-9.9-16.1-13.1-20.5C36.8,7.3,39.5,7,42.3,7z%20M27.3,10.3%20c2.9,3.8,8,10.8,13.2,20.1C26.2,34.3,13,34.8,7.8,34.8C10.2,23.9,17.5,14.9,27.3,10.3z%20M70.3,21c4.3,5.7,7,12.7,7.2,20.4%20c-3.1-0.7-7.8-1.4-13.8-1.4c-3.1,0-6.7,0.2-10.5,0.7c-0.9-2-1.8-3.9-2.8-5.8c7.9-3,13.3-7,16.8-10.5C68.6,23.1,69.5,22.1,70.3,21z%20M43.7,36.9c0.8,1.6,1.6,3.3,2.4,5.1c-15.1,4.2-25.9,16.9-30.5,23.3C10.3,59.1,7,51.1,7,42.3c0-0.2,0-0.3,0-0.4%20C11.8,41.9,26.9,41.5,43.7,36.9z%20M63.7,46.9c6.3,0,10.6,0.9,13.2,1.5c-1.6,9.4-6.9,17.4-14.4,22.7c-1.4-8.4-3.7-16.4-6.5-23.8%20C58.8,47.1,61.4,46.9,63.7,46.9z%20M48.9,48.5c3.2,8,5.8,16.9,7.2,26.2c-4.2,1.8-8.9,2.8-13.8,2.8c-8.1,0-15.5-2.7-21.5-7.3%20C24.4,65.3,35.1,52.1,48.9,48.5z'/%3e%3c/svg%3e",jp="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2025.4.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2083.7%2083.7'%20style='enable-background:new%200%200%2083.7%2083.7;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%23A6D1CA;}%20%3c/style%3e%3cpath%20class='st0'%20d='M41.9,0C18.8,0,0,18.8,0,41.9s18.8,41.9,41.9,41.9s41.9-18.8,41.9-41.9S64.9,0,41.9,0z%20M41.9,6.3%20c19.7,0,35.6,15.9,35.6,35.6c0,16-10.6,29.6-25.1,34V65.2c0-4-2.3-7.4-5.6-9.1c11.2-2.2,18.2-11.2,15.5-20.2c-0.5-1.8-1.4-3.5-2.7-5%20c0.9-2.9,2-7.9-0.5-11.8c-4.8,0-7.8,3.3-9.3,5.3c-2.5-0.8-5.2-1.2-7.9-1.3c-2.7,0-5.4,0.4-7.9,1.2c-1.5-2-4.5-5.3-9.3-5.3%20c-2.8,4.5-1.1,9.4-0.1,11.4c-6.5,7.7-4,18.1,5.6,23.3c2.1,1.1,4.4,1.9,6.9,2.4c-2.7,1.4-4.8,4-5.4,7.1h-2.8c-2.7,0-3.8-1.1-5.2-3%20c-1.4-1.9-3-3.1-4.9-3.6c-1-0.1-1.7,0.7-0.8,1.3c3,2,3.2,5.3,4.4,7.5c1.1,2,3.3,3.7,5.8,3.7h3.3v6.8c-14.6-4.5-25.1-18-25.1-34%20C6.3,22.2,22.2,6.3,41.9,6.3z'/%3e%3c/svg%3e",Mp="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2025.4.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2081.2%2081.2'%20style='enable-background:new%200%200%2081.2%2081.2;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%23A6D1CA;}%20%3c/style%3e%3cpath%20class='st0'%20d='M22.6,0C10.1,0,0,10.1,0,22.6v36.1c0,12.4,10.1,22.6,22.6,22.6h36.1c12.4,0,22.6-10.1,22.6-22.6V22.6%20C81.2,10.1,71.1,0,58.6,0H22.6z%20M22.6,9h36.1c7.5,0,13.5,6.1,13.5,13.5v36.1c0,7.5-6.1,13.5-13.5,13.5H22.6C15.1,72.2,9,66.1,9,58.6%20V22.6C9,15.1,15.1,9,22.6,9z%20M63.1,13.5c-2.5,0-4.5,2-4.5,4.5s2,4.5,4.5,4.5c2.5,0,4.5-2,4.5-4.5S65.6,13.5,63.1,13.5z%20M40.6,18%20C28.2,18,18,28.2,18,40.6s10.1,22.6,22.6,22.6S63.1,53,63.1,40.6S53,18,40.6,18z%20M40.6,27.1c7.5,0,13.5,6.1,13.5,13.5%20s-6.1,13.5-13.5,13.5s-13.5-6.1-13.5-13.5S33.1,27.1,40.6,27.1z'/%3e%3c/svg%3e",Rp="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2025.4.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2079.1%2079.1'%20style='enable-background:new%200%200%2079.1%2079.1;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%23A6D1CA;}%20%3c/style%3e%3cpath%20class='st0'%20d='M12.1,0C5.5,0,0,5.5,0,12.1V67c0,6.6,5.5,12.1,12.1,12.1H67c6.6,0,12.1-5.5,12.1-12.1V12.1%20C79.1,5.5,73.7,0,67,0H12.1z%20M12.1,6.6H67c3.1,0,5.5,2.4,5.5,5.5V67c0,3.1-2.4,5.5-5.5,5.5H12.1c-3.1,0-5.5-2.4-5.5-5.5V12.1%20C6.6,9,9,6.6,12.1,6.6z%20M20.9,15.4c-3,0-5.5,2.5-5.5,5.5s2.5,5.5,5.5,5.5s5.5-2.5,5.5-5.5S23.9,15.4,20.9,15.4z%20M17.6,30.8%20c-1.2,0-2.2,1-2.2,2.2v28.6c0,1.2,1,2.2,2.2,2.2h6.6c1.2,0,2.2-1,2.2-2.2V33c0-1.2-1-2.2-2.2-2.2H17.6z%20M33,30.8%20c-1.2,0-2.2,1-2.2,2.2v28.6c0,1.2,1,2.2,2.2,2.2h6.6c1.2,0,2.2-1,2.2-2.2V45.1c0-3,2.5-5.5,5.5-5.5c3,0,5.5,2.5,5.5,5.5v16.5%20c0,1.2,1,2.2,2.2,2.2h6.6c1.2,0,2.2-1,2.2-2.2V44c0-7.3-5.9-13.2-13.2-13.2c-3.4,0-6.5,1.3-8.8,3.4V33c0-1.2-1-2.2-2.2-2.2H33z'/%3e%3c/svg%3e",Mt=P.span`
  visibility: hidden;
  opacity: 0;
  background: #222;
  color: #fff;
  text-align: center;
  border-radius: 4px;
  padding: 4px 10px;
  position: absolute;
  z-index: 10;
  bottom: 110%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.85rem;
  pointer-events: none;
  transition: opacity 0.18s;
  white-space: nowrap;
  box-shadow: 0 2px 8px rgba(0,0,0,0.12);
`,_i=P.a`
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: 4px;
  &:hover ${Mt}, &:focus ${Mt} {
    visibility: visible;
    opacity: 1;
  }
`,Dp=P.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1vw;
  
  @media (max-width: 450px) { 
    max-width: 320px;
    justify-content: flex-start;
    gap: 3vw;
  }


`,Ai=P.img`
  width: clamp(44px, 2vw, 70px);
  transition: all 1s ease;
  display: block;

  &:hover {
    filter: invert(0.2) sepia(0.5) saturate(11.7) hue-rotate(313.2deg) brightness(1.2);
  }
`;function Ep(){return f.jsxs(Dp,{children:[f.jsxs(_i,{href:"https://dribbble.com/Zmactavish",target:"_blank",rel:"noreferrer","aria-label":"Dribbble",children:[f.jsx(Ai,{src:Cp}),f.jsx(Mt,{children:"Dribbble"})]}),f.jsxs(_i,{href:"https://www.instagram.com/zackmichaelmactavish",target:"_blank",rel:"noreferrer","aria-label":"Instagram",children:[f.jsx(Ai,{src:Mp}),f.jsx(Mt,{children:"Instagram"})]}),f.jsxs(_i,{href:"https://www.linkedin.com/in/zacharymactavish/",target:"_blank",rel:"noreferrer","aria-label":"LinkedIn",children:[f.jsx(Ai,{src:Rp}),f.jsx(Mt,{children:"LinkedIn"})]}),f.jsxs(_i,{href:"https://github.com/ZackMacTavish",target:"_blank",rel:"noreferrer","aria-label":"Github",children:[f.jsx(Ai,{src:jp}),f.jsx(Mt,{children:"Github"})]}),f.jsxs(_i,{href:"https://medium.com/@zmactavish",target:"_blank",rel:"noreferrer","aria-label":"Medium",children:[f.jsx(Ai,{src:Pp}),f.jsx(Mt,{children:"Medium"})]})]})}const Lp=P.section`
  width: 100vw;
  background: white;
  padding: 14vh 5vw;
  box-sizing: border-box;
`,Vp=P(ms)``,Op=P.h2`
  margin: 0 0 2rem;
  font-family: "Space Grotesk", sans-serif;
  font-size: clamp(1.4rem, 3vw, 2rem);
  color: #111;
`,Ip=P.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 2rem;
  row-gap: 3rem;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`,zp=P.div`
  display: flex;
  flex-direction: column;
`,kt=P(Ki)`
  position: relative;
  display: block;
  width: 100%;
  aspect-ratio: 16/10;
  border-radius: ${t=>t.theme.radii.card};
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  background-color: #f5f5f5;
  text-decoration: none;
  transition: transform 180ms ease, box-shadow 180ms ease;

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px rgba(25, 118, 210, 0.45);
  }
`,Pl=P.div`
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  filter: saturate(0.9);
  transition: filter 180ms ease;
`,$t=P.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.15));
  transition: background 180ms ease;
`,Fp=P.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  pointer-events: none;
  color: #111;
`,Xt=P.div.attrs({"data-cursor":"link",role:"link"})`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 0.75rem;
`,Pt=P.h3`
  margin: 0;
  font-family: "Space Grotesk", sans-serif;
  font-weight: 600;
  font-size: 1.15rem;
  color: #111;
  transition: color 160ms ease;
`,Ht=P.p`
  margin: 0;
  font-family: "Space Grotesk", sans-serif;
  font-size: 0.95rem;
  color: #5d5d5d;
`,Yt=P(zp)`
  &:hover ${kt} {
    transform: translateY(-3px);
    box-shadow: 0 10px 36px rgba(0, 0, 0, 0.12);
  }

  &:hover ${Pl} {
    filter: saturate(1.08) brightness(1.05);
  }

  &:hover ${$t} {
    background: linear-gradient(to top, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.08));
  }

  &:hover ${Pt} {
    color: ${t=>t.theme.backgroundColor};
  }
`;function Bp(){return f.jsx(Lp,{children:f.jsxs(Vp,{children:[f.jsx(Op,{children:"My projects"}),f.jsxs(Ip,{children:[f.jsxs(Yt,{children:[f.jsxs(kt,{to:"/Microsoft","aria-label":"Microsoft project",children:[f.jsx(Pl,{style:{backgroundImage:"url('/assets/HP.png')",filter:"saturate(0.9) blur(2px)",transform:"scale(1.03)"}}),f.jsx("div",{style:{position:"absolute",inset:0,background:"rgba(255,255,255,0.7)"}}),f.jsx(Fp,{children:f.jsx(kh,{size:48})})]}),f.jsxs(Xt,{children:[f.jsx(Pt,{children:"Microsoft"}),f.jsx(Ht,{children:"Shopping ecosystem across Bing, Copilot, Windows, Outlook"})]})]}),f.jsxs(Yt,{children:[f.jsxs(kt,{to:"/Ux","aria-label":"Leysi project",children:[f.jsx(oe,{src:bs,avif:xl,webp:vl,alt:"Leysi project tile",width:"100%",responsive:!1,style:{position:"absolute",inset:0,height:"100%",objectFit:"cover",zIndex:0,borderRadius:0,boxShadow:"none"}}),f.jsx($t,{})]}),f.jsxs(Xt,{children:[f.jsx(Pt,{children:"Leysi"}),f.jsx(Ht,{children:"Brand identity and iOS app for campus deals"})]})]}),f.jsxs(Yt,{children:[f.jsxs(kt,{to:"/ThreePillars","aria-label":"Three Pillars project",children:[f.jsx(oe,{src:_s,avif:wl,webp:bl,alt:"Three Pillars project tile",width:"100%",responsive:!1,style:{position:"absolute",inset:0,height:"100%",objectFit:"cover",zIndex:0,borderRadius:0,boxShadow:"none"}}),f.jsx($t,{})]}),f.jsxs(Xt,{children:[f.jsx(Pt,{children:"ThreePillars"}),f.jsx(Ht,{children:"Recruiting site redesign and brand refresh"})]})]}),f.jsxs(Yt,{children:[f.jsxs(kt,{to:"/Piton","aria-label":"Piton project",children:[f.jsx(oe,{src:hp,avif:fp,webp:pp,alt:"Piton project tile",width:"100%",responsive:!1,style:{position:"absolute",inset:0,height:"100%",objectFit:"cover",zIndex:0,borderRadius:0,boxShadow:"none"}}),f.jsx($t,{})]}),f.jsxs(Xt,{children:[f.jsx(Pt,{children:"Piton"}),f.jsx(Ht,{children:"Product design and mobile interface work"})]})]}),f.jsxs(Yt,{children:[f.jsxs(kt,{to:"/Outsource","aria-label":"Outsource project",children:[f.jsx(oe,{src:As,avif:_l,webp:Al,alt:"Outsource project tile",width:"100%",responsive:!1,style:{position:"absolute",inset:0,height:"100%",objectFit:"cover",zIndex:0,borderRadius:0,boxShadow:"none"}}),f.jsx($t,{})]}),f.jsxs(Xt,{children:[f.jsx(Pt,{children:"Outsource"}),f.jsx(Ht,{children:"Commerce and editorial design across surfaces"})]})]}),f.jsxs(Yt,{children:[f.jsxs(kt,{to:"/Giga","aria-label":"Giga project",children:[f.jsx(oe,{src:Tl,avif:Sl,webp:kl,alt:"Giga project tile",width:"100%",responsive:!1,style:{position:"absolute",inset:0,height:"100%",objectFit:"cover",zIndex:0,borderRadius:0,boxShadow:"none"}}),f.jsx($t,{})]}),f.jsxs(Xt,{children:[f.jsx(Pt,{children:"Giga"}),f.jsx(Ht,{children:"Cross-platform product design and experiments"})]})]})]})]})})}const Up=T.lazy(()=>Ee(()=>import("./three-Cragz5qr.js"),__vite__mapDeps([0,1,2]),import.meta.url)),Zt=({desktop:t,desktopAvif:e,desktopWebp:i,mobile600:n,mobile900:r,mobile600Avif:s,mobile900Avif:o,mobile600Webp:a,mobile900Webp:l,alt:u})=>f.jsxs("picture",{children:[f.jsx("source",{srcSet:s,type:"image/avif",media:"(max-width: 650px)"}),f.jsx("source",{srcSet:o,type:"image/avif",media:"(max-width: 900px)"}),f.jsx("source",{srcSet:e,type:"image/avif"}),f.jsx("source",{srcSet:a,type:"image/webp",media:"(max-width: 650px)"}),f.jsx("source",{srcSet:l,type:"image/webp",media:"(max-width: 900px)"}),f.jsx("source",{srcSet:i,type:"image/webp"}),f.jsx("source",{srcSet:n,type:"image/jpeg",media:"(max-width: 650px)"}),f.jsx("source",{srcSet:r,type:"image/jpeg",media:"(max-width: 900px)"}),f.jsx("img",{src:t,alt:u,style:{width:"100%",height:"100%",objectFit:"cover"},loading:"lazy"})]}),Np=Ut`
  0% { transform: translate(-50%, -60%) rotate(0deg); }
  20% { transform: translate(-20%, -80%) rotate(90deg); }
  40% { transform: translate(10%, -40%) rotate(180deg); }
  60% { transform: translate(-40%, -20%) rotate(270deg); }
  80% { transform: translate(-70%, -50%) rotate(320deg); }
  100% { transform: translate(-50%, -60%) rotate(360deg); }
`,Wp=Ut`
  0% { transform: translate(60%, -50%) rotate(0deg); }
  20% { transform: translate(80%, -20%) rotate(90deg); }
  40% { transform: translate(40%, -70%) rotate(180deg); }
  60% { transform: translate(20%, -30%) rotate(270deg); }
  80% { transform: translate(70%, -60%) rotate(320deg); }
  100% { transform: translate(60%, -50%) rotate(360deg); }
`,Gp=Ut`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(6px); }
`,Xp=P.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4vw;
  width: 100vw;
  height: 100vh;
  background-color: ${t=>t.theme.backgroundColor};
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
    animation: ${Np} 35s ease-in-out infinite;
  }

  &::after {
    top: 40%;
    left: 65%;
    animation: ${Wp} 40s ease-in-out infinite;
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
`,Hp=t=>f.jsx(yh,{desktop:fl,desktopAvif:nh,desktopWebp:rh,mobile600:sh,mobile900:oh,mobile600Avif:ah,mobile900Avif:lh,mobile600Webp:ch,mobile900Webp:uh,alt:"Zack MacTavish portrait",loading:"eager",decoding:"async",fetchPriority:"high",className:"about-picture-img",style:{width:"21vw",height:"21vw",objectFit:"cover",borderRadius:"50%",flexShrink:0,position:"relative",zIndex:1,display:"block",...t.style,...typeof window<"u"&&window.innerWidth<=700?{width:"44vw",height:"44vw"}:{}}}),Yp=P.div`
  display: flex;
  position: relative;
  z-index: 1;
  @media (max-width: 1000px) {
    width: 100%;
    display: grid;           /* grid centers perfectly even with subpixel widths */
    place-items: center;     /* center both horizontally and vertically */
  }
  @media (max-width: 700px) {
    margin-bottom: 3.5vh;
  }
`,Zp=P.div`
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
`,Cl=P.div`
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
`,Kp=P.div`
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
`,$p=P.div`
  position: fixed; /* desktop: center relative to the viewport */
  bottom: 6vh;     /* consistent viewport spacing from bottom */
  left: 0;
  right: 0;
  transform: none;
  display: grid;
  place-items: center; /* robust horizontal centering without relying on transforms */
  opacity: ${({$visible:t})=>t?.8:0};
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
`,qp=P.div`
  animation: ${Gp} 1.5s infinite ease-in-out; /* animate only Y so X-centering stays intact */
  will-change: transform;
`,Qp=P.div`
  width: 24px;
  height: 24px;
  border-left: 3px solid white;
  border-bottom: 3px solid white;
  transform: rotate(-45deg);
  border-radius: 2px;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.35)); /* maintain visibility even near light backgrounds */
`,Jp=P.section`
  width: 100vw;
  background: white;
  padding: 14vh 5vw; /* slightly increased spacing above/below */
  box-sizing: border-box;
`,em=P(ms)`
  /* additional local overrides if needed */
`,tm=P.div`
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
`,jl=P(Ki)`
  position: relative;
  display: block;
  width: 100%;
  aspect-ratio: 16/10;
  border-radius: ${t=>t.theme.radii.card};
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0,0,0,0.08);
  background-color: #f5f5f5;
  text-decoration: none;
  transition: transform 180ms ease, box-shadow 180ms ease;
  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px rgba(25, 118, 210, 0.45);
  }
`,Ml=P.div`
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  filter: saturate(0.9);
  transition: filter 180ms ease;
`,Rl=P.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.45), rgba(0,0,0,0.15));
  transition: background 180ms ease;
`,im=P.div.attrs({"data-cursor":"link",role:"link"})`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 0.75rem; /* slightly below the image */
`,Dl=P.h3`
  margin: 0;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 600;
  font-size: 1.15rem;
  color: #111;
  transition: color 160ms ease;
`,nm=P.p`
  margin: 0;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.95rem;
  color: #5d5d5d;
`,rm=P.div`
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
`,sm=P.h2`
  margin: 0;
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(1.4rem, 3vw, 2rem);
  color: #111;
`,om=P.p`
  margin: 0;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1rem;
  color: #5d5d5d;
  text-align: right;
  a {
    color: #5d5d5d;
    text-decoration: none;
    transition: color 160ms ease;
  }
  a:hover {
    color: ${t=>t.theme.backgroundColor};
    text-decoration: none;
  }
`;P.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  pointer-events: none;
  color: #111;
`;const am=P.div`
  display: flex;
  flex-direction: column;

  &:hover ${jl} {
    transform: translateY(-3px);
    box-shadow: 0 10px 36px rgba(0,0,0,0.12);
  }

  &:hover ${Ml} {
    filter: saturate(1.08) brightness(1.05);
  }

  &:hover ${Rl} {
    background: linear-gradient(to top, rgba(0,0,0,0.25), rgba(0,0,0,0.08));
  }

  &:hover ${Dl} {
    color: ${t=>t.theme.backgroundColor};
  }
`;P.div`
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
`;P.div`
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
`;P.img.attrs({loading:"lazy",decoding:"async"})`
  width: 100%;
  height: auto;
  display: block; /* avoid inline image spacing quirks */
  object-fit: contain;
  border-radius: ${t=>t.theme.radii.card}; /* standardized card radius */
`;P(Cl)`
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
`;const lm=P.div`
  overflow-y: hidden;
  width: 100vw;
`,cm=P.div`
  display: grid;
  overflow-y: hidden;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  background-color: ${t=>t.theme.backgroundColor};
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
`,um=P.div`
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

  @media (max-width: 1000px) {
    padding: 1.2rem 1.5rem;
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
`,dm=P.h1`
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
`,hm=P.p`
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
`,fm=P.a`
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
`,pm=P.div`
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
`,El=({introDone:t=!0})=>{const[e,i]=T.useState(!1),[n,r]=T.useState(!1);return T.useLayoutEffect(()=>{window.scrollTo(0,0)},[]),T.useEffect(()=>{const s=()=>{!n&&window.scrollY>50&&(i(!1),r(!0))};return window.addEventListener("scroll",s),()=>window.removeEventListener("scroll",s)},[n]),T.useEffect(()=>{t&&(n||i(!0))},[t,n]),f.jsxs("div",{children:[f.jsx(ps,{...se.landing,sameAs:Ue.sameAs,keywords:se.landing.keywords||Ue.keywords}),f.jsxs(Xp,{children:[f.jsx(Yp,{children:f.jsx(Hp,{src:fl})}),f.jsxs(Zp,{children:[f.jsx(Kp,{children:f.jsx(Ep,{})}),f.jsx(Cl,{$widthsize:"47vw",children:"Hi, I'm Zack MacTavish, a product designer based in Philadelphia, PA. I'm currently shaping shopping experiences at Microsoft."})]}),!n&&t&&f.jsx($p,{$visible:e,children:f.jsx(qp,{children:f.jsx(Qp,{})})})]}),f.jsx(Bp,{}),f.jsx(ci,{style:{backgroundColor:"#f7f7f7",padding:"10vh 5vw",minHeight:"70vh"},children:f.jsx(li,{children:f.jsxs(ai,{style:{color:"#5d5d5d"},children:["I’ve partnered with agencies including"," ",f.jsx("a",{href:"https://www.publicisgroupe.com/en",target:"_blank",rel:"noopener noreferrer",style:{color:"#5d5d5d",textDecoration:"underline"},children:"Publicis Groupe"}),","," ",f.jsx("a",{href:"https://prairieandforge.com/",target:"_blank",rel:"noopener noreferrer",style:{color:"#5d5d5d",textDecoration:"underline"},children:"Prairie & Forge"}),", and"," ",f.jsx("a",{href:"https://varfaj.com/",target:"_blank",rel:"noopener noreferrer",style:{color:"#5d5d5d",textDecoration:"underline"},children:"Varfaj Partners"})," ","on work spanning UX, product, and brand design. My background includes agency experience in New York City and formal design training in Chicago. Client collaborations have included Microsoft, Walmart, Seagate Technology, and Chip Ganassi Racing."]})})}),f.jsx(Jp,{children:f.jsxs(em,{children:[f.jsxs(rm,{children:[f.jsx(sm,{children:"My writing"}),f.jsx(om,{children:f.jsx("a",{href:"https://medium.com/@zmactavish",target:"_blank",rel:"noopener noreferrer",children:"See my Medium Portfolio"})})]}),f.jsx(tm,{children:[...Array(6)].map((s,o)=>{const a=o===0,l=o===1,u=o===2,c=o===3,d=o===5,h=o===4,m=a?"https://medium.com/design-bootcamp/76-features-in-figma-to-know-7dbb35cdb5a7":l?"https://medium.com/design-bootcamp/my-journey-as-a-product-designer-at-microsoft-a5325be417b5":u?"https://medium.com/design-bootcamp/12-features-to-consider-when-designing-an-e-commerce-mobile-app-740efbeee7c8":c?"https://medium.com/design-bootcamp/designing-in-the-8pt-grid-system-f3c1183ea6e8":h?"https://medium.com/@zmactavish/0643beac797a":d?"https://medium.com/@zmactavish/30-html-tags-to-know-b0a85b122ded":"https://medium.com/@zmactavish",g=a?"76 features in Figma to know":l?"My journey as a Product designer at Microsoft.":u?"12 features to consider when building an E-commerce app":c?"Designing in the 8pt grid system":h?"30 CSS styles to know":d?"30 HTML tags to know":"Medium",p=a?"A guide to all things Figma":l?"What I've learned at Microsoft as a Product designer":u?"A practical UX checklist for e‑commerce mobile apps":c?"Consistent spacing for scalable UI components":h?"A beginner's guide to CSS for designers":"A beginner's guide to HTML for designers";let y=null;return a?y=f.jsx(Zt,{desktop:bs,desktopAvif:xl,desktopWebp:vl,mobile600:ep,mobile900:tp,mobile600Avif:ip,mobile900Avif:np,mobile600Webp:rp,mobile900Webp:sp,alt:"Leysi App project tile"}):l?y=f.jsx(Zt,{desktop:Tl,desktopAvif:Sl,desktopWebp:kl,mobile600:bp,mobile900:_p,mobile600Avif:Ap,mobile900Avif:Tp,mobile600Webp:Sp,mobile900Webp:kp,alt:"Giga project tile"}):u?y=f.jsx(Zt,{desktop:_s,desktopAvif:wl,desktopWebp:bl,mobile600:op,mobile900:ap,mobile600Avif:lp,mobile900Avif:cp,mobile600Webp:up,mobile900Webp:dp,alt:"Three Pillars project tile"}):c?y=f.jsx(Zt,{desktop:As,desktopAvif:_l,desktopWebp:Al,mobile600:mp,mobile900:gp,mobile600Avif:yp,mobile900Avif:xp,mobile600Webp:vp,mobile900Webp:wp,alt:"Outsource project tile"}):h?y=f.jsx(Zt,{desktop:er,desktopAvif:tr,desktopWebp:ir,mobile600:er,mobile900:er,mobile600Avif:tr,mobile900Avif:tr,mobile600Webp:ir,mobile900Webp:ir,alt:"Card 6"}):d&&(y=f.jsx(Zt,{desktop:Gt,desktopAvif:Jn,desktopWebp:Gt,mobile600:Gt,mobile900:Gt,mobile600Avif:Jn,mobile900Avif:Jn,mobile600Webp:Gt,mobile900Webp:Gt,alt:"Card 5"})),f.jsxs(am,{children:[f.jsxs(jl,{to:m,target:"_blank",rel:"noopener noreferrer","aria-label":a?"Medium article: 76 features in Figma to know":l?"Medium article: My journey as a Product designer at Microsoft.":u?"Medium article: 12 features to consider when building an E-commerce app":c?"Medium article: Designing in the 8pt grid system":h?"Medium article: 30 CSS styles to know":d?"Medium article: 30 HTML tags to know":`Medium writing card ${o+1}`,children:[f.jsx(Ml,{as:"div",style:{background:"none",padding:0},children:y}),f.jsx(Rl,{})]}),f.jsxs(im,{children:[f.jsx(Dl,{children:g}),f.jsx(nm,{children:p})]})]},`medium-card-${o}`)})})]})}),f.jsx(ih,{imageSrc:dh,imageAvif:hh,imageWebp:fh,imageAlt:"Quilt hanging",mobileSrc:ph,mobileAvif:mh,mobileWebp:gh,style:{color:"#fff"},textSize:"1.4rem",textColor:"#fff",children:f.jsxs("div",{style:{lineHeight:"1.6"},children:["Outside of work, I live with my partner ",f.jsx("a",{href:"https://oliviazitasmith.com",target:"_blank",rel:"noopener noreferrer",style:{color:"inherit",textDecoration:"underline"},children:"Olivia Smith"}),", who is also an artist. In my own creative time, I focus on making quilts that combine photography, textile techniques, and mixed media, exploring the intersection of art, design, and storytelling."]})}),f.jsx(lm,{children:f.jsxs(cm,{children:[f.jsxs(um,{children:[f.jsx(dm,{children:"Thanks for stopping by"}),f.jsx(hm,{children:"I'm also an artist. Check out my art portfolio."}),f.jsx(fm,{href:"https://zackmactavish.com",target:"_blank",rel:"noopener noreferrer",children:"View Portfolio"})]}),f.jsx(pm,{children:f.jsx(hl,{fallback:null,children:f.jsx(T.Suspense,{fallback:f.jsx("div",{style:{height:"50vh"}}),children:f.jsx(Up,{})})})})]})})]})};function Je(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Ll(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}var je={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ii={duration:.5,overwrite:!1,delay:0},Ts,ue,Y,Ve=1e8,W=1/Ve,Cr=Math.PI*2,mm=Cr/4,gm=0,Vl=Math.sqrt,ym=Math.cos,xm=Math.sin,ae=function(e){return typeof e=="string"},Q=function(e){return typeof e=="function"},st=function(e){return typeof e=="number"},Ss=function(e){return typeof e>"u"},qe=function(e){return typeof e=="object"},xe=function(e){return e!==!1},ks=function(){return typeof window<"u"},nn=function(e){return Q(e)||ae(e)},Ol=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},fe=Array.isArray,vm=/random\([^)]+\)/g,wm=/,\s*/g,Po=/(?:-?\.?\d|\.)+/gi,Il=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Qt=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,nr=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,zl=/[+-]=-?[.\d]+/,bm=/[^,'"\[\]\s]+/gi,_m=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,K,He,jr,Ps,Re={},Tn={},Fl,Bl=function(e){return(Tn=ui(e,Re))&&_e},Cs=function(e,i){return console.warn("Invalid property",e,"set to",i,"Missing plugin? gsap.registerPlugin()")},zi=function(e,i){return!i&&console.warn(e)},Ul=function(e,i){return e&&(Re[e]=i)&&Tn&&(Tn[e]=i)||Re},Fi=function(){return 0},Am={suppressEvents:!0,isStart:!0,kill:!1},cn={suppressEvents:!0,kill:!1},Tm={suppressEvents:!0},js={},ft=[],Mr={},Nl,Te={},rr={},Co=30,un=[],Ms="",Rs=function(e){var i=e[0],n,r;if(qe(i)||Q(i)||(e=[e]),!(n=(i._gsap||{}).harness)){for(r=un.length;r--&&!un[r].targetTest(i););n=un[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new uc(e[r],n)))||e.splice(r,1);return e},Vt=function(e){return e._gsap||Rs(Oe(e))[0]._gsap},Wl=function(e,i,n){return(n=e[i])&&Q(n)?e[i]():Ss(n)&&e.getAttribute&&e.getAttribute(i)||n},ve=function(e,i){return(e=e.split(",")).forEach(i)||e},ee=function(e){return Math.round(e*1e5)/1e5||0},Z=function(e){return Math.round(e*1e7)/1e7||0},ri=function(e,i){var n=i.charAt(0),r=parseFloat(i.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},Sm=function(e,i){for(var n=i.length,r=0;e.indexOf(i[r])<0&&++r<n;);return r<n},Sn=function(){var e=ft.length,i=ft.slice(0),n,r;for(Mr={},ft.length=0,n=0;n<e;n++)r=i[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Ds=function(e){return!!(e._initted||e._startAt||e.add)},Gl=function(e,i,n,r){ft.length&&!ue&&Sn(),e.render(i,n,!!(ue&&i<0&&Ds(e))),ft.length&&!ue&&Sn()},Xl=function(e){var i=parseFloat(e);return(i||i===0)&&(e+"").match(bm).length<2?i:ae(e)?e.trim():e},Hl=function(e){return e},De=function(e,i){for(var n in i)n in e||(e[n]=i[n]);return e},km=function(e){return function(i,n){for(var r in n)r in i||r==="duration"&&e||r==="ease"||(i[r]=n[r])}},ui=function(e,i){for(var n in i)e[n]=i[n];return e},jo=function t(e,i){for(var n in i)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=qe(i[n])?t(e[n]||(e[n]={}),i[n]):i[n]);return e},kn=function(e,i){var n={},r;for(r in e)r in i||(n[r]=e[r]);return n},Mi=function(e){var i=e.parent||K,n=e.keyframes?km(fe(e.keyframes)):De;if(xe(e.inherit))for(;i;)n(e,i.vars.defaults),i=i.parent||i._dp;return e},Pm=function(e,i){for(var n=e.length,r=n===i.length;r&&n--&&e[n]===i[n];);return n<0},Yl=function(e,i,n,r,s){var o=e[r],a;if(s)for(a=i[s];o&&o[s]>a;)o=o._prev;return o?(i._next=o._next,o._next=i):(i._next=e[n],e[n]=i),i._next?i._next._prev=i:e[r]=i,i._prev=o,i.parent=i._dp=e,i},Nn=function(e,i,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=i._prev,o=i._next;s?s._next=o:e[n]===i&&(e[n]=o),o?o._prev=s:e[r]===i&&(e[r]=s),i._next=i._prev=i.parent=null},mt=function(e,i){e.parent&&(!i||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Ot=function(e,i){if(e&&(!i||i._end>e._dur||i._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Cm=function(e){for(var i=e.parent;i&&i.parent;)i._dirty=1,i.totalDuration(),i=i.parent;return e},Rr=function(e,i,n,r){return e._startAt&&(ue?e._startAt.revert(cn):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(i,!0,r))},jm=function t(e){return!e||e._ts&&t(e.parent)},Mo=function(e){return e._repeat?di(e._tTime,e=e.duration()+e._rDelay)*e:0},di=function(e,i){var n=Math.floor(e=Z(e/i));return e&&n===e?n-1:n},Pn=function(e,i){return(e-i._start)*i._ts+(i._ts>=0?0:i._dirty?i.totalDuration():i._tDur)},Wn=function(e){return e._end=Z(e._start+(e._tDur/Math.abs(e._ts||e._rts||W)||0))},Gn=function(e,i){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Z(n._time-(e._ts>0?i/e._ts:((e._dirty?e.totalDuration():e._tDur)-i)/-e._ts)),Wn(e),n._dirty||Ot(n,e)),e},Zl=function(e,i){var n;if((i._time||!i._dur&&i._initted||i._start<e._time&&(i._dur||!i.add))&&(n=Pn(e.rawTime(),i),(!i._dur||$i(0,i.totalDuration(),n)-i._tTime>W)&&i.render(n,!0)),Ot(e,i)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-W}},Ze=function(e,i,n,r){return i.parent&&mt(i),i._start=Z((st(n)?n:n||e!==K?Le(e,n,i):e._time)+i._delay),i._end=Z(i._start+(i.totalDuration()/Math.abs(i.timeScale())||0)),Yl(e,i,"_first","_last",e._sort?"_start":0),Dr(i)||(e._recent=i),r||Zl(e,i),e._ts<0&&Gn(e,e._tTime),e},Kl=function(e,i){return(Re.ScrollTrigger||Cs("scrollTrigger",i))&&Re.ScrollTrigger.create(i,e)},$l=function(e,i,n,r,s){if(Ls(e,i,s),!e._initted)return 1;if(!n&&e._pt&&!ue&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Nl!==ke.frame)return ft.push(e),e._lazy=[s,r],1},Mm=function t(e){var i=e.parent;return i&&i._ts&&i._initted&&!i._lock&&(i.rawTime()<0||t(i))},Dr=function(e){var i=e.data;return i==="isFromStart"||i==="isStart"},Rm=function(e,i,n,r){var s=e.ratio,o=i<0||!i&&(!e._start&&Mm(e)&&!(!e._initted&&Dr(e))||(e._ts<0||e._dp._ts<0)&&!Dr(e))?0:1,a=e._rDelay,l=0,u,c,d;if(a&&e._repeat&&(l=$i(0,e._tDur,i),c=di(l,a),e._yoyo&&c&1&&(o=1-o),c!==di(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||ue||r||e._zTime===W||!i&&e._zTime){if(!e._initted&&$l(e,i,r,n,l))return;for(d=e._zTime,e._zTime=i||(n?W:0),n||(n=i&&!d),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;i<0&&Rr(e,i,n,!0),e._onUpdate&&!n&&Pe(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Pe(e,"onRepeat"),(i>=e._tDur||i<0)&&e.ratio===o&&(o&&mt(e,1),!n&&!ue&&(Pe(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=i)},Dm=function(e,i,n){var r;if(n>i)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>i)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<i)return r;r=r._prev}},hi=function(e,i,n,r){var s=e._repeat,o=Z(i)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Z(o*(s+1)+e._rDelay*s):o,a>0&&!r&&Gn(e,e._tTime=e._tDur*a),e.parent&&Wn(e),n||Ot(e.parent,e),e},Ro=function(e){return e instanceof ye?Ot(e):hi(e,e._dur)},Em={_start:0,endTime:Fi,totalDuration:Fi},Le=function t(e,i,n){var r=e.labels,s=e._recent||Em,o=e.duration()>=Ve?s.endTime(!1):e._dur,a,l,u;return ae(i)&&(isNaN(i)||i in r)?(l=i.charAt(0),u=i.substr(-1)==="%",a=i.indexOf("="),l==="<"||l===">"?(a>=0&&(i=i.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(i.substr(1))||0)*(u?(a<0?s:n).totalDuration()/100:1)):a<0?(i in r||(r[i]=o),r[i]):(l=parseFloat(i.charAt(a-1)+i.substr(a+1)),u&&n&&(l=l/100*(fe(n)?n[0]:n).totalDuration()),a>1?t(e,i.substr(0,a-1),n)+l:o+l)):i==null?o:+i},Ri=function(e,i,n){var r=st(i[1]),s=(r?2:1)+(e<2?0:1),o=i[s],a,l;if(r&&(o.duration=i[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=xe(l.vars.inherit)&&l.parent;o.immediateRender=xe(a.immediateRender),e<2?o.runBackwards=1:o.startAt=i[s-1]}return new ie(i[0],o,i[s+1])},wt=function(e,i){return e||e===0?i(e):i},$i=function(e,i,n){return n<e?e:n>i?i:n},he=function(e,i){return!ae(e)||!(i=_m.exec(e))?"":i[1]},Lm=function(e,i,n){return wt(n,function(r){return $i(e,i,r)})},Er=[].slice,ql=function(e,i){return e&&qe(e)&&"length"in e&&(!i&&!e.length||e.length-1 in e&&qe(e[0]))&&!e.nodeType&&e!==He},Vm=function(e,i,n){return n===void 0&&(n=[]),e.forEach(function(r){var s;return ae(r)&&!i||ql(r,1)?(s=n).push.apply(s,Oe(r)):n.push(r)})||n},Oe=function(e,i,n){return Y&&!i&&Y.selector?Y.selector(e):ae(e)&&!n&&(jr||!fi())?Er.call((i||Ps).querySelectorAll(e),0):fe(e)?Vm(e,n):ql(e)?Er.call(e,0):e?[e]:[]},Lr=function(e){return e=Oe(e)[0]||zi("Invalid scope")||{},function(i){var n=e.current||e.nativeElement||e;return Oe(i,n.querySelectorAll?n:n===e?zi("Invalid scope")||Ps.createElement("div"):e)}},Ql=function(e){return e.sort(function(){return .5-Math.random()})},Jl=function(e){if(Q(e))return e;var i=qe(e)?e:{each:e},n=It(i.ease),r=i.from||0,s=parseFloat(i.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,u=i.axis,c=r,d=r;return ae(r)?c=d={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(c=r[0],d=r[1]),function(h,m,g){var p=(g||i).length,y=o[p],v,w,x,b,_,j,S,A,k;if(!y){if(k=i.grid==="auto"?0:(i.grid||[1,Ve])[1],!k){for(S=-Ve;S<(S=g[k++].getBoundingClientRect().left)&&k<p;);k<p&&k--}for(y=o[p]=[],v=l?Math.min(k,p)*c-.5:r%k,w=k===Ve?0:l?p*d/k-.5:r/k|0,S=0,A=Ve,j=0;j<p;j++)x=j%k-v,b=w-(j/k|0),y[j]=_=u?Math.abs(u==="y"?b:x):Vl(x*x+b*b),_>S&&(S=_),_<A&&(A=_);r==="random"&&Ql(y),y.max=S-A,y.min=A,y.v=p=(parseFloat(i.amount)||parseFloat(i.each)*(k>p?p-1:u?u==="y"?p/k:k:Math.max(k,p/k))||0)*(r==="edges"?-1:1),y.b=p<0?s-p:s,y.u=he(i.amount||i.each)||0,n=n&&p<0?Zm(n):n}return p=(y[h]-y.min)/y.max||0,Z(y.b+(n?n(p):p)*y.v)+y.u}},Vr=function(e){var i=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=Z(Math.round(parseFloat(n)/e)*e*i);return(r-r%1)/i+(st(n)?0:he(n))}},ec=function(e,i){var n=fe(e),r,s;return!n&&qe(e)&&(r=n=e.radius||Ve,e.values?(e=Oe(e.values),(s=!st(e[0]))&&(r*=r)):e=Vr(e.increment)),wt(i,n?Q(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),u=Ve,c=0,d=e.length,h,m;d--;)s?(h=e[d].x-a,m=e[d].y-l,h=h*h+m*m):h=Math.abs(e[d]-a),h<u&&(u=h,c=d);return c=!r||u<=r?e[c]:o,s||c===o||st(o)?c:c+he(o)}:Vr(e))},tc=function(e,i,n,r){return wt(fe(e)?!i:n===!0?!!(n=0):!r,function(){return fe(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(i-e+n*.99))/n)*n*r)/r})},Om=function(){for(var e=arguments.length,i=new Array(e),n=0;n<e;n++)i[n]=arguments[n];return function(r){return i.reduce(function(s,o){return o(s)},r)}},Im=function(e,i){return function(n){return e(parseFloat(n))+(i||he(n))}},zm=function(e,i,n){return nc(e,i,0,1,n)},ic=function(e,i,n){return wt(n,function(r){return e[~~i(r)]})},Fm=function t(e,i,n){var r=i-e;return fe(e)?ic(e,t(0,e.length),i):wt(n,function(s){return(r+(s-e)%r)%r+e})},Bm=function t(e,i,n){var r=i-e,s=r*2;return fe(e)?ic(e,t(0,e.length-1),i):wt(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},Bi=function(e){return e.replace(vm,function(i){var n=i.indexOf("[")+1,r=i.substring(n||7,n?i.indexOf("]"):i.length-1).split(wm);return tc(n?r:+r[0],n?0:+r[1],+r[2]||1e-5)})},nc=function(e,i,n,r,s){var o=i-e,a=r-n;return wt(s,function(l){return n+((l-e)/o*a||0)})},Um=function t(e,i,n,r){var s=isNaN(e+i)?0:function(m){return(1-m)*e+m*i};if(!s){var o=ae(e),a={},l,u,c,d,h;if(n===!0&&(r=1)&&(n=null),o)e={p:e},i={p:i};else if(fe(e)&&!fe(i)){for(c=[],d=e.length,h=d-2,u=1;u<d;u++)c.push(t(e[u-1],e[u]));d--,s=function(g){g*=d;var p=Math.min(h,~~g);return c[p](g-p)},n=i}else r||(e=ui(fe(e)?[]:{},e));if(!c){for(l in i)Es.call(a,e,l,"get",i[l]);s=function(g){return Is(g,a)||(o?e.p:e)}}}return wt(n,s)},Do=function(e,i,n){var r=e.labels,s=Ve,o,a,l;for(o in r)a=r[o]-i,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Pe=function(e,i,n){var r=e.vars,s=r[i],o=Y,a=e._ctx,l,u,c;if(s)return l=r[i+"Params"],u=r.callbackScope||e,n&&ft.length&&Sn(),a&&(Y=a),c=l?s.apply(u,l):s.call(u),Y=o,c},ki=function(e){return mt(e),e.scrollTrigger&&e.scrollTrigger.kill(!!ue),e.progress()<1&&Pe(e,"onInterrupt"),e},Jt,rc=[],sc=function(e){if(e)if(e=!e.name&&e.default||e,ks()||e.headless){var i=e.name,n=Q(e),r=i&&!n&&e.init?function(){this._props=[]}:e,s={init:Fi,render:Is,add:Es,kill:r0,modifier:n0,rawVars:0},o={targetTest:0,get:0,getSetter:Os,aliases:{},register:0};if(fi(),e!==r){if(Te[i])return;De(r,De(kn(e,s),o)),ui(r.prototype,ui(s,kn(e,o))),Te[r.prop=i]=r,e.targetTest&&(un.push(r),js[i]=1),i=(i==="css"?"CSS":i.charAt(0).toUpperCase()+i.substr(1))+"Plugin"}Ul(i,r),e.register&&e.register(_e,r,we)}else rc.push(e)},N=255,Pi={aqua:[0,N,N],lime:[0,N,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,N],navy:[0,0,128],white:[N,N,N],olive:[128,128,0],yellow:[N,N,0],orange:[N,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[N,0,0],pink:[N,192,203],cyan:[0,N,N],transparent:[N,N,N,0]},sr=function(e,i,n){return e+=e<0?1:e>1?-1:0,(e*6<1?i+(n-i)*e*6:e<.5?n:e*3<2?i+(n-i)*(2/3-e)*6:i)*N+.5|0},oc=function(e,i,n){var r=e?st(e)?[e>>16,e>>8&N,e&N]:0:Pi.black,s,o,a,l,u,c,d,h,m,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Pi[e])r=Pi[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&N,r&N,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&N,e&N]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match(Po),!i)l=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,o=c<=.5?c*(u+1):c+u-c*u,s=c*2-o,r.length>3&&(r[3]*=1),r[0]=sr(l+1/3,s,o),r[1]=sr(l,s,o),r[2]=sr(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(Il),n&&r.length<4&&(r[3]=1),r}else r=e.match(Po)||Pi.transparent;r=r.map(Number)}return i&&!g&&(s=r[0]/N,o=r[1]/N,a=r[2]/N,d=Math.max(s,o,a),h=Math.min(s,o,a),c=(d+h)/2,d===h?l=u=0:(m=d-h,u=c>.5?m/(2-d-h):m/(d+h),l=d===s?(o-a)/m+(o<a?6:0):d===o?(a-s)/m+2:(s-o)/m+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),n&&r.length<4&&(r[3]=1),r},ac=function(e){var i=[],n=[],r=-1;return e.split(pt).forEach(function(s){var o=s.match(Qt)||[];i.push.apply(i,o),n.push(r+=o.length+1)}),i.c=n,i},Eo=function(e,i,n){var r="",s=(e+r).match(pt),o=i?"hsla(":"rgba(",a=0,l,u,c,d;if(!s)return e;if(s=s.map(function(h){return(h=oc(h,i,1))&&o+(i?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(c=ac(e),l=n.c,l.join(r)!==c.c.join(r)))for(u=e.replace(pt,"1").split(Qt),d=u.length-1;a<d;a++)r+=u[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(c.length?c:s.length?s:n).shift());if(!u)for(u=e.split(pt),d=u.length-1;a<d;a++)r+=u[a]+s[a];return r+u[d]},pt=(function(){var t="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Pi)t+="|"+e+"\\b";return new RegExp(t+")","gi")})(),Nm=/hsl[a]?\(/,lc=function(e){var i=e.join(" "),n;if(pt.lastIndex=0,pt.test(i))return n=Nm.test(i),e[1]=Eo(e[1],n),e[0]=Eo(e[0],n,ac(e[1])),!0},Ui,ke=(function(){var t=Date.now,e=500,i=33,n=t(),r=n,s=1e3/240,o=s,a=[],l,u,c,d,h,m,g=function p(y){var v=t()-r,w=y===!0,x,b,_,j;if((v>e||v<0)&&(n+=v-i),r+=v,_=r-n,x=_-o,(x>0||w)&&(j=++d.frame,h=_-d.time*1e3,d.time=_=_/1e3,o+=x+(x>=s?4:s-x),b=1),w||(l=u(p)),b)for(m=0;m<a.length;m++)a[m](_,h,j,y)};return d={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(y){return h/(1e3/(y||60))},wake:function(){Fl&&(!jr&&ks()&&(He=jr=window,Ps=He.document||{},Re.gsap=_e,(He.gsapVersions||(He.gsapVersions=[])).push(_e.version),Bl(Tn||He.GreenSockGlobals||!He.gsap&&He||{}),rc.forEach(sc)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),u=c||function(y){return setTimeout(y,o-d.time*1e3+1|0)},Ui=1,g(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),Ui=0,u=Fi},lagSmoothing:function(y,v){e=y||1/0,i=Math.min(v||33,e)},fps:function(y){s=1e3/(y||240),o=d.time*1e3+s},add:function(y,v,w){var x=v?function(b,_,j,S){y(b,_,j,S),d.remove(x)}:y;return d.remove(y),a[w?"unshift":"push"](x),fi(),x},remove:function(y,v){~(v=a.indexOf(y))&&a.splice(v,1)&&m>=v&&m--},_listeners:a},d})(),fi=function(){return!Ui&&ke.wake()},B={},Wm=/^[\d.\-M][\d.\-,\s]/,Gm=/["']/g,Xm=function(e){for(var i={},n=e.substr(1,e.length-3).split(":"),r=n[0],s=1,o=n.length,a,l,u;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),i[r]=isNaN(u)?u.replace(Gm,"").trim():+u,r=l.substr(a+1).trim();return i},Hm=function(e){var i=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",i);return e.substring(i,~r&&r<n?e.indexOf(")",n+1):n)},Ym=function(e){var i=(e+"").split("("),n=B[i[0]];return n&&i.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Xm(i[1])]:Hm(e).split(",").map(Xl)):B._CE&&Wm.test(e)?B._CE("",e):n},Zm=function(e){return function(i){return 1-e(1-i)}},It=function(e,i){return e&&(Q(e)?e:B[e]||Ym(e))||i},Nt=function(e,i,n,r){n===void 0&&(n=function(l){return 1-i(1-l)}),r===void 0&&(r=function(l){return l<.5?i(l*2)/2:1-i((1-l)*2)/2});var s={easeIn:i,easeOut:n,easeInOut:r},o;return ve(e,function(a){B[a]=Re[a]=s,B[o=a.toLowerCase()]=n;for(var l in s)B[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=B[a+"."+l]=s[l]}),s},cc=function(e){return function(i){return i<.5?(1-e(1-i*2))/2:.5+e((i-.5)*2)/2}},or=function t(e,i,n){var r=i>=1?i:1,s=(n||(e?.3:.45))/(i<1?i:1),o=s/Cr*(Math.asin(1/r)||0),a=function(c){return c===1?1:r*Math.pow(2,-10*c)*xm((c-o)*s)+1},l=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:cc(a);return s=Cr/s,l.config=function(u,c){return t(e,u,c)},l},ar=function t(e,i){i===void 0&&(i=1.70158);var n=function(o){return o?--o*o*((i+1)*o+i)+1:0},r=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:cc(n);return r.config=function(s){return t(e,s)},r};ve("Linear,Quad,Cubic,Quart,Quint,Strong",function(t,e){var i=e<5?e+1:e;Nt(t+",Power"+(i-1),e?function(n){return Math.pow(n,i)}:function(n){return n},function(n){return 1-Math.pow(1-n,i)},function(n){return n<.5?Math.pow(n*2,i)/2:1-Math.pow((1-n)*2,i)/2})});B.Linear.easeNone=B.none=B.Linear.easeIn;Nt("Elastic",or("in"),or("out"),or());(function(t,e){var i=1/e,n=2*i,r=2.5*i,s=function(a){return a<i?t*a*a:a<n?t*Math.pow(a-1.5/e,2)+.75:a<r?t*(a-=2.25/e)*a+.9375:t*Math.pow(a-2.625/e,2)+.984375};Nt("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Nt("Expo",function(t){return Math.pow(2,10*(t-1))*t+t*t*t*t*t*t*(1-t)});Nt("Circ",function(t){return-(Vl(1-t*t)-1)});Nt("Sine",function(t){return t===1?1:-ym(t*mm)+1});Nt("Back",ar("in"),ar("out"),ar());B.SteppedEase=B.steps=Re.SteppedEase={config:function(e,i){e===void 0&&(e=1);var n=1/e,r=e+(i?0:1),s=i?1:0,o=1-W;return function(a){return((r*$i(0,o,a)|0)+s)*n}}};Ii.ease=B["quad.out"];ve("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(t){return Ms+=t+","+t+"Params,"});var uc=function(e,i){this.id=gm++,e._gsap=this,this.target=e,this.harness=i,this.get=i?i.get:Wl,this.set=i?i.getSetter:Os},Ni=(function(){function t(i){this.vars=i,this._delay=+i.delay||0,(this._repeat=i.repeat===1/0?-2:i.repeat||0)&&(this._rDelay=i.repeatDelay||0,this._yoyo=!!i.yoyo||!!i.yoyoEase),this._ts=1,hi(this,+i.duration,1,1),this.data=i.data,Y&&(this._ctx=Y,Y.data.push(this)),Ui||ke.wake()}var e=t.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,hi(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(fi(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Gn(this,n),!s._dp||s.parent||Zl(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ze(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===W||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Gl(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Mo(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Mo(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?di(this._tTime,s)+1:1},e.timeScale=function(n,r){if(!arguments.length)return this._rts===-W?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Pn(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-W?0:this._rts,this.totalTime($i(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),Wn(this),Cm(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(fi(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==W&&(this._tTime-=W)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Z(n);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Ze(r,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(xe(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Pn(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Tm);var r=ue;return ue=n,Ds(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),ue=r,this},e.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Ro(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,Ro(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(Le(this,n),xe(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,xe(r)),this._dur||(this._zTime=-W),this},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-W:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-W,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-W)},e.eventCallback=function(n,r,s){var o=this.vars;return arguments.length>1?(r?(o[n]=r,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete o[n],this):o[n]},e.then=function(n){var r=this,s=r._prom;return new Promise(function(o){var a=Q(n)?n:Hl,l=function(){var c=r.then;r.then=null,s&&s(),Q(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=c),o(a),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){ki(this)},t})();De(Ni.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-W,_prom:0,_ps:!1,_rts:1});var ye=(function(t){Ll(e,t);function e(n,r){var s;return n===void 0&&(n={}),s=t.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=xe(n.sortChildren),K&&Ze(n.parent||K,Je(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Kl(Je(s),n.scrollTrigger),s}var i=e.prototype;return i.to=function(r,s,o){return Ri(0,arguments,this),this},i.from=function(r,s,o){return Ri(1,arguments,this),this},i.fromTo=function(r,s,o,a){return Ri(2,arguments,this),this},i.set=function(r,s,o){return s.duration=0,s.parent=this,Mi(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new ie(r,s,Le(this,o),1),this},i.call=function(r,s,o){return Ze(this,ie.delayedCall(0,r,s),o)},i.staggerTo=function(r,s,o,a,l,u,c){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new ie(r,o,Le(this,l)),this},i.staggerFrom=function(r,s,o,a,l,u,c){return o.runBackwards=1,Mi(o).immediateRender=xe(o.immediateRender),this.staggerTo(r,s,o,a,l,u,c)},i.staggerFromTo=function(r,s,o,a,l,u,c,d){return a.startAt=o,Mi(a).immediateRender=xe(a.immediateRender),this.staggerTo(r,s,a,l,u,c,d)},i.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:Z(r),d=this._zTime<0!=r<0&&(this._initted||!u),h,m,g,p,y,v,w,x,b,_,j,S;if(this!==K&&c>l&&r>=0&&(c=l),c!==this._tTime||o||d){if(a!==this._time&&u&&(c+=this._time-a,r+=this._time-a),h=c,b=this._start,x=this._ts,v=!x,d&&(u||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(j=this._yoyo,y=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(y*100+r,s,o);if(h=Z(c%y),c===l?(p=this._repeat,h=u):(_=Z(c/y),p=~~_,p&&p===_&&(h=u,p--),h>u&&(h=u)),_=di(this._tTime,y),!a&&this._tTime&&_!==p&&this._tTime-_*y-this._dur<=0&&(_=p),j&&p&1&&(h=u-h,S=1),p!==_&&!this._lock){var A=j&&_&1,k=A===(j&&p&1);if(p<_&&(A=!A),a=A?0:c%u?u:c,this._lock=1,this.render(a||(S?0:Z(p*y)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&Pe(this,"onRepeat"),this.vars.repeatRefresh&&!S&&(this.invalidate()._lock=1,_=p),a&&a!==this._time||v!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,k&&(this._lock=2,a=A?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!S&&this.invalidate()),this._lock=0,!this._ts&&!v)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(w=Dm(this,Z(a),Z(h)),w&&(c-=h-(h=w._start))),this._tTime=c,this._time=h,this._act=!!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&c&&u&&!s&&!_&&(Pe(this,"onStart"),this._tTime!==c))return this;if(h>=a&&r>=0)for(m=this._first;m;){if(g=m._next,(m._act||h>=m._start)&&m._ts&&w!==m){if(m.parent!==this)return this.render(r,s,o);if(m.render(m._ts>0?(h-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(h-m._start)*m._ts,s,o),h!==this._time||!this._ts&&!v){w=0,g&&(c+=this._zTime=-W);break}}m=g}else{m=this._last;for(var C=r<0?r:h;m;){if(g=m._prev,(m._act||C<=m._end)&&m._ts&&w!==m){if(m.parent!==this)return this.render(r,s,o);if(m.render(m._ts>0?(C-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(C-m._start)*m._ts,s,o||ue&&Ds(m)),h!==this._time||!this._ts&&!v){w=0,g&&(c+=this._zTime=C?-W:W);break}}m=g}}if(w&&!s&&(this.pause(),w.render(h>=a?0:-W)._zTime=h>=a?1:-1,this._ts))return this._start=b,Wn(this),this.render(r,s,o);this._onUpdate&&!s&&Pe(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&a)&&(b===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&mt(this,1),!s&&!(r<0&&!a)&&(c||a||!l)&&(Pe(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},i.add=function(r,s){var o=this;if(st(s)||(s=Le(this,s,r)),!(r instanceof Ni)){if(fe(r))return r.forEach(function(a){return o.add(a,s)}),this;if(ae(r))return this.addLabel(r,s);if(Q(r))r=ie.delayedCall(0,r);else return this}return this!==r?Ze(this,r,s):this},i.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Ve);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof ie?s&&l.push(u):(o&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,o)))),u=u._next;return l},i.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},i.remove=function(r){return ae(r)?this.removeLabel(r):Q(r)?this.killTweensOf(r):(r.parent===this&&Nn(this,r),r===this._recent&&(this._recent=this._last),Ot(this))},i.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Z(ke.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),t.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},i.addLabel=function(r,s){return this.labels[r]=Le(this,s),this},i.removeLabel=function(r){return delete this.labels[r],this},i.addPause=function(r,s,o){var a=ie.delayedCall(0,s||Fi,o);return a.data="isPause",this._hasPause=1,Ze(this,a,Le(this,r))},i.removePause=function(r){var s=this._first;for(r=Le(this,r);s;)s._start===r&&s.data==="isPause"&&mt(s),s=s._next},i.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)ct!==a[l]&&a[l].kill(r,s);return this},i.getTweensOf=function(r,s){for(var o=[],a=Oe(r),l=this._first,u=st(s),c;l;)l instanceof ie?Sm(l._targets,a)&&(u?(!ct||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(c=l.getTweensOf(a,s)).length&&o.push.apply(o,c),l=l._next;return o},i.tweenTo=function(r,s){s=s||{};var o=this,a=Le(o,r),l=s,u=l.startAt,c=l.onStart,d=l.onStartParams,h=l.immediateRender,m,g=ie.to(o,De({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||W,onStart:function(){if(o.pause(),!m){var y=s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());g._dur!==y&&hi(g,y,0,1).render(g._time,!0,!0),m=1}c&&c.apply(g,d||[])}},s));return h?g.render(0):g},i.tweenFromTo=function(r,s,o){return this.tweenTo(s,De({startAt:{time:Le(this,r)}},o))},i.recent=function(){return this._recent},i.nextLabel=function(r){return r===void 0&&(r=this._time),Do(this,Le(this,r))},i.previousLabel=function(r){return r===void 0&&(r=this._time),Do(this,Le(this,r),1)},i.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+W)},i.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,u;for(r=Z(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(u in l)l[u]>=o&&(l[u]+=r);return Ot(this)},i.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return t.prototype.invalidate.call(this,r)},i.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Ot(this)},i.totalDuration=function(r){var s=0,o=this,a=o._last,l=Ve,u,c,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(d=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Ze(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(s-=c,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=Z(c/o._ts),o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=u;hi(o,o===K&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(K._ts&&(Gl(K,Pn(r,K)),Nl=ke.frame),ke.frame>=Co){Co+=je.autoSleep||120;var s=K._first;if((!s||!s._ts)&&je.autoSleep&&ke._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||ke.sleep()}}},e})(Ni);De(ye.prototype,{_lock:0,_hasPause:0,_forcing:0});var Km=function(e,i,n,r,s,o,a){var l=new we(this._pt,e,i,0,1,gc,null,s),u=0,c=0,d,h,m,g,p,y,v,w;for(l.b=n,l.e=r,n+="",r+="",(v=~r.indexOf("random("))&&(r=Bi(r)),o&&(w=[n,r],o(w,e,i),n=w[0],r=w[1]),h=n.match(nr)||[];d=nr.exec(r);)g=d[0],p=r.substring(u,d.index),m?m=(m+1)%5:p.substr(-5)==="rgba("&&(m=1),g!==h[c++]&&(y=parseFloat(h[c-1])||0,l._pt={_next:l._pt,p:p||c===1?p:",",s:y,c:g.charAt(1)==="="?ri(y,g)-y:parseFloat(g)-y,m:m&&m<4?Math.round:0},u=nr.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=a,(zl.test(r)||v)&&(l.e=0),this._pt=l,l},Es=function(e,i,n,r,s,o,a,l,u,c){Q(r)&&(r=r(s||0,e,o));var d=e[i],h=n!=="get"?n:Q(d)?u?e[i.indexOf("set")||!Q(e["get"+i.substr(3)])?i:"get"+i.substr(3)](u):e[i]():d,m=Q(d)?u?e0:pc:Vs,g;if(ae(r)&&(~r.indexOf("random(")&&(r=Bi(r)),r.charAt(1)==="="&&(g=ri(h,r)+(he(h)||0),(g||g===0)&&(r=g))),!c||h!==r||Or)return!isNaN(h*r)&&r!==""?(g=new we(this._pt,e,i,+h||0,r-(h||0),typeof d=="boolean"?i0:mc,0,m),u&&(g.fp=u),a&&g.modifier(a,this,e),this._pt=g):(!d&&!(i in e)&&Cs(i,r),Km.call(this,e,i,h,r,m,l||je.stringFilter,u))},$m=function(e,i,n,r,s){if(Q(e)&&(e=Di(e,s,i,n,r)),!qe(e)||e.style&&e.nodeType||fe(e)||Ol(e))return ae(e)?Di(e,s,i,n,r):e;var o={},a;for(a in e)o[a]=Di(e[a],s,i,n,r);return o},dc=function(e,i,n,r,s,o){var a,l,u,c;if(Te[e]&&(a=new Te[e]).init(s,a.rawVars?i[e]:$m(i[e],r,s,o,n),n,r,o)!==!1&&(n._pt=l=new we(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==Jt))for(u=n._ptLookup[n._targets.indexOf(s)],c=a._props.length;c--;)u[a._props[c]]=l;return a},ct,Or,Ls=function t(e,i,n){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,u=r.onUpdate,c=r.runBackwards,d=r.yoyoEase,h=r.keyframes,m=r.autoRevert,g=e._dur,p=e._startAt,y=e._targets,v=e.parent,w=v&&v.data==="nested"?v.vars.targets:y,x=e._overwrite==="auto"&&!Ts,b=e.timeline,_=r.easeReverse||d,j,S,A,k,C,R,E,L,V,O,z,U,F;if(b&&(!h||!s)&&(s="none"),e._ease=It(s,Ii.ease),e._rEase=_&&(It(_)||e._ease),e._from=!b&&!!r.runBackwards,e._from&&(e.ratio=1),!b||h&&!r.stagger){if(L=y[0]?Vt(y[0]).harness:0,U=L&&r[L.prop],j=kn(r,js),p&&(p._zTime<0&&p.progress(1),i<0&&c&&a&&!m?p.render(-1,!0):p.revert(c&&g?cn:Am),p._lazy=0),o){if(mt(e._startAt=ie.set(y,De({data:"isStart",overwrite:!1,parent:v,immediateRender:!0,lazy:!p&&xe(l),startAt:null,delay:0,onUpdate:u&&function(){return Pe(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,i<0&&(ue||!a&&!m)&&e._startAt.revert(cn),a&&g&&i<=0&&n<=0){i&&(e._zTime=i);return}}else if(c&&g&&!p){if(i&&(a=!1),A=De({overwrite:!1,data:"isFromStart",lazy:a&&!p&&xe(l),immediateRender:a,stagger:0,parent:v},j),U&&(A[L.prop]=U),mt(e._startAt=ie.set(y,A)),e._startAt._dp=0,e._startAt._sat=e,i<0&&(ue?e._startAt.revert(cn):e._startAt.render(-1,!0)),e._zTime=i,!a)t(e._startAt,W,W);else if(!i)return}for(e._pt=e._ptCache=0,l=g&&xe(l)||l&&!g,S=0;S<y.length;S++){if(C=y[S],E=C._gsap||Rs(y)[S]._gsap,e._ptLookup[S]=O={},Mr[E.id]&&ft.length&&Sn(),z=w===y?S:w.indexOf(C),L&&(V=new L).init(C,U||j,e,z,w)!==!1&&(e._pt=k=new we(e._pt,C,V.name,0,1,V.render,V,0,V.priority),V._props.forEach(function(H){O[H]=k}),V.priority&&(R=1)),!L||U)for(A in j)Te[A]&&(V=dc(A,j,e,z,C,w))?V.priority&&(R=1):O[A]=k=Es.call(e,C,A,"get",j[A],z,w,0,r.stringFilter);e._op&&e._op[S]&&e.kill(C,e._op[S]),x&&e._pt&&(ct=e,K.killTweensOf(C,O,e.globalTime(i)),F=!e.parent,ct=0),e._pt&&l&&(Mr[E.id]=1)}R&&yc(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!F,h&&i<=0&&b.render(Ve,!0,!0)},qm=function(e,i,n,r,s,o,a,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[i],c,d,h,m;if(!u)for(u=e._ptCache[i]=[],h=e._ptLookup,m=e._targets.length;m--;){if(c=h[m][i],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==i&&c.fp!==i;)c=c._next;if(!c)return Or=1,e.vars[i]="+=0",Ls(e,a),Or=0,l?zi(i+" not eligible for reset. Try splitting into individual properties"):1;u.push(c)}for(m=u.length;m--;)d=u[m],c=d._pt||d,c.s=(r||r===0)&&!s?r:c.s+(r||0)+o*c.c,c.c=n-c.s,d.e&&(d.e=ee(n)+he(d.e)),d.b&&(d.b=c.s+he(d.b))},Qm=function(e,i){var n=e[0]?Vt(e[0]).harness:0,r=n&&n.aliases,s,o,a,l;if(!r)return i;s=ui({},i);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},Jm=function(e,i,n,r){var s=i.ease||r||"power1.inOut",o,a;if(fe(i))a=n[e]||(n[e]=[]),i.forEach(function(l,u){return a.push({t:u/(i.length-1)*100,v:l,e:s})});else for(o in i)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:i[o],e:s})},Di=function(e,i,n,r,s){return Q(e)?e.call(i,n,r,s):ae(e)&&~e.indexOf("random(")?Bi(e):e},hc=Ms+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",fc={};ve(hc+",id,stagger,delay,duration,paused,scrollTrigger",function(t){return fc[t]=1});var ie=(function(t){Ll(e,t);function e(n,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=t.call(this,o?r:Mi(r))||this;var l=a.vars,u=l.duration,c=l.delay,d=l.immediateRender,h=l.stagger,m=l.overwrite,g=l.keyframes,p=l.defaults,y=l.scrollTrigger,v=r.parent||K,w=(fe(n)||Ol(n)?st(n[0]):"length"in r)?[n]:Oe(n),x,b,_,j,S,A,k,C;if(a._targets=w.length?Rs(w):zi("GSAP target "+n+" not found. https://gsap.com",!je.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=m,g||h||nn(u)||nn(c)){r=a.vars;var R=r.easeReverse||r.yoyoEase;if(x=a.timeline=new ye({data:"nested",defaults:p||{},targets:v&&v.data==="nested"?v.vars.targets:w}),x.kill(),x.parent=x._dp=Je(a),x._start=0,h||nn(u)||nn(c)){if(j=w.length,k=h&&Jl(h),qe(h))for(S in h)~hc.indexOf(S)&&(C||(C={}),C[S]=h[S]);for(b=0;b<j;b++)_=kn(r,fc),_.stagger=0,R&&(_.easeReverse=R),C&&ui(_,C),A=w[b],_.duration=+Di(u,Je(a),b,A,w),_.delay=(+Di(c,Je(a),b,A,w)||0)-a._delay,!h&&j===1&&_.delay&&(a._delay=c=_.delay,a._start+=c,_.delay=0),x.to(A,_,k?k(b,A,w):0),x._ease=B.none;x.duration()?u=c=0:a.timeline=0}else if(g){Mi(De(x.vars.defaults,{ease:"none"})),x._ease=It(g.ease||r.ease||"none");var E=0,L,V,O;if(fe(g))g.forEach(function(z){return x.to(w,z,">")}),x.duration();else{_={};for(S in g)S==="ease"||S==="easeEach"||Jm(S,g[S],_,g.easeEach);for(S in _)for(L=_[S].sort(function(z,U){return z.t-U.t}),E=0,b=0;b<L.length;b++)V=L[b],O={ease:V.e,duration:(V.t-(b?L[b-1].t:0))/100*u},O[S]=V.v,x.to(w,O,E),E+=O.duration;x.duration()<u&&x.to({},{duration:u-x.duration()})}}u||a.duration(u=x.duration())}else a.timeline=0;return m===!0&&!Ts&&(ct=Je(a),K.killTweensOf(w),ct=0),Ze(v,Je(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(d||!u&&!g&&a._start===Z(v._time)&&xe(d)&&jm(Je(a))&&v.data!=="nested")&&(a._tTime=-W,a.render(Math.max(0,-c)||0)),y&&Kl(Je(a),y),a}var i=e.prototype;return i.render=function(r,s,o){var a=this._time,l=this._tDur,u=this._dur,c=r<0,d=r>l-W&&!c?l:r<W?0:r,h,m,g,p,y,v,w,x;if(!u)Rm(this,r,s,o);else if(d!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(h=d,x=this.timeline,this._repeat){if(p=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(p*100+r,s,o);if(h=Z(d%p),d===l?(g=this._repeat,h=u):(y=Z(d/p),g=~~y,g&&g===y?(h=u,g--):h>u&&(h=u)),v=this._yoyo&&g&1,v&&(h=u-h),y=di(this._tTime,p),h===a&&!o&&this._initted&&g===y)return this._tTime=d,this;g!==y&&this.vars.repeatRefresh&&!v&&!this._lock&&h!==p&&this._initted&&(this._lock=o=1,this.render(Z(p*g),!0).invalidate()._lock=0)}if(!this._initted){if($l(this,c?r:h,o,s,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==y))return this;if(u!==this._dur)return this.render(r,s,o)}if(this._rEase){var b=h<a;if(b!==this._inv){var _=b?a:u-a;this._inv=b,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=_?(b?-1:1)/_:0,this._invScale=b?-this.ratio:1-this.ratio,this._invEase=b?this._rEase:this._ease}this.ratio=w=this._invRatio+this._invScale*this._invEase((h-this._invTime)*this._invRecip)}else this.ratio=w=this._ease(h/u);if(this._from&&(this.ratio=w=1-w),this._tTime=d,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&d&&!s&&!y&&(Pe(this,"onStart"),this._tTime!==d))return this;for(m=this._pt;m;)m.r(w,m.d),m=m._next;x&&x.render(r<0?r:x._dur*x._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(c&&Rr(this,r,s,o),Pe(this,"onUpdate")),this._repeat&&g!==y&&this.vars.onRepeat&&!s&&this.parent&&Pe(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(c&&!this._onUpdate&&Rr(this,r,!0,!0),(r||!u)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&mt(this,1),!s&&!(c&&!a)&&(d||a||v)&&(Pe(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},i.targets=function(){return this._targets},i.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),t.prototype.invalidate.call(this,r)},i.resetTo=function(r,s,o,a,l){Ui||ke.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Ls(this,u),c=this._ease(u/this._dur),qm(this,r,s,o,a,c,u,l)?this.resetTo(r,s,o,a,1):(Gn(this,0),this.parent||Yl(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},i.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ki(this):this.scrollTrigger&&this.scrollTrigger.kill(!!ue),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,ct&&ct.vars.overwrite!==!0)._first||ki(this),this.parent&&o!==this.timeline.totalDuration()&&hi(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Oe(r):a,u=this._ptLookup,c=this._pt,d,h,m,g,p,y,v;if((!s||s==="all")&&Pm(a,l))return s==="all"&&(this._pt=0),ki(this);for(d=this._op=this._op||[],s!=="all"&&(ae(s)&&(p={},ve(s,function(w){return p[w]=1}),s=p),s=Qm(a,s)),v=a.length;v--;)if(~l.indexOf(a[v])){h=u[v],s==="all"?(d[v]=s,g=h,m={}):(m=d[v]=d[v]||{},g=s);for(p in g)y=h&&h[p],y&&((!("kill"in y.d)||y.d.kill(p)===!0)&&Nn(this,y,"_pt"),delete h[p]),m!=="all"&&(m[p]=1)}return this._initted&&!this._pt&&c&&ki(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Ri(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return Ri(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return K.killTweensOf(r,s,o)},e})(Ni);De(ie.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ve("staggerTo,staggerFrom,staggerFromTo",function(t){ie[t]=function(){var e=new ye,i=Er.call(arguments,0);return i.splice(t==="staggerFromTo"?5:4,0,0),e[t].apply(e,i)}});var Vs=function(e,i,n){return e[i]=n},pc=function(e,i,n){return e[i](n)},e0=function(e,i,n,r){return e[i](r.fp,n)},t0=function(e,i,n){return e.setAttribute(i,n)},Os=function(e,i){return Q(e[i])?pc:Ss(e[i])&&e.setAttribute?t0:Vs},mc=function(e,i){return i.set(i.t,i.p,Math.round((i.s+i.c*e)*1e6)/1e6,i)},i0=function(e,i){return i.set(i.t,i.p,!!(i.s+i.c*e),i)},gc=function(e,i){var n=i._pt,r="";if(!e&&i.b)r=i.b;else if(e===1&&i.e)r=i.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=i.c}i.set(i.t,i.p,r,i)},Is=function(e,i){for(var n=i._pt;n;)n.r(e,n.d),n=n._next},n0=function(e,i,n,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,i,n),s=o},r0=function(e){for(var i=this._pt,n,r;i;)r=i._next,i.p===e&&!i.op||i.op===e?Nn(this,i,"_pt"):i.dep||(n=1),i=r;return!n},s0=function(e,i,n,r){r.mSet(e,i,r.m.call(r.tween,n,r.mt),r)},yc=function(e){for(var i=e._pt,n,r,s,o;i;){for(n=i._next,r=s;r&&r.pr>i.pr;)r=r._next;(i._prev=r?r._prev:o)?i._prev._next=i:s=i,(i._next=r)?r._prev=i:o=i,i=n}e._pt=s},we=(function(){function t(i,n,r,s,o,a,l,u,c){this.t=n,this.s=s,this.c=o,this.p=r,this.r=a||mc,this.d=l||this,this.set=u||Vs,this.pr=c||0,this._next=i,i&&(i._prev=this)}var e=t.prototype;return e.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=s0,this.m=n,this.mt=s,this.tween=r},t})();ve(Ms+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(t){return js[t]=1});Re.TweenMax=Re.TweenLite=ie;Re.TimelineLite=Re.TimelineMax=ye;K=new ye({sortChildren:!1,defaults:Ii,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});je.stringFilter=lc;var zt=[],dn={},o0=[],Lo=0,a0=0,lr=function(e){return(dn[e]||o0).map(function(i){return i()})},Ir=function(){var e=Date.now(),i=[];e-Lo>2&&(lr("matchMediaInit"),zt.forEach(function(n){var r=n.queries,s=n.conditions,o,a,l,u;for(a in r)o=He.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,u=1);u&&(n.revert(),l&&i.push(n))}),lr("matchMediaRevert"),i.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),Lo=e,lr("matchMedia"))},xc=(function(){function t(i,n){this.selector=n&&Lr(n),this.data=[],this._r=[],this.isReverted=!1,this.id=a0++,i&&this.add(i)}var e=t.prototype;return e.add=function(n,r,s){Q(n)&&(s=r,r=n,n=Q);var o=this,a=function(){var u=Y,c=o.selector,d;return u&&u!==o&&u.data.push(o),s&&(o.selector=Lr(s)),Y=o,d=r.apply(o,arguments),Q(d)&&o._r.push(d),Y=u,o.selector=c,o.isReverted=!1,d};return o.last=a,n===Q?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var r=Y;Y=null,n(this),Y=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof t?n.push.apply(n,r.getTweens()):r instanceof ie&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,u;l--;)u=s.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}));for(a.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,d){return d.g-c.g||-1/0}).forEach(function(c){return c.t.revert(n)}),l=s.data.length;l--;)u=s.data[l],u instanceof ye?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof ie)&&u.revert&&u.revert(n);s._r.forEach(function(c){return c(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=zt.length;o--;)zt[o].id===this.id&&zt.splice(o,1)},e.revert=function(n){this.kill(n||{})},t})(),l0=(function(){function t(i){this.contexts=[],this.scope=i,Y&&Y.data.push(this)}var e=t.prototype;return e.add=function(n,r,s){qe(n)||(n={matches:n});var o=new xc(0,s||this.scope),a=o.conditions={},l,u,c;Y&&!o.selector&&(o.selector=Y.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=n;for(u in n)u==="all"?c=1:(l=He.matchMedia(n[u]),l&&(zt.indexOf(o)<0&&zt.push(o),(a[u]=l.matches)&&(c=1),l.addListener?l.addListener(Ir):l.addEventListener("change",Ir)));return c&&r(o,function(d){return o.add(null,d)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},t})(),Cn={registerPlugin:function(){for(var e=arguments.length,i=new Array(e),n=0;n<e;n++)i[n]=arguments[n];i.forEach(function(r){return sc(r)})},timeline:function(e){return new ye(e)},getTweensOf:function(e,i){return K.getTweensOf(e,i)},getProperty:function(e,i,n,r){ae(e)&&(e=Oe(e)[0]);var s=Vt(e||{}).get,o=n?Hl:Xl;return n==="native"&&(n=""),e&&(i?o((Te[i]&&Te[i].get||s)(e,i,n,r)):function(a,l,u){return o((Te[a]&&Te[a].get||s)(e,a,l,u))})},quickSetter:function(e,i,n){if(e=Oe(e),e.length>1){var r=e.map(function(c){return _e.quickSetter(c,i,n)}),s=r.length;return function(c){for(var d=s;d--;)r[d](c)}}e=e[0]||{};var o=Te[i],a=Vt(e),l=a.harness&&(a.harness.aliases||{})[i]||i,u=o?function(c){var d=new o;Jt._pt=0,d.init(e,n?c+n:c,Jt,0,[e]),d.render(1,d),Jt._pt&&Is(1,Jt)}:a.set(e,l);return o?u:function(c){return u(e,l,n?c+n:c,a,1)}},quickTo:function(e,i,n){var r,s=_e.to(e,De((r={},r[i]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),o=function(l,u,c){return s.resetTo(i,l,u,c)};return o.tween=s,o},isTweening:function(e){return K.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=It(e.ease,Ii.ease)),jo(Ii,e||{})},config:function(e){return jo(je,e||{})},registerEffect:function(e){var i=e.name,n=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!Te[a]&&!Re[a]&&zi(i+" effect requires "+a+" plugin.")}),rr[i]=function(a,l,u){return n(Oe(a),De(l||{},s),u)},o&&(ye.prototype[i]=function(a,l,u){return this.add(rr[i](a,qe(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,i){B[e]=It(i)},parseEase:function(e,i){return arguments.length?It(e,i):B},getById:function(e){return K.getById(e)},exportRoot:function(e,i){e===void 0&&(e={});var n=new ye(e),r,s;for(n.smoothChildTiming=xe(e.smoothChildTiming),K.remove(n),n._dp=0,n._time=n._tTime=K._time,r=K._first;r;)s=r._next,(i||!(!r._dur&&r instanceof ie&&r.vars.onComplete===r._targets[0]))&&Ze(n,r,r._start-r._delay),r=s;return Ze(K,n,0),n},context:function(e,i){return e?new xc(e,i):Y},matchMedia:function(e){return new l0(e)},matchMediaRefresh:function(){return zt.forEach(function(e){var i=e.conditions,n,r;for(r in i)i[r]&&(i[r]=!1,n=1);n&&e.revert()})||Ir()},addEventListener:function(e,i){var n=dn[e]||(dn[e]=[]);~n.indexOf(i)||n.push(i)},removeEventListener:function(e,i){var n=dn[e],r=n&&n.indexOf(i);r>=0&&n.splice(r,1)},utils:{wrap:Fm,wrapYoyo:Bm,distribute:Jl,random:tc,snap:ec,normalize:zm,getUnit:he,clamp:Lm,splitColor:oc,toArray:Oe,selector:Lr,mapRange:nc,pipe:Om,unitize:Im,interpolate:Um,shuffle:Ql},install:Bl,effects:rr,ticker:ke,updateRoot:ye.updateRoot,plugins:Te,globalTimeline:K,core:{PropTween:we,globals:Ul,Tween:ie,Timeline:ye,Animation:Ni,getCache:Vt,_removeLinkedListItem:Nn,reverting:function(){return ue},context:function(e){return e&&Y&&(Y.data.push(e),e._ctx=Y),Y},suppressOverwrites:function(e){return Ts=e}}};ve("to,from,fromTo,delayedCall,set,killTweensOf",function(t){return Cn[t]=ie[t]});ke.add(ye.updateRoot);Jt=Cn.to({},{duration:0});var c0=function(e,i){for(var n=e._pt;n&&n.p!==i&&n.op!==i&&n.fp!==i;)n=n._next;return n},u0=function(e,i){var n=e._targets,r,s,o;for(r in i)for(s=n.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=c0(o,r)),o&&o.modifier&&o.modifier(i[r],e,n[s],r))},cr=function(e,i){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,u;if(ae(s)&&(l={},ve(s,function(c){return l[c]=1}),s=l),i){l={};for(u in s)l[u]=i(s[u]);s=l}u0(a,s)}}}},_e=Cn.registerPlugin({name:"attr",init:function(e,i,n,r,s){var o,a,l;this.tween=n;for(o in i)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",i[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,i){for(var n=i._pt;n;)ue?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,i){for(var n=i.length;n--;)this.add(e,n,e[n]||0,i[n],0,0,0,0,0,1)}},cr("roundProps",Vr),cr("modifiers"),cr("snap",ec))||Cn;ie.version=ye.version=_e.version="3.15.0";Fl=1;ks()&&fi();B.Power0;B.Power1;B.Power2;B.Power3;B.Power4;B.Linear;B.Quad;B.Cubic;B.Quart;B.Quint;B.Strong;B.Elastic;B.Back;B.SteppedEase;B.Bounce;B.Sine;B.Expo;B.Circ;var Vo,ut,si,zs,Rt,Oo,Fs,d0=function(){return typeof window<"u"},ot={},Ct=180/Math.PI,oi=Math.PI/180,Kt=Math.atan2,Io=1e8,Bs=/([A-Z])/g,h0=/(left|right|width|margin|padding|x)/i,f0=/[\s,\(]\S/,Ke={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},zr=function(e,i){return i.set(i.t,i.p,Math.round((i.s+i.c*e)*1e4)/1e4+i.u,i)},p0=function(e,i){return i.set(i.t,i.p,e===1?i.e:Math.round((i.s+i.c*e)*1e4)/1e4+i.u,i)},m0=function(e,i){return i.set(i.t,i.p,e?Math.round((i.s+i.c*e)*1e4)/1e4+i.u:i.b,i)},g0=function(e,i){return i.set(i.t,i.p,e===1?i.e:e?Math.round((i.s+i.c*e)*1e4)/1e4+i.u:i.b,i)},y0=function(e,i){var n=i.s+i.c*e;i.set(i.t,i.p,~~(n+(n<0?-.5:.5))+i.u,i)},vc=function(e,i){return i.set(i.t,i.p,e?i.e:i.b,i)},wc=function(e,i){return i.set(i.t,i.p,e!==1?i.b:i.e,i)},x0=function(e,i,n){return e.style[i]=n},v0=function(e,i,n){return e.style.setProperty(i,n)},w0=function(e,i,n){return e._gsap[i]=n},b0=function(e,i,n){return e._gsap.scaleX=e._gsap.scaleY=n},_0=function(e,i,n,r,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},A0=function(e,i,n,r,s){var o=e._gsap;o[i]=n,o.renderTransform(s,o)},$="transform",be=$+"Origin",T0=function t(e,i){var n=this,r=this.target,s=r.style,o=r._gsap;if(e in ot&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Ke[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=et(r,a)}):this.tfm[e]=o.x?o[e]:et(r,e),e===be&&(this.tfm.zOrigin=o.zOrigin);else return Ke.transform.split(",").forEach(function(a){return t.call(n,a,i)});if(this.props.indexOf($)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(be,i,"")),e=$}(s||i)&&this.props.push(e,i,s[e])},bc=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},S0=function(){var e=this.props,i=this.target,n=i.style,r=i._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?i[e[s]](e[s+2]):i[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Bs,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),i.setAttribute("data-svg-origin",this.svgo||"")),s=Fs(),(!s||!s.isStart)&&!n[$]&&(bc(n),r.zOrigin&&n[be]&&(n[be]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},_c=function(e,i){var n={target:e,props:[],revert:S0,save:T0};return e._gsap||_e.core.getCache(e),i&&e.style&&e.nodeType&&i.split(",").forEach(function(r){return n.save(r)}),n},Ac,Fr=function(e,i){var n=ut.createElementNS?ut.createElementNS((i||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):ut.createElement(e);return n&&n.style?n:ut.createElement(e)},Ce=function t(e,i,n){var r=getComputedStyle(e);return r[i]||r.getPropertyValue(i.replace(Bs,"-$1").toLowerCase())||r.getPropertyValue(i)||!n&&t(e,pi(i)||i,1)||""},zo="O,Moz,ms,Ms,Webkit".split(","),pi=function(e,i,n){var r=i||Rt,s=r.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(zo[o]+e in s););return o<0?null:(o===3?"ms":o>=0?zo[o]:"")+e},Br=function(){d0()&&window.document&&(Vo=window,ut=Vo.document,si=ut.documentElement,Rt=Fr("div")||{style:{}},Fr("div"),$=pi($),be=$+"Origin",Rt.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Ac=!!pi("perspective"),Fs=_e.core.reverting,zs=1)},Fo=function(e){var i=e.ownerSVGElement,n=Fr("svg",i&&i.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",n.appendChild(r),si.appendChild(n);try{s=r.getBBox()}catch{}return n.removeChild(r),si.removeChild(n),s},Bo=function(e,i){for(var n=i.length;n--;)if(e.hasAttribute(i[n]))return e.getAttribute(i[n])},Tc=function(e){var i,n;try{i=e.getBBox()}catch{i=Fo(e),n=1}return i&&(i.width||i.height)||n||(i=Fo(e)),i&&!i.width&&!i.x&&!i.y?{x:+Bo(e,["x","cx","x1"])||0,y:+Bo(e,["y","cy","y1"])||0,width:0,height:0}:i},Sc=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Tc(e))},gt=function(e,i){if(i){var n=e.style,r;i in ot&&i!==be&&(i=$),n.removeProperty?(r=i.substr(0,2),(r==="ms"||i.substr(0,6)==="webkit")&&(i="-"+i),n.removeProperty(r==="--"?i:i.replace(Bs,"-$1").toLowerCase())):n.removeAttribute(i)}},dt=function(e,i,n,r,s,o){var a=new we(e._pt,i,n,0,1,o?wc:vc);return e._pt=a,a.b=r,a.e=s,e._props.push(n),a},Uo={deg:1,rad:1,turn:1},k0={grid:1,flex:1},yt=function t(e,i,n,r){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Rt.style,l=h0.test(i),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),d=100,h=r==="px",m=r==="%",g,p,y,v;if(r===o||!s||Uo[r]||Uo[o])return s;if(o!=="px"&&!h&&(s=t(e,i,n,"px")),v=e.getCTM&&Sc(e),(m||o==="%")&&(ot[i]||~i.indexOf("adius")))return g=v?e.getBBox()[l?"width":"height"]:e[c],ee(m?s/g*d:s/100*g);if(a[l?"width":"height"]=d+(h?o:r),p=r!=="rem"&&~i.indexOf("adius")||r==="em"&&e.appendChild&&!u?e:e.parentNode,v&&(p=(e.ownerSVGElement||{}).parentNode),(!p||p===ut||!p.appendChild)&&(p=ut.body),y=p._gsap,y&&m&&y.width&&l&&y.time===ke.time&&!y.uncache)return ee(s/y.width*d);if(m&&(i==="height"||i==="width")){var w=e.style[i];e.style[i]=d+r,g=e[c],w?e.style[i]=w:gt(e,i)}else(m||o==="%")&&!k0[Ce(p,"display")]&&(a.position=Ce(e,"position")),p===e&&(a.position="static"),p.appendChild(Rt),g=Rt[c],p.removeChild(Rt),a.position="absolute";return l&&m&&(y=Vt(p),y.time=ke.time,y.width=p[c]),ee(h?g*s/d:g&&s?d/g*s:0)},et=function(e,i,n,r){var s;return zs||Br(),i in Ke&&i!=="transform"&&(i=Ke[i],~i.indexOf(",")&&(i=i.split(",")[0])),ot[i]&&i!=="transform"?(s=Gi(e,r),s=i!=="transformOrigin"?s[i]:s.svg?s.origin:Mn(Ce(e,be))+" "+s.zOrigin+"px"):(s=e.style[i],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=jn[i]&&jn[i](e,i,n)||Ce(e,i)||Wl(e,i)||(i==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?yt(e,i,s,n)+n:s},P0=function(e,i,n,r){if(!n||n==="none"){var s=pi(i,e,1),o=s&&Ce(e,s,1);o&&o!==n?(i=s,n=o):i==="borderColor"&&(n=Ce(e,"borderTopColor"))}var a=new we(this._pt,e.style,i,0,1,gc),l=0,u=0,c,d,h,m,g,p,y,v,w,x,b,_;if(a.b=n,a.e=r,n+="",r+="",r.substring(0,6)==="var(--"&&(r=Ce(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(p=e.style[i],e.style[i]=r,r=Ce(e,i)||r,p?e.style[i]=p:gt(e,i)),c=[n,r],lc(c),n=c[0],r=c[1],h=n.match(Qt)||[],_=r.match(Qt)||[],_.length){for(;d=Qt.exec(r);)y=d[0],w=r.substring(l,d.index),g?g=(g+1)%5:(w.substr(-5)==="rgba("||w.substr(-5)==="hsla(")&&(g=1),y!==(p=h[u++]||"")&&(m=parseFloat(p)||0,b=p.substr((m+"").length),y.charAt(1)==="="&&(y=ri(m,y)+b),v=parseFloat(y),x=y.substr((v+"").length),l=Qt.lastIndex-x.length,x||(x=x||je.units[i]||b,l===r.length&&(r+=x,a.e+=x)),b!==x&&(m=yt(e,i,p,x)||0),a._pt={_next:a._pt,p:w||u===1?w:",",s:m,c:v-m,m:g&&g<4||i==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=i==="display"&&r==="none"?wc:vc;return zl.test(r)&&(a.e=0),this._pt=a,a},No={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},C0=function(e){var i=e.split(" "),n=i[0],r=i[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),i[0]=No[n]||n,i[1]=No[r]||r,i.join(" ")},j0=function(e,i){if(i.tween&&i.tween._time===i.tween._dur){var n=i.t,r=n.style,s=i.u,o=n._gsap,a,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)a=s[u],ot[a]&&(l=1,a=a==="transformOrigin"?be:$),gt(n,a);l&&(gt(n,$),o&&(o.svg&&n.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Gi(n,1),o.uncache=1,bc(r)))}},jn={clearProps:function(e,i,n,r,s){if(s.data!=="isFromStart"){var o=e._pt=new we(e._pt,i,n,0,0,j0);return o.u=r,o.pr=-10,o.tween=s,e._props.push(n),1}}},Wi=[1,0,0,1,0,0],kc={},Pc=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Wo=function(e){var i=Ce(e,$);return Pc(i)?Wi:i.substr(7).match(Il).map(ee)},Us=function(e,i){var n=e._gsap||Vt(e),r=e.style,s=Wo(e),o,a,l,u;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Wi:s):(s===Wi&&!e.offsetParent&&e!==si&&!n.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(u=1,a=e.nextElementSibling,si.appendChild(e)),s=Wo(e),l?r.display=l:gt(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):si.removeChild(e))),i&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Ur=function(e,i,n,r,s,o){var a=e._gsap,l=s||Us(e,!0),u=a.xOrigin||0,c=a.yOrigin||0,d=a.xOffset||0,h=a.yOffset||0,m=l[0],g=l[1],p=l[2],y=l[3],v=l[4],w=l[5],x=i.split(" "),b=parseFloat(x[0])||0,_=parseFloat(x[1])||0,j,S,A,k;n?l!==Wi&&(S=m*y-g*p)&&(A=b*(y/S)+_*(-p/S)+(p*w-y*v)/S,k=b*(-g/S)+_*(m/S)-(m*w-g*v)/S,b=A,_=k):(j=Tc(e),b=j.x+(~x[0].indexOf("%")?b/100*j.width:b),_=j.y+(~(x[1]||x[0]).indexOf("%")?_/100*j.height:_)),r||r!==!1&&a.smooth?(v=b-u,w=_-c,a.xOffset=d+(v*m+w*p)-v,a.yOffset=h+(v*g+w*y)-w):a.xOffset=a.yOffset=0,a.xOrigin=b,a.yOrigin=_,a.smooth=!!r,a.origin=i,a.originIsAbsolute=!!n,e.style[be]="0px 0px",o&&(dt(o,a,"xOrigin",u,b),dt(o,a,"yOrigin",c,_),dt(o,a,"xOffset",d,a.xOffset),dt(o,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",b+" "+_)},Gi=function(e,i){var n=e._gsap||new uc(e);if("x"in n&&!i&&!n.uncache)return n;var r=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),u=Ce(e,be)||"0",c,d,h,m,g,p,y,v,w,x,b,_,j,S,A,k,C,R,E,L,V,O,z,U,F,H,D,I,J,de,Ae,_t;return c=d=h=p=y=v=w=x=b=0,m=g=1,n.svg=!!(e.getCTM&&Sc(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[$]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[$]!=="none"?l[$]:"")),r.scale=r.rotate=r.translate="none"),S=Us(e,n.svg),n.svg&&(n.uncache?(F=e.getBBox(),u=n.xOrigin-F.x+"px "+(n.yOrigin-F.y)+"px",U=""):U=!i&&e.getAttribute("data-svg-origin"),Ur(e,U||u,!!U||n.originIsAbsolute,n.smooth!==!1,S)),_=n.xOrigin||0,j=n.yOrigin||0,S!==Wi&&(R=S[0],E=S[1],L=S[2],V=S[3],c=O=S[4],d=z=S[5],S.length===6?(m=Math.sqrt(R*R+E*E),g=Math.sqrt(V*V+L*L),p=R||E?Kt(E,R)*Ct:0,w=L||V?Kt(L,V)*Ct+p:0,w&&(g*=Math.abs(Math.cos(w*oi))),n.svg&&(c-=_-(_*R+j*L),d-=j-(_*E+j*V))):(_t=S[6],de=S[7],D=S[8],I=S[9],J=S[10],Ae=S[11],c=S[12],d=S[13],h=S[14],A=Kt(_t,J),y=A*Ct,A&&(k=Math.cos(-A),C=Math.sin(-A),U=O*k+D*C,F=z*k+I*C,H=_t*k+J*C,D=O*-C+D*k,I=z*-C+I*k,J=_t*-C+J*k,Ae=de*-C+Ae*k,O=U,z=F,_t=H),A=Kt(-L,J),v=A*Ct,A&&(k=Math.cos(-A),C=Math.sin(-A),U=R*k-D*C,F=E*k-I*C,H=L*k-J*C,Ae=V*C+Ae*k,R=U,E=F,L=H),A=Kt(E,R),p=A*Ct,A&&(k=Math.cos(A),C=Math.sin(A),U=R*k+E*C,F=O*k+z*C,E=E*k-R*C,z=z*k-O*C,R=U,O=F),y&&Math.abs(y)+Math.abs(p)>359.9&&(y=p=0,v=180-v),m=ee(Math.sqrt(R*R+E*E+L*L)),g=ee(Math.sqrt(z*z+_t*_t)),A=Kt(O,z),w=Math.abs(A)>2e-4?A*Ct:0,b=Ae?1/(Ae<0?-Ae:Ae):0),n.svg&&(U=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Pc(Ce(e,$)),U&&e.setAttribute("transform",U))),Math.abs(w)>90&&Math.abs(w)<270&&(s?(m*=-1,w+=p<=0?180:-180,p+=p<=0?180:-180):(g*=-1,w+=w<=0?180:-180)),i=i||n.uncache,n.x=c-((n.xPercent=c&&(!i&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=d-((n.yPercent=d&&(!i&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=h+o,n.scaleX=ee(m),n.scaleY=ee(g),n.rotation=ee(p)+a,n.rotationX=ee(y)+a,n.rotationY=ee(v)+a,n.skewX=w+a,n.skewY=x+a,n.transformPerspective=b+o,(n.zOrigin=parseFloat(u.split(" ")[2])||!i&&n.zOrigin||0)&&(r[be]=Mn(u)),n.xOffset=n.yOffset=0,n.force3D=je.force3D,n.renderTransform=n.svg?R0:Ac?Cc:M0,n.uncache=0,n},Mn=function(e){return(e=e.split(" "))[0]+" "+e[1]},ur=function(e,i,n){var r=he(i);return ee(parseFloat(i)+parseFloat(yt(e,"x",n+"px",r)))+r},M0=function(e,i){i.z="0px",i.rotationY=i.rotationX="0deg",i.force3D=0,Cc(e,i)},At="0deg",Ti="0px",Tt=") ",Cc=function(e,i){var n=i||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,u=n.rotation,c=n.rotationY,d=n.rotationX,h=n.skewX,m=n.skewY,g=n.scaleX,p=n.scaleY,y=n.transformPerspective,v=n.force3D,w=n.target,x=n.zOrigin,b="",_=v==="auto"&&e&&e!==1||v===!0;if(x&&(d!==At||c!==At)){var j=parseFloat(c)*oi,S=Math.sin(j),A=Math.cos(j),k;j=parseFloat(d)*oi,k=Math.cos(j),o=ur(w,o,S*k*-x),a=ur(w,a,-Math.sin(j)*-x),l=ur(w,l,A*k*-x+x)}y!==Ti&&(b+="perspective("+y+Tt),(r||s)&&(b+="translate("+r+"%, "+s+"%) "),(_||o!==Ti||a!==Ti||l!==Ti)&&(b+=l!==Ti||_?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Tt),u!==At&&(b+="rotate("+u+Tt),c!==At&&(b+="rotateY("+c+Tt),d!==At&&(b+="rotateX("+d+Tt),(h!==At||m!==At)&&(b+="skew("+h+", "+m+Tt),(g!==1||p!==1)&&(b+="scale("+g+", "+p+Tt),w.style[$]=b||"translate(0, 0)"},R0=function(e,i){var n=i||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,u=n.skewX,c=n.skewY,d=n.scaleX,h=n.scaleY,m=n.target,g=n.xOrigin,p=n.yOrigin,y=n.xOffset,v=n.yOffset,w=n.forceCSS,x=parseFloat(o),b=parseFloat(a),_,j,S,A,k;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=oi,u*=oi,_=Math.cos(l)*d,j=Math.sin(l)*d,S=Math.sin(l-u)*-h,A=Math.cos(l-u)*h,u&&(c*=oi,k=Math.tan(u-c),k=Math.sqrt(1+k*k),S*=k,A*=k,c&&(k=Math.tan(c),k=Math.sqrt(1+k*k),_*=k,j*=k)),_=ee(_),j=ee(j),S=ee(S),A=ee(A)):(_=d,A=h,j=S=0),(x&&!~(o+"").indexOf("px")||b&&!~(a+"").indexOf("px"))&&(x=yt(m,"x",o,"px"),b=yt(m,"y",a,"px")),(g||p||y||v)&&(x=ee(x+g-(g*_+p*S)+y),b=ee(b+p-(g*j+p*A)+v)),(r||s)&&(k=m.getBBox(),x=ee(x+r/100*k.width),b=ee(b+s/100*k.height)),k="matrix("+_+","+j+","+S+","+A+","+x+","+b+")",m.setAttribute("transform",k),w&&(m.style[$]=k)},D0=function(e,i,n,r,s){var o=360,a=ae(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Ct:1),u=l-r,c=r+u+"deg",d,h;return a&&(d=s.split("_")[1],d==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),d==="cw"&&u<0?u=(u+o*Io)%o-~~(u/o)*o:d==="ccw"&&u>0&&(u=(u-o*Io)%o-~~(u/o)*o)),e._pt=h=new we(e._pt,i,n,r,u,p0),h.e=c,h.u="deg",e._props.push(n),h},Go=function(e,i){for(var n in i)e[n]=i[n];return e},E0=function(e,i,n){var r=Go({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,u,c,d,h,m,g;r.svg?(u=n.getAttribute("transform"),n.setAttribute("transform",""),o[$]=i,a=Gi(n,1),gt(n,$),n.setAttribute("transform",u)):(u=getComputedStyle(n)[$],o[$]=i,a=Gi(n,1),o[$]=u);for(l in ot)u=r[l],c=a[l],u!==c&&s.indexOf(l)<0&&(m=he(u),g=he(c),d=m!==g?yt(n,l,u,g):parseFloat(u),h=parseFloat(c),e._pt=new we(e._pt,a,l,d,h-d,zr),e._pt.u=g||0,e._props.push(l));Go(a,r)};ve("padding,margin,Width,Radius",function(t,e){var i="Top",n="Right",r="Bottom",s="Left",o=(e<3?[i,n,r,s]:[i+s,i+n,r+n,r+s]).map(function(a){return e<2?t+a:"border"+a+t});jn[e>1?"border"+t:t]=function(a,l,u,c,d){var h,m;if(arguments.length<4)return h=o.map(function(g){return et(a,g,u)}),m=h.join(" "),m.split(h[0]).length===5?h[0]:m;h=(c+"").split(" "),m={},o.forEach(function(g,p){return m[g]=h[p]=h[p]||h[(p-1)/2|0]}),a.init(l,m,d)}});var jc={name:"css",register:Br,targetTest:function(e){return e.style&&e.nodeType},init:function(e,i,n,r,s){var o=this._props,a=e.style,l=n.vars.startAt,u,c,d,h,m,g,p,y,v,w,x,b,_,j,S,A,k;zs||Br(),this.styles=this.styles||_c(e),A=this.styles.props,this.tween=n;for(p in i)if(p!=="autoRound"&&(c=i[p],!(Te[p]&&dc(p,i,n,r,e,s)))){if(m=typeof c,g=jn[p],m==="function"&&(c=c.call(n,r,e,s),m=typeof c),m==="string"&&~c.indexOf("random(")&&(c=Bi(c)),g)g(this,e,p,c,n)&&(S=1);else if(p.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(p)+"").trim(),c+="",pt.lastIndex=0,pt.test(u)||(y=he(u),v=he(c),v?y!==v&&(u=yt(e,p,u,v)+v):y&&(c+=y)),this.add(a,"setProperty",u,c,r,s,0,0,p),o.push(p),A.push(p,0,a[p]);else if(m!=="undefined"){if(l&&p in l?(u=typeof l[p]=="function"?l[p].call(n,r,e,s):l[p],ae(u)&&~u.indexOf("random(")&&(u=Bi(u)),he(u+"")||u==="auto"||(u+=je.units[p]||he(et(e,p))||""),(u+"").charAt(1)==="="&&(u=et(e,p))):u=et(e,p),h=parseFloat(u),w=m==="string"&&c.charAt(1)==="="&&c.substr(0,2),w&&(c=c.substr(2)),d=parseFloat(c),p in Ke&&(p==="autoAlpha"&&(h===1&&et(e,"visibility")==="hidden"&&d&&(h=0),A.push("visibility",0,a.visibility),dt(this,a,"visibility",h?"inherit":"hidden",d?"inherit":"hidden",!d)),p!=="scale"&&p!=="transform"&&(p=Ke[p],~p.indexOf(",")&&(p=p.split(",")[0]))),x=p in ot,x){if(this.styles.save(p),k=c,m==="string"&&c.substring(0,6)==="var(--"){if(c=Ce(e,c.substring(4,c.indexOf(")"))),c.substring(0,5)==="calc("){var C=e.style.perspective;e.style.perspective=c,c=Ce(e,"perspective"),C?e.style.perspective=C:gt(e,"perspective")}d=parseFloat(c)}if(b||(_=e._gsap,_.renderTransform&&!i.parseTransform||Gi(e,i.parseTransform),j=i.smoothOrigin!==!1&&_.smooth,b=this._pt=new we(this._pt,a,$,0,1,_.renderTransform,_,0,-1),b.dep=1),p==="scale")this._pt=new we(this._pt,_,"scaleY",_.scaleY,(w?ri(_.scaleY,w+d):d)-_.scaleY||0,zr),this._pt.u=0,o.push("scaleY",p),p+="X";else if(p==="transformOrigin"){A.push(be,0,a[be]),c=C0(c),_.svg?Ur(e,c,0,j,0,this):(v=parseFloat(c.split(" ")[2])||0,v!==_.zOrigin&&dt(this,_,"zOrigin",_.zOrigin,v),dt(this,a,p,Mn(u),Mn(c)));continue}else if(p==="svgOrigin"){Ur(e,c,1,j,0,this);continue}else if(p in kc){D0(this,_,p,h,w?ri(h,w+c):c);continue}else if(p==="smoothOrigin"){dt(this,_,"smooth",_.smooth,c);continue}else if(p==="force3D"){_[p]=c;continue}else if(p==="transform"){E0(this,c,e);continue}}else p in a||(p=pi(p)||p);if(x||(d||d===0)&&(h||h===0)&&!f0.test(c)&&p in a)y=(u+"").substr((h+"").length),d||(d=0),v=he(c)||(p in je.units?je.units[p]:y),y!==v&&(h=yt(e,p,u,v)),this._pt=new we(this._pt,x?_:a,p,h,(w?ri(h,w+d):d)-h,!x&&(v==="px"||p==="zIndex")&&i.autoRound!==!1?y0:zr),this._pt.u=v||0,x&&k!==c?(this._pt.b=u,this._pt.e=k,this._pt.r=g0):y!==v&&v!=="%"&&(this._pt.b=u,this._pt.r=m0);else if(p in a)P0.call(this,e,p,u,w?w+c:c);else if(p in e)this.add(e,p,u||e[p],w?w+c:c,r,s);else if(p!=="parseTransform"){Cs(p,c);continue}x||(p in a?A.push(p,0,a[p]):typeof e[p]=="function"?A.push(p,2,e[p]()):A.push(p,1,u||e[p])),o.push(p)}}S&&yc(this)},render:function(e,i){if(i.tween._time||!Fs())for(var n=i._pt;n;)n.r(e,n.d),n=n._next;else i.styles.revert()},get:et,aliases:Ke,getSetter:function(e,i,n){var r=Ke[i];return r&&r.indexOf(",")<0&&(i=r),i in ot&&i!==be&&(e._gsap.x||et(e,"x"))?n&&Oo===n?i==="scale"?b0:w0:(Oo=n||{})&&(i==="scale"?_0:A0):e.style&&!Ss(e.style[i])?x0:~i.indexOf("-")?v0:Os(e,i)},core:{_removeProperty:gt,_getMatrix:Us}};_e.utils.checkPrefix=pi;_e.core.getStyleSaver=_c;(function(t,e,i,n){var r=ve(t+","+e+","+i,function(s){ot[s]=1});ve(e,function(s){je.units[s]="deg",kc[s]=1}),Ke[r[13]]=t+","+e,ve(n,function(s){var o=s.split(":");Ke[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ve("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(t){je.units[t]="px"});_e.registerPlugin(jc);var hn=_e.registerPlugin(jc)||_e;hn.core.Tween;const Ns=T.createContext({});function Ws(t){const e=T.useRef(null);return e.current===null&&(e.current=t()),e.current}const L0=typeof window<"u",Mc=L0?T.useLayoutEffect:T.useEffect,Xn=T.createContext(null);function Gs(t,e){t.indexOf(e)===-1&&t.push(e)}function Rn(t,e){const i=t.indexOf(e);i>-1&&t.splice(i,1)}const Qe=(t,e,i)=>i>e?e:i<t?t:i;let Xs=()=>{};const xt={},Rc=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);function Dc(t){return typeof t=="object"&&t!==null}const Ec=t=>/^0[^.\s]+$/u.test(t);function Lc(t){let e;return()=>(e===void 0&&(e=t()),e)}const ze=t=>t,V0=(t,e)=>i=>e(t(i)),qi=(...t)=>t.reduce(V0),Xi=(t,e,i)=>{const n=e-t;return n===0?1:(i-t)/n};class Hs{constructor(){this.subscriptions=[]}add(e){return Gs(this.subscriptions,e),()=>Rn(this.subscriptions,e)}notify(e,i,n){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,i,n);else for(let s=0;s<r;s++){const o=this.subscriptions[s];o&&o(e,i,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Me=t=>t*1e3,Ie=t=>t/1e3;function Vc(t,e){return e?t*(1e3/e):0}const Oc=(t,e,i)=>(((1-3*i+3*e)*t+(3*i-6*e))*t+3*e)*t,O0=1e-7,I0=12;function z0(t,e,i,n,r){let s,o,a=0;do o=e+(i-e)/2,s=Oc(o,n,r)-t,s>0?i=o:e=o;while(Math.abs(s)>O0&&++a<I0);return o}function Qi(t,e,i,n){if(t===e&&i===n)return ze;const r=s=>z0(s,0,1,t,i);return s=>s===0||s===1?s:Oc(r(s),e,n)}const Ic=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,zc=t=>e=>1-t(1-e),Fc=Qi(.33,1.53,.69,.99),Ys=zc(Fc),Bc=Ic(Ys),Uc=t=>t>=1?1:(t*=2)<1?.5*Ys(t):.5*(2-Math.pow(2,-10*(t-1))),Zs=t=>1-Math.sin(Math.acos(t)),Nc=zc(Zs),Wc=Ic(Zs),F0=Qi(.42,0,1,1),B0=Qi(0,0,.58,1),Gc=Qi(.42,0,.58,1),U0=t=>Array.isArray(t)&&typeof t[0]!="number",Xc=t=>Array.isArray(t)&&typeof t[0]=="number",N0={linear:ze,easeIn:F0,easeInOut:Gc,easeOut:B0,circIn:Zs,circInOut:Wc,circOut:Nc,backIn:Ys,backInOut:Bc,backOut:Fc,anticipate:Uc},W0=t=>typeof t=="string",Xo=t=>{if(Xc(t)){Xs(t.length===4);const[e,i,n,r]=t;return Qi(e,i,n,r)}else if(W0(t))return N0[t];return t},rn=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function G0(t,e){let i=new Set,n=new Set,r=!1,s=!1;const o=new WeakSet;let a={delta:0,timestamp:0,isProcessing:!1};function l(c){o.has(c)&&(u.schedule(c),t()),c(a)}const u={schedule:(c,d=!1,h=!1)=>{const g=h&&r?i:n;return d&&o.add(c),g.add(c),c},cancel:c=>{n.delete(c),o.delete(c)},process:c=>{if(a=c,r){s=!0;return}r=!0;const d=i;i=n,n=d,i.forEach(l),i.clear(),r=!1,s&&(s=!1,u.process(c))}};return u}const X0=40;function Hc(t,e){let i=!1,n=!0;const r={delta:0,timestamp:0,isProcessing:!1},s=()=>i=!0,o=rn.reduce((x,b)=>(x[b]=G0(s),x),{}),{setup:a,read:l,resolveKeyframes:u,preUpdate:c,update:d,preRender:h,render:m,postRender:g}=o,p=()=>{const x=xt.useManualTiming,b=x?r.timestamp:performance.now();i=!1,x||(r.delta=n?1e3/60:Math.max(Math.min(b-r.timestamp,X0),1)),r.timestamp=b,r.isProcessing=!0,a.process(r),l.process(r),u.process(r),c.process(r),d.process(r),h.process(r),m.process(r),g.process(r),r.isProcessing=!1,i&&e&&(n=!1,t(p))},y=()=>{i=!0,n=!0,r.isProcessing||t(p)};return{schedule:rn.reduce((x,b)=>{const _=o[b];return x[b]=(j,S=!1,A=!1)=>(i||y(),_.schedule(j,S,A)),x},{}),cancel:x=>{for(let b=0;b<rn.length;b++)o[rn[b]].cancel(x)},state:r,steps:o}}const{schedule:G,cancel:vt,state:le,steps:dr}=Hc(typeof requestAnimationFrame<"u"?requestAnimationFrame:ze,!0);let fn;function H0(){fn=void 0}const me={now:()=>(fn===void 0&&me.set(le.isProcessing||xt.useManualTiming?le.timestamp:performance.now()),fn),set:t=>{fn=t,queueMicrotask(H0)}},Yc=t=>e=>typeof e=="string"&&e.startsWith(t),Zc=Yc("--"),Y0=Yc("var(--"),Ks=t=>Y0(t)?Z0.test(t.split("/*")[0].trim()):!1,Z0=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Ho(t){return typeof t!="string"?!1:t.split("/*")[0].includes("var(--")}const yi={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Hi={...yi,transform:t=>Qe(0,1,t)},sn={...yi,default:1},Ei=t=>Math.round(t*1e5)/1e5,$s=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function K0(t){return t==null}const $0=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,qs=(t,e)=>i=>!!(typeof i=="string"&&$0.test(i)&&i.startsWith(t)||e&&!K0(i)&&Object.prototype.hasOwnProperty.call(i,e)),Kc=(t,e,i)=>n=>{if(typeof n!="string")return n;const[r,s,o,a]=n.match($s);return{[t]:parseFloat(r),[e]:parseFloat(s),[i]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},q0=t=>Qe(0,255,t),hr={...yi,transform:t=>Math.round(q0(t))},Dt={test:qs("rgb","red"),parse:Kc("red","green","blue"),transform:({red:t,green:e,blue:i,alpha:n=1})=>"rgba("+hr.transform(t)+", "+hr.transform(e)+", "+hr.transform(i)+", "+Ei(Hi.transform(n))+")"};function Q0(t){let e="",i="",n="",r="";return t.length>5?(e=t.substring(1,3),i=t.substring(3,5),n=t.substring(5,7),r=t.substring(7,9)):(e=t.substring(1,2),i=t.substring(2,3),n=t.substring(3,4),r=t.substring(4,5),e+=e,i+=i,n+=n,r+=r),{red:parseInt(e,16),green:parseInt(i,16),blue:parseInt(n,16),alpha:r?parseInt(r,16)/255:1}}const Nr={test:qs("#"),parse:Q0,transform:Dt.transform},Ji=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),lt=Ji("deg"),$e=Ji("%"),M=Ji("px"),J0=Ji("vh"),eg=Ji("vw"),Yo={...$e,parse:t=>$e.parse(t)/100,transform:t=>$e.transform(t*100)},ei={test:qs("hsl","hue"),parse:Kc("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:i,alpha:n=1})=>"hsla("+Math.round(t)+", "+$e.transform(Ei(e))+", "+$e.transform(Ei(i))+", "+Ei(Hi.transform(n))+")"},te={test:t=>Dt.test(t)||Nr.test(t)||ei.test(t),parse:t=>Dt.test(t)?Dt.parse(t):ei.test(t)?ei.parse(t):Nr.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?Dt.transform(t):ei.transform(t),getAnimatableNone:t=>{const e=te.parse(t);return e.alpha=0,te.transform(e)}},tg=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function ig(t){return isNaN(t)&&typeof t=="string"&&(t.match($s)?.length||0)+(t.match(tg)?.length||0)>0}const $c="number",qc="color",ng="var",rg="var(",Zo="${}",sg=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function mi(t){const e=t.toString(),i=[],n={color:[],number:[],var:[]},r=[];let s=0;const a=e.replace(sg,l=>(te.test(l)?(n.color.push(s),r.push(qc),i.push(te.parse(l))):l.startsWith(rg)?(n.var.push(s),r.push(ng),i.push(l)):(n.number.push(s),r.push($c),i.push(parseFloat(l))),++s,Zo)).split(Zo);return{values:i,split:a,indexes:n,types:r}}function og(t){return mi(t).values}function Qc({split:t,types:e}){const i=t.length;return n=>{let r="";for(let s=0;s<i;s++)if(r+=t[s],n[s]!==void 0){const o=e[s];o===$c?r+=Ei(n[s]):o===qc?r+=te.transform(n[s]):r+=n[s]}return r}}function ag(t){return Qc(mi(t))}const lg=t=>typeof t=="number"?0:te.test(t)?te.getAnimatableNone(t):t,cg=(t,e)=>typeof t=="number"?e?.trim().endsWith("/")?t:0:lg(t);function ug(t){const e=mi(t);return Qc(e)(e.values.map((n,r)=>cg(n,e.split[r])))}const Ne={test:ig,parse:og,createTransformer:ag,getAnimatableNone:ug};function fr(t,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+(e-t)*6*i:i<1/2?e:i<2/3?t+(e-t)*(2/3-i)*6:t}function dg({hue:t,saturation:e,lightness:i,alpha:n}){t/=360,e/=100,i/=100;let r=0,s=0,o=0;if(!e)r=s=o=i;else{const a=i<.5?i*(1+e):i+e-i*e,l=2*i-a;r=fr(l,a,t+1/3),s=fr(l,a,t),o=fr(l,a,t-1/3)}return{red:Math.round(r*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:n}}function Dn(t,e){return i=>i>0?e:t}const X=(t,e,i)=>t+(e-t)*i,pr=(t,e,i)=>{const n=t*t,r=i*(e*e-n)+n;return r<0?0:Math.sqrt(r)},hg=[Nr,Dt,ei],fg=t=>hg.find(e=>e.test(t));function Ko(t){const e=fg(t);if(!e)return!1;let i=e.parse(t);return e===ei&&(i=dg(i)),i}const $o=(t,e)=>{const i=Ko(t),n=Ko(e);if(!i||!n)return Dn(t,e);const r={...i};return s=>(r.red=pr(i.red,n.red,s),r.green=pr(i.green,n.green,s),r.blue=pr(i.blue,n.blue,s),r.alpha=X(i.alpha,n.alpha,s),Dt.transform(r))},Wr=new Set(["none","hidden"]);function pg(t,e){return Wr.has(t)?i=>i<=0?t:e:i=>i>=1?e:t}function mg(t,e){return i=>X(t,e,i)}function Qs(t){return typeof t=="number"?mg:typeof t=="string"?Ks(t)?Dn:te.test(t)?$o:xg:Array.isArray(t)?Jc:typeof t=="object"?te.test(t)?$o:gg:Dn}function Jc(t,e){const i=[...t],n=i.length,r=t.map((s,o)=>Qs(s)(s,e[o]));return s=>{for(let o=0;o<n;o++)i[o]=r[o](s);return i}}function gg(t,e){const i={...t,...e},n={};for(const r in i)t[r]!==void 0&&e[r]!==void 0&&(n[r]=Qs(t[r])(t[r],e[r]));return r=>{for(const s in n)i[s]=n[s](r);return i}}function yg(t,e){const i=[],n={color:0,var:0,number:0};for(let r=0;r<e.values.length;r++){const s=e.types[r],o=t.indexes[s][n[s]],a=t.values[o]??0;i[r]=a,n[s]++}return i}const xg=(t,e)=>{const i=Ne.createTransformer(e),n=mi(t),r=mi(e);return n.indexes.var.length===r.indexes.var.length&&n.indexes.color.length===r.indexes.color.length&&n.indexes.number.length>=r.indexes.number.length?Wr.has(t)&&!r.values.length||Wr.has(e)&&!n.values.length?pg(t,e):qi(Jc(yg(n,r),r.values),i):Dn(t,e)};function eu(t,e,i){return typeof t=="number"&&typeof e=="number"&&typeof i=="number"?X(t,e,i):Qs(t)(t,e)}const vg=t=>{const e=({timestamp:i})=>t(i);return{start:(i=!0)=>G.update(e,i),stop:()=>vt(e),now:()=>le.isProcessing?le.timestamp:me.now()}},tu=(t,e,i=10)=>{let n="";const r=Math.max(Math.round(e/i),2);for(let s=0;s<r;s++)n+=Math.round(t(s/(r-1))*1e4)/1e4+", ";return`linear(${n.substring(0,n.length-2)})`},En=2e4;function Js(t){let e=0;const i=50;let n=t.next(e);for(;!n.done&&e<En;)e+=i,n=t.next(e);return e>=En?1/0:e}function wg(t,e=100,i){const n=i({...t,keyframes:[0,e]}),r=Math.min(Js(n),En);return{type:"keyframes",ease:s=>n.next(r*s).value/e,duration:Ie(r)}}const q={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function Gr(t,e){return t*Math.sqrt(1-e*e)}const bg=12;function _g(t,e,i){let n=i;for(let r=1;r<bg;r++)n=n-t(n)/e(n);return n}const mr=.001;function Ag({duration:t=q.duration,bounce:e=q.bounce,velocity:i=q.velocity,mass:n=q.mass}){let r,s,o=1-e;o=Qe(q.minDamping,q.maxDamping,o),t=Qe(q.minDuration,q.maxDuration,Ie(t)),o<1?(r=u=>{const c=u*o,d=c*t,h=c-i,m=Gr(u,o),g=Math.exp(-d);return mr-h/m*g},s=u=>{const d=u*o*t,h=d*i+i,m=Math.pow(o,2)*Math.pow(u,2)*t,g=Math.exp(-d),p=Gr(Math.pow(u,2),o);return(-r(u)+mr>0?-1:1)*((h-m)*g)/p}):(r=u=>{const c=Math.exp(-u*t),d=(u-i)*t+1;return-mr+c*d},s=u=>{const c=Math.exp(-u*t),d=(i-u)*(t*t);return c*d});const a=5/t,l=_g(r,s,a);if(t=Me(t),isNaN(l))return{stiffness:q.stiffness,damping:q.damping,duration:t};{const u=Math.pow(l,2)*n;return{stiffness:u,damping:o*2*Math.sqrt(n*u),duration:t}}}const Tg=["duration","bounce"],Sg=["stiffness","damping","mass"];function qo(t,e){return e.some(i=>t[i]!==void 0)}function kg(t){let e={velocity:q.velocity,stiffness:q.stiffness,damping:q.damping,mass:q.mass,isResolvedFromDuration:!1,...t};if(!qo(t,Sg)&&qo(t,Tg))if(e.velocity=0,t.visualDuration){const i=t.visualDuration,n=2*Math.PI/(i*1.2),r=n*n,s=2*Qe(.05,1,1-(t.bounce||0))*Math.sqrt(r);e={...e,mass:q.mass,stiffness:r,damping:s}}else{const i=Ag({...t,velocity:0});e={...e,...i,mass:q.mass},e.isResolvedFromDuration=!0}return e}function Ln(t=q.visualDuration,e=q.bounce){const i=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:n,restDelta:r}=i;const s=i.keyframes[0],o=i.keyframes[i.keyframes.length-1],a={done:!1,value:s},{stiffness:l,damping:u,mass:c,duration:d,velocity:h,isResolvedFromDuration:m}=kg({...i,velocity:-Ie(i.velocity||0)}),g=h||0,p=u/(2*Math.sqrt(l*c)),y=o-s,v=Ie(Math.sqrt(l/c)),w=Math.abs(y)<5;n||(n=w?q.restSpeed.granular:q.restSpeed.default),r||(r=w?q.restDelta.granular:q.restDelta.default);let x,b,_,j,S,A;if(p<1)_=Gr(v,p),j=(g+p*v*y)/_,x=C=>{const R=Math.exp(-p*v*C);return o-R*(j*Math.sin(_*C)+y*Math.cos(_*C))},S=p*v*j+y*_,A=p*v*y-j*_,b=C=>Math.exp(-p*v*C)*(S*Math.sin(_*C)+A*Math.cos(_*C));else if(p===1){x=R=>o-Math.exp(-v*R)*(y+(g+v*y)*R);const C=g+v*y;b=R=>Math.exp(-v*R)*(v*C*R-g)}else{const C=v*Math.sqrt(p*p-1);x=V=>{const O=Math.exp(-p*v*V),z=Math.min(C*V,300);return o-O*((g+p*v*y)*Math.sinh(z)+C*y*Math.cosh(z))/C};const R=(g+p*v*y)/C,E=p*v*R-y*C,L=p*v*y-R*C;b=V=>{const O=Math.exp(-p*v*V),z=Math.min(C*V,300);return O*(E*Math.sinh(z)+L*Math.cosh(z))}}const k={calculatedDuration:m&&d||null,velocity:C=>Me(b(C)),next:C=>{if(!m&&p<1){const E=Math.exp(-p*v*C),L=Math.sin(_*C),V=Math.cos(_*C),O=o-E*(j*L+y*V),z=Me(E*(S*L+A*V));return a.done=Math.abs(z)<=n&&Math.abs(o-O)<=r,a.value=a.done?o:O,a}const R=x(C);if(m)a.done=C>=d;else{const E=Me(b(C));a.done=Math.abs(E)<=n&&Math.abs(o-R)<=r}return a.value=a.done?o:R,a},toString:()=>{const C=Math.min(Js(k),En),R=tu(E=>k.next(C*E).value,C,30);return C+"ms "+R},toTransition:()=>{}};return k}Ln.applyToOptions=t=>{const e=wg(t,100,Ln);return t.ease=e.ease,t.duration=Me(e.duration),t.type="keyframes",t};const Pg=5;function iu(t,e,i){const n=Math.max(e-Pg,0);return Vc(i-t(n),e-n)}function Xr({keyframes:t,velocity:e=0,power:i=.8,timeConstant:n=325,bounceDamping:r=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:u=.5,restSpeed:c}){const d=t[0],h={done:!1,value:d},m=A=>a!==void 0&&A<a||l!==void 0&&A>l,g=A=>a===void 0?l:l===void 0||Math.abs(a-A)<Math.abs(l-A)?a:l;let p=i*e;const y=d+p,v=o===void 0?y:o(y);v!==y&&(p=v-d);const w=A=>-p*Math.exp(-A/n),x=A=>v+w(A),b=A=>{const k=w(A),C=x(A);h.done=Math.abs(k)<=u,h.value=h.done?v:C};let _,j;const S=A=>{m(h.value)&&(_=A,j=Ln({keyframes:[h.value,g(h.value)],velocity:iu(x,A,h.value),damping:r,stiffness:s,restDelta:u,restSpeed:c}))};return S(0),{calculatedDuration:null,next:A=>{let k=!1;return!j&&_===void 0&&(k=!0,b(A),S(A)),_!==void 0&&A>=_?j.next(A-_):(!k&&b(A),h)}}}function Cg(t,e,i){const n=[],r=i||xt.mix||eu,s=t.length-1;for(let o=0;o<s;o++){let a=r(t[o],t[o+1]);if(e){const l=Array.isArray(e)?e[o]||ze:e;a=qi(l,a)}n.push(a)}return n}function jg(t,e,{clamp:i=!0,ease:n,mixer:r}={}){const s=t.length;if(Xs(s===e.length),s===1)return()=>e[0];if(s===2&&e[0]===e[1])return()=>e[1];const o=t[0]===t[1];t[0]>t[s-1]&&(t=[...t].reverse(),e=[...e].reverse());const a=Cg(e,n,r),l=a.length,u=c=>{if(o&&c<t[0])return e[0];let d=0;if(l>1)for(;d<t.length-2&&!(c<t[d+1]);d++);const h=Xi(t[d],t[d+1],c);return a[d](h)};return i?c=>u(Qe(t[0],t[s-1],c)):u}function Mg(t,e){const i=t[t.length-1];for(let n=1;n<=e;n++){const r=Xi(0,e,n);t.push(X(i,1,r))}}function Rg(t){const e=[0];return Mg(e,t.length-1),e}function Dg(t,e){return t.map(i=>i*e)}function Eg(t,e){return t.map(()=>e||Gc).splice(0,t.length-1)}function Li({duration:t=300,keyframes:e,times:i,ease:n="easeInOut"}){const r=U0(n)?n.map(Xo):Xo(n),s={done:!1,value:e[0]},o=Dg(i&&i.length===e.length?i:Rg(e),t),a=jg(o,e,{ease:Array.isArray(r)?r:Eg(e,r)});return{calculatedDuration:t,next:l=>(s.value=a(l),s.done=l>=t,s)}}const Lg=t=>t!==null;function Hn(t,{repeat:e,repeatType:i="loop"},n,r=1){const s=t.filter(Lg),a=r<0||e&&i!=="loop"&&e%2===1?0:s.length-1;return!a||n===void 0?s[a]:n}const Vg={decay:Xr,inertia:Xr,tween:Li,keyframes:Li,spring:Ln};function nu(t){typeof t.type=="string"&&(t.type=Vg[t.type])}class eo{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,i){return this.finished.then(e,i)}}const Og=t=>t/100;class Vn extends eo{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{const{motionValue:i}=this.options;i&&i.updatedAt!==me.now()&&this.tick(me.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){const{options:e}=this;nu(e);const{type:i=Li,repeat:n=0,repeatDelay:r=0,repeatType:s,velocity:o=0}=e;let{keyframes:a}=e;const l=i||Li;l!==Li&&typeof a[0]!="number"&&(this.mixKeyframes=qi(Og,eu(a[0],a[1])),a=[0,100]);const u=l({...e,keyframes:a});s==="mirror"&&(this.mirroredGenerator=l({...e,keyframes:[...a].reverse(),velocity:-o})),u.calculatedDuration===null&&(u.calculatedDuration=Js(u));const{calculatedDuration:c}=u;this.calculatedDuration=c,this.resolvedDuration=c+r,this.totalDuration=this.resolvedDuration*(n+1)-r,this.generator=u}updateTime(e){const i=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=i}tick(e,i=!1){const{generator:n,totalDuration:r,mixKeyframes:s,mirroredGenerator:o,resolvedDuration:a,calculatedDuration:l}=this;if(this.startTime===null)return n.next(0);const{delay:u=0,keyframes:c,repeat:d,repeatType:h,repeatDelay:m,type:g,onUpdate:p,finalKeyframe:y}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-r/this.speed,this.startTime)),i?this.currentTime=e:this.updateTime(e);const v=this.currentTime-u*(this.playbackSpeed>=0?1:-1),w=this.playbackSpeed>=0?v<0:v>r;this.currentTime=Math.max(v,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=r);let x=this.currentTime,b=n;if(d){const A=Math.min(this.currentTime,r)/a;let k=Math.floor(A),C=A%1;!C&&A>=1&&(C=1),C===1&&k--,k=Math.min(k,d+1),k%2&&(h==="reverse"?(C=1-C,m&&(C-=m/a)):h==="mirror"&&(b=o)),x=Qe(0,1,C)*a}let _;w?(this.delayState.value=c[0],_=this.delayState):_=b.next(x),s&&!w&&(_.value=s(_.value));let{done:j}=_;!w&&l!==null&&(j=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);const S=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&j);return S&&g!==Xr&&(_.value=Hn(c,this.options,y,this.speed)),p&&p(_.value),S&&this.finish(),_}then(e,i){return this.finished.then(e,i)}get duration(){return Ie(this.calculatedDuration)}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+Ie(e)}get time(){return Ie(this.currentTime)}set time(e){e=Me(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=e,this.tick(e))}getGeneratorVelocity(){const e=this.currentTime;if(e<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(e);const i=this.generator.next(e).value;return iu(n=>this.generator.next(n).value,e,i)}get speed(){return this.playbackSpeed}set speed(e){const i=this.playbackSpeed!==e;i&&this.driver&&this.updateTime(me.now()),this.playbackSpeed=e,i&&this.driver&&(this.time=Ie(this.currentTime))}play(){if(this.isStopped)return;const{driver:e=vg,startTime:i}=this.options;this.driver||(this.driver=e(r=>this.tick(r))),this.options.onPlay?.();const n=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=n):this.holdTime!==null?this.startTime=n-this.holdTime:this.startTime||(this.startTime=i??n),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(me.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),e.observe(this)}}function Ig(t){for(let e=1;e<t.length;e++)t[e]??(t[e]=t[e-1])}const Et=t=>t*180/Math.PI,Hr=t=>{const e=Et(Math.atan2(t[1],t[0]));return Yr(e)},zg={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:Hr,rotateZ:Hr,skewX:t=>Et(Math.atan(t[1])),skewY:t=>Et(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},Yr=t=>(t=t%360,t<0&&(t+=360),t),Qo=Hr,Jo=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),ea=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),Fg={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Jo,scaleY:ea,scale:t=>(Jo(t)+ea(t))/2,rotateX:t=>Yr(Et(Math.atan2(t[6],t[5]))),rotateY:t=>Yr(Et(Math.atan2(-t[2],t[0]))),rotateZ:Qo,rotate:Qo,skewX:t=>Et(Math.atan(t[4])),skewY:t=>Et(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function Zr(t){return t.includes("scale")?1:0}function Kr(t,e){if(!t||t==="none")return Zr(e);const i=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let n,r;if(i)n=Fg,r=i;else{const a=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);n=zg,r=a}if(!r)return Zr(e);const s=n[e],o=r[1].split(",").map(Ug);return typeof s=="function"?s(o):o[s]}const Bg=(t,e)=>{const{transform:i="none"}=getComputedStyle(t);return Kr(i,e)};function Ug(t){return parseFloat(t.trim())}const xi=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],vi=new Set(xi),ta=t=>t===yi||t===M,Ng=new Set(["x","y","z"]),Wg=xi.filter(t=>!Ng.has(t));function Gg(t){const e=[];return Wg.forEach(i=>{const n=t.getValue(i);n!==void 0&&(e.push([i,n.get()]),n.set(i.startsWith("scale")?1:0))}),e}const ht={width:({x:t},{paddingLeft:e="0",paddingRight:i="0",boxSizing:n})=>{const r=t.max-t.min;return n==="border-box"?r:r-parseFloat(e)-parseFloat(i)},height:({y:t},{paddingTop:e="0",paddingBottom:i="0",boxSizing:n})=>{const r=t.max-t.min;return n==="border-box"?r:r-parseFloat(e)-parseFloat(i)},top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:(t,{transform:e})=>Kr(e,"x"),y:(t,{transform:e})=>Kr(e,"y")};ht.translateX=ht.x;ht.translateY=ht.y;const Ft=new Set;let $r=!1,qr=!1,Qr=!1;function ru(){if(qr){const t=Array.from(Ft).filter(n=>n.needsMeasurement),e=new Set(t.map(n=>n.element)),i=new Map;e.forEach(n=>{const r=Gg(n);r.length&&(i.set(n,r),n.render())}),t.forEach(n=>n.measureInitialState()),e.forEach(n=>{n.render();const r=i.get(n);r&&r.forEach(([s,o])=>{n.getValue(s)?.set(o)})}),t.forEach(n=>n.measureEndState()),t.forEach(n=>{n.suspendedScrollY!==void 0&&window.scrollTo(0,n.suspendedScrollY)})}qr=!1,$r=!1,Ft.forEach(t=>t.complete(Qr)),Ft.clear()}function su(){Ft.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(qr=!0)})}function Xg(){Qr=!0,su(),ru(),Qr=!1}class to{constructor(e,i,n,r,s,o=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=i,this.name=n,this.motionValue=r,this.element=s,this.isAsync=o}scheduleResolve(){this.state="scheduled",this.isAsync?(Ft.add(this),$r||($r=!0,G.read(su),G.resolveKeyframes(ru))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:i,element:n,motionValue:r}=this;if(e[0]===null){const s=r?.get(),o=e[e.length-1];if(s!==void 0)e[0]=s;else if(n&&i){const a=n.readValue(i,o);a!=null&&(e[0]=a)}e[0]===void 0&&(e[0]=o),r&&s===void 0&&r.set(e[0])}Ig(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),Ft.delete(this)}cancel(){this.state==="scheduled"&&(Ft.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const Hg=t=>t.startsWith("--");function ou(t,e,i){Hg(e)?t.style.setProperty(e,i):t.style[e]=i}const Yg={};function au(t,e){const i=Lc(t);return()=>Yg[e]??i()}const Zg=au(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),lu=au(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Ci=([t,e,i,n])=>`cubic-bezier(${t}, ${e}, ${i}, ${n})`,ia={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ci([0,.65,.55,1]),circOut:Ci([.55,0,1,.45]),backIn:Ci([.31,.01,.66,-.59]),backOut:Ci([.33,1.53,.69,.99])};function cu(t,e){if(t)return typeof t=="function"?lu()?tu(t,e):"ease-out":Xc(t)?Ci(t):Array.isArray(t)?t.map(i=>cu(i,e)||ia.easeOut):ia[t]}function Kg(t,e,i,{delay:n=0,duration:r=300,repeat:s=0,repeatType:o="loop",ease:a="easeOut",times:l}={},u=void 0){const c={[e]:i};l&&(c.offset=l);const d=cu(a,r);Array.isArray(d)&&(c.easing=d);const h={delay:n,duration:r,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"};return u&&(h.pseudoElement=u),t.animate(c,h)}function uu(t){return typeof t=="function"&&"applyToOptions"in t}function $g({type:t,...e}){return uu(t)&&lu()?t.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}class du extends eo{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;const{element:i,name:n,keyframes:r,pseudoElement:s,allowFlatten:o=!1,finalKeyframe:a,onComplete:l}=e;this.isPseudoElement=!!s,this.allowFlatten=o,this.options=e,Xs(typeof e.type!="string");const u=$g(e);this.animation=Kg(i,n,r,u,s),u.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!s){const c=Hn(r,this.options,a,this.speed);this.updateMotionValue&&this.updateMotionValue(c),ou(i,n,c),this.animation.cancel()}l?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){const e=this.options?.element;!this.isPseudoElement&&e?.isConnected&&this.animation.commitStyles?.()}get duration(){const e=this.animation.effect?.getComputedTiming?.().duration||0;return Ie(Number(e))}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+Ie(e)}get time(){return Ie(Number(this.animation.currentTime)||0)}set time(e){const i=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Me(e),i&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,rangeStart:i,rangeEnd:n,observe:r}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,e&&Zg()?(this.animation.timeline=e,i&&(this.animation.rangeStart=i),n&&(this.animation.rangeEnd=n),ze):r(this)}}const hu={anticipate:Uc,backInOut:Bc,circInOut:Wc};function qg(t){return t in hu}function Qg(t){typeof t.ease=="string"&&qg(t.ease)&&(t.ease=hu[t.ease])}const gr=10;class Jg extends du{constructor(e){Qg(e),nu(e),super(e),e.startTime!==void 0&&e.autoplay!==!1&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:i,onUpdate:n,onComplete:r,element:s,...o}=this.options;if(!i)return;if(e!==void 0){i.set(e);return}const a=new Vn({...o,autoplay:!1}),l=Math.max(gr,me.now()-this.startTime),u=Qe(0,gr,l-gr),c=a.sample(l).value,{name:d}=this.options;s&&d&&ou(s,d,c),i.setWithVelocity(a.sample(Math.max(0,l-u)).value,c,u),a.stop()}}const na=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Ne.test(t)||t==="0")&&!t.startsWith("url("));function ey(t){const e=t[0];if(t.length===1)return!0;for(let i=0;i<t.length;i++)if(t[i]!==e)return!0}function ty(t,e,i,n){const r=t[0];if(r===null)return!1;if(e==="display"||e==="visibility")return!0;const s=t[t.length-1],o=na(r,e),a=na(s,e);return!o||!a?!1:ey(t)||(i==="spring"||uu(i))&&n}function Jr(t){t.duration=0,t.type="keyframes"}const fu=new Set(["opacity","clipPath","filter","transform"]),iy=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function ny(t){for(let e=0;e<t.length;e++)if(typeof t[e]=="string"&&iy.test(t[e]))return!0;return!1}const ry=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),sy=Lc(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function oy(t){const{motionValue:e,name:i,repeatDelay:n,repeatType:r,damping:s,type:o,keyframes:a}=t;if(!(e?.owner?.current instanceof HTMLElement))return!1;const{onUpdate:u,transformTemplate:c}=e.owner.getProps();return sy()&&i&&(fu.has(i)||ry.has(i)&&ny(a))&&(i!=="transform"||!c)&&!u&&!n&&r!=="mirror"&&s!==0&&o!=="inertia"}const ay=40;class ly extends eo{constructor({autoplay:e=!0,delay:i=0,type:n="keyframes",repeat:r=0,repeatDelay:s=0,repeatType:o="loop",keyframes:a,name:l,motionValue:u,element:c,...d}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=me.now();const h={autoplay:e,delay:i,type:n,repeat:r,repeatDelay:s,repeatType:o,name:l,motionValue:u,element:c,...d},m=c?.KeyframeResolver||to;this.keyframeResolver=new m(a,(g,p,y)=>this.onKeyframesResolved(g,p,h,!y),l,u,c),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(e,i,n,r){this.keyframeResolver=void 0;const{name:s,type:o,velocity:a,delay:l,isHandoff:u,onUpdate:c}=n;this.resolvedAt=me.now();let d=!0;ty(e,s,o,a)||(d=!1,(xt.instantAnimations||!l)&&c?.(Hn(e,n,i)),e[0]=e[e.length-1],Jr(n),n.repeat=0);const m={startTime:r?this.resolvedAt?this.resolvedAt-this.createdAt>ay?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:i,...n,keyframes:e},g=d&&!u&&oy(m),p=m.motionValue?.owner?.current;let y;if(g)try{y=new Jg({...m,element:p})}catch{y=new Vn(m)}else y=new Vn(m);y.finished.then(()=>{this.notifyFinished()}).catch(ze),this.pendingTimeline&&(this.stopTimeline=y.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=y}get finished(){return this._animation?this.animation.finished:this._finished}then(e,i){return this.finished.finally(e).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),Xg()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}function pu(t,e,i,n=0,r=1){const s=Array.from(t).sort((u,c)=>u.sortNodePosition(c)).indexOf(e),o=t.size,a=(o-1)*n;return typeof i=="function"?i(s,o):r===1?s*n:a-s*n}const cy=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function uy(t){const e=cy.exec(t);if(!e)return[,];const[,i,n,r]=e;return[`--${i??n}`,r]}function mu(t,e,i=1){const[n,r]=uy(t);if(!n)return;const s=window.getComputedStyle(e).getPropertyValue(n);if(s){const o=s.trim();return Rc(o)?parseFloat(o):o}return Ks(r)?mu(r,e,i+1):r}const dy={type:"spring",stiffness:500,damping:25,restSpeed:10},hy=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),fy={type:"keyframes",duration:.8},py={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},my=(t,{keyframes:e})=>e.length>2?fy:vi.has(t)?t.startsWith("scale")?hy(e[1]):dy:py;function gu(t,e){if(t?.inherit&&e){const{inherit:i,...n}=t;return{...e,...n}}return t}function io(t,e){const i=t?.[e]??t?.default??t;return i!==t?gu(i,t):i}const gy=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function yy(t){for(const e in t)if(!gy.has(e))return!0;return!1}const no=(t,e,i,n={},r,s)=>o=>{const a=io(n,t)||{},l=a.delay||n.delay||0;let{elapsed:u=0}=n;u=u-Me(l);const c={keyframes:Array.isArray(i)?i:[null,i],ease:"easeOut",velocity:e.getVelocity(),...a,delay:-u,onUpdate:h=>{e.set(h),a.onUpdate&&a.onUpdate(h)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:t,motionValue:e,element:s?void 0:r};yy(a)||Object.assign(c,my(t,c)),c.duration&&(c.duration=Me(c.duration)),c.repeatDelay&&(c.repeatDelay=Me(c.repeatDelay)),c.from!==void 0&&(c.keyframes[0]=c.from);let d=!1;if((c.type===!1||c.duration===0&&!c.repeatDelay)&&(Jr(c),c.delay===0&&(d=!0)),(xt.instantAnimations||xt.skipAnimations||r?.shouldSkipAnimations)&&(d=!0,Jr(c),c.delay=0),c.allowFlatten=!a.type&&!a.ease,d&&!s&&e.get()!==void 0){const h=Hn(c.keyframes,a);if(h!==void 0){G.update(()=>{c.onUpdate(h),c.onComplete()});return}}return a.isSync?new Vn(c):new ly(c)};function ra(t){const e=[{},{}];return t?.values.forEach((i,n)=>{e[0][n]=i.get(),e[1][n]=i.getVelocity()}),e}function ro(t,e,i,n){if(typeof e=="function"){const[r,s]=ra(n);e=e(i!==void 0?i:t.custom,r,s)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[r,s]=ra(n);e=e(i!==void 0?i:t.custom,r,s)}return e}function Bt(t,e,i){const n=t.getProps();return ro(n,e,i!==void 0?i:n.custom,t)}const yu=new Set(["width","height","top","left","right","bottom",...xi]),sa=30,xy=t=>!isNaN(parseFloat(t));class vy{constructor(e,i={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=n=>{const r=me.now();if(this.updatedAt!==r&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(n),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const s of this.dependents)s.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=i.owner}setCurrent(e){this.current=e,this.updatedAt=me.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=xy(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,i){this.events[e]||(this.events[e]=new Hs);const n=this.events[e].add(i);return e==="change"?()=>{n(),G.read(()=>{this.events.change.getSize()||this.stop()})}:n}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,i){this.passiveEffect=e,this.stopPassiveEffect=i}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,i,n){this.set(i),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-n}jump(e,i=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,i&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=me.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>sa)return 0;const i=Math.min(this.updatedAt-this.prevUpdatedAt,sa);return Vc(parseFloat(this.current)-parseFloat(this.prevFrameValue),i)}start(e){return this.stop(),new Promise(i=>{this.hasAnimated=!0,this.animation=e(i),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function gi(t,e){return new vy(t,e)}const es=t=>Array.isArray(t);function wy(t,e,i){t.hasValue(e)?t.getValue(e).set(i):t.addValue(e,gi(i))}function by(t){return es(t)?t[t.length-1]||0:t}function _y(t,e){const i=Bt(t,e);let{transitionEnd:n={},transition:r={},...s}=i||{};s={...s,...n};for(const o in s){const a=by(s[o]);wy(t,o,a)}}const ce=t=>!!(t&&t.getVelocity);function Ay(t){return!!(ce(t)&&t.add)}function ts(t,e){const i=t.getValue("willChange");if(Ay(i))return i.add(e);if(!i&&xt.WillChange){const n=new xt.WillChange("auto");t.addValue("willChange",n),n.add(e)}}function so(t){return t.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}const Ty="framerAppearId",xu="data-"+so(Ty);function vu(t){return t.props[xu]}function Sy({protectedKeys:t,needsAnimating:e},i){const n=t.hasOwnProperty(i)&&e[i]!==!0;return e[i]=!1,n}function wu(t,e,{delay:i=0,transitionOverride:n,type:r}={}){let{transition:s,transitionEnd:o,...a}=e;const l=t.getDefaultTransition();s=s?gu(s,l):l;const u=s?.reduceMotion;n&&(s=n);const c=[],d=r&&t.animationState&&t.animationState.getState()[r];for(const h in a){const m=t.getValue(h,t.latestValues[h]??null),g=a[h];if(g===void 0||d&&Sy(d,h))continue;const p={delay:i,...io(s||{},h)},y=m.get();if(y!==void 0&&!m.isAnimating()&&!Array.isArray(g)&&g===y&&!p.velocity){G.update(()=>m.set(g));continue}let v=!1;if(window.MotionHandoffAnimation){const b=vu(t);if(b){const _=window.MotionHandoffAnimation(b,h,G);_!==null&&(p.startTime=_,v=!0)}}ts(t,h);const w=u??t.shouldReduceMotion;m.start(no(h,m,g,w&&yu.has(h)?{type:!1}:p,t,v));const x=m.animation;x&&c.push(x)}if(o){const h=()=>G.update(()=>{o&&_y(t,o)});c.length?Promise.all(c).then(h):h()}return c}function is(t,e,i={}){const n=Bt(t,e,i.type==="exit"?t.presenceContext?.custom:void 0);let{transition:r=t.getDefaultTransition()||{}}=n||{};i.transitionOverride&&(r=i.transitionOverride);const s=n?()=>Promise.all(wu(t,n,i)):()=>Promise.resolve(),o=t.variantChildren&&t.variantChildren.size?(l=0)=>{const{delayChildren:u=0,staggerChildren:c,staggerDirection:d}=r;return ky(t,e,l,u,c,d,i)}:()=>Promise.resolve(),{when:a}=r;if(a){const[l,u]=a==="beforeChildren"?[s,o]:[o,s];return l().then(()=>u())}else return Promise.all([s(),o(i.delay)])}function ky(t,e,i=0,n=0,r=0,s=1,o){const a=[];for(const l of t.variantChildren)l.notify("AnimationStart",e),a.push(is(l,e,{...o,delay:i+(typeof n=="function"?0:n)+pu(t.variantChildren,l,n,r,s)}).then(()=>l.notify("AnimationComplete",e)));return Promise.all(a)}function Py(t,e,i={}){t.notify("AnimationStart",e);let n;if(Array.isArray(e)){const r=e.map(s=>is(t,s,i));n=Promise.all(r)}else if(typeof e=="string")n=is(t,e,i);else{const r=typeof e=="function"?Bt(t,e,i.custom):e;n=Promise.all(wu(t,r,i))}return n.then(()=>{t.notify("AnimationComplete",e)})}const Cy={test:t=>t==="auto",parse:t=>t},bu=t=>e=>e.test(t),_u=[yi,M,$e,lt,eg,J0,Cy],oa=t=>_u.find(bu(t));function jy(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||Ec(t):!0}const My=new Set(["brightness","contrast","saturate","opacity"]);function Ry(t){const[e,i]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[n]=i.match($s)||[];if(!n)return t;const r=i.replace(n,"");let s=My.has(e)?1:0;return n!==i&&(s*=100),e+"("+s+r+")"}const Dy=/\b([a-z-]*)\(.*?\)/gu,ns={...Ne,getAnimatableNone:t=>{const e=t.match(Dy);return e?e.map(Ry).join(" "):t}},rs={...Ne,getAnimatableNone:t=>{const e=Ne.parse(t);return Ne.createTransformer(t)(e.map(n=>typeof n=="number"?0:typeof n=="object"?{...n,alpha:1}:n))}},aa={...yi,transform:Math.round},Ey={rotate:lt,rotateX:lt,rotateY:lt,rotateZ:lt,scale:sn,scaleX:sn,scaleY:sn,scaleZ:sn,skew:lt,skewX:lt,skewY:lt,distance:M,translateX:M,translateY:M,translateZ:M,x:M,y:M,z:M,perspective:M,transformPerspective:M,opacity:Hi,originX:Yo,originY:Yo,originZ:M},oo={borderWidth:M,borderTopWidth:M,borderRightWidth:M,borderBottomWidth:M,borderLeftWidth:M,borderRadius:M,borderTopLeftRadius:M,borderTopRightRadius:M,borderBottomRightRadius:M,borderBottomLeftRadius:M,width:M,maxWidth:M,height:M,maxHeight:M,top:M,right:M,bottom:M,left:M,inset:M,insetBlock:M,insetBlockStart:M,insetBlockEnd:M,insetInline:M,insetInlineStart:M,insetInlineEnd:M,padding:M,paddingTop:M,paddingRight:M,paddingBottom:M,paddingLeft:M,paddingBlock:M,paddingBlockStart:M,paddingBlockEnd:M,paddingInline:M,paddingInlineStart:M,paddingInlineEnd:M,margin:M,marginTop:M,marginRight:M,marginBottom:M,marginLeft:M,marginBlock:M,marginBlockStart:M,marginBlockEnd:M,marginInline:M,marginInlineStart:M,marginInlineEnd:M,fontSize:M,backgroundPositionX:M,backgroundPositionY:M,...Ey,zIndex:aa,fillOpacity:Hi,strokeOpacity:Hi,numOctaves:aa},Ly={...oo,color:te,backgroundColor:te,outlineColor:te,fill:te,stroke:te,borderColor:te,borderTopColor:te,borderRightColor:te,borderBottomColor:te,borderLeftColor:te,filter:ns,WebkitFilter:ns,mask:rs,WebkitMask:rs},Au=t=>Ly[t],Vy=new Set([ns,rs]);function Tu(t,e){let i=Au(t);return Vy.has(i)||(i=Ne),i.getAnimatableNone?i.getAnimatableNone(e):void 0}const Oy=new Set(["auto","none","0"]);function Iy(t,e,i){let n=0,r;for(;n<t.length&&!r;){const s=t[n];typeof s=="string"&&!Oy.has(s)&&mi(s).values.length&&(r=t[n]),n++}if(r&&i)for(const s of e)t[s]=Tu(i,r)}class zy extends to{constructor(e,i,n,r,s){super(e,i,n,r,s,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:i,name:n}=this;if(!i||!i.current)return;super.readKeyframes();for(let c=0;c<e.length;c++){let d=e[c];if(typeof d=="string"&&(d=d.trim(),Ks(d))){const h=mu(d,i.current);h!==void 0&&(e[c]=h),c===e.length-1&&(this.finalKeyframe=d)}}if(this.resolveNoneKeyframes(),!yu.has(n)||e.length!==2)return;const[r,s]=e,o=oa(r),a=oa(s),l=Ho(r),u=Ho(s);if(l!==u&&ht[n]){this.needsMeasurement=!0;return}if(o!==a)if(ta(o)&&ta(a))for(let c=0;c<e.length;c++){const d=e[c];typeof d=="string"&&(e[c]=parseFloat(d))}else ht[n]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:i}=this,n=[];for(let r=0;r<e.length;r++)(e[r]===null||jy(e[r]))&&n.push(r);n.length&&Iy(e,n,i)}measureInitialState(){const{element:e,unresolvedKeyframes:i,name:n}=this;if(!e||!e.current)return;n==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=ht[n](e.measureViewportBox(),window.getComputedStyle(e.current)),i[0]=this.measuredOrigin;const r=i[i.length-1];r!==void 0&&e.getValue(n,r).jump(r,!1)}measureEndState(){const{element:e,name:i,unresolvedKeyframes:n}=this;if(!e||!e.current)return;const r=e.getValue(i);r&&r.jump(this.measuredOrigin,!1);const s=n.length-1,o=n[s];n[s]=ht[i](e.measureViewportBox(),window.getComputedStyle(e.current)),o!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=o),this.removedTransforms?.length&&this.removedTransforms.forEach(([a,l])=>{e.getValue(a).set(l)}),this.resolveNoneKeyframes()}}function Su(t,e,i){if(t==null)return[];if(t instanceof EventTarget)return[t];if(typeof t=="string"){const r=document.querySelectorAll(t);return r?Array.from(r):[]}return Array.from(t).filter(n=>n!=null)}const ku=(t,e)=>e&&typeof t=="number"?e.transform(t):t;function pn(t){return Dc(t)&&"offsetHeight"in t&&!("ownerSVGElement"in t)}const{schedule:ao}=Hc(queueMicrotask,!1),Be={x:!1,y:!1};function Pu(){return Be.x||Be.y}function Fy(t){return t==="x"||t==="y"?Be[t]?null:(Be[t]=!0,()=>{Be[t]=!1}):Be.x||Be.y?null:(Be.x=Be.y=!0,()=>{Be.x=Be.y=!1})}function Cu(t,e){const i=Su(t),n=new AbortController,r={passive:!0,...e,signal:n.signal};return[i,r,()=>n.abort()]}function By(t){return!(t.pointerType==="touch"||Pu())}function Uy(t,e,i={}){const[n,r,s]=Cu(t,i);return n.forEach(o=>{let a=!1,l=!1,u;const c=()=>{o.removeEventListener("pointerleave",g)},d=y=>{u&&(u(y),u=void 0),c()},h=y=>{a=!1,window.removeEventListener("pointerup",h),window.removeEventListener("pointercancel",h),l&&(l=!1,d(y))},m=()=>{a=!0,window.addEventListener("pointerup",h,r),window.addEventListener("pointercancel",h,r)},g=y=>{if(y.pointerType!=="touch"){if(a){l=!0;return}d(y)}},p=y=>{if(!By(y))return;l=!1;const v=e(o,y);typeof v=="function"&&(u=v,o.addEventListener("pointerleave",g,r))};o.addEventListener("pointerenter",p,r),o.addEventListener("pointerdown",m,r)}),s}const ju=(t,e)=>e?t===e?!0:ju(t,e.parentElement):!1,lo=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,Ny=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function Wy(t){return Ny.has(t.tagName)||t.isContentEditable===!0}const Gy=new Set(["INPUT","SELECT","TEXTAREA"]);function Xy(t){return Gy.has(t.tagName)||t.isContentEditable===!0}const mn=new WeakSet;function la(t){return e=>{e.key==="Enter"&&t(e)}}function yr(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const Hy=(t,e)=>{const i=t.currentTarget;if(!i)return;const n=la(()=>{if(mn.has(i))return;yr(i,"down");const r=la(()=>{yr(i,"up")}),s=()=>yr(i,"cancel");i.addEventListener("keyup",r,e),i.addEventListener("blur",s,e)});i.addEventListener("keydown",n,e),i.addEventListener("blur",()=>i.removeEventListener("keydown",n),e)};function ca(t){return lo(t)&&!Pu()}const ua=new WeakSet;function Yy(t,e,i={}){const[n,r,s]=Cu(t,i),o=a=>{const l=a.currentTarget;if(!ca(a)||ua.has(a))return;mn.add(l),i.stopPropagation&&ua.add(a);const u=e(l,a),c=(m,g)=>{window.removeEventListener("pointerup",d),window.removeEventListener("pointercancel",h),mn.has(l)&&mn.delete(l),ca(m)&&typeof u=="function"&&u(m,{success:g})},d=m=>{c(m,l===window||l===document||i.useGlobalTarget||ju(l,m.target))},h=m=>{c(m,!1)};window.addEventListener("pointerup",d,r),window.addEventListener("pointercancel",h,r)};return n.forEach(a=>{(i.useGlobalTarget?window:a).addEventListener("pointerdown",o,r),pn(a)&&(a.addEventListener("focus",u=>Hy(u,r)),!Wy(a)&&!a.hasAttribute("tabindex")&&(a.tabIndex=0))}),s}function co(t){return Dc(t)&&"ownerSVGElement"in t}const gn=new WeakMap;let yn;const Mu=(t,e,i)=>(n,r)=>r&&r[0]?r[0][t+"Size"]:co(n)&&"getBBox"in n?n.getBBox()[e]:n[i],Zy=Mu("inline","width","offsetWidth"),Ky=Mu("block","height","offsetHeight");function $y({target:t,borderBoxSize:e}){gn.get(t)?.forEach(i=>{i(t,{get width(){return Zy(t,e)},get height(){return Ky(t,e)}})})}function qy(t){t.forEach($y)}function Qy(){typeof ResizeObserver>"u"||(yn=new ResizeObserver(qy))}function Jy(t,e){yn||Qy();const i=Su(t);return i.forEach(n=>{let r=gn.get(n);r||(r=new Set,gn.set(n,r)),r.add(e),yn?.observe(n)}),()=>{i.forEach(n=>{const r=gn.get(n);r?.delete(e),r?.size||yn?.unobserve(n)})}}const xn=new Set;let ti;function ex(){ti=()=>{const t={get width(){return window.innerWidth},get height(){return window.innerHeight}};xn.forEach(e=>e(t))},window.addEventListener("resize",ti)}function tx(t){return xn.add(t),ti||ex(),()=>{xn.delete(t),!xn.size&&typeof ti=="function"&&(window.removeEventListener("resize",ti),ti=void 0)}}function da(t,e){return typeof t=="function"?tx(t):Jy(t,e)}function ix(t){return co(t)&&t.tagName==="svg"}const nx=[..._u,te,Ne],rx=t=>nx.find(bu(t)),ha=()=>({translate:0,scale:1,origin:0,originPoint:0}),ii=()=>({x:ha(),y:ha()}),fa=()=>({min:0,max:0}),ne=()=>({x:fa(),y:fa()}),sx=new WeakMap;function Yn(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function Yi(t){return typeof t=="string"||Array.isArray(t)}const uo=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],ho=["initial",...uo];function Zn(t){return Yn(t.animate)||ho.some(e=>Yi(t[e]))}function Ru(t){return!!(Zn(t)||t.variants)}function ox(t,e,i){for(const n in e){const r=e[n],s=i[n];if(ce(r))t.addValue(n,r);else if(ce(s))t.addValue(n,gi(r,{owner:t}));else if(s!==r)if(t.hasValue(n)){const o=t.getValue(n);o.liveStyle===!0?o.jump(r):o.hasAnimated||o.set(r)}else{const o=t.getStaticValue(n);t.addValue(n,gi(o!==void 0?o:r,{owner:t}))}}for(const n in i)e[n]===void 0&&t.removeValue(n);return e}const On={current:null},fo={current:!1},ax=typeof window<"u";function Du(){if(fo.current=!0,!!ax)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>On.current=t.matches;t.addEventListener("change",e),e()}else On.current=!1}const pa=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let In={};function Eu(t){In=t}function lx(){return In}class cx{scrapeMotionValuesFromProps(e,i,n){return{}}constructor({parent:e,props:i,presenceContext:n,reducedMotionConfig:r,skipAnimations:s,blockInitialAnimation:o,visualState:a},l={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=to,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const m=me.now();this.renderScheduledAt<m&&(this.renderScheduledAt=m,G.render(this.render,!1,!0))};const{latestValues:u,renderState:c}=a;this.latestValues=u,this.baseTarget={...u},this.initialValues=i.initial?{...u}:{},this.renderState=c,this.parent=e,this.props=i,this.presenceContext=n,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.skipAnimationsConfig=s,this.options=l,this.blockInitialAnimation=!!o,this.isControllingVariants=Zn(i),this.isVariantNode=Ru(i),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:d,...h}=this.scrapeMotionValuesFromProps(i,{},this);for(const m in h){const g=h[m];u[m]!==void 0&&ce(g)&&g.set(u[m])}}mount(e){if(this.hasBeenMounted)for(const i in this.initialValues)this.values.get(i)?.jump(this.initialValues[i]),this.latestValues[i]=this.initialValues[i];this.current=e,sx.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((i,n)=>this.bindToMotionValue(n,i)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(fo.current||Du(),this.shouldReduceMotion=On.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,this.parent?.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){this.projection&&this.projection.unmount(),vt(this.notifyUpdate),vt(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const i=this.features[e];i&&(i.unmount(),i.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,i){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),i.accelerate&&fu.has(e)&&this.current instanceof HTMLElement){const{factory:o,keyframes:a,times:l,ease:u,duration:c}=i.accelerate,d=new du({element:this.current,name:e,keyframes:a,times:l,ease:u,duration:Me(c)}),h=o(d);this.valueSubscriptions.set(e,()=>{h(),d.cancel()});return}const n=vi.has(e);n&&this.onBindTransform&&this.onBindTransform();const r=i.on("change",o=>{this.latestValues[e]=o,this.props.onUpdate&&G.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let s;typeof window<"u"&&window.MotionCheckAppearSync&&(s=window.MotionCheckAppearSync(this,e,i)),this.valueSubscriptions.set(e,()=>{r(),s&&s(),i.owner&&i.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in In){const i=In[e];if(!i)continue;const{isEnabled:n,Feature:r}=i;if(!this.features[e]&&r&&n(this.props)&&(this.features[e]=new r(this)),this.features[e]){const s=this.features[e];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):ne()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,i){this.latestValues[e]=i}update(e,i){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=i;for(let n=0;n<pa.length;n++){const r=pa[n];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const s="on"+r,o=e[s];o&&(this.propEventSubscriptions[r]=this.on(r,o))}this.prevMotionValues=ox(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const i=this.getClosestVariantNode();if(i)return i.variantChildren&&i.variantChildren.add(e),()=>i.variantChildren.delete(e)}addValue(e,i){const n=this.values.get(e);i!==n&&(n&&this.removeValue(e),this.bindToMotionValue(e,i),this.values.set(e,i),this.latestValues[e]=i.get())}removeValue(e){this.values.delete(e);const i=this.valueSubscriptions.get(e);i&&(i(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,i){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return n===void 0&&i!==void 0&&(n=gi(i===null?void 0:i,{owner:this}),this.addValue(e,n)),n}readValue(e,i){let n=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return n!=null&&(typeof n=="string"&&(Rc(n)||Ec(n))?n=parseFloat(n):!rx(n)&&Ne.test(i)&&(n=Tu(e,i)),this.setBaseTarget(e,ce(n)?n.get():n)),ce(n)?n.get():n}setBaseTarget(e,i){this.baseTarget[e]=i}getBaseTarget(e){const{initial:i}=this.props;let n;if(typeof i=="string"||typeof i=="object"){const s=ro(this.props,i,this.presenceContext?.custom);s&&(n=s[e])}if(i&&n!==void 0)return n;const r=this.getBaseTargetFromProps(this.props,e);return r!==void 0&&!ce(r)?r:this.initialValues[e]!==void 0&&n===void 0?void 0:this.baseTarget[e]}on(e,i){return this.events[e]||(this.events[e]=new Hs),this.events[e].add(i)}notify(e,...i){this.events[e]&&this.events[e].notify(...i)}scheduleRenderMicrotask(){ao.render(this.render)}}class Lu extends cx{constructor(){super(...arguments),this.KeyframeResolver=zy}sortInstanceNodePosition(e,i){return e.compareDocumentPosition(i)&2?1:-1}getBaseTargetFromProps(e,i){const n=e.style;return n?n[i]:void 0}removeValueFromRenderState(e,{vars:i,style:n}){delete i[e],delete n[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;ce(e)&&(this.childSubscription=e.on("change",i=>{this.current&&(this.current.textContent=`${i}`)}))}}class bt{constructor(e){this.isMounted=!1,this.node=e}update(){}}function Vu({top:t,left:e,right:i,bottom:n}){return{x:{min:e,max:i},y:{min:t,max:n}}}function ux({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function dx(t,e){if(!e)return t;const i=e({x:t.left,y:t.top}),n=e({x:t.right,y:t.bottom});return{top:i.y,left:i.x,bottom:n.y,right:n.x}}function xr(t){return t===void 0||t===1}function ss({scale:t,scaleX:e,scaleY:i}){return!xr(t)||!xr(e)||!xr(i)}function jt(t){return ss(t)||Ou(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function Ou(t){return ma(t.x)||ma(t.y)}function ma(t){return t&&t!=="0%"}function zn(t,e,i){const n=t-i,r=e*n;return i+r}function ga(t,e,i,n,r){return r!==void 0&&(t=zn(t,r,n)),zn(t,i,n)+e}function os(t,e=0,i=1,n,r){t.min=ga(t.min,e,i,n,r),t.max=ga(t.max,e,i,n,r)}function Iu(t,{x:e,y:i}){os(t.x,e.translate,e.scale,e.originPoint),os(t.y,i.translate,i.scale,i.originPoint)}const ya=.999999999999,xa=1.0000000000001;function hx(t,e,i,n=!1){const r=i.length;if(!r)return;e.x=e.y=1;let s,o;for(let a=0;a<r;a++){s=i[a],o=s.projectionDelta;const{visualElement:l}=s.options;l&&l.props.style&&l.props.style.display==="contents"||(n&&s.options.layoutScroll&&s.scroll&&s!==s.root&&(Ye(t.x,-s.scroll.offset.x),Ye(t.y,-s.scroll.offset.y)),o&&(e.x*=o.x.scale,e.y*=o.y.scale,Iu(t,o)),n&&jt(s.latestValues)&&vn(t,s.latestValues,s.layout?.layoutBox))}e.x<xa&&e.x>ya&&(e.x=1),e.y<xa&&e.y>ya&&(e.y=1)}function Ye(t,e){t.min+=e,t.max+=e}function va(t,e,i,n,r=.5){const s=X(t.min,t.max,r);os(t,e,i,s,n)}function wa(t,e){return typeof t=="string"?parseFloat(t)/100*(e.max-e.min):t}function vn(t,e,i){const n=i??t;va(t.x,wa(e.x,n.x),e.scaleX,e.scale,e.originX),va(t.y,wa(e.y,n.y),e.scaleY,e.scale,e.originY)}function zu(t,e){return Vu(dx(t.getBoundingClientRect(),e))}function fx(t,e,i){const n=zu(t,i),{scroll:r}=e;return r&&(Ye(n.x,r.offset.x),Ye(n.y,r.offset.y)),n}const px={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},mx=xi.length;function gx(t,e,i){let n="",r=!0;for(let s=0;s<mx;s++){const o=xi[s],a=t[o];if(a===void 0)continue;let l=!0;if(typeof a=="number")l=a===(o.startsWith("scale")?1:0);else{const u=parseFloat(a);l=o.startsWith("scale")?u===1:u===0}if(!l||i){const u=ku(a,oo[o]);if(!l){r=!1;const c=px[o]||o;n+=`${c}(${u}) `}i&&(e[o]=u)}}return n=n.trim(),i?n=i(e,r?"":n):r&&(n="none"),n}function po(t,e,i){const{style:n,vars:r,transformOrigin:s}=t;let o=!1,a=!1;for(const l in e){const u=e[l];if(vi.has(l)){o=!0;continue}else if(Zc(l)){r[l]=u;continue}else{const c=ku(u,oo[l]);l.startsWith("origin")?(a=!0,s[l]=c):n[l]=c}}if(e.transform||(o||i?n.transform=gx(e,t.transform,i):n.transform&&(n.transform="none")),a){const{originX:l="50%",originY:u="50%",originZ:c=0}=s;n.transformOrigin=`${l} ${u} ${c}`}}function Fu(t,{style:e,vars:i},n,r){const s=t.style;let o;for(o in e)s[o]=e[o];r?.applyProjectionStyles(s,n);for(o in i)s.setProperty(o,i[o])}function ba(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const Si={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(M.test(t))t=parseFloat(t);else return t;const i=ba(t,e.target.x),n=ba(t,e.target.y);return`${i}% ${n}%`}},yx={correct:(t,{treeScale:e,projectionDelta:i})=>{const n=t,r=Ne.parse(t);if(r.length>5)return n;const s=Ne.createTransformer(t),o=typeof r[0]!="number"?1:0,a=i.x.scale*e.x,l=i.y.scale*e.y;r[0+o]/=a,r[1+o]/=l;const u=X(a,l,.5);return typeof r[2+o]=="number"&&(r[2+o]/=u),typeof r[3+o]=="number"&&(r[3+o]/=u),s(r)}},as={borderRadius:{...Si,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Si,borderTopRightRadius:Si,borderBottomLeftRadius:Si,borderBottomRightRadius:Si,boxShadow:yx};function Bu(t,{layout:e,layoutId:i}){return vi.has(t)||t.startsWith("origin")||(e||i!==void 0)&&(!!as[t]||t==="opacity")}function mo(t,e,i){const n=t.style,r=e?.style,s={};if(!n)return s;for(const o in n)(ce(n[o])||r&&ce(r[o])||Bu(o,t)||i?.getValue(o)?.liveStyle!==void 0)&&(s[o]=n[o]);return s}function xx(t){return window.getComputedStyle(t)}class vx extends Lu{constructor(){super(...arguments),this.type="html",this.renderInstance=Fu}readValueFromInstance(e,i){if(vi.has(i))return this.projection?.isProjecting?Zr(i):Bg(e,i);{const n=xx(e),r=(Zc(i)?n.getPropertyValue(i):n[i])||0;return typeof r=="string"?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:i}){return zu(e,i)}build(e,i,n){po(e,i,n.transformTemplate)}scrapeMotionValuesFromProps(e,i,n){return mo(e,i,n)}}const wx={offset:"stroke-dashoffset",array:"stroke-dasharray"},bx={offset:"strokeDashoffset",array:"strokeDasharray"};function _x(t,e,i=1,n=0,r=!0){t.pathLength=1;const s=r?wx:bx;t[s.offset]=`${-n}`,t[s.array]=`${e} ${i}`}const Ax=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function Uu(t,{attrX:e,attrY:i,attrScale:n,pathLength:r,pathSpacing:s=1,pathOffset:o=0,...a},l,u,c){if(po(t,a,u),l){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:d,style:h}=t;d.transform&&(h.transform=d.transform,delete d.transform),(h.transform||d.transformOrigin)&&(h.transformOrigin=d.transformOrigin??"50% 50%",delete d.transformOrigin),h.transform&&(h.transformBox=c?.transformBox??"fill-box",delete d.transformBox);for(const m of Ax)d[m]!==void 0&&(h[m]=d[m],delete d[m]);e!==void 0&&(d.x=e),i!==void 0&&(d.y=i),n!==void 0&&(d.scale=n),r!==void 0&&_x(d,r,s,o,!1)}const Nu=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),Wu=t=>typeof t=="string"&&t.toLowerCase()==="svg";function Tx(t,e,i,n){Fu(t,e,void 0,n);for(const r in e.attrs)t.setAttribute(Nu.has(r)?r:so(r),e.attrs[r])}function Gu(t,e,i){const n=mo(t,e,i);for(const r in t)if(ce(t[r])||ce(e[r])){const s=xi.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;n[s]=t[r]}return n}class Sx extends Lu{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=ne}getBaseTargetFromProps(e,i){return e[i]}readValueFromInstance(e,i){if(vi.has(i)){const n=Au(i);return n&&n.default||0}return i=Nu.has(i)?i:so(i),e.getAttribute(i)}scrapeMotionValuesFromProps(e,i,n){return Gu(e,i,n)}build(e,i,n){Uu(e,i,this.isSVGTag,n.transformTemplate,n.style)}renderInstance(e,i,n,r){Tx(e,i,n,r)}mount(e){this.isSVGTag=Wu(e.tagName),super.mount(e)}}const kx=ho.length;function Xu(t){if(!t)return;if(!t.isControllingVariants){const i=t.parent?Xu(t.parent)||{}:{};return t.props.initial!==void 0&&(i.initial=t.props.initial),i}const e={};for(let i=0;i<kx;i++){const n=ho[i],r=t.props[n];(Yi(r)||r===!1)&&(e[n]=r)}return e}function Hu(t,e){if(!Array.isArray(e))return!1;const i=e.length;if(i!==t.length)return!1;for(let n=0;n<i;n++)if(e[n]!==t[n])return!1;return!0}const Px=[...uo].reverse(),Cx=uo.length;function jx(t){return e=>Promise.all(e.map(({animation:i,options:n})=>Py(t,i,n)))}function Mx(t){let e=jx(t),i=_a(),n=!0,r=!1;const s=u=>(c,d)=>{const h=Bt(t,d,u==="exit"?t.presenceContext?.custom:void 0);if(h){const{transition:m,transitionEnd:g,...p}=h;c={...c,...p,...g}}return c};function o(u){e=u(t)}function a(u){const{props:c}=t,d=Xu(t.parent)||{},h=[],m=new Set;let g={},p=1/0;for(let v=0;v<Cx;v++){const w=Px[v],x=i[w],b=c[w]!==void 0?c[w]:d[w],_=Yi(b),j=w===u?x.isActive:null;j===!1&&(p=v);let S=b===d[w]&&b!==c[w]&&_;if(S&&(n||r)&&t.manuallyAnimateOnMount&&(S=!1),x.protectedKeys={...g},!x.isActive&&j===null||!b&&!x.prevProp||Yn(b)||typeof b=="boolean")continue;if(w==="exit"&&x.isActive&&j!==!0){x.prevResolvedValues&&(g={...g,...x.prevResolvedValues});continue}const A=Rx(x.prevProp,b);let k=A||w===u&&x.isActive&&!S&&_||v>p&&_,C=!1;const R=Array.isArray(b)?b:[b];let E=R.reduce(s(w),{});j===!1&&(E={});const{prevResolvedValues:L={}}=x,V={...L,...E},O=F=>{k=!0,m.has(F)&&(C=!0,m.delete(F)),x.needsAnimating[F]=!0;const H=t.getValue(F);H&&(H.liveStyle=!1)};for(const F in V){const H=E[F],D=L[F];if(g.hasOwnProperty(F))continue;let I=!1;es(H)&&es(D)?I=!Hu(H,D):I=H!==D,I?H!=null?O(F):m.add(F):H!==void 0&&m.has(F)?O(F):x.protectedKeys[F]=!0}x.prevProp=b,x.prevResolvedValues=E,x.isActive&&(g={...g,...E}),(n||r)&&t.blockInitialAnimation&&(k=!1);const z=S&&A;k&&(!z||C)&&h.push(...R.map(F=>{const H={type:w};if(typeof F=="string"&&(n||r)&&!z&&t.manuallyAnimateOnMount&&t.parent){const{parent:D}=t,I=Bt(D,F);if(D.enteringChildren&&I){const{delayChildren:J}=I.transition||{};H.delay=pu(D.enteringChildren,t,J)}}return{animation:F,options:H}}))}if(m.size){const v={};if(typeof c.initial!="boolean"){const w=Bt(t,Array.isArray(c.initial)?c.initial[0]:c.initial);w&&w.transition&&(v.transition=w.transition)}m.forEach(w=>{const x=t.getBaseTarget(w),b=t.getValue(w);b&&(b.liveStyle=!0),v[w]=x??null}),h.push({animation:v})}let y=!!h.length;return n&&(c.initial===!1||c.initial===c.animate)&&!t.manuallyAnimateOnMount&&(y=!1),n=!1,r=!1,y?e(h):Promise.resolve()}function l(u,c){if(i[u].isActive===c)return Promise.resolve();t.variantChildren?.forEach(h=>h.animationState?.setActive(u,c)),i[u].isActive=c;const d=a(u);for(const h in i)i[h].protectedKeys={};return d}return{animateChanges:a,setActive:l,setAnimateFunction:o,getState:()=>i,reset:()=>{i=_a(),r=!0}}}function Rx(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!Hu(e,t):!1}function St(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function _a(){return{animate:St(!0),whileInView:St(),whileHover:St(),whileTap:St(),whileDrag:St(),whileFocus:St(),exit:St()}}function ls(t,e){t.min=e.min,t.max=e.max}function Fe(t,e){ls(t.x,e.x),ls(t.y,e.y)}function Aa(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}const Yu=1e-4,Dx=1-Yu,Ex=1+Yu,Zu=.01,Lx=0-Zu,Vx=0+Zu;function ge(t){return t.max-t.min}function Ox(t,e,i){return Math.abs(t-e)<=i}function Ta(t,e,i,n=.5){t.origin=n,t.originPoint=X(e.min,e.max,t.origin),t.scale=ge(i)/ge(e),t.translate=X(i.min,i.max,t.origin)-t.originPoint,(t.scale>=Dx&&t.scale<=Ex||isNaN(t.scale))&&(t.scale=1),(t.translate>=Lx&&t.translate<=Vx||isNaN(t.translate))&&(t.translate=0)}function Vi(t,e,i,n){Ta(t.x,e.x,i.x,n?n.originX:void 0),Ta(t.y,e.y,i.y,n?n.originY:void 0)}function Sa(t,e,i,n=0){const r=n?X(i.min,i.max,n):i.min;t.min=r+e.min,t.max=t.min+ge(e)}function Ix(t,e,i,n){Sa(t.x,e.x,i.x,n?.x),Sa(t.y,e.y,i.y,n?.y)}function ka(t,e,i,n=0){const r=n?X(i.min,i.max,n):i.min;t.min=e.min-r,t.max=t.min+ge(e)}function Fn(t,e,i,n){ka(t.x,e.x,i.x,n?.x),ka(t.y,e.y,i.y,n?.y)}function Pa(t,e,i,n,r){return t-=e,t=zn(t,1/i,n),r!==void 0&&(t=zn(t,1/r,n)),t}function zx(t,e=0,i=1,n=.5,r,s=t,o=t){if($e.test(e)&&(e=parseFloat(e),e=X(o.min,o.max,e/100)-o.min),typeof e!="number")return;let a=X(s.min,s.max,n);t===s&&(a-=e),t.min=Pa(t.min,e,i,a,r),t.max=Pa(t.max,e,i,a,r)}function Ca(t,e,[i,n,r],s,o){zx(t,e[i],e[n],e[r],e.scale,s,o)}const Fx=["x","scaleX","originX"],Bx=["y","scaleY","originY"];function ja(t,e,i,n){Ca(t.x,e,Fx,i?i.x:void 0,n?n.x:void 0),Ca(t.y,e,Bx,i?i.y:void 0,n?n.y:void 0)}function Ma(t){return t.translate===0&&t.scale===1}function Ku(t){return Ma(t.x)&&Ma(t.y)}function Ra(t,e){return t.min===e.min&&t.max===e.max}function Ux(t,e){return Ra(t.x,e.x)&&Ra(t.y,e.y)}function Da(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function $u(t,e){return Da(t.x,e.x)&&Da(t.y,e.y)}function Ea(t){return ge(t.x)/ge(t.y)}function La(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}function Xe(t){return[t("x"),t("y")]}function Nx(t,e,i){let n="";const r=t.x.translate/e.x,s=t.y.translate/e.y,o=i?.z||0;if((r||s||o)&&(n=`translate3d(${r}px, ${s}px, ${o}px) `),(e.x!==1||e.y!==1)&&(n+=`scale(${1/e.x}, ${1/e.y}) `),i){const{transformPerspective:u,rotate:c,rotateX:d,rotateY:h,skewX:m,skewY:g}=i;u&&(n=`perspective(${u}px) ${n}`),c&&(n+=`rotate(${c}deg) `),d&&(n+=`rotateX(${d}deg) `),h&&(n+=`rotateY(${h}deg) `),m&&(n+=`skewX(${m}deg) `),g&&(n+=`skewY(${g}deg) `)}const a=t.x.scale*e.x,l=t.y.scale*e.y;return(a!==1||l!==1)&&(n+=`scale(${a}, ${l})`),n||"none"}const qu=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],Wx=qu.length,Va=t=>typeof t=="string"?parseFloat(t):t,Oa=t=>typeof t=="number"||M.test(t);function Gx(t,e,i,n,r,s){r?(t.opacity=X(0,i.opacity??1,Xx(n)),t.opacityExit=X(e.opacity??1,0,Hx(n))):s&&(t.opacity=X(e.opacity??1,i.opacity??1,n));for(let o=0;o<Wx;o++){const a=qu[o];let l=Ia(e,a),u=Ia(i,a);if(l===void 0&&u===void 0)continue;l||(l=0),u||(u=0),l===0||u===0||Oa(l)===Oa(u)?(t[a]=Math.max(X(Va(l),Va(u),n),0),($e.test(u)||$e.test(l))&&(t[a]+="%")):t[a]=u}(e.rotate||i.rotate)&&(t.rotate=X(e.rotate||0,i.rotate||0,n))}function Ia(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const Xx=Qu(0,.5,Nc),Hx=Qu(.5,.95,ze);function Qu(t,e,i){return n=>n<t?0:n>e?1:i(Xi(t,e,n))}function Yx(t,e,i){const n=ce(t)?t:gi(t);return n.start(no("",n,e,i)),n.animation}function Zi(t,e,i,n={passive:!0}){return t.addEventListener(e,i,n),()=>t.removeEventListener(e,i)}const Zx=(t,e)=>t.depth-e.depth;class Kx{constructor(){this.children=[],this.isDirty=!1}add(e){Gs(this.children,e),this.isDirty=!0}remove(e){Rn(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(Zx),this.isDirty=!1,this.children.forEach(e)}}function $x(t,e){const i=me.now(),n=({timestamp:r})=>{const s=r-i;s>=e&&(vt(n),t(s-e))};return G.setup(n,!0),()=>vt(n)}function wn(t){return ce(t)?t.get():t}class qx{constructor(){this.members=[]}add(e){Gs(this.members,e);for(let i=this.members.length-1;i>=0;i--){const n=this.members[i];if(n===e||n===this.lead||n===this.prevLead)continue;const r=n.instance;(!r||r.isConnected===!1)&&!n.snapshot&&(Rn(this.members,n),n.unmount())}e.scheduleRender()}remove(e){if(Rn(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const i=this.members[this.members.length-1];i&&this.promote(i)}}relegate(e){for(let i=this.members.indexOf(e)-1;i>=0;i--){const n=this.members[i];if(n.isPresent!==!1&&n.instance?.isConnected!==!1)return this.promote(n),!0}return!1}promote(e,i){const n=this.lead;if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)){n.updateSnapshot(),e.scheduleRender();const{layoutDependency:r}=n.options,{layoutDependency:s}=e.options;(r===void 0||r!==s)&&(e.resumeFrom=n,i&&(n.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root?.isUpdating&&(e.isLayoutDirty=!0)),e.options.crossfade===!1&&n.hide()}}exitAnimationComplete(){this.members.forEach(e=>{e.options.onExitComplete?.(),e.resumingFrom?.options.onExitComplete?.()})}scheduleRender(){this.members.forEach(e=>e.instance&&e.scheduleRender(!1))}removeLeadSnapshot(){this.lead?.snapshot&&(this.lead.snapshot=void 0)}}const bn={hasAnimatedSinceResize:!0,hasEverUpdated:!1},vr=["","X","Y","Z"],Qx=1e3;let Jx=0;function wr(t,e,i,n){const{latestValues:r}=e;r[t]&&(i[t]=r[t],e.setStaticValue(t,0),n&&(n[t]=0))}function Ju(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const i=vu(e);if(window.MotionHasOptimisedAnimation(i,"transform")){const{layout:r,layoutId:s}=t.options;window.MotionCancelOptimisedAnimation(i,"transform",G,!(r||s))}const{parent:n}=t;n&&!n.hasCheckedOptimisedAppear&&Ju(n)}function ed({attachResizeListener:t,defaultParent:e,measureScroll:i,checkIsScrollRoot:n,resetTransform:r}){return class{constructor(o={},a=e?.()){this.id=Jx++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(i1),this.nodes.forEach(l1),this.nodes.forEach(c1),this.nodes.forEach(n1)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new Kx)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new Hs),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o){if(this.instance)return;this.isSVG=co(o)&&!ix(o),this.instance=o;const{layoutId:a,layout:l,visualElement:u}=this.options;if(u&&!u.current&&u.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(l||a)&&(this.isLayoutDirty=!0),t){let c,d=0;const h=()=>this.root.updateBlockedByResize=!1;G.read(()=>{d=window.innerWidth}),t(o,()=>{const m=window.innerWidth;m!==d&&(d=m,this.root.updateBlockedByResize=!0,c&&c(),c=$x(h,250),bn.hasAnimatedSinceResize&&(bn.hasAnimatedSinceResize=!1,this.nodes.forEach(Ba)))})}a&&this.root.registerSharedNode(a,this),this.options.animate!==!1&&u&&(a||l)&&this.addEventListener("didUpdate",({delta:c,hasLayoutChanged:d,hasRelativeLayoutChanged:h,layout:m})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const g=this.options.transition||u.getDefaultTransition()||p1,{onLayoutAnimationStart:p,onLayoutAnimationComplete:y}=u.getProps(),v=!this.targetLayout||!$u(this.targetLayout,m),w=!d&&h;if(this.options.layoutRoot||this.resumeFrom||w||d&&(v||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const x={...io(g,"layout"),onPlay:p,onComplete:y};(u.shouldReduceMotion||this.options.layoutRoot)&&(x.delay=0,x.type=!1),this.startAnimation(x),this.setAnimationOrigin(c,w)}else d||Ba(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=m})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),vt(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(u1),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Ju(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let c=0;c<this.path.length;c++){const d=this.path[c];d.shouldResetTransform=!0,(typeof d.latestValues.x=="string"||typeof d.latestValues.y=="string")&&(d.isLayoutDirty=!0),d.updateScroll("snapshot"),d.options.layoutRoot&&d.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const l=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),l&&this.nodes.forEach(s1),this.nodes.forEach(za);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Fa);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(o1),this.nodes.forEach(a1),this.nodes.forEach(e1),this.nodes.forEach(t1)):this.nodes.forEach(Fa),this.clearAllSnapshots();const a=me.now();le.delta=Qe(0,1e3/60,a-le.timestamp),le.timestamp=a,le.isProcessing=!0,dr.update.process(le),dr.preRender.process(le),dr.render.process(le),le.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,ao.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(r1),this.sharedNodes.forEach(d1)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,G.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){G.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!ge(this.snapshot.measuredBox.x)&&!ge(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=ne()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a&&this.instance){const l=n(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:i(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!r)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!Ku(this.projectionDelta),l=this.getTransformTemplate(),u=l?l(this.latestValues,""):void 0,c=u!==this.prevTransformTemplateValue;o&&this.instance&&(a||jt(this.latestValues)||c)&&(r(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),m1(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:o}=this.options;if(!o)return ne();const a=o.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(g1))){const{scroll:u}=this.root;u&&(Ye(a.x,u.offset.x),Ye(a.y,u.offset.y))}return a}removeElementScroll(o){const a=ne();if(Fe(a,o),this.scroll?.wasRoot)return a;for(let l=0;l<this.path.length;l++){const u=this.path[l],{scroll:c,options:d}=u;u!==this.root&&c&&d.layoutScroll&&(c.wasRoot&&Fe(a,o),Ye(a.x,c.offset.x),Ye(a.y,c.offset.y))}return a}applyTransform(o,a=!1,l){const u=l||ne();Fe(u,o);for(let c=0;c<this.path.length;c++){const d=this.path[c];!a&&d.options.layoutScroll&&d.scroll&&d!==d.root&&(Ye(u.x,-d.scroll.offset.x),Ye(u.y,-d.scroll.offset.y)),jt(d.latestValues)&&vn(u,d.latestValues,d.layout?.layoutBox)}return jt(this.latestValues)&&vn(u,this.latestValues,this.layout?.layoutBox),u}removeTransform(o){const a=ne();Fe(a,o);for(let l=0;l<this.path.length;l++){const u=this.path[l];if(!jt(u.latestValues))continue;let c;u.instance&&(ss(u.latestValues)&&u.updateSnapshot(),c=ne(),Fe(c,u.measurePageBox())),ja(a,u.latestValues,u.snapshot?.layoutBox,c)}return jt(this.latestValues)&&ja(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==le.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){const a=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=a.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=a.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=a.isSharedProjectionDirty);const l=!!this.resumingFrom||this!==a;if(!(o||l&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:c,layoutId:d}=this.options;if(!this.layout||!(c||d))return;this.resolvedRelativeTargetAt=le.timestamp;const h=this.getClosestProjectingParent();h&&this.linkedParentVersion!==h.layoutVersion&&!h.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&h&&h.layout?this.createRelativeTarget(h,this.layout.layoutBox,h.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=ne(),this.targetWithTransforms=ne()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Ix(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):Fe(this.target,this.layout.layoutBox),Iu(this.target,this.targetDelta)):Fe(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&h&&!!h.resumingFrom==!!this.resumingFrom&&!h.options.layoutScroll&&h.target&&this.animationProgress!==1?this.createRelativeTarget(h,this.target,h.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||ss(this.parent.latestValues)||Ou(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(o,a,l){this.relativeParent=o,this.linkedParentVersion=o.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ne(),this.relativeTargetOrigin=ne(),Fn(this.relativeTargetOrigin,a,l,this.options.layoutAnchor||void 0),Fe(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){const o=this.getLead(),a=!!this.resumingFrom||this!==o;let l=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(l=!1),a&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(l=!1),this.resolvedRelativeTargetAt===le.timestamp&&(l=!1),l)return;const{layout:u,layoutId:c}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||c))return;Fe(this.layoutCorrected,this.layout.layoutBox);const d=this.treeScale.x,h=this.treeScale.y;hx(this.layoutCorrected,this.treeScale,this.path,a),o.layout&&!o.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(o.target=o.layout.layoutBox,o.targetWithTransforms=ne());const{target:m}=o;if(!m){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Aa(this.prevProjectionDelta.x,this.projectionDelta.x),Aa(this.prevProjectionDelta.y,this.projectionDelta.y)),Vi(this.projectionDelta,this.layoutCorrected,m,this.latestValues),(this.treeScale.x!==d||this.treeScale.y!==h||!La(this.projectionDelta.x,this.prevProjectionDelta.x)||!La(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",m))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){if(this.options.visualElement?.scheduleRender(),o){const a=this.getStack();a&&a.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=ii(),this.projectionDelta=ii(),this.projectionDeltaWithTransform=ii()}setAnimationOrigin(o,a=!1){const l=this.snapshot,u=l?l.latestValues:{},c={...this.latestValues},d=ii();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const h=ne(),m=l?l.source:void 0,g=this.layout?this.layout.source:void 0,p=m!==g,y=this.getStack(),v=!y||y.members.length<=1,w=!!(p&&!v&&this.options.crossfade===!0&&!this.path.some(f1));this.animationProgress=0;let x;this.mixTargetDelta=b=>{const _=b/1e3;Ua(d.x,o.x,_),Ua(d.y,o.y,_),this.setTargetDelta(d),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Fn(h,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),h1(this.relativeTarget,this.relativeTargetOrigin,h,_),x&&Ux(this.relativeTarget,x)&&(this.isProjectionDirty=!1),x||(x=ne()),Fe(x,this.relativeTarget)),p&&(this.animationValues=c,Gx(c,u,this.latestValues,_,w,v)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=_},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(vt(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=G.update(()=>{bn.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=gi(0)),this.motionValue.jump(0,!1),this.currentAnimation=Yx(this.motionValue,[0,1e3],{...o,velocity:0,isSync:!0,onUpdate:a=>{this.mixTargetDelta(a),o.onUpdate&&o.onUpdate(a)},onStop:()=>{},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Qx),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:u,latestValues:c}=o;if(!(!a||!l||!u)){if(this!==o&&this.layout&&u&&td(this.options.animationType,this.layout.layoutBox,u.layoutBox)){l=this.target||ne();const d=ge(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+d;const h=ge(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+h}Fe(a,l),vn(a,c),Vi(this.projectionDeltaWithTransform,this.layoutCorrected,a,c)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new qx),this.sharedNodes.get(o).add(a);const u=a.options.initialPromotionConfig;a.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){const{layoutId:o}=this.options;return o?this.getStack()?.lead||this:this}getPrevLead(){const{layoutId:o}=this.options;return o?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const u={};l.z&&wr("z",o,u,this.animationValues);for(let c=0;c<vr.length;c++)wr(`rotate${vr[c]}`,o,u,this.animationValues),wr(`skew${vr[c]}`,o,u,this.animationValues);o.render();for(const c in u)o.setStaticValue(c,u[c]),this.animationValues&&(this.animationValues[c]=u[c]);o.scheduleRender()}applyProjectionStyles(o,a){if(!this.instance||this.isSVG)return;if(!this.isVisible){o.visibility="hidden";return}const l=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,o.visibility="",o.opacity="",o.pointerEvents=wn(a?.pointerEvents)||"",o.transform=l?l(this.latestValues,""):"none";return}const u=this.getLead();if(!this.projectionDelta||!this.layout||!u.target){this.options.layoutId&&(o.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,o.pointerEvents=wn(a?.pointerEvents)||""),this.hasProjected&&!jt(this.latestValues)&&(o.transform=l?l({},""):"none",this.hasProjected=!1);return}o.visibility="";const c=u.animationValues||u.latestValues;this.applyTransformsToTarget();let d=Nx(this.projectionDeltaWithTransform,this.treeScale,c);l&&(d=l(c,d)),o.transform=d;const{x:h,y:m}=this.projectionDelta;o.transformOrigin=`${h.origin*100}% ${m.origin*100}% 0`,u.animationValues?o.opacity=u===this?c.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:c.opacityExit:o.opacity=u===this?c.opacity!==void 0?c.opacity:"":c.opacityExit!==void 0?c.opacityExit:0;for(const g in as){if(c[g]===void 0)continue;const{correct:p,applyTo:y,isCSSVariable:v}=as[g],w=d==="none"?c[g]:p(c[g],u);if(y){const x=y.length;for(let b=0;b<x;b++)o[y[b]]=w}else v?this.options.visualElement.renderState.vars[g]=w:o[g]=w}this.options.layoutId&&(o.pointerEvents=u===this?wn(a?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>o.currentAnimation?.stop()),this.root.nodes.forEach(za),this.root.sharedNodes.clear()}}}function e1(t){t.updateLayout()}function t1(t){const e=t.resumeFrom?.snapshot||t.snapshot;if(t.isLead()&&t.layout&&e&&t.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:n}=t.layout,{animationType:r}=t.options,s=e.source!==t.layout.source;if(r==="size")Xe(c=>{const d=s?e.measuredBox[c]:e.layoutBox[c],h=ge(d);d.min=i[c].min,d.max=d.min+h});else if(r==="x"||r==="y"){const c=r==="x"?"y":"x";ls(s?e.measuredBox[c]:e.layoutBox[c],i[c])}else td(r,e.layoutBox,i)&&Xe(c=>{const d=s?e.measuredBox[c]:e.layoutBox[c],h=ge(i[c]);d.max=d.min+h,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[c].max=t.relativeTarget[c].min+h)});const o=ii();Vi(o,i,e.layoutBox);const a=ii();s?Vi(a,t.applyTransform(n,!0),e.measuredBox):Vi(a,i,e.layoutBox);const l=!Ku(o);let u=!1;if(!t.resumeFrom){const c=t.getClosestProjectingParent();if(c&&!c.resumeFrom){const{snapshot:d,layout:h}=c;if(d&&h){const m=t.options.layoutAnchor||void 0,g=ne();Fn(g,e.layoutBox,d.layoutBox,m);const p=ne();Fn(p,i,h.layoutBox,m),$u(g,p)||(u=!0),c.options.layoutRoot&&(t.relativeTarget=p,t.relativeTargetOrigin=g,t.relativeParent=c)}}}t.notifyListeners("didUpdate",{layout:i,snapshot:e,delta:a,layoutDelta:o,hasLayoutChanged:l,hasRelativeLayoutChanged:u})}else if(t.isLead()){const{onExitComplete:i}=t.options;i&&i()}t.options.transition=void 0}function i1(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function n1(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function r1(t){t.clearSnapshot()}function za(t){t.clearMeasurements()}function s1(t){t.isLayoutDirty=!0,t.updateLayout()}function Fa(t){t.isLayoutDirty=!1}function o1(t){t.isAnimationBlocked&&t.layout&&!t.isLayoutDirty&&(t.snapshot=t.layout,t.isLayoutDirty=!0)}function a1(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function Ba(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function l1(t){t.resolveTargetDelta()}function c1(t){t.calcProjection()}function u1(t){t.resetSkewAndRotation()}function d1(t){t.removeLeadSnapshot()}function Ua(t,e,i){t.translate=X(e.translate,0,i),t.scale=X(e.scale,1,i),t.origin=e.origin,t.originPoint=e.originPoint}function Na(t,e,i,n){t.min=X(e.min,i.min,n),t.max=X(e.max,i.max,n)}function h1(t,e,i,n){Na(t.x,e.x,i.x,n),Na(t.y,e.y,i.y,n)}function f1(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const p1={duration:.45,ease:[.4,0,.1,1]},Wa=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),Ga=Wa("applewebkit/")&&!Wa("chrome/")?Math.round:ze;function Xa(t){t.min=Ga(t.min),t.max=Ga(t.max)}function m1(t){Xa(t.x),Xa(t.y)}function td(t,e,i){return t==="position"||t==="preserve-aspect"&&!Ox(Ea(e),Ea(i),.2)}function g1(t){return t!==t.root&&t.scroll?.wasRoot}const y1=ed({attachResizeListener:(t,e)=>Zi(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body?.scrollLeft||0,y:document.documentElement.scrollTop||document.body?.scrollTop||0}),checkIsScrollRoot:()=>!0}),br={current:void 0},id=ed({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!br.current){const t=new y1({});t.mount(window),t.setOptions({layoutScroll:!0}),br.current=t}return br.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),go=T.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});function Ha(t,e){if(typeof t=="function")return t(e);t!=null&&(t.current=e)}function x1(...t){return e=>{let i=!1;const n=t.map(r=>{const s=Ha(r,e);return!i&&typeof s=="function"&&(i=!0),s});if(i)return()=>{for(let r=0;r<n.length;r++){const s=n[r];typeof s=="function"?s():Ha(t[r],null)}}}}function v1(...t){return T.useCallback(x1(...t),t)}class w1 extends T.Component{getSnapshotBeforeUpdate(e){const i=this.props.childRef.current;if(pn(i)&&e.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const n=i.offsetParent,r=pn(n)&&n.offsetWidth||0,s=pn(n)&&n.offsetHeight||0,o=getComputedStyle(i),a=this.props.sizeRef.current;a.height=parseFloat(o.height),a.width=parseFloat(o.width),a.top=i.offsetTop,a.left=i.offsetLeft,a.right=r-a.width-a.left,a.bottom=s-a.height-a.top}return null}componentDidUpdate(){}render(){return this.props.children}}function b1({children:t,isPresent:e,anchorX:i,anchorY:n,root:r,pop:s}){const o=T.useId(),a=T.useRef(null),l=T.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:u}=T.useContext(go),c=t.props?.ref??t?.ref,d=v1(a,c);return T.useInsertionEffect(()=>{const{width:h,height:m,top:g,left:p,right:y,bottom:v}=l.current;if(e||s===!1||!a.current||!h||!m)return;const w=i==="left"?`left: ${p}`:`right: ${y}`,x=n==="bottom"?`bottom: ${v}`:`top: ${g}`;a.current.dataset.motionPopId=o;const b=document.createElement("style");u&&(b.nonce=u);const _=r??document.head;return _.appendChild(b),b.sheet&&b.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${h}px !important;
            height: ${m}px !important;
            ${w}px !important;
            ${x}px !important;
          }
        `),()=>{a.current?.removeAttribute("data-motion-pop-id"),_.contains(b)&&_.removeChild(b)}},[e]),f.jsx(w1,{isPresent:e,childRef:a,sizeRef:l,pop:s,children:s===!1?t:T.cloneElement(t,{ref:d})})}const _1=({children:t,initial:e,isPresent:i,onExitComplete:n,custom:r,presenceAffectsLayout:s,mode:o,anchorX:a,anchorY:l,root:u})=>{const c=Ws(A1),d=T.useId();let h=!0,m=T.useMemo(()=>(h=!1,{id:d,initial:e,isPresent:i,custom:r,onExitComplete:g=>{c.set(g,!0);for(const p of c.values())if(!p)return;n&&n()},register:g=>(c.set(g,!1),()=>c.delete(g))}),[i,c,n]);return s&&h&&(m={...m}),T.useMemo(()=>{c.forEach((g,p)=>c.set(p,!1))},[i]),T.useEffect(()=>{!i&&!c.size&&n&&n()},[i]),t=f.jsx(b1,{pop:o==="popLayout",isPresent:i,anchorX:a,anchorY:l,root:u,children:t}),f.jsx(Xn.Provider,{value:m,children:t})};function A1(){return new Map}function nd(t=!0){const e=T.useContext(Xn);if(e===null)return[!0,null];const{isPresent:i,onExitComplete:n,register:r}=e,s=T.useId();T.useEffect(()=>{if(t)return r(s)},[t]);const o=T.useCallback(()=>t&&n&&n(s),[s,n,t]);return!i&&n?[!1,o]:[!0]}const on=t=>t.key||"";function Ya(t){const e=[];return T.Children.forEach(t,i=>{T.isValidElement(i)&&e.push(i)}),e}const Za=({children:t,custom:e,initial:i=!0,onExitComplete:n,presenceAffectsLayout:r=!0,mode:s="sync",propagate:o=!1,anchorX:a="left",anchorY:l="top",root:u})=>{const[c,d]=nd(o),h=T.useMemo(()=>Ya(t),[t]),m=o&&!c?[]:h.map(on),g=T.useRef(!0),p=T.useRef(h),y=Ws(()=>new Map),v=T.useRef(new Set),[w,x]=T.useState(h),[b,_]=T.useState(h);Mc(()=>{g.current=!1,p.current=h;for(let A=0;A<b.length;A++){const k=on(b[A]);m.includes(k)?(y.delete(k),v.current.delete(k)):y.get(k)!==!0&&y.set(k,!1)}},[b,m.length,m.join("-")]);const j=[];if(h!==w){let A=[...h];for(let k=0;k<b.length;k++){const C=b[k],R=on(C);m.includes(R)||(A.splice(k,0,C),j.push(C))}return s==="wait"&&j.length&&(A=j),_(Ya(A)),x(h),null}const{forceRender:S}=T.useContext(Ns);return f.jsx(f.Fragment,{children:b.map(A=>{const k=on(A),C=o&&!c?!1:h===b||m.includes(k),R=()=>{if(v.current.has(k))return;if(y.has(k))v.current.add(k),y.set(k,!0);else return;let E=!0;y.forEach(L=>{L||(E=!1)}),E&&(S?.(),_(p.current),o&&d?.(),n&&n())};return f.jsx(_1,{isPresent:C,initial:!g.current||i?void 0:!1,custom:e,presenceAffectsLayout:r,mode:s,root:u,onExitComplete:C?void 0:R,anchorX:a,anchorY:l,children:A},k)})})},rd=T.createContext({strict:!1}),Ka={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let $a=!1;function T1(){if($a)return;const t={};for(const e in Ka)t[e]={isEnabled:i=>Ka[e].some(n=>!!i[n])};Eu(t),$a=!0}function sd(){return T1(),lx()}function S1(t){const e=sd();for(const i in t)e[i]={...e[i],...t[i]};Eu(e)}const k1=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function Bn(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||k1.has(t)}let od=t=>!Bn(t);function P1(t){typeof t=="function"&&(od=e=>e.startsWith("on")?!Bn(e):t(e))}try{P1(require("@emotion/is-prop-valid").default)}catch{}function C1(t,e,i){const n={};for(const r in t)r==="values"&&typeof t.values=="object"||ce(t[r])||(od(r)||i===!0&&Bn(r)||!e&&!Bn(r)||t.draggable&&r.startsWith("onDrag"))&&(n[r]=t[r]);return n}const Kn=T.createContext({});function j1(t,e){if(Zn(t)){const{initial:i,animate:n}=t;return{initial:i===!1||Yi(i)?i:void 0,animate:Yi(n)?n:void 0}}return t.inherit!==!1?e:{}}function M1(t){const{initial:e,animate:i}=j1(t,T.useContext(Kn));return T.useMemo(()=>({initial:e,animate:i}),[qa(e),qa(i)])}function qa(t){return Array.isArray(t)?t.join(" "):t}const yo=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function ad(t,e,i){for(const n in e)!ce(e[n])&&!Bu(n,i)&&(t[n]=e[n])}function R1({transformTemplate:t},e){return T.useMemo(()=>{const i=yo();return po(i,e,t),Object.assign({},i.vars,i.style)},[e])}function D1(t,e){const i=t.style||{},n={};return ad(n,i,t),Object.assign(n,R1(t,e)),n}function E1(t,e){const i={},n=D1(t,e);return t.drag&&t.dragListener!==!1&&(i.draggable=!1,n.userSelect=n.WebkitUserSelect=n.WebkitTouchCallout="none",n.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(i.tabIndex=0),i.style=n,i}const ld=()=>({...yo(),attrs:{}});function L1(t,e,i,n){const r=T.useMemo(()=>{const s=ld();return Uu(s,e,Wu(n),t.transformTemplate,t.style),{...s.attrs,style:{...s.style}}},[e]);if(t.style){const s={};ad(s,t.style,t),r.style={...s,...r.style}}return r}const V1=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function xo(t){return typeof t!="string"||t.includes("-")?!1:!!(V1.indexOf(t)>-1||/[A-Z]/u.test(t))}function O1(t,e,i,{latestValues:n},r,s=!1,o){const l=(o??xo(t)?L1:E1)(e,n,r,t),u=C1(e,typeof t=="string",s),c=t!==T.Fragment?{...u,...l,ref:i}:{},{children:d}=e,h=T.useMemo(()=>ce(d)?d.get():d,[d]);return T.createElement(t,{...c,children:h})}function I1({scrapeMotionValuesFromProps:t,createRenderState:e},i,n,r){return{latestValues:z1(i,n,r,t),renderState:e()}}function z1(t,e,i,n){const r={},s=n(t,{});for(const h in s)r[h]=wn(s[h]);let{initial:o,animate:a}=t;const l=Zn(t),u=Ru(t);e&&u&&!l&&t.inherit!==!1&&(o===void 0&&(o=e.initial),a===void 0&&(a=e.animate));let c=i?i.initial===!1:!1;c=c||o===!1;const d=c?a:o;if(d&&typeof d!="boolean"&&!Yn(d)){const h=Array.isArray(d)?d:[d];for(let m=0;m<h.length;m++){const g=ro(t,h[m]);if(g){const{transitionEnd:p,transition:y,...v}=g;for(const w in v){let x=v[w];if(Array.isArray(x)){const b=c?x.length-1:0;x=x[b]}x!==null&&(r[w]=x)}for(const w in p)r[w]=p[w]}}}return r}const cd=t=>(e,i)=>{const n=T.useContext(Kn),r=T.useContext(Xn),s=()=>I1(t,e,n,r);return i?s():Ws(s)},F1=cd({scrapeMotionValuesFromProps:mo,createRenderState:yo}),B1=cd({scrapeMotionValuesFromProps:Gu,createRenderState:ld}),U1=Symbol.for("motionComponentSymbol");function N1(t,e,i){const n=T.useRef(i);T.useInsertionEffect(()=>{n.current=i});const r=T.useRef(null);return T.useCallback(s=>{s&&t.onMount?.(s);const o=n.current;if(typeof o=="function")if(s){const a=o(s);typeof a=="function"&&(r.current=a)}else r.current?(r.current(),r.current=null):o(s);else o&&(o.current=s);e&&(s?e.mount(s):e.unmount())},[e])}const ud=T.createContext({});function qt(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function W1(t,e,i,n,r,s){const{visualElement:o}=T.useContext(Kn),a=T.useContext(rd),l=T.useContext(Xn),u=T.useContext(go),c=u.reducedMotion,d=u.skipAnimations,h=T.useRef(null),m=T.useRef(!1);n=n||a.renderer,!h.current&&n&&(h.current=n(t,{visualState:e,parent:o,props:i,presenceContext:l,blockInitialAnimation:l?l.initial===!1:!1,reducedMotionConfig:c,skipAnimations:d,isSVG:s}),m.current&&h.current&&(h.current.manuallyAnimateOnMount=!0));const g=h.current,p=T.useContext(ud);g&&!g.projection&&r&&(g.type==="html"||g.type==="svg")&&G1(h.current,i,r,p);const y=T.useRef(!1);T.useInsertionEffect(()=>{g&&y.current&&g.update(i,l)});const v=i[xu],w=T.useRef(!!v&&typeof window<"u"&&!window.MotionHandoffIsComplete?.(v)&&window.MotionHasOptimisedAnimation?.(v));return Mc(()=>{m.current=!0,g&&(y.current=!0,window.MotionIsMounted=!0,g.updateFeatures(),g.scheduleRenderMicrotask(),w.current&&g.animationState&&g.animationState.animateChanges())}),T.useEffect(()=>{g&&(!w.current&&g.animationState&&g.animationState.animateChanges(),w.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(v)}),w.current=!1),g.enteringChildren=void 0)}),g}function G1(t,e,i,n){const{layoutId:r,layout:s,drag:o,dragConstraints:a,layoutScroll:l,layoutRoot:u,layoutAnchor:c,layoutCrossfade:d}=e;t.projection=new i(t.latestValues,e["data-framer-portal-id"]?void 0:dd(t.parent)),t.projection.setOptions({layoutId:r,layout:s,alwaysMeasureLayout:!!o||a&&qt(a),visualElement:t,animationType:typeof s=="string"?s:"both",initialPromotionConfig:n,crossfade:d,layoutScroll:l,layoutRoot:u,layoutAnchor:c})}function dd(t){if(t)return t.options.allowProjection!==!1?t.projection:dd(t.parent)}function _r(t,{forwardMotionProps:e=!1,type:i}={},n,r){n&&S1(n);const s=i?i==="svg":xo(t),o=s?B1:F1;function a(u,c){let d;const h={...T.useContext(go),...u,layoutId:X1(u)},{isStatic:m}=h,g=M1(u),p=o(u,m);if(!m&&typeof window<"u"){H1();const y=Y1(h);d=y.MeasureLayout,g.visualElement=W1(t,p,h,r,y.ProjectionNode,s)}return f.jsxs(Kn.Provider,{value:g,children:[d&&g.visualElement?f.jsx(d,{visualElement:g.visualElement,...h}):null,O1(t,u,N1(p,g.visualElement,c),p,m,e,s)]})}a.displayName=`motion.${typeof t=="string"?t:`create(${t.displayName??t.name??""})`}`;const l=T.forwardRef(a);return l[U1]=t,l}function X1({layoutId:t}){const e=T.useContext(Ns).id;return e&&t!==void 0?e+"-"+t:t}function H1(t,e){T.useContext(rd).strict}function Y1(t){const e=sd(),{drag:i,layout:n}=e;if(!i&&!n)return{};const r={...i,...n};return{MeasureLayout:i?.isEnabled(t)||n?.isEnabled(t)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}function Z1(t,e){if(typeof Proxy>"u")return _r;const i=new Map,n=(s,o)=>_r(s,o,t,e),r=(s,o)=>n(s,o);return new Proxy(r,{get:(s,o)=>o==="create"?n:(i.has(o)||i.set(o,_r(o,void 0,t,e)),i.get(o))})}const K1=(t,e)=>e.isSVG??xo(t)?new Sx(e):new vx(e,{allowProjection:t!==T.Fragment});class $1 extends bt{constructor(e){super(e),e.animationState||(e.animationState=Mx(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();Yn(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:i}=this.node.prevProps||{};e!==i&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}let q1=0;class Q1 extends bt{constructor(){super(...arguments),this.id=q1++,this.isExitComplete=!1}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:i}=this.node.presenceContext,{isPresent:n}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===n)return;if(e&&n===!1){if(this.isExitComplete){const{initial:s,custom:o}=this.node.getProps();if(typeof s=="string"){const a=Bt(this.node,s,o);if(a){const{transition:l,transitionEnd:u,...c}=a;for(const d in c)this.node.getValue(d)?.jump(c[d])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const r=this.node.animationState.setActive("exit",!e);i&&!e&&r.then(()=>{this.isExitComplete=!0,i(this.id)})}mount(){const{register:e,onExitComplete:i}=this.node.presenceContext||{};i&&i(this.id),e&&(this.unmount=e(this.id))}unmount(){}}const J1={animation:{Feature:$1},exit:{Feature:Q1}};function en(t){return{point:{x:t.pageX,y:t.pageY}}}const ev=t=>e=>lo(e)&&t(e,en(e));function Oi(t,e,i,n){return Zi(t,e,ev(i),n)}const hd=({current:t})=>t?t.ownerDocument.defaultView:null,Qa=(t,e)=>Math.abs(t-e);function tv(t,e){const i=Qa(t.x,e.x),n=Qa(t.y,e.y);return Math.sqrt(i**2+n**2)}const Ja=new Set(["auto","scroll"]);class fd{constructor(e,i,{transformPagePoint:n,contextWindow:r=window,dragSnapToOrigin:s=!1,distanceThreshold:o=3,element:a}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=m=>{this.handleScroll(m.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=an(this.lastRawMoveEventInfo,this.transformPagePoint));const m=Ar(this.lastMoveEventInfo,this.history),g=this.startEvent!==null,p=tv(m.offset,{x:0,y:0})>=this.distanceThreshold;if(!g&&!p)return;const{point:y}=m,{timestamp:v}=le;this.history.push({...y,timestamp:v});const{onStart:w,onMove:x}=this.handlers;g||(w&&w(this.lastMoveEvent,m),this.startEvent=this.lastMoveEvent),x&&x(this.lastMoveEvent,m)},this.handlePointerMove=(m,g)=>{this.lastMoveEvent=m,this.lastRawMoveEventInfo=g,this.lastMoveEventInfo=an(g,this.transformPagePoint),G.update(this.updatePoint,!0)},this.handlePointerUp=(m,g)=>{this.end();const{onEnd:p,onSessionEnd:y,resumeAnimation:v}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&v&&v(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const w=Ar(m.type==="pointercancel"?this.lastMoveEventInfo:an(g,this.transformPagePoint),this.history);this.startEvent&&p&&p(m,w),y&&y(m,w)},!lo(e))return;this.dragSnapToOrigin=s,this.handlers=i,this.transformPagePoint=n,this.distanceThreshold=o,this.contextWindow=r||window;const l=en(e),u=an(l,this.transformPagePoint),{point:c}=u,{timestamp:d}=le;this.history=[{...c,timestamp:d}];const{onSessionStart:h}=i;h&&h(e,Ar(u,this.history)),this.removeListeners=qi(Oi(this.contextWindow,"pointermove",this.handlePointerMove),Oi(this.contextWindow,"pointerup",this.handlePointerUp),Oi(this.contextWindow,"pointercancel",this.handlePointerUp)),a&&this.startScrollTracking(a)}startScrollTracking(e){let i=e.parentElement;for(;i;){const n=getComputedStyle(i);(Ja.has(n.overflowX)||Ja.has(n.overflowY))&&this.scrollPositions.set(i,{x:i.scrollLeft,y:i.scrollTop}),i=i.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(e){const i=this.scrollPositions.get(e);if(!i)return;const n=e===window,r=n?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},s={x:r.x-i.x,y:r.y-i.y};s.x===0&&s.y===0||(n?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=s.x,this.lastMoveEventInfo.point.y+=s.y):this.history.length>0&&(this.history[0].x-=s.x,this.history[0].y-=s.y),this.scrollPositions.set(e,r),G.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),vt(this.updatePoint)}}function an(t,e){return e?{point:e(t.point)}:t}function el(t,e){return{x:t.x-e.x,y:t.y-e.y}}function Ar({point:t},e){return{point:t,delta:el(t,pd(e)),offset:el(t,iv(e)),velocity:nv(e,.1)}}function iv(t){return t[0]}function pd(t){return t[t.length-1]}function nv(t,e){if(t.length<2)return{x:0,y:0};let i=t.length-1,n=null;const r=pd(t);for(;i>=0&&(n=t[i],!(r.timestamp-n.timestamp>Me(e)));)i--;if(!n)return{x:0,y:0};n===t[0]&&t.length>2&&r.timestamp-n.timestamp>Me(e)*2&&(n=t[1]);const s=Ie(r.timestamp-n.timestamp);if(s===0)return{x:0,y:0};const o={x:(r.x-n.x)/s,y:(r.y-n.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function rv(t,{min:e,max:i},n){return e!==void 0&&t<e?t=n?X(e,t,n.min):Math.max(t,e):i!==void 0&&t>i&&(t=n?X(i,t,n.max):Math.min(t,i)),t}function tl(t,e,i){return{min:e!==void 0?t.min+e:void 0,max:i!==void 0?t.max+i-(t.max-t.min):void 0}}function sv(t,{top:e,left:i,bottom:n,right:r}){return{x:tl(t.x,i,r),y:tl(t.y,e,n)}}function il(t,e){let i=e.min-t.min,n=e.max-t.max;return e.max-e.min<t.max-t.min&&([i,n]=[n,i]),{min:i,max:n}}function ov(t,e){return{x:il(t.x,e.x),y:il(t.y,e.y)}}function av(t,e){let i=.5;const n=ge(t),r=ge(e);return r>n?i=Xi(e.min,e.max-n,t.min):n>r&&(i=Xi(t.min,t.max-r,e.min)),Qe(0,1,i)}function lv(t,e){const i={};return e.min!==void 0&&(i.min=e.min-t.min),e.max!==void 0&&(i.max=e.max-t.min),i}const cs=.35;function cv(t=cs){return t===!1?t=0:t===!0&&(t=cs),{x:nl(t,"left","right"),y:nl(t,"top","bottom")}}function nl(t,e,i){return{min:rl(t,e),max:rl(t,i)}}function rl(t,e){return typeof t=="number"?t:t[e]||0}const uv=new WeakMap;class dv{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=ne(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:i=!1,distanceThreshold:n}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const s=d=>{i&&this.snapToCursor(en(d).point),this.stopAnimation()},o=(d,h)=>{const{drag:m,dragPropagation:g,onDragStart:p}=this.getProps();if(m&&!g&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Fy(m),!this.openDragLock))return;this.latestPointerEvent=d,this.latestPanInfo=h,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Xe(v=>{let w=this.getAxisMotionValue(v).get()||0;if($e.test(w)){const{projection:x}=this.visualElement;if(x&&x.layout){const b=x.layout.layoutBox[v];b&&(w=ge(b)*(parseFloat(w)/100))}}this.originPoint[v]=w}),p&&G.update(()=>p(d,h),!1,!0),ts(this.visualElement,"transform");const{animationState:y}=this.visualElement;y&&y.setActive("whileDrag",!0)},a=(d,h)=>{this.latestPointerEvent=d,this.latestPanInfo=h;const{dragPropagation:m,dragDirectionLock:g,onDirectionLock:p,onDrag:y}=this.getProps();if(!m&&!this.openDragLock)return;const{offset:v}=h;if(g&&this.currentDirection===null){this.currentDirection=fv(v),this.currentDirection!==null&&p&&p(this.currentDirection);return}this.updateAxis("x",h.point,v),this.updateAxis("y",h.point,v),this.visualElement.render(),y&&G.update(()=>y(d,h),!1,!0)},l=(d,h)=>{this.latestPointerEvent=d,this.latestPanInfo=h,this.stop(d,h),this.latestPointerEvent=null,this.latestPanInfo=null},u=()=>{const{dragSnapToOrigin:d}=this.getProps();(d||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:c}=this.getProps();this.panSession=new fd(e,{onSessionStart:s,onStart:o,onMove:a,onSessionEnd:l,resumeAnimation:u},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:c,distanceThreshold:n,contextWindow:hd(this.visualElement),element:this.visualElement.current})}stop(e,i){const n=e||this.latestPointerEvent,r=i||this.latestPanInfo,s=this.isDragging;if(this.cancel(),!s||!r||!n)return;const{velocity:o}=r;this.startAnimation(o);const{onDragEnd:a}=this.getProps();a&&G.postRender(()=>a(n,r))}cancel(){this.isDragging=!1;const{projection:e,animationState:i}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:n}=this.getProps();!n&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),i&&i.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,i,n){const{drag:r}=this.getProps();if(!n||!ln(e,r,this.currentDirection))return;const s=this.getAxisMotionValue(e);let o=this.originPoint[e]+n[e];this.constraints&&this.constraints[e]&&(o=rv(o,this.constraints[e],this.elastic[e])),s.set(o)}resolveConstraints(){const{dragConstraints:e,dragElastic:i}=this.getProps(),n=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,r=this.constraints;e&&qt(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&n?this.constraints=sv(n.layoutBox,e):this.constraints=!1,this.elastic=cv(i),r!==this.constraints&&!qt(e)&&n&&this.constraints&&!this.hasMutatedConstraints&&Xe(s=>{this.constraints!==!1&&this.getAxisMotionValue(s)&&(this.constraints[s]=lv(n.layoutBox[s],this.constraints[s]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:i}=this.getProps();if(!e||!qt(e))return!1;const n=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const s=fx(n,r.root,this.visualElement.getTransformPagePoint());let o=ov(r.layout.layoutBox,s);if(i){const a=i(ux(o));this.hasMutatedConstraints=!!a,a&&(o=Vu(a))}return o}startAnimation(e){const{drag:i,dragMomentum:n,dragElastic:r,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},u=Xe(c=>{if(!ln(c,i,this.currentDirection))return;let d=l&&l[c]||{};(o===!0||o===c)&&(d={min:0,max:0});const h=r?200:1e6,m=r?40:1e7,g={type:"inertia",velocity:n?e[c]:0,bounceStiffness:h,bounceDamping:m,timeConstant:750,restDelta:1,restSpeed:10,...s,...d};return this.startAxisValueAnimation(c,g)});return Promise.all(u).then(a)}startAxisValueAnimation(e,i){const n=this.getAxisMotionValue(e);return ts(this.visualElement,e),n.start(no(e,n,0,i,this.visualElement,!1))}stopAnimation(){Xe(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){const i=`_drag${e.toUpperCase()}`,n=this.visualElement.getProps(),r=n[i];return r||this.visualElement.getValue(e,(n.initial?n.initial[e]:void 0)||0)}snapToCursor(e){Xe(i=>{const{drag:n}=this.getProps();if(!ln(i,n,this.currentDirection))return;const{projection:r}=this.visualElement,s=this.getAxisMotionValue(i);if(r&&r.layout){const{min:o,max:a}=r.layout.layoutBox[i],l=s.get()||0;s.set(e[i]-X(o,a,.5)+l)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:i}=this.getProps(),{projection:n}=this.visualElement;if(!qt(i)||!n||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};Xe(o=>{const a=this.getAxisMotionValue(o);if(a&&this.constraints!==!1){const l=a.get();r[o]=av({min:l,max:l},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",n.root&&n.root.updateScroll(),n.updateLayout(),this.constraints=!1,this.resolveConstraints(),Xe(o=>{if(!ln(o,e,null))return;const a=this.getAxisMotionValue(o),{min:l,max:u}=this.constraints[o];a.set(X(l,u,r[o]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;uv.set(this.visualElement,this);const e=this.visualElement.current,i=Oi(e,"pointerdown",u=>{const{drag:c,dragListener:d=!0}=this.getProps(),h=u.target,m=h!==e&&Xy(h);c&&d&&!m&&this.start(u)});let n;const r=()=>{const{dragConstraints:u}=this.getProps();qt(u)&&u.current&&(this.constraints=this.resolveRefConstraints(),n||(n=hv(e,u.current,()=>this.scalePositionWithinConstraints())))},{projection:s}=this.visualElement,o=s.addEventListener("measure",r);s&&!s.layout&&(s.root&&s.root.updateScroll(),s.updateLayout()),G.read(r);const a=Zi(window,"resize",()=>this.scalePositionWithinConstraints()),l=s.addEventListener("didUpdate",(({delta:u,hasLayoutChanged:c})=>{this.isDragging&&c&&(Xe(d=>{const h=this.getAxisMotionValue(d);h&&(this.originPoint[d]+=u[d].translate,h.set(h.get()+u[d].translate))}),this.visualElement.render())}));return()=>{a(),i(),o(),l&&l(),n&&n()}}getProps(){const e=this.visualElement.getProps(),{drag:i=!1,dragDirectionLock:n=!1,dragPropagation:r=!1,dragConstraints:s=!1,dragElastic:o=cs,dragMomentum:a=!0}=e;return{...e,drag:i,dragDirectionLock:n,dragPropagation:r,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function sl(t){let e=!0;return()=>{if(e){e=!1;return}t()}}function hv(t,e,i){const n=da(t,sl(i)),r=da(e,sl(i));return()=>{n(),r()}}function ln(t,e,i){return(e===!0||e===t)&&(i===null||i===t)}function fv(t,e=10){let i=null;return Math.abs(t.y)>e?i="y":Math.abs(t.x)>e&&(i="x"),i}class pv extends bt{constructor(e){super(e),this.removeGroupControls=ze,this.removeListeners=ze,this.controls=new dv(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||ze}update(){const{dragControls:e}=this.node.getProps(),{dragControls:i}=this.node.prevProps||{};e!==i&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const Tr=t=>(e,i)=>{t&&G.update(()=>t(e,i),!1,!0)};class mv extends bt{constructor(){super(...arguments),this.removePointerDownListener=ze}onPointerDown(e){this.session=new fd(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:hd(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:i,onPan:n,onPanEnd:r}=this.node.getProps();return{onSessionStart:Tr(e),onStart:Tr(i),onMove:Tr(n),onEnd:(s,o)=>{delete this.session,r&&G.postRender(()=>r(s,o))}}}mount(){this.removePointerDownListener=Oi(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let Sr=!1;class gv extends T.Component{componentDidMount(){const{visualElement:e,layoutGroup:i,switchLayoutGroup:n,layoutId:r}=this.props,{projection:s}=e;s&&(i.group&&i.group.add(s),n&&n.register&&r&&n.register(s),Sr&&s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),bn.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:i,visualElement:n,drag:r,isPresent:s}=this.props,{projection:o}=n;return o&&(o.isPresent=s,e.layoutDependency!==i&&o.setOptions({...o.options,layoutDependency:i}),Sr=!0,r||e.layoutDependency!==i||i===void 0||e.isPresent!==s?o.willUpdate():this.safeToRemove(),e.isPresent!==s&&(s?o.promote():o.relegate()||G.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:e,layoutAnchor:i}=this.props,{projection:n}=e;n&&(n.options.layoutAnchor=i,n.root.didUpdate(),ao.postRender(()=>{!n.currentAnimation&&n.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:i,switchLayoutGroup:n}=this.props,{projection:r}=e;Sr=!0,r&&(r.scheduleCheckAfterUnmount(),i&&i.group&&i.group.remove(r),n&&n.deregister&&n.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function md(t){const[e,i]=nd(),n=T.useContext(Ns);return f.jsx(gv,{...t,layoutGroup:n,switchLayoutGroup:T.useContext(ud),isPresent:e,safeToRemove:i})}const yv={pan:{Feature:mv},drag:{Feature:pv,ProjectionNode:id,MeasureLayout:md}};function ol(t,e,i){const{props:n}=t;t.animationState&&n.whileHover&&t.animationState.setActive("whileHover",i==="Start");const r="onHover"+i,s=n[r];s&&G.postRender(()=>s(e,en(e)))}class xv extends bt{mount(){const{current:e}=this.node;e&&(this.unmount=Uy(e,(i,n)=>(ol(this.node,n,"Start"),r=>ol(this.node,r,"End"))))}unmount(){}}class vv extends bt{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=qi(Zi(this.node.current,"focus",()=>this.onFocus()),Zi(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function al(t,e,i){const{props:n}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&n.whileTap&&t.animationState.setActive("whileTap",i==="Start");const r="onTap"+(i==="End"?"":i),s=n[r];s&&G.postRender(()=>s(e,en(e)))}class wv extends bt{mount(){const{current:e}=this.node;if(!e)return;const{globalTapTarget:i,propagate:n}=this.node.props;this.unmount=Yy(e,(r,s)=>(al(this.node,s,"Start"),(o,{success:a})=>al(this.node,o,a?"End":"Cancel")),{useGlobalTarget:i,stopPropagation:n?.tap===!1})}unmount(){}}const us=new WeakMap,kr=new WeakMap,bv=t=>{const e=us.get(t.target);e&&e(t)},_v=t=>{t.forEach(bv)};function Av({root:t,...e}){const i=t||document;kr.has(i)||kr.set(i,{});const n=kr.get(i),r=JSON.stringify(e);return n[r]||(n[r]=new IntersectionObserver(_v,{root:t,...e})),n[r]}function Tv(t,e,i){const n=Av(e);return us.set(t,i),n.observe(t),()=>{us.delete(t),n.unobserve(t)}}const Sv={some:0,all:1};class kv extends bt{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.stopObserver?.();const{viewport:e={}}=this.node.getProps(),{root:i,margin:n,amount:r="some",once:s}=e,o={root:i?i.current:void 0,rootMargin:n,threshold:typeof r=="number"?r:Sv[r]},a=l=>{const{isIntersecting:u}=l;if(this.isInView===u||(this.isInView=u,s&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:c,onViewportLeave:d}=this.node.getProps(),h=u?c:d;h&&h(l)};this.stopObserver=Tv(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:i}=this.node;["amount","margin","root"].some(Pv(e,i))&&this.startObserver()}unmount(){this.stopObserver?.(),this.hasEnteredView=!1,this.isInView=!1}}function Pv({viewport:t={}},{viewport:e={}}={}){return i=>t[i]!==e[i]}const Cv={inView:{Feature:kv},tap:{Feature:wv},focus:{Feature:vv},hover:{Feature:xv}},jv={layout:{ProjectionNode:id,MeasureLayout:md}},Mv={...J1,...Cv,...yv,...jv},wi=Z1(Mv,K1);function gd(){!fo.current&&Du();const[t]=T.useState(On.current);return t}const ds=new Set,Pr=new Map,Rv=1400,Ge=[.22,1,.36,1];let hs=!1;const Dv=1;function Ev(){return typeof window>"u"?!1:["localhost","127.0.0.1","::1"].includes(window.location.hostname)}function vo(t,e=0){if(ds.has(t))return Promise.resolve(!0);const i=e===0?Pr.get(t):void 0;if(i)return i;const n=new Promise(r=>{const s=new Image;s.decoding="async";let o=!1;const a=l=>{o||(o=!0,l&&ds.add(t),e===0&&Pr.delete(t),r(l))};s.onload=async()=>{if(typeof s.decode=="function")try{await s.decode()}catch{a(!1);return}a(!0)},s.onerror=()=>{if(e<Dv){vo(t,e+1).then(a);return}a(!1)},s.src=t,s.complete&&Promise.resolve().then(async()=>{if(typeof s.decode=="function")try{await s.decode()}catch{a(!1);return}a(!0)})});return e===0&&Pr.set(t,n),n}function mw(t){const e=t.map(i=>vo(i.src));return Promise.all(e).catch(()=>{}),Promise.resolve()}async function yd(t){const e=t.map(n=>vo(n.src));return(await Promise.all(e)).every(Boolean)}async function ll(t){const e=performance.now(),i=await yd(t);return{duration:performance.now()-e,allDecoded:i}}async function Lv(t,e=Rv,i){if(typeof window>"u")return!0;const n=i?.lockSessionOnFailure??!0;if(Ev()){const{allDecoded:a}=await ll(t);return a}if(n&&hs)return!1;const r=ll(t),s=new Promise(a=>{window.setTimeout(()=>a(!1),e)}),o=await Promise.race([r.then(({duration:a,allDecoded:l})=>l&&a<=e),s]);return!o&&n&&(hs=!0),o}const cl=P(wi.div)`
  position: fixed;
  inset: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
`,Vv=P(wi.div)`
  position: absolute;
  inset: 0;
  background: ${({$overlayColor:t})=>t};
`;P(wi.div)`
  position: fixed;
  inset: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.85);
`;const Ov=P(wi.div)`
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  background: white;
`,ul=P(wi.img)`
  display: block;
  position: absolute;
  overflow: hidden;
  border-radius: 0.75rem;
  object-fit: cover;
  object-position: var(--card-object-position, center center);
  border: 1px solid rgba(255, 255, 255, 0.2);
  backface-visibility: hidden;
  contain: paint;
  will-change: transform, opacity;
  transform-origin: bottom center;
`;function Iv({images:t,isActive:e,onComplete:i,layoutId:n,sharedSourceImageSrc:r,isReverse:s=!1,overlayColor:o="black",loadingBackgroundColor:a="rgba(0, 0, 0, 0.85)"}){const l=gd(),[u,c]=T.useState(!1),[d,h]=T.useState(!1),m=T.useRef(!1),g=T.useRef(i);T.useEffect(()=>{g.current=i},[i]),T.useEffect(()=>{m.current=!1},[e,t,s]);const p=()=>{m.current||(m.current=!0,g.current())};T.useEffect(()=>{if(!e||!u||!d||s)return;const A=setTimeout(()=>{p()},l?400:2450);return()=>clearTimeout(A)},[e,u,d,s,l]),t.length!==5&&console.warn(`CaseStudyTransition expects exactly 5 images, got ${t.length}`);const[y,v]=T.useState(window.innerWidth<768);T.useEffect(()=>{const S=()=>{v(window.innerWidth<768)};return window.addEventListener("resize",S),()=>window.removeEventListener("resize",S)},[]);const w=y?[-6,-3,0,3,6]:[-12,-6,0,6,12],x=y?["-7.5%","-3.75%","0","3.75%","7.5%"]:["-15%","-7%","0","7%","15%"],b=y?"85vw":"55vw",_=y?"400px":"700px",j=r?t.findIndex(S=>S.src===r):-1;return T.useEffect(()=>{if(!e){c(!1),h(!1);return}if(t.every(A=>ds.has(A.src))){c(!0);return}let S=!1;return c(!1),yd(t).catch(()=>!1).then(A=>{if(!S){if(A){c(!0);return}hs=!0,p()}}),()=>{S=!0}},[e,t]),T.useEffect(()=>{if(!e||!u){h(!1);return}let S=0,A=0;return S=window.requestAnimationFrame(()=>{A=window.requestAnimationFrame(()=>{h(!0)})}),()=>{window.cancelAnimationFrame(S),window.cancelAnimationFrame(A)}},[e,u]),T.useEffect(()=>{if(e){const S=window.innerWidth-document.documentElement.clientWidth;return document.body.style.overflow="hidden",document.body.style.paddingRight=`${S}px`,()=>{document.body.style.overflow="",document.body.style.paddingRight=""}}},[e]),T.useEffect(()=>{if(!e)return;const S=A=>{(A.key==="Escape"||A.key==="Esc")&&(A.preventDefault(),p())};return window.addEventListener("keydown",S,!0),()=>window.removeEventListener("keydown",S,!0)},[e]),l?f.jsx(Za,{children:e&&u&&d&&f.jsx(cl,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.4},onAnimationComplete:p,children:t.map((S,A)=>f.jsx(ul,{src:S.src,alt:S.alt,decoding:"sync",fetchPriority:"high",style:{"--card-object-position":S.objectPosition||"center center",width:b,maxWidth:_,aspectRatio:"3 / 2",zIndex:10+A},initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.4}},S.src))})}):e&&(!u||!d)?f.jsx(wi.div,{style:{position:"fixed",inset:0,zIndex:50,display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:a},initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},children:f.jsx(Ov,{animate:{scale:[1,1.2,1],opacity:[.5,1,.5]},transition:{duration:1.2,repeat:1/0}})}):f.jsx(Za,{children:e&&u&&d&&f.jsxs(cl,{initial:{opacity:1},animate:{opacity:1},exit:{opacity:0},transition:{duration:0},children:[f.jsx(Vv,{$overlayColor:o,initial:{opacity:.85},animate:{opacity:s?0:.85},exit:{opacity:0},transition:{opacity:{duration:s?1.5:2.5,ease:"easeInOut"}}}),t.map((S,A)=>{const k=s?{opacity:[1,1,0],scale:[1,1,.8],y:[-20,0,60],rotate:[w[A],0,0],x:[x[A],0,0]}:{opacity:[1,1,1,1],scale:[.8,1,1,1],y:[60,0,-20,0],rotate:[0,0,w[A],0],x:[0,0,x[A],0]},C=s?{opacity:{times:[0,.4,1],duration:1.5,ease:Ge},scale:{times:[0,.4,1],duration:1.5,ease:Ge},y:{times:[0,.4,1],duration:1.5,ease:Ge},rotate:{times:[0,.4,1],duration:1.5,ease:Ge},x:{times:[0,.4,1],duration:1.5,ease:Ge}}:{opacity:{times:[0,.17,.58,1],duration:2.4,ease:Ge},scale:{times:[0,.17,.58,1],duration:2.4,ease:Ge},y:{times:[0,.17,.58,1],duration:2.4,ease:Ge},rotate:{times:[0,.17,.58,1],duration:2.4,ease:Ge},x:{times:[0,.17,.58,1],duration:2.4,ease:Ge}};return f.jsx(ul,{src:S.src,alt:S.alt,decoding:"sync",fetchPriority:"high",style:{"--card-object-position":S.objectPosition||"center center",width:b,maxWidth:_,aspectRatio:"3 / 2",zIndex:10+A},layoutId:A===j?n:void 0,loading:"eager",initial:{opacity:s?1:0,scale:s?1:.8,y:s?-20:60,rotate:s?w[A]:0,x:s?x[A]:0},animate:k,transition:C,onAnimationComplete:()=>{s&&A===4&&p()}},S.src)})]})})}const zv=""+new URL("Piton—Screens-BH4faZaC.jpg",import.meta.url).href,Fv=P.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${({$background:t})=>t};
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: 10;
  clip-path: inset(0% 0% 0% 0%);
`,Bv=P.h1`
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
`,Uv=P.div`
  position: relative;
  z-index: 60;
`,Nv=P.span`
  display: inline-block;
  overflow: hidden;
  vertical-align: top;
`,Wv=P.span`
  display: inline-block;
  will-change: transform, opacity;
  opacity: 0;
`,Gv=P.div`
  position: absolute;
  right: clamp(18px, 2.8vw, 40px);
  bottom: clamp(18px, 2.8vw, 40px);
  z-index: 60;
  color: ${({$color:t})=>t};
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(0.9rem, 1.35vw, 1.2rem);
  letter-spacing: 0.08em;
`,Xv=[{src:"/assets/HP.png",alt:"Microsoft shopping ecosystem preview",objectPosition:"top center"},{src:bs,alt:"Leysi project preview"},{src:_s,alt:"ThreePillars project preview"},{src:zv,alt:"Piton project preview"},{src:As,alt:"Outsource project preview"}];function Hv(t){const e=[...t];for(let i=e.length-1;i>0;i-=1){const n=Math.floor(Math.random()*(i+1));[e[i],e[n]]=[e[n],e[i]]}return e}function Yv(){if(typeof window>"u"||typeof navigator>"u")return!1;const t=window.matchMedia?.("(hover: none) and (pointer: coarse)").matches??!1,e=navigator.userAgent,i=/iPhone|iPad|iPod/i.test(e),n=/Safari/i.test(e)&&/Mobile/i.test(e)&&!/CriOS|Chrome|FxiOS|EdgiOS/i.test(e);return t&&(i||n)}function Zv(){const t="ZACHARY MACTAVISH.",e="#ffffff",[i,n]=T.useState("000%"),[r,s]=T.useState(!0),[o]=T.useState(()=>Hv(Xv)),[a,l]=T.useState(!1),[u,c]=T.useState(!1),d=T.useRef(null),h=T.useRef([]),m=gd(),g=a,p=e,y="#111111";T.useEffect(()=>{let w=!1;return Yv()?(c(!1),l(!0),()=>{w=!0}):(Lv(o,void 0,{lockSessionOnFailure:!1}).then(x=>{w||(c(x),l(!0))}).catch(()=>{w||(c(!1),l(!0))}),()=>{w=!0})},[o]),T.useEffect(()=>{if(!r)return;const w=document.body.style.overflow,x=document.body.style.paddingRight,b=window.innerWidth-document.documentElement.clientWidth;return document.body.style.overflow="hidden",b>0&&(document.body.style.paddingRight=`${b}px`),()=>{document.body.style.overflow=w,document.body.style.paddingRight=x}},[r]),T.useLayoutEffect(()=>{if(!r||!g)return;if(m){n("100%"),s(!1);return}const w=h.current.filter(Boolean),x={value:0};hn.set(w,{yPercent:110,autoAlpha:0}),hn.set(d.current,{clipPath:"inset(0% 0% 0% 0%)"});const b=hn.timeline({onComplete:()=>{s(!1),window.dispatchEvent(new Event("intro-animation-done"))}});return b.to(x,{value:100,duration:2.5,ease:"power2.inOut",onUpdate:()=>{n(`${String(Math.round(x.value)).padStart(3,"0")}%`)}}),b.to(w,{yPercent:0,autoAlpha:1,duration:.8,stagger:.04,ease:"power3.out"},"-=2"),b.to(d.current,{clipPath:"inset(0% 0% 100% 0%)",duration:.8,ease:"power4.inOut"}),()=>{b.kill()}},[r,m,g]);const v=()=>{};return f.jsxs(f.Fragment,{children:[f.jsx(El,{introDone:!r}),r&&f.jsxs(Fv,{ref:d,$background:p,style:{backgroundColor:p,position:"fixed",inset:0},children:[!g&&f.jsx("div",{style:{position:"absolute",inset:0,background:p,zIndex:1}}),u&&g&&f.jsx(Iv,{images:o,isActive:r,onComplete:v,overlayColor:e,loadingBackgroundColor:e}),g&&f.jsx(Uv,{children:f.jsx(Bv,{"aria-label":t,children:Array.from(t).map((w,x)=>f.jsx(Nv,{children:f.jsx(Wv,{ref:b=>{h.current[x]=b},children:w===" "?" ":w})},`intro-char-${x}`))})}),f.jsx(Gv,{$color:y,children:i})]})]})}const Kv=T.lazy(()=>Ee(()=>import("./Resume-CpMtkWBz.js"),__vite__mapDeps([3,1,2]),import.meta.url)),$v=T.lazy(()=>Ee(()=>Promise.resolve().then(()=>Jf),void 0,import.meta.url)),qv=T.lazy(()=>Ee(()=>Promise.resolve().then(()=>wf),void 0,import.meta.url)),Qv=T.lazy(()=>Ee(()=>import("./Graphicdesign-11DH-lWD.js"),__vite__mapDeps([4,1,2]),import.meta.url)),Jv=T.lazy(()=>Ee(()=>import("./Outsource-CqbrtY9b.js"),__vite__mapDeps([5,1,2]),import.meta.url)),ew=T.lazy(()=>Ee(()=>import("./UX-CoVCvBHB.js"),__vite__mapDeps([6,1,2]),import.meta.url)),tw=T.lazy(()=>Ee(()=>import("./ThreePillars-ivTZcT5K.js"),__vite__mapDeps([7,1,2]),import.meta.url)),iw=T.lazy(()=>Ee(()=>import("./Piton-GPuWxldr.js"),__vite__mapDeps([8,1,2,6]),import.meta.url)),nw=T.lazy(()=>Ee(()=>import("./Microsoft-DG_uwPsS.js"),__vite__mapDeps([9,1,2,10]),import.meta.url)),rw=T.lazy(()=>Ee(()=>import("./BusinessConnectors-CqrK1u8f.js"),__vite__mapDeps([11,1,2,12,10]),import.meta.url)),sw=T.lazy(()=>Ee(()=>import("./CopilotPay-DkIx2zsg.js"),__vite__mapDeps([13,1,2,12,10]),import.meta.url)),ow=T.lazy(()=>Ee(()=>import("./Journeys-CDplj6wd.js"),__vite__mapDeps([14,1,2,12,10]),import.meta.url));function aw(){const[t,e]=T.useState("light"),[i,n]=T.useState(!1),[r,s]=T.useState(!1),o=T.useRef(null),a=T.useRef(null);T.useEffect(()=>{const c=d=>{const h=d.target;h instanceof HTMLElement&&(h.tagName==="INPUT"||h.tagName==="TEXTAREA"||h.tagName==="SELECT"||h.isContentEditable)||((d.key==="?"||d.key==="/"&&d.shiftKey)&&(d.preventDefault(),n(!0)),d.key==="Escape"&&n(!1))};return window.addEventListener("keydown",c),()=>window.removeEventListener("keydown",c)},[]),T.useEffect(()=>{if(!i)return;a.current=document.activeElement;const c=document.body.style.overflow,d=document.body.style.paddingRight,h=window.innerWidth-document.documentElement.clientWidth;h>0&&(document.body.style.paddingRight=`${h}px`),document.body.style.overflow="hidden";const m=window.setTimeout(()=>{o.current?.focus()},0);return()=>{window.clearTimeout(m),document.body.style.overflow=c,document.body.style.paddingRight=d,a.current instanceof HTMLElement&&a.current.getAttribute("data-carousel-frame")!=="true"&&a.current.focus()}},[i]);const l=()=>{n(!1)},u=c=>{if(c.key==="Escape"){c.preventDefault(),l();return}if(c.key!=="Tab")return;const d=o.current;if(!d)return;const h=d.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');if(h.length===0){c.preventDefault(),d.focus();return}const m=h[0],g=h[h.length-1];if(c.shiftKey&&document.activeElement===m){c.preventDefault(),g.focus();return}!c.shiftKey&&document.activeElement===g&&(c.preventDefault(),m.focus())};return T.useEffect(()=>{function c(){s(!0)}return window.addEventListener("intro-animation-done",c),()=>window.removeEventListener("intro-animation-done",c)},[]),f.jsxs(wd,{theme:t==="light"?$n:qn,children:[f.jsx(kd,{}),f.jsxs("div",{className:"App",children:[f.jsxs(bd,{children:[f.jsx(jd,{}),f.jsx(Zd,{}),r&&f.jsx("button",{type:"button",className:"shortcuts-pill",onClick:()=>n(!0),"aria-label":"Open keyboard shortcuts help",children:"? Shortcuts"}),i&&f.jsx("div",{role:"presentation",onClick:l,style:{position:"fixed",inset:0,zIndex:120,background:"rgba(0, 0, 0, 0.55)",display:"grid",placeItems:"center",padding:"1.25rem"},children:f.jsxs("div",{ref:o,role:"dialog","aria-modal":"true","aria-labelledby":"keyboard-shortcuts-title","aria-describedby":"keyboard-shortcuts-description",tabIndex:-1,onClick:c=>c.stopPropagation(),onKeyDown:u,style:{width:"min(520px, 100%)",background:"#ffffff",color:"#111827",borderRadius:"14px",border:"1px solid #e5e7eb",boxShadow:"0 30px 80px rgba(0, 0, 0, 0.35)",padding:"1.2rem 1.2rem 1rem"},children:[f.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"1rem"},children:[f.jsx("h2",{id:"keyboard-shortcuts-title",style:{margin:0,fontSize:"1.05rem",fontWeight:700},children:"Keyboard Shortcuts"}),f.jsx("button",{type:"button",onClick:l,"aria-label":"Close keyboard shortcuts help",style:{border:"1px solid #d1d5db",background:"#ffffff",borderRadius:"8px",padding:"0.25rem 0.5rem",cursor:"pointer"},children:"Esc"})]}),f.jsx("p",{id:"keyboard-shortcuts-description",style:{margin:"0.75rem 0 1rem",color:"#4b5563",fontSize:"0.92rem"},children:"Use these shortcuts to navigate transitions and media quickly."}),f.jsxs("ul",{style:{listStyle:"none",margin:0,padding:0,display:"grid",gap:"0.6rem"},children:[f.jsxs("li",{style:{display:"flex",justifyContent:"space-between",gap:"1rem"},children:[f.jsx("strong",{children:"? "}),f.jsx("span",{children:"Open this help panel"})]}),f.jsxs("li",{style:{display:"flex",justifyContent:"space-between",gap:"1rem"},children:[f.jsx("strong",{children:"Esc"}),f.jsx("span",{children:"Skip case study transition animation"})]}),f.jsxs("li",{style:{display:"flex",justifyContent:"space-between",gap:"1rem"},children:[f.jsx("strong",{children:"Esc"}),f.jsx("span",{children:"Close this panel"})]}),f.jsxs("li",{style:{display:"flex",justifyContent:"space-between",gap:"1rem"},children:[f.jsx("strong",{children:"← / →"}),f.jsx("span",{children:"Navigate image carousel slides"})]})]})]})}),f.jsx(T.Suspense,{fallback:f.jsx("div",{style:{position:"fixed",inset:0,zIndex:100,background:t==="light"?$n.backgroundColor:qn.backgroundColor,color:t==="light"?$n.fontColor:qn.fontColor,display:"grid",placeItems:"center",fontFamily:"Space Grotesk, sans-serif",letterSpacing:"0.04em"},children:"Loading…"}),children:f.jsxs(_d,{children:[f.jsx(pe,{path:"/",element:f.jsx(Zv,{})}),f.jsx(pe,{path:"/MacTavish",element:f.jsx(hl,{fallback:f.jsx("div",{style:{color:"red",padding:"2rem",textAlign:"center"},children:"Sorry, something went wrong loading the landing page."}),children:f.jsx(El,{})})}),f.jsx(pe,{path:"/Giga",element:f.jsx(qv,{})}),f.jsx(pe,{path:"/AccessDirect",element:f.jsx($v,{})}),f.jsx(pe,{path:"/Outsource",element:f.jsx(Jv,{})}),f.jsx(pe,{path:"/GraphicDesign",element:f.jsx(Qv,{})}),f.jsx(pe,{path:"/Ux",element:f.jsx(ew,{})}),f.jsx(pe,{path:"/ThreePillars",element:f.jsx(tw,{})}),f.jsx(pe,{path:"/Piton",element:f.jsx(iw,{})}),f.jsx(pe,{path:"/Microsoft",element:f.jsx(nw,{})}),f.jsx(pe,{path:"/BusinessConnectors",element:f.jsx(rw,{})}),f.jsx(pe,{path:"/CopilotPay",element:f.jsx(sw,{})}),f.jsx(pe,{path:"/Journeys",element:f.jsx(ow,{})}),f.jsx(pe,{path:"/Resume",element:f.jsx(Kv,{})}),f.jsx(pe,{path:"*",element:f.jsx(Ad,{to:"/",replace:!0})})]})})]}),!1]})]})}xd.createRoot(document.getElementById("root")).render(f.jsx(T.StrictMode,{children:f.jsx(aw,{})}));export{mw as A,Lv as B,ff as C,ws as D,ps as E,fw as F,hw as G,Iv as H,Bp as I,ms as J,Ep as K,Ws as L,gi as M,go as N,Su as O,yf as P,gd as Q,Se as R,vs as S,li as T,cw as __vite_legacy_guard,ci as a,ai as b,Lt as c,oe as d,$f as e,gl as f,ys as g,xs as h,tt as i,it as j,nt as k,Al as l,_l as m,As as n,_s as o,se as p,bl as q,wl as r,Ue as s,pp as t,fp as u,hp as v,zv as w,df as x,bs as y,wi as z};
