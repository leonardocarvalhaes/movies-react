import PersonItem from "./PersonItem"

const PeopleList = (props) => {
	return <ul className='list-group'>
		{
			props.people.map((person) => <PersonItem key={person.id} person={person} />)
		}
	</ul>
}

export default PeopleList