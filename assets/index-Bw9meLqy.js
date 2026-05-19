const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./three-Cragz5qr.js","./three-CIqbc5c4.js","./vendor-hQudadcW.js","./Resume-CNIiSYCM.js","./Graphicdesign-DW_P372S.js","./Outsource-DZrm9_Yy.js","./UX-BdOoC4Uw.js","./ThreePillars-sdMFmdaD.js","./Piton-nDPZeETC.js","./Microsoft-B3vPWr0b.js","./caseStudies-CBR6CWpU.js","./BusinessConnectors-BQ-O5odx.js","./CaseStudyPage-DRxPoNbD.js","./CopilotPay-B_9RazvV.js","./Journeys-BPxOyGhP.js"])))=>i.map(i=>d[i]);
import'data:text/javascript,"assets/index-Bw9meLqy.js";if(!import.meta.resolve)throw Error("import.meta.resolve not supported")';import{j as f,_ as Et,c as nd}from"./three-CIqbc5c4.js";import{u as zn,c as C,b as S,l as Ue,d as rd,R as de,L as Xi,K as sd,H as od,e as ad,f as pt,N as ld}from"./vendor-hQudadcW.js";function Cv(){import.meta.url,import("_").catch(()=>1),(async function*(){})().next()}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function i(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=i(r);fetch(r.href,s)}})();const Pi={fonts:{body:"Space Grotesk, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",heading:"Space Grotesk, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",mono:'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'},fontSizes:{xs:"0.75rem",sm:"0.875rem",md:"1rem",lg:"1.125rem",xl:"1.25rem",h3:"1.15rem",h2:"clamp(1.4rem, 3vw, 2rem)",h1:"clamp(2rem, 6vw, 4.8rem)"},lineHeights:{tight:1.1,snug:1.2,normal:1.5,relaxed:1.7},spacing:{xs:"4px",sm:"8px",md:"12px",lg:"16px",xl:"24px","2xl":"32px","3xl":"48px"},radii:{none:"0",sm:"6px",md:"10px",lg:"16px",xl:"18px",pill:"999px",round:"50%",card:"18px"}},cd={backgroundColor:"#3F4739",backgroundTwo:"#ffffff",fontColor:"#5D5D5D"},ud={backgroundColor:"#303030",backgroundTwo:"#303030",fontColor:"#a1a1a1"},Hn={...Pi,...cd},Kn={...Pi,...ud},dd=zn`
    :root {
        --radius-card: ${Pi.radii.card};
        --space-lg: ${Pi.spacing.lg};
    }
    * { box-sizing: border-box; }
    html, body, #root { min-height: 100%; }
    body {
        margin: 0;
        background-color: ${e=>e.theme.backgroundColor};
        color: ${e=>e.theme.fontColor};
        font-family: ${Pi.fonts.body};
    }
`,hd=zn`
  html, body, * { cursor: none !important; }
  .hide-cursor, .hide-cursor * { cursor: none !important; }
  [data-agentation], [data-agentation] *, #feedback-toolbar, #feedback-toolbar * { cursor: auto !important; }
`,fd=C.div`
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
`,pd=()=>{const[e,t]=S.useState(!1),i=S.useRef(null),n=S.useRef(!1),r=S.useRef(1),s=S.useRef({x:0,y:0});S.useRef({x:0,y:0});const o=S.useRef(!1),a=S.useRef(null);return S.useEffect(()=>{const l=window.matchMedia("(pointer: fine)").matches;if(/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)&&!l){t(!1);return}if(l){t(!0);return}const c=d=>{(d.sourceCapabilities&&!d.sourceCapabilities.firesTouchEvents||d.movementX!==0||d.movementY!==0)&&(t(!0),window.removeEventListener("mousemove",c))};return window.addEventListener("mousemove",c),()=>window.removeEventListener("mousemove",c)},[]),S.useEffect(()=>{if(!e)return;const l=25,u=25,c='a, button, input, textarea, select, [role="link"], [role="button"], [data-cursor="link"], [data-route], [data-routes-to], .nav-link, .router-link, .link, .btn';let d=null;const h=v=>{v&&v.closest&&!!v.closest(c)?(d&&(clearTimeout(d),d=null),n.current||(n.current=!0,i.current&&i.current.classList.add("hovered"))):n.current&&!d&&(d=setTimeout(()=>{d=null,n.current=!1,i.current&&i.current.classList.remove("hovered")},60))},m=v=>{if(!i.current)return;const w=v.clientX-l,x=v.clientY-u;s.current.x=w,s.current.y=x,o.current||(o.current=!0,i.current.classList.add("visible")),h(v.target),i.current.style.transform=`translate3d(${w}px, ${x}px, 0) scale(${r.current})`},g=()=>{i.current&&i.current.classList.remove("visible"),o.current=!1},p=()=>{document.visibilityState==="hidden"?g():o.current=!1},y=()=>{if(i.current&&o.current){const v=n.current?.3:1,w=v-r.current;r.current=Math.abs(w)<.01?v:r.current+w*.55,i.current.style.transform=`translate3d(${s.current.x}px, ${s.current.y}px, 0) scale(${r.current})`}a.current=requestAnimationFrame(y)};return document.addEventListener("mousemove",m),document.addEventListener("mouseleave",g),document.addEventListener("visibilitychange",p),a.current=requestAnimationFrame(y),()=>{document.removeEventListener("mousemove",m),document.removeEventListener("mouseleave",g),document.removeEventListener("visibilitychange",p),a.current&&cancelAnimationFrame(a.current),d&&clearTimeout(d)}},[e]),f.jsxs(f.Fragment,{children:[e&&f.jsx(hd,{}),e&&f.jsx(fd,{ref:i})]})},md="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2025.4.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%20236.2%20238.3'%20style='enable-background:new%200%200%20236.2%20238.3;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%23FFFFFF;}%20.st1{fill:%23678983;}%20.st2{fill:%2395C4BC;}%20%3c/style%3e%3cpath%20class='st0'%20d='M236,124.2c-0.1-0.2-0.2-0.4-0.4-0.5L236,124.2L236,124.2z'/%3e%3cpath%20class='st1'%20d='M208.3,93c0.7-0.8,1.8-1.1,2.8-1c3.1,0.4,6,1.5,8.6,3.1c2.6,1.5,4.9,3.4,6.9,5.7c1.8,2.1,2.6,3.8,2.5,5%20c-0.1,0.9-0.4,1.7-0.8,2.5c-0.4,0.8-0.9,1.1-1.5,1c-0.7-0.1-1.4-0.4-2.1-0.8c-0.3-0.2-1.2-0.6-2.6-1.4c-1.7-0.9-3.5-1.6-5.3-2.1%20c-2.3-0.7-4.7-1.2-7.2-1.5c-2.4-0.3-3.4-2.1-3-5.4l0.2-1.6C206.9,95.3,207.4,94,208.3,93z'/%3e%3cpath%20class='st2'%20d='M176.6,117.4c-1.7,0.9-3.9,0.3-4.8-1.4c-0.9-1.7-0.3-3.9,1.4-4.8c0,0,0.1-0.1,0.1-0.1%20c6.8-3.5,14.3-5.7,21.9-6.4l6.5-41.1c0.9-5.5,1.7-11.2,0.9-16.7c-0.8-5.6-3.6-11.1-8.6-13.8c-4.9-2.7-10.9-2.2-15.8,0.1%20s-8.9,6.4-12.2,10.8c-20,26.3-19.4,48.4-28.4,94.2h-5.2c0-0.3,0.1-0.6,0.1-0.9l13.1-81.7c1.1-6.7,2.1-13.5,0.9-20.1%20c-1.2-6.6-5.2-13.2-11.5-15.6c-5.7-2.2-12.4-0.6-17.4,3s-8.7,8.7-11.7,14C99.3,48.2,95,60.6,91.8,73.4c0.2-22.7-4.4-40.6-13.8-53.5%20C70.3,9.2,58.5,2.1,45.4,0.4h-0.3C24.5-2.4,5.6,12.1,2.8,32.8s11.7,39.6,32.4,42.3c18.1,2.4,35.4-8.5,40.9-26%20c-0.5-2.1-1.2-4.3-2-6.3c-4.6-11.7-13.8-21.1-25.3-26c-1.8-0.8-2.6-3-1.7-4.7c0.8-1.7,2.8-2.5,4.5-1.8c19,8.1,30.8,25.9,32.7,46.2%20c1.4,14.8,0,30.4-2.1,45c-1.1,7.6-2.6,15.1-4.3,22.6c-0.4,2-6.1,21.7-5.6,22c3.5,1.9,6.9,4.1,10.1,6.6c1.6,1.2,1.8,3.5,0.6,5%20c-1.2,1.6-3.5,1.8-5,0.6l0,0c-23.6-18.3-49.2-15.5-66.9,7.2c-17.4,22.4-14,54.5,7.7,72.8l55.3-20.7c0.6-0.4,1.2-0.9,1.7-1.3%20c5.4-4.8,6.9-12.5,8.1-19.7l17.1-103c0.4-2.2,0.8-4.5,2.2-6.2c1.4-1.7,4.1-2.6,5.9-1.3c1.8,1.3,1.7,4.1,1.4,6.4L95.2,209%20c12.7-3.9,25.2-8.2,37.5-13c3.4-1.3,6.8-2.7,9.3-5.4c3-3.3,3.9-8,4.7-12.4l14.4-83.1c0.2-1.9,0.8-3.8,1.9-5.4%20c1.2-1.5,3.5-2.3,5.1-1.3c1.8,1.2,1.7,3.8,1.5,6l-7.7,60.9c-0.8,6.7-1.7,13.6-0.3,20.2c1.2,5.4,4.1,10.6,8.6,13.6%20c1,0.7,2.2,1.3,3.4,1.7c7.1,2.5,14.9-0.5,21.3-4.4c21.8-13.2,36.9-35.2,41.3-60.3c0-0.2,0.1-0.3,0.1-0.5%20C220.1,110.6,196.2,107.2,176.6,117.4z'/%3e%3c/svg%3e",gd=Ue`
  0% { transform: translateX(-40%) translateY(0); opacity: 1; }
  25% { transform: translateX(-35%) translateY(-5px); opacity: 0.9; }
  50% { transform: translateX(-30%) translateY(3px); opacity: 0.8; }
  75% { transform: translateX(-35%) translateY(-2px); opacity: 0.9; }
  100% { transform: translateX(-40%) translateY(0); opacity: 0.85; }
`,yd=Ue`
  0% { transform: translateX(140%) translateY(0); opacity: 1; }
  25% { transform: translateX(135%) translateY(4px); opacity: 0.95; }
  50% { transform: translateX(130%) translateY(-3px); opacity: 0.9; }
  75% { transform: translateX(135%) translateY(2px); opacity: 0.95; }
  100% { transform: translateX(140%) translateY(0); opacity: 0.9; }
`,il=C.span`
  position: absolute;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0,255,255,0.6) 0%, rgba(255,192,203,0.35) 60%, transparent 100%);
  filter: blur(70px);
  pointer-events: none;
  z-index: 997;
`,xd=C(il)`
  left: 0;
  animation: ${gd} 6s ease-in-out infinite;
`,vd=C(il)`
  right: 0;
  animation: ${yd} 6s ease-in-out infinite;
`,as=Ue`
  0% { transform: translateX(0); opacity: 1; }
  33% { transform: translateX(calc(100vw - 650px)); opacity: 1; }
  66% { transform: translateX(0); opacity: 1; }
  85% { transform: translateX(50vw); opacity: 0; }
  100% { transform: translateX(0); opacity: 0; }
`,wd=C.div`
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
`,bd=C.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 8px;
  pointer-events: none;
  overflow: visible;
`,_d=C.span`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 650px;
  height: 1pt;
  background-color: #E88D67;
  mask-image: linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%);
  -webkit-mask-image: linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%);
  animation: ${as} 10s ease-in-out forwards;
  z-index: 998;
`,Td=C.span`
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
  animation: ${as} 10s ease-in-out forwards;
  z-index: 999;
`,Sd=Ue`
  0% { background-position: 0% 0; }
  50% { background-position: 50% 0; }
  100% { background-position: 0% 0; }
`,kd=C.span`
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
  animation: ${as} 10s ease-in-out forwards;

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
    animation: ${Sd} 2s ease-in-out infinite;
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
`,Pd=C.img`
  width: clamp(46px, 2.6vw, 90px);
  max-height: 5vh;
  object-fit: contain;
  transition: all 0.3s ease;

  &:hover {
    filter: invert(0.2) sepia(0.5) saturate(11.7) hue-rotate(313.2deg) brightness(1.2);
  }
`,Cd=C.div`
  display: flex;
  align-items: stretch;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  padding-right: 6vw;
  max-width: calc(100vw - 6vw);
`,Ad=C.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2.5rem;
  height: 100%;

  @media (max-width: 1200px) { gap: 1.5rem; }
  @media (max-width: 800px) { gap: 1rem; font-size: 1rem; }
`,jd=C.span`
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
`,uo=C.li`
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
`,Md=C(Xi)`
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
`,Rd=C.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0,0,0,0.6);
  backdrop-filter: blur(6px);
  border-radius: 0 0 0.25rem 0.25rem;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  display: ${e=>e.$open?"block":"none"};
  min-width: 10rem; /* Increased from 8rem */
  z-index: 1200;
`,se=C(Xi)`
  display: block;
  padding: 0.75rem 1rem;
  color: white;
  text-decoration: none;
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    background-color: rgba(166, 209, 202, 0.4);
    color: white;
  }
`;C.div`
  height: 1px;
  background-color: rgba(255, 255, 255, 0.3);
  margin: 0.25rem 0;
`;function Dd(){const[e,t]=S.useState(!1),i=rd(),n=de.useRef();S.useEffect(()=>{t(!1)},[i.pathname]),S.useEffect(()=>{if(!e||!window.matchMedia("(hover: none) and (pointer: coarse)").matches)return;const o=()=>t(!1),a=l=>{n.current&&!n.current.contains(l.target)&&t(!1)};return window.addEventListener("scroll",o,{passive:!0}),document.addEventListener("mousedown",a),document.addEventListener("touchstart",a),()=>{window.removeEventListener("scroll",o),document.removeEventListener("mousedown",a),document.removeEventListener("touchstart",a)}},[e]);const r=()=>t(o=>!o),s=()=>t(!1);return f.jsxs(wd,{children:[f.jsx(Xi,{to:"/MacTavish",style:{cursor:"none"},children:f.jsx(Pd,{src:md})}),f.jsxs(Cd,{children:[f.jsxs(Ad,{children:[f.jsxs(uo,{children:[f.jsx(jd,{role:"presentation","aria-haspopup":"true","aria-expanded":e,style:{cursor:"default"},onClick:o=>{window.matchMedia("(hover: none)").matches?r():o.preventDefault()},children:"Projects"}),f.jsx("div",{style:{position:"absolute",left:"-20px",top:"0",width:"120px",height:"100%",background:"transparent",border:"none",pointerEvents:window.matchMedia&&window.matchMedia("(hover: none) and (pointer: coarse)").matches?"none":"auto",zIndex:1100}}),f.jsxs(Rd,{$open:e,ref:n,children:[f.jsx(se,{to:"/Microsoft",onClick:s,children:"Microsoft"}),f.jsx(se,{to:"/Outsource",onClick:s,children:"Outsource"}),f.jsx(se,{to:"/Ux",onClick:s,children:"Leysi"}),f.jsx(se,{to:"/Piton",onClick:s,children:"Piton"}),f.jsx(se,{to:"/ThreePillars",onClick:s,children:"Three Pillars"}),f.jsx(se,{to:"/AccessDirect",onClick:s,children:"Access Direct"}),f.jsx(se,{to:"/Giga",onClick:s,children:"Giga"}),f.jsx(se,{to:"/GraphicDesign",onClick:s,children:"Graphic Design"})]})]}),f.jsx(uo,{children:f.jsx(Md,{to:"/Resume",children:"Resume"})})]}),f.jsxs(bd,{children:[f.jsx(_d,{}),f.jsx(Td,{}),f.jsx(kd,{}),f.jsx(xd,{}),f.jsx(vd,{})]})]})]})}const ls=({title:e,description:t,url:i,image:n,images:r=null,type:s="website",authorName:o="Zack MacTavish",authorAlternateNames:a=["Zachary MacTavish"],sameAs:l=[],keywords:u=[],jsonLd:c=null,favicons:d=null,siteDefaults:h=null,siteName:m=null,locale:g=null,robots:p=null,themeColor:y=null,twitterSite:v=null,twitterCreator:w=null})=>(S.useEffect(()=>{e&&(document.title=e);const x=(D,I,Q)=>{let dt=document.querySelector(D);if(!dt){dt=document.createElement("meta");const Tt=D.match(/\[(name|property)=['"]([^'"]+)['"]\]/);Tt&&dt.setAttribute(Tt[1],Tt[2]),document.head.appendChild(dt)}dt.setAttribute(I,Q)};t&&(x("[name='description']","content",t),x("[property='og:description']","content",t),x("[name='twitter:description']","content",t)),u&&u.length&&x("[name='keywords']","content",Array.isArray(u)?u.join(", "):u),e&&(x("[property='og:title']","content",e),x("[name='twitter:title']","content",e)),x("[property='og:type']","content",s),i&&x("[property='og:url']","content",i);const b=m||h&&h.siteName||null,_=g||h&&h.locale||null,j=p||h&&h.robots||null,k=y||h&&h.themeColor||null,T=v||h&&h.twitterSite||null,P=w||h&&h.twitterCreator||null;b&&x("[property='og:site_name']","content",b),_&&x("[property='og:locale']","content",_),j&&x("[name='robots']","content",j),k&&x("[name='theme-color']","content",k),T&&x("[name='twitter:site']","content",T),P&&x("[name='twitter:creator']","content",P);const A=h&&h.ogImages||[],R=r||(n?[n]:null)||A,E=D=>{document.querySelectorAll(D).forEach(I=>I.remove())};E("meta[property='og:image']"),E("meta[property='og:image:width']"),E("meta[property='og:image:height']");let L=null;if(R&&R.length?R.forEach(D=>{let I=D;if(typeof D=="string"&&(I={url:D}),!I||!I.url)return;const Q=document.createElement("meta");if(Q.setAttribute("property","og:image"),Q.setAttribute("content",I.url),document.head.appendChild(Q),I.width){const dt=document.createElement("meta");dt.setAttribute("property","og:image:width"),dt.setAttribute("content",String(I.width)),document.head.appendChild(dt)}if(I.height){const dt=document.createElement("meta");dt.setAttribute("property","og:image:height"),dt.setAttribute("content",String(I.height)),document.head.appendChild(dt)}L||(L=I.url)}):n&&(x("[property='og:image']","content",n),L=n),L?(x("[name='twitter:image']","content",L),x("[name='twitter:card']","content","summary_large_image")):x("[name='twitter:card']","content","summary"),i){let D=document.querySelector("link[rel='canonical']");D||(D=document.createElement("link"),D.setAttribute("rel","canonical"),document.head.appendChild(D)),D.setAttribute("href",i)}const V="seo-json-ld";let O=document.getElementById(V);const z={"@context":"https://schema.org","@type":"Person",name:o,url:i||window.location.href};a&&a.length&&(z.alternateName=a.length===1?a[0]:a),l&&l.length&&(z.sameAs=l);let U=c||z;if(!c)U=z;else try{const D=c;(D["@type"]==="CreativeWork"||D["@type"]==="Article")&&!D.author&&(D.author={"@type":"Person",name:o,url:i||window.location.href},a&&a.length&&(D.author.alternateName=a.length===1?a[0]:a),l&&l.length&&(D.author.sameAs=l)),U=D}catch{U=c}if(O?O.text=JSON.stringify(U):(O=document.createElement("script"),O.id=V,O.type="application/ld+json",O.text=JSON.stringify(U),document.head.appendChild(O)),o||a&&a.length){const D=[o].concat(a||[]).filter(Boolean).join(", ");x("[name='author']","content",D)}l&&l.length&&x("[name='sameAs']","content",l.join(", "));const F=d||h&&h.favicons||null,X=D=>{document.querySelectorAll(`link[rel='${D}']`).forEach(I=>I.remove())};X("icon"),X("shortcut icon"),X("apple-touch-icon"),X("manifest"),F&&(Array.isArray(F)?F.forEach(D=>{const I=document.createElement("link");D.rel?I.setAttribute("rel",D.rel):I.setAttribute("rel",D.sizes==="180x180"?"apple-touch-icon":"icon"),D.sizes&&I.setAttribute("sizes",D.sizes),I.setAttribute("href",D.href),document.head.appendChild(I)}):Object.entries(F).forEach(([D,I])=>{const Q=document.createElement("link");D==="180x180"?Q.setAttribute("rel","apple-touch-icon"):Q.setAttribute("rel","icon"),Q.setAttribute("sizes",D),Q.setAttribute("href",I),document.head.appendChild(Q)}))},[e,t,i,n,s,o,a,l,u,c,d,h,m,g,p,y,v,w]),null);var ho={exports:{}},xi={},fo;function Ed(){if(fo)return xi;fo=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(n,r,s){var o=null;if(s!==void 0&&(o=""+s),r.key!==void 0&&(o=""+r.key),"key"in r){s={};for(var a in r)a!=="key"&&(s[a]=r[a])}else s=r;return r=s.ref,{$$typeof:e,type:n,key:o,ref:r!==void 0?r:null,props:s}}return xi.Fragment=t,xi.jsx=i,xi.jsxs=i,xi}var po;function Ld(){return po||(po=1,ho.exports=Ed()),ho.exports}var _e=Ld();zn`
  html, body, * { cursor: none !important; }
`;C.div`
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
`;const Vd=C.div`
  width: 60vw;
  max-width: 1100px;
  margin: 0 auto;
  box-sizing: border-box;

  @media (max-width: 1000px) {
    width: 92vw;
  }
`;C(Vd)`
  display: grid;
  grid-template-columns: ${e=>e.columns||"0.48fr 0.52fr"};
  gap: ${e=>e.gap||"2rem"};
  align-items: ${e=>e.align||"center"};

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;const Yn={fonts:{body:"Space Grotesk, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif"},spacing:{lg:"16px"},radii:{card:"18px"}};zn`
  :root {
    /* expose some common tokens as CSS vars for non-styled consumers */
    --radius-card: ${Yn.radii.card};
    --space-lg: ${Yn.spacing.lg};
  }
  * { box-sizing: border-box; }
  html, body, #root { height: 100%; }
  body {
    margin: 0;
    background-color: ${e=>e.theme.backgroundColor};
    color: ${e=>e.theme.fontColor};
    font-family: ${Yn.fonts.body};
  }
`;const Od=C.div`
  width: ${e=>e.$width||"62vw"};
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  gap: 2.2vw;
  align-items: center; /* Center text block vertically relative to image */
  padding: ${e=>e.theme?.spacing?.["3xl"]||"3rem"} 0;

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
  }
`,Id=C.div`
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
`,zd=C.img`
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
`,Fd=C.div`
  flex: 1 1 50%;
  font-family: 'Space Grotesk', sans-serif;
  font-size: ${e=>e.$textSize||"1.4rem"};
  color: ${e=>e.$textColor||"#fff"};
  line-height: 1.4;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  gap: 0.25em;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  min-width: 0;
  height: 100%;
  @media (max-width: 1000px) {
    font-size: 1.7rem;
    width: 92vw;
    margin: 0 auto;
    min-height: 40px;
  }
`;function Bd({imageSrc:e,imageAvif:t,imageWebp:i,imageAlt:n,children:r,imageWidth:s,columns:o,width:a,textSize:l,textColor:u,className:c,...d}){return _e.jsxs(Od,{$width:a,className:c,...d,children:[_e.jsx(Id,{children:_e.jsxs("picture",{children:[t&&_e.jsx("source",{srcSet:t,type:"image/avif"}),i&&_e.jsx("source",{srcSet:i,type:"image/webp"}),_e.jsx(zd,{src:e,alt:n})]})}),_e.jsx(Fd,{$textSize:l,$textColor:u,children:r})]})}const rt="https://mactavish.xyz",Ut={name:"Zack MacTavish",url:rt,defaultImage:`${rt}/assets/og/website-logoresolutions-1200x630.png`,sameAs:["https://dribbble.com/Zmactavish","https://www.instagram.com/zackmichaelmactavish","https://www.linkedin.com/in/zacharymactavish/","https://github.com/ZackMacTavish","https://medium.com/@zmactavish"],keywords:["product design","graphic design","UX","portfolio","Zack MacTavish"]},st={landing:{title:`${Ut.name} — Product & Graphic Designer`,description:"Product & graphic designer focused on brand, UX, and digital experiences. View work and contact.",url:`${rt}/`,image:Ut.defaultImage,keywords:["portfolio","home","design","Zack MacTavish"]},giga:{title:"Giga — UX/UI & Branding | Zack MacTavish",description:"Case study: Giga — UX/UI, branding, and product design by Zack MacTavish.",url:`${rt}/projects/giga`,image:`${rt}/assets/Giga—Macbookv2.png`,datePublished:"2024-10-01",keywords:["giga","product design","ux","branding"]},outsource:{title:"Outsource — UX/UI & Branding | Zack MacTavish",description:"Case study: Outsource — branding, websites and UX work by Zack MacTavish.",url:`${rt}/projects/outsource`,image:`${rt}/assets/Outsource—Macbook.png`,datePublished:"2023-08-01",keywords:["outsource","branding","ux"]},piton:{title:"Piton — Project | Zack MacTavish",description:"Case study: Piton — UX and visual design work by Zack MacTavish.",url:`${rt}/projects/piton`,image:`${rt}/assets/Piton—Screens.jpg`,datePublished:"2023-02-01",keywords:["piton","branding","app design"]},ux:{title:"UX — Product & UX Projects | Zack MacTavish",description:"Portfolio of UX and product design projects by Zack MacTavish.",url:`${rt}/projects/ux`,image:`${rt}/assets/Giga—mockup.jpg`,keywords:["ux","product design"]},"access-direct":{title:"Access Direct — UX & Brand | Zack MacTavish",description:"Case study: Access Direct — brand, UX and website built by Zack MacTavish.",url:`${rt}/projects/access-direct`,image:`${rt}/assets/AD—Macs.jpg`,datePublished:"2022-10-01",keywords:["access direct","ux","brand"]},"graphic-design":{title:"Graphic Design — Portfolio | Zack MacTavish",description:"Graphic design and art pieces by Zack MacTavish, including posters, packaging, and editorial work.",url:`${rt}/projects/graphic-design`,image:`${rt}/assets/Cover.png`,keywords:["graphic design","posters","packaging"]},threepillars:{title:"ThreePillars — UX & Branding | Zack MacTavish",description:"Case study: ThreePillars — brand and web app design by Zack MacTavish.",url:`${rt}/projects/threepillars`,image:`${rt}/assets/ThreePillars—Macbook.png`,keywords:["threepillars","branding","ux"]},microsoft:{title:"Microsoft — Project | Zack MacTavish",description:"Case study: Microsoft — UX and visual design work by Zack MacTavish. Password protected.",url:`${rt}/projects/microsoft`,image:Ut.defaultImage,keywords:["microsoft","branding","ux","password protected"]}},cs=C.div`
  width: 60vw;
  max-width: 1100px;
  margin: 0 auto;
  box-sizing: border-box;

  @media (max-width: 1000px) {
    width: 92vw;
  }
`,Mv=C(cs)`
  display: grid;
  grid-template-columns: ${e=>e.columns||"0.48fr 0.52fr"};
  gap: ${e=>e.gap||"2rem"};
  align-items: ${e=>e.align||"center"};

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`,nl=""+new URL("Me-BEhJ50qd.jpeg",import.meta.url).href,Ud=""+new URL("Me-C1cwp5zy.avif",import.meta.url).href,$d=""+new URL("Me-Rnuwi3im.webp",import.meta.url).href,Nd=""+new URL("hangingquilts-CSgyMA7c.jpg",import.meta.url).href,Gd=""+new URL("hangingquilts-4VrGTXBN.avif",import.meta.url).href,Wd=""+new URL("hangingquilts-DcA0AW0j.webp",import.meta.url).href;var rl={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},mo=de.createContext&&de.createContext(rl),Xd=["attr","size","title"];function Hd(e,t){if(e==null)return{};var i=Kd(e,t),n,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function Kd(e,t){if(e==null)return{};var i={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;i[n]=e[n]}return i}function vn(){return vn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},vn.apply(this,arguments)}function go(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),i.push.apply(i,n)}return i}function wn(e){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?arguments[t]:{};t%2?go(Object(i),!0).forEach(function(n){Yd(e,n,i[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):go(Object(i)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))})}return e}function Yd(e,t,i){return t=qd(t),t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function qd(e){var t=Zd(e,"string");return typeof t=="symbol"?t:t+""}function Zd(e,t){if(typeof e!="object"||!e)return e;var i=e[Symbol.toPrimitive];if(i!==void 0){var n=i.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function sl(e){return e&&e.map((t,i)=>de.createElement(t.tag,wn({key:i},t.attr),sl(t.child)))}function us(e){return t=>de.createElement(Jd,vn({attr:wn({},e.attr)},t),sl(e.child))}function Jd(e){var t=i=>{var{attr:n,size:r,title:s}=e,o=Hd(e,Xd),a=r||i.size||"1em",l;return i.className&&(l=i.className),e.className&&(l=(l?l+" ":"")+e.className),de.createElement("svg",vn({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},i.attr,n,o,{className:l,style:wn(wn({color:e.color||i.color},i.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&de.createElement("title",null,s),e.children)};return mo!==void 0?de.createElement(mo.Consumer,null,i=>t(i)):t(rl)}function Qd(e){return us({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"7",y1:"17",x2:"17",y2:"7"},child:[]},{tag:"polyline",attr:{points:"7 7 17 7 17 17"},child:[]}]})(e)}function Rv(e){return us({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"},child:[]},{tag:"polyline",attr:{points:"7 10 12 15 17 10"},child:[]},{tag:"line",attr:{x1:"12",y1:"15",x2:"12",y2:"3"},child:[]}]})(e)}function th(e){return us({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M7 11V7a5 5 0 0 1 10 0v4"},child:[]}]})(e)}const eh=C.div`
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
`;function Ji(e){if(!e)return e;try{return encodeURI(decodeURI(e))}catch{return encodeURI(e)}}const ih=C.div`
  width: 60vw;
  max-width: 1000px;
  min-width: 320px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 1vw;
  margin: 0 auto 4vh auto;
  padding-top: 6.5rem;
  @media (max-width: 1320px) {
    width: 90vw;
    max-width: 90vw;
  }
  @media (max-width: 850px) {
    flex-direction: column-reverse;
    width: 100vw;
    max-width: 100vw;
    gap: 2vh;
    padding: 5.5rem 2vw 0 2vw;
  }
`,nh=C.div`
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
`,rh=C.div`
  flex: 2 1 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  max-width: none;
  min-width: 0;
  min-height: 0;
  @media (max-width: 1000px) {
    justify-content: center;
    width: 100%;
    margin-bottom: 2rem;
  }
`,yo=C.img`
  width: 100%;
  max-width: 700px;
  min-width: 220px;
  height: auto;
  border-radius: 18px;
  /* Removed box-shadow and background for a flat look */
  object-fit: cover;
  display: block;
  @media (max-width: 1000px) {
    width: 90vw;
    max-width: 98vw;
    min-width: 0;
    margin: 0 auto;
  }
`,sh=C.h1`
  font-family: 'Space Grotesk', sans-serif;
  color: ${e=>e.theme.fontColor};
  margin: 0;
  font-size: clamp(2.2rem, 4vw + 0.6rem, 4.25rem);
  line-height: 0.96;
  text-wrap: balance;

  @media (max-width: 850px) {
    font-size: clamp(1.9rem, 8vw, 2.7rem);
    line-height: 1.02;
  }
`,oh=C.div`
  height: 1px;
  background: #e0e0e0;
  width: 48px;
  margin: 0.1em 0 0.3em 0;

  @media (max-width: 850px) {
    margin: 0 auto 0.2rem;
  }
`;function ol({title:e,imageBaseName:t,imageSrc:i,imageExt:n="png",imageAlt:r="",$imageWidth:s="38vw",buttons:o=[],divider:a=!0}){const l=t?`${t.startsWith("assets/")?"/":"/src/"}${t}`:null,u=l?Ji(`${l}.avif`):null,c=l?Ji(`${l}.webp`):null,d=l?Ji(`${l}.${n}`):null;return f.jsxs(ih,{children:[f.jsxs(nh,{children:[f.jsx(sh,{children:e}),a&&f.jsx(oh,{}),f.jsx(eh,{children:o.map(({href:h,label:m},g)=>f.jsxs(al,{href:h,target:"_blank",rel:"noopener noreferrer",children:[m," ",f.jsx(Qd,{style:{marginLeft:6,fontSize:"1.2em"}})]},g))})]}),f.jsx(rh,{children:t?f.jsxs("picture",{children:[f.jsx("source",{srcSet:u,type:"image/avif"}),f.jsx("source",{srcSet:c,type:"image/webp"}),f.jsx(yo,{src:d,alt:r,$imageWidth:s})]}):f.jsx(yo,{src:Ji(i),alt:r,$imageWidth:s})})]})}const ah=""+new URL("iphones—Mockup-Bvav94lR.avif",import.meta.url).href,lh=""+new URL("iphones—Mockup-BBerJEYg.webp",import.meta.url).href,ch=""+new URL("iphones—Mockup-huIJePT7.png",import.meta.url).href,uh=""+new URL("Giga—mockup-Cnh_KW7P.jpg",import.meta.url).href,dh=""+new URL("Messages—1920 x 1400-FBHNown_.png",import.meta.url).href,hh=""+new URL("Messages—1920 x 1400-Vn-3sQrl.avif",import.meta.url).href,fh=""+new URL("Messages—1920 x 1400-Df8RyXSi.webp",import.meta.url).href,ph=""+new URL("iMac_2-ByB4ft45.jpg",import.meta.url).href,mh=""+new URL("iPad2-7y6oKxfc.jpg",import.meta.url).href,gh=""+new URL("iPad2-CzLEDSAu.avif",import.meta.url).href,yh=""+new URL("iPad2-C6zybvis.webp",import.meta.url).href,xh=""+new URL("iPhone_2—Dark—Sq-CMwx-i__.jpg",import.meta.url).href,vh=""+new URL("iPhone_2—Dark—Sq-o8OVfniw.avif",import.meta.url).href,wh=""+new URL("iPhone_2—Dark—Sq-CN0kweFU.webp",import.meta.url).href,bh=""+new URL("LightPhone2—Sq-BQ4v3uUl.jpg",import.meta.url).href,_h=""+new URL("LightPhone2—Sq-BAf3JCmK.avif",import.meta.url).href,Th=""+new URL("LightPhone2—Sq-BILeUpsy.webp",import.meta.url).href,Sh=""+new URL("iMac-BBUHxs4x.jpg",import.meta.url).href,kh=""+new URL("iMac-D7y2uSFv.avif",import.meta.url).href,Ph=""+new URL("iMac-Cm5Zrfme.webp",import.meta.url).href,Ch=""+new URL("About-DuQLmo8y.png",import.meta.url).href,Ah=""+new URL("About-DLK3SCR5.avif",import.meta.url).href,jh=""+new URL("About-Cx6Nw1aR.webp",import.meta.url).href,Mh=""+new URL("Guides-CQbHOjad.jpg",import.meta.url).href,Rh=""+new URL("Guides-6vl73ahM.avif",import.meta.url).href,Dh=""+new URL("Guides-sAG3dRfa.webp",import.meta.url).href,Eh=""+new URL("CreateNewPost-CaFWZEze.png",import.meta.url).href,Lh=""+new URL("CreateNewPost-DFUk0sow.avif",import.meta.url).href,Vh=""+new URL("CreateNewPost-DIIwIC2x.webp",import.meta.url).href,al=C.a`
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
`,ds=C.div`
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
`,hs=C.div`
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
`,te=C.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`,ee=C.h3`
  color: ${e=>e.theme.fontColor};
  font-size: 2.25rem;
  margin: 0;

  @media (max-width: 1320px) {
    font-size: 2.1rem;
  }

  @media (max-width: 850px) {
    font-size: 1.8rem;
  }
`,ie=C.h6`
  color: ${e=>e.theme.fontColor};
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
`,Oh=C.img`
width: 60vw;
height: auto;
grid-row-start: ${e=>e.RowStart};
grid-row-end: 8;
align-self: center;
justify-self: center;
grid-column-start: ${e=>e.ColumnStart};
grid-column-end: ${e=>e.ColumnEnd};
@media (max-width: 850px) {
    grid-row-start: 2;
    grid-row-end: 3;
      grid-column-start: 1;
      width: 95vw;

  }
`,Ih=C.h3`
grid-column-start: 2;
grid-column-end: 4;
grid-row-start: 2;
grid-row-end: 7;
font-size: ${e=>e.Fontsize};
width: 80vw;
font-family: 'Space Grotesk', sans-serif;
justify-self: center;
align-self: center;
color: ${e=>e.theme.fontColor};

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
`,zh=C.img.attrs({loading:"lazy",decoding:"async"})`
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
`,Fh=C.div`
width: 100vw;
background-color: #2CA0FD;
grid-row-start: 4;
grid-row-end: 9;
z-index: -5;
`,fs=C.div`
background-color: ${e=>e.theme.backgroundTwo};
`,Bh=C.div`
display: flex;
width: 100vw;
height: auto;

@media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    height: auto;
}
`,Uh=C.div`
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
`,$h=C.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  max-width: 600px;

  @media (max-width: 1000px) {
    align-items: center;    /* centers the block horizontally */
    text-align: left;       /* keeps text left-aligned inside */
    margin-bottom: 2vh;     /* spacing below the text before image */
  }
`,Nh=C.img`
  width: ${e=>e.Width};
  height: auto;

  @media (max-width: 1000px) {
    width: 80vw; /* image slightly bigger on vertical stack */
  }
`,Gh=C.h2`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 4.5rem;
  color: ${e=>e.theme.fontColor};
  margin: 0;

  @media (max-width: 850px) {
    font-size: 3rem;
  }
`,Wh=C.a`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.4rem;
  color: ${e=>e.theme.fontColor};
  text-decoration: none;
  margin-top: 1vh;

  &:hover {
    opacity: 0.75;
  }
`;function Xh(){return S.useLayoutEffect(()=>{window.scrollTo(0,0)}),f.jsxs(fs,{children:[f.jsx(ls,{...st.giga,sameAs:Ut.sameAs,keywords:st.giga.keywords,jsonLd:{"@context":"https://schema.org","@type":"CreativeWork",headline:st.giga.title,description:st.giga.description,image:st.giga.image,author:{"@type":"Person",name:Ut.name,url:`${Ut.url}/about`},url:st.giga.url,datePublished:st.giga.datePublished,keywords:st.giga.keywords}}),f.jsx(ol,{title:"Giga",imageBaseName:"assets/Giga—Macbookv2",imageExt:"png",imageAlt:"Giga Macbook Mockup",imageWidth:"38vw",buttons:[{href:"https://gigaintelligence.com",label:"Visit Giga"}]}),f.jsx(ds,{children:f.jsxs(hs,{children:[f.jsxs(te,{children:[f.jsx(ee,{children:"Project Type"}),f.jsx(ie,{children:"UX/UI, Branding, Strategy"})]}),f.jsxs(te,{children:[f.jsx(ee,{children:"Digital Product"}),f.jsx(ie,{children:"Digital strategy platform used for data management, and private channel creation"})]}),f.jsxs(te,{children:[f.jsx(ee,{children:"My Role"}),f.jsx(ie,{children:"Responsible for researching, ideating, and generating ideas for a cohesive Giga experience. Designed and prototyped the Giga system & Web App"})]}),f.jsxs(te,{children:[f.jsx(ee,{children:"Timeframe"}),f.jsx(ie,{children:"1 1/2 years"})]})]})}),f.jsx(Le,{src:ah,webp:lh,fallback:ch,style:{width:"100vw",maxWidth:"100vw",height:"auto",objectFit:"cover",display:"block",margin:0,padding:0,borderRadius:0}}),f.jsx(oi,{style:{backgroundColor:"#ffffff"},children:f.jsx(si,{children:f.jsx(ri,{style:{color:"#5D5D5D"},children:"Giga is a startup focused on sharing experiences between its users. Through a robust data management system, users can share information and learn about their favorite subjects"})})}),f.jsx(Le,{src:uh}),f.jsx(kt,{children:f.jsx(ot,{src:dh,avif:hh,webp:fh})}),f.jsx(kt,{children:f.jsx(ot,{src:Eh,avif:Lh,webp:Vh})}),f.jsx(Le,{src:ph}),f.jsx(kt,{children:f.jsx(ot,{src:mh,avif:gh,webp:yh})}),f.jsx(ps,{srcLeft:xh,avifLeft:vh,webpLeft:wh,srcRight:bh,avifRight:_h,webpRight:Th}),f.jsx(kt,{children:f.jsx(ot,{src:Sh,avif:kh,webp:Ph})}),f.jsx(kt,{style:{paddingBottom:"7vh"},children:f.jsxs("div",{style:{width:"100%",display:"flex",justifyContent:"center"},children:[f.jsx(ot,{src:Ch,avif:Ah,webp:jh,style:{width:"60vw",maxWidth:"420px",minHeight:"auto",height:"auto",borderRadius:24,boxShadow:"0 2px 12px 0 rgba(0,0,0,0.06)"}}),f.jsx("style",{children:`
      @media (max-width: 850px) {
        .about-me-img {
          width: 96vw !important;
          max-width: 96vw !important;
          min-height: 60vw !important;
          border-radius: 0 !important;
        }
      }
    `})]})}),f.jsx(kt,{style:{justifyContent:"center"},children:f.jsx(ot,{src:Mh,avif:Rh,webp:Dh})}),f.jsx(oi,{style:{backgroundColor:"black"},children:f.jsx(si,{children:f.jsxs(ri,{style:{color:"white",textAlign:"center"},children:["Founder — Rich Devlin",f.jsx("br",{}),"Lead Designer — Zachary MacTavish",f.jsx("br",{}),"Front-End Development — Xing Yi & Joel Fernando",f.jsx("br",{}),"Back-End Development — Rich Devlin"]})})})]})}const Hh=Object.freeze(Object.defineProperty({__proto__:null,BackgroundColor:Fh,Cellphones:Bh,GigaRocket:Oh,ProjectBlock:te,ProjectButton:al,ProjectContent:$h,ProjectDetails:hs,ProjectDetailsContainer:ds,ProjectGrid:Uh,ProjectHeader:ee,ProjectImage:Nh,ProjectLink:Wh,ProjectSubtitle:ie,ProjectTitle:Gh,RisoItemtwo:zh,StyledDiv:fs,TextSection:Ih,default:Xh},Symbol.toStringTag,{value:"Module"})),Kh=""+new URL("Highpower-CRTc0nnX.jpg",import.meta.url).href,Yh=""+new URL("Highpower-CsvHkKEI.avif",import.meta.url).href,qh=""+new URL("Highpower-boH7bfqj.webp",import.meta.url).href,Zh=""+new URL("AD—iphones-Ds9NHmDv.jpg",import.meta.url).href,Jh=""+new URL("AD—iphones-BiYAAO7N.avif",import.meta.url).href,Qh=""+new URL("AD—iphones-DGO6M8H3.webp",import.meta.url).href,tf=""+new URL("AD—pages-DKeMWlEm.jpg",import.meta.url).href,ef=""+new URL("AD—pages-BS_f5aWS.avif",import.meta.url).href,nf=""+new URL("AD—pages-sKiLGjS1.webp",import.meta.url).href,rf=""+new URL("AD—Macs-C-BI5_ml.jpg",import.meta.url).href,sf=""+new URL("AD—Macs-CXf9hZaT.avif",import.meta.url).href,of=""+new URL("AD—Macs--XjCyU3R.webp",import.meta.url).href,af=""+new URL("AD-ipad-7WzgOi0E.jpg",import.meta.url).href,lf=""+new URL("AD-ipad-CUp8F2b6.avif",import.meta.url).href,cf=""+new URL("AD-ipad-B7-837tt.webp",import.meta.url).href,uf=""+new URL("ADiPhone_2—Dark-BP_0B_M9.jpg",import.meta.url).href,df=""+new URL("ADLightPhone2-C7enY0US.jpg",import.meta.url).href,hf=""+new URL("ADiMac-Bsrxdz-Q.png",import.meta.url).href,ff=""+new URL("ADiMac-DlvZlRIn.avif",import.meta.url).href,pf=""+new URL("ADiMac-CKTwTd3P.webp",import.meta.url).href,mf=""+new URL("Group 375-vcp1kghj.png",import.meta.url).href,gf=""+new URL("Group 375-mZsO1BcE.avif",import.meta.url).href,yf=""+new URL("Group 375-TF0Alkqk.webp",import.meta.url).href,xf=""+new URL("Guides2-C--leQ0V.png",import.meta.url).href,vf=""+new URL("Guides2-DiNUbQbr.avif",import.meta.url).href,wf=""+new URL("Guides2-DIlDKfWv.webp",import.meta.url).href,bf=""+new URL("Group 274-k1yUScXs.png",import.meta.url).href,_f=""+new URL("Group 274-CN_qORPC.avif",import.meta.url).href,Tf=""+new URL("Group 274-CPP1pgPP.webp",import.meta.url).href,ti=e=>{if(!e)return e;try{return encodeURI(decodeURI(e))}catch{return encodeURI(e)}},Le=({src:e,avif:t,webp:i,alt:n="",style:r={}})=>{typeof e=="string"&&e.split("/").pop().replace(/\.[^.]+$/,"");const s=ti(e),o=ti(t),a=ti(i);return f.jsxs("picture",{children:[o&&f.jsx("source",{srcSet:o,type:"image/avif"}),a&&f.jsx("source",{srcSet:a,type:"image/webp"}),f.jsx("img",{src:s,alt:n,style:{width:"100vw",height:"auto",margin:"3vh auto",display:"block",backgroundColor:"white",...r},loading:"lazy",decoding:"async"})]})},Sf=C.div`
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
`,ri=C.p`
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
`,si=C.div`
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
`,oi=C.section`
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
    min-height: 70vh; /* similar perceived size on mobile */
    padding: 8vh 4vw; /* maintain visual balance on small screens */
  }
`,ot=({src:e,avif:t,webp:i,alt:n="",width:r="60vw",style:s={},responsive:o=!0,loading:a="lazy",decoding:l="async"})=>{typeof e=="string"&&e.split("/").pop().replace(/\.[^.]+$/,"");const u=ti(e),c=ti(t),d=ti(i),h={width:r,maxWidth:"1000px",height:"auto",display:"block",borderRadius:"24px",boxShadow:"0 2px 12px 0 rgba(0,0,0,0.06)",...s};return f.jsxs("picture",{children:[c&&f.jsx("source",{srcSet:c,type:"image/avif"}),d&&f.jsx("source",{srcSet:d,type:"image/webp"}),o&&f.jsx("style",{children:".single-image-responsive { @media (max-width: 1320px) { width: 90vw !important; max-width: 90vw !important; } @media (max-width: 850px) { width: 100vw !important; max-width: 100vw !important; border-radius: 0 !important; } }"}),f.jsx("img",{src:u,alt:n,className:o?"single-image-responsive":void 0,style:h,loading:a,decoding:l})]})},kt=C.div`
  display: flex;
  justify-content: center;
  background-color: ${e=>e.theme.backgroundTwo};
  align-items: center;
  height: auto;
  padding: 3vh 0;
  width: 100vw;
`,kf=C.div`
  display: grid;
  grid-template-columns: ${e=>e.ColumnsSet};
  grid-template-rows: ${e=>e.RowsSet};
  background-color: ${e=>e.theme.backgroundTwo};
  height: 100vh;
  width: 100vw;

  @media (max-width: 500px) {
      grid-template-columns: 100vw;
      height: auto;
      padding-top: 2vh;
      padding-bottom: 2vh;
      grid-template-rows: auto 1fr auto ;
  }
`,ps=({srcLeft:e,srcRight:t,altLeft:i="",altRight:n="",styleLeft:r={},styleRight:s={}})=>f.jsxs("div",{style:{display:"flex",width:"100vw",height:"auto",flexWrap:"wrap",margin:0,padding:0},children:[f.jsx("img",{src:e,alt:i,style:{width:"50vw",height:"auto",display:"block",borderRadius:0,boxShadow:"none",margin:0,padding:0,...r},loading:"lazy",decoding:"async"}),f.jsx("img",{src:t,alt:n,style:{width:"50vw",height:"auto",display:"block",borderRadius:0,boxShadow:"none",margin:0,padding:0,...s},loading:"lazy",decoding:"async"})]});function Pf(){return S.useEffect(()=>{window.scrollTo(0,0)},[]),f.jsxs(fs,{children:[f.jsx(ls,{...st["access-direct"],sameAs:Ut.sameAs,keywords:st["access-direct"].keywords,jsonLd:{"@context":"https://schema.org","@type":"CreativeWork",headline:st["access-direct"].title,description:st["access-direct"].description,image:st["access-direct"].image,author:{"@type":"Person",name:Ut.name,url:`${Ut.url}/about`},url:st["access-direct"].url,datePublished:st["access-direct"].datePublished,keywords:st["access-direct"].keywords}}),f.jsx(ol,{title:"Access Direct",imageBaseName:"assets/AD—Macbook",imageExt:"png",imageAlt:"Access Direct Macbook Mockup",imageWidth:"38vw",buttons:[{href:"https://access-direct.net",label:"Visit Access Direct"}]}),f.jsx(ds,{children:f.jsxs(hs,{children:[f.jsxs(te,{children:[f.jsx(ee,{children:"Project Type"}),f.jsx(ie,{children:"UX/UI, Branding, Strategy, Front-end development"})]}),f.jsxs(te,{children:[f.jsx(ee,{children:"Product"}),f.jsx(ie,{children:"Brand identity, print materials, and a website built with React.js"})]}),f.jsxs(te,{children:[f.jsx(ee,{children:"My Role"}),f.jsx(ie,{children:"Responsible for tidying up the brand logo, colors, creating print materials for tradeshows, social media, digital brochures and flyers, and building the company website"})]}),f.jsxs(te,{children:[f.jsx(ee,{children:"Timeframe"}),f.jsx(ie,{children:"4 years (Part-time)"})]})]})}),f.jsx(Le,{src:Zh,avif:Jh,webp:Qh,style:{backgroundColor:"white",width:"100vw",maxWidth:"100vw",height:"auto",objectFit:"cover",display:"block",margin:0,padding:0,borderRadius:0}}),f.jsx(oi,{style:{backgroundColor:"white"},children:f.jsx(si,{children:f.jsx(ri,{style:{color:"#5d5d5d"},children:"Access Direct is a company focused on security solutions. I collaborated closely on the project, working on their brand identity, logos, and website. I served as the UI Designer and Webmaster, redesigning the site and building it using React.js."})})}),f.jsx(Le,{src:tf,avif:ef,webp:nf,style:{backgroundColor:"white",width:"100vw",maxWidth:"100vw",borderRadius:0,margin:"0 auto"}}),f.jsx(kt,{children:f.jsx(ot,{src:Kh,avif:Yh,webp:qh})}),f.jsx(kt,{children:f.jsx(ot,{src:bf,avif:_f,webp:Tf})}),f.jsx(Le,{src:rf,avif:sf,webp:of,style:{backgroundColor:"white",width:"100vw",maxWidth:"100vw",borderRadius:0,margin:"0 auto"}}),f.jsx(kt,{children:f.jsx(ot,{src:af,avif:lf,webp:cf})}),f.jsx(ps,{srcLeft:uf,srcRight:df,altLeft:"AD iPhone 2 Dark",altRight:"AD Light Phone 2",styleLeft:{},styleRight:{}}),f.jsx(kt,{children:f.jsx(ot,{src:hf,avif:ff,webp:pf})}),f.jsx(kt,{children:f.jsx(ot,{src:mf,avif:gf,webp:yf})}),f.jsx(kt,{children:f.jsx(ot,{src:xf,avif:vf,webp:wf})}),f.jsx(oi,{style:{backgroundColor:"black"},children:f.jsx(si,{children:f.jsxs(ri,{style:{color:"white",textAlign:"center"},children:["Founder — David Smith",f.jsx("br",{}),"Lead Designer — Zachary MacTavish",f.jsx("br",{}),"Website Development — Zachary MacTavish",f.jsx("br",{}),"Content Direction — Wendy Majewski, Alek Vasic"]})})})]})}const Cf=Object.freeze(Object.defineProperty({__proto__:null,DoubleImage:ps,FullBg:Le,FullHeightTextSection:oi,ParagraphFour:Sf,RisoFlex:kt,SingleGrid:kf,SingleImage:ot,TextContainer:si,TextContent:ri,default:Pf},Symbol.toStringTag,{value:"Module"})),ll=""+new URL("LeysiApp—Screens copy-BaSGok0d.jpg",import.meta.url).href,Af=""+new URL("LeysiApp—Screens copy-DyDGGxMx.avif",import.meta.url).href,jf=""+new URL("LeysiApp—Screens copy-Bn1_GwZn.webp",import.meta.url).href,cl=""+new URL("ThreePillars—pages-HOFvvO-e.jpg",import.meta.url).href,Mf=""+new URL("ThreePillars—pages-qf8SA0OC.avif",import.meta.url).href,Rf=""+new URL("ThreePillars—pages-DaWfehtu.webp",import.meta.url).href,Df=""+new URL("Group 55618@2x-BcOmtPnh.png",import.meta.url).href,Ef=""+new URL("Group 55618@2x-CX4oNLta.avif",import.meta.url).href,Lf=""+new URL("Group 55618@2x-BM0PHBLp.webp",import.meta.url).href,ul=""+new URL("BrandGuidelines—Mockup-ChTa7oCn.jpg",import.meta.url).href,Vf=""+new URL("BrandGuidelines—Mockup-DB0KQvec.avif",import.meta.url).href,Of=""+new URL("BrandGuidelines—Mockup-CdO6X1p5.webp",import.meta.url).href,If=""+new URL("iphones—Mockup copy-BrqRRBeO.png",import.meta.url).href,zf=""+new URL("iphones—Mockup copy-CKCSpVv0.avif",import.meta.url).href,Ff=""+new URL("iphones—Mockup copy-R29mjgfV.webp",import.meta.url).href,dl="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2025.4.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2084.5%2048'%20style='enable-background:new%200%200%2084.5%2048;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%23A6D1CA;}%20%3c/style%3e%3cg%3e%3cpath%20class='st0'%20d='M23.8,0C37,0,47.7,10.7,47.7,24S37,48,23.8,48S0,37.2,0,24S10.7,0,23.8,0z%20M61.9,1.4%20c6.6,0,11.9,10.1,11.9,22.6h0c0,12.5-5.3,22.6-11.9,22.6S50,36.5,50,24S55.3,1.4,61.9,1.4z%20M80.3,3.8c2.3,0,4.2,9.1,4.2,20.2%20c0,11.2-1.9,20.2-4.2,20.2s-4.2-9.1-4.2-20.2S78,3.8,80.3,3.8z'/%3e%3c/g%3e%3c/svg%3e",Bf=""+new URL("Card1-3--mHPQ8.webp",import.meta.url).href,Uf=""+new URL("Card2-DkNuGfII.webp",import.meta.url).href,$f=""+new URL("Card3-DFuv6FGk.webp",import.meta.url).href,Nf=""+new URL("Card4-1NFXU0cZ.webp",import.meta.url).href,Gf=""+new URL("Card5-BWd32u-m.webp",import.meta.url).href,Wf=""+new URL("Card6-Dy8ZNgWu.png",import.meta.url).href,Xf="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2025.4.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2084.5%2084.5'%20style='enable-background:new%200%200%2084.5%2084.5;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%23A6D1CA;}%20%3c/style%3e%3cpath%20class='st0'%20d='M42.3,0C19,0,0,19,0,42.3s19,42.3,42.3,42.3s42.3-19,42.3-42.3S65.6,0,42.3,0z%20M42.3,7c8.9,0,17,3.4,23.2,8.8%20c-0.7,0.9-1.6,2-3,3.4c-3,2.9-7.8,6.4-15.2,9.1c-5-9.2-9.9-16.1-13.1-20.5C36.8,7.3,39.5,7,42.3,7z%20M27.3,10.3%20c2.9,3.8,8,10.8,13.2,20.1C26.2,34.3,13,34.8,7.8,34.8C10.2,23.9,17.5,14.9,27.3,10.3z%20M70.3,21c4.3,5.7,7,12.7,7.2,20.4%20c-3.1-0.7-7.8-1.4-13.8-1.4c-3.1,0-6.7,0.2-10.5,0.7c-0.9-2-1.8-3.9-2.8-5.8c7.9-3,13.3-7,16.8-10.5C68.6,23.1,69.5,22.1,70.3,21z%20M43.7,36.9c0.8,1.6,1.6,3.3,2.4,5.1c-15.1,4.2-25.9,16.9-30.5,23.3C10.3,59.1,7,51.1,7,42.3c0-0.2,0-0.3,0-0.4%20C11.8,41.9,26.9,41.5,43.7,36.9z%20M63.7,46.9c6.3,0,10.6,0.9,13.2,1.5c-1.6,9.4-6.9,17.4-14.4,22.7c-1.4-8.4-3.7-16.4-6.5-23.8%20C58.8,47.1,61.4,46.9,63.7,46.9z%20M48.9,48.5c3.2,8,5.8,16.9,7.2,26.2c-4.2,1.8-8.9,2.8-13.8,2.8c-8.1,0-15.5-2.7-21.5-7.3%20C24.4,65.3,35.1,52.1,48.9,48.5z'/%3e%3c/svg%3e",Hf="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2025.4.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2083.7%2083.7'%20style='enable-background:new%200%200%2083.7%2083.7;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%23A6D1CA;}%20%3c/style%3e%3cpath%20class='st0'%20d='M41.9,0C18.8,0,0,18.8,0,41.9s18.8,41.9,41.9,41.9s41.9-18.8,41.9-41.9S64.9,0,41.9,0z%20M41.9,6.3%20c19.7,0,35.6,15.9,35.6,35.6c0,16-10.6,29.6-25.1,34V65.2c0-4-2.3-7.4-5.6-9.1c11.2-2.2,18.2-11.2,15.5-20.2c-0.5-1.8-1.4-3.5-2.7-5%20c0.9-2.9,2-7.9-0.5-11.8c-4.8,0-7.8,3.3-9.3,5.3c-2.5-0.8-5.2-1.2-7.9-1.3c-2.7,0-5.4,0.4-7.9,1.2c-1.5-2-4.5-5.3-9.3-5.3%20c-2.8,4.5-1.1,9.4-0.1,11.4c-6.5,7.7-4,18.1,5.6,23.3c2.1,1.1,4.4,1.9,6.9,2.4c-2.7,1.4-4.8,4-5.4,7.1h-2.8c-2.7,0-3.8-1.1-5.2-3%20c-1.4-1.9-3-3.1-4.9-3.6c-1-0.1-1.7,0.7-0.8,1.3c3,2,3.2,5.3,4.4,7.5c1.1,2,3.3,3.7,5.8,3.7h3.3v6.8c-14.6-4.5-25.1-18-25.1-34%20C6.3,22.2,22.2,6.3,41.9,6.3z'/%3e%3c/svg%3e",Kf="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2025.4.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2081.2%2081.2'%20style='enable-background:new%200%200%2081.2%2081.2;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%23A6D1CA;}%20%3c/style%3e%3cpath%20class='st0'%20d='M22.6,0C10.1,0,0,10.1,0,22.6v36.1c0,12.4,10.1,22.6,22.6,22.6h36.1c12.4,0,22.6-10.1,22.6-22.6V22.6%20C81.2,10.1,71.1,0,58.6,0H22.6z%20M22.6,9h36.1c7.5,0,13.5,6.1,13.5,13.5v36.1c0,7.5-6.1,13.5-13.5,13.5H22.6C15.1,72.2,9,66.1,9,58.6%20V22.6C9,15.1,15.1,9,22.6,9z%20M63.1,13.5c-2.5,0-4.5,2-4.5,4.5s2,4.5,4.5,4.5c2.5,0,4.5-2,4.5-4.5S65.6,13.5,63.1,13.5z%20M40.6,18%20C28.2,18,18,28.2,18,40.6s10.1,22.6,22.6,22.6S63.1,53,63.1,40.6S53,18,40.6,18z%20M40.6,27.1c7.5,0,13.5,6.1,13.5,13.5%20s-6.1,13.5-13.5,13.5s-13.5-6.1-13.5-13.5S33.1,27.1,40.6,27.1z'/%3e%3c/svg%3e",Yf="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2025.4.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2079.1%2079.1'%20style='enable-background:new%200%200%2079.1%2079.1;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%23A6D1CA;}%20%3c/style%3e%3cpath%20class='st0'%20d='M12.1,0C5.5,0,0,5.5,0,12.1V67c0,6.6,5.5,12.1,12.1,12.1H67c6.6,0,12.1-5.5,12.1-12.1V12.1%20C79.1,5.5,73.7,0,67,0H12.1z%20M12.1,6.6H67c3.1,0,5.5,2.4,5.5,5.5V67c0,3.1-2.4,5.5-5.5,5.5H12.1c-3.1,0-5.5-2.4-5.5-5.5V12.1%20C6.6,9,9,6.6,12.1,6.6z%20M20.9,15.4c-3,0-5.5,2.5-5.5,5.5s2.5,5.5,5.5,5.5s5.5-2.5,5.5-5.5S23.9,15.4,20.9,15.4z%20M17.6,30.8%20c-1.2,0-2.2,1-2.2,2.2v28.6c0,1.2,1,2.2,2.2,2.2h6.6c1.2,0,2.2-1,2.2-2.2V33c0-1.2-1-2.2-2.2-2.2H17.6z%20M33,30.8%20c-1.2,0-2.2,1-2.2,2.2v28.6c0,1.2,1,2.2,2.2,2.2h6.6c1.2,0,2.2-1,2.2-2.2V45.1c0-3,2.5-5.5,5.5-5.5c3,0,5.5,2.5,5.5,5.5v16.5%20c0,1.2,1,2.2,2.2,2.2h6.6c1.2,0,2.2-1,2.2-2.2V44c0-7.3-5.9-13.2-13.2-13.2c-3.4,0-6.5,1.3-8.8,3.4V33c0-1.2-1-2.2-2.2-2.2H33z'/%3e%3c/svg%3e",Me=C.span`
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
`,vi=C.a`
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: 4px;
  &:hover ${Me}, &:focus ${Me} {
    visibility: visible;
    opacity: 1;
  }
`,qf=C.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1vw;
  
  @media (max-width: 450px) { 
    max-width: 320px;
    justify-content: flex-start;
    gap: 3vw;
  }


`,wi=C.img`
  width: clamp(44px, 2vw, 70px);
  transition: all 1s ease;
  display: block;

  &:hover {
    filter: invert(0.2) sepia(0.5) saturate(11.7) hue-rotate(313.2deg) brightness(1.2);
  }
`;function Zf(){return f.jsxs(qf,{children:[f.jsxs(vi,{href:"https://dribbble.com/Zmactavish",target:"_blank",rel:"noreferrer","aria-label":"Dribbble",children:[f.jsx(wi,{src:Xf}),f.jsx(Me,{children:"Dribbble"})]}),f.jsxs(vi,{href:"https://www.instagram.com/zackmichaelmactavish",target:"_blank",rel:"noreferrer","aria-label":"Instagram",children:[f.jsx(wi,{src:Kf}),f.jsx(Me,{children:"Instagram"})]}),f.jsxs(vi,{href:"https://www.linkedin.com/in/zacharymactavish/",target:"_blank",rel:"noreferrer","aria-label":"LinkedIn",children:[f.jsx(wi,{src:Yf}),f.jsx(Me,{children:"LinkedIn"})]}),f.jsxs(vi,{href:"https://github.com/ZackMacTavish",target:"_blank",rel:"noreferrer","aria-label":"Github",children:[f.jsx(wi,{src:Hf}),f.jsx(Me,{children:"Github"})]}),f.jsxs(vi,{href:"https://medium.com/@zmactavish",target:"_blank",rel:"noreferrer","aria-label":"Medium",children:[f.jsx(wi,{src:dl}),f.jsx(Me,{children:"Medium"})]})]})}const Jf=C.section`
  width: 100vw;
  background: white;
  padding: 14vh 5vw;
  box-sizing: border-box;
`,Qf=C(cs)``,tp=C.h2`
  margin: 0 0 2rem;
  font-family: "Space Grotesk", sans-serif;
  font-size: clamp(1.4rem, 3vw, 2rem);
  color: #111;
`,ep=C.div`
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
`,ip=C.div`
  display: flex;
  flex-direction: column;
`,Pe=C(Xi)`
  position: relative;
  display: block;
  width: 100%;
  aspect-ratio: 16/10;
  border-radius: ${e=>e.theme.radii.card};
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  background-color: #f5f5f5;
  text-decoration: none;
  transition: transform 180ms ease, box-shadow 180ms ease;

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px rgba(25, 118, 210, 0.45);
  }
`,hl=C.div`
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  filter: saturate(0.9);
  transition: filter 180ms ease;
`,He=C.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.15));
  transition: background 180ms ease;
`,np=C.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  pointer-events: none;
  color: #111;
`,Ne=C.div.attrs({"data-cursor":"link",role:"link"})`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 0.75rem;
`,Ce=C.h3`
  margin: 0;
  font-family: "Space Grotesk", sans-serif;
  font-weight: 600;
  font-size: 1.15rem;
  color: #111;
  transition: color 160ms ease;
`,Ge=C.p`
  margin: 0;
  font-family: "Space Grotesk", sans-serif;
  font-size: 0.95rem;
  color: #5d5d5d;
`,We=C(ip)`
  &:hover ${Pe} {
    transform: translateY(-3px);
    box-shadow: 0 10px 36px rgba(0, 0, 0, 0.12);
  }

  &:hover ${hl} {
    filter: saturate(1.08) brightness(1.05);
  }

  &:hover ${He} {
    background: linear-gradient(to top, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.08));
  }

  &:hover ${Ce} {
    color: ${e=>e.theme.backgroundColor};
  }
`;function rp(){return f.jsx(Jf,{children:f.jsxs(Qf,{children:[f.jsx(tp,{children:"My projects"}),f.jsxs(ep,{children:[f.jsxs(We,{children:[f.jsxs(Pe,{to:"/Microsoft","aria-label":"Microsoft project",children:[f.jsx(hl,{style:{backgroundImage:"url('/assets/HP.png')",filter:"saturate(0.9) blur(2px)",transform:"scale(1.03)"}}),f.jsx("div",{style:{position:"absolute",inset:0,background:"rgba(255,255,255,0.7)"}}),f.jsx(np,{children:f.jsx(th,{size:48})})]}),f.jsxs(Ne,{children:[f.jsx(Ce,{children:"Microsoft"}),f.jsx(Ge,{children:"Shopping ecosystem across Bing, Copilot, Windows, Outlook"})]})]}),f.jsxs(We,{children:[f.jsxs(Pe,{to:"/Ux","aria-label":"Leysi project",children:[f.jsx(ot,{src:ll,avif:Af,webp:jf,alt:"Leysi project tile",width:"100%",responsive:!1,style:{position:"absolute",inset:0,height:"100%",objectFit:"cover",zIndex:0,borderRadius:0,boxShadow:"none"}}),f.jsx(He,{})]}),f.jsxs(Ne,{children:[f.jsx(Ce,{children:"Leysi"}),f.jsx(Ge,{children:"Brand identity and iOS app for campus deals"})]})]}),f.jsxs(We,{children:[f.jsxs(Pe,{to:"/ThreePillars","aria-label":"Three Pillars project",children:[f.jsx(ot,{src:cl,avif:Mf,webp:Rf,alt:"Three Pillars project tile",width:"100%",responsive:!1,style:{position:"absolute",inset:0,height:"100%",objectFit:"cover",zIndex:0,borderRadius:0,boxShadow:"none"}}),f.jsx(He,{})]}),f.jsxs(Ne,{children:[f.jsx(Ce,{children:"ThreePillars"}),f.jsx(Ge,{children:"Recruiting site redesign and brand refresh"})]})]}),f.jsxs(We,{children:[f.jsxs(Pe,{to:"/Piton","aria-label":"Piton project",children:[f.jsx(ot,{src:Df,avif:Ef,webp:Lf,alt:"Piton project tile",width:"100%",responsive:!1,style:{position:"absolute",inset:0,height:"100%",objectFit:"cover",zIndex:0,borderRadius:0,boxShadow:"none"}}),f.jsx(He,{})]}),f.jsxs(Ne,{children:[f.jsx(Ce,{children:"Piton"}),f.jsx(Ge,{children:"Product design and mobile interface work"})]})]}),f.jsxs(We,{children:[f.jsxs(Pe,{to:"/Outsource","aria-label":"Outsource project",children:[f.jsx(ot,{src:ul,avif:Vf,webp:Of,alt:"Outsource project tile",width:"100%",responsive:!1,style:{position:"absolute",inset:0,height:"100%",objectFit:"cover",zIndex:0,borderRadius:0,boxShadow:"none"}}),f.jsx(He,{})]}),f.jsxs(Ne,{children:[f.jsx(Ce,{children:"Outsource"}),f.jsx(Ge,{children:"Commerce and editorial design across surfaces"})]})]}),f.jsxs(We,{children:[f.jsxs(Pe,{to:"/Giga","aria-label":"Giga project",children:[f.jsx(ot,{src:If,avif:zf,webp:Ff,alt:"Giga project tile",width:"100%",responsive:!1,style:{position:"absolute",inset:0,height:"100%",objectFit:"cover",zIndex:0,borderRadius:0,boxShadow:"none"}}),f.jsx(He,{})]}),f.jsxs(Ne,{children:[f.jsx(Ce,{children:"Giga"}),f.jsx(Ge,{children:"Cross-platform product design and experiments"})]})]})]})]})})}const sp=S.lazy(()=>Et(()=>import("./three-Cragz5qr.js"),__vite__mapDeps([0,1,2]),import.meta.url)),op=Ue`
  0% { transform: translate(-50%, -60%) rotate(0deg); }
  20% { transform: translate(-20%, -80%) rotate(90deg); }
  40% { transform: translate(10%, -40%) rotate(180deg); }
  60% { transform: translate(-40%, -20%) rotate(270deg); }
  80% { transform: translate(-70%, -50%) rotate(320deg); }
  100% { transform: translate(-50%, -60%) rotate(360deg); }
`,ap=Ue`
  0% { transform: translate(60%, -50%) rotate(0deg); }
  20% { transform: translate(80%, -20%) rotate(90deg); }
  40% { transform: translate(40%, -70%) rotate(180deg); }
  60% { transform: translate(20%, -30%) rotate(270deg); }
  80% { transform: translate(70%, -60%) rotate(320deg); }
  100% { transform: translate(60%, -50%) rotate(360deg); }
`,lp=Ue`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(6px); }
`,cp=C.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4vw;
  width: 100vw;
  height: 100vh;
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
    animation: ${op} 35s ease-in-out infinite;
  }

  &::after {
    top: 40%;
    left: 65%;
    animation: ${ap} 40s ease-in-out infinite;
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
`,qn=e=>{if(!e)return e;try{return encodeURI(decodeURI(e))}catch{return encodeURI(e)}},up=e=>f.jsxs("picture",{children:[f.jsx("source",{srcSet:qn(Ud),type:"image/avif"}),f.jsx("source",{srcSet:qn($d),type:"image/webp"}),f.jsx("img",{src:qn(nl),alt:"Zack MacTavish portrait",loading:"eager",decoding:"async",fetchPriority:"high",className:"about-picture-img",style:{width:"21vw",height:"21vw",objectFit:"cover",borderRadius:"50%",flexShrink:0,position:"relative",zIndex:1,display:"block",...e.style}}),f.jsx("style",{children:`
      @media (max-width: 1000px) {
        .about-picture-img {
          width: 38vw !important;
          height: 38vw !important;
          min-width: 160px !important;
          min-height: 160px !important;
        }
      }
      @media (max-width: 700px) {
        .about-picture-img {
          width: 44vw !important;
          height: 44vw !important;
          min-width: 120px !important;
          min-height: 120px !important;
        }
      }
    `})]}),dp=C.div`
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
`,hp=C.div`
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
`,fl=C.div`
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
`,fp=C.div`
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
`,pp=C.div`
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
`,mp=C.div`
  animation: ${lp} 1.5s infinite ease-in-out; /* animate only Y so X-centering stays intact */
  will-change: transform;
`,gp=C.div`
  width: 24px;
  height: 24px;
  border-left: 3px solid white;
  border-bottom: 3px solid white;
  transform: rotate(-45deg);
  border-radius: 2px;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.35)); /* maintain visibility even near light backgrounds */
`,yp=C.section`
  width: 100vw;
  background: white;
  padding: 14vh 5vw; /* slightly increased spacing above/below */
  box-sizing: border-box;
`,xp=C(cs)`
  /* additional local overrides if needed */
`,vp=C.div`
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
`,pl=C(Xi)`
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
`,ml=C.div`
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  filter: saturate(0.9);
  transition: filter 180ms ease;
`,gl=C.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.45), rgba(0,0,0,0.15));
  transition: background 180ms ease;
`,wp=C.div.attrs({"data-cursor":"link",role:"link"})`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 0.75rem; /* slightly below the image */
`,yl=C.h3`
  margin: 0;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 600;
  font-size: 1.15rem;
  color: #111;
  transition: color 160ms ease;
`,bp=C.p`
  margin: 0;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.95rem;
  color: #5d5d5d;
`,_p=C.div`
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
`,Tp=C.h2`
  margin: 0;
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(1.4rem, 3vw, 2rem);
  color: #111;
`,Sp=C.p`
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
    color: ${e=>e.theme.backgroundColor};
    text-decoration: none;
  }
`;C.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  pointer-events: none;
  color: #111;
`;const kp=C.div`
  display: flex;
  flex-direction: column;

  &:hover ${pl} {
    transform: translateY(-3px);
    box-shadow: 0 10px 36px rgba(0,0,0,0.12);
  }

  &:hover ${ml} {
    filter: saturate(1.08) brightness(1.05);
  }

  &:hover ${gl} {
    background: linear-gradient(to top, rgba(0,0,0,0.25), rgba(0,0,0,0.08));
  }

  &:hover ${yl} {
    color: ${e=>e.theme.backgroundColor};
  }
`;C.div`
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
`;C.div`
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
`;C.img.attrs({loading:"lazy",decoding:"async"})`
  width: 100%;
  height: auto;
  display: block; /* avoid inline image spacing quirks */
  object-fit: contain;
  border-radius: ${e=>e.theme.radii.card}; /* standardized card radius */
`;C(fl)`
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
`;const Pp=C.div`
  overflow-y: hidden;
  width: 100vw;
`,Cp=C.div`
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
`,Ap=C.div`
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
`,jp=C.h1`
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
`,Mp=C.p`
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
`,Rp=C.a`
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
`,Dp=C.div`
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
`,xl=({introDone:e=!0})=>{const[t,i]=S.useState(!1),[n,r]=S.useState(!1);return S.useLayoutEffect(()=>{window.scrollTo(0,0)},[]),S.useEffect(()=>{const s=()=>{!n&&window.scrollY>50&&(i(!1),r(!0))};return window.addEventListener("scroll",s),()=>window.removeEventListener("scroll",s)},[n]),S.useEffect(()=>{e&&(n||i(!0))},[e,n]),f.jsxs("div",{children:[f.jsx(ls,{...st.landing,sameAs:Ut.sameAs,keywords:st.landing.keywords||Ut.keywords}),f.jsxs(cp,{children:[f.jsx(dp,{children:f.jsx(up,{src:nl})}),f.jsxs(hp,{children:[f.jsx(fp,{children:f.jsx(Zf,{})}),f.jsx(fl,{$widthsize:"47vw",children:"Hi, I'm Zack MacTavish, a product designer based in Philadelphia, PA. I'm currently shaping shopping experiences at Microsoft."})]}),!n&&e&&f.jsx(pp,{$visible:t,children:f.jsx(mp,{children:f.jsx(gp,{})})})]}),f.jsx(rp,{}),f.jsx(oi,{style:{backgroundColor:"#f7f7f7",padding:"10vh 5vw",minHeight:"70vh"},children:f.jsx(si,{children:f.jsxs(ri,{style:{color:"#5d5d5d"},children:["I’ve partnered with agencies including"," ",f.jsx("a",{href:"https://www.publicisgroupe.com/en",target:"_blank",rel:"noopener noreferrer",style:{color:"#5d5d5d",textDecoration:"underline"},children:"Publicis Groupe"}),","," ",f.jsx("a",{href:"https://prairieandforge.com/",target:"_blank",rel:"noopener noreferrer",style:{color:"#5d5d5d",textDecoration:"underline"},children:"Prairie & Forge"}),", and"," ",f.jsx("a",{href:"https://varfaj.com/",target:"_blank",rel:"noopener noreferrer",style:{color:"#5d5d5d",textDecoration:"underline"},children:"Varfaj Partners"})," ","on work spanning UX, product, and brand design. My background includes agency experience in New York City and formal design training in Chicago. Client collaborations have included Microsoft, Walmart, Seagate Technology, and Chip Ganassi Racing."]})})}),f.jsx(yp,{children:f.jsxs(xp,{children:[f.jsxs(_p,{children:[f.jsx(Tp,{children:"My writing"}),f.jsx(Sp,{children:f.jsx("a",{href:"https://medium.com/@zmactavish",target:"_blank",rel:"noopener noreferrer",children:"See my Medium Portfolio"})})]}),f.jsx(vp,{children:[...Array(6)].map((s,o)=>{const a=o===0,l=o===1,u=o===2,c=o===3,d=o===5,h=o===4,m=a?"https://medium.com/design-bootcamp/76-features-in-figma-to-know-7dbb35cdb5a7":l?"https://medium.com/design-bootcamp/my-journey-as-a-product-designer-at-microsoft-a5325be417b5":u?"https://medium.com/design-bootcamp/12-features-to-consider-when-designing-an-e-commerce-mobile-app-740efbeee7c8":c?"https://medium.com/design-bootcamp/designing-in-the-8pt-grid-system-f3c1183ea6e8":h?"https://medium.com/@zmactavish/0643beac797a":d?"https://medium.com/@zmactavish/30-html-tags-to-know-b0a85b122ded":"https://medium.com/@zmactavish",g=a?"76 features in Figma to know":l?"My journey as a Product designer at Microsoft.":u?"12 features to consider when building an E-commerce app":c?"Designing in the 8pt grid system":h?"30 CSS styles to know":d?"30 HTML tags to know":"Medium",p=a?"A guide to all things Figma":l?"What I've learned at Microsoft as a Product designer":u?"A practical UX checklist for e‑commerce mobile apps":c?"Consistent spacing for scalable UI components":h?"A beginner's guide to CSS for designers":"A beginner's guide to HTML for designers",y=a?{backgroundImage:`url(${Bf})`,backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"}:l?{backgroundImage:`url(${Uf})`,backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"}:u?{backgroundImage:`url(${$f})`,backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"}:c?{backgroundImage:`url(${Nf})`,backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"}:h?{backgroundImage:`url(${Wf})`,backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"}:d?{backgroundImage:`url(${Gf})`,backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"}:{backgroundImage:`url(${dl})`,backgroundColor:"#fafafa",backgroundSize:"40%",backgroundRepeat:"no-repeat",backgroundPosition:"center",filter:"none"};return f.jsxs(kp,{children:[f.jsxs(pl,{to:m,target:"_blank",rel:"noopener noreferrer","aria-label":a?"Medium article: 76 features in Figma to know":l?"Medium article: My journey as a Product designer at Microsoft.":u?"Medium article: 12 features to consider when building an E-commerce app":c?"Medium article: Designing in the 8pt grid system":h?"Medium article: 30 CSS styles to know":d?"Medium article: 30 HTML tags to know":`Medium writing card ${o+1}`,children:[f.jsx(ml,{style:y}),f.jsx(gl,{})]}),f.jsxs(wp,{children:[f.jsx(yl,{children:g}),f.jsx(bp,{children:p})]})]},`medium-card-${o}`)})})]})}),f.jsx(Bd,{imageSrc:Nd,imageAvif:Gd,imageWebp:Wd,imageAlt:"Quilt hanging",textSize:"1.4rem",textColor:"#fff",style:{color:"#fff"},children:f.jsxs("div",{style:{lineHeight:"1.6"},children:["Outside of work, I live with my partner ",f.jsx("a",{href:"https://oliviazitasmith.com",target:"_blank",rel:"noopener noreferrer",style:{color:"inherit",textDecoration:"underline"},children:"Olivia Smith"}),", who is also an artist. In my own creative time, I focus on making quilts that combine photography, textile techniques, and mixed media, exploring the intersection of art, design, and storytelling."]})}),f.jsx(Pp,{children:f.jsxs(Cp,{children:[f.jsxs(Ap,{children:[f.jsx(jp,{children:"Thanks for stopping by"}),f.jsx(Mp,{children:"I'm also an artist. Check out my art portfolio."}),f.jsx(Rp,{href:"https://zackmactavish.com",target:"_blank",rel:"noopener noreferrer",children:"View Portfolio"})]}),f.jsx(Dp,{children:f.jsx(S.Suspense,{fallback:f.jsx("div",{style:{height:"50vh"}}),children:f.jsx(sp,{})})})]})})]})};function Jt(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function vl(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var jt={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Li={duration:.5,overwrite:!1,delay:0},ms,ut,H,Vt=1e8,N=1/Vt,_r=Math.PI*2,Ep=_r/4,Lp=0,wl=Math.sqrt,Vp=Math.cos,Op=Math.sin,at=function(t){return typeof t=="string"},J=function(t){return typeof t=="function"},ne=function(t){return typeof t=="number"},gs=function(t){return typeof t>"u"},qt=function(t){return typeof t=="object"},xt=function(t){return t!==!1},ys=function(){return typeof window<"u"},Qi=function(t){return J(t)||at(t)},bl=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},ft=Array.isArray,Ip=/random\([^)]+\)/g,zp=/,\s*/g,xo=/(?:-?\.?\d|\.)+/gi,_l=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ye=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Zn=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Tl=/[+-]=-?[.\d]+/,Fp=/[^,'"\[\]\s]+/gi,Bp=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Y,Wt,Tr,xs,Rt={},bn={},Sl,kl=function(t){return(bn=ai(t,Rt))&&_t},vs=function(t,i){return console.warn("Invalid property",t,"set to",i,"Missing plugin? gsap.registerPlugin()")},Vi=function(t,i){return!i&&console.warn(t)},Pl=function(t,i){return t&&(Rt[t]=i)&&bn&&(bn[t]=i)||Rt},Oi=function(){return 0},Up={suppressEvents:!0,isStart:!0,kill:!1},on={suppressEvents:!0,kill:!1},$p={suppressEvents:!0},ws={},he=[],Sr={},Cl,St={},Jn={},vo=30,an=[],bs="",_s=function(t){var i=t[0],n,r;if(qt(i)||J(i)||(t=[t]),!(n=(i._gsap||{}).harness)){for(r=an.length;r--&&!an[r].targetTest(i););n=an[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new Yl(t[r],n)))||t.splice(r,1);return t},Ve=function(t){return t._gsap||_s(Ot(t))[0]._gsap},Al=function(t,i,n){return(n=t[i])&&J(n)?t[i]():gs(n)&&t.getAttribute&&t.getAttribute(i)||n},vt=function(t,i){return(t=t.split(",")).forEach(i)||t},tt=function(t){return Math.round(t*1e5)/1e5||0},K=function(t){return Math.round(t*1e7)/1e7||0},ei=function(t,i){var n=i.charAt(0),r=parseFloat(i.substr(2));return t=parseFloat(t),n==="+"?t+r:n==="-"?t-r:n==="*"?t*r:t/r},Np=function(t,i){for(var n=i.length,r=0;t.indexOf(i[r])<0&&++r<n;);return r<n},_n=function(){var t=he.length,i=he.slice(0),n,r;for(Sr={},he.length=0,n=0;n<t;n++)r=i[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Ts=function(t){return!!(t._initted||t._startAt||t.add)},jl=function(t,i,n,r){he.length&&!ut&&_n(),t.render(i,n,!!(ut&&i<0&&Ts(t))),he.length&&!ut&&_n()},Ml=function(t){var i=parseFloat(t);return(i||i===0)&&(t+"").match(Fp).length<2?i:at(t)?t.trim():t},Rl=function(t){return t},Dt=function(t,i){for(var n in i)n in t||(t[n]=i[n]);return t},Gp=function(t){return function(i,n){for(var r in n)r in i||r==="duration"&&t||r==="ease"||(i[r]=n[r])}},ai=function(t,i){for(var n in i)t[n]=i[n];return t},wo=function e(t,i){for(var n in i)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=qt(i[n])?e(t[n]||(t[n]={}),i[n]):i[n]);return t},Tn=function(t,i){var n={},r;for(r in t)r in i||(n[r]=t[r]);return n},Ci=function(t){var i=t.parent||Y,n=t.keyframes?Gp(ft(t.keyframes)):Dt;if(xt(t.inherit))for(;i;)n(t,i.vars.defaults),i=i.parent||i._dp;return t},Wp=function(t,i){for(var n=t.length,r=n===i.length;r&&n--&&t[n]===i[n];);return n<0},Dl=function(t,i,n,r,s){var o=t[r],a;if(s)for(a=i[s];o&&o[s]>a;)o=o._prev;return o?(i._next=o._next,o._next=i):(i._next=t[n],t[n]=i),i._next?i._next._prev=i:t[r]=i,i._prev=o,i.parent=i._dp=t,i},Fn=function(t,i,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=i._prev,o=i._next;s?s._next=o:t[n]===i&&(t[n]=o),o?o._prev=s:t[r]===i&&(t[r]=s),i._next=i._prev=i.parent=null},pe=function(t,i){t.parent&&(!i||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Oe=function(t,i){if(t&&(!i||i._end>t._dur||i._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},Xp=function(t){for(var i=t.parent;i&&i.parent;)i._dirty=1,i.totalDuration(),i=i.parent;return t},kr=function(t,i,n,r){return t._startAt&&(ut?t._startAt.revert(on):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(i,!0,r))},Hp=function e(t){return!t||t._ts&&e(t.parent)},bo=function(t){return t._repeat?li(t._tTime,t=t.duration()+t._rDelay)*t:0},li=function(t,i){var n=Math.floor(t=K(t/i));return t&&n===t?n-1:n},Sn=function(t,i){return(t-i._start)*i._ts+(i._ts>=0?0:i._dirty?i.totalDuration():i._tDur)},Bn=function(t){return t._end=K(t._start+(t._tDur/Math.abs(t._ts||t._rts||N)||0))},Un=function(t,i){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=K(n._time-(t._ts>0?i/t._ts:((t._dirty?t.totalDuration():t._tDur)-i)/-t._ts)),Bn(t),n._dirty||Oe(n,t)),t},El=function(t,i){var n;if((i._time||!i._dur&&i._initted||i._start<t._time&&(i._dur||!i.add))&&(n=Sn(t.rawTime(),i),(!i._dur||Hi(0,i.totalDuration(),n)-i._tTime>N)&&i.render(n,!0)),Oe(t,i)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-N}},Ht=function(t,i,n,r){return i.parent&&pe(i),i._start=K((ne(n)?n:n||t!==Y?Lt(t,n,i):t._time)+i._delay),i._end=K(i._start+(i.totalDuration()/Math.abs(i.timeScale())||0)),Dl(t,i,"_first","_last",t._sort?"_start":0),Pr(i)||(t._recent=i),r||El(t,i),t._ts<0&&Un(t,t._tTime),t},Ll=function(t,i){return(Rt.ScrollTrigger||vs("scrollTrigger",i))&&Rt.ScrollTrigger.create(i,t)},Vl=function(t,i,n,r,s){if(ks(t,i,s),!t._initted)return 1;if(!n&&t._pt&&!ut&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Cl!==Pt.frame)return he.push(t),t._lazy=[s,r],1},Kp=function e(t){var i=t.parent;return i&&i._ts&&i._initted&&!i._lock&&(i.rawTime()<0||e(i))},Pr=function(t){var i=t.data;return i==="isFromStart"||i==="isStart"},Yp=function(t,i,n,r){var s=t.ratio,o=i<0||!i&&(!t._start&&Kp(t)&&!(!t._initted&&Pr(t))||(t._ts<0||t._dp._ts<0)&&!Pr(t))?0:1,a=t._rDelay,l=0,u,c,d;if(a&&t._repeat&&(l=Hi(0,t._tDur,i),c=li(l,a),t._yoyo&&c&1&&(o=1-o),c!==li(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||ut||r||t._zTime===N||!i&&t._zTime){if(!t._initted&&Vl(t,i,r,n,l))return;for(d=t._zTime,t._zTime=i||(n?N:0),n||(n=i&&!d),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,u=t._pt;u;)u.r(o,u.d),u=u._next;i<0&&kr(t,i,n,!0),t._onUpdate&&!n&&Ct(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&Ct(t,"onRepeat"),(i>=t._tDur||i<0)&&t.ratio===o&&(o&&pe(t,1),!n&&!ut&&(Ct(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=i)},qp=function(t,i,n){var r;if(n>i)for(r=t._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>i)return r;r=r._next}else for(r=t._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<i)return r;r=r._prev}},ci=function(t,i,n,r){var s=t._repeat,o=K(i)||0,a=t._tTime/t._tDur;return a&&!r&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:K(o*(s+1)+t._rDelay*s):o,a>0&&!r&&Un(t,t._tTime=t._tDur*a),t.parent&&Bn(t),n||Oe(t.parent,t),t},_o=function(t){return t instanceof yt?Oe(t):ci(t,t._dur)},Zp={_start:0,endTime:Oi,totalDuration:Oi},Lt=function e(t,i,n){var r=t.labels,s=t._recent||Zp,o=t.duration()>=Vt?s.endTime(!1):t._dur,a,l,u;return at(i)&&(isNaN(i)||i in r)?(l=i.charAt(0),u=i.substr(-1)==="%",a=i.indexOf("="),l==="<"||l===">"?(a>=0&&(i=i.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(i.substr(1))||0)*(u?(a<0?s:n).totalDuration()/100:1)):a<0?(i in r||(r[i]=o),r[i]):(l=parseFloat(i.charAt(a-1)+i.substr(a+1)),u&&n&&(l=l/100*(ft(n)?n[0]:n).totalDuration()),a>1?e(t,i.substr(0,a-1),n)+l:o+l)):i==null?o:+i},Ai=function(t,i,n){var r=ne(i[1]),s=(r?2:1)+(t<2?0:1),o=i[s],a,l;if(r&&(o.duration=i[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=xt(l.vars.inherit)&&l.parent;o.immediateRender=xt(a.immediateRender),t<2?o.runBackwards=1:o.startAt=i[s-1]}return new it(i[0],o,i[s+1])},ve=function(t,i){return t||t===0?i(t):i},Hi=function(t,i,n){return n<t?t:n>i?i:n},ht=function(t,i){return!at(t)||!(i=Bp.exec(t))?"":i[1]},Jp=function(t,i,n){return ve(n,function(r){return Hi(t,i,r)})},Cr=[].slice,Ol=function(t,i){return t&&qt(t)&&"length"in t&&(!i&&!t.length||t.length-1 in t&&qt(t[0]))&&!t.nodeType&&t!==Wt},Qp=function(t,i,n){return n===void 0&&(n=[]),t.forEach(function(r){var s;return at(r)&&!i||Ol(r,1)?(s=n).push.apply(s,Ot(r)):n.push(r)})||n},Ot=function(t,i,n){return H&&!i&&H.selector?H.selector(t):at(t)&&!n&&(Tr||!ui())?Cr.call((i||xs).querySelectorAll(t),0):ft(t)?Qp(t,n):Ol(t)?Cr.call(t,0):t?[t]:[]},Ar=function(t){return t=Ot(t)[0]||Vi("Invalid scope")||{},function(i){var n=t.current||t.nativeElement||t;return Ot(i,n.querySelectorAll?n:n===t?Vi("Invalid scope")||xs.createElement("div"):t)}},Il=function(t){return t.sort(function(){return .5-Math.random()})},zl=function(t){if(J(t))return t;var i=qt(t)?t:{each:t},n=Ie(i.ease),r=i.from||0,s=parseFloat(i.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,u=i.axis,c=r,d=r;return at(r)?c=d={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(c=r[0],d=r[1]),function(h,m,g){var p=(g||i).length,y=o[p],v,w,x,b,_,j,k,T,P;if(!y){if(P=i.grid==="auto"?0:(i.grid||[1,Vt])[1],!P){for(k=-Vt;k<(k=g[P++].getBoundingClientRect().left)&&P<p;);P<p&&P--}for(y=o[p]=[],v=l?Math.min(P,p)*c-.5:r%P,w=P===Vt?0:l?p*d/P-.5:r/P|0,k=0,T=Vt,j=0;j<p;j++)x=j%P-v,b=w-(j/P|0),y[j]=_=u?Math.abs(u==="y"?b:x):wl(x*x+b*b),_>k&&(k=_),_<T&&(T=_);r==="random"&&Il(y),y.max=k-T,y.min=T,y.v=p=(parseFloat(i.amount)||parseFloat(i.each)*(P>p?p-1:u?u==="y"?p/P:P:Math.max(P,p/P))||0)*(r==="edges"?-1:1),y.b=p<0?s-p:s,y.u=ht(i.amount||i.each)||0,n=n&&p<0?hm(n):n}return p=(y[h]-y.min)/y.max||0,K(y.b+(n?n(p):p)*y.v)+y.u}},jr=function(t){var i=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var r=K(Math.round(parseFloat(n)/t)*t*i);return(r-r%1)/i+(ne(n)?0:ht(n))}},Fl=function(t,i){var n=ft(t),r,s;return!n&&qt(t)&&(r=n=t.radius||Vt,t.values?(t=Ot(t.values),(s=!ne(t[0]))&&(r*=r)):t=jr(t.increment)),ve(i,n?J(t)?function(o){return s=t(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),u=Vt,c=0,d=t.length,h,m;d--;)s?(h=t[d].x-a,m=t[d].y-l,h=h*h+m*m):h=Math.abs(t[d]-a),h<u&&(u=h,c=d);return c=!r||u<=r?t[c]:o,s||c===o||ne(o)?c:c+ht(o)}:jr(t))},Bl=function(t,i,n,r){return ve(ft(t)?!i:n===!0?!!(n=0):!r,function(){return ft(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(i-t+n*.99))/n)*n*r)/r})},tm=function(){for(var t=arguments.length,i=new Array(t),n=0;n<t;n++)i[n]=arguments[n];return function(r){return i.reduce(function(s,o){return o(s)},r)}},em=function(t,i){return function(n){return t(parseFloat(n))+(i||ht(n))}},im=function(t,i,n){return $l(t,i,0,1,n)},Ul=function(t,i,n){return ve(n,function(r){return t[~~i(r)]})},nm=function e(t,i,n){var r=i-t;return ft(t)?Ul(t,e(0,t.length),i):ve(n,function(s){return(r+(s-t)%r)%r+t})},rm=function e(t,i,n){var r=i-t,s=r*2;return ft(t)?Ul(t,e(0,t.length-1),i):ve(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>r?s-o:o)})},Ii=function(t){return t.replace(Ip,function(i){var n=i.indexOf("[")+1,r=i.substring(n||7,n?i.indexOf("]"):i.length-1).split(zp);return Bl(n?r:+r[0],n?0:+r[1],+r[2]||1e-5)})},$l=function(t,i,n,r,s){var o=i-t,a=r-n;return ve(s,function(l){return n+((l-t)/o*a||0)})},sm=function e(t,i,n,r){var s=isNaN(t+i)?0:function(m){return(1-m)*t+m*i};if(!s){var o=at(t),a={},l,u,c,d,h;if(n===!0&&(r=1)&&(n=null),o)t={p:t},i={p:i};else if(ft(t)&&!ft(i)){for(c=[],d=t.length,h=d-2,u=1;u<d;u++)c.push(e(t[u-1],t[u]));d--,s=function(g){g*=d;var p=Math.min(h,~~g);return c[p](g-p)},n=i}else r||(t=ai(ft(t)?[]:{},t));if(!c){for(l in i)Ss.call(a,t,l,"get",i[l]);s=function(g){return As(g,a)||(o?t.p:t)}}}return ve(n,s)},To=function(t,i,n){var r=t.labels,s=Vt,o,a,l;for(o in r)a=r[o]-i,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Ct=function(t,i,n){var r=t.vars,s=r[i],o=H,a=t._ctx,l,u,c;if(s)return l=r[i+"Params"],u=r.callbackScope||t,n&&he.length&&_n(),a&&(H=a),c=l?s.apply(u,l):s.call(u),H=o,c},Ti=function(t){return pe(t),t.scrollTrigger&&t.scrollTrigger.kill(!!ut),t.progress()<1&&Ct(t,"onInterrupt"),t},qe,Nl=[],Gl=function(t){if(t)if(t=!t.name&&t.default||t,ys()||t.headless){var i=t.name,n=J(t),r=i&&!n&&t.init?function(){this._props=[]}:t,s={init:Oi,render:As,add:Ss,kill:_m,modifier:bm,rawVars:0},o={targetTest:0,get:0,getSetter:Cs,aliases:{},register:0};if(ui(),t!==r){if(St[i])return;Dt(r,Dt(Tn(t,s),o)),ai(r.prototype,ai(s,Tn(t,o))),St[r.prop=i]=r,t.targetTest&&(an.push(r),ws[i]=1),i=(i==="css"?"CSS":i.charAt(0).toUpperCase()+i.substr(1))+"Plugin"}Pl(i,r),t.register&&t.register(_t,r,wt)}else Nl.push(t)},$=255,Si={aqua:[0,$,$],lime:[0,$,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,$],navy:[0,0,128],white:[$,$,$],olive:[128,128,0],yellow:[$,$,0],orange:[$,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[$,0,0],pink:[$,192,203],cyan:[0,$,$],transparent:[$,$,$,0]},Qn=function(t,i,n){return t+=t<0?1:t>1?-1:0,(t*6<1?i+(n-i)*t*6:t<.5?n:t*3<2?i+(n-i)*(2/3-t)*6:i)*$+.5|0},Wl=function(t,i,n){var r=t?ne(t)?[t>>16,t>>8&$,t&$]:0:Si.black,s,o,a,l,u,c,d,h,m,g;if(!r){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Si[t])r=Si[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return r=parseInt(t.substr(1,6),16),[r>>16,r>>8&$,r&$,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),r=[t>>16,t>>8&$,t&$]}else if(t.substr(0,3)==="hsl"){if(r=g=t.match(xo),!i)l=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,o=c<=.5?c*(u+1):c+u-c*u,s=c*2-o,r.length>3&&(r[3]*=1),r[0]=Qn(l+1/3,s,o),r[1]=Qn(l,s,o),r[2]=Qn(l-1/3,s,o);else if(~t.indexOf("="))return r=t.match(_l),n&&r.length<4&&(r[3]=1),r}else r=t.match(xo)||Si.transparent;r=r.map(Number)}return i&&!g&&(s=r[0]/$,o=r[1]/$,a=r[2]/$,d=Math.max(s,o,a),h=Math.min(s,o,a),c=(d+h)/2,d===h?l=u=0:(m=d-h,u=c>.5?m/(2-d-h):m/(d+h),l=d===s?(o-a)/m+(o<a?6:0):d===o?(a-s)/m+2:(s-o)/m+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),n&&r.length<4&&(r[3]=1),r},Xl=function(t){var i=[],n=[],r=-1;return t.split(fe).forEach(function(s){var o=s.match(Ye)||[];i.push.apply(i,o),n.push(r+=o.length+1)}),i.c=n,i},So=function(t,i,n){var r="",s=(t+r).match(fe),o=i?"hsla(":"rgba(",a=0,l,u,c,d;if(!s)return t;if(s=s.map(function(h){return(h=Wl(h,i,1))&&o+(i?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(c=Xl(t),l=n.c,l.join(r)!==c.c.join(r)))for(u=t.replace(fe,"1").split(Ye),d=u.length-1;a<d;a++)r+=u[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(c.length?c:s.length?s:n).shift());if(!u)for(u=t.split(fe),d=u.length-1;a<d;a++)r+=u[a]+s[a];return r+u[d]},fe=(function(){var e="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Si)e+="|"+t+"\\b";return new RegExp(e+")","gi")})(),om=/hsl[a]?\(/,Hl=function(t){var i=t.join(" "),n;if(fe.lastIndex=0,fe.test(i))return n=om.test(i),t[1]=So(t[1],n),t[0]=So(t[0],n,Xl(t[1])),!0},zi,Pt=(function(){var e=Date.now,t=500,i=33,n=e(),r=n,s=1e3/240,o=s,a=[],l,u,c,d,h,m,g=function p(y){var v=e()-r,w=y===!0,x,b,_,j;if((v>t||v<0)&&(n+=v-i),r+=v,_=r-n,x=_-o,(x>0||w)&&(j=++d.frame,h=_-d.time*1e3,d.time=_=_/1e3,o+=x+(x>=s?4:s-x),b=1),w||(l=u(p)),b)for(m=0;m<a.length;m++)a[m](_,h,j,y)};return d={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(y){return h/(1e3/(y||60))},wake:function(){Sl&&(!Tr&&ys()&&(Wt=Tr=window,xs=Wt.document||{},Rt.gsap=_t,(Wt.gsapVersions||(Wt.gsapVersions=[])).push(_t.version),kl(bn||Wt.GreenSockGlobals||!Wt.gsap&&Wt||{}),Nl.forEach(Gl)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),u=c||function(y){return setTimeout(y,o-d.time*1e3+1|0)},zi=1,g(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),zi=0,u=Oi},lagSmoothing:function(y,v){t=y||1/0,i=Math.min(v||33,t)},fps:function(y){s=1e3/(y||240),o=d.time*1e3+s},add:function(y,v,w){var x=v?function(b,_,j,k){y(b,_,j,k),d.remove(x)}:y;return d.remove(y),a[w?"unshift":"push"](x),ui(),x},remove:function(y,v){~(v=a.indexOf(y))&&a.splice(v,1)&&m>=v&&m--},_listeners:a},d})(),ui=function(){return!zi&&Pt.wake()},B={},am=/^[\d.\-M][\d.\-,\s]/,lm=/["']/g,cm=function(t){for(var i={},n=t.substr(1,t.length-3).split(":"),r=n[0],s=1,o=n.length,a,l,u;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),i[r]=isNaN(u)?u.replace(lm,"").trim():+u,r=l.substr(a+1).trim();return i},um=function(t){var i=t.indexOf("(")+1,n=t.indexOf(")"),r=t.indexOf("(",i);return t.substring(i,~r&&r<n?t.indexOf(")",n+1):n)},dm=function(t){var i=(t+"").split("("),n=B[i[0]];return n&&i.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[cm(i[1])]:um(t).split(",").map(Ml)):B._CE&&am.test(t)?B._CE("",t):n},hm=function(t){return function(i){return 1-t(1-i)}},Ie=function(t,i){return t&&(J(t)?t:B[t]||dm(t))||i},$e=function(t,i,n,r){n===void 0&&(n=function(l){return 1-i(1-l)}),r===void 0&&(r=function(l){return l<.5?i(l*2)/2:1-i((1-l)*2)/2});var s={easeIn:i,easeOut:n,easeInOut:r},o;return vt(t,function(a){B[a]=Rt[a]=s,B[o=a.toLowerCase()]=n;for(var l in s)B[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=B[a+"."+l]=s[l]}),s},Kl=function(t){return function(i){return i<.5?(1-t(1-i*2))/2:.5+t((i-.5)*2)/2}},tr=function e(t,i,n){var r=i>=1?i:1,s=(n||(t?.3:.45))/(i<1?i:1),o=s/_r*(Math.asin(1/r)||0),a=function(c){return c===1?1:r*Math.pow(2,-10*c)*Op((c-o)*s)+1},l=t==="out"?a:t==="in"?function(u){return 1-a(1-u)}:Kl(a);return s=_r/s,l.config=function(u,c){return e(t,u,c)},l},er=function e(t,i){i===void 0&&(i=1.70158);var n=function(o){return o?--o*o*((i+1)*o+i)+1:0},r=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:Kl(n);return r.config=function(s){return e(t,s)},r};vt("Linear,Quad,Cubic,Quart,Quint,Strong",function(e,t){var i=t<5?t+1:t;$e(e+",Power"+(i-1),t?function(n){return Math.pow(n,i)}:function(n){return n},function(n){return 1-Math.pow(1-n,i)},function(n){return n<.5?Math.pow(n*2,i)/2:1-Math.pow((1-n)*2,i)/2})});B.Linear.easeNone=B.none=B.Linear.easeIn;$e("Elastic",tr("in"),tr("out"),tr());(function(e,t){var i=1/t,n=2*i,r=2.5*i,s=function(a){return a<i?e*a*a:a<n?e*Math.pow(a-1.5/t,2)+.75:a<r?e*(a-=2.25/t)*a+.9375:e*Math.pow(a-2.625/t,2)+.984375};$e("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);$e("Expo",function(e){return Math.pow(2,10*(e-1))*e+e*e*e*e*e*e*(1-e)});$e("Circ",function(e){return-(wl(1-e*e)-1)});$e("Sine",function(e){return e===1?1:-Vp(e*Ep)+1});$e("Back",er("in"),er("out"),er());B.SteppedEase=B.steps=Rt.SteppedEase={config:function(t,i){t===void 0&&(t=1);var n=1/t,r=t+(i?0:1),s=i?1:0,o=1-N;return function(a){return((r*Hi(0,o,a)|0)+s)*n}}};Li.ease=B["quad.out"];vt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(e){return bs+=e+","+e+"Params,"});var Yl=function(t,i){this.id=Lp++,t._gsap=this,this.target=t,this.harness=i,this.get=i?i.get:Al,this.set=i?i.getSetter:Cs},Fi=(function(){function e(i){this.vars=i,this._delay=+i.delay||0,(this._repeat=i.repeat===1/0?-2:i.repeat||0)&&(this._rDelay=i.repeatDelay||0,this._yoyo=!!i.yoyo||!!i.yoyoEase),this._ts=1,ci(this,+i.duration,1,1),this.data=i.data,H&&(this._ctx=H,H.data.push(this)),zi||Pt.wake()}var t=e.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,ci(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,r){if(ui(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Un(this,n),!s._dp||s.parent||El(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ht(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===N||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),jl(this,n,r)),this},t.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+bo(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},t.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+bo(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?li(this._tTime,s)+1:1},t.timeScale=function(n,r){if(!arguments.length)return this._rts===-N?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Sn(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-N?0:this._rts,this.totalTime(Hi(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),Bn(this),Xp(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ui(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==N&&(this._tTime-=N)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=K(n);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Ht(r,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(xt(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Sn(r.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=$p);var r=ut;return ut=n,Ts(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),ut=r,this},t.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,_o(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,_o(this),r?this.time(r):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,r){return this.totalTime(Lt(this,n),xt(r))},t.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,xt(r)),this._dur||(this._zTime=-N),this},t.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},t.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},t.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-N:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-N,this},t.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-N)},t.eventCallback=function(n,r,s){var o=this.vars;return arguments.length>1?(r?(o[n]=r,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete o[n],this):o[n]},t.then=function(n){var r=this,s=r._prom;return new Promise(function(o){var a=J(n)?n:Rl,l=function(){var c=r.then;r.then=null,s&&s(),J(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=c),o(a),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},t.kill=function(){Ti(this)},e})();Dt(Fi.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-N,_prom:0,_ps:!1,_rts:1});var yt=(function(e){vl(t,e);function t(n,r){var s;return n===void 0&&(n={}),s=e.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=xt(n.sortChildren),Y&&Ht(n.parent||Y,Jt(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Ll(Jt(s),n.scrollTrigger),s}var i=t.prototype;return i.to=function(r,s,o){return Ai(0,arguments,this),this},i.from=function(r,s,o){return Ai(1,arguments,this),this},i.fromTo=function(r,s,o,a){return Ai(2,arguments,this),this},i.set=function(r,s,o){return s.duration=0,s.parent=this,Ci(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new it(r,s,Lt(this,o),1),this},i.call=function(r,s,o){return Ht(this,it.delayedCall(0,r,s),o)},i.staggerTo=function(r,s,o,a,l,u,c){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new it(r,o,Lt(this,l)),this},i.staggerFrom=function(r,s,o,a,l,u,c){return o.runBackwards=1,Ci(o).immediateRender=xt(o.immediateRender),this.staggerTo(r,s,o,a,l,u,c)},i.staggerFromTo=function(r,s,o,a,l,u,c,d){return a.startAt=o,Ci(a).immediateRender=xt(a.immediateRender),this.staggerTo(r,s,a,l,u,c,d)},i.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:K(r),d=this._zTime<0!=r<0&&(this._initted||!u),h,m,g,p,y,v,w,x,b,_,j,k;if(this!==Y&&c>l&&r>=0&&(c=l),c!==this._tTime||o||d){if(a!==this._time&&u&&(c+=this._time-a,r+=this._time-a),h=c,b=this._start,x=this._ts,v=!x,d&&(u||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(j=this._yoyo,y=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(y*100+r,s,o);if(h=K(c%y),c===l?(p=this._repeat,h=u):(_=K(c/y),p=~~_,p&&p===_&&(h=u,p--),h>u&&(h=u)),_=li(this._tTime,y),!a&&this._tTime&&_!==p&&this._tTime-_*y-this._dur<=0&&(_=p),j&&p&1&&(h=u-h,k=1),p!==_&&!this._lock){var T=j&&_&1,P=T===(j&&p&1);if(p<_&&(T=!T),a=T?0:c%u?u:c,this._lock=1,this.render(a||(k?0:K(p*y)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&Ct(this,"onRepeat"),this.vars.repeatRefresh&&!k&&(this.invalidate()._lock=1,_=p),a&&a!==this._time||v!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,P&&(this._lock=2,a=T?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!k&&this.invalidate()),this._lock=0,!this._ts&&!v)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(w=qp(this,K(a),K(h)),w&&(c-=h-(h=w._start))),this._tTime=c,this._time=h,this._act=!!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&c&&u&&!s&&!_&&(Ct(this,"onStart"),this._tTime!==c))return this;if(h>=a&&r>=0)for(m=this._first;m;){if(g=m._next,(m._act||h>=m._start)&&m._ts&&w!==m){if(m.parent!==this)return this.render(r,s,o);if(m.render(m._ts>0?(h-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(h-m._start)*m._ts,s,o),h!==this._time||!this._ts&&!v){w=0,g&&(c+=this._zTime=-N);break}}m=g}else{m=this._last;for(var A=r<0?r:h;m;){if(g=m._prev,(m._act||A<=m._end)&&m._ts&&w!==m){if(m.parent!==this)return this.render(r,s,o);if(m.render(m._ts>0?(A-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(A-m._start)*m._ts,s,o||ut&&Ts(m)),h!==this._time||!this._ts&&!v){w=0,g&&(c+=this._zTime=A?-N:N);break}}m=g}}if(w&&!s&&(this.pause(),w.render(h>=a?0:-N)._zTime=h>=a?1:-1,this._ts))return this._start=b,Bn(this),this.render(r,s,o);this._onUpdate&&!s&&Ct(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&a)&&(b===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&pe(this,1),!s&&!(r<0&&!a)&&(c||a||!l)&&(Ct(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},i.add=function(r,s){var o=this;if(ne(s)||(s=Lt(this,s,r)),!(r instanceof Fi)){if(ft(r))return r.forEach(function(a){return o.add(a,s)}),this;if(at(r))return this.addLabel(r,s);if(J(r))r=it.delayedCall(0,r);else return this}return this!==r?Ht(this,r,s):this},i.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Vt);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof it?s&&l.push(u):(o&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,o)))),u=u._next;return l},i.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},i.remove=function(r){return at(r)?this.removeLabel(r):J(r)?this.killTweensOf(r):(r.parent===this&&Fn(this,r),r===this._recent&&(this._recent=this._last),Oe(this))},i.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=K(Pt.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),e.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},i.addLabel=function(r,s){return this.labels[r]=Lt(this,s),this},i.removeLabel=function(r){return delete this.labels[r],this},i.addPause=function(r,s,o){var a=it.delayedCall(0,s||Oi,o);return a.data="isPause",this._hasPause=1,Ht(this,a,Lt(this,r))},i.removePause=function(r){var s=this._first;for(r=Lt(this,r);s;)s._start===r&&s.data==="isPause"&&pe(s),s=s._next},i.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)ae!==a[l]&&a[l].kill(r,s);return this},i.getTweensOf=function(r,s){for(var o=[],a=Ot(r),l=this._first,u=ne(s),c;l;)l instanceof it?Np(l._targets,a)&&(u?(!ae||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(c=l.getTweensOf(a,s)).length&&o.push.apply(o,c),l=l._next;return o},i.tweenTo=function(r,s){s=s||{};var o=this,a=Lt(o,r),l=s,u=l.startAt,c=l.onStart,d=l.onStartParams,h=l.immediateRender,m,g=it.to(o,Dt({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||N,onStart:function(){if(o.pause(),!m){var y=s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());g._dur!==y&&ci(g,y,0,1).render(g._time,!0,!0),m=1}c&&c.apply(g,d||[])}},s));return h?g.render(0):g},i.tweenFromTo=function(r,s,o){return this.tweenTo(s,Dt({startAt:{time:Lt(this,r)}},o))},i.recent=function(){return this._recent},i.nextLabel=function(r){return r===void 0&&(r=this._time),To(this,Lt(this,r))},i.previousLabel=function(r){return r===void 0&&(r=this._time),To(this,Lt(this,r),1)},i.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+N)},i.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,u;for(r=K(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(u in l)l[u]>=o&&(l[u]+=r);return Oe(this)},i.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return e.prototype.invalidate.call(this,r)},i.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Oe(this)},i.totalDuration=function(r){var s=0,o=this,a=o._last,l=Vt,u,c,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(d=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Ht(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(s-=c,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=K(c/o._ts),o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=u;ci(o,o===Y&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(r){if(Y._ts&&(jl(Y,Sn(r,Y)),Cl=Pt.frame),Pt.frame>=vo){vo+=jt.autoSleep||120;var s=Y._first;if((!s||!s._ts)&&jt.autoSleep&&Pt._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Pt.sleep()}}},t})(Fi);Dt(yt.prototype,{_lock:0,_hasPause:0,_forcing:0});var fm=function(t,i,n,r,s,o,a){var l=new wt(this._pt,t,i,0,1,ec,null,s),u=0,c=0,d,h,m,g,p,y,v,w;for(l.b=n,l.e=r,n+="",r+="",(v=~r.indexOf("random("))&&(r=Ii(r)),o&&(w=[n,r],o(w,t,i),n=w[0],r=w[1]),h=n.match(Zn)||[];d=Zn.exec(r);)g=d[0],p=r.substring(u,d.index),m?m=(m+1)%5:p.substr(-5)==="rgba("&&(m=1),g!==h[c++]&&(y=parseFloat(h[c-1])||0,l._pt={_next:l._pt,p:p||c===1?p:",",s:y,c:g.charAt(1)==="="?ei(y,g)-y:parseFloat(g)-y,m:m&&m<4?Math.round:0},u=Zn.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=a,(Tl.test(r)||v)&&(l.e=0),this._pt=l,l},Ss=function(t,i,n,r,s,o,a,l,u,c){J(r)&&(r=r(s||0,t,o));var d=t[i],h=n!=="get"?n:J(d)?u?t[i.indexOf("set")||!J(t["get"+i.substr(3)])?i:"get"+i.substr(3)](u):t[i]():d,m=J(d)?u?xm:Ql:Ps,g;if(at(r)&&(~r.indexOf("random(")&&(r=Ii(r)),r.charAt(1)==="="&&(g=ei(h,r)+(ht(h)||0),(g||g===0)&&(r=g))),!c||h!==r||Mr)return!isNaN(h*r)&&r!==""?(g=new wt(this._pt,t,i,+h||0,r-(h||0),typeof d=="boolean"?wm:tc,0,m),u&&(g.fp=u),a&&g.modifier(a,this,t),this._pt=g):(!d&&!(i in t)&&vs(i,r),fm.call(this,t,i,h,r,m,l||jt.stringFilter,u))},pm=function(t,i,n,r,s){if(J(t)&&(t=ji(t,s,i,n,r)),!qt(t)||t.style&&t.nodeType||ft(t)||bl(t))return at(t)?ji(t,s,i,n,r):t;var o={},a;for(a in t)o[a]=ji(t[a],s,i,n,r);return o},ql=function(t,i,n,r,s,o){var a,l,u,c;if(St[t]&&(a=new St[t]).init(s,a.rawVars?i[t]:pm(i[t],r,s,o,n),n,r,o)!==!1&&(n._pt=l=new wt(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==qe))for(u=n._ptLookup[n._targets.indexOf(s)],c=a._props.length;c--;)u[a._props[c]]=l;return a},ae,Mr,ks=function e(t,i,n){var r=t.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,u=r.onUpdate,c=r.runBackwards,d=r.yoyoEase,h=r.keyframes,m=r.autoRevert,g=t._dur,p=t._startAt,y=t._targets,v=t.parent,w=v&&v.data==="nested"?v.vars.targets:y,x=t._overwrite==="auto"&&!ms,b=t.timeline,_=r.easeReverse||d,j,k,T,P,A,R,E,L,V,O,z,U,F;if(b&&(!h||!s)&&(s="none"),t._ease=Ie(s,Li.ease),t._rEase=_&&(Ie(_)||t._ease),t._from=!b&&!!r.runBackwards,t._from&&(t.ratio=1),!b||h&&!r.stagger){if(L=y[0]?Ve(y[0]).harness:0,U=L&&r[L.prop],j=Tn(r,ws),p&&(p._zTime<0&&p.progress(1),i<0&&c&&a&&!m?p.render(-1,!0):p.revert(c&&g?on:Up),p._lazy=0),o){if(pe(t._startAt=it.set(y,Dt({data:"isStart",overwrite:!1,parent:v,immediateRender:!0,lazy:!p&&xt(l),startAt:null,delay:0,onUpdate:u&&function(){return Ct(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,i<0&&(ut||!a&&!m)&&t._startAt.revert(on),a&&g&&i<=0&&n<=0){i&&(t._zTime=i);return}}else if(c&&g&&!p){if(i&&(a=!1),T=Dt({overwrite:!1,data:"isFromStart",lazy:a&&!p&&xt(l),immediateRender:a,stagger:0,parent:v},j),U&&(T[L.prop]=U),pe(t._startAt=it.set(y,T)),t._startAt._dp=0,t._startAt._sat=t,i<0&&(ut?t._startAt.revert(on):t._startAt.render(-1,!0)),t._zTime=i,!a)e(t._startAt,N,N);else if(!i)return}for(t._pt=t._ptCache=0,l=g&&xt(l)||l&&!g,k=0;k<y.length;k++){if(A=y[k],E=A._gsap||_s(y)[k]._gsap,t._ptLookup[k]=O={},Sr[E.id]&&he.length&&_n(),z=w===y?k:w.indexOf(A),L&&(V=new L).init(A,U||j,t,z,w)!==!1&&(t._pt=P=new wt(t._pt,A,V.name,0,1,V.render,V,0,V.priority),V._props.forEach(function(X){O[X]=P}),V.priority&&(R=1)),!L||U)for(T in j)St[T]&&(V=ql(T,j,t,z,A,w))?V.priority&&(R=1):O[T]=P=Ss.call(t,A,T,"get",j[T],z,w,0,r.stringFilter);t._op&&t._op[k]&&t.kill(A,t._op[k]),x&&t._pt&&(ae=t,Y.killTweensOf(A,O,t.globalTime(i)),F=!t.parent,ae=0),t._pt&&l&&(Sr[E.id]=1)}R&&ic(t),t._onInit&&t._onInit(t)}t._onUpdate=u,t._initted=(!t._op||t._pt)&&!F,h&&i<=0&&b.render(Vt,!0,!0)},mm=function(t,i,n,r,s,o,a,l){var u=(t._pt&&t._ptCache||(t._ptCache={}))[i],c,d,h,m;if(!u)for(u=t._ptCache[i]=[],h=t._ptLookup,m=t._targets.length;m--;){if(c=h[m][i],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==i&&c.fp!==i;)c=c._next;if(!c)return Mr=1,t.vars[i]="+=0",ks(t,a),Mr=0,l?Vi(i+" not eligible for reset. Try splitting into individual properties"):1;u.push(c)}for(m=u.length;m--;)d=u[m],c=d._pt||d,c.s=(r||r===0)&&!s?r:c.s+(r||0)+o*c.c,c.c=n-c.s,d.e&&(d.e=tt(n)+ht(d.e)),d.b&&(d.b=c.s+ht(d.b))},gm=function(t,i){var n=t[0]?Ve(t[0]).harness:0,r=n&&n.aliases,s,o,a,l;if(!r)return i;s=ai({},i);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},ym=function(t,i,n,r){var s=i.ease||r||"power1.inOut",o,a;if(ft(i))a=n[t]||(n[t]=[]),i.forEach(function(l,u){return a.push({t:u/(i.length-1)*100,v:l,e:s})});else for(o in i)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:i[o],e:s})},ji=function(t,i,n,r,s){return J(t)?t.call(i,n,r,s):at(t)&&~t.indexOf("random(")?Ii(t):t},Zl=bs+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Jl={};vt(Zl+",id,stagger,delay,duration,paused,scrollTrigger",function(e){return Jl[e]=1});var it=(function(e){vl(t,e);function t(n,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=e.call(this,o?r:Ci(r))||this;var l=a.vars,u=l.duration,c=l.delay,d=l.immediateRender,h=l.stagger,m=l.overwrite,g=l.keyframes,p=l.defaults,y=l.scrollTrigger,v=r.parent||Y,w=(ft(n)||bl(n)?ne(n[0]):"length"in r)?[n]:Ot(n),x,b,_,j,k,T,P,A;if(a._targets=w.length?_s(w):Vi("GSAP target "+n+" not found. https://gsap.com",!jt.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=m,g||h||Qi(u)||Qi(c)){r=a.vars;var R=r.easeReverse||r.yoyoEase;if(x=a.timeline=new yt({data:"nested",defaults:p||{},targets:v&&v.data==="nested"?v.vars.targets:w}),x.kill(),x.parent=x._dp=Jt(a),x._start=0,h||Qi(u)||Qi(c)){if(j=w.length,P=h&&zl(h),qt(h))for(k in h)~Zl.indexOf(k)&&(A||(A={}),A[k]=h[k]);for(b=0;b<j;b++)_=Tn(r,Jl),_.stagger=0,R&&(_.easeReverse=R),A&&ai(_,A),T=w[b],_.duration=+ji(u,Jt(a),b,T,w),_.delay=(+ji(c,Jt(a),b,T,w)||0)-a._delay,!h&&j===1&&_.delay&&(a._delay=c=_.delay,a._start+=c,_.delay=0),x.to(T,_,P?P(b,T,w):0),x._ease=B.none;x.duration()?u=c=0:a.timeline=0}else if(g){Ci(Dt(x.vars.defaults,{ease:"none"})),x._ease=Ie(g.ease||r.ease||"none");var E=0,L,V,O;if(ft(g))g.forEach(function(z){return x.to(w,z,">")}),x.duration();else{_={};for(k in g)k==="ease"||k==="easeEach"||ym(k,g[k],_,g.easeEach);for(k in _)for(L=_[k].sort(function(z,U){return z.t-U.t}),E=0,b=0;b<L.length;b++)V=L[b],O={ease:V.e,duration:(V.t-(b?L[b-1].t:0))/100*u},O[k]=V.v,x.to(w,O,E),E+=O.duration;x.duration()<u&&x.to({},{duration:u-x.duration()})}}u||a.duration(u=x.duration())}else a.timeline=0;return m===!0&&!ms&&(ae=Jt(a),Y.killTweensOf(w),ae=0),Ht(v,Jt(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(d||!u&&!g&&a._start===K(v._time)&&xt(d)&&Hp(Jt(a))&&v.data!=="nested")&&(a._tTime=-N,a.render(Math.max(0,-c)||0)),y&&Ll(Jt(a),y),a}var i=t.prototype;return i.render=function(r,s,o){var a=this._time,l=this._tDur,u=this._dur,c=r<0,d=r>l-N&&!c?l:r<N?0:r,h,m,g,p,y,v,w,x;if(!u)Yp(this,r,s,o);else if(d!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(h=d,x=this.timeline,this._repeat){if(p=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(p*100+r,s,o);if(h=K(d%p),d===l?(g=this._repeat,h=u):(y=K(d/p),g=~~y,g&&g===y?(h=u,g--):h>u&&(h=u)),v=this._yoyo&&g&1,v&&(h=u-h),y=li(this._tTime,p),h===a&&!o&&this._initted&&g===y)return this._tTime=d,this;g!==y&&this.vars.repeatRefresh&&!v&&!this._lock&&h!==p&&this._initted&&(this._lock=o=1,this.render(K(p*g),!0).invalidate()._lock=0)}if(!this._initted){if(Vl(this,c?r:h,o,s,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==y))return this;if(u!==this._dur)return this.render(r,s,o)}if(this._rEase){var b=h<a;if(b!==this._inv){var _=b?a:u-a;this._inv=b,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=_?(b?-1:1)/_:0,this._invScale=b?-this.ratio:1-this.ratio,this._invEase=b?this._rEase:this._ease}this.ratio=w=this._invRatio+this._invScale*this._invEase((h-this._invTime)*this._invRecip)}else this.ratio=w=this._ease(h/u);if(this._from&&(this.ratio=w=1-w),this._tTime=d,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&d&&!s&&!y&&(Ct(this,"onStart"),this._tTime!==d))return this;for(m=this._pt;m;)m.r(w,m.d),m=m._next;x&&x.render(r<0?r:x._dur*x._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(c&&kr(this,r,s,o),Ct(this,"onUpdate")),this._repeat&&g!==y&&this.vars.onRepeat&&!s&&this.parent&&Ct(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(c&&!this._onUpdate&&kr(this,r,!0,!0),(r||!u)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&pe(this,1),!s&&!(c&&!a)&&(d||a||v)&&(Ct(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},i.targets=function(){return this._targets},i.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),e.prototype.invalidate.call(this,r)},i.resetTo=function(r,s,o,a,l){zi||Pt.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||ks(this,u),c=this._ease(u/this._dur),mm(this,r,s,o,a,c,u,l)?this.resetTo(r,s,o,a,1):(Un(this,0),this.parent||Dl(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},i.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Ti(this):this.scrollTrigger&&this.scrollTrigger.kill(!!ut),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,ae&&ae.vars.overwrite!==!0)._first||Ti(this),this.parent&&o!==this.timeline.totalDuration()&&ci(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Ot(r):a,u=this._ptLookup,c=this._pt,d,h,m,g,p,y,v;if((!s||s==="all")&&Wp(a,l))return s==="all"&&(this._pt=0),Ti(this);for(d=this._op=this._op||[],s!=="all"&&(at(s)&&(p={},vt(s,function(w){return p[w]=1}),s=p),s=gm(a,s)),v=a.length;v--;)if(~l.indexOf(a[v])){h=u[v],s==="all"?(d[v]=s,g=h,m={}):(m=d[v]=d[v]||{},g=s);for(p in g)y=h&&h[p],y&&((!("kill"in y.d)||y.d.kill(p)===!0)&&Fn(this,y,"_pt"),delete h[p]),m!=="all"&&(m[p]=1)}return this._initted&&!this._pt&&c&&Ti(this),this},t.to=function(r,s){return new t(r,s,arguments[2])},t.from=function(r,s){return Ai(1,arguments)},t.delayedCall=function(r,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(r,s,o){return Ai(2,arguments)},t.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(r,s)},t.killTweensOf=function(r,s,o){return Y.killTweensOf(r,s,o)},t})(Fi);Dt(it.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});vt("staggerTo,staggerFrom,staggerFromTo",function(e){it[e]=function(){var t=new yt,i=Cr.call(arguments,0);return i.splice(e==="staggerFromTo"?5:4,0,0),t[e].apply(t,i)}});var Ps=function(t,i,n){return t[i]=n},Ql=function(t,i,n){return t[i](n)},xm=function(t,i,n,r){return t[i](r.fp,n)},vm=function(t,i,n){return t.setAttribute(i,n)},Cs=function(t,i){return J(t[i])?Ql:gs(t[i])&&t.setAttribute?vm:Ps},tc=function(t,i){return i.set(i.t,i.p,Math.round((i.s+i.c*t)*1e6)/1e6,i)},wm=function(t,i){return i.set(i.t,i.p,!!(i.s+i.c*t),i)},ec=function(t,i){var n=i._pt,r="";if(!t&&i.b)r=i.b;else if(t===1&&i.e)r=i.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+r,n=n._next;r+=i.c}i.set(i.t,i.p,r,i)},As=function(t,i){for(var n=i._pt;n;)n.r(t,n.d),n=n._next},bm=function(t,i,n,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(t,i,n),s=o},_m=function(t){for(var i=this._pt,n,r;i;)r=i._next,i.p===t&&!i.op||i.op===t?Fn(this,i,"_pt"):i.dep||(n=1),i=r;return!n},Tm=function(t,i,n,r){r.mSet(t,i,r.m.call(r.tween,n,r.mt),r)},ic=function(t){for(var i=t._pt,n,r,s,o;i;){for(n=i._next,r=s;r&&r.pr>i.pr;)r=r._next;(i._prev=r?r._prev:o)?i._prev._next=i:s=i,(i._next=r)?r._prev=i:o=i,i=n}t._pt=s},wt=(function(){function e(i,n,r,s,o,a,l,u,c){this.t=n,this.s=s,this.c=o,this.p=r,this.r=a||tc,this.d=l||this,this.set=u||Ps,this.pr=c||0,this._next=i,i&&(i._prev=this)}var t=e.prototype;return t.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=Tm,this.m=n,this.mt=s,this.tween=r},e})();vt(bs+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(e){return ws[e]=1});Rt.TweenMax=Rt.TweenLite=it;Rt.TimelineLite=Rt.TimelineMax=yt;Y=new yt({sortChildren:!1,defaults:Li,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});jt.stringFilter=Hl;var ze=[],ln={},Sm=[],ko=0,km=0,ir=function(t){return(ln[t]||Sm).map(function(i){return i()})},Rr=function(){var t=Date.now(),i=[];t-ko>2&&(ir("matchMediaInit"),ze.forEach(function(n){var r=n.queries,s=n.conditions,o,a,l,u;for(a in r)o=Wt.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,u=1);u&&(n.revert(),l&&i.push(n))}),ir("matchMediaRevert"),i.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),ko=t,ir("matchMedia"))},nc=(function(){function e(i,n){this.selector=n&&Ar(n),this.data=[],this._r=[],this.isReverted=!1,this.id=km++,i&&this.add(i)}var t=e.prototype;return t.add=function(n,r,s){J(n)&&(s=r,r=n,n=J);var o=this,a=function(){var u=H,c=o.selector,d;return u&&u!==o&&u.data.push(o),s&&(o.selector=Ar(s)),H=o,d=r.apply(o,arguments),J(d)&&o._r.push(d),H=u,o.selector=c,o.isReverted=!1,d};return o.last=a,n===J?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var r=H;H=null,n(this),H=r},t.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof e?n.push.apply(n,r.getTweens()):r instanceof it&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,r){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,u;l--;)u=s.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}));for(a.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,d){return d.g-c.g||-1/0}).forEach(function(c){return c.t.revert(n)}),l=s.data.length;l--;)u=s.data[l],u instanceof yt?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof it)&&u.revert&&u.revert(n);s._r.forEach(function(c){return c(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=ze.length;o--;)ze[o].id===this.id&&ze.splice(o,1)},t.revert=function(n){this.kill(n||{})},e})(),Pm=(function(){function e(i){this.contexts=[],this.scope=i,H&&H.data.push(this)}var t=e.prototype;return t.add=function(n,r,s){qt(n)||(n={matches:n});var o=new nc(0,s||this.scope),a=o.conditions={},l,u,c;H&&!o.selector&&(o.selector=H.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=n;for(u in n)u==="all"?c=1:(l=Wt.matchMedia(n[u]),l&&(ze.indexOf(o)<0&&ze.push(o),(a[u]=l.matches)&&(c=1),l.addListener?l.addListener(Rr):l.addEventListener("change",Rr)));return c&&r(o,function(d){return o.add(null,d)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},e})(),kn={registerPlugin:function(){for(var t=arguments.length,i=new Array(t),n=0;n<t;n++)i[n]=arguments[n];i.forEach(function(r){return Gl(r)})},timeline:function(t){return new yt(t)},getTweensOf:function(t,i){return Y.getTweensOf(t,i)},getProperty:function(t,i,n,r){at(t)&&(t=Ot(t)[0]);var s=Ve(t||{}).get,o=n?Rl:Ml;return n==="native"&&(n=""),t&&(i?o((St[i]&&St[i].get||s)(t,i,n,r)):function(a,l,u){return o((St[a]&&St[a].get||s)(t,a,l,u))})},quickSetter:function(t,i,n){if(t=Ot(t),t.length>1){var r=t.map(function(c){return _t.quickSetter(c,i,n)}),s=r.length;return function(c){for(var d=s;d--;)r[d](c)}}t=t[0]||{};var o=St[i],a=Ve(t),l=a.harness&&(a.harness.aliases||{})[i]||i,u=o?function(c){var d=new o;qe._pt=0,d.init(t,n?c+n:c,qe,0,[t]),d.render(1,d),qe._pt&&As(1,qe)}:a.set(t,l);return o?u:function(c){return u(t,l,n?c+n:c,a,1)}},quickTo:function(t,i,n){var r,s=_t.to(t,Dt((r={},r[i]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),o=function(l,u,c){return s.resetTo(i,l,u,c)};return o.tween=s,o},isTweening:function(t){return Y.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Ie(t.ease,Li.ease)),wo(Li,t||{})},config:function(t){return wo(jt,t||{})},registerEffect:function(t){var i=t.name,n=t.effect,r=t.plugins,s=t.defaults,o=t.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!St[a]&&!Rt[a]&&Vi(i+" effect requires "+a+" plugin.")}),Jn[i]=function(a,l,u){return n(Ot(a),Dt(l||{},s),u)},o&&(yt.prototype[i]=function(a,l,u){return this.add(Jn[i](a,qt(l)?l:(u=l)&&{},this),u)})},registerEase:function(t,i){B[t]=Ie(i)},parseEase:function(t,i){return arguments.length?Ie(t,i):B},getById:function(t){return Y.getById(t)},exportRoot:function(t,i){t===void 0&&(t={});var n=new yt(t),r,s;for(n.smoothChildTiming=xt(t.smoothChildTiming),Y.remove(n),n._dp=0,n._time=n._tTime=Y._time,r=Y._first;r;)s=r._next,(i||!(!r._dur&&r instanceof it&&r.vars.onComplete===r._targets[0]))&&Ht(n,r,r._start-r._delay),r=s;return Ht(Y,n,0),n},context:function(t,i){return t?new nc(t,i):H},matchMedia:function(t){return new Pm(t)},matchMediaRefresh:function(){return ze.forEach(function(t){var i=t.conditions,n,r;for(r in i)i[r]&&(i[r]=!1,n=1);n&&t.revert()})||Rr()},addEventListener:function(t,i){var n=ln[t]||(ln[t]=[]);~n.indexOf(i)||n.push(i)},removeEventListener:function(t,i){var n=ln[t],r=n&&n.indexOf(i);r>=0&&n.splice(r,1)},utils:{wrap:nm,wrapYoyo:rm,distribute:zl,random:Bl,snap:Fl,normalize:im,getUnit:ht,clamp:Jp,splitColor:Wl,toArray:Ot,selector:Ar,mapRange:$l,pipe:tm,unitize:em,interpolate:sm,shuffle:Il},install:kl,effects:Jn,ticker:Pt,updateRoot:yt.updateRoot,plugins:St,globalTimeline:Y,core:{PropTween:wt,globals:Pl,Tween:it,Timeline:yt,Animation:Fi,getCache:Ve,_removeLinkedListItem:Fn,reverting:function(){return ut},context:function(t){return t&&H&&(H.data.push(t),t._ctx=H),H},suppressOverwrites:function(t){return ms=t}}};vt("to,from,fromTo,delayedCall,set,killTweensOf",function(e){return kn[e]=it[e]});Pt.add(yt.updateRoot);qe=kn.to({},{duration:0});var Cm=function(t,i){for(var n=t._pt;n&&n.p!==i&&n.op!==i&&n.fp!==i;)n=n._next;return n},Am=function(t,i){var n=t._targets,r,s,o;for(r in i)for(s=n.length;s--;)o=t._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=Cm(o,r)),o&&o.modifier&&o.modifier(i[r],t,n[s],r))},nr=function(t,i){return{name:t,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,u;if(at(s)&&(l={},vt(s,function(c){return l[c]=1}),s=l),i){l={};for(u in s)l[u]=i(s[u]);s=l}Am(a,s)}}}},_t=kn.registerPlugin({name:"attr",init:function(t,i,n,r,s){var o,a,l;this.tween=n;for(o in i)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",i[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,i){for(var n=i._pt;n;)ut?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,i){for(var n=i.length;n--;)this.add(t,n,t[n]||0,i[n],0,0,0,0,0,1)}},nr("roundProps",jr),nr("modifiers"),nr("snap",Fl))||kn;it.version=yt.version=_t.version="3.15.0";Sl=1;ys()&&ui();B.Power0;B.Power1;B.Power2;B.Power3;B.Power4;B.Linear;B.Quad;B.Cubic;B.Quart;B.Quint;B.Strong;B.Elastic;B.Back;B.SteppedEase;B.Bounce;B.Sine;B.Expo;B.Circ;var Po,le,ii,js,Re,Co,Ms,jm=function(){return typeof window<"u"},re={},Ae=180/Math.PI,ni=Math.PI/180,Xe=Math.atan2,Ao=1e8,Rs=/([A-Z])/g,Mm=/(left|right|width|margin|padding|x)/i,Rm=/[\s,\(]\S/,Kt={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Dr=function(t,i){return i.set(i.t,i.p,Math.round((i.s+i.c*t)*1e4)/1e4+i.u,i)},Dm=function(t,i){return i.set(i.t,i.p,t===1?i.e:Math.round((i.s+i.c*t)*1e4)/1e4+i.u,i)},Em=function(t,i){return i.set(i.t,i.p,t?Math.round((i.s+i.c*t)*1e4)/1e4+i.u:i.b,i)},Lm=function(t,i){return i.set(i.t,i.p,t===1?i.e:t?Math.round((i.s+i.c*t)*1e4)/1e4+i.u:i.b,i)},Vm=function(t,i){var n=i.s+i.c*t;i.set(i.t,i.p,~~(n+(n<0?-.5:.5))+i.u,i)},rc=function(t,i){return i.set(i.t,i.p,t?i.e:i.b,i)},sc=function(t,i){return i.set(i.t,i.p,t!==1?i.b:i.e,i)},Om=function(t,i,n){return t.style[i]=n},Im=function(t,i,n){return t.style.setProperty(i,n)},zm=function(t,i,n){return t._gsap[i]=n},Fm=function(t,i,n){return t._gsap.scaleX=t._gsap.scaleY=n},Bm=function(t,i,n,r,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},Um=function(t,i,n,r,s){var o=t._gsap;o[i]=n,o.renderTransform(s,o)},q="transform",bt=q+"Origin",$m=function e(t,i){var n=this,r=this.target,s=r.style,o=r._gsap;if(t in re&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Kt[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=Qt(r,a)}):this.tfm[t]=o.x?o[t]:Qt(r,t),t===bt&&(this.tfm.zOrigin=o.zOrigin);else return Kt.transform.split(",").forEach(function(a){return e.call(n,a,i)});if(this.props.indexOf(q)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(bt,i,"")),t=q}(s||i)&&this.props.push(t,i,s[t])},oc=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Nm=function(){var t=this.props,i=this.target,n=i.style,r=i._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?i[t[s]](t[s+2]):i[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Rs,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),i.setAttribute("data-svg-origin",this.svgo||"")),s=Ms(),(!s||!s.isStart)&&!n[q]&&(oc(n),r.zOrigin&&n[bt]&&(n[bt]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},ac=function(t,i){var n={target:t,props:[],revert:Nm,save:$m};return t._gsap||_t.core.getCache(t),i&&t.style&&t.nodeType&&i.split(",").forEach(function(r){return n.save(r)}),n},lc,Er=function(t,i){var n=le.createElementNS?le.createElementNS((i||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):le.createElement(t);return n&&n.style?n:le.createElement(t)},At=function e(t,i,n){var r=getComputedStyle(t);return r[i]||r.getPropertyValue(i.replace(Rs,"-$1").toLowerCase())||r.getPropertyValue(i)||!n&&e(t,di(i)||i,1)||""},jo="O,Moz,ms,Ms,Webkit".split(","),di=function(t,i,n){var r=i||Re,s=r.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(jo[o]+t in s););return o<0?null:(o===3?"ms":o>=0?jo[o]:"")+t},Lr=function(){jm()&&window.document&&(Po=window,le=Po.document,ii=le.documentElement,Re=Er("div")||{style:{}},Er("div"),q=di(q),bt=q+"Origin",Re.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",lc=!!di("perspective"),Ms=_t.core.reverting,js=1)},Mo=function(t){var i=t.ownerSVGElement,n=Er("svg",i&&i.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=t.cloneNode(!0),s;r.style.display="block",n.appendChild(r),ii.appendChild(n);try{s=r.getBBox()}catch{}return n.removeChild(r),ii.removeChild(n),s},Ro=function(t,i){for(var n=i.length;n--;)if(t.hasAttribute(i[n]))return t.getAttribute(i[n])},cc=function(t){var i,n;try{i=t.getBBox()}catch{i=Mo(t),n=1}return i&&(i.width||i.height)||n||(i=Mo(t)),i&&!i.width&&!i.x&&!i.y?{x:+Ro(t,["x","cx","x1"])||0,y:+Ro(t,["y","cy","y1"])||0,width:0,height:0}:i},uc=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&cc(t))},me=function(t,i){if(i){var n=t.style,r;i in re&&i!==bt&&(i=q),n.removeProperty?(r=i.substr(0,2),(r==="ms"||i.substr(0,6)==="webkit")&&(i="-"+i),n.removeProperty(r==="--"?i:i.replace(Rs,"-$1").toLowerCase())):n.removeAttribute(i)}},ce=function(t,i,n,r,s,o){var a=new wt(t._pt,i,n,0,1,o?sc:rc);return t._pt=a,a.b=r,a.e=s,t._props.push(n),a},Do={deg:1,rad:1,turn:1},Gm={grid:1,flex:1},ge=function e(t,i,n,r){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Re.style,l=Mm.test(i),u=t.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),d=100,h=r==="px",m=r==="%",g,p,y,v;if(r===o||!s||Do[r]||Do[o])return s;if(o!=="px"&&!h&&(s=e(t,i,n,"px")),v=t.getCTM&&uc(t),(m||o==="%")&&(re[i]||~i.indexOf("adius")))return g=v?t.getBBox()[l?"width":"height"]:t[c],tt(m?s/g*d:s/100*g);if(a[l?"width":"height"]=d+(h?o:r),p=r!=="rem"&&~i.indexOf("adius")||r==="em"&&t.appendChild&&!u?t:t.parentNode,v&&(p=(t.ownerSVGElement||{}).parentNode),(!p||p===le||!p.appendChild)&&(p=le.body),y=p._gsap,y&&m&&y.width&&l&&y.time===Pt.time&&!y.uncache)return tt(s/y.width*d);if(m&&(i==="height"||i==="width")){var w=t.style[i];t.style[i]=d+r,g=t[c],w?t.style[i]=w:me(t,i)}else(m||o==="%")&&!Gm[At(p,"display")]&&(a.position=At(t,"position")),p===t&&(a.position="static"),p.appendChild(Re),g=Re[c],p.removeChild(Re),a.position="absolute";return l&&m&&(y=Ve(p),y.time=Pt.time,y.width=p[c]),tt(h?g*s/d:g&&s?d/g*s:0)},Qt=function(t,i,n,r){var s;return js||Lr(),i in Kt&&i!=="transform"&&(i=Kt[i],~i.indexOf(",")&&(i=i.split(",")[0])),re[i]&&i!=="transform"?(s=Ui(t,r),s=i!=="transformOrigin"?s[i]:s.svg?s.origin:Cn(At(t,bt))+" "+s.zOrigin+"px"):(s=t.style[i],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Pn[i]&&Pn[i](t,i,n)||At(t,i)||Al(t,i)||(i==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?ge(t,i,s,n)+n:s},Wm=function(t,i,n,r){if(!n||n==="none"){var s=di(i,t,1),o=s&&At(t,s,1);o&&o!==n?(i=s,n=o):i==="borderColor"&&(n=At(t,"borderTopColor"))}var a=new wt(this._pt,t.style,i,0,1,ec),l=0,u=0,c,d,h,m,g,p,y,v,w,x,b,_;if(a.b=n,a.e=r,n+="",r+="",r.substring(0,6)==="var(--"&&(r=At(t,r.substring(4,r.indexOf(")")))),r==="auto"&&(p=t.style[i],t.style[i]=r,r=At(t,i)||r,p?t.style[i]=p:me(t,i)),c=[n,r],Hl(c),n=c[0],r=c[1],h=n.match(Ye)||[],_=r.match(Ye)||[],_.length){for(;d=Ye.exec(r);)y=d[0],w=r.substring(l,d.index),g?g=(g+1)%5:(w.substr(-5)==="rgba("||w.substr(-5)==="hsla(")&&(g=1),y!==(p=h[u++]||"")&&(m=parseFloat(p)||0,b=p.substr((m+"").length),y.charAt(1)==="="&&(y=ei(m,y)+b),v=parseFloat(y),x=y.substr((v+"").length),l=Ye.lastIndex-x.length,x||(x=x||jt.units[i]||b,l===r.length&&(r+=x,a.e+=x)),b!==x&&(m=ge(t,i,p,x)||0),a._pt={_next:a._pt,p:w||u===1?w:",",s:m,c:v-m,m:g&&g<4||i==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=i==="display"&&r==="none"?sc:rc;return Tl.test(r)&&(a.e=0),this._pt=a,a},Eo={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Xm=function(t){var i=t.split(" "),n=i[0],r=i[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(t=n,n=r,r=t),i[0]=Eo[n]||n,i[1]=Eo[r]||r,i.join(" ")},Hm=function(t,i){if(i.tween&&i.tween._time===i.tween._dur){var n=i.t,r=n.style,s=i.u,o=n._gsap,a,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)a=s[u],re[a]&&(l=1,a=a==="transformOrigin"?bt:q),me(n,a);l&&(me(n,q),o&&(o.svg&&n.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Ui(n,1),o.uncache=1,oc(r)))}},Pn={clearProps:function(t,i,n,r,s){if(s.data!=="isFromStart"){var o=t._pt=new wt(t._pt,i,n,0,0,Hm);return o.u=r,o.pr=-10,o.tween=s,t._props.push(n),1}}},Bi=[1,0,0,1,0,0],dc={},hc=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Lo=function(t){var i=At(t,q);return hc(i)?Bi:i.substr(7).match(_l).map(tt)},Ds=function(t,i){var n=t._gsap||Ve(t),r=t.style,s=Lo(t),o,a,l,u;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Bi:s):(s===Bi&&!t.offsetParent&&t!==ii&&!n.svg&&(l=r.display,r.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(u=1,a=t.nextElementSibling,ii.appendChild(t)),s=Lo(t),l?r.display=l:me(t,"display"),u&&(a?o.insertBefore(t,a):o?o.appendChild(t):ii.removeChild(t))),i&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Vr=function(t,i,n,r,s,o){var a=t._gsap,l=s||Ds(t,!0),u=a.xOrigin||0,c=a.yOrigin||0,d=a.xOffset||0,h=a.yOffset||0,m=l[0],g=l[1],p=l[2],y=l[3],v=l[4],w=l[5],x=i.split(" "),b=parseFloat(x[0])||0,_=parseFloat(x[1])||0,j,k,T,P;n?l!==Bi&&(k=m*y-g*p)&&(T=b*(y/k)+_*(-p/k)+(p*w-y*v)/k,P=b*(-g/k)+_*(m/k)-(m*w-g*v)/k,b=T,_=P):(j=cc(t),b=j.x+(~x[0].indexOf("%")?b/100*j.width:b),_=j.y+(~(x[1]||x[0]).indexOf("%")?_/100*j.height:_)),r||r!==!1&&a.smooth?(v=b-u,w=_-c,a.xOffset=d+(v*m+w*p)-v,a.yOffset=h+(v*g+w*y)-w):a.xOffset=a.yOffset=0,a.xOrigin=b,a.yOrigin=_,a.smooth=!!r,a.origin=i,a.originIsAbsolute=!!n,t.style[bt]="0px 0px",o&&(ce(o,a,"xOrigin",u,b),ce(o,a,"yOrigin",c,_),ce(o,a,"xOffset",d,a.xOffset),ce(o,a,"yOffset",h,a.yOffset)),t.setAttribute("data-svg-origin",b+" "+_)},Ui=function(t,i){var n=t._gsap||new Yl(t);if("x"in n&&!i&&!n.uncache)return n;var r=t.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),u=At(t,bt)||"0",c,d,h,m,g,p,y,v,w,x,b,_,j,k,T,P,A,R,E,L,V,O,z,U,F,X,D,I,Q,dt,Tt,be;return c=d=h=p=y=v=w=x=b=0,m=g=1,n.svg=!!(t.getCTM&&uc(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[q]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[q]!=="none"?l[q]:"")),r.scale=r.rotate=r.translate="none"),k=Ds(t,n.svg),n.svg&&(n.uncache?(F=t.getBBox(),u=n.xOrigin-F.x+"px "+(n.yOrigin-F.y)+"px",U=""):U=!i&&t.getAttribute("data-svg-origin"),Vr(t,U||u,!!U||n.originIsAbsolute,n.smooth!==!1,k)),_=n.xOrigin||0,j=n.yOrigin||0,k!==Bi&&(R=k[0],E=k[1],L=k[2],V=k[3],c=O=k[4],d=z=k[5],k.length===6?(m=Math.sqrt(R*R+E*E),g=Math.sqrt(V*V+L*L),p=R||E?Xe(E,R)*Ae:0,w=L||V?Xe(L,V)*Ae+p:0,w&&(g*=Math.abs(Math.cos(w*ni))),n.svg&&(c-=_-(_*R+j*L),d-=j-(_*E+j*V))):(be=k[6],dt=k[7],D=k[8],I=k[9],Q=k[10],Tt=k[11],c=k[12],d=k[13],h=k[14],T=Xe(be,Q),y=T*Ae,T&&(P=Math.cos(-T),A=Math.sin(-T),U=O*P+D*A,F=z*P+I*A,X=be*P+Q*A,D=O*-A+D*P,I=z*-A+I*P,Q=be*-A+Q*P,Tt=dt*-A+Tt*P,O=U,z=F,be=X),T=Xe(-L,Q),v=T*Ae,T&&(P=Math.cos(-T),A=Math.sin(-T),U=R*P-D*A,F=E*P-I*A,X=L*P-Q*A,Tt=V*A+Tt*P,R=U,E=F,L=X),T=Xe(E,R),p=T*Ae,T&&(P=Math.cos(T),A=Math.sin(T),U=R*P+E*A,F=O*P+z*A,E=E*P-R*A,z=z*P-O*A,R=U,O=F),y&&Math.abs(y)+Math.abs(p)>359.9&&(y=p=0,v=180-v),m=tt(Math.sqrt(R*R+E*E+L*L)),g=tt(Math.sqrt(z*z+be*be)),T=Xe(O,z),w=Math.abs(T)>2e-4?T*Ae:0,b=Tt?1/(Tt<0?-Tt:Tt):0),n.svg&&(U=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!hc(At(t,q)),U&&t.setAttribute("transform",U))),Math.abs(w)>90&&Math.abs(w)<270&&(s?(m*=-1,w+=p<=0?180:-180,p+=p<=0?180:-180):(g*=-1,w+=w<=0?180:-180)),i=i||n.uncache,n.x=c-((n.xPercent=c&&(!i&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-c)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=d-((n.yPercent=d&&(!i&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-d)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=h+o,n.scaleX=tt(m),n.scaleY=tt(g),n.rotation=tt(p)+a,n.rotationX=tt(y)+a,n.rotationY=tt(v)+a,n.skewX=w+a,n.skewY=x+a,n.transformPerspective=b+o,(n.zOrigin=parseFloat(u.split(" ")[2])||!i&&n.zOrigin||0)&&(r[bt]=Cn(u)),n.xOffset=n.yOffset=0,n.force3D=jt.force3D,n.renderTransform=n.svg?Ym:lc?fc:Km,n.uncache=0,n},Cn=function(t){return(t=t.split(" "))[0]+" "+t[1]},rr=function(t,i,n){var r=ht(i);return tt(parseFloat(i)+parseFloat(ge(t,"x",n+"px",r)))+r},Km=function(t,i){i.z="0px",i.rotationY=i.rotationX="0deg",i.force3D=0,fc(t,i)},Te="0deg",bi="0px",Se=") ",fc=function(t,i){var n=i||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,u=n.rotation,c=n.rotationY,d=n.rotationX,h=n.skewX,m=n.skewY,g=n.scaleX,p=n.scaleY,y=n.transformPerspective,v=n.force3D,w=n.target,x=n.zOrigin,b="",_=v==="auto"&&t&&t!==1||v===!0;if(x&&(d!==Te||c!==Te)){var j=parseFloat(c)*ni,k=Math.sin(j),T=Math.cos(j),P;j=parseFloat(d)*ni,P=Math.cos(j),o=rr(w,o,k*P*-x),a=rr(w,a,-Math.sin(j)*-x),l=rr(w,l,T*P*-x+x)}y!==bi&&(b+="perspective("+y+Se),(r||s)&&(b+="translate("+r+"%, "+s+"%) "),(_||o!==bi||a!==bi||l!==bi)&&(b+=l!==bi||_?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Se),u!==Te&&(b+="rotate("+u+Se),c!==Te&&(b+="rotateY("+c+Se),d!==Te&&(b+="rotateX("+d+Se),(h!==Te||m!==Te)&&(b+="skew("+h+", "+m+Se),(g!==1||p!==1)&&(b+="scale("+g+", "+p+Se),w.style[q]=b||"translate(0, 0)"},Ym=function(t,i){var n=i||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,u=n.skewX,c=n.skewY,d=n.scaleX,h=n.scaleY,m=n.target,g=n.xOrigin,p=n.yOrigin,y=n.xOffset,v=n.yOffset,w=n.forceCSS,x=parseFloat(o),b=parseFloat(a),_,j,k,T,P;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=ni,u*=ni,_=Math.cos(l)*d,j=Math.sin(l)*d,k=Math.sin(l-u)*-h,T=Math.cos(l-u)*h,u&&(c*=ni,P=Math.tan(u-c),P=Math.sqrt(1+P*P),k*=P,T*=P,c&&(P=Math.tan(c),P=Math.sqrt(1+P*P),_*=P,j*=P)),_=tt(_),j=tt(j),k=tt(k),T=tt(T)):(_=d,T=h,j=k=0),(x&&!~(o+"").indexOf("px")||b&&!~(a+"").indexOf("px"))&&(x=ge(m,"x",o,"px"),b=ge(m,"y",a,"px")),(g||p||y||v)&&(x=tt(x+g-(g*_+p*k)+y),b=tt(b+p-(g*j+p*T)+v)),(r||s)&&(P=m.getBBox(),x=tt(x+r/100*P.width),b=tt(b+s/100*P.height)),P="matrix("+_+","+j+","+k+","+T+","+x+","+b+")",m.setAttribute("transform",P),w&&(m.style[q]=P)},qm=function(t,i,n,r,s){var o=360,a=at(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Ae:1),u=l-r,c=r+u+"deg",d,h;return a&&(d=s.split("_")[1],d==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),d==="cw"&&u<0?u=(u+o*Ao)%o-~~(u/o)*o:d==="ccw"&&u>0&&(u=(u-o*Ao)%o-~~(u/o)*o)),t._pt=h=new wt(t._pt,i,n,r,u,Dm),h.e=c,h.u="deg",t._props.push(n),h},Vo=function(t,i){for(var n in i)t[n]=i[n];return t},Zm=function(t,i,n){var r=Vo({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,u,c,d,h,m,g;r.svg?(u=n.getAttribute("transform"),n.setAttribute("transform",""),o[q]=i,a=Ui(n,1),me(n,q),n.setAttribute("transform",u)):(u=getComputedStyle(n)[q],o[q]=i,a=Ui(n,1),o[q]=u);for(l in re)u=r[l],c=a[l],u!==c&&s.indexOf(l)<0&&(m=ht(u),g=ht(c),d=m!==g?ge(n,l,u,g):parseFloat(u),h=parseFloat(c),t._pt=new wt(t._pt,a,l,d,h-d,Dr),t._pt.u=g||0,t._props.push(l));Vo(a,r)};vt("padding,margin,Width,Radius",function(e,t){var i="Top",n="Right",r="Bottom",s="Left",o=(t<3?[i,n,r,s]:[i+s,i+n,r+n,r+s]).map(function(a){return t<2?e+a:"border"+a+e});Pn[t>1?"border"+e:e]=function(a,l,u,c,d){var h,m;if(arguments.length<4)return h=o.map(function(g){return Qt(a,g,u)}),m=h.join(" "),m.split(h[0]).length===5?h[0]:m;h=(c+"").split(" "),m={},o.forEach(function(g,p){return m[g]=h[p]=h[p]||h[(p-1)/2|0]}),a.init(l,m,d)}});var pc={name:"css",register:Lr,targetTest:function(t){return t.style&&t.nodeType},init:function(t,i,n,r,s){var o=this._props,a=t.style,l=n.vars.startAt,u,c,d,h,m,g,p,y,v,w,x,b,_,j,k,T,P;js||Lr(),this.styles=this.styles||ac(t),T=this.styles.props,this.tween=n;for(p in i)if(p!=="autoRound"&&(c=i[p],!(St[p]&&ql(p,i,n,r,t,s)))){if(m=typeof c,g=Pn[p],m==="function"&&(c=c.call(n,r,t,s),m=typeof c),m==="string"&&~c.indexOf("random(")&&(c=Ii(c)),g)g(this,t,p,c,n)&&(k=1);else if(p.substr(0,2)==="--")u=(getComputedStyle(t).getPropertyValue(p)+"").trim(),c+="",fe.lastIndex=0,fe.test(u)||(y=ht(u),v=ht(c),v?y!==v&&(u=ge(t,p,u,v)+v):y&&(c+=y)),this.add(a,"setProperty",u,c,r,s,0,0,p),o.push(p),T.push(p,0,a[p]);else if(m!=="undefined"){if(l&&p in l?(u=typeof l[p]=="function"?l[p].call(n,r,t,s):l[p],at(u)&&~u.indexOf("random(")&&(u=Ii(u)),ht(u+"")||u==="auto"||(u+=jt.units[p]||ht(Qt(t,p))||""),(u+"").charAt(1)==="="&&(u=Qt(t,p))):u=Qt(t,p),h=parseFloat(u),w=m==="string"&&c.charAt(1)==="="&&c.substr(0,2),w&&(c=c.substr(2)),d=parseFloat(c),p in Kt&&(p==="autoAlpha"&&(h===1&&Qt(t,"visibility")==="hidden"&&d&&(h=0),T.push("visibility",0,a.visibility),ce(this,a,"visibility",h?"inherit":"hidden",d?"inherit":"hidden",!d)),p!=="scale"&&p!=="transform"&&(p=Kt[p],~p.indexOf(",")&&(p=p.split(",")[0]))),x=p in re,x){if(this.styles.save(p),P=c,m==="string"&&c.substring(0,6)==="var(--"){if(c=At(t,c.substring(4,c.indexOf(")"))),c.substring(0,5)==="calc("){var A=t.style.perspective;t.style.perspective=c,c=At(t,"perspective"),A?t.style.perspective=A:me(t,"perspective")}d=parseFloat(c)}if(b||(_=t._gsap,_.renderTransform&&!i.parseTransform||Ui(t,i.parseTransform),j=i.smoothOrigin!==!1&&_.smooth,b=this._pt=new wt(this._pt,a,q,0,1,_.renderTransform,_,0,-1),b.dep=1),p==="scale")this._pt=new wt(this._pt,_,"scaleY",_.scaleY,(w?ei(_.scaleY,w+d):d)-_.scaleY||0,Dr),this._pt.u=0,o.push("scaleY",p),p+="X";else if(p==="transformOrigin"){T.push(bt,0,a[bt]),c=Xm(c),_.svg?Vr(t,c,0,j,0,this):(v=parseFloat(c.split(" ")[2])||0,v!==_.zOrigin&&ce(this,_,"zOrigin",_.zOrigin,v),ce(this,a,p,Cn(u),Cn(c)));continue}else if(p==="svgOrigin"){Vr(t,c,1,j,0,this);continue}else if(p in dc){qm(this,_,p,h,w?ei(h,w+c):c);continue}else if(p==="smoothOrigin"){ce(this,_,"smooth",_.smooth,c);continue}else if(p==="force3D"){_[p]=c;continue}else if(p==="transform"){Zm(this,c,t);continue}}else p in a||(p=di(p)||p);if(x||(d||d===0)&&(h||h===0)&&!Rm.test(c)&&p in a)y=(u+"").substr((h+"").length),d||(d=0),v=ht(c)||(p in jt.units?jt.units[p]:y),y!==v&&(h=ge(t,p,u,v)),this._pt=new wt(this._pt,x?_:a,p,h,(w?ei(h,w+d):d)-h,!x&&(v==="px"||p==="zIndex")&&i.autoRound!==!1?Vm:Dr),this._pt.u=v||0,x&&P!==c?(this._pt.b=u,this._pt.e=P,this._pt.r=Lm):y!==v&&v!=="%"&&(this._pt.b=u,this._pt.r=Em);else if(p in a)Wm.call(this,t,p,u,w?w+c:c);else if(p in t)this.add(t,p,u||t[p],w?w+c:c,r,s);else if(p!=="parseTransform"){vs(p,c);continue}x||(p in a?T.push(p,0,a[p]):typeof t[p]=="function"?T.push(p,2,t[p]()):T.push(p,1,u||t[p])),o.push(p)}}k&&ic(this)},render:function(t,i){if(i.tween._time||!Ms())for(var n=i._pt;n;)n.r(t,n.d),n=n._next;else i.styles.revert()},get:Qt,aliases:Kt,getSetter:function(t,i,n){var r=Kt[i];return r&&r.indexOf(",")<0&&(i=r),i in re&&i!==bt&&(t._gsap.x||Qt(t,"x"))?n&&Co===n?i==="scale"?Fm:zm:(Co=n||{})&&(i==="scale"?Bm:Um):t.style&&!gs(t.style[i])?Om:~i.indexOf("-")?Im:Cs(t,i)},core:{_removeProperty:me,_getMatrix:Ds}};_t.utils.checkPrefix=di;_t.core.getStyleSaver=ac;(function(e,t,i,n){var r=vt(e+","+t+","+i,function(s){re[s]=1});vt(t,function(s){jt.units[s]="deg",dc[s]=1}),Kt[r[13]]=e+","+t,vt(n,function(s){var o=s.split(":");Kt[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");vt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(e){jt.units[e]="px"});_t.registerPlugin(pc);var cn=_t.registerPlugin(pc)||_t;cn.core.Tween;const Es=S.createContext({});function Ls(e){const t=S.useRef(null);return t.current===null&&(t.current=e()),t.current}const Jm=typeof window<"u",mc=Jm?S.useLayoutEffect:S.useEffect,$n=S.createContext(null);function Vs(e,t){e.indexOf(t)===-1&&e.push(t)}function An(e,t){const i=e.indexOf(t);i>-1&&e.splice(i,1)}const Zt=(e,t,i)=>i>t?t:i<e?e:i;let Os=()=>{};const ye={},gc=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);function yc(e){return typeof e=="object"&&e!==null}const xc=e=>/^0[^.\s]+$/u.test(e);function vc(e){let t;return()=>(t===void 0&&(t=e()),t)}const zt=e=>e,Qm=(e,t)=>i=>t(e(i)),Ki=(...e)=>e.reduce(Qm),$i=(e,t,i)=>{const n=t-e;return n===0?1:(i-e)/n};class Is{constructor(){this.subscriptions=[]}add(t){return Vs(this.subscriptions,t),()=>An(this.subscriptions,t)}notify(t,i,n){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](t,i,n);else for(let s=0;s<r;s++){const o=this.subscriptions[s];o&&o(t,i,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Mt=e=>e*1e3,It=e=>e/1e3;function wc(e,t){return t?e*(1e3/t):0}const bc=(e,t,i)=>(((1-3*i+3*t)*e+(3*i-6*t))*e+3*t)*e,t0=1e-7,e0=12;function i0(e,t,i,n,r){let s,o,a=0;do o=t+(i-t)/2,s=bc(o,n,r)-e,s>0?i=o:t=o;while(Math.abs(s)>t0&&++a<e0);return o}function Yi(e,t,i,n){if(e===t&&i===n)return zt;const r=s=>i0(s,0,1,e,i);return s=>s===0||s===1?s:bc(r(s),t,n)}const _c=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Tc=e=>t=>1-e(1-t),Sc=Yi(.33,1.53,.69,.99),zs=Tc(Sc),kc=_c(zs),Pc=e=>e>=1?1:(e*=2)<1?.5*zs(e):.5*(2-Math.pow(2,-10*(e-1))),Fs=e=>1-Math.sin(Math.acos(e)),Cc=Tc(Fs),Ac=_c(Fs),n0=Yi(.42,0,1,1),r0=Yi(0,0,.58,1),jc=Yi(.42,0,.58,1),s0=e=>Array.isArray(e)&&typeof e[0]!="number",Mc=e=>Array.isArray(e)&&typeof e[0]=="number",o0={linear:zt,easeIn:n0,easeInOut:jc,easeOut:r0,circIn:Fs,circInOut:Ac,circOut:Cc,backIn:zs,backInOut:kc,backOut:Sc,anticipate:Pc},a0=e=>typeof e=="string",Oo=e=>{if(Mc(e)){Os(e.length===4);const[t,i,n,r]=e;return Yi(t,i,n,r)}else if(a0(e))return o0[e];return e},tn=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function l0(e,t){let i=new Set,n=new Set,r=!1,s=!1;const o=new WeakSet;let a={delta:0,timestamp:0,isProcessing:!1};function l(c){o.has(c)&&(u.schedule(c),e()),c(a)}const u={schedule:(c,d=!1,h=!1)=>{const g=h&&r?i:n;return d&&o.add(c),g.add(c),c},cancel:c=>{n.delete(c),o.delete(c)},process:c=>{if(a=c,r){s=!0;return}r=!0;const d=i;i=n,n=d,i.forEach(l),i.clear(),r=!1,s&&(s=!1,u.process(c))}};return u}const c0=40;function Rc(e,t){let i=!1,n=!0;const r={delta:0,timestamp:0,isProcessing:!1},s=()=>i=!0,o=tn.reduce((x,b)=>(x[b]=l0(s),x),{}),{setup:a,read:l,resolveKeyframes:u,preUpdate:c,update:d,preRender:h,render:m,postRender:g}=o,p=()=>{const x=ye.useManualTiming,b=x?r.timestamp:performance.now();i=!1,x||(r.delta=n?1e3/60:Math.max(Math.min(b-r.timestamp,c0),1)),r.timestamp=b,r.isProcessing=!0,a.process(r),l.process(r),u.process(r),c.process(r),d.process(r),h.process(r),m.process(r),g.process(r),r.isProcessing=!1,i&&t&&(n=!1,e(p))},y=()=>{i=!0,n=!0,r.isProcessing||e(p)};return{schedule:tn.reduce((x,b)=>{const _=o[b];return x[b]=(j,k=!1,T=!1)=>(i||y(),_.schedule(j,k,T)),x},{}),cancel:x=>{for(let b=0;b<tn.length;b++)o[tn[b]].cancel(x)},state:r,steps:o}}const{schedule:G,cancel:xe,state:lt,steps:sr}=Rc(typeof requestAnimationFrame<"u"?requestAnimationFrame:zt,!0);let un;function u0(){un=void 0}const mt={now:()=>(un===void 0&&mt.set(lt.isProcessing||ye.useManualTiming?lt.timestamp:performance.now()),un),set:e=>{un=e,queueMicrotask(u0)}},Dc=e=>t=>typeof t=="string"&&t.startsWith(e),Ec=Dc("--"),d0=Dc("var(--"),Bs=e=>d0(e)?h0.test(e.split("/*")[0].trim()):!1,h0=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Io(e){return typeof e!="string"?!1:e.split("/*")[0].includes("var(--")}const pi={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Ni={...pi,transform:e=>Zt(0,1,e)},en={...pi,default:1},Mi=e=>Math.round(e*1e5)/1e5,Us=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function f0(e){return e==null}const p0=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,$s=(e,t)=>i=>!!(typeof i=="string"&&p0.test(i)&&i.startsWith(e)||t&&!f0(i)&&Object.prototype.hasOwnProperty.call(i,t)),Lc=(e,t,i)=>n=>{if(typeof n!="string")return n;const[r,s,o,a]=n.match(Us);return{[e]:parseFloat(r),[t]:parseFloat(s),[i]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},m0=e=>Zt(0,255,e),or={...pi,transform:e=>Math.round(m0(e))},De={test:$s("rgb","red"),parse:Lc("red","green","blue"),transform:({red:e,green:t,blue:i,alpha:n=1})=>"rgba("+or.transform(e)+", "+or.transform(t)+", "+or.transform(i)+", "+Mi(Ni.transform(n))+")"};function g0(e){let t="",i="",n="",r="";return e.length>5?(t=e.substring(1,3),i=e.substring(3,5),n=e.substring(5,7),r=e.substring(7,9)):(t=e.substring(1,2),i=e.substring(2,3),n=e.substring(3,4),r=e.substring(4,5),t+=t,i+=i,n+=n,r+=r),{red:parseInt(t,16),green:parseInt(i,16),blue:parseInt(n,16),alpha:r?parseInt(r,16)/255:1}}const Or={test:$s("#"),parse:g0,transform:De.transform},qi=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),oe=qi("deg"),Yt=qi("%"),M=qi("px"),y0=qi("vh"),x0=qi("vw"),zo={...Yt,parse:e=>Yt.parse(e)/100,transform:e=>Yt.transform(e*100)},Ze={test:$s("hsl","hue"),parse:Lc("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:i,alpha:n=1})=>"hsla("+Math.round(e)+", "+Yt.transform(Mi(t))+", "+Yt.transform(Mi(i))+", "+Mi(Ni.transform(n))+")"},et={test:e=>De.test(e)||Or.test(e)||Ze.test(e),parse:e=>De.test(e)?De.parse(e):Ze.test(e)?Ze.parse(e):Or.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?De.transform(e):Ze.transform(e),getAnimatableNone:e=>{const t=et.parse(e);return t.alpha=0,et.transform(t)}},v0=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function w0(e){return isNaN(e)&&typeof e=="string"&&(e.match(Us)?.length||0)+(e.match(v0)?.length||0)>0}const Vc="number",Oc="color",b0="var",_0="var(",Fo="${}",T0=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function hi(e){const t=e.toString(),i=[],n={color:[],number:[],var:[]},r=[];let s=0;const a=t.replace(T0,l=>(et.test(l)?(n.color.push(s),r.push(Oc),i.push(et.parse(l))):l.startsWith(_0)?(n.var.push(s),r.push(b0),i.push(l)):(n.number.push(s),r.push(Vc),i.push(parseFloat(l))),++s,Fo)).split(Fo);return{values:i,split:a,indexes:n,types:r}}function S0(e){return hi(e).values}function Ic({split:e,types:t}){const i=e.length;return n=>{let r="";for(let s=0;s<i;s++)if(r+=e[s],n[s]!==void 0){const o=t[s];o===Vc?r+=Mi(n[s]):o===Oc?r+=et.transform(n[s]):r+=n[s]}return r}}function k0(e){return Ic(hi(e))}const P0=e=>typeof e=="number"?0:et.test(e)?et.getAnimatableNone(e):e,C0=(e,t)=>typeof e=="number"?t?.trim().endsWith("/")?e:0:P0(e);function A0(e){const t=hi(e);return Ic(t)(t.values.map((n,r)=>C0(n,t.split[r])))}const $t={test:w0,parse:S0,createTransformer:k0,getAnimatableNone:A0};function ar(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(t-e)*6*i:i<1/2?t:i<2/3?e+(t-e)*(2/3-i)*6:e}function j0({hue:e,saturation:t,lightness:i,alpha:n}){e/=360,t/=100,i/=100;let r=0,s=0,o=0;if(!t)r=s=o=i;else{const a=i<.5?i*(1+t):i+t-i*t,l=2*i-a;r=ar(l,a,e+1/3),s=ar(l,a,e),o=ar(l,a,e-1/3)}return{red:Math.round(r*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:n}}function jn(e,t){return i=>i>0?t:e}const W=(e,t,i)=>e+(t-e)*i,lr=(e,t,i)=>{const n=e*e,r=i*(t*t-n)+n;return r<0?0:Math.sqrt(r)},M0=[Or,De,Ze],R0=e=>M0.find(t=>t.test(e));function Bo(e){const t=R0(e);if(!t)return!1;let i=t.parse(e);return t===Ze&&(i=j0(i)),i}const Uo=(e,t)=>{const i=Bo(e),n=Bo(t);if(!i||!n)return jn(e,t);const r={...i};return s=>(r.red=lr(i.red,n.red,s),r.green=lr(i.green,n.green,s),r.blue=lr(i.blue,n.blue,s),r.alpha=W(i.alpha,n.alpha,s),De.transform(r))},Ir=new Set(["none","hidden"]);function D0(e,t){return Ir.has(e)?i=>i<=0?e:t:i=>i>=1?t:e}function E0(e,t){return i=>W(e,t,i)}function Ns(e){return typeof e=="number"?E0:typeof e=="string"?Bs(e)?jn:et.test(e)?Uo:O0:Array.isArray(e)?zc:typeof e=="object"?et.test(e)?Uo:L0:jn}function zc(e,t){const i=[...e],n=i.length,r=e.map((s,o)=>Ns(s)(s,t[o]));return s=>{for(let o=0;o<n;o++)i[o]=r[o](s);return i}}function L0(e,t){const i={...e,...t},n={};for(const r in i)e[r]!==void 0&&t[r]!==void 0&&(n[r]=Ns(e[r])(e[r],t[r]));return r=>{for(const s in n)i[s]=n[s](r);return i}}function V0(e,t){const i=[],n={color:0,var:0,number:0};for(let r=0;r<t.values.length;r++){const s=t.types[r],o=e.indexes[s][n[s]],a=e.values[o]??0;i[r]=a,n[s]++}return i}const O0=(e,t)=>{const i=$t.createTransformer(t),n=hi(e),r=hi(t);return n.indexes.var.length===r.indexes.var.length&&n.indexes.color.length===r.indexes.color.length&&n.indexes.number.length>=r.indexes.number.length?Ir.has(e)&&!r.values.length||Ir.has(t)&&!n.values.length?D0(e,t):Ki(zc(V0(n,r),r.values),i):jn(e,t)};function Fc(e,t,i){return typeof e=="number"&&typeof t=="number"&&typeof i=="number"?W(e,t,i):Ns(e)(e,t)}const I0=e=>{const t=({timestamp:i})=>e(i);return{start:(i=!0)=>G.update(t,i),stop:()=>xe(t),now:()=>lt.isProcessing?lt.timestamp:mt.now()}},Bc=(e,t,i=10)=>{let n="";const r=Math.max(Math.round(t/i),2);for(let s=0;s<r;s++)n+=Math.round(e(s/(r-1))*1e4)/1e4+", ";return`linear(${n.substring(0,n.length-2)})`},Mn=2e4;function Gs(e){let t=0;const i=50;let n=e.next(t);for(;!n.done&&t<Mn;)t+=i,n=e.next(t);return t>=Mn?1/0:t}function z0(e,t=100,i){const n=i({...e,keyframes:[0,t]}),r=Math.min(Gs(n),Mn);return{type:"keyframes",ease:s=>n.next(r*s).value/t,duration:It(r)}}const Z={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function zr(e,t){return e*Math.sqrt(1-t*t)}const F0=12;function B0(e,t,i){let n=i;for(let r=1;r<F0;r++)n=n-e(n)/t(n);return n}const cr=.001;function U0({duration:e=Z.duration,bounce:t=Z.bounce,velocity:i=Z.velocity,mass:n=Z.mass}){let r,s,o=1-t;o=Zt(Z.minDamping,Z.maxDamping,o),e=Zt(Z.minDuration,Z.maxDuration,It(e)),o<1?(r=u=>{const c=u*o,d=c*e,h=c-i,m=zr(u,o),g=Math.exp(-d);return cr-h/m*g},s=u=>{const d=u*o*e,h=d*i+i,m=Math.pow(o,2)*Math.pow(u,2)*e,g=Math.exp(-d),p=zr(Math.pow(u,2),o);return(-r(u)+cr>0?-1:1)*((h-m)*g)/p}):(r=u=>{const c=Math.exp(-u*e),d=(u-i)*e+1;return-cr+c*d},s=u=>{const c=Math.exp(-u*e),d=(i-u)*(e*e);return c*d});const a=5/e,l=B0(r,s,a);if(e=Mt(e),isNaN(l))return{stiffness:Z.stiffness,damping:Z.damping,duration:e};{const u=Math.pow(l,2)*n;return{stiffness:u,damping:o*2*Math.sqrt(n*u),duration:e}}}const $0=["duration","bounce"],N0=["stiffness","damping","mass"];function $o(e,t){return t.some(i=>e[i]!==void 0)}function G0(e){let t={velocity:Z.velocity,stiffness:Z.stiffness,damping:Z.damping,mass:Z.mass,isResolvedFromDuration:!1,...e};if(!$o(e,N0)&&$o(e,$0))if(t.velocity=0,e.visualDuration){const i=e.visualDuration,n=2*Math.PI/(i*1.2),r=n*n,s=2*Zt(.05,1,1-(e.bounce||0))*Math.sqrt(r);t={...t,mass:Z.mass,stiffness:r,damping:s}}else{const i=U0({...e,velocity:0});t={...t,...i,mass:Z.mass},t.isResolvedFromDuration=!0}return t}function Rn(e=Z.visualDuration,t=Z.bounce){const i=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:n,restDelta:r}=i;const s=i.keyframes[0],o=i.keyframes[i.keyframes.length-1],a={done:!1,value:s},{stiffness:l,damping:u,mass:c,duration:d,velocity:h,isResolvedFromDuration:m}=G0({...i,velocity:-It(i.velocity||0)}),g=h||0,p=u/(2*Math.sqrt(l*c)),y=o-s,v=It(Math.sqrt(l/c)),w=Math.abs(y)<5;n||(n=w?Z.restSpeed.granular:Z.restSpeed.default),r||(r=w?Z.restDelta.granular:Z.restDelta.default);let x,b,_,j,k,T;if(p<1)_=zr(v,p),j=(g+p*v*y)/_,x=A=>{const R=Math.exp(-p*v*A);return o-R*(j*Math.sin(_*A)+y*Math.cos(_*A))},k=p*v*j+y*_,T=p*v*y-j*_,b=A=>Math.exp(-p*v*A)*(k*Math.sin(_*A)+T*Math.cos(_*A));else if(p===1){x=R=>o-Math.exp(-v*R)*(y+(g+v*y)*R);const A=g+v*y;b=R=>Math.exp(-v*R)*(v*A*R-g)}else{const A=v*Math.sqrt(p*p-1);x=V=>{const O=Math.exp(-p*v*V),z=Math.min(A*V,300);return o-O*((g+p*v*y)*Math.sinh(z)+A*y*Math.cosh(z))/A};const R=(g+p*v*y)/A,E=p*v*R-y*A,L=p*v*y-R*A;b=V=>{const O=Math.exp(-p*v*V),z=Math.min(A*V,300);return O*(E*Math.sinh(z)+L*Math.cosh(z))}}const P={calculatedDuration:m&&d||null,velocity:A=>Mt(b(A)),next:A=>{if(!m&&p<1){const E=Math.exp(-p*v*A),L=Math.sin(_*A),V=Math.cos(_*A),O=o-E*(j*L+y*V),z=Mt(E*(k*L+T*V));return a.done=Math.abs(z)<=n&&Math.abs(o-O)<=r,a.value=a.done?o:O,a}const R=x(A);if(m)a.done=A>=d;else{const E=Mt(b(A));a.done=Math.abs(E)<=n&&Math.abs(o-R)<=r}return a.value=a.done?o:R,a},toString:()=>{const A=Math.min(Gs(P),Mn),R=Bc(E=>P.next(A*E).value,A,30);return A+"ms "+R},toTransition:()=>{}};return P}Rn.applyToOptions=e=>{const t=z0(e,100,Rn);return e.ease=t.ease,e.duration=Mt(t.duration),e.type="keyframes",e};const W0=5;function Uc(e,t,i){const n=Math.max(t-W0,0);return wc(i-e(n),t-n)}function Fr({keyframes:e,velocity:t=0,power:i=.8,timeConstant:n=325,bounceDamping:r=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:u=.5,restSpeed:c}){const d=e[0],h={done:!1,value:d},m=T=>a!==void 0&&T<a||l!==void 0&&T>l,g=T=>a===void 0?l:l===void 0||Math.abs(a-T)<Math.abs(l-T)?a:l;let p=i*t;const y=d+p,v=o===void 0?y:o(y);v!==y&&(p=v-d);const w=T=>-p*Math.exp(-T/n),x=T=>v+w(T),b=T=>{const P=w(T),A=x(T);h.done=Math.abs(P)<=u,h.value=h.done?v:A};let _,j;const k=T=>{m(h.value)&&(_=T,j=Rn({keyframes:[h.value,g(h.value)],velocity:Uc(x,T,h.value),damping:r,stiffness:s,restDelta:u,restSpeed:c}))};return k(0),{calculatedDuration:null,next:T=>{let P=!1;return!j&&_===void 0&&(P=!0,b(T),k(T)),_!==void 0&&T>=_?j.next(T-_):(!P&&b(T),h)}}}function X0(e,t,i){const n=[],r=i||ye.mix||Fc,s=e.length-1;for(let o=0;o<s;o++){let a=r(e[o],e[o+1]);if(t){const l=Array.isArray(t)?t[o]||zt:t;a=Ki(l,a)}n.push(a)}return n}function H0(e,t,{clamp:i=!0,ease:n,mixer:r}={}){const s=e.length;if(Os(s===t.length),s===1)return()=>t[0];if(s===2&&t[0]===t[1])return()=>t[1];const o=e[0]===e[1];e[0]>e[s-1]&&(e=[...e].reverse(),t=[...t].reverse());const a=X0(t,n,r),l=a.length,u=c=>{if(o&&c<e[0])return t[0];let d=0;if(l>1)for(;d<e.length-2&&!(c<e[d+1]);d++);const h=$i(e[d],e[d+1],c);return a[d](h)};return i?c=>u(Zt(e[0],e[s-1],c)):u}function K0(e,t){const i=e[e.length-1];for(let n=1;n<=t;n++){const r=$i(0,t,n);e.push(W(i,1,r))}}function Y0(e){const t=[0];return K0(t,e.length-1),t}function q0(e,t){return e.map(i=>i*t)}function Z0(e,t){return e.map(()=>t||jc).splice(0,e.length-1)}function Ri({duration:e=300,keyframes:t,times:i,ease:n="easeInOut"}){const r=s0(n)?n.map(Oo):Oo(n),s={done:!1,value:t[0]},o=q0(i&&i.length===t.length?i:Y0(t),e),a=H0(o,t,{ease:Array.isArray(r)?r:Z0(t,r)});return{calculatedDuration:e,next:l=>(s.value=a(l),s.done=l>=e,s)}}const J0=e=>e!==null;function Nn(e,{repeat:t,repeatType:i="loop"},n,r=1){const s=e.filter(J0),a=r<0||t&&i!=="loop"&&t%2===1?0:s.length-1;return!a||n===void 0?s[a]:n}const Q0={decay:Fr,inertia:Fr,tween:Ri,keyframes:Ri,spring:Rn};function $c(e){typeof e.type=="string"&&(e.type=Q0[e.type])}class Ws{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(t=>{this.resolve=t})}notifyFinished(){this.resolve()}then(t,i){return this.finished.then(t,i)}}const tg=e=>e/100;class Dn extends Ws{constructor(t){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{const{motionValue:i}=this.options;i&&i.updatedAt!==mt.now()&&this.tick(mt.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=t,this.initAnimation(),this.play(),t.autoplay===!1&&this.pause()}initAnimation(){const{options:t}=this;$c(t);const{type:i=Ri,repeat:n=0,repeatDelay:r=0,repeatType:s,velocity:o=0}=t;let{keyframes:a}=t;const l=i||Ri;l!==Ri&&typeof a[0]!="number"&&(this.mixKeyframes=Ki(tg,Fc(a[0],a[1])),a=[0,100]);const u=l({...t,keyframes:a});s==="mirror"&&(this.mirroredGenerator=l({...t,keyframes:[...a].reverse(),velocity:-o})),u.calculatedDuration===null&&(u.calculatedDuration=Gs(u));const{calculatedDuration:c}=u;this.calculatedDuration=c,this.resolvedDuration=c+r,this.totalDuration=this.resolvedDuration*(n+1)-r,this.generator=u}updateTime(t){const i=Math.round(t-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=i}tick(t,i=!1){const{generator:n,totalDuration:r,mixKeyframes:s,mirroredGenerator:o,resolvedDuration:a,calculatedDuration:l}=this;if(this.startTime===null)return n.next(0);const{delay:u=0,keyframes:c,repeat:d,repeatType:h,repeatDelay:m,type:g,onUpdate:p,finalKeyframe:y}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-r/this.speed,this.startTime)),i?this.currentTime=t:this.updateTime(t);const v=this.currentTime-u*(this.playbackSpeed>=0?1:-1),w=this.playbackSpeed>=0?v<0:v>r;this.currentTime=Math.max(v,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=r);let x=this.currentTime,b=n;if(d){const T=Math.min(this.currentTime,r)/a;let P=Math.floor(T),A=T%1;!A&&T>=1&&(A=1),A===1&&P--,P=Math.min(P,d+1),P%2&&(h==="reverse"?(A=1-A,m&&(A-=m/a)):h==="mirror"&&(b=o)),x=Zt(0,1,A)*a}let _;w?(this.delayState.value=c[0],_=this.delayState):_=b.next(x),s&&!w&&(_.value=s(_.value));let{done:j}=_;!w&&l!==null&&(j=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);const k=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&j);return k&&g!==Fr&&(_.value=Nn(c,this.options,y,this.speed)),p&&p(_.value),k&&this.finish(),_}then(t,i){return this.finished.then(t,i)}get duration(){return It(this.calculatedDuration)}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+It(t)}get time(){return It(this.currentTime)}set time(t){t=Mt(t),this.currentTime=t,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=t,this.tick(t))}getGeneratorVelocity(){const t=this.currentTime;if(t<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(t);const i=this.generator.next(t).value;return Uc(n=>this.generator.next(n).value,t,i)}get speed(){return this.playbackSpeed}set speed(t){const i=this.playbackSpeed!==t;i&&this.driver&&this.updateTime(mt.now()),this.playbackSpeed=t,i&&this.driver&&(this.time=It(this.currentTime))}play(){if(this.isStopped)return;const{driver:t=I0,startTime:i}=this.options;this.driver||(this.driver=t(r=>this.tick(r))),this.options.onPlay?.();const n=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=n):this.holdTime!==null?this.startTime=n-this.holdTime:this.startTime||(this.startTime=i??n),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(mt.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}attachTimeline(t){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),t.observe(this)}}function eg(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}const Ee=e=>e*180/Math.PI,Br=e=>{const t=Ee(Math.atan2(e[1],e[0]));return Ur(t)},ig={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:Br,rotateZ:Br,skewX:e=>Ee(Math.atan(e[1])),skewY:e=>Ee(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},Ur=e=>(e=e%360,e<0&&(e+=360),e),No=Br,Go=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),Wo=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),ng={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Go,scaleY:Wo,scale:e=>(Go(e)+Wo(e))/2,rotateX:e=>Ur(Ee(Math.atan2(e[6],e[5]))),rotateY:e=>Ur(Ee(Math.atan2(-e[2],e[0]))),rotateZ:No,rotate:No,skewX:e=>Ee(Math.atan(e[4])),skewY:e=>Ee(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function $r(e){return e.includes("scale")?1:0}function Nr(e,t){if(!e||e==="none")return $r(t);const i=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let n,r;if(i)n=ng,r=i;else{const a=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);n=ig,r=a}if(!r)return $r(t);const s=n[t],o=r[1].split(",").map(sg);return typeof s=="function"?s(o):o[s]}const rg=(e,t)=>{const{transform:i="none"}=getComputedStyle(e);return Nr(i,t)};function sg(e){return parseFloat(e.trim())}const mi=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],gi=new Set(mi),Xo=e=>e===pi||e===M,og=new Set(["x","y","z"]),ag=mi.filter(e=>!og.has(e));function lg(e){const t=[];return ag.forEach(i=>{const n=e.getValue(i);n!==void 0&&(t.push([i,n.get()]),n.set(i.startsWith("scale")?1:0))}),t}const ue={width:({x:e},{paddingLeft:t="0",paddingRight:i="0",boxSizing:n})=>{const r=e.max-e.min;return n==="border-box"?r:r-parseFloat(t)-parseFloat(i)},height:({y:e},{paddingTop:t="0",paddingBottom:i="0",boxSizing:n})=>{const r=e.max-e.min;return n==="border-box"?r:r-parseFloat(t)-parseFloat(i)},top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>Nr(t,"x"),y:(e,{transform:t})=>Nr(t,"y")};ue.translateX=ue.x;ue.translateY=ue.y;const Fe=new Set;let Gr=!1,Wr=!1,Xr=!1;function Nc(){if(Wr){const e=Array.from(Fe).filter(n=>n.needsMeasurement),t=new Set(e.map(n=>n.element)),i=new Map;t.forEach(n=>{const r=lg(n);r.length&&(i.set(n,r),n.render())}),e.forEach(n=>n.measureInitialState()),t.forEach(n=>{n.render();const r=i.get(n);r&&r.forEach(([s,o])=>{n.getValue(s)?.set(o)})}),e.forEach(n=>n.measureEndState()),e.forEach(n=>{n.suspendedScrollY!==void 0&&window.scrollTo(0,n.suspendedScrollY)})}Wr=!1,Gr=!1,Fe.forEach(e=>e.complete(Xr)),Fe.clear()}function Gc(){Fe.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Wr=!0)})}function cg(){Xr=!0,Gc(),Nc(),Xr=!1}class Xs{constructor(t,i,n,r,s,o=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...t],this.onComplete=i,this.name=n,this.motionValue=r,this.element=s,this.isAsync=o}scheduleResolve(){this.state="scheduled",this.isAsync?(Fe.add(this),Gr||(Gr=!0,G.read(Gc),G.resolveKeyframes(Nc))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:i,element:n,motionValue:r}=this;if(t[0]===null){const s=r?.get(),o=t[t.length-1];if(s!==void 0)t[0]=s;else if(n&&i){const a=n.readValue(i,o);a!=null&&(t[0]=a)}t[0]===void 0&&(t[0]=o),r&&s===void 0&&r.set(t[0])}eg(t)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(t=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,t),Fe.delete(this)}cancel(){this.state==="scheduled"&&(Fe.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const ug=e=>e.startsWith("--");function Wc(e,t,i){ug(t)?e.style.setProperty(t,i):e.style[t]=i}const dg={};function Xc(e,t){const i=vc(e);return()=>dg[t]??i()}const hg=Xc(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),Hc=Xc(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),ki=([e,t,i,n])=>`cubic-bezier(${e}, ${t}, ${i}, ${n})`,Ho={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:ki([0,.65,.55,1]),circOut:ki([.55,0,1,.45]),backIn:ki([.31,.01,.66,-.59]),backOut:ki([.33,1.53,.69,.99])};function Kc(e,t){if(e)return typeof e=="function"?Hc()?Bc(e,t):"ease-out":Mc(e)?ki(e):Array.isArray(e)?e.map(i=>Kc(i,t)||Ho.easeOut):Ho[e]}function fg(e,t,i,{delay:n=0,duration:r=300,repeat:s=0,repeatType:o="loop",ease:a="easeOut",times:l}={},u=void 0){const c={[t]:i};l&&(c.offset=l);const d=Kc(a,r);Array.isArray(d)&&(c.easing=d);const h={delay:n,duration:r,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"};return u&&(h.pseudoElement=u),e.animate(c,h)}function Yc(e){return typeof e=="function"&&"applyToOptions"in e}function pg({type:e,...t}){return Yc(e)&&Hc()?e.applyToOptions(t):(t.duration??(t.duration=300),t.ease??(t.ease="easeOut"),t)}class qc extends Ws{constructor(t){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!t)return;const{element:i,name:n,keyframes:r,pseudoElement:s,allowFlatten:o=!1,finalKeyframe:a,onComplete:l}=t;this.isPseudoElement=!!s,this.allowFlatten=o,this.options=t,Os(typeof t.type!="string");const u=pg(t);this.animation=fg(i,n,r,u,s),u.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!s){const c=Nn(r,this.options,a,this.speed);this.updateMotionValue&&this.updateMotionValue(c),Wc(i,n,c),this.animation.cancel()}l?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:t}=this;t==="idle"||t==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){const t=this.options?.element;!this.isPseudoElement&&t?.isConnected&&this.animation.commitStyles?.()}get duration(){const t=this.animation.effect?.getComputedTiming?.().duration||0;return It(Number(t))}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+It(t)}get time(){return It(Number(this.animation.currentTime)||0)}set time(t){const i=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Mt(t),i&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(t){t<0&&(this.finishedTime=null),this.animation.playbackRate=t}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(t){this.manualStartTime=this.animation.startTime=t}attachTimeline({timeline:t,rangeStart:i,rangeEnd:n,observe:r}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,t&&hg()?(this.animation.timeline=t,i&&(this.animation.rangeStart=i),n&&(this.animation.rangeEnd=n),zt):r(this)}}const Zc={anticipate:Pc,backInOut:kc,circInOut:Ac};function mg(e){return e in Zc}function gg(e){typeof e.ease=="string"&&mg(e.ease)&&(e.ease=Zc[e.ease])}const ur=10;class yg extends qc{constructor(t){gg(t),$c(t),super(t),t.startTime!==void 0&&t.autoplay!==!1&&(this.startTime=t.startTime),this.options=t}updateMotionValue(t){const{motionValue:i,onUpdate:n,onComplete:r,element:s,...o}=this.options;if(!i)return;if(t!==void 0){i.set(t);return}const a=new Dn({...o,autoplay:!1}),l=Math.max(ur,mt.now()-this.startTime),u=Zt(0,ur,l-ur),c=a.sample(l).value,{name:d}=this.options;s&&d&&Wc(s,d,c),i.setWithVelocity(a.sample(Math.max(0,l-u)).value,c,u),a.stop()}}const Ko=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&($t.test(e)||e==="0")&&!e.startsWith("url("));function xg(e){const t=e[0];if(e.length===1)return!0;for(let i=0;i<e.length;i++)if(e[i]!==t)return!0}function vg(e,t,i,n){const r=e[0];if(r===null)return!1;if(t==="display"||t==="visibility")return!0;const s=e[e.length-1],o=Ko(r,t),a=Ko(s,t);return!o||!a?!1:xg(e)||(i==="spring"||Yc(i))&&n}function Hr(e){e.duration=0,e.type="keyframes"}const Jc=new Set(["opacity","clipPath","filter","transform"]),wg=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function bg(e){for(let t=0;t<e.length;t++)if(typeof e[t]=="string"&&wg.test(e[t]))return!0;return!1}const _g=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),Tg=vc(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function Sg(e){const{motionValue:t,name:i,repeatDelay:n,repeatType:r,damping:s,type:o,keyframes:a}=e;if(!(t?.owner?.current instanceof HTMLElement))return!1;const{onUpdate:u,transformTemplate:c}=t.owner.getProps();return Tg()&&i&&(Jc.has(i)||_g.has(i)&&bg(a))&&(i!=="transform"||!c)&&!u&&!n&&r!=="mirror"&&s!==0&&o!=="inertia"}const kg=40;class Pg extends Ws{constructor({autoplay:t=!0,delay:i=0,type:n="keyframes",repeat:r=0,repeatDelay:s=0,repeatType:o="loop",keyframes:a,name:l,motionValue:u,element:c,...d}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=mt.now();const h={autoplay:t,delay:i,type:n,repeat:r,repeatDelay:s,repeatType:o,name:l,motionValue:u,element:c,...d},m=c?.KeyframeResolver||Xs;this.keyframeResolver=new m(a,(g,p,y)=>this.onKeyframesResolved(g,p,h,!y),l,u,c),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(t,i,n,r){this.keyframeResolver=void 0;const{name:s,type:o,velocity:a,delay:l,isHandoff:u,onUpdate:c}=n;this.resolvedAt=mt.now();let d=!0;vg(t,s,o,a)||(d=!1,(ye.instantAnimations||!l)&&c?.(Nn(t,n,i)),t[0]=t[t.length-1],Hr(n),n.repeat=0);const m={startTime:r?this.resolvedAt?this.resolvedAt-this.createdAt>kg?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:i,...n,keyframes:t},g=d&&!u&&Sg(m),p=m.motionValue?.owner?.current;let y;if(g)try{y=new yg({...m,element:p})}catch{y=new Dn(m)}else y=new Dn(m);y.finished.then(()=>{this.notifyFinished()}).catch(zt),this.pendingTimeline&&(this.stopTimeline=y.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=y}get finished(){return this._animation?this.animation.finished:this._finished}then(t,i){return this.finished.finally(t).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),cg()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(t){this.animation.time=t}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(t){this.animation.speed=t}get startTime(){return this.animation.startTime}attachTimeline(t){return this._animation?this.stopTimeline=this.animation.attachTimeline(t):this.pendingTimeline=t,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}function Qc(e,t,i,n=0,r=1){const s=Array.from(e).sort((u,c)=>u.sortNodePosition(c)).indexOf(t),o=e.size,a=(o-1)*n;return typeof i=="function"?i(s,o):r===1?s*n:a-s*n}const Cg=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Ag(e){const t=Cg.exec(e);if(!t)return[,];const[,i,n,r]=t;return[`--${i??n}`,r]}function tu(e,t,i=1){const[n,r]=Ag(e);if(!n)return;const s=window.getComputedStyle(t).getPropertyValue(n);if(s){const o=s.trim();return gc(o)?parseFloat(o):o}return Bs(r)?tu(r,t,i+1):r}const jg={type:"spring",stiffness:500,damping:25,restSpeed:10},Mg=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),Rg={type:"keyframes",duration:.8},Dg={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Eg=(e,{keyframes:t})=>t.length>2?Rg:gi.has(e)?e.startsWith("scale")?Mg(t[1]):jg:Dg;function eu(e,t){if(e?.inherit&&t){const{inherit:i,...n}=e;return{...t,...n}}return e}function Hs(e,t){const i=e?.[t]??e?.default??e;return i!==e?eu(i,e):i}const Lg=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function Vg(e){for(const t in e)if(!Lg.has(t))return!0;return!1}const Ks=(e,t,i,n={},r,s)=>o=>{const a=Hs(n,e)||{},l=a.delay||n.delay||0;let{elapsed:u=0}=n;u=u-Mt(l);const c={keyframes:Array.isArray(i)?i:[null,i],ease:"easeOut",velocity:t.getVelocity(),...a,delay:-u,onUpdate:h=>{t.set(h),a.onUpdate&&a.onUpdate(h)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:e,motionValue:t,element:s?void 0:r};Vg(a)||Object.assign(c,Eg(e,c)),c.duration&&(c.duration=Mt(c.duration)),c.repeatDelay&&(c.repeatDelay=Mt(c.repeatDelay)),c.from!==void 0&&(c.keyframes[0]=c.from);let d=!1;if((c.type===!1||c.duration===0&&!c.repeatDelay)&&(Hr(c),c.delay===0&&(d=!0)),(ye.instantAnimations||ye.skipAnimations||r?.shouldSkipAnimations)&&(d=!0,Hr(c),c.delay=0),c.allowFlatten=!a.type&&!a.ease,d&&!s&&t.get()!==void 0){const h=Nn(c.keyframes,a);if(h!==void 0){G.update(()=>{c.onUpdate(h),c.onComplete()});return}}return a.isSync?new Dn(c):new Pg(c)};function Yo(e){const t=[{},{}];return e?.values.forEach((i,n)=>{t[0][n]=i.get(),t[1][n]=i.getVelocity()}),t}function Ys(e,t,i,n){if(typeof t=="function"){const[r,s]=Yo(n);t=t(i!==void 0?i:e.custom,r,s)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[r,s]=Yo(n);t=t(i!==void 0?i:e.custom,r,s)}return t}function Be(e,t,i){const n=e.getProps();return Ys(n,t,i!==void 0?i:n.custom,e)}const iu=new Set(["width","height","top","left","right","bottom",...mi]),qo=30,Og=e=>!isNaN(parseFloat(e));class Ig{constructor(t,i={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=n=>{const r=mt.now();if(this.updatedAt!==r&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(n),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const s of this.dependents)s.dirty()},this.hasAnimated=!1,this.setCurrent(t),this.owner=i.owner}setCurrent(t){this.current=t,this.updatedAt=mt.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=Og(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,i){this.events[t]||(this.events[t]=new Is);const n=this.events[t].add(i);return t==="change"?()=>{n(),G.read(()=>{this.events.change.getSize()||this.stop()})}:n}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,i){this.passiveEffect=t,this.stopPassiveEffect=i}set(t){this.passiveEffect?this.passiveEffect(t,this.updateAndNotify):this.updateAndNotify(t)}setWithVelocity(t,i,n){this.set(i),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-n}jump(t,i=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,i&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(t){this.dependents||(this.dependents=new Set),this.dependents.add(t)}removeDependent(t){this.dependents&&this.dependents.delete(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=mt.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>qo)return 0;const i=Math.min(this.updatedAt-this.prevUpdatedAt,qo);return wc(parseFloat(this.current)-parseFloat(this.prevFrameValue),i)}start(t){return this.stop(),new Promise(i=>{this.hasAnimated=!0,this.animation=t(i),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function fi(e,t){return new Ig(e,t)}const Kr=e=>Array.isArray(e);function zg(e,t,i){e.hasValue(t)?e.getValue(t).set(i):e.addValue(t,fi(i))}function Fg(e){return Kr(e)?e[e.length-1]||0:e}function Bg(e,t){const i=Be(e,t);let{transitionEnd:n={},transition:r={},...s}=i||{};s={...s,...n};for(const o in s){const a=Fg(s[o]);zg(e,o,a)}}const ct=e=>!!(e&&e.getVelocity);function Ug(e){return!!(ct(e)&&e.add)}function Yr(e,t){const i=e.getValue("willChange");if(Ug(i))return i.add(t);if(!i&&ye.WillChange){const n=new ye.WillChange("auto");e.addValue("willChange",n),n.add(t)}}function qs(e){return e.replace(/([A-Z])/g,t=>`-${t.toLowerCase()}`)}const $g="framerAppearId",nu="data-"+qs($g);function ru(e){return e.props[nu]}function Ng({protectedKeys:e,needsAnimating:t},i){const n=e.hasOwnProperty(i)&&t[i]!==!0;return t[i]=!1,n}function su(e,t,{delay:i=0,transitionOverride:n,type:r}={}){let{transition:s,transitionEnd:o,...a}=t;const l=e.getDefaultTransition();s=s?eu(s,l):l;const u=s?.reduceMotion;n&&(s=n);const c=[],d=r&&e.animationState&&e.animationState.getState()[r];for(const h in a){const m=e.getValue(h,e.latestValues[h]??null),g=a[h];if(g===void 0||d&&Ng(d,h))continue;const p={delay:i,...Hs(s||{},h)},y=m.get();if(y!==void 0&&!m.isAnimating()&&!Array.isArray(g)&&g===y&&!p.velocity){G.update(()=>m.set(g));continue}let v=!1;if(window.MotionHandoffAnimation){const b=ru(e);if(b){const _=window.MotionHandoffAnimation(b,h,G);_!==null&&(p.startTime=_,v=!0)}}Yr(e,h);const w=u??e.shouldReduceMotion;m.start(Ks(h,m,g,w&&iu.has(h)?{type:!1}:p,e,v));const x=m.animation;x&&c.push(x)}if(o){const h=()=>G.update(()=>{o&&Bg(e,o)});c.length?Promise.all(c).then(h):h()}return c}function qr(e,t,i={}){const n=Be(e,t,i.type==="exit"?e.presenceContext?.custom:void 0);let{transition:r=e.getDefaultTransition()||{}}=n||{};i.transitionOverride&&(r=i.transitionOverride);const s=n?()=>Promise.all(su(e,n,i)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?(l=0)=>{const{delayChildren:u=0,staggerChildren:c,staggerDirection:d}=r;return Gg(e,t,l,u,c,d,i)}:()=>Promise.resolve(),{when:a}=r;if(a){const[l,u]=a==="beforeChildren"?[s,o]:[o,s];return l().then(()=>u())}else return Promise.all([s(),o(i.delay)])}function Gg(e,t,i=0,n=0,r=0,s=1,o){const a=[];for(const l of e.variantChildren)l.notify("AnimationStart",t),a.push(qr(l,t,{...o,delay:i+(typeof n=="function"?0:n)+Qc(e.variantChildren,l,n,r,s)}).then(()=>l.notify("AnimationComplete",t)));return Promise.all(a)}function Wg(e,t,i={}){e.notify("AnimationStart",t);let n;if(Array.isArray(t)){const r=t.map(s=>qr(e,s,i));n=Promise.all(r)}else if(typeof t=="string")n=qr(e,t,i);else{const r=typeof t=="function"?Be(e,t,i.custom):t;n=Promise.all(su(e,r,i))}return n.then(()=>{e.notify("AnimationComplete",t)})}const Xg={test:e=>e==="auto",parse:e=>e},ou=e=>t=>t.test(e),au=[pi,M,Yt,oe,x0,y0,Xg],Zo=e=>au.find(ou(e));function Hg(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||xc(e):!0}const Kg=new Set(["brightness","contrast","saturate","opacity"]);function Yg(e){const[t,i]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[n]=i.match(Us)||[];if(!n)return e;const r=i.replace(n,"");let s=Kg.has(t)?1:0;return n!==i&&(s*=100),t+"("+s+r+")"}const qg=/\b([a-z-]*)\(.*?\)/gu,Zr={...$t,getAnimatableNone:e=>{const t=e.match(qg);return t?t.map(Yg).join(" "):e}},Jr={...$t,getAnimatableNone:e=>{const t=$t.parse(e);return $t.createTransformer(e)(t.map(n=>typeof n=="number"?0:typeof n=="object"?{...n,alpha:1}:n))}},Jo={...pi,transform:Math.round},Zg={rotate:oe,rotateX:oe,rotateY:oe,rotateZ:oe,scale:en,scaleX:en,scaleY:en,scaleZ:en,skew:oe,skewX:oe,skewY:oe,distance:M,translateX:M,translateY:M,translateZ:M,x:M,y:M,z:M,perspective:M,transformPerspective:M,opacity:Ni,originX:zo,originY:zo,originZ:M},Zs={borderWidth:M,borderTopWidth:M,borderRightWidth:M,borderBottomWidth:M,borderLeftWidth:M,borderRadius:M,borderTopLeftRadius:M,borderTopRightRadius:M,borderBottomRightRadius:M,borderBottomLeftRadius:M,width:M,maxWidth:M,height:M,maxHeight:M,top:M,right:M,bottom:M,left:M,inset:M,insetBlock:M,insetBlockStart:M,insetBlockEnd:M,insetInline:M,insetInlineStart:M,insetInlineEnd:M,padding:M,paddingTop:M,paddingRight:M,paddingBottom:M,paddingLeft:M,paddingBlock:M,paddingBlockStart:M,paddingBlockEnd:M,paddingInline:M,paddingInlineStart:M,paddingInlineEnd:M,margin:M,marginTop:M,marginRight:M,marginBottom:M,marginLeft:M,marginBlock:M,marginBlockStart:M,marginBlockEnd:M,marginInline:M,marginInlineStart:M,marginInlineEnd:M,fontSize:M,backgroundPositionX:M,backgroundPositionY:M,...Zg,zIndex:Jo,fillOpacity:Ni,strokeOpacity:Ni,numOctaves:Jo},Jg={...Zs,color:et,backgroundColor:et,outlineColor:et,fill:et,stroke:et,borderColor:et,borderTopColor:et,borderRightColor:et,borderBottomColor:et,borderLeftColor:et,filter:Zr,WebkitFilter:Zr,mask:Jr,WebkitMask:Jr},lu=e=>Jg[e],Qg=new Set([Zr,Jr]);function cu(e,t){let i=lu(e);return Qg.has(i)||(i=$t),i.getAnimatableNone?i.getAnimatableNone(t):void 0}const ty=new Set(["auto","none","0"]);function ey(e,t,i){let n=0,r;for(;n<e.length&&!r;){const s=e[n];typeof s=="string"&&!ty.has(s)&&hi(s).values.length&&(r=e[n]),n++}if(r&&i)for(const s of t)e[s]=cu(i,r)}class iy extends Xs{constructor(t,i,n,r,s){super(t,i,n,r,s,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:i,name:n}=this;if(!i||!i.current)return;super.readKeyframes();for(let c=0;c<t.length;c++){let d=t[c];if(typeof d=="string"&&(d=d.trim(),Bs(d))){const h=tu(d,i.current);h!==void 0&&(t[c]=h),c===t.length-1&&(this.finalKeyframe=d)}}if(this.resolveNoneKeyframes(),!iu.has(n)||t.length!==2)return;const[r,s]=t,o=Zo(r),a=Zo(s),l=Io(r),u=Io(s);if(l!==u&&ue[n]){this.needsMeasurement=!0;return}if(o!==a)if(Xo(o)&&Xo(a))for(let c=0;c<t.length;c++){const d=t[c];typeof d=="string"&&(t[c]=parseFloat(d))}else ue[n]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:i}=this,n=[];for(let r=0;r<t.length;r++)(t[r]===null||Hg(t[r]))&&n.push(r);n.length&&ey(t,n,i)}measureInitialState(){const{element:t,unresolvedKeyframes:i,name:n}=this;if(!t||!t.current)return;n==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=ue[n](t.measureViewportBox(),window.getComputedStyle(t.current)),i[0]=this.measuredOrigin;const r=i[i.length-1];r!==void 0&&t.getValue(n,r).jump(r,!1)}measureEndState(){const{element:t,name:i,unresolvedKeyframes:n}=this;if(!t||!t.current)return;const r=t.getValue(i);r&&r.jump(this.measuredOrigin,!1);const s=n.length-1,o=n[s];n[s]=ue[i](t.measureViewportBox(),window.getComputedStyle(t.current)),o!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=o),this.removedTransforms?.length&&this.removedTransforms.forEach(([a,l])=>{t.getValue(a).set(l)}),this.resolveNoneKeyframes()}}function uu(e,t,i){if(e==null)return[];if(e instanceof EventTarget)return[e];if(typeof e=="string"){const r=document.querySelectorAll(e);return r?Array.from(r):[]}return Array.from(e).filter(n=>n!=null)}const du=(e,t)=>t&&typeof e=="number"?t.transform(e):e;function dn(e){return yc(e)&&"offsetHeight"in e&&!("ownerSVGElement"in e)}const{schedule:Js}=Rc(queueMicrotask,!1),Bt={x:!1,y:!1};function hu(){return Bt.x||Bt.y}function ny(e){return e==="x"||e==="y"?Bt[e]?null:(Bt[e]=!0,()=>{Bt[e]=!1}):Bt.x||Bt.y?null:(Bt.x=Bt.y=!0,()=>{Bt.x=Bt.y=!1})}function fu(e,t){const i=uu(e),n=new AbortController,r={passive:!0,...t,signal:n.signal};return[i,r,()=>n.abort()]}function ry(e){return!(e.pointerType==="touch"||hu())}function sy(e,t,i={}){const[n,r,s]=fu(e,i);return n.forEach(o=>{let a=!1,l=!1,u;const c=()=>{o.removeEventListener("pointerleave",g)},d=y=>{u&&(u(y),u=void 0),c()},h=y=>{a=!1,window.removeEventListener("pointerup",h),window.removeEventListener("pointercancel",h),l&&(l=!1,d(y))},m=()=>{a=!0,window.addEventListener("pointerup",h,r),window.addEventListener("pointercancel",h,r)},g=y=>{if(y.pointerType!=="touch"){if(a){l=!0;return}d(y)}},p=y=>{if(!ry(y))return;l=!1;const v=t(o,y);typeof v=="function"&&(u=v,o.addEventListener("pointerleave",g,r))};o.addEventListener("pointerenter",p,r),o.addEventListener("pointerdown",m,r)}),s}const pu=(e,t)=>t?e===t?!0:pu(e,t.parentElement):!1,Qs=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,oy=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function ay(e){return oy.has(e.tagName)||e.isContentEditable===!0}const ly=new Set(["INPUT","SELECT","TEXTAREA"]);function cy(e){return ly.has(e.tagName)||e.isContentEditable===!0}const hn=new WeakSet;function Qo(e){return t=>{t.key==="Enter"&&e(t)}}function dr(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const uy=(e,t)=>{const i=e.currentTarget;if(!i)return;const n=Qo(()=>{if(hn.has(i))return;dr(i,"down");const r=Qo(()=>{dr(i,"up")}),s=()=>dr(i,"cancel");i.addEventListener("keyup",r,t),i.addEventListener("blur",s,t)});i.addEventListener("keydown",n,t),i.addEventListener("blur",()=>i.removeEventListener("keydown",n),t)};function ta(e){return Qs(e)&&!hu()}const ea=new WeakSet;function dy(e,t,i={}){const[n,r,s]=fu(e,i),o=a=>{const l=a.currentTarget;if(!ta(a)||ea.has(a))return;hn.add(l),i.stopPropagation&&ea.add(a);const u=t(l,a),c=(m,g)=>{window.removeEventListener("pointerup",d),window.removeEventListener("pointercancel",h),hn.has(l)&&hn.delete(l),ta(m)&&typeof u=="function"&&u(m,{success:g})},d=m=>{c(m,l===window||l===document||i.useGlobalTarget||pu(l,m.target))},h=m=>{c(m,!1)};window.addEventListener("pointerup",d,r),window.addEventListener("pointercancel",h,r)};return n.forEach(a=>{(i.useGlobalTarget?window:a).addEventListener("pointerdown",o,r),dn(a)&&(a.addEventListener("focus",u=>uy(u,r)),!ay(a)&&!a.hasAttribute("tabindex")&&(a.tabIndex=0))}),s}function to(e){return yc(e)&&"ownerSVGElement"in e}const fn=new WeakMap;let pn;const mu=(e,t,i)=>(n,r)=>r&&r[0]?r[0][e+"Size"]:to(n)&&"getBBox"in n?n.getBBox()[t]:n[i],hy=mu("inline","width","offsetWidth"),fy=mu("block","height","offsetHeight");function py({target:e,borderBoxSize:t}){fn.get(e)?.forEach(i=>{i(e,{get width(){return hy(e,t)},get height(){return fy(e,t)}})})}function my(e){e.forEach(py)}function gy(){typeof ResizeObserver>"u"||(pn=new ResizeObserver(my))}function yy(e,t){pn||gy();const i=uu(e);return i.forEach(n=>{let r=fn.get(n);r||(r=new Set,fn.set(n,r)),r.add(t),pn?.observe(n)}),()=>{i.forEach(n=>{const r=fn.get(n);r?.delete(t),r?.size||pn?.unobserve(n)})}}const mn=new Set;let Je;function xy(){Je=()=>{const e={get width(){return window.innerWidth},get height(){return window.innerHeight}};mn.forEach(t=>t(e))},window.addEventListener("resize",Je)}function vy(e){return mn.add(e),Je||xy(),()=>{mn.delete(e),!mn.size&&typeof Je=="function"&&(window.removeEventListener("resize",Je),Je=void 0)}}function ia(e,t){return typeof e=="function"?vy(e):yy(e,t)}function wy(e){return to(e)&&e.tagName==="svg"}const by=[...au,et,$t],_y=e=>by.find(ou(e)),na=()=>({translate:0,scale:1,origin:0,originPoint:0}),Qe=()=>({x:na(),y:na()}),ra=()=>({min:0,max:0}),nt=()=>({x:ra(),y:ra()}),Ty=new WeakMap;function Gn(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}function Gi(e){return typeof e=="string"||Array.isArray(e)}const eo=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],io=["initial",...eo];function Wn(e){return Gn(e.animate)||io.some(t=>Gi(e[t]))}function gu(e){return!!(Wn(e)||e.variants)}function Sy(e,t,i){for(const n in t){const r=t[n],s=i[n];if(ct(r))e.addValue(n,r);else if(ct(s))e.addValue(n,fi(r,{owner:e}));else if(s!==r)if(e.hasValue(n)){const o=e.getValue(n);o.liveStyle===!0?o.jump(r):o.hasAnimated||o.set(r)}else{const o=e.getStaticValue(n);e.addValue(n,fi(o!==void 0?o:r,{owner:e}))}}for(const n in i)t[n]===void 0&&e.removeValue(n);return t}const En={current:null},no={current:!1},ky=typeof window<"u";function yu(){if(no.current=!0,!!ky)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>En.current=e.matches;e.addEventListener("change",t),t()}else En.current=!1}const sa=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let Ln={};function xu(e){Ln=e}function Py(){return Ln}class Cy{scrapeMotionValuesFromProps(t,i,n){return{}}constructor({parent:t,props:i,presenceContext:n,reducedMotionConfig:r,skipAnimations:s,blockInitialAnimation:o,visualState:a},l={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Xs,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const m=mt.now();this.renderScheduledAt<m&&(this.renderScheduledAt=m,G.render(this.render,!1,!0))};const{latestValues:u,renderState:c}=a;this.latestValues=u,this.baseTarget={...u},this.initialValues=i.initial?{...u}:{},this.renderState=c,this.parent=t,this.props=i,this.presenceContext=n,this.depth=t?t.depth+1:0,this.reducedMotionConfig=r,this.skipAnimationsConfig=s,this.options=l,this.blockInitialAnimation=!!o,this.isControllingVariants=Wn(i),this.isVariantNode=gu(i),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:d,...h}=this.scrapeMotionValuesFromProps(i,{},this);for(const m in h){const g=h[m];u[m]!==void 0&&ct(g)&&g.set(u[m])}}mount(t){if(this.hasBeenMounted)for(const i in this.initialValues)this.values.get(i)?.jump(this.initialValues[i]),this.latestValues[i]=this.initialValues[i];this.current=t,Ty.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((i,n)=>this.bindToMotionValue(n,i)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(no.current||yu(),this.shouldReduceMotion=En.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,this.parent?.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){this.projection&&this.projection.unmount(),xe(this.notifyUpdate),xe(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const i=this.features[t];i&&(i.unmount(),i.isMounted=!1)}this.current=null}addChild(t){this.children.add(t),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(t)}removeChild(t){this.children.delete(t),this.enteringChildren&&this.enteringChildren.delete(t)}bindToMotionValue(t,i){if(this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)(),i.accelerate&&Jc.has(t)&&this.current instanceof HTMLElement){const{factory:o,keyframes:a,times:l,ease:u,duration:c}=i.accelerate,d=new qc({element:this.current,name:t,keyframes:a,times:l,ease:u,duration:Mt(c)}),h=o(d);this.valueSubscriptions.set(t,()=>{h(),d.cancel()});return}const n=gi.has(t);n&&this.onBindTransform&&this.onBindTransform();const r=i.on("change",o=>{this.latestValues[t]=o,this.props.onUpdate&&G.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let s;typeof window<"u"&&window.MotionCheckAppearSync&&(s=window.MotionCheckAppearSync(this,t,i)),this.valueSubscriptions.set(t,()=>{r(),s&&s(),i.owner&&i.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in Ln){const i=Ln[t];if(!i)continue;const{isEnabled:n,Feature:r}=i;if(!this.features[t]&&r&&n(this.props)&&(this.features[t]=new r(this)),this.features[t]){const s=this.features[t];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):nt()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,i){this.latestValues[t]=i}update(t,i){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=i;for(let n=0;n<sa.length;n++){const r=sa[n];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const s="on"+r,o=t[s];o&&(this.propEventSubscriptions[r]=this.on(r,o))}this.prevMotionValues=Sy(this,this.scrapeMotionValuesFromProps(t,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const i=this.getClosestVariantNode();if(i)return i.variantChildren&&i.variantChildren.add(t),()=>i.variantChildren.delete(t)}addValue(t,i){const n=this.values.get(t);i!==n&&(n&&this.removeValue(t),this.bindToMotionValue(t,i),this.values.set(t,i),this.latestValues[t]=i.get())}removeValue(t){this.values.delete(t);const i=this.valueSubscriptions.get(t);i&&(i(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,i){if(this.props.values&&this.props.values[t])return this.props.values[t];let n=this.values.get(t);return n===void 0&&i!==void 0&&(n=fi(i===null?void 0:i,{owner:this}),this.addValue(t,n)),n}readValue(t,i){let n=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:this.getBaseTargetFromProps(this.props,t)??this.readValueFromInstance(this.current,t,this.options);return n!=null&&(typeof n=="string"&&(gc(n)||xc(n))?n=parseFloat(n):!_y(n)&&$t.test(i)&&(n=cu(t,i)),this.setBaseTarget(t,ct(n)?n.get():n)),ct(n)?n.get():n}setBaseTarget(t,i){this.baseTarget[t]=i}getBaseTarget(t){const{initial:i}=this.props;let n;if(typeof i=="string"||typeof i=="object"){const s=Ys(this.props,i,this.presenceContext?.custom);s&&(n=s[t])}if(i&&n!==void 0)return n;const r=this.getBaseTargetFromProps(this.props,t);return r!==void 0&&!ct(r)?r:this.initialValues[t]!==void 0&&n===void 0?void 0:this.baseTarget[t]}on(t,i){return this.events[t]||(this.events[t]=new Is),this.events[t].add(i)}notify(t,...i){this.events[t]&&this.events[t].notify(...i)}scheduleRenderMicrotask(){Js.render(this.render)}}class vu extends Cy{constructor(){super(...arguments),this.KeyframeResolver=iy}sortInstanceNodePosition(t,i){return t.compareDocumentPosition(i)&2?1:-1}getBaseTargetFromProps(t,i){const n=t.style;return n?n[i]:void 0}removeValueFromRenderState(t,{vars:i,style:n}){delete i[t],delete n[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;ct(t)&&(this.childSubscription=t.on("change",i=>{this.current&&(this.current.textContent=`${i}`)}))}}class we{constructor(t){this.isMounted=!1,this.node=t}update(){}}function wu({top:e,left:t,right:i,bottom:n}){return{x:{min:t,max:i},y:{min:e,max:n}}}function Ay({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function jy(e,t){if(!t)return e;const i=t({x:e.left,y:e.top}),n=t({x:e.right,y:e.bottom});return{top:i.y,left:i.x,bottom:n.y,right:n.x}}function hr(e){return e===void 0||e===1}function Qr({scale:e,scaleX:t,scaleY:i}){return!hr(e)||!hr(t)||!hr(i)}function je(e){return Qr(e)||bu(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function bu(e){return oa(e.x)||oa(e.y)}function oa(e){return e&&e!=="0%"}function Vn(e,t,i){const n=e-i,r=t*n;return i+r}function aa(e,t,i,n,r){return r!==void 0&&(e=Vn(e,r,n)),Vn(e,i,n)+t}function ts(e,t=0,i=1,n,r){e.min=aa(e.min,t,i,n,r),e.max=aa(e.max,t,i,n,r)}function _u(e,{x:t,y:i}){ts(e.x,t.translate,t.scale,t.originPoint),ts(e.y,i.translate,i.scale,i.originPoint)}const la=.999999999999,ca=1.0000000000001;function My(e,t,i,n=!1){const r=i.length;if(!r)return;t.x=t.y=1;let s,o;for(let a=0;a<r;a++){s=i[a],o=s.projectionDelta;const{visualElement:l}=s.options;l&&l.props.style&&l.props.style.display==="contents"||(n&&s.options.layoutScroll&&s.scroll&&s!==s.root&&(Xt(e.x,-s.scroll.offset.x),Xt(e.y,-s.scroll.offset.y)),o&&(t.x*=o.x.scale,t.y*=o.y.scale,_u(e,o)),n&&je(s.latestValues)&&gn(e,s.latestValues,s.layout?.layoutBox))}t.x<ca&&t.x>la&&(t.x=1),t.y<ca&&t.y>la&&(t.y=1)}function Xt(e,t){e.min+=t,e.max+=t}function ua(e,t,i,n,r=.5){const s=W(e.min,e.max,r);ts(e,t,i,s,n)}function da(e,t){return typeof e=="string"?parseFloat(e)/100*(t.max-t.min):e}function gn(e,t,i){const n=i??e;ua(e.x,da(t.x,n.x),t.scaleX,t.scale,t.originX),ua(e.y,da(t.y,n.y),t.scaleY,t.scale,t.originY)}function Tu(e,t){return wu(jy(e.getBoundingClientRect(),t))}function Ry(e,t,i){const n=Tu(e,i),{scroll:r}=t;return r&&(Xt(n.x,r.offset.x),Xt(n.y,r.offset.y)),n}const Dy={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Ey=mi.length;function Ly(e,t,i){let n="",r=!0;for(let s=0;s<Ey;s++){const o=mi[s],a=e[o];if(a===void 0)continue;let l=!0;if(typeof a=="number")l=a===(o.startsWith("scale")?1:0);else{const u=parseFloat(a);l=o.startsWith("scale")?u===1:u===0}if(!l||i){const u=du(a,Zs[o]);if(!l){r=!1;const c=Dy[o]||o;n+=`${c}(${u}) `}i&&(t[o]=u)}}return n=n.trim(),i?n=i(t,r?"":n):r&&(n="none"),n}function ro(e,t,i){const{style:n,vars:r,transformOrigin:s}=e;let o=!1,a=!1;for(const l in t){const u=t[l];if(gi.has(l)){o=!0;continue}else if(Ec(l)){r[l]=u;continue}else{const c=du(u,Zs[l]);l.startsWith("origin")?(a=!0,s[l]=c):n[l]=c}}if(t.transform||(o||i?n.transform=Ly(t,e.transform,i):n.transform&&(n.transform="none")),a){const{originX:l="50%",originY:u="50%",originZ:c=0}=s;n.transformOrigin=`${l} ${u} ${c}`}}function Su(e,{style:t,vars:i},n,r){const s=e.style;let o;for(o in t)s[o]=t[o];r?.applyProjectionStyles(s,n);for(o in i)s.setProperty(o,i[o])}function ha(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const _i={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(M.test(e))e=parseFloat(e);else return e;const i=ha(e,t.target.x),n=ha(e,t.target.y);return`${i}% ${n}%`}},Vy={correct:(e,{treeScale:t,projectionDelta:i})=>{const n=e,r=$t.parse(e);if(r.length>5)return n;const s=$t.createTransformer(e),o=typeof r[0]!="number"?1:0,a=i.x.scale*t.x,l=i.y.scale*t.y;r[0+o]/=a,r[1+o]/=l;const u=W(a,l,.5);return typeof r[2+o]=="number"&&(r[2+o]/=u),typeof r[3+o]=="number"&&(r[3+o]/=u),s(r)}},es={borderRadius:{..._i,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:_i,borderTopRightRadius:_i,borderBottomLeftRadius:_i,borderBottomRightRadius:_i,boxShadow:Vy};function ku(e,{layout:t,layoutId:i}){return gi.has(e)||e.startsWith("origin")||(t||i!==void 0)&&(!!es[e]||e==="opacity")}function so(e,t,i){const n=e.style,r=t?.style,s={};if(!n)return s;for(const o in n)(ct(n[o])||r&&ct(r[o])||ku(o,e)||i?.getValue(o)?.liveStyle!==void 0)&&(s[o]=n[o]);return s}function Oy(e){return window.getComputedStyle(e)}class Iy extends vu{constructor(){super(...arguments),this.type="html",this.renderInstance=Su}readValueFromInstance(t,i){if(gi.has(i))return this.projection?.isProjecting?$r(i):rg(t,i);{const n=Oy(t),r=(Ec(i)?n.getPropertyValue(i):n[i])||0;return typeof r=="string"?r.trim():r}}measureInstanceViewportBox(t,{transformPagePoint:i}){return Tu(t,i)}build(t,i,n){ro(t,i,n.transformTemplate)}scrapeMotionValuesFromProps(t,i,n){return so(t,i,n)}}const zy={offset:"stroke-dashoffset",array:"stroke-dasharray"},Fy={offset:"strokeDashoffset",array:"strokeDasharray"};function By(e,t,i=1,n=0,r=!0){e.pathLength=1;const s=r?zy:Fy;e[s.offset]=`${-n}`,e[s.array]=`${t} ${i}`}const Uy=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function Pu(e,{attrX:t,attrY:i,attrScale:n,pathLength:r,pathSpacing:s=1,pathOffset:o=0,...a},l,u,c){if(ro(e,a,u),l){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:d,style:h}=e;d.transform&&(h.transform=d.transform,delete d.transform),(h.transform||d.transformOrigin)&&(h.transformOrigin=d.transformOrigin??"50% 50%",delete d.transformOrigin),h.transform&&(h.transformBox=c?.transformBox??"fill-box",delete d.transformBox);for(const m of Uy)d[m]!==void 0&&(h[m]=d[m],delete d[m]);t!==void 0&&(d.x=t),i!==void 0&&(d.y=i),n!==void 0&&(d.scale=n),r!==void 0&&By(d,r,s,o,!1)}const Cu=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),Au=e=>typeof e=="string"&&e.toLowerCase()==="svg";function $y(e,t,i,n){Su(e,t,void 0,n);for(const r in t.attrs)e.setAttribute(Cu.has(r)?r:qs(r),t.attrs[r])}function ju(e,t,i){const n=so(e,t,i);for(const r in e)if(ct(e[r])||ct(t[r])){const s=mi.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;n[s]=e[r]}return n}class Ny extends vu{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=nt}getBaseTargetFromProps(t,i){return t[i]}readValueFromInstance(t,i){if(gi.has(i)){const n=lu(i);return n&&n.default||0}return i=Cu.has(i)?i:qs(i),t.getAttribute(i)}scrapeMotionValuesFromProps(t,i,n){return ju(t,i,n)}build(t,i,n){Pu(t,i,this.isSVGTag,n.transformTemplate,n.style)}renderInstance(t,i,n,r){$y(t,i,n,r)}mount(t){this.isSVGTag=Au(t.tagName),super.mount(t)}}const Gy=io.length;function Mu(e){if(!e)return;if(!e.isControllingVariants){const i=e.parent?Mu(e.parent)||{}:{};return e.props.initial!==void 0&&(i.initial=e.props.initial),i}const t={};for(let i=0;i<Gy;i++){const n=io[i],r=e.props[n];(Gi(r)||r===!1)&&(t[n]=r)}return t}function Ru(e,t){if(!Array.isArray(t))return!1;const i=t.length;if(i!==e.length)return!1;for(let n=0;n<i;n++)if(t[n]!==e[n])return!1;return!0}const Wy=[...eo].reverse(),Xy=eo.length;function Hy(e){return t=>Promise.all(t.map(({animation:i,options:n})=>Wg(e,i,n)))}function Ky(e){let t=Hy(e),i=fa(),n=!0,r=!1;const s=u=>(c,d)=>{const h=Be(e,d,u==="exit"?e.presenceContext?.custom:void 0);if(h){const{transition:m,transitionEnd:g,...p}=h;c={...c,...p,...g}}return c};function o(u){t=u(e)}function a(u){const{props:c}=e,d=Mu(e.parent)||{},h=[],m=new Set;let g={},p=1/0;for(let v=0;v<Xy;v++){const w=Wy[v],x=i[w],b=c[w]!==void 0?c[w]:d[w],_=Gi(b),j=w===u?x.isActive:null;j===!1&&(p=v);let k=b===d[w]&&b!==c[w]&&_;if(k&&(n||r)&&e.manuallyAnimateOnMount&&(k=!1),x.protectedKeys={...g},!x.isActive&&j===null||!b&&!x.prevProp||Gn(b)||typeof b=="boolean")continue;if(w==="exit"&&x.isActive&&j!==!0){x.prevResolvedValues&&(g={...g,...x.prevResolvedValues});continue}const T=Yy(x.prevProp,b);let P=T||w===u&&x.isActive&&!k&&_||v>p&&_,A=!1;const R=Array.isArray(b)?b:[b];let E=R.reduce(s(w),{});j===!1&&(E={});const{prevResolvedValues:L={}}=x,V={...L,...E},O=F=>{P=!0,m.has(F)&&(A=!0,m.delete(F)),x.needsAnimating[F]=!0;const X=e.getValue(F);X&&(X.liveStyle=!1)};for(const F in V){const X=E[F],D=L[F];if(g.hasOwnProperty(F))continue;let I=!1;Kr(X)&&Kr(D)?I=!Ru(X,D):I=X!==D,I?X!=null?O(F):m.add(F):X!==void 0&&m.has(F)?O(F):x.protectedKeys[F]=!0}x.prevProp=b,x.prevResolvedValues=E,x.isActive&&(g={...g,...E}),(n||r)&&e.blockInitialAnimation&&(P=!1);const z=k&&T;P&&(!z||A)&&h.push(...R.map(F=>{const X={type:w};if(typeof F=="string"&&(n||r)&&!z&&e.manuallyAnimateOnMount&&e.parent){const{parent:D}=e,I=Be(D,F);if(D.enteringChildren&&I){const{delayChildren:Q}=I.transition||{};X.delay=Qc(D.enteringChildren,e,Q)}}return{animation:F,options:X}}))}if(m.size){const v={};if(typeof c.initial!="boolean"){const w=Be(e,Array.isArray(c.initial)?c.initial[0]:c.initial);w&&w.transition&&(v.transition=w.transition)}m.forEach(w=>{const x=e.getBaseTarget(w),b=e.getValue(w);b&&(b.liveStyle=!0),v[w]=x??null}),h.push({animation:v})}let y=!!h.length;return n&&(c.initial===!1||c.initial===c.animate)&&!e.manuallyAnimateOnMount&&(y=!1),n=!1,r=!1,y?t(h):Promise.resolve()}function l(u,c){if(i[u].isActive===c)return Promise.resolve();e.variantChildren?.forEach(h=>h.animationState?.setActive(u,c)),i[u].isActive=c;const d=a(u);for(const h in i)i[h].protectedKeys={};return d}return{animateChanges:a,setActive:l,setAnimateFunction:o,getState:()=>i,reset:()=>{i=fa(),r=!0}}}function Yy(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!Ru(t,e):!1}function ke(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function fa(){return{animate:ke(!0),whileInView:ke(),whileHover:ke(),whileTap:ke(),whileDrag:ke(),whileFocus:ke(),exit:ke()}}function is(e,t){e.min=t.min,e.max=t.max}function Ft(e,t){is(e.x,t.x),is(e.y,t.y)}function pa(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}const Du=1e-4,qy=1-Du,Zy=1+Du,Eu=.01,Jy=0-Eu,Qy=0+Eu;function gt(e){return e.max-e.min}function tx(e,t,i){return Math.abs(e-t)<=i}function ma(e,t,i,n=.5){e.origin=n,e.originPoint=W(t.min,t.max,e.origin),e.scale=gt(i)/gt(t),e.translate=W(i.min,i.max,e.origin)-e.originPoint,(e.scale>=qy&&e.scale<=Zy||isNaN(e.scale))&&(e.scale=1),(e.translate>=Jy&&e.translate<=Qy||isNaN(e.translate))&&(e.translate=0)}function Di(e,t,i,n){ma(e.x,t.x,i.x,n?n.originX:void 0),ma(e.y,t.y,i.y,n?n.originY:void 0)}function ga(e,t,i,n=0){const r=n?W(i.min,i.max,n):i.min;e.min=r+t.min,e.max=e.min+gt(t)}function ex(e,t,i,n){ga(e.x,t.x,i.x,n?.x),ga(e.y,t.y,i.y,n?.y)}function ya(e,t,i,n=0){const r=n?W(i.min,i.max,n):i.min;e.min=t.min-r,e.max=e.min+gt(t)}function On(e,t,i,n){ya(e.x,t.x,i.x,n?.x),ya(e.y,t.y,i.y,n?.y)}function xa(e,t,i,n,r){return e-=t,e=Vn(e,1/i,n),r!==void 0&&(e=Vn(e,1/r,n)),e}function ix(e,t=0,i=1,n=.5,r,s=e,o=e){if(Yt.test(t)&&(t=parseFloat(t),t=W(o.min,o.max,t/100)-o.min),typeof t!="number")return;let a=W(s.min,s.max,n);e===s&&(a-=t),e.min=xa(e.min,t,i,a,r),e.max=xa(e.max,t,i,a,r)}function va(e,t,[i,n,r],s,o){ix(e,t[i],t[n],t[r],t.scale,s,o)}const nx=["x","scaleX","originX"],rx=["y","scaleY","originY"];function wa(e,t,i,n){va(e.x,t,nx,i?i.x:void 0,n?n.x:void 0),va(e.y,t,rx,i?i.y:void 0,n?n.y:void 0)}function ba(e){return e.translate===0&&e.scale===1}function Lu(e){return ba(e.x)&&ba(e.y)}function _a(e,t){return e.min===t.min&&e.max===t.max}function sx(e,t){return _a(e.x,t.x)&&_a(e.y,t.y)}function Ta(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function Vu(e,t){return Ta(e.x,t.x)&&Ta(e.y,t.y)}function Sa(e){return gt(e.x)/gt(e.y)}function ka(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}function Gt(e){return[e("x"),e("y")]}function ox(e,t,i){let n="";const r=e.x.translate/t.x,s=e.y.translate/t.y,o=i?.z||0;if((r||s||o)&&(n=`translate3d(${r}px, ${s}px, ${o}px) `),(t.x!==1||t.y!==1)&&(n+=`scale(${1/t.x}, ${1/t.y}) `),i){const{transformPerspective:u,rotate:c,rotateX:d,rotateY:h,skewX:m,skewY:g}=i;u&&(n=`perspective(${u}px) ${n}`),c&&(n+=`rotate(${c}deg) `),d&&(n+=`rotateX(${d}deg) `),h&&(n+=`rotateY(${h}deg) `),m&&(n+=`skewX(${m}deg) `),g&&(n+=`skewY(${g}deg) `)}const a=e.x.scale*t.x,l=e.y.scale*t.y;return(a!==1||l!==1)&&(n+=`scale(${a}, ${l})`),n||"none"}const Ou=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],ax=Ou.length,Pa=e=>typeof e=="string"?parseFloat(e):e,Ca=e=>typeof e=="number"||M.test(e);function lx(e,t,i,n,r,s){r?(e.opacity=W(0,i.opacity??1,cx(n)),e.opacityExit=W(t.opacity??1,0,ux(n))):s&&(e.opacity=W(t.opacity??1,i.opacity??1,n));for(let o=0;o<ax;o++){const a=Ou[o];let l=Aa(t,a),u=Aa(i,a);if(l===void 0&&u===void 0)continue;l||(l=0),u||(u=0),l===0||u===0||Ca(l)===Ca(u)?(e[a]=Math.max(W(Pa(l),Pa(u),n),0),(Yt.test(u)||Yt.test(l))&&(e[a]+="%")):e[a]=u}(t.rotate||i.rotate)&&(e.rotate=W(t.rotate||0,i.rotate||0,n))}function Aa(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const cx=Iu(0,.5,Cc),ux=Iu(.5,.95,zt);function Iu(e,t,i){return n=>n<e?0:n>t?1:i($i(e,t,n))}function dx(e,t,i){const n=ct(e)?e:fi(e);return n.start(Ks("",n,t,i)),n.animation}function Wi(e,t,i,n={passive:!0}){return e.addEventListener(t,i,n),()=>e.removeEventListener(t,i)}const hx=(e,t)=>e.depth-t.depth;class fx{constructor(){this.children=[],this.isDirty=!1}add(t){Vs(this.children,t),this.isDirty=!0}remove(t){An(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(hx),this.isDirty=!1,this.children.forEach(t)}}function px(e,t){const i=mt.now(),n=({timestamp:r})=>{const s=r-i;s>=t&&(xe(n),e(s-t))};return G.setup(n,!0),()=>xe(n)}function yn(e){return ct(e)?e.get():e}class mx{constructor(){this.members=[]}add(t){Vs(this.members,t);for(let i=this.members.length-1;i>=0;i--){const n=this.members[i];if(n===t||n===this.lead||n===this.prevLead)continue;const r=n.instance;(!r||r.isConnected===!1)&&!n.snapshot&&(An(this.members,n),n.unmount())}t.scheduleRender()}remove(t){if(An(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const i=this.members[this.members.length-1];i&&this.promote(i)}}relegate(t){for(let i=this.members.indexOf(t)-1;i>=0;i--){const n=this.members[i];if(n.isPresent!==!1&&n.instance?.isConnected!==!1)return this.promote(n),!0}return!1}promote(t,i){const n=this.lead;if(t!==n&&(this.prevLead=n,this.lead=t,t.show(),n)){n.updateSnapshot(),t.scheduleRender();const{layoutDependency:r}=n.options,{layoutDependency:s}=t.options;(r===void 0||r!==s)&&(t.resumeFrom=n,i&&(n.preserveOpacity=!0),n.snapshot&&(t.snapshot=n.snapshot,t.snapshot.latestValues=n.animationValues||n.latestValues),t.root?.isUpdating&&(t.isLayoutDirty=!0)),t.options.crossfade===!1&&n.hide()}}exitAnimationComplete(){this.members.forEach(t=>{t.options.onExitComplete?.(),t.resumingFrom?.options.onExitComplete?.()})}scheduleRender(){this.members.forEach(t=>t.instance&&t.scheduleRender(!1))}removeLeadSnapshot(){this.lead?.snapshot&&(this.lead.snapshot=void 0)}}const xn={hasAnimatedSinceResize:!0,hasEverUpdated:!1},fr=["","X","Y","Z"],gx=1e3;let yx=0;function pr(e,t,i,n){const{latestValues:r}=t;r[e]&&(i[e]=r[e],t.setStaticValue(e,0),n&&(n[e]=0))}function zu(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const i=ru(t);if(window.MotionHasOptimisedAnimation(i,"transform")){const{layout:r,layoutId:s}=e.options;window.MotionCancelOptimisedAnimation(i,"transform",G,!(r||s))}const{parent:n}=e;n&&!n.hasCheckedOptimisedAppear&&zu(n)}function Fu({attachResizeListener:e,defaultParent:t,measureScroll:i,checkIsScrollRoot:n,resetTransform:r}){return class{constructor(o={},a=t?.()){this.id=yx++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(wx),this.nodes.forEach(Px),this.nodes.forEach(Cx),this.nodes.forEach(bx)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new fx)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new Is),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o){if(this.instance)return;this.isSVG=to(o)&&!wy(o),this.instance=o;const{layoutId:a,layout:l,visualElement:u}=this.options;if(u&&!u.current&&u.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(l||a)&&(this.isLayoutDirty=!0),e){let c,d=0;const h=()=>this.root.updateBlockedByResize=!1;G.read(()=>{d=window.innerWidth}),e(o,()=>{const m=window.innerWidth;m!==d&&(d=m,this.root.updateBlockedByResize=!0,c&&c(),c=px(h,250),xn.hasAnimatedSinceResize&&(xn.hasAnimatedSinceResize=!1,this.nodes.forEach(Ra)))})}a&&this.root.registerSharedNode(a,this),this.options.animate!==!1&&u&&(a||l)&&this.addEventListener("didUpdate",({delta:c,hasLayoutChanged:d,hasRelativeLayoutChanged:h,layout:m})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const g=this.options.transition||u.getDefaultTransition()||Dx,{onLayoutAnimationStart:p,onLayoutAnimationComplete:y}=u.getProps(),v=!this.targetLayout||!Vu(this.targetLayout,m),w=!d&&h;if(this.options.layoutRoot||this.resumeFrom||w||d&&(v||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const x={...Hs(g,"layout"),onPlay:p,onComplete:y};(u.shouldReduceMotion||this.options.layoutRoot)&&(x.delay=0,x.type=!1),this.startAnimation(x),this.setAnimationOrigin(c,w)}else d||Ra(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=m})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),xe(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Ax),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&zu(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let c=0;c<this.path.length;c++){const d=this.path[c];d.shouldResetTransform=!0,(typeof d.latestValues.x=="string"||typeof d.latestValues.y=="string")&&(d.isLayoutDirty=!0),d.updateScroll("snapshot"),d.options.layoutRoot&&d.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const l=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),l&&this.nodes.forEach(Tx),this.nodes.forEach(ja);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Ma);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(Sx),this.nodes.forEach(kx),this.nodes.forEach(xx),this.nodes.forEach(vx)):this.nodes.forEach(Ma),this.clearAllSnapshots();const a=mt.now();lt.delta=Zt(0,1e3/60,a-lt.timestamp),lt.timestamp=a,lt.isProcessing=!0,sr.update.process(lt),sr.preRender.process(lt),sr.render.process(lt),lt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Js.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(_x),this.sharedNodes.forEach(jx)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,G.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){G.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!gt(this.snapshot.measuredBox.x)&&!gt(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=nt()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a&&this.instance){const l=n(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:i(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!r)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!Lu(this.projectionDelta),l=this.getTransformTemplate(),u=l?l(this.latestValues,""):void 0,c=u!==this.prevTransformTemplateValue;o&&this.instance&&(a||je(this.latestValues)||c)&&(r(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),Ex(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:o}=this.options;if(!o)return nt();const a=o.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(Lx))){const{scroll:u}=this.root;u&&(Xt(a.x,u.offset.x),Xt(a.y,u.offset.y))}return a}removeElementScroll(o){const a=nt();if(Ft(a,o),this.scroll?.wasRoot)return a;for(let l=0;l<this.path.length;l++){const u=this.path[l],{scroll:c,options:d}=u;u!==this.root&&c&&d.layoutScroll&&(c.wasRoot&&Ft(a,o),Xt(a.x,c.offset.x),Xt(a.y,c.offset.y))}return a}applyTransform(o,a=!1,l){const u=l||nt();Ft(u,o);for(let c=0;c<this.path.length;c++){const d=this.path[c];!a&&d.options.layoutScroll&&d.scroll&&d!==d.root&&(Xt(u.x,-d.scroll.offset.x),Xt(u.y,-d.scroll.offset.y)),je(d.latestValues)&&gn(u,d.latestValues,d.layout?.layoutBox)}return je(this.latestValues)&&gn(u,this.latestValues,this.layout?.layoutBox),u}removeTransform(o){const a=nt();Ft(a,o);for(let l=0;l<this.path.length;l++){const u=this.path[l];if(!je(u.latestValues))continue;let c;u.instance&&(Qr(u.latestValues)&&u.updateSnapshot(),c=nt(),Ft(c,u.measurePageBox())),wa(a,u.latestValues,u.snapshot?.layoutBox,c)}return je(this.latestValues)&&wa(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==lt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){const a=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=a.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=a.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=a.isSharedProjectionDirty);const l=!!this.resumingFrom||this!==a;if(!(o||l&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:c,layoutId:d}=this.options;if(!this.layout||!(c||d))return;this.resolvedRelativeTargetAt=lt.timestamp;const h=this.getClosestProjectingParent();h&&this.linkedParentVersion!==h.layoutVersion&&!h.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&h&&h.layout?this.createRelativeTarget(h,this.layout.layoutBox,h.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=nt(),this.targetWithTransforms=nt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),ex(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):Ft(this.target,this.layout.layoutBox),_u(this.target,this.targetDelta)):Ft(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&h&&!!h.resumingFrom==!!this.resumingFrom&&!h.options.layoutScroll&&h.target&&this.animationProgress!==1?this.createRelativeTarget(h,this.target,h.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||Qr(this.parent.latestValues)||bu(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(o,a,l){this.relativeParent=o,this.linkedParentVersion=o.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=nt(),this.relativeTargetOrigin=nt(),On(this.relativeTargetOrigin,a,l,this.options.layoutAnchor||void 0),Ft(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){const o=this.getLead(),a=!!this.resumingFrom||this!==o;let l=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(l=!1),a&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(l=!1),this.resolvedRelativeTargetAt===lt.timestamp&&(l=!1),l)return;const{layout:u,layoutId:c}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||c))return;Ft(this.layoutCorrected,this.layout.layoutBox);const d=this.treeScale.x,h=this.treeScale.y;My(this.layoutCorrected,this.treeScale,this.path,a),o.layout&&!o.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(o.target=o.layout.layoutBox,o.targetWithTransforms=nt());const{target:m}=o;if(!m){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(pa(this.prevProjectionDelta.x,this.projectionDelta.x),pa(this.prevProjectionDelta.y,this.projectionDelta.y)),Di(this.projectionDelta,this.layoutCorrected,m,this.latestValues),(this.treeScale.x!==d||this.treeScale.y!==h||!ka(this.projectionDelta.x,this.prevProjectionDelta.x)||!ka(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",m))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){if(this.options.visualElement?.scheduleRender(),o){const a=this.getStack();a&&a.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Qe(),this.projectionDelta=Qe(),this.projectionDeltaWithTransform=Qe()}setAnimationOrigin(o,a=!1){const l=this.snapshot,u=l?l.latestValues:{},c={...this.latestValues},d=Qe();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const h=nt(),m=l?l.source:void 0,g=this.layout?this.layout.source:void 0,p=m!==g,y=this.getStack(),v=!y||y.members.length<=1,w=!!(p&&!v&&this.options.crossfade===!0&&!this.path.some(Rx));this.animationProgress=0;let x;this.mixTargetDelta=b=>{const _=b/1e3;Da(d.x,o.x,_),Da(d.y,o.y,_),this.setTargetDelta(d),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(On(h,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),Mx(this.relativeTarget,this.relativeTargetOrigin,h,_),x&&sx(this.relativeTarget,x)&&(this.isProjectionDirty=!1),x||(x=nt()),Ft(x,this.relativeTarget)),p&&(this.animationValues=c,lx(c,u,this.latestValues,_,w,v)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=_},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(xe(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=G.update(()=>{xn.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=fi(0)),this.motionValue.jump(0,!1),this.currentAnimation=dx(this.motionValue,[0,1e3],{...o,velocity:0,isSync:!0,onUpdate:a=>{this.mixTargetDelta(a),o.onUpdate&&o.onUpdate(a)},onStop:()=>{},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(gx),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:u,latestValues:c}=o;if(!(!a||!l||!u)){if(this!==o&&this.layout&&u&&Bu(this.options.animationType,this.layout.layoutBox,u.layoutBox)){l=this.target||nt();const d=gt(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+d;const h=gt(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+h}Ft(a,l),gn(a,c),Di(this.projectionDeltaWithTransform,this.layoutCorrected,a,c)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new mx),this.sharedNodes.get(o).add(a);const u=a.options.initialPromotionConfig;a.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){const{layoutId:o}=this.options;return o?this.getStack()?.lead||this:this}getPrevLead(){const{layoutId:o}=this.options;return o?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const u={};l.z&&pr("z",o,u,this.animationValues);for(let c=0;c<fr.length;c++)pr(`rotate${fr[c]}`,o,u,this.animationValues),pr(`skew${fr[c]}`,o,u,this.animationValues);o.render();for(const c in u)o.setStaticValue(c,u[c]),this.animationValues&&(this.animationValues[c]=u[c]);o.scheduleRender()}applyProjectionStyles(o,a){if(!this.instance||this.isSVG)return;if(!this.isVisible){o.visibility="hidden";return}const l=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,o.visibility="",o.opacity="",o.pointerEvents=yn(a?.pointerEvents)||"",o.transform=l?l(this.latestValues,""):"none";return}const u=this.getLead();if(!this.projectionDelta||!this.layout||!u.target){this.options.layoutId&&(o.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,o.pointerEvents=yn(a?.pointerEvents)||""),this.hasProjected&&!je(this.latestValues)&&(o.transform=l?l({},""):"none",this.hasProjected=!1);return}o.visibility="";const c=u.animationValues||u.latestValues;this.applyTransformsToTarget();let d=ox(this.projectionDeltaWithTransform,this.treeScale,c);l&&(d=l(c,d)),o.transform=d;const{x:h,y:m}=this.projectionDelta;o.transformOrigin=`${h.origin*100}% ${m.origin*100}% 0`,u.animationValues?o.opacity=u===this?c.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:c.opacityExit:o.opacity=u===this?c.opacity!==void 0?c.opacity:"":c.opacityExit!==void 0?c.opacityExit:0;for(const g in es){if(c[g]===void 0)continue;const{correct:p,applyTo:y,isCSSVariable:v}=es[g],w=d==="none"?c[g]:p(c[g],u);if(y){const x=y.length;for(let b=0;b<x;b++)o[y[b]]=w}else v?this.options.visualElement.renderState.vars[g]=w:o[g]=w}this.options.layoutId&&(o.pointerEvents=u===this?yn(a?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>o.currentAnimation?.stop()),this.root.nodes.forEach(ja),this.root.sharedNodes.clear()}}}function xx(e){e.updateLayout()}function vx(e){const t=e.resumeFrom?.snapshot||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:n}=e.layout,{animationType:r}=e.options,s=t.source!==e.layout.source;if(r==="size")Gt(c=>{const d=s?t.measuredBox[c]:t.layoutBox[c],h=gt(d);d.min=i[c].min,d.max=d.min+h});else if(r==="x"||r==="y"){const c=r==="x"?"y":"x";is(s?t.measuredBox[c]:t.layoutBox[c],i[c])}else Bu(r,t.layoutBox,i)&&Gt(c=>{const d=s?t.measuredBox[c]:t.layoutBox[c],h=gt(i[c]);d.max=d.min+h,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[c].max=e.relativeTarget[c].min+h)});const o=Qe();Di(o,i,t.layoutBox);const a=Qe();s?Di(a,e.applyTransform(n,!0),t.measuredBox):Di(a,i,t.layoutBox);const l=!Lu(o);let u=!1;if(!e.resumeFrom){const c=e.getClosestProjectingParent();if(c&&!c.resumeFrom){const{snapshot:d,layout:h}=c;if(d&&h){const m=e.options.layoutAnchor||void 0,g=nt();On(g,t.layoutBox,d.layoutBox,m);const p=nt();On(p,i,h.layoutBox,m),Vu(g,p)||(u=!0),c.options.layoutRoot&&(e.relativeTarget=p,e.relativeTargetOrigin=g,e.relativeParent=c)}}}e.notifyListeners("didUpdate",{layout:i,snapshot:t,delta:a,layoutDelta:o,hasLayoutChanged:l,hasRelativeLayoutChanged:u})}else if(e.isLead()){const{onExitComplete:i}=e.options;i&&i()}e.options.transition=void 0}function wx(e){e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function bx(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function _x(e){e.clearSnapshot()}function ja(e){e.clearMeasurements()}function Tx(e){e.isLayoutDirty=!0,e.updateLayout()}function Ma(e){e.isLayoutDirty=!1}function Sx(e){e.isAnimationBlocked&&e.layout&&!e.isLayoutDirty&&(e.snapshot=e.layout,e.isLayoutDirty=!0)}function kx(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function Ra(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function Px(e){e.resolveTargetDelta()}function Cx(e){e.calcProjection()}function Ax(e){e.resetSkewAndRotation()}function jx(e){e.removeLeadSnapshot()}function Da(e,t,i){e.translate=W(t.translate,0,i),e.scale=W(t.scale,1,i),e.origin=t.origin,e.originPoint=t.originPoint}function Ea(e,t,i,n){e.min=W(t.min,i.min,n),e.max=W(t.max,i.max,n)}function Mx(e,t,i,n){Ea(e.x,t.x,i.x,n),Ea(e.y,t.y,i.y,n)}function Rx(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const Dx={duration:.45,ease:[.4,0,.1,1]},La=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),Va=La("applewebkit/")&&!La("chrome/")?Math.round:zt;function Oa(e){e.min=Va(e.min),e.max=Va(e.max)}function Ex(e){Oa(e.x),Oa(e.y)}function Bu(e,t,i){return e==="position"||e==="preserve-aspect"&&!tx(Sa(t),Sa(i),.2)}function Lx(e){return e!==e.root&&e.scroll?.wasRoot}const Vx=Fu({attachResizeListener:(e,t)=>Wi(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body?.scrollLeft||0,y:document.documentElement.scrollTop||document.body?.scrollTop||0}),checkIsScrollRoot:()=>!0}),mr={current:void 0},Uu=Fu({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!mr.current){const e=new Vx({});e.mount(window),e.setOptions({layoutScroll:!0}),mr.current=e}return mr.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),oo=S.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});function Ia(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function Ox(...e){return t=>{let i=!1;const n=e.map(r=>{const s=Ia(r,t);return!i&&typeof s=="function"&&(i=!0),s});if(i)return()=>{for(let r=0;r<n.length;r++){const s=n[r];typeof s=="function"?s():Ia(e[r],null)}}}}function Ix(...e){return S.useCallback(Ox(...e),e)}class zx extends S.Component{getSnapshotBeforeUpdate(t){const i=this.props.childRef.current;if(dn(i)&&t.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const n=i.offsetParent,r=dn(n)&&n.offsetWidth||0,s=dn(n)&&n.offsetHeight||0,o=getComputedStyle(i),a=this.props.sizeRef.current;a.height=parseFloat(o.height),a.width=parseFloat(o.width),a.top=i.offsetTop,a.left=i.offsetLeft,a.right=r-a.width-a.left,a.bottom=s-a.height-a.top}return null}componentDidUpdate(){}render(){return this.props.children}}function Fx({children:e,isPresent:t,anchorX:i,anchorY:n,root:r,pop:s}){const o=S.useId(),a=S.useRef(null),l=S.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:u}=S.useContext(oo),c=e.props?.ref??e?.ref,d=Ix(a,c);return S.useInsertionEffect(()=>{const{width:h,height:m,top:g,left:p,right:y,bottom:v}=l.current;if(t||s===!1||!a.current||!h||!m)return;const w=i==="left"?`left: ${p}`:`right: ${y}`,x=n==="bottom"?`bottom: ${v}`:`top: ${g}`;a.current.dataset.motionPopId=o;const b=document.createElement("style");u&&(b.nonce=u);const _=r??document.head;return _.appendChild(b),b.sheet&&b.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${h}px !important;
            height: ${m}px !important;
            ${w}px !important;
            ${x}px !important;
          }
        `),()=>{a.current?.removeAttribute("data-motion-pop-id"),_.contains(b)&&_.removeChild(b)}},[t]),f.jsx(zx,{isPresent:t,childRef:a,sizeRef:l,pop:s,children:s===!1?e:S.cloneElement(e,{ref:d})})}const Bx=({children:e,initial:t,isPresent:i,onExitComplete:n,custom:r,presenceAffectsLayout:s,mode:o,anchorX:a,anchorY:l,root:u})=>{const c=Ls(Ux),d=S.useId();let h=!0,m=S.useMemo(()=>(h=!1,{id:d,initial:t,isPresent:i,custom:r,onExitComplete:g=>{c.set(g,!0);for(const p of c.values())if(!p)return;n&&n()},register:g=>(c.set(g,!1),()=>c.delete(g))}),[i,c,n]);return s&&h&&(m={...m}),S.useMemo(()=>{c.forEach((g,p)=>c.set(p,!1))},[i]),S.useEffect(()=>{!i&&!c.size&&n&&n()},[i]),e=f.jsx(Fx,{pop:o==="popLayout",isPresent:i,anchorX:a,anchorY:l,root:u,children:e}),f.jsx($n.Provider,{value:m,children:e})};function Ux(){return new Map}function $u(e=!0){const t=S.useContext($n);if(t===null)return[!0,null];const{isPresent:i,onExitComplete:n,register:r}=t,s=S.useId();S.useEffect(()=>{if(e)return r(s)},[e]);const o=S.useCallback(()=>e&&n&&n(s),[s,n,e]);return!i&&n?[!1,o]:[!0]}const nn=e=>e.key||"";function za(e){const t=[];return S.Children.forEach(e,i=>{S.isValidElement(i)&&t.push(i)}),t}const Fa=({children:e,custom:t,initial:i=!0,onExitComplete:n,presenceAffectsLayout:r=!0,mode:s="sync",propagate:o=!1,anchorX:a="left",anchorY:l="top",root:u})=>{const[c,d]=$u(o),h=S.useMemo(()=>za(e),[e]),m=o&&!c?[]:h.map(nn),g=S.useRef(!0),p=S.useRef(h),y=Ls(()=>new Map),v=S.useRef(new Set),[w,x]=S.useState(h),[b,_]=S.useState(h);mc(()=>{g.current=!1,p.current=h;for(let T=0;T<b.length;T++){const P=nn(b[T]);m.includes(P)?(y.delete(P),v.current.delete(P)):y.get(P)!==!0&&y.set(P,!1)}},[b,m.length,m.join("-")]);const j=[];if(h!==w){let T=[...h];for(let P=0;P<b.length;P++){const A=b[P],R=nn(A);m.includes(R)||(T.splice(P,0,A),j.push(A))}return s==="wait"&&j.length&&(T=j),_(za(T)),x(h),null}const{forceRender:k}=S.useContext(Es);return f.jsx(f.Fragment,{children:b.map(T=>{const P=nn(T),A=o&&!c?!1:h===b||m.includes(P),R=()=>{if(v.current.has(P))return;if(y.has(P))v.current.add(P),y.set(P,!0);else return;let E=!0;y.forEach(L=>{L||(E=!1)}),E&&(k?.(),_(p.current),o&&d?.(),n&&n())};return f.jsx(Bx,{isPresent:A,initial:!g.current||i?void 0:!1,custom:t,presenceAffectsLayout:r,mode:s,root:u,onExitComplete:A?void 0:R,anchorX:a,anchorY:l,children:T},P)})})},Nu=S.createContext({strict:!1}),Ba={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let Ua=!1;function $x(){if(Ua)return;const e={};for(const t in Ba)e[t]={isEnabled:i=>Ba[t].some(n=>!!i[n])};xu(e),Ua=!0}function Gu(){return $x(),Py()}function Nx(e){const t=Gu();for(const i in e)t[i]={...t[i],...e[i]};xu(t)}const Gx=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function In(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||Gx.has(e)}let Wu=e=>!In(e);function Wx(e){typeof e=="function"&&(Wu=t=>t.startsWith("on")?!In(t):e(t))}try{Wx(require("@emotion/is-prop-valid").default)}catch{}function Xx(e,t,i){const n={};for(const r in e)r==="values"&&typeof e.values=="object"||ct(e[r])||(Wu(r)||i===!0&&In(r)||!t&&!In(r)||e.draggable&&r.startsWith("onDrag"))&&(n[r]=e[r]);return n}const Xn=S.createContext({});function Hx(e,t){if(Wn(e)){const{initial:i,animate:n}=e;return{initial:i===!1||Gi(i)?i:void 0,animate:Gi(n)?n:void 0}}return e.inherit!==!1?t:{}}function Kx(e){const{initial:t,animate:i}=Hx(e,S.useContext(Xn));return S.useMemo(()=>({initial:t,animate:i}),[$a(t),$a(i)])}function $a(e){return Array.isArray(e)?e.join(" "):e}const ao=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Xu(e,t,i){for(const n in t)!ct(t[n])&&!ku(n,i)&&(e[n]=t[n])}function Yx({transformTemplate:e},t){return S.useMemo(()=>{const i=ao();return ro(i,t,e),Object.assign({},i.vars,i.style)},[t])}function qx(e,t){const i=e.style||{},n={};return Xu(n,i,e),Object.assign(n,Yx(e,t)),n}function Zx(e,t){const i={},n=qx(e,t);return e.drag&&e.dragListener!==!1&&(i.draggable=!1,n.userSelect=n.WebkitUserSelect=n.WebkitTouchCallout="none",n.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(i.tabIndex=0),i.style=n,i}const Hu=()=>({...ao(),attrs:{}});function Jx(e,t,i,n){const r=S.useMemo(()=>{const s=Hu();return Pu(s,t,Au(n),e.transformTemplate,e.style),{...s.attrs,style:{...s.style}}},[t]);if(e.style){const s={};Xu(s,e.style,e),r.style={...s,...r.style}}return r}const Qx=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function lo(e){return typeof e!="string"||e.includes("-")?!1:!!(Qx.indexOf(e)>-1||/[A-Z]/u.test(e))}function t1(e,t,i,{latestValues:n},r,s=!1,o){const l=(o??lo(e)?Jx:Zx)(t,n,r,e),u=Xx(t,typeof e=="string",s),c=e!==S.Fragment?{...u,...l,ref:i}:{},{children:d}=t,h=S.useMemo(()=>ct(d)?d.get():d,[d]);return S.createElement(e,{...c,children:h})}function e1({scrapeMotionValuesFromProps:e,createRenderState:t},i,n,r){return{latestValues:i1(i,n,r,e),renderState:t()}}function i1(e,t,i,n){const r={},s=n(e,{});for(const h in s)r[h]=yn(s[h]);let{initial:o,animate:a}=e;const l=Wn(e),u=gu(e);t&&u&&!l&&e.inherit!==!1&&(o===void 0&&(o=t.initial),a===void 0&&(a=t.animate));let c=i?i.initial===!1:!1;c=c||o===!1;const d=c?a:o;if(d&&typeof d!="boolean"&&!Gn(d)){const h=Array.isArray(d)?d:[d];for(let m=0;m<h.length;m++){const g=Ys(e,h[m]);if(g){const{transitionEnd:p,transition:y,...v}=g;for(const w in v){let x=v[w];if(Array.isArray(x)){const b=c?x.length-1:0;x=x[b]}x!==null&&(r[w]=x)}for(const w in p)r[w]=p[w]}}}return r}const Ku=e=>(t,i)=>{const n=S.useContext(Xn),r=S.useContext($n),s=()=>e1(e,t,n,r);return i?s():Ls(s)},n1=Ku({scrapeMotionValuesFromProps:so,createRenderState:ao}),r1=Ku({scrapeMotionValuesFromProps:ju,createRenderState:Hu}),s1=Symbol.for("motionComponentSymbol");function o1(e,t,i){const n=S.useRef(i);S.useInsertionEffect(()=>{n.current=i});const r=S.useRef(null);return S.useCallback(s=>{s&&e.onMount?.(s);const o=n.current;if(typeof o=="function")if(s){const a=o(s);typeof a=="function"&&(r.current=a)}else r.current?(r.current(),r.current=null):o(s);else o&&(o.current=s);t&&(s?t.mount(s):t.unmount())},[t])}const Yu=S.createContext({});function Ke(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function a1(e,t,i,n,r,s){const{visualElement:o}=S.useContext(Xn),a=S.useContext(Nu),l=S.useContext($n),u=S.useContext(oo),c=u.reducedMotion,d=u.skipAnimations,h=S.useRef(null),m=S.useRef(!1);n=n||a.renderer,!h.current&&n&&(h.current=n(e,{visualState:t,parent:o,props:i,presenceContext:l,blockInitialAnimation:l?l.initial===!1:!1,reducedMotionConfig:c,skipAnimations:d,isSVG:s}),m.current&&h.current&&(h.current.manuallyAnimateOnMount=!0));const g=h.current,p=S.useContext(Yu);g&&!g.projection&&r&&(g.type==="html"||g.type==="svg")&&l1(h.current,i,r,p);const y=S.useRef(!1);S.useInsertionEffect(()=>{g&&y.current&&g.update(i,l)});const v=i[nu],w=S.useRef(!!v&&typeof window<"u"&&!window.MotionHandoffIsComplete?.(v)&&window.MotionHasOptimisedAnimation?.(v));return mc(()=>{m.current=!0,g&&(y.current=!0,window.MotionIsMounted=!0,g.updateFeatures(),g.scheduleRenderMicrotask(),w.current&&g.animationState&&g.animationState.animateChanges())}),S.useEffect(()=>{g&&(!w.current&&g.animationState&&g.animationState.animateChanges(),w.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(v)}),w.current=!1),g.enteringChildren=void 0)}),g}function l1(e,t,i,n){const{layoutId:r,layout:s,drag:o,dragConstraints:a,layoutScroll:l,layoutRoot:u,layoutAnchor:c,layoutCrossfade:d}=t;e.projection=new i(e.latestValues,t["data-framer-portal-id"]?void 0:qu(e.parent)),e.projection.setOptions({layoutId:r,layout:s,alwaysMeasureLayout:!!o||a&&Ke(a),visualElement:e,animationType:typeof s=="string"?s:"both",initialPromotionConfig:n,crossfade:d,layoutScroll:l,layoutRoot:u,layoutAnchor:c})}function qu(e){if(e)return e.options.allowProjection!==!1?e.projection:qu(e.parent)}function gr(e,{forwardMotionProps:t=!1,type:i}={},n,r){n&&Nx(n);const s=i?i==="svg":lo(e),o=s?r1:n1;function a(u,c){let d;const h={...S.useContext(oo),...u,layoutId:c1(u)},{isStatic:m}=h,g=Kx(u),p=o(u,m);if(!m&&typeof window<"u"){u1();const y=d1(h);d=y.MeasureLayout,g.visualElement=a1(e,p,h,r,y.ProjectionNode,s)}return f.jsxs(Xn.Provider,{value:g,children:[d&&g.visualElement?f.jsx(d,{visualElement:g.visualElement,...h}):null,t1(e,u,o1(p,g.visualElement,c),p,m,t,s)]})}a.displayName=`motion.${typeof e=="string"?e:`create(${e.displayName??e.name??""})`}`;const l=S.forwardRef(a);return l[s1]=e,l}function c1({layoutId:e}){const t=S.useContext(Es).id;return t&&e!==void 0?t+"-"+e:e}function u1(e,t){S.useContext(Nu).strict}function d1(e){const t=Gu(),{drag:i,layout:n}=t;if(!i&&!n)return{};const r={...i,...n};return{MeasureLayout:i?.isEnabled(e)||n?.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}function h1(e,t){if(typeof Proxy>"u")return gr;const i=new Map,n=(s,o)=>gr(s,o,e,t),r=(s,o)=>n(s,o);return new Proxy(r,{get:(s,o)=>o==="create"?n:(i.has(o)||i.set(o,gr(o,void 0,e,t)),i.get(o))})}const f1=(e,t)=>t.isSVG??lo(e)?new Ny(t):new Iy(t,{allowProjection:e!==S.Fragment});class p1 extends we{constructor(t){super(t),t.animationState||(t.animationState=Ky(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();Gn(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:i}=this.node.prevProps||{};t!==i&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}let m1=0;class g1 extends we{constructor(){super(...arguments),this.id=m1++,this.isExitComplete=!1}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:i}=this.node.presenceContext,{isPresent:n}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===n)return;if(t&&n===!1){if(this.isExitComplete){const{initial:s,custom:o}=this.node.getProps();if(typeof s=="string"){const a=Be(this.node,s,o);if(a){const{transition:l,transitionEnd:u,...c}=a;for(const d in c)this.node.getValue(d)?.jump(c[d])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const r=this.node.animationState.setActive("exit",!t);i&&!t&&r.then(()=>{this.isExitComplete=!0,i(this.id)})}mount(){const{register:t,onExitComplete:i}=this.node.presenceContext||{};i&&i(this.id),t&&(this.unmount=t(this.id))}unmount(){}}const y1={animation:{Feature:p1},exit:{Feature:g1}};function Zi(e){return{point:{x:e.pageX,y:e.pageY}}}const x1=e=>t=>Qs(t)&&e(t,Zi(t));function Ei(e,t,i,n){return Wi(e,t,x1(i),n)}const Zu=({current:e})=>e?e.ownerDocument.defaultView:null,Na=(e,t)=>Math.abs(e-t);function v1(e,t){const i=Na(e.x,t.x),n=Na(e.y,t.y);return Math.sqrt(i**2+n**2)}const Ga=new Set(["auto","scroll"]);class Ju{constructor(t,i,{transformPagePoint:n,contextWindow:r=window,dragSnapToOrigin:s=!1,distanceThreshold:o=3,element:a}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=m=>{this.handleScroll(m.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=rn(this.lastRawMoveEventInfo,this.transformPagePoint));const m=yr(this.lastMoveEventInfo,this.history),g=this.startEvent!==null,p=v1(m.offset,{x:0,y:0})>=this.distanceThreshold;if(!g&&!p)return;const{point:y}=m,{timestamp:v}=lt;this.history.push({...y,timestamp:v});const{onStart:w,onMove:x}=this.handlers;g||(w&&w(this.lastMoveEvent,m),this.startEvent=this.lastMoveEvent),x&&x(this.lastMoveEvent,m)},this.handlePointerMove=(m,g)=>{this.lastMoveEvent=m,this.lastRawMoveEventInfo=g,this.lastMoveEventInfo=rn(g,this.transformPagePoint),G.update(this.updatePoint,!0)},this.handlePointerUp=(m,g)=>{this.end();const{onEnd:p,onSessionEnd:y,resumeAnimation:v}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&v&&v(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const w=yr(m.type==="pointercancel"?this.lastMoveEventInfo:rn(g,this.transformPagePoint),this.history);this.startEvent&&p&&p(m,w),y&&y(m,w)},!Qs(t))return;this.dragSnapToOrigin=s,this.handlers=i,this.transformPagePoint=n,this.distanceThreshold=o,this.contextWindow=r||window;const l=Zi(t),u=rn(l,this.transformPagePoint),{point:c}=u,{timestamp:d}=lt;this.history=[{...c,timestamp:d}];const{onSessionStart:h}=i;h&&h(t,yr(u,this.history)),this.removeListeners=Ki(Ei(this.contextWindow,"pointermove",this.handlePointerMove),Ei(this.contextWindow,"pointerup",this.handlePointerUp),Ei(this.contextWindow,"pointercancel",this.handlePointerUp)),a&&this.startScrollTracking(a)}startScrollTracking(t){let i=t.parentElement;for(;i;){const n=getComputedStyle(i);(Ga.has(n.overflowX)||Ga.has(n.overflowY))&&this.scrollPositions.set(i,{x:i.scrollLeft,y:i.scrollTop}),i=i.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(t){const i=this.scrollPositions.get(t);if(!i)return;const n=t===window,r=n?{x:window.scrollX,y:window.scrollY}:{x:t.scrollLeft,y:t.scrollTop},s={x:r.x-i.x,y:r.y-i.y};s.x===0&&s.y===0||(n?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=s.x,this.lastMoveEventInfo.point.y+=s.y):this.history.length>0&&(this.history[0].x-=s.x,this.history[0].y-=s.y),this.scrollPositions.set(t,r),G.update(this.updatePoint,!0))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),xe(this.updatePoint)}}function rn(e,t){return t?{point:t(e.point)}:e}function Wa(e,t){return{x:e.x-t.x,y:e.y-t.y}}function yr({point:e},t){return{point:e,delta:Wa(e,Qu(t)),offset:Wa(e,w1(t)),velocity:b1(t,.1)}}function w1(e){return e[0]}function Qu(e){return e[e.length-1]}function b1(e,t){if(e.length<2)return{x:0,y:0};let i=e.length-1,n=null;const r=Qu(e);for(;i>=0&&(n=e[i],!(r.timestamp-n.timestamp>Mt(t)));)i--;if(!n)return{x:0,y:0};n===e[0]&&e.length>2&&r.timestamp-n.timestamp>Mt(t)*2&&(n=e[1]);const s=It(r.timestamp-n.timestamp);if(s===0)return{x:0,y:0};const o={x:(r.x-n.x)/s,y:(r.y-n.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function _1(e,{min:t,max:i},n){return t!==void 0&&e<t?e=n?W(t,e,n.min):Math.max(e,t):i!==void 0&&e>i&&(e=n?W(i,e,n.max):Math.min(e,i)),e}function Xa(e,t,i){return{min:t!==void 0?e.min+t:void 0,max:i!==void 0?e.max+i-(e.max-e.min):void 0}}function T1(e,{top:t,left:i,bottom:n,right:r}){return{x:Xa(e.x,i,r),y:Xa(e.y,t,n)}}function Ha(e,t){let i=t.min-e.min,n=t.max-e.max;return t.max-t.min<e.max-e.min&&([i,n]=[n,i]),{min:i,max:n}}function S1(e,t){return{x:Ha(e.x,t.x),y:Ha(e.y,t.y)}}function k1(e,t){let i=.5;const n=gt(e),r=gt(t);return r>n?i=$i(t.min,t.max-n,e.min):n>r&&(i=$i(e.min,e.max-r,t.min)),Zt(0,1,i)}function P1(e,t){const i={};return t.min!==void 0&&(i.min=t.min-e.min),t.max!==void 0&&(i.max=t.max-e.min),i}const ns=.35;function C1(e=ns){return e===!1?e=0:e===!0&&(e=ns),{x:Ka(e,"left","right"),y:Ka(e,"top","bottom")}}function Ka(e,t,i){return{min:Ya(e,t),max:Ya(e,i)}}function Ya(e,t){return typeof e=="number"?e:e[t]||0}const A1=new WeakMap;class j1{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=nt(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=t}start(t,{snapToCursor:i=!1,distanceThreshold:n}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const s=d=>{i&&this.snapToCursor(Zi(d).point),this.stopAnimation()},o=(d,h)=>{const{drag:m,dragPropagation:g,onDragStart:p}=this.getProps();if(m&&!g&&(this.openDragLock&&this.openDragLock(),this.openDragLock=ny(m),!this.openDragLock))return;this.latestPointerEvent=d,this.latestPanInfo=h,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Gt(v=>{let w=this.getAxisMotionValue(v).get()||0;if(Yt.test(w)){const{projection:x}=this.visualElement;if(x&&x.layout){const b=x.layout.layoutBox[v];b&&(w=gt(b)*(parseFloat(w)/100))}}this.originPoint[v]=w}),p&&G.update(()=>p(d,h),!1,!0),Yr(this.visualElement,"transform");const{animationState:y}=this.visualElement;y&&y.setActive("whileDrag",!0)},a=(d,h)=>{this.latestPointerEvent=d,this.latestPanInfo=h;const{dragPropagation:m,dragDirectionLock:g,onDirectionLock:p,onDrag:y}=this.getProps();if(!m&&!this.openDragLock)return;const{offset:v}=h;if(g&&this.currentDirection===null){this.currentDirection=R1(v),this.currentDirection!==null&&p&&p(this.currentDirection);return}this.updateAxis("x",h.point,v),this.updateAxis("y",h.point,v),this.visualElement.render(),y&&G.update(()=>y(d,h),!1,!0)},l=(d,h)=>{this.latestPointerEvent=d,this.latestPanInfo=h,this.stop(d,h),this.latestPointerEvent=null,this.latestPanInfo=null},u=()=>{const{dragSnapToOrigin:d}=this.getProps();(d||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:c}=this.getProps();this.panSession=new Ju(t,{onSessionStart:s,onStart:o,onMove:a,onSessionEnd:l,resumeAnimation:u},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:c,distanceThreshold:n,contextWindow:Zu(this.visualElement),element:this.visualElement.current})}stop(t,i){const n=t||this.latestPointerEvent,r=i||this.latestPanInfo,s=this.isDragging;if(this.cancel(),!s||!r||!n)return;const{velocity:o}=r;this.startAnimation(o);const{onDragEnd:a}=this.getProps();a&&G.postRender(()=>a(n,r))}cancel(){this.isDragging=!1;const{projection:t,animationState:i}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:n}=this.getProps();!n&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),i&&i.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(t,i,n){const{drag:r}=this.getProps();if(!n||!sn(t,r,this.currentDirection))return;const s=this.getAxisMotionValue(t);let o=this.originPoint[t]+n[t];this.constraints&&this.constraints[t]&&(o=_1(o,this.constraints[t],this.elastic[t])),s.set(o)}resolveConstraints(){const{dragConstraints:t,dragElastic:i}=this.getProps(),n=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,r=this.constraints;t&&Ke(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&n?this.constraints=T1(n.layoutBox,t):this.constraints=!1,this.elastic=C1(i),r!==this.constraints&&!Ke(t)&&n&&this.constraints&&!this.hasMutatedConstraints&&Gt(s=>{this.constraints!==!1&&this.getAxisMotionValue(s)&&(this.constraints[s]=P1(n.layoutBox[s],this.constraints[s]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:i}=this.getProps();if(!t||!Ke(t))return!1;const n=t.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const s=Ry(n,r.root,this.visualElement.getTransformPagePoint());let o=S1(r.layout.layoutBox,s);if(i){const a=i(Ay(o));this.hasMutatedConstraints=!!a,a&&(o=wu(a))}return o}startAnimation(t){const{drag:i,dragMomentum:n,dragElastic:r,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},u=Gt(c=>{if(!sn(c,i,this.currentDirection))return;let d=l&&l[c]||{};(o===!0||o===c)&&(d={min:0,max:0});const h=r?200:1e6,m=r?40:1e7,g={type:"inertia",velocity:n?t[c]:0,bounceStiffness:h,bounceDamping:m,timeConstant:750,restDelta:1,restSpeed:10,...s,...d};return this.startAxisValueAnimation(c,g)});return Promise.all(u).then(a)}startAxisValueAnimation(t,i){const n=this.getAxisMotionValue(t);return Yr(this.visualElement,t),n.start(Ks(t,n,0,i,this.visualElement,!1))}stopAnimation(){Gt(t=>this.getAxisMotionValue(t).stop())}getAxisMotionValue(t){const i=`_drag${t.toUpperCase()}`,n=this.visualElement.getProps(),r=n[i];return r||this.visualElement.getValue(t,(n.initial?n.initial[t]:void 0)||0)}snapToCursor(t){Gt(i=>{const{drag:n}=this.getProps();if(!sn(i,n,this.currentDirection))return;const{projection:r}=this.visualElement,s=this.getAxisMotionValue(i);if(r&&r.layout){const{min:o,max:a}=r.layout.layoutBox[i],l=s.get()||0;s.set(t[i]-W(o,a,.5)+l)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:i}=this.getProps(),{projection:n}=this.visualElement;if(!Ke(i)||!n||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};Gt(o=>{const a=this.getAxisMotionValue(o);if(a&&this.constraints!==!1){const l=a.get();r[o]=k1({min:l,max:l},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",n.root&&n.root.updateScroll(),n.updateLayout(),this.constraints=!1,this.resolveConstraints(),Gt(o=>{if(!sn(o,t,null))return;const a=this.getAxisMotionValue(o),{min:l,max:u}=this.constraints[o];a.set(W(l,u,r[o]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;A1.set(this.visualElement,this);const t=this.visualElement.current,i=Ei(t,"pointerdown",u=>{const{drag:c,dragListener:d=!0}=this.getProps(),h=u.target,m=h!==t&&cy(h);c&&d&&!m&&this.start(u)});let n;const r=()=>{const{dragConstraints:u}=this.getProps();Ke(u)&&u.current&&(this.constraints=this.resolveRefConstraints(),n||(n=M1(t,u.current,()=>this.scalePositionWithinConstraints())))},{projection:s}=this.visualElement,o=s.addEventListener("measure",r);s&&!s.layout&&(s.root&&s.root.updateScroll(),s.updateLayout()),G.read(r);const a=Wi(window,"resize",()=>this.scalePositionWithinConstraints()),l=s.addEventListener("didUpdate",(({delta:u,hasLayoutChanged:c})=>{this.isDragging&&c&&(Gt(d=>{const h=this.getAxisMotionValue(d);h&&(this.originPoint[d]+=u[d].translate,h.set(h.get()+u[d].translate))}),this.visualElement.render())}));return()=>{a(),i(),o(),l&&l(),n&&n()}}getProps(){const t=this.visualElement.getProps(),{drag:i=!1,dragDirectionLock:n=!1,dragPropagation:r=!1,dragConstraints:s=!1,dragElastic:o=ns,dragMomentum:a=!0}=t;return{...t,drag:i,dragDirectionLock:n,dragPropagation:r,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function qa(e){let t=!0;return()=>{if(t){t=!1;return}e()}}function M1(e,t,i){const n=ia(e,qa(i)),r=ia(t,qa(i));return()=>{n(),r()}}function sn(e,t,i){return(t===!0||t===e)&&(i===null||i===e)}function R1(e,t=10){let i=null;return Math.abs(e.y)>t?i="y":Math.abs(e.x)>t&&(i="x"),i}class D1 extends we{constructor(t){super(t),this.removeGroupControls=zt,this.removeListeners=zt,this.controls=new j1(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||zt}update(){const{dragControls:t}=this.node.getProps(),{dragControls:i}=this.node.prevProps||{};t!==i&&(this.removeGroupControls(),t&&(this.removeGroupControls=t.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const xr=e=>(t,i)=>{e&&G.update(()=>e(t,i),!1,!0)};class E1 extends we{constructor(){super(...arguments),this.removePointerDownListener=zt}onPointerDown(t){this.session=new Ju(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Zu(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:i,onPan:n,onPanEnd:r}=this.node.getProps();return{onSessionStart:xr(t),onStart:xr(i),onMove:xr(n),onEnd:(s,o)=>{delete this.session,r&&G.postRender(()=>r(s,o))}}}mount(){this.removePointerDownListener=Ei(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let vr=!1;class L1 extends S.Component{componentDidMount(){const{visualElement:t,layoutGroup:i,switchLayoutGroup:n,layoutId:r}=this.props,{projection:s}=t;s&&(i.group&&i.group.add(s),n&&n.register&&r&&n.register(s),vr&&s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),xn.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:i,visualElement:n,drag:r,isPresent:s}=this.props,{projection:o}=n;return o&&(o.isPresent=s,t.layoutDependency!==i&&o.setOptions({...o.options,layoutDependency:i}),vr=!0,r||t.layoutDependency!==i||i===void 0||t.isPresent!==s?o.willUpdate():this.safeToRemove(),t.isPresent!==s&&(s?o.promote():o.relegate()||G.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:t,layoutAnchor:i}=this.props,{projection:n}=t;n&&(n.options.layoutAnchor=i,n.root.didUpdate(),Js.postRender(()=>{!n.currentAnimation&&n.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:i,switchLayoutGroup:n}=this.props,{projection:r}=t;vr=!0,r&&(r.scheduleCheckAfterUnmount(),i&&i.group&&i.group.remove(r),n&&n.deregister&&n.deregister(r))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function td(e){const[t,i]=$u(),n=S.useContext(Es);return f.jsx(L1,{...e,layoutGroup:n,switchLayoutGroup:S.useContext(Yu),isPresent:t,safeToRemove:i})}const V1={pan:{Feature:E1},drag:{Feature:D1,ProjectionNode:Uu,MeasureLayout:td}};function Za(e,t,i){const{props:n}=e;e.animationState&&n.whileHover&&e.animationState.setActive("whileHover",i==="Start");const r="onHover"+i,s=n[r];s&&G.postRender(()=>s(t,Zi(t)))}class O1 extends we{mount(){const{current:t}=this.node;t&&(this.unmount=sy(t,(i,n)=>(Za(this.node,n,"Start"),r=>Za(this.node,r,"End"))))}unmount(){}}class I1 extends we{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Ki(Wi(this.node.current,"focus",()=>this.onFocus()),Wi(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Ja(e,t,i){const{props:n}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&n.whileTap&&e.animationState.setActive("whileTap",i==="Start");const r="onTap"+(i==="End"?"":i),s=n[r];s&&G.postRender(()=>s(t,Zi(t)))}class z1 extends we{mount(){const{current:t}=this.node;if(!t)return;const{globalTapTarget:i,propagate:n}=this.node.props;this.unmount=dy(t,(r,s)=>(Ja(this.node,s,"Start"),(o,{success:a})=>Ja(this.node,o,a?"End":"Cancel")),{useGlobalTarget:i,stopPropagation:n?.tap===!1})}unmount(){}}const rs=new WeakMap,wr=new WeakMap,F1=e=>{const t=rs.get(e.target);t&&t(e)},B1=e=>{e.forEach(F1)};function U1({root:e,...t}){const i=e||document;wr.has(i)||wr.set(i,{});const n=wr.get(i),r=JSON.stringify(t);return n[r]||(n[r]=new IntersectionObserver(B1,{root:e,...t})),n[r]}function $1(e,t,i){const n=U1(t);return rs.set(e,i),n.observe(e),()=>{rs.delete(e),n.unobserve(e)}}const N1={some:0,all:1};class G1 extends we{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.stopObserver?.();const{viewport:t={}}=this.node.getProps(),{root:i,margin:n,amount:r="some",once:s}=t,o={root:i?i.current:void 0,rootMargin:n,threshold:typeof r=="number"?r:N1[r]},a=l=>{const{isIntersecting:u}=l;if(this.isInView===u||(this.isInView=u,s&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:c,onViewportLeave:d}=this.node.getProps(),h=u?c:d;h&&h(l)};this.stopObserver=$1(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:i}=this.node;["amount","margin","root"].some(W1(t,i))&&this.startObserver()}unmount(){this.stopObserver?.(),this.hasEnteredView=!1,this.isInView=!1}}function W1({viewport:e={}},{viewport:t={}}={}){return i=>e[i]!==t[i]}const X1={inView:{Feature:G1},tap:{Feature:z1},focus:{Feature:I1},hover:{Feature:O1}},H1={layout:{ProjectionNode:Uu,MeasureLayout:td}},K1={...y1,...X1,...V1,...H1},yi=h1(K1,f1);function ed(){!no.current&&yu();const[e]=S.useState(En.current);return e}const ss=new Set,br=new Map,Y1=1400,Nt=[.22,1,.36,1];let os=!1;const q1=1;function Z1(){return typeof window>"u"?!1:["localhost","127.0.0.1","::1"].includes(window.location.hostname)}function co(e,t=0){if(ss.has(e))return Promise.resolve(!0);const i=t===0?br.get(e):void 0;if(i)return i;const n=new Promise(r=>{const s=new Image;s.decoding="async";let o=!1;const a=l=>{o||(o=!0,l&&ss.add(e),t===0&&br.delete(e),r(l))};s.onload=async()=>{if(typeof s.decode=="function")try{await s.decode()}catch{a(!1);return}a(!0)},s.onerror=()=>{if(t<q1){co(e,t+1).then(a);return}a(!1)},s.src=e,s.complete&&Promise.resolve().then(async()=>{if(typeof s.decode=="function")try{await s.decode()}catch{a(!1);return}a(!0)})});return t===0&&br.set(e,n),n}function Ev(e){const t=e.map(i=>co(i.src));return Promise.all(t).catch(()=>{}),Promise.resolve()}async function id(e){const t=e.map(n=>co(n.src));return(await Promise.all(t)).every(Boolean)}async function Qa(e){const t=performance.now(),i=await id(e);return{duration:performance.now()-t,allDecoded:i}}async function J1(e,t=Y1,i){if(typeof window>"u")return!0;const n=i?.lockSessionOnFailure??!0;if(Z1()){const{allDecoded:a}=await Qa(e);return a}if(n&&os)return!1;const r=Qa(e),s=new Promise(a=>{window.setTimeout(()=>a(!1),t)}),o=await Promise.race([r.then(({duration:a,allDecoded:l})=>l&&a<=t),s]);return!o&&n&&(os=!0),o}const tl=C(yi.div)`
  position: fixed;
  inset: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
`,Q1=C(yi.div)`
  position: absolute;
  inset: 0;
  background: ${({$overlayColor:e})=>e};
`;C(yi.div)`
  position: fixed;
  inset: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.85);
`;const tv=C(yi.div)`
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  background: white;
`,el=C(yi.img)`
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
`;function ev({images:e,isActive:t,onComplete:i,layoutId:n,sharedSourceImageSrc:r,isReverse:s=!1,overlayColor:o="black",loadingBackgroundColor:a="rgba(0, 0, 0, 0.85)"}){const l=ed(),[u,c]=S.useState(!1),[d,h]=S.useState(!1),m=S.useRef(!1),g=S.useRef(i);S.useEffect(()=>{g.current=i},[i]),S.useEffect(()=>{m.current=!1},[t,e,s]);const p=()=>{m.current||(m.current=!0,g.current())};S.useEffect(()=>{if(!t||!u||!d||s)return;const T=setTimeout(()=>{p()},l?400:2450);return()=>clearTimeout(T)},[t,u,d,s,l]),e.length!==5&&console.warn(`CaseStudyTransition expects exactly 5 images, got ${e.length}`);const[y,v]=S.useState(window.innerWidth<768);S.useEffect(()=>{const k=()=>{v(window.innerWidth<768)};return window.addEventListener("resize",k),()=>window.removeEventListener("resize",k)},[]);const w=y?[-6,-3,0,3,6]:[-12,-6,0,6,12],x=y?["-7.5%","-3.75%","0","3.75%","7.5%"]:["-15%","-7%","0","7%","15%"],b=y?"85vw":"55vw",_=y?"400px":"700px",j=r?e.findIndex(k=>k.src===r):-1;return S.useEffect(()=>{if(!t){c(!1),h(!1);return}if(e.every(T=>ss.has(T.src))){c(!0);return}let k=!1;return c(!1),id(e).catch(()=>!1).then(T=>{if(!k){if(T){c(!0);return}os=!0,p()}}),()=>{k=!0}},[t,e]),S.useEffect(()=>{if(!t||!u){h(!1);return}let k=0,T=0;return k=window.requestAnimationFrame(()=>{T=window.requestAnimationFrame(()=>{h(!0)})}),()=>{window.cancelAnimationFrame(k),window.cancelAnimationFrame(T)}},[t,u]),S.useEffect(()=>{if(t){const k=window.innerWidth-document.documentElement.clientWidth;return document.body.style.overflow="hidden",document.body.style.paddingRight=`${k}px`,()=>{document.body.style.overflow="",document.body.style.paddingRight=""}}},[t]),S.useEffect(()=>{if(!t)return;const k=T=>{(T.key==="Escape"||T.key==="Esc")&&(T.preventDefault(),p())};return window.addEventListener("keydown",k,!0),()=>window.removeEventListener("keydown",k,!0)},[t]),l?f.jsx(Fa,{children:t&&u&&d&&f.jsx(tl,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.4},onAnimationComplete:p,children:e.map((k,T)=>f.jsx(el,{src:k.src,alt:k.alt,decoding:"sync",fetchPriority:"high",style:{"--card-object-position":k.objectPosition||"center center",width:b,maxWidth:_,aspectRatio:"3 / 2",zIndex:10+T},initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.4}},k.src))})}):t&&(!u||!d)?f.jsx(yi.div,{style:{position:"fixed",inset:0,zIndex:50,display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:a},initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},children:f.jsx(tv,{animate:{scale:[1,1.2,1],opacity:[.5,1,.5]},transition:{duration:1.2,repeat:1/0}})}):f.jsx(Fa,{children:t&&u&&d&&f.jsxs(tl,{initial:{opacity:1},animate:{opacity:1},exit:{opacity:0},transition:{duration:0},children:[f.jsx(Q1,{$overlayColor:o,initial:{opacity:.85},animate:{opacity:s?0:.85},exit:{opacity:0},transition:{opacity:{duration:s?1.5:2.5,ease:"easeInOut"}}}),e.map((k,T)=>{const P=s?{opacity:[1,1,0],scale:[1,1,.8],y:[-20,0,60],rotate:[w[T],0,0],x:[x[T],0,0]}:{opacity:[1,1,1,1],scale:[.8,1,1,1],y:[60,0,-20,0],rotate:[0,0,w[T],0],x:[0,0,x[T],0]},A=s?{opacity:{times:[0,.4,1],duration:1.5,ease:Nt},scale:{times:[0,.4,1],duration:1.5,ease:Nt},y:{times:[0,.4,1],duration:1.5,ease:Nt},rotate:{times:[0,.4,1],duration:1.5,ease:Nt},x:{times:[0,.4,1],duration:1.5,ease:Nt}}:{opacity:{times:[0,.17,.58,1],duration:2.4,ease:Nt},scale:{times:[0,.17,.58,1],duration:2.4,ease:Nt},y:{times:[0,.17,.58,1],duration:2.4,ease:Nt},rotate:{times:[0,.17,.58,1],duration:2.4,ease:Nt},x:{times:[0,.17,.58,1],duration:2.4,ease:Nt}};return f.jsx(el,{src:k.src,alt:k.alt,decoding:"sync",fetchPriority:"high",style:{"--card-object-position":k.objectPosition||"center center",width:b,maxWidth:_,aspectRatio:"3 / 2",zIndex:10+T},layoutId:T===j?n:void 0,loading:"eager",initial:{opacity:s?1:0,scale:s?1:.8,y:s?-20:60,rotate:s?w[T]:0,x:s?x[T]:0},animate:P,transition:A,onAnimationComplete:()=>{s&&T===4&&p()}},k.src)})]})})}const iv=""+new URL("Piton—Screens-BH4faZaC.jpg",import.meta.url).href,nv=C.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${({$background:e})=>e};
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: 10;
  clip-path: inset(0% 0% 0% 0%);
`,rv=C.h1`
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
`,sv=C.div`
  position: relative;
  z-index: 60;
`,ov=C.span`
  display: inline-block;
  overflow: hidden;
  vertical-align: top;
`,av=C.span`
  display: inline-block;
  will-change: transform, opacity;
  opacity: 0;
`,lv=C.div`
  position: absolute;
  right: clamp(18px, 2.8vw, 40px);
  bottom: clamp(18px, 2.8vw, 40px);
  z-index: 60;
  color: ${({$color:e})=>e};
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(0.9rem, 1.35vw, 1.2rem);
  letter-spacing: 0.08em;
`,cv=[{src:"/assets/HP.png",alt:"Microsoft shopping ecosystem preview",objectPosition:"top center"},{src:ll,alt:"Leysi project preview"},{src:cl,alt:"ThreePillars project preview"},{src:iv,alt:"Piton project preview"},{src:ul,alt:"Outsource project preview"}];function uv(e){const t=[...e];for(let i=t.length-1;i>0;i-=1){const n=Math.floor(Math.random()*(i+1));[t[i],t[n]]=[t[n],t[i]]}return t}function dv(){if(typeof window>"u"||typeof navigator>"u")return!1;const e=window.matchMedia?.("(hover: none) and (pointer: coarse)").matches??!1,t=navigator.userAgent,i=/iPhone|iPad|iPod/i.test(t),n=/Safari/i.test(t)&&/Mobile/i.test(t)&&!/CriOS|Chrome|FxiOS|EdgiOS/i.test(t);return e&&(i||n)}function hv(){const e="ZACHARY MACTAVISH.",t="#ffffff",[i,n]=S.useState("000%"),[r,s]=S.useState(!0),[o]=S.useState(()=>uv(cv)),[a,l]=S.useState(!1),[u,c]=S.useState(!1),d=S.useRef(null),h=S.useRef([]),m=ed(),g=a,p=t,y="#111111";S.useEffect(()=>{let w=!1;return dv()?(c(!1),l(!0),()=>{w=!0}):(J1(o,void 0,{lockSessionOnFailure:!1}).then(x=>{w||(c(x),l(!0))}).catch(()=>{w||(c(!1),l(!0))}),()=>{w=!0})},[o]),S.useEffect(()=>{if(!r)return;const w=document.body.style.overflow,x=document.body.style.paddingRight,b=window.innerWidth-document.documentElement.clientWidth;return document.body.style.overflow="hidden",b>0&&(document.body.style.paddingRight=`${b}px`),()=>{document.body.style.overflow=w,document.body.style.paddingRight=x}},[r]),S.useLayoutEffect(()=>{if(!r||!g)return;if(m){n("100%"),s(!1);return}const w=h.current.filter(Boolean),x={value:0};cn.set(w,{yPercent:110,autoAlpha:0}),cn.set(d.current,{clipPath:"inset(0% 0% 0% 0%)"});const b=cn.timeline({onComplete:()=>{s(!1),window.dispatchEvent(new Event("intro-animation-done"))}});return b.to(x,{value:100,duration:2.5,ease:"power2.inOut",onUpdate:()=>{n(`${String(Math.round(x.value)).padStart(3,"0")}%`)}}),b.to(w,{yPercent:0,autoAlpha:1,duration:.8,stagger:.04,ease:"power3.out"},"-=2"),b.to(d.current,{clipPath:"inset(0% 0% 100% 0%)",duration:.8,ease:"power4.inOut"}),()=>{b.kill()}},[r,m,g]);const v=()=>{};return f.jsxs(f.Fragment,{children:[f.jsx(xl,{introDone:!r}),r&&f.jsxs(nv,{ref:d,$background:p,style:{backgroundColor:p,position:"fixed",inset:0},children:[!g&&f.jsx("div",{style:{position:"absolute",inset:0,background:p,zIndex:1}}),u&&g&&f.jsx(ev,{images:o,isActive:r,onComplete:v,overlayColor:t,loadingBackgroundColor:t}),g&&f.jsx(sv,{children:f.jsx(rv,{"aria-label":e,children:Array.from(e).map((w,x)=>f.jsx(ov,{children:f.jsx(av,{ref:b=>{h.current[x]=b},children:w===" "?" ":w})},`intro-char-${x}`))})}),f.jsx(lv,{$color:y,children:i})]})]})}const fv=S.lazy(()=>Et(()=>import("./Resume-CNIiSYCM.js"),__vite__mapDeps([3,1,2]),import.meta.url)),pv=S.lazy(()=>Et(()=>Promise.resolve().then(()=>Cf),void 0,import.meta.url)),mv=S.lazy(()=>Et(()=>Promise.resolve().then(()=>Hh),void 0,import.meta.url)),gv=S.lazy(()=>Et(()=>import("./Graphicdesign-DW_P372S.js"),__vite__mapDeps([4,1,2]),import.meta.url)),yv=S.lazy(()=>Et(()=>import("./Outsource-DZrm9_Yy.js"),__vite__mapDeps([5,1,2]),import.meta.url)),xv=S.lazy(()=>Et(()=>import("./UX-BdOoC4Uw.js"),__vite__mapDeps([6,1,2]),import.meta.url)),vv=S.lazy(()=>Et(()=>import("./ThreePillars-sdMFmdaD.js"),__vite__mapDeps([7,1,2]),import.meta.url)),wv=S.lazy(()=>Et(()=>import("./Piton-nDPZeETC.js"),__vite__mapDeps([8,1,2,6]),import.meta.url)),bv=S.lazy(()=>Et(()=>import("./Microsoft-B3vPWr0b.js"),__vite__mapDeps([9,1,2,10]),import.meta.url)),_v=S.lazy(()=>Et(()=>import("./BusinessConnectors-BQ-O5odx.js"),__vite__mapDeps([11,1,2,12,10]),import.meta.url)),Tv=S.lazy(()=>Et(()=>import("./CopilotPay-B_9RazvV.js"),__vite__mapDeps([13,1,2,12,10]),import.meta.url)),Sv=S.lazy(()=>Et(()=>import("./Journeys-BPxOyGhP.js"),__vite__mapDeps([14,1,2,12,10]),import.meta.url));function kv(){const[e,t]=S.useState("light"),[i,n]=S.useState(!1),[r,s]=S.useState(!1),o=S.useRef(null),a=S.useRef(null);S.useEffect(()=>{const c=d=>{const h=d.target;h instanceof HTMLElement&&(h.tagName==="INPUT"||h.tagName==="TEXTAREA"||h.tagName==="SELECT"||h.isContentEditable)||((d.key==="?"||d.key==="/"&&d.shiftKey)&&(d.preventDefault(),n(!0)),d.key==="Escape"&&n(!1))};return window.addEventListener("keydown",c),()=>window.removeEventListener("keydown",c)},[]),S.useEffect(()=>{if(!i)return;a.current=document.activeElement;const c=document.body.style.overflow,d=document.body.style.paddingRight,h=window.innerWidth-document.documentElement.clientWidth;h>0&&(document.body.style.paddingRight=`${h}px`),document.body.style.overflow="hidden";const m=window.setTimeout(()=>{o.current?.focus()},0);return()=>{window.clearTimeout(m),document.body.style.overflow=c,document.body.style.paddingRight=d,a.current instanceof HTMLElement&&a.current.getAttribute("data-carousel-frame")!=="true"&&a.current.focus()}},[i]);const l=()=>{n(!1)},u=c=>{if(c.key==="Escape"){c.preventDefault(),l();return}if(c.key!=="Tab")return;const d=o.current;if(!d)return;const h=d.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');if(h.length===0){c.preventDefault(),d.focus();return}const m=h[0],g=h[h.length-1];if(c.shiftKey&&document.activeElement===m){c.preventDefault(),g.focus();return}!c.shiftKey&&document.activeElement===g&&(c.preventDefault(),m.focus())};return S.useEffect(()=>{function c(){s(!0)}return window.addEventListener("intro-animation-done",c),()=>window.removeEventListener("intro-animation-done",c)},[]),f.jsxs(sd,{theme:e==="light"?Hn:Kn,children:[f.jsx(dd,{}),f.jsxs("div",{className:"App",children:[f.jsxs(od,{children:[f.jsx(pd,{}),f.jsx(Dd,{}),r&&f.jsx("button",{type:"button",className:"shortcuts-pill",onClick:()=>n(!0),"aria-label":"Open keyboard shortcuts help",children:"? Shortcuts"}),i&&f.jsx("div",{role:"presentation",onClick:l,style:{position:"fixed",inset:0,zIndex:120,background:"rgba(0, 0, 0, 0.55)",display:"grid",placeItems:"center",padding:"1.25rem"},children:f.jsxs("div",{ref:o,role:"dialog","aria-modal":"true","aria-labelledby":"keyboard-shortcuts-title","aria-describedby":"keyboard-shortcuts-description",tabIndex:-1,onClick:c=>c.stopPropagation(),onKeyDown:u,style:{width:"min(520px, 100%)",background:"#ffffff",color:"#111827",borderRadius:"14px",border:"1px solid #e5e7eb",boxShadow:"0 30px 80px rgba(0, 0, 0, 0.35)",padding:"1.2rem 1.2rem 1rem"},children:[f.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"1rem"},children:[f.jsx("h2",{id:"keyboard-shortcuts-title",style:{margin:0,fontSize:"1.05rem",fontWeight:700},children:"Keyboard Shortcuts"}),f.jsx("button",{type:"button",onClick:l,"aria-label":"Close keyboard shortcuts help",style:{border:"1px solid #d1d5db",background:"#ffffff",borderRadius:"8px",padding:"0.25rem 0.5rem",cursor:"pointer"},children:"Esc"})]}),f.jsx("p",{id:"keyboard-shortcuts-description",style:{margin:"0.75rem 0 1rem",color:"#4b5563",fontSize:"0.92rem"},children:"Use these shortcuts to navigate transitions and media quickly."}),f.jsxs("ul",{style:{listStyle:"none",margin:0,padding:0,display:"grid",gap:"0.6rem"},children:[f.jsxs("li",{style:{display:"flex",justifyContent:"space-between",gap:"1rem"},children:[f.jsx("strong",{children:"? "}),f.jsx("span",{children:"Open this help panel"})]}),f.jsxs("li",{style:{display:"flex",justifyContent:"space-between",gap:"1rem"},children:[f.jsx("strong",{children:"Esc"}),f.jsx("span",{children:"Skip case study transition animation"})]}),f.jsxs("li",{style:{display:"flex",justifyContent:"space-between",gap:"1rem"},children:[f.jsx("strong",{children:"Esc"}),f.jsx("span",{children:"Close this panel"})]}),f.jsxs("li",{style:{display:"flex",justifyContent:"space-between",gap:"1rem"},children:[f.jsx("strong",{children:"← / →"}),f.jsx("span",{children:"Navigate image carousel slides"})]})]})]})}),f.jsx(S.Suspense,{fallback:f.jsx("div",{style:{position:"fixed",inset:0,zIndex:100,background:e==="light"?Hn.backgroundColor:Kn.backgroundColor,color:e==="light"?Hn.fontColor:Kn.fontColor,display:"grid",placeItems:"center",fontFamily:"Space Grotesk, sans-serif",letterSpacing:"0.04em"},children:"Loading…"}),children:f.jsxs(ad,{children:[f.jsx(pt,{path:"/",element:f.jsx(hv,{})}),f.jsx(pt,{path:"/MacTavish",element:f.jsx(xl,{})}),f.jsx(pt,{path:"/Giga",element:f.jsx(mv,{})}),f.jsx(pt,{path:"/AccessDirect",element:f.jsx(pv,{})}),f.jsx(pt,{path:"/Outsource",element:f.jsx(yv,{})}),f.jsx(pt,{path:"/GraphicDesign",element:f.jsx(gv,{})}),f.jsx(pt,{path:"/Ux",element:f.jsx(xv,{})}),f.jsx(pt,{path:"/ThreePillars",element:f.jsx(vv,{})}),f.jsx(pt,{path:"/Piton",element:f.jsx(wv,{})}),f.jsx(pt,{path:"/Microsoft",element:f.jsx(bv,{})}),f.jsx(pt,{path:"/BusinessConnectors",element:f.jsx(_v,{})}),f.jsx(pt,{path:"/CopilotPay",element:f.jsx(Tv,{})}),f.jsx(pt,{path:"/Journeys",element:f.jsx(Sv,{})}),f.jsx(pt,{path:"/Resume",element:f.jsx(fv,{})}),f.jsx(pt,{path:"*",element:f.jsx(ld,{to:"/",replace:!0})})]})})]}),!1]})]})}nd.createRoot(document.getElementById("root")).render(f.jsx(S.StrictMode,{children:f.jsx(kv,{})}));export{yi as A,Ev as B,Bh as C,ps as D,J1 as E,Rv as F,Mv as G,ev as H,rp as I,cs as J,Zf as K,Ls as L,fi as M,oo as N,uu as O,Gh as P,ed as Q,kt as R,fs as S,si as T,Cv as __vite_legacy_guard,oi as a,ri as b,Le as c,ot as d,Sf as e,ol as f,ds as g,hs as h,te as i,ee as j,ie as k,Of as l,Vf as m,ul as n,cl as o,st as p,Rf as q,Mf as r,Ut as s,Lf as t,Ef as u,Df as v,iv as w,zh as x,ls as y,ll as z};
