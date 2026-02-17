import{j as e}from"./three-D9NkSzoP.js";import{b as r,c as i,R as E,l as R}from"./vendor-D7aqownG.js";import{E as k,p as m,s as P,S as M,e as T,f as A,g as I,h as b,i as j,j as w,R as t,F as l,T as p,a as h,c as o}from"./AD-7M24ekut.js";const H="yourpassword",z=R`
  0% { transform: translate(-50%, -60%) rotate(0deg); }
  20% { transform: translate(-20%, -80%) rotate(90deg); }
  40% { transform: translate(10%, -40%) rotate(180deg); }
  60% { transform: translate(-40%, -20%) rotate(270deg); }
  80% { transform: translate(-70%, -50%) rotate(320deg); }
  100% { transform: translate(-50%, -60%) rotate(360deg); }
`,W=R`
  0% { transform: translate(60%, -50%) rotate(0deg); }
  20% { transform: translate(80%, -20%) rotate(90deg); }
  40% { transform: translate(40%, -70%) rotate(180deg); }
  60% { transform: translate(20%, -30%) rotate(270deg); }
  80% { transform: translate(70%, -60%) rotate(320deg); }
  100% { transform: translate(60%, -50%) rotate(360deg); }
`,D=i.div`
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
    animation: ${z} 35s ease-in-out infinite;
  }
  &::after {
    top: 40%;
    left: 65%;
    animation: ${W} 40s ease-in-out infinite;
  }
`,L=i.div`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
`,B=i.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background: rgba(255,255,255,0.7); /* More translucent */
  padding: 2rem 3rem;
  border-radius: 12px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.08);
`,O=i.input`
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
`,F=i.button`
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
`,K=()=>{const[x,y]=r.useState(""),[f,v]=r.useState(()=>sessionStorage.getItem("microsoftAuth")==="true"),[c,d]=r.useState(""),s=[r.useRef(null),r.useRef(null),r.useRef(null)];r.useEffect(()=>{const n=a=>()=>{s.forEach((g,C)=>{C!==a&&g.current&&g.current.pause()})};return s.forEach((a,g)=>{a.current&&(a.current.onplay=n(g))}),()=>{s.forEach(a=>{a.current&&(a.current.onplay=null)})}},[f]),r.useLayoutEffect(()=>{window.scrollTo(0,0)},[]);const u=n=>{n.preventDefault(),x===H?(v(!0),d(""),sessionStorage.setItem("microsoftAuth","true")):d("Incorrect password.")};return f?e.jsxs(M,{children:[e.jsx(k,{...m.microsoft,sameAs:P.sameAs,keywords:m.microsoft.keywords}),e.jsx(T,{title:"Microsoft",imageBaseName:"assets/MSFTlogo",imageExt:"png",imageAlt:"Microsoft Logo",imageWidth:"44vw",buttons:[{href:"https://www.microsoft.com/en-us/shopping/?form=MT00PA&cs=2199494592",label:"Visit Shopping"}],divider:!0}),e.jsx(A,{children:e.jsxs(I,{children:[e.jsxs(b,{children:[e.jsx(j,{children:"Project Type"}),e.jsx(w,{children:"Cross-platform product leadership"})]}),e.jsxs(b,{children:[e.jsx(j,{children:"Digital Product"}),e.jsx(w,{children:"Microsoft Shopping ecosystem across Bing, Copilot, Windows, Outlook, and Microsoft Start."})]}),e.jsxs(b,{children:[e.jsx(j,{children:"My Role"}),e.jsx(w,{children:"Product Designer leading research, concept development, and design execution across multiple teams and surfaces."})]}),e.jsxs(b,{children:[e.jsx(j,{children:"Timeframe"}),e.jsx(w,{children:"4 years"})]})]})}),e.jsx(t,{children:e.jsx(S,{ref:s[0],src:"/assets/microsoft-demo2.mp4",poster:"/assets/Preview1.png"})}),e.jsx(l,{style:{backgroundColor:"#f5f5f5",minHeight:"100vh"},children:e.jsx(p,{children:e.jsx(h,{style:{color:"#222",fontSize:"2.3rem",maxWidth:"50ch",lineHeight:"1.4",margin:"0"},children:"This work focused on reimagining shopping as an educational experience rather than a transactional one. I designed early concepts for Copilot Shopping and a Generative Results Page (GRP) that helped users understand product categories, compare specs, and evaluate pricing. These experiences aimed to reduce decision fatigue while increasing trust and confidence for high-consideration purchases."})})}),e.jsx(t,{children:e.jsx(o,{src:"/assets/Copilot%20style%20GRP.png",style:{borderRadius:"24px",boxShadow:"0 2px 24px rgba(0,0,0,0.10)",border:"4px solid #fff"}})}),e.jsx(t,{children:e.jsx(o,{src:"/assets/HP.png",style:{borderRadius:"24px",boxShadow:"0 2px 24px rgba(0,0,0,0.10)",border:"4px solid #fff"}})}),e.jsx(t,{children:e.jsx(S,{ref:s[2],src:"/assets/microsoft-demo3.mp4",poster:"/assets/Preview3.png"})}),e.jsx(l,{style:{backgroundColor:"#eaf6ff",minHeight:"100vh"},children:e.jsx(p,{children:e.jsx(h,{style:{color:"#1a3a5d",fontSize:"2.3rem",maxWidth:"50ch",lineHeight:"1.4",margin:"0"},children:"I explored personalization systems that adapt to a user’s shopping history without feeling invasive or ad-driven. Projects like Journeys surfaced best-in-class products, expert tips, and modern curations tailored to intent. Alongside this, I ran user research and experiments to understand when shopping content felt helpful versus promotional."})})}),e.jsx("div",{style:{paddingTop:"64px"}}),e.jsx(t,{children:e.jsx(o,{src:"/assets/Journeys.png",style:{borderRadius:"24px",boxShadow:"0 2px 24px rgba(0,0,0,0.10)",border:"4px solid #fff"}})}),e.jsx(t,{children:e.jsx(S,{ref:s[1],src:"/assets/microsoft-demo.mp4",poster:"/assets/Preview2.png"})}),e.jsx("div",{style:{paddingBottom:"64px"}}),e.jsx(l,{style:{backgroundColor:"#f7eaff",minHeight:"100vh"},children:e.jsx(p,{children:e.jsx(h,{style:{color:"#5d2d5d",fontSize:"2.3rem",maxWidth:"50ch",lineHeight:"1.4",margin:"0"},children:"This work focused on reducing friction at the moment of purchase through Microsoft Wallet and the Cashback Hub. I contributed to experiences that let users securely save payment methods, passwords, and rewards for faster checkout across Microsoft surfaces. More recently, this work has extended into Copilot, exploring how AI can surface cashback, apply rewards, and streamline checkout without disrupting user trust."})})}),e.jsx(t,{children:e.jsx(o,{src:"/assets/Wallet.png",style:{borderRadius:"24px",boxShadow:"none"}})}),e.jsx(t,{children:e.jsx(o,{src:"/assets/Cashback.png",style:{borderRadius:"24px",boxShadow:"0 2px 24px rgba(0,0,0,0.10)",border:"4px solid #fff"}})}),e.jsx(l,{style:{backgroundColor:"#fffbe6",minHeight:"100vh"},children:e.jsx(p,{children:e.jsx(h,{style:{color:"#5d5d5d",fontSize:"2.3rem",maxWidth:"50ch",lineHeight:"1.4",margin:"0"},children:"I worked across Bing Shopping, Microsoft Start, Windows, Outlook, and Copilot to create consistent commerce experiences at scale. This included Outlook shopping concepts for managing promotions, feed-based browsing, and unsubscribe flows. The goal was to unify shopping behavior across Microsoft’s surfaces while respecting context and user intent."})})}),e.jsx(t,{children:e.jsx(o,{src:"/assets/Ruby.png",style:{borderRadius:"24px",boxShadow:"0 2px 24px rgba(0,0,0,0.10)",border:"4px solid #fff"}})}),e.jsx(t,{children:e.jsx(o,{src:"/assets/ReceiptScan.png",style:{borderRadius:"24px",boxShadow:"0 2px 24px rgba(0,0,0,0.10)",border:"4px solid #fff"}})}),e.jsx(t,{children:e.jsx(o,{src:"/assets/ShoppingCopilot.png",style:{borderRadius:"8px",boxShadow:"none",border:"none"}})}),e.jsx(t,{children:e.jsx(o,{src:"/assets/Outlook.png",style:{borderRadius:"24px",boxShadow:"0 2px 24px rgba(0,0,0,0.10)",border:"4px solid #fff"}})}),e.jsx(l,{style:{backgroundColor:"black"},children:e.jsx(p,{children:e.jsxs(h,{style:{color:"white",textAlign:"center"},children:["Microsoft AI CEO — Mustafa Suleyman",e.jsx("br",{}),"Shopping Design Lead — Ashley Hemingway",e.jsx("br",{}),"Development Lead — Avinash Vemuluru",e.jsx("br",{})]})})})]}):e.jsxs(L,{children:[e.jsx(k,{...m.microsoft,sameAs:P.sameAs,keywords:m.microsoft.keywords}),e.jsx(D,{}),e.jsxs(B,{onSubmit:u,children:[e.jsx("h2",{style:{margin:0},children:"Enter Password"}),e.jsx(O,{type:"password",value:x,onChange:n=>y(n.target.value),placeholder:"Password",autoFocus:!0}),e.jsx(F,{type:"submit",children:"Submit"}),c&&e.jsx("div",{style:{color:"red",marginTop:"0.5rem"},children:c})]})]})},G=i.div`
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
`,V=i.div`
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
`,J=i.div`
  border-radius: 24px;
  position: relative;
  width: 60vw;
  max-width: 1000px;
  aspect-ratio: 16/9;
  margin: 0 auto 4vh auto;
  display: flex;
  align-items: center;
  justify-content: center;

  @media(max-width: 1320px) {
    width: 96vw;
    max-width: 96vw;
  }
  @media(max-width: 850px) {
    width: 100vw;
    max-width: 100vw;
    height: auto;
  }
`,S=E.forwardRef(({src:x,poster:y},f)=>{const[v,c]=r.useState(!1),d=f||r.useRef(null);return r.useEffect(()=>{const s=d.current;if(!s)return;const u=()=>c(!0),n=()=>c(!1);return s.addEventListener("play",u),s.addEventListener("pause",n),()=>{s.removeEventListener("play",u),s.removeEventListener("pause",n)}},[d]),e.jsxs(J,{children:[e.jsx("video",{ref:d,src:x,controls:!0,preload:"auto",poster:y,style:{width:"100%",height:"100%",borderRadius:"24px",background:"#000",display:"block",objectFit:"cover"}}),!v&&e.jsx(G,{children:e.jsx(V,{children:e.jsxs("svg",{width:"48",height:"48",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("circle",{cx:"24",cy:"24",r:"24",fill:"rgba(0,0,0,0.5)"}),e.jsx("polygon",{points:"18,14 36,24 18,34",fill:"#fff"})]})})})]})});export{K as default};
