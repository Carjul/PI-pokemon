(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){},96:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),c=n(26),i=n.n(c),r=(n(54),n(55),n(17)),s=n(18),l=n(19),u=n(21),p=n(12),d=(n(56),n(0)),j=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return document.getElementById("1").className="bg",Object(d.jsx)("div",{children:Object(d.jsx)(p.b,{to:"/inicio",children:Object(d.jsx)("button",{id:"btn",children:" Inicio"})})})}}]),n}(o.a.Component),b=n(4),m=n(6),O=n(13);n(65);function h(e){var t=e.tipo,n=e.id,a=e.name,o=e.img;return Object(d.jsxs)("div",{id:"card",children:[Object(d.jsx)(p.b,{to:"/detalle/".concat(n),children:Object(d.jsxs)("h3",{children:[" ",a]})}),Object(d.jsx)("img",{src:o,alt:"deberia ir una imagen aqui",width:"200px",height:"280px"},n),t.map((function(e){return Object(d.jsxs)("p",{children:["Tipo: ",e.type.name]})}))]})}n(66);function x(e){var t=e.pagina,n=e.setPagina,a=e.maximo,c=o.a.useState(1),i=Object(O.a)(c,2),r=i[0],s=i[1];return Object(d.jsxs)("div",{id:"pasarpagina",children:[Object(d.jsx)("input",{type:"button",value:"<",onClick:function(){1<r&&(s(r-1),n(t-1))},className:"change"}),Object(d.jsx)("strong",{children:r}),Object(d.jsxs)("p",{children:["de   ",a]}),Object(d.jsx)("input",{type:"button",value:">",onClick:function(){a>r&&(s(r+1),n(t+1))},className:"change"})]})}var f=n(34),v=n(35),g=n(47),k=n(14),y=n.n(k),q="RCV_DATA",N="POKE_DETALLE",E="POKE_DETALLE1",C="POST_DATA",w="RCV_DATA_API",A="QUERY",D="FILTRO",S="FILTROTIPO",T="ORDENAR";function I(e){if(e.length<=1)return e;var t,n=e.shift(),a=[],o=[],c=Object(f.a)(e);try{for(c.s();!(t=c.n()).done;){var i=t.value;n.pokemon.ataque>i.pokemon.ataque?o.push(i):a.push(i)}}catch(r){c.e(r)}finally{c.f()}return[].concat(Object(m.a)(I(o)),[n],Object(m.a)(I(a)))}function P(e){if(e.length<=1)return e;var t,n=e.shift(),a=[],o=[],c=Object(f.a)(e);try{for(c.s();!(t=c.n()).done;){var i=t.value;n.pokemon.ataque>i.pokemon.ataque?o.push(i):a.push(i)}}catch(r){c.e(r)}finally{c.f()}return[].concat(Object(m.a)(P(a)),[n],Object(m.a)(P(o)))}function _(e,t){for(var n=[],a=0;a<e.length;a++)for(var o=e[a],c=0;c<o.tipo.length;c++){e[a].tipo[c].type.name===t&&n.push(e[a])}return n}function F(e){return e.sort((function(e,t){return e.pokemon.name<t.pokemon.name?1:e.pokemon.name>t.pokemon.name?-1:0})),e}function R(e){return e.sort((function(e,t){return e.pokemon.name<t.pokemon.name?-1:e.pokemon.name>t.pokemon.name?1:0})),e}console.log(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}));var B=n(7),L=n.p+"static/media/descarga.22c10875.jfif";n(91),n(92);function V(){var e=Object(a.useState)(""),t=Object(O.a)(e,2),n=t[0],o=t[1],c=Object(B.c)(),i=Object(B.d)((function(e){return e.busquedapokemon}));return Object(a.useEffect)((function(){}),[i]),Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),document.getElementById("input").value=""},children:[Object(d.jsx)("input",{type:"text",placeholder:"name pokemon",onChange:function(e){return o(e.target.value)},id:"input"}),Object(d.jsx)("input",{type:"submit",value:"Buscar",id:"b",onClick:function(){var e;c((e=n,function(t){y()({method:"get",url:"/pokemon?name=".concat(e)}).then((function(e){t({type:A,payload:[e.data]})})).catch((function(e){return console.log(e)}))}))}})]})}var K=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"nav",children:Object(d.jsx)("nav",{children:Object(d.jsxs)("ul",{children:[Object(d.jsxs)(p.b,{exact:!0,to:"/",children:[" ",Object(d.jsx)("img",{src:L,alt:"imagen aqui",className:"img",width:"50px",height:"50px"})]}),Object(d.jsx)(p.b,{to:"/inicio",id:"home",children:"Home"})," ",Object(d.jsx)(p.b,{to:"/crear",id:"home",children:"Crear"}),Object(d.jsx)("div",{className:"bar",children:Object(d.jsx)(V,{})})]})})})}}]),n}(o.a.Component);n(93);function H(){var e;document.getElementById("1").className="e";var t=Object(B.c)(),n=Object(B.d)((function(e){return e.pokemons})),a=Object(B.d)((function(e){return e.pokemonsPokeapi})),c=Object(B.d)((function(e){return e.filtrado})),i=o.a.useState(1),r=Object(O.a)(i,2),s=r[0],l=r[1],u=[];u=c.length>0?Object(m.a)(c):[].concat(Object(m.a)(n),Object(m.a)(a));var p=Math.ceil(u.length/12);return o.a.useEffect((function(){document.getElementById("1").className="e",t((function(e){y()({method:"get",url:"/pokemons"}).then((function(t){var n=[],a=t.data.filter((function(e){return!e.url}));a&&n.push.apply(n,Object(m.a)(a)),e({type:q,payload:n})})).catch((function(e){console.log(e)}))})),t((function(e){y()({method:"get",url:"/pokemons"}).then((function(t){var n=[];t.data.filter((function(e){return e.url})).map(function(){var t=Object(g.a)(Object(v.a)().mark((function t(a){return Object(v.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y()({method:"get",url:a.url}).then((function(t){n.push({tipo:t.data.types,pokemon:{id:t.data.id,name:t.data.name,ataque:t.data.stats[1].base_stat,defensa:t.data.stats[2].base_stat,velocidad:t.data.stats[5].base_stat,peso:t.data.weight,altura:t.data.height,img:t.data.sprites.other.dream_world.front_default}}),e({type:w,payload:n})}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())})).catch((function(e){console.log(e)}))}))}),[t]),Object(d.jsxs)("div",{children:[Object(d.jsx)(K,{}),Object(d.jsxs)("select",{name:" tipo de pokemon",id:"tp",onChange:function(){return t((e=u,function(t){var n=document.getElementById("tp").value;t({type:S,payload:_(e,n)})}));var e},children:[Object(d.jsx)("option",{value:"1",children:"tipo de pokemon"}),Object(d.jsx)("option",{value:"normal",children:"normal"}),Object(d.jsx)("option",{value:"flying",children:"flying"}),Object(d.jsx)("option",{value:"ground",children:"ground"}),Object(d.jsx)("option",{value:"bug",children:"bug"}),Object(d.jsx)("option",{value:"steel",children:"steel"}),Object(d.jsx)("option",{value:"water",children:"water"}),Object(d.jsx)("option",{value:"electric",children:"electric"}),Object(d.jsx)("option",{value:"ice",children:"ice"}),Object(d.jsx)("option",{value:"dark",children:"dark"}),Object(d.jsx)("option",{value:"unknown",children:"unknown"}),Object(d.jsx)("option",{value:"fighting",children:"fighting"}),Object(d.jsx)("option",{value:"poison",children:"poison"}),Object(d.jsx)("option",{value:"rock",children:"rock"}),Object(d.jsx)("option",{value:"ghost",children:"ghost"}),Object(d.jsx)("option",{value:"fire",children:"fire"}),Object(d.jsx)("option",{value:"grass",children:"grass"}),Object(d.jsx)("option",{value:"psychic",children:"psychic"}),Object(d.jsx)("option",{value:"dragon",children:"dragon"}),Object(d.jsx)("option",{value:"fairy",children:"fairy"}),Object(d.jsx)("option",{value:"shadow",children:"shadow"})]}),Object(d.jsxs)("select",{name:"pokemon existente",id:"pe",onChange:function(){return t((e=u,function(t){var n=null;switch(document.getElementById("pe").value){case"pokeApp":n=e.filter((function(e){return e.pokemon.id.length>3}));break;case"pokeApi":n=e.filter((function(e){return e.pokemon.id.toString().length<4}));break;case"1":n=[];break;default:return n}t({type:D,payload:n})}));var e},children:[Object(d.jsx)("option",{value:"1",children:"pokemon existente"}),Object(d.jsx)("option",{value:"pokeApi",children:"En pokeApi"}),Object(d.jsx)("option",{value:"pokeApp",children:"En pokeApp"})]}),Object(d.jsxs)("select",{name:"orden alfab\xe9tico y por ataque",id:"oapa",onChange:function(){return t((e=u,function(t){switch(document.getElementById("oapa").value){case"ataquea":t({type:T,payload:I(e)});break;case"ataqued":t({type:T,payload:P(e)});break;case"alfabeticoa":t({type:T,payload:F(e)});break;case"alfabeticod":t({type:T,payload:R(e)});break;default:t({type:T,payload:[]})}}));var e},children:[Object(d.jsx)("option",{value:"1",children:"Ordenar"}),Object(d.jsx)("option",{value:"ataquea",children:"ataque acendente"}),Object(d.jsx)("option",{value:"ataqued",children:"ataque decendente"}),Object(d.jsx)("option",{value:"alfabeticoa",children:"alfabetico acendente"}),Object(d.jsx)("option",{value:"alfabeticod",children:"alfabetico decendente"})]}),null===(e=u)||void 0===e?void 0:e.slice(12*(s-1),12*(s-1)+12).map((function(e,t){return Object(d.jsx)("div",{children:Object(d.jsx)(h,{tipo:e.tipo,id:e.pokemon.id,name:e.pokemon.name,img:e.pokemon.img})},t)})),Object(d.jsx)("br",{}),Object(d.jsx)(x,{pagina:s,setPagina:l,maximo:p})]})}n(94);var U=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){document.getElementById("1").className="bg-c";var e=this.props.match.params;this.props.detalle(e.id)}},{key:"componentWillUnmount",value:function(){this.props.limpiar({})}},{key:"render",value:function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(K,{}),this.props.pot.pokemon?Object(d.jsxs)("div",{id:"Detail",children:[Object(d.jsx)("h2",{children:this.props.pot.pokemon.name}),Object(d.jsx)("img",{src:this.props.pot.pokemon.img,alt:"imagen",width:"460px",height:"450px"}),this.props.pot.tipo.map((function(e){return Object(d.jsxs)("p",{children:["Tipo: ",e.name?e.name:e.type.name]})})),Object(d.jsxs)("p",{children:["Ataque: ",this.props.pot.pokemon.ataque," "]}),Object(d.jsxs)("p",{children:["Defensa: ",this.props.pot.pokemon.defensa," "]}),Object(d.jsxs)("p",{children:["Velocidad: ",this.props.pot.pokemon.velocidad," "]}),Object(d.jsxs)("p",{children:["Peso: ",this.props.pot.pokemon.peso]}),Object(d.jsxs)("p",{children:["Altura: ",this.props.pot.pokemon.altura," "]}),Object(d.jsxs)("p",{children:["N\xfamero de Pokemon: ",this.props.pot.pokemon.id," "]})]}):Object(d.jsx)("div",{})]})}}]),n}(o.a.Component);var W=Object(B.b)((function(e){return{pot:e.Detallepokemon}}),(function(e){return{detalle:function(t){return e(function(e){return function(t){y()({method:"get",url:"/pokemons/".concat(e)}).then((function(e){t({type:N,payload:e.data})})).catch((function(e){return console.log(e)}))}}(t))},limpiar:function(t){return e({type:E,payload:t})}}}))(U),$=n(24),M=n(2),J=(n(95),n.p+"static/media/pokemon.48212ed0.png");function z(){document.getElementById("1").className="e";var e=Object(B.c)(),t=Object(B.d)((function(e){return e.resapimsg})),n=o.a.useState(""),a=Object(O.a)(n,2),c=a[0],i=a[1],r=o.a.useState([]),s=Object(O.a)(r,2),l=s[0],u=s[1],p=o.a.useState({name:"",ataque:"",defensa:"",velocidad:"",peso:"",altura:"",img:"",types:l}),j=Object(O.a)(p,2),b=j[0],m=j[1],h=o.a.useState({}),x=Object(O.a)(h,2),f=x[0],v=x[1],g=function(e){m(Object(M.a)(Object(M.a)({},b),{},Object($.a)({},e.target.name,e.target.value))),v(function(e){var t=new RegExp("^[a-zA-Z]+$"),n=new RegExp("^([0-9]){1,4}$"),a=new RegExp("^([0-9]){1,3}$"),o=new RegExp("^([0-9]){1,2}$"),c=new RegExp("(www|http:|https:)"),i={};e.name?t.test(e.name)||(i.name="monbre del pokemon es invalido"):i.name="monbre del pokemon es requerido";e.ataque?a.test(e.ataque)||(i.ataque="valor de ataque invalido"):i.ataque="valor de ataque requerido";e.defensa?a.test(e.defensa)||(i.defensa="valor de defensa invalido"):i.defensa="valor de defensa requerido";e.velocidad?a.test(e.velocidad)||(i.velocidad="valor de velocidad invalido"):i.velocidad="valor de velocidad requerido";e.peso?n.test(e.peso)||(i.peso="valor de peso invalido"):i.peso="valor de peso requerido";e.altura?o.test(e.altura)||(i.altura="valor de altura invalido"):i.altura="valor de altura requerido";e.img?c.test(e.img)||(i.img="url de imagen invalido"):i.img="url de imagen requerido";return i}(Object(M.a)(Object(M.a)({},b),{},Object($.a)({},e.target.name,e.target.value))))};return Object(d.jsxs)("div",{children:[Object(d.jsx)(K,{}),Object(d.jsx)("h3",{children:"Crear nuevo pokemon"}),Object(d.jsx)("br",{}),Object(d.jsxs)("form",{onSubmit:function(t){var n;t.preventDefault(),console.log(l),e((n=b,function(e){y.a.post("/pokemons",n).then((function(t){e({type:C,payload:t.data})})).catch((function(t){e({type:C,payload:t.response.data})}))})),u(l=[]),m(Object(M.a)(Object(M.a)({},b),{},{name:"",ataque:"",defensa:"",velocidad:"",peso:"",altura:"",img:"",types:l}))},className:"form",children:[Object(d.jsx)("label",{htmlFor:"Name",children:"Nombre "}),Object(d.jsx)("br",{}),Object(d.jsx)("input",{type:"text",name:"name",id:"Name",className:"inputs",placeholder:"insert nombre",onChange:g,value:b.name}),Object(d.jsx)("br",{}),Object(d.jsx)("strong",{className:"error",children:f.name}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{htmlFor:"Ataque",children:"Ataque "}),Object(d.jsx)("br",{}),Object(d.jsx)("input",{type:"text",name:"ataque",id:"Ataque",className:"inputs",placeholder:"insert value",onChange:g,value:b.ataque}),Object(d.jsx)("br",{}),Object(d.jsx)("strong",{className:"error",children:f.ataque}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{htmlFor:"Defensa",children:"Defensa "}),Object(d.jsx)("br",{}),Object(d.jsx)("input",{type:"text",name:"defensa",id:"Defensa",className:"inputs",placeholder:"insert value",onChange:g,value:b.defensa}),Object(d.jsx)("br",{}),Object(d.jsx)("strong",{className:"error",children:f.defensa}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{htmlFor:"Velocidad",children:"Velocidad "}),Object(d.jsx)("br",{}),Object(d.jsx)("input",{type:"text",name:"velocidad",id:"Velocidad",className:"inputs",placeholder:"insert value",onChange:g,value:b.velocidad}),Object(d.jsx)("br",{}),Object(d.jsx)("strong",{className:"error",children:f.velocidad}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{htmlFor:"Peso",children:"Peso "}),Object(d.jsx)("br",{}),Object(d.jsx)("input",{type:"text",name:"peso",id:"Peso",className:"inputs",placeholder:"insert value",onChange:g,value:b.peso}),Object(d.jsx)("br",{}),Object(d.jsx)("strong",{className:"error",children:f.peso}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{htmlFor:"Altura",children:"Altura "}),Object(d.jsx)("br",{}),Object(d.jsx)("input",{type:"text",name:"altura",id:"Altura",className:"inputs",placeholder:"insert value",onChange:g,value:b.altura}),Object(d.jsx)("br",{}),Object(d.jsx)("strong",{className:"error",children:f.altura}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{htmlFor:"Imagen",children:"imagen "}),Object(d.jsx)("br",{}),Object(d.jsx)("input",{type:"url",name:"img",id:"Imagen",className:"inputs",placeholder:"insert url de img",onChange:g,value:b.img}),Object(d.jsx)("br",{}),Object(d.jsx)("strong",{className:"error",children:f.img}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{htmlFor:"Tipos",children:"Tipo"}),Object(d.jsx)("br",{}),Object(d.jsx)("input",{type:"text",name:"tipo",id:"tipos",className:"inputs",placeholder:"insert tipo pokemon"})," ",Object(d.jsx)("input",{type:"button",value:"Guardar tipo",className:"boton",onClick:function(){i(c=document.getElementById("tipos").value),l.push({name:c}),i(document.getElementById("tipos").value="",c="")}}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),f.img||f.name||f.altura||f.peso||f.defensa||f.ataque||f.velocidad?Object(d.jsx)("button",{disabled:"disabled",className:"buton1",children:"Crear"}):Object(d.jsx)("button",{type:"submit",className:"buton",children:"Crear"}),"   ",t.msg?Object(d.jsx)("div",{id:"gree",children:t.msg}):Object(d.jsx)("div",{})]}),Object(d.jsx)("img",{src:J,alt:"",className:"imgpost",width:"800px",height:"600px"})]})}var G=function(){return Object(d.jsxs)(o.a.Fragment,{children:[Object(d.jsx)(b.a,{exact:!0,path:"/",component:j}),Object(d.jsx)(b.a,{path:"/inicio",component:H}),Object(d.jsx)(b.a,{path:"/detalle/:id",component:W}),Object(d.jsx)(b.a,{path:"/crear",component:z})]})},Q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,97)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),o(e),c(e),i(e)}))},Y=n(29),Z={pokemons:[],pokemonsPokeapi:[],Detallepokemon:{},filtrado:[],resapimsg:{}},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case q:return Object(M.a)(Object(M.a)({},e),{},{pokemons:Object(m.a)(e.pokemons=t.payload)});case w:return Object(M.a)(Object(M.a)({},e),{},{pokemonsPokeapi:Object(m.a)(e.pokemonsPokeapi=t.payload)});case N:case E:return Object(M.a)(Object(M.a)({},e),{},{Detallepokemon:e.Detallepokemon=t.payload});case C:return Object(M.a)(Object(M.a)({},e),{},{resapimsg:e.resapimsg=t.payload});case A:return Object(M.a)(Object(M.a)({},e),{},{pokemons:e.pokemons.concat(t.payload)});case D:case S:case T:return Object(M.a)(Object(M.a)({},e),{},{filtrado:Object(m.a)(e.filtrado=t.payload)});default:return e}},ee=n(49),te=Y.b,ne=Object(Y.c)(X,te(Object(Y.a)(ee.a)));i.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(B.a,{store:ne,children:Object(d.jsx)(p.a,{children:Object(d.jsx)(G,{})})})}),document.getElementById("root")),Q()}},[[96,1,2]]]);
//# sourceMappingURL=main.f9d441ab.chunk.js.map