import React, { Component } from 'react';

import './header-styles.scss';

export default class Header extends Component {
  render() {
    return (
      <div className='header'>
        <h1 className='header__text'>markdown previewer</h1>
        <p className='header__para'>try it! hold it! love it!</p>
      </div>
    );
  }
}
