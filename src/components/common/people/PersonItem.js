const PersonItem = (props) => {
	return <li
		key={props.person.id}
		className='list-group-item'
	>{props.person.firstName} {props.person.lastName}, {props.person.dob}</li>
}

export default PersonItem