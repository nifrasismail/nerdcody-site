(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,t,a){e.exports=a(79)},38:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(8),l=a(9),r=a(11),c=a(10),o=a(0),i=a.n(o),s=a(19),m=a.n(s),d=(a(38),a(1)),u=Object(d.f)(function(e){return Object(o.useEffect)(function(){window.scrollTo(0,0)}),e.children}),g=a(13),v=a(29),p=a.n(v),E=a(15),h={infinite:!0,slidesToShow:3,slidesToScroll:1,dots:!0,arrows:!1,responsive:[{breakpoint:800,settings:{slidesToShow:2}},{breakpoint:993,settings:{slidesToShow:2}},{breakpoint:580,settings:{slidesToShow:2}},{breakpoint:481,settings:{slidesToShow:1}}]},f=a(30),b=a.n(f),N=a(31),w=a.n(N),y=a(6),k=[{icon:i.a.createElement(y.b,null),title:"Mobility",description:"Bring the service to mobile to ease access to the services."},{icon:i.a.createElement(y.d,null),title:"Distributed Services",description:"Distributed services to connect multiple systems."},{icon:i.a.createElement(y.a,null),title:"Reporting & Visualization",description:"Ease of access to the business reports and monitoring via visualization."},{icon:i.a.createElement(y.e,null),title:"Pay as you go",description:"Give chance to the customers to pay as they use only, no offline fees."},{icon:i.a.createElement(y.g,null),title:"Large Scale",description:"Grow as much as in customer bases even touching the billion milestones."},{icon:i.a.createElement(y.h,null),title:"CI & CD",description:"Continously develop and integrate on all services and giving power back to the customers."}],O=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.column,t=k.slice(0,this.props.item);return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"row"},t.map(function(t,a){return i.a.createElement("div",{className:"".concat(e),key:a},i.a.createElement("a",{href:"/service-details"},i.a.createElement("div",{className:"service service__style--2"},i.a.createElement("div",{className:"icon"},t.icon),i.a.createElement("div",{className:"content"},i.a.createElement("h3",{className:"title"},t.title),i.a.createElement("p",null,t.description)))))})))}}]),a}(o.Component),j=function(){return i.a.createElement("div",{className:"footer-style-2 ptb--30 bg_image bg_image--1","data-black-overlay":"6"},i.a.createElement("div",{className:"wrapper plr--50 plr_sm--20"},i.a.createElement("div",{className:"row align-items-center justify-content-between"},i.a.createElement("div",{className:"col-lg-4 col-md-6 col-sm-6 col-12"},i.a.createElement("div",{className:"inner"},i.a.createElement("div",{className:"logo text-center text-sm-left mb_sm--20"},i.a.createElement("a",{href:"/home-one"},i.a.createElement("img",{src:"/assets/images/logo/logo-nerdcody.png",alt:"Logo images"}))))),i.a.createElement("div",{className:"col-lg-4 col-md-12 col-sm-12 col-12"},i.a.createElement("div",{className:"inner text-lg-right text-center mt_md--20 mt_sm--20"},i.a.createElement("div",{className:"text"},i.a.createElement("p",null,"Copyright \xa9 2021 NerdCody (Pvt) Ltd. All Rights Reserved.")))))))},T=a(32),C=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(T.Helmet,null,i.a.createElement("title",null,this.props.pageTitle," || React Multipurpose Template "),i.a.createElement("meta",{name:"description",content:"Trydo \u2013 Multipurpose React Template is a multi-use React template. It is designed to go well with multi-purpose websites. Trydo React Template will create that various landing Template, Creative Agency, And Corporate Website ."})))}}]),a}(o.Component),x=[{textPosition:"text-center",category:"",title:"100% Remote Company",description:"We are working fully remote, and we are not belive in places, we love on talents able to work on remote.",buttonText:"Contact Us",buttonLink:"/contact"}],L=[{image:"image-1",category:"Development",title:"Digital Food Ordering Portal"},{image:"image-2",category:"Development",title:"V-Hospital for Channel a Doctors"},{image:"image-3",category:"Development",title:"Consultunt On-Demand for Virtual Consultation"}],S=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(e){var l;return Object(n.a)(this,a),(l=t.call(this,e)).menuTrigger=l.menuTrigger.bind(Object(g.a)(l)),l.CLoseMenuTrigger=l.CLoseMenuTrigger.bind(Object(g.a)(l)),l.stickyHeader=l.stickyHeader.bind(Object(g.a)(l)),window.addEventListener("load",function(){console.log("All assets are loaded")}),l}return Object(l.a)(a,[{key:"menuTrigger",value:function(){document.querySelector(".header-wrapper").classList.toggle("menu-open")}},{key:"CLoseMenuTrigger",value:function(){document.querySelector(".header-wrapper").classList.remove("menu-open")}},{key:"stickyHeader",value:function(){}},{key:"render",value:function(){window.addEventListener("scroll",function(){window.scrollY>100?document.querySelector(".header--fixed").classList.add("sticky"):document.querySelector(".header--fixed").classList.remove("sticky")});var e=document.querySelectorAll(".has-droupdown > a");for(var t in e)e.hasOwnProperty(t)&&(e[t].onclick=function(){this.parentElement.querySelector(".submenu").classList.toggle("active"),this.classList.toggle("open")});return i.a.createElement(o.Fragment,null,i.a.createElement(C,{pageTitle:"Home Particles"}),i.a.createElement("header",{className:"header-area formobile-menu header--fixed default-color"},i.a.createElement("div",{className:"header-wrapper",id:"header-wrapper"},i.a.createElement("div",{className:"header-left"},i.a.createElement("div",{className:"logo"},i.a.createElement("a",{href:"/"},i.a.createElement("img",{className:"logo-1",src:"/assets/images/logo/logo-nerdcody.png",alt:"Logo Images"}),i.a.createElement("img",{className:"logo-2",src:"/assets/images/logo/logo-nerdcody.png",alt:"Logo Images"})))),i.a.createElement("div",{className:"header-right"},i.a.createElement("nav",{className:"mainmenunav d-lg-block"},i.a.createElement(b.a,{className:"mainmenu",items:["home","service","about","portfolio","team","testimonial","blog","contact"],currentClassName:"is-current",offset:-200},i.a.createElement("li",null,i.a.createElement("a",{href:"#home"},"Home")),i.a.createElement("li",null,i.a.createElement("a",{href:"#service"},"Service")),i.a.createElement("li",null,i.a.createElement("a",{href:"#about"},"About")),i.a.createElement("li",null,i.a.createElement("a",{href:"#portfolio"},"Portfolio")))),i.a.createElement("div",{className:"humberger-menu d-block d-lg-none pl--20"},i.a.createElement("span",{onClick:this.menuTrigger,className:"menutrigger text-white"},i.a.createElement(y.f,null))),i.a.createElement("div",{className:"close-menu d-block d-lg-none"},i.a.createElement("span",{onClick:this.CLoseMenuTrigger,className:"closeTrigger"},i.a.createElement(y.i,null)))))),i.a.createElement("div",{className:"slider-activation slider-creative-agency with-particles",id:"home"},i.a.createElement("div",{className:"bg_image bg_image--27"},x.map(function(e,t){return i.a.createElement("div",{className:"slide slide-style-2 slider-paralax d-flex align-items-center justify-content-center",key:t},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-12"},i.a.createElement("div",{className:"inner ".concat(e.textPosition)},e.category?i.a.createElement("span",null,e.category):"",e.title?i.a.createElement("h1",{className:"title theme-gradient"},e.title):"",e.description?i.a.createElement("p",{className:"description"},e.description):"")))))}))),i.a.createElement("div",{className:"service-area creative-service-wrapper ptb--120 bg_color--1",id:"service"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-6 col-12"},i.a.createElement("div",{className:"section-title text-left mb--30"},i.a.createElement("h2",null,"Our Products"),i.a.createElement("p",null,"As a product company we are building custom products and ditribute to cloud to make people and business life better")))),i.a.createElement("div",{className:"row creative-service"},i.a.createElement("div",{className:"col-lg-12"},i.a.createElement(O,{item:"6",column:"col-lg-4 col-md-6 col-sm-6 col-12 text-left"}))))),i.a.createElement("div",{className:"about-area ptb--120 bg_color--5",id:"about"},i.a.createElement("div",{className:"about-wrapper"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row row--35 align-items-center"},i.a.createElement("div",{className:"col-lg-5"},i.a.createElement("div",{className:"thumbnail",style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%"}},i.a.createElement("img",{className:"w-75",src:"/assets/images/site/logo.jpg",alt:"About Images"}))),i.a.createElement("div",{className:"col-lg-7"},i.a.createElement("div",{className:"about-inner inner"},i.a.createElement("div",{className:"section-title"},i.a.createElement("h2",{className:"title"},"About Us"),i.a.createElement("p",{className:"description"},"We are developing services faster with better security and collobration and deliver them as services with 99.9% customer satisfication. Our team is 100% remote team and non of the factor broken our factors. We are strongly belive on people & talents so we are moving remotely smoothly")),i.a.createElement("div",{className:"row mt--30"},i.a.createElement("div",{className:"col-lg-6 col-md-12 col-sm-12 col-12"},i.a.createElement("div",{className:"about-us-list"},i.a.createElement("h3",{className:"title"},"People & Passion"),i.a.createElement("p",null,"Our passionated team extends the services to large scale and integrate all the touch points."))),i.a.createElement("div",{className:"col-lg-6 col-md-12 col-sm-12 col-12"},i.a.createElement("div",{className:"about-us-list"},i.a.createElement("h3",{className:"title"},"Distributed Services"),i.a.createElement("p",null,"We are digitalizing the services and connecting all the people though our NAP ( Nerd Access Point ).")))))))))),i.a.createElement("div",{className:"portfolio-area pt--120 pb--140 bg_color--1",id:"portfolio"},i.a.createElement("div",{className:"rn-slick-dot"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-6"},i.a.createElement("div",{className:"section-title service-style--3 text-left mb--15 mb_sm--0"},i.a.createElement("h2",{className:"title"},"Our Portfolio"),i.a.createElement("p",null,"There are many variations of projects we are working and continuously improving, and extneding the products to digitalize the world.")))),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-12"},i.a.createElement("div",{className:"slick-space-gutter--15 slickdot--20"},i.a.createElement(p.a,h,L.map(function(e,t){return i.a.createElement("div",{className:"portfolio",key:t},i.a.createElement("div",{className:"thumbnail-inner"},i.a.createElement("div",{className:"thumbnail ".concat(e.image)}),i.a.createElement("div",{className:"bg-blr-image ".concat(e.image)})),i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"inner"},i.a.createElement("p",null,e.category),i.a.createElement("h4",null,i.a.createElement("a",{href:"/portfolio-details"},e.title)))),i.a.createElement(E.b,{className:"link-overlay",to:"/portfolio-details"}))})))))))),i.a.createElement(j,null),i.a.createElement("div",{className:"backto-top"},i.a.createElement(w.a,{showUnder:160},i.a.createElement(y.c,null))))}}]),a}(i.a.Component),A=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function P(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var _=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement(E.a,{basename:"/"},i.a.createElement(u,null,i.a.createElement(d.c,null,i.a.createElement(d.a,{exact:!0,path:"".concat("","/"),component:S}))))}}]),a}(o.Component);m.a.render(i.a.createElement(_,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");A?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):P(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):P(t,e)})}}()}},[[33,1,2]]]);
//# sourceMappingURL=main.b9bec189.chunk.js.map