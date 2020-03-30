import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/longroad.png';
import './header.style.scss';

const Header = () => {
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
			</div>
		</div>
	);
};

export default Header;
