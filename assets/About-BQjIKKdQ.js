import{j as e}from"./three-D9NkSzoP.js";import{c as i,b as r,l as f}from"./vendor-D7aqownG.js";import x from"./three-CjHHChrF.js";import{q as d,a as l,b as c,i as u,m as v,c as y,d as b}from"./hangingquilts-BKKYfKg7.js";import{y as j,p as s,s as k,F as S,T as z,a as T,b as A}from"./AD-eCtAF4-6.js";const W=""+new URL("BlackTurtleneck-popart-01-DGpWYBfA.avif",import.meta.url).href,C=""+new URL("BlackTurtleneck-popart-01-BJpD-mJF.webp",import.meta.url).href,I=i.div`
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
`,H=i.div`
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
`,h=i.div`
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
`,D=f`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(6px); }
`,F=i.div`
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  animation: ${D} 1.5s infinite ease-in-out;
  opacity: ${t=>t.visible?.8:0};
  transition: opacity 0.6s ease;
  pointer-events: none;
`,B=i.div`
  width: 24px;
  height: 24px;
  border-left: 3px solid white;
  border-bottom: 3px solid white;
  transform: rotate(-45deg);
  border-radius: 2px;
`,E=t=>e.jsxs("picture",{children:[e.jsx("source",{srcSet:v,type:"image/avif"}),e.jsx("source",{srcSet:y,type:"image/webp"}),e.jsx("img",{src:b,alt:"Zack MacTavish portrait",loading:"eager",decoding:"async",fetchPriority:"high",style:{width:"22vw",height:"22vw",objectFit:"cover",borderRadius:"50%",flexShrink:0,...t.style}})]}),_=i.div`
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
`,N=i.div`
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
`,O=t=>e.jsxs("picture",{children:[e.jsx("source",{srcSet:d,type:"image/avif"}),e.jsx("source",{srcSet:l,type:"image/webp"}),e.jsx("img",{src:c,alt:t.alt||"Quilt hanging",style:{flex:"0 0 25%",width:"100%",maxWidth:"100%",height:"auto",display:"block",objectFit:"contain",borderRadius:18,...t.style||{}}})]}),J=i(h)`
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
`,G=i.div`
  overflow-y: hidden;
  width: 100vw;
`,L=i.div`
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
`,$=i.div`
  display: grid;
  grid-column-start: 3;
  grid-row-start: 2;
`,U=()=>{const[t,g]=r.useState(!0),[n,m]=r.useState(!1),[p,w]=r.useState(window.innerWidth>450);return r.useLayoutEffect(()=>{window.scrollTo(0,0)},[]),r.useEffect(()=>{const a=()=>{!n&&window.scrollY>50&&(g(!1),m(!0))};window.addEventListener("scroll",a);const o=()=>w(window.innerWidth>450);return window.addEventListener("resize",o),()=>{window.removeEventListener("scroll",a),window.removeEventListener("resize",o)}},[n]),e.jsxs("div",{children:[e.jsx(j,{...s.about,sameAs:k.sameAs,keywords:s.about.keywords}),e.jsxs(I,{Backgroundheight:"100vh",style:{position:"relative"},children:[e.jsx(E,{}),e.jsx(h,{Widthsize:"47vw",children:"Hi, I'm Zack MacTavish, an artist and product designer based in Philadelphia, PA. For the past three years, I've been with Microsoft's Shopping Team, shaping user experiences for digital products."}),!n&&e.jsx(F,{visible:t,children:e.jsx(B,{})})]}),e.jsx(S,{style:{backgroundColor:"white"},children:e.jsx(z,{children:e.jsxs(T,{style:{color:"#5d5d5d"},children:["Some of the agencies I have worked with include"," ",e.jsx("a",{href:"https://www.publicisgroupe.com/en",target:"_blank",rel:"noopener noreferrer",style:{color:"#5d5d5d",textDecoration:"underline"},children:"Publicis Groupe"}),","," ",e.jsx("a",{href:"https://prairieandforge.com/",target:"_blank",rel:"noopener noreferrer",style:{color:"#5d5d5d",textDecoration:"underline"},children:"Prairie & Forge"}),", and"," ",e.jsx("a",{href:"https://varfaj.com/",target:"_blank",rel:"noopener noreferrer",style:{color:"#5d5d5d",textDecoration:"underline"},children:"Varfaj Partners"}),". I've also lived in New York City, working as a graphic designer in Manhattan for"," ",e.jsx("a",{href:"https://www.outsourceconsultants.com/",target:"_blank",rel:"noopener noreferrer",style:{color:"#5d5d5d",textDecoration:"underline"},children:"Outsource Consultants"}),", and studied design in Chicago. I've collaborated with clients such as Microsoft, Walmart, Seagate Technology on Disney-branded products, and Chip Ganassi Racing."]})})}),e.jsx("div",{style:{padding:"8vh 0"},children:e.jsx(A,{imageSrc:c,imageAvif:d,imageWebp:l,imageAlt:"Quilt hanging",textSize:"2.6rem",textColor:"#fff",children:"Outside of work, I live with my partner Olivia, who is also an artist. In my own creative time, I focus on making quilts that combine photography, textile techniques, and mixed media, exploring the intersection of art, design, and storytelling."})}),e.jsx(G,{children:e.jsxs(L,{children:[e.jsxs(P,{children:["Thanks for ",e.jsx("br",{}),"stopping by"]}),e.jsx($,{children:p?e.jsx(x,{}):e.jsxs("picture",{children:[e.jsx("source",{srcSet:W,type:"image/avif"}),e.jsx("source",{srcSet:C,type:"image/webp"}),e.jsx("img",{style:{width:"90vw"},src:u,alt:"fallback"})]})})]})})]})};export{H as NewSection,_ as QuiltContainer,O as QuiltImage,N as QuiltInner,J as QuiltText,U as default};
