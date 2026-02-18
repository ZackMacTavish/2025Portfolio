import{j as t,C as h,F as j,O as b,u as w,a as T}from"./three-D9NkSzoP.js";import{b as s,h as g,c as l,l as c}from"./vendor-D7aqownG.js";import v from"./LandingPage-CQOqrfBE.js";import"./AD-CtibPfcG.js";import"./Grid60-DIOAOb55.js";import"./hangingquilts-CHhX4Dwf.js";import"./LeysiApp—Screens copy-CsLIUfOG.js";import"./ThreePillars—pages-CYFcPa7V.js";import"./Group 55618@2x-DOtc8T7w.js";import"./BrandGuidelines—Mockup-D_jcKRPT.js";const y=c`
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
`,F=c`
  0% { transform: translateY(0%); }
  100% { transform: translateY(100%); }
`,I=l.div`
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

  ${e=>e.animateOut&&g`
      animation: ${F} 0.35s ease-in-out forwards;
    `}
`,S=l.h1`
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2.5rem, 8vw, 6rem);
  color: white;
  animation: ${y} 1.8s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
  text-align: center;
  z-index: 20;
`;function L({onLoaded:e,...n}){const{scene:i}=w("./models/scene.glb"),o=s.useRef();return T(()=>{o.current&&(o.current.rotation.y+=.0015,o.current.rotation.x+=8e-4)}),s.useEffect(()=>{o.current&&e&&e()},[o,e]),t.jsx("primitive",{ref:o,object:i,...n})}function O({onModelLoaded:e}){return t.jsxs(h,{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",zIndex:0,pointerEvents:"none"},camera:{position:[0,0,2.5],fov:50},children:[t.jsx("ambientLight",{intensity:.8}),t.jsx("directionalLight",{position:[5,5,5],intensity:1}),t.jsx(s.Suspense,{fallback:null,children:t.jsx(j,{floatIntensity:.1,rotationIntensity:.05,children:t.jsx(L,{scale:8,position:[0,0,0],onLoaded:e})})}),t.jsx(b,{enableZoom:!1,enablePan:!1,enableRotate:!1})]})}function G(){const e="Hi, I'm Zack MacTavish",[n,i]=s.useState(!1),[o,u]=s.useState(!1),[r,m]=s.useState(!0),[a,f]=s.useState(!1);return s.useEffect(()=>{if(!a)return;const d=setTimeout(()=>i(!0),1e3),p=setTimeout(()=>u(!0),3800),x=setTimeout(()=>m(!1),4200);return()=>{clearTimeout(d),clearTimeout(p),clearTimeout(x)}},[a]),t.jsxs(t.Fragment,{children:[t.jsx(v,{introDone:!r}),r&&t.jsxs(I,{animateOut:o,children:[t.jsx(O,{onModelLoaded:()=>f(!0)}),n&&t.jsx(S,{children:e})]})]})}export{G as default};
