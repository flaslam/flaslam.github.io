(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[694],{9476:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/games/[game]",function(){return s(1301)}])},1985:function(e,t,s){"use strict";var a=s(5893),l=s(1163),n=s.n(l),i=s(3854);let r=e=>{let{children:t,link:s}=e,l=()=>{s?n().push(s):n().back()};return(0,a.jsx)("div",{className:"flex",children:(0,a.jsx)("div",{className:"inline-block",children:(0,a.jsxs)("button",{className:"flex shrink items-center gap-2 rounded-md bg-black py-2 px-3 text-white hover:bg-opacity-80 dark:bg-white dark:text-black dark:hover:bg-opacity-50",onClick:l,children:[(0,a.jsx)(i.siY,{}),(0,a.jsx)("span",{className:"text-sm font-bold",children:t})]})})})};t.Z=r},8148:function(e,t,s){"use strict";var a=s(5893);let l=e=>{let{children:t,forceLight:s}=e;return(0,a.jsx)("div",{className:"rounded-full bg-opacity-90 py-0.5 px-2.5 ".concat(s?"bg-white":"bg-brand-lighter dark:bg-dark-highlight"),children:(0,a.jsx)("span",{className:"text-xs font-bold ".concat(s?"text-black":"text-brand-dark dark:text-dark-secondary"),children:t})})};t.Z=l},5188:function(e,t,s){"use strict";s.d(t,{Ho:function(){return a},dA:function(){return n},yL:function(){return l}});let a={hidden:{opacity:0,transition:{ease:"easeInOut",duration:.25}},show:{opacity:1,transition:{ease:"easeInOut",duration:.25}}},l={hidden:{opacity:0},show:{opacity:1,transition:{staggerChildren:.2}}},n={hidden:{opacity:0,translateY:-75},show:{opacity:1,translateY:0}}},6227:function(e,t,s){"use strict";s.d(t,{H:function(){return a}});let a={LINK_DIR:"/games",IMG_DIR:"/images/games"}},2377:function(e,t,s){"use strict";var a=s(7294);let l=()=>{let[e,t]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{t(!0)},[]),e};t.Z=l},7329:function(e,t,s){"use strict";s.d(t,{Z:function(){return y}});var a=s(5893),l=s(9008),n=s.n(l),i=s(1664),r=s.n(i),c=s(7294),o=s(2010),d=s(1190),x=s(8716);let h=(e,t,s)=>{(0,c.useEffect)(()=>{let a=a=>{var l,n;if(null===(l=e.current)||void 0===l||!l.contains(a.target)){if(s){for(let e=0;e<s.length;e++)if(null===(n=s[e].current)||void 0===n?void 0:n.contains(a.target))return}t(a)}};return document.addEventListener("mousedown",a),()=>{document.removeEventListener("mousedown",a)}},[e,t,s])};var m=s(2377);let u=e=>{let{children:t}=e,{theme:s,setTheme:l}=(0,o.F)(),n=(0,m.Z)();if(!n)return null;let i=()=>{switch(s){case"dark":l("light");return;case"light":l("dark");return}};return(0,a.jsx)("button",{onClick:i,children:t})};var p=s(3854),f=s(8193),j=s(1163);let v=[{title:"Home",url:"/"},{title:"Projects",url:"/projects"},{title:"Games",url:"/games"},{title:"About",url:"/about"},{url:"https://github.com/flaslam",icon:(0,a.jsx)(f.RrF,{className:"my-0.5 text-xl"}),newWindow:!0}],g=()=>{let e=(0,j.useRouter)(),{theme:t}=(0,o.F)(),[s,l]=(0,c.useState)(!1),n=(0,c.useRef)(null);h(n,()=>l(!1));let i=v.map((t,s)=>{let n=t.url!==e.pathname&&!t.icon&&"text-zinc-500 dark:text-zinc-400 dark:hover:text-link";return(0,a.jsx)("div",{children:(0,a.jsx)(r(),{href:t.url,onClick:()=>l(!1),target:t.newWindow?"_blank":"",children:(0,a.jsxs)("div",{className:"p-1 px-1 transition hover:text-link ".concat(n),children:[(0,a.jsx)("span",{className:"font-bold",children:t.title}),t.icon?t.icon:null]})})},s)}),m=(0,a.jsx)(u,{children:(0,a.jsx)("div",{className:"p-1 ".concat("dark"===t?"text-orange-300 hover:text-orange-400":"text-violet-400 hover:text-violet-500"),children:"dark"===t?(0,a.jsx)(p.q4P,{className:"my-0.5 text-xl"}):(0,a.jsx)(p.Lac,{className:"my-0.5 text-xl"})})});return(0,a.jsxs)("nav",{className:"sticky top-0 z-50",ref:n,children:[(0,a.jsx)("div",{className:"bg-zinc-200 bg-opacity-70 backdrop-blur-md dark:bg-dark-panel dark:bg-opacity-80",children:(0,a.jsx)("div",{className:"container mx-auto px-container py-4",children:(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsxs)("div",{className:"flex flex-col font-bold md:flex-row md:gap-2",children:[(0,a.jsx)(r(),{href:"/",onClick:()=>l(!1),children:(0,a.jsx)("div",{children:"Fahd Aslam"})}),(0,a.jsx)(r(),{href:"/",onClick:()=>l(!1),children:(0,a.jsx)("div",{className:"text-zinc-500 dark:text-zinc-500",children:"Software Developer"})})]}),(0,a.jsx)("div",{className:"grow"}),(0,a.jsxs)("div",{className:"hidden items-center gap-2 text-sm sm:flex sm:flex-row",children:[i,m]}),(0,a.jsx)("button",{className:"transition hover:cursor-pointer hover:opacity-50 sm:hidden",onClick:()=>l(e=>!e),children:s?(0,a.jsx)(p.apv,{className:"text-xl"}):(0,a.jsx)(p.r0I,{className:"text-xl"})})]})})}),(0,a.jsx)(d.M,{children:s&&(0,a.jsx)(x.E.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{duration:.2},className:"absolute w-full overflow-hidden sm:hidden",children:(0,a.jsx)("div",{className:"bg-zinc-200 bg-opacity-70 backdrop-blur-md dark:bg-dark-panel dark:bg-opacity-80",children:(0,a.jsxs)("div",{className:"flex flex-col gap-2 py-2 px-container",children:[i,m]})})})})]})},b=()=>(0,a.jsx)("footer",{className:"container mx-auto my-12 flex justify-center",children:(0,a.jsx)("a",{href:"mailto:flaslam@gmail.com",target:"_blank",rel:"noreferrer",className:"hover:text-link",children:(0,a.jsx)(p.hBs,{className:"text-2xl"})})});var N=s(5188);let k=e=>{let{children:t,title:s,noSpace:l}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n(),{children:[(0,a.jsx)("title",{children:s?"".concat(s," — Fahd Aslam"):"Fahd Aslam"}),(0,a.jsx)("meta",{name:"description",content:"Fahd Aslam Portfolio"}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,a.jsxs)("div",{className:"flex min-h-screen flex-col",children:[(0,a.jsx)(g,{}),(0,a.jsx)(x.E.main,{variants:N.Ho,initial:"hidden",animate:"show",exit:"hidden",className:"".concat(l?"":"mt-top"," flex-1"),children:t}),(0,a.jsx)(b,{})]})]})};var y=k},1301:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSG:function(){return j},default:function(){return v}});var a=s(5893),l=s(7294),n=s(7329),i=s(6227),r=s(9755),c=s.n(r),o=s(1985),d=s(2377);let x=e=>{let{url:t}=e,s=(0,d.Z)();return s?(0,a.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,style:{clipPath:"inset(1px 1px)"},playsInline:!0,className:"scale-[1.0035] rounded-lg",children:(0,a.jsx)("source",{src:t,type:"video/mp4"})}):null};var h=s(7434),m=s(3854);let u=e=>{let{children:t}=e,[s,n]=(0,h.Z)({loop:!0,draggable:!0}),i=l.Children.count(t),[r,c]=(0,l.useState)(0),o=(0,l.useCallback)(()=>null==n?void 0:n.scrollNext(),[n]),d=(0,l.useCallback)(()=>null==n?void 0:n.scrollPrev(),[n]),x=(0,l.useCallback)(e=>n&&n.scrollTo(e),[n]),u=(0,l.useCallback)(()=>{n&&c(n.selectedScrollSnap())},[n,c]);return(0,l.useEffect)(()=>{n&&(u(),n.on("select",u),n.on("reInit",u))},[n,u]),(0,a.jsxs)("div",{className:"unselectable relative",children:[(0,a.jsx)("div",{ref:s,className:"overflow-hidden rounded",children:(0,a.jsx)("div",{className:"flex [&>*]:shrink-0 [&>*]:grow-0 [&>*]:basis-full",children:t})}),(0,a.jsx)("div",{className:"absolute top-1/2 z-10 ml-4 -translate-y-1/2 items-center justify-between text-white sm:text-xl",children:(0,a.jsx)("div",{onClick:d,className:"cursor-pointer rounded-full bg-black bg-opacity-50 p-2 transition hover:bg-opacity-80",children:(0,a.jsx)(m.PSe,{})})}),(0,a.jsx)("div",{className:"absolute top-1/2 right-0 z-10 mr-4 -translate-y-1/2 items-center justify-between text-white sm:text-xl",children:(0,a.jsx)("div",{onClick:o,className:"cursor-pointer rounded-full bg-black bg-opacity-50 p-2 transition hover:bg-opacity-80",children:(0,a.jsx)(m.yoF,{})})}),i&&i>0&&(0,a.jsx)("div",{className:"absolute bottom-0 z-10 mb-2 flex w-full justify-center gap-1 sm:mb-4",children:Array.from({length:i},(e,t)=>(0,a.jsx)("div",{onClick:()=>x(t),className:"cursor-pointer px-2 py-2 [&>*]:hover:bg-opacity-80",children:(0,a.jsx)("div",{className:"h-1 w-8 rounded-full bg-white transition sm:h-1.5 sm:w-10 ".concat(r==t?"bg-opacity-100":"bg-opacity-50")})},t))})]})};var p=s(8148);let f=e=>{let{game:t}=e;return(0,a.jsxs)(n.Z,{title:t.name,noSpace:!0,children:[(0,a.jsx)("div",{className:"bg-cover bg-center",style:{backgroundImage:"url(".concat(i.H.IMG_DIR,"/").concat(t.directory,"/bg.jpg)")},children:(0,a.jsx)("div",{className:"bg-white bg-opacity-60 py-12 dark:bg-dark dark:bg-opacity-80",children:(0,a.jsxs)("div",{className:"container mx-auto px-container",children:[(0,a.jsx)("div",{className:"pb-4 lg:mb-0",children:(0,a.jsx)(o.Z,{children:"Back to games"})}),(0,a.jsxs)("div",{className:"flex flex-col gap-6 md:flex-row md:gap-12",children:[(0,a.jsx)("div",{className:"flex items-center md:basis-2/3",children:(0,a.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,a.jsx)("h1",{className:"text-3xl font-bold",children:t.name}),(0,a.jsx)("p",{children:t.description}),(0,a.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,a.jsx)("div",{className:"font-bold",children:"Built with"}),(0,a.jsx)("div",{className:"flex gap-2",children:t.tools.map((e,t)=>(0,a.jsx)(p.Z,{forceLight:!0,children:e},t))})]}),t.abouts?(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"mb-1 font-bold",children:"About"}),(0,a.jsx)("ul",{children:t.abouts.map((e,t)=>(0,a.jsx)("li",{className:"ml-4 mb-1 list-disc",children:e},t))})]}):null]})}),(0,a.jsx)("div",{className:"flex items-center justify-center md:basis-1/3",children:(0,a.jsx)("div",{className:"w-full",children:(0,a.jsx)(c(),{src:"".concat(i.H.IMG_DIR,"/").concat(t.directory,"/title.jpg"),alt:t.name,width:"200",height:"200",objectFit:"cover",layout:"responsive",className:"rounded-md"})})})]})]})})}),(0,a.jsx)("div",{className:"container mx-auto mt-8 px-container",children:(0,a.jsxs)("div",{className:"flex flex-col gap-8",children:[t.videos&&t.videos>0&&Array.from({length:t.videos},(e,s)=>(0,a.jsx)(x,{url:"".concat(i.H.IMG_DIR,"/").concat(t.directory,"/").concat(s,".mp4")},s)),t.screenshots&&t.screenshots>0&&(0,a.jsx)(u,{children:Array.from({length:t.screenshots}).map((e,s)=>(0,a.jsx)(c(),{src:"".concat(i.H.IMG_DIR,"/").concat(t.directory,"/").concat(s,".jpg"),alt:s.toString(),width:"16",height:"9",objectFit:"cover",layout:"responsive"},s))}),(0,a.jsx)(o.Z,{link:"/games",children:"Back to games"})]})})]})};var j=!0,v=f}},function(e){e.O(0,[617,556,584,755,434,774,888,179],function(){return e(e.s=9476)}),_N_E=e.O()}]);