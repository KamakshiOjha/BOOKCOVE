import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Pay.css';


const PaymentPage = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const handlePayment = (e) => {
    e.preventDefault();
    // Perform payment logic here, e.g., send payment details to server
    // You can access cardNumber, expiryDate, cvv, name, and amount for processing the payment
    // Reset the form or show a success message after payment is processed
  };

  return (
    <div>
      <div className="Heading7_p">
        <div className="heading_in7_p">
          <p className="heading17_p">
            <Link to="/pay">PAYMENT INFORMATION</Link>
          </p>
          {/* <div className="hidden_log7_p">
            <p className="heading27_p">
              <Link to="/">BOOKCOVE</Link>
            </p>
          </div> */}
        </div>
      </div>
     <div className='bg_P'>
      <form className='form_p' onSubmit={handlePayment}>
        <div>
          <label htmlFor="cardNumber" className="cardNumber">Card Number:</label>
          <input
            type="text"
            className="cardNumber_p"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="Enter your card number"
            required
          />
        </div>
        <div>
          <label htmlFor="expiryDate">Expiry Date:</label>
          <input
            type="text"
            id="expiryDate"
            value={expiryDate}
            className="cardNumber_p"
            onChange={(e) => setExpiryDate(e.target.value)}
            placeholder="MM/YY"
            required
          />
        </div>
        <div>
          <label htmlFor="cvv">CVV:</label>
          <input
            type="text"
            id="cvv"
            value={cvv}
            className="cardNumber_p"
            onChange={(e) => setCVV(e.target.value)}
            placeholder="Enter CVV"
            required
          />
        </div>
        <div>
          <label htmlFor="name">Name on Card:</label>
          <input
            type="text"
            id="name"
            value={name}
            className="cardNumber_p"
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name on card"
            required
          />
        </div>
        <div>
          <label htmlFor="amount">Amount:</label>
          <input
            type="text"
            id="amount"
            value={amount}
            className="cardNumber_p"
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            required
          />
        </div>
        <button type="submit" className="submit_p" >Pay Now</button>
      </form>
      </div>
    </div>
  );
};

export default PaymentPage;
