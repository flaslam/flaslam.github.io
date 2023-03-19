(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(8024)}])},6565:function(e,t,i){"use strict";i.d(t,{Z:function(){return u}});var s=i(5893),r=i(8193),a=i(5434),n=i(1664),o=i.n(n),l=i(9755),c=i.n(l);let d=e=>{let{project:t}=e,i=t.source?t.source:t.link?t.link:"",n=t.internal?"_self":"_blank";return(0,s.jsx)("div",{className:"rounded-md bg-violet-200 p-6 transition hover:bg-violet-100 dark:bg-dark-panel dark:hover:bg-dark-highlight",children:(0,s.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,s.jsxs)("div",{className:"flex items-baseline gap-1",children:[(0,s.jsx)("h1",{className:"grow truncate text-lg font-bold",children:(0,s.jsx)(o(),{href:i,target:n,children:(0,s.jsx)("span",{className:"hover:text-link",children:t.name})})}),t.source?(0,s.jsx)(o(),{href:t.source,target:"_blank",title:"Go to source code for ".concat(t.name),children:(0,s.jsx)("div",{children:(0,s.jsx)(r.RrF,{className:"text-xl transition hover:text-gray-500"})})}):null,(0,s.jsx)(o(),{href:t.link,target:n,title:"Go to deployed project for ".concat(t.name),children:(0,s.jsx)("div",{children:(0,s.jsx)(a.WKS,{className:"text-xl transition hover:text-gray-500"})})})]}),(0,s.jsx)(o(),{href:i,target:n,title:"Go to project page for ".concat(t.name),children:(0,s.jsx)("div",{className:"overflow-hidden rounded-md",children:(0,s.jsx)(c(),{src:t.image,alt:t.name,width:"16",height:"9",layout:"responsive",objectFit:"cover",className:"transition hover:scale-105 hover:opacity-80",objectPosition:"top",priority:!0})})}),(0,s.jsxs)("div",{children:[t.description&&(0,s.jsx)("p",{children:t.description}),t.technologies&&(0,s.jsx)("p",{className:"pt-1 text-sm text-brand-dark dark:text-dark-secondary",children:t.technologies.join(", ")})]}),t.features&&(0,s.jsxs)("div",{children:[(0,s.jsx)("h2",{className:"font-bold",children:"Features:"}),(0,s.jsx)("ul",{children:t.features.map((e,t)=>(0,s.jsx)("li",{className:"ml-5 list-disc",children:e},t))})]})]})})};var h=i(8716),m=i(5188);let p=e=>{let{projects:t}=e;return(0,s.jsx)(h.E.div,{className:"grid grid-cols-1 gap-8 sm:grid-cols-2",variants:m.yL,initial:"hidden",whileInView:"show",children:t.map((e,t)=>(0,s.jsx)(h.E.div,{variants:m.dA,viewport:{once:!0},children:(0,s.jsx)(d,{project:e})},t))})};var u=p},8878:function(e,t,i){"use strict";i.d(t,{q:function(){return s}});let s=[{name:"Chirp",description:"Full-stack social media app inspired by Twitter with a fully responsive mobile-first front-end design and back-end REST API with auth.",technologies:["React (Next.js)","Node.js (Express)","MongoDB","TypeScript (JavaScript)","Tailwind CSS","Amazon S3 (AWS)"],link:"https://chirp-flaslam.vercel.app/",source:"https://github.com/flaslam/chirp",image:"/images/projects/chirp.jpg"},{name:"Twitter Mood Board",description:"Flask web app which generates a mood board using the Twitter API by pulling user data.",technologies:["Python","Flask","JavaScript","HTML/CSS"],link:"https://twitter-board.onrender.com/",source:"https://github.com/flaslam/twitter-board",image:"/images/projects/twitter-board.jpg"},{name:"Spotify 3D Visualiser",description:"3D data visualisation app which authenticates users using the Spotify API and displays their listening habits in a 3D space.",link:"https://flaslam.github.io/spotify-visualiser/",source:"https://github.com/flaslam/spotify-visualiser",technologies:["Three.js","React","TypeScript (JavaScript)"],image:"/images/projects/spotify.jpg"},{name:"Front End Sites",description:"Example front end sites built for businesses and non-profits using various frameworks",link:"/sites",internal:!0,image:"/images/projects/frontend.jpg",technologies:["React","Next.js","TypeScript","JavaScript","CSS/SASS/Tailwind CSS/Bootstrap"]}]},5947:function(e,t,i){"use strict";i.d(t,{Z:function(){return g}});var s=i(5893),r=i(5029),a=i(4503),n=i(5823),o=i(5118),l=i(2010),c=i(9477),d=i(7294),h=i(8626),m=i(3249);function p(e){let{...t}=e,i=(0,m.D)(c.TextureLoader,"/models/leopolds-dreams-1x.png"),r=new c.MeshToonMaterial({map:i}),a=(0,d.useRef)(null),{nodes:n}=(0,h.L)("/models/EvaEdit.gltf");return(0,m.A)(()=>{a.current&&(a.current.rotation.y+=.0075)}),(0,s.jsxs)("group",{ref:a,...t,dispose:null,children:[(0,s.jsxs)("group",{position:[0,0,1.56],rotation:[-Math.PI,0,-Math.PI],children:[(0,s.jsx)("primitive",{object:n.spine}),(0,s.jsx)("skinnedMesh",{geometry:n.Shinji_Hair.geometry,material:r,skeleton:n.Shinji_Hair.skeleton})]}),(0,s.jsx)("mesh",{geometry:n.Evangelion.geometry,material:r,position:[0,0,-1.89],rotation:[0,.84,0],scale:[1,.81,1]}),(0,s.jsx)("mesh",{geometry:n.ground002.geometry,material:r,position:[0,-1,0],rotation:[0,Math.PI/4,0],scale:[4,.8,4]}),(0,s.jsx)("mesh",{geometry:n.ground003.geometry,material:r,position:[0,-1,0],rotation:[0,Math.PI/4,0],scale:[4,.8,4]})]})}h.L.preload("/models/EvaEdit.gltf");let u=()=>{let{theme:e}=(0,l.F)();return(0,s.jsx)("div",{className:"h-60 w-full dark:bg-dark md:h-96",children:(0,s.jsxs)(r.Xz,{children:[(0,s.jsx)(n.z,{target:[0,2.5,0],minPolarAngle:0,maxPolarAngle:Math.PI/2,minAzimuthAngle:0,maxAzimuthAngle:Math.PI,rotation:[0,Math.PI,0],enableZoom:!1}),(0,s.jsx)(o.i,{makeDefault:!0,position:[0,5,11],zoom:27,rotation:[31,0,0],matrixWorldAutoUpdate:void 0,getObjectsByProperty:void 0}),(0,s.jsx)(p,{position:[0,.6,0]}),(0,s.jsx)("ambientLight",{intensity:1,color:"#b0a1ff"}),(0,s.jsx)("pointLight",{position:[0,20,10],intensity:1}),"dark"===e&&(0,s.jsx)(a.xC,{disableNormalPass:!0,children:(0,s.jsx)(a.dp,{luminanceThreshold:0,mipmapBlur:!0,luminanceSmoothing:0,intensity:1})})]})})},x=e=>{let{children:t,noSpace:i}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(u,{}),(0,s.jsx)("div",{className:"".concat(i?"":"mt-8"),children:t})]})};var g=x},8024:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return g}});var s=i(5893),r=i(7329),a=i(5947),n=i(1664),o=i.n(n);let l=e=>{let{children:t,url:i,title:r}=e;return(0,s.jsxs)("div",{className:"container mx-auto",children:[(0,s.jsx)("div",{className:"my-4 text-lg font-bold",children:(0,s.jsx)("div",{className:"transition",children:(0,s.jsx)(o(),{href:i,children:(0,s.jsxs)("span",{className:"hover:text-link",children:["Recent ",r," projects (view more)"]})})})}),t,(0,s.jsx)("div",{className:"mt-4 flex justify-end font-bold",children:(0,s.jsx)(o(),{href:i,children:(0,s.jsx)("span",{className:"hover:text-link",children:"See more"})})})]})};var c=i(6565),d=i(6659),h=i(8878),m=i(9880);let p=h.q.slice(0,2),u=m.T.slice(0,2),x=()=>(0,s.jsx)("div",{className:"mx-auto max-w-screen-lg",children:(0,s.jsxs)("div",{className:"container mx-auto px-8",children:[(0,s.jsx)(l,{url:"/projects",title:"web",children:(0,s.jsx)(c.Z,{projects:p})}),(0,s.jsx)(l,{url:"/games",title:"game",children:(0,s.jsx)(d.Z,{games:u})})]})});x.getLayout=e=>(0,s.jsx)(r.Z,{noSpace:!0,children:(0,s.jsx)(a.Z,{children:e})});var g=x}},function(e){e.O(0,[617,556,228,737,444,584,755,188,184,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);