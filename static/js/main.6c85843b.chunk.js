(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{106:function(t,e,n){"use strict";n.r(e);var a=n(8),i=n.n(a),r={CLARIFAI:"c3974e84eeff423b94b19a446da2ade4",ZOMATO:"ab4ea1ed53fa5b1863ef29fe21faa53c",EDAMAM:{APP_ID:"106b9cef",API_KEY:"c0136cf90a5c614c511132c3724921a7"}},s=n(22),o=n.n(s);var c=new(n(37).App)({apiKey:r.CLARIFAI}),u=n(17),l=n(2),d=n(4),g=n(6),m=n(3),b=n(5),p=n(13);function f(){var t=Object(u.a)(['\n      <head>\n        <link href="./assets/css/black-dashboard.css?v=1.0.0" rel="stylesheet" />\n      </head>\n      <div class="row" style="text-align: center">\n        <div class="col-lg-6 col-md-12">\n          <img src="','" alt="Restaurant Image" />\n        </div>\n        <div class="col-lg-6 col-md-12 pt-3">\n          <h4 class="card-title">','</h4>\n          <button\n            type="button"\n            id="know-more"\n            class="btn btn-warning btn-simple"\n          >\n            Know More\n          </button>\n        </div>\n      </div>\n    ']);return f=function(){return t},t}var h=function(t){function e(){return Object(l.a)(this,e),Object(g.a)(this,Object(m.a)(e).apply(this,arguments))}return Object(b.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){return Object(p.b)(f(),this.image||this.defaultImage,this.name)}}],[{key:"properties",get:function(){return{id:{type:Number},name:{type:String},cuisines:{type:String},latitude:{type:Number},longitude:{type:Number},address:{type:String},userRating:{type:Object},image:{type:String},defaultImage:{type:String}}}}]),e}(p.a);function v(){var t=Object(u.a)(['\n      <head>\n        <link href="./assets/css/black-dashboard.css?v=1.0.0" rel="stylesheet" />\n      </head>\n      <div class="row" style="text-align: center">\n        <div class="col-lg-6 col-md-12">\n          <img src="','" alt="Recipe Image" width="200"/>\n        </div>\n        <div class="col-lg-6 col-md-12 pt-3">\n          <h4 class="card-title">','</h4>\n          <button\n            type="button"\n            id="know-more"\n            class="btn btn-warning btn-simple"\n          >\n            Know More\n          </button>\n        </div>\n      </div>\n    ']);return v=function(){return t},t}var y=function(t){function e(){return Object(l.a)(this,e),Object(g.a)(this,Object(m.a)(e).apply(this,arguments))}return Object(b.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){return Object(p.b)(v(),this.image||this.defaultImage,this.label)}}],[{key:"properties",get:function(){return{id:{type:Number},label:{type:String},source:{type:String},sourceUrl:{type:String},ingredients:{type:Array},image:{type:String},defaultImage:{type:String},dietLabels:{type:Array},healthLabels:{type:Array}}}}]),e}(p.a);function A(){var t=Object(u.a)(['\n      <head>\n        <link href="./assets/css/black-dashboard.css?v=1.0.0" rel="stylesheet" />\n      </head>\n      <div class="row">\n        <div class="col-lg-4 col-md-12"  style="text-align: center">\n          <img src="','" alt="Restaurant Image" />\n        </div>\n        <div class="col-lg-8 col-md-12 pt-3" style="font-size: 12pt">\n          <p style="color: var(--dark)"><b class="font-weight-bold">Address</b> : ','</p>\n          <p style="color: var(--dark)"><b class="font-weight-bold">Cuisines</b> : ','</p>\n          <p style="color: var(--dark)"><b class="font-weight-bold">Rating</b> : ','</p>\n        </div>\n      </div>\n      <div class="row pt-4">\n        <div class="col-lg-12 col-md-12 embed-responsive embed-responsive-16by9" id="map">\n          <iframe src="https://www.google.com/maps?q=','&output=embed"\n            frameborder="0" \n            style="border:0" \n            allowfullscreen>\n          </iframe>\n        </div>\n      </div>\n    ']);return A=function(){return t},t}var w=function(t){function e(){return Object(l.a)(this,e),Object(g.a)(this,Object(m.a)(e).apply(this,arguments))}return Object(b.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){var t=this.name.replace(/\s/g,"+"),e=this.address.replace(/\s/g,"+");return t.concat("+,+".concat(e)),Object(p.b)(A(),this.image||this.defaultImage,this.address,this.cuisines,this.userRating,t)}}],[{key:"properties",get:function(){return{name:{type:String},cuisines:{type:String},latitude:{type:Number},longitude:{type:Number},address:{type:String},userRating:{type:Object},image:{type:String},defaultImage:{type:String}}}}]),e}(p.a),k=n(38),I={apiKey:"AIzaSyCK5tTuXD5WbHmhC-hBj-giHh3JLnb_fhE",authDomain:"foozam-test.firebaseapp.com",databaseURL:"https://foozam-test.firebaseio.com",projectId:"foozam-test",storageBucket:"",messagingSenderId:"791490333729"},M=Object(k.initializeApp)(I).database().ref();function O(t){var e={};return e.id=t.id,e.name=t.name,e.location=t.location,e.cuisines=t.cuisines,e.thumb=t.thumb,e.userRating=t.user_rating,e}function E(t){var e={};return e.label=t.label,e.source=t.source,e.url=t.url,e.image=t.image,e.ingredientLines=t.ingredientLines,e.nutrients=t.digest,e}var j=[],L=[];var C=document.getElementById("img-file"),R=document.getElementById("result-title"),T=M.child("image");customElements.define("restaurant-info",h),customElements.define("recipe-info",y),customElements.define("know-more-restaurant",w);var S=[];function B(t){var e,n,a,s,c,u;e=r.EDAMAM.API_KEY,n=r.EDAMAM.APP_ID,a=t.innerHTML,s=0,c=20,u=function(t){!function(t){for(var e,n=M.child("recipes"),a=document.getElementById("link1"),r=t.hits,s=[];a.firstChild;)a.removeChild(a.firstChild);n.remove();for(var o=0;o<r.length;o+=1)s.push(E(r[o].recipe)),s[o].id=o,n.push(s[o]),L.push(new y),L[o].setAttribute("class","col-lg-6 col-md-12 pb-3"),L[o].setAttribute("id",o),L[o].setAttribute("label",r[o].recipe.label),L[o].setAttribute("source",r[o].recipe.source),L[o].setAttribute("sourceUrl",r[o].recipe.url),L[o].setAttribute("image",r[o].recipe.image),L[o].setAttribute("ingredients",r[o].recipe.ingredientLines),L[o].setAttribute("defaultImage","https://foozam.ml/assets/img/recipe-default.png"),L[o].setAttribute("data-toggle","modal"),L[o].setAttribute("data-target","#knowMoreModal");for(var c=0;c<L.length-1;c+=1)c%2===0&&((e=document.createElement("div")).setAttribute("class","row"),e.appendChild(L[c]),e.appendChild(L[c+1]),a.appendChild(e));L.forEach(function(t){var e=t;i()(e).click(function(){var e=t.getAttribute("label");i()("#knowMoreTitle").html(e)})})}(t)},o.a.get("https://api.edamam.com/search?app_id=".concat(n,"&app_key=").concat(e,"&q=").concat(a,"&from=").concat(s,"&to=").concat(c)).then(function(t){u(t.data)})}function z(t){var e,n;navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(a){e=a.coords.latitude,n=a.coords.longitude,function(t,e,n,a,i,r,s,c){o.a.get("https://developers.zomato.com/api/v2.1/search?apikey=".concat(t,"&entity_id=").concat(n,"&entity_type=").concat(a,"&q=").concat(e,"&count=").concat(i,"&lat=").concat(r,"&lon=").concat(s,"&sort=real_distance&order=asc")).then(function(t){c(t.data)})}(r.ZOMATO,t.innerHTML,5,"city",20,e,n,function(t){!function(t){for(var e,n=M.child("restaurants"),a=document.getElementById("link2"),r=t.restaurants,s=[];a.firstChild;)a.removeChild(a.firstChild);n.remove();for(var o=0;o<r.length;o+=1)s.push(O(r[o].restaurant)),n.push(s[o]),j.push(new h),j[o].setAttribute("class","col-lg-6 col-md-12 pb-3"),j[o].setAttribute("id",r[o].restaurant.id),j[o].setAttribute("name",r[o].restaurant.name),j[o].setAttribute("longitude",r[o].restaurant.location.longitude),j[o].setAttribute("latitude",r[o].restaurant.location.latitude),j[o].setAttribute("address",r[o].restaurant.location.address),j[o].setAttribute("cuisines",r[o].restaurant.cuisines),j[o].setAttribute("image",r[o].restaurant.thumb),j[o].setAttribute("userRating",r[o].restaurant.user_rating.aggregate_rating),j[o].setAttribute("defaultImage","https://foozam.ml/assets/img/rest-default.png"),j[o].setAttribute("data-toggle","modal"),j[o].setAttribute("data-target","#knowMoreModal");for(var c=0;c<j.length-1;c+=1)c%2===0&&((e=document.createElement("div")).setAttribute("class","row"),e.appendChild(j[c]),e.appendChild(j[c+1]),a.appendChild(e));j.forEach(function(t){var e=t,n=new w;i()(e).click(function(){var e=t.getAttribute("name");n.setAttribute("cuisines",t.getAttribute("cuisines")),n.setAttribute("latitude",t.getAttribute("latitude")),n.setAttribute("longitude",t.getAttribute("longitude")),n.setAttribute("address",t.getAttribute("address")),n.setAttribute("userRating",t.getAttribute("userRating")),n.setAttribute("image",t.getAttribute("image")),n.setAttribute("defaultImage",t.getAttribute("defaultImage")),n.setAttribute("name",t.getAttribute("name")),i()("#knowMoreTitle").html(e),i()("#knowMoreBody").html(n),i()("#closeButton").click(function(){i()("#knowMoreBody").html(". . .")})})})}(t)})})}for(var H=1;H<=5;H+=1)S.push(document.getElementById("pred-".concat(H)));function _(t){var e=[];c.models.predict("bd367be194cf45149e75f01d59f77ba7",t).then(function(t){for(var n=0;n<5;n+=1)e.push(t.outputs[0].data.concepts[n].name);for(var a=0;a<5;a+=1)S[a].innerHTML=e[a].toUpperCase();R.innerHTML="Foozam Results For ",R.innerHTML=R.innerHTML.concat(S[0].innerHTML),B(S[0]),z(S[0])},function(t){console.log(t)})}S.forEach(function(t){t.addEventListener("click",function(){R.innerHTML="Foozam Results For ",R.innerHTML=R.innerHTML.concat(t.innerHTML),B(t),z(t)})});var D=document.getElementById("loader");function F(){i()("body").removeClass("fade-out")}function K(){D.style.visibility="hidden",i()("body").addClass("fade-out"),setTimeout(F,100)}window.addEventListener("load",function(){_(document.getElementById("foozam-img").src),setTimeout(K,5e3),i()("body").removeClass("fade-out")}),C.addEventListener("change",function(){!function(){var t=document.getElementById("foozam-img"),e=document.getElementById("img-file").files[0],n=new FileReader;e=new Blob([e]),n.addEventListener("loadend",function(){t.src=n.result,T.push(n.result),_(n.result.replace("data:application/octet-stream;base64,",""))}),e&&n.readAsDataURL(e)}()})},39:function(t,e,n){t.exports=n(106)}},[[39,2,1]]]);
//# sourceMappingURL=main.6c85843b.chunk.js.map