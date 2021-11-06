(this.webpackJsonpreactlogin=this.webpackJsonpreactlogin||[]).push([[0],{185:function(e,t,a){},311:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(50),o=a.n(i),c=(a(185),a(13)),s=a(18),l=a(29),d=a(25),j=a.n(d),u=a(63),m=a(359),h=a(366),b=a(351),x=a(353),p=a(365),O=a(355),g=a(362),v=a(358),f=a(364),y=a(363),w=a(88),C=a.n(w),k=a(361),S=a(161),N=a(360),E=a(31),q="localhost"===window.location.hostname.split(":")[0]?"http://localhost:5000":"",_=function(e,t){switch(t.type){case"USER_LOGIN":return t.payload.firstName&&t.payload.lastName&&t.payload.email&&t.payload.access_token&&t.payload._id?Object(l.a)(Object(l.a)({},e),{},{user:t.payload}):(console.log("invalid data in USER_LOGIN reducer "),e);case"USER_LOGOUT":return Object(l.a)(Object(l.a)({},e),{},{user:null});case"TOGGLE_THEME":return Object(l.a)(Object(l.a)({},e),{},{darkTheme:!e.darkTheme});default:return e}},T=a(1),F=Object(r.createContext)("Initial Value"),I={darkTheme:!0,user:{}};function W(e){var t=e.children,a=Object(r.useReducer)(_,I),n=Object(c.a)(a,2),i=n[0],o=n[1];return Object(T.jsx)(F.Provider,{value:{state:i,dispatch:o},children:t})}var G=E.a({email:E.b("Enter your email").email("Enter a valid email").required("Email is required"),password:E.b("Enter your password").min(8,"Password should be of minimum 8 characters length").required("Password is required")}),P=function(e){return Object(T.jsxs)(k.a,Object(l.a)(Object(l.a)({variant:"body2",color:"text.secondary",align:"center"},e),{},{children:["Copyright \xa9 ",Object(T.jsx)(g.a,{color:"inherit",href:q,children:"Your Website"})," ",(new Date).getFullYear(),"."]}))},R=Object(S.a)(),B=function(){var e=Object(s.g)(),t=Object(r.useContext)(F).dispatch,a=Object(u.a)({validationSchema:G,initialValues:{email:"",password:""},onSubmit:function(e){console.log("values: ",e),j.a.post("".concat(q,"/api/v1/login"),{email:e.email,password:e.password},{withCredentials:!0}).then((function(e){console.log("res: ",e.data),e.data.email&&t({type:"USER_LOGIN",payload:{firstName:e.data.firstName,lastName:e.data.lastName,email:e.data.email,access_token:e.data.access_token,_id:e.data._id}})})).catch((function(e){console.log("error: ",e)}))}});return Object(T.jsx)(T.Fragment,{children:Object(T.jsx)(N.a,{theme:R,children:Object(T.jsxs)(v.a,{container:!0,component:"main",sx:{height:"100vh",overflow:"hidden"},children:[Object(T.jsx)(b.a,{}),Object(T.jsx)(v.a,{item:!0,xs:!1,sm:4,md:7,sx:{backgroundImage:"url(https://source.unsplash.com/random)",backgroundRepeat:"no-repeat",backgroundColor:function(e){return"light"===e.palette.mode?e.palette.grey[50]:e.palette.grey[900]},backgroundSize:"cover",backgroundPosition:"center"}}),Object(T.jsx)(v.a,{item:!0,xs:12,sm:8,md:5,component:y.a,elevation:6,square:!0,children:Object(T.jsxs)(f.a,{sx:{my:8,mx:4,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(T.jsx)(m.a,{sx:{m:1,bgcolor:"secondary.main"},children:Object(T.jsx)(C.a,{})}),Object(T.jsx)(k.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(T.jsxs)(f.a,{component:"form",noValidate:!0,onSubmit:a.handleSubmit,sx:{mt:1},children:[Object(T.jsx)(x.a,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,color:"primary",variant:"outlined",value:a.values.email,onChange:a.handleChange,error:a.touched.email&&Boolean(a.errors.email),helperText:a.touched.email&&a.errors.email}),Object(T.jsx)(x.a,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",color:"primary",variant:"outlined",value:a.values.password,onChange:a.handleChange,error:a.touched.password&&Boolean(a.errors.password),helperText:a.touched.password&&a.errors.password}),Object(T.jsx)(p.a,{control:Object(T.jsx)(O.a,{value:"remember",color:"primary"}),label:"Remember me"}),Object(T.jsx)(h.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},color:"primary",children:"Sign In"}),Object(T.jsxs)(v.a,{container:!0,children:[Object(T.jsx)(v.a,{item:!0,xs:!0,children:Object(T.jsx)(g.a,{href:"#",variant:"body2",children:"Forgot password?"})}),Object(T.jsx)(v.a,{item:!0,children:Object(T.jsx)(g.a,{onClick:function(){e.push("/signup")},variant:"body2",children:"Don't have an account? Sign Up"})})]}),Object(T.jsx)(P,{sx:{mt:5}})]})]})})]})})})},L=E.a({firstName:E.b("Enter your First name").required("Name is required"),lastName:E.b("Enter your Last name").required("Name is required"),email:E.b("Enter your email").email("Enter a valid email").required("Email is required"),password:E.b("Enter your password").min(8,"Password should be of minimum 8 characters length").required("Password is required")}),U=function(e){return Object(T.jsxs)(k.a,Object(l.a)(Object(l.a)({variant:"body2",color:"text.secondary",align:"center"},e),{},{children:["Copyright \xa9 ",Object(T.jsx)(g.a,{color:"inherit",href:q,children:"Your Website"})," ",(new Date).getFullYear(),"."]}))},D=Object(S.a)(),V=function(){var e=Object(r.useState)(!1),t=Object(c.a)(e,2),a=t[0],n=t[1],i=Object(s.g)(),o=Object(u.a)({validationSchema:L,initialValues:{firstName:"",lastName:"",email:"",password:""},onSubmit:function(e){console.log("values: ",e),j.a.post("".concat(q,"/api/v1/user"),{firstName:e.firstName,lastName:e.lastName,email:e.email,password:e.password}).then((function(e){console.log("res: ",e.data),e.data.email&&n(!0)})).catch((function(e){console.log("error: ",e)}))}});return a?Object(T.jsx)(s.a,{to:"/login"}):Object(T.jsx)(T.Fragment,{children:Object(T.jsx)(N.a,{theme:D,children:Object(T.jsxs)(v.a,{container:!0,component:"main",sx:{height:"100vh",overflow:"hidden"},children:[Object(T.jsx)(b.a,{}),Object(T.jsx)(v.a,{item:!0,xs:!1,sm:4,md:7,sx:{backgroundImage:"url(https://source.unsplash.com/random)",backgroundRepeat:"no-repeat",backgroundColor:function(e){return"light"===e.palette.mode?e.palette.grey[50]:e.palette.grey[900]},backgroundSize:"cover",backgroundPosition:"center"}}),Object(T.jsx)(v.a,{item:!0,xs:12,sm:8,md:5,component:y.a,elevation:6,square:!0,children:Object(T.jsxs)(f.a,{sx:{my:8,mx:4,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(T.jsx)(m.a,{sx:{m:1,bgcolor:"secondary.main"},children:Object(T.jsx)(C.a,{})}),Object(T.jsx)(k.a,{component:"h1",variant:"h5",children:"Sign up"}),Object(T.jsxs)(f.a,{component:"form",noValidate:!0,onSubmit:o.handleSubmit,sx:{mt:3},children:[Object(T.jsxs)(v.a,{container:!0,spacing:2,children:[Object(T.jsx)(v.a,{item:!0,xs:12,sm:6,children:Object(T.jsx)(x.a,{autoComplete:"given-name",name:"firstName",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0,color:"primary",variant:"outlined",value:o.values.name,onChange:o.handleChange,error:o.touched.name&&Boolean(o.errors.name),helperText:o.touched.name&&o.errors.name})}),Object(T.jsx)(v.a,{item:!0,xs:12,sm:6,children:Object(T.jsx)(x.a,{required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"given-name",autoFocus:!0,color:"primary",variant:"outlined",value:o.values.name,onChange:o.handleChange,error:o.touched.name&&Boolean(o.errors.name),helperText:o.touched.name&&o.errors.name})}),Object(T.jsx)(v.a,{item:!0,xs:12,children:Object(T.jsx)(x.a,{required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",color:"primary",variant:"outlined",value:o.values.email,onChange:o.handleChange,error:o.touched.email&&Boolean(o.errors.email),helperText:o.touched.email&&o.errors.email})}),Object(T.jsx)(v.a,{item:!0,xs:12,children:Object(T.jsx)(x.a,{required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"new-password",color:"primary",variant:"outlined",value:o.values.password,onChange:o.handleChange,error:o.touched.password&&Boolean(o.errors.password),helperText:o.touched.password&&o.errors.password})}),Object(T.jsx)(v.a,{item:!0,xs:12,children:Object(T.jsx)(p.a,{control:Object(T.jsx)(O.a,{value:"allowExtraEmails",color:"primary"}),label:"I want to receive inspiration, marketing promotions and updates via email."})})]}),Object(T.jsx)(h.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},color:"primary",children:"Sign Up"}),Object(T.jsx)(v.a,{container:!0,justifyContent:"flex-end",children:Object(T.jsx)(v.a,{item:!0,children:Object(T.jsx)(g.a,{onClick:function(){i.push("/login")},variant:"body2",children:"Already have an account? Sign in"})})}),Object(T.jsx)(U,{sx:{mt:5}})]})]})})]})})})},A=a(368),Y=a(369),z=a(370),H=a(159),J=a.n(H),M=function(){var e=Object(s.g)(),t=Object(r.useContext)(F).dispatch;return Object(T.jsxs)(T.Fragment,{children:[console.log(document.cookie),Object(T.jsx)(f.a,{sx:{flexGrow:1},children:Object(T.jsx)(A.a,{position:"static",children:Object(T.jsxs)(Y.a,{children:[Object(T.jsx)(z.a,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},children:Object(T.jsx)(J.a,{})}),Object(T.jsx)(k.a,{variant:"h6",component:"div",sx:{flexGrow:1},children:"News"}),Object(T.jsx)(h.a,{color:"inherit",onClick:function(){e.push("/")},children:"Home"}),Object(T.jsx)(h.a,{color:"inherit",onClick:function(){j.a.post("".concat(q,"/api/v1/logout"),{},{withCredentials:!0}).then((function(e){console.log("res +++: ",e.data),t({type:"USER_LOGOUT"})}))},children:"Logout"})]})})})]})},K=a(367),Q=a(356),X=a(371),Z=a(160),$=a.n(Z),ee=E.a({title:E.b("Enter your email").required("Email is required")}),te=function(){var e=Object(r.useContext)(F).state,t=Object(r.useState)([]),a=Object(c.a)(t,2),n=a[0],i=a[1],o=Object(r.useState)(!0),s=Object(c.a)(o,2),l=s[0],d=s[1];Object(r.useEffect)((function(){j.a.get("".concat(q,"/api/v1/post"),{withCredentials:!0}).then((function(e){console.log("res: ",e.data),i(e.data)})).catch((function(e){console.log("error: ",e)}))}),[l]);var m=Object(u.a)({initialValues:{title:"",description:""},onSubmit:function(t){var a;console.log("values: ",t),j.a.post("".concat(q,"/api/v1/post"),{title:t.title,description:t.description,firstName:null===e||void 0===e||null===(a=e.user)||void 0===a?void 0:a.firstName,access_token:e.user.access_token},{withCredentials:!0}).then((function(e){console.log("res: ",e.data),d(!l)})).catch((function(e){console.log("error: ",e)}))},validationSchema:ee});return Object(T.jsx)(T.Fragment,{children:Object(T.jsxs)(f.a,{sx:{flexGrow:1,m:2},children:[Object(T.jsx)(k.a,{variant:"h6",component:"div",sx:{flexGrow:1},children:"Posts"}),Object(T.jsx)(f.a,{component:"form",noValidate:!0,onSubmit:m.handleSubmit,sx:{mt:1},children:Object(T.jsx)(y.a,{style:{margin:16,padding:16},elevation:3,children:Object(T.jsxs)(v.a,{container:!0,alignItems:"center",spacing:2,children:[Object(T.jsx)(v.a,{xs:5,md:10,item:!0,style:{paddingRight:16},children:Object(T.jsx)(x.a,{fullWidth:!0,placeholder:"Title",color:"primary",id:"outlined-basic",label:"Title",variant:"filled",name:"title",value:m.values.title,onChange:m.handleChange,error:m.touched.title&&Boolean(m.errors.title),helperText:m.touched.title&&m.errors.title})}),Object(T.jsx)(v.a,{xs:5,md:10,item:!0,style:{paddingRight:16},children:Object(T.jsx)(x.a,{fullWidth:!0,color:"primary",id:"outlined-basic",placeholder:"Description",label:"Description",variant:"filled",name:"description",value:m.values.description,onChange:m.handleChange,error:m.touched.description&&Boolean(m.errors.description),helperText:m.touched.description&&m.errors.description})}),Object(T.jsx)(v.a,{xs:2,md:2,item:!0,children:Object(T.jsx)(h.a,{fullWidth:!0,color:"success",variant:"contained",type:"submit",children:"Add"})})]})})}),Object(T.jsxs)(y.a,{style:{margin:16,padding:16},elevation:3,children:[Object(T.jsx)(k.a,{variant:"h6",component:"div",sx:{flexGrow:1},children:"Recently Added:"}),Object(T.jsx)(K.a,{spacing:3,children:n.map((function(t){return Object(T.jsx)(y.a,{style:{margin:10},elevation:3,id:t._id,children:Object(T.jsx)(Q.a,{secondaryAction:Object(T.jsx)(z.a,{edge:"end","aria-label":"delete",children:Object(T.jsx)($.a,{onClick:function(t){return a=t,void j.a.delete("".concat(q,"/api/v1/post"),{data:{id:a.target.parentNode.id,access_token:e.user.access_token},withCredentials:!0}).then((function(e){console.log("res: ",e.data),d(!l)})).catch((function(e){console.log("error: ",e)}));var a},id:t._id})}),children:Object(T.jsx)(X.a,{primary:t.title,secondary:t.description+" By "+t.firstName})})},t._id)}))})]})]})})};var ae=function(){var e=Object(r.useContext)(F).state;return Object(r.useEffect)((function(){j.a.get("".concat(q,"/api/v1/profile"),{withCredentials:!0,params:{email:e.user.email}}).then((function(e){console.log("res +++: ",e.data)}))}),[e.user.access_token,e.user.email]),Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(M,{}),Object(T.jsx)(te,{})]})};var re=function(){var e=Object(r.useState)(!1),t=Object(c.a)(e,2),a=t[0],n=t[1];return j.a.get("".concat(q,"/api/v1/getcookie"),{withCredentials:!0}).then((function(e){n(!0)})).catch((function(e){console.log("error: ",e),n(!1)})),Object(T.jsx)(T.Fragment,{children:a?Object(T.jsxs)(s.d,{children:[Object(T.jsx)(s.b,{exact:!0,path:"/",children:Object(T.jsx)(ae,{})}),Object(T.jsx)(s.a,{to:"/"})]}):Object(T.jsxs)(s.d,{children:[Object(T.jsx)(s.b,{exact:!0,path:"/",children:Object(T.jsx)(B,{})}),Object(T.jsx)(s.b,{exact:!0,path:"/login",children:Object(T.jsx)(B,{})}),Object(T.jsx)(s.b,{exact:!0,path:"/signup",children:Object(T.jsx)(V,{})}),Object(T.jsx)(s.a,{to:"/"})]})})},ne=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,372)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,i=t.getLCP,o=t.getTTFB;a(e),r(e),n(e),i(e),o(e)}))},ie=a(57);o.a.render(Object(T.jsx)(n.a.StrictMode,{children:Object(T.jsx)(W,{children:Object(T.jsx)(ie.a,{children:Object(T.jsx)(re,{})})})}),document.getElementById("root")),ne()}},[[311,1,2]]]);
//# sourceMappingURL=main.35e3c0da.chunk.js.map