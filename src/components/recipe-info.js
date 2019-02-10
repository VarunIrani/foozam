/* eslint-disable key-spacing */
/* eslint-disable no-console */
/* eslint-disable template-tag-spacing */
/* eslint-disable eol-last */
import { LitElement, html } from '@polymer/lit-element';

export default class RecipeInfo extends LitElement {
  static get properties() {
    return {
      id           : {
        type : Number,
      },
      label        : {
        type : String,
      },
      source       : {
        type : String,
      },
      sourceUrl    : {
        type : String,
      },
      ingredients  : {
        type : Array,
      },
      image        : {
        type : String,
      },
      defaultImage : {
        type : String,
      },
      dietLabels   : {
        type : Array,
      },
      healthLabels : {
        type : Array,
      },
    };
  }

  render() {
    return html`
      <head>
        <link href="./assets/css/black-dashboard.css?v=1.0.0" rel="stylesheet" />
      </head>
      <div class="row" style="text-align: center">
        <div class="col-lg-6 col-md-12">
          <img src="${this.image || this.defaultImage}" alt="Recipe Image" width="200"/>
        </div>
        <div class="col-lg-6 col-md-12 pt-3">
          <h4 class="card-title">${this.label}</h4>
          <button
            type="button"
            id="know-more"
            class="btn btn-warning btn-simple"
          >
            View
          </button>
        </div>
      </div>
    `;
  }
}
