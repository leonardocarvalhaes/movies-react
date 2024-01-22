import { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../common/forms/Input';
import globalStateContext from '../../contexts/globalStateContext';

const Login = (props) => {
	const { jwt, setJWT } = useContext(globalStateContext)

	const navigate = useNavigate()

	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	const usernameRef = useRef(null)
	const passwordRef = useRef(null)

	const handleSubmit = (event) => {
		event.preventDefault()

		if (!validateForm()) {
			alert('Provide all the data')
			return
		}

		if (username == 'example@test' && password == '123') {
			setJWT('showdebola')
			resetForm()
			navigate('/')
		} else {
			alert('Credentials incorrect')
		}
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

	useEffect(() => {

	}, [])

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
						<Input ref={usernameRef} title='Username' type='email' name='first-name' handler={setUsername}></Input>
						<Input ref={passwordRef} title='Password' type='password' name='last-name' handler={setPassword}></Input>

						<input type='submit' className='btn btn-primary' value='Login'></input>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Login;
