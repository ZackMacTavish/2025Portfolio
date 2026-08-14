System.register(["./three-legacy-Dbu1oaxp.js","./vendor-legacy-lMxcQOgj.js","./index-legacy-C8w4uAXj.js","./CaseStudyPrimitives-legacy-m2YLdA5E.js"],function(e,t){"use strict";var i,s,o,r,a,n,l;return{setters:[e=>{i=e.j},e=>{s=e.c,o=e.L},e=>{r=e.H,a=e.I,n=e.J},e=>{l=e.S}],execute:function(){e("P",function(){return i.jsx(v,{children:i.jsxs(j,{children:[i.jsx(y,{children:"My projects"}),i.jsxs(k,{children:[i.jsxs(B,{children:[i.jsxs(S,{to:"/Microsoft","aria-label":"Microsoft project",children:[i.jsx(l,{src:"/assets/HP.png",avif:"/assets/HP.avif",webp:"/assets/HP.webp",alt:"",width:"100%",responsive:!1,style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",zIndex:0,borderRadius:0,boxShadow:"none",filter:"saturate(0.9) blur(2px)",transform:"scale(1.03)"}}),i.jsx("div",{style:{position:"absolute",inset:0,background:"rgba(255,255,255,0.7)"}}),i.jsx($,{children:i.jsx(r,{size:48})})]}),i.jsxs(M,{children:[i.jsx(P,{children:"Microsoft"}),i.jsx(U,{children:"Shopping ecosystem across Bing, Copilot, Windows, Outlook"})]})]}),i.jsxs(B,{children:[i.jsxs(S,{to:"/Seagate","aria-label":"Seagate project",children:[i.jsx(l,{src:"/assets/seagate-case-study/gow-hero.jpg",avif:"/assets/seagate-case-study/gow-hero.avif",webp:"/assets/seagate-case-study/gow-hero.webp",alt:"Seagate God of War Ragnarok launch artwork",width:"100%",responsive:!1,style:{position:"absolute",inset:0,height:"100%",objectFit:"cover",zIndex:0,borderRadius:0,boxShadow:"none"}}),i.jsx(z,{})]}),i.jsxs(M,{children:[i.jsx(P,{children:"Seagate"}),i.jsx(U,{children:"Licensed gaming launches and cloud storage communication"})]})]}),w.map(e=>i.jsxs(B,{children:[i.jsxs(S,{to:e.to,"aria-label":`${e.title} project`,children:[i.jsx(l,{src:e.src,avif:e.avif,webp:e.webp,alt:e.alt,width:"100%",responsive:!1,style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",zIndex:0,borderRadius:0,boxShadow:"none"}}),i.jsx(z,{})]}),i.jsxs(M,{children:[i.jsx(P,{children:e.title}),i.jsx(U,{children:e.subtitle})]})]},e.id))]})]})})});const d=""+new URL("LeysiApp—Screens copy-DcK0xZue.avif",t.meta.url).href,c=""+new URL("LeysiApp—Screens copy-3bCzT5-q.webp",t.meta.url).href,p=""+new URL("Group 55618@2x-BcOmtPnh.png",t.meta.url).href,u=""+new URL("Group 55618@2x-CX4oNLta.avif",t.meta.url).href,h=""+new URL("Group 55618@2x-BM0PHBLp.webp",t.meta.url).href,g=""+new URL("iphones—Mockup copy-Dhbz_eF-.png",t.meta.url).href,b=""+new URL("iphones—Mockup copy-CWru2RWc.avif",t.meta.url).href,m=""+new URL("iphones—Mockup copy-BSL3_2_o.webp",t.meta.url).href,x=""+new URL("BrandGuidelines—Mockup-BPSLRh27.avif",t.meta.url).href,f=""+new URL("BrandGuidelines—Mockup-lWWgSoLH.webp",t.meta.url).href,w=[{id:"giga",title:"Giga",subtitle:"Full web app design for an evolving AI-native platform",to:"/Giga",src:g,avif:b,webp:m,alt:"Giga product design project tile"},{id:"piton",title:"Piton",subtitle:"Voice-first iOS workout app for an early-stage startup",to:"/Piton",src:p,avif:u,webp:h,alt:"Piton fitness app project tile"},{id:"leysi",title:"Leysi",subtitle:"Brand identity and iOS app for campus deals",to:"/Ux",src:a,avif:d,webp:c,alt:"Leysi project tile"},{id:"outsource",title:"Outsource",subtitle:"Brand systems and digital experiences across four businesses",to:"/Outsource",src:n,avif:x,webp:f,alt:"Outsource project tile"}],v=s.section`
  width: 100%;
  background: ${e=>e.theme.surface};
  /* Vertical rhythm only; horizontal alignment is owned by Inner so the cards
     track the same 64rem grid as the case study body sections above. */
  padding: 14vh 0;
  box-sizing: border-box;
`,j=s.div`
  width: 100%;
  max-width: 64rem;
  margin: 0 auto;
  padding: 0 1.5rem;
  box-sizing: border-box;

  @media (max-width: 480px) {
    padding: 0 1.25rem;
  }
`,y=s.h2`
  margin: 0 0 2rem;
  font-family: var(--font-display);
  font-size: clamp(1.4rem, 3vw, 2rem);
  color: ${e=>e.theme.strongText};
`,k=s.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 2rem;
  row-gap: 3rem;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`,L=s.div`
  display: flex;
  flex-direction: column;
`,S=s(o)`
  position: relative;
  display: block;
  width: 100%;
  aspect-ratio: 16/10;
  border-radius: ${e=>e.theme.radii.card};
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  background-color: ${e=>e.theme.surfaceMuted};
  text-decoration: none;
  transition: transform 180ms ease, box-shadow 180ms ease;

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px rgba(25, 118, 210, 0.45);
  }
`,R=s.div`
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  filter: saturate(0.9);
  transition: filter 180ms ease;
`,z=s.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.15));
  transition: background 180ms ease;
`,$=s.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  pointer-events: none;
  color: #111;
`,M=s.div.attrs({"data-cursor":"link",role:"link"})`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 0.75rem;
`,P=s.h3`
  margin: 0;
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 1.15rem;
  color: ${e=>e.theme.strongText};
  transition: color 160ms ease;
`,U=s.p`
  margin: 0;
  font-family: var(--font-body);
  font-size: 0.95rem;
  color: ${e=>e.theme.mutedText};
`,B=s(L)`
  &:hover ${S} {
    transform: translateY(-3px);
    box-shadow: 0 10px 36px rgba(0, 0, 0, 0.12);
  }

  &:hover ${R} {
    filter: saturate(1.08) brightness(1.05);
  }

  &:hover ${z} {
    background: linear-gradient(to top, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.08));
  }

  &:hover ${P} {
    color: ${e=>e.theme.fontColor};
  }
`}}});
