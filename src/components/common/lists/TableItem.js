import React from "react"

const TableItem = (props) => {
	let item = props.item

	for (const key in props.formatters) {
		if (!React.isValidElement(item[key])) {
			item[key] = props.formatters[key](item)
		}
	}

	return <tr key={item.id + '_tr'}>
		{props.properties.map(property => <td key={item.id + property}>{item[property]}</td>)}
	</tr>
}

export default TableItem