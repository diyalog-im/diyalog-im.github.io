(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{142:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return i})),a.d(t,"Highlight",(function(){return c})),a.d(t,"HighlightWithBlack",(function(){return d})),a.d(t,"HighlightWithRed",(function(){return s})),a.d(t,"ColoredText",(function(){return u})),a.d(t,"CenteredText",(function(){return b})),a.d(t,"GreenColoredText",(function(){return p})),a.d(t,"BlueColoredText",(function(){return m})),a.d(t,"SmallText",(function(){return h})),a.d(t,"toc",(function(){return g})),a.d(t,"default",(function(){return f}));var n=a(3),r=a(7),o=(a(0),a(152)),l=(a(153),{id:"android_video_help",title:"Starting Video Help",sidebar_label:"Video Help"}),i={unversionedId:"android_video_help",id:"android_video_help",isDocsHomePage:!1,title:"Starting Video Help",description:"<span",source:"@site/../docs/android_video_help.md",slug:"/android_video_help",permalink:"/docs/android_video_help",version:"current",sidebar_label:"Video Help",sidebar:"docs",previous:{title:"Notifications",permalink:"/docs/android_notification_configuration"},next:{title:"Starting Online Help",permalink:"/docs/android_online_help"}},c=function(e){var t=e.children,a=e.color;return Object(o.b)("span",{style:{backgroundColor:a,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},d=function(e){var t=e.children,a=e.color;return Object(o.b)("span",{style:{backgroundColor:a,borderRadius:"2px",padding:"0.2rem"}},t)},s=function(e){var t=e.children,a=e.color;return Object(o.b)("span",{style:{color:"#d60b0b",backgroundColor:a,borderRadius:"2px",padding:"0.2rem"}},t)},u=function(e){var t=e.children,a=e.color;return Object(o.b)("span",{style:{color:a}},t)},b=function(e){var t=e.children;return Object(o.b)("span",{style:{align:"center"}},t)},p=function(e){var t=e.children;return Object(o.b)("span",{style:{color:"#42b72a"}},t)},m=function(e){var t=e.children;return Object(o.b)("span",{style:{color:"#1877F2"}},t)},h=function(e){var t=e.children;return Object(o.b)("span",{style:{fontSize:"smaller"}},t)},g=[],O={Highlight:c,HighlightWithBlack:d,HighlightWithRed:s,ColoredText:u,CenteredText:b,GreenColoredText:p,BlueColoredText:m,SmallText:h,toc:g};function f(e){var t=e.components,l=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},O,l,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Diyalog Platform offers live assistance to your customers through your mobile application with video calls. "),Object(o.b)("p",null,"You can download full simple video call android project from ",Object(o.b)("a",{parentName:"p",href:"https://diyalog.im/app/pkgs/demoapps/SimpleVideoCall.zip"},"SimpleVideoCall")," link.  "),Object(o.b)("p",null,"First of all, you need to know the flow about video call help in Diyalog platform for anonymous users. Anonymous user means you can connect logged in or not logged in user with your representatives."),Object(o.b)("p",null,"The flow is like below :"),Object(o.b)("p",null,Object(o.b)("img",{src:a(212).default})),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Your app calls the DiyalogSDK ",Object(o.b)("strong",{parentName:"li"},"startVideoCallWithAttachedDataInBackground")," method. "),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"startVideoCallWithAttachedDataInBackground")," connects Diyalog Server and server will add your video call request to  your representative queue then return to sdk about the result."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"startVideoCallWithAttachedDataInBackground")," works asyncronously and result of the method call will return to your app in a callback method."),Object(o.b)("li",{parentName:"ol"},"If inserting queue successfull then DiyalogSDK waits in background without showing any screen in your mobile app until a representative connecting . Therefore, you should show your wait screen thaht showing a representative will connect soon."),Object(o.b)("li",{parentName:"ol"},"If any represenatative connecting, DiyalogSDK will automatically starts video call and come into foreground. "),Object(o.b)("li",{parentName:"ol"},"After you retrun succecsfull result from ",Object(o.b)("strong",{parentName:"li"},"startVideoCallWithAttachedDataInBackground")," function, You can follow all stages of the video call by subscribing CallState in DiyalogSDK. So, you should subscribe to CallState by calling ",Object(o.b)("strong",{parentName:"li"},"subscribeToCallStateWithTxCodeEvent")," in DiyalogSDK.")),Object(o.b)("p",null,"According to your business needs, a video call can be started at the relevant stage of your application as follows. When the following method is called, the DiyalogSDK in the background will transmit the call request to the call center over the server, and it will be waiting in the background until a representative from the call center initiates the call. During this process, the standby screen should be displayed in your mobile application. Customers who are tired of waiting should be allowed to cancel the transaction by adding a cancellation option to the waiting screen."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"public void startVideoCallWithAttachedDataInBackground(Activity context,\n                                                        Long idNumber,\n                                                        String customerId,\n                                                        String customerName,\n                                                        Long customerPhone,\n                                                        String txCode,\n                                                        ArrayList<AttachedData> attachedDataList,\n                                                        VideoCallResult videoCallResult)\n")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},"Parameters"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)(h,{mdxType:"SmallText"},Object(o.b)(m,{mdxType:"BlueColoredText"},"context")," ",Object(o.b)(p,{mdxType:"GreenColoredText"},"(Activity)")," ",Object(o.b)("br",null)," Activity that this method called from."))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)(h,{mdxType:"SmallText"},Object(o.b)(m,{mdxType:"BlueColoredText"},"idNumber")," ",Object(o.b)(p,{mdxType:"GreenColoredText"},"(Long)")," ",Object(o.b)("br",null),"National ID number of the customer."))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)(h,{mdxType:"SmallText"},Object(o.b)(m,{mdxType:"BlueColoredText"},"customerId")," ",Object(o.b)(p,{mdxType:"GreenColoredText"},"(String)")," Customer id number. This can be real or candidate customer id."))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)(h,{mdxType:"SmallText"},Object(o.b)(m,{mdxType:"BlueColoredText"},"customerName")," ",Object(o.b)(p,{mdxType:"GreenColoredText"},"(String)")," Name of the customer."))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)(h,{mdxType:"SmallText"},Object(o.b)(m,{mdxType:"BlueColoredText"},"customerPhone")," ",Object(o.b)(p,{mdxType:"GreenColoredText"},"(Long)")," ",Object(o.b)("br",null),"Opsiyoneldir. ",Object(o.b)("br",null),"Phone number of the customer. This paramater is optional. It can be set null."))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)(h,{mdxType:"SmallText"},Object(o.b)(m,{mdxType:"BlueColoredText"},"txCode")," ",Object(o.b)(p,{mdxType:"GreenColoredText"},"(String)")," This field is a parameter used only in the mobile client. The main application can distinguish the callState events of the its video calls in from other call.  CallState events related to the conversation status are returned to the main application with this txcode parameter. It is in no way migrated to the server or agent application."))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)(h,{mdxType:"SmallText"},Object(o.b)(m,{mdxType:"BlueColoredText"},"attachedData")," ",Object(o.b)(p,{mdxType:"GreenColoredText"},"(ArrayList of AttachedData)")," ",Object(o.b)("br",null),"Opsiyoneldir. ",Object(o.b)("br",null),"With this parameter, you can send the data you want to the agent application. The Diyalog server transmits the data in the key-value array in this parameter to the Agent application. The data transmitted in this area is not stored on the Diyalog servers, only transmitted."))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)(h,{mdxType:"SmallText"},Object(o.b)(m,{mdxType:"BlueColoredText"},"videoCallResult")," ",Object(o.b)(p,{mdxType:"GreenColoredText"},"(VideoCallResult)")," ",Object(o.b)("strong",{parentName:"td"},"startVideoCallWithAttachedDataInBackground")," method is an asynchronous method and sends the result (information that the call request has been started) to your application with this callback method."))))),Object(o.b)("p",null,"You can find the detail about VideoCallResult class"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},'public interface VideoCallResult {\n      void success();\n      void failure(VideoCallError videoCallError);\n}\n\npublic class VideoCallError {\n  \n      public static final String IDNUMBER_SHOULD_BE_PASSED = "DLGEXCPINP_IDNUMBER";\n      public static final String CUSTOMERID_SHOULD_BE_PASSED = "DLGEXCPINP_CUSTOMER_ID";\n      public static final String EXCEPTION_IN_AUTH_REQUEST = "DLGEXCP_AUTH_REQUEST";\n  \n      private String errorCode;\n      private String errorMsg;\n  \n      public VideoCallError(String errorCode, String errorMsg) {\n          this.errorCode = errorCode;\n          this.errorMsg = errorMsg;\n      }\n  \n      public String getErrorCode() {\n          return errorCode;\n      }\n      public String getErrorMsg() {\n          return errorMsg;\n      }\n}\n')),Object(o.b)("p",null,"You can use ",Object(o.b)("strong",{parentName:"p"},"startVideoCallWithAttachedDataInBackground")," method as shown in below code. First of all, you need to create an ArrayList that takes the data you want to pass in AttachedData class."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},'import im.diyalog.core.AttachedData;            \n..\n\nArrayList<AttachedData> attachedData = new ArrayList<AttachedData>();\nattachedData.add(new AttachedData("dataName1","dataValue1"));\nattachedData.add(new AttachedData("dataName2","dataValue2"));\nattachedData.add(new AttachedData("dataName3","dataValue3"));\nattachedData.add(new AttachedData("dataName4","dataValue4"));\n')),Object(o.b)("p",null,"Then you need to pass this data in the attachedDataList parameter of the startVideoCallWithAttachedDataInBackground method."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"public void startVideoCallWithAttachedDataInBackground(Activity context,\n                                                    Long idNumber,\n                                                    String customerId,\n                                                    String customerName,\n                                                    Long customerPhone,\n                                                    String txCode,\n                                                    ArrayList<AttachedData> attachedDataList,\n                                                    VideoCallResult videoCallResult)\n")),Object(o.b)("p",null,"If you get success as a ",Object(o.b)("strong",{parentName:"p"},"videoCallResult")," from the ",Object(o.b)("strong",{parentName:"p"},"startVideoCallWithAttachedDataInBackground")," method, you need to subscribe to the event mechanism where you can follow the status of the call."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"public void subscribeToCallStateWithTxCodeEvent(\n  ValueChangedListener<CallStateEvent> listener\n)\n\npublic class CallStateEvent {\n    private String state;\n    private String txCode;\n\n    public CallStateEvent(String state, String txCode) {\n        this.state = state;\n        this.txCode = txCode;\n    }\n\n    public String getState() {\n        return state;\n    }\n\n    public String getTxCode() {\n        return txCode;\n    }\n}\n")),Object(o.b)("p",null,"CallStates that can receive from DiyalogSDK after subscribe as follows:"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"}," ",Object(o.b)("strong",{parentName:"p"},'"RINGING"'),"                : Phone is calling\n",Object(o.b)("strong",{parentName:"p"},'"CONNECTING"'),"              : Call accepted by both peers and Webrtc session is creating.\n",Object(o.b)("strong",{parentName:"p"},'"IN_PROGRESS"'),"             : Call in progress\n",Object(o.b)("strong",{parentName:"p"},'"ENDED"'),"                   : Call ended.",Object(o.b)("br",{parentName:"p"}),"\n","",Object(o.b)("strong",{parentName:"p"},'"NO_CALL"'),"                 : Initial state. No call active.",Object(o.b)("br",{parentName:"p"}),"\n","",Object(o.b)("strong",{parentName:"p"},'"CALL_ACTIVITY_DESTROYED"')," : DiyalogSDK Call Activity completely destroyed. This event is only for android sdk. ")),Object(o.b)("p",null,"After call completed and your logic finished for video help, you should unsubscribe from CallState event bu using following method.a\u015fa\u011f\u0131daki metod ile unsubscribe olabilirsiniz."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"public void unSubscribeToCallStateWithTxCodeEvent(ValueChangedListener<String> listener)\n")),Object(o.b)("p",null,"You can see complete code sample that you need to implement below. You should show wait screen after getting ",Object(o.b)("strong",{parentName:"p"},"success")," from ",Object(o.b)("strong",{parentName:"p"},"VideoCallResult")," callback. If you receive ",Object(o.b)("strong",{parentName:"p"},"failure"),", there is an error in the system and you should show error screen to customer."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},'ArrayList<AttachedData> attachedData = new ArrayList<AttachedData>();\n    attachedData.add(new AttachedData("dataName1","dataValue1"));\n    attachedData.add(new AttachedData("dataName2","dataValue2"));\n    attachedData.add(new AttachedData("dataName3","dataValue3"));\n    attachedData.add(new AttachedData("dataName4","dataValue4"));\n                            \nDiyalogEngine.diyalogInstance().startVideoCallWithAttachedDataInBackground(\n      this,\n      Long.parseLong(idenNo),\n      "<Customer_No>",\n      "<Customer_NAME>",\n      null,\n      "<Tx_Code",\n      attachedData,\n      new VideoCallResult() {\n        @Override\n        public void success() {\n\n        DiyalogEngine.diyalogInstance().subscribeToCallStateWithTxCodeEvent(\n            new ValueChangedListener<CallStateEvent>() {\n            @Override\n            public void onChanged(CallStateEvent val, Value<CallStateEvent> valueModel) {\n                Log.d("VIDEOCALL",\n                  "CALL STATE CHANGED TO " + \n                  val.getState() + \n                  " for txCode " + \n                  val.getTxCode());\n                \n                //RINGING, CONNECTING, IN_PROGRESS, ENDED, NO_CALL, CALL_ACTIVITY_DESTROYED\n                if (val.equals("CALL_ACTIVITY_DESTROYED")){\n                  // Show customer creation result to user\n                }\n                else if (val.equals("IN_PROGRESS")){\n                }\n                ..\n\n            }\n        });\n\n        // SHOW YOUR WAIT SCREEN\n      }\n    \n      @Override\n      public void failure(VideoCallError videoCallError) {\n\n          Log.e(\n          "VIDEO CALL CENTER",\n          "Video call failed. Failure Code :" + \n          videoCallError.getErrorCode() + \n          " Failure Message :" + \n          videoCallError.getErrorMsg());\n\n    // Show Call failed message to user\n      }\n});\n')),Object(o.b)("p",null,"If ",Object(o.b)("strong",{parentName:"p"},"startVideoCallWithAttachedDataInBackground")," method return successfull and you showed wait screen to customer and the customer press cancel button in your wait screen before agent start video call, you should call ",Object(o.b)("strong",{parentName:"p"},"stopVideoCall")," method to stop process"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"public boolean stopVideoCall(String customerId)\n")),Object(o.b)("p",null,"Sample code  "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"DiyalogEngine.diyalogInstance().stopVideoCall(customerId);\n")),Object(o.b)("p",null,"Done :)  "),Object(o.b)("p",null,"You can download full simple video call android project from ",Object(o.b)("a",{parentName:"p",href:"https://diyalog.im/app/pkgs/demoapps/SimpleVideoCall.zip"},"SimpleVideoCall")," link."))}f.isMDXComponent=!0},152:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=r.a.createContext({}),s=function(e){var t=r.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(a),p=n,m=u["".concat(l,".").concat(p)]||u[p]||b[p]||o;return a?r.a.createElement(m,i(i({ref:t},d),{},{components:a})):r.a.createElement(m,i({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var d=2;d<o;d++)l[d]=a[d];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},153:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return l}));var n=a(16),r=a(154);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(n.default)();return{withBaseUrl:(a,n)=>function(e,t,a,{forcePrependBaseUrl:n=!1,absolute:o=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(n)return t+a;const l=a.startsWith(t)?a:t+a.replace(/^\//,"");return o?e+l:l}(t,e,a,n)}}function l(e,t={}){const{withBaseUrl:a}=o();return a(e,t)}},154:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))},212:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/video_help_flow-af3b0e18b96ca5a82070239e2114674e.png"}}]);