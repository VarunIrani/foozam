/* eslint-disable eol-last */
import { initializeApp } from "firebase";
import config from "./firebase-config";

const firebase = initializeApp(config);

const database = firebase.database().ref();

export default database;
