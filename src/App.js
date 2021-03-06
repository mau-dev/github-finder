import React, { Fragment } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import About from './components/pages/About';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import axios from 'axios';

class App extends React.Component {
	//put the red.data in the state
	state = {
		users: [],
		user: {},
		loading: false,
		alert: null,
		repos: []
	};

	// make a request to the github api
	// async componentDidMount() {
	// 	this.setState({loading: true});

	// 	const res = await axios.get(
	// 		`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process
	// 			.env.REACT_APP_GITHUB_CLIENT_SECRET}`
	// 	);

	// 	//reset the state to res.data
	// 	this.setState({users: res.data, loading: false});
	// }

	//search users
	searchUsers = async (text) => {
		this.setState({loading: true});
		//setting the endpoint for the search
		const res = await axios.get(
			`https://api.github.com/search/users?q=${text}&client_id=${process.env
				.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);

		this.setState({users: res.data.items, loading: false});
	};
//get single github user
getUser = async (username) => {
	this.setState({ loading: true });
	const res = await axios.get(
	`https://api.github.com/users/${username}?client_id=${process.env
	.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
);

this.setState({user: res.data, loading: false});
}

//get users repos
getUserRepos = async (username) => {
	this.setState({ loading: true });
	const res = await axios.get(
	`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env
	.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
);

this.setState({repos: res.data, loading: false});
}




	//clear users from state
	clearUsers = () => this.setState({users: [], loading: false});

	setAlert = (msg, type) => {
		this.setState({alert: {msg, type}});

		setTimeout(() => this.setState({alert: null}), 3000);
	};
	render() {
		const {users, user, loading, repos} = this.state;
		return (
			<Router >
			<div className='App'>
				<Navbar title='Github Finder' icon='fab fa-github' />

				<div className='container'>
					<Alert alert={this.state.alert} />
					{/* sending props from  down to up */}
					<Switch>
						<Route exact path='/' render={props => (
							<Fragment>
								<Search
						searchUsers={this.searchUsers}
						clearUsers={this.clearUsers}
						showClear={users.length > 0 ? true : false}
						setAlert={this.setAlert}
					/>
					{/* //passing the state with props */}
					<Users loading={loading} users={users} />

							</Fragment>
						)} />
						<Route exact path='/about' component={About} />
						{/* passing the props and the state for this route */}
						<Route exact path='/user/:login' render={props => (
							<User {...props} getUser={this.getUser} getUserRepos={this.getUserRepos} repos={repos} user={user} loading={loading} />
						)} />
					</Switch>
					
				</div>
			</div>
			</Router>
		);
	}
}

export default App;
