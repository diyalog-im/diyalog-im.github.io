(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{120:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return b})),a.d(t,"Highlight",(function(){return d})),a.d(t,"HighlightWithBlack",(function(){return o})),a.d(t,"HighlightWithRed",(function(){return c})),a.d(t,"ColoredText",(function(){return m})),a.d(t,"CenteredText",(function(){return u})),a.d(t,"GreenColoredText",(function(){return p})),a.d(t,"BlueColoredText",(function(){return s})),a.d(t,"SmallText",(function(){return O})),a.d(t,"toc",(function(){return j})),a.d(t,"default",(function(){return g}));var r=a(3),l=a(7),n=(a(0),a(152)),i=(a(153),{id:"diyalog-reporting-api-getcalllist",title:"getcalllist",sidebar_label:"getcalllist"}),b={unversionedId:"diyalog-reporting-api-getcalllist",id:"diyalog-reporting-api-getcalllist",isDocsHomePage:!1,title:"getcalllist",description:"<span",source:"@site/../docs/diyalog-reporting-api-getcalllist.md",slug:"/diyalog-reporting-api-getcalllist",permalink:"/docs/diyalog-reporting-api-getcalllist",version:"current",sidebar_label:"getcalllist",sidebar:"docs",previous:{title:"getonlinehelplist",permalink:"/docs/diyalog-reporting-api-getonlinehelplist"},next:{title:"getstaffmessaginglist",permalink:"/docs/diyalog-reporting-api-getstaffmessaginglist"}},d=function(e){var t=e.children,a=e.color;return Object(n.b)("span",{style:{backgroundColor:a,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},o=function(e){var t=e.children,a=e.color;return Object(n.b)("span",{style:{backgroundColor:a,borderRadius:"2px",padding:"0.2rem"}},t)},c=function(e){var t=e.children,a=e.color;return Object(n.b)("span",{style:{color:"#d60b0b",backgroundColor:a,borderRadius:"2px",padding:"0.2rem"}},t)},m=function(e){var t=e.children,a=e.color;return Object(n.b)("span",{style:{color:a}},t)},u=function(e){var t=e.children;return Object(n.b)("span",{style:{align:"center"}},t)},p=function(e){var t=e.children;return Object(n.b)("span",{style:{color:"#42b72a"}},t)},s=function(e){var t=e.children;return Object(n.b)("span",{style:{color:"#1877F2"}},t)},O=function(e){var t=e.children;return Object(n.b)("span",{style:{fontSize:"smaller"}},t)},j=[{value:"<BlueColoredText>POST</BlueColoredText> v1/reporting/getcalllist",id:"post-v1reportinggetcalllist",children:[]},{value:"Request Body",id:"request-body",children:[]},{value:"Responses",id:"responses",children:[]}],y={Highlight:d,HighlightWithBlack:o,HighlightWithRed:c,ColoredText:m,CenteredText:u,GreenColoredText:p,BlueColoredText:s,SmallText:O,toc:j};function g(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},y,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h3",{id:"post-v1reportinggetcalllist"},Object(n.b)(s,{mdxType:"BlueColoredText"},"POST")," v1/reporting/getcalllist"),Object(n.b)("p",null,"Bu API arac\u0131l\u0131\u011f\u0131 ile iki tarih aral\u0131\u011f\u0131nda Diyalog \xfczerinden yap\u0131lan aramalar\u0131n (g\xf6r\xfcnt\xfcl\xfc / sesli) listesine eri\u015filebilir. API'ye \xe7al\u0131\u015fan sicili ve/veya m\xfc\u015fteri numaras\u0131 bilgileri de parametre olarak eklenebilir."),Object(n.b)("p",null,"Her istekte maximum ",Object(n.b)(c,{mdxType:"HighlightWithRed"},"20 adet")," bilgi tarihe g\xf6re yeniden eskiye do\u011fru d\xf6ner. "),Object(n.b)("p",null,"API'ye verilen iki tarih aral\u0131\u011f\u0131nda 20 adetten daha fazla \xf6\u011fe olabilir. Bu durumda en son yap\u0131lan 20 canl\u0131 yard\u0131m d\xf6ner. \u0130ki tarih aral\u0131\u011f\u0131nda yap\u0131lan di\u011fer \xf6\u011feleride alabilmek i\xe7in API cevab\u0131nda d\xf6nen en eski tarihli (son \xf6\u011fe) \xf6\u011fenin tarihi al\u0131nmal\u0131 ve bu tarih kullan\u0131larak API tekrar tekrar \xe7a\u011f\u0131r\u0131lmal\u0131d\u0131r."),Object(n.b)("p",null,"API istekleri"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"HMAC Authentication ile do\u011frulanmal\u0131d\u0131r. HMAC Authentication i\xe7in ",Object(n.b)("a",{parentName:"li",href:"/docs/diyalog-api-authentication"},"Authentication")," dok\xfcman\u0131na bak\u0131n\u0131z."),Object(n.b)("li",{parentName:"ul"},"API URI : ",Object(n.b)(c,{color:"#f2f2f2",mdxType:"HighlightWithRed"},"https://DIYALOG-SERVER-API-ENDPOINT/v1/reporting/getcalllist")),Object(n.b)("li",{parentName:"ul"},"HTTP \u0130stek T\xfcr\xfc ",Object(n.b)(c,{color:"#f2f2f2",mdxType:"HighlightWithRed"},"POST")),Object(n.b)("li",{parentName:"ul"},"HTTP Content-Type ",Object(n.b)(c,{color:"#f2f2f2",mdxType:"HighlightWithRed"},"application/json"))),Object(n.b)("h3",{id:"request-body"},"Request Body"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:"left"},"Schema"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)(p,{mdxType:"GreenColoredText"},"json object"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)(O,{mdxType:"SmallText"},Object(n.b)(s,{mdxType:"BlueColoredText"},"startDate")," ",Object(n.b)(p,{mdxType:"GreenColoredText"},"(long)")," ",Object(n.b)("br",null)," Unix epoch timestamps (miliseconds). Aramalar\u0131n sorgulanaca\u011f\u0131 ba\u015flang\u0131\xe7 tarihidir."))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)(O,{mdxType:"SmallText"},Object(n.b)(s,{mdxType:"BlueColoredText"},"endDate")," ",Object(n.b)(p,{mdxType:"GreenColoredText"},"(long)")," ",Object(n.b)("br",null)," Unix epoch timestamps (miliseconds). Aramalar\u0131n sorgulanaca\u011f\u0131 biti\u015f tarihidir."))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)(O,{mdxType:"SmallText"},Object(n.b)(s,{mdxType:"BlueColoredText"},"callType")," ",Object(n.b)(p,{mdxType:"GreenColoredText"},"(string)")," ",Object(n.b)("br",null)," Arama t\xfcr\xfcne g\xf6re sorgu yapabilenizi sa\u011flar.  ",Object(n.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0"," Alabilece\u011fi de\u011ferler a\u015fa\u011f\u0131daki gibidir : ",Object(n.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",Object(n.b)(s,{mdxType:"BlueColoredText"},'"all"')," : G\xf6r\xfcnt\xfcl\xfc ve sesli g\xf6r\xfc\u015fmelerin hepsini d\xf6ner.",Object(n.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",Object(n.b)(s,{mdxType:"BlueColoredText"},'"video"')," : G\xf6r\xfcnt\xfcl\xfc g\xf6r\xfc\u015fmeleri d\xf6ner.",Object(n.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",Object(n.b)(s,{mdxType:"BlueColoredText"},'"voice"')," : Sesli g\xf6r\xfc\u015fmeleri d\xf6ner."))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)(O,{mdxType:"SmallText"},Object(n.b)(s,{mdxType:"BlueColoredText"},"staffId")," ",Object(n.b)(p,{mdxType:"GreenColoredText"},"(string)")," ",Object(n.b)("br",null),"Opsiyoneldir. ",Object(n.b)("br",null),"\xc7al\u0131\u015fan sicil numaras\u0131. E\u011fer bir \xe7al\u0131\u015fan\u0131n verilen iki tarih aral\u0131\u011f\u0131ndaki aramalar\u0131 g\xf6r\xfcnt\xfclenmek isteniyorsa bu bilgi API'ye verilmelidir."))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)(O,{mdxType:"SmallText"},Object(n.b)(s,{mdxType:"BlueColoredText"},"customerId")," ",Object(n.b)(p,{mdxType:"GreenColoredText"},"(string)")," ",Object(n.b)("br",null)," Opsiyoneldir. ",Object(n.b)("br",null),"M\xfc\u015fteri numaras\u0131. E\u011fer bir m\xfc\u015fterinin verilen iki tarih aral\u0131\u011f\u0131ndaki aramalar\u0131 g\xf6r\xfcnt\xfclenmek isteniyorsa bu bilgi API'ye verilmelidir."))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)(O,{mdxType:"SmallText"},Object(n.b)(s,{mdxType:"BlueColoredText"},"callUseType")," ",Object(n.b)(p,{mdxType:"GreenColoredText"},"(integer)")," ",Object(n.b)("br",null)," Opsiyoneldir. ",Object(n.b)("br",null),"Arama Kullan\u0131m T\xfcr\xfc. Aramalar\u0131n canl\u0131 yar\u0131m i\xe7inde mi yoksa m\xfc\u015fteri edinim gibi g\xf6r\xfcnt\xfcl\xfc yard\u0131m i\u015flemlerine g\xf6re filtrelemeye yarar.",Object(n.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0"," Alabilece\u011fi de\u011ferler a\u015fa\u011f\u0131daki gibidir : ",Object(n.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",Object(n.b)(s,{mdxType:"BlueColoredText"},"0 (UNKNOWN)")," : Sistemde ilgili veri tutulmadan \xf6nceki arama kullan\u0131m kodudur. Bu kod rama t\xfcr\xfc bilinmeyen aramalar\u0131 filtreler.",Object(n.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",Object(n.b)(s,{mdxType:"BlueColoredText"},"1 (DIYALOG_STANDART_CALL)")," : \u015eube uygulamas\u0131 gibi ana kurum \xe7al\u0131\u015fan\u0131 ve m\xfc\u015fterilerin direk yapt\u0131\u011f\u0131 aramlar\u0131 filtreler.",Object(n.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",Object(n.b)(s,{mdxType:"BlueColoredText"},"2 (VIDEO_HELP_CALL)")," : M\xfc\u015fteri edinim, an\u0131nda \u015fifre vs. gibi \xe7a\u011fr\u0131 merkezi temsilcileri ile yap\u0131lan g\xf6r\xfcnt\xfcl\xfc g\xf6r\xfc\u015fme aramalar\u0131n\u0131 filtreler.",Object(n.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",Object(n.b)(s,{mdxType:"BlueColoredText"},"3 (ONLINE_HELP_CALL)")," : Canl\u0131 Yard\u0131m i\xe7erisinden ba\u015flayan aramalar\u0131 filtreler."))))),Object(n.b)(O,{mdxType:"SmallText"}," ",Object(n.b)(c,{mdxType:"HighlightWithRed"},"Not : ")," E\u011fer iki tarih aral\u0131\u011f\u0131nda \xe7al\u0131\u015fan ve m\xfc\u015fteri aras\u0131ndaki aramalaar g\xf6r\xfcnt\xfclenmek isteniyorsa ",Object(n.b)(s,{mdxType:"BlueColoredText"},"staffId")," ve ",Object(n.b)(s,{mdxType:"BlueColoredText"},"customerId")," alanlar\u0131 API'ye verilmelidir."),Object(n.b)("h4",{id:"\xf6rnek-json-request-body-"},"\xd6rnek Json Request Body :"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-json"},'{\n    "startDate" : 1617278400000,\n    "endDate" : 1617969609000,\n    "callType" : "voice",\n    "staffId" : "45186",\n    "customerId" : "2337368",\n    "callUseType" : 3\n}\n')),Object(n.b)("h3",{id:"responses"},"Responses"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:"left"},Object(n.b)(s,{mdxType:"BlueColoredText"},"HTTP 200 Response")))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)(p,{mdxType:"GreenColoredText"},"json object array")," ",Object(n.b)("br",null)," ",Object(n.b)(O,{mdxType:"SmallText"},"API cevap olarak json array d\xf6ner. Bu array i\xe7erisinde a\u015fa\u011f\u0131daki alanlardan olu\u015fan json objeleri d\xf6ner. Her objenin i\xe7erisinde yap\u0131lan araman\u0131n detaylar\u0131 bulunur. API cevap olarak maksimum 20 adet bilgi (json objesi) tarih s\u0131ralamas\u0131na g\xf6re yeniden eskiye do\u011fru s\u0131ral\u0131 \u015fekilde d\xf6ner. E\u011fer herhangi bir arama bulunamaz ise array bo\u015f olarak d\xf6ner."))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},"\xa0","\xa0","\xa0","\xa0","\xa0",Object(n.b)(p,{mdxType:"GreenColoredText"},"json object"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},"\xa0","\xa0","\xa0","\xa0","\xa0",Object(n.b)(O,{mdxType:"SmallText"},Object(n.b)(s,{mdxType:"BlueColoredText"},"callId")," ",Object(n.b)(p,{mdxType:"GreenColoredText"},"(long)")," ",Object(n.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0"," Diyalog sisteminde arama i\xe7in olu\u015fturulan tekil id."))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},"\xa0","\xa0","\xa0","\xa0","\xa0",Object(n.b)(O,{mdxType:"SmallText"},Object(n.b)(s,{mdxType:"BlueColoredText"},"initiatorId")," ",Object(n.b)(p,{mdxType:"GreenColoredText"},"(string)")," ",Object(n.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0"," Arayan ki\u015finin sicil veya m\xfc\u015fteri numaras\u0131d\u0131r."))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},"\xa0","\xa0","\xa0","\xa0","\xa0",Object(n.b)(O,{mdxType:"SmallText"},Object(n.b)(s,{mdxType:"BlueColoredText"},"nameOfInitiator")," ",Object(n.b)(p,{mdxType:"GreenColoredText"},"(string)")," ",Object(n.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0"," Arayan ki\u015finin ad ve soyad bilgisidir."))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},"\xa0","\xa0","\xa0","\xa0","\xa0",Object(n.b)(O,{mdxType:"SmallText"},Object(n.b)(s,{mdxType:"BlueColoredText"},"initiatorUserType")," ",Object(n.b)(p,{mdxType:"GreenColoredText"},"(int)")," ",Object(n.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0"," Aramay\u0131 yapan kullan\u0131c\u0131n\u0131n t\xfcr\xfcn\xfc verir.",Object(n.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0"," Kullan\u0131c\u0131 t\xfcrleri a\u015fa\u011f\u0131daki gibidir : ",Object(n.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","1 : Personel (Bu de\u011fer Diyalog sistem public kullan\u0131m i\xe7in personel tipinde kullan\u0131c\u0131lar\u0131 g\xf6sterir.)",Object(n.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","2 : Business ( Bu de\u011fer Diyalog sistemi public kullan\u0131m i\xe7in i\u015f hesab\u0131n\u0131 kullanan kullan\u0131c\u0131lar\u0131 g\xf6sterir.)",Object(n.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","3 : Enterprise (Bu de\u011fer Diyalog sistemi public kullan\u0131m i\xe7in kurumsal hesab\u0131n\u0131 kullanan kullan\u0131c\u0131lar\u0131 g\xf6sterir.) ",Object(n.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","4 : DomainUser (Kurum i\xe7i kullan\u0131c\u0131 \xe7al\u0131\u015fan)",Object(n.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","5 : DomainCustomer (M\xfc\u015fteri ) ",Object(n.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","6: Bot (Bot kullan\u0131c\u0131d\u0131r.)",Object(n.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","7 : AnonymousCustomer (M\xfc\u015fteri )"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},"\xa0","\xa0","\xa0","\xa0","\xa0",Object(n.b)(O,{mdxType:"SmallText"},Object(n.b)(s,{mdxType:"BlueColoredText"},"initiatorAppName")," ",Object(n.b)(p,{mdxType:"GreenColoredText"},"(string)")," ",Object(n.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0"," Arayan ki\u015finin hangi client'\u0131 kulland\u0131\u011f\u0131n\u0131 g\xf6sterir."))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},"\xa0","\xa0","\xa0","\xa0","\xa0",Object(n.b)(O,{mdxType:"SmallText"},Object(n.b)(s,{mdxType:"BlueColoredText"},"receiverId")," ",Object(n.b)(p,{mdxType:"GreenColoredText"},"(string)")," ",Object(n.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0"," Aranan ki\u015finin sicil veya m\xfc\u015fteri numaras\u0131d\u0131r."))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},"\xa0","\xa0","\xa0","\xa0","\xa0",Object(n.b)(O,{mdxType:"SmallText"},Object(n.b)(s,{mdxType:"BlueColoredText"},"nameOfReceiver")," ",Object(n.b)(p,{mdxType:"GreenColoredText"},"(string)")," ",Object(n.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0"," Aranan ki\u015finin ad ve soyad bilgisidir."))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},"\xa0","\xa0","\xa0","\xa0","\xa0",Object(n.b)(O,{mdxType:"SmallText"},Object(n.b)(s,{mdxType:"BlueColoredText"},"receiverUserType")," ",Object(n.b)(p,{mdxType:"GreenColoredText"},"(int)")," ",Object(n.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0"," Aranan kullan\u0131c\u0131n\u0131n t\xfcr\xfcn\xfc verir.",Object(n.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0"," Kullan\u0131c\u0131 t\xfcrleri a\u015fa\u011f\u0131daki gibidir : ",Object(n.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","1 : Personel (Bu de\u011fer Diyalog sistem public kullan\u0131m i\xe7in personel tipinde kullan\u0131c\u0131lar\u0131 g\xf6sterir.)",Object(n.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","2 : Business ( Bu de\u011fer Diyalog sistemi public kullan\u0131m i\xe7in i\u015f hesab\u0131n\u0131 kullanan kullan\u0131c\u0131lar\u0131 g\xf6sterir.)",Object(n.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","3 : Enterprise (Bu de\u011fer Diyalog sistemi public kullan\u0131m i\xe7in kurumsal hesab\u0131n\u0131 kullanan kullan\u0131c\u0131lar\u0131 g\xf6sterir.) ",Object(n.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","4 : DomainUser (Kurum i\xe7i kullan\u0131c\u0131 \xe7al\u0131\u015fan)",Object(n.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","5 : DomainCustomer (M\xfc\u015fteri ) ",Object(n.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","6: Bot (Bot kullan\u0131c\u0131d\u0131r.)",Object(n.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","7 : AnonymousCustomer (M\xfc\u015fteri )"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},"\xa0","\xa0","\xa0","\xa0","\xa0",Object(n.b)(O,{mdxType:"SmallText"},Object(n.b)(s,{mdxType:"BlueColoredText"},"receiverAppName")," ",Object(n.b)(p,{mdxType:"GreenColoredText"},"(string)")," ",Object(n.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0"," Aranan ki\u015finin hangi client'\u0131 kulland\u0131\u011f\u0131n\u0131 g\xf6sterir."))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},"\xa0","\xa0","\xa0","\xa0","\xa0",Object(n.b)(O,{mdxType:"SmallText"},Object(n.b)(s,{mdxType:"BlueColoredText"},"callStartedAt")," ",Object(n.b)(p,{mdxType:"GreenColoredText"},"(long)")," ",Object(n.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0"," Unix epoch timestamps (miliseconds). Araman\u0131n ba\u015flad\u0131\u011f\u0131 tarih ve zaman bilgisidir."))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},"\xa0","\xa0","\xa0","\xa0","\xa0",Object(n.b)(O,{mdxType:"SmallText"},Object(n.b)(s,{mdxType:"BlueColoredText"},"callEndedAt")," ",Object(n.b)(p,{mdxType:"GreenColoredText"},"(long)")," ",Object(n.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0"," Unix epoch timestamps (miliseconds). Araman\u0131n sona erdi\u011fi tarih ve zaman bilgisidir."))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},"\xa0","\xa0","\xa0","\xa0","\xa0",Object(n.b)(O,{mdxType:"SmallText"},Object(n.b)(s,{mdxType:"BlueColoredText"},"callTime")," ",Object(n.b)(p,{mdxType:"GreenColoredText"},"(int)"),Object(n.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0"," Arama s\xfcresini saniye cinsinden verir. E\u011fer arama ba\u015flamam\u0131\u015f ise yani kar\u015f\u0131 taraf kabul etmemi\u015f veya ba\u011flant\u0131 kurulamam\u0131\u015f ise bu de\u011fer 0 olarak d\xf6ner."))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},"\xa0","\xa0","\xa0","\xa0","\xa0",Object(n.b)(O,{mdxType:"SmallText"},Object(n.b)(s,{mdxType:"BlueColoredText"},"callType")," ",Object(n.b)(p,{mdxType:"GreenColoredText"},"(string)")," ",Object(n.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0"," Araman\u0131n video veya sesli g\xf6r\xfc\u015fme olup olmad\u0131\u011f\u0131 bilgisini verir. ",Object(n.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",'"video" : Video g\xf6r\xfc\u015fme',Object(n.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",'"voice" : Sesli g\xf6r\xfc\u015fme',Object(n.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",'"" : Diyalog 1.6.2 versiyonu \xf6ncesinde sesli ve video g\xf6r\xfc\u015fme ayr\u0131m\u0131 yap\u0131lmamaktayd\u0131. Bu versiyon \xf6ncesindeki aramalar\u0131 t\xfcr\xfc bilinememektedir. Bu nedenle bo\u015fluk olarak d\xf6nebilir.'))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},"\xa0","\xa0","\xa0","\xa0","\xa0",Object(n.b)(O,{mdxType:"SmallText"},Object(n.b)(s,{mdxType:"BlueColoredText"},"callState")," ",Object(n.b)(p,{mdxType:"GreenColoredText"},"(string)")," ",Object(n.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0"," Araman\u0131n en son ald\u0131\u011f\u0131  durum bilgisini d\xf6ner. ",Object(n.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0"," Durum de\u011ferleri a\u015fa\u011f\u0131daki gibidir : ",Object(n.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",'"START" : Bir ki\u015fi taraf\u0131ndan arama ba\u015flat\u0131ld\u0131\u011f\u0131nda durum "START" olur. Bu durumun d\xf6nmesi beklenmemektedir.',Object(n.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",'"ENDED" : Arama ba\u015flam\u0131\u015f, g\xf6r\xfc\u015fme ba\u015flam\u0131\u015f ve sonland\u0131r\u0131lm\u0131\u015ft\u0131r.',Object(n.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",'"MISSED" : Arama kar\u015f\u0131 taraf\u0131n kabul etmemesi veya a\xe7mamas\u0131 nedeniyle sonland\u0131r\u0131lm\u0131\u015ft\u0131r.'))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},"\xa0","\xa0","\xa0","\xa0","\xa0",Object(n.b)(O,{mdxType:"SmallText"},Object(n.b)(s,{mdxType:"BlueColoredText"},"callViewUrl")," ",Object(n.b)(p,{mdxType:"GreenColoredText"},"(string)"),"   ",Object(n.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0"," Arama kayd\u0131n\u0131n izlenebilece\u011fi dinamik link bu alanda d\xf6ner. E\u011fer arama kayd\u0131 olu\u015fmam\u0131\u015f veya arama ba\u015flamam\u0131\u015f ise bu bo\u015fluk olarak d\xf6necektir. Arama bu link bir browserda a\xe7\u0131larak izlenebilir. Bu link bir browser arac\u0131l\u0131\u011f\u0131 ile a\xe7\u0131ld\u0131\u011f\u0131nda Diyalog platformuna ba\u011flan\u0131l\u0131r ve arama kayd\u0131 Diyalog platformu \xfczerinden g\xf6sterilir. "))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},"\xa0","\xa0","\xa0","\xa0","\xa0",Object(n.b)(O,{mdxType:"SmallText"},Object(n.b)(s,{mdxType:"BlueColoredText"},"callUseType")," ",Object(n.b)(p,{mdxType:"GreenColoredText"},"(string)")," ",Object(n.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0"," Araman\u0131n hangi  kullan\u0131m i\xe7in yap\u0131ld\u0131\u011f\u0131n\u0131 belirtir. Bu bilgi araman\u0131n canl\u0131 yard\u0131m i\xe7inde mi yoksa Diyalog ekranlar\u0131ndan m\u0131 yoksa m\xfc\u015fteri edinim gibi video ile yard\u0131m i\u015flemleri s\u0131ras\u0131nda m\u0131 yap\u0131ld\u0131\u011f\u0131n\u0131 ay\u0131rt etmek i\xe7in kullan\u0131l\u0131r",Object(n.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0"," Alabilece\u011fi de\u011ferler a\u015fa\u011f\u0131daki gibidir : ",Object(n.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",'"DIYALOG_STANDART_CALL" : Araman\u0131n genel bir Diyalog aramas\u0131 oldu\u011funu g\xf6sterir. Bu ne Canl\u0131 yard\u0131m ne de g\xf6r\xfcnt\xfcl\xfc g\xf6r\xfc\u015fme ile m\xfc\u015fteri ediniminden yap\u0131lm\u0131\u015ft\u0131r. \xd6rne\u011fin \u015fube uygulamas\u0131ndan yap\u0131lan armalar bu t\xfcr ile d\xf6ner.',Object(n.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",'"VIDEO_HELP_CALL" : Arama \xe7a\u011fr\u0131 merkezi ile yap\u0131lan g\xf6r\xfcnt\xfcl\xfc g\xf6r\xfc\u015fme ile m\xfc\u015fteri edinim veya farkl\u0131 bir i\u015flem i\xe7in yap\u0131lm\u0131\u015f bir arama anlam\u0131na gelmektedir.',Object(n.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",'"ONLINE_HELP_CALL" : Bu arama t\xfcr\xfc canl\u0131 yard\u0131m i\xe7inden ba\u015flat\u0131lan aramalar\u0131 g\xf6sterir.',Object(n.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",'"UNKOWN" : Kullan\u0131m durumuna g\xf6re arama t\xfcrleri sistemde tutulmaya ba\u015flamadan \xf6nceki aramalar\u0131n kullan\u0131m t\xfcr\xfc bilinmyen olarak d\xf6ner.'))))),Object(n.b)("h4",{id:"\xf6rnek-response-body-"},"\xd6rnek Response Body :"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "callEndedAt": 1617111451686,\n        "callId": -1527120504243668640,\n        "callStartedAt": 1617111449440,\n        "callState": "MISSED",\n        "callTime": 0,\n        "callType": "video",\n        "callViewUrl": "",\n        "initiatorId": "45188",\n        "nameOfInitiator": "Agent 45153",\n        "initiatorUserType": 4,\n        "initiatorAppName": "Agent Web App",\n        "nameOfReceiver": "android 5667067",\n        "receiverId": "5667067",\n        "receiverUserType": 7,\n        "receiverAppName": "Diyalog Android",\n        "callUseType": "VIDEO_HELP_CALL"\n    },\n    {\n        "callEndedAt": 1617111385505,\n        "callId": 3387307531615898478,\n        "callStartedAt": 1617111363995,\n        "callState": "ENDED",\n        "callTime": 11,\n        "callType": "video",\n        "callViewUrl": "http://web.diyalog.im/v1/playrecords/3387307531615898478...",\n        "nameOfInitiator": "Agent 45153",\n        "initiatorUserType": 4,\n        "initiatorAppName": "Agent Web App",\n        "nameOfReceiver": "android 5667067",\n        "receiverId": "5667067",\n        "receiverUserType": 7,\n        "receiverAppName": "Diyalog Android",\n        "callUseType": "ONLINE_HELP_CALL"\n    }\n]\n')),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:"left"},Object(n.b)(c,{mdxType:"HighlightWithRed"},"HTTP 500 Response")))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)(p,{mdxType:"GreenColoredText"},"string")," ",Object(n.b)("br",null)," ",Object(n.b)(O,{mdxType:"SmallText"},"API hata ald\u0131\u011f\u0131nda HTTP 500 status kodu ile cevap d\xf6necektir. API'nin hata mesaj\u0131 metin olarak d\xf6ner."))))),Object(n.b)("h4",{id:"api-iste\u011fi-do\u011frulama-s\u0131ras\u0131nda-hata-al\u0131rsa-a\u015fa\u011f\u0131daki-hata-kodlar\u0131n\u0131-d\xf6ner"},"API iste\u011fi do\u011frulama s\u0131ras\u0131nda hata al\u0131rsa a\u015fa\u011f\u0131daki hata kodlar\u0131n\u0131 d\xf6ner."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:null},"Http Status Code"),Object(n.b)("th",{parentName:"tr",align:null},"Mesaj"),Object(n.b)("th",{parentName:"tr",align:null},"A\xe7\u0131klama"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},Object(n.b)(c,{mdxType:"HighlightWithRed"},"400")),Object(n.b)("td",{parentName:"tr",align:null},"Required headers not found"),Object(n.b)("td",{parentName:"tr",align:null},"Date, X-Requester-UserId veya X-Authorization header alanlar\u0131ndan biri veya birka\xe7\u0131 eksik.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},Object(n.b)(c,{mdxType:"HighlightWithRed"},"400")),Object(n.b)("td",{parentName:"tr",align:null},"Authorization failed due to data format not valid"),Object(n.b)("td",{parentName:"tr",align:null},'X-Authorization header alan\u0131ndaki bilgiler do\u011fru formatta de\u011fil. Alan\u0131n "DLGA " ile ba\u015flay\u0131p accesKeyId ve imza de\u011ferleri aras\u0131na : oldu\u011funu kontrol edin.')),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},Object(n.b)(c,{mdxType:"HighlightWithRed"},"400")),Object(n.b)("td",{parentName:"tr",align:null},"Authorization failed due to date not valid"),Object(n.b)("td",{parentName:"tr",align:null},'X-DLG-DATE tarih format\u0131 "EEE, dd MMM yyyy HH:mm:ss Z" format\u0131nda de\u011fil. Kontrol edin..')),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},Object(n.b)(c,{mdxType:"HighlightWithRed"},"401")),Object(n.b)("td",{parentName:"tr",align:null},"Authorization failed"),Object(n.b)("td",{parentName:"tr",align:null},"\u0130stek do\u011frulanamad\u0131. \u0130mza de\u011feri do\u011fru de\u011fil.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},Object(n.b)(c,{mdxType:"HighlightWithRed"},"403")),Object(n.b)("td",{parentName:"tr",align:null},"Request time may not be correct."),Object(n.b)("td",{parentName:"tr",align:null},"\u0130stek header'\u0131nda gelen x-dlg-date ve sunucu zaman\u0131 aras\u0131nda +/- 15 dakikadan fazla fark var.")))))}g.isMDXComponent=!0},152:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return s}));var r=a(0),l=a.n(r);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=l.a.createContext({}),c=function(e){var t=l.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},m=function(e){var t=c(e.components);return l.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},p=l.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,i=e.parentName,o=d(e,["components","mdxType","originalType","parentName"]),m=c(a),p=r,s=m["".concat(i,".").concat(p)]||m[p]||u[p]||n;return a?l.a.createElement(s,b(b({ref:t},o),{},{components:a})):l.a.createElement(s,b({ref:t},o))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=p;var b={};for(var d in t)hasOwnProperty.call(t,d)&&(b[d]=t[d]);b.originalType=e,b.mdxType="string"==typeof e?e:r,i[1]=b;for(var o=2;o<n;o++)i[o]=a[o];return l.a.createElement.apply(null,i)}return l.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},153:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return i}));var r=a(16),l=a(154);function n(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.default)();return{withBaseUrl:(a,r)=>function(e,t,a,{forcePrependBaseUrl:r=!1,absolute:n=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if(Object(l.b)(a))return a;if(r)return t+a;const i=a.startsWith(t)?a:t+a.replace(/^\//,"");return n?e+i:i}(t,e,a,r)}}function i(e,t={}){const{withBaseUrl:a}=n();return a(e,t)}},154:function(e,t,a){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function l(e){return void 0!==e&&!r(e)}a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return l}))}}]);