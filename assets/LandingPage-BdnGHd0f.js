const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./three-Cragz5qr.js","./three-CIqbc5c4.js","./vendor-hQudadcW.js"])))=>i.map(i=>d[i]);
import{j as e,_ as T}from"./three-CIqbc5c4.js";import{c as t,b as o,l as g,L}from"./vendor-hQudadcW.js";import{y as I,p as f,s as x,F as R,T as $,a as A,l as G}from"./AD-NPYKbg_9.js";import{a as U}from"./Grid60-JHQJiXRB.js";import{S as _,P as F,m as D}from"./PortfolioCardsSection-oXr_rIi1.js";import"./index-CAIcbJfl.js";import"./LeysiApp—Screens copy-CsLIUfOG.js";import"./ThreePillars—pages-BPOZPkZx.js";import"./Group 55618@2x-DJ5DP13a.js";import"./BrandGuidelines—Mockup-CZOd5Pwz.js";const u=""+new URL("Me-BEhJ50qd.jpeg",import.meta.url).href,E=""+new URL("Me-C1cwp5zy.avif",import.meta.url).href,H=""+new URL("Me-Rnuwi3im.webp",import.meta.url).href,W=""+new URL("hangingquilts-CSgyMA7c.jpg",import.meta.url).href,q=""+new URL("hangingquilts-4VrGTXBN.avif",import.meta.url).href,Y=""+new URL("hangingquilts-DcA0AW0j.webp",import.meta.url).href,N=""+new URL("Card1-3--mHPQ8.webp",import.meta.url).href,Q=""+new URL("Card2-DkNuGfII.webp",import.meta.url).href,O=""+new URL("Card3-DFuv6FGk.webp",import.meta.url).href,X=""+new URL("Card4-1NFXU0cZ.webp",import.meta.url).href,B=""+new URL("Card5-BWd32u-m.webp",import.meta.url).href,V=""+new URL("Card6-Dy8ZNgWu.png",import.meta.url).href,Z=o.lazy(()=>T(()=>import("./three-Cragz5qr.js"),__vite__mapDeps([0,1,2]),import.meta.url)),J=g`
  0% { transform: translate(-50%, -60%) rotate(0deg); }
  20% { transform: translate(-20%, -80%) rotate(90deg); }
  40% { transform: translate(10%, -40%) rotate(180deg); }
  60% { transform: translate(-40%, -20%) rotate(270deg); }
  80% { transform: translate(-70%, -50%) rotate(320deg); }
  100% { transform: translate(-50%, -60%) rotate(360deg); }
`,K=g`
  0% { transform: translate(60%, -50%) rotate(0deg); }
  20% { transform: translate(80%, -20%) rotate(90deg); }
  40% { transform: translate(40%, -70%) rotate(180deg); }
  60% { transform: translate(20%, -30%) rotate(270deg); }
  80% { transform: translate(70%, -60%) rotate(320deg); }
  100% { transform: translate(60%, -50%) rotate(360deg); }
`,ee=g`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(6px); }
`,te=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4vw;
  width: 100vw;
  height: 100vh;
  background-color: ${i=>i.theme.backgroundColor};
  position: relative;
  overflow: hidden;
  padding: 0 5vw;
  box-sizing: border-box;

  &::before, &::after {
    content: '';
    position: absolute;
    width: 40vw;
    height: 40vw;
    border-radius: 50%;
    filter: blur(200px);
    background: rgba(255, 255, 255, 0.3);
    z-index: 0;
  }

  &::before {
    top: 20%;
    left: 10%;
    animation: ${J} 35s ease-in-out infinite;
  }

  &::after {
    top: 40%;
    left: 65%;
    animation: ${K} 40s ease-in-out infinite;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    height: auto;
    min-height: 100dvh;
    padding: 12vh 5vw 6vh;
    gap: 2vh;
    align-items: center;
    justify-content: center;
    overflow-x: hidden;
    overflow-y: visible;
  }

  @media (max-width: 768px) {
    padding: 10vh 5vw 5vh;
    gap: 1.5vh;
  }
`,ie=i=>e.jsxs("picture",{children:[e.jsx("source",{srcSet:E,type:"image/avif"}),e.jsx("source",{srcSet:H,type:"image/webp"}),e.jsx("img",{src:u,alt:"Zack MacTavish portrait",loading:"eager",decoding:"async",fetchPriority:"high",className:"about-picture-img",style:{width:"21vw",height:"21vw",objectFit:"cover",borderRadius:"50%",flexShrink:0,position:"relative",zIndex:1,display:"block",...i.style}}),e.jsx("style",{children:`
      @media (max-width: 1000px) {
        .about-picture-img {
          width: 38vw !important;
          height: 38vw !important;
          min-width: 160px !important;
          min-height: 160px !important;
        }
      }
      @media (max-width: 700px) {
        .about-picture-img {
          width: 44vw !important;
          height: 44vw !important;
          min-width: 120px !important;
          min-height: 120px !important;
        }
      }
    `})]}),re=t.div`
  display: flex;
  position: relative;
  z-index: 1;
  @media (max-width: 1000px) {
    width: 100%;
    display: grid;           /* grid centers perfectly even with subpixel widths */
    place-items: center;     /* center both horizontally and vertically */
  }
  @media (max-width: 700px) {
    margin-bottom: 3.5vh;
  }
`,oe=t.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  z-index: 1;

  @media (max-width: 1000px) {
    width: 90vw;
    align-items: center;
    text-align: center;
    margin: 0 auto;
  }
`,w=t.div`
  position: relative;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 500;
  font-size: 1.7rem;
  width: 32vw;
  color: white;
  z-index: 1;

  @media (max-width: 1400px) {  
    font-size: 1.3rem;
  }

  @media (max-width: 1000px) {  
    width: 100%;
    margin-top: 1vh;
    padding-bottom: 3vh;
    text-align: center;
  }

  @media (max-width: 850px) {
    font-size: 1.4rem;
    padding-top: 2vh;
  }

  @media (max-width: 450px) {
    font-size: 1.4rem;
  }
`,ae=t.div`
  position: relative;
  z-index: 10;
  margin-bottom: 2vh;
  @media (max-width: 1000px) {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  @media (max-width: 700px) {
    margin-bottom: 0.7vh;
  }
`,ne=t.div`
  position: fixed; /* desktop: center relative to the viewport */
  bottom: 6vh;     /* consistent viewport spacing from bottom */
  left: 0;
  right: 0;
  transform: none;
  display: grid;
  place-items: center; /* robust horizontal centering without relying on transforms */
  opacity: ${({$visible:i})=>i?.8:0};
  transition: opacity 0.6s ease;
  pointer-events: none;
  z-index: 2;      /* keep under intro overlay (which is z-index: 10) and above base content */

  /* mobile: keep the chevron inside the first section */
  @media (max-width: 1000px) {
    position: absolute; /* anchor to LandingDiv instead of viewport */
    bottom: 4vh;        /* inside the section's bottom */
    left: 0;
    right: 0;
    transform: none;
    display: grid;
    place-items: center;
  }
`,se=t.div`
  animation: ${ee} 1.5s infinite ease-in-out; /* animate only Y so X-centering stays intact */
  will-change: transform;
`,de=t.div`
  width: 24px;
  height: 24px;
  border-left: 3px solid white;
  border-bottom: 3px solid white;
  transform: rotate(-45deg);
  border-radius: 2px;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.35)); /* maintain visibility even near light backgrounds */
`,le=t.section`
  width: 100vw;
  background: white;
  padding: 14vh 5vw; /* slightly increased spacing above/below */
  box-sizing: border-box;
`,ce=t(U)`
  /* additional local overrides if needed */
`,me=t.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 2rem;
  row-gap: 3rem; /* extra space between rows */

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`,b=t(L)`
  position: relative;
  display: block;
  width: 100%;
  aspect-ratio: 16/10;
  border-radius: ${i=>i.theme.radii.card};
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0,0,0,0.08);
  background-color: #f5f5f5;
  text-decoration: none;
  transition: transform 180ms ease, box-shadow 180ms ease;
  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px rgba(25, 118, 210, 0.45);
  }
`,v=t.div`
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  filter: saturate(0.9);
  transition: filter 180ms ease;
`,y=t.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.45), rgba(0,0,0,0.15));
  transition: background 180ms ease;
`,pe=t.div.attrs({"data-cursor":"link",role:"link"})`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 0.75rem; /* slightly below the image */
`,k=t.h3`
  margin: 0;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 600;
  font-size: 1.15rem;
  color: #111;
  transition: color 160ms ease;
`,ge=t.p`
  margin: 0;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.95rem;
  color: #5d5d5d;
`,he=t.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 650px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
`,fe=t.h2`
  margin: 0;
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(1.4rem, 3vw, 2rem);
  color: #111;
`,xe=t.p`
  margin: 0;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1rem;
  color: #5d5d5d;
  text-align: right;
  a {
    color: #5d5d5d;
    text-decoration: none;
    transition: color 160ms ease;
  }
  a:hover {
    color: ${i=>i.theme.backgroundColor};
    text-decoration: none;
  }
`;t.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  pointer-events: none;
  color: #111;
`;const ue=t.div`
  display: flex;
  flex-direction: column;

  &:hover ${b} {
    transform: translateY(-3px);
    box-shadow: 0 10px 36px rgba(0,0,0,0.12);
  }

  &:hover ${v} {
    filter: saturate(1.08) brightness(1.05);
  }

  &:hover ${y} {
    background: linear-gradient(to top, rgba(0,0,0,0.25), rgba(0,0,0,0.08));
  }

  &:hover ${k} {
    color: ${i=>i.theme.backgroundColor};
  }
`,Ge=t.div`
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
`,Ue=t.div`
  width: 62vw; /* +2vw for a bit more room */
  max-width: 1100px; /* aligns with other sections' inner width */
  margin: 0 auto;
  display: grid;
  grid-template-columns: 0.48fr 0.52fr; /* give ~2vw more space to text */
  align-items: center; /* vertically center text relative to image */
  justify-content: center;
  gap: calc(2rem + 16px); /* add ~16px more gap between image and text */

  @media (max-width: 1000px) {
    width: 90vw;
    grid-template-columns: 1fr;
    gap: 1rem;
    align-items: center;
  }
`,_e=t.img.attrs({loading:"lazy",decoding:"async"})`
  width: 100%;
  height: auto;
  display: block; /* avoid inline image spacing quirks */
  object-fit: contain;
  border-radius: ${i=>i.theme.radii.card}; /* standardized card radius */
`,Fe=t(w)`
  width: 100%;
  min-width: 0; /* allow wrapping within grid cell */
  padding-right: 0;
  font-size: clamp(1.05rem, 1.6vw, 1.5rem); /* slightly smaller for better line length */
  line-height: 1.6; /* improve readability */
  color: white;

  /* On responsive (image stacks above text), increase text size for readability */
  @media (max-width: 1000px) {
    font-size: 1.6rem;
    line-height: 1.75;
  }
`,we=t.div`
  overflow-y: hidden;
  width: 100vw;
`,be=t.div`
  display: grid;
  overflow-y: hidden;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  background-color: ${i=>i.theme.backgroundColor};
  height: 100dvh; /* ensure full viewport height on mobile browsers */
  width: 100vw;
  position: relative; /* allow absolute overlay of header on mobile */

  @media (max-width: 800px) {
    grid-template-columns: 1fr; /* single column on mobile for full-width content */
    grid-template-rows: 90dvh; /* slightly less tall on mobile; header overlays */
    grid-template-areas: 'image';
    height: 90dvh; /* match container height to image */
    overflow: visible; /* prevent absolute header from being clipped */
  }
`,ve=t.div`
  display: grid;
  grid-column-start: 2;
  grid-column-end: 5;
  grid-row-start: 2;
  grid-row-end: 4;
  align-self: center;
  justify-self: start;
  z-index: 200;
  gap: 0.3rem;
  width: fit-content;
  padding: 1.5rem 2rem;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  backdrop-filter: blur(4px);

  @media (max-width: 1000px) {
    padding: 1.2rem 1.5rem;
  }
  @media (max-width: 800px) {
    grid-column: 1;
    grid-row: 1;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90vw;
    margin-left: 0;
    padding: 1.5rem;
    text-align: center;
    justify-self: center;
    align-self: center;
    box-sizing: border-box;
  }
`,ye=t.h1`
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
`,ke=t.p`
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
`,je=t.a`
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
    margin-left: auto;
    margin-right: auto;
  }
`,ze=t.div`
  display: grid; 
  grid-column-start: 1;
  grid-column-end: -1;
  grid-row-start: 2;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  
  canvas {
    width: 100vw !important;
    height: 100% !important;
    margin-left: calc(-50vw + 50%) !important;
  }

  @media (max-width: 800px) {
    grid-area: image;
    width: 100vw;
    margin-left: 0;

    canvas {
      width: 100vw !important;
      margin-left: 0 !important;
    }
  }
`,De=({introDone:i=!0})=>{const[j,h]=o.useState(!1),[a,z]=o.useState(!1);return o.useLayoutEffect(()=>{window.scrollTo(0,0)},[]),o.useEffect(()=>{const p=()=>{!a&&window.scrollY>50&&(h(!1),z(!0))};return window.addEventListener("scroll",p),()=>window.removeEventListener("scroll",p)},[a]),o.useEffect(()=>{i&&(a||h(!0))},[i,a]),e.jsxs("div",{children:[e.jsx(I,{...f.landing,sameAs:x.sameAs,keywords:f.landing.keywords||x.keywords}),e.jsxs(te,{children:[e.jsx(re,{children:e.jsx(ie,{src:u})}),e.jsxs(oe,{children:[e.jsx(ae,{children:e.jsx(_,{})}),e.jsx(w,{$widthsize:"47vw",children:"Hi, I'm Zack MacTavish, a product designer based in Philadelphia, PA. I'm currently shaping shopping experiences at Microsoft."})]}),!a&&i&&e.jsx(ne,{$visible:j,children:e.jsx(se,{children:e.jsx(de,{})})})]}),e.jsx(F,{}),e.jsx(R,{style:{backgroundColor:"#f7f7f7",padding:"10vh 5vw",minHeight:"70vh"},children:e.jsx($,{children:e.jsxs(A,{style:{color:"#5d5d5d"},children:["I’ve partnered with agencies including"," ",e.jsx("a",{href:"https://www.publicisgroupe.com/en",target:"_blank",rel:"noopener noreferrer",style:{color:"#5d5d5d",textDecoration:"underline"},children:"Publicis Groupe"}),","," ",e.jsx("a",{href:"https://prairieandforge.com/",target:"_blank",rel:"noopener noreferrer",style:{color:"#5d5d5d",textDecoration:"underline"},children:"Prairie & Forge"}),", and"," ",e.jsx("a",{href:"https://varfaj.com/",target:"_blank",rel:"noopener noreferrer",style:{color:"#5d5d5d",textDecoration:"underline"},children:"Varfaj Partners"})," ","on work spanning UX, product, and brand design. My background includes agency experience in New York City and formal design training in Chicago. Client collaborations have included Microsoft, Walmart, Seagate Technology, and Chip Ganassi Racing."]})})}),e.jsx(le,{children:e.jsxs(ce,{children:[e.jsxs(he,{children:[e.jsx(fe,{children:"My writing"}),e.jsx(xe,{children:e.jsx("a",{href:"https://medium.com/@zmactavish",target:"_blank",rel:"noopener noreferrer",children:"See my Medium Portfolio"})})]}),e.jsx(me,{children:[...Array(6)].map((p,r)=>{const n=r===0,s=r===1,d=r===2,l=r===3,m=r===5,c=r===4,S=n?"https://medium.com/design-bootcamp/76-features-in-figma-to-know-7dbb35cdb5a7":s?"https://medium.com/design-bootcamp/my-journey-as-a-product-designer-at-microsoft-a5325be417b5":d?"https://medium.com/design-bootcamp/12-features-to-consider-when-designing-an-e-commerce-mobile-app-740efbeee7c8":l?"https://medium.com/design-bootcamp/designing-in-the-8pt-grid-system-f3c1183ea6e8":c?"https://medium.com/@zmactavish/0643beac797a":m?"https://medium.com/@zmactavish/30-html-tags-to-know-b0a85b122ded":"https://medium.com/@zmactavish",C=n?"76 features in Figma to know":s?"My journey as a Product designer at Microsoft.":d?"12 features to consider when building an E-commerce app":l?"Designing in the 8pt grid system":c?"30 CSS styles to know":m?"30 HTML tags to know":"Medium",P=n?"A guide to all things Figma":s?"What I've learned at Microsoft as a Product designer":d?"A practical UX checklist for e‑commerce mobile apps":l?"Consistent spacing for scalable UI components":c?"A beginner's guide to CSS for designers":"A beginner's guide to HTML for designers",M=n?{backgroundImage:`url(${N})`,backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"}:s?{backgroundImage:`url(${Q})`,backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"}:d?{backgroundImage:`url(${O})`,backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"}:l?{backgroundImage:`url(${X})`,backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"}:c?{backgroundImage:`url(${V})`,backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"}:m?{backgroundImage:`url(${B})`,backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"}:{backgroundImage:`url(${D})`,backgroundColor:"#fafafa",backgroundSize:"40%",backgroundRepeat:"no-repeat",backgroundPosition:"center",filter:"none"};return e.jsxs(ue,{children:[e.jsxs(b,{to:S,target:"_blank",rel:"noopener noreferrer","aria-label":n?"Medium article: 76 features in Figma to know":s?"Medium article: My journey as a Product designer at Microsoft.":d?"Medium article: 12 features to consider when building an E-commerce app":l?"Medium article: Designing in the 8pt grid system":c?"Medium article: 30 CSS styles to know":m?"Medium article: 30 HTML tags to know":`Medium writing card ${r+1}`,children:[e.jsx(v,{style:M}),e.jsx(y,{})]}),e.jsxs(pe,{children:[e.jsx(k,{children:C}),e.jsx(ge,{children:P})]})]},`medium-card-${r}`)})})]})}),e.jsx(G,{imageSrc:W,imageAvif:q,imageWebp:Y,imageAlt:"Quilt hanging",textSize:"1.4rem",textColor:"#fff",style:{color:"#fff"},children:e.jsxs("div",{style:{lineHeight:"1.6"},children:["Outside of work, I live with my partner ",e.jsx("a",{href:"https://oliviazitasmith.com",target:"_blank",rel:"noopener noreferrer",style:{color:"inherit",textDecoration:"underline"},children:"Olivia Smith"}),", who is also an artist. In my own creative time, I focus on making quilts that combine photography, textile techniques, and mixed media, exploring the intersection of art, design, and storytelling."]})}),e.jsx(we,{children:e.jsxs(be,{children:[e.jsxs(ve,{children:[e.jsx(ye,{children:"Thanks for stopping by"}),e.jsx(ke,{children:"I'm also an artist. Check out my art portfolio."}),e.jsx(je,{href:"https://zackmactavish.com",target:"_blank",rel:"noopener noreferrer",children:"View Portfolio"})]}),e.jsx(ze,{children:e.jsx(o.Suspense,{fallback:e.jsx("div",{style:{height:"50vh"}}),children:e.jsx(Z,{})})})]})})]})};export{Ge as QuiltContainer,_e as QuiltImage,Ue as QuiltInner,Fe as QuiltText,De as default};
