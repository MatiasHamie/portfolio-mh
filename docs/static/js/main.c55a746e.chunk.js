(this["webpackJsonpportfolio-mh"]=this["webpackJsonpportfolio-mh"]||[]).push([[0],{30:function(e,t,c){},31:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c(1),i=c(16),n=c.n(i),r=c(8),l=c(2),o=c.p+"static/media/me-home.e24fb752.png",j=c.p+"static/media/capa_1.8b030b7f.png",d=c.p+"static/media/capa_2.cc3bfd65.png",b=c.p+"static/media/capa_3.8b030b7f.png",m=c(17),h=c.n(m),u=function(){var e=Object(s.useRef)(null);return Object(s.useEffect)((function(){var t=new h.a(e.current,{relativeInput:!0,limitX:10});return t.enable(),function(){return t.disable()}}),[]),Object(a.jsxs)("div",{id:"scene",ref:e,children:[Object(a.jsx)("img",{className:"capa1",src:j,alt:"capa1","data-depth":".8"}),Object(a.jsx)("img",{className:"capa2",src:d,alt:"capa2","data-depth":".2"}),Object(a.jsx)("img",{className:"capa3",src:b,alt:"capa3","data-depth":".4"})]})},x=function(){return Object(a.jsxs)("div",{style:{position:"relative",height:"90vh"},children:[Object(a.jsx)(u,{}),Object(a.jsxs)("div",{className:"home-container",children:[Object(a.jsx)("div",{className:"home_me-img","data-depth":"0",children:Object(a.jsx)("img",{className:"me",src:o,alt:"me"})}),Object(a.jsxs)("div",{className:"home_description","data-depth":"0",children:[Object(a.jsxs)("h1",{className:"home_title",children:[Object(a.jsx)("b",{children:"M"}),"ATIAS ",Object(a.jsx)("b",{children:"H"}),"AMIE"]}),Object(a.jsx)("h3",{className:"home_subtitle",children:"PROGRAMADOR"})]})]})]})},O=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("h1",{children:"About Page"})})},p=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("h1",{children:"Contact Page"})})},v=c(20),f=c(19),g=function(e){var t=e.image,c=e.title,s=e.desc;return Object(a.jsx)("div",{className:"card-container",children:Object(a.jsxs)("div",{className:"card",children:[Object(a.jsx)("img",{className:"card-img",src:t,alt:"waves"}),Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsx)("h1",{className:"card-title",children:c}),Object(a.jsx)("h3",{className:"card-description",children:s})]})]})})},N=[{id:0,image:c.p+"static/media/capture.c4124558.png",title:"Capture",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur eaque dolorem itaque, quos ex consequuntur"},{id:1,image:c.p+"static/media/beatmaker.1c9a1ab0.png",title:"Beatmaker",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur eaque dolorem itaque, quos ex consequuntur"},{id:2,image:c.p+"static/media/waves.803c9db4.png",title:"Waves",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur eaque dolorem itaque, quos ex consequuntur"}],_=function(){var e=Object(s.useState)(0),t=Object(f.a)(e,2),c=t[0],i=t[1];return Object(a.jsxs)("div",{className:"portfolio-container",children:[Object(a.jsxs)("div",{className:"portfolio_description animate__animated animate__bounce",children:[Object(a.jsxs)("h1",{className:"portfolio_title",children:[Object(a.jsx)("b",{className:"portfolio_title-initial",children:"P"}),"ortafolio"]}),Object(a.jsx)("h3",{className:"portfolio_subtitle",children:"Trabajos realizados por mi"}),Object(a.jsxs)("div",{className:"button-container",children:[Object(a.jsx)("button",{onClick:function(e){var t=0===c?N.length-1:c-1;i(t),console.log("prev",c)},children:Object(a.jsx)("i",{className:"fas fa-arrow-circle-left"})}),Object(a.jsx)("button",{onClick:function(e){var t=c===N.length-1?0:c+1;i(t),console.log("next",c)},children:Object(a.jsx)("i",{className:"fas fa-arrow-circle-right"})})]})]}),Object(a.jsx)(g,Object(v.a)({},N.filter((function(e){return e.id===c}))[0]))]})},k=c.p+"static/media/LogoMH.4efb6e1d.svg",q=function(){var e=Object(l.g)();return Object(a.jsxs)("div",{className:"nav-bar",children:[Object(a.jsxs)("ul",{className:"nav-bar-link_container",children:[Object(a.jsxs)("div",{className:"styled-links",children:[Object(a.jsx)("div",{className:"nav-bar_link_line"}),Object(a.jsxs)(r.b,{to:"/about",className:"nav-bar_link",children:[Object(a.jsx)("b",{children:"S"}),"obre Mi"]})]}),Object(a.jsxs)("div",{className:"styled-links",children:[Object(a.jsx)("div",{className:"nav-bar_link_line"}),Object(a.jsxs)(r.b,{to:"/portfolio",className:"nav-bar_link",children:[Object(a.jsx)("b",{children:"P"}),"ortafolio"]})]}),Object(a.jsxs)("div",{className:"styled-links",children:[Object(a.jsx)("div",{className:"nav-bar_link_line"}),Object(a.jsxs)(r.b,{to:"/contact",className:"nav-bar_link",children:[Object(a.jsx)("b",{children:"C"}),"ontactame"]})]})]}),Object(a.jsx)("div",{className:"logo-mh",children:Object(a.jsx)("img",{onClick:function(){e.push("/")},src:k,className:"logo",alt:"logo"})})]})},A=function(){return Object(a.jsx)("div",{children:Object(a.jsxs)(r.a,{children:[Object(a.jsx)(q,{}),Object(a.jsxs)(l.d,{children:[Object(a.jsx)(l.b,{exact:!0,path:"/",component:x}),Object(a.jsx)(l.b,{exact:!0,path:"/about",component:O}),Object(a.jsx)(l.b,{exact:!0,path:"/contact",component:p}),Object(a.jsx)(l.b,{exact:!0,path:"/portfolio",component:_}),Object(a.jsx)(l.a,{to:"/"})]})]})})},w=(c(30),function(){return Object(a.jsx)("div",{children:Object(a.jsx)(A,{})})});n.a.render(Object(a.jsx)(w,{}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.c55a746e.chunk.js.map