"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var throttle=_interopDefault(require("lodash.throttle")),debounce=_interopDefault(require("lodash.debounce")),callback=function e(){};function containsAOSNode(e){var t=void 0,o=void 0,n=void 0;for(t=0;t<e.length;t+=1)if((o=e[t]).dataset&&o.dataset.aos||(n=o.children&&containsAOSNode(o.children)))return!0;return!1}function check(e){e&&e.forEach(function(e){var t=Array.prototype.slice.call(e.addedNodes),o=Array.prototype.slice.call(e.removedNodes);if(containsAOSNode(t.concat(o)))return callback()})}function getMutationObserver(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function isSupported(){return!!getMutationObserver()}function ready(e,t){var o=window.document,n=new(getMutationObserver())(check);callback=t,n.observe(o.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}var observer={isSupported:isSupported,ready:ready},classCallCheck=function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")},createClass=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},fullNameRe=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,prefixRe=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,fullNameMobileRe=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,prefixMobileRe=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;function ua(){return navigator.userAgent||navigator.vendor||window.opera||""}var Detector=function(){function e(){classCallCheck(this,e)}return createClass(e,[{key:"phone",value:function e(){var t=ua();return!!(fullNameRe.test(t)||prefixRe.test(t.substr(0,4)))}},{key:"mobile",value:function e(){var t=ua();return!!(fullNameMobileRe.test(t)||prefixMobileRe.test(t.substr(0,4)))}},{key:"tablet",value:function e(){return this.mobile()&&!this.phone()}},{key:"ie11",value:function e(){return"-ms-scroll-limit"in document.documentElement.style&&"-ms-ime-align"in document.documentElement.style}}]),e}(),detect=new Detector,addClasses=function e(t,o){return o&&o.forEach(function(e){return t.classList.add(e)})},removeClasses=function e(t,o){return o&&o.forEach(function(e){return t.classList.remove(e)})},fireEvent=function e(t,o){var n=void 0;return detect.ie11()?(n=document.createEvent("CustomEvent")).initCustomEvent(t,!0,!0,{detail:o}):n=new CustomEvent(t,{detail:o}),document.dispatchEvent(n)},applyClasses=function e(t,o){var n=t.options,a=t.position,i=t.node;t.data;var r=function e(){t.animated&&(removeClasses(i,n.animatedClassNames),fireEvent("aos:out",i),t.options.id&&fireEvent("aos:in:"+t.options.id,i),t.animated=!1)};n.mirror&&o>=a.out&&!n.once?r():o>=a.in?t.animated||(addClasses(i,n.animatedClassNames),fireEvent("aos:in",i),t.options.id&&fireEvent("aos:in:"+t.options.id,i),t.animated=!0):t.animated&&!n.once&&r()},handleScroll=function e(t){return t.forEach(function(e,t){return applyClasses(e,window.pageYOffset)})},offset=function e(t){for(var o=0,n=0;t&&!isNaN(t.offsetLeft)&&!isNaN(t.offsetTop);)o+=t.offsetLeft-("BODY"!=t.tagName?t.scrollLeft:0),n+=t.offsetTop-("BODY"!=t.tagName?t.scrollTop:0),t=t.offsetParent;return{top:n,left:o}},getInlineOption=function(e,t,o){var n=e.getAttribute("data-aos-"+t);if(void 0!==n){if("true"===n)return!0;if("false"===n)return!1}return n||o},getPositionIn=function e(t,o,n){var a=window.innerHeight,i=getInlineOption(t,"anchor"),r=getInlineOption(t,"anchor-placement"),s=Number(getInlineOption(t,"offset",r?0:o)),l=r||n,c=t;i&&document.querySelectorAll(i)&&(c=document.querySelectorAll(i)[0]);var d=offset(c).top-a;switch(l){case"top-bottom":break;case"center-bottom":d+=c.offsetHeight/2;break;case"bottom-bottom":d+=c.offsetHeight;break;case"top-center":d+=a/2;break;case"center-center":d+=a/2+c.offsetHeight/2;break;case"bottom-center":d+=a/2+c.offsetHeight;break;case"top-top":d+=a;break;case"bottom-top":d+=a+c.offsetHeight;break;case"center-top":d+=a+c.offsetHeight/2}return d+s},getPositionOut=function e(t,o){window.innerHeight;var n=getInlineOption(t,"anchor"),a=getInlineOption(t,"offset",o),i=t;return n&&document.querySelectorAll(n)&&(i=document.querySelectorAll(n)[0]),offset(i).top+i.offsetHeight-a},prepare=function e(t,o){return t.forEach(function(e,t){var n=getInlineOption(e.node,"mirror",o.mirror),a=getInlineOption(e.node,"once",o.once),i=getInlineOption(e.node,"id"),r=o.useClassNames&&e.node.getAttribute("data-aos"),s=[o.animatedClassName].concat(r?r.split(" "):[]).filter(function(e){return"string"==typeof e});o.initClassName&&e.node.classList.add(o.initClassName),e.position={in:getPositionIn(e.node,o.offset,o.anchorPlacement),out:n&&getPositionOut(e.node,o.offset)},e.options={once:a,mirror:n,animatedClassNames:s,id:i}}),t},elements=function(){var e=document.querySelectorAll("[data-aos]");return Array.prototype.map.call(e,function(e){return{node:e}})},$aosElements=[],initialized=!1,options={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,mirror:!1,anchorPlacement:"top-bottom",startEvent:"DOMContentLoaded",animatedClassName:"aos-animate",initClassName:"aos-init",useClassNames:!1,disableMutationObserver:!1,throttleDelay:99,debounceDelay:50},isBrowserNotSupported=function e(){return document.all&&!window.atob},initializeScroll=function e(){return $aosElements=prepare($aosElements,options),handleScroll($aosElements),window.addEventListener("scroll",throttle(function(){handleScroll($aosElements,options.once)},options.throttleDelay)),$aosElements},refresh=function e(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];t&&(initialized=!0),initialized&&initializeScroll()},refreshHard=function e(){if($aosElements=elements(),isDisabled(options.disable)||isBrowserNotSupported())return disable();refresh()},disable=function e(){$aosElements.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay"),options.initClassName&&e.node.classList.remove(options.initClassName),options.animatedClassName&&e.node.classList.remove(options.animatedClassName)})},isDisabled=function e(t){return!0===t||"mobile"===t&&detect.mobile()||"phone"===t&&detect.phone()||"tablet"===t&&detect.tablet()||"function"==typeof t&&!0===t()},init=function e(t){return(options=_extends(options,t),$aosElements=elements(),options.disableMutationObserver||observer.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),options.disableMutationObserver=!0),options.disableMutationObserver||observer.ready("[data-aos]",refreshHard),isDisabled(options.disable)||isBrowserNotSupported())?disable():(document.querySelector("body").setAttribute("data-aos-easing",options.easing),document.querySelector("body").setAttribute("data-aos-duration",options.duration),document.querySelector("body").setAttribute("data-aos-delay",options.delay),-1===["DOMContentLoaded","load"].indexOf(options.startEvent)?document.addEventListener(options.startEvent,function(){refresh(!0)}):window.addEventListener("load",function(){refresh(!0)}),"DOMContentLoaded"===options.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1&&refresh(!0),window.addEventListener("resize",debounce(refresh,options.debounceDelay,!0)),window.addEventListener("orientationchange",debounce(refresh,options.debounceDelay,!0)),$aosElements)},aos={init:init,refresh:refresh,refreshHard:refreshHard};module.exports=aos;