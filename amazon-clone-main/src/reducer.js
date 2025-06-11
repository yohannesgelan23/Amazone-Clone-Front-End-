export const initialState = {
	basket: [],
	user: null,
};

//selector
//getBasketTotol helps to get total amount of price of all items in basket
export const getBasketTotal = (basket) =>
	basket?.reduce((amount, item) => item.price + amount, 0);

//
const reducer = (state, action) => {
	console.log(action);
	switch (action.type) {
		case "ADD_TO_BASKET":
			return {
				...state,
				basket: [...state.basket, action.item],
			};
		case "EMPTY_BASKET":
			return {
				...state,
				basket: [],
			};

		case "REMOVE_FROM_BASKET":
			const index = state.basket.findIndex(
				(basketItem) => basketItem.id === action.id
			);
			let newBasket = [...state.basket];

			if (index >= 0) {
				newBasket.splice(index, 1);
				// splice - remove the item or reduce the lehrth of the array by deliting the selected product
			} else {
				console.warn(
					`Cant remove product (id: ${action.id}) as its not in basket!`
				);
			}

			return {
				...state,
				basket: newBasket,
			};
		case "SET_USER":
			return {
				...state,
				user: action.user,
			};
	}
	// 	default:
	// 		return state;
	// }
};

export default reducer;
