import React, { Component } from 'react';
import { connect } from 'react-redux';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInUp from './pages/sign-in-up/sign-in-up.component';
import CheckoutPage from './pages/checkout/checkout.component';
import Category from './pages/category/category.component';

import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { Switch, Route, Redirect } from 'react-router-dom';
import { setCurrentUser } from './redux/user/user.actions';
import './App.scss';

class App extends Component {
	unsubscribeFromAuth = null;

	componentDidMount() {
		const { setCurrentUser } = this.props;
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot((snapShot) => {
					setCurrentUser({
						id: snapShot.id,
						...snapShot.data()
					});
				});
			} else {
				setCurrentUser(userAuth);
			}
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		const { currentUser } = this.props;
		return (
			<div className="App">
				<Header />
				{currentUser ? (
					<span className="welcome-message">
						Welcome <strong>{currentUser.displayName}</strong>
					</span>
				) : null}
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/shop" component={ShopPage} />
					<Route exact path="/shop/:id" component={Category} />
					<Route exact path="/checkout" component={CheckoutPage} />
					<Route exact path="/signin" render={() => (currentUser ? <Redirect to="/" /> : <SignInUp />)} />
				</Switch>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	currentUser: state.user.currentUser
});

const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
