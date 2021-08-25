import React, { useEffect, useReducer } from 'react';

const reducer = (state, action) => {
	switch (action.type) {
		case 'USERS_REQUEST':
			return { ...state, loading: true };
		case 'USERS_SUCCESS':
			return { ...state, loading: false, users: action.payload, error: '' };
		case 'USERS_FAIL':
			return { ...state, loading: false, users: [], error: action.payload };

		default:
			return state;
	}
};

export default function UserList() {
	const [state, dispatch] = useReducer(reducer, { loading: false, users: [], error: '' });
	const { users, loading, error } = state;
	const loadUsers = async users => {
		dispatch({ type: 'USERS_REQUEST' });
		try {
			const res = await fetch('https://jsonplaceholder.typicode.com/users');
			const data = await res.json();
			dispatch({ type: 'USERS_SUCCESS', payload: data });
		} catch (err) {
			dispatch({ type: 'USERS_FAIL', payload: err.message });
		}
	};

	useEffect(() => {
		loadUsers();
	}, []);
	// useEffect(() => {}, [clickHandler]);
	return (
		<div className='main'>
			<div>
				<h1>Users</h1>
				<button onClick={loadUsers}>Reload</button>
				{loading ? (
					<div>Loading users...</div>
				) : error ? (
					<div>Error: {error}</div>
				) : (
					<table>
						<thead>
							<tr>
								<th>Username</th>
								<th>Email</th>
								<th>Phone</th>
								<th>Website</th>
							</tr>
						</thead>
						<tbody>
							{users.map(user => (
								<tr key={user.username}>
									<td>{user.username}</td>
									<td>{user.email}</td>
									<td>{user.phone}</td>
									<td>{user.website}</td>
								</tr>
							))}
						</tbody>
					</table>
				)}
			</div>
		</div>
	);
}
