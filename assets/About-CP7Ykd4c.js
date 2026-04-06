import{j as e}from"./three-D9NkSzoP.js";import{c as i,b as r,l as w}from"./vendor-D7aqownG.js";import f from"./three-CjHHChrF.js";import{q as d,a as l,b as c,i as u,c as v,d as b,m as y,e as j,f as k}from"./hangingquilts-DQPwMRj3.js";import{y as S,p as s,s as z,F as A,T,a as C,b as G}from"./AD-xdcAvgVG.js";import"./index-OWNjQ_yi.js";const I=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4vw;
  height: ${t=>t.Backgroundheight};
  width: 100vw;
  background-color: ${t=>t.theme.backgroundColor};
  padding: 0 5vw;

  @media (max-width: 1000px) {
    flex-direction: column;
    height: auto;
    padding-bottom: 10vh;
    gap: 2vh;
  }
`,V=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${t=>t.Backgroundheight};
  width: 100vw;
  background-color: ${t=>t.Backgroundcolor};

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
    padding: 5vh 0 10vh 0;
    text-align: center;
  }
`,m=i.div`
  position: relative;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 500;
  font-size: 2.5rem;
  width: ${t=>t.Widthsize};
  color: white;

  @media (max-width: 1400px) {  
    font-size: 1.8rem;
  }

  @media (max-width: 1000px) {  
    width: 90%;
    margin-top: 1vh;
    padding-bottom: 3vh;
    text-align: left;
  }

  @media (max-width: 850px) {
    font-size: 1.4rem;
    padding-top: 2vh;
  }

  @media (max-width: 450px) {
    font-size: 1.4rem;
  }
`,W=w`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(6px); }
`,D=i.div`
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  animation: ${W} 1.5s infinite ease-in-out;
  opacity: ${t=>t.visible?.8:0};
  transition: opacity 0.6s ease;
  pointer-events: none;
`,P=i.div`
  width: 24px;
  height: 24px;
  border-left: 3px solid white;
  border-bottom: 3px solid white;
  transform: rotate(-45deg);
  border-radius: 2px;
`,E=t=>e.jsxs("picture",{children:[e.jsx("source",{srcSet:y,type:"image/avif"}),e.jsx("source",{srcSet:j,type:"image/webp"}),e.jsx("img",{src:k,alt:"Zack MacTavish portrait",loading:"eager",decoding:"async",fetchPriority:"high",style:{width:"22vw",height:"22vw",objectFit:"cover",borderRadius:"50%",flexShrink:0,...t.style}})]}),Z=i.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center; /* center inner wrapper */
  width: 100%;
  padding: 8vh 0; /* add more vertical space */
  background-color: transparent;

  @media (max-width: 1000px) {
    flex-direction: column;
    padding: 4vh 0;
    align-items: center;
  }
`,X=i.div`
  width: 62vw; /* +2vw for consistency with Landing page */
  max-width: 1100px; /* aligns with other sections' inner width */
  margin: 0 auto;
  display: grid;
  grid-template-columns: 0.48fr 0.52fr; /* give text a bit more room */
  align-items: center; /* vertically center text relative to image */
  justify-content: center;
  gap: calc(2rem + 16px); /* add extra gap (~16px) */

  @media (max-width: 1000px) {
    width: 90vw;
    grid-template-columns: 1fr;
    gap: 1rem;
    align-items: center;
  }
`,J=t=>e.jsxs("picture",{children:[e.jsx("source",{srcSet:d,type:"image/avif"}),e.jsx("source",{srcSet:l,type:"image/webp"}),e.jsx("img",{src:c,alt:t.alt||"Quilt hanging",style:{flex:"0 0 25%",width:"100%",maxWidth:"100%",height:"auto",display:"block",objectFit:"contain",borderRadius:18,...t.style||{}}})]}),K=i(m)`
  flex: 1;
  min-width: 0;
  padding-right: 0;
  font-size: clamp(1.05rem, 1.6vw, 1.5rem);
  line-height: 1.6;
  color: white;

  @media (max-width: 1400px) {
    font-size: 1.6rem;
  }

  @media (max-width: 1000px) {
    width: 90%;
    max-width: 90%;
    padding-right: 0;
    font-size: 1.6rem; /* slightly bigger on responsive */
    text-align: left;
    margin-top: 1vh;
    padding-bottom: 3vh;
  }
`,F=i.div`
  overflow-y: hidden;
  width: 100vw;
`,$=i.div`
  display: grid;
  overflow-y: hidden;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  background-color: ${t=>t.theme.backgroundColor};
  height: 100vh;
  width: 100vw;
`,q=i.div`
  display: grid;
  grid-column-start: 2;
  grid-column-end: 5;
  grid-row-start: 2;
  grid-row-end: 4;
  align-self: center;
  justify-self: center;
  z-index: 200;
  gap: 0.3rem;
  width: 100%;
  padding-left: 0;
  padding: 1.5rem 2rem;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  backdrop-filter: blur(4px);

  @media (max-width: 1000px) {
    width: 85vw;
    padding: 1.2rem 1.5rem;
  }
  @media (max-width: 800px) {
    padding: 1.2rem 1rem 1.2rem 1.5rem;
    width: fit-content;
    margin-left: 2vw;
  }
`,H=i.h1`
  font-size: clamp(16px, 5.5vw, 3.8rem);
  line-height: 1.2;
  color: white;
  font-family: 'Space Grotesk', sans-serif;
  text-shadow: 2px 2px 50px rgba(0, 0, 0, 1);
  margin: 0;

  @media (max-width: 1400px) {
    font-size: clamp(14px, 4.2vw, 3.2rem);
  }
  @media (max-width: 1200px) {
    font-size: clamp(14px, 5vw, 3rem);
  }
  @media (max-width: 1000px) {
    font-size: clamp(14px, 4.5vw, 2.8rem);
  }
  @media (max-width: 800px) {
    font-size: clamp(12px, 3.5vw, 2rem);
  }
`,L=i.p`
  font-size: clamp(14px, 2.5vw, 1.4rem);
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  font-family: 'Space Grotesk', sans-serif;
  text-shadow: 1px 1px 30px rgba(0, 0, 0, 0.8);
  margin: 0;
  font-weight: 400;

  @media (max-width: 1000px) {
    font-size: clamp(12px, 2.2vw, 1.2rem);
  }
  @media (max-width: 800px) {
    font-size: clamp(14px, 3.5vw, 1.1rem);
    text-shadow: 0 0 15px rgba(0, 0, 0, 0.95), 1px 1px 8px rgba(0, 0, 0, 0.9);
  }
`,M=i.a`
  display: inline-block;
  width: fit-content;
  padding: 0.85rem 2rem;
  background-color: white;
  color: #1a1a1a;
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(13px, 1.8vw, 1.1rem);
  font-weight: 600;
  text-decoration: none;
  border-radius: 4px;
  transition: all 0.3s ease;
  cursor: pointer;
  margin-top: 0.5rem;
  text-shadow: none;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: #f0f0f0;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 1000px) {
    padding: 0.75rem 1.8rem;
    font-size: clamp(12px, 1.5vw, 1rem);
  }
  @media (max-width: 800px) {
    padding: 0.7rem 1.6rem;
    font-size: clamp(11px, 1.3vw, 0.9rem);
  }
`,Q=i.div`
  display: grid; 
  grid-column-start: 1;
  grid-column-end: -1;
  grid-row-start: 2;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  
  canvas {
    width: 100vw !important;
    margin-left: calc(-50vw + 50%) !important;
  }
`,U=()=>{const[t,h]=r.useState(!0),[a,p]=r.useState(!1),[g,x]=r.useState(window.innerWidth>450);return r.useLayoutEffect(()=>{window.scrollTo(0,0)},[]),r.useEffect(()=>{const n=()=>{!a&&window.scrollY>50&&(h(!1),p(!0))};window.addEventListener("scroll",n);const o=()=>x(window.innerWidth>450);return window.addEventListener("resize",o),()=>{window.removeEventListener("scroll",n),window.removeEventListener("resize",o)}},[a]),e.jsxs("div",{children:[e.jsx(S,{...s.about,sameAs:z.sameAs,keywords:s.about.keywords}),e.jsxs(I,{Backgroundheight:"100vh",style:{position:"relative"},children:[e.jsx(E,{}),e.jsx(m,{Widthsize:"47vw",children:"Hi, I'm Zack MacTavish, an artist and product designer based in Philadelphia, PA. For the past three years, I've been with Microsoft's Shopping Team, shaping user experiences for digital products."}),!a&&e.jsx(D,{visible:t,children:e.jsx(P,{})})]}),e.jsx(A,{style:{backgroundColor:"white"},children:e.jsx(T,{children:e.jsxs(C,{style:{color:"#5d5d5d"},children:["Some of the agencies I have worked with include"," ",e.jsx("a",{href:"https://www.publicisgroupe.com/en",target:"_blank",rel:"noopener noreferrer",style:{color:"#5d5d5d",textDecoration:"underline"},children:"Publicis Groupe"}),","," ",e.jsx("a",{href:"https://prairieandforge.com/",target:"_blank",rel:"noopener noreferrer",style:{color:"#5d5d5d",textDecoration:"underline"},children:"Prairie & Forge"}),", and"," ",e.jsx("a",{href:"https://varfaj.com/",target:"_blank",rel:"noopener noreferrer",style:{color:"#5d5d5d",textDecoration:"underline"},children:"Varfaj Partners"}),". I've also lived in New York City, working as a graphic designer in Manhattan for"," ",e.jsx("a",{href:"https://www.outsourceconsultants.com/",target:"_blank",rel:"noopener noreferrer",style:{color:"#5d5d5d",textDecoration:"underline"},children:"Outsource Consultants"}),", and studied design in Chicago. I've collaborated with clients such as Microsoft, Walmart, Seagate Technology on Disney-branded products, and Chip Ganassi Racing."]})})}),e.jsx("div",{style:{padding:"8vh 0"},children:e.jsx(G,{imageSrc:c,imageAvif:d,imageWebp:l,imageAlt:"Quilt hanging",textSize:"2.6rem",textColor:"#fff",children:e.jsxs("div",{style:{lineHeight:"1.6"},children:["Outside of work, I live with my partner ",e.jsx("a",{href:"https://oliviazitasmith.com",target:"_blank",rel:"noopener noreferrer",style:{color:"inherit",textDecoration:"underline"},children:"Olivia Smith"}),", who is also an artist. In my own creative time, I focus on making quilts that combine photography, textile techniques, and mixed media, exploring the intersection of art, design, and storytelling."]})})}),e.jsx(F,{children:e.jsxs($,{children:[e.jsxs(q,{children:[e.jsx(H,{children:"Thanks for stopping by"}),e.jsx(L,{children:"I'm also an artist. Check out my art portfolio."}),e.jsx(M,{href:"https://zackmactavish.com",target:"_blank",rel:"noopener noreferrer",children:"View Portfolio"})]}),e.jsx(Q,{children:g?e.jsx(f,{}):e.jsxs("picture",{children:[e.jsx("source",{srcSet:u,type:"image/avif"}),e.jsx("source",{srcSet:v,type:"image/webp"}),e.jsx("img",{style:{width:"90vw"},src:b,alt:"fallback"})]})})]})})]})};export{V as NewSection,Z as QuiltContainer,J as QuiltImage,X as QuiltInner,K as QuiltText,U as default};
