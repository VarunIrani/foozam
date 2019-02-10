/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */
/* eslint-disable eol-last */
import axios from 'axios';

export function getRecipes(apiKey, appID, query, from, to, callback) {
  axios
    .get(`https://api.edamam.com/search?app_id=${appID}&app_key=${apiKey}&q=${query}&from=${from}&to=${to}`)
    .then((res) => {
      callback(res.data);
    });
}
