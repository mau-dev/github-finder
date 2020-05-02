import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

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
				<Link to={`/user/${login}`} className='btn btn-dark btn-sm my-1'>
					More
				</Link>
			</div>
		</div>
	);
};

UserItem.propTypes = {
	user: PropTypes.object.isRequired
};

export default UserItem;
