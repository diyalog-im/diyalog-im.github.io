(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{167:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return u}));var s=t(1),a=t(9),i=(t(191),t(190)),r={id:"iOS_TokenBaseAuthentication",title:"Token Base Authentication",sidebar_label:"Token Base Authentication"},o={id:"iOS_TokenBaseAuthentication",title:"Token Base Authentication",description:"Token base auth is system that customer can register into Diyalog sdk with their application User Info, and can chat between thier application user. ",source:"@site/../docs/iOS_TokenBaseAuthentication.md",permalink:"/docs/iOS_TokenBaseAuthentication",sidebar_label:"Token Base Authentication",sidebar:"docs",previous:{title:"iOS SDK of Diyalog Messaging Platform",permalink:"/docs/iOS_getting_started"},next:{title:"RichView Notification Support",permalink:"/docs/iOS_RichView"}},c=[{value:"DOMAIN CUSTOMER USER",id:"domain-customer-user",children:[]},{value:"DOMAIN STAFF USER",id:"domain-staff-user",children:[]},{value:"Get Active sessions",id:"get-active-sessions",children:[]},{value:"Messaging from specific User",id:"messaging-from-specific-user",children:[]}],l={rightToc:c};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(s.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Token base auth is system that customer can register into Diyalog sdk with their application User Info, and can chat between thier application user. "),Object(i.b)("p",null,"With DiyalogSDK User can register in forground mode as well as background mode. Before authentication user need to init DiyalogSDK as below."),Object(i.b)("pre",null,Object(i.b)("code",Object(s.a)({parentName:"pre"},{className:"language-sh"}),"   DiyalogEngine.diyalogInstance().Initialize(getApplicationContext());\n   DiyalogEngine.diyalogInstance().waitForReady();\n")),Object(i.b)("h3",{id:"domain-customer-user"},"DOMAIN CUSTOMER USER"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"a. Foreground method"),"\nFor customer user registration client need to call below method with necessary information. After successfully register on server it will create session in Diyalog SDK and can start messaging. Using below method if user already created session in Diyalog SDK, then it will directly open that session and user can start messaging."),Object(i.b)("pre",null,Object(i.b)("code",Object(s.a)({parentName:"pre"},{className:"language-sh"}),'DiyalogEngine.diyalogInstance().startTokenAuth(dlgToken: \u201cdiyalogToken\u201d, deviceID: \u201cDeviceID\u201d, isStartActivityIndicator: \u201cPass True False\u201d, customerID: \u201cCustomerID\u201d, customerName: "Rane", customerPhone: "234567890", customerEmail: "test@test.com")\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"context")," - Activity context\n",Object(i.b)("strong",{parentName:"p"},"dlgToken")," - Main application server will return Diyalog Token when user will login into main application\n",Object(i.b)("strong",{parentName:"p"},"DeviceId")," - domain specific device id. this is for domain validation\n",Object(i.b)("strong",{parentName:"p"},"CustId")," - domain customer id\n",Object(i.b)("strong",{parentName:"p"},"CustName")," - customer name\n",Object(i.b)("strong",{parentName:"p"},"CustPhone")," -  customer phone number (Optional)\n",Object(i.b)("strong",{parentName:"p"},"CustEmail")," \u2013 customer email address (Optional)"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"b. Background method"),"\nWhen customer user will call background method then it will be register on server and after successfully register, it will create session into sdk.\nAnd when user will click on Diyalog chat icon from main application to open sdk, it will directly open that session. user does not wait for register.\nAnd In background method if there is any failure then it will pass error message into failure callback."),Object(i.b)("pre",null,Object(i.b)("code",Object(s.a)({parentName:"pre"},{className:"language-sh"}),' DiyalogEngine.diyalogInstance().startTokenAuthInBackground(context,dlgToken,deviceId,\n                               customerId,customerName, customerPhone, customerEmail, new TokenAuthResponse() {\n                    @Override\n                    public boolean success() {\n                        Log.e("Auth In Bakground","==>> Success ");\n                        return false;\n                    }\n\n                    @Override\n                    public String failure(String errorMsg) {\n                        Log.e("Auth In Bakground","==>> Error: "+errorMsg);\n                        return null;\n                    }\n                }) ;\n')),Object(i.b)("h3",{id:"domain-staff-user"},"DOMAIN STAFF USER"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"a. Foreground method"),"\nFor staff user registration client need to call below method with necessary information. After successfully register on server it will create session in Diyalog SDK and can start messaging. Using below method if user already created session in Diyalog SDK, then it will directly open that session and user can start messaging."),Object(i.b)("pre",null,Object(i.b)("code",Object(s.a)({parentName:"pre"},{className:"language-sh"}),"   DiyalogEngine.diyalogInstance().startDomainUserTokenAuth( context,  dlgToken,   sessionId,\n                                         userId,\n                                         userName,\n                                         userPhone,\n                                         userEmail);\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"context")," - Activity context\n",Object(i.b)("strong",{parentName:"p"},"dlgToken")," - Main application server will return Diyalog Token when user will login into main application\n",Object(i.b)("strong",{parentName:"p"},"sessionId")," \u2013 Staff user's sessionId\n",Object(i.b)("strong",{parentName:"p"},"userId")," - Staff user's UserID\n",Object(i.b)("strong",{parentName:"p"},"UserName")," - Staff user's UserName\n",Object(i.b)("strong",{parentName:"p"},"userPhone"),"  - Staff user's PhoneNumber(Optional)\n",Object(i.b)("strong",{parentName:"p"},"userEmail")," - Staff user's EmailID (Optional)"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"b. Background method"),"\nWhen staff user will call background method then it will be register on server and after successfully register, it will create session into sdk.\nAnd when user will click on Diyalog chat icon from main application to open sdk, it will directly open that session. user does not wait for register.\nAnd In background method if there is any failure then it will pass error message into failure callback."),Object(i.b)("pre",null,Object(i.b)("code",Object(s.a)({parentName:"pre"},{className:"language-sh"}),' DiyalogEngine.diyalogInstance().startDomainUserTokenAuthInBackground(context,  dlgToken,   sessionId, userId,\n                                         userName, userPhone, userEmail, new TokenAuthResponse() {\n                    @Override\n                    public boolean success() {\n                        Log.e("Auth In Bakground","==>> Success ");\n                        return false;\n                    }\n\n                    @Override\n                    public String failure(String errorMsg) {\n                        Log.e("Auth In Bakground","==>> Error: "+errorMsg);\n                        return null;\n                    }\n                }) ;\n')),Object(i.b)("h3",{id:"get-active-sessions"},"Get Active sessions"),Object(i.b)("p",null,"User can get all sessions list those already registered in diyalog SDK. This method will be use for both Domain customer user and staff user."),Object(i.b)("pre",null,Object(i.b)("code",Object(s.a)({parentName:"pre"},{className:"language-sh"}),"ArrayList<AccountVo> sessionList = DiyalogEngine.diyalogInstance().getActiveSessions();\n                \n")),Object(i.b)("p",null,"This method will return list of saved session from sdk.\nIt will contain userInfo as below:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"ApplicationUserID"),Object(i.b)("li",{parentName:"ul"},"AuthID"),Object(i.b)("li",{parentName:"ul"},"UserName"),Object(i.b)("li",{parentName:"ul"},"User Image.")),Object(i.b)("h3",{id:"messaging-from-specific-user"},"Messaging from specific User"),Object(i.b)("p",null,"User can start messaging from specific user. If session already saved into Diyalog SDK then user can start messaging with thier UserID. "),Object(i.b)("pre",null,Object(i.b)("code",Object(s.a)({parentName:"pre"},{className:"language-sh"}),"DiyalogEngine.diyalogInstance().startMessagingWithUserId(context,customerId);\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"context")," - Activity context\n",Object(i.b)("strong",{parentName:"p"},"customerId")," -  domain customer id"),Object(i.b)("p",null,"This method will be use for both Domain customer user and staff user."),Object(i.b)("h1",{id:"new-document"},"New Document"))}u.isMDXComponent=!0}}]);