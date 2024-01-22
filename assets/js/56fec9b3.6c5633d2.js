(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{157:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},c=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,m=c["".concat(o,".").concat(d)]||c[d]||u[d]||l;return n?r.a.createElement(m,b(b({ref:t},s),{},{components:n})):r.a.createElement(m,b({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var b={};for(var i in t)hasOwnProperty.call(t,i)&&(b[i]=t[i]);b.originalType=e,b.mdxType="string"==typeof e?e:a,o[1]=b;for(var s=2;s<l;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},158:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return o}));var a=n(16),r=n(159);function l(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(a.default)();return{withBaseUrl:(n,a)=>function(e,t,n,{forcePrependBaseUrl:a=!1,absolute:l=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(a)return t+n;const o=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+o:o}(t,e,n,a)}}function o(e,t={}){const{withBaseUrl:n}=l();return n(e,t)}},159:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},98:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return i})),n.d(t,"Highlight",(function(){return s})),n.d(t,"HighlightWithBlack",(function(){return p})),n.d(t,"ColoredText",(function(){return c})),n.d(t,"CenteredText",(function(){return u})),n.d(t,"GreenColoredText",(function(){return d})),n.d(t,"BlueColoredText",(function(){return m})),n.d(t,"toc",(function(){return g})),n.d(t,"default",(function(){return O}));var a=n(3),r=n(7),l=(n(0),n(157)),o=n(158),b={id:"diyalog-messaging-api-buttontemplate",title:"Button Template Message",sidebar_label:"Button Template"},i={unversionedId:"diyalog-messaging-api-buttontemplate",id:"diyalog-messaging-api-buttontemplate",isDocsHomePage:!1,title:"Button Template Message",description:"<span",source:"@site/../docs/diyalog-messaging-api-buttontemplate.md",slug:"/diyalog-messaging-api-buttontemplate",permalink:"/docs/diyalog-messaging-api-buttontemplate",version:"current",sidebar_label:"Button Template",sidebar:"docs",previous:{title:"Generic Template Message",permalink:"/docs/diyalog-messaging-api-generictemplate"},next:{title:"Trigger App Message",permalink:"/docs/diyalog-messaging-api-triggerappmessage"}},s=function(e){var t=e.children,n=e.color;return Object(l.b)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},p=function(e){var t=e.children,n=e.color;return Object(l.b)("span",{style:{backgroundColor:n,borderRadius:"2px",padding:"0.2rem"}},t)},c=function(e){var t=e.children,n=e.color;return Object(l.b)("span",{style:{color:n}},t)},u=function(e){var t=e.children;return Object(l.b)("span",{style:{align:"center"}},t)},d=function(e){var t=e.children;return Object(l.b)("span",{style:{color:"#42b72a"}},t)},m=function(e){var t=e.children;return Object(l.b)("span",{style:{color:"#1877F2"}},t)},g=[{value:"Request URI",id:"request-uri",children:[]},{value:"Request Details",id:"request-details",children:[{value:"<GreenColoredText>recipient</GreenColoredText>",id:"recipient",children:[]},{value:"<GreenColoredText>message</GreenColoredText>",id:"message",children:[]},{value:"<GreenColoredText>attachment</GreenColoredText>",id:"attachment",children:[]},{value:"<GreenColoredText>payload</GreenColoredText>",id:"payload",children:[]},{value:"<GreenColoredText>buttonV2</GreenColoredText>",id:"buttonv2",children:[]}]},{value:"Response",id:"response",children:[]}],h={Highlight:s,HighlightWithBlack:p,ColoredText:c,CenteredText:u,GreenColoredText:d,BlueColoredText:m,toc:g};function O(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},h,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"The button template allows you to send a structured message that includes text and buttons."),Object(l.b)("p",null,"The button template sends a text message with up to three attached buttons. This template is useful for offering the message recipient options to choose from, such as pre-determined responses to a question, or actions to take."),Object(l.b)("img",{alt:"",src:Object(o.a)("img/messagingAPI/buttontemplate.png"),height:"150px"}),Object(l.b)("h2",{id:"request-uri"},"Request URI"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},"https://<DIYALOG-SERVER-API-ENDPOINT>/v1/bots/sendmessage/<YOUR-BOT-ACCESS-TOKEN>\n")),Object(l.b)("h4",{id:"example-request"},"Example Request"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-powershell"},'curl -X POST -H "Content-Type: application/json" -d \'{\n   "recipient": {\n     "appCustomerId": "123456789"\n   },\n   "message": {\n    "messageId":"messageId-1",\n     "attachment": {\n       "type": "template",\n       "payload": {\n         "templateType": "button",\n         "text" : "How can I help you?",\n         "messageId":"messageId-1",\n         "buttons" : [],\n         "buttonsV2" : [\n            {\n                "type" :"postback",\n                "title" : "Send Me Receipt",\n                "payload" : "211",\n                "payloadHidden" : true,\n                "payloadSeenByUser" : "Send me receipt"\n            },\n            {\n                "type" :"postback",\n                "title" : "Cancel Transaction",\n                "payload" : "211",\n                "payloadHidden" : true,\n                "payloadSeenByUser" : "Cancel my transaction"\n            },\n            {\n                "type" :"web_url",\n                "title" : "New Transaction",\n                "payload" : "https://dlgmessenger.com"\n            }\n        ],\n        "elements" : []\n       }\n     },\n     "quickReplies" : [],\n     "quickRepliesV2" : []\n   }\n}\' "https://<DIYALOG-SERVER-API-ENDPOINT>/v1/bots/sendmessage/<YOUR-BOT-ACCESS-TOKEN>"\n')),Object(l.b)("h2",{id:"request-details"},"Request Details"),Object(l.b)("h3",{id:"recipient"},Object(l.b)(d,{mdxType:"GreenColoredText"},"recipient")),Object(l.b)("p",null,"You can pass the user information you want to send the message to api in the ",Object(l.b)(d,{mdxType:"GreenColoredText"},"recipient")," object."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Property"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Mandatory"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)(d,{mdxType:"GreenColoredText"},"appCustomerId")),Object(l.b)("td",{parentName:"tr",align:null},"String"),Object(l.b)("td",{parentName:"tr",align:null},"Customer id in your system"),Object(l.b)("td",{parentName:"tr",align:null},"Optional")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)(d,{mdxType:"GreenColoredText"},"appStaffId")),Object(l.b)("td",{parentName:"tr",align:null},"String"),Object(l.b)("td",{parentName:"tr",align:null},"Your staff id."),Object(l.b)("td",{parentName:"tr",align:null},"Optional")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)(d,{mdxType:"GreenColoredText"},"id")),Object(l.b)("td",{parentName:"tr",align:null},"String"),Object(l.b)("td",{parentName:"tr",align:null},"Unique DLG user id."),Object(l.b)("td",{parentName:"tr",align:null},"Optional")))),Object(l.b)("p",null,"You can pass the the user information that will receive your message with this object.\nYour request should only have one of the properties that ",Object(l.b)(d,{mdxType:"GreenColoredText"},"appCustomerId"),", ",Object(l.b)(d,{mdxType:"GreenColoredText"},"appStaffId")," or ",Object(l.b)(d,{mdxType:"GreenColoredText"},"id"),"."),Object(l.b)("p",null,"There are two unique id for a single user in the DLG platform One of them is DLG user id.\nThis id is created randomly when user registering to the system.\nBesides of this id,  according to the user type, one of the customer id or staff id are stored for the user in DLG."),Object(l.b)("p",null,"As a result, you can use one of the customer id or staff id and DLG id in order to send message."),Object(l.b)("p",null,"If you know the DLG user id, you can use it for customor or staff."),Object(l.b)("p",null,"Using customer id and staff id is more applicable than using DLG user id. Because if you want to use DLG id, you should store all DLG user ids in your system."),Object(l.b)("h3",{id:"message"},Object(l.b)(d,{mdxType:"GreenColoredText"},"message")),Object(l.b)("p",null,"The content of the Button Template message can be given in the ",Object(l.b)("strong",{parentName:"p"},"attachment")," property instead of ",Object(l.b)("strong",{parentName:"p"},"text")," propeperty to the api. "),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"quickReplies")," and ",Object(l.b)("strong",{parentName:"p"},"quicRepliesV2")," properties are not applicable for this template. Therefore, the values of them should be set as empty array."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Property"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Mandatory"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"messageId"),Object(l.b)("td",{parentName:"tr",align:null},"String"),Object(l.b)("td",{parentName:"tr",align:null},"This is a unique id of your message. You should create it in your system and send it to api. If you don't create and sent it to api DLG will create it for you and send it to you in the response of your request. DLG platfrom will feed the events of the messages to your system by this id. You can use it to differenciate events by this id. Therefore, this id is important for following all events of your message by your system."),Object(l.b)("td",{parentName:"tr",align:null},"Optional")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"attachment"),Object(l.b)("td",{parentName:"tr",align:null},"Object"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"#greencoloredtextattachmentgreencoloredtext"},"attachment")," object that has content of the message."),Object(l.b)("td",{parentName:"tr",align:null},"Yes")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"quickReplies"),Object(l.b)("td",{parentName:"tr",align:null},"Array","<","quickReply",">"),Object(l.b)("td",{parentName:"tr",align:null},"It should be set as empty array. (",Object(l.b)("strong",{parentName:"td"},'"quickReplies" : []'),")"),Object(l.b)("td",{parentName:"tr",align:null},"Yes")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"quickRepliesV2"),Object(l.b)("td",{parentName:"tr",align:null},"Array","<","quickReplyV2",">"),Object(l.b)("td",{parentName:"tr",align:null},"It should be set as empty array. (",Object(l.b)("strong",{parentName:"td"},'"quickRepliesV2" : []'),")"),Object(l.b)("td",{parentName:"tr",align:null},"Yes")))),Object(l.b)("h3",{id:"attachment"},Object(l.b)(d,{mdxType:"GreenColoredText"},"attachment")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"attachment")," is the property that has content of the messages other then text messages. "),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Property"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Mandatory"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"type"),Object(l.b)("td",{parentName:"tr",align:null},"String"),Object(l.b)("td",{parentName:"tr",align:null},"It should be set as ",Object(l.b)("strong",{parentName:"td"},'"template"')),Object(l.b)("td",{parentName:"tr",align:null},"Yes")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"payload"),Object(l.b)("td",{parentName:"tr",align:null},"Object"),Object(l.b)("td",{parentName:"tr",align:null},"The ",Object(l.b)("a",{parentName:"td",href:"#greencoloredtextpayloadgreencoloredtext"},"payload")," of the Button template message content."),Object(l.b)("td",{parentName:"tr",align:null},"Yes")))),Object(l.b)("h3",{id:"payload"},Object(l.b)(d,{mdxType:"GreenColoredText"},"payload")),Object(l.b)("p",null,"It is the ",Object(l.b)("strong",{parentName:"p"},"payload")," that contains content of the button template messsage."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Property"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Mandatory"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"templateType"),Object(l.b)("td",{parentName:"tr",align:null},"String"),Object(l.b)("td",{parentName:"tr",align:null},"It should be set as ",Object(l.b)("strong",{parentName:"td"},'"button"')," ."),Object(l.b)("td",{parentName:"tr",align:null},"Yes")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"messageId"),Object(l.b)("td",{parentName:"tr",align:null},"String"),Object(l.b)("td",{parentName:"tr",align:null},"It is message id that received from the request of your message. When a button pressed in the Button Template message by user, this id will return to your application with the payload of the button. By this way, you will have an additional data that will help you find which button pressed."),Object(l.b)("td",{parentName:"tr",align:null},"Yes")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"text"),Object(l.b)("td",{parentName:"tr",align:null},"String"),Object(l.b)("td",{parentName:"tr",align:null},"Text of the message."),Object(l.b)("td",{parentName:"tr",align:null},"Yes")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"buttons"),Object(l.b)("td",{parentName:"tr",align:null},"Array","<","button",">"),Object(l.b)("td",{parentName:"tr",align:null},"It should be set as empty array. (",Object(l.b)("strong",{parentName:"td"},'"buttons" : []'),")"),Object(l.b)("td",{parentName:"tr",align:null},"Yes")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"buttonsV2"),Object(l.b)("td",{parentName:"tr",align:null},"Array<",Object(l.b)("a",{parentName:"td",href:"#greencoloredtextbuttonv2greencoloredtext"},"buttonV2"),">"),Object(l.b)("td",{parentName:"tr",align:null},"It is the array of the buttons. Button template message supports maximum 3 buttons. You can add maximum 3 button to the array."),Object(l.b)("td",{parentName:"tr",align:null},"Yes")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"elements"),Object(l.b)("td",{parentName:"tr",align:null},"Array","<","element",">"),Object(l.b)("td",{parentName:"tr",align:null},"It is not applicable for Button Template message. It should be sert as empty array (",Object(l.b)("strong",{parentName:"td"},'"elements" : []')," )."),Object(l.b)("td",{parentName:"tr",align:null},"Yes")))),Object(l.b)("h3",{id:"buttonv2"},Object(l.b)(d,{mdxType:"GreenColoredText"},"buttonV2")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Property"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Mandatory"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"type"),Object(l.b)("td",{parentName:"tr",align:null},"String"),Object(l.b)("td",{parentName:"tr",align:null},'Determines the behavior of the button when the button is pressed. There are two types, "postback" and "web_url".'),Object(l.b)("td",{parentName:"tr",align:null},"Yes")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"title"),Object(l.b)("td",{parentName:"tr",align:null},"String"),Object(l.b)("td",{parentName:"tr",align:null},"Title of the button."),Object(l.b)("td",{parentName:"tr",align:null},"Yes")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"payload"),Object(l.b)("td",{parentName:"tr",align:null},"String"),Object(l.b)("td",{parentName:"tr",align:null},"It is the payload of the button. If button type is ",Object(l.b)("strong",{parentName:"td"},'"postback"'),",  the value of this property will return to your application via webhook when pressed the button by the user. If button type is ",Object(l.b)("strong",{parentName:"td"},'"web_url"'),", the value of it should be a valid uri address. Because when pressed the button, this uri will be open in the user's device."),Object(l.b)("td",{parentName:"tr",align:null},"Yes")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"payloadHidden"),Object(l.b)("td",{parentName:"tr",align:null},"Boolean"),Object(l.b)("td",{parentName:"tr",align:null},"This property is applicable for postback type of button. If it is set as true, the payload of the button signed with your company's secret keys in the user's device, return to your application via webhook when user pressed the button."),Object(l.b)("td",{parentName:"tr",align:null},"Optional")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"payloadSeenByUser"),Object(l.b)("td",{parentName:"tr",align:null},"String"),Object(l.b)("td",{parentName:"tr",align:null},"The value of this property will be displayed in the chat screen of the user when pressed the button. If it does not set, the value of the payload will be displayed in the chat screen."),Object(l.b)("td",{parentName:"tr",align:null},"Optional")))),Object(l.b)(s,{color:"#da3d5f",mdxType:"Highlight"},"Important Note :"),Object(l.b)("p",null,"When user pressed a button in a message,  the value of the payload property will return to your application via webhook mechanism."),Object(l.b)("p",null,"If the value of the ",Object(l.b)("strong",{parentName:"p"},"payloadHidden")," is ",Object(l.b)("strong",{parentName:"p"},"true"),",\nthe payload of the button signed with your company's secret keys in the user's device,\nreturn to your application via webhook when user pressed the button.\nBy this way, you can be sure about the payload return from a valid device.\nSure, your application can decrypt and validate the signed payload."),Object(l.b)("p",null,"Another critical information is ",Object(l.b)(d,{mdxType:"GreenColoredText"},"messageId")," in the ",Object(l.b)("a",{parentName:"p",href:"(#greencoloredtextpayloadgreencoloredtext)%3E"},"payload"),"  object. It is important, because it is returned to your application together with payload when user pressed the button. By this way, you can determine which button pressed in which messsage."),Object(l.b)("p",null,"Message id will return with payload of the button to your application in the following format.",Object(l.b)("br",{parentName:"p"}),"\n",'"',"[","<","messageId",">","]:","<","payload",">",'" ( when payloadHidden is false)',Object(l.b)("br",{parentName:"p"}),"\n",'"',"[","<","messageId",">","]:","<","signed payload",">",'" ( when payloadHidden is true) '),Object(l.b)("h2",{id:"response"},"Response"),Object(l.b)("p",null,"Successful API requests return the json object with the answer code  ",Object(l.b)("strong",{parentName:"p"},"http-2XX"),".  "),Object(l.b)("p",null,"Sample response"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n   "recipient_id": "2074022437",\n   "message_id": "-7523925115459309081"\n}\n')))}O.isMDXComponent=!0}}]);