import{j as r}from"./three-CIqbc5c4.js";import{b as s,c as u}from"./vendor-hQudadcW.js";import{o as C,A as g,m as c}from"./use-reduced-motion-nfCoKMWW.js";const j=new Set;async function L(i){const o=i.map(a=>new Promise(d=>{if(j.has(a.src)){d();return}const t=new Image;t.onload=async()=>{if(typeof t.decode=="function")try{await t.decode()}catch{}j.add(a.src),d()},t.onerror=()=>{d()},t.src=a.src}));await Promise.all(o)}const I=u(c.div)`
  position: fixed;
  inset: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
`,M=u(c.div)`
  position: absolute;
  inset: 0;
  background: ${({$overlayColor:i})=>i};
`;u(c.div)`
  position: fixed;
  inset: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.85);
`;const O=u(c.div)`
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  background: white;
`,E=u(c.img)`
  position: absolute;
  overflow: hidden;
  border-radius: 0.75rem;
  object-fit: cover;
  object-position: var(--card-object-position, center center);
  border: 1px solid rgba(255, 255, 255, 0.2);
  will-change: transform, opacity;
  transform-origin: bottom center;
`;function $({images:i,isActive:o,onComplete:a,layoutId:d,isReverse:t=!1,overlayColor:T="black",loadingBackgroundColor:S="rgba(0, 0, 0, 0.85)"}){const p=C(),[l,w]=s.useState(!1),m=s.useRef(!1);s.useEffect(()=>{if(!o||!l||t)return;m.current=!1;const e=setTimeout(()=>{m.current||(m.current=!0,a())},p?400:2450);return()=>clearTimeout(e)},[o,l,t,p,a]),i.length!==5&&console.warn(`CaseStudyTransition expects exactly 5 images, got ${i.length}`);const[y,W]=s.useState(window.innerWidth<768);s.useEffect(()=>{const n=()=>{W(window.innerWidth<768)};return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]);const f=y?[-6,-3,0,3,6]:[-12,-6,0,6,12],h=y?["-7.5%","-3.75%","0","3.75%","7.5%"]:["-15%","-7%","0","7%","15%"],x=y?"85vw":"55vw",b=y?"400px":"700px";return s.useEffect(()=>{o&&(w(!1),L(i).then(()=>{w(!0)}))},[o,i]),s.useEffect(()=>{if(o){const n=window.innerWidth-document.documentElement.clientWidth;return document.body.style.overflow="hidden",document.body.style.paddingRight=`${n}px`,()=>{document.body.style.overflow="",document.body.style.paddingRight=""}}},[o]),s.useEffect(()=>{if(!o)return;const n=e=>{e.key==="Escape"&&(e.preventDefault(),a())};return window.addEventListener("keydown",n),()=>window.removeEventListener("keydown",n)},[o,a]),p?r.jsx(g,{children:o&&l&&r.jsx(I,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.4},onAnimationComplete:a,children:i.map((n,e)=>r.jsx(E,{src:n.src,alt:n.alt,style:{"--card-object-position":n.objectPosition||"center center",width:x,maxWidth:b,aspectRatio:"3 / 2",zIndex:10+e},initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.4}},e))})}):o&&!l?r.jsx(c.div,{style:{position:"fixed",inset:0,zIndex:50,display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:S},initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},children:r.jsx(O,{animate:{scale:[1,1.2,1],opacity:[.5,1,.5]},transition:{duration:1.2,repeat:1/0}})}):r.jsx(g,{children:o&&l&&r.jsxs(I,{initial:{opacity:1},animate:{opacity:1},exit:{opacity:0},transition:{duration:0},children:[r.jsx(M,{$overlayColor:T,initial:{opacity:.85},animate:{opacity:t?0:.85},exit:{opacity:0},transition:{opacity:{times:[0,t?.4:.64,1],values:t?[0,.85,0]:[.85,.85,0],duration:t?1.5:2.5}}}),i.map((n,e)=>{const k=t?{opacity:[1,1,0],scale:[1,1,.8],y:[-20,0,60],rotate:[f[e],0,0],x:[h[e],0,0]}:{opacity:[1,1,1,1],scale:[.8,1,1,1],y:[60,0,-20,0],rotate:[0,0,f[e],0],x:[0,0,h[e],0]},z=t?{opacity:{times:[0,.4,1],duration:1.5,ease:"easeInOut"},scale:{times:[0,.4,1],duration:1.5,ease:[.22,1,.36,1]},y:{times:[0,.4,1],duration:1.5,ease:[.22,1,.36,1]},rotate:{times:[0,.4,1],duration:1.5,ease:[.22,1,.36,1]},x:{times:[0,.4,1],duration:1.5,ease:[.22,1,.36,1]}}:{opacity:{times:[0,.17,.58,1],duration:2.4,ease:"easeInOut"},scale:{times:[0,.17,.58,1],duration:2.4,ease:[.22,1,.36,1]},y:{times:[0,.17,.58,1],duration:2.4,ease:[.22,1,.36,1]},rotate:{times:[0,.17,.58,1],duration:2.4,ease:[.22,1,.36,1]},x:{times:[0,.17,.58,1],duration:2.4,ease:[.22,1,.36,1]}};return r.jsx(E,{src:n.src,alt:n.alt,style:{"--card-object-position":n.objectPosition||"center center",width:x,maxWidth:b,aspectRatio:"3 / 2",zIndex:10+e},layoutId:e===2?d:void 0,loading:"eager",initial:{opacity:t?1:0,scale:t?1:.8,y:t?-20:60,rotate:t?f[e]:0,x:t?h[e]:0},animate:k,transition:z,onAnimationComplete:()=>{t&&e===4&&a()}},e)})]})})}export{$ as C,L as p};
