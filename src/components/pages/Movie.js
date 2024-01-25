import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Input from "../common/forms/Input";

const Movie = (props) => {
	const [title, setTitle] = useState('')
	const [releaseDate, setReleaseDate] = useState('')
	const [rating, setRating] = useState('')
	const [description, setDescription] = useState('')
	const { id } = useParams()

	useEffect(() => {
		const movie = {
			id: 1,
			title: 'The Matrix',
			duration: 145,
			rating: 4.9,
			releaseDate: '1999-10-11',
			description: 'Loren ipsum, topen numdi campis auridete. Elocidus cracromedi, et acta peri iru. Oni tre cadis ularus.',
		}

		setTitle(movie.title)
		setReleaseDate(movie.releaseDate)
		setRating(movie.rating)
		setDescription(movie.description)
	}, [])

	const handleSubmit = (event) => {
		event.preventDefault()
	}

	return (
		<div className='container'>
			<form autoComplete='off' onSubmit={handleSubmit}>
				<div className='row'>
					<div className='col'>
						<h1>Movie #{id}</h1>
						<hr />
					</div>
				</div>

				<div className='row'>
					<div className='col'>
						<Input name='title' title='Title' value={title} onChange={(event) => setTitle(event.target.value)} />
					</div>
				</div>

				<div className='row'>
					<div className='col-md-6'>
						<Input name='release_date' title='Release Date' type="date" value={releaseDate} onChange={(event) => setReleaseDate(event.target.value)} />
					</div>

					<div className='col-md-6'>
						<Input name='rating' title='Rating' type="select" options={[{ value: 1, description: 'Option 1' }, { value: 2, description: 'Option 2' }]} value={rating} onChange={(event) => setRating(event.target.value)} />
					</div>
				</div>

				<div className='row'>
					<div className='col'>
						<Input name='description' title='Description' type='textarea' rows='10' value={description} onChange={(event) => setDescription(event.target.value)} />
					</div>
				</div>
			</form>
		</div>
	);
}

export default Movie;
