import{j as e,C as l,a as m,b as h,R as x,T as d}from"./three-DujNlRV8.js";import{b as n,c as g}from"./vendor-DcaHsDtB.js";const j=g.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
`,f=()=>{const r=n.useRef();m(({clock:c})=>{if(r.current){const o=c.getElapsedTime(),t=r.current.geometry.attributes.position;for(let s=0;s<t.count;s++){const i=t.getX(s),p=t.getY(s),u=Math.sin(i*3+o)*.15+Math.cos(p*3+o)*.15;t.setZ(s,u)}t.needsUpdate=!0}});const[a]=h(d,["https://i.postimg.cc/CL8DLVQP/Black-Turtleneck-popart-01.jpg"]);return a.wrapS=a.wrapT=x,a.repeat.set(1,1),e.jsxs("mesh",{ref:r,children:[e.jsx("planeGeometry",{args:[3,3,64,64]}),e.jsx("meshBasicMaterial",{map:a})]})},T=()=>e.jsx(j,{children:e.jsxs(l,{camera:{fov:50,position:[0,0,4]},children:[" ",e.jsx(n.Suspense,{fallback:null,children:e.jsx(f,{})})]})});export{T as default};
