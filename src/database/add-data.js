/* eslint-disable eol-last */
/* eslint-disable no-undef */

// Database Imports
import {
  setRecipeValues,
  setRestValues,
} from './set-data';
import RestaurantInfo from '../components/restaurant-info';
import RecipeInfo from '../components/recipe-info';
import database from './database';
// const users = database.child('users');

export function addRecipes(data) {
  const recipesRef = database.child('recipes');
  const recipeTabPane = document.getElementById('link1');
  const res = data.hits;
  const recipeComps = [];
  let row;
  const tempRecipes = [];

  while (recipeTabPane.firstChild) {
    recipeTabPane.removeChild(recipeTabPane.firstChild);
  }

  recipesRef.remove();

  for (let i = 0; i < res.length; i += 1) {
    tempRecipes.push(setRecipeValues(res[i].recipe));
    tempRecipes[i].id = i;
    recipesRef.push(tempRecipes[i]);
    recipeComps.push(new RecipeInfo());
    recipeComps[i].setAttribute('class', 'col-lg-6 col-md-12 pb-3');
    recipeComps[i].setAttribute('id', i);
    recipeComps[i].setAttribute('label', res[i].recipe.label);
    recipeComps[i].setAttribute('source', res[i].recipe.source);
    recipeComps[i].setAttribute('sourceUrl', res[i].recipe.url);
    recipeComps[i].setAttribute('image', res[i].recipe.image);
    recipeComps[i].setAttribute('ingredients', res[i].recipe.ingredientLines);
    recipeComps[i].setAttribute(
      'defaultImage',
      'https://foozam.ml/assets/img/recipe-default.png',
    );
  }

  for (let j = 0; j < recipeComps.length - 1; j += 1) {
    if (j % 2 === 0) {
      row = document.createElement('div');
      row.setAttribute('class', 'row');
      row.appendChild(recipeComps[j]);
      row.appendChild(recipeComps[j + 1]);
      recipeTabPane.appendChild(row);
    }
  }
}

export function addRestaurants(data) {
  const restRef = database.child('restaurants');
  const restTabPane = document.getElementById('link2');
  const res = data.restaurants;
  const resComps = [];
  let row;
  const tempRest = [];

  while (restTabPane.firstChild) {
    restTabPane.removeChild(restTabPane.firstChild);
  }

  restRef.remove();

  for (let i = 0; i < res.length; i += 1) {
    tempRest.push(setRestValues(res[i].restaurant));
    restRef.push(tempRest[i]);
    resComps.push(new RestaurantInfo());
    resComps[i].setAttribute('class', 'col-lg-6 col-md-12 pb-3');
    resComps[i].setAttribute('id', res[i].restaurant.id);
    resComps[i].setAttribute('name', res[i].restaurant.name);
    resComps[i].setAttribute('longitude', res[i].restaurant.location.longitude);
    resComps[i].setAttribute('latitude', res[i].restaurant.location.latitude);
    resComps[i].setAttribute('address', res[i].restaurant.location.address);
    resComps[i].setAttribute('cuisines', res[i].restaurant.cuisines);
    resComps[i].setAttribute('image', res[i].restaurant.thumb);
    resComps[i].setAttribute('userRating', res[i].restaurant.user_rating.aggregate_rating);
    resComps[i].setAttribute('defaultImage', 'https://foozam.ml/assets/img/rest-default.png');
  }

  for (let j = 0; j < resComps.length - 1; j += 1) {
    if (j % 2 === 0) {
      row = document.createElement('div');
      row.setAttribute('class', 'row');
      row.appendChild(resComps[j]);
      row.appendChild(resComps[j + 1]);
      restTabPane.appendChild(row);
    }
  }
}