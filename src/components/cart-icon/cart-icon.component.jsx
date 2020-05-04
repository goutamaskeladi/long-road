import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { ReactComponent as ShoppingIcon } from '../../assets/images/shopping-bag.svg';

import './cart-icon.style.scss';

const CartIcon = ({ itemCount, toggleCartItems }) => (
	<div className="cart-icon" onClick={toggleCartItems}>
		<ShoppingIcon className="shopping-icon" />
		<span className="item-count">{itemCount}</span>
	</div>
);

const mapStateToProps = (state) => ({
	itemCount: selectCartItemsCount(state)
});

const mapDispatchToProps = (dispatch) => ({
	toggleCartItems: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
