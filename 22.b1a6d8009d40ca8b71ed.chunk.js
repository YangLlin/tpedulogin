(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[22],{254:function(e,t,a){"use strict";var n=a(241),i=a(245),r=a(0),l=a.n(r);t.a=function(e){return l.a.createElement("div",{className:e.className},l.a.createElement(n.a,{variant:"elevation",elevation:0,style:{borderRadius:5}},l.a.createElement("div",{className:"p-2"},l.a.createElement("h2",null,e.title)),l.a.createElement(i.a,null),l.a.createElement("div",{className:"m-3"},e.children)))}},289:function(e,t,a){"use strict";var n=a(0),i=n.createContext();t.a=i},318:function(e,t,a){"use strict";var n=a(0),i=n.createContext();t.a=i},356:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=[{id:"1",studentId:"000001",studentName:"李大明",school:"建國中學",class:"102",seatNo:"1",relationship:"父子",status:"啟用"},{id:"2",studentId:"000002",studentName:"李小明",school:"忠孝國小",class:"103",seatNo:"2",relationship:"父子",status:"啟用"}]},401:function(e,t,a){"use strict";var n=a(1),i=a(3),r=a(0),l=(a(2),a(4)),o=a(5),c=a(289),s={variant:"head"},d=r.forwardRef((function(e,t){var a=e.classes,o=e.className,d=e.component,m=void 0===d?"thead":d,u=Object(i.a)(e,["classes","className","component"]);return r.createElement(c.a.Provider,{value:s},r.createElement(m,Object(n.a)({className:Object(l.a)(a.root,o),ref:t,role:"thead"===m?null:"rowgroup"},u)))}));t.a=Object(o.a)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(d)},402:function(e,t,a){"use strict";var n=a(1),i=a(3),r=a(0),l=(a(2),a(4)),o=a(5),c=a(289),s=a(22),d=r.forwardRef((function(e,t){var a=e.classes,o=e.className,s=e.component,d=void 0===s?"tr":s,m=e.hover,u=void 0!==m&&m,p=e.selected,b=void 0!==p&&p,g=Object(i.a)(e,["classes","className","component","hover","selected"]),h=r.useContext(c.a);return r.createElement(d,Object(n.a)({ref:t,className:Object(l.a)(a.root,o,h&&{head:a.head,footer:a.footer}[h.variant],u&&a.hover,b&&a.selected),role:"tr"===d?null:"row"},g))}));t.a=Object(o.a)((function(e){return{root:{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,"&$hover:hover":{backgroundColor:e.palette.action.hover},"&$selected, &$selected:hover":{backgroundColor:Object(s.a)(e.palette.secondary.main,e.palette.action.selectedOpacity)}},selected:{},hover:{},head:{},footer:{}}}),{name:"MuiTableRow"})(d)},403:function(e,t,a){"use strict";var n=a(3),i=a(1),r=a(0),l=(a(2),a(4)),o=a(5),c=a(13),s=a(22),d=a(318),m=a(289),u=r.forwardRef((function(e,t){var a,o,s=e.align,u=void 0===s?"inherit":s,p=e.classes,b=e.className,g=e.component,h=e.padding,v=e.scope,f=e.size,y=e.sortDirection,O=e.variant,j=Object(n.a)(e,["align","classes","className","component","padding","scope","size","sortDirection","variant"]),N=r.useContext(d.a),E=r.useContext(m.a),x=E&&"head"===E.variant;g?(o=g,a=x?"columnheader":"cell"):o=x?"th":"td";var w=v;!w&&x&&(w="col");var k=h||(N&&N.padding?N.padding:"normal"),C=f||(N&&N.size?N.size:"medium"),R=O||E&&E.variant,A=null;return y&&(A="asc"===y?"ascending":"descending"),r.createElement(o,Object(i.a)({ref:t,className:Object(l.a)(p.root,p[R],b,"inherit"!==u&&p["align".concat(Object(c.a)(u))],"normal"!==k&&p["padding".concat(Object(c.a)(k))],"medium"!==C&&p["size".concat(Object(c.a)(C))],"head"===R&&N&&N.stickyHeader&&p.stickyHeader),"aria-sort":A,role:a,scope:w},j))}));t.a=Object(o.a)((function(e){return{root:Object(i.a)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===e.palette.type?Object(s.f)(Object(s.a)(e.palette.divider,1),.88):Object(s.b)(Object(s.a)(e.palette.divider,1),.68)),textAlign:"left",padding:16}),head:{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},body:{color:e.palette.text.primary},footer:{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},sizeSmall:{padding:"6px 24px 6px 16px","&:last-child":{paddingRight:16},"&$paddingCheckbox":{width:24,padding:"0 12px 0 16px","&:last-child":{paddingLeft:12,paddingRight:16},"& > *":{padding:0}}},paddingCheckbox:{width:48,padding:"0 0 0 4px","&:last-child":{paddingLeft:0,paddingRight:4}},paddingNone:{padding:0,"&:last-child":{padding:0}},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right",flexDirection:"row-reverse"},alignJustify:{textAlign:"justify"},stickyHeader:{position:"sticky",top:0,left:0,zIndex:2,backgroundColor:e.palette.background.default}}}),{name:"MuiTableCell"})(u)},404:function(e,t,a){"use strict";var n=a(1),i=a(3),r=a(0),l=(a(2),a(4)),o=a(5),c=a(289),s={variant:"body"},d=r.forwardRef((function(e,t){var a=e.classes,o=e.className,d=e.component,m=void 0===d?"tbody":d,u=Object(i.a)(e,["classes","className","component"]);return r.createElement(c.a.Provider,{value:s},r.createElement(m,Object(n.a)({className:Object(l.a)(a.root,o),ref:t,role:"tbody"===m?null:"rowgroup"},u)))}));t.a=Object(o.a)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(d)},405:function(e,t,a){"use strict";var n=a(1),i=a(3),r=a(0),l=(a(2),a(4)),o=a(5),c=r.forwardRef((function(e,t){var a=e.classes,o=e.className,c=e.component,s=void 0===c?"div":c,d=Object(i.a)(e,["classes","className","component"]);return r.createElement(s,Object(n.a)({ref:t,className:Object(l.a)(a.root,o)},d))}));t.a=Object(o.a)({root:{width:"100%",overflowX:"auto"}},{name:"MuiTableContainer"})(c)},406:function(e,t,a){"use strict";var n=a(3),i=a(1),r=a(0),l=(a(2),a(4)),o=a(5),c=a(318),s=r.forwardRef((function(e,t){var a=e.classes,o=e.className,s=e.component,d=void 0===s?"table":s,m=e.padding,u=void 0===m?"normal":m,p=e.size,b=void 0===p?"medium":p,g=e.stickyHeader,h=void 0!==g&&g,v=Object(n.a)(e,["classes","className","component","padding","size","stickyHeader"]),f=r.useMemo((function(){return{padding:u,size:b,stickyHeader:h}}),[u,b,h]);return r.createElement(c.a.Provider,{value:f},r.createElement(d,Object(i.a)({role:"table"===d?null:"table",ref:t,className:Object(l.a)(a.root,o,h&&a.stickyHeader)},v)))}));t.a=Object(o.a)((function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(i.a)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}}),{name:"MuiTable"})(s)},96:function(e,t,a){"use strict";a.r(t);var n=a(402),i=a(403),r=a(405),l=a(406),o=a(401),c=a(404),s=a(254),d=a(0),m=a.n(d),u=a(356);t.default=function(){var e=[{id:"rocId",label:"身分證字號",minWidth:140},{id:"studentId",label:"學號",minWidth:100},{id:"studentName",label:"學生姓名",minWidth:140},{id:"school",label:"就讀學校",minWidth:140},{id:"class",label:"就讀班級",minWidth:140},{id:"seatNo",label:"座號",minWidth:100},{id:"relationship",label:"關係",minWidth:100},{id:"status",label:"狀態",minWidth:70}];return m.a.createElement("div",null,m.a.createElement("div",{className:"my-4 row justify-content-center"},m.a.createElement(s.a,{className:"col-lg-10 col-12",title:"親子連結"},m.a.createElement("div",{className:"row align-items-center"},m.a.createElement("div",{className:"col-12 mt-2"},m.a.createElement(r.a,null,m.a.createElement(l.a,{stickyHeader:!0,"aria-label":"sticky table"},m.a.createElement(o.a,null,m.a.createElement(n.a,null,e.map((function(e){return m.a.createElement(i.a,{key:e.id,align:e.align,style:{minWidth:e.minWidth}},e.label)})))),m.a.createElement(c.a,null,u.a&&u.a.length>0?u.a.map((function(t){return m.a.createElement(n.a,{key:t.rocId,hover:!0},e.map((function(e){return m.a.createElement(i.a,{key:e.id},t[e.id])})))})):m.a.createElement(n.a,null,m.a.createElement(i.a,{colSpan:8,align:"center"},"查無資料"))))))))))}}}]);