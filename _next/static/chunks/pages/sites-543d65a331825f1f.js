(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[735],{4647:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/sites",function(){return i(9989)}])},1985:function(e,t,i){"use strict";var a=i(5893),s=i(1163),n=i.n(s),r=i(3854);let l=e=>{let{children:t,link:i}=e,s=()=>{i?n().push(i):n().back()};return(0,a.jsx)("div",{className:"flex",children:(0,a.jsx)("div",{className:"inline-block",children:(0,a.jsxs)("button",{className:"flex shrink items-center gap-2 rounded-md bg-zinc-200 bg-opacity-50 py-2 px-3 hover:bg-zinc-300 hover:bg-opacity-50 dark:bg-dark-panel dark:bg-opacity-50 dark:hover:bg-zinc-600 dark:hover:bg-opacity-50",onClick:s,children:[(0,a.jsx)(r.siY,{}),(0,a.jsx)("span",{className:"text-sm font-bold",children:t})]})})})};t.Z=l},6565:function(e,t,i){"use strict";i.d(t,{Z:function(){return p}});var a=i(5893),s=i(8193),n=i(5434),r=i(1664),l=i.n(r),o=i(9755),c=i.n(o);let d=e=>{let{project:t}=e,i=t.source?t.source:t.link?t.link:"",r=t.internal?"_self":"_blank";return(0,a.jsx)("div",{className:"rounded-md bg-violet-200 p-6 transition hover:bg-violet-100 dark:bg-dark-panel dark:hover:bg-dark-highlight",children:(0,a.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,a.jsxs)("div",{className:"flex items-baseline gap-1",children:[(0,a.jsx)("h1",{className:"grow truncate text-lg font-bold",children:(0,a.jsx)(l(),{href:i,target:r,children:(0,a.jsx)("span",{className:"hover:text-link",children:t.name})})}),t.source?(0,a.jsx)(l(),{href:t.source,target:"_blank",title:"Go to source code for ".concat(t.name),children:(0,a.jsx)("div",{children:(0,a.jsx)(s.RrF,{className:"text-xl transition hover:text-gray-500"})})}):null,(0,a.jsx)(l(),{href:t.link,target:r,title:"Go to deployed project for ".concat(t.name),children:(0,a.jsx)("div",{children:(0,a.jsx)(n.WKS,{className:"text-xl transition hover:text-gray-500"})})})]}),(0,a.jsx)(l(),{href:i,target:r,title:"Go to project page for ".concat(t.name),children:(0,a.jsx)("div",{className:"overflow-hidden rounded-md",children:(0,a.jsx)(c(),{src:t.image,alt:t.name,width:"16",height:"9",layout:"responsive",objectFit:"cover",className:"transition hover:scale-105 hover:opacity-80",objectPosition:"top",priority:!0})})}),(0,a.jsxs)("div",{children:[t.description&&(0,a.jsx)("p",{children:t.description}),t.technologies&&(0,a.jsx)("p",{className:"pt-1 text-sm text-brand-dark dark:text-dark-secondary",children:t.technologies.join(", ")})]}),t.features&&(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{className:"font-bold",children:"Features:"}),(0,a.jsx)("ul",{children:t.features.map((e,t)=>(0,a.jsx)("li",{className:"ml-5 list-disc",children:e},t))})]})]})})};var h=i(8716),m=i(5188);let x=e=>{let{projects:t}=e;return(0,a.jsx)(h.E.div,{className:"grid grid-cols-1 gap-8 sm:grid-cols-2",variants:m.yL,initial:"hidden",whileInView:"show",viewport:{once:!0},children:t.map((e,t)=>(0,a.jsx)(h.E.div,{variants:m.dA,viewport:{once:!0},children:(0,a.jsx)(d,{project:e})},t))})};var p=x},5188:function(e,t,i){"use strict";i.d(t,{Ho:function(){return a},dA:function(){return n},yL:function(){return s}});let a={hidden:{opacity:0,transition:{ease:"easeInOut",duration:.25}},show:{opacity:1,transition:{ease:"easeInOut",duration:.25}}},s={hidden:{opacity:0},show:{opacity:1,transition:{staggerChildren:.2}}},n={hidden:{opacity:0,translateY:-75},show:{opacity:1,translateY:0}}},2377:function(e,t,i){"use strict";var a=i(7294);let s=()=>{let[e,t]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{t(!0)},[]),e};t.Z=s},7329:function(e,t,i){"use strict";i.d(t,{Z:function(){return w}});var a=i(5893),s=i(9008),n=i.n(s),r=i(1664),l=i.n(r),o=i(7294),c=i(2010),d=i(1190),h=i(8716);let m=(e,t,i)=>{(0,o.useEffect)(()=>{let a=a=>{var s,n;if(null===(s=e.current)||void 0===s||!s.contains(a.target)){if(i){for(let e=0;e<i.length;e++)if(null===(n=i[e].current)||void 0===n?void 0:n.contains(a.target))return}t(a)}};return document.addEventListener("mousedown",a),()=>{document.removeEventListener("mousedown",a)}},[e,t,i])};var x=i(2377);let p=e=>{let{children:t}=e,{theme:i,setTheme:s}=(0,c.F)(),n=(0,x.Z)();if(!n)return null;let r=()=>{switch(i){case"dark":s("light");return;case"light":s("dark");return}};return(0,a.jsx)("button",{onClick:r,children:t})};var u=i(3854),g=i(8193),j=i(1163);let v=[{title:"Home",url:"/"},{title:"Projects",url:"/projects"},{title:"Games",url:"/games"},{title:"About",url:"/about"},{url:"https://github.com/flaslam",icon:(0,a.jsx)(g.RrF,{className:"my-0.5 text-xl"}),newWindow:!0}],f=()=>{let e=(0,j.useRouter)(),{theme:t}=(0,c.F)(),[i,s]=(0,o.useState)(!1),n=(0,o.useRef)(null);m(n,()=>s(!1));let r=v.map((t,i)=>{let n=t.url!==e.pathname&&!t.icon&&"text-zinc-500 dark:text-zinc-400 dark:hover:text-link";return(0,a.jsx)("div",{children:(0,a.jsx)(l(),{href:t.url,onClick:()=>s(!1),target:t.newWindow?"_blank":"",children:(0,a.jsxs)("div",{className:"p-1 px-1 transition hover:text-link ".concat(n),children:[(0,a.jsx)("span",{className:"font-bold",children:t.title}),t.icon?t.icon:null]})})},i)}),x=(0,a.jsx)(p,{children:(0,a.jsx)("div",{className:"p-1 ".concat("dark"===t?"text-orange-300 hover:text-orange-400":"text-violet-400 hover:text-violet-500"),children:"dark"===t?(0,a.jsx)(u.q4P,{className:"my-0.5 text-xl"}):(0,a.jsx)(u.Lac,{className:"my-0.5 text-xl"})})});return(0,a.jsxs)("nav",{className:"sticky top-0 z-50",ref:n,children:[(0,a.jsx)("div",{className:"bg-zinc-200 bg-opacity-70 backdrop-blur-md dark:bg-dark-panel dark:bg-opacity-80",children:(0,a.jsx)("div",{className:"container mx-auto px-container py-4",children:(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsxs)("div",{className:"flex grow flex-col font-bold md:flex-row md:gap-2",children:[(0,a.jsx)(l(),{href:"/",onClick:()=>s(!1),children:(0,a.jsx)("div",{children:"Fahd Aslam"})}),(0,a.jsx)(l(),{href:"/",onClick:()=>s(!1),children:(0,a.jsx)("div",{className:"text-zinc-500 dark:text-zinc-500",children:"Software Developer"})})]}),(0,a.jsxs)("div",{className:"hidden items-center gap-2 text-sm sm:flex sm:flex-row",children:[r,x]}),(0,a.jsx)("button",{className:"transition hover:cursor-pointer hover:opacity-50 sm:hidden",onClick:()=>s(e=>!e),children:i?(0,a.jsx)(u.apv,{className:"text-xl"}):(0,a.jsx)(u.r0I,{className:"text-xl"})})]})})}),(0,a.jsx)(d.M,{children:i&&(0,a.jsx)(h.E.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{duration:.2},className:"absolute w-full overflow-hidden sm:hidden",children:(0,a.jsx)("div",{className:"bg-zinc-200 bg-opacity-70 backdrop-blur-md dark:bg-dark-panel dark:bg-opacity-80",children:(0,a.jsxs)("div",{className:"flex flex-col gap-2 py-2 px-container",children:[r,x]})})})})]})},k=()=>(0,a.jsx)("footer",{className:"container mx-auto my-12 flex justify-center",children:(0,a.jsx)("a",{href:"mailto:flaslam@gmail.com",target:"_blank",rel:"noreferrer",className:"hover:text-link",children:(0,a.jsx)(u.hBs,{className:"text-2xl"})})});var b=i(5188);let N=e=>{let{children:t,title:i,noSpace:s}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n(),{children:[(0,a.jsx)("title",{children:i?"".concat(i," — Fahd Aslam"):"Fahd Aslam"}),(0,a.jsx)("meta",{name:"description",content:"Fahd Aslam Portfolio"}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,a.jsxs)("div",{className:"flex min-h-screen flex-col",children:[(0,a.jsx)(f,{}),(0,a.jsx)(h.E.main,{variants:b.Ho,initial:"hidden",animate:"show",exit:"hidden",className:"".concat(s?"":"mt-top"," flex-1"),children:t}),(0,a.jsx)(k,{})]})]})};var w=N},9989:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return c}});var a=i(5893);let s=[{name:"Portfolio Site",technologies:["React (Next.js)","TypeScript (JavaScript)","Tailwind CSS"],link:"https://flaslam.github.io/",source:"https://github.com/flaslam/flaslam.github.io",image:"/images/sites/portfolio.jpg",description:"Personal website built to showcase some projects."},{name:"Making Homes",technologies:["React (Next.js)","TypeScript (JavaScript)","Tailwind CSS","Framer Motion"],image:"/images/sites/making-homes.jpg",link:"https://www.making-homes.com/"},{name:"Hamwattan Centre",technologies:["React (Next.js)","TypeScript (JavaScript)","Tailwind CSS"],image:"/images/sites/hamwattan.jpg",link:"https://www.hamwattancentre.org.uk/"},{name:"Grass Konbini",technologies:["React (Next.js)","TypeScript (JavaScript)","Tailwind CSS","Framer Motion"],image:"/images/sites/grass-konbini.png",link:"https://grasskonbini.vercel.app/",description:"Front end for a social media agency built based on provided wireframe."},{name:"Puppets Bunker",image:"/images/sites/puppets-bunker.jpg",technologies:["Jekyll","Bootstrap","HTML/CSS"],link:"https://fahdlaslam.github.io/puppetsbunker/"},{name:"Mylo Reid VO",image:"/images/sites/mylo-reid.jpg",technologies:["Jekyll","Bootstrap","HTML/CSS"],link:"https://myloreid.com/"},{name:"Al Fahd Spa & Fitness Club",link:"https://alfahd.com.pk/",image:"/images/sites/al-fahd.jpg",technologies:["JavaScript","HTML/CSS"]}];var n=i(7329),r=i(6565),l=i(1985);let o=()=>(0,a.jsx)(n.Z,{title:"Sites",children:(0,a.jsxs)("div",{className:"container mx-auto px-container",children:[(0,a.jsx)("div",{className:"mb-6",children:(0,a.jsx)(l.Z,{children:"Back to projects"})}),(0,a.jsx)(r.Z,{projects:s})]})});var c=o}},function(e){e.O(0,[617,556,228,584,755,774,888,179],function(){return e(e.s=4647)}),_N_E=e.O()}]);