import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route, Link } from 'react-router-dom';

const TopicPage = (props) => (
	<div>
		<h1>Topic Page</h1>
		<button onClick={() => props.history.push('/topic/100')}>Topic Detail</button>
		<Link to={`${props.match.url}/10`}>To Topic 10</Link>
	</div>
);

const TopicDetail = (props) => {
	console.log(props);
	return (
		<div>
			<h1>Topic Detail : {props.match.params.topicId}</h1>
		</div>
	);
};

const Home = (props) => {
	console.log(props);
	return (
		<div>
			<h2>Home page</h2>
			<Link to="/topic">To topic page</Link>
		</div>
	);
};

function App() {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/hats" component={TopicPage} />
				<Route exact path="/topic/:topicId" component={TopicDetail} />
			</Switch>
		</div>
	);
}

export default App;
