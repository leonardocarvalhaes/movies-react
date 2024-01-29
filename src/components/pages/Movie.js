import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import call from "../../helpers/httpHelper";
import { toReadable } from "../../helpers/datesHelper";

const Movie = (props) => {
	const [movie, setMovie] = useState({
		title: '',
		duration: '',
		mpaa_rating: '',
		release_date: '',
		image: '',
		description: '',
	})
	const { id } = useParams()

	useEffect(() => {
		call({ url: '/movies/' + id })
			.then(data => {
				data.release_date = toReadable(data.release_date)
				setMovie(data)
			})
			.catch(error => console.log(error))
	}, [id])

	return (
		<div className='container'>
			<div className='row mb-3'>
				<div className='col'>
					<h1>
						<Link to='/movies' className='btn btn-link text-secondary'><i className="bi bi-arrow-left"></i></Link>
						{movie.title}
					</h1>
					<small><em>{movie.release_date}, Rated <span className="bade bg-warning rounded px-1">{movie.mpaa_rating}</span>, {movie.duration} minutes</em></small>
				</div>
			</div>

			<div className='row'>
				{
					movie.image &&
					<div className='col text-left'>
						<img className="rounded-5" src={'https://image.tmdb.org/t/p/w500/' + movie.image} alt="poster" />
					</div>
				}
			</div>

			<div className='row mt-3'>
				<div className='col text-left'>
					<p>{movie.description}</p>
				</div>
			</div>
		</div>
	);
}

export default Movie;
