(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{162:function(e,t,l){"use strict";l.r(t),l.d(t,"frontMatter",(function(){return n})),l.d(t,"metadata",(function(){return b})),l.d(t,"rightToc",(function(){return c})),l.d(t,"default",(function(){return s}));var a=l(1),o=l(9),r=(l(191),l(190)),n={id:"android_style",title:"Diyalog Android SDK Style",sidebar_label:"Diyalog Android SDK Style"},b={id:"tr/android_style",title:"Diyalog Android SDK Style",description:"Diyalog SDK provides custom Diyalog style to your application, using Diyalog style customer can create own styled screen.",source:"@site/../docs/tr/android_style.md",permalink:"/docs/tr/android_style",sidebar_label:"Diyalog Android SDK Style"},c=[{value:"How to use custom style?",id:"how-to-use-custom-style",children:[]},{value:"More options?",id:"more-options",children:[{value:"<strong>1. General</strong>",id:"1-general",children:[]},{value:"<strong>2. Customise toolbar</strong>",id:"2-customise-toolbar",children:[]},{value:"<strong>3. Setting</strong>",id:"3-setting",children:[]},{value:"<strong>4. Dividers</strong>",id:"4-dividers",children:[]},{value:"<strong>5. Text color</strong>",id:"5-text-color",children:[]},{value:"<strong>6. Contact screen(contact tab of main screen)</strong>",id:"6-contact-screencontact-tab-of-main-screen",children:[]},{value:"<strong>7. Chat screen (Chat tab from home screen)</strong>",id:"7-chat-screen-chat-tab-from-home-screen",children:[]},{value:"<strong>8. Friends Profile/ Group profile</strong>",id:"8-friends-profile-group-profile",children:[]},{value:"<strong>9. Group profile</strong>",id:"9-group-profile",children:[]},{value:"<strong>10. Conversation(Chat Detail)</strong>",id:"10-conversationchat-detail",children:[]}]}],i={rightToc:c};function s(e){var t=e.components,l=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},i,l,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Diyalog SDK provides custom Diyalog style to your application, using Diyalog style customer can create own styled screen."),Object(r.b)("h2",{id:"how-to-use-custom-style"},"How to use custom style?"),Object(r.b)("p",null,"First create object of DiyalogStyle class from your application class, and using that object you can access all property of DiyaLogStyle class."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Diyalog style is optional. If customer don't wants to use custom style then SDK will use default style")),Object(r.b)("h4",{id:"sample-code"},"Sample code:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),' DiyalogStyle style = DiyalogEngine.diyalogInstance().style;\n style.setMainColor(Color.parseColor("#139dea")); \n')),Object(r.b)("h2",{id:"more-options"},"More options?"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Followings are styles parameters with the help of those parameters User can configure style within their Application:"),Object(r.b)("br",null)),Object(r.b)("h3",{id:"1-general"},Object(r.b)("strong",{parentName:"h3"},"1. General")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"To set Application main theme color(Theme color)",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},'style.setMainColor(Color.parseColor("#f442d4"));'),Object(r.b)("li",{parentName:"ul"},'Default color theme  in SDK - "#4d74a6"'),Object(r.b)("li",{parentName:"ul"},"This color is used for text and icon in an Application, if user not set any other style parameter then SDK will use theme color as a base.",Object(r.b)("br",null),Object(r.b)("img",Object(a.a)({parentName:"li"},{src:"/img/android/StyleDocumentImages/General/mainTheme.png",alt:null}))," ",Object(r.b)("img",Object(a.a)({parentName:"li"},{src:"/img/android/StyleDocumentImages/General/mainTheme2.png",alt:null}))))),Object(r.b)("li",{parentName:"ul"},"To set custom background image in chat(conversation) screen",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"style.setDefaultBackgrouds(new int[]{im.diyalog.sdk.R.drawable.intro_background, R.drawable.img_chat_background_default, R.drawable.bg_1, R.drawable.bg_2});"),Object(r.b)("li",{parentName:"ul"},"Customer can use multiple images"),Object(r.b)("li",{parentName:"ul"},"If customer set background by using setDefaultBackground method then user can see all background images in Setting screen, by default SDK will set first image as background but customer can change from list of background from setting screen.",Object(r.b)("br",null),Object(r.b)("img",Object(a.a)({parentName:"li"},{src:"/img/android/StyleDocumentImages/General/chatBackground.png",alt:null}))," ",Object(r.b)("img",Object(a.a)({parentName:"li"},{src:"/img/android/StyleDocumentImages/General/chatBackground_setting.png",alt:null}))))),Object(r.b)("li",{parentName:"ul"},"To set toolbar(Header) background color",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"style.setToolBarColor(R.color.picker_main_color);"),Object(r.b)("li",{parentName:"ul"},"By default SDK will set the color which user has defined in setMainColor method.",Object(r.b)("br",null),Object(r.b)("img",Object(a.a)({parentName:"li"},{src:"/img/android/StyleDocumentImages/General/toolbar.jpg",alt:null}))))),Object(r.b)("li",{parentName:"ul"},"To set floating button background  color based on User action as mentioned below.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Normal",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},'style.setFabColor(Color.parseColor("#77a358"));'),Object(r.b)("li",{parentName:"ul"},"Customer can customize normal fab background color"),Object(r.b)("li",{parentName:"ul"},"Diyalog SDK change all fab background color"))),Object(r.b)("li",{parentName:"ul"},"Pressed",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},'style.setFabPressedColor(Color.parseColor("#a27e57"));'),Object(r.b)("li",{parentName:"ul"},"Diyalog SDK change all pressed fab background color.",Object(r.b)("br",null),Object(r.b)("img",Object(a.a)({parentName:"li"},{src:"/img/android/StyleDocumentImages/General/fab_button.jpg",alt:null}))))))),Object(r.b)("li",{parentName:"ul"},"To set screen background color when options are visible to user on click of floating button.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},'style.setMainFabbgColor(Color.parseColor("#33dd0d1e"));'),Object(r.b)("li",{parentName:"ul"},"When click on fab icon show sub items, SDK will change background color for subitems. ",Object(r.b)("br",null),Object(r.b)("img",Object(a.a)({parentName:"li"},{src:"/img/android/StyleDocumentImages/General/fab.png",alt:null}))))),Object(r.b)("li",{parentName:"ul"},"To set application background color in all screen",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},'style.setMainBackgroundColor(Color.parseColor("#bcc6b8")); ',Object(r.b)("br",null),Object(r.b)("img",Object(a.a)({parentName:"li"},{src:"/img/android/StyleDocumentImages/General/ApplicationmainBGColor.png",alt:null}))))),Object(r.b)("li",{parentName:"ul"},"To set place holder background color for user cover avtar Image",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},'style.setAvatarBackgroundColor(Color.parseColor("#139dea"));'))),Object(r.b)("li",{parentName:"ul"},"To set place holder background image for user cover avtar Image",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"style.setAvatarBackgroundResource(R.drawable.bg_1);"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Note:")," If you set both color and image resource for user placeholder then SDK will accept avatar image resource as a place holder")))),Object(r.b)("h3",{id:"2-customise-toolbar"},Object(r.b)("strong",{parentName:"h3"},"2. Customise toolbar")),Object(r.b)("p",null,"Diyalog SDK provides custom Toolbar style to your application, using this customise you can set toolbar and statusbar same as your main application."),Object(r.b)("h5",{id:"how-to-use-custom-toolbar"},"How to use custom toolbar?"),Object(r.b)("p",null,"First create object of DiyalogStyle class from your application class, and using that object you can customise toolbar."),Object(r.b)("h5",{id:"sample-code-1"},"Sample code:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"})," DiyalogStyle style = DiyalogEngine.diyalogInstance().style;\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Following are cases in which Client can customise toolbar in sdk:")," "),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"- Set gradient background for toolbar and statusbar")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"style.setGradientToolbar(R.drawable.gradient_bg);"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Client need to create gradient drawable file into main application, and need to pass this file refrence as a configurable parameter. "),Object(r.b)("p",{parentName:"li"}," ",Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/img/android/StyleDocumentImages/toolbar/gradient_bg.png",alt:null})),"  "))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"- Set background color for toolbar and statusbar")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},'style.setMainColor(Color.parseColor("#139dea"));'),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"By default Main color of application theme will set as a toolbar & statusbar color "),Object(r.b)("p",{parentName:"li"}," ",Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/img/android/StyleDocumentImages/toolbar/main_color.png",alt:null})),"  ")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},'style.setStatusBarColor(Color.parseColor("#e00b52"));'),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"This will change only statusbar color of sdk. "),Object(r.b)("p",{parentName:"li"}," ",Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/img/android/StyleDocumentImages/toolbar/statusbar_color.png",alt:null})),"  ")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"style.setToolBarColor(R.color.picker_main_color);"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"This will change only toolbar color of sdk. "),Object(r.b)("p",{parentName:"li"},"  ",Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/img/android/StyleDocumentImages/toolbar/Toolbar_color.png",alt:null})),"  ")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Note:")," If you will set gradient background configuration then above configuration will not be apply effact. "))),Object(r.b)("h3",{id:"3-setting"},Object(r.b)("strong",{parentName:"h3"},"3. Setting")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"To set setting screen label and text color"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},'style.setSettingsCategoryTextColor(Color.parseColor("#f28e02"));'),Object(r.b)("li",{parentName:"ul"},"By default SDK will set the color which user has defined in setMainColor method."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"To set setting screen icon color"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},'style.setSettingsIconColor(Color.parseColor("#e00b52")); '))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"To set setting screen title color"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},'style.setSettingsTitleColor(Color.parseColor("#5622b7"));  ',Object(r.b)("br",null))),Object(r.b)("p",{parentName:"li"},Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/img/android/StyleDocumentImages/Setting/setting.png",alt:null}))))),Object(r.b)("h3",{id:"4-dividers"},Object(r.b)("strong",{parentName:"h3"},"4. Dividers")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"To set divider color to list in application ",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},'style.setDividerColor(Color.parseColor("#e00b52"));'),Object(r.b)("li",{parentName:"ul"},"This divider color will apply to whole application as divider color. ",Object(r.b)("br",null),Object(r.b)("img",Object(a.a)({parentName:"li"},{src:"/img/android/StyleDocumentImages/General/list_divider.jpg",alt:null})))))),Object(r.b)("h3",{id:"5-text-color"},Object(r.b)("strong",{parentName:"h3"},"5. Text color")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Set primary text color",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},'style.setTextPrimaryColor(Color.parseColor("#e00b52"));'))),Object(r.b)("li",{parentName:"ul"},"Set secondary color",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},'style.setTextSecondaryColor(Color.parseColor("#0a0ed8")); ',Object(r.b)("br",null),Object(r.b)("img",Object(a.a)({parentName:"li"},{src:"/img/android/StyleDocumentImages/text/text_primary1.png",alt:null}))," ",Object(r.b)("img",Object(a.a)({parentName:"li"},{src:"/img/android/StyleDocumentImages/text/text_primary2.png",alt:null}))))),Object(r.b)("li",{parentName:"ul"},"Set hint color",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},'style.setTextHintColor(Color.parseColor("#ede50e")); ',Object(r.b)("br",null),Object(r.b)("img",Object(a.a)({parentName:"li"},{src:"/img/android/StyleDocumentImages/text/textHint.jpg",alt:null}))))),Object(r.b)("li",{parentName:"ul"},"Set sub header color",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},'style.setTextSubHeaderColor(Color.parseColor("#f49e42"));',Object(r.b)("br",null),Object(r.b)("img",Object(a.a)({parentName:"li"},{src:"/img/android/StyleDocumentImages/text/text_primary1.png",alt:null}))),Object(r.b)("li",{parentName:"ul"},'In above image see text color of label "Long press for additional options"')))),Object(r.b)("h3",{id:"6-contact-screencontact-tab-of-main-screen"},Object(r.b)("strong",{parentName:"h3"},"6. Contact screen(contact tab of main screen)")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"set share icon and text color ",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},'style.setActionShareColor(Color.parseColor("#0a0ed8"));'),Object(r.b)("li",{parentName:"ul"},"By default SDK will set the color which user has defined in setMainColor method."))),Object(r.b)("li",{parentName:"ul"},"set short name(First character) text color",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},'style.setContactFastTitleColor(Color.parseColor("#e00b52"));'),Object(r.b)("li",{parentName:"ul"},"By default SDK will set the color which user has defined in setMainColor method."))),Object(r.b)("li",{parentName:"ul"},"set Add contact icon and text color",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},'style.setActionAddContactColor(Color.parseColor("#0a0ed8"));'),Object(r.b)("li",{parentName:"ul"},"By default SDK will set the color which user has defined in setMainColor method."))),Object(r.b)("li",{parentName:"ul"},"set list divider color",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},'style.setContactDividerColor(Color.parseColor("#ede50e"));'),Object(r.b)("li",{parentName:"ul"},"if customer has not set contact divider color then it will accept default divider color which user has set in \u201csetDividerColor\u201d method",Object(r.b)("br",null),Object(r.b)("img",Object(a.a)({parentName:"li"},{src:"/img/android/StyleDocumentImages/contact/contact.png",alt:null})))))),Object(r.b)("h3",{id:"7-chat-screen-chat-tab-from-home-screen"},Object(r.b)("strong",{parentName:"h3"},"7. Chat screen (Chat tab from home screen)")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Set indicator color of sent message",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},'style.setDialogsStateSentColor(Color.parseColor("#0794ed")); '))),Object(r.b)("li",{parentName:"ul"},"Set indicator color of delivered message",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},'style.setDialogsStateDeliveredColor(Color.parseColor("#edd607")); '))),Object(r.b)("li",{parentName:"ul"},"Set indicator color of read message",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},'style.setDialogsStateReadColor(Color.parseColor("#edd607")); ',Object(r.b)("br",null),Object(r.b)("img",Object(a.a)({parentName:"li"},{src:"/img/android/StyleDocumentImages/chat/Indicator.png",alt:null}))))),Object(r.b)("li",{parentName:"ul"},"Set counter text color of unread message count",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},'style.setDialogsCounterTextColor(Color.parseColor("#f48004"));'))),Object(r.b)("li",{parentName:"ul"},"Set counter background color for unread message count",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},'style.setDialogsCounterBackgroundColor(Color.parseColor("#120be0"));',Object(r.b)("br",null),Object(r.b)("img",Object(a.a)({parentName:"li"},{src:"/img/android/StyleDocumentImages/chat/unreadCount.png",alt:null}))))),Object(r.b)("li",{parentName:"ul"},"Set text color for last conversation message time",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},'style.setDialogsTimeColor(Color.parseColor("#c62e0f")); '))),Object(r.b)("li",{parentName:"ul"},"set divider color between chat list",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},'style.setDialogsDividerColor(Color.parseColor("#e0120b"));'),Object(r.b)("li",{parentName:"ul"},"By default SDK show default divider color"))),Object(r.b)("li",{parentName:"ul"},"Set text color for contact name",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},'style.setDialogsTitleColor(Color.parseColor("#4a8413"));'),Object(r.b)("li",{parentName:"ul"},"By default SDK show primary color"))),Object(r.b)("li",{parentName:"ul"},"Set last message which is either sent or receive text color",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},'style.setDialogsTextColor(Color.parseColor("#a8a579"));'),Object(r.b)("li",{parentName:"ul"},"By default SDK show main theme color"))),Object(r.b)("li",{parentName:"ul"},"Set typing label text color which indicates user is typing a message.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},'style.setDialogsTypingColor(Color.parseColor("#40000000"));'),Object(r.b)("li",{parentName:"ul"},"By default SDK show main theme color",Object(r.b)("br",null),Object(r.b)("img",Object(a.a)({parentName:"li"},{src:"/img/android/StyleDocumentImages/chat/typing.png",alt:null}))))),Object(r.b)("li",{parentName:"ul"},"Set last message text color of content type media and document",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},'style.setDialogsActiveTextColor(Color.parseColor("#db2a0a"));',Object(r.b)("br",null),Object(r.b)("img",Object(a.a)({parentName:"li"},{src:"/img/android/StyleDocumentImages/chat/FileLastMessage.png",alt:null})))))),Object(r.b)("h3",{id:"8-friends-profile-group-profile"},Object(r.b)("strong",{parentName:"h3"},"8. Friends Profile/ Group profile")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Set title color of friendName and groupName text color",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},'style.setProfileTitleColor(Color.parseColor("#139dea"));'))),Object(r.b)("li",{parentName:"ul"},"subtitle color (Last seen text color)",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},'style.setProfileSubtitleColor(Color.parseColor("#139dea"));'))),Object(r.b)("li",{parentName:"ul"},"contact icon color",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"If not set then it will show default action icon color "),Object(r.b)("li",{parentName:"ul"},'style.setProfileContactIconColor (Color.parseColor("#139dea"));'))),Object(r.b)("li",{parentName:"ul"},"To set action icon color(action icon like :- Add contact, new message, voice call) ",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},'style.setListActionColor(Color.parseColor("#db2a0a")); '),Object(r.b)("li",{parentName:"ul"},"By default SDK will set the color which user has defined in setMainColor method."))),Object(r.b)("li",{parentName:"ul"},"Small icon color ",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},'style.setSectonIconSmallColor(Color.parseColor("#0a0ed8"));'),Object(r.b)("li",{parentName:"ul"},'By Default color for small icon is "# b5b6b7"',Object(r.b)("br",null),Object(r.b)("img",Object(a.a)({parentName:"li"},{src:"/img/android/StyleDocumentImages/Profile/Profile.png",alt:null})))))),Object(r.b)("h3",{id:"9-group-profile"},Object(r.b)("strong",{parentName:"h3"},"9. Group profile")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Set admin label text color ",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"If not pass then set default Accent color"),Object(r.b)("li",{parentName:"ul"},'style.setGroupAdminColor(Color.parseColor("#0cd341")); '))),Object(r.b)("li",{parentName:"ul"},"set online label text color into group profile screen for members list ",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},'style.setGroupOnlineColor(Color.parseColor("#380249")); ',Object(r.b)("br",null),Object(r.b)("img",Object(a.a)({parentName:"li"},{src:"/img/android/StyleDocumentImages/Group/groupProfile.png",alt:null})))))),Object(r.b)("h3",{id:"10-conversationchat-detail"},Object(r.b)("strong",{parentName:"h3"},"10. Conversation(Chat Detail)")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"set enable send message icon color",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},'style.setConvSendEnabledColor(Color.parseColor("#0cd341")); '))),Object(r.b)("li",{parentName:"ul"},"Set disable send message icon color",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},'style.setConvSendDisabledColor(Color.parseColor("#db2a0a"));'))),Object(r.b)("li",{parentName:"ul"},"Set date text color ",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},'style.setConvDatetextColor(Color.parseColor("#db0be2")); '))),Object(r.b)("li",{parentName:"ul"},"Set date text background color ",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},'style.setConvDateBgColor(Color.parseColor("#18d8e2")); '))),Object(r.b)("li",{parentName:"ul"},"Set chat message color",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},'style.setConvTextColor(Color.parseColor("#db2a0a"));'))),Object(r.b)("li",{parentName:"ul"},"Set chat message date color",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},'style.setConvTimeColor(Color.parseColor("#0cd341"));'))),Object(r.b)("li",{parentName:"ul"},"Set sent message indicator color ",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},'style.setConvStateSentColor(Color.parseColor("#40000000"));'))),Object(r.b)("li",{parentName:"ul"},"Set delivered message indicator color",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},'style.setConvStateDeliveredColor(Color.parseColor("#40000000"));'))),Object(r.b)("li",{parentName:"ul"},"Set read message indicator color",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},'style.setConvStateReadColor(Color.parseColor("#ff7ea8ef"));'))),Object(r.b)("li",{parentName:"ul"},"Set media chat message date icon color",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},'style.setConvMediaDateBgColor(Color.parseColor("#99000000"));'))),Object(r.b)("li",{parentName:"ul"},"Set pending media chat message indicator color",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},'style.setConvMediaStatePendingColor(Color.parseColor("#ffffff"));'))),Object(r.b)("li",{parentName:"ul"},"Set sent media chat message indicator color",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},'style.setConvMediaStateSentColor(Color.parseColor("#ffffff"));'))),Object(r.b)("li",{parentName:"ul"},"Set deliver media chat message indicator color",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},'style.setConvMediaStateDeliveredColor(Color.parseColor("#ffffff"));'))),Object(r.b)("li",{parentName:"ul"},"Set read media chat message indicator color",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},'style.setConvMediaStateReadColor(Color.parseColor("#ff7ea8ef"));'))),Object(r.b)("li",{parentName:"ul"},"Set favorite chat message icon color",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},'style.setConvLikeColor(Color.parseColor("#e2264d"));',Object(r.b)("br",null),Object(r.b)("img",Object(a.a)({parentName:"li"},{src:"/img/android/StyleDocumentImages/chat/ChatDetail.png",alt:null})))))))}s.isMDXComponent=!0}}]);