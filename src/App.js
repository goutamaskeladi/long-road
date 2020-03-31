import React, { Component } from 'react';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInUp from './pages/sign-in-up/sign-in-up.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { Switch, Route } from 'react-router-dom';
import './App.scss';

class App extends Component {
	constructor() {
		super();
		this.state = {
			currentUser: null
		};
	}

	unsubscribeFromAuth = null;

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot((snapShot) => {
					this.setState({
						currentUser: {
							id: snapShot.id,
							...snapShot.data()
						}
					});
				});
			} else {
				this.setState({ currentUser: userAuth });
			}
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div className="App">
				<Header currentUser={this.state.currentUser} />
				{this.state.currentUser ? (
					<span className="welcome-message">
						Welcome <strong>{this.state.currentUser.displayName}</strong>
					</span>
				) : null}
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/shop" component={ShopPage} />
					<Route exact path="/signin" component={SignInUp} />
				</Switch>
			</div>
		);
	}
}

export default App;
