(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(e,t,n){"use strict";n.r(t);var a=n(36),i={CLARIFAI:"c3974e84eeff423b94b19a446da2ade4",ZOMATO:"ab4ea1ed53fa5b1863ef29fe21faa53c",EDAMAM:{APP_ID:"106b9cef",API_KEY:"c0136cf90a5c614c511132c3724921a7"}},r=n(20),s=n.n(r);var o=n(21),c=n(2),u=n(4),l=n(6),d=n(3),p=n(5),m=n(17);function g(){var e=Object(o.a)(['\n      <head>\n        <link href="./assets/css/black-dashboard.css?v=1.0.0" rel="stylesheet" />\n      </head>\n      <div class="row" style="text-align: center">\n        <div class="col-lg-6 col-md-12">\n          <img src="','" alt="Restaurant Image" />\n        </div>\n        <div class="col-lg-6 col-md-12 pt-3">\n          <h4 class="card-title">','</h4>\n          <button\n            type="button"\n            id="know-more"\n            class="btn btn-warning btn-simple"\n            @click="','"\n          >\n            Know More\n          </button>\n        </div>\n      </div>\n    ']);return g=function(){return e},e}var f=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"knowMore",value:function(){console.log(this)}},{key:"render",value:function(){return Object(m.b)(g(),this.image||this.defaultImage,this.name,this.knowMore)}}],[{key:"properties",get:function(){return{id:{type:Number},name:{type:String},cuisines:{type:String},latitude:{type:Number},longitude:{type:Number},address:{type:String},userRating:{type:Object},image:{type:String},defaultImage:{type:String}}}}]),t}(m.a);function b(){var e=Object(o.a)(['\n      <head>\n        <link href="./assets/css/black-dashboard.css?v=1.0.0" rel="stylesheet" />\n      </head>\n      <div class="row" style="text-align: center">\n        <div class="col-lg-6 col-md-12">\n          <img src="','" alt="Recipe Image" width="200"/>\n        </div>\n        <div class="col-lg-6 col-md-12 pt-3">\n          <h4 class="card-title">','</h4>\n          <button\n            type="button"\n            id="know-more"\n            class="btn btn-warning btn-simple"\n            @click="','"\n          >\n            Know More\n          </button>\n        </div>\n      </div>\n    ']);return b=function(){return e},e}var h=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"knowMore",value:function(){console.log(this)}},{key:"render",value:function(){return Object(m.b)(b(),this.image||this.defaultImage,this.label,this.knowMore)}}],[{key:"properties",get:function(){return{id:{type:Number},label:{type:String},source:{type:String},sourceUrl:{type:String},ingredients:{type:Array},image:{type:String},defaultImage:{type:String},dietLabels:{type:Array},healthLabels:{type:Array}}}}]),t}(m.a),v=n(37),y={apiKey:"AIzaSyCK5tTuXD5WbHmhC-hBj-giHh3JLnb_fhE",authDomain:"foozam-test.firebaseapp.com",databaseURL:"https://foozam-test.firebaseio.com",projectId:"foozam-test",storageBucket:"",messagingSenderId:"791490333729"},A=Object(v.initializeApp)(y).database().ref();function w(e){var t={};return t.id=e.id,t.name=e.name,t.location=e.location,t.cuisines=e.cuisines,t.thumb=e.thumb,t.userRating=e.user_rating,t}function I(e){var t={};return t.label=e.label,t.source=e.source,t.url=e.url,t.image=e.image,t.ingredientLines=e.ingredientLines,t.nutrients=e.digest,t}var k=document.getElementById("img-file"),L=document.getElementById("result-title"),M=A.child("image");customElements.define("restaurant-info",f),customElements.define("recipe-info",h);var E=new a.App({apiKey:i.CLARIFAI}),O=[];function j(e){var t,n,a,r,o,c;t=i.EDAMAM.API_KEY,n=i.EDAMAM.APP_ID,a=e.innerHTML,r=0,o=20,c=function(e){!function(e){for(var t,n=A.child("recipes"),a=document.getElementById("link1"),i=e.hits,r=[],s=[];a.firstChild;)a.removeChild(a.firstChild);n.remove();for(var o=0;o<i.length;o+=1)s.push(I(i[o].recipe)),s[o].id=o,n.push(s[o]),r.push(new h),r[o].setAttribute("class","col-lg-6 col-md-12 pb-3"),r[o].setAttribute("id",o),r[o].setAttribute("label",i[o].recipe.label),r[o].setAttribute("source",i[o].recipe.source),r[o].setAttribute("sourceUrl",i[o].recipe.url),r[o].setAttribute("image",i[o].recipe.image),r[o].setAttribute("ingredients",i[o].recipe.ingredientLines),r[o].setAttribute("defaultImage","https://foozam.ml/assets/img/recipe-default.png");for(var c=0;c<r.length-1;c+=1)c%2===0&&((t=document.createElement("div")).setAttribute("class","row"),t.appendChild(r[c]),t.appendChild(r[c+1]),a.appendChild(t))}(e)},s.a.get("https://api.edamam.com/search?app_id=".concat(n,"&app_key=").concat(t,"&q=").concat(a,"&from=").concat(r,"&to=").concat(o)).then(function(e){c(e.data)})}function C(e){var t,n;navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(a){t=a.coords.latitude,n=a.coords.longitude,function(e,t,n,a,i,r,o,c){s.a.get("https://developers.zomato.com/api/v2.1/search?apikey=".concat(e,"&entity_id=").concat(n,"&entity_type=").concat(a,"&q=").concat(t,"&count=").concat(i,"&lat=").concat(r,"&lon=").concat(o,"&sort=real_distance&order=asc")).then(function(e){c(e.data)})}(i.ZOMATO,e.innerHTML,5,"city",20,t,n,function(e){!function(e){for(var t,n=A.child("restaurants"),a=document.getElementById("link2"),i=e.restaurants,r=[],s=[];a.firstChild;)a.removeChild(a.firstChild);n.remove();for(var o=0;o<i.length;o+=1)s.push(w(i[o].restaurant)),n.push(s[o]),r.push(new f),r[o].setAttribute("class","col-lg-6 col-md-12 pb-3"),r[o].setAttribute("id",i[o].restaurant.id),r[o].setAttribute("name",i[o].restaurant.name),r[o].setAttribute("longitude",i[o].restaurant.location.longitude),r[o].setAttribute("latitude",i[o].restaurant.location.latitude),r[o].setAttribute("address",i[o].restaurant.location.address),r[o].setAttribute("cuisines",i[o].restaurant.cuisines),r[o].setAttribute("image",i[o].restaurant.thumb),r[o].setAttribute("userRating",i[o].restaurant.user_rating.aggregate_rating),r[o].setAttribute("defaultImage","https://foozam.ml/assets/img/rest-default.png");for(var c=0;c<r.length-1;c+=1)c%2===0&&((t=document.createElement("div")).setAttribute("class","row"),t.appendChild(r[c]),t.appendChild(r[c+1]),a.appendChild(t))}(e)})})}for(var T=1;T<=3;T+=1)O.push(document.getElementById("pred-".concat(T)));for(var H=function(e){O[e].addEventListener("click",function(){L.innerHTML="Foozam Results For ",L.innerHTML=L.innerHTML.concat(O[e].innerHTML),j(O[e]),C(O[e])})},_=0;_<3;_+=1)H(_);function z(e){var t=[];E.models.predict("bd367be194cf45149e75f01d59f77ba7",e).then(function(e){for(var n=0;n<5;n+=1)t.push(e.outputs[0].data.concepts[n].name);for(var a=0;a<3;a+=1)O[a].innerHTML=t[a].toUpperCase();L.innerHTML="Foozam Results For ",L.innerHTML=L.innerHTML.concat(O[0].innerHTML),j(O[0]),C(O[0])},function(e){console.log(e)})}window.addEventListener("load",function(){z(document.getElementById("foozam-img").src)}),k.addEventListener("change",function(){!function(){var e=document.getElementById("foozam-img"),t=document.getElementById("img-file").files[0],n=new FileReader;t=new Blob([t]),n.addEventListener("loadend",function(){e.src=n.result,M.push(n.result),z(n.result.replace("data:application/octet-stream;base64,",""))}),t&&n.readAsDataURL(t)}()})},38:function(e,t,n){e.exports=n(105)}},[[38,2,1]]]);
//# sourceMappingURL=main.dd491c4d.chunk.js.map