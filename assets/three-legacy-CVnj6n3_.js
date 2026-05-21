(function(){System.register(["./three-legacy-B14H55ob.js","./vendor-legacy-BOFKzYT_.js","./index-legacy-2Abikzkg.js"],function(w,b){"use strict";var t,i,a,c,u,d,s,p,l,f,x,h,j;return{setters:[function(e){t=e.j,i=e.C,a=e.u,c=e.a,u=e.R,d=e.T},function(e){s=e.b,p=e.c},function(e){l=e.B}],execute:function(){f=p.div`
  width: 100vw;
  height: 100vh;
  height: 100dvh;
  background-color: black;
`,x=()=>typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,h=()=>{const e=s.useRef(),v=s.useRef(x());a(({clock:g})=>{if(!e.current||v.current)return;const m=g.getElapsedTime(),r=e.current.geometry.attributes.position;for(let n=0;n<r.count;n++){const M=r.getX(n),R=r.getY(n),T=Math.sin(M*3+m)*.15+Math.cos(R*3+m)*.15;r.setZ(n,T)}r.needsUpdate=!0});const[o]=c(d,[l]);return o.wrapS=o.wrapT=u,o.repeat.set(1,1),t.jsxs("mesh",{ref:e,children:[t.jsx("planeGeometry",{args:[3,3,32,32]}),t.jsx("meshBasicMaterial",{map:o})]})},w("default",j=()=>t.jsx(f,{children:t.jsx(i,{camera:{fov:50,position:[0,0,4]},dpr:[1,1.5],gl:{antialias:!1,powerPreference:"low-power"},children:t.jsx(s.Suspense,{fallback:null,children:t.jsx(h,{})})})}))}}})})();
