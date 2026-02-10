import{j as e}from"./three-D9NkSzoP.js";import{c as i,b as r,l as g}from"./vendor-D7aqownG.js";import w from"./three-CjHHChrF.js";import{m as p,q as x,i as f}from"./hangingquilts-CHhX4Dwf.js";import{a as u,p as s,s as v,F as b,T as y,b as j}from"./AD-DujzeFuQ.js";const k=i.div`
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
`,B=i.div`
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
`,d=i.div`
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
`,z=g`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(6px); }
`,S=i.div`
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  animation: ${z} 1.5s infinite ease-in-out;
  opacity: ${t=>t.visible?.8:0};
  transition: opacity 0.6s ease;
  pointer-events: none;
`,T=i.div`
  width: 24px;
  height: 24px;
  border-left: 3px solid white;
  border-bottom: 3px solid white;
  transform: rotate(-45deg);
  border-radius: 2px;
`,I=i.img`
  width: 22vw;
  height: 22vw;
  object-fit: cover;
  border-radius: 50%;
  flex-shrink: 0;

  @media (max-width: 1000px) {
    width: 60vw;
    height: 60vw;
  }

  @media (max-width: 450px) {
    width: 70vw;
    height: 70vw;
  }
`,A=i.div`
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
`,C=i.div`
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
`,D=i.img`
  flex: 0 0 25%;
  width: 100%;
  max-width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
  border-radius: 18px; /* match tile rounding for consistency */

  @media (max-width: 1000px) {
    max-width: 100%;
    width: 100%;
  }
`,E=i(d)`
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
`,$=i.div`
  overflow-y: hidden;
  width: 100vw;
`,G=i.div`
  display: grid;
  overflow-y: hidden;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  background-color: ${t=>t.theme.backgroundColor};
  height: 100vh;
  width: 100vw;
`,P=i.h1`
  display: grid;
  grid-column-start: 3;
  grid-row-start: 2;
  grid-row-end: 4;
  width: 60vw;
  max-width: 1100px;
  margin: 0 auto;
  text-align: left; /* left align text within 60vw container */
  justify-self: center; /* keep the container centered horizontally */
  align-self: center;   /* center the grid item vertically within its rows */
  font-size: clamp(20px, 6vw, 4.8rem);
  line-height: 1.15; /* tighten desktop line height slightly */
  color: white;
  z-index: 200;
  font-family: 'Space Grotesk', sans-serif;
  text-shadow: 2px 2px 50px rgba(0, 0, 0, 1);

  @media (max-width: 1000px) {
    font-size: 3.2rem; /* slightly larger on mobile */
    line-height: 1.2;
    justify-self: start; /* keep heading more towards left side */
    margin: 0; /* avoid extra centering margins on mobile */
    text-align: left;
  }
  @media (max-width: 800px) {
    font-size: 2.6rem; /* slightly larger on smaller mobile */
    line-height: 1.2;
    justify-self: start;
    margin: 0;
    text-align: left;
  }
`,F=i.div`
  display: grid;
  grid-column-start: 3;
  grid-row-start: 2;
`,H=()=>{const[t,l]=r.useState(!0),[n,h]=r.useState(!1),[c,m]=r.useState(window.innerWidth>450);return r.useLayoutEffect(()=>{window.scrollTo(0,0)},[]),r.useEffect(()=>{const o=()=>{!n&&window.scrollY>50&&(l(!1),h(!0))};window.addEventListener("scroll",o);const a=()=>m(window.innerWidth>450);return window.addEventListener("resize",a),()=>{window.removeEventListener("scroll",o),window.removeEventListener("resize",a)}},[n]),e.jsxs("div",{children:[e.jsx(u,{...s.about,sameAs:v.sameAs,keywords:s.about.keywords}),e.jsxs(k,{Backgroundheight:"100vh",style:{position:"relative"},children:[e.jsx(I,{src:p}),e.jsx(d,{Widthsize:"47vw",children:"Hi, I'm Zack MacTavish, an artist and product designer based in Philadelphia, PA. For the past three years, I've been with Microsoft's Shopping Team, shaping user experiences for digital products."}),!n&&e.jsx(S,{visible:t,children:e.jsx(T,{})})]}),e.jsx(b,{style:{backgroundColor:"white"},children:e.jsx(y,{children:e.jsxs(j,{style:{color:"#5d5d5d"},children:["Some of the agencies I have worked with include"," ",e.jsx("a",{href:"https://www.publicisgroupe.com/en",target:"_blank",rel:"noopener noreferrer",style:{color:"#5d5d5d",textDecoration:"underline"},children:"Publicis Groupe"}),","," ",e.jsx("a",{href:"https://prairieandforge.com/",target:"_blank",rel:"noopener noreferrer",style:{color:"#5d5d5d",textDecoration:"underline"},children:"Prairie & Forge"}),", and"," ",e.jsx("a",{href:"https://varfaj.com/",target:"_blank",rel:"noopener noreferrer",style:{color:"#5d5d5d",textDecoration:"underline"},children:"Varfaj Partners"}),". I've also lived in New York City, working as a graphic designer in Manhattan for"," ",e.jsx("a",{href:"https://www.outsourceconsultants.com/",target:"_blank",rel:"noopener noreferrer",style:{color:"#5d5d5d",textDecoration:"underline"},children:"Outsource Consultants"}),", and studied design in Chicago. I've collaborated with clients such as Microsoft, Walmart, Seagate Technology on Disney-branded products, and Chip Ganassi Racing."]})})}),e.jsx(A,{children:e.jsxs(C,{children:[e.jsx(D,{src:x,alt:"Quilt hanging"}),e.jsx(E,{children:"Outside of work, I live with my partner Olivia, who is also an artist. In my own creative time, I focus on making quilts that combine photography, textile techniques, and mixed media, exploring the intersection of art, design, and storytelling."})]})}),e.jsx($,{children:e.jsxs(G,{children:[e.jsxs(P,{children:["Thanks for ",e.jsx("br",{}),"stopping by"]}),e.jsx(F,{children:c?e.jsx(w,{}):e.jsx("img",{style:{width:"90vw"},src:f,alt:"fallback"})})]})})]})};export{B as NewSection,A as QuiltContainer,D as QuiltImage,C as QuiltInner,E as QuiltText,H as default};
