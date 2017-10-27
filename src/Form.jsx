import React, { Component } from 'react';
import FormTextInput from './FormTextInput';
import FormSelectInput from './FormSelectInput';

const states = [
	'Alabama',
	'Alaska',
	'Arizona',
	'Arkansas',
	'California',
	'Colorado',
	'Connecticut',
	'Delaware',
	'Florida',
	'Georgia',
	'Hawaii',
	'Idaho',
	'Illinois',
	'Indiana',
	'Iowa',
	'Kansas',
	'Kentucky',
	'Louisiana',
	'Maine',
	'Maryland',
	'Massachusetts',
	'Michigan',
	'Minnesota',
	'Mississippi',
	'Missouri',
	'Montana',
	'Nebraska',
	'Nevada',
	'New Hampshire',
	'New Jersey',
	'New Mexico',
	'New York',
	'North Carolina',
	'North Dakota',
	'Ohio',
	'Oklahoma',
	'Oregon',
	'Pennsylvania',
	'Rhode Island',
	'South Carolina',
	'South Dakota',
	'Tennessee',
	'Texas',
	'Utah',
	'Vermont',
	'Virginia',
	'Washington',
	'West Virginia',
	'Wisconsin',
	'Wyoming'
];

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: '',
			lastName: '',
			address1: '',
			address2: '',
			city: '',
			zip: '',
			state: ''
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
		this.props.updateMap(this.state.address1);
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
					<FormTextInput name="address1" humanReadable="Address (Line 1)" inputHandler={this.handleInput} />
					<FormTextInput name="address2" humanReadable="Address (Line 2)" inputHandler={this.handleInput} />
					<FormTextInput name="city" humanReadable="City" inputHandler={this.handleInput} />
					<FormSelectInput name="state" humanReadable="State" options={states} inputHandler={this.handleInput} />
					<FormTextInput name="zip" humanReadable="Zipcode" inputHandler={this.handleInput} />
					<input type="submit" name="Submit" onClick={this.handleSubmit} />
				</form>
			</div>
		);
	}
}

export default Form;
