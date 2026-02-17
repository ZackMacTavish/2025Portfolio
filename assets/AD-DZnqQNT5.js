import{j as t}from"./three-D9NkSzoP.js";import{b as X,u as we,c as a,R as A}from"./vendor-D7aqownG.js";const xe=({title:e,description:r,url:i,image:o,images:d=null,type:m="website",authorName:w="Zack MacTavish",authorAlternateNames:s=["Zachary MacTavish"],sameAs:g=[],keywords:S=[],jsonLd:T=null,favicons:K=null,siteDefaults:p=null,siteName:Q=null,locale:Y=null,robots:ee=null,themeColor:te=null,twitterSite:ie=null,twitterCreator:re=null})=>(X.useEffect(()=>{e&&(document.title=e);const l=(n,c,f)=>{let x=document.querySelector(n);if(!x){x=document.createElement("meta");const N=n.match(/\[(name|property)=['"]([^'"]+)['"]\]/);N&&x.setAttribute(N[1],N[2]),document.head.appendChild(x)}x.setAttribute(c,f)};r&&(l("[name='description']","content",r),l("[property='og:description']","content",r),l("[name='twitter:description']","content",r)),S&&S.length&&l("[name='keywords']","content",Array.isArray(S)?S.join(", "):S),e&&(l("[property='og:title']","content",e),l("[name='twitter:title']","content",e)),l("[property='og:type']","content",m),i&&l("[property='og:url']","content",i);const oe=Q||p&&p.siteName||null,ne=Y||p&&p.locale||null,ae=ee||p&&p.robots||null,se=te||p&&p.themeColor||null,ce=ie||p&&p.twitterSite||null,de=re||p&&p.twitterCreator||null;oe&&l("[property='og:site_name']","content",oe),ne&&l("[property='og:locale']","content",ne),ae&&l("[name='robots']","content",ae),se&&l("[name='theme-color']","content",se),ce&&l("[name='twitter:site']","content",ce),de&&l("[name='twitter:creator']","content",de);const Pe=p&&p.ogImages||[],_=d||(o?[o]:null)||Pe,I=n=>{document.querySelectorAll(n).forEach(c=>c.remove())};I("meta[property='og:image']"),I("meta[property='og:image:width']"),I("meta[property='og:image:height']");let U=null;if(_&&_.length?_.forEach(n=>{let c=n;if(typeof n=="string"&&(c={url:n}),!c||!c.url)return;const f=document.createElement("meta");if(f.setAttribute("property","og:image"),f.setAttribute("content",c.url),document.head.appendChild(f),c.width){const x=document.createElement("meta");x.setAttribute("property","og:image:width"),x.setAttribute("content",String(c.width)),document.head.appendChild(x)}if(c.height){const x=document.createElement("meta");x.setAttribute("property","og:image:height"),x.setAttribute("content",String(c.height)),document.head.appendChild(x)}U||(U=c.url)}):o&&(l("[property='og:image']","content",o),U=o),U?(l("[name='twitter:image']","content",U),l("[name='twitter:card']","content","summary_large_image")):l("[name='twitter:card']","content","summary"),i){let n=document.querySelector("link[rel='canonical']");n||(n=document.createElement("link"),n.setAttribute("rel","canonical"),document.head.appendChild(n)),n.setAttribute("href",i)}const le="seo-json-ld";let $=document.getElementById(le);const B={"@context":"https://schema.org","@type":"Person",name:w,url:i||window.location.href};s&&s.length&&(B.alternateName=s.length===1?s[0]:s),g&&g.length&&(B.sameAs=g);let D=T||B;if(!T)D=B;else try{const n=T;(n["@type"]==="CreativeWork"||n["@type"]==="Article")&&!n.author&&(n.author={"@type":"Person",name:w,url:i||window.location.href},s&&s.length&&(n.author.alternateName=s.length===1?s[0]:s),g&&g.length&&(n.author.sameAs=g)),D=n}catch{D=T}if($?$.text=JSON.stringify(D):($=document.createElement("script"),$.id=le,$.type="application/ld+json",$.text=JSON.stringify(D),document.head.appendChild($)),w||s&&s.length){const n=[w].concat(s||[]).filter(Boolean).join(", ");l("[name='author']","content",n)}g&&g.length&&l("[name='sameAs']","content",g.join(", "));const W=K||p&&p.favicons||null,E=n=>{document.querySelectorAll(`link[rel='${n}']`).forEach(c=>c.remove())};E("icon"),E("shortcut icon"),E("apple-touch-icon"),E("manifest"),W&&(Array.isArray(W)?W.forEach(n=>{const c=document.createElement("link");n.rel?c.setAttribute("rel",n.rel):c.setAttribute("rel",n.sizes==="180x180"?"apple-touch-icon":"icon"),n.sizes&&c.setAttribute("sizes",n.sizes),c.setAttribute("href",n.href),document.head.appendChild(c)}):Object.entries(W).forEach(([n,c])=>{const f=document.createElement("link");n==="180x180"?f.setAttribute("rel","apple-touch-icon"):f.setAttribute("rel","icon"),f.setAttribute("sizes",n),f.setAttribute("href",c),document.head.appendChild(f)}))},[e,r,i,o,m,w,s,g,S,T,K,p,Q,Y,ee,te,ie,re]),null);var he={exports:{}},M={},me;function Ce(){if(me)return M;me=1;var e=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function i(o,d,m){var w=null;if(m!==void 0&&(w=""+m),d.key!==void 0&&(w=""+d.key),"key"in d){m={};for(var s in d)s!=="key"&&(m[s]=d[s])}else m=d;return d=m.ref,{$$typeof:e,type:o,key:w,ref:d!==void 0?d:null,props:m}}return M.Fragment=r,M.jsx=i,M.jsxs=i,M}var ge;function $e(){return ge||(ge=1,he.exports=Ce()),he.exports}$e();we`
  html, body, * { cursor: none !important; }
`;a.div`
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
`;const Ae=a.div`
  width: 60vw;
  max-width: 1100px;
  margin: 0 auto;
  box-sizing: border-box;

  @media (max-width: 1000px) {
    width: 92vw;
  }
`,Se=a(Ae)`
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
`;a(Se)`
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
`;a.img`
  width: ${e=>e.$imageWidth||"86%"};
  height: auto;
  display: block;
  margin: 0;
  border-radius: ${e=>e.theme?.radii?.card||"12px"};
  overflow: hidden;
`;const h="https://mactavish.xyz",b={name:"Zack MacTavish",url:h,defaultImage:`${h}/assets/og/website-logoresolutions-1200x630.png`,sameAs:["https://dribbble.com/Zmactavish","https://www.instagram.com/zackmichaelmactavish","https://www.linkedin.com/in/zacharymactavish/","https://github.com/ZackMacTavish","https://medium.com/@zmactavish"],keywords:["product design","graphic design","UX","portfolio","Zack MacTavish"]},u={landing:{title:`${b.name} — Product & Graphic Designer`,description:"Product & graphic designer focused on brand, UX, and digital experiences. View work and contact.",url:`${h}/`,image:b.defaultImage,keywords:["portfolio","home","design","Zack MacTavish"]},about:{title:`About — ${b.name}`,description:"About Zack MacTavish — product & graphic designer. Learn about my background, work, and exhibitions.",url:`${h}/about`,image:b.defaultImage,keywords:["about","bio","background"]},giga:{title:"Giga — UX/UI & Branding | Zack MacTavish",description:"Case study: Giga — UX/UI, branding, and product design by Zack MacTavish.",url:`${h}/projects/giga`,image:`${h}/assets/Giga—Macbookv2.png`,datePublished:"2024-10-01",keywords:["giga","product design","ux","branding"]},outsource:{title:"Outsource — UX/UI & Branding | Zack MacTavish",description:"Case study: Outsource — branding, websites and UX work by Zack MacTavish.",url:`${h}/projects/outsource`,image:`${h}/assets/Outsource—Macbook.png`,datePublished:"2023-08-01",keywords:["outsource","branding","ux"]},piton:{title:"Piton — Project | Zack MacTavish",description:"Case study: Piton — UX and visual design work by Zack MacTavish.",url:`${h}/projects/piton`,image:`${h}/assets/Piton—Screens.jpg`,datePublished:"2023-02-01",keywords:["piton","branding","app design"]},ux:{title:"UX — Product & UX Projects | Zack MacTavish",description:"Portfolio of UX and product design projects by Zack MacTavish.",url:`${h}/projects/ux`,image:`${h}/assets/Giga—mockup.jpg`,keywords:["ux","product design"]},"access-direct":{title:"Access Direct — UX & Brand | Zack MacTavish",description:"Case study: Access Direct — brand, UX and website built by Zack MacTavish.",url:`${h}/projects/access-direct`,image:`${h}/assets/AD—Macs.jpg`,datePublished:"2022-10-01",keywords:["access direct","ux","brand"]},"graphic-design":{title:"Graphic Design — Portfolio | Zack MacTavish",description:"Graphic design and art pieces by Zack MacTavish, including posters, packaging, and editorial work.",url:`${h}/projects/graphic-design`,image:`${h}/assets/Cover.png`,keywords:["graphic design","posters","packaging"]},threepillars:{title:"ThreePillars — UX & Branding | Zack MacTavish",description:"Case study: ThreePillars — brand and web app design by Zack MacTavish.",url:`${h}/projects/threepillars`,image:`${h}/assets/ThreePillars—Macbook.png`,keywords:["threepillars","branding","ux"]},microsoft:{title:"Microsoft — Project | Zack MacTavish",description:"Case study: Microsoft — UX and visual design work by Zack MacTavish. Password protected.",url:`${h}/projects/microsoft`,image:b.defaultImage,keywords:["microsoft","branding","ux","password protected"]}};var fe={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},pe=A.createContext&&A.createContext(fe),Te=["attr","size","title"];function Ue(e,r){if(e==null)return{};var i=De(e,r),o,d;if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(d=0;d<m.length;d++)o=m[d],!(r.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}function De(e,r){if(e==null)return{};var i={};for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){if(r.indexOf(o)>=0)continue;i[o]=e[o]}return i}function G(){return G=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var i=arguments[r];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o])}return e},G.apply(this,arguments)}function ue(e,r){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(d){return Object.getOwnPropertyDescriptor(e,d).enumerable})),i.push.apply(i,o)}return i}function Z(e){for(var r=1;r<arguments.length;r++){var i=arguments[r]!=null?arguments[r]:{};r%2?ue(Object(i),!0).forEach(function(o){Me(e,o,i[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):ue(Object(i)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(i,o))})}return e}function Me(e,r,i){return r=ze(r),r in e?Object.defineProperty(e,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[r]=i,e}function ze(e){var r=Le(e,"string");return typeof r=="symbol"?r:r+""}function Le(e,r){if(typeof e!="object"||!e)return e;var i=e[Symbol.toPrimitive];if(i!==void 0){var o=i.call(e,r);if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function be(e){return e&&e.map((r,i)=>A.createElement(r.tag,Z({key:i},r.attr),be(r.child)))}function ye(e){return r=>A.createElement(Re,G({attr:Z({},e.attr)},r),be(e.child))}function Re(e){var r=i=>{var{attr:o,size:d,title:m}=e,w=Ue(e,Te),s=d||i.size||"1em",g;return i.className&&(g=i.className),e.className&&(g=(g?g+" ":"")+e.className),A.createElement("svg",G({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},i.attr,o,w,{className:g,style:Z(Z({color:e.color||i.color},i.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),m&&A.createElement("title",null,m),e.children)};return pe!==void 0?A.createElement(pe.Consumer,null,i=>r(i)):r(fe)}function Oe(e){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"7",y1:"17",x2:"17",y2:"7"},child:[]},{tag:"polyline",attr:{points:"7 7 17 7 17 17"},child:[]}]})(e)}function Dt(e){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M7 11V7a5 5 0 0 1 10 0v4"},child:[]}]})(e)}const Be=a.div`
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
`,We=a.div`
  flex: 1.6 1 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  gap: 0.5em;
  height: 100%;
`,Ee=a.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: auto;
  max-width: none;
  @media (max-width: 1000px) {
    justify-content: center;
    width: 100%;
  }
`;function ve({title:e,imageSrc:r,imageAlt:i="",imageWidth:o="38vw",buttons:d=[],divider:m=!0}){return t.jsxs(Be,{children:[t.jsxs(We,{children:[t.jsx(ke,{style:{fontSize:"2.8rem",marginBottom:"0.1em"},children:e}),m&&t.jsx("div",{style:{height:"1px",background:"#e0e0e0",width:"48px",margin:"0.1em 0 0.3em 0"}}),t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.3em 0.7em",marginBottom:"0.5em",maxWidth:"520px",width:"auto",alignItems:"center",justifyContent:"flex-start"},children:d.map(({href:w,label:s},g)=>t.jsxs(je,{href:w,target:"_blank",rel:"noopener noreferrer",children:[s," ",t.jsx(Oe,{style:{marginLeft:6,fontSize:"1.2em"}})]},g))})]}),t.jsx(Ee,{children:t.jsx(Ge,{src:r,alt:i,imageWidth:o})})]})}const Ge=a.img`
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
`,Ze=""+new URL("Giga—Macbookv2-CfLN1sRf.png",import.meta.url).href,_e=""+new URL("iphones—Mockup-huIJePT7.png",import.meta.url).href,Ie=""+new URL("Giga—mockup-Cnh_KW7P.jpg",import.meta.url).href,Ne=""+new URL("Messages—1920 x 1400-FBHNown_.png",import.meta.url).href,Fe=""+new URL("iMac_2-ByB4ft45.jpg",import.meta.url).href,Xe=""+new URL("iPad2-7y6oKxfc.jpg",import.meta.url).href,He=""+new URL("iPhone_2—Dark—Sq-CMwx-i__.jpg",import.meta.url).href,qe=""+new URL("LightPhone2—Sq-BQ4v3uUl.jpg",import.meta.url).href,Ve=""+new URL("iMac-BBUHxs4x.jpg",import.meta.url).href,Je=""+new URL("About-DuQLmo8y.png",import.meta.url).href,Ke=""+new URL("Photos1-BTmM1LpC.jpg",import.meta.url).href,Qe=""+new URL("Photos2-BXosammk.jpg",import.meta.url).href,Ye=""+new URL("Photos3-Cwlh6lpi.jpg",import.meta.url).href,et=""+new URL("Photos4-D5_iTpD0.jpg",import.meta.url).href,tt=""+new URL("Guides-CQbHOjad.jpg",import.meta.url).href,it=""+new URL("CreateNewPost-CaFWZEze.png",import.meta.url).href,je=a.a`
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
`,H=a.div`
  max-width: 1100px;
  margin: 0 auto 6vh; /* add margin-bottom for extra space outside */
  padding: 4vh 4vw 6vh; /* reduced internal padding */
  background-color: #f5f5f5;
  border-radius: 60px;

  @media (max-width: 1320px) {
    max-width: 90%;
  }

  @media (max-width: 850px) {
    width: 100%;
    padding: 4vh 4vw 6vh; /* keep reduced padding on mobile */
    border-radius: 0;
  }
`,q=a.div`
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
`,j=a.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,k=a.h3`
  color: ${e=>e.theme.fontColor};
  font-size: 2.5rem;
  margin: 0;

  @media (max-width: 1320px) {
    font-size: 2.3rem;
  }

  @media (max-width: 850px) {
    font-size: 2rem;
  }
`,P=a.h6`
  color: ${e=>e.theme.fontColor};
  font-size: 1.3rem;
  margin-top: 0.4rem;
  line-height: 1.45;
  font-weight: 400;
  font-family: 'Space Grotesk', sans-serif;

  @media (max-width: 1320px) {
    font-size: 1.15rem;
  }

  @media (max-width: 850px) {
    font-size: 1rem;
  }
`,rt=a.img`
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
`,ot=a.h3`
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
`,z=a.img.attrs({loading:"lazy",decoding:"async"})`
width: ${e=>e.Width};
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
`,nt=a.div`
width: 100vw;
background-color: #2CA0FD;
grid-row-start: 4;
grid-row-end: 9;
z-index: -5;
`,V=a.div`
background-color: ${e=>e.theme.backgroundTwo};
`,J=a.div`
display: flex;
width: 100vw;
height: auto;

@media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    height: auto;
}
`,at=a.div`
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
`,st=a.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  max-width: 600px;

  @media (max-width: 1000px) {
    align-items: center;    /* centers the block horizontally */
    text-align: left;       /* keeps text left-aligned inside */
    margin-bottom: 2vh;     /* spacing below the text before image */
  }
`,ct=a.img`
  width: ${e=>e.Width};
  height: auto;

  @media (max-width: 1000px) {
    width: 80vw; /* image slightly bigger on vertical stack */
  }
`,ke=a.h2`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 4.5rem;
  color: ${e=>e.theme.fontColor};
  margin: 0;

  @media (max-width: 850px) {
    font-size: 3rem;
  }
`,dt=a.a`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.4rem;
  color: ${e=>e.theme.fontColor};
  text-decoration: none;
  margin-top: 1vh;

  &:hover {
    opacity: 0.75;
  }
`;function lt(){return X.useLayoutEffect(()=>{window.scrollTo(0,0)}),t.jsxs(V,{children:[t.jsx(xe,{...u.giga,sameAs:b.sameAs,keywords:u.giga.keywords,jsonLd:{"@context":"https://schema.org","@type":"CreativeWork",headline:u.giga.title,description:u.giga.description,image:u.giga.image,author:{"@type":"Person",name:b.name,url:`${b.url}/about`},url:u.giga.url,datePublished:u.giga.datePublished,keywords:u.giga.keywords}}),t.jsx(ve,{title:"Giga",imageSrc:Ze,imageAlt:"Giga Macbook Mockup",imageWidth:"44vw",buttons:[{href:"https://gigaintelligence.com",label:"Visit Giga"}]}),t.jsx(H,{children:t.jsxs(q,{children:[t.jsxs(j,{children:[t.jsx(k,{children:"Project Type"}),t.jsx(P,{children:"UX/UI, Branding, Strategy"})]}),t.jsxs(j,{children:[t.jsx(k,{children:"Digital Product"}),t.jsx(P,{children:"Digital strategy platform used for data management, and private channel creation"})]}),t.jsxs(j,{children:[t.jsx(k,{children:"My Role"}),t.jsx(P,{children:"Responsible for researching, ideating, and generating ideas for a cohesive Giga experience. Designed and prototyped the Giga system & Web App"})]}),t.jsxs(j,{children:[t.jsx(k,{children:"Timeframe"}),t.jsx(P,{children:"1 1/2 years"})]})]})}),t.jsx(C,{src:_e}),t.jsx(O,{style:{backgroundColor:"#ffffff"},children:t.jsx(R,{children:t.jsx(L,{style:{color:"#5D5D5D"},children:"Giga is a startup focused on sharing experiences between its users. Through a robust data management system, users can share information and learn about their favorite subjects"})})}),t.jsx(C,{src:Ie}),t.jsx(v,{children:t.jsx(z,{src:Ne,Width:"60vw"})}),t.jsx(v,{children:t.jsx(z,{src:it,Width:"60vw"})}),t.jsx(C,{src:Fe}),t.jsx(v,{children:t.jsx(y,{src:Xe,Width:"65vw"})}),t.jsxs(J,{children:[t.jsx(y,{Width:"50vw",src:He}),t.jsx(y,{Width:"50vw",src:qe})]}),t.jsx(v,{children:t.jsx(y,{src:Ve,Width:"65vw"})}),t.jsx(v,{style:{paddingBottom:"7vh"},children:t.jsx(y,{src:Je,Width:"65vw"})}),t.jsx("img",{src:Ke,alt:"",style:{width:"100%",height:"auto",display:"block"}}),t.jsx("img",{src:Qe,alt:"",style:{width:"100%",height:"auto",display:"block"}}),t.jsx("img",{src:Ye,alt:"",style:{width:"100%",height:"auto",display:"block"}}),t.jsx("img",{src:et,alt:"",style:{width:"100%",height:"auto",display:"block"}}),t.jsx(C,{src:tt}),t.jsx(O,{style:{backgroundColor:"black"},children:t.jsx(R,{children:t.jsxs(L,{style:{color:"white",textAlign:"center"},children:["Founder — Rich Devlin",t.jsx("br",{}),"Lead Designer — Zachary MacTavish",t.jsx("br",{}),"Front-End Development — Xing Yi & Joel Fernando",t.jsx("br",{}),"Back-End Development — Rich Devlin"]})})})]})}const Mt=Object.freeze(Object.defineProperty({__proto__:null,BackgroundColor:nt,Cellphones:J,GigaRocket:rt,ProjectBlock:j,ProjectButton:je,ProjectContent:st,ProjectDetails:q,ProjectDetailsContainer:H,ProjectGrid:at,ProjectHeader:k,ProjectImage:ct,ProjectLink:dt,ProjectSubtitle:P,ProjectTitle:ke,RisoItemtwo:z,StyledDiv:V,TextSection:ot,default:lt},Symbol.toStringTag,{value:"Module"})),ht=""+new URL("Highpower-CRTc0nnX.jpg",import.meta.url).href,mt=""+new URL("AD—iphones-Ds9NHmDv.jpg",import.meta.url).href,gt=""+new URL("AD—pages-DKeMWlEm.jpg",import.meta.url).href,pt=""+new URL("AD—Macs-C-BI5_ml.jpg",import.meta.url).href,ut=""+new URL("AD—Macbook-CFPkaWg5.png",import.meta.url).href,wt=""+new URL("AD-ipad-7WzgOi0E.jpg",import.meta.url).href,xt=""+new URL("iPhone_2—Dark-BP_0B_M9.jpg",import.meta.url).href,ft=""+new URL("LightPhone2-C7enY0US.jpg",import.meta.url).href,bt=""+new URL("ADiMac-La2LUK1h.jpg",import.meta.url).href,yt=""+new URL("Group 375-DGdrOhbV.jpg",import.meta.url).href,vt=""+new URL("ADphotos1-BMN3iZjl.jpg",import.meta.url).href,jt=""+new URL("ADphotos2-kBuZ2Ke7.jpg",import.meta.url).href,kt=""+new URL("ADphotos3-DcIZQByP.jpg",import.meta.url).href,Pt=""+new URL("Guides2-BTNWjuI4.jpg",import.meta.url).href,Ct=""+new URL("Group 274-DFJv41vH.jpg",import.meta.url).href,$t=a.div`
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
`,L=a.p`
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
`,R=a.div`
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
`,O=a.section`
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
`,y=a.img.attrs({loading:"lazy",decoding:"async"})`
  width: ${e=>e.Width};
  max-width: 1000px;
  height: auto;
  @media (max-width: 1000px) { width: 90vw; padding-top: 3vh; }
  @media (max-width: 450px) { padding-top: 5vh; padding-bottom: 5vh; }
`,v=a.div`
  display: flex;
  justify-content: center;
  background-color: ${e=>e.theme.backgroundTwo};
  align-items: center;
  height: auto;
  padding: 3vh 0;
  width: 100vw;
`,C=a.img.attrs({loading:"lazy",decoding:"async"})`
width: 100vw;
height: auto;
margin-top: -1vh;
background-size: contain;
background-color: ${e=>e.theme.backgroundTwo};

@media(max-width: 830px) {
    padding-top: 3vh;
}
`,At=a.div`
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
`;function St(){return X.useEffect(()=>{window.scrollTo(0,0)},[]),t.jsxs(V,{children:[t.jsx(xe,{...u["access-direct"],sameAs:b.sameAs,keywords:u["access-direct"].keywords,jsonLd:{"@context":"https://schema.org","@type":"CreativeWork",headline:u["access-direct"].title,description:u["access-direct"].description,image:u["access-direct"].image,author:{"@type":"Person",name:b.name,url:`${b.url}/about`},url:u["access-direct"].url,datePublished:u["access-direct"].datePublished,keywords:u["access-direct"].keywords}}),t.jsx(ve,{title:"Access Direct",imageSrc:ut,imageAlt:"Access Direct Macbook Mockup",imageWidth:"44vw",buttons:[{href:"https://accessdirect.com",label:"Visit Access Direct"}]}),t.jsx(H,{children:t.jsxs(q,{children:[t.jsxs(j,{children:[t.jsx(k,{children:"Project Type"}),t.jsx(P,{children:"UX/UI, Branding, Strategy, Front-end development"})]}),t.jsxs(j,{children:[t.jsx(k,{children:"Product"}),t.jsx(P,{children:"Brand identity, print materials, and a website built with React.js"})]}),t.jsxs(j,{children:[t.jsx(k,{children:"My Role"}),t.jsx(P,{children:"Responsible for tidying up the brand logo, colors, creating print materials for tradeshows, social media, digital brochures and flyers, and building the company website"})]}),t.jsxs(j,{children:[t.jsx(k,{children:"Timeframe"}),t.jsx(P,{children:"4 years (Part-time)"})]})]})}),t.jsx(C,{src:mt,style:{backgroundColor:"white"}}),t.jsx(O,{style:{backgroundColor:"white"},children:t.jsx(R,{children:t.jsx(L,{style:{color:"#5d5d5d"},children:"Access Direct is a company focused on security solutions. I collaborated closely on the project, working on their brand identity, logos, and website. I served as the UI Designer and Webmaster, redesigning the site and building it using React.js."})})}),t.jsx(C,{src:gt,style:{backgroundColor:"white"}}),t.jsx(v,{children:t.jsx(z,{src:ht,Width:"60vw"})}),t.jsx(v,{children:t.jsx(z,{src:Ct,Width:"60vw",style:{marginBottom:"3vh"}})}),t.jsx(C,{src:pt,style:{backgroundColor:"white"}}),t.jsx(v,{children:t.jsx(y,{src:wt,Width:"65vw"})}),t.jsxs(J,{children:[t.jsx(y,{Width:"50vw",src:xt}),t.jsx(y,{Width:"50vw",src:ft})]}),t.jsx(v,{children:t.jsx(y,{src:bt,Width:"65vw"})}),t.jsx(v,{style:{marginBottom:"5vh"},children:t.jsx(y,{src:yt,Width:"65vw",style:{boxShadow:"5px 10px 24px rgba(0, 0, 0, 0.1)"}})}),t.jsx("img",{src:kt,alt:"",style:{width:"100%",height:"auto",display:"block",backgroundColor:"white"}}),t.jsx("img",{src:jt,alt:"",style:{width:"100%",height:"auto",display:"block",backgroundColor:"white"}}),t.jsx("img",{src:vt,alt:"",style:{width:"100%",height:"auto",display:"block",backgroundColor:"white"}}),t.jsx("img",{src:Pt,alt:"",style:{width:"100%",height:"auto",display:"block",backgroundColor:"white"}}),t.jsx(O,{style:{backgroundColor:"black"},children:t.jsx(R,{children:t.jsxs(L,{style:{color:"white",textAlign:"center"},children:["Founder — David Smith",t.jsx("br",{}),"Lead Designer — Zachary MacTavish",t.jsx("br",{}),"Website Development — Zachary MacTavish",t.jsx("br",{}),"Content Direction — Wendy Majewski, Alek Vasic"]})})})]})}const zt=Object.freeze(Object.defineProperty({__proto__:null,FullBg:C,FullHeightTextSection:O,ParagraphFour:$t,RisoFlex:v,RisoItem:y,SingleGrid:At,TextContainer:R,TextContent:L,default:St},Symbol.toStringTag,{value:"Module"}));export{zt as A,nt as B,J as C,xe as E,O as F,rt as G,ke as P,v as R,V as S,R as T,L as a,C as b,z as c,y as d,$t as e,ve as f,H as g,q as h,j as i,k as j,P as k,Dt as l,Mt as m,u as p,b as s};
