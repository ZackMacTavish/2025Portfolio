import{j as t}from"./three-D9NkSzoP.js";import{b as X,u as xe,c as o,R as A}from"./vendor-D7aqownG.js";const we=({title:e,description:i,url:r,image:a,images:s=null,type:l="website",authorName:x="Zack MacTavish",authorAlternateNames:c=["Zachary MacTavish"],sameAs:g=[],keywords:P=[],jsonLd:S=null,favicons:J=null,siteDefaults:p=null,siteName:K=null,locale:Q=null,robots:Y=null,themeColor:ee=null,twitterSite:te=null,twitterCreator:ie=null})=>(X.useEffect(()=>{e&&(document.title=e);const h=(n,d,y)=>{let w=document.querySelector(n);if(!w){w=document.createElement("meta");const B=n.match(/\[(name|property)=['"]([^'"]+)['"]\]/);B&&w.setAttribute(B[1],B[2]),document.head.appendChild(w)}w.setAttribute(d,y)};i&&(h("[name='description']","content",i),h("[property='og:description']","content",i),h("[name='twitter:description']","content",i)),P&&P.length&&h("[name='keywords']","content",Array.isArray(P)?P.join(", "):P),e&&(h("[property='og:title']","content",e),h("[name='twitter:title']","content",e)),h("[property='og:type']","content",l),r&&h("[property='og:url']","content",r);const re=K||p&&p.siteName||null,ae=Q||p&&p.locale||null,ne=Y||p&&p.robots||null,oe=ee||p&&p.themeColor||null,se=te||p&&p.twitterSite||null,ce=ie||p&&p.twitterCreator||null;re&&h("[property='og:site_name']","content",re),ae&&h("[property='og:locale']","content",ae),ne&&h("[name='robots']","content",ne),oe&&h("[name='theme-color']","content",oe),se&&h("[name='twitter:site']","content",se),ce&&h("[name='twitter:creator']","content",ce);const $e=p&&p.ogImages||[],W=s||(a?[a]:null)||$e,_=n=>{document.querySelectorAll(n).forEach(d=>d.remove())};_("meta[property='og:image']"),_("meta[property='og:image:width']"),_("meta[property='og:image:height']");let T=null;if(W&&W.length?W.forEach(n=>{let d=n;if(typeof n=="string"&&(d={url:n}),!d||!d.url)return;const y=document.createElement("meta");if(y.setAttribute("property","og:image"),y.setAttribute("content",d.url),document.head.appendChild(y),d.width){const w=document.createElement("meta");w.setAttribute("property","og:image:width"),w.setAttribute("content",String(d.width)),document.head.appendChild(w)}if(d.height){const w=document.createElement("meta");w.setAttribute("property","og:image:height"),w.setAttribute("content",String(d.height)),document.head.appendChild(w)}T||(T=d.url)}):a&&(h("[property='og:image']","content",a),T=a),T?(h("[name='twitter:image']","content",T),h("[name='twitter:card']","content","summary_large_image")):h("[name='twitter:card']","content","summary"),r){let n=document.querySelector("link[rel='canonical']");n||(n=document.createElement("link"),n.setAttribute("rel","canonical"),document.head.appendChild(n)),n.setAttribute("href",r)}const de="seo-json-ld";let C=document.getElementById(de);const E={"@context":"https://schema.org","@type":"Person",name:x,url:r||window.location.href};c&&c.length&&(E.alternateName=c.length===1?c[0]:c),g&&g.length&&(E.sameAs=g);let M=S||E;if(!S)M=E;else try{const n=S;(n["@type"]==="CreativeWork"||n["@type"]==="Article")&&!n.author&&(n.author={"@type":"Person",name:x,url:r||window.location.href},c&&c.length&&(n.author.alternateName=c.length===1?c[0]:c),g&&g.length&&(n.author.sameAs=g)),M=n}catch{M=S}if(C?C.text=JSON.stringify(M):(C=document.createElement("script"),C.id=de,C.type="application/ld+json",C.text=JSON.stringify(M),document.head.appendChild(C)),x||c&&c.length){const n=[x].concat(c||[]).filter(Boolean).join(", ");h("[name='author']","content",n)}g&&g.length&&h("[name='sameAs']","content",g.join(", "));const G=J||p&&p.favicons||null,L=n=>{document.querySelectorAll(`link[rel='${n}']`).forEach(d=>d.remove())};L("icon"),L("shortcut icon"),L("apple-touch-icon"),L("manifest"),G&&(Array.isArray(G)?G.forEach(n=>{const d=document.createElement("link");n.rel?d.setAttribute("rel",n.rel):d.setAttribute("rel",n.sizes==="180x180"?"apple-touch-icon":"icon"),n.sizes&&d.setAttribute("sizes",n.sizes),d.setAttribute("href",n.href),document.head.appendChild(d)}):Object.entries(G).forEach(([n,d])=>{const y=document.createElement("link");n==="180x180"?y.setAttribute("rel","apple-touch-icon"):y.setAttribute("rel","icon"),y.setAttribute("sizes",n),y.setAttribute("href",d),document.head.appendChild(y)}))},[e,i,r,a,l,x,c,g,P,S,J,p,K,Q,Y,ee,te,ie]),null);var le={exports:{}},D={},he;function Pe(){if(he)return D;he=1;var e=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function r(a,s,l){var x=null;if(l!==void 0&&(x=""+l),s.key!==void 0&&(x=""+s.key),"key"in s){l={};for(var c in s)c!=="key"&&(l[c]=s[c])}else l=s;return s=l.ref,{$$typeof:e,type:a,key:x,ref:s!==void 0?s:null,props:l}}return D.Fragment=i,D.jsx=r,D.jsxs=r,D}var me;function Se(){return me||(me=1,le.exports=Pe()),le.exports}Se();xe`
  html, body, * { cursor: none !important; }
`;o.div`
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
`;const Ce=o.div`
  width: 60vw;
  max-width: 1100px;
  margin: 0 auto;
  box-sizing: border-box;

  @media (max-width: 1000px) {
    width: 92vw;
  }
`,Ae=o(Ce)`
  display: grid;
  grid-template-columns: ${e=>e.columns||"0.48fr 0.52fr"};
  gap: ${e=>e.gap||"2rem"};
  align-items: ${e=>e.align||"center"};

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`,F={fonts:{body:"Space Grotesk, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif"},spacing:{lg:"16px"},radii:{card:"18px"}};xe`
  :root {
    /* expose some common tokens as CSS vars for non-styled consumers */
    --radius-card: ${F.radii.card};
    --space-lg: ${F.spacing.lg};
  }
  * { box-sizing: border-box; }
  html, body, #root { height: 100%; }
  body {
    margin: 0;
    background-color: ${e=>e.theme.backgroundColor};
    color: ${e=>e.theme.fontColor};
    font-family: ${F.fonts.body};
  }
`;o(Ae)`
  width: ${e=>e.$width||"62vw"};
  max-width: 1100px;
  margin: 0 auto;
  grid-template-columns: ${e=>e.$columns||"0.56fr minmax(280px, 0.44fr)"};
  gap: ${e=>e.theme?.spacing?.["3xl"]||"3rem"};
  align-items: center;
  padding: ${e=>e.theme?.spacing?.["3xl"]||"3rem"} 0;

  @media (max-width: 1000px) {
    width: 90vw;
    grid-template-columns: 1fr;
    gap: ${e=>e.theme?.spacing?.lg||"1.5rem"};
  }
`;o.img`
  width: ${e=>e.$imageWidth||"86%"};
  height: auto;
  display: block;
  margin: 0;
  border-radius: ${e=>e.theme?.radii?.card||"12px"};
  overflow: hidden;
`;const m="https://mactavish.xyz",v={name:"Zack MacTavish",url:m,defaultImage:`${m}/assets/og/website-logoresolutions-1200x630.png`,sameAs:["https://dribbble.com/Zmactavish","https://www.instagram.com/zackmichaelmactavish","https://www.linkedin.com/in/zacharymactavish/","https://github.com/ZackMacTavish","https://medium.com/@zmactavish"],keywords:["product design","graphic design","UX","portfolio","Zack MacTavish"]},u={landing:{title:`${v.name} — Product & Graphic Designer`,description:"Product & graphic designer focused on brand, UX, and digital experiences. View work and contact.",url:`${m}/`,image:v.defaultImage,keywords:["portfolio","home","design","Zack MacTavish"]},about:{title:`About — ${v.name}`,description:"About Zack MacTavish — product & graphic designer. Learn about my background, work, and exhibitions.",url:`${m}/about`,image:v.defaultImage,keywords:["about","bio","background"]},giga:{title:"Giga — UX/UI & Branding | Zack MacTavish",description:"Case study: Giga — UX/UI, branding, and product design by Zack MacTavish.",url:`${m}/projects/giga`,image:`${m}/assets/Giga—Macbookv2.png`,datePublished:"2024-10-01",keywords:["giga","product design","ux","branding"]},outsource:{title:"Outsource — UX/UI & Branding | Zack MacTavish",description:"Case study: Outsource — branding, websites and UX work by Zack MacTavish.",url:`${m}/projects/outsource`,image:`${m}/assets/Outsource—Macbook.png`,datePublished:"2023-08-01",keywords:["outsource","branding","ux"]},piton:{title:"Piton — Project | Zack MacTavish",description:"Case study: Piton — UX and visual design work by Zack MacTavish.",url:`${m}/projects/piton`,image:`${m}/assets/Piton—Screens.jpg`,datePublished:"2023-02-01",keywords:["piton","branding","app design"]},ux:{title:"UX — Product & UX Projects | Zack MacTavish",description:"Portfolio of UX and product design projects by Zack MacTavish.",url:`${m}/projects/ux`,image:`${m}/assets/Giga—mockup.jpg`,keywords:["ux","product design"]},"access-direct":{title:"Access Direct — UX & Brand | Zack MacTavish",description:"Case study: Access Direct — brand, UX and website built by Zack MacTavish.",url:`${m}/projects/access-direct`,image:`${m}/assets/AD—Macs.jpg`,datePublished:"2022-10-01",keywords:["access direct","ux","brand"]},"graphic-design":{title:"Graphic Design — Portfolio | Zack MacTavish",description:"Graphic design and art pieces by Zack MacTavish, including posters, packaging, and editorial work.",url:`${m}/projects/graphic-design`,image:`${m}/assets/Cover.png`,keywords:["graphic design","posters","packaging"]},threepillars:{title:"ThreePillars — UX & Branding | Zack MacTavish",description:"Case study: ThreePillars — brand and web app design by Zack MacTavish.",url:`${m}/projects/threepillars`,image:`${m}/assets/ThreePillars—Macbook.png`,keywords:["threepillars","branding","ux"]},microsoft:{title:"Microsoft — Project | Zack MacTavish",description:"Case study: Microsoft — UX and visual design work by Zack MacTavish. Password protected.",url:`${m}/projects/microsoft`,image:v.defaultImage,keywords:["microsoft","branding","ux","password protected"]}};var fe={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},ge=A.createContext&&A.createContext(fe),ze=["attr","size","title"];function Te(e,i){if(e==null)return{};var r=Me(e,i),a,s;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(s=0;s<l.length;s++)a=l[s],!(i.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function Me(e,i){if(e==null)return{};var r={};for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){if(i.indexOf(a)>=0)continue;r[a]=e[a]}return r}function Z(){return Z=Object.assign?Object.assign.bind():function(e){for(var i=1;i<arguments.length;i++){var r=arguments[i];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},Z.apply(this,arguments)}function pe(e,i){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);i&&(a=a.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),r.push.apply(r,a)}return r}function I(e){for(var i=1;i<arguments.length;i++){var r=arguments[i]!=null?arguments[i]:{};i%2?pe(Object(r),!0).forEach(function(a){De(e,a,r[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):pe(Object(r)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))})}return e}function De(e,i,r){return i=Oe(i),i in e?Object.defineProperty(e,i,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[i]=r,e}function Oe(e){var i=Ue(e,"string");return typeof i=="symbol"?i:i+""}function Ue(e,i){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var a=r.call(e,i);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(e)}function be(e){return e&&e.map((i,r)=>A.createElement(i.tag,I({key:r},i.attr),be(i.child)))}function ye(e){return i=>A.createElement(Re,Z({attr:I({},e.attr)},i),be(e.child))}function Re(e){var i=r=>{var{attr:a,size:s,title:l}=e,x=Te(e,ze),c=s||r.size||"1em",g;return r.className&&(g=r.className),e.className&&(g=(g?g+" ":"")+e.className),A.createElement("svg",Z({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,a,x,{className:g,style:I(I({color:e.color||r.color},r.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),l&&A.createElement("title",null,l),e.children)};return ge!==void 0?A.createElement(ge.Consumer,null,r=>i(r)):i(fe)}function Ee(e){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"7",y1:"17",x2:"17",y2:"7"},child:[]},{tag:"polyline",attr:{points:"7 7 17 7 17 17"},child:[]}]})(e)}function kt(e){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M7 11V7a5 5 0 0 1 10 0v4"},child:[]}]})(e)}const Ge=o.div`
  width: 60vw;
  max-width: 1100px;
  min-width: 320px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 1vw;
  margin: 0 auto 4vh auto;
  padding-top: 6.5rem;
  @media (max-width: 1000px) {
    flex-direction: column-reverse;
    width: 96vw;
    gap: 2vh;
    padding: 5.5rem 2vw 0 2vw;
  }
`,Le=o.div`
  flex: 1.6 1 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  gap: 0.5em;
  height: 100%;
`,Ze=o.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: auto;
  max-width: none;
  @media (max-width: 1000px) {
    justify-content: center;
    width: 100%;
  }
`;function ve({title:e,imageBaseName:i,imageSrc:r,imageExt:a="png",imageAlt:s="",imageWidth:l="38vw",buttons:x=[],divider:c=!0}){return t.jsxs(Ge,{children:[t.jsxs(Le,{children:[t.jsx(ke,{style:{fontSize:"2.8rem",marginBottom:"0.1em"},children:e}),c&&t.jsx("div",{style:{height:"1px",background:"#e0e0e0",width:"48px",margin:"0.1em 0 0.3em 0"}}),t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.3em 0.7em",marginBottom:"0.5em",maxWidth:"520px",width:"auto",alignItems:"center",justifyContent:"flex-start"},children:x.map(({href:g,label:P},S)=>t.jsxs(je,{href:g,target:"_blank",rel:"noopener noreferrer",children:[P," ",t.jsx(Ee,{style:{marginLeft:6,fontSize:"1.2em"}})]},S))})]}),t.jsx(Ze,{children:i?t.jsxs("picture",{children:[t.jsx("source",{srcSet:`${i.startsWith("assets/")?"/":"/src/"}${i}.avif`,type:"image/avif"}),t.jsx("source",{srcSet:`${i.startsWith("assets/")?"/":"/src/"}${i}.webp`,type:"image/webp"}),t.jsx(ue,{src:`${i.startsWith("assets/")?"/":"/src/"}${i}.${a}`,alt:s,imageWidth:l})]}):t.jsx(ue,{src:r,alt:s,imageWidth:l})})]})}const ue=o.img`
  max-height: 600px;
  width: ${({imageWidth:e})=>e||"68vw"};
  min-width: 0;
  max-width: 100vw;
  height: auto;
  display: block;
  object-fit: contain;
  /* Use a responsive radius so it stays visible on large desktop widths */
  border-radius: clamp(18px, 1.2vw, 28px) !important; /* applied to the image itself */
  overflow: hidden; /* ensure corners clip even with scaling */
  margin: 0;        /* no extra spacing that could mask rounding */
  padding: 0;

  /* Make the top project image larger on mobile */
  @media (max-width: 1000px) {
    width: 92vw;          /* override any passed width for mobile */
    max-height: 75vh;     /* allow taller image while preserving aspect */
  }
`,Ie=""+new URL("Giga—mockup-Cnh_KW7P.jpg",import.meta.url).href,We=""+new URL("Messages—1920 x 1400-FBHNown_.png",import.meta.url).href,_e=""+new URL("iMac_2-ByB4ft45.jpg",import.meta.url).href,Be=""+new URL("iPad2-7y6oKxfc.jpg",import.meta.url).href,Fe=""+new URL("iPhone_2—Dark—Sq-CMwx-i__.jpg",import.meta.url).href,Xe=""+new URL("LightPhone2—Sq-BQ4v3uUl.jpg",import.meta.url).href,Ne=""+new URL("iMac-BBUHxs4x.jpg",import.meta.url).href,He=""+new URL("About-DuQLmo8y.png",import.meta.url).href,qe=""+new URL("Guides-CQbHOjad.jpg",import.meta.url).href,Ve=""+new URL("CreateNewPost-CaFWZEze.png",import.meta.url).href,je=o.a`
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
`,Je="iphones—Mockup",N=o.div`
  width: 60vw;
  max-width: 1100px;
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
`,H=o.div`
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
`,j=o.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`,k=o.h3`
  color: ${e=>e.theme.fontColor};
  font-size: 2.25rem;
  margin: 0;

  @media (max-width: 1320px) {
    font-size: 2.1rem;
  }

  @media (max-width: 850px) {
    font-size: 1.8rem;
  }
`,$=o.h6`
  color: ${e=>e.theme.fontColor};
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
`,Ke=o.img`
width: 60vw;
height: auto;
grid-row-start: ${e=>e.RowStart};
grid-row-end: 8;
align-self: center;
justify-self: center;
grid-column-start: ${e=>e.ColumnStart};
grid-column-end: ${e=>e.ColumnEnd};
@media (max-width: 850px) {
    grid-row-start: 2;
    grid-row-end: 3;
      grid-column-start: 1;
      width: 95vw;

  }
`,Qe=o.h3`
grid-column-start: 2;
grid-column-end: 4;
grid-row-start: 2;
grid-row-end: 7;
font-size: ${e=>e.Fontsize};
width: 80vw;
font-family: 'Space Grotesk', sans-serif;
justify-self: center;
align-self: center;
color: ${e=>e.theme.fontColor};

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
`,Ye=o.img.attrs({loading:"lazy",decoding:"async"})`
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
`,et=o.div`
width: 100vw;
background-color: #2CA0FD;
grid-row-start: 4;
grid-row-end: 9;
z-index: -5;
`,q=o.div`
background-color: ${e=>e.theme.backgroundTwo};
`,tt=o.div`
display: flex;
width: 100vw;
height: auto;

@media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    height: auto;
}
`,it=o.div`
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
`,rt=o.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  max-width: 600px;

  @media (max-width: 1000px) {
    align-items: center;    /* centers the block horizontally */
    text-align: left;       /* keeps text left-aligned inside */
    margin-bottom: 2vh;     /* spacing below the text before image */
  }
`,at=o.img`
  width: ${e=>e.Width};
  height: auto;

  @media (max-width: 1000px) {
    width: 80vw; /* image slightly bigger on vertical stack */
  }
`,ke=o.h2`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 4.5rem;
  color: ${e=>e.theme.fontColor};
  margin: 0;

  @media (max-width: 850px) {
    font-size: 3rem;
  }
`,nt=o.a`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.4rem;
  color: ${e=>e.theme.fontColor};
  text-decoration: none;
  margin-top: 1vh;

  &:hover {
    opacity: 0.75;
  }
`;function ot(){return X.useLayoutEffect(()=>{window.scrollTo(0,0)}),t.jsxs(q,{children:[t.jsx(we,{...u.giga,sameAs:v.sameAs,keywords:u.giga.keywords,jsonLd:{"@context":"https://schema.org","@type":"CreativeWork",headline:u.giga.title,description:u.giga.description,image:u.giga.image,author:{"@type":"Person",name:v.name,url:`${v.url}/about`},url:u.giga.url,datePublished:u.giga.datePublished,keywords:u.giga.keywords}}),t.jsx(ve,{title:"Giga",imageBaseName:"assets/Giga—Macbookv2",imageExt:"png",imageAlt:"Giga Macbook Mockup",imageWidth:"38vw",buttons:[{href:"https://gigaintelligence.com",label:"Visit Giga"}]}),t.jsx(N,{children:t.jsxs(H,{children:[t.jsxs(j,{children:[t.jsx(k,{children:"Project Type"}),t.jsx($,{children:"UX/UI, Branding, Strategy"})]}),t.jsxs(j,{children:[t.jsx(k,{children:"Digital Product"}),t.jsx($,{children:"Digital strategy platform used for data management, and private channel creation"})]}),t.jsxs(j,{children:[t.jsx(k,{children:"My Role"}),t.jsx($,{children:"Responsible for researching, ideating, and generating ideas for a cohesive Giga experience. Designed and prototyped the Giga system & Web App"})]}),t.jsxs(j,{children:[t.jsx(k,{children:"Timeframe"}),t.jsx($,{children:"1 1/2 years"})]})]})}),t.jsx(z,{src:Je,style:{width:"100vw",maxWidth:"100vw",height:"auto",objectFit:"cover",display:"block",margin:0,padding:0,borderRadius:0}}),t.jsx(R,{style:{backgroundColor:"#ffffff"},children:t.jsx(U,{children:t.jsx(O,{style:{color:"#5D5D5D"},children:"Giga is a startup focused on sharing experiences between its users. Through a robust data management system, users can share information and learn about their favorite subjects"})})}),t.jsx(z,{src:Ie}),t.jsx(b,{children:t.jsx(f,{src:We})}),t.jsx(b,{children:t.jsx(f,{src:Ve})}),t.jsx(z,{src:_e}),t.jsx(b,{children:t.jsx(f,{src:Be})}),t.jsx(V,{srcLeft:Fe,srcRight:Xe}),t.jsx(b,{children:t.jsx(f,{src:Ne})}),t.jsx(b,{style:{paddingBottom:"7vh"},children:t.jsx(f,{src:He})}),t.jsx(b,{style:{justifyContent:"center"},children:t.jsx(f,{src:qe})}),t.jsx(R,{style:{backgroundColor:"black"},children:t.jsx(U,{children:t.jsxs(O,{style:{color:"white",textAlign:"center"},children:["Founder — Rich Devlin",t.jsx("br",{}),"Lead Designer — Zachary MacTavish",t.jsx("br",{}),"Front-End Development — Xing Yi & Joel Fernando",t.jsx("br",{}),"Back-End Development — Rich Devlin"]})})})]})}const $t=Object.freeze(Object.defineProperty({__proto__:null,BackgroundColor:et,Cellphones:tt,GigaRocket:Ke,ProjectBlock:j,ProjectButton:je,ProjectContent:rt,ProjectDetails:H,ProjectDetailsContainer:N,ProjectGrid:it,ProjectHeader:k,ProjectImage:at,ProjectLink:nt,ProjectSubtitle:$,ProjectTitle:ke,RisoItemtwo:Ye,StyledDiv:q,TextSection:Qe,default:ot},Symbol.toStringTag,{value:"Module"})),z=({src:e,alt:i="",style:r={}})=>{const a=typeof e=="string"?e.split("/").pop().replace(/\.[^.]+$/,""):"";return t.jsxs("picture",{children:[t.jsx("source",{srcSet:`/assets/${a}.avif`,type:"image/avif"}),t.jsx("source",{srcSet:`/assets/${a}.webp`,type:"image/webp"}),t.jsx("img",{src:`/assets/${a}.png`,alt:i,style:{width:"100vw",height:"auto",margin:"3vh auto",display:"block",backgroundColor:"white",...r},loading:"lazy",decoding:"async"})]})},st="Highpower",ct="AD—iphones",dt="AD—pages",lt="AD—Macs",ht="AD-ipad",mt="ADiPhone_2—Dark",gt="ADLightPhone2",pt="ADiMac",ut="Group 375",xt="Guides2",wt="Group 274",ft=o.div`
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
`,O=o.p`
  font-family: 'Space Grotesk', sans-serif;
  color: #ffffff;
  font-size: clamp(1.2rem, 2.2vw, 1.8rem); /* slightly smaller, scales with viewport */
  max-width: 60ch; /* comfortable measure inside 60vw container */
  line-height: 1.55;
  margin: 0;
  text-align: left; /* always left-aligned */

  @media (max-width: 850px) {
    font-size: 1.6rem; /* slightly bigger on responsive */
    max-width: 90vw;
    line-height: 1.75;
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
`,U=o.div`
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
`,R=o.section`
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
`,f=({src:e,alt:i="",width:r="60vw",style:a={}})=>{const s=typeof e=="string"?e.split("/").pop().replace(/\.[^.]+$/,""):"";return t.jsxs("picture",{children:[t.jsx("source",{srcSet:`/assets/${s}.avif`,type:"image/avif"}),t.jsx("source",{srcSet:`/assets/${s}.webp`,type:"image/webp"}),t.jsx("img",{src:`/assets/${s}.png`,alt:i,style:{width:r,maxWidth:"1000px",height:"auto",display:"block",borderRadius:"24px",boxShadow:"0 2px 12px 0 rgba(0,0,0,0.06)",...a},loading:"lazy",decoding:"async"})]})},b=o.div`
  display: flex;
  justify-content: center;
  background-color: ${e=>e.theme.backgroundTwo};
  align-items: center;
  height: auto;
  padding: 3vh 0;
  width: 100vw;
`,bt=o.div`
  display: grid;
  grid-template-columns: ${e=>e.ColumnsSet};
  grid-template-rows: ${e=>e.RowsSet};
  background-color: ${e=>e.theme.backgroundTwo};
  height: 100vh;
  width: 100vw;

  @media (max-width: 500px) {
      grid-template-columns: 100vw;
      height: auto;
      padding-top: 2vh;
      padding-bottom: 2vh;
      grid-template-rows: auto 1fr auto ;
  }
`,V=({srcLeft:e,srcRight:i,altLeft:r="",altRight:a="",styleLeft:s={},styleRight:l={}})=>t.jsxs("div",{style:{display:"flex",width:"100vw",height:"auto",flexWrap:"wrap",margin:0,padding:0},children:[t.jsx("img",{src:e,alt:r,style:{width:"50vw",height:"auto",display:"block",borderRadius:0,boxShadow:"none",margin:0,padding:0,...s},loading:"lazy",decoding:"async"}),t.jsx("img",{src:i,alt:a,style:{width:"50vw",height:"auto",display:"block",borderRadius:0,boxShadow:"none",margin:0,padding:0,...l},loading:"lazy",decoding:"async"})]});function yt(){return X.useEffect(()=>{window.scrollTo(0,0)},[]),t.jsxs(q,{children:[t.jsx(we,{...u["access-direct"],sameAs:v.sameAs,keywords:u["access-direct"].keywords,jsonLd:{"@context":"https://schema.org","@type":"CreativeWork",headline:u["access-direct"].title,description:u["access-direct"].description,image:u["access-direct"].image,author:{"@type":"Person",name:v.name,url:`${v.url}/about`},url:u["access-direct"].url,datePublished:u["access-direct"].datePublished,keywords:u["access-direct"].keywords}}),t.jsx(ve,{title:"Access Direct",imageBaseName:"assets/AD—Macbook",imageExt:"png",imageAlt:"Access Direct Macbook Mockup",imageWidth:"38vw",buttons:[{href:"https://accessdirect.com",label:"Visit Access Direct"}]}),t.jsx(N,{children:t.jsxs(H,{children:[t.jsxs(j,{children:[t.jsx(k,{children:"Project Type"}),t.jsx($,{children:"UX/UI, Branding, Strategy, Front-end development"})]}),t.jsxs(j,{children:[t.jsx(k,{children:"Product"}),t.jsx($,{children:"Brand identity, print materials, and a website built with React.js"})]}),t.jsxs(j,{children:[t.jsx(k,{children:"My Role"}),t.jsx($,{children:"Responsible for tidying up the brand logo, colors, creating print materials for tradeshows, social media, digital brochures and flyers, and building the company website"})]}),t.jsxs(j,{children:[t.jsx(k,{children:"Timeframe"}),t.jsx($,{children:"4 years (Part-time)"})]})]})}),t.jsx(z,{src:ct,style:{backgroundColor:"white",width:"100vw",maxWidth:"100vw",height:"auto",objectFit:"cover",display:"block",margin:0,padding:0,borderRadius:0}}),t.jsx(R,{style:{backgroundColor:"white"},children:t.jsx(U,{children:t.jsx(O,{style:{color:"#5d5d5d"},children:"Access Direct is a company focused on security solutions. I collaborated closely on the project, working on their brand identity, logos, and website. I served as the UI Designer and Webmaster, redesigning the site and building it using React.js."})})}),t.jsx(z,{src:dt,style:{backgroundColor:"white",width:"100vw",maxWidth:"100vw",borderRadius:0,margin:"0 auto"}}),t.jsx(b,{children:t.jsx(f,{src:st})}),t.jsx(b,{children:t.jsx(f,{src:wt})}),t.jsx(z,{src:lt,style:{backgroundColor:"white",width:"100vw",maxWidth:"100vw",borderRadius:0,margin:"0 auto"}}),t.jsx(b,{children:t.jsx(f,{src:ht})}),t.jsx(V,{srcLeft:mt,srcRight:gt}),t.jsx(b,{children:t.jsx(f,{src:pt})}),t.jsx(b,{children:t.jsx(f,{src:ut})}),t.jsx(b,{children:t.jsx(f,{src:xt})}),t.jsx(R,{style:{backgroundColor:"black"},children:t.jsx(U,{children:t.jsxs(O,{style:{color:"white",textAlign:"center"},children:["Founder — David Smith",t.jsx("br",{}),"Lead Designer — Zachary MacTavish",t.jsx("br",{}),"Website Development — Zachary MacTavish",t.jsx("br",{}),"Content Direction — Wendy Majewski, Alek Vasic"]})})})]})}const Pt=Object.freeze(Object.defineProperty({__proto__:null,DoubleImage:V,FullBg:z,FullHeightTextSection:R,ParagraphFour:ft,RisoFlex:b,SingleGrid:bt,SingleImage:f,TextContainer:U,TextContent:O,default:yt},Symbol.toStringTag,{value:"Module"}));export{Pt as A,tt as C,V as D,we as E,R as F,$t as G,ke as P,b as R,q as S,U as T,O as a,z as b,f as c,ft as d,ve as e,N as f,H as g,j as h,k as i,$ as j,Ye as k,kt as l,u as p,v as s};
