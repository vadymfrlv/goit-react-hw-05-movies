"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[802],{9155:function(e,t,r){r.d(t,{Z:function(){return l}});var a=r(501),n=r(6871),s="MoviesList_listContainer__b80jf",i="MoviesList_list__0Owr9",c="MoviesList_item__eePYv",o="MoviesList_img__v4jFC",u=r(184),l=function(e){var t=e.data,r=e.isHomePage?"movies/":"",l=(0,n.TH)();return(0,u.jsx)("div",{className:s,children:(0,u.jsx)("ul",{className:i,children:t.map((function(e){return(0,u.jsx)("li",{className:c,children:(0,u.jsx)(a.rU,{to:"".concat(r).concat(e.id),state:{from:l},children:e.poster_path?(0,u.jsx)("img",{className:o,src:"https://image.tmdb.org/t/p/w500/".concat(e.poster_path),alt:e.name,width:"150",height:"200"}):(0,u.jsx)("img",{className:o,src:"https://raw.githubusercontent.com/vadymfrlv/storage/b4e0abb7f45980d92f3ee2da26a5960181a17f8f/filmoteka/posterholder.jpg",alt:"",width:"150",height:"200"})})},e.id)}))})})}},3418:function(e,t,r){r.d(t,{Z:function(){return s}});var a="Section_section__Z2PLw",n=r(184),s=function(e){var t=e.children;return(0,n.jsx)("div",{className:a,children:t})}},8068:function(e,t,r){r.r(t),r.d(t,{default:function(){return E}});var a=r(5861),n=r(885),s=r(7757),i=r.n(s),c=r(2791),o=r(501),u=r(8142),l=r(2019),h=r(3418),f="SearchForm_form__o80os",m="SearchForm_input__HOxJo",v="SearchForm_formBtn__0vNuW",_=r(184),p=function(e){var t=e.setSearch,r=e.setData,s=e.setStatus,o=(0,c.useState)(""),h=(0,n.Z)(o,2),p=h[0],d=h[1];return(0,_.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""!==p){t({query:p});var n=function(){var e=(0,a.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(l.Z.PENDING),e.prev=1,e.next=4,u.Z.search(p,1);case 4:t=e.sent,r(t.results),s(l.Z.RESOLVED),d(""),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),s(l.Z.REJECTED);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}();n()}},className:f,children:[(0,_.jsx)("input",{className:m,type:"text",name:"query",value:p,onChange:function(e){d(e.target.value.trimStart())}}),(0,_.jsx)("button",{type:"submit",className:v})]})},d=r(7282),Z=r(7552),g=r(9155),x="MovieSearchPage_title__nNoho",E=function(){var e,t=(0,o.lr)(),r=(0,n.Z)(t,2),s=r[0],f=r[1],m=(0,c.useState)([]),v=(0,n.Z)(m,2),E=v[0],j=v[1],N=(0,c.useState)(1),S=(0,n.Z)(N,2),w=S[0],D=S[1],b=(0,c.useState)(l.Z.IDLE),L=(0,n.Z)(b,2),k=L[0],y=L[1],P=null!==(e=s.get("query"))&&void 0!==e?e:"";return(0,c.useEffect)((function(){if(""!==P){D(1);var e=function(){var e=(0,a.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(l.Z.PENDING),e.prev=1,e.next=4,u.Z.search(P,w);case 4:t=e.sent,j(t.results),y(l.Z.RESOLVED),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),y(l.Z.REJECTED);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();e()}}),[]),(0,_.jsxs)(h.Z,{children:[(0,_.jsx)(p,{setSearch:f,setData:j,setStatus:y}),k===l.Z.PENDING&&(0,_.jsx)(d.Z,{}),k===l.Z.RESOLVED&&0===E.length&&(0,_.jsxs)("p",{className:x,children:['Nothing was found for "',P,'"']}),k===l.Z.RESOLVED&&E.length>0&&""!==P&&(0,_.jsx)(g.Z,{data:E,isHomePage:!1}),k===l.Z.REJECTED&&(0,_.jsx)(Z.Z,{message:"Oops, something went wrong! Please try again!"})]})}}}]);
//# sourceMappingURL=Movie Search Page.548dec90.chunk.js.map