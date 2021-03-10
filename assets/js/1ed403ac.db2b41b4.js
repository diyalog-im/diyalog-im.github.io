(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{136:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),b=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=b(n),p=r,m=u["".concat(l,".").concat(p)]||u[p]||d[p]||i;return n?a.a.createElement(m,s(s({ref:t},c),{},{components:n})):a.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=p;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var c=2;c<i;c++)l[c]=n[c];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},137:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return l}));var r=n(16),a=n(138);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.default)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(r)return t+n;const l=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+l:l}(t,e,n,r)}}function l(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},138:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},78:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"Highlight",(function(){return o})),n.d(t,"HighlightWithBlack",(function(){return c})),n.d(t,"ColoredText",(function(){return b})),n.d(t,"CenteredText",(function(){return u})),n.d(t,"GreenColoredText",(function(){return d})),n.d(t,"BlueColoredText",(function(){return p})),n.d(t,"toc",(function(){return m})),n.d(t,"default",(function(){return O}));var r=n(3),a=n(7),i=(n(0),n(136)),l=(n(137),{id:"diyalog-messaging-api-textmessage",title:"Text Message",sidebar_label:"Text Message"}),s={unversionedId:"diyalog-messaging-api-textmessage",id:"diyalog-messaging-api-textmessage",isDocsHomePage:!1,title:"Text Message",description:"<span",source:"@site/../docs/diyalog-messaging-api-textmessage.md",slug:"/diyalog-messaging-api-textmessage",permalink:"/docs/diyalog-messaging-api-textmessage",version:"current",sidebar_label:"Text Message",sidebar:"docs",previous:{title:"SendMessage API",permalink:"/docs/diyalog-messaging-api-sendmessage-api"},next:{title:"Quick Replies Template",permalink:"/docs/diyalog-messaging-api-quickreplies"}},o=function(e){var t=e.children,n=e.color;return Object(i.b)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},c=function(e){var t=e.children,n=e.color;return Object(i.b)("span",{style:{backgroundColor:n,borderRadius:"2px",padding:"0.2rem"}},t)},b=function(e){var t=e.children,n=e.color;return Object(i.b)("span",{style:{color:n}},t)},u=function(e){var t=e.children;return Object(i.b)("span",{style:{align:"center"}},t)},d=function(e){var t=e.children;return Object(i.b)("span",{style:{color:"#42b72a"}},t)},p=function(e){var t=e.children;return Object(i.b)("span",{style:{color:"#1877F2"}},t)},m=[{value:"Request URI",id:"request-uri",children:[]},{value:"Request Details",id:"request-details",children:[{value:"<GreenColoredText>recipient</GreenColoredText>",id:"recipient",children:[]},{value:"<GreenColoredText>message</GreenColoredText>",id:"message",children:[]}]},{value:"Response",id:"response",children:[{value:"Response Details",id:"response-details",children:[]}]}],g={Highlight:o,HighlightWithBlack:c,ColoredText:b,CenteredText:u,GreenColoredText:d,BlueColoredText:p,toc:m};function O(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},g,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"You can send text messages to your user."),Object(i.b)("h2",{id:"request-uri"},"Request URI"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"https://<DIYALOG-SERVER-API-ENDPOINT>/v1/bots/sendmessage/<YOUR-BOT-ACCESS-TOKEN>\n")),Object(i.b)("h4",{id:"example-request"},"Example Request"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-powershell"},'curl -X POST -H "Content-Type: application/json" -d \'{\n    "recipient": {\n     "appCustomerId": "1231232"\n    },\n    "message": {\n        "messageId": "messageId-1",\n        "text" : "Hello world !",\n        "quickReplies" : [],\n        "quickRepliesV2" : []\n    }\n}\' "https://<DIYALOG-SERVER-API-ENDPOINT>/v1/bots/sendmessage/<YOUR-BOT-ACCESS-TOKEN>"\n')),Object(i.b)("h2",{id:"request-details"},"Request Details"),Object(i.b)("h3",{id:"recipient"},Object(i.b)(d,{mdxType:"GreenColoredText"},"recipient")),Object(i.b)("p",null,"You can pass the user information you want to send the message to api in the ",Object(i.b)(d,{mdxType:"GreenColoredText"},"recipient")," object."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Property"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Description"),Object(i.b)("th",{parentName:"tr",align:null},"Mandatory"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)(d,{mdxType:"GreenColoredText"},"appCustomerId")),Object(i.b)("td",{parentName:"tr",align:null},"String"),Object(i.b)("td",{parentName:"tr",align:null},"Customer id in your system"),Object(i.b)("td",{parentName:"tr",align:null},"Optional")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)(d,{mdxType:"GreenColoredText"},"appStaffId")),Object(i.b)("td",{parentName:"tr",align:null},"String"),Object(i.b)("td",{parentName:"tr",align:null},"Your staff id."),Object(i.b)("td",{parentName:"tr",align:null},"Optional")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)(d,{mdxType:"GreenColoredText"},"id")),Object(i.b)("td",{parentName:"tr",align:null},"String"),Object(i.b)("td",{parentName:"tr",align:null},"Unique DLG user id."),Object(i.b)("td",{parentName:"tr",align:null},"Optional")))),Object(i.b)("p",null,"You can pass the the user information that will receive your message with this object.\nYour request should only have one of the properties that ",Object(i.b)(d,{mdxType:"GreenColoredText"},"appCustomerId"),", ",Object(i.b)(d,{mdxType:"GreenColoredText"},"appStaffId")," or ",Object(i.b)(d,{mdxType:"GreenColoredText"},"id"),"."),Object(i.b)("p",null,"There are two unique id for a single user in the DLG platform One of them is DLG user id.\nThis id is created randomly when user registering to the system.\nBesides of this id,  according to the user type, one of the customer id or staff id are stored for the user in DLG."),Object(i.b)("p",null,"As a result, you can use one of the customer id or staff id and DLG id in order to send message."),Object(i.b)("p",null,"If you know the DLG user id, you can use it for customor or staff."),Object(i.b)("p",null,"Using customer id and staff id is more applicable than using DLG user id. Because if you want to use DLG id, you should store all DLG user ids in your system."),Object(i.b)("h3",{id:"message"},Object(i.b)(d,{mdxType:"GreenColoredText"},"message")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Property"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Description"),Object(i.b)("th",{parentName:"tr",align:null},"Mandatory"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"messageId"),Object(i.b)("td",{parentName:"tr",align:null},"String"),Object(i.b)("td",{parentName:"tr",align:null},"This is a unique id of your message. You should create it in your system and send it to api. If you don't create and sent it to api DLG will create it for you and send it to you in the response of your request. DLG platfrom will feed the events of the messages to your system by this id. You can use it to differenciate events by this id. Therefore, this id is important for following all events of your message by your system."),Object(i.b)("td",{parentName:"tr",align:null},"Optional")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"text"),Object(i.b)("td",{parentName:"tr",align:null},"String"),Object(i.b)("td",{parentName:"tr",align:null},"Text that will send to your user."),Object(i.b)("td",{parentName:"tr",align:null},"Yes")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"quickReplies"),Object(i.b)("td",{parentName:"tr",align:null},"Array","<","quickReply",">"),Object(i.b)("td",{parentName:"tr",align:null},"This property is not used in the text message. It should be set as ",Object(i.b)("strong",{parentName:"td"},'"quickReplies" : []')),Object(i.b)("td",{parentName:"tr",align:null},"Yes")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"quickRepliesV2"),Object(i.b)("td",{parentName:"tr",align:null},"Array","<","quickReplyV2",">"),Object(i.b)("td",{parentName:"tr",align:null},"This property is not used in the text message. It should be set as ",Object(i.b)("strong",{parentName:"td"},'"quickRepliesV2" : []')),Object(i.b)("td",{parentName:"tr",align:null},"Yes")))),Object(i.b)("h2",{id:"response"},"Response"),Object(i.b)("p",null,"Successful API requests return the json object with the answer code  ",Object(i.b)("strong",{parentName:"p"},"http-2XX"),".",Object(i.b)("br",{parentName:"p"}),"\n","Response JSON object will have recipient id and message id properties.\nRecipient id will be the DLG user id. And message id will be the message id that is given with the request.\nIf the request has not have any message id, DLG will create a message id and add it to response."),Object(i.b)("h3",{id:"response-details"},"Response Details"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Property"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)(d,{mdxType:"GreenColoredText"},"recipient_id")),Object(i.b)("td",{parentName:"tr",align:null},"String"),Object(i.b)("td",{parentName:"tr",align:null},"DLG user id.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)(d,{mdxType:"GreenColoredText"},"message_id")),Object(i.b)("td",{parentName:"tr",align:null},"String"),Object(i.b)("td",{parentName:"tr",align:null},"It is the id of the message sent to the user. If you have given a messageId in the request, this id will be sent back to you in this field. If you have not provided an id, the unique id created in the DLG system returns from this field.")))),Object(i.b)("p",null,"Sample response"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n   "recipient_id": "2074022437",\n   "message_id": "-7523925115459309081"\n}\n')))}O.isMDXComponent=!0}}]);