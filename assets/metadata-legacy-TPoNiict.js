System.register(["./vendor-legacy-Dy2oZrq6.js"],function(e,t){"use strict";var i,o,a;return{setters:[e=>{i=e.b,o=e.c,a=e.u}],execute:function(){e("A",function(e){const{imageSrc:t,imageAvif:i,imageWebp:o,imageAlt:a,mobileSrc:r,mobileAvif:n,mobileWebp:s,width:l,className:h,textSize:y,textColor:f,children:x,...b}=e,w=function e(t){if(!t||"object"!=typeof t)return t;if(Array.isArray(t))return t.map(e);const i={};for(const o in t){if("mobileSrc"===o||"mobileAvif"===o||"mobileWebp"===o)continue;const a=t[o];i[o]="object"==typeof a&&null!==a?e(a):a}return i}(b),v=g(t),k=g(i),$=g(o),C=g(r),M=g(n),A=g(s);return c.jsxs(d,{$width:l,className:h,...w,children:[c.jsx(u,{children:c.jsxs("picture",{children:[M&&c.jsx("source",{srcSet:M,type:"image/avif",media:"(max-width: 700px)"}),A&&c.jsx("source",{srcSet:A,type:"image/webp",media:"(max-width: 700px)"}),C&&c.jsx("source",{srcSet:C,media:"(max-width: 700px)"}),k&&c.jsx("source",{srcSet:k,type:"image/avif"}),$&&c.jsx("source",{srcSet:$,type:"image/webp"}),c.jsx(p,{src:v,alt:a})]})}),c.jsx(m,{$textSize:y,$textColor:f,children:x})]})}),e("E",({title:e,description:t,url:o,image:a,images:r=null,type:n="website",authorName:s="Zack MacTavish",authorAlternateNames:c=["Zachary MacTavish"],sameAs:l=[],keywords:d=[],jsonLd:u=null,favicons:p=null,siteDefaults:m=null,siteName:g=null,locale:h=null,robots:y=null,themeColor:f=null,twitterSite:x=null,twitterCreator:b=null})=>(i.useEffect(()=>{e&&(document.title=e);const i=(e,t,i)=>{let o=document.querySelector(e);if(!o){o=document.createElement("meta");const t=e.match(/\[(name|property)=['"]([^'"]+)['"]\]/);t&&o.setAttribute(t[1],t[2]),document.head.appendChild(o)}o.setAttribute(t,i)};t&&(i("[name='description']","content",t),i("[property='og:description']","content",t),i("[name='twitter:description']","content",t)),d&&d.length&&i("[name='keywords']","content",Array.isArray(d)?d.join(", "):d),e&&(i("[property='og:title']","content",e),i("[name='twitter:title']","content",e)),i("[property='og:type']","content",n),o&&i("[property='og:url']","content",o);const w=g||m&&m.siteName||null,v=h||m&&m.locale||null,k=y||m&&m.robots||null,$=f||m&&m.themeColor||null,C=x||m&&m.twitterSite||null,M=b||m&&m.twitterCreator||null;w&&i("[property='og:site_name']","content",w),v&&i("[property='og:locale']","content",v),k&&i("[name='robots']","content",k),$&&i("[name='theme-color']","content",$),C&&i("[name='twitter:site']","content",C),M&&i("[name='twitter:creator']","content",M);const A=m&&m.ogImages||[],j=r||(a?[a]:null)||A,S=e=>{document.querySelectorAll(e).forEach(e=>e.remove())};S("meta[property='og:image']"),S("meta[property='og:image:width']"),S("meta[property='og:image:height']");let T=null;if(j&&j.length?j.forEach(e=>{let t=e;if("string"==typeof e&&(t={url:e}),!t||!t.url)return;const i=document.createElement("meta");if(i.setAttribute("property","og:image"),i.setAttribute("content",t.url),document.head.appendChild(i),t.width){const e=document.createElement("meta");e.setAttribute("property","og:image:width"),e.setAttribute("content",String(t.width)),document.head.appendChild(e)}if(t.height){const e=document.createElement("meta");e.setAttribute("property","og:image:height"),e.setAttribute("content",String(t.height)),document.head.appendChild(e)}T||(T=t.url)}):a&&(i("[property='og:image']","content",a),T=a),T?(i("[name='twitter:image']","content",T),i("[name='twitter:card']","content","summary_large_image")):i("[name='twitter:card']","content","summary"),o){let e=document.querySelector("link[rel='canonical']");e||(e=document.createElement("link"),e.setAttribute("rel","canonical"),document.head.appendChild(e)),e.setAttribute("href",o)}const Z="seo-json-ld";let I=document.getElementById(Z);const U={"@context":"https://schema.org","@type":"Person",name:s,url:o||window.location.href};c&&c.length&&(U.alternateName=1===c.length?c[0]:c),l&&l.length&&(U.sameAs=l);let P=u||U;if(u)try{const e=u;("CreativeWork"===e["@type"]||"Article"===e["@type"])&&!e.author&&(e.author={"@type":"Person",name:s,url:o||window.location.href},c&&c.length&&(e.author.alternateName=1===c.length?c[0]:c),l&&l.length&&(e.author.sameAs=l)),P=e}catch{P=u}else P=U;I?I.text=JSON.stringify(P):(I=document.createElement("script"),I.id=Z,I.type="application/ld+json",I.text=JSON.stringify(P),document.head.appendChild(I)),(s||c&&c.length)&&i("[name='author']","content",[s].concat(c||[]).filter(Boolean).join(", ")),l&&l.length&&i("[name='sameAs']","content",l.join(", "));const E=p||m&&m.favicons||null,z=e=>{document.querySelectorAll(`link[rel='${e}']`).forEach(e=>e.remove())};z("icon"),z("shortcut icon"),z("apple-touch-icon"),z("manifest"),E&&(Array.isArray(E)?E.forEach(e=>{const t=document.createElement("link");e.rel?t.setAttribute("rel",e.rel):t.setAttribute("rel","180x180"===e.sizes?"apple-touch-icon":"icon"),e.sizes&&t.setAttribute("sizes",e.sizes),t.setAttribute("href",e.href),document.head.appendChild(t)}):Object.entries(E).forEach(([e,t])=>{const i=document.createElement("link");"180x180"===e?i.setAttribute("rel","apple-touch-icon"):i.setAttribute("rel","icon"),i.setAttribute("sizes",e),i.setAttribute("href",t),document.head.appendChild(i)}))},[e,t,o,a,n,s,c,l,d,u,p,m,g,h,y,f,x,b]),null));var t,r,n={exports:{}},s={},c=(r||(r=1,n.exports=function(){if(t)return s;t=1;var e=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function o(t,i,o){var a=null;if(void 0!==o&&(a=""+o),void 0!==i.key&&(a=""+i.key),"key"in i)for(var r in o={},i)"key"!==r&&(o[r]=i[r]);else o=i;return i=o.ref,{$$typeof:e,type:t,key:a,ref:void 0!==i?i:null,props:o}}return s.Fragment=i,s.jsx=o,s.jsxs=o,s}()),n.exports);a`
  html, body, * { cursor: none !important; }
`,o.div`
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
`;const l=o.div`
  width: 60vw;
  max-width: 1100px;
  margin: 0 auto;
  box-sizing: border-box;

  @media (max-width: 1000px) {
    width: 92vw;
  }
`;o(l)`
  display: grid;
  grid-template-columns: ${e=>e.columns||"0.48fr 0.52fr"};
  gap: ${e=>e.gap||"2rem"};
  align-items: ${e=>e.align||"center"};

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`,a`
  :root {
    /* expose some common tokens as CSS vars for non-styled consumers */
    --radius-card: ${"18px"};
    --space-lg: ${"16px"};
  }
  * { box-sizing: border-box; }
  html, body, #root { height: 100%; }
  body {
    margin: 0;
    background-color: ${e=>e.theme.backgroundColor};
    color: ${e=>e.theme.fontColor};
    font-family: ${"Space Grotesk, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif"};
  }
`;const d=o.div`
  width: ${e=>e.$width||"62vw"};
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  gap: 2.2vw;
  align-items: center; /* Vertically center both image and text */
  padding: ${e=>{var t;return(null===(t=e.theme)||void 0===t||null===(t=t.spacing)||void 0===t?void 0:t["3xl"])||"3rem"}} 0;
  height: auto;

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
    height: auto;
  }
`,u=o.div`
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
`,p=o.img`
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
`,m=o.div`
  flex: 1 1 50%;
  font-family: 'Space Grotesk', sans-serif;
  font-size: ${e=>e.$textSize||"1.4rem"};
  color: ${e=>e.$textColor||"#fff"};
  line-height: 1.4;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* children left-aligned */
  justify-content: center; /* center children vertically in text block */
  gap: 0.25em;
  text-align: left;
  min-width: 0;
  height: auto;
  @media (max-width: 1000px) {
    font-size: 1.7rem;
    width: 92vw;
    margin: 0 auto;
    min-height: 40px;
  }
`;function g(e){if(!e)return e;try{return encodeURI(decodeURI(e))}catch{return encodeURI(e)}}const h="https://mactavish.xyz",y=e("s",{name:"Zack MacTavish",siteName:"Zack MacTavish — Portfolio",locale:"en_US",themeColor:"#000000",twitterCreator:"@zmactavish",twitterSite:"@zmactavish",imageAlt:"Zack MacTavish — Portfolio",url:h,defaultImage:`${h}/assets/og/website-logoresolutions-1200x630.png`,sameAs:["https://dribbble.com/Zmactavish","https://www.instagram.com/zackmichaelmactavish","https://www.linkedin.com/in/zacharymactavish/","https://github.com/ZackMacTavish","https://medium.com/@zmactavish"],keywords:["product design","graphic design","UX","portfolio","Zack MacTavish"],ogImages:[{url:`${h}/assets/og/website-logoresolutions-1200x630.png`,width:1200,height:630},{url:`${h}/assets/og/website-logoresolutions-600x315.png`,width:600,height:315},{url:`${h}/assets/og/website-logoresolutions-high-res.png`,width:2400,height:1260}],squareLogo:`${h}/assets/og/website-logoresolutions-square-logo-1200px.png`,favicons:{"16x16":`${h}/assets/og/favicon-16.png`,"32x32":`${h}/assets/og/favicon-32.png`,"48x48":`${h}/assets/og/favicon-48.png`,"180x180":`${h}/assets/og/favicon-180.png`,"192x192":`${h}/assets/og/favicon-192.png`,"512x512":`${h}/assets/og/favicon-512.png`}});e("p",{landing:{title:`${y.name} — Product & Graphic Designer`,description:"Product & graphic designer focused on brand, UX, and digital experiences. View work and contact.",url:`${h}/`,image:y.defaultImage,keywords:["portfolio","home","design","Zack MacTavish"]},giga:{title:"Giga — UX/UI & Branding | Zack MacTavish",description:"Case study: Giga — UX/UI, branding, and product design by Zack MacTavish.",url:`${h}/Giga`,image:`${h}/assets/og/giga-1200x630.jpg`,datePublished:"2024-10-01",keywords:["giga","product design","ux","branding"]},outsource:{title:"Outsource — Branding, UX/UI & Motion | Zack MacTavish",description:"Case study: Eighteen months as Multimedia Designer rebuilding a NYC permit expediting firm — parent brand, websites, internal project-tracking tool, and three subsidiary identities (CEU, BuildingOwl, OSINYC).",url:`${h}/Outsource`,image:`${h}/assets/og/outsource-1200x630.jpg`,datePublished:"2023-08-01",keywords:["outsource","permit expediting","nyc construction","branding","ux","ui","motion graphics","internal tools","buildingowl","outsource ceu","continuing education","proptech"]},piton:{title:"Piton — Project | Zack MacTavish",description:"Case study: Piton — UX and visual design work by Zack MacTavish.",url:`${h}/Piton`,image:`${h}/assets/og/piton-1200x630.jpg`,datePublished:"2023-02-01",keywords:["piton","branding","app design"]},ux:{title:"Leysi — Product & UX | Zack MacTavish",description:"Case study: Leysi — UX and product design by Zack MacTavish.",url:`${h}/Ux`,image:`${h}/assets/og/ux-1200x630.jpg`,keywords:["leysi","ux","product design"]},"access-direct":{title:"Access Direct — UX & Brand | Zack MacTavish",description:"Case study: Access Direct — brand, UX and website built by Zack MacTavish.",url:`${h}/AccessDirect`,image:`${h}/assets/og/access-direct-1200x630.jpg`,datePublished:"2022-10-01",keywords:["access direct","ux","brand"]},"graphic-design":{title:"Graphic Design — Portfolio | Zack MacTavish",description:"Graphic design and art pieces by Zack MacTavish, including posters, packaging, and editorial work.",url:`${h}/GraphicDesign`,image:`${h}/assets/og/graphic-design-1200x630.jpg`,keywords:["graphic design","posters","packaging"]},threepillars:{title:"ThreePillars — UX & Branding | Zack MacTavish",description:"Case study: ThreePillars — brand and web app design by Zack MacTavish.",url:`${h}/ThreePillars`,image:`${h}/assets/og/threepillars-1200x630.jpg`,keywords:["threepillars","branding","ux"]},microsoft:{title:"Microsoft — Project | Zack MacTavish",description:"Case study: Microsoft — UX and visual design work by Zack MacTavish. Password protected.",url:`${h}/Microsoft`,image:y.defaultImage,keywords:["microsoft","branding","ux","password protected"]},"business-connectors":{title:"Business Connectors — Microsoft | Zack MacTavish",description:"Case study: Microsoft Business Connectors — UX & product design by Zack MacTavish.",url:`${h}/BusinessConnectors`,image:y.defaultImage,keywords:["microsoft","business connectors","ux"]},"copilot-pay":{title:"Copilot Pay — Microsoft | Zack MacTavish",description:"Case study: Microsoft Copilot Pay — UX & product design by Zack MacTavish.",url:`${h}/CopilotPay`,image:y.defaultImage,keywords:["microsoft","copilot","pay","ux"]},journeys:{title:"Journeys — Microsoft | Zack MacTavish",description:"Case study: Microsoft Journeys — UX & product design by Zack MacTavish.",url:`${h}/Journeys`,image:y.defaultImage,keywords:["microsoft","journeys","ux"]},"cashback-hub":{title:"Cashback Hub & Edge Shoreline — Microsoft | Zack MacTavish",description:"Case study: Microsoft Shopping Cashback Hub and Edge Shoreline companion pane — interaction, visual, and cross-platform design by Zack MacTavish.",url:`${h}/CashbackHub`,image:`${h}/assets/cashback-hub/hero.jpg`,keywords:["microsoft","cashback hub","edge shoreline","shopping","ux"]},"video-commerce":{title:"Video Commerce — Bing Shopping | Zack MacTavish",description:"Case study: Bing Shopping video commerce initiative — live and short-form video integrations across U.S., Japan, and India pilots with TalkShopLive, QVC Japan, and Roposo.",url:`${h}/VideoCommerce`,image:`${h}/assets/video-commerce/Full Frame.jpg`,keywords:["microsoft","bing shopping","video commerce","live shopping","talkshoplive","roposo","ux"]},"ironlak-internship":{title:"Ironlak Internship — Brand Identity & Production Design | Zack MacTavish",description:"Case study: A multilingual wordmark identity system for Ironlak, an Australian spray paint company, and three months of production design across print, digital, and outdoor.",url:`${h}/IronlakInternship`,image:`${h}/assets/ironlak-internship/IronlakAdvert2.jpg`,keywords:["ironlak","brand identity","graphic design","production design","graffiti","internship"]},resume:{title:"Resume — Zack MacTavish",description:"Resume / CV of Zack MacTavish — product & graphic designer.",url:`${h}/Resume`,image:y.defaultImage,keywords:["resume","cv","product designer","graphic designer"]}})}}});
