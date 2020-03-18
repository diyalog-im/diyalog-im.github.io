(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{143:function(e,n,o){"use strict";o.r(n),o.d(n,"frontMatter",(function(){return r})),o.d(n,"metadata",(function(){return l})),o.d(n,"rightToc",(function(){return p})),o.d(n,"default",(function(){return s}));var a=o(1),t=o(9),i=(o(170),o(169)),r={id:"HowToUseCordova",title:"Details steps to add DiyalogSDK Cordova plugin to ionic application",sidebar_label:"How to add Cordova plugin"},l={id:"cordovaPlugin/HowToUseCordova",title:"Details steps to add DiyalogSDK Cordova plugin to ionic application",description:"You need to configure cordova plugin in ionic application to access native functions in javascript file.",source:"@site/../docs/cordovaPlugin/HowToUseCordova.md",permalink:"/docs/cordovaPlugin/HowToUseCordova",sidebar_label:"How to add Cordova plugin",sidebar:"docs",previous:{title:"Richiew Notificaion Support",permalink:"/docs/iOS/RichView"},next:{title:"What is cordova plugin",permalink:"/docs/cordovaPlugin/CreateCordovaPlugin/CreateCordovaPlugin"}},p=[{value:"Configuration Steps",id:"configuration-steps",children:[]},{value:"How to configure diyalog sdk into your android application",id:"how-to-configure-diyalog-sdk-into-your-android-application",children:[{value:"Configuration Steps",id:"configuration-steps-1",children:[]}]}],c={rightToc:p};function s(e){var n=e.components,o=Object(t.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,o,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"You need to configure cordova plugin in ionic application to access native functions in javascript file."),Object(i.b)("p",null,"You can find below details about how you can create ionic project and create cordova plugin for Diyalog SDK."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/cordovaPlugin/CreateIonicProject/CreateIonicProject"}),"Create ionic project")," "),Object(i.b)("p",{parentName:"li"},Object(i.b)("em",{parentName:"p"},"You can skip it. If you have already an ionic/cordova project."))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/cordovaPlugin/CreateCordovaPlugin/CreateCordovaPlugin"}),"Create cordova plugin")," "),Object(i.b)("p",{parentName:"li"},Object(i.b)("em",{parentName:"p"},"You can skip it. You can find DiyalogSDK Cordova plugin (DiyalogChat) in directory ",Object(i.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/diyalog-im/diyalog-platform/tree/master/diyalog-cordova-plugin/Plugin/DiyalogChat"}),"Plugin"),".")))),Object(i.b)("h2",{id:"configuration-steps"},"Configuration Steps"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Step 1:"),' Download "DiyalogChat" plugin and put it on your ionic project root directory. '),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Step 2:")," Add this plugin to ionic sample application."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"/workspace/MyIonicApp$ cordova plugin add DiyalogChat/\n")),Object(i.b)("p",null,"Once done, in config.xml in the root folder, our plugin is added."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),'<plugin name="im.diyalog.ionicplugin" spec="DiyalogChat" />\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Step 3:")," If you wants to remove plugin after added from project then you can use below command:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"First, you should list your plugins:")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),'/workspace/MyIonicApp$ cordova plugin list\ncordova-plugin-device 2.0.1 "Device"\ncordova-plugin-ionic-keyboard 2.0.5 "cordova-plugin-ionic-keyboard"\ncordova-plugin-ionic-webview 1.2.0 "cordova-plugin-ionic-webview"\ncordova-plugin-splashscreen 5.0.2 "Splashscreen"\ncordova-plugin-whitelist 1.3.3 "Whitelist"\nim.diyalog.ionicplugin 1.0.0 "DiyalogChat"\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"With this result, you can simply do:")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"workspace/MyIonicApp$ cordova plugin remove im.diyalog.ionicplugin\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Step 4:")," Now for adding this installed plugin in android platform follow below command:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"/workspace/MyIonicApp$ cordova platform add android\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"If you already added android platform to ionic app, you can update platform with below command.")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"/workspace/MyIonicApp$ cordova plugin save\n/workspace/MyIonicApp$ cordova platform rm android\n/workspace/MyIonicApp$ cordova platform add android\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"After adding android platform you can see plugin file into android platform",Object(i.b)("br",null),"\n/workspace/MyIonicApp/platforms/android/app/src/main/java/im/diyalog/ionicplugin/DiyalogChat.java")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Step 5:")," Now call this plugin from your ionic application."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Add button to your ionic application. I have added button into ",Object(i.b)("strong",{parentName:"li"},"home.html")," file")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),'  <button  ion-button secondary menuToggle (click)="openDiyalogChat()">Start Messaging</button>\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"now open ",Object(i.b)("strong",{parentName:"li"},"home.ts")," file",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},'Add "platform" parameter in import section:',Object(i.b)("br",null),"\nimport { NavController,",Object(i.b)("strong",{parentName:"li"},"Platform")," } from 'ionic-angular';"),Object(i.b)("li",{parentName:"ul"},"Declare cordova variable:",Object(i.b)("br",null),Object(i.b)("strong",{parentName:"li"},"declare var cordova: any;")),Object(i.b)("li",{parentName:"ul"},"Add Platform variable in constructor:",Object(i.b)("br",null),"\nconstructor(public navCtrl: NavController, ",Object(i.b)("strong",{parentName:"li"},"public platform: Platform"),")"),Object(i.b)("li",{parentName:"ul"},"Create function for open Diyalog chat")))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"        openDiyalogChat() {\n          this.platform.ready().then(() => {\n           cordova.plugins.DiyalogChat.coolMethod();\n          });\n        }\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"You can see Whole file")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"        import { Component } from '@angular/core';\n        import { NavController,Platform } from 'ionic-angular';\n        declare var cordova: any;\n        @Component({\n         selector: 'page-home',\n         templateUrl: 'home.html'\n        })\n        export class HomePage {\n\n         constructor(public navCtrl: NavController, public platform: Platform) {\n         }\n\n         openDiyalogChat() {\n          this.platform.ready().then(() => {\n           cordova.plugins.DiyalogChat.coolMethod();\n          });\n         }\n        }\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Step 6:")," Now run ionic app with below command"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"workspace/TestIonicApp$ ionic cordova run android\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"You can also import this project in android studio. Go to android studio and select option ",Object(i.b)("strong",{parentName:"li"},"import project")," and select android project from platform directory.\n",Object(i.b)("strong",{parentName:"li"},"MyIonicApp/platforms/android"),". ")),Object(i.b)("p",null,"After run application when you click on ",Object(i.b)("strong",{parentName:"p"},"Start Messaging")," button you can see ",Object(i.b)("strong",{parentName:"p"},"welcome to diyalog")," screen."),Object(i.b)("h2",{id:"how-to-configure-diyalog-sdk-into-your-android-application"},"How to configure diyalog sdk into your android application"),Object(i.b)("h3",{id:"configuration-steps-1"},"Configuration Steps"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Step 1:")," Download Diyaload SDK (DiyalogEngine.aar) from \u2026\u2026.",Object(i.b)("br",null),"\n",Object(i.b)("strong",{parentName:"p"},"Step 2:")," Copy the aar file and put it under app module's libs folder. As shown in below Screen shot.",Object(i.b)("br",null)),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/img/cordova/diyalog_sdk_location.jpg",alt:null})),Object(i.b)("br",null)),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Step 3:")," Open Project level build.gradle file and add \u201cflatDir{dirs 'libs'}\u201das shown below."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"allprojects {\n    repositories {\n        jcenter()\n        flatDir {\n            dirs 'libs'//this way we can find the .aar file in libs folder\n        }\n    }\n}\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Step 4:")," Open module level build.grdle file. ",Object(i.b)("br",null)),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"a. set compile and target sdk version to 26 and above")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"compileSdkVersion 26\n    defaultConfig {\n        --\n        minSdkVersion 15\n        targetSdkVersion 26\n        --\n    }\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"b. Add the following dependencies")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"dependencies {\n    \n        implementation fileTree(dir: 'libs', include: '*.jar')\n        // SUB-PROJECT DEPENDENCIES START\n        implementation(project(path: \":CordovaLib\"))\n        // SUB-PROJECT DEPENDENCIES END\n\n        implementation 'com.android.support:appcompat-v7:26.1.0'\n        implementation 'com.android.support:appcompat-v7:26.1.0'\n        implementation 'com.android.support.constraint:constraint-layout:1.0.2'\n        testImplementation 'junit:junit:4.12'\n        androidTestImplementation 'com.android.support.test:runner:1.0.1'\n        androidTestImplementation 'com.android.support.test.espresso:espresso-core:3.0.1'\n\n        compile (name:'DiyalogEngine', ext:'aar')\n\n        // Calls\n        compile 'io.pristine:libjingle:11139@aar'\n\n        // UI\n        compile ('com.facebook.fresco:fresco:0.7.0'){\n         exclude group: 'com.parse.bolts', module: 'bolts-android'\n         exclude group: 'com.nineoldandroids', module: 'library'\n         exclude group: 'com.android.support'\n        }\n\n        compile 'com.facebook.rebound:rebound:0.3.8'\n\n        compile 'com.soundcloud.android:android-crop:1.0.0@aar'\n        compile('com.github.chrisbanes.photoview:library:1.2.4') {\n          //        exclude module: 'support-v13'\n           exclude group: 'com.android.support'\n        }\n\n        compile 'com.droidkit:progress:0.5'\n        compile ('com.getbase:floatingactionbutton:1.9.1'){\n          exclude group: 'com.android.support', module: 'support-annotations'\n        } \n\n\n        // Core\n        compile 'com.squareup.okhttp3:okhttp:3.9.1'\n        compile 'org.eclipse.paho:org.eclipse.paho.client.mqttv3:1.0.2'\n\n        // Android Support\n        //compile 'com.android.support:support-v4:23.1.0'\n        //compile 'com.android.support:support-v13:26.1.0'\n        compile 'com.android.support:appcompat-v7:26.1.0'\n        compile 'com.android.support:palette-v7:26.1.0'\n        compile ('com.android.support:recyclerview-v7:26.1.0'){\n          exclude module: 'support-annotations'\n          exclude module: 'support-v4'\n        }\n        compile ('com.android.support:design:26.1.0'){\n          exclude module: 'support-v4'\n          exclude module: 'recyclerview-v7'\n          exclude module: 'appcompat-v7'\n        }\n        compile 'com.android.support:customtabs:26.1.0'\n        compile 'com.google.android.gms:play-services-maps:11.8.0'\n\n        compile 'jp.wasabeef:glide-transformations:2.0.2'\n   }\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Step 5:")," Add below code at bottom of module level build.gradle files.This code require because support library version 26 and above are missing ",Object(i.b)("strong",{parentName:"p"},"AnimatorCompatHelper")," class for animation, and do not change ",Object(i.b)("strong",{parentName:"p"},"details.useVersion '25.3.0'")," version number."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"configurations.all {\n    resolutionStrategy.eachDependency { DependencyResolveDetails details ->\n        def requested = details.requested\n        if (requested.group == 'com.android.support') {\n            if (!requested.name.startsWith(\"multidex\")) {\n                details.useVersion '25.3.0'\n            }\n        }\n    }\n}\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Step 6:")," Open your project AndroidManifest.xml file and add below line of code inside application tag."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),'<meta-data\n    android:name="com.google.android.geo.API_KEY"\n    android:value="YOUR_API_KEY_HERE" />\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note")," : Replace ",Object(i.b)("strong",{parentName:"p"},"YOUR","_","API","_","KEY","_","HERE")," with your actual ",Object(i.b)("strong",{parentName:"p"},"Map API")," key which you will get from your google Api console\nTo get Map API key please check this"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Link :")," ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",Object(a.a)({parentName:"strong"},{href:"https://developers.google.com/maps/documentation/android-api/signup"}),"https://developers.google.com/maps/documentation/android-api/signup"))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Step 7:"),"  Add below permissions into AndroidManifest.xml file."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),'<uses-permission android:name="android.permission.INTERNET" />\n<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />\n<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />\n<uses-permission android:name="android.permission.INTERACT_ACROSS_USERS_FULL" />\n<uses-permission android:name="android.permission.GET_ACCOUNTS" />\n<uses-permission android:name="android.permission.MANAGE_ACCOUNTS" />\n<uses-permission android:name="android.permission.AUTHENTICATE_ACCOUNTS" />\n<uses-permission android:name="android.permission.READ_CONTACTS" />\n<uses-permission android:name="android.permission.WRITE_CONTACTS" />\n<uses-permission android:name="android.permission.WAKE_LOCK" />\n<uses-permission android:name="android.permission.RECORD_AUDIO" />\n<uses-permission android:name="android.permission.VIBRATE" />\n<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />\n<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />\n<uses-permission android:name="android.permission.READ_PROFILE" />\n<uses-permission android:name="android.permission.SYSTEM_ALERT_WINDOW" />\n<uses-permission android:name="android.permission.CAMERA" />\n<uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS" />\n<uses-permission android:name="android.permission.LOCATION_HARDWARE" />\n<uses-permission android:name="com.android.launcher.permission.INSTALL_SHORTCUT" />\n<uses-permission android:name="android.permission.RECEIVE_BOOT_COMPLETED" />\n\n<uses-feature\nandroid:glEsVersion="0x00020000"\nandroid:required="true" />\n<uses-feature\nandroid:name="android.hardware.telephony"\nandroid:required="false" />\n<uses-feature\nandroid:name="android.hardware.bluetooth"\nandroid:required="false" />\n<uses-feature\nandroid:name="android.hardware.camera"\nandroid:required="false" />\n<uses-feature\nandroid:name="android.hardware.location"\nandroid:required="false" />\n<uses-feature \nandroid:name="android.hardware.microphone"\nandroid:required="false" />\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Step 8:")," Create Application class and extend it with ",Object(i.b)("strong",{parentName:"p"},"DiyalogEngineApplication"),". And override ",Object(i.b)("strong",{parentName:"p"},"onConfigureDiyalogEngine()")," method.\nInside that method set below configure.",Object(i.b)("br",null),"\n",Object(i.b)("strong",{parentName:"p"},"a. Set Server End Point:")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),'DiyalogEngine.diyalogInstance().setEndpoints(new String[]{"YOUR_SERVER_URL_HERE"});\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"b. Set Custom theme color:")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),'DiyalogStyle style = DiyalogEngine.diyalogInstance().style;\nstyle.setMainColor(Color.parseColor("#42f47a"));    \n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"c. Set Configurable following parameter :")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Set enable/disable audio call funcation"),Object(i.b)("li",{parentName:"ul"},"Set Application name"),Object(i.b)("li",{parentName:"ul"},"Invite URL"),Object(i.b)("li",{parentName:"ul"},"Help line number"),Object(i.b)("li",{parentName:"ul"},"Privacy policy text/URL"),Object(i.b)("li",{parentName:"ul"},"Terms and condition text/URL")),Object(i.b)("h4",{id:"full-code"},"Full Code:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),'public class DiyalogApplication extends DiyalogEngineApplication {\n    @Override\n    public void onConfigureDiyalogEngine() {\n\n\n        // set here your end point\n        DiyalogEngine.diyalogInstance().setEndpoints(new String[]{"YOUR_SERVER_URL_HERE "});\n\n        // set here you application theme color\n        DiyalogStyle style = DiyalogEngine.diyalogInstance().style;\n        style.setMainColor(Color.parseColor("#FFFF4081"));\n    }\n}\n')),Object(i.b)("p",null,"Do not forget to mention application class  in ",Object(i.b)("strong",{parentName:"p"},"AndroidManifest.xml")," inside ",Object(i.b)("strong",{parentName:"p"},"application")," tag using ",Object(i.b)("strong",{parentName:"p"},"android:name")," property."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Step 9:")," Now you have done with integration steps, Add below code for open chat screen from your application.  This will first check user authentication is completed or not, First time it will ask for login screen and after authentication complete it will open chat screen. Follow below steps"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"a.")," import messenger class ",Object(i.b)("strong",{parentName:"li"},"\u201cimport static im.diyalog.sdk.util.DiyalogEngineMessenger.messenger;\u201d")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"b.")," And code for start chat screen",Object(i.b)("br",null))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),'public class DiyalogChatActivity extends Activity {\n\n    @Override\n    protected void onCreate(Bundle savedInstanceState) {\n        super.onCreate(savedInstanceState);\n        String package_name = getApplication().getPackageName();\n        setContentView(getApplication().getResources().getIdentifier("diyalog_chat_layout", "layout", package_name));\n\n         if (messenger().getAuthState() != AuthState.LOGGED_IN) {\n\n            long lastActiveAuthID = messenger().getPreferences().getLongOfKey(Authentication.KEY_LAST_ACTIVEUSER_AUTH_ID);\n            if (lastActiveAuthID == 0)\n            {\n                Bundle authExtras = new Bundle();\n                authExtras.putInt(AuthActivity.SIGN_TYPE_KEY, AuthActivity.SIGN_TYPE_IN);\n                authExtras.putInt(AuthActivity.USER_TYPE_KEY, AuthActivity.USER_TYPE_PERSONAL);\n                DiyalogEngine.diyalogInstance().getActivityManager().startAuthActivity(DiyalogChatActivity.this, authExtras);\n                finish();\n            }\n            else {\n\n                messenger().autoLogin(lastActiveAuthID);\n                messenger().switchAccount();\n                messenger().killAppStateActor();\n\n                DiyalogEngine.diyalogInstance().createDiyalog(getApplication());\n                DiyalogEngine.diyalogInstance().startMessagingApp(DiyalogChatActivity.this);\n                finish();\n            }\n            return;\n\n\n        }\n\n        DiyalogEngine.diyalogInstance().startMessagingApp(DiyalogChatActivity.this);\n        finish();\n\n    }\n}\n\n')),Object(i.b)("p",null,"Now run application and click on ",Object(i.b)("strong",{parentName:"p"},"Start Messaging")," button it will open ",Object(i.b)("strong",{parentName:"p"},"diyalog sdk with login screen"),"."))}s.isMDXComponent=!0}}]);