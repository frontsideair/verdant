"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6295],{8570:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(79);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6467:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=n(7626),r=(n(79),n(8570));const a={sidebar_position:5},i="React",s={unversionedId:"react",id:"react",title:"React",description:"lo-fi has React hooks generation. To enable it, pass --react to the CLI. A new module react.js will be emitted in the output directory. It exports one function, createHooks. Call it to construct hooks for your lo-fi storage.",source:"@site/docs/react.md",sourceDirName:".",slug:"/react",permalink:"/docs/react",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Advanced: Transports",permalink:"/docs/sync/transports"},next:{title:"React Router",permalink:"/docs/react-router"}},l={},c=[{value:"Context",id:"context",level:2},{value:"Suspense",id:"suspense",level:2},{value:"Typing of presence",id:"typing-of-presence",level:2},{value:"Custom mutation hooks",id:"custom-mutation-hooks",level:2},{value:"Usage examples",id:"usage-examples",level:2},{value:"Basic",id:"basic",level:3},{value:"Advanced: changing client libraries",id:"advanced-changing-client-libraries",level:3}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"react"},"React"),(0,r.kt)("p",null,"lo-fi has React hooks generation. To enable it, pass ",(0,r.kt)("inlineCode",{parentName:"p"},"--react")," to the ",(0,r.kt)("a",{parentName:"p",href:"./local-storage/generate-client"},"CLI"),". A new module ",(0,r.kt)("inlineCode",{parentName:"p"},"react.js")," will be emitted in the output directory. It exports one function, ",(0,r.kt)("inlineCode",{parentName:"p"},"createHooks"),". Call it to construct hooks for your lo-fi storage."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { ClientDescriptor, ServerSync } from './client/index.js';\nimport { createHooks } from './client/react.js';\nimport migrations from './migrations.js';\n\nconst clientDesc = new ClientDescriptor({\n    namespace: 'todos',\n    migrations,\n    sync: {\n        authEndpoint: 'https://your.server/auth/lofi',\n        initialPresence: {\n            emoji: '',\n        },\n    },\n});\n\n// export your generated hooks\nexport const hooks = createHooks();\n")),(0,r.kt)("p",null,"It will generate named hooks based on each document collection, plus a few utility hooks. For example, if you have the collection ",(0,r.kt)("inlineCode",{parentName:"p"},"todoItems"),", you will get these hooks:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"useAllTodoItems"),": pass an index query to filter the list of returned items."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"useOneTodoItem"),": pass an index query to filter the list of returned items, and only take the first match."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"useTodoItem"),": Retrieves one document. You pass in an id."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"useWatch"),': pass a "live document" to this and the component will update when that document changes. An unfortunate necessity of the WIP reactive object approach.'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"useSelf"),": returns your own presence."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"usePeerIds"),": returns an array of string user IDs of peers. Good for iterating over peers to render them."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"usePeer"),": pass a peer's user ID to retrieve their presence."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"useSyncStatus"),": returns a boolean indicating whether sync is active or not.")),(0,r.kt)("h2",{id:"context"},"Context"),(0,r.kt)("p",null,"In addition to the generated hooks you also get a ",(0,r.kt)("inlineCode",{parentName:"p"},"Provider"),". Pass your ",(0,r.kt)("inlineCode",{parentName:"p"},"ClientDescriptor")," instance to ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," to provide a client for your hooks to use."),(0,r.kt)("p",null,"By using a Context in this way, you can instantiate different clients for the same schema and change the library your app is interacting with. See the advanced usage below."),(0,r.kt)("h2",{id:"suspense"},"Suspense"),(0,r.kt)("p",null,"The hooks use Suspense so that you don't have to write loading state conditional code in your components. All hooks return data directly. If the data is not ready, they suspend."),(0,r.kt)("p",null,"Wrap your app in a ",(0,r.kt)("inlineCode",{parentName:"p"},"<Suspense>")," to handle this. You can create multiple layers of Suspense to handle loading more granularly."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"hooks.Provider")," component has a Suspense boundary built-in as a final fallback, to prevent state loss further up the tree when loading. You can customize the fallback rendering by passing a ",(0,r.kt)("inlineCode",{parentName:"p"},"suspenseFallback")," prop to ",(0,r.kt)("inlineCode",{parentName:"p"},"hooks.Provider"),"."),(0,r.kt)("h2",{id:"typing-of-presence"},"Typing of presence"),(0,r.kt)("p",null,"By default, create hooks have ",(0,r.kt)("inlineCode",{parentName:"p"},"any")," types for all presence values. To synchronize presence typings with your main client, provide the same Presence and Profile typings for both:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export interface Presence {\n    emoji: string;\n}\n\nexport interface Profile {\n    // any data you may have put in profiles on the server\n}\n\nconst clientDesc = new ClientDescriptor<Presence, Profile>({\n    // ...\n});\n\n// for React support, also pass the typing arguments to createHooks\nexport const hooks = createHooks<Presence, Profile>();\n")),(0,r.kt)("h2",{id:"custom-mutation-hooks"},"Custom mutation hooks"),(0,r.kt)("p",null,"To create reusable hooks which utilize the client, you can chain ",(0,r.kt)("inlineCode",{parentName:"p"},".withMutations")," from the created hooks object and add your own custom hooks which take ",(0,r.kt)("inlineCode",{parentName:"p"},"client")," as a first parameter."),(0,r.kt)("p",null,"This can help encapsulate custom behaviors, instead of ad-hoc calling ",(0,r.kt)("inlineCode",{parentName:"p"},"useClient()")," and re-implementing them in multiple components."),(0,r.kt)("p",null,"Of course, you could do this in your own code; this is purely for convenience."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const hooks = createHooks<Presence, Profile>().withMutations({\n    useAddItem: (client) => {\n        return useCallback(\n            async (init: ItemInit) => {\n                const item = await client.items.put(init, { undoable: false });\n                analytics.reportItemCreated(item);\n                return item;\n            },\n            [client],\n        );\n    },\n});\n")),(0,r.kt)("h2",{id:"usage-examples"},"Usage examples"),(0,r.kt)("h3",{id:"basic"},"Basic"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"function Todos() {\n    const items = hooks.useAllTodoItems({\n        index: {\n            where: 'indexableDone',\n            equals: 'false',\n        },\n    });\n\n    return (\n        <ul>\n            {items.map((item) => (\n                <li key={item.get('id')}>{item.get('content')}</li>\n            ))}\n        </ul>\n    );\n}\n\nfunction App() {\n    return (\n        <hooks.Provider value={clientDescriptor}>\n            <Todos />\n        </hooks.Provider>\n    );\n}\n")),(0,r.kt)("h3",{id:"advanced-changing-client-libraries"},"Advanced: changing client libraries"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"function Todos() {\n    const items = hooks.useAllTodoItems({\n        index: {\n            where: 'indexableDone',\n            equals: 'false',\n        },\n    });\n\n    return (\n        <ul>\n            {items.map((item) => (\n                <li key={item.get('id')}>{item.get('content')}</li>\n            ))}\n        </ul>\n    );\n}\n\nfunction App({ libraryId }: { libraryId: string }) {\n    /**\n     * When the libraryId prop changes, we create a new client\n     * which authenticates against that library. The auth endpoint\n     * here would need to read that query parameter and create\n     * a token for the client to access the library.\n     */\n    const descriptor = useMemo(\n        () =>\n            new ClientDescriptor({\n                namespace: libraryId,\n                migrations,\n                sync: {\n                    authEndpoint: `http://localhost:3001/auth/lofi?library=${libraryId}`,\n                    initialPresence: {},\n                    // start sync when ready - useful if you want to sync\n                    // in this setup. if you don't want to sync, that's fine too!\n                    autoStart: true,\n                },\n            }),\n        [libraryId],\n    );\n\n    useEffect(() => {\n        // when the client changes, shut it down.\n        return () => {\n            descriptor.close();\n        };\n    }, [descriptor]);\n\n    return (\n        <hooks.Provider value={clientDescriptor}>\n            <Todos />\n        </hooks.Provider>\n    );\n}\n")))}u.isMDXComponent=!0}}]);