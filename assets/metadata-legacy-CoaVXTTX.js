System.register(["./vendor-legacy-BmQ_CjD0.js"],function(e,t){"use strict";var i,a,o;return{setters:[e=>{i=e.b,a=e.c,o=e.u}],execute:function(){e("A",function(e){const{imageSrc:t,imageAvif:i,imageWebp:a,imageAlt:o,mobileSrc:r,mobileAvif:s,mobileWebp:n,width:l,className:p,textSize:x,textColor:y,children:f,...b}=e,w=function e(t){if(!t||"object"!=typeof t)return t;if(Array.isArray(t))return t.map(e);const i={};for(const a in t){if("mobileSrc"===a||"mobileAvif"===a||"mobileWebp"===a)continue;const o=t[a];i[a]="object"==typeof o&&null!==o?e(o):o}return i}(b),v=h(t),k=h(i),$=h(a),M=h(r),A=h(s),C=h(n);return c.jsxs(d,{$width:l,className:p,...w,children:[c.jsx(u,{children:c.jsxs("picture",{children:[A&&c.jsx("source",{srcSet:A,type:"image/avif",media:"(max-width: 700px)"}),C&&c.jsx("source",{srcSet:C,type:"image/webp",media:"(max-width: 700px)"}),M&&c.jsx("source",{srcSet:M,media:"(max-width: 700px)"}),k&&c.jsx("source",{srcSet:k,type:"image/avif"}),$&&c.jsx("source",{srcSet:$,type:"image/webp"}),c.jsx(m,{src:v,alt:o})]})}),c.jsx(g,{$textSize:x,$textColor:y,children:f})]})}),e("E",({title:e,description:t,url:a,image:o,images:r=null,type:s="website",authorName:n="Zack MacTavish",authorAlternateNames:c=["Zachary MacTavish"],sameAs:l=[],keywords:d=[],jsonLd:u=null,favicons:m=null,siteDefaults:g=null,siteName:h=null,locale:p=null,robots:x=null,themeColor:y=null,twitterSite:f=null,twitterCreator:b=null})=>(i.useEffect(()=>{e&&(document.title=e);const i=(e,t,i)=>{let a=document.querySelector(e);if(!a){a=document.createElement("meta");const t=e.match(/\[(name|property)=['"]([^'"]+)['"]\]/);t&&a.setAttribute(t[1],t[2]),document.head.appendChild(a)}a.setAttribute(t,i)};t&&(i("[name='description']","content",t),i("[property='og:description']","content",t),i("[name='twitter:description']","content",t)),d&&d.length&&i("[name='keywords']","content",Array.isArray(d)?d.join(", "):d),e&&(i("[property='og:title']","content",e),i("[name='twitter:title']","content",e)),i("[property='og:type']","content",s),a&&i("[property='og:url']","content",a);const w=h||g&&g.siteName||null,v=p||g&&g.locale||null,k=x||g&&g.robots||null,$=y||g&&g.themeColor||null,M=f||g&&g.twitterSite||null,A=b||g&&g.twitterCreator||null;w&&i("[property='og:site_name']","content",w),v&&i("[property='og:locale']","content",v),k&&i("[name='robots']","content",k),$&&i("[name='theme-color']","content",$),M&&i("[name='twitter:site']","content",M),A&&i("[name='twitter:creator']","content",A);const C=g&&g.ogImages||[],j=r||(o?[o]:null)||C,T=e=>{document.querySelectorAll(e).forEach(e=>e.remove())};T("meta[property='og:image']"),T("meta[property='og:image:width']"),T("meta[property='og:image:height']");let Z=null;if(j&&j.length?j.forEach(e=>{let t=e;if("string"==typeof e&&(t={url:e}),!t||!t.url)return;const i=document.createElement("meta");if(i.setAttribute("property","og:image"),i.setAttribute("content",t.url),document.head.appendChild(i),t.width){const e=document.createElement("meta");e.setAttribute("property","og:image:width"),e.setAttribute("content",String(t.width)),document.head.appendChild(e)}if(t.height){const e=document.createElement("meta");e.setAttribute("property","og:image:height"),e.setAttribute("content",String(t.height)),document.head.appendChild(e)}Z||(Z=t.url)}):o&&(i("[property='og:image']","content",o),Z=o),Z?(i("[name='twitter:image']","content",Z),i("[name='twitter:card']","content","summary_large_image")):i("[name='twitter:card']","content","summary"),a){let e=document.querySelector("link[rel='canonical']");e||(e=document.createElement("link"),e.setAttribute("rel","canonical"),document.head.appendChild(e)),e.setAttribute("href",a)}const S="seo-json-ld";let U=document.getElementById(S);const P={"@context":"https://schema.org","@type":"Person",name:n,url:a||window.location.href};c&&c.length&&(P.alternateName=1===c.length?c[0]:c),l&&l.length&&(P.sameAs=l);let z=u||P;if(u)try{const e=u;("CreativeWork"===e["@type"]||"Article"===e["@type"])&&!e.author&&(e.author={"@type":"Person",name:n,url:a||window.location.href},c&&c.length&&(e.author.alternateName=1===c.length?c[0]:c),l&&l.length&&(e.author.sameAs=l)),z=e}catch{z=u}else z=P;U?U.text=JSON.stringify(z):(U=document.createElement("script"),U.id=S,U.type="application/ld+json",U.text=JSON.stringify(z),document.head.appendChild(U)),(n||c&&c.length)&&i("[name='author']","content",[n].concat(c||[]).filter(Boolean).join(", ")),l&&l.length&&i("[name='sameAs']","content",l.join(", "));const E=m||g&&g.favicons||null,I=e=>{document.querySelectorAll(`link[rel='${e}']`).forEach(e=>e.remove())};I("icon"),I("shortcut icon"),I("apple-touch-icon"),I("manifest"),E&&(Array.isArray(E)?E.forEach(e=>{const t=document.createElement("link");e.rel?t.setAttribute("rel",e.rel):t.setAttribute("rel","180x180"===e.sizes?"apple-touch-icon":"icon"),e.sizes&&t.setAttribute("sizes",e.sizes),t.setAttribute("href",e.href),document.head.appendChild(t)}):Object.entries(E).forEach(([e,t])=>{const i=document.createElement("link");"180x180"===e?i.setAttribute("rel","apple-touch-icon"):i.setAttribute("rel","icon"),i.setAttribute("sizes",e),i.setAttribute("href",t),document.head.appendChild(i)}))},[e,t,a,o,s,n,c,l,d,u,m,g,h,p,x,y,f,b]),null));var t,r,s={exports:{}},n={},c=(r||(r=1,s.exports=function(){if(t)return n;t=1;var e=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function a(t,i,a){var o=null;if(void 0!==a&&(o=""+a),void 0!==i.key&&(o=""+i.key),"key"in i)for(var r in a={},i)"key"!==r&&(a[r]=i[r]);else a=i;return i=a.ref,{$$typeof:e,type:t,key:o,ref:void 0!==i?i:null,props:a}}return n.Fragment=i,n.jsx=a,n.jsxs=a,n}()),s.exports);o`
  html, body, * { cursor: none !important; }
`,a.div`
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
`;const l=a.div`
  width: 60vw;
  max-width: 1100px;
  margin: 0 auto;
  box-sizing: border-box;

  @media (max-width: 1000px) {
    width: 92vw;
  }
`;a(l)`
  display: grid;
  grid-template-columns: ${e=>e.columns||"0.48fr 0.52fr"};
  gap: ${e=>e.gap||"2rem"};
  align-items: ${e=>e.align||"center"};

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`,o`
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
`;const d=a.div`
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
`,u=a.div`
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
`,m=a.img`
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
`,g=a.div`
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
`;function h(e){if(!e)return e;try{return encodeURI(decodeURI(e))}catch{return encodeURI(e)}}const p="https://mactavish.xyz",x=e("s",{name:"Zack MacTavish",siteName:"Zack MacTavish — Portfolio",locale:"en_US",themeColor:"#000000",twitterCreator:"@zmactavish",twitterSite:"@zmactavish",imageAlt:"Zack MacTavish — Portfolio",url:p,defaultImage:`${p}/assets/og/website-logoresolutions-1200x630.png`,sameAs:["https://dribbble.com/Zmactavish","https://www.instagram.com/zackmichaelmactavish","https://www.linkedin.com/in/zacharymactavish/","https://github.com/ZackMacTavish","https://medium.com/@zmactavish"],keywords:["product design","graphic design","UX","portfolio","Zack MacTavish"],ogImages:[{url:`${p}/assets/og/website-logoresolutions-1200x630.png`,width:1200,height:630},{url:`${p}/assets/og/website-logoresolutions-600x315.png`,width:600,height:315},{url:`${p}/assets/og/website-logoresolutions-high-res.png`,width:2400,height:1260}],squareLogo:`${p}/assets/og/website-logoresolutions-square-logo-1200px.png`,favicons:{"16x16":`${p}/assets/og/favicon-16.png`,"32x32":`${p}/assets/og/favicon-32.png`,"48x48":`${p}/assets/og/favicon-48.png`,"180x180":`${p}/assets/og/favicon-180.png`,"192x192":`${p}/assets/og/favicon-192.png`,"512x512":`${p}/assets/og/favicon-512.png`}});e("p",{landing:{title:`${x.name} — Product & Graphic Designer`,description:"Product & graphic designer focused on brand, UX, and digital experiences. View work and contact.",url:`${p}/`,image:x.defaultImage,keywords:["portfolio","home","design","Zack MacTavish"]},giga:{title:"Giga — UX/UI & Branding | Zack MacTavish",description:"Case study: Giga — UX/UI, branding, and product design by Zack MacTavish.",url:`${p}/Giga`,image:`${p}/assets/og/giga-1200x630.jpg`,datePublished:"2024-10-01",keywords:["giga","product design","ux","branding"]},outsource:{title:"Outsource — UX/UI & Branding | Zack MacTavish",description:"Case study: Outsource — branding, websites and UX work by Zack MacTavish.",url:`${p}/Outsource`,image:`${p}/assets/og/outsource-1200x630.jpg`,datePublished:"2023-08-01",keywords:["outsource","branding","ux"]},piton:{title:"Piton — Project | Zack MacTavish",description:"Case study: Piton — UX and visual design work by Zack MacTavish.",url:`${p}/Piton`,image:`${p}/assets/og/piton-1200x630.jpg`,datePublished:"2023-02-01",keywords:["piton","branding","app design"]},ux:{title:"Leysi — Product & UX | Zack MacTavish",description:"Case study: Leysi — UX and product design by Zack MacTavish.",url:`${p}/Ux`,image:`${p}/assets/og/ux-1200x630.jpg`,keywords:["leysi","ux","product design"]},"access-direct":{title:"Access Direct — UX & Brand | Zack MacTavish",description:"Case study: Access Direct — brand, UX and website built by Zack MacTavish.",url:`${p}/AccessDirect`,image:`${p}/assets/og/access-direct-1200x630.jpg`,datePublished:"2022-10-01",keywords:["access direct","ux","brand"]},"graphic-design":{title:"Graphic Design — Portfolio | Zack MacTavish",description:"Graphic design and art pieces by Zack MacTavish, including posters, packaging, and editorial work.",url:`${p}/GraphicDesign`,image:`${p}/assets/og/graphic-design-1200x630.jpg`,keywords:["graphic design","posters","packaging"]},threepillars:{title:"ThreePillars — UX & Branding | Zack MacTavish",description:"Case study: ThreePillars — brand and web app design by Zack MacTavish.",url:`${p}/ThreePillars`,image:`${p}/assets/og/threepillars-1200x630.jpg`,keywords:["threepillars","branding","ux"]},microsoft:{title:"Microsoft — Project | Zack MacTavish",description:"Case study: Microsoft — UX and visual design work by Zack MacTavish. Password protected.",url:`${p}/Microsoft`,image:x.defaultImage,keywords:["microsoft","branding","ux","password protected"]},"business-connectors":{title:"Business Connectors — Microsoft | Zack MacTavish",description:"Case study: Microsoft Business Connectors — UX & product design by Zack MacTavish.",url:`${p}/BusinessConnectors`,image:x.defaultImage,keywords:["microsoft","business connectors","ux"]},"copilot-pay":{title:"Copilot Pay — Microsoft | Zack MacTavish",description:"Case study: Microsoft Copilot Pay — UX & product design by Zack MacTavish.",url:`${p}/CopilotPay`,image:x.defaultImage,keywords:["microsoft","copilot","pay","ux"]},journeys:{title:"Journeys — Microsoft | Zack MacTavish",description:"Case study: Microsoft Journeys — UX & product design by Zack MacTavish.",url:`${p}/Journeys`,image:x.defaultImage,keywords:["microsoft","journeys","ux"]},"cashback-hub":{title:"Cashback Hub & Edge Shoreline — Microsoft | Zack MacTavish",description:"Case study: Microsoft Shopping Cashback Hub and Edge Shoreline companion pane — interaction, visual, and cross-platform design by Zack MacTavish.",url:`${p}/CashbackHub`,image:`${p}/assets/cashback-hub/hero.jpg`,keywords:["microsoft","cashback hub","edge shoreline","shopping","ux"]},resume:{title:"Resume — Zack MacTavish",description:"Resume / CV of Zack MacTavish — product & graphic designer.",url:`${p}/Resume`,image:x.defaultImage,keywords:["resume","cv","product designer","graphic designer"]}})}}});
