(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{106:function(t,e,n){"use strict";n.r(e);var a={CLARIFAI:"c3974e84eeff423b94b19a446da2ade4",ZOMATO:"ab4ea1ed53fa5b1863ef29fe21faa53c",EDAMAM:{APP_ID:"106b9cef",API_KEY:"c0136cf90a5c614c511132c3724921a7"}},i=n(22),r=n.n(i);var s=new(n(37).App)({apiKey:a.CLARIFAI}),o=n(16),c=n(2),u=n(4),l=n(6),d=n(3),g=n(5),b=n(12);function m(){var t=Object(o.a)(['\n      <head>\n        <link href="./assets/css/black-dashboard.css?v=1.0.0" rel="stylesheet" />\n      </head>\n      <div class="row" style="text-align: center">\n        <div class="col-lg-6 col-md-12">\n          <img src="','" alt="Restaurant Image" />\n        </div>\n        <div class="col-lg-6 col-md-12 pt-3">\n          <h4 class="card-title">','</h4>\n          <button\n            type="button"\n            id="know-more"\n            class="btn btn-warning btn-simple"\n          >\n            Know More\n          </button>\n        </div>\n      </div>\n    ']);return m=function(){return t},t}var p=function(t){function e(){return Object(c.a)(this,e),Object(l.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(g.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return Object(b.b)(m(),this.image||this.defaultImage,this.name)}}],[{key:"properties",get:function(){return{id:{type:Number},name:{type:String},cuisines:{type:String},latitude:{type:Number},longitude:{type:Number},address:{type:String},userRating:{type:Object},image:{type:String},defaultImage:{type:String}}}}]),e}(b.a);function f(){var t=Object(o.a)(['\n      <head>\n        <link href="./assets/css/black-dashboard.css?v=1.0.0" rel="stylesheet" />\n      </head>\n      <div class="row" style="text-align: center">\n        <div class="col-lg-6 col-md-12">\n          <img src="','" alt="Recipe Image" width="200"/>\n        </div>\n        <div class="col-lg-6 col-md-12 pt-3">\n          <h4 class="card-title">','</h4>\n          <button\n            type="button"\n            id="know-more"\n            class="btn btn-warning btn-simple"\n          >\n            Know More\n          </button>\n        </div>\n      </div>\n    ']);return f=function(){return t},t}var h=function(t){function e(){return Object(c.a)(this,e),Object(l.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(g.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return Object(b.b)(f(),this.image||this.defaultImage,this.label)}}],[{key:"properties",get:function(){return{id:{type:Number},label:{type:String},source:{type:String},sourceUrl:{type:String},ingredients:{type:Array},image:{type:String},defaultImage:{type:String},dietLabels:{type:Array},healthLabels:{type:Array}}}}]),e}(b.a);function v(){var t=Object(o.a)(['\n      <head>\n        <link href="./assets/css/black-dashboard.css?v=1.0.0" rel="stylesheet" />\n      </head>\n      <div class="row">\n        <div class="col-lg-4 col-md-12"  style="text-align: center">\n          <img src="','" alt="Restaurant Image" />\n        </div>\n        <div class="col-lg-8 col-md-12 pt-3" style="font-size: 12pt">\n          <p style="color: var(--dark)"><b class="font-weight-bold">Address</b> : ','</p>\n          <p style="color: var(--dark)"><b class="font-weight-bold">Cuisines</b> : ','</p>\n          <p style="color: var(--dark)"><b class="font-weight-bold">Rating</b> : ','</p>\n        </div>\n      </div>\n      <div class="row pt-4">\n        <div class="col-lg-12 col-md-12 embed-responsive embed-responsive-21by9" id="map">\n          <iframe src="https://www.google.com/maps?q=','&output=embed"\n            frameborder="0" \n            style="border:0" \n            allowfullscreen>\n          </iframe>\n        </div>\n      </div>\n    ']);return v=function(){return t},t}var y=function(t){function e(){return Object(c.a)(this,e),Object(l.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(g.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this.name.replace(/\s/g,"+");return Object(b.b)(v(),this.image||this.defaultImage,this.address,this.cuisines,this.userRating,t)}}],[{key:"properties",get:function(){return{name:{type:String},cuisines:{type:String},latitude:{type:Number},longitude:{type:Number},address:{type:String},userRating:{type:Object},image:{type:String},defaultImage:{type:String}}}}]),e}(b.a),A=n(38),w={apiKey:"AIzaSyCK5tTuXD5WbHmhC-hBj-giHh3JLnb_fhE",authDomain:"foozam-test.firebaseapp.com",databaseURL:"https://foozam-test.firebaseio.com",projectId:"foozam-test",storageBucket:"",messagingSenderId:"791490333729"},k=Object(A.initializeApp)(w).database().ref(),I=n(19),M=n.n(I);function O(t){var e={};return e.id=t.id,e.name=t.name,e.location=t.location,e.cuisines=t.cuisines,e.thumb=t.thumb,e.userRating=t.user_rating,e}function j(t){var e={};return e.label=t.label,e.source=t.source,e.url=t.url,e.image=t.image,e.ingredientLines=t.ingredientLines,e.nutrients=t.digest,e}var E=[],L=[];var C=document.getElementById("img-file"),R=document.getElementById("result-title"),S=k.child("image");customElements.define("restaurant-info",p),customElements.define("recipe-info",h),customElements.define("know-more-restaurant",y);var T=[];function z(t){var e,n,i,s,o,c;e=a.EDAMAM.API_KEY,n=a.EDAMAM.APP_ID,i=t.innerHTML,s=0,o=20,c=function(t){!function(t){for(var e,n=k.child("recipes"),a=document.getElementById("link1"),i=t.hits,r=[];a.firstChild;)a.removeChild(a.firstChild);n.remove();for(var s=0;s<i.length;s+=1)r.push(j(i[s].recipe)),r[s].id=s,n.push(r[s]),L.push(new h),L[s].setAttribute("class","col-lg-6 col-md-12 pb-3"),L[s].setAttribute("id",s),L[s].setAttribute("label",i[s].recipe.label),L[s].setAttribute("source",i[s].recipe.source),L[s].setAttribute("sourceUrl",i[s].recipe.url),L[s].setAttribute("image",i[s].recipe.image),L[s].setAttribute("ingredients",i[s].recipe.ingredientLines),L[s].setAttribute("defaultImage","https://foozam.ml/assets/img/recipe-default.png"),L[s].setAttribute("data-toggle","modal"),L[s].setAttribute("data-target","#knowMoreModal");for(var o=0;o<L.length-1;o+=1)o%2===0&&((e=document.createElement("div")).setAttribute("class","row"),e.appendChild(L[o]),e.appendChild(L[o+1]),a.appendChild(e));L.forEach(function(t){var e=t;M()(e).click(function(){var e=t.getAttribute("label");M()("#knowMoreTitle").html(e)})})}(t)},r.a.get("https://api.edamam.com/search?app_id=".concat(n,"&app_key=").concat(e,"&q=").concat(i,"&from=").concat(s,"&to=").concat(o)).then(function(t){c(t.data)})}function H(t){var e,n;navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(i){e=i.coords.latitude,n=i.coords.longitude,function(t,e,n,a,i,s,o,c){r.a.get("https://developers.zomato.com/api/v2.1/search?apikey=".concat(t,"&entity_id=").concat(n,"&entity_type=").concat(a,"&q=").concat(e,"&count=").concat(i,"&lat=").concat(s,"&lon=").concat(o,"&sort=real_distance&order=asc")).then(function(t){c(t.data)})}(a.ZOMATO,t.innerHTML,5,"city",20,e,n,function(t){!function(t){for(var e,n=k.child("restaurants"),a=document.getElementById("link2"),i=t.restaurants,r=[];a.firstChild;)a.removeChild(a.firstChild);n.remove();for(var s=0;s<i.length;s+=1)r.push(O(i[s].restaurant)),n.push(r[s]),E.push(new p),E[s].setAttribute("class","col-lg-6 col-md-12 pb-3"),E[s].setAttribute("id",i[s].restaurant.id),E[s].setAttribute("name",i[s].restaurant.name),E[s].setAttribute("longitude",i[s].restaurant.location.longitude),E[s].setAttribute("latitude",i[s].restaurant.location.latitude),E[s].setAttribute("address",i[s].restaurant.location.address),E[s].setAttribute("cuisines",i[s].restaurant.cuisines),E[s].setAttribute("image",i[s].restaurant.thumb),E[s].setAttribute("userRating",i[s].restaurant.user_rating.aggregate_rating),E[s].setAttribute("defaultImage","https://foozam.ml/assets/img/rest-default.png"),E[s].setAttribute("data-toggle","modal"),E[s].setAttribute("data-target","#knowMoreModal");for(var o=0;o<E.length-1;o+=1)o%2===0&&((e=document.createElement("div")).setAttribute("class","row"),e.appendChild(E[o]),e.appendChild(E[o+1]),a.appendChild(e));E.forEach(function(t){var e=t,n=new y;M()(e).click(function(){var e=t.getAttribute("name");n.setAttribute("cuisines",t.getAttribute("cuisines")),n.setAttribute("latitude",t.getAttribute("latitude")),n.setAttribute("longitude",t.getAttribute("longitude")),n.setAttribute("address",t.getAttribute("address")),n.setAttribute("userRating",t.getAttribute("userRating")),n.setAttribute("image",t.getAttribute("image")),n.setAttribute("defaultImage",t.getAttribute("defaultImage")),n.setAttribute("name",t.getAttribute("name")),M()("#knowMoreTitle").html(e),M()("#knowMoreBody").html(n)})})}(t)})})}for(var _=1;_<=5;_+=1)T.push(document.getElementById("pred-".concat(_)));function B(t){var e=[];s.models.predict("bd367be194cf45149e75f01d59f77ba7",t).then(function(t){for(var n=0;n<5;n+=1)e.push(t.outputs[0].data.concepts[n].name);for(var a=0;a<5;a+=1)T[a].innerHTML=e[a].toUpperCase();R.innerHTML="Foozam Results For ",R.innerHTML=R.innerHTML.concat(T[0].innerHTML),z(T[0]),H(T[0])},function(t){console.log(t)})}T.forEach(function(t){t.addEventListener("click",function(){R.innerHTML="Foozam Results For ",R.innerHTML=R.innerHTML.concat(t.innerHTML),z(t),H(t)})}),window.addEventListener("load",function(){B(document.getElementById("foozam-img").src)}),C.addEventListener("change",function(){!function(){var t=document.getElementById("foozam-img"),e=document.getElementById("img-file").files[0],n=new FileReader;e=new Blob([e]),n.addEventListener("loadend",function(){t.src=n.result,S.push(n.result),B(n.result.replace("data:application/octet-stream;base64,",""))}),e&&n.readAsDataURL(e)}()})},39:function(t,e,n){t.exports=n(106)}},[[39,2,1]]]);
//# sourceMappingURL=main.c4ab5948.chunk.js.map