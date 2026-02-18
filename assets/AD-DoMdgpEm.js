import{j as t}from"./three-D9NkSzoP.js";import{b as q,c as o,u as fe,R as L}from"./vendor-D7aqownG.js";const xe=({title:e,description:i,url:r,image:a,images:s=null,type:d="website",authorName:u="Zack MacTavish",authorAlternateNames:c=["Zachary MacTavish"],sameAs:m=[],keywords:j=[],jsonLd:k=null,favicons:W=null,siteDefaults:g=null,siteName:V=null,locale:Y=null,robots:ee=null,themeColor:te=null,twitterSite:ie=null,twitterCreator:re=null})=>(q.useEffect(()=>{e&&(document.title=e);const h=(n,l,v)=>{let f=document.querySelector(n);if(!f){f=document.createElement("meta");const N=n.match(/\[(name|property)=['"]([^'"]+)['"]\]/);N&&f.setAttribute(N[1],N[2]),document.head.appendChild(f)}f.setAttribute(l,v)};i&&(h("[name='description']","content",i),h("[property='og:description']","content",i),h("[name='twitter:description']","content",i)),j&&j.length&&h("[name='keywords']","content",Array.isArray(j)?j.join(", "):j),e&&(h("[property='og:title']","content",e),h("[name='twitter:title']","content",e)),h("[property='og:type']","content",d),r&&h("[property='og:url']","content",r);const ae=V||g&&g.siteName||null,ne=Y||g&&g.locale||null,oe=ee||g&&g.robots||null,se=te||g&&g.themeColor||null,ce=ie||g&&g.twitterSite||null,de=re||g&&g.twitterCreator||null;ae&&h("[property='og:site_name']","content",ae),ne&&h("[property='og:locale']","content",ne),oe&&h("[name='robots']","content",oe),se&&h("[name='theme-color']","content",se),ce&&h("[name='twitter:site']","content",ce),de&&h("[name='twitter:creator']","content",de);const Pe=g&&g.ogImages||[],Z=s||(a?[a]:null)||Pe,F=n=>{document.querySelectorAll(n).forEach(l=>l.remove())};F("meta[property='og:image']"),F("meta[property='og:image:width']"),F("meta[property='og:image:height']");let D=null;if(Z&&Z.length?Z.forEach(n=>{let l=n;if(typeof n=="string"&&(l={url:n}),!l||!l.url)return;const v=document.createElement("meta");if(v.setAttribute("property","og:image"),v.setAttribute("content",l.url),document.head.appendChild(v),l.width){const f=document.createElement("meta");f.setAttribute("property","og:image:width"),f.setAttribute("content",String(l.width)),document.head.appendChild(f)}if(l.height){const f=document.createElement("meta");f.setAttribute("property","og:image:height"),f.setAttribute("content",String(l.height)),document.head.appendChild(f)}D||(D=l.url)}):a&&(h("[property='og:image']","content",a),D=a),D?(h("[name='twitter:image']","content",D),h("[name='twitter:card']","content","summary_large_image")):h("[name='twitter:card']","content","summary"),r){let n=document.querySelector("link[rel='canonical']");n||(n=document.createElement("link"),n.setAttribute("rel","canonical"),document.head.appendChild(n)),n.setAttribute("href",r)}const le="seo-json-ld";let U=document.getElementById(le);const G={"@context":"https://schema.org","@type":"Person",name:u,url:r||window.location.href};c&&c.length&&(G.alternateName=c.length===1?c[0]:c),m&&m.length&&(G.sameAs=m);let $=k||G;if(!k)$=G;else try{const n=k;(n["@type"]==="CreativeWork"||n["@type"]==="Article")&&!n.author&&(n.author={"@type":"Person",name:u,url:r||window.location.href},c&&c.length&&(n.author.alternateName=c.length===1?c[0]:c),m&&m.length&&(n.author.sameAs=m)),$=n}catch{$=k}if(U?U.text=JSON.stringify($):(U=document.createElement("script"),U.id=le,U.type="application/ld+json",U.text=JSON.stringify($),document.head.appendChild(U)),u||c&&c.length){const n=[u].concat(c||[]).filter(Boolean).join(", ");h("[name='author']","content",n)}m&&m.length&&h("[name='sameAs']","content",m.join(", "));const E=W||g&&g.favicons||null,B=n=>{document.querySelectorAll(`link[rel='${n}']`).forEach(l=>l.remove())};B("icon"),B("shortcut icon"),B("apple-touch-icon"),B("manifest"),E&&(Array.isArray(E)?E.forEach(n=>{const l=document.createElement("link");n.rel?l.setAttribute("rel",n.rel):l.setAttribute("rel",n.sizes==="180x180"?"apple-touch-icon":"icon"),n.sizes&&l.setAttribute("sizes",n.sizes),l.setAttribute("href",n.href),document.head.appendChild(l)}):Object.entries(E).forEach(([n,l])=>{const v=document.createElement("link");n==="180x180"?v.setAttribute("rel","apple-touch-icon"):v.setAttribute("rel","icon"),v.setAttribute("sizes",n),v.setAttribute("href",l),document.head.appendChild(v)}))},[e,i,r,a,d,u,c,m,j,k,W,g,V,Y,ee,te,ie,re]),null);var me={exports:{}},z={},he;function Re(){if(he)return z;he=1;var e=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function r(a,s,d){var u=null;if(d!==void 0&&(u=""+d),s.key!==void 0&&(u=""+s.key),"key"in s){d={};for(var c in s)c!=="key"&&(d[c]=s[c])}else d=s;return s=d.ref,{$$typeof:e,type:a,key:u,ref:s!==void 0?s:null,props:d}}return z.Fragment=i,z.jsx=r,z.jsxs=r,z}var pe;function Ue(){return pe||(pe=1,me.exports=Re()),me.exports}var C=Ue();fe`
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
`;o(Ce)`
  display: grid;
  grid-template-columns: ${e=>e.columns||"0.48fr 0.52fr"};
  gap: ${e=>e.gap||"2rem"};
  align-items: ${e=>e.align||"center"};

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;const X={fonts:{body:"Space Grotesk, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif"},spacing:{lg:"16px"},radii:{card:"18px"}};fe`
  :root {
    /* expose some common tokens as CSS vars for non-styled consumers */
    --radius-card: ${X.radii.card};
    --space-lg: ${X.spacing.lg};
  }
  * { box-sizing: border-box; }
  html, body, #root { height: 100%; }
  body {
    margin: 0;
    background-color: ${e=>e.theme.backgroundColor};
    color: ${e=>e.theme.fontColor};
    font-family: ${X.fonts.body};
  }
`;const Le=o.div`
  width: ${e=>e.$width||"62vw"};
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  gap: 2.2vw;
  align-items: stretch;
  padding: ${e=>e.theme?.spacing?.["3xl"]||"3rem"} 0;

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
`,Se=o.div`
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
`,De=o.img`
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
`,$e=o.div`
  flex: 1 1 50%;
  font-family: 'Space Grotesk', sans-serif;
  font-size: ${e=>e.$textSize||"1.4rem"};
  color: ${e=>e.$textColor||"#fff"};
  line-height: 1.4;
  font-weight: 500;
  display: flex;
  align-items: center;
  min-width: 0;
  @media (max-width: 1000px) {
    font-size: 1.7rem;
    display: flex;
    width: 92vw;
    margin: 0 auto;
    text-align: center;
    align-items: center;
    justify-content: center;
    min-height: 40px;
  }
`;function li({imageSrc:e,imageAvif:i,imageWebp:r,imageAlt:a,children:s,imageWidth:d,columns:u,width:c,textSize:m,textColor:j,className:k,...W}){return C.jsxs(Le,{$width:c,className:k,...W,children:[C.jsx(Se,{children:C.jsxs("picture",{children:[i&&C.jsx("source",{srcSet:i,type:"image/avif"}),r&&C.jsx("source",{srcSet:r,type:"image/webp"}),C.jsx(De,{src:e,alt:a})]})}),C.jsx($e,{$textSize:m,$textColor:j,children:s})]})}const p="https://mactavish.xyz",y={name:"Zack MacTavish",url:p,defaultImage:`${p}/assets/og/website-logoresolutions-1200x630.png`,sameAs:["https://dribbble.com/Zmactavish","https://www.instagram.com/zackmichaelmactavish","https://www.linkedin.com/in/zacharymactavish/","https://github.com/ZackMacTavish","https://medium.com/@zmactavish"],keywords:["product design","graphic design","UX","portfolio","Zack MacTavish"]},w={landing:{title:`${y.name} — Product & Graphic Designer`,description:"Product & graphic designer focused on brand, UX, and digital experiences. View work and contact.",url:`${p}/`,image:y.defaultImage,keywords:["portfolio","home","design","Zack MacTavish"]},about:{title:`About — ${y.name}`,description:"About Zack MacTavish — product & graphic designer. Learn about my background, work, and exhibitions.",url:`${p}/about`,image:y.defaultImage,keywords:["about","bio","background"]},giga:{title:"Giga — UX/UI & Branding | Zack MacTavish",description:"Case study: Giga — UX/UI, branding, and product design by Zack MacTavish.",url:`${p}/projects/giga`,image:`${p}/assets/Giga—Macbookv2.png`,datePublished:"2024-10-01",keywords:["giga","product design","ux","branding"]},outsource:{title:"Outsource — UX/UI & Branding | Zack MacTavish",description:"Case study: Outsource — branding, websites and UX work by Zack MacTavish.",url:`${p}/projects/outsource`,image:`${p}/assets/Outsource—Macbook.png`,datePublished:"2023-08-01",keywords:["outsource","branding","ux"]},piton:{title:"Piton — Project | Zack MacTavish",description:"Case study: Piton — UX and visual design work by Zack MacTavish.",url:`${p}/projects/piton`,image:`${p}/assets/Piton—Screens.jpg`,datePublished:"2023-02-01",keywords:["piton","branding","app design"]},ux:{title:"UX — Product & UX Projects | Zack MacTavish",description:"Portfolio of UX and product design projects by Zack MacTavish.",url:`${p}/projects/ux`,image:`${p}/assets/Giga—mockup.jpg`,keywords:["ux","product design"]},"access-direct":{title:"Access Direct — UX & Brand | Zack MacTavish",description:"Case study: Access Direct — brand, UX and website built by Zack MacTavish.",url:`${p}/projects/access-direct`,image:`${p}/assets/AD—Macs.jpg`,datePublished:"2022-10-01",keywords:["access direct","ux","brand"]},"graphic-design":{title:"Graphic Design — Portfolio | Zack MacTavish",description:"Graphic design and art pieces by Zack MacTavish, including posters, packaging, and editorial work.",url:`${p}/projects/graphic-design`,image:`${p}/assets/Cover.png`,keywords:["graphic design","posters","packaging"]},threepillars:{title:"ThreePillars — UX & Branding | Zack MacTavish",description:"Case study: ThreePillars — brand and web app design by Zack MacTavish.",url:`${p}/projects/threepillars`,image:`${p}/assets/ThreePillars—Macbook.png`,keywords:["threepillars","branding","ux"]},microsoft:{title:"Microsoft — Project | Zack MacTavish",description:"Case study: Microsoft — UX and visual design work by Zack MacTavish. Password protected.",url:`${p}/projects/microsoft`,image:y.defaultImage,keywords:["microsoft","branding","ux","password protected"]}};var be={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},ge=L.createContext&&L.createContext(be),ze=["attr","size","title"];function Me(e,i){if(e==null)return{};var r=Te(e,i),a,s;if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(s=0;s<d.length;s++)a=d[s],!(i.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function Te(e,i){if(e==null)return{};var r={};for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){if(i.indexOf(a)>=0)continue;r[a]=e[a]}return r}function I(){return I=Object.assign?Object.assign.bind():function(e){for(var i=1;i<arguments.length;i++){var r=arguments[i];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},I.apply(this,arguments)}function ue(e,i){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);i&&(a=a.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),r.push.apply(r,a)}return r}function _(e){for(var i=1;i<arguments.length;i++){var r=arguments[i]!=null?arguments[i]:{};i%2?ue(Object(r),!0).forEach(function(a){Oe(e,a,r[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ue(Object(r)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))})}return e}function Oe(e,i,r){return i=We(i),i in e?Object.defineProperty(e,i,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[i]=r,e}function We(e){var i=Ge(e,"string");return typeof i=="symbol"?i:i+""}function Ge(e,i){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var a=r.call(e,i);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(e)}function ve(e){return e&&e.map((i,r)=>L.createElement(i.tag,_({key:r},i.attr),ve(i.child)))}function ye(e){return i=>L.createElement(Ee,I({attr:_({},e.attr)},i),ve(e.child))}function Ee(e){var i=r=>{var{attr:a,size:s,title:d}=e,u=Me(e,ze),c=s||r.size||"1em",m;return r.className&&(m=r.className),e.className&&(m=(m?m+" ":"")+e.className),L.createElement("svg",I({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,a,u,{className:m,style:_(_({color:e.color||r.color},r.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),d&&L.createElement("title",null,d),e.children)};return ge!==void 0?L.createElement(ge.Consumer,null,r=>i(r)):i(be)}function Be(e){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"7",y1:"17",x2:"17",y2:"7"},child:[]},{tag:"polyline",attr:{points:"7 7 17 7 17 17"},child:[]}]})(e)}function mi(e){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M7 11V7a5 5 0 0 1 10 0v4"},child:[]}]})(e)}const Ie=o.div`
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
`,_e=o.div`
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
`,Ze=o.div`
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  gap: 0.5em;
  height: 100%;
`,Fe=o.div`
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
`,we=o.img`
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
`;function je({title:e,imageBaseName:i,imageSrc:r,imageExt:a="png",imageAlt:s="",$imageWidth:d="38vw",buttons:u=[],divider:c=!0}){return t.jsxs(_e,{children:[t.jsxs(Ze,{children:[t.jsx(Ae,{style:{fontSize:"2.8rem",marginBottom:"0.1em"},children:e}),c&&t.jsx("div",{style:{height:"1px",background:"#e0e0e0",width:"48px",margin:"0.1em 0 0.3em 0"}}),t.jsx(Ie,{children:u.map(({href:m,label:j},k)=>t.jsxs(ke,{href:m,target:"_blank",rel:"noopener noreferrer",children:[j," ",t.jsx(Be,{style:{marginLeft:6,fontSize:"1.2em"}})]},k))})]}),t.jsx(Fe,{children:i?t.jsxs("picture",{children:[t.jsx("source",{srcSet:`${i.startsWith("assets/")?"/":"/src/"}${i}.avif`,type:"image/avif"}),t.jsx("source",{srcSet:`${i.startsWith("assets/")?"/":"/src/"}${i}.webp`,type:"image/webp"}),t.jsx(we,{src:`${i.startsWith("assets/")?"/":"/src/"}${i}.${a}`,alt:s,$imageWidth:d})]}):t.jsx(we,{src:r,alt:s,$imageWidth:d})})]})}const Ne=""+new URL("iphones—Mockup-Bvav94lR.avif",import.meta.url).href,Xe=""+new URL("iphones—Mockup-BBerJEYg.webp",import.meta.url).href,qe=""+new URL("iphones—Mockup-huIJePT7.png",import.meta.url).href,He=""+new URL("Giga—mockup-Cnh_KW7P.jpg",import.meta.url).href,Je=""+new URL("Messages—1920 x 1400-FBHNown_.png",import.meta.url).href,Ke=""+new URL("Messages—1920 x 1400-Vn-3sQrl.avif",import.meta.url).href,Qe=""+new URL("Messages—1920 x 1400-Df8RyXSi.webp",import.meta.url).href,Ve=""+new URL("iMac_2-ByB4ft45.jpg",import.meta.url).href,Ye=""+new URL("iPad2-7y6oKxfc.jpg",import.meta.url).href,et=""+new URL("iPad2-CzLEDSAu.avif",import.meta.url).href,tt=""+new URL("iPad2-C6zybvis.webp",import.meta.url).href,it=""+new URL("iPhone_2—Dark—Sq-CMwx-i__.jpg",import.meta.url).href,rt=""+new URL("iPhone_2—Dark—Sq-o8OVfniw.avif",import.meta.url).href,at=""+new URL("iPhone_2—Dark—Sq-CN0kweFU.webp",import.meta.url).href,nt=""+new URL("LightPhone2—Sq-BQ4v3uUl.jpg",import.meta.url).href,ot=""+new URL("LightPhone2—Sq-BAf3JCmK.avif",import.meta.url).href,st=""+new URL("LightPhone2—Sq-BILeUpsy.webp",import.meta.url).href,ct=""+new URL("iMac-BBUHxs4x.jpg",import.meta.url).href,dt=""+new URL("iMac-D7y2uSFv.avif",import.meta.url).href,lt=""+new URL("iMac-Cm5Zrfme.webp",import.meta.url).href,mt=""+new URL("About-DuQLmo8y.png",import.meta.url).href,ht=""+new URL("About-DLK3SCR5.avif",import.meta.url).href,pt=""+new URL("About-Cx6Nw1aR.webp",import.meta.url).href,gt=""+new URL("Guides-CQbHOjad.jpg",import.meta.url).href,ut=""+new URL("Guides-6vl73ahM.avif",import.meta.url).href,wt=""+new URL("Guides-sAG3dRfa.webp",import.meta.url).href,ft=""+new URL("CreateNewPost-CaFWZEze.png",import.meta.url).href,xt=""+new URL("CreateNewPost-DFUk0sow.avif",import.meta.url).href,bt=""+new URL("CreateNewPost-DIIwIC2x.webp",import.meta.url).href,ke=o.a`
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
`,H=o.div`
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
`,J=o.div`
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
`,A=o.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`,P=o.h3`
  color: ${e=>e.theme.fontColor};
  font-size: 2.25rem;
  margin: 0;

  @media (max-width: 1320px) {
    font-size: 2.1rem;
  }

  @media (max-width: 850px) {
    font-size: 1.8rem;
  }
`,R=o.h6`
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
`,vt=o.img`
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
`,yt=o.h3`
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
`,jt=o.img.attrs({loading:"lazy",decoding:"async"})`
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
`,kt=o.div`
width: 100vw;
background-color: #2CA0FD;
grid-row-start: 4;
grid-row-end: 9;
z-index: -5;
`,K=o.div`
background-color: ${e=>e.theme.backgroundTwo};
`,At=o.div`
display: flex;
width: 100vw;
height: auto;

@media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    height: auto;
}
`,Pt=o.div`
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
`,Rt=o.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  max-width: 600px;

  @media (max-width: 1000px) {
    align-items: center;    /* centers the block horizontally */
    text-align: left;       /* keeps text left-aligned inside */
    margin-bottom: 2vh;     /* spacing below the text before image */
  }
`,Ut=o.img`
  width: ${e=>e.Width};
  height: auto;

  @media (max-width: 1000px) {
    width: 80vw; /* image slightly bigger on vertical stack */
  }
`,Ae=o.h2`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 4.5rem;
  color: ${e=>e.theme.fontColor};
  margin: 0;

  @media (max-width: 850px) {
    font-size: 3rem;
  }
`,Ct=o.a`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.4rem;
  color: ${e=>e.theme.fontColor};
  text-decoration: none;
  margin-top: 1vh;

  &:hover {
    opacity: 0.75;
  }
`;function Lt(){return q.useLayoutEffect(()=>{window.scrollTo(0,0)}),t.jsxs(K,{children:[t.jsx(xe,{...w.giga,sameAs:y.sameAs,keywords:w.giga.keywords,jsonLd:{"@context":"https://schema.org","@type":"CreativeWork",headline:w.giga.title,description:w.giga.description,image:w.giga.image,author:{"@type":"Person",name:y.name,url:`${y.url}/about`},url:w.giga.url,datePublished:w.giga.datePublished,keywords:w.giga.keywords}}),t.jsx(je,{title:"Giga",imageBaseName:"assets/Giga—Macbookv2",imageExt:"png",imageAlt:"Giga Macbook Mockup",imageWidth:"38vw",buttons:[{href:"https://gigaintelligence.com",label:"Visit Giga"}]}),t.jsx(H,{children:t.jsxs(J,{children:[t.jsxs(A,{children:[t.jsx(P,{children:"Project Type"}),t.jsx(R,{children:"UX/UI, Branding, Strategy"})]}),t.jsxs(A,{children:[t.jsx(P,{children:"Digital Product"}),t.jsx(R,{children:"Digital strategy platform used for data management, and private channel creation"})]}),t.jsxs(A,{children:[t.jsx(P,{children:"My Role"}),t.jsx(R,{children:"Responsible for researching, ideating, and generating ideas for a cohesive Giga experience. Designed and prototyped the Giga system & Web App"})]}),t.jsxs(A,{children:[t.jsx(P,{children:"Timeframe"}),t.jsx(R,{children:"1 1/2 years"})]})]})}),t.jsx(S,{src:Ne,webp:Xe,fallback:qe,style:{width:"100vw",maxWidth:"100vw",height:"auto",objectFit:"cover",display:"block",margin:0,padding:0,borderRadius:0}}),t.jsx(O,{style:{backgroundColor:"#ffffff"},children:t.jsx(T,{children:t.jsx(M,{style:{color:"#5D5D5D"},children:"Giga is a startup focused on sharing experiences between its users. Through a robust data management system, users can share information and learn about their favorite subjects"})})}),t.jsx(S,{src:He}),t.jsx(b,{children:t.jsx(x,{src:Je,avif:Ke,webp:Qe})}),t.jsx(b,{children:t.jsx(x,{src:ft,avif:xt,webp:bt})}),t.jsx(S,{src:Ve}),t.jsx(b,{children:t.jsx(x,{src:Ye,avif:et,webp:tt})}),t.jsx(Q,{srcLeft:it,avifLeft:rt,webpLeft:at,srcRight:nt,avifRight:ot,webpRight:st}),t.jsx(b,{children:t.jsx(x,{src:ct,avif:dt,webp:lt})}),t.jsx(b,{style:{paddingBottom:"7vh"},children:t.jsx(x,{src:mt,avif:ht,webp:pt})}),t.jsx(b,{style:{justifyContent:"center"},children:t.jsx(x,{src:gt,avif:ut,webp:wt})}),t.jsx(O,{style:{backgroundColor:"black"},children:t.jsx(T,{children:t.jsxs(M,{style:{color:"white",textAlign:"center"},children:["Founder — Rich Devlin",t.jsx("br",{}),"Lead Designer — Zachary MacTavish",t.jsx("br",{}),"Front-End Development — Xing Yi & Joel Fernando",t.jsx("br",{}),"Back-End Development — Rich Devlin"]})})})]})}const hi=Object.freeze(Object.defineProperty({__proto__:null,BackgroundColor:kt,Cellphones:At,GigaRocket:vt,ProjectBlock:A,ProjectButton:ke,ProjectContent:Rt,ProjectDetails:J,ProjectDetailsContainer:H,ProjectGrid:Pt,ProjectHeader:P,ProjectImage:Ut,ProjectLink:Ct,ProjectSubtitle:R,ProjectTitle:Ae,RisoItemtwo:jt,StyledDiv:K,TextSection:yt,default:Lt},Symbol.toStringTag,{value:"Module"})),St=""+new URL("Highpower-CRTc0nnX.jpg",import.meta.url).href,Dt=""+new URL("Highpower-CsvHkKEI.avif",import.meta.url).href,$t=""+new URL("Highpower-boH7bfqj.webp",import.meta.url).href,zt=""+new URL("AD—iphones-Ds9NHmDv.jpg",import.meta.url).href,Mt=""+new URL("AD—iphones-BiYAAO7N.avif",import.meta.url).href,Tt=""+new URL("AD—iphones-DGO6M8H3.webp",import.meta.url).href,Ot=""+new URL("AD—pages-DKeMWlEm.jpg",import.meta.url).href,Wt=""+new URL("AD—pages-BS_f5aWS.avif",import.meta.url).href,Gt=""+new URL("AD—pages-sKiLGjS1.webp",import.meta.url).href,Et=""+new URL("AD—Macs-C-BI5_ml.jpg",import.meta.url).href,Bt=""+new URL("AD—Macs-CXf9hZaT.avif",import.meta.url).href,It=""+new URL("AD—Macs--XjCyU3R.webp",import.meta.url).href,_t=""+new URL("AD-ipad-7WzgOi0E.jpg",import.meta.url).href,Zt=""+new URL("AD-ipad-CUp8F2b6.avif",import.meta.url).href,Ft=""+new URL("AD-ipad-B7-837tt.webp",import.meta.url).href,Nt=""+new URL("ADiPhone_2—Dark-BP_0B_M9.jpg",import.meta.url).href,Xt=""+new URL("ADLightPhone2-C7enY0US.jpg",import.meta.url).href,qt=""+new URL("ADiMac-Bsrxdz-Q.png",import.meta.url).href,Ht=""+new URL("ADiMac-DlvZlRIn.avif",import.meta.url).href,Jt=""+new URL("ADiMac-CKTwTd3P.webp",import.meta.url).href,Kt=""+new URL("Group 375-vcp1kghj.png",import.meta.url).href,Qt=""+new URL("Group 375-mZsO1BcE.avif",import.meta.url).href,Vt=""+new URL("Group 375-TF0Alkqk.webp",import.meta.url).href,Yt=""+new URL("Guides2-C--leQ0V.png",import.meta.url).href,ei=""+new URL("Guides2-DiNUbQbr.avif",import.meta.url).href,ti=""+new URL("Guides2-DIlDKfWv.webp",import.meta.url).href,ii=""+new URL("Group 274-k1yUScXs.png",import.meta.url).href,ri=""+new URL("Group 274-CN_qORPC.avif",import.meta.url).href,ai=""+new URL("Group 274-CPP1pgPP.webp",import.meta.url).href,S=({src:e,avif:i,webp:r,alt:a="",style:s={}})=>(typeof e=="string"&&e.split("/").pop().replace(/\.[^.]+$/,""),t.jsxs("picture",{children:[i&&t.jsx("source",{srcSet:i,type:"image/avif"}),r&&t.jsx("source",{srcSet:r,type:"image/webp"}),t.jsx("img",{src:e,alt:a,style:{width:"100vw",height:"auto",margin:"3vh auto",display:"block",backgroundColor:"white",...s},loading:"lazy",decoding:"async"})]})),ni=o.div`
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
`,M=o.p`
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
`,T=o.div`
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
`,O=o.section`
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
`,x=({src:e,avif:i,webp:r,alt:a="",width:s="60vw",style:d={}})=>{typeof e=="string"&&e.split("/").pop().replace(/\.[^.]+$/,"");const u={width:s,maxWidth:"1000px",height:"auto",display:"block",borderRadius:"24px",boxShadow:"0 2px 12px 0 rgba(0,0,0,0.06)",...d};return t.jsxs("picture",{children:[i&&t.jsx("source",{srcSet:i,type:"image/avif"}),r&&t.jsx("source",{srcSet:r,type:"image/webp"}),t.jsx("style",{children:".single-image-responsive { @media (max-width: 1320px) { width: 90vw !important; max-width: 90vw !important; } @media (max-width: 850px) { width: 100vw !important; max-width: 100vw !important; border-radius: 0 !important; } }"}),t.jsx("img",{src:e,alt:a,className:"single-image-responsive",style:u,loading:"lazy",decoding:"async"})]})},b=o.div`
  display: flex;
  justify-content: center;
  background-color: ${e=>e.theme.backgroundTwo};
  align-items: center;
  height: auto;
  padding: 3vh 0;
  width: 100vw;
`,oi=o.div`
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
`,Q=({srcLeft:e,srcRight:i,altLeft:r="",altRight:a="",styleLeft:s={},styleRight:d={}})=>t.jsxs("div",{style:{display:"flex",width:"100vw",height:"auto",flexWrap:"wrap",margin:0,padding:0},children:[t.jsx("img",{src:e,alt:r,style:{width:"50vw",height:"auto",display:"block",borderRadius:0,boxShadow:"none",margin:0,padding:0,...s},loading:"lazy",decoding:"async"}),t.jsx("img",{src:i,alt:a,style:{width:"50vw",height:"auto",display:"block",borderRadius:0,boxShadow:"none",margin:0,padding:0,...d},loading:"lazy",decoding:"async"})]});function si(){return q.useEffect(()=>{window.scrollTo(0,0)},[]),t.jsxs(K,{children:[t.jsx(xe,{...w["access-direct"],sameAs:y.sameAs,keywords:w["access-direct"].keywords,jsonLd:{"@context":"https://schema.org","@type":"CreativeWork",headline:w["access-direct"].title,description:w["access-direct"].description,image:w["access-direct"].image,author:{"@type":"Person",name:y.name,url:`${y.url}/about`},url:w["access-direct"].url,datePublished:w["access-direct"].datePublished,keywords:w["access-direct"].keywords}}),t.jsx(je,{title:"Access Direct",imageBaseName:"assets/AD—Macbook",imageExt:"png",imageAlt:"Access Direct Macbook Mockup",imageWidth:"38vw",buttons:[{href:"https://accessdirect.com",label:"Visit Access Direct"}]}),t.jsx(H,{children:t.jsxs(J,{children:[t.jsxs(A,{children:[t.jsx(P,{children:"Project Type"}),t.jsx(R,{children:"UX/UI, Branding, Strategy, Front-end development"})]}),t.jsxs(A,{children:[t.jsx(P,{children:"Product"}),t.jsx(R,{children:"Brand identity, print materials, and a website built with React.js"})]}),t.jsxs(A,{children:[t.jsx(P,{children:"My Role"}),t.jsx(R,{children:"Responsible for tidying up the brand logo, colors, creating print materials for tradeshows, social media, digital brochures and flyers, and building the company website"})]}),t.jsxs(A,{children:[t.jsx(P,{children:"Timeframe"}),t.jsx(R,{children:"4 years (Part-time)"})]})]})}),t.jsx(S,{src:zt,avif:Mt,webp:Tt,style:{backgroundColor:"white",width:"100vw",maxWidth:"100vw",height:"auto",objectFit:"cover",display:"block",margin:0,padding:0,borderRadius:0}}),t.jsx(O,{style:{backgroundColor:"white"},children:t.jsx(T,{children:t.jsx(M,{style:{color:"#5d5d5d"},children:"Access Direct is a company focused on security solutions. I collaborated closely on the project, working on their brand identity, logos, and website. I served as the UI Designer and Webmaster, redesigning the site and building it using React.js."})})}),t.jsx(S,{src:Ot,avif:Wt,webp:Gt,style:{backgroundColor:"white",width:"100vw",maxWidth:"100vw",borderRadius:0,margin:"0 auto"}}),t.jsx(b,{children:t.jsx(x,{src:St,avif:Dt,webp:$t})}),t.jsx(b,{children:t.jsx(x,{src:ii,avif:ri,webp:ai})}),t.jsx(S,{src:Et,avif:Bt,webp:It,style:{backgroundColor:"white",width:"100vw",maxWidth:"100vw",borderRadius:0,margin:"0 auto"}}),t.jsx(b,{children:t.jsx(x,{src:_t,avif:Zt,webp:Ft})}),t.jsx(Q,{srcLeft:Nt,srcRight:Xt,altLeft:"AD iPhone 2 Dark",altRight:"AD Light Phone 2",styleLeft:{},styleRight:{}}),t.jsx(b,{children:t.jsx(x,{src:qt,avif:Ht,webp:Jt})}),t.jsx(b,{children:t.jsx(x,{src:Kt,avif:Qt,webp:Vt})}),t.jsx(b,{children:t.jsx(x,{src:Yt,avif:ei,webp:ti})}),t.jsx(O,{style:{backgroundColor:"black"},children:t.jsx(T,{children:t.jsxs(M,{style:{color:"white",textAlign:"center"},children:["Founder — David Smith",t.jsx("br",{}),"Lead Designer — Zachary MacTavish",t.jsx("br",{}),"Website Development — Zachary MacTavish",t.jsx("br",{}),"Content Direction — Wendy Majewski, Alek Vasic"]})})})]})}const pi=Object.freeze(Object.defineProperty({__proto__:null,DoubleImage:Q,FullBg:S,FullHeightTextSection:O,ParagraphFour:ni,RisoFlex:b,SingleGrid:oi,SingleImage:x,TextContainer:T,TextContent:M,default:si},Symbol.toStringTag,{value:"Module"}));export{pi as A,At as C,Q as D,O as F,hi as G,Ae as P,b as R,K as S,T,M as a,li as b,S as c,x as d,ni as e,je as f,H as g,J as h,A as i,P as j,R as k,jt as l,mi as m,w as p,y as s,xe as y};
