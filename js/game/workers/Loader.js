define([],function(){function d(){var a,g,c,b;if(e.length>0&&(a=e.shift(),a!==h)){h=a;c=k[a];for(a=0,g=c.length;a<g;a+=1)if(b=c[a],typeof b!=="undefined"){var d=b,f=void 0,f=d.lastIndexOf(".");f!==-1&&d.substr(f+1);jQuery.ajax({url:b,success:l,error:m,cache:n})}}}function l(a){alert("data loaded "+a.id);b.signals.loadItemCompleted.dispatch()}function m(a,b){alert(b)}var b=require("utils/Shared"),n=!0,i=["setup","playable","complete"],e=[],k={setup:["js/game/workers/TestLoadWorker1.js"],playable:[],
complete:[]},j={},h;(function(){var a,b,c;for(a=0,b=i.length;a<b;a+=1)c=i[a],e.push(c)})();b.signals.loadItemCompleted=new signals.Signal;b.signals.loadListCompleted=new signals.Signal;b.signals.loadAllCompleted=new signals.Signal;b.assets=j;d();return{load:function(){d()},assets:j}});