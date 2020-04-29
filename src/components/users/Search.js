import React, {Component} from 'react';

export class Search extends Component {
	//attach state for the input
	state = {
		text: ''
	};

	onSubmit = (e) => {
		e.preventDefault();
		console.log(this.state.text);
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
