!function(){"use strict";var n;function e(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function t(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function o(n,e,o){return e&&t(n.prototype,e),o&&t(n,o),Object.defineProperty(n,"prototype",{writable:!1}),n}(self.webpackChunkpokedex=self.webpackChunkpokedex||[]).push([[20],{4020:function(t,a,c){c.r(a),c.d(a,{PokemonDetailsModule:function(){return D}});var i,_=c(5050),s=c(4466),r={id:0,name:"MissingNo.",genus:"Pok\xe9mon ???",sprite:"./assets/images/missingno.png",height:10,weight:15983,types:[{name:"bird"},{name:"normal"}],stats:[{name:"hp",value:33},{name:"attack",value:136},{name:"defense",value:0},{name:"special-attack",value:6},{name:"special-defense",value:6},{name:"speed",value:29}],flavorTexts:[{versionNames:["green"],text:"\u3051\u3064\u3070\u3093"},{versionNames:["red"],text:"???"},{versionNames:["blue"],text:"\u30b3\u30e1\u30f3\u30c8 \u3055\u304f\u305b\u3044\u3061\u3085\u3046"},{versionNames:["yellow"],text:"..."}]},p=c(7238),l=(0,p.X$)("fadeIn",[(0,p.eR)(":enter",[(0,p.oB)({opacity:0}),(0,p.jt)(250,(0,p.oB)({opacity:1}))])]),g=c(639),m=c(8002),d=function(n){var e=n.id,t=n.name,o=n.pokemon_v2_pokemonspeciesflavortexts,a=n.pokemon_v2_pokemonspeciesnames,c=n.pokemon_v2_pokemons,i=[];return o.forEach(function(n){var e=i.find(function(e){return e.text===n.flavor_text.replace(/\f/g," ")});e?e.versionNames.push(n.pokemon_v2_version.name):i.push({text:n.flavor_text.replace(/\f/g," "),versionNames:[n.pokemon_v2_version.name]})}),{id:e,name:t,genus:a[0].genus,weight:c[0].weight,height:c[0].height,sprite:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/".concat(e.toString().padStart(3,"0"),".png"),flavorTexts:i,types:c[0].pokemon_v2_pokemontypes.map(function(n){return{name:n.pokemon_v2_type.name}}),stats:c[0].pokemon_v2_pokemonstats.map(function(n){var e=n.base_stat;return{name:n.pokemon_v2_stat.name,value:e}})}},u=c(2340),k=c(7984),O=function(e){return k.Ps(n||(t=["\n    query {\n      pokemon_v2_pokemonspecies(where: {id: {_eq: ","}}) {\n        id\n        name\n        pokemon_v2_pokemonspeciesnames(where: {language_id: {_eq: ","}}) {\n          genus\n        }\n        pokemon_v2_pokemonspeciesflavortexts(where: {language_id: {_eq: ","}}) {\n          pokemon_v2_version {\n            name\n          }\n          flavor_text\n        }\n        pokemon_v2_pokemons {\n          weight\n          height\n          pokemon_v2_pokemonsprites {\n            sprites\n          }\n          pokemon_v2_pokemontypes {\n            pokemon_v2_type {\n              name\n            }\n          }\n          pokemon_v2_pokemonstats {\n            pokemon_v2_stat {\n              name\n            }\n            base_stat\n          }\n        }\n      }\n    }\n  "],o||(o=t.slice(0)),n=Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(o)}}))),e,u.N.languageId,u.N.languageId);var t,o},P=c(8890),C=((i=function(){function n(t){e(this,n),this.apollo=t}return o(n,[{key:"getPokemonSpecieByPokemonId",value:function(n){return this.apollo.query({query:O(n)}).pipe((0,m.U)(function(n){return n.data.pokemon_v2_pokemonspecies}),(0,m.U)(function(n){return n.map(d)}),(0,m.U)(function(n){return n[0]}))}}]),n}()).\u0275fac=function(n){return new(n||i)(g.LFG(P._M))},i.\u0275prov=g.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i),M=c(9480),f=c(8583),v=c(9123),h=c(6515),y=c(9651),x=function(){var n=function(){function n(){e(this,n)}return o(n,[{key:"transform",value:function(n){if("en"===u.N.language)return n;switch(n){case"bird":return"p\xe1jaro";case"bug":return"bicho";case"dark":return"siniestro";case"dragon":return n;case"electric":return"electrico";case"fairy":return"hada";case"fighting":return"luchador";case"fire":return"fuego";case"flying":return"volador";case"ghost":return"fantasma";case"grass":return"hierba";case"ground":return"tierra";case"ice":return"hielo";case"normal":return n;case"poison":return"veneno";case"psychic":return"ps\xedquico";case"rock":return"roca";case"steel":return"acero";case"water":return"agua";default:return"desconocido"}}}]),n}();return n.\u0275fac=function(e){return new(e||n)},n.\u0275pipe=g.Yjl({name:"pokemonType",type:n,pure:!0}),n}(),Z=function(){var n=function(){function n(){e(this,n)}return o(n,[{key:"transform",value:function(n){return n/10+"m"}}]),n}();return n.\u0275fac=function(e){return new(e||n)},n.\u0275pipe=g.Yjl({name:"pokemonHeight",type:n,pure:!0}),n}(),b=function(){var n=function(){function n(){e(this,n)}return o(n,[{key:"transform",value:function(n){return n/10+"kg"}}]),n}();return n.\u0275fac=function(e){return new(e||n)},n.\u0275pipe=g.Yjl({name:"pokemonWeight",type:n,pure:!0}),n}(),w=function(){var n=function(){function n(){e(this,n)}return o(n,[{key:"transform",value:function(n){if("en"===u.N.language)switch(n){case"special-attack":return"spcl. atk.";case"special-defense":return"spcl. def.";default:return n}else switch(n){case"hp":return"ps";case"attack":return"ataque";case"defense":return"defensa";case"special-attack":return"at. esp.";case"special-defense":return"def. esp.";case"speed":return"velocidad";default:return"desconocido"}}}]),n}();return n.\u0275fac=function(e){return new(e||n)},n.\u0275pipe=g.Yjl({name:"pokemonStat",type:n,pure:!0}),n}(),q=function(){var n=function(){function n(){e(this,n)}return o(n,[{key:"transform",value:function(n){return n.replace(/-/g," ").replace(/lets/g,"let's")}}]),n}();return n.\u0275fac=function(e){return new(e||n)},n.\u0275pipe=g.Yjl({name:"pokedexVersionName",type:n,pure:!0}),n}();function A(n,e){if(1&n&&(g.TgZ(0,"span"),g._uU(1),g.ALo(2,"pokemonNumber"),g.qZA()),2&n){var t=g.oxw();g.Q6J("@fadeIn",void 0),g.xp6(1),g.Oqu(g.lcZ(2,2,t.pokemonSpecie.id))}}function T(n,e){if(1&n&&g._UZ(0,"img",22),2&n){var t=g.oxw();g.Q6J("@fadeIn",void 0)("src",t.pokemonSpecie.sprite,g.LSH)("alt",t.pokemonSpecie.name)}}function S(n,e){1&n&&(g.TgZ(0,"span"),g._uU(1,"<"),g.qZA())}function Q(n,e){if(1&n&&(g.TgZ(0,"span"),g._uU(1),g.ALo(2,"pokemonNumber"),g.qZA()),2&n){var t=g.oxw();g.Q6J("@fadeIn",void 0),g.xp6(1),g.hij(" ",g.lcZ(2,2,t.pokemonSpecie.id)," ")}}function I(n,e){if(1&n&&(g.TgZ(0,"span",23),g._uU(1),g.ALo(2,"pokemonName"),g.qZA()),2&n){var t=g.oxw();g.Q6J("@fadeIn",void 0),g.xp6(1),g.Oqu(g.lcZ(2,2,t.pokemonSpecie.name))}}function N(n,e){if(1&n&&(g.ynx(0),g.TgZ(1,"span",24),g._uU(2),g.ALo(3,"pokemonType"),g.qZA(),g.BQk()),2&n){var t=e.$implicit;g.xp6(1),g.Q6J("ngClass",t.name),g.xp6(1),g.Oqu(g.lcZ(3,2,t.name))}}function J(n,e){if(1&n&&(g.TgZ(0,"span"),g.YNc(1,N,4,4,"ng-container",17),g.qZA()),2&n){var t=g.oxw();g.Q6J("@fadeIn",void 0),g.xp6(1),g.Q6J("ngForOf",t.pokemonSpecie.types)}}function U(n,e){if(1&n&&(g.TgZ(0,"td",27),g._uU(1),g.ALo(2,"pokemonHeight"),g.qZA()),2&n){var t=g.oxw(2);g.Q6J("@fadeIn",void 0),g.xp6(1),g.hij(" ",g.lcZ(2,2,t.pokemonSpecie.height)," ")}}function Y(n,e){if(1&n&&(g.TgZ(0,"tr"),g.TgZ(1,"td",25),g._uU(2,"Height"),g.qZA(),g.YNc(3,U,3,4,"td",26),g.qZA()),2&n){var t=g.oxw();g.xp6(3),g.Q6J("ngIf",!t.busy)}}function j(n,e){if(1&n&&(g.TgZ(0,"td",27),g._uU(1),g.ALo(2,"pokemonWeight"),g.qZA()),2&n){var t=g.oxw(2);g.Q6J("@fadeIn",void 0),g.xp6(1),g.hij(" ",g.lcZ(2,2,t.pokemonSpecie.weight)," ")}}function L(n,e){if(1&n&&(g.TgZ(0,"tr"),g.TgZ(1,"td",25),g._uU(2,"Weight"),g.qZA(),g.YNc(3,j,3,4,"td",26),g.qZA()),2&n){var t=g.oxw();g.xp6(3),g.Q6J("ngIf",!t.busy)}}function B(n,e){if(1&n&&(g.TgZ(0,"td",27),g._uU(1),g.qZA()),2&n){var t=g.oxw().$implicit;g.Q6J("@fadeIn",void 0),g.xp6(1),g.hij(" ",t.value," ")}}function z(n,e){if(1&n&&(g.TgZ(0,"tr"),g.TgZ(1,"td",25),g._uU(2),g.ALo(3,"pokemonStat"),g.qZA(),g.YNc(4,B,2,2,"td",26),g.qZA()),2&n){var t=e.$implicit,o=g.oxw();g.xp6(2),g.Oqu(g.lcZ(3,2,t.name)),g.xp6(2),g.Q6J("ngIf",!o.busy)}}function F(n,e){1&n&&(g.TgZ(0,"span"),g._uU(1,"Loading... Don't turn off the power"),g.qZA())}function $(n,e){if(1&n&&(g.TgZ(0,"span"),g._uU(1),g.qZA()),2&n){var t=g.oxw();g.Q6J("@fadeIn",void 0),g.xp6(1),g.hij(" ",t.pokemonSpecie.genus," ")}}function H(n,e){if(1&n&&(g.ynx(0),g.TgZ(1,"h3",29),g._uU(2),g.ALo(3,"pokedexVersionName"),g.qZA(),g.BQk()),2&n){var t=e.$implicit;g.xp6(1),g.Q6J("ngClass",t),g.xp6(1),g.hij(" ",g.lcZ(3,2,t)," ")}}function R(n,e){if(1&n&&(g.ynx(0),g.YNc(1,H,4,4,"ng-container",17),g.TgZ(2,"p",28),g._uU(3),g.qZA(),g.BQk()),2&n){var t=e.$implicit;g.xp6(1),g.Q6J("ngForOf",t.versionNames),g.xp6(2),g.hij(" ",t.text," ")}}var V=function(n){return{"--hidden":n}},W=[{path:"",component:function(){var n=function(){function n(t,o){e(this,n),this.route=t,this.pokemonSpecieService=o,this.pokemon={},this.pokemonSpecie={},this.busy=!0,this.error=!1}return o(n,[{key:"ngOnInit",value:function(){var n,e=this;this.route.params.subscribe(function(t){var o=t.id;n=o?parseInt(o):0,e.pokemon.id=n,e.busy=!0,e.getPokemonSpecie(n)})}},{key:"getPokemonSpecie",value:function(n){var e=this;this.pokemonSpecieService.getPokemonSpecieByPokemonId(n).subscribe(function(n){e.pokemonSpecie=n||r},function(n){console.error(n),e.pokemonSpecie=r}).add(function(){e.busy=!1})}}]),n}();return n.\u0275fac=function(e){return new(e||n)(g.Y36(_.gz),g.Y36(C))},n.\u0275cmp=g.Xpm({type:n,selectors:[["app-pokemon-details"]],decls:42,vars:19,consts:[[1,"pokemon-details"],[1,"breadcrumb"],["routerLink","/"],[4,"ngIf"],[1,"pokemon-details__content"],[1,"artwork"],["size","large"],[1,"artwork__image-placeholder"],["width","250","height","250",3,"src","alt",4,"ngIf"],[1,"paginator"],[1,"paginator__button",3,"routerLink"],["size","small"],[1,"paginator__current-number"],[1,"details"],[1,"details__list","--visible"],["class","details__name",4,"ngIf"],[1,"stats"],[4,"ngFor","ngForOf"],[1,"more-details"],[1,"more-details__title"],[1,"more-details__content","--visible",3,"ngClass"],["routerLink","/",1,"button-theme","button-theme--black"],["width","250","height","250",3,"src","alt"],[1,"details__name"],[1,"details__type",3,"ngClass"],[1,"stats__name"],["class","stats__value",4,"ngIf"],[1,"stats__value"],[1,"more-details__flavor-text"],[1,"more-details__version-name",3,"ngClass"]],template:function(n,e){1&n&&(g.TgZ(0,"section",0),g.TgZ(1,"div",1),g.TgZ(2,"span"),g.TgZ(3,"a",2),g._uU(4,"Home"),g.qZA(),g._uU(5," / "),g.YNc(6,A,3,4,"span",3),g.qZA(),g.qZA(),g.TgZ(7,"div",4),g.TgZ(8,"div",5),g.TgZ(9,"app-dialog-box",6),g.TgZ(10,"div",7),g.YNc(11,T,1,3,"img",8),g.qZA(),g.TgZ(12,"div",9),g.TgZ(13,"a",10),g.YNc(14,S,2,0,"span",3),g.qZA(),g.TgZ(15,"app-dialog-box",11),g.TgZ(16,"div",12),g.YNc(17,Q,3,4,"span",3),g.qZA(),g.qZA(),g.TgZ(18,"a",10),g._uU(19,">"),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.TgZ(20,"div",13),g.TgZ(21,"app-dialog-box",6),g.TgZ(22,"ul",14),g.TgZ(23,"li"),g.YNc(24,I,3,4,"span",15),g._uU(25,"\xa0 "),g.qZA(),g.TgZ(26,"li"),g.YNc(27,J,2,2,"span",3),g._uU(28," \xa0 "),g.qZA(),g.qZA(),g.TgZ(29,"table",16),g.YNc(30,Y,4,1,"tr",3),g.YNc(31,L,4,1,"tr",3),g.YNc(32,z,5,4,"tr",17),g.qZA(),g.qZA(),g.qZA(),g.TgZ(33,"div",18),g.TgZ(34,"app-dialog-box",6),g.TgZ(35,"h2",19),g.YNc(36,F,2,0,"span",3),g.YNc(37,$,2,2,"span",3),g.qZA(),g.TgZ(38,"div",20),g.YNc(39,R,4,2,"ng-container",17),g.TgZ(40,"a",21),g._uU(41,"Go Back"),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA()),2&n&&(g.xp6(6),g.Q6J("ngIf",!e.busy),g.xp6(5),g.Q6J("ngIf",!e.busy),g.xp6(2),g.Udp("pointer-events",e.pokemonSpecie.id>=1?"auto":"none"),g.Q6J("routerLink","/pokemon/"+(e.pokemonSpecie.id-1)),g.xp6(1),g.Q6J("ngIf",e.pokemonSpecie.id-1>=1),g.xp6(3),g.Q6J("ngIf",!e.busy),g.xp6(1),g.Q6J("routerLink","/pokemon/"+(e.pokemonSpecie.id+1)),g.xp6(6),g.Q6J("ngIf",!e.busy),g.xp6(3),g.Q6J("ngIf",!e.busy),g.xp6(3),g.Q6J("ngIf",!!e.pokemonSpecie.height),g.xp6(1),g.Q6J("ngIf",!!e.pokemonSpecie.weight),g.xp6(1),g.Q6J("ngForOf",e.pokemonSpecie.stats),g.xp6(4),g.Q6J("ngIf",e.busy),g.xp6(1),g.Q6J("ngIf",!e.busy&&e.pokemonSpecie),g.xp6(1),g.Q6J("ngClass",g.VKq(17,V,e.busy)),g.xp6(1),g.Q6J("ngForOf",e.pokemonSpecie.flavorTexts))},directives:[_.yS,M.Q,f.O5,v.y,f.sg,f.mk],pipes:[h.p,y.o,x,Z,b,w,q],styles:['@import"https://fonts.googleapis.com/css2?family=Roboto&display=swap";@font-face{font-family:"pokemon-font";src:url(pokemon-font.827fac74b081a9471081.eot);src:url(pokemon-font.827fac74b081a9471081.eot?#iefix) format("embedded-opentype"),url(pokemon-font.2c6162341d5808452bd4.woff2) format("woff2"),url(pokemon-font.59e7be2a8b50c63b0862.woff) format("woff"),url(pokemon-font.aed34d09aa9153dc3e3b.ttf) format("truetype")}.pokemon-details[_ngcontent-%COMP%]{max-width:700px;margin:0 auto}.pokemon-details[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]{display:flex;align-items:center;height:50px}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]{justify-content:center;padding:0 0 2em;transition:.75s;display:grid;grid-template-rows:repeat(2,auto);grid-template-columns:1fr 1fr;grid-column-gap:1em;-moz-column-gap:1em;column-gap:1em;grid-row-gap:1em;row-gap:1em}@media only screen and (min-width: 768px) and (max-width: 991.98px){.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr);padding:2em 1em}}@media only screen and (max-width:767.98px){.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]{grid-template-rows:repeat(3,auto);grid-template-columns:1fr}}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .artwork[_ngcontent-%COMP%]{grid-row-start:1}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .artwork__image-placeholder[_ngcontent-%COMP%]{height:250px;width:250px;margin:0 auto}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .artwork[_ngcontent-%COMP%]   .paginator[_ngcontent-%COMP%]{padding:14px 0 0;line-height:1.1rem;display:flex;align-items:center;justify-content:space-evenly}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .artwork[_ngcontent-%COMP%]   .paginator__current-number[_ngcontent-%COMP%]{width:56px;height:23px;text-align:center}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .artwork[_ngcontent-%COMP%]   .paginator__button[_ngcontent-%COMP%]{text-decoration:none;color:#000;width:30px;height:30px;text-align:center;line-height:26px;transition:.25s}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .artwork[_ngcontent-%COMP%]   .paginator__button[_ngcontent-%COMP%]:hover{color:#ee1515}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .artwork[_ngcontent-%COMP%]   .paginator__button[_ngcontent-%COMP%]:last-of-type{grid-column-start:3;justify-self:flex-end}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]{grid-row-start:1;grid-row-end:2;display:flex;flex-direction:column}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .container-theme[_ngcontent-%COMP%]{flex:1}@media only screen and (max-width:767.98px){.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]{grid-row-start:initial;grid-row-end:initial}}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .details__list[_ngcontent-%COMP%]{list-style:none;padding-left:0;margin:0}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .details__name[_ngcontent-%COMP%]{text-transform:uppercase}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .details__type[_ngcontent-%COMP%]{text-transform:uppercase}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .details__type[_ngcontent-%COMP%] + .details__type[_ngcontent-%COMP%]{padding-left:16px}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .details__type.bug[_ngcontent-%COMP%]{color:#6d7815}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .details__type.dark[_ngcontent-%COMP%]{color:#49392f}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .details__type.dragon[_ngcontent-%COMP%]{color:#4924a1}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .details__type.electric[_ngcontent-%COMP%]{color:#a1871f}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .details__type.fairy[_ngcontent-%COMP%]{color:#9b6470}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .details__type.fighting[_ngcontent-%COMP%]{color:#7d1f1a}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .details__type.fire[_ngcontent-%COMP%]{color:#9c531f}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .details__type.flying[_ngcontent-%COMP%]{color:#6d5e9c}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .details__type.ghost[_ngcontent-%COMP%]{color:#493963}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .details__type.grass[_ngcontent-%COMP%]{color:#4e8234}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .details__type.ground[_ngcontent-%COMP%]{color:#927d44}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .details__type.ice[_ngcontent-%COMP%]{color:#638d8d}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .details__type.normal[_ngcontent-%COMP%]{color:#6d6d4e}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .details__type.poison[_ngcontent-%COMP%]{color:#682a68}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .details__type.psychic[_ngcontent-%COMP%]{color:#a13959}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .details__type.rock[_ngcontent-%COMP%]{color:#786824}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .details__type.steel[_ngcontent-%COMP%]{color:#787887}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .details__type.water[_ngcontent-%COMP%]{color:#445e9c}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .details__type.unknown[_ngcontent-%COMP%], .pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .details__type.bird[_ngcontent-%COMP%]{color:#44685e}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]{margin-top:8px;width:100%}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .stats__name[_ngcontent-%COMP%]{text-transform:uppercase}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .stats__value[_ngcontent-%COMP%]{text-align:center}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]{grid-column-start:1;grid-column-end:3}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details__title[_ngcontent-%COMP%]{margin-top:0}@media only screen and (max-width:767.98px){.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]{grid-column-end:2}}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details__version-name[_ngcontent-%COMP%]{text-transform:uppercase;margin-bottom:0}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details__version-name[_ngcontent-%COMP%] + .more-details__version-name[_ngcontent-%COMP%]{margin-top:0}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details__flavor-text[_ngcontent-%COMP%]{margin:0 0 1.5em;font-family:"Roboto",sans-serif}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .red[_ngcontent-%COMP%]{color:#a60b0b}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .green[_ngcontent-%COMP%]{color:#0b7a0b}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .blue[_ngcontent-%COMP%]{color:#0b0ba6}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .yellow[_ngcontent-%COMP%]{color:#a68c21}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .gold[_ngcontent-%COMP%]{color:#8e6b15}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .silver[_ngcontent-%COMP%]{color:#7d7d7d}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .crystal[_ngcontent-%COMP%]{color:#338da6}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .ruby[_ngcontent-%COMP%]{color:#680000}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .sapphire[_ngcontent-%COMP%]{color:#000068}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .emerald[_ngcontent-%COMP%]{color:#006800}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .firered[_ngcontent-%COMP%]{color:#a64b19}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .leafgreen[_ngcontent-%COMP%]{color:#009000}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .diamond[_ngcontent-%COMP%]{color:#6f6fa6}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .pearl[_ngcontent-%COMP%]{color:#a66f6f}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .platinum[_ngcontent-%COMP%]{color:#646464}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .heartgold[_ngcontent-%COMP%]{color:#766700}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .soulsilver[_ngcontent-%COMP%]{color:#7d7d92}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .black[_ngcontent-%COMP%]{color:#2c2c2c}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .white[_ngcontent-%COMP%]{color:#929292}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .black-2[_ngcontent-%COMP%]{color:#2b3134}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .white-2[_ngcontent-%COMP%]{color:#948687}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .x[_ngcontent-%COMP%]{color:#013d6c}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .y[_ngcontent-%COMP%]{color:#981128}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .omega-ruby[_ngcontent-%COMP%]{color:#6f1a0c}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .alpha-sapphire[_ngcontent-%COMP%]{color:#194166}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .sun[_ngcontent-%COMP%]{color:#9d5e1c}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .moon[_ngcontent-%COMP%]{color:#376483}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .ultra-sun[_ngcontent-%COMP%]{color:#983b1c}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .ultra-moon[_ngcontent-%COMP%]{color:#164776}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .lets-go-pikachu[_ngcontent-%COMP%]{color:#9f8e19}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .lets-go-eevee[_ngcontent-%COMP%]{color:#8a5f31}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .sword[_ngcontent-%COMP%]{color:#006998}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .shield[_ngcontent-%COMP%]{color:#7c0033}'],data:{animation:[l]}}),n}()}],D=function(){var n=o(function n(){e(this,n)});return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=g.oAB({type:n}),n.\u0275inj=g.cJS({imports:[[_.Bz.forChild(W),s.m]]}),n}()}}])}();