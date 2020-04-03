(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{145:function(e,a,r){"use strict";r.r(a),r.d(a,"frontMatter",(function(){return l})),r.d(a,"metadata",(function(){return b})),r.d(a,"rightToc",(function(){return s})),r.d(a,"default",(function(){return p}));var t=r(1),n=r(9),i=(r(198),r(197)),l={id:"ops_rancher_restart",title:"Dlg Server Rancher 1.6 Operations",sidebar_label:"Rancher 1.6 Operations"},b={id:"tr/ops_rancher_restart",title:"Dlg Server Rancher 1.6 Operations",description:"## Diyalog Server Uygulamas\u0131 - Rancher 1.6 Yeniden Ba\u015flatma Prosed\xfcr\xfc",source:"@site/../docs/tr/ops_rancher_restart.md",permalink:"/docs/tr/ops_rancher_restart",sidebar_label:"Rancher 1.6 Operations"},s=[{value:"Diyalog Server Uygulamas\u0131 - Rancher 1.6 Yeniden Ba\u015flatma Prosed\xfcr\xfc",id:"diyalog-server-uygulamas\u0131---rancher-16-yeniden-ba\u015flatma-prosed\xfcr\xfc",children:[]}],c={rightToc:s};function p(e){var a=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},c,r,{components:a,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"diyalog-server-uygulamas\u0131---rancher-16-yeniden-ba\u015flatma-prosed\xfcr\xfc"},"Diyalog Server Uygulamas\u0131 - Rancher 1.6 Yeniden Ba\u015flatma Prosed\xfcr\xfc"),Object(i.b)("p",null,"Rancher 1.6 \xfczerine kurulu bulunan Diyalog Server uygulamas\u0131nda beklenmeyen hatalar al\u0131nd\u0131\u011f\u0131nda a\u015fa\u011f\u0131daki prosed\xfcr uygulanarak sunucu uygulamas\u0131 yeniden ba\u015flat\u0131lmal\u0131d\u0131r."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"\xd6ncelikle sisteminizdeki Rancher 1.6'n\u0131n y\xf6netim aray\xfcz\xfcne ba\u011flan\u0131lmal\u0131 ve ",Object(i.b)("strong",{parentName:"p"},'"Stacks" -> "User"')," alt\u0131nda ",Object(i.b)("strong",{parentName:"p"},"Diyalog")," servisi se\xe7ilmelidir.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Sisteme gelen y\xfck nedeniyle restart i\u015flemi s\u0131ras\u0131nda sorunlar ya\u015fanabilir. Bunu engellemek i\xe7in \xf6ncelikler ",Object(i.b)("strong",{parentName:"p"},"diyalog-server-lb")," servisi durdurulmal\u0131d\u0131r. Bu servisi ",Object(i.b)("strong",{parentName:"p"},"stop")," ederek uygulamaya gelen y\xfck durdurulmal\u0131d\u0131r. Durdurmak i\xe7in  a\u015fa\u011f\u0131daki ekranda g\xf6r\xfclebilece\u011fi \xfczere ",Object(i.b)("strong",{parentName:"p"},"Stop")," se\xe7ene\u011fi se\xe7ilmelidir."),Object(i.b)("p",{parentName:"li"},Object(i.b)("img",Object(t.a)({parentName:"p"},{src:"/img/rancher/diyalog-server-lb-stop.png",alt:"stop-lb"}))),Object(i.b)("p",{parentName:"li"},"Rancher aray\xfcz\xfc sizden durdurma i\u015flemi i\xe7in onay bekleyecektir."),Object(i.b)("p",{parentName:"li"},Object(i.b)("img",Object(t.a)({parentName:"p"},{src:"/img/rancher/diyalog-server-lb-stop1.png",alt:"stop-lb1"}))),Object(i.b)("p",{parentName:"li"},"Servis durdu\u011funda ",Object(i.b)("strong",{parentName:"p"},"Inactive")," olarak g\xf6r\xfcn\xfcr. Bu a\u015famada art\u0131k ",Object(i.b)("strong",{parentName:"p"},"diyalog-server")," servisine hi\xe7 y\xfck gelmiyor demektir."),Object(i.b)("p",{parentName:"li"},Object(i.b)("img",Object(t.a)({parentName:"p"},{src:"/img/rancher/diyalog-server-lb-stop2.png",alt:"stop-lb2"})))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Uygulamaya gelen y\xfck durdurulduktan sonra ",Object(i.b)("strong",{parentName:"p"},"diyalog-server")," servisi a\xe7\u0131l\u0131r. "),Object(i.b)("p",{parentName:"li"},Object(i.b)("img",Object(t.a)({parentName:"p"},{src:"/img/rancher/diyalog-server-service1.png",alt:"scale-server1"})))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},'"Scale"')," se\xe7ene\u011fi kullan\u0131larak container adedi ",Object(i.b)("strong",{parentName:"p"},"1"),"'e kadar indirilir."),Object(i.b)("p",{parentName:"li"},Object(i.b)("img",Object(t.a)({parentName:"p"},{src:"/img/rancher/diyalog-server-service2.png",alt:"scale-server2"})))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Son bir container d\u0131\u015f\u0131nda t\xfcm container'lar kapand\u0131ktan sonra kalan son container ",Object(i.b)("strong",{parentName:"p"},"stop")," edilir."),Object(i.b)("p",{parentName:"li"},Object(i.b)("img",Object(t.a)({parentName:"p"},{src:"/img/rancher/diyalog-server-service3.png",alt:"scale-server3"})))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Son container stop edildikten sonra sistem otomatik olarak yenisini ba\u015flatacakt\u0131r."),Object(i.b)("p",{parentName:"li"},Object(i.b)("img",Object(t.a)({parentName:"p"},{src:"/img/rancher/diyalog-server-service4.png",alt:"scale-server4"})))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"\u0130lk container a\xe7\u0131ld\u0131ktan sonra 15-20 saniye kadar beklenip ",Object(i.b)("strong",{parentName:"p"},"Scale")," alan\u0131 birer birer artt\u0131r\u0131lmal\u0131d\u0131r. Burada dikkat edilmesi gereken konu her yeni container 15-20 saniye aral\u0131klarla eklenilmelidir. Sistem ",Object(i.b)("strong",{parentName:"p"},"8")," container'a kadar \xe7\u0131kar\u0131lmal\u0131d\u0131r. "),Object(i.b)("p",{parentName:"li"},Object(i.b)("img",Object(t.a)({parentName:"p"},{src:"/img/rancher/diyalog-server-service5.png",alt:"scale-server5"}))),Object(i.b)("p",{parentName:"li"},Object(i.b)("img",Object(t.a)({parentName:"p"},{src:"/img/rancher/diyalog-server-service6.png",alt:"scale-server6"}))),Object(i.b)("p",{parentName:"li"},Object(i.b)("img",Object(t.a)({parentName:"p"},{src:"/img/rancher/diyalog-server-service7.png",alt:"scale-server7"})))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"diyalog-server")," servisi 8 container ile \xe7al\u0131\u015fmaya ba\u015flad\u0131ktan sonra sisteme y\xfck\xfcn gelebilmesi i\xe7in ",Object(i.b)("strong",{parentName:"p"},"diyalog-server-lb")," servisi tekrar aaktif hale getirilir."),Object(i.b)("p",{parentName:"li"},Object(i.b)("img",Object(t.a)({parentName:"p"},{src:"/img/rancher/diyalog-server-lb-start1.png",alt:"start-lb1"}))),Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"diyalog-server-lb")," aktif hale gelir."),Object(i.b)("p",{parentName:"li"},Object(i.b)("img",Object(t.a)({parentName:"p"},{src:"/img/rancher/diyalog-server-lb-start2.png",alt:"start-lb2"}))),Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"diyalog-server-lb")," aktif oldu\u011funda ",Object(i.b)("strong",{parentName:"p"},"diyalog-server")," servisi y\xfck almaya ve \xe7al\u0131\u015fmaya ba\u015falayacakt\u0131r."),Object(i.b)("p",{parentName:"li"},Object(i.b)("img",Object(t.a)({parentName:"p"},{src:"/img/rancher/diyalog-server-lb-start3.png",alt:"start-lb3"}))))))}p.isMDXComponent=!0}}]);