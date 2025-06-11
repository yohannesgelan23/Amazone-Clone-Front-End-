import React from "react";
import "./Checkout.css";
import Subtotal from "../Subtotal/Subtotal";
import { useStateValue } from "../../StateProvider";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";

function Checkout() {
	const [{ basket }, dispatch] = useStateValue();

	return (
		<div className="checkout">
			{/* checkout left */}
			<div className="checkout__left">
				<img
					className="checkout__add"
					src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Fresh/Feb22/Rs1Deal/HUB_15th_to_20th_PC.jpg"
				/>
				<div className="checkout__title">
					<h2> Your shopping basket</h2>
					{basket.map((item) => (
						<CheckoutProduct
							id={item.id}
							image={item.image}
							title={item.title}
							price={item.price}
							rating={item.rating}
						/>
					))}

					{/* CheckOut Product*/}
					{/* CheckOut Product*/}
					{/* CheckOut Product*/}
					{/* CheckOut Product*/}
				</div>
			</div>
			{/* checkout right */}
			<div className="chreckout__right">
				<Subtotal />
			</div>
		</div>
	);
}

export default Checkout;
