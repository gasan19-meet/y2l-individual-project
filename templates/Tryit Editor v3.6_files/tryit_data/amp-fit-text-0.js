(self.AMP=self.AMP||[]).push({n:"amp-fit-text",v:"1812261943070",f:(function(AMP,_){
var d="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},k;if("function"==typeof Object.setPrototypeOf)k=Object.setPrototypeOf;else{var l;a:{var m={a:!0},n={};try{n.__proto__=m;l=n.a;break a}catch(a){}l=!1}k=l?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var p=k;self.log=self.log||{user:null,dev:null,userForEmbed:null};var q,r="Webkit webkit Moz moz ms O o".split(" ");function u(a,b,c){var e;var g=a.style;if(2>b.length||0!=b.lastIndexOf("--",0)){q||(q=Object.create(null));var f=q[b];if(!f){f=b;if(void 0===g[b]){var h=b.charAt(0).toUpperCase()+b.slice(1);b:{for(var t=0;t<r.length;t++){var x=r[t]+h;if(void 0!==g[x]){h=x;break b}}h=""}void 0!==g[h]&&(f=h)}q[b]=f}b=f}b&&(a.style[b]=e?c+e:c)}function v(a,b){for(var c in b)u(a,c,b[c])};function w(a){var b=parseFloat(a);a=b;return"number"===typeof a&&isFinite(a)?b:void 0};function y(a){a=AMP.BaseElement.call(this,a)||this;a.h=null;a.c=null;a.j=null;a.m=-1;a.l=-1;return a}var z=AMP.BaseElement;y.prototype=d(z.prototype);y.prototype.constructor=y;if(p)p(y,z);else for(var A in z)if("prototype"!=A)if(Object.defineProperties){var B=Object.getOwnPropertyDescriptor(z,A);B&&Object.defineProperty(y,A,B)}else y[A]=z[A];y.o=z.prototype;
y.prototype.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a};
y.prototype.buildCallback=function(){var a=this;this.h=this.element.ownerDocument.createElement("div");this.applyFillContent(this.h);this.h.classList.add("i-amphtml-fit-text-content");v(this.h,{zIndex:2});this.c=this.element.ownerDocument.createElement("div");v(this.c,{lineHeight:"1.15em"});this.h.appendChild(this.c);this.j=this.element.ownerDocument.createElement("div");v(this.j,{position:"absolute",top:0,left:0,zIndex:1,visibility:"hidden",lineHeight:"1.15em"});this.getRealChildNodes().forEach(function(b){a.c.appendChild(b)});
this.j.innerHTML=this.c.innerHTML;this.element.appendChild(this.h);this.element.appendChild(this.j);this.m=w(this.element.getAttribute("min-font-size"))||6;this.l=w(this.element.getAttribute("max-font-size"))||72};y.prototype.prerenderAllowed=function(){return!0};y.prototype.isRelayoutNeeded=function(){return!0};
y.prototype.layoutCallback=function(){var a=this.element.offsetHeight,b=this.j,c=this.element.offsetWidth;var e=this.m;var g=this.l;for(g++;1<g-e;){var f=Math.floor((e+g)/2);u(b,"fontSize",f+"px");var h=b.offsetWidth;b.offsetHeight>a||h>c?g=f:e=f}u(this.c,"fontSize",e+"px");b=this.c;c=this.j;u(c,"fontSize",e+"px");c=c.offsetHeight>a;e*=1.15;a=Math.floor(a/e);b.classList.toggle("i-amphtml-fit-text-content-overflown",c);v(b,{lineClamp:c?a:"",maxHeight:c?e*a+"px":""});return Promise.resolve()};
(function(a){a.registerElement("amp-fit-text",y,".i-amphtml-fit-text-content,.i-amphtml-fit-text-content.i-amphtml-fill-content{display:block;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.i-amphtml-fit-text-content-overflown{display:block;display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden}\n/*# sourceURL=/extensions/amp-fit-text/0.1/amp-fit-text.css*/")})(self.AMP);
})});
//# sourceMappingURL=amp-fit-text-0.1.js.map

