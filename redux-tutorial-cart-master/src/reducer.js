import {DECREASE, INCREASE, CLEAR_CART} from './actions'

function reducer(state, action){
    switch (action.type) {
        case CLEAR_CART:{
            return {
                ...state,
                cart: [],
                total: 0,
                amount: 0
            }
        }
        case DECREASE:{
            const item = state.cart.filter((item) => item.id === action.payload);
            item.amount = item.amount + 1;
            return {
                ...state,
                amount: 1
            }
        }
    }
    return state;
}

export default reducer;