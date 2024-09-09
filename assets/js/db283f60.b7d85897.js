(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{148:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"Highlight",(function(){return c})),n.d(t,"HighlightWithBlack",(function(){return u})),n.d(t,"ColoredText",(function(){return b})),n.d(t,"CenteredText",(function(){return s})),n.d(t,"GreenColoredText",(function(){return d})),n.d(t,"BlueColoredText",(function(){return p})),n.d(t,"toc",(function(){return h})),n.d(t,"default",(function(){return f}));var r=n(3),a=n(7),i=(n(0),n(162)),o=(n(163),{id:"diyalog-required-api-queuing-services",title:"Call Center Queueing Services",sidebar_label:"Call Center Queueing Services"}),l={unversionedId:"diyalog-required-api-queuing-services",id:"diyalog-required-api-queuing-services",isDocsHomePage:!1,title:"Call Center Queueing Services",description:"<span",source:"@site/../docs/diyalog-required-api-queuing-services.md",slug:"/diyalog-required-api-queuing-services",permalink:"/docs/diyalog-required-api-queuing-services",version:"current",sidebar_label:"Call Center Queueing Services",sidebar:"docs",previous:{title:"Authentication Services",permalink:"/docs/diyalog-required-api-authentication-services"},next:{title:"Document Management Services",permalink:"/docs/diyalog-required-api-document-management-services"}},c=function(e){var t=e.children,n=e.color;return Object(i.b)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},u=function(e){var t=e.children,n=e.color;return Object(i.b)("span",{style:{backgroundColor:n,borderRadius:"2px",padding:"0.2rem"}},t)},b=function(e){var t=e.children,n=e.color;return Object(i.b)("span",{style:{color:n}},t)},s=function(e){var t=e.children;return Object(i.b)("span",{style:{align:"center"}},t)},d=function(e){var t=e.children;return Object(i.b)("span",{style:{color:"#42b72a"}},t)},p=function(e){var t=e.children;return Object(i.b)("span",{style:{color:"#1877F2"}},t)},h=[{value:"Create Interaction",id:"create-interaction",children:[{value:"Delete Interaction",id:"delete-interaction",children:[]}]}],m={Highlight:c,HighlightWithBlack:u,ColoredText:b,CenteredText:s,GreenColoredText:d,BlueColoredText:p,toc:h};function f(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"create-interaction"},"Create Interaction"),Object(i.b)("p",null,"In order to initiate a call via the Diyalog servers, the API detailed below is expected to be prepared."),Object(i.b)("h4",{id:"request-uri"},"Request URI"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"https://<YOUR-API-ENDPOINT>/CreateInteraction\n")),Object(i.b)("h4",{id:"request-method"},"Request Method"),Object(i.b)("p",null,"POST"),Object(i.b)("h4",{id:"request"},"Request"),Object(i.b)("p",null,"Sample Request:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'{\n    "customerId" : "<customer No>",\n    "attachedData" : [\n        {\n            "<some-data-name>" : "<data-value>"\n        },\n        {\n            "<some-data-name>" : "<data-value>"\n        },\n        {\n            "<some-data-name>" : "<data-value>"\n        },\n        ...\n        {\n            "<data-name-name>" : "<data-value>"\n        }\n    ]\n}\n')),Object(i.b)("p",null,"`"),Object(i.b)("p",null,"Details of the fields in the above request are given below."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Field Name"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Definition"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"customerId"),Object(i.b)("td",{parentName:"tr",align:null},"String"),Object(i.b)("td",{parentName:"tr",align:null},"In this field, the number of the customer whose call will be initiated will be transmitted to the service.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"attachedData"),Object(i.b)("td",{parentName:"tr",align:null},"Object Array"),Object(i.b)("td",{parentName:"tr",align:null},"In this field, a json object array containing a string value containing the information that the developers want to transmit via the mobile client will be transmitted.")))),Object(i.b)("p",null,"When the main mobile application wants to initiate a call and send some specific information to the call via the Diyalog Mobile SDK, it will be able to use the attachedData field. This attachedData will be completely transparent for Diyalog and Diyalog will pass this information to the call queue initiation API. The call queue API will be able to receive this information about the call and transfer the desired routing and information to the call based on this information."),Object(i.b)("p",null,"For example, for a scenario such as a customer having a primary or secondary portfolio manager in your system and routing the call to these portfolio managers first, a request can be made with attachedData as below and routing can be done in your queue system according to the information in this request."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'{\n    "customerId" : "221122121",\n    "attachedData" : [\n        {\n            "TRX" : "Diyalog"\n        },\n        {\n            "PrimaryProjectManagerId" : "123456"\n        },\n        {\n            "SecondaryProjectManagerId" : "654321"\n        }\n    ]\n}\n')),Object(i.b)("p",null,'In this request, Genesys queues can be directed by looking at the values \u200b\u200bof the "PrimaryProjectManagerId" and "SecondaryProjectManagerId" fields in the attachedData while starting the interaction.'),Object(i.b)("h4",{id:"response"},"Response"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'{\n    "success" : true,\n    "errorMessage" : null,\n    "result" : {\n        "interactionId" = "2121212121212"\n    }\n}\n')),Object(i.b)("p",null,"Details of the fields in the response above are given below."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Field Name"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Definition"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"success"),Object(i.b)("td",{parentName:"tr",align:null},"Boolean"),Object(i.b)("td",{parentName:"tr",align:null},"Gives information about whether the interaction was created successfully. It is expected to return true or false.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"errorMessage"),Object(i.b)("td",{parentName:"tr",align:null},"Option","[String]"),Object(i.b)("td",{parentName:"tr",align:null},"If the interaction creation fails, the error-related detailed message is returned in this field. It is a string value. If the interaction is successful, there is no need to return this field.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"result"),Object(i.b)("td",{parentName:"tr",align:null},"Object"),Object(i.b)("td",{parentName:"tr",align:null},"A json object containing the intreactionId information is expected to be returned.")))),Object(i.b)("h3",{id:"delete-interaction"},"Delete Interaction"),Object(i.b)("p",null,"With this API, if the call is not received by any agent while the customer is waiting and the customer cancels the wait, the created interaction is expected to be canceled. In this case, if the created interaction has not been forwarded to the agent, it will be deleted and should not be forwarded to any agent."),Object(i.b)("h4",{id:"request-uri-1"},"Request URI"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"https://<YOUR-API-ENDPOINT>/<interactionId>\n")),Object(i.b)("h4",{id:"request-method-1"},"Request Method"),Object(i.b)("p",null,"DELETE"),Object(i.b)("p",null,"To delete a call, the interactionId of the interaction you want to delete will be added to your API service URL and a request will be sent using the REST DELETE method."))}f.isMDXComponent=!0},162:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),b=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=b(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=b(n),p=r,h=s["".concat(o,".").concat(p)]||s[p]||d[p]||i;return n?a.a.createElement(h,l(l({ref:t},u),{},{components:n})):a.a.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},163:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var r=n(16),a=n(164);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.default)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(r)return t+n;const o=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+o:o}(t,e,n,r)}}function o(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},164:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))}}]);