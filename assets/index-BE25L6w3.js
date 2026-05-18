const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./three-Cragz5qr.js","./three-CIqbc5c4.js","./vendor-hQudadcW.js","./Resume-8PDQLP0c.js","./Graphicdesign-TZ3QCw3z.js","./Outsource-DxCZqhgv.js","./UX-CctM5W02.js","./ThreePillars-W-kTv3xR.js","./Piton-ldEWEQGG.js","./Microsoft-3a-ZYamw.js","./BusinessConnectors-CcaVg8kS.js","./CaseStudyPage-Bs_S-nr6.js","./CopilotPay-CkXqx9xs.js","./Journeys-CP-yARS9.js"])))=>i.map(i=>d[i]);
import{j as f,_ as Ee,c as nd}from"./three-CIqbc5c4.js";import{u as zn,c as S,b as k,l as Ut,d as sd,R as dt,L as Hi,K as rd,H as od,e as ad,f as pe,N as ld}from"./vendor-hQudadcW.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function i(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=i(s);fetch(s.href,r)}})();const Ci={fonts:{body:"Space Grotesk, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",heading:"Space Grotesk, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",mono:'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'},fontSizes:{xs:"0.75rem",sm:"0.875rem",md:"1rem",lg:"1.125rem",xl:"1.25rem",h3:"1.15rem",h2:"clamp(1.4rem, 3vw, 2rem)",h1:"clamp(2rem, 6vw, 4.8rem)"},lineHeights:{tight:1.1,snug:1.2,normal:1.5,relaxed:1.7},spacing:{xs:"4px",sm:"8px",md:"12px",lg:"16px",xl:"24px","2xl":"32px","3xl":"48px"},radii:{none:"0",sm:"6px",md:"10px",lg:"16px",xl:"18px",pill:"999px",round:"50%",card:"18px"}},cd={backgroundColor:"#3F4739",backgroundTwo:"#ffffff",fontColor:"#5D5D5D"},ud={backgroundColor:"#303030",backgroundTwo:"#303030",fontColor:"#a1a1a1"},Xn={...Ci,...cd},Yn={...Ci,...ud},dd=zn`
    :root {
        --radius-card: ${Ci.radii.card};
        --space-lg: ${Ci.spacing.lg};
    }
    * { box-sizing: border-box; }
    html, body, #root { min-height: 100%; }
    body {
        margin: 0;
        background-color: ${t=>t.theme.backgroundColor};
        color: ${t=>t.theme.fontColor};
        font-family: ${Ci.fonts.body};
    }
`,hd=zn`
  html, body, * { cursor: none !important; }
  .hide-cursor, .hide-cursor * { cursor: none !important; }
  [data-agentation], [data-agentation] *, #feedback-toolbar, #feedback-toolbar * { cursor: auto !important; }
`,fd=S.div`
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
`,pd=()=>{const[t,e]=k.useState(!1),i=k.useRef(null),n=k.useRef(!1),s=k.useRef(1),r=k.useRef({x:0,y:0});k.useRef({x:0,y:0});const o=k.useRef(!1),a=k.useRef(null);return k.useEffect(()=>{const l=window.matchMedia("(pointer: fine)").matches;if(/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)&&!l){e(!1);return}if(l){e(!0);return}const c=d=>{(d.sourceCapabilities&&!d.sourceCapabilities.firesTouchEvents||d.movementX!==0||d.movementY!==0)&&(e(!0),window.removeEventListener("mousemove",c))};return window.addEventListener("mousemove",c),()=>window.removeEventListener("mousemove",c)},[]),k.useEffect(()=>{if(!t)return;const l=25,u=25,c='a, button, input, textarea, select, [role="link"], [role="button"], [data-cursor="link"], [data-route], [data-routes-to], .nav-link, .router-link, .link, .btn';let d=null;const h=v=>{v&&v.closest&&!!v.closest(c)?(d&&(clearTimeout(d),d=null),n.current||(n.current=!0,i.current&&i.current.classList.add("hovered"))):n.current&&!d&&(d=setTimeout(()=>{d=null,n.current=!1,i.current&&i.current.classList.remove("hovered")},60))},m=v=>{if(!i.current)return;const w=v.clientX-l,x=v.clientY-u;r.current.x=w,r.current.y=x,o.current||(o.current=!0,i.current.classList.add("visible")),h(v.target),i.current.style.transform=`translate3d(${w}px, ${x}px, 0) scale(${s.current})`},g=()=>{i.current&&i.current.classList.remove("visible"),o.current=!1},p=()=>{document.visibilityState==="hidden"?g():o.current=!1},y=()=>{if(i.current&&o.current){const v=n.current?.3:1,w=v-s.current;s.current=Math.abs(w)<.01?v:s.current+w*.55,i.current.style.transform=`translate3d(${r.current.x}px, ${r.current.y}px, 0) scale(${s.current})`}a.current=requestAnimationFrame(y)};return document.addEventListener("mousemove",m),document.addEventListener("mouseleave",g),document.addEventListener("visibilitychange",p),a.current=requestAnimationFrame(y),()=>{document.removeEventListener("mousemove",m),document.removeEventListener("mouseleave",g),document.removeEventListener("visibilitychange",p),a.current&&cancelAnimationFrame(a.current),d&&clearTimeout(d)}},[t]),f.jsxs(f.Fragment,{children:[t&&f.jsx(hd,{}),t&&f.jsx(fd,{ref:i})]})},md="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2025.4.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%20236.2%20238.3'%20style='enable-background:new%200%200%20236.2%20238.3;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%23FFFFFF;}%20.st1{fill:%23678983;}%20.st2{fill:%2395C4BC;}%20%3c/style%3e%3cpath%20class='st0'%20d='M236,124.2c-0.1-0.2-0.2-0.4-0.4-0.5L236,124.2L236,124.2z'/%3e%3cpath%20class='st1'%20d='M208.3,93c0.7-0.8,1.8-1.1,2.8-1c3.1,0.4,6,1.5,8.6,3.1c2.6,1.5,4.9,3.4,6.9,5.7c1.8,2.1,2.6,3.8,2.5,5%20c-0.1,0.9-0.4,1.7-0.8,2.5c-0.4,0.8-0.9,1.1-1.5,1c-0.7-0.1-1.4-0.4-2.1-0.8c-0.3-0.2-1.2-0.6-2.6-1.4c-1.7-0.9-3.5-1.6-5.3-2.1%20c-2.3-0.7-4.7-1.2-7.2-1.5c-2.4-0.3-3.4-2.1-3-5.4l0.2-1.6C206.9,95.3,207.4,94,208.3,93z'/%3e%3cpath%20class='st2'%20d='M176.6,117.4c-1.7,0.9-3.9,0.3-4.8-1.4c-0.9-1.7-0.3-3.9,1.4-4.8c0,0,0.1-0.1,0.1-0.1%20c6.8-3.5,14.3-5.7,21.9-6.4l6.5-41.1c0.9-5.5,1.7-11.2,0.9-16.7c-0.8-5.6-3.6-11.1-8.6-13.8c-4.9-2.7-10.9-2.2-15.8,0.1%20s-8.9,6.4-12.2,10.8c-20,26.3-19.4,48.4-28.4,94.2h-5.2c0-0.3,0.1-0.6,0.1-0.9l13.1-81.7c1.1-6.7,2.1-13.5,0.9-20.1%20c-1.2-6.6-5.2-13.2-11.5-15.6c-5.7-2.2-12.4-0.6-17.4,3s-8.7,8.7-11.7,14C99.3,48.2,95,60.6,91.8,73.4c0.2-22.7-4.4-40.6-13.8-53.5%20C70.3,9.2,58.5,2.1,45.4,0.4h-0.3C24.5-2.4,5.6,12.1,2.8,32.8s11.7,39.6,32.4,42.3c18.1,2.4,35.4-8.5,40.9-26%20c-0.5-2.1-1.2-4.3-2-6.3c-4.6-11.7-13.8-21.1-25.3-26c-1.8-0.8-2.6-3-1.7-4.7c0.8-1.7,2.8-2.5,4.5-1.8c19,8.1,30.8,25.9,32.7,46.2%20c1.4,14.8,0,30.4-2.1,45c-1.1,7.6-2.6,15.1-4.3,22.6c-0.4,2-6.1,21.7-5.6,22c3.5,1.9,6.9,4.1,10.1,6.6c1.6,1.2,1.8,3.5,0.6,5%20c-1.2,1.6-3.5,1.8-5,0.6l0,0c-23.6-18.3-49.2-15.5-66.9,7.2c-17.4,22.4-14,54.5,7.7,72.8l55.3-20.7c0.6-0.4,1.2-0.9,1.7-1.3%20c5.4-4.8,6.9-12.5,8.1-19.7l17.1-103c0.4-2.2,0.8-4.5,2.2-6.2c1.4-1.7,4.1-2.6,5.9-1.3c1.8,1.3,1.7,4.1,1.4,6.4L95.2,209%20c12.7-3.9,25.2-8.2,37.5-13c3.4-1.3,6.8-2.7,9.3-5.4c3-3.3,3.9-8,4.7-12.4l14.4-83.1c0.2-1.9,0.8-3.8,1.9-5.4%20c1.2-1.5,3.5-2.3,5.1-1.3c1.8,1.2,1.7,3.8,1.5,6l-7.7,60.9c-0.8,6.7-1.7,13.6-0.3,20.2c1.2,5.4,4.1,10.6,8.6,13.6%20c1,0.7,2.2,1.3,3.4,1.7c7.1,2.5,14.9-0.5,21.3-4.4c21.8-13.2,36.9-35.2,41.3-60.3c0-0.2,0.1-0.3,0.1-0.5%20C220.1,110.6,196.2,107.2,176.6,117.4z'/%3e%3c/svg%3e",gd=Ut`
  0% { transform: translateX(-40%) translateY(0); opacity: 1; }
  25% { transform: translateX(-35%) translateY(-5px); opacity: 0.9; }
  50% { transform: translateX(-30%) translateY(3px); opacity: 0.8; }
  75% { transform: translateX(-35%) translateY(-2px); opacity: 0.9; }
  100% { transform: translateX(-40%) translateY(0); opacity: 0.85; }
`,yd=Ut`
  0% { transform: translateX(140%) translateY(0); opacity: 1; }
  25% { transform: translateX(135%) translateY(4px); opacity: 0.95; }
  50% { transform: translateX(130%) translateY(-3px); opacity: 0.9; }
  75% { transform: translateX(135%) translateY(2px); opacity: 0.95; }
  100% { transform: translateX(140%) translateY(0); opacity: 0.9; }
`,il=S.span`
  position: absolute;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0,255,255,0.6) 0%, rgba(255,192,203,0.35) 60%, transparent 100%);
  filter: blur(70px);
  pointer-events: none;
  z-index: 997;
`,xd=S(il)`
  left: 0;
  animation: ${gd} 6s ease-in-out infinite;
`,vd=S(il)`
  right: 0;
  animation: ${yd} 6s ease-in-out infinite;
`,ar=Ut`
  0% { transform: translateX(0); opacity: 1; }
  33% { transform: translateX(calc(100vw - 650px)); opacity: 1; }
  66% { transform: translateX(0); opacity: 1; }
  85% { transform: translateX(50vw); opacity: 0; }
  100% { transform: translateX(0); opacity: 0; }
`,wd=S.div`
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
`,bd=S.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 8px;
  pointer-events: none;
  overflow: visible;
`,_d=S.span`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 650px;
  height: 1pt;
  background-color: #E88D67;
  mask-image: linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%);
  -webkit-mask-image: linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%);
  animation: ${ar} 10s ease-in-out forwards;
  z-index: 998;
`,Td=S.span`
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
  animation: ${ar} 10s ease-in-out forwards;
  z-index: 999;
`,kd=Ut`
  0% { background-position: 0% 0; }
  50% { background-position: 50% 0; }
  100% { background-position: 0% 0; }
`,Pd=S.span`
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
  animation: ${ar} 10s ease-in-out forwards;

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
    animation: ${kd} 2s ease-in-out infinite;
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
`,Cd=S.img`
  width: clamp(46px, 2.6vw, 90px);
  max-height: 5vh;
  object-fit: contain;
  transition: all 0.3s ease;

  &:hover {
    filter: invert(0.2) sepia(0.5) saturate(11.7) hue-rotate(313.2deg) brightness(1.2);
  }
`,Sd=S.div`
  display: flex;
  align-items: stretch;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  padding-right: 6vw;
  max-width: calc(100vw - 6vw);
`,jd=S.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2.5rem;
  height: 100%;

  @media (max-width: 1200px) { gap: 1.5rem; }
  @media (max-width: 800px) { gap: 1rem; font-size: 1rem; }
`,Ad=S.span`
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
`,uo=S.li`
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
`,Rd=S(Hi)`
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
`,Md=S.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0,0,0,0.6);
  backdrop-filter: blur(6px);
  border-radius: 0 0 0.25rem 0.25rem;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  display: ${t=>t.$open?"block":"none"};
  min-width: 10rem; /* Increased from 8rem */
  z-index: 1200;
`,rt=S(Hi)`
  display: block;
  padding: 0.75rem 1rem;
  color: white;
  text-decoration: none;
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    background-color: rgba(166, 209, 202, 0.4);
    color: white;
  }
`;S.div`
  height: 1px;
  background-color: rgba(255, 255, 255, 0.3);
  margin: 0.25rem 0;
`;function Dd(){const[t,e]=k.useState(!1),i=sd(),n=dt.useRef();k.useEffect(()=>{e(!1)},[i.pathname]),k.useEffect(()=>{if(!t||!window.matchMedia("(hover: none) and (pointer: coarse)").matches)return;const o=()=>e(!1),a=l=>{n.current&&!n.current.contains(l.target)&&e(!1)};return window.addEventListener("scroll",o,{passive:!0}),document.addEventListener("mousedown",a),document.addEventListener("touchstart",a),()=>{window.removeEventListener("scroll",o),document.removeEventListener("mousedown",a),document.removeEventListener("touchstart",a)}},[t]);const s=()=>e(o=>!o),r=()=>e(!1);return f.jsxs(wd,{children:[f.jsx(Hi,{to:"/MacTavish",style:{cursor:"none"},children:f.jsx(Cd,{src:md})}),f.jsxs(Sd,{children:[f.jsxs(jd,{children:[f.jsxs(uo,{children:[f.jsx(Ad,{role:"presentation","aria-haspopup":"true","aria-expanded":t,style:{cursor:"default"},onClick:o=>{window.matchMedia("(hover: none)").matches?s():o.preventDefault()},children:"Projects"}),f.jsx("div",{style:{position:"absolute",left:"-20px",top:"0",width:"120px",height:"100%",background:"transparent",border:"none",pointerEvents:window.matchMedia&&window.matchMedia("(hover: none) and (pointer: coarse)").matches?"none":"auto",zIndex:1100}}),f.jsxs(Md,{$open:t,ref:n,children:[f.jsx(rt,{to:"/Microsoft",onClick:r,children:"Microsoft"}),f.jsx(rt,{to:"/Outsource",onClick:r,children:"Outsource"}),f.jsx(rt,{to:"/Ux",onClick:r,children:"Leysi"}),f.jsx(rt,{to:"/Piton",onClick:r,children:"Piton"}),f.jsx(rt,{to:"/ThreePillars",onClick:r,children:"Three Pillars"}),f.jsx(rt,{to:"/AccessDirect",onClick:r,children:"Access Direct"}),f.jsx(rt,{to:"/Giga",onClick:r,children:"Giga"}),f.jsx(rt,{to:"/GraphicDesign",onClick:r,children:"Graphic Design"})]})]}),f.jsx(uo,{children:f.jsx(Rd,{to:"/Resume",children:"Resume"})})]}),f.jsxs(bd,{children:[f.jsx(_d,{}),f.jsx(Td,{}),f.jsx(Pd,{}),f.jsx(xd,{}),f.jsx(vd,{})]})]})]})}const lr=({title:t,description:e,url:i,image:n,images:s=null,type:r="website",authorName:o="Zack MacTavish",authorAlternateNames:a=["Zachary MacTavish"],sameAs:l=[],keywords:u=[],jsonLd:c=null,favicons:d=null,siteDefaults:h=null,siteName:m=null,locale:g=null,robots:p=null,themeColor:y=null,twitterSite:v=null,twitterCreator:w=null})=>(k.useEffect(()=>{t&&(document.title=t);const x=(D,V,Q)=>{let de=document.querySelector(D);if(!de){de=document.createElement("meta");const Te=D.match(/\[(name|property)=['"]([^'"]+)['"]\]/);Te&&de.setAttribute(Te[1],Te[2]),document.head.appendChild(de)}de.setAttribute(V,Q)};e&&(x("[name='description']","content",e),x("[property='og:description']","content",e),x("[name='twitter:description']","content",e)),u&&u.length&&x("[name='keywords']","content",Array.isArray(u)?u.join(", "):u),t&&(x("[property='og:title']","content",t),x("[name='twitter:title']","content",t)),x("[property='og:type']","content",r),i&&x("[property='og:url']","content",i);const b=m||h&&h.siteName||null,_=g||h&&h.locale||null,A=p||h&&h.robots||null,P=y||h&&h.themeColor||null,T=v||h&&h.twitterSite||null,C=w||h&&h.twitterCreator||null;b&&x("[property='og:site_name']","content",b),_&&x("[property='og:locale']","content",_),A&&x("[name='robots']","content",A),P&&x("[name='theme-color']","content",P),T&&x("[name='twitter:site']","content",T),C&&x("[name='twitter:creator']","content",C);const j=h&&h.ogImages||[],M=s||(n?[n]:null)||j,E=D=>{document.querySelectorAll(D).forEach(V=>V.remove())};E("meta[property='og:image']"),E("meta[property='og:image:width']"),E("meta[property='og:image:height']");let L=null;if(M&&M.length?M.forEach(D=>{let V=D;if(typeof D=="string"&&(V={url:D}),!V||!V.url)return;const Q=document.createElement("meta");if(Q.setAttribute("property","og:image"),Q.setAttribute("content",V.url),document.head.appendChild(Q),V.width){const de=document.createElement("meta");de.setAttribute("property","og:image:width"),de.setAttribute("content",String(V.width)),document.head.appendChild(de)}if(V.height){const de=document.createElement("meta");de.setAttribute("property","og:image:height"),de.setAttribute("content",String(V.height)),document.head.appendChild(de)}L||(L=V.url)}):n&&(x("[property='og:image']","content",n),L=n),L?(x("[name='twitter:image']","content",L),x("[name='twitter:card']","content","summary_large_image")):x("[name='twitter:card']","content","summary"),i){let D=document.querySelector("link[rel='canonical']");D||(D=document.createElement("link"),D.setAttribute("rel","canonical"),document.head.appendChild(D)),D.setAttribute("href",i)}const O="seo-json-ld";let I=document.getElementById(O);const z={"@context":"https://schema.org","@type":"Person",name:o,url:i||window.location.href};a&&a.length&&(z.alternateName=a.length===1?a[0]:a),l&&l.length&&(z.sameAs=l);let U=c||z;if(!c)U=z;else try{const D=c;(D["@type"]==="CreativeWork"||D["@type"]==="Article")&&!D.author&&(D.author={"@type":"Person",name:o,url:i||window.location.href},a&&a.length&&(D.author.alternateName=a.length===1?a[0]:a),l&&l.length&&(D.author.sameAs=l)),U=D}catch{U=c}if(I?I.text=JSON.stringify(U):(I=document.createElement("script"),I.id=O,I.type="application/ld+json",I.text=JSON.stringify(U),document.head.appendChild(I)),o||a&&a.length){const D=[o].concat(a||[]).filter(Boolean).join(", ");x("[name='author']","content",D)}l&&l.length&&x("[name='sameAs']","content",l.join(", "));const F=d||h&&h.favicons||null,H=D=>{document.querySelectorAll(`link[rel='${D}']`).forEach(V=>V.remove())};H("icon"),H("shortcut icon"),H("apple-touch-icon"),H("manifest"),F&&(Array.isArray(F)?F.forEach(D=>{const V=document.createElement("link");D.rel?V.setAttribute("rel",D.rel):V.setAttribute("rel",D.sizes==="180x180"?"apple-touch-icon":"icon"),D.sizes&&V.setAttribute("sizes",D.sizes),V.setAttribute("href",D.href),document.head.appendChild(V)}):Object.entries(F).forEach(([D,V])=>{const Q=document.createElement("link");D==="180x180"?Q.setAttribute("rel","apple-touch-icon"):Q.setAttribute("rel","icon"),Q.setAttribute("sizes",D),Q.setAttribute("href",V),document.head.appendChild(Q)}))},[t,e,i,n,r,o,a,l,u,c,d,h,m,g,p,y,v,w]),null);var ho={exports:{}},xi={},fo;function Ed(){if(fo)return xi;fo=1;var t=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(n,s,r){var o=null;if(r!==void 0&&(o=""+r),s.key!==void 0&&(o=""+s.key),"key"in s){r={};for(var a in s)a!=="key"&&(r[a]=s[a])}else r=s;return s=r.ref,{$$typeof:t,type:n,key:o,ref:s!==void 0?s:null,props:r}}return xi.Fragment=e,xi.jsx=i,xi.jsxs=i,xi}var po;function Ld(){return po||(po=1,ho.exports=Ed()),ho.exports}var _t=Ld();zn`
  html, body, * { cursor: none !important; }
`;S.div`
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
`;const Od=S.div`
  width: 60vw;
  max-width: 1100px;
  margin: 0 auto;
  box-sizing: border-box;

  @media (max-width: 1000px) {
    width: 92vw;
  }
`;S(Od)`
  display: grid;
  grid-template-columns: ${t=>t.columns||"0.48fr 0.52fr"};
  gap: ${t=>t.gap||"2rem"};
  align-items: ${t=>t.align||"center"};

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;const Kn={fonts:{body:"Space Grotesk, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif"},spacing:{lg:"16px"},radii:{card:"18px"}};zn`
  :root {
    /* expose some common tokens as CSS vars for non-styled consumers */
    --radius-card: ${Kn.radii.card};
    --space-lg: ${Kn.spacing.lg};
  }
  * { box-sizing: border-box; }
  html, body, #root { height: 100%; }
  body {
    margin: 0;
    background-color: ${t=>t.theme.backgroundColor};
    color: ${t=>t.theme.fontColor};
    font-family: ${Kn.fonts.body};
  }
`;const Id=S.div`
  width: ${t=>t.$width||"62vw"};
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  gap: 2.2vw;
  align-items: center; /* Center text block vertically relative to image */
  padding: ${t=>t.theme?.spacing?.["3xl"]||"3rem"} 0;

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
`,Vd=S.div`
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
`,zd=S.img`
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
`,Fd=S.div`
  flex: 1 1 50%;
  font-family: 'Space Grotesk', sans-serif;
  font-size: ${t=>t.$textSize||"1.4rem"};
  color: ${t=>t.$textColor||"#fff"};
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
`;function Bd({imageSrc:t,imageAvif:e,imageWebp:i,imageAlt:n,children:s,imageWidth:r,columns:o,width:a,textSize:l,textColor:u,className:c,...d}){return _t.jsxs(Id,{$width:a,className:c,...d,children:[_t.jsx(Vd,{children:_t.jsxs("picture",{children:[e&&_t.jsx("source",{srcSet:e,type:"image/avif"}),i&&_t.jsx("source",{srcSet:i,type:"image/webp"}),_t.jsx(zd,{src:t,alt:n})]})}),_t.jsx(Fd,{$textSize:l,$textColor:u,children:s})]})}const se="https://mactavish.xyz",Ue={name:"Zack MacTavish",url:se,defaultImage:`${se}/assets/og/website-logoresolutions-1200x630.png`,sameAs:["https://dribbble.com/Zmactavish","https://www.instagram.com/zackmichaelmactavish","https://www.linkedin.com/in/zacharymactavish/","https://github.com/ZackMacTavish","https://medium.com/@zmactavish"],keywords:["product design","graphic design","UX","portfolio","Zack MacTavish"]},re={landing:{title:`${Ue.name} — Product & Graphic Designer`,description:"Product & graphic designer focused on brand, UX, and digital experiences. View work and contact.",url:`${se}/`,image:Ue.defaultImage,keywords:["portfolio","home","design","Zack MacTavish"]},giga:{title:"Giga — UX/UI & Branding | Zack MacTavish",description:"Case study: Giga — UX/UI, branding, and product design by Zack MacTavish.",url:`${se}/projects/giga`,image:`${se}/assets/Giga—Macbookv2.png`,datePublished:"2024-10-01",keywords:["giga","product design","ux","branding"]},outsource:{title:"Outsource — UX/UI & Branding | Zack MacTavish",description:"Case study: Outsource — branding, websites and UX work by Zack MacTavish.",url:`${se}/projects/outsource`,image:`${se}/assets/Outsource—Macbook.png`,datePublished:"2023-08-01",keywords:["outsource","branding","ux"]},piton:{title:"Piton — Project | Zack MacTavish",description:"Case study: Piton — UX and visual design work by Zack MacTavish.",url:`${se}/projects/piton`,image:`${se}/assets/Piton—Screens.jpg`,datePublished:"2023-02-01",keywords:["piton","branding","app design"]},ux:{title:"UX — Product & UX Projects | Zack MacTavish",description:"Portfolio of UX and product design projects by Zack MacTavish.",url:`${se}/projects/ux`,image:`${se}/assets/Giga—mockup.jpg`,keywords:["ux","product design"]},"access-direct":{title:"Access Direct — UX & Brand | Zack MacTavish",description:"Case study: Access Direct — brand, UX and website built by Zack MacTavish.",url:`${se}/projects/access-direct`,image:`${se}/assets/AD—Macs.jpg`,datePublished:"2022-10-01",keywords:["access direct","ux","brand"]},"graphic-design":{title:"Graphic Design — Portfolio | Zack MacTavish",description:"Graphic design and art pieces by Zack MacTavish, including posters, packaging, and editorial work.",url:`${se}/projects/graphic-design`,image:`${se}/assets/Cover.png`,keywords:["graphic design","posters","packaging"]},threepillars:{title:"ThreePillars — UX & Branding | Zack MacTavish",description:"Case study: ThreePillars — brand and web app design by Zack MacTavish.",url:`${se}/projects/threepillars`,image:`${se}/assets/ThreePillars—Macbook.png`,keywords:["threepillars","branding","ux"]},microsoft:{title:"Microsoft — Project | Zack MacTavish",description:"Case study: Microsoft — UX and visual design work by Zack MacTavish. Password protected.",url:`${se}/projects/microsoft`,image:Ue.defaultImage,keywords:["microsoft","branding","ux","password protected"]}},cr=S.div`
  width: 60vw;
  max-width: 1100px;
  margin: 0 auto;
  box-sizing: border-box;

  @media (max-width: 1000px) {
    width: 92vw;
  }
`,Dv=S(cr)`
  display: grid;
  grid-template-columns: ${t=>t.columns||"0.48fr 0.52fr"};
  gap: ${t=>t.gap||"2rem"};
  align-items: ${t=>t.align||"center"};

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`,nl=""+new URL("Me-BEhJ50qd.jpeg",import.meta.url).href,Ud=""+new URL("Me-C1cwp5zy.avif",import.meta.url).href,Nd=""+new URL("Me-Rnuwi3im.webp",import.meta.url).href,$d=""+new URL("hangingquilts-CSgyMA7c.jpg",import.meta.url).href,Gd=""+new URL("hangingquilts-4VrGTXBN.avif",import.meta.url).href,Wd=""+new URL("hangingquilts-DcA0AW0j.webp",import.meta.url).href;var sl={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},mo=dt.createContext&&dt.createContext(sl),Hd=["attr","size","title"];function Xd(t,e){if(t==null)return{};var i=Yd(t,e),n,s;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(s=0;s<r.length;s++)n=r[s],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}function Yd(t,e){if(t==null)return{};var i={};for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){if(e.indexOf(n)>=0)continue;i[n]=t[n]}return i}function vn(){return vn=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},vn.apply(this,arguments)}function go(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),i.push.apply(i,n)}return i}function wn(t){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?go(Object(i),!0).forEach(function(n){Kd(t,n,i[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):go(Object(i)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(i,n))})}return t}function Kd(t,e,i){return e=qd(e),e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function qd(t){var e=Zd(t,"string");return typeof e=="symbol"?e:e+""}function Zd(t,e){if(typeof t!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var n=i.call(t,e);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function rl(t){return t&&t.map((e,i)=>dt.createElement(e.tag,wn({key:i},e.attr),rl(e.child)))}function ur(t){return e=>dt.createElement(Jd,vn({attr:wn({},t.attr)},e),rl(t.child))}function Jd(t){var e=i=>{var{attr:n,size:s,title:r}=t,o=Xd(t,Hd),a=s||i.size||"1em",l;return i.className&&(l=i.className),t.className&&(l=(l?l+" ":"")+t.className),dt.createElement("svg",vn({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},i.attr,n,o,{className:l,style:wn(wn({color:t.color||i.color},i.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),r&&dt.createElement("title",null,r),t.children)};return mo!==void 0?dt.createElement(mo.Consumer,null,i=>e(i)):e(sl)}function Qd(t){return ur({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"7",y1:"17",x2:"17",y2:"7"},child:[]},{tag:"polyline",attr:{points:"7 7 17 7 17 17"},child:[]}]})(t)}function Ev(t){return ur({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"},child:[]},{tag:"polyline",attr:{points:"7 10 12 15 17 10"},child:[]},{tag:"line",attr:{x1:"12",y1:"15",x2:"12",y2:"3"},child:[]}]})(t)}function eh(t){return ur({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M7 11V7a5 5 0 0 1 10 0v4"},child:[]}]})(t)}const th=S.div`
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
`;function Ji(t){if(!t)return t;try{return encodeURI(decodeURI(t))}catch{return encodeURI(t)}}const ih=S.div`
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
`,nh=S.div`
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
`,sh=S.div`
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
`,yo=S.img`
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
`,rh=S.h1`
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
`,oh=S.div`
  height: 1px;
  background: #e0e0e0;
  width: 48px;
  margin: 0.1em 0 0.3em 0;

  @media (max-width: 850px) {
    margin: 0 auto 0.2rem;
  }
`;function ol({title:t,imageBaseName:e,imageSrc:i,imageExt:n="png",imageAlt:s="",$imageWidth:r="38vw",buttons:o=[],divider:a=!0}){const l=e?`${e.startsWith("assets/")?"/":"/src/"}${e}`:null,u=l?Ji(`${l}.avif`):null,c=l?Ji(`${l}.webp`):null,d=l?Ji(`${l}.${n}`):null;return f.jsxs(ih,{children:[f.jsxs(nh,{children:[f.jsx(rh,{children:t}),a&&f.jsx(oh,{}),f.jsx(th,{children:o.map(({href:h,label:m},g)=>f.jsxs(al,{href:h,target:"_blank",rel:"noopener noreferrer",children:[m," ",f.jsx(Qd,{style:{marginLeft:6,fontSize:"1.2em"}})]},g))})]}),f.jsx(sh,{children:e?f.jsxs("picture",{children:[f.jsx("source",{srcSet:u,type:"image/avif"}),f.jsx("source",{srcSet:c,type:"image/webp"}),f.jsx(yo,{src:d,alt:s,$imageWidth:r})]}):f.jsx(yo,{src:Ji(i),alt:s,$imageWidth:r})})]})}const ah=""+new URL("iphones—Mockup-Bvav94lR.avif",import.meta.url).href,lh=""+new URL("iphones—Mockup-BBerJEYg.webp",import.meta.url).href,ch=""+new URL("iphones—Mockup-huIJePT7.png",import.meta.url).href,uh=""+new URL("Giga—mockup-Cnh_KW7P.jpg",import.meta.url).href,dh=""+new URL("Messages—1920 x 1400-FBHNown_.png",import.meta.url).href,hh=""+new URL("Messages—1920 x 1400-Vn-3sQrl.avif",import.meta.url).href,fh=""+new URL("Messages—1920 x 1400-Df8RyXSi.webp",import.meta.url).href,ph=""+new URL("iMac_2-ByB4ft45.jpg",import.meta.url).href,mh=""+new URL("iPad2-7y6oKxfc.jpg",import.meta.url).href,gh=""+new URL("iPad2-CzLEDSAu.avif",import.meta.url).href,yh=""+new URL("iPad2-C6zybvis.webp",import.meta.url).href,xh=""+new URL("iPhone_2—Dark—Sq-CMwx-i__.jpg",import.meta.url).href,vh=""+new URL("iPhone_2—Dark—Sq-o8OVfniw.avif",import.meta.url).href,wh=""+new URL("iPhone_2—Dark—Sq-CN0kweFU.webp",import.meta.url).href,bh=""+new URL("LightPhone2—Sq-BQ4v3uUl.jpg",import.meta.url).href,_h=""+new URL("LightPhone2—Sq-BAf3JCmK.avif",import.meta.url).href,Th=""+new URL("LightPhone2—Sq-BILeUpsy.webp",import.meta.url).href,kh=""+new URL("iMac-BBUHxs4x.jpg",import.meta.url).href,Ph=""+new URL("iMac-D7y2uSFv.avif",import.meta.url).href,Ch=""+new URL("iMac-Cm5Zrfme.webp",import.meta.url).href,Sh=""+new URL("About-DuQLmo8y.png",import.meta.url).href,jh=""+new URL("About-DLK3SCR5.avif",import.meta.url).href,Ah=""+new URL("About-Cx6Nw1aR.webp",import.meta.url).href,Rh=""+new URL("Guides-CQbHOjad.jpg",import.meta.url).href,Mh=""+new URL("Guides-6vl73ahM.avif",import.meta.url).href,Dh=""+new URL("Guides-sAG3dRfa.webp",import.meta.url).href,Eh=""+new URL("CreateNewPost-CaFWZEze.png",import.meta.url).href,Lh=""+new URL("CreateNewPost-DFUk0sow.avif",import.meta.url).href,Oh=""+new URL("CreateNewPost-DIIwIC2x.webp",import.meta.url).href,al=S.a`
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
`,dr=S.div`
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
`,hr=S.div`
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
`,et=S.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`,tt=S.h3`
  color: ${t=>t.theme.fontColor};
  font-size: 2.25rem;
  margin: 0;

  @media (max-width: 1320px) {
    font-size: 2.1rem;
  }

  @media (max-width: 850px) {
    font-size: 1.8rem;
  }
`,it=S.h6`
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
`,Ih=S.img`
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
`,Vh=S.h3`
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
`,zh=S.img.attrs({loading:"lazy",decoding:"async"})`
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
`,Fh=S.div`
width: 100vw;
background-color: #2CA0FD;
grid-row-start: 4;
grid-row-end: 9;
z-index: -5;
`,fr=S.div`
background-color: ${t=>t.theme.backgroundTwo};
`,Bh=S.div`
display: flex;
width: 100vw;
height: auto;

@media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    height: auto;
}
`,Uh=S.div`
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
`,Nh=S.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  max-width: 600px;

  @media (max-width: 1000px) {
    align-items: center;    /* centers the block horizontally */
    text-align: left;       /* keeps text left-aligned inside */
    margin-bottom: 2vh;     /* spacing below the text before image */
  }
`,$h=S.img`
  width: ${t=>t.Width};
  height: auto;

  @media (max-width: 1000px) {
    width: 80vw; /* image slightly bigger on vertical stack */
  }
`,Gh=S.h2`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 4.5rem;
  color: ${t=>t.theme.fontColor};
  margin: 0;

  @media (max-width: 850px) {
    font-size: 3rem;
  }
`,Wh=S.a`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.4rem;
  color: ${t=>t.theme.fontColor};
  text-decoration: none;
  margin-top: 1vh;

  &:hover {
    opacity: 0.75;
  }
`;function Hh(){return k.useLayoutEffect(()=>{window.scrollTo(0,0)}),f.jsxs(fr,{children:[f.jsx(lr,{...re.giga,sameAs:Ue.sameAs,keywords:re.giga.keywords,jsonLd:{"@context":"https://schema.org","@type":"CreativeWork",headline:re.giga.title,description:re.giga.description,image:re.giga.image,author:{"@type":"Person",name:Ue.name,url:`${Ue.url}/about`},url:re.giga.url,datePublished:re.giga.datePublished,keywords:re.giga.keywords}}),f.jsx(ol,{title:"Giga",imageBaseName:"assets/Giga—Macbookv2",imageExt:"png",imageAlt:"Giga Macbook Mockup",imageWidth:"38vw",buttons:[{href:"https://gigaintelligence.com",label:"Visit Giga"}]}),f.jsx(dr,{children:f.jsxs(hr,{children:[f.jsxs(et,{children:[f.jsx(tt,{children:"Project Type"}),f.jsx(it,{children:"UX/UI, Branding, Strategy"})]}),f.jsxs(et,{children:[f.jsx(tt,{children:"Digital Product"}),f.jsx(it,{children:"Digital strategy platform used for data management, and private channel creation"})]}),f.jsxs(et,{children:[f.jsx(tt,{children:"My Role"}),f.jsx(it,{children:"Responsible for researching, ideating, and generating ideas for a cohesive Giga experience. Designed and prototyped the Giga system & Web App"})]}),f.jsxs(et,{children:[f.jsx(tt,{children:"Timeframe"}),f.jsx(it,{children:"1 1/2 years"})]})]})}),f.jsx(Lt,{src:ah,webp:lh,fallback:ch,style:{width:"100vw",maxWidth:"100vw",height:"auto",objectFit:"cover",display:"block",margin:0,padding:0,borderRadius:0}}),f.jsx(oi,{style:{backgroundColor:"#ffffff"},children:f.jsx(ri,{children:f.jsx(si,{style:{color:"#5D5D5D"},children:"Giga is a startup focused on sharing experiences between its users. Through a robust data management system, users can share information and learn about their favorite subjects"})})}),f.jsx(Lt,{src:uh}),f.jsx(Pe,{children:f.jsx(oe,{src:dh,avif:hh,webp:fh})}),f.jsx(Pe,{children:f.jsx(oe,{src:Eh,avif:Lh,webp:Oh})}),f.jsx(Lt,{src:ph}),f.jsx(Pe,{children:f.jsx(oe,{src:mh,avif:gh,webp:yh})}),f.jsx(pr,{srcLeft:xh,avifLeft:vh,webpLeft:wh,srcRight:bh,avifRight:_h,webpRight:Th}),f.jsx(Pe,{children:f.jsx(oe,{src:kh,avif:Ph,webp:Ch})}),f.jsx(Pe,{style:{paddingBottom:"7vh"},children:f.jsxs("div",{style:{width:"100%",display:"flex",justifyContent:"center"},children:[f.jsx(oe,{src:Sh,avif:jh,webp:Ah,style:{width:"60vw",maxWidth:"420px",minHeight:"auto",height:"auto",borderRadius:24,boxShadow:"0 2px 12px 0 rgba(0,0,0,0.06)"}}),f.jsx("style",{children:`
      @media (max-width: 850px) {
        .about-me-img {
          width: 96vw !important;
          max-width: 96vw !important;
          min-height: 60vw !important;
          border-radius: 0 !important;
        }
      }
    `})]})}),f.jsx(Pe,{style:{justifyContent:"center"},children:f.jsx(oe,{src:Rh,avif:Mh,webp:Dh})}),f.jsx(oi,{style:{backgroundColor:"black"},children:f.jsx(ri,{children:f.jsxs(si,{style:{color:"white",textAlign:"center"},children:["Founder — Rich Devlin",f.jsx("br",{}),"Lead Designer — Zachary MacTavish",f.jsx("br",{}),"Front-End Development — Xing Yi & Joel Fernando",f.jsx("br",{}),"Back-End Development — Rich Devlin"]})})})]})}const Xh=Object.freeze(Object.defineProperty({__proto__:null,BackgroundColor:Fh,Cellphones:Bh,GigaRocket:Ih,ProjectBlock:et,ProjectButton:al,ProjectContent:Nh,ProjectDetails:hr,ProjectDetailsContainer:dr,ProjectGrid:Uh,ProjectHeader:tt,ProjectImage:$h,ProjectLink:Wh,ProjectSubtitle:it,ProjectTitle:Gh,RisoItemtwo:zh,StyledDiv:fr,TextSection:Vh,default:Hh},Symbol.toStringTag,{value:"Module"})),Yh=""+new URL("Highpower-CRTc0nnX.jpg",import.meta.url).href,Kh=""+new URL("Highpower-CsvHkKEI.avif",import.meta.url).href,qh=""+new URL("Highpower-boH7bfqj.webp",import.meta.url).href,Zh=""+new URL("AD—iphones-Ds9NHmDv.jpg",import.meta.url).href,Jh=""+new URL("AD—iphones-BiYAAO7N.avif",import.meta.url).href,Qh=""+new URL("AD—iphones-DGO6M8H3.webp",import.meta.url).href,ef=""+new URL("AD—pages-DKeMWlEm.jpg",import.meta.url).href,tf=""+new URL("AD—pages-BS_f5aWS.avif",import.meta.url).href,nf=""+new URL("AD—pages-sKiLGjS1.webp",import.meta.url).href,sf=""+new URL("AD—Macs-C-BI5_ml.jpg",import.meta.url).href,rf=""+new URL("AD—Macs-CXf9hZaT.avif",import.meta.url).href,of=""+new URL("AD—Macs--XjCyU3R.webp",import.meta.url).href,af=""+new URL("AD-ipad-7WzgOi0E.jpg",import.meta.url).href,lf=""+new URL("AD-ipad-CUp8F2b6.avif",import.meta.url).href,cf=""+new URL("AD-ipad-B7-837tt.webp",import.meta.url).href,uf=""+new URL("ADiPhone_2—Dark-BP_0B_M9.jpg",import.meta.url).href,df=""+new URL("ADLightPhone2-C7enY0US.jpg",import.meta.url).href,hf=""+new URL("ADiMac-Bsrxdz-Q.png",import.meta.url).href,ff=""+new URL("ADiMac-DlvZlRIn.avif",import.meta.url).href,pf=""+new URL("ADiMac-CKTwTd3P.webp",import.meta.url).href,mf=""+new URL("Group 375-vcp1kghj.png",import.meta.url).href,gf=""+new URL("Group 375-mZsO1BcE.avif",import.meta.url).href,yf=""+new URL("Group 375-TF0Alkqk.webp",import.meta.url).href,xf=""+new URL("Guides2-C--leQ0V.png",import.meta.url).href,vf=""+new URL("Guides2-DiNUbQbr.avif",import.meta.url).href,wf=""+new URL("Guides2-DIlDKfWv.webp",import.meta.url).href,bf=""+new URL("Group 274-k1yUScXs.png",import.meta.url).href,_f=""+new URL("Group 274-CN_qORPC.avif",import.meta.url).href,Tf=""+new URL("Group 274-CPP1pgPP.webp",import.meta.url).href,ei=t=>{if(!t)return t;try{return encodeURI(decodeURI(t))}catch{return encodeURI(t)}},Lt=({src:t,avif:e,webp:i,alt:n="",style:s={}})=>{typeof t=="string"&&t.split("/").pop().replace(/\.[^.]+$/,"");const r=ei(t),o=ei(e),a=ei(i);return f.jsxs("picture",{children:[o&&f.jsx("source",{srcSet:o,type:"image/avif"}),a&&f.jsx("source",{srcSet:a,type:"image/webp"}),f.jsx("img",{src:r,alt:n,style:{width:"100vw",height:"auto",margin:"3vh auto",display:"block",backgroundColor:"white",...s},loading:"lazy",decoding:"async"})]})},kf=S.div`
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
`,si=S.p`
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
`,ri=S.div`
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
`,oi=S.section`
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
`,oe=({src:t,avif:e,webp:i,alt:n="",width:s="60vw",style:r={},responsive:o=!0,loading:a="lazy",decoding:l="async"})=>{typeof t=="string"&&t.split("/").pop().replace(/\.[^.]+$/,"");const u=ei(t),c=ei(e),d=ei(i),h={width:s,maxWidth:"1000px",height:"auto",display:"block",borderRadius:"24px",boxShadow:"0 2px 12px 0 rgba(0,0,0,0.06)",...r};return f.jsxs("picture",{children:[c&&f.jsx("source",{srcSet:c,type:"image/avif"}),d&&f.jsx("source",{srcSet:d,type:"image/webp"}),o&&f.jsx("style",{children:".single-image-responsive { @media (max-width: 1320px) { width: 90vw !important; max-width: 90vw !important; } @media (max-width: 850px) { width: 100vw !important; max-width: 100vw !important; border-radius: 0 !important; } }"}),f.jsx("img",{src:u,alt:n,className:o?"single-image-responsive":void 0,style:h,loading:a,decoding:l})]})},Pe=S.div`
  display: flex;
  justify-content: center;
  background-color: ${t=>t.theme.backgroundTwo};
  align-items: center;
  height: auto;
  padding: 3vh 0;
  width: 100vw;
`,Pf=S.div`
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
`,pr=({srcLeft:t,srcRight:e,altLeft:i="",altRight:n="",styleLeft:s={},styleRight:r={}})=>f.jsxs("div",{style:{display:"flex",width:"100vw",height:"auto",flexWrap:"wrap",margin:0,padding:0},children:[f.jsx("img",{src:t,alt:i,style:{width:"50vw",height:"auto",display:"block",borderRadius:0,boxShadow:"none",margin:0,padding:0,...s},loading:"lazy",decoding:"async"}),f.jsx("img",{src:e,alt:n,style:{width:"50vw",height:"auto",display:"block",borderRadius:0,boxShadow:"none",margin:0,padding:0,...r},loading:"lazy",decoding:"async"})]});function Cf(){return k.useEffect(()=>{window.scrollTo(0,0)},[]),f.jsxs(fr,{children:[f.jsx(lr,{...re["access-direct"],sameAs:Ue.sameAs,keywords:re["access-direct"].keywords,jsonLd:{"@context":"https://schema.org","@type":"CreativeWork",headline:re["access-direct"].title,description:re["access-direct"].description,image:re["access-direct"].image,author:{"@type":"Person",name:Ue.name,url:`${Ue.url}/about`},url:re["access-direct"].url,datePublished:re["access-direct"].datePublished,keywords:re["access-direct"].keywords}}),f.jsx(ol,{title:"Access Direct",imageBaseName:"assets/AD—Macbook",imageExt:"png",imageAlt:"Access Direct Macbook Mockup",imageWidth:"38vw",buttons:[{href:"https://access-direct.net",label:"Visit Access Direct"}]}),f.jsx(dr,{children:f.jsxs(hr,{children:[f.jsxs(et,{children:[f.jsx(tt,{children:"Project Type"}),f.jsx(it,{children:"UX/UI, Branding, Strategy, Front-end development"})]}),f.jsxs(et,{children:[f.jsx(tt,{children:"Product"}),f.jsx(it,{children:"Brand identity, print materials, and a website built with React.js"})]}),f.jsxs(et,{children:[f.jsx(tt,{children:"My Role"}),f.jsx(it,{children:"Responsible for tidying up the brand logo, colors, creating print materials for tradeshows, social media, digital brochures and flyers, and building the company website"})]}),f.jsxs(et,{children:[f.jsx(tt,{children:"Timeframe"}),f.jsx(it,{children:"4 years (Part-time)"})]})]})}),f.jsx(Lt,{src:Zh,avif:Jh,webp:Qh,style:{backgroundColor:"white",width:"100vw",maxWidth:"100vw",height:"auto",objectFit:"cover",display:"block",margin:0,padding:0,borderRadius:0}}),f.jsx(oi,{style:{backgroundColor:"white"},children:f.jsx(ri,{children:f.jsx(si,{style:{color:"#5d5d5d"},children:"Access Direct is a company focused on security solutions. I collaborated closely on the project, working on their brand identity, logos, and website. I served as the UI Designer and Webmaster, redesigning the site and building it using React.js."})})}),f.jsx(Lt,{src:ef,avif:tf,webp:nf,style:{backgroundColor:"white",width:"100vw",maxWidth:"100vw",borderRadius:0,margin:"0 auto"}}),f.jsx(Pe,{children:f.jsx(oe,{src:Yh,avif:Kh,webp:qh})}),f.jsx(Pe,{children:f.jsx(oe,{src:bf,avif:_f,webp:Tf})}),f.jsx(Lt,{src:sf,avif:rf,webp:of,style:{backgroundColor:"white",width:"100vw",maxWidth:"100vw",borderRadius:0,margin:"0 auto"}}),f.jsx(Pe,{children:f.jsx(oe,{src:af,avif:lf,webp:cf})}),f.jsx(pr,{srcLeft:uf,srcRight:df,altLeft:"AD iPhone 2 Dark",altRight:"AD Light Phone 2",styleLeft:{},styleRight:{}}),f.jsx(Pe,{children:f.jsx(oe,{src:hf,avif:ff,webp:pf})}),f.jsx(Pe,{children:f.jsx(oe,{src:mf,avif:gf,webp:yf})}),f.jsx(Pe,{children:f.jsx(oe,{src:xf,avif:vf,webp:wf})}),f.jsx(oi,{style:{backgroundColor:"black"},children:f.jsx(ri,{children:f.jsxs(si,{style:{color:"white",textAlign:"center"},children:["Founder — David Smith",f.jsx("br",{}),"Lead Designer — Zachary MacTavish",f.jsx("br",{}),"Website Development — Zachary MacTavish",f.jsx("br",{}),"Content Direction — Wendy Majewski, Alek Vasic"]})})})]})}const Sf=Object.freeze(Object.defineProperty({__proto__:null,DoubleImage:pr,FullBg:Lt,FullHeightTextSection:oi,ParagraphFour:kf,RisoFlex:Pe,SingleGrid:Pf,SingleImage:oe,TextContainer:ri,TextContent:si,default:Cf},Symbol.toStringTag,{value:"Module"})),ll=""+new URL("LeysiApp—Screens copy-BaSGok0d.jpg",import.meta.url).href,jf=""+new URL("LeysiApp—Screens copy-DyDGGxMx.avif",import.meta.url).href,Af=""+new URL("LeysiApp—Screens copy-Bn1_GwZn.webp",import.meta.url).href,cl=""+new URL("ThreePillars—pages-HOFvvO-e.jpg",import.meta.url).href,Rf=""+new URL("ThreePillars—pages-qf8SA0OC.avif",import.meta.url).href,Mf=""+new URL("ThreePillars—pages-DaWfehtu.webp",import.meta.url).href,Df=""+new URL("Group 55618@2x-BcOmtPnh.png",import.meta.url).href,Ef=""+new URL("Group 55618@2x-CX4oNLta.avif",import.meta.url).href,Lf=""+new URL("Group 55618@2x-BM0PHBLp.webp",import.meta.url).href,ul=""+new URL("BrandGuidelines—Mockup-ChTa7oCn.jpg",import.meta.url).href,Of=""+new URL("BrandGuidelines—Mockup-DB0KQvec.avif",import.meta.url).href,If=""+new URL("BrandGuidelines—Mockup-CdO6X1p5.webp",import.meta.url).href,Vf=""+new URL("iphones—Mockup copy-BrqRRBeO.png",import.meta.url).href,zf=""+new URL("iphones—Mockup copy-CKCSpVv0.avif",import.meta.url).href,Ff=""+new URL("iphones—Mockup copy-R29mjgfV.webp",import.meta.url).href,dl="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2025.4.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2084.5%2048'%20style='enable-background:new%200%200%2084.5%2048;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%23A6D1CA;}%20%3c/style%3e%3cg%3e%3cpath%20class='st0'%20d='M23.8,0C37,0,47.7,10.7,47.7,24S37,48,23.8,48S0,37.2,0,24S10.7,0,23.8,0z%20M61.9,1.4%20c6.6,0,11.9,10.1,11.9,22.6h0c0,12.5-5.3,22.6-11.9,22.6S50,36.5,50,24S55.3,1.4,61.9,1.4z%20M80.3,3.8c2.3,0,4.2,9.1,4.2,20.2%20c0,11.2-1.9,20.2-4.2,20.2s-4.2-9.1-4.2-20.2S78,3.8,80.3,3.8z'/%3e%3c/g%3e%3c/svg%3e",Bf=""+new URL("Card1-3--mHPQ8.webp",import.meta.url).href,Uf=""+new URL("Card2-DkNuGfII.webp",import.meta.url).href,Nf=""+new URL("Card3-DFuv6FGk.webp",import.meta.url).href,$f=""+new URL("Card4-1NFXU0cZ.webp",import.meta.url).href,Gf=""+new URL("Card5-BWd32u-m.webp",import.meta.url).href,Wf=""+new URL("Card6-Dy8ZNgWu.png",import.meta.url).href,Hf="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2025.4.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2084.5%2084.5'%20style='enable-background:new%200%200%2084.5%2084.5;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%23A6D1CA;}%20%3c/style%3e%3cpath%20class='st0'%20d='M42.3,0C19,0,0,19,0,42.3s19,42.3,42.3,42.3s42.3-19,42.3-42.3S65.6,0,42.3,0z%20M42.3,7c8.9,0,17,3.4,23.2,8.8%20c-0.7,0.9-1.6,2-3,3.4c-3,2.9-7.8,6.4-15.2,9.1c-5-9.2-9.9-16.1-13.1-20.5C36.8,7.3,39.5,7,42.3,7z%20M27.3,10.3%20c2.9,3.8,8,10.8,13.2,20.1C26.2,34.3,13,34.8,7.8,34.8C10.2,23.9,17.5,14.9,27.3,10.3z%20M70.3,21c4.3,5.7,7,12.7,7.2,20.4%20c-3.1-0.7-7.8-1.4-13.8-1.4c-3.1,0-6.7,0.2-10.5,0.7c-0.9-2-1.8-3.9-2.8-5.8c7.9-3,13.3-7,16.8-10.5C68.6,23.1,69.5,22.1,70.3,21z%20M43.7,36.9c0.8,1.6,1.6,3.3,2.4,5.1c-15.1,4.2-25.9,16.9-30.5,23.3C10.3,59.1,7,51.1,7,42.3c0-0.2,0-0.3,0-0.4%20C11.8,41.9,26.9,41.5,43.7,36.9z%20M63.7,46.9c6.3,0,10.6,0.9,13.2,1.5c-1.6,9.4-6.9,17.4-14.4,22.7c-1.4-8.4-3.7-16.4-6.5-23.8%20C58.8,47.1,61.4,46.9,63.7,46.9z%20M48.9,48.5c3.2,8,5.8,16.9,7.2,26.2c-4.2,1.8-8.9,2.8-13.8,2.8c-8.1,0-15.5-2.7-21.5-7.3%20C24.4,65.3,35.1,52.1,48.9,48.5z'/%3e%3c/svg%3e",Xf="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2025.4.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2083.7%2083.7'%20style='enable-background:new%200%200%2083.7%2083.7;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%23A6D1CA;}%20%3c/style%3e%3cpath%20class='st0'%20d='M41.9,0C18.8,0,0,18.8,0,41.9s18.8,41.9,41.9,41.9s41.9-18.8,41.9-41.9S64.9,0,41.9,0z%20M41.9,6.3%20c19.7,0,35.6,15.9,35.6,35.6c0,16-10.6,29.6-25.1,34V65.2c0-4-2.3-7.4-5.6-9.1c11.2-2.2,18.2-11.2,15.5-20.2c-0.5-1.8-1.4-3.5-2.7-5%20c0.9-2.9,2-7.9-0.5-11.8c-4.8,0-7.8,3.3-9.3,5.3c-2.5-0.8-5.2-1.2-7.9-1.3c-2.7,0-5.4,0.4-7.9,1.2c-1.5-2-4.5-5.3-9.3-5.3%20c-2.8,4.5-1.1,9.4-0.1,11.4c-6.5,7.7-4,18.1,5.6,23.3c2.1,1.1,4.4,1.9,6.9,2.4c-2.7,1.4-4.8,4-5.4,7.1h-2.8c-2.7,0-3.8-1.1-5.2-3%20c-1.4-1.9-3-3.1-4.9-3.6c-1-0.1-1.7,0.7-0.8,1.3c3,2,3.2,5.3,4.4,7.5c1.1,2,3.3,3.7,5.8,3.7h3.3v6.8c-14.6-4.5-25.1-18-25.1-34%20C6.3,22.2,22.2,6.3,41.9,6.3z'/%3e%3c/svg%3e",Yf="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2025.4.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2081.2%2081.2'%20style='enable-background:new%200%200%2081.2%2081.2;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%23A6D1CA;}%20%3c/style%3e%3cpath%20class='st0'%20d='M22.6,0C10.1,0,0,10.1,0,22.6v36.1c0,12.4,10.1,22.6,22.6,22.6h36.1c12.4,0,22.6-10.1,22.6-22.6V22.6%20C81.2,10.1,71.1,0,58.6,0H22.6z%20M22.6,9h36.1c7.5,0,13.5,6.1,13.5,13.5v36.1c0,7.5-6.1,13.5-13.5,13.5H22.6C15.1,72.2,9,66.1,9,58.6%20V22.6C9,15.1,15.1,9,22.6,9z%20M63.1,13.5c-2.5,0-4.5,2-4.5,4.5s2,4.5,4.5,4.5c2.5,0,4.5-2,4.5-4.5S65.6,13.5,63.1,13.5z%20M40.6,18%20C28.2,18,18,28.2,18,40.6s10.1,22.6,22.6,22.6S63.1,53,63.1,40.6S53,18,40.6,18z%20M40.6,27.1c7.5,0,13.5,6.1,13.5,13.5%20s-6.1,13.5-13.5,13.5s-13.5-6.1-13.5-13.5S33.1,27.1,40.6,27.1z'/%3e%3c/svg%3e",Kf="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2025.4.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2079.1%2079.1'%20style='enable-background:new%200%200%2079.1%2079.1;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%23A6D1CA;}%20%3c/style%3e%3cpath%20class='st0'%20d='M12.1,0C5.5,0,0,5.5,0,12.1V67c0,6.6,5.5,12.1,12.1,12.1H67c6.6,0,12.1-5.5,12.1-12.1V12.1%20C79.1,5.5,73.7,0,67,0H12.1z%20M12.1,6.6H67c3.1,0,5.5,2.4,5.5,5.5V67c0,3.1-2.4,5.5-5.5,5.5H12.1c-3.1,0-5.5-2.4-5.5-5.5V12.1%20C6.6,9,9,6.6,12.1,6.6z%20M20.9,15.4c-3,0-5.5,2.5-5.5,5.5s2.5,5.5,5.5,5.5s5.5-2.5,5.5-5.5S23.9,15.4,20.9,15.4z%20M17.6,30.8%20c-1.2,0-2.2,1-2.2,2.2v28.6c0,1.2,1,2.2,2.2,2.2h6.6c1.2,0,2.2-1,2.2-2.2V33c0-1.2-1-2.2-2.2-2.2H17.6z%20M33,30.8%20c-1.2,0-2.2,1-2.2,2.2v28.6c0,1.2,1,2.2,2.2,2.2h6.6c1.2,0,2.2-1,2.2-2.2V45.1c0-3,2.5-5.5,5.5-5.5c3,0,5.5,2.5,5.5,5.5v16.5%20c0,1.2,1,2.2,2.2,2.2h6.6c1.2,0,2.2-1,2.2-2.2V44c0-7.3-5.9-13.2-13.2-13.2c-3.4,0-6.5,1.3-8.8,3.4V33c0-1.2-1-2.2-2.2-2.2H33z'/%3e%3c/svg%3e",Rt=S.span`
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
`,vi=S.a`
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: 4px;
  &:hover ${Rt}, &:focus ${Rt} {
    visibility: visible;
    opacity: 1;
  }
`,qf=S.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1vw;
  
  @media (max-width: 450px) { 
    max-width: 320px;
    justify-content: flex-start;
    gap: 3vw;
  }


`,wi=S.img`
  width: clamp(44px, 2vw, 70px);
  transition: all 1s ease;
  display: block;

  &:hover {
    filter: invert(0.2) sepia(0.5) saturate(11.7) hue-rotate(313.2deg) brightness(1.2);
  }
`;function Zf(){return f.jsxs(qf,{children:[f.jsxs(vi,{href:"https://dribbble.com/Zmactavish",target:"_blank",rel:"noreferrer","aria-label":"Dribbble",children:[f.jsx(wi,{src:Hf}),f.jsx(Rt,{children:"Dribbble"})]}),f.jsxs(vi,{href:"https://www.instagram.com/zackmichaelmactavish",target:"_blank",rel:"noreferrer","aria-label":"Instagram",children:[f.jsx(wi,{src:Yf}),f.jsx(Rt,{children:"Instagram"})]}),f.jsxs(vi,{href:"https://www.linkedin.com/in/zacharymactavish/",target:"_blank",rel:"noreferrer","aria-label":"LinkedIn",children:[f.jsx(wi,{src:Kf}),f.jsx(Rt,{children:"LinkedIn"})]}),f.jsxs(vi,{href:"https://github.com/ZackMacTavish",target:"_blank",rel:"noreferrer","aria-label":"Github",children:[f.jsx(wi,{src:Xf}),f.jsx(Rt,{children:"Github"})]}),f.jsxs(vi,{href:"https://medium.com/@zmactavish",target:"_blank",rel:"noreferrer","aria-label":"Medium",children:[f.jsx(wi,{src:dl}),f.jsx(Rt,{children:"Medium"})]})]})}const Jf=S.section`
  width: 100vw;
  background: white;
  padding: 14vh 5vw;
  box-sizing: border-box;
`,Qf=S(cr)``,ep=S.h2`
  margin: 0 0 2rem;
  font-family: "Space Grotesk", sans-serif;
  font-size: clamp(1.4rem, 3vw, 2rem);
  color: #111;
`,tp=S.div`
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
`,ip=S.div`
  display: flex;
  flex-direction: column;
`,Ct=S(Hi)`
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
`,hl=S.div`
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  filter: saturate(0.9);
  transition: filter 180ms ease;
`,Xt=S.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.15));
  transition: background 180ms ease;
`,np=S.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  pointer-events: none;
  color: #111;
`,$t=S.div.attrs({"data-cursor":"link",role:"link"})`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 0.75rem;
`,St=S.h3`
  margin: 0;
  font-family: "Space Grotesk", sans-serif;
  font-weight: 600;
  font-size: 1.15rem;
  color: #111;
  transition: color 160ms ease;
`,Gt=S.p`
  margin: 0;
  font-family: "Space Grotesk", sans-serif;
  font-size: 0.95rem;
  color: #5d5d5d;
`,Wt=S(ip)`
  &:hover ${Ct} {
    transform: translateY(-3px);
    box-shadow: 0 10px 36px rgba(0, 0, 0, 0.12);
  }

  &:hover ${hl} {
    filter: saturate(1.08) brightness(1.05);
  }

  &:hover ${Xt} {
    background: linear-gradient(to top, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.08));
  }

  &:hover ${St} {
    color: ${t=>t.theme.backgroundColor};
  }
`;function sp(){return f.jsx(Jf,{children:f.jsxs(Qf,{children:[f.jsx(ep,{children:"My projects"}),f.jsxs(tp,{children:[f.jsxs(Wt,{children:[f.jsxs(Ct,{to:"/Microsoft","aria-label":"Microsoft project",children:[f.jsx(hl,{style:{backgroundImage:"url('/assets/HP.png')",filter:"saturate(0.9) blur(2px)",transform:"scale(1.03)"}}),f.jsx("div",{style:{position:"absolute",inset:0,background:"rgba(255,255,255,0.7)"}}),f.jsx(np,{children:f.jsx(eh,{size:48})})]}),f.jsxs($t,{children:[f.jsx(St,{children:"Microsoft"}),f.jsx(Gt,{children:"Shopping ecosystem across Bing, Copilot, Windows, Outlook"})]})]}),f.jsxs(Wt,{children:[f.jsxs(Ct,{to:"/Ux","aria-label":"Leysi project",children:[f.jsx(oe,{src:ll,avif:jf,webp:Af,alt:"Leysi project tile",width:"100%",responsive:!1,style:{position:"absolute",inset:0,height:"100%",objectFit:"cover",zIndex:0,borderRadius:0,boxShadow:"none"}}),f.jsx(Xt,{})]}),f.jsxs($t,{children:[f.jsx(St,{children:"Leysi"}),f.jsx(Gt,{children:"Brand identity and iOS app for campus deals"})]})]}),f.jsxs(Wt,{children:[f.jsxs(Ct,{to:"/ThreePillars","aria-label":"Three Pillars project",children:[f.jsx(oe,{src:cl,avif:Rf,webp:Mf,alt:"Three Pillars project tile",width:"100%",responsive:!1,style:{position:"absolute",inset:0,height:"100%",objectFit:"cover",zIndex:0,borderRadius:0,boxShadow:"none"}}),f.jsx(Xt,{})]}),f.jsxs($t,{children:[f.jsx(St,{children:"ThreePillars"}),f.jsx(Gt,{children:"Recruiting site redesign and brand refresh"})]})]}),f.jsxs(Wt,{children:[f.jsxs(Ct,{to:"/Piton","aria-label":"Piton project",children:[f.jsx(oe,{src:Df,avif:Ef,webp:Lf,alt:"Piton project tile",width:"100%",responsive:!1,style:{position:"absolute",inset:0,height:"100%",objectFit:"cover",zIndex:0,borderRadius:0,boxShadow:"none"}}),f.jsx(Xt,{})]}),f.jsxs($t,{children:[f.jsx(St,{children:"Piton"}),f.jsx(Gt,{children:"Product design and mobile interface work"})]})]}),f.jsxs(Wt,{children:[f.jsxs(Ct,{to:"/Outsource","aria-label":"Outsource project",children:[f.jsx(oe,{src:ul,avif:Of,webp:If,alt:"Outsource project tile",width:"100%",responsive:!1,style:{position:"absolute",inset:0,height:"100%",objectFit:"cover",zIndex:0,borderRadius:0,boxShadow:"none"}}),f.jsx(Xt,{})]}),f.jsxs($t,{children:[f.jsx(St,{children:"Outsource"}),f.jsx(Gt,{children:"Commerce and editorial design across surfaces"})]})]}),f.jsxs(Wt,{children:[f.jsxs(Ct,{to:"/Giga","aria-label":"Giga project",children:[f.jsx(oe,{src:Vf,avif:zf,webp:Ff,alt:"Giga project tile",width:"100%",responsive:!1,style:{position:"absolute",inset:0,height:"100%",objectFit:"cover",zIndex:0,borderRadius:0,boxShadow:"none"}}),f.jsx(Xt,{})]}),f.jsxs($t,{children:[f.jsx(St,{children:"Giga"}),f.jsx(Gt,{children:"Cross-platform product design and experiments"})]})]})]})]})})}const rp=k.lazy(()=>Ee(()=>import("./three-Cragz5qr.js"),__vite__mapDeps([0,1,2]),import.meta.url)),op=Ut`
  0% { transform: translate(-50%, -60%) rotate(0deg); }
  20% { transform: translate(-20%, -80%) rotate(90deg); }
  40% { transform: translate(10%, -40%) rotate(180deg); }
  60% { transform: translate(-40%, -20%) rotate(270deg); }
  80% { transform: translate(-70%, -50%) rotate(320deg); }
  100% { transform: translate(-50%, -60%) rotate(360deg); }
`,ap=Ut`
  0% { transform: translate(60%, -50%) rotate(0deg); }
  20% { transform: translate(80%, -20%) rotate(90deg); }
  40% { transform: translate(40%, -70%) rotate(180deg); }
  60% { transform: translate(20%, -30%) rotate(270deg); }
  80% { transform: translate(70%, -60%) rotate(320deg); }
  100% { transform: translate(60%, -50%) rotate(360deg); }
`,lp=Ut`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(6px); }
`,cp=S.div`
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
`,qn=t=>{if(!t)return t;try{return encodeURI(decodeURI(t))}catch{return encodeURI(t)}},up=t=>f.jsxs("picture",{children:[f.jsx("source",{srcSet:qn(Ud),type:"image/avif"}),f.jsx("source",{srcSet:qn(Nd),type:"image/webp"}),f.jsx("img",{src:qn(nl),alt:"Zack MacTavish portrait",loading:"eager",decoding:"async",fetchPriority:"high",className:"about-picture-img",style:{width:"21vw",height:"21vw",objectFit:"cover",borderRadius:"50%",flexShrink:0,position:"relative",zIndex:1,display:"block",...t.style}}),f.jsx("style",{children:`
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
    `})]}),dp=S.div`
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
`,hp=S.div`
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
`,fl=S.div`
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
`,fp=S.div`
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
`,pp=S.div`
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
`,mp=S.div`
  animation: ${lp} 1.5s infinite ease-in-out; /* animate only Y so X-centering stays intact */
  will-change: transform;
`,gp=S.div`
  width: 24px;
  height: 24px;
  border-left: 3px solid white;
  border-bottom: 3px solid white;
  transform: rotate(-45deg);
  border-radius: 2px;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.35)); /* maintain visibility even near light backgrounds */
`,yp=S.section`
  width: 100vw;
  background: white;
  padding: 14vh 5vw; /* slightly increased spacing above/below */
  box-sizing: border-box;
`,xp=S(cr)`
  /* additional local overrides if needed */
`,vp=S.div`
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
`,pl=S(Hi)`
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
`,ml=S.div`
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  filter: saturate(0.9);
  transition: filter 180ms ease;
`,gl=S.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.45), rgba(0,0,0,0.15));
  transition: background 180ms ease;
`,wp=S.div.attrs({"data-cursor":"link",role:"link"})`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 0.75rem; /* slightly below the image */
`,yl=S.h3`
  margin: 0;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 600;
  font-size: 1.15rem;
  color: #111;
  transition: color 160ms ease;
`,bp=S.p`
  margin: 0;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.95rem;
  color: #5d5d5d;
`,_p=S.div`
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
`,Tp=S.h2`
  margin: 0;
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(1.4rem, 3vw, 2rem);
  color: #111;
`,kp=S.p`
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
`;S.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  pointer-events: none;
  color: #111;
`;const Pp=S.div`
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
    color: ${t=>t.theme.backgroundColor};
  }
`;S.div`
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
`;S.div`
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
`;S.img.attrs({loading:"lazy",decoding:"async"})`
  width: 100%;
  height: auto;
  display: block; /* avoid inline image spacing quirks */
  object-fit: contain;
  border-radius: ${t=>t.theme.radii.card}; /* standardized card radius */
`;S(fl)`
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
`;const Cp=S.div`
  overflow-y: hidden;
  width: 100vw;
`,Sp=S.div`
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
`,jp=S.div`
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
`,Ap=S.h1`
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
`,Rp=S.p`
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
`,Mp=S.a`
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
`,Dp=S.div`
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
`,xl=({introDone:t=!0})=>{const[e,i]=k.useState(!1),[n,s]=k.useState(!1);return k.useLayoutEffect(()=>{window.scrollTo(0,0)},[]),k.useEffect(()=>{const r=()=>{!n&&window.scrollY>50&&(i(!1),s(!0))};return window.addEventListener("scroll",r),()=>window.removeEventListener("scroll",r)},[n]),k.useEffect(()=>{t&&(n||i(!0))},[t,n]),f.jsxs("div",{children:[f.jsx(lr,{...re.landing,sameAs:Ue.sameAs,keywords:re.landing.keywords||Ue.keywords}),f.jsxs(cp,{children:[f.jsx(dp,{children:f.jsx(up,{src:nl})}),f.jsxs(hp,{children:[f.jsx(fp,{children:f.jsx(Zf,{})}),f.jsx(fl,{$widthsize:"47vw",children:"Hi, I'm Zack MacTavish, a product designer based in Philadelphia, PA. I'm currently shaping shopping experiences at Microsoft."})]}),!n&&t&&f.jsx(pp,{$visible:e,children:f.jsx(mp,{children:f.jsx(gp,{})})})]}),f.jsx(sp,{}),f.jsx(oi,{style:{backgroundColor:"#f7f7f7",padding:"10vh 5vw",minHeight:"70vh"},children:f.jsx(ri,{children:f.jsxs(si,{style:{color:"#5d5d5d"},children:["I’ve partnered with agencies including"," ",f.jsx("a",{href:"https://www.publicisgroupe.com/en",target:"_blank",rel:"noopener noreferrer",style:{color:"#5d5d5d",textDecoration:"underline"},children:"Publicis Groupe"}),","," ",f.jsx("a",{href:"https://prairieandforge.com/",target:"_blank",rel:"noopener noreferrer",style:{color:"#5d5d5d",textDecoration:"underline"},children:"Prairie & Forge"}),", and"," ",f.jsx("a",{href:"https://varfaj.com/",target:"_blank",rel:"noopener noreferrer",style:{color:"#5d5d5d",textDecoration:"underline"},children:"Varfaj Partners"})," ","on work spanning UX, product, and brand design. My background includes agency experience in New York City and formal design training in Chicago. Client collaborations have included Microsoft, Walmart, Seagate Technology, and Chip Ganassi Racing."]})})}),f.jsx(yp,{children:f.jsxs(xp,{children:[f.jsxs(_p,{children:[f.jsx(Tp,{children:"My writing"}),f.jsx(kp,{children:f.jsx("a",{href:"https://medium.com/@zmactavish",target:"_blank",rel:"noopener noreferrer",children:"See my Medium Portfolio"})})]}),f.jsx(vp,{children:[...Array(6)].map((r,o)=>{const a=o===0,l=o===1,u=o===2,c=o===3,d=o===5,h=o===4,m=a?"https://medium.com/design-bootcamp/76-features-in-figma-to-know-7dbb35cdb5a7":l?"https://medium.com/design-bootcamp/my-journey-as-a-product-designer-at-microsoft-a5325be417b5":u?"https://medium.com/design-bootcamp/12-features-to-consider-when-designing-an-e-commerce-mobile-app-740efbeee7c8":c?"https://medium.com/design-bootcamp/designing-in-the-8pt-grid-system-f3c1183ea6e8":h?"https://medium.com/@zmactavish/0643beac797a":d?"https://medium.com/@zmactavish/30-html-tags-to-know-b0a85b122ded":"https://medium.com/@zmactavish",g=a?"76 features in Figma to know":l?"My journey as a Product designer at Microsoft.":u?"12 features to consider when building an E-commerce app":c?"Designing in the 8pt grid system":h?"30 CSS styles to know":d?"30 HTML tags to know":"Medium",p=a?"A guide to all things Figma":l?"What I've learned at Microsoft as a Product designer":u?"A practical UX checklist for e‑commerce mobile apps":c?"Consistent spacing for scalable UI components":h?"A beginner's guide to CSS for designers":"A beginner's guide to HTML for designers",y=a?{backgroundImage:`url(${Bf})`,backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"}:l?{backgroundImage:`url(${Uf})`,backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"}:u?{backgroundImage:`url(${Nf})`,backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"}:c?{backgroundImage:`url(${$f})`,backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"}:h?{backgroundImage:`url(${Wf})`,backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"}:d?{backgroundImage:`url(${Gf})`,backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"}:{backgroundImage:`url(${dl})`,backgroundColor:"#fafafa",backgroundSize:"40%",backgroundRepeat:"no-repeat",backgroundPosition:"center",filter:"none"};return f.jsxs(Pp,{children:[f.jsxs(pl,{to:m,target:"_blank",rel:"noopener noreferrer","aria-label":a?"Medium article: 76 features in Figma to know":l?"Medium article: My journey as a Product designer at Microsoft.":u?"Medium article: 12 features to consider when building an E-commerce app":c?"Medium article: Designing in the 8pt grid system":h?"Medium article: 30 CSS styles to know":d?"Medium article: 30 HTML tags to know":`Medium writing card ${o+1}`,children:[f.jsx(ml,{style:y}),f.jsx(gl,{})]}),f.jsxs(wp,{children:[f.jsx(yl,{children:g}),f.jsx(bp,{children:p})]})]},`medium-card-${o}`)})})]})}),f.jsx(Bd,{imageSrc:$d,imageAvif:Gd,imageWebp:Wd,imageAlt:"Quilt hanging",textSize:"1.4rem",textColor:"#fff",style:{color:"#fff"},children:f.jsxs("div",{style:{lineHeight:"1.6"},children:["Outside of work, I live with my partner ",f.jsx("a",{href:"https://oliviazitasmith.com",target:"_blank",rel:"noopener noreferrer",style:{color:"inherit",textDecoration:"underline"},children:"Olivia Smith"}),", who is also an artist. In my own creative time, I focus on making quilts that combine photography, textile techniques, and mixed media, exploring the intersection of art, design, and storytelling."]})}),f.jsx(Cp,{children:f.jsxs(Sp,{children:[f.jsxs(jp,{children:[f.jsx(Ap,{children:"Thanks for stopping by"}),f.jsx(Rp,{children:"I'm also an artist. Check out my art portfolio."}),f.jsx(Mp,{href:"https://zackmactavish.com",target:"_blank",rel:"noopener noreferrer",children:"View Portfolio"})]}),f.jsx(Dp,{children:f.jsx(k.Suspense,{fallback:f.jsx("div",{style:{height:"50vh"}}),children:f.jsx(rp,{})})})]})})]})};function Je(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function vl(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}var Ae={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Li={duration:.5,overwrite:!1,delay:0},mr,ue,X,Oe=1e8,$=1/Oe,_s=Math.PI*2,Ep=_s/4,Lp=0,wl=Math.sqrt,Op=Math.cos,Ip=Math.sin,ae=function(e){return typeof e=="string"},J=function(e){return typeof e=="function"},nt=function(e){return typeof e=="number"},gr=function(e){return typeof e>"u"},qe=function(e){return typeof e=="object"},xe=function(e){return e!==!1},yr=function(){return typeof window<"u"},Qi=function(e){return J(e)||ae(e)},bl=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},fe=Array.isArray,Vp=/random\([^)]+\)/g,zp=/,\s*/g,xo=/(?:-?\.?\d|\.)+/gi,_l=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Kt=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Zn=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Tl=/[+-]=-?[.\d]+/,Fp=/[^,'"\[\]\s]+/gi,Bp=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,K,We,Ts,xr,Me={},bn={},kl,Pl=function(e){return(bn=ai(e,Me))&&_e},vr=function(e,i){return console.warn("Invalid property",e,"set to",i,"Missing plugin? gsap.registerPlugin()")},Oi=function(e,i){return!i&&console.warn(e)},Cl=function(e,i){return e&&(Me[e]=i)&&bn&&(bn[e]=i)||Me},Ii=function(){return 0},Up={suppressEvents:!0,isStart:!0,kill:!1},on={suppressEvents:!0,kill:!1},Np={suppressEvents:!0},wr={},ht=[],ks={},Sl,ke={},Jn={},vo=30,an=[],br="",_r=function(e){var i=e[0],n,s;if(qe(i)||J(i)||(e=[e]),!(n=(i._gsap||{}).harness)){for(s=an.length;s--&&!an[s].targetTest(i););n=an[s]}for(s=e.length;s--;)e[s]&&(e[s]._gsap||(e[s]._gsap=new Kl(e[s],n)))||e.splice(s,1);return e},Ot=function(e){return e._gsap||_r(Ie(e))[0]._gsap},jl=function(e,i,n){return(n=e[i])&&J(n)?e[i]():gr(n)&&e.getAttribute&&e.getAttribute(i)||n},ve=function(e,i){return(e=e.split(",")).forEach(i)||e},ee=function(e){return Math.round(e*1e5)/1e5||0},Y=function(e){return Math.round(e*1e7)/1e7||0},ti=function(e,i){var n=i.charAt(0),s=parseFloat(i.substr(2));return e=parseFloat(e),n==="+"?e+s:n==="-"?e-s:n==="*"?e*s:e/s},$p=function(e,i){for(var n=i.length,s=0;e.indexOf(i[s])<0&&++s<n;);return s<n},_n=function(){var e=ht.length,i=ht.slice(0),n,s;for(ks={},ht.length=0,n=0;n<e;n++)s=i[n],s&&s._lazy&&(s.render(s._lazy[0],s._lazy[1],!0)._lazy=0)},Tr=function(e){return!!(e._initted||e._startAt||e.add)},Al=function(e,i,n,s){ht.length&&!ue&&_n(),e.render(i,n,!!(ue&&i<0&&Tr(e))),ht.length&&!ue&&_n()},Rl=function(e){var i=parseFloat(e);return(i||i===0)&&(e+"").match(Fp).length<2?i:ae(e)?e.trim():e},Ml=function(e){return e},De=function(e,i){for(var n in i)n in e||(e[n]=i[n]);return e},Gp=function(e){return function(i,n){for(var s in n)s in i||s==="duration"&&e||s==="ease"||(i[s]=n[s])}},ai=function(e,i){for(var n in i)e[n]=i[n];return e},wo=function t(e,i){for(var n in i)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=qe(i[n])?t(e[n]||(e[n]={}),i[n]):i[n]);return e},Tn=function(e,i){var n={},s;for(s in e)s in i||(n[s]=e[s]);return n},Si=function(e){var i=e.parent||K,n=e.keyframes?Gp(fe(e.keyframes)):De;if(xe(e.inherit))for(;i;)n(e,i.vars.defaults),i=i.parent||i._dp;return e},Wp=function(e,i){for(var n=e.length,s=n===i.length;s&&n--&&e[n]===i[n];);return n<0},Dl=function(e,i,n,s,r){var o=e[s],a;if(r)for(a=i[r];o&&o[r]>a;)o=o._prev;return o?(i._next=o._next,o._next=i):(i._next=e[n],e[n]=i),i._next?i._next._prev=i:e[s]=i,i._prev=o,i.parent=i._dp=e,i},Fn=function(e,i,n,s){n===void 0&&(n="_first"),s===void 0&&(s="_last");var r=i._prev,o=i._next;r?r._next=o:e[n]===i&&(e[n]=o),o?o._prev=r:e[s]===i&&(e[s]=r),i._next=i._prev=i.parent=null},pt=function(e,i){e.parent&&(!i||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},It=function(e,i){if(e&&(!i||i._end>e._dur||i._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Hp=function(e){for(var i=e.parent;i&&i.parent;)i._dirty=1,i.totalDuration(),i=i.parent;return e},Ps=function(e,i,n,s){return e._startAt&&(ue?e._startAt.revert(on):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(i,!0,s))},Xp=function t(e){return!e||e._ts&&t(e.parent)},bo=function(e){return e._repeat?li(e._tTime,e=e.duration()+e._rDelay)*e:0},li=function(e,i){var n=Math.floor(e=Y(e/i));return e&&n===e?n-1:n},kn=function(e,i){return(e-i._start)*i._ts+(i._ts>=0?0:i._dirty?i.totalDuration():i._tDur)},Bn=function(e){return e._end=Y(e._start+(e._tDur/Math.abs(e._ts||e._rts||$)||0))},Un=function(e,i){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Y(n._time-(e._ts>0?i/e._ts:((e._dirty?e.totalDuration():e._tDur)-i)/-e._ts)),Bn(e),n._dirty||It(n,e)),e},El=function(e,i){var n;if((i._time||!i._dur&&i._initted||i._start<e._time&&(i._dur||!i.add))&&(n=kn(e.rawTime(),i),(!i._dur||Xi(0,i.totalDuration(),n)-i._tTime>$)&&i.render(n,!0)),It(e,i)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-$}},Xe=function(e,i,n,s){return i.parent&&pt(i),i._start=Y((nt(n)?n:n||e!==K?Le(e,n,i):e._time)+i._delay),i._end=Y(i._start+(i.totalDuration()/Math.abs(i.timeScale())||0)),Dl(e,i,"_first","_last",e._sort?"_start":0),Cs(i)||(e._recent=i),s||El(e,i),e._ts<0&&Un(e,e._tTime),e},Ll=function(e,i){return(Me.ScrollTrigger||vr("scrollTrigger",i))&&Me.ScrollTrigger.create(i,e)},Ol=function(e,i,n,s,r){if(Pr(e,i,r),!e._initted)return 1;if(!n&&e._pt&&!ue&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Sl!==Ce.frame)return ht.push(e),e._lazy=[r,s],1},Yp=function t(e){var i=e.parent;return i&&i._ts&&i._initted&&!i._lock&&(i.rawTime()<0||t(i))},Cs=function(e){var i=e.data;return i==="isFromStart"||i==="isStart"},Kp=function(e,i,n,s){var r=e.ratio,o=i<0||!i&&(!e._start&&Yp(e)&&!(!e._initted&&Cs(e))||(e._ts<0||e._dp._ts<0)&&!Cs(e))?0:1,a=e._rDelay,l=0,u,c,d;if(a&&e._repeat&&(l=Xi(0,e._tDur,i),c=li(l,a),e._yoyo&&c&1&&(o=1-o),c!==li(e._tTime,a)&&(r=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==r||ue||s||e._zTime===$||!i&&e._zTime){if(!e._initted&&Ol(e,i,s,n,l))return;for(d=e._zTime,e._zTime=i||(n?$:0),n||(n=i&&!d),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;i<0&&Ps(e,i,n,!0),e._onUpdate&&!n&&Se(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Se(e,"onRepeat"),(i>=e._tDur||i<0)&&e.ratio===o&&(o&&pt(e,1),!n&&!ue&&(Se(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=i)},qp=function(e,i,n){var s;if(n>i)for(s=e._first;s&&s._start<=n;){if(s.data==="isPause"&&s._start>i)return s;s=s._next}else for(s=e._last;s&&s._start>=n;){if(s.data==="isPause"&&s._start<i)return s;s=s._prev}},ci=function(e,i,n,s){var r=e._repeat,o=Y(i)||0,a=e._tTime/e._tDur;return a&&!s&&(e._time*=o/e._dur),e._dur=o,e._tDur=r?r<0?1e10:Y(o*(r+1)+e._rDelay*r):o,a>0&&!s&&Un(e,e._tTime=e._tDur*a),e.parent&&Bn(e),n||It(e.parent,e),e},_o=function(e){return e instanceof ye?It(e):ci(e,e._dur)},Zp={_start:0,endTime:Ii,totalDuration:Ii},Le=function t(e,i,n){var s=e.labels,r=e._recent||Zp,o=e.duration()>=Oe?r.endTime(!1):e._dur,a,l,u;return ae(i)&&(isNaN(i)||i in s)?(l=i.charAt(0),u=i.substr(-1)==="%",a=i.indexOf("="),l==="<"||l===">"?(a>=0&&(i=i.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(i.substr(1))||0)*(u?(a<0?r:n).totalDuration()/100:1)):a<0?(i in s||(s[i]=o),s[i]):(l=parseFloat(i.charAt(a-1)+i.substr(a+1)),u&&n&&(l=l/100*(fe(n)?n[0]:n).totalDuration()),a>1?t(e,i.substr(0,a-1),n)+l:o+l)):i==null?o:+i},ji=function(e,i,n){var s=nt(i[1]),r=(s?2:1)+(e<2?0:1),o=i[r],a,l;if(s&&(o.duration=i[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=xe(l.vars.inherit)&&l.parent;o.immediateRender=xe(a.immediateRender),e<2?o.runBackwards=1:o.startAt=i[r-1]}return new ie(i[0],o,i[r+1])},vt=function(e,i){return e||e===0?i(e):i},Xi=function(e,i,n){return n<e?e:n>i?i:n},he=function(e,i){return!ae(e)||!(i=Bp.exec(e))?"":i[1]},Jp=function(e,i,n){return vt(n,function(s){return Xi(e,i,s)})},Ss=[].slice,Il=function(e,i){return e&&qe(e)&&"length"in e&&(!i&&!e.length||e.length-1 in e&&qe(e[0]))&&!e.nodeType&&e!==We},Qp=function(e,i,n){return n===void 0&&(n=[]),e.forEach(function(s){var r;return ae(s)&&!i||Il(s,1)?(r=n).push.apply(r,Ie(s)):n.push(s)})||n},Ie=function(e,i,n){return X&&!i&&X.selector?X.selector(e):ae(e)&&!n&&(Ts||!ui())?Ss.call((i||xr).querySelectorAll(e),0):fe(e)?Qp(e,n):Il(e)?Ss.call(e,0):e?[e]:[]},js=function(e){return e=Ie(e)[0]||Oi("Invalid scope")||{},function(i){var n=e.current||e.nativeElement||e;return Ie(i,n.querySelectorAll?n:n===e?Oi("Invalid scope")||xr.createElement("div"):e)}},Vl=function(e){return e.sort(function(){return .5-Math.random()})},zl=function(e){if(J(e))return e;var i=qe(e)?e:{each:e},n=Vt(i.ease),s=i.from||0,r=parseFloat(i.base)||0,o={},a=s>0&&s<1,l=isNaN(s)||a,u=i.axis,c=s,d=s;return ae(s)?c=d={center:.5,edges:.5,end:1}[s]||0:!a&&l&&(c=s[0],d=s[1]),function(h,m,g){var p=(g||i).length,y=o[p],v,w,x,b,_,A,P,T,C;if(!y){if(C=i.grid==="auto"?0:(i.grid||[1,Oe])[1],!C){for(P=-Oe;P<(P=g[C++].getBoundingClientRect().left)&&C<p;);C<p&&C--}for(y=o[p]=[],v=l?Math.min(C,p)*c-.5:s%C,w=C===Oe?0:l?p*d/C-.5:s/C|0,P=0,T=Oe,A=0;A<p;A++)x=A%C-v,b=w-(A/C|0),y[A]=_=u?Math.abs(u==="y"?b:x):wl(x*x+b*b),_>P&&(P=_),_<T&&(T=_);s==="random"&&Vl(y),y.max=P-T,y.min=T,y.v=p=(parseFloat(i.amount)||parseFloat(i.each)*(C>p?p-1:u?u==="y"?p/C:C:Math.max(C,p/C))||0)*(s==="edges"?-1:1),y.b=p<0?r-p:r,y.u=he(i.amount||i.each)||0,n=n&&p<0?hm(n):n}return p=(y[h]-y.min)/y.max||0,Y(y.b+(n?n(p):p)*y.v)+y.u}},As=function(e){var i=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var s=Y(Math.round(parseFloat(n)/e)*e*i);return(s-s%1)/i+(nt(n)?0:he(n))}},Fl=function(e,i){var n=fe(e),s,r;return!n&&qe(e)&&(s=n=e.radius||Oe,e.values?(e=Ie(e.values),(r=!nt(e[0]))&&(s*=s)):e=As(e.increment)),vt(i,n?J(e)?function(o){return r=e(o),Math.abs(r-o)<=s?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),u=Oe,c=0,d=e.length,h,m;d--;)r?(h=e[d].x-a,m=e[d].y-l,h=h*h+m*m):h=Math.abs(e[d]-a),h<u&&(u=h,c=d);return c=!s||u<=s?e[c]:o,r||c===o||nt(o)?c:c+he(o)}:As(e))},Bl=function(e,i,n,s){return vt(fe(e)?!i:n===!0?!!(n=0):!s,function(){return fe(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(s=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(i-e+n*.99))/n)*n*s)/s})},em=function(){for(var e=arguments.length,i=new Array(e),n=0;n<e;n++)i[n]=arguments[n];return function(s){return i.reduce(function(r,o){return o(r)},s)}},tm=function(e,i){return function(n){return e(parseFloat(n))+(i||he(n))}},im=function(e,i,n){return Nl(e,i,0,1,n)},Ul=function(e,i,n){return vt(n,function(s){return e[~~i(s)]})},nm=function t(e,i,n){var s=i-e;return fe(e)?Ul(e,t(0,e.length),i):vt(n,function(r){return(s+(r-e)%s)%s+e})},sm=function t(e,i,n){var s=i-e,r=s*2;return fe(e)?Ul(e,t(0,e.length-1),i):vt(n,function(o){return o=(r+(o-e)%r)%r||0,e+(o>s?r-o:o)})},Vi=function(e){return e.replace(Vp,function(i){var n=i.indexOf("[")+1,s=i.substring(n||7,n?i.indexOf("]"):i.length-1).split(zp);return Bl(n?s:+s[0],n?0:+s[1],+s[2]||1e-5)})},Nl=function(e,i,n,s,r){var o=i-e,a=s-n;return vt(r,function(l){return n+((l-e)/o*a||0)})},rm=function t(e,i,n,s){var r=isNaN(e+i)?0:function(m){return(1-m)*e+m*i};if(!r){var o=ae(e),a={},l,u,c,d,h;if(n===!0&&(s=1)&&(n=null),o)e={p:e},i={p:i};else if(fe(e)&&!fe(i)){for(c=[],d=e.length,h=d-2,u=1;u<d;u++)c.push(t(e[u-1],e[u]));d--,r=function(g){g*=d;var p=Math.min(h,~~g);return c[p](g-p)},n=i}else s||(e=ai(fe(e)?[]:{},e));if(!c){for(l in i)kr.call(a,e,l,"get",i[l]);r=function(g){return jr(g,a)||(o?e.p:e)}}}return vt(n,r)},To=function(e,i,n){var s=e.labels,r=Oe,o,a,l;for(o in s)a=s[o]-i,a<0==!!n&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},Se=function(e,i,n){var s=e.vars,r=s[i],o=X,a=e._ctx,l,u,c;if(r)return l=s[i+"Params"],u=s.callbackScope||e,n&&ht.length&&_n(),a&&(X=a),c=l?r.apply(u,l):r.call(u),X=o,c},Ti=function(e){return pt(e),e.scrollTrigger&&e.scrollTrigger.kill(!!ue),e.progress()<1&&Se(e,"onInterrupt"),e},qt,$l=[],Gl=function(e){if(e)if(e=!e.name&&e.default||e,yr()||e.headless){var i=e.name,n=J(e),s=i&&!n&&e.init?function(){this._props=[]}:e,r={init:Ii,render:jr,add:kr,kill:_m,modifier:bm,rawVars:0},o={targetTest:0,get:0,getSetter:Sr,aliases:{},register:0};if(ui(),e!==s){if(ke[i])return;De(s,De(Tn(e,r),o)),ai(s.prototype,ai(r,Tn(e,o))),ke[s.prop=i]=s,e.targetTest&&(an.push(s),wr[i]=1),i=(i==="css"?"CSS":i.charAt(0).toUpperCase()+i.substr(1))+"Plugin"}Cl(i,s),e.register&&e.register(_e,s,we)}else $l.push(e)},N=255,ki={aqua:[0,N,N],lime:[0,N,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,N],navy:[0,0,128],white:[N,N,N],olive:[128,128,0],yellow:[N,N,0],orange:[N,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[N,0,0],pink:[N,192,203],cyan:[0,N,N],transparent:[N,N,N,0]},Qn=function(e,i,n){return e+=e<0?1:e>1?-1:0,(e*6<1?i+(n-i)*e*6:e<.5?n:e*3<2?i+(n-i)*(2/3-e)*6:i)*N+.5|0},Wl=function(e,i,n){var s=e?nt(e)?[e>>16,e>>8&N,e&N]:0:ki.black,r,o,a,l,u,c,d,h,m,g;if(!s){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ki[e])s=ki[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+r+r+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return s=parseInt(e.substr(1,6),16),[s>>16,s>>8&N,s&N,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),s=[e>>16,e>>8&N,e&N]}else if(e.substr(0,3)==="hsl"){if(s=g=e.match(xo),!i)l=+s[0]%360/360,u=+s[1]/100,c=+s[2]/100,o=c<=.5?c*(u+1):c+u-c*u,r=c*2-o,s.length>3&&(s[3]*=1),s[0]=Qn(l+1/3,r,o),s[1]=Qn(l,r,o),s[2]=Qn(l-1/3,r,o);else if(~e.indexOf("="))return s=e.match(_l),n&&s.length<4&&(s[3]=1),s}else s=e.match(xo)||ki.transparent;s=s.map(Number)}return i&&!g&&(r=s[0]/N,o=s[1]/N,a=s[2]/N,d=Math.max(r,o,a),h=Math.min(r,o,a),c=(d+h)/2,d===h?l=u=0:(m=d-h,u=c>.5?m/(2-d-h):m/(d+h),l=d===r?(o-a)/m+(o<a?6:0):d===o?(a-r)/m+2:(r-o)/m+4,l*=60),s[0]=~~(l+.5),s[1]=~~(u*100+.5),s[2]=~~(c*100+.5)),n&&s.length<4&&(s[3]=1),s},Hl=function(e){var i=[],n=[],s=-1;return e.split(ft).forEach(function(r){var o=r.match(Kt)||[];i.push.apply(i,o),n.push(s+=o.length+1)}),i.c=n,i},ko=function(e,i,n){var s="",r=(e+s).match(ft),o=i?"hsla(":"rgba(",a=0,l,u,c,d;if(!r)return e;if(r=r.map(function(h){return(h=Wl(h,i,1))&&o+(i?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(c=Hl(e),l=n.c,l.join(s)!==c.c.join(s)))for(u=e.replace(ft,"1").split(Kt),d=u.length-1;a<d;a++)s+=u[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(c.length?c:r.length?r:n).shift());if(!u)for(u=e.split(ft),d=u.length-1;a<d;a++)s+=u[a]+r[a];return s+u[d]},ft=(function(){var t="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ki)t+="|"+e+"\\b";return new RegExp(t+")","gi")})(),om=/hsl[a]?\(/,Xl=function(e){var i=e.join(" "),n;if(ft.lastIndex=0,ft.test(i))return n=om.test(i),e[1]=ko(e[1],n),e[0]=ko(e[0],n,Hl(e[1])),!0},zi,Ce=(function(){var t=Date.now,e=500,i=33,n=t(),s=n,r=1e3/240,o=r,a=[],l,u,c,d,h,m,g=function p(y){var v=t()-s,w=y===!0,x,b,_,A;if((v>e||v<0)&&(n+=v-i),s+=v,_=s-n,x=_-o,(x>0||w)&&(A=++d.frame,h=_-d.time*1e3,d.time=_=_/1e3,o+=x+(x>=r?4:r-x),b=1),w||(l=u(p)),b)for(m=0;m<a.length;m++)a[m](_,h,A,y)};return d={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(y){return h/(1e3/(y||60))},wake:function(){kl&&(!Ts&&yr()&&(We=Ts=window,xr=We.document||{},Me.gsap=_e,(We.gsapVersions||(We.gsapVersions=[])).push(_e.version),Pl(bn||We.GreenSockGlobals||!We.gsap&&We||{}),$l.forEach(Gl)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),u=c||function(y){return setTimeout(y,o-d.time*1e3+1|0)},zi=1,g(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),zi=0,u=Ii},lagSmoothing:function(y,v){e=y||1/0,i=Math.min(v||33,e)},fps:function(y){r=1e3/(y||240),o=d.time*1e3+r},add:function(y,v,w){var x=v?function(b,_,A,P){y(b,_,A,P),d.remove(x)}:y;return d.remove(y),a[w?"unshift":"push"](x),ui(),x},remove:function(y,v){~(v=a.indexOf(y))&&a.splice(v,1)&&m>=v&&m--},_listeners:a},d})(),ui=function(){return!zi&&Ce.wake()},B={},am=/^[\d.\-M][\d.\-,\s]/,lm=/["']/g,cm=function(e){for(var i={},n=e.substr(1,e.length-3).split(":"),s=n[0],r=1,o=n.length,a,l,u;r<o;r++)l=n[r],a=r!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),i[s]=isNaN(u)?u.replace(lm,"").trim():+u,s=l.substr(a+1).trim();return i},um=function(e){var i=e.indexOf("(")+1,n=e.indexOf(")"),s=e.indexOf("(",i);return e.substring(i,~s&&s<n?e.indexOf(")",n+1):n)},dm=function(e){var i=(e+"").split("("),n=B[i[0]];return n&&i.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[cm(i[1])]:um(e).split(",").map(Rl)):B._CE&&am.test(e)?B._CE("",e):n},hm=function(e){return function(i){return 1-e(1-i)}},Vt=function(e,i){return e&&(J(e)?e:B[e]||dm(e))||i},Nt=function(e,i,n,s){n===void 0&&(n=function(l){return 1-i(1-l)}),s===void 0&&(s=function(l){return l<.5?i(l*2)/2:1-i((1-l)*2)/2});var r={easeIn:i,easeOut:n,easeInOut:s},o;return ve(e,function(a){B[a]=Me[a]=r,B[o=a.toLowerCase()]=n;for(var l in r)B[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=B[a+"."+l]=r[l]}),r},Yl=function(e){return function(i){return i<.5?(1-e(1-i*2))/2:.5+e((i-.5)*2)/2}},es=function t(e,i,n){var s=i>=1?i:1,r=(n||(e?.3:.45))/(i<1?i:1),o=r/_s*(Math.asin(1/s)||0),a=function(c){return c===1?1:s*Math.pow(2,-10*c)*Ip((c-o)*r)+1},l=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:Yl(a);return r=_s/r,l.config=function(u,c){return t(e,u,c)},l},ts=function t(e,i){i===void 0&&(i=1.70158);var n=function(o){return o?--o*o*((i+1)*o+i)+1:0},s=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:Yl(n);return s.config=function(r){return t(e,r)},s};ve("Linear,Quad,Cubic,Quart,Quint,Strong",function(t,e){var i=e<5?e+1:e;Nt(t+",Power"+(i-1),e?function(n){return Math.pow(n,i)}:function(n){return n},function(n){return 1-Math.pow(1-n,i)},function(n){return n<.5?Math.pow(n*2,i)/2:1-Math.pow((1-n)*2,i)/2})});B.Linear.easeNone=B.none=B.Linear.easeIn;Nt("Elastic",es("in"),es("out"),es());(function(t,e){var i=1/e,n=2*i,s=2.5*i,r=function(a){return a<i?t*a*a:a<n?t*Math.pow(a-1.5/e,2)+.75:a<s?t*(a-=2.25/e)*a+.9375:t*Math.pow(a-2.625/e,2)+.984375};Nt("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);Nt("Expo",function(t){return Math.pow(2,10*(t-1))*t+t*t*t*t*t*t*(1-t)});Nt("Circ",function(t){return-(wl(1-t*t)-1)});Nt("Sine",function(t){return t===1?1:-Op(t*Ep)+1});Nt("Back",ts("in"),ts("out"),ts());B.SteppedEase=B.steps=Me.SteppedEase={config:function(e,i){e===void 0&&(e=1);var n=1/e,s=e+(i?0:1),r=i?1:0,o=1-$;return function(a){return((s*Xi(0,o,a)|0)+r)*n}}};Li.ease=B["quad.out"];ve("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(t){return br+=t+","+t+"Params,"});var Kl=function(e,i){this.id=Lp++,e._gsap=this,this.target=e,this.harness=i,this.get=i?i.get:jl,this.set=i?i.getSetter:Sr},Fi=(function(){function t(i){this.vars=i,this._delay=+i.delay||0,(this._repeat=i.repeat===1/0?-2:i.repeat||0)&&(this._rDelay=i.repeatDelay||0,this._yoyo=!!i.yoyo||!!i.yoyoEase),this._ts=1,ci(this,+i.duration,1,1),this.data=i.data,X&&(this._ctx=X,X.data.push(this)),zi||Ce.wake()}var e=t.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,ci(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,s){if(ui(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Un(this,n),!r._dp||r.parent||El(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Xe(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!s||this._initted&&Math.abs(this._zTime)===$||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Al(this,n,s)),this},e.time=function(n,s){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+bo(this))%(this._dur+this._rDelay)||(n?this._dur:0),s):this._time},e.totalProgress=function(n,s){return arguments.length?this.totalTime(this.totalDuration()*n,s):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,s){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+bo(this),s):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,s){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,s):this._repeat?li(this._tTime,r)+1:1},e.timeScale=function(n,s){if(!arguments.length)return this._rts===-$?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?kn(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-$?0:this._rts,this.totalTime(Xi(-Math.abs(this._delay),this.totalDuration(),r),s!==!1),Bn(this),Hp(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ui(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==$&&(this._tTime-=$)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Y(n);var s=this.parent||this._dp;return s&&(s._sort||!this.parent)&&Xe(s,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(xe(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var s=this.parent||this._dp;return s?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?kn(s.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Np);var s=ue;return ue=n,Tr(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),ue=s,this},e.globalTime=function(n){for(var s=this,r=arguments.length?n:s.rawTime();s;)r=s._start+r/(Math.abs(s._ts)||1),s=s._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,_o(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var s=this._time;return this._rDelay=n,_o(this),s?this.time(s):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,s){return this.totalTime(Le(this,n),xe(s))},e.restart=function(n,s){return this.play().totalTime(n?-this._delay:0,xe(s)),this._dur||(this._zTime=-$),this},e.play=function(n,s){return n!=null&&this.seek(n,s),this.reversed(!1).paused(!1)},e.reverse=function(n,s){return n!=null&&this.seek(n||this.totalDuration(),s),this.reversed(!0).paused(!1)},e.pause=function(n,s){return n!=null&&this.seek(n,s),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-$:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-$,this},e.isActive=function(){var n=this.parent||this._dp,s=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=s&&r<this.endTime(!0)-$)},e.eventCallback=function(n,s,r){var o=this.vars;return arguments.length>1?(s?(o[n]=s,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=s)):delete o[n],this):o[n]},e.then=function(n){var s=this,r=s._prom;return new Promise(function(o){var a=J(n)?n:Ml,l=function(){var c=s.then;s.then=null,r&&r(),J(a)&&(a=a(s))&&(a.then||a===s)&&(s.then=c),o(a),s.then=c};s._initted&&s.totalProgress()===1&&s._ts>=0||!s._tTime&&s._ts<0?l():s._prom=l})},e.kill=function(){Ti(this)},t})();De(Fi.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-$,_prom:0,_ps:!1,_rts:1});var ye=(function(t){vl(e,t);function e(n,s){var r;return n===void 0&&(n={}),r=t.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=xe(n.sortChildren),K&&Xe(n.parent||K,Je(r),s),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Ll(Je(r),n.scrollTrigger),r}var i=e.prototype;return i.to=function(s,r,o){return ji(0,arguments,this),this},i.from=function(s,r,o){return ji(1,arguments,this),this},i.fromTo=function(s,r,o,a){return ji(2,arguments,this),this},i.set=function(s,r,o){return r.duration=0,r.parent=this,Si(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new ie(s,r,Le(this,o),1),this},i.call=function(s,r,o){return Xe(this,ie.delayedCall(0,s,r),o)},i.staggerTo=function(s,r,o,a,l,u,c){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new ie(s,o,Le(this,l)),this},i.staggerFrom=function(s,r,o,a,l,u,c){return o.runBackwards=1,Si(o).immediateRender=xe(o.immediateRender),this.staggerTo(s,r,o,a,l,u,c)},i.staggerFromTo=function(s,r,o,a,l,u,c,d){return a.startAt=o,Si(a).immediateRender=xe(a.immediateRender),this.staggerTo(s,r,a,l,u,c,d)},i.render=function(s,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=s<=0?0:Y(s),d=this._zTime<0!=s<0&&(this._initted||!u),h,m,g,p,y,v,w,x,b,_,A,P;if(this!==K&&c>l&&s>=0&&(c=l),c!==this._tTime||o||d){if(a!==this._time&&u&&(c+=this._time-a,s+=this._time-a),h=c,b=this._start,x=this._ts,v=!x,d&&(u||(a=this._zTime),(s||!r)&&(this._zTime=s)),this._repeat){if(A=this._yoyo,y=u+this._rDelay,this._repeat<-1&&s<0)return this.totalTime(y*100+s,r,o);if(h=Y(c%y),c===l?(p=this._repeat,h=u):(_=Y(c/y),p=~~_,p&&p===_&&(h=u,p--),h>u&&(h=u)),_=li(this._tTime,y),!a&&this._tTime&&_!==p&&this._tTime-_*y-this._dur<=0&&(_=p),A&&p&1&&(h=u-h,P=1),p!==_&&!this._lock){var T=A&&_&1,C=T===(A&&p&1);if(p<_&&(T=!T),a=T?0:c%u?u:c,this._lock=1,this.render(a||(P?0:Y(p*y)),r,!u)._lock=0,this._tTime=c,!r&&this.parent&&Se(this,"onRepeat"),this.vars.repeatRefresh&&!P&&(this.invalidate()._lock=1,_=p),a&&a!==this._time||v!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,C&&(this._lock=2,a=T?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!P&&this.invalidate()),this._lock=0,!this._ts&&!v)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(w=qp(this,Y(a),Y(h)),w&&(c-=h-(h=w._start))),this._tTime=c,this._time=h,this._act=!!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=s,a=0),!a&&c&&u&&!r&&!_&&(Se(this,"onStart"),this._tTime!==c))return this;if(h>=a&&s>=0)for(m=this._first;m;){if(g=m._next,(m._act||h>=m._start)&&m._ts&&w!==m){if(m.parent!==this)return this.render(s,r,o);if(m.render(m._ts>0?(h-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(h-m._start)*m._ts,r,o),h!==this._time||!this._ts&&!v){w=0,g&&(c+=this._zTime=-$);break}}m=g}else{m=this._last;for(var j=s<0?s:h;m;){if(g=m._prev,(m._act||j<=m._end)&&m._ts&&w!==m){if(m.parent!==this)return this.render(s,r,o);if(m.render(m._ts>0?(j-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(j-m._start)*m._ts,r,o||ue&&Tr(m)),h!==this._time||!this._ts&&!v){w=0,g&&(c+=this._zTime=j?-$:$);break}}m=g}}if(w&&!r&&(this.pause(),w.render(h>=a?0:-$)._zTime=h>=a?1:-1,this._ts))return this._start=b,Bn(this),this.render(s,r,o);this._onUpdate&&!r&&Se(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&a)&&(b===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((s||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&pt(this,1),!r&&!(s<0&&!a)&&(c||a||!l)&&(Se(this,c===l&&s>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},i.add=function(s,r){var o=this;if(nt(r)||(r=Le(this,r,s)),!(s instanceof Fi)){if(fe(s))return s.forEach(function(a){return o.add(a,r)}),this;if(ae(s))return this.addLabel(s,r);if(J(s))s=ie.delayedCall(0,s);else return this}return this!==s?Xe(this,s,r):this},i.getChildren=function(s,r,o,a){s===void 0&&(s=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-Oe);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof ie?r&&l.push(u):(o&&l.push(u),s&&l.push.apply(l,u.getChildren(!0,r,o)))),u=u._next;return l},i.getById=function(s){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===s)return r[o]},i.remove=function(s){return ae(s)?this.removeLabel(s):J(s)?this.killTweensOf(s):(s.parent===this&&Fn(this,s),s===this._recent&&(this._recent=this._last),It(this))},i.totalTime=function(s,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Y(Ce.time-(this._ts>0?s/this._ts:(this.totalDuration()-s)/-this._ts))),t.prototype.totalTime.call(this,s,r),this._forcing=0,this):this._tTime},i.addLabel=function(s,r){return this.labels[s]=Le(this,r),this},i.removeLabel=function(s){return delete this.labels[s],this},i.addPause=function(s,r,o){var a=ie.delayedCall(0,r||Ii,o);return a.data="isPause",this._hasPause=1,Xe(this,a,Le(this,s))},i.removePause=function(s){var r=this._first;for(s=Le(this,s);r;)r._start===s&&r.data==="isPause"&&pt(r),r=r._next},i.killTweensOf=function(s,r,o){for(var a=this.getTweensOf(s,o),l=a.length;l--;)at!==a[l]&&a[l].kill(s,r);return this},i.getTweensOf=function(s,r){for(var o=[],a=Ie(s),l=this._first,u=nt(r),c;l;)l instanceof ie?$p(l._targets,a)&&(u?(!at||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(c=l.getTweensOf(a,r)).length&&o.push.apply(o,c),l=l._next;return o},i.tweenTo=function(s,r){r=r||{};var o=this,a=Le(o,s),l=r,u=l.startAt,c=l.onStart,d=l.onStartParams,h=l.immediateRender,m,g=ie.to(o,De({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||$,onStart:function(){if(o.pause(),!m){var y=r.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());g._dur!==y&&ci(g,y,0,1).render(g._time,!0,!0),m=1}c&&c.apply(g,d||[])}},r));return h?g.render(0):g},i.tweenFromTo=function(s,r,o){return this.tweenTo(r,De({startAt:{time:Le(this,s)}},o))},i.recent=function(){return this._recent},i.nextLabel=function(s){return s===void 0&&(s=this._time),To(this,Le(this,s))},i.previousLabel=function(s){return s===void 0&&(s=this._time),To(this,Le(this,s),1)},i.currentLabel=function(s){return arguments.length?this.seek(s,!0):this.previousLabel(this._time+$)},i.shiftChildren=function(s,r,o){o===void 0&&(o=0);var a=this._first,l=this.labels,u;for(s=Y(s);a;)a._start>=o&&(a._start+=s,a._end+=s),a=a._next;if(r)for(u in l)l[u]>=o&&(l[u]+=s);return It(this)},i.invalidate=function(s){var r=this._first;for(this._lock=0;r;)r.invalidate(s),r=r._next;return t.prototype.invalidate.call(this,s)},i.clear=function(s){s===void 0&&(s=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),s&&(this.labels={}),It(this)},i.totalDuration=function(s){var r=0,o=this,a=o._last,l=Oe,u,c,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-s:s));if(o._dirty){for(d=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Xe(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(r-=c,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=Y(c/o._ts),o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=u;ci(o,o===K&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(s){if(K._ts&&(Al(K,kn(s,K)),Sl=Ce.frame),Ce.frame>=vo){vo+=Ae.autoSleep||120;var r=K._first;if((!r||!r._ts)&&Ae.autoSleep&&Ce._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Ce.sleep()}}},e})(Fi);De(ye.prototype,{_lock:0,_hasPause:0,_forcing:0});var fm=function(e,i,n,s,r,o,a){var l=new we(this._pt,e,i,0,1,tc,null,r),u=0,c=0,d,h,m,g,p,y,v,w;for(l.b=n,l.e=s,n+="",s+="",(v=~s.indexOf("random("))&&(s=Vi(s)),o&&(w=[n,s],o(w,e,i),n=w[0],s=w[1]),h=n.match(Zn)||[];d=Zn.exec(s);)g=d[0],p=s.substring(u,d.index),m?m=(m+1)%5:p.substr(-5)==="rgba("&&(m=1),g!==h[c++]&&(y=parseFloat(h[c-1])||0,l._pt={_next:l._pt,p:p||c===1?p:",",s:y,c:g.charAt(1)==="="?ti(y,g)-y:parseFloat(g)-y,m:m&&m<4?Math.round:0},u=Zn.lastIndex);return l.c=u<s.length?s.substring(u,s.length):"",l.fp=a,(Tl.test(s)||v)&&(l.e=0),this._pt=l,l},kr=function(e,i,n,s,r,o,a,l,u,c){J(s)&&(s=s(r||0,e,o));var d=e[i],h=n!=="get"?n:J(d)?u?e[i.indexOf("set")||!J(e["get"+i.substr(3)])?i:"get"+i.substr(3)](u):e[i]():d,m=J(d)?u?xm:Ql:Cr,g;if(ae(s)&&(~s.indexOf("random(")&&(s=Vi(s)),s.charAt(1)==="="&&(g=ti(h,s)+(he(h)||0),(g||g===0)&&(s=g))),!c||h!==s||Rs)return!isNaN(h*s)&&s!==""?(g=new we(this._pt,e,i,+h||0,s-(h||0),typeof d=="boolean"?wm:ec,0,m),u&&(g.fp=u),a&&g.modifier(a,this,e),this._pt=g):(!d&&!(i in e)&&vr(i,s),fm.call(this,e,i,h,s,m,l||Ae.stringFilter,u))},pm=function(e,i,n,s,r){if(J(e)&&(e=Ai(e,r,i,n,s)),!qe(e)||e.style&&e.nodeType||fe(e)||bl(e))return ae(e)?Ai(e,r,i,n,s):e;var o={},a;for(a in e)o[a]=Ai(e[a],r,i,n,s);return o},ql=function(e,i,n,s,r,o){var a,l,u,c;if(ke[e]&&(a=new ke[e]).init(r,a.rawVars?i[e]:pm(i[e],s,r,o,n),n,s,o)!==!1&&(n._pt=l=new we(n._pt,r,e,0,1,a.render,a,0,a.priority),n!==qt))for(u=n._ptLookup[n._targets.indexOf(r)],c=a._props.length;c--;)u[a._props[c]]=l;return a},at,Rs,Pr=function t(e,i,n){var s=e.vars,r=s.ease,o=s.startAt,a=s.immediateRender,l=s.lazy,u=s.onUpdate,c=s.runBackwards,d=s.yoyoEase,h=s.keyframes,m=s.autoRevert,g=e._dur,p=e._startAt,y=e._targets,v=e.parent,w=v&&v.data==="nested"?v.vars.targets:y,x=e._overwrite==="auto"&&!mr,b=e.timeline,_=s.easeReverse||d,A,P,T,C,j,M,E,L,O,I,z,U,F;if(b&&(!h||!r)&&(r="none"),e._ease=Vt(r,Li.ease),e._rEase=_&&(Vt(_)||e._ease),e._from=!b&&!!s.runBackwards,e._from&&(e.ratio=1),!b||h&&!s.stagger){if(L=y[0]?Ot(y[0]).harness:0,U=L&&s[L.prop],A=Tn(s,wr),p&&(p._zTime<0&&p.progress(1),i<0&&c&&a&&!m?p.render(-1,!0):p.revert(c&&g?on:Up),p._lazy=0),o){if(pt(e._startAt=ie.set(y,De({data:"isStart",overwrite:!1,parent:v,immediateRender:!0,lazy:!p&&xe(l),startAt:null,delay:0,onUpdate:u&&function(){return Se(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,i<0&&(ue||!a&&!m)&&e._startAt.revert(on),a&&g&&i<=0&&n<=0){i&&(e._zTime=i);return}}else if(c&&g&&!p){if(i&&(a=!1),T=De({overwrite:!1,data:"isFromStart",lazy:a&&!p&&xe(l),immediateRender:a,stagger:0,parent:v},A),U&&(T[L.prop]=U),pt(e._startAt=ie.set(y,T)),e._startAt._dp=0,e._startAt._sat=e,i<0&&(ue?e._startAt.revert(on):e._startAt.render(-1,!0)),e._zTime=i,!a)t(e._startAt,$,$);else if(!i)return}for(e._pt=e._ptCache=0,l=g&&xe(l)||l&&!g,P=0;P<y.length;P++){if(j=y[P],E=j._gsap||_r(y)[P]._gsap,e._ptLookup[P]=I={},ks[E.id]&&ht.length&&_n(),z=w===y?P:w.indexOf(j),L&&(O=new L).init(j,U||A,e,z,w)!==!1&&(e._pt=C=new we(e._pt,j,O.name,0,1,O.render,O,0,O.priority),O._props.forEach(function(H){I[H]=C}),O.priority&&(M=1)),!L||U)for(T in A)ke[T]&&(O=ql(T,A,e,z,j,w))?O.priority&&(M=1):I[T]=C=kr.call(e,j,T,"get",A[T],z,w,0,s.stringFilter);e._op&&e._op[P]&&e.kill(j,e._op[P]),x&&e._pt&&(at=e,K.killTweensOf(j,I,e.globalTime(i)),F=!e.parent,at=0),e._pt&&l&&(ks[E.id]=1)}M&&ic(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!F,h&&i<=0&&b.render(Oe,!0,!0)},mm=function(e,i,n,s,r,o,a,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[i],c,d,h,m;if(!u)for(u=e._ptCache[i]=[],h=e._ptLookup,m=e._targets.length;m--;){if(c=h[m][i],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==i&&c.fp!==i;)c=c._next;if(!c)return Rs=1,e.vars[i]="+=0",Pr(e,a),Rs=0,l?Oi(i+" not eligible for reset. Try splitting into individual properties"):1;u.push(c)}for(m=u.length;m--;)d=u[m],c=d._pt||d,c.s=(s||s===0)&&!r?s:c.s+(s||0)+o*c.c,c.c=n-c.s,d.e&&(d.e=ee(n)+he(d.e)),d.b&&(d.b=c.s+he(d.b))},gm=function(e,i){var n=e[0]?Ot(e[0]).harness:0,s=n&&n.aliases,r,o,a,l;if(!s)return i;r=ai({},i);for(o in s)if(o in r)for(l=s[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},ym=function(e,i,n,s){var r=i.ease||s||"power1.inOut",o,a;if(fe(i))a=n[e]||(n[e]=[]),i.forEach(function(l,u){return a.push({t:u/(i.length-1)*100,v:l,e:r})});else for(o in i)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:i[o],e:r})},Ai=function(e,i,n,s,r){return J(e)?e.call(i,n,s,r):ae(e)&&~e.indexOf("random(")?Vi(e):e},Zl=br+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Jl={};ve(Zl+",id,stagger,delay,duration,paused,scrollTrigger",function(t){return Jl[t]=1});var ie=(function(t){vl(e,t);function e(n,s,r,o){var a;typeof s=="number"&&(r.duration=s,s=r,r=null),a=t.call(this,o?s:Si(s))||this;var l=a.vars,u=l.duration,c=l.delay,d=l.immediateRender,h=l.stagger,m=l.overwrite,g=l.keyframes,p=l.defaults,y=l.scrollTrigger,v=s.parent||K,w=(fe(n)||bl(n)?nt(n[0]):"length"in s)?[n]:Ie(n),x,b,_,A,P,T,C,j;if(a._targets=w.length?_r(w):Oi("GSAP target "+n+" not found. https://gsap.com",!Ae.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=m,g||h||Qi(u)||Qi(c)){s=a.vars;var M=s.easeReverse||s.yoyoEase;if(x=a.timeline=new ye({data:"nested",defaults:p||{},targets:v&&v.data==="nested"?v.vars.targets:w}),x.kill(),x.parent=x._dp=Je(a),x._start=0,h||Qi(u)||Qi(c)){if(A=w.length,C=h&&zl(h),qe(h))for(P in h)~Zl.indexOf(P)&&(j||(j={}),j[P]=h[P]);for(b=0;b<A;b++)_=Tn(s,Jl),_.stagger=0,M&&(_.easeReverse=M),j&&ai(_,j),T=w[b],_.duration=+Ai(u,Je(a),b,T,w),_.delay=(+Ai(c,Je(a),b,T,w)||0)-a._delay,!h&&A===1&&_.delay&&(a._delay=c=_.delay,a._start+=c,_.delay=0),x.to(T,_,C?C(b,T,w):0),x._ease=B.none;x.duration()?u=c=0:a.timeline=0}else if(g){Si(De(x.vars.defaults,{ease:"none"})),x._ease=Vt(g.ease||s.ease||"none");var E=0,L,O,I;if(fe(g))g.forEach(function(z){return x.to(w,z,">")}),x.duration();else{_={};for(P in g)P==="ease"||P==="easeEach"||ym(P,g[P],_,g.easeEach);for(P in _)for(L=_[P].sort(function(z,U){return z.t-U.t}),E=0,b=0;b<L.length;b++)O=L[b],I={ease:O.e,duration:(O.t-(b?L[b-1].t:0))/100*u},I[P]=O.v,x.to(w,I,E),E+=I.duration;x.duration()<u&&x.to({},{duration:u-x.duration()})}}u||a.duration(u=x.duration())}else a.timeline=0;return m===!0&&!mr&&(at=Je(a),K.killTweensOf(w),at=0),Xe(v,Je(a),r),s.reversed&&a.reverse(),s.paused&&a.paused(!0),(d||!u&&!g&&a._start===Y(v._time)&&xe(d)&&Xp(Je(a))&&v.data!=="nested")&&(a._tTime=-$,a.render(Math.max(0,-c)||0)),y&&Ll(Je(a),y),a}var i=e.prototype;return i.render=function(s,r,o){var a=this._time,l=this._tDur,u=this._dur,c=s<0,d=s>l-$&&!c?l:s<$?0:s,h,m,g,p,y,v,w,x;if(!u)Kp(this,s,r,o);else if(d!==this._tTime||!s||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(h=d,x=this.timeline,this._repeat){if(p=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(p*100+s,r,o);if(h=Y(d%p),d===l?(g=this._repeat,h=u):(y=Y(d/p),g=~~y,g&&g===y?(h=u,g--):h>u&&(h=u)),v=this._yoyo&&g&1,v&&(h=u-h),y=li(this._tTime,p),h===a&&!o&&this._initted&&g===y)return this._tTime=d,this;g!==y&&this.vars.repeatRefresh&&!v&&!this._lock&&h!==p&&this._initted&&(this._lock=o=1,this.render(Y(p*g),!0).invalidate()._lock=0)}if(!this._initted){if(Ol(this,c?s:h,o,r,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==y))return this;if(u!==this._dur)return this.render(s,r,o)}if(this._rEase){var b=h<a;if(b!==this._inv){var _=b?a:u-a;this._inv=b,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=_?(b?-1:1)/_:0,this._invScale=b?-this.ratio:1-this.ratio,this._invEase=b?this._rEase:this._ease}this.ratio=w=this._invRatio+this._invScale*this._invEase((h-this._invTime)*this._invRecip)}else this.ratio=w=this._ease(h/u);if(this._from&&(this.ratio=w=1-w),this._tTime=d,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&d&&!r&&!y&&(Se(this,"onStart"),this._tTime!==d))return this;for(m=this._pt;m;)m.r(w,m.d),m=m._next;x&&x.render(s<0?s:x._dur*x._ease(h/this._dur),r,o)||this._startAt&&(this._zTime=s),this._onUpdate&&!r&&(c&&Ps(this,s,r,o),Se(this,"onUpdate")),this._repeat&&g!==y&&this.vars.onRepeat&&!r&&this.parent&&Se(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(c&&!this._onUpdate&&Ps(this,s,!0,!0),(s||!u)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&pt(this,1),!r&&!(c&&!a)&&(d||a||v)&&(Se(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},i.targets=function(){return this._targets},i.invalidate=function(s){return(!s||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(s),t.prototype.invalidate.call(this,s)},i.resetTo=function(s,r,o,a,l){zi||Ce.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Pr(this,u),c=this._ease(u/this._dur),mm(this,s,r,o,a,c,u,l)?this.resetTo(s,r,o,a,1):(Un(this,0),this.parent||Dl(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},i.kill=function(s,r){if(r===void 0&&(r="all"),!s&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Ti(this):this.scrollTrigger&&this.scrollTrigger.kill(!!ue),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(s,r,at&&at.vars.overwrite!==!0)._first||Ti(this),this.parent&&o!==this.timeline.totalDuration()&&ci(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=s?Ie(s):a,u=this._ptLookup,c=this._pt,d,h,m,g,p,y,v;if((!r||r==="all")&&Wp(a,l))return r==="all"&&(this._pt=0),Ti(this);for(d=this._op=this._op||[],r!=="all"&&(ae(r)&&(p={},ve(r,function(w){return p[w]=1}),r=p),r=gm(a,r)),v=a.length;v--;)if(~l.indexOf(a[v])){h=u[v],r==="all"?(d[v]=r,g=h,m={}):(m=d[v]=d[v]||{},g=r);for(p in g)y=h&&h[p],y&&((!("kill"in y.d)||y.d.kill(p)===!0)&&Fn(this,y,"_pt"),delete h[p]),m!=="all"&&(m[p]=1)}return this._initted&&!this._pt&&c&&Ti(this),this},e.to=function(s,r){return new e(s,r,arguments[2])},e.from=function(s,r){return ji(1,arguments)},e.delayedCall=function(s,r,o,a){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:s,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(s,r,o){return ji(2,arguments)},e.set=function(s,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(s,r)},e.killTweensOf=function(s,r,o){return K.killTweensOf(s,r,o)},e})(Fi);De(ie.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ve("staggerTo,staggerFrom,staggerFromTo",function(t){ie[t]=function(){var e=new ye,i=Ss.call(arguments,0);return i.splice(t==="staggerFromTo"?5:4,0,0),e[t].apply(e,i)}});var Cr=function(e,i,n){return e[i]=n},Ql=function(e,i,n){return e[i](n)},xm=function(e,i,n,s){return e[i](s.fp,n)},vm=function(e,i,n){return e.setAttribute(i,n)},Sr=function(e,i){return J(e[i])?Ql:gr(e[i])&&e.setAttribute?vm:Cr},ec=function(e,i){return i.set(i.t,i.p,Math.round((i.s+i.c*e)*1e6)/1e6,i)},wm=function(e,i){return i.set(i.t,i.p,!!(i.s+i.c*e),i)},tc=function(e,i){var n=i._pt,s="";if(!e&&i.b)s=i.b;else if(e===1&&i.e)s=i.e;else{for(;n;)s=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+s,n=n._next;s+=i.c}i.set(i.t,i.p,s,i)},jr=function(e,i){for(var n=i._pt;n;)n.r(e,n.d),n=n._next},bm=function(e,i,n,s){for(var r=this._pt,o;r;)o=r._next,r.p===s&&r.modifier(e,i,n),r=o},_m=function(e){for(var i=this._pt,n,s;i;)s=i._next,i.p===e&&!i.op||i.op===e?Fn(this,i,"_pt"):i.dep||(n=1),i=s;return!n},Tm=function(e,i,n,s){s.mSet(e,i,s.m.call(s.tween,n,s.mt),s)},ic=function(e){for(var i=e._pt,n,s,r,o;i;){for(n=i._next,s=r;s&&s.pr>i.pr;)s=s._next;(i._prev=s?s._prev:o)?i._prev._next=i:r=i,(i._next=s)?s._prev=i:o=i,i=n}e._pt=r},we=(function(){function t(i,n,s,r,o,a,l,u,c){this.t=n,this.s=r,this.c=o,this.p=s,this.r=a||ec,this.d=l||this,this.set=u||Cr,this.pr=c||0,this._next=i,i&&(i._prev=this)}var e=t.prototype;return e.modifier=function(n,s,r){this.mSet=this.mSet||this.set,this.set=Tm,this.m=n,this.mt=r,this.tween=s},t})();ve(br+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(t){return wr[t]=1});Me.TweenMax=Me.TweenLite=ie;Me.TimelineLite=Me.TimelineMax=ye;K=new ye({sortChildren:!1,defaults:Li,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ae.stringFilter=Xl;var zt=[],ln={},km=[],Po=0,Pm=0,is=function(e){return(ln[e]||km).map(function(i){return i()})},Ms=function(){var e=Date.now(),i=[];e-Po>2&&(is("matchMediaInit"),zt.forEach(function(n){var s=n.queries,r=n.conditions,o,a,l,u;for(a in s)o=We.matchMedia(s[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,u=1);u&&(n.revert(),l&&i.push(n))}),is("matchMediaRevert"),i.forEach(function(n){return n.onMatch(n,function(s){return n.add(null,s)})}),Po=e,is("matchMedia"))},nc=(function(){function t(i,n){this.selector=n&&js(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Pm++,i&&this.add(i)}var e=t.prototype;return e.add=function(n,s,r){J(n)&&(r=s,s=n,n=J);var o=this,a=function(){var u=X,c=o.selector,d;return u&&u!==o&&u.data.push(o),r&&(o.selector=js(r)),X=o,d=s.apply(o,arguments),J(d)&&o._r.push(d),X=u,o.selector=c,o.isReverted=!1,d};return o.last=a,n===J?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var s=X;X=null,n(this),X=s},e.getTweens=function(){var n=[];return this.data.forEach(function(s){return s instanceof t?n.push.apply(n,s.getTweens()):s instanceof ie&&!(s.parent&&s.parent.data==="nested")&&n.push(s)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,s){var r=this;if(n?(function(){for(var a=r.getTweens(),l=r.data.length,u;l--;)u=r.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}));for(a.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,d){return d.g-c.g||-1/0}).forEach(function(c){return c.t.revert(n)}),l=r.data.length;l--;)u=r.data[l],u instanceof ye?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof ie)&&u.revert&&u.revert(n);r._r.forEach(function(c){return c(n,r)}),r.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),s)for(var o=zt.length;o--;)zt[o].id===this.id&&zt.splice(o,1)},e.revert=function(n){this.kill(n||{})},t})(),Cm=(function(){function t(i){this.contexts=[],this.scope=i,X&&X.data.push(this)}var e=t.prototype;return e.add=function(n,s,r){qe(n)||(n={matches:n});var o=new nc(0,r||this.scope),a=o.conditions={},l,u,c;X&&!o.selector&&(o.selector=X.selector),this.contexts.push(o),s=o.add("onMatch",s),o.queries=n;for(u in n)u==="all"?c=1:(l=We.matchMedia(n[u]),l&&(zt.indexOf(o)<0&&zt.push(o),(a[u]=l.matches)&&(c=1),l.addListener?l.addListener(Ms):l.addEventListener("change",Ms)));return c&&s(o,function(d){return o.add(null,d)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(s){return s.kill(n,!0)})},t})(),Pn={registerPlugin:function(){for(var e=arguments.length,i=new Array(e),n=0;n<e;n++)i[n]=arguments[n];i.forEach(function(s){return Gl(s)})},timeline:function(e){return new ye(e)},getTweensOf:function(e,i){return K.getTweensOf(e,i)},getProperty:function(e,i,n,s){ae(e)&&(e=Ie(e)[0]);var r=Ot(e||{}).get,o=n?Ml:Rl;return n==="native"&&(n=""),e&&(i?o((ke[i]&&ke[i].get||r)(e,i,n,s)):function(a,l,u){return o((ke[a]&&ke[a].get||r)(e,a,l,u))})},quickSetter:function(e,i,n){if(e=Ie(e),e.length>1){var s=e.map(function(c){return _e.quickSetter(c,i,n)}),r=s.length;return function(c){for(var d=r;d--;)s[d](c)}}e=e[0]||{};var o=ke[i],a=Ot(e),l=a.harness&&(a.harness.aliases||{})[i]||i,u=o?function(c){var d=new o;qt._pt=0,d.init(e,n?c+n:c,qt,0,[e]),d.render(1,d),qt._pt&&jr(1,qt)}:a.set(e,l);return o?u:function(c){return u(e,l,n?c+n:c,a,1)}},quickTo:function(e,i,n){var s,r=_e.to(e,De((s={},s[i]="+=0.1",s.paused=!0,s.stagger=0,s),n||{})),o=function(l,u,c){return r.resetTo(i,l,u,c)};return o.tween=r,o},isTweening:function(e){return K.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Vt(e.ease,Li.ease)),wo(Li,e||{})},config:function(e){return wo(Ae,e||{})},registerEffect:function(e){var i=e.name,n=e.effect,s=e.plugins,r=e.defaults,o=e.extendTimeline;(s||"").split(",").forEach(function(a){return a&&!ke[a]&&!Me[a]&&Oi(i+" effect requires "+a+" plugin.")}),Jn[i]=function(a,l,u){return n(Ie(a),De(l||{},r),u)},o&&(ye.prototype[i]=function(a,l,u){return this.add(Jn[i](a,qe(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,i){B[e]=Vt(i)},parseEase:function(e,i){return arguments.length?Vt(e,i):B},getById:function(e){return K.getById(e)},exportRoot:function(e,i){e===void 0&&(e={});var n=new ye(e),s,r;for(n.smoothChildTiming=xe(e.smoothChildTiming),K.remove(n),n._dp=0,n._time=n._tTime=K._time,s=K._first;s;)r=s._next,(i||!(!s._dur&&s instanceof ie&&s.vars.onComplete===s._targets[0]))&&Xe(n,s,s._start-s._delay),s=r;return Xe(K,n,0),n},context:function(e,i){return e?new nc(e,i):X},matchMedia:function(e){return new Cm(e)},matchMediaRefresh:function(){return zt.forEach(function(e){var i=e.conditions,n,s;for(s in i)i[s]&&(i[s]=!1,n=1);n&&e.revert()})||Ms()},addEventListener:function(e,i){var n=ln[e]||(ln[e]=[]);~n.indexOf(i)||n.push(i)},removeEventListener:function(e,i){var n=ln[e],s=n&&n.indexOf(i);s>=0&&n.splice(s,1)},utils:{wrap:nm,wrapYoyo:sm,distribute:zl,random:Bl,snap:Fl,normalize:im,getUnit:he,clamp:Jp,splitColor:Wl,toArray:Ie,selector:js,mapRange:Nl,pipe:em,unitize:tm,interpolate:rm,shuffle:Vl},install:Pl,effects:Jn,ticker:Ce,updateRoot:ye.updateRoot,plugins:ke,globalTimeline:K,core:{PropTween:we,globals:Cl,Tween:ie,Timeline:ye,Animation:Fi,getCache:Ot,_removeLinkedListItem:Fn,reverting:function(){return ue},context:function(e){return e&&X&&(X.data.push(e),e._ctx=X),X},suppressOverwrites:function(e){return mr=e}}};ve("to,from,fromTo,delayedCall,set,killTweensOf",function(t){return Pn[t]=ie[t]});Ce.add(ye.updateRoot);qt=Pn.to({},{duration:0});var Sm=function(e,i){for(var n=e._pt;n&&n.p!==i&&n.op!==i&&n.fp!==i;)n=n._next;return n},jm=function(e,i){var n=e._targets,s,r,o;for(s in i)for(r=n.length;r--;)o=e._ptLookup[r][s],o&&(o=o.d)&&(o._pt&&(o=Sm(o,s)),o&&o.modifier&&o.modifier(i[s],e,n[r],s))},ns=function(e,i){return{name:e,headless:1,rawVars:1,init:function(s,r,o){o._onInit=function(a){var l,u;if(ae(r)&&(l={},ve(r,function(c){return l[c]=1}),r=l),i){l={};for(u in r)l[u]=i(r[u]);r=l}jm(a,r)}}}},_e=Pn.registerPlugin({name:"attr",init:function(e,i,n,s,r){var o,a,l;this.tween=n;for(o in i)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",i[o],s,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,i){for(var n=i._pt;n;)ue?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,i){for(var n=i.length;n--;)this.add(e,n,e[n]||0,i[n],0,0,0,0,0,1)}},ns("roundProps",As),ns("modifiers"),ns("snap",Fl))||Pn;ie.version=ye.version=_e.version="3.15.0";kl=1;yr()&&ui();B.Power0;B.Power1;B.Power2;B.Power3;B.Power4;B.Linear;B.Quad;B.Cubic;B.Quart;B.Quint;B.Strong;B.Elastic;B.Back;B.SteppedEase;B.Bounce;B.Sine;B.Expo;B.Circ;var Co,lt,ii,Ar,Mt,So,Rr,Am=function(){return typeof window<"u"},st={},jt=180/Math.PI,ni=Math.PI/180,Ht=Math.atan2,jo=1e8,Mr=/([A-Z])/g,Rm=/(left|right|width|margin|padding|x)/i,Mm=/[\s,\(]\S/,Ye={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ds=function(e,i){return i.set(i.t,i.p,Math.round((i.s+i.c*e)*1e4)/1e4+i.u,i)},Dm=function(e,i){return i.set(i.t,i.p,e===1?i.e:Math.round((i.s+i.c*e)*1e4)/1e4+i.u,i)},Em=function(e,i){return i.set(i.t,i.p,e?Math.round((i.s+i.c*e)*1e4)/1e4+i.u:i.b,i)},Lm=function(e,i){return i.set(i.t,i.p,e===1?i.e:e?Math.round((i.s+i.c*e)*1e4)/1e4+i.u:i.b,i)},Om=function(e,i){var n=i.s+i.c*e;i.set(i.t,i.p,~~(n+(n<0?-.5:.5))+i.u,i)},sc=function(e,i){return i.set(i.t,i.p,e?i.e:i.b,i)},rc=function(e,i){return i.set(i.t,i.p,e!==1?i.b:i.e,i)},Im=function(e,i,n){return e.style[i]=n},Vm=function(e,i,n){return e.style.setProperty(i,n)},zm=function(e,i,n){return e._gsap[i]=n},Fm=function(e,i,n){return e._gsap.scaleX=e._gsap.scaleY=n},Bm=function(e,i,n,s,r){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},Um=function(e,i,n,s,r){var o=e._gsap;o[i]=n,o.renderTransform(r,o)},q="transform",be=q+"Origin",Nm=function t(e,i){var n=this,s=this.target,r=s.style,o=s._gsap;if(e in st&&r){if(this.tfm=this.tfm||{},e!=="transform")e=Ye[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Qe(s,a)}):this.tfm[e]=o.x?o[e]:Qe(s,e),e===be&&(this.tfm.zOrigin=o.zOrigin);else return Ye.transform.split(",").forEach(function(a){return t.call(n,a,i)});if(this.props.indexOf(q)>=0)return;o.svg&&(this.svgo=s.getAttribute("data-svg-origin"),this.props.push(be,i,"")),e=q}(r||i)&&this.props.push(e,i,r[e])},oc=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},$m=function(){var e=this.props,i=this.target,n=i.style,s=i._gsap,r,o;for(r=0;r<e.length;r+=3)e[r+1]?e[r+1]===2?i[e[r]](e[r+2]):i[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(Mr,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)s[o]=this.tfm[o];s.svg&&(s.renderTransform(),i.setAttribute("data-svg-origin",this.svgo||"")),r=Rr(),(!r||!r.isStart)&&!n[q]&&(oc(n),s.zOrigin&&n[be]&&(n[be]+=" "+s.zOrigin+"px",s.zOrigin=0,s.renderTransform()),s.uncache=1)}},ac=function(e,i){var n={target:e,props:[],revert:$m,save:Nm};return e._gsap||_e.core.getCache(e),i&&e.style&&e.nodeType&&i.split(",").forEach(function(s){return n.save(s)}),n},lc,Es=function(e,i){var n=lt.createElementNS?lt.createElementNS((i||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):lt.createElement(e);return n&&n.style?n:lt.createElement(e)},je=function t(e,i,n){var s=getComputedStyle(e);return s[i]||s.getPropertyValue(i.replace(Mr,"-$1").toLowerCase())||s.getPropertyValue(i)||!n&&t(e,di(i)||i,1)||""},Ao="O,Moz,ms,Ms,Webkit".split(","),di=function(e,i,n){var s=i||Mt,r=s.style,o=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Ao[o]+e in r););return o<0?null:(o===3?"ms":o>=0?Ao[o]:"")+e},Ls=function(){Am()&&window.document&&(Co=window,lt=Co.document,ii=lt.documentElement,Mt=Es("div")||{style:{}},Es("div"),q=di(q),be=q+"Origin",Mt.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",lc=!!di("perspective"),Rr=_e.core.reverting,Ar=1)},Ro=function(e){var i=e.ownerSVGElement,n=Es("svg",i&&i.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),s=e.cloneNode(!0),r;s.style.display="block",n.appendChild(s),ii.appendChild(n);try{r=s.getBBox()}catch{}return n.removeChild(s),ii.removeChild(n),r},Mo=function(e,i){for(var n=i.length;n--;)if(e.hasAttribute(i[n]))return e.getAttribute(i[n])},cc=function(e){var i,n;try{i=e.getBBox()}catch{i=Ro(e),n=1}return i&&(i.width||i.height)||n||(i=Ro(e)),i&&!i.width&&!i.x&&!i.y?{x:+Mo(e,["x","cx","x1"])||0,y:+Mo(e,["y","cy","y1"])||0,width:0,height:0}:i},uc=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&cc(e))},mt=function(e,i){if(i){var n=e.style,s;i in st&&i!==be&&(i=q),n.removeProperty?(s=i.substr(0,2),(s==="ms"||i.substr(0,6)==="webkit")&&(i="-"+i),n.removeProperty(s==="--"?i:i.replace(Mr,"-$1").toLowerCase())):n.removeAttribute(i)}},ct=function(e,i,n,s,r,o){var a=new we(e._pt,i,n,0,1,o?rc:sc);return e._pt=a,a.b=s,a.e=r,e._props.push(n),a},Do={deg:1,rad:1,turn:1},Gm={grid:1,flex:1},gt=function t(e,i,n,s){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=Mt.style,l=Rm.test(i),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),d=100,h=s==="px",m=s==="%",g,p,y,v;if(s===o||!r||Do[s]||Do[o])return r;if(o!=="px"&&!h&&(r=t(e,i,n,"px")),v=e.getCTM&&uc(e),(m||o==="%")&&(st[i]||~i.indexOf("adius")))return g=v?e.getBBox()[l?"width":"height"]:e[c],ee(m?r/g*d:r/100*g);if(a[l?"width":"height"]=d+(h?o:s),p=s!=="rem"&&~i.indexOf("adius")||s==="em"&&e.appendChild&&!u?e:e.parentNode,v&&(p=(e.ownerSVGElement||{}).parentNode),(!p||p===lt||!p.appendChild)&&(p=lt.body),y=p._gsap,y&&m&&y.width&&l&&y.time===Ce.time&&!y.uncache)return ee(r/y.width*d);if(m&&(i==="height"||i==="width")){var w=e.style[i];e.style[i]=d+s,g=e[c],w?e.style[i]=w:mt(e,i)}else(m||o==="%")&&!Gm[je(p,"display")]&&(a.position=je(e,"position")),p===e&&(a.position="static"),p.appendChild(Mt),g=Mt[c],p.removeChild(Mt),a.position="absolute";return l&&m&&(y=Ot(p),y.time=Ce.time,y.width=p[c]),ee(h?g*r/d:g&&r?d/g*r:0)},Qe=function(e,i,n,s){var r;return Ar||Ls(),i in Ye&&i!=="transform"&&(i=Ye[i],~i.indexOf(",")&&(i=i.split(",")[0])),st[i]&&i!=="transform"?(r=Ui(e,s),r=i!=="transformOrigin"?r[i]:r.svg?r.origin:Sn(je(e,be))+" "+r.zOrigin+"px"):(r=e.style[i],(!r||r==="auto"||s||~(r+"").indexOf("calc("))&&(r=Cn[i]&&Cn[i](e,i,n)||je(e,i)||jl(e,i)||(i==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?gt(e,i,r,n)+n:r},Wm=function(e,i,n,s){if(!n||n==="none"){var r=di(i,e,1),o=r&&je(e,r,1);o&&o!==n?(i=r,n=o):i==="borderColor"&&(n=je(e,"borderTopColor"))}var a=new we(this._pt,e.style,i,0,1,tc),l=0,u=0,c,d,h,m,g,p,y,v,w,x,b,_;if(a.b=n,a.e=s,n+="",s+="",s.substring(0,6)==="var(--"&&(s=je(e,s.substring(4,s.indexOf(")")))),s==="auto"&&(p=e.style[i],e.style[i]=s,s=je(e,i)||s,p?e.style[i]=p:mt(e,i)),c=[n,s],Xl(c),n=c[0],s=c[1],h=n.match(Kt)||[],_=s.match(Kt)||[],_.length){for(;d=Kt.exec(s);)y=d[0],w=s.substring(l,d.index),g?g=(g+1)%5:(w.substr(-5)==="rgba("||w.substr(-5)==="hsla(")&&(g=1),y!==(p=h[u++]||"")&&(m=parseFloat(p)||0,b=p.substr((m+"").length),y.charAt(1)==="="&&(y=ti(m,y)+b),v=parseFloat(y),x=y.substr((v+"").length),l=Kt.lastIndex-x.length,x||(x=x||Ae.units[i]||b,l===s.length&&(s+=x,a.e+=x)),b!==x&&(m=gt(e,i,p,x)||0),a._pt={_next:a._pt,p:w||u===1?w:",",s:m,c:v-m,m:g&&g<4||i==="zIndex"?Math.round:0});a.c=l<s.length?s.substring(l,s.length):""}else a.r=i==="display"&&s==="none"?rc:sc;return Tl.test(s)&&(a.e=0),this._pt=a,a},Eo={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Hm=function(e){var i=e.split(" "),n=i[0],s=i[1]||"50%";return(n==="top"||n==="bottom"||s==="left"||s==="right")&&(e=n,n=s,s=e),i[0]=Eo[n]||n,i[1]=Eo[s]||s,i.join(" ")},Xm=function(e,i){if(i.tween&&i.tween._time===i.tween._dur){var n=i.t,s=n.style,r=i.u,o=n._gsap,a,l,u;if(r==="all"||r===!0)s.cssText="",l=1;else for(r=r.split(","),u=r.length;--u>-1;)a=r[u],st[a]&&(l=1,a=a==="transformOrigin"?be:q),mt(n,a);l&&(mt(n,q),o&&(o.svg&&n.removeAttribute("transform"),s.scale=s.rotate=s.translate="none",Ui(n,1),o.uncache=1,oc(s)))}},Cn={clearProps:function(e,i,n,s,r){if(r.data!=="isFromStart"){var o=e._pt=new we(e._pt,i,n,0,0,Xm);return o.u=s,o.pr=-10,o.tween=r,e._props.push(n),1}}},Bi=[1,0,0,1,0,0],dc={},hc=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Lo=function(e){var i=je(e,q);return hc(i)?Bi:i.substr(7).match(_l).map(ee)},Dr=function(e,i){var n=e._gsap||Ot(e),s=e.style,r=Lo(e),o,a,l,u;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Bi:r):(r===Bi&&!e.offsetParent&&e!==ii&&!n.svg&&(l=s.display,s.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(u=1,a=e.nextElementSibling,ii.appendChild(e)),r=Lo(e),l?s.display=l:mt(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):ii.removeChild(e))),i&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Os=function(e,i,n,s,r,o){var a=e._gsap,l=r||Dr(e,!0),u=a.xOrigin||0,c=a.yOrigin||0,d=a.xOffset||0,h=a.yOffset||0,m=l[0],g=l[1],p=l[2],y=l[3],v=l[4],w=l[5],x=i.split(" "),b=parseFloat(x[0])||0,_=parseFloat(x[1])||0,A,P,T,C;n?l!==Bi&&(P=m*y-g*p)&&(T=b*(y/P)+_*(-p/P)+(p*w-y*v)/P,C=b*(-g/P)+_*(m/P)-(m*w-g*v)/P,b=T,_=C):(A=cc(e),b=A.x+(~x[0].indexOf("%")?b/100*A.width:b),_=A.y+(~(x[1]||x[0]).indexOf("%")?_/100*A.height:_)),s||s!==!1&&a.smooth?(v=b-u,w=_-c,a.xOffset=d+(v*m+w*p)-v,a.yOffset=h+(v*g+w*y)-w):a.xOffset=a.yOffset=0,a.xOrigin=b,a.yOrigin=_,a.smooth=!!s,a.origin=i,a.originIsAbsolute=!!n,e.style[be]="0px 0px",o&&(ct(o,a,"xOrigin",u,b),ct(o,a,"yOrigin",c,_),ct(o,a,"xOffset",d,a.xOffset),ct(o,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",b+" "+_)},Ui=function(e,i){var n=e._gsap||new Kl(e);if("x"in n&&!i&&!n.uncache)return n;var s=e.style,r=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),u=je(e,be)||"0",c,d,h,m,g,p,y,v,w,x,b,_,A,P,T,C,j,M,E,L,O,I,z,U,F,H,D,V,Q,de,Te,bt;return c=d=h=p=y=v=w=x=b=0,m=g=1,n.svg=!!(e.getCTM&&uc(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(s[q]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[q]!=="none"?l[q]:"")),s.scale=s.rotate=s.translate="none"),P=Dr(e,n.svg),n.svg&&(n.uncache?(F=e.getBBox(),u=n.xOrigin-F.x+"px "+(n.yOrigin-F.y)+"px",U=""):U=!i&&e.getAttribute("data-svg-origin"),Os(e,U||u,!!U||n.originIsAbsolute,n.smooth!==!1,P)),_=n.xOrigin||0,A=n.yOrigin||0,P!==Bi&&(M=P[0],E=P[1],L=P[2],O=P[3],c=I=P[4],d=z=P[5],P.length===6?(m=Math.sqrt(M*M+E*E),g=Math.sqrt(O*O+L*L),p=M||E?Ht(E,M)*jt:0,w=L||O?Ht(L,O)*jt+p:0,w&&(g*=Math.abs(Math.cos(w*ni))),n.svg&&(c-=_-(_*M+A*L),d-=A-(_*E+A*O))):(bt=P[6],de=P[7],D=P[8],V=P[9],Q=P[10],Te=P[11],c=P[12],d=P[13],h=P[14],T=Ht(bt,Q),y=T*jt,T&&(C=Math.cos(-T),j=Math.sin(-T),U=I*C+D*j,F=z*C+V*j,H=bt*C+Q*j,D=I*-j+D*C,V=z*-j+V*C,Q=bt*-j+Q*C,Te=de*-j+Te*C,I=U,z=F,bt=H),T=Ht(-L,Q),v=T*jt,T&&(C=Math.cos(-T),j=Math.sin(-T),U=M*C-D*j,F=E*C-V*j,H=L*C-Q*j,Te=O*j+Te*C,M=U,E=F,L=H),T=Ht(E,M),p=T*jt,T&&(C=Math.cos(T),j=Math.sin(T),U=M*C+E*j,F=I*C+z*j,E=E*C-M*j,z=z*C-I*j,M=U,I=F),y&&Math.abs(y)+Math.abs(p)>359.9&&(y=p=0,v=180-v),m=ee(Math.sqrt(M*M+E*E+L*L)),g=ee(Math.sqrt(z*z+bt*bt)),T=Ht(I,z),w=Math.abs(T)>2e-4?T*jt:0,b=Te?1/(Te<0?-Te:Te):0),n.svg&&(U=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!hc(je(e,q)),U&&e.setAttribute("transform",U))),Math.abs(w)>90&&Math.abs(w)<270&&(r?(m*=-1,w+=p<=0?180:-180,p+=p<=0?180:-180):(g*=-1,w+=w<=0?180:-180)),i=i||n.uncache,n.x=c-((n.xPercent=c&&(!i&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=d-((n.yPercent=d&&(!i&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=h+o,n.scaleX=ee(m),n.scaleY=ee(g),n.rotation=ee(p)+a,n.rotationX=ee(y)+a,n.rotationY=ee(v)+a,n.skewX=w+a,n.skewY=x+a,n.transformPerspective=b+o,(n.zOrigin=parseFloat(u.split(" ")[2])||!i&&n.zOrigin||0)&&(s[be]=Sn(u)),n.xOffset=n.yOffset=0,n.force3D=Ae.force3D,n.renderTransform=n.svg?Km:lc?fc:Ym,n.uncache=0,n},Sn=function(e){return(e=e.split(" "))[0]+" "+e[1]},ss=function(e,i,n){var s=he(i);return ee(parseFloat(i)+parseFloat(gt(e,"x",n+"px",s)))+s},Ym=function(e,i){i.z="0px",i.rotationY=i.rotationX="0deg",i.force3D=0,fc(e,i)},Tt="0deg",bi="0px",kt=") ",fc=function(e,i){var n=i||this,s=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.z,u=n.rotation,c=n.rotationY,d=n.rotationX,h=n.skewX,m=n.skewY,g=n.scaleX,p=n.scaleY,y=n.transformPerspective,v=n.force3D,w=n.target,x=n.zOrigin,b="",_=v==="auto"&&e&&e!==1||v===!0;if(x&&(d!==Tt||c!==Tt)){var A=parseFloat(c)*ni,P=Math.sin(A),T=Math.cos(A),C;A=parseFloat(d)*ni,C=Math.cos(A),o=ss(w,o,P*C*-x),a=ss(w,a,-Math.sin(A)*-x),l=ss(w,l,T*C*-x+x)}y!==bi&&(b+="perspective("+y+kt),(s||r)&&(b+="translate("+s+"%, "+r+"%) "),(_||o!==bi||a!==bi||l!==bi)&&(b+=l!==bi||_?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+kt),u!==Tt&&(b+="rotate("+u+kt),c!==Tt&&(b+="rotateY("+c+kt),d!==Tt&&(b+="rotateX("+d+kt),(h!==Tt||m!==Tt)&&(b+="skew("+h+", "+m+kt),(g!==1||p!==1)&&(b+="scale("+g+", "+p+kt),w.style[q]=b||"translate(0, 0)"},Km=function(e,i){var n=i||this,s=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.rotation,u=n.skewX,c=n.skewY,d=n.scaleX,h=n.scaleY,m=n.target,g=n.xOrigin,p=n.yOrigin,y=n.xOffset,v=n.yOffset,w=n.forceCSS,x=parseFloat(o),b=parseFloat(a),_,A,P,T,C;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=ni,u*=ni,_=Math.cos(l)*d,A=Math.sin(l)*d,P=Math.sin(l-u)*-h,T=Math.cos(l-u)*h,u&&(c*=ni,C=Math.tan(u-c),C=Math.sqrt(1+C*C),P*=C,T*=C,c&&(C=Math.tan(c),C=Math.sqrt(1+C*C),_*=C,A*=C)),_=ee(_),A=ee(A),P=ee(P),T=ee(T)):(_=d,T=h,A=P=0),(x&&!~(o+"").indexOf("px")||b&&!~(a+"").indexOf("px"))&&(x=gt(m,"x",o,"px"),b=gt(m,"y",a,"px")),(g||p||y||v)&&(x=ee(x+g-(g*_+p*P)+y),b=ee(b+p-(g*A+p*T)+v)),(s||r)&&(C=m.getBBox(),x=ee(x+s/100*C.width),b=ee(b+r/100*C.height)),C="matrix("+_+","+A+","+P+","+T+","+x+","+b+")",m.setAttribute("transform",C),w&&(m.style[q]=C)},qm=function(e,i,n,s,r){var o=360,a=ae(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?jt:1),u=l-s,c=s+u+"deg",d,h;return a&&(d=r.split("_")[1],d==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),d==="cw"&&u<0?u=(u+o*jo)%o-~~(u/o)*o:d==="ccw"&&u>0&&(u=(u-o*jo)%o-~~(u/o)*o)),e._pt=h=new we(e._pt,i,n,s,u,Dm),h.e=c,h.u="deg",e._props.push(n),h},Oo=function(e,i){for(var n in i)e[n]=i[n];return e},Zm=function(e,i,n){var s=Oo({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,u,c,d,h,m,g;s.svg?(u=n.getAttribute("transform"),n.setAttribute("transform",""),o[q]=i,a=Ui(n,1),mt(n,q),n.setAttribute("transform",u)):(u=getComputedStyle(n)[q],o[q]=i,a=Ui(n,1),o[q]=u);for(l in st)u=s[l],c=a[l],u!==c&&r.indexOf(l)<0&&(m=he(u),g=he(c),d=m!==g?gt(n,l,u,g):parseFloat(u),h=parseFloat(c),e._pt=new we(e._pt,a,l,d,h-d,Ds),e._pt.u=g||0,e._props.push(l));Oo(a,s)};ve("padding,margin,Width,Radius",function(t,e){var i="Top",n="Right",s="Bottom",r="Left",o=(e<3?[i,n,s,r]:[i+r,i+n,s+n,s+r]).map(function(a){return e<2?t+a:"border"+a+t});Cn[e>1?"border"+t:t]=function(a,l,u,c,d){var h,m;if(arguments.length<4)return h=o.map(function(g){return Qe(a,g,u)}),m=h.join(" "),m.split(h[0]).length===5?h[0]:m;h=(c+"").split(" "),m={},o.forEach(function(g,p){return m[g]=h[p]=h[p]||h[(p-1)/2|0]}),a.init(l,m,d)}});var pc={name:"css",register:Ls,targetTest:function(e){return e.style&&e.nodeType},init:function(e,i,n,s,r){var o=this._props,a=e.style,l=n.vars.startAt,u,c,d,h,m,g,p,y,v,w,x,b,_,A,P,T,C;Ar||Ls(),this.styles=this.styles||ac(e),T=this.styles.props,this.tween=n;for(p in i)if(p!=="autoRound"&&(c=i[p],!(ke[p]&&ql(p,i,n,s,e,r)))){if(m=typeof c,g=Cn[p],m==="function"&&(c=c.call(n,s,e,r),m=typeof c),m==="string"&&~c.indexOf("random(")&&(c=Vi(c)),g)g(this,e,p,c,n)&&(P=1);else if(p.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(p)+"").trim(),c+="",ft.lastIndex=0,ft.test(u)||(y=he(u),v=he(c),v?y!==v&&(u=gt(e,p,u,v)+v):y&&(c+=y)),this.add(a,"setProperty",u,c,s,r,0,0,p),o.push(p),T.push(p,0,a[p]);else if(m!=="undefined"){if(l&&p in l?(u=typeof l[p]=="function"?l[p].call(n,s,e,r):l[p],ae(u)&&~u.indexOf("random(")&&(u=Vi(u)),he(u+"")||u==="auto"||(u+=Ae.units[p]||he(Qe(e,p))||""),(u+"").charAt(1)==="="&&(u=Qe(e,p))):u=Qe(e,p),h=parseFloat(u),w=m==="string"&&c.charAt(1)==="="&&c.substr(0,2),w&&(c=c.substr(2)),d=parseFloat(c),p in Ye&&(p==="autoAlpha"&&(h===1&&Qe(e,"visibility")==="hidden"&&d&&(h=0),T.push("visibility",0,a.visibility),ct(this,a,"visibility",h?"inherit":"hidden",d?"inherit":"hidden",!d)),p!=="scale"&&p!=="transform"&&(p=Ye[p],~p.indexOf(",")&&(p=p.split(",")[0]))),x=p in st,x){if(this.styles.save(p),C=c,m==="string"&&c.substring(0,6)==="var(--"){if(c=je(e,c.substring(4,c.indexOf(")"))),c.substring(0,5)==="calc("){var j=e.style.perspective;e.style.perspective=c,c=je(e,"perspective"),j?e.style.perspective=j:mt(e,"perspective")}d=parseFloat(c)}if(b||(_=e._gsap,_.renderTransform&&!i.parseTransform||Ui(e,i.parseTransform),A=i.smoothOrigin!==!1&&_.smooth,b=this._pt=new we(this._pt,a,q,0,1,_.renderTransform,_,0,-1),b.dep=1),p==="scale")this._pt=new we(this._pt,_,"scaleY",_.scaleY,(w?ti(_.scaleY,w+d):d)-_.scaleY||0,Ds),this._pt.u=0,o.push("scaleY",p),p+="X";else if(p==="transformOrigin"){T.push(be,0,a[be]),c=Hm(c),_.svg?Os(e,c,0,A,0,this):(v=parseFloat(c.split(" ")[2])||0,v!==_.zOrigin&&ct(this,_,"zOrigin",_.zOrigin,v),ct(this,a,p,Sn(u),Sn(c)));continue}else if(p==="svgOrigin"){Os(e,c,1,A,0,this);continue}else if(p in dc){qm(this,_,p,h,w?ti(h,w+c):c);continue}else if(p==="smoothOrigin"){ct(this,_,"smooth",_.smooth,c);continue}else if(p==="force3D"){_[p]=c;continue}else if(p==="transform"){Zm(this,c,e);continue}}else p in a||(p=di(p)||p);if(x||(d||d===0)&&(h||h===0)&&!Mm.test(c)&&p in a)y=(u+"").substr((h+"").length),d||(d=0),v=he(c)||(p in Ae.units?Ae.units[p]:y),y!==v&&(h=gt(e,p,u,v)),this._pt=new we(this._pt,x?_:a,p,h,(w?ti(h,w+d):d)-h,!x&&(v==="px"||p==="zIndex")&&i.autoRound!==!1?Om:Ds),this._pt.u=v||0,x&&C!==c?(this._pt.b=u,this._pt.e=C,this._pt.r=Lm):y!==v&&v!=="%"&&(this._pt.b=u,this._pt.r=Em);else if(p in a)Wm.call(this,e,p,u,w?w+c:c);else if(p in e)this.add(e,p,u||e[p],w?w+c:c,s,r);else if(p!=="parseTransform"){vr(p,c);continue}x||(p in a?T.push(p,0,a[p]):typeof e[p]=="function"?T.push(p,2,e[p]()):T.push(p,1,u||e[p])),o.push(p)}}P&&ic(this)},render:function(e,i){if(i.tween._time||!Rr())for(var n=i._pt;n;)n.r(e,n.d),n=n._next;else i.styles.revert()},get:Qe,aliases:Ye,getSetter:function(e,i,n){var s=Ye[i];return s&&s.indexOf(",")<0&&(i=s),i in st&&i!==be&&(e._gsap.x||Qe(e,"x"))?n&&So===n?i==="scale"?Fm:zm:(So=n||{})&&(i==="scale"?Bm:Um):e.style&&!gr(e.style[i])?Im:~i.indexOf("-")?Vm:Sr(e,i)},core:{_removeProperty:mt,_getMatrix:Dr}};_e.utils.checkPrefix=di;_e.core.getStyleSaver=ac;(function(t,e,i,n){var s=ve(t+","+e+","+i,function(r){st[r]=1});ve(e,function(r){Ae.units[r]="deg",dc[r]=1}),Ye[s[13]]=t+","+e,ve(n,function(r){var o=r.split(":");Ye[o[1]]=s[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ve("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(t){Ae.units[t]="px"});_e.registerPlugin(pc);var cn=_e.registerPlugin(pc)||_e;cn.core.Tween;const Er=k.createContext({});function Lr(t){const e=k.useRef(null);return e.current===null&&(e.current=t()),e.current}const Jm=typeof window<"u",mc=Jm?k.useLayoutEffect:k.useEffect,Nn=k.createContext(null);function Or(t,e){t.indexOf(e)===-1&&t.push(e)}function jn(t,e){const i=t.indexOf(e);i>-1&&t.splice(i,1)}const Ze=(t,e,i)=>i>e?e:i<t?t:i;let Ir=()=>{};const yt={},gc=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);function yc(t){return typeof t=="object"&&t!==null}const xc=t=>/^0[^.\s]+$/u.test(t);function vc(t){let e;return()=>(e===void 0&&(e=t()),e)}const ze=t=>t,Qm=(t,e)=>i=>e(t(i)),Yi=(...t)=>t.reduce(Qm),Ni=(t,e,i)=>{const n=e-t;return n===0?1:(i-t)/n};class Vr{constructor(){this.subscriptions=[]}add(e){return Or(this.subscriptions,e),()=>jn(this.subscriptions,e)}notify(e,i,n){const s=this.subscriptions.length;if(s)if(s===1)this.subscriptions[0](e,i,n);else for(let r=0;r<s;r++){const o=this.subscriptions[r];o&&o(e,i,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Re=t=>t*1e3,Ve=t=>t/1e3;function wc(t,e){return e?t*(1e3/e):0}const bc=(t,e,i)=>(((1-3*i+3*e)*t+(3*i-6*e))*t+3*e)*t,eg=1e-7,tg=12;function ig(t,e,i,n,s){let r,o,a=0;do o=e+(i-e)/2,r=bc(o,n,s)-t,r>0?i=o:e=o;while(Math.abs(r)>eg&&++a<tg);return o}function Ki(t,e,i,n){if(t===e&&i===n)return ze;const s=r=>ig(r,0,1,t,i);return r=>r===0||r===1?r:bc(s(r),e,n)}const _c=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,Tc=t=>e=>1-t(1-e),kc=Ki(.33,1.53,.69,.99),zr=Tc(kc),Pc=_c(zr),Cc=t=>t>=1?1:(t*=2)<1?.5*zr(t):.5*(2-Math.pow(2,-10*(t-1))),Fr=t=>1-Math.sin(Math.acos(t)),Sc=Tc(Fr),jc=_c(Fr),ng=Ki(.42,0,1,1),sg=Ki(0,0,.58,1),Ac=Ki(.42,0,.58,1),rg=t=>Array.isArray(t)&&typeof t[0]!="number",Rc=t=>Array.isArray(t)&&typeof t[0]=="number",og={linear:ze,easeIn:ng,easeInOut:Ac,easeOut:sg,circIn:Fr,circInOut:jc,circOut:Sc,backIn:zr,backInOut:Pc,backOut:kc,anticipate:Cc},ag=t=>typeof t=="string",Io=t=>{if(Rc(t)){Ir(t.length===4);const[e,i,n,s]=t;return Ki(e,i,n,s)}else if(ag(t))return og[t];return t},en=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function lg(t,e){let i=new Set,n=new Set,s=!1,r=!1;const o=new WeakSet;let a={delta:0,timestamp:0,isProcessing:!1};function l(c){o.has(c)&&(u.schedule(c),t()),c(a)}const u={schedule:(c,d=!1,h=!1)=>{const g=h&&s?i:n;return d&&o.add(c),g.add(c),c},cancel:c=>{n.delete(c),o.delete(c)},process:c=>{if(a=c,s){r=!0;return}s=!0;const d=i;i=n,n=d,i.forEach(l),i.clear(),s=!1,r&&(r=!1,u.process(c))}};return u}const cg=40;function Mc(t,e){let i=!1,n=!0;const s={delta:0,timestamp:0,isProcessing:!1},r=()=>i=!0,o=en.reduce((x,b)=>(x[b]=lg(r),x),{}),{setup:a,read:l,resolveKeyframes:u,preUpdate:c,update:d,preRender:h,render:m,postRender:g}=o,p=()=>{const x=yt.useManualTiming,b=x?s.timestamp:performance.now();i=!1,x||(s.delta=n?1e3/60:Math.max(Math.min(b-s.timestamp,cg),1)),s.timestamp=b,s.isProcessing=!0,a.process(s),l.process(s),u.process(s),c.process(s),d.process(s),h.process(s),m.process(s),g.process(s),s.isProcessing=!1,i&&e&&(n=!1,t(p))},y=()=>{i=!0,n=!0,s.isProcessing||t(p)};return{schedule:en.reduce((x,b)=>{const _=o[b];return x[b]=(A,P=!1,T=!1)=>(i||y(),_.schedule(A,P,T)),x},{}),cancel:x=>{for(let b=0;b<en.length;b++)o[en[b]].cancel(x)},state:s,steps:o}}const{schedule:G,cancel:xt,state:le,steps:rs}=Mc(typeof requestAnimationFrame<"u"?requestAnimationFrame:ze,!0);let un;function ug(){un=void 0}const me={now:()=>(un===void 0&&me.set(le.isProcessing||yt.useManualTiming?le.timestamp:performance.now()),un),set:t=>{un=t,queueMicrotask(ug)}},Dc=t=>e=>typeof e=="string"&&e.startsWith(t),Ec=Dc("--"),dg=Dc("var(--"),Br=t=>dg(t)?hg.test(t.split("/*")[0].trim()):!1,hg=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Vo(t){return typeof t!="string"?!1:t.split("/*")[0].includes("var(--")}const pi={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},$i={...pi,transform:t=>Ze(0,1,t)},tn={...pi,default:1},Ri=t=>Math.round(t*1e5)/1e5,Ur=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function fg(t){return t==null}const pg=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Nr=(t,e)=>i=>!!(typeof i=="string"&&pg.test(i)&&i.startsWith(t)||e&&!fg(i)&&Object.prototype.hasOwnProperty.call(i,e)),Lc=(t,e,i)=>n=>{if(typeof n!="string")return n;const[s,r,o,a]=n.match(Ur);return{[t]:parseFloat(s),[e]:parseFloat(r),[i]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},mg=t=>Ze(0,255,t),os={...pi,transform:t=>Math.round(mg(t))},Dt={test:Nr("rgb","red"),parse:Lc("red","green","blue"),transform:({red:t,green:e,blue:i,alpha:n=1})=>"rgba("+os.transform(t)+", "+os.transform(e)+", "+os.transform(i)+", "+Ri($i.transform(n))+")"};function gg(t){let e="",i="",n="",s="";return t.length>5?(e=t.substring(1,3),i=t.substring(3,5),n=t.substring(5,7),s=t.substring(7,9)):(e=t.substring(1,2),i=t.substring(2,3),n=t.substring(3,4),s=t.substring(4,5),e+=e,i+=i,n+=n,s+=s),{red:parseInt(e,16),green:parseInt(i,16),blue:parseInt(n,16),alpha:s?parseInt(s,16)/255:1}}const Is={test:Nr("#"),parse:gg,transform:Dt.transform},qi=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),ot=qi("deg"),Ke=qi("%"),R=qi("px"),yg=qi("vh"),xg=qi("vw"),zo={...Ke,parse:t=>Ke.parse(t)/100,transform:t=>Ke.transform(t*100)},Zt={test:Nr("hsl","hue"),parse:Lc("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:i,alpha:n=1})=>"hsla("+Math.round(t)+", "+Ke.transform(Ri(e))+", "+Ke.transform(Ri(i))+", "+Ri($i.transform(n))+")"},te={test:t=>Dt.test(t)||Is.test(t)||Zt.test(t),parse:t=>Dt.test(t)?Dt.parse(t):Zt.test(t)?Zt.parse(t):Is.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?Dt.transform(t):Zt.transform(t),getAnimatableNone:t=>{const e=te.parse(t);return e.alpha=0,te.transform(e)}},vg=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function wg(t){return isNaN(t)&&typeof t=="string"&&(t.match(Ur)?.length||0)+(t.match(vg)?.length||0)>0}const Oc="number",Ic="color",bg="var",_g="var(",Fo="${}",Tg=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function hi(t){const e=t.toString(),i=[],n={color:[],number:[],var:[]},s=[];let r=0;const a=e.replace(Tg,l=>(te.test(l)?(n.color.push(r),s.push(Ic),i.push(te.parse(l))):l.startsWith(_g)?(n.var.push(r),s.push(bg),i.push(l)):(n.number.push(r),s.push(Oc),i.push(parseFloat(l))),++r,Fo)).split(Fo);return{values:i,split:a,indexes:n,types:s}}function kg(t){return hi(t).values}function Vc({split:t,types:e}){const i=t.length;return n=>{let s="";for(let r=0;r<i;r++)if(s+=t[r],n[r]!==void 0){const o=e[r];o===Oc?s+=Ri(n[r]):o===Ic?s+=te.transform(n[r]):s+=n[r]}return s}}function Pg(t){return Vc(hi(t))}const Cg=t=>typeof t=="number"?0:te.test(t)?te.getAnimatableNone(t):t,Sg=(t,e)=>typeof t=="number"?e?.trim().endsWith("/")?t:0:Cg(t);function jg(t){const e=hi(t);return Vc(e)(e.values.map((n,s)=>Sg(n,e.split[s])))}const Ne={test:wg,parse:kg,createTransformer:Pg,getAnimatableNone:jg};function as(t,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+(e-t)*6*i:i<1/2?e:i<2/3?t+(e-t)*(2/3-i)*6:t}function Ag({hue:t,saturation:e,lightness:i,alpha:n}){t/=360,e/=100,i/=100;let s=0,r=0,o=0;if(!e)s=r=o=i;else{const a=i<.5?i*(1+e):i+e-i*e,l=2*i-a;s=as(l,a,t+1/3),r=as(l,a,t),o=as(l,a,t-1/3)}return{red:Math.round(s*255),green:Math.round(r*255),blue:Math.round(o*255),alpha:n}}function An(t,e){return i=>i>0?e:t}const W=(t,e,i)=>t+(e-t)*i,ls=(t,e,i)=>{const n=t*t,s=i*(e*e-n)+n;return s<0?0:Math.sqrt(s)},Rg=[Is,Dt,Zt],Mg=t=>Rg.find(e=>e.test(t));function Bo(t){const e=Mg(t);if(!e)return!1;let i=e.parse(t);return e===Zt&&(i=Ag(i)),i}const Uo=(t,e)=>{const i=Bo(t),n=Bo(e);if(!i||!n)return An(t,e);const s={...i};return r=>(s.red=ls(i.red,n.red,r),s.green=ls(i.green,n.green,r),s.blue=ls(i.blue,n.blue,r),s.alpha=W(i.alpha,n.alpha,r),Dt.transform(s))},Vs=new Set(["none","hidden"]);function Dg(t,e){return Vs.has(t)?i=>i<=0?t:e:i=>i>=1?e:t}function Eg(t,e){return i=>W(t,e,i)}function $r(t){return typeof t=="number"?Eg:typeof t=="string"?Br(t)?An:te.test(t)?Uo:Ig:Array.isArray(t)?zc:typeof t=="object"?te.test(t)?Uo:Lg:An}function zc(t,e){const i=[...t],n=i.length,s=t.map((r,o)=>$r(r)(r,e[o]));return r=>{for(let o=0;o<n;o++)i[o]=s[o](r);return i}}function Lg(t,e){const i={...t,...e},n={};for(const s in i)t[s]!==void 0&&e[s]!==void 0&&(n[s]=$r(t[s])(t[s],e[s]));return s=>{for(const r in n)i[r]=n[r](s);return i}}function Og(t,e){const i=[],n={color:0,var:0,number:0};for(let s=0;s<e.values.length;s++){const r=e.types[s],o=t.indexes[r][n[r]],a=t.values[o]??0;i[s]=a,n[r]++}return i}const Ig=(t,e)=>{const i=Ne.createTransformer(e),n=hi(t),s=hi(e);return n.indexes.var.length===s.indexes.var.length&&n.indexes.color.length===s.indexes.color.length&&n.indexes.number.length>=s.indexes.number.length?Vs.has(t)&&!s.values.length||Vs.has(e)&&!n.values.length?Dg(t,e):Yi(zc(Og(n,s),s.values),i):An(t,e)};function Fc(t,e,i){return typeof t=="number"&&typeof e=="number"&&typeof i=="number"?W(t,e,i):$r(t)(t,e)}const Vg=t=>{const e=({timestamp:i})=>t(i);return{start:(i=!0)=>G.update(e,i),stop:()=>xt(e),now:()=>le.isProcessing?le.timestamp:me.now()}},Bc=(t,e,i=10)=>{let n="";const s=Math.max(Math.round(e/i),2);for(let r=0;r<s;r++)n+=Math.round(t(r/(s-1))*1e4)/1e4+", ";return`linear(${n.substring(0,n.length-2)})`},Rn=2e4;function Gr(t){let e=0;const i=50;let n=t.next(e);for(;!n.done&&e<Rn;)e+=i,n=t.next(e);return e>=Rn?1/0:e}function zg(t,e=100,i){const n=i({...t,keyframes:[0,e]}),s=Math.min(Gr(n),Rn);return{type:"keyframes",ease:r=>n.next(s*r).value/e,duration:Ve(s)}}const Z={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function zs(t,e){return t*Math.sqrt(1-e*e)}const Fg=12;function Bg(t,e,i){let n=i;for(let s=1;s<Fg;s++)n=n-t(n)/e(n);return n}const cs=.001;function Ug({duration:t=Z.duration,bounce:e=Z.bounce,velocity:i=Z.velocity,mass:n=Z.mass}){let s,r,o=1-e;o=Ze(Z.minDamping,Z.maxDamping,o),t=Ze(Z.minDuration,Z.maxDuration,Ve(t)),o<1?(s=u=>{const c=u*o,d=c*t,h=c-i,m=zs(u,o),g=Math.exp(-d);return cs-h/m*g},r=u=>{const d=u*o*t,h=d*i+i,m=Math.pow(o,2)*Math.pow(u,2)*t,g=Math.exp(-d),p=zs(Math.pow(u,2),o);return(-s(u)+cs>0?-1:1)*((h-m)*g)/p}):(s=u=>{const c=Math.exp(-u*t),d=(u-i)*t+1;return-cs+c*d},r=u=>{const c=Math.exp(-u*t),d=(i-u)*(t*t);return c*d});const a=5/t,l=Bg(s,r,a);if(t=Re(t),isNaN(l))return{stiffness:Z.stiffness,damping:Z.damping,duration:t};{const u=Math.pow(l,2)*n;return{stiffness:u,damping:o*2*Math.sqrt(n*u),duration:t}}}const Ng=["duration","bounce"],$g=["stiffness","damping","mass"];function No(t,e){return e.some(i=>t[i]!==void 0)}function Gg(t){let e={velocity:Z.velocity,stiffness:Z.stiffness,damping:Z.damping,mass:Z.mass,isResolvedFromDuration:!1,...t};if(!No(t,$g)&&No(t,Ng))if(e.velocity=0,t.visualDuration){const i=t.visualDuration,n=2*Math.PI/(i*1.2),s=n*n,r=2*Ze(.05,1,1-(t.bounce||0))*Math.sqrt(s);e={...e,mass:Z.mass,stiffness:s,damping:r}}else{const i=Ug({...t,velocity:0});e={...e,...i,mass:Z.mass},e.isResolvedFromDuration=!0}return e}function Mn(t=Z.visualDuration,e=Z.bounce){const i=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:n,restDelta:s}=i;const r=i.keyframes[0],o=i.keyframes[i.keyframes.length-1],a={done:!1,value:r},{stiffness:l,damping:u,mass:c,duration:d,velocity:h,isResolvedFromDuration:m}=Gg({...i,velocity:-Ve(i.velocity||0)}),g=h||0,p=u/(2*Math.sqrt(l*c)),y=o-r,v=Ve(Math.sqrt(l/c)),w=Math.abs(y)<5;n||(n=w?Z.restSpeed.granular:Z.restSpeed.default),s||(s=w?Z.restDelta.granular:Z.restDelta.default);let x,b,_,A,P,T;if(p<1)_=zs(v,p),A=(g+p*v*y)/_,x=j=>{const M=Math.exp(-p*v*j);return o-M*(A*Math.sin(_*j)+y*Math.cos(_*j))},P=p*v*A+y*_,T=p*v*y-A*_,b=j=>Math.exp(-p*v*j)*(P*Math.sin(_*j)+T*Math.cos(_*j));else if(p===1){x=M=>o-Math.exp(-v*M)*(y+(g+v*y)*M);const j=g+v*y;b=M=>Math.exp(-v*M)*(v*j*M-g)}else{const j=v*Math.sqrt(p*p-1);x=O=>{const I=Math.exp(-p*v*O),z=Math.min(j*O,300);return o-I*((g+p*v*y)*Math.sinh(z)+j*y*Math.cosh(z))/j};const M=(g+p*v*y)/j,E=p*v*M-y*j,L=p*v*y-M*j;b=O=>{const I=Math.exp(-p*v*O),z=Math.min(j*O,300);return I*(E*Math.sinh(z)+L*Math.cosh(z))}}const C={calculatedDuration:m&&d||null,velocity:j=>Re(b(j)),next:j=>{if(!m&&p<1){const E=Math.exp(-p*v*j),L=Math.sin(_*j),O=Math.cos(_*j),I=o-E*(A*L+y*O),z=Re(E*(P*L+T*O));return a.done=Math.abs(z)<=n&&Math.abs(o-I)<=s,a.value=a.done?o:I,a}const M=x(j);if(m)a.done=j>=d;else{const E=Re(b(j));a.done=Math.abs(E)<=n&&Math.abs(o-M)<=s}return a.value=a.done?o:M,a},toString:()=>{const j=Math.min(Gr(C),Rn),M=Bc(E=>C.next(j*E).value,j,30);return j+"ms "+M},toTransition:()=>{}};return C}Mn.applyToOptions=t=>{const e=zg(t,100,Mn);return t.ease=e.ease,t.duration=Re(e.duration),t.type="keyframes",t};const Wg=5;function Uc(t,e,i){const n=Math.max(e-Wg,0);return wc(i-t(n),e-n)}function Fs({keyframes:t,velocity:e=0,power:i=.8,timeConstant:n=325,bounceDamping:s=10,bounceStiffness:r=500,modifyTarget:o,min:a,max:l,restDelta:u=.5,restSpeed:c}){const d=t[0],h={done:!1,value:d},m=T=>a!==void 0&&T<a||l!==void 0&&T>l,g=T=>a===void 0?l:l===void 0||Math.abs(a-T)<Math.abs(l-T)?a:l;let p=i*e;const y=d+p,v=o===void 0?y:o(y);v!==y&&(p=v-d);const w=T=>-p*Math.exp(-T/n),x=T=>v+w(T),b=T=>{const C=w(T),j=x(T);h.done=Math.abs(C)<=u,h.value=h.done?v:j};let _,A;const P=T=>{m(h.value)&&(_=T,A=Mn({keyframes:[h.value,g(h.value)],velocity:Uc(x,T,h.value),damping:s,stiffness:r,restDelta:u,restSpeed:c}))};return P(0),{calculatedDuration:null,next:T=>{let C=!1;return!A&&_===void 0&&(C=!0,b(T),P(T)),_!==void 0&&T>=_?A.next(T-_):(!C&&b(T),h)}}}function Hg(t,e,i){const n=[],s=i||yt.mix||Fc,r=t.length-1;for(let o=0;o<r;o++){let a=s(t[o],t[o+1]);if(e){const l=Array.isArray(e)?e[o]||ze:e;a=Yi(l,a)}n.push(a)}return n}function Xg(t,e,{clamp:i=!0,ease:n,mixer:s}={}){const r=t.length;if(Ir(r===e.length),r===1)return()=>e[0];if(r===2&&e[0]===e[1])return()=>e[1];const o=t[0]===t[1];t[0]>t[r-1]&&(t=[...t].reverse(),e=[...e].reverse());const a=Hg(e,n,s),l=a.length,u=c=>{if(o&&c<t[0])return e[0];let d=0;if(l>1)for(;d<t.length-2&&!(c<t[d+1]);d++);const h=Ni(t[d],t[d+1],c);return a[d](h)};return i?c=>u(Ze(t[0],t[r-1],c)):u}function Yg(t,e){const i=t[t.length-1];for(let n=1;n<=e;n++){const s=Ni(0,e,n);t.push(W(i,1,s))}}function Kg(t){const e=[0];return Yg(e,t.length-1),e}function qg(t,e){return t.map(i=>i*e)}function Zg(t,e){return t.map(()=>e||Ac).splice(0,t.length-1)}function Mi({duration:t=300,keyframes:e,times:i,ease:n="easeInOut"}){const s=rg(n)?n.map(Io):Io(n),r={done:!1,value:e[0]},o=qg(i&&i.length===e.length?i:Kg(e),t),a=Xg(o,e,{ease:Array.isArray(s)?s:Zg(e,s)});return{calculatedDuration:t,next:l=>(r.value=a(l),r.done=l>=t,r)}}const Jg=t=>t!==null;function $n(t,{repeat:e,repeatType:i="loop"},n,s=1){const r=t.filter(Jg),a=s<0||e&&i!=="loop"&&e%2===1?0:r.length-1;return!a||n===void 0?r[a]:n}const Qg={decay:Fs,inertia:Fs,tween:Mi,keyframes:Mi,spring:Mn};function Nc(t){typeof t.type=="string"&&(t.type=Qg[t.type])}class Wr{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,i){return this.finished.then(e,i)}}const e0=t=>t/100;class Dn extends Wr{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{const{motionValue:i}=this.options;i&&i.updatedAt!==me.now()&&this.tick(me.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){const{options:e}=this;Nc(e);const{type:i=Mi,repeat:n=0,repeatDelay:s=0,repeatType:r,velocity:o=0}=e;let{keyframes:a}=e;const l=i||Mi;l!==Mi&&typeof a[0]!="number"&&(this.mixKeyframes=Yi(e0,Fc(a[0],a[1])),a=[0,100]);const u=l({...e,keyframes:a});r==="mirror"&&(this.mirroredGenerator=l({...e,keyframes:[...a].reverse(),velocity:-o})),u.calculatedDuration===null&&(u.calculatedDuration=Gr(u));const{calculatedDuration:c}=u;this.calculatedDuration=c,this.resolvedDuration=c+s,this.totalDuration=this.resolvedDuration*(n+1)-s,this.generator=u}updateTime(e){const i=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=i}tick(e,i=!1){const{generator:n,totalDuration:s,mixKeyframes:r,mirroredGenerator:o,resolvedDuration:a,calculatedDuration:l}=this;if(this.startTime===null)return n.next(0);const{delay:u=0,keyframes:c,repeat:d,repeatType:h,repeatDelay:m,type:g,onUpdate:p,finalKeyframe:y}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-s/this.speed,this.startTime)),i?this.currentTime=e:this.updateTime(e);const v=this.currentTime-u*(this.playbackSpeed>=0?1:-1),w=this.playbackSpeed>=0?v<0:v>s;this.currentTime=Math.max(v,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=s);let x=this.currentTime,b=n;if(d){const T=Math.min(this.currentTime,s)/a;let C=Math.floor(T),j=T%1;!j&&T>=1&&(j=1),j===1&&C--,C=Math.min(C,d+1),C%2&&(h==="reverse"?(j=1-j,m&&(j-=m/a)):h==="mirror"&&(b=o)),x=Ze(0,1,j)*a}let _;w?(this.delayState.value=c[0],_=this.delayState):_=b.next(x),r&&!w&&(_.value=r(_.value));let{done:A}=_;!w&&l!==null&&(A=this.playbackSpeed>=0?this.currentTime>=s:this.currentTime<=0);const P=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&A);return P&&g!==Fs&&(_.value=$n(c,this.options,y,this.speed)),p&&p(_.value),P&&this.finish(),_}then(e,i){return this.finished.then(e,i)}get duration(){return Ve(this.calculatedDuration)}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+Ve(e)}get time(){return Ve(this.currentTime)}set time(e){e=Re(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=e,this.tick(e))}getGeneratorVelocity(){const e=this.currentTime;if(e<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(e);const i=this.generator.next(e).value;return Uc(n=>this.generator.next(n).value,e,i)}get speed(){return this.playbackSpeed}set speed(e){const i=this.playbackSpeed!==e;i&&this.driver&&this.updateTime(me.now()),this.playbackSpeed=e,i&&this.driver&&(this.time=Ve(this.currentTime))}play(){if(this.isStopped)return;const{driver:e=Vg,startTime:i}=this.options;this.driver||(this.driver=e(s=>this.tick(s))),this.options.onPlay?.();const n=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=n):this.holdTime!==null?this.startTime=n-this.holdTime:this.startTime||(this.startTime=i??n),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(me.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),e.observe(this)}}function t0(t){for(let e=1;e<t.length;e++)t[e]??(t[e]=t[e-1])}const Et=t=>t*180/Math.PI,Bs=t=>{const e=Et(Math.atan2(t[1],t[0]));return Us(e)},i0={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:Bs,rotateZ:Bs,skewX:t=>Et(Math.atan(t[1])),skewY:t=>Et(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},Us=t=>(t=t%360,t<0&&(t+=360),t),$o=Bs,Go=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),Wo=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),n0={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Go,scaleY:Wo,scale:t=>(Go(t)+Wo(t))/2,rotateX:t=>Us(Et(Math.atan2(t[6],t[5]))),rotateY:t=>Us(Et(Math.atan2(-t[2],t[0]))),rotateZ:$o,rotate:$o,skewX:t=>Et(Math.atan(t[4])),skewY:t=>Et(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function Ns(t){return t.includes("scale")?1:0}function $s(t,e){if(!t||t==="none")return Ns(e);const i=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let n,s;if(i)n=n0,s=i;else{const a=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);n=i0,s=a}if(!s)return Ns(e);const r=n[e],o=s[1].split(",").map(r0);return typeof r=="function"?r(o):o[r]}const s0=(t,e)=>{const{transform:i="none"}=getComputedStyle(t);return $s(i,e)};function r0(t){return parseFloat(t.trim())}const mi=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],gi=new Set(mi),Ho=t=>t===pi||t===R,o0=new Set(["x","y","z"]),a0=mi.filter(t=>!o0.has(t));function l0(t){const e=[];return a0.forEach(i=>{const n=t.getValue(i);n!==void 0&&(e.push([i,n.get()]),n.set(i.startsWith("scale")?1:0))}),e}const ut={width:({x:t},{paddingLeft:e="0",paddingRight:i="0",boxSizing:n})=>{const s=t.max-t.min;return n==="border-box"?s:s-parseFloat(e)-parseFloat(i)},height:({y:t},{paddingTop:e="0",paddingBottom:i="0",boxSizing:n})=>{const s=t.max-t.min;return n==="border-box"?s:s-parseFloat(e)-parseFloat(i)},top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:(t,{transform:e})=>$s(e,"x"),y:(t,{transform:e})=>$s(e,"y")};ut.translateX=ut.x;ut.translateY=ut.y;const Ft=new Set;let Gs=!1,Ws=!1,Hs=!1;function $c(){if(Ws){const t=Array.from(Ft).filter(n=>n.needsMeasurement),e=new Set(t.map(n=>n.element)),i=new Map;e.forEach(n=>{const s=l0(n);s.length&&(i.set(n,s),n.render())}),t.forEach(n=>n.measureInitialState()),e.forEach(n=>{n.render();const s=i.get(n);s&&s.forEach(([r,o])=>{n.getValue(r)?.set(o)})}),t.forEach(n=>n.measureEndState()),t.forEach(n=>{n.suspendedScrollY!==void 0&&window.scrollTo(0,n.suspendedScrollY)})}Ws=!1,Gs=!1,Ft.forEach(t=>t.complete(Hs)),Ft.clear()}function Gc(){Ft.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(Ws=!0)})}function c0(){Hs=!0,Gc(),$c(),Hs=!1}class Hr{constructor(e,i,n,s,r,o=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=i,this.name=n,this.motionValue=s,this.element=r,this.isAsync=o}scheduleResolve(){this.state="scheduled",this.isAsync?(Ft.add(this),Gs||(Gs=!0,G.read(Gc),G.resolveKeyframes($c))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:i,element:n,motionValue:s}=this;if(e[0]===null){const r=s?.get(),o=e[e.length-1];if(r!==void 0)e[0]=r;else if(n&&i){const a=n.readValue(i,o);a!=null&&(e[0]=a)}e[0]===void 0&&(e[0]=o),s&&r===void 0&&s.set(e[0])}t0(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),Ft.delete(this)}cancel(){this.state==="scheduled"&&(Ft.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const u0=t=>t.startsWith("--");function Wc(t,e,i){u0(e)?t.style.setProperty(e,i):t.style[e]=i}const d0={};function Hc(t,e){const i=vc(t);return()=>d0[e]??i()}const h0=Hc(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),Xc=Hc(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Pi=([t,e,i,n])=>`cubic-bezier(${t}, ${e}, ${i}, ${n})`,Xo={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Pi([0,.65,.55,1]),circOut:Pi([.55,0,1,.45]),backIn:Pi([.31,.01,.66,-.59]),backOut:Pi([.33,1.53,.69,.99])};function Yc(t,e){if(t)return typeof t=="function"?Xc()?Bc(t,e):"ease-out":Rc(t)?Pi(t):Array.isArray(t)?t.map(i=>Yc(i,e)||Xo.easeOut):Xo[t]}function f0(t,e,i,{delay:n=0,duration:s=300,repeat:r=0,repeatType:o="loop",ease:a="easeOut",times:l}={},u=void 0){const c={[e]:i};l&&(c.offset=l);const d=Yc(a,s);Array.isArray(d)&&(c.easing=d);const h={delay:n,duration:s,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:r+1,direction:o==="reverse"?"alternate":"normal"};return u&&(h.pseudoElement=u),t.animate(c,h)}function Kc(t){return typeof t=="function"&&"applyToOptions"in t}function p0({type:t,...e}){return Kc(t)&&Xc()?t.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}class qc extends Wr{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;const{element:i,name:n,keyframes:s,pseudoElement:r,allowFlatten:o=!1,finalKeyframe:a,onComplete:l}=e;this.isPseudoElement=!!r,this.allowFlatten=o,this.options=e,Ir(typeof e.type!="string");const u=p0(e);this.animation=f0(i,n,s,u,r),u.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!r){const c=$n(s,this.options,a,this.speed);this.updateMotionValue&&this.updateMotionValue(c),Wc(i,n,c),this.animation.cancel()}l?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){const e=this.options?.element;!this.isPseudoElement&&e?.isConnected&&this.animation.commitStyles?.()}get duration(){const e=this.animation.effect?.getComputedTiming?.().duration||0;return Ve(Number(e))}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+Ve(e)}get time(){return Ve(Number(this.animation.currentTime)||0)}set time(e){const i=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Re(e),i&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,rangeStart:i,rangeEnd:n,observe:s}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,e&&h0()?(this.animation.timeline=e,i&&(this.animation.rangeStart=i),n&&(this.animation.rangeEnd=n),ze):s(this)}}const Zc={anticipate:Cc,backInOut:Pc,circInOut:jc};function m0(t){return t in Zc}function g0(t){typeof t.ease=="string"&&m0(t.ease)&&(t.ease=Zc[t.ease])}const us=10;class y0 extends qc{constructor(e){g0(e),Nc(e),super(e),e.startTime!==void 0&&e.autoplay!==!1&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:i,onUpdate:n,onComplete:s,element:r,...o}=this.options;if(!i)return;if(e!==void 0){i.set(e);return}const a=new Dn({...o,autoplay:!1}),l=Math.max(us,me.now()-this.startTime),u=Ze(0,us,l-us),c=a.sample(l).value,{name:d}=this.options;r&&d&&Wc(r,d,c),i.setWithVelocity(a.sample(Math.max(0,l-u)).value,c,u),a.stop()}}const Yo=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Ne.test(t)||t==="0")&&!t.startsWith("url("));function x0(t){const e=t[0];if(t.length===1)return!0;for(let i=0;i<t.length;i++)if(t[i]!==e)return!0}function v0(t,e,i,n){const s=t[0];if(s===null)return!1;if(e==="display"||e==="visibility")return!0;const r=t[t.length-1],o=Yo(s,e),a=Yo(r,e);return!o||!a?!1:x0(t)||(i==="spring"||Kc(i))&&n}function Xs(t){t.duration=0,t.type="keyframes"}const Jc=new Set(["opacity","clipPath","filter","transform"]),w0=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function b0(t){for(let e=0;e<t.length;e++)if(typeof t[e]=="string"&&w0.test(t[e]))return!0;return!1}const _0=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),T0=vc(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function k0(t){const{motionValue:e,name:i,repeatDelay:n,repeatType:s,damping:r,type:o,keyframes:a}=t;if(!(e?.owner?.current instanceof HTMLElement))return!1;const{onUpdate:u,transformTemplate:c}=e.owner.getProps();return T0()&&i&&(Jc.has(i)||_0.has(i)&&b0(a))&&(i!=="transform"||!c)&&!u&&!n&&s!=="mirror"&&r!==0&&o!=="inertia"}const P0=40;class C0 extends Wr{constructor({autoplay:e=!0,delay:i=0,type:n="keyframes",repeat:s=0,repeatDelay:r=0,repeatType:o="loop",keyframes:a,name:l,motionValue:u,element:c,...d}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=me.now();const h={autoplay:e,delay:i,type:n,repeat:s,repeatDelay:r,repeatType:o,name:l,motionValue:u,element:c,...d},m=c?.KeyframeResolver||Hr;this.keyframeResolver=new m(a,(g,p,y)=>this.onKeyframesResolved(g,p,h,!y),l,u,c),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(e,i,n,s){this.keyframeResolver=void 0;const{name:r,type:o,velocity:a,delay:l,isHandoff:u,onUpdate:c}=n;this.resolvedAt=me.now();let d=!0;v0(e,r,o,a)||(d=!1,(yt.instantAnimations||!l)&&c?.($n(e,n,i)),e[0]=e[e.length-1],Xs(n),n.repeat=0);const m={startTime:s?this.resolvedAt?this.resolvedAt-this.createdAt>P0?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:i,...n,keyframes:e},g=d&&!u&&k0(m),p=m.motionValue?.owner?.current;let y;if(g)try{y=new y0({...m,element:p})}catch{y=new Dn(m)}else y=new Dn(m);y.finished.then(()=>{this.notifyFinished()}).catch(ze),this.pendingTimeline&&(this.stopTimeline=y.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=y}get finished(){return this._animation?this.animation.finished:this._finished}then(e,i){return this.finished.finally(e).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),c0()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}function Qc(t,e,i,n=0,s=1){const r=Array.from(t).sort((u,c)=>u.sortNodePosition(c)).indexOf(e),o=t.size,a=(o-1)*n;return typeof i=="function"?i(r,o):s===1?r*n:a-r*n}const S0=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function j0(t){const e=S0.exec(t);if(!e)return[,];const[,i,n,s]=e;return[`--${i??n}`,s]}function eu(t,e,i=1){const[n,s]=j0(t);if(!n)return;const r=window.getComputedStyle(e).getPropertyValue(n);if(r){const o=r.trim();return gc(o)?parseFloat(o):o}return Br(s)?eu(s,e,i+1):s}const A0={type:"spring",stiffness:500,damping:25,restSpeed:10},R0=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),M0={type:"keyframes",duration:.8},D0={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},E0=(t,{keyframes:e})=>e.length>2?M0:gi.has(t)?t.startsWith("scale")?R0(e[1]):A0:D0;function tu(t,e){if(t?.inherit&&e){const{inherit:i,...n}=t;return{...e,...n}}return t}function Xr(t,e){const i=t?.[e]??t?.default??t;return i!==t?tu(i,t):i}const L0=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function O0(t){for(const e in t)if(!L0.has(e))return!0;return!1}const Yr=(t,e,i,n={},s,r)=>o=>{const a=Xr(n,t)||{},l=a.delay||n.delay||0;let{elapsed:u=0}=n;u=u-Re(l);const c={keyframes:Array.isArray(i)?i:[null,i],ease:"easeOut",velocity:e.getVelocity(),...a,delay:-u,onUpdate:h=>{e.set(h),a.onUpdate&&a.onUpdate(h)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:t,motionValue:e,element:r?void 0:s};O0(a)||Object.assign(c,E0(t,c)),c.duration&&(c.duration=Re(c.duration)),c.repeatDelay&&(c.repeatDelay=Re(c.repeatDelay)),c.from!==void 0&&(c.keyframes[0]=c.from);let d=!1;if((c.type===!1||c.duration===0&&!c.repeatDelay)&&(Xs(c),c.delay===0&&(d=!0)),(yt.instantAnimations||yt.skipAnimations||s?.shouldSkipAnimations)&&(d=!0,Xs(c),c.delay=0),c.allowFlatten=!a.type&&!a.ease,d&&!r&&e.get()!==void 0){const h=$n(c.keyframes,a);if(h!==void 0){G.update(()=>{c.onUpdate(h),c.onComplete()});return}}return a.isSync?new Dn(c):new C0(c)};function Ko(t){const e=[{},{}];return t?.values.forEach((i,n)=>{e[0][n]=i.get(),e[1][n]=i.getVelocity()}),e}function Kr(t,e,i,n){if(typeof e=="function"){const[s,r]=Ko(n);e=e(i!==void 0?i:t.custom,s,r)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[s,r]=Ko(n);e=e(i!==void 0?i:t.custom,s,r)}return e}function Bt(t,e,i){const n=t.getProps();return Kr(n,e,i!==void 0?i:n.custom,t)}const iu=new Set(["width","height","top","left","right","bottom",...mi]),qo=30,I0=t=>!isNaN(parseFloat(t));class V0{constructor(e,i={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=n=>{const s=me.now();if(this.updatedAt!==s&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(n),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const r of this.dependents)r.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=i.owner}setCurrent(e){this.current=e,this.updatedAt=me.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=I0(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,i){this.events[e]||(this.events[e]=new Vr);const n=this.events[e].add(i);return e==="change"?()=>{n(),G.read(()=>{this.events.change.getSize()||this.stop()})}:n}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,i){this.passiveEffect=e,this.stopPassiveEffect=i}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,i,n){this.set(i),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-n}jump(e,i=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,i&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=me.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>qo)return 0;const i=Math.min(this.updatedAt-this.prevUpdatedAt,qo);return wc(parseFloat(this.current)-parseFloat(this.prevFrameValue),i)}start(e){return this.stop(),new Promise(i=>{this.hasAnimated=!0,this.animation=e(i),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function fi(t,e){return new V0(t,e)}const Ys=t=>Array.isArray(t);function z0(t,e,i){t.hasValue(e)?t.getValue(e).set(i):t.addValue(e,fi(i))}function F0(t){return Ys(t)?t[t.length-1]||0:t}function B0(t,e){const i=Bt(t,e);let{transitionEnd:n={},transition:s={},...r}=i||{};r={...r,...n};for(const o in r){const a=F0(r[o]);z0(t,o,a)}}const ce=t=>!!(t&&t.getVelocity);function U0(t){return!!(ce(t)&&t.add)}function Ks(t,e){const i=t.getValue("willChange");if(U0(i))return i.add(e);if(!i&&yt.WillChange){const n=new yt.WillChange("auto");t.addValue("willChange",n),n.add(e)}}function qr(t){return t.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}const N0="framerAppearId",nu="data-"+qr(N0);function su(t){return t.props[nu]}function $0({protectedKeys:t,needsAnimating:e},i){const n=t.hasOwnProperty(i)&&e[i]!==!0;return e[i]=!1,n}function ru(t,e,{delay:i=0,transitionOverride:n,type:s}={}){let{transition:r,transitionEnd:o,...a}=e;const l=t.getDefaultTransition();r=r?tu(r,l):l;const u=r?.reduceMotion;n&&(r=n);const c=[],d=s&&t.animationState&&t.animationState.getState()[s];for(const h in a){const m=t.getValue(h,t.latestValues[h]??null),g=a[h];if(g===void 0||d&&$0(d,h))continue;const p={delay:i,...Xr(r||{},h)},y=m.get();if(y!==void 0&&!m.isAnimating()&&!Array.isArray(g)&&g===y&&!p.velocity){G.update(()=>m.set(g));continue}let v=!1;if(window.MotionHandoffAnimation){const b=su(t);if(b){const _=window.MotionHandoffAnimation(b,h,G);_!==null&&(p.startTime=_,v=!0)}}Ks(t,h);const w=u??t.shouldReduceMotion;m.start(Yr(h,m,g,w&&iu.has(h)?{type:!1}:p,t,v));const x=m.animation;x&&c.push(x)}if(o){const h=()=>G.update(()=>{o&&B0(t,o)});c.length?Promise.all(c).then(h):h()}return c}function qs(t,e,i={}){const n=Bt(t,e,i.type==="exit"?t.presenceContext?.custom:void 0);let{transition:s=t.getDefaultTransition()||{}}=n||{};i.transitionOverride&&(s=i.transitionOverride);const r=n?()=>Promise.all(ru(t,n,i)):()=>Promise.resolve(),o=t.variantChildren&&t.variantChildren.size?(l=0)=>{const{delayChildren:u=0,staggerChildren:c,staggerDirection:d}=s;return G0(t,e,l,u,c,d,i)}:()=>Promise.resolve(),{when:a}=s;if(a){const[l,u]=a==="beforeChildren"?[r,o]:[o,r];return l().then(()=>u())}else return Promise.all([r(),o(i.delay)])}function G0(t,e,i=0,n=0,s=0,r=1,o){const a=[];for(const l of t.variantChildren)l.notify("AnimationStart",e),a.push(qs(l,e,{...o,delay:i+(typeof n=="function"?0:n)+Qc(t.variantChildren,l,n,s,r)}).then(()=>l.notify("AnimationComplete",e)));return Promise.all(a)}function W0(t,e,i={}){t.notify("AnimationStart",e);let n;if(Array.isArray(e)){const s=e.map(r=>qs(t,r,i));n=Promise.all(s)}else if(typeof e=="string")n=qs(t,e,i);else{const s=typeof e=="function"?Bt(t,e,i.custom):e;n=Promise.all(ru(t,s,i))}return n.then(()=>{t.notify("AnimationComplete",e)})}const H0={test:t=>t==="auto",parse:t=>t},ou=t=>e=>e.test(t),au=[pi,R,Ke,ot,xg,yg,H0],Zo=t=>au.find(ou(t));function X0(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||xc(t):!0}const Y0=new Set(["brightness","contrast","saturate","opacity"]);function K0(t){const[e,i]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[n]=i.match(Ur)||[];if(!n)return t;const s=i.replace(n,"");let r=Y0.has(e)?1:0;return n!==i&&(r*=100),e+"("+r+s+")"}const q0=/\b([a-z-]*)\(.*?\)/gu,Zs={...Ne,getAnimatableNone:t=>{const e=t.match(q0);return e?e.map(K0).join(" "):t}},Js={...Ne,getAnimatableNone:t=>{const e=Ne.parse(t);return Ne.createTransformer(t)(e.map(n=>typeof n=="number"?0:typeof n=="object"?{...n,alpha:1}:n))}},Jo={...pi,transform:Math.round},Z0={rotate:ot,rotateX:ot,rotateY:ot,rotateZ:ot,scale:tn,scaleX:tn,scaleY:tn,scaleZ:tn,skew:ot,skewX:ot,skewY:ot,distance:R,translateX:R,translateY:R,translateZ:R,x:R,y:R,z:R,perspective:R,transformPerspective:R,opacity:$i,originX:zo,originY:zo,originZ:R},Zr={borderWidth:R,borderTopWidth:R,borderRightWidth:R,borderBottomWidth:R,borderLeftWidth:R,borderRadius:R,borderTopLeftRadius:R,borderTopRightRadius:R,borderBottomRightRadius:R,borderBottomLeftRadius:R,width:R,maxWidth:R,height:R,maxHeight:R,top:R,right:R,bottom:R,left:R,inset:R,insetBlock:R,insetBlockStart:R,insetBlockEnd:R,insetInline:R,insetInlineStart:R,insetInlineEnd:R,padding:R,paddingTop:R,paddingRight:R,paddingBottom:R,paddingLeft:R,paddingBlock:R,paddingBlockStart:R,paddingBlockEnd:R,paddingInline:R,paddingInlineStart:R,paddingInlineEnd:R,margin:R,marginTop:R,marginRight:R,marginBottom:R,marginLeft:R,marginBlock:R,marginBlockStart:R,marginBlockEnd:R,marginInline:R,marginInlineStart:R,marginInlineEnd:R,fontSize:R,backgroundPositionX:R,backgroundPositionY:R,...Z0,zIndex:Jo,fillOpacity:$i,strokeOpacity:$i,numOctaves:Jo},J0={...Zr,color:te,backgroundColor:te,outlineColor:te,fill:te,stroke:te,borderColor:te,borderTopColor:te,borderRightColor:te,borderBottomColor:te,borderLeftColor:te,filter:Zs,WebkitFilter:Zs,mask:Js,WebkitMask:Js},lu=t=>J0[t],Q0=new Set([Zs,Js]);function cu(t,e){let i=lu(t);return Q0.has(i)||(i=Ne),i.getAnimatableNone?i.getAnimatableNone(e):void 0}const ey=new Set(["auto","none","0"]);function ty(t,e,i){let n=0,s;for(;n<t.length&&!s;){const r=t[n];typeof r=="string"&&!ey.has(r)&&hi(r).values.length&&(s=t[n]),n++}if(s&&i)for(const r of e)t[r]=cu(i,s)}class iy extends Hr{constructor(e,i,n,s,r){super(e,i,n,s,r,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:i,name:n}=this;if(!i||!i.current)return;super.readKeyframes();for(let c=0;c<e.length;c++){let d=e[c];if(typeof d=="string"&&(d=d.trim(),Br(d))){const h=eu(d,i.current);h!==void 0&&(e[c]=h),c===e.length-1&&(this.finalKeyframe=d)}}if(this.resolveNoneKeyframes(),!iu.has(n)||e.length!==2)return;const[s,r]=e,o=Zo(s),a=Zo(r),l=Vo(s),u=Vo(r);if(l!==u&&ut[n]){this.needsMeasurement=!0;return}if(o!==a)if(Ho(o)&&Ho(a))for(let c=0;c<e.length;c++){const d=e[c];typeof d=="string"&&(e[c]=parseFloat(d))}else ut[n]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:i}=this,n=[];for(let s=0;s<e.length;s++)(e[s]===null||X0(e[s]))&&n.push(s);n.length&&ty(e,n,i)}measureInitialState(){const{element:e,unresolvedKeyframes:i,name:n}=this;if(!e||!e.current)return;n==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=ut[n](e.measureViewportBox(),window.getComputedStyle(e.current)),i[0]=this.measuredOrigin;const s=i[i.length-1];s!==void 0&&e.getValue(n,s).jump(s,!1)}measureEndState(){const{element:e,name:i,unresolvedKeyframes:n}=this;if(!e||!e.current)return;const s=e.getValue(i);s&&s.jump(this.measuredOrigin,!1);const r=n.length-1,o=n[r];n[r]=ut[i](e.measureViewportBox(),window.getComputedStyle(e.current)),o!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=o),this.removedTransforms?.length&&this.removedTransforms.forEach(([a,l])=>{e.getValue(a).set(l)}),this.resolveNoneKeyframes()}}function uu(t,e,i){if(t==null)return[];if(t instanceof EventTarget)return[t];if(typeof t=="string"){const s=document.querySelectorAll(t);return s?Array.from(s):[]}return Array.from(t).filter(n=>n!=null)}const du=(t,e)=>e&&typeof t=="number"?e.transform(t):t;function dn(t){return yc(t)&&"offsetHeight"in t&&!("ownerSVGElement"in t)}const{schedule:Jr}=Mc(queueMicrotask,!1),Be={x:!1,y:!1};function hu(){return Be.x||Be.y}function ny(t){return t==="x"||t==="y"?Be[t]?null:(Be[t]=!0,()=>{Be[t]=!1}):Be.x||Be.y?null:(Be.x=Be.y=!0,()=>{Be.x=Be.y=!1})}function fu(t,e){const i=uu(t),n=new AbortController,s={passive:!0,...e,signal:n.signal};return[i,s,()=>n.abort()]}function sy(t){return!(t.pointerType==="touch"||hu())}function ry(t,e,i={}){const[n,s,r]=fu(t,i);return n.forEach(o=>{let a=!1,l=!1,u;const c=()=>{o.removeEventListener("pointerleave",g)},d=y=>{u&&(u(y),u=void 0),c()},h=y=>{a=!1,window.removeEventListener("pointerup",h),window.removeEventListener("pointercancel",h),l&&(l=!1,d(y))},m=()=>{a=!0,window.addEventListener("pointerup",h,s),window.addEventListener("pointercancel",h,s)},g=y=>{if(y.pointerType!=="touch"){if(a){l=!0;return}d(y)}},p=y=>{if(!sy(y))return;l=!1;const v=e(o,y);typeof v=="function"&&(u=v,o.addEventListener("pointerleave",g,s))};o.addEventListener("pointerenter",p,s),o.addEventListener("pointerdown",m,s)}),r}const pu=(t,e)=>e?t===e?!0:pu(t,e.parentElement):!1,Qr=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,oy=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function ay(t){return oy.has(t.tagName)||t.isContentEditable===!0}const ly=new Set(["INPUT","SELECT","TEXTAREA"]);function cy(t){return ly.has(t.tagName)||t.isContentEditable===!0}const hn=new WeakSet;function Qo(t){return e=>{e.key==="Enter"&&t(e)}}function ds(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const uy=(t,e)=>{const i=t.currentTarget;if(!i)return;const n=Qo(()=>{if(hn.has(i))return;ds(i,"down");const s=Qo(()=>{ds(i,"up")}),r=()=>ds(i,"cancel");i.addEventListener("keyup",s,e),i.addEventListener("blur",r,e)});i.addEventListener("keydown",n,e),i.addEventListener("blur",()=>i.removeEventListener("keydown",n),e)};function ea(t){return Qr(t)&&!hu()}const ta=new WeakSet;function dy(t,e,i={}){const[n,s,r]=fu(t,i),o=a=>{const l=a.currentTarget;if(!ea(a)||ta.has(a))return;hn.add(l),i.stopPropagation&&ta.add(a);const u=e(l,a),c=(m,g)=>{window.removeEventListener("pointerup",d),window.removeEventListener("pointercancel",h),hn.has(l)&&hn.delete(l),ea(m)&&typeof u=="function"&&u(m,{success:g})},d=m=>{c(m,l===window||l===document||i.useGlobalTarget||pu(l,m.target))},h=m=>{c(m,!1)};window.addEventListener("pointerup",d,s),window.addEventListener("pointercancel",h,s)};return n.forEach(a=>{(i.useGlobalTarget?window:a).addEventListener("pointerdown",o,s),dn(a)&&(a.addEventListener("focus",u=>uy(u,s)),!ay(a)&&!a.hasAttribute("tabindex")&&(a.tabIndex=0))}),r}function eo(t){return yc(t)&&"ownerSVGElement"in t}const fn=new WeakMap;let pn;const mu=(t,e,i)=>(n,s)=>s&&s[0]?s[0][t+"Size"]:eo(n)&&"getBBox"in n?n.getBBox()[e]:n[i],hy=mu("inline","width","offsetWidth"),fy=mu("block","height","offsetHeight");function py({target:t,borderBoxSize:e}){fn.get(t)?.forEach(i=>{i(t,{get width(){return hy(t,e)},get height(){return fy(t,e)}})})}function my(t){t.forEach(py)}function gy(){typeof ResizeObserver>"u"||(pn=new ResizeObserver(my))}function yy(t,e){pn||gy();const i=uu(t);return i.forEach(n=>{let s=fn.get(n);s||(s=new Set,fn.set(n,s)),s.add(e),pn?.observe(n)}),()=>{i.forEach(n=>{const s=fn.get(n);s?.delete(e),s?.size||pn?.unobserve(n)})}}const mn=new Set;let Jt;function xy(){Jt=()=>{const t={get width(){return window.innerWidth},get height(){return window.innerHeight}};mn.forEach(e=>e(t))},window.addEventListener("resize",Jt)}function vy(t){return mn.add(t),Jt||xy(),()=>{mn.delete(t),!mn.size&&typeof Jt=="function"&&(window.removeEventListener("resize",Jt),Jt=void 0)}}function ia(t,e){return typeof t=="function"?vy(t):yy(t,e)}function wy(t){return eo(t)&&t.tagName==="svg"}const by=[...au,te,Ne],_y=t=>by.find(ou(t)),na=()=>({translate:0,scale:1,origin:0,originPoint:0}),Qt=()=>({x:na(),y:na()}),sa=()=>({min:0,max:0}),ne=()=>({x:sa(),y:sa()}),Ty=new WeakMap;function Gn(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function Gi(t){return typeof t=="string"||Array.isArray(t)}const to=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],io=["initial",...to];function Wn(t){return Gn(t.animate)||io.some(e=>Gi(t[e]))}function gu(t){return!!(Wn(t)||t.variants)}function ky(t,e,i){for(const n in e){const s=e[n],r=i[n];if(ce(s))t.addValue(n,s);else if(ce(r))t.addValue(n,fi(s,{owner:t}));else if(r!==s)if(t.hasValue(n)){const o=t.getValue(n);o.liveStyle===!0?o.jump(s):o.hasAnimated||o.set(s)}else{const o=t.getStaticValue(n);t.addValue(n,fi(o!==void 0?o:s,{owner:t}))}}for(const n in i)e[n]===void 0&&t.removeValue(n);return e}const En={current:null},no={current:!1},Py=typeof window<"u";function yu(){if(no.current=!0,!!Py)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>En.current=t.matches;t.addEventListener("change",e),e()}else En.current=!1}const ra=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let Ln={};function xu(t){Ln=t}function Cy(){return Ln}class Sy{scrapeMotionValuesFromProps(e,i,n){return{}}constructor({parent:e,props:i,presenceContext:n,reducedMotionConfig:s,skipAnimations:r,blockInitialAnimation:o,visualState:a},l={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Hr,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const m=me.now();this.renderScheduledAt<m&&(this.renderScheduledAt=m,G.render(this.render,!1,!0))};const{latestValues:u,renderState:c}=a;this.latestValues=u,this.baseTarget={...u},this.initialValues=i.initial?{...u}:{},this.renderState=c,this.parent=e,this.props=i,this.presenceContext=n,this.depth=e?e.depth+1:0,this.reducedMotionConfig=s,this.skipAnimationsConfig=r,this.options=l,this.blockInitialAnimation=!!o,this.isControllingVariants=Wn(i),this.isVariantNode=gu(i),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:d,...h}=this.scrapeMotionValuesFromProps(i,{},this);for(const m in h){const g=h[m];u[m]!==void 0&&ce(g)&&g.set(u[m])}}mount(e){if(this.hasBeenMounted)for(const i in this.initialValues)this.values.get(i)?.jump(this.initialValues[i]),this.latestValues[i]=this.initialValues[i];this.current=e,Ty.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((i,n)=>this.bindToMotionValue(n,i)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(no.current||yu(),this.shouldReduceMotion=En.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,this.parent?.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){this.projection&&this.projection.unmount(),xt(this.notifyUpdate),xt(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const i=this.features[e];i&&(i.unmount(),i.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,i){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),i.accelerate&&Jc.has(e)&&this.current instanceof HTMLElement){const{factory:o,keyframes:a,times:l,ease:u,duration:c}=i.accelerate,d=new qc({element:this.current,name:e,keyframes:a,times:l,ease:u,duration:Re(c)}),h=o(d);this.valueSubscriptions.set(e,()=>{h(),d.cancel()});return}const n=gi.has(e);n&&this.onBindTransform&&this.onBindTransform();const s=i.on("change",o=>{this.latestValues[e]=o,this.props.onUpdate&&G.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let r;typeof window<"u"&&window.MotionCheckAppearSync&&(r=window.MotionCheckAppearSync(this,e,i)),this.valueSubscriptions.set(e,()=>{s(),r&&r(),i.owner&&i.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in Ln){const i=Ln[e];if(!i)continue;const{isEnabled:n,Feature:s}=i;if(!this.features[e]&&s&&n(this.props)&&(this.features[e]=new s(this)),this.features[e]){const r=this.features[e];r.isMounted?r.update():(r.mount(),r.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):ne()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,i){this.latestValues[e]=i}update(e,i){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=i;for(let n=0;n<ra.length;n++){const s=ra[n];this.propEventSubscriptions[s]&&(this.propEventSubscriptions[s](),delete this.propEventSubscriptions[s]);const r="on"+s,o=e[r];o&&(this.propEventSubscriptions[s]=this.on(s,o))}this.prevMotionValues=ky(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const i=this.getClosestVariantNode();if(i)return i.variantChildren&&i.variantChildren.add(e),()=>i.variantChildren.delete(e)}addValue(e,i){const n=this.values.get(e);i!==n&&(n&&this.removeValue(e),this.bindToMotionValue(e,i),this.values.set(e,i),this.latestValues[e]=i.get())}removeValue(e){this.values.delete(e);const i=this.valueSubscriptions.get(e);i&&(i(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,i){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return n===void 0&&i!==void 0&&(n=fi(i===null?void 0:i,{owner:this}),this.addValue(e,n)),n}readValue(e,i){let n=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return n!=null&&(typeof n=="string"&&(gc(n)||xc(n))?n=parseFloat(n):!_y(n)&&Ne.test(i)&&(n=cu(e,i)),this.setBaseTarget(e,ce(n)?n.get():n)),ce(n)?n.get():n}setBaseTarget(e,i){this.baseTarget[e]=i}getBaseTarget(e){const{initial:i}=this.props;let n;if(typeof i=="string"||typeof i=="object"){const r=Kr(this.props,i,this.presenceContext?.custom);r&&(n=r[e])}if(i&&n!==void 0)return n;const s=this.getBaseTargetFromProps(this.props,e);return s!==void 0&&!ce(s)?s:this.initialValues[e]!==void 0&&n===void 0?void 0:this.baseTarget[e]}on(e,i){return this.events[e]||(this.events[e]=new Vr),this.events[e].add(i)}notify(e,...i){this.events[e]&&this.events[e].notify(...i)}scheduleRenderMicrotask(){Jr.render(this.render)}}class vu extends Sy{constructor(){super(...arguments),this.KeyframeResolver=iy}sortInstanceNodePosition(e,i){return e.compareDocumentPosition(i)&2?1:-1}getBaseTargetFromProps(e,i){const n=e.style;return n?n[i]:void 0}removeValueFromRenderState(e,{vars:i,style:n}){delete i[e],delete n[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;ce(e)&&(this.childSubscription=e.on("change",i=>{this.current&&(this.current.textContent=`${i}`)}))}}class wt{constructor(e){this.isMounted=!1,this.node=e}update(){}}function wu({top:t,left:e,right:i,bottom:n}){return{x:{min:e,max:i},y:{min:t,max:n}}}function jy({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function Ay(t,e){if(!e)return t;const i=e({x:t.left,y:t.top}),n=e({x:t.right,y:t.bottom});return{top:i.y,left:i.x,bottom:n.y,right:n.x}}function hs(t){return t===void 0||t===1}function Qs({scale:t,scaleX:e,scaleY:i}){return!hs(t)||!hs(e)||!hs(i)}function At(t){return Qs(t)||bu(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function bu(t){return oa(t.x)||oa(t.y)}function oa(t){return t&&t!=="0%"}function On(t,e,i){const n=t-i,s=e*n;return i+s}function aa(t,e,i,n,s){return s!==void 0&&(t=On(t,s,n)),On(t,i,n)+e}function er(t,e=0,i=1,n,s){t.min=aa(t.min,e,i,n,s),t.max=aa(t.max,e,i,n,s)}function _u(t,{x:e,y:i}){er(t.x,e.translate,e.scale,e.originPoint),er(t.y,i.translate,i.scale,i.originPoint)}const la=.999999999999,ca=1.0000000000001;function Ry(t,e,i,n=!1){const s=i.length;if(!s)return;e.x=e.y=1;let r,o;for(let a=0;a<s;a++){r=i[a],o=r.projectionDelta;const{visualElement:l}=r.options;l&&l.props.style&&l.props.style.display==="contents"||(n&&r.options.layoutScroll&&r.scroll&&r!==r.root&&(He(t.x,-r.scroll.offset.x),He(t.y,-r.scroll.offset.y)),o&&(e.x*=o.x.scale,e.y*=o.y.scale,_u(t,o)),n&&At(r.latestValues)&&gn(t,r.latestValues,r.layout?.layoutBox))}e.x<ca&&e.x>la&&(e.x=1),e.y<ca&&e.y>la&&(e.y=1)}function He(t,e){t.min+=e,t.max+=e}function ua(t,e,i,n,s=.5){const r=W(t.min,t.max,s);er(t,e,i,r,n)}function da(t,e){return typeof t=="string"?parseFloat(t)/100*(e.max-e.min):t}function gn(t,e,i){const n=i??t;ua(t.x,da(e.x,n.x),e.scaleX,e.scale,e.originX),ua(t.y,da(e.y,n.y),e.scaleY,e.scale,e.originY)}function Tu(t,e){return wu(Ay(t.getBoundingClientRect(),e))}function My(t,e,i){const n=Tu(t,i),{scroll:s}=e;return s&&(He(n.x,s.offset.x),He(n.y,s.offset.y)),n}const Dy={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Ey=mi.length;function Ly(t,e,i){let n="",s=!0;for(let r=0;r<Ey;r++){const o=mi[r],a=t[o];if(a===void 0)continue;let l=!0;if(typeof a=="number")l=a===(o.startsWith("scale")?1:0);else{const u=parseFloat(a);l=o.startsWith("scale")?u===1:u===0}if(!l||i){const u=du(a,Zr[o]);if(!l){s=!1;const c=Dy[o]||o;n+=`${c}(${u}) `}i&&(e[o]=u)}}return n=n.trim(),i?n=i(e,s?"":n):s&&(n="none"),n}function so(t,e,i){const{style:n,vars:s,transformOrigin:r}=t;let o=!1,a=!1;for(const l in e){const u=e[l];if(gi.has(l)){o=!0;continue}else if(Ec(l)){s[l]=u;continue}else{const c=du(u,Zr[l]);l.startsWith("origin")?(a=!0,r[l]=c):n[l]=c}}if(e.transform||(o||i?n.transform=Ly(e,t.transform,i):n.transform&&(n.transform="none")),a){const{originX:l="50%",originY:u="50%",originZ:c=0}=r;n.transformOrigin=`${l} ${u} ${c}`}}function ku(t,{style:e,vars:i},n,s){const r=t.style;let o;for(o in e)r[o]=e[o];s?.applyProjectionStyles(r,n);for(o in i)r.setProperty(o,i[o])}function ha(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const _i={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(R.test(t))t=parseFloat(t);else return t;const i=ha(t,e.target.x),n=ha(t,e.target.y);return`${i}% ${n}%`}},Oy={correct:(t,{treeScale:e,projectionDelta:i})=>{const n=t,s=Ne.parse(t);if(s.length>5)return n;const r=Ne.createTransformer(t),o=typeof s[0]!="number"?1:0,a=i.x.scale*e.x,l=i.y.scale*e.y;s[0+o]/=a,s[1+o]/=l;const u=W(a,l,.5);return typeof s[2+o]=="number"&&(s[2+o]/=u),typeof s[3+o]=="number"&&(s[3+o]/=u),r(s)}},tr={borderRadius:{..._i,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:_i,borderTopRightRadius:_i,borderBottomLeftRadius:_i,borderBottomRightRadius:_i,boxShadow:Oy};function Pu(t,{layout:e,layoutId:i}){return gi.has(t)||t.startsWith("origin")||(e||i!==void 0)&&(!!tr[t]||t==="opacity")}function ro(t,e,i){const n=t.style,s=e?.style,r={};if(!n)return r;for(const o in n)(ce(n[o])||s&&ce(s[o])||Pu(o,t)||i?.getValue(o)?.liveStyle!==void 0)&&(r[o]=n[o]);return r}function Iy(t){return window.getComputedStyle(t)}class Vy extends vu{constructor(){super(...arguments),this.type="html",this.renderInstance=ku}readValueFromInstance(e,i){if(gi.has(i))return this.projection?.isProjecting?Ns(i):s0(e,i);{const n=Iy(e),s=(Ec(i)?n.getPropertyValue(i):n[i])||0;return typeof s=="string"?s.trim():s}}measureInstanceViewportBox(e,{transformPagePoint:i}){return Tu(e,i)}build(e,i,n){so(e,i,n.transformTemplate)}scrapeMotionValuesFromProps(e,i,n){return ro(e,i,n)}}const zy={offset:"stroke-dashoffset",array:"stroke-dasharray"},Fy={offset:"strokeDashoffset",array:"strokeDasharray"};function By(t,e,i=1,n=0,s=!0){t.pathLength=1;const r=s?zy:Fy;t[r.offset]=`${-n}`,t[r.array]=`${e} ${i}`}const Uy=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function Cu(t,{attrX:e,attrY:i,attrScale:n,pathLength:s,pathSpacing:r=1,pathOffset:o=0,...a},l,u,c){if(so(t,a,u),l){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:d,style:h}=t;d.transform&&(h.transform=d.transform,delete d.transform),(h.transform||d.transformOrigin)&&(h.transformOrigin=d.transformOrigin??"50% 50%",delete d.transformOrigin),h.transform&&(h.transformBox=c?.transformBox??"fill-box",delete d.transformBox);for(const m of Uy)d[m]!==void 0&&(h[m]=d[m],delete d[m]);e!==void 0&&(d.x=e),i!==void 0&&(d.y=i),n!==void 0&&(d.scale=n),s!==void 0&&By(d,s,r,o,!1)}const Su=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),ju=t=>typeof t=="string"&&t.toLowerCase()==="svg";function Ny(t,e,i,n){ku(t,e,void 0,n);for(const s in e.attrs)t.setAttribute(Su.has(s)?s:qr(s),e.attrs[s])}function Au(t,e,i){const n=ro(t,e,i);for(const s in t)if(ce(t[s])||ce(e[s])){const r=mi.indexOf(s)!==-1?"attr"+s.charAt(0).toUpperCase()+s.substring(1):s;n[r]=t[s]}return n}class $y extends vu{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=ne}getBaseTargetFromProps(e,i){return e[i]}readValueFromInstance(e,i){if(gi.has(i)){const n=lu(i);return n&&n.default||0}return i=Su.has(i)?i:qr(i),e.getAttribute(i)}scrapeMotionValuesFromProps(e,i,n){return Au(e,i,n)}build(e,i,n){Cu(e,i,this.isSVGTag,n.transformTemplate,n.style)}renderInstance(e,i,n,s){Ny(e,i,n,s)}mount(e){this.isSVGTag=ju(e.tagName),super.mount(e)}}const Gy=io.length;function Ru(t){if(!t)return;if(!t.isControllingVariants){const i=t.parent?Ru(t.parent)||{}:{};return t.props.initial!==void 0&&(i.initial=t.props.initial),i}const e={};for(let i=0;i<Gy;i++){const n=io[i],s=t.props[n];(Gi(s)||s===!1)&&(e[n]=s)}return e}function Mu(t,e){if(!Array.isArray(e))return!1;const i=e.length;if(i!==t.length)return!1;for(let n=0;n<i;n++)if(e[n]!==t[n])return!1;return!0}const Wy=[...to].reverse(),Hy=to.length;function Xy(t){return e=>Promise.all(e.map(({animation:i,options:n})=>W0(t,i,n)))}function Yy(t){let e=Xy(t),i=fa(),n=!0,s=!1;const r=u=>(c,d)=>{const h=Bt(t,d,u==="exit"?t.presenceContext?.custom:void 0);if(h){const{transition:m,transitionEnd:g,...p}=h;c={...c,...p,...g}}return c};function o(u){e=u(t)}function a(u){const{props:c}=t,d=Ru(t.parent)||{},h=[],m=new Set;let g={},p=1/0;for(let v=0;v<Hy;v++){const w=Wy[v],x=i[w],b=c[w]!==void 0?c[w]:d[w],_=Gi(b),A=w===u?x.isActive:null;A===!1&&(p=v);let P=b===d[w]&&b!==c[w]&&_;if(P&&(n||s)&&t.manuallyAnimateOnMount&&(P=!1),x.protectedKeys={...g},!x.isActive&&A===null||!b&&!x.prevProp||Gn(b)||typeof b=="boolean")continue;if(w==="exit"&&x.isActive&&A!==!0){x.prevResolvedValues&&(g={...g,...x.prevResolvedValues});continue}const T=Ky(x.prevProp,b);let C=T||w===u&&x.isActive&&!P&&_||v>p&&_,j=!1;const M=Array.isArray(b)?b:[b];let E=M.reduce(r(w),{});A===!1&&(E={});const{prevResolvedValues:L={}}=x,O={...L,...E},I=F=>{C=!0,m.has(F)&&(j=!0,m.delete(F)),x.needsAnimating[F]=!0;const H=t.getValue(F);H&&(H.liveStyle=!1)};for(const F in O){const H=E[F],D=L[F];if(g.hasOwnProperty(F))continue;let V=!1;Ys(H)&&Ys(D)?V=!Mu(H,D):V=H!==D,V?H!=null?I(F):m.add(F):H!==void 0&&m.has(F)?I(F):x.protectedKeys[F]=!0}x.prevProp=b,x.prevResolvedValues=E,x.isActive&&(g={...g,...E}),(n||s)&&t.blockInitialAnimation&&(C=!1);const z=P&&T;C&&(!z||j)&&h.push(...M.map(F=>{const H={type:w};if(typeof F=="string"&&(n||s)&&!z&&t.manuallyAnimateOnMount&&t.parent){const{parent:D}=t,V=Bt(D,F);if(D.enteringChildren&&V){const{delayChildren:Q}=V.transition||{};H.delay=Qc(D.enteringChildren,t,Q)}}return{animation:F,options:H}}))}if(m.size){const v={};if(typeof c.initial!="boolean"){const w=Bt(t,Array.isArray(c.initial)?c.initial[0]:c.initial);w&&w.transition&&(v.transition=w.transition)}m.forEach(w=>{const x=t.getBaseTarget(w),b=t.getValue(w);b&&(b.liveStyle=!0),v[w]=x??null}),h.push({animation:v})}let y=!!h.length;return n&&(c.initial===!1||c.initial===c.animate)&&!t.manuallyAnimateOnMount&&(y=!1),n=!1,s=!1,y?e(h):Promise.resolve()}function l(u,c){if(i[u].isActive===c)return Promise.resolve();t.variantChildren?.forEach(h=>h.animationState?.setActive(u,c)),i[u].isActive=c;const d=a(u);for(const h in i)i[h].protectedKeys={};return d}return{animateChanges:a,setActive:l,setAnimateFunction:o,getState:()=>i,reset:()=>{i=fa(),s=!0}}}function Ky(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!Mu(e,t):!1}function Pt(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function fa(){return{animate:Pt(!0),whileInView:Pt(),whileHover:Pt(),whileTap:Pt(),whileDrag:Pt(),whileFocus:Pt(),exit:Pt()}}function ir(t,e){t.min=e.min,t.max=e.max}function Fe(t,e){ir(t.x,e.x),ir(t.y,e.y)}function pa(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}const Du=1e-4,qy=1-Du,Zy=1+Du,Eu=.01,Jy=0-Eu,Qy=0+Eu;function ge(t){return t.max-t.min}function ex(t,e,i){return Math.abs(t-e)<=i}function ma(t,e,i,n=.5){t.origin=n,t.originPoint=W(e.min,e.max,t.origin),t.scale=ge(i)/ge(e),t.translate=W(i.min,i.max,t.origin)-t.originPoint,(t.scale>=qy&&t.scale<=Zy||isNaN(t.scale))&&(t.scale=1),(t.translate>=Jy&&t.translate<=Qy||isNaN(t.translate))&&(t.translate=0)}function Di(t,e,i,n){ma(t.x,e.x,i.x,n?n.originX:void 0),ma(t.y,e.y,i.y,n?n.originY:void 0)}function ga(t,e,i,n=0){const s=n?W(i.min,i.max,n):i.min;t.min=s+e.min,t.max=t.min+ge(e)}function tx(t,e,i,n){ga(t.x,e.x,i.x,n?.x),ga(t.y,e.y,i.y,n?.y)}function ya(t,e,i,n=0){const s=n?W(i.min,i.max,n):i.min;t.min=e.min-s,t.max=t.min+ge(e)}function In(t,e,i,n){ya(t.x,e.x,i.x,n?.x),ya(t.y,e.y,i.y,n?.y)}function xa(t,e,i,n,s){return t-=e,t=On(t,1/i,n),s!==void 0&&(t=On(t,1/s,n)),t}function ix(t,e=0,i=1,n=.5,s,r=t,o=t){if(Ke.test(e)&&(e=parseFloat(e),e=W(o.min,o.max,e/100)-o.min),typeof e!="number")return;let a=W(r.min,r.max,n);t===r&&(a-=e),t.min=xa(t.min,e,i,a,s),t.max=xa(t.max,e,i,a,s)}function va(t,e,[i,n,s],r,o){ix(t,e[i],e[n],e[s],e.scale,r,o)}const nx=["x","scaleX","originX"],sx=["y","scaleY","originY"];function wa(t,e,i,n){va(t.x,e,nx,i?i.x:void 0,n?n.x:void 0),va(t.y,e,sx,i?i.y:void 0,n?n.y:void 0)}function ba(t){return t.translate===0&&t.scale===1}function Lu(t){return ba(t.x)&&ba(t.y)}function _a(t,e){return t.min===e.min&&t.max===e.max}function rx(t,e){return _a(t.x,e.x)&&_a(t.y,e.y)}function Ta(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function Ou(t,e){return Ta(t.x,e.x)&&Ta(t.y,e.y)}function ka(t){return ge(t.x)/ge(t.y)}function Pa(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}function Ge(t){return[t("x"),t("y")]}function ox(t,e,i){let n="";const s=t.x.translate/e.x,r=t.y.translate/e.y,o=i?.z||0;if((s||r||o)&&(n=`translate3d(${s}px, ${r}px, ${o}px) `),(e.x!==1||e.y!==1)&&(n+=`scale(${1/e.x}, ${1/e.y}) `),i){const{transformPerspective:u,rotate:c,rotateX:d,rotateY:h,skewX:m,skewY:g}=i;u&&(n=`perspective(${u}px) ${n}`),c&&(n+=`rotate(${c}deg) `),d&&(n+=`rotateX(${d}deg) `),h&&(n+=`rotateY(${h}deg) `),m&&(n+=`skewX(${m}deg) `),g&&(n+=`skewY(${g}deg) `)}const a=t.x.scale*e.x,l=t.y.scale*e.y;return(a!==1||l!==1)&&(n+=`scale(${a}, ${l})`),n||"none"}const Iu=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],ax=Iu.length,Ca=t=>typeof t=="string"?parseFloat(t):t,Sa=t=>typeof t=="number"||R.test(t);function lx(t,e,i,n,s,r){s?(t.opacity=W(0,i.opacity??1,cx(n)),t.opacityExit=W(e.opacity??1,0,ux(n))):r&&(t.opacity=W(e.opacity??1,i.opacity??1,n));for(let o=0;o<ax;o++){const a=Iu[o];let l=ja(e,a),u=ja(i,a);if(l===void 0&&u===void 0)continue;l||(l=0),u||(u=0),l===0||u===0||Sa(l)===Sa(u)?(t[a]=Math.max(W(Ca(l),Ca(u),n),0),(Ke.test(u)||Ke.test(l))&&(t[a]+="%")):t[a]=u}(e.rotate||i.rotate)&&(t.rotate=W(e.rotate||0,i.rotate||0,n))}function ja(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const cx=Vu(0,.5,Sc),ux=Vu(.5,.95,ze);function Vu(t,e,i){return n=>n<t?0:n>e?1:i(Ni(t,e,n))}function dx(t,e,i){const n=ce(t)?t:fi(t);return n.start(Yr("",n,e,i)),n.animation}function Wi(t,e,i,n={passive:!0}){return t.addEventListener(e,i,n),()=>t.removeEventListener(e,i)}const hx=(t,e)=>t.depth-e.depth;class fx{constructor(){this.children=[],this.isDirty=!1}add(e){Or(this.children,e),this.isDirty=!0}remove(e){jn(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(hx),this.isDirty=!1,this.children.forEach(e)}}function px(t,e){const i=me.now(),n=({timestamp:s})=>{const r=s-i;r>=e&&(xt(n),t(r-e))};return G.setup(n,!0),()=>xt(n)}function yn(t){return ce(t)?t.get():t}class mx{constructor(){this.members=[]}add(e){Or(this.members,e);for(let i=this.members.length-1;i>=0;i--){const n=this.members[i];if(n===e||n===this.lead||n===this.prevLead)continue;const s=n.instance;(!s||s.isConnected===!1)&&!n.snapshot&&(jn(this.members,n),n.unmount())}e.scheduleRender()}remove(e){if(jn(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const i=this.members[this.members.length-1];i&&this.promote(i)}}relegate(e){for(let i=this.members.indexOf(e)-1;i>=0;i--){const n=this.members[i];if(n.isPresent!==!1&&n.instance?.isConnected!==!1)return this.promote(n),!0}return!1}promote(e,i){const n=this.lead;if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)){n.updateSnapshot(),e.scheduleRender();const{layoutDependency:s}=n.options,{layoutDependency:r}=e.options;(s===void 0||s!==r)&&(e.resumeFrom=n,i&&(n.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root?.isUpdating&&(e.isLayoutDirty=!0)),e.options.crossfade===!1&&n.hide()}}exitAnimationComplete(){this.members.forEach(e=>{e.options.onExitComplete?.(),e.resumingFrom?.options.onExitComplete?.()})}scheduleRender(){this.members.forEach(e=>e.instance&&e.scheduleRender(!1))}removeLeadSnapshot(){this.lead?.snapshot&&(this.lead.snapshot=void 0)}}const xn={hasAnimatedSinceResize:!0,hasEverUpdated:!1},fs=["","X","Y","Z"],gx=1e3;let yx=0;function ps(t,e,i,n){const{latestValues:s}=e;s[t]&&(i[t]=s[t],e.setStaticValue(t,0),n&&(n[t]=0))}function zu(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const i=su(e);if(window.MotionHasOptimisedAnimation(i,"transform")){const{layout:s,layoutId:r}=t.options;window.MotionCancelOptimisedAnimation(i,"transform",G,!(s||r))}const{parent:n}=t;n&&!n.hasCheckedOptimisedAppear&&zu(n)}function Fu({attachResizeListener:t,defaultParent:e,measureScroll:i,checkIsScrollRoot:n,resetTransform:s}){return class{constructor(o={},a=e?.()){this.id=yx++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(wx),this.nodes.forEach(Cx),this.nodes.forEach(Sx),this.nodes.forEach(bx)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new fx)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new Vr),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o){if(this.instance)return;this.isSVG=eo(o)&&!wy(o),this.instance=o;const{layoutId:a,layout:l,visualElement:u}=this.options;if(u&&!u.current&&u.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(l||a)&&(this.isLayoutDirty=!0),t){let c,d=0;const h=()=>this.root.updateBlockedByResize=!1;G.read(()=>{d=window.innerWidth}),t(o,()=>{const m=window.innerWidth;m!==d&&(d=m,this.root.updateBlockedByResize=!0,c&&c(),c=px(h,250),xn.hasAnimatedSinceResize&&(xn.hasAnimatedSinceResize=!1,this.nodes.forEach(Ma)))})}a&&this.root.registerSharedNode(a,this),this.options.animate!==!1&&u&&(a||l)&&this.addEventListener("didUpdate",({delta:c,hasLayoutChanged:d,hasRelativeLayoutChanged:h,layout:m})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const g=this.options.transition||u.getDefaultTransition()||Dx,{onLayoutAnimationStart:p,onLayoutAnimationComplete:y}=u.getProps(),v=!this.targetLayout||!Ou(this.targetLayout,m),w=!d&&h;if(this.options.layoutRoot||this.resumeFrom||w||d&&(v||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const x={...Xr(g,"layout"),onPlay:p,onComplete:y};(u.shouldReduceMotion||this.options.layoutRoot)&&(x.delay=0,x.type=!1),this.startAnimation(x),this.setAnimationOrigin(c,w)}else d||Ma(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=m})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),xt(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(jx),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&zu(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let c=0;c<this.path.length;c++){const d=this.path[c];d.shouldResetTransform=!0,(typeof d.latestValues.x=="string"||typeof d.latestValues.y=="string")&&(d.isLayoutDirty=!0),d.updateScroll("snapshot"),d.options.layoutRoot&&d.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const l=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),l&&this.nodes.forEach(Tx),this.nodes.forEach(Aa);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Ra);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(kx),this.nodes.forEach(Px),this.nodes.forEach(xx),this.nodes.forEach(vx)):this.nodes.forEach(Ra),this.clearAllSnapshots();const a=me.now();le.delta=Ze(0,1e3/60,a-le.timestamp),le.timestamp=a,le.isProcessing=!0,rs.update.process(le),rs.preRender.process(le),rs.render.process(le),le.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Jr.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(_x),this.sharedNodes.forEach(Ax)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,G.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){G.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!ge(this.snapshot.measuredBox.x)&&!ge(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=ne()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a&&this.instance){const l=n(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:i(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!s)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!Lu(this.projectionDelta),l=this.getTransformTemplate(),u=l?l(this.latestValues,""):void 0,c=u!==this.prevTransformTemplateValue;o&&this.instance&&(a||At(this.latestValues)||c)&&(s(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),Ex(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:o}=this.options;if(!o)return ne();const a=o.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(Lx))){const{scroll:u}=this.root;u&&(He(a.x,u.offset.x),He(a.y,u.offset.y))}return a}removeElementScroll(o){const a=ne();if(Fe(a,o),this.scroll?.wasRoot)return a;for(let l=0;l<this.path.length;l++){const u=this.path[l],{scroll:c,options:d}=u;u!==this.root&&c&&d.layoutScroll&&(c.wasRoot&&Fe(a,o),He(a.x,c.offset.x),He(a.y,c.offset.y))}return a}applyTransform(o,a=!1,l){const u=l||ne();Fe(u,o);for(let c=0;c<this.path.length;c++){const d=this.path[c];!a&&d.options.layoutScroll&&d.scroll&&d!==d.root&&(He(u.x,-d.scroll.offset.x),He(u.y,-d.scroll.offset.y)),At(d.latestValues)&&gn(u,d.latestValues,d.layout?.layoutBox)}return At(this.latestValues)&&gn(u,this.latestValues,this.layout?.layoutBox),u}removeTransform(o){const a=ne();Fe(a,o);for(let l=0;l<this.path.length;l++){const u=this.path[l];if(!At(u.latestValues))continue;let c;u.instance&&(Qs(u.latestValues)&&u.updateSnapshot(),c=ne(),Fe(c,u.measurePageBox())),wa(a,u.latestValues,u.snapshot?.layoutBox,c)}return At(this.latestValues)&&wa(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==le.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){const a=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=a.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=a.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=a.isSharedProjectionDirty);const l=!!this.resumingFrom||this!==a;if(!(o||l&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:c,layoutId:d}=this.options;if(!this.layout||!(c||d))return;this.resolvedRelativeTargetAt=le.timestamp;const h=this.getClosestProjectingParent();h&&this.linkedParentVersion!==h.layoutVersion&&!h.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&h&&h.layout?this.createRelativeTarget(h,this.layout.layoutBox,h.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=ne(),this.targetWithTransforms=ne()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),tx(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):Fe(this.target,this.layout.layoutBox),_u(this.target,this.targetDelta)):Fe(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&h&&!!h.resumingFrom==!!this.resumingFrom&&!h.options.layoutScroll&&h.target&&this.animationProgress!==1?this.createRelativeTarget(h,this.target,h.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||Qs(this.parent.latestValues)||bu(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(o,a,l){this.relativeParent=o,this.linkedParentVersion=o.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ne(),this.relativeTargetOrigin=ne(),In(this.relativeTargetOrigin,a,l,this.options.layoutAnchor||void 0),Fe(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){const o=this.getLead(),a=!!this.resumingFrom||this!==o;let l=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(l=!1),a&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(l=!1),this.resolvedRelativeTargetAt===le.timestamp&&(l=!1),l)return;const{layout:u,layoutId:c}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||c))return;Fe(this.layoutCorrected,this.layout.layoutBox);const d=this.treeScale.x,h=this.treeScale.y;Ry(this.layoutCorrected,this.treeScale,this.path,a),o.layout&&!o.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(o.target=o.layout.layoutBox,o.targetWithTransforms=ne());const{target:m}=o;if(!m){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(pa(this.prevProjectionDelta.x,this.projectionDelta.x),pa(this.prevProjectionDelta.y,this.projectionDelta.y)),Di(this.projectionDelta,this.layoutCorrected,m,this.latestValues),(this.treeScale.x!==d||this.treeScale.y!==h||!Pa(this.projectionDelta.x,this.prevProjectionDelta.x)||!Pa(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",m))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){if(this.options.visualElement?.scheduleRender(),o){const a=this.getStack();a&&a.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Qt(),this.projectionDelta=Qt(),this.projectionDeltaWithTransform=Qt()}setAnimationOrigin(o,a=!1){const l=this.snapshot,u=l?l.latestValues:{},c={...this.latestValues},d=Qt();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const h=ne(),m=l?l.source:void 0,g=this.layout?this.layout.source:void 0,p=m!==g,y=this.getStack(),v=!y||y.members.length<=1,w=!!(p&&!v&&this.options.crossfade===!0&&!this.path.some(Mx));this.animationProgress=0;let x;this.mixTargetDelta=b=>{const _=b/1e3;Da(d.x,o.x,_),Da(d.y,o.y,_),this.setTargetDelta(d),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(In(h,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),Rx(this.relativeTarget,this.relativeTargetOrigin,h,_),x&&rx(this.relativeTarget,x)&&(this.isProjectionDirty=!1),x||(x=ne()),Fe(x,this.relativeTarget)),p&&(this.animationValues=c,lx(c,u,this.latestValues,_,w,v)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=_},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(xt(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=G.update(()=>{xn.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=fi(0)),this.motionValue.jump(0,!1),this.currentAnimation=dx(this.motionValue,[0,1e3],{...o,velocity:0,isSync:!0,onUpdate:a=>{this.mixTargetDelta(a),o.onUpdate&&o.onUpdate(a)},onStop:()=>{},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(gx),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:u,latestValues:c}=o;if(!(!a||!l||!u)){if(this!==o&&this.layout&&u&&Bu(this.options.animationType,this.layout.layoutBox,u.layoutBox)){l=this.target||ne();const d=ge(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+d;const h=ge(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+h}Fe(a,l),gn(a,c),Di(this.projectionDeltaWithTransform,this.layoutCorrected,a,c)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new mx),this.sharedNodes.get(o).add(a);const u=a.options.initialPromotionConfig;a.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){const{layoutId:o}=this.options;return o?this.getStack()?.lead||this:this}getPrevLead(){const{layoutId:o}=this.options;return o?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const u={};l.z&&ps("z",o,u,this.animationValues);for(let c=0;c<fs.length;c++)ps(`rotate${fs[c]}`,o,u,this.animationValues),ps(`skew${fs[c]}`,o,u,this.animationValues);o.render();for(const c in u)o.setStaticValue(c,u[c]),this.animationValues&&(this.animationValues[c]=u[c]);o.scheduleRender()}applyProjectionStyles(o,a){if(!this.instance||this.isSVG)return;if(!this.isVisible){o.visibility="hidden";return}const l=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,o.visibility="",o.opacity="",o.pointerEvents=yn(a?.pointerEvents)||"",o.transform=l?l(this.latestValues,""):"none";return}const u=this.getLead();if(!this.projectionDelta||!this.layout||!u.target){this.options.layoutId&&(o.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,o.pointerEvents=yn(a?.pointerEvents)||""),this.hasProjected&&!At(this.latestValues)&&(o.transform=l?l({},""):"none",this.hasProjected=!1);return}o.visibility="";const c=u.animationValues||u.latestValues;this.applyTransformsToTarget();let d=ox(this.projectionDeltaWithTransform,this.treeScale,c);l&&(d=l(c,d)),o.transform=d;const{x:h,y:m}=this.projectionDelta;o.transformOrigin=`${h.origin*100}% ${m.origin*100}% 0`,u.animationValues?o.opacity=u===this?c.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:c.opacityExit:o.opacity=u===this?c.opacity!==void 0?c.opacity:"":c.opacityExit!==void 0?c.opacityExit:0;for(const g in tr){if(c[g]===void 0)continue;const{correct:p,applyTo:y,isCSSVariable:v}=tr[g],w=d==="none"?c[g]:p(c[g],u);if(y){const x=y.length;for(let b=0;b<x;b++)o[y[b]]=w}else v?this.options.visualElement.renderState.vars[g]=w:o[g]=w}this.options.layoutId&&(o.pointerEvents=u===this?yn(a?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>o.currentAnimation?.stop()),this.root.nodes.forEach(Aa),this.root.sharedNodes.clear()}}}function xx(t){t.updateLayout()}function vx(t){const e=t.resumeFrom?.snapshot||t.snapshot;if(t.isLead()&&t.layout&&e&&t.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:n}=t.layout,{animationType:s}=t.options,r=e.source!==t.layout.source;if(s==="size")Ge(c=>{const d=r?e.measuredBox[c]:e.layoutBox[c],h=ge(d);d.min=i[c].min,d.max=d.min+h});else if(s==="x"||s==="y"){const c=s==="x"?"y":"x";ir(r?e.measuredBox[c]:e.layoutBox[c],i[c])}else Bu(s,e.layoutBox,i)&&Ge(c=>{const d=r?e.measuredBox[c]:e.layoutBox[c],h=ge(i[c]);d.max=d.min+h,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[c].max=t.relativeTarget[c].min+h)});const o=Qt();Di(o,i,e.layoutBox);const a=Qt();r?Di(a,t.applyTransform(n,!0),e.measuredBox):Di(a,i,e.layoutBox);const l=!Lu(o);let u=!1;if(!t.resumeFrom){const c=t.getClosestProjectingParent();if(c&&!c.resumeFrom){const{snapshot:d,layout:h}=c;if(d&&h){const m=t.options.layoutAnchor||void 0,g=ne();In(g,e.layoutBox,d.layoutBox,m);const p=ne();In(p,i,h.layoutBox,m),Ou(g,p)||(u=!0),c.options.layoutRoot&&(t.relativeTarget=p,t.relativeTargetOrigin=g,t.relativeParent=c)}}}t.notifyListeners("didUpdate",{layout:i,snapshot:e,delta:a,layoutDelta:o,hasLayoutChanged:l,hasRelativeLayoutChanged:u})}else if(t.isLead()){const{onExitComplete:i}=t.options;i&&i()}t.options.transition=void 0}function wx(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function bx(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function _x(t){t.clearSnapshot()}function Aa(t){t.clearMeasurements()}function Tx(t){t.isLayoutDirty=!0,t.updateLayout()}function Ra(t){t.isLayoutDirty=!1}function kx(t){t.isAnimationBlocked&&t.layout&&!t.isLayoutDirty&&(t.snapshot=t.layout,t.isLayoutDirty=!0)}function Px(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function Ma(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function Cx(t){t.resolveTargetDelta()}function Sx(t){t.calcProjection()}function jx(t){t.resetSkewAndRotation()}function Ax(t){t.removeLeadSnapshot()}function Da(t,e,i){t.translate=W(e.translate,0,i),t.scale=W(e.scale,1,i),t.origin=e.origin,t.originPoint=e.originPoint}function Ea(t,e,i,n){t.min=W(e.min,i.min,n),t.max=W(e.max,i.max,n)}function Rx(t,e,i,n){Ea(t.x,e.x,i.x,n),Ea(t.y,e.y,i.y,n)}function Mx(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const Dx={duration:.45,ease:[.4,0,.1,1]},La=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),Oa=La("applewebkit/")&&!La("chrome/")?Math.round:ze;function Ia(t){t.min=Oa(t.min),t.max=Oa(t.max)}function Ex(t){Ia(t.x),Ia(t.y)}function Bu(t,e,i){return t==="position"||t==="preserve-aspect"&&!ex(ka(e),ka(i),.2)}function Lx(t){return t!==t.root&&t.scroll?.wasRoot}const Ox=Fu({attachResizeListener:(t,e)=>Wi(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body?.scrollLeft||0,y:document.documentElement.scrollTop||document.body?.scrollTop||0}),checkIsScrollRoot:()=>!0}),ms={current:void 0},Uu=Fu({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!ms.current){const t=new Ox({});t.mount(window),t.setOptions({layoutScroll:!0}),ms.current=t}return ms.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),oo=k.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});function Va(t,e){if(typeof t=="function")return t(e);t!=null&&(t.current=e)}function Ix(...t){return e=>{let i=!1;const n=t.map(s=>{const r=Va(s,e);return!i&&typeof r=="function"&&(i=!0),r});if(i)return()=>{for(let s=0;s<n.length;s++){const r=n[s];typeof r=="function"?r():Va(t[s],null)}}}}function Vx(...t){return k.useCallback(Ix(...t),t)}class zx extends k.Component{getSnapshotBeforeUpdate(e){const i=this.props.childRef.current;if(dn(i)&&e.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const n=i.offsetParent,s=dn(n)&&n.offsetWidth||0,r=dn(n)&&n.offsetHeight||0,o=getComputedStyle(i),a=this.props.sizeRef.current;a.height=parseFloat(o.height),a.width=parseFloat(o.width),a.top=i.offsetTop,a.left=i.offsetLeft,a.right=s-a.width-a.left,a.bottom=r-a.height-a.top}return null}componentDidUpdate(){}render(){return this.props.children}}function Fx({children:t,isPresent:e,anchorX:i,anchorY:n,root:s,pop:r}){const o=k.useId(),a=k.useRef(null),l=k.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:u}=k.useContext(oo),c=t.props?.ref??t?.ref,d=Vx(a,c);return k.useInsertionEffect(()=>{const{width:h,height:m,top:g,left:p,right:y,bottom:v}=l.current;if(e||r===!1||!a.current||!h||!m)return;const w=i==="left"?`left: ${p}`:`right: ${y}`,x=n==="bottom"?`bottom: ${v}`:`top: ${g}`;a.current.dataset.motionPopId=o;const b=document.createElement("style");u&&(b.nonce=u);const _=s??document.head;return _.appendChild(b),b.sheet&&b.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${h}px !important;
            height: ${m}px !important;
            ${w}px !important;
            ${x}px !important;
          }
        `),()=>{a.current?.removeAttribute("data-motion-pop-id"),_.contains(b)&&_.removeChild(b)}},[e]),f.jsx(zx,{isPresent:e,childRef:a,sizeRef:l,pop:r,children:r===!1?t:k.cloneElement(t,{ref:d})})}const Bx=({children:t,initial:e,isPresent:i,onExitComplete:n,custom:s,presenceAffectsLayout:r,mode:o,anchorX:a,anchorY:l,root:u})=>{const c=Lr(Ux),d=k.useId();let h=!0,m=k.useMemo(()=>(h=!1,{id:d,initial:e,isPresent:i,custom:s,onExitComplete:g=>{c.set(g,!0);for(const p of c.values())if(!p)return;n&&n()},register:g=>(c.set(g,!1),()=>c.delete(g))}),[i,c,n]);return r&&h&&(m={...m}),k.useMemo(()=>{c.forEach((g,p)=>c.set(p,!1))},[i]),k.useEffect(()=>{!i&&!c.size&&n&&n()},[i]),t=f.jsx(Fx,{pop:o==="popLayout",isPresent:i,anchorX:a,anchorY:l,root:u,children:t}),f.jsx(Nn.Provider,{value:m,children:t})};function Ux(){return new Map}function Nu(t=!0){const e=k.useContext(Nn);if(e===null)return[!0,null];const{isPresent:i,onExitComplete:n,register:s}=e,r=k.useId();k.useEffect(()=>{if(t)return s(r)},[t]);const o=k.useCallback(()=>t&&n&&n(r),[r,n,t]);return!i&&n?[!1,o]:[!0]}const nn=t=>t.key||"";function za(t){const e=[];return k.Children.forEach(t,i=>{k.isValidElement(i)&&e.push(i)}),e}const Fa=({children:t,custom:e,initial:i=!0,onExitComplete:n,presenceAffectsLayout:s=!0,mode:r="sync",propagate:o=!1,anchorX:a="left",anchorY:l="top",root:u})=>{const[c,d]=Nu(o),h=k.useMemo(()=>za(t),[t]),m=o&&!c?[]:h.map(nn),g=k.useRef(!0),p=k.useRef(h),y=Lr(()=>new Map),v=k.useRef(new Set),[w,x]=k.useState(h),[b,_]=k.useState(h);mc(()=>{g.current=!1,p.current=h;for(let T=0;T<b.length;T++){const C=nn(b[T]);m.includes(C)?(y.delete(C),v.current.delete(C)):y.get(C)!==!0&&y.set(C,!1)}},[b,m.length,m.join("-")]);const A=[];if(h!==w){let T=[...h];for(let C=0;C<b.length;C++){const j=b[C],M=nn(j);m.includes(M)||(T.splice(C,0,j),A.push(j))}return r==="wait"&&A.length&&(T=A),_(za(T)),x(h),null}const{forceRender:P}=k.useContext(Er);return f.jsx(f.Fragment,{children:b.map(T=>{const C=nn(T),j=o&&!c?!1:h===b||m.includes(C),M=()=>{if(v.current.has(C))return;if(y.has(C))v.current.add(C),y.set(C,!0);else return;let E=!0;y.forEach(L=>{L||(E=!1)}),E&&(P?.(),_(p.current),o&&d?.(),n&&n())};return f.jsx(Bx,{isPresent:j,initial:!g.current||i?void 0:!1,custom:e,presenceAffectsLayout:s,mode:r,root:u,onExitComplete:j?void 0:M,anchorX:a,anchorY:l,children:T},C)})})},$u=k.createContext({strict:!1}),Ba={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let Ua=!1;function Nx(){if(Ua)return;const t={};for(const e in Ba)t[e]={isEnabled:i=>Ba[e].some(n=>!!i[n])};xu(t),Ua=!0}function Gu(){return Nx(),Cy()}function $x(t){const e=Gu();for(const i in t)e[i]={...e[i],...t[i]};xu(e)}const Gx=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function Vn(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||Gx.has(t)}let Wu=t=>!Vn(t);function Wx(t){typeof t=="function"&&(Wu=e=>e.startsWith("on")?!Vn(e):t(e))}try{Wx(require("@emotion/is-prop-valid").default)}catch{}function Hx(t,e,i){const n={};for(const s in t)s==="values"&&typeof t.values=="object"||ce(t[s])||(Wu(s)||i===!0&&Vn(s)||!e&&!Vn(s)||t.draggable&&s.startsWith("onDrag"))&&(n[s]=t[s]);return n}const Hn=k.createContext({});function Xx(t,e){if(Wn(t)){const{initial:i,animate:n}=t;return{initial:i===!1||Gi(i)?i:void 0,animate:Gi(n)?n:void 0}}return t.inherit!==!1?e:{}}function Yx(t){const{initial:e,animate:i}=Xx(t,k.useContext(Hn));return k.useMemo(()=>({initial:e,animate:i}),[Na(e),Na(i)])}function Na(t){return Array.isArray(t)?t.join(" "):t}const ao=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Hu(t,e,i){for(const n in e)!ce(e[n])&&!Pu(n,i)&&(t[n]=e[n])}function Kx({transformTemplate:t},e){return k.useMemo(()=>{const i=ao();return so(i,e,t),Object.assign({},i.vars,i.style)},[e])}function qx(t,e){const i=t.style||{},n={};return Hu(n,i,t),Object.assign(n,Kx(t,e)),n}function Zx(t,e){const i={},n=qx(t,e);return t.drag&&t.dragListener!==!1&&(i.draggable=!1,n.userSelect=n.WebkitUserSelect=n.WebkitTouchCallout="none",n.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(i.tabIndex=0),i.style=n,i}const Xu=()=>({...ao(),attrs:{}});function Jx(t,e,i,n){const s=k.useMemo(()=>{const r=Xu();return Cu(r,e,ju(n),t.transformTemplate,t.style),{...r.attrs,style:{...r.style}}},[e]);if(t.style){const r={};Hu(r,t.style,t),s.style={...r,...s.style}}return s}const Qx=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function lo(t){return typeof t!="string"||t.includes("-")?!1:!!(Qx.indexOf(t)>-1||/[A-Z]/u.test(t))}function e1(t,e,i,{latestValues:n},s,r=!1,o){const l=(o??lo(t)?Jx:Zx)(e,n,s,t),u=Hx(e,typeof t=="string",r),c=t!==k.Fragment?{...u,...l,ref:i}:{},{children:d}=e,h=k.useMemo(()=>ce(d)?d.get():d,[d]);return k.createElement(t,{...c,children:h})}function t1({scrapeMotionValuesFromProps:t,createRenderState:e},i,n,s){return{latestValues:i1(i,n,s,t),renderState:e()}}function i1(t,e,i,n){const s={},r=n(t,{});for(const h in r)s[h]=yn(r[h]);let{initial:o,animate:a}=t;const l=Wn(t),u=gu(t);e&&u&&!l&&t.inherit!==!1&&(o===void 0&&(o=e.initial),a===void 0&&(a=e.animate));let c=i?i.initial===!1:!1;c=c||o===!1;const d=c?a:o;if(d&&typeof d!="boolean"&&!Gn(d)){const h=Array.isArray(d)?d:[d];for(let m=0;m<h.length;m++){const g=Kr(t,h[m]);if(g){const{transitionEnd:p,transition:y,...v}=g;for(const w in v){let x=v[w];if(Array.isArray(x)){const b=c?x.length-1:0;x=x[b]}x!==null&&(s[w]=x)}for(const w in p)s[w]=p[w]}}}return s}const Yu=t=>(e,i)=>{const n=k.useContext(Hn),s=k.useContext(Nn),r=()=>t1(t,e,n,s);return i?r():Lr(r)},n1=Yu({scrapeMotionValuesFromProps:ro,createRenderState:ao}),s1=Yu({scrapeMotionValuesFromProps:Au,createRenderState:Xu}),r1=Symbol.for("motionComponentSymbol");function o1(t,e,i){const n=k.useRef(i);k.useInsertionEffect(()=>{n.current=i});const s=k.useRef(null);return k.useCallback(r=>{r&&t.onMount?.(r);const o=n.current;if(typeof o=="function")if(r){const a=o(r);typeof a=="function"&&(s.current=a)}else s.current?(s.current(),s.current=null):o(r);else o&&(o.current=r);e&&(r?e.mount(r):e.unmount())},[e])}const Ku=k.createContext({});function Yt(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function a1(t,e,i,n,s,r){const{visualElement:o}=k.useContext(Hn),a=k.useContext($u),l=k.useContext(Nn),u=k.useContext(oo),c=u.reducedMotion,d=u.skipAnimations,h=k.useRef(null),m=k.useRef(!1);n=n||a.renderer,!h.current&&n&&(h.current=n(t,{visualState:e,parent:o,props:i,presenceContext:l,blockInitialAnimation:l?l.initial===!1:!1,reducedMotionConfig:c,skipAnimations:d,isSVG:r}),m.current&&h.current&&(h.current.manuallyAnimateOnMount=!0));const g=h.current,p=k.useContext(Ku);g&&!g.projection&&s&&(g.type==="html"||g.type==="svg")&&l1(h.current,i,s,p);const y=k.useRef(!1);k.useInsertionEffect(()=>{g&&y.current&&g.update(i,l)});const v=i[nu],w=k.useRef(!!v&&typeof window<"u"&&!window.MotionHandoffIsComplete?.(v)&&window.MotionHasOptimisedAnimation?.(v));return mc(()=>{m.current=!0,g&&(y.current=!0,window.MotionIsMounted=!0,g.updateFeatures(),g.scheduleRenderMicrotask(),w.current&&g.animationState&&g.animationState.animateChanges())}),k.useEffect(()=>{g&&(!w.current&&g.animationState&&g.animationState.animateChanges(),w.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(v)}),w.current=!1),g.enteringChildren=void 0)}),g}function l1(t,e,i,n){const{layoutId:s,layout:r,drag:o,dragConstraints:a,layoutScroll:l,layoutRoot:u,layoutAnchor:c,layoutCrossfade:d}=e;t.projection=new i(t.latestValues,e["data-framer-portal-id"]?void 0:qu(t.parent)),t.projection.setOptions({layoutId:s,layout:r,alwaysMeasureLayout:!!o||a&&Yt(a),visualElement:t,animationType:typeof r=="string"?r:"both",initialPromotionConfig:n,crossfade:d,layoutScroll:l,layoutRoot:u,layoutAnchor:c})}function qu(t){if(t)return t.options.allowProjection!==!1?t.projection:qu(t.parent)}function gs(t,{forwardMotionProps:e=!1,type:i}={},n,s){n&&$x(n);const r=i?i==="svg":lo(t),o=r?s1:n1;function a(u,c){let d;const h={...k.useContext(oo),...u,layoutId:c1(u)},{isStatic:m}=h,g=Yx(u),p=o(u,m);if(!m&&typeof window<"u"){u1();const y=d1(h);d=y.MeasureLayout,g.visualElement=a1(t,p,h,s,y.ProjectionNode,r)}return f.jsxs(Hn.Provider,{value:g,children:[d&&g.visualElement?f.jsx(d,{visualElement:g.visualElement,...h}):null,e1(t,u,o1(p,g.visualElement,c),p,m,e,r)]})}a.displayName=`motion.${typeof t=="string"?t:`create(${t.displayName??t.name??""})`}`;const l=k.forwardRef(a);return l[r1]=t,l}function c1({layoutId:t}){const e=k.useContext(Er).id;return e&&t!==void 0?e+"-"+t:t}function u1(t,e){k.useContext($u).strict}function d1(t){const e=Gu(),{drag:i,layout:n}=e;if(!i&&!n)return{};const s={...i,...n};return{MeasureLayout:i?.isEnabled(t)||n?.isEnabled(t)?s.MeasureLayout:void 0,ProjectionNode:s.ProjectionNode}}function h1(t,e){if(typeof Proxy>"u")return gs;const i=new Map,n=(r,o)=>gs(r,o,t,e),s=(r,o)=>n(r,o);return new Proxy(s,{get:(r,o)=>o==="create"?n:(i.has(o)||i.set(o,gs(o,void 0,t,e)),i.get(o))})}const f1=(t,e)=>e.isSVG??lo(t)?new $y(e):new Vy(e,{allowProjection:t!==k.Fragment});class p1 extends wt{constructor(e){super(e),e.animationState||(e.animationState=Yy(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();Gn(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:i}=this.node.prevProps||{};e!==i&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}let m1=0;class g1 extends wt{constructor(){super(...arguments),this.id=m1++,this.isExitComplete=!1}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:i}=this.node.presenceContext,{isPresent:n}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===n)return;if(e&&n===!1){if(this.isExitComplete){const{initial:r,custom:o}=this.node.getProps();if(typeof r=="string"){const a=Bt(this.node,r,o);if(a){const{transition:l,transitionEnd:u,...c}=a;for(const d in c)this.node.getValue(d)?.jump(c[d])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const s=this.node.animationState.setActive("exit",!e);i&&!e&&s.then(()=>{this.isExitComplete=!0,i(this.id)})}mount(){const{register:e,onExitComplete:i}=this.node.presenceContext||{};i&&i(this.id),e&&(this.unmount=e(this.id))}unmount(){}}const y1={animation:{Feature:p1},exit:{Feature:g1}};function Zi(t){return{point:{x:t.pageX,y:t.pageY}}}const x1=t=>e=>Qr(e)&&t(e,Zi(e));function Ei(t,e,i,n){return Wi(t,e,x1(i),n)}const Zu=({current:t})=>t?t.ownerDocument.defaultView:null,$a=(t,e)=>Math.abs(t-e);function v1(t,e){const i=$a(t.x,e.x),n=$a(t.y,e.y);return Math.sqrt(i**2+n**2)}const Ga=new Set(["auto","scroll"]);class Ju{constructor(e,i,{transformPagePoint:n,contextWindow:s=window,dragSnapToOrigin:r=!1,distanceThreshold:o=3,element:a}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=m=>{this.handleScroll(m.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=sn(this.lastRawMoveEventInfo,this.transformPagePoint));const m=ys(this.lastMoveEventInfo,this.history),g=this.startEvent!==null,p=v1(m.offset,{x:0,y:0})>=this.distanceThreshold;if(!g&&!p)return;const{point:y}=m,{timestamp:v}=le;this.history.push({...y,timestamp:v});const{onStart:w,onMove:x}=this.handlers;g||(w&&w(this.lastMoveEvent,m),this.startEvent=this.lastMoveEvent),x&&x(this.lastMoveEvent,m)},this.handlePointerMove=(m,g)=>{this.lastMoveEvent=m,this.lastRawMoveEventInfo=g,this.lastMoveEventInfo=sn(g,this.transformPagePoint),G.update(this.updatePoint,!0)},this.handlePointerUp=(m,g)=>{this.end();const{onEnd:p,onSessionEnd:y,resumeAnimation:v}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&v&&v(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const w=ys(m.type==="pointercancel"?this.lastMoveEventInfo:sn(g,this.transformPagePoint),this.history);this.startEvent&&p&&p(m,w),y&&y(m,w)},!Qr(e))return;this.dragSnapToOrigin=r,this.handlers=i,this.transformPagePoint=n,this.distanceThreshold=o,this.contextWindow=s||window;const l=Zi(e),u=sn(l,this.transformPagePoint),{point:c}=u,{timestamp:d}=le;this.history=[{...c,timestamp:d}];const{onSessionStart:h}=i;h&&h(e,ys(u,this.history)),this.removeListeners=Yi(Ei(this.contextWindow,"pointermove",this.handlePointerMove),Ei(this.contextWindow,"pointerup",this.handlePointerUp),Ei(this.contextWindow,"pointercancel",this.handlePointerUp)),a&&this.startScrollTracking(a)}startScrollTracking(e){let i=e.parentElement;for(;i;){const n=getComputedStyle(i);(Ga.has(n.overflowX)||Ga.has(n.overflowY))&&this.scrollPositions.set(i,{x:i.scrollLeft,y:i.scrollTop}),i=i.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(e){const i=this.scrollPositions.get(e);if(!i)return;const n=e===window,s=n?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},r={x:s.x-i.x,y:s.y-i.y};r.x===0&&r.y===0||(n?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=r.x,this.lastMoveEventInfo.point.y+=r.y):this.history.length>0&&(this.history[0].x-=r.x,this.history[0].y-=r.y),this.scrollPositions.set(e,s),G.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),xt(this.updatePoint)}}function sn(t,e){return e?{point:e(t.point)}:t}function Wa(t,e){return{x:t.x-e.x,y:t.y-e.y}}function ys({point:t},e){return{point:t,delta:Wa(t,Qu(e)),offset:Wa(t,w1(e)),velocity:b1(e,.1)}}function w1(t){return t[0]}function Qu(t){return t[t.length-1]}function b1(t,e){if(t.length<2)return{x:0,y:0};let i=t.length-1,n=null;const s=Qu(t);for(;i>=0&&(n=t[i],!(s.timestamp-n.timestamp>Re(e)));)i--;if(!n)return{x:0,y:0};n===t[0]&&t.length>2&&s.timestamp-n.timestamp>Re(e)*2&&(n=t[1]);const r=Ve(s.timestamp-n.timestamp);if(r===0)return{x:0,y:0};const o={x:(s.x-n.x)/r,y:(s.y-n.y)/r};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function _1(t,{min:e,max:i},n){return e!==void 0&&t<e?t=n?W(e,t,n.min):Math.max(t,e):i!==void 0&&t>i&&(t=n?W(i,t,n.max):Math.min(t,i)),t}function Ha(t,e,i){return{min:e!==void 0?t.min+e:void 0,max:i!==void 0?t.max+i-(t.max-t.min):void 0}}function T1(t,{top:e,left:i,bottom:n,right:s}){return{x:Ha(t.x,i,s),y:Ha(t.y,e,n)}}function Xa(t,e){let i=e.min-t.min,n=e.max-t.max;return e.max-e.min<t.max-t.min&&([i,n]=[n,i]),{min:i,max:n}}function k1(t,e){return{x:Xa(t.x,e.x),y:Xa(t.y,e.y)}}function P1(t,e){let i=.5;const n=ge(t),s=ge(e);return s>n?i=Ni(e.min,e.max-n,t.min):n>s&&(i=Ni(t.min,t.max-s,e.min)),Ze(0,1,i)}function C1(t,e){const i={};return e.min!==void 0&&(i.min=e.min-t.min),e.max!==void 0&&(i.max=e.max-t.min),i}const nr=.35;function S1(t=nr){return t===!1?t=0:t===!0&&(t=nr),{x:Ya(t,"left","right"),y:Ya(t,"top","bottom")}}function Ya(t,e,i){return{min:Ka(t,e),max:Ka(t,i)}}function Ka(t,e){return typeof t=="number"?t:t[e]||0}const j1=new WeakMap;class A1{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=ne(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:i=!1,distanceThreshold:n}={}){const{presenceContext:s}=this.visualElement;if(s&&s.isPresent===!1)return;const r=d=>{i&&this.snapToCursor(Zi(d).point),this.stopAnimation()},o=(d,h)=>{const{drag:m,dragPropagation:g,onDragStart:p}=this.getProps();if(m&&!g&&(this.openDragLock&&this.openDragLock(),this.openDragLock=ny(m),!this.openDragLock))return;this.latestPointerEvent=d,this.latestPanInfo=h,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Ge(v=>{let w=this.getAxisMotionValue(v).get()||0;if(Ke.test(w)){const{projection:x}=this.visualElement;if(x&&x.layout){const b=x.layout.layoutBox[v];b&&(w=ge(b)*(parseFloat(w)/100))}}this.originPoint[v]=w}),p&&G.update(()=>p(d,h),!1,!0),Ks(this.visualElement,"transform");const{animationState:y}=this.visualElement;y&&y.setActive("whileDrag",!0)},a=(d,h)=>{this.latestPointerEvent=d,this.latestPanInfo=h;const{dragPropagation:m,dragDirectionLock:g,onDirectionLock:p,onDrag:y}=this.getProps();if(!m&&!this.openDragLock)return;const{offset:v}=h;if(g&&this.currentDirection===null){this.currentDirection=M1(v),this.currentDirection!==null&&p&&p(this.currentDirection);return}this.updateAxis("x",h.point,v),this.updateAxis("y",h.point,v),this.visualElement.render(),y&&G.update(()=>y(d,h),!1,!0)},l=(d,h)=>{this.latestPointerEvent=d,this.latestPanInfo=h,this.stop(d,h),this.latestPointerEvent=null,this.latestPanInfo=null},u=()=>{const{dragSnapToOrigin:d}=this.getProps();(d||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:c}=this.getProps();this.panSession=new Ju(e,{onSessionStart:r,onStart:o,onMove:a,onSessionEnd:l,resumeAnimation:u},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:c,distanceThreshold:n,contextWindow:Zu(this.visualElement),element:this.visualElement.current})}stop(e,i){const n=e||this.latestPointerEvent,s=i||this.latestPanInfo,r=this.isDragging;if(this.cancel(),!r||!s||!n)return;const{velocity:o}=s;this.startAnimation(o);const{onDragEnd:a}=this.getProps();a&&G.postRender(()=>a(n,s))}cancel(){this.isDragging=!1;const{projection:e,animationState:i}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:n}=this.getProps();!n&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),i&&i.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,i,n){const{drag:s}=this.getProps();if(!n||!rn(e,s,this.currentDirection))return;const r=this.getAxisMotionValue(e);let o=this.originPoint[e]+n[e];this.constraints&&this.constraints[e]&&(o=_1(o,this.constraints[e],this.elastic[e])),r.set(o)}resolveConstraints(){const{dragConstraints:e,dragElastic:i}=this.getProps(),n=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,s=this.constraints;e&&Yt(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&n?this.constraints=T1(n.layoutBox,e):this.constraints=!1,this.elastic=S1(i),s!==this.constraints&&!Yt(e)&&n&&this.constraints&&!this.hasMutatedConstraints&&Ge(r=>{this.constraints!==!1&&this.getAxisMotionValue(r)&&(this.constraints[r]=C1(n.layoutBox[r],this.constraints[r]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:i}=this.getProps();if(!e||!Yt(e))return!1;const n=e.current,{projection:s}=this.visualElement;if(!s||!s.layout)return!1;const r=My(n,s.root,this.visualElement.getTransformPagePoint());let o=k1(s.layout.layoutBox,r);if(i){const a=i(jy(o));this.hasMutatedConstraints=!!a,a&&(o=wu(a))}return o}startAnimation(e){const{drag:i,dragMomentum:n,dragElastic:s,dragTransition:r,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},u=Ge(c=>{if(!rn(c,i,this.currentDirection))return;let d=l&&l[c]||{};(o===!0||o===c)&&(d={min:0,max:0});const h=s?200:1e6,m=s?40:1e7,g={type:"inertia",velocity:n?e[c]:0,bounceStiffness:h,bounceDamping:m,timeConstant:750,restDelta:1,restSpeed:10,...r,...d};return this.startAxisValueAnimation(c,g)});return Promise.all(u).then(a)}startAxisValueAnimation(e,i){const n=this.getAxisMotionValue(e);return Ks(this.visualElement,e),n.start(Yr(e,n,0,i,this.visualElement,!1))}stopAnimation(){Ge(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){const i=`_drag${e.toUpperCase()}`,n=this.visualElement.getProps(),s=n[i];return s||this.visualElement.getValue(e,(n.initial?n.initial[e]:void 0)||0)}snapToCursor(e){Ge(i=>{const{drag:n}=this.getProps();if(!rn(i,n,this.currentDirection))return;const{projection:s}=this.visualElement,r=this.getAxisMotionValue(i);if(s&&s.layout){const{min:o,max:a}=s.layout.layoutBox[i],l=r.get()||0;r.set(e[i]-W(o,a,.5)+l)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:i}=this.getProps(),{projection:n}=this.visualElement;if(!Yt(i)||!n||!this.constraints)return;this.stopAnimation();const s={x:0,y:0};Ge(o=>{const a=this.getAxisMotionValue(o);if(a&&this.constraints!==!1){const l=a.get();s[o]=P1({min:l,max:l},this.constraints[o])}});const{transformTemplate:r}=this.visualElement.getProps();this.visualElement.current.style.transform=r?r({},""):"none",n.root&&n.root.updateScroll(),n.updateLayout(),this.constraints=!1,this.resolveConstraints(),Ge(o=>{if(!rn(o,e,null))return;const a=this.getAxisMotionValue(o),{min:l,max:u}=this.constraints[o];a.set(W(l,u,s[o]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;j1.set(this.visualElement,this);const e=this.visualElement.current,i=Ei(e,"pointerdown",u=>{const{drag:c,dragListener:d=!0}=this.getProps(),h=u.target,m=h!==e&&cy(h);c&&d&&!m&&this.start(u)});let n;const s=()=>{const{dragConstraints:u}=this.getProps();Yt(u)&&u.current&&(this.constraints=this.resolveRefConstraints(),n||(n=R1(e,u.current,()=>this.scalePositionWithinConstraints())))},{projection:r}=this.visualElement,o=r.addEventListener("measure",s);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),G.read(s);const a=Wi(window,"resize",()=>this.scalePositionWithinConstraints()),l=r.addEventListener("didUpdate",(({delta:u,hasLayoutChanged:c})=>{this.isDragging&&c&&(Ge(d=>{const h=this.getAxisMotionValue(d);h&&(this.originPoint[d]+=u[d].translate,h.set(h.get()+u[d].translate))}),this.visualElement.render())}));return()=>{a(),i(),o(),l&&l(),n&&n()}}getProps(){const e=this.visualElement.getProps(),{drag:i=!1,dragDirectionLock:n=!1,dragPropagation:s=!1,dragConstraints:r=!1,dragElastic:o=nr,dragMomentum:a=!0}=e;return{...e,drag:i,dragDirectionLock:n,dragPropagation:s,dragConstraints:r,dragElastic:o,dragMomentum:a}}}function qa(t){let e=!0;return()=>{if(e){e=!1;return}t()}}function R1(t,e,i){const n=ia(t,qa(i)),s=ia(e,qa(i));return()=>{n(),s()}}function rn(t,e,i){return(e===!0||e===t)&&(i===null||i===t)}function M1(t,e=10){let i=null;return Math.abs(t.y)>e?i="y":Math.abs(t.x)>e&&(i="x"),i}class D1 extends wt{constructor(e){super(e),this.removeGroupControls=ze,this.removeListeners=ze,this.controls=new A1(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||ze}update(){const{dragControls:e}=this.node.getProps(),{dragControls:i}=this.node.prevProps||{};e!==i&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const xs=t=>(e,i)=>{t&&G.update(()=>t(e,i),!1,!0)};class E1 extends wt{constructor(){super(...arguments),this.removePointerDownListener=ze}onPointerDown(e){this.session=new Ju(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Zu(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:i,onPan:n,onPanEnd:s}=this.node.getProps();return{onSessionStart:xs(e),onStart:xs(i),onMove:xs(n),onEnd:(r,o)=>{delete this.session,s&&G.postRender(()=>s(r,o))}}}mount(){this.removePointerDownListener=Ei(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let vs=!1;class L1 extends k.Component{componentDidMount(){const{visualElement:e,layoutGroup:i,switchLayoutGroup:n,layoutId:s}=this.props,{projection:r}=e;r&&(i.group&&i.group.add(r),n&&n.register&&s&&n.register(r),vs&&r.root.didUpdate(),r.addEventListener("animationComplete",()=>{this.safeToRemove()}),r.setOptions({...r.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),xn.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:i,visualElement:n,drag:s,isPresent:r}=this.props,{projection:o}=n;return o&&(o.isPresent=r,e.layoutDependency!==i&&o.setOptions({...o.options,layoutDependency:i}),vs=!0,s||e.layoutDependency!==i||i===void 0||e.isPresent!==r?o.willUpdate():this.safeToRemove(),e.isPresent!==r&&(r?o.promote():o.relegate()||G.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:e,layoutAnchor:i}=this.props,{projection:n}=e;n&&(n.options.layoutAnchor=i,n.root.didUpdate(),Jr.postRender(()=>{!n.currentAnimation&&n.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:i,switchLayoutGroup:n}=this.props,{projection:s}=e;vs=!0,s&&(s.scheduleCheckAfterUnmount(),i&&i.group&&i.group.remove(s),n&&n.deregister&&n.deregister(s))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function ed(t){const[e,i]=Nu(),n=k.useContext(Er);return f.jsx(L1,{...t,layoutGroup:n,switchLayoutGroup:k.useContext(Ku),isPresent:e,safeToRemove:i})}const O1={pan:{Feature:E1},drag:{Feature:D1,ProjectionNode:Uu,MeasureLayout:ed}};function Za(t,e,i){const{props:n}=t;t.animationState&&n.whileHover&&t.animationState.setActive("whileHover",i==="Start");const s="onHover"+i,r=n[s];r&&G.postRender(()=>r(e,Zi(e)))}class I1 extends wt{mount(){const{current:e}=this.node;e&&(this.unmount=ry(e,(i,n)=>(Za(this.node,n,"Start"),s=>Za(this.node,s,"End"))))}unmount(){}}class V1 extends wt{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Yi(Wi(this.node.current,"focus",()=>this.onFocus()),Wi(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Ja(t,e,i){const{props:n}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&n.whileTap&&t.animationState.setActive("whileTap",i==="Start");const s="onTap"+(i==="End"?"":i),r=n[s];r&&G.postRender(()=>r(e,Zi(e)))}class z1 extends wt{mount(){const{current:e}=this.node;if(!e)return;const{globalTapTarget:i,propagate:n}=this.node.props;this.unmount=dy(e,(s,r)=>(Ja(this.node,r,"Start"),(o,{success:a})=>Ja(this.node,o,a?"End":"Cancel")),{useGlobalTarget:i,stopPropagation:n?.tap===!1})}unmount(){}}const sr=new WeakMap,ws=new WeakMap,F1=t=>{const e=sr.get(t.target);e&&e(t)},B1=t=>{t.forEach(F1)};function U1({root:t,...e}){const i=t||document;ws.has(i)||ws.set(i,{});const n=ws.get(i),s=JSON.stringify(e);return n[s]||(n[s]=new IntersectionObserver(B1,{root:t,...e})),n[s]}function N1(t,e,i){const n=U1(e);return sr.set(t,i),n.observe(t),()=>{sr.delete(t),n.unobserve(t)}}const $1={some:0,all:1};class G1 extends wt{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.stopObserver?.();const{viewport:e={}}=this.node.getProps(),{root:i,margin:n,amount:s="some",once:r}=e,o={root:i?i.current:void 0,rootMargin:n,threshold:typeof s=="number"?s:$1[s]},a=l=>{const{isIntersecting:u}=l;if(this.isInView===u||(this.isInView=u,r&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:c,onViewportLeave:d}=this.node.getProps(),h=u?c:d;h&&h(l)};this.stopObserver=N1(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:i}=this.node;["amount","margin","root"].some(W1(e,i))&&this.startObserver()}unmount(){this.stopObserver?.(),this.hasEnteredView=!1,this.isInView=!1}}function W1({viewport:t={}},{viewport:e={}}={}){return i=>t[i]!==e[i]}const H1={inView:{Feature:G1},tap:{Feature:z1},focus:{Feature:V1},hover:{Feature:I1}},X1={layout:{ProjectionNode:Uu,MeasureLayout:ed}},Y1={...y1,...H1,...O1,...X1},yi=h1(Y1,f1);function td(){!no.current&&yu();const[t]=k.useState(En.current);return t}const rr=new Set,bs=new Map,K1=1400,$e=[.22,1,.36,1];let or=!1;const q1=1;function Z1(){return typeof window>"u"?!1:["localhost","127.0.0.1","::1"].includes(window.location.hostname)}function co(t,e=0){if(rr.has(t))return Promise.resolve(!0);const i=e===0?bs.get(t):void 0;if(i)return i;const n=new Promise(s=>{const r=new Image;r.decoding="async";let o=!1;const a=l=>{o||(o=!0,l&&rr.add(t),e===0&&bs.delete(t),s(l))};r.onload=async()=>{if(typeof r.decode=="function")try{await r.decode()}catch{a(!1);return}a(!0)},r.onerror=()=>{if(e<q1){co(t,e+1).then(a);return}a(!1)},r.src=t,r.complete&&Promise.resolve().then(async()=>{if(typeof r.decode=="function")try{await r.decode()}catch{a(!1);return}a(!0)})});return e===0&&bs.set(t,n),n}function J1(t){const e=t.map(i=>co(i.src));return Promise.all(e).catch(()=>{}),Promise.resolve()}async function id(t){const e=t.map(n=>co(n.src));return(await Promise.all(e)).every(Boolean)}async function Qa(t){const e=performance.now(),i=await id(t);return{duration:performance.now()-e,allDecoded:i}}async function Q1(t,e=K1,i){if(typeof window>"u")return!0;const n=i?.lockSessionOnFailure??!0;if(Z1()){const{allDecoded:a}=await Qa(t);return a}if(n&&or)return!1;const s=Qa(t),r=new Promise(a=>{window.setTimeout(()=>a(!1),e)}),o=await Promise.race([s.then(({duration:a,allDecoded:l})=>l&&a<=e),r]);return!o&&n&&(or=!0),o}const el=S(yi.div)`
  position: fixed;
  inset: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
`,ev=S(yi.div)`
  position: absolute;
  inset: 0;
  background: ${({$overlayColor:t})=>t};
`;S(yi.div)`
  position: fixed;
  inset: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.85);
`;const tv=S(yi.div)`
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  background: white;
`,tl=S(yi.img)`
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
`;function iv({images:t,isActive:e,onComplete:i,layoutId:n,sharedSourceImageSrc:s,isReverse:r=!1,overlayColor:o="black",loadingBackgroundColor:a="rgba(0, 0, 0, 0.85)"}){const l=td(),[u,c]=k.useState(!1),[d,h]=k.useState(!1),m=k.useRef(!1),g=k.useRef(i);k.useEffect(()=>{g.current=i},[i]),k.useEffect(()=>{m.current=!1},[e,t,r]);const p=()=>{m.current||(m.current=!0,g.current())};k.useEffect(()=>{if(!e||!u||!d||r)return;const T=setTimeout(()=>{p()},l?400:2450);return()=>clearTimeout(T)},[e,u,d,r,l]),t.length!==5&&console.warn(`CaseStudyTransition expects exactly 5 images, got ${t.length}`);const[y,v]=k.useState(window.innerWidth<768);k.useEffect(()=>{const P=()=>{v(window.innerWidth<768)};return window.addEventListener("resize",P),()=>window.removeEventListener("resize",P)},[]);const w=y?[-6,-3,0,3,6]:[-12,-6,0,6,12],x=y?["-7.5%","-3.75%","0","3.75%","7.5%"]:["-15%","-7%","0","7%","15%"],b=y?"85vw":"55vw",_=y?"400px":"700px",A=s?t.findIndex(P=>P.src===s):-1;return k.useEffect(()=>{if(!e){c(!1),h(!1);return}if(t.every(T=>rr.has(T.src))){c(!0);return}let P=!1;return c(!1),id(t).catch(()=>!1).then(T=>{if(!P){if(T){c(!0);return}or=!0,p()}}),()=>{P=!0}},[e,t]),k.useEffect(()=>{if(!e||!u){h(!1);return}let P=0,T=0;return P=window.requestAnimationFrame(()=>{T=window.requestAnimationFrame(()=>{h(!0)})}),()=>{window.cancelAnimationFrame(P),window.cancelAnimationFrame(T)}},[e,u]),k.useEffect(()=>{if(e){const P=window.innerWidth-document.documentElement.clientWidth;return document.body.style.overflow="hidden",document.body.style.paddingRight=`${P}px`,()=>{document.body.style.overflow="",document.body.style.paddingRight=""}}},[e]),k.useEffect(()=>{if(!e)return;const P=T=>{(T.key==="Escape"||T.key==="Esc")&&(T.preventDefault(),p())};return window.addEventListener("keydown",P,!0),()=>window.removeEventListener("keydown",P,!0)},[e]),l?f.jsx(Fa,{children:e&&u&&d&&f.jsx(el,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.4},onAnimationComplete:p,children:t.map((P,T)=>f.jsx(tl,{src:P.src,alt:P.alt,decoding:"sync",fetchPriority:"high",style:{"--card-object-position":P.objectPosition||"center center",width:b,maxWidth:_,aspectRatio:"3 / 2",zIndex:10+T},initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.4}},P.src))})}):e&&(!u||!d)?f.jsx(yi.div,{style:{position:"fixed",inset:0,zIndex:50,display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:a},initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},children:f.jsx(tv,{animate:{scale:[1,1.2,1],opacity:[.5,1,.5]},transition:{duration:1.2,repeat:1/0}})}):f.jsx(Fa,{children:e&&u&&d&&f.jsxs(el,{initial:{opacity:1},animate:{opacity:1},exit:{opacity:0},transition:{duration:0},children:[f.jsx(ev,{$overlayColor:o,initial:{opacity:.85},animate:{opacity:r?0:.85},exit:{opacity:0},transition:{opacity:{duration:r?1.5:2.5,ease:"easeInOut"}}}),t.map((P,T)=>{const C=r?{opacity:[1,1,0],scale:[1,1,.8],y:[-20,0,60],rotate:[w[T],0,0],x:[x[T],0,0]}:{opacity:[1,1,1,1],scale:[.8,1,1,1],y:[60,0,-20,0],rotate:[0,0,w[T],0],x:[0,0,x[T],0]},j=r?{opacity:{times:[0,.4,1],duration:1.5,ease:$e},scale:{times:[0,.4,1],duration:1.5,ease:$e},y:{times:[0,.4,1],duration:1.5,ease:$e},rotate:{times:[0,.4,1],duration:1.5,ease:$e},x:{times:[0,.4,1],duration:1.5,ease:$e}}:{opacity:{times:[0,.17,.58,1],duration:2.4,ease:$e},scale:{times:[0,.17,.58,1],duration:2.4,ease:$e},y:{times:[0,.17,.58,1],duration:2.4,ease:$e},rotate:{times:[0,.17,.58,1],duration:2.4,ease:$e},x:{times:[0,.17,.58,1],duration:2.4,ease:$e}};return f.jsx(tl,{src:P.src,alt:P.alt,decoding:"sync",fetchPriority:"high",style:{"--card-object-position":P.objectPosition||"center center",width:b,maxWidth:_,aspectRatio:"3 / 2",zIndex:10+T},layoutId:T===A?n:void 0,loading:"eager",initial:{opacity:r?1:0,scale:r?1:.8,y:r?-20:60,rotate:r?w[T]:0,x:r?x[T]:0},animate:C,transition:j,onAnimationComplete:()=>{r&&T===4&&p()}},P.src)})]})})}const nv=""+new URL("Piton—Screens-BH4faZaC.jpg",import.meta.url).href,sv=S.div`
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
`,rv=S.h1`
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
`,ov=S.div`
  position: relative;
  z-index: 60;
`,av=S.span`
  display: inline-block;
  overflow: hidden;
  vertical-align: top;
`,lv=S.span`
  display: inline-block;
  will-change: transform, opacity;
  opacity: 0;
`,cv=S.div`
  position: absolute;
  right: clamp(18px, 2.8vw, 40px);
  bottom: clamp(18px, 2.8vw, 40px);
  z-index: 60;
  color: ${({$color:t})=>t};
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(0.9rem, 1.35vw, 1.2rem);
  letter-spacing: 0.08em;
`,uv=[{src:"/assets/HP.png",alt:"Microsoft shopping ecosystem preview",objectPosition:"top center"},{src:ll,alt:"Leysi project preview"},{src:cl,alt:"ThreePillars project preview"},{src:nv,alt:"Piton project preview"},{src:ul,alt:"Outsource project preview"}];function dv(t){const e=[...t];for(let i=e.length-1;i>0;i-=1){const n=Math.floor(Math.random()*(i+1));[e[i],e[n]]=[e[n],e[i]]}return e}function hv(){const t="ZACHARY MACTAVISH.",e="#ffffff",[i,n]=k.useState("000%"),[s,r]=k.useState(!0),[o]=k.useState(()=>dv(uv)),[a,l]=k.useState(!1),[u,c]=k.useState(!1),d=k.useRef(null),h=k.useRef([]),m=td(),g=a,p=e,y="#111111";k.useEffect(()=>{let w=!1;return Q1(o,void 0,{lockSessionOnFailure:!1}).then(x=>{w||(c(x),l(!0))}).catch(()=>{w||(c(!1),l(!0))}),()=>{w=!0}},[o]),k.useEffect(()=>{if(!s)return;const w=document.body.style.overflow,x=document.body.style.paddingRight,b=window.innerWidth-document.documentElement.clientWidth;return document.body.style.overflow="hidden",b>0&&(document.body.style.paddingRight=`${b}px`),()=>{document.body.style.overflow=w,document.body.style.paddingRight=x}},[s]),k.useLayoutEffect(()=>{if(!s||!g)return;if(m){n("100%"),r(!1);return}const w=h.current.filter(Boolean),x={value:0};cn.set(w,{yPercent:110,autoAlpha:0}),cn.set(d.current,{clipPath:"inset(0% 0% 0% 0%)"});const b=cn.timeline({onComplete:()=>{r(!1),window.dispatchEvent(new Event("intro-animation-done"))}});return b.to(x,{value:100,duration:2.5,ease:"power2.inOut",onUpdate:()=>{n(`${String(Math.round(x.value)).padStart(3,"0")}%`)}}),b.to(w,{yPercent:0,autoAlpha:1,duration:.8,stagger:.04,ease:"power3.out"},"-=2"),b.to(d.current,{clipPath:"inset(0% 0% 100% 0%)",duration:.8,ease:"power4.inOut"}),()=>{b.kill()}},[s,m,g]);const v=()=>{};return f.jsxs(f.Fragment,{children:[f.jsx(xl,{introDone:!s}),s&&f.jsxs(sv,{ref:d,$background:p,style:{backgroundColor:p,position:"fixed",inset:0},children:[!g&&f.jsx("div",{style:{position:"absolute",inset:0,background:p,zIndex:1}}),u&&g&&f.jsx(iv,{images:o,isActive:s,onComplete:v,overlayColor:e,loadingBackgroundColor:e}),g&&f.jsx(ov,{children:f.jsx(rv,{"aria-label":t,children:Array.from(t).map((w,x)=>f.jsx(av,{children:f.jsx(lv,{ref:b=>{h.current[x]=b},children:w===" "?" ":w})},`intro-char-${x}`))})}),f.jsx(cv,{$color:y,children:i})]})]})}const fv={slug:"business-connectors",title:"Business Connectors",subtitle:"Empowering users to unlock loyalty perks across Microsoft Copilot",coverImage:{src:"/assets/business-connectors/Connectors1.jpg",avif:"/assets/business-connectors/Connectors1.avif",webp:"/assets/business-connectors/Connectors1.webp",alt:"Business Connectors hero",aspectRatio:"16/9"},transitionImages:[{src:"/assets/business-connectors/Connector Settings 1.jpg",alt:"Transition 1"},{src:"/assets/business-connectors/Settings Overlay 3.jpg",alt:"Transition 2"},{src:"/assets/business-connectors/PDP + Connector Upsell.jpg",alt:"Transition 3"},{src:"/assets/business-connectors/Connectors.jpg",alt:"Transition 4"},{src:"/assets/business-connectors/Perks.jpg",alt:"Transition 5"}],heroHeadline:"Unlocking Loyalty Rewards Through Intelligent Connections",meta:{client:"Microsoft Copilot",role:"Product Designer (7 weeks)",timeline:"2026",platform:"Desktop / Mobile / Web"},sections:[{id:"intro",layout:"sticky-split",stickyContent:{image:{src:"/assets/business-connectors/Connectors2.jpg",avif:"/assets/business-connectors/Connectors2.avif",webp:"/assets/business-connectors/Connectors2.webp",alt:"Business Connectors hero",aspectRatio:"16/9"},tags:["INTERACTION DESIGN","VISUAL DESIGN","PROTOTYPING","CROSS-PLATFORM"],collateralImages:[{src:"/assets/business-connectors/Connect AccountDrk.jpg",avif:"/assets/business-connectors/Connect AccountDrk.avif",webp:"/assets/business-connectors/Connect AccountDrk.webp",alt:"Target flow",aspectRatio:"16/9"},{src:"/assets/business-connectors/Password formDrk.jpg",avif:"/assets/business-connectors/Password formDrk.avif",webp:"/assets/business-connectors/Password formDrk.webp",alt:"Walmart flow",aspectRatio:"16/9"},{src:"/assets/business-connectors/Connection successful + Requery.jpg",avif:"/assets/business-connectors/Connection successful + Requery.avif",webp:"/assets/business-connectors/Connection successful + Requery.webp",alt:"Home Depot flow",aspectRatio:"6/5"},{src:"/assets/business-connectors/Perks Hover State.jpg",avif:"/assets/business-connectors/Perks Hover State.avif",webp:"/assets/business-connectors/Perks Hover State.webp",alt:"Nordstrom flow",aspectRatio:"5/3"},{src:"/assets/business-connectors/Settings Overlay 1.jpg",avif:"/assets/business-connectors/Settings Overlay 1.avif",webp:"/assets/business-connectors/Settings Overlay 1.webp",alt:"Generic hub",aspectRatio:"16/9"},{src:"/assets/business-connectors/Settings Overlay 2.jpg",avif:"/assets/business-connectors/Settings Overlay 2.avif",webp:"/assets/business-connectors/Settings Overlay 2.webp",alt:"Chat integration",aspectRatio:"16/9"}]},scrollContent:{blocks:[{type:"text",heading:"Overview",body:"Business Connectors in Microsoft Copilot empowers users to connect third-party business accounts to unlock loyalty perks, discounts, and curated offers across multiple merchants. By integrating these flows directly into Copilot, the assistant becomes proactive and helps users complete high-value tasks without leaving the experience."},{type:"image",images:[{src:"/assets/business-connectors/Carousel Cards + Connector UpsellDrk.jpg",avif:"/assets/business-connectors/Carousel Cards + Connector UpsellDrk.avif",webp:"/assets/business-connectors/Carousel Cards + Connector UpsellDrk.webp",alt:"Copilot connector hub",aspectRatio:"6/5"}]},{type:"text",heading:"My Role",body:"I took over the project after initial explorations and worked as the primary designer for 7 weeks, partnering with a senior designer, PMs, and engineers. I led interaction design, visual design, prototyping, and cross-platform flows for desktop, mobile, and Copilot browser surfaces while shaping both merchant-specific and generic connector experiences."},{type:"carousel",images:[{src:"/assets/business-connectors/Connect Account.jpg",avif:"/assets/business-connectors/Connect Account.avif",webp:"/assets/business-connectors/Connect Account.webp",alt:"Merchant flow screenshot 1",aspectRatio:"16/9"},{src:"/assets/business-connectors/Password form.jpg",avif:"/assets/business-connectors/Password form.avif",webp:"/assets/business-connectors/Password form.webp",alt:"Merchant flow screenshot 2",aspectRatio:"16/9"},{src:"/assets/business-connectors/Connection SuccessfulDrk.jpg",avif:"/assets/business-connectors/Connection SuccessfulDrk.avif",webp:"/assets/business-connectors/Connection SuccessfulDrk.webp",alt:"Merchant flow screenshot 3",aspectRatio:"16/9"},{src:"/assets/business-connectors/Connection Successful.jpg",avif:"/assets/business-connectors/Connection Successful.avif",webp:"/assets/business-connectors/Connection Successful.webp",alt:"Merchant flow screenshot 4",aspectRatio:"6/5"},{src:"/assets/business-connectors/PDP + Connector UpsellDrk.jpg",avif:"/assets/business-connectors/PDP + Connector UpsellDrk.avif",webp:"/assets/business-connectors/PDP + Connector UpsellDrk.webp",alt:"Merchant flow screenshot 5",aspectRatio:"16/9"}]},{type:"quote",body:"Enable frictionless connection of loyalty accounts across multiple merchants."}]}},{id:"parallax-hero",layout:"parallax-reveal",heading:"Merchant-Specific Flows",body:"Designed complete flows for Target, Walmart, Home Depot, and Nordstrom. Users connect accounts from chat prompts or product detail surfaces, then move through native sign-in with clear progress and confirmation.",images:[{src:"/assets/business-connectors/Connectors3.jpg",avif:"/assets/business-connectors/Connectors3.avif",webp:"/assets/business-connectors/Connectors3.webp",alt:"Merchant connection flow",aspectRatio:"16/9"}],parallaxSpeed:.35},{id:"design-goals",layout:"three-column-feature",heading:"Design Goals",labels:["FRICTIONLESS","AI-POWERED","CONSISTENT","SCALABLE"],body:"Enable frictionless connection of loyalty accounts across merchants, surface AI-powered value at the right moments, and maintain consistency while supporting each merchant's native login requirements.",images:[{src:"/assets/business-connectors/Inline Cards + Connector Upsell-1.jpg",avif:"/assets/business-connectors/Inline Cards + Connector Upsell-1.avif",webp:"/assets/business-connectors/Inline Cards + Connector Upsell-1.webp",alt:"Design system and goals feature",aspectRatio:"16/9"}],accentColor:"#e8ded2"},{id:"ai-interactions",layout:"image-on-color-block",heading:"AI-Integrated Interactions",body:`Designed streaming "thinking" animations as AI processes account connections, with real-time badge updates and reward states across chat and product cards. These interactions create clarity without overwhelming the user and reinforce trust in the assistant's recommendations.`,images:[{src:"/assets/business-connectors/Inline Cards + Connector Upsell.jpg",avif:"/assets/business-connectors/Inline Cards + Connector Upsell.avif",webp:"/assets/business-connectors/Inline Cards + Connector Upsell.webp",alt:"AI thinking state",aspectRatio:"9/13"}],accentColor:"#d4e0ed"},{id:"details",layout:"staggered-pair",images:[{src:"/assets/business-connectors/Perks.jpg",avif:"/assets/business-connectors/Perks.avif",webp:"/assets/business-connectors/Perks.webp",alt:"Rewards badge",aspectRatio:"16/9"},{src:"/assets/business-connectors/Connector Settings 2.jpg",avif:"/assets/business-connectors/Connector Settings 2.avif",webp:"/assets/business-connectors/Connector Settings 2.webp",alt:"Product card integration",aspectRatio:"16/9"}]},{id:"reflection-quote",layout:"quote",body:"By reducing friction, personalizing interactions, and consolidating loyalty rewards, users gain real value — and Copilot creates a flywheel of engagement and trust.",heading:"Reflection",accentColor:"#333"},{id:"impact",layout:"text-only",heading:"Impact & Outcome",body:`Designs were approved by the Copilot council for flighting and established a scalable framework for connecting multiple merchant accounts inside Copilot. The work set a strong foundation for AI-native commerce by linking account connection, rewards intelligence, and trust-building interaction patterns across platforms.

By reducing connection friction and surfacing loyalty value at the right moments, Business Connectors makes Copilot more useful for real-world shopping decisions and long-term engagement.`}]},pv={slug:"copilot-pay",title:"Copilot Pay",subtitle:"Designing Microsoft's first native checkout inside Copilot",coverImage:{src:"/assets/copilot-pay/Property 1=Default.jpg",avif:"/assets/copilot-pay/Property 1=Default.avif",webp:"/assets/copilot-pay/Property 1=Default.webp",alt:"Copilot Pay checkout experience",aspectRatio:"16/9"},heroImage:{src:"/assets/copilot-pay/PDP.jpg",avif:"/assets/copilot-pay/PDP.avif",webp:"/assets/copilot-pay/PDP.webp",alt:"Copilot Pay product detail page with native checkout",aspectRatio:"16/9",objectFit:"contain",objectPosition:"center center",backgroundColor:"#ffffff"},transitionImages:[{src:"/assets/copilot-pay/Property 1=Default.jpg",alt:"Copilot Pay transition 1"},{src:"/assets/copilot-pay/PDP.jpg",alt:"Copilot Pay transition 2"},{src:"/assets/copilot-pay/Copilot pay 1.jpg",alt:"Copilot Pay transition 3"},{src:"/assets/copilot-pay/Copilot pay 2.jpg",alt:"Copilot Pay transition 4"},{src:"/assets/copilot-pay/Copilot pay 3.jpg",alt:"Copilot Pay transition 5"}],heroHeadline:"Bringing frictionless native checkout to Copilot shopping",meta:{client:"Copilot Pay | Microsoft Shopping",role:"Designer (interaction, visual, prototyping, design system)",timeline:"7 weeks",platform:"Browser / Desktop / Mobile"},sections:[{id:"overview",layout:"sticky-split",stickyContent:{image:{src:"/assets/copilot-pay/Bang & Olufsen Dark.jpg",avif:"/assets/copilot-pay/Bang & Olufsen Dark.avif",webp:"/assets/copilot-pay/Bang & Olufsen Dark.webp",alt:"Bang & Olufsen checkout flow in dark mode",aspectRatio:"4/3",backgroundColor:"#0f1220",imagePaddingBlock:"clamp(0.5rem, 1.2vw, 0.875rem)",objectFit:"contain",objectPosition:"center center"},tags:["AI COMMERCE","PAYMENTS UX","CROSS-PLATFORM","DESIGN SYSTEM"],collateralImages:[{src:"/assets/copilot-pay/Copilot pay 1.jpg",avif:"/assets/copilot-pay/Copilot pay 1.avif",webp:"/assets/copilot-pay/Copilot pay 1.webp",alt:"Copilot Pay mobile express checkout flow",aspectRatio:"16/9",backgroundColor:"#E7E7E7",imagePaddingBlock:"clamp(0.5rem, 1.2vw, 0.875rem)",objectFit:"contain",objectPosition:"center center"},{src:"/assets/copilot-pay/Copilot pay 2.jpg",avif:"/assets/copilot-pay/Copilot pay 2.avif",webp:"/assets/copilot-pay/Copilot pay 2.webp",alt:"Copilot Pay payment method setup flow",aspectRatio:"16/9",backgroundColor:"#E7E7E7",imagePaddingBlock:"clamp(0.5rem, 1.2vw, 0.875rem)",objectFit:"contain",objectPosition:"center center"},{src:"/assets/copilot-pay/Apple express.jpg",avif:"/assets/copilot-pay/Apple express.avif",webp:"/assets/copilot-pay/Apple express.webp",alt:"Apple Pay express checkout flow",aspectRatio:"16/9",backgroundColor:"#E7E7E7",imagePaddingBlock:"clamp(0.5rem, 1.2vw, 0.875rem)",objectFit:"contain",objectPosition:"center center"},{src:"/assets/copilot-pay/Paypal express.jpg",avif:"/assets/copilot-pay/Paypal express.avif",webp:"/assets/copilot-pay/Paypal express.webp",alt:"PayPal express checkout flow",aspectRatio:"16/9",backgroundColor:"#E7E7E7",imagePaddingBlock:"clamp(0.5rem, 1.2vw, 0.875rem)",objectFit:"contain",objectPosition:"center center"}]},scrollContent:{blocks:[{type:"text",heading:"Overview",body:"Copilot Pay is Microsoft's first native checkout inside Copilot across browser, desktop, and mobile. It surfaces Buy buttons on product cards and PDPs, then enables express checkout through Apple Pay, PayPal, Venmo, Google Pay, Shop Pay, and Amazon Pay. Before this work, users were redirected to retailer sites, which introduced friction and broke continuity."},{type:"text",heading:"Team & Role",body:"I worked with a principal designer, PM, and engineers over a 7 week sprint, leading interaction design, visual design, prototyping, and design system work. My focus was making native wallet checkout feel coherent inside Copilot while staying scalable across platforms and partner payment experiences."},{type:"carousel",images:[{src:"/assets/copilot-pay/card1.jpg",avif:"/assets/copilot-pay/card1.avif",webp:"/assets/copilot-pay/card1.webp",alt:"Copilot Pay recommendation card surface",aspectRatio:"16/9",backgroundColor:"#ffffff",imagePaddingBlock:"clamp(0.5rem, 1.2vw, 0.875rem)",objectFit:"contain",objectPosition:"center center"},{src:"/assets/copilot-pay/card2.jpg",avif:"/assets/copilot-pay/card2.avif",webp:"/assets/copilot-pay/card2.webp",alt:"Copilot Pay wallet selection modal",aspectRatio:"16/9",backgroundColor:"#ffffff",imagePaddingBlock:"clamp(0.5rem, 1.2vw, 0.875rem)",objectFit:"contain",objectPosition:"center center"},{src:"/assets/copilot-pay/card3.jpg",avif:"/assets/copilot-pay/card3.avif",webp:"/assets/copilot-pay/card3.webp",alt:"Copilot Pay order details and payment setup flow",aspectRatio:"16/9",backgroundColor:"#ffffff",imagePaddingBlock:"clamp(0.5rem, 1.2vw, 0.875rem)",objectFit:"contain",objectPosition:"center center"}]},{type:"quote",body:"Enable frictionless checkout inside Copilot while standardizing visual and interaction patterns across native wallets."}]}},{id:"goals",layout:"three-column-feature",heading:"Goals",labels:["FRICTIONLESS","CONSISTENT","SCALABLE","AI COMMERCE"],body:"The project focused on keeping users inside Copilot through checkout, standardizing payment interactions across multiple wallet brands, and expanding Microsoft's AI commerce capabilities with a reusable foundation for future shopping flows.",images:[{src:"/assets/copilot-pay/Pay CMC Background + PDP.jpg",avif:"/assets/copilot-pay/Pay CMC Background + PDP.avif",webp:"/assets/copilot-pay/Pay CMC Background + PDP.webp",alt:"Copilot Pay desktop commerce experience",aspectRatio:"16/9",backgroundColor:"#ffffff"}],accentColor:"#e6f1ff"},{id:"responsibilities",layout:"text-only",heading:"Responsibilities",body:`Designed express checkout flows for desktop and mobile.

Created an intermediate screen showing all payment options before opening native wallets.

Evaluated button placement above and below product info for usability across devices.

Rebuilt and expanded the Copilot Pay component library across product cards, carousels, PDP side panels, checkout sheets, input fields, order summary, confirmation pages, and payment icons.

Standardized design tokens, spacing, typography, light and dark modes, and color consolidation.

Built prototypes and internal specs to align the work with cross-team design standards.`},{id:"wallet-systems",layout:"image-on-color-block",heading:"Designing Across Native Wallets",body:"One of the core challenges was integrating multiple native wallet experiences, each with different branding, affordances, and interaction expectations, without making Copilot feel fragmented. The solution was an intermediate selection screen and a tighter component system that kept the transition into each wallet legible and predictable.",images:[{src:"/assets/copilot-pay/Bang & Olufsen.jpg",avif:"/assets/copilot-pay/Bang & Olufsen.avif",webp:"/assets/copilot-pay/Bang & Olufsen.webp",alt:"Bang & Olufsen native checkout flow",aspectRatio:"16/9",backgroundColor:"#ffffff",borderRadius:"12px",containerBorder:"1px solid #d4d4d4",containerBorderRadius:"12px",containerShadow:"none",imagePaddingBlock:"clamp(0.5rem, 1.2vw, 0.875rem)",objectFit:"contain",objectPosition:"center center"}],accentColor:"#f3efe7"},{id:"cross-platform",layout:"staggered-pair",images:[{src:"/assets/copilot-pay/Property 1=Default.jpg",avif:"/assets/copilot-pay/Property 1=Default.avif",webp:"/assets/copilot-pay/Property 1=Default.webp",alt:"Desktop Copilot Pay recommendation surface"},{src:"/assets/copilot-pay/Copilot pay 3.jpg",avif:"/assets/copilot-pay/Copilot pay 3.avif",webp:"/assets/copilot-pay/Copilot pay 3.webp",alt:"Mobile Copilot Pay multi-step checkout experience",aspectRatio:"16/9"}]},{id:"challenges",layout:"text-only",heading:"Challenges",body:`Multiple native wallet UIs introduced different branding and interaction patterns.

Desktop and mobile needed to feel consistent without ignoring platform-specific constraints.

The component library needed to scale quickly while remaining reusable for future AI commerce scenarios.

Express checkout had to slot naturally into both product cards and PDPs without breaking the shopping flow.`},{id:"impact",layout:"quote",heading:"Impact",body:"Copilot Pay establishes Microsoft's first frictionless native checkout inside Copilot, creates a robust design-system foundation for future AI-assisted commerce, and supports seamless shopping across Microsoft platforms with scalable, consistent components.",accentColor:"#222222"}]},mv={slug:"journeys",title:"Journeys",subtitle:"My Shopping for Microsoft Shopping",coverImage:{src:"/assets/journeys/Journeys L2.jpg",avif:"/assets/journeys/Journeys L2.avif",webp:"/assets/journeys/Journeys L2.webp",alt:"Journeys dashboard with personalized shopping modules",aspectRatio:"16/9"},heroImage:{src:"/assets/journeys/Journeys L2.jpg",avif:"/assets/journeys/Journeys L2.avif",webp:"/assets/journeys/Journeys L2.webp",alt:"Journeys dashboard with personalized shopping modules",aspectRatio:"16/9",objectFit:"cover",objectPosition:"center center"},transitionImages:[{src:"/assets/journeys/Browser wrapper.jpg",alt:"Journeys landing experience in Microsoft Shopping"},{src:"/assets/journeys/102.jpg",alt:"Journeys shopping dashboard with notifications and resume-shopping modules"},{src:"/assets/journeys/Shopping toast notification4.jpg",alt:"Journeys shopping notification toast surfaced on Windows"},{src:"/assets/journeys/202.jpg",alt:"Journeys shopping layout with style inspiration and shopping modules"},{src:"/assets/journeys/Saved products high information layout.jpg",alt:"Journeys saved products module with retailer comparisons"}],heroHeadline:"Designing a calmer shopping hub around real user journeys",meta:{client:"My Shopping / Journeys | Microsoft Shopping",role:"Mid-level designer partnering with a principal designer",timeline:"Placeholder case study",platform:"Browser / Copilot / Microsoft ecosystem"},sections:[{id:"overview",layout:"sticky-split",stickyContent:{fullBleedImage:!0,image:{src:"/assets/journeys/Browser wrapper.jpg",avif:"/assets/journeys/Browser wrapper.avif",webp:"/assets/journeys/Browser wrapper.webp",alt:"Journeys landing experience in Microsoft Shopping",aspectRatio:"16/9",objectFit:"cover",objectPosition:"center center"},tags:["SHOPPING UX","PERSONALIZATION","AI COMMERCE","SYSTEM THINKING"],collateralImages:[{src:"/assets/journeys/Cold start.jpg",avif:"/assets/journeys/Cold start.avif",webp:"/assets/journeys/Cold start.webp",alt:"Journeys onboarding flow for following favorite stores",aspectRatio:"16/9",backgroundColor:"#f6f8fc",imagePaddingBlock:"clamp(0.5rem, 1.2vw, 0.875rem)",objectFit:"contain",objectPosition:"center center"},{src:"/assets/journeys/Connecting.jpg",avif:"/assets/journeys/Connecting.avif",webp:"/assets/journeys/Connecting.webp",alt:"Journeys account connection loading state",aspectRatio:"16/9",backgroundColor:"#f6f8fc",imagePaddingBlock:"clamp(0.5rem, 1.2vw, 0.875rem)",objectFit:"contain",objectPosition:"center center"},{src:"/assets/journeys/My profile.jpg",avif:"/assets/journeys/My profile.avif",webp:"/assets/journeys/My profile.webp",alt:"Journeys account connections and profile management",aspectRatio:"16/9",backgroundColor:"#f6f8fc",imagePaddingBlock:"clamp(0.5rem, 1.2vw, 0.875rem)",objectFit:"contain",objectPosition:"center center"},{src:"/assets/journeys/User launches Edge browser to see recommended product3.jpg",alt:"Journeys product detail experience with browser-side shopping recommendations",aspectRatio:"16/9",backgroundColor:"#f6f8fc",imagePaddingBlock:"clamp(0.5rem, 1.2vw, 0.875rem)",objectFit:"contain",objectPosition:"center center"}]},scrollContent:{blocks:[{type:"text",heading:"Problem",body:"Online shopping involves multiple steps, platforms, and mental load. Users struggle to track their activity across products, retailers, and categories, and often feel uncertain about purchases, price drops, deals, and product discovery. The challenge was to create a central hub that simplifies shopping, helps users save money, and surfaces insights tailored to where they are in the journey."},{type:"text",heading:"Role & Collaboration",body:"I collaborated with a principal designer as a mid-level designer on this project. My work included designing three user flow scenarios, interaction models, and feed-based versus static hub layouts. I worked closely with PMs, engineers, and researchers to prototype and iterate while keeping the experience calm, visually clear, and practical."},{type:"text",heading:"Approach & Features",body:`We defined three journey stages. Early focused on discovery with highlights from recent activity, curated recommendations, insights on new brands or categories, recently viewed products, and buying guides. Mid focused on narrowing choices with price drops, top options with reasoning, product comparisons, tracked items, and store recommendations. Late and post-purchase focused on package tracking, pending cashback, complementary recommendations, Copilot prompts, and routine guides.

Key features I designed included activity summaries, recommendations with filters, insights modules, recently viewed items, buying guides, cashback and deals integration, and Copilot-powered chat prompts for follow-up questions. Feed-based layouts helped disperse dense information into a format that felt more digestible and easier to trust.`},{type:"quote",body:"The work explored how a browser can surface holistic shopping intelligence that retailers alone cannot provide."}]}},{id:"discovery-entry-surface",layout:"full-width-image",disableCompactPadding:!0,images:[{src:"/assets/journeys/Exploration 5.jpg",avif:"/assets/journeys/Exploration 5.avif",webp:"/assets/journeys/Exploration 5.webp",alt:"Journeys exploration surface with discovery cards and notifications",aspectRatio:"16/9"}]},{id:"journey-stages",layout:"three-column-feature",heading:"Journey Stages",labels:["EARLY","MID","LATE / POST-PURCHASE"],body:"Journeys was structured around changing user intent. The system shifts from exploration and inspiration, to comparison and confidence-building, to post-purchase tracking and support. That framing made it possible to prioritize the right content at the right moment instead of treating shopping like one generic feed.",images:[{src:"/assets/journeys/Returning user5.jpg",alt:"Journeys returning user view with personalized shopping context",aspectRatio:"16/9",objectFit:"cover",objectPosition:"center center"}],accentColor:"#dce8ff"},{id:"recent-activity-surface",layout:"full-width-image",disableCompactPadding:!0,images:[{src:"/assets/journeys/Journeys L22.jpg",avif:"/assets/journeys/Journeys L22.avif",webp:"/assets/journeys/Journeys L22.webp",alt:"Journeys recently viewed surface with category and product ranking",aspectRatio:"16/9"}]},{id:"feed-based-clarity",layout:"image-on-color-block",heading:"Feed-Based Clarity",body:"A core design decision was testing feed-based layouts against more static hub models. The feed approach made recommendations, insights, tracked products, and follow-up prompts feel visually dispersed and easier to scan, which helped balance information density with clarity and reduced the sense of promotional overload.",images:[{src:"/assets/journeys/High information layout6.jpg",avif:"/assets/journeys/High information layout6.avif",webp:"/assets/journeys/High information layout6.webp",alt:"Journeys high-information feed layout with dense recommendation modules",aspectRatio:"16/9",objectFit:"cover",objectPosition:"center center"}],accentColor:"#edf5ff"},{id:"exploration-surface",layout:"full-width-image",disableCompactPadding:!0,images:[{src:"/assets/journeys/Journeys L23.jpg",avif:"/assets/journeys/Journeys L23.avif",webp:"/assets/journeys/Journeys L23.webp",alt:"Journeys exploration feed with category-led shopping discovery",aspectRatio:"16/9"}]},{id:"purchase-support-surface",layout:"full-width-image",disableCompactPadding:!0,images:[{src:"/assets/journeys/Journeys L26.jpg",avif:"/assets/journeys/Journeys L26.avif",webp:"/assets/journeys/Journeys L26.webp",alt:"Journeys purchase support view with savings and delivery insights",aspectRatio:"16/9"}]},{id:"outcome",layout:"text-only",heading:"Outcome",body:`The project was never flighted in Bing, but it informed the Journeys flows that later shipped in Microsoft Copilot. The work reinforced a broader product lesson: meaningful shopping assistance comes from combining content, context, and AI-driven insights in ways that do not look or behave like traditional retail surfaces.

    The case study now highlights key frames from onboarding, account connection, personalized feeds, and saved-product management so the story reads as a connected system rather than a single static screen.`}]},gv=[fv,pv,mv],yv=k.lazy(()=>Ee(()=>import("./Resume-8PDQLP0c.js"),__vite__mapDeps([3,1,2]),import.meta.url)),xv=k.lazy(()=>Ee(()=>Promise.resolve().then(()=>Sf),void 0,import.meta.url)),vv=k.lazy(()=>Ee(()=>Promise.resolve().then(()=>Xh),void 0,import.meta.url)),wv=k.lazy(()=>Ee(()=>import("./Graphicdesign-TZ3QCw3z.js"),__vite__mapDeps([4,1,2]),import.meta.url)),bv=k.lazy(()=>Ee(()=>import("./Outsource-DxCZqhgv.js"),__vite__mapDeps([5,1,2]),import.meta.url)),_v=k.lazy(()=>Ee(()=>import("./UX-CctM5W02.js"),__vite__mapDeps([6,1,2]),import.meta.url)),Tv=k.lazy(()=>Ee(()=>import("./ThreePillars-W-kTv3xR.js"),__vite__mapDeps([7,1,2]),import.meta.url)),kv=k.lazy(()=>Ee(()=>import("./Piton-ldEWEQGG.js"),__vite__mapDeps([8,1,2,6]),import.meta.url)),Pv=k.lazy(()=>Ee(()=>import("./Microsoft-3a-ZYamw.js"),__vite__mapDeps([9,1,2]),import.meta.url)),Cv=k.lazy(()=>Ee(()=>import("./BusinessConnectors-CcaVg8kS.js"),__vite__mapDeps([10,1,2,11]),import.meta.url)),Sv=k.lazy(()=>Ee(()=>import("./CopilotPay-CkXqx9xs.js"),__vite__mapDeps([12,1,2,11]),import.meta.url)),jv=k.lazy(()=>Ee(()=>import("./Journeys-CP-yARS9.js"),__vite__mapDeps([13,1,2,11]),import.meta.url));function Av(){const[t,e]=k.useState("light"),[i,n]=k.useState(!1),[s,r]=k.useState(!1),o=k.useRef(null),a=k.useRef(null);k.useEffect(()=>{const c=gv.flatMap(d=>d.transitionImages);c.length>0&&J1(c)},[]),k.useEffect(()=>{const c=d=>{const h=d.target;h instanceof HTMLElement&&(h.tagName==="INPUT"||h.tagName==="TEXTAREA"||h.tagName==="SELECT"||h.isContentEditable)||((d.key==="?"||d.key==="/"&&d.shiftKey)&&(d.preventDefault(),n(!0)),d.key==="Escape"&&n(!1))};return window.addEventListener("keydown",c),()=>window.removeEventListener("keydown",c)},[]),k.useEffect(()=>{if(!i)return;a.current=document.activeElement;const c=document.body.style.overflow,d=document.body.style.paddingRight,h=window.innerWidth-document.documentElement.clientWidth;h>0&&(document.body.style.paddingRight=`${h}px`),document.body.style.overflow="hidden";const m=window.setTimeout(()=>{o.current?.focus()},0);return()=>{window.clearTimeout(m),document.body.style.overflow=c,document.body.style.paddingRight=d,a.current instanceof HTMLElement&&a.current.getAttribute("data-carousel-frame")!=="true"&&a.current.focus()}},[i]);const l=()=>{n(!1)},u=c=>{if(c.key==="Escape"){c.preventDefault(),l();return}if(c.key!=="Tab")return;const d=o.current;if(!d)return;const h=d.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');if(h.length===0){c.preventDefault(),d.focus();return}const m=h[0],g=h[h.length-1];if(c.shiftKey&&document.activeElement===m){c.preventDefault(),g.focus();return}!c.shiftKey&&document.activeElement===g&&(c.preventDefault(),m.focus())};return k.useEffect(()=>{function c(){r(!0)}return window.addEventListener("intro-animation-done",c),()=>window.removeEventListener("intro-animation-done",c)},[]),f.jsxs(rd,{theme:t==="light"?Xn:Yn,children:[f.jsx(dd,{}),f.jsxs("div",{className:"App",children:[f.jsxs(od,{children:[f.jsx(pd,{}),f.jsx(Dd,{}),s&&f.jsx("button",{type:"button",className:"shortcuts-pill",onClick:()=>n(!0),"aria-label":"Open keyboard shortcuts help",children:"? Shortcuts"}),i&&f.jsx("div",{role:"presentation",onClick:l,style:{position:"fixed",inset:0,zIndex:120,background:"rgba(0, 0, 0, 0.55)",display:"grid",placeItems:"center",padding:"1.25rem"},children:f.jsxs("div",{ref:o,role:"dialog","aria-modal":"true","aria-labelledby":"keyboard-shortcuts-title","aria-describedby":"keyboard-shortcuts-description",tabIndex:-1,onClick:c=>c.stopPropagation(),onKeyDown:u,style:{width:"min(520px, 100%)",background:"#ffffff",color:"#111827",borderRadius:"14px",border:"1px solid #e5e7eb",boxShadow:"0 30px 80px rgba(0, 0, 0, 0.35)",padding:"1.2rem 1.2rem 1rem"},children:[f.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"1rem"},children:[f.jsx("h2",{id:"keyboard-shortcuts-title",style:{margin:0,fontSize:"1.05rem",fontWeight:700},children:"Keyboard Shortcuts"}),f.jsx("button",{type:"button",onClick:l,"aria-label":"Close keyboard shortcuts help",style:{border:"1px solid #d1d5db",background:"#ffffff",borderRadius:"8px",padding:"0.25rem 0.5rem",cursor:"pointer"},children:"Esc"})]}),f.jsx("p",{id:"keyboard-shortcuts-description",style:{margin:"0.75rem 0 1rem",color:"#4b5563",fontSize:"0.92rem"},children:"Use these shortcuts to navigate transitions and media quickly."}),f.jsxs("ul",{style:{listStyle:"none",margin:0,padding:0,display:"grid",gap:"0.6rem"},children:[f.jsxs("li",{style:{display:"flex",justifyContent:"space-between",gap:"1rem"},children:[f.jsx("strong",{children:"? "}),f.jsx("span",{children:"Open this help panel"})]}),f.jsxs("li",{style:{display:"flex",justifyContent:"space-between",gap:"1rem"},children:[f.jsx("strong",{children:"Esc"}),f.jsx("span",{children:"Skip case study transition animation"})]}),f.jsxs("li",{style:{display:"flex",justifyContent:"space-between",gap:"1rem"},children:[f.jsx("strong",{children:"Esc"}),f.jsx("span",{children:"Close this panel"})]}),f.jsxs("li",{style:{display:"flex",justifyContent:"space-between",gap:"1rem"},children:[f.jsx("strong",{children:"← / →"}),f.jsx("span",{children:"Navigate image carousel slides"})]})]})]})}),f.jsx(k.Suspense,{fallback:f.jsx("div",{style:{position:"fixed",inset:0,zIndex:100,background:t==="light"?Xn.backgroundColor:Yn.backgroundColor,color:t==="light"?Xn.fontColor:Yn.fontColor,display:"grid",placeItems:"center",fontFamily:"Space Grotesk, sans-serif",letterSpacing:"0.04em"},children:"Loading…"}),children:f.jsxs(ad,{children:[f.jsx(pe,{path:"/",element:f.jsx(hv,{})}),f.jsx(pe,{path:"/MacTavish",element:f.jsx(xl,{})}),f.jsx(pe,{path:"/Giga",element:f.jsx(vv,{})}),f.jsx(pe,{path:"/AccessDirect",element:f.jsx(xv,{})}),f.jsx(pe,{path:"/Outsource",element:f.jsx(bv,{})}),f.jsx(pe,{path:"/GraphicDesign",element:f.jsx(wv,{})}),f.jsx(pe,{path:"/Ux",element:f.jsx(_v,{})}),f.jsx(pe,{path:"/ThreePillars",element:f.jsx(Tv,{})}),f.jsx(pe,{path:"/Piton",element:f.jsx(kv,{})}),f.jsx(pe,{path:"/Microsoft",element:f.jsx(Pv,{})}),f.jsx(pe,{path:"/BusinessConnectors",element:f.jsx(Cv,{})}),f.jsx(pe,{path:"/CopilotPay",element:f.jsx(Sv,{})}),f.jsx(pe,{path:"/Journeys",element:f.jsx(jv,{})}),f.jsx(pe,{path:"/Resume",element:f.jsx(yv,{})}),f.jsx(pe,{path:"*",element:f.jsx(ld,{to:"/",replace:!0})})]})})]}),!1]})]})}nd.createRoot(document.getElementById("root")).render(f.jsx(k.StrictMode,{children:f.jsx(Av,{})}));export{yi as A,J1 as B,Bh as C,pr as D,gv as E,Ev as F,Dv as G,Q1 as H,iv as I,sp as J,cr as K,Zf as L,Lr as M,fi as N,oo as O,Gh as P,uu as Q,Pe as R,fr as S,ri as T,td as U,oi as a,si as b,Lt as c,oe as d,kf as e,ol as f,dr as g,hr as h,et as i,tt as j,it as k,If as l,Of as m,ul as n,cl as o,re as p,Mf as q,Rf as r,Ue as s,Lf as t,Ef as u,Df as v,nv as w,zh as x,lr as y,ll as z};
