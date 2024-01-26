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
import CreateMovie from "../components/pages/CreateMovie"
import EditMovie from "../components/pages/EditMovie"

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
			path: '/admin/movies/create',
			element: <CreateMovie />,
			admin: true,
		},
		{
			path: '/admin/movies/:id/edit',
			element: <EditMovie />,
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