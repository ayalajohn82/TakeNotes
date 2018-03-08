import React from 'react';
import { Link } from 'react-router-dom';

class Menu extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Link to="/">
          Home
        </Link>
        <Link to="/Storage">
        Storage
        </Link >
      </div>
    );
  }
}

export default Menu;
