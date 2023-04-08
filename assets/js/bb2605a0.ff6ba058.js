"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4461],{8570:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var i=n(79);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),f=l,h=u["".concat(s,".").concat(f)]||u[f]||d[f]||r;return n?i.createElement(h,a(a({ref:t},p),{},{components:n})):i.createElement(h,a({ref:t},p))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,a=new Array(r);a[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,a[1]=o;for(var c=2;c<r;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},467:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=n(7626),l=(n(79),n(8570));const r={sidebar_position:6},a="Synchronizing files",o={unversionedId:"sync/files",id:"sync/files",title:"Synchronizing files",description:"When you create files locally, they are flagged as unsynced until you next go online.",source:"@site/docs/sync/files.md",sourceDirName:"sync",slug:"/sync/files",permalink:"/docs/sync/files",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Presence & Profiles",permalink:"/docs/sync/presence"},next:{title:"Advanced: Transports",permalink:"/docs/sync/transports"}},s={},c=[{value:"Storing files",id:"storing-files",level:2},{value:"Exposing a file upload endpoint",id:"exposing-a-file-upload-endpoint",level:2},{value:"When the server cleans up files",id:"when-the-server-cleans-up-files",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"synchronizing-files"},"Synchronizing files"),(0,l.kt)("p",null,"When you create files locally, they are flagged as unsynced until you next go online."),(0,l.kt)("p",null,"When going online, any file data which was unsynced is sent to the the server. If it fails to upload, depending on the response code, a retry will be scheduled later."),(0,l.kt)("p",null,"If you're already online when a local file is created, it will be uploaded ASAP."),(0,l.kt)("p",null,"Meanwhile, in parallel, the normal lo-fi data sync protocol will synchronize any associated field which references that file. This means that peers may receive data about a file field before the client that created it has finished uploading the file itself, and well before that client can proceed to download it."),(0,l.kt)("p",null,"For this reason, you should always handle the ",(0,l.kt)("inlineCode",{parentName:"p"},".loading === true")," case on any EntityFile you use, and probably ",(0,l.kt)("inlineCode",{parentName:"p"},".failed === true")," as well in case the server has problems."),(0,l.kt)("h2",{id:"storing-files"},"Storing files"),(0,l.kt)("p",null,"You must provide a file storage backend to the server to sync files. This can be the default ",(0,l.kt)("inlineCode",{parentName:"p"},"LocalFileStorage")," backend which is exported from ",(0,l.kt)("inlineCode",{parentName:"p"},"@lo-fi/server"),", or you can implement the ",(0,l.kt)("inlineCode",{parentName:"p"},"FileStorage")," interface yourself to connect to a different file storage service (like S3, etc)."),(0,l.kt)("p",null,"If you don't supply a storage backend, syncing files will fail."),(0,l.kt)("h2",{id:"exposing-a-file-upload-endpoint"},"Exposing a file upload endpoint"),(0,l.kt)("p",null,"If you use the built-in lo-fi server (via calling ",(0,l.kt)("inlineCode",{parentName:"p"},"server.listen()"),") the file endpoint will be created for you."),(0,l.kt)("p",null,"If you integrate the lo-fi server into a custom HTTP server, you must route an endpoint to for files to ",(0,l.kt)("inlineCode",{parentName:"p"},"server.handleFileRequest"),". The endpoint must end in ",(0,l.kt)("inlineCode",{parentName:"p"},"/files/<file id>")," and accept both POST and GET. For example, an Express middleware:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"app.use('/lo-fi/files/:fileId', lofiServer.handleFileRequest);\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"TODO: make this friendlier.")),(0,l.kt)("h2",{id:"when-the-server-cleans-up-files"},"When the server cleans up files"),(0,l.kt)("p",null,"The server has a broader view of the overall sync status of the library, so it hangs onto files a little longer than clients and waits to be sure the file is officially pending deletion."),(0,l.kt)("p",null,'"Officially pending deletion" means:'),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The field associated with the file is deleted and all pending operations the server knows about have been applied to it"),(0,l.kt)("li",{parentName:"ul"},"Since the field has been rebased to this state, that means all clients have acknowledged the deletion as it currently stands")),(0,l.kt)("p",null,"However, these conditions don't guarantee the file field will not be restored by a client - specifically if there is an 'undo delete' operation waiting on a client's undo stack."),(0,l.kt)("p",null,"To guard against this contingency, the server only marks the file's metadata as ",(0,l.kt)("inlineCode",{parentName:"p"},"pendingDeleteAt: <timestamp>"),". The next time all replicas disconnect from the library, if the ",(0,l.kt)("inlineCode",{parentName:"p"},"pendingDeleteAt")," timestamp is older than 1 day, the file will be permanently deleted. This is a heuristic more than a guarantee, but it's a reasonable tradeoff against having to synchronize undo stack states."))}d.isMDXComponent=!0}}]);