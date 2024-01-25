import { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import Input from '../common/forms/Input';
import globalStateContext from '../../contexts/globalStateContext';
import call from '../../helpers/httpHelper';

const Login = (props) => {
	const { setJWT } = useContext(globalStateContext)
	const { toggleRefresh } = useOutletContext()

	const navigate = useNavigate()

	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	const usernameRef = useRef(null)
	const passwordRef = useRef(null)

	const handleSubmit = (event) => {
		event.preventDefault()

		if(!validateForm()) {
			alert('You forgot to provide something')
		}

		let payload = {
			email: username,
			password: password
		}

		call({url: '/authenticate', method: 'POST', body: payload})
			.then(data => {
				if (data.error) {
					alert(data.message)
					return
				}

				setJWT(data.access_token)
				resetForm()
				toggleRefresh(true)
				navigate('/')
			})
			.catch(error => {
				alert(error)
			})
	}

	const validateForm = () => {
		let valid = true

		if (!username || !password) {
			valid = false
		}

		return valid
	}

	const resetForm = () => {
		setUsername('')
		setPassword('')

		usernameRef.current.value = ''
		passwordRef.current.value = ''
	}

	return (
		<div className='container'>
			<div className='row'>
				<div className='col'>
					<h1>Login</h1>
					<hr />
				</div>
			</div>

			<div className='row'>
				<div className='col'>
					<form autoComplete='off' onSubmit={handleSubmit}>
						<Input ref={usernameRef} title='Username' type='email' name='first-name' onChange={(event) => setUsername(event.target.value)}></Input>
						<Input ref={passwordRef} title='Password' type='password' name='last-name' onChange={(event) => setPassword(event.target.value)}></Input>

						<input type='submit' className='btn btn-primary' value='Login'></input>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Login;
