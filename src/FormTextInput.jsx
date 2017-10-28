import React, { Component } from 'react';

class FormTextInput extends Component {
	constructor(props) {
		super(props);

		this.handleInput = this.handleInput.bind(this);
	}

	handleInput(event) {
		var updatedState = {};
		updatedState[`${this.props.name}`] = event.target.value;
		this.props.inputHandler(updatedState);
	}

	render() {
		return (
			<div className="FormTextInput">
				<label htmlFor={this.props.name}>{this.props.humanReadable}: </label>
				<input
					id={this.props.name}
					type="text"
					name={this.props.name}
					placeholder={this.props.humanReadable}
					onChange={this.handleInput}
				/>
			</div>
		);
	}
}

export default FormTextInput;
