import { Link, Outlet } from 'react-router-dom';
import SideMenu from './SideMenu';
import { useContext } from 'react';
import globalStateContext from '../../contexts/globalStateContext';

const App = (props) => {
	const { jwt, setJWT } = useContext(globalStateContext)

	const logout = () => {
		setJWT(null)
	}

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
				<div className='col-md-2'>
					<SideMenu />
				</div>

				<div className='col-md-10'>
					<Outlet />
				</div>
			</div>
		</div>
	);
}

export default App;
