import { Link, useParams } from "react-router-dom";
import MovieForm from "./MovieForm";

const EditMovie = (props) => {
	const { id } = useParams()

	return (
		<div className='container'>
			<div className='row mb-3'>
				<div className='col'>
					<h1>
						<Link to='/admin/catalogue' className='btn btn-link text-secondary'><i className="bi bi-arrow-left"></i></Link>
						Edit Movie
					</h1>
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
