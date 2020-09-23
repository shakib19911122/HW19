(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{15:function(e,t,a){e.exports=a(38)},38:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(12),c=a.n(l);var s=function(){return n.a.createElement("div",{className:"header"},n.a.createElement("h1",null,"Employee Directory"))},m=a(2),i=a(14),d=n.a.createContext({}),o=function(){var e=Object(r.useContext)(d);return n.a.createElement("tbody",null,void 0!==e.developerState.filteredUsers[0]&&void 0!==e.developerState.filteredUsers[0].name?e.developerState.filteredUsers.map((function(e){var t=e.login,a=e.name,r=e.picture,l=e.phone,c=e.email,s=e.dob;return n.a.createElement("tr",{key:t.uuid},n.a.createElement("td",{"data-th":"Image",className:"align-middle"},n.a.createElement("img",{src:r.medium,alt:"profile image for "+a.first+" "+a.last,className:"img-responsive"})),n.a.createElement("td",{"data-th":"Name",className:"name-cell align-middle"},a.first," ",a.last),n.a.createElement("td",{"data-th":"Phone",className:"align-middle"},l),n.a.createElement("td",{"data-th":"Email",className:"align-middle"},n.a.createElement("a",{href:"mailto:"+c,target:"__blank"},c)),n.a.createElement("td",{"data-th":"DOB",className:"align-middle"},function(e){var t=e.split("-"),a=t[0];return[t[1],t[2].split("T")[0],a].join("-")}(s.date)))})):n.a.createElement(n.a.Fragment,null))},u=function(){var e=Object(r.useContext)(d);return n.a.createElement("div",{className:"datatable mt-5"},n.a.createElement("table",{id:"table",className:"table table-striped table-hover table-condensed"},n.a.createElement("thead",null,n.a.createElement("tr",null,e.developerState.headings.map((function(t){var a=t.name,r=t.width;return n.a.createElement("th",{className:"col",key:a,style:{width:r},onClick:function(){e.handleSort(a.toLowerCase())}},a,n.a.createElement("span",{className:"pointer"}))})))),n.a.createElement(o,null)))},f=a(13),h=a.n(f),E=function(){return h.a.get("https://randomuser.me/api/?results=200&nat=AU")},v=function(){var e=Object(r.useContext)(d);return n.a.createElement("div",{className:"searchbox"},n.a.createElement("form",{className:"form-inline"},n.a.createElement("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search",onChange:function(t){return e.handleSearchChange(t)}}),n.a.createElement("button",{className:"btn my-2 my-sm-0",type:"submit"},"Search")))},p=function(){var e=Object(r.useState)({users:[],order:"ascend",filteredUsers:[],headings:[{name:"Image",width:"10%"},{name:"Name",width:"10%"},{name:"Phone",width:"20%"},{name:"Email",width:"20%"},{name:"DOB",width:"10%"}]}),t=Object(i.a)(e,2),a=t[0],l=t[1];return Object(r.useEffect)((function(){E().then((function(e){l(Object(m.a)(Object(m.a)({},a),{},{users:e.data.results,filteredUsers:e.data.results}))}))}),[]),n.a.createElement(d.Provider,{value:{developerState:a,handleSearchChange:function(e){var t=e.target.value,r=a.users.filter((function(e){return-1!==e.name.first.toLowerCase().indexOf(t.toLowerCase())}));l(Object(m.a)(Object(m.a)({},a),{},{filteredUsers:r}))},handleSort:function(e){"descend"===a.order?l({order:"ascend"}):l({order:"descend"});var t=a.filteredUsers.sort((function(t,r){return"ascend"===a.order?void 0===t[e]?1:void 0===r[e]?-1:"name"===e?t[e].first.localeCompare(r[e].first):r[e]-t[e]:void 0===t[e]?1:void 0===r[e]?-1:"name"===e?r[e].first.localeCompare(t[e].first):r[e]-t[e]}));l(Object(m.a)(Object(m.a)({},a),{},{filteredUsers:t}))}}},n.a.createElement(v,null),n.a.createElement("div",{className:"data-area"},a.filteredUsers.length>0?n.a.createElement(u,null):n.a.createElement("div",null)))};var b=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(p,null))};var g=function(e){var t=e.children;return n.a.createElement("div",{className:"wrapper"},t)};var N=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(g,null,n.a.createElement(s,null),n.a.createElement(b,null)))};a(37);c.a.render(n.a.createElement(N,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.a50b8f1a.chunk.js.map