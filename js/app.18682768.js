(function(e){function a(a){for(var o,i,c=a[0],l=a[1],s=a[2],d=0,u=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(t,i)&&t[i]&&u.push(t[i][0]),t[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);m&&m(a);while(u.length)u.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var e,a=0;a<r.length;a++){for(var n=r[a],o=!0,i=1;i<n.length;i++){var c=n[i];0!==t[c]&&(o=!1)}o&&(r.splice(a--,1),e=l(l.s=n[0]))}return e}var o={},i={app:0},t={app:0},r=[];function c(e){return l.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4",tema5:"tema5",tema6:"tema6"}[e]||e)+"."+{actividad:"74428ba6","chunk-0206bfa0":"74b4743d","chunk-0c047e41":"4561a04d","chunk-13a6037e":"002bf5a6","chunk-18f95272":"16bd0e6c","chunk-25b302c8":"ad1fb863","chunk-26fc7596":"8e225aec","chunk-2c06842c":"5cf1287d","chunk-2d0e96ec":"a315723c","chunk-2d208d90":"eb2fe63c","chunk-2d21d0e2":"ba4d3b60","chunk-2d22c123":"6cb46477","chunk-2d2747e2":"38dfe9c0","chunk-2e80bb9a":"ab209131","chunk-319206de":"67a901a9","chunk-32334cb6":"087ef4e8","chunk-3c57cd7b":"ea2705a9","chunk-3d6834f6":"9d1ced91","chunk-4cdd78c0":"c16fd9d5","chunk-4f2d402a":"096c4870","chunk-4fde0a08":"5377f078","chunk-515a8379":"af465975","chunk-53ccb27e":"f8d3e785","chunk-55d286b8":"f306dd31","chunk-59974754":"bcfb67f5","chunk-6e1e538a":"138e78ba","chunk-766a929b":"9d761fdc","chunk-c796899c":"4cc15a75","chunk-e8a7823a":"5709d543","chunk-f2df7d2c":"03290d7d","chunk-fde47172":"fa19c4c1",comple:"035f1f67",creditos:"488b5487",glosario:"b873acb2",intro:"93aee12f",referencias:"45b3641f",sintesis:"af559391",tema1:"b112ff37",tema2:"d68f1e30",tema3:"4b017b95",tema4:"7731da5e",tema5:"aaeffc9e",tema6:"c749ec88"}[e]+".js"}function l(a){if(o[a])return o[a].exports;var n=o[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var a=[],n={"chunk-0c047e41":1,"chunk-25b302c8":1,"chunk-26fc7596":1,"chunk-2d2747e2":1,"chunk-32334cb6":1,"chunk-3c57cd7b":1,"chunk-4f2d402a":1,"chunk-4fde0a08":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-6e1e538a":1,"chunk-766a929b":1,"chunk-f2df7d2c":1,comple:1,creditos:1,glosario:1,referencias:1};i[e]?a.push(i[e]):0!==i[e]&&n[e]&&a.push(i[e]=new Promise((function(a,n){for(var o="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4",tema5:"tema5",tema6:"tema6"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-0c047e41":"3babef71","chunk-13a6037e":"31d6cfe0","chunk-18f95272":"31d6cfe0","chunk-25b302c8":"3babef71","chunk-26fc7596":"3babef71","chunk-2c06842c":"31d6cfe0","chunk-2d0e96ec":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2d2747e2":"3babef71","chunk-2e80bb9a":"31d6cfe0","chunk-319206de":"31d6cfe0","chunk-32334cb6":"3babef71","chunk-3c57cd7b":"3babef71","chunk-3d6834f6":"31d6cfe0","chunk-4cdd78c0":"31d6cfe0","chunk-4f2d402a":"3babef71","chunk-4fde0a08":"fef54ca8","chunk-515a8379":"d3abb5ef","chunk-53ccb27e":"31d6cfe0","chunk-55d286b8":"31d6cfe0","chunk-59974754":"1a095c20","chunk-6e1e538a":"3ba0a060","chunk-766a929b":"a61d03cb","chunk-c796899c":"31d6cfe0","chunk-e8a7823a":"31d6cfe0","chunk-f2df7d2c":"3babef71","chunk-fde47172":"31d6cfe0",comple:"73d15757",creditos:"33db8a8c",glosario:"c93972b3",intro:"31d6cfe0",referencias:"aad03c2f",sintesis:"31d6cfe0",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"31d6cfe0",tema4:"31d6cfe0",tema5:"31d6cfe0",tema6:"31d6cfe0"}[e]+".css",t=l.p+o,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var s=r[c],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===o||d===t))return a()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){s=u[c],d=s.getAttribute("data-href");if(d===o||d===t)return a()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=a,m.onerror=function(a){var o=a&&a.target&&a.target.src||t,r=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete i[e],m.parentNode.removeChild(m),n(r)},m.href=t;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){i[e]=0})));var o=t[e];if(0!==o)if(o)a.push(o[2]);else{var r=new Promise((function(a,n){o=t[e]=[a,n]}));a.push(o[2]=r);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,l.nc&&d.setAttribute("nonce",l.nc),d.src=c(e);var u=new Error;s=function(a){d.onerror=d.onload=null,clearTimeout(m);var n=t[e];if(0!==n){if(n){var o=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",u.name="ChunkLoadError",u.type=o,u.request=i,n[1](u)}t[e]=void 0}};var m=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(a)},l.m=e,l.c=o,l.d=function(e,a,n){l.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,a){if(1&a&&(e=l(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var o in e)l.d(n,o,function(a){return e[a]}.bind(null,o));return n},l.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(a,"a",a),a},l.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},l.p="",l.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=a,s=s.slice();for(var u=0;u<s.length;u++)a(s[u]);var m=d;r.push([0,"chunk-vendors"]),n()})({0:function(e,a,n){e.exports=n("56d7")},"52e5":function(e,a,n){e.exports=n.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,n){"use strict";n.r(a);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("68f3"),i=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"contenedor-principal"},[n("AsideMenu"),n("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[n("router-view")],1)],1),n("BarraAvance"),n("Accesibilidad")],1)},t=[],r={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},c=r,l=n("2877"),s=Object(l["a"])(c,i,t,!1,null,null,null),d=s.exports,u=(n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),n("2b0e")),m=n("8c4f"),f=n("ae58"),p=n("7e58");u["a"].use(m["a"]);var b=new m["a"]({routes:[{path:"/",name:"inicio",component:f["a"]},{path:"/introduccion",name:"introduccion",component:function(){return n.e("intro").then(n.bind(null,"5167"))}},{path:"/curso",name:"curso",component:p["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return n.e("tema1").then(n.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return n.e("tema2").then(n.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return n.e("tema3").then(n.bind(null,"eb46"))}},{path:"tema4",name:"tema4",component:function(){return n.e("tema4").then(n.bind(null,"3eb5"))}},{path:"tema5",name:"tema5",component:function(){return n.e("tema5").then(n.bind(null,"5029"))}},{path:"tema6",name:"tema6",component:function(){return n.e("tema6").then(n.bind(null,"92ea"))}}]},{path:"/actividad",name:"actividad",component:function(){return n.e("actividad").then(n.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return n.e("glosario").then(n.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return n.e("comple").then(n.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return n.e("referencias").then(n.bind(null,"64ef"))}},{path:"/sintesis",name:"sintesis",component:function(){return n.e("sintesis").then(n.bind(null,"15a3"))}},{path:"/creditos",name:"creditos",component:function(){return n.e("creditos").then(n.bind(null,"ef72"))}}],scrollBehavior:function(e,a){if(e.hash){var n={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?n:new Promise((function(e){setTimeout((function(){e(n)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),g=b,h=n("1c2c"),v=(n("a3a0"),{global:{componenteFormativo:"Condiciones para el crecimiento del material vegetal",descripcionCurso:"Este componente formativo brinda una serie de herramientas e insumos prácticos para la propagación del material vegetal, ayudando a reconocer la importancia de las características del ambiente para su desarrollo, así como la normatividad que conlleva a procesos que involucran la seguridad desde el ejercicio laboral al que corresponde este programa.",imagenBannerPrincipal:n("9128"),fondoBannerPrincipal:n("ce7c"),imagenesDecorativasBanner:[{clases:["banner-principal-decorativo-1","d-none","d-lg-block"],imagen:n("71f8")},{clases:["banner-principal-decorativo-2"],imagen:n("8f04")},{clases:["banner-principal-decorativo-3"],imagen:n("7d72")},{clases:["banner-principal-decorativo-4"],imagen:n("f53d")}]},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",icono:"far fa-file-alt",numero:"1",titulo:"Interpretación ambiental",desarrolloContenidos:!0},{nombreRuta:"tema2",icono:"far fa-file-alt",numero:"2",titulo:"Tipo de infraestructura requerida para la propagación",desarrolloContenidos:!0},{nombreRuta:"tema3",icono:"far fa-file-alt",numero:"3",titulo:"Condiciones para la propagación vegetal ",desarrolloContenidos:!0},{nombreRuta:"tema4",icono:"far fa-file-alt",numero:"4",titulo:"Sistema de riego",desarrolloContenidos:!0},{nombreRuta:"tema5",icono:"far fa-file-alt",numero:"5",titulo:"Crecimiento vegetal",desarrolloContenidos:!0},{nombreRuta:"tema6",icono:"far fa-file-alt",numero:"6",titulo:"Salud y seguridad ocupacional",desarrolloContenidos:!0}],subMenu:[{icono:"fas fa-sitemap",titulo:"Síntesis",nombreRuta:"sintesis",desarrolloContenidos:!0},{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},complementario:[{tema:"Interpretación ambiental",referencia:"Decreto 1843 de 1991. [Ministerio de Salud]. Por el cual se reglamentan parcialmente los títulos III, V,VI, VII y XI de la ley 09 de 1979, sobre uso y manejo de plaguicidas. Agosto 26 de 1991.",tipo:"Decreto.",link:"https://www.dssa.gov.co/index.php/descargas/1011-decreto-1843-1991/file#:~:text=Art%C3%ADculo%201o.,o%20causen%20deterioro%20del%20ambiente"},{tema:"Salud y seguridad ocupacional",referencia:"Decreto 1443 de 2014. [Ministerio del Trabajo]. Por el cual se dictan disposiciones para la implementación del Sistema de Gestión de la Seguridad y Salud en el Trabajo (SG-SST). Julio 31 de 2014.",tipo:"Decreto.",link:"https://www.mintrabajo.gov.co/documents/20147/36482/decreto_1443_sgsss.pdf/ac41ab70-e369-9990-c6f4-1774e8d9a5fa"},{tema:"Salud y seguridad ocupacional",referencia:"Resolución 0312 de 2019. [Ministerio del Trabajo]. Por la cual se definen los estándares mínimos del sistema de gestión de la seguridad y salud en el trabajo SG-SST. Febrero 13 del 2019.",tipo:"Resolución.",link:"https://www.mintrabajo.gov.co/documents/20147/59995826/Resolucion+0312-2019-+Estandares+minimos+del+Sistema+de+la+Seguridad+y+Salud.pdf"}],glosario:[{termino:"Morfología vegetal",significado:"hace referencia a la descripción de la forma física de las partes que conforman la planta, también incluye la descripción de niveles menores a los órganos vegetales como tejidos."},{termino:"Tejido vegetal",significado:"conjunto de células vegetales que tienen igual morfología y cumplen la misma función."},{termino:"Totipotencia",significado:"la habilidad de una célula, en un organismo multicelular para desarrollarse, independientemente, en un nuevo individuo completo."},{termino:"Espécimen",significado:"hace referencia a un individuo que representa una especie en particular."},{termino:"Plántula",significado:"espécimen vegetal que se encuentra en estadíos de desarrollo temprano."},{termino:"Clima",significado:"es el conjunto de variables atmosféricas en zonas geográficas determinadas."},{termino:"Trasplante",significado:"mover una plántula al campo o a contenedores de mayor tamaño."},{termino:"Sustrato",significado:"composición mineral u orgánica que brinda sostenimiento y nutrición a las plantas."},{termino:"Heterotróficas",significado:"acciones propias por desarrollar, en el estadío de desarrollo de la planta."},{termino:"Biofertilizantes",significado:"fertilizantes de composición biológica utilizados para nutrir las plantas."}],referencias:[{referencia:"Alcántara, C., Castilla, P. & Sánchez, M. (2017). Importancia de los cultivos vegetales <em>In vitro</em> para establecer bancos de germoplasma y su uso en investigaciones. <em>Biociencias</em>, 1, p.1-13."},{referencia:'Courtis. A. (2014). <em>Guía de estudio "Crecimiento y desarrollo"</em>. Universidad Nacional del Nordeste.',link:"https://exa.unne.edu.ar/biologia/fisiologia.vegetal/Gu%C3%ADa%20de%20Estudio-Crecimientoydesarrollo.pdf"},{referencia:"Decreto 1843 de 1991. [Ministerio de Salud]. Por el cual se reglamentan parcialmente los títulos III, V,VI, VII y XI de la ley 09 de 1979, sobre uso y manejo de plaguicidas. Agosto 26 de 1991."},{referencia:"Fertilab. (2015). <em>Importancia del sistema radical de las plantas</em>. Fertilab.",link:"https://www.fertilab.com.mx/blog/40-importancia-del-sistema-radical-de-las-plantas/#notas"},{referencia:"Oficemen. (2017). <em>Guía de Buenas Prácticas de PRL en el Sector Cementero Español</em>. Oficemen.",link:"https://www.oficemen.com/wp-content/uploads/2017/05/Guia-PRL-capitulos-1-a-3.pdf"},{referencia:"Pacheco R. & Barbona, E. (2017). <em>Manual de uso seguro y responsable de agroquímicos en cultivos frutihortícolas</em>. Instituto Nacional de Tecnología Agropecuaria.",link:"https://www.researchgate.net/publication/326377611_inta-manual-uso-agroquimicos-frutihorticola"},{referencia:"Rueda, C. N. (2019). <em>Actualización de los conceptos asociados con la regeneración celular en plantas</em> [Tesis de pregrado, Universidad de Santander]. Repositorio Institucional Universidad de Santander.",link:"http://repositorio.udes.edu.co/handle/001/1063"},{referencia:"Universidad Nacional de Costa Rica. (2014).<em>Manual de plaguicidas de Centro América</em>. UNCR.",link:"http://www.plaguicidasdecentroamerica.una.ac.cr/index.php/caracteristicas-generales-y-agronomicas"}],creditos:{liderEquipo:[{nombre:"Maria Camila Garcia Santamaria",cargo:"Líder del equipo",centro:"Dirección General"}],contenidoInstruccional:[{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Asesor metodológico y pedagógico",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"}],desarrolloProducto:[{nombre:"Francisco José Lizcano Reyes",cargo:"Responsable del equipo",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Nombre",cargo:"Diseño web",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Nombre",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Nombre",cargo:"Desarrollo front-end",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Nombre",cargo:"Validación de diseño y contenido",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"}],gestoresRepositorio:[{nombre:"Álvaro Andrés Angarita Ramirez",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"Daniel Felipe Varón Molina",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios - Regional Tolima"}]}});o["a"].prototype.$config=v;var k=n("9224");o["a"].prototype.$package=k,new o["a"]({router:g,store:h["a"],render:function(e){return e(d)}}).$mount("#app")},"71f8":function(e,a,n){e.exports=n.p+"img/banner-principal-decorativo-1.9cae0626.svg"},"7d72":function(e,a,n){e.exports=n.p+"img/banner-principal-decorativo-3.60cddb13.svg"},"8f04":function(e,a,n){e.exports=n.p+"img/banner-principal-decorativo-2.8aac4ab9.svg"},9128:function(e,a,n){e.exports=n.p+"img/banner-princiapal.6ccd6db8.svg"},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"6.3.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"5.3.1","vue":"^2.6.14","vue-router":"^3.5.2","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.13","@vue/cli-plugin-eslint":"^4.5.13","@vue/cli-plugin-router":"^4.5.13","@vue/cli-plugin-vuex":"^4.5.13","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.14"}}')},"9eb5":function(e,a,n){e.exports=n.p+"img/logo-sena-naranja.43e61d0f.svg"},a3a0:function(e,a,n){},ce7c:function(e,a,n){e.exports=n.p+"img/fondo-banner-principal.c5ac723a.png"},f53d:function(e,a,n){e.exports=n.p+"img/banner-principal-decorativo-4.ddcf25e4.svg"}});
//# sourceMappingURL=app.18682768.js.map