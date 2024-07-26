// src/components/Button.js
import React from 'react';

const Button = ({ text, onClick, type = 'button', disable = false }) => {
  return (
    <button 
      type={type}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      onClick={onClick}
      disable={disable}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset'])
};

export default Button;
