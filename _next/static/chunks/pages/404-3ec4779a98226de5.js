(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[197],{6141:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return n(7789)}])},5188:function(e,t,n){"use strict";n.d(t,{Ho:function(){return i},dA:function(){return r},yL:function(){return a}});let i={hidden:{opacity:0,transition:{ease:"easeInOut",duration:.25}},show:{opacity:1,transition:{ease:"easeInOut",duration:.25}}},a={hidden:{opacity:0},show:{opacity:1,transition:{staggerChildren:.2}}},r={hidden:{opacity:0,translateY:-75},show:{opacity:1,translateY:0}}},2377:function(e,t,n){"use strict";var i=n(7294);let a=()=>{let[e,t]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{t(!0)},[]),e};t.Z=a},7329:function(e,t,n){"use strict";n.d(t,{Z:function(){return y}});var i=n(5893),a=n(9008),r=n.n(a),s=n(1664),l=n.n(s),c=n(7294),o=n(2010),d=n(1190),x=n(8716);let h=(e,t,n)=>{(0,c.useEffect)(()=>{let i=i=>{var a,r;if(null===(a=e.current)||void 0===a||!a.contains(i.target)){if(n){for(let e=0;e<n.length;e++)if(null===(r=n[e].current)||void 0===r?void 0:r.contains(i.target))return}t(i)}};return document.addEventListener("mousedown",i),()=>{document.removeEventListener("mousedown",i)}},[e,t,n])};var u=n(2377);let m=e=>{let{children:t}=e,{theme:n,setTheme:a}=(0,o.F)(),r=(0,u.Z)();if(!r)return null;let s=()=>{switch(n){case"dark":a("light");return;case"light":a("dark");return}};return(0,i.jsx)("button",{onClick:s,children:t})};var f=n(3854),j=n(8193),v=n(1163);let p=[{title:"Home",url:"/"},{title:"Projects",url:"/projects"},{title:"Games",url:"/games"},{title:"About",url:"/about"},{url:"https://github.com/flaslam",icon:(0,i.jsx)(j.RrF,{className:"my-0.5 text-xl"}),newWindow:!0}],N=()=>{let e=(0,v.useRouter)(),{theme:t}=(0,o.F)(),[n,a]=(0,c.useState)(!1),r=(0,c.useRef)(null);h(r,()=>a(!1));let s=p.map((t,n)=>{let r=t.url!==e.pathname&&!t.icon&&"text-zinc-500 dark:text-zinc-400 dark:hover:text-link";return(0,i.jsx)("div",{children:(0,i.jsx)(l(),{href:t.url,onClick:()=>a(!1),target:t.newWindow?"_blank":"",children:(0,i.jsxs)("div",{className:"p-1 px-1 transition hover:text-link ".concat(r),children:[(0,i.jsx)("span",{className:"font-bold",children:t.title}),t.icon?t.icon:null]})})},n)}),u=(0,i.jsx)(m,{children:(0,i.jsx)("div",{className:"p-1 ".concat("dark"===t?"text-orange-300 hover:text-orange-400":"text-violet-400 hover:text-violet-500"),children:"dark"===t?(0,i.jsx)(f.q4P,{className:"my-0.5 text-xl"}):(0,i.jsx)(f.Lac,{className:"my-0.5 text-xl"})})});return(0,i.jsxs)("nav",{className:"sticky top-0 z-50 bg-zinc-200 bg-opacity-70 py-4 backdrop-blur-md dark:bg-dark-panel dark:bg-opacity-80",ref:r,children:[(0,i.jsx)("div",{className:"mx-auto max-w-screen-lg",children:(0,i.jsx)("div",{className:"container mx-auto px-8",children:(0,i.jsxs)("div",{className:"flex items-center gap-2",children:[(0,i.jsxs)("div",{className:"flex grow flex-col font-bold md:flex-row md:gap-2",children:[(0,i.jsx)(l(),{href:"/",onClick:()=>a(!1),children:(0,i.jsx)("div",{children:"Fahd Aslam"})}),(0,i.jsx)(l(),{href:"/",onClick:()=>a(!1),children:(0,i.jsx)("div",{className:"text-zinc-500 dark:text-zinc-500",children:"Software Developer"})})]}),(0,i.jsxs)("div",{className:"hidden items-center gap-2 text-sm sm:flex sm:flex-row",children:[s,u]}),(0,i.jsx)("button",{className:"transition hover:cursor-pointer hover:opacity-50 sm:hidden",onClick:()=>a(e=>!e),children:n?(0,i.jsx)(f.apv,{className:"text-xl"}):(0,i.jsx)(f.r0I,{className:"text-xl"})})]})})}),(0,i.jsx)(d.M,{children:n&&(0,i.jsx)(x.E.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{duration:.2},className:"overflow-hidden sm:hidden",children:(0,i.jsxs)("div",{className:"mx-7 mt-2 flex flex-col gap-1",children:[s,u]})})})]})},g=()=>(0,i.jsx)("footer",{className:"container mx-auto my-12 flex justify-center",children:(0,i.jsx)("a",{href:"mailto:flaslam@gmail.com",target:"_blank",rel:"noreferrer",className:"hover:text-link",children:(0,i.jsx)(f.hBs,{className:"text-2xl"})})});var k=n(5188);let w=e=>{let{children:t,title:n,noSpace:a}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r(),{children:[(0,i.jsx)("title",{children:n?"".concat(n," — Fahd Aslam"):"Fahd Aslam"}),(0,i.jsx)("meta",{name:"description",content:"Fahd Aslam Portfolio"}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,i.jsxs)("div",{className:"flex min-h-screen flex-col",children:[(0,i.jsx)(N,{}),(0,i.jsx)(x.E.main,{variants:k.Ho,initial:"hidden",animate:"show",exit:"hidden",className:"".concat(a?"":"mt-12"," flex-1"),children:t}),(0,i.jsx)(g,{})]})]})};var y=w},7789:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var i=n(5893),a=n(1664),r=n.n(a),s=n(7329);function l(){return(0,i.jsx)(s.Z,{title:"404",children:(0,i.jsxs)("div",{className:"container mx-auto text-center",children:[(0,i.jsx)("h1",{children:"404 | Page Not Found"}),(0,i.jsx)(r(),{href:"/",className:"font-bold hover:text-link",children:"Go back home"})]})})}}},function(e){e.O(0,[617,556,584,774,888,179],function(){return e(e.s=6141)}),_N_E=e.O()}]);