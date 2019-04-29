/* eslint-disable no-undef */
import $ from 'jquery';
import RecipeInfo from './components/recipe-info';

alert('Favorites');

function loadRecipes() {
  alert('Favorites');
  const comp = new RecipeInfo();
}

function loadRestaurants() {}

$(document).ready(() => {
  loadRecipes();
  loadRestaurants();
  // loadBlogs();
});
