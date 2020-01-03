/* eslint-disable radix */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-loop-func */
/* eslint-disable no-alert */
/* eslint-disable eol-last */
/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable func-names */
import $ from "jquery";
import image2base64 from "image-to-base64";
import { getRestaurants } from "./api/zomato-search";
import { getRecipes } from "./api/recipe-search";

// Component imports
import RestaurantInfo from "./components/restaurant-info";
import RecipeInfo from "./components/recipe-info";
import KnowMoreRestaurant from "./components/know-more-restaurant";
import KnowMoreRecipe from "./components/know-more-recipe";

// Database imports
import database from "./database/database";
import { addRestaurants, addRecipes } from "./database/add-data";

// Page function imports
import { loadRecipes, loadRestaurants } from "./favorites";
require("dotenv").config();

const file = document.getElementById("img-file");
const resultTitle = document.getElementById("result-title");

const imageRef = database.child("image");

customElements.define("restaurant-info", RestaurantInfo);
customElements.define("recipe-info", RecipeInfo);
customElements.define("know-more-restaurant", KnowMoreRestaurant);
customElements.define("know-more-recipe", KnowMoreRecipe);

const pred = [];

// Get Recipes for the predicted food item
function recipes(prediction) {
	getRecipes(
		process.env.REACT_APP_EDAMAM_API_KEY,
		process.env.REACT_APP_EDAMAM_APP_ID,
		prediction.innerHTML,
		0,
		20,
		data => {
			addRecipes(data);
		}
	);
}

// Get restaurants for the predicted food item
function restaurants(prediction) {
	let lat;
	let long;
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(pos => {
			lat = pos.coords.latitude;
			long = pos.coords.longitude;
			getRestaurants(
				process.env.REACT_APP_ZOMATO,
				prediction.innerHTML,
				5,
				"city",
				20,
				lat,
				long,
				data => {
					addRestaurants(data);
				}
			);
		});
	}
}

for (let i = 1; i <= 2; i += 1) {
	pred.push(document.getElementById(`pred-${i}`));
}

pred.forEach(prediction => {
	prediction.setAttribute("style", "opacity: 0");
	prediction.addEventListener("click", () => {
		resultTitle.innerHTML = "Foozam Results For ";
		resultTitle.innerHTML = resultTitle.innerHTML.concat(prediction.innerHTML);
		recipes(prediction);
		restaurants(prediction);
	});
});

const GROUPS = [
	"foreign_desserts",
	"fast_food",
	"indian_desserts",
	"indian_snacks",
	"italian_food"
];

// const modelButton = document.getElementById('model-dropdown-button');
const modelTypes = [];
for (let i = 0; i < 5; i += 1) {
	modelTypes.push(document.getElementById(`type-${i}`));
}
const groups = [];
modelTypes.forEach(modelType => {
	groups.push(modelType.innerHTML);
	modelType.addEventListener("click", () => {
		window.location.reload();
	});
});

// The predict function which makes a request to the flask server for predictions
function predict(image, callback) {
	// const ports = [5000, 5500, 7000, 7500, 8000];
	$(".lds-ring").css("display", "inline-block");

	const currentIndex = GROUPS.indexOf(localStorage.getItem("currentGroup"));
	const url = `http://foozam-${currentIndex}.localtunnel.me/predict`;
	console.log(url);
	const settings = {
		async: true,
		crossDomain: true,
		url,
		method: "POST",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded"
		},
		data: {
			img: image,
			group: localStorage.getItem("currentGroup")
		}
	};

	$.ajax(settings).done(response => {
		callback(response);
	});
}

// Image upload functionality
function previewFile() {
	const googleLoggedIn = parseInt(localStorage.getItem("googleLoggedIn"));
	const userLoggedIn = parseInt(localStorage.getItem("userLoggedIn"));
	let user;
	if (googleLoggedIn) {
		user = JSON.parse(localStorage.getItem("googleUser"));
	} else if (userLoggedIn) {
		user = JSON.parse(localStorage.getItem("loggedInUser"));
	}
	const preview = document.getElementById("foozam-img"); // selects the query named img

	let currFile = document.getElementById("img-file").files[0]; // sames as here
	const reader = new FileReader();
	currFile = new Blob([currFile]);

	reader.addEventListener("loadend", () => {
		preview.src = reader.result;
		const today = new Date();
		const date = `${today.getDate()}-${today.getMonth() +
			1}-${today.getFullYear()}`;
		const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
		const dateTime = `${date} ${time}`;
		const imageInfo = {
			image: reader.result,
			group: localStorage.getItem("currentGroup")
		};
		imageRef
			.child(`${user.uid}`)
			.child(`${dateTime}`)
			.set(imageInfo);
		image2base64(preview.src).then(image => {
			predict(image, res => {
				if (res.success) {
					$(".lds-ring").css("display", "none");
					const foozamGuess = document.getElementById("foozam-guess");
					foozamGuess.innerHTML =
						"Foozam Guesses That The Image Contains . . .";
					const results = [];
					results.push(res.predictions[0].label);
					pred[0].innerHTML = results[0].toUpperCase();
					resultTitle.innerHTML = "Foozam Results For ";
					resultTitle.innerHTML = resultTitle.innerHTML.concat(
						pred[0].innerHTML
					);
					recipes(pred[0]);
					restaurants(pred[0]);
					pred[0].setAttribute("style", "opacity: 1");
					pred[1].setAttribute("style", "opacity: 0");
				} else {
					$(".lds-ring").css("display", "none");
					pred[0].innerHTML = "Try uploading a better picture.".toUpperCase();
					pred[1].innerHTML = "Perhaps of the above food items".toUpperCase();
					pred[0].setAttribute("style", "opacity: 1");
					pred[1].setAttribute("style", "opacity: 1");
				}
			});
		});
	});

	if (currFile) {
		reader.readAsDataURL(currFile);
	}
}

// Page loader logic
const loader = document.getElementById("loader");

function showBody() {
	$("body").removeClass("fade-out");
}

function hideLoader() {
	loader.style.visibility = "hidden";
	$("body").addClass("fade-out");
	setTimeout(showBody, 0.1 * 1000);
}

window.addEventListener("load", () => {
	setTimeout(hideLoader, 3 * 1000);
	$("body").removeClass("fade-out");
});

file.addEventListener("change", () => {
	previewFile();
});

const $favoritesLink = $("#favoritesLink");
$favoritesLink.click(() => {
	loadRecipes();
	loadRestaurants();
	window.setTimeout(() => {
		location.replace("favorites.html");
	}, 800);
});
