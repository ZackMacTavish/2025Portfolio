const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./About-DRDM1gzW.js","./three-DiqYTQvC.js","./vendor-DvgG4lPf.js","./three-BFNOjwBz.js","./hangingquilts-CHhX4Dwf.js","./AD-DhSxpEfq.js","./Graphicdesign--32PbA6Z.js","./LandingPage-D0R6whk2.js","./LeysiApp—Screens copy-CsLIUfOG.js","./ThreePillars—pages-CYFcPa7V.js","./Group 55618@2x-DOtc8T7w.js","./BrandGuidelines—Mockup-D_jcKRPT.js","./Outsource-BwK5ydmI.js","./UX-DKLTG637.js","./ThreePillars-WvfchSHf.js","./Piton-C5yRG5l5.js","./Microsoft-BIiRst5z.js","./IntroAnimation-DVouQnav.js"])))=>i.map(i=>d[i]);
import{j as e,_ as l,c as P}from"./three-DiqYTQvC.js";import{u as D,c as o,b as t,l as f,L as y,K as A,H as R,d as T,e as i,N as O}from"./vendor-DvgG4lPf.js";(function(){const p=document.createElement("link").relList;if(p&&p.supports&&p.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))m(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&m(c)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function m(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();const S={backgroundColor:"#3F4739",backgroundTwo:"white",fontColor:"#5D5D5D"},C={backgroundColor:"#303030",backgroundTwo:"#303030",fontColor:"#a1a1a1"},I=D`

body {

    background-color: ${a=>a.theme.backgroundColor};
   
}
`,M=D`
  html, body, * { cursor: none !important; }
`,X=o.div`
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
  transition: background-color 0.3s ease, box-shadow 0.3s ease; /* smoother visual hover while keeping movement snappy */
  display: none;

  &.hovered {
    background-color: #E88D67;
    box-shadow: 0 0 12px 6px rgba(232,141,103,0.6);
  }

  &.visible {
    display: block;
  }
`,F=()=>{const[a,p]=t.useState(!1),n=t.useRef(null),m=t.useRef(!1),r=t.useRef(1),s=t.useRef({x:0,y:0}),c=t.useRef({x:0,y:0}),x=t.useRef(!1);return t.useEffect(()=>{const h=()=>p(window.innerWidth<=450);return h(),window.addEventListener("resize",h),()=>window.removeEventListener("resize",h)},[]),t.useEffect(()=>{if(a)return;const h=d=>{if(!n.current)return;const g=d.clientX-n.current.clientWidth/2,v=d.clientY-n.current.clientHeight/2;x.current?(s.current={x:g,y:v},n.current.classList.add("visible")):(c.current={x:g,y:v},s.current={x:g,y:v},n.current.classList.add("visible"),x.current=!0)},b=()=>{n.current&&n.current.classList.remove("visible")},j=()=>{document.visibilityState==="hidden"?b():x.current=!1},w=()=>{if(n.current&&x.current){c.current.x+=(s.current.x-c.current.x)*.9,c.current.y+=(s.current.y-c.current.y)*.9;const d=m.current?.3:1;r.current+=(d-r.current)*.22,n.current.style.transform=`translate3d(${c.current.x}px, ${c.current.y}px, 0) scale(${r.current})`}requestAnimationFrame(w)},_='a, button, input, textarea, select, [role="link"], [role="button"], [data-cursor="link"], [data-route], [data-routes-to], .nav-link, .router-link, .link, .btn',L=d=>{d.target.closest(_)&&n.current&&(m.current=!0,n.current.classList.add("hovered"))},E=d=>{d.relatedTarget&&(d.relatedTarget.closest&&d.relatedTarget.closest(_))||n.current&&(m.current=!1,n.current.classList.remove("hovered"))};return document.addEventListener("mousemove",h),document.addEventListener("mouseleave",b),document.addEventListener("visibilitychange",j),document.addEventListener("mouseover",L),document.addEventListener("mouseout",E),w(),()=>{document.removeEventListener("mousemove",h),document.removeEventListener("mouseleave",b),document.removeEventListener("visibilitychange",j),document.removeEventListener("mouseover",L),document.removeEventListener("mouseout",E)}},[a]),e.jsxs(e.Fragment,{children:[e.jsx(M,{}),!a&&e.jsx(X,{ref:n})]})},V="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2025.4.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%20236.2%20238.3'%20style='enable-background:new%200%200%20236.2%20238.3;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%23FFFFFF;}%20.st1{fill:%23678983;}%20.st2{fill:%2395C4BC;}%20%3c/style%3e%3cpath%20class='st0'%20d='M236,124.2c-0.1-0.2-0.2-0.4-0.4-0.5L236,124.2L236,124.2z'/%3e%3cpath%20class='st1'%20d='M208.3,93c0.7-0.8,1.8-1.1,2.8-1c3.1,0.4,6,1.5,8.6,3.1c2.6,1.5,4.9,3.4,6.9,5.7c1.8,2.1,2.6,3.8,2.5,5%20c-0.1,0.9-0.4,1.7-0.8,2.5c-0.4,0.8-0.9,1.1-1.5,1c-0.7-0.1-1.4-0.4-2.1-0.8c-0.3-0.2-1.2-0.6-2.6-1.4c-1.7-0.9-3.5-1.6-5.3-2.1%20c-2.3-0.7-4.7-1.2-7.2-1.5c-2.4-0.3-3.4-2.1-3-5.4l0.2-1.6C206.9,95.3,207.4,94,208.3,93z'/%3e%3cpath%20class='st2'%20d='M176.6,117.4c-1.7,0.9-3.9,0.3-4.8-1.4c-0.9-1.7-0.3-3.9,1.4-4.8c0,0,0.1-0.1,0.1-0.1%20c6.8-3.5,14.3-5.7,21.9-6.4l6.5-41.1c0.9-5.5,1.7-11.2,0.9-16.7c-0.8-5.6-3.6-11.1-8.6-13.8c-4.9-2.7-10.9-2.2-15.8,0.1%20s-8.9,6.4-12.2,10.8c-20,26.3-19.4,48.4-28.4,94.2h-5.2c0-0.3,0.1-0.6,0.1-0.9l13.1-81.7c1.1-6.7,2.1-13.5,0.9-20.1%20c-1.2-6.6-5.2-13.2-11.5-15.6c-5.7-2.2-12.4-0.6-17.4,3s-8.7,8.7-11.7,14C99.3,48.2,95,60.6,91.8,73.4c0.2-22.7-4.4-40.6-13.8-53.5%20C70.3,9.2,58.5,2.1,45.4,0.4h-0.3C24.5-2.4,5.6,12.1,2.8,32.8s11.7,39.6,32.4,42.3c18.1,2.4,35.4-8.5,40.9-26%20c-0.5-2.1-1.2-4.3-2-6.3c-4.6-11.7-13.8-21.1-25.3-26c-1.8-0.8-2.6-3-1.7-4.7c0.8-1.7,2.8-2.5,4.5-1.8c19,8.1,30.8,25.9,32.7,46.2%20c1.4,14.8,0,30.4-2.1,45c-1.1,7.6-2.6,15.1-4.3,22.6c-0.4,2-6.1,21.7-5.6,22c3.5,1.9,6.9,4.1,10.1,6.6c1.6,1.2,1.8,3.5,0.6,5%20c-1.2,1.6-3.5,1.8-5,0.6l0,0c-23.6-18.3-49.2-15.5-66.9,7.2c-17.4,22.4-14,54.5,7.7,72.8l55.3-20.7c0.6-0.4,1.2-0.9,1.7-1.3%20c5.4-4.8,6.9-12.5,8.1-19.7l17.1-103c0.4-2.2,0.8-4.5,2.2-6.2c1.4-1.7,4.1-2.6,5.9-1.3c1.8,1.3,1.7,4.1,1.4,6.4L95.2,209%20c12.7-3.9,25.2-8.2,37.5-13c3.4-1.3,6.8-2.7,9.3-5.4c3-3.3,3.9-8,4.7-12.4l14.4-83.1c0.2-1.9,0.8-3.8,1.9-5.4%20c1.2-1.5,3.5-2.3,5.1-1.3c1.8,1.2,1.7,3.8,1.5,6l-7.7,60.9c-0.8,6.7-1.7,13.6-0.3,20.2c1.2,5.4,4.1,10.6,8.6,13.6%20c1,0.7,2.2,1.3,3.4,1.7c7.1,2.5,14.9-0.5,21.3-4.4c21.8-13.2,36.9-35.2,41.3-60.3c0-0.2,0.1-0.3,0.1-0.5%20C220.1,110.6,196.2,107.2,176.6,117.4z'/%3e%3c/svg%3e",Y=f`
  0% { transform: translateX(-40%) translateY(0); opacity: 1; }
  25% { transform: translateX(-35%) translateY(-5px); opacity: 0.9; }
  50% { transform: translateX(-30%) translateY(3px); opacity: 0.8; }
  75% { transform: translateX(-35%) translateY(-2px); opacity: 0.9; }
  100% { transform: translateX(-40%) translateY(0); opacity: 0.85; }
`,G=f`
  0% { transform: translateX(140%) translateY(0); opacity: 1; }
  25% { transform: translateX(135%) translateY(4px); opacity: 0.95; }
  50% { transform: translateX(130%) translateY(-3px); opacity: 0.9; }
  75% { transform: translateX(135%) translateY(2px); opacity: 0.95; }
  100% { transform: translateX(140%) translateY(0); opacity: 0.9; }
`,z=o.span`
  position: absolute;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0,255,255,0.6) 0%, rgba(255,192,203,0.35) 60%, transparent 100%);
  filter: blur(70px);
  pointer-events: none;
  z-index: 997;
`,N=o(z)`
  left: 0;
  animation: ${Y} 6s ease-in-out infinite;
`,$=o(z)`
  right: 0;
  animation: ${G} 6s ease-in-out infinite;
`,k=f`
  0% { transform: translateX(0); opacity: 1; }
  33% { transform: translateX(calc(100vw - 650px)); opacity: 1; }
  66% { transform: translateX(0); opacity: 1; }
  85% { transform: translateX(50vw); opacity: 0; }
  100% { transform: translateX(0); opacity: 0; }
`,B=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(6px);
  position: fixed;
  width: 100vw;
  height: 8vh;
  padding: 0 3vw;
  z-index: 1000;
`,H=o.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 8px;
  pointer-events: none;
  overflow: visible;
`,K=o.span`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 650px;
  height: 1pt;
  background-color: #E88D67;
  mask-image: linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%);
  -webkit-mask-image: linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%);
  animation: ${k} 10s ease-in-out forwards;
  z-index: 998;
`,W=o.span`
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
  animation: ${k} 10s ease-in-out forwards;
  z-index: 999;
`,U=f`
  0% { background-position: 0% 0; }
  50% { background-position: 50% 0; }
  100% { background-position: 0% 0; }
`,q=o.span`
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
  animation: ${k} 10s ease-in-out forwards;

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
    animation: ${U} 2s ease-in-out infinite;
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
`,J=o.img`
  width: clamp(46px, 2.6vw, 90px);
  transition: all 0.3s ease;

  &:hover {
    filter: invert(0.2) sepia(0.5) saturate(11.7) hue-rotate(313.2deg) brightness(1.2);
  }
`,Q=o.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding-right: 6vw;
  max-width: calc(100vw - 6vw);
`,Z=o.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 1.5rem;

  @media (max-width: 1200px) { gap: 1rem; }
  @media (max-width: 800px) { gap: 0.8rem; font-size: 1rem; }
`,ee=o.span`
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
`,te=o.li`
  position: relative;
  white-space: nowrap;

  &:hover > div {
    display: block;
  }
`;o(y)`
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
`;const re=o.div`
  position: absolute;
  top: 100%;
  right: 0; /* Changed from left: 0 to right: 0 */
  background-color: rgba(74, 74, 74, 0.9);
  backdrop-filter: blur(6px);
  border-radius: 0.25rem;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  display: none;
  min-width: 10rem; /* Increased from 8rem */
  z-index: 1000;
`,u=o(y)`
  display: block;
  padding: 0.75rem 1rem;
  color: white;
  text-decoration: none;
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    background-color: rgba(166, 209, 202, 0.4);
    color: white;
  }
`;o.div`
  height: 1px;
  background-color: rgba(255, 255, 255, 0.3);
  margin: 0.25rem 0;
`;function oe(){return e.jsxs(B,{children:[e.jsx(y,{to:"/MacTavish",style:{cursor:"none"},children:e.jsx(J,{src:V})}),e.jsxs(Q,{children:[e.jsx(Z,{children:e.jsxs(te,{children:[e.jsx(ee,{children:"Projects"}),e.jsxs(re,{children:[e.jsx(u,{to:"/Microsoft",children:"Microsoft"}),e.jsx(u,{to:"/Outsource",children:"Outsource"}),e.jsx(u,{to:"/Ux",children:"Leysi"}),e.jsx(u,{to:"/Piton",children:"Piton"}),e.jsx(u,{to:"/ThreePillars",children:"Three Pillars"}),e.jsx(u,{to:"/AccessDirect",children:"Access Direct"}),e.jsx(u,{to:"/Giga",children:"Giga"}),e.jsx(u,{to:"/GraphicDesign",children:"Graphic Design"})]})]})}),e.jsxs(H,{children:[e.jsx(K,{}),e.jsx(W,{}),e.jsx(q,{}),e.jsx(N,{}),e.jsx($,{})]})]})]})}const ne=t.lazy(()=>l(()=>import("./About-DRDM1gzW.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url)),se=t.lazy(()=>l(()=>import("./AD-DhSxpEfq.js").then(a=>a.A),__vite__mapDeps([5,1,2]),import.meta.url)),ae=t.lazy(()=>l(()=>import("./AD-DhSxpEfq.js").then(a=>a.m),__vite__mapDeps([5,1,2]),import.meta.url)),ie=t.lazy(()=>l(()=>import("./Graphicdesign--32PbA6Z.js"),__vite__mapDeps([6,1,2,5,0,3,4]),import.meta.url)),ce=t.lazy(()=>l(()=>import("./LandingPage-D0R6whk2.js"),__vite__mapDeps([7,1,2,5,4,8,9,10,11]),import.meta.url)),le=t.lazy(()=>l(()=>import("./Outsource-BwK5ydmI.js"),__vite__mapDeps([12,1,2,5,11]),import.meta.url)),de=t.lazy(()=>l(()=>import("./UX-DKLTG637.js"),__vite__mapDeps([13,1,2,5,8]),import.meta.url)),ue=t.lazy(()=>l(()=>import("./ThreePillars-WvfchSHf.js"),__vite__mapDeps([14,1,2,5,9]),import.meta.url)),pe=t.lazy(()=>l(()=>import("./Piton-C5yRG5l5.js"),__vite__mapDeps([15,1,2,10,5,13,8]),import.meta.url)),me=t.lazy(()=>l(()=>import("./Microsoft-BIiRst5z.js"),__vite__mapDeps([16,1,2,5]),import.meta.url)),he=t.lazy(()=>l(()=>import("./IntroAnimation-DVouQnav.js"),__vite__mapDeps([17,1,2,7,5,4,8,9,10,11]),import.meta.url));function ge(){const[a,p]=t.useState("light");return e.jsxs(A,{theme:a==="light"?S:C,children:[e.jsx(I,{}),e.jsx("div",{className:"App",children:e.jsxs(R,{children:[e.jsx(F,{}),e.jsx(oe,{}),e.jsx(t.Suspense,{fallback:e.jsx("div",{style:{color:"#888",padding:"2rem",textAlign:"center"},children:"Loading…"}),children:e.jsxs(T,{children:[e.jsx(i,{path:"/",element:e.jsx(he,{})}),e.jsx(i,{path:"/MacTavish",element:e.jsx(ce,{})}),e.jsx(i,{path:"/Giga",element:e.jsx(ae,{})}),e.jsx(i,{path:"/AccessDirect",element:e.jsx(se,{})}),e.jsx(i,{path:"/Outsource",element:e.jsx(le,{})}),e.jsx(i,{path:"/GraphicDesign",element:e.jsx(ie,{})}),e.jsx(i,{path:"/Ux",element:e.jsx(de,{})}),e.jsx(i,{path:"/ThreePillars",element:e.jsx(ue,{})}),e.jsx(i,{path:"/Piton",element:e.jsx(pe,{})}),e.jsx(i,{path:"/About",element:e.jsx(ne,{})}),e.jsx(i,{path:"/Microsoft",element:e.jsx(me,{})}),e.jsx(i,{path:"*",element:e.jsx(O,{to:"/",replace:!0})})]})})]})})]})}P.createRoot(document.getElementById("root")).render(e.jsx(t.StrictMode,{children:e.jsx(ge,{})}));
