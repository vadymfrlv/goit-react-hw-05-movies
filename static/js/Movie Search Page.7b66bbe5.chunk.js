"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[802],{9155:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(501),a=n(6871),s={},u=n(184),c=function(e){var t=e.data,n=e.isHomePage?"movies/":"",c=(0,a.TH)();return(0,u.jsx)("ul",{className:s.list,children:t.map((function(e){return(0,u.jsx)("li",{className:s.item,children:(0,u.jsx)(r.rU,{to:"".concat(n).concat(e.id),state:{from:c},className:s.link,children:e.title})},e.id)}))})}},3418:function(e,t,n){n.d(t,{Z:function(){return s}});var r="Section_section__Z2PLw",a=n(184),s=function(e){var t=e.children;return(0,a.jsx)("div",{className:r,children:t})}},7096:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=n(5861),a=n(885),s=n(7757),u=n.n(s),c=n(2791),i=n(501),o=n(3418),l=n(2019),f=n(8142),v=n(7282),m=n(7552),Z={},h=n(184),p=function(e){var t=e.setSearch,n=e.setData,s=e.setStatus,i=(0,c.useState)(""),o=(0,a.Z)(i,2),v=o[0],m=o[1];return(0,h.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""!==v){t({query:v});var a=function(){var e=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(l.Z.PENDING),e.prev=1,e.next=4,f.Z.search(v,1);case 4:t=e.sent,n(t.results),s(l.Z.RESOLVED),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),s(l.Z.REJECTED);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();a()}},className:Z.form,children:[(0,h.jsx)("input",{className:Z.input,type:"text",name:"query",value:v,onChange:function(e){m(e.target.value.trimStart())}}),(0,h.jsx)("button",{type:"submit",className:Z.formBtn})]})},E=n(9155),d=function(){var e,t=(0,i.lr)(),n=(0,a.Z)(t,2),s=n[0],Z=n[1],d=(0,c.useState)([]),x=(0,a.Z)(d,2),S=x[0],D=x[1],N=(0,c.useState)(1),g=(0,a.Z)(N,2),j=g[0],w=g[1],_=(0,c.useState)(l.Z.IDLE),k=(0,a.Z)(_,2),y=k[0],b=k[1],P=null!==(e=s.get("query"))&&void 0!==e?e:"";return(0,c.useEffect)((function(){if(""!==P){w(1);var e=function(){var e=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(l.Z.PENDING),e.prev=1,e.next=4,f.Z.search(P,j);case 4:t=e.sent,D(t.results),b(l.Z.RESOLVED),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),b(l.Z.REJECTED);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();e()}}),[]),(0,h.jsxs)(o.Z,{children:[(0,h.jsx)(p,{setSearch:Z,setData:D,setStatus:b}),y===l.Z.PENDING&&(0,h.jsx)(v.Z,{}),y===l.Z.RESOLVED&&S.length>0&&""!==P&&(0,h.jsx)(E.Z,{data:S,isHomePage:!1}),y===l.Z.REJECTED&&(0,h.jsx)(m.Z,{message:"Oops, something went wrong! Please try again!"})]})}}}]);
//# sourceMappingURL=Movie Search Page.7b66bbe5.chunk.js.map