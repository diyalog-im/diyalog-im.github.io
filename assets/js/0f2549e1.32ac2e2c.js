(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{164:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return h}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var b=i.a.createContext({}),d=function(e){var t=i.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=d(n),p=r,h=s["".concat(o,".").concat(p)]||s[p]||u[p]||a;return n?i.a.createElement(h,l(l({ref:t},b),{},{components:n})):i.a.createElement(h,l({ref:t},b))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var b=2;b<a;b++)o[b]=n[b];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},165:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}));var r=n(16),i=n(166);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.default)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:a=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(r)return t+n;const o=n.startsWith(t)?n:t+n.replace(/^\//,"");return a?e+o:o}(t,e,n,r)}}function o(e,t={}){const{withBaseUrl:n}=a();return n(e,t)}},166:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}))},68:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"Highlight",(function(){return c})),n.d(t,"HighlightWithBlack",(function(){return b})),n.d(t,"HighlightWithRed",(function(){return d})),n.d(t,"ColoredText",(function(){return s})),n.d(t,"CenteredText",(function(){return u})),n.d(t,"GreenColoredText",(function(){return p})),n.d(t,"BlueColoredText",(function(){return h})),n.d(t,"SmallText",(function(){return m})),n.d(t,"toc",(function(){return O})),n.d(t,"default",(function(){return j}));var r=n(3),i=n(7),a=(n(0),n(164)),o=(n(165),{id:"diyalog-application-api-interactionisnotdelivered",title:"interactionisnotdelivered",sidebar_label:"interactionisnotdelivered"}),l={unversionedId:"diyalog-application-api-interactionisnotdelivered",id:"diyalog-application-api-interactionisnotdelivered",isDocsHomePage:!1,title:"interactionisnotdelivered",description:"<span",source:"@site/../docs/diyalog-application-api-finishonlinehelp.md",slug:"/diyalog-application-api-interactionisnotdelivered",permalink:"/docs/diyalog-application-api-interactionisnotdelivered",version:"current",sidebar_label:"interactionisnotdelivered",sidebar:"docs",previous:{title:"gettransactionhashforonlinehelp",permalink:"/docs/diyalog-application-api-gettransactionhashforonlinehelp"},next:{title:"finishonlinehelp",permalink:"/docs/diyalog-application-api-finishonlinehelp"}},c=function(e){var t=e.children,n=e.color;return Object(a.b)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},b=function(e){var t=e.children,n=e.color;return Object(a.b)("span",{style:{backgroundColor:n,borderRadius:"2px",padding:"0.2rem"}},t)},d=function(e){var t=e.children,n=e.color;return Object(a.b)("span",{style:{color:"#d60b0b",backgroundColor:n,borderRadius:"2px",padding:"0.2rem"}},t)},s=function(e){var t=e.children,n=e.color;return Object(a.b)("span",{style:{color:n}},t)},u=function(e){var t=e.children;return Object(a.b)("span",{style:{align:"center"}},t)},p=function(e){var t=e.children;return Object(a.b)("span",{style:{color:"#42b72a"}},t)},h=function(e){var t=e.children;return Object(a.b)("span",{style:{color:"#1877F2"}},t)},m=function(e){var t=e.children;return Object(a.b)("span",{style:{fontSize:"smaller"}},t)},O=[{value:"<BlueColoredText>POST</BlueColoredText> v1/application/interactionisnotdelivered",id:"post-v1applicationinteractionisnotdelivered",children:[]},{value:"Request Body",id:"request-body",children:[]},{value:"Responses",id:"responses",children:[]}],f={Highlight:c,HighlightWithBlack:b,HighlightWithRed:d,ColoredText:s,CenteredText:u,GreenColoredText:p,BlueColoredText:h,SmallText:m,toc:O};function j(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},f,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"post-v1applicationinteractionisnotdelivered"},Object(a.b)(h,{mdxType:"BlueColoredText"},"POST")," v1/application/interactionisnotdelivered"),Object(a.b)("p",null,"An interaction may have been created in your queue system for live help or a call, but for some reason this interaction may not have been assigned to any agent. In such cases, you can use this API to prevent customers from waiting on the waiting screen. The Dialogue system allows the customer in waiting status to exit the waiting screen."),Object(a.b)("p",null,"API requests"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Must be authenticated with HMAC Authentication. For HMAC Authentication, see the ",Object(a.b)("a",{parentName:"li",href:"dialog-api-authentication.md"},"Authentication")," document."),Object(a.b)("li",{parentName:"ul"},"API URI : ",Object(a.b)(d,{color:"#f2f2f2",mdxType:"HighlightWithRed"},"https://DIYALOG-SERVER-API-ENDPOINT/v1/application/interactionisnotdelivered")),Object(a.b)("li",{parentName:"ul"},"HTTP Request Type ",Object(a.b)(d,{color:"#f2f2f2",mdxType:"HighlightWithRed"},"POST")),Object(a.b)("li",{parentName:"ul"},"HTTP Content-Type ",Object(a.b)(d,{color:"#f2f2f2",mdxType:"HighlightWithRed"},"application/json"))),Object(a.b)("h3",{id:"request-body"},"Request Body"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:"left"},"Schema"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:"left"},Object(a.b)(p,{mdxType:"GreenColoredText"},"json object"))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:"left"},Object(a.b)(m,{mdxType:"SmallText"},Object(a.b)(h,{mdxType:"BlueColoredText"},"interactionId")," ",Object(a.b)(p,{mdxType:"GreenColoredText"},"(String)")," ",Object(a.b)("br",null),"Optional. ",Object(a.b)("br",null),"It is the id information of the interaction that cannot be transmitted to any agent. This value is optional. If it is not provided, sessionId information should be provided to API."))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:"left"},Object(a.b)(m,{mdxType:"SmallText"},Object(a.b)(h,{mdxType:"BlueColoredText"},"sessionId")," ",Object(a.b)(p,{mdxType:"GreenColoredText"},"(String)")," ",Object(a.b)("br",null),"Optional. ",Object(a.b)("br",null),"This information is the sessionId information that Diyalog sends to you when creating the interaction. Diyalog will reach the relevant customer using this information and end the customer's wait. If the interaction id information is provided to the API, the interaction id will be used first instead of this session id."))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:"left"},Object(a.b)(m,{mdxType:"SmallText"},Object(a.b)(h,{mdxType:"BlueColoredText"},"message")," ",Object(a.b)(p,{mdxType:"GreenColoredText"},"(String)")," ",Object(a.b)("br",null),"Opsiyoneldir. ",Object(a.b)("br",null),"You can provide detailed information in this field about why the Interaction could not be forwarded to any agent. This field will be forwarded to the mobile application. You can use it as a message to be shown to the customer."))))),Object(a.b)("h4",{id:"\xf6rnek-json-request-body-"},"\xd6rnek Json Request Body :"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'{\n    "interactionId" : "123456",\n    "sessionId" : "123121212121",\n    "message" : "I can\'t help you right now. Please try again later."\n}\n')),Object(a.b)("p",null,"Note: If you give the interaction id information to the API, the API will not use the session id information. Therefore, it is sufficient to pass either the interaction id or session id information to the API."),Object(a.b)("h3",{id:"responses"},"Responses"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:"left"},Object(a.b)(h,{mdxType:"BlueColoredText"},"HTTP 200 Response")))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:"left"},Object(a.b)(p,{mdxType:"GreenColoredText"},"json object")," ",Object(a.b)("br",null)," ",Object(a.b)(m,{mdxType:"SmallText"},"The API returns a json object as a response. You can get detailed information about the API result from this answer."))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:"left"},"\xa0","\xa0","\xa0","\xa0","\xa0",Object(a.b)(m,{mdxType:"SmallText"},Object(a.b)(h,{mdxType:"BlueColoredText"},"isSuccess")," ",Object(a.b)(p,{mdxType:"GreenColoredText"},"(boolean)")," ",Object(a.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0"," this field returns information about whether the API was successful or not.",Object(a.b)("br",null)," ","\xa0","\xa0","\xa0","\xa0","\xa0"," True indicates that the API is running successfully and processing your request ",Object(a.b)("br",null)," ","\xa0","\xa0","\xa0","\xa0","\xa0"," False indicates that an error occurred. "))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:"left"},"\xa0","\xa0","\xa0","\xa0","\xa0",Object(a.b)(m,{mdxType:"SmallText"},Object(a.b)(h,{mdxType:"BlueColoredText"},"message")," ",Object(a.b)(p,{mdxType:"GreenColoredText"},"(string)")," ",Object(a.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","An information message is returned regarding the result of the operation."))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:"left"},"\xa0","\xa0","\xa0","\xa0","\xa0",Object(a.b)(m,{mdxType:"SmallText"},Object(a.b)(h,{mdxType:"BlueColoredText"},"errorCode")," ",Object(a.b)(p,{mdxType:"GreenColoredText"},"(int)")," ",Object(a.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","Optional. ",Object(a.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0"," Error code of the result. It s optional. If isSucces return true, this field will not return.",Object(a.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0"," Return Codes : ",Object(a.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","400 : No interactionId or seesionId is found in your request. Should be provide one of them.",Object(a.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","402 : No customer is waiting in a given interaction id. The customer should not be waiting to connect.",Object(a.b)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","403 :Customer is waiting for differrent intereaction. The customer might cancel this interaction and start another."))))),Object(a.b)("h4",{id:"\xf6rnek-response-body-"},"\xd6rnek Response Body :"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'{\n    "isSuccess": true,\n    "message": "Customer waiting will be stopped."\n}\n')),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:"left"},Object(a.b)(d,{mdxType:"HighlightWithRed"},"HTTP 500 Response")))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:"left"},Object(a.b)(p,{mdxType:"GreenColoredText"},"string")," ",Object(a.b)("br",null)," ",Object(a.b)(m,{mdxType:"SmallText"},"When the API receives an exception, it will return a response with the HTTP 500 status code. The API's error message is returned as text."))))),Object(a.b)("h4",{id:"if-the-api-request-receives-an-error-during-hmac-validation-the-following-error-codes-are-returned"},"If the API request receives an error during HMAC validation, the following error codes are returned."),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:null},"Http Status Code"),Object(a.b)("th",{parentName:"tr",align:null},"Mesaj"),Object(a.b)("th",{parentName:"tr",align:null},"A\xe7\u0131klama"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)(d,{mdxType:"HighlightWithRed"},"400")),Object(a.b)("td",{parentName:"tr",align:null},"Required headers not found"),Object(a.b)("td",{parentName:"tr",align:null},"One or more of the Date, X-Requester-UserId, or X-Authorization header fields are missing.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)(d,{mdxType:"HighlightWithRed"},"400")),Object(a.b)("td",{parentName:"tr",align:null},"Authorization failed due to data format not valid"),Object(a.b)("td",{parentName:"tr",align:null},'The information in the X-Authorization header field is not in the correct format. Check that the field starts with "DLGA" and includes : between the accesKeyId and signature values.')),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)(d,{mdxType:"HighlightWithRed"},"400")),Object(a.b)("td",{parentName:"tr",align:null},"Authorization failed due to date not valid"),Object(a.b)("td",{parentName:"tr",align:null},'X-DLG-DATE date format is not "EEE, dd MMM yyyy HH:mm:ss Z".')),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)(d,{mdxType:"HighlightWithRed"},"401")),Object(a.b)("td",{parentName:"tr",align:null},"Authorization failed"),Object(a.b)("td",{parentName:"tr",align:null},"The request could not be verified. The signature value is not correct.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)(d,{mdxType:"HighlightWithRed"},"403")),Object(a.b)("td",{parentName:"tr",align:null},"Request time may not be correct."),Object(a.b)("td",{parentName:"tr",align:null},"There is a difference of more than +/- 15 minutes between the x-dlg-date in the request header and the server time.")))))}j.isMDXComponent=!0}}]);