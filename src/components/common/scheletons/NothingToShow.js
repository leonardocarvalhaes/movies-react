const NothingToShow = (props) => {
	return (
		<div className='container'>
			<div className='row'>
				<div className='col d-flex align-items-center justify-content-center vh-100'>
					<h1>{props.message ? props.message : 'Nothing to see here'}</h1>
				</div>
			</div>
		</div>
	)
}

export default NothingToShow