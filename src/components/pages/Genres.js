import { useEffect, useState } from "react";
import TableList from "../common/lists/TableList";

const Genres = (props) => {
	const [genres, setGenres] = useState([])

	useEffect(() => {
		setGenres([
			{
				id: 1,
				title: 'Fiction',
			},
			{
				id: 2,
				title: 'Comedy',
			},
			{
				id: 3,
				title: 'Romance',
			},
			{
				id: 4,
				title: 'Science',
			},
		])
	}, [])

	return (
		<div className='container'>
			<div className='row'>
				<div className='col'>
					<h1>Genres</h1>
					<hr />
				</div>
			</div>

			<div className='row'>
				<div className='col text-center'>
					<TableList id="genres" items={genres} />
				</div>
			</div>
		</div>
	);
}

export default Genres;
