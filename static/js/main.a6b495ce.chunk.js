(this.webpackJsonptodo16v2=this.webpackJsonptodo16v2||[]).push([[0],{131:function(t,e,n){},132:function(t,e,n){},157:function(t,e,n){"use strict";n.r(e);var a,c,i=n(0),r=n.n(i),o=n(33),s=n.n(o),d=(n(131),function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,228)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,i=e.getLCP,r=e.getTTFB;n(t),a(t),c(t),i(t),r(t)}))}),l=(n(132),n(21)),u=n(15),j=n(16),b=n(104),O=n.n(b).a.create({baseURL:"https://social-network.samuraijs.com/api/1.1/",withCredentials:!0,headers:{"API-KEY":"9bad4dc1-4f5c-485a-93a2-c73a0c7180c8"}}),f=function(){return O.get("todo-lists")},h=function(t){return O.post("todo-lists",{title:t})},m=function(t){return O.delete("todo-lists/".concat(t))},p=function(t,e){return O.put("todo-lists/".concat(t),{title:e})},T=function(t){return O.get("todo-lists/".concat(t,"/tasks"))},g=function(t,e){return O.delete("todo-lists/".concat(t,"/tasks/").concat(e))},v=function(t,e){return O.post("todo-lists/".concat(t,"/tasks"),{title:e})},x=function(t,e,n){return O.put("todo-lists/".concat(t,"/tasks/").concat(e),n)},k=function(t){return O.post("auth/login",t)},I=function(){return O.get("auth/me")},S=function(){return O.delete("auth/login")};!function(t){t[t.New=0]="New",t[t.InProgress=1]="InProgress",t[t.Completed=2]="Completed",t[t.Draft=3]="Draft"}(a||(a={})),function(t){t[t.Low=0]="Low",t[t.Middle=1]="Middle",t[t.Hi=2]="Hi",t[t.Urgently=3]="Urgently",t[t.Later=4]="Later"}(c||(c={}));var C={isInit:!1,status:"idle",error:null},E=function(t){return{type:"APP/SET-ERROR",error:t}},y=function(t){return{type:"APP/SET-STATUS",status:t}},A=function(t,e){t.messages.length?e(E(t.messages[0])):e(E("Some error occurred")),e(y("failed"))},D=function(t,e){e(E(t?"Authorization has been denied for this request."===t?"Authorization please!":t:"Some error occurred")),e(y("failed"))},L=n(3),w={},P=function(t,e,n){return function(a,c){var i=c().tasks[n].find((function(e){return e.id===t}));if(!i)throw new Error("task not found in the state");var r=Object(u.a)({deadline:i.deadline,description:i.description,priority:i.priority,startDate:i.startDate,title:i.title,status:i.status},e);x(n,t,r).then((function(c){if(0===c.data.resultCode){var i=function(t,e,n){return{type:"UPDATE-TASK",model:e,todolistId:n,taskId:t}}(t,e,n);a(i)}else A(c.data,a)})).catch((function(t){D(t,a)}))}},N=[],F=function(){return function(t){t(y("loading")),f().then((function(e){return t({type:"SET-TODOLISTS",todolists:e.data}),t(y("succeeded")),e.data})).then((function(e){e.forEach((function(e){var n;t((n=e.id,function(t){t(y("loading")),T(n).then((function(e){var a=e.data.items;t(function(t,e){return{type:"SET-TASKS",tasks:t,todolistId:e}}(a,n)),t(y("succeeded"))}))}))}))})).catch((function(e){D(e.response.data.message,t)}))}},R=n(218),M=n(224),G=n(10),K=n(209),U=n(219),_=n(205),H=n(2),V=r.a.memo((function(t){var e=t.addItem,n=t.disabled,a=void 0!==n&&n,c=Object(i.useState)(""),r=Object(G.a)(c,2),o=r[0],s=r[1],d=Object(i.useState)(null),l=Object(G.a)(d,2),u=l[0],j=l[1],b=function(){""!==o.trim()?(e(o),s("")):j("Title is required")};return Object(H.jsxs)("div",{children:[Object(H.jsx)(K.a,{variant:"outlined",disabled:a,error:!!u,value:o,onChange:function(t){s(t.currentTarget.value)},onKeyPress:function(t){null!==u&&j(null),13===t.charCode&&b()},label:"Title",helperText:u}),Object(H.jsx)(U.a,{color:"primary",onClick:b,disabled:a,children:Object(H.jsx)(_.a,{})})]})})),q=n(110),B=r.a.memo((function(t){var e=Object(i.useState)(!1),n=Object(G.a)(e,2),a=n[0],c=n[1],r=Object(i.useState)(t.value),o=Object(G.a)(r,2),s=o[0],d=o[1];return a?Object(H.jsx)(K.a,{value:s,onChange:function(t){d(t.currentTarget.value)},autoFocus:!0,onBlur:function(){c(!1),t.onChange(s)}}):Object(H.jsx)("span",{onDoubleClick:function(){c(!0),d(t.value)},children:t.value})})),Y=n(216),Z=n(206),z=n(211),J=r.a.memo((function(t){var e=Object(i.useCallback)((function(){return t.removeTask(t.task.id,t.todolistId)}),[t.task.id,t.todolistId]),n=Object(i.useCallback)((function(e){var n=e.currentTarget.checked;t.changeTaskStatus(t.task.id,n?a.Completed:a.New,t.todolistId)}),[t.task.id,t.todolistId]),c=Object(i.useCallback)((function(e){t.changeTaskTitle(t.task.id,e,t.todolistId)}),[t.task.id,t.todolistId]);return Object(H.jsxs)("div",{className:t.task.status===a.Completed?"is-done":"",children:[Object(H.jsx)(z.a,{checked:t.task.status===a.Completed,color:"primary",onChange:n}),Object(H.jsx)(B,{value:t.task.title,onChange:c}),Object(H.jsx)(U.a,{onClick:e,children:Object(H.jsx)(Z.a,{})})]},t.task.id)})),X=["demo"],$=r.a.memo((function(t){t.demo;var e=Object(q.a)(t,X),n=Object(i.useCallback)((function(t){e.addTask(t,e.todolist.id)}),[e.addTask,e.todolist.id]),c=Object(i.useCallback)((function(t){e.changeTodolistTitle(e.todolist.id,t)}),[e.todolist.id,e.changeTodolistTitle]),r=Object(i.useCallback)((function(){return e.changeFilter("all",e.todolist.id)}),[e.todolist.id,e.changeFilter]),o=Object(i.useCallback)((function(){return e.changeFilter("active",e.todolist.id)}),[e.todolist.id,e.changeFilter]),s=Object(i.useCallback)((function(){return e.changeFilter("completed",e.todolist.id)}),[e.todolist.id,e.changeFilter]),d=e.tasks;return"active"===e.todolist.filter&&(d=e.tasks.filter((function(t){return t.status===a.New}))),"completed"===e.todolist.filter&&(d=e.tasks.filter((function(t){return t.status===a.Completed}))),Object(H.jsxs)("div",{children:[Object(H.jsxs)("h3",{children:[Object(H.jsx)(B,{value:e.todolist.title,onChange:c}),Object(H.jsx)(U.a,{onClick:function(){e.removeTodolist(e.todolist.id)},disabled:"loading"===e.todolist.entityStatus,children:Object(H.jsx)(Z.a,{})})]}),Object(H.jsx)(V,{addItem:n,disabled:"loading"===e.todolist.entityStatus}),Object(H.jsx)("div",{children:d.map((function(t){return Object(H.jsx)(J,{task:t,todolistId:e.todolist.id,removeTask:e.removeTask,changeTaskTitle:e.changeTaskTitle,changeTaskStatus:e.changeTaskStatus},t.id)}))}),Object(H.jsxs)("div",{style:{paddingTop:"10px"},children:[Object(H.jsx)(Y.a,{variant:"all"===e.todolist.filter?"outlined":"text",onClick:r,color:"inherit",children:"All"}),Object(H.jsx)(Y.a,{variant:"active"===e.todolist.filter?"outlined":"text",onClick:o,color:"primary",children:"Active"}),Object(H.jsx)(Y.a,{variant:"completed"===e.todolist.filter?"outlined":"text",onClick:s,color:"secondary",children:"Completed"})]})]})})),Q=n(13),W=function(t){var e=t.demo,n=void 0!==e&&e,a=Object(l.c)((function(t){return t.todolists})),c=Object(l.c)((function(t){return t.tasks})),r=Object(l.c)((function(t){return t.auth})).isLoggedIn,o=Object(l.b)();Object(i.useEffect)((function(){n||o(F())}),[]);var s=Object(i.useCallback)((function(t,e){var n=function(t,e){return function(n){g(e,t).then((function(a){var c=function(t,e){return{type:"REMOVE-TASK",taskId:t,todolistId:e}}(t,e);n(c)}))}}(t,e);o(n)}),[]),d=Object(i.useCallback)((function(t,e){var n=function(t,e){return function(n){n(y("loading")),v(e,t).then((function(t){if(0===t.data.resultCode){var e={type:"ADD-TASK",task:t.data.data.item};n(e),n(y("succeeded"))}else A(t.data,n)})).catch((function(t){D(t,n)}))}}(t,e);o(n)}),[]),u=Object(i.useCallback)((function(t,e,n){var a=P(t,{status:e},n);o(a)}),[]),j=Object(i.useCallback)((function(t,e,n){var a=P(t,{title:e},n);o(a)}),[]),b=Object(i.useCallback)((function(t,e){var n={type:"CHANGE-TODOLIST-FILTER",id:e,filter:t};o(n)}),[]),O=Object(i.useCallback)((function(t){var e,n=(e=t,function(t){t(y("loading")),t({type:"CHANGE-TODOLIST-ENTITY-STATUS",id:e,status:"loading"}),m(e).then((function(n){t(function(t){return{type:"REMOVE-TODOLIST",id:t}}(e)),t(y("succeeded"))}))});o(n)}),[]),f=Object(i.useCallback)((function(t,e){var n=function(t,e){return function(n){p(t,e).then((function(a){n(function(t,e){return{type:"CHANGE-TODOLIST-TITLE",id:t,title:e}}(t,e))}))}}(t,e);o(n)}),[]),T=Object(i.useCallback)((function(t){var e=function(t){return function(e){e(y("loading")),h(t).then((function(t){e({type:"ADD-TODOLIST",todolist:t.data.data.item}),e(y("succeeded"))}))}}(t);o(e)}),[o]);return r?Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(R.a,{container:!0,style:{padding:"20px"},children:Object(H.jsx)(V,{addItem:T})}),Object(H.jsx)(R.a,{container:!0,spacing:3,children:a.map((function(t){var e=c[t.id];return Object(H.jsx)(R.a,{item:!0,children:Object(H.jsx)(M.a,{style:{padding:"10px"},children:Object(H.jsx)($,{todolist:t,tasks:e,removeTask:s,changeFilter:b,addTask:d,changeTaskStatus:u,removeTodolist:O,changeTaskTitle:j,changeTodolistTitle:f,demo:n})})},t.id)}))})]}):Object(H.jsx)(Q.a,{to:"/login"})},tt=n(221),et=n(222),nt=n(220),at=n(217),ct=n(223),it=n(208),rt=n(213),ot=n(212),st=r.a.forwardRef((function(t,e){return Object(H.jsx)(ot.a,Object(u.a)({elevation:6,ref:e,variant:"filled"},t))}));function dt(){var t=Object(l.c)((function(t){return t.app.error})),e=Object(l.b)(),n=function(t,n){"clickaway"!==n&&e(E(null))};return Object(H.jsx)(rt.a,{open:null!==t,autoHideDuration:6e3,onClose:n,children:Object(H.jsx)(st,{onClose:n,severity:"error",sx:{width:"100%"},children:t})})}var lt=n(214),ut=n(226),jt=n(225),bt=n(203),Ot=n(114),ft={isLoggedIn:!1},ht=function(t){return{type:"login/SET-IS-LOGGED-IN",value:t}},mt=function(t){return function(e){e(y("loading")),k(t).then((function(t){0===t.data.resultCode?(e(ht(!0)),e(y("succeeded"))):A(t.data,e)})).catch((function(t){D(t,e)}))}},pt=function(){var t=Object(l.c)((function(t){return t.auth})).isLoggedIn,e=Object(l.b)(),n=Object(Ot.a)({initialValues:{email:"",password:"",rememberMe:!1},validate:function(t){var e={};return t.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(t.email)||(e.email="Invalid email address"):e.email="Required email",t.password?t.password.length<2&&(e.password="Must be 2 characters or less"):e.password="Required password",e},onSubmit:function(t){e(mt(t)),n.resetForm()}});return!0===t?Object(H.jsx)(Q.a,{to:"/"}):Object(H.jsx)(R.a,{container:!0,justifyContent:"center",children:Object(H.jsx)(R.a,{item:!0,justifyContent:"center",children:Object(H.jsxs)(lt.a,{children:[Object(H.jsxs)(bt.a,{children:[Object(H.jsxs)("p",{children:["To log in get registered",Object(H.jsx)("a",{href:"https://social-network.samuraijs.com/",target:"_blank",children:" here"})]}),Object(H.jsx)("p",{children:"or use common test account credentials:"}),Object(H.jsx)("p",{children:"Email: free@samuraijs.com"}),Object(H.jsx)("p",{children:"Password: more than 2 characters"})]}),Object(H.jsx)("form",{onSubmit:n.handleSubmit,children:Object(H.jsxs)(jt.a,{children:[Object(H.jsx)(K.a,Object(u.a)({label:"Email",margin:"normal"},n.getFieldProps("email"))),n.errors.email?Object(H.jsx)("div",{style:{color:"red"},children:n.errors.email}):null,Object(H.jsx)(K.a,Object(u.a)({type:"password",label:"Password",margin:"normal"},n.getFieldProps("password"))),n.errors.password?Object(H.jsx)("div",{style:{color:"red"},children:n.errors.password}):null,Object(H.jsx)(ut.a,{label:"Remember me",control:Object(H.jsx)(z.a,Object(u.a)({},n.getFieldProps("rememberMe")))}),Object(H.jsx)(Y.a,{type:"submit",variant:"contained",color:"primary",children:"Login"})]})})]})})})},Tt=n(83),gt=n.n(Tt);var vt=function(){return Object(H.jsx)("div",{className:gt.a.parentError404,children:Object(H.jsx)("div",{className:gt.a.error404})})},xt=n(227);var kt=function(t){var e=t.demo,n=void 0!==e&&e,a=Object(l.b)(),c=Object(l.c)((function(t){return t.app.status})),r=Object(l.c)((function(t){return t.app.isInit})),o=Object(l.c)((function(t){return t.auth})).isLoggedIn;if(Object(i.useEffect)((function(){a(mt({email:"ceptor.nill@gmail.com",password:"123456"}))}),[]),Object(i.useEffect)((function(){a((function(t){t(y("loading")),I().then((function(e){0===e.data.resultCode?(t(ht(!0)),t(y("succeeded"))):A(e.data,t)})).catch((function(e){D(e,t)})).finally((function(){t({type:"APP/IS-INIT",isInit:!0})}))}))}),[]),!r)return Object(H.jsx)("div",{style:{position:"fixed",top:"30%",textAlign:"center",width:"100%"},children:Object(H.jsx)(xt.a,{})});var s=function(){a((function(t){t(y("loading")),S().then((function(e){0===e.data.resultCode?(t(ht(!1)),t(y("succeeded"))):A(e.data,t)})).catch((function(e){D(e,t)}))}))};return Object(H.jsxs)("div",{className:"App",children:[Object(H.jsx)(dt,{}),Object(H.jsxs)(tt.a,{position:"static",children:[Object(H.jsxs)(et.a,{children:[Object(H.jsx)(U.a,{edge:"start",color:"inherit","aria-label":"menu",children:Object(H.jsx)(it.a,{})}),Object(H.jsx)(nt.a,{variant:"h6",children:"Todolist"}),o&&Object(H.jsx)(Y.a,{variant:"contained",color:"primary",onClick:function(){return s()},children:"logout"})]}),"loading"===c&&Object(H.jsx)(ct.a,{})]}),Object(H.jsx)(at.a,{fixed:!0,children:Object(H.jsxs)(Q.d,{children:[Object(H.jsx)(Q.b,{path:"/",element:Object(H.jsx)(W,{demo:n})}),Object(H.jsx)(Q.b,{path:"/login",element:Object(H.jsx)(pt,{})})," ",Object(H.jsx)(Q.b,{path:"*",element:Object(H.jsx)(vt,{})})]})})]})},It=n(75),St=n(113),Ct=Object(It.b)({tasks:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"REMOVE-TASK":return Object(u.a)(Object(u.a)({},t),{},Object(L.a)({},e.todolistId,t[e.todolistId].filter((function(t){return t.id!==e.taskId}))));case"ADD-TASK":return Object(u.a)(Object(u.a)({},t),{},Object(L.a)({},e.task.todoListId,[e.task].concat(Object(j.a)(t[e.task.todoListId]))));case"UPDATE-TASK":return Object(u.a)(Object(u.a)({},t),{},Object(L.a)({},e.todolistId,t[e.todolistId].map((function(t){return t.id===e.taskId?Object(u.a)(Object(u.a)({},t),e.model):t}))));case"ADD-TODOLIST":return Object(u.a)(Object(u.a)({},t),{},Object(L.a)({},e.todolist.id,[]));case"REMOVE-TODOLIST":var n=Object(u.a)({},t);return delete n[e.id],n;case"SET-TODOLISTS":var a=Object(u.a)({},t);return e.todolists.forEach((function(t){a[t.id]=[]})),a;case"SET-TASKS":return Object(u.a)(Object(u.a)({},t),{},Object(L.a)({},e.todolistId,e.tasks));default:return t}},todolists:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"REMOVE-TODOLIST":return t.filter((function(t){return t.id!==e.id}));case"ADD-TODOLIST":return[Object(u.a)(Object(u.a)({},e.todolist),{},{filter:"all",entityStatus:"idle"})].concat(Object(j.a)(t));case"CHANGE-TODOLIST-TITLE":return t.map((function(t){return t.id===e.id?Object(u.a)(Object(u.a)({},t),{},{title:e.title}):t}));case"CHANGE-TODOLIST-FILTER":return t.map((function(t){return t.id===e.id?Object(u.a)(Object(u.a)({},t),{},{filter:e.filter}):t}));case"CHANGE-TODOLIST-ENTITY-STATUS":return t.map((function(t){return t.id===e.id?Object(u.a)(Object(u.a)({},t),{},{entityStatus:e.status}):t}));case"SET-TODOLISTS":return e.todolists.map((function(t){return Object(u.a)(Object(u.a)({},t),{},{filter:"all",entityStatus:"idle"})}));default:return t}},app:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"APP/SET-STATUS":return Object(u.a)(Object(u.a)({},t),{},{status:e.status});case"APP/SET-ERROR":return Object(u.a)(Object(u.a)({},t),{},{error:e.error});case"APP/IS-INIT":return Object(u.a)(Object(u.a)({},t),{},{isInit:e.isInit});default:return Object(u.a)({},t)}},auth:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ft,e=arguments.length>1?arguments[1]:void 0;return"login/SET-IS-LOGGED-IN"===e.type?Object(u.a)(Object(u.a)({},t),{},{isLoggedIn:e.value}):t}}),Et=Object(It.c)(Ct,Object(It.a)(St.a));window.store=Et;var yt=n(54);s.a.render(Object(H.jsx)(r.a.StrictMode,{children:Object(H.jsx)(l.a,{store:Et,children:Object(H.jsx)(yt.a,{basename:"/todolist-with_MUI_formik-",children:Object(H.jsx)(kt,{})})})}),document.getElementById("root")),d()},83:function(t,e,n){t.exports={parentError404:"Error404_parentError404__rLVDs",error404:"Error404_error404__1tXVr"}}},[[157,1,2]]]);
//# sourceMappingURL=main.a6b495ce.chunk.js.map