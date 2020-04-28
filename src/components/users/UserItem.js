import React, {Component} from 'react';

export class UserItem extends Component {
	state = {
		id: 'id',
		login: 'mojombo',
		avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
		html_url: 'https://github.com/mojombo'
	};
	// constructor() {
	// 	super();
	// 	this.state = {
	// 		id: 'id',
	// 		login: 'mojombo',
	// 		avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
	// 		html_url: 'https://github.com/mojombo'
	// 	};
	// }
	render() {
		//destructuring to pull out the values from the state
		//in order to get values without this.state
		//instead this.state.avatar_url => just avatar_url
		const {id, login, avatar_url, html_url} = this.state;
		return (
			<div className='card text-center'>
				<img src={avatar_url} alt='' className='round-img' style={{width: '60px'}} />
				<h1>{login}</h1>
				<div>
					<a href={html_url} className='btn btn-dark btn-sm my-1'>
						More
					</a>
				</div>
			</div>
		);
	}
}

export default UserItem;
