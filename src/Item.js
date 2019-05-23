import React from 'react';
import PropTypes from 'prop-types';

function Item({ id, name, quantity, date }) {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{quantity}</td>
      <td>{date}</td>
    </tr>
  );
}

Item.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number,
  date: PropTypes.string
};

export default Item;
