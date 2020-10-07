import React from 'react';
import '../styles/components/Checkout.styl';
import { connect } from 'react-redux';

const Checkout = (props) => {
  const { cart } = props;

  const handleSumTotal = () => {
    const reducer = (acumulator, currentValue) => acumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <div className="Container">
      <div className="Checkout">
        <div className="Checkout-content">
          {cart.length > 0 ? <h3>Lista de Pedidos:</h3> : <h2>Sin Pedidos</h2>}
          {cart.map(item => (
            <div className="Checkout-item" key={item.title}>
              <div className="Checkout-element">
                <h4>{item.title}</h4>
                <span>
                  S/
                  {item.price}
                </span>
              </div>
              <button type="button">
                <i className="fas fa-trash-alt" />
              </button>
            </div>
          ))}
        </div>

        <div className="Checkout-sidebar">
          <h3>{`Precio Total: S/ ${handleSumTotal()}`}</h3>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};
export default connect(mapStateToProps)(Checkout);