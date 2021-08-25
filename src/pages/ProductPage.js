import React from 'react';
import { Link, Redirect, useHistory, useParams } from 'react-router-dom';

export default function ProductPage() {
	const { id } = useParams();
	const history = useHistory();
	const goToAboutPage = () => {
		history.push('/about');
	};
	if (id === '3') {
		return <Redirect to='/' />;
	}
	return (
		<div className='page'>
			<h1>Product Page</h1>
			{id ? (
				<div>
					Product ID: {id}
					<button onClick={goToAboutPage}>See about page</button>
				</div>
			) : (
				<ul>
					<li>
						<Link to='/product/1'>Product 1</Link>
					</li>
					<li>
						<Link to='/product/2'>Product 2</Link>
					</li>
					<li>
						<Link to='/product/3'>Product 3</Link>
					</li>
				</ul>
			)}
		</div>
	);
}
