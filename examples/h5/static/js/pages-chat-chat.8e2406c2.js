(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-chat-chat"],{"1d4c":function(A,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MessageBelong=e.ContentType=e.UserType=e.SendStatus=e.MessageType=void 0;var a={SYSTEM:1,CHAT:2};e.MessageType=a;var n={NONE:1,SENDING:2,SUCCESS:3,FAIL:4};e.SendStatus=n;var i={KEFU:1,SYSTEM:2,FRIEND:3,SELF:4};e.UserType=i;var s={TEXT:1,IMAGE:2,AUDIO:3};e.ContentType=s;var o={SYSTEM:1,FRIEND:2,SELF:3};e.MessageBelong=o},"2bca":function(A,e,t){"use strict";var a,n=function(){var A=this,e=A.$createElement,a=A._self._c||e;return a("v-uni-view",{staticClass:"container"},[a("v-uni-scroll-view",{staticClass:"chat-main",attrs:{"scroll-y":!0,"scroll-with-animation":!0,"enable-back-to-top":!0,"show-scrollbar":!0}},A._l(A.list,(function(e,t){return a("v-uni-view",{key:e.id,staticClass:"chat-wrap",class:[0===t?"chat-first-wrap":""],attrs:{id:"message_"+e.id}},[1!==e.message_type?a("v-uni-view",{class:[3===e.message_belong?"chat-mine":"chat-friend"]},[a("v-uni-view",{staticClass:"chat-message-avatar",class:[3===e.message_belong?"chat-mine-message-avatar":""]},[a("v-uni-image",{staticClass:"chat-message-avatar-image",attrs:{src:3===e.message_belong?A.userInfo.avatar:A.friendInfo.avatar}})],1),a("v-uni-view",{staticClass:"chat-message-text-wrap",class:[3===e.message_belong?"chat-mine-message-text-wrap":""]},[a("v-uni-view",{staticClass:"chat-message-name"},[a("v-uni-text",{staticClass:"chat-message-name-text"},[A._v(A._s(3===e.message_belong?A.userInfo.name:A.friendInfo.name))])],1),a("v-uni-view",{staticClass:"chat-message-content",class:[3===e.message_belong?"chat-mine-message-content":""]},[a("v-uni-text",{staticClass:"chat-message-content-text",class:[3===e.message_belong?"chat-mine-message-content-text":""]},[A._v(A._s(e.content))]),a("v-uni-view",{class:[3===e.message_belong?"chat-mine-message-content-text-bubble":"chat-message-content-text-bubble"]})],1)],1)],1):A._e(),1===e.message_type?a("v-uni-view",{staticClass:"chat-system"},[a("v-uni-text",{staticClass:"chat-system-text"},[A._v(A._s(e.content))])],1):A._e()],1)})),1),a("v-uni-view",{staticClass:"chat-footer"},[a("v-uni-view",{staticClass:"chat-send-wrap"},[a("v-uni-input",{staticClass:"chat-send-input",attrs:{type:"text","confirm-type":"send","confirm-hold":!0,"cursor-spacing":56,"hold-keyboard":!0},model:{value:A.message,callback:function(e){A.message=e},expression:"message"}}),a("v-uni-view",{staticClass:"chat-tool-icons"},[a("v-uni-image",{staticClass:"chat-tool-icon",attrs:{src:t("55df")}}),a("v-uni-image",{staticClass:"chat-tool-icon",attrs:{src:t("ae0e")}})],1)],1)],1)],1)},i=[];t.d(e,"b",(function(){return n})),t.d(e,"c",(function(){return i})),t.d(e,"a",(function(){return a}))},"37fd":function(A,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=t("1d4c"),n={name:"Chat",data:function(){var A=[{id:1e3,content:"你好，我是小白杨",content_type:a.ContentType.TEXT,create_time:1590550165320,is_read:1,is_received:1,message_type:a.MessageType.CHAT,sender:{id:1e3,type:a.UserType.FRIEND},receiver:{id:1001,type:a.UserType.SELF},send_status:a.SendStatus.SUCCESS,message_belong:a.MessageBelong.FRIEND},{id:1001,content:"你好，很高兴认识你",content_type:a.ContentType.TEXT,create_time:1590550165320,is_read:1,is_received:1,message_type:a.MessageType.CHAT,sender:{id:1001,type:a.UserType.SELF},receiver:{id:1e3,type:a.UserType.FRIEND},send_status:a.SendStatus.SUCCESS,message_belong:a.MessageBelong.SELF},{id:1002,content:"以上是历史消息",content_type:a.ContentType.TEXT,create_time:1590550165320,is_read:1,is_received:1,message_type:a.MessageType.SYSTEM,sender:{id:100,type:a.UserType.SYSTEM},receiver:{id:1001,type:a.UserType.SELF},send_status:a.SendStatus.SUCCESS,message_belong:a.MessageBelong.SYSTEM}];return{message:"",uid:1001,userInfo:{id:1001,name:"小白杨",avatar:"https://cool-comm.oss-cn-shenzhen.aliyuncs.com/show/imgs/chat/avatar/3.jpg"},friendInfo:{id:1e3,name:"楠宝宝",avatar:"https://cool-comm.oss-cn-shenzhen.aliyuncs.com/show/imgs/chat/avatar/4.jpg"},list:A}}};e.default=n},"55df":function(A,e){A.exports="data:image/png;base64,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"},"562a":function(A,e,t){"use strict";t.r(e);var a=t("37fd"),n=t.n(a);for(var i in a)"default"!==i&&function(A){t.d(e,A,(function(){return a[A]}))}(i);e["default"]=n.a},acb2:function(A,e,t){var a=t("24fb");e=a(!1),e.push([A.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-6a656c2a]{-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;height:100%;border-top-width:%?1?%;border-top-style:solid;border-top-color:#eaeaea;background-color:#f2f2f2}.chat-main[data-v-6a656c2a]{-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.chat-wrap[data-v-6a656c2a]{padding:0 %?30?%;margin-bottom:%?40?%}.chat-first-wrap[data-v-6a656c2a]{margin-top:%?40?%}.chat-friend[data-v-6a656c2a], .chat-mine[data-v-6a656c2a]{-webkit-box-flex:1;-webkit-flex:1;flex:1;position:relative;padding-right:%?84?%}.chat-message-avatar[data-v-6a656c2a]{margin-right:%?30?%}.chat-message-avatar-image[data-v-6a656c2a]{width:%?84?%;height:%?84?%;-webkit-border-radius:%?8?%;border-radius:%?8?%}.chat-message-text-wrap[data-v-6a656c2a]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start}.chat-message-name[data-v-6a656c2a]{line-height:%?48?%}.chat-message-name-text[data-v-6a656c2a]{font-size:%?26?%;color:#999}.chat-message-content[data-v-6a656c2a]{position:relative;line-height:%?44?%;margin-top:%?10?%;padding:%?16?% %?30?%;background-color:#fff;-webkit-border-radius:%?8?%;border-radius:%?8?%;word-break:break-all}.chat-message-content-text[data-v-6a656c2a]{color:#333;font-size:%?32?%}.chat-message-content-text-bubble[data-v-6a656c2a]{position:absolute;left:%?-20?%;top:%?26?%;width:0;height:0;border-width:%?20?%;border-style:solid;border-color:#fff;border-left-color:transparent;border-bottom-color:transparent;overflow:hidden}.chat-mine-message-content-text-bubble[data-v-6a656c2a]{position:absolute;top:%?26?%;right:%?-20?%;width:0;height:0;border-width:%?20?%;border-style:solid;border-color:#12b7f5;border-right-color:transparent;border-bottom-color:transparent;overflow:hidden}.chat-message-text[data-v-6a656c2a]{font-size:%?30?%}.chat-mine[data-v-6a656c2a]{-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-webkit-flex-direction:row-reverse;flex-direction:row-reverse;padding-left:%?80?%;padding-right:0}.chat-mine-message-avatar[data-v-6a656c2a]{margin-left:%?30?%;margin-right:0}.chat-mine-message-text-wrap[data-v-6a656c2a]{text-align:right;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end}.chat-mine-message-content[data-v-6a656c2a]{text-align:left;background-color:#12b7f5}.chat-mine-message-content-text[data-v-6a656c2a]{color:#fff}.chat-system[data-v-6a656c2a]{-webkit-box-flex:1;-webkit-flex:1;flex:1;margin:%?40?% 0 %?10?%;padding:0;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.chat-system-text[data-v-6a656c2a]{line-height:%?60?%;padding:0 %?30?%;-webkit-border-radius:%?10?%;border-radius:%?10?%;background-color:#ddd;color:#fff;font-size:%?28?%}\n/* 底部 */.chat-footer[data-v-6a656c2a]{padding:%?20?%;background-color:#f5f5f5;border-top-width:%?1?%;border-top-style:solid;border-top-color:#eaeaea;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.chat-send-wrap[data-v-6a656c2a]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.chat-send-input[data-v-6a656c2a]{-webkit-box-flex:1;-webkit-flex:1;flex:1;height:%?70?%;border-width:0;background-color:#fff;-webkit-border-radius:%?10?%;border-radius:%?10?%;font-size:%?28?%;padding:0 %?16?%}.chat-tool-icons[data-v-6a656c2a]{-webkit-box-align:center;-webkit-align-items:center;align-items:center}.chat-tool-icon[data-v-6a656c2a]{width:%?60?%;height:%?60?%;margin-left:%?14?%}',""]),A.exports=e},ae0e:function(A,e){A.exports="data:image/png;base64,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"},b9d4:function(A,e,t){var a=t("acb2");"string"===typeof a&&(a=[[A.i,a,""]]),a.locals&&(A.exports=a.locals);var n=t("4f06").default;n("d815fc58",a,!0,{sourceMap:!1,shadowMode:!1})},bf76:function(A,e,t){"use strict";var a=t("b9d4"),n=t.n(a);n.a},f909:function(A,e,t){"use strict";t.r(e);var a=t("2bca"),n=t("562a");for(var i in n)"default"!==i&&function(A){t.d(e,A,(function(){return n[A]}))}(i);t("bf76");var s,o=t("f0c5"),r=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"6a656c2a",null,!1,a["a"],s);e["default"]=r.exports}}]);