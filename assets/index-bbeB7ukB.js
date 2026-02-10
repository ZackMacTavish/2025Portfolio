const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./three-BUeX2W-Q.js","./three-DujNlRV8.js","./vendor-DcaHsDtB.js","./About-CxnPTH_U.js","./Graphicdesign-QqLTqywf.js","./Outsource-CQ8t2Tpt.js","./UX-Rde9Nwn4.js","./ThreePillars-qsboOlgG.js","./Piton-Btzr89Rp.js","./Microsoft-D7mXABDE.js"])))=>i.map(i=>d[i]);
import{j as e,_ as M,C as _e,F as Re,O as De,u as Ee,a as Ae,c as Ie}from"./three-DujNlRV8.js";import{u as fe,c as r,b as s,l as E,L as ne,R as Z,d as Oe,K as Ue,H as Ge,e as Be,f as S,N as Fe}from"./vendor-DcaHsDtB.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))n(c);new MutationObserver(c=>{for(const h of c)if(h.type==="childList")for(const m of h.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&n(m)}).observe(document,{childList:!0,subtree:!0});function i(c){const h={};return c.integrity&&(h.integrity=c.integrity),c.referrerPolicy&&(h.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?h.credentials="include":c.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function n(c){if(c.ep)return;c.ep=!0;const h=i(c);fetch(c.href,h)}})();const We={backgroundColor:"#3F4739",backgroundTwo:"white",fontColor:"#5D5D5D"},Ve={backgroundColor:"#303030",backgroundTwo:"#303030",fontColor:"#a1a1a1"},Xe=fe`

body {

    background-color: ${t=>t.theme.backgroundColor};
   
}
`,Ze=fe`
  html, body, * { cursor: none !important; }
`,He=r.div`
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
`,Ye=()=>{const[t,o]=s.useState(!1),i=s.useRef(null),n=s.useRef(!1),c=s.useRef(1),h=s.useRef({x:0,y:0}),m=s.useRef({x:0,y:0}),d=s.useRef(!1);return s.useEffect(()=>{const l=()=>o(window.innerWidth<=450);return l(),window.addEventListener("resize",l),()=>window.removeEventListener("resize",l)},[]),s.useEffect(()=>{if(t)return;const l=v=>{if(!i.current)return;const y=v.clientX-i.current.clientWidth/2,A=v.clientY-i.current.clientHeight/2;d.current?(h.current={x:y,y:A},i.current.classList.add("visible")):(m.current={x:y,y:A},h.current={x:y,y:A},i.current.classList.add("visible"),d.current=!0)},x=()=>{i.current&&i.current.classList.remove("visible")},b=()=>{document.visibilityState==="hidden"?x():d.current=!1},k=()=>{if(i.current&&d.current){m.current.x+=(h.current.x-m.current.x)*.9,m.current.y+=(h.current.y-m.current.y)*.9;const v=n.current?.3:1;c.current+=(v-c.current)*.22,i.current.style.transform=`translate3d(${m.current.x}px, ${m.current.y}px, 0) scale(${c.current})`}requestAnimationFrame(k)},p='a, button, input, textarea, select, [role="link"], [role="button"], [data-cursor="link"], [data-route], [data-routes-to], .nav-link, .router-link, .link, .btn',T=v=>{v.target.closest(p)&&i.current&&(n.current=!0,i.current.classList.add("hovered"))},P=v=>{v.relatedTarget&&(v.relatedTarget.closest&&v.relatedTarget.closest(p))||i.current&&(n.current=!1,i.current.classList.remove("hovered"))};return document.addEventListener("mousemove",l),document.addEventListener("mouseleave",x),document.addEventListener("visibilitychange",b),document.addEventListener("mouseover",T),document.addEventListener("mouseout",P),k(),()=>{document.removeEventListener("mousemove",l),document.removeEventListener("mouseleave",x),document.removeEventListener("visibilitychange",b),document.removeEventListener("mouseover",T),document.removeEventListener("mouseout",P)}},[t]),e.jsxs(e.Fragment,{children:[e.jsx(Ze,{}),!t&&e.jsx(He,{ref:i})]})},qe="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2025.4.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%20236.2%20238.3'%20style='enable-background:new%200%200%20236.2%20238.3;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%23FFFFFF;}%20.st1{fill:%23678983;}%20.st2{fill:%2395C4BC;}%20%3c/style%3e%3cpath%20class='st0'%20d='M236,124.2c-0.1-0.2-0.2-0.4-0.4-0.5L236,124.2L236,124.2z'/%3e%3cpath%20class='st1'%20d='M208.3,93c0.7-0.8,1.8-1.1,2.8-1c3.1,0.4,6,1.5,8.6,3.1c2.6,1.5,4.9,3.4,6.9,5.7c1.8,2.1,2.6,3.8,2.5,5%20c-0.1,0.9-0.4,1.7-0.8,2.5c-0.4,0.8-0.9,1.1-1.5,1c-0.7-0.1-1.4-0.4-2.1-0.8c-0.3-0.2-1.2-0.6-2.6-1.4c-1.7-0.9-3.5-1.6-5.3-2.1%20c-2.3-0.7-4.7-1.2-7.2-1.5c-2.4-0.3-3.4-2.1-3-5.4l0.2-1.6C206.9,95.3,207.4,94,208.3,93z'/%3e%3cpath%20class='st2'%20d='M176.6,117.4c-1.7,0.9-3.9,0.3-4.8-1.4c-0.9-1.7-0.3-3.9,1.4-4.8c0,0,0.1-0.1,0.1-0.1%20c6.8-3.5,14.3-5.7,21.9-6.4l6.5-41.1c0.9-5.5,1.7-11.2,0.9-16.7c-0.8-5.6-3.6-11.1-8.6-13.8c-4.9-2.7-10.9-2.2-15.8,0.1%20s-8.9,6.4-12.2,10.8c-20,26.3-19.4,48.4-28.4,94.2h-5.2c0-0.3,0.1-0.6,0.1-0.9l13.1-81.7c1.1-6.7,2.1-13.5,0.9-20.1%20c-1.2-6.6-5.2-13.2-11.5-15.6c-5.7-2.2-12.4-0.6-17.4,3s-8.7,8.7-11.7,14C99.3,48.2,95,60.6,91.8,73.4c0.2-22.7-4.4-40.6-13.8-53.5%20C70.3,9.2,58.5,2.1,45.4,0.4h-0.3C24.5-2.4,5.6,12.1,2.8,32.8s11.7,39.6,32.4,42.3c18.1,2.4,35.4-8.5,40.9-26%20c-0.5-2.1-1.2-4.3-2-6.3c-4.6-11.7-13.8-21.1-25.3-26c-1.8-0.8-2.6-3-1.7-4.7c0.8-1.7,2.8-2.5,4.5-1.8c19,8.1,30.8,25.9,32.7,46.2%20c1.4,14.8,0,30.4-2.1,45c-1.1,7.6-2.6,15.1-4.3,22.6c-0.4,2-6.1,21.7-5.6,22c3.5,1.9,6.9,4.1,10.1,6.6c1.6,1.2,1.8,3.5,0.6,5%20c-1.2,1.6-3.5,1.8-5,0.6l0,0c-23.6-18.3-49.2-15.5-66.9,7.2c-17.4,22.4-14,54.5,7.7,72.8l55.3-20.7c0.6-0.4,1.2-0.9,1.7-1.3%20c5.4-4.8,6.9-12.5,8.1-19.7l17.1-103c0.4-2.2,0.8-4.5,2.2-6.2c1.4-1.7,4.1-2.6,5.9-1.3c1.8,1.3,1.7,4.1,1.4,6.4L95.2,209%20c12.7-3.9,25.2-8.2,37.5-13c3.4-1.3,6.8-2.7,9.3-5.4c3-3.3,3.9-8,4.7-12.4l14.4-83.1c0.2-1.9,0.8-3.8,1.9-5.4%20c1.2-1.5,3.5-2.3,5.1-1.3c1.8,1.2,1.7,3.8,1.5,6l-7.7,60.9c-0.8,6.7-1.7,13.6-0.3,20.2c1.2,5.4,4.1,10.6,8.6,13.6%20c1,0.7,2.2,1.3,3.4,1.7c7.1,2.5,14.9-0.5,21.3-4.4c21.8-13.2,36.9-35.2,41.3-60.3c0-0.2,0.1-0.3,0.1-0.5%20C220.1,110.6,196.2,107.2,176.6,117.4z'/%3e%3c/svg%3e",Ne=E`
  0% { transform: translateX(-40%) translateY(0); opacity: 1; }
  25% { transform: translateX(-35%) translateY(-5px); opacity: 0.9; }
  50% { transform: translateX(-30%) translateY(3px); opacity: 0.8; }
  75% { transform: translateX(-35%) translateY(-2px); opacity: 0.9; }
  100% { transform: translateX(-40%) translateY(0); opacity: 0.85; }
`,Ke=E`
  0% { transform: translateX(140%) translateY(0); opacity: 1; }
  25% { transform: translateX(135%) translateY(4px); opacity: 0.95; }
  50% { transform: translateX(130%) translateY(-3px); opacity: 0.9; }
  75% { transform: translateX(135%) translateY(2px); opacity: 0.95; }
  100% { transform: translateX(140%) translateY(0); opacity: 0.9; }
`,we=r.span`
  position: absolute;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0,255,255,0.6) 0%, rgba(255,192,203,0.35) 60%, transparent 100%);
  filter: blur(70px);
  pointer-events: none;
  z-index: 997;
`,Qe=r(we)`
  left: 0;
  animation: ${Ne} 6s ease-in-out infinite;
`,Je=r(we)`
  right: 0;
  animation: ${Ke} 6s ease-in-out infinite;
`,se=E`
  0% { transform: translateX(0); opacity: 1; }
  33% { transform: translateX(calc(100vw - 650px)); opacity: 1; }
  66% { transform: translateX(0); opacity: 1; }
  85% { transform: translateX(50vw); opacity: 0; }
  100% { transform: translateX(0); opacity: 0; }
`,et=r.div`
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
`,tt=r.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 8px;
  pointer-events: none;
  overflow: visible;
`,rt=r.span`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 650px;
  height: 1pt;
  background-color: #E88D67;
  mask-image: linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%);
  -webkit-mask-image: linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%);
  animation: ${se} 10s ease-in-out forwards;
  z-index: 998;
`,it=r.span`
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
  animation: ${se} 10s ease-in-out forwards;
  z-index: 999;
`,nt=E`
  0% { background-position: 0% 0; }
  50% { background-position: 50% 0; }
  100% { background-position: 0% 0; }
`,ot=r.span`
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
  animation: ${se} 10s ease-in-out forwards;

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
    animation: ${nt} 2s ease-in-out infinite;
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
`,st=r.img`
  width: clamp(46px, 2.6vw, 90px);
  transition: all 0.3s ease;

  &:hover {
    filter: invert(0.2) sepia(0.5) saturate(11.7) hue-rotate(313.2deg) brightness(1.2);
  }
`,at=r.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding-right: 6vw;
  max-width: calc(100vw - 6vw);
`,ct=r.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 1.5rem;

  @media (max-width: 1200px) { gap: 1rem; }
  @media (max-width: 800px) { gap: 0.8rem; font-size: 1rem; }
`,lt=r.span`
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
`,dt=r.li`
  position: relative;
  white-space: nowrap;

  &:hover > div {
    display: block;
  }
`;r(ne)`
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
`;const ht=r.div`
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
`,I=r(ne)`
  display: block;
  padding: 0.75rem 1rem;
  color: white;
  text-decoration: none;
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    background-color: rgba(166, 209, 202, 0.4);
    color: white;
  }
`;r.div`
  height: 1px;
  background-color: rgba(255, 255, 255, 0.3);
  margin: 0.25rem 0;
`;function gt(){return e.jsxs(et,{children:[e.jsx(ne,{to:"/MacTavish",style:{cursor:"none"},children:e.jsx(st,{src:qe})}),e.jsxs(at,{children:[e.jsx(ct,{children:e.jsxs(dt,{children:[e.jsx(lt,{children:"Projects"}),e.jsxs(ht,{children:[e.jsx(I,{to:"/Microsoft",children:"Microsoft"}),e.jsx(I,{to:"/Outsource",children:"Outsource"}),e.jsx(I,{to:"/Ux",children:"Leysi"}),e.jsx(I,{to:"/Piton",children:"Piton"}),e.jsx(I,{to:"/ThreePillars",children:"Three Pillars"}),e.jsx(I,{to:"/AccessDirect",children:"Access Direct"}),e.jsx(I,{to:"/Giga",children:"Giga"}),e.jsx(I,{to:"/GraphicDesign",children:"Graphic Design"})]})]})}),e.jsxs(tt,{children:[e.jsx(rt,{}),e.jsx(it,{}),e.jsx(ot,{}),e.jsx(Qe,{}),e.jsx(Je,{})]})]})]})}const g="https://mactavish.xyz",w={name:"Zack MacTavish",url:g,defaultImage:`${g}/assets/og/website-logoresolutions-1200x630.png`,sameAs:["https://dribbble.com/Zmactavish","https://www.instagram.com/zackmichaelmactavish","https://www.linkedin.com/in/zacharymactavish/","https://github.com/ZackMacTavish","https://medium.com/@zmactavish"],keywords:["product design","graphic design","UX","portfolio","Zack MacTavish"],ogImages:[{url:`${g}/assets/og/website-logoresolutions-1200x630.png`,width:1200,height:630},{url:`${g}/assets/og/website-logoresolutions-600x315.png`,width:600,height:315},{url:`${g}/assets/og/website-logoresolutions-high-res.png`,width:2400,height:1260}],squareLogo:`${g}/assets/og/website-logoresolutions-square-logo-1200px.png`,favicons:{"16x16":`${g}/assets/og/website-logoresolutions-16px.png`,"32x32":`${g}/assets/og/website-logoresolutions-32px.png`,"180x180":`${g}/assets/og/website-logoresolutions-180px.png`,"192x192":`${g}/assets/og/website-logoresolutions-192px.png`,"512x512":`${g}/assets/og/website-logoresolutions-512px.png`}},f={landing:{title:`${w.name} — Product & Graphic Designer`,description:"Product & graphic designer focused on brand, UX, and digital experiences. View work and contact.",url:`${g}/`,image:w.defaultImage,keywords:["portfolio","home","design","Zack MacTavish"]},about:{title:`About — ${w.name}`,description:"About Zack MacTavish — product & graphic designer. Learn about my background, work, and exhibitions.",url:`${g}/about`,image:w.defaultImage,keywords:["about","bio","background"]},giga:{title:"Giga — UX/UI & Branding | Zack MacTavish",description:"Case study: Giga — UX/UI, branding, and product design by Zack MacTavish.",url:`${g}/projects/giga`,image:`${g}/assets/Giga—Macbookv2.png`,datePublished:"2024-10-01",keywords:["giga","product design","ux","branding"]},outsource:{title:"Outsource — UX/UI & Branding | Zack MacTavish",description:"Case study: Outsource — branding, websites and UX work by Zack MacTavish.",url:`${g}/projects/outsource`,image:`${g}/assets/Outsource—Macbook.png`,datePublished:"2023-08-01",keywords:["outsource","branding","ux"]},piton:{title:"Piton — Project | Zack MacTavish",description:"Case study: Piton — UX and visual design work by Zack MacTavish.",url:`${g}/projects/piton`,image:`${g}/assets/Piton—Screens.jpg`,datePublished:"2023-02-01",keywords:["piton","branding","app design"]},ux:{title:"UX — Product & UX Projects | Zack MacTavish",description:"Portfolio of UX and product design projects by Zack MacTavish.",url:`${g}/projects/ux`,image:`${g}/assets/Giga—mockup.jpg`,keywords:["ux","product design"]},"access-direct":{title:"Access Direct — UX & Brand | Zack MacTavish",description:"Case study: Access Direct — brand, UX and website built by Zack MacTavish.",url:`${g}/projects/access-direct`,image:`${g}/assets/AD—Macs.jpg`,datePublished:"2022-10-01",keywords:["access direct","ux","brand"]},"graphic-design":{title:"Graphic Design — Portfolio | Zack MacTavish",description:"Graphic design and art pieces by Zack MacTavish, including posters, packaging, and editorial work.",url:`${g}/projects/graphic-design`,image:`${g}/assets/Cover.png`,keywords:["graphic design","posters","packaging"]},threepillars:{title:"ThreePillars — UX & Branding | Zack MacTavish",description:"Case study: ThreePillars — brand and web app design by Zack MacTavish.",url:`${g}/projects/threepillars`,image:`${g}/assets/ThreePillars—Macbook.png`,keywords:["threepillars","branding","ux"]},microsoft:{title:"Microsoft — Project | Zack MacTavish",description:"Case study: Microsoft — UX and visual design work by Zack MacTavish. Password protected.",url:`${g}/projects/microsoft`,image:w.defaultImage,keywords:["microsoft","branding","ux","password protected"]}},ae=({title:t,description:o,url:i,image:n,images:c=null,type:h="website",authorName:m="Zack MacTavish",authorAlternateNames:d=["Zachary MacTavish"],sameAs:l=[],keywords:x=[],jsonLd:b=null,favicons:k=null})=>(s.useEffect(()=>{t&&(document.title=t);const p=(a,u,z)=>{let j=document.querySelector(a);if(!j){j=document.createElement("meta");const oe=a.match(/\[(name|property)=['"]([^'"]+)['"]\]/);oe&&j.setAttribute(oe[1],oe[2]),document.head.appendChild(j)}j.setAttribute(u,z)};o&&(p("[name='description']","content",o),p("[property='og:description']","content",o),p("[name='twitter:description']","content",o)),x&&x.length&&p("[name='keywords']","content",Array.isArray(x)?x.join(", "):x),t&&(p("[property='og:title']","content",t),p("[name='twitter:title']","content",t)),p("[property='og:type']","content",h),i&&p("[property='og:url']","content",i);const T=w&&w.ogImages||[],P=c||(n?[n]:null)||T,v=a=>{document.querySelectorAll(a).forEach(u=>u.remove())};v("meta[property='og:image']"),v("meta[property='og:image:width']"),v("meta[property='og:image:height']");let y=null;if(P&&P.length?P.forEach(a=>{let u=a;if(typeof a=="string"&&(u={url:a}),!u||!u.url)return;const z=document.createElement("meta");if(z.setAttribute("property","og:image"),z.setAttribute("content",u.url),document.head.appendChild(z),u.width){const j=document.createElement("meta");j.setAttribute("property","og:image:width"),j.setAttribute("content",String(u.width)),document.head.appendChild(j)}if(u.height){const j=document.createElement("meta");j.setAttribute("property","og:image:height"),j.setAttribute("content",String(u.height)),document.head.appendChild(j)}y||(y=u.url)}):n&&(p("[property='og:image']","content",n),y=n),y?(p("[name='twitter:image']","content",y),p("[name='twitter:card']","content","summary_large_image")):p("[name='twitter:card']","content","summary"),i){let a=document.querySelector("link[rel='canonical']");a||(a=document.createElement("link"),a.setAttribute("rel","canonical"),document.head.appendChild(a)),a.setAttribute("href",i)}const A="seo-json-ld";let $=document.getElementById(A);const J={"@context":"https://schema.org","@type":"Person",name:m,url:i||window.location.href};d&&d.length&&(J.alternateName=d.length===1?d[0]:d),l&&l.length&&(J.sameAs=l);let N=b||J;if(!b)N=J;else try{const a=b;(a["@type"]==="CreativeWork"||a["@type"]==="Article")&&!a.author&&(a.author={"@type":"Person",name:m,url:i||window.location.href},d&&d.length&&(a.author.alternateName=d.length===1?d[0]:d),l&&l.length&&(a.author.sameAs=l)),N=a}catch{N=b}if($?$.text=JSON.stringify(N):($=document.createElement("script"),$.id=A,$.type="application/ld+json",$.text=JSON.stringify(N),document.head.appendChild($)),m||d&&d.length){const a=[m].concat(d||[]).filter(Boolean).join(", ");p("[name='author']","content",a)}l&&l.length&&p("[name='sameAs']","content",l.join(", "));const ee=k||w&&w.favicons||null,te=a=>{document.querySelectorAll(`link[rel='${a}']`).forEach(u=>u.remove())};te("icon"),te("shortcut icon"),te("apple-touch-icon"),te("manifest"),ee&&(Array.isArray(ee)?ee.forEach(a=>{const u=document.createElement("link");a.rel?u.setAttribute("rel",a.rel):u.setAttribute("rel",a.sizes==="180x180"?"apple-touch-icon":"icon"),a.sizes&&u.setAttribute("sizes",a.sizes),u.setAttribute("href",a.href),document.head.appendChild(u)}):Object.entries(ee).forEach(([a,u])=>{const z=document.createElement("link");a==="180x180"?z.setAttribute("rel","apple-touch-icon"):z.setAttribute("rel","icon"),z.setAttribute("sizes",a),z.setAttribute("href",u),document.head.appendChild(z)}))},[t,o,i,n,h,m,d,l,x,b]),null),mt=""+new URL("Me-BEhJ50qd.jpeg",import.meta.url).href,pt=""+new URL("BlackTurtleneck-popart-01-Cfcb3PF3.jpg",import.meta.url).href,ut=""+new URL("hangingquilts-CSgyMA7c.jpg",import.meta.url).href,xt=""+new URL("LeysiApp—Screens copy-BaSGok0d.jpg",import.meta.url).href,ft=""+new URL("ThreePillars—pages-HOFvvO-e.jpg",import.meta.url).href,wt=""+new URL("Group 55618@2x-BcOmtPnh.png",import.meta.url).href,bt=""+new URL("BrandGuidelines—Mockup-ChTa7oCn.jpg",import.meta.url).href,vt=""+new URL("iphones—Mockup copy-BrqRRBeO.png",import.meta.url).href,be="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2025.4.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2084.5%2048'%20style='enable-background:new%200%200%2084.5%2048;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%23A6D1CA;}%20%3c/style%3e%3cg%3e%3cpath%20class='st0'%20d='M23.8,0C37,0,47.7,10.7,47.7,24S37,48,23.8,48S0,37.2,0,24S10.7,0,23.8,0z%20M61.9,1.4%20c6.6,0,11.9,10.1,11.9,22.6h0c0,12.5-5.3,22.6-11.9,22.6S50,36.5,50,24S55.3,1.4,61.9,1.4z%20M80.3,3.8c2.3,0,4.2,9.1,4.2,20.2%20c0,11.2-1.9,20.2-4.2,20.2s-4.2-9.1-4.2-20.2S78,3.8,80.3,3.8z'/%3e%3c/g%3e%3c/svg%3e",yt=""+new URL("Card1-3--mHPQ8.webp",import.meta.url).href,jt=""+new URL("Card2-DkNuGfII.webp",import.meta.url).href,kt=""+new URL("Card3-DFuv6FGk.webp",import.meta.url).href,Pt=""+new URL("Card4-1NFXU0cZ.webp",import.meta.url).href,St=""+new URL("Card5-BWd32u-m.webp",import.meta.url).href,zt=""+new URL("Card6-Dy8ZNgWu.png",import.meta.url).href,Ct="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2025.4.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2084.5%2084.5'%20style='enable-background:new%200%200%2084.5%2084.5;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%23A6D1CA;}%20%3c/style%3e%3cpath%20class='st0'%20d='M42.3,0C19,0,0,19,0,42.3s19,42.3,42.3,42.3s42.3-19,42.3-42.3S65.6,0,42.3,0z%20M42.3,7c8.9,0,17,3.4,23.2,8.8%20c-0.7,0.9-1.6,2-3,3.4c-3,2.9-7.8,6.4-15.2,9.1c-5-9.2-9.9-16.1-13.1-20.5C36.8,7.3,39.5,7,42.3,7z%20M27.3,10.3%20c2.9,3.8,8,10.8,13.2,20.1C26.2,34.3,13,34.8,7.8,34.8C10.2,23.9,17.5,14.9,27.3,10.3z%20M70.3,21c4.3,5.7,7,12.7,7.2,20.4%20c-3.1-0.7-7.8-1.4-13.8-1.4c-3.1,0-6.7,0.2-10.5,0.7c-0.9-2-1.8-3.9-2.8-5.8c7.9-3,13.3-7,16.8-10.5C68.6,23.1,69.5,22.1,70.3,21z%20M43.7,36.9c0.8,1.6,1.6,3.3,2.4,5.1c-15.1,4.2-25.9,16.9-30.5,23.3C10.3,59.1,7,51.1,7,42.3c0-0.2,0-0.3,0-0.4%20C11.8,41.9,26.9,41.5,43.7,36.9z%20M63.7,46.9c6.3,0,10.6,0.9,13.2,1.5c-1.6,9.4-6.9,17.4-14.4,22.7c-1.4-8.4-3.7-16.4-6.5-23.8%20C58.8,47.1,61.4,46.9,63.7,46.9z%20M48.9,48.5c3.2,8,5.8,16.9,7.2,26.2c-4.2,1.8-8.9,2.8-13.8,2.8c-8.1,0-15.5-2.7-21.5-7.3%20C24.4,65.3,35.1,52.1,48.9,48.5z'/%3e%3c/svg%3e",Lt="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2025.4.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2083.7%2083.7'%20style='enable-background:new%200%200%2083.7%2083.7;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%23A6D1CA;}%20%3c/style%3e%3cpath%20class='st0'%20d='M41.9,0C18.8,0,0,18.8,0,41.9s18.8,41.9,41.9,41.9s41.9-18.8,41.9-41.9S64.9,0,41.9,0z%20M41.9,6.3%20c19.7,0,35.6,15.9,35.6,35.6c0,16-10.6,29.6-25.1,34V65.2c0-4-2.3-7.4-5.6-9.1c11.2-2.2,18.2-11.2,15.5-20.2c-0.5-1.8-1.4-3.5-2.7-5%20c0.9-2.9,2-7.9-0.5-11.8c-4.8,0-7.8,3.3-9.3,5.3c-2.5-0.8-5.2-1.2-7.9-1.3c-2.7,0-5.4,0.4-7.9,1.2c-1.5-2-4.5-5.3-9.3-5.3%20c-2.8,4.5-1.1,9.4-0.1,11.4c-6.5,7.7-4,18.1,5.6,23.3c2.1,1.1,4.4,1.9,6.9,2.4c-2.7,1.4-4.8,4-5.4,7.1h-2.8c-2.7,0-3.8-1.1-5.2-3%20c-1.4-1.9-3-3.1-4.9-3.6c-1-0.1-1.7,0.7-0.8,1.3c3,2,3.2,5.3,4.4,7.5c1.1,2,3.3,3.7,5.8,3.7h3.3v6.8c-14.6-4.5-25.1-18-25.1-34%20C6.3,22.2,22.2,6.3,41.9,6.3z'/%3e%3c/svg%3e",Mt="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2025.4.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2081.2%2081.2'%20style='enable-background:new%200%200%2081.2%2081.2;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%23A6D1CA;}%20%3c/style%3e%3cpath%20class='st0'%20d='M22.6,0C10.1,0,0,10.1,0,22.6v36.1c0,12.4,10.1,22.6,22.6,22.6h36.1c12.4,0,22.6-10.1,22.6-22.6V22.6%20C81.2,10.1,71.1,0,58.6,0H22.6z%20M22.6,9h36.1c7.5,0,13.5,6.1,13.5,13.5v36.1c0,7.5-6.1,13.5-13.5,13.5H22.6C15.1,72.2,9,66.1,9,58.6%20V22.6C9,15.1,15.1,9,22.6,9z%20M63.1,13.5c-2.5,0-4.5,2-4.5,4.5s2,4.5,4.5,4.5c2.5,0,4.5-2,4.5-4.5S65.6,13.5,63.1,13.5z%20M40.6,18%20C28.2,18,18,28.2,18,40.6s10.1,22.6,22.6,22.6S63.1,53,63.1,40.6S53,18,40.6,18z%20M40.6,27.1c7.5,0,13.5,6.1,13.5,13.5%20s-6.1,13.5-13.5,13.5s-13.5-6.1-13.5-13.5S33.1,27.1,40.6,27.1z'/%3e%3c/svg%3e",Tt="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2025.4.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2079.1%2079.1'%20style='enable-background:new%200%200%2079.1%2079.1;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%23A6D1CA;}%20%3c/style%3e%3cpath%20class='st0'%20d='M12.1,0C5.5,0,0,5.5,0,12.1V67c0,6.6,5.5,12.1,12.1,12.1H67c6.6,0,12.1-5.5,12.1-12.1V12.1%20C79.1,5.5,73.7,0,67,0H12.1z%20M12.1,6.6H67c3.1,0,5.5,2.4,5.5,5.5V67c0,3.1-2.4,5.5-5.5,5.5H12.1c-3.1,0-5.5-2.4-5.5-5.5V12.1%20C6.6,9,9,6.6,12.1,6.6z%20M20.9,15.4c-3,0-5.5,2.5-5.5,5.5s2.5,5.5,5.5,5.5s5.5-2.5,5.5-5.5S23.9,15.4,20.9,15.4z%20M17.6,30.8%20c-1.2,0-2.2,1-2.2,2.2v28.6c0,1.2,1,2.2,2.2,2.2h6.6c1.2,0,2.2-1,2.2-2.2V33c0-1.2-1-2.2-2.2-2.2H17.6z%20M33,30.8%20c-1.2,0-2.2,1-2.2,2.2v28.6c0,1.2,1,2.2,2.2,2.2h6.6c1.2,0,2.2-1,2.2-2.2V45.1c0-3,2.5-5.5,5.5-5.5c3,0,5.5,2.5,5.5,5.5v16.5%20c0,1.2,1,2.2,2.2,2.2h6.6c1.2,0,2.2-1,2.2-2.2V44c0-7.3-5.9-13.2-13.2-13.2c-3.4,0-6.5,1.3-8.8,3.4V33c0-1.2-1-2.2-2.2-2.2H33z'/%3e%3c/svg%3e",$t=r.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1vw;
  
  @media (max-width: 450px) { 
    max-width: 320px;
    justify-content: flex-start;
    gap: 3vw;
  }
`,K=r.img`
  width: clamp(44px, 2vw, 70px);
  transition: all 1s ease;

  &:hover {
    filter: invert(0.2) sepia(0.5) saturate(11.7) hue-rotate(313.2deg) brightness(1.2);
  }
`;function _t(){return e.jsxs($t,{children:[e.jsx("a",{href:"https://dribbble.com/Zmactavish",target:"_blank",rel:"noreferrer",children:e.jsx(K,{src:Ct})}),e.jsx("a",{href:"https://www.instagram.com/zackmichaelmactavish",target:"_blank",rel:"noreferrer",children:e.jsx(K,{src:Mt})}),e.jsx("a",{href:"https://www.linkedin.com/in/zacharymactavish/",target:"_blank",rel:"noreferrer",children:e.jsx(K,{src:Tt})}),e.jsx("a",{href:"https://github.com/ZackMacTavish",target:"_blank",rel:"noreferrer",children:e.jsx(K,{src:Lt})}),e.jsx("a",{href:"https://medium.com/@zmactavish",target:"_blank",rel:"noreferrer",children:e.jsx(K,{src:be})})]})}var ve={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},ge=Z.createContext&&Z.createContext(ve),Rt=["attr","size","title"];function Dt(t,o){if(t==null)return{};var i=Et(t,o),n,c;if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(t);for(c=0;c<h.length;c++)n=h[c],!(o.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}function Et(t,o){if(t==null)return{};var i={};for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){if(o.indexOf(n)>=0)continue;i[n]=t[n]}return i}function re(){return re=Object.assign?Object.assign.bind():function(t){for(var o=1;o<arguments.length;o++){var i=arguments[o];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},re.apply(this,arguments)}function me(t,o){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);o&&(n=n.filter(function(c){return Object.getOwnPropertyDescriptor(t,c).enumerable})),i.push.apply(i,n)}return i}function ie(t){for(var o=1;o<arguments.length;o++){var i=arguments[o]!=null?arguments[o]:{};o%2?me(Object(i),!0).forEach(function(n){At(t,n,i[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):me(Object(i)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(i,n))})}return t}function At(t,o,i){return o=It(o),o in t?Object.defineProperty(t,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[o]=i,t}function It(t){var o=Ot(t,"string");return typeof o=="symbol"?o:o+""}function Ot(t,o){if(typeof t!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var n=i.call(t,o);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(o==="string"?String:Number)(t)}function ye(t){return t&&t.map((o,i)=>Z.createElement(o.tag,ie({key:i},o.attr),ye(o.child)))}function je(t){return o=>Z.createElement(Ut,re({attr:ie({},t.attr)},o),ye(t.child))}function Ut(t){var o=i=>{var{attr:n,size:c,title:h}=t,m=Dt(t,Rt),d=c||i.size||"1em",l;return i.className&&(l=i.className),t.className&&(l=(l?l+" ":"")+t.className),Z.createElement("svg",re({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},i.attr,n,m,{className:l,style:ie(ie({color:t.color||i.color},i.style),t.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),h&&Z.createElement("title",null,h),t.children)};return ge!==void 0?Z.createElement(ge.Consumer,null,i=>o(i)):o(ve)}function Gt(t){return je({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"7",y1:"17",x2:"17",y2:"7"},child:[]},{tag:"polyline",attr:{points:"7 7 17 7 17 17"},child:[]}]})(t)}function Bt(t){return je({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M7 11V7a5 5 0 0 1 10 0v4"},child:[]}]})(t)}const Ft=r.div`
  width: 60vw;
  max-width: 1100px;
  min-width: 320px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 1vw;
  margin: 0 auto 4vh auto;
  padding-top: 6.5rem;
  @media (max-width: 1000px) {
    flex-direction: column-reverse;
    width: 96vw;
    gap: 2vh;
    padding: 5.5rem 2vw 0 2vw;
  }
`,Wt=r.div`
  flex: 1.6 1 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  gap: 0.5em;
  height: 100%;
`,Vt=r.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: auto;
  max-width: none;
  @media (max-width: 1000px) {
    justify-content: center;
    width: 100%;
  }
`;function ke({title:t,imageSrc:o,imageAlt:i="",imageWidth:n="38vw",buttons:c=[],divider:h=!0}){return e.jsxs(Ft,{children:[e.jsxs(Wt,{children:[e.jsx(Se,{style:{fontSize:"2.8rem",marginBottom:"0.1em"},children:t}),h&&e.jsx("div",{style:{height:"1px",background:"#e0e0e0",width:"48px",margin:"0.1em 0 0.3em 0"}}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.3em 0.7em",marginBottom:"0.5em",maxWidth:"520px",width:"auto",alignItems:"center",justifyContent:"flex-start"},children:c.map(({href:m,label:d},l)=>e.jsxs(Pe,{href:m,target:"_blank",rel:"noopener noreferrer",children:[d," ",e.jsx(Gt,{style:{marginLeft:6,fontSize:"1.2em"}})]},l))})]}),e.jsx(Vt,{children:e.jsx(Xt,{src:o,alt:i,imageWidth:n})})]})}const Xt=r.img`
  max-height: 600px;
  width: ${({imageWidth:t})=>t||"68vw"};
  min-width: 0;
  max-width: 100vw;
  height: auto;
  display: block;
  object-fit: contain;
`,Zt=""+new URL("Giga—Macbookv2-CfLN1sRf.png",import.meta.url).href,Ht=""+new URL("iphones—Mockup-huIJePT7.png",import.meta.url).href,Yt=""+new URL("Giga—mockup-Cnh_KW7P.jpg",import.meta.url).href,qt=""+new URL("Messages—1920 x 1400-FBHNown_.png",import.meta.url).href,Nt=""+new URL("iMac_2-ByB4ft45.jpg",import.meta.url).href,Kt=""+new URL("iPad2-7y6oKxfc.jpg",import.meta.url).href,Qt=""+new URL("iPhone_2—Dark—Sq-CMwx-i__.jpg",import.meta.url).href,Jt=""+new URL("LightPhone2—Sq-BQ4v3uUl.jpg",import.meta.url).href,er=""+new URL("iMac-BBUHxs4x.jpg",import.meta.url).href,tr=""+new URL("About-DuQLmo8y.png",import.meta.url).href,rr=""+new URL("Photos1-BTmM1LpC.jpg",import.meta.url).href,ir=""+new URL("Photos2-BXosammk.jpg",import.meta.url).href,nr=""+new URL("Photos3-Cwlh6lpi.jpg",import.meta.url).href,or=""+new URL("Photos4-D5_iTpD0.jpg",import.meta.url).href,sr=""+new URL("Guides-CQbHOjad.jpg",import.meta.url).href,ar=""+new URL("CreateNewPost-CaFWZEze.png",import.meta.url).href,Pe=r.a`
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
`,ce=r.div`
  max-width: 1100px;
  margin: 0 auto 6vh; /* add margin-bottom for extra space outside */
  padding: 4vh 4vw 6vh; /* reduced internal padding */
  background-color: #f5f5f5;
  border-radius: 60px;

  @media (max-width: 1320px) {
    max-width: 90%;
  }

  @media (max-width: 850px) {
    width: 100%;
    padding: 4vh 4vw 6vh; /* keep reduced padding on mobile */
    border-radius: 0;
  }
`,le=r.div`
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
`,_=r.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,R=r.h3`
  color: ${t=>t.theme.fontColor};
  font-size: 2.5rem;
  margin: 0;

  @media (max-width: 1320px) {
    font-size: 2.3rem;
  }

  @media (max-width: 850px) {
    font-size: 2rem;
  }
`,D=r.h6`
  color: ${t=>t.theme.fontColor};
  font-size: 1.3rem;
  margin-top: 0.4rem;
  line-height: 1.45;
  font-weight: 400;
  font-family: 'Space Grotesk', sans-serif;

  @media (max-width: 1320px) {
    font-size: 1.15rem;
  }

  @media (max-width: 850px) {
    font-size: 1rem;
  }
`,cr=r.img`
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
`,lr=r.h3`
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
`,Q=r.img`
width: ${t=>t.Width};
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
`,dr=r.div`
width: 100vw;
background-color: #2CA0FD;
grid-row-start: 4;
grid-row-end: 9;
z-index: -5;
`,de=r.div`
background-color: ${t=>t.theme.backgroundTwo};
`,he=r.div`
display: flex;
width: 100vw;
height: auto;

@media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    height: auto;
}
`,hr=r.div`
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
`,gr=r.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  max-width: 600px;

  @media (max-width: 1000px) {
    align-items: center;    /* centers the block horizontally */
    text-align: left;       /* keeps text left-aligned inside */
    margin-bottom: 2vh;     /* spacing below the text before image */
  }
`,mr=r.img`
  width: ${t=>t.Width};
  height: auto;

  @media (max-width: 1000px) {
    width: 80vw; /* image slightly bigger on vertical stack */
  }
`,Se=r.h2`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 4.5rem;
  color: ${t=>t.theme.fontColor};
  margin: 0;

  @media (max-width: 850px) {
    font-size: 3rem;
  }
`,pr=r.a`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.4rem;
  color: ${t=>t.theme.fontColor};
  text-decoration: none;
  margin-top: 1vh;

  &:hover {
    opacity: 0.75;
  }
`;function ur(){return s.useLayoutEffect(()=>{window.scrollTo(0,0)}),e.jsxs(de,{children:[e.jsx(ae,{...f.giga,sameAs:w.sameAs,keywords:f.giga.keywords,jsonLd:{"@context":"https://schema.org","@type":"CreativeWork",headline:f.giga.title,description:f.giga.description,image:f.giga.image,author:{"@type":"Person",name:w.name,url:`${w.url}/about`},url:f.giga.url,datePublished:f.giga.datePublished,keywords:f.giga.keywords}}),e.jsx(ke,{title:"Giga",imageSrc:Zt,imageAlt:"Giga Macbook Mockup",imageWidth:"44vw",buttons:[{href:"https://gigaintelligence.com",label:"Visit Giga"}]}),e.jsx(ce,{children:e.jsxs(le,{children:[e.jsxs(_,{children:[e.jsx(R,{children:"Project Type"}),e.jsx(D,{children:"UX/UI, Branding, Strategy"})]}),e.jsxs(_,{children:[e.jsx(R,{children:"Digital Product"}),e.jsx(D,{children:"Digital strategy platform used for data management, and private channel creation"})]}),e.jsxs(_,{children:[e.jsx(R,{children:"My Role"}),e.jsx(D,{children:"Responsible for researching, ideating, and generating ideas for a cohesive Giga experience. Designed and prototyped the Giga system & Web App"})]}),e.jsxs(_,{children:[e.jsx(R,{children:"Timeframe"}),e.jsx(D,{children:"1 1/2 years"})]})]})}),e.jsx(B,{src:Ht}),e.jsx(q,{style:{backgroundColor:"#ffffff"},children:e.jsx(Y,{children:e.jsx(H,{style:{color:"#5D5D5D"},children:"Giga is a startup focused on sharing experiences between its users. Through a robust data management system, users can share information and learn about their favorite subjects"})})}),e.jsx(B,{src:Yt}),e.jsx(L,{children:e.jsx(Q,{src:qt,Width:"60vw"})}),e.jsx(L,{children:e.jsx(Q,{src:ar,Width:"60vw"})}),e.jsx(B,{src:Nt}),e.jsx(L,{children:e.jsx(C,{src:Kt,Width:"65vw"})}),e.jsxs(he,{children:[e.jsx(C,{Width:"50vw",src:Qt}),e.jsx(C,{Width:"50vw",src:Jt})]}),e.jsx(L,{children:e.jsx(C,{src:er,Width:"65vw"})}),e.jsx(L,{style:{paddingBottom:"7vh"},children:e.jsx(C,{src:tr,Width:"65vw"})}),e.jsx("img",{src:rr,alt:"",style:{width:"100%",height:"auto",display:"block"}}),e.jsx("img",{src:ir,alt:"",style:{width:"100%",height:"auto",display:"block"}}),e.jsx("img",{src:nr,alt:"",style:{width:"100%",height:"auto",display:"block"}}),e.jsx("img",{src:or,alt:"",style:{width:"100%",height:"auto",display:"block"}}),e.jsx(B,{src:sr}),e.jsx(q,{style:{backgroundColor:"black"},children:e.jsx(Y,{children:e.jsxs(H,{style:{color:"white",textAlign:"center"},children:["Founder — Rich Devlin",e.jsx("br",{}),"Lead Designer — Zachary MacTavish",e.jsx("br",{}),"Front-End Development — Xing Yi & Joel Fernando",e.jsx("br",{}),"Back-End Development — Rich Devlin"]})})})]})}const xr=Object.freeze(Object.defineProperty({__proto__:null,BackgroundColor:dr,Cellphones:he,GigaRocket:cr,ProjectBlock:_,ProjectButton:Pe,ProjectContent:gr,ProjectDetails:le,ProjectDetailsContainer:ce,ProjectGrid:hr,ProjectHeader:R,ProjectImage:mr,ProjectLink:pr,ProjectSubtitle:D,ProjectTitle:Se,RisoItemtwo:Q,StyledDiv:de,TextSection:lr,default:ur},Symbol.toStringTag,{value:"Module"})),fr=""+new URL("Highpower-CRTc0nnX.jpg",import.meta.url).href,wr=""+new URL("AD—iphones-Ds9NHmDv.jpg",import.meta.url).href,br=""+new URL("AD—pages-DKeMWlEm.jpg",import.meta.url).href,vr=""+new URL("AD—Macs-C-BI5_ml.jpg",import.meta.url).href,yr=""+new URL("AD—Macbook-CFPkaWg5.png",import.meta.url).href,jr=""+new URL("AD-ipad-7WzgOi0E.jpg",import.meta.url).href,kr=""+new URL("iPhone_2—Dark-BP_0B_M9.jpg",import.meta.url).href,Pr=""+new URL("LightPhone2-C7enY0US.jpg",import.meta.url).href,Sr=""+new URL("ADiMac-La2LUK1h.jpg",import.meta.url).href,zr=""+new URL("Group 375-DGdrOhbV.jpg",import.meta.url).href,Cr=""+new URL("ADphotos1-BMN3iZjl.jpg",import.meta.url).href,Lr=""+new URL("ADphotos2-kBuZ2Ke7.jpg",import.meta.url).href,Mr=""+new URL("ADphotos3-DcIZQByP.jpg",import.meta.url).href,Tr=""+new URL("Guides2-BTNWjuI4.jpg",import.meta.url).href,$r=""+new URL("Group 274-DFJv41vH.jpg",import.meta.url).href,_r=r.div`
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
`,H=r.p`
  font-family: 'Space Grotesk', sans-serif;
  color: #ffffff;
  font-size: clamp(1.2rem, 2.2vw, 1.8rem); /* slightly smaller, scales with viewport */
  max-width: 60ch; /* comfortable measure inside 60vw container */
  line-height: 1.55;
  margin: 0;
  text-align: left; /* always left-aligned */

  @media (max-width: 850px) {
    font-size: 1.6rem; /* slightly bigger on responsive */
    max-width: 90vw;
    line-height: 1.75;
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
`,Y=r.div`
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
`,q=r.section`
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
`,C=r.img`
  width: ${t=>t.Width};
  max-width: 1000px;
  height: auto;
  @media (max-width: 1000px) { width: 90vw; padding-top: 3vh; }
  @media (max-width: 450px) { padding-top: 5vh; padding-bottom: 5vh; }
`,L=r.div`
  display: flex;
  justify-content: center;
  background-color: ${t=>t.theme.backgroundTwo};
  align-items: center;
  height: auto;
  padding: 3vh 0;
  width: 100vw;
`,B=r.img`
width: 100vw;
height: auto;
margin-top: -1vh;
background-size: contain;
background-color: ${t=>t.theme.backgroundTwo};

@media(max-width: 830px) {
    padding-top: 3vh;
}
`,Rr=r.div`
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
`;function Dr(){return s.useEffect(()=>{window.scrollTo(0,0)},[]),e.jsxs(de,{children:[e.jsx(ae,{...f["access-direct"],sameAs:w.sameAs,keywords:f["access-direct"].keywords,jsonLd:{"@context":"https://schema.org","@type":"CreativeWork",headline:f["access-direct"].title,description:f["access-direct"].description,image:f["access-direct"].image,author:{"@type":"Person",name:w.name,url:`${w.url}/about`},url:f["access-direct"].url,datePublished:f["access-direct"].datePublished,keywords:f["access-direct"].keywords}}),e.jsx(ke,{title:"Access Direct",imageSrc:yr,imageAlt:"Access Direct Macbook Mockup",imageWidth:"44vw",buttons:[{href:"https://accessdirect.com",label:"Visit Access Direct"}]}),e.jsx(ce,{children:e.jsxs(le,{children:[e.jsxs(_,{children:[e.jsx(R,{children:"Project Type"}),e.jsx(D,{children:"UX/UI, Branding, Strategy, Front-end development"})]}),e.jsxs(_,{children:[e.jsx(R,{children:"Product"}),e.jsx(D,{children:"Brand identity, print materials, and a website built with React.js"})]}),e.jsxs(_,{children:[e.jsx(R,{children:"My Role"}),e.jsx(D,{children:"Responsible for tidying up the brand logo, colors, creating print materials for tradeshows, social media, digital brochures and flyers, and building the company website"})]}),e.jsxs(_,{children:[e.jsx(R,{children:"Timeframe"}),e.jsx(D,{children:"4 years (Part-time)"})]})]})}),e.jsx(B,{src:wr,style:{backgroundColor:"white"}}),e.jsx(q,{style:{backgroundColor:"white"},children:e.jsx(Y,{children:e.jsx(H,{style:{color:"#5d5d5d"},children:"Access Direct is a company focused on security solutions. I collaborated closely on the project, working on their brand identity, logos, and website. I served as the UI Designer and Webmaster, redesigning the site and building it using React.js."})})}),e.jsx(B,{src:br,style:{backgroundColor:"white"}}),e.jsx(L,{children:e.jsx(Q,{src:fr,Width:"60vw"})}),e.jsx(L,{children:e.jsx(Q,{src:$r,Width:"60vw",style:{marginBottom:"3vh"}})}),e.jsx(B,{src:vr,style:{backgroundColor:"white"}}),e.jsx(L,{children:e.jsx(C,{src:jr,Width:"65vw"})}),e.jsxs(he,{children:[e.jsx(C,{Width:"50vw",src:kr}),e.jsx(C,{Width:"50vw",src:Pr})]}),e.jsx(L,{children:e.jsx(C,{src:Sr,Width:"65vw"})}),e.jsx(L,{style:{marginBottom:"5vh"},children:e.jsx(C,{src:zr,Width:"65vw",style:{boxShadow:"5px 10px 24px rgba(0, 0, 0, 0.1)"}})}),e.jsx("img",{src:Mr,alt:"",style:{width:"100%",height:"auto",display:"block",backgroundColor:"white"}}),e.jsx("img",{src:Lr,alt:"",style:{width:"100%",height:"auto",display:"block",backgroundColor:"white"}}),e.jsx("img",{src:Cr,alt:"",style:{width:"100%",height:"auto",display:"block",backgroundColor:"white"}}),e.jsx("img",{src:Tr,alt:"",style:{width:"100%",height:"auto",display:"block",backgroundColor:"white"}}),e.jsx(q,{style:{backgroundColor:"black"},children:e.jsx(Y,{children:e.jsxs(H,{style:{color:"white",textAlign:"center"},children:["Founder — David Smith",e.jsx("br",{}),"Lead Designer — Zachary MacTavish",e.jsx("br",{}),"Website Development — Zachary MacTavish",e.jsx("br",{}),"Content Direction — Wendy Majewski, Alek Vasic"]})})})]})}const Er=Object.freeze(Object.defineProperty({__proto__:null,FullBg:B,FullHeightTextSection:q,ParagraphFour:_r,RisoFlex:L,RisoItem:C,SingleGrid:Rr,TextContainer:Y,TextContent:H,default:Dr},Symbol.toStringTag,{value:"Module"})),Ar=s.lazy(()=>M(()=>import("./three-BUeX2W-Q.js"),__vite__mapDeps([0,1,2]),import.meta.url)),Ir=E`
  0% { transform: translate(-50%, -60%) rotate(0deg); }
  20% { transform: translate(-20%, -80%) rotate(90deg); }
  40% { transform: translate(10%, -40%) rotate(180deg); }
  60% { transform: translate(-40%, -20%) rotate(270deg); }
  80% { transform: translate(-70%, -50%) rotate(320deg); }
  100% { transform: translate(-50%, -60%) rotate(360deg); }
`,Or=E`
  0% { transform: translate(60%, -50%) rotate(0deg); }
  20% { transform: translate(80%, -20%) rotate(90deg); }
  40% { transform: translate(40%, -70%) rotate(180deg); }
  60% { transform: translate(20%, -30%) rotate(270deg); }
  80% { transform: translate(70%, -60%) rotate(320deg); }
  100% { transform: translate(60%, -50%) rotate(360deg); }
`,Ur=E`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(6px); }
`,Gr=r.div`
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
    animation: ${Ir} 35s ease-in-out infinite;
  }

  &::after {
    top: 40%;
    left: 65%;
    animation: ${Or} 40s ease-in-out infinite;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    height: auto;
    padding: 10vh 5vw;
    gap: 2vh;
  }
`,Br=r.img`
  width: 22vw;
  height: 22vw;
  object-fit: cover;
  border-radius: 50%;
  flex-shrink: 0;
  position: relative;
  z-index: 1;

  @media (max-width: 1000px) {
    width: 60vw;
    height: 60vw;
  }

  @media (max-width: 450px) {
    width: 70vw;
    height: 70vw;
  }
`,Fr=r.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  z-index: 1;

  @media (max-width: 1000px) {
    width: 90%;
  }
`,ze=r.div`
  position: relative;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 500;
  font-size: 2.5rem;
  width: ${t=>t.Widthsize};
  color: white;
  z-index: 1;

  @media (max-width: 1400px) {  
    font-size: 1.8rem;
  }

  @media (max-width: 1000px) {  
    width: 90%;
    margin-top: 1vh;
    padding-bottom: 3vh;
    text-align: left;
  }

  @media (max-width: 850px) {
    font-size: 1.4rem;
    padding-top: 2vh;
  }

  @media (max-width: 450px) {
    font-size: 1.4rem;
  }
`,Wr=r.div`
  position: relative;
  z-index: 10;
  margin-bottom: 2vh;
`,Vr=r.div`
  position: fixed; /* center relative to the viewport */
  bottom: 6vh;     /* consistent viewport spacing from bottom */
  left: 50%;
  transform: translateX(-50%);
  animation: ${Ur} 1.5s infinite ease-in-out;
  opacity: ${t=>t.visible?.8:0};
  transition: opacity 0.6s ease;
  pointer-events: none;
  z-index: 2;      /* keep under intro overlay (which is z-index: 10) and above base content */
`,Xr=r.div`
  width: 24px;
  height: 24px;
  border-left: 3px solid white;
  border-bottom: 3px solid white;
  transform: rotate(-45deg);
  border-radius: 2px;
`,pe=r.section`
  width: 100vw;
  background: white;
  padding: 14vh 5vw; /* slightly increased spacing above/below */
  box-sizing: border-box;
`,ue=r.div`
  width: 100%;
  max-width: 1100px; /* align with other content widths */
  margin: 0 auto;
`,xe=r.div`
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
`,O=r(ne)`
  position: relative;
  display: block;
  width: 100%;
  aspect-ratio: 16/10;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0,0,0,0.08);
  background-color: #f5f5f5;
  text-decoration: none;
  transition: transform 180ms ease, box-shadow 180ms ease;
  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px rgba(25, 118, 210, 0.45);
  }
`,U=r.div`
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  filter: saturate(0.9);
  transition: filter 180ms ease;
`,X=r.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.45), rgba(0,0,0,0.15));
  transition: background 180ms ease;
`,F=r.div.attrs({"data-cursor":"link",role:"link"})`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 0.75rem; /* slightly below the image */
`,G=r.h3`
  margin: 0;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 600;
  font-size: 1.15rem;
  color: #111;
  transition: color 160ms ease;
`,W=r.p`
  margin: 0;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.95rem;
  color: #5d5d5d;
`,Zr=r.div`
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
`,Hr=r.h2`
  margin: 0;
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(1.4rem, 3vw, 2rem);
  color: #111;
`,Yr=r.p`
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
`,qr=r.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  pointer-events: none;
  color: #111;
`,V=r.div`
  display: flex;
  flex-direction: column;

  &:hover ${O} {
    transform: translateY(-3px);
    box-shadow: 0 10px 36px rgba(0,0,0,0.12);
  }

  &:hover ${U} {
    filter: saturate(1.08) brightness(1.05);
  }

  &:hover ${X} {
    background: linear-gradient(to top, rgba(0,0,0,0.25), rgba(0,0,0,0.08));
  }

  &:hover ${G} {
    color: ${t=>t.theme.backgroundColor};
  }
`,Ce=r.div`
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
`,Le=r.div`
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
`,Me=r.img`
  width: 100%;
  height: auto;
  display: block; /* avoid inline image spacing quirks */
  object-fit: contain;
  border-radius: 18px; /* match tile rounding used elsewhere on page */
`,Te=r(ze)`
  width: 100%;
  min-width: 0; /* allow wrapping within grid cell */
  padding-right: 0;
  font-size: clamp(1.05rem, 1.6vw, 1.5rem); /* slightly smaller for better line length */
  line-height: 1.6; /* improve readability */
  color: white;

  /* On responsive (image stacks above text), increase text size for readability */
  @media (max-width: 1000px) {
    font-size: 1.6rem;
    line-height: 1.75;
  }
`,Nr=r.div`
  overflow-y: hidden;
  width: 100vw;
`,Kr=r.div`
  display: grid;
  overflow-y: hidden;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  background-color: ${t=>t.theme.backgroundColor};
  height: 100dvh; /* ensure full viewport height on mobile browsers */
  width: 100vw;

  @media (max-width: 800px) {
    grid-template-columns: 1fr; /* single column on mobile for full-width content */
    grid-template-rows: auto auto; /* header above image */
  }
`,Qr=r.h1`
  display: grid;
  grid-column-start: 3;
  grid-row-start: 2;
  grid-row-end: 4;
  width: 60vw; /* constrain to site grid */
  max-width: 1100px;
  margin: 0 auto; /* center container, text aligns left */
  text-align: left; /* left align text within 60vw container */
  justify-self: center; /* keep the container centered horizontally */
  align-self: center;   /* center the grid item vertically within its rows */
  font-size: clamp(20px, 6vw, 4.8rem); /* slightly smaller on desktop */
  line-height: 1.15; /* tighten line height slightly */
  color: white;
  z-index: 200;
  font-family: 'Space Grotesk', sans-serif;
  text-shadow: 2px 2px 50px rgba(0, 0, 0, 1);

  @media (max-width: 1000px) {
    font-size: 3.2rem; /* slightly larger on mobile */
    line-height: 1.2;  /* keep tighter line-height on mobile */
    justify-self: start; /* anchor to left of grid */
    margin: 0;
    text-align: left;
    width: 100%;
    max-width: none; /* allow full width on mobile */
  }
  @media (max-width: 800px) {
    font-size: 2.6rem; /* slightly larger on smaller mobile */
    line-height: 1.2;
    grid-column-start: 1; /* full-width column */
    grid-row-start: 1;    /* place header above image */
    grid-row-end: auto;
    justify-self: start;
    margin: 0;
    text-align: left;
    width: 100vw; /* take the full viewport width */
    max-width: none;
  }
`,Jr=r.div`
  display: grid;
  grid-column-start: 3;
  grid-row-start: 2;

  @media (max-width: 800px) {
    grid-column-start: 1; /* single column layout */
    grid-row-start: 2;    /* image below header */
    justify-self: center;
    width: 100vw;
  }
`,$e=({introDone:t=!0})=>{const[o,i]=s.useState(!1),[n,c]=s.useState(!1),[h,m]=s.useState(window.innerWidth>450);return s.useLayoutEffect(()=>{window.scrollTo(0,0)},[]),s.useEffect(()=>{const d=()=>m(window.innerWidth>450);return d(),window.addEventListener("resize",d),()=>window.removeEventListener("resize",d)},[]),s.useEffect(()=>{const d=()=>{!n&&window.scrollY>50&&(i(!1),c(!0))};return window.addEventListener("scroll",d),()=>window.removeEventListener("scroll",d)},[n]),s.useEffect(()=>{t&&(n||i(!0))},[t,n]),e.jsxs("div",{children:[e.jsx(ae,{...f.landing,sameAs:w.sameAs,keywords:f.landing.keywords||w.keywords}),e.jsxs(Gr,{children:[e.jsx(Br,{src:mt}),e.jsxs(Fr,{children:[e.jsx(Wr,{children:e.jsx(_t,{})}),e.jsx(ze,{Widthsize:"47vw",children:"Hi, I'm Zack MacTavish, an artist and product designer based in Philadelphia, PA. For almost four years, I've been with Microsoft's Shopping Team, shaping user experiences for digital products."})]}),!n&&t&&e.jsx(Vr,{visible:o,children:e.jsx(Xr,{})})]}),e.jsx(pe,{children:e.jsx(ue,{children:e.jsxs(xe,{children:[e.jsxs(V,{children:[e.jsxs(O,{to:"/Microsoft","aria-label":"Microsoft project",children:[e.jsx(U,{style:{backgroundImage:"url('/assets/HP.png')",filter:"saturate(0.9) blur(2px)",transform:"scale(1.03)"}}),e.jsx("div",{style:{position:"absolute",inset:0,background:"rgba(255,255,255,0.7)"}}),e.jsx(qr,{children:e.jsx(Bt,{size:48})})]}),e.jsxs(F,{children:[e.jsx(G,{children:"Microsoft"}),e.jsx(W,{children:"Shopping ecosystem across Bing, Copilot, Windows, Outlook"})]})]}),e.jsxs(V,{children:[e.jsxs(O,{to:"/Ux","aria-label":"Leysi project",children:[e.jsx(U,{style:{backgroundImage:`url(${xt})`}}),e.jsx(X,{})]}),e.jsxs(F,{children:[e.jsx(G,{children:"Leysi"}),e.jsx(W,{children:"Brand identity and iOS app for campus deals"})]})]}),e.jsxs(V,{children:[e.jsxs(O,{to:"/ThreePillars","aria-label":"Three Pillars project",children:[e.jsx(U,{style:{backgroundImage:`url(${ft})`}}),e.jsx(X,{})]}),e.jsxs(F,{children:[e.jsx(G,{children:"ThreePillars"}),e.jsx(W,{children:"Recruiting site redesign and brand refresh"})]})]}),e.jsxs(V,{children:[e.jsxs(O,{to:"/Piton","aria-label":"Piton project",children:[e.jsx(U,{style:{backgroundImage:`url(${wt})`}}),e.jsx(X,{})]}),e.jsxs(F,{children:[e.jsx(G,{children:"Piton"}),e.jsx(W,{children:"Product design and mobile interface work"})]})]}),e.jsxs(V,{children:[e.jsxs(O,{to:"/Outsource","aria-label":"Outsource project",children:[e.jsx(U,{style:{backgroundImage:`url(${bt})`}}),e.jsx(X,{})]}),e.jsxs(F,{children:[e.jsx(G,{children:"Outsource"}),e.jsx(W,{children:"Commerce and editorial design across surfaces"})]})]}),e.jsxs(V,{children:[e.jsxs(O,{to:"/Giga","aria-label":"Giga project",children:[e.jsx(U,{style:{backgroundImage:`url(${vt})`}}),e.jsx(X,{})]}),e.jsxs(F,{children:[e.jsx(G,{children:"Giga"}),e.jsx(W,{children:"Cross-platform product design and experiments"})]})]})]})})}),e.jsx(q,{style:{backgroundColor:"#f7f7f7",padding:"10vh 5vw",minHeight:"70vh"},children:e.jsx(Y,{children:e.jsxs(H,{style:{color:"#5d5d5d"},children:["I’ve partnered with agencies including"," ",e.jsx("a",{href:"https://www.publicisgroupe.com/en",target:"_blank",rel:"noopener noreferrer",style:{color:"#5d5d5d",textDecoration:"underline"},children:"Publicis Groupe"}),","," ",e.jsx("a",{href:"https://prairieandforge.com/",target:"_blank",rel:"noopener noreferrer",style:{color:"#5d5d5d",textDecoration:"underline"},children:"Prairie & Forge"}),", and"," ",e.jsx("a",{href:"https://varfaj.com/",target:"_blank",rel:"noopener noreferrer",style:{color:"#5d5d5d",textDecoration:"underline"},children:"Varfaj Partners"})," ","on work spanning UX, product, and brand design. My background includes agency experience in New York City and formal design training in Chicago. Client collaborations have included Microsoft, Walmart, Seagate Technology, and Chip Ganassi Racing."]})})}),e.jsx(pe,{children:e.jsxs(ue,{children:[e.jsxs(Zr,{children:[e.jsx(Hr,{children:"My writing"}),e.jsx(Yr,{children:e.jsx("a",{href:"https://medium.com/@zmactavish",target:"_blank",rel:"noopener noreferrer",children:"See my Medium Portfolio"})})]}),e.jsx(xe,{children:[...Array(6)].map((d,l)=>{const x=l===0,b=l===1,k=l===2,p=l===3,T=l===5,P=l===4,v=x?"https://medium.com/design-bootcamp/76-features-in-figma-to-know-7dbb35cdb5a7":b?"https://medium.com/design-bootcamp/my-journey-as-a-product-designer-at-microsoft-a5325be417b5":k?"https://medium.com/design-bootcamp/12-features-to-consider-when-designing-an-e-commerce-mobile-app-740efbeee7c8":p?"https://medium.com/design-bootcamp/designing-in-the-8pt-grid-system-f3c1183ea6e8":P?"https://medium.com/@zmactavish/0643beac797a":T?"https://medium.com/@zmactavish/30-html-tags-to-know-b0a85b122ded":"https://medium.com/@zmactavish",y=x?"76 features in Figma to know":b?"My journey as a Product designer at Microsoft.":k?"12 features to consider when building an E-commerce app":p?"Designing in the 8pt grid system":P?"30 CSS styles to know":T?"30 HTML tags to know":"Medium",A=x?"A guide to all things Figma":b?"What I've learned at Microsoft as a Product designer":k?"A practical UX checklist for e‑commerce mobile apps":p?"Consistent spacing for scalable UI components":P?"A beginner's guide to CSS for designers":"A beginner's guide to HTML for designers",$=x?{backgroundImage:`url(${yt})`,backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"}:b?{backgroundImage:`url(${jt})`,backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"}:k?{backgroundImage:`url(${kt})`,backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"}:p?{backgroundImage:`url(${Pt})`,backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"}:P?{backgroundImage:`url(${zt})`,backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"}:T?{backgroundImage:`url(${St})`,backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"}:{backgroundImage:`url(${be})`,backgroundColor:"#fafafa",backgroundSize:"40%",backgroundRepeat:"no-repeat",backgroundPosition:"center",filter:"none"};return e.jsxs(V,{children:[e.jsxs(O,{to:v,target:"_blank",rel:"noopener noreferrer","aria-label":x?"Medium article: 76 features in Figma to know":b?"Medium article: My journey as a Product designer at Microsoft.":k?"Medium article: 12 features to consider when building an E-commerce app":p?"Medium article: Designing in the 8pt grid system":P?"Medium article: 30 CSS styles to know":T?"Medium article: 30 HTML tags to know":`Medium writing card ${l+1}`,children:[e.jsx(U,{style:$}),e.jsx(X,{})]}),e.jsxs(F,{children:[e.jsx(G,{children:y}),e.jsx(W,{children:A})]})]},`medium-card-${l}`)})})]})}),e.jsx(Ce,{children:e.jsxs(Le,{children:[e.jsx(Me,{src:ut,alt:"Quilt hanging"}),e.jsx(Te,{children:"Outside of work, I live with my partner Olivia, who is also an artist. In my own creative time, I focus on making quilts that combine photography, textile techniques, and mixed media, exploring the intersection of art, design, and storytelling."})]})}),e.jsx(Nr,{children:e.jsxs(Kr,{children:[e.jsxs(Qr,{children:["Thanks for ",e.jsx("br",{}),"stopping by"]}),e.jsx(Jr,{children:h?e.jsx(s.Suspense,{fallback:e.jsx("div",{style:{height:"50vh"}}),children:e.jsx(Ar,{})}):e.jsx("img",{style:{width:"100vw",height:"auto",display:"block"},src:pt,alt:"fallback"})})]})})]})},ei=Object.freeze(Object.defineProperty({__proto__:null,QuiltContainer:Ce,QuiltImage:Me,QuiltInner:Le,QuiltText:Te,default:$e},Symbol.toStringTag,{value:"Module"})),ti=E`
  0% { 
    opacity: 0; 
    transform: translateY(250px); 
    filter: blur(15px); 
  }
  100% { 
    opacity: 1; 
    transform: translateY(0); 
    filter: blur(0); 
  }
`,ri=E`
  0% { transform: translateY(0%); }
  100% { transform: translateY(100%); }
`,ii=r.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #3F4739; /* muted light olive */
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: 10;

  ${t=>t.animateOut&&Oe`
      animation: ${ri} 0.35s ease-in-out forwards;
    `}
`,ni=r.h1`
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2.5rem, 8vw, 6rem);
  color: white;
  animation: ${ti} 1.8s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
  text-align: center;
  z-index: 20;
`;function oi({onLoaded:t,...o}){const{scene:i}=Ee("./models/scene.glb"),n=s.useRef();return Ae(()=>{n.current&&(n.current.rotation.y+=.0015,n.current.rotation.x+=8e-4)}),s.useEffect(()=>{n.current&&t&&t()},[n,t]),e.jsx("primitive",{ref:n,object:i,...o})}function si({onModelLoaded:t}){return e.jsxs(_e,{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",zIndex:0,pointerEvents:"none"},camera:{position:[0,0,2.5],fov:50},children:[e.jsx("ambientLight",{intensity:.8}),e.jsx("directionalLight",{position:[5,5,5],intensity:1}),e.jsx(s.Suspense,{fallback:null,children:e.jsx(Re,{floatIntensity:.1,rotationIntensity:.05,children:e.jsx(oi,{scale:8,position:[0,0,0],onLoaded:t})})}),e.jsx(De,{enableZoom:!1,enablePan:!1,enableRotate:!1})]})}function ai(){const t="Hi, I'm Zack MacTavish",[o,i]=s.useState(!1),[n,c]=s.useState(!1),[h,m]=s.useState(!0),[d,l]=s.useState(!1);return s.useEffect(()=>{if(!d)return;const x=setTimeout(()=>i(!0),1e3),b=setTimeout(()=>c(!0),3800),k=setTimeout(()=>m(!1),4200);return()=>{clearTimeout(x),clearTimeout(b),clearTimeout(k)}},[d]),e.jsxs(e.Fragment,{children:[e.jsx($e,{introDone:!h}),h&&e.jsxs(ii,{animateOut:n,children:[e.jsx(si,{onModelLoaded:()=>l(!0)}),o&&e.jsx(ni,{children:t})]})]})}const ci=s.lazy(()=>M(()=>import("./About-CxnPTH_U.js"),__vite__mapDeps([3,1,2,0]),import.meta.url)),li=s.lazy(()=>M(()=>Promise.resolve().then(()=>Er),void 0,import.meta.url)),di=s.lazy(()=>M(()=>Promise.resolve().then(()=>xr),void 0,import.meta.url)),hi=s.lazy(()=>M(()=>import("./Graphicdesign-QqLTqywf.js"),__vite__mapDeps([4,1,2,3,0]),import.meta.url)),gi=s.lazy(()=>M(()=>Promise.resolve().then(()=>ei),void 0,import.meta.url)),mi=s.lazy(()=>M(()=>import("./Outsource-CQ8t2Tpt.js"),__vite__mapDeps([5,1,2]),import.meta.url)),pi=s.lazy(()=>M(()=>import("./UX-Rde9Nwn4.js"),__vite__mapDeps([6,1,2]),import.meta.url)),ui=s.lazy(()=>M(()=>import("./ThreePillars-qsboOlgG.js"),__vite__mapDeps([7,1,2]),import.meta.url)),xi=s.lazy(()=>M(()=>import("./Piton-Btzr89Rp.js"),__vite__mapDeps([8,1,2,6]),import.meta.url)),fi=s.lazy(()=>M(()=>import("./Microsoft-D7mXABDE.js"),__vite__mapDeps([9,1,2]),import.meta.url));function wi(){const[t,o]=s.useState("light");return e.jsxs(Ue,{theme:t==="light"?We:Ve,children:[e.jsx(Xe,{}),e.jsx("div",{className:"App",children:e.jsxs(Ge,{children:[e.jsx(Ye,{}),e.jsx(gt,{}),e.jsx(s.Suspense,{fallback:e.jsx("div",{style:{color:"#888",padding:"2rem",textAlign:"center"},children:"Loading…"}),children:e.jsxs(Be,{children:[e.jsx(S,{path:"/",element:e.jsx(ai,{})}),e.jsx(S,{path:"/MacTavish",element:e.jsx(gi,{})}),e.jsx(S,{path:"/Giga",element:e.jsx(di,{})}),e.jsx(S,{path:"/AccessDirect",element:e.jsx(li,{})}),e.jsx(S,{path:"/Outsource",element:e.jsx(mi,{})}),e.jsx(S,{path:"/GraphicDesign",element:e.jsx(hi,{})}),e.jsx(S,{path:"/Ux",element:e.jsx(pi,{})}),e.jsx(S,{path:"/ThreePillars",element:e.jsx(ui,{})}),e.jsx(S,{path:"/Piton",element:e.jsx(xi,{})}),e.jsx(S,{path:"/About",element:e.jsx(ci,{})}),e.jsx(S,{path:"/Microsoft",element:e.jsx(fi,{})}),e.jsx(S,{path:"*",element:e.jsx(Fe,{to:"/",replace:!0})})]})})]})})]})}Ie.createRoot(document.getElementById("root")).render(e.jsx(s.StrictMode,{children:e.jsx(wi,{})}));export{dr as B,he as C,q as F,cr as G,ke as P,L as R,de as S,Y as T,ae as a,H as b,B as c,_r as d,Q as e,C as f,ce as g,le as h,pt as i,_ as j,R as k,D as l,mt as m,bt as n,ft as o,f as p,ut as q,wt as r,w as s,xt as t};
