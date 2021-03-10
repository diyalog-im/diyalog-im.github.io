(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{127:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return d}));var r=a(3),n=a(7),o=(a(0),a(136)),i={id:"getstarted",title:"Getting Started",sidebar_label:"Getting Started"},s={unversionedId:"tr/getstarted",id:"tr/getstarted",isDocsHomePage:!1,title:"Getting Started",description:"Diyalog server has following parts:",source:"@site/../docs/tr/getstarted.md",slug:"/tr/getstarted",permalink:"/docs/tr/getstarted",version:"current",sidebar_label:"Getting Started"},l=[{value:"Diyalog server has following parts:",id:"diyalog-server-has-following-parts",children:[]},{value:"Integration",id:"integration",children:[]},{value:"DevOps Documentation",id:"devops-documentation",children:[]},{value:"Server Installation",id:"server-installation",children:[]}],c={toc:l};function d(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"diyalog-server-has-following-parts"},"Diyalog server has following parts:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"diyalog-server"),"  : "),Object(o.b)("p",{parentName:"li"},"Server application of the platform. It is developed by Scala Akka.io technology and it needs Linux/Windows server and Open/Oracle JDK1.8+. ")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"diyalog-database")," :"),Object(o.b)("p",{parentName:"li"},"Diyalog Platform is using Oracle 12c+/Postgresql9.4+ database servers to record data.\n")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"diyalog-keygenerator")," : "),Object(o.b)("p",{parentName:"li"},"It is simple keygenerator application written with Java. It is used only one time to generate secure server keys that need to run server securely.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"diyalog-masterbot")," :  "),Object(o.b)("p",{parentName:"li"},"It is masterbot application which is responsible for the creation of new bots. Only admin users can see masterbot user in your contact list to create new bot credentials. MasterBot can be run when you need to create new bot for security reasons. But it is not necessary to do this.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"diyalog-webapp")," :"),Object(o.b)("p",{parentName:"li"},"This is web application client web server. It serves for downloading web client single page application files by users' browsers. ")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"diyalog-turnserver")," :"),Object(o.b)("p",{parentName:"li"},"Diyalog Platform has voice and video calls features. Diyalog doing them by using WebRTC library. To enable this you need to install or use TURN/STUN servers onpremise or in cloud in order to resolve clients ip addresses in NAT."))),Object(o.b)("p",null,"Diyalog clients are :"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"../diyalogWebSdk/WebSdk.md"},"Web SDK")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"../iOS/iOS.md"},"iOS SDK")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"../Android/doc_getting_started.md"},"Android SDK")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"../cordovaPlugin/HowToUseCordova.md"},"Ionic / Cordova Plugin"))),Object(o.b)("h2",{id:"integration"},"Integration"),Object(o.b)("p",null,"Diyalog support phone and email or both authorisation by default. SDK give you a UI for this type of authorisation. Only needing is "),Object(o.b)("h2",{id:"devops-documentation"},"DevOps Documentation"),Object(o.b)("p",null,"Welcome to devops documentatation. You can find how you can install Diyalog Platform server from Diyalog docker images."),Object(o.b)("p",null,"Installation procedure should be following order."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Starting database server for running application."),Object(o.b)("p",{parentName:"li"},"You can use Oracle or Postgresql server for Diyalog Platform. If you are using Postgresql database server you can use Posgres official docker images with the following command."),Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"For Postgres Database Server")),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"docker run --name=diyalog-db -e PASSWORD=<your postgresql password> -e POSTGRES_USER=diyalog -e POSTGRES_DB=diyalog -p 5432:5432 -v <volume for db data>:/var/lib/postgresql/data -d postgres:9.6\n")),Object(o.b)("p",{parentName:"li"},"You can find more information on ",Object(o.b)("a",{parentName:"p",href:"https://hub.docker.com/_/postgres/"},"postgres official docker repository")),Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"For Oracle Database Server")),Object(o.b)("p",{parentName:"li"},"There is not any docker official docker image for Oracle database server. You should install your database server and create schema and cridentials."),Object(o.b)("p",{parentName:"li"},Object(o.b)("em",{parentName:"p"},"It is important to note that, database PASSWORD, USER, and DB or SCHEMA information will be used on diyalog-server application jdbc configuration setting."))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Generating the trusted server keys"),Object(o.b)("p",{parentName:"li"},"diyalog-keygenerator docker image should be used to generate secure keys for Diyalog server and clients."),Object(o.b)("p",{parentName:"li"},"Following command will start the diyalog-keygenerator docker container and automatically generate key-files, public trusted keys for clients and secret key for diyalog server. These outputs are important for running diyalog-server application docker image. Therefore output should be saved or noted."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"docker run -it -v <volume for created keys>:/generatedkeys diyalog/diyalog-keygenerator:1.0.0\n")),Object(o.b)("p",{parentName:"li"},"Out put of the docker container will be like following:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"    ---------------------------------------------------------------------\n| Trusted public key that will be used on clients are :             |\n|                                                                   |\n| b6e78e0295d984beb2328529cbdf2a310ea50c20df39a87303d907a7688c8620  |\n| 4990d9f5515adda853d85e0a0789222dd9df8f7d2c92a7fc2e991dfde4b4094a  |\n| f599890af2007dca8f1d603f5027d1e440d91c7b1a72529e8a9e310ad90e190e  |\n| e95a1dcc3ae3e131fee232e0a5af3d9e303b8b2aa2903eb82cf55acf8108377a  |\n| 17f0554d6fe47f50d3c7904057bfa53944311f6c5c6ad72399687360deb8662c  |\n| 8191cba8fb746aeacf8fe708eb90b4c2967da9941572a31ca16e7327f69dba08  |\n|                                                                   |\n| You can find this keys on keys/trustedKeys file                   |\n---------------------------------------------------------------------\nAll server keys created and copiedon keys folder. Please add these files to server configuration.\n\nShared Secret: Z2oLqdIvCuq56GYw8KJ0d/0gVQTLHvlUQWG5tzacQmj3Qej1lNBJ59j/hEljJ/N+P7OEUCACfrSyuGLR1MMATw==\n\nThis shared secret should be set in server configuration or add to env vars when running docker image og diyalog-server\n")),Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Server key files")," created by this diyalog-keygenerator. 6 key pairs are created and copied to ",Object(o.b)("strong",{parentName:"p"},"/generatedkeys")," folder in container. Therefore, a volume can mount to this folder to copy them for using in server."),Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Trusted public keys")," will be used on ios and android clients. So, they should be shared with mobile development team to run Diyalog mobile SDK with these keys. This public keys are also stored in the trustedKeys/publickeys file on volume."),Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Shared Secret")," is another important data to securing your server. This is a random string and this will be used for creating some hash and other secure data. ",Object(o.b)("strong",{parentName:"p"},"When a server runs with this secret, this secret should not be changed due to backward compatibility."))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Running Diyalog-Server"),Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"diyalog-server")," docker image should be used for running diyalog-server. The following setting can be add to you docker run command as environment variable to change setting in the server. "),Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"For Securing Server :")),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"    SERVER_SECRET : Shared secret. Shared secret that was created in step 2 (Keygeneration step) should be set to this variable\n    \n")))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'**For Oracle DB configuration :**\n\n        SERVER_DB_HOST          : Database server hostname. Default value is localhost\n        SERVER_DB_PORT          : Database server port. Default value is 1521\n        DB_NAME                 : Database name. Default value is orcl\n        DB_USER                 : Database username.  Default value is diyalog\n        DB_PASSWORD             : Database user pasword. Default value is password\n        SLICK_ORACLE_SCHEMANAME : Database shemaname. Default is DIYALOG\n\n**For Postgres DB configuration :**\n\n        SERVER_DB_HOST          : Database server hostname. Default value is postgres\n        SERVER_DB_PORT          : Database server port. Default value is 5432\n        DB_NAME                 : Database name. Default value is postgres\n        DB_USER                 : Database username.  Default value is postgres\n        DB_PASSWORD             : Database user pasword. Default value is password\n        \n**Email config for sending OTP via Email :**\n        \n        EMAIL_SENDER_ADDRESS : Sender address of email. Default value is empty.\n        EMAIL_SENDER_NAME    : Sender name of email. Default value is Diyalog.\n        SMTP_HOST            : SMTP server host name. Default is empty.\n        SMTP_PORT            : SMTP server port number. Default value is 465\n        SMTP_USERNAME        : SMTP server username. Default is empty.\n        SMTP_PASSWORD        : SMTP server user password. Default is empty.\n        SMTP_TLS             : SMTP server tls flag. Default value is true.\n        \n**Storage Settings :**\n\n        FILE_STORAGE_ADAPTER : It is used for configuration of storage adapter.\n                                    Default value is im.diyalog.server.file.local.LocalFileStorageAdapter \n                                    i.e. local file storage. If you want to use amazon S3 storage this \n                                    value should be set to im.diyalog.server.file.s3\n\n        For local file storage following env variable should be set,\n            FILESTORAGE_LOCATION : This is the directory name that server store files on it. \n                                        Default local file storage is /var/lib/diyalog/files\n            \n        For S3 adapter following env variables should be set,\n            AWS_S3_APIKEY     : Your Amazon S3 API key\n            AWS_S3_APISECRET  : Your Amazon S3 API Secret\n            AWS_S3_BUCKETNAME : Your Amazon S3 bucket name. Default value is bucket_diyalog\n            AWS_S3_ENDPOINT   : This variable is used for S3 API compatible storage rather than Amazon S3.\n\n**Google Messaging Service Settings :**\n\n        //TODO: This will be documented later.\n\n**Apple Push Notification Service Settings :**\n\n        //TODO: This will be documented later.\n        \n**TURN/STUN server settings :**\n\n        ICE_SERVER_TCP_URL  : TCP url for TURN/STUN server. Default value is turn:localhost:3478?transport=tcp\n        ICE_SERVER_UDP_URL  : UDP url for TURN/STUN server. Default value is turn:localhost:3478?transport=udp\n        ICE_SERVER_USERNAME : Tcp TURN/STUN server user name. Default value is diyalog\n        ICE_SERVER_PASSWORD : Tcp TURN/STUN server user password. Default value is password\n\n**Cluster Settings :**\n\n    This settings are for akka clustering. \n\n        PUBLISH_HOST : netty.tcp.hostname configuration of akka remoting. \n                          External (logical) hostname (the host to advertise on)\n        PUBLISH_PORT : netty.tcp.port configuration of akka remoting. \n                          External (logical) port (the port to advertise on)\n        BIND_HOST    : netty.tcp.bind-hostname configuration of akka remoting.\n                            Internal (bind) hostname\n        BIND_PORT    : netty.tcp.bind-port configuration of akka remoting.\n                            Internal (bind) port\n                            \n\nYou can find example of docker run command with minimal env variable setting below. In docker image server application search key files in /var/lib/diyalog/keys folder. Therefore, server key files created in step 1 should be shared with a volume mount to this folder.\n\n**for oracle**\n\n    docker run \\\n         --name=diyalog-server \\\n         -e "SERVER_DB_HOST=<Your database server host name>" \\\n         -e "DB_NAME=<Your database name>" \\\n         -e "DB_USER=<Your database user>" \\\n         -e "DB_PASSWORD=<Your database user password>" \\\n         -v <docker volume for file storage>:/var/lib/diyalog/files \\\n         -v <docker volume for generated server keys>:/var/lib/diyalog/keys \\\n         -p 4857:4857 \\\n         -p 4858:4858 \\\n         -p 4859:4859 \\\n         -d \\\n         diyalog/server-orcl:1.0.3\n         \n**for postgres**\n\n    docker run \\\n         --name=diyalog-server \\\n         --link diyalog-db:diyalog\n         -v <docker volume for file storage>:/var/lib/diyalog/files \\\n         -v <docker volume for generated server keys>:/var/lib/diyalog/keys \\\n         -p 4857:4857 \\\n         -p 4858:4858 \\\n         -p 4859:4859 \\\n         -d \\\n         diyalog/server-orcl:1.0.3\n         \n\nAfter running Diyalog server. You can add a proxy server in front of it for SSL offloading, load balance and directing the connection. Haproxy is recomended for it. You can use following DNS names notation and backend port configuration.\n\n**DNS and Backend Conf**\n\n| Record Name  | DNS Name (sample)  | Default Port |  Description |\n| ------------ | -----------------  | ------------ | -------------  |\n| web          | web.domain.com     | 3000 | Web client application endpoint.             |\n| ws           | ws.domain.com      | 4858 | Websocket port of Diyalog server for clients.|\n| tcp          | tcp.domain.com     | 4857 | Tcp port of Diyalog server for mobile apps.  |\n| api          | api.domain.com     | 4859 | Http api endpoint. This endpoint is also support bots. |\n    \n')),Object(o.b)("ol",{start:4},Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Starting MasterBot app to be able to create and manage credentials of new bot applications."),Object(o.b)("p",{parentName:"li"},"There is a possibility to create new bot applications for the Diyalog platform. There is a diyalog-bots-platform library. You can use this library to create new bot application which can communicate with diyalog-server. MasterBot is a bot application. Its main purpose is to create and manage newly developed bot applications. "),Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"diyalog-masterbot")," docker image should be used for running diyalog masterbot. You can start MasterBot docker image with following command. Since Masterbot app will connect to Diyalog-server when started, diyalog-server should be started first."),Object(o.b)("p",{parentName:"li"},"For starting Masterbot app you need to set some environment variables. You can find the details about them below."),Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"MasterBot Settings")),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},'BOT_ENDPOINT : Diyalog server "api" endpoint adress. Diyalog server is waiting \n                  websocket connection from bot applications at port 4859 as default.\n                  This port shou\n')),Object(o.b)("p",{parentName:"li"},"for starting docker image:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},'docker run \\\n    --name=diyalog-masterbot \\\n    -e "BOT_ENDPOINT=ws://<Diyalog Server api endpoint>" \\\n    -e "BOT_USERNAME=<Username which created in Diyalog platform for Masterbot>" \\\n    -e "BOT_TOKEN=<Token which created in Diyalog platform for Masterbot>" \\\n    -d \\\n    diyalog-masterbot:1.0.0\n')))),Object(o.b)("ol",{start:5},Object(o.b)("li",{parentName:"ol"})),Object(o.b)("h2",{id:"server-installation"},"Server Installation"))}d.isMDXComponent=!0},136:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=n.a.createContext({}),d=function(e){var t=n.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=d(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(a),u=r,m=p["".concat(i,".").concat(u)]||p[u]||b[u]||o;return a?n.a.createElement(m,s(s({ref:t},c),{},{components:a})):n.a.createElement(m,s({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);