/* eslint-disable radix */
/* eslint-disable key-spacing */
/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
/* eslint-disable template-tag-spacing */
/* eslint-disable eol-last */
/* eslint-disable no-tabs */
import { LitElement, html } from "lit-element";
import database from "../database/database";

export default class KnowMoreRestaurant extends LitElement {
	static get properties() {
		return {
			name: {
				type: String
			},
			cuisines: {
				type: String
			},
			latitude: {
				type: Number
			},
			longitude: {
				type: Number
			},
			address: {
				type: String
			},
			userRating: {
				type: Object
			},
			image: {
				type: String
			},
			defaultImage: {
				type: String
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

	addToFavorites() {
		const googleLoggedIn = parseInt(localStorage.getItem("googleLoggedIn"));
		const userLoggedIn = parseInt(localStorage.getItem("userLoggedIn"));
		let user;
		if (googleLoggedIn) {
			user = JSON.parse(localStorage.getItem("googleUser"));
		} else if (userLoggedIn) {
			user = JSON.parse(localStorage.getItem("loggedInUser"));
		}
		const favoriteRestaurant = {
			name: this.name,
			cuisines: this.cuisines,
			latitude: this.latitude,
			longitude: this.longitude,
			address: this.address,
			userRating: this.userRating,
			image: this.image,
			defaultImage: this.defaultImage,
			favorite: this.favorite
		};
		const favoritesRef = database.child("favorites");
		favoritesRef
			.child(`${user.uid}`)
			.child("restaurants")
			.child(favoriteRestaurant.name)
			.set(favoriteRestaurant);
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
			.child("restaurants")
			.child(this.name)
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
		const name = this.name.replace(/\s/g, "+");
		const address = this.address.replace(/\s/g, "+");
		name.concat(`+,+${address}`);
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
					<img
						src="${this.image || this.defaultImage}"
						alt="Restaurant Image"
					/>
					<div
						id="favoriteIcon"
						style="color: grey; font-size: 30px; opacity: 0.6;"
						@click="${this.toggleFavorites}"
					>
						<i id="favorite" class="fa fa-star"></i>
					</div>
				</div>
				<div class="col-lg-8 col-md-12 pt-3" style="font-size: 12pt">
					<p style="color: var(--dark)">
						<b class="font-weight-bold">Address</b> : ${this.address}
					</p>
					<p style="color: var(--dark)">
						<b class="font-weight-bold">Cuisines</b> : ${this.cuisines}
					</p>
					<p style="color: var(--dark)">
						<b class="font-weight-bold">Rating</b> : ${this.userRating}
					</p>
				</div>
			</div>
			<div class="row pt-4 pl-3 pr-3">
				<div
					class="col-lg-12 col-md-12 embed-responsive embed-responsive-16by9"
					id="map"
				>
					<iframe
						src="https://www.google.com/maps?q=${name}&output=embed"
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
