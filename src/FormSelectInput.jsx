import React, { Component } from 'react';

class FormSelectInput extends Component {
	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		var updatedState = {};
		updatedState[`${this.props.name}`] = event.target.value;
		this.props.inputHandler(updatedState);
	}

	render() {
		return (
			<div className="FormSelectInput">
				<label htmlFor={this.props.name}>{this.props.humanReadable}: </label>
				<select type="select" name={this.props.name} id={this.props.name} onChange={this.handleChange}>
					<option>--</option>
					{this.props.options.map(state => (
						<option value={state} key={state}>
							{state}
						</option>
					))}
				</select>
			</div>
		);
	}
}

export default FormSelectInput;
