(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{117:function(t,e){},118:function(t,e){},120:function(t,e){function a(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}a.keys=function(){return[]},a.resolve=a,t.exports=a,a.id=120},153:function(t,e,a){"use strict";a.r(e);var i=a(5),r=a.n(i),n=a(56),s=a.n(n),o={ZOMATO:"ab4ea1ed53fa5b1863ef29fe21faa53c",EDAMAM:{APP_ID:"106b9cef",API_KEY:"c0136cf90a5c614c511132c3724921a7"}},l=a(57),c=a.n(l);var u=a(15),d=a(2),g=a(3),b=a(8),p=a(4),m=a(7),h=a(12);function f(){var t=Object(u.a)(['\n\t\t\t<head>\n\t\t\t\t<link href="./assets/css/black-dashboard.css?v=1.0.0" rel="stylesheet" />\n\t\t\t</head>\n\t\t\t<div class="row" style="text-align: center">\n\t\t\t\t<div class="col-lg-6 col-md-12"><img src="','" alt="Restaurant Image" /></div>\n\t\t\t\t<div class="col-lg-6 col-md-12 pt-3">\n\t\t\t\t\t<h4 class="card-title" style="color: ','">','</h4>\n\t\t\t\t\t<button type="button" id="know-more" class="btn btn-warning btn-simple">View</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t']);return f=function(){return t},t}var v=function(t){function e(){return Object(d.a)(this,e),Object(b.a)(this,Object(p.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(g.a)(e,[{key:"render",value:function(){var t;return t="true"===localStorage.getItem("white_color")?"black":"white",Object(h.b)(f(),this.image||this.defaultImage,t,this.name)}}],[{key:"properties",get:function(){return{id:{type:Number},name:{type:String},cuisines:{type:String},latitude:{type:Number},longitude:{type:Number},address:{type:String},userRating:{type:Object},image:{type:String},defaultImage:{type:String}}}}]),e}(h.a);function y(){var t=Object(u.a)(['\n\t\t\t<head>\n\t\t\t\t<link href="./assets/css/black-dashboard.css?v=1.0.0" rel="stylesheet" />\n\t\t\t</head>\n\t\t\t<div class="row" style="text-align: center">\n\t\t\t\t<div class="col-lg-6 col-md-12">\n\t\t\t\t\t<img src="','" alt="Recipe Image" width="200" />\n\t\t\t\t</div>\n\t\t\t\t<div class="col-lg-6 col-md-12 pt-3">\n\t\t\t\t\t<h4 class="card-title" style="color: ','">','</h4>\n\t\t\t\t\t<button type="button" id="know-more" class="btn btn-warning btn-simple">View</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t']);return y=function(){return t},t}var I=function(t){function e(){return Object(d.a)(this,e),Object(b.a)(this,Object(p.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(g.a)(e,[{key:"render",value:function(){var t;return t="true"===localStorage.getItem("white_color")?"black":"white",Object(h.b)(y(),this.image||this.defaultImage,t,this.label)}}],[{key:"properties",get:function(){return{id:{type:Number},label:{type:String},source:{type:String},sourceUrl:{type:String},ingredients:{type:Array},image:{type:String},defaultImage:{type:String},dietLabels:{type:Array},healthLabels:{type:Array}}}}]),e}(h.a),A=a(58),S={apiKey:"AIzaSyCK5tTuXD5WbHmhC-hBj-giHh3JLnb_fhE",authDomain:"foozam-test.firebaseapp.com",databaseURL:"https://foozam-test.firebaseio.com",projectId:"foozam-test",storageBucket:"",messagingSenderId:"791490333729"},L=Object(A.initializeApp)(S).database().ref();function k(){var t=Object(u.a)(['\n\t\t\t<style>\n\t\t\t\t#favorite:hover {\n\t\t\t\t\tcolor: gold; \n\t\t\t\t\tfont-size: 30px; \n\t\t\t\t\topacity: 0.6;\n\t\t\t\t\tcursor: pointer;\n\t\t\t\t}\n\t\t\t</style>\n\t\t\t<div class="row">\n\t\t\t\t<div class="col-lg-4 col-md-12" style="text-align: center">\n\t\t\t\t\t<img src="','" alt="Restaurant Image" />\n\t\t\t\t\t<div id="favoriteIcon" style="color: grey; font-size: 30px; opacity: 0.6;" @click="','">\n\t\t\t\t\t\t<i id="favorite" class="fa fa-star"></i>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="col-lg-8 col-md-12 pt-3" style="font-size: 12pt">\n\t\t\t\t\t<p style="color: var(--dark)"><b class="font-weight-bold">Address</b> : ','</p>\n\t\t\t\t\t<p style="color: var(--dark)"><b class="font-weight-bold">Cuisines</b> : ','</p>\n\t\t\t\t\t<p style="color: var(--dark)"><b class="font-weight-bold">Rating</b> : ','</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="row pt-4 pl-3 pr-3">\n\t\t\t\t<div class="col-lg-12 col-md-12 embed-responsive embed-responsive-16by9" id="map">\n\t\t\t\t\t<iframe\n\t\t\t\t\t\tsrc="https://www.google.com/maps?q=','&output=embed"\n\t\t\t\t\t\tframeborder="0"\n\t\t\t\t\t\tstyle="border:0"\n\t\t\t\t\t\tallowfullscreen\n\t\t\t\t\t>\n\t\t\t\t\t</iframe>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t']);return k=function(){return t},t}var w=function(t){function e(){var t;return Object(d.a)(this,e),(t=Object(b.a)(this,Object(p.a)(e).call(this))).favorite=!1,t}return Object(m.a)(e,t),Object(g.a)(e,null,[{key:"properties",get:function(){return{name:{type:String},cuisines:{type:String},latitude:{type:Number},longitude:{type:Number},address:{type:String},userRating:{type:Object},image:{type:String},defaultImage:{type:String},favorite:{type:Boolean},title:{type:String}}}}]),Object(g.a)(e,[{key:"addToFavorites",value:function(){var t,e=parseInt(localStorage.getItem("googleLoggedIn")),a=parseInt(localStorage.getItem("userLoggedIn"));e?t=JSON.parse(localStorage.getItem("googleUser")):a&&(t=JSON.parse(localStorage.getItem("loggedInUser")));var i={name:this.name,cuisines:this.cuisines,latitude:this.latitude,longitude:this.longitude,address:this.address,userRating:this.userRating,image:this.image,defaultImage:this.defaultImage,favorite:this.favorite};L.child("favorites").child("".concat(t.uid)).child("restaurants").child(i.name).set(i)}},{key:"removeFromFavorites",value:function(){var t,e=parseInt(localStorage.getItem("googleLoggedIn")),a=parseInt(localStorage.getItem("userLoggedIn"));e?t=JSON.parse(localStorage.getItem("googleUser")):a&&(t=JSON.parse(localStorage.getItem("loggedInUser"))),L.child("favorites").child("".concat(t.uid)).child("restaurants").child(this.name).remove()}},{key:"toggleFavorites",value:function(){var t=this.renderRoot.querySelector("#favoriteIcon");this.favorite=!this.favorite,this.favorite?(this.addToFavorites(),t.setAttribute("style","color: gold; font-size: 30px; opacity: 1")):(this.removeFromFavorites(),t.setAttribute("style","color: grey; font-size: 30px; opacity: 0.6"))}},{key:"render",value:function(){var t=this.name.replace(/\s/g,"+"),e=this.address.replace(/\s/g,"+");return t.concat("+,+".concat(e)),Object(h.b)(k(),this.image||this.defaultImage,this.toggleFavorites,this.address,this.cuisines,this.userRating,t)}},{key:"createRenderRoot",value:function(){return this}}]),e}(h.a),O=a(60),j=a.n(O);function M(){var t=Object(u.a)(['\n\t\t\t<style>\n\t\t\t\t#favorite:hover {\n\t\t\t\t\tcolor: gold; \n\t\t\t\t\tfont-size: 30px; \n\t\t\t\t\topacity: 0.6;\n\t\t\t\t\tcursor: pointer;\n\t\t\t\t}\n\t\t\t</style>\n\t\t\t<div class="row">\n\t\t\t\t<div class="col-lg-4 col-md-12" style="text-align: center">\n\t\t\t\t\t<img src="','" alt="Recipe Image" />\n\t\t\t\t\t<div class="row" style="text-align: center">\n\t\t\t\t\t\t<div class="col-lg-12 col-md-12 pt-2">\n\t\t\t\t\t\t\t<div id="favoriteIcon" style="color: grey; font-size: 30px; opacity: 0.6;">\n\t\t\t\t\t\t\t\t<i id="favorite" class="fa fa-star" @click="','"></i>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<a href=',' class="btn btn-success" target="_blank">Know More</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="col-lg-8 col-md-12 pt-3" style="font-size: 12pt" id="info">\n\t\t\t\t\t<ul class="nav nav-pills" role="tablist">\n\t\t\t\t\t\t<li class="nav-item">\n\t\t\t\t\t\t\t<a\n\t\t\t\t\t\t\t\tclass="nav-link active btn btn-simple"\n\t\t\t\t\t\t\t\tdata-toggle="tab"\n\t\t\t\t\t\t\t\thref="#ingredients"\n\t\t\t\t\t\t\t\trole="tablist"\n\t\t\t\t\t\t\t\taria-expanded="true"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\tIngredients\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class="nav-item">\n\t\t\t\t\t\t\t<a class="nav-link btn btn-simple" data-toggle="tab" href="#health" role="tablist" aria-expanded="false">\n\t\t\t\t\t\t\t\tHealth Labels\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class="nav-item">\n\t\t\t\t\t\t\t<a class="nav-link btn btn-simple" data-toggle="tab" href="#diet" role="tablist" aria-expanded="false">\n\t\t\t\t\t\t\t\tDiet Labels\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<div class="tab-content tab-space pt-2">\n\t\t\t\t\t\t<div class="tab-pane active" id="ingredients" aria-expanded="true">\n\t\t\t\t\t\t\t\x3c!-- Ingredients --\x3e\n\t\t\t\t\t\t\t<ul id="ingList" style="list-style-type: circle"></ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="tab-pane" id="health" aria-expanded="false">\n\t\t\t\t\t\t\t\x3c!-- Health Labels --\x3e\n\t\t\t\t\t\t\t<ul id="healthList" style="list-style-type: circle"></ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="tab-pane" id="diet" aria-expanded="false">\n\t\t\t\t\t\t\t<ul id="dietList" style="list-style-type: circle"></ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="row justify-content-center">\n\t\t\t\t<div class="col-lg-6 col-md-6"><canvas id="pieCanvas" width="40" height="40"></canvas></div>\n\t\t\t</div>\n\t\t\t<div class="row pt-4 pl-3 pr-3">\n\t\t\t\t<div class="col-lg-12 col-md-12 embed-responsive embed-responsive-16by9" id="map">\n\t\t\t\t\t<iframe\n\t\t\t\t\t\tsrc="https://www.youtube.com/embed?listType=search&list=','+recipe"\n\t\t\t\t\t\tframeborder="0"\n\t\t\t\t\t\tstyle="border:0"\n\t\t\t\t\t\tallowfullscreen\n\t\t\t\t\t>\n\t\t\t\t\t</iframe>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t']);return M=function(){return t},t}var E=function(t){function e(){var t;return Object(d.a)(this,e),(t=Object(b.a)(this,Object(p.a)(e).call(this))).favorite=!1,t}return Object(m.a)(e,t),Object(g.a)(e,null,[{key:"properties",get:function(){return{label:{type:String},ingredients:{type:String},dietLabels:{type:String},healthLabels:{type:String},nutrients:{type:String},source:{type:String},url:{type:String},image:{type:String},defaultImage:{type:String},ingredientsArray:{type:Array},dietLabelsArray:{type:Array},healthLabelsArray:{type:Array},nutrientsArray:{type:Array},favorite:{type:Boolean},title:{type:String}}}}]),Object(g.a)(e,[{key:"getIngredients",value:function(){this.ingredientsArray=this.ingredients.split("|");var t=this.renderRoot.querySelector("#ingList");this.ingredientsArray.forEach(function(e){var a=document.createElement("li");a.setAttribute("style","color: black"),a.innerHTML="".concat(e),t.appendChild(a)})}},{key:"getHealthLabels",value:function(){this.healthLabelsArray=this.healthLabels.split("|");var t=this.renderRoot.querySelector("#healthList");this.healthLabelsArray.forEach(function(e){var a=document.createElement("li");a.setAttribute("style","color: black"),a.innerHTML="".concat(e),t.appendChild(a)})}},{key:"getDietLabels",value:function(){this.dietLabelsArray=this.dietLabels.split("|");var t=this.renderRoot.querySelector("#dietList");this.dietLabelsArray.forEach(function(e){var a=document.createElement("li");a.setAttribute("style","color: black"),a.innerHTML="".concat(e),t.appendChild(a)})}},{key:"getNutrients",value:function(){this.nutrientsArray=JSON.parse(this.nutrients);var t=this.renderRoot.querySelector("#pieCanvas"),e=[],a=[];this.nutrientsArray.forEach(function(t){e.push(Math.trunc(t.total)),a.push("".concat(t.label," (").concat(t.unit,")"))});var i={datasets:[{data:e,label:"Nutrients",backgroundColor:["#003f5c","#58508d","#bc5090","#ff6361","#ffa600"],borderWidth:1}],labels:a};new j.a(t,{type:"doughnut",data:i,options:{animation:{animateScale:!0},legend:{labels:{fontSize:16}}}})}},{key:"addToFavorites",value:function(){var t,e=parseInt(localStorage.getItem("googleLoggedIn")),a=parseInt(localStorage.getItem("userLoggedIn"));e?t=JSON.parse(localStorage.getItem("googleUser")):a&&(t=JSON.parse(localStorage.getItem("loggedInUser")));var i={label:this.label,ingredients:this.ingredients,dietLabels:this.dietLabels,healthLabels:this.healthLabels,nutrients:this.nutrients,source:this.source,url:this.url,image:this.image,defaultImage:this.defaultImage,favorite:this.favorite};L.child("favorites").child("".concat(t.uid)).child("recipes").child(i.label).set(i)}},{key:"removeFromFavorites",value:function(){var t,e=parseInt(localStorage.getItem("googleLoggedIn")),a=parseInt(localStorage.getItem("userLoggedIn"));e?t=JSON.parse(localStorage.getItem("googleUser")):a&&(t=JSON.parse(localStorage.getItem("loggedInUser"))),L.child("favorites").child("".concat(t.uid)).child("recipes").child(this.label).remove()}},{key:"toggleFavorites",value:function(){var t=this.renderRoot.querySelector("#favoriteIcon");this.favorite=!this.favorite,this.favorite?(this.addToFavorites(),t.setAttribute("style","color: gold; font-size: 30px; opacity: 1")):(this.removeFromFavorites(),t.setAttribute("style","color: grey; font-size: 30px; opacity: 0.6"))}},{key:"render",value:function(){var t=this.label.replace(/\s/g,"+");return Object(h.b)(M(),this.image||this.defaultImage,this.toggleFavorites,this.url,t)}},{key:"createRenderRoot",value:function(){return this}}]),e}(h.a);function T(t){var e={};return e.id=t.id,e.name=t.name,e.location=t.location,e.cuisines=t.cuisines,e.thumb=t.thumb,e.userRating=t.user_rating,e}function N(t){var e={};return e.label=t.label,e.source=t.source,e.url=t.url,e.image=t.image,e.ingredientLines=t.ingredientLines,e.nutrients=t.digest,e.dietLabels=t.dietLabels,e.healthLabels=t.healthLabels,e.cautions=t.cautions,e}var R,C=[],x=[];function H(t){if(t){for(var e=Object.keys(t).length,a=[],i=[],r=[],n=0;n<e;n+=1)i.push(t[Object.keys(t)[n]]),a.push(new I),a[n].setAttribute("class","col-lg-6 col-md-12 pb-3"),a[n].setAttribute("id",n),a[n].setAttribute("label",i[n].label),a[n].setAttribute("source",i[n].source),a[n].setAttribute("url",i[n].url),a[n].setAttribute("image",i[n].image),a[n].setAttribute("defaultImage","https://foozam.ml/assets/img/recipe-default.jpg"),a[n].setAttribute("data-toggle","modal"),a[n].setAttribute("data-target","#knowMoreModal"),r.push(JSON.stringify(a[n].render())),localStorage.setItem("recipe-".concat(n),r[n]);!function(t){var e=Object.keys(t).length;localStorage.setItem("recipesLength",e);for(var a=[],i=[],r=[],n=0;n<e;n+=1)i.push(t[Object.keys(t)[n]]),a.push(new E),localStorage.setItem("recipe-".concat(n,"-nutrients"),i[n].nutrients),localStorage.setItem("recipe-".concat(n,"-dietLabels"),i[n].dietLabels),localStorage.setItem("recipe-".concat(n,"-healthLabels"),i[n].healthLabels),localStorage.setItem("recipe-".concat(n,"-ingredients"),i[n].ingredients),localStorage.setItem("recipe-".concat(n,"-label"),i[n].label),a[n].setAttribute("url",i[n].url),a[n].setAttribute("image",i[n].image),a[n].setAttribute("defaultImage",i[n].defaultImage),a[n].setAttribute("label",i[n].label),localStorage.setItem("recipe-".concat(n,"-title"),"".concat(i[n].label," : ").concat(i[n].source)),localStorage.setItem("recipe-".concat(n,"-favorite"),!0),r.push(JSON.stringify(a[n].render())),localStorage.setItem("knowMoreRecipe-".concat(n),r[n])}(t)}}function z(t){if(t){for(var e=Object.keys(t).length,a=[],i=[],r=[],n=0;n<e;n+=1)i.push(t[Object.keys(t)[n]]),a.push(new v),a[n].setAttribute("class","col-lg-6 col-md-12 pb-3"),a[n].setAttribute("id",n),a[n].setAttribute("name",i[n].name),a[n].setAttribute("longitude",i[n].longitude),a[n].setAttribute("latitude",i[n].latitude),a[n].setAttribute("address",i[n].address),a[n].setAttribute("cuisines",i[n].cuisines),a[n].setAttribute("image",i[n].image),a[n].setAttribute("userRating",i[n].userRating),a[n].setAttribute("defaultImage","https://foozam.ml/assets/img/rest-default.jpg"),a[n].setAttribute("data-toggle","modal"),a[n].setAttribute("data-target","#knowMoreModal"),r.push(JSON.stringify(a[n].render())),localStorage.setItem("restaurant-".concat(n),r[n]);!function(t){var e=Object.keys(t).length;localStorage.setItem("restLength",e);for(var a=[],i=[],r=[],n=0;n<e;n+=1)i.push(t[Object.keys(t)[n]]),a.push(new w),a[n].setAttribute("address",i[n].address),a[n].setAttribute("cuisines",i[n].cuisines),a[n].setAttribute("latitude",i[n].latitude),a[n].setAttribute("longitude",i[n].longitude),a[n].setAttribute("userRating",i[n].userRating),a[n].setAttribute("image",i[n].image),a[n].setAttribute("defaultImage",i[n].defaultImage),a[n].setAttribute("name",i[n].name),localStorage.setItem("rest-".concat(n,"-name"),i[n].name),localStorage.setItem("rest-".concat(n,"-favorite"),!0),r.push(JSON.stringify(a[n].render())),localStorage.setItem("knowMoreRest-".concat(n),r[n])}(t)}}function F(){!function(){var t,e=parseInt(localStorage.getItem("googleLoggedIn")),a=parseInt(localStorage.getItem("userLoggedIn"));e?t=JSON.parse(localStorage.getItem("googleUser")):a&&(t=JSON.parse(localStorage.getItem("loggedInUser"))),R=L.child("favorites"),R.child("".concat(t.uid)).child("recipes").once("value").then(function(t){H(t.val())})}()}function J(){!function(){var t,e=parseInt(localStorage.getItem("googleLoggedIn")),a=parseInt(localStorage.getItem("userLoggedIn"));e?t=JSON.parse(localStorage.getItem("googleUser")):a&&(t=JSON.parse(localStorage.getItem("loggedInUser"))),R=L.child("favorites"),R.child("".concat(t.uid)).child("restaurants").once("value").then(function(t){z(t.val())})}()}var U=document.getElementById("img-file"),_=document.getElementById("result-title"),B=L.child("image");customElements.define("restaurant-info",v),customElements.define("recipe-info",I),customElements.define("know-more-restaurant",w),customElements.define("know-more-recipe",E);var D=[];function q(t){!function(t,e,a,i,n,s){var o={async:!0,crossDomain:!0,url:"https://foozam-recipe.serveo.net/recipe?app_id=".concat(e,"&app_key=").concat(t,"&q=").concat(a,"&from=").concat(i,"&to=").concat(n),method:"GET"};r.a.ajax(o).done(function(t){s(t)})}(o.EDAMAM.API_KEY,o.EDAMAM.APP_ID,t.innerHTML,0,20,function(t){!function(t){var e,a=L.child("recipes"),i=document.getElementById("link1"),n=t.hits,s=[];a.remove();for(var o=0;o<n.length;o+=1)s.push(N(n[o].recipe)),s[o].id=o,a.push(s[o]),x.push(new I),x[o].setAttribute("class","col-lg-6 col-md-12 pb-3"),x[o].setAttribute("id",o),x[o].setAttribute("label",n[o].recipe.label),x[o].setAttribute("source",n[o].recipe.source),x[o].setAttribute("url",n[o].recipe.url),x[o].setAttribute("image",n[o].recipe.image),x[o].setAttribute("defaultImage","https://foozam.ml/assets/img/recipe-default.jpg"),x[o].setAttribute("data-toggle","modal"),x[o].setAttribute("data-target","#knowMoreModal");if(x.length>20)for(var l=0;l<20;l+=1)x.pop();else for(;i.firstChild;)i.removeChild(i.firstChild);for(var c=0;c<x.length;c+=1)c%2===0&&((e=document.createElement("div")).setAttribute("class","row"),c<x.length-1?(e.appendChild(x[c]),e.appendChild(x[c+1])):e.appendChild(x[c]),i.appendChild(e));x.forEach(function(t){var e,i,n,s,o=t,l=new E,c=[];r()(o).click(function(){var o="".concat(t.getAttribute("label")," : ").concat(t.getAttribute("source"));a.orderByChild("label").equalTo(t.getAttribute("label")).limitToFirst(1).on("value",function(t){var a=Object.keys(t.val())[0],r=t.child(a).val();e=r.ingredientLines?r.ingredientLines.join("|"):"Sorry. No Ingredients Here.",i=r.dietLabels?r.dietLabels.join("|"):"Sorry. No Diet Labels Here.",n=r.healthLabels?r.healthLabels.join("|"):"Sorry. No Health Labels Here.";for(var o=0;o<5;o+=1)c.push(r.nutrients[o]);s=c?JSON.stringify(c):"",l.setAttribute("nutrients",s),l.setAttribute("ingredients",e),l.setAttribute("dietLabels",i),l.setAttribute("healthLabels",n),e&&l.getIngredients(),i&&l.getDietLabels(),n&&l.getHealthLabels(),s&&l.getNutrients()}),l.setAttribute("source",t.getAttribute("source")),l.setAttribute("url",t.getAttribute("url")),l.setAttribute("image",t.getAttribute("image")),l.setAttribute("defaultImage",t.getAttribute("defaultImage")),l.setAttribute("label",t.getAttribute("label"));var u,d=parseInt(localStorage.getItem("googleLoggedIn")),g=parseInt(localStorage.getItem("userLoggedIn"));d?u=JSON.parse(localStorage.getItem("googleUser")):g&&(u=JSON.parse(localStorage.getItem("loggedInUser"))),L.child("favorites").child("".concat(u.uid)).child("recipes").child(t.getAttribute("label")).once("value").then(function(t){null!=t.val()&&(t.val().favorite?l.setAttribute("favorite",!0):l.setAttribute("favorite",!1),l.setFavorite())}),r()("#knowMoreTitle").html(o),r()("#knowMoreBody").html(l)})})}(t)})}function P(t){var e,a;navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(i){e=i.coords.latitude,a=i.coords.longitude,function(t,e,a,i,r,n,s,o){c.a.get("https://developers.zomato.com/api/v2.1/search?apikey=".concat(t,"&entity_id=").concat(a,"&entity_type=").concat(i,"&q=").concat(e,"&count=").concat(r,"&lat=").concat(n,"&lon=").concat(s,"&sort=real_distance&order=asc")).then(function(t){o(t.data)})}(o.ZOMATO,t.innerHTML,5,"city",20,e,a,function(t){!function(t){var e,a=L.child("restaurants"),i=document.getElementById("link2"),n=t.restaurants,s=[];a.remove();for(var o=0;o<n.length;o+=1)s.push(T(n[o].restaurant)),a.push(s[o]),C.push(new v),C[o].setAttribute("class","col-lg-6 col-md-12 pb-3"),C[o].setAttribute("id",n[o].restaurant.id),C[o].setAttribute("name",n[o].restaurant.name),C[o].setAttribute("longitude",n[o].restaurant.location.longitude),C[o].setAttribute("latitude",n[o].restaurant.location.latitude),C[o].setAttribute("address",n[o].restaurant.location.address),C[o].setAttribute("cuisines",n[o].restaurant.cuisines),C[o].setAttribute("image",n[o].restaurant.thumb),C[o].setAttribute("userRating",n[o].restaurant.user_rating.aggregate_rating),C[o].setAttribute("defaultImage","https://foozam.ml/assets/img/rest-default.jpg"),C[o].setAttribute("data-toggle","modal"),C[o].setAttribute("data-target","#knowMoreModal");if(C.length>20)for(var l=0;l<20;l+=1)C.pop();else for(;i.firstChild;)i.removeChild(i.firstChild);for(var c=0;c<C.length;c+=1)c%2===0&&((e=document.createElement("div")).setAttribute("class","row"),c<C.length-1?(e.appendChild(C[c]),e.appendChild(C[c+1])):e.appendChild(C[c]),i.appendChild(e));C.forEach(function(t){var e=t,a=new w;r()(e).click(function(){var e=t.getAttribute("name");a.setAttribute("cuisines",t.getAttribute("cuisines")),a.setAttribute("latitude",t.getAttribute("latitude")),a.setAttribute("longitude",t.getAttribute("longitude")),a.setAttribute("address",t.getAttribute("address")),a.setAttribute("userRating",t.getAttribute("userRating")),a.setAttribute("image",t.getAttribute("image")),a.setAttribute("defaultImage",t.getAttribute("defaultImage")),a.setAttribute("name",t.getAttribute("name"));var i,n=parseInt(localStorage.getItem("googleLoggedIn")),s=parseInt(localStorage.getItem("userLoggedIn"));n?i=JSON.parse(localStorage.getItem("googleUser")):s&&(i=JSON.parse(localStorage.getItem("loggedInUser"))),L.child("favorites").child("".concat(i.uid)).child("restaurants").child(t.getAttribute("name")).once("value").then(function(t){null!=t.val()&&(t.val().favorite?a.setAttribute("favorite",!0):a.setAttribute("favorite",!1),a.setFavorite())}),r()("#knowMoreTitle").html(e),r()("#knowMoreBody").html(a)})})}(t)})})}for(var G=1;G<=2;G+=1)D.push(document.getElementById("pred-".concat(G)));D.forEach(function(t){t.setAttribute("style","opacity: 0"),t.addEventListener("click",function(){_.innerHTML="Foozam Results For ",_.innerHTML=_.innerHTML.concat(t.innerHTML),q(t),P(t)})});for(var K=["foreign_desserts","fast_food","indian_desserts","indian_snacks","italian_food"],Y=[],V=0;V<5;V+=1)Y.push(document.getElementById("type-".concat(V)));var W=[];function Z(){var t,e=parseInt(localStorage.getItem("googleLoggedIn")),a=parseInt(localStorage.getItem("userLoggedIn"));e?t=JSON.parse(localStorage.getItem("googleUser")):a&&(t=JSON.parse(localStorage.getItem("loggedInUser")));var i=document.getElementById("foozam-img"),n=document.getElementById("img-file").files[0],o=new FileReader;n=new Blob([n]),o.addEventListener("loadend",function(){i.src=o.result;var e=new Date,a="".concat(e.getDate(),"-").concat(e.getMonth()+1,"-").concat(e.getFullYear()),n="".concat(e.getHours(),":").concat(e.getMinutes(),":").concat(e.getSeconds()),l={dateTime:"".concat(a," ").concat(n),image:o.result,group:localStorage.getItem("currentGroup")};B.child("".concat(t.uid)).push(l),s()(i.src).then(function(t){!function(t,e){r()(".lds-ring").css("display","inline-block");var a=K.indexOf(localStorage.getItem("currentGroup")),i="https://foozam-".concat(a,".serveo.net/predict");console.log(i);var n={async:!0,crossDomain:!0,url:i,method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},data:{img:t,group:localStorage.getItem("currentGroup")}};r.a.ajax(n).done(function(t){e(t)})}(t,function(t){if(t.success){r()(".lds-ring").css("display","none"),document.getElementById("foozam-guess").innerHTML="Foozam Guesses That The Image Contains . . .";var e=[];e.push(t.predictions[0].label),D[0].innerHTML=e[0].toUpperCase(),_.innerHTML="Foozam Results For ",_.innerHTML=_.innerHTML.concat(D[0].innerHTML),q(D[0]),P(D[0]),D[0].setAttribute("style","opacity: 1"),D[1].setAttribute("style","opacity: 0")}else r()(".lds-ring").css("display","none"),D[0].innerHTML="Try uploading a better picture.".toUpperCase(),D[1].innerHTML="Perhaps of the above food items".toUpperCase(),D[0].setAttribute("style","opacity: 1"),D[1].setAttribute("style","opacity: 1")})})}),n&&o.readAsDataURL(n)}Y.forEach(function(t){W.push(t.innerHTML),t.addEventListener("click",function(){window.location.reload()})});var X=document.getElementById("loader");function Q(){r()("body").removeClass("fade-out")}function $(){X.style.visibility="hidden",r()("body").addClass("fade-out"),setTimeout(Q,100)}window.addEventListener("load",function(){setTimeout($,3e3),r()("body").removeClass("fade-out")}),U.addEventListener("change",function(){Z()}),r()("#favoritesLink").click(function(){F(),J(),window.setTimeout(function(){location.replace("favorites.html")},800)})},61:function(t,e,a){t.exports=a(153)},73:function(t,e){},75:function(t,e){}},[[61,1,2]]]);
//# sourceMappingURL=main.4d004820.chunk.js.map