import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import axios from 'axios';

class App extends React.Component {
	//put the red.data in the state
	state = {
		users: [],
		loading: false
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
	//clear users from state
	clearUsers = () => this.setState({users: [], loading: false});

	render() {
		const {users, loading} = this.state;
		return (
			<div className='App'>
				<Navbar title='Github Finder' icon='fab fa-github' />

				<div className='container'>
					{/* sending props from  down to up */}
					<Search
						searchUsers={this.searchUsers}
						clearUsers={this.clearUsers}
						showClear={users.length > 0 ? true : false}
					/>
					{/* //passing the state with props */}
					<Users loading={loading} users={users} />
				</div>
			</div>
		);
	}
}

export default App;
