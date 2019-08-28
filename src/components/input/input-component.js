import React from 'react';

import './input-styles.scss';

const Input = ({ handleChange, markdown }) => {
  return (
    <div className='input'>
      <div className='input__header'>common input</div>
      <textarea
        id='editor'
        className='input__editor'
        onChange={handleChange}
        value={markdown}
      />
    </div>
  );
};

export default Input;
