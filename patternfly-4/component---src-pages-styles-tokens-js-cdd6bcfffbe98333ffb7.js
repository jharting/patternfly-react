webpackJsonp([0xa5253b5f2d73],{929:function(e,l,a){"use strict";function t(e){if(e&&e.__esModule)return e;var l={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(l[a]=e[a]);return l.default=e,l}function n(e){return e&&e.__esModule?e:{default:e}}function r(){return c.default.createElement(s.default,null,c.default.createElement(d.Title,{size:"3xl"},"Tokens"),c.default.createElement(f.Table,null,c.default.createElement(f.Heading,null,c.default.createElement(f.TH,null,"Variable"),c.default.createElement(f.TH,null,"Name"),c.default.createElement(f.TH,null,"Value")),c.default.createElement(f.Body,null,Object.keys(m).reduce(function(e,l){var a=m[l];return a.name&&a.value?[].concat(e,[c.default.createElement(f.Row,{key:l},c.default.createElement(f.TD,{className:(0,p.css)(E.tokenCell)},l),c.default.createElement(f.TD,{className:(0,p.css)(E.tokenCell)},c.default.createElement("span",{className:(0,p.css)(E.name)},a.name)),c.default.createElement(f.TD,null,b.test(a.value)&&c.default.createElement("span",{className:(0,p.css)(E.color),style:{backgroundColor:a.value}}),a.value))]):e},[]))))}l.__esModule=!0;var u=a(2),c=n(u),o=a(86),s=n(o),d=a(4),f=a(306),i=a(7),m=t(i),p=a(5),E=p.StyleSheet.create({name:{whiteSpace:"nowrap"},color:{display:"inline-block",height:15,width:15,border:m.global_BorderWidth_sm.var+" solid "+m.global_BorderColor.var,marginRight:m.global_spacer_sm.var},tokenCell:{whiteSpace:"nowrap"}}),b=/^(#|rgb)/;l.default=r,r.__docgenInfo={description:"",displayName:"Tokens"},e.exports=l.default}});
//# sourceMappingURL=component---src-pages-styles-tokens-js-cdd6bcfffbe98333ffb7.js.map