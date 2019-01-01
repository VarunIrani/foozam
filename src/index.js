/* eslint-disable eol-last */
/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable func-names */
// Clarifai Imports
import {
  App,
} from 'clarifai';

// API imports
import KEYS from './api/keys';
import {
  getRestaurants,
} from './api/zomato-search';
import {
  getRecipes,
} from './api/recipe-search';

// Component imports
import RestaurantInfo from './components/restaurant-info';
import RecipeInfo from './components/recipe-info';

// Database imports
import database from './database/database';
import {
  addRestaurants,
  addRecipes,
} from './database/add-data';

const file = document.getElementById('img-file');
const resultTitle = document.getElementById('result-title');

const imageRef = database.child('image');

customElements.define('restaurant-info', RestaurantInfo);
customElements.define('recipe-info', RecipeInfo);

const app = new App({
  apiKey: KEYS.CLARIFAI,
});

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

for (let i = 1; i <= 3; i += 1) {
  pred.push(document.getElementById(`pred-${i}`));
}

for (let i = 0; i < 3; i += 1) {
  pred[i].addEventListener('click', () => {
    resultTitle.innerHTML = 'Foozam Results For ';
    resultTitle.innerHTML = resultTitle.innerHTML.concat(pred[i].innerHTML);
    recipes(pred[i]);
    restaurants(pred[i]);
  });
}

function predict(image) {
  const results = [];
  app.models.predict('bd367be194cf45149e75f01d59f77ba7', image).then(
    (response) => {
      for (let i = 0; i < 5; i += 1) {
        results.push(response.outputs[0].data.concepts[i].name);
      }
      for (let i = 0; i < 3; i += 1) {
        pred[i].innerHTML = results[i].toUpperCase();
      }
      resultTitle.innerHTML = 'Foozam Results For ';
      resultTitle.innerHTML = resultTitle.innerHTML.concat(pred[0].innerHTML);
      recipes(pred[0]);
      restaurants(pred[0]);
    },
    (err) => {
      console.log(err);
    },
  );
}

function previewFile() {
  const preview = document.getElementById('foozam-img'); // selects the query named img

  let currFile = document.getElementById('img-file').files[0]; // sames as here
  const reader = new FileReader();
  currFile = new Blob([currFile]);

  reader.addEventListener('loadend', () => {
    preview.src = reader.result;
    imageRef.push(reader.result);
    const base64String = reader.result.replace('data:application/octet-stream;base64,', '');
    predict(base64String);
  });

  if (currFile) {
    reader.readAsDataURL(currFile);
  }
}

window.addEventListener('load', () => {
  const img = document.getElementById('foozam-img');
  predict(img.src);
});

file.addEventListener('change', () => {
  previewFile();
});