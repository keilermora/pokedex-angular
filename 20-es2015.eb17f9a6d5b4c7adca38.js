"use strict";(self.webpackChunkpokedex=self.webpackChunkpokedex||[]).push([[20],{4020:function(n,e,t){t.r(e),t.d(e,{PokemonDetailsModule:function(){return H}});var o=t(5050),c=t(4466);const a={id:0,name:"MissingNo.",genus:"Pok\xe9mon ???",sprite:"./assets/images/missingno.png",height:10,weight:15983,types:[{name:"bird"},{name:"normal"}],stats:[{name:"hp",value:33},{name:"attack",value:136},{name:"defense",value:0},{name:"special-attack",value:6},{name:"special-defense",value:6},{name:"speed",value:29}],flavorTexts:[{versionNames:["green"],text:"\u3051\u3064\u3070\u3093"},{versionNames:["red"],text:"???"},{versionNames:["blue"],text:"\u30b3\u30e1\u30f3\u30c8 \u3055\u304f\u305b\u3044\u3061\u3085\u3046"},{versionNames:["yellow"],text:"..."}]};var i=t(7238),s=(0,i.X$)("fadeIn",[(0,i.eR)(":enter",[(0,i.oB)({opacity:0}),(0,i.jt)(250,(0,i.oB)({opacity:1}))])]),_=t(639),p=t(8002),l=n=>{const{id:e,name:t,pokemon_v2_pokemonspeciesflavortexts:o,pokemon_v2_pokemonspeciesnames:c,pokemon_v2_pokemons:a}=n;let i=[];return o.forEach(n=>{const e=i.find(e=>e.text===n.flavor_text.replace(/\f/g," "));e?e.versionNames.push(n.pokemon_v2_version.name):i.push({text:n.flavor_text.replace(/\f/g," "),versionNames:[n.pokemon_v2_version.name]})}),{id:e,name:t,genus:c[0].genus,weight:a[0].weight,height:a[0].height,sprite:`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${e.toString().padStart(3,"0")}.png`,flavorTexts:i,types:a[0].pokemon_v2_pokemontypes.map(({pokemon_v2_type:n})=>({name:n.name})),stats:a[0].pokemon_v2_pokemonstats.map(({base_stat:n,pokemon_v2_stat:e})=>({name:e.name,value:n}))}},r=t(2340),g=t(7984);const m=n=>g.Ps`
    query {
      pokemon_v2_pokemonspecies(where: {id: {_eq: ${n}}}) {
        id
        name
        pokemon_v2_pokemonspeciesnames(where: {language_id: {_eq: ${r.N.languageId}}}) {
          genus
        }
        pokemon_v2_pokemonspeciesflavortexts(where: {language_id: {_eq: ${r.N.languageId}}}) {
          pokemon_v2_version {
            name
          }
          flavor_text
        }
        pokemon_v2_pokemons {
          weight
          height
          pokemon_v2_pokemonsprites {
            sprites
          }
          pokemon_v2_pokemontypes {
            pokemon_v2_type {
              name
            }
          }
          pokemon_v2_pokemonstats {
            pokemon_v2_stat {
              name
            }
            base_stat
          }
        }
      }
    }
  `;var d=t(8890);let k=(()=>{class n{constructor(n){this.apollo=n}getPokemonSpecieByPokemonId(n){return this.apollo.query({query:m(n)}).pipe((0,p.U)(({data:n})=>n.pokemon_v2_pokemonspecies),(0,p.U)(n=>n.map(l)),(0,p.U)(n=>n[0]))}}return n.\u0275fac=function(e){return new(e||n)(_.LFG(d._M))},n.\u0275prov=_.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var O=t(9480),C=t(8583),P=t(9123),M=t(6515),u=t(9651);let f=(()=>{class n{transform(n){if("en"===r.N.language)return n;switch(n){case"bird":return"p\xe1jaro";case"bug":return"bicho";case"dark":return"siniestro";case"dragon":return n;case"electric":return"electrico";case"fairy":return"hada";case"fighting":return"luchador";case"fire":return"fuego";case"flying":return"volador";case"ghost":return"fantasma";case"grass":return"hierba";case"ground":return"tierra";case"ice":return"hielo";case"normal":return n;case"poison":return"veneno";case"psychic":return"ps\xedquico";case"rock":return"roca";case"steel":return"acero";case"water":return"agua";default:return"desconocido"}}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275pipe=_.Yjl({name:"pokemonType",type:n,pure:!0}),n})(),h=(()=>{class n{transform(n){return n/10+"m"}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275pipe=_.Yjl({name:"pokemonHeight",type:n,pure:!0}),n})(),x=(()=>{class n{transform(n){return n/10+"kg"}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275pipe=_.Yjl({name:"pokemonWeight",type:n,pure:!0}),n})(),y=(()=>{class n{transform(n){if("en"===r.N.language)switch(n){case"special-attack":return"spcl. atk.";case"special-defense":return"spcl. def.";default:return n}else switch(n){case"hp":return"ps";case"attack":return"ataque";case"defense":return"defensa";case"special-attack":return"at. esp.";case"special-defense":return"def. esp.";case"speed":return"velocidad";default:return"desconocido"}}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275pipe=_.Yjl({name:"pokemonStat",type:n,pure:!0}),n})(),Z=(()=>{class n{transform(n){return n.replace(/-/g," ").replace(/lets/g,"let's")}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275pipe=_.Yjl({name:"pokedexVersionName",type:n,pure:!0}),n})();function v(n,e){if(1&n&&(_.TgZ(0,"span"),_._uU(1),_.ALo(2,"pokemonNumber"),_.qZA()),2&n){const n=_.oxw();_.Q6J("@fadeIn",void 0),_.xp6(1),_.Oqu(_.lcZ(2,2,n.pokemonSpecie.id))}}function b(n,e){if(1&n&&_._UZ(0,"img",22),2&n){const n=_.oxw();_.Q6J("@fadeIn",void 0)("src",n.pokemonSpecie.sprite,_.LSH)("alt",n.pokemonSpecie.name)}}function w(n,e){1&n&&(_.TgZ(0,"span"),_._uU(1,"<"),_.qZA())}function q(n,e){if(1&n&&(_.TgZ(0,"span"),_._uU(1),_.ALo(2,"pokemonNumber"),_.qZA()),2&n){const n=_.oxw();_.Q6J("@fadeIn",void 0),_.xp6(1),_.hij(" ",_.lcZ(2,2,n.pokemonSpecie.id)," ")}}function A(n,e){if(1&n&&(_.TgZ(0,"span",23),_._uU(1),_.ALo(2,"pokemonName"),_.qZA()),2&n){const n=_.oxw();_.Q6J("@fadeIn",void 0),_.xp6(1),_.Oqu(_.lcZ(2,2,n.pokemonSpecie.name))}}function T(n,e){if(1&n&&(_.ynx(0),_.TgZ(1,"span",24),_._uU(2),_.ALo(3,"pokemonType"),_.qZA(),_.BQk()),2&n){const n=e.$implicit;_.xp6(1),_.Q6J("ngClass",n.name),_.xp6(1),_.Oqu(_.lcZ(3,2,n.name))}}function S(n,e){if(1&n&&(_.TgZ(0,"span"),_.YNc(1,T,4,4,"ng-container",17),_.qZA()),2&n){const n=_.oxw();_.Q6J("@fadeIn",void 0),_.xp6(1),_.Q6J("ngForOf",n.pokemonSpecie.types)}}function Q(n,e){if(1&n&&(_.TgZ(0,"td",27),_._uU(1),_.ALo(2,"pokemonHeight"),_.qZA()),2&n){const n=_.oxw(2);_.Q6J("@fadeIn",void 0),_.xp6(1),_.hij(" ",_.lcZ(2,2,n.pokemonSpecie.height)," ")}}function I(n,e){if(1&n&&(_.TgZ(0,"tr"),_.TgZ(1,"td",25),_._uU(2,"Height"),_.qZA(),_.YNc(3,Q,3,4,"td",26),_.qZA()),2&n){const n=_.oxw();_.xp6(3),_.Q6J("ngIf",!n.busy)}}function N(n,e){if(1&n&&(_.TgZ(0,"td",27),_._uU(1),_.ALo(2,"pokemonWeight"),_.qZA()),2&n){const n=_.oxw(2);_.Q6J("@fadeIn",void 0),_.xp6(1),_.hij(" ",_.lcZ(2,2,n.pokemonSpecie.weight)," ")}}function J(n,e){if(1&n&&(_.TgZ(0,"tr"),_.TgZ(1,"td",25),_._uU(2,"Weight"),_.qZA(),_.YNc(3,N,3,4,"td",26),_.qZA()),2&n){const n=_.oxw();_.xp6(3),_.Q6J("ngIf",!n.busy)}}function U(n,e){if(1&n&&(_.TgZ(0,"td",27),_._uU(1),_.qZA()),2&n){const n=_.oxw().$implicit;_.Q6J("@fadeIn",void 0),_.xp6(1),_.hij(" ",n.value," ")}}function Y(n,e){if(1&n&&(_.TgZ(0,"tr"),_.TgZ(1,"td",25),_._uU(2),_.ALo(3,"pokemonStat"),_.qZA(),_.YNc(4,U,2,2,"td",26),_.qZA()),2&n){const n=e.$implicit,t=_.oxw();_.xp6(2),_.Oqu(_.lcZ(3,2,n.name)),_.xp6(2),_.Q6J("ngIf",!t.busy)}}function j(n,e){1&n&&(_.TgZ(0,"span"),_._uU(1,"Loading... Don't turn off the power"),_.qZA())}function L(n,e){if(1&n&&(_.TgZ(0,"span"),_._uU(1),_.qZA()),2&n){const n=_.oxw();_.Q6J("@fadeIn",void 0),_.xp6(1),_.hij(" ",n.pokemonSpecie.genus," ")}}function B(n,e){if(1&n&&(_.ynx(0),_.TgZ(1,"h3",29),_._uU(2),_.ALo(3,"pokedexVersionName"),_.qZA(),_.BQk()),2&n){const n=e.$implicit;_.xp6(1),_.Q6J("ngClass",n),_.xp6(1),_.hij(" ",_.lcZ(3,2,n)," ")}}function $(n,e){if(1&n&&(_.ynx(0),_.YNc(1,B,4,4,"ng-container",17),_.TgZ(2,"p",28),_._uU(3),_.qZA(),_.BQk()),2&n){const n=e.$implicit;_.xp6(1),_.Q6J("ngForOf",n.versionNames),_.xp6(2),_.hij(" ",n.text," ")}}const F=function(n){return{"--hidden":n}},z=[{path:"",component:(()=>{class n{constructor(n,e){this.route=n,this.pokemonSpecieService=e,this.pokemon={},this.pokemonSpecie={},this.busy=!0,this.error=!1}ngOnInit(){let n;this.route.params.subscribe(({id:e})=>{n=e?parseInt(e):0,this.pokemon.id=n,this.busy=!0,this.getPokemonSpecie(n)})}getPokemonSpecie(n){this.pokemonSpecieService.getPokemonSpecieByPokemonId(n).subscribe(n=>{this.pokemonSpecie=n||a},n=>{console.error(n),this.pokemonSpecie=a}).add(()=>{this.busy=!1})}}return n.\u0275fac=function(e){return new(e||n)(_.Y36(o.gz),_.Y36(k))},n.\u0275cmp=_.Xpm({type:n,selectors:[["app-pokemon-details"]],decls:42,vars:19,consts:[[1,"pokemon-details"],[1,"breadcrumb"],["routerLink","/"],[4,"ngIf"],[1,"pokemon-details__content"],[1,"artwork"],["size","large"],[1,"artwork__image-placeholder"],["width","250","height","250",3,"src","alt",4,"ngIf"],[1,"paginator"],[1,"paginator__button",3,"routerLink"],["size","small"],[1,"paginator__current-number"],[1,"details"],[1,"details__list","--visible"],["class","details__name",4,"ngIf"],[1,"stats"],[4,"ngFor","ngForOf"],[1,"more-details"],[1,"more-details__title"],[1,"more-details__content","--visible",3,"ngClass"],["routerLink","/",1,"button-theme","button-theme--black"],["width","250","height","250",3,"src","alt"],[1,"details__name"],[1,"details__type",3,"ngClass"],[1,"stats__name"],["class","stats__value",4,"ngIf"],[1,"stats__value"],[1,"more-details__flavor-text"],[1,"more-details__version-name",3,"ngClass"]],template:function(n,e){1&n&&(_.TgZ(0,"section",0),_.TgZ(1,"div",1),_.TgZ(2,"span"),_.TgZ(3,"a",2),_._uU(4,"Home"),_.qZA(),_._uU(5," / "),_.YNc(6,v,3,4,"span",3),_.qZA(),_.qZA(),_.TgZ(7,"div",4),_.TgZ(8,"div",5),_.TgZ(9,"app-dialog-box",6),_.TgZ(10,"div",7),_.YNc(11,b,1,3,"img",8),_.qZA(),_.TgZ(12,"div",9),_.TgZ(13,"a",10),_.YNc(14,w,2,0,"span",3),_.qZA(),_.TgZ(15,"app-dialog-box",11),_.TgZ(16,"div",12),_.YNc(17,q,3,4,"span",3),_.qZA(),_.qZA(),_.TgZ(18,"a",10),_._uU(19,">"),_.qZA(),_.qZA(),_.qZA(),_.qZA(),_.TgZ(20,"div",13),_.TgZ(21,"app-dialog-box",6),_.TgZ(22,"ul",14),_.TgZ(23,"li"),_.YNc(24,A,3,4,"span",15),_._uU(25,"\xa0 "),_.qZA(),_.TgZ(26,"li"),_.YNc(27,S,2,2,"span",3),_._uU(28," \xa0 "),_.qZA(),_.qZA(),_.TgZ(29,"table",16),_.YNc(30,I,4,1,"tr",3),_.YNc(31,J,4,1,"tr",3),_.YNc(32,Y,5,4,"tr",17),_.qZA(),_.qZA(),_.qZA(),_.TgZ(33,"div",18),_.TgZ(34,"app-dialog-box",6),_.TgZ(35,"h2",19),_.YNc(36,j,2,0,"span",3),_.YNc(37,L,2,2,"span",3),_.qZA(),_.TgZ(38,"div",20),_.YNc(39,$,4,2,"ng-container",17),_.TgZ(40,"a",21),_._uU(41,"Go Back"),_.qZA(),_.qZA(),_.qZA(),_.qZA(),_.qZA(),_.qZA()),2&n&&(_.xp6(6),_.Q6J("ngIf",!e.busy),_.xp6(5),_.Q6J("ngIf",!e.busy),_.xp6(2),_.Udp("pointer-events",e.pokemonSpecie.id>=1?"auto":"none"),_.Q6J("routerLink","/pokemon/"+(e.pokemonSpecie.id-1)),_.xp6(1),_.Q6J("ngIf",e.pokemonSpecie.id-1>=1),_.xp6(3),_.Q6J("ngIf",!e.busy),_.xp6(1),_.Q6J("routerLink","/pokemon/"+(e.pokemonSpecie.id+1)),_.xp6(6),_.Q6J("ngIf",!e.busy),_.xp6(3),_.Q6J("ngIf",!e.busy),_.xp6(3),_.Q6J("ngIf",!!e.pokemonSpecie.height),_.xp6(1),_.Q6J("ngIf",!!e.pokemonSpecie.weight),_.xp6(1),_.Q6J("ngForOf",e.pokemonSpecie.stats),_.xp6(4),_.Q6J("ngIf",e.busy),_.xp6(1),_.Q6J("ngIf",!e.busy&&e.pokemonSpecie),_.xp6(1),_.Q6J("ngClass",_.VKq(17,F,e.busy)),_.xp6(1),_.Q6J("ngForOf",e.pokemonSpecie.flavorTexts))},directives:[o.yS,O.Q,C.O5,P.y,C.sg,C.mk],pipes:[M.p,u.o,f,h,x,y,Z],styles:['@import"https://fonts.googleapis.com/css2?family=Roboto&display=swap";@font-face{font-family:"pokemon-font";src:url(pokemon-font.827fac74b081a9471081.eot);src:url(pokemon-font.827fac74b081a9471081.eot?#iefix) format("embedded-opentype"),url(pokemon-font.2c6162341d5808452bd4.woff2) format("woff2"),url(pokemon-font.59e7be2a8b50c63b0862.woff) format("woff"),url(pokemon-font.aed34d09aa9153dc3e3b.ttf) format("truetype")}.pokemon-details[_ngcontent-%COMP%]{max-width:700px;margin:0 auto}.pokemon-details[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]{display:flex;align-items:center;height:50px}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]{justify-content:center;padding:0 0 2em;transition:.75s;display:grid;grid-template-rows:repeat(2,auto);grid-template-columns:1fr 1fr;grid-column-gap:1em;-moz-column-gap:1em;column-gap:1em;grid-row-gap:1em;row-gap:1em}@media only screen and (min-width: 768px) and (max-width: 991.98px){.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr);padding:2em 1em}}@media only screen and (max-width:767.98px){.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]{grid-template-rows:repeat(3,auto);grid-template-columns:1fr}}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .artwork[_ngcontent-%COMP%]{grid-row-start:1}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .artwork__image-placeholder[_ngcontent-%COMP%]{height:250px;width:250px;margin:0 auto}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .artwork[_ngcontent-%COMP%]   .paginator[_ngcontent-%COMP%]{padding:14px 0 0;line-height:1.1rem;display:flex;align-items:center;justify-content:space-evenly}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .artwork[_ngcontent-%COMP%]   .paginator__current-number[_ngcontent-%COMP%]{width:56px;height:23px;text-align:center}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .artwork[_ngcontent-%COMP%]   .paginator__button[_ngcontent-%COMP%]{text-decoration:none;color:#000;width:30px;height:30px;text-align:center;line-height:26px;transition:.25s}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .artwork[_ngcontent-%COMP%]   .paginator__button[_ngcontent-%COMP%]:hover{color:#ee1515}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .artwork[_ngcontent-%COMP%]   .paginator__button[_ngcontent-%COMP%]:last-of-type{grid-column-start:3;justify-self:flex-end}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]{grid-row-start:1;grid-row-end:2;display:flex;flex-direction:column}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .container-theme[_ngcontent-%COMP%]{flex:1}@media only screen and (max-width:767.98px){.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]{grid-row-start:initial;grid-row-end:initial}}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .details__list[_ngcontent-%COMP%]{list-style:none;padding-left:0;margin:0}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .details__name[_ngcontent-%COMP%]{text-transform:uppercase}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .details__type[_ngcontent-%COMP%]{text-transform:uppercase}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .details__type[_ngcontent-%COMP%] + .details__type[_ngcontent-%COMP%]{padding-left:16px}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .details__type.bug[_ngcontent-%COMP%]{color:#6d7815}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .details__type.dark[_ngcontent-%COMP%]{color:#49392f}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .details__type.dragon[_ngcontent-%COMP%]{color:#4924a1}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .details__type.electric[_ngcontent-%COMP%]{color:#a1871f}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .details__type.fairy[_ngcontent-%COMP%]{color:#9b6470}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .details__type.fighting[_ngcontent-%COMP%]{color:#7d1f1a}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .details__type.fire[_ngcontent-%COMP%]{color:#9c531f}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .details__type.flying[_ngcontent-%COMP%]{color:#6d5e9c}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .details__type.ghost[_ngcontent-%COMP%]{color:#493963}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .details__type.grass[_ngcontent-%COMP%]{color:#4e8234}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .details__type.ground[_ngcontent-%COMP%]{color:#927d44}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .details__type.ice[_ngcontent-%COMP%]{color:#638d8d}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .details__type.normal[_ngcontent-%COMP%]{color:#6d6d4e}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .details__type.poison[_ngcontent-%COMP%]{color:#682a68}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .details__type.psychic[_ngcontent-%COMP%]{color:#a13959}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .details__type.rock[_ngcontent-%COMP%]{color:#786824}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .details__type.steel[_ngcontent-%COMP%]{color:#787887}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .details__type.water[_ngcontent-%COMP%]{color:#445e9c}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .details__type.unknown[_ngcontent-%COMP%], .pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .details__type.bird[_ngcontent-%COMP%]{color:#44685e}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]{margin-top:8px;width:100%}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .stats__name[_ngcontent-%COMP%]{text-transform:uppercase}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .stats__value[_ngcontent-%COMP%]{text-align:center}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]{grid-column-start:1;grid-column-end:3}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details__title[_ngcontent-%COMP%]{margin-top:0}@media only screen and (max-width:767.98px){.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]{grid-column-end:2}}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details__version-name[_ngcontent-%COMP%]{text-transform:uppercase;margin-bottom:0}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details__version-name[_ngcontent-%COMP%] + .more-details__version-name[_ngcontent-%COMP%]{margin-top:0}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details__flavor-text[_ngcontent-%COMP%]{margin:0 0 1.5em;font-family:"Roboto",sans-serif}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .red[_ngcontent-%COMP%]{color:#a60b0b}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .green[_ngcontent-%COMP%]{color:#0b7a0b}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .blue[_ngcontent-%COMP%]{color:#0b0ba6}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .yellow[_ngcontent-%COMP%]{color:#a68c21}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .gold[_ngcontent-%COMP%]{color:#8e6b15}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .silver[_ngcontent-%COMP%]{color:#7d7d7d}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .crystal[_ngcontent-%COMP%]{color:#338da6}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .ruby[_ngcontent-%COMP%]{color:#680000}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .sapphire[_ngcontent-%COMP%]{color:#000068}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .emerald[_ngcontent-%COMP%]{color:#006800}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .firered[_ngcontent-%COMP%]{color:#a64b19}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .leafgreen[_ngcontent-%COMP%]{color:#009000}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .diamond[_ngcontent-%COMP%]{color:#6f6fa6}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .pearl[_ngcontent-%COMP%]{color:#a66f6f}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .platinum[_ngcontent-%COMP%]{color:#646464}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .heartgold[_ngcontent-%COMP%]{color:#766700}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .soulsilver[_ngcontent-%COMP%]{color:#7d7d92}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .black[_ngcontent-%COMP%]{color:#2c2c2c}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .white[_ngcontent-%COMP%]{color:#929292}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .black-2[_ngcontent-%COMP%]{color:#2b3134}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .white-2[_ngcontent-%COMP%]{color:#948687}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .x[_ngcontent-%COMP%]{color:#013d6c}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .y[_ngcontent-%COMP%]{color:#981128}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .omega-ruby[_ngcontent-%COMP%]{color:#6f1a0c}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .alpha-sapphire[_ngcontent-%COMP%]{color:#194166}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .sun[_ngcontent-%COMP%]{color:#9d5e1c}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .moon[_ngcontent-%COMP%]{color:#376483}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .ultra-sun[_ngcontent-%COMP%]{color:#983b1c}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .ultra-moon[_ngcontent-%COMP%]{color:#164776}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .lets-go-pikachu[_ngcontent-%COMP%]{color:#9f8e19}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .lets-go-eevee[_ngcontent-%COMP%]{color:#8a5f31}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .sword[_ngcontent-%COMP%]{color:#006998}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .shield[_ngcontent-%COMP%]{color:#7c0033}'],data:{animation:[s]}}),n})()}];let H=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=_.oAB({type:n}),n.\u0275inj=_.cJS({imports:[[o.Bz.forChild(z),c.m]]}),n})()}}]);