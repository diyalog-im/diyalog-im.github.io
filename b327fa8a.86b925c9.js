(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{159:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return o})),r.d(t,"default",(function(){return b}));var a=r(1),n=r(9),c=(r(170),r(169)),i={id:"rancher_restart",title:"Dlg Server Rancher 1.6 Operations",sidebar_label:"Rancher 1.6 Operations"},s={id:"ops/rancher_restart",title:"Dlg Server Rancher 1.6 Operations",description:"## Dialog Server Application - Rancher 1.6 Restart Procedure",source:"@site/../docs/ops/rancher_restart.md",permalink:"/docs/ops/rancher_restart",sidebar_label:"Rancher 1.6 Operations",sidebar:"docs",previous:{title:"Webhook",permalink:"/docs/webhook/webhook"},next:{title:"Diyalog-Integration-With-Domain",permalink:"/docs/diyalog-webhook-api/diyalog-webhook-api"}},o=[{value:"Dialog Server Application - Rancher 1.6 Restart Procedure",id:"dialog-server-application---rancher-16-restart-procedure",children:[]}],p={rightToc:o};function b(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"dialog-server-application---rancher-16-restart-procedure"},"Dialog Server Application - Rancher 1.6 Restart Procedure"),Object(c.b)("p",null,"If unexpected errors occur in Dialog Server based on Rancher 1.6, the server application should be restarted by following the procedure."),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"First, you must connect to the management interface of Rancher 1.6 on your system and select ",Object(c.b)("strong",{parentName:"p"},"Dialog")," service under ",Object(c.b)("strong",{parentName:"p"},'"Stacks" -> "User"'),".")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Due to the load on the system, problems may occur during restart. To prevent this, you must first stop the ",Object(c.b)("strong",{parentName:"p"},"dialogue-server-lb")," service. To stop, ",Object(c.b)("strong",{parentName:"p"},"Stop")," should be selected as shown in the following screen."),Object(c.b)("p",{parentName:"li"},Object(c.b)("img",Object(a.a)({parentName:"p"},{src:"/img/rancher/diyalog-server-lb-stop.png",alt:"stop-lb"}))),Object(c.b)("p",{parentName:"li"},"The Rancher user interface will wait for confirmation from you."),Object(c.b)("p",{parentName:"li"},Object(c.b)("img",Object(a.a)({parentName:"p"},{src:"/img/rancher/diyalog-server-lb-stop1.png",alt:"stop-lb1"}))),Object(c.b)("p",{parentName:"li"},"When the service stops, it appears as ",Object(c.b)("strong",{parentName:"p"},"Inactive"),". At this stage there is no load on the ",Object(c.b)("strong",{parentName:"p"},"dialogue-server")," service."),Object(c.b)("p",{parentName:"li"},Object(c.b)("img",Object(a.a)({parentName:"p"},{src:"/img/rancher/diyalog-server-lb-stop2.png",alt:"stop-lb2"})))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"After the load on the application is stopped, the ",Object(c.b)("strong",{parentName:"p"},"dialog-server")," service opens. "),Object(c.b)("p",{parentName:"li"},Object(c.b)("img",Object(a.a)({parentName:"p"},{src:"/img/rancher/diyalog-server-service1.png",alt:"scale-server1"})))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Using ",Object(c.b)("strong",{parentName:"p"},'"Scale"')," option, the number of containers is reduced to ",Object(c.b)("strong",{parentName:"p"},"1"),"."),Object(c.b)("p",{parentName:"li"},Object(c.b)("img",Object(a.a)({parentName:"p"},{src:"/img/rancher/diyalog-server-service2.png",alt:"scale-server2"})))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Once all containers have been closed, except for one last container, the last remaining container should be stoped by selecting ",Object(c.b)("strong",{parentName:"p"},"stop"),"."),Object(c.b)("p",{parentName:"li"},Object(c.b)("img",Object(a.a)({parentName:"p"},{src:"/img/rancher/diyalog-server-service3.png",alt:"scale-server3"})))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"After the last container is stopped, the system will automatically start a new one."),Object(c.b)("p",{parentName:"li"},Object(c.b)("img",Object(a.a)({parentName:"p"},{src:"/img/rancher/diyalog-server-service4.png",alt:"scale-server4"})))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"After opening the first container, wait for ",Object(c.b)("strong",{parentName:"p"},"15-20 seconds")," and increase the ",Object(c.b)("strong",{parentName:"p"},"Scale")," field one by one. The point to note here is that each new container should be added at intervals of 15-20 seconds. The system must be scale up to the ",Object(c.b)("strong",{parentName:"p"},"8")," container. "),Object(c.b)("p",{parentName:"li"},Object(c.b)("img",Object(a.a)({parentName:"p"},{src:"/img/rancher/diyalog-server-service5.png",alt:"scale-server5"}))),Object(c.b)("p",{parentName:"li"},Object(c.b)("img",Object(a.a)({parentName:"p"},{src:"/img/rancher/diyalog-server-service6.png",alt:"scale-server6"}))),Object(c.b)("p",{parentName:"li"},Object(c.b)("img",Object(a.a)({parentName:"p"},{src:"/img/rancher/diyalog-server-service7.png",alt:"scale-server7"})))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"After starting ",Object(c.b)("strong",{parentName:"p"},"dialogue-server")," service with 8 container, ",Object(c.b)("strong",{parentName:"p"},"dialogue-server-lb")," service is activated again to load the system."),Object(c.b)("p",{parentName:"li"},Object(c.b)("img",Object(a.a)({parentName:"p"},{src:"/img/rancher/diyalog-server-lb-start1.png",alt:"start-lb1"}))),Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"diyalog-server-lb")," is activating."),Object(c.b)("p",{parentName:"li"},Object(c.b)("img",Object(a.a)({parentName:"p"},{src:"/img/rancher/diyalog-server-lb-start2.png",alt:"start-lb2"}))),Object(c.b)("p",{parentName:"li"},"When ",Object(c.b)("strong",{parentName:"p"},"dialogue-server-lb")," is activated, the ",Object(c.b)("strong",{parentName:"p"},"dialogue-server")," service will start to load and run."),Object(c.b)("p",{parentName:"li"},Object(c.b)("img",Object(a.a)({parentName:"p"},{src:"/img/rancher/diyalog-server-lb-start3.png",alt:"start-lb3"}))))))}b.isMDXComponent=!0}}]);