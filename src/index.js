/* eslint-disable no-alert */
/* eslint-disable eol-last */
/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable func-names */
import $ from 'jquery';
// import axios from 'axios';
import image2base64 from 'image-to-base64';
import KEYS from './api/keys';
import { getRestaurants } from './api/zomato-search';
import { getRecipes } from './api/recipe-search';

// Component imports
import RestaurantInfo from './components/restaurant-info';
import RecipeInfo from './components/recipe-info';
import KnowMoreRestaurant from './components/know-more-restaurant';
import KnowMoreRecipe from './components/know-more-recipe';

// Database imports
import database from './database/database';
import { addRestaurants, addRecipes } from './database/add-data';

const file = document.getElementById('img-file');
const resultTitle = document.getElementById('result-title');

const imageRef = database.child('image');

customElements.define('restaurant-info', RestaurantInfo);
customElements.define('recipe-info', RecipeInfo);
customElements.define('know-more-restaurant', KnowMoreRestaurant);
customElements.define('know-more-recipe', KnowMoreRecipe);

const pred = [];

function recipes(prediction) {
  getRecipes(KEYS.EDAMAM.API_KEY, KEYS.EDAMAM.APP_ID, prediction.innerHTML, 0, 20, (data) => {
    addRecipes(data);
  });
}

function restaurants(prediction) {
  let lat;
  let long;
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((pos) => {
      lat = pos.coords.latitude;
      long = pos.coords.longitude;
      getRestaurants(KEYS.ZOMATO, prediction.innerHTML, 5, 'city', 20, lat, long, (data) => {
        addRestaurants(data);
      });
    });
  }
}

pred.push(document.getElementById(`pred-${1}`));
pred[0].setAttribute('style', 'opacity: 0');

pred.forEach((prediction) => {
  prediction.addEventListener('click', () => {
    resultTitle.innerHTML = 'Foozam Results For ';
    resultTitle.innerHTML = resultTitle.innerHTML.concat(prediction.innerHTML);
    recipes(prediction);
    restaurants(prediction);
  });
});

function predict(image, callback) {
  const url = 'https://a04c55b7.ngrok.io/predict';
  const settings = {
    async: true,
    crossDomain: true,
    url,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    data: `{"img": "${image}"}`,
  };

  $.ajax(settings).done((response) => {
    console.log(response);
    callback(response);
  });
}

function previewFile() {
  const preview = document.getElementById('foozam-img'); // selects the query named img

  let currFile = document.getElementById('img-file').files[0]; // sames as here
  const reader = new FileReader();
  currFile = new Blob([currFile]);

  reader.addEventListener('loadend', () => {
    preview.src = reader.result;
    imageRef.push(reader.result);
    image2base64(preview.src).then((image) => {
      predict(image, (res) => {
        const foozamGuess = document.getElementById('foozam-guess');
        foozamGuess.innerHTML = 'Foozam Guesses That The Image Contains . . .';
        // const results = [];
        // results.push(res.predictions[0]);
        // pred[0].innerHTML = results[0].toUpperCase();
        // resultTitle.innerHTML = 'Foozam Results For ';
        // resultTitle.innerHTML = resultTitle.innerHTML.concat(pred[0].innerHTML);
        // recipes(pred[0]);
        // restaurants(pred[0]);
        pred[0].setAttribute('style', 'opacity: 1');
      });
    });
  });

  if (currFile) {
    reader.readAsDataURL(currFile);
  }
}

const loader = document.getElementById('loader');

function showBody() {
  $('body').removeClass('fade-out');
}

function hideLoader() {
  loader.style.visibility = 'hidden';
  $('body').addClass('fade-out');
  setTimeout(showBody, 0.1 * 1000);
}

window.addEventListener('load', () => {
  setTimeout(hideLoader, 5 * 1000);
  $('body').removeClass('fade-out');
});

file.addEventListener('change', () => {
  previewFile();
});
