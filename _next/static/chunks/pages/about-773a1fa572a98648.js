(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{9212:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return i(2956)}])},5188:function(e,t,i){"use strict";i.d(t,{Ho:function(){return n},dA:function(){return s},yL:function(){return a}});let n={hidden:{opacity:0,transition:{ease:"easeInOut",duration:.25}},show:{opacity:1,transition:{ease:"easeInOut",duration:.25}}},a={hidden:{opacity:0},show:{opacity:1,transition:{staggerChildren:.2}}},s={hidden:{opacity:0,translateY:-75},show:{opacity:1,translateY:0}}},2377:function(e,t,i){"use strict";var n=i(7294);let a=()=>{let[e,t]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{t(!0)},[]),e};t.Z=a},7329:function(e,t,i){"use strict";i.d(t,{Z:function(){return b}});var n=i(5893),a=i(9008),s=i.n(a),r=i(1664),l=i.n(r),o=i(7294),c=i(2010),d=i(1190),m=i(8716);let x=(e,t,i)=>{(0,o.useEffect)(()=>{let n=n=>{var a,s;if(null===(a=e.current)||void 0===a||!a.contains(n.target)){if(i){for(let e=0;e<i.length;e++)if(null===(s=i[e].current)||void 0===s?void 0:s.contains(n.target))return}t(n)}};return document.addEventListener("mousedown",n),()=>{document.removeEventListener("mousedown",n)}},[e,t,i])};var h=i(2377);let u=e=>{let{children:t}=e,{theme:i,setTheme:a}=(0,c.F)(),s=(0,h.Z)();if(!s)return null;let r=()=>{switch(i){case"dark":a("light");return;case"light":a("dark");return}};return(0,n.jsx)("button",{onClick:r,children:t})};var j=i(3854),f=i(8193),p=i(1163);let g=[{title:"Home",url:"/"},{title:"Projects",url:"/projects"},{title:"Games",url:"/games"},{title:"About",url:"/about"},{url:"https://github.com/flaslam",icon:(0,n.jsx)(f.RrF,{className:"my-0.5 text-xl"}),newWindow:!0}],v=()=>{let e=(0,p.useRouter)(),{theme:t}=(0,c.F)(),[i,a]=(0,o.useState)(!1),s=(0,o.useRef)(null);x(s,()=>a(!1));let r=g.map((t,i)=>{let s=t.url!==e.pathname&&!t.icon&&"text-zinc-500 dark:text-zinc-400 dark:hover:text-link";return(0,n.jsx)("div",{children:(0,n.jsx)(l(),{href:t.url,onClick:()=>a(!1),target:t.newWindow?"_blank":"",children:(0,n.jsxs)("div",{className:"p-1 px-1 transition hover:text-link ".concat(s),children:[(0,n.jsx)("span",{className:"font-bold",children:t.title}),t.icon?t.icon:null]})})},i)}),h=(0,n.jsx)(u,{children:(0,n.jsx)("div",{className:"p-1 ".concat("dark"===t?"text-orange-300 hover:text-orange-400":"text-violet-400 hover:text-violet-500"),children:"dark"===t?(0,n.jsx)(j.q4P,{className:"my-0.5 text-xl"}):(0,n.jsx)(j.Lac,{className:"my-0.5 text-xl"})})});return(0,n.jsxs)("nav",{className:"sticky top-0 z-50 bg-zinc-200 bg-opacity-70 py-4 backdrop-blur-md dark:bg-dark-panel dark:bg-opacity-80",ref:s,children:[(0,n.jsx)("div",{className:"mx-auto max-w-screen-lg",children:(0,n.jsx)("div",{className:"container mx-auto px-8",children:(0,n.jsxs)("div",{className:"flex items-center gap-2",children:[(0,n.jsxs)("div",{className:"flex grow flex-col font-bold md:flex-row md:gap-2",children:[(0,n.jsx)(l(),{href:"/",onClick:()=>a(!1),children:(0,n.jsx)("div",{children:"Fahd Aslam"})}),(0,n.jsx)(l(),{href:"/",onClick:()=>a(!1),children:(0,n.jsx)("div",{className:"text-zinc-500 dark:text-zinc-500",children:"Software Developer"})})]}),(0,n.jsxs)("div",{className:"hidden items-center gap-2 text-sm sm:flex sm:flex-row",children:[r,h]}),(0,n.jsx)("button",{className:"transition hover:cursor-pointer hover:opacity-50 sm:hidden",onClick:()=>a(e=>!e),children:i?(0,n.jsx)(j.apv,{className:"text-xl"}):(0,n.jsx)(j.r0I,{className:"text-xl"})})]})})}),(0,n.jsx)(d.M,{children:i&&(0,n.jsx)(m.E.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{duration:.2},className:"overflow-hidden sm:hidden",children:(0,n.jsxs)("div",{className:"mx-7 mt-2 flex flex-col gap-1",children:[r,h]})})})]})},k=()=>(0,n.jsx)("footer",{className:"container mx-auto my-12 flex justify-center",children:(0,n.jsx)("a",{href:"mailto:flaslam@gmail.com",target:"_blank",rel:"noreferrer",className:"hover:text-link",children:(0,n.jsx)(j.hBs,{className:"text-2xl"})})});var N=i(5188);let y=e=>{let{children:t,title:i,noSpace:a}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s(),{children:[(0,n.jsx)("title",{children:i?"".concat(i," — Fahd Aslam"):"Fahd Aslam"}),(0,n.jsx)("meta",{name:"description",content:"Fahd Aslam Portfolio"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsxs)("div",{className:"flex min-h-screen flex-col",children:[(0,n.jsx)(v,{}),(0,n.jsx)(m.E.main,{variants:N.Ho,initial:"hidden",animate:"show",exit:"hidden",className:"".concat(a?"":"mt-12"," flex-1"),children:t}),(0,n.jsx)(k,{})]})]})};var b=y},5947:function(e,t,i){"use strict";i.d(t,{Z:function(){return f}});var n=i(5893),a=i(5029),s=i(4503),r=i(5823),l=i(5118),o=i(2010),c=i(9477),d=i(7294),m=i(8626),x=i(3249);function h(e){let{...t}=e,i=(0,x.D)(c.TextureLoader,"/models/leopolds-dreams-1x.png"),a=new c.MeshToonMaterial({map:i}),s=(0,d.useRef)(null),{nodes:r}=(0,m.L)("/models/EvaEdit.gltf");return(0,x.A)(()=>{s.current&&(s.current.rotation.y+=.0075)}),(0,n.jsxs)("group",{ref:s,...t,dispose:null,children:[(0,n.jsxs)("group",{position:[0,0,1.56],rotation:[-Math.PI,0,-Math.PI],children:[(0,n.jsx)("primitive",{object:r.spine}),(0,n.jsx)("skinnedMesh",{geometry:r.Shinji_Hair.geometry,material:a,skeleton:r.Shinji_Hair.skeleton})]}),(0,n.jsx)("mesh",{geometry:r.Evangelion.geometry,material:a,position:[0,0,-1.89],rotation:[0,.84,0],scale:[1,.81,1]}),(0,n.jsx)("mesh",{geometry:r.ground002.geometry,material:a,position:[0,-1,0],rotation:[0,Math.PI/4,0],scale:[4,.8,4]}),(0,n.jsx)("mesh",{geometry:r.ground003.geometry,material:a,position:[0,-1,0],rotation:[0,Math.PI/4,0],scale:[4,.8,4]})]})}m.L.preload("/models/EvaEdit.gltf");let u=()=>{let{theme:e}=(0,o.F)();return(0,n.jsx)("div",{className:"h-60 w-full dark:bg-dark md:h-96",children:(0,n.jsxs)(a.Xz,{children:[(0,n.jsx)(r.z,{target:[0,2.5,0],minPolarAngle:0,maxPolarAngle:Math.PI/2,minAzimuthAngle:0,maxAzimuthAngle:Math.PI,rotation:[0,Math.PI,0],enableZoom:!1}),(0,n.jsx)(l.i,{makeDefault:!0,position:[0,5,11],zoom:27,rotation:[31,0,0],matrixWorldAutoUpdate:void 0,getObjectsByProperty:void 0}),(0,n.jsx)(h,{position:[0,.6,0]}),(0,n.jsx)("ambientLight",{intensity:1,color:"#b0a1ff"}),(0,n.jsx)("pointLight",{position:[0,20,10],intensity:1}),"dark"===e&&(0,n.jsx)(s.xC,{disableNormalPass:!0,children:(0,n.jsx)(s.dp,{luminanceThreshold:0,mipmapBlur:!0,luminanceSmoothing:0,intensity:1})})]})})},j=e=>{let{children:t,noSpace:i}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(u,{}),(0,n.jsx)("div",{className:"".concat(i?"":"mt-8"),children:t})]})};var f=j},2956:function(e,t,i){"use strict";i.r(t);var n=i(5893),a=i(7329),s=i(5947),r=i(3854);let l=()=>(0,n.jsx)("div",{className:"mx-auto max-w-screen-md",children:(0,n.jsx)("div",{className:"container mx-auto",children:(0,n.jsx)("div",{className:"mx-6",children:(0,n.jsxs)("div",{className:"mx-auto flex flex-col gap-6 rounded-md bg-indigo-200 px-8 py-8 dark:bg-dark-panel",children:[(0,n.jsx)("p",{children:"Full stack web and indie game developer based in London, UK"}),(0,n.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,n.jsx)("div",{children:"Technologies I have been working with:"}),(0,n.jsx)("ul",{className:"grid grid-cols-2 sm:grid-cols-3 sm:gap-2 md:grid-cols-4",children:["C# (Unity)","JavaScript ES6","TypeScript","React","Next.js","Node.js","Express","Python","SQL","MongoDB","HTML & CSS"].map((e,t)=>(0,n.jsx)("li",{className:"ml-5 list-disc marker:text-link",children:e},t))})]}),(0,n.jsx)("div",{className:"flex",children:(0,n.jsxs)("a",{href:"mailto:flaslam@gmail.com",rel:"noreferrer",target:"_blank",className:"flex shrink items-center gap-2 hover:text-link",children:[(0,n.jsx)(r.WFu,{}),"Email me"]})})]})})})});l.getLayout=e=>(0,n.jsx)(a.Z,{title:"About",noSpace:!0,children:(0,n.jsx)(s.Z,{children:e})}),t.default=l}},function(e){e.O(0,[617,556,737,444,584,188,774,888,179],function(){return e(e.s=9212)}),_N_E=e.O()}]);