import React from 'react';

const Cart = ({ cart }) => {
  return (
    <div>
      <h2>Cart</h2>
      {cart.map((enquiry, index) => (
        <div key={index}>
          <p>Name: {enquiry.name}</p>
          <p>Email: {enquiry.email}</p>
          <p>Products: {enquiry.products}</p>
          <p>Reason: {enquiry.reason}</p>
          <p>Details: {enquiry.details}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
