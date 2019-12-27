/* eslint-disable radix */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-param-reassign */
/* eslint-disable func-names */
/* eslint-disable no-console */
/* eslint-disable eol-last */
/* eslint-disable no-undef */
import $ from "jquery";
// Database Imports
import { setRecipeValues, setRestValues } from "./set-data";
import RestaurantInfo from "../components/restaurant-info";
import RecipeInfo from "../components/recipe-info";
import database from "./database";
import KnowMoreRestaurant from "../components/know-more-restaurant";
import KnowMoreRecipe from "../components/know-more-recipe";

const resComps = [];
const recipeComps = [];

export function addRecipes(data) {
	const recipesRef = database.child("recipes");
	const recipeTabPane = document.getElementById("link1");
	const res = data.hits;
	let row;
	const tempRecipes = [];

	recipesRef.remove();

	for (let i = 0; i < res.length; i += 1) {
		tempRecipes.push(setRecipeValues(res[i].recipe));
		tempRecipes[i].id = i;
		recipesRef.push(tempRecipes[i]);
		recipeComps.push(new RecipeInfo());
		recipeComps[i].setAttribute("class", "col-lg-6 col-md-12 pb-3");
		recipeComps[i].setAttribute("id", i);
		recipeComps[i].setAttribute("label", res[i].recipe.label);
		recipeComps[i].setAttribute("source", res[i].recipe.source);
		recipeComps[i].setAttribute("url", res[i].recipe.url);
		recipeComps[i].setAttribute("image", res[i].recipe.image);
		recipeComps[i].setAttribute(
			"defaultImage",
			"https://foozam.ml/assets/img/recipe-default.jpg"
		);
		recipeComps[i].setAttribute("data-toggle", "modal");
		recipeComps[i].setAttribute("data-target", "#knowMoreModal");
	}

	if (recipeComps.length > 20) {
		for (let i = 0; i < 20; i += 1) {
			recipeComps.pop();
		}
	} else {
		while (recipeTabPane.firstChild) {
			recipeTabPane.removeChild(recipeTabPane.firstChild);
		}
	}

	for (let j = 0; j < recipeComps.length; j += 1) {
		if (j % 2 === 0) {
			row = document.createElement("div");
			row.setAttribute("class", "row");
			if (j < recipeComps.length - 1) {
				row.appendChild(recipeComps[j]);
				row.appendChild(recipeComps[j + 1]);
			} else {
				row.appendChild(recipeComps[j]);
			}
			recipeTabPane.appendChild(row);
		}
	}

	recipeComps.forEach(recipe => {
		const $recipe = recipe;
		const knowMoreRecipe = new KnowMoreRecipe();
		let ingredients;
		let dietLabels;
		let healthLabels;
		let nutrients;
		const tempNut = [];
		$($recipe).click(() => {
			const title = `${recipe.getAttribute("label")} : ${recipe.getAttribute(
				"source"
			)}`;
			const recipeData = recipesRef
				.orderByChild("label")
				.equalTo(recipe.getAttribute("label"))
				.limitToFirst(1);
			recipeData.on("value", snap => {
				const key = Object.keys(snap.val())[0];
				const result = snap.child(key).val();
				ingredients = result.ingredientLines
					? result.ingredientLines.join("|")
					: "Sorry. No Ingredients Here.";
				dietLabels = result.dietLabels
					? result.dietLabels.join("|")
					: "Sorry. No Diet Labels Here.";
				healthLabels = result.healthLabels
					? result.healthLabels.join("|")
					: "Sorry. No Health Labels Here.";
				for (let i = 0; i < 5; i += 1) {
					tempNut.push(result.nutrients[i]);
				}
				nutrients = tempNut ? JSON.stringify(tempNut) : "";
				knowMoreRecipe.setAttribute("nutrients", nutrients);
				knowMoreRecipe.setAttribute("ingredients", ingredients);
				knowMoreRecipe.setAttribute("dietLabels", dietLabels);
				knowMoreRecipe.setAttribute("healthLabels", healthLabels);
				if (ingredients) {
					knowMoreRecipe.getIngredients();
				}
				if (dietLabels) {
					knowMoreRecipe.getDietLabels();
				}
				if (healthLabels) {
					knowMoreRecipe.getHealthLabels();
				}
				if (nutrients) {
					knowMoreRecipe.getNutrients();
				}
			});
			knowMoreRecipe.setAttribute("source", recipe.getAttribute("source"));
			knowMoreRecipe.setAttribute("url", recipe.getAttribute("url"));
			knowMoreRecipe.setAttribute("image", recipe.getAttribute("image"));
			knowMoreRecipe.setAttribute(
				"defaultImage",
				recipe.getAttribute("defaultImage")
			);
			knowMoreRecipe.setAttribute("label", recipe.getAttribute("label"));
			const googleLoggedIn = parseInt(localStorage.getItem("googleLoggedIn"));
			const userLoggedIn = parseInt(localStorage.getItem("userLoggedIn"));
			let user;
			if (googleLoggedIn) {
				user = JSON.parse(localStorage.getItem("googleUser"));
			} else if (userLoggedIn) {
				user = JSON.parse(localStorage.getItem("loggedInUser"));
			}
			const favoritesRef = database.child("favorites");
			favoritesRef
				.child(`${user.uid}`)
				.child("recipes")
				.child(recipe.getAttribute("label"))
				.once("value")
				.then(snap => {
					if (snap.val() != null) {
						if (snap.val().favorite) {
							knowMoreRecipe.setAttribute("favorite", true);
						} else {
							knowMoreRecipe.setAttribute("favorite", false);
						}
						knowMoreRecipe.setFavorite();
					}
				});
			$("#knowMoreTitle").html(title);
			$("#knowMoreBody").html(knowMoreRecipe);
		});
	});
}

export function addRestaurants(data) {
	const restRef = database.child("restaurants");
	const restTabPane = document.getElementById("link2");
	const res = data.restaurants;
	let row;
	const tempRest = [];

	restRef.remove();

	for (let i = 0; i < res.length; i += 1) {
		tempRest.push(setRestValues(res[i].restaurant));
		restRef.push(tempRest[i]);
		resComps.push(new RestaurantInfo());
		resComps[i].setAttribute("class", "col-lg-6 col-md-12 pb-3");
		resComps[i].setAttribute("id", res[i].restaurant.id);
		resComps[i].setAttribute("name", res[i].restaurant.name);
		resComps[i].setAttribute("longitude", res[i].restaurant.location.longitude);
		resComps[i].setAttribute("latitude", res[i].restaurant.location.latitude);
		resComps[i].setAttribute("address", res[i].restaurant.location.address);
		resComps[i].setAttribute("cuisines", res[i].restaurant.cuisines);
		resComps[i].setAttribute("image", res[i].restaurant.thumb);
		resComps[i].setAttribute(
			"userRating",
			res[i].restaurant.user_rating.aggregate_rating
		);
		resComps[i].setAttribute(
			"defaultImage",
			"https://foozam.ml/assets/img/rest-default.jpg"
		);
		resComps[i].setAttribute("data-toggle", "modal");
		resComps[i].setAttribute("data-target", "#knowMoreModal");
	}

	if (resComps.length > 20) {
		for (let i = 0; i < 20; i += 1) {
			resComps.pop();
		}
	} else {
		while (restTabPane.firstChild) {
			restTabPane.removeChild(restTabPane.firstChild);
		}
	}

	for (let j = 0; j < resComps.length; j += 1) {
		if (j % 2 === 0) {
			row = document.createElement("div");
			row.setAttribute("class", "row");
			if (j < resComps.length - 1) {
				row.appendChild(resComps[j]);
				row.appendChild(resComps[j + 1]);
			} else {
				row.appendChild(resComps[j]);
			}
			restTabPane.appendChild(row);
		}
	}

	resComps.forEach(restaurant => {
		const $rest = restaurant;
		const knowMoreRest = new KnowMoreRestaurant();
		$($rest).click(() => {
			const title = restaurant.getAttribute("name");
			knowMoreRest.setAttribute(
				"cuisines",
				restaurant.getAttribute("cuisines")
			);
			knowMoreRest.setAttribute(
				"latitude",
				restaurant.getAttribute("latitude")
			);
			knowMoreRest.setAttribute(
				"longitude",
				restaurant.getAttribute("longitude")
			);
			knowMoreRest.setAttribute("address", restaurant.getAttribute("address"));
			knowMoreRest.setAttribute(
				"userRating",
				restaurant.getAttribute("userRating")
			);
			knowMoreRest.setAttribute("image", restaurant.getAttribute("image"));
			knowMoreRest.setAttribute(
				"defaultImage",
				restaurant.getAttribute("defaultImage")
			);
			knowMoreRest.setAttribute("name", restaurant.getAttribute("name"));
			const googleLoggedIn = parseInt(localStorage.getItem("googleLoggedIn"));
			const userLoggedIn = parseInt(localStorage.getItem("userLoggedIn"));
			let user;
			if (googleLoggedIn) {
				user = JSON.parse(localStorage.getItem("googleUser"));
			} else if (userLoggedIn) {
				user = JSON.parse(localStorage.getItem("loggedInUser"));
			}
			const favoritesRef = database.child("favorites");
			favoritesRef
				.child(`${user.uid}`)
				.child("restaurants")
				.child(restaurant.getAttribute("name"))
				.once("value")
				.then(snap => {
					if (snap.val() != null) {
						if (snap.val().favorite) {
							knowMoreRest.setAttribute("favorite", true);
						} else {
							knowMoreRest.setAttribute("favorite", false);
						}
						knowMoreRest.setFavorite();
					}
				});
			$("#knowMoreTitle").html(title);
			$("#knowMoreBody").html(knowMoreRest);
		});
	});
}
