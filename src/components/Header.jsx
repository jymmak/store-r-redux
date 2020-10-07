import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../styles/components/Header.styl';

const Header = props => (
  <div className="Container">
    <div className="Header">
      <h1 className="Header-title">
        <Link to="/">
          <img className="img-logo" src="assets/images/logo.jpg" alt="" />
        </Link>
      </h1>
      <div className="Header-checkout">
        <Link to="/checkout">
          <i className="fas fa-shopping-basket" />
        </Link>
        <div className="Header-alert">{props.cart.length}</div>
      </div>
    </div>
  </div>
);

const mapStateToProps = state => {
  return {
    cart: state.cart,
  };
};
export default connect(mapStateToProps)(Header);
