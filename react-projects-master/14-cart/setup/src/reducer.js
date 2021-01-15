const reducer = (state, action) =>{
    switch(action.type){
        case 'CLEAR_CART' :{
            return {
                ...state,
                cart: []
            }
        }
        case 'REMOVE': {
            return {
                ...state,
                cart: state.cart.filter((item) => item.id != action.payload)
            }
        }
        case 'INCREASE': {
            return {
                ...state,
                cart: state.cart.map((item) => {
                    if(item.id === action.payload){
                        return {...item, amount: item.amount + 1};
                    }
                    return {...item};
                }),
            }
        }
        case 'DECREASE': {
            return {
                ...state,
                cart: state.cart.map((item) => {
                    if(item.id === action.payload){
                        if(item.amount == 1) {
                            return item;
                        }
                        return {...item, amount: item.amount - 1};
                    }
                    return {...item};
                }).filter((item) => item.amount > 0),
            }
        }
        case 'GET_TOTALS': {
            let {total, amount} = state.cart.reduce((cartTotal, cartItem) => {
                return {
                    total : cartTotal.total + cartItem.price * cartItem.amount,
                    amount: cartTotal.amount + cartItem.amount
                }
            }, {
                total: 0,
                amount: 0
            });
            total = parseFloat(total.toFixed(2));
            return {...state, total, amount};
        }
        case 'DISPLAY_ITEMS': {
            return {...state, cart: action.payload};
        }
        case 'LOADING':{
            return {...state, loading: true, loading: false};
        }
        case 'TOGGLE_AMOUNT': {
            return {
                ...state,
                cart: state.cart.map((item) => {
                    if(item.id === action.payload.id){
                        if(action.payload.type ==='dec' && item.amount == 1) {
                            return item;
                        }
                        return action.payload.type ==='dec' ? {...item, amount: item.amount - 1} : {...item, amount: item.amount + 1};
                    }
                    return {...item};
                }).filter((item) => item.amount > 0),
            }
        }
    }
    throw new Error('no matching action type');
}

export default reducer;