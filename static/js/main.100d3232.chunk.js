(this["webpackJsonpmy-movie-app"]=this["webpackJsonpmy-movie-app"]||[]).push([[0],{20:function(e,t,a){e.exports=a(61)},25:function(e,t,a){},43:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(5),r=a.n(l),o=(a(25),a(2)),s=a(6),i=function(e){var t=e.handleInput,a=e.search;return c.a.createElement("div",null,c.a.createElement("section",{className:"searchbox-wrap"},c.a.createElement("input",{type:"text",className:"searchbox",placeholder:"Search A Movie Name  ",onChange:t,onKeyDown:a})))},u=a(7),m=a.n(u),p=(a(43),function(e){var t=e.result,a=e.openPopup;return c.a.createElement("div",{className:"result box",onClick:function(){return a(t.id)}},c.a.createElement("div",{className:"imgBox"},c.a.createElement("img",{src:"https://image.tmdb.org/t/p/w300_and_h450_bestv2"+t.poster_path,alt:""})),c.a.createElement("div",{className:"content"},c.a.createElement("h3",null,t.original_title)))}),d=function(e){var t=e.results,a=e.openPopup;return c.a.createElement("section",{className:"results"},t.map((function(e){return c.a.createElement(p,{key:e.id,result:e,openPopup:a})})))},h=function(e){var t=e.selected,a=e.closePopup;return c.a.createElement("section",{className:"popup"},c.a.createElement("div",{className:"content"},c.a.createElement("h2",null,t.original_title,c.a.createElement("span",null,t.release_date)),c.a.createElement("p",{className:"rating"},"Rating: ",t.vote_average),c.a.createElement("div",{className:"plot"},c.a.createElement("img",{src:"https://image.tmdb.org/t/p/w300_and_h450_bestv2"+t.poster_path,alt:""}),c.a.createElement("p",null,t.overview)),c.a.createElement("button",{className:"close",onClick:a},"Close")))},v=a(19),E=a.n(v),f=(a(59),a(60),function(e){var t=e.title,a=e.sub,l="https://api.themoviedb.org/3/search/movie?api_key=a3ce8e966aef0ecef3ec77d435bc9197&query=".concat(t),r=Object(n.useState)(""),o=Object(s.a)(r,2),i=o[0],u=o[1],m=function(){fetch(l).then((function(e){return e.json()})).then((function(e){console.log(e),u(e.results)}))};Object(n.useEffect)((function(){u(m)}),[]);return c.a.createElement("div",{className:"cont"},c.a.createElement("h4",null,a),c.a.createElement(E.a,Object.assign({},{infinite:!1,speed:500,slidesToShow:8,slidesToScroll:4,initialSlide:0,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:3,slidesToScroll:1,initialSlide:2}},{breakpoint:480,settings:{slidesToShow:2,slidesToScroll:1}}]},{className:"slick"}),i?i.map((function(e){return c.a.createElement("div",{className:"kenareham"},c.a.createElement("div",{className:"posterBox"},c.a.createElement("img",{src:"https://image.tmdb.org/t/p/w300_and_h450_bestv2"+e.poster_path,alt:""})),c.a.createElement("h3",null,e.title))})):null))});var b=function(){var e=Object(n.useState)({s:"",result:[],selected:{}}),t=Object(s.a)(e,2),a=t[0],l=t[1],r="https://api.themoviedb.org/3/search/movie?api_key=a3ce8e966aef0ecef3ec77d435bc9197";return c.a.createElement("div",null,c.a.createElement("header",null,c.a.createElement("h1",null,"Movie Finder")),c.a.createElement("div",null,c.a.createElement(f,{title:"romantic",sub:"Romantic Movie"})),c.a.createElement("div",null,c.a.createElement(f,{title:"war",sub:"Action & War Movie"})),c.a.createElement("div",null,c.a.createElement(f,{title:"music",sub:"Musical Movie"})),c.a.createElement("div",{className:"search-container"},c.a.createElement(i,{handleInput:function(e){var t=e.target.value;l((function(e){return Object(o.a)(Object(o.a)({},e),{},{s:t})}))},search:function(e){"Enter"===e.key&&m()(r+"&query="+a.s).then((function(e){var t=e.data,a=t.results;l((function(e){return Object(o.a)(Object(o.a)({},e),{},{result:a})})),console.log(t)}))}})),c.a.createElement("main",null,c.a.createElement("div",{className:"myResult"},c.a.createElement(d,{results:a.result,openPopup:function(e){console.log(e),m()(r+"&query="+e).then((function(e){var t=e.data;l((function(e){return Object(o.a)(Object(o.a)({},e),{},{selected:t})}))}))}})),!!a.selected.id&&c.a.createElement(h,{selected:a.selected,closePopup:function(){l((function(e){return Object(o.a)(Object(o.a)({},e),{},{selected:{}})}))}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.100d3232.chunk.js.map