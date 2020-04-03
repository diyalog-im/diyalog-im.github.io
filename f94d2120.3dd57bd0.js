(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{194:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return l})),n.d(a,"metadata",(function(){return b})),n.d(a,"rightToc",(function(){return c})),n.d(a,"default",(function(){return m}));var t=n(1),i=n(9),r=(n(198),n(197)),l={id:"webhook",title:"Webhook",sidebar_label:"Webhooks"},b={id:"webhook",title:"Webhook",description:"Dlg Mesajla\u015fma Platformu kendi sunucular\u0131n\u0131zda olu\u015fturdu\u011funuz webhook'a, botunuz ile ilgili bir \xe7ok olay ve durumu besleyebilmektedir. Bu sayade bot'unuz \xfczerinden kullan\u0131c\u0131lara iletti\u011finiz t\xfcm mesajlar\u0131n durumu ve bu mesajlara kullan\u0131c\u0131lar\u0131n\u0131z\u0131n yazd\u0131\u011f\u0131 cevaplar\u0131 alabilir ve bu eventlere g\xf6re de\u011fi\u015fik aksiyonlar alabilirsiniz. Platform bu olay ve durumlar\u0131 webhook'unuza POST iste\u011fi yaparak iletecektir.",source:"@site/../docs/webhook.md",permalink:"/docs/webhook",sidebar_label:"Webhooks",sidebar:"docs",previous:{title:"SendOTP API",permalink:"/docs/diyalog-messaging-api-sendotp-api"},next:{title:"Dlg Server Rancher 1.6 Operations",permalink:"/docs/ops_rancher_restart"}},c=[{value:"Webhook Konfig\xfcrsayonu Nas\u0131l Yap\u0131l\u0131r?",id:"webhook-konfig\xfcrsayonu-nas\u0131l-yap\u0131l\u0131r",children:[]},{value:"Webhook Events",id:"webhook-events",children:[]},{value:"Event Format",id:"event-format",children:[{value:"entry",id:"entry",children:[]},{value:"messaging",id:"messaging",children:[]},{value:"sender",id:"sender",children:[]},{value:"recipient",id:"recipient",children:[]},{value:"Event Datas\u0131",id:"event-datas\u0131",children:[]}]},{value:"Baz\u0131 \xd6rnek Event \u0130stekleri",id:"baz\u0131-\xf6rnek-event-i\u0307stekleri",children:[]}],d={rightToc:c};function m(e){var a=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(t.a)({},d,n,{components:a,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Dlg Mesajla\u015fma Platformu kendi sunucular\u0131n\u0131zda olu\u015fturdu\u011funuz webhook'a, botunuz ile ilgili bir \xe7ok olay ve durumu besleyebilmektedir. Bu sayade bot'unuz \xfczerinden kullan\u0131c\u0131lara iletti\u011finiz t\xfcm mesajlar\u0131n durumu ve bu mesajlara kullan\u0131c\u0131lar\u0131n\u0131z\u0131n yazd\u0131\u011f\u0131 cevaplar\u0131 alabilir ve bu eventlere g\xf6re de\u011fi\u015fik aksiyonlar alabilirsiniz. Platform bu olay ve durumlar\u0131 webhook'unuza POST iste\u011fi yaparak iletecektir."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(t.a)({parentName:"li"},{href:"#webhook-konfigursayonu-nas%C4%B1l-yap%C4%B1l%C4%B1r"}),"WebHook Konfig\xfcrsayonu Nas\u0131l Yap\u0131l\u0131r?")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(t.a)({parentName:"li"},{href:"#webhook-events"}),"Webhook Events")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(t.a)({parentName:"li"},{href:"#event-format"}),"Event Format"))),Object(r.b)("h2",{id:"webhook-konfig\xfcrsayonu-nas\u0131l-yap\u0131l\u0131r"},"Webhook Konfig\xfcrsayonu Nas\u0131l Yap\u0131l\u0131r?"),Object(r.b)("p",null,"Botunuzu ile ilgili konfig\xfcrasyonu \u015fu anda yaln\u0131zca diyalog-server uygulamas\u0131n\u0131n server.conf dosyas\u0131na a\u015fa\u011f\u0131daki konfig\xfcrasyon parametrelerini girerek yapabilirsiniz."),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{}),'modules {\n    webbots {\n        info : [\n            {\n                botUserName : "your_bot_username",\n                webhook : {\n                    id : "id_of_your_webhook",\n                    url : "http://my_sample_webhook_url.com/",\n                    app_secret : "ffeceefiaae0aec8naich2queid1thoohi3pohSah7ohgaedaengiethah1ahthuumee12affcqq12",\n                    verify_token : "",\n                    subscribed_webhook_events : ["MessageEchoes",MessageDeliveries","MessageReads","Messages"]\n                }\n            },\n            ...\n        ]\n    }\n}\n')),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(t.a)({parentName:"tr"},{align:null}),"Konfig\xfcrasyon"),Object(r.b)("th",Object(t.a)({parentName:"tr"},{align:null}),"A\xe7\u0131klamas\u0131"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"botUserName"),Object(r.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"Webbot'unuzun kullan\u0131c\u0131 ad\u0131. Bu admin taraf\u0131ndan bot olu\u015fturulurken girilen kullan\u0131c\u0131 ad\u0131 bilgisi ile an\u0131 olmal\u0131d\u0131r.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"id"),Object(r.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"Bu bilgi webhook'unuza geri iletilir. Bu sayede e\u011fer sistemde birden fazla webbot'unuz var ve hepsinin ayn\u0131 webhook ile kar\u015f\u0131l\u0131yorsan\u0131z bu id ile ay\u0131rt edebilirsiniz. \u0130sterseniz t\xfcm webbot'lar\u0131n\u0131z i\xe7in tek bir webhook id'si verebilirisiniz. Bu tamamen geli\u015ftirdi\u011finiz webhook'a ba\u011fl\u0131d\u0131r.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"url"),Object(r.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"Webhook'unuzun internete a\xe7\u0131k url bilgisi. Dlg Platformu bu url'ye istek g\xf6nderecektir.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"app_secret"),Object(r.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"Dlg platformu \xfczerinden gelen istekleri do\u011frulayabilmeniz i\xe7in kullan\u0131l\u0131r. Belirlerdi\u011finiz app secret de\u011feri ile Dlg Platformu size iletti\u011fi her mesaj\u0131n SHA1 HMAC'ini olu\u015fturup iste\u011fin header'\u0131na \"X-Signature\" olarak bu de\u011feri ekler. Gelen istekleri HMAC'i kontrol ederek do\u011frulayabilirsiniz.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"verify_token"),Object(r.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"Bu bilgi kullan\u0131larak webhook'unuzu Dlg Platform'u do\u011frulama yapacakt\u0131r fakat \u015fu anda geli\u015ftirmeleri hen\xfcz tamamlanmam\u0131\u015ft\u0131r.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"subscribed_webhook_events"),Object(r.b)("td",Object(t.a)({parentName:"tr"},{align:null}),'Dlg Platformu sadece sizin subscribe oldu\u011funuz event\'leri size iletir. Bu eventleri de bu parametre ile sisteme tan\u0131mlayabilirsiniz. Bir array olarak "MessageDeliveries","MessageReads","MessageEchoes" de\u011ferlerinden en az birini veya hepsin, girip event\'lere sunscribe olabilirsiniz.')))),Object(r.b)("h2",{id:"webhook-events"},"Webhook Events"),Object(r.b)("p",null,"Dlg Platformundan alabilece\u011finiz event t\xfcrlerini a\u015fa\u011f\u0131da bulabilirsiniz. Farkl\u0131 ve yeni event'ler ilerleyen zamanlarda eklenecektir.\nEvent'lerin hepsini veya istedi\u011finizi webhook'unuz arac\u0131l\u0131\u011f\u0131 ile platfrom size iletir."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(t.a)({parentName:"tr"},{align:null}),"Webhook Event"),Object(r.b)("th",Object(t.a)({parentName:"tr"},{align:null}),"A\xe7\u0131klamas\u0131"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"MessageEchoes"),Object(r.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"Bu event'e subscribe oldu\u011funuzda bot'unuzu \xfczerinden iletti\u011finiz mesajlar al\u0131c\u0131ya g\xf6nderildi\u011fi bilgisini bu event'e subscribe olursan\u0131z alabilirsiniz.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"MessageDeliveries"),Object(r.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"Webbot'unuz \xfczerinden al\u0131c\u0131lara kesinlikle iletilmi\u015f olan mesaj id bilgilerini bu event'e subscribe olursan\u0131z alabilirsiniz.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"MessageReads"),Object(r.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"Webbot'unuz arac\u0131l\u0131\u011f\u0131 ile al\u0131c\u0131lara iletti\u011finiz mesajlar kullan\u0131c\u0131 taraf\u0131ndan okunan mesaj id bilgilerini bu event' subscribe olursan\u0131z alabilirsiniz.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"Messages"),Object(r.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"Kullan\u0131c\u0131lar size mesaj yazd\u0131klar\u0131nda webhook'unuza bu mesajlar webhook'unuz \xfczerinden iletilir. Bu mesajlar\u0131 alabilmek i\xe7in bu event'e subscribe olman\u0131z gerekmektedir.")))),Object(r.b)("h2",{id:"event-format"},"Event Format"),Object(r.b)("p",null,"B\xfct\xfcn webhook event'leri a\u015fa\u011f\u0131da belirtilen format ile webhook'unuza iletilir.\nBu formatta webhook'unuzu id bilgisi g\xf6nderen bot id'si ve al\u0131c\u0131 id numaras\u0131 ve m\xfc\u015fteri numaras\u0131, event'n iletilme zaman\u0131 her event t\xfcr\xfcnde yer al\u0131r. Event'in i\xe7eri\u011fi event tipine g\xf6re de\u011fi\u015fiklik g\xf6stermektedir.\nBir di\u011fer konuda DLG platformu her bir event'i teker teker sisteminize g\xf6ndermek yerine maximum 10 event'i toplar ve tek seferde iletir. Tabi e\u011fer 5 saniye i\xe7erisinde 10 adet evetn birikmemi\u015fse o ana kadar olu\u015fan event'leri webhook'unuza iletecektir.\nT\xfcm eventleri ",Object(r.b)("strong",{parentName:"p"},"entry")," array objesinde iletir. "),Object(r.b)("p",null,"\xd6rnek bir Event format\u0131n\u0131 a\u015fa\u011f\u0131da bulabilirsiniz."),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-json"}),'{\n  "object": "dialog",\n  "entry": [\n    {\n      "id": "OTP",\n      "time": 1560172933001,\n      "messaging": [\n        {\n          "sender": {\n            "id": "1614379680"\n          },              \n          "recipient": {\n            "appCustomerId": "70021",\n            "id": "243540663"\n          },\n          "timestamp": 1560172926374,\n\n          ...              \n        }\n      ]\n    }\n  ]\n}\n')),Object(r.b)("p",null,"Yukar\u0131daki json objesinin parametrelerinin anlamalar\u0131 a\u015fa\u011f\u0131daki gibidir."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(t.a)({parentName:"tr"},{align:null}),"Parametre"),Object(r.b)("th",Object(t.a)({parentName:"tr"},{align:null}),"Tipi"),Object(r.b)("th",Object(t.a)({parentName:"tr"},{align:null}),"A\xe7\u0131klama"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"object"),Object(r.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"String"),Object(r.b)("td",Object(t.a)({parentName:"tr"},{align:null}),'Bu alan default olarak "dialog" olarak size d\xf6necektir.')),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"entry"),Object(r.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"Array<",Object(r.b)("a",Object(t.a)({parentName:"td"},{href:"#entry"}),"entry"),">"),Object(r.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"Bu alan eventlerin iletildi\u011fi array'dir. Bir veya birden fazla event objesi size iletilecektir. Her istekte en az bir  ve en \xe7ok 10 adet event'i entry i\xe7erisinden alabilirsiniz.")))),Object(r.b)("h3",{id:"entry"},"entry"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(t.a)({parentName:"tr"},{align:null}),"Parametre"),Object(r.b)("th",Object(t.a)({parentName:"tr"},{align:null}),"Tipi"),Object(r.b)("th",Object(t.a)({parentName:"tr"},{align:null}),"A\xe7\u0131klama"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"id"),Object(r.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"String"),Object(r.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"Webbot'unuz i\xe7in konfig\xfcrasyon s\u0131ras\u0131nda verdi\u011finiz id bilgisi bu alan \xfczerinden size geri iletilir.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"time"),Object(r.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"Number"),Object(r.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"Event'in Dlg Platformu taraf\u0131ndan size iletildi\u011fi zamand\u0131r (epoch milisaniye)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"messaging"),Object(r.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"Array<",Object(r.b)("a",Object(t.a)({parentName:"td"},{href:"#messaging"}),"messaging"),">"),Object(r.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"Her bir event bilgisini i\xe7eren array'dir. \u0130leriye y\xf6nelik olarak buras\u0131 array olarak tasarlanm\u0131\u015ft\u0131r fakat sadece bir obje i\xe7erecek \u015fekilde size iletilecektir. Bu nedenle ilk eleman\u0131n\u0131n al\u0131p kullanabilirisiniz.")))),Object(r.b)("h3",{id:"messaging"},"messaging"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(t.a)({parentName:"tr"},{align:null}),"Parametre"),Object(r.b)("th",Object(t.a)({parentName:"tr"},{align:null}),"Tipi"),Object(r.b)("th",Object(t.a)({parentName:"tr"},{align:null}),"A\xe7\u0131klama"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"sender"),Object(r.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"<",Object(r.b)("a",Object(t.a)({parentName:"td"},{href:"#sender"}),"sender"),">"),Object(r.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"Mesaj\u0131n ileten webbot'un bilgileri")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"recipient"),Object(r.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"<",Object(r.b)("a",Object(t.a)({parentName:"td"},{href:"#recipient"}),"recipient"),">"),Object(r.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"Mesaj\u0131n iletildi\u011fi kullan\u0131c\u0131n\u0131n bilgileri")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"timestamp"),Object(r.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"Number"),Object(r.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"Event zaman\u0131 (epoch milisaniye)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"Event Datas\u0131"),Object(r.b)("td",Object(t.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(t.a)({parentName:"td"},{href:"#event-datas%C4%B1"}),"Event Datas\u0131")),Object(r.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"Her bir event i\xe7in farkl\u0131 olan event i\xe7eri\u011fidir.")))),Object(r.b)("h3",{id:"sender"},"sender"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(t.a)({parentName:"tr"},{align:null}),"Parametre"),Object(r.b)("th",Object(t.a)({parentName:"tr"},{align:null}),"Tipi"),Object(r.b)("th",Object(t.a)({parentName:"tr"},{align:null}),"A\xe7\u0131klama"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"id"),Object(r.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"String"),Object(r.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"Mesaj\u0131 g\xf6nderen Webbot'un Dlg platformu \xfczerindeki tekil id bilgisidir.")))),Object(r.b)("h3",{id:"recipient"},"recipient"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(t.a)({parentName:"tr"},{align:null}),"Parametre"),Object(r.b)("th",Object(t.a)({parentName:"tr"},{align:null}),"Tipi"),Object(r.b)("th",Object(t.a)({parentName:"tr"},{align:null}),"A\xe7\u0131klama"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"appCustomerId"),Object(r.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"String"),Object(r.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"Mesaj\u0131n iletildi\u011fi kullan\u0131c\u0131n\u0131n m\xfc\u015fteri numaras\u0131d\u0131r.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"id"),Object(r.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"String"),Object(r.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"Mesaj\u0131n iletildi\u011fi kullan\u0131c\u0131n\u0131nDlg platformu \xfczerindeki tekil id bilgisidir.")))),Object(r.b)("h3",{id:"event-datas\u0131"},"Event Datas\u0131"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"MessageEchoes")),Object(r.b)("p",null,"Message Echo event'i bot \xfczerinden mesaj kullan\u0131c\u0131ya g\xf6nderildi\u011finde olu\u015fan event'tir.\nBu event kullan\u0131c\u0131ya mesaj\u0131n g\xf6nderildi\u011fini belirtir. Bu event kullan\u0131c\u0131ya mesaj\u0131n kesinlikle iletildi\u011fi anlam\u0131na gelmez."),Object(r.b)("p",null,"\xd6rnek messageEcho i\xe7eri\u011fi a\u015fa\u011f\u0131daki gibidir."),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{}),'  "messageEcho": {\n    "app_id": 1614379680,\n    "is_echo": true,\n    "mid": "messageId-92"\n  }\n')),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(t.a)({parentName:"tr"},{align:null}),"Parametre"),Object(r.b)("th",Object(t.a)({parentName:"tr"},{align:null}),"Tipi"),Object(r.b)("th",Object(t.a)({parentName:"tr"},{align:null}),"A\xe7\u0131klama"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"app_id"),Object(r.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"String"),Object(r.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"Mesaj\u0131 g\xf6nderen Webbot'un Dlg platformu \xfczerindeki tekil id bilgisidir.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"is_echo"),Object(r.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"Boolean"),Object(r.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"Default true olarak d\xf6ner.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"mid"),Object(r.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"String"),Object(r.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"G\xf6nderilen mesaj\u0131n id'si")))),Object(r.b)("p",null,"A\u015fa\u011f\u0131da MessageEcho event'ine \xf6rnek entry g\xf6rebilirsiniz."),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-json"}),'{\n  "object": "dialog",\n  "entry": [\n    {\n      "id": "OTP",\n      "time": 1560172933001,\n      "messaging": [\n        {\n          "sender": {\n            "id": "1614379680"\n          },              \n          "recipient": {\n            "appCustomerId": "70021",\n            "id": "243540663"\n          },\n          "timestamp": 1560172926374,\n          \n          "messageEcho": {\n            "app_id": 1614379680,\n            "is_echo": true,\n            "mid": "messageId-92"\n          }\n        }\n      ]\n    }\n  ]\n}\n')),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"MessageDeliveries")),Object(r.b)("p",null,"Message Deliveries event'i bot \xfczerinden mesaj veya mesajlar iletildi\u011finde olu\u015fan eventtir.\nBu event webhook'unuza iletildi\u011finde event i\xe7erisinde iletilen t\xfcm mesaj id'li mesajlar kesinlikle kullan\u0131c\u0131ya ula\u015ft\u0131r\u0131lm\u0131\u015f demektir."),Object(r.b)("p",null,"\xd6rnek delivery i\xe7eri\u011fi a\u015fa\u011f\u0131daki gibidir."),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{}),'  "delivery": {\n    "mids": [\n      "messageId-92"\n    ],\n    "watermark": 1560195968593\n  }\n  \n')),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(t.a)({parentName:"tr"},{align:null}),"Parametre"),Object(r.b)("th",Object(t.a)({parentName:"tr"},{align:null}),"Tipi"),Object(r.b)("th",Object(t.a)({parentName:"tr"},{align:null}),"A\xe7\u0131klama"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"mids"),Object(r.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"Array","[String]"),Object(r.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"Kullan\u0131c\u0131ya iletilen mesajlar\u0131n mesaj id'lerini i\xe7eren array'dir. Bu array i\xe7erisindeki t\xfcm mesaj id'leri kullan\u0131c\u0131ya iletilmi\u015ftir.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"watermark"),Object(r.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"Number"),Object(r.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"\u0130letim event'inin zaman\u0131 (epoch milisaniye).  Bu parametre i\xe7erisindeki zamandan \xf6nceki t\xfcm mesajlar iletilmi\u015ftir.")))),Object(r.b)("p",null,"A\u015fa\u011f\u0131da MessageDeliveries event'ine \xf6rnek bir entry g\xf6rebilirsiniz."),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-json"}),'{\n   "object": "dialog",\n   "entry": [\n    {\n      "id": "OTP",\n      "time": 1560195973608,\n\n      "messaging": [\n        {\n          "sender": {\n            "id": "1614379680"\n          },\n          \n          "recipient": {\n            "appCustomerId": "70021",\n            "id": "243540663"\n          },\n          "timestamp": 1560172926374,\n          \n          "delivery": {\n            "mids": [\n              "messageId-92",\n              "messageId-93"\n            ],\n            "watermark": 1560195968593\n          }\n        }\n      ]\n    }\n  ]\n}    \n')),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"MessageReads")),Object(r.b)("p",null,"Bu event kullan\u0131c\u0131 mesaj\u0131 okudu\u011funda webhook'unuza iletilir. "),Object(r.b)("p",null,"\xd6rnek read i\xe7eri\u011fi a\u015fa\u011f\u0131daki gibidir."),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{}),' "reads": {\n    "mids": [\n      "messageId-92"\n    ],\n    "watermark": 1560197145045\n  }\n')),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(t.a)({parentName:"tr"},{align:null}),"Parametre"),Object(r.b)("th",Object(t.a)({parentName:"tr"},{align:null}),"Tipi"),Object(r.b)("th",Object(t.a)({parentName:"tr"},{align:null}),"A\xe7\u0131klama"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"mids"),Object(r.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"Array","[String]"),Object(r.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"Kullan\u0131c\u0131n\u0131n okudu\u011fu mesajlar\u0131n mesaj id'lerini i\xe7eren array'dir. Bu array i\xe7erisindeki t\xfcm mesaj id'leri kullan\u0131c\u0131 taraf\u0131ndan okunmu\u015ftur.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"watermark"),Object(r.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"Number"),Object(r.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"Okunma event'inin zaman\u0131 (epoch milisaniye).  Bu parametre i\xe7erisindeki zamandan \xf6nceki t\xfcm mesajlar okunmu\u015ftur.")))),Object(r.b)("p",null,"A\u015fa\u011f\u0131da MessageReads event'ine \xf6rnek bir entry g\xf6rebilirsiniz.    "),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-json"}),'{\n  "object": "dialog",\n  "entry": [\n    {\n      "id": "OTP",\n      "time": 1560197150060,\n\n      "messaging": [\n        {\n          "sender": {\n            "id": "1614379680"\n          },\n          "recipient": {\n            "appCustomerId": "70021",\n            "id": "243540663"\n          },\n\n          "timestamp": 1560197145045,\n          \n          "reads": {\n            "mids": [\n              "messageId-92"\n            ],\n            "watermark": 1560197145045\n          }\n        }\n      ]\n    }\n  ]\n}  \n')),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Messages")),Object(r.b)("p",null,"Kullan\u0131c\u0131 taraf\u0131ndan webbot'unuza cevap yaz\u0131ld\u0131\u011f\u0131nda webhook'unuza bu event ile kullan\u0131c\u0131 mesaj\u0131 iletilir."),Object(r.b)("p",null,"\xd6rnek message i\xe7eri\u011fi a\u015fa\u011f\u0131daki gibidir."),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{}),'  "message": {\n    "mid": "messageId-92",\n    "text": "Hello"\n  }\n')),Object(r.b)("p",null,"Kullan\u0131c\u0131 sizin g\xf6nderdi\u011finiz buton i\xe7eren bir template mesaj\u0131n butonlar\u0131ndan birine basm\u0131\u015f ise \xf6rnek mesaj i\xe7eri\u011fi a\u015fa\u011f\u0131daki gibi olacakt\u0131r."),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{}),'  "message": {\n    "mid": "messageId-92",\n    "text": "[messageId-92]:Approve"\n  }\n')),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(t.a)({parentName:"tr"},{align:null}),"Parametre"),Object(r.b)("th",Object(t.a)({parentName:"tr"},{align:null}),"Tipi"),Object(r.b)("th",Object(t.a)({parentName:"tr"},{align:null}),"A\xe7\u0131klama"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"mid"),Object(r.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"String"),Object(r.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"Kullan\u0131c\u0131ya iletilmi\u015f olan son mesaj\u0131n id'sidir. Kullan\u0131c\u0131 bu mesaj'a cevap yazm\u0131\u015ft\u0131r.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"text"),Object(r.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"String"),Object(r.b)("td",Object(t.a)({parentName:"tr"},{align:null}),'Kullan\u0131c\u0131n\u0131n yazd\u0131\u011f\u0131 cevab\u0131n i\xe7eri\u011fidir. E\u011fer kullan\u0131c\u0131 size metin yazm\u0131\u015f ise direk bu alandan kullan\u0131c\u0131n\u0131n yazd\u0131\u011f\u0131 metin size iletilir. E\u011fer kullan\u0131c\u0131ya i\xe7erisinde buton olan otp(Mobil onay kodu),generictemplate, buttontemplate veya quickreply tipinde mesaj g\xf6ndermi\u015f ve kullan\u0131c\u0131n\u0131zda bu mesaj\u0131n butonlar\u0131na basm\u0131\u015f ise butonu ay\u0131rt edebilmeniz i\xe7in text alan\u0131nda "',"[messageId-92]",":Hello\" olarak size cevap d\xf6n\xfc\u015f\xfc olur. Bu \u015fekilde kullan\u0131c\u0131n\u0131n sizin iletti\u011finiz hangi mesaj\u0131n butonuna bast\u0131\u011f\u0131n\u0131 alg\u0131layabilir ve ilgili mesaj id'si i\xe7in gerekli aksiyonlar\u0131 alabilirsiniz.")))),Object(r.b)("p",null,"A\u015fa\u011f\u0131da Messages event'ine \xf6rnek bir entry g\xf6rebilirsiniz.    "),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-json"}),'{\n  "object": "dialog",\n  "entry": [\n    {\n      "id": "OTP",\n      "time": 1560198179122,\n      "messaging": [\n        {\n          "sender": {\n            "id": "1614379680"\n          },\n          "recipient": {\n            "appCustomerId": "70021",\n            "id": "243540663"\n          },\n          "timestamp": 1560198174092,\n          \n          "message": {\n            "mid": "messageId-92",\n            "text": "Hello"\n          }\n        }\n      ]\n    }\n  ]\n}\n')),Object(r.b)("h2",{id:"baz\u0131-\xf6rnek-event-i\u0307stekleri"},"Baz\u0131 \xd6rnek Event \u0130stekleri"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Bot taraf\u0131ndan kullan\u0131c\u0131ya bir mesaj iletildi\u011finde normal ko\u015fullarda g\xf6nderim (MessageEchoes) ve iletim (MessageDeliveries) eventi webhook'a a\u015fa\u011f\u0131daki gibi iletilir.")),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-json"}),'{\n  "object": "dialog",\n  \n  "entry": [\n    {\n      "id": "OTP",\n      "time": 1560199033954,\n      \n      "messaging": [\n        {\n          "sender": {\n            "id": "1614379680"\n          },\n          "recipient": {\n            "appCustomerId": "70021",\n            "id": "243540663"\n          },\n          "timestamp": 1560199028642,\n          \n          "messageEcho": {\n            "app_id": 1614379680,\n            "is_echo": true,\n            "mid": "messageId-101"\n          }\n        }\n      ]\n    },\n    {\n      "id": "OTP",\n      "time": 1560199033954,\n      "messaging": [\n        {\n          "sender": {\n            "id": "1614379680"\n          },\n          "recipient": {\n            "appCustomerId": "70021",\n            "id": "243540663"\n          },\n          "timestamp": 1560199028982,\n          \n          "delivery": {\n            "mids": [\n              "messageId-101"\n            ],\n            "watermark": 1560199028982\n          }\n        }\n      ]\n    }\n  ]\n}\n')),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},"Bir ba\u015fka \xf6rnek ise kullan\u0131c\u0131 chat ekran\u0131 a\xe7\u0131kken webbot \xfczerinden mesajlar\u0131 alm\u0131\u015f ve an\u0131nda okumu\u015f olabilir. Bu durumda a\u015fa\u011f\u0131daki gibi bir event i\xe7eri\u011fi al\u0131rs\u0131n\u0131z.")),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-json"}),'{\n  "object": "dialog",\n  "entry": [\n    {\n      "id": "OTP",\n      "time": 1560199722035,\n      \n      "messaging": [\n        {\n          "sender": {\n            "id": "1614379680"\n          },\n          "recipient": {\n            "appCustomerId": "70021",\n            "id": "243540663"\n          },\n          "timestamp": 1560199716748,\n          \n          "messageEcho": {\n            "app_id": 1614379680,\n            "is_echo": true,\n            "mid": "messageId-102"\n          }\n        }\n      ]\n    },\n    {\n      "id": "OTP",\n      "time": 1560199722035,\n\n      "messaging": [\n        {\n          "sender": {\n            "id": "1614379680"\n          },\n          "recipient": {\n            "appCustomerId": "70021",\n            "id": "243540663"\n          },\n          "timestamp": 1560199717421,\n          \n          "delivery": {\n            "mids": [\n              "messageId-102"\n            ],\n            "watermark": 1560199717421\n          }\n        }\n      ]\n    },\n    {\n      "id": "OTP",\n      "time": 1560199722035,\n      \n      "messaging": [\n        {\n          "sender": {\n            "id": "1614379680"\n          },\n          "recipient": {\n            "appCustomerId": "70021",\n            "id": "243540663"\n          },\n          "timestamp": 1560199717448,\n\n          "reads": {\n            "mids": [\n              "messageId-102"\n            ],\n            "watermark": 1560199717448\n          }\n        }\n      ]\n    }\n  ]\n} \n')),Object(r.b)("ol",{start:3},Object(r.b)("li",{parentName:"ol"},"Ayn\u0131 anda birden fazla kullan\u0131c\u0131ya ayn\u0131 anda mesaj g\xf6nderilmektedir. A\u015fa\u011f\u0131daki \xf6rnek event iste\u011finde 70021 ve 70022 m\xfc\u015fteri numaralar\u0131na webbot taraf\u0131ndan yakla\u015f\u0131k zamanlarda mesaj g\xf6nderilmi\u015f ve 70021 numaral\u0131 m\xfc\u015fteriye mesaj iletilmi\u015f ama 70022 numaral\u0131 m\xfc\u015fteriye hen\xfcz iletilememi\u015ftir.")),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-json"}),'{\n  "object": "dialog",\n  "entry": [\n    {\n      "id": "OTP",\n      "time": 1560200490563,\n      \n      "messaging": [\n        {\n          "recipient": {\n            "appCustomerId": "70021",\n            "id": "243540663"\n          },\n          "sender": {\n            "id": "1614379680"\n          },\n          "timestamp": 1560200485050,\n          \n          "messageEcho": {\n            "app_id": 1614379680,\n            "is_echo": true,\n            "mid": "messageId-103"\n          }\n        }\n      ]\n    },\n    {\n      "id": "OTP",\n      "time": 1560200490563,\n      \n      "messaging": [\n        {\n          "recipient": {\n            "appCustomerId": "70022",\n            "id": "1588406039"\n          },\n          "sender": {\n            "id": "1614379680"\n          },\n          "timestamp": 1560200488953,\n          \n          "messageEcho": {\n            "app_id": 1614379680,\n            "is_echo": true,\n            "mid": "messageId-101"\n          }\n        }\n      ]\n    },\n    {\n      "id": "OTP",\n      "time": 1560200490563,\n      "messaging": [\n        {\n          "recipient": {\n            "appCustomerId": "70021",\n            "id": "243540663"\n          },\n          "sender": {\n            "id": "1614379680"\n          },\n          "timestamp": 1560200485546,\n          "delivery": {\n            "mids": [\n              "messageId-103"\n            ],\n            "watermark": 1560200485546\n          }\n        }\n      ]\n    }\n  ]\n}\n')),Object(r.b)("ol",{start:4},Object(r.b)("li",{parentName:"ol"},"Bir ba\u015fka \xf6rnek ise kullan\u0131c\u0131ya mesajlar iletilmi\u015f fakat kullan\u0131c\u0131 bir s\xfcre sonra kendisine g\xf6nderilem mesajlar\u0131 okumu\u015ftur. Bu durumda kullan\u0131c\u0131n\u0131n mesajlar\u0131 okudu\u011fu anda sadece okuma eventleri a\u015fa\u011f\u0131daki gibi olacakt\u0131r.\nA\u015fa\u011f\u0131daki i\xe7erikten g\xf6r\xfcld\xfc\u011f\xfc \xfczere kullan\u0131c\u0131 o anda messageId-103, messageId-104, messageId-105 mesaj id'li mesajlar\u0131 okumu\u015ftur.")),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-json"}),'{\n  "object": "dialog",\n  "entry": [\n    {\n      "id": "OTP",\n      "time": 1560201130747,\n      \n      "messaging": [\n        {\n          "sender": {\n            "id": "1614379680"\n          },\n          "recipient": {\n            "appCustomerId": "70021",\n            "id": "243540663"\n          },\n          "timestamp": 1560201125731,\n          \n          "reads": {\n            "mids": [\n              "messageId-103",\n              "messageId-104",\n              "messageId-105"\n            ],\n            "watermark": 1560201125731\n          }\n        }\n      ]\n    }\n  ]\n}\n')))}m.isMDXComponent=!0}}]);