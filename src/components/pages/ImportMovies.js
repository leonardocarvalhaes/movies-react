import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import call from "../../helpers/httpHelper";
import globalStateContext from "../../contexts/globalStateContext";
import Swal from "sweetalert2";
import Input from "../common/forms/Input";

const ImportMovies = (props) => {
	const { jwt } = useContext(globalStateContext)
	const navigate = useNavigate()

	const [blocked, setBlocked] = useState(false)
	const [formData, setFormData] = useState({
		pivot_words: '',
		other_words: '',
		rating: '0',
		votes: '0',
	})

	const handleSubmit = (event) => {
		event.preventDefault()

		if(blocked) {
			return
		}

		setBlocked(true)

		let url = '/admin/movies/import'
		let method = 'POST'

		call({ url, method, body: formData, jwt })
			.then(response => !response.error && Swal.fire({
				title: 'Results',
				text: response.message,
			}) && navigate('/admin/catalogue'))
			.catch(error => setBlocked(false) && Swal.fire({
				title: 'Error',
				text: error,
			}))
	}

	const handleChange = (property) => (event) => {
		setFormData({
			...formData,
			[property]: event.target.value
		})
	}

	return (
		<div className='container'>
			<div className='row mb-3'>
				<div className='col'>
					<h1>
						<Link to='/admin/catalogue' className='btn btn-link text-secondary'><i className="bi bi-arrow-left"></i></Link>
						Import Movies
					</h1>
				</div>
			</div>

			<div className='row'>
				<div className='col'>
					<div className='container'>
						<form autoComplete='off' onSubmit={handleSubmit}>
							<div className='row'>
								<div className='col-md-3'>
									<Input name={'pivot_words'} title='Pivot Words' value={formData.pivot_words} onChange={handleChange('pivot_words')} />
								</div>

								<div className='col-md-9'>
									<Input name={'other_words'} title='Other Words' value={formData.other_words} onChange={handleChange('other_words')} />
								</div>
							</div>

							<div className='row'>
								<div className='col-md-6'>
									<Input name={'rating'} title='Minimum Rating' value={formData.rating} onChange={handleChange('rating')} />
								</div>

								<div className='col-md-6'>
									<Input name={'votes'} title='Minimum of Votes' value={formData.votes} onChange={handleChange('votes')} />
								</div>
							</div>

							<div className='row'>
								<div className='col'>
									<input type='submit' value={'Import'} className="btn btn-primary" />
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ImportMovies;
