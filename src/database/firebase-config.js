/* eslint-disable key-spacing */
/* eslint-disable eol-last */

require("dotenv").config();
const config = {
	apiKey: `${process.env.FOOZAM_FIREBASE}`,
	authDomain: "foozam-test.firebaseapp.com",
	databaseURL: "https://foozam-test.firebaseio.com",
	projectId: "foozam-test",
	storageBucket: "",
	messagingSenderId: "791490333729"
};

export default config;
