import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Login/Login";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
	Switch,
} from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
	const [{}, dispatch] = useStateValue();
	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			console.log(`THE USER IS>>>>>`, authUser);

			if (authUser) {
				//the user jus loged in
				dispatch({
					type: "SET_USER",
					user: authUser,
				});
			} else {
				// the user logged out
				dispatch({
					type: "SET_USER",
					user: null,
				});
			}
		});
	}, []);
	return (
		//BEM
		<Router>
			<div className="App">
				<Switch>
					<Route path="/login">
						<Login />
					</Route>

					<Route path="/checkout">
						<Header />
						<Checkout />
					</Route>

					<Route path="/">
						<Header />
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
