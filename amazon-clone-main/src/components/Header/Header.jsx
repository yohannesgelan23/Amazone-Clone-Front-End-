import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import firebase, { auth } from "../../firebase";

function Header() {
	const [{ basket, user }, dispatch] = useStateValue();

	const handleAuthentication = () => {
		if (user) {
			auth.signOut();
		}
	};
	return (
		<div className="header">
			{/* <img src="/public/assets/amazon.png"    ></img> */}
			<Link to="/">
				<img
					className="header__logo"
					src="https://www.pinclipart.com/picdir/big/57-576184_view-our-amazon-storefront-amazon-logo-white-png.png"
				></img>
			</Link>

			<div className="header__options">
				<span className="header__optionLineOne">Hello</span>
				<span className="header__optionLineTwo">Select your address</span>
			</div>

			<div className="header__search">
				<input className="header__searchInput" type="text"></input>
				<SearchIcon className="header__searchIcon" />
			</div>

			<div className="header__nav">
				<Link to={!user && "../login"}>
					<div onClick={handleAuthentication} className="header__options">
						<span className="header__optionLineOne">
							Hello,{user ? "Sign Out" : "Sign In"}
						</span>
						<span className="header__optionLineTwo">Account & Lists</span>
					</div>
				</Link>

				<div className="header__options">
					<span className="header__optionLineOne">Returns</span>
					<span className="header__optionLineTwo">& Orders</span>
				</div>

				<div className="header__options">
					<span className="header__optionLineOne">Your</span>
					<span className="header__optionLineTwo">Prime</span>
				</div>

				<Link to="../Checkout/Checkout">
					<div className="header__optionsBasket">
						<ShoppingBasketIcon />
						<span className="header__optionLineTwo__basketCount">
							{basket?.length}
						</span>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default Header;
