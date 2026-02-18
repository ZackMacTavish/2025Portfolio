import{j as t}from"./three-D9NkSzoP.js";import{b as X,u as we,c as o,R as D}from"./vendor-D7aqownG.js";const fe=({title:e,description:i,url:r,image:a,images:s=null,type:d="website",authorName:w="Zack MacTavish",authorAlternateNames:c=["Zachary MacTavish"],sameAs:p=[],keywords:A=[],jsonLd:C=null,favicons:K=null,siteDefaults:g=null,siteName:Q=null,locale:V=null,robots:Y=null,themeColor:ee=null,twitterSite:te=null,twitterCreator:ie=null})=>(X.useEffect(()=>{e&&(document.title=e);const m=(n,l,v)=>{let f=document.querySelector(n);if(!f){f=document.createElement("meta");const Z=n.match(/\[(name|property)=['"]([^'"]+)['"]\]/);Z&&f.setAttribute(Z[1],Z[2]),document.head.appendChild(f)}f.setAttribute(l,v)};i&&(m("[name='description']","content",i),m("[property='og:description']","content",i),m("[name='twitter:description']","content",i)),A&&A.length&&m("[name='keywords']","content",Array.isArray(A)?A.join(", "):A),e&&(m("[property='og:title']","content",e),m("[name='twitter:title']","content",e)),m("[property='og:type']","content",d),r&&m("[property='og:url']","content",r);const re=Q||g&&g.siteName||null,ae=V||g&&g.locale||null,ne=Y||g&&g.robots||null,oe=ee||g&&g.themeColor||null,se=te||g&&g.twitterSite||null,ce=ie||g&&g.twitterCreator||null;re&&m("[property='og:site_name']","content",re),ae&&m("[property='og:locale']","content",ae),ne&&m("[name='robots']","content",ne),oe&&m("[name='theme-color']","content",oe),se&&m("[name='twitter:site']","content",se),ce&&m("[name='twitter:creator']","content",ce);const Pe=g&&g.ogImages||[],B=s||(a?[a]:null)||Pe,I=n=>{document.querySelectorAll(n).forEach(l=>l.remove())};I("meta[property='og:image']"),I("meta[property='og:image:width']"),I("meta[property='og:image:height']");let U=null;if(B&&B.length?B.forEach(n=>{let l=n;if(typeof n=="string"&&(l={url:n}),!l||!l.url)return;const v=document.createElement("meta");if(v.setAttribute("property","og:image"),v.setAttribute("content",l.url),document.head.appendChild(v),l.width){const f=document.createElement("meta");f.setAttribute("property","og:image:width"),f.setAttribute("content",String(l.width)),document.head.appendChild(f)}if(l.height){const f=document.createElement("meta");f.setAttribute("property","og:image:height"),f.setAttribute("content",String(l.height)),document.head.appendChild(f)}U||(U=l.url)}):a&&(m("[property='og:image']","content",a),U=a),U?(m("[name='twitter:image']","content",U),m("[name='twitter:card']","content","summary_large_image")):m("[name='twitter:card']","content","summary"),r){let n=document.querySelector("link[rel='canonical']");n||(n=document.createElement("link"),n.setAttribute("rel","canonical"),document.head.appendChild(n)),n.setAttribute("href",r)}const de="seo-json-ld";let S=document.getElementById(de);const O={"@context":"https://schema.org","@type":"Person",name:w,url:r||window.location.href};c&&c.length&&(O.alternateName=c.length===1?c[0]:c),p&&p.length&&(O.sameAs=p);let $=C||O;if(!C)$=O;else try{const n=C;(n["@type"]==="CreativeWork"||n["@type"]==="Article")&&!n.author&&(n.author={"@type":"Person",name:w,url:r||window.location.href},c&&c.length&&(n.author.alternateName=c.length===1?c[0]:c),p&&p.length&&(n.author.sameAs=p)),$=n}catch{$=C}if(S?S.text=JSON.stringify($):(S=document.createElement("script"),S.id=de,S.type="application/ld+json",S.text=JSON.stringify($),document.head.appendChild(S)),w||c&&c.length){const n=[w].concat(c||[]).filter(Boolean).join(", ");m("[name='author']","content",n)}p&&p.length&&m("[name='sameAs']","content",p.join(", "));const G=K||g&&g.favicons||null,W=n=>{document.querySelectorAll(`link[rel='${n}']`).forEach(l=>l.remove())};W("icon"),W("shortcut icon"),W("apple-touch-icon"),W("manifest"),G&&(Array.isArray(G)?G.forEach(n=>{const l=document.createElement("link");n.rel?l.setAttribute("rel",n.rel):l.setAttribute("rel",n.sizes==="180x180"?"apple-touch-icon":"icon"),n.sizes&&l.setAttribute("sizes",n.sizes),l.setAttribute("href",n.href),document.head.appendChild(l)}):Object.entries(G).forEach(([n,l])=>{const v=document.createElement("link");n==="180x180"?v.setAttribute("rel","apple-touch-icon"):v.setAttribute("rel","icon"),v.setAttribute("sizes",n),v.setAttribute("href",l),document.head.appendChild(v)}))},[e,i,r,a,d,w,c,p,A,C,K,g,Q,V,Y,ee,te,ie]),null);var le={exports:{}},L={},me;function Ae(){if(me)return L;me=1;var e=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function r(a,s,d){var w=null;if(d!==void 0&&(w=""+d),s.key!==void 0&&(w=""+s.key),"key"in s){d={};for(var c in s)c!=="key"&&(d[c]=s[c])}else d=s;return s=d.ref,{$$typeof:e,type:a,key:w,ref:s!==void 0?s:null,props:d}}return L.Fragment=i,L.jsx=r,L.jsxs=r,L}var he;function Ce(){return he||(he=1,le.exports=Ae()),le.exports}Ce();we`
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
`;const Se=o.div`
  width: 60vw;
  max-width: 1100px;
  margin: 0 auto;
  box-sizing: border-box;

  @media (max-width: 1000px) {
    width: 92vw;
  }
`,De=o(Se)`
  display: grid;
  grid-template-columns: ${e=>e.columns||"0.48fr 0.52fr"};
  gap: ${e=>e.gap||"2rem"};
  align-items: ${e=>e.align||"center"};

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`,F={fonts:{body:"Space Grotesk, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif"},spacing:{lg:"16px"},radii:{card:"18px"}};we`
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
`;o(De)`
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
`;const h="https://mactavish.xyz",y={name:"Zack MacTavish",url:h,defaultImage:`${h}/assets/og/website-logoresolutions-1200x630.png`,sameAs:["https://dribbble.com/Zmactavish","https://www.instagram.com/zackmichaelmactavish","https://www.linkedin.com/in/zacharymactavish/","https://github.com/ZackMacTavish","https://medium.com/@zmactavish"],keywords:["product design","graphic design","UX","portfolio","Zack MacTavish"]},u={landing:{title:`${y.name} — Product & Graphic Designer`,description:"Product & graphic designer focused on brand, UX, and digital experiences. View work and contact.",url:`${h}/`,image:y.defaultImage,keywords:["portfolio","home","design","Zack MacTavish"]},about:{title:`About — ${y.name}`,description:"About Zack MacTavish — product & graphic designer. Learn about my background, work, and exhibitions.",url:`${h}/about`,image:y.defaultImage,keywords:["about","bio","background"]},giga:{title:"Giga — UX/UI & Branding | Zack MacTavish",description:"Case study: Giga — UX/UI, branding, and product design by Zack MacTavish.",url:`${h}/projects/giga`,image:`${h}/assets/Giga—Macbookv2.png`,datePublished:"2024-10-01",keywords:["giga","product design","ux","branding"]},outsource:{title:"Outsource — UX/UI & Branding | Zack MacTavish",description:"Case study: Outsource — branding, websites and UX work by Zack MacTavish.",url:`${h}/projects/outsource`,image:`${h}/assets/Outsource—Macbook.png`,datePublished:"2023-08-01",keywords:["outsource","branding","ux"]},piton:{title:"Piton — Project | Zack MacTavish",description:"Case study: Piton — UX and visual design work by Zack MacTavish.",url:`${h}/projects/piton`,image:`${h}/assets/Piton—Screens.jpg`,datePublished:"2023-02-01",keywords:["piton","branding","app design"]},ux:{title:"UX — Product & UX Projects | Zack MacTavish",description:"Portfolio of UX and product design projects by Zack MacTavish.",url:`${h}/projects/ux`,image:`${h}/assets/Giga—mockup.jpg`,keywords:["ux","product design"]},"access-direct":{title:"Access Direct — UX & Brand | Zack MacTavish",description:"Case study: Access Direct — brand, UX and website built by Zack MacTavish.",url:`${h}/projects/access-direct`,image:`${h}/assets/AD—Macs.jpg`,datePublished:"2022-10-01",keywords:["access direct","ux","brand"]},"graphic-design":{title:"Graphic Design — Portfolio | Zack MacTavish",description:"Graphic design and art pieces by Zack MacTavish, including posters, packaging, and editorial work.",url:`${h}/projects/graphic-design`,image:`${h}/assets/Cover.png`,keywords:["graphic design","posters","packaging"]},threepillars:{title:"ThreePillars — UX & Branding | Zack MacTavish",description:"Case study: ThreePillars — brand and web app design by Zack MacTavish.",url:`${h}/projects/threepillars`,image:`${h}/assets/ThreePillars—Macbook.png`,keywords:["threepillars","branding","ux"]},microsoft:{title:"Microsoft — Project | Zack MacTavish",description:"Case study: Microsoft — UX and visual design work by Zack MacTavish. Password protected.",url:`${h}/projects/microsoft`,image:y.defaultImage,keywords:["microsoft","branding","ux","password protected"]}};var xe={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},pe=D.createContext&&D.createContext(xe),Re=["attr","size","title"];function Ue(e,i){if(e==null)return{};var r=$e(e,i),a,s;if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(s=0;s<d.length;s++)a=d[s],!(i.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function $e(e,i){if(e==null)return{};var r={};for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){if(i.indexOf(a)>=0)continue;r[a]=e[a]}return r}function E(){return E=Object.assign?Object.assign.bind():function(e){for(var i=1;i<arguments.length;i++){var r=arguments[i];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},E.apply(this,arguments)}function ge(e,i){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);i&&(a=a.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),r.push.apply(r,a)}return r}function _(e){for(var i=1;i<arguments.length;i++){var r=arguments[i]!=null?arguments[i]:{};i%2?ge(Object(r),!0).forEach(function(a){Le(e,a,r[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ge(Object(r)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))})}return e}function Le(e,i,r){return i=Te(i),i in e?Object.defineProperty(e,i,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[i]=r,e}function Te(e){var i=ze(e,"string");return typeof i=="symbol"?i:i+""}function ze(e,i){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var a=r.call(e,i);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(e)}function be(e){return e&&e.map((i,r)=>D.createElement(i.tag,_({key:r},i.attr),be(i.child)))}function ve(e){return i=>D.createElement(Me,E({attr:_({},e.attr)},i),be(e.child))}function Me(e){var i=r=>{var{attr:a,size:s,title:d}=e,w=Ue(e,Re),c=s||r.size||"1em",p;return r.className&&(p=r.className),e.className&&(p=(p?p+" ":"")+e.className),D.createElement("svg",E({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,a,w,{className:p,style:_(_({color:e.color||r.color},r.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),d&&D.createElement("title",null,d),e.children)};return pe!==void 0?D.createElement(pe.Consumer,null,r=>i(r)):i(xe)}function Oe(e){return ve({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"7",y1:"17",x2:"17",y2:"7"},child:[]},{tag:"polyline",attr:{points:"7 7 17 7 17 17"},child:[]}]})(e)}function Bt(e){return ve({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M7 11V7a5 5 0 0 1 10 0v4"},child:[]}]})(e)}const Ge=o.div`
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
`,We=o.div`
  flex: 1.6 1 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  gap: 0.5em;
  height: 100%;
`,Ee=o.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: auto;
  max-width: none;
  @media (max-width: 1000px) {
    justify-content: center;
    width: 100%;
  }
`;function ye({title:e,imageBaseName:i,imageSrc:r,imageExt:a="png",imageAlt:s="",$imageWidth:d="38vw",buttons:w=[],divider:c=!0}){return t.jsxs(Ge,{children:[t.jsxs(We,{children:[t.jsx(ke,{style:{fontSize:"2.8rem",marginBottom:"0.1em"},children:e}),c&&t.jsx("div",{style:{height:"1px",background:"#e0e0e0",width:"48px",margin:"0.1em 0 0.3em 0"}}),t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.3em 0.7em",marginBottom:"0.5em",maxWidth:"520px",width:"auto",alignItems:"center",justifyContent:"flex-start"},children:w.map(({href:p,label:A},C)=>t.jsxs(je,{href:p,target:"_blank",rel:"noopener noreferrer",children:[A," ",t.jsx(Oe,{style:{marginLeft:6,fontSize:"1.2em"}})]},C))})]}),t.jsx(Ee,{children:i?t.jsxs("picture",{children:[t.jsx("source",{srcSet:`${i.startsWith("assets/")?"/":"/src/"}${i}.avif`,type:"image/avif"}),t.jsx("source",{srcSet:`${i.startsWith("assets/")?"/":"/src/"}${i}.webp`,type:"image/webp"}),t.jsx(ue,{src:`${i.startsWith("assets/")?"/":"/src/"}${i}.${a}`,alt:s,$imageWidth:d})]}):t.jsx(ue,{src:r,alt:s,$imageWidth:d})})]})}const ue=o.img`
  max-height: 600px;
  width: ${({$imageWidth:e})=>e||"68vw"};
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
`,_e=""+new URL("Giga—mockup-Cnh_KW7P.jpg",import.meta.url).href,Be=""+new URL("Messages—1920 x 1400-FBHNown_.png",import.meta.url).href,Ie=""+new URL("iMac_2-ByB4ft45.jpg",import.meta.url).href,Ze=""+new URL("iPad2-7y6oKxfc.jpg",import.meta.url).href,Fe=""+new URL("iPhone_2—Dark—Sq-CMwx-i__.jpg",import.meta.url).href,Xe=""+new URL("LightPhone2—Sq-BQ4v3uUl.jpg",import.meta.url).href,Ne=""+new URL("iMac-BBUHxs4x.jpg",import.meta.url).href,He=""+new URL("About-DuQLmo8y.png",import.meta.url).href,Je=""+new URL("Guides-CQbHOjad.jpg",import.meta.url).href,qe=""+new URL("CreateNewPost-CaFWZEze.png",import.meta.url).href,je=o.a`
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
`,Ke="iphones—Mockup",N=o.div`
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
`,P=o.h6`
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
`,Qe=o.img`
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
`,Ve=o.h3`
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
`,J=o.div`
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
`;function ot(){return X.useLayoutEffect(()=>{window.scrollTo(0,0)}),t.jsxs(J,{children:[t.jsx(fe,{...u.giga,sameAs:y.sameAs,keywords:u.giga.keywords,jsonLd:{"@context":"https://schema.org","@type":"CreativeWork",headline:u.giga.title,description:u.giga.description,image:u.giga.image,author:{"@type":"Person",name:y.name,url:`${y.url}/about`},url:u.giga.url,datePublished:u.giga.datePublished,keywords:u.giga.keywords}}),t.jsx(ye,{title:"Giga",imageBaseName:"assets/Giga—Macbookv2",imageExt:"png",imageAlt:"Giga Macbook Mockup",imageWidth:"38vw",buttons:[{href:"https://gigaintelligence.com",label:"Visit Giga"}]}),t.jsx(N,{children:t.jsxs(H,{children:[t.jsxs(j,{children:[t.jsx(k,{children:"Project Type"}),t.jsx(P,{children:"UX/UI, Branding, Strategy"})]}),t.jsxs(j,{children:[t.jsx(k,{children:"Digital Product"}),t.jsx(P,{children:"Digital strategy platform used for data management, and private channel creation"})]}),t.jsxs(j,{children:[t.jsx(k,{children:"My Role"}),t.jsx(P,{children:"Responsible for researching, ideating, and generating ideas for a cohesive Giga experience. Designed and prototyped the Giga system & Web App"})]}),t.jsxs(j,{children:[t.jsx(k,{children:"Timeframe"}),t.jsx(P,{children:"1 1/2 years"})]})]})}),t.jsx(R,{src:Ke,style:{width:"100vw",maxWidth:"100vw",height:"auto",objectFit:"cover",display:"block",margin:0,padding:0,borderRadius:0}}),t.jsx(M,{style:{backgroundColor:"#ffffff"},children:t.jsx(z,{children:t.jsx(T,{style:{color:"#5D5D5D"},children:"Giga is a startup focused on sharing experiences between its users. Through a robust data management system, users can share information and learn about their favorite subjects"})})}),t.jsx(R,{src:_e}),t.jsx(b,{children:t.jsx(x,{src:Be})}),t.jsx(b,{children:t.jsx(x,{src:qe})}),t.jsx(R,{src:Ie}),t.jsx(b,{children:t.jsx(x,{src:Ze})}),t.jsx(q,{srcLeft:Fe,srcRight:Xe}),t.jsx(b,{children:t.jsx(x,{src:Ne})}),t.jsx(b,{style:{paddingBottom:"7vh"},children:t.jsx(x,{src:He})}),t.jsx(b,{style:{justifyContent:"center"},children:t.jsx(x,{src:Je})}),t.jsx(M,{style:{backgroundColor:"black"},children:t.jsx(z,{children:t.jsxs(T,{style:{color:"white",textAlign:"center"},children:["Founder — Rich Devlin",t.jsx("br",{}),"Lead Designer — Zachary MacTavish",t.jsx("br",{}),"Front-End Development — Xing Yi & Joel Fernando",t.jsx("br",{}),"Back-End Development — Rich Devlin"]})})})]})}const It=Object.freeze(Object.defineProperty({__proto__:null,BackgroundColor:et,Cellphones:tt,GigaRocket:Qe,ProjectBlock:j,ProjectButton:je,ProjectContent:rt,ProjectDetails:H,ProjectDetailsContainer:N,ProjectGrid:it,ProjectHeader:k,ProjectImage:at,ProjectLink:nt,ProjectSubtitle:P,ProjectTitle:ke,RisoItemtwo:Ye,StyledDiv:J,TextSection:Ve,default:ot},Symbol.toStringTag,{value:"Module"})),st=""+new URL("Highpower-CRTc0nnX.jpg",import.meta.url).href,ct=""+new URL("Highpower-CsvHkKEI.avif",import.meta.url).href,dt=""+new URL("Highpower-boH7bfqj.webp",import.meta.url).href,lt=""+new URL("AD—iphones-Ds9NHmDv.jpg",import.meta.url).href,mt=""+new URL("AD—iphones-BiYAAO7N.avif",import.meta.url).href,ht=""+new URL("AD—iphones-DGO6M8H3.webp",import.meta.url).href,pt=""+new URL("AD—pages-DKeMWlEm.jpg",import.meta.url).href,gt=""+new URL("AD—pages-BS_f5aWS.avif",import.meta.url).href,ut=""+new URL("AD—pages-sKiLGjS1.webp",import.meta.url).href,wt=""+new URL("AD—Macs-C-BI5_ml.jpg",import.meta.url).href,ft=""+new URL("AD—Macs-CXf9hZaT.avif",import.meta.url).href,xt=""+new URL("AD—Macs--XjCyU3R.webp",import.meta.url).href,bt=""+new URL("AD-ipad-7WzgOi0E.jpg",import.meta.url).href,vt=""+new URL("AD-ipad-CUp8F2b6.avif",import.meta.url).href,yt=""+new URL("AD-ipad-B7-837tt.webp",import.meta.url).href,jt=""+new URL("ADiPhone_2—Dark-BP_0B_M9.jpg",import.meta.url).href,kt=""+new URL("ADLightPhone2-C7enY0US.jpg",import.meta.url).href,Pt=""+new URL("ADiMac-Bsrxdz-Q.png",import.meta.url).href,At=""+new URL("ADiMac-DlvZlRIn.avif",import.meta.url).href,Ct=""+new URL("ADiMac-CKTwTd3P.webp",import.meta.url).href,St=""+new URL("Group 375-vcp1kghj.png",import.meta.url).href,Dt=""+new URL("Group 375-mZsO1BcE.avif",import.meta.url).href,Rt=""+new URL("Group 375-TF0Alkqk.webp",import.meta.url).href,Ut=""+new URL("Guides2-C--leQ0V.png",import.meta.url).href,$t=""+new URL("Guides2-DiNUbQbr.avif",import.meta.url).href,Lt=""+new URL("Guides2-DIlDKfWv.webp",import.meta.url).href,Tt=""+new URL("Group 274-k1yUScXs.png",import.meta.url).href,zt=""+new URL("Group 274-CN_qORPC.avif",import.meta.url).href,Mt=""+new URL("Group 274-CPP1pgPP.webp",import.meta.url).href,R=({src:e,avif:i,webp:r,alt:a="",style:s={}})=>(typeof e=="string"&&e.split("/").pop().replace(/\.[^.]+$/,""),t.jsxs("picture",{children:[i&&t.jsx("source",{srcSet:i,type:"image/avif"}),r&&t.jsx("source",{srcSet:r,type:"image/webp"}),t.jsx("img",{src:e,alt:a,style:{width:"100vw",height:"auto",margin:"3vh auto",display:"block",backgroundColor:"white",...s},loading:"lazy",decoding:"async"})]})),Ot=o.div`
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
`,T=o.p`
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
`,z=o.div`
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
`,M=o.section`
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
`,x=({src:e,avif:i,webp:r,alt:a="",width:s="60vw",style:d={}})=>{typeof e=="string"&&e.split("/").pop().replace(/\.[^.]+$/,"");const w={width:s,maxWidth:"1000px",height:"auto",display:"block",borderRadius:"24px",boxShadow:"0 2px 12px 0 rgba(0,0,0,0.06)",...d};return t.jsxs("picture",{children:[i&&t.jsx("source",{srcSet:i,type:"image/avif"}),r&&t.jsx("source",{srcSet:r,type:"image/webp"}),t.jsx("style",{children:".single-image-responsive { @media (max-width: 1320px) { width: 90vw !important; max-width: 90vw !important; } @media (max-width: 850px) { width: 100vw !important; max-width: 100vw !important; border-radius: 0 !important; } }"}),t.jsx("img",{src:e,alt:a,className:"single-image-responsive",style:w,loading:"lazy",decoding:"async"})]})},b=o.div`
  display: flex;
  justify-content: center;
  background-color: ${e=>e.theme.backgroundTwo};
  align-items: center;
  height: auto;
  padding: 3vh 0;
  width: 100vw;
`,Gt=o.div`
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
`,q=({srcLeft:e,srcRight:i,altLeft:r="",altRight:a="",styleLeft:s={},styleRight:d={}})=>t.jsxs("div",{style:{display:"flex",width:"100vw",height:"auto",flexWrap:"wrap",margin:0,padding:0},children:[t.jsx("img",{src:e,alt:r,style:{width:"50vw",height:"auto",display:"block",borderRadius:0,boxShadow:"none",margin:0,padding:0,...s},loading:"lazy",decoding:"async"}),t.jsx("img",{src:i,alt:a,style:{width:"50vw",height:"auto",display:"block",borderRadius:0,boxShadow:"none",margin:0,padding:0,...d},loading:"lazy",decoding:"async"})]});function Wt(){return X.useEffect(()=>{window.scrollTo(0,0)},[]),t.jsxs(J,{children:[t.jsx(fe,{...u["access-direct"],sameAs:y.sameAs,keywords:u["access-direct"].keywords,jsonLd:{"@context":"https://schema.org","@type":"CreativeWork",headline:u["access-direct"].title,description:u["access-direct"].description,image:u["access-direct"].image,author:{"@type":"Person",name:y.name,url:`${y.url}/about`},url:u["access-direct"].url,datePublished:u["access-direct"].datePublished,keywords:u["access-direct"].keywords}}),t.jsx(ye,{title:"Access Direct",imageBaseName:"assets/AD—Macbook",imageExt:"png",imageAlt:"Access Direct Macbook Mockup",imageWidth:"38vw",buttons:[{href:"https://accessdirect.com",label:"Visit Access Direct"}]}),t.jsx(N,{children:t.jsxs(H,{children:[t.jsxs(j,{children:[t.jsx(k,{children:"Project Type"}),t.jsx(P,{children:"UX/UI, Branding, Strategy, Front-end development"})]}),t.jsxs(j,{children:[t.jsx(k,{children:"Product"}),t.jsx(P,{children:"Brand identity, print materials, and a website built with React.js"})]}),t.jsxs(j,{children:[t.jsx(k,{children:"My Role"}),t.jsx(P,{children:"Responsible for tidying up the brand logo, colors, creating print materials for tradeshows, social media, digital brochures and flyers, and building the company website"})]}),t.jsxs(j,{children:[t.jsx(k,{children:"Timeframe"}),t.jsx(P,{children:"4 years (Part-time)"})]})]})}),t.jsx(R,{src:lt,avif:mt,webp:ht,style:{backgroundColor:"white",width:"100vw",maxWidth:"100vw",height:"auto",objectFit:"cover",display:"block",margin:0,padding:0,borderRadius:0}}),t.jsx(M,{style:{backgroundColor:"white"},children:t.jsx(z,{children:t.jsx(T,{style:{color:"#5d5d5d"},children:"Access Direct is a company focused on security solutions. I collaborated closely on the project, working on their brand identity, logos, and website. I served as the UI Designer and Webmaster, redesigning the site and building it using React.js."})})}),t.jsx(R,{src:pt,avif:gt,webp:ut,style:{backgroundColor:"white",width:"100vw",maxWidth:"100vw",borderRadius:0,margin:"0 auto"}}),t.jsx(b,{children:t.jsx(x,{src:st,avif:ct,webp:dt})}),t.jsx(b,{children:t.jsx(x,{src:Tt,avif:zt,webp:Mt})}),t.jsx(R,{src:wt,avif:ft,webp:xt,style:{backgroundColor:"white",width:"100vw",maxWidth:"100vw",borderRadius:0,margin:"0 auto"}}),t.jsx(b,{children:t.jsx(x,{src:bt,avif:vt,webp:yt})}),t.jsx(q,{srcLeft:jt,srcRight:kt,altLeft:"AD iPhone 2 Dark",altRight:"AD Light Phone 2",styleLeft:{},styleRight:{}}),t.jsx(b,{children:t.jsx(x,{src:Pt,avif:At,webp:Ct})}),t.jsx(b,{children:t.jsx(x,{src:St,avif:Dt,webp:Rt})}),t.jsx(b,{children:t.jsx(x,{src:Ut,avif:$t,webp:Lt})}),t.jsx(M,{style:{backgroundColor:"black"},children:t.jsx(z,{children:t.jsxs(T,{style:{color:"white",textAlign:"center"},children:["Founder — David Smith",t.jsx("br",{}),"Lead Designer — Zachary MacTavish",t.jsx("br",{}),"Website Development — Zachary MacTavish",t.jsx("br",{}),"Content Direction — Wendy Majewski, Alek Vasic"]})})})]})}const Zt=Object.freeze(Object.defineProperty({__proto__:null,DoubleImage:q,FullBg:R,FullHeightTextSection:M,ParagraphFour:Ot,RisoFlex:b,SingleGrid:Gt,SingleImage:x,TextContainer:z,TextContent:T,default:Wt},Symbol.toStringTag,{value:"Module"}));export{Zt as A,tt as C,q as D,fe as E,M as F,It as G,ke as P,b as R,J as S,z as T,T as a,R as b,x as c,Ot as d,ye as e,N as f,H as g,j as h,k as i,P as j,Ye as k,Bt as l,u as p,y as s};
