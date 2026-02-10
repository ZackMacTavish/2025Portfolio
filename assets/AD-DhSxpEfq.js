import{j as e}from"./three-DiqYTQvC.js";import{b as _,R as $,c as a}from"./vendor-DvgG4lPf.js";const s="https://mactavish.xyz",g={name:"Zack MacTavish",url:s,defaultImage:`${s}/assets/og/website-logoresolutions-1200x630.png`,sameAs:["https://dribbble.com/Zmactavish","https://www.instagram.com/zackmichaelmactavish","https://www.linkedin.com/in/zacharymactavish/","https://github.com/ZackMacTavish","https://medium.com/@zmactavish"],keywords:["product design","graphic design","UX","portfolio","Zack MacTavish"],ogImages:[{url:`${s}/assets/og/website-logoresolutions-1200x630.png`,width:1200,height:630},{url:`${s}/assets/og/website-logoresolutions-600x315.png`,width:600,height:315},{url:`${s}/assets/og/website-logoresolutions-high-res.png`,width:2400,height:1260}],squareLogo:`${s}/assets/og/website-logoresolutions-square-logo-1200px.png`,favicons:{"16x16":`${s}/assets/og/website-logoresolutions-16px.png`,"32x32":`${s}/assets/og/website-logoresolutions-32px.png`,"180x180":`${s}/assets/og/website-logoresolutions-180px.png`,"192x192":`${s}/assets/og/website-logoresolutions-192px.png`,"512x512":`${s}/assets/og/website-logoresolutions-512px.png`}},h={landing:{title:`${g.name} — Product & Graphic Designer`,description:"Product & graphic designer focused on brand, UX, and digital experiences. View work and contact.",url:`${s}/`,image:g.defaultImage,keywords:["portfolio","home","design","Zack MacTavish"]},about:{title:`About — ${g.name}`,description:"About Zack MacTavish — product & graphic designer. Learn about my background, work, and exhibitions.",url:`${s}/about`,image:g.defaultImage,keywords:["about","bio","background"]},giga:{title:"Giga — UX/UI & Branding | Zack MacTavish",description:"Case study: Giga — UX/UI, branding, and product design by Zack MacTavish.",url:`${s}/projects/giga`,image:`${s}/assets/Giga—Macbookv2.png`,datePublished:"2024-10-01",keywords:["giga","product design","ux","branding"]},outsource:{title:"Outsource — UX/UI & Branding | Zack MacTavish",description:"Case study: Outsource — branding, websites and UX work by Zack MacTavish.",url:`${s}/projects/outsource`,image:`${s}/assets/Outsource—Macbook.png`,datePublished:"2023-08-01",keywords:["outsource","branding","ux"]},piton:{title:"Piton — Project | Zack MacTavish",description:"Case study: Piton — UX and visual design work by Zack MacTavish.",url:`${s}/projects/piton`,image:`${s}/assets/Piton—Screens.jpg`,datePublished:"2023-02-01",keywords:["piton","branding","app design"]},ux:{title:"UX — Product & UX Projects | Zack MacTavish",description:"Portfolio of UX and product design projects by Zack MacTavish.",url:`${s}/projects/ux`,image:`${s}/assets/Giga—mockup.jpg`,keywords:["ux","product design"]},"access-direct":{title:"Access Direct — UX & Brand | Zack MacTavish",description:"Case study: Access Direct — brand, UX and website built by Zack MacTavish.",url:`${s}/projects/access-direct`,image:`${s}/assets/AD—Macs.jpg`,datePublished:"2022-10-01",keywords:["access direct","ux","brand"]},"graphic-design":{title:"Graphic Design — Portfolio | Zack MacTavish",description:"Graphic design and art pieces by Zack MacTavish, including posters, packaging, and editorial work.",url:`${s}/projects/graphic-design`,image:`${s}/assets/Cover.png`,keywords:["graphic design","posters","packaging"]},threepillars:{title:"ThreePillars — UX & Branding | Zack MacTavish",description:"Case study: ThreePillars — brand and web app design by Zack MacTavish.",url:`${s}/projects/threepillars`,image:`${s}/assets/ThreePillars—Macbook.png`,keywords:["threepillars","branding","ux"]},microsoft:{title:"Microsoft — Project | Zack MacTavish",description:"Case study: Microsoft — UX and visual design work by Zack MacTavish. Password protected.",url:`${s}/projects/microsoft`,image:g.defaultImage,keywords:["microsoft","branding","ux","password protected"]}},Q=({title:t,description:i,url:r,image:o,images:u=null,type:b="website",authorName:v="Zack MacTavish",authorAlternateNames:d=["Zachary MacTavish"],sameAs:l=[],keywords:T=[],jsonLd:U=null,favicons:oe=null})=>(_.useEffect(()=>{t&&(document.title=t);const m=(n,c,w)=>{let p=document.querySelector(n);if(!p){p=document.createElement("meta");const Z=n.match(/\[(name|property)=['"]([^'"]+)['"]\]/);Z&&p.setAttribute(Z[1],Z[2]),document.head.appendChild(p)}p.setAttribute(c,w)};i&&(m("[name='description']","content",i),m("[property='og:description']","content",i),m("[name='twitter:description']","content",i)),T&&T.length&&m("[name='keywords']","content",Array.isArray(T)?T.join(", "):T),t&&(m("[property='og:title']","content",t),m("[name='twitter:title']","content",t)),m("[property='og:type']","content",b),r&&m("[property='og:url']","content",r);const ne=g&&g.ogImages||[],G=u||(o?[o]:null)||ne,I=n=>{document.querySelectorAll(n).forEach(c=>c.remove())};I("meta[property='og:image']"),I("meta[property='og:image:width']"),I("meta[property='og:image:height']");let M=null;if(G&&G.length?G.forEach(n=>{let c=n;if(typeof n=="string"&&(c={url:n}),!c||!c.url)return;const w=document.createElement("meta");if(w.setAttribute("property","og:image"),w.setAttribute("content",c.url),document.head.appendChild(w),c.width){const p=document.createElement("meta");p.setAttribute("property","og:image:width"),p.setAttribute("content",String(c.width)),document.head.appendChild(p)}if(c.height){const p=document.createElement("meta");p.setAttribute("property","og:image:height"),p.setAttribute("content",String(c.height)),document.head.appendChild(p)}M||(M=c.url)}):o&&(m("[property='og:image']","content",o),M=o),M?(m("[name='twitter:image']","content",M),m("[name='twitter:card']","content","summary_large_image")):m("[name='twitter:card']","content","summary"),r){let n=document.querySelector("link[rel='canonical']");n||(n=document.createElement("link"),n.setAttribute("rel","canonical"),document.head.appendChild(n)),n.setAttribute("href",r)}const K="seo-json-ld";let C=document.getElementById(K);const O={"@context":"https://schema.org","@type":"Person",name:v,url:r||window.location.href};d&&d.length&&(O.alternateName=d.length===1?d[0]:d),l&&l.length&&(O.sameAs=l);let D=U||O;if(!U)D=O;else try{const n=U;(n["@type"]==="CreativeWork"||n["@type"]==="Article")&&!n.author&&(n.author={"@type":"Person",name:v,url:r||window.location.href},d&&d.length&&(n.author.alternateName=d.length===1?d[0]:d),l&&l.length&&(n.author.sameAs=l)),D=n}catch{D=U}if(C?C.text=JSON.stringify(D):(C=document.createElement("script"),C.id=K,C.type="application/ld+json",C.text=JSON.stringify(D),document.head.appendChild(C)),v||d&&d.length){const n=[v].concat(d||[]).filter(Boolean).join(", ");m("[name='author']","content",n)}l&&l.length&&m("[name='sameAs']","content",l.join(", "));const A=oe||g&&g.favicons||null,W=n=>{document.querySelectorAll(`link[rel='${n}']`).forEach(c=>c.remove())};W("icon"),W("shortcut icon"),W("apple-touch-icon"),W("manifest"),A&&(Array.isArray(A)?A.forEach(n=>{const c=document.createElement("link");n.rel?c.setAttribute("rel",n.rel):c.setAttribute("rel",n.sizes==="180x180"?"apple-touch-icon":"icon"),n.sizes&&c.setAttribute("sizes",n.sizes),c.setAttribute("href",n.href),document.head.appendChild(c)}):Object.entries(A).forEach(([n,c])=>{const w=document.createElement("link");n==="180x180"?w.setAttribute("rel","apple-touch-icon"):w.setAttribute("rel","icon"),w.setAttribute("sizes",n),w.setAttribute("href",c),document.head.appendChild(w)}))},[t,i,r,o,b,v,d,l,T,U]),null);var Y={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},V=$.createContext&&$.createContext(Y),ae=["attr","size","title"];function se(t,i){if(t==null)return{};var r=ce(t,i),o,u;if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(t);for(u=0;u<b.length;u++)o=b[u],!(i.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(t,o)&&(r[o]=t[o])}return r}function ce(t,i){if(t==null)return{};var r={};for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){if(i.indexOf(o)>=0)continue;r[o]=t[o]}return r}function B(){return B=Object.assign?Object.assign.bind():function(t){for(var i=1;i<arguments.length;i++){var r=arguments[i];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},B.apply(this,arguments)}function J(t,i){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);i&&(o=o.filter(function(u){return Object.getOwnPropertyDescriptor(t,u).enumerable})),r.push.apply(r,o)}return r}function E(t){for(var i=1;i<arguments.length;i++){var r=arguments[i]!=null?arguments[i]:{};i%2?J(Object(r),!0).forEach(function(o){de(t,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):J(Object(r)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(r,o))})}return t}function de(t,i,r){return i=le(i),i in t?Object.defineProperty(t,i,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[i]=r,t}function le(t){var i=he(t,"string");return typeof i=="symbol"?i:i+""}function he(t,i){if(typeof t!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var o=r.call(t,i);if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(t)}function N(t){return t&&t.map((i,r)=>$.createElement(i.tag,E({key:r},i.attr),N(i.child)))}function ee(t){return i=>$.createElement(ge,B({attr:E({},t.attr)},i),N(t.child))}function ge(t){var i=r=>{var{attr:o,size:u,title:b}=t,v=se(t,ae),d=u||r.size||"1em",l;return r.className&&(l=r.className),t.className&&(l=(l?l+" ":"")+t.className),$.createElement("svg",B({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,o,v,{className:l,style:E(E({color:t.color||r.color},r.style),t.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),b&&$.createElement("title",null,b),t.children)};return V!==void 0?$.createElement(V.Consumer,null,r=>i(r)):i(Y)}function me(t){return ee({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"7",y1:"17",x2:"17",y2:"7"},child:[]},{tag:"polyline",attr:{points:"7 7 17 7 17 17"},child:[]}]})(t)}function ct(t){return ee({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M7 11V7a5 5 0 0 1 10 0v4"},child:[]}]})(t)}const pe=a.div`
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
`,ue=a.div`
  flex: 1.6 1 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  gap: 0.5em;
  height: 100%;
`,we=a.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: auto;
  max-width: none;
  @media (max-width: 1000px) {
    justify-content: center;
    width: 100%;
  }
`;function te({title:t,imageSrc:i,imageAlt:r="",imageWidth:o="38vw",buttons:u=[],divider:b=!0}){return e.jsxs(pe,{children:[e.jsxs(ue,{children:[e.jsx(re,{style:{fontSize:"2.8rem",marginBottom:"0.1em"},children:t}),b&&e.jsx("div",{style:{height:"1px",background:"#e0e0e0",width:"48px",margin:"0.1em 0 0.3em 0"}}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.3em 0.7em",marginBottom:"0.5em",maxWidth:"520px",width:"auto",alignItems:"center",justifyContent:"flex-start"},children:u.map(({href:v,label:d},l)=>e.jsxs(ie,{href:v,target:"_blank",rel:"noopener noreferrer",children:[d," ",e.jsx(me,{style:{marginLeft:6,fontSize:"1.2em"}})]},l))})]}),e.jsx(we,{children:e.jsx(fe,{src:i,alt:r,imageWidth:o})})]})}const fe=a.img`
  max-height: 600px;
  width: ${({imageWidth:t})=>t||"68vw"};
  min-width: 0;
  max-width: 100vw;
  height: auto;
  display: block;
  object-fit: contain;
`,xe=""+new URL("Giga—Macbookv2-CfLN1sRf.png",import.meta.url).href,be=""+new URL("iphones—Mockup-huIJePT7.png",import.meta.url).href,ve=""+new URL("Giga—mockup-Cnh_KW7P.jpg",import.meta.url).href,ye=""+new URL("Messages—1920 x 1400-FBHNown_.png",import.meta.url).href,je=""+new URL("iMac_2-ByB4ft45.jpg",import.meta.url).href,ke=""+new URL("iPad2-7y6oKxfc.jpg",import.meta.url).href,Pe=""+new URL("iPhone_2—Dark—Sq-CMwx-i__.jpg",import.meta.url).href,Ce=""+new URL("LightPhone2—Sq-BQ4v3uUl.jpg",import.meta.url).href,$e=""+new URL("iMac-BBUHxs4x.jpg",import.meta.url).href,Te=""+new URL("About-DuQLmo8y.png",import.meta.url).href,Ue=""+new URL("Photos1-BTmM1LpC.jpg",import.meta.url).href,Me=""+new URL("Photos2-BXosammk.jpg",import.meta.url).href,De=""+new URL("Photos3-Cwlh6lpi.jpg",import.meta.url).href,Se=""+new URL("Photos4-D5_iTpD0.jpg",import.meta.url).href,Re=""+new URL("Guides-CQbHOjad.jpg",import.meta.url).href,Le=""+new URL("CreateNewPost-CaFWZEze.png",import.meta.url).href,ie=a.a`
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
`,X=a.div`
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
`,F=a.div`
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
`,y=a.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,j=a.h3`
  color: ${t=>t.theme.fontColor};
  font-size: 2.5rem;
  margin: 0;

  @media (max-width: 1320px) {
    font-size: 2.3rem;
  }

  @media (max-width: 850px) {
    font-size: 2rem;
  }
`,k=a.h6`
  color: ${t=>t.theme.fontColor};
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
`,ze=a.img`
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
`,Oe=a.h3`
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
`,S=a.img.attrs({loading:"lazy",decoding:"async"})`
width: ${t=>t.Width};
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
`,Ae=a.div`
width: 100vw;
background-color: #2CA0FD;
grid-row-start: 4;
grid-row-end: 9;
z-index: -5;
`,q=a.div`
background-color: ${t=>t.theme.backgroundTwo};
`,H=a.div`
display: flex;
width: 100vw;
height: auto;

@media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    height: auto;
}
`,We=a.div`
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
`,Be=a.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  max-width: 600px;

  @media (max-width: 1000px) {
    align-items: center;    /* centers the block horizontally */
    text-align: left;       /* keeps text left-aligned inside */
    margin-bottom: 2vh;     /* spacing below the text before image */
  }
`,Ee=a.img`
  width: ${t=>t.Width};
  height: auto;

  @media (max-width: 1000px) {
    width: 80vw; /* image slightly bigger on vertical stack */
  }
`,re=a.h2`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 4.5rem;
  color: ${t=>t.theme.fontColor};
  margin: 0;

  @media (max-width: 850px) {
    font-size: 3rem;
  }
`,Ge=a.a`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.4rem;
  color: ${t=>t.theme.fontColor};
  text-decoration: none;
  margin-top: 1vh;

  &:hover {
    opacity: 0.75;
  }
`;function Ie(){return _.useLayoutEffect(()=>{window.scrollTo(0,0)}),e.jsxs(q,{children:[e.jsx(Q,{...h.giga,sameAs:g.sameAs,keywords:h.giga.keywords,jsonLd:{"@context":"https://schema.org","@type":"CreativeWork",headline:h.giga.title,description:h.giga.description,image:h.giga.image,author:{"@type":"Person",name:g.name,url:`${g.url}/about`},url:h.giga.url,datePublished:h.giga.datePublished,keywords:h.giga.keywords}}),e.jsx(te,{title:"Giga",imageSrc:xe,imageAlt:"Giga Macbook Mockup",imageWidth:"44vw",buttons:[{href:"https://gigaintelligence.com",label:"Visit Giga"}]}),e.jsx(X,{children:e.jsxs(F,{children:[e.jsxs(y,{children:[e.jsx(j,{children:"Project Type"}),e.jsx(k,{children:"UX/UI, Branding, Strategy"})]}),e.jsxs(y,{children:[e.jsx(j,{children:"Digital Product"}),e.jsx(k,{children:"Digital strategy platform used for data management, and private channel creation"})]}),e.jsxs(y,{children:[e.jsx(j,{children:"My Role"}),e.jsx(k,{children:"Responsible for researching, ideating, and generating ideas for a cohesive Giga experience. Designed and prototyped the Giga system & Web App"})]}),e.jsxs(y,{children:[e.jsx(j,{children:"Timeframe"}),e.jsx(k,{children:"1 1/2 years"})]})]})}),e.jsx(P,{src:be}),e.jsx(z,{style:{backgroundColor:"#ffffff"},children:e.jsx(L,{children:e.jsx(R,{style:{color:"#5D5D5D"},children:"Giga is a startup focused on sharing experiences between its users. Through a robust data management system, users can share information and learn about their favorite subjects"})})}),e.jsx(P,{src:ve}),e.jsx(x,{children:e.jsx(S,{src:ye,Width:"60vw"})}),e.jsx(x,{children:e.jsx(S,{src:Le,Width:"60vw"})}),e.jsx(P,{src:je}),e.jsx(x,{children:e.jsx(f,{src:ke,Width:"65vw"})}),e.jsxs(H,{children:[e.jsx(f,{Width:"50vw",src:Pe}),e.jsx(f,{Width:"50vw",src:Ce})]}),e.jsx(x,{children:e.jsx(f,{src:$e,Width:"65vw"})}),e.jsx(x,{style:{paddingBottom:"7vh"},children:e.jsx(f,{src:Te,Width:"65vw"})}),e.jsx("img",{src:Ue,alt:"",style:{width:"100%",height:"auto",display:"block"}}),e.jsx("img",{src:Me,alt:"",style:{width:"100%",height:"auto",display:"block"}}),e.jsx("img",{src:De,alt:"",style:{width:"100%",height:"auto",display:"block"}}),e.jsx("img",{src:Se,alt:"",style:{width:"100%",height:"auto",display:"block"}}),e.jsx(P,{src:Re}),e.jsx(z,{style:{backgroundColor:"black"},children:e.jsx(L,{children:e.jsxs(R,{style:{color:"white",textAlign:"center"},children:["Founder — Rich Devlin",e.jsx("br",{}),"Lead Designer — Zachary MacTavish",e.jsx("br",{}),"Front-End Development — Xing Yi & Joel Fernando",e.jsx("br",{}),"Back-End Development — Rich Devlin"]})})})]})}const dt=Object.freeze(Object.defineProperty({__proto__:null,BackgroundColor:Ae,Cellphones:H,GigaRocket:ze,ProjectBlock:y,ProjectButton:ie,ProjectContent:Be,ProjectDetails:F,ProjectDetailsContainer:X,ProjectGrid:We,ProjectHeader:j,ProjectImage:Ee,ProjectLink:Ge,ProjectSubtitle:k,ProjectTitle:re,RisoItemtwo:S,StyledDiv:q,TextSection:Oe,default:Ie},Symbol.toStringTag,{value:"Module"})),Ze=""+new URL("Highpower-CRTc0nnX.jpg",import.meta.url).href,_e=""+new URL("AD—iphones-Ds9NHmDv.jpg",import.meta.url).href,Xe=""+new URL("AD—pages-DKeMWlEm.jpg",import.meta.url).href,Fe=""+new URL("AD—Macs-C-BI5_ml.jpg",import.meta.url).href,qe=""+new URL("AD—Macbook-CFPkaWg5.png",import.meta.url).href,He=""+new URL("AD-ipad-7WzgOi0E.jpg",import.meta.url).href,Ke=""+new URL("iPhone_2—Dark-BP_0B_M9.jpg",import.meta.url).href,Ve=""+new URL("LightPhone2-C7enY0US.jpg",import.meta.url).href,Je=""+new URL("ADiMac-La2LUK1h.jpg",import.meta.url).href,Qe=""+new URL("Group 375-DGdrOhbV.jpg",import.meta.url).href,Ye=""+new URL("ADphotos1-BMN3iZjl.jpg",import.meta.url).href,Ne=""+new URL("ADphotos2-kBuZ2Ke7.jpg",import.meta.url).href,et=""+new URL("ADphotos3-DcIZQByP.jpg",import.meta.url).href,tt=""+new URL("Guides2-BTNWjuI4.jpg",import.meta.url).href,it=""+new URL("Group 274-DFJv41vH.jpg",import.meta.url).href,rt=a.div`
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
`,R=a.p`
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
`,L=a.div`
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
`,z=a.section`
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
`,f=a.img.attrs({loading:"lazy",decoding:"async"})`
  width: ${t=>t.Width};
  max-width: 1000px;
  height: auto;
  @media (max-width: 1000px) { width: 90vw; padding-top: 3vh; }
  @media (max-width: 450px) { padding-top: 5vh; padding-bottom: 5vh; }
`,x=a.div`
  display: flex;
  justify-content: center;
  background-color: ${t=>t.theme.backgroundTwo};
  align-items: center;
  height: auto;
  padding: 3vh 0;
  width: 100vw;
`,P=a.img.attrs({loading:"lazy",decoding:"async"})`
width: 100vw;
height: auto;
margin-top: -1vh;
background-size: contain;
background-color: ${t=>t.theme.backgroundTwo};

@media(max-width: 830px) {
    padding-top: 3vh;
}
`,ot=a.div`
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
`;function nt(){return _.useEffect(()=>{window.scrollTo(0,0)},[]),e.jsxs(q,{children:[e.jsx(Q,{...h["access-direct"],sameAs:g.sameAs,keywords:h["access-direct"].keywords,jsonLd:{"@context":"https://schema.org","@type":"CreativeWork",headline:h["access-direct"].title,description:h["access-direct"].description,image:h["access-direct"].image,author:{"@type":"Person",name:g.name,url:`${g.url}/about`},url:h["access-direct"].url,datePublished:h["access-direct"].datePublished,keywords:h["access-direct"].keywords}}),e.jsx(te,{title:"Access Direct",imageSrc:qe,imageAlt:"Access Direct Macbook Mockup",imageWidth:"44vw",buttons:[{href:"https://accessdirect.com",label:"Visit Access Direct"}]}),e.jsx(X,{children:e.jsxs(F,{children:[e.jsxs(y,{children:[e.jsx(j,{children:"Project Type"}),e.jsx(k,{children:"UX/UI, Branding, Strategy, Front-end development"})]}),e.jsxs(y,{children:[e.jsx(j,{children:"Product"}),e.jsx(k,{children:"Brand identity, print materials, and a website built with React.js"})]}),e.jsxs(y,{children:[e.jsx(j,{children:"My Role"}),e.jsx(k,{children:"Responsible for tidying up the brand logo, colors, creating print materials for tradeshows, social media, digital brochures and flyers, and building the company website"})]}),e.jsxs(y,{children:[e.jsx(j,{children:"Timeframe"}),e.jsx(k,{children:"4 years (Part-time)"})]})]})}),e.jsx(P,{src:_e,style:{backgroundColor:"white"}}),e.jsx(z,{style:{backgroundColor:"white"},children:e.jsx(L,{children:e.jsx(R,{style:{color:"#5d5d5d"},children:"Access Direct is a company focused on security solutions. I collaborated closely on the project, working on their brand identity, logos, and website. I served as the UI Designer and Webmaster, redesigning the site and building it using React.js."})})}),e.jsx(P,{src:Xe,style:{backgroundColor:"white"}}),e.jsx(x,{children:e.jsx(S,{src:Ze,Width:"60vw"})}),e.jsx(x,{children:e.jsx(S,{src:it,Width:"60vw",style:{marginBottom:"3vh"}})}),e.jsx(P,{src:Fe,style:{backgroundColor:"white"}}),e.jsx(x,{children:e.jsx(f,{src:He,Width:"65vw"})}),e.jsxs(H,{children:[e.jsx(f,{Width:"50vw",src:Ke}),e.jsx(f,{Width:"50vw",src:Ve})]}),e.jsx(x,{children:e.jsx(f,{src:Je,Width:"65vw"})}),e.jsx(x,{style:{marginBottom:"5vh"},children:e.jsx(f,{src:Qe,Width:"65vw",style:{boxShadow:"5px 10px 24px rgba(0, 0, 0, 0.1)"}})}),e.jsx("img",{src:et,alt:"",style:{width:"100%",height:"auto",display:"block",backgroundColor:"white"}}),e.jsx("img",{src:Ne,alt:"",style:{width:"100%",height:"auto",display:"block",backgroundColor:"white"}}),e.jsx("img",{src:Ye,alt:"",style:{width:"100%",height:"auto",display:"block",backgroundColor:"white"}}),e.jsx("img",{src:tt,alt:"",style:{width:"100%",height:"auto",display:"block",backgroundColor:"white"}}),e.jsx(z,{style:{backgroundColor:"black"},children:e.jsx(L,{children:e.jsxs(R,{style:{color:"white",textAlign:"center"},children:["Founder — David Smith",e.jsx("br",{}),"Lead Designer — Zachary MacTavish",e.jsx("br",{}),"Website Development — Zachary MacTavish",e.jsx("br",{}),"Content Direction — Wendy Majewski, Alek Vasic"]})})})]})}const lt=Object.freeze(Object.defineProperty({__proto__:null,FullBg:P,FullHeightTextSection:z,ParagraphFour:rt,RisoFlex:x,RisoItem:f,SingleGrid:ot,TextContainer:L,TextContent:R,default:nt},Symbol.toStringTag,{value:"Module"}));export{lt as A,Ae as B,H as C,z as F,ze as G,te as P,x as R,q as S,L as T,Q as a,R as b,P as c,rt as d,S as e,f,X as g,F as h,y as i,j,k,ct as l,dt as m,h as p,g as s};
