import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Cart.css';

function CartPage() {
  const location = useLocation();
  const { item } = location.state || {};

  const [paymentMethod, setPaymentMethod] = useState('');
  const [address, setAddress] = useState('');
  const [items, setItems] = useState([]);

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleAddToCart = (item) => {
    setItems([...items, item]);
  };

  const handleRemoveFromCart = (item) => {
    const updatedItems = items.filter((i) => i.id !== item.id);
    setItems(updatedItems);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform submission logic here, e.g., send the data to the server
    // You can access paymentMethod, address, and items to process the order
    // Reset the form or show a success message after submission
    console.log('Order placed!');
    setPaymentMethod('');
    setAddress('');
    setItems([]);
  };

  useEffect(() => {
    if (item) {
      handleAddToCart(item);
    }
  }, [item]);

  const showItemsInCart = () => {
    if (items.length === 0) {
      return <p>No items in the cart.</p>;
    }

    return (
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.price}
            <button type="button" onClick={() => handleRemoveFromCart(item)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
    <div className="Heading7_c">
        <div className="heading_in7_c">
          <p className="heading17_c">
            <Link to="">CART</Link>
          </p>
          {/* <div className="hidden_log7_c">
            <p className="heading27_c">
              <Link to="/">BOOKCOVE</Link>
            </p>
          </div> */}
        </div>
      </div>
    <div className="cart-page">
      <form onSubmit={handleSubmit}>
        <div>
          <label className="paymentMethod" htmlFor="paymentMethod">Payment Method:</label>
          <select className ='select'
            id="paymentMethod"
            value={paymentMethod}
            onChange={handlePaymentMethodChange}
            required
          >
            <option value="">Select Payment Method</option>
            <option value="creditCard">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="bankTransfer">Bank Transfer</option>
          </select>
        </div>
        <div>
          <label className="address" htmlFor="address">Shipping Address:</label>
          <input 
          className='select'
            type="text"
            id="address"
            value={address}
            onChange={handleAddressChange}
            required
          />
        </div>
        <h3>Items in Cart:</h3>
        {showItemsInCart()}
        <button type="submit" className="submit"><Link to='/pay'>Place Order</Link> </button>
      </form>
    </div>
    </>
  );
}

export default CartPage;
