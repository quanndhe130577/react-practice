import { DECREASE, INCREASE, CLEAR_CART, GET_TOTALS, REMOVE, TOGGLE_AMOUNT } from './actions'
// items
import cartItems from "./cart-items";


//initial store
const initialStore = {
    cart : cartItems,
    total: 0,
    amount: 0
}

function reducer(state = initialStore, action) {
    switch (action.type) {
        case CLEAR_CART: {
            return {
                ...state,
                cart: []
            }
        }
        case DECREASE: {
            const newCart = state.cart.map((item) => {
                if (item.id === action.payload.id && action.payload.amount >= 2) {
                    item.amount -= 1;
                }
                return item;
            });
            return {
                ...state,
                cart: newCart
            }
        }
        case INCREASE: {
            const newCart = state.cart.map((item) => {
                if (item.id === action.payload.id) {
                    item.amount += 1;
                }
                return item;
            });
            return {
                ...state,
                cart: newCart
            }
        }
        case GET_TOTALS: {
            let { amount, total } = state.cart.reduce((current, next) => {
                const { amount, price } = next;
                current.amount += amount;
                current.total += amount * price;
                return current;
            }, {
                amount: 0,
                total: 0
            });
            total = parseFloat(total.toFixed(2));
            return {
                ...state,
                amount,
                total
            }
        }
        case REMOVE: {
            const newCart = state.cart.filter((item) => item.id !== action.payload.id);
            return {
                ...state,
                cart: newCart
            }
        }
        case TOGGLE_AMOUNT: {
            const newCart = state.cart.map((item) => {
                if (item.id === action.payload.id) {
                    if(action.payload.toogle === "inc"){
                        item.amount += 1;
                    }else{
                        if(action.payload.amount >= 2){
                            item.amount -= 1;
                        }
                    }
                }
                return item;
            });

            return {
                ...state,
                cart: newCart
            }
        }

        default : {
            return state;
        }
    }
    //return state;
}

export default reducer;