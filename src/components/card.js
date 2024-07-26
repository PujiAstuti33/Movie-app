// src/components/Card.js

import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ children, className ='' }) => {
  return <div className="bg-white shadow-md rounded p-4">{children}</div>;
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Card;
