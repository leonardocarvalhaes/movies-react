import { useEffect, useState } from "react";
import TableList from "../common/lists/TableList";
import { Link } from "react-router-dom";

const Movies = (props) => {
	const [movies, setMovies] = useState([])

	const formatters = {
		title: (movie) => <Link className='text-secondary text-decoration-none' to={'/movies/' + movie.id}>{movie.title}</Link>
	}

	useEffect(() => {
		setMovies([
			{
				id: 1,
				title: 'The Matrix',
				duration: 145,
				rating: 4.9,
				realeaseDate: '1999',
			},
			{
				id: 2,
				title: 'Matrix Reloaded',
				duration: 152,
				rating: 4.9,
				realeaseDate: '2001',
			}
		])
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
					<TableList items={movies} formatters={formatters} />
				</div>
			</div>
		</div>
	);
}

export default Movies;
