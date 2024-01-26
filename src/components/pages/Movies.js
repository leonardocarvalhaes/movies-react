import { useEffect, useState } from "react";
import TableList from "../common/lists/TableList";
import { Link } from "react-router-dom";
import { toReadable } from "../../helpers/datesHelper";
import call from "../../helpers/httpHelper";

const Movies = (props) => {
	const [movies, setMovies] = useState([])

	const formatters = {
		title: (movie) => <Link className='text-secondary text-decoration-none' to={'/movies/' + movie.id}>{movie.title}</Link>,
		release_date: (movie) => toReadable(movie.release_date)
	}

	useEffect(() => {
		call({ url: '/movies' })
			.then(data => {
				data.forEach(movie => {
					delete movie['description']
					delete movie['image']
				})

				setMovies(data)
			})
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
