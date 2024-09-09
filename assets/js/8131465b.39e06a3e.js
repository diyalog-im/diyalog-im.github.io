(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{109:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"Highlight",(function(){return c})),n.d(t,"HighlightWithBlack",(function(){return u})),n.d(t,"ColoredText",(function(){return b})),n.d(t,"CenteredText",(function(){return s})),n.d(t,"GreenColoredText",(function(){return d})),n.d(t,"BlueColoredText",(function(){return p})),n.d(t,"toc",(function(){return m})),n.d(t,"default",(function(){return g}));var r=n(3),a=n(7),i=(n(0),n(162)),o=(n(163),{id:"diyalogWeb_OpenInIFrame",title:"How to Use Diyalog Web App in Iframe",sidebar_label:"How to Use Diyalog Web App in Iframe"}),l={unversionedId:"diyalogWeb_OpenInIFrame",id:"diyalogWeb_OpenInIFrame",isDocsHomePage:!1,title:"How to Use Diyalog Web App in Iframe",description:"<span",source:"@site/../docs/diyalogWeb_OpenInIFrame.md",slug:"/diyalogWeb_OpenInIFrame",permalink:"/docs/diyalogWeb_OpenInIFrame",version:"current",sidebar_label:"How to Use Diyalog Web App in Iframe",sidebar:"docs",previous:{title:"How to Use Diyalog Web SDK from My AngularJS Web App",permalink:"/docs/diyalogWeb_OpenInDiyalogSDKAngularJSApp"},next:{title:"Overview",permalink:"/docs/diyalog-required-api-reference-overview"}},c=function(e){var t=e.children,n=e.color;return Object(i.b)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},u=function(e){var t=e.children,n=e.color;return Object(i.b)("span",{style:{backgroundColor:n,borderRadius:"2px",padding:"0.2rem"}},t)},b=function(e){var t=e.children,n=e.color;return Object(i.b)("span",{style:{color:n}},t)},s=function(e){var t=e.children;return Object(i.b)("span",{style:{align:"center"}},t)},d=function(e){var t=e.children;return Object(i.b)("span",{style:{color:"#42b72a"}},t)},p=function(e){var t=e.children;return Object(i.b)("span",{style:{color:"#1877F2"}},t)},m=[{value:"Canl\u0131 Yard\u0131m Diyalog Web Application",id:"canl\u0131-yard\u0131m-diyalog-web-application",children:[]}],f={Highlight:c,HighlightWithBlack:u,ColoredText:b,CenteredText:s,GreenColoredText:d,BlueColoredText:p,toc:m};function g(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},f,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"You can use Diyalog web applications in iframe. In iframe usage, Diyalog application must first check whether the user who opened it is authenticated in the main application. For this, Dyialog needs token-based authentication. First of all, you are expected to generate a token for your user (your customer representative) in the main application where you opened Diyalog in iframe and give us an API with which we can verify this token. You can see the structure of the token verification API that you will give us from the link ",Object(i.b)("a",{parentName:"p",href:"diyalog-required-api-authentication-services#agent-token-verification-service-api"},"CheckToken"),"."),Object(i.b)("p",null,"You can review the diagram below for the token verification flow."),Object(i.b)("p",null,Object(i.b)("img",{src:n(258).default})),Object(i.b)("h3",{id:"canl\u0131-yard\u0131m-diyalog-web-application"},"Canl\u0131 Yard\u0131m Diyalog Web Application"),Object(i.b)("p",null,"The following url information can be used to start a Diyalog chat with a customer in an iframe."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"https://<your diyalog webapp server>/app/agentchat.html#/auth?customerId=<canl\u0131 yard\u0131m i\xe7in gelen m\xfc\u015fteri numaras\u0131>&userId=<\xc7a\u011fr\u0131 merkezi temsilci sicil numaras\u0131>&sessionId=<temsilcinin session idsi>&userName=<Temsilci Ad ve Soyad\u0131>&dlgToken=<temsilcinin login olup olmad\u0131\u011f\u0131n\u0131 kontrol etmek i\xe7in olu\u015fturulan token bilgisi>&isOutbound=<true/false>\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Sample url with query parameters:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"https://localhost:3000/app/agentchat.html#/auth?customerId=23373681&userId=45186&sessionId=a221223223232323232323&userName=Ad%20Soyad&dlgToken=a1sasadadadasdasd_dasdqeqwfdfadaa&isOutbound=false\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Details of query parameters:")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Field Name"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Definition"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"customerId"),Object(i.b)("td",{parentName:"tr",align:null},"String"),Object(i.b)("td",{parentName:"tr",align:null},"Customer id to initiate Diyalog chat")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"userId"),Object(i.b)("td",{parentName:"tr",align:null},"String"),Object(i.b)("td",{parentName:"tr",align:null},"User id that started the Diyalog chat")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"userName"),Object(i.b)("td",{parentName:"tr",align:null},"String"),Object(i.b)("td",{parentName:"tr",align:null},"Name of the that started the Diyalog chat")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"sessionId"),Object(i.b)("td",{parentName:"tr",align:null},"String"),Object(i.b)("td",{parentName:"tr",align:null},"Unique id for session that corralated with token and userId")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"token"),Object(i.b)("td",{parentName:"tr",align:null},"String"),Object(i.b)("td",{parentName:"tr",align:null},"Token that will be verified by your system in order to be sure about the agent is authentication in the openned Diyalog app as iframe.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"isOutbound"),Object(i.b)("td",{parentName:"tr",align:null},"String"),Object(i.b)("td",{parentName:"tr",align:null},"It is an indicator that shows whether the conversation is outbound or not. Default is false.")))))}g.isMDXComponent=!0},162:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),b=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=b(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=b(n),p=r,m=s["".concat(o,".").concat(p)]||s[p]||d[p]||i;return n?a.a.createElement(m,l(l({ref:t},u),{},{components:n})):a.a.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},163:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var r=n(16),a=n(164);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.default)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(r)return t+n;const o=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+o:o}(t,e,n,r)}}function o(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},164:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},258:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/AgentAppAuth-66aabf9c4a5833591fefdbd363283dc5.png"}}]);