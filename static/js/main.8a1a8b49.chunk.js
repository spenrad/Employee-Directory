(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{20:function(e,t,r){},22:function(e,t,r){},23:function(e,t,r){},24:function(e,t,r){},25:function(e,t,r){},44:function(e,t,r){},45:function(e,t,r){"use strict";r.r(t);var n=r(2),c=r(13),i=r.n(c),s=(r(20),r(0));var a=function(e){var t=e.children;return Object(s.jsx)("div",{children:t})};r(22);var l=function(){return Object(s.jsxs)("div",{className:"header",children:[Object(s.jsx)("h1",{children:"Employee Directory"}),Object(s.jsx)("p",{children:"Sort and search for your colleagues here!"})]})},j=r(3),o=r(15);r(23),r(24);var d=function(e){return Object(s.jsxs)("tr",{id:"tableHeader",children:[Object(s.jsx)("th",{children:" Picture"}),Object(s.jsx)("th",{onClick:e.handleClick,children:" Name"}),Object(s.jsx)("th",{children:" E-mail"}),Object(s.jsx)("th",{children:" Phone Number"}),Object(s.jsx)("th",{children:" Age"})]})};r(25);var u=function(e){return e.employees.map((function(e){return Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:Object(s.jsx)("img",{src:e.picture.medium})}),Object(s.jsxs)("td",{children:[e.name.first+" "+e.name.last," "]}),Object(s.jsx)("td",{children:e.email}),Object(s.jsx)("td",{children:e.cell}),Object(s.jsx)("td",{children:e.dob.age})]})}))},h=r(14),b=r.n(h),m=function(){return b.a.get("https://randomuser.me/api/?nat=us&results=69&exc=location,login,registered,id,gender,phone,nat")};r(44);var f=function(e){return Object(s.jsx)("div",{id:"searchForm",children:Object(s.jsx)("form",{children:Object(s.jsx)("input",{onChange:e.handleChange,placeholder:"Type Name Here"})})})};var O=function(e){var t=Object(n.useState)({employeeArr:[],asc:!0}),r=Object(o.a)(t,2),c=r[0],i=r[1];return Object(n.useEffect)((function(){m().then((function(e){i(Object(j.a)(Object(j.a)({},c),{},{employeeArr:e.data.results}))}))}),[]),Object(s.jsxs)("div",{children:[Object(s.jsx)(f,{handleChange:function(e){e.preventDefault();var t=e.target.value,r=c.employeeArr.filter((function(e){var r=e.name.first+" "+e.name.last;if(console.log("value",t,"names",r),-1!==r.indexOf(t))return e}));i(Object(j.a)(Object(j.a)({},c),{},{employeeArr:r}))}}),Object(s.jsxs)("table",{children:[Object(s.jsx)(d,{handleClick:function(){if(!0===c.asc)var e=c.employeeArr.sort((function(e,t){return e.name.first<t.name.first?-1:e.name.first>t.name.first?1:0}));else e=c.employeeArr.sort((function(e,t){return e.name.first>t.name.first?-1:e.name.first<t.name.first?1:0}));i(Object(j.a)(Object(j.a)({},c),{},{employeeArr:e,asc:!c.asc}))}}),c.employeeArr.length>0?Object(s.jsx)(u,{employees:c.employeeArr}):""]})]})};var x=function(){return Object(s.jsxs)(a,{children:[Object(s.jsx)(l,{}),Object(s.jsx)(O,{})]})};i.a.render(Object(s.jsx)(x,{}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.8a1a8b49.chunk.js.map