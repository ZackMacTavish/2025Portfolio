import{j as e,C as l,u as m,a as h,R as f,T as w}from"./three-CIqbc5c4.js";import{b as o,c as x}from"./vendor-hQudadcW.js";import{B as g}from"./index-B8bbBv4X.js";const j=x.div`
  width: 100vw;
  height: 100vh;
  height: 100dvh;
  background-color: black;
`,v=()=>typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,M=()=>{const a=o.useRef(),c=o.useRef(v());m(({clock:i})=>{if(!a.current||c.current)return;const n=i.getElapsedTime(),t=a.current.geometry.attributes.position;for(let r=0;r<t.count;r++){const d=t.getX(r),p=t.getY(r),u=Math.sin(d*3+n)*.15+Math.cos(p*3+n)*.15;t.setZ(r,u)}t.needsUpdate=!0});const[s]=h(w,[g]);return s.wrapS=s.wrapT=f,s.repeat.set(1,1),e.jsxs("mesh",{ref:a,children:[e.jsx("planeGeometry",{args:[3,3,32,32]}),e.jsx("meshBasicMaterial",{map:s})]})},y=()=>e.jsx(j,{children:e.jsx(l,{camera:{fov:50,position:[0,0,4]},dpr:[1,1.5],gl:{antialias:!1,powerPreference:"low-power"},children:e.jsx(o.Suspense,{fallback:null,children:e.jsx(M,{})})})});export{y as default};
