(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{133:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(1),i=n(9),o=(n(191),n(190)),l={id:"iOS_getting_started",title:"iOS SDK of Diyalog Messaging Platform",sidebar_label:"How to configure Diyalog"},r={id:"iOS_getting_started",title:"iOS SDK of Diyalog Messaging Platform",description:"Diyalog SDK is used for enabling messaging for your application. It is a multi-platform communication Messaging SDK for mobile and web. It is easy to integrate, save development cost and delight users with a stable, secure and customization messaging.",source:"@site/../docs/iOS_getting_started.md",permalink:"/docs/iOS_getting_started",sidebar_label:"How to configure Diyalog",sidebar:"docs",previous:{title:"Diyalog Android SDK Style",permalink:"/docs/android_style"},next:{title:"Token Base Authentication",permalink:"/docs/iOS_TokenBaseAuthentication"}},s=[{value:"<strong>SDK Supports</strong>",id:"sdk-supports",children:[{value:"Features",id:"features",children:[]},{value:"Configuration Steps",id:"configuration-steps",children:[]},{value:"Full Code",id:"full-code",children:[]}]}],c={rightToc:s};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Diyalog SDK is used for enabling messaging for your application. It is a multi-platform communication Messaging SDK for mobile and web. It is easy to integrate, save development cost and delight users with a stable, secure and customization messaging."),Object(o.b)("h2",{id:"sdk-supports"},Object(o.b)("strong",{parentName:"h2"},"SDK Supports")),Object(o.b)("p",null,"Diyalog SDK supported with iOS 8.0 & Above"),Object(o.b)("h3",{id:"features"},"Features"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"One-to-One Chat"),Object(o.b)("li",{parentName:"ul"},"Group Chat"),Object(o.b)("li",{parentName:"ul"},"Send text message"),Object(o.b)("li",{parentName:"ul"},"Send Media file (Audio, Video, Image)"),Object(o.b)("li",{parentName:"ul"},"Send Location"),Object(o.b)("li",{parentName:"ul"},"Share Contact"),Object(o.b)("li",{parentName:"ul"},"Audio Call"),Object(o.b)("li",{parentName:"ul"},"Configuration Steps")),Object(o.b)("h3",{id:"configuration-steps"},"Configuration Steps"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Step 1: Adding DiyalogEngine to your project")),Object(o.b)("h4",{id:"cocoapods"},"CocoaPods"),Object(o.b)("p",null,"CocoaPods is the recommended way to add DiyalogEngine to your project."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"\n// Code to add framework\npod 'DiyalogEngine-iOS', :git => 'https://github.com/diyalog-im/DiyalogEngine_Pod.git'\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Step 2:"),"\nNeed to make required changes in Capabilities of the project as below:"),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/iOS/assets/capabilities.png",alt:"Capabilities"}))),Object(o.b)("p",null,"And also background mode"),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/iOS/assets/backgroundmodes.png",alt:"Backgroundmodes"}))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Step 3:")," In your Project, open AppDelegate.swift file and import DiyalogEngine framework. Add override ",Object(o.b)("strong",{parentName:"p"},"init()")," method, Inside that method set below configure."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"a. Import DiyalogEngine Framework:")),Object(o.b)("p",null,"First import ",Object(o.b)("inlineCode",{parentName:"p"},"DiyalogEngine")," framwork in your AppDelegate and Inherit your AppDelegate class from ",Object(o.b)("inlineCode",{parentName:"p"},"DiyalogApplicationDelegate")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"import DiyalogEngine\n\nclass AppDelegate: DiyalogApplicationDelegate {\n\n// DiyalogEngine Configuration Code\n\noverride init() {\nsuper.init()\n}\n}\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"b. Set Server End Point:")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),'DiyalogEngine.diyalogInstance().endpoints = ["YOUR_SERVER_URL_HERE"]\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"c. Set push ID:")," You need to set push ID to get push notification while application is closed."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"DiyalogEngine.diyalogInstance().apiPushId = YOUR_PUSH_ID_HERE\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note :")," Replace ",Object(o.b)("strong",{parentName:"p"},"YOUR_PUSH_ID")," with your actual ",Object(o.b)("strong",{parentName:"p"},"Push ID")," key which you will get from your google console"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"d. Set Custom theme color:")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"DiyalogEngine.diyalogInstance().style.navigationTintColor = UIColor(red: 19.0/255.0, green: 157.0/255.0, blue: 234.0/255.0, alpha: 1)\nDiyalogEngine.diyalogInstance().style.vcTintColor = UIColor(red: 19.0/255.0, green: 157.0/255.0, blue: 234.0/255.0, alpha: 1)\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note:")," Diyalog SDK gives you many customization in the chat views. You can learn details about styling Diyalog in styling document."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"e. Set Configurable following parameter :")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Set enable/disable audio call funcation"),Object(o.b)("li",{parentName:"ul"},"Set Application name"),Object(o.b)("li",{parentName:"ul"},"Invite URL"),Object(o.b)("li",{parentName:"ul"},"Help line number"),Object(o.b)("li",{parentName:"ul"},"Privacy policy text/URL"),Object(o.b)("li",{parentName:"ul"},"Terms and condition text/URL"),Object(o.b)("li",{parentName:"ul"},"Enable back button on Chat home screen.")),Object(o.b)("h3",{id:"full-code"},"Full Code"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),'import DiyalogEngine\n\n@UIApplicationMain\nclass AppDelegate: DiyalogApplicationDelegate {\n\nvar window: UIWindow?\n\noverride init() {\nsuper.init()\n\n// Set here your end point\nDiyalogEngine.diyalogInstance().endpoints = ["YOUR_SERVER_URL_HERE"]\n\n// Set here your push id\nDiyalogEngine.diyalogInstance().apiPushId = YOUR_PUSH_ID\n\n// Set here your application theme colours\nDiyalogEngine.diyalogInstance().style.navigationTintColor = UIColor(red: 19.0/255.0, green: 157.0/255.0, blue: 234.0/255.0, alpha: 1)\nDiyalogEngine.diyalogInstance().style.vcTintColor = UIColor(red: 19.0/255.0, green: 157.0/255.0, blue: 234.0/255.0, alpha: 1)\n}\n}\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Step 5:")," Now you have done with integration steps, Add below code for open chat screen from your application. This will first check user authentication is completed or not, First time it will ask for login screen and after authentication complete it will open chat screen. Follow below steps."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),'@IBAction func btnStartMessagingTapped(_ sender: UIButton) {\n\n// This code will check user already login then,\n// fetch last active user id from user default and set as active\nif let lastActiveUserId = UserDefaults.standard.value(forKey: ACAuthentication_KEY_LAST_ACTIVEUSER_AUTH_ID) as? jlong {\nif lastActiveUserId != 0 {\nUserDefaults.standard.set(lastActiveUserId, forKey: ACAuthentication_KEY_AUTH_ID)\n}\n}\n\n// Set end point\nDiyalogEngine.diyalogInstance().endpoints = ["YOUR_SERVER_URL_HERE"]\n\n// Set push id\nDiyalogEngine.diyalogInstance().apiPushId = YOUR_PUSH_ID_HERE\n\n// Set navigation bar and view controllers tint colour\nDiyalogEngine.diyalogInstance().style.navigationTintColor = UIColor(red: 19.0/255.0, green: 157.0/255.0, blue: 234.0/255.0, alpha: 1)\nDiyalogEngine.diyalogInstance().style.vcTintColor = UIColor(red: 19.0/255.0, green: 157.0/255.0, blue: 234.0/255.0, alpha: 1)\n\n// Call this method to setup actors and open chat screen\nDiyalogEngine.diyalogInstance().createDiyalog()\nDiyalogEngine.diyalogInstance().presentMessengerInNewWindow()\n}\n')))}p.isMDXComponent=!0}}]);