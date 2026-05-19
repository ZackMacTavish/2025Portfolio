(function(){System.register(["./three-legacy-B14H55ob.js","./vendor-legacy-BOFKzYT_.js"],function(j,b){"use strict";var t,a,c,i,u,p,o,l,x,d,m;return{setters:[function(e){t=e.j,a=e.C,c=e.u,i=e.a,u=e.R,p=e.T},function(e){o=e.b,l=e.c}],execute:function(){x=l.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
`,d=()=>{const e=o.useRef();c(({clock:h})=>{if(e.current){const f=h.getElapsedTime(),s=e.current.geometry.attributes.position;for(let r=0;r<s.count;r++){const v=s.getX(r),g=s.getY(r),T=Math.sin(v*3+f)*.15+Math.cos(g*3+f)*.15;s.setZ(r,T)}s.needsUpdate=!0}});const[n]=i(p,["https://i.postimg.cc/CL8DLVQP/Black-Turtleneck-popart-01.jpg"]);return n.wrapS=n.wrapT=u,n.repeat.set(1,1),t.jsxs("mesh",{ref:e,children:[t.jsx("planeGeometry",{args:[3,3,64,64]}),t.jsx("meshBasicMaterial",{map:n})]})},j("default",m=()=>t.jsx(x,{children:t.jsxs(a,{camera:{fov:50,position:[0,0,4]},children:[" ",t.jsx(o.Suspense,{fallback:null,children:t.jsx(d,{})})]})}))}}})})();
