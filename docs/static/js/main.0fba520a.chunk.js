(this.webpackJsonpyoutube_courses=this.webpackJsonpyoutube_courses||[]).push([[0],{172:function(e,t){},173:function(e,t){},178:function(e,t,n){},179:function(e,t,n){},187:function(e,t){},189:function(e,t){},202:function(e,t){},204:function(e,t){},232:function(e,t){},234:function(e,t){},235:function(e,t){},240:function(e,t){},242:function(e,t){},248:function(e,t){},250:function(e,t){},269:function(e,t){},281:function(e,t){},284:function(e,t){},337:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n.n(r),a=n(36),c=n.n(a),o=(n(178),n(179),n(13)),i=n(14),u=n(16),l=n(15),j=n(59),h=n(25),d=n(19),b=n.n(d),p=n(32),m=n(51),O=n(44),f=n.n(O),g=Object(m.b)({name:"user",initialState:{isAuthenticate:!1,userId:!1===function(){var e=localStorage.getItem("jwtToken");if(null===e)return!1;try{return!!f.a.decode(e)}catch(t){return!1}}()?"":f.a.decode(localStorage.getItem("jwtToken")).uid,email:"not logged in"},reducers:{userLogin:function(e,t){var n=localStorage.getItem("jwtToken");e.userId=f.a.decode(n).id,e.email=f.a.decode(n).email,e.isAuthenticated=!0},userLogout:function(e,t){e.isAuthenticated=!1,e.userId="No Auth",e.email="Not logged in",localStorage.setItem("jwtToken","")}}}),x=g.actions,v=x.userLogin,y=x.userLogout,C=g.reducer,N=n(71),k=n(1),S=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=Object(k.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(k.jsxs)("li",{className:"nav-item me-2 mt-2",children:["Hello, ",this.props.authenticatedUsername]}),Object(k.jsx)("li",{className:"nav-item me-2 ml-2",children:Object(k.jsx)(N.a,{variant:"primary",onClick:this.props.userLogout,children:"Logout"})})]}),t=Object(k.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(k.jsx)("li",{className:"nav-item m-1",children:Object(k.jsx)(N.a,{href:"/login",variant:"primary",children:"Login"})}),Object(k.jsx)("li",{className:"nav-item m-1",children:Object(k.jsx)(N.a,{href:"/signup",variant:"primary",children:"Sign up"})})]});return Object(k.jsxs)(j.a,{bg:"light",expand:"lg",children:[Object(k.jsx)(j.a.Brand,{href:"/",className:"ms-3",children:"Youtube Courses"}),Object(k.jsx)(j.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(k.jsx)(j.a.Collapse,{id:"basic-navbar-nav",className:"justify-content-end",children:this.props.isAuthenticated?e:t})]})}}]),n}(r.Component),w=Object(h.b)((function(e){return{isAuthenticated:e.user.isAuthenticated,authenticatedUsername:e.user.email}}),(function(e){return{userLogout:function(){return e(y())}}}))(S),A=n(18),I=n(38),L=n.n(I),_=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).onChangecourseName=r.onChangecourseName.bind(Object(A.a)(r)),r.onChangecoursePosition=r.onChangecoursePosition.bind(Object(A.a)(r)),r.onChangecourseLevel=r.onChangecourseLevel.bind(Object(A.a)(r)),r.onSubmit=r.onSubmit.bind(Object(A.a)(r)),r.state={course_name:"",course_position:"",course_level:""},r}return Object(i.a)(n,[{key:"onChangecourseName",value:function(e){this.setState({course_name:e.target.value})}},{key:"onChangecoursePosition",value:function(e){this.setState({course_position:e.target.value})}},{key:"onChangecourseLevel",value:function(e){this.setState({course_level:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={course_name:this.state.course_name,course_position:this.state.course_position,course_level:this.state.course_level};L.a.post("http://localhost:3000/record/add",t).then((function(e){return console.log(e.data)})),this.setState({course_name:"",course_position:"",course_level:""})}},{key:"render",value:function(){return Object(k.jsxs)("div",{className:"m-3",children:[Object(k.jsx)("h3",{children:"Create New Course"}),Object(k.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(k.jsxs)("div",{className:"form-group",children:[Object(k.jsx)("label",{children:"Name of the course: "}),Object(k.jsx)("input",{type:"text",className:"form-control",value:this.state.course_name,onChange:this.onChangecourseName})]}),Object(k.jsxs)("div",{className:"form-group",children:[Object(k.jsx)("label",{children:"course's position: "}),Object(k.jsx)("input",{type:"text",className:"form-control",value:this.state.course_position,onChange:this.onChangecoursePosition})]}),Object(k.jsxs)("div",{className:"form-group",children:[Object(k.jsxs)("div",{className:"form-check form-check-inline",children:[Object(k.jsx)("input",{className:"form-check-input",type:"radio",name:"priorityOptions",id:"priorityLow",value:"Intern",checked:"Intern"===this.state.course_level,onChange:this.onChangecourseLevel}),Object(k.jsx)("label",{className:"form-check-label",children:"Intern"})]}),Object(k.jsxs)("div",{className:"form-check form-check-inline",children:[Object(k.jsx)("input",{className:"form-check-input",type:"radio",name:"priorityOptions",id:"priorityMedium",value:"Junior",checked:"Junior"===this.state.course_level,onChange:this.onChangecourseLevel}),Object(k.jsx)("label",{className:"form-check-label",children:"Junior"})]}),Object(k.jsxs)("div",{className:"form-check form-check-inline",children:[Object(k.jsx)("input",{className:"form-check-input",type:"radio",name:"priorityOptions",id:"priorityHigh",value:"Senior",checked:"Senior"===this.state.course_level,onChange:this.onChangecourseLevel}),Object(k.jsx)("label",{className:"form-check-label",children:"Senior"})]})]}),Object(k.jsx)("div",{className:"form-group",children:Object(k.jsx)("input",{type:"submit",value:"Create course",className:"btn btn-primary"})})]})]})}}]),n}(r.Component),M=(r.Component,n(27)),P=function(e){return Object(k.jsxs)("tr",{className:"p-2",children:[Object(k.jsx)("td",{children:e.record.person_name}),Object(k.jsx)("td",{children:e.record.person_position}),Object(k.jsx)("td",{children:e.record.person_level}),Object(k.jsxs)("td",{children:[Object(k.jsx)(M.b,{to:"/edit/"+e.record._id,children:"Edit"})," |",Object(k.jsx)("a",{href:"/",onClick:function(){e.deleteCourse(e.record._id)},children:"Delete"})]})]})},T=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).deleteCourse=r.deleteCourse.bind(Object(A.a)(r)),r.state={records:[]},r}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;L.a.get("http://localhost:3000/record/").then((function(t){e.setState({records:t.data})})).catch((function(e){console.log(e)}))}},{key:"deleteCourse",value:function(e){L.a.delete("http://localhost:3000/"+e).then((function(e){console.log(e.data)})),this.setState({record:this.state.records.filter((function(t){return t._id!==e}))})}},{key:"recordList",value:function(){var e=this;return this.state.records.map((function(t){return Object(k.jsx)(P,{record:t,deleteCourse:e.deleteCourse},t._id)}))}},{key:"render",value:function(){return Object(k.jsxs)("div",{className:"m-3",children:[Object(k.jsx)("h3",{children:"Course List"}),Object(k.jsxs)("table",{className:"table table-striped",style:{marginTop:20},children:[Object(k.jsx)("thead",{children:Object(k.jsxs)("tr",{children:[Object(k.jsx)("th",{children:"Name"}),Object(k.jsx)("th",{children:"Position"}),Object(k.jsx)("th",{children:"Level"}),Object(k.jsx)("th",{children:"Action"})]})}),Object(k.jsx)("tbody",{children:this.recordList()})]})]})}}]),n}(r.Component),D=n(58),J=n(101),B=n.n(J),K="http://localhost:8080",U=function(e){return{headers:{"Content-Type":"application/json",Authorization:localStorage.getItem("jwtToken")},method:"post",body:JSON.stringify(e)}},V=Object(m.b)({name:"user",initialState:{allCourses:[],myCourses:[],thisCourse:null},reducers:{getAllCourses:function(e,t){e.allCourses=t.payload.courses},getThisCourse:function(e){fetch("/api/courses").then((function(e){return e.json()})).then((function(t){e.thisCourse=t.data}))},getMyCourses:function(e,t){e.myCourses=t.payload.courses}}}),E=V.actions,H=E.getAllCourses,W=(E.getThisCourse,E.getMyCourses),R=V.reducer,q=n(29),F=n(22),z=function(e){return Object(k.jsx)(M.b,{to:e.to,className:"WrappedLink",children:Object(k.jsx)("button",{className:[].concat(Object(D.a)(e.buttonClasses),["WrappedButton"]).join(" "),onClick:e.onClick,children:e.children})})},Y=n(9),Z=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).toggleShowMyCourses=function(){r.setState((function(e){return{showMyCourses:!e.showMyCourses}}))},r.state={errorMsg:"",showMyCourses:!1},r}return Object(i.a)(n,[{key:"componentWillMount",value:function(){"/Course/myCourses"!==this.props.location.pathname||this.state.showMyCourses||this.toggleShowMyCourses()}},{key:"componentDidMount",value:function(){var e=this;this.props.initCourses().then((function(t){"OK"!==t&&e.setState({errorMsg:t})})),this.props.isAuthenticated&&this.props.getMyCourses()}},{key:"render",value:function(){var e=this.props.allCourses||JSON.parse(localStorage.getItem("BasicMERNStackAppAllCourses")),t=[];null!==e&&(e=e.map((function(e,n){try{var r=new B.a("#player-".concat(n),{width:560,height:315,captions:"en"});r.load(e.courseLink),t.push({link:e.courseLink,player:r}),r.on("paused",(function(){}))}catch(s){}return Object(k.jsx)("div",{className:"player-div",children:Object(k.jsxs)(q.a,{children:[Object(k.jsxs)(F.a,{children:[Object(k.jsx)(q.a.Toggle,{as:F.a.Header,eventKey:"0",children:e.courseName}),Object(k.jsx)(q.a.Collapse,{eventKey:"0",children:Object(k.jsx)(F.a.Body,{children:Object(k.jsx)("div",{id:"player-".concat(n)})})})]}),Object(k.jsxs)(F.a,{children:[Object(k.jsx)(q.a.Toggle,{as:F.a.Header,eventKey:"0",children:"Notes"}),Object(k.jsx)(q.a.Collapse,{eventKey:"1",children:Object(k.jsx)(F.a.Body,{children:"some sample notes"})})]})]})},n)})));var n=[];if(this.props.isAuthenticated&&this.state.showMyCourses){n=this.props.myCourses?Object(D.a)(this.props.myCourses):Object(D.a)(JSON.parse(localStorage.getItem("BasicMERNStackAppMyCourses")));var r=[];null!==n&&(n=n.map((function(e,t){try{var n=new B.a("#player-".concat(t),{width:560,height:315,captions:"en"});n.load(e.courseLink),r.push({link:e.courseLink,player:n}),n.on("paused",(function(){}))}catch(s){}return Object(k.jsx)("div",{className:"player-div",children:Object(k.jsxs)(q.a,{children:[Object(k.jsxs)(F.a,{children:[Object(k.jsx)(q.a.Toggle,{as:F.a.Header,eventKey:"0",children:e.courseName}),Object(k.jsx)(q.a.Collapse,{eventKey:"0",children:Object(k.jsx)(F.a.Body,{children:Object(k.jsx)("div",{id:"player-".concat(t)})})})]}),Object(k.jsxs)(F.a,{children:[Object(k.jsx)(q.a.Toggle,{as:F.a.Header,eventKey:"0",children:"Notes"}),Object(k.jsx)(q.a.Collapse,{eventKey:"1",children:Object(k.jsx)(F.a.Body,{children:"some sample notes"})})]})]})},t)})))}var s=Object(k.jsx)(z,{to:this.state.showMyCourses?"/":"/Course/myCourses",buttonClasses:["btn","btn-outline-info","me-3","MyCoursesButton"],onClick:this.toggleShowMyCourses,children:this.state.showMyCourses?"All Courses":"My Courses"});return Object(k.jsxs)("div",{className:"container",children:[Object(k.jsx)("br",{}),Object(k.jsxs)("div",{className:"Header",children:[Object(k.jsx)("h1",{style:{display:"inline-block"},children:"All Courses"}),Object(k.jsx)(z,{to:"/courses/add",buttonClasses:["btn","btn-primary","me-3","AddCourseButton"],children:"Add Course"}),this.props.isAuthenticated&&s]}),Object(k.jsx)("br",{}),Object(k.jsx)("div",{children:Object(k.jsx)("section",{className:"jumbotron",children:Object(k.jsxs)("div",{className:"Courses",children:[this.state.errorMsg,this.state.showMyCourses?n:e]})})})]})}}]),n}(r.Component),G=Object(h.b)((function(e){return{allCourses:e.course.allCourses,myCourses:e.course.myCourses,isAuthenticated:e.user.isAuthenticated}}),(function(e){return{initCourses:function(){return e(function(){var e=Object(p.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(K,"/course/getCourses"),U({}));case 2:return n=e.sent,e.next=5,n.json();case 5:if(n=e.sent,!Array.isArray(n)){e.next=9;break}return t(H({courses:n})),e.abrupt("return","OK");case 9:return e.abrupt("return",n);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},getMyCourses:function(){return e(function(){var e=Object(p.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(K,"/course/getCourses"),U({}));case 2:return n=e.sent,e.next=5,n.json();case 5:if(n=e.sent,!Array.isArray(n)){e.next=9;break}return t(W({courses:n})),e.abrupt("return","OK");case 9:return e.abrupt("return",n);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}}))(Object(Y.g)(Z)),$=n(33),Q=n(3),X=function(e){return Object(k.jsx)("small",{className:"ErrorMsg",children:e.msg})},ee=function(e){var t=["form-control","InputError"].join(" ");return Object(k.jsxs)("div",{className:"form-group",children:[Object(k.jsx)("label",{children:e.label}),Object(k.jsx)("input",Object(Q.a)({type:e.type,name:e.name,defaultValue:e.defaultValue,placeholder:e.placeholder||e.label,className:e.errors[e.name]?t:"form-control",onChange:e.onChange},e)),""!==e.errors[e.name]&&Object(k.jsx)(X,{msg:e.errors[e.name]})]})},te=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)},ne=[{name:"name",type:"text",label:"Name"},{name:"username",type:"text",label:"Username"},{name:"email",type:"email",label:"E-mail Address"},{name:"password",type:"password",label:"Password"},{name:"confirmPassword",type:"password",label:"Confirm Password"}],re=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={userDetails:{},errors:{}},e.commonValidation=function(t,n){var r={};return""===n?r[t]="This field is required":"email"!==t||te(n)?"password"===t&&n.length<4?(r[t]="Password too short",""!==e.state.errors.confirmPassword&&n===e.state.userDetails.confirmPassword&&(r.confirmPassword="")):"confirmPassword"===t&&n!==e.state.userDetails.password?r[t]="Passwords do not match":r[t]="":r[t]="Not a valid Email",r},e.handleInputChange=function(){var t=Object(p.a)(b.a.mark((function t(n){var r,s,a,c;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.target.name,s=n.target.value,a=Object(Q.a)({},e.state.errors),t.next=5,e.commonValidation(r,s);case 5:c=t.sent,a="username"!==r&&"email"!==r||""===s?Object(Q.a)(Object(Q.a)({},a),c):Object(Q.a)(Object(Q.a)({},a),{},Object($.a)({},r,c[r])),e.setState((function(e){return Object(Q.a)(Object(Q.a)({},e),{},{userDetails:Object(Q.a)(Object(Q.a)({},e.userDetails),{},Object($.a)({},r,s)),errors:Object(Q.a)({},a)})}),(function(){return localStorage.setItem("SignupPage",JSON.stringify(e.state))}));case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleSignup=function(t){t.preventDefault();var n=Object(Q.a)({},e.state.errors);0===Object.keys(n).filter((function(e){return""!==n[e]})).length&&e.props.userSignupRequest(e.state.userDetails).then((function(e){return e.json()})).then((function(t){t.errors?(n=Object(Q.a)(Object(Q.a)({},n),t.errors),e.setState((function(e){return Object(Q.a)(Object(Q.a)({},e),{},{userDetails:Object(Q.a)({},e.userDetails),errors:Object(Q.a)({},n)})}))):(localStorage.removeItem("SignupPage"),e.props.history.push("/login"))}))},e}return Object(i.a)(n,[{key:"componentWillMount",value:function(){if(null!==localStorage.getItem("SignupPage")){var e=JSON.parse(localStorage.getItem("SignupPage")),t=e.userDetails,n=e.errors;this.setState((function(e){return Object(Q.a)(Object(Q.a)({},e),{},{userDetails:Object(Q.a)({},t),errors:Object(Q.a)({},n)})}))}}},{key:"componentWillUnmount",value:function(){localStorage.removeItem("SignupPage")}},{key:"render",value:function(){var e=this;if(this.props.isAuthenticated)return Object(k.jsx)(Y.a,{to:"/"});var t=ne.map((function(t){return Object(k.jsx)(ee,{type:t.type,name:t.name,label:t.label,defaultValue:e.state.userDetails[t.name],errors:e.state.errors,onChange:e.handleInputChange},t.name)}));return Object(k.jsxs)("div",{className:"container",children:[Object(k.jsx)("br",{}),Object(k.jsx)("h3",{className:"text-center",children:"Join Our Community!"}),Object(k.jsx)("div",{className:"jumbotron",children:Object(k.jsxs)("form",{onSubmit:this.handleSignup,children:[t,Object(k.jsx)("button",{className:"btn btn-primary",children:"Sign Up"})]})})]})}}]),n}(r.Component),se=Object(h.b)((function(e){return{isAuthenticated:e.user.isAuthenticated}}),(function(e){return{}}))(re),ae=[{name:"email",type:"text",label:"Email"},{name:"password",type:"password",label:"Password"}],ce=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).handleValidation=function(e,t){var n={};return n[e]=""===t?"This field is required":"",n},r.handleInputChange=function(e){var t=e.target.name,n=e.target.value,s=Object(Q.a)(Object(Q.a)({},r.state.errors),r.handleValidation(t,n));s.invalidCredentials&&delete s.invalidCredentials,r.setState((function(e){return Object(Q.a)(Object(Q.a)({},e),{},{userCredentials:Object(Q.a)(Object(Q.a)({},e.userCredentials),{},Object($.a)({},t,n)),errors:Object(Q.a)({},s)})}))},r.handleLogin=function(){var e=Object(p.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n=Object(Q.a)({},r.state.errors),0===Object.keys(n).filter((function(e){return""!==n[e]})).length){e.next=7;break}return e.abrupt("return");case 7:return e.next=9,r.props.userLogin(r.state.userCredentials);case 9:"AUTH_OK"===e.sent&&r.props.history.push("/");case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.state={userCredentials:{},errors:{}},r}return Object(i.a)(n,[{key:"render",value:function(){var e=this;if(this.props.isAuthenticated)return Object(k.jsx)(Y.a,{to:"/"});var t=ae.map((function(t){return Object(k.jsx)(ee,{type:t.type,name:t.name,label:t.label,errors:e.state.errors,onChange:e.handleInputChange},t.name)}));return Object(k.jsxs)("div",{className:"container",children:[Object(k.jsx)("br",{}),Object(k.jsx)("h3",{className:"text-center",children:"Login"}),Object(k.jsxs)("div",{className:"jumbotron",children:[this.state.errors.invalidCredentials&&Object(k.jsx)("p",{className:"text-danger",children:this.state.errors.invalidCredentials}),Object(k.jsxs)("form",{onSubmit:this.handleLogin,children:[t,Object(k.jsx)("button",{className:"btn btn-primary",children:"Login"})]})]})]})}}]),n}(r.Component),oe=Object(h.b)((function(e){return{isAuthenticated:e.user.isAuthenticated}}),(function(e){return{userLogin:function(t){return e((n=t,function(){var e=Object(p.a)(b.a.mark((function e(t){var r,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("http://localhost:8080","/user/login"),(a=n,{headers:{"Content-Type":"application/json"},method:"post",body:JSON.stringify(a)}));case 2:return r=e.sent,e.next=5,r.json();case 5:if(!(r=e.sent).token){e.next=12;break}return s=r.token,delete r.token,localStorage.setItem("jwtToken",s),t(v()),e.abrupt("return","AUTH_OK");case 12:return e.abrupt("return","AUTH_ERR");case 13:case"end":return e.stop()}var a}),e)})));return function(t){return e.apply(this,arguments)}}()));var n}}}))(Object(Y.g)(ce)),ie=n(172),ue=n.n(ie),le=function(e){return{headers:{"Content-Type":"application/json"},method:"post",body:JSON.stringify(e)}},je=[{name:"title",type:"text",label:"Title"},{name:"author",type:"text",label:"Author",disabled:"disabled"}],he=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={Course:{},errors:{}},e.handleValidation=function(e,t){var n={};return n[e]=""===t?"This field is required":"",n},e.handleInputChange=function(t){var n=t.target.name,r=t.target.value,s=Object(Q.a)(Object(Q.a)({},e.state.errors),e.handleValidation(n,r));e.setState((function(e){return Object(Q.a)(Object(Q.a)({},e),{},{Course:Object(Q.a)(Object(Q.a)({},e.Course),{},Object($.a)({},n,r)),errors:Object(Q.a)({},s)})}),(function(){return localStorage.setItem("AddCoursePage",JSON.stringify(e.state))}))},e.handleNewCourseSubmit=function(t){t.preventDefault();var n=Object(Q.a)({},e.state.errors);0===Object.keys(n).filter((function(e){return""!==n[e]})).length&&e.props.addNewCourse(Object(Q.a)(Object(Q.a)({},e.state.Course),{},{author:e.props.authenticatedUsername})).then((function(t){t.errors?e.setState((function(e){return Object(Q.a)(Object(Q.a)({},e),{},{Course:Object(Q.a)({},e.Course),errors:Object(Q.a)(Object(Q.a)({},e.errors),t.errors)})})):e.props.history.push("/")}))},e}return Object(i.a)(n,[{key:"componentWillMount",value:function(){if(null!==localStorage.getItem("AddCoursePage")){var e=JSON.parse(localStorage.getItem("AddCoursePage")),t=e.Course,n=e.errors;this.setState((function(e){return Object(Q.a)(Object(Q.a)({},e),{},{Course:Object(Q.a)({},t),errors:Object(Q.a)({},n)})}))}}},{key:"componentWillUnmount",value:function(){localStorage.removeItem("AddCoursePage")}},{key:"render",value:function(){return this.props.isAuthenticated?Object(k.jsxs)("div",{className:"container",children:[Object(k.jsx)("br",{}),Object(k.jsx)("h3",{className:"text-center",children:"Add Course"}),Object(k.jsx)("div",{className:"jumbotron",children:Object(k.jsxs)("form",{onSubmit:this.handleNewCourseSubmit,children:[Object(k.jsx)(ee,{type:je[0].type,name:je[0].name,label:je[0].label,defaultValue:this.state.Course.title,errors:this.state.errors,onChange:this.handleInputChange},je[0].name),Object(k.jsx)(ee,{type:je[1].type,name:je[1].name,label:je[1].label,defaultValue:this.props.authenticatedUsername,disabled:je[1].disabled,errors:this.state.errors,onChange:this.handleInputChange},je[1].name),Object(k.jsxs)("div",{className:"form-group",children:[Object(k.jsx)("label",{children:"Body"}),Object(k.jsx)("textarea",{name:"body",style:{height:"200px"},className:"form-control",placeholder:"Your Course's contents goes here... Good luck!",onChange:this.handleInputChange,defaultValue:this.state.Course.body}),""!==this.state.errors.body&&Object(k.jsx)(X,{msg:this.state.errors.body})]}),Object(k.jsx)("button",{className:"btn btn-success",children:"Submit"})]})})]}):Object(k.jsx)(Y.a,{to:"/login"})}}]),n}(r.Component),de=Object(h.b)((function(e){return{isAuthenticated:e.user.isAuthenticated,authenticatedUsername:e.user.email}}),(function(e){return{addNewCourse:function(t){return e(function(e){return fetch("/api/Courses/add",le(e)).then((function(e){return e.json()}))}(t))}}}))(he),be=n(173),pe=n.n(be),me=Object(m.a)({reducer:{user:C,course:R}}),Oe=function(){return Object(k.jsx)(h.a,{store:me,children:Object(k.jsxs)(M.a,{children:[Object(k.jsx)(w,{}),Object(k.jsxs)(Y.d,{children:[Object(k.jsx)(Y.b,{exact:!0,path:"/courses/add",children:Object(k.jsx)(de,{})}),Object(k.jsx)(Y.b,{path:"/courses/edit/:id",children:Object(k.jsx)(pe.a,{})}),Object(k.jsx)(Y.b,{path:"/courses/:id",children:Object(k.jsx)(ue.a,{})}),Object(k.jsx)(Y.b,{path:"/login",children:Object(k.jsx)(oe,{})}),Object(k.jsx)(Y.b,{path:"/signup",children:Object(k.jsx)(se,{})}),Object(k.jsx)(Y.b,{path:"/",children:Object(k.jsx)(G,{})}),Object(k.jsx)(Y.b,{path:"/courses",children:Object(k.jsx)(T,{})}),Object(k.jsx)(Y.b,{path:"/create",children:Object(k.jsx)(_,{})})]})]})})},fe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,340)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),r(e),s(e),a(e),c(e)}))};n(336);c.a.render(Object(k.jsx)(s.a.StrictMode,{children:Object(k.jsx)(Oe,{})}),document.getElementById("root")),fe()}},[[337,1,2]]]);
//# sourceMappingURL=main.0fba520a.chunk.js.map