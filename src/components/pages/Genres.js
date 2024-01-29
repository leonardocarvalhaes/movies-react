import { useEffect, useState } from "react";
import TableList from "../common/lists/TableList";
import call from "../../helpers/httpHelper";

const Genres = (props) => {
	const [genres, setGenres] = useState([])

	useEffect(() => {
		call({ url: '/genres' })
			.then(data => setGenres(data))
			.catch(error => console.log(error))
	}, [])

	return (
		<div className='container'>
			<div className='row mb-3'>
				<div className='col'>
					<h1>Genres</h1>
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
