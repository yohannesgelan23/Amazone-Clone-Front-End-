import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
	apiKey: "AIzaSyDl7TZZhPr4DHz0kZlkptnoSuP0REO0-WM",
	authDomain: "clone-34c80.firebaseapp.com",
	projectId: "clone-34c80",
	storageBucket: "clone-34c80.appspot.com",
	messagingSenderId: "648640259586",
	appId: "1:648640259586:web:cb12730198e8319726e91b",
	measurementId: "G-1QL7WG0KN7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
