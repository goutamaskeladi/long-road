import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Logo from '../../assets/images/longroad.png';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import './header.style.scss';

const Header = ({ currentUser, hidden }) => {
	return (
		<div className="header">
			<Link className="logo-container" to="/">
				<div className="logo">
					<img src={Logo} width="150" height="50" alt="Long Road" />
				</div>
			</Link>
			<div className="options">
				<Link className="option" to="/shop">
					SHOP
				</Link>
				<Link className="option" to="/contact">
					CONTACT
				</Link>
				{currentUser ? (
					<div className="option" onClick={() => auth.signOut()}>
						SIGN OUT
					</div>
				) : (
					<Link className="option" to="/signin">
						SIGN IN
					</Link>
				)}
				<CartIcon />
			</div>
			{hidden ? null : <CartDropdown />}
		</div>
	);
};

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
	currentUser,
	hidden
});

export default connect(mapStateToProps)(Header);
