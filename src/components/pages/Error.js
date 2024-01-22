import { Link, useRouteError } from "react-router-dom"

const Error = () => {
	const error = useRouteError()

	return (
		<div className='container'>
			<div className='row'>
				<div className='col text-center pt-5'>
					<h1 className="mt-5">Ooops =/</h1>
					<p>Sometihing went wrong</p>
					<p><em>{error.statusText || error.message}</em></p>
				</div>
			</div>
			<div className='row'>
				<div className='col text-center pt-5'>
					<Link to='/' className='btn btn-outline-secondary'>Go Home</Link>
				</div>
			</div>
		</div>
	)
}

export default Error