(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{149:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var i=n(0),r=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r.a.createContext({}),u=function(e){var t=r.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},g=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=u(n),g=i,b=p["".concat(o,".").concat(g)]||p[g]||s[g]||a;return n?r.a.createElement(b,l(l({ref:t},d),{},{components:n})):r.a.createElement(b,l({ref:t},d))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<a;d++)o[d]=n[d];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},69:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"Highlight",(function(){return d})),n.d(t,"HighlightWithBlack",(function(){return u})),n.d(t,"HighlightWithRed",(function(){return p})),n.d(t,"ColoredText",(function(){return s})),n.d(t,"CenteredText",(function(){return g})),n.d(t,"GreenColoredText",(function(){return b})),n.d(t,"BlueColoredText",(function(){return h})),n.d(t,"default",(function(){return O}));var i=n(3),r=n(7),a=(n(0),n(149)),o={id:"ios_configuration",title:"Configure your SDK",sidebar_label:"Configuration"},l={unversionedId:"ios_configuration",id:"ios_configuration",isDocsHomePage:!1,title:"Configure your SDK",description:"<span",source:"@site/../docs/ios_configuration_params.md",slug:"/ios_configuration",permalink:"/docs/ios_configuration",version:"current",sidebar_label:"Configuration",sidebar:"docs",previous:{title:"How to use Diyalog IOS SDK",permalink:"/docs/iOS_getting_started"},next:{title:"Style your SDK",permalink:"/docs/iOS_style"}},c=[{value:'<HighlightWithRed color="#f9f2f4">* Server EndPoint</HighlightWithRed>',id:"-server-endpoint",children:[]},{value:'<HighlightWithRed color="#f9f2f4">* API App Id and API App Key</HighlightWithRed>',id:"-api-app-id-and-api-app-key",children:[]},{value:'<HighlightWithRed color="#f9f2f4">Trusted Keys</HighlightWithRed>',id:"trusted-keys",children:[]},{value:'<HighlightWithRed color="#f9f2f4">App Name</HighlightWithRed>',id:"app-name",children:[]},{value:'<HighlightWithRed color="#f9f2f4">Application language</HighlightWithRed>',id:"application-language",children:[]},{value:'<HighlightWithRed color="#f9f2f4">Push Id</HighlightWithRed>',id:"push-id",children:[]},{value:'<HighlightWithRed color="#f9f2f4">Call enabled</HighlightWithRed>',id:"call-enabled",children:[]},{value:'<HighlightWithRed color="#f9f2f4">Back button enabled</HighlightWithRed>',id:"back-button-enabled",children:[]},{value:'<HighlightWithRed color="#f9f2f4">Supported file type to share</HighlightWithRed>',id:"supported-file-type-to-share",children:[]}],d=function(e){var t=e.children,n=e.color;return Object(a.b)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},u=function(e){var t=e.children,n=e.color;return Object(a.b)("span",{style:{backgroundColor:n,borderRadius:"2px",padding:"0.2rem"}},t)},p=function(e){var t=e.children,n=e.color;return Object(a.b)("span",{style:{color:"#d60b0b",backgroundColor:n,borderRadius:"2px",padding:"0.2rem"}},t)},s=function(e){var t=e.children,n=e.color;return Object(a.b)("span",{style:{color:n}},t)},g=function(e){var t=e.children;return Object(a.b)("span",{style:{align:"center"}},t)},b=function(e){var t=e.children;return Object(a.b)("span",{style:{color:"#42b72a"}},t)},h=function(e){var t=e.children;return Object(a.b)("span",{style:{color:"#1877F2"}},t)},f={toc:c,Highlight:d,HighlightWithBlack:u,HighlightWithRed:p,ColoredText:s,CenteredText:g,GreenColoredText:b,BlueColoredText:h};function O(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},f,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"There are many configuration parameters on Diyalog. You can see the detailed information about the parameters.",Object(a.b)("br",{parentName:"p"}),"\n","Settings with asteriks",Object(a.b)("strong",{parentName:"p"},"*")," are required configuration to run the sdk."),Object(a.b)("h3",{id:"-server-endpoint"},Object(a.b)(p,{color:"#f9f2f4",mdxType:"HighlightWithRed"},"* Server EndPoint")),Object(a.b)("p",null,"Your Diyalog server address that app will communicate"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},'DiyalogEngine.diyalogInstance().endpoints = ["wss://<YOUR_DIYALOG_SERVER_ENDPOINT_ADDRESS>"]\n')),Object(a.b)("h3",{id:"-api-app-id-and-api-app-key"},Object(a.b)(p,{color:"#f9f2f4",mdxType:"HighlightWithRed"},"* API App Id and API App Key")),Object(a.b)("p",null,"They are used for authenticating application on server. "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},'DiyalogEngine.diyalogInstance().apiId = <YOUR_APP_API_ID>\nDiyalogEngine.diyalogInstance().apiKey = "<YOUR_APP_API_KEY>"\n')),Object(a.b)("h3",{id:"trusted-keys"},Object(a.b)(p,{color:"#f9f2f4",mdxType:"HighlightWithRed"},"Trusted Keys")),Object(a.b)("p",null,"These are the trusted public keys created on your Diyalog Server. These will use in creation session keys between clients and server."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},'DiyalogEngine.diyalogInstance().trustedKeys = [\n    "<YOUR_DIYALOG_ENVIRONMENT_PUBLIC_KEY_1>",\n    "<YOUR_DIYALOG_ENVIRONMENT_PUBLIC_KEY_2>",\n    "<YOUR_DIYALOG_ENVIRONMENT_PUBLIC_KEY_3>",\n    "<YOUR_DIYALOG_ENVIRONMENT_PUBLIC_KEY_4>",\n    "<YOUR_DIYALOG_ENVIRONMENT_PUBLIC_KEY_5>",\n    "<YOUR_DIYALOG_ENVIRONMENT_PUBLIC_KEY_6>"\n]\n')),Object(a.b)("h3",{id:"app-name"},Object(a.b)(p,{color:"#f9f2f4",mdxType:"HighlightWithRed"},"App Name")),Object(a.b)("p",null,'Your application name. This will be used in some screens in Diyalog SDK. If it is not set. "Diyalog" name will appear some screen instead of your app name.'),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},'DiyalogEngine.diyalogInstance().setappName("<YOUR_APP_NAME>")\n')),Object(a.b)("h3",{id:"application-language"},Object(a.b)(p,{color:"#f9f2f4",mdxType:"HighlightWithRed"},"Application language")),Object(a.b)("p",null,"You can change sdk language whenever by setting this."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"DiyalogEngine.diyalogInstance().setLocalizationLanguage(.turkish)\n")),Object(a.b)("h3",{id:"push-id"},Object(a.b)(p,{color:"#f9f2f4",mdxType:"HighlightWithRed"},"Push Id")),Object(a.b)("p",null,"If you enable notification. You should set your push id that is given by server administrator."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"DiyalogEngine.diyalogInstance().apiPushId = 111111\n")),Object(a.b)("h3",{id:"call-enabled"},Object(a.b)(p,{color:"#f9f2f4",mdxType:"HighlightWithRed"},"Call enabled")),Object(a.b)("p",null,"This flag will enabled voice and video calls. Default is false."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"DiyalogEngine.diyalogInstance().setenableCalls(true)\n")),Object(a.b)("h3",{id:"back-button-enabled"},Object(a.b)(p,{color:"#f9f2f4",mdxType:"HighlightWithRed"},"Back button enabled")),Object(a.b)("p",null,"This flag will enabled back button on DiyalogSDK and user can return to your app after use Diyalog. Default is false."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"DiyalogEngine.diyalogInstance().setisSupportBackButton(true)\n")),Object(a.b)("h3",{id:"supported-file-type-to-share"},Object(a.b)(p,{color:"#f9f2f4",mdxType:"HighlightWithRed"},"Supported file type to share")),Object(a.b)("p",null,"You can set file types that user can share.  "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"DiyalogEngine.diyalogInstance().fileSupport = [.music, .picture, .doc, .spreadsheet, .video, .presentation, .pdf, .csv]\n")))}O.isMDXComponent=!0}}]);