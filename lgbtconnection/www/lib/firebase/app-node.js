/*! @license Firebase v3.7.2
    Build: 3.7.2-rc.1
    Terms: https://firebase.google.com/terms/ */
var firebase = (function() { var l="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(c.get||c.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},m="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,p=function(){p=function(){};m.Symbol||(m.Symbol=q)},r=0,q=function(a){return"jscomp_symbol_"+(a||"")+r++},u=function(){p();var a=m.Symbol.iterator;a||(a=m.Symbol.iterator=m.Symbol("iterator"));
"function"!=typeof Array.prototype[a]&&l(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return t(this)}});u=function(){}},t=function(a){var b=0;return v(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})},v=function(a){u();a={next:a};a[m.Symbol.iterator]=function(){return this};return a},w=function(a){u();var b=a[Symbol.iterator];return b?b.call(a):t(a)},x=function(a,b){if(b){var c=m;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];e in c||(c[e]={});c=c[e]}a=a[a.length-
1];d=c[a];b=b(d);b!=d&&null!=b&&l(c,a,{configurable:!0,writable:!0,value:b})}};x("Object.assign",function(a){return a?a:function(a,c){for(var b=1;b<arguments.length;b++){var e=arguments[b];if(e)for(var g in e)Object.prototype.hasOwnProperty.call(e,g)&&(a[g]=e[g])}return a}});
x("Promise",function(a){function b(){this.c=null}if(a)return a;b.prototype.A=function(a){null==this.c&&(this.c=[],this.M());this.c.push(a)};b.prototype.M=function(){var a=this;this.B(function(){a.R()})};var c=m.setTimeout;b.prototype.B=function(a){c(a,0)};b.prototype.R=function(){for(;this.c&&this.c.length;){var a=this.c;this.c=[];for(var b=0;b<a.length;++b){var c=a[b];delete a[b];try{c()}catch(k){this.N(k)}}}this.c=null};b.prototype.N=function(a){this.B(function(){throw a;})};var d=function(a){this.g=
0;this.v=void 0;this.f=[];var b=this.j();try{a(b.resolve,b.reject)}catch(f){b.reject(f)}};d.prototype.j=function(){function a(a){return function(d){c||(c=!0,a.call(b,d))}}var b=this,c=!1;return{resolve:a(this.W),reject:a(this.u)}};d.prototype.W=function(a){if(a===this)this.u(new TypeError("A Promise cannot resolve to itself"));else if(a instanceof d)this.Z(a);else{var b;a:switch(typeof a){case "object":b=null!=a;break a;case "function":b=!0;break a;default:b=!1}b?this.V(a):this.G(a)}};d.prototype.V=
function(a){var b=void 0;try{b=a.then}catch(f){this.u(f);return}"function"==typeof b?this.$(b,a):this.G(a)};d.prototype.u=function(a){this.J(2,a)};d.prototype.G=function(a){this.J(1,a)};d.prototype.J=function(a,b){if(0!=this.g)throw Error("Cannot settle("+a+", "+b|"): Promise already settled in state"+this.g);this.g=a;this.v=b;this.S()};d.prototype.S=function(){if(null!=this.f){for(var a=this.f,b=0;b<a.length;++b)a[b].call(),a[b]=null;this.f=null}};var e=new b;d.prototype.Z=function(a){var b=this.j();
a.h(b.resolve,b.reject)};d.prototype.$=function(a,b){var c=this.j();try{a.call(b,c.resolve,c.reject)}catch(k){c.reject(k)}};d.prototype.then=function(a,b){function c(a,b){return"function"==typeof a?function(b){try{k(a(b))}catch(R){e(R)}}:b}var k,e,g=new d(function(a,b){k=a;e=b});this.h(c(a,k),c(b,e));return g};d.prototype.catch=function(a){return this.then(void 0,a)};d.prototype.h=function(a,b){function c(){switch(d.g){case 1:a(d.v);break;case 2:b(d.v);break;default:throw Error("Unexpected state: "+
d.g);}}var d=this;null==this.f?e.A(c):this.f.push(function(){e.A(c)})};d.resolve=function(a){return a instanceof d?a:new d(function(b){b(a)})};d.reject=function(a){return new d(function(b,c){c(a)})};d.race=function(a){return new d(function(b,c){for(var f=w(a),e=f.next();!e.done;e=f.next())d.resolve(e.value).h(b,c)})};d.all=function(a){var b=w(a),c=b.next();return c.done?d.resolve([]):new d(function(a,e){function f(b){return function(c){k[b]=c;g--;0==g&&a(k)}}var k=[],g=0;do k.push(void 0),g++,d.resolve(c.value).h(f(k.length-
1),e),c=b.next();while(!c.done)})};d.$jscomp$new$AsyncExecutor=function(){return new b};return d});var y;y="undefined"!==typeof window?window:"undefined"!==typeof self?self:global;
var __extends=function(a,b){function c(){this.constructor=a}for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d]);a.prototype=null===b?Object.create(b):(c.prototype=b.prototype,new c)},__assign=Object.assign||function(a){for(var b,c=1,d=arguments.length;c<d;c++){b=arguments[c];for(var e in b)Object.prototype.hasOwnProperty.call(b,e)&&(a[e]=b[e])}return a},__rest=function(a,b){var c={},d;for(d in a)Object.prototype.hasOwnProperty.call(a,d)&&0>b.indexOf(d)&&(c[d]=a[d]);if(null!=a&&"function"===typeof Object.getOwnPropertySymbols){var e=
0;for(d=Object.getOwnPropertySymbols(a);e<d.length;e++)0>b.indexOf(d[e])&&(c[d[e]]=a[d[e]])}return c},__decorate=function(a,b,c,d){var e=arguments.length,g=3>e?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d,h;h=y.Reflect;if("object"===typeof h&&"function"===typeof h.decorate)g=h.decorate(a,b,c,d);else for(var f=a.length-1;0<=f;f--)if(h=a[f])g=(3>e?h(g):3<e?h(b,c,g):h(b,c))||g;return 3<e&&g&&Object.defineProperty(b,c,g),g},__metadata=function(a,b){var c=y.Reflect;if("object"===typeof c&&"function"===
typeof c.metadata)return c.metadata(a,b)},__param=function(a,b){return function(c,d){b(c,d,a)}},__awaiter=function(a,b,c,d){return new (c||(c=Promise))(function(e,g){function h(a){try{k(d.next(a))}catch(n){g(n)}}function f(a){try{k(d["throw"](a))}catch(n){g(n)}}function k(a){a.done?e(a.value):(new c(function(b){b(a.value)})).then(h,f)}k((d=d.apply(a,b)).next())})},__generator=function(a,b){function c(a){return function(b){return d([a,b])}}function d(c){if(g)throw new TypeError("Generator is already executing.");
for(;e;)try{if(g=1,h&&(f=h[c[0]&2?"return":c[0]?"throw":"next"])&&!(f=f.call(h,c[1])).done)return f;if(h=0,f)c=[0,f.value];switch(c[0]){case 0:case 1:f=c;break;case 4:return e.label++,{value:c[1],done:!1};case 5:e.label++;h=c[1];c=[0];continue;case 7:c=e.o.pop();e.w.pop();continue;default:if(!(f=e.w,f=0<f.length&&f[f.length-1])&&(6===c[0]||2===c[0])){e=0;continue}if(3===c[0]&&(!f||c[1]>f[0]&&c[1]<f[3]))e.label=c[1];else if(6===c[0]&&e.label<f[1])e.label=f[1],f=c;else if(f&&e.label<f[2])e.label=f[2],
e.o.push(c);else{f[2]&&e.o.pop();e.w.pop();continue}}c=b.call(a,e)}catch(P){c=[6,P],h=0}finally{g=f=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}var e={label:0,ba:function(){if(f[0]&1)throw f[1];return f[1]},w:[],o:[]},g,h,f;return{next:c(0),"throw":c(1),"return":c(2)}};
"undefined"!==typeof y.K&&y.K||(y.__extends=__extends,y.__assign=__assign,y.__rest=__rest,y.__extends=__extends,y.__decorate=__decorate,y.__metadata=__metadata,y.__param=__param,y.__awaiter=__awaiter,y.__generator=__generator);function z(a,b){if(!(b instanceof Object))return b;switch(b.constructor){case Date:return new Date(b.getTime());case Object:void 0===a&&(a={});break;case Array:a=[];break;default:return b}for(var c in b)b.hasOwnProperty(c)&&(a[c]=z(a[c],b[c]));return a};var A="undefined"!==typeof Promise?Promise:require("rsvp").Promise;function B(a,b){a=new C(a,b);return a.subscribe.bind(a)}var C=function(a,b){var c=this;this.a=[];this.I=0;this.task=A.resolve();this.i=!1;this.m=b;this.task.then(function(){a(c)}).catch(function(a){c.error(a)})};C.prototype.next=function(a){D(this,function(b){b.next(a)})};C.prototype.error=function(a){D(this,function(b){b.error(a)});this.close(a)};C.prototype.complete=function(){D(this,function(a){a.complete()});this.close()};
C.prototype.subscribe=function(a,b,c){var d=this,e;if(void 0===a&&void 0===b&&void 0===c)throw Error("Missing Observer.");e=E(a)?a:{next:a,error:b,complete:c};void 0===e.next&&(e.next=F);void 0===e.error&&(e.error=F);void 0===e.complete&&(e.complete=F);a=this.aa.bind(this,this.a.length);this.i&&this.task.then(function(){try{d.D?e.error(d.D):e.complete()}catch(g){}});this.a.push(e);return a};
C.prototype.aa=function(a){void 0!==this.a&&void 0!==this.a[a]&&(delete this.a[a],--this.I,0===this.I&&void 0!==this.m&&this.m(this))};var D=function(a,b){if(!a.i)for(var c=0;c<a.a.length;c++)G(a,c,b)},G=function(a,b,c){a.task.then(function(){if(void 0!==a.a&&void 0!==a.a[b])try{c(a.a[b])}catch(d){"undefined"!==typeof console&&console.error&&console.error(d)}})};C.prototype.close=function(a){var b=this;this.i||(this.i=!0,void 0!==a&&(this.D=a),this.task.then(function(){b.a=void 0;b.m=void 0}))};
function E(a){if("object"!==typeof a||null===a)return!1;for(var b=w(["next","error","complete"]),c=b.next();!c.done;c=b.next())if(c=c.value,c in a&&"function"===typeof a[c])return!0;return!1}function F(){};var H=Error.captureStackTrace,J=function(a,b){this.code=a;this.message=b;if(H)H(this,I.prototype.create);else{var c=Error.apply(this,arguments);this.name="FirebaseError";Object.defineProperty(this,"stack",{get:function(){return c.stack}})}};J.prototype=Object.create(Error.prototype);J.prototype.constructor=J;J.prototype.name="FirebaseError";var I=function(a,b,c){this.X=a;this.Y=b;this.P=c;this.pattern=/\{\$([^}]+)}/g};
I.prototype.create=function(a,b){void 0===b&&(b={});var c=this.P[a];a=this.X+"/"+a;var c=void 0===c?"Error":c.replace(this.pattern,function(a,c){a=b[c];return void 0!==a?a.toString():"<"+c+"?>"}),c=this.Y+": "+c+" ("+a+").",c=new J(a,c),d;for(d in b)b.hasOwnProperty(d)&&"_"!==d.slice(-1)&&(c[d]=b[d]);return c};var K=function(a,b,c){var d=this;this.F=c;this.H=!1;this.b={};this.l=b;this.s=z(void 0,a);a="serviceAccount"in this.s;("credential"in this.s||a)&&"undefined"!==typeof console&&console.log("The '"+(a?"serviceAccount":"credential")+"' property specified in the first argument to initializeApp() is deprecated and will be removed in the next major version. You should instead use the 'firebase-admin' package. See https://firebase.google.com/docs/admin/setup for details on how to get started.");Object.keys(c.INTERNAL.factories).forEach(function(a){var b=
c.INTERNAL.useAsService(d,a);null!==b&&(b=d.U.bind(d,b),d[a]=b)})};K.prototype.delete=function(){var a=this;return(new A(function(b){L(a);b()})).then(function(){a.F.INTERNAL.removeApp(a.l);var b=[];Object.keys(a.b).forEach(function(c){Object.keys(a.b[c]).forEach(function(d){b.push(a.b[c][d])})});return A.all(b.map(function(a){return a.INTERNAL.delete()}))}).then(function(){a.H=!0;a.b={}})};
K.prototype.U=function(a,b){L(this);"undefined"===typeof this.b[a]&&(this.b[a]={});var c=b||"[DEFAULT]";return"undefined"===typeof this.b[a][c]?(b=this.F.INTERNAL.factories[a](this,this.T.bind(this),b),this.b[a][c]=b):this.b[a][c]};K.prototype.T=function(a){z(this,a)};var L=function(a){a.H&&M("app-deleted",{name:a.l})};m.Object.defineProperties(K.prototype,{name:{configurable:!0,enumerable:!0,get:function(){L(this);return this.l}},options:{configurable:!0,enumerable:!0,get:function(){L(this);return this.s}}});
K.prototype.name&&K.prototype.options||K.prototype.delete||console.log("dc");
function N(){function a(a){a=a||"[DEFAULT]";var b=d[a];void 0===b&&M("no-app",{name:a});return b}function b(a,b){Object.keys(e).forEach(function(d){d=c(a,d);if(null!==d&&g[d])g[d](b,a)})}function c(a,b){if("serverAuth"===b)return null;var c=b;a=a.options;"auth"===b&&(a.serviceAccount||a.credential)&&(c="serverAuth","serverAuth"in e||M("sa-not-supported"));return c}var d={},e={},g={},h={__esModule:!0,initializeApp:function(a,c){void 0===c?c="[DEFAULT]":"string"===typeof c&&""!==c||M("bad-app-name",
{name:c+""});void 0!==d[c]&&M("duplicate-app",{name:c});a=new K(a,c,h);d[c]=a;b(a,"create");void 0!=a.INTERNAL&&void 0!=a.INTERNAL.getToken||z(a,{INTERNAL:{getUid:function(){return null},getToken:function(){return A.resolve(null)},addAuthTokenListener:function(){},removeAuthTokenListener:function(){}}});return a},app:a,apps:null,Promise:A,SDK_VERSION:"0.0.0",INTERNAL:{registerService:function(b,c,d,n,Q){e[b]&&M("duplicate-service",{name:b});e[b]=Q?c:function(a,b){return c(a,b,"[DEFAULT]")};n&&(g[b]=
n);n=function(c){void 0===c&&(c=a());return c[b]()};void 0!==d&&z(n,d);return h[b]=n},createFirebaseNamespace:N,extendNamespace:function(a){z(h,a)},createSubscribe:B,ErrorFactory:I,removeApp:function(a){b(d[a],"delete");delete d[a]},factories:e,useAsService:c,Promise:void 0,deepExtend:z}};h["default"]=h;Object.defineProperty(h,"apps",{get:function(){return Object.keys(d).map(function(a){return d[a]})}});a.App=K;return h}function M(a,b){throw O.create(a,b);}
var O=new I("app","Firebase",{"no-app":"No Firebase App '{$name}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$name}","duplicate-app":"Firebase App named '{$name}' already exists","app-deleted":"Firebase App named '{$name}' already deleted","duplicate-service":"Firebase service named '{$name}' already registered","sa-not-supported":"Initializing the Firebase SDK with a service account is only allowed in a Node.js environment. On client devices, you should instead initialize the SDK with an api key and auth domain"});var S=N(),T=["$__firebase"],U=this;T[0]in U||!U.execScript||U.execScript("var "+T[0]);for(var V;T.length&&(V=T.shift());)T.length||void 0===S?U=U[V]&&U[V]!==Object.prototype[V]?U[V]:U[V]={}:U[V]=S; return $__firebase; })(); module.exports = firebase;
firebase.SDK_VERSION = "3.7.2";
