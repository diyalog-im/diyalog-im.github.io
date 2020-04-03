(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{166:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return c})),i.d(t,"metadata",(function(){return l})),i.d(t,"rightToc",(function(){return s})),i.d(t,"default",(function(){return b}));var n=i(1),a=i(9),o=(i(191),i(190)),c={id:"iOS_RichView",title:"RichView Notification Support",sidebar_label:"RichView Notification Support"},l={id:"tr/iOS_RichView",title:"RichView Notification Support",description:"## iOS SDK of Diyalog Messaging Platform",source:"@site/../docs/tr/iOS_RichView.md",permalink:"/docs/tr/iOS_RichView",sidebar_label:"RichView Notification Support"},s=[{value:"iOS SDK of Diyalog Messaging Platform",id:"ios-sdk-of-diyalog-messaging-platform",children:[{value:"<strong>Richiew Notificaion Support</strong>",id:"richiew-notificaion-support",children:[]},{value:"<strong>Select NotificationServiceExtension</strong>",id:"select-notificationserviceextension",children:[]},{value:"<strong>Select NotificationContentExtension</strong>",id:"select-notificationcontentextension",children:[]}]}],r={rightToc:s};function b(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},r,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"ios-sdk-of-diyalog-messaging-platform"},"iOS SDK of Diyalog Messaging Platform"),Object(o.b)("p",null,"Diyalog SDK is used for enabling messaging for your application. It is a multi-platform communication Messaging SDK for mobile and web. It is easy to integrate, save development cost and delight users with a stable, secure and customization messaging."),Object(o.b)("h3",{id:"richiew-notificaion-support"},Object(o.b)("strong",{parentName:"h3"},"Richiew Notificaion Support")),Object(o.b)("p",null,"How to add Richview Notification support to your app"),Object(o.b)("p",null,"Here is the steps for it."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Go to project expolrar.")),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/iOS/assets/0.png",alt:"Capabilities"}))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},'Add target -> Select "Notification Content Extension".')),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/iOS/assets/1.png",alt:"Capabilities"}))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},'Give it proper name and press "finish".')),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/iOS/assets/2.png",alt:"Capabilities"}))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"It will ask for activate to scheme so activate it.")),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/iOS/assets/3.png",alt:"Capabilities"}))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},'Add target -> Select "Notification Service Extension".')),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/iOS/assets/4.png",alt:"Capabilities"}))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},'Give it proper name and press "finish".')),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/iOS/assets/5.png",alt:"Capabilities"}))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"It will ask for activate to scheme so activate it.")),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/iOS/assets/6.png",alt:"Capabilities"}))),Object(o.b)("p",null,"Add DiyalogEngine Framework in both Extension"),Object(o.b)("p",null,"For that go to project explorar"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Select NotificationContentExtension target"),Object(o.b)("li",{parentName:"ul"},'Go "Linked Frameworks and Libraries"'),Object(o.b)("li",{parentName:"ul"},"Click Add(+) and choose DiyalogEngine.Framework  7.png"),Object(o.b)("li",{parentName:"ul"},"Same Way add for NotificationServiceExtension    8.png")),Object(o.b)("h3",{id:"select-notificationserviceextension"},Object(o.b)("strong",{parentName:"h3"},"Select NotificationServiceExtension")),Object(o.b)("p",null,"Go to NotificationService.swift and import DiyalogEngine"),Object(o.b)("p",null,"Replace this method  "),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"override func didReceive(_ request: UNNotificationRequest, withContentHandler contentHandler: @escaping (UNNotificationContent) -> Void) {\n}\n")),Object(o.b)("p",null,"With this method"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),' override func didReceive(_ request: UNNotificationRequest, withContentHandler contentHandler: @escaping (UNNotificationContent) -> Void) {\n        self.contentHandler = contentHandler\n        bestAttemptContent = (request.content.mutableCopy() as? UNMutableNotificationContent)\n\n        if let bestAttemptContent = bestAttemptContent {\n            // Modify the notification content here...\n            bestAttemptContent.title = "\\(bestAttemptContent.title) [modified]"\n\n            // Call method to download notification content\n            DiyalogEngine.diyalogInstance().didRecieveNotification(bestAttemptContent, withContentHandler: { (attemptContent) in\n                    contentHandler(bestAttemptContent)\n            })\n\n        }\n    }\n\n')),Object(o.b)("h3",{id:"select-notificationcontentextension"},Object(o.b)("strong",{parentName:"h3"},"Select NotificationContentExtension")),Object(o.b)("p",null,"Go to NotificationViewController.swift  And"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"import DiyalogEngine\n\nimport AVFoundation\n")),Object(o.b)("p",null,"Remove\n",Object(o.b)("inlineCode",{parentName:"p"},"@IBOutlet var label: UILabel?  ")),Object(o.b)("p",null,"Replace this method  "),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"func didReceive(_ notification: UNNotification) {\n}\n")),Object(o.b)("p",null,"With this method"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"  func didReceive(_ notification: UNNotification) {\n\n        // Call method to load image view or player view\n        if #available(iOS 10.0, *) {\n            DiyalogEngine.diyalogInstance().didReceive(notification: notification, superView: self.view) { (uiView, avPlayer, avAudioPlayer)  in\n                if avPlayer != nil {\n                    DispatchQueue.main.async {\n                        avPlayer?.play()\n                    }\n                } else if avAudioPlayer != nil {\n                    DispatchQueue.main.async {\n                        avAudioPlayer?.play()\n                    }\n                }\n            }\n        } else {\n            // Fallback on earlier versions\n        }\n    }\n")))}b.isMDXComponent=!0}}]);