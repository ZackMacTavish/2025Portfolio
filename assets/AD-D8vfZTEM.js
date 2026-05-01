import{j as e}from"./three-CIqbc5c4.js";import{b as q,c as i,u as ge}from"./vendor-hQudadcW.js";import{b as be}from"./index-CAIcbJfl.js";const we=({title:t,description:s,url:c,image:p,images:n=null,type:m="website",authorName:g="Zack MacTavish",authorAlternateNames:a=["Zachary MacTavish"],sameAs:d=[],keywords:v=[],jsonLd:y=null,favicons:k=null,siteDefaults:l=null,siteName:D=null,locale:B=null,robots:Y=null,themeColor:ee=null,twitterSite:te=null,twitterCreator:ie=null})=>(q.useEffect(()=>{t&&(document.title=t);const h=(r,o,j)=>{let x=document.querySelector(r);if(!x){x=document.createElement("meta");const O=r.match(/\[(name|property)=['"]([^'"]+)['"]\]/);O&&x.setAttribute(O[1],O[2]),document.head.appendChild(x)}x.setAttribute(o,j)};s&&(h("[name='description']","content",s),h("[property='og:description']","content",s),h("[name='twitter:description']","content",s)),v&&v.length&&h("[name='keywords']","content",Array.isArray(v)?v.join(", "):v),t&&(h("[property='og:title']","content",t),h("[name='twitter:title']","content",t)),h("[property='og:type']","content",m),c&&h("[property='og:url']","content",c);const re=D||l&&l.siteName||null,ae=B||l&&l.locale||null,oe=Y||l&&l.robots||null,ne=ee||l&&l.themeColor||null,se=te||l&&l.twitterSite||null,ce=ie||l&&l.twitterCreator||null;re&&h("[property='og:site_name']","content",re),ae&&h("[property='og:locale']","content",ae),oe&&h("[name='robots']","content",oe),ne&&h("[name='theme-color']","content",ne),se&&h("[name='twitter:site']","content",se),ce&&h("[name='twitter:creator']","content",ce);const fe=l&&l.ogImages||[],X=n||(p?[p]:null)||fe,N=r=>{document.querySelectorAll(r).forEach(o=>o.remove())};N("meta[property='og:image']"),N("meta[property='og:image:width']"),N("meta[property='og:image:height']");let z=null;if(X&&X.length?X.forEach(r=>{let o=r;if(typeof r=="string"&&(o={url:r}),!o||!o.url)return;const j=document.createElement("meta");if(j.setAttribute("property","og:image"),j.setAttribute("content",o.url),document.head.appendChild(j),o.width){const x=document.createElement("meta");x.setAttribute("property","og:image:width"),x.setAttribute("content",String(o.width)),document.head.appendChild(x)}if(o.height){const x=document.createElement("meta");x.setAttribute("property","og:image:height"),x.setAttribute("content",String(o.height)),document.head.appendChild(x)}z||(z=o.url)}):p&&(h("[property='og:image']","content",p),z=p),z?(h("[name='twitter:image']","content",z),h("[name='twitter:card']","content","summary_large_image")):h("[name='twitter:card']","content","summary"),c){let r=document.querySelector("link[rel='canonical']");r||(r=document.createElement("link"),r.setAttribute("rel","canonical"),document.head.appendChild(r)),r.setAttribute("href",c)}const de="seo-json-ld";let S=document.getElementById(de);const E={"@context":"https://schema.org","@type":"Person",name:g,url:c||window.location.href};a&&a.length&&(E.alternateName=a.length===1?a[0]:a),d&&d.length&&(E.sameAs=d);let M=y||E;if(!y)M=E;else try{const r=y;(r["@type"]==="CreativeWork"||r["@type"]==="Article")&&!r.author&&(r.author={"@type":"Person",name:g,url:c||window.location.href},a&&a.length&&(r.author.alternateName=a.length===1?a[0]:a),d&&d.length&&(r.author.sameAs=d)),M=r}catch{M=y}if(S?S.text=JSON.stringify(M):(S=document.createElement("script"),S.id=de,S.type="application/ld+json",S.text=JSON.stringify(M),document.head.appendChild(S)),g||a&&a.length){const r=[g].concat(a||[]).filter(Boolean).join(", ");h("[name='author']","content",r)}d&&d.length&&h("[name='sameAs']","content",d.join(", "));const Z=k||l&&l.favicons||null,_=r=>{document.querySelectorAll(`link[rel='${r}']`).forEach(o=>o.remove())};_("icon"),_("shortcut icon"),_("apple-touch-icon"),_("manifest"),Z&&(Array.isArray(Z)?Z.forEach(r=>{const o=document.createElement("link");r.rel?o.setAttribute("rel",r.rel):o.setAttribute("rel",r.sizes==="180x180"?"apple-touch-icon":"icon"),r.sizes&&o.setAttribute("sizes",r.sizes),o.setAttribute("href",r.href),document.head.appendChild(o)}):Object.entries(Z).forEach(([r,o])=>{const j=document.createElement("link");r==="180x180"?j.setAttribute("rel","apple-touch-icon"):j.setAttribute("rel","icon"),j.setAttribute("sizes",r),j.setAttribute("href",o),document.head.appendChild(j)}))},[t,s,c,p,m,g,a,d,v,y,k,l,D,B,Y,ee,te,ie]),null);var le={exports:{}},T={},me;function ve(){if(me)return T;me=1;var t=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function c(p,n,m){var g=null;if(m!==void 0&&(g=""+m),n.key!==void 0&&(g=""+n.key),"key"in n){m={};for(var a in n)a!=="key"&&(m[a]=n[a])}else m=n;return n=m.ref,{$$typeof:t,type:p,key:g,ref:n!==void 0?n:null,props:m}}return T.Fragment=s,T.jsx=c,T.jsxs=c,T}var he;function ye(){return he||(he=1,le.exports=ve()),le.exports}var L=ye();ge`
  html, body, * { cursor: none !important; }
`;i.div`
  z-index: 2000;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  border: none;
  background-color: rgba(136,136,136,0.2);
  backdrop-filter: blur(6px);
  pointer-events: none;
  position: fixed;
  transform: translate3d(0,0,0) scale(1);
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  display: none;

  &.hovered {
    background-color: #E88D67;
    box-shadow: 0 0 12px 6px rgba(232,141,103,0.6);
  }

  &.visible {
    display: block;
  }
`;const je=i.div`
  width: 60vw;
  max-width: 1100px;
  margin: 0 auto;
  box-sizing: border-box;

  @media (max-width: 1000px) {
    width: 92vw;
  }
`;i(je)`
  display: grid;
  grid-template-columns: ${t=>t.columns||"0.48fr 0.52fr"};
  gap: ${t=>t.gap||"2rem"};
  align-items: ${t=>t.align||"center"};

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;const H={fonts:{body:"Space Grotesk, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif"},spacing:{lg:"16px"},radii:{card:"18px"}};ge`
  :root {
    /* expose some common tokens as CSS vars for non-styled consumers */
    --radius-card: ${H.radii.card};
    --space-lg: ${H.spacing.lg};
  }
  * { box-sizing: border-box; }
  html, body, #root { height: 100%; }
  body {
    margin: 0;
    background-color: ${t=>t.theme.backgroundColor};
    color: ${t=>t.theme.fontColor};
    font-family: ${H.fonts.body};
  }
`;const ke=i.div`
  width: ${t=>t.$width||"62vw"};
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  gap: 2.2vw;
  align-items: center; /* Center text block vertically relative to image */
  padding: ${t=>t.theme?.spacing?.["3xl"]||"3rem"} 0;

  @media (max-width: 1320px) {
    width: 90vw;
    max-width: 90vw;
  }
  @media (max-width: 1000px) {
    width: 100vw;
    max-width: 100vw;
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
  }
`,Ae=i.div`
  flex: 1 1 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 0;
  min-height: 0;
  @media (max-width: 1000px) {
    width: 100vw;
    justify-content: center;
    margin-bottom: 1.2rem;
  }
`,Re=i.img`
  width: 100%;
  max-width: 480px;
  min-width: 260px;
  height: auto;
  min-height: 200px;
  object-fit: cover;
  display: block;
  margin: 0;
  border-radius: 24px;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,0.06);
  overflow: hidden;

  @media (max-width: 1200px) {
    max-width: 340px;
    min-width: 160px;
    min-height: 140px;
  }
  @media (max-width: 1000px) {
    width: 80vw;
    max-width: 92vw;
    min-width: 120px;
    min-height: 120px;
    border-radius: 16px;
    margin: 0 auto;
    display: block;
  }
`,Ue=i.div`
  flex: 1 1 50%;
  font-family: 'Space Grotesk', sans-serif;
  font-size: ${t=>t.$textSize||"1.4rem"};
  color: ${t=>t.$textColor||"#fff"};
  line-height: 1.4;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  gap: 0.25em;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  min-width: 0;
  height: 100%;
  @media (max-width: 1000px) {
    font-size: 1.7rem;
    width: 92vw;
    margin: 0 auto;
    min-height: 40px;
  }
`;function ei({imageSrc:t,imageAvif:s,imageWebp:c,imageAlt:p,children:n,imageWidth:m,columns:g,width:a,textSize:d,textColor:v,className:y,...k}){return L.jsxs(ke,{$width:a,className:y,...k,children:[L.jsx(Ae,{children:L.jsxs("picture",{children:[s&&L.jsx("source",{srcSet:s,type:"image/avif"}),c&&L.jsx("source",{srcSet:c,type:"image/webp"}),L.jsx(Re,{src:t,alt:p})]})}),L.jsx(Ue,{$textSize:d,$textColor:v,children:n})]})}const w="https://mactavish.xyz",C={name:"Zack MacTavish",url:w,defaultImage:`${w}/assets/og/website-logoresolutions-1200x630.png`,sameAs:["https://dribbble.com/Zmactavish","https://www.instagram.com/zackmichaelmactavish","https://www.linkedin.com/in/zacharymactavish/","https://github.com/ZackMacTavish","https://medium.com/@zmactavish"],keywords:["product design","graphic design","UX","portfolio","Zack MacTavish"]},u={landing:{title:`${C.name} — Product & Graphic Designer`,description:"Product & graphic designer focused on brand, UX, and digital experiences. View work and contact.",url:`${w}/`,image:C.defaultImage,keywords:["portfolio","home","design","Zack MacTavish"]},giga:{title:"Giga — UX/UI & Branding | Zack MacTavish",description:"Case study: Giga — UX/UI, branding, and product design by Zack MacTavish.",url:`${w}/projects/giga`,image:`${w}/assets/Giga—Macbookv2.png`,datePublished:"2024-10-01",keywords:["giga","product design","ux","branding"]},outsource:{title:"Outsource — UX/UI & Branding | Zack MacTavish",description:"Case study: Outsource — branding, websites and UX work by Zack MacTavish.",url:`${w}/projects/outsource`,image:`${w}/assets/Outsource—Macbook.png`,datePublished:"2023-08-01",keywords:["outsource","branding","ux"]},piton:{title:"Piton — Project | Zack MacTavish",description:"Case study: Piton — UX and visual design work by Zack MacTavish.",url:`${w}/projects/piton`,image:`${w}/assets/Piton—Screens.jpg`,datePublished:"2023-02-01",keywords:["piton","branding","app design"]},ux:{title:"UX — Product & UX Projects | Zack MacTavish",description:"Portfolio of UX and product design projects by Zack MacTavish.",url:`${w}/projects/ux`,image:`${w}/assets/Giga—mockup.jpg`,keywords:["ux","product design"]},"access-direct":{title:"Access Direct — UX & Brand | Zack MacTavish",description:"Case study: Access Direct — brand, UX and website built by Zack MacTavish.",url:`${w}/projects/access-direct`,image:`${w}/assets/AD—Macs.jpg`,datePublished:"2022-10-01",keywords:["access direct","ux","brand"]},"graphic-design":{title:"Graphic Design — Portfolio | Zack MacTavish",description:"Graphic design and art pieces by Zack MacTavish, including posters, packaging, and editorial work.",url:`${w}/projects/graphic-design`,image:`${w}/assets/Cover.png`,keywords:["graphic design","posters","packaging"]},threepillars:{title:"ThreePillars — UX & Branding | Zack MacTavish",description:"Case study: ThreePillars — brand and web app design by Zack MacTavish.",url:`${w}/projects/threepillars`,image:`${w}/assets/ThreePillars—Macbook.png`,keywords:["threepillars","branding","ux"]},microsoft:{title:"Microsoft — Project | Zack MacTavish",description:"Case study: Microsoft — UX and visual design work by Zack MacTavish. Password protected.",url:`${w}/projects/microsoft`,image:C.defaultImage,keywords:["microsoft","branding","ux","password protected"]}},Ce=i.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.7em 0.7em;
  margin-bottom: 0.5em;
  max-width: 520px;
  width: auto;
  align-items: center;
  justify-items: start;
  @media (max-width: 850px) {
    grid-template-columns: 1fr;
    max-width: 100%;
  }
`;function F(t){if(!t)return t;try{return encodeURI(decodeURI(t))}catch{return encodeURI(t)}}const Se=i.div`
  width: 60vw;
  max-width: 1000px;
  min-width: 320px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 1vw;
  margin: 0 auto 4vh auto;
  padding-top: 6.5rem;
  @media (max-width: 1320px) {
    width: 90vw;
    max-width: 90vw;
  }
  @media (max-width: 850px) {
    flex-direction: column-reverse;
    width: 100vw;
    max-width: 100vw;
    gap: 2vh;
    padding: 5.5rem 2vw 0 2vw;
  }
`,Le=i.div`
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  gap: 0.5em;
  height: 100%;

  @media (max-width: 850px) {
    width: min(40rem, 100%);
    align-items: center;
    text-align: center;
    gap: 0.75rem;
  }
`,Pe=i.div`
  flex: 2 1 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  max-width: none;
  min-width: 0;
  min-height: 0;
  @media (max-width: 1000px) {
    justify-content: center;
    width: 100%;
    margin-bottom: 2rem;
  }
`,pe=i.img`
  width: 100%;
  max-width: 700px;
  min-width: 220px;
  height: auto;
  border-radius: 18px;
  /* Removed box-shadow and background for a flat look */
  object-fit: cover;
  display: block;
  @media (max-width: 1000px) {
    width: 90vw;
    max-width: 98vw;
    min-width: 0;
    margin: 0 auto;
  }
`,$e=i.h1`
  font-family: 'Space Grotesk', sans-serif;
  color: ${t=>t.theme.fontColor};
  margin: 0;
  font-size: clamp(2.2rem, 4vw + 0.6rem, 4.25rem);
  line-height: 0.96;
  text-wrap: balance;

  @media (max-width: 850px) {
    font-size: clamp(1.9rem, 8vw, 2.7rem);
    line-height: 1.02;
  }
`,De=i.div`
  height: 1px;
  background: #e0e0e0;
  width: 48px;
  margin: 0.1em 0 0.3em 0;

  @media (max-width: 850px) {
    margin: 0 auto 0.2rem;
  }
`;function ue({title:t,imageBaseName:s,imageSrc:c,imageExt:p="png",imageAlt:n="",$imageWidth:m="38vw",buttons:g=[],divider:a=!0}){const d=s?`${s.startsWith("assets/")?"/":"/src/"}${s}`:null,v=d?F(`${d}.avif`):null,y=d?F(`${d}.webp`):null,k=d?F(`${d}.${p}`):null;return e.jsxs(Se,{children:[e.jsxs(Le,{children:[e.jsx($e,{children:t}),a&&e.jsx(De,{}),e.jsx(Ce,{children:g.map(({href:l,label:D},B)=>e.jsxs(xe,{href:l,target:"_blank",rel:"noopener noreferrer",children:[D," ",e.jsx(be,{style:{marginLeft:6,fontSize:"1.2em"}})]},B))})]}),e.jsx(Pe,{children:s?e.jsxs("picture",{children:[e.jsx("source",{srcSet:v,type:"image/avif"}),e.jsx("source",{srcSet:y,type:"image/webp"}),e.jsx(pe,{src:k,alt:n,$imageWidth:m})]}):e.jsx(pe,{src:F(c),alt:n,$imageWidth:m})})]})}const ze=""+new URL("iphones—Mockup-Bvav94lR.avif",import.meta.url).href,Me=""+new URL("iphones—Mockup-BBerJEYg.webp",import.meta.url).href,Te=""+new URL("iphones—Mockup-huIJePT7.png",import.meta.url).href,Ge=""+new URL("Giga—mockup-Cnh_KW7P.jpg",import.meta.url).href,We=""+new URL("Messages—1920 x 1400-FBHNown_.png",import.meta.url).href,Ie=""+new URL("Messages—1920 x 1400-Vn-3sQrl.avif",import.meta.url).href,Be=""+new URL("Messages—1920 x 1400-Df8RyXSi.webp",import.meta.url).href,Ee=""+new URL("iMac_2-ByB4ft45.jpg",import.meta.url).href,Ze=""+new URL("iPad2-7y6oKxfc.jpg",import.meta.url).href,_e=""+new URL("iPad2-CzLEDSAu.avif",import.meta.url).href,Fe=""+new URL("iPad2-C6zybvis.webp",import.meta.url).href,Xe=""+new URL("iPhone_2—Dark—Sq-CMwx-i__.jpg",import.meta.url).href,Ne=""+new URL("iPhone_2—Dark—Sq-o8OVfniw.avif",import.meta.url).href,Oe=""+new URL("iPhone_2—Dark—Sq-CN0kweFU.webp",import.meta.url).href,He=""+new URL("LightPhone2—Sq-BQ4v3uUl.jpg",import.meta.url).href,qe=""+new URL("LightPhone2—Sq-BAf3JCmK.avif",import.meta.url).href,Je=""+new URL("LightPhone2—Sq-BILeUpsy.webp",import.meta.url).href,Ke=""+new URL("iMac-BBUHxs4x.jpg",import.meta.url).href,Qe=""+new URL("iMac-D7y2uSFv.avif",import.meta.url).href,Ve=""+new URL("iMac-Cm5Zrfme.webp",import.meta.url).href,Ye=""+new URL("About-DuQLmo8y.png",import.meta.url).href,et=""+new URL("About-DLK3SCR5.avif",import.meta.url).href,tt=""+new URL("About-Cx6Nw1aR.webp",import.meta.url).href,it=""+new URL("Guides-CQbHOjad.jpg",import.meta.url).href,rt=""+new URL("Guides-6vl73ahM.avif",import.meta.url).href,at=""+new URL("Guides-sAG3dRfa.webp",import.meta.url).href,ot=""+new URL("CreateNewPost-CaFWZEze.png",import.meta.url).href,nt=""+new URL("CreateNewPost-DFUk0sow.avif",import.meta.url).href,st=""+new URL("CreateNewPost-DIIwIC2x.webp",import.meta.url).href,xe=i.a`
  display: inline-flex;
  align-items: center;
  gap: 0.32em;
  background: #111;
  color: #fff;
  font-weight: 600;
  font-size: 0.84rem;
  border: none;
  border-radius: 999px;
  padding: 0.36em 1.18em 0.36em 1.18em;
  margin-top: 0.7em;
  margin-bottom: 0.7em;
  text-decoration: none;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  transition: background 0.2s;
  width: fit-content;
  min-width: 0;
  flex-shrink: 0;
  flex-grow: 0;
  white-space: nowrap;
  &:hover {
    background: #333;
  }
`,J=i.div`
  width: 60vw;
  max-width: 1000px;
  margin: 0 auto 6vh;
  padding: 4vh 4vw 6vh;
  background-color: #f5f5f5;
  border-radius: 24px;

  @media (max-width: 1320px) {
    width: 90vw;
    max-width: 90vw;
  }

  @media (max-width: 850px) {
    width: 100vw;
    max-width: 100vw;
    padding: 4vh 4vw 6vh;
    border-radius: 0;
  }
`,K=i.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  row-gap: 2rem;
  column-gap: 4rem;
  position: relative;

  @media (max-width: 850px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`,A=i.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`,R=i.h3`
  color: ${t=>t.theme.fontColor};
  font-size: 2.25rem;
  margin: 0;

  @media (max-width: 1320px) {
    font-size: 2.1rem;
  }

  @media (max-width: 850px) {
    font-size: 1.8rem;
  }
`,U=i.h6`
  color: ${t=>t.theme.fontColor};
  font-size: 1.125rem;
  margin-top: 0.4rem;
  
  @media (max-width: 1320px) {
    font-size: 1rem;
  }
  @media (max-width: 850px) {
    font-size: 0.95rem;
  }
  line-height: 1.45;
  font-weight: 400;
  font-family: 'Space Grotesk', sans-serif;

  @media (max-width: 1320px) {
    font-size: 1.15rem;
  }

  @media (max-width: 850px) {
    font-size: 1rem;
  }
`,ct=i.img`
width: 60vw;
height: auto;
grid-row-start: ${t=>t.RowStart};
grid-row-end: 8;
align-self: center;
justify-self: center;
grid-column-start: ${t=>t.ColumnStart};
grid-column-end: ${t=>t.ColumnEnd};
@media (max-width: 850px) {
    grid-row-start: 2;
    grid-row-end: 3;
      grid-column-start: 1;
      width: 95vw;

  }
`,dt=i.h3`
grid-column-start: 2;
grid-column-end: 4;
grid-row-start: 2;
grid-row-end: 7;
font-size: ${t=>t.Fontsize};
width: 80vw;
font-family: 'Space Grotesk', sans-serif;
justify-self: center;
align-self: center;
color: ${t=>t.theme.fontColor};

@media (max-width: 1400px) {  
font-size: 1.8rem;
;}

@media (max-width: 850px){
    grid-column-start: 1;
    grid-row-end: 3;
    font-size: 1.2rem;
    width: 94vw;
    padding-left: 4vw;
    padding-right: 4vw;
    height: auto;
}
`,lt=i.img.attrs({loading:"lazy",decoding:"async"})`
width: 60vw;
box-shadow: 5px 10px 24px rgba(0, 0, 0, 0.3);
margin-top: 3vh;
margin-bottom: 3vh;
border-radius: 24px;

@media(max-width: 1400px) {
  width: 96vw;
  height: auto;
}

@media(max-width: 850px) {
  width: 96vw;
  height: auto;
}
`,mt=i.div`
width: 100vw;
background-color: #2CA0FD;
grid-row-start: 4;
grid-row-end: 9;
z-index: -5;
`,Q=i.div`
background-color: ${t=>t.theme.backgroundTwo};
`,ht=i.div`
display: flex;
width: 100vw;
height: auto;

@media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    height: auto;
}
`,pt=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2vw;
  padding: 8vh 4vw;

  @media (max-width: 1000px) {
    flex-direction: column;       /* stack vertically */
    justify-content: center;
    align-items: center;          /* centers the block */
    padding: 12vh 4vw 12vh 4vw;   /* extra top/bottom padding */
    gap: 3vh;
  }
`,gt=i.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  max-width: 600px;

  @media (max-width: 1000px) {
    align-items: center;    /* centers the block horizontally */
    text-align: left;       /* keeps text left-aligned inside */
    margin-bottom: 2vh;     /* spacing below the text before image */
  }
`,wt=i.img`
  width: ${t=>t.Width};
  height: auto;

  @media (max-width: 1000px) {
    width: 80vw; /* image slightly bigger on vertical stack */
  }
`,ut=i.h2`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 4.5rem;
  color: ${t=>t.theme.fontColor};
  margin: 0;

  @media (max-width: 850px) {
    font-size: 3rem;
  }
`,xt=i.a`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.4rem;
  color: ${t=>t.theme.fontColor};
  text-decoration: none;
  margin-top: 1vh;

  &:hover {
    opacity: 0.75;
  }
`;function ft(){return q.useLayoutEffect(()=>{window.scrollTo(0,0)}),e.jsxs(Q,{children:[e.jsx(we,{...u.giga,sameAs:C.sameAs,keywords:u.giga.keywords,jsonLd:{"@context":"https://schema.org","@type":"CreativeWork",headline:u.giga.title,description:u.giga.description,image:u.giga.image,author:{"@type":"Person",name:C.name,url:`${C.url}/about`},url:u.giga.url,datePublished:u.giga.datePublished,keywords:u.giga.keywords}}),e.jsx(ue,{title:"Giga",imageBaseName:"assets/Giga—Macbookv2",imageExt:"png",imageAlt:"Giga Macbook Mockup",imageWidth:"38vw",buttons:[{href:"https://gigaintelligence.com",label:"Visit Giga"}]}),e.jsx(J,{children:e.jsxs(K,{children:[e.jsxs(A,{children:[e.jsx(R,{children:"Project Type"}),e.jsx(U,{children:"UX/UI, Branding, Strategy"})]}),e.jsxs(A,{children:[e.jsx(R,{children:"Digital Product"}),e.jsx(U,{children:"Digital strategy platform used for data management, and private channel creation"})]}),e.jsxs(A,{children:[e.jsx(R,{children:"My Role"}),e.jsx(U,{children:"Responsible for researching, ideating, and generating ideas for a cohesive Giga experience. Designed and prototyped the Giga system & Web App"})]}),e.jsxs(A,{children:[e.jsx(R,{children:"Timeframe"}),e.jsx(U,{children:"1 1/2 years"})]})]})}),e.jsx(P,{src:ze,webp:Me,fallback:Te,style:{width:"100vw",maxWidth:"100vw",height:"auto",objectFit:"cover",display:"block",margin:0,padding:0,borderRadius:0}}),e.jsx(I,{style:{backgroundColor:"#ffffff"},children:e.jsx(W,{children:e.jsx(G,{style:{color:"#5D5D5D"},children:"Giga is a startup focused on sharing experiences between its users. Through a robust data management system, users can share information and learn about their favorite subjects"})})}),e.jsx(P,{src:Ge}),e.jsx(b,{children:e.jsx(f,{src:We,avif:Ie,webp:Be})}),e.jsx(b,{children:e.jsx(f,{src:ot,avif:nt,webp:st})}),e.jsx(P,{src:Ee}),e.jsx(b,{children:e.jsx(f,{src:Ze,avif:_e,webp:Fe})}),e.jsx(V,{srcLeft:Xe,avifLeft:Ne,webpLeft:Oe,srcRight:He,avifRight:qe,webpRight:Je}),e.jsx(b,{children:e.jsx(f,{src:Ke,avif:Qe,webp:Ve})}),e.jsx(b,{style:{paddingBottom:"7vh"},children:e.jsxs("div",{style:{width:"100%",display:"flex",justifyContent:"center"},children:[e.jsx(f,{src:Ye,avif:et,webp:tt,style:{width:"60vw",maxWidth:"420px",minHeight:"auto",height:"auto",borderRadius:24,boxShadow:"0 2px 12px 0 rgba(0,0,0,0.06)"}}),e.jsx("style",{children:`
      @media (max-width: 850px) {
        .about-me-img {
          width: 96vw !important;
          max-width: 96vw !important;
          min-height: 60vw !important;
          border-radius: 0 !important;
        }
      }
    `})]})}),e.jsx(b,{style:{justifyContent:"center"},children:e.jsx(f,{src:it,avif:rt,webp:at})}),e.jsx(I,{style:{backgroundColor:"black"},children:e.jsx(W,{children:e.jsxs(G,{style:{color:"white",textAlign:"center"},children:["Founder — Rich Devlin",e.jsx("br",{}),"Lead Designer — Zachary MacTavish",e.jsx("br",{}),"Front-End Development — Xing Yi & Joel Fernando",e.jsx("br",{}),"Back-End Development — Rich Devlin"]})})})]})}const ti=Object.freeze(Object.defineProperty({__proto__:null,BackgroundColor:mt,Cellphones:ht,GigaRocket:ct,ProjectBlock:A,ProjectButton:xe,ProjectContent:gt,ProjectDetails:K,ProjectDetailsContainer:J,ProjectGrid:pt,ProjectHeader:R,ProjectImage:wt,ProjectLink:xt,ProjectSubtitle:U,ProjectTitle:ut,RisoItemtwo:lt,StyledDiv:Q,TextSection:dt,default:ft},Symbol.toStringTag,{value:"Module"})),bt=""+new URL("Highpower-CRTc0nnX.jpg",import.meta.url).href,vt=""+new URL("Highpower-CsvHkKEI.avif",import.meta.url).href,yt=""+new URL("Highpower-boH7bfqj.webp",import.meta.url).href,jt=""+new URL("AD—iphones-Ds9NHmDv.jpg",import.meta.url).href,kt=""+new URL("AD—iphones-BiYAAO7N.avif",import.meta.url).href,At=""+new URL("AD—iphones-DGO6M8H3.webp",import.meta.url).href,Rt=""+new URL("AD—pages-DKeMWlEm.jpg",import.meta.url).href,Ut=""+new URL("AD—pages-BS_f5aWS.avif",import.meta.url).href,Ct=""+new URL("AD—pages-sKiLGjS1.webp",import.meta.url).href,St=""+new URL("AD—Macs-C-BI5_ml.jpg",import.meta.url).href,Lt=""+new URL("AD—Macs-CXf9hZaT.avif",import.meta.url).href,Pt=""+new URL("AD—Macs--XjCyU3R.webp",import.meta.url).href,$t=""+new URL("AD-ipad-7WzgOi0E.jpg",import.meta.url).href,Dt=""+new URL("AD-ipad-CUp8F2b6.avif",import.meta.url).href,zt=""+new URL("AD-ipad-B7-837tt.webp",import.meta.url).href,Mt=""+new URL("ADiPhone_2—Dark-BP_0B_M9.jpg",import.meta.url).href,Tt=""+new URL("ADLightPhone2-C7enY0US.jpg",import.meta.url).href,Gt=""+new URL("ADiMac-Bsrxdz-Q.png",import.meta.url).href,Wt=""+new URL("ADiMac-DlvZlRIn.avif",import.meta.url).href,It=""+new URL("ADiMac-CKTwTd3P.webp",import.meta.url).href,Bt=""+new URL("Group 375-vcp1kghj.png",import.meta.url).href,Et=""+new URL("Group 375-mZsO1BcE.avif",import.meta.url).href,Zt=""+new URL("Group 375-TF0Alkqk.webp",import.meta.url).href,_t=""+new URL("Guides2-C--leQ0V.png",import.meta.url).href,Ft=""+new URL("Guides2-DiNUbQbr.avif",import.meta.url).href,Xt=""+new URL("Guides2-DIlDKfWv.webp",import.meta.url).href,Nt=""+new URL("Group 274-k1yUScXs.png",import.meta.url).href,Ot=""+new URL("Group 274-CN_qORPC.avif",import.meta.url).href,Ht=""+new URL("Group 274-CPP1pgPP.webp",import.meta.url).href,$=t=>{if(!t)return t;try{return encodeURI(decodeURI(t))}catch{return encodeURI(t)}},P=({src:t,avif:s,webp:c,alt:p="",style:n={}})=>{typeof t=="string"&&t.split("/").pop().replace(/\.[^.]+$/,"");const m=$(t),g=$(s),a=$(c);return e.jsxs("picture",{children:[g&&e.jsx("source",{srcSet:g,type:"image/avif"}),a&&e.jsx("source",{srcSet:a,type:"image/webp"}),e.jsx("img",{src:m,alt:p,style:{width:"100vw",height:"auto",margin:"3vh auto",display:"block",backgroundColor:"white",...n},loading:"lazy",decoding:"async"})]})},qt=i.div`
  position: relative;
  padding-right: 6vw;       /* desktop padding */
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 500;
  font-size: 2.5rem;
  width: 40vw;
  color: #a0a0a0;

  @media (max-width: 1770px) {
    font-size: 1.8rem;
  }

  @media (max-width: 1000px) {
    width: 90vw;               /* block takes most of the width */
    max-width: 700px;          /* prevents it from being too wide */
    font-size: 1.6rem;
    margin: 4vh auto 0 auto;   /* centers the block horizontally */
    padding-right: 0;          /* remove desktop padding on mobile */
    text-align: left;          /* text stays left-aligned inside the block */
  }
`,G=i.p`
  font-family: 'Space Grotesk', sans-serif;
  color: #ffffff;
  font-size: clamp(1.05rem, 1.4vw + 0.75rem, 1.55rem);
  max-width: 60ch; /* comfortable measure inside 60vw container */
  line-height: 1.6;
  margin: 0;
  text-align: left; /* always left-aligned */

  @media (max-width: 850px) {
    font-size: clamp(1rem, 3.8vw, 1.2rem);
    max-width: 90vw;
    line-height: 1.65;
  }

  a.inline-link {
    color: #ffffff;
    text-decoration: underline;
    display: inline-flex;
    align-items: center;
    gap: 0.3em;

    svg {
      width: 0.8em;
      height: 0.8em;
      vertical-align: middle;
    }
  }
`,W=i.div`
  display: flex !important;
  flex-direction: column !important;
  justify-content: center !important; /* vertical centering */
  align-items: center !important;     /* horizontal centering */
  width: 60vw; /* constrain to site grid */
  max-width: 1000px; /* slightly smaller cap for consistency across pages */
  margin: 0 auto; /* center within section */
  box-sizing: border-box;
  padding: 0; /* no extra horizontal padding so width is true 60vw */

  @media (max-width: 850px) {
    width: 90vw;
    max-width: 650px; /* slightly smaller mobile cap to match perceived size */
    padding: 0;
    justify-content: center !important;
  }
`,I=i.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #191919;
  width: 100vw; /* full width */
  min-height: 70vh; /* align section height with landing page text section */
  padding: 10vh 5vw; /* match landing page spacing */
  box-sizing: border-box;
  text-align: left;

  /* Prevent section from feeling too tall on short screens */
  @media (max-height: 700px) {
    min-height: 60vh;
    padding: 8vh 5vw; /* keep comfortable spacing on shorter viewports */
  }

  @media (max-height: 500px) {
    min-height: 50vh;
  }

  @media (max-width: 850px) {
    flex-direction: column;
    justify-content: center;
    min-height: 70vh; /* similar perceived size on mobile */
    padding: 8vh 4vw; /* maintain visual balance on small screens */
  }
`,f=({src:t,avif:s,webp:c,alt:p="",width:n="60vw",style:m={},responsive:g=!0,loading:a="lazy",decoding:d="async"})=>{typeof t=="string"&&t.split("/").pop().replace(/\.[^.]+$/,"");const v=$(t),y=$(s),k=$(c),l={width:n,maxWidth:"1000px",height:"auto",display:"block",borderRadius:"24px",boxShadow:"0 2px 12px 0 rgba(0,0,0,0.06)",...m};return e.jsxs("picture",{children:[y&&e.jsx("source",{srcSet:y,type:"image/avif"}),k&&e.jsx("source",{srcSet:k,type:"image/webp"}),g&&e.jsx("style",{children:".single-image-responsive { @media (max-width: 1320px) { width: 90vw !important; max-width: 90vw !important; } @media (max-width: 850px) { width: 100vw !important; max-width: 100vw !important; border-radius: 0 !important; } }"}),e.jsx("img",{src:v,alt:p,className:g?"single-image-responsive":void 0,style:l,loading:a,decoding:d})]})},b=i.div`
  display: flex;
  justify-content: center;
  background-color: ${t=>t.theme.backgroundTwo};
  align-items: center;
  height: auto;
  padding: 3vh 0;
  width: 100vw;
`,Jt=i.div`
  display: grid;
  grid-template-columns: ${t=>t.ColumnsSet};
  grid-template-rows: ${t=>t.RowsSet};
  background-color: ${t=>t.theme.backgroundTwo};
  height: 100vh;
  width: 100vw;

  @media (max-width: 500px) {
      grid-template-columns: 100vw;
      height: auto;
      padding-top: 2vh;
      padding-bottom: 2vh;
      grid-template-rows: auto 1fr auto ;
  }
`,V=({srcLeft:t,srcRight:s,altLeft:c="",altRight:p="",styleLeft:n={},styleRight:m={}})=>e.jsxs("div",{style:{display:"flex",width:"100vw",height:"auto",flexWrap:"wrap",margin:0,padding:0},children:[e.jsx("img",{src:t,alt:c,style:{width:"50vw",height:"auto",display:"block",borderRadius:0,boxShadow:"none",margin:0,padding:0,...n},loading:"lazy",decoding:"async"}),e.jsx("img",{src:s,alt:p,style:{width:"50vw",height:"auto",display:"block",borderRadius:0,boxShadow:"none",margin:0,padding:0,...m},loading:"lazy",decoding:"async"})]});function Kt(){return q.useEffect(()=>{window.scrollTo(0,0)},[]),e.jsxs(Q,{children:[e.jsx(we,{...u["access-direct"],sameAs:C.sameAs,keywords:u["access-direct"].keywords,jsonLd:{"@context":"https://schema.org","@type":"CreativeWork",headline:u["access-direct"].title,description:u["access-direct"].description,image:u["access-direct"].image,author:{"@type":"Person",name:C.name,url:`${C.url}/about`},url:u["access-direct"].url,datePublished:u["access-direct"].datePublished,keywords:u["access-direct"].keywords}}),e.jsx(ue,{title:"Access Direct",imageBaseName:"assets/AD—Macbook",imageExt:"png",imageAlt:"Access Direct Macbook Mockup",imageWidth:"38vw",buttons:[{href:"https://access-direct.net",label:"Visit Access Direct"}]}),e.jsx(J,{children:e.jsxs(K,{children:[e.jsxs(A,{children:[e.jsx(R,{children:"Project Type"}),e.jsx(U,{children:"UX/UI, Branding, Strategy, Front-end development"})]}),e.jsxs(A,{children:[e.jsx(R,{children:"Product"}),e.jsx(U,{children:"Brand identity, print materials, and a website built with React.js"})]}),e.jsxs(A,{children:[e.jsx(R,{children:"My Role"}),e.jsx(U,{children:"Responsible for tidying up the brand logo, colors, creating print materials for tradeshows, social media, digital brochures and flyers, and building the company website"})]}),e.jsxs(A,{children:[e.jsx(R,{children:"Timeframe"}),e.jsx(U,{children:"4 years (Part-time)"})]})]})}),e.jsx(P,{src:jt,avif:kt,webp:At,style:{backgroundColor:"white",width:"100vw",maxWidth:"100vw",height:"auto",objectFit:"cover",display:"block",margin:0,padding:0,borderRadius:0}}),e.jsx(I,{style:{backgroundColor:"white"},children:e.jsx(W,{children:e.jsx(G,{style:{color:"#5d5d5d"},children:"Access Direct is a company focused on security solutions. I collaborated closely on the project, working on their brand identity, logos, and website. I served as the UI Designer and Webmaster, redesigning the site and building it using React.js."})})}),e.jsx(P,{src:Rt,avif:Ut,webp:Ct,style:{backgroundColor:"white",width:"100vw",maxWidth:"100vw",borderRadius:0,margin:"0 auto"}}),e.jsx(b,{children:e.jsx(f,{src:bt,avif:vt,webp:yt})}),e.jsx(b,{children:e.jsx(f,{src:Nt,avif:Ot,webp:Ht})}),e.jsx(P,{src:St,avif:Lt,webp:Pt,style:{backgroundColor:"white",width:"100vw",maxWidth:"100vw",borderRadius:0,margin:"0 auto"}}),e.jsx(b,{children:e.jsx(f,{src:$t,avif:Dt,webp:zt})}),e.jsx(V,{srcLeft:Mt,srcRight:Tt,altLeft:"AD iPhone 2 Dark",altRight:"AD Light Phone 2",styleLeft:{},styleRight:{}}),e.jsx(b,{children:e.jsx(f,{src:Gt,avif:Wt,webp:It})}),e.jsx(b,{children:e.jsx(f,{src:Bt,avif:Et,webp:Zt})}),e.jsx(b,{children:e.jsx(f,{src:_t,avif:Ft,webp:Xt})}),e.jsx(I,{style:{backgroundColor:"black"},children:e.jsx(W,{children:e.jsxs(G,{style:{color:"white",textAlign:"center"},children:["Founder — David Smith",e.jsx("br",{}),"Lead Designer — Zachary MacTavish",e.jsx("br",{}),"Website Development — Zachary MacTavish",e.jsx("br",{}),"Content Direction — Wendy Majewski, Alek Vasic"]})})})]})}const ii=Object.freeze(Object.defineProperty({__proto__:null,DoubleImage:V,FullBg:P,FullHeightTextSection:I,ParagraphFour:qt,RisoFlex:b,SingleGrid:Jt,SingleImage:f,TextContainer:W,TextContent:G,default:Kt},Symbol.toStringTag,{value:"Module"}));export{ii as A,ht as C,V as D,I as F,ti as G,ut as P,b as R,Q as S,W as T,G as a,P as b,f as c,qt as d,ue as e,J as f,K as g,A as h,R as i,U as j,lt as k,ei as l,u as p,C as s,we as y};
