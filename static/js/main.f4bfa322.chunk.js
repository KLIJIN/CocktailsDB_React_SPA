(this.webpackJsonpreminder=this.webpackJsonpreminder||[]).push([[0],{26:function(e,t,c){},34:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(19),r=c.n(a),i=(c(26),c(4)),l=c(2),j=c(21),o=c(0),b=function(e){var t=e.image,c=e.name,s=e.id,n=e.info,a=e.glass;return Object(o.jsxs)("article",{className:"cocktail",children:[Object(o.jsx)("div",{className:"img-container",children:Object(o.jsx)("img",{src:t,alt:c})}),Object(o.jsxs)("div",{className:"cocktail-footer",children:[Object(o.jsxs)("h3",{children:[" ",c," "]}),Object(o.jsxs)("h4",{children:[" ",a," "]}),Object(o.jsxs)("p",{children:[" ",n," "]}),Object(o.jsx)(i.b,{to:"/cocktail/".concat(s),className:"btn btn-primary btn-details",children:"details"})]})]})},d=function(){return Object(o.jsx)("div",{className:"loader"})},u=c(10),h=c.n(u),O=c(12),x=c(9),m=n.a.createContext(),p=function(e){var t=e.children,c=Object(s.useState)(!0),n=Object(x.a)(c,2),a=n[0],r=n[1],i=Object(s.useState)(""),l=Object(x.a)(i,2),j=l[0],b=l[1],d=Object(s.useState)([]),u=Object(x.a)(d,2),p=u[0],f=u[1],g=Object(s.useCallback)(Object(O.a)(h.a.mark((function e(){var t,c,s,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(!0),e.prev=1,e.next=4,fetch("".concat("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=").concat(j));case 4:return t=e.sent,e.next=7,t.json();case 7:c=e.sent,(s=c.drinks)?(n=s.map((function(e){return{id:e.idDrink,name:e.strDrink,image:e.strDrinkThumb,info:e.strAlcoholic,glass:e.strGlass}})),console.log("AppProvider",n),f(n)):f([]),r(!1),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(1),console.log(e.t0),r(!1);case 17:case"end":return e.stop()}}),e,null,[[1,13]])}))),[j]);return Object(s.useEffect)((function(){g()}),[j,g]),Object(o.jsx)(m.Provider,{value:{loading:a,searchTerm:j,cocktails:p,setSearchTerm:b},children:t})},f=function(){return Object(s.useContext)(m)},g=function(){var e=f(),t=e.cocktails;return e.loading?Object(o.jsx)(d,{}):t.length<1?Object(o.jsx)("h2",{className:"section-title",children:" no coctails matched your search criteria "}):Object(o.jsxs)("section",{className:"section",children:[Object(o.jsx)("h2",{className:"section-title",children:" cocktails "}),Object(o.jsx)("div",{className:"cocktails-center",children:t.map((function(e){return Object(o.jsx)(b,Object(j.a)({},e),e.id)}))})]})},k=function(){var e=f().setSearchTerm,t=Object(s.useRef)("");Object(s.useEffect)((function(){t.current.focus()}),[]);return Object(o.jsx)("section",{className:"section search",children:Object(o.jsx)("form",{className:"search-form",onSubmit:function(e){e.preventDefault()},children:Object(o.jsxs)("div",{className:"form-control",children:[Object(o.jsx)("label",{htmlFor:"cocktail777",style:{letterSpacing:"0.06em"},children:" \u0412\u044b\u0431\u0435\u0440\u0435\u0442\u0435 \u0432\u0430\u0448 \u043b\u044e\u0431\u0438\u043c\u044b\u0439 \u043a\u043e\u043a\u0442\u0435\u0439\u043b\u044c "}),Object(o.jsx)("input",{type:"text",id:"cocktail777",ref:t,onChange:function(){e(t.current.value)}})]})})})},v=function(){var e=f().setSearchTerm;return Object(s.useEffect)((function(){e("")}),[]),Object(o.jsxs)("main",{children:[Object(o.jsx)(k,{}),Object(o.jsx)(g,{})]})},N=function(){var e={display:"block",width:"100%",height:"1px",backgroundColor:"#476a2e",margin:"20px 1px"};return Object(o.jsxs)("section",{className:"section about-section",children:[Object(o.jsx)("h1",{className:"section",children:"about page"}),Object(o.jsx)("span",{style:e}),Object(o.jsx)("p",{className:"about-section",children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, delectus. Asperiores repudiandae quod architecto ea sunt voluptatem doloribus enim eaque, exercitationem voluptatum facilis iusto iste, accusantium eum officiis dignissimos tempora id suscipit ab esse quibusdam fugit, aperiam natus accusamus. Blanditiis temporibus eaque repellat sapiente, provident error! Placeat doloribus quia beatae."}),Object(o.jsx)("span",{style:e})]})};function y(){var e=Object(l.f)().id,t=Object(s.useState)(!1),c=Object(x.a)(t,2),n=c[0],a=c[1],r=Object(s.useState)(null),j=Object(x.a)(r,2),b=j[0],u=j[1];if(Object(s.useEffect)((function(){function t(){return(t=Object(O.a)(h.a.mark((function t(){var c,s,n,r,i,l,j,o,b,d,O,x,m,p;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=".concat(e));case 3:return c=t.sent,t.next=6,c.json();case 6:(s=t.sent).drinks?(n=s.drinks[0],r=n.strDrink,i=n.strDrinkThumb,l=n.strAlcoholic,j=n.strCategory,o=n.strGlass,b=n.strInstructions,d=n.strIngredient1,O=n.strIngredient2,x=n.strIngredient3,m=n.strIngredient4,p=n.strIngredient5,u({name:r,image:i,info:l,category:j,glass:o,instructions:b,ingredients:[d,O,x,m,p]})):u(null),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:a(!1);case 14:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}a(!0),function(){t.apply(this,arguments)}()}),[e]),n)return Object(o.jsx)(d,{});if(b){var m=b.name,p=b.image,f=b.category,g=b.info,k=b.glass,v=b.instructions,N=b.ingredients;return Object(o.jsxs)("section",{className:"section cocktail-section",children:[Object(o.jsx)(i.b,{to:"/",className:"btn btn-primary",children:"back home"}),Object(o.jsx)("h2",{className:"section-title",children:m}),Object(o.jsxs)("div",{className:"drink",children:[Object(o.jsx)("img",{src:p,alt:m}),Object(o.jsxs)("div",{className:"drink-info",children:[Object(o.jsxs)("p",{children:[Object(o.jsx)("span",{className:"drink-data",children:"name :"})," ",m]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("span",{className:"drink-data",children:"category :"})," ",f]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("span",{className:"drink-data",children:"info :"})," ",g]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("span",{className:"drink-data",children:"glass :"})," ",k]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("span",{className:"drink-data",children:"instructons :"})," ",v]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("span",{className:"drink-data",children:"ingredients :"}),N.map((function(e,t){return e?Object(o.jsxs)("span",{children:[" ",e]},t):null}))]})]})]})]})}return Object(o.jsx)("h2",{className:"section-title",children:"no cocktail to display"})}var w=function(){var e=f().searchTerm;return Object(o.jsx)("section",{className:"error-page section",children:Object(o.jsxs)("div",{className:"error-container",children:[Object(o.jsx)("h1",{style:{letterSpacing:"-0.01em"},children:" \u041e\u0439 \u0442\u0430\u043a\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 "}),Object(o.jsx)("p",{style:{marginTop:"30px",textTransform:"none"},children:" \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0432\u043e\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u043f\u043e\u0438\u0441\u043a\u043e\u043c \u0438\u043b\u0438 \u0432\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 "}),Object(o.jsx)(i.b,{to:"/",className:"btn btn-primary",style:{marginTop:"50px"},children:" Back to Home "}),Object(o.jsx)(k,{}),e?Object(o.jsx)(g,{}):null]})})},S=c.p+"static/media/logo.5bb3b58e.svg",T=function(){return Object(o.jsx)("nav",{className:"navbar",children:Object(o.jsxs)("div",{className:"nav-center",children:[Object(o.jsx)(i.b,{to:"/",children:Object(o.jsx)("img",{src:S,alt:"logo image",className:"logo"})}),Object(o.jsxs)("ul",{className:"nav-links",children:[Object(o.jsxs)("li",{children:[" ",Object(o.jsx)(i.b,{to:"/",children:" Home "})," "]}),Object(o.jsxs)("li",{children:[" ",Object(o.jsx)(i.b,{to:"/about",children:" About "})," "]}),Object(o.jsxs)("li",{children:[" ",Object(o.jsx)(i.b,{to:"/error",children:" Error Page "})," "]})]})]})})};var C=function(){return Object(o.jsxs)(i.a,{children:[Object(o.jsx)(T,{}),Object(o.jsxs)(l.c,{children:[Object(o.jsxs)(l.a,{exact:!0,path:"/CocktailsDB_React_SPA",children:["  ",Object(o.jsx)(v,{})," "]}),"   ",Object(o.jsxs)(l.a,{exact:!0,path:"/",children:[" ",Object(o.jsx)(v,{})," "]}),Object(o.jsxs)(l.a,{path:"/about",children:[" ",Object(o.jsx)(N,{})," "]}),Object(o.jsxs)(l.a,{path:"/cocktail/:id",children:[" ",Object(o.jsx)(y,{})," "]}),Object(o.jsxs)(l.a,{path:"*",children:[" ",Object(o.jsx)(w,{})," "]})]})]})};r.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(p,{children:Object(o.jsx)(C,{})})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.f4bfa322.chunk.js.map