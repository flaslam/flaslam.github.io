(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{9212:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return c(4228)}])},7697:function(e,b,a){"use strict";a.d(b,{Z:function(){return o}});var f=a(5893),c=a(9008),g=a.n(c),h=a(15),d=a(1664),i=a.n(d),j=a(7294),k=a(3854),l=[{title:"Home",url:"/"},{title:"Games",url:"/games"},{title:"Projects",url:"/projects"},{title:"About",url:"/about"},],m=function(){var b=(0,j.useState)(!1),a=b[0],d=b[1],c=function(){return l.map(function(a,b){return(0,f.jsx)("div",{children:(0,f.jsx)(i(),{href:a.url,children:(0,f.jsx)("a",{onClick:function(){return d(!1)},children:(0,f.jsx)("div",{className:"rounded-md p-1 px-2 transition hover:text-blue-700",children:(0,f.jsx)("span",{className:"font-bold",children:a.title})})})})},b)})};return(0,f.jsxs)("nav",{children:[(0,f.jsxs)("div",{className:"".concat(a?"mb-4":"mb-5"," container mx-auto mt-5 flex items-center gap-2 px-12 sm:my-10 sm:px-12 md:px-24"),children:[(0,f.jsxs)("div",{className:"grow text-lg font-bold",children:[(0,f.jsx)("div",{children:(0,f.jsx)(i(),{href:"/",children:(0,f.jsx)("a",{onClick:function(){return d(!1)},children:"Fahd Aslam"})})}),(0,f.jsx)("div",{children:(0,f.jsx)(i(),{href:"/",children:(0,f.jsx)("a",{onClick:function(){return d(!1)},children:(0,f.jsx)("span",{className:"text-gray-500",children:"Game & Web Developer"})})})})]}),(0,f.jsx)("div",{className:"ml-3 hidden flex-col items-end sm:flex sm:flex-row",children:c()}),(0,f.jsx)("button",{className:"transition hover:cursor-pointer hover:opacity-50 sm:hidden",onClick:function(){return d(function(a){return!a})},children:a?(0,f.jsx)(k.apv,{className:"text-xl"}):(0,f.jsx)(k.r0I,{className:"text-xl"})})]}),a?(0,f.jsx)(h.E.div,{initial:{opacity:0,translateY:-50},animate:{opacity:1,translateY:0},children:(0,f.jsx)("div",{className:"mx-10 pb-8 sm:hidden",children:c()})}):null]})},n=function(){return(0,f.jsx)("footer",{className:"container mx-auto my-12 flex justify-center",children:(0,f.jsx)(i(),{href:"mailto:flaslam@gmail.com",children:(0,f.jsx)("a",{target:"_blank",className:"hover:text-blue-800",children:(0,f.jsx)(k.hBs,{className:"text-3xl"})})})})},o=function(a){var c=a.children,b=a.title,d=b?"Fahd Aslam | ".concat(b):"Fahd Aslam";return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(g(),{children:[(0,f.jsx)("title",{children:d}),(0,f.jsx)("meta",{name:"description",content:"Fahd Aslam Portfolio"}),(0,f.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,f.jsx)(m,{}),(0,f.jsx)("main",{children:c}),(0,f.jsx)(n,{})]})}},7205:function(d,b,a){"use strict";a.d(b,{Z:function(){return o}});var e=a(5893),f=a(2371),g=a(6135),h=a(872),i=a(1799),j=a(9396),k=a(9477),l=a(7294),c=a(8626),m=a(1145);function n(d){var f=(0,h.Z)({},d),g=(0,m.z)(k.TextureLoader,"/models/leopolds-dreams-1x.png"),b=new k.MeshToonMaterial({map:g}),n=(0,l.useRef)(null),a=(0,c.L)("/models/EvaEdit.gltf").nodes;return(0,m.x)(function(){n.current&&(n.current.rotation.y+=.0075)}),(0,e.jsxs)("group",(0,j.Z)((0,i.Z)({ref:n},f),{dispose:null,children:[(0,e.jsxs)("group",{position:[0,0,1.56],rotation:[-Math.PI,0,-Math.PI],children:[(0,e.jsx)("primitive",{object:a.spine}),(0,e.jsx)("skinnedMesh",{geometry:a.Shinji_Hair.geometry,material:b,skeleton:a.Shinji_Hair.skeleton})]}),(0,e.jsx)("mesh",{geometry:a.Evangelion.geometry,material:b,position:[0,0,-1.89],rotation:[0,.84,0],scale:[1,.81,1]}),(0,e.jsx)("mesh",{geometry:a.ground002.geometry,material:b,position:[0,-1,0],rotation:[0,Math.PI/4,0],scale:[4,.8,4]}),(0,e.jsx)("mesh",{geometry:a.ground003.geometry,material:b,position:[0,-1,0],rotation:[0,Math.PI/4,0],scale:[4,.8,4]})]}))}c.L.preload("/models/EvaEdit.gltf");var o=function(){return(0,e.jsx)("div",{className:"h-96 w-full",children:(0,e.jsxs)(g.Xz,{children:[(0,e.jsx)(f.i,{makeDefault:!0,position:[0,5,11],zoom:27,rotation:[31,0,0]}),(0,e.jsx)(n,{position:[0,-1.5,0]}),(0,e.jsx)("ambientLight",{intensity:1,color:"#b0a1ff"}),(0,e.jsx)("pointLight",{position:[0,20,10],intensity:1})]})})}},4228:function(d,b,a){"use strict";a.r(b);var e=a(5893),c=a(1664),f=a.n(c),g=a(3854),h=a(7697),i=a(15),j=a(7205);b.default=function(){return(0,e.jsx)(h.Z,{title:"About",children:(0,e.jsxs)(i.E.div,{initial:{opacity:0,translateY:-75},animate:{opacity:1,translateY:0},className:"container mx-auto",children:[(0,e.jsx)(j.Z,{}),(0,e.jsx)("div",{className:"mx-12",children:(0,e.jsxs)("div",{className:"flex flex-col items-center gap-6 rounded-lg bg-indigo-100 px-6 py-12 text-center",children:[(0,e.jsx)("p",{children:"Game and full-stack web developer based in London, UK"}),(0,e.jsxs)("div",{className:"flex flex-col items-center gap-2",children:[(0,e.jsx)("div",{children:"Recently working with:"}),(0,e.jsx)("div",{className:"text-center",children:"C# (Unity), TypeScript & ES6 JavaScript (React, Next.js, Node.js, Express)"})]}),(0,e.jsxs)("div",{className:"flex items-center gap-2",children:[(0,e.jsx)("span",{children:"Let's work together "}),(0,e.jsx)(g.WFu,{}),(0,e.jsx)(f(),{href:"mailto:flaslam@gmail.com",children:(0,e.jsx)("a",{target:"_blank",className:"hover:text-blue-800",children:"Email me"})})]})]})})]})})}}},function(a){a.O(0,[556,737,364,265,774,888,179],function(){var b;return a(a.s=9212)}),_N_E=a.O()}])