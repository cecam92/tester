(this.webpackJsonptester=this.webpackJsonptester||[]).push([[0],{17:function(t,e,o){"use strict";o.r(e);var c=o(0),n=o(1),s=o.n(n),a=o(6),r=o.n(a),u=o(4),i=o.n(u),l=o(7),d=o(2);o(14).config();var g="AIzaSyC-fQVkm2xukA79CIzMFoTWK_4sl8rGFqc";console.log(g);var j=function(){var t=Object(n.useState)({latitude:3.451647,longitude:-76.531985}),e=Object(d.a)(t,2),o=e[0],s=e[1],a=Object(n.useState)(" "),r=Object(d.a)(a,2),u=r[0],j=r[1],f=Object(n.useState)([]),b=Object(d.a)(f,2),h=b[0],p=b[1],m=function(){var t=Object(l.a)(i.a.mark((function t(e,o){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return j("https://maps.googleapis.com/maps/api/geocode/json?latlng=".concat(e,",").concat(o,"&key=").concat(g)),t.next=3,fetch(u).then((function(t){return t.json()})).then((function(t){console.log(t.results[0]),p(t.results[0].address_components[3].long_name)})).catch((function(t){console.log("[datos error]",t)}));case 3:case"end":return t.stop()}}),t)})));return function(e,o){return t.apply(this,arguments)}}(),O={enableHighAccuracy:!0,timeout:5e3,maximumAge:0};function x(t){console.log("[success], latitude ".concat(t.coords.latitude)),console.log("[success], longitude ".concat(t.coords.longitude)),s({longitude:t.coords.longitude,latitude:t.coords.latitude}),console.log("[success state], latitude ".concat(o.latitude)),console.log("[success state], longitude ".concat(o.longitude)),m(t.coords.latitude,t.coords.longitude)}function v(t){console.warn("ERROR(".concat(t.code,"): ").concat(t.message))}return Object(n.useEffect)((function(){return navigator.geolocation.getCurrentPosition(x,v,O),function(){!1}}),[u]),Object(c.jsx)("div",{children:Object(c.jsx)("a",{href:u,children:h})})};var f=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(j,{})})};r.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(f,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.97f20e1d.chunk.js.map