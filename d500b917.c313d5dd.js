(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{187:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return b})),n.d(t,"Highlight",(function(){return s})),n.d(t,"HighlightWithBlack",(function(){return c})),n.d(t,"ColoredText",(function(){return i})),n.d(t,"CenteredText",(function(){return d})),n.d(t,"GreenColoredText",(function(){return p})),n.d(t,"BlueColoredText",(function(){return u})),n.d(t,"rightToc",(function(){return m})),n.d(t,"default",(function(){return O}));var a=n(1),r=n(9),o=(n(198),n(197)),l=(n(200),{id:"diyalog-messaging-api-sendmessage-api",title:"SendMessage API",sidebar_label:"SendMessage API"}),b={id:"diyalog-messaging-api-sendmessage-api",title:"SendMessage API",description:"export const Highlight = ({children, color}) => (",source:"@site/../docs/diyalog-messaging-api-sendmessage-api.md",permalink:"/docs/diyalog-messaging-api-sendmessage-api",sidebar_label:"SendMessage API",sidebar:"docs",previous:{title:"Overview",permalink:"/docs/diyalog-messaging-api-overview"},next:{title:"Metin Mesaj\u0131",permalink:"/docs/diyalog-messaging-api-textmessage"}},s=function(e){var t=e.children,n=e.color;return Object(o.b)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},c=function(e){var t=e.children,n=e.color;return Object(o.b)("span",{style:{backgroundColor:n,borderRadius:"2px",padding:"0.2rem"}},t)},i=function(e){var t=e.children,n=e.color;return Object(o.b)("span",{style:{color:n}},t)},d=function(e){var t=e.children;return Object(o.b)("span",{style:{align:"center"}},t)},p=function(e){var t=e.children;return Object(o.b)("span",{style:{color:"#42b72a"}},t)},u=function(e){var t=e.children;return Object(o.b)("span",{style:{color:"#1877F2"}},t)},m=[{value:"Request URI",id:"request-uri",children:[]},{value:"Example Request",id:"example-request",children:[]},{value:"Request Details",id:"request-details",children:[{value:"<GreenColoredText>recipient</GreenColoredText>",id:"greencoloredtextrecipientgreencoloredtext",children:[]},{value:"<GreenColoredText>message</GreenColoredText>",id:"greencoloredtextmessagegreencoloredtext",children:[]},{value:"<GreenColoredText>attachment</GreenColoredText>",id:"greencoloredtextattachmentgreencoloredtext",children:[]}]},{value:"Response",id:"response",children:[{value:"Response Details",id:"response-details",children:[]}]}],j={Highlight:s,HighlightWithBlack:c,ColoredText:i,CenteredText:d,GreenColoredText:p,BlueColoredText:u,rightToc:m};function O(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},j,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"You can send text, image, video, voice, file and structured messages to your users by using SendMessage API."),Object(o.b)("h2",{id:"request-uri"},"Request URI"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"https://<DIYALOG-SERVER-API-ENDPOINT>/v1/bots/v1/bots/sendmessage/<YOUR-BOT-ACCESS-TOKEN>\n")),Object(o.b)("p",null,"DIYALOG-SERVER-API-ENDPOINT : It is the api endpoint address of the DLG server. We can give ",Object(o.b)(p,{mdxType:"GreenColoredText"},"api.dlgmessenger.com")," as an example.   "),Object(o.b)("p",null,"YOUR-BOT-ACCESS-TOKEN : You can only send all type of messages to you users via ",Object(o.b)(p,{mdxType:"GreenColoredText"},"bot"),"  user that created by admin of the platform.\nIf you want you can send messages to your users  from all of your applications via one bot,\nor you can send them via different bots regarding as your applications functionality.\nThe user will seee the bot that created for you as a standart user in their mobile or web clients. You can do messaging via this bot.\nEvery created bot has an unique access token. You should take it from the DLG admin and add it to the end of the SendMessage api uri request.\nWhen DLG server receive your api request, it will get token from the request and check it and find the bot information.\nThen It send your message to the user as if this bot user.",Object(o.b)("br",{parentName:"p"}),"\n","This token is an access token and it should be private and store safely.\nIf it can be accessed by unauthorized people, they can send message to your users as you.\nTherefore it should be store safely."),Object(o.b)("h2",{id:"example-request"},"Example Request"),Object(o.b)("p",null,"You can see below  as an example http request that can run with ",Object(o.b)(p,{mdxType:"GreenColoredText"},"curl")," command."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-powershell",metastring:"{10}","{10}":!0}),'curl -X POST -H "Content-Type: application/json" -d \'{\n    "recipient":    {\n        "appCustomerId":"1231231"\n    },\n    "message":{\n        "text":"hello world",\n        "messageId": "msg-id-123-112233"\n        "quick_replies":[]\n    }\n}\' "https://api.dlgmessenger.com/v1/bots/sendmessage/c2dc9bf3e0c3218e9ab22b56002e4644"\n')),Object(o.b)("p",null,"Easyly seen in the request, ",Object(o.b)(p,{mdxType:"GreenColoredText"},"https",Object(o.b)("span",null,"://"),"api.dlgmessenger.com/v1/bots/sendmessage/c2dc9bf3e0c3218e9ab22b56002e4644")," is the URI of the request.\nIt can be also seen that an ",Object(o.b)(p,{mdxType:"GreenColoredText"},"JSON")," obejct is is sending with ",Object(o.b)(p,{mdxType:"GreenColoredText"},"POST")," method in the curl command. "),Object(o.b)("p",null,"If we analyse the endpoint address;",Object(o.b)("br",{parentName:"p"}),"\n","Api Server : ",Object(o.b)(u,{mdxType:"BlueColoredText"},"api.dlgmessenger.com"),Object(o.b)("br",{parentName:"p"}),"\n","Api Name   : ",Object(o.b)(u,{mdxType:"BlueColoredText"},"/v1/bots/sendmessage/"),Object(o.b)("br",{parentName:"p"}),"\n","Bot Token  : ",Object(o.b)(u,{mdxType:"BlueColoredText"},"c2dc9bf3e0c3218e9ab22b56002e4644")),Object(o.b)("h2",{id:"request-details"},"Request Details"),Object(o.b)("p",null,"Api request has two properties. Both of these properties are objects that has self properties. ",Object(o.b)(p,{mdxType:"GreenColoredText"},"recipient")," is object that\ndefine the recipient of the message and ",Object(o.b)(p,{mdxType:"GreenColoredText"},"message")," is another object that define the content of the message."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Property"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Mandatory"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)(p,{mdxType:"GreenColoredText"},"recipient")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Object"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"#greencoloredtextrecipientgreencoloredtext"}),"recipient")," object"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Evet")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)(p,{mdxType:"GreenColoredText"},"message")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Object"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Content of the message - (",Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"#greencoloredtextmessagegreencoloredtext"}),"message")," object)"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Evet")))),Object(o.b)("p",null,"The ",Object(o.b)(u,{mdxType:"BlueColoredText"},"JSON")," that has two object defined in the above should be send to server with ",Object(o.b)(u,{mdxType:"BlueColoredText"},"POST")," method. "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "recipient":{\n    ...\n  },\n  "message":{\n    ...\n  }\n}\n')),Object(o.b)("h3",{id:"greencoloredtextrecipientgreencoloredtext"},Object(o.b)(p,{mdxType:"GreenColoredText"},"recipient")),Object(o.b)("p",null,"You can pass the user information you want to send the message to api in the ",Object(o.b)(p,{mdxType:"GreenColoredText"},"recipient")," object."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Property"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Tip"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"A\xe7\u0131klama"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Zorunlu Alan"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)(p,{mdxType:"GreenColoredText"},"appCustomerId")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"String"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Customer id in your system"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Opsiyonel")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)(p,{mdxType:"GreenColoredText"},"appStaffId")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"String"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Your staff id."),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Opsiyonel")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)(p,{mdxType:"GreenColoredText"},"id")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"String"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Unique DLG user id."),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Opsiyonel")))),Object(o.b)("p",null,"You can pass the the user information that will receive your message with this object.\nYour request should only have one of the properties that ",Object(o.b)(p,{mdxType:"GreenColoredText"},"appCustomerId"),", ",Object(o.b)(p,{mdxType:"GreenColoredText"},"appStaffId")," or ",Object(o.b)(p,{mdxType:"GreenColoredText"},"id"),"."),Object(o.b)("p",null,"There are two unique id for a single user in the DLG platform One of them is DLG user id.\nThis id is created randomly when user registering to the system.\nBesides of this id,  according to the user type, one of the customer id or staff id are stored for the user in DLG."),Object(o.b)("p",null,"As a result, you can use one of the customer id or staff id and DLG id in order to send message."),Object(o.b)("p",null,"If you know the DLG user id, you can use it for customor or staff."),Object(o.b)("p",null,"Using customer id and staff id is more applicable than using DLG user id. Because if you want to use DLG id, you should store all DLG user ids in your system."),Object(o.b)("h5",{id:"sample-recipient-json-object"},"Sample recipient json object"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:"{2,3,4}","{2,3,4}":!0}),'{\n  "recipient": {\n    "appCustomerId": "123456789"\n  },\n  "message": {\n  ...\n  }\n} \n')),Object(o.b)("h3",{id:"greencoloredtextmessagegreencoloredtext"},Object(o.b)(p,{mdxType:"GreenColoredText"},"message")),Object(o.b)("p",null,"You should use message object for setting content of the message.  "),Object(o.b)(p,{mdxType:"GreenColoredText"},"message")," includes by ",Object(o.b)(p,{mdxType:"GreenColoredText"},"text"),", ",Object(o.b)(p,{mdxType:"GreenColoredText"},"attachment"),", ",Object(o.b)(p,{mdxType:"GreenColoredText"},"quickReplies"),", ",Object(o.b)(p,{mdxType:"GreenColoredText"},"quickRepliesV2")," properties. A message object can only have one of the ",Object(o.b)(p,{mdxType:"GreenColoredText"},"text")," or ",Object(o.b)(p,{mdxType:"GreenColoredText"},"attachment"),".",Object(o.b)("p",null,"You should only use ",Object(o.b)(p,{mdxType:"GreenColoredText"},"text")," property, when sending text message to your users.\nFor other type of message like media, image, picture, video, audio, file or template message,\nyou should use ",Object(o.b)(p,{mdxType:"GreenColoredText"},"attachment")," instead of ",Object(o.b)(p,{mdxType:"GreenColoredText"},"text"),"."),Object(o.b)("p",null,"You can add quick reply buttons to you messages by setting ",Object(o.b)(p,{mdxType:"GreenColoredText"},"quickRepliesV2")," property."),Object(o.b)("h5",{id:"sample-message-json-object"},"Sample message json object"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "recipient": {\n    ...\n  },\n  "message": {\n    "messageId" : "msg-id-123-1122-1111",\n    "text" :"hello world \xaf\\_(\u30c4)_/\xaf",\n    "quickReplies" : [],\n    "quickRepliesV2" : []\n  }\n}\n')),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Property"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Tip"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"A\xe7\u0131klama"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Zorunlu Alan"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)(i,{color:"#42b72a",mdxType:"ColoredText"},"messageId")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"String"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"This is a unique id of your message. You should create it in your system and send it to api. If you don't create and sent it to api DLG will create it for you and send it to you in the response of your request. DLG platfrom will feed the events of the messages to your system by this id. You can use it to differenciate events by this id. Therefore, this id is important for following all events of your message by your system."),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Opsiyonel")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)(i,{color:"#42b72a",mdxType:"ColoredText"},"text")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"String"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Text that will send to you users. You should only use ",Object(o.b)(p,{mdxType:"GreenColoredText"},"text")," property, when sending text message to your users."),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Opsiyonel")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)(i,{color:"#42b72a",mdxType:"ColoredText"},"attachment")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Object"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"(",Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"#greencoloredtextattachmentgreencoloredtext"}),"attachment")," Object) Contents of message  types other than text can be set with this property."),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Opsiyonel")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)(i,{color:"#42b72a",mdxType:"ColoredText"},"quickReplies")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Array","<","quickReply",">"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"This field is the old version, but since it is mandatory, it should be added to all requests as empty array like ",Object(o.b)("strong",{parentName:"td"},'"quickReplies": []')," ."),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Evet")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)(i,{color:"#42b72a",mdxType:"ColoredText"},"quickRepliesV2")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Array","<","quickReplyV2",">"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"New version of quickReplies property. You can use this property to add quick reply buttons to your text message."),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Evet")))),Object(o.b)(s,{color:"#da3d5f",mdxType:"Highlight"},"Note :"),Object(o.b)("p",null,"quickRepliesV2 is the new version of the quickReply property. New DLG mobile sdk is using new version of it. Therefore you should use it to add quick reply buttons to your message. But you should also need to add empty quickReplies property for each request due to mandatory property. Also you shhould add empty quickRepliesV2 property, although you don't want to add any button."),Object(o.b)("p",null,"If you don't add any of quickReplies or quickRepliesV2 property, you will receive ",Object(o.b)("strong",{parentName:"p"},"malformed request error"),"  from DLG server."),Object(o.b)("p",null,"You can see sample json object that is created for sending text message in below.\nDLG server will send ",Object(o.b)(s,{color:"#1877F2",mdxType:"Highlight"},"hello world"),"text message to customer\nwhose id is ",Object(o.b)(s,{color:"#1877F2",mdxType:"Highlight"},"123456789")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "recipient": {\n    "appCustomerId": "123456789"\n  },\n  "message": {\n    "messageId" : "msg-id-123-1122-1111",\n    "text" :"hello world",\n    "quickReplies" : [],\n    "quickRepliesV2" : []\n  }\n}\n')),Object(o.b)("h3",{id:"greencoloredtextattachmentgreencoloredtext"},Object(o.b)(p,{mdxType:"GreenColoredText"},"attachment")),Object(o.b)("p",null,"If you want to send message  types other than text, you should set ",Object(o.b)(p,{mdxType:"GreenColoredText"},"attachment")," instead of ",Object(o.b)(p,{mdxType:"GreenColoredText"},"text"),". "),Object(o.b)("p",null,"By setting ",Object(o.b)(p,{mdxType:"GreenColoredText"},"attachment")," property, you can send following types of message;"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Media messages : image, picture, audio, video and file"),Object(o.b)("li",{parentName:"ul"},"Template messages : generic template, button template")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Property"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Tip"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"A\xe7\u0131klama"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Zorunlu Alan"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)(p,{mdxType:"GreenColoredText"},"type")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"String"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"This property can be one of the  following values : ",Object(o.b)(p,{mdxType:"GreenColoredText"},'"template"'),Object(o.b)(p,{mdxType:"GreenColoredText"},'"image"'),", ",Object(o.b)(p,{mdxType:"GreenColoredText"},'"audio"'),", ",Object(o.b)(p,{mdxType:"GreenColoredText"},'"video"'),", ",Object(o.b)(p,{mdxType:"GreenColoredText"},'"file"')),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Evet")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)(p,{mdxType:"GreenColoredText"},"payload")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Object"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Content of the attachement. ",Object(o.b)(u,{mdxType:"BlueColoredText"},"payload")," object."),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Evet")))),Object(o.b)("h2",{id:"response"},"Response"),Object(o.b)("p",null,"Successful API requests return the json object with the answer code  ",Object(o.b)("strong",{parentName:"p"},"http-2XX"),".",Object(o.b)("br",{parentName:"p"}),"\n","Response JSON object will have recipient id and message id properties.\nRecipient id will be the DLG user id. And message id will be the message id that is given with the request.\nIf the request has not have any message id, DLG will create a message id and add it to response."),Object(o.b)("h3",{id:"response-details"},"Response Details"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Property"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Tip"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"A\xe7\u0131klama"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)(p,{mdxType:"GreenColoredText"},"recipient_id")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"String"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"DLG user id.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)(p,{mdxType:"GreenColoredText"},"message_id")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"String"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"It is the id of the message sent to the user. If you have given a messageId in the request, this id will be sent back to you in this field. If you have not provided an id, the unique id created in the DLG system returns from this field.")))),Object(o.b)("p",null,"Sample response"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n   "recipient_id": "2074022437",\n   "message_id": "-7523925115459309081"\n}\n')))}O.isMDXComponent=!0},199:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(50);t.default=function(){return Object(a.useContext)(r.a)}},200:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n(201);var a=n(199);function r(e){var t=(Object(a.default)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},201:function(e,t,n){"use strict";var a=n(17),r=n(36),o=n(202),l="".startsWith;a(a.P+a.F*n(203)("startsWith"),"String",{startsWith:function(e){var t=o(this,e,"startsWith"),n=r(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),a=String(e);return l?l.call(t,a,n):t.slice(n,n+a.length)===a}})},202:function(e,t,n){var a=n(69),r=n(23);e.exports=function(e,t,n){if(a(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(r(e))}},203:function(e,t,n){var a=n(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[a]=!1,!"/./"[e](t)}catch(r){}}return!0}}}]);