(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{156:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return s}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),c=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},m=function(e){var t=c(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,o=d(e,["components","mdxType","originalType","parentName"]),m=c(a),p=n,s=m["".concat(l,".").concat(p)]||m[p]||u[p]||i;return a?r.a.createElement(s,b(b({ref:t},o),{},{components:a})):r.a.createElement(s,b({ref:t},o))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=p;var b={};for(var d in t)hasOwnProperty.call(t,d)&&(b[d]=t[d]);b.originalType=e,b.mdxType="string"==typeof e?e:n,l[1]=b;for(var o=2;o<i;o++)l[o]=a[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},157:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return l}));var n=a(16),r=a(158);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(n.default)();return{withBaseUrl:(a,n)=>function(e,t,a,{forcePrependBaseUrl:n=!1,absolute:i=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(n)return t+a;const l=a.startsWith(t)?a:t+a.replace(/^\//,"");return i?e+l:l}(t,e,a,n)}}function l(e,t={}){const{withBaseUrl:a}=i();return a(e,t)}},158:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))},96:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return b})),a.d(t,"Highlight",(function(){return d})),a.d(t,"HighlightWithBlack",(function(){return o})),a.d(t,"HighlightWithRed",(function(){return c})),a.d(t,"ColoredText",(function(){return m})),a.d(t,"CenteredText",(function(){return u})),a.d(t,"GreenColoredText",(function(){return p})),a.d(t,"BlueColoredText",(function(){return s})),a.d(t,"SmallText",(function(){return O})),a.d(t,"toc",(function(){return j})),a.d(t,"default",(function(){return g}));var n=a(3),r=a(7),i=(a(0),a(156)),l=(a(157),{id:"diyalog-simplepush-api-sendpush",title:"sendpush",sidebar_label:"sendpush"}),b={unversionedId:"diyalog-simplepush-api-sendpush",id:"diyalog-simplepush-api-sendpush",isDocsHomePage:!1,title:"sendpush",description:"<span",source:"@site/../docs/diyalog-simplepush-api-sendpush.md",slug:"/diyalog-simplepush-api-sendpush",permalink:"/docs/diyalog-simplepush-api-sendpush",version:"current",sidebar_label:"sendpush",sidebar:"docs",previous:{title:"Overview",permalink:"/docs/diyalog-simplepush-api-overview"},next:{title:"notificationstatus",permalink:"/docs/diyalog-simplepush-api-notificationstatus"}},d=function(e){var t=e.children,a=e.color;return Object(i.b)("span",{style:{backgroundColor:a,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},o=function(e){var t=e.children,a=e.color;return Object(i.b)("span",{style:{backgroundColor:a,borderRadius:"2px",padding:"0.2rem"}},t)},c=function(e){var t=e.children,a=e.color;return Object(i.b)("span",{style:{color:"#d60b0b",backgroundColor:a,borderRadius:"2px",padding:"0.2rem"}},t)},m=function(e){var t=e.children,a=e.color;return Object(i.b)("span",{style:{color:a}},t)},u=function(e){var t=e.children;return Object(i.b)("span",{style:{align:"center"}},t)},p=function(e){var t=e.children;return Object(i.b)("span",{style:{color:"#42b72a"}},t)},s=function(e){var t=e.children;return Object(i.b)("span",{style:{color:"#1877F2"}},t)},O=function(e){var t=e.children;return Object(i.b)("span",{style:{fontSize:"smaller"}},t)},j=[{value:"<BlueColoredText>POST</BlueColoredText> v1/simplepush/sendpush",id:"post-v1simplepushsendpush",children:[]},{value:"Request Body",id:"request-body",children:[]},{value:"Responses",id:"responses",children:[]}],y={Highlight:d,HighlightWithBlack:o,HighlightWithRed:c,ColoredText:m,CenteredText:u,GreenColoredText:p,BlueColoredText:s,SmallText:O,toc:j};function g(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},y,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"post-v1simplepushsendpush"},Object(i.b)(s,{mdxType:"BlueColoredText"},"POST")," v1/simplepush/sendpush"),Object(i.b)("p",null,"Bu API arac\u0131l\u0131\u011f\u0131 ile tekil veya \xe7o\u011ful kullan\u0131c\u0131lar\u0131n\u0131za an\u0131nda push bildirimleri g\xf6nderebilirsiniz."),Object(i.b)("p",null,"Her istekte maximum ",Object(i.b)(c,{mdxType:"HighlightWithRed"},"1000")," adet kullan\u0131c\u0131ya push bildirimleri g\xf6nderebilirsiniz. 1000 adetten fazla ki\u015fi verilirse ",Object(i.b)(s,{mdxType:"BlueColoredText"},"MAX_PUSHES_PER_REQUEST_EXCEEDED")," hatas\u0131 al\u0131rs\u0131n\u0131z."),Object(i.b)("p",null,"API istekleri"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"HMAC Authentication ile do\u011frulanmal\u0131d\u0131r. HMAC Authentication i\xe7in ",Object(i.b)("a",{parentName:"li",href:"/docs/diyalog-api-authentication"},"Authentication")," dok\xfcman\u0131na bak\u0131n\u0131z."),Object(i.b)("li",{parentName:"ul"},"API URI : ",Object(i.b)(c,{color:"#f2f2f2",mdxType:"HighlightWithRed"},"https://DIYALOG-SERVER-API-ENDPOINT/v1/simplepush/sendpush")),Object(i.b)("li",{parentName:"ul"},"HTTP \u0130stek T\xfcr\xfc ",Object(i.b)(c,{color:"#f2f2f2",mdxType:"HighlightWithRed"},"POST")),Object(i.b)("li",{parentName:"ul"},"HTTP Content-Type ",Object(i.b)(c,{color:"#f2f2f2",mdxType:"HighlightWithRed"},"application/json"))),Object(i.b)("h3",{id:"request-body"},"Request Body"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Schema"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)(p,{mdxType:"GreenColoredText"},"json object"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"\xa0","\xa0","\xa0","\xa0","\xa0",Object(i.b)(O,{mdxType:"SmallText"},Object(i.b)(s,{mdxType:"BlueColoredText"},"to")," ",Object(i.b)(p,{mdxType:"GreenColoredText"},"(String[])")," ",Object(i.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0"," Push bildirim g\xf6ndermek istedi\u011fini kullan\u0131c\u0131 (m\xfc\u015fteri) numaras\u0131 veya numaralar\u0131 ",Object(i.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0"," Tek seferde 1000 kullan\u0131c\u0131 numaras\u0131 girmelisiniz. Daha fazla kullan\u0131c\u0131 numaras\u0131 girerseniz ",Object(i.b)(s,{mdxType:"BlueColoredText"},"MAX_PUSHES_PER_REQUEST_EXCEEDED")," hatas\u0131 al\u0131rs\u0131n\u0131z."))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"\xa0","\xa0","\xa0","\xa0","\xa0",Object(i.b)(O,{mdxType:"SmallText"},Object(i.b)(s,{mdxType:"BlueColoredText"},"data")," ",Object(i.b)(p,{mdxType:"GreenColoredText"},"(String)")," ",Object(i.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0"," Mobil cihaza g\xf6ndermek istesi\u011finiz payload datas\u0131d\u0131r. Maksimum 4kb b\xfcy\xfckl\xfc\u011f\xfcnde string de\u011fer veya  Stringify edilmi\u015f json object'i g\xf6nderebilirsiniz. Bu payload mobil cihaza bildirim olarak iletilir. \u0130letilen datay\u0131 mobil cihazda i\u015fleme i\u015flemini kendi mobil uygulaman\u0131nzda geli\u015ftirmeniz gerekmektedir."))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"\xa0","\xa0","\xa0","\xa0","\xa0",Object(i.b)(O,{mdxType:"SmallText"},Object(i.b)(s,{mdxType:"BlueColoredText"},"senderApp")," ",Object(i.b)(p,{mdxType:"GreenColoredText"},"(String)")," ",Object(i.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0",' Bu parametre g\xf6nderdi\u011finiz bildirimin hangi uygulamadan g\xf6nderildi\u011fini belirtmeniz i\xe7in kullan\u0131l\u0131r. Mobil cihaza "senderApp" custom datas\u0131 olarak iletilir. Dilerseniz bu data ile mobil cihaz\u0131n\u0131zda bildirimler ay\u0131rt edip buna g\xf6re i\u015fleyebilirsiniz.'))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"\xa0","\xa0","\xa0","\xa0","\xa0",Object(i.b)(O,{mdxType:"SmallText"},Object(i.b)(s,{mdxType:"BlueColoredText"},"time_to_live")," ",Object(i.b)(p,{mdxType:"GreenColoredText"},"(integer)")," ",Object(i.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0"," Opsiyoneldir. Android ve Huawei cihazlar i\xe7in ge\xe7erlidir.",Object(i.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0"," Cihaz \xe7evrimd\u0131\u015f\u0131ysa an\u0131nda bildirimin ne kadar s\xfcreyle (saniye olarak) saklanmas\u0131 gerekti\u011fini belirtir.",Object(i.b)("br",null),Object(i.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0"," E\u011fer bu parametre iletilmezse sistem anl\u0131k bildirim olarak de\u011ferlendirecek ve bu de\u011fer 0 olarak set edilecektir."))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"\xa0","\xa0","\xa0","\xa0","\xa0",Object(i.b)(O,{mdxType:"SmallText"},Object(i.b)(s,{mdxType:"BlueColoredText"},"content_available")," ",Object(i.b)(p,{mdxType:"GreenColoredText"},"(Boolean)")," ",Object(i.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0"," Opsiyoneldir. (IOS cihazlar i\xe7in ge\xe7erlidir.)",Object(i.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0"," Default de\u011feri ",Object(i.b)(c,{mdxType:"HighlightWithRed"},"false")," olarak verilmi\u015ftir. ",Object(i.b)(c,{mdxType:"HighlightWithRed"},"true")," olarak ayarland\u0131\u011f\u0131nda, uygulaman\u0131z\u0131n bildirim i\u015fleyicisi, uygulama arka planda \xe7al\u0131\u015f\u0131yor olsa bile \xe7a\u011fr\u0131lacak ve bu, kullan\u0131c\u0131y\u0131 uyarmadan sunucudan g\xfcncellenmi\u015f i\xe7eri\u011fin getirilmesine veya ba\u015fka \xf6zel ak\u0131\u015f\u0131n y\xfcr\xfct\xfclmesine olanak tan\u0131yacakt\u0131r.",Object(i.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0"," Bunun i\xe7in mobil uygulamamn\u0131n Background Modes -> Remote Notifications \xf6zelli\u011finin etkinle\u015ftirilmi\u015f olmas\u0131 gerekmektedir."))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"\xa0","\xa0","\xa0","\xa0","\xa0",Object(i.b)(O,{mdxType:"SmallText"},Object(i.b)(s,{mdxType:"BlueColoredText"},"mutable_content")," ",Object(i.b)(p,{mdxType:"GreenColoredText"},"(Boolean)")," ",Object(i.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0"," Opsiyoneldir. (IOS cihazlar i\xe7in ge\xe7erlidir.)",Object(i.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0"," Default de\u011feri ",Object(i.b)(c,{mdxType:"HighlightWithRed"},"false")," olarak verilmi\u015ftir. ",Object(i.b)(c,{mdxType:"HighlightWithRed"},"true")," olarak ayarland\u0131\u011f\u0131nda, uygulaman\u0131z\u0131n  ",Object(i.b)("a",{parentName:"td",href:"https://developer.apple.com/documentation/usernotifications/unnotificationserviceextension"},"Notification Service Extension'\u0131"),", uygulama arka planda \xe7al\u0131\u015f\u0131yor olsa bile \xe7a\u011fr\u0131lacak ve bildiriminiz i\xe7indeki zengin medya eklerinin indirilmesine ve g\xf6r\xfcnt\xfclenmesine olanak tan\u0131yacakt\u0131r.",Object(i.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0"," Bunun i\xe7in mobil uygulamamn\u0131n Background Modes -> Remote Notifications \xf6zelli\u011finin etkinle\u015ftirilmi\u015f olmas\u0131 gerekmektedir."))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"\xa0","\xa0","\xa0","\xa0","\xa0",Object(i.b)(O,{mdxType:"SmallText"},Object(i.b)(s,{mdxType:"BlueColoredText"},"ios_notification"),Object(i.b)(p,{mdxType:"GreenColoredText"},"(json object)"),Object(i.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0"," Opsiyoneldir. (IOS cihazlar i\xe7in ge\xe7erlidir.)",Object(i.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0"," Standart alert ve sesli bildirim g\xf6nderebilece\u011finiz IOS bildirim i\xe7eri\u011fidir. Parametreleri IOS notification d\xf6k\xfcmantasyonunda yer alan bildirim parametrelerine g\xf6re ayaralanm\u0131\u015ft\u0131r. Detay bilgilere Apple d\xf6k\xfcmantasyonundan bak\u0131labilir. "))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",Object(i.b)(O,{mdxType:"SmallText"},Object(i.b)(s,{mdxType:"BlueColoredText"},"title")," ",Object(i.b)(p,{mdxType:"GreenColoredText"},"(String)")," ",Object(i.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0"," iOS 8.2+ ve Apple Watch'ta g\xf6r\xfclebilen, bildirimin ba\u015fl\u0131\u011f\u0131nda g\xf6r\xfcnmesini istedi\u011finiz metindir."))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",Object(i.b)(O,{mdxType:"SmallText"},Object(i.b)(s,{mdxType:"BlueColoredText"},"body")," ",Object(i.b)(p,{mdxType:"GreenColoredText"},"(String)")," ",Object(i.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","  Kilit ekran\u0131nda ve iOS'un di\u011fer alanlar\u0131nda g\xf6r\xfcnen ana bildirim popup'\u0131nda g\xf6r\xfcnen mesajd\u0131r i\xe7eri\u011fidir."))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",Object(i.b)(O,{mdxType:"SmallText"},Object(i.b)(s,{mdxType:"BlueColoredText"},"badge")," ",Object(i.b)(p,{mdxType:"GreenColoredText"},"(integer)"),Object(i.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","  Opsiyoneldir. ",Object(i.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","  Uygulama ikonu \xfczerinde g\xfcr\xfcnmesini istedi\u011finiz say\u0131 varsa bu parametreyi girmelisiniz."))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",Object(i.b)(O,{mdxType:"SmallText"},Object(i.b)(s,{mdxType:"BlueColoredText"},"sound")," ",Object(i.b)(p,{mdxType:"GreenColoredText"},"(string)"),Object(i.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","  Opsiyoneldir. ",Object(i.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","  bildirim cihaza geldi\u011finde \xe7\u0131karmas\u0131n\u0131 istedi\u011finiz ses dosyas\u0131n\u0131n ismidir. Bu girilmezse bildirim popup'\u0131 ses \xe7\u0131karmadan  g\xf6r\xfcnecektir. Dosya mobil cihazda yoksa cihaz\u0131n default bildirim sesi \xe7alar."))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",Object(i.b)(O,{mdxType:"SmallText"},Object(i.b)(s,{mdxType:"BlueColoredText"},"category")," ",Object(i.b)(p,{mdxType:"GreenColoredText"},"(String)"),Object(i.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","  Opsiyoneldir. ",Object(i.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","  Uygulaman\u0131z\u0131n varsa Notification Content Extension i\xe7inde tan\u0131mlad\u0131\u011f\u0131n\u0131z kategoriyi \xe7a\u011f\u0131rmas\u0131n\u0131 sa\u011flar."))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",Object(i.b)(O,{mdxType:"SmallText"},Object(i.b)(s,{mdxType:"BlueColoredText"},"thread_id")," ",Object(i.b)(p,{mdxType:"GreenColoredText"},"(String)"),Object(i.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","  Opsiyoneldir. ",Object(i.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","  Ortak bir thread_id belirterek birden fazla bildirimi gruplaman\u0131z\u0131 sa\u011flar."))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",Object(i.b)(O,{mdxType:"SmallText"},Object(i.b)(s,{mdxType:"BlueColoredText"},"interruption_level")," ",Object(i.b)(p,{mdxType:"GreenColoredText"},"(String)"),Object(i.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","  Opsiyoneldir. ",Object(i.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","  iOS 15+ \xfczerinde bir bildirimin \xf6nemini ve teslim zamanlamas\u0131n\u0131 vermenizi sa\u011flar. Bu parametrenin de\u011feri 'Active', 'Critical', ,'Passive', 'Time_Sensitive' de\u011ferlerinden biri olabilir. B\xfcy\xfck k\xfc\xe7\xfck harf duyarl\u0131d\u0131r. Default de\u011feri 'Active' olarak verilmi\u015ftir."))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",Object(i.b)(O,{mdxType:"SmallText"},Object(i.b)(s,{mdxType:"BlueColoredText"},"loc_key")," ",Object(i.b)(p,{mdxType:"GreenColoredText"},"(String)"),Object(i.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","  Opsiyoneldir. ",Object(i.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","  Uygulaman\u0131z\u0131n Localizable.strings dosyas\u0131nda bulunan bir dizenin key ad\u0131d\u0131r. Lokalizasyon i\xe7in bu parametre kullan\u0131labilir.",Object(i.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0"," Detayl\u0131 bilgiye ",Object(i.b)("a",{parentName:"td",href:"https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/CreatingtheNotificationPayload.html#//apple_ref/doc/uid/TP40008194-CH10-SW9"},"APNs Dok\xfcmantasyonundan")," ula\u015f\u0131labilir."))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",Object(i.b)(O,{mdxType:"SmallText"},Object(i.b)(s,{mdxType:"BlueColoredText"},"loc_args")," ",Object(i.b)(p,{mdxType:"GreenColoredText"},"(String[])"),Object(i.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","  Opsiyoneldir. ",Object(i.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","  Belirtilen loc_key ile e\u015fle\u015fen lokalizasyon metnindeki %@ ile i\u015faretlenmi\u015f parametrik bilgilerin yerine de\u011fi\u015ftirilecek metinleri verebildi\u011finiz aland\u0131r.",Object(i.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0"," Detayl\u0131 bilgiye ",Object(i.b)("a",{parentName:"td",href:"https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/CreatingtheNotificationPayload.html#//apple_ref/doc/uid/TP40008194-CH10-SW9"},"APNs Dok\xfcmantasyonundan")," ula\u015f\u0131labilir."))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",Object(i.b)(O,{mdxType:"SmallText"},Object(i.b)(s,{mdxType:"BlueColoredText"},"title_loc_key")," ",Object(i.b)(p,{mdxType:"GreenColoredText"},"(String)"),Object(i.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","  Opsiyoneldir. ",Object(i.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","  Uygulaman\u0131z\u0131n Localizable.strings dosyas\u0131nda bulunan bir dizenin key ad\u0131d\u0131r. Lokalizasyon i\xe7in bu parametre kullan\u0131labilir.",Object(i.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0"," Detayl\u0131 bilgiye ",Object(i.b)("a",{parentName:"td",href:"https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/CreatingtheNotificationPayload.html#//apple_ref/doc/uid/TP40008194-CH10-SW9"},"APNs Dok\xfcmantasyonundan")," ula\u015f\u0131labilir."))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",Object(i.b)(O,{mdxType:"SmallText"},Object(i.b)(s,{mdxType:"BlueColoredText"},"title_loc_args")," ",Object(i.b)(p,{mdxType:"GreenColoredText"},"(String[])"),Object(i.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","  Opsiyoneldir. ",Object(i.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","  Belirtilen loc_key ile e\u015fle\u015fen lokalizasyon metnindeki %@ ile i\u015faretlenmi\u015f parametrik bilgilerin yerine de\u011fi\u015ftirilecek metinleri verebildi\u011finiz aland\u0131r.",Object(i.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0"," Detayl\u0131 bilgiye ",Object(i.b)("a",{parentName:"td",href:"https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/CreatingtheNotificationPayload.html#//apple_ref/doc/uid/TP40008194-CH10-SW9"},"APNs Dok\xfcmantasyonundan")," ula\u015f\u0131labilir."))))),Object(i.b)("h4",{id:"\xf6rnek-json-request-body-"},"\xd6rnek Json Request Body :"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n    "to" : ["70021","70024","70025","70022","123","113","11"],\n    "data" : "{\'message\':\'deneme\'}",\n    "senderApp" : "DevelopmentPostman",\n    "content_available" : false,\n    "mutable_content": false,\n    "ios_notification" : {\n        "title" : "Deneme",\n        "body" : "Test mesaj\u0131d\u0131r.",\n        "sound": "note"\n    }\n\n}\n')),Object(i.b)("h3",{id:"responses"},"Responses"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},Object(i.b)(s,{mdxType:"BlueColoredText"},"HTTP 200 Response")))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)(p,{mdxType:"GreenColoredText"},"json object")," ",Object(i.b)("br",null)," ",Object(i.b)(O,{mdxType:"SmallText"},"API cevap olarak json objesi d\xf6ner. Uygulamada bildirim g\xf6nderme i\u015flemi asenkron olarak yap\u0131lmaktad\u0131r. Bu nedenle bildirimin APNS, FCM veya HMS \xfczerinden g\xf6nderildi\u011fi bilgisi anl\u0131k olarak iste\u011fin cevab\u0131nda alamazs\u0131n\u0131z. Ancak bu servise iletti\u011finiz kullan\u0131c\u0131 (m\xfc\u015fteri) numaralar\u0131ndan Diyalog sistemine kay\u0131tl\u0131 olmayanlar veya token'\u0131 sistemde olmayan kullan\u0131c\u0131lar\u0131n bilgileri size failed alan\u0131nda iste\u011fin cevab\u0131nda d\xf6necektir."))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"\xa0","\xa0","\xa0","\xa0","\xa0",Object(i.b)(O,{mdxType:"SmallText"},Object(i.b)(s,{mdxType:"BlueColoredText"},"pushId")," ",Object(i.b)(p,{mdxType:"GreenColoredText"},"(String)")," ",Object(i.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0"," \u0130ste\u011finiz i\xe7in Diyalog sisteminde tekil bir id olu\u015fturulur. \u0130leride bu id'yi kullanarak kullan\u0131c\u0131lar\u0131n\u0131za iletilen bildirimleri sorgulayabilirsiniz. E\u011fer g\xf6nderdi\u011finiz bildirimleri sorgulama ihtiyac\u0131n\u0131z varsa bu id'yi sisteminizde saklamal\u0131s\u0131n\u0131z."))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"\xa0","\xa0","\xa0","\xa0","\xa0",Object(i.b)(O,{mdxType:"SmallText"},Object(i.b)(s,{mdxType:"BlueColoredText"},"success")," ",Object(i.b)(p,{mdxType:"GreenColoredText"},"(Boolean)")," ",Object(i.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0"," \u0130ste\u011fin ba\u015far\u0131l\u0131 bir \u015fekilde al\u0131nd\u0131\u011f\u0131 ve bildirim g\xf6nderme i\u015flemin ba\u015flat\u0131ld\u0131\u011f\u0131n\u0131 bildirir."))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"\xa0","\xa0","\xa0","\xa0","\xa0",Object(i.b)(O,{mdxType:"SmallText"},Object(i.b)(s,{mdxType:"BlueColoredText"},"info")," ",Object(i.b)(p,{mdxType:"GreenColoredText"},"(json object)")," ",Object(i.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0"," Detay bilgileri i\xe7eren objedir."))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",Object(i.b)(O,{mdxType:"SmallText"},Object(i.b)(s,{mdxType:"BlueColoredText"},"devices")," ",Object(i.b)(p,{mdxType:"GreenColoredText"},"(integer)")," ",Object(i.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0"," Bildirim g\xf6nderme i\u015fleminin ba\u015far\u0131l\u0131 bir \u015fekilde ba\u015flat\u0131ld\u0131\u011f\u0131 kullan\u0131c\u0131 say\u0131s\u0131n\u0131 verir."))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",Object(i.b)(O,{mdxType:"SmallText"},Object(i.b)(s,{mdxType:"BlueColoredText"},"failed")," ",Object(i.b)(p,{mdxType:"GreenColoredText"},"(json object array)")," ",Object(i.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0"," Bildirim g\xf6nderimi ba\u015flat\u0131lamayan kullan\u0131c\u0131lar\u0131n detay bilgilerini i\xe7eren dizidir. \u0130\xe7erisinde kullan\u0131c\u0131 numaras\u0131 ve hata kodu bilgilerini i\xe7eren objeler ta\u015f\u0131r."))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",Object(i.b)(O,{mdxType:"SmallText"},Object(i.b)(s,{mdxType:"BlueColoredText"},"customerNo")," ",Object(i.b)(p,{mdxType:"GreenColoredText"},"(String)")," ",Object(i.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0"," Bildirim g\xf6nderilemeyen kullan\u0131c\u0131 numaras\u0131"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",Object(i.b)(O,{mdxType:"SmallText"},Object(i.b)(s,{mdxType:"BlueColoredText"},"errorCode")," ",Object(i.b)(p,{mdxType:"GreenColoredText"},"(String)")," ",Object(i.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0"," Hata nedenini bildirir. A\u015fa\u011f\u0131daki de\u011ferleri alabilir.",Object(i.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",Object(i.b)(s,{mdxType:"BlueColoredText"},"USER_NOT_FOUND_IN_SYSTEM"),Object(i.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",Object(i.b)(s,{mdxType:"BlueColoredText"},"USER_PUSH_TOKEN_NOT_FOUND")))))),Object(i.b)("h4",{id:"\xf6rnek-response-body-"},"\xd6rnek Response Body :"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n    "pushId": "083e1470-1bc6-4904-a59b-4cc453e00d3c",\n    "success": true,\n    "info": {\n        "devices": 4,\n        "failed": [\n            {\n                "customerNo": "123",\n                "errorCode": "USER_NOT_FOUND_IN_SYSTEM"\n            },\n            {\n                "customerNo": "113",\n                "errorCode": "USER_NOT_FOUND_IN_SYSTEM"\n            },\n            {\n                "customerNo": "11",\n                "errorCode": "USER_NOT_FOUND_IN_SYSTEM"\n            }\n        ]\n    }\n}\n')),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},Object(i.b)(c,{mdxType:"HighlightWithRed"},"HTTP 500 Response")))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)(p,{mdxType:"GreenColoredText"},"string")," ",Object(i.b)("br",null)," ",Object(i.b)(O,{mdxType:"SmallText"},"API genel bir hata ald\u0131\u011f\u0131nda HTTP 500 status kodu ile cevap d\xf6necektir. API'nin hata mesaj\u0131 metin olarak d\xf6ner."))))),Object(i.b)("h4",{id:"api-iste\u011fi-maximum-kullan\u0131c\u0131-say\u0131s\u0131-a\u015f\u0131ld\u0131\u011f\u0131nda-a\u015fa\u011f\u0131daki-hatay\u0131-d\xf6ner"},"API iste\u011fi maximum kullan\u0131c\u0131 say\u0131s\u0131 a\u015f\u0131ld\u0131\u011f\u0131nda a\u015fa\u011f\u0131daki hatay\u0131 d\xf6ner."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},Object(i.b)(c,{mdxType:"HighlightWithRed"},"HTTP 400 Response")))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)(p,{mdxType:"GreenColoredText"},"string")," ",Object(i.b)("br",null)," ",Object(i.b)(O,{mdxType:"SmallText"},Object(i.b)(c,{mdxType:"HighlightWithRed"},"MAX_PUSHES_PER_REQUEST_EXCEEDED")))))),Object(i.b)("h4",{id:"api-iste\u011fi-do\u011frulama-s\u0131ras\u0131nda-hata-al\u0131rsa-a\u015fa\u011f\u0131daki-hata-kodlar\u0131n\u0131-d\xf6ner"},"API iste\u011fi do\u011frulama s\u0131ras\u0131nda hata al\u0131rsa a\u015fa\u011f\u0131daki hata kodlar\u0131n\u0131 d\xf6ner."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Http Status Code"),Object(i.b)("th",{parentName:"tr",align:null},"Mesaj"),Object(i.b)("th",{parentName:"tr",align:null},"A\xe7\u0131klama"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)(c,{mdxType:"HighlightWithRed"},"400")),Object(i.b)("td",{parentName:"tr",align:null},"Required headers not found"),Object(i.b)("td",{parentName:"tr",align:null},"Date, X-Requester-UserId veya X-Authorization header alanlar\u0131ndan biri veya birka\xe7\u0131 eksik.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)(c,{mdxType:"HighlightWithRed"},"400")),Object(i.b)("td",{parentName:"tr",align:null},"Authorization failed due to data format not valid"),Object(i.b)("td",{parentName:"tr",align:null},'X-Authorization header alan\u0131ndaki bilgiler do\u011fru formatta de\u011fil. Alan\u0131n "DLGA " ile ba\u015flay\u0131p accesKeyId ve imza de\u011ferleri aras\u0131na : oldu\u011funu kontrol edin.')),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)(c,{mdxType:"HighlightWithRed"},"400")),Object(i.b)("td",{parentName:"tr",align:null},"Authorization failed due to date not valid"),Object(i.b)("td",{parentName:"tr",align:null},'X-DLG-DATE tarih format\u0131 "EEE, dd MMM yyyy HH:mm:ss Z" format\u0131nda de\u011fil. Kontrol edin..')),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)(c,{mdxType:"HighlightWithRed"},"401")),Object(i.b)("td",{parentName:"tr",align:null},"Authorization failed"),Object(i.b)("td",{parentName:"tr",align:null},"\u0130stek do\u011frulanamad\u0131. \u0130mza de\u011feri do\u011fru de\u011fil.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)(c,{mdxType:"HighlightWithRed"},"403")),Object(i.b)("td",{parentName:"tr",align:null},"Request time may not be correct."),Object(i.b)("td",{parentName:"tr",align:null},"\u0130stek header'\u0131nda gelen x-dlg-date ve sunucu zaman\u0131 aras\u0131nda +/- 15 dakikadan fazla fark var.")))))}g.isMDXComponent=!0}}]);