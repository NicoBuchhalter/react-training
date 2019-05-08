import React from 'react';

export default ({ description, amount, createdAt}) => (
  <div>
    <h3>{description}</h3>
    <p>Amount: $ {parseFloat(amount / 100)}</p>
    <p>Created at: {createdAt}</p>
  </div>
); 