webpackJsonp([0xf25cfc0a158,0xb887eab3c839],{829:function(e,o,r){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}o.__esModule=!0;var n=r(4),a=r(241),l=t(a);o.default={title:"Login",components:{Login:n.Login,LoginFooter:n.LoginFooter,LoginHeader:n.LoginHeader,LoginHeaderBrand:n.LoginHeaderBrand},examples:[l.default]},e.exports=o.default},241:function(e,o,r){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function n(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}function a(e,o){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!o||"object"!=typeof o&&"function"!=typeof o?e:o}function l(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function, not "+typeof o);e.prototype=Object.create(o&&o.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),o&&(Object.setPrototypeOf?Object.setPrototypeOf(e,o):e.__proto__=o)}o.__esModule=!0;var d=r(2),i=t(d),f=r(4),u=r(242),s=t(u),g=function(e){function o(){return n(this,o),a(this,e.apply(this,arguments))}return l(o,e),o.prototype.render=function(){var e=i.default.createElement(f.LoginHeaderBrand,null,"Header Brand"),o=i.default.createElement(f.LoginHeader,{headerBrand:e},"Header Text"),r=i.default.createElement(f.LoginFooter,null,"Footer");return i.default.createElement(f.Login,{footer:r,header:o},"Main")},o}(i.default.Component);g.title="Login Layout",g.getContainerProps=s.default,o.default=g,g.__docgenInfo={description:"",displayName:"SimpleLoginLayout"},e.exports=o.default},678:function(e,o){e.exports="import React from 'react';\nimport { Login, LoginFooter, LoginHeader, LoginHeaderBrand } from '@patternfly/react-core';\nimport getContainerProps from './common/getContainerProps';\n\nclass SimpleLoginLayout extends React.Component {\n  static title = 'Login Layout';\n  static getContainerProps = getContainerProps;\n\n  render() {\n    const HeaderBrand = <LoginHeaderBrand>Header Brand</LoginHeaderBrand>;\n    const Header = <LoginHeader headerBrand={HeaderBrand}>Header Text</LoginHeader>;\n    const Footer = <LoginFooter>Footer</LoginFooter>;\n\n    return <Login footer={Footer} header={Header}>Main</Login>;\n  }\n}\n\nexport default SimpleLoginLayout;\n"},242:function(e,o,r){"use strict";o.__esModule=!0;var t=r(5),n=r(7),a=t.StyleSheet.create({demoLayout:{"& .pf-l-login > *":{borderWidth:n.global_BorderWidth_md.var,borderStyle:"dashed",borderColor:n.global_BorderColor.var},"& .pf-l-login__container > *":{borderWidth:n.global_BorderWidth_md.var,borderStyle:"dashed",borderColor:n.global_BorderColor.var},"& .pf-l-login__footer > *":{borderWidth:n.global_BorderWidth_md.var,borderStyle:"dashed",borderColor:n.global_BorderColor.var},"& .pf-l-login__header > *":{borderWidth:n.global_BorderWidth_md.var,borderStyle:"dashed",borderColor:n.global_BorderColor.var},"& .pf-l-login__header-brand > *":{borderWidth:n.global_BorderWidth_md.var,borderStyle:"dashed",borderColor:n.global_BorderColor.var},"& .pf-l-login__main > *":{borderWidth:n.global_BorderWidth_md.var,borderStyle:"dashed",borderColor:n.global_BorderColor.var}}});o.default=function(){return{className:(0,t.css)(a.demoLayout)}},e.exports=o.default},880:function(e,o,r){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}o.__esModule=!0;var n=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var r=arguments[o];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},a=r(2),l=t(a),d=r(829),i=t(d),f=r(15),u=t(f),s=[{name:"SimpleLoginLayout",path:"../../react-core/src/layouts/Login/examples/SimpleLoginLayout.js",file:r(678)}],g=[{name:"pf_logo.svg",file:r(10)},{name:"pf_mini_logo_white.svg",file:r(11)},{name:"img_avatar.png",file:r(13)},{name:"pf_logo.svg",file:r(14)},{name:"img_avatar.png",file:r(8)},{name:"l_pf-reverse-164x11.png",file:r(9)},{name:"pfbg_992.jpg",file:r(12)}];o.default=function(){return l.default.createElement(u.default,n({rawExamples:s,images:g},i.default))},e.exports=o.default}});
//# sourceMappingURL=component---tmp-login-docs-js-ab2dabc682dea3b28915.js.map