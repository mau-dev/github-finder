import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {
	//attach state for the input
	state = {
		text: ''
	};

	static propTypes = {
		searchUsers: PropTypes.func.isRequired
	};

	onSubmit = (e) => {
		e.preventDefault();
		// passing the text state in the search func
		this.props.searchUsers(this.state.text);
		//clearing the form after
		this.setState({text: ''});
		// console.log(this.state.text);
	};

	onChange = (e) => {
		this.setState({text: e.target.value}); //target the name avalue, text
		// this.setState({[e.target.name]: e.target.value});
	};

	render() {
		return (
			<div>
				<form className='form' onSubmit={this.onSubmit}>
					<input type='text' value={this.state.text} onChange={this.onChange} placeholder='Search Users...' />
					<input type='submit' value='search' className='btn btn-dark btn-block' />
				</form>
			</div>
		);
	}
}

export default Search;
