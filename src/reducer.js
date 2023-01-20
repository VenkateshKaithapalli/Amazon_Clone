export const initialState = {
  basket: [
    // {
    //   id: "1214235",
    //   title:
    //     "Apple 2021 10.2-inch (25.91 cm) iPad with A13 Bionic chip (Wi-Fi, 64GB) - Space Grey (9th Generation)",
    //   price: 29900,
    //   rating: 5,
    //   image: "https://m.media-amazon.com/images/I/61NGnpjoRDL._SX679_.jpg",
    // },
  ],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
	case 'SET_USER':
		return{
			...state,
			user:action.user
		}
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    // case "REMOVE_FROM_BASKET":
    //   let newBasket = [...state.basket];
    //   const index = state.basket.findIndex(
    //     (basketItem) => basketItem.id === action.id
    //   );
    //   if (index >= 0) {
    //     // items remove
    //     newBasket.splice(index, 1);
    //   } else {
    //     console.warn(`${action.id}`);
    //   }
    //   return {
    //     ...state,basket:newBasket
    //   };
    case "REMOVE_FROM_BASKET":
      // let newBasket=[...state.basket];
      const index = state.basket.filter((a) => a.id !== action.id);
      return {
        ...state,
        basket: index,
      };

    default:
      return state;
  }
}

export default reducer;
