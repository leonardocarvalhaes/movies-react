import { useContext, useEffect, useState } from "react"
import { getRoutesList } from "../../helpers/routerHelper"
import { Link } from "react-router-dom"
import globalStateContext from "../../contexts/globalStateContext"

const SideMenu = () => {
	const { jwt, setJWT } = useContext(globalStateContext)

	const [options, setOptions] = useState([])

	useEffect(() => setOptions(
		getRoutesList().filter(option => option.label && (jwt || !option.admin))
	), [jwt])

	return (
		<nav>
			<div className='list-group'>
				{
					options.map(option => {
						return <Link key={option.path} to={option.path} className='list-group-item'>{option.label}</Link>
					})
				}
			</div>
		</nav>
	)
}

export default SideMenu