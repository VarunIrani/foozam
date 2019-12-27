/* eslint-disable radix */
/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable no-undef */
import database from "./database/database";
import RecipeInfo from "./components/recipe-info";
import KnowMoreRecipe from "./components/know-more-recipe";
import RestaurantInfo from "./components/restaurant-info";
import KnowMoreRestaurant from "./components/know-more-restaurant";

let favoritesRef;
let recipesRef;
let restaurantsRef;

function createKnowMoreRecipeComponents(recipes) {
	const recipesLength = Object.keys(recipes).length;
	localStorage.setItem("recipesLength", recipesLength);
	const knowMoreRecipeComps = [];
	const res = [];
	const knowMoreRecipeCompsStrings = [];
	for (let i = 0; i < recipesLength; i += 1) {
		res.push(recipes[Object.keys(recipes)[i]]);
		knowMoreRecipeComps.push(new KnowMoreRecipe());
		localStorage.setItem(`recipe-${i}-nutrients`, res[i].nutrients);
		localStorage.setItem(`recipe-${i}-dietLabels`, res[i].dietLabels);
		localStorage.setItem(`recipe-${i}-healthLabels`, res[i].healthLabels);
		localStorage.setItem(`recipe-${i}-ingredients`, res[i].ingredients);
		localStorage.setItem(`recipe-${i}-label`, res[i].label);

		knowMoreRecipeComps[i].setAttribute("url", res[i].url);
		knowMoreRecipeComps[i].setAttribute("image", res[i].image);
		knowMoreRecipeComps[i].setAttribute("defaultImage", res[i].defaultImage);
		knowMoreRecipeComps[i].setAttribute("label", res[i].label);

		localStorage.setItem(
			`recipe-${i}-title`,
			`${res[i].label} : ${res[i].source}`
		);
		localStorage.setItem(`recipe-${i}-favorite`, true);
		knowMoreRecipeCompsStrings.push(
			JSON.stringify(knowMoreRecipeComps[i].render())
		);
		localStorage.setItem(`knowMoreRecipe-${i}`, knowMoreRecipeCompsStrings[i]);
	}
}

function createKnowMoreRestaurantComponents(restaurants) {
	const restLength = Object.keys(restaurants).length;
	localStorage.setItem("restLength", restLength);
	const knowMoreRestComps = [];
	const res = [];
	const knowMoreRestCompsStrings = [];
	for (let i = 0; i < restLength; i += 1) {
		res.push(restaurants[Object.keys(restaurants)[i]]);
		knowMoreRestComps.push(new KnowMoreRestaurant());
		knowMoreRestComps[i].setAttribute("address", res[i].address);
		knowMoreRestComps[i].setAttribute("cuisines", res[i].cuisines);
		knowMoreRestComps[i].setAttribute("latitude", res[i].latitude);
		knowMoreRestComps[i].setAttribute("longitude", res[i].longitude);
		knowMoreRestComps[i].setAttribute("userRating", res[i].userRating);
		knowMoreRestComps[i].setAttribute("image", res[i].image);
		knowMoreRestComps[i].setAttribute("defaultImage", res[i].defaultImage);
		knowMoreRestComps[i].setAttribute("name", res[i].name);

		localStorage.setItem(`rest-${i}-name`, res[i].name);
		localStorage.setItem(`rest-${i}-favorite`, true);
		knowMoreRestCompsStrings.push(
			JSON.stringify(knowMoreRestComps[i].render())
		);
		localStorage.setItem(`knowMoreRest-${i}`, knowMoreRestCompsStrings[i]);
	}
}

function createRecipeComponents(recipes) {
	// Create recipe components with fetched data
	if (recipes) {
		const recipesLength = Object.keys(recipes).length;
		const recipeComps = [];
		const res = [];
		const recipeCompStrings = [];
		for (let i = 0; i < recipesLength; i += 1) {
			res.push(recipes[Object.keys(recipes)[i]]);
			recipeComps.push(new RecipeInfo());
			recipeComps[i].setAttribute("class", "col-lg-6 col-md-12 pb-3");
			recipeComps[i].setAttribute("id", i);
			recipeComps[i].setAttribute("label", res[i].label);
			recipeComps[i].setAttribute("source", res[i].source);
			recipeComps[i].setAttribute("url", res[i].url);
			recipeComps[i].setAttribute("image", res[i].image);
			recipeComps[i].setAttribute(
				"defaultImage",
				"https://foozam.ml/assets/img/recipe-default.jpg"
			);
			recipeComps[i].setAttribute("data-toggle", "modal");
			recipeComps[i].setAttribute("data-target", "#knowMoreModal");
			recipeCompStrings.push(JSON.stringify(recipeComps[i].render()));
			localStorage.setItem(`recipe-${i}`, recipeCompStrings[i]);
		}
		createKnowMoreRecipeComponents(recipes);
	}
}

function createRestaurantComponents(restaurants) {
	// Create restaurant components with fetched data
	if (restaurants) {
		const restLength = Object.keys(restaurants).length;
		const restComps = [];
		const res = [];
		const restCompStrings = [];
		for (let i = 0; i < restLength; i += 1) {
			res.push(restaurants[Object.keys(restaurants)[i]]);
			restComps.push(new RestaurantInfo());
			restComps[i].setAttribute("class", "col-lg-6 col-md-12 pb-3");
			restComps[i].setAttribute("id", i);
			restComps[i].setAttribute("name", res[i].name);
			restComps[i].setAttribute("longitude", res[i].longitude);
			restComps[i].setAttribute("latitude", res[i].latitude);
			restComps[i].setAttribute("address", res[i].address);
			restComps[i].setAttribute("cuisines", res[i].cuisines);
			restComps[i].setAttribute("image", res[i].image);
			restComps[i].setAttribute("userRating", res[i].userRating);
			restComps[i].setAttribute(
				"defaultImage",
				"https://foozam.ml/assets/img/rest-default.jpg"
			);
			restComps[i].setAttribute("data-toggle", "modal");
			restComps[i].setAttribute("data-target", "#knowMoreModal");
			restCompStrings.push(JSON.stringify(restComps[i].render()));
			localStorage.setItem(`restaurant-${i}`, restCompStrings[i]);
		}
		createKnowMoreRestaurantComponents(restaurants);
	}
}

function getRecipes() {
	const googleLoggedIn = parseInt(localStorage.getItem("googleLoggedIn"));
	const userLoggedIn = parseInt(localStorage.getItem("userLoggedIn"));
	let user;
	if (googleLoggedIn) {
		user = JSON.parse(localStorage.getItem("googleUser"));
	} else if (userLoggedIn) {
		user = JSON.parse(localStorage.getItem("loggedInUser"));
	}
	favoritesRef = database.child("favorites");
	recipesRef = favoritesRef.child(`${user.uid}`).child("recipes");
	recipesRef.once("value").then(recipes => {
		const recipeData = recipes.val();
		createRecipeComponents(recipeData);
	});
}

function getRestaruants() {
	const googleLoggedIn = parseInt(localStorage.getItem("googleLoggedIn"));
	const userLoggedIn = parseInt(localStorage.getItem("userLoggedIn"));
	let user;
	if (googleLoggedIn) {
		user = JSON.parse(localStorage.getItem("googleUser"));
	} else if (userLoggedIn) {
		user = JSON.parse(localStorage.getItem("loggedInUser"));
	}
	favoritesRef = database.child("favorites");
	restaurantsRef = favoritesRef.child(`${user.uid}`).child("restaurants");
	restaurantsRef.once("value").then(restaurants => {
		const restaurantData = restaurants.val();
		createRestaurantComponents(restaurantData);
	});
}

export function loadRecipes() {
	getRecipes();
}

export function loadRestaurants() {
	getRestaruants();
}
