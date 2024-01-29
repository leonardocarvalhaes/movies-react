import { useContext, useEffect, useState } from "react";
import TableList from "../common/lists/TableList";
import { Link, useNavigate } from "react-router-dom";
import globalStateContext from "../../contexts/globalStateContext";
import call from "../../helpers/httpHelper";
import { toReadable } from "../../helpers/datesHelper";

const Catalogue = (props) => {
	const [movies, setCatalogue] = useState([])
	const {jwt} = useContext(globalStateContext)
	const navigate = useNavigate()

	const formatters = {
		title: (movie) => <Link className='text-secondary text-decoration-none' to={'/admin/movies/' + movie.id + '/edit'}>{movie.title}</Link>,
		release_date: (movie) => <span className="no-wrap">{toReadable(movie.release_date)}</span>,
		image: (movie) => movie.image && <Link to={'/admin/movies/' + movie.id + '/edit'}><img src={'https://image.tmdb.org/t/p/w200/' + movie.image} width={50} alt="poster" /></Link>,
		description: (movie) => movie.description && movie.description.slice(0, 30) + '...',
	}

	useEffect(() => {
		if (!jwt) {
			navigate('/login')
			return
		}

		call({url: '/admin/catalogue', jwt})
			.then(data => {
				data.forEach(movie => {
					delete movie.description
				})

				setCatalogue(data)
			})
			.catch(error => console.log(error))
	}, [jwt, navigate])

	return (
		<div className='container'>
			<div className='row mb-3'>
				<div className='col'>
					<h1>Catalogue</h1>
				</div>

				<div className='col d-flex align-items-center justify-content-end'>
					<Link to='/admin/movies/create' className='btn btn-outline-secondary mx-1'><i className="bi bi-plus"></i> Add</Link>
					<Link to='/admin/movies/import' className='btn btn-outline-secondary mx-1'><i className="bi bi-download"></i> Import</Link>
				</div>
			</div>

			<div className='row'>
				<div className='col text-center'>
					<TableList id="catalogue" items={movies} formatters={formatters} />
				</div>
			</div>
		</div>
	);
}

export default Catalogue;
