/*! For license information please see ui-stories-Introduction-mdx.6613f5f1.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkmy_passwords=self.webpackChunkmy_passwords||[]).push([[150],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/ui/stories/Introduction.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>Introduction});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),next_image=__webpack_require__("./node_modules/next/image.js"),image_default=__webpack_require__.n(next_image);const code_brackets={src:"static/media/code-brackets.b174d86c.svg",height:48,width:48,blurDataURL:"static/media/code-brackets.b174d86c.svg"},colors={src:"static/media/colors.d8002bff.svg",height:48,width:48,blurDataURL:"static/media/colors.d8002bff.svg"},comments={src:"static/media/comments.99a445bb.svg",height:48,width:48,blurDataURL:"static/media/comments.99a445bb.svg"},direction={src:"static/media/direction.aa124ee4.svg",height:48,width:48,blurDataURL:"static/media/direction.aa124ee4.svg"},flow={src:"static/media/flow.8dcedb2a.svg",height:48,width:48,blurDataURL:"static/media/flow.8dcedb2a.svg"},assets_plugin={src:"static/media/plugin.738c41b2.svg",height:48,width:48,blurDataURL:"static/media/plugin.738c41b2.svg"},repo={src:"static/media/repo.77297c5c.svg",height:48,width:48,blurDataURL:"static/media/repo.77297c5c.svg"},stackalt={src:"static/media/stackalt.5cf1d85a.svg",height:48,width:48,blurDataURL:"static/media/stackalt.5cf1d85a.svg"};function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",strong:"strong",code:"code",a:"a"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Example/Introduction Bkp"}),"\n",(0,jsx_runtime.jsx)("style",{children:"\n\t\t.subheading {\n\t\t--mediumdark: '#999999';\n\t\tfont-weight: 700;\n\t\tfont-size: 13px;\n\t\tcolor: #999;\n\t\tletter-spacing: 6px;\n\t\tline-height: 24px;\n\t\ttext-transform: uppercase;\n\t\tmargin-bottom: 12px;\n\t\tmargin-top: 40px;\n\t\t}\n\n\t\t.link-list {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: 1fr;\n\t\tgrid-template-rows: 1fr 1fr;\n\t\trow-gap: 10px;\n\t\t}\n\n\t\t@media (min-width: 620px) {\n\t\t.link-list {\n\t\t\trow-gap: 20px;\n\t\t\tcolumn-gap: 20px;\n\t\t\tgrid-template-columns: 1fr 1fr;\n\t\t}\n\t\t}\n\n\t\t@media all and (-ms-high-contrast:none) {\n\t\t.link-list {\n\t\t\tdisplay: -ms-grid;\n\t\t\t-ms-grid-columns: 1fr 1fr;\n\t\t\t-ms-grid-rows: 1fr 1fr;\n\t\t}\n\t\t}\n\n\t\t.link-item {\n\t\tdisplay: block;\n\t\tpadding: 20px;\n\t\tborder: 1px solid #00000010;\n\t\tborder-radius: 5px;\n\t\ttransition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;\n\t\tcolor: #333333;\n\t\tdisplay: flex;\n\t\talign-items: flex-start;\n\t\t}\n\n\t\t.link-item:hover {\n\t\tborder-color: #1EA7FD50;\n\t\ttransform: translate3d(0, -3px, 0);\n\t\tbox-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;\n\t\t}\n\n\t\t.link-item:active {\n\t\tborder-color: #1EA7FD;\n\t\ttransform: translate3d(0, 0, 0);\n\t\t}\n\n\t\t.link-item strong {\n\t\tfont-weight: 700;\n\t\tdisplay: block;\n\t\tmargin-bottom: 2px;\n\t\t}\n\n\t\t.link-item-img-wrapper {\n\t\theight: 40px;\n\t\twidth: 40px;\n\t\tmargin-right: 15px;\n\t\tflex: none;\n\t\t}\n\n\t\t.link-item span,\n\t\t.link-item p {\n\t\tmargin: 0;\n\t\tfont-size: 14px;\n\t\tline-height: 20px;\n\t\t}\n\n\t\t.tip {\n\t\tdisplay: inline-block;\n\t\tborder-radius: 1em;\n\t\tfont-size: 11px;\n\t\tline-height: 12px;\n\t\tfont-weight: 700;\n\t\tbackground: #E7FDD8;\n\t\tcolor: #66BF3C;\n\t\tpadding: 4px 12px;\n\t\tmargin-right: 10px;\n\t\tvertical-align: top;\n\t\t}\n\n\t\t.tip-wrapper {\n\t\tfont-size: 13px;\n\t\tline-height: 20px;\n\t\tmargin-top: 40px;\n\t\tmargin-bottom: 40px;\n\t\t}\n\n\t\t.tip-wrapper code {\n\t\tfont-size: 12px;\n\t\tdisplay: inline-block;\n\t\t}\n\t"}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"welcome-to-storybook",children:"Welcome to Storybook"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Storybook helps you build UI components in isolation from your app's business logic, data, and context.\nThat makes it easy to develop hard-to-reach states. Save these UI states as ",(0,jsx_runtime.jsx)(_components.strong,{children:"stories"})," to revisit during development, testing, or QA."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Browse example stories now by navigating to them in the sidebar.\nView their code in the ",(0,jsx_runtime.jsx)(_components.code,{children:"stories"})," directory to learn how they work.\nWe recommend building UIs with a ",(0,jsx_runtime.jsx)(_components.a,{href:"https://componentdriven.org",target:"_blank",rel:"nofollow noopener noreferrer",children:(0,jsx_runtime.jsx)(_components.strong,{children:"component-driven"})})," process starting with atomic components and ending with pages."]}),"\n",(0,jsx_runtime.jsx)("div",{className:"subheading",children:"Configure"}),"\n",(0,jsx_runtime.jsxs)("div",{className:"link-list",children:[(0,jsx_runtime.jsxs)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/addons/addon-types",target:"_blank",children:[(0,jsx_runtime.jsx)("div",{className:"link-item-img-wrapper",children:(0,jsx_runtime.jsx)(image_default(),{src:assets_plugin,alt:"plugin"})}),(0,jsx_runtime.jsx)("span",{children:(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)("strong",{children:"Presets for popular tools"}),"\nEasy setup for TypeScript, SCSS and more."]})})]}),(0,jsx_runtime.jsxs)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/webpack",target:"_blank",children:[(0,jsx_runtime.jsx)("div",{className:"link-item-img-wrapper",children:(0,jsx_runtime.jsx)(image_default(),{src:stackalt,alt:"Build"})}),(0,jsx_runtime.jsx)("span",{children:(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)("strong",{children:"Build configuration"}),"\nHow to customize webpack and Babel"]})})]}),(0,jsx_runtime.jsxs)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/styling-and-css",target:"_blank",children:[(0,jsx_runtime.jsx)("div",{className:"link-item-img-wrapper",children:(0,jsx_runtime.jsx)(image_default(),{src:colors,alt:"colors"})}),(0,jsx_runtime.jsx)("span",{children:(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)("strong",{children:"Styling"}),"\nHow to load and configure CSS libraries"]})})]}),(0,jsx_runtime.jsxs)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/get-started/setup#configure-storybook-for-your-stack",target:"_blank",children:[(0,jsx_runtime.jsx)("div",{className:"link-item-img-wrapper",children:(0,jsx_runtime.jsx)(image_default(),{src:flow,alt:"flow"})}),(0,jsx_runtime.jsx)("span",{children:(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)("strong",{children:"Data"}),"\nProviders and mocking for data libraries"]})})]})]}),"\n",(0,jsx_runtime.jsx)("div",{className:"subheading",children:"Learn"}),"\n",(0,jsx_runtime.jsxs)("div",{className:"link-list",children:[(0,jsx_runtime.jsxs)("a",{className:"link-item",href:"https://storybook.js.org/docs",target:"_blank",children:[(0,jsx_runtime.jsx)("div",{className:"link-item-img-wrapper",children:(0,jsx_runtime.jsx)(image_default(),{src:repo,alt:"repo"})}),(0,jsx_runtime.jsx)("span",{children:(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)("strong",{children:"Storybook documentation"}),"\nConfigure, customize, and extend"]})})]}),(0,jsx_runtime.jsxs)("a",{className:"link-item",href:"https://storybook.js.org/tutorials/",target:"_blank",children:[(0,jsx_runtime.jsx)("div",{className:"link-item-img-wrapper",children:(0,jsx_runtime.jsx)(image_default(),{src:direction,alt:"direction"})}),(0,jsx_runtime.jsx)("span",{children:(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)("strong",{children:"In-depth guides"}),"\nBest practices from leading teams"]})})]}),(0,jsx_runtime.jsxs)("a",{className:"link-item",href:"https://github.com/storybookjs/storybook",target:"_blank",children:[(0,jsx_runtime.jsx)("div",{className:"link-item-img-wrapper",children:(0,jsx_runtime.jsx)(image_default(),{src:code_brackets,alt:"code"})}),(0,jsx_runtime.jsx)("span",{children:(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)("strong",{children:"GitHub project"}),"\nView the source and add issues"]})})]}),(0,jsx_runtime.jsxs)("a",{className:"link-item",href:"https://discord.gg/storybook",target:"_blank",children:[(0,jsx_runtime.jsx)("div",{className:"link-item-img-wrapper",children:(0,jsx_runtime.jsx)(image_default(),{src:comments,alt:"comments"})}),(0,jsx_runtime.jsx)("span",{children:(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)("strong",{children:"Discord chat"}),"\nChat with maintainers and the community"]})})]})]}),"\n",(0,jsx_runtime.jsx)("div",{className:"tip-wrapper",children:(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)("span",{className:"tip",children:"Tip"}),"Edit the Markdown in"," ","\n",(0,jsx_runtime.jsx)("code",{children:"stories/Introduction.mdx"})]})})]})}const Introduction=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);