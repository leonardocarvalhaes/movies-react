import { propertiesToReadable } from "../../../helpers/listsHelper"
import NothingToShow from "../scheletons/NothingToShow"
import GridItem from "./GridItem"

const GridList = (props) => {
	const [firstItem] = props.items
	let properties = null
	let columns = null

	if (firstItem) {
		properties = Object.keys(firstItem)
		columns = propertiesToReadable(properties)
	}

	return properties ? <div className="container mt-4">
		<div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
			{props.items.map(item => <GridItem key={props.id + '_' + item.id + '_GridItem'} properties={properties} formatters={props.formatters} item={item} />)}
		</div>
	</div>
		: <NothingToShow />
}

export default GridList