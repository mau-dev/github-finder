import React from 'react';

const UserItem = ({user: {id, login, avatar_url, html_url}}) => {
	//in functional component getting rid of "this",an passing "props" as an argument in the arrow func
	// changing this.props.user with props.user

	// the comentet out destructuring moved to the arrows func arguments above
	// const {id, login, avatar_url, html_url} = props.user;
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
};

export default UserItem;
