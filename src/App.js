import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import UserItem from './components/users/UserItem';

class App extends React.Component {
	render() {
		return (
			<div className='App'>
				<Navbar title='Github Finder' icon='fab fa-github' />
				<UserItem />
				<h1>hello from app</h1>
			</div>
		);
	}
}

export default App;
