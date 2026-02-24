import{j as e}from"./three-D9NkSzoP.js";import{b as s,c as i,R as C,l as L}from"./vendor-D7aqownG.js";import{y as k,p as x,s as S,S as U,f as W,g as A,h as M,i as w,j as b,k as v,R as r,F as d,T as p,a as h,d as o}from"./AD-xdcAvgVG.js";import"./index-OWNjQ_yi.js";const D=""+new URL("Copilot style GRP-DvFr11GA.png",import.meta.url).href,T=""+new URL("Copilot style GRP-BytMppwe.avif",import.meta.url).href,E=""+new URL("Copilot style GRP-yH3w4vzF.webp",import.meta.url).href,H=""+new URL("HP-DdEKI4XK.png",import.meta.url).href,I=""+new URL("HP-BHUORf9I.avif",import.meta.url).href,z=""+new URL("HP-CYzGYve0.webp",import.meta.url).href,B=""+new URL("Journeys-uE34payi.png",import.meta.url).href,G=""+new URL("Journeys-ChinWNQI.avif",import.meta.url).href,O=""+new URL("Journeys-DC4MmKmm.webp",import.meta.url).href,F=""+new URL("Wallet-BZaVnyKQ.png",import.meta.url).href,V=""+new URL("Wallet-D9TQpdQi.avif",import.meta.url).href,K=""+new URL("Wallet-RT-SRy3c.webp",import.meta.url).href,J=""+new URL("Cashback-Baad3KWP.png",import.meta.url).href,Q=""+new URL("Cashback---zhp78F.avif",import.meta.url).href,N=""+new URL("Cashback-DL3abTt2.webp",import.meta.url).href,X=""+new URL("Ruby-Cm9Li1Dt.png",import.meta.url).href,Y=""+new URL("Ruby-C8y70p52.avif",import.meta.url).href,$=""+new URL("Ruby-B17d3Pwx.webp",import.meta.url).href,Z=""+new URL("ReceiptScan-CmuMfHah.png",import.meta.url).href,q=""+new URL("ReceiptScan-DW5I0tC6.avif",import.meta.url).href,_=""+new URL("ReceiptScan-Dm9wY-5u.webp",import.meta.url).href,ee=""+new URL("ShoppingCopilot-DM2JGsjV.png",import.meta.url).href,te=""+new URL("ShoppingCopilot-DPj-NXWc.avif",import.meta.url).href,re=""+new URL("ShoppingCopilot-BOaK3LX-.webp",import.meta.url).href,se=""+new URL("Outlook-DmddgCdL.png",import.meta.url).href,oe=""+new URL("Outlook-CVwvcEvh.avif",import.meta.url).href,ne=""+new URL("Outlook-BhuzpvwH.webp",import.meta.url).href,ie="yourpassword",ae=L`
  0% { transform: translate(-50%, -60%) rotate(0deg); }
  20% { transform: translate(-20%, -80%) rotate(90deg); }
  40% { transform: translate(10%, -40%) rotate(180deg); }
  60% { transform: translate(-40%, -20%) rotate(270deg); }
  80% { transform: translate(-70%, -50%) rotate(320deg); }
  100% { transform: translate(-50%, -60%) rotate(360deg); }
`,ce=L`
  0% { transform: translate(60%, -50%) rotate(0deg); }
  20% { transform: translate(80%, -20%) rotate(90deg); }
  40% { transform: translate(40%, -70%) rotate(180deg); }
  60% { transform: translate(20%, -30%) rotate(270deg); }
  80% { transform: translate(70%, -60%) rotate(320deg); }
  100% { transform: translate(60%, -50%) rotate(360deg); }
`,le=i.div`
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  pointer-events: none;
  &::before, &::after {
    content: '';
    position: absolute;
    width: 40vw;
    height: 40vw;
    border-radius: 50%;
    filter: blur(200px);
    background: rgba(255, 255, 255, 0.3);
    z-index: 0;
  }
  &::before {
    top: 20%;
    left: 10%;
    animation: ${ae} 35s ease-in-out infinite;
  }
  &::after {
    top: 40%;
    left: 65%;
    animation: ${ce} 40s ease-in-out infinite;
  }
`,de=i.div`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
`,pe=i.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background: rgba(255,255,255,0.7); /* More translucent */
  padding: 2rem 3rem;
  border-radius: 12px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.08);
`,he=i.input`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.1rem;
  padding: 0.6rem 1.1rem;
  border-radius: 999px;
  border: 1px solid #ccc;
  min-width: 240px;
  outline: none;
  color: #111;
  background: #fff;
  &::placeholder { color: #9b9b9b; }
`,ue=i.button`
  display: inline-flex;
  align-items: center;
  gap: 0.32em;
  background: #111;
  color: #fff;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 600;
  font-size: 1.05rem;
  border: none;
  border-radius: 999px;
  padding: 0.56rem 1.4rem;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  transition: background 0.2s ease;
  &:hover { background: #333; }
`,je=()=>{const[u,j]=s.useState(""),[f,y]=s.useState(()=>sessionStorage.getItem("microsoftAuth")==="true"),[l,c]=s.useState(""),t=[s.useRef(null),s.useRef(null),s.useRef(null)];s.useEffect(()=>{const n=a=>()=>{t.forEach((g,P)=>{P!==a&&g.current&&g.current.pause()})};return t.forEach((a,g)=>{a.current&&(a.current.onplay=n(g))}),()=>{t.forEach(a=>{a.current&&(a.current.onplay=null)})}},[f]),s.useLayoutEffect(()=>{window.scrollTo(0,0)},[]);const m=n=>{n.preventDefault(),u===ie?(y(!0),c(""),sessionStorage.setItem("microsoftAuth","true")):c("Incorrect password.")};return f?e.jsxs(U,{children:[e.jsx(k,{...x.microsoft,sameAs:S.sameAs,keywords:x.microsoft.keywords}),e.jsx(W,{title:"Microsoft",imageBaseName:"assets/MSFTlogo",imageExt:"png",imageAlt:"Microsoft Logo",imageWidth:"44vw",buttons:[{href:"https://www.microsoft.com/en-us/shopping/?form=MT00PA&cs=2199494592",label:"Visit Shopping"}],divider:!0}),e.jsx(A,{children:e.jsxs(M,{children:[e.jsxs(w,{children:[e.jsx(b,{children:"Project Type"}),e.jsx(v,{children:"Cross-platform product leadership"})]}),e.jsxs(w,{children:[e.jsx(b,{children:"Digital Product"}),e.jsx(v,{children:"Microsoft Shopping ecosystem across Bing, Copilot, Windows, Outlook, and Microsoft Start."})]}),e.jsxs(w,{children:[e.jsx(b,{children:"My Role"}),e.jsx(v,{children:"Product Designer leading research, concept development, and design execution across multiple teams and surfaces."})]}),e.jsxs(w,{children:[e.jsx(b,{children:"Timeframe"}),e.jsx(v,{children:"4 years"})]})]})}),e.jsx(r,{children:e.jsx(R,{ref:t[0],src:"/assets/microsoft-demo2.mp4",poster:"/assets/Preview1.png"})}),e.jsx(d,{style:{backgroundColor:"#f5f5f5",minHeight:"100vh"},children:e.jsx(p,{children:e.jsx(h,{style:{color:"#222",fontSize:"2.3rem",maxWidth:"50ch",lineHeight:"1.4",margin:"0"},children:"This work focused on reimagining shopping as an educational experience rather than a transactional one. I designed early concepts for Copilot Shopping and a Generative Results Page (GRP) that helped users understand product categories, compare specs, and evaluate pricing. These experiences aimed to reduce decision fatigue while increasing trust and confidence for high-consideration purchases."})})}),e.jsx(r,{children:e.jsx(o,{src:D,avif:T,webp:E})}),e.jsx(r,{children:e.jsx(o,{src:H,avif:I,webp:z})}),e.jsx(r,{children:e.jsx(R,{ref:t[2],src:"/assets/microsoft-demo3.mp4",poster:"/assets/Preview3.png"})}),e.jsx(d,{style:{backgroundColor:"#eaf6ff",minHeight:"100vh"},children:e.jsx(p,{children:e.jsx(h,{style:{color:"#1a3a5d",fontSize:"2.3rem",maxWidth:"50ch",lineHeight:"1.4",margin:"0"},children:"I explored personalization systems that adapt to a user’s shopping history without feeling invasive or ad-driven. Projects like Journeys surfaced best-in-class products, expert tips, and modern curations tailored to intent. Alongside this, I ran user research and experiments to understand when shopping content felt helpful versus promotional."})})}),e.jsx("div",{style:{paddingTop:"64px"}}),e.jsx(r,{children:e.jsx(o,{src:B,avif:G,webp:O})}),e.jsx(r,{children:e.jsx(R,{ref:t[1],src:"/assets/microsoft-demo.mp4",poster:"/assets/Preview2.png"})}),e.jsx("div",{style:{paddingBottom:"64px"}}),e.jsx(d,{style:{backgroundColor:"#f7eaff",minHeight:"100vh"},children:e.jsx(p,{children:e.jsx(h,{style:{color:"#5d2d5d",fontSize:"2.3rem",maxWidth:"50ch",lineHeight:"1.4",margin:"0"},children:"This work focused on reducing friction at the moment of purchase through Microsoft Wallet and the Cashback Hub. I contributed to experiences that let users securely save payment methods, passwords, and rewards for faster checkout across Microsoft surfaces. More recently, this work has extended into Copilot, exploring how AI can surface cashback, apply rewards, and streamline checkout without disrupting user trust."})})}),e.jsx(r,{children:e.jsx(o,{src:F,avif:V,webp:K})}),e.jsx(r,{children:e.jsx(o,{src:J,avif:Q,webp:N})}),e.jsx(d,{style:{backgroundColor:"#fffbe6",minHeight:"100vh"},children:e.jsx(p,{children:e.jsx(h,{style:{color:"#5d5d5d",fontSize:"2.3rem",maxWidth:"50ch",lineHeight:"1.4",margin:"0"},children:"I worked across Bing Shopping, Microsoft Start, Windows, Outlook, and Copilot to create consistent commerce experiences at scale. This included Outlook shopping concepts for managing promotions, feed-based browsing, and unsubscribe flows. The goal was to unify shopping behavior across Microsoft’s surfaces while respecting context and user intent."})})}),e.jsx(r,{children:e.jsx(o,{src:X,avif:Y,webp:$})}),e.jsx(r,{children:e.jsx(o,{src:Z,avif:q,webp:_})}),e.jsx(r,{children:e.jsx(o,{src:ee,avif:te,webp:re})}),e.jsx(r,{children:e.jsx(o,{src:se,avif:oe,webp:ne})}),e.jsx(d,{style:{backgroundColor:"black"},children:e.jsx(p,{children:e.jsxs(h,{style:{color:"white",textAlign:"center"},children:["Microsoft AI CEO — Mustafa Suleyman",e.jsx("br",{}),"Shopping Design Lead — Ashley Hemingway",e.jsx("br",{}),"Development Lead — Avinash Vemuluru",e.jsx("br",{})]})})})]}):e.jsxs(de,{children:[e.jsx(k,{...x.microsoft,sameAs:S.sameAs,keywords:x.microsoft.keywords}),e.jsx(le,{}),e.jsxs(pe,{onSubmit:m,children:[e.jsx("h2",{style:{margin:0},children:"Enter Password"}),e.jsx(he,{type:"password",value:u,onChange:n=>j(n.target.value),placeholder:"Password",autoFocus:!0}),e.jsx(ue,{type:"submit",children:"Submit"}),l&&e.jsx("div",{style:{color:"red",marginTop:"0.5rem"},children:l})]})]})},fe=i.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  z-index: 2;
`,me=i.div`
  width: 90px;
  height: 90px;
  background: rgba(0,0,0,0.5);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 64px;
  pointer-events: none;
`,ge=i.div`
  border-radius: 24px;
  position: relative;
  width: 60vw;
  max-width: 1000px;
  aspect-ratio: 16/9;
  margin: 0 auto 4vh auto;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1320px) {
    width: 90vw;
    max-width: 90vw;
  }
  @media (max-width: 850px) {
    width: 100vw;
    max-width: 100vw;
    border-radius: 0;
    height: auto;
  }
`,R=C.forwardRef(({src:u,poster:j},f)=>{const[y,l]=s.useState(!1),c=f||s.useRef(null);return s.useEffect(()=>{const t=c.current;if(!t)return;const m=()=>l(!0),n=()=>l(!1);return t.addEventListener("play",m),t.addEventListener("pause",n),()=>{t.removeEventListener("play",m),t.removeEventListener("pause",n)}},[c]),e.jsxs(ge,{children:[e.jsx("video",{ref:c,src:u,controls:!0,preload:"auto",poster:j,style:{width:"100%",height:"100%",borderRadius:"24px",background:"#000",display:"block",objectFit:"cover"}}),!y&&e.jsx(fe,{children:e.jsx(me,{children:e.jsxs("svg",{width:"48",height:"48",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("circle",{cx:"24",cy:"24",r:"24",fill:"rgba(0,0,0,0.5)"}),e.jsx("polygon",{points:"18,14 36,24 18,34",fill:"#fff"})]})})})]})});export{je as default};
