(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),s=a(6),c=a(2),r=a(7),o=(a(14),a(1)),l=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],d=a(9),u=a.n(d),m=a(0),j=function(e){var t=e.user,a=t.name,n=t.email;return Object(m.jsx)("a",{className:"UserInfo",href:"mailto:".concat(n),children:a})},b=function(e){var t=e.todo,a=t.title,n=t.completed,i=t.user,s=t.id;return Object(m.jsxs)("article",{"data-id":s,className:u()("TodoInfo",{"TodoInfo--completed":n}),children:[Object(m.jsx)("h2",{className:"TodoInfo__title",children:a}),i&&Object(m.jsx)(j,{user:i})]})},h=function(e){var t=e.todos;return Object(m.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(m.jsx)(b,{todo:e},e.id)}))})};function O(e){return l.find((function(t){return t.id===e}))||null}var p=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(r.a)(Object(r.a)({},e),{},{user:O(e.userId)})})),f=function(){var e=Object(o.useState)(!1),t=Object(c.a)(e,2),a=t[0],n=t[1],i=Object(o.useState)(!1),r=Object(c.a)(i,2),d=r[0],u=r[1],j=Object(o.useState)(""),b=Object(c.a)(j,2),f=b[0],x=b[1],v=Object(o.useState)(""),y=Object(c.a)(v,2),N=y[0],S=y[1],I=Object(o.useState)(p),g=Object(c.a)(I,2),C=g[0],_=g[1];return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"Add todo form"}),Object(m.jsxs)("form",{action:"/api/users",method:"POST",onSubmit:function(e){e.preventDefault();var t=N.trim(),a=Math.max.apply(Math,Object(s.a)(C.map((function(e){return e.id}))))+1;if(n(!t),u(!f),t&&f){var i={id:a,title:t,completed:!1,userId:1,user:O(+f)};_([].concat(Object(s.a)(C),[i])),S(""),x("")}},children:[Object(m.jsxs)("div",{className:"field",children:[Object(m.jsx)("span",{className:"label",children:"Title: "}),Object(m.jsx)("input",{type:"text","data-cy":"titleInput",placeholder:"Enter a title",value:N,onChange:function(e){S(e.target.value),n(!1)}}),Object(m.jsx)("span",{className:"error",children:a&&"Please enter a title"})]}),Object(m.jsxs)("div",{className:"field",children:[Object(m.jsx)("span",{className:"label",children:"User: "}),Object(m.jsxs)("select",{name:"User","data-cy":"userSelect",value:f,onChange:function(e){x(e.target.value),u(!1)},children:[Object(m.jsx)("option",{disabled:!0,value:"",children:"Choose a user"}),l.map((function(e){return Object(m.jsx)("option",{value:e.id,children:"".concat(e.name)},e.id)}))]}),Object(m.jsx)("span",{className:"error",children:d&&"Please choose a user"})]}),Object(m.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(m.jsx)("section",{className:"TodoList",children:Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(h,{todos:C})})})]})};i.a.render(Object(m.jsx)(f,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.b65dc1ac.chunk.js.map