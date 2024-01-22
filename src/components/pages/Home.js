import { Link } from "react-router-dom";

const Home = (props) => {
	return (
		<div className='container'>
			<div className='row'>
				<div className='col'>
					<h1>Home</h1>
					<hr />
				</div>
			</div>

			<div className='row'>
				<div className='col text-center'>
					<Link to='/movies'>
						<img src="https://st2.depositphotos.com/1810600/7247/v/450/depositphotos_72472313-stock-illustration-tickets-doodle-drawing.jpg" />
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Home;
