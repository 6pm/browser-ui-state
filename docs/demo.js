!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=18)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(1),u=r(a),c=n(2),l=r(c),s=n(7),f=r(s),d=function(){function e(t,n,r,i){o(this,e),this._screenObj=t,this._windowObj=n,this._thresholds=r,this._userAgentObj=i,this._deviceOrientationDetector=new f.default(t,n)}return i(e,[{key:"isIphoneX",value:function(){return/iPhone/i.test(this._userAgentObj)&&812===this._screenObj.height}},{key:"orientation",get:function(){return this._deviceOrientationDetector.orientation}},{key:"screenAspectRatio",get:function(){var e=this._screenObj,t=e.width,n=e.height;return Math.max(t,n)/Math.min(t,n)}},{key:"viewportAspectRatio",get:function(){var e=this._deviceOrientationDetector.orientation,t=this._windowObj,n=t.innerWidth,r=t.innerHeight;return(e===s.Orientation.LANDSCAPE?this.viewportWidthAdjustedIfNeeded:r)/(e===s.Orientation.PORTRAIT?n:r)}},{key:"delta",get:function(){return Math.abs(this.screenAspectRatio-this.viewportAspectRatio)}},{key:"deviation",get:function(){return this.delta/this.screenAspectRatio*100}},{key:"collapsedThreshold",get:function(){return this._thresholds[this._deviceOrientationDetector.orientation.toLowerCase()].collapsed}},{key:"keyboardThreshold",get:function(){return this._thresholds[this._deviceOrientationDetector.orientation.toLowerCase()].keyboard}},{key:"state",get:function(){var e=this.deviation,t=l.default.EXPANDED;return u.default.fullscreenElement?t=l.default.HTML5_FULLSCREEN:e>this.keyboardThreshold?t=l.default.KEYBOARD:e>this.collapsedThreshold&&(t=l.default.COLLAPSED),t}},{key:"viewportWidthAdjustedIfNeeded",get:function(){return this.isIphoneX()?this._screenObj.height:this._windowObj.innerWidth}}]),e}();t.default=d},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={fullscreenEnabled:0,fullscreenElement:1,requestFullscreen:2,exitFullscreen:3,fullscreenchange:4,fullscreenerror:5},o=["webkitFullscreenEnabled","webkitFullscreenElement","webkitRequestFullscreen","webkitExitFullscreen","webkitfullscreenchange","webkitfullscreenerror"],i=["mozFullScreenEnabled","mozFullScreenElement","mozRequestFullScreen","mozCancelFullScreen","mozfullscreenchange","mozfullscreenerror"],a=["msFullscreenEnabled","msFullscreenElement","msRequestFullscreen","msExitFullscreen","MSFullscreenChange","MSFullscreenError"],u="undefined"!=typeof window&&void 0!==window.document?window.document:{},c="fullscreenEnabled"in u&&Object.keys(r)||o[0]in u&&o||i[0]in u&&i||a[0]in u&&a||[];t.default={requestFullscreen:function(e){return e[c[r.requestFullscreen]]()},requestFullscreenFunction:function(e){return e[c[r.requestFullscreen]]},get exitFullscreen(){return u[c[r.exitFullscreen]].bind(u)},addEventListener:function(e,t,n){return u.addEventListener(c[r[e]],t,n)},removeEventListener:function(e,t,n){return u.removeEventListener(c[r[e]],t,n)},get fullscreenEnabled(){return Boolean(u[c[r.fullscreenEnabled]])},set fullscreenEnabled(e){},get fullscreenElement(){return u[c[r.fullscreenElement]]},set fullscreenElement(e){},get onfullscreenchange(){return u[("on"+c[r.fullscreenchange]).toLowerCase()]},set onfullscreenchange(e){return u[("on"+c[r.fullscreenchange]).toLowerCase()]=e},get onfullscreenerror(){return u[("on"+c[r.fullscreenerror]).toLowerCase()]},set onfullscreenerror(e){return u[("on"+c[r.fullscreenerror]).toLowerCase()]=e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={COLLAPSED:"COLLAPSED",EXPANDED:"EXPANDED",KEYBOARD:"KEYBOARD",HTML5_FULLSCREEN:"HTML5_FULLSCREEN",DESKTOP_EXPANDED:"DESKTOP_EXPANDED",DESKTOP_HTML5_FULLSCREEN:"DESKTOP_HTML5_FULLSCREEN",STATIC:"STATIC",UNKNOWN:"UNKNOWN"}},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=t.Devices={SAMSUNG_GALAXY_NOTE_5:"SAMSUNG_GALAXY_NOTE_5",SAMSUNG_GALAXY_NOTE_EDGE:"SAMSUNG_GALAXY_NOTE_EDGE",SAMSUNG_GALAXY_TAB_4_10_1:"SAMSUNG_GALAXY_TAB_4_10_1",SAMSUNG_GALAXY_TAB_3_10_1:"SAMSUNG_GALAXY_TAB_3_10_1",SAMSUNG_GALAXY_S8:"SAMSUNG_GALAXY_S8",SAMSUNG_GALAXY_S4:"SAMSUNG_GALAXY_S4",GOOGLE_PIXEL:"GOOGLE_PIXEL",LENOVO_A889:"LENOVO_A889"},a={SAMSUNG_GALAXY_NOTE_5:/(?:N920)/i,SAMSUNG_GALAXY_NOTE_EDGE:/(?:N915)/i,SAMSUNG_GALAXY_TAB_4_10_1:/(?:SM-T53)/i,SAMSUNG_GALAXY_TAB_3_10_1:/(?:GT-P52)/i,SAMSUNG_GALAXY_S8:/(?:G950)/i,SAMSUNG_GALAXY_S4:/(?:GT-I95|SHV-E300)/i,GOOGLE_PIXEL:/(?:Pixel Build)/i,LENOVO_A889:/(?:A889)/i},u=function(){function e(t){r(this,e),this._detectedDevice=null;for(var n in a)if(a[n].test(t)){this._detectedDevice=i[n];break}}return o(e,[{key:"device",get:function(){return console.debug("DeviceDetector.device = "+this._detectedDevice),this._detectedDevice}}]),e}();t.default=u},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(5),u=r(a),c=n(6),l=r(c),s=n(8),f=r(s),d=n(9),p=r(d),_=n(10),b=r(_),h=n(11),y=r(h),O=n(12),w=r(O),E=n(13),A=r(E),v=n(14),S=r(v),g=n(15),P=r(g),R=n(16),j=r(R),m=n(17),N=r(m),k=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.navigator.userAgent,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:screen,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window;switch(o(this,e),this._userAgentDetector=new u.default(t),this._userAgentDetector.userAgent){case a.UserAgents.CHROME_ANDROID:this._provider=new l.default(t,n,r);break;case a.UserAgents.CHROME_IOS:this._provider=new f.default(t,n,r);break;case a.UserAgents.SAFARI_IPHONE:this._provider=new p.default(t,n,r);break;case a.UserAgents.SAFARI_IPAD:this._provider=new b.default(t,n,r);break;case a.UserAgents.SAMSUNG_BROWSER:this._provider=new y.default(t,n,r);break;case a.UserAgents.UC_BROWSER_EN_ANDROID:this._provider=new S.default(t,n,r);break;case a.UserAgents.UC_BROWSER_CN_ANDROID:this._provider=new P.default(t,n,r);break;case a.UserAgents.UC_BROWSER_EN_IOS:this._provider=new j.default(t,n,r);break;case a.UserAgents.DU_BROWSER:case a.UserAgents.OPERA_MINI_IPAD:this._provider=new N.default(t,n,r);break;case a.UserAgents.DESKTOP:this._provider=new w.default(t,n,r);break;default:this._provider=new A.default(t,n,r)}}return i(e,[{key:"orientation",get:function(){return this._provider.orientation}},{key:"screenAspectRatio",get:function(){return this._provider.screenAspectRatio}},{key:"viewportAspectRatio",get:function(){return this._provider.viewportAspectRatio}},{key:"delta",get:function(){return this._provider.delta}},{key:"deviation",get:function(){return this._provider.deviation}},{key:"collapsedThreshold",get:function(){return this._provider.collapsedThreshold}},{key:"keyboardThreshold",get:function(){return this._provider.keyboardThreshold}},{key:"state",get:function(){return this._provider.state}}]),e}();t.default=k},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=t.UserAgents={SAMSUNG_BROWSER:"SAMSUNG_BROWSER",CHROME_ANDROID:"CHROME_ANDROID",CHROME_IOS:"CHROME_IOS",SAFARI_IPHONE:"SAFARI_IPHONE",SAFARI_IPAD:"SAFARI_IPAD",UC_BROWSER_EN_ANDROID:"UC_BROWSER_EN_ANDROID",UC_BROWSER_CN_ANDROID:"UC_BROWSER_CN_ANDROID",UC_BROWSER_EN_IOS:"UC_BROWSER_EN_IOS",DU_BROWSER:"DU_BROWSER",OPERA_MINI_IPAD:"OPERA_MINI_IPAD",DESKTOP:"DESKTOP"},a={SAMSUNG_BROWSER:/(?:Android.+SamsungBrowser)/i,CHROME_ANDROID:/(?:Android(?!.+(?:SamsungBrowser|Version)).+Chrome)(?!.+(?:Edge|UCBrowser|UBrowser|Opera|OPR|MQQBrowser|YaBrowser|baidubrowser|bdbrowser|360 Aphone Browser))/i,CHROME_IOS:/(?:iPhone|iPod|iPad).+(?:Chrome|CriOS|CrMo)/i,SAFARI_IPHONE:/(?:iPhone|iPod).+(?:Version\/)/i,SAFARI_IPAD:/(?:iPad).+(?:Version\/)/i,UC_BROWSER_EN_ANDROID:/Android.+(?!zh-CN).+(?:UCBrowser|UBrowser)/i,UC_BROWSER_CN_ANDROID:/Android.+(?:zh-CN).+(?:UCBrowser|UBrowser)/i,UC_BROWSER_EN_IOS:/(?:(iPhone|iPod|iPad).+en-.+(?:UCBrowser|UBrowser))/i,DU_BROWSER:/bdbrowser/i,OPERA_MINI_IPAD:/.+iPad(?!.+Safari)/i,DESKTOP:/(?:Mozilla|Opera)(?!.+(?:Android|iPhone|iPod|iPad))/i},u=function(){function e(t){r(this,e),this._detectedDevice=null;for(var n in a)if(a[n].test(t)){this._detectedDevice=i[n];break}}return o(e,[{key:"userAgent",get:function(){return console.debug("UserAgentDetector.userAgent = "+this._detectedDevice),this._detectedDevice}}]),e}();t.default=u},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=n(0),c=r(u),l=n(3),s=r(l),f=function(e){function t(e,n,r){o(this,t);var a={landscape:{collapsed:14.75,keyboard:49.4},portrait:{collapsed:11.5,keyboard:30.2}};switch(new s.default(e).device){case l.Devices.SAMSUNG_GALAXY_TAB_3_10_1:case l.Devices.SAMSUNG_GALAXY_TAB_4_10_1:case l.Devices.SAMSUNG_GALAXY_NOTE_5:case l.Devices.SAMSUNG_GALAXY_NOTE_EDGE:a={landscape:{collapsed:12.15,keyboard:33.6},portrait:{collapsed:6.1,keyboard:21.2}};break;case l.Devices.GOOGLE_PIXEL:a={landscape:{collapsed:7,keyboard:31.9},portrait:{collapsed:14.05,keyboard:32.5}};break;case l.Devices.SAMSUNG_GALAXY_S8:a={landscape:{collapsed:13.45,keyboard:38.5},portrait:{collapsed:10.45,keyboard:27.5}}}return i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n,r,a))}return a(t,e),t}(c.default);t.default=f},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=t.Orientation={LANDSCAPE:"LANDSCAPE",PORTRAIT:"PORTRAIT"},a=function(){function e(t,n){r(this,e),this._screenObj=t,this._windowObj=n}return o(e,[{key:"orientation",get:function(){var e=screen.orientation?screen.orientation.type:null;return e?-1!=e.indexOf(i.LANDSCAPE.toLowerCase())?i.LANDSCAPE:i.PORTRAIT:this._windowObj.innerWidth>this._windowObj.innerHeight?i.LANDSCAPE:i.PORTRAIT}}]),e}();t.default=a},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),u=function(e){return e&&e.__esModule?e:{default:e}}(a),c=function(e){function t(e,n,i){r(this,t);var a={landscape:{collapsed:9.75,keyboard:41.3},portrait:{collapsed:6.15,keyboard:26}};return o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n,i,a))}return i(t,e),t}(u.default);t.default=c},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),u=function(e){return e&&e.__esModule?e:{default:e}}(a),c=function(e){function t(e,n,i){r(this,t);var a={landscape:{collapsed:6.75,keyboard:48},portrait:{collapsed:12.5,keyboard:32.7}};return o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n,i,a,e))}return i(t,e),t}(u.default);t.default=c},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),u=function(e){return e&&e.__esModule?e:{default:e}}(a),c=function(e){function t(e,n,i){r(this,t);var a={landscape:{collapsed:6.4,keyboard:19},portrait:{collapsed:4.15,keyboard:16}};return o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n,i,a))}return i(t,e),t}(u.default);t.default=c},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=n(0),c=r(u),l=n(3),s=r(l),f=function(e){function t(e,n,r){o(this,t);var a={landscape:{collapsed:19.2,keyboard:65.6},portrait:{collapsed:11.9,keyboard:33.8}};switch(new s.default(e).device){case l.Devices.SAMSUNG_GALAXY_NOTE_EDGE:a={landscape:{collapsed:12.4,keyboard:38},portrait:{collapsed:13.7,keyboard:30.7}}}return i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n,r,a))}return a(t,e),t}(c.default);t.default=f},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(1),l=r(c),s=n(0),f=r(s),d=n(2),p=r(d),_=function(e){function t(e,n,r){o(this,t);var a={landscape:{collapsed:null,keyboard:null},portrait:{collapsed:null,keyboard:null}};return i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n,r,a))}return a(t,e),u(t,[{key:"state",get:function(){return l.default.fullscreenElement?p.default.DESKTOP_HTML5_FULLSCREEN:p.default.DESKTOP_EXPANDED}}]),t}(f.default);t.default=_},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(1),l=r(c),s=n(0),f=r(s),d=n(2),p=r(d),_=function(e){function t(e,n,r){o(this,t);var a={landscape:{collapsed:null,keyboard:null},portrait:{collapsed:null,keyboard:null}};return i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n,r,a))}return a(t,e),u(t,[{key:"state",get:function(){return l.default.fullscreenElement?p.default.HTML5_FULLSCREEN:p.default.UNKNOWN}}]),t}(f.default);t.default=_},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=n(0),c=r(u),l=n(3),s=r(l),f=function(e){function t(e,n,r){o(this,t);var a={landscape:{collapsed:5.75,keyboard:25.5},portrait:{collapsed:6.55,keyboard:19.4}};switch(new s.default(e).device){case l.Devices.LENOVO_A889:case l.Devices.SAMSUNG_GALAXY_NOTE_5:case l.Devices.SAMSUNG_GALAXY_S4:a={landscape:{collapsed:11.3,keyboard:38},portrait:{collapsed:12.85,keyboard:30.7}}}return i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n,r,a))}return a(t,e),t}(c.default);t.default=f},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),u=function(e){return e&&e.__esModule?e:{default:e}}(a),c=function(e){function t(e,n,i){r(this,t);var a={landscape:{collapsed:30,keyboard:51.6},portrait:{collapsed:13,keyboard:26.9}};return o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n,i,a))}return i(t,e),t}(u.default);t.default=c},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),u=function(e){return e&&e.__esModule?e:{default:e}}(a),c=function(e){function t(e,n,i){r(this,t);var a={landscape:{collapsed:30.3,keyboard:50.4},portrait:{collapsed:12.95,keyboard:26.3}};return o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n,i,a))}return i(t,e),t}(u.default);t.default=c},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(1),l=r(c),s=n(0),f=r(s),d=n(2),p=r(d),_=function(e){function t(e,n,r){o(this,t);var a={landscape:{collapsed:null,keyboard:null},portrait:{collapsed:null,keyboard:null}};return i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n,r,a))}return a(t,e),u(t,[{key:"state",get:function(){return l.default.fullscreenElement?p.default.HTML5_FULLSCREEN:p.default.STATIC}}]),t}(f.default);t.default=_},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(1),u=r(a),c=n(4),l=r(c),s=function(){function e(){var t=this;o(this,e),this.browserUiState=new l.default,window.addEventListener("load",function(){t.updateUi(),document.getElementById("html5FullscreenBtn").addEventListener("click",function(e){return u.default.fullscreenElement?u.default.exitFullscreen():u.default.requestFullscreen(document.documentElement)}),document.getElementById("refresh").addEventListener("click",function(e){return t.updateUi()}),document.getElementById("refresh2").addEventListener("click",function(e){return t.updateUi()})});var n=function(){t.updateUi(),t.safeRun(t.updateUi.bind(t))};window.addEventListener("resize",n),window.addEventListener("orientationchange",n)}return i(e,[{key:"safeRun",value:function(e){setTimeout(e,300)}},{key:"write",value:function(e,t){document.getElementById(e).innerText=t}},{key:"updateUi",value:function(){var e=this.write,t=window.devicePixelRatio,n=screen.width+"x"+screen.height,r=window.innerWidth+"x"+window.innerHeight,o=screen.orientation?screen.orientation.angle:"-",i=screen.orientation?screen.orientation.type:"-",a=u.default.fullscreenEnabled+" ( "+document.fullscreenEnabled+" )",c=!!u.default.fullscreenElement,l=this.browserUiState.orientation,s=this.browserUiState.screenAspectRatio.toFixed(2),f=this.browserUiState.viewportAspectRatio.toFixed(2),d=this.browserUiState.delta.toFixed(2),p=this.browserUiState.deviation.toFixed(2)+"%",_=this.browserUiState.collapsedThreshold?this.browserUiState.collapsedThreshold+"%":"null",b=this.browserUiState.keyboardThreshold?this.browserUiState.keyboardThreshold+"%":"null",h=this.browserUiState.state;document.getElementById("html5FullscreenBtn").disabled=!u.default.fullscreenEnabled,e("allReadings",t+" / "+n+" / "+r+" / "+o+" / "+i+" / "+a+" / "+c+" / "+p+" / "+h),e("userAgent",window.navigator.userAgent),e("dpr",t),e("sWH",n),e("wWH",r),e("screenAngle",o),e("screenType",i),e("html5FullscreenIsAvailable",a),e("html5FullscreenIsOn",c),e("orientation",l),e("screenAspectRatio",s),e("viewportAspectRatio",f),e("delta",d),e("deviation",p),e("collapsedThreshold",_),e("keyboardThreshold",b),e("state",h)}},{key:"_encodeEmailCorrectly",value:function(e){return/(?:baidubrowser|bdbrowser)/i.test(navigator.userAgent)?encodeURIComponent(e):encodeURI(e)}},{key:"_generateMailToLink",value:function(){document.getElementById("mailToLink").addEventListener("click",function(){var e=(prompt("Please enter your device model",""),"");for(var t in window.navigator)window.navigator[t]instanceof Function||window.navigator[t]instanceof Object||(e+="navigator. "+t+" : "+window.navigator[t]+" \n");var n=screen.orientation?screen.orientation.angle:"-",r=screen.orientation?screen.orientation.type:"-",o="subject=[Browser UI State]&body="+navigator.userAgent+"\n                screen.width x height : "+screen.width+" x "+screen.height+"\n                window.innerWidth x innerHeight : "+window.innerWidth+" x "+window.innerHeight+"\n                window.devicePixelRatio : "+window.devicePixelRatio+"\n                window.navigator.standalone : "+window.navigator.standalone+"\n                window.orientation : "+window.orientation+"\n                screen.orientation.angle : "+n+"\n                screen.orientation.type : "+r+"\n                document.fullscreenEnabled : "+document.fullscreenEnabled+"\n                document.webkitFullscreenEnabled : "+document.webkitFullscreenEnabled+"\n                document.mozFullScreenEnabled : "+document.mozFullScreenEnabled+"\n                document.msFullscreenEnabled : "+document.msFullscreenEnabled+" \n\n                "+e;document.getElementById("mailToLink").href="mailto:thebit@ukr.net? "+this._encodeEmailCorrectly(o)})}}]),e}();t.default=new s}]);