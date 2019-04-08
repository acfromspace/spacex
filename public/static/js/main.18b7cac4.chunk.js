(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{47:function(e,a,t){e.exports=t.p+"static/media/logo.1983b218.png"},50:function(e,a,t){e.exports=t(74)},55:function(e,a,t){},69:function(e,a,t){},74:function(e,a,t){"use strict";t.r(a);var n=t(1),c=t.n(n),r=t(40),l=t.n(r),s=(t(55),t(16)),m=t(17),u=t(20),i=t(18),o=t(22),h=t(48),p=t(21),E=t(19),b=t(13),d=t(27),g=t(15),f=t.n(g),_=t(30),y=t.n(_),N=t(41),v=t.n(N);function k(e){var a=e.launch,t=a.flight_number,n=a.mission_name,r=a.launch_date_local,l=a.launch_success;return c.a.createElement("div",{className:"card card-body mb-3"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-9"},c.a.createElement("h4",null,"Mission:"," ",c.a.createElement("span",{className:y()({"text-success":l,"text-danger":!l})},n)," "),c.a.createElement("p",null,"Date: ",c.a.createElement(v.a,{format:"YYYY-MM-DD HH:MM"},r)," ")),c.a.createElement("div",{className:"col-md-3"},c.a.createElement(E.b,{to:"/launch/".concat(t),className:"btn btn-secondary"},"Details"))))}function j(){return c.a.createElement("div",{className:"my-3"},c.a.createElement("p",null,c.a.createElement("span",{className:"px-3 mr-2 bg-success"})," = SUCCESS"),c.a.createElement("p",null,c.a.createElement("span",{className:"px-3 mr-2 bg-danger"})," = FAILURE"))}function O(){var e=Object(d.a)(["\n  query LaunchesQuery {\n    launches {\n      flight_number\n      mission_name\n      launch_date_local\n      launch_success\n    }\n  }\n"]);return O=function(){return e},e}var w=f()(O()),x=function(e){function a(){return Object(s.a)(this,a),Object(u.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(o.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return c.a.createElement(n.Fragment,null,c.a.createElement("h1",{className:"display-4 my-3"},"Launches"),c.a.createElement(j,null),c.a.createElement(p.b,{query:w},function(e){var a=e.loading,t=e.error,r=e.data;return a?c.a.createElement("h4",null,"Loading..."):(t&&console.log(t),c.a.createElement(n.Fragment,null,r.launches.map(function(e){return c.a.createElement(k,{key:e.flight_number,launch:e})})))}))}}]),a}(n.Component);function L(){var e=Object(d.a)(["\n  query LaunchQuery($flight_number: Int!) {\n    launch(flight_number: $flight_number) {\n      flight_number\n      mission_name\n      launch_year\n      launch_success\n      launch_date_local\n      rocket {\n        rocket_id\n        rocket_name\n        rocket_type\n      }\n    }\n  }\n"]);return L=function(){return e},e}var D=f()(L()),F=function(e){function a(){return Object(s.a)(this,a),Object(u.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(o.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.props.match.params.flight_number;return e=parseInt(e),c.a.createElement(n.Fragment,null,c.a.createElement(p.b,{query:D,variables:{flight_number:e}},function(e){var a=e.loading,t=e.error,n=e.data;if(a)return c.a.createElement("h4",null,"Loading...");if(t)return console.log(t);var r=n.launch,l=r.mission_name,s=r.flight_number,m=r.launch_year,u=r.launch_success,i=r.rocket,o=i.rocket_id,h=i.rocket_name,p=i.rocket_type;return c.a.createElement("div",null,c.a.createElement("h1",{className:"display-4 my-3"},c.a.createElement("span",{className:"text-dark"},"Mission:")," ",l),c.a.createElement("h4",{className:"mb-3"},"Launch Details"),c.a.createElement("ul",{className:"list-group"},c.a.createElement("li",{className:"list-group-item"},"Flight Number: ",s),c.a.createElement("li",{className:"list-group-item"},"Launch Year: ",m),c.a.createElement("li",{className:"list-group-item"},"Launch Successful:"," ",c.a.createElement("span",{className:y()({"text-success":u,"text-danger":!u})},u?"True":"False"))),c.a.createElement("h4",{className:"my-3"},"Rocket Details"),c.a.createElement("ul",{className:"list-group"},c.a.createElement("li",{className:"list-group-item"},"Rocket ID: ",o),c.a.createElement("li",{className:"list-group-item"},"Rocket Name: ",h),c.a.createElement("li",{className:"list-group-item"},"Rocket Type: ",p)),c.a.createElement("hr",null),c.a.createElement(E.b,{to:"/",className:"btn btn-secondary"},"Back"))}))}}]),a}(n.Component),M=(t(69),t(47)),q=t.n(M),C=new h.a({uri:"/graphql"}),I=function(e){function a(){return Object(s.a)(this,a),Object(u.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(o.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return c.a.createElement(p.a,{client:C},c.a.createElement(E.a,null,c.a.createElement("div",{className:"container"},c.a.createElement("img",{src:q.a,alt:"SpaceX",style:{width:"30rem",display:"block",margin:"auto"}}),c.a.createElement(b.a,{exact:!0,path:"/",component:x}),c.a.createElement(b.a,{exact:!0,path:"/launch/:flight_number",component:F}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[50,1,2]]]);
//# sourceMappingURL=main.18b7cac4.chunk.js.map