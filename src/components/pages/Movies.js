import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toReadable } from "../../helpers/datesHelper";
import call from "../../helpers/httpHelper";
import GridList from "../common/lists/GridList";

const Movies = (props) => {
	const [movies, setMovies] = useState([])

	const formatters = {
		title: (movie) => <><Link className='text-secondary text-decoration-none' to={'/movies/' + movie.id}>{movie.title}</Link> {movie.rating ? <span className="bade bg-warning rounded-2 px-1 text-white no-wrap">{movie.rating}</span> : <></>}</>,
		image: (movie) => movie.image && <Link to={'/movies/' + movie.id}><img src={'https://image.tmdb.org/t/p/w500/' + movie.image} className="img-fluid rounded-5 hover-scale" width={250} alt="poster" /></Link>,
		release_date: (movie) => <small><em>{toReadable(movie.release_date)}</em></small>,
		id: (movie) => '',
		rating: (movie) => '',
	}

	useEffect(() => {
		call({ url: '/movies' })
			.then(data => {
				let formatedMovies = []

				data.forEach(movie => {
					formatedMovies.push({
						id: movie.id,
						image: movie.image,
						title: movie.title,
						rating: movie.rating,
						release_date: movie.release_date,
					})
				})

				setMovies(formatedMovies)
			})
			.catch(error => console.log(error))
	}, [])

	return (
		<div className='container'>
			<div className='row mb-3'>
				<div className='col'>
					<h1>Movies</h1>
				</div>
			</div>

			<div className='row'>
				<div className='col text-center'>
					<GridList id="movies" items={movies} formatters={formatters} />
				</div>
			</div>
		</div>
	);
}

export default Movies;
