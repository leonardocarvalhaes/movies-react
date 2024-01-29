import { useContext, useEffect, useMemo, useState } from "react";
import Input from "../common/forms/Input";
import call from "../../helpers/httpHelper";
import { toISO, toInputDate } from "../../helpers/datesHelper";
import globalStateContext from "../../contexts/globalStateContext";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const MovieForm = (props) => {
	const emptyMovie = useMemo(() => {
		return {
			id: 0,
			title: '',
			release_date: '',
			duration: 0,
			mpaa_rating: '',
			description: '',
		}
	}, [])

	const { jwt } = useContext(globalStateContext)

	const navigate = useNavigate()

	const [movie, setMovie] = useState(emptyMovie)

	const mpaaRatingOptions = [
		{ value: 'L', description: 'L' },
		{ value: 'ML', description: 'ML' },
		{ value: 'PG-13', description: 'PG-13' },
		{ value: 'SF17', description: 'SF17' },
		{ value: 'R', description: 'R' },
		{ value: '18A', description: '18A' },
		{ value: '18C', description: '18C' },
		{ value: '27X', description: '27X' },
	]

	useEffect(() => {
		if (!jwt) {
			navigate('/login')
		}

		if (props.id) {
			call({ url: '/movies/' + props.id })
				.then(data => {
					data.release_date = toInputDate(data.release_date)
					setMovie(data)
				})
				.catch(error => console.log(error))
		} else {
			setMovie(emptyMovie)
		}
	}, [emptyMovie, props.id, jwt, navigate])

	const handleSubmit = (event) => {
		event.preventDefault()

		const body = {
			...movie
		}

		body.release_date = toISO(body.release_date)
		body.duration = parseInt(body.duration)

		let url = '/admin/movies/create'
		let method = 'PUT'

		if (movie.id) {
			url = '/admin/movies/' + movie.id
			method = 'PATCH'
		}

		call({ url, method, body, jwt })
			.then(response => !response.error && navigate('/admin/catalogue'))
			.catch(error => Swal.fire({
				title: 'Error',
				text: error,
			}))
	}

	const handleChange = (property) => (event) => {
		setMovie({
			...movie,
			[property]: event.target.value
		})
	}

	const deleteMovie = () => {
		call({ url: '/admin/movies/' + props.id, method: 'DELETE', jwt })
			.then(_ => navigate('/admin/catalogue'))
			.catch(error => console.log(error))
	}

	return (
		<div className='container'>
			<form autoComplete='off' onSubmit={handleSubmit}>
				{
					movie.id ? <input type='hidden' value={movie.id} /> : <></>
				}

				<div className='row'>
					<div className='col-md-9'>
						<Input name={'title'} title='Title' value={movie.title} onChange={handleChange('title')} />
					</div>

					<div className='col-md-3'>
						<Input name={'duration'} title='Duration' value={movie.duration} onChange={handleChange('duration')} />
					</div>
				</div>

				<div className='row'>
					<div className='col-md-6'>
						<Input name={'release_date'} title='Release Date' type="date" value={movie.release_date} onChange={handleChange('release_date')} />
					</div>

					<div className='col-md-6'>
						<Input name={'mpaa_rating'} title='Rating' type="select" options={mpaaRatingOptions} value={movie.mpaa_rating} onChange={handleChange('mpaa_rating')} />
					</div>
				</div>

				<div className='row'>
					<div className='col'>
						<Input name={'description'} title='Description' type='textarea' rows='10' value={movie.description} onChange={handleChange('description')} />
					</div>
				</div>

				<div className='row'>
					<div className='col'>
						<input type='submit' value={'Save'} className="btn btn-primary" />
						{
							!movie.id ? <></>
							: <><span className="mx-2"></span><Link onClick={deleteMovie} className="btn btn-danger">Delete</Link></>
						}
					</div>
				</div>
			</form>
		</div>
	);
}

export default MovieForm;
