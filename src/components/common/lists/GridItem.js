import React from "react"

const GridItem = (props) => {
	let item = props.item

	for (const key in props.formatters) {
		if (!React.isValidElement(item[key])) {
			item[key] = props.formatters[key](item)
		}
	}

	return <div className="col">
		{props.properties.map(property => <p key={item.id + property}>{item[property]}</p>)}
	</div>
}

export default GridItem