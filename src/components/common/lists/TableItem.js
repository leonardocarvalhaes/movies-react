const TableItem = (props) => {
	let item = props.item

	for (const key in props.formatters) {
		item[key] = props.formatters[key](item)
	}

	return <tr>
		{props.properties.map(property => <td>{item[property]}</td>)}
	</tr>
}

export default TableItem