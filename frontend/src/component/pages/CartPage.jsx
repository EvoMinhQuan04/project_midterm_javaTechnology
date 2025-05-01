import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ApiService from "../../service/ApiService";
import { useCart } from "../context/CartContext";
import "../../style/cart.css";

const CartPage = () => {
  const { cart, dispatch } = useCart();
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const increment = (product) => {
    dispatch({ type: "INCREMENT_ITEM", payload: product });
  };

  const decrement = (product) => {
    const cartItem = cart.find((item) => item.id === product.id);
    if (cartItem && cartItem.quantity > 1) {
      dispatch({ type: "DECREMENT_ITEM", payload: product });
    } else {
      dispatch({ type: "REMOVE_ITEM", payload: product });
    }
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleCheckout = async () => {
    if (!ApiService.isAuthenticated()) {
      setMessage("You need to login first before you can place an order");
      setTimeout(() => {
        setMessage("");
        navigate("/login");
      }, 3000);
      return;
    }

    const orderItems = cart.map((item) => ({
      productId: item.id,
      quantity: item.quantity,
    }));

    const orderRequest = {
      totalPrice,
      items: orderItems,
    };

    try {
      const response = await ApiService.createOrder(orderRequest);
      setMessage(response.message);

      setTimeout(() => {
        setMessage("");
      }, 5000);

      if (response.status === 200) {
        dispatch({ type: "CLEAR_CART" });
      }
    } catch (error) {
      setMessage(
        error.response?.data?.message ||
          error.message ||
          "Failed to place an order"
      );
      setTimeout(() => {
        setMessage("");
      }, 3000);
    }
  };

  return (
    <div className="cart-container">
      <section className="cart-items">
        <h1>Your Cart</h1>
        {cart.length === 0 ? (
          <p className="empty">Your cart is empty</p>
        ) : (
          cart.map((item) => (
            <article className="cart-item" key={item.id}>
              <img src={item.imageUrl} alt={item.name} />
              <div className="item-details">
                <h2>{item.name}</h2>
                <p className="desc">{item.description}</p>
                <div className="qty-control">
                  <button onClick={() => decrement(item)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increment(item)}>+</button>
                </div>
              </div>
              <div className="item-price">
                ${(item.price * item.quantity).toFixed(2)}
              </div>
            </article>
          ))
        )}
      </section>

      {cart.length > 0 && (
        <aside className="cart-summary">
          <div>
            <h3>Order Summary</h3>
            <div className="summary-line">
              <span>Subtotal</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
          </div>
          <button className="btn-checkout" onClick={handleCheckout}>
            Proceed to Checkout
          </button>
        </aside>
      )}
    </div>
  );
};

export default CartPage;
