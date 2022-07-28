(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[451],{1059:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/games",function(){return c(166)}])},5954:function(e,b,a){"use strict";a.d(b,{Z:function(){return l}});var f=a(5893),c=a(5675),g=a.n(c),d=a(1664),h=a.n(d),i=a(8288),j=function(b){var a=b.game;return(0,f.jsx)(h(),{href:"".concat(i.v.LINK_DIR).concat(a.directory),children:(0,f.jsx)("a",{className:"cursor-default",children:(0,f.jsx)("div",{className:"relative rounded-r-xl rounded-b-xl bg-cover transition hover:-translate-y-1",style:{backgroundImage:"url(".concat(i.v.IMG_DIR).concat(a.directory,"/bg.jpg)")},children:(0,f.jsxs)("div",{className:"flex gap-8 rounded-r-xl rounded-b-xl bg-black bg-opacity-40 py-16 px-20 transition hover:bg-opacity-60 md:py-16 md:px-20",children:[(0,f.jsxs)("div",{className:"flex flex-col justify-center gap-4 text-white md:basis-3/5",children:[(0,f.jsx)("h1",{className:"text-2xl font-medium",children:(0,f.jsx)("span",{className:"cursor-pointer hover:text-blue-400",children:a.name})}),(0,f.jsx)("p",{className:"text-lg",children:a.description}),(0,f.jsxs)("div",{className:"text-lg",children:[(0,f.jsx)("span",{className:"font-medium",children:"Tools \u2014 "})," ",a.tools]})]}),(0,f.jsx)("div",{className:"items-right hidden grow basis-1/3 items-center justify-end md:flex",children:(0,f.jsx)("div",{className:"w-full rounded-lg",children:(0,f.jsx)(g(),{src:"".concat(i.v.IMG_DIR).concat(a.directory,"/title.jpg"),alt:a.name,width:"200",height:"200",objectFit:"cover",layout:"responsive",className:"cursor-pointer rounded-lg transition hover:scale-105 hover:opacity-80"})})})]})})})})},k=a(15),l=function(a){var b=a.games;return(0,f.jsx)("div",{className:"flex flex-col gap-12",children:b.map(function(b,a){return(0,f.jsx)(k.E.div,{initial:{opacity:0,marginTop:-75},animate:{opacity:1,marginTop:-0},transition:{delay:.15*a},children:(0,f.jsx)(j,{game:b},a)},a)})})}},7697:function(e,b,a){"use strict";a.d(b,{Z:function(){return o}});var f=a(5893),c=a(9008),g=a.n(c),h=a(15),d=a(1664),i=a.n(d),j=a(7294),k=a(3854),l=[{title:"Home",url:"/"},{title:"Games",url:"/games"},{title:"Projects",url:"/projects"},{title:"About",url:"/about"},],m=function(){var a=(0,j.useState)(!1),b=a[0],d=a[1],c=function(){return l.map(function(a,b){return(0,f.jsx)("div",{children:(0,f.jsx)(i(),{href:a.url,children:(0,f.jsx)("a",{children:(0,f.jsx)("div",{className:"rounded-md p-1 px-2 transition hover:text-blue-700",children:(0,f.jsx)("span",{className:"font-bold",children:a.title})})})})},b)})};return(0,f.jsxs)("nav",{children:[(0,f.jsxs)("div",{className:"container mx-auto my-10 flex items-center gap-2 px-12 sm:px-12 md:px-24",children:[(0,f.jsxs)("div",{className:"grow text-lg font-bold",children:[(0,f.jsx)("div",{children:(0,f.jsx)(i(),{href:"/",children:(0,f.jsx)("a",{children:"Fahd Aslam"})})}),(0,f.jsx)("div",{children:(0,f.jsx)(i(),{href:"/",children:(0,f.jsx)("a",{children:(0,f.jsx)("span",{className:"text-gray-500",children:"Game & Web Developer"})})})})]}),(0,f.jsx)("div",{className:"ml-3 hidden flex-col items-end sm:flex sm:flex-row",children:c()}),(0,f.jsx)("button",{className:"transition hover:cursor-pointer hover:opacity-50 sm:hidden",onClick:function(){return d(function(a){return!a})},children:b?(0,f.jsx)(k.apv,{className:"text-xl"}):(0,f.jsx)(k.r0I,{className:"text-xl"})})]}),b?(0,f.jsx)(h.E.div,{initial:{marginTop:-50},animate:{marginTop:-0},children:(0,f.jsx)("div",{className:"ml-10 pb-8 sm:hidden",children:c()})}):null]})},n=function(){return(0,f.jsx)("footer",{className:"container mx-auto my-12 flex justify-center",children:(0,f.jsx)(i(),{href:"mailto:flaslam@gmail.com",children:(0,f.jsx)("a",{target:"_blank",className:"hover:text-blue-800",children:(0,f.jsx)(k.hBs,{className:"text-3xl"})})})})},o=function(a){var c=a.children,b=a.title,d=b?"Fahd Aslam | ".concat(b):"Fahd Aslam";return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(g(),{children:[(0,f.jsx)("title",{children:d}),(0,f.jsx)("meta",{name:"description",content:"Fahd Aslam Portfolio"}),(0,f.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,f.jsx)(m,{}),(0,f.jsx)("main",{children:c}),(0,f.jsx)(n,{})]})}},8288:function(c,a,b){"use strict";b.d(a,{v:function(){return d}});var d={LINK_DIR:"/games/",IMG_DIR:"/images/games/"}},166:function(c,b,a){"use strict";a.r(b);var d=a(5893),e=a(7697),f=a(5954),g=a(4639),h=a(15);b.default=function(){return(0,d.jsx)(e.Z,{title:"Games",children:(0,d.jsx)(h.E.div,{initial:{opacity:0,marginTop:-75},animate:{opacity:1,marginTop:-0},children:(0,d.jsx)("div",{className:"container mx-auto px-12",children:(0,d.jsx)(f.Z,{games:g.T})})})})}},4639:function(c,a,b){"use strict";b.d(a,{T:function(){return d}});var d=[{directory:"distance",name:"Distance",tools:"C# (Unity), Blender, FMOD",description:"3D action RPG featuring procedurally generated levels, fast-paced enemy combat encounters and story elements in between levels.",abouts:["Programming, design, 3D modeling, animation, music & SFX.","Dungeon levels are procedurally generated at runtime, making them unique in every playthrough.","Combat system, weapon and skill upgrades.","Varied enemy AI types and boss encounters.","Adaptive soundtrack based on environment.",],screenshots:3,videos:1},{directory:"respite",name:"Respite",tools:"C# (Unity), Blender, FMOD",description:"3D point-and-click narrative game featuring hand-crafted environments and stories about left behind spaces.",abouts:["Programming, design, 3D modeling, animation, music & SFX.","Branching narrative story.","Interactive environments and objects.","Replayable story with different outcomes.",],videos:2},{directory:"weknowthetruth",name:"We Know The Truth",tools:"C# (Unity), Blender, FMOD",description:"Visual novel featuring a branching narrative and point-and-click explorable 3D environments with decision based consequences and multiple endings.",roles:["Delivered on all programming, 3D art and audio requirements.","Collaborated with a team who wrote and directed the game.","Created scripting commands to allow writers to control game flow and on-screen scenes, characters and animations.",],screenshots:3},{directory:"superstakeout",name:"Super Stakeout",tools:"C# (Unity), Blender, FMOD",description:"First-person adventure game. A narrative-driven simulation of hardboiled, on-the-ground detective work set in 1985 as a string of serial murders rock San Francisco.",abouts:["Programming, design, 3D modeling, music & SFX.","Use clues from your mission case file to identify your target.","Converse with your partner in your patrol car.","In between missions, dialogue sequences fill in details about the case.",],screenshots:2},{directory:"bloodshot",name:"Bloodshot",tools:"C# (Unity), Blender, FMOD",description:"Isometric 3D stealth action game focused on disposing of enemies within a time-limit using limited resources.",abouts:["Programming, design, 3D modeling, animation, music & SFX.","Action game focused on a 'one against many' approach with limited resources. ","Fast level-based gameplay with challenges for time limits, going undetected, or going all out.","Varied enemy AI system with brutal difficulty, each short level requiring planning and replayability.",],screenshots:3},{directory:"scramble",name:"Scramble",tools:"C# (Unity), Blender, FMOD",description:"Local multiplayer top-down 3D beat-em-up game where up to four players face off in fast-paced combat using varied weapons and abilities.",abouts:["Programming, design, 3D modeling, animation, music & SFX.","Drop-in local multiplayer supporting several controllers for up to 4 players.","Randomised weapon and upgrade drops for varied competition.",],screenshots:3},{directory:"rhythmfish",name:"Rhythm Fish",tools:"C# (Unity), Blender, FMOD",description:"Fishing-based rhythm with gameplay synchronised to music. Catch fish, upgrade your gear and travel to new islands.",abouts:["Programming, design, 3D modeling, animation, music & SFX.","Rhythm based gameplay in synchronisation with game music","Upgrade paths and unlockable lofi music tracks.",],screenshots:3},{directory:"airpusher",name:"Airpusher",tools:"C# (Unity), Blender, FMOD",description:"First-person shooter/platformer with focused on agility and forward momentum. Features intricately designed levels with multiple routes, collectible power-ups and enemy encounters.",abouts:["A speed-running game with a focus on replayability to find optimum routes.","Dozens of hand-crafted levels with multiple pathways, unlockables and challenges.","Limited resources including various different one-time use power-ups such as dash, stomp and slow-motion.","Weapons systems with limited ammo to dispose of enemy threats.",],screenshots:3},{directory:"latetaxi",name:"Late Taxi",tools:"C# (Unity), Blender, FMOD",description:"A top-down driving simulator with interactive dialogue choices. Take passengers from destination to destination and learn more about the driver in the process.",abouts:["Programming, design, 3D modeling, animation, music & SFX.","City level map is regenerated at runtime.","Endless gameplay loop continues until the player is ready to end their shift.",],screenshots:2},]}},function(a){a.O(0,[556,364,675,774,888,179],function(){var b;return a(a.s=1059)}),_N_E=a.O()}])