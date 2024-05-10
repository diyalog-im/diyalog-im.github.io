(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{158:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,m=c["".concat(l,".").concat(d)]||c[d]||u[d]||o;return n?r.a.createElement(m,i(i({ref:t},b),{},{components:n})):r.a.createElement(m,i({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var b=2;b<o;b++)l[b]=n[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},159:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return l}));var a=n(16),r=n(160);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(a.default)();return{withBaseUrl:(n,a)=>function(e,t,n,{forcePrependBaseUrl:a=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(a)return t+n;const l=n.startsWith(t)?n:t+n.replace(/^\//,"");return o?e+l:l}(t,e,n,a)}}function l(e,t={}){const{withBaseUrl:n}=o();return n(e,t)}},160:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},67:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"Highlight",(function(){return b})),n.d(t,"HighlightWithBlack",(function(){return p})),n.d(t,"ColoredText",(function(){return c})),n.d(t,"CenteredText",(function(){return u})),n.d(t,"GreenColoredText",(function(){return d})),n.d(t,"BlueColoredText",(function(){return m})),n.d(t,"toc",(function(){return g})),n.d(t,"default",(function(){return y}));var a=n(3),r=n(7),o=(n(0),n(158)),l=n(159),i={id:"diyalog-messaging-api-sendotp-api",title:"SendOTP API",sidebar_label:"SendOTP API"},s={unversionedId:"diyalog-messaging-api-sendotp-api",id:"diyalog-messaging-api-sendotp-api",isDocsHomePage:!1,title:"SendOTP API",description:"<span",source:"@site/../docs/diyalog-messaging-api-sendotp-api.md",slug:"/diyalog-messaging-api-sendotp-api",permalink:"/docs/diyalog-messaging-api-sendotp-api",version:"current",sidebar_label:"SendOTP API",sidebar:"docs",previous:{title:"Document Message",permalink:"/docs/diyalog-messaging-api-documentmessage"},next:{title:"Webhook",permalink:"/docs/webhook"}},b=function(e){var t=e.children,n=e.color;return Object(o.b)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},p=function(e){var t=e.children,n=e.color;return Object(o.b)("span",{style:{backgroundColor:n,borderRadius:"2px",padding:"0.2rem"}},t)},c=function(e){var t=e.children,n=e.color;return Object(o.b)("span",{style:{color:n}},t)},u=function(e){var t=e.children;return Object(o.b)("span",{style:{align:"center"}},t)},d=function(e){var t=e.children;return Object(o.b)("span",{style:{color:"#42b72a"}},t)},m=function(e){var t=e.children;return Object(o.b)("span",{style:{color:"#1877F2"}},t)},g=[{value:"Request URI",id:"request-uri",children:[]},{value:"Request Details",id:"request-details",children:[{value:"<GreenColoredText>buttonV2</GreenColoredText>",id:"buttonv2",children:[]}]},{value:"Response",id:"response",children:[]}],h={Highlight:b,HighlightWithBlack:p,ColoredText:c,CenteredText:u,GreenColoredText:d,BlueColoredText:m,toc:g};function y(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},h,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"If you want to send a one-time password (mobile confirmation code) to your users, you can use this api.\nUnder normal circumstances, you can send OTP to your users using the SendMessage api, but if you use this api,\notp messages that you send are logged in a separate databases and they can be analused when requested by admin users."),Object(o.b)("p",null,"Another advantage of sending otp messages with this api instead of SendMessage api is in the processing of the otp message\nin the mobile clients. DLG Mobile SDK will process the otp message and fire otp value to main application that use itself.\nBy this way, main application can use otp value automatically without need of any intervention by user."),Object(o.b)("p",null,"OTP messages can consist of text, images and buttons.\nIf you want you can send otp message that has only text, or text and image or text, buttons or text, image and buttons"),Object(o.b)("img",{alt:"",src:Object(l.a)("img/otpmessage.png"),height:"300px"}),Object(o.b)("h2",{id:"request-uri"},"Request URI"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"https://<DIYALOG-SERVER-API-ENDPOINT>/v1/bots/sendmok/<YOUR-BOT-ACCESS-TOKEN>\n")),Object(o.b)("h4",{id:"example-request"},"Example Request"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-powershell"},'curl -X POST -H "Content-Type: application/json" -d \'{\n    "customerNo": "123456789",\n    "messageId": "messageId-74",\n    "mokMessage": "Your one time password is \\"123456\\" ",\n    "mokValue": "33",\n    "imageUrl" : "https://dlgmessenger.com/otp.jpg",\n    "txCode": "LOG2",\n    "deviceId": "628FAF5A-B690-4E1A-A0EC-1518A6334F0B",\n    "buttonsV2" : \n     [\n             {\n                "type" :"postback",\n                "title" : "Approve",\n                "payload" : "123456",\n                "payloadHidden" : true,\n                "payloadSeenByUser": "Onayl\u0131yorum"\n            },\n             {\n                "type" :"postback",\n                "title" : "Dismiss",\n                "payload" : "cancelled",\n                "payloadSeenByUser": "\u0130ptal Edildi"\n            }\n        ]\n}\' "https://<DIYALOG-SERVER-API-ENDPOINT>/v1/bots/sendmok/<YOUR-BOT-ACCESS-TOKEN>"\n')),Object(o.b)("h2",{id:"request-details"},"Request Details"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Property"),Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Description"),Object(o.b)("th",{parentName:"tr",align:null},"Mandatory"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"customerNo"),Object(o.b)("td",{parentName:"tr",align:null},"String"),Object(o.b)("td",{parentName:"tr",align:null},"It is the customer id that you want to send otp message."),Object(o.b)("td",{parentName:"tr",align:null},"Yes")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"messageId"),Object(o.b)("td",{parentName:"tr",align:null},"String"),Object(o.b)("td",{parentName:"tr",align:null},"It is message id that received from the request of your message. When a button pressed in the Button Template message by user, this id will return to your application with the payload of the button. By this way, you will have an additional data that will help you find which button pressed."),Object(o.b)("td",{parentName:"tr",align:null},"Yes")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"mokMessage"),Object(o.b)("td",{parentName:"tr",align:null},"String"),Object(o.b)("td",{parentName:"tr",align:null},"It is the otp message text."),Object(o.b)("td",{parentName:"tr",align:null},"Yes")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"mokValue"),Object(o.b)("td",{parentName:"tr",align:null},"String"),Object(o.b)("td",{parentName:"tr",align:null},"It is the value of the otp. This property will be used to fire otp value as event to the main mobile application that use DLG mobile SDK."),Object(o.b)("td",{parentName:"tr",align:null},"Optional")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"imageUrl"),Object(o.b)("td",{parentName:"tr",align:null},"String"),Object(o.b)("td",{parentName:"tr",align:null},"If you want to add an image to your otp message, you can give the uri address of your image to this field."),Object(o.b)("td",{parentName:"tr",align:null},"Optional")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"txCode"),Object(o.b)("td",{parentName:"tr",align:null},"String"),Object(o.b)("td",{parentName:"tr",align:null},"This property is helpfull for logging the otp messages according to transaction code that otp send for. This property is only used for analysis."),Object(o.b)("td",{parentName:"tr",align:null},"Optional")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"deviceId"),Object(o.b)("td",{parentName:"tr",align:null},"String"),Object(o.b)("td",{parentName:"tr",align:null},"This property is helpfull for logging the otp messages according to users's mobile device id that otp send for. This property is only used for analysis."),Object(o.b)("td",{parentName:"tr",align:null},"Optional")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"buttonsV2"),Object(o.b)("td",{parentName:"tr",align:null},"Array<",Object(o.b)("a",{parentName:"td",href:"#greencoloredtextbuttonv2greencoloredtext"},"buttonV2"),">"),Object(o.b)("td",{parentName:"tr",align:null},"You can add buttons like confirm or cancel to your OTP message by this property. With these buttons, the user can automatically receive confirmation to your otp messages."),Object(o.b)("td",{parentName:"tr",align:null},"Optional")))),Object(o.b)("h3",{id:"buttonv2"},Object(o.b)(d,{mdxType:"GreenColoredText"},"buttonV2")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Property"),Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Description"),Object(o.b)("th",{parentName:"tr",align:null},"Mandatory"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"type"),Object(o.b)("td",{parentName:"tr",align:null},"String"),Object(o.b)("td",{parentName:"tr",align:null},'Determines the behavior of the button when the button is pressed. There are two types, "postback" and "web_url".'),Object(o.b)("td",{parentName:"tr",align:null},"Yes")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"title"),Object(o.b)("td",{parentName:"tr",align:null},"String"),Object(o.b)("td",{parentName:"tr",align:null},"Title of the button."),Object(o.b)("td",{parentName:"tr",align:null},"Yes")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"payload"),Object(o.b)("td",{parentName:"tr",align:null},"String"),Object(o.b)("td",{parentName:"tr",align:null},"It is the payload of the button. If button type is ",Object(o.b)("strong",{parentName:"td"},'"postback"'),",  the value of this property will return to your application via webhook when pressed the button by the user. If button type is ",Object(o.b)("strong",{parentName:"td"},'"web_url"'),", the value of it should be a valid uri address. Because when pressed the button, this uri will be open in the user's device."),Object(o.b)("td",{parentName:"tr",align:null},"Yes")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"payloadHidden"),Object(o.b)("td",{parentName:"tr",align:null},"Boolean"),Object(o.b)("td",{parentName:"tr",align:null},"This property is applicable for postback type of button. If it is set as true, the payload of the button signed with your company's secret keys in the user's device, return to your application via webhook when user pressed the button."),Object(o.b)("td",{parentName:"tr",align:null},"Optional")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"payloadSeenByUser"),Object(o.b)("td",{parentName:"tr",align:null},"String"),Object(o.b)("td",{parentName:"tr",align:null},"The value of this property will be displayed in the chat screen of the user when pressed the button. If it does not set, the value of the payload will be displayed in the chat screen."),Object(o.b)("td",{parentName:"tr",align:null},"Optional")))),Object(o.b)(b,{color:"#da3d5f",mdxType:"Highlight"},"Important Note :"),Object(o.b)("p",null,"When user pressed a button in a message,  the value of the payload property will return to your application via webhook mechanism."),Object(o.b)("p",null,"If the value of the ",Object(o.b)("strong",{parentName:"p"},"payloadHidden")," is ",Object(o.b)("strong",{parentName:"p"},"true"),",\nthe payload of the button signed with your company's secret keys in the user's device,\nreturn to your application via webhook when user pressed the button.\nBy this way, you can be sure about the payload return from a valid device.\nSure, your application can decrypt and validate the signed payload."),Object(o.b)("p",null,"Another critical information is ",Object(o.b)(d,{mdxType:"GreenColoredText"},"messageId")," in the ",Object(o.b)("a",{parentName:"p",href:"(#greencoloredtextpayloadgreencoloredtext)%3E"},"payload"),"  object. It is important, because it is returned to your application together with payload when user pressed the button. By this way, you can determine which button pressed in which messsage."),Object(o.b)("p",null,"Message id will return with payload of the button to your application in the following format.",Object(o.b)("br",{parentName:"p"}),"\n",'"',"[","<","messageId",">","]:","<","payload",">",'" ( when payloadHidden is false)',Object(o.b)("br",{parentName:"p"}),"\n",'"',"[","<","messageId",">","]:","<","signed payload",">",'" ( when payloadHidden is true) '),Object(o.b)("h2",{id:"response"},"Response"),Object(o.b)("p",null,"Successful API requests return the json object with the answer code  ",Object(o.b)("strong",{parentName:"p"},"http-2XX"),".  "),Object(o.b)("p",null,"Sample response"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n   "recipient_id": "2074022437",\n   "message_id": "-7523925115459309081"\n}\n')))}y.isMDXComponent=!0}}]);