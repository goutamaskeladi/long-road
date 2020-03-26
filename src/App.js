import React, { Component } from 'react';
import CardList from './components/card-list/card-list.component';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchField: '',
			users: []
		};
	}
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((users) => this.setState({ users }));
	}
	render() {
		const { searchField, users } = this.state;
		const filtedUsers = users.filter((item) => item.name.toLowerCase().includes(searchField.toLowerCase()));
		return (
			<div className="app">
				<input
					type="search"
					placeholder="Search for users"
					onChange={(e) =>
						this.setState({ searchField: e.target.value }, () => {
							console.log(this.state);
						})}
				/>
				<div className="container">
					{this.state.users.length > 0 ? (
						<CardList users={filtedUsers.length > 0 ? filtedUsers : this.state.users} />
					) : (
						<p>Loading, please wait...</p>
					)}
				</div>
			</div>
		);
	}
}

export default App;
