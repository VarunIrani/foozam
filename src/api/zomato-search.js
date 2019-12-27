/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */
/* eslint-disable eol-last */
import axios from "axios";

export function getRestaurants(
	apiKey,
	query,
	cityID,
	entityType,
	count,
	lat,
	long,
	callback
) {
	axios
		.get(
			`https://developers.zomato.com/api/v2.1/search?apikey=${apiKey}&entity_id=${cityID}&entity_type=${entityType}&q=${query}&count=${count}&lat=${lat}&lon=${long}&sort=real_distance&order=asc`
		)
		.then(res => {
			callback(res.data);
		});
}
