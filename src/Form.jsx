import React, { Component } from 'react';
import FormTextInput from './FormTextInput';

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: '',
			lastName: ''
		};

		this.handleInput = this.handleInput.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInput(updatedState) {
		console.log(updatedState);
		this.setState(updatedState);
	}

	handleSubmit(event) {
		event.preventDefault();
	}

	render() {
		return (
			<div className="Form">
				<p>
					Okay, ladies, now let's get in FORMation {this.state.firstName} {this.state.lastName}
				</p>
				<form>
					<FormTextInput name="firstName" humanReadable="First Name" inputHandler={this.handleInput} />
					<FormTextInput name="lastName" humanReadable="Last Name" inputHandler={this.handleInput} />
					<input type="submit" name="Submit" onClick={this.handleSubmit} />
				</form>
			</div>
		);
	}
}

export default Form;
