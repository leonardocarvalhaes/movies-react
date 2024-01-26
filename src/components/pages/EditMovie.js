import { useParams } from "react-router-dom";
import MovieForm from "./MovieForm";

const EditMovie = (props) => {
	const { id } = useParams()

	return (
		<div className='container'>
			<div className='row'>
				<div className='col'>
					<h1>Edit Movie</h1>
					<hr />
				</div>
			</div>

			<div className='row'>
				<div className='col'>
					<MovieForm id={id} />
				</div>
			</div>
		</div>
	);
}

export default EditMovie;
