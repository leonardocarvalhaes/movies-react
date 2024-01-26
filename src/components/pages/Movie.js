import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import call from "../../helpers/httpHelper";
import { toReadable } from "../../helpers/datesHelper";

const Movie = (props) => {
	const [movie, setMovie] = useState({
		title: '',
		duration: '',
		rating: '',
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
			<div className='row'>
				<div className='col'>
					<h1>{movie.title}</h1>
					<small><em>{movie.release_date}, Rated <span className="bade bg-warning rounded px-1">{movie.rating}</span>, {movie.duration} minutes</em></small>
					<hr />
				</div>
			</div>

			<div className='row'>
				{
					movie.image &&
					<div className='col-md-6 text-center'>
						<img src={'https://image.tmdb.org/t/p/w400/' + movie.image} alt="poster" />
					</div>
				}

				<div className='col-md-6 pl-md-1'>
					<p>{movie.description}</p>
				</div>
			</div>
		</div>
	);
}

export default Movie;
