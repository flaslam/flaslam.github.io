(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[735],{4647:function(e,i,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/sites",function(){return t(5741)}])},7355:function(e,i,t){"use strict";var s=t(5893),a=t(1163),n=t.n(a),l=t(3854);let r=e=>{let{children:i}=e;return(0,s.jsx)("div",{children:(0,s.jsxs)("button",{onClick:()=>n().back(),className:"flex shrink items-center gap-2 rounded-lg py-2 px-4 hover:bg-black hover:bg-opacity-10",children:[(0,s.jsx)(l.siY,{})," ",(0,s.jsx)("span",{className:"text-sm font-medium",children:i})]})})};i.Z=r},5326:function(e,i,t){"use strict";t.d(i,{Z:function(){return v}});var s=t(5893),a=t(9008),n=t.n(a),l=t(1190),r=t(8716),o=t(1664),c=t.n(o),d=t(7294),h=t(3854),m=t(8193);let p=[{title:"Home",url:"/"},{title:"Projects",url:"/projects"},{title:"Games",url:"/games"},{title:"About",url:"/about"},{url:"https://github.com/flaslam",icon:(0,s.jsx)(m.RrF,{}),newWindow:!0}],x=()=>{let[e,i]=(0,d.useState)(!1),t=()=>p.map((e,t)=>(0,s.jsx)("div",{children:(0,s.jsx)(c(),{href:e.url,onClick:()=>i(!1),target:e.newWindow?"_blank":"",children:(0,s.jsx)("div",{children:(0,s.jsxs)("div",{className:"rounded-md p-1 px-2 transition hover:text-blue-700",children:[(0,s.jsx)("span",{className:"font-bold",children:e.title}),e.icon?e.icon:null]})})})},t));return(0,s.jsxs)("nav",{className:"sticky top-0 z-50 mb-2 rounded bg-white bg-opacity-80 py-0.5 backdrop-blur-md md:relative md:drop-shadow-none",children:[(0,s.jsxs)("div",{className:"".concat(e?"mb-4":"mb-5"," container z-50 mx-auto mt-5 flex items-center gap-2 px-12 sm:my-8 sm:px-12 md:px-24"),children:[(0,s.jsxs)("div",{className:"grow text-lg font-bold",children:[(0,s.jsx)("div",{children:(0,s.jsx)(c(),{href:"/",onClick:()=>i(!1),children:(0,s.jsx)("div",{children:"Fahd Aslam"})})}),(0,s.jsx)("div",{children:(0,s.jsx)(c(),{href:"/",onClick:()=>i(!1),children:(0,s.jsx)("div",{children:(0,s.jsx)("span",{className:"text-gray-500",children:"Software Developer"})})})})]}),(0,s.jsx)("div",{className:"ml-3 hidden flex-col items-center sm:flex sm:flex-row",children:t()}),(0,s.jsx)("button",{className:"transition hover:cursor-pointer hover:opacity-50 sm:hidden",onClick:()=>i(e=>!e),children:e?(0,s.jsx)(h.apv,{className:"text-xl"}):(0,s.jsx)(h.r0I,{className:"text-xl"})})]}),(0,s.jsx)(l.M,{children:e?(0,s.jsx)(r.E.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{duration:.2},className:"overflow-hidden",children:(0,s.jsx)("div",{className:"mx-10 pb-8 sm:hidden",children:t()})}):null})]})},u=()=>(0,s.jsx)("footer",{className:"container mx-auto my-12 flex justify-center",children:(0,s.jsx)("a",{href:"mailto:flaslam@gmail.com",target:"_blank",rel:"noreferrer",className:"hover:text-blue-800",children:(0,s.jsx)(h.hBs,{className:"text-3xl"})})});var g=t(6610);let j=e=>{let{children:i,title:t}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n(),{children:[(0,s.jsx)("title",{children:t?"".concat(t," — Fahd Aslam"):"Fahd Aslam"}),(0,s.jsx)("meta",{name:"description",content:"Fahd Aslam Portfolio"}),(0,s.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,s.jsx)(x,{}),(0,s.jsx)(r.E.main,{variants:g.Ho,initial:"hidden",animate:"show",exit:"hidden",children:i}),(0,s.jsx)(u,{})]})};var v=j},3681:function(e,i,t){"use strict";t.d(i,{Z:function(){return x}});var s=t(5893),a=t(8193),n=t(5434),l=t(1664),r=t.n(l),o=t(9755),c=t.n(o);let d=e=>{let{project:i}=e;return(0,s.jsx)("div",{className:"rounded-md bg-violet-200 p-6 transition hover:-translate-y-2 hover:bg-violet-100",children:(0,s.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,s.jsxs)("div",{className:"flex gap-1",children:[(0,s.jsx)("h1",{className:"grow truncate text-lg font-bold",children:i.name}),i.source?(0,s.jsx)(r(),{href:i.source,target:"_blank",title:"View source code for ".concat(i.name),children:(0,s.jsx)("div",{children:(0,s.jsx)(a.RrF,{className:"text-xl transition hover:text-gray-500"})})}):null,i.link?(0,s.jsx)(r(),{href:i.link,target:i.internal?"_self":"_blank",title:"View deployed project for ".concat(i.name),children:(0,s.jsx)("div",{children:(0,s.jsx)(n.WKS,{className:"text-xl transition hover:text-gray-500"})})}):null]}),i.image?(0,s.jsx)(r(),{href:i.source?i.source:i.link?i.link:"",target:i.internal?"_self":"_blank",children:(0,s.jsx)("div",{className:"overflow-hidden rounded-lg",children:(0,s.jsx)(c(),{src:i.image,alt:i.name,width:"16",height:"9",layout:"responsive",objectFit:"cover",className:"transition hover:scale-105 hover:opacity-80",objectPosition:"top",priority:!0})})}):null,i.description&&(0,s.jsx)("p",{children:i.description}),i.technologies?(0,s.jsx)("div",{className:"text-sm text-slate-600",children:i.technologies.length<=1?i.technologies[0]:i.technologies.map((e,t)=>(0,s.jsxs)("div",{className:"inline",children:[e,i.technologies&&t===i.technologies.length-1?null:(0,s.jsx)(s.Fragment,{children:", "})]},t))}):null,i.features?(0,s.jsxs)("div",{children:[(0,s.jsx)("h2",{className:"font-bold",children:"Notable features:"}),(0,s.jsx)("ul",{children:i.features.map((e,i)=>(0,s.jsx)("li",{className:"ml-5 list-disc",children:e},i))})]}):null]})})};var h=t(8716),m=t(6610);let p=e=>{let{projects:i}=e;return(0,s.jsx)(h.E.div,{className:"grid grid-cols-1 gap-8 sm:grid-cols-2",variants:m.yL,initial:"hidden",whileInView:"show",children:i.map((e,i)=>(0,s.jsx)(h.E.div,{variants:m.dA,children:(0,s.jsx)(d,{project:e})},i))})};var x=p},6610:function(e,i,t){"use strict";t.d(i,{Ho:function(){return s},dA:function(){return n},yL:function(){return a}});let s={hidden:{opacity:0,translateY:-75},show:{opacity:1,translateY:0,transition:{ease:"easeInOut",duration:.2}}},a={hidden:{opacity:0},show:{opacity:1,transition:{staggerChildren:.1875}}},n={hidden:{opacity:0,translateY:-75},show:{opacity:1,translateY:0}}},5741:function(e,i,t){"use strict";t.r(i),t.d(i,{default:function(){return c}});var s=t(5893);let a=[{name:"Portfolio Site",technologies:["Next.js (React)","TypeScript (JavaScript)","Tailwind CSS"],link:"https://flaslam.github.io/",source:"https://github.com/flaslam/flaslam.github.io",image:"/images/sites/portfolio.jpg"},{name:"Making Homes",technologies:["Next.js (React)","TypeScript (JavaScript)","Tailwind CSS","Framer Motion"],image:"/images/sites/making-homes.jpg",link:"https://www.making-homes.com/"},{name:"Hamwattan Centre",technologies:["Next.js (React)","TypeScript (JavaScript)","Tailwind CSS"],image:"/images/sites/hamwattan.jpg",link:"https://www.hamwattancentre.org.uk/"},{name:"Grass Konbini",technologies:["Next.js (React)","TypeScript (JavaScript)","Tailwind CSS"],image:"/images/sites/grass-konbini.png",link:"https://grasskonbini.vercel.app/"},{name:"Puppets Bunker",image:"/images/sites/puppets-bunker.jpg",technologies:["Jekyll","Bootstrap","HTML/CSS"],link:"https://fahdlaslam.github.io/puppetsbunker/"},{name:"Mylo Reid VO",image:"/images/sites/mylo-reid.jpg",technologies:["Jekyll","Bootstrap","HTML/CSS"],link:"https://myloreid.com/"},{name:"Al Fahd Spa & Fitness Club",link:"https://alfahd.com.pk/",image:"/images/sites/al-fahd.jpg",technologies:["JavaScript","HTML/CSS"]},{name:"Brash Pursuits",technologies:["Jekyll","Bootstrap","HTML/CSS"],image:"/images/sites/brash-pursuits.jpg",link:"https://brashpursuits.github.io/"},{name:"Indoor Football League",technologies:["Jekyll","Bootstrap","HTML/CSS"],image:"/images/sites/ifl.jpg",link:"https://ifluk.github.io/"},{name:"Satorika Gaming",technologies:["JavaScript","HTML/CSS"],link:"https://satorikagaming.tumblr.com/",image:"/images/sites/satorika.jpg"}];var n=t(5326),l=t(3681),r=t(7355);let o=()=>(0,s.jsx)(n.Z,{title:"Sites",children:(0,s.jsx)("div",{children:(0,s.jsxs)("div",{className:"container mx-auto mb-12 px-6 pb-8 sm:px-12",children:[(0,s.jsx)("div",{className:"mb-4",children:(0,s.jsx)(r.Z,{children:"Back to projects"})}),(0,s.jsx)(l.Z,{projects:a})]})})});var c=o},1163:function(e,i,t){e.exports=t(880)}},function(e){e.O(0,[617,556,228,622,755,774,888,179],function(){return e(e.s=4647)}),_N_E=e.O()}]);