import React, { useEffect, useState } from 'react';

export default function NewUserInfo() {
	const [user, setUser] = useState({});
	const [userId, setUserId] = useState(1);
	const userChange = e => {
		setUserId(e.target.value);
	};
	useEffect(() => {
		console.log('useEffect runs');
		fetch('https://jsonplaceholder.typicode.com/users/' + userId)
			.then(res => res.json())
			.then(json => {
				setUser(json);
			});
	}, [userId]);
	return (
		<div>
			<h1>User Info</h1> <br />
			<input type='text' value={userId} onChange={userChange} />
			Name: {user.name} <br />
			Email: {user.email}
		</div>
	);
}
