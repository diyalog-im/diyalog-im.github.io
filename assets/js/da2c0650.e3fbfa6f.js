(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{141:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return b})),a.d(t,"Highlight",(function(){return o})),a.d(t,"HighlightWithBlack",(function(){return d})),a.d(t,"HighlightWithRed",(function(){return c})),a.d(t,"ColoredText",(function(){return u})),a.d(t,"CenteredText",(function(){return s})),a.d(t,"GreenColoredText",(function(){return m})),a.d(t,"BlueColoredText",(function(){return p})),a.d(t,"SmallText",(function(){return g})),a.d(t,"toc",(function(){return j})),a.d(t,"default",(function(){return y}));var n=a(3),r=a(7),l=(a(0),a(156)),i=(a(157),{id:"diyalog-reporting-api-getmessagingdetail",title:"getmessagingdetail",sidebar_label:"getmessagingdetail"}),b={unversionedId:"diyalog-reporting-api-getmessagingdetail",id:"diyalog-reporting-api-getmessagingdetail",isDocsHomePage:!1,title:"getmessagingdetail",description:"<span",source:"@site/../docs/diyalog-reporting-api-getmessagingdetail.md",slug:"/diyalog-reporting-api-getmessagingdetail",permalink:"/docs/diyalog-reporting-api-getmessagingdetail",version:"current",sidebar_label:"getmessagingdetail",sidebar:"docs",previous:{title:"getcustomermessaginglist",permalink:"/docs/diyalog-reporting-api-getcustomermessaginglist"},next:{title:"Overview",permalink:"/docs/diyalog-simplepush-api-overview"}},o=function(e){var t=e.children,a=e.color;return Object(l.b)("span",{style:{backgroundColor:a,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},d=function(e){var t=e.children,a=e.color;return Object(l.b)("span",{style:{backgroundColor:a,borderRadius:"2px",padding:"0.2rem"}},t)},c=function(e){var t=e.children,a=e.color;return Object(l.b)("span",{style:{color:"#d60b0b",backgroundColor:a,borderRadius:"2px",padding:"0.2rem"}},t)},u=function(e){var t=e.children,a=e.color;return Object(l.b)("span",{style:{color:a}},t)},s=function(e){var t=e.children;return Object(l.b)("span",{style:{align:"center"}},t)},m=function(e){var t=e.children;return Object(l.b)("span",{style:{color:"#42b72a"}},t)},p=function(e){var t=e.children;return Object(l.b)("span",{style:{color:"#1877F2"}},t)},g=function(e){var t=e.children;return Object(l.b)("span",{style:{fontSize:"smaller"}},t)},j=[{value:"<BlueColoredText>POST</BlueColoredText> v1/reporting/getmessagingdetail",id:"post-v1reportinggetmessagingdetail",children:[]},{value:"Request Body",id:"request-body",children:[]},{value:"Responses",id:"responses",children:[]}],O={Highlight:o,HighlightWithBlack:d,HighlightWithRed:c,ColoredText:u,CenteredText:s,GreenColoredText:m,BlueColoredText:p,SmallText:g,toc:j};function y(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},O,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h3",{id:"post-v1reportinggetmessagingdetail"},Object(l.b)(p,{mdxType:"BlueColoredText"},"POST")," v1/reporting/getmessagingdetail"),Object(l.b)("p",null,"Bu API arac\u0131l\u0131\u011f\u0131 ile iki tarih aral\u0131\u011f\u0131nda bir \xe7al\u0131\u015fan\u0131n bir m\xfc\u015fteri ile olan yaz\u0131\u015fmalar\u0131n\u0131n i\xe7eriklerinin g\xf6r\xfcnt\xfclenebilece\u011fi dinamik link bilgisi al\u0131nabilir. API kendisine verilen parametreler i\xe7in dinamik bir link olu\u015fturur ve cevap olarak d\xf6ner.  Bu link bir browser'da a\xe7\u0131larak yap\u0131lan Diyalog platfromu \xfczerinden yap\u0131lan yaz\u0131\u015fmalar g\xf6r\xfcnt\xfclenebilir."),Object(l.b)("p",null,"API linki olu\u015ftururken iki ki\u015fi aras\u0131nda mesajla\u015fma olup olmad\u0131\u011f\u0131na bakmaks\u0131z\u0131n otomatik link olu\u015fturur. E\u011fer herhangi bir mesajla\u015fma yap\u0131lmam\u0131\u015f ise API'den gelen dinamik link a\xe7\u0131ld\u0131\u011f\u0131nda bo\u015f  i\xe7erik g\xf6r\xfcnecektir."),Object(l.b)("p",null,"API istekleri"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"HMAC Authentication ile do\u011frulanmal\u0131d\u0131r. HMAC Authentication i\xe7in ",Object(l.b)("a",{parentName:"li",href:"/docs/diyalog-api-authentication"},"Authentication")," dok\xfcman\u0131na bak\u0131n\u0131z."),Object(l.b)("li",{parentName:"ul"},"API URI : ",Object(l.b)(c,{color:"#f2f2f2",mdxType:"HighlightWithRed"},"https://DIYALOG-SERVER-API-ENDPOINT/v1/reporting/getcalllist")),Object(l.b)("li",{parentName:"ul"},"HTTP \u0130stek T\xfcr\xfc ",Object(l.b)(c,{color:"#f2f2f2",mdxType:"HighlightWithRed"},"POST")),Object(l.b)("li",{parentName:"ul"},"HTTP Content-Type ",Object(l.b)(c,{color:"#f2f2f2",mdxType:"HighlightWithRed"},"application/json"))),Object(l.b)("h3",{id:"request-body"},"Request Body"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:"left"},"Schema"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)(m,{mdxType:"GreenColoredText"},"json object"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)(g,{mdxType:"SmallText"},Object(l.b)(p,{mdxType:"BlueColoredText"},"staffId")," ",Object(l.b)(m,{mdxType:"GreenColoredText"},"(string)"),"  ",Object(l.b)("br",null)," \xc7al\u0131\u015fan sicil numaras\u0131."))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)(g,{mdxType:"SmallText"},Object(l.b)(p,{mdxType:"BlueColoredText"},"customerId")," ",Object(l.b)(m,{mdxType:"GreenColoredText"},"(string)")," ",Object(l.b)("br",null),"M\xfc\u015fteri numaras\u0131."))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)(g,{mdxType:"SmallText"},Object(l.b)(p,{mdxType:"BlueColoredText"},"startDate")," ",Object(l.b)(m,{mdxType:"GreenColoredText"},"(long)")," ",Object(l.b)("br",null)," Unix epoch timestamps (miliseconds). Mesajla\u015fma ba\u015flang\u0131\xe7 tarihidir."))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)(g,{mdxType:"SmallText"},Object(l.b)(p,{mdxType:"BlueColoredText"},"endDate")," ",Object(l.b)(m,{mdxType:"GreenColoredText"},"(long)")," ",Object(l.b)("br",null)," Unix epoch timestamps (miliseconds). Mesajla\u015fma biti\u015f tarihidir."))))),Object(l.b)("h4",{id:"\xf6rnek-json-request-body-"},"\xd6rnek Json Request Body :"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n    "staffId" : "45188",\n    "customerId" : "5667067",\n    "startDate" : 1610856400000,\n    "endDate" : 1635892494000\n}\n')),Object(l.b)("h3",{id:"responses"},"Responses"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:"left"},Object(l.b)(p,{mdxType:"BlueColoredText"},"HTTP 200 Response")))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)(m,{mdxType:"GreenColoredText"},"json object")," ",Object(l.b)("br",null)," ",Object(l.b)(g,{mdxType:"SmallText"},"API cevap olarak json obje d\xf6ner. Bu obje i\xe7erisinde mesajla\u015fma i\xe7eri\u011finin g\xf6r\xfcn\xfclenebilece\u011fi dinamik link bilgisi d\xf6ner."))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"\xa0","\xa0","\xa0","\xa0","\xa0",Object(l.b)(m,{mdxType:"GreenColoredText"},"json object"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"\xa0","\xa0","\xa0","\xa0","\xa0",Object(l.b)(g,{mdxType:"SmallText"},Object(l.b)(p,{mdxType:"BlueColoredText"},"isSuccess")," ",Object(l.b)(m,{mdxType:"GreenColoredText"},"(boolean)")," ",Object(l.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0"," API'nin ba\u015far\u0131l\u0131 olup olmad\u0131\u011f\u0131 bilgisini d\xf6ner. E\u011fer true ise ba\u015far\u0131l\u0131 demektir ve conversationDetailLink i\xe7erisinde dinamik link iletilir. E\u011fer false d\xf6ner ise API'nin ba\u015far\u0131s\u0131z oldu\u011fu anlam\u0131na gelir. Bu durumda conversationDetailLink bo\u015f d\xf6ner ver error alan\u0131nda hata mesaj\u0131 d\xf6ner."))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"\xa0","\xa0","\xa0","\xa0","\xa0",Object(l.b)(g,{mdxType:"SmallText"},Object(l.b)(p,{mdxType:"BlueColoredText"},"conversationDetailLink")," ",Object(l.b)(m,{mdxType:"GreenColoredText"},"(string)"),"   ",Object(l.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0"," \u0130lgili mesajla\u015fman\u0131n Diyalog platfromuna ba\u011flan\u0131larak g\xf6r\xfcnt\xfclenebilece\u011fi dinamik linktir. Bu link bir browser'da a\xe7\u0131ld\u0131\u011f\u0131nda, Diyalog uygulamas\u0131na ba\u011flan\u0131l\u0131r ve mesajla\u015fma i\xe7erikleri Diyalog uygulamas\u0131 \xfczerinden g\xf6r\xfcnt\xfclenebilir. API hata al\u0131rsa bu alan bo\u015f olarak d\xf6necektir. Ek olarak e\u011fer iki ki\u015fi aras\u0131nda API'ye verilen tarihler aras\u0131nda bir mesajla\u015fma olmam\u0131\u015f ise link a\xe7\u0131ld\u0131\u011f\u0131nda i\xe7erik bo\u015f olarak g\xf6r\xfcnecektir."))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"\xa0","\xa0","\xa0","\xa0","\xa0",Object(l.b)(g,{mdxType:"SmallText"},Object(l.b)(p,{mdxType:"BlueColoredText"},"error")," ",Object(l.b)(m,{mdxType:"GreenColoredText"},"(string)")," ",Object(l.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0"," Opsiyoneldir. ",Object(l.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0"," API hata al\u0131rsa bu alanda hata mesaj\u0131 d\xf6ner."))))),Object(l.b)("h4",{id:"\xf6rnek-response-body-"},"\xd6rnek Response Body :"),Object(l.b)("p",null,"Ba\u015far\u0131l\u0131 Durumda :"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'\n{\n    "conversationDetailLink": "http://web.diyalog.im/views.html#/messaging?...",\n    "isSuccess": true\n}\n')),Object(l.b)("p",null,"Hata Durumunda :"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n    "conversationDetailLink": "",\n    "error": "Staff not found in the system",\n    "isSuccess": false\n}\n')),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:"left"},Object(l.b)(c,{mdxType:"HighlightWithRed"},"HTTP 500 Response")))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)(m,{mdxType:"GreenColoredText"},"string")," ",Object(l.b)("br",null)," ",Object(l.b)(g,{mdxType:"SmallText"},"API hata ald\u0131\u011f\u0131nda HTTP 500 status kodu ile cevap d\xf6necektir. API'nin hata mesaj\u0131 metin olarak d\xf6ner."))))),Object(l.b)("h4",{id:"api-iste\u011fi-do\u011frulama-s\u0131ras\u0131nda-hata-al\u0131rsa-a\u015fa\u011f\u0131daki-hata-kodlar\u0131n\u0131-d\xf6ner"},"API iste\u011fi do\u011frulama s\u0131ras\u0131nda hata al\u0131rsa a\u015fa\u011f\u0131daki hata kodlar\u0131n\u0131 d\xf6ner."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Http Status Code"),Object(l.b)("th",{parentName:"tr",align:null},"Mesaj"),Object(l.b)("th",{parentName:"tr",align:null},"A\xe7\u0131klama"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)(c,{mdxType:"HighlightWithRed"},"400")),Object(l.b)("td",{parentName:"tr",align:null},"Required headers not found"),Object(l.b)("td",{parentName:"tr",align:null},"Date, X-Requester-UserId veya X-Authorization header alanlar\u0131ndan biri veya birka\xe7\u0131 eksik.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)(c,{mdxType:"HighlightWithRed"},"400")),Object(l.b)("td",{parentName:"tr",align:null},"Authorization failed due to data format not valid"),Object(l.b)("td",{parentName:"tr",align:null},'X-Authorization header alan\u0131ndaki bilgiler do\u011fru formatta de\u011fil. Alan\u0131n "DLGA " ile ba\u015flay\u0131p accesKeyId ve imza de\u011ferleri aras\u0131na : oldu\u011funu kontrol edin.')),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)(c,{mdxType:"HighlightWithRed"},"400")),Object(l.b)("td",{parentName:"tr",align:null},"Authorization failed due to date not valid"),Object(l.b)("td",{parentName:"tr",align:null},'X-DLG-DATE tarih format\u0131 "EEE, dd MMM yyyy HH:mm:ss Z" format\u0131nda de\u011fil. Kontrol edin..')),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)(c,{mdxType:"HighlightWithRed"},"401")),Object(l.b)("td",{parentName:"tr",align:null},"Authorization failed"),Object(l.b)("td",{parentName:"tr",align:null},"\u0130stek do\u011frulanamad\u0131. \u0130mza de\u011feri do\u011fru de\u011fil.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)(c,{mdxType:"HighlightWithRed"},"403")),Object(l.b)("td",{parentName:"tr",align:null},"Request time may not be correct."),Object(l.b)("td",{parentName:"tr",align:null},"\u0130stek header'\u0131nda gelen x-dlg-date ve sunucu zaman\u0131 aras\u0131nda +/- 15 dakikadan fazla fark var.")))))}y.isMDXComponent=!0},156:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return p}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=r.a.createContext({}),c=function(e){var t=r.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},u=function(e){var t=c(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(a),m=n,p=u["".concat(i,".").concat(m)]||u[m]||s[m]||l;return a?r.a.createElement(p,b(b({ref:t},d),{},{components:a})):r.a.createElement(p,b({ref:t},d))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:n,i[1]=b;for(var d=2;d<l;d++)i[d]=a[d];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},157:function(e,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"a",(function(){return i}));var n=a(16),r=a(158);function l(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(n.default)();return{withBaseUrl:(a,n)=>function(e,t,a,{forcePrependBaseUrl:n=!1,absolute:l=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(n)return t+a;const i=a.startsWith(t)?a:t+a.replace(/^\//,"");return l?e+i:i}(t,e,a,n)}}function i(e,t={}){const{withBaseUrl:a}=l();return a(e,t)}},158:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))}}]);