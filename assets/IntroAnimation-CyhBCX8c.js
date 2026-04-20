import{j as t,C as h,F as j,O as b,u as w,a as T}from"./three-D9NkSzoP.js";import{b as n,h as g,c as l,l as c}from"./vendor-D7aqownG.js";import v from"./LandingPage-CDbLHaDO.js";import"./AD-pta5sKp8.js";import"./index-OWNjQ_yi.js";import"./Grid60-DIOAOb55.js";import"./LeysiApp—Screens copy-CsLIUfOG.js";import"./ThreePillars—pages-De3L89hY.js";import"./Group 55618@2x-DJ5DP13a.js";import"./BrandGuidelines—Mockup-KdAEjx2l.js";const y=c`
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

  ${e=>e.$animateOut&&g`
      animation: ${F} 0.35s ease-in-out forwards;
    `}
`,S=l.h1`
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2.5rem, 8vw, 6rem);
  color: white;
  animation: ${y} 1.8s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
  text-align: center;
  z-index: 20;
`;function O({onLoaded:e,...s}){const{scene:i}=w("./models/scene.glb"),o=n.useRef();return T(()=>{o.current&&(o.current.rotation.y+=.0015,o.current.rotation.x+=8e-4)}),n.useEffect(()=>{o.current&&e&&e()},[o,e]),t.jsx("primitive",{ref:o,object:i,...s})}function L({onModelLoaded:e}){return t.jsxs(h,{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",zIndex:0,pointerEvents:"none"},camera:{position:[0,0,2.5],fov:50},children:[t.jsx("ambientLight",{intensity:.8}),t.jsx("directionalLight",{position:[5,5,5],intensity:1}),t.jsx(n.Suspense,{fallback:null,children:t.jsx(j,{floatIntensity:.1,rotationIntensity:.05,children:t.jsx(O,{scale:8,position:[0,0,0],onLoaded:e})})}),t.jsx(b,{enableZoom:!1,enablePan:!1,enableRotate:!1})]})}function G(){const e="Hi, I'm Zack MacTavish",[s,i]=n.useState(!1),[o,u]=n.useState(!1),[r,m]=n.useState(!0),[a,f]=n.useState(!1);return n.useEffect(()=>{if(!a)return;const d=setTimeout(()=>i(!0),1e3),p=setTimeout(()=>u(!0),3800),x=setTimeout(()=>m(!1),4200);return()=>{clearTimeout(d),clearTimeout(p),clearTimeout(x)}},[a]),t.jsxs(t.Fragment,{children:[t.jsx(v,{introDone:!r}),r&&t.jsxs(I,{$animateOut:o,children:[t.jsx(L,{onModelLoaded:()=>f(!0)}),s&&t.jsx(S,{children:e})]})]})}export{G as default};
