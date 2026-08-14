System.register(["./vendor-legacy-lMxcQOgj.js"],function(e,t){"use strict";var i,a,o;return{setters:[e=>{i=e.b,a=e.u,o=e.c}],execute:function(){e("A",function(e){const{imageSrc:t,imageAvif:i,imageWebp:a,imageAlt:o,mobileSrc:r,mobileAvif:s,mobileWebp:n,width:d,className:m,textSize:y,textColor:f,children:b,...w}=e,x=function e(t){if(!t||"object"!=typeof t)return t;if(Array.isArray(t))return t.map(e);const i={};for(const a in t){if("mobileSrc"===a||"mobileAvif"===a||"mobileWebp"===a)continue;const o=t[a];i[a]="object"==typeof o&&null!==o?e(o):o}return i}(w),v=h(t),k=h(i),$=h(a),M=h(r),j=h(s),C=h(n);return c.jsxs(l,{$width:d,className:m,...x,children:[c.jsx(u,{children:c.jsxs("picture",{children:[j&&c.jsx("source",{srcSet:j,type:"image/avif",media:"(max-width: 700px)"}),C&&c.jsx("source",{srcSet:C,type:"image/webp",media:"(max-width: 700px)"}),M&&c.jsx("source",{srcSet:M,media:"(max-width: 700px)"}),k&&c.jsx("source",{srcSet:k,type:"image/avif"}),$&&c.jsx("source",{srcSet:$,type:"image/webp"}),c.jsx(p,{src:v,alt:o})]})}),c.jsx(g,{$textSize:y,$textColor:f,children:b})]})}),e("E",({title:e,description:t,url:a,image:o,images:r=null,type:s="website",authorName:n="Zack MacTavish",authorAlternateNames:c=["Zachary MacTavish"],sameAs:d=[],keywords:l=[],jsonLd:u=null,favicons:p=null,siteDefaults:g=null,siteName:h=null,locale:m=null,robots:y=null,themeColor:f=null,twitterSite:b=null,twitterCreator:w=null})=>(i.useEffect(()=>{e&&(document.title=e);const i=(e,t,i)=>{let a=document.querySelector(e);if(!a){a=document.createElement("meta");const t=e.match(/\[(name|property)=['"]([^'"]+)['"]\]/);t&&a.setAttribute(t[1],t[2]),document.head.appendChild(a)}a.setAttribute(t,i)};t&&(i("[name='description']","content",t),i("[property='og:description']","content",t),i("[name='twitter:description']","content",t)),l&&l.length&&i("[name='keywords']","content",Array.isArray(l)?l.join(", "):l),e&&(i("[property='og:title']","content",e),i("[name='twitter:title']","content",e)),i("[property='og:type']","content",s),a&&i("[property='og:url']","content",a);const x=h||g&&g.siteName||null,v=m||g&&g.locale||null,k=y||g&&g.robots||null,$=f||g&&g.themeColor||null,M=b||g&&g.twitterSite||null,j=w||g&&g.twitterCreator||null;x&&i("[property='og:site_name']","content",x),v&&i("[property='og:locale']","content",v),k&&i("[name='robots']","content",k),$&&i("[name='theme-color']","content",$),M&&i("[name='twitter:site']","content",M),j&&i("[name='twitter:creator']","content",j);const C=g&&g.ogImages||[],A=r||(o?[o]:null)||C,S=e=>{document.querySelectorAll(e).forEach(e=>e.remove())};S("meta[property='og:image']"),S("meta[property='og:image:width']"),S("meta[property='og:image:height']");let T=null;if(A&&A.length?A.forEach(e=>{let t=e;if("string"==typeof e&&(t={url:e}),!t||!t.url)return;const i=document.createElement("meta");if(i.setAttribute("property","og:image"),i.setAttribute("content",t.url),document.head.appendChild(i),t.width){const e=document.createElement("meta");e.setAttribute("property","og:image:width"),e.setAttribute("content",String(t.width)),document.head.appendChild(e)}if(t.height){const e=document.createElement("meta");e.setAttribute("property","og:image:height"),e.setAttribute("content",String(t.height)),document.head.appendChild(e)}T||(T=t.url)}):o&&(i("[property='og:image']","content",o),T=o),T?(i("[name='twitter:image']","content",T),i("[name='twitter:card']","content","summary_large_image")):i("[name='twitter:card']","content","summary"),a){let e=document.querySelector("link[rel='canonical']");e||(e=document.createElement("link"),e.setAttribute("rel","canonical"),document.head.appendChild(e)),e.setAttribute("href",a)}const Z="seo-json-ld";let P=document.getElementById(Z);const I={"@context":"https://schema.org","@type":"Person",name:n,url:a||window.location.href};c&&c.length&&(I.alternateName=1===c.length?c[0]:c),d&&d.length&&(I.sameAs=d);let U=u||I;if(u)try{const e=u;("CreativeWork"===e["@type"]||"Article"===e["@type"])&&!e.author&&(e.author={"@type":"Person",name:n,url:a||window.location.href},c&&c.length&&(e.author.alternateName=1===c.length?c[0]:c),d&&d.length&&(e.author.sameAs=d)),U=e}catch{U=u}else U=I;P?P.text=JSON.stringify(U):(P=document.createElement("script"),P.id=Z,P.type="application/ld+json",P.text=JSON.stringify(U),document.head.appendChild(P)),(n||c&&c.length)&&i("[name='author']","content",[n].concat(c||[]).filter(Boolean).join(", ")),d&&d.length&&i("[name='sameAs']","content",d.join(", "));const z=p||g&&g.favicons||null,E=e=>{document.querySelectorAll(`link[rel='${e}']`).forEach(e=>e.remove())};E("icon"),E("shortcut icon"),E("apple-touch-icon"),E("manifest"),z&&(Array.isArray(z)?z.forEach(e=>{const t=document.createElement("link");e.rel?t.setAttribute("rel",e.rel):t.setAttribute("rel","180x180"===e.sizes?"apple-touch-icon":"icon"),e.sizes&&t.setAttribute("sizes",e.sizes),t.setAttribute("href",e.href),document.head.appendChild(t)}):Object.entries(z).forEach(([e,t])=>{const i=document.createElement("link");"180x180"===e?i.setAttribute("rel","apple-touch-icon"):i.setAttribute("rel","icon"),i.setAttribute("sizes",e),i.setAttribute("href",t),document.head.appendChild(i)}))},[e,t,a,o,s,n,c,d,l,u,p,g,h,m,y,f,b,w]),null));var t,r,s={exports:{}},n={},c=(r||(r=1,s.exports=function(){if(t)return n;t=1;var e=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function a(t,i,a){var o=null;if(void 0!==a&&(o=""+a),void 0!==i.key&&(o=""+i.key),"key"in i)for(var r in a={},i)"key"!==r&&(a[r]=i[r]);else a=i;return i=a.ref,{$$typeof:e,type:t,key:o,ref:void 0!==i?i:null,props:a}}return n.Fragment=i,n.jsx=a,n.jsxs=a,n}()),s.exports);a`
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
`;const d=o.div`
  width: 60vw;
  max-width: 1100px;
  margin: 0 auto;
  box-sizing: border-box;

  @media (max-width: 1000px) {
    width: 92vw;
  }
`;o(d)`
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
`;const l=o.div`
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
`,g=o.div`
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
`;function h(e){if(!e)return e;try{return encodeURI(decodeURI(e))}catch{return encodeURI(e)}}const m="https://mactavish.xyz",y=e("s",{name:"Zack MacTavish",siteName:"Zack MacTavish — Portfolio",locale:"en_US",twitterCreator:"@zmactavish",twitterSite:"@zmactavish",imageAlt:"Zack MacTavish — Portfolio",url:m,defaultImage:`${m}/assets/og/website-logoresolutions-1200x630.png`,sameAs:["https://dribbble.com/Zmactavish","https://www.instagram.com/zackmichaelmactavish","https://www.linkedin.com/in/zacharymactavish/","https://github.com/ZackMacTavish","https://medium.com/@zmactavish"],keywords:["product design","graphic design","UX","portfolio","Zack MacTavish"],ogImages:[{url:`${m}/assets/og/website-logoresolutions-1200x630.png`,width:1200,height:630},{url:`${m}/assets/og/website-logoresolutions-600x315.png`,width:600,height:315},{url:`${m}/assets/og/website-logoresolutions-high-res.png`,width:2400,height:1260}],squareLogo:`${m}/assets/og/website-logoresolutions-square-logo-1200px.png`,favicons:{"16x16":`${m}/assets/og/favicon-16.png`,"32x32":`${m}/assets/og/favicon-32.png`,"48x48":`${m}/assets/og/favicon-48.png`,"180x180":`${m}/assets/og/favicon-180.png`,"192x192":`${m}/assets/og/favicon-192.png`,"512x512":`${m}/assets/og/favicon-512.png`}});e("p",{landing:{title:`${y.name} — Product & Graphic Designer`,description:"Product & graphic designer focused on brand, UX, and digital experiences. View work and contact.",url:`${m}/`,image:y.defaultImage,keywords:["portfolio","home","design","Zack MacTavish"]},giga:{title:"Giga — UX/UI & Branding | Zack MacTavish",description:"Case study: Giga — UX/UI, branding, and product design by Zack MacTavish.",url:`${m}/Giga`,image:`${m}/assets/og/giga-1200x630.jpg`,datePublished:"2024-10-01",keywords:["giga","product design","ux","branding"]},outsource:{title:"Outsource — Branding, UX/UI & Motion | Zack MacTavish",description:"Case study: Eighteen months as Multimedia Designer rebuilding a NYC permit expediting firm — parent brand, websites, internal project-tracking tool, and three subsidiary identities (CEU, BuildingOwl, OSINYC).",url:`${m}/Outsource`,image:`${m}/assets/og/outsource-1200x630.jpg`,datePublished:"2023-08-01",keywords:["outsource","permit expediting","nyc construction","branding","ux","ui","motion graphics","internal tools","buildingowl","outsource ceu","continuing education","proptech"]},piton:{title:"Piton — Project | Zack MacTavish",description:"Case study: Piton — UX and visual design work by Zack MacTavish.",url:`${m}/Piton`,image:`${m}/assets/og/piton-1200x630.jpg`,datePublished:"2023-02-01",keywords:["piton","branding","app design"]},ux:{title:"Leysi — Brand Identity & iOS App Design | Zack MacTavish",description:"Case study: Leysi — brand identity and iOS app design for a food-budgeting startup built by NYU students, designed in collaboration with Varfaj Partners (now Avenue Z).",url:`${m}/Ux`,image:`${m}/assets/og/ux-1200x630.jpg`,keywords:["leysi","brand identity","logo design","ios app","food budgeting","fintech","mobile ux","varfaj partners","avenue z"]},"access-direct":{title:"Access Direct — UX & Brand | Zack MacTavish",description:"Case study: Access Direct — brand, UX and website built by Zack MacTavish.",url:`${m}/AccessDirect`,image:`${m}/assets/og/access-direct-1200x630.jpg`,datePublished:"2022-10-01",keywords:["access direct","ux","brand"]},"graphic-design":{title:"Graphic Design — Portfolio | Zack MacTavish",description:"Graphic design and art pieces by Zack MacTavish, including posters, packaging, and editorial work.",url:`${m}/GraphicDesign`,image:`${m}/assets/og/graphic-design-1200x630.jpg`,keywords:["graphic design","posters","packaging"]},threepillars:{title:"ThreePillars — UX & Branding | Zack MacTavish",description:"Case study: ThreePillars — brand and web app design by Zack MacTavish.",url:`${m}/ThreePillars`,image:`${m}/assets/og/threepillars-1200x630.jpg`,keywords:["threepillars","branding","ux"]},varfaj:{title:"Varfaj Partners | UX/UI, Branding & Art Direction | Zack MacTavish",description:"Two years of freelance design work with Varfaj Partners across UX/UI, brand identity, and art direction, featuring Leysi, Three Pillars, Loud Luxury, and VaynerSports.",url:`${m}/VarfajPartners`,image:`${m}/assets/varfaj-hub/loud-luxury-intro.jpg`,keywords:["varfaj partners","avenue z","agency design","ux","ui","branding","art direction","leysi","three pillars","loud luxury","vaynersports"]},loudLuxury:{title:"Loud Luxury | Web Design & Motion Graphics | Zack MacTavish",description:"A bold website and motion system for Loud Luxury, designed through Varfaj Partners to connect merchandise, music, tour dates, and ticketing.",url:`${m}/LoudLuxury`,image:`${m}/assets/loud-luxury-case-study/home.jpg`,keywords:["loud luxury","web design","motion graphics","e-commerce","touring","ticketing","varfaj partners","avenue z"]},vaynerSports:{title:"VaynerSports | Rebrand Pitch | Zack MacTavish",description:"An exploratory VaynerSports rebrand pitch designed through Varfaj Partners, spanning UX/UI, brand direction, web design, and motion.",url:`${m}/VaynerSports`,image:`${m}/assets/vaynersports-case-study/hero.jpg`,keywords:["vaynersports","vaynerx","rebrand pitch","sports agency","ux","ui","brand direction","web design","varfaj partners"]},microsoft:{title:"Microsoft — Project | Zack MacTavish",description:"Case study: Microsoft — UX and visual design work by Zack MacTavish. Password protected.",url:`${m}/Microsoft`,image:y.defaultImage,keywords:["microsoft","branding","ux","password protected"]},seagate:{title:"Seagate Technology — Web & Product Launch Design | Zack MacTavish",description:"Case study: Licensed gaming product launches and Lyve Cloud storage communication designed for Seagate Technology.",url:`${m}/Seagate`,image:`${m}/assets/seagate-case-study/gow-hero.jpg`,keywords:["seagate","god of war ragnarok","star wars","firecuda","lyve cloud","web design","amazon a+ content"]},"business-connectors":{title:"Business Connectors — Microsoft | Zack MacTavish",description:"Case study: Microsoft Business Connectors — UX & product design by Zack MacTavish.",url:`${m}/BusinessConnectors`,image:y.defaultImage,keywords:["microsoft","business connectors","ux"]},phia:{title:"Phia — Microsoft Shopping | Zack MacTavish",description:"Case study: A curated pre-owned luxury experience integrating Phia into Microsoft Shopping discovery, retailer, and product-page flows.",url:`${m}/Phia`,image:`${m}/assets/og/phia-1200x630.jpg`,keywords:["microsoft","phia","luxury resale","pre-owned","shopping","ux","product design"]},"copilot-pay":{title:"Copilot Pay — Microsoft | Zack MacTavish",description:"Case study: Microsoft Copilot Pay — UX & product design by Zack MacTavish.",url:`${m}/CopilotPay`,image:y.defaultImage,keywords:["microsoft","copilot","pay","ux"]},journeys:{title:"Journeys — Microsoft | Zack MacTavish",description:"Case study: Microsoft Journeys — UX & product design by Zack MacTavish.",url:`${m}/Journeys`,image:y.defaultImage,keywords:["microsoft","journeys","ux"]},"cashback-hub":{title:"Cashback Hub & Edge Shoreline — Microsoft | Zack MacTavish",description:"Case study: Microsoft Shopping Cashback Hub and Edge Shoreline companion pane — interaction, visual, and cross-platform design by Zack MacTavish.",url:`${m}/CashbackHub`,image:`${m}/assets/cashback-hub/hero.jpg`,keywords:["microsoft","cashback hub","edge shoreline","shopping","ux"]},"video-commerce":{title:"Video Commerce — Bing Shopping | Zack MacTavish",description:"Case study: Bing Shopping video commerce initiative — live and short-form video integrations across U.S., Japan, and India pilots with TalkShopLive, QVC Japan, and Roposo.",url:`${m}/VideoCommerce`,image:`${m}/assets/video-commerce/Full Frame.jpg`,keywords:["microsoft","bing shopping","video commerce","live shopping","talkshoplive","roposo","ux"]},"windows-notifications":{title:"Windows Notifications — Microsoft | Zack MacTavish",description:"Case study: Commerce notifications in Windows OS -- price drops, back-in-stock, cash back, and coupons designed for the taskbar and Windows notification surface.",url:`${m}/WindowsNotifications`,image:`${m}/assets/windows-notifications/Prong 2 price drop.png`,keywords:["microsoft","windows","notifications","commerce","cashback","ux","product design"]},"ironlak-internship":{title:"Ironlak Internship — Brand Identity & Production Design | Zack MacTavish",description:"Case study: A multilingual wordmark identity system for Ironlak, an Australian spray paint company, and three months of production design across print, digital, and outdoor.",url:`${m}/IronlakInternship`,image:`${m}/assets/ironlak-internship/IronlakAdvert2.jpg`,keywords:["ironlak","brand identity","graphic design","production design","graffiti","internship"]},partnerships:{title:"Partnership Pitches — Microsoft Copilot | Zack MacTavish",description:"Case study: AI-to-AI and AI-to-business integration patterns for Microsoft Copilot — bespoke partnership flows designed for Walmart, Amazon, Lyft, and DoorDash.",url:`${m}/Partnerships`,image:y.defaultImage,keywords:["microsoft","copilot","partnerships","walmart","amazon","lyft","doordash","ai","ux","product design"]},resume:{title:"Resume — Zack MacTavish",description:"Resume / CV of Zack MacTavish — product & graphic designer.",url:`${m}/Resume`,image:y.defaultImage,keywords:["resume","cv","product designer","graphic designer"]}})}}});
