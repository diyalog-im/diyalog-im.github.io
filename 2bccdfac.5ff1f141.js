(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{148:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return c})),n.d(t,"Highlight",(function(){return d})),n.d(t,"HighlightWithBlack",(function(){return o})),n.d(t,"ColoredText",(function(){return p})),n.d(t,"CenteredText",(function(){return s})),n.d(t,"GreenColoredText",(function(){return u})),n.d(t,"BlueColoredText",(function(){return j})),n.d(t,"rightToc",(function(){return m})),n.d(t,"default",(function(){return g}));var a=n(1),r=n(9),l=(n(198),n(197)),i=n(200),b={id:"diyalog-messaging-api-quickreplies",title:"Quick Replies Mesaj \u015eablonu",sidebar_label:"Quick Replies"},c={id:"tr/diyalog-messaging-api-quickreplies",title:"Quick Replies Mesaj \u015eablonu",description:"export const Highlight = ({children, color}) => (",source:"@site/../docs/tr/diyalog-messaging-api-quickreplies.md",permalink:"/docs/tr/diyalog-messaging-api-quickreplies",sidebar_label:"Quick Replies"},d=function(e){var t=e.children,n=e.color;return Object(l.b)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},o=function(e){var t=e.children,n=e.color;return Object(l.b)("span",{style:{backgroundColor:n,borderRadius:"2px",padding:"0.2rem"}},t)},p=function(e){var t=e.children,n=e.color;return Object(l.b)("span",{style:{color:n}},t)},s=function(e){var t=e.children;return Object(l.b)("span",{style:{align:"center"}},t)},u=function(e){var t=e.children;return Object(l.b)("span",{style:{color:"#42b72a"}},t)},j=function(e){var t=e.children;return Object(l.b)("span",{style:{color:"#1877F2"}},t)},m=[{value:"\u0130stek URI&#39;\u0131",id:"i\u0307stek-uri\u0131",children:[]},{value:"\u0130stek Json Objesi Detaylar\u0131",id:"i\u0307stek-json-objesi-detaylar\u0131",children:[{value:"<GreenColoredText>recipient</GreenColoredText>",id:"greencoloredtextrecipientgreencoloredtext",children:[]},{value:"<GreenColoredText>message</GreenColoredText>",id:"greencoloredtextmessagegreencoloredtext",children:[]},{value:"<GreenColoredText>quickReply</GreenColoredText>",id:"greencoloredtextquickreplygreencoloredtext",children:[]},{value:"<GreenColoredText>quickReplyV2</GreenColoredText>",id:"greencoloredtextquickreplyv2greencoloredtext",children:[]}]},{value:"D\xf6nen Yan\u0131t (Response)",id:"d\xf6nen-yan\u0131t-response",children:[{value:"Yan\u0131t \xd6rne\u011fi",id:"yan\u0131t-\xf6rne\u011fi",children:[]}]}],O={Highlight:d,HighlightWithBlack:o,ColoredText:p,CenteredText:s,GreenColoredText:u,BlueColoredText:j,rightToc:m};function g(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},O,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Quick replies mesaj \u015fablonu ile kullan\u0131c\u0131lara bir metin ve alt\u0131nda d\xfc\u011fmeler olan mesajlar iletebilirsiniz.\nTercihinize g\xf6re d\xfc\u011fmelere ikon resimleri de atayabilirsiniz."),Object(l.b)("img",{alt:"",src:Object(i.a)("img/messagingAPI/quickreply.png"),height:"120px"}),Object(l.b)("h2",{id:"i\u0307stek-uri\u0131"},"\u0130stek URI'\u0131"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"https://<DIYALOG-SERVER-API-ENDPOINT>/v1/bots/sendmessage/<YOUR-BOT-ACCESS-TOKEN>\n")),Object(l.b)("h4",{id:"\xf6rnek-i\u0307stek"},"\xd6rnek \u0130stek"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-powershell"}),'curl -X POST -H "Content-Type: application/json" -d \'{\n    "recipient": {\n     "appCustomerId": "1231232"\n    },\n    "message": {\n        "messageId": "messageId-1",\n        "text" : "Do you want to continue?",\n        "quickReplies" : [],\n        "quickRepliesV2" : [\n            {\n                "contentType" : "text",\n                "title" : "Yes",\n                "payload" : "yes",\n                "payloadHidden" : false,\n                "payloadSeenByUser" :"Yes I want to contunue",\n                "imageUrl" : "https://diyalog.im/app/testmessage/testimages/quickreplytemplate-yes.png"\n            },\n            {\n                "contentType" : "text",\n                "title" : "Yes",\n                "payload" : "yes",\n                "payloadHidden" : false,\n                "payloadSeenByUser" :"No I dont",\n                "imageUrl" : "https://diyalog.im/app/testmessage/testimages/quickreplytemplate-no.png"\n            }\n        ]\n    }\n}\' "https://<DIYALOG-SERVER-API-ENDPOINT>/v1/bots/sendmessage/<YOUR-BOT-ACCESS-TOKEN>"\n')),Object(l.b)("h2",{id:"i\u0307stek-json-objesi-detaylar\u0131"},"\u0130stek Json Objesi Detaylar\u0131"),Object(l.b)("h3",{id:"greencoloredtextrecipientgreencoloredtext"},Object(l.b)(u,{mdxType:"GreenColoredText"},"recipient")),Object(l.b)(u,{mdxType:"GreenColoredText"},"receipient")," objesi i\xe7erisinde quick replies \u015fablonunda mesaj\u0131 hangi kullan\u0131c\u0131n\u0131za g\xf6ndermek istiyorsan\u0131z belirtebilirsiniz. Bir m\xfc\u015fterinize g\xf6ndermek istiyorsan\u0131z api'ye ",Object(l.b)(u,{mdxType:"GreenColoredText"},"appCustomerId")," alan\u0131 ile m\xfc\u015fteri numaras\u0131n\u0131 iletmeli, bir \xe7al\u0131\u015fan\u0131n\u0131za g\xf6ndermek istiyorsan\u0131z ",Object(l.b)(u,{mdxType:"GreenColoredText"},"appStaffId")," alan\u0131 ile sicil numaras\u0131n\u0131 iletmelisiniz.",Object(l.b)("p",null,"E\u011fer mesaj\u0131 g\xf6ndermek istedi\u011finiz m\xfc\u015fteri veya \xe7al\u0131\u015fan\u0131n DLG id'sini biliyorsan\u0131z, ",Object(l.b)(u,{mdxType:"GreenColoredText"},"id")," alan\u0131n\u0131 kullanabilirsiniz."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Alan"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Tip"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"A\xe7\u0131klama"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Zorunlu Alan"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)(u,{mdxType:"GreenColoredText"},"appCustomerId")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"String"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"M\xfc\u015fteri numaras\u0131d\u0131r."),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Opsiyonel")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)(u,{mdxType:"GreenColoredText"},"appStaffId")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"String"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\xc7al\u0131\u015fan sicil numaras\u0131d\u0131r."),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Opsiyonel")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)(u,{mdxType:"GreenColoredText"},"id")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"String"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"DLG tekil kullan\u0131c\u0131 numaras\u0131d\u0131r."),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Opsiyonel")))),Object(l.b)("h3",{id:"greencoloredtextmessagegreencoloredtext"},Object(l.b)(u,{mdxType:"GreenColoredText"},"message")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Alan"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Tip"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"A\xe7\u0131klama"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Zorunlu Alan"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"messageId"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"String"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Sisteminizde olu\u015fturdu\u011funuz tekil mesaj id'sidir. T\xfcm mesaj iletimleri ve cevaplar\u0131 vs. gibi eventleri DLG bu id ile size besler. E\u011fer id vermezseniz DLG sizin i\xe7in bir id \xfcretecek ve bu id \xfczerinden eventleri iletecektir."),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Opsiyonel")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"text"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"String"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Kullan\u0131c\u0131n\u0131za iletmek istedi\u011finiz metindir."),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Evet")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"quickReplies"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Array<",Object(l.b)("a",Object(a.a)({parentName:"td"},{href:"#greencoloredtextquickreplygreencoloredtext"}),"quickReply"),">"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),'Bu alan eski versiyondur. "quickReplies" : [] set edilmelidir.'),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Evet")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"quickRepliesV2"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Array<",Object(l.b)("a",Object(a.a)({parentName:"td"},{href:"#greencoloredtextquickreplyv2greencoloredtext"}),"quickReplyV2"),">"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Hizl\u0131 cevap d\xfc\u011fmesi array'dir. Eklemek istedi\u011finiz her d\xfc\u011fme array'e i\xe7in ",Object(l.b)("a",Object(a.a)({parentName:"td"},{href:"#greencoloredtextquickreplyv2greencoloredtext"}),"quickReplyV2")," objesi eklemelisiniz."),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Evet")))),Object(l.b)("h3",{id:"greencoloredtextquickreplygreencoloredtext"},Object(l.b)(u,{mdxType:"GreenColoredText"},"quickReply")),Object(l.b)("p",null,'   H\u0131zl\u0131 cevap d\xfc\u011fmesinin kullan\u0131mdan kalm\u0131\u015f olan eski versiyonudur. De\u011feri bo\u015f array ("quickReplies" : []) olarak verilmelidir. '),Object(l.b)("h3",{id:"greencoloredtextquickreplyv2greencoloredtext"},Object(l.b)(u,{mdxType:"GreenColoredText"},"quickReplyV2")),Object(l.b)("p",null," Metin mesajlar\u0131n\u0131z\u0131n alt\u0131na h\u0131zl\u0131 cevap d\xfc\u011fmeleri eklemek i\xe7in bu objeyi her d\xfc\u011fme i\xe7in bu alan\u0131 kullanabilirsiniz. "),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Alan"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Tip"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"A\xe7\u0131klama"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Zorunlu Alan"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"contentType"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"String"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Bu alan\u0131n de\u011feri ",Object(l.b)("strong",{parentName:"td"},'"text"')," olmal\u0131d\u0131r."),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Evet")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"title"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"String"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"D\xfc\u011fmenin metnidir. D\xfc\u011fmenin \xfczerinde yazmas\u0131n\u0131 istedi\u011finiz metindir."),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Evet")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"payload"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"String"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Bu de\u011fer kullan\u0131c\u0131 bu d\xfc\u011fmeye bast\u0131\u011f\u0131nda uygulaman\u0131za d\xf6nmesini istedi\u011finiz de\u011ferdir."),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Evet")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"payloadHidden"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Boolean"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"De\u011feri ",Object(l.b)("strong",{parentName:"td"},"true")," veya ",Object(l.b)("strong",{parentName:"td"},"false")," olabilir. E\u011fer mobil istemci destekliyorsa, payload mobil istemcideki imzalama y\xf6ntemi ile imzalan\u0131r ve size payload yerine bu imzalanm\u0131\u015f de\u011fer d\xf6ner. Bu sayede uygulaman\u0131za d\xf6nen imzalanm\u0131\u015f payload'u a\xe7arak ger\xe7ekten bu de\u011ferin do\u011fru istemciden geldi\u011fini kontrol edebilirsiniz."),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Optional")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"payloadSeenByUser"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"String"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Kullan\u0131c\u0131n\u0131n bu d\xfc\u011fmeye bast\u0131\u011f\u0131nda chat ekran\u0131nda g\xf6rmesini istedi\u011finiz de\u011ferdir. Bu de\u011fer verilmezse payload paramteresindeki de\u011feri m\xfc\u015fteri g\xf6recektir."),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Optional")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"imageUrl"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"String"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"E\u011fer d\xfc\u011fmeye bir icon vermek isterseniz buraya icon imaj\u0131n\u0131z\u0131n url'sini verebilirisiniz."),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Optional")))),Object(l.b)("h2",{id:"d\xf6nen-yan\u0131t-response"},"D\xf6nen Yan\u0131t (Response)"),Object(l.b)("p",null,"Ba\u015far\u0131l\u0131 sonu\xe7lanan API istekleri ",Object(l.b)("strong",{parentName:"p"},"http-2XX")," cevap kodu ile cevap json objesini d\xf6ner."),Object(l.b)("h3",{id:"yan\u0131t-\xf6rne\u011fi"},"Yan\u0131t \xd6rne\u011fi"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n   "recipient_id": "2074022437",\n   "message_id": "-7523925115459309081"\n}\n')))}g.isMDXComponent=!0},199:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(50);t.default=function(){return Object(a.useContext)(r.a)}},200:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n(201);var a=n(199);function r(e){var t=(Object(a.default)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},201:function(e,t,n){"use strict";var a=n(17),r=n(36),l=n(202),i="".startsWith;a(a.P+a.F*n(203)("startsWith"),"String",{startsWith:function(e){var t=l(this,e,"startsWith"),n=r(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),a=String(e);return i?i.call(t,a,n):t.slice(n,n+a.length)===a}})},202:function(e,t,n){var a=n(69),r=n(23);e.exports=function(e,t,n){if(a(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(r(e))}},203:function(e,t,n){var a=n(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[a]=!1,!"/./"[e](t)}catch(r){}}return!0}}}]);