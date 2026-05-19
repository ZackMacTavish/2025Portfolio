(function(){System.register(["./three-legacy-B14H55ob.js","./vendor-legacy-BOFKzYT_.js","./index-legacy-i3cvQcm0.js"],function(Ui,it){"use strict";var e,c,r,fe,we,ve,be,ye,je,l,$e,Ie,Ce,ke,Re,Pe,re,Se,ae,Be,ne,oe,ze,Fe,Ve,Ee,Te,Me,Ae,He,Le,Oe,We,q,X,K,Ge,Ne,_e,De,T,G,N,de,le,se,ee,Qe,Ue,Ye,qe,ce,me,Xe,Ke,Ze,Je,ei,ii,ti,ri,ai,ni,oi,di,li,si,ci,mi,pe,pi,gi,ui,hi,xi,fi,wi,vi,bi,yi,ji,$i,Ii,Ci,ki,Ri,Pi,Si,Z,Bi,zi,Fi,Vi,Ei,Ti,Mi,Ai,Hi,Li,Oi,Wi,Gi,S,k,x,ie,Ni,Yi;function qi(t){const d=we(()=>ve(t)),{isStatic:v}=c.useContext(be);if(v){const[,j]=c.useState(t);c.useEffect(()=>d.on("change",j),[])}return d}function Xi(t,d,{root:v,margin:j,amount:g="some"}={}){const b=ye(t),R=new WeakMap,P=u=>{u.forEach(p=>{const A=R.get(p.target);if(p.isIntersecting!==!!A)if(p.isIntersecting){const H=d(p.target,p);typeof H=="function"?R.set(p.target,H):B.unobserve(p.target)}else typeof A=="function"&&(A(p),R.delete(p.target))})},B=new IntersectionObserver(P,{root:v,rootMargin:j,threshold:typeof g=="number"?g:$e[g]});return b.forEach(u=>B.observe(u)),()=>B.disconnect()}function _i(t,{root:d,margin:v,amount:j,once:g=!1,initial:b=!1}={}){const[R,P]=c.useState(b);return c.useEffect(()=>{if(!t.current||g&&R)return;const B=()=>(P(!0),g?void 0:()=>P(!1)),u={root:d&&d.current||void 0,margin:v,amount:j};return Xi(t.current,B,u)},[d,t,v,g,j]),R}function ge(t){if(!t)return t;try{return encodeURI(decodeURI(t))}catch{return encodeURI(t)}}function F({src:t,alt:d,avif:v,webp:j,aspectRatio:g,parallaxSpeed:b=0,className:R,borderRadius:P="12px",containerBorderRadius:B,backgroundColor:u,imagePaddingBlock:p,objectFit:A="cover",objectPosition:H="center",imageScale:L=1,disableRevealAnimation:_=!1,loading:D="lazy",decoding:y="async",onLoad:Q}){const O=c.useRef(null),U=je(),[$,I]=c.useState(window.innerWidth<768),m=qi(0);c.useEffect(()=>{const n=()=>{I(window.innerWidth<768)};return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]);const h=Math.max(0,b)*60,M=b>0&&!U&&!$,C=!!g,V=B??P,he=ge(t),J=ge(v),i=ge(j);return c.useEffect(()=>{if(!M){m.set(0);return}const n=()=>{const a=O.current;if(!a)return;const o=a.getBoundingClientRect(),s=window.innerHeight,w=s+o.height,E=w>0?(s-o.top)/w:.5,f=Math.min(1,Math.max(0,E)),Y=-h+f*h*2;m.set(Y)};return n(),window.addEventListener("scroll",n,{passive:!0}),window.addEventListener("resize",n),()=>{window.removeEventListener("scroll",n),window.removeEventListener("resize",n)}},[h,m,M]),e.jsx(Ie,{ref:O,className:R,$aspectRatio:g,$borderRadius:V,$backgroundColor:u,..._?{}:{initial:{opacity:0,y:24},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.2},transition:{duration:.9,ease:[.25,.1,.25,1]}},children:e.jsx(ke,{$imagePaddingBlock:p,$fillContainer:C,$borderRadius:P,children:e.jsxs(Ce,{$fillContainer:C,$borderRadius:P,children:[J&&e.jsx("source",{srcSet:J,type:"image/avif"}),i&&e.jsx("source",{srcSet:i,type:"image/webp"}),e.jsx(Re,{src:he,alt:d,loading:D,decoding:y,onLoad:Q,style:{y:M?m:0,scale:L},$objectFit:A,$objectPosition:H,$hasParallax:M,$fillContainer:C,$borderRadius:P})]})})})}function ue({images:t,autoPlay:d=!1,intervalMs:v=4e3,showControls:j=!0,showDots:g=!0}){c.useEffect(()=>{if(!D.current)return;let m=!1;try{D.current.focus({preventScroll:!0}),m=!0}catch{}},[]);const[b,R]=c.useState(0),[P,B]=c.useState(0),[u,p]=c.useState(!0),[A,H]=c.useState(!1),[L,_]=c.useState(!1),D=c.useRef(null),y=t.length,Q=m=>{if(!y)return;const h=(m+y)%y;B(b),p(!1),R(h)},O=()=>Q(b+1),U=()=>Q(b-1);if(c.useEffect(()=>{if(!d||L||y<2)return;const m=setInterval(()=>{R(h=>(h+1)%y)},v);return()=>clearInterval(m)},[d,v,L,y]),c.useEffect(()=>{if(y<2)return;const m=M=>new Promise(C=>{const V=new Image;V.onload=async()=>{if(typeof V.decode=="function")try{await V.decode()}catch{}C()},V.onerror=()=>C(),V.src=M});(async()=>{const M=t.flatMap(C=>[C.avif,C.webp,C.src].filter(V=>!!V));await Promise.all(M.map(C=>m(C)))})()},[t,y]),!y)return null;const $=t[b],I=t[P];return e.jsxs(Pe,{children:[e.jsxs(re,{ref:D,tabIndex:0,"data-carousel-frame":"true",onMouseEnter:()=>H(!0),onMouseLeave:()=>H(!1),onKeyDown:m=>{m.key==="ArrowRight"&&(m.preventDefault(),_(!0),O()),m.key==="ArrowLeft"&&(m.preventDefault(),_(!0),U())},drag:"x",dragConstraints:{left:0,right:0},onDragEnd:(m,h)=>{h.offset.x>80?U():h.offset.x<-80&&O()},children:[!u&&e.jsx(ne,{style:{zIndex:1},children:e.jsx(oe,{src:I.src,alt:I.alt,avif:I.avif,webp:I.webp,aspectRatio:I.aspectRatio||"3/2",borderRadius:"0",backgroundColor:I.backgroundColor,imagePaddingBlock:I.imagePaddingBlock,objectFit:I.objectFit||"cover",objectPosition:I.objectPosition||"center",disableRevealAnimation:!0,loading:"eager",decoding:"auto"},`prev-${I.src}-${P}`)}),e.jsx(ne,{style:{zIndex:2},children:e.jsx(oe,{src:$.src,alt:$.alt,avif:$.avif,webp:$.webp,aspectRatio:$.aspectRatio||"3/2",borderRadius:"0",backgroundColor:$.backgroundColor,imagePaddingBlock:$.imagePaddingBlock,objectFit:$.objectFit||"cover",objectPosition:$.objectPosition||"center",disableRevealAnimation:!0,loading:"eager",decoding:"auto",onLoad:()=>p(!0),style:{position:u?"relative":"absolute"}},`active-${$.src}-${b}`)}),y>1&&j&&e.jsxs(Se,{$visible:A,children:[e.jsx(ae,{type:"button",$side:"left","aria-label":"Previous image",onClick:U,children:"‹"}),d&&e.jsx(Be,{type:"button","aria-label":L?"Resume slideshow":"Pause slideshow",onClick:()=>_(m=>!m),children:L?"▶":"❚❚"}),e.jsx(ae,{type:"button",$side:"right","aria-label":"Next image",onClick:O,children:"›"})]})]}),y>1&&g&&e.jsx(ze,{children:t.map((m,h)=>e.jsx(Fe,{type:"button",$active:h===b,"aria-label":`Go to slide ${h+1}`,"aria-current":h===b,onClick:()=>Q(h)},`${m.src}-${h}`))})]})}function Ki({tags:t}){const d=c.useRef(null),v=_i(d,{once:!0,margin:"100px"});return e.jsx("div",{ref:d,children:v&&e.jsx(Ci,{children:t.map((j,g)=>e.jsx(l.div,{initial:{opacity:0,y:8},animate:{opacity:1,y:0},transition:{duration:.35,delay:g*.04},children:e.jsxs(ki,{children:[j,g<t.length-1&&e.jsx(Ri,{children:"•"})]})},`${j}-${g}`))})})}function Zi({images:t}){const d=c.useRef(null),v=_i(d,{once:!0,margin:"100px"});return e.jsx("div",{ref:d,children:v&&e.jsx(Pi,{children:e.jsx(l.div,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{duration:.45},children:e.jsx(ue,{images:t,autoPlay:!0,intervalMs:2800})})})})}return{setters:[function(t){e=t.j},function(t){c=t.b,r=t.c,fe=t.R},function(t){we=t.L,ve=t.M,be=t.N,ye=t.O,je=t.Q,l=t.A}],execute:function(){$e={some:0,all:1},Ie=r(l.div)`
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: ${t=>t.$borderRadius};
  background: ${t=>t.$backgroundColor||"transparent"};

  ${t=>t.$aspectRatio?`
    aspect-ratio: ${t.$aspectRatio};
  `:""}
`,Ce=r.picture`
  display: block;
  width: 100%;
  height: ${t=>t.$fillContainer?"100%":"auto"};
  overflow: hidden;
  border-radius: ${t=>t.$borderRadius};
`,ke=r.div`
  position: ${t=>t.$fillContainer?"absolute":"relative"};
  inset: ${t=>t.$fillContainer?`${t.$imagePaddingBlock||"0"} 0`:"auto"};
  padding-block: ${t=>t.$fillContainer?"0":t.$imagePaddingBlock||"0"};
  overflow: hidden;
  border-radius: ${t=>t.$borderRadius};
`,Re=r(l.img)`
  display: block;
  width: 100%;
  height: ${t=>t.$fillContainer?t.$hasParallax?"110%":"100%":"auto"};
  object-fit: ${t=>t.$objectFit};
  object-position: ${t=>t.$objectPosition};
  border-radius: ${t=>t.$borderRadius};
`,Pe=r.div`
  width: 100%;
`,re=fe.forwardRef((t,d)=>e.jsx(l.div,{ref:d,style:{position:"relative",width:"100%",borderRadius:"12px",overflow:"hidden",aspectRatio:"3 / 2",background:"#f0efeb",...t.style||{}},...t})),re.displayName="Frame",Se=r.div`
  position: absolute;
  inset: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${t=>t.$visible?1:0};
  transition: opacity 0.2s ease;
  pointer-events: none;
`,ae=r.button`
  pointer-events: auto;
  position: absolute;
  top: 50%;
  ${t=>t.$side}: 1rem;
  transform: translateY(-50%);
  width: 52px;
  height: 52px;
  border-radius: 999px;
  border: none;
  background: rgba(17, 17, 17, 0.72);
  color: #fff;
  font-size: 1.8rem;
  line-height: 1;
  cursor: pointer;
  display: grid;
  place-items: center;

  &:hover {
    background: rgba(17, 17, 17, 0.88);
  }
`,Be=r.button`
  pointer-events: auto;
  width: 68px;
  height: 68px;
  border-radius: 999px;
  border: none;
  background: rgba(17, 17, 17, 0.72);
  color: #fff;
  font-size: 1.4rem;
  font-weight: 700;
  cursor: pointer;
  display: grid;
  place-items: center;

  &:hover {
    background: rgba(17, 17, 17, 0.88);
  }
`,ne=r.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
`,oe=r(F)`
  width: 100%;
  height: 100%;
`,ze=r.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`,Fe=r.button`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  padding: 0;
  background: ${t=>t.$active?"#333":"#ccc"};
  transform: ${t=>t.$active?"scale(1.3)":"scale(1)"};
  transition: all 0.3s;
`,Ve=r.div`
  min-height: 100vh;
  background: white;
`,Ee=r.section`
  position: relative;
  overflow: hidden;
  min-height: 90vh;
  background: #f5f5f5;
  padding: 5rem 1.5rem 10rem;

  @media (min-width: 768px) {
    min-height: 96vh;
    padding: 7rem 1.5rem 14rem;
  }

  @media (max-height: 980px) and (min-width: 901px) {
    display: flex;
    flex-direction: column;
    gap: clamp(1rem, 2vh, 1.5rem);
    min-height: auto;
    padding: 6rem 1.5rem 3rem;
  }

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    gap: clamp(1rem, 3vw, 1.75rem);
    min-height: auto;
    padding: 4.5rem 1.25rem 2rem;
  }
`,Te=r.div`
  position: relative;
  z-index: 2;
  margin: 0 auto;
  max-width: 64rem;
`,Me=r.div`
  margin-bottom: 1.25rem;
`,Ae=r.div`
  position: absolute;
  left: 50%;
  bottom: -32%;
  transform: translateX(-50%);
  width: min(72rem, 92vw);
  z-index: 1;
  pointer-events: none;

  @media (max-width: 768px) {
    bottom: -18%;
    width: 120vw;
  }

  @media (max-width: 900px) {
    position: relative;
    left: auto;
    bottom: auto;
    transform: none;
    width: 100%;
    max-width: 100%;
    margin: 1rem auto 0;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 0.75rem;
  }

  @media (max-height: 980px) and (min-width: 901px) {
    position: relative;
    left: auto;
    bottom: auto;
    transform: none;
    width: min(64rem, 88vw);
    max-width: 100%;
    margin: 0 auto;
  }
`,He=r(F)`
  width: 100%;

  img {
    filter: saturate(0.96);
  }
`,Le=r(l.div)`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    #e8e8e8 0%,
    #f5f5f5 50%,
    #e8e8e8 100%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;

  @keyframes shimmer {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`,Oe=r.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: ${({$backgroundColor:t})=>t||"transparent"};
  padding-block: ${({$backgroundColor:t})=>t?"clamp(1rem, 2vw, 1.5rem)":"0"};
  border-radius: ${({$backgroundColor:t})=>t?"24px":"0"};
  overflow: hidden;
`,We=r.div`
  margin-bottom: 3rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`,q=r.div`
  text-align: left;
`,X=r.p`
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  color: #a3a3a3;
  text-transform: uppercase;
  margin: 0;
  margin-bottom: 0.5rem;
`,K=r.p`
  font-size: 0.875rem;
  color: #4b5563;
  margin: 0;
`,Ge=r(l.h1)`
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 1.2;
  color: #111827;
  max-width: 56rem;

  @media (min-width: 768px) {
    font-size: 3rem;
  }

  @media (min-width: 1024px) {
    font-size: 3.75rem;
  }
`,Ne=r.div``,_e=r.section`
  background: ${t=>t.$background};
  padding: ${t=>t.$compact?"0":"3.75rem 0"};
`,De=r.div`
  margin: 0 auto;
  max-width: 64rem;
`,T=r.h2`
  font-size: 1.875rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1.5rem;
`,G=r.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,N=r.p`
  margin: 0;
  max-width: 68ch;
  font-size: 1rem;
  line-height: 1.625;
  color: #666666;
`,de=r.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`,le=r(l.div)``,se=r(l.div)`
  overflow: hidden;
  border-radius: 0.5rem;
`,ee=r(F)`
  width: 100%;
  height: 24rem;

  @media (min-width: 768px) {
    height: 100%;
  }
`,Qe=r(l.div)`
  overflow: hidden;
  border-radius: 0;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
`,Ue=r.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;

  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
`,Ye=r.p`
  margin-top: 0.75rem;
  font-size: 0.875rem;
  font-style: italic;
  color: #8b8b8b;
`,qe=r.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`,ce=r(l.div)`
  overflow: hidden;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover img {
    transform: scale(1.02);
  }
`,me=r(F)`
  width: 100%;

  img {
    transition: transform 0.3s ease-out;
  }
`,Xe=r.div`
  display: grid;
  gap: 1rem;

  ${t=>t.$count===3?`
        grid-template-columns: 1.2fr 0.8fr;
        grid-template-rows: auto auto;
      `:t.$count===4?`
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: auto auto;
      `:`
      grid-template-columns: repeat(3, 1fr);
      grid-auto-rows: minmax(200px, auto);
    `}

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 0.75rem;
    grid-template-rows: auto;
    grid-auto-rows: auto;
  }
`,Ke=r(l.div)`
  cursor: pointer;
  overflow: hidden;
  border-radius: 10px;

  ${t=>{if(t.$count===3){if(t.$index===0)return`
          grid-column: 1;
          grid-row: 1 / span 2;
        `;if(t.$index===1)return`
          grid-column: 2;
          grid-row: 1;
        `;if(t.$index===2)return`
          grid-column: 2;
          grid-row: 2;
        `}if(t.$count===4){if(t.$index===0)return`
          grid-column: 1 / span 2;
          grid-row: 1;
        `;if(t.$index===1)return`
          grid-column: 3;
          grid-row: 1;
        `;if(t.$index===2)return`
          grid-column: 1;
          grid-row: 2;
        `;if(t.$index===3)return`
          grid-column: 2 / span 2;
          grid-row: 2;
        `}return t.$count>=5&&t.$index===0?`
        grid-column: 1 / span 2;
      `:""}}

  @media (max-width: 768px) {
    grid-column: auto !important;
    grid-row: auto !important;
  }

  &:hover img {
    transform: scale(1.03);
  }
`,Ze=r(F)`
  width: 100%;

  img {
    transition: transform 0.5s ease-out;
  }
`,Je=r.section`
  display: grid;
  grid-template-columns: 0.8fr 2.2fr;
  grid-template-rows: auto auto;
  gap: 1.5rem;
  align-items: start;
  max-width: 1200px;
  margin: 0 auto;
  padding: 3.5rem 6%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 2.5rem 1.25rem;
  }
`,ei=r(l.div)`
  display: flex;
  flex-direction: column;
  grid-column: 1;
  grid-row: 1 / span 2;

  @media (max-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
  }
`,ii=r.span`
  font-size: 0.85rem;
  line-height: 2.4;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${t=>t.$active?"#000":"#bbb"};
  font-weight: ${t=>t.$active?700:600};

  @media (max-width: 768px) {
    line-height: 1.6;
  }
`,ti=r.div`
  position: relative;
  grid-column: 2;
  grid-row: 1;
`,r(l.div)`
  position: absolute;
  inset: 0;
  margin: -20px;
  border-radius: 14px;
  z-index: 0;
  background: ${t=>t.$accentColor};
`,ri=r(l.div)`
  position: relative;
  z-index: 1;
`,ai=r(F)`
  width: 100%;
`,ni=r(l.div)`
  grid-column: 2;
  grid-row: 2;
`,oi=r.h3`
  margin: 0 0 0.35rem;
  font-size: 1.1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #555;
`,di=r(G)`
  gap: 0.45rem;
`,li=r(G)`
  gap: 0.6rem;
`,si=r.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  align-items: start;
  width: 100%;
  max-width: 64rem;
  margin: 0 auto;
  padding: 3rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 2.5rem 1.25rem;
  }
`,ci=r(l.div)`
  border-radius: 12px;
  overflow: hidden;
`,mi=r(l.div)`
  margin-top: 0;
  border-radius: 12px;
  overflow: hidden;

  @media (max-width: 768px) {
    margin-top: 0;
  }
`,pe=r(F)`
  width: 100%;
`,pi=r.p`
  margin: 2rem auto 0;
  max-width: 600px;
  text-align: center;
  font-size: 0.95rem;
  color: #888;
`,gi=r.div`
  margin: 0 auto;
  max-width: 45rem;
`,ui=r(l.div)``,hi=r(N)`
  font-size: clamp(1rem, 1.15vw, 1.15rem);
  line-height: 1.65;
  max-width: 62ch;
  text-wrap: pretty;
`,xi=r.div`
  margin: 0 auto;
  max-width: 800px;
  padding: 5rem 6%;
`,fi=r(l.div)`
  border-left: 3px solid ${t=>t.$accentColor||"#333"};
  padding-left: 2rem;
  margin-left: 0;

  ${t=>t.$accentColor?`
    background: ${t.$accentColor}12;
    padding: 3rem 2.5rem;
    border-radius: 0 12px 12px 0;
  `:""}
`,wi=r.p`
  margin: 0;
  text-align: left;
  font-size: clamp(1.2rem, 2.1vw, 1.55rem);
  font-style: italic;
  line-height: 1.5;
  color: #1a1a1a;
  text-wrap: balance;
`,vi=r.cite`
  display: block;
  margin-top: 1.5rem;
  font-size: 0.85rem;
  font-style: normal;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #999;
`,bi=r.section`
  display: flex;
  flex-direction: column;
  gap: 0;
  padding: 0 0 4rem;
`,yi=r.div`
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  padding: 0;
  background: white;
`,ji=r.div`
  position: relative;
  width: min(65vw, 1080px);
  margin: 0 auto;
  padding-top: ${t=>t.$fullBleed?"0":"1.5rem"};

  @media (max-width: 1024px) {
    width: min(72vw, 980px);
  }

  @media (max-width: 768px) {
    width: calc(100vw - 2.5rem);
    padding-top: ${t=>t.$fullBleed?"0":"1rem"};
  }
`,$i=r.div`
  position: relative;
  min-height: 0;
  height: clamp(340px, 46vw, 680px);

  ${t=>t.$fullBleed?`
    width: 100vw;
    margin-left: calc(-50vw + 50%);
  `:""}

  @media (max-width: 768px) {
    height: clamp(260px, 58vw, 460px);
  }
`,Ii=r(F)`
  height: 100%;
`,Ci=r.div`
  margin-top: 1rem;
  padding: 0 1.25rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.25rem;
`,ki=r.span`
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #888;
  padding: 0.25rem 0;
`,Ri=r.span`
  color: #9a9a9a;
  margin: 0 0.25rem;
`,Pi=r.div`
  margin-top: 1rem;
  padding: 0 0 1.25rem;
`,Si=r.div`
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  padding: 3.5rem 0 3rem;
  background: #f0efeb;

  > * {
    width: min(65vw, 1080px);
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 1024px) {
    > * {
      width: min(72vw, 980px);
    }
  }

  @media (max-width: 768px) {
    padding: 2.5rem 0 2.5rem;

    > * {
      width: calc(100vw - 2.5rem);
    }
  }
`,Z=r(l.div)`
  margin-bottom: 3rem;

  &:last-child {
    margin-bottom: 0;
  }
`,Bi=r.p`
  margin: 0;
  border-left: 3px solid currentColor;
  padding-left: 1.5rem;
  text-align: left;
  font-size: 1.5rem;
  font-style: italic;
  line-height: 1.5;
  color: #222;
`,zi=r.section`
  position: relative;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    min-height: 80vh;
  }
`,Fi=r(l.div)`
  position: relative;
  width: 100%;
  height: min(92vh, 920px);

  @media (max-width: 768px) {
    height: min(78vh, 620px);
  }
`,Vi=r(F)`
  height: 100%;
  border-radius: 0;
`,Ei=r.div`
  position: relative;
  z-index: 2;
  padding: 2.5rem 6% 3.5rem;
  background: white;

  @media (max-width: 768px) {
    padding: 2rem 1.25rem;
  }
`,Ti=r(l.h2)`
  color: #111;
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  line-height: 1.15;
  max-width: 700px;
  margin: 0 0 1rem;
`,Mi=r(l.p)`
  margin: 0;
  color: #222;
  font-size: 1.05rem;
  line-height: 1.7;
  max-width: 540px;
`,Ai=r.section`
  position: relative;
  padding: 3.5rem 6%;
`,Hi=r.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 64rem;
`,r(l.div)`
  position: absolute;
  top: 15%;
  bottom: 5%;
  left: 8%;
  right: -2%;
  z-index: 0;
  border-radius: 16px;
  background: ${t=>t.$accentColor};

  @media (max-width: 768px) {
    top: 10%;
    bottom: 8%;
    left: 4%;
    right: -1%;
  }
`,Li=r(l.div)`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  border-radius: 12px;
  border: ${t=>t.$containerBorder||"none"};
  box-shadow: ${t=>t.$containerShadow||"0 24px 60px rgba(0, 0, 0, 0.15), 0 8px 20px rgba(0, 0, 0, 0.08)"};

  @media (max-width: 768px) {
    max-width: 100%;
  }
`,Oi=r(F)`
  width: 100%;
`,Wi=r.div`
  position: relative;
  z-index: 1;
  max-width: 600px;
  margin: 2.5rem auto 0;
  text-align: left;
`,r.section`
  border-top: 1px solid #e5e7eb;
  background: white;
  padding: 4rem 1.5rem 6rem;

  @media (min-width: 768px) {
    padding: 6rem 1.5rem;
  }
`,r.div`
  margin: 0 auto;
  max-width: 64rem;
`,r.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 2rem;
`,r.p`
  margin: 0;
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  color: #9ca3af;
  text-transform: uppercase;
`,r.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`,r.button`
  border: 1px solid #d1d5db;
  background: #ffffff;
  color: #111827;
  border-radius: 999px;
  padding: 0.45rem 0.75rem;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  cursor: pointer;
  transition: all 180ms ease;

  &:hover {
    border-color: #9ca3af;
    background: #f9fafb;
  }
`,Gi=r(l.button)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`,r.p`
  font-size: 0.875rem;
  letter-spacing: 0.1em;
  color: #a3a3a3;
  text-transform: uppercase;
  margin: 0;
`,r.h3`
  margin-top: 0.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;

  @media (min-width: 768px) {
    margin-top: 0;
    font-size: 1.875rem;
  }
`,r.div`
  font-size: 1.5rem;
  color: #a3a3a3;
  transition: color 200ms;

  ${Gi}:hover & {
    color: #111827;
  }
`,S={duration:.7,ease:[.25,.1,.25,1]},k={duration:.9,ease:[.25,.1,.25,1]},x={once:!0,amount:.2},ie=new Set(["full-width-image","parallax-reveal","image-pair","staggered-pair"]),Ni=new Set(["sticky-split","parallax-reveal"]),Ui("C",Yi=c.memo(function({caseStudy:d,nextProject:v,onNextProject:j,topAction:g}){const[b,R]=c.useState(!1),[P,B]=c.useState("idle"),u=d.heroImage||d.coverImage,p=i=>i?i.split(`

`).filter(n=>n.trim()):[],A=i=>{if(!i)return null;const n=i.trim(),a=/^#([0-9a-fA-F]{3})$/,o=/^#([0-9a-fA-F]{6})$/;if(a.test(n)){const[,s]=n.match(a),w=parseInt(s[0]+s[0],16),E=parseInt(s[1]+s[1],16),f=parseInt(s[2]+s[2],16);return`rgba(${w}, ${E}, ${f}, 0.06)`}if(o.test(n)){const[,s]=n.match(o),w=parseInt(s.slice(0,2),16),E=parseInt(s.slice(2,4),16),f=parseInt(s.slice(4,6),16);return`rgba(${w}, ${E}, ${f}, 0.06)`}return null},H=(i,n)=>{const a=A(i.accentColor);return a||(n?"white":"#f5f5f5")},L=()=>e.jsxs(We,{children:[e.jsxs(q,{children:[e.jsx(X,{children:"Client"}),e.jsx(K,{children:d.meta.client})]}),e.jsxs(q,{children:[e.jsx(X,{children:"Role"}),e.jsx(K,{children:d.meta.role})]}),e.jsxs(q,{children:[e.jsx(X,{children:"Timeline"}),e.jsx(K,{children:d.meta.timeline})]}),e.jsxs(q,{children:[e.jsx(X,{children:"Platform"}),e.jsx(K,{children:d.meta.platform})]})]}),_=i=>e.jsx("div",{children:e.jsxs(de,{children:[e.jsxs(le,{initial:{opacity:0,x:-30},whileInView:{opacity:1,x:0},viewport:x,transition:S,children:[i.heading&&e.jsx(T,{children:i.heading}),e.jsx(G,{children:p(i.body).map((n,a)=>e.jsx(N,{children:n},a))})]}),i.images&&i.images[0]&&e.jsx(se,{initial:{opacity:0,x:30},whileInView:{opacity:1,x:0},viewport:x,transition:k,children:e.jsx(ee,{src:i.images[0].src,alt:i.images[0].alt,avif:i.images[0].avif,webp:i.images[0].webp,aspectRatio:i.images[0].aspectRatio||"3/2",borderRadius:"8px",objectFit:"cover"})})]})},i.id),D=i=>e.jsx("div",{children:e.jsxs(de,{children:[i.images&&i.images[0]&&e.jsx(se,{style:{order:2},initial:{opacity:0,x:-30},whileInView:{opacity:1,x:0},viewport:x,transition:k,children:e.jsx(ee,{src:i.images[0].src,alt:i.images[0].alt,avif:i.images[0].avif,webp:i.images[0].webp,aspectRatio:i.images[0].aspectRatio||"3/2",borderRadius:"8px",objectFit:"cover"})}),e.jsxs(le,{style:{order:1},initial:{opacity:0,x:30},whileInView:{opacity:1,x:0},viewport:x,transition:S,children:[i.heading&&e.jsx(T,{children:i.heading}),e.jsx(G,{children:p(i.body).map((n,a)=>e.jsx(N,{children:n},a))})]})]})},i.id),y=i=>e.jsxs("div",{children:[e.jsx(Qe,{initial:{opacity:0,scale:.97},whileInView:{opacity:1,scale:1},viewport:x,transition:k,children:i.images&&i.images[0]&&e.jsx(ee,{src:i.images[0].src,alt:i.images[0].alt,avif:i.images[0].avif,webp:i.images[0].webp,aspectRatio:i.images[0].aspectRatio||"16/9",borderRadius:"8px",objectFit:"cover",style:{width:"100%"}})}),(i.caption||i.body)&&e.jsx(Ye,{children:i.caption||i.body})]},i.id),Q=i=>e.jsxs("div",{children:[i.heading&&e.jsx(T,{children:i.heading}),e.jsx(Ue,{children:i.images&&i.images.slice(0,2).map((n,a)=>e.jsx(ce,{initial:{opacity:0,scale:.97},whileInView:{opacity:1,scale:1},viewport:x,transition:{...k,delay:a*.15},children:e.jsx(me,{src:n.src,alt:n.alt,avif:n.avif,webp:n.webp,aspectRatio:n.aspectRatio||"3/2",borderRadius:"0",objectFit:"contain",style:{height:"26rem"}})},a))})]},i.id),O=i=>e.jsxs("div",{children:[i.heading&&e.jsx(T,{children:i.heading}),e.jsx(qe,{children:i.images&&i.images.map((n,a)=>e.jsx(ce,{initial:{opacity:0,scale:.95},whileInView:{opacity:1,scale:1},viewport:x,whileHover:{scale:1.02},transition:{...k,delay:a*.1},children:e.jsx(me,{src:n.src,alt:n.alt,avif:n.avif,webp:n.webp,aspectRatio:n.aspectRatio||"1/1",borderRadius:"8px",objectFit:"cover"})},a))})]},i.id),U=i=>{const n=i.images||[];return e.jsxs("div",{children:[i.heading&&e.jsx(T,{children:i.heading}),e.jsx(Xe,{$count:n.length,children:n.map((a,o)=>e.jsx(Ke,{$index:o,$count:n.length,initial:{opacity:0,y:20,scale:.97},whileInView:{opacity:1,y:0,scale:1},viewport:{once:!0,amount:.2},transition:{...S,delay:o*.08},children:e.jsx(Ze,{src:a.src,alt:a.alt,avif:a.avif,webp:a.webp,aspectRatio:a.aspectRatio||"4/3",borderRadius:"10px",objectFit:"cover"})},`${a.src}-${o}`))})]},i.id)},$=i=>{var n;const a=(n=i.images)===null||n===void 0?void 0:n[0],o=i.labels||[];return e.jsxs(Je,{children:[e.jsx(ei,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},viewport:{once:!0,amount:.2},transition:S,children:o.map((s,w)=>e.jsx(ii,{$active:w===0,children:s},`${s}-${w}`))}),e.jsx(ti,{children:a&&e.jsx(ri,{initial:{opacity:0,y:24},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.2},transition:k,children:e.jsx(ai,{src:a.src,alt:a.alt,avif:a.avif,webp:a.webp,aspectRatio:a.aspectRatio||"4/5",borderRadius:"12px",objectFit:a.objectFit||"cover",objectPosition:a.objectPosition,backgroundColor:a.backgroundColor,imagePaddingBlock:a.imagePaddingBlock})})}),e.jsxs(ni,{initial:{opacity:0,x:20},whileInView:{opacity:1,x:0},viewport:{once:!0,amount:.2},transition:S,children:[i.heading&&e.jsx(oi,{children:i.heading}),e.jsx(di,{children:p(i.body).map((s,w)=>e.jsx(N,{children:s},w))})]})]},i.id)},I=i=>{const n=i.images||[];if(n.length<=1)return y(i);const a=n[0],o=n[1];return e.jsxs("div",{children:[e.jsxs(si,{children:[e.jsx(ci,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.2},transition:k,children:e.jsx(pe,{src:a.src,alt:a.alt,avif:a.avif,webp:a.webp,aspectRatio:a.aspectRatio,borderRadius:"12px",backgroundColor:a.backgroundColor,imagePaddingBlock:a.imagePaddingBlock,objectFit:a.objectFit||"cover",objectPosition:a.objectPosition})}),e.jsx(mi,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.2},transition:{...k,delay:.15},children:e.jsx(pe,{src:o.src,alt:o.alt,avif:o.avif,webp:o.webp,aspectRatio:o.aspectRatio,borderRadius:"12px",backgroundColor:o.backgroundColor,imagePaddingBlock:o.imagePaddingBlock,objectFit:o.objectFit||"cover",objectPosition:o.objectPosition||"top center"})})]}),i.body&&e.jsx(pi,{children:i.body})]},i.id)},m=i=>e.jsx("div",{children:e.jsx(gi,{children:e.jsxs(ui,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:x,transition:S,children:[i.heading&&e.jsx(T,{style:{textAlign:"left"},children:i.heading}),e.jsx(G,{style:{alignItems:"flex-start"},children:p(i.body).map((n,a)=>e.jsx(hi,{style:{textAlign:"left"},children:n},a))})]})})},i.id),h=i=>e.jsx("div",{children:e.jsx(xi,{children:e.jsxs(fi,{$accentColor:i.accentColor,initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:x,transition:S,children:[e.jsx(wi,{children:i.body}),i.heading&&e.jsx(vi,{children:i.heading})]})})},i.id),M=i=>e.jsxs("div",{children:[i.heading&&e.jsx(T,{children:i.heading}),i.images&&i.images.length>0&&e.jsx(l.div,{initial:{opacity:0,scale:.97},whileInView:{opacity:1,scale:1},viewport:x,transition:k,children:e.jsx(ue,{images:i.images})})]},i.id),C=i=>{var n,a,o,s,w,E;const f=((n=i.stickyContent)===null||n===void 0?void 0:n.image)||((a=i.images)===null||a===void 0?void 0:a[0]),Y=((o=i.stickyContent)===null||o===void 0?void 0:o.fullBleedImage)||!1,Di=((s=i.stickyContent)===null||s===void 0?void 0:s.tags)||[],Qi=((w=i.stickyContent)===null||w===void 0?void 0:w.collateralImages)||[],Ji=((E=i.scrollContent)===null||E===void 0?void 0:E.blocks)||[];return e.jsxs(bi,{children:[e.jsx(Si,{children:Ji.map((z,te)=>{if(z.type==="text")return e.jsxs(Z,{initial:{opacity:0,x:20},whileInView:{opacity:1,x:0},viewport:x,transition:S,children:[z.heading&&e.jsx(T,{children:z.heading}),e.jsx(li,{children:p(z.body).map((W,et)=>e.jsx(N,{children:W},et))})]},`${i.id}-text-${te}`);if(z.type==="image"){var xe;const W=(xe=z.images)===null||xe===void 0?void 0:xe[0];return W?e.jsx(Z,{initial:{opacity:0,scale:.97},whileInView:{opacity:1,scale:1},viewport:x,transition:k,children:e.jsx(F,{src:W.src,alt:W.alt,avif:W.avif,webp:W.webp,aspectRatio:W.aspectRatio||"3/2",borderRadius:"8px",objectFit:"cover"})},`${i.id}-image-${te}`):null}return z.type==="carousel"?e.jsx(Z,{initial:{opacity:0,scale:.97},whileInView:{opacity:1,scale:1},viewport:x,transition:k,children:z.images&&z.images.length>0&&e.jsx(ue,{images:z.images,showControls:!1,showDots:!1})},`${i.id}-carousel-${te}`):z.type==="quote"?e.jsx(Z,{initial:{opacity:0,x:30},whileInView:{opacity:1,x:0},viewport:x,transition:S,children:e.jsx(Bi,{children:z.body})},`${i.id}-quote-${te}`):null})}),e.jsx(yi,{children:e.jsxs(ji,{$fullBleed:Y,children:[f&&e.jsx($i,{$fullBleed:Y,children:e.jsx(Ii,{src:f.src,alt:f.alt,avif:f.avif,webp:f.webp,aspectRatio:f.aspectRatio||"16/9",borderRadius:"12px",backgroundColor:f.backgroundColor,imagePaddingBlock:f.imagePaddingBlock,objectFit:f.objectFit||"cover",objectPosition:f.objectPosition||"center"})}),Di.length>0&&e.jsx(Ki,{tags:Di}),Qi.length>0&&e.jsx(Zi,{images:Qi})]})})]},i.id)},V=i=>{var n,a;const o=(n=i.images)===null||n===void 0?void 0:n[0];return o?e.jsxs(zi,{children:[e.jsx(Fi,{children:e.jsx(Vi,{src:o.src,alt:o.alt,avif:o.avif,webp:o.webp,parallaxSpeed:(a=i.parallaxSpeed)!==null&&a!==void 0?a:.4,objectFit:"cover"})}),e.jsxs(Ei,{children:[i.heading&&e.jsx(Ti,{initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:x,transition:S,children:i.heading}),i.body&&e.jsx(Mi,{initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:x,transition:{...S,delay:.15},children:i.body})]})]},i.id):null},he=i=>{var n;const a=(n=i.images)===null||n===void 0?void 0:n[0];return a?e.jsx(Ai,{children:e.jsxs(Hi,{children:[e.jsx(Li,{$containerBorder:a.containerBorder,$containerShadow:a.containerShadow,initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:x,transition:k,children:e.jsx(Oi,{src:a.src,alt:a.alt,avif:a.avif,webp:a.webp,aspectRatio:a.aspectRatio,borderRadius:a.borderRadius||"12px",containerBorderRadius:a.containerBorderRadius,objectFit:a.objectFit||"cover",objectPosition:a.objectPosition,imageScale:a.imageScale,backgroundColor:a.backgroundColor,imagePaddingBlock:a.imagePaddingBlock})}),(i.heading||i.body)&&e.jsxs(Wi,{children:[i.heading&&e.jsx(T,{children:i.heading}),i.body&&e.jsx(G,{style:{alignItems:"flex-start"},children:p(i.body).map((o,s)=>e.jsx(N,{style:{textAlign:"left"},children:o},s))})]})]})},i.id):null},J=i=>{switch(i.layout){case"text-left-image-right":return _(i);case"text-right-image-left":return D(i);case"full-width-image":return y(i);case"image-pair":return Q(i);case"gallery-grid":return O(i);case"asymmetric-mosaic":return U(i);case"three-column-feature":return $(i);case"staggered-pair":return I(i);case"text-only":return m(i);case"quote":return h(i);case"image-carousel":return M(i);case"parallax-reveal":return V(i);case"image-on-color-block":return he(i);case"sticky-split":return C(i);default:return null}};return e.jsxs(Ve,{children:[e.jsxs(Ee,{children:[e.jsxs(Te,{children:[g&&e.jsx(Me,{children:g}),e.jsx(L,{}),e.jsx(Ge,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.2,ease:[.25,.1,.25,1]},children:d.heroHeadline})]}),e.jsx(Ae,{children:e.jsxs(Oe,{$backgroundColor:u.backgroundColor,children:[e.jsx(He,{src:u.src,alt:u.alt,avif:u.avif,webp:u.webp,aspectRatio:u.aspectRatio||"16/9",borderRadius:"8px",objectFit:u.objectFit||"cover",objectPosition:u.objectPosition||"center",imageScale:1,onLoad:()=>R(!0)}),!b&&e.jsx(Le,{initial:{opacity:1},animate:{opacity:0},transition:{duration:.4,delay:.3},"aria-hidden":"true"})]})})]}),e.jsx(Ne,{children:d.sections.map((i,n)=>{const a=d.sections[n-1],o=d.sections[n+1],s=Ni.has(i.layout),w=ie.has(i.layout),E=a?ie.has(a.layout):!1,f=o?ie.has(o.layout):!1,Y=!i.disableCompactPadding&&w&&(E||f);return s?e.jsx("div",{children:J(i)},i.id):e.jsx(l.div,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0,margin:"200px"},transition:{duration:.6,ease:"easeOut"},children:e.jsx(_e,{$background:H(i,n%2===0),$compact:Y,children:e.jsx(De,{children:J(i)})})},i.id)})})]})}))}}})})();
