/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */
/* eslint-disable eol-last */
// import axios from 'axios';
import $ from "jquery";

export function getRecipes(apiKey, appID, query, from, to, callback) {
	const url = `https://foozam-recipe.serveo.net/recipe?app_id=${appID}&app_key=${apiKey}&q=${query}&from=${from}&to=${to}`;
	const settings = {
		async: true,
		crossDomain: true,
		url,
		method: "GET"
	};

	$.ajax(settings).done(response => {
		callback(response);
	});
}
