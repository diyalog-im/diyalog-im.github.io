(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{131:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return c})),a.d(t,"Highlight",(function(){return d})),a.d(t,"HighlightWithBlack",(function(){return o})),a.d(t,"ColoredText",(function(){return m})),a.d(t,"CenteredText",(function(){return p})),a.d(t,"GreenColoredText",(function(){return u})),a.d(t,"BlueColoredText",(function(){return j})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return g}));var n=a(1),r=a(9),l=(a(198),a(197)),i=a(200),b={id:"diyalog-messaging-api-generictemplate",title:"Generic Mesaj \u015eablonu",sidebar_label:"Generic Template"},c={id:"tr/diyalog-messaging-api-generictemplate",title:"Generic Mesaj \u015eablonu",description:"export const Highlight = ({children, color}) => (",source:"@site/../docs/tr/diyalog-messaging-api-generictemplate.md",permalink:"/docs/tr/diyalog-messaging-api-generictemplate",sidebar_label:"Generic Template"},d=function(e){var t=e.children,a=e.color;return Object(l.b)("span",{style:{backgroundColor:a,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},o=function(e){var t=e.children,a=e.color;return Object(l.b)("span",{style:{backgroundColor:a,borderRadius:"2px",padding:"0.2rem"}},t)},m=function(e){var t=e.children,a=e.color;return Object(l.b)("span",{style:{color:a}},t)},p=function(e){var t=e.children;return Object(l.b)("span",{style:{align:"center"}},t)},u=function(e){var t=e.children;return Object(l.b)("span",{style:{color:"#42b72a"}},t)},j=function(e){var t=e.children;return Object(l.b)("span",{style:{color:"#1877F2"}},t)},s=[{value:"\u0130stek URI&#39;\u0131",id:"i\u0307stek-uri\u0131",children:[]},{value:"\u0130stek Json Objesi Detaylar\u0131",id:"i\u0307stek-json-objesi-detaylar\u0131",children:[{value:"<GreenColoredText>recipient</GreenColoredText>",id:"greencoloredtextrecipientgreencoloredtext",children:[]},{value:"<GreenColoredText>message</GreenColoredText>",id:"greencoloredtextmessagegreencoloredtext",children:[]},{value:"<GreenColoredText>attachment</GreenColoredText>",id:"greencoloredtextattachmentgreencoloredtext",children:[]},{value:"<GreenColoredText>payload</GreenColoredText>",id:"greencoloredtextpayloadgreencoloredtext",children:[]},{value:"<GreenColoredText>element</GreenColoredText>",id:"greencoloredtextelementgreencoloredtext",children:[]},{value:"<GreenColoredText>buttonV2</GreenColoredText>",id:"greencoloredtextbuttonv2greencoloredtext",children:[]}]},{value:"D\xf6nen Yan\u0131t (Response)",id:"d\xf6nen-yan\u0131t-response",children:[{value:"Yan\u0131t \xd6rne\u011fi",id:"yan\u0131t-\xf6rne\u011fi",children:[]}]}],O={Highlight:d,HighlightWithBlack:o,ColoredText:m,CenteredText:p,GreenColoredText:u,BlueColoredText:j,rightToc:s};function g(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},O,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Generic mesaj \u015fablonu i\xe7erisinde tek veya birden fazla ba\u015fl\u0131k, metin ve d\xfc\u011fmelerden olu\u015fan daha \xf6nceden yap\u0131land\u0131r\u0131lm\u0131\u015f mesaj g\xf6ndermenizi\nsa\u011flar. Biren fazla yap\u0131land\u0131r\u0131lm\u0131\u015f mesaj istemcilerde yatay olarak kayd\u0131r\u0131labilir (atl\u0131kar\u0131nca) mesaj olarak g\xf6r\xfcnt\xfclenir. "),Object(l.b)("img",{alt:"",src:Object(i.a)("img/messagingAPI/genericTemplateSS.png"),height:"250px"}),Object(l.b)("h2",{id:"i\u0307stek-uri\u0131"},"\u0130stek URI'\u0131"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"https://<DIYALOG-SERVER-API-ENDPOINT>/v1/bots/sendmessage/<YOUR-BOT-ACCESS-TOKEN>\n")),Object(l.b)("h4",{id:"\xf6rnek-i\u0307stek"},"\xd6rnek \u0130stek"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'curl -X POST -H "Content-Type: application/json" -d \'{\n    "recipient": {\n     "appCustomerId": "123456789"\n    },\n    "message": {\n    "messageId": "messageId-1",\n     "attachment": {\n       "type": "template",\n       "payload": {\n         "templateType": "generic",\n         "elements": [\n           {\n             "title": "Your Holiday Offer",\n             "imageUrl": "https://diyalog.im/app/testmessage/testimages/generictemplate-6.jpg",\n             "subtitle": "We have a special holiday offer for you. This holiday is for you.",\n             "messageId": "messageid-of-element-0",\n             "buttons" : [],\n             "buttonsV2" : [\n                {\n                    "type" :"postback",\n                    "title" : "I am interested22",\n                    "payload" : "campaing1-approved",\n                    "payloadHidden": true,\n                    "payloadSeenByUser": "I am interested"\n                },\n                {\n                    "type" :"postback",\n                    "title" : "Cancel",\n                    "payload" : "cncl",\n                    "payloadHidden": false,\n                    "payloadSeenByUser": "Cancel"\n                }\n                \n             ]\n           },\n           {\n             "title": "Flight Ticket Offer",\n             "imageUrl": "https://diyalog.im/app/testmessage/testimages/generictemplate-5.jpg",\n             "subtitle": "You can take flight ticket with big discount.",\n             "messageId": "messageid-of-element-1",\n             "buttons" : [],\n             "buttonsV2" : [\n                {\n                    "type" :"web_url",\n                    "title" : "Open Offer",\n                    "payload" : "http://dlgmessenger.com"                   \n                },\n                {\n                    "type" :"postback",\n                    "title" : "Cancel",\n                    "payload" : "cncl",\n                    "payloadHidden": false,\n                    "payloadSeenByUser": "Cancel"\n                }\n                \n             ]\n           }\n         ],\n         "buttons" : [],\n         "buttonsV2": []\n       }\n     },\n     "quickReplies" : [],\n     "quickRepliesV2" : []\n    }\n}\' "https://<DIYALOG-SERVER-API-ENDPOINT>/v1/bots/sendmessage/<YOUR-BOT-ACCESS-TOKEN>"\n')),Object(l.b)("h2",{id:"i\u0307stek-json-objesi-detaylar\u0131"},"\u0130stek Json Objesi Detaylar\u0131"),Object(l.b)("h3",{id:"greencoloredtextrecipientgreencoloredtext"},Object(l.b)(u,{mdxType:"GreenColoredText"},"recipient")),Object(l.b)(u,{mdxType:"GreenColoredText"},"receipient")," objesi i\xe7erisinde mesaj\u0131 hangi kullan\u0131c\u0131n\u0131za g\xf6ndermek istiyorsan\u0131z belirtebilirsiniz. Bir m\xfc\u015fterinize g\xf6ndermek istiyorsan\u0131z api'ye ",Object(l.b)(u,{mdxType:"GreenColoredText"},"appCustomerId")," alan\u0131 ile m\xfc\u015fteri numaras\u0131n\u0131 iletmeli, bir \xe7al\u0131\u015fan\u0131n\u0131za g\xf6ndermek istiyorsan\u0131z ",Object(l.b)(u,{mdxType:"GreenColoredText"},"appStaffId")," alan\u0131 ile sicil numaras\u0131n\u0131 iletmelisiniz.",Object(l.b)("p",null,"E\u011fer mesaj\u0131 g\xf6ndermek istedi\u011finiz m\xfc\u015fteri veya \xe7al\u0131\u015fan\u0131n DLG id'sini biliyorsan\u0131z, ",Object(l.b)(u,{mdxType:"GreenColoredText"},"id")," alan\u0131n\u0131 kullanabilirsiniz."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Alan"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Tip"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"A\xe7\u0131klama"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Zorunlu Alan"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)(u,{mdxType:"GreenColoredText"},"appCustomerId")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"M\xfc\u015fteri numaras\u0131d\u0131r."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Opsiyonel")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)(u,{mdxType:"GreenColoredText"},"appStaffId")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\xc7al\u0131\u015fan sicil numaras\u0131d\u0131r."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Opsiyonel")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)(u,{mdxType:"GreenColoredText"},"id")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DLG tekil kullan\u0131c\u0131 numaras\u0131d\u0131r."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Opsiyonel")))),Object(l.b)("h3",{id:"greencoloredtextmessagegreencoloredtext"},Object(l.b)(u,{mdxType:"GreenColoredText"},"message")),Object(l.b)("p",null,"Generic mesaj \u015fablonu i\xe7in mesaj\u0131n i\xe7eri\u011finin girildi\u011fi ",Object(l.b)("strong",{parentName:"p"},"message")," alan\u0131nda ",Object(l.b)("strong",{parentName:"p"},"text")," yerine ",Object(l.b)("strong",{parentName:"p"},"attachment")," verilmesi ve bu alan i\xe7erisindede\ngeneric mesaj\u0131n payload'u verilmelidir.",Object(l.b)("br",{parentName:"p"}),"\n","\u0130ste\u011fe ba\u011fl\u0131 olarak yine DLG platformunun bu mesajla ilgili eventleri geri beslerken eventlerin hangi mesaj ile ilgili oldu\u011funu\nanlayabilmeniz i\xe7in kendi sisteminizde bir mesaj numaras\u0131 olu\u015fturup bunu api'ye iletebilirsiniz. E\u011fer b\xf6yle bir id iletmezseniz DLG\nsizin i\xe7in bir id \xfcretecek ve bu id'yi bu iste\u011fin cevab\u0131nda size iletecek ve t\xfcm eventleri bu id ile size besleyecektir.",Object(l.b)("br",{parentName:"p"}),"\n","\u0130stekteki ",Object(l.b)("strong",{parentName:"p"},"quickReplies")," ve ",Object(l.b)("strong",{parentName:"p"},"quicRepliesV2")," alanlar\u0131 bu \u015fablon i\xe7in kullan\u0131lmamaktad\u0131r. Bu nedenle bu alanlar\u0131n de\u011ferini\nbo\u015f array olarak vermelisiniz."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Alan"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Tip"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"A\xe7\u0131klama"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Zorunlu Alan"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"messageId"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Sisteminizde olu\u015fturdu\u011funuz tekil mesaj id'sidir. T\xfcm mesaj iletimleri ve cevaplar\u0131 vs. gibi eventleri DLG bu id ile size besler. E\u011fer id vermezseniz DLG sizin i\xe7in bir id \xfcretecek ve bu id \xfczerinden eventleri iletecektir."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Opsiyonel")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"attachment"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Object"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Mesaj\u0131n\u0131z\u0131 i\xe7eri\u011fini ta\u015f\u0131yan ",Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"#greencoloredtextattachmentgreencoloredtext"}),"attachment")," objesidir."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Evet")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"quickReplies"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Array","<","quickReply",">"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Bu alan eski versiyondur. Bu \u015fablonda hizl\u0131 cevap d\xfc\u011fme array'i kullan\u0131lmaz. Bo\u015f array (",Object(l.b)("strong",{parentName:"td"},'"quickReplies" : []'),") olarak de\u011fer atanmal\u0131d\u0131r."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Evet")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"quickRepliesV2"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Array","<","quickReplyV2",">"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Bu \u015fablonda hizl\u0131 cevap d\xfc\u011fme array'i kullan\u0131lmaz. Bo\u015f array (",Object(l.b)("strong",{parentName:"td"},'"quickRepliesV2" : []'),") olarak de\u011fer atanmal\u0131d\u0131r."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Evet")))),Object(l.b)("h3",{id:"greencoloredtextattachmentgreencoloredtext"},Object(l.b)(u,{mdxType:"GreenColoredText"},"attachment")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"attachment")," i\xe7erisinde metin d\u0131\u015f\u0131nda g\xf6ndermek istedi\u011finiz mesaj tiplerinin i\xe7eriklerini api'ye iletebilirsiniz. "),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Alan"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Tip"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"A\xe7\u0131klama"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Zorunlu Alan"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"type"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"De\u011feri ",Object(l.b)("strong",{parentName:"td"},'"template"')," olarak set edilmelidir."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Evet")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"payload"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Object"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Generic mesaj i\xe7eri\u011fini ta\u015fiyan ",Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"#greencoloredtextpayloadgreencoloredtext"}),"payload")," objesidir."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Evet")))),Object(l.b)("h3",{id:"greencoloredtextpayloadgreencoloredtext"},Object(l.b)(u,{mdxType:"GreenColoredText"},"payload")),Object(l.b)("p",null,"Metin d\u0131\u015f\u0131ndaki mesaj t\xfcrlerinde mesaj i\xe7eri\u011fini ",Object(l.b)("strong",{parentName:"p"},"payload")," alan\u0131 \xfczerinden api'ye iletebilirsiniz."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Alan"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Tip"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"A\xe7\u0131klama"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Zorunlu Alan"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"templateType"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"},'"generic"'),"  olarak set edilmelidir."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Evet")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"elements"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Array<",Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"#greencoloredtextelementgreencoloredtext"}),"element"),">"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"G\xf6nderilecek generic mesaj \xf6\u011felerini (",Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"#greencoloredtextelementgreencoloredtext"}),"element"),") verdi\u011finiz array objesidir."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Evet")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"buttons"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Array","<","button",">"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Bu alan generi mesaj \u015fablonunda kullan\u0131lmamaktad\u0131r.De\u011feri bo\u015f array [] olarak verilmelidir."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Evet")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"buttonsV2"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Array","<","buttonV2",">"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Bu alan generi mesaj \u015fablonunda kullan\u0131lmamaktad\u0131r.De\u011feri bo\u015f array [] olarak verilmelidir."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Evet")))),Object(l.b)("h3",{id:"greencoloredtextelementgreencoloredtext"},Object(l.b)(u,{mdxType:"GreenColoredText"},"element")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Element generic template mesaj\u0131n\u0131n yap\u0131 ta\u015flar\u0131ndan biridir. Generic template t\xfcr\xfcnde mesajlar bir veya birden fazla element'ten olu\u015fabilir.\nBir element bir g\xf6rsel, metin ba\u015fl\u0131\u011f\u0131, metin ve en az 0 en fazla 3 butondan olu\u015fur.  "),Object(l.b)("p",{parentName:"blockquote"},"\xd6rnek bir element'in g\xf6r\xfcn\xfcm\xfc a\u015fa\u011f\u0131daki \u015fekildedir."),Object(l.b)("img",{alt:"",src:Object(i.a)("img/messagingAPI/genericTemplateSS.png"),height:"250px"})),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Alan"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Tip"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"A\xe7\u0131klama"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Zorunlu Alan"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"messageId"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u0130letilen element \xf6zelinde sisteminizde olu\u015fturdu\u011funuz tekil element id'sidir. Bu element i\xe7indeki d\xfc\u011fmelere bas\u0131ld\u0131\u011f\u0131nda bu id payload'unuza eklenerek size beslenir. Bu sayede kendi sisteminizde bas\u0131lan d\xfc\u011fmeyi ay\u0131rt edebilece\u011finiz ayr\u0131 bir veriye daha sahip olursunuz."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Opsiyonel")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"title"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Mesaj eleman\u0131n\u0131n ba\u015fl\u0131\u011f\u0131d\u0131r."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Opsiyonel")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"subtitle"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Mesaj eleman\u0131n\u0131n metnidir."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Opsiyonel")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"imageUrl"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Mesaj eleman\u0131nda g\xf6stermek istedi\u011finiz resmin uri adresidir."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Opsiyonel")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"buttons"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Array","<","button",">"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Eski versiyondur. De\u011feri ",Object(l.b)("strong",{parentName:"td"},"[]")," bo\u015f array olarak set edilmelidir."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Evet")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"buttonsV2"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Array<",Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"#greencoloredtextbuttonv2greencoloredtext"}),"buttonV2"),">"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Mesaj eleman\u0131na eklemek istedi\u011finiz buton tan\u0131mlar\u0131n\u0131 ta\u015f\u0131yan array'dir. Her eleman maksimum 3 adet buton destekler. 3'den fazla ekledi\u011finiz butonlar istemcide g\xf6r\xfcnmeyecektir. Bu nedenle bu array'e maksimum 3 buton eklenebilir. E\u011fer mesaj eleman\u0131n\u0131za d\xfc\u011fme eklemek istemiyorsan\u0131z bu alan\u0131n de\u011ferini bo\u015f array ([]) olarak vermelisiniz."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Evet")))),Object(l.b)("h3",{id:"greencoloredtextbuttonv2greencoloredtext"},Object(l.b)(u,{mdxType:"GreenColoredText"},"buttonV2")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Alan"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Tip"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"A\xe7\u0131klama"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Zorunlu Alan"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"type"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Butona bas\u0131ld\u0131\u011f\u0131nda butonun davran\u0131\u015f\u0131n\u0131 belirler. ",Object(l.b)("strong",{parentName:"td"},'"postback"')," ve ",Object(l.b)("strong",{parentName:"td"},'"web_url"')," olarak iki t\xfcr\xfc vard\u0131r."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Evet")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"title"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"M\xfc\u015fteriye butonlar\u0131n \xfczerinde g\xf6sterilecek metindir."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Evet")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"payload"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Bu alanda verdi\u011finiz data e\u011fer buton tipi ",Object(l.b)("strong",{parentName:"td"},"postback")," ise butona bas\u0131ld\u0131\u011f\u0131nda size geri iletilir. Bu sayede m\xfc\u015fterinin hangi butona bast\u0131\u011f\u0131n\u0131 anlayabilirsiniz. E\u011fer buton tipiniz ",Object(l.b)("strong",{parentName:"td"},'"web_url"')," ise bu alanda kullan\u0131c\u0131n\u0131zn a\xe7mas\u0131n\u0131 istedi\u011finiz uri adresini vermelisiniz. Kullan\u0131c\u0131 d\xfc\u011fmeye bast\u0131\u011f\u0131nda bu uri cihazda a\xe7\u0131lacakt\u0131r."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Evet")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"payloadHidden"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Boolean"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Bu flag ",Object(l.b)("strong",{parentName:"td"},"postback")," tipi d\xfc\u011fmeler i\xe7in ge\xe7erlidir. Ger\xe7ekten mesaj\u0131 iletti\u011finiz m\xfc\u015fterinin cihaz\u0131ndan, payload geldi\u011finden emin olmak istiyorsan\u0131z bu flag'i true set etmeniz gerekiyor. Bu flag true ise mobil cihazda bulunan uygulama anahtarlar\u0131 ile payload imzalanacak ve sizin uygulaman\u0131za iletilecektir. Tabi imzalanm\u0131\u015f datay\u0131 \xe7\xf6zebilmek i\xe7in sizinde uygulama anahtarlar\u0131n\u0131 biliyor olman\u0131z gerekiyor."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"payloadSeenByUser"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Bu alan e\u011fer m\xfc\u015fteriye butona bast\u0131\u011f\u0131nda chat ekran\u0131nda payload alan\u0131ndaki de\u011ferden farkl\u0131 bir mesaj g\xf6stermek isterseniz kullanaca\u011f\u0131n\u0131z aland\u0131r. Bu alanda verdi\u011finiz metin kullan\u0131c\u0131 d\xfc\u011fmeye bast\u0131\u011f\u0131nda chat ekran\u0131nda g\xf6r\xfcn\xfcr."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional")))),Object(l.b)(d,{color:"#da3d5f",mdxType:"Highlight"},"\xd6nemli Not :"),Object(l.b)("p",null,"Kullan\u0131c\u0131 mobil cihaz\u0131ndan, g\xf6nderdi\u011finiz buton objesi olan bir mesaj\u0131n butonuna bast\u0131\u011f\u0131nda, webhook yap\u0131s\u0131 \xfczerinden kullan\u0131c\u0131n\u0131n se\xe7ti\u011fi butonun payload alan\u0131nda verdi\u011finiz\nde\u011fer uygulaman\u0131za iletilir.  "),Object(l.b)("p",null,"E\u011fer ",Object(l.b)("strong",{parentName:"p"},"payloadHidden")," de\u011ferini ",Object(l.b)("strong",{parentName:"p"},"true")," yapm\u0131\u015fsan\u0131z payload mobil istemcide kurumun kendi bildi\u011fi DLG platformunun bilmedi\u011fi anahtarlar ile imzalan\u0131p size o \u015fekilde iletilir.\nBu sayede uygulaman\u0131z, ger\xe7ekten do\u011fru mobil cihazdan buton se\xe7iminin yap\u0131lm\u0131\u015f oldu\u011fundan emin olabilir. Bunun i\xe7in DLGSDK'n\u0131n \xe7al\u0131\u015ft\u0131\u011f\u0131 mobil uygulaman\u0131zda imzalama i\u015fleminin yap\u0131lm\u0131\u015f\nolmas\u0131 gerekmektedir. Ayr\u0131ca sizin uygulaman\u0131z\u0131nda ayn\u0131 anahtarlara sahip olmas\u0131 ve imzalanm\u0131\u015f payload'u de\u015fifre edebiliyor olman\u0131z gerekmektedir."),Object(l.b)("p",null,"Bir di\u011fer \xf6nemli konuda e\u011fer api iste\u011finizin geneli i\xe7in veya butonun yer ald\u0131\u011f\u0131 element i\xe7in bir ",Object(l.b)(u,{mdxType:"GreenColoredText"},"messageId")," iletmi\u015fseniz, d\xfc\u011fmeye bas\u0131ld\u0131\u011f\u0131nda bu id'lerden\n\xf6ncelikler element'in bir messageId alan\u0131 varsa o yoksa mesaj\u0131n geneli i\xe7in messageId alan\u0131 varsa bu alan\u0131n de\u011feri payload ile birlikte a\u015fa\u011f\u0131daki formatta uygulaman\u0131za beslenir. Yani istek i\xe7erisinde\napi'ye iletilen mesageId k\xf6\u015feli parantez i\xe7erisinde, payload'unuzla \":\"  karakteri ile ayr\u0131larak iletilir. "),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\xd6rne\u011fin :"),Object(l.b)("br",{parentName:"p"}),"\n",'"',"[","messageId-74","]",':123456"'),Object(l.b)("p",null,"E\u011fer payloadHidden true olarak set edilmi\u015f olsayd\u0131 bu de\u011fer a\u015fa\u011f\u0131daki gibi olacakt\u0131r. Yani payload de\u011feri imzalanm\u0131\u015f olarak iletilecektir."),Object(l.b)("p",null,'"',"[","messageId-74","]",':12a22113123131213aaab444cb3c224bcb"'),Object(l.b)("h2",{id:"d\xf6nen-yan\u0131t-response"},"D\xf6nen Yan\u0131t (Response)"),Object(l.b)("p",null,"Ba\u015far\u0131l\u0131 sonu\xe7lanan API istekleri ",Object(l.b)("strong",{parentName:"p"},"http-2XX")," cevap kodu ile cevap json objesini d\xf6ner."),Object(l.b)("h3",{id:"yan\u0131t-\xf6rne\u011fi"},"Yan\u0131t \xd6rne\u011fi"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n   "recipient_id": "2074022437",\n   "message_id": "-7523925115459309081"\n}\n')))}g.isMDXComponent=!0},199:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(50);t.default=function(){return Object(n.useContext)(r.a)}},200:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));a(201);var n=a(199);function r(e){var t=(Object(n.default)().siteConfig||{}).baseUrl,a=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?a+e.slice(1):a+e}},201:function(e,t,a){"use strict";var n=a(17),r=a(36),l=a(202),i="".startsWith;n(n.P+n.F*a(203)("startsWith"),"String",{startsWith:function(e){var t=l(this,e,"startsWith"),a=r(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),n=String(e);return i?i.call(t,n,a):t.slice(a,a+n.length)===n}})},202:function(e,t,a){var n=a(69),r=a(23);e.exports=function(e,t,a){if(n(t))throw TypeError("String#"+a+" doesn't accept regex!");return String(r(e))}},203:function(e,t,a){var n=a(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(a){try{return t[n]=!1,!"/./"[e](t)}catch(r){}}return!0}}}]);