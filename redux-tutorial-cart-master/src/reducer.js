import {DECREASE, INCREASE, CLEAR_CART, GET_TOTAL, REMOVE} from './actions'

function reducer(state, action){
    switch (action.type) {
        case CLEAR_CART:{
            return {
                ...state,
                cart: []
            }
        }
        case DECREASE:{
            const newCart = state.cart.filter((item) =>{
                if(item.id === action.payload && item.amount >= 2){
                    item.amount -= 1;
                }
                return item;
            });
            return {
                ...state,
                cart: newCart 
            }
        }
        case INCREASE:{
            const newCart = state.cart.filter((item) =>{
                if(item.id === action.payload){
                    item.amount += 1;
                }
                return item;
            });
            return {
                ...state,
                cart: newCart 
            }
        }
        case GET_TOTAL:{
            const {amount, total} = state.cart.reduce((current, next) => {
                const {amount, total} = current;
                amount += next.amount;
                total += next.price * next.amount;
                return {
                    amount, total
                }
            });
            return {
                ...state,
                amount,
                total
            }
        }
        case REMOVE:{
            const newCart = state.cart.filter((item) => item.id != action.payload);
            return {
                ...state,
                cart: newCart 
            }
        }
    }
    return state;
}

export default reducer;