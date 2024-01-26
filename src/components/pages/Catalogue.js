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
		release_date: (movie) => toReadable(movie.release_date),
		image: (movie) => movie.image && <img src={'https://image.tmdb.org/t/p/w200/' + movie.image} alt="poster" />,
	}

	useEffect(() => {
		if (!jwt) {
			navigate('/login')
			return
		}

		call({url: '/admin/catalogue', jwt})
			.then(data => setCatalogue(data))
			.catch(error => console.log(error))
	}, [jwt, navigate])

	return (
		<div className='container'>
			<div className='row'>
				<div className='col'>
					<h1>Catalogue</h1>
					<hr />
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
