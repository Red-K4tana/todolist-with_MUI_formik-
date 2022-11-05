(this.webpackJsonptodo16v2=this.webpackJsonptodo16v2||[]).push([[0],{131:function(t,e,n){},132:function(t,e,n){},157:function(t,e,n){"use strict";n.r(e);var a,c,i=n(0),r=n.n(i),o=n(33),s=n.n(o),l=(n(131),function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,228)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,i=e.getLCP,r=e.getTTFB;n(t),a(t),c(t),i(t),r(t)}))}),d=(n(132),n(21)),u=n(15),j=n(16),b=n(104),O=n.n(b).a.create({baseURL:"https://social-network.samuraijs.com/api/1.1/",withCredentials:!0,headers:{"API-KEY":"9bad4dc1-4f5c-485a-93a2-c73a0c7180c8"}}),f=function(){return O.get("todo-lists")},h=function(t){return O.post("todo-lists",{title:t})},m=function(t){return O.delete("todo-lists/".concat(t))},p=function(t,e){return O.put("todo-lists/".concat(t),{title:e})},T=function(t){return O.get("todo-lists/".concat(t,"/tasks"))},v=function(t,e){return O.delete("todo-lists/".concat(t,"/tasks/").concat(e))},g=function(t,e){return O.post("todo-lists/".concat(t,"/tasks"),{title:e})},x=function(t,e,n){return O.put("todo-lists/".concat(t,"/tasks/").concat(e),n)},k=function(t){return O.post("auth/login",t)};!function(t){t[t.New=0]="New",t[t.InProgress=1]="InProgress",t[t.Completed=2]="Completed",t[t.Draft=3]="Draft"}(a||(a={})),function(t){t[t.Low=0]="Low",t[t.Middle=1]="Middle",t[t.Hi=2]="Hi",t[t.Urgently=3]="Urgently",t[t.Later=4]="Later"}(c||(c={}));var S={isInit:!0,status:"idle",error:null},I=function(t){return{type:"APP/SET-ERROR",error:t}},C=function(t){return{type:"APP/SET-STATUS",status:t}},E=function(t,e){t.messages.length?e(I(t.messages[0])):e(I("Some error occurred")),e(C("failed"))},y=function(t,e){e(I(t?"Authorization has been denied for this request."===t?"Authorization please!":t:"Some error occurred")),e(C("failed"))},A=n(3),D={},L=function(t,e,n){return function(a,c){var i=c().tasks[n].find((function(e){return e.id===t}));if(!i)throw new Error("task not found in the state");var r=Object(u.a)({deadline:i.deadline,description:i.description,priority:i.priority,startDate:i.startDate,title:i.title,status:i.status},e);x(n,t,r).then((function(c){if(0===c.data.resultCode){var i=function(t,e,n){return{type:"UPDATE-TASK",model:e,todolistId:n,taskId:t}}(t,e,n);a(i)}else E(c.data,a)})).catch((function(t){y(t,a)}))}},w=[],P=function(){return function(t){t(C("loading")),f().then((function(e){return t({type:"SET-TODOLISTS",todolists:e.data}),t(C("succeeded")),e.data})).then((function(e){e.forEach((function(e){var n;t((n=e.id,function(t){t(C("loading")),T(n).then((function(e){var a=e.data.items;t(function(t,e){return{type:"SET-TASKS",tasks:t,todolistId:e}}(a,n)),t(C("succeeded"))}))}))}))})).catch((function(e){y(e.response.data.message,t)}))}},F=n(218),N=n(224),R=n(10),M=n(209),G=n(219),K=n(205),U=n(2),_=r.a.memo((function(t){var e=t.addItem,n=t.disabled,a=void 0!==n&&n,c=Object(i.useState)(""),r=Object(R.a)(c,2),o=r[0],s=r[1],l=Object(i.useState)(null),d=Object(R.a)(l,2),u=d[0],j=d[1],b=function(){""!==o.trim()?(e(o),s("")):j("Title is required")};return Object(U.jsxs)("div",{children:[Object(U.jsx)(M.a,{variant:"outlined",disabled:a,error:!!u,value:o,onChange:function(t){s(t.currentTarget.value)},onKeyPress:function(t){null!==u&&j(null),13===t.charCode&&b()},label:"Title",helperText:u}),Object(U.jsx)(G.a,{color:"primary",onClick:b,disabled:a,children:Object(U.jsx)(K.a,{})})]})})),H=n(110),V=r.a.memo((function(t){var e=Object(i.useState)(!1),n=Object(R.a)(e,2),a=n[0],c=n[1],r=Object(i.useState)(t.value),o=Object(R.a)(r,2),s=o[0],l=o[1];return a?Object(U.jsx)(M.a,{value:s,onChange:function(t){l(t.currentTarget.value)},autoFocus:!0,onBlur:function(){c(!1),t.onChange(s)}}):Object(U.jsx)("span",{onDoubleClick:function(){c(!0),l(t.value)},children:t.value})})),q=n(216),B=n(206),Y=n(211),Z=r.a.memo((function(t){var e=Object(i.useCallback)((function(){return t.removeTask(t.task.id,t.todolistId)}),[t.task.id,t.todolistId]),n=Object(i.useCallback)((function(e){var n=e.currentTarget.checked;t.changeTaskStatus(t.task.id,n?a.Completed:a.New,t.todolistId)}),[t.task.id,t.todolistId]),c=Object(i.useCallback)((function(e){t.changeTaskTitle(t.task.id,e,t.todolistId)}),[t.task.id,t.todolistId]);return Object(U.jsxs)("div",{className:t.task.status===a.Completed?"is-done":"",children:[Object(U.jsx)(Y.a,{checked:t.task.status===a.Completed,color:"primary",onChange:n}),Object(U.jsx)(V,{value:t.task.title,onChange:c}),Object(U.jsx)(G.a,{onClick:e,children:Object(U.jsx)(B.a,{})})]},t.task.id)})),z=["demo"],J=r.a.memo((function(t){t.demo;var e=Object(H.a)(t,z),n=Object(i.useCallback)((function(t){e.addTask(t,e.todolist.id)}),[e.addTask,e.todolist.id]),c=Object(i.useCallback)((function(t){e.changeTodolistTitle(e.todolist.id,t)}),[e.todolist.id,e.changeTodolistTitle]),r=Object(i.useCallback)((function(){return e.changeFilter("all",e.todolist.id)}),[e.todolist.id,e.changeFilter]),o=Object(i.useCallback)((function(){return e.changeFilter("active",e.todolist.id)}),[e.todolist.id,e.changeFilter]),s=Object(i.useCallback)((function(){return e.changeFilter("completed",e.todolist.id)}),[e.todolist.id,e.changeFilter]),l=e.tasks;return"active"===e.todolist.filter&&(l=e.tasks.filter((function(t){return t.status===a.New}))),"completed"===e.todolist.filter&&(l=e.tasks.filter((function(t){return t.status===a.Completed}))),Object(U.jsxs)("div",{children:[Object(U.jsxs)("h3",{children:[Object(U.jsx)(V,{value:e.todolist.title,onChange:c}),Object(U.jsx)(G.a,{onClick:function(){e.removeTodolist(e.todolist.id)},disabled:"loading"===e.todolist.entityStatus,children:Object(U.jsx)(B.a,{})})]}),Object(U.jsx)(_,{addItem:n,disabled:"loading"===e.todolist.entityStatus}),Object(U.jsx)("div",{children:l.map((function(t){return Object(U.jsx)(Z,{task:t,todolistId:e.todolist.id,removeTask:e.removeTask,changeTaskTitle:e.changeTaskTitle,changeTaskStatus:e.changeTaskStatus},t.id)}))}),Object(U.jsxs)("div",{style:{paddingTop:"10px"},children:[Object(U.jsx)(q.a,{variant:"all"===e.todolist.filter?"outlined":"text",onClick:r,color:"inherit",children:"All"}),Object(U.jsx)(q.a,{variant:"active"===e.todolist.filter?"outlined":"text",onClick:o,color:"primary",children:"Active"}),Object(U.jsx)(q.a,{variant:"completed"===e.todolist.filter?"outlined":"text",onClick:s,color:"secondary",children:"Completed"})]})]})})),X=n(13),$=function(t){var e=t.demo,n=void 0!==e&&e,a=Object(d.c)((function(t){return t.todolists})),c=Object(d.c)((function(t){return t.tasks})),r=Object(d.c)((function(t){return t.auth})).isLoggedIn,o=Object(d.b)();Object(i.useEffect)((function(){n||o(P())}),[]);var s=Object(i.useCallback)((function(t,e){var n=function(t,e){return function(n){v(e,t).then((function(a){var c=function(t,e){return{type:"REMOVE-TASK",taskId:t,todolistId:e}}(t,e);n(c)}))}}(t,e);o(n)}),[]),l=Object(i.useCallback)((function(t,e){var n=function(t,e){return function(n){n(C("loading")),g(e,t).then((function(t){if(0===t.data.resultCode){var e={type:"ADD-TASK",task:t.data.data.item};n(e),n(C("succeeded"))}else E(t.data,n)})).catch((function(t){y(t,n)}))}}(t,e);o(n)}),[]),u=Object(i.useCallback)((function(t,e,n){var a=L(t,{status:e},n);o(a)}),[]),j=Object(i.useCallback)((function(t,e,n){var a=L(t,{title:e},n);o(a)}),[]),b=Object(i.useCallback)((function(t,e){var n={type:"CHANGE-TODOLIST-FILTER",id:e,filter:t};o(n)}),[]),O=Object(i.useCallback)((function(t){var e,n=(e=t,function(t){t(C("loading")),t({type:"CHANGE-TODOLIST-ENTITY-STATUS",id:e,status:"loading"}),m(e).then((function(n){t(function(t){return{type:"REMOVE-TODOLIST",id:t}}(e)),t(C("succeeded"))}))});o(n)}),[]),f=Object(i.useCallback)((function(t,e){var n=function(t,e){return function(n){p(t,e).then((function(a){n(function(t,e){return{type:"CHANGE-TODOLIST-TITLE",id:t,title:e}}(t,e))}))}}(t,e);o(n)}),[]),T=Object(i.useCallback)((function(t){var e=function(t){return function(e){e(C("loading")),h(t).then((function(t){e({type:"ADD-TODOLIST",todolist:t.data.data.item}),e(C("succeeded"))}))}}(t);o(e)}),[o]);return r?Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(F.a,{container:!0,style:{padding:"20px"},children:Object(U.jsx)(_,{addItem:T})}),Object(U.jsx)(F.a,{container:!0,spacing:3,children:a.map((function(t){var e=c[t.id];return Object(U.jsx)(F.a,{item:!0,children:Object(U.jsx)(N.a,{style:{padding:"10px"},children:Object(U.jsx)(J,{todolist:t,tasks:e,removeTask:s,changeFilter:b,addTask:l,changeTaskStatus:u,removeTodolist:O,changeTaskTitle:j,changeTodolistTitle:f,demo:n})})},t.id)}))})]}):Object(U.jsx)(X.a,{to:"/login"})},Q=n(221),W=n(222),tt=n(220),et=n(217),nt=n(223),at=n(208),ct=n(213),it=n(212),rt=r.a.forwardRef((function(t,e){return Object(U.jsx)(it.a,Object(u.a)({elevation:6,ref:e,variant:"filled"},t))}));function ot(){var t=Object(d.c)((function(t){return t.app.error})),e=Object(d.b)(),n=function(t,n){"clickaway"!==n&&e(I(null))};return Object(U.jsx)(ct.a,{open:null!==t,autoHideDuration:6e3,onClose:n,children:Object(U.jsx)(rt,{onClose:n,severity:"error",sx:{width:"100%"},children:t})})}var st=n(214),lt=n(226),dt=n(225),ut=n(203),jt=n(114),bt={isLoggedIn:!0},Ot=function(t){return{type:"login/SET-IS-LOGGED-IN",value:t}},ft=function(t){return function(e){e(C("loading")),k(t).then((function(t){0===t.data.resultCode?(e(Ot(!0)),e(C("succeeded"))):E(t.data,e)})).catch((function(t){y(t,e)}))}},ht=function(){var t=Object(d.c)((function(t){return t.auth})).isLoggedIn,e=Object(d.b)(),n=Object(jt.a)({initialValues:{email:"",password:"",rememberMe:!1},validate:function(t){var e={};return t.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(t.email)||(e.email="Invalid email address"):e.email="Required email",t.password?t.password.length<2&&(e.password="Must be 2 characters or less"):e.password="Required password",e},onSubmit:function(t){e(ft(t)),n.resetForm()}});return!0===t?Object(U.jsx)(X.a,{to:"/"}):Object(U.jsx)(F.a,{container:!0,justifyContent:"center",children:Object(U.jsx)(F.a,{item:!0,justifyContent:"center",children:Object(U.jsxs)(st.a,{children:[Object(U.jsxs)(ut.a,{children:[Object(U.jsxs)("p",{children:["To log in get registered",Object(U.jsx)("a",{href:"https://social-network.samuraijs.com/",target:"_blank",children:" here"})]}),Object(U.jsx)("p",{children:"or use common test account credentials:"}),Object(U.jsx)("p",{children:"Email: free@samuraijs.com"}),Object(U.jsx)("p",{children:"Password: more than 2 characters"})]}),Object(U.jsx)("form",{onSubmit:n.handleSubmit,children:Object(U.jsxs)(dt.a,{children:[Object(U.jsx)(M.a,Object(u.a)({label:"Email",margin:"normal"},n.getFieldProps("email"))),n.errors.email?Object(U.jsx)("div",{style:{color:"red"},children:n.errors.email}):null,Object(U.jsx)(M.a,Object(u.a)({type:"password",label:"Password",margin:"normal"},n.getFieldProps("password"))),n.errors.password?Object(U.jsx)("div",{style:{color:"red"},children:n.errors.password}):null,Object(U.jsx)(lt.a,{label:"Remember me",control:Object(U.jsx)(Y.a,Object(u.a)({},n.getFieldProps("rememberMe")))}),Object(U.jsx)(q.a,{type:"submit",variant:"contained",color:"primary",children:"Login"})]})})]})})})},mt=n(83),pt=n.n(mt);var Tt=function(){return Object(U.jsx)("div",{className:pt.a.parentError404,children:Object(U.jsx)("div",{className:pt.a.error404})})},vt=n(227);var gt=function(t){var e=t.demo,n=void 0!==e&&e,a=Object(d.b)(),c=Object(d.c)((function(t){return t.app.status})),r=Object(d.c)((function(t){return t.app.isInit})),o=Object(d.c)((function(t){return t.auth})).isLoggedIn;return Object(i.useEffect)((function(){a(ft({email:"ceptor.nill@gmail.com",password:"123456"}))}),[]),Object(i.useEffect)((function(){}),[]),r?Object(U.jsxs)("div",{className:"App",children:[Object(U.jsx)(ot,{}),Object(U.jsxs)(Q.a,{position:"static",children:[Object(U.jsxs)(W.a,{children:[Object(U.jsx)(G.a,{edge:"start",color:"inherit","aria-label":"menu",children:Object(U.jsx)(at.a,{})}),Object(U.jsx)(tt.a,{variant:"h6",children:"Todolist"}),o&&Object(U.jsx)(q.a,{variant:"contained",color:"primary",onClick:function(){},children:"logout"})]}),"loading"===c&&Object(U.jsx)(nt.a,{})]}),Object(U.jsx)(et.a,{fixed:!0,children:Object(U.jsxs)(X.d,{children:[Object(U.jsx)(X.b,{path:"/",element:Object(U.jsx)($,{demo:n})}),Object(U.jsx)(X.b,{path:"/login",element:Object(U.jsx)(ht,{})})," ",Object(U.jsx)(X.b,{path:"*",element:Object(U.jsx)(Tt,{})})]})})]}):Object(U.jsx)("div",{style:{position:"fixed",top:"30%",textAlign:"center",width:"100%"},children:Object(U.jsx)(vt.a,{})})},xt=n(75),kt=n(113),St=Object(xt.b)({tasks:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"REMOVE-TASK":return Object(u.a)(Object(u.a)({},t),{},Object(A.a)({},e.todolistId,t[e.todolistId].filter((function(t){return t.id!==e.taskId}))));case"ADD-TASK":return Object(u.a)(Object(u.a)({},t),{},Object(A.a)({},e.task.todoListId,[e.task].concat(Object(j.a)(t[e.task.todoListId]))));case"UPDATE-TASK":return Object(u.a)(Object(u.a)({},t),{},Object(A.a)({},e.todolistId,t[e.todolistId].map((function(t){return t.id===e.taskId?Object(u.a)(Object(u.a)({},t),e.model):t}))));case"ADD-TODOLIST":return Object(u.a)(Object(u.a)({},t),{},Object(A.a)({},e.todolist.id,[]));case"REMOVE-TODOLIST":var n=Object(u.a)({},t);return delete n[e.id],n;case"SET-TODOLISTS":var a=Object(u.a)({},t);return e.todolists.forEach((function(t){a[t.id]=[]})),a;case"SET-TASKS":return Object(u.a)(Object(u.a)({},t),{},Object(A.a)({},e.todolistId,e.tasks));default:return t}},todolists:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"REMOVE-TODOLIST":return t.filter((function(t){return t.id!==e.id}));case"ADD-TODOLIST":return[Object(u.a)(Object(u.a)({},e.todolist),{},{filter:"all",entityStatus:"idle"})].concat(Object(j.a)(t));case"CHANGE-TODOLIST-TITLE":return t.map((function(t){return t.id===e.id?Object(u.a)(Object(u.a)({},t),{},{title:e.title}):t}));case"CHANGE-TODOLIST-FILTER":return t.map((function(t){return t.id===e.id?Object(u.a)(Object(u.a)({},t),{},{filter:e.filter}):t}));case"CHANGE-TODOLIST-ENTITY-STATUS":return t.map((function(t){return t.id===e.id?Object(u.a)(Object(u.a)({},t),{},{entityStatus:e.status}):t}));case"SET-TODOLISTS":return e.todolists.map((function(t){return Object(u.a)(Object(u.a)({},t),{},{filter:"all",entityStatus:"idle"})}));default:return t}},app:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"APP/SET-STATUS":return Object(u.a)(Object(u.a)({},t),{},{status:e.status});case"APP/SET-ERROR":return Object(u.a)(Object(u.a)({},t),{},{error:e.error});case"APP/IS-INIT":return Object(u.a)(Object(u.a)({},t),{},{isInit:e.isInit});default:return Object(u.a)({},t)}},auth:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:bt,e=arguments.length>1?arguments[1]:void 0;return"login/SET-IS-LOGGED-IN"===e.type?Object(u.a)(Object(u.a)({},t),{},{isLoggedIn:e.value}):t}}),It=Object(xt.c)(St,Object(xt.a)(kt.a));window.store=It;var Ct=n(54);s.a.render(Object(U.jsx)(r.a.StrictMode,{children:Object(U.jsx)(d.a,{store:It,children:Object(U.jsx)(Ct.a,{basename:"/todolist-with_MUI_formik-",children:Object(U.jsx)(gt,{})})})}),document.getElementById("root")),l()},83:function(t,e,n){t.exports={parentError404:"Error404_parentError404__rLVDs",error404:"Error404_error404__1tXVr"}}},[[157,1,2]]]);
//# sourceMappingURL=main.760d7618.chunk.js.map