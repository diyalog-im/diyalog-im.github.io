(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{149:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),s=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=s(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(t),f=r,b=p["".concat(c,".").concat(f)]||p[f]||d[f]||i;return t?o.a.createElement(b,a(a({ref:n},l),{},{components:t})):o.a.createElement(b,a({ref:n},l))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,c=new Array(i);c[0]=f;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var l=2;l<i;l++)c[l]=t[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},150:function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"a",(function(){return c}));var r=t(16),o=t(151);function i(){const{siteConfig:{baseUrl:e="/",url:n}={}}=Object(r.default)();return{withBaseUrl:(t,r)=>function(e,n,t,{forcePrependBaseUrl:r=!1,absolute:i=!1}={}){if(!t)return t;if(t.startsWith("#"))return t;if(Object(o.b)(t))return t;if(r)return n+t;const c=t.startsWith(n)?t:n+t.replace(/^\//,"");return i?e+c:c}(n,e,t,r)}}function c(e,n={}){const{withBaseUrl:t}=i();return t(e,n)}},151:function(e,n,t){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}t.d(n,"b",(function(){return r})),t.d(n,"a",(function(){return o}))},93:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return a})),t.d(n,"Highlight",(function(){return u})),t.d(n,"HighlightWithBlack",(function(){return l})),t.d(n,"HighlightWithRed",(function(){return s})),t.d(n,"ColoredText",(function(){return p})),t.d(n,"CenteredText",(function(){return d})),t.d(n,"GreenColoredText",(function(){return f})),t.d(n,"BlueColoredText",(function(){return b})),t.d(n,"toc",(function(){return h})),t.d(n,"default",(function(){return O}));var r=t(3),o=t(7),i=(t(0),t(149)),c=(t(150),{id:"ios_online_help",title:"Starting Online Help",sidebar_label:"Online Help"}),a={unversionedId:"ios_online_help",id:"ios_online_help",isDocsHomePage:!1,title:"Starting Online Help",description:"<span",source:"@site/../docs/ios_online_help.md",slug:"/ios_online_help",permalink:"/docs/ios_online_help",version:"current",sidebar_label:"Online Help",sidebar:"docs",previous:{title:"Starting Video Help",permalink:"/docs/ios_video_help"},next:{title:"Token Base Authentication",permalink:"/docs/iOS_TokenBaseAuthentication"}},u=function(e){var n=e.children,t=e.color;return Object(i.b)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},n)},l=function(e){var n=e.children,t=e.color;return Object(i.b)("span",{style:{backgroundColor:t,borderRadius:"2px",padding:"0.2rem"}},n)},s=function(e){var n=e.children,t=e.color;return Object(i.b)("span",{style:{color:"#d60b0b",backgroundColor:t,borderRadius:"2px",padding:"0.2rem"}},n)},p=function(e){var n=e.children,t=e.color;return Object(i.b)("span",{style:{color:t}},n)},d=function(e){var n=e.children;return Object(i.b)("span",{style:{align:"center"}},n)},f=function(e){var n=e.children;return Object(i.b)("span",{style:{color:"#42b72a"}},n)},b=function(e){var n=e.children;return Object(i.b)("span",{style:{color:"#1877F2"}},n)},h=[],g={Highlight:u,HighlightWithBlack:l,HighlightWithRed:s,ColoredText:p,CenteredText:d,GreenColoredText:f,BlueColoredText:b,toc:h};function O(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},g,t,{components:n,mdxType:"MDXLayout"}))}O.isMDXComponent=!0}}]);