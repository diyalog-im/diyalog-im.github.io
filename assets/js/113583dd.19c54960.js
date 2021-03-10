(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{136:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return y}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),u=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=u(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},g=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=u(t),g=r,y=s["".concat(i,".").concat(g)]||s[g]||b[g]||o;return t?a.a.createElement(y,l(l({ref:n},c),{},{components:t})):a.a.createElement(y,l({ref:n},c))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=g;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},67:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return u}));var r=t(3),a=t(7),o=(t(0),t(136)),i={id:"diyalogWeb_OpenInDiyalogSDKAngularJSApp",title:"How to Use Diyalog Web SDK from My AngularJS Web App",sidebar_label:"Use Web SDK from AngularJS Web App"},l={unversionedId:"tr/diyalogWeb_OpenInDiyalogSDKAngularJSApp",id:"tr/diyalogWeb_OpenInDiyalogSDKAngularJSApp",isDocsHomePage:!1,title:"How to Use Diyalog Web SDK from My AngularJS Web App",description:"You can find the steps on how to configure Diyalog ReactJs component in Angular application component. Besides you can find example Angular application code that use Diyalog SDK in the diyalog-angular-integration-example",source:"@site/../docs/tr/diyalogWeb_OpenInDiyalogSDKAngularJSApp.md",slug:"/tr/diyalogWeb_OpenInDiyalogSDKAngularJSApp",permalink:"/docs/tr/diyalogWeb_OpenInDiyalogSDKAngularJSApp",version:"current",sidebar_label:"Use Web SDK from AngularJS Web App"},p=[],c={toc:p};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"You can find the steps on how to configure Diyalog ReactJs component in Angular application component. Besides you can find example Angular application code that use Diyalog SDK in the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/diyalog-im/diyalog-platform/tree/master/diyalog-web-sdk/OpenInDiyalogSDKAngularJSApp/diyalog-angular-integration-example"},"diyalog-angular-integration-example")),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Create one sample application in angular 5 or you can use existing angular application.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Now copy below two script in index.html (root folder)"))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},'    <script src="http://devweb.diyalog.im/app/app_conf.js"><\/script>\u2028\n    <script src="http://devweb.diyalog.im/app/app.js"><\/script>    \n')),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"Also copy below html tag in any component where you want to use reactJs component in angular application.")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},'    <div id="diyalog-app" class="fill"></div>\n')),Object(o.b)("p",null,"   Above html tag will also work as you described in below image where you have other component in left menu."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},'Also you will require to copy "assets" folder(in which you have fonts, images, sound files) at root level where index.html file is present. ')))}u.isMDXComponent=!0}}]);