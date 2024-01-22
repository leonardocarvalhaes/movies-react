import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import setupRouter from './helpers/routerHelper';
import GlobalStateProvider from './components/higherOrder/GlobalStateProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<GlobalStateProvider>
			<div className='container'>
				<div className='row'>
					<div className='col'>
						<RouterProvider router={setupRouter()} />
					</div>
				</div>
			</div>
		</GlobalStateProvider>
	</React.StrictMode>
);
