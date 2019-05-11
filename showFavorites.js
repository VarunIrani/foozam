/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
/* eslint-disable no-loop-func */
/* eslint-disable radix */
/* eslint-disable no-undef */
/* eslint-disable no-console */
const recipesLength = parseInt(localStorage.getItem('recipesLength'));
const restLength = parseInt(localStorage.getItem('restLength'));
const config = {
  apiKey: 'AIzaSyCK5tTuXD5WbHmhC-hBj-giHh3JLnb_fhE',
  authDomain: 'foozam-test.firebaseapp.com',
  databaseURL: 'https://foozam-test.firebaseio.com',
  projectId: 'foozam-test',
  storageBucket: '',
  messagingSenderId: '791490333729',
};

function showRecipes() {
  const recipes = [];
  const recipeTemplates = [];
  const recipeTabPane = document.getElementById('link1');
  for (let i = 0; i < recipesLength; i += 1) {
    let recipe = '';
    recipes.push(JSON.parse(localStorage.getItem(`recipe-${i}`)));
    for (let j = 0; j < recipes[i].values.length; j += 1) {
      recipes[i].strings[j] += recipes[i].values[j];
    }
    for (let k = 0; k < recipes[i].strings.length; k += 1) {
      recipe += recipes[i].strings[k];
    }
    recipe = `<div data-toggle="modal" data-target="#knowMoreModal" class="col-lg-6 col-md-12 pb-3" onclick="showKnowMoreRecipe(${i})" id="recipe recipe-${i}">${recipe}</div>`;
    recipeTemplates.push(recipe);
  }
  let row;
  for (let j = 0; j < recipeTemplates.length; j += 1) {
    if (j % 2 === 0) {
      row = document.createElement('div');
      row.setAttribute('class', 'row');
      if (j < recipeTemplates.length - 1) {
        row.innerHTML += recipeTemplates[j];
        row.innerHTML += recipeTemplates[j + 1];
      } else {
        row.innerHTML += recipeTemplates[j];
      }
      recipeTabPane.appendChild(row);
    }
  }
  const white = localStorage.getItem('white_color');
  if (white === 'true') $('.card-title').css('color', 'black');
  else $('#link1 > .card-title').css('color', 'white');
}

function showRestaurants() {
  const restaurants = [];
  const restaurantTemplates = [];
  const restTabPane = document.getElementById('link2');
  for (let i = 0; i < restLength; i += 1) {
    let restaurant = '';
    restaurants.push(JSON.parse(localStorage.getItem(`restaurant-${i}`)));
    for (let j = 0; j < restaurants[i].values.length; j += 1) {
      restaurants[i].strings[j] += restaurants[i].values[j];
    }
    for (let k = 0; k < restaurants[i].strings.length; k += 1) {
      restaurant += restaurants[i].strings[k];
    }
    restaurant = `<div data-toggle="modal" data-target="#knowMoreModal" class="col-lg-6 col-md-12 pb-3" onclick="showKnowMoreRestaurant(${i})" id="restaurant restaruant-${i}">${restaurant}</div>`;
    restaurantTemplates.push(restaurant);
  }
  let row;
  for (let j = 0; j < restaurantTemplates.length; j += 1) {
    if (j % 2 === 0) {
      row = document.createElement('div');
      row.setAttribute('class', 'row');
      if (j < restaurantTemplates.length - 1) {
        row.innerHTML += restaurantTemplates[j];
        row.innerHTML += restaurantTemplates[j + 1];
      } else {
        row.innerHTML += restaurantTemplates[j];
      }
      restTabPane.appendChild(row);
    }
  }
  const white = localStorage.getItem('white_color');
  if (white === 'true') $('.card-title').css('color', 'black');
  else $('#link2 > .card-title').css('color', 'white');
}

function getIngredients(ingredients) {
  const ingredientsArray = ingredients.split('|');
  const ingList = document.getElementById('knowMoreBody').querySelector('#ingList');
  ingredientsArray.forEach((ingredient) => {
    const item = document.createElement('li');
    item.setAttribute('style', 'color: black');
    item.innerHTML = ingredient ? `${ingredient}` : 'Sorry. No Ingredients Here.';
    ingList.appendChild(item);
  });
}

function getHealthLabels(healthLabels) {
  const healthLabelsArray = healthLabels.split('|');
  const healthList = document.getElementById('knowMoreBody').querySelector('#healthList');
  healthLabelsArray.forEach((health) => {
    const item = document.createElement('li');
    item.setAttribute('style', 'color: black');
    item.innerHTML = health ? `${health}` : 'Sorry. No Health Labels Here.';
    healthList.appendChild(item);
  });
}

function getDietLabels(dietLabels) {
  const dietLabelsArray = dietLabels.split('|');
  const dietList = document.getElementById('knowMoreBody').querySelector('#dietList');
  dietLabelsArray.forEach((diet) => {
    const item = document.createElement('li');
    item.setAttribute('style', 'color: black');
    item.innerHTML = diet ? `${diet}` : 'Sorry. No Diet Labels Here.';
    dietList.appendChild(item);
  });
}

function getNutrients(nutrients) {
  const nutrientsArray = JSON.parse(nutrients);
  const pieCanvas = document.getElementById('knowMoreBody').querySelector('#pieCanvas');
  const values = [];
  const labels = [];
  nutrientsArray.forEach((nutrient) => {
    values.push(Math.trunc(nutrient.total));
    labels.push(`${nutrient.label} (${nutrient.unit})`);
  });
  const data = {
    datasets: [
      {
        data: values,
        label: 'Nutrients',
        backgroundColor: ['#003f5c', '#58508d', '#bc5090', '#ff6361', '#ffa600'],
        borderWidth: 1,
      },
    ],
    labels,
  };
  const options = {
    animation: {
      animateScale: true,
    },
    legend: {
      labels: {
        fontSize: 16,
      },
    },
  };
  const pieChart = new Chart(pieCanvas, {
    type: 'doughnut',
    data,
    options,
  });
}

function checkFavorite(favorite) {
  const favoriteIcon = document.getElementById('knowMoreBody').querySelector('#favoriteIcon');
  if (favorite === 'true') {
    favoriteIcon.setAttribute('style', 'color: gold; font-size: 30px; opacity: 1');
  }
}

function removeRecipe(i) {
  const googleLoggedIn = parseInt(localStorage.getItem('googleLoggedIn'));
  const userLoggedIn = parseInt(localStorage.getItem('userLoggedIn'));
  let user;
  if (googleLoggedIn) {
    user = JSON.parse(localStorage.getItem('googleUser'));
  } else if (userLoggedIn) {
    user = JSON.parse(localStorage.getItem('loggedInUser'));
  }
  const fb = firebase.initializeApp(config);
  const database = fb.database().ref();
  const favoritesRef = database.child('favorites');
  const recipe = localStorage.getItem(`recipe-${i}-label`);
  favoritesRef
    .child(`${user.uid}`)
    .child('recipes')
    .child(recipe)
    .remove();
  localStorage.setItem('recipesLength', recipesLength - 1);
  localStorage.removeItem(`recipe-${i}`);
  localStorage.removeItem(`knowMoreRecipe-${i}`);
  localStorage.setItem('rem-fav', true);
  window.setTimeout(() => {
    location.replace('index.html');
  }, 3000);
}

function removeRestaurant(i) {
  const googleLoggedIn = parseInt(localStorage.getItem('googleLoggedIn'));
  const userLoggedIn = parseInt(localStorage.getItem('userLoggedIn'));
  let user;
  if (googleLoggedIn) {
    user = JSON.parse(localStorage.getItem('googleUser'));
  } else if (userLoggedIn) {
    user = JSON.parse(localStorage.getItem('loggedInUser'));
  }
  const fb = firebase.initializeApp(config);
  const database = fb.database().ref();
  const favoritesRef = database.child('favorites');
  const restaurant = localStorage.getItem(`rest-${i}-name`);
  favoritesRef
    .child(`${user.uid}`)
    .child('restaurants')
    .child(restaurant)
    .remove();
  localStorage.setItem('restLength', restLength - 1);
  localStorage.removeItem(`restaurant-${i}`);
  localStorage.removeItem(`knowMoreRest-${i}`);
  localStorage.setItem('rem-fav', true);
  window.setTimeout(() => {
    location.replace('index.html');
  }, 3000);
}

function showKnowMoreRecipe(index) {
  const knowMoreRecipe = JSON.parse(localStorage.getItem(`knowMoreRecipe-${index}`));
  let knowMoreRecipeTemplate = '';
  for (let j = 0; j < knowMoreRecipe.values.length; j += 1) {
    knowMoreRecipe.strings[j] += knowMoreRecipe.values[j];
  }
  for (let k = 0; k < knowMoreRecipe.strings.length; k += 1) {
    knowMoreRecipeTemplate += knowMoreRecipe.strings[k];
  }
  knowMoreRecipeTemplate = knowMoreRecipeTemplate.replace('@', 'on');
  knowMoreRecipeTemplate = knowMoreRecipeTemplate.replace('null', `removeRecipe(${index})`);
  $('#knowMoreBody').html(knowMoreRecipeTemplate);
  $('#knowMoreTitle').html(localStorage.getItem(`recipe-${index}-title`));
  getIngredients(localStorage.getItem(`recipe-${index}-ingredients`));
  getDietLabels(localStorage.getItem(`recipe-${index}-dietLabels`));
  getHealthLabels(localStorage.getItem(`recipe-${index}-healthLabels`));
  getNutrients(localStorage.getItem(`recipe-${index}-nutrients`));
  checkFavorite(localStorage.getItem(`recipe-${index}-favorite`));
}

function showKnowMoreRestaurant(index) {
  const knowMoreRestaurant = JSON.parse(localStorage.getItem(`knowMoreRest-${index}`));
  let knowMoreRestTemplate = '';
  for (let j = 0; j < knowMoreRestaurant.values.length; j += 1) {
    knowMoreRestaurant.strings[j] += knowMoreRestaurant.values[j];
  }
  for (let k = 0; k < knowMoreRestaurant.strings.length; k += 1) {
    knowMoreRestTemplate += knowMoreRestaurant.strings[k];
  }
  knowMoreRestTemplate = knowMoreRestTemplate.replace('@', 'on');
  knowMoreRestTemplate = knowMoreRestTemplate.replace('null', `removeRestaurant(${index})`);
  $('#knowMoreBody').html(knowMoreRestTemplate);
  $('#knowMoreTitle').html(localStorage.getItem(`rest-${index}-name`));
  checkFavorite(localStorage.getItem(`rest-${index}-favorite`));
}

$(document).ready(() => {
  if (recipesLength !== 0) {
    showRecipes();
  }
  if (restLength !== 0) {
    showRestaurants();
  }
});
