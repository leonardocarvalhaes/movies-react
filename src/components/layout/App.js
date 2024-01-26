import { Link, Outlet } from 'react-router-dom';
import SideMenu from './SideMenu';
import { useCallback, useContext, useEffect, useState } from 'react';
import globalStateContext from '../../contexts/globalStateContext';
import call from '../../helpers/httpHelper';

const App = (props) => {
	const { jwt, setJWT } = useContext(globalStateContext)

	const [refreshInterval, setRefreshInterval] = useState(null)

	const logout = () => {
		call({url: '/logout'})
			.catch(error => {
				console.log(error)
			})
			.finally(() => {
				toggleRefresh(false)
				setJWT(null)
			})
	}

	const toggleRefresh = useCallback((active) => {
		if (active) {
			let interval = setInterval(() => {
				call({url: '/refresh'})
					.then(data => {
						if (data.access_token) {
							setJWT(data.access_token)
						}
					})
					.catch(error => {
						console.log(error)
					})

				setRefreshInterval(interval)
			}, 60000);
		} else {
			setRefreshInterval(null)
			clearInterval(refreshInterval)
		}
	}, [refreshInterval])

	useEffect(() => {
		if (!jwt) {
			call({url: '/refresh'})
				.then(data => {
					if (data.access_token) {
						setJWT(data.access_token)
						toggleRefresh(true)
					}
				})
				.catch(error => {
					toggleRefresh(false)
					console.log(error)
				})
		}
	}, [jwt, toggleRefresh])

	return (
		<div className='container'>
			<div className='row mb-5'>
				<div className='col'>
					<h1 className='mt-3'>Movies App</h1>
				</div>

				<div className='col d-flex align-items-center justify-content-end'>
					{
						jwt ? <Link to='/login' onClick={logout} className='btn'>Logout</Link>
							: <Link to='/login' className='btn'>Login</Link>
					}
				</div>
			</div>

			<div className='row'>
				<div className='col-md-2 pt-2'>
					<SideMenu />
				</div>

				<div className='col-md-10'>
					<Outlet context={{toggleRefresh}} />
				</div>
			</div>
		</div>
	);
}

export default App;
