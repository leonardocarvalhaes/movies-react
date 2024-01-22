import { createBrowserRouter } from "react-router-dom"
import App from "../components/layout/App"
import Error from "../components/pages/Error"
import Movies from "../components/pages/Movies"
import Home from "../components/pages/Home"
import Genres from "../components/pages/Genres"
import GraphQL from "../components/pages/GraphQL"
import Catalogue from "../components/pages/Catalogue"
import Movie from "../components/pages/Movie"
import Login from "../components/pages/Login"

const setupRouter = () => {
	return createBrowserRouter([
		{
			path: '/',
			element: <App />,
			errorElement: <Error />,
			children: getRoutesList()
		}
	])
}

const getRoutesList = () => {
	return [
		{
			index: true,
			path: '/',
			element: <Home />,
			label: 'Home',
		},
		{
			path: '/movies',
			element: <Movies />,
			label: 'Movies',
		},
		{
			path: '/movies/:id',
			element: <Movie />,
		},
		{
			path: '/genres',
			element: <Genres />,
			label: 'Genres',
		},
		{
			path: '/admin/movies/add/0',
			element: <Movies />,
			admin: true,
		},
		{
			path: '/admin/catalogue',
			element: <Catalogue />,
			label: 'Catalogue',
			admin: true,
		},
		{
			path: '/login',
			element: <Login />,
		},
		{
			path: '/graphql',
			element: <GraphQL />,
			label: 'GraphQL',
		},
	]
}

export { getRoutesList, setupRouter as default }