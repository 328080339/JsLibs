/*! 作者:阿伟 */
/*! git:https://github.com/aweiu/JsLibs.git */
/*! 推荐sealoader模块加载器:https://aweiu.com/documents/sealoader/ */
/*! 最后修改于 2016-04-18 11:35:42 */
define(function(require,exports,module){var obj,objbc,objc,timer;exports.start=function(a,b){obj=a,obj.disabled=!0,objbc=obj.style.backgroundColor,objc=obj.style.color;var c=null==b?60:b;obj.style.backgroundColor="#f4f4f4",obj.style.color="#999999";var d=obj.getBoundingClientRect();obj.style.width=d.right-d.left+"px",obj.innerHTML=c+"s",timer=setInterval(function(){obj.innerHTML=--c+"s",0>=c&&exports.stop()},1e3)},exports.stop=function(){clearInterval(timer),obj.disabled=!1,obj.style.backgroundColor=objbc,obj.style.color=objc,obj.innerHTML="重新获取"},exports.newInstance=function(fuc){return function(){return fuc+="",-1==fuc.indexOf("\nexports=this;")&&(fuc=("0,("+fuc+")").replace("{","{\nexports=this;")),new(eval(fuc))(require,exports,module)}}(arguments.callee)});
