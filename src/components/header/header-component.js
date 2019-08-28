import React from 'react';

import './header-styles.scss';

const Header = () => {
  return (
    <div className='header'>
      <h1 className='header__text'>markdown previewer</h1>
      <p className='header__para'>try it! hold it! love it!</p>
    </div>
  );
};

export default Header;
