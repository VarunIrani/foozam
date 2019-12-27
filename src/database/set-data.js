/* eslint-disable eol-last */
export function setRestValues(resData) {
	const tempObj = {};
	tempObj.id = resData.id;
	tempObj.name = resData.name;
	tempObj.location = resData.location;
	tempObj.cuisines = resData.cuisines;
	tempObj.thumb = resData.thumb;
	tempObj.userRating = resData.user_rating;
	return tempObj;
}

export function setRecipeValues(resData) {
	const tempObj = {};
	tempObj.label = resData.label;
	tempObj.source = resData.source;
	tempObj.url = resData.url;
	tempObj.image = resData.image;
	tempObj.ingredientLines = resData.ingredientLines;
	tempObj.nutrients = resData.digest;
	tempObj.dietLabels = resData.dietLabels;
	tempObj.healthLabels = resData.healthLabels;
	tempObj.cautions = resData.cautions;
	return tempObj;
}
