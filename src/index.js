/* eslint-disable eol-last */
/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable func-names */
import {
  App,
} from 'clarifai';
import {
  initializeApp,
} from 'firebase';
import config from './database/firebase-config';
import KEYS from './api/keys';
import {
  getRestaurants,
} from './api/zomato-search';
import {
  getRecipes,
} from './api/recipe-search';
import RestaurantInfo from './components/restaurant-info';
import RecipeInfo from './components/recipe-info';

const file = document.getElementById('img-file');
const resultTitle = document.getElementById('result-title');
const restTabPane = document.getElementById('link3');
const recipeTabPane = document.getElementById('link1');

customElements.define('restaurant-info', RestaurantInfo);
customElements.define('recipe-info', RecipeInfo);

const firebase = initializeApp(config);

const database = firebase
  .database()
  .ref()
  .child('image');

const app = new App({
  apiKey: KEYS.CLARIFAI,
});

const pred = [];

function addRestaurants(data) {
  const res = data.restaurants;
  const resComps = [];
  let row;

  while (restTabPane.firstChild) {
    restTabPane.removeChild(restTabPane.firstChild);
  }

  for (let i = 0; i < res.length; i += 1) {
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
    resComps[i].setAttribute('defaultImage', `${document.baseURI}/assets/img/rest-default.png`);
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

function addRecipes(data) {
  const res = data.hits;
  const recipeComps = [];
  let row;

  while (recipeTabPane.firstChild) {
    recipeTabPane.removeChild(recipeTabPane.firstChild);
  }

  for (let i = 0; i < res.length; i += 1) {
    recipeComps.push(new RecipeInfo());
    recipeComps[i].setAttribute('class', 'col-lg-6 col-md-12 pb-3');
    recipeComps[i].setAttribute('id', i);
    recipeComps[i].setAttribute('label', res[i].recipe.label);
    recipeComps[i].setAttribute('source', res[i].recipe.source);
    recipeComps[i].setAttribute('sourceUrl', res[i].recipe.url);
    recipeComps[i].setAttribute('image', res[i].recipe.image);
    recipeComps[i].setAttribute('ingredients', res[i].recipe.ingredientLines);
    recipeComps[i].setAttribute('defaultImage', `${document.baseURI}/assets/img/recipe-default.png`);
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
      getRestaurants(
        KEYS.ZOMATO,
        prediction.innerHTML,
        5,
        'city',
        20,
        lat,
        long,
        (data) => {
          addRestaurants(data);
        },
      );
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
    database.push(reader.result);
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