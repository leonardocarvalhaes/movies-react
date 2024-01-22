import React, { Component, Fragment } from 'react';
import PeopleList from '../common/people/PeopleList';
import Input from '../common/forms/Input';

class AppClass extends Component {
	constructor(props) {
		super(props)

		this.firstNameRef = React.createRef(null)
		this.lastNameRef = React.createRef(null)
		this.dobRef = React.createRef(null)

		this.state = {
			isTrue: false,
			people: [],
		}
	}

	componentDidMount() {
		this.setState({
			isTrue: false,
			people: [],
			firstName: '',
			lastName: '',
			dob: '',
		})
	}

	toggleTrue = () => this.setState({isTrue: !this.state.isTrue})

	setFirstName = (firstName) => this.setState({firstName: firstName})

	setLastName = (lastName) => this.setState({lastName: lastName})

	setDOB = (dob) => this.setState({dob: dob})

	setPeople = (people) => this.setState({people: people})

	handleSubmit = (event) => {
		event.preventDefault()

		if (!this.validateForm()) {
			alert('Provide all the data')
			return
		}

		let newPeople = [
			...this.state.people,
			{
				id: this.state.people.length + 1,
				firstName: this.state.firstName,
				lastName: this.state.lastName,
				dob: this.state.dob,
			}
		]

		newPeople = newPeople.sort((current, next) => {
			if (current.firstName < next.firstName) {
				return -1
			} else if (current.firstName > next.firstName) {
				return 1
			}

			return 0
		})

		this.setPeople(newPeople)

		this.resetForm()
	}

	validateForm = () => {
		let valid = true

		if (!this.state.firstName || !this.state.lastName || !this.state.dob) {
			valid = false
		}

		return valid
	}

	resetForm = () => {
		this.setState({
			firstName: '',
			lastName: '',
			dob: '',
		})

		this.firstNameRef.current.value = ''
		this.lastNameRef.current.value = ''
		this.dobRef.current.value = ''
	}

	render() {
		return (
			<Fragment>
				<h1>{this.props.message}</h1>

				<hr />

				<Fragment>
					{this.state.isTrue ? <p>True</p> : <p>False</p>}
				</Fragment>

				<hr />

				<a href='#!' className='btn btn-outline-secondary' onClick={this.toggleTrue}>Toggle isTrue</a>

				<hr />

				<h3>People</h3>
				<PeopleList people={this.state.people} />

				<hr />

				<form autoComplete='off' onSubmit={this.handleSubmit}>
					<Input ref={this.firstNameRef} title='First Name' name='first-name' handler={this.setFirstName}></Input>
					<Input ref={this.lastNameRef} title='Last Name' name='last-name' handler={this.setLastName}></Input>
					<Input ref={this.dobRef} title='Date Of Birth' name='dob' type='date' handler={this.setDOB}></Input>

					<input type='submit' className='btn btn-primary' value='Add Person'></input>
				</form>

				<div>
					First name: {this.state.firstName} <br />
					Last name: {this.state.lastName} <br />
					Date of birth: {this.state.dob}
				</div>
			</Fragment>
		);
	}
}

export default AppClass;
