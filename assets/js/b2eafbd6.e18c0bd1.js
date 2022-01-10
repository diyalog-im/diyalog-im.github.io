(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{121:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return c}));var a=t(3),o=t(7),i=(t(0),t(149)),r={id:"android_notification_configuration",title:"Notifications",sidebar_label:"Notifications"},s={unversionedId:"android_notification_configuration",id:"android_notification_configuration",isDocsHomePage:!1,title:"Notifications",description:"You can enable notifications in DiyalogSDK. It uses Firebase services for app that deployed to Google App store and Huawei Mobile Services for app that deployed Huawei App Gallery.",source:"@site/../docs/android_notification_configuration.md",slug:"/android_notification_configuration",permalink:"/docs/android_notification_configuration",version:"current",sidebar_label:"Notifications",sidebar:"docs",previous:{title:"Style your SDK",permalink:"/docs/android_style"},next:{title:"Starting Video Help",permalink:"/docs/android_video_help"}},p=[{value:"Firebase Cloud Messaging integration",id:"firebase-cloud-messaging-integration",children:[{value:"To create a Firebase project",id:"to-create-a-firebase-project",children:[]},{value:"Now that you have a project, you can add your Android app to it",id:"now-that-you-have-a-project-you-can-add-your-android-app-to-it",children:[]},{value:"Configuration Steps for android project",id:"configuration-steps-for-android-project",children:[]},{value:"Main application has firebase push notification",id:"main-application-has-firebase-push-notification",children:[]}]},{value:"Huawei Mobile Services pushkit integration",id:"huawei-mobile-services-pushkit-integration",children:[{value:"To create a Huawei Mobile Services PushKit project",id:"to-create-a-huawei-mobile-services-pushkit-project",children:[]},{value:"Configuration Steps for android project",id:"configuration-steps-for-android-project-1",children:[]},{value:"Main application has Huawei Mobile Services pushkit",id:"main-application-has-huawei-mobile-services-pushkit",children:[]}]}],l={toc:p};function c(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"You can enable notifications in DiyalogSDK. It uses Firebase services for app that deployed to Google App store and Huawei Mobile Services for app that deployed Huawei App Gallery."),Object(i.b)("h2",{id:"firebase-cloud-messaging-integration"},"Firebase Cloud Messaging integration"),Object(i.b)("p",null,"In Diyalog SDK we have used firebase messaging platform for sending push notification. so we have used firebase services in sdk. Client need to configure as below into main application."),Object(i.b)("p",null,"For application that deployed to Google App Store :"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},'implementation "im.diyalog:DiyalogGoogleExtension:version-no"\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"*version-no")," should be the current stable version of Diyalog Android SDK."),Object(i.b)("h3",{id:"to-create-a-firebase-project"},"To create a Firebase project"),Object(i.b)("p",null,"Need to do configure below Steps on firebase console"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Step 1:")," Create a Firebase project in the ",Object(i.b)("a",{parentName:"p",href:"https://console.firebase.google.com/"},"Firebase console"),", if you don't have any project then Click ",Object(i.b)("strong",{parentName:"p"},"Add project"),". If you already have an existing Google project associated with your mobile app, select it from the ",Object(i.b)("strong",{parentName:"p"},"Project name")," drop down menu. Otherwise, enter a project name to create a new project"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Step 2:")," Follow the remaining steps and click ",Object(i.b)("strong",{parentName:"p"},"Create project")," (or ",Object(i.b)("strong",{parentName:"p"},"Add Firebase")," if you have existing project) for your project. When the process completes, you'll be taken to the project overview."),Object(i.b)("h3",{id:"now-that-you-have-a-project-you-can-add-your-android-app-to-it"},"Now that you have a project, you can add your Android app to it"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Step 1:")," Click ",Object(i.b)("strong",{parentName:"p"},"Add Firebase to your Android app")," and follow the setup steps. If you're importing an existing Google project, this may happen automatically and you can just download the config file."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Step 2:")," When prompted, enter your app's package name. It's important to enter the package name your app is using; this can only be set when you add an app to your Firebase project."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Step 3:")," During the process, you'll download a ",Object(i.b)("strong",{parentName:"p"},"google-services.json")," file. You can download this file again at any time."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Step 4:")," After you add the initialization code, run your app to send verification to the Firebase console that you've successfully installed Firebase."),Object(i.b)("h3",{id:"configuration-steps-for-android-project"},"Configuration Steps for android project"),Object(i.b)("p",null,"Client need to perform a few basic steps to prepare your Android Studio project."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Step 1:")," Add ",Object(i.b)("strong",{parentName:"p"},"google-services.json")," file to application level project. (usually the app/google-services.json)"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Step 2:")," Add rules to your root-level build.gradle file, to include the google-services plugin and the Google's Maven repository."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"buildscript {\n    // ...\n    dependencies {\n        // ...\n        classpath 'com.google.gms:google-services:4.2.0' // google-services plugin\n    }\n}\n\nallprojects {\n    // ...\n    repositories {\n        // ...\n        google() // Google's Maven repository\n    }\n}\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Step 3:")," Then, in your module Gradle file (usually the app/build.gradle), add the apply plugin line at the bottom of the file to enable the Gradle plugin. You should also add the dependencies for the Firebase SDKs."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"apply plugin: 'com.android.application'\n\nandroid {\n  // ...\n}\n\ndependencies {\n  // ...\n    implementation 'com.google.firebase:firebase-messaging:17.6.0'\n\n}\n\n// ADD THIS AT THE BOTTOM\napply plugin: 'com.google.gms.google-services'\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Step 4:")," Now, client require to Pass sender ID/project ID to sdk from main application as below. client need to pass this pushID before Initialize() sdk. Client can register pushID into application class."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"}," DiyalogEngine.diyalogInstance().setPushId(1234567890L);\n")),Object(i.b)("p",null,"Done. Above steps are enough for generating push notification, if main application has no any FCM integration. If you are usinf fcm in your app, you should follow next section to integrate to DiyalogSDK."),Object(i.b)("h3",{id:"main-application-has-firebase-push-notification"},"Main application has firebase push notification"),Object(i.b)("p",null,"If in main application has also firebase push notification then client need to follow additinal below steps to configure FCM push notification."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Step 1:")," Client need send device token to diyalog sdk from main application's FirebaseMessagingService class."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},'public class MyFirebaseMessagingService extends FirebaseMessagingService {\n    @Override\n    public void onNewToken(String s) {\n        super.onNewToken(s);\n\n        Log.d(TAG, "New Token loaded: " + s);\n        DiyalogEngine.diyalogInstance().storeDeviceToken(getApplicationContext(),s);\n    }\n}\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Step 2:")," Client need to pass push payload data(RemoteMessage) to diyalog sdk from application's  FirebaseMessagingService."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},'public class MyFirebaseMessagingService extends FirebaseMessagingService {\n\n    @Override\n    public void onMessageReceived(RemoteMessage remoteMessage) {\n        /**\n         * Diyalog sdk has "seq" in push payload,\n         * So with this key client can bifurcate push payload.\n         */\n        String seq_ID = remoteMessage.getData().get("seq");\n        String callId = remoteMessage.getData().get("callId");\n        if(seq_ID != null || callId != null) {\n            // push received for diyalog sdk\n            DiyalogInternalMessageService messageService = new DiyalogInternalMessageService(getApplication());\n            messageService.processPushMessage(remoteMessage.getData());\n\n        }else{\n            // push received for Main application\n        }\n    }\n}\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Step 3:")," Open your project AndroidManifest.xml file and register firebase service as below line of code inside application tag."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},'\x3c!--FCM push notification--\x3e\n<service android:name=".MyFirebaseMessagingService">\n    <intent-filter>\n        <action android:name="com.google.firebase.MESSAGING_EVENT" />\n    </intent-filter>\n</service>\n')),Object(i.b)("h2",{id:"huawei-mobile-services-pushkit-integration"},"Huawei Mobile Services pushkit integration"),Object(i.b)("p",null,"In Diyalog SDK we have used Huawei Mobile Services platform for sending push notification to Huawei devices that installs application from App Gallery. Client need to configure as below into main application."),Object(i.b)("p",null,"For application that deployed to Huawei App Gallery :"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},'implementation "im.diyalog:DiyalogHuaweiExtension:version-no"\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"*version-no")," should be the current stable version of Diyalog Android SDK."),Object(i.b)("h3",{id:"to-create-a-huawei-mobile-services-pushkit-project"},"To create a Huawei Mobile Services PushKit project"),Object(i.b)("p",null,"Need to do configure below Steps on HSM console"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Step 1:")," Create an account and your project in Huawei Mobile Services platform. "),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Step 2:"),"  Create your project in AppGallery connect. Enable pushkit api for your project."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Step 3:")," During the process, you'll download a ",Object(i.b)("strong",{parentName:"p"},"agconnect-services.json")," file. You can download this file again at any time."),Object(i.b)("h3",{id:"configuration-steps-for-android-project-1"},"Configuration Steps for android project"),Object(i.b)("p",null,"Client need to perform a few basic steps to prepare your Android Studio project."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Step 1:")," Add ",Object(i.b)("strong",{parentName:"p"},"agconnect-services.json"),"  file to application level project. (usually the app/agconnect-services.json)"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Step 2:")," Add rules to your root-level build.gradle file, to include the huawei-services plugin from Huawei maven repository."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"buildscript {\n    // ...\n    dependencies {\n        // ...\n        classpath 'com.huawei.agconnect:agcp:1.2.1.301' // huawei-services plugin\n    }\n}\n\nallprojects {\n    // ...\n    repositories {\n        // ...\n        maven { url 'https://developer.huawei.com/repo/' }\n    }\n}\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Step 3:")," Then, in your module Gradle file (usually the app/build.gradle), add the apply plugin line at the bottom of the file to enable the Gradle plugin. You should also add the dependencies for the Huawei SDKs."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"apply plugin: 'com.android.application'\napply plugin: 'com.huawei.agconnect'\n\nandroid {\n  // ...\n}\n\ndependencies {\n  // ...\n    // push kit\n    implementation 'com.huawei.hms:push:4.0.3.301'\n}\n\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Step 4:")," Now, client require to Pass sender ID/project ID to sdk from main application as below. client need to pass this pushID before Initialize() sdk. Client can register pushID into application class."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"}," DiyalogEngine.diyalogInstance().setPushId(1234567890L);\n")),Object(i.b)("p",null,"Done. Above steps are enough for generating push notification, if main application has no any FCM integration. If you are using HMS in your app, you should follow next section to integrate to DiyalogSDK."),Object(i.b)("h3",{id:"main-application-has-huawei-mobile-services-pushkit"},"Main application has Huawei Mobile Services pushkit"),Object(i.b)("p",null,"If in main application has also HMS push notification then client need to follow additinal below steps to configure HSM pushkit."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Step 1:")," Client need send device token to diyalog sdk from main application's HmsMessageService class."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"public class MyHuaweiHMSMessagingService extends HmsMessageService {\n    @Override\n    public void onNewToken(String s) {\n        super.onNewToken(s);\n        DiyalogEngine.diyalogInstance().storeDeviceToken(getApplicationContext(),s);\n    }\n}\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Step 2:")," Client need to pass push payload data(RemoteMessage) to diyalog sdk from application's  HmsMessageService."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},'public class MyHuaweiHMSMessagingService extends HmsMessageService {\n    @Override\n    public void onMessageReceived(RemoteMessage remoteMessage) {\n        /**\n         * Diyalog sdk has "seq" in push payload,\n         * So with this key client can bifurcate push payload.\n         */\n\n        String seq_ID = remoteMessage.getDataOfMap().get("seq");\n        String callId = remoteMessage.getDataOfMap().get("callId");\n        if(seq_ID != null || callId != null) {\n            // push received for diyalog sdk\n            DiyalogInternalMessageService messageService = new DiyalogInternalMessageService(getApplication());\n            messageService.processPushMessage(remoteMessage.getDataOfMap());\n\n        }else{\n\n            // push received for Main application\n        }\n    }\n}\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Step 3:")," Open your project AndroidManifest.xml file and register firebase service as below line of code inside application tag."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},'\x3c!--HMS push notification--\x3e\n<service android:name=".push.MyHuaweiHMSMessagingService"\n    android:exported="true">\n    <intent-filter>\n        <action android:name="com.huawei.push.action.MESSAGING_EVENT" />\n    </intent-filter>\n</service>\n')),Object(i.b)("p",null,"Done :) "))}c.isMDXComponent=!0},149:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return g}));var a=t(0),o=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),c=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=c(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(t),b=a,g=u["".concat(r,".").concat(b)]||u[b]||d[b]||i;return t?o.a.createElement(g,s(s({ref:n},l),{},{components:t})):o.a.createElement(g,s({ref:n},l))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=b;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var l=2;l<i;l++)r[l]=t[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);