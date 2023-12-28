(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{156:function(e,r,t){"use strict";t.d(r,"a",(function(){return s})),t.d(r,"b",(function(){return b}));var n=t(0),i=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=i.a.createContext({}),p=function(e){var r=i.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},s=function(e){var r=p(e.components);return i.a.createElement(u.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return i.a.createElement(i.a.Fragment,{},r)}},f=i.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(t),f=n,b=s["".concat(a,".").concat(f)]||s[f]||d[f]||o;return t?i.a.createElement(b,l(l({ref:r},u),{},{components:t})):i.a.createElement(b,l({ref:r},u))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,a=new Array(o);a[0]=f;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var u=2;u<o;u++)a[u]=t[u];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},157:function(e,r,t){"use strict";t.d(r,"b",(function(){return o})),t.d(r,"a",(function(){return a}));var n=t(16),i=t(158);function o(){const{siteConfig:{baseUrl:e="/",url:r}={}}=Object(n.default)();return{withBaseUrl:(t,n)=>function(e,r,t,{forcePrependBaseUrl:n=!1,absolute:o=!1}={}){if(!t)return t;if(t.startsWith("#"))return t;if(Object(i.b)(t))return t;if(n)return r+t;const a=t.startsWith(r)?t:r+t.replace(/^\//,"");return o?e+a:a}(r,e,t,n)}}function a(e,r={}){const{withBaseUrl:t}=o();return t(e,r)}},158:function(e,r,t){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!n(e)}t.d(r,"b",(function(){return n})),t.d(r,"a",(function(){return i}))},99:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return a})),t.d(r,"metadata",(function(){return l})),t.d(r,"Highlight",(function(){return c})),t.d(r,"HighlightWithBlack",(function(){return u})),t.d(r,"ColoredText",(function(){return p})),t.d(r,"CenteredText",(function(){return s})),t.d(r,"GreenColoredText",(function(){return d})),t.d(r,"BlueColoredText",(function(){return f})),t.d(r,"toc",(function(){return b})),t.d(r,"default",(function(){return m}));var n=t(3),i=t(7),o=(t(0),t(156)),a=(t(157),{id:"diyalog-reporting-api-overview",title:"Overview",sidebar_label:"Overview"}),l={unversionedId:"diyalog-reporting-api-overview",id:"diyalog-reporting-api-overview",isDocsHomePage:!1,title:"Overview",description:"<span",source:"@site/../docs/diyalog-reporting-api-overview.md",slug:"/diyalog-reporting-api-overview",permalink:"/docs/diyalog-reporting-api-overview",version:"current",sidebar_label:"Overview",sidebar:"docs",previous:{title:"gettransactionhashforonlinehelp",permalink:"/docs/diyalog-application-api-gettransactionhashforonlinehelp"},next:{title:"getonlinehelplist",permalink:"/docs/diyalog-reporting-api-getonlinehelplist"}},c=function(e){var r=e.children,t=e.color;return Object(o.b)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},r)},u=function(e){var r=e.children,t=e.color;return Object(o.b)("span",{style:{backgroundColor:t,borderRadius:"2px",padding:"0.2rem"}},r)},p=function(e){var r=e.children,t=e.color;return Object(o.b)("span",{style:{color:t}},r)},s=function(e){var r=e.children;return Object(o.b)("span",{style:{align:"center"}},r)},d=function(e){var r=e.children;return Object(o.b)("span",{style:{color:"#42b72a"}},r)},f=function(e){var r=e.children;return Object(o.b)("span",{style:{color:"#1877F2"}},r)},b=[],g={Highlight:c,HighlightWithBlack:u,ColoredText:p,CenteredText:s,GreenColoredText:d,BlueColoredText:f,toc:b};function m(e){var r=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},g,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Diyalog Platformu \xfczerinden yap\u0131lan i\u015flemler ile ilgili baz\u0131 anl\u0131k raporlar verilmektedir. Bu raporlara kendi entegre etti\u011finiz uygulamalar \xfczerinden eri\u015fim sa\u011flayabilirsiniz. Bunun i\xe7in reporting api'leri kullanabilirsiniz."),Object(o.b)("h5",{id:"anl\u0131k-raporlar-i\xe7in-a\u015fa\u011f\u0131daki-apiler-bulunmaktad\u0131r"},"Anl\u0131k raporlar i\xe7in a\u015fa\u011f\u0131daki apiler bulunmaktad\u0131r."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"getonlinehelplist"),Object(o.b)("li",{parentName:"ul"},"getcalllist"),Object(o.b)("li",{parentName:"ul"},"getstaffmessaginglist"),Object(o.b)("li",{parentName:"ul"},"getcustomermessaginglist"),Object(o.b)("li",{parentName:"ul"},"getmessagingdetail")))}m.isMDXComponent=!0}}]);