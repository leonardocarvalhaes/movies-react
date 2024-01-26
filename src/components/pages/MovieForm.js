import { useContext, useEffect, useMemo, useState } from "react";
import Input from "../common/forms/Input";
import call from "../../helpers/httpHelper";
import { toInputDate } from "../../helpers/datesHelper";
import globalStateContext from "../../contexts/globalStateContext";
import { useNavigate } from "react-router-dom";

const MovieForm = (props) => {
	const emptyMovie = useMemo(() => {
		return {
			id: '',
			title: '',
			release_date: '',
			duration: '',
			rating: '',
			description: '',
		}
	}, [])

	const { jwt } = useContext(globalStateContext)

	const navigate = useNavigate()

	const [movie, setMovie] = useState(emptyMovie)

	const mpaaRatingOptions = [
		{ value: 1, description: 'L' },
		{ value: 2, description: 'ML' },
		{ value: 3, description: 'PB13' },
		{ value: 4, description: 'SF17' },
		{ value: 5, description: 'R' },
		{ value: 6, description: '18A' },
		{ value: 7, description: '18C' },
		{ value: 8, description: '27X' },
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
	}, [emptyMovie, props.id])

	const handleSubmit = (event) => {
		event.preventDefault()
	}

	const handleChange = (property) => (event) => {
		setMovie({
			...movie,
			[property]: event.target.value
		})
	}

	const deleteMovie = () => {
		call({ url: '/admin/movies/' + props.id, method: 'DELETE', jwt })
			.then(data => {
				data.release_date = toInputDate(data.release_date)
				setMovie(data)
			})
			.catch(error => console.log(error))
	}

	return (
		<div className='container'>
			<form autoComplete='off' onSubmit={handleSubmit}>
				{
					movie.id && <input type='hidden' value={movie.id} />
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
						<Input name={'rating'} title='Rating' type="select" options={mpaaRatingOptions} value={movie.rating} onChange={handleChange('rating')} />
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
							movie.id &&
							<><span className="mx-2"></span><button onClick={deleteMovie} className="btn btn-danger">Delete</button></>
						}
					</div>
				</div>
			</form>
		</div>
	);
}

export default MovieForm;
