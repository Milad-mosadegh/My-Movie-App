(this["webpackJsonpmy-movie-app"]=this["webpackJsonpmy-movie-app"]||[]).push([[0],{15:function(e,t,a){e.exports=a(39)},20:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(13),l=a.n(r),o=(a(20),a(2)),s=a(14),i=function(e){var t=e.handleInput,a=e.search;return c.a.createElement("div",null,c.a.createElement("section",{className:"searchbox-wrap"},c.a.createElement("input",{type:"text",className:"searchbox",placeholder:"Search A Movie ",onChange:t,onKeyDown:a})))},u=a(3),m=a.n(u),p=(a(38),function(e){var t=e.result,a=e.openPopup;return c.a.createElement("div",{className:" box",onClick:function(){return a(t.id)}},c.a.createElement("div",{className:"imgBox"},c.a.createElement("img",{src:"https://image.tmdb.org/t/p/w300_and_h450_bestv2"+t.poster_path,alt:""})),c.a.createElement("div",{className:"content"},c.a.createElement("h3",null,t.original_title)))}),d=function(e){var t=e.results,a=e.openPopup;return c.a.createElement("section",{className:"results"},t.map((function(e){return c.a.createElement(p,{key:e.id,result:e,openPopup:a})})))},v=function(e){var t=e.selected,a=e.closePopup;return c.a.createElement("section",{className:"popup"},c.a.createElement("div",{className:"content"},c.a.createElement("h2",null,t.original_title,c.a.createElement("span",null,t.release_date)),c.a.createElement("p",{className:"rating"},"Rating: ",t.vote_average),c.a.createElement("div",{className:"plot"},c.a.createElement("img",{src:"https://image.tmdb.org/t/p/w300_and_h450_bestv2"+t.poster_path,alt:""}),c.a.createElement("p",null,t.overview)),c.a.createElement("button",{className:"close",onClick:a},"Close")))};var h=function(){var e=Object(n.useState)({s:"",result:[],selected:{}}),t=Object(s.a)(e,2),a=t[0],r=t[1],l="https://api.themoviedb.org/3/search/movie?api_key=a3ce8e966aef0ecef3ec77d435bc9197";return c.a.createElement("div",null,c.a.createElement("header",null,c.a.createElement("h1",null,"Movie Database")),c.a.createElement("main",null,c.a.createElement(i,{handleInput:function(e){var t=e.target.value;r((function(e){return Object(o.a)({},e,{s:t})}))},search:function(e){"Enter"===e.key&&m()(l+"&query="+a.s).then((function(e){var t=e.data,a=t.results;r((function(e){return Object(o.a)({},e,{result:a})})),console.log(t)}))}}),c.a.createElement("div",{className:"myResult"},c.a.createElement(d,{results:a.result,openPopup:function(e){console.log(e),m()(l+"&query="+e).then((function(e){var t=e.data;r((function(e){return Object(o.a)({},e,{selected:t})}))}))}})),!!a.selected.id&&c.a.createElement(v,{selected:a.selected,closePopup:function(){r((function(e){return Object(o.a)({},e,{selected:{}})}))}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.4e869673.chunk.js.map