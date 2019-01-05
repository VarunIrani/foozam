/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
/* eslint-disable template-tag-spacing */
/* eslint-disable eol-last */
import {
  LitElement,
  html,
} from '@polymer/lit-element';

export default class KnowMoreRestaurant extends LitElement {
  static get properties() {
    return {
      name: {
        type: String,
      },
      cuisines: {
        type: String,
      },
      latitude: {
        type: Number,
      },
      longitude: {
        type: Number,
      },
      address: {
        type: String,
      },
      userRating: {
        type: Object,
      },
      image: {
        type: String,
      },
      defaultImage: {
        type: String,
      },
    };
  }

  render() {
    const name = this.name.replace(/\s/g, '+');
    return html `
      <head>
        <link href="./assets/css/black-dashboard.css?v=1.0.0" rel="stylesheet" />
      </head>
      <div class="row">
        <div class="col-lg-4 col-md-12"  style="text-align: center">
          <img src="${this.image || this.defaultImage}" alt="Restaurant Image" />
        </div>
        <div class="col-lg-8 col-md-12 pt-3" style="font-size: 12pt">
          <p style="color: var(--dark)"><b class="font-weight-bold">Address</b> : ${this.address}</p>
          <p style="color: var(--dark)"><b class="font-weight-bold">Cuisines</b> : ${this.cuisines}</p>
          <p style="color: var(--dark)"><b class="font-weight-bold">Rating</b> : ${this.userRating}</p>
        </div>
      </div>
      <div class="row pt-4">
        <div class="col-lg-12 col-md-12 embed-responsive embed-responsive-21by9" id="map">
          <iframe src="https://www.google.com/maps?q=${name}&output=embed"
            frameborder="0" 
            style="border:0" 
            allowfullscreen>
          </iframe>
        </div>
      </div>
    `;
  }
}