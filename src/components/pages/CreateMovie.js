import MovieForm from "./MovieForm";

const CreateMovie = (props) => {
	return (
		<div className='container'>
			<div className='row'>
				<div className='col'>
					<h1>New Movie</h1>
					<hr />
				</div>
			</div>

			<div className='row'>
				<div className='col text-center'>
					<MovieForm />
				</div>
			</div>
		</div>
	);
}

export default CreateMovie;
