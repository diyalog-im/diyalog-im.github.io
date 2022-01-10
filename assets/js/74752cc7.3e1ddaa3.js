(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{100:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return b})),t.d(n,"metadata",(function(){return d})),t.d(n,"Highlight",(function(){return o})),t.d(n,"HighlightWithBlack",(function(){return u})),t.d(n,"ColoredText",(function(){return c})),t.d(n,"CenteredText",(function(){return s})),t.d(n,"GreenColoredText",(function(){return p})),t.d(n,"BlueColoredText",(function(){return m})),t.d(n,"toc",(function(){return g})),t.d(n,"default",(function(){return j}));var a=t(3),r=t(7),i=(t(0),t(149)),l=t(150),b={id:"diyalog-messaging-api-sendotp-api",title:"SendOTP API",sidebar_label:"SendOTP API"},d={unversionedId:"tr/diyalog-messaging-api-sendotp-api",id:"tr/diyalog-messaging-api-sendotp-api",isDocsHomePage:!1,title:"SendOTP API",description:"<span",source:"@site/../docs/tr/diyalog-messaging-api-sendotp-api.md",slug:"/tr/diyalog-messaging-api-sendotp-api",permalink:"/docs/tr/diyalog-messaging-api-sendotp-api",version:"current",sidebar_label:"SendOTP API"},o=function(e){var n=e.children,t=e.color;return Object(i.b)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},n)},u=function(e){var n=e.children,t=e.color;return Object(i.b)("span",{style:{backgroundColor:t,borderRadius:"2px",padding:"0.2rem"}},n)},c=function(e){var n=e.children,t=e.color;return Object(i.b)("span",{style:{color:t}},n)},s=function(e){var n=e.children;return Object(i.b)("span",{style:{align:"center"}},n)},p=function(e){var n=e.children;return Object(i.b)("span",{style:{color:"#42b72a"}},n)},m=function(e){var n=e.children;return Object(i.b)("span",{style:{color:"#1877F2"}},n)},g=[{value:"\u0130stek URI&#39;\u0131",id:"i\u0307stek-uri\u0131",children:[]},{value:"\u0130stek Json Objesi Detaylar\u0131",id:"i\u0307stek-json-objesi-detaylar\u0131",children:[{value:"<GreenColoredText>buttonV2</GreenColoredText>",id:"buttonv2",children:[]}]},{value:"D\xf6nen Yan\u0131t (Response)",id:"d\xf6nen-yan\u0131t-response",children:[{value:"Yan\u0131t \xd6rne\u011fi",id:"yan\u0131t-\xf6rne\u011fi",children:[]}]}],O={Highlight:o,HighlightWithBlack:u,ColoredText:c,CenteredText:s,GreenColoredText:p,BlueColoredText:m,toc:g};function j(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},O,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Kullan\u0131c\u0131lar\u0131n\u0131za tek seferlik \u015fifre (mobil onay kodu) g\xf6ndermek isterseniz bu api'yi kullanabilirsiniz.\nNormal \u015fartlarda SendMessage api'sini de kullanarak kullan\u0131c\u0131lar\u0131n\u0131za OTP g\xf6nderebilirsiniz ama bu api'yi kullan\u0131rsan\u0131z,\ng\xf6nderdi\u011finiz otp mesajlar\u0131 ayr\u0131 veri tabanlar\u0131nda istatistiksel olarak tutulmakta ve admin kullan\u0131c\u0131lar taraf\u0131ndan istenildi\u011finde\nkontrol edilebilmektedir."),Object(i.b)("p",null,"SendMessage api'si ile g\xf6nderilmesinden bir di\u011fer fark\u0131da DLG Mobil SDK'lar bu otp mesajlar\u0131ndan gelen tek seferlik \u015fifre bilgisini\nsdk'y\u0131 kullanan ana uygulamaya event olarak da haberdar edebilmekte ve bu sayede ana uygulamada\notp de\u011ferleri otomatik olarak alg\u0131lan\u0131p do\u011frulu\u011fu kontrol edildikten sonra kullan\u0131c\u0131n\u0131n elle m\xfcdahale yapmas\u0131na gerek kalmadan\ni\u015fleme devam edebilmesini sa\u011flayabilmektedir."),Object(i.b)("p",null,"OTP mesajlar\u0131da metin, g\xf6rsel ve butonlardan olau\u015fabilir.\n\u0130sterseniz sadece metin, veya metin ve g\xf6rsel veya metin, d\xfc\u011fmeler veya metin, g\xf6rsel ve d\xfc\u011fmelerden olu\u015fan \u015fekilde\notp mesaj\u0131 iletebilirsiniz."),Object(i.b)("img",{alt:"",src:Object(l.a)("img/otpmessage.png"),height:"300px"}),Object(i.b)("h2",{id:"i\u0307stek-uri\u0131"},"\u0130stek URI'\u0131"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"https://<DIYALOG-SERVER-API-ENDPOINT>/v1/bots/sendmok/<YOUR-BOT-ACCESS-TOKEN>\n")),Object(i.b)("h4",{id:"\xf6rnek-i\u0307stek"},"\xd6rnek \u0130stek"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-powershell"},'curl -X POST -H "Content-Type: application/json" -d \'{\n    "customerNo": "123456789",\n    "messageId": "messageId-74",\n    "mokMessage": "Your one time password is \\"123456\\" ",\n    "mokValue": "33",\n    "imageUrl" : "https://dlgmessenger.com/otp.jpg",\n    "txCode": "LOG2",\n    "deviceId": "628FAF5A-B690-4E1A-A0EC-1518A6334F0B",\n    "buttonsV2" : \n     [\n             {\n                "type" :"postback",\n                "title" : "Approve",\n                "payload" : "123456",\n                "payloadHidden" : true,\n                "payloadSeenByUser": "Onayl\u0131yorum"\n            },\n             {\n                "type" :"postback",\n                "title" : "Dismiss",\n                "payload" : "cancelled",\n                "payloadSeenByUser": "\u0130ptal Edildi"\n            }\n        ]\n}\' "https://<DIYALOG-SERVER-API-ENDPOINT>/v1/bots/sendmok/<YOUR-BOT-ACCESS-TOKEN>"\n')),Object(i.b)("h2",{id:"i\u0307stek-json-objesi-detaylar\u0131"},"\u0130stek Json Objesi Detaylar\u0131"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Alan"),Object(i.b)("th",{parentName:"tr",align:null},"Tip"),Object(i.b)("th",{parentName:"tr",align:null},"A\xe7\u0131klama"),Object(i.b)("th",{parentName:"tr",align:null},"Zorunlu Alan"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"customerNo"),Object(i.b)("td",{parentName:"tr",align:null},"String"),Object(i.b)("td",{parentName:"tr",align:null},"Otp mesaj\u0131 g\xf6ndermek istedi\u011finiz kullan\u0131c\u0131n\u0131n m\xfc\u015fteri numaras\u0131d\u0131r."),Object(i.b)("td",{parentName:"tr",align:null},"Evet")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"messageId"),Object(i.b)("td",{parentName:"tr",align:null},"String"),Object(i.b)("td",{parentName:"tr",align:null},"Sisteminizde olu\u015fturdu\u011funuz tekil mesaj id'sidir. T\xfcm mesaj iletimleri ve cevaplar\u0131 vs. gibi eventleri DLG bu id ile size besler. E\u011fer id vermezseniz DLG sizin i\xe7in bir id \xfcretecek ve bu id \xfczerinden eventleri iletecektir."),Object(i.b)("td",{parentName:"tr",align:null},"Evet")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"mokMessage"),Object(i.b)("td",{parentName:"tr",align:null},"String"),Object(i.b)("td",{parentName:"tr",align:null},"M\xfc\u015fterinize g\xf6stermek istedi\u011finiz otp mesaj\u0131d\u0131r."),Object(i.b)("td",{parentName:"tr",align:null},"Evet")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"mokValue"),Object(i.b)("td",{parentName:"tr",align:null},"String"),Object(i.b)("td",{parentName:"tr",align:null},"Otp de\u011feridir. Bu alan\u0131 api'ye iletirseniz Mobil DLG SDK otp de\u011ferini ana uygulamaya event olarak da g\xf6nderir. Bu sayede isterseniz otomatik otp giri\u015f i\u015flemleri yapabilirsiniz."),Object(i.b)("td",{parentName:"tr",align:null},"Opsiyonel")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"imageUrl"),Object(i.b)("td",{parentName:"tr",align:null},"String"),Object(i.b)("td",{parentName:"tr",align:null},"E\u011fer otp mesaj\u0131n\u0131za g\xf6rsel eklemek istiyorsan\u0131z bu alan g\xf6rselinizin uri adresini verebilirsiniz."),Object(i.b)("td",{parentName:"tr",align:null},"Opsiyonel")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"txCode"),Object(i.b)("td",{parentName:"tr",align:null},"String"),Object(i.b)("td",{parentName:"tr",align:null},"Loglama i\xe7in isterseniz bu alana g\xf6nderdi\u011finiz otp'nin hangi i\u015flem ile ilgili oldu\u011funu yazabilirsiniz. Bu alan sadece geriye d\xf6n\xfck incelemelerde kullan\u0131l\u0131r."),Object(i.b)("td",{parentName:"tr",align:null},"Opsiyonel")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"deviceId"),Object(i.b)("td",{parentName:"tr",align:null},"String"),Object(i.b)("td",{parentName:"tr",align:null},"Loglama i\xe7in isterseniz otp mesaj\u0131n\u0131 g\xf6nderdi\u011finiz kullan\u0131c\u0131n\u0131n cihaz id'sini bu alandan yazabilirsiniz. Bu alan sadece geriye d\xf6n\xfck incelemelerde kullan\u0131l\u0131r."),Object(i.b)("td",{parentName:"tr",align:null},"Opsiyonel")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"buttonsV2"),Object(i.b)("td",{parentName:"tr",align:null},"Array<",Object(i.b)("a",{parentName:"td",href:"#greencoloredtextbuttonv2greencoloredtext"},"buttonV2"),">"),Object(i.b)("td",{parentName:"tr",align:null},"Otp mesaj\u0131n\u0131za onayla, iptal gibi d\xfc\u011fmeler koyabilirsiniz. Bu d\xfc\u011fmeler sayesinde kullan\u0131c\u0131ya otomatik olarak otp'yi onaylatabilirsiniz."),Object(i.b)("td",{parentName:"tr",align:null},"Opsiyonel")))),Object(i.b)("h3",{id:"buttonv2"},Object(i.b)(p,{mdxType:"GreenColoredText"},"buttonV2")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Alan"),Object(i.b)("th",{parentName:"tr",align:null},"Tip"),Object(i.b)("th",{parentName:"tr",align:null},"A\xe7\u0131klama"),Object(i.b)("th",{parentName:"tr",align:null},"Zorunlu Alan"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"type"),Object(i.b)("td",{parentName:"tr",align:null},"String"),Object(i.b)("td",{parentName:"tr",align:null},"Butona bas\u0131ld\u0131\u011f\u0131nda butonun davran\u0131\u015f\u0131n\u0131 belirler. ",Object(i.b)("strong",{parentName:"td"},'"postback"')," ve ",Object(i.b)("strong",{parentName:"td"},'"web_url"')," olarak iki t\xfcr\xfc vard\u0131r."),Object(i.b)("td",{parentName:"tr",align:null},"Evet")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"title"),Object(i.b)("td",{parentName:"tr",align:null},"String"),Object(i.b)("td",{parentName:"tr",align:null},"M\xfc\u015fteriye butonlar\u0131n \xfczerinde g\xf6sterilecek metindir."),Object(i.b)("td",{parentName:"tr",align:null},"Evet")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"payload"),Object(i.b)("td",{parentName:"tr",align:null},"String"),Object(i.b)("td",{parentName:"tr",align:null},"Bu alanda verdi\u011finiz data e\u011fer buton tipi ",Object(i.b)("strong",{parentName:"td"},"postback")," ise butona bas\u0131ld\u0131\u011f\u0131nda size geri iletilir. Bu sayede m\xfc\u015fterinin hangi butona bast\u0131\u011f\u0131n\u0131 anlayabilirsiniz. E\u011fer buton tipiniz ",Object(i.b)("strong",{parentName:"td"},'"web_url"')," ise bu alanda kullan\u0131c\u0131n\u0131zn a\xe7mas\u0131n\u0131 istedi\u011finiz uri adresini vermelisiniz. Kullan\u0131c\u0131 d\xfc\u011fmeye bast\u0131\u011f\u0131nda bu uri cihazda a\xe7\u0131lacakt\u0131r."),Object(i.b)("td",{parentName:"tr",align:null},"Evet")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"payloadHidden"),Object(i.b)("td",{parentName:"tr",align:null},"Boolean"),Object(i.b)("td",{parentName:"tr",align:null},"Bu flag ",Object(i.b)("strong",{parentName:"td"},"postback")," tipi d\xfc\u011fmeler i\xe7in ge\xe7erlidir. Ger\xe7ekten mesaj\u0131 iletti\u011finiz m\xfc\u015fterinin cihaz\u0131ndan, payload geldi\u011finden emin olmak istiyorsan\u0131z bu flag'i true set etmeniz gerekiyor. Bu flag true ise mobil cihazda bulunan uygulama anahtarlar\u0131 ile payload imzalanacak ve sizin uygulaman\u0131za iletilecektir. Tabi imzalanm\u0131\u015f datay\u0131 \xe7\xf6zebilmek i\xe7in sizinde uygulama anahtarlar\u0131n\u0131 biliyor olman\u0131z gerekiyor."),Object(i.b)("td",{parentName:"tr",align:null},"Optional")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"payloadSeenByUser"),Object(i.b)("td",{parentName:"tr",align:null},"String"),Object(i.b)("td",{parentName:"tr",align:null},"Bu alan e\u011fer m\xfc\u015fteriye butona bast\u0131\u011f\u0131nda chat ekran\u0131nda payload alan\u0131ndaki de\u011ferden farkl\u0131 bir mesaj g\xf6stermek isterseniz kullanaca\u011f\u0131n\u0131z aland\u0131r. Bu alanda verdi\u011finiz metin kullan\u0131c\u0131 d\xfc\u011fmeye bast\u0131\u011f\u0131nda chat ekran\u0131nda g\xf6r\xfcn\xfcr."),Object(i.b)("td",{parentName:"tr",align:null},"Optional")))),Object(i.b)(o,{color:"#da3d5f",mdxType:"Highlight"},"\xd6nemli Not :"),Object(i.b)("p",null,"Kullan\u0131c\u0131 mobil cihaz\u0131ndan, g\xf6nderdi\u011finiz buton objesi olan bir mesaj\u0131n butonuna bast\u0131\u011f\u0131nda, webhook yap\u0131s\u0131 \xfczerinden kullan\u0131c\u0131n\u0131n se\xe7ti\u011fi butonun payload alan\u0131nda verdi\u011finiz\nde\u011fer uygulaman\u0131za iletilir.  "),Object(i.b)("p",null,"E\u011fer ",Object(i.b)("strong",{parentName:"p"},"payloadHidden")," de\u011ferini ",Object(i.b)("strong",{parentName:"p"},"true")," yapm\u0131\u015fsan\u0131z payload mobil istemcide kurumun kendi bildi\u011fi DLG platformunun bilmedi\u011fi anahtarlar ile imzalan\u0131p size o \u015fekilde iletilir.\nBu sayede uygulaman\u0131z, ger\xe7ekten do\u011fru mobil cihazdan buton se\xe7iminin yap\u0131lm\u0131\u015f oldu\u011fundan emin olabilir. Bunun i\xe7in DLGSDK'n\u0131n \xe7al\u0131\u015ft\u0131\u011f\u0131 mobil uygulaman\u0131zda imzalama i\u015fleminin yap\u0131lm\u0131\u015f\nolmas\u0131 gerekmektedir. Ayr\u0131ca sizin uygulaman\u0131z\u0131nda ayn\u0131 anahtarlara sahip olmas\u0131 ve imzalanm\u0131\u015f payload'u de\u015fifre edebiliyor olman\u0131z gerekmektedir."),Object(i.b)("p",null,"Bir di\u011fer \xf6nemli konuda ",Object(i.b)("a",{parentName:"p",href:"(#greencoloredtextpayloadgreencoloredtext)%3E"},"payload")," objesi i\xe7in verdi\u011finiz ",Object(i.b)(p,{mdxType:"GreenColoredText"},"messageId")," dir. D\xfc\u011fmeye bas\u0131ld\u0131\u011f\u0131nda\nbu alan\u0131n de\u011feri payload ile birlikte a\u015fa\u011f\u0131daki formatta uygulaman\u0131za beslenir. Yani istek i\xe7erisinde\napi'ye iletilen mesageId k\xf6\u015feli parantez i\xe7erisinde, payload'unuzla \":\"  karakteri ile ayr\u0131larak iletilir. "),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\xd6rne\u011fin :"),Object(i.b)("br",{parentName:"p"}),"\n",'"',"[","messageId-74","]",':123456"'),Object(i.b)("p",null,"E\u011fer payloadHidden true olarak set edilmi\u015f olsayd\u0131 bu de\u011fer a\u015fa\u011f\u0131daki gibi olacakt\u0131r. Yani payload de\u011feri imzalanm\u0131\u015f olarak iletilecektir."),Object(i.b)("p",null,'"',"[","messageId-74","]",':12a22113123131213aaab444cb3c224bcb"'),Object(i.b)("h2",{id:"d\xf6nen-yan\u0131t-response"},"D\xf6nen Yan\u0131t (Response)"),Object(i.b)("p",null,"Ba\u015far\u0131l\u0131 sonu\xe7lanan API istekleri ",Object(i.b)("strong",{parentName:"p"},"http-2XX")," cevap kodu ile cevap json objesini d\xf6ner."),Object(i.b)("h3",{id:"yan\u0131t-\xf6rne\u011fi"},"Yan\u0131t \xd6rne\u011fi"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n   "recipient_id": "2074022437",\n   "message_id": "-7523925115459309081"\n}\n')))}j.isMDXComponent=!0},149:function(e,n,t){"use strict";t.d(n,"a",(function(){return c})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=r.a.createContext({}),u=function(e){var n=r.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):b(b({},n),e)),t},c=function(e){var n=u(e.components);return r.a.createElement(o.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},p=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,o=d(e,["components","mdxType","originalType","parentName"]),c=u(t),p=a,m=c["".concat(l,".").concat(p)]||c[p]||s[p]||i;return t?r.a.createElement(m,b(b({ref:n},o),{},{components:t})):r.a.createElement(m,b({ref:n},o))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=p;var b={};for(var d in n)hasOwnProperty.call(n,d)&&(b[d]=n[d]);b.originalType=e,b.mdxType="string"==typeof e?e:a,l[1]=b;for(var o=2;o<i;o++)l[o]=t[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},150:function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"a",(function(){return l}));var a=t(16),r=t(151);function i(){const{siteConfig:{baseUrl:e="/",url:n}={}}=Object(a.default)();return{withBaseUrl:(t,a)=>function(e,n,t,{forcePrependBaseUrl:a=!1,absolute:i=!1}={}){if(!t)return t;if(t.startsWith("#"))return t;if(Object(r.b)(t))return t;if(a)return n+t;const l=t.startsWith(n)?t:n+t.replace(/^\//,"");return i?e+l:l}(n,e,t,a)}}function l(e,n={}){const{withBaseUrl:t}=i();return t(e,n)}},151:function(e,n,t){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}t.d(n,"b",(function(){return a})),t.d(n,"a",(function(){return r}))}}]);