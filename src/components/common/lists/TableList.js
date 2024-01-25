import { propertiesToReadable } from "../../../helpers/listsHelper"
import TableItem from "./TableItem"
import NothingToShow from "../scheletons/NothingToShow"
import "./TableList.css"

const TableList = (props) => {
	const [firstItem] = props.items
	let properties = null
	let columns = null

	if (firstItem) {
		properties = Object.keys(firstItem)
		columns = propertiesToReadable(properties)
	}

	return properties ? <table className='table table-rounded table-striped table-hover table-responsive'>
		<thead>
			<tr>
				{columns.map(columnName => <th key={props.id + '_' + columnName + '_th'}>{columnName}</th>)}
			</tr>
		</thead>

		<tbody>
			{props.items.map(item => <TableItem key={props.id + '_' + item.id + '_TableItem'} properties={properties} formatters={props.formatters} item={item} />)}
		</tbody>
	</table>
		: <NothingToShow />
}

export default TableList