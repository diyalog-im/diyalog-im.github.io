(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{142:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"Highlight",(function(){return b})),n.d(t,"HighlightWithBlack",(function(){return o})),n.d(t,"ColoredText",(function(){return c})),n.d(t,"CenteredText",(function(){return d})),n.d(t,"GreenColoredText",(function(){return u})),n.d(t,"BlueColoredText",(function(){return p})),n.d(t,"rightToc",(function(){return O})),n.d(t,"default",(function(){return m}));var a=n(1),r=n(9),i=(n(197),n(196)),l=(n(199),{id:"diyalog-messaging-api-textmessage",title:"Text Message",sidebar_label:"Text Message"}),s={id:"diyalog-messaging-api-textmessage",title:"Text Message",description:"export const Highlight = ({children, color}) => (",source:"@site/../docs/diyalog-messaging-api-textmessage.md",permalink:"/docs/diyalog-messaging-api-textmessage",sidebar_label:"Text Message",sidebar:"docs",previous:{title:"SendMessage API",permalink:"/docs/diyalog-messaging-api-sendmessage-api"},next:{title:"Quick Replies Template",permalink:"/docs/diyalog-messaging-api-quickreplies"}},b=function(e){var t=e.children,n=e.color;return Object(i.b)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},o=function(e){var t=e.children,n=e.color;return Object(i.b)("span",{style:{backgroundColor:n,borderRadius:"2px",padding:"0.2rem"}},t)},c=function(e){var t=e.children,n=e.color;return Object(i.b)("span",{style:{color:n}},t)},d=function(e){var t=e.children;return Object(i.b)("span",{style:{align:"center"}},t)},u=function(e){var t=e.children;return Object(i.b)("span",{style:{color:"#42b72a"}},t)},p=function(e){var t=e.children;return Object(i.b)("span",{style:{color:"#1877F2"}},t)},O=[{value:"Request URI",id:"request-uri",children:[]},{value:"Request Details",id:"request-details",children:[{value:"<GreenColoredText>recipient</GreenColoredText>",id:"greencoloredtextrecipientgreencoloredtext",children:[]},{value:"<GreenColoredText>message</GreenColoredText>",id:"greencoloredtextmessagegreencoloredtext",children:[]}]},{value:"Response",id:"response",children:[{value:"Response Details",id:"response-details",children:[]}]}],j={Highlight:b,HighlightWithBlack:o,ColoredText:c,CenteredText:d,GreenColoredText:u,BlueColoredText:p,rightToc:O};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},j,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"You can send text messages to your user."),Object(i.b)("h2",{id:"request-uri"},"Request URI"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"https://<DIYALOG-SERVER-API-ENDPOINT>/v1/bots/sendmessage/<YOUR-BOT-ACCESS-TOKEN>\n")),Object(i.b)("h4",{id:"example-request"},"Example Request"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-powershell"}),'curl -X POST -H "Content-Type: application/json" -d \'{\n    "recipient": {\n     "appCustomerId": "1231232"\n    },\n    "message": {\n        "messageId": "messageId-1",\n        "text" : "Hello world !",\n        "quickReplies" : [],\n        "quickRepliesV2" : []\n    }\n}\' "https://<DIYALOG-SERVER-API-ENDPOINT>/v1/bots/sendmessage/<YOUR-BOT-ACCESS-TOKEN>"\n')),Object(i.b)("h2",{id:"request-details"},"Request Details"),Object(i.b)("h3",{id:"greencoloredtextrecipientgreencoloredtext"},Object(i.b)(u,{mdxType:"GreenColoredText"},"recipient")),Object(i.b)("p",null,"You can pass the user information you want to send the message to api in the ",Object(i.b)(u,{mdxType:"GreenColoredText"},"recipient")," object."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Property"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Mandatory"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)(u,{mdxType:"GreenColoredText"},"appCustomerId")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"String"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Customer id in your system"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Optional")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)(u,{mdxType:"GreenColoredText"},"appStaffId")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"String"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Your staff id."),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Optional")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)(u,{mdxType:"GreenColoredText"},"id")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"String"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Unique DLG user id."),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Optional")))),Object(i.b)("p",null,"You can pass the the user information that will receive your message with this object.\nYour request should only have one of the properties that ",Object(i.b)(u,{mdxType:"GreenColoredText"},"appCustomerId"),", ",Object(i.b)(u,{mdxType:"GreenColoredText"},"appStaffId")," or ",Object(i.b)(u,{mdxType:"GreenColoredText"},"id"),"."),Object(i.b)("p",null,"There are two unique id for a single user in the DLG platform One of them is DLG user id.\nThis id is created randomly when user registering to the system.\nBesides of this id,  according to the user type, one of the customer id or staff id are stored for the user in DLG."),Object(i.b)("p",null,"As a result, you can use one of the customer id or staff id and DLG id in order to send message."),Object(i.b)("p",null,"If you know the DLG user id, you can use it for customor or staff."),Object(i.b)("p",null,"Using customer id and staff id is more applicable than using DLG user id. Because if you want to use DLG id, you should store all DLG user ids in your system."),Object(i.b)("h3",{id:"greencoloredtextmessagegreencoloredtext"},Object(i.b)(u,{mdxType:"GreenColoredText"},"message")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Property"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Mandatory"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"messageId"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"String"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"This is a unique id of your message. You should create it in your system and send it to api. If you don't create and sent it to api DLG will create it for you and send it to you in the response of your request. DLG platfrom will feed the events of the messages to your system by this id. You can use it to differenciate events by this id. Therefore, this id is important for following all events of your message by your system."),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Optional")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"text"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"String"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Text that will send to your user."),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Yes")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"quickReplies"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Array","<","quickReply",">"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"This property is not used in the text message. It should be set as ",Object(i.b)("strong",{parentName:"td"},'"quickReplies" : []')),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Yes")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"quickRepliesV2"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Array","<","quickReplyV2",">"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"This property is not used in the text message. It should be set as ",Object(i.b)("strong",{parentName:"td"},'"quickRepliesV2" : []')),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Yes")))),Object(i.b)("h2",{id:"response"},"Response"),Object(i.b)("p",null,"Successful API requests return the json object with the answer code  ",Object(i.b)("strong",{parentName:"p"},"http-2XX"),".",Object(i.b)("br",{parentName:"p"}),"\n","Response JSON object will have recipient id and message id properties.\nRecipient id will be the DLG user id. And message id will be the message id that is given with the request.\nIf the request has not have any message id, DLG will create a message id and add it to response."),Object(i.b)("h3",{id:"response-details"},"Response Details"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Property"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)(u,{mdxType:"GreenColoredText"},"recipient_id")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"String"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"DLG user id.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)(u,{mdxType:"GreenColoredText"},"message_id")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"String"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"It is the id of the message sent to the user. If you have given a messageId in the request, this id will be sent back to you in this field. If you have not provided an id, the unique id created in the DLG system returns from this field.")))),Object(i.b)("p",null,"Sample response"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n   "recipient_id": "2074022437",\n   "message_id": "-7523925115459309081"\n}\n')))}m.isMDXComponent=!0},198:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(50);t.default=function(){return Object(a.useContext)(r.a)}},199:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n(200);var a=n(198);function r(e){var t=(Object(a.default)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},200:function(e,t,n){"use strict";var a=n(17),r=n(36),i=n(201),l="".startsWith;a(a.P+a.F*n(202)("startsWith"),"String",{startsWith:function(e){var t=i(this,e,"startsWith"),n=r(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),a=String(e);return l?l.call(t,a,n):t.slice(n,n+a.length)===a}})},201:function(e,t,n){var a=n(69),r=n(23);e.exports=function(e,t,n){if(a(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(r(e))}},202:function(e,t,n){var a=n(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[a]=!1,!"/./"[e](t)}catch(r){}}return!0}}}]);