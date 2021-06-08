export const initialState = {
    basket: [{
        id: "1726812",
        title: "NZXT H510 Compact Mid-Tower ATX Computer Cabinet",
        price: 59.9,
        rating: 5,
        image: "https://images-eu.ssl-images-amazon.com/images/I/510cWHKXlrL._AC_UL320_SR320,320_.jpg"
    },
        {
            id: "1726812",
            title: "NZXT H510 Compact Mid-Tower ATX Computer Cabinet",
            price: 59.9,
            rating: 5,
            image: "https://images-eu.ssl-images-amazon.com/images/I/510cWHKXlrL._AC_UL320_SR320,320_.jpg"
        }],
    user: null,
};

function reducer(state, action) {
    console.log(action);
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket:[...state.basket, action.item],
            };
        case 'REMOVE_FROM_BASKET':
            let newBasket = [...state.basket];
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
            if(index>=0){
                newBasket.splice(index, 1);

            }
            else{
                console.warn(
                    'cant remove product (id: ${action.id}) as its not in basket'
                )
            }
            return {...state, basket: newBasket};
        default:
            return state;
    }
}

export default reducer;