import{j as l}from"./three-D9NkSzoP.js";import{b as d,u as Ke,c as w,R as J}from"./vendor-D7aqownG.js";const qe=({title:e,description:t,url:r,image:n,images:i=null,type:a="website",authorName:o="Zack MacTavish",authorAlternateNames:s=["Zachary MacTavish"],sameAs:c=[],keywords:h=[],jsonLd:p=null,favicons:u=null,siteDefaults:m=null,siteName:b=null,locale:k=null,robots:j=null,themeColor:g=null,twitterSite:f=null,twitterCreator:y=null})=>(d.useEffect(()=>{e&&(document.title=e);const v=(x,R,M)=>{let P=document.querySelector(x);if(!P){P=document.createElement("meta");const be=x.match(/\[(name|property)=['"]([^'"]+)['"]\]/);be&&P.setAttribute(be[1],be[2]),document.head.appendChild(P)}P.setAttribute(R,M)};t&&(v("[name='description']","content",t),v("[property='og:description']","content",t),v("[name='twitter:description']","content",t)),h&&h.length&&v("[name='keywords']","content",Array.isArray(h)?h.join(", "):h),e&&(v("[property='og:title']","content",e),v("[name='twitter:title']","content",e)),v("[property='og:type']","content",a),r&&v("[property='og:url']","content",r);const T=b||m&&m.siteName||null,E=k||m&&m.locale||null,U=j||m&&m.robots||null,G=g||m&&m.themeColor||null,D=f||m&&m.twitterSite||null,Z=y||m&&m.twitterCreator||null;T&&v("[property='og:site_name']","content",T),E&&v("[property='og:locale']","content",E),U&&v("[name='robots']","content",U),G&&v("[name='theme-color']","content",G),D&&v("[name='twitter:site']","content",D),Z&&v("[name='twitter:creator']","content",Z);const yt=m&&m.ogImages||[],ve=i||(n?[n]:null)||yt,xe=x=>{document.querySelectorAll(x).forEach(R=>R.remove())};xe("meta[property='og:image']"),xe("meta[property='og:image:width']"),xe("meta[property='og:image:height']");let Y=null;if(ve&&ve.length?ve.forEach(x=>{let R=x;if(typeof x=="string"&&(R={url:x}),!R||!R.url)return;const M=document.createElement("meta");if(M.setAttribute("property","og:image"),M.setAttribute("content",R.url),document.head.appendChild(M),R.width){const P=document.createElement("meta");P.setAttribute("property","og:image:width"),P.setAttribute("content",String(R.width)),document.head.appendChild(P)}if(R.height){const P=document.createElement("meta");P.setAttribute("property","og:image:height"),P.setAttribute("content",String(R.height)),document.head.appendChild(P)}Y||(Y=R.url)}):n&&(v("[property='og:image']","content",n),Y=n),Y?(v("[name='twitter:image']","content",Y),v("[name='twitter:card']","content","summary_large_image")):v("[name='twitter:card']","content","summary"),r){let x=document.querySelector("link[rel='canonical']");x||(x=document.createElement("link"),x.setAttribute("rel","canonical"),document.head.appendChild(x)),x.setAttribute("href",r)}const We="seo-json-ld";let H=document.getElementById(We);const oe={"@context":"https://schema.org","@type":"Person",name:o,url:r||window.location.href};s&&s.length&&(oe.alternateName=s.length===1?s[0]:s),c&&c.length&&(oe.sameAs=c);let Q=p||oe;if(!p)Q=oe;else try{const x=p;(x["@type"]==="CreativeWork"||x["@type"]==="Article")&&!x.author&&(x.author={"@type":"Person",name:o,url:r||window.location.href},s&&s.length&&(x.author.alternateName=s.length===1?s[0]:s),c&&c.length&&(x.author.sameAs=c)),Q=x}catch{Q=p}if(H?H.text=JSON.stringify(Q):(H=document.createElement("script"),H.id=We,H.type="application/ld+json",H.text=JSON.stringify(Q),document.head.appendChild(H)),o||s&&s.length){const x=[o].concat(s||[]).filter(Boolean).join(", ");v("[name='author']","content",x)}c&&c.length&&v("[name='sameAs']","content",c.join(", "));const se=u||m&&m.favicons||null,le=x=>{document.querySelectorAll(`link[rel='${x}']`).forEach(R=>R.remove())};le("icon"),le("shortcut icon"),le("apple-touch-icon"),le("manifest"),se&&(Array.isArray(se)?se.forEach(x=>{const R=document.createElement("link");x.rel?R.setAttribute("rel",x.rel):R.setAttribute("rel",x.sizes==="180x180"?"apple-touch-icon":"icon"),x.sizes&&R.setAttribute("sizes",x.sizes),R.setAttribute("href",x.href),document.head.appendChild(R)}):Object.entries(se).forEach(([x,R])=>{const M=document.createElement("link");x==="180x180"?M.setAttribute("rel","apple-touch-icon"):M.setAttribute("rel","icon"),M.setAttribute("sizes",x),M.setAttribute("href",R),document.head.appendChild(M)}))},[e,t,r,n,a,o,s,c,h,p,u,m,b,k,j,g,f,y]),null);var _e={exports:{}},ee={},Ne;function jt(){if(Ne)return ee;Ne=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function r(n,i,a){var o=null;if(a!==void 0&&(o=""+a),i.key!==void 0&&(o=""+i.key),"key"in i){a={};for(var s in i)s!=="key"&&(a[s]=i[s])}else a=i;return i=a.ref,{$$typeof:e,type:n,key:o,ref:i!==void 0?i:null,props:a}}return ee.Fragment=t,ee.jsx=r,ee.jsxs=r,ee}var Be;function kt(){return Be||(Be=1,_e.exports=jt()),_e.exports}kt();Ke`
  html, body, * { cursor: none !important; }
`;w.div`
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
`;const Rt=w.div`
  width: 60vw;
  max-width: 1100px;
  margin: 0 auto;
  box-sizing: border-box;

  @media (max-width: 1000px) {
    width: 92vw;
  }
`,Ct=w(Rt)`
  display: grid;
  grid-template-columns: ${e=>e.columns||"0.48fr 0.52fr"};
  gap: ${e=>e.gap||"2rem"};
  align-items: ${e=>e.align||"center"};

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`,ye={fonts:{body:"Space Grotesk, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif"},spacing:{lg:"16px"},radii:{card:"18px"}};Ke`
  :root {
    /* expose some common tokens as CSS vars for non-styled consumers */
    --radius-card: ${ye.radii.card};
    --space-lg: ${ye.spacing.lg};
  }
  * { box-sizing: border-box; }
  html, body, #root { height: 100%; }
  body {
    margin: 0;
    background-color: ${e=>e.theme.backgroundColor};
    color: ${e=>e.theme.fontColor};
    font-family: ${ye.fonts.body};
  }
`;w(Ct)`
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
`;w.img`
  width: ${e=>e.$imageWidth||"86%"};
  height: auto;
  display: block;
  margin: 0;
  border-radius: ${e=>e.theme?.radii?.card||"12px"};
  overflow: hidden;
`;function S(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function I(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Ce({pathname:e="/",search:t="",hash:r=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Se(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substring(r),e=e.substring(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substring(n),e=e.substring(0,n)),e&&(t.pathname=e)}return t}function Ve(e,t,r="/"){return St(e,t,r,!1)}function St(e,t,r,n){let i=typeof t=="string"?Se(t):t,a=X(i.pathname||"/",r);if(a==null)return null;let o=Ye(e);$t(o);let s=null;for(let c=0;s==null&&c<o.length;++c){let h=Wt(a);s=Ot(o[c],h,n)}return s}function Ye(e,t=[],r=[],n="",i=!1){let a=(o,s,c=i,h)=>{let p={relativePath:h===void 0?o.path||"":h,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};if(p.relativePath.startsWith("/")){if(!p.relativePath.startsWith(n)&&c)return;S(p.relativePath.startsWith(n),`Absolute route path "${p.relativePath}" nested under path "${n}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(n.length)}let u=B([n,p.relativePath]),m=r.concat(p);o.children&&o.children.length>0&&(S(o.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${u}".`),Ye(o.children,t,m,u,c)),!(o.path==null&&!o.index)&&t.push({path:u,score:Ut(u,o.index),routesMeta:m})};return e.forEach((o,s)=>{if(o.path===""||!o.path?.includes("?"))a(o,s);else for(let c of Qe(o.path))a(o,s,!0,c)}),t}function Qe(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,i=r.endsWith("?"),a=r.replace(/\?$/,"");if(n.length===0)return i?[a,""]:[a];let o=Qe(n.join("/")),s=[];return s.push(...o.map(c=>c===""?a:[a,c].join("/"))),i&&s.push(...o),s.map(c=>e.startsWith("/")&&c===""?"/":c)}function $t(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:Mt(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}var Et=/^:[\w-]+$/,Pt=3,At=2,Lt=1,Tt=10,Dt=-2,Ie=e=>e==="*";function Ut(e,t){let r=e.split("/"),n=r.length;return r.some(Ie)&&(n+=Dt),t&&(n+=At),r.filter(i=>!Ie(i)).reduce((i,a)=>i+(Et.test(a)?Pt:a===""?Lt:Tt),n)}function Mt(e,t){return e.length===t.length&&e.slice(0,-1).every((r,n)=>r===t[n])?e[e.length-1]-t[t.length-1]:0}function Ot(e,t,r=!1){let{routesMeta:n}=e,i={},a="/",o=[];for(let s=0;s<n.length;++s){let c=n[s],h=s===n.length-1,p=a==="/"?t:t.slice(a.length)||"/",u=he({path:c.relativePath,caseSensitive:c.caseSensitive,end:h},p),m=c.route;if(!u&&h&&r&&!n[n.length-1].route.index&&(u=he({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},p)),!u)return null;Object.assign(i,u.params),o.push({params:i,pathname:B([a,u.pathname]),pathnameBase:It(B([a,u.pathnameBase])),route:m}),u.pathnameBase!=="/"&&(a=B([a,u.pathnameBase]))}return o}function he(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=zt(e.path,e.caseSensitive,e.end),i=t.match(r);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:n.reduce((c,{paramName:h,isOptional:p},u)=>{if(h==="*"){let b=s[u]||"";o=a.slice(0,a.length-b.length).replace(/(.)\/+$/,"$1")}const m=s[u];return p&&!m?c[h]=void 0:c[h]=(m||"").replace(/%2F/g,"/"),c},{}),pathname:a,pathnameBase:o,pattern:e}}function zt(e,t=!1,r=!0){I(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let n=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,o,s)=>(n.push({paramName:o,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(n.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),n]}function Wt(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return I(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function X(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}var _t=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Nt(e,t="/"){let{pathname:r,search:n="",hash:i=""}=typeof e=="string"?Se(e):e,a;return r?(r=r.replace(/\/\/+/g,"/"),r.startsWith("/")?a=Fe(r.substring(1),"/"):a=Fe(r,t)):a=t,{pathname:a,search:Ft(n),hash:Gt(i)}}function Fe(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(n=>{n===".."?r.length>1&&r.pop():n!=="."&&r.push(n)}),r.length>1?r.join("/"):"/"}function je(e,t,r,n){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(n)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Bt(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function et(e){let t=Bt(e);return t.map((r,n)=>n===t.length-1?r.pathname:r.pathnameBase)}function tt(e,t,r,n=!1){let i;typeof e=="string"?i=Se(e):(i={...e},S(!i.pathname||!i.pathname.includes("?"),je("?","pathname","search",i)),S(!i.pathname||!i.pathname.includes("#"),je("#","pathname","hash",i)),S(!i.search||!i.search.includes("#"),je("#","search","hash",i)));let a=e===""||i.pathname==="",o=a?"/":i.pathname,s;if(o==null)s=r;else{let u=t.length-1;if(!n&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),u-=1;i.pathname=m.join("/")}s=u>=0?t[u]:"/"}let c=Nt(i,s),h=o&&o!=="/"&&o.endsWith("/"),p=(a||o===".")&&r.endsWith("/");return!c.pathname.endsWith("/")&&(h||p)&&(c.pathname+="/"),c}var B=e=>e.join("/").replace(/\/\/+/g,"/"),It=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Ft=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Gt=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,Zt=class{constructor(e,t,r,n=!1){this.status=e,this.statusText=t||"",this.internal=n,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}};function Xt(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}function Ht(e){return e.map(t=>t.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var rt=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function nt(e,t){let r=e;if(typeof r!="string"||!_t.test(r))return{absoluteURL:void 0,isExternal:!1,to:r};let n=r,i=!1;if(rt)try{let a=new URL(window.location.href),o=r.startsWith("//")?new URL(a.protocol+r):new URL(r),s=X(o.pathname,t);o.origin===a.origin&&s!=null?r=s+o.search+o.hash:i=!0}catch{I(!1,`<Link to="${r}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:n,isExternal:i,to:r}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var at=["POST","PUT","PATCH","DELETE"];new Set(at);var Jt=["GET",...at];new Set(Jt);var V=d.createContext(null);V.displayName="DataRouter";var ge=d.createContext(null);ge.displayName="DataRouterState";var Kt=d.createContext(!1),it=d.createContext({isTransitioning:!1});it.displayName="ViewTransition";var qt=d.createContext(new Map);qt.displayName="Fetchers";var Vt=d.createContext(null);Vt.displayName="Await";var z=d.createContext(null);z.displayName="Navigation";var $e=d.createContext(null);$e.displayName="Location";var F=d.createContext({outlet:null,matches:[],isDataRoute:!1});F.displayName="Route";var Ee=d.createContext(null);Ee.displayName="RouteError";var ot="REACT_ROUTER_ERROR",Yt="REDIRECT",Qt="ROUTE_ERROR_RESPONSE";function er(e){if(e.startsWith(`${ot}:${Yt}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.location=="string"&&typeof t.reloadDocument=="boolean"&&typeof t.replace=="boolean")return t}catch{}}function tr(e){if(e.startsWith(`${ot}:${Qt}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string")return new Zt(t.status,t.statusText,t.data)}catch{}}function rr(e,{relative:t}={}){S(fe(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:n}=d.useContext(z),{hash:i,pathname:a,search:o}=ie(e,{relative:t}),s=a;return r!=="/"&&(s=a==="/"?r:B([r,a])),n.createHref({pathname:s,search:o,hash:i})}function fe(){return d.useContext($e)!=null}function q(){return S(fe(),"useLocation() may be used only in the context of a <Router> component."),d.useContext($e).location}var st="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function lt(e){d.useContext(z).static||d.useLayoutEffect(e)}function nr(){let{isDataRoute:e}=d.useContext(F);return e?fr():ar()}function ar(){S(fe(),"useNavigate() may be used only in the context of a <Router> component.");let e=d.useContext(V),{basename:t,navigator:r}=d.useContext(z),{matches:n}=d.useContext(F),{pathname:i}=q(),a=JSON.stringify(et(n)),o=d.useRef(!1);return lt(()=>{o.current=!0}),d.useCallback((s,c={})=>{if(I(o.current,st),!o.current)return;if(typeof s=="number"){r.go(s);return}let h=tt(s,JSON.parse(a),i,c.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:B([t,h.pathname])),(c.replace?r.replace:r.push)(h,c.state,c)},[t,r,a,i,e])}d.createContext(null);function ie(e,{relative:t}={}){let{matches:r}=d.useContext(F),{pathname:n}=q(),i=JSON.stringify(et(r));return d.useMemo(()=>tt(e,JSON.parse(i),n,t==="path"),[e,i,n,t])}function ir(e,t,r,n,i){S(fe(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=d.useContext(z),{matches:o}=d.useContext(F),s=o[o.length-1],c=s?s.params:{},h=s?s.pathname:"/",p=s?s.pathnameBase:"/",u=s&&s.route;{let f=u&&u.path||"";dt(h,!u||f.endsWith("*")||f.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${f}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${f}"> to <Route path="${f==="/"?"*":`${f}/*`}">.`)}let m=q(),b;b=m;let k=b.pathname||"/",j=k;if(p!=="/"){let f=p.replace(/^\//,"").split("/");j="/"+k.replace(/^\//,"").split("/").slice(f.length).join("/")}let g=Ve(e,{pathname:j});return I(u||g!=null,`No routes matched location "${b.pathname}${b.search}${b.hash}" `),I(g==null||g[g.length-1].route.element!==void 0||g[g.length-1].route.Component!==void 0||g[g.length-1].route.lazy!==void 0,`Matched leaf route at location "${b.pathname}${b.search}${b.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),dr(g&&g.map(f=>Object.assign({},f,{params:Object.assign({},c,f.params),pathname:B([p,a.encodeLocation?a.encodeLocation(f.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:f.pathname]),pathnameBase:f.pathnameBase==="/"?p:B([p,a.encodeLocation?a.encodeLocation(f.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:f.pathnameBase])})),o,r,n,i)}function or(){let e=gr(),t=Xt(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,n="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:n},a={padding:"2px 4px",backgroundColor:n},o=null;return console.error("Error handled by React Router default ErrorBoundary:",e),o=d.createElement(d.Fragment,null,d.createElement("p",null,"💿 Hey developer 👋"),d.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",d.createElement("code",{style:a},"ErrorBoundary")," or"," ",d.createElement("code",{style:a},"errorElement")," prop on your route.")),d.createElement(d.Fragment,null,d.createElement("h2",null,"Unexpected Application Error!"),d.createElement("h3",{style:{fontStyle:"italic"}},t),r?d.createElement("pre",{style:i},r):null,o)}var sr=d.createElement(or,null),ct=class extends d.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error("React Router caught the following error during render",e)}render(){let e=this.state.error;if(this.context&&typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){const r=tr(e.digest);r&&(e=r)}let t=e!==void 0?d.createElement(F.Provider,{value:this.props.routeContext},d.createElement(Ee.Provider,{value:e,children:this.props.component})):this.props.children;return this.context?d.createElement(lr,{error:e},t):t}};ct.contextType=Kt;var ke=new WeakMap;function lr({children:e,error:t}){let{basename:r}=d.useContext(z);if(typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){let n=er(t.digest);if(n){let i=ke.get(t);if(i)throw i;let a=nt(n.location,r);if(rt&&!ke.get(t))if(a.isExternal||n.reloadDocument)window.location.href=a.absoluteURL||a.to;else{const o=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(a.to,{replace:n.replace}));throw ke.set(t,o),o}return d.createElement("meta",{httpEquiv:"refresh",content:`0;url=${a.absoluteURL||a.to}`})}}return e}function cr({routeContext:e,match:t,children:r}){let n=d.useContext(V);return n&&n.static&&n.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(n.staticContext._deepestRenderedBoundaryId=t.route.id),d.createElement(F.Provider,{value:e},r)}function dr(e,t=[],r=null,n=null,i=null){if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let a=e,o=r?.errors;if(o!=null){let p=a.findIndex(u=>u.route.id&&o?.[u.route.id]!==void 0);S(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),a=a.slice(0,Math.min(a.length,p+1))}let s=!1,c=-1;if(r)for(let p=0;p<a.length;p++){let u=a[p];if((u.route.HydrateFallback||u.route.hydrateFallbackElement)&&(c=p),u.route.id){let{loaderData:m,errors:b}=r,k=u.route.loader&&!m.hasOwnProperty(u.route.id)&&(!b||b[u.route.id]===void 0);if(u.route.lazy||k){s=!0,c>=0?a=a.slice(0,c+1):a=[a[0]];break}}}let h=r&&n?(p,u)=>{n(p,{location:r.location,params:r.matches?.[0]?.params??{},unstable_pattern:Ht(r.matches),errorInfo:u})}:void 0;return a.reduceRight((p,u,m)=>{let b,k=!1,j=null,g=null;r&&(b=o&&u.route.id?o[u.route.id]:void 0,j=u.route.errorElement||sr,s&&(c<0&&m===0?(dt("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),k=!0,g=null):c===m&&(k=!0,g=u.route.hydrateFallbackElement||null)));let f=t.concat(a.slice(0,m+1)),y=()=>{let v;return b?v=j:k?v=g:u.route.Component?v=d.createElement(u.route.Component,null):u.route.element?v=u.route.element:v=p,d.createElement(cr,{match:u,routeContext:{outlet:p,matches:f,isDataRoute:r!=null},children:v})};return r&&(u.route.ErrorBoundary||u.route.errorElement||m===0)?d.createElement(ct,{location:r.location,revalidation:r.revalidation,component:j,error:b,children:y(),routeContext:{outlet:null,matches:f,isDataRoute:!0},onError:h}):y()},null)}function Pe(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ur(e){let t=d.useContext(V);return S(t,Pe(e)),t}function hr(e){let t=d.useContext(ge);return S(t,Pe(e)),t}function pr(e){let t=d.useContext(F);return S(t,Pe(e)),t}function Ae(e){let t=pr(e),r=t.matches[t.matches.length-1];return S(r.route.id,`${e} can only be used on routes that contain a unique "id"`),r.route.id}function mr(){return Ae("useRouteId")}function gr(){let e=d.useContext(Ee),t=hr("useRouteError"),r=Ae("useRouteError");return e!==void 0?e:t.errors?.[r]}function fr(){let{router:e}=ur("useNavigate"),t=Ae("useNavigate"),r=d.useRef(!1);return lt(()=>{r.current=!0}),d.useCallback(async(n,i={})=>{I(r.current,st),r.current&&(typeof n=="number"?await e.navigate(n):await e.navigate(n,{fromRouteId:t,...i}))},[e,t])}var Ge={};function dt(e,t,r){!t&&!Ge[e]&&(Ge[e]=!0,I(!1,r))}d.memo(wr);function wr({routes:e,future:t,state:r,onError:n}){return ir(e,void 0,r,n,t)}var de="get",ue="application/x-www-form-urlencoded";function we(e){return typeof HTMLElement<"u"&&e instanceof HTMLElement}function vr(e){return we(e)&&e.tagName.toLowerCase()==="button"}function xr(e){return we(e)&&e.tagName.toLowerCase()==="form"}function br(e){return we(e)&&e.tagName.toLowerCase()==="input"}function yr(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function jr(e,t){return e.button===0&&(!t||t==="_self")&&!yr(e)}var ce=null;function kr(){if(ce===null)try{new FormData(document.createElement("form"),0),ce=!1}catch{ce=!0}return ce}var Rr=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Re(e){return e!=null&&!Rr.has(e)?(I(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ue}"`),null):e}function Cr(e,t){let r,n,i,a,o;if(xr(e)){let s=e.getAttribute("action");n=s?X(s,t):null,r=e.getAttribute("method")||de,i=Re(e.getAttribute("enctype"))||ue,a=new FormData(e)}else if(vr(e)||br(e)&&(e.type==="submit"||e.type==="image")){let s=e.form;if(s==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let c=e.getAttribute("formaction")||s.getAttribute("action");if(n=c?X(c,t):null,r=e.getAttribute("formmethod")||s.getAttribute("method")||de,i=Re(e.getAttribute("formenctype"))||Re(s.getAttribute("enctype"))||ue,a=new FormData(s,e),!kr()){let{name:h,type:p,value:u}=e;if(p==="image"){let m=h?`${h}.`:"";a.append(`${m}x`,"0"),a.append(`${m}y`,"0")}else h&&a.append(h,u)}}else{if(we(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=de,n=null,i=ue,o=e}return a&&i==="text/plain"&&(o=a,a=void 0),{action:n,method:r.toLowerCase(),encType:i,formData:a,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Le(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Sr(e,t,r,n){let i=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return r?i.pathname.endsWith("/")?i.pathname=`${i.pathname}_.${n}`:i.pathname=`${i.pathname}.${n}`:i.pathname==="/"?i.pathname=`_root.${n}`:t&&X(i.pathname,t)==="/"?i.pathname=`${t.replace(/\/$/,"")}/_root.${n}`:i.pathname=`${i.pathname.replace(/\/$/,"")}.${n}`,i}async function $r(e,t){if(e.id in t)return t[e.id];try{let r=await import(e.module);return t[e.id]=r,r}catch(r){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Er(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function Pr(e,t,r){let n=await Promise.all(e.map(async i=>{let a=t.routes[i.route.id];if(a){let o=await $r(a,r);return o.links?o.links():[]}return[]}));return Dr(n.flat(1).filter(Er).filter(i=>i.rel==="stylesheet"||i.rel==="preload").map(i=>i.rel==="stylesheet"?{...i,rel:"prefetch",as:"style"}:{...i,rel:"prefetch"}))}function Ze(e,t,r,n,i,a){let o=(c,h)=>r[h]?c.route.id!==r[h].route.id:!0,s=(c,h)=>r[h].pathname!==c.pathname||r[h].route.path?.endsWith("*")&&r[h].params["*"]!==c.params["*"];return a==="assets"?t.filter((c,h)=>o(c,h)||s(c,h)):a==="data"?t.filter((c,h)=>{let p=n.routes[c.route.id];if(!p||!p.hasLoader)return!1;if(o(c,h)||s(c,h))return!0;if(c.route.shouldRevalidate){let u=c.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:r[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:c.params,defaultShouldRevalidate:!0});if(typeof u=="boolean")return u}return!0}):[]}function Ar(e,t,{includeHydrateFallback:r}={}){return Lr(e.map(n=>{let i=t.routes[n.route.id];if(!i)return[];let a=[i.module];return i.clientActionModule&&(a=a.concat(i.clientActionModule)),i.clientLoaderModule&&(a=a.concat(i.clientLoaderModule)),r&&i.hydrateFallbackModule&&(a=a.concat(i.hydrateFallbackModule)),i.imports&&(a=a.concat(i.imports)),a}).flat(1))}function Lr(e){return[...new Set(e)]}function Tr(e){let t={},r=Object.keys(e).sort();for(let n of r)t[n]=e[n];return t}function Dr(e,t){let r=new Set;return new Set(t),e.reduce((n,i)=>{let a=JSON.stringify(Tr(i));return r.has(a)||(r.add(a),n.push({key:a,link:i})),n},[])}function ut(){let e=d.useContext(V);return Le(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function Ur(){let e=d.useContext(ge);return Le(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Te=d.createContext(void 0);Te.displayName="FrameworkContext";function ht(){let e=d.useContext(Te);return Le(e,"You must render this element inside a <HydratedRouter> element"),e}function Mr(e,t){let r=d.useContext(Te),[n,i]=d.useState(!1),[a,o]=d.useState(!1),{onFocus:s,onBlur:c,onMouseEnter:h,onMouseLeave:p,onTouchStart:u}=t,m=d.useRef(null);d.useEffect(()=>{if(e==="render"&&o(!0),e==="viewport"){let j=f=>{f.forEach(y=>{o(y.isIntersecting)})},g=new IntersectionObserver(j,{threshold:.5});return m.current&&g.observe(m.current),()=>{g.disconnect()}}},[e]),d.useEffect(()=>{if(n){let j=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(j)}}},[n]);let b=()=>{i(!0)},k=()=>{i(!1),o(!1)};return r?e!=="intent"?[a,m,{}]:[a,m,{onFocus:te(s,b),onBlur:te(c,k),onMouseEnter:te(h,b),onMouseLeave:te(p,k),onTouchStart:te(u,b)}]:[!1,m,{}]}function te(e,t){return r=>{e&&e(r),r.defaultPrevented||t(r)}}function Or({page:e,...t}){let{router:r}=ut(),n=d.useMemo(()=>Ve(r.routes,e,r.basename),[r.routes,e,r.basename]);return n?d.createElement(Wr,{page:e,matches:n,...t}):null}function zr(e){let{manifest:t,routeModules:r}=ht(),[n,i]=d.useState([]);return d.useEffect(()=>{let a=!1;return Pr(e,t,r).then(o=>{a||i(o)}),()=>{a=!0}},[e,t,r]),n}function Wr({page:e,matches:t,...r}){let n=q(),{future:i,manifest:a,routeModules:o}=ht(),{basename:s}=ut(),{loaderData:c,matches:h}=Ur(),p=d.useMemo(()=>Ze(e,t,h,a,n,"data"),[e,t,h,a,n]),u=d.useMemo(()=>Ze(e,t,h,a,n,"assets"),[e,t,h,a,n]),m=d.useMemo(()=>{if(e===n.pathname+n.search+n.hash)return[];let j=new Set,g=!1;if(t.forEach(y=>{let v=a.routes[y.route.id];!v||!v.hasLoader||(!p.some(T=>T.route.id===y.route.id)&&y.route.id in c&&o[y.route.id]?.shouldRevalidate||v.hasClientLoader?g=!0:j.add(y.route.id))}),j.size===0)return[];let f=Sr(e,s,i.unstable_trailingSlashAwareDataRequests,"data");return g&&j.size>0&&f.searchParams.set("_routes",t.filter(y=>j.has(y.route.id)).map(y=>y.route.id).join(",")),[f.pathname+f.search]},[s,i.unstable_trailingSlashAwareDataRequests,c,n,a,p,t,e,o]),b=d.useMemo(()=>Ar(u,a),[u,a]),k=zr(u);return d.createElement(d.Fragment,null,m.map(j=>d.createElement("link",{key:j,rel:"prefetch",as:"fetch",href:j,...r})),b.map(j=>d.createElement("link",{key:j,rel:"modulepreload",href:j,...r})),k.map(({key:j,link:g})=>d.createElement("link",{key:j,nonce:r.nonce,...g,crossOrigin:g.crossOrigin??r.crossOrigin})))}function _r(...e){return t=>{e.forEach(r=>{typeof r=="function"?r(t):r!=null&&(r.current=t)})}}var Nr=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Nr&&(window.__reactRouterVersion="7.13.0")}catch{}var pt=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,De=d.forwardRef(function({onClick:e,discover:t="render",prefetch:r="none",relative:n,reloadDocument:i,replace:a,state:o,target:s,to:c,preventScrollReset:h,viewTransition:p,unstable_defaultShouldRevalidate:u,...m},b){let{basename:k,unstable_useTransitions:j}=d.useContext(z),g=typeof c=="string"&&pt.test(c),f=nt(c,k);c=f.to;let y=rr(c,{relative:n}),[v,T,E]=Mr(r,m),U=Gr(c,{replace:a,state:o,target:s,preventScrollReset:h,relative:n,viewTransition:p,unstable_defaultShouldRevalidate:u,unstable_useTransitions:j});function G(Z){e&&e(Z),Z.defaultPrevented||U(Z)}let D=d.createElement("a",{...m,...E,href:f.absoluteURL||y,onClick:f.isExternal||i?e:G,ref:_r(b,T),target:s,"data-discover":!g&&t==="render"?"true":void 0});return v&&!g?d.createElement(d.Fragment,null,D,d.createElement(Or,{page:y})):D});De.displayName="Link";var Br=d.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:r="",end:n=!1,style:i,to:a,viewTransition:o,children:s,...c},h){let p=ie(a,{relative:c.relative}),u=q(),m=d.useContext(ge),{navigator:b,basename:k}=d.useContext(z),j=m!=null&&Kr(p)&&o===!0,g=b.encodeLocation?b.encodeLocation(p).pathname:p.pathname,f=u.pathname,y=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;t||(f=f.toLowerCase(),y=y?y.toLowerCase():null,g=g.toLowerCase()),y&&k&&(y=X(y,k)||y);const v=g!=="/"&&g.endsWith("/")?g.length-1:g.length;let T=f===g||!n&&f.startsWith(g)&&f.charAt(v)==="/",E=y!=null&&(y===g||!n&&y.startsWith(g)&&y.charAt(g.length)==="/"),U={isActive:T,isPending:E,isTransitioning:j},G=T?e:void 0,D;typeof r=="function"?D=r(U):D=[r,T?"active":null,E?"pending":null,j?"transitioning":null].filter(Boolean).join(" ");let Z=typeof i=="function"?i(U):i;return d.createElement(De,{...c,"aria-current":G,className:D,ref:h,style:Z,to:a,viewTransition:o},typeof s=="function"?s(U):s)});Br.displayName="NavLink";var Ir=d.forwardRef(({discover:e="render",fetcherKey:t,navigate:r,reloadDocument:n,replace:i,state:a,method:o=de,action:s,onSubmit:c,relative:h,preventScrollReset:p,viewTransition:u,unstable_defaultShouldRevalidate:m,...b},k)=>{let{unstable_useTransitions:j}=d.useContext(z),g=Hr(),f=Jr(s,{relative:h}),y=o.toLowerCase()==="get"?"get":"post",v=typeof s=="string"&&pt.test(s),T=E=>{if(c&&c(E),E.defaultPrevented)return;E.preventDefault();let U=E.nativeEvent.submitter,G=U?.getAttribute("formmethod")||o,D=()=>g(U||E.currentTarget,{fetcherKey:t,method:G,navigate:r,replace:i,state:a,relative:h,preventScrollReset:p,viewTransition:u,unstable_defaultShouldRevalidate:m});j&&r!==!1?d.startTransition(()=>D()):D()};return d.createElement("form",{ref:k,method:y,action:f,onSubmit:n?c:T,...b,"data-discover":!v&&e==="render"?"true":void 0})});Ir.displayName="Form";function Fr(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function mt(e){let t=d.useContext(V);return S(t,Fr(e)),t}function Gr(e,{target:t,replace:r,state:n,preventScrollReset:i,relative:a,viewTransition:o,unstable_defaultShouldRevalidate:s,unstable_useTransitions:c}={}){let h=nr(),p=q(),u=ie(e,{relative:a});return d.useCallback(m=>{if(jr(m,t)){m.preventDefault();let b=r!==void 0?r:Ce(p)===Ce(u),k=()=>h(e,{replace:b,state:n,preventScrollReset:i,relative:a,viewTransition:o,unstable_defaultShouldRevalidate:s});c?d.startTransition(()=>k()):k()}},[p,h,u,r,n,t,e,i,a,o,s,c])}var Zr=0,Xr=()=>`__${String(++Zr)}__`;function Hr(){let{router:e}=mt("useSubmit"),{basename:t}=d.useContext(z),r=mr(),n=e.fetch,i=e.navigate;return d.useCallback(async(a,o={})=>{let{action:s,method:c,encType:h,formData:p,body:u}=Cr(a,t);if(o.navigate===!1){let m=o.fetcherKey||Xr();await n(m,r,o.action||s,{unstable_defaultShouldRevalidate:o.unstable_defaultShouldRevalidate,preventScrollReset:o.preventScrollReset,formData:p,body:u,formMethod:o.method||c,formEncType:o.encType||h,flushSync:o.flushSync})}else await i(o.action||s,{unstable_defaultShouldRevalidate:o.unstable_defaultShouldRevalidate,preventScrollReset:o.preventScrollReset,formData:p,body:u,formMethod:o.method||c,formEncType:o.encType||h,replace:o.replace,state:o.state,fromRouteId:r,flushSync:o.flushSync,viewTransition:o.viewTransition})},[n,i,t,r])}function Jr(e,{relative:t}={}){let{basename:r}=d.useContext(z),n=d.useContext(F);S(n,"useFormAction must be used inside a RouteContext");let[i]=n.matches.slice(-1),a={...ie(e||".",{relative:t})},o=q();if(e==null){a.search=o.search;let s=new URLSearchParams(a.search),c=s.getAll("index");if(c.some(h=>h==="")){s.delete("index"),c.filter(p=>p).forEach(p=>s.append("index",p));let h=s.toString();a.search=h?`?${h}`:""}}return(!e||e===".")&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(a.pathname=a.pathname==="/"?r:B([r,a.pathname])),Ce(a)}function Kr(e,{relative:t}={}){let r=d.useContext(it);S(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:n}=mt("useViewTransitionState"),i=ie(e,{relative:t});if(!r.isTransitioning)return!1;let a=X(r.currentLocation.pathname,n)||r.currentLocation.pathname,o=X(r.nextLocation.pathname,n)||r.nextLocation.pathname;return he(i.pathname,o)!=null||he(i.pathname,a)!=null}w.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(6px);
  position: fixed;
  width: 100vw;
  height: 8vh;
  padding: 0 3vw;
  z-index: 1000;
`;w.div`
  display: flex;
  align-items: center;
`;w.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
`;w.li`
  position: relative;
  white-space: nowrap;
  &:hover::after {
    content: '';
    position: absolute;
    left: 0;
    top: 100%;
    width: 100%;
    height: 24px;
    background: transparent;
    pointer-events: auto;
    z-index: 999;
  }
  @media (hover: hover) {
    &:hover > div {
      display: block;
    }
  }
`;w.span`
  color: #a6d1ca;
  font-weight: 800;
  font-size: 1.2rem;
  text-decoration: none;
  padding: 0.5rem 0;
  transition: all 0.3s ease;
  cursor: default;
  @media (hover: none) {
    cursor: pointer;
  }
`;w.div`
  position: absolute;
  top: calc(100% + 24px);
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(6px);
  border-radius: 0 0 0.25rem 0.25rem;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  display: ${e=>e.$open?"block":"none"};
  min-width: 10rem;
  z-index: 1000;
`;w(De)`
  display: block;
  padding: 0.75rem 1rem;
  color: white;
  text-decoration: none;
  transition: background-color 0.2s ease, color 0.2s ease;
  &:hover {
    background-color: rgba(166, 209, 202, 0.4);
    color: white;
  }
`;w.img`
  height: 2.5rem;
`;const C="https://mactavish.xyz",O={name:"Zack MacTavish",url:C,defaultImage:`${C}/assets/og/website-logoresolutions-1200x630.png`,sameAs:["https://dribbble.com/Zmactavish","https://www.instagram.com/zackmichaelmactavish","https://www.linkedin.com/in/zacharymactavish/","https://github.com/ZackMacTavish","https://medium.com/@zmactavish"],keywords:["product design","graphic design","UX","portfolio","Zack MacTavish"]},$={landing:{title:`${O.name} — Product & Graphic Designer`,description:"Product & graphic designer focused on brand, UX, and digital experiences. View work and contact.",url:`${C}/`,image:O.defaultImage,keywords:["portfolio","home","design","Zack MacTavish"]},about:{title:`About — ${O.name}`,description:"About Zack MacTavish — product & graphic designer. Learn about my background, work, and exhibitions.",url:`${C}/about`,image:O.defaultImage,keywords:["about","bio","background"]},giga:{title:"Giga — UX/UI & Branding | Zack MacTavish",description:"Case study: Giga — UX/UI, branding, and product design by Zack MacTavish.",url:`${C}/projects/giga`,image:`${C}/assets/Giga—Macbookv2.png`,datePublished:"2024-10-01",keywords:["giga","product design","ux","branding"]},outsource:{title:"Outsource — UX/UI & Branding | Zack MacTavish",description:"Case study: Outsource — branding, websites and UX work by Zack MacTavish.",url:`${C}/projects/outsource`,image:`${C}/assets/Outsource—Macbook.png`,datePublished:"2023-08-01",keywords:["outsource","branding","ux"]},piton:{title:"Piton — Project | Zack MacTavish",description:"Case study: Piton — UX and visual design work by Zack MacTavish.",url:`${C}/projects/piton`,image:`${C}/assets/Piton—Screens.jpg`,datePublished:"2023-02-01",keywords:["piton","branding","app design"]},ux:{title:"UX — Product & UX Projects | Zack MacTavish",description:"Portfolio of UX and product design projects by Zack MacTavish.",url:`${C}/projects/ux`,image:`${C}/assets/Giga—mockup.jpg`,keywords:["ux","product design"]},"access-direct":{title:"Access Direct — UX & Brand | Zack MacTavish",description:"Case study: Access Direct — brand, UX and website built by Zack MacTavish.",url:`${C}/projects/access-direct`,image:`${C}/assets/AD—Macs.jpg`,datePublished:"2022-10-01",keywords:["access direct","ux","brand"]},"graphic-design":{title:"Graphic Design — Portfolio | Zack MacTavish",description:"Graphic design and art pieces by Zack MacTavish, including posters, packaging, and editorial work.",url:`${C}/projects/graphic-design`,image:`${C}/assets/Cover.png`,keywords:["graphic design","posters","packaging"]},threepillars:{title:"ThreePillars — UX & Branding | Zack MacTavish",description:"Case study: ThreePillars — brand and web app design by Zack MacTavish.",url:`${C}/projects/threepillars`,image:`${C}/assets/ThreePillars—Macbook.png`,keywords:["threepillars","branding","ux"]},microsoft:{title:"Microsoft — Project | Zack MacTavish",description:"Case study: Microsoft — UX and visual design work by Zack MacTavish. Password protected.",url:`${C}/projects/microsoft`,image:O.defaultImage,keywords:["microsoft","branding","ux","password protected"]}};var gt={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Xe=J.createContext&&J.createContext(gt),qr=["attr","size","title"];function Vr(e,t){if(e==null)return{};var r=Yr(e,t),n,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function Yr(e,t){if(e==null)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}function pe(){return pe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},pe.apply(this,arguments)}function He(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function me(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?He(Object(r),!0).forEach(function(n){Qr(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):He(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Qr(e,t,r){return t=en(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function en(e){var t=tn(e,"string");return typeof t=="symbol"?t:t+""}function tn(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function ft(e){return e&&e.map((t,r)=>J.createElement(t.tag,me({key:r},t.attr),ft(t.child)))}function wt(e){return t=>J.createElement(rn,pe({attr:me({},e.attr)},t),ft(e.child))}function rn(e){var t=r=>{var{attr:n,size:i,title:a}=e,o=Vr(e,qr),s=i||r.size||"1em",c;return r.className&&(c=r.className),e.className&&(c=(c?c+" ":"")+e.className),J.createElement("svg",pe({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,n,o,{className:c,style:me(me({color:e.color||r.color},r.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),a&&J.createElement("title",null,a),e.children)};return Xe!==void 0?J.createElement(Xe.Consumer,null,r=>t(r)):t(gt)}function nn(e){return wt({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"7",y1:"17",x2:"17",y2:"7"},child:[]},{tag:"polyline",attr:{points:"7 7 17 7 17 17"},child:[]}]})(e)}function ua(e){return wt({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M7 11V7a5 5 0 0 1 10 0v4"},child:[]}]})(e)}const an=w.div`
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
`,on=w.div`
  flex: 1.6 1 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  gap: 0.5em;
  height: 100%;
`,sn=w.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: auto;
  max-width: none;
  @media (max-width: 1000px) {
    justify-content: center;
    width: 100%;
  }
`;function vt({title:e,imageBaseName:t,imageSrc:r,imageExt:n="png",imageAlt:i="",$imageWidth:a="38vw",buttons:o=[],divider:s=!0}){return l.jsxs(an,{children:[l.jsxs(on,{children:[l.jsx(bt,{style:{fontSize:"2.8rem",marginBottom:"0.1em"},children:e}),s&&l.jsx("div",{style:{height:"1px",background:"#e0e0e0",width:"48px",margin:"0.1em 0 0.3em 0"}}),l.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.3em 0.7em",marginBottom:"0.5em",maxWidth:"520px",width:"auto",alignItems:"center",justifyContent:"flex-start"},children:o.map(({href:c,label:h},p)=>l.jsxs(xt,{href:c,target:"_blank",rel:"noopener noreferrer",children:[h," ",l.jsx(nn,{style:{marginLeft:6,fontSize:"1.2em"}})]},p))})]}),l.jsx(sn,{children:t?l.jsxs("picture",{children:[l.jsx("source",{srcSet:`${t.startsWith("assets/")?"/":"/src/"}${t}.avif`,type:"image/avif"}),l.jsx("source",{srcSet:`${t.startsWith("assets/")?"/":"/src/"}${t}.webp`,type:"image/webp"}),l.jsx(Je,{src:`${t.startsWith("assets/")?"/":"/src/"}${t}.${n}`,alt:i,$imageWidth:a})]}):l.jsx(Je,{src:r,alt:i,$imageWidth:a})})]})}const Je=w.img`
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
`,ln=""+new URL("iphones—Mockup-Bvav94lR.avif",import.meta.url).href,cn=""+new URL("iphones—Mockup-BBerJEYg.webp",import.meta.url).href,dn=""+new URL("iphones—Mockup-huIJePT7.png",import.meta.url).href,un=""+new URL("Giga—mockup-Cnh_KW7P.jpg",import.meta.url).href,hn=""+new URL("Messages—1920 x 1400-FBHNown_.png",import.meta.url).href,pn=""+new URL("iMac_2-ByB4ft45.jpg",import.meta.url).href,mn=""+new URL("iPad2-7y6oKxfc.jpg",import.meta.url).href,gn=""+new URL("iPhone_2—Dark—Sq-CMwx-i__.jpg",import.meta.url).href,fn=""+new URL("LightPhone2—Sq-BQ4v3uUl.jpg",import.meta.url).href,wn=""+new URL("iMac-BBUHxs4x.jpg",import.meta.url).href,vn=""+new URL("About-DuQLmo8y.png",import.meta.url).href,xn=""+new URL("Guides-CQbHOjad.jpg",import.meta.url).href,bn=""+new URL("CreateNewPost-CaFWZEze.png",import.meta.url).href,xt=w.a`
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
`,Ue=w.div`
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
`,Me=w.div`
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
`,W=w.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`,_=w.h3`
  color: ${e=>e.theme.fontColor};
  font-size: 2.25rem;
  margin: 0;

  @media (max-width: 1320px) {
    font-size: 2.1rem;
  }

  @media (max-width: 850px) {
    font-size: 1.8rem;
  }
`,N=w.h6`
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
`,yn=w.img`
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
`,jn=w.h3`
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
`,kn=w.img.attrs({loading:"lazy",decoding:"async"})`
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
`,Rn=w.div`
width: 100vw;
background-color: #2CA0FD;
grid-row-start: 4;
grid-row-end: 9;
z-index: -5;
`,Oe=w.div`
background-color: ${e=>e.theme.backgroundTwo};
`,Cn=w.div`
display: flex;
width: 100vw;
height: auto;

@media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    height: auto;
}
`,Sn=w.div`
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
`,$n=w.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  max-width: 600px;

  @media (max-width: 1000px) {
    align-items: center;    /* centers the block horizontally */
    text-align: left;       /* keeps text left-aligned inside */
    margin-bottom: 2vh;     /* spacing below the text before image */
  }
`,En=w.img`
  width: ${e=>e.Width};
  height: auto;

  @media (max-width: 1000px) {
    width: 80vw; /* image slightly bigger on vertical stack */
  }
`,bt=w.h2`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 4.5rem;
  color: ${e=>e.theme.fontColor};
  margin: 0;

  @media (max-width: 850px) {
    font-size: 3rem;
  }
`,Pn=w.a`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.4rem;
  color: ${e=>e.theme.fontColor};
  text-decoration: none;
  margin-top: 1vh;

  &:hover {
    opacity: 0.75;
  }
`;function An(){return d.useLayoutEffect(()=>{window.scrollTo(0,0)}),l.jsxs(Oe,{children:[l.jsx(qe,{...$.giga,sameAs:O.sameAs,keywords:$.giga.keywords,jsonLd:{"@context":"https://schema.org","@type":"CreativeWork",headline:$.giga.title,description:$.giga.description,image:$.giga.image,author:{"@type":"Person",name:O.name,url:`${O.url}/about`},url:$.giga.url,datePublished:$.giga.datePublished,keywords:$.giga.keywords}}),l.jsx(vt,{title:"Giga",imageBaseName:"assets/Giga—Macbookv2",imageExt:"png",imageAlt:"Giga Macbook Mockup",imageWidth:"38vw",buttons:[{href:"https://gigaintelligence.com",label:"Visit Giga"}]}),l.jsx(Ue,{children:l.jsxs(Me,{children:[l.jsxs(W,{children:[l.jsx(_,{children:"Project Type"}),l.jsx(N,{children:"UX/UI, Branding, Strategy"})]}),l.jsxs(W,{children:[l.jsx(_,{children:"Digital Product"}),l.jsx(N,{children:"Digital strategy platform used for data management, and private channel creation"})]}),l.jsxs(W,{children:[l.jsx(_,{children:"My Role"}),l.jsx(N,{children:"Responsible for researching, ideating, and generating ideas for a cohesive Giga experience. Designed and prototyped the Giga system & Web App"})]}),l.jsxs(W,{children:[l.jsx(_,{children:"Timeframe"}),l.jsx(N,{children:"1 1/2 years"})]})]})}),l.jsx(K,{src:ln,webp:cn,fallback:dn,style:{width:"100vw",maxWidth:"100vw",height:"auto",objectFit:"cover",display:"block",margin:0,padding:0,borderRadius:0}}),l.jsx(ae,{style:{backgroundColor:"#ffffff"},children:l.jsx(ne,{children:l.jsx(re,{style:{color:"#5D5D5D"},children:"Giga is a startup focused on sharing experiences between its users. Through a robust data management system, users can share information and learn about their favorite subjects"})})}),l.jsx(K,{src:un}),l.jsx(L,{children:l.jsx(A,{src:hn})}),l.jsx(L,{children:l.jsx(A,{src:bn})}),l.jsx(K,{src:pn}),l.jsx(L,{children:l.jsx(A,{src:mn})}),l.jsx(ze,{srcLeft:gn,srcRight:fn}),l.jsx(L,{children:l.jsx(A,{src:wn})}),l.jsx(L,{style:{paddingBottom:"7vh"},children:l.jsx(A,{src:vn})}),l.jsx(L,{style:{justifyContent:"center"},children:l.jsx(A,{src:xn})}),l.jsx(ae,{style:{backgroundColor:"black"},children:l.jsx(ne,{children:l.jsxs(re,{style:{color:"white",textAlign:"center"},children:["Founder — Rich Devlin",l.jsx("br",{}),"Lead Designer — Zachary MacTavish",l.jsx("br",{}),"Front-End Development — Xing Yi & Joel Fernando",l.jsx("br",{}),"Back-End Development — Rich Devlin"]})})})]})}const ha=Object.freeze(Object.defineProperty({__proto__:null,BackgroundColor:Rn,Cellphones:Cn,GigaRocket:yn,ProjectBlock:W,ProjectButton:xt,ProjectContent:$n,ProjectDetails:Me,ProjectDetailsContainer:Ue,ProjectGrid:Sn,ProjectHeader:_,ProjectImage:En,ProjectLink:Pn,ProjectSubtitle:N,ProjectTitle:bt,RisoItemtwo:kn,StyledDiv:Oe,TextSection:jn,default:An},Symbol.toStringTag,{value:"Module"})),Ln=""+new URL("Highpower-CRTc0nnX.jpg",import.meta.url).href,Tn=""+new URL("Highpower-CsvHkKEI.avif",import.meta.url).href,Dn=""+new URL("Highpower-boH7bfqj.webp",import.meta.url).href,Un=""+new URL("AD—iphones-Ds9NHmDv.jpg",import.meta.url).href,Mn=""+new URL("AD—iphones-BiYAAO7N.avif",import.meta.url).href,On=""+new URL("AD—iphones-DGO6M8H3.webp",import.meta.url).href,zn=""+new URL("AD—pages-DKeMWlEm.jpg",import.meta.url).href,Wn=""+new URL("AD—pages-BS_f5aWS.avif",import.meta.url).href,_n=""+new URL("AD—pages-sKiLGjS1.webp",import.meta.url).href,Nn=""+new URL("AD—Macs-C-BI5_ml.jpg",import.meta.url).href,Bn=""+new URL("AD—Macs-CXf9hZaT.avif",import.meta.url).href,In=""+new URL("AD—Macs--XjCyU3R.webp",import.meta.url).href,Fn=""+new URL("AD-ipad-7WzgOi0E.jpg",import.meta.url).href,Gn=""+new URL("AD-ipad-CUp8F2b6.avif",import.meta.url).href,Zn=""+new URL("AD-ipad-B7-837tt.webp",import.meta.url).href,Xn=""+new URL("ADiPhone_2—Dark-BP_0B_M9.jpg",import.meta.url).href,Hn=""+new URL("ADLightPhone2-C7enY0US.jpg",import.meta.url).href,Jn=""+new URL("ADiMac-Bsrxdz-Q.png",import.meta.url).href,Kn=""+new URL("ADiMac-DlvZlRIn.avif",import.meta.url).href,qn=""+new URL("ADiMac-CKTwTd3P.webp",import.meta.url).href,Vn=""+new URL("Group 375-vcp1kghj.png",import.meta.url).href,Yn=""+new URL("Group 375-mZsO1BcE.avif",import.meta.url).href,Qn=""+new URL("Group 375-TF0Alkqk.webp",import.meta.url).href,ea=""+new URL("Guides2-C--leQ0V.png",import.meta.url).href,ta=""+new URL("Guides2-DiNUbQbr.avif",import.meta.url).href,ra=""+new URL("Guides2-DIlDKfWv.webp",import.meta.url).href,na=""+new URL("Group 274-k1yUScXs.png",import.meta.url).href,aa=""+new URL("Group 274-CN_qORPC.avif",import.meta.url).href,ia=""+new URL("Group 274-CPP1pgPP.webp",import.meta.url).href,K=({src:e,avif:t,webp:r,alt:n="",style:i={}})=>(typeof e=="string"&&e.split("/").pop().replace(/\.[^.]+$/,""),l.jsxs("picture",{children:[t&&l.jsx("source",{srcSet:t,type:"image/avif"}),r&&l.jsx("source",{srcSet:r,type:"image/webp"}),l.jsx("img",{src:e,alt:n,style:{width:"100vw",height:"auto",margin:"3vh auto",display:"block",backgroundColor:"white",...i},loading:"lazy",decoding:"async"})]})),oa=w.div`
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
`,re=w.p`
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
`,ne=w.div`
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
`,ae=w.section`
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
`,A=({src:e,avif:t,webp:r,alt:n="",width:i="60vw",style:a={}})=>{typeof e=="string"&&e.split("/").pop().replace(/\.[^.]+$/,"");const o={width:i,maxWidth:"1000px",height:"auto",display:"block",borderRadius:"24px",boxShadow:"0 2px 12px 0 rgba(0,0,0,0.06)",...a};return l.jsxs("picture",{children:[t&&l.jsx("source",{srcSet:t,type:"image/avif"}),r&&l.jsx("source",{srcSet:r,type:"image/webp"}),l.jsx("style",{children:".single-image-responsive { @media (max-width: 1320px) { width: 90vw !important; max-width: 90vw !important; } @media (max-width: 850px) { width: 100vw !important; max-width: 100vw !important; border-radius: 0 !important; } }"}),l.jsx("img",{src:e,alt:n,className:"single-image-responsive",style:o,loading:"lazy",decoding:"async"})]})},L=w.div`
  display: flex;
  justify-content: center;
  background-color: ${e=>e.theme.backgroundTwo};
  align-items: center;
  height: auto;
  padding: 3vh 0;
  width: 100vw;
`,sa=w.div`
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
`,ze=({srcLeft:e,srcRight:t,altLeft:r="",altRight:n="",styleLeft:i={},styleRight:a={}})=>l.jsxs("div",{style:{display:"flex",width:"100vw",height:"auto",flexWrap:"wrap",margin:0,padding:0},children:[l.jsx("img",{src:e,alt:r,style:{width:"50vw",height:"auto",display:"block",borderRadius:0,boxShadow:"none",margin:0,padding:0,...i},loading:"lazy",decoding:"async"}),l.jsx("img",{src:t,alt:n,style:{width:"50vw",height:"auto",display:"block",borderRadius:0,boxShadow:"none",margin:0,padding:0,...a},loading:"lazy",decoding:"async"})]});function la(){return d.useEffect(()=>{window.scrollTo(0,0)},[]),l.jsxs(Oe,{children:[l.jsx(qe,{...$["access-direct"],sameAs:O.sameAs,keywords:$["access-direct"].keywords,jsonLd:{"@context":"https://schema.org","@type":"CreativeWork",headline:$["access-direct"].title,description:$["access-direct"].description,image:$["access-direct"].image,author:{"@type":"Person",name:O.name,url:`${O.url}/about`},url:$["access-direct"].url,datePublished:$["access-direct"].datePublished,keywords:$["access-direct"].keywords}}),l.jsx(vt,{title:"Access Direct",imageBaseName:"assets/AD—Macbook",imageExt:"png",imageAlt:"Access Direct Macbook Mockup",imageWidth:"38vw",buttons:[{href:"https://accessdirect.com",label:"Visit Access Direct"}]}),l.jsx(Ue,{children:l.jsxs(Me,{children:[l.jsxs(W,{children:[l.jsx(_,{children:"Project Type"}),l.jsx(N,{children:"UX/UI, Branding, Strategy, Front-end development"})]}),l.jsxs(W,{children:[l.jsx(_,{children:"Product"}),l.jsx(N,{children:"Brand identity, print materials, and a website built with React.js"})]}),l.jsxs(W,{children:[l.jsx(_,{children:"My Role"}),l.jsx(N,{children:"Responsible for tidying up the brand logo, colors, creating print materials for tradeshows, social media, digital brochures and flyers, and building the company website"})]}),l.jsxs(W,{children:[l.jsx(_,{children:"Timeframe"}),l.jsx(N,{children:"4 years (Part-time)"})]})]})}),l.jsx(K,{src:Un,avif:Mn,webp:On,style:{backgroundColor:"white",width:"100vw",maxWidth:"100vw",height:"auto",objectFit:"cover",display:"block",margin:0,padding:0,borderRadius:0}}),l.jsx(ae,{style:{backgroundColor:"white"},children:l.jsx(ne,{children:l.jsx(re,{style:{color:"#5d5d5d"},children:"Access Direct is a company focused on security solutions. I collaborated closely on the project, working on their brand identity, logos, and website. I served as the UI Designer and Webmaster, redesigning the site and building it using React.js."})})}),l.jsx(K,{src:zn,avif:Wn,webp:_n,style:{backgroundColor:"white",width:"100vw",maxWidth:"100vw",borderRadius:0,margin:"0 auto"}}),l.jsx(L,{children:l.jsx(A,{src:Ln,avif:Tn,webp:Dn})}),l.jsx(L,{children:l.jsx(A,{src:na,avif:aa,webp:ia})}),l.jsx(K,{src:Nn,avif:Bn,webp:In,style:{backgroundColor:"white",width:"100vw",maxWidth:"100vw",borderRadius:0,margin:"0 auto"}}),l.jsx(L,{children:l.jsx(A,{src:Fn,avif:Gn,webp:Zn})}),l.jsx(ze,{srcLeft:Xn,srcRight:Hn,altLeft:"AD iPhone 2 Dark",altRight:"AD Light Phone 2",styleLeft:{},styleRight:{}}),l.jsx(L,{children:l.jsx(A,{src:Jn,avif:Kn,webp:qn})}),l.jsx(L,{children:l.jsx(A,{src:Vn,avif:Yn,webp:Qn})}),l.jsx(L,{children:l.jsx(A,{src:ea,avif:ta,webp:ra})}),l.jsx(ae,{style:{backgroundColor:"black"},children:l.jsx(ne,{children:l.jsxs(re,{style:{color:"white",textAlign:"center"},children:["Founder — David Smith",l.jsx("br",{}),"Lead Designer — Zachary MacTavish",l.jsx("br",{}),"Website Development — Zachary MacTavish",l.jsx("br",{}),"Content Direction — Wendy Majewski, Alek Vasic"]})})})]})}const pa=Object.freeze(Object.defineProperty({__proto__:null,DoubleImage:ze,FullBg:K,FullHeightTextSection:ae,ParagraphFour:oa,RisoFlex:L,SingleGrid:sa,SingleImage:A,TextContainer:ne,TextContent:re,default:la},Symbol.toStringTag,{value:"Module"}));export{pa as A,Cn as C,ze as D,ae as F,ha as G,bt as P,L as R,Oe as S,ne as T,qe as X,re as a,K as b,A as c,oa as d,vt as e,Ue as f,Me as g,W as h,_ as i,N as j,kn as k,ua as l,$ as p,O as s};
