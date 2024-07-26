// src/components/FormInput.js
import React from 'react';
import PropTypes from 'prop-types';

const FormInput = ({ label, type = 'text', value, onChange }) => {
  const id = `input-${label.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
      <input
        id={id}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
        type={type} 
        value={value} 
        onChange={onChange} 
      />
    </div>
  );
};

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

FormInput.defaultProps = {
  type: 'text',
};

export default FormInput;
