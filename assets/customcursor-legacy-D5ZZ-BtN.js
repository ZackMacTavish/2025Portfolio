System.register(["./three-legacy-Dbu1oaxp.js","./vendor-legacy-lMxcQOgj.js"],function(e,r){"use strict";var t,n,o,s;return{setters:[e=>{t=e.j},e=>{n=e.b,o=e.u,s=e.c}],execute:function(){const r=o`
  html, body, * { cursor: none !important; }
  .hide-cursor, .hide-cursor * { cursor: none !important; }
  [data-agentation], [data-agentation] *, #feedback-toolbar, #feedback-toolbar * { cursor: auto !important; }
`,i=s.div`
  z-index: 2147483647;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  border: none;
  background-color: rgba(136,136,136,0.2);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  pointer-events: none;
  position: fixed;
  transform: translate3d(0,0,0) scale(1);
  will-change: transform;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  display: none;

  &.hovered {
    background-color: #E88D67;
    box-shadow: 0 0 12px 6px rgba(232,141,103,0.6);
  }

  &.visible {
    display: block;
  }
`;e("default",()=>{const[e,o]=n.useState(!1),s=n.useRef(null),u=n.useRef(!1),c=n.useRef(1),a=n.useRef({x:0,y:0});n.useRef({x:0,y:0});const d=n.useRef(!1),l=n.useRef(null);return n.useEffect(()=>{const e=window.matchMedia("(pointer: fine)").matches;if(/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)&&!e)return void o(!1);if(e)return void o(!0);const r=e=>{e.sourceCapabilities&&!e.sourceCapabilities.firesTouchEvents?(o(!0),window.removeEventListener("mousemove",r)):0===e.movementX&&0===e.movementY||(o(!0),window.removeEventListener("mousemove",r))};return window.addEventListener("mousemove",r),()=>window.removeEventListener("mousemove",r)},[]),n.useEffect(()=>{if(!e)return;let r=null;const t=e=>{if(!s.current)return;const t=e.clientX-25,n=e.clientY-25;var o;a.current.x=t,a.current.y=n,d.current||(d.current=!0,s.current.classList.add("visible")),(o=e.target)&&o.closest&&o.closest('a, button, input, textarea, select, [role="link"], [role="button"], [data-cursor="link"], [data-route], [data-routes-to], .nav-link, .router-link, .link, .btn')?(r&&(clearTimeout(r),r=null),u.current||(u.current=!0,s.current&&s.current.classList.add("hovered"))):u.current&&!r&&(r=setTimeout(()=>{r=null,u.current=!1,s.current&&s.current.classList.remove("hovered")},60)),s.current.style.transform=`translate3d(${t}px, ${n}px, 0) scale(${c.current})`},n=()=>{s.current&&s.current.classList.remove("visible"),d.current=!1},o=()=>{"hidden"===document.visibilityState?n():d.current=!1},i=()=>{if(s.current&&d.current){const e=u.current?.3:1,r=e-c.current;c.current=Math.abs(r)<.01?e:c.current+.55*r,s.current.style.transform=`translate3d(${a.current.x}px, ${a.current.y}px, 0) scale(${c.current})`}l.current=requestAnimationFrame(i)};return document.addEventListener("mousemove",t),document.addEventListener("mouseleave",n),document.addEventListener("visibilitychange",o),l.current=requestAnimationFrame(i),()=>{document.removeEventListener("mousemove",t),document.removeEventListener("mouseleave",n),document.removeEventListener("visibilitychange",o),l.current&&cancelAnimationFrame(l.current),r&&clearTimeout(r)}},[e]),t.jsxs(t.Fragment,{children:[e&&t.jsx(r,{}),e&&t.jsx(i,{ref:s})]})})}}});
