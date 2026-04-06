import{j as e}from"./three-D9NkSzoP.js";import{b as X,c as r,u as he}from"./vendor-D7aqownG.js";import{b as fe}from"./index-OWNjQ_yi.js";const pe=({title:t,description:a,url:o,image:l,images:c=null,type:m="website",authorName:u="Zack MacTavish",authorAlternateNames:n=["Zachary MacTavish"],sameAs:w=[],keywords:y=[],jsonLd:j=null,favicons:G=null,siteDefaults:p=null,siteName:J=null,locale:K=null,robots:Q=null,themeColor:V=null,twitterSite:Y=null,twitterCreator:ee=null})=>(X.useEffect(()=>{t&&(document.title=t);const d=(i,s,v)=>{let x=document.querySelector(i);if(!x){x=document.createElement("meta");const _=i.match(/\[(name|property)=['"]([^'"]+)['"]\]/);_&&x.setAttribute(_[1],_[2]),document.head.appendChild(x)}x.setAttribute(s,v)};a&&(d("[name='description']","content",a),d("[property='og:description']","content",a),d("[name='twitter:description']","content",a)),y&&y.length&&d("[name='keywords']","content",Array.isArray(y)?y.join(", "):y),t&&(d("[property='og:title']","content",t),d("[name='twitter:title']","content",t)),d("[property='og:type']","content",m),o&&d("[property='og:url']","content",o);const te=J||p&&p.siteName||null,ie=K||p&&p.locale||null,re=Q||p&&p.robots||null,ae=V||p&&p.themeColor||null,oe=Y||p&&p.twitterSite||null,ne=ee||p&&p.twitterCreator||null;te&&d("[property='og:site_name']","content",te),ie&&d("[property='og:locale']","content",ie),re&&d("[name='robots']","content",re),ae&&d("[name='theme-color']","content",ae),oe&&d("[name='twitter:site']","content",oe),ne&&d("[name='twitter:creator']","content",ne);const xe=p&&p.ogImages||[],Z=c||(l?[l]:null)||xe,I=i=>{document.querySelectorAll(i).forEach(s=>s.remove())};I("meta[property='og:image']"),I("meta[property='og:image:width']"),I("meta[property='og:image:height']");let P=null;if(Z&&Z.length?Z.forEach(i=>{let s=i;if(typeof i=="string"&&(s={url:i}),!s||!s.url)return;const v=document.createElement("meta");if(v.setAttribute("property","og:image"),v.setAttribute("content",s.url),document.head.appendChild(v),s.width){const x=document.createElement("meta");x.setAttribute("property","og:image:width"),x.setAttribute("content",String(s.width)),document.head.appendChild(x)}if(s.height){const x=document.createElement("meta");x.setAttribute("property","og:image:height"),x.setAttribute("content",String(s.height)),document.head.appendChild(x)}P||(P=s.url)}):l&&(d("[property='og:image']","content",l),P=l),P?(d("[name='twitter:image']","content",P),d("[name='twitter:card']","content","summary_large_image")):d("[name='twitter:card']","content","summary"),o){let i=document.querySelector("link[rel='canonical']");i||(i=document.createElement("link"),i.setAttribute("rel","canonical"),document.head.appendChild(i)),i.setAttribute("href",o)}const se="seo-json-ld";let C=document.getElementById(se);const W={"@context":"https://schema.org","@type":"Person",name:u,url:o||window.location.href};n&&n.length&&(W.alternateName=n.length===1?n[0]:n),w&&w.length&&(W.sameAs=w);let $=j||W;if(!j)$=W;else try{const i=j;(i["@type"]==="CreativeWork"||i["@type"]==="Article")&&!i.author&&(i.author={"@type":"Person",name:u,url:o||window.location.href},n&&n.length&&(i.author.alternateName=n.length===1?n[0]:n),w&&w.length&&(i.author.sameAs=w)),$=i}catch{$=j}if(C?C.text=JSON.stringify($):(C=document.createElement("script"),C.id=se,C.type="application/ld+json",C.text=JSON.stringify($),document.head.appendChild(C)),u||n&&n.length){const i=[u].concat(n||[]).filter(Boolean).join(", ");d("[name='author']","content",i)}w&&w.length&&d("[name='sameAs']","content",w.join(", "));const E=G||p&&p.favicons||null,B=i=>{document.querySelectorAll(`link[rel='${i}']`).forEach(s=>s.remove())};B("icon"),B("shortcut icon"),B("apple-touch-icon"),B("manifest"),E&&(Array.isArray(E)?E.forEach(i=>{const s=document.createElement("link");i.rel?s.setAttribute("rel",i.rel):s.setAttribute("rel",i.sizes==="180x180"?"apple-touch-icon":"icon"),i.sizes&&s.setAttribute("sizes",i.sizes),s.setAttribute("href",i.href),document.head.appendChild(s)}):Object.entries(E).forEach(([i,s])=>{const v=document.createElement("link");i==="180x180"?v.setAttribute("rel","apple-touch-icon"):v.setAttribute("rel","icon"),v.setAttribute("sizes",i),v.setAttribute("href",s),document.head.appendChild(v)}))},[t,a,o,l,m,u,n,w,y,j,G,p,J,K,Q,V,Y,ee]),null);var ce={exports:{}},D={},de;function be(){if(de)return D;de=1;var t=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function o(l,c,m){var u=null;if(m!==void 0&&(u=""+m),c.key!==void 0&&(u=""+c.key),"key"in c){m={};for(var n in c)n!=="key"&&(m[n]=c[n])}else m=c;return c=m.ref,{$$typeof:t,type:l,key:u,ref:c!==void 0?c:null,props:m}}return D.Fragment=a,D.jsx=o,D.jsxs=o,D}var le;function ve(){return le||(le=1,ce.exports=be()),ce.exports}var L=ve();he`
  html, body, * { cursor: none !important; }
`;r.div`
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
`;const ye=r.div`
  width: 60vw;
  max-width: 1100px;
  margin: 0 auto;
  box-sizing: border-box;

  @media (max-width: 1000px) {
    width: 92vw;
  }
`;r(ye)`
  display: grid;
  grid-template-columns: ${t=>t.columns||"0.48fr 0.52fr"};
  gap: ${t=>t.gap||"2rem"};
  align-items: ${t=>t.align||"center"};

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;const F={fonts:{body:"Space Grotesk, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif"},spacing:{lg:"16px"},radii:{card:"18px"}};he`
  :root {
    /* expose some common tokens as CSS vars for non-styled consumers */
    --radius-card: ${F.radii.card};
    --space-lg: ${F.spacing.lg};
  }
  * { box-sizing: border-box; }
  html, body, #root { height: 100%; }
  body {
    margin: 0;
    background-color: ${t=>t.theme.backgroundColor};
    color: ${t=>t.theme.fontColor};
    font-family: ${F.fonts.body};
  }
`;const je=r.div`
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
`,ke=r.div`
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
`,Ae=r.img`
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
`,Re=r.div`
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
`;function Kt({imageSrc:t,imageAvif:a,imageWebp:o,imageAlt:l,children:c,imageWidth:m,columns:u,width:n,textSize:w,textColor:y,className:j,...G}){return L.jsxs(je,{$width:n,className:j,...G,children:[L.jsx(ke,{children:L.jsxs("picture",{children:[a&&L.jsx("source",{srcSet:a,type:"image/avif"}),o&&L.jsx("source",{srcSet:o,type:"image/webp"}),L.jsx(Ae,{src:t,alt:l})]})}),L.jsx(Re,{$textSize:w,$textColor:y,children:c})]})}const h="https://mactavish.xyz",U={name:"Zack MacTavish",url:h,defaultImage:`${h}/assets/og/website-logoresolutions-1200x630.png`,sameAs:["https://dribbble.com/Zmactavish","https://www.instagram.com/zackmichaelmactavish","https://www.linkedin.com/in/zacharymactavish/","https://github.com/ZackMacTavish","https://medium.com/@zmactavish"],keywords:["product design","graphic design","UX","portfolio","Zack MacTavish"]},g={landing:{title:`${U.name} — Product & Graphic Designer`,description:"Product & graphic designer focused on brand, UX, and digital experiences. View work and contact.",url:`${h}/`,image:U.defaultImage,keywords:["portfolio","home","design","Zack MacTavish"]},giga:{title:"Giga — UX/UI & Branding | Zack MacTavish",description:"Case study: Giga — UX/UI, branding, and product design by Zack MacTavish.",url:`${h}/projects/giga`,image:`${h}/assets/Giga—Macbookv2.png`,datePublished:"2024-10-01",keywords:["giga","product design","ux","branding"]},outsource:{title:"Outsource — UX/UI & Branding | Zack MacTavish",description:"Case study: Outsource — branding, websites and UX work by Zack MacTavish.",url:`${h}/projects/outsource`,image:`${h}/assets/Outsource—Macbook.png`,datePublished:"2023-08-01",keywords:["outsource","branding","ux"]},piton:{title:"Piton — Project | Zack MacTavish",description:"Case study: Piton — UX and visual design work by Zack MacTavish.",url:`${h}/projects/piton`,image:`${h}/assets/Piton—Screens.jpg`,datePublished:"2023-02-01",keywords:["piton","branding","app design"]},ux:{title:"UX — Product & UX Projects | Zack MacTavish",description:"Portfolio of UX and product design projects by Zack MacTavish.",url:`${h}/projects/ux`,image:`${h}/assets/Giga—mockup.jpg`,keywords:["ux","product design"]},"access-direct":{title:"Access Direct — UX & Brand | Zack MacTavish",description:"Case study: Access Direct — brand, UX and website built by Zack MacTavish.",url:`${h}/projects/access-direct`,image:`${h}/assets/AD—Macs.jpg`,datePublished:"2022-10-01",keywords:["access direct","ux","brand"]},"graphic-design":{title:"Graphic Design — Portfolio | Zack MacTavish",description:"Graphic design and art pieces by Zack MacTavish, including posters, packaging, and editorial work.",url:`${h}/projects/graphic-design`,image:`${h}/assets/Cover.png`,keywords:["graphic design","posters","packaging"]},threepillars:{title:"ThreePillars — UX & Branding | Zack MacTavish",description:"Case study: ThreePillars — brand and web app design by Zack MacTavish.",url:`${h}/projects/threepillars`,image:`${h}/assets/ThreePillars—Macbook.png`,keywords:["threepillars","branding","ux"]},microsoft:{title:"Microsoft — Project | Zack MacTavish",description:"Case study: Microsoft — UX and visual design work by Zack MacTavish. Password protected.",url:`${h}/projects/microsoft`,image:U.defaultImage,keywords:["microsoft","branding","ux","password protected"]}},Ue=r.div`
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
`,Ce=r.div`
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
`,Le=r.div`
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  gap: 0.5em;
  height: 100%;
`,Se=r.div`
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
`,me=r.img`
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
`;function ge({title:t,imageBaseName:a,imageSrc:o,imageExt:l="png",imageAlt:c="",$imageWidth:m="38vw",buttons:u=[],divider:n=!0}){return e.jsxs(Ce,{children:[e.jsxs(Le,{children:[e.jsx(we,{style:{fontSize:"2.8rem",marginBottom:"0.1em"},children:t}),n&&e.jsx("div",{style:{height:"1px",background:"#e0e0e0",width:"48px",margin:"0.1em 0 0.3em 0"}}),e.jsx(Ue,{children:u.map(({href:w,label:y},j)=>e.jsxs(ue,{href:w,target:"_blank",rel:"noopener noreferrer",children:[y," ",e.jsx(fe,{style:{marginLeft:6,fontSize:"1.2em"}})]},j))})]}),e.jsx(Se,{children:a?e.jsxs("picture",{children:[e.jsx("source",{srcSet:`${a.startsWith("assets/")?"/":"/src/"}${a}.avif`,type:"image/avif"}),e.jsx("source",{srcSet:`${a.startsWith("assets/")?"/":"/src/"}${a}.webp`,type:"image/webp"}),e.jsx(me,{src:`${a.startsWith("assets/")?"/":"/src/"}${a}.${l}`,alt:c,$imageWidth:m})]}):e.jsx(me,{src:o,alt:c,$imageWidth:m})})]})}const Pe=""+new URL("iphones—Mockup-Bvav94lR.avif",import.meta.url).href,$e=""+new URL("iphones—Mockup-BBerJEYg.webp",import.meta.url).href,De=""+new URL("iphones—Mockup-huIJePT7.png",import.meta.url).href,Me=""+new URL("Giga—mockup-Cnh_KW7P.jpg",import.meta.url).href,ze=""+new URL("Messages—1920 x 1400-FBHNown_.png",import.meta.url).href,Te=""+new URL("Messages—1920 x 1400-Vn-3sQrl.avif",import.meta.url).href,Ge=""+new URL("Messages—1920 x 1400-Df8RyXSi.webp",import.meta.url).href,We=""+new URL("iMac_2-ByB4ft45.jpg",import.meta.url).href,Ee=""+new URL("iPad2-7y6oKxfc.jpg",import.meta.url).href,Be=""+new URL("iPad2-CzLEDSAu.avif",import.meta.url).href,Ze=""+new URL("iPad2-C6zybvis.webp",import.meta.url).href,Ie=""+new URL("iPhone_2—Dark—Sq-CMwx-i__.jpg",import.meta.url).href,_e=""+new URL("iPhone_2—Dark—Sq-o8OVfniw.avif",import.meta.url).href,Fe=""+new URL("iPhone_2—Dark—Sq-CN0kweFU.webp",import.meta.url).href,Xe=""+new URL("LightPhone2—Sq-BQ4v3uUl.jpg",import.meta.url).href,Oe=""+new URL("LightPhone2—Sq-BAf3JCmK.avif",import.meta.url).href,Ne=""+new URL("LightPhone2—Sq-BILeUpsy.webp",import.meta.url).href,He=""+new URL("iMac-BBUHxs4x.jpg",import.meta.url).href,qe=""+new URL("iMac-D7y2uSFv.avif",import.meta.url).href,Je=""+new URL("iMac-Cm5Zrfme.webp",import.meta.url).href,Ke=""+new URL("About-DuQLmo8y.png",import.meta.url).href,Qe=""+new URL("About-DLK3SCR5.avif",import.meta.url).href,Ve=""+new URL("About-Cx6Nw1aR.webp",import.meta.url).href,Ye=""+new URL("Guides-CQbHOjad.jpg",import.meta.url).href,et=""+new URL("Guides-6vl73ahM.avif",import.meta.url).href,tt=""+new URL("Guides-sAG3dRfa.webp",import.meta.url).href,it=""+new URL("CreateNewPost-CaFWZEze.png",import.meta.url).href,rt=""+new URL("CreateNewPost-DFUk0sow.avif",import.meta.url).href,at=""+new URL("CreateNewPost-DIIwIC2x.webp",import.meta.url).href,ue=r.a`
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
`,O=r.div`
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
`,N=r.div`
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
`,k=r.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`,A=r.h3`
  color: ${t=>t.theme.fontColor};
  font-size: 2.25rem;
  margin: 0;

  @media (max-width: 1320px) {
    font-size: 2.1rem;
  }

  @media (max-width: 850px) {
    font-size: 1.8rem;
  }
`,R=r.h6`
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
`,ot=r.img`
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
`,nt=r.h3`
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
`,st=r.img.attrs({loading:"lazy",decoding:"async"})`
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
`,ct=r.div`
width: 100vw;
background-color: #2CA0FD;
grid-row-start: 4;
grid-row-end: 9;
z-index: -5;
`,H=r.div`
background-color: ${t=>t.theme.backgroundTwo};
`,dt=r.div`
display: flex;
width: 100vw;
height: auto;

@media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    height: auto;
}
`,lt=r.div`
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
`,mt=r.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  max-width: 600px;

  @media (max-width: 1000px) {
    align-items: center;    /* centers the block horizontally */
    text-align: left;       /* keeps text left-aligned inside */
    margin-bottom: 2vh;     /* spacing below the text before image */
  }
`,ht=r.img`
  width: ${t=>t.Width};
  height: auto;

  @media (max-width: 1000px) {
    width: 80vw; /* image slightly bigger on vertical stack */
  }
`,we=r.h2`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 4.5rem;
  color: ${t=>t.theme.fontColor};
  margin: 0;

  @media (max-width: 850px) {
    font-size: 3rem;
  }
`,pt=r.a`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.4rem;
  color: ${t=>t.theme.fontColor};
  text-decoration: none;
  margin-top: 1vh;

  &:hover {
    opacity: 0.75;
  }
`;function gt(){return X.useLayoutEffect(()=>{window.scrollTo(0,0)}),e.jsxs(H,{children:[e.jsx(pe,{...g.giga,sameAs:U.sameAs,keywords:g.giga.keywords,jsonLd:{"@context":"https://schema.org","@type":"CreativeWork",headline:g.giga.title,description:g.giga.description,image:g.giga.image,author:{"@type":"Person",name:U.name,url:`${U.url}/about`},url:g.giga.url,datePublished:g.giga.datePublished,keywords:g.giga.keywords}}),e.jsx(ge,{title:"Giga",imageBaseName:"assets/Giga—Macbookv2",imageExt:"png",imageAlt:"Giga Macbook Mockup",imageWidth:"38vw",buttons:[{href:"https://gigaintelligence.com",label:"Visit Giga"}]}),e.jsx(O,{children:e.jsxs(N,{children:[e.jsxs(k,{children:[e.jsx(A,{children:"Project Type"}),e.jsx(R,{children:"UX/UI, Branding, Strategy"})]}),e.jsxs(k,{children:[e.jsx(A,{children:"Digital Product"}),e.jsx(R,{children:"Digital strategy platform used for data management, and private channel creation"})]}),e.jsxs(k,{children:[e.jsx(A,{children:"My Role"}),e.jsx(R,{children:"Responsible for researching, ideating, and generating ideas for a cohesive Giga experience. Designed and prototyped the Giga system & Web App"})]}),e.jsxs(k,{children:[e.jsx(A,{children:"Timeframe"}),e.jsx(R,{children:"1 1/2 years"})]})]})}),e.jsx(S,{src:Pe,webp:$e,fallback:De,style:{width:"100vw",maxWidth:"100vw",height:"auto",objectFit:"cover",display:"block",margin:0,padding:0,borderRadius:0}}),e.jsx(T,{style:{backgroundColor:"#ffffff"},children:e.jsx(z,{children:e.jsx(M,{style:{color:"#5D5D5D"},children:"Giga is a startup focused on sharing experiences between its users. Through a robust data management system, users can share information and learn about their favorite subjects"})})}),e.jsx(S,{src:Me}),e.jsx(b,{children:e.jsx(f,{src:ze,avif:Te,webp:Ge})}),e.jsx(b,{children:e.jsx(f,{src:it,avif:rt,webp:at})}),e.jsx(S,{src:We}),e.jsx(b,{children:e.jsx(f,{src:Ee,avif:Be,webp:Ze})}),e.jsx(q,{srcLeft:Ie,avifLeft:_e,webpLeft:Fe,srcRight:Xe,avifRight:Oe,webpRight:Ne}),e.jsx(b,{children:e.jsx(f,{src:He,avif:qe,webp:Je})}),e.jsx(b,{style:{paddingBottom:"7vh"},children:e.jsxs("div",{style:{width:"100%",display:"flex",justifyContent:"center"},children:[e.jsx(f,{src:Ke,avif:Qe,webp:Ve,style:{width:"60vw",maxWidth:"420px",minHeight:"auto",height:"auto",borderRadius:24,boxShadow:"0 2px 12px 0 rgba(0,0,0,0.06)"}}),e.jsx("style",{children:`
      @media (max-width: 850px) {
        .about-me-img {
          width: 96vw !important;
          max-width: 96vw !important;
          min-height: 60vw !important;
          border-radius: 0 !important;
        }
      }
    `})]})}),e.jsx(b,{style:{justifyContent:"center"},children:e.jsx(f,{src:Ye,avif:et,webp:tt})}),e.jsx(T,{style:{backgroundColor:"black"},children:e.jsx(z,{children:e.jsxs(M,{style:{color:"white",textAlign:"center"},children:["Founder — Rich Devlin",e.jsx("br",{}),"Lead Designer — Zachary MacTavish",e.jsx("br",{}),"Front-End Development — Xing Yi & Joel Fernando",e.jsx("br",{}),"Back-End Development — Rich Devlin"]})})})]})}const Qt=Object.freeze(Object.defineProperty({__proto__:null,BackgroundColor:ct,Cellphones:dt,GigaRocket:ot,ProjectBlock:k,ProjectButton:ue,ProjectContent:mt,ProjectDetails:N,ProjectDetailsContainer:O,ProjectGrid:lt,ProjectHeader:A,ProjectImage:ht,ProjectLink:pt,ProjectSubtitle:R,ProjectTitle:we,RisoItemtwo:st,StyledDiv:H,TextSection:nt,default:gt},Symbol.toStringTag,{value:"Module"})),ut=""+new URL("Highpower-CRTc0nnX.jpg",import.meta.url).href,wt=""+new URL("Highpower-CsvHkKEI.avif",import.meta.url).href,xt=""+new URL("Highpower-boH7bfqj.webp",import.meta.url).href,ft=""+new URL("AD—iphones-Ds9NHmDv.jpg",import.meta.url).href,bt=""+new URL("AD—iphones-BiYAAO7N.avif",import.meta.url).href,vt=""+new URL("AD—iphones-DGO6M8H3.webp",import.meta.url).href,yt=""+new URL("AD—pages-DKeMWlEm.jpg",import.meta.url).href,jt=""+new URL("AD—pages-BS_f5aWS.avif",import.meta.url).href,kt=""+new URL("AD—pages-sKiLGjS1.webp",import.meta.url).href,At=""+new URL("AD—Macs-C-BI5_ml.jpg",import.meta.url).href,Rt=""+new URL("AD—Macs-CXf9hZaT.avif",import.meta.url).href,Ut=""+new URL("AD—Macs--XjCyU3R.webp",import.meta.url).href,Ct=""+new URL("AD-ipad-7WzgOi0E.jpg",import.meta.url).href,Lt=""+new URL("AD-ipad-CUp8F2b6.avif",import.meta.url).href,St=""+new URL("AD-ipad-B7-837tt.webp",import.meta.url).href,Pt=""+new URL("ADiPhone_2—Dark-BP_0B_M9.jpg",import.meta.url).href,$t=""+new URL("ADLightPhone2-C7enY0US.jpg",import.meta.url).href,Dt=""+new URL("ADiMac-Bsrxdz-Q.png",import.meta.url).href,Mt=""+new URL("ADiMac-DlvZlRIn.avif",import.meta.url).href,zt=""+new URL("ADiMac-CKTwTd3P.webp",import.meta.url).href,Tt=""+new URL("Group 375-vcp1kghj.png",import.meta.url).href,Gt=""+new URL("Group 375-mZsO1BcE.avif",import.meta.url).href,Wt=""+new URL("Group 375-TF0Alkqk.webp",import.meta.url).href,Et=""+new URL("Guides2-C--leQ0V.png",import.meta.url).href,Bt=""+new URL("Guides2-DiNUbQbr.avif",import.meta.url).href,Zt=""+new URL("Guides2-DIlDKfWv.webp",import.meta.url).href,It=""+new URL("Group 274-k1yUScXs.png",import.meta.url).href,_t=""+new URL("Group 274-CN_qORPC.avif",import.meta.url).href,Ft=""+new URL("Group 274-CPP1pgPP.webp",import.meta.url).href,S=({src:t,avif:a,webp:o,alt:l="",style:c={}})=>(typeof t=="string"&&t.split("/").pop().replace(/\.[^.]+$/,""),e.jsxs("picture",{children:[a&&e.jsx("source",{srcSet:a,type:"image/avif"}),o&&e.jsx("source",{srcSet:o,type:"image/webp"}),e.jsx("img",{src:t,alt:l,style:{width:"100vw",height:"auto",margin:"3vh auto",display:"block",backgroundColor:"white",...c},loading:"lazy",decoding:"async"})]})),Xt=r.div`
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
`,M=r.p`
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
`,z=r.div`
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
`,T=r.section`
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
`,f=({src:t,avif:a,webp:o,alt:l="",width:c="60vw",style:m={}})=>{typeof t=="string"&&t.split("/").pop().replace(/\.[^.]+$/,"");const u={width:c,maxWidth:"1000px",height:"auto",display:"block",borderRadius:"24px",boxShadow:"0 2px 12px 0 rgba(0,0,0,0.06)",...m};return e.jsxs("picture",{children:[a&&e.jsx("source",{srcSet:a,type:"image/avif"}),o&&e.jsx("source",{srcSet:o,type:"image/webp"}),e.jsx("style",{children:".single-image-responsive { @media (max-width: 1320px) { width: 90vw !important; max-width: 90vw !important; } @media (max-width: 850px) { width: 100vw !important; max-width: 100vw !important; border-radius: 0 !important; } }"}),e.jsx("img",{src:t,alt:l,className:"single-image-responsive",style:u,loading:"lazy",decoding:"async"})]})},b=r.div`
  display: flex;
  justify-content: center;
  background-color: ${t=>t.theme.backgroundTwo};
  align-items: center;
  height: auto;
  padding: 3vh 0;
  width: 100vw;
`,Ot=r.div`
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
`,q=({srcLeft:t,srcRight:a,altLeft:o="",altRight:l="",styleLeft:c={},styleRight:m={}})=>e.jsxs("div",{style:{display:"flex",width:"100vw",height:"auto",flexWrap:"wrap",margin:0,padding:0},children:[e.jsx("img",{src:t,alt:o,style:{width:"50vw",height:"auto",display:"block",borderRadius:0,boxShadow:"none",margin:0,padding:0,...c},loading:"lazy",decoding:"async"}),e.jsx("img",{src:a,alt:l,style:{width:"50vw",height:"auto",display:"block",borderRadius:0,boxShadow:"none",margin:0,padding:0,...m},loading:"lazy",decoding:"async"})]});function Nt(){return X.useEffect(()=>{window.scrollTo(0,0)},[]),e.jsxs(H,{children:[e.jsx(pe,{...g["access-direct"],sameAs:U.sameAs,keywords:g["access-direct"].keywords,jsonLd:{"@context":"https://schema.org","@type":"CreativeWork",headline:g["access-direct"].title,description:g["access-direct"].description,image:g["access-direct"].image,author:{"@type":"Person",name:U.name,url:`${U.url}/about`},url:g["access-direct"].url,datePublished:g["access-direct"].datePublished,keywords:g["access-direct"].keywords}}),e.jsx(ge,{title:"Access Direct",imageBaseName:"assets/AD—Macbook",imageExt:"png",imageAlt:"Access Direct Macbook Mockup",imageWidth:"38vw",buttons:[{href:"https://access-direct.net",label:"Visit Access Direct"}]}),e.jsx(O,{children:e.jsxs(N,{children:[e.jsxs(k,{children:[e.jsx(A,{children:"Project Type"}),e.jsx(R,{children:"UX/UI, Branding, Strategy, Front-end development"})]}),e.jsxs(k,{children:[e.jsx(A,{children:"Product"}),e.jsx(R,{children:"Brand identity, print materials, and a website built with React.js"})]}),e.jsxs(k,{children:[e.jsx(A,{children:"My Role"}),e.jsx(R,{children:"Responsible for tidying up the brand logo, colors, creating print materials for tradeshows, social media, digital brochures and flyers, and building the company website"})]}),e.jsxs(k,{children:[e.jsx(A,{children:"Timeframe"}),e.jsx(R,{children:"4 years (Part-time)"})]})]})}),e.jsx(S,{src:ft,avif:bt,webp:vt,style:{backgroundColor:"white",width:"100vw",maxWidth:"100vw",height:"auto",objectFit:"cover",display:"block",margin:0,padding:0,borderRadius:0}}),e.jsx(T,{style:{backgroundColor:"white"},children:e.jsx(z,{children:e.jsx(M,{style:{color:"#5d5d5d"},children:"Access Direct is a company focused on security solutions. I collaborated closely on the project, working on their brand identity, logos, and website. I served as the UI Designer and Webmaster, redesigning the site and building it using React.js."})})}),e.jsx(S,{src:yt,avif:jt,webp:kt,style:{backgroundColor:"white",width:"100vw",maxWidth:"100vw",borderRadius:0,margin:"0 auto"}}),e.jsx(b,{children:e.jsx(f,{src:ut,avif:wt,webp:xt})}),e.jsx(b,{children:e.jsx(f,{src:It,avif:_t,webp:Ft})}),e.jsx(S,{src:At,avif:Rt,webp:Ut,style:{backgroundColor:"white",width:"100vw",maxWidth:"100vw",borderRadius:0,margin:"0 auto"}}),e.jsx(b,{children:e.jsx(f,{src:Ct,avif:Lt,webp:St})}),e.jsx(q,{srcLeft:Pt,srcRight:$t,altLeft:"AD iPhone 2 Dark",altRight:"AD Light Phone 2",styleLeft:{},styleRight:{}}),e.jsx(b,{children:e.jsx(f,{src:Dt,avif:Mt,webp:zt})}),e.jsx(b,{children:e.jsx(f,{src:Tt,avif:Gt,webp:Wt})}),e.jsx(b,{children:e.jsx(f,{src:Et,avif:Bt,webp:Zt})}),e.jsx(T,{style:{backgroundColor:"black"},children:e.jsx(z,{children:e.jsxs(M,{style:{color:"white",textAlign:"center"},children:["Founder — David Smith",e.jsx("br",{}),"Lead Designer — Zachary MacTavish",e.jsx("br",{}),"Website Development — Zachary MacTavish",e.jsx("br",{}),"Content Direction — Wendy Majewski, Alek Vasic"]})})})]})}const Vt=Object.freeze(Object.defineProperty({__proto__:null,DoubleImage:q,FullBg:S,FullHeightTextSection:T,ParagraphFour:Xt,RisoFlex:b,SingleGrid:Ot,SingleImage:f,TextContainer:z,TextContent:M,default:Nt},Symbol.toStringTag,{value:"Module"}));export{Vt as A,dt as C,q as D,T as F,Qt as G,we as P,b as R,H as S,z as T,M as a,S as b,f as c,Xt as d,ge as e,O as f,N as g,k as h,A as i,R as j,st as k,Kt as l,g as p,U as s,pe as y};
