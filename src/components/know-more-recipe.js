/* eslint-disable radix */
/* eslint-disable key-spacing */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
/* eslint-disable template-tag-spacing */
/* eslint-disable eol-last */
/* eslint-disable no-tabs */
import { LitElement, html } from "lit-element";
import Chart from "chart.js";
import database from "../database/database";

export default class KnowMoreRecipe extends LitElement {
	static get properties() {
		return {
			label: {
				type: String
			},
			ingredients: {
				type: String
			},
			dietLabels: {
				type: String
			},
			healthLabels: {
				type: String
			},
			nutrients: {
				type: String
			},
			source: {
				type: String
			},
			url: {
				type: String
			},
			image: {
				type: String
			},
			defaultImage: {
				type: String
			},
			ingredientsArray: {
				type: Array
			},
			dietLabelsArray: {
				type: Array
			},
			healthLabelsArray: {
				type: Array
			},
			nutrientsArray: {
				type: Array
			},
			favorite: {
				type: Boolean
			},
			title: {
				type: String
			}
		};
	}

	constructor() {
		super();
		this.favorite = false;
	}

	getIngredients() {
		this.ingredientsArray = this.ingredients.split("|");
		const ingList = this.renderRoot.querySelector("#ingList");
		this.ingredientsArray.forEach(ingredient => {
			const item = document.createElement("li");
			item.setAttribute("style", "color: black");
			item.innerHTML = `${ingredient}`;
			ingList.appendChild(item);
		});
	}

	getHealthLabels() {
		this.healthLabelsArray = this.healthLabels.split("|");
		const healthList = this.renderRoot.querySelector("#healthList");
		this.healthLabelsArray.forEach(health => {
			const item = document.createElement("li");
			item.setAttribute("style", "color: black");
			item.innerHTML = `${health}`;
			healthList.appendChild(item);
		});
	}

	getDietLabels() {
		this.dietLabelsArray = this.dietLabels.split("|");
		const dietList = this.renderRoot.querySelector("#dietList");
		this.dietLabelsArray.forEach(diet => {
			const item = document.createElement("li");
			item.setAttribute("style", "color: black");
			item.innerHTML = `${diet}`;
			dietList.appendChild(item);
		});
	}

	getNutrients() {
		this.nutrientsArray = JSON.parse(this.nutrients);
		const pieCanvas = this.renderRoot.querySelector("#pieCanvas");
		const values = [];
		const labels = [];
		this.nutrientsArray.forEach(nutrient => {
			values.push(Math.trunc(nutrient.total));
			labels.push(`${nutrient.label} (${nutrient.unit})`);
		});
		const data = {
			datasets: [
				{
					data: values,
					label: "Nutrients",
					backgroundColor: [
						"#003f5c",
						"#58508d",
						"#bc5090",
						"#ff6361",
						"#ffa600"
					],
					borderWidth: 1
				}
			],
			labels
		};
		const options = {
			animation: {
				animateScale: true
			},
			legend: {
				labels: {
					fontSize: 16
				}
			}
		};
		const pieChart = new Chart(pieCanvas, {
			type: "doughnut",
			data,
			options
		});
	}

	addToFavorites() {
		const googleLoggedIn = parseInt(localStorage.getItem("googleLoggedIn"));
		const userLoggedIn = parseInt(localStorage.getItem("userLoggedIn"));
		let user;
		if (googleLoggedIn) {
			user = JSON.parse(localStorage.getItem("googleUser"));
		} else if (userLoggedIn) {
			user = JSON.parse(localStorage.getItem("loggedInUser"));
		}
		const favoriteRecipe = {
			label: this.label,
			ingredients: this.ingredients,
			dietLabels: this.dietLabels,
			healthLabels: this.healthLabels,
			nutrients: this.nutrients,
			source: this.source,
			url: this.url,
			image: this.image,
			defaultImage: this.defaultImage,
			favorite: this.favorite
		};
		const favoritesRef = database.child("favorites");
		favoritesRef
			.child(`${user.uid}`)
			.child("recipes")
			.child(favoriteRecipe.label)
			.set(favoriteRecipe);
	}

	removeFromFavorites() {
		const googleLoggedIn = parseInt(localStorage.getItem("googleLoggedIn"));
		const userLoggedIn = parseInt(localStorage.getItem("userLoggedIn"));
		let user;
		if (googleLoggedIn) {
			user = JSON.parse(localStorage.getItem("googleUser"));
		} else if (userLoggedIn) {
			user = JSON.parse(localStorage.getItem("loggedInUser"));
		}
		const favoritesRef = database.child("favorites");
		favoritesRef
			.child(`${user.uid}`)
			.child("recipes")
			.child(this.label)
			.remove();
	}

	toggleFavorites() {
		const favoriteIcon = this.renderRoot.querySelector("#favoriteIcon");
		this.favorite = !this.favorite;
		if (this.favorite) {
			this.addToFavorites();
			favoriteIcon.setAttribute(
				"style",
				"color: gold; font-size: 30px; opacity: 1"
			);
		} else {
			this.removeFromFavorites();
			favoriteIcon.setAttribute(
				"style",
				"color: grey; font-size: 30px; opacity: 0.6"
			);
		}
	}

	render() {
		const query = this.label.replace(/\s/g, "+");
		return html`
			<style>
				#favorite:hover {
					color: gold;
					font-size: 30px;
					opacity: 0.6;
					cursor: pointer;
				}
			</style>
			<div class="row">
				<div class="col-lg-4 col-md-12" style="text-align: center">
					<img src="${this.image || this.defaultImage}" alt="Recipe Image" />
					<div class="row" style="text-align: center">
						<div class="col-lg-12 col-md-12 pt-2">
							<div
								id="favoriteIcon"
								style="color: grey; font-size: 30px; opacity: 0.6;"
							>
								<i
									id="favorite"
									class="fa fa-star"
									@click="${this.toggleFavorites}"
								></i>
							</div>
							<a href=${this.url} class="btn btn-success" target="_blank"
								>Know More</a
							>
						</div>
					</div>
				</div>
				<div class="col-lg-8 col-md-12 pt-3" style="font-size: 12pt" id="info">
					<ul class="nav nav-pills" role="tablist">
						<li class="nav-item">
							<a
								class="nav-link active btn btn-simple"
								data-toggle="tab"
								href="#ingredients"
								role="tablist"
								aria-expanded="true"
							>
								Ingredients
							</a>
						</li>
						<li class="nav-item">
							<a
								class="nav-link btn btn-simple"
								data-toggle="tab"
								href="#health"
								role="tablist"
								aria-expanded="false"
							>
								Health Labels
							</a>
						</li>
						<li class="nav-item">
							<a
								class="nav-link btn btn-simple"
								data-toggle="tab"
								href="#diet"
								role="tablist"
								aria-expanded="false"
							>
								Diet Labels
							</a>
						</li>
					</ul>
					<div class="tab-content tab-space pt-2">
						<div class="tab-pane active" id="ingredients" aria-expanded="true">
							<!-- Ingredients -->
							<ul id="ingList" style="list-style-type: circle"></ul>
						</div>
						<div class="tab-pane" id="health" aria-expanded="false">
							<!-- Health Labels -->
							<ul id="healthList" style="list-style-type: circle"></ul>
						</div>
						<div class="tab-pane" id="diet" aria-expanded="false">
							<ul id="dietList" style="list-style-type: circle"></ul>
						</div>
					</div>
				</div>
			</div>
			<div class="row justify-content-center">
				<div class="col-lg-6 col-md-6">
					<canvas id="pieCanvas" width="40" height="40"></canvas>
				</div>
			</div>
			<div class="row pt-4 pl-3 pr-3">
				<div
					class="col-lg-12 col-md-12 embed-responsive embed-responsive-16by9"
					id="map"
				>
					<iframe
						src="https://www.youtube.com/embed?listType=search&list=${query}+recipe"
						frameborder="0"
						style="border:0"
						allowfullscreen
					>
					</iframe>
				</div>
			</div>
		`;
	}

	createRenderRoot() {
		return this;
	}
}
