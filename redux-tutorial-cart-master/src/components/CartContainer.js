import React from "react";
import CartItem from "./CartItem";
import { connect } from 'react-redux'
import { CLEAR_CART } from "../actions";

const CartContainer = ({ cart = [], total, dispatch }) => {
  if (cart.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <article>
        {cart.map(item => {
          return <CartItem dispatch={dispatch} key={item.id} {...item} />;
        })}
      </article>
      {/* cart footer */}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button className="btn clear-btn"
          onClick={() => dispatch({type: CLEAR_CART})}
        >clear cart</button>
      </footer>
    </section>
  );
};

// get prop from store
const mapStateToProps = (store) => {
  return {
    cart: store.cart,
    total: store.total,
  }
}

//connect component to store
export default connect(mapStateToProps)(CartContainer);
