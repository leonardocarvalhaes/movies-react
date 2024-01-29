import { Link } from "react-router-dom";
import MovieForm from "./MovieForm";

const CreateMovie = (props) => {
	return (
		<div className='container'>
			<div className='row mb-3'>
				<div className='col'>
					<h1>
						<Link to='/admin/catalogue' className='btn btn-link text-secondary'><i className="bi bi-arrow-left"></i></Link>
						New Movie
					</h1>
				</div>
			</div>

			<div className='row'>
				<div className='col'>
					<MovieForm />
				</div>
			</div>
		</div>
	);
}

export default CreateMovie;
