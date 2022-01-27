"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8839],{167:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(3289);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,k=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2815:function(e,t,n){var a=n(3289);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},3154:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(3289),r=n(2957),o=n(2238),i="tabItem_dJL3",s="tabItemActive_WCWk";var l=37,p=39;var c=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,u=e.values,m=e.groupId,d=e.className,k=(0,r.Z)(),f=k.tabGroupChoices,v=k.setTabGroupChoices,h=(0,a.useState)(c),g=h[0],b=h[1],y=a.Children.toArray(e.children),w=[];if(null!=m){var N=f[m];null!=N&&N!==g&&u.some((function(e){return e.value===N}))&&b(N)}var x=function(e){var t=e.currentTarget,n=w.indexOf(t),a=u[n].value;b(a),null!=m&&(v(m,a),setTimeout((function(){var e,n,a,r,o,i,l,p;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,o=e.right,i=window,l=i.innerHeight,p=i.innerWidth,n>=0&&o<=p&&r<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},C=function(e){var t,n;switch(e.keyCode){case p:var a=w.indexOf(e.target)+1;n=w[a]||w[0];break;case l:var r=w.indexOf(e.target)-1;n=w[r]||w[w.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},d)},u.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,o.Z)("tabs__item",i,{"tabs__item--active":g===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:C,onFocus:x,onClick:x},n)}))),t?(0,a.cloneElement)(y.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},1215:function(e,t,n){var a=(0,n(3289).createContext)(void 0);t.Z=a},2957:function(e,t,n){var a=n(3289),r=n(1215);t.Z=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},2038:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var a=n(753),r=n(1242),o=(n(3289),n(167)),i=n(3154),s=n(2815),l=["components"],p={sidebar_position:1,tags:["Development","Packages","Tokens","Intro"]},c={unversionedId:"development/packages/tokens/intro",id:"development/packages/tokens/intro",isDocsHomePage:!1,title:"Intro",description:"This is unreleased documentation for TVA tokens package.",source:"@site/docs/development/packages/tokens/intro.md",sourceDirName:"development/packages/tokens",slug:"/development/packages/tokens/intro",permalink:"/tva/docs/development/packages/tokens/intro",editUrl:"https://github.com/pluralsight/tva/edit/main/website/docs/development/packages/tokens/intro.md",version:"current",lastUpdatedBy:"Casey Baggz",sidebarPosition:1,frontMatter:{sidebar_position:1,tags:["Development","Packages","Tokens","Intro"]},sidebar:"development",previous:{title:"Migration",permalink:"/tva/docs/development/getting-started/migration"},next:{title:"Core",permalink:"/tva/docs/development/packages/tokens/core"}},u=[{value:"npm",id:"npm",children:[]},{value:"What is a token?",id:"what-is-a-token",children:[]},{value:"Naming convention",id:"naming-convention",children:[]},{value:"Usage",id:"usage",children:[{value:"Web",id:"web",children:[]},{value:"Mobile",id:"mobile",children:[]}]}],m={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This is ",(0,o.kt)("strong",{parentName:"p"},"unreleased")," documentation for TVA ",(0,o.kt)("strong",{parentName:"p"},"tokens")," package."))),(0,o.kt)("h4",{id:"learn-how-to-use-tva-tokens-for-any-project-or-os-platform"},"Learn how to use TVA tokens for any project or OS platform."),(0,o.kt)("h2",{id:"npm"},"npm"),(0,o.kt)("p",null,"To use tokens via the web, just install the npm package."),(0,o.kt)(i.Z,{defaultValue:"npm",groupId:"npm2yarn",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @pluralsight/tva-tokens\n"))),(0,o.kt)(s.Z,{value:"yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @pluralsight/tva-tokens\n")))),(0,o.kt)("h2",{id:"what-is-a-token"},"What is a token?"),(0,o.kt)("p",null,'A "token" is a word used to define a style property for any platform. So, instead of having to specify CSS variable, iOS/Swift style, Android style variable, etc. We can just say "token" which refers to the style variables of any platform.'),(0,o.kt)("h2",{id:"naming-convention"},"Naming convention"),(0,o.kt)("p",null,"In order to make our tokens scalable and easier to consume, we use the same naming convention created by the Asana team."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# "usage" is the only property required\n\nps-[sentiment?]-[usage]-[prominence?]-[interaction?]\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Sentiment"),' - "default", "neutral", "success", "warning", "danger", "selected"'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Usage"),' - "background", "text", "icon", "border", "size"'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Prominence"),' - "default", "weak", "medium", "strong", or clothing size shorthand'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Interaction"),' - "default", "hover", "active", "focus", "disabled"')),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},'Values marked "default" can be ignored since the field is optional.'))),(0,o.kt)("p",null,"What this looks like in terms of an actual token can be seen in an example for something that may apply to a Button:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="Button example - not actual properties"',title:'"Button',example:!0,"-":!0,not:!0,actual:!0,'properties"':!0},":root {\n  --ps-selected-background: #123456;\n  --ps-selected-background-hover: #123456;\n}\n")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"tokens")," package is the single source of truth for all style properties and assets in the design system. This is how we define styles in ",(0,o.kt)("inlineCode",{parentName:"p"},"components")," and why you can just use this package if you need maximum flexibility - or are on a mobile platform."),(0,o.kt)("p",null,"Depending on what platform you are using, will determine what you are able to consume from the ",(0,o.kt)("inlineCode",{parentName:"p"},"tokens")," package."),(0,o.kt)("h3",{id:"web"},"Web"),(0,o.kt)("p",null,"For the web (npm), we will ship ",(0,o.kt)("inlineCode",{parentName:"p"},"css")," properties, ",(0,o.kt)("inlineCode",{parentName:"p"},"scss")," variables, and ",(0,o.kt)("inlineCode",{parentName:"p"},"js")," es6 modules. This way, you can choose whatever syntax works best for your project."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"components")," package will consume the ",(0,o.kt)("inlineCode",{parentName:"p"},"css")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"js")," tokens internally and depending on which function you call (css vs. CSS-in-JS) we will either return the styles being referenced from the tokens, or the tokens themselves (CSS-in-JS only)."),(0,o.kt)("h4",{id:"css"},"CSS"),(0,o.kt)("p",null,"When you use the ",(0,o.kt)("inlineCode",{parentName:"p"},"css"),", we use the ",(0,o.kt)("inlineCode",{parentName:"p"},":root")," psuedo-selector to store the properties."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="CSS example - not actual properties or values"',title:'"CSS',example:!0,"-":!0,not:!0,actual:!0,properties:!0,or:!0,'values"':!0},":root {\n  --ps-text: #ff0000;\n  --ps-warning-text: #00ff00;\n  --ps-text-strong: #cccccc;\n  --ps-size-s: 0.75rem;\n  --ps-size-m: 1rem;\n  --ps-size-l: 2rem;\n  --ps-size-xl: 1rem;\n}\n")),(0,o.kt)("h4",{id:"es6"},"es6"),(0,o.kt)("p",null,"When you use the ",(0,o.kt)("inlineCode",{parentName:"p"},"js"),", we use ",(0,o.kt)("inlineCode",{parentName:"p"},"export")," for unique ID variable names."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="JS example - not actual properties or values"',title:'"JS',example:!0,"-":!0,not:!0,actual:!0,properties:!0,or:!0,'values"':!0},"export const PsText = '#ff0000'\nexport const PsWarningText = '#00ff00'\nexport const PsTextStrong = '#cccccc'\nexport const PsSizeS = '0.75rem'\nexport const PsSizeM = '1rem'\nexport const PsSizeL = '2rem'\nexport const PsSizeXL = '1rem'\n")),(0,o.kt)("h3",{id:"mobile"},"Mobile"),(0,o.kt)("p",null,"For mobile, we will ship ",(0,o.kt)("inlineCode",{parentName:"p"},"iOS"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"swift"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"android")," files to import into your projects via our repo."))}d.isMDXComponent=!0},2238:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);