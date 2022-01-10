(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{146:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return m}));var a=n(3),r=n(7),s=(n(0),n(149)),b={id:"webhook",title:"Webhook",sidebar_label:"Webhooks"},l={unversionedId:"webhook",id:"webhook",isDocsHomePage:!1,title:"Webhook",description:"Dlg Messaging Platform can feed many events and situations related to your bot to webhook that you create on your own servers. In this way, you can get the status of all messages you send to your users through your bot and the responses your users have written to these messages and you can take different actions according to these events. The platform will forward these events and conditions to your webhook by making a POST request.",source:"@site/../docs/webhook.md",slug:"/webhook",permalink:"/docs/webhook",version:"current",sidebar_label:"Webhooks",sidebar:"docs",previous:{title:"SendOTP API",permalink:"/docs/diyalog-messaging-api-sendotp-api"},next:{title:"Overview",permalink:"/docs/diyalog-reporting-api-overview"}},o=[{value:"How to Configure WebHook?",id:"how-to-configure-webhook",children:[]},{value:"Webhook Events",id:"webhook-events",children:[]},{value:"Event Format",id:"event-format",children:[{value:"entry",id:"entry",children:[]},{value:"messaging",id:"messaging",children:[]},{value:"sender",id:"sender",children:[]},{value:"recipient",id:"recipient",children:[]},{value:"Event Data",id:"event-data",children:[]}]},{value:"Some Sample Event Requests",id:"some-sample-event-requests",children:[]}],i={toc:o};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Dlg Messaging Platform can feed many events and situations related to your bot to webhook that you create on your own servers. In this way, you can get the status of all messages you send to your users through your bot and the responses your users have written to these messages and you can take different actions according to these events. The platform will forward these events and conditions to your webhook by making a POST request."),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"#how-to-configure-webHook"},"How to Configure WebHook?")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"#webhook-events"},"Webhook Events")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"#event-format"},"Event Format"))),Object(s.b)("h2",{id:"how-to-configure-webhook"},"How to Configure WebHook?"),Object(s.b)("p",null,"You can only configure your bot by entering the following configuration parameters in the server.conf file of the dialog-server application."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},'modules {\n    webbots {\n        info : [\n            {\n                botUserName : "your_bot_username",\n                webhook : {\n                    id : "id_of_your_webhook",\n                    url : "http://my_sample_webhook_url.com/",\n                    app_secret : "ffeceefiaae0aec8naich2queid1thoohi3pohSah7ohgaedaengiethah1ahthuumee12affcqq12",\n                    verify_token : "",\n                    subscribed_webhook_events : ["MessageEchoes",MessageDeliveries","MessageReads","Messages"]\n                }\n            },\n            ...\n        ]\n    }\n}\n')),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",{parentName:"tr",align:null},"Configuration"),Object(s.b)("th",{parentName:"tr",align:null},"Description"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"botUserName"),Object(s.b)("td",{parentName:"tr",align:null},"The username of your Webbot. This should be the username information entered by admin when creating the bot.")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"id"),Object(s.b)("td",{parentName:"tr",align:null},"This information is passed back to your webhook. In this way, if you have more than one webbot in the system and all meet the same webhook with this id you can distinguish. If you wish, you can provide a single webhook id for all your webbots. It all depends on the webhook you develop.")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"url"),Object(s.b)("td",{parentName:"tr",align:null},"URL address of your Webhook. The Dlg Platform will send requests to this url.")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"app_secret"),Object(s.b)("td",{parentName:"tr",align:null},'Used to validate requests from the DLG platform. With the app secret value that you specify, Dlg Platform creates the SHA1 HMAC of each message it sends to you and adds this value as "X-Signature" to the header of the request. You can verify incoming requests by checking the HMAC.')),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"verify_token"),Object(s.b)("td",{parentName:"tr",align:null},"Using this information, your webhook will validate the Dlg Platform, but its development has not yet completed.")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"subscribed_webhook_events"),Object(s.b)("td",{parentName:"tr",align:null},'The Dlg Platform only transmits events that you subscribe to. You can define these events to the system with this parameter. You can enter at least one or all of the values of "MessageDeliveries", "MessageReads", "MessageEchoes" as an array, and subscribe to events.')))),Object(s.b)("h2",{id:"webhook-events"},"Webhook Events"),Object(s.b)("p",null,"Below are the types of events you can get from the Dlg Platform. Different and new events will be added later.\nAll of the events or subscribed events will be forward to your webhook by the platform."),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",{parentName:"tr",align:null},"Webhook Event"),Object(s.b)("th",{parentName:"tr",align:null},"Description"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"MessageEchoes"),Object(s.b)("td",{parentName:"tr",align:null},"When you subscribe to this event, you can receive information that messages are sent to the recipient")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"MessageDeliveries"),Object(s.b)("td",{parentName:"tr",align:null},"If you subscribe to this event, you can receive the message ids information that has been strictly received by the recipients via your webbot.")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"MessageReads"),Object(s.b)("td",{parentName:"tr",align:null},"If you subscribe to this event, you can receive the message ids information that has been read by the recipients via your webbot.")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"Messages"),Object(s.b)("td",{parentName:"tr",align:null},"When users write to you, they are delivered to your webhook via your webhook. To receive these messages, you must subscribe to this event.")))),Object(s.b)("h2",{id:"event-format"},"Event Format"),Object(s.b)("p",null,"All webhook events are delivered to your webhook in the following format.\nIn this format, your webhook id information, sender bot id, receiver id number, customer number, event forwarding time are included in each event type. The content of the event varies by event type.\nIn another matter, the DLG platform collects a maximum of 10 events and transmits them at once, instead of sending each event to your system one by one. Of course, if 10 events have not accumulated within 5 seconds, it will forward the events that have occurred so far to your webhook.\nAll events are sent in the ",Object(s.b)("strong",{parentName:"p"}," entry ")," array object. "),Object(s.b)("p",null,"Here is an example event format."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "object": "dialog",\n  "entry": [\n    {\n      "id": "OTP",\n      "time": 1560172933001,\n      "messaging": [\n        {\n          "sender": {\n            "id": "1614379680"\n          },              \n          "recipient": {\n            "appCustomerId": "70021",\n            "id": "243540663"\n          },\n          "timestamp": 1560172926374,\n\n          ...              \n        }\n      ]\n    }\n  ]\n}\n')),Object(s.b)("p",null,"The meaning of the parameters of the above json object is as follows."),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",{parentName:"tr",align:null},"Parameter"),Object(s.b)("th",{parentName:"tr",align:null},"Type"),Object(s.b)("th",{parentName:"tr",align:null},"Description"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"object"),Object(s.b)("td",{parentName:"tr",align:null},"String"),Object(s.b)("td",{parentName:"tr",align:null},'By default, this field will return to you as "dialog".')),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"entry"),Object(s.b)("td",{parentName:"tr",align:null},"Array<",Object(s.b)("a",{parentName:"td",href:"#entry"},"entry"),">"),Object(s.b)("td",{parentName:"tr",align:null},"This field is the array where events are passed. One or more event objects will be sent to you. You can receive at least one and up to 10 events from each entry.")))),Object(s.b)("h3",{id:"entry"},"entry"),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",{parentName:"tr",align:null},"Parameter"),Object(s.b)("th",{parentName:"tr",align:null},"Type"),Object(s.b)("th",{parentName:"tr",align:null},"Description"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"id"),Object(s.b)("td",{parentName:"tr",align:null},"String"),Object(s.b)("td",{parentName:"tr",align:null},"The ID information you gave during the configuration for your Webbot is sent back to you through this field.")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"time"),Object(s.b)("td",{parentName:"tr",align:null},"Number"),Object(s.b)("td",{parentName:"tr",align:null},"The sent time of the event to your webhook by the Dlg Platform (epoch milliseconds)")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"messaging"),Object(s.b)("td",{parentName:"tr",align:null},"Array<",Object(s.b)("a",{parentName:"td",href:"#messaging"},"messaging"),">"),Object(s.b)("td",{parentName:"tr",align:null},"An array containing each event information. For future reference, this is designed as an array, but will only be passed to you with one object. Therefore, you can take the first element and use it.")))),Object(s.b)("h3",{id:"messaging"},"messaging"),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",{parentName:"tr",align:null},"Parameter"),Object(s.b)("th",{parentName:"tr",align:null},"Type"),Object(s.b)("th",{parentName:"tr",align:null},"Description"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"sender"),Object(s.b)("td",{parentName:"tr",align:null},"<",Object(s.b)("a",{parentName:"td",href:"#sender"},"sender"),">"),Object(s.b)("td",{parentName:"tr",align:null},"Webbot's information")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"recipient"),Object(s.b)("td",{parentName:"tr",align:null},"<",Object(s.b)("a",{parentName:"td",href:"#recipient"},"recipient"),">"),Object(s.b)("td",{parentName:"tr",align:null},"Recipient's information")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"timestamp"),Object(s.b)("td",{parentName:"tr",align:null},"Number"),Object(s.b)("td",{parentName:"tr",align:null},"Event time (epoch miliseconds)")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"Event Datas\u0131"),Object(s.b)("td",{parentName:"tr",align:null},Object(s.b)("a",{parentName:"td",href:"#event-data"},"Event Data")),Object(s.b)("td",{parentName:"tr",align:null},"The event content is different for each event.")))),Object(s.b)("h3",{id:"sender"},"sender"),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",{parentName:"tr",align:null},"Parameter"),Object(s.b)("th",{parentName:"tr",align:null},"Type"),Object(s.b)("th",{parentName:"tr",align:null},"Description"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"id"),Object(s.b)("td",{parentName:"tr",align:null},"String"),Object(s.b)("td",{parentName:"tr",align:null},"It is the unique id information of Webbot on the Dlg platform.")))),Object(s.b)("h3",{id:"recipient"},"recipient"),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",{parentName:"tr",align:null},"Parameter"),Object(s.b)("th",{parentName:"tr",align:null},"Type"),Object(s.b)("th",{parentName:"tr",align:null},"Description"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"appCustomerId"),Object(s.b)("td",{parentName:"tr",align:null},"String"),Object(s.b)("td",{parentName:"tr",align:null},"The customer number of the user to whom the message was delivered.")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"id"),Object(s.b)("td",{parentName:"tr",align:null},"String"),Object(s.b)("td",{parentName:"tr",align:null},"The unique id information of the user on the DLG platform to which the message is delivered.")))),Object(s.b)("h3",{id:"event-data"},"Event Data"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"MessageEchoes")),Object(s.b)("p",null,"Message Echo event is the event that occurs when the message is sent to the user via the bot.\nThis event indicates to the user that the message was sent. This does not mean that the event has been delivered to the user."),Object(s.b)("p",null,"The content of the sample MessageEcho is as follows."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},'  "messageEcho": {\n    "app_id": 1614379680,\n    "is_echo": true,\n    "mid": "messageId-92"\n  }\n')),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",{parentName:"tr",align:null},"Parameter"),Object(s.b)("th",{parentName:"tr",align:null},"Type"),Object(s.b)("th",{parentName:"tr",align:null},"Description"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"app_id"),Object(s.b)("td",{parentName:"tr",align:null},"String"),Object(s.b)("td",{parentName:"tr",align:null},"It is the unique id information of Webbot on the Dlg platform.")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"is_echo"),Object(s.b)("td",{parentName:"tr",align:null},"Boolean"),Object(s.b)("td",{parentName:"tr",align:null},"Default returns true.")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"mid"),Object(s.b)("td",{parentName:"tr",align:null},"String"),Object(s.b)("td",{parentName:"tr",align:null},"id of the message")))),Object(s.b)("p",null,"Below is an example entry for the MessageEcho event."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "object": "dialog",\n  "entry": [\n    {\n      "id": "OTP",\n      "time": 1560172933001,\n      "messaging": [\n        {\n          "sender": {\n            "id": "1614379680"\n          },              \n          "recipient": {\n            "appCustomerId": "70021",\n            "id": "243540663"\n          },\n          "timestamp": 1560172926374,\n          \n          "messageEcho": {\n            "app_id": 1614379680,\n            "is_echo": true,\n            "mid": "messageId-92"\n          }\n        }\n      ]\n    }\n  ]\n}\n')),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"MessageDeliveries")),Object(s.b)("p",null,"The Message Deliveries event is the event that occurs when message or messages are delivered to recipient via the bot.\nWhen this event is forwarded to your webhook, all messages with IDs in the event have been delivered to the user."),Object(s.b)("p",null,"Sample delivery content is as follows."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},'  "delivery": {\n    "mids": [\n      "messageId-92"\n    ],\n    "watermark": 1560195968593\n  }\n  \n')),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",{parentName:"tr",align:null},"Parameter"),Object(s.b)("th",{parentName:"tr",align:null},"Type"),Object(s.b)("th",{parentName:"tr",align:null},"Description"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"mids"),Object(s.b)("td",{parentName:"tr",align:null},"Array","[String]"),Object(s.b)("td",{parentName:"tr",align:null},"An array containing the message ids of messages forwarded to the user. All message ids in this array are delivered to the user.")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"watermark"),Object(s.b)("td",{parentName:"tr",align:null},"Number"),Object(s.b)("td",{parentName:"tr",align:null},"The time of the delivery event (epoch milliseconds). All messages before this time in this parameter have been delivered.")))),Object(s.b)("p",null,"Below is an example entry for the MessageDeliveries event."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n   "object": "dialog",\n   "entry": [\n    {\n      "id": "OTP",\n      "time": 1560195973608,\n\n      "messaging": [\n        {\n          "sender": {\n            "id": "1614379680"\n          },\n          \n          "recipient": {\n            "appCustomerId": "70021",\n            "id": "243540663"\n          },\n          "timestamp": 1560172926374,\n          \n          "delivery": {\n            "mids": [\n              "messageId-92",\n              "messageId-93"\n            ],\n            "watermark": 1560195968593\n          }\n        }\n      ]\n    }\n  ]\n}    \n')),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"MessageReads")),Object(s.b)("p",null,"This event is forwarded to your webhook when the user reads the messages."),Object(s.b)("p",null,"Example read content is as follows."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},' "reads": {\n    "mids": [\n      "messageId-92"\n    ],\n    "watermark": 1560197145045\n  }\n')),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",{parentName:"tr",align:null},"Parameter"),Object(s.b)("th",{parentName:"tr",align:null},"Type"),Object(s.b)("th",{parentName:"tr",align:null},"Description"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"mids"),Object(s.b)("td",{parentName:"tr",align:null},"Array","[String]"),Object(s.b)("td",{parentName:"tr",align:null},"An array containing the message ids that the user read. All message ids in this array have been read by the user.")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"watermark"),Object(s.b)("td",{parentName:"tr",align:null},"Number"),Object(s.b)("td",{parentName:"tr",align:null},"The time of the read event (epoch milliseconds). All messages before this time in this parameter have been read.")))),Object(s.b)("p",null,"Below is an example entry for the MessageReads event."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "object": "dialog",\n  "entry": [\n    {\n      "id": "OTP",\n      "time": 1560197150060,\n\n      "messaging": [\n        {\n          "sender": {\n            "id": "1614379680"\n          },\n          "recipient": {\n            "appCustomerId": "70021",\n            "id": "243540663"\n          },\n\n          "timestamp": 1560197145045,\n          \n          "reads": {\n            "mids": [\n              "messageId-92"\n            ],\n            "watermark": 1560197145045\n          }\n        }\n      ]\n    }\n  ]\n}  \n')),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Messages")),Object(s.b)("p",null,"When the user responds to your webbot, this event will send the user message to your webhook."),Object(s.b)("p",null,"Example message content is as follows."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},'  "message": {\n    "mid": "messageId-92",\n    "text": "Hello"\n  }\n')),Object(s.b)("p",null,"If the user has pressed one of the buttons of a template message containing the button you sent, the sample message content will be as follows."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},'  "message": {\n    "mid": "messageId-92",\n    "text": "[messageId-92]:Approve"\n  }\n')),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",{parentName:"tr",align:null},"Parameter"),Object(s.b)("th",{parentName:"tr",align:null},"Type"),Object(s.b)("th",{parentName:"tr",align:null},"Description"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"mid"),Object(s.b)("td",{parentName:"tr",align:null},"String"),Object(s.b)("td",{parentName:"tr",align:null},"The id of the last message delivered to the user. The user has replied to this message.")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"text"),Object(s.b)("td",{parentName:"tr",align:null},"String"),Object(s.b)("td",{parentName:"tr",align:null},"This is the content of the user's response. If the user has typed text to you, you will receive the text directly from the user. If the user has sent a message such as OTP (mobile confirmation code), generictemplate, buttontemplate or quickreply type to the user and pressed the buttons of this message, you will get a reply to the message as [","[messageId-92]",': Hello ". In this way, you can detect which message the user has pushed, and take the necessary actions for the relevant message id.')))),Object(s.b)("p",null,"Below is an example entry for the Messages event.    "),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "object": "dialog",\n  "entry": [\n    {\n      "id": "OTP",\n      "time": 1560198179122,\n      "messaging": [\n        {\n          "sender": {\n            "id": "1614379680"\n          },\n          "recipient": {\n            "appCustomerId": "70021",\n            "id": "243540663"\n          },\n          "timestamp": 1560198174092,\n          \n          "message": {\n            "mid": "messageId-92",\n            "text": "Hello"\n          }\n        }\n      ]\n    }\n  ]\n}\n')),Object(s.b)("h2",{id:"some-sample-event-requests"},"Some Sample Event Requests"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"When a message is forwarded to the user by the bot, the MessageEchoes and MessageDeliveries event are normally forwarded to the webhook as follows.")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "object": "dialog",\n  \n  "entry": [\n    {\n      "id": "OTP",\n      "time": 1560199033954,\n      \n      "messaging": [\n        {\n          "sender": {\n            "id": "1614379680"\n          },\n          "recipient": {\n            "appCustomerId": "70021",\n            "id": "243540663"\n          },\n          "timestamp": 1560199028642,\n          \n          "messageEcho": {\n            "app_id": 1614379680,\n            "is_echo": true,\n            "mid": "messageId-101"\n          }\n        }\n      ]\n    },\n    {\n      "id": "OTP",\n      "time": 1560199033954,\n      "messaging": [\n        {\n          "sender": {\n            "id": "1614379680"\n          },\n          "recipient": {\n            "appCustomerId": "70021",\n            "id": "243540663"\n          },\n          "timestamp": 1560199028982,\n          \n          "delivery": {\n            "mids": [\n              "messageId-101"\n            ],\n            "watermark": 1560199028982\n          }\n        }\n      ]\n    }\n  ]\n}\n')),Object(s.b)("ol",{start:2},Object(s.b)("li",{parentName:"ol"},"Another example is that the user can receive messages via webbot and read them instantly while the chat screen is open. In this case you will get an event content like the one below.")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "object": "dialog",\n  "entry": [\n    {\n      "id": "OTP",\n      "time": 1560199722035,\n      \n      "messaging": [\n        {\n          "sender": {\n            "id": "1614379680"\n          },\n          "recipient": {\n            "appCustomerId": "70021",\n            "id": "243540663"\n          },\n          "timestamp": 1560199716748,\n          \n          "messageEcho": {\n            "app_id": 1614379680,\n            "is_echo": true,\n            "mid": "messageId-102"\n          }\n        }\n      ]\n    },\n    {\n      "id": "OTP",\n      "time": 1560199722035,\n\n      "messaging": [\n        {\n          "sender": {\n            "id": "1614379680"\n          },\n          "recipient": {\n            "appCustomerId": "70021",\n            "id": "243540663"\n          },\n          "timestamp": 1560199717421,\n          \n          "delivery": {\n            "mids": [\n              "messageId-102"\n            ],\n            "watermark": 1560199717421\n          }\n        }\n      ]\n    },\n    {\n      "id": "OTP",\n      "time": 1560199722035,\n      \n      "messaging": [\n        {\n          "sender": {\n            "id": "1614379680"\n          },\n          "recipient": {\n            "appCustomerId": "70021",\n            "id": "243540663"\n          },\n          "timestamp": 1560199717448,\n\n          "reads": {\n            "mids": [\n              "messageId-102"\n            ],\n            "watermark": 1560199717448\n          }\n        }\n      ]\n    }\n  ]\n} \n')),Object(s.b)("ol",{start:3},Object(s.b)("li",{parentName:"ol"},"You can send messages to multiple users at the same time. In the sample event request below, webbot sent a message to customer numbers 70021 and 70022 at approximately same times and a message was sent to customer 70021 but not yet to customer 70022.")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "object": "dialog",\n  "entry": [\n    {\n      "id": "OTP",\n      "time": 1560200490563,\n      \n      "messaging": [\n        {\n          "recipient": {\n            "appCustomerId": "70021",\n            "id": "243540663"\n          },\n          "sender": {\n            "id": "1614379680"\n          },\n          "timestamp": 1560200485050,\n          \n          "messageEcho": {\n            "app_id": 1614379680,\n            "is_echo": true,\n            "mid": "messageId-103"\n          }\n        }\n      ]\n    },\n    {\n      "id": "OTP",\n      "time": 1560200490563,\n      \n      "messaging": [\n        {\n          "recipient": {\n            "appCustomerId": "70022",\n            "id": "1588406039"\n          },\n          "sender": {\n            "id": "1614379680"\n          },\n          "timestamp": 1560200488953,\n          \n          "messageEcho": {\n            "app_id": 1614379680,\n            "is_echo": true,\n            "mid": "messageId-101"\n          }\n        }\n      ]\n    },\n    {\n      "id": "OTP",\n      "time": 1560200490563,\n      "messaging": [\n        {\n          "recipient": {\n            "appCustomerId": "70021",\n            "id": "243540663"\n          },\n          "sender": {\n            "id": "1614379680"\n          },\n          "timestamp": 1560200485546,\n          "delivery": {\n            "mids": [\n              "messageId-103"\n            ],\n            "watermark": 1560200485546\n          }\n        }\n      ]\n    }\n  ]\n}\n')),Object(s.b)("ol",{start:4},Object(s.b)("li",{parentName:"ol"},"Another example is to send messages to the user, but the user read the messages sent to him after a while. In this case, only the reading events will be as follows when the user reads the messages.\nAs it can be seen from the content below, the user has read the message id messageId-103, messageId-104 and messageId-105.")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "object": "dialog",\n  "entry": [\n    {\n      "id": "OTP",\n      "time": 1560201130747,\n      \n      "messaging": [\n        {\n          "sender": {\n            "id": "1614379680"\n          },\n          "recipient": {\n            "appCustomerId": "70021",\n            "id": "243540663"\n          },\n          "timestamp": 1560201125731,\n          \n          "reads": {\n            "mids": [\n              "messageId-103",\n              "messageId-104",\n              "messageId-105"\n            ],\n            "watermark": 1560201125731\n          }\n        }\n      ]\n    }\n  ]\n}\n')))}m.isMDXComponent=!0},149:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),m=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=m(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,b=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),c=m(n),p=a,u=c["".concat(b,".").concat(p)]||c[p]||d[p]||s;return n?r.a.createElement(u,l(l({ref:t},i),{},{components:n})):r.a.createElement(u,l({ref:t},i))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,b=new Array(s);b[0]=p;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,b[1]=l;for(var i=2;i<s;i++)b[i]=n[i];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);