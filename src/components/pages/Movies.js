import { useEffect, useState } from "react";
import TableList from "../common/lists/TableList";
import { Link } from "react-router-dom";

const Movies = (props) => {
	const [movies, setMovies] = useState([])

	const formatters = {
		title: (movie) => <Link className='text-secondary text-decoration-none' to={'/movies/' + movie.id}>{movie.title}</Link>
	}

	useEffect(() => {
		const headers = new Headers()
		headers.append('Content-Type', 'application/json')

		const requestOptions = {
			method: 'GET',
			headers: headers
		}

		fetch(`/movies`, requestOptions)
			.then(response => response.json())
			.then(data => setMovies(data))
			.catch(error => console.log(error))
	}, [])

	return (
		<div className='container'>
			<div className='row'>
				<div className='col'>
					<h1>Movies</h1>
					<hr />
				</div>
			</div>

			<div className='row'>
				<div className='col text-center'>
					<TableList id="movies" items={movies} formatters={formatters} />
				</div>
			</div>
		</div>
	);
}

export default Movies;
