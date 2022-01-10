(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{103:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return u}));var r=t(3),a=t(7),o=(t(0),t(149)),s={id:"android_tokenBaseAuth",title:"Token Base Authentication",sidebar_label:"Token Base Authentication"},i={unversionedId:"android_tokenBaseAuth",id:"android_tokenBaseAuth",isDocsHomePage:!1,title:"Token Base Authentication",description:"Token base auth is system that customer can register into Diyalog sdk with their application User Info, and can chat between thier application user.",source:"@site/../docs/android_tokenBaseAuth.md",slug:"/android_tokenBaseAuth",permalink:"/docs/android_tokenBaseAuth",version:"current",sidebar_label:"Token Base Authentication",sidebar:"docs",previous:{title:"Starting Online Help",permalink:"/docs/android_online_help"},next:{title:"How to use Diyalog IOS SDK",permalink:"/docs/iOS_getting_started"}},l=[{value:"Domain Customer User",id:"domain-customer-user",children:[]},{value:"Domain Staff User",id:"domain-staff-user",children:[]},{value:"Get Active sessions",id:"get-active-sessions",children:[]},{value:"Messaging from specific User",id:"messaging-from-specific-user",children:[]},{value:"Delete session of user",id:"delete-session-of-user",children:[]},{value:"Get total unread count into main application.",id:"get-total-unread-count-into-main-application",children:[]}],c={toc:l};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Token base auth is system that customer can register into Diyalog sdk with their application User Info, and can chat between thier application user. "),Object(o.b)("p",null,"With DiyalogSDK User can register in forground mode as well as background mode. Before authentication user need to init DiyalogSDK as below."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"   DiyalogEngine.diyalogInstance().Initialize(getApplicationContext());\n   DiyalogEngine.diyalogInstance().waitForReady();\n")),Object(o.b)("h2",{id:"domain-customer-user"},"Domain Customer User"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"a. Foreground method")),Object(o.b)("p",null,"For customer user registration client need to call below method with necessary information. After successfully register on server it will create session in Diyalog SDK and can start messaging. Using below method if user already created session in Diyalog SDK, then it will directly open that session and user can start messaging."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"}," DiyalogEngine.diyalogInstance().startTokenAuth(context,dlgToken,deviceId,\n                               customerId,customerName, customerPhone, customerEmail); \n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"context")," - Activity context"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"dlgToken")," - Main application server will return Diyalog Token when user will login into main application\n",Object(o.b)("strong",{parentName:"p"},"DeviceId")," - domain specific device id. this is for domain validation"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"CustId")," - domain customer id"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"CustName")," - customer name"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"CustPhone")," -  customer phone number (Optional)"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"CustEmail")," \u2013 customer email address (Optional)"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"b. Background method")),Object(o.b)("p",null,"When customer user will call background method then it will be register on server and after successfully register, it will create session into sdk.\nAnd when user will click on Diyalog chat icon from main application to open sdk, it will directly open that session. user does not wait for register.\nAnd In background method if there is any failure then it will pass error message into failure callback."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},' DiyalogEngine.diyalogInstance().startTokenAuthInBackground(context,dlgToken,deviceId,\n                               customerId,customerName, customerPhone, customerEmail, new TokenAuthResponse() {\n                    @Override\n                    public void success() {\n                        Log.e("Auth In Bakground","==>> Success ");\n                       \n                    }\n\n                    @Override\n                    public void failure(TokenAuthError tokenAuthError) {\n                        Log.e("Auth In Bakground", "==>> Error Message: " + tokenAuthError.getErrorMsg());\n                        Log.e("Auth In Bakground", "==>> Error Code: "+  tokenAuthError.getErrorCode());\n                    }\n                }) ;\n')),Object(o.b)("h2",{id:"domain-staff-user"},"Domain Staff User"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"a. Foreground method")),Object(o.b)("p",null,"For staff user registration client need to call below method with necessary information. After successfully register on server it will create session in Diyalog SDK and can start messaging. Using below method if user already created session in Diyalog SDK, then it will directly open that session and user can start messaging."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"   DiyalogEngine.diyalogInstance().startDomainUserTokenAuth( context,  dlgToken,   sessionId,\n                                         userId,\n                                         userName,\n                                         userPhone,\n                                         userEmail);\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"context")," - Activity context"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"dlgToken")," - Main application server will return Diyalog Token when user will login into main application"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"sessionId")," \u2013 Staff user's sessionId"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"userId")," - Staff user's UserID"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"UserName")," - Staff user's UserName"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"userPhone"),"  - Staff user's PhoneNumber(Optional)"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"userEmail")," - Staff user's EmailID (Optional)"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"b. Background method"),"\nWhen staff user will call background method then it will be register on server and after successfully register, it will create session into sdk.\nAnd when user will click on Diyalog chat icon from main application to open sdk, it will directly open that session. user does not wait for register.\nAnd In background method if there is any failure then it will pass error message into failure callback."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},' DiyalogEngine.diyalogInstance().startDomainUserTokenAuthInBackground(context,  dlgToken,   sessionId, userId,\n                                         userName, userPhone, userEmail, new TokenAuthResponse() {\n                    @Override\n                    public void success() {\n                        Log.e("Auth In Bakground","==>> Success ");\n                       \n                    }\n\n                    @Override\n                    public void failure(TokenAuthError tokenAuthError) {\n                        Log.e("Auth In Bakground", "==>> Error Message: " + tokenAuthError.getErrorMsg());\n                        Log.e("Auth In Bakground", "==>> Error Code: "+  tokenAuthError.getErrorCode());\n                    }\n                }) ;\n')),Object(o.b)("h2",{id:"get-active-sessions"},"Get Active sessions"),Object(o.b)("p",null,"User can get all sessions list those already registered in diyalog SDK. This method will be use for both Domain customer user and staff user."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"ArrayList<AccountVo> sessionList = DiyalogEngine.diyalogInstance().getActiveSessions();\n")),Object(o.b)("p",null,"This method will return list of saved session from sdk.\nIt will contain userInfo as below:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"ApplicationUserID"),Object(o.b)("li",{parentName:"ul"},"AuthID"),Object(o.b)("li",{parentName:"ul"},"UserName"),Object(o.b)("li",{parentName:"ul"},"User Image."),Object(o.b)("li",{parentName:"ul"},"User is active or not"),Object(o.b)("li",{parentName:"ul"},"Unread message count")),Object(o.b)("h2",{id:"messaging-from-specific-user"},"Messaging from specific User"),Object(o.b)("p",null,"User can start messaging from specific user. If session already saved into Diyalog SDK then user can start messaging with thier UserID. "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"DiyalogEngine.diyalogInstance().startMessagingWithUserId(context,customerId);\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"context")," - Activity context"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"customerId")," -  domain customer id"),Object(o.b)("p",null,"This method will be use for both Domain customer user and staff user."),Object(o.b)("h2",{id:"delete-session-of-user"},"Delete session of user"),Object(o.b)("p",null,"Client can delete session of diyalog sdk for any user."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"boolean isDelted = DiyalogEngine.diyalogInstance().deleteSessionOfUser(customerId); \n")),Object(o.b)("h2",{id:"get-total-unread-count-into-main-application"},"Get total unread count into main application."),Object(o.b)("p",null,"Client can get total no of unread message count into main application, so they can set unread badge count into main application. Client need to subscribe unread count event as below:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"}," DiyalogEngine.diyalogInstance().subscribeToTotalUnreadCountEvent(new ValueChangedListener<Integer>() {\n                    @Override\n                    public void onChanged(Integer val, Value<Integer> valueModel) {\n                        unreadCount.setText(String.valueOf(val));  // unreadCount is textview for display unread message count.\n                    }\n                });\n\n")))}u.isMDXComponent=!0},149:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return g}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),u=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=u(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},p=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(t),p=r,g=d["".concat(s,".").concat(p)]||d[p]||b[p]||o;return t?a.a.createElement(g,i(i({ref:n},c),{},{components:t})):a.a.createElement(g,i({ref:n},c))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=p;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=t[c];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);