
var Browser={/**Browser对象用于检测浏览器，其中用到了IE的条件编译*/

isFF:window.navigator.appName.toUpperCase().indexOf("NETSCAPE")!=-1?true:false,     

isOpera:window.navigator.appName.toUpperCase().indexOf("OPERA")!=-1?true:false

};

 

Function.prototype.bind=function(object){     

var _this=this;     

return function(){         

_this.apply(object,arguments);     

}

}

 

function HttpRequest(){     

this.async=true;     

this.cache=false;     

this.xmlhttp=function(){         

if(Browser.isFF&&window.XMLHttpRequest){             

try{                 

return new XMLHttpRequest();

}catch(e){}         

}else if(Browser.isIE&&window.ActiveXObject){             

var Version = ["Msxml2.XMLHTTP.6.0","Msxml2.XMLHTTP.5.0","Msxml2.XMLHTTP.4.0","Msxml2.XMLHTTP.3.0",

"Msxml2.XMLHTTP.2.6","Msxml2.XMLHTTP","Microsoft.XMLHTTP.1.0","Microsoft.XMLHTTP.1","Microsoft.XMLHTTP"];             

for(var i=0;i<Version.length;i++){                 

try{                     

return new ActiveXObject(Version[i]);                 

}catch(e){}             

}         

}     

}()||false;

}HttpRequest.prototype={

send:function(object,url,callback){         

if(!this.xmlhttp) return;         

this.xmlhttp.open(object?"post":"get",url,!!this.async);

if(object) this.xmlhttp.setRequestHeader("content-type","application/x-www-form-urlencoded");         

if(!this.cache){             

this.xmlhttp.setRequestHeader("No-Cache","1");             

this.xmlhttp.setRequestHeader("Pragma","no-cache");             

this.xmlhttp.setRequestHeader("Cache-Control","no-cache");             

this.xmlhttp.setRequestHeader("Expire","0");             

this.xmlhttp.setRequestHeader("Last-Modified","Wed, 1 Jan 1997 00:00:00 GMT");             

this.xmlhttp.setRequestHeader("If-Modified-Since","-1");

}         

if(!this.callback) this.callback=callback;         

if(!this.async){             

if(typeof(this.callback)=="string"){                 

eval(this.callback);             

}else if(typeof(this.callback)=="function"){                 

this.callback(this.xmlhttp);

}         

}else{             

this.xmlhttp.onreadystatechange=function(){                 

if(this.xmlhttp.readyState==4){                     

if(this.xmlhttp.status==0||this.xmlhttp.status==200){                         

if(typeof(this.callback)=="string"){                             

eval(this.callback);                         

}else if(typeof(this.callback)=="function"){                             

this.callback(this.xmlhttp);                         

}                     

}                 

}             

}.bind(this);         

}         

this.xmlhttp.send(object);     

},abort:function(){         

if(this.xmlhttp&&this.xmlhttp.abort) this.xmlhttp.abort();     

}

}; //ajax类定义结束