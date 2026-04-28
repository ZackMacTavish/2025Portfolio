import{j as i}from"./three-CIqbc5c4.js";import{b as r,c as u}from"./vendor-hQudadcW.js";import{o as S,A as j,m as c}from"./use-reduced-motion-nfCoKMWW.js";const I=u(c.div)`
  position: fixed;
  inset: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
`,C=u(c.div)`
  position: absolute;
  inset: 0;
  background: ${({$overlayColor:a})=>a};
`;u(c.div)`
  position: fixed;
  inset: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.85);
`;const L=u(c.div)`
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
`;function P({images:a,isActive:o,onComplete:s,layoutId:T,isReverse:n=!1,overlayColor:W="black",loadingBackgroundColor:k="rgba(0, 0, 0, 0.85)"}){const p=S(),[d,w]=r.useState(!1),f=r.useRef(!1);r.useEffect(()=>{if(!o||!d||n)return;f.current=!1;const t=setTimeout(()=>{f.current||(f.current=!0,s())},p?400:2450);return()=>clearTimeout(t)},[o,d,n,p,s]),a.length!==5&&console.warn(`CaseStudyTransition expects exactly 5 images, got ${a.length}`);const[y,z]=r.useState(window.innerWidth<768);r.useEffect(()=>{const e=()=>{z(window.innerWidth<768)};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]);const x=y?[-6,-3,0,3,6]:[-12,-6,0,6,12],h=y?["-7.5%","-3.75%","0","3.75%","7.5%"]:["-15%","-7%","0","7%","15%"],b=y?"85vw":"55vw",g=y?"400px":"700px";return r.useEffect(()=>{if(!o)return;w(!1);const e=a.map(t=>new Promise(m=>{const l=new Image;l.onload=m,l.onerror=m,l.src=t.src}));Promise.all(e).then(()=>{w(!0)})},[o,a]),r.useEffect(()=>{if(o){const e=window.innerWidth-document.documentElement.clientWidth;return document.body.style.overflow="hidden",document.body.style.paddingRight=`${e}px`,()=>{document.body.style.overflow="",document.body.style.paddingRight=""}}},[o]),r.useEffect(()=>{if(!o)return;const e=t=>{t.key==="Escape"&&(t.preventDefault(),s())};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[o,s]),p?i.jsx(j,{children:o&&d&&i.jsx(I,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.4},onAnimationComplete:s,children:a.map((e,t)=>i.jsx(E,{src:e.src,alt:e.alt,style:{"--card-object-position":e.objectPosition||"center center",width:b,maxWidth:g,aspectRatio:"3 / 2",zIndex:10+t},initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.4}},t))})}):o&&!d?i.jsx(c.div,{style:{position:"fixed",inset:0,zIndex:50,display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:k},initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},children:i.jsx(L,{animate:{scale:[1,1.2,1],opacity:[.5,1,.5]},transition:{duration:1.2,repeat:1/0}})}):i.jsx(j,{children:o&&d&&i.jsxs(I,{initial:{opacity:1},animate:{opacity:1},exit:{opacity:0},transition:{duration:0},children:[i.jsx(C,{$overlayColor:W,initial:{opacity:.85},animate:{opacity:n?0:.85},exit:{opacity:0},transition:{opacity:{times:[0,n?.4:.64,1],values:n?[0,.85,0]:[.85,.85,0],duration:n?1.5:2.5}}}),a.map((e,t)=>{const m=n?{opacity:[1,1,0],scale:[1,1,.8],y:[-20,0,60],rotate:[x[t],0,0],x:[h[t],0,0]}:{opacity:[1,1,1,1],scale:[.8,1,1,1],y:[60,0,-20,0],rotate:[0,0,x[t],0],x:[0,0,h[t],0]},l=n?{opacity:{times:[0,.4,1],duration:1.5,ease:"easeInOut"},scale:{times:[0,.4,1],duration:1.5,ease:[.22,1,.36,1]},y:{times:[0,.4,1],duration:1.5,ease:[.22,1,.36,1]},rotate:{times:[0,.4,1],duration:1.5,ease:[.22,1,.36,1]},x:{times:[0,.4,1],duration:1.5,ease:[.22,1,.36,1]}}:{opacity:{times:[0,.17,.58,1],duration:2.4,ease:"easeInOut"},scale:{times:[0,.17,.58,1],duration:2.4,ease:[.22,1,.36,1]},y:{times:[0,.17,.58,1],duration:2.4,ease:[.22,1,.36,1]},rotate:{times:[0,.17,.58,1],duration:2.4,ease:[.22,1,.36,1]},x:{times:[0,.17,.58,1],duration:2.4,ease:[.22,1,.36,1]}};return i.jsx(E,{src:e.src,alt:e.alt,style:{"--card-object-position":e.objectPosition||"center center",width:b,maxWidth:g,aspectRatio:"3 / 2",zIndex:10+t},layoutId:t===2?T:void 0,loading:"eager",initial:{opacity:n?1:0,scale:n?1:.8,y:n?-20:60,rotate:n?x[t]:0,x:n?h[t]:0},animate:m,transition:l,onAnimationComplete:()=>{n&&t===4&&s()}},t)})]})})}export{P as C};
