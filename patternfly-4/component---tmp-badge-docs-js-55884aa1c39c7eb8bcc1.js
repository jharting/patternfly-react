webpackJsonp([0x9f2b80cf87a6,0x6288a280599b,0xf9af5b9a9c66],{734:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(4),o=n(142),l=a(o),d=n(143),u=a(d);t.default={title:"Badge",components:{Badge:r.Badge},examples:[u.default,l.default]},e.exports=t.default},142:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var d=n(2),u=a(d),f=n(4),i=n(45),c=a(i),s=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){return u.default.createElement(u.default.Fragment,null,u.default.createElement(f.Badge,{isRead:!0},"7"),u.default.createElement(f.Badge,{isRead:!0},"24"),u.default.createElement(f.Badge,{isRead:!0},"240"),u.default.createElement(f.Badge,{isRead:!0},"999+"))},t}(u.default.Component);s.title="Read Badge",s.getContainerProps=c.default,t.default=s,s.__docgenInfo={description:"",displayName:"ReadBadge"},e.exports=t.default},591:function(e,t){e.exports="import React from 'react';\nimport { Badge } from '@patternfly/react-core';\nimport getContainerProps from './common/getContainerProps';\n\nclass ReadBadge extends React.Component {\n  static title = 'Read Badge';\n  static getContainerProps = getContainerProps;\n\n  render() {\n    return (\n      <React.Fragment>\n        <Badge isRead>7</Badge>\n        <Badge isRead>24</Badge>\n        <Badge isRead>240</Badge>\n        <Badge isRead>999+</Badge>\n      </React.Fragment>\n    );\n  }\n}\n\nexport default ReadBadge;\n"},143:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var d=n(2),u=a(d),f=n(4),i=n(45),c=a(i),s=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){return u.default.createElement(u.default.Fragment,null,u.default.createElement(f.Badge,null,"7"),u.default.createElement(f.Badge,null,"24"),u.default.createElement(f.Badge,null,"240"),u.default.createElement(f.Badge,null,"999+"))},t}(u.default.Component);s.title="Unread Badge",s.getContainerProps=c.default,t.default=s,s.__docgenInfo={description:"",displayName:"UnreadBadge"},e.exports=t.default},592:function(e,t){e.exports="import React from 'react';\nimport { Badge } from '@patternfly/react-core';\nimport getContainerProps from './common/getContainerProps';\n\nclass UnreadBadge extends React.Component {\n  static title = 'Unread Badge';\n  static getContainerProps = getContainerProps;\n\n  render() {\n    return (\n      <React.Fragment>\n        <Badge>7</Badge>\n        <Badge>24</Badge>\n        <Badge>240</Badge>\n        <Badge>999+</Badge>\n      </React.Fragment>\n    );\n  }\n}\n\nexport default UnreadBadge;\n"},45:function(e,t,n){"use strict";t.__esModule=!0;var a=n(5),r=a.StyleSheet.create({demoLayout:{backgroundColor:"#fff","& > span":{margin:"0.5rem"}}});t.default=function(){return{className:(0,a.css)(r.demoLayout)}},e.exports=t.default},867:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o=n(2),l=a(o),d=n(734),u=a(d),f=n(15),i=a(f),c=[{name:"ReadBadge",path:"../../react-core/src/components/Badge/examples/ReadBadge.js",file:n(591)},{name:"UnreadBadge",path:"../../react-core/src/components/Badge/examples/UnreadBadge.js",file:n(592)}],s=[{name:"pf_logo.svg",file:n(10)},{name:"pf_mini_logo_white.svg",file:n(11)},{name:"img_avatar.png",file:n(13)},{name:"pf_logo.svg",file:n(14)},{name:"img_avatar.png",file:n(8)},{name:"l_pf-reverse-164x11.png",file:n(9)},{name:"pfbg_992.jpg",file:n(12)}];t.default=function(){return l.default.createElement(i.default,r({rawExamples:c,images:s},u.default))},e.exports=t.default}});
//# sourceMappingURL=component---tmp-badge-docs-js-55884aa1c39c7eb8bcc1.js.map