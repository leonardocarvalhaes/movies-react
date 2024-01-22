import { Fragment, useEffect, useRef, useState } from 'react';
import Input from '../common/forms/Input';
import PeopleList from '../common/people/PeopleList';

const App = (props) => {
	const [isTrue, setIsTrue] = useState(true)
	const [people, setPeople] = useState([])
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [dob, setDOB] = useState('')

	const firstNameRef = useRef(null)
	const lastNameRef = useRef(null)
	const dobRef = useRef(null)

	const toggleTrue = () => setIsTrue(!isTrue)

	const handleSubmit = (event) => {
		event.preventDefault()

		if (!validateForm()) {
			alert('Provide all the data')
			return
		}

		let newPeople = [
			...people,
			{
				id: people.length + 1,
				firstName: firstName,
				lastName: lastName,
				dob: dob,
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

		setPeople(newPeople)

		resetForm()
	}

	const validateForm = () => {
		let valid = true

		if (!firstName || !lastName || !dob) {
			valid = false
		}

		return valid
	}

	const resetForm = () => {
		setFirstName('')
		setLastName('')
		setDOB('')

		firstNameRef.current.value = ''
		lastNameRef.current.value = ''
		dobRef.current.value = ''
	}

	useEffect(() => {
		setPeople([
			{
				id: 1,
				firstName: 'Bla',
				lastName: 'Silveira',
				dob: '1993-11-07',
			},
			{
				id: 2,
				firstName: 'Blu',
				lastName: 'Souza',
				dob: '1983-11-07',
			}
		])
	}, [])

	return (
		<Fragment>
			<h1>{props.message}</h1>
			<hr />
			<Fragment>
				{isTrue ? <p>True</p> : <p>False</p>}
			</Fragment>
			<hr />
			<a href='#!' className='btn btn-outline-secondary' onClick={toggleTrue}>Toggle isTrue</a>
			<hr />
			<h3>People</h3>
			<PeopleList people={people} />
			<hr />
			<form autoComplete='off' onSubmit={handleSubmit}>
				<Input ref={firstNameRef} title='First Name' name='first-name' handler={setFirstName}></Input>
				<Input ref={lastNameRef} title='Last Name' name='last-name' handler={setLastName}></Input>
				<Input ref={dobRef} title='Date Of Birth' name='dob' type='date' handler={setDOB}></Input>

				<input type='submit' className='btn btn-primary' value='Add Person'></input>
			</form>


			<div>
				First name: {firstName} <br />
				Last name: {lastName} <br />
				Date of birth: {dob}
			</div>
		</Fragment>
	);
}

export default App;
