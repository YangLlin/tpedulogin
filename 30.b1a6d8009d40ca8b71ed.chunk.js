(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[30],{252:function(e,a,t){"use strict";var l=t(44),n=t.n(l),o=t(16),r=t.n(o),i=t(256),c=t.n(i),s=t(288),d=t(240),m=t(250),p=t(4),u=t(0),b=t.n(u),v=["width","height","border","text","variant","className","size"];a.a=function(e){var a,t=e.width,l=void 0===t?"120px":t,o=e.height,i=void 0===o?"40px":o,u=e.border,g=void 0===u?"normal":u,h=e.text,y=e.variant,f=e.className,E=e.size,x=c()(e,v),N=Object(d.a)((function(e){return Object(m.a)({root:{borderRadius:12,fontFamily:"Noto Sans TC"},outline:{border:"2px solid","&:hover":{border:"2px solid"}},buttonSize:{minWidth:l,minHeight:i},buttonText:{whiteSpace:"nowrap"}})}))();return b.a.createElement(s.a,n()({color:"primary",variant:y,size:E,className:Object(p.a)(f,N.root,(a={},r()(a,N.outline,"outlined"===y&&"normal"===g),r()(a,N.buttonSize,!E),a)),disableElevation:!0},x),b.a.createElement("span",{className:N.buttonText},h))}},253:function(e,a,t){"use strict";var l=t(144),n=t(246),o=t(145),r=t(0),i=t.n(r),c=t(252);a.a=function(e){var a=Object(o.a)(),t=Object(l.a)({palette:{primary:a.palette.primary}});return i.a.createElement(n.a,{theme:t},i.a.createElement(c.a,e))}},256:function(e,a,t){var l=t(264);e.exports=function(e,a){if(null==e)return{};var t,n,o=l(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o},e.exports.default=e.exports,e.exports.__esModule=!0},257:function(e,a,t){"use strict";var l=t(353),n=t(384),o=t(431),r=t(0),i=t.n(r);a.a=function(e){return i.a.createElement(l.a,{variant:e.variant,size:e.size,className:e.className,fullWidth:e.fullWidth,disabled:e.disabled},e.label?i.a.createElement(n.a,{id:e.id},e.label):null,i.a.createElement(o.a,{defaultValue:e.value,labelId:e.id,label:e.label,name:e.name,onChange:e.handleChange,native:e.native},e.needFirstEmptyOption?i.a.createElement("option",{value:""}):null,e.data?e.data.map((function(e){return i.a.createElement("option",{key:"dropdownList-key-".concat(e.value),value:e.value},e.label)})):null))}},264:function(e,a){e.exports=function(e,a){if(null==e)return{};var t,l,n={},o=Object.keys(e);for(l=0;l<o.length;l++)t=o[l],a.indexOf(t)>=0||(n[t]=e[t]);return n},e.exports.default=e.exports,e.exports.__esModule=!0},288:function(e,a,t){"use strict";var l=t(3),n=t(1),o=t(0),r=(t(2),t(4)),i=t(5),c=t(22),s=t(148),d=t(13),m=o.forwardRef((function(e,a){var t=e.children,i=e.classes,c=e.className,m=e.color,p=void 0===m?"default":m,u=e.component,b=void 0===u?"button":u,v=e.disabled,g=void 0!==v&&v,h=e.disableElevation,y=void 0!==h&&h,f=e.disableFocusRipple,E=void 0!==f&&f,x=e.endIcon,N=e.focusVisibleClassName,w=e.fullWidth,O=void 0!==w&&w,S=e.size,z=void 0===S?"medium":S,C=e.startIcon,j=e.type,k=void 0===j?"button":j,W=e.variant,P=void 0===W?"text":W,I=Object(l.a)(e,["children","classes","className","color","component","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"]),L=C&&o.createElement("span",{className:Object(r.a)(i.startIcon,i["iconSize".concat(Object(d.a)(z))])},C),T=x&&o.createElement("span",{className:Object(r.a)(i.endIcon,i["iconSize".concat(Object(d.a)(z))])},x);return o.createElement(s.a,Object(n.a)({className:Object(r.a)(i.root,i[P],c,"inherit"===p?i.colorInherit:"default"!==p&&i["".concat(P).concat(Object(d.a)(p))],"medium"!==z&&[i["".concat(P,"Size").concat(Object(d.a)(z))],i["size".concat(Object(d.a)(z))]],y&&i.disableElevation,g&&i.disabled,O&&i.fullWidth),component:b,disabled:g,focusRipple:!E,focusVisibleClassName:Object(r.a)(i.focusVisible,N),ref:a,type:k},I),o.createElement("span",{className:i.label},L,t,T))}));a.a=Object(i.a)((function(e){return{root:Object(n.a)({},e.typography.button,{boxSizing:"border-box",minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,color:e.palette.text.primary,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:Object(c.a)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},text:{padding:"6px 8px"},textPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(c.a)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},textSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(c.a)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlined:{padding:"5px 15px",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$disabled":{border:"1px solid ".concat(e.palette.action.disabledBackground)}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(Object(c.a)(e.palette.primary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.primary.main),backgroundColor:Object(c.a)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(Object(c.a)(e.palette.secondary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.secondary.main),backgroundColor:Object(c.a)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},contained:{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2],"&:hover":{backgroundColor:e.palette.grey.A100,boxShadow:e.shadows[4],"@media (hover: none)":{boxShadow:e.shadows[2],backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},"&$focusVisible":{boxShadow:e.shadows[6]},"&:active":{boxShadow:e.shadows[8]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}},containedPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},containedSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},disableElevation:{boxShadow:"none","&:hover":{boxShadow:"none"},"&$focusVisible":{boxShadow:"none"},"&:active":{boxShadow:"none"},"&$disabled":{boxShadow:"none"}},focusVisible:{},disabled:{},colorInherit:{color:"inherit",borderColor:"currentColor"},textSizeSmall:{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},textSizeLarge:{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},outlinedSizeSmall:{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},outlinedSizeLarge:{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},containedSizeSmall:{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},containedSizeLarge:{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},sizeSmall:{},sizeLarge:{},fullWidth:{width:"100%"},startIcon:{display:"inherit",marginRight:8,marginLeft:-4,"&$iconSizeSmall":{marginLeft:-2}},endIcon:{display:"inherit",marginRight:-4,marginLeft:8,"&$iconSizeSmall":{marginRight:-2}},iconSizeSmall:{"& > *:first-child":{fontSize:18}},iconSizeMedium:{"& > *:first-child":{fontSize:20}},iconSizeLarge:{"& > *:first-child":{fontSize:22}}}}),{name:"MuiButton"})(m)},305:function(e,a,t){"use strict";t.d(a,"b",(function(){return l})),t.d(a,"a",(function(){return n})),t.d(a,"e",(function(){return o})),t.d(a,"d",(function(){return r})),t.d(a,"c",(function(){return i}));var l=[{label:"幼兒園",value:"1"},{label:"國民小學",value:"2"},{label:"國民中學",value:"3"}],n=[{value:1,label:"松山區"},{value:2,label:"大同區"}],o=[{value:"alle",label:"全誼"},{value:"oneplus",label:"巨耀"},{value:"bridge",label:"虹橋"}],r=[{name:"臺北市國語實驗國民小學",area:"中正區",value:"meps"},{name:"臺北市立建國高級中學",area:"中正區",value:"ck"},{name:"臺北市立第一女子高級中學",area:"中正區",value:"fg"},{name:"臺北市中正區忠孝國民小學",area:"中正區",value:"ches"},{name:"臺北市中正區忠義國民小學",area:"中正區",value:"cips"}],i={systemCode:"meps",institutionNme:"臺北市國語實驗國民小學",institutionType:"2",institutionTaxIdNumber:"353604",institutionFaxNumber:"(02)23093736",institutionInfoPhoneNumber:"(02)23033555",area:"2",postalCode:"100",address:"臺北市中正區南海路58號",schoolBox:"043",url:"http://www.meps.tp.edu.tw/",systemProvider:"alle",ipv4:"163.21.228.0/24",ipv6:"2001:288:12ce::/48"}},83:function(e,a,t){"use strict";t.r(a);var l=t(16),n=t.n(l),o=t(54),r=t.n(o),i=t(436),c=t(257),s=t(253),d=t(0),m=t.n(d),p=t(305);function u(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,l)}return t}function b(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?u(Object(t),!0).forEach((function(a){n()(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}a.default=function(){var e=m.a.useState([]),a=r()(e,2),t=a[0],l=a[1],n=m.a.useState([]),o=r()(n,2),d=o[0],u=o[1],v=m.a.useState({systemCode:"",institutionNme:"",institutionType:"",institutionTaxIdNumber:"",institutionFaxNumber:"",institutionInfoPhoneNumber:"",area:"",postalCode:"",address:"",schoolBox:"",url:"",systemProvider:"",ipv4:"",ipv6:""}),g=r()(v,2),h=g[0],y=g[1];m.a.useEffect((function(){return l(p.b),u(p.a),function(){}}));return m.a.createElement("div",null,m.a.createElement("div",{className:"row align-items-center pt-2"},m.a.createElement("div",{className:"col-lg-2 col-12"},"系統代號"),m.a.createElement("div",{className:"col-lg-10 col-12 my-1"},m.a.createElement(i.a,{variant:"outlined",size:"small",name:"schoolName",fullWidth:!0}))),m.a.createElement("div",{className:"row align-items-center pt-2"},m.a.createElement("div",{className:"col-lg-2 col-12"},"機構全銜"),m.a.createElement("div",{className:"col-lg-10 col-12 my-1"},m.a.createElement(i.a,{variant:"outlined",size:"small",name:"schoolName",fullWidth:!0}))),m.a.createElement("div",{className:"row align-items-center"},m.a.createElement("div",{className:"col-12 col-lg-6"},m.a.createElement("div",{className:"row align-items-center pt-2"},m.a.createElement("div",{className:"col-lg-4 col-12"},"機構類別"),m.a.createElement("div",{className:"col-lg-8 col-12 my-1"},m.a.createElement(c.a,{id:"type-dropdownList",name:"type",handleChange:function(e){y(b(b({},h),{},{institutionType:e.target.value}))},data:t,label:"類別",size:"small",variant:"outlined",fullWidth:!0,native:!0,needFirstEmptyOption:!0})))),m.a.createElement("div",{className:"col-12 col-lg-6"},m.a.createElement("div",{className:"row align-items-center pt-2"},m.a.createElement("div",{className:"col-lg-4 col-12"},"機構統一編號"),m.a.createElement("div",{className:"col-lg-8 col-12 my-1"},m.a.createElement(i.a,{variant:"outlined",size:"small",name:"taxIdNumber",fullWidth:!0}))))),m.a.createElement("div",{className:"row align-items-center"},m.a.createElement("div",{className:"col-12 col-lg-6"},m.a.createElement("div",{className:"row align-items-center pt-2"},m.a.createElement("div",{className:"col-lg-4 col-12"},"傳真號碼"),m.a.createElement("div",{className:"col-lg-8 col-12 my-1"},m.a.createElement(i.a,{variant:"outlined",size:"small",name:"faxNumber",placeholder:"格式如右 : (02)23456789",fullWidth:!0})))),m.a.createElement("div",{className:"col-12 col-lg-6"},m.a.createElement("div",{className:"row align-items-center pt-2"},m.a.createElement("div",{className:"col-lg-4 col-12"},"電話代表號"),m.a.createElement("div",{className:"col-lg-8 col-12 my-1"},m.a.createElement(i.a,{variant:"outlined",size:"small",name:"phoneNumber",placeholder:"格式如右 : (02)23456789",fullWidth:!0}))))),m.a.createElement("div",{className:"row align-items-center"},m.a.createElement("div",{className:"col-12 col-lg-6"},m.a.createElement("div",{className:"row align-items-center pt-2"},m.a.createElement("div",{className:"col-lg-4 col-12"},"所在行政區"),m.a.createElement("div",{className:"col-lg-8 col-12 my-1"},m.a.createElement(c.a,{id:"area-dropdownList",name:"area",handleChange:function(e){y(b(b({},h),{},{area:e.target.value}))},data:d,label:"區域",size:"small",variant:"outlined",fullWidth:!0,native:!0,needFirstEmptyOption:!0})))),m.a.createElement("div",{className:"col-12 col-lg-6"},m.a.createElement("div",{className:"row align-items-center pt-2"},m.a.createElement("div",{className:"col-lg-4 col-12"},"郵遞區號"),m.a.createElement("div",{className:"col-lg-8 col-12 my-1"},m.a.createElement(i.a,{variant:"outlined",size:"small",name:"areaCode",fullWidth:!0}))))),m.a.createElement("div",{className:"row align-items-center pt-2"},m.a.createElement("div",{className:"col-lg-2 col-12"},"地址"),m.a.createElement("div",{className:"col-lg-10 col-12 my-1"},m.a.createElement(i.a,{variant:"outlined",size:"small",name:"address",fullWidth:!0}))),m.a.createElement("div",{className:"row align-items-center pt-2"},m.a.createElement("div",{className:"col-lg-2 col-12"},"聯絡箱"),m.a.createElement("div",{className:"col-lg-10 col-12 my-1"},m.a.createElement(i.a,{variant:"outlined",size:"small",name:"schoolBox",fullWidth:!0}))),m.a.createElement("div",{className:"row align-items-center pt-2"},m.a.createElement("div",{className:"col-lg-2 col-12"},"官方網址"),m.a.createElement("div",{className:"col-lg-10 col-12 my-1"},m.a.createElement(i.a,{variant:"outlined",size:"small",name:"url",fullWidth:!0}))),m.a.createElement("div",{className:"row align-items-center pt-2"},m.a.createElement("div",{className:"col-lg-2 col-12"},"校務行政系統"),m.a.createElement("div",{className:"col-lg-10 col-12 my-1"},m.a.createElement(c.a,{id:"system-dropdownList",name:"systemProvider",handleChange:function(e){y(b(b({},h),{},{systemProvider:e.target.value}))},data:p.e,label:"廠商",size:"small",variant:"outlined",fullWidth:!0,native:!0,needFirstEmptyOption:!0}))),m.a.createElement("div",{className:"row align-items-center pt-2"},m.a.createElement("div",{className:"col-lg-2 col-12"},"IPv4網段"),m.a.createElement("div",{className:"col-lg-10 col-12 my-1"},m.a.createElement(i.a,{variant:"outlined",size:"small",name:"ipv4",placeholder:"請輸入網路編號及子網路遮罩，例如 : 163.21.249.0/24",fullWidth:!0}))),m.a.createElement("div",{className:"row align-items-center pt-2"},m.a.createElement("div",{className:"col-lg-2 col-12"},"IPv6網段"),m.a.createElement("div",{className:"col-lg-10 col-12 my-1"},m.a.createElement(i.a,{variant:"outlined",size:"small",name:"ipv6",placeholder:"請輸入網路編號及子網路遮罩，例如 : 2001:288:1200::/48",fullWidth:!0}))),m.a.createElement("div",{className:"row align-items-center pt-2"},m.a.createElement("div",{className:"col text-center"},m.a.createElement(s.a,{text:"確定新增",variant:"contained",className:"m-2"}))))}}}]);