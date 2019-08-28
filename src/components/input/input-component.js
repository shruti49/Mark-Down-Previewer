import React, { Component } from 'react';

import './input-styles.scss';

export default class Input extends Component {
  render() {
    const { handleChange, markdown } = this.props;
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
  }
}
