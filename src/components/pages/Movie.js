import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Input from "../common/forms/Input";

const Movie = (props) => {
	const [movie, setMovie] = useState({})
	const [title, setTitle] = useState('')
	const [releaseDate, setReleaseDate] = useState('')
	const [rating, setRating] = useState('')
	const { id } = useParams()

	useEffect(() => {
		setMovie({
			id: 1,
			title: 'The Matrix',
			duration: 145,
			rating: 4.9,
			realeaseDate: '1999',
		})
	}, [])

	return (
		<div className='container'>
			<div className='row'>
				<div className='col'>
					<h1>Movie #{id}</h1>
					<hr />
				</div>
			</div>

			<div className='row'>
				<div className='col'>
					<Input name='title' title='Title' value={movie.title} handler={setTitle} />
				</div>
			</div>

			<div className='row'>
				<div className='col-md-6'>
					<Input name='release_date' title='Release Date' value={movie.realeaseDate} handler={setReleaseDate} />
				</div>

				<div className='col-md-6'>
					<Input name='rating' title='Rating' value={movie.rating} handler={setRating} />
				</div>
			</div>
		</div>
	);
}

export default Movie;
