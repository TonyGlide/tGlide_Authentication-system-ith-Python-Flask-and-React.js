import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Login = () => {
	const { store, actions } = useContext(Context);

	// 1 create 2 useStates, one for email the other for password
	// 3 create a funtion called handleClick that will include the fetch with opstions that includes
	// the email and password

	// 2 make the inputs controlled <inputs>
	// also, make the button execute the handleClick

	return (
		<div className="text-center mt-5">
			<h1>Login</h1>
			<div>
				<input type="text" palceholder="email" />
			</div>
			<div>
				<input type="password" palceholder="password" />
			</div>
			<div>
				<button>Login</button>

			</div>

		</div>
	);
};
