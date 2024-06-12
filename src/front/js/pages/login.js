import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Login = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
    const handleClick = async () => {
		const response = await fetch('https://cautious-spork-4jqg59qr6xxph9j5-3001.app.github.dev/api/token',{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email: email, 
				password: password
			}),
		});
		const data = await response.json();
		console.log(data);
	 }

	return (
		<div className="text-center mt-5">
			<h1>Login</h1>
			<div>
				<input 
					type="text" 
					placeholder="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</div>
			<div>
			<input 
				type="password" 
				placeholder="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)} 
			/>
			</div>
			<div>
				<button onClick={handleClick}>Login</button>
			</div>
			
		</div>
	);
};
