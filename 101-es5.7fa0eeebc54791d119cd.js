!function(){var e;function n(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"==typeof e)return o(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return o(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,n){(null==n||n>e.length)&&(n=e.length);for(var o=0,t=new Array(n);o<n;o++)t[o]=e[o];return t}function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function i(e,n){for(var o=0;o<n.length;o++){var t=n[o];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function r(e,n,o){return n&&i(e.prototype,n),o&&i(e,o),e}(self.webpackChunkpokedex=self.webpackChunkpokedex||[]).push([[101],{6101:function(o,i,a){"use strict";a.r(i),a.d(i,{HomeModule:function(){return G}});var c,s,p=a(5050),g=a(4466),m=a(3190),u=a(6738),l=a(639),d=a(9081),f=a(2389),k=a(8583),h=a(9123),y=function(){var e=function(){function e(n){t(this,e),this.viewportScroller=n}return r(e,[{key:"ngOnInit",value:function(){}},{key:"scrollToContent",value:function(){this.viewportScroller.scrollToAnchor("home__content")}}]),e}();return e.\u0275fac=function(n){return new(n||e)(l.Y36(k.EM))},e.\u0275cmp=l.Xpm({type:e,selectors:[["app-home-header"]],decls:11,vars:0,consts:[[1,"header"],[1,"header__title-container"],["size","large"],[1,"header__title"],[1,"header__subtitle-container"],["src","./assets/images/red-walking-old.gif","alt","","width","32","height","32"],["src","./assets/images/red-walking-new.gif","alt","","width","32","height","42"],["src","./assets/images/arrow-down.png","alt","","width","28","height","28",1,"header__arrow-bottom",3,"click"]],template:function(e,n){1&e&&(l.TgZ(0,"header",0),l.TgZ(1,"div",1),l.TgZ(2,"app-dialog-box",2),l.TgZ(3,"h1",3),l._uU(4,"Pok\xe9dex"),l.qZA(),l.qZA(),l.qZA(),l.TgZ(5,"div",4),l._UZ(6,"img",5),l.TgZ(7,"h2"),l._uU(8,"Since 1996 to 2005"),l.qZA(),l._UZ(9,"img",6),l.qZA(),l.TgZ(10,"img",7),l.NdJ("click",function(){return n.scrollToContent()}),l.qZA(),l.qZA())},directives:[h.y],styles:[".header[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;align-content:space-around;justify-content:center;flex-direction:column;min-height:calc(100vh - 50px);background-color:#fff}.header__title-container[_ngcontent-%COMP%]{background-color:#fff;padding:4px}.header__title[_ngcontent-%COMP%]{margin:0 0 2px;text-transform:uppercase;line-height:1.2}.header__subtitle-container[_ngcontent-%COMP%]{display:flex;align-items:center;margin-bottom:4em}.header__subtitle-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin:0 1em}.header__arrow-bottom[_ngcontent-%COMP%]{cursor:pointer;position:absolute;bottom:24px}"]}),e}(),v=a(9976),_=a(3095).ZP(e||(c=["\n  {\n    pokemon_v2_type(order_by: { name: asc }) {\n      id\n      name\n    }\n  }\n"],s||(s=c.slice(0)),e=Object.freeze(Object.defineProperties(c,{raw:{value:Object.freeze(s)}})))),x=a(5917),P=a(8002),M=a(4697),O=function(){var e=function(){function e(n){t(this,e),this.apollo=n,this.fetchingPokemonTypes=!1;var o=localStorage.getItem("pokemon-types");this.pokemonTypes=o?JSON.parse(o):[]}return r(e,[{key:"getPokemonTypes",value:function(){var e=this;return this.pokemonTypes.length?(0,x.of)(this.pokemonTypes):(this.fetchingPokemonTypes||(this.fetchingPokemonTypes=!0,this.pokemonTypes$=this.apollo.query({query:_}).pipe((0,P.U)(function(n){var o=n.data;return e.pokemonTypes=o.pokemon_v2_type,console.log(e.pokemonTypes),localStorage.setItem("pokemons-types",JSON.stringify(e.pokemonTypes)),e.fetchingPokemonTypes=!1,e.pokemonTypes}))),this.pokemonTypes$)}},{key:"getPokemonType",value:function(e){return this.pokemonTypes.find(function(n){return n.name===e})||this.pokemonTypes[0]}}]),e}();return e.\u0275fac=function(n){return new(n||e)(l.LFG(M._M))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e}(),C=a(665),Z=a(9577);function b(e,n){if(1&e&&l._UZ(0,"fa-icon",18),2&e){var o=l.oxw();l.Q6J("icon",o.iconTimes)}}function T(e,n){if(1&e&&l._UZ(0,"fa-icon",18),2&e){var o=l.oxw();l.Q6J("icon",o.iconSearch)}}function w(e,n){if(1&e&&(l.TgZ(0,"option",19),l._uU(1),l.qZA()),2&e){var o=n.$implicit;l.Q6J("value",o.id),l.xp6(1),l.hij(" ",o.name," ")}}function A(e,n){if(1&e&&(l.TgZ(0,"option",19),l._uU(1),l.qZA()),2&e){var o=n.$implicit;l.Q6J("value",o.id),l.xp6(1),l.hij(" ",o.name," ")}}var S=function(e){return{closed:e}},q=function(){var e=function(){function e(n,o,i){var r=this;t(this,e),this.pokedexService=n,this.pokemonTypeService=o,this.router=i,this.iconSearch=v.wn1,this.iconTimes=v.NBC,this.pokemonSortByName=u.Z.NAME,this.pokemonSortByNumber=u.Z.NUMBER,this.showNav=!0,this.pokemonTypes=[],this.pokedexVersions=this.pokedexService.getPokedexVersions(),this.pokemonTypeService.getPokemonTypes().subscribe(function(e){r.pokemonTypes=e})}return r(e,[{key:"pokedex",set:function(e){this.currentVersionId=e.version.id,this.currentPokemonName=e.pokemonName,this.currentPokemonTypeId=e.pokemonTypeId,this.currentPokemonSortBy=e.pokemonSortBy}},{key:"ngOnInit",value:function(){}},{key:"changePokemonName",value:function(e){var n=e?e.toLowerCase().trim():"";this.pokedexService.setPokemonName(n),this.updateQueryParams({pokemon:n||null})}},{key:"changePokemonSortBy",value:function(e){this.pokedexService.setPokemonSortBy(e),this.updateQueryParams({sortBy:e})}},{key:"changePokemonType",value:function(e){this.pokedexService.setPokemonTypeId(parseInt(e)),this.updateQueryParams({type:e})}},{key:"changeVersion",value:function(e){this.pokedexService.setPokedexVersion(e),this.updateQueryParams({version:e})}},{key:"updateQueryParams",value:function(e){this.router.navigate([],{queryParams:e,queryParamsHandling:"merge"})}}]),e}();return e.\u0275fac=function(n){return new(n||e)(l.Y36(d.z),l.Y36(O),l.Y36(p.F0))},e.\u0275cmp=l.Xpm({type:e,selectors:[["app-sidenav"]],inputs:{pokedex:"pokedex"},decls:31,vars:12,consts:[[1,"sidenav",3,"ngClass"],["size","small"],[1,"filter"],[1,"toggle-nav-btn",3,"click"],[3,"icon",4,"ngIf"],[1,"form-group-theme"],["for","field-version",1,"label"],["name","field-version","id","field-version",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["for","field-name",1,"label"],["id","field-name","type","text","maxlength","10",3,"ngModel","ngModelChange"],["for","field-type",1,"label"],["name","field-type","id","field-type",3,"ngModel","ngModelChange"],["value","0"],[1,"label"],[1,"radio-button-theme"],["type","radio","id","field-sort-by-number","name","version","value","number",3,"ngModel","ngModelChange","change"],["type","radio","id","field-sort-by-name","name","version","value","name",3,"ngModel","ngModelChange","change"],[3,"icon"],[3,"value"]],template:function(e,n){1&e&&(l.TgZ(0,"aside",0),l.TgZ(1,"app-dialog-box",1),l.TgZ(2,"div",2),l.TgZ(3,"button",3),l.NdJ("click",function(){return n.showNav=!n.showNav}),l.YNc(4,b,1,1,"fa-icon",4),l.YNc(5,T,1,1,"fa-icon",4),l.qZA(),l.TgZ(6,"div",5),l.TgZ(7,"span",6),l._uU(8,"Version:"),l.qZA(),l.TgZ(9,"select",7),l.NdJ("ngModelChange",function(e){return n.changeVersion(e)}),l.YNc(10,w,2,2,"option",8),l.qZA(),l.qZA(),l.TgZ(11,"div",5),l.TgZ(12,"label",9),l._uU(13,"PKMN Name:"),l.qZA(),l.TgZ(14,"input",10),l.NdJ("ngModelChange",function(e){return n.changePokemonName(e)}),l.qZA(),l.qZA(),l.TgZ(15,"div",5),l.TgZ(16,"label",11),l._uU(17,"PKMN Type:"),l.qZA(),l.TgZ(18,"select",12),l.NdJ("ngModelChange",function(e){return n.changePokemonType(e)}),l.TgZ(19,"option",13),l._uU(20,"All"),l.qZA(),l.YNc(21,A,2,2,"option",8),l.qZA(),l.qZA(),l.TgZ(22,"div",5),l.TgZ(23,"span",14),l._uU(24,"Order by:"),l.qZA(),l.TgZ(25,"label",15),l.TgZ(26,"input",16),l.NdJ("ngModelChange",function(e){return n.currentPokemonSortBy=e})("change",function(){return n.changePokemonSortBy(n.pokemonSortByNumber)}),l.qZA(),l._uU(27,"Number "),l.qZA(),l.TgZ(28,"label",15),l.TgZ(29,"input",17),l.NdJ("ngModelChange",function(e){return n.currentPokemonSortBy=e})("change",function(){return n.changePokemonSortBy(n.pokemonSortByName)}),l.qZA(),l._uU(30,"A - Z "),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA()),2&e&&(l.Q6J("ngClass",l.VKq(10,S,!n.showNav)),l.xp6(4),l.Q6J("ngIf",n.showNav),l.xp6(1),l.Q6J("ngIf",!n.showNav),l.xp6(4),l.Q6J("ngModel",n.currentVersionId),l.xp6(1),l.Q6J("ngForOf",n.pokedexVersions),l.xp6(4),l.Q6J("ngModel",n.currentPokemonName),l.xp6(4),l.Q6J("ngModel",n.currentPokemonTypeId),l.xp6(3),l.Q6J("ngForOf",n.pokemonTypes),l.xp6(5),l.Q6J("ngModel",n.currentPokemonSortBy),l.xp6(3),l.Q6J("ngModel",n.currentPokemonSortBy))},directives:[k.mk,h.y,k.O5,C.EJ,C.JJ,C.On,k.sg,C.Fj,C.nD,C.YN,C.Kr,C._,Z.BN],styles:[".sidenav[_ngcontent-%COMP%]{overflow:hidden;max-width:100%;position:sticky;top:75px}@media only screen and (max-width:767.98px){.sidenav[_ngcontent-%COMP%]{width:auto}}.sidenav[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]{padding:14px;white-space:nowrap;display:grid;grid-template-rows:repeat(2,auto);grid-template-columns:auto;max-height:500px;width:220px;transition:max-height .75s,width .75s;position:relative}@media only screen and (max-width:767.98px){.sidenav[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]{margin:0 auto;width:100%}}.sidenav[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .toggle-nav-btn[_ngcontent-%COMP%]{z-index:1;cursor:pointer;background-color:transparent;border:none;position:absolute;right:3px;top:3px;transition:color .25s,all .75s}.sidenav[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .toggle-nav-btn[_ngcontent-%COMP%]:hover{color:#ee1515}.sidenav[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .form-group-theme[_ngcontent-%COMP%]{opacity:1;transition:opacity .75s}.sidenav.closed[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]{max-height:42px;width:42px}.sidenav.closed[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .toggle-nav-btn[_ngcontent-%COMP%]{background-color:transparent;font-size:1.5rem;line-height:0;padding:0;position:absolute;right:9px;top:9px}.sidenav.closed[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .form-group-theme[_ngcontent-%COMP%]{opacity:0}"]}),e}(),N=function(){var e=function e(n){var o=n.nativeElement;t(this,e),"loading"in HTMLImageElement.prototype&&o.setAttribute("loading","lazy")};return e.\u0275fac=function(n){return new(n||e)(l.Y36(l.SBq))},e.\u0275dir=l.lG2({type:e,selectors:[["","appLazyImg",""]]}),e}(),I=function(){var e=function(){function e(){t(this,e)}return r(e,[{key:"transform",value:function(e){var n=e?e.toString():"No";return n="".concat(n," result"),1!==e&&(n="".concat(n,"s")),n}}]),e}();return e.\u0275fac=function(n){return new(n||e)},e.\u0275pipe=l.Yjl({name:"searchResultsMessage",type:e,pure:!0}),e}(),J=a(6515),Q=a(9651),U=function(){var e=function(){function e(){t(this,e)}return r(e,[{key:"transform",value:function(e,n){var o=n.sprites,t=o.height,i=o.width,r=o.url,a=parseFloat(((e-1)/10).toString()).toFixed(1);return{backgroundImage:"url(".concat(r,")"),backgroundPosition:"-".concat(parseInt(a.substring(a.toString().length-1),10)*i,"px -").concat(Math.floor(parseFloat(a))*t,"px"),height:"".concat(t,"px"),width:"".concat(i,"px")}}}]),e}();return e.\u0275fac=function(n){return new(n||e)},e.\u0275pipe=l.Yjl({name:"pokemonSpritePosition",type:e,pure:!0}),e}(),B=function(){var e=function(){function e(){t(this,e)}return r(e,[{key:"transform",value:function(e,n){return"".concat(n.sprites.url,"/").concat(e,".gif")}}]),e}();return e.\u0275fac=function(n){return new(n||e)},e.\u0275pipe=l.Yjl({name:"pokemonImageUrl",type:e,pure:!0}),e}();function Y(e,n){1&e&&(l.ynx(0),l.TgZ(1,"div",3),l._uU(2,"Loading... Don't turn off the power"),l.qZA(),l.BQk())}function j(e,n){if(1&e&&(l._UZ(0,"div",13),l.ALo(1,"pokemonSpritePosition")),2&e){var o=l.oxw().$implicit,t=l.oxw(3);l.Q6J("ngStyle",l.xi3(1,1,o.id,t._pokedex.version))}}function z(e,n){if(1&e&&(l._UZ(0,"img",16),l.ALo(1,"pokemonImageUrl")),2&e){var o=l.oxw(2).$implicit,t=l.oxw(3);l.Q6J("src",l.xi3(1,2,o.id,t._pokedex.version),l.LSH)("alt",o.name)}}var L=function(e,n){return{"width.px":e,"height.px":n}};function F(e,n){if(1&e&&(l.TgZ(0,"div",14),l.YNc(1,z,2,5,"img",15),l.qZA()),2&e){var o=l.oxw(4);l.Q6J("ngStyle",l.WLB(2,L,o._pokedex.version.sprites.width,o._pokedex.version.sprites.height)),l.xp6(1),l.Q6J("ngIf",o._pokedex.version.sprites.animated)}}function E(e,n){if(1&e&&(l.TgZ(0,"div",6),l.TgZ(1,"app-dialog-box",7),l.TgZ(2,"a",8),l.YNc(3,j,2,4,"div",9),l.YNc(4,F,2,5,"div",10),l.TgZ(5,"span",11),l._uU(6),l.ALo(7,"pokemonNumber"),l.qZA(),l.TgZ(8,"span",12),l._uU(9),l.ALo(10,"pokemonName"),l.qZA(),l.qZA(),l.qZA(),l.qZA()),2&e){var o=n.$implicit,t=l.oxw(3);l.xp6(1),l.Q6J("hoverable",!0),l.xp6(1),l.MGl("routerLink","pokemon/",o.id,""),l.xp6(1),l.Q6J("ngIf",!t._pokedex.version.sprites.animated),l.xp6(1),l.Q6J("ngIf",t._pokedex.version.sprites.animated),l.xp6(2),l.Oqu(l.lcZ(7,6,o.id)),l.xp6(3),l.Oqu(l.lcZ(10,8,o.name))}}function V(e,n){if(1&e&&(l.ynx(0),l.TgZ(1,"div",3),l._uU(2),l.ALo(3,"searchResultsMessage"),l.qZA(),l.TgZ(4,"div",4),l.YNc(5,E,11,10,"div",5),l.qZA(),l.BQk()),2&e){var o=l.oxw(2);l.xp6(2),l.Oqu(l.lcZ(3,2,o._pokemons.length)),l.xp6(3),l.Q6J("ngForOf",o._pokemons)}}function $(e,n){if(1&e&&(l.TgZ(0,"div",1),l.YNc(1,Y,3,0,"ng-container",2),l.YNc(2,V,6,4,"ng-container",2),l.qZA()),2&e){var o=l.oxw();l.xp6(1),l.Q6J("ngIf",o._busy),l.xp6(1),l.Q6J("ngIf",!o._busy)}}var H,K,R=function(){var e=function(){function e(){t(this,e),this._busy=!0,this._pokemons=[],this._pokedex={}}return r(e,[{key:"pokedex",set:function(e){this._pokedex=e}},{key:"pokemons",set:function(e){this._pokemons=e}},{key:"busy",set:function(e){this._busy=e}},{key:"ngOnInit",value:function(){}}]),e}();return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=l.Xpm({type:e,selectors:[["app-pokemon-list"]],inputs:{pokedex:"pokedex",pokemons:"pokemons",busy:"busy"},decls:1,vars:1,consts:[["class","pokemon-list",4,"ngIf"],[1,"pokemon-list"],[4,"ngIf"],[1,"message"],[1,"pokemons-container"],["class","pokemon-card",4,"ngFor","ngForOf"],[1,"pokemon-card"],["size","small",3,"hoverable"],[1,"pokemon-info",3,"routerLink"],["class","image",3,"ngStyle",4,"ngIf"],["class","image-animated",3,"ngStyle",4,"ngIf"],[1,"number"],[1,"name"],[1,"image",3,"ngStyle"],[1,"image-animated",3,"ngStyle"],["appLazyImg","",3,"src","alt",4,"ngIf"],["appLazyImg","",3,"src","alt"]],template:function(e,n){1&e&&l.YNc(0,$,3,2,"div",0),2&e&&l.Q6J("ngIf",n._pokedex.version)},directives:[k.O5,k.sg,h.y,p.yS,k.PC,N],pipes:[I,J.p,Q.o,U,B],styles:[".pokemon-list[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{margin:0 20px}@media only screen and (max-width:991.98px){.pokemon-list[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{text-align:center}}.pokemon-list[_ngcontent-%COMP%]   .pokemons-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;position:relative;justify-content:flex-start;margin:0 14px}@media only screen and (max-width:991.98px){.pokemon-list[_ngcontent-%COMP%]   .pokemons-container[_ngcontent-%COMP%]{justify-content:center}}.pokemon-list[_ngcontent-%COMP%]   .pokemons-container[_ngcontent-%COMP%]   .pokemon-card[_ngcontent-%COMP%]{padding:2px}.pokemon-list[_ngcontent-%COMP%]   .pokemons-container[_ngcontent-%COMP%]   .pokemon-card[_ngcontent-%COMP%]   .pokemon-info[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:flex-end;align-items:center;color:#000;text-decoration:none;cursor:pointer;width:160px;padding:4px;margin:4px;height:500px;transition:max-height .25s;max-height:130px}.pokemon-list[_ngcontent-%COMP%]   .pokemons-container[_ngcontent-%COMP%]   .pokemon-card[_ngcontent-%COMP%]   .pokemon-info[_ngcontent-%COMP%]:focus, .pokemon-list[_ngcontent-%COMP%]   .pokemons-container[_ngcontent-%COMP%]   .pokemon-card[_ngcontent-%COMP%]   .pokemon-info[_ngcontent-%COMP%]:hover{color:#ee1515}.pokemon-list[_ngcontent-%COMP%]   .pokemons-container[_ngcontent-%COMP%]   .pokemon-card[_ngcontent-%COMP%]   .pokemon-info[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{background-repeat:no-repeat;image-rendering:-moz-crisp-edges;image-rendering:pixelated}.pokemon-list[_ngcontent-%COMP%]   .pokemons-container[_ngcontent-%COMP%]   .pokemon-card[_ngcontent-%COMP%]   .pokemon-info[_ngcontent-%COMP%]   .image-animated[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.pokemon-list[_ngcontent-%COMP%]   .pokemons-container[_ngcontent-%COMP%]   .pokemon-card[_ngcontent-%COMP%]   .pokemon-info[_ngcontent-%COMP%]   .image-animated[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:relative}.pokemon-list[_ngcontent-%COMP%]   .pokemons-container[_ngcontent-%COMP%]   .pokemon-card[_ngcontent-%COMP%]   .pokemon-info[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]{font-size:16px}.pokemon-list[_ngcontent-%COMP%]   .pokemons-container[_ngcontent-%COMP%]   .pokemon-card[_ngcontent-%COMP%]   .pokemon-info[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{text-transform:uppercase;font-size:14px}"]}),e}(),X=[{path:"",component:(H=function(){function e(n,o){var i=this;t(this,e),this.pokedexService=n,this.pokemonService=o,this.busy=!1,this.pokedex={},this.pokemons=[],this.pokemonTypes=[],this.busy=!0,this.pokedexService.getPokedex().pipe((0,m.w)(function(e){return i.pokedex=e,i.pokemonService.getPokemons(e.version.limit)})).subscribe(function(e){i.updatePokemonList(e,i.pokedex),i.busy=!1})}return r(e,[{key:"ngOnInit",value:function(){}},{key:"updatePokemonList",value:function(e,o){var t=o.pokemonName,i=o.pokemonTypeId,r=o.pokemonSortBy,a=n(e);if(t){var c=new RegExp(t,"g");a=a.filter(function(e){return c.test(e.name)})}i&&(a=a.filter(function(e){var n;return null===(n=e.pokemon_v2_pokemontypes)||void 0===n?void 0:n.some(function(e){return e.pokemon_v2_type.id===i})})),r===u.Z.NAME&&a.sort(function(e,n){return e.name>n.name?1:-1}),this.pokemons=a}}]),e}(),H.\u0275fac=function(e){return new(e||H)(l.Y36(d.z),l.Y36(f.f))},H.\u0275cmp=l.Xpm({type:H,selectors:[["app-home"]],decls:5,vars:4,consts:[[1,"home"],["id","home__content",1,"home__content"],[3,"pokedex"],[3,"busy","pokedex","pokemons"]],template:function(e,n){1&e&&(l.TgZ(0,"main",0),l._UZ(1,"app-home-header"),l.TgZ(2,"div",1),l._UZ(3,"app-sidenav",2),l._UZ(4,"app-pokemon-list",3),l.qZA(),l.qZA()),2&e&&(l.xp6(3),l.Q6J("pokedex",n.pokedex),l.xp6(1),l.Q6J("busy",n.busy)("pokedex",n.pokedex)("pokemons",n.pokemons))},directives:[y,q,R],styles:[".home__content[_ngcontent-%COMP%]{display:grid;grid-template-columns:-webkit-min-content 1fr;grid-template-columns:min-content 1fr;min-height:calc(100vh - 125px);max-width:1366px;margin:0 auto;padding:4em}@media only screen and (max-width:767.98px){.home__content[_ngcontent-%COMP%]{grid-template-columns:1fr;grid-template-rows:repeat(2,auto);justify-content:center;padding:4em 1em}}"]}),H)}],G=((K=function e(){t(this,e)}).\u0275fac=function(e){return new(e||K)},K.\u0275mod=l.oAB({type:K}),K.\u0275inj=l.cJS({imports:[[p.Bz.forChild(X),g.m]]}),K)}}])}();