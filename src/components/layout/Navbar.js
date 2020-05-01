import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


const Navbar = ({icon, title}) => {
	return (
		<nav className='navbar bg-primary'>
			<h1>
				<i className={icon} /> {title}
			</h1>
			<Link to='/'>Home</Link>
			<Link to='/about'>About</Link>
		</nav>
	);
};

//moving the default props at the bottom, the name of the class apending with .
Navbar.defaultProps = {
	title: 'Github Finder',
	icon: 'fab fa-github'
};

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired
};

export default Navbar;
