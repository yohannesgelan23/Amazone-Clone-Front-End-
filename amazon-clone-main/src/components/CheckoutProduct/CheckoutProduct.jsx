import React from "react";
import { useStateValue } from "../../StateProvider";
import "./CheckoutProduct.css";

function CheckoutProduct({ id, image, title, price, rating }) {
	const [{ basket }, dispatch] = useStateValue();
	const removeFromBasket = () => {
		// remove from basket
		dispatch({
			type: "REMOVE_FROM_BASKET",
			id: id,
		});
	};
	return (
		<div className="checkoutProduct">
			<img className="checkoutProduct__image" src={image} alt="product" />
			<div className="checkoutProduct__info">
				<p className="checkoutProduct__title">{title}</p>
				<p className="checkoutProduct__price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="checkoutProduct__rating">
					{Array(rating)
						.fill()
						.map((_, i) => (
							<p>🌟</p>
						))}
					{/* just creating an array by the count of rating(eg. if rating is 5) 
					it will fill the array , by mapping the array with 🌟 */}
				</div>
				<button onClick={removeFromBasket}>Remove From Basket</button>
			</div>
		</div>
	);
}

export default CheckoutProduct;
