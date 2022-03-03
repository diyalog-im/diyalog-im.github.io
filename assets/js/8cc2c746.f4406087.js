(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{107:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return o})),r.d(t,"default",(function(){return p}));var a=r(3),n=r(7),s=(r(0),r(152)),c={id:"ops_rancher_restart",title:"Dlg Server Rancher 1.6 Operations",sidebar_label:"Rancher 1.6 Operations"},i={unversionedId:"ops_rancher_restart",id:"ops_rancher_restart",isDocsHomePage:!1,title:"Dlg Server Rancher 1.6 Operations",description:"Dialog Server Application - Rancher 1.6 Restart Procedure",source:"@site/../docs/ops_rancher_restart.md",slug:"/ops_rancher_restart",permalink:"/docs/ops_rancher_restart",version:"current",sidebar_label:"Rancher 1.6 Operations",sidebar:"docs",previous:{title:"getmessagingdetail",permalink:"/docs/diyalog-reporting-api-getmessagingdetail"},next:{title:"Diyalog (dlg) Messenger Legal Info",permalink:"/docs/privacy"}},o=[{value:"Dialog Server Application - Rancher 1.6 Restart Procedure",id:"dialog-server-application---rancher-16-restart-procedure",children:[]}],l={toc:o};function p(e){var t=e.components,c=Object(n.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},l,c,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"dialog-server-application---rancher-16-restart-procedure"},"Dialog Server Application - Rancher 1.6 Restart Procedure"),Object(s.b)("p",null,"If unexpected errors occur in Dialog Server based on Rancher 1.6, the server application should be restarted by following the procedure."),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"First, you must connect to the management interface of Rancher 1.6 on your system and select ",Object(s.b)("strong",{parentName:"p"},"Dialog")," service under ",Object(s.b)("strong",{parentName:"p"},'"Stacks" -> "User"'),".")),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"Due to the load on the system, problems may occur during restart. To prevent this, you must first stop the ",Object(s.b)("strong",{parentName:"p"},"dialogue-server-lb")," service. To stop, ",Object(s.b)("strong",{parentName:"p"},"Stop")," should be selected as shown in the following screen."),Object(s.b)("p",{parentName:"li"},Object(s.b)("img",{alt:"stop-lb",src:r(167).default})),Object(s.b)("p",{parentName:"li"},"The Rancher user interface will wait for confirmation from you."),Object(s.b)("p",{parentName:"li"},Object(s.b)("img",{alt:"stop-lb1",src:r(168).default})),Object(s.b)("p",{parentName:"li"},"When the service stops, it appears as ",Object(s.b)("strong",{parentName:"p"},"Inactive"),". At this stage there is no load on the ",Object(s.b)("strong",{parentName:"p"},"dialogue-server")," service."),Object(s.b)("p",{parentName:"li"},Object(s.b)("img",{alt:"stop-lb2",src:r(169).default}))),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"After the load on the application is stopped, the ",Object(s.b)("strong",{parentName:"p"},"dialog-server")," service opens. "),Object(s.b)("p",{parentName:"li"},Object(s.b)("img",{alt:"scale-server1",src:r(170).default}))),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"Using ",Object(s.b)("strong",{parentName:"p"},'"Scale"')," option, the number of containers is reduced to ",Object(s.b)("strong",{parentName:"p"},"1"),"."),Object(s.b)("p",{parentName:"li"},Object(s.b)("img",{alt:"scale-server2",src:r(171).default}))),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"Once all containers have been closed, except for one last container, the last remaining container should be stoped by selecting ",Object(s.b)("strong",{parentName:"p"},"stop"),"."),Object(s.b)("p",{parentName:"li"},Object(s.b)("img",{alt:"scale-server3",src:r(172).default}))),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"After the last container is stopped, the system will automatically start a new one."),Object(s.b)("p",{parentName:"li"},Object(s.b)("img",{alt:"scale-server4",src:r(173).default}))),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"After opening the first container, wait for ",Object(s.b)("strong",{parentName:"p"},"15-20 seconds")," and increase the ",Object(s.b)("strong",{parentName:"p"},"Scale")," field one by one. The point to note here is that each new container should be added at intervals of 15-20 seconds. The system must be scale up to the ",Object(s.b)("strong",{parentName:"p"},"8")," container. "),Object(s.b)("p",{parentName:"li"},Object(s.b)("img",{alt:"scale-server5",src:r(174).default})),Object(s.b)("p",{parentName:"li"},Object(s.b)("img",{alt:"scale-server6",src:r(175).default})),Object(s.b)("p",{parentName:"li"},Object(s.b)("img",{alt:"scale-server7",src:r(176).default}))),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"After starting ",Object(s.b)("strong",{parentName:"p"},"dialogue-server")," service with 8 container, ",Object(s.b)("strong",{parentName:"p"},"dialogue-server-lb")," service is activated again to load the system."),Object(s.b)("p",{parentName:"li"},Object(s.b)("img",{alt:"start-lb1",src:r(177).default})),Object(s.b)("p",{parentName:"li"},Object(s.b)("strong",{parentName:"p"},"diyalog-server-lb")," is activating."),Object(s.b)("p",{parentName:"li"},Object(s.b)("img",{alt:"start-lb2",src:r(178).default})),Object(s.b)("p",{parentName:"li"},"When ",Object(s.b)("strong",{parentName:"p"},"dialogue-server-lb")," is activated, the ",Object(s.b)("strong",{parentName:"p"},"dialogue-server")," service will start to load and run."),Object(s.b)("p",{parentName:"li"},Object(s.b)("img",{alt:"start-lb3",src:r(179).default})))))}p.isMDXComponent=!0},152:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),p=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},b=function(e){var t=p(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),b=p(r),u=a,m=b["".concat(c,".").concat(u)]||b[u]||d[u]||s;return r?n.a.createElement(m,i(i({ref:t},l),{},{components:r})):n.a.createElement(m,i({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,c=new Array(s);c[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<s;l++)c[l]=r[l];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},167:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/diyalog-server-lb-stop-19b8aa9cd0cc76c1082c9b82e015d5cb.png"},168:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/diyalog-server-lb-stop1-97e10fa20e1c70dd59201e884dbfe632.png"},169:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/diyalog-server-lb-stop2-d19a852167a47cc9c0f421b3ea2c623a.png"},170:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/diyalog-server-service1-3a1aaddfb77193521a2f135d75c54d23.png"},171:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/diyalog-server-service2-aa6a26b162bdeb76e809bdec8173d374.png"},172:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/diyalog-server-service3-4c6b7a0aa3502f27c61b4bfb72e39773.png"},173:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/diyalog-server-service4-926c8418d59343b0636e3a9a17c1341b.png"},174:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/diyalog-server-service5-dc7556230a1a7963102121ea39fccabd.png"},175:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/diyalog-server-service6-f53f3585a2af4813adbf8d383d990038.png"},176:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/diyalog-server-service7-9045c562920fc59b809a48a5d20157a2.png"},177:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/diyalog-server-lb-start1-4805cb23746afd69a39913ad42c06e92.png"},178:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/diyalog-server-lb-start2-b5b762c708672147b3a743c1ad3a565a.png"},179:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/diyalog-server-lb-start3-17c8c81a84635bd733448ddb3d288aac.png"}}]);