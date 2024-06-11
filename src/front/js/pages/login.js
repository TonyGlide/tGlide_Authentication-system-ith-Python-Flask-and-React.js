import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Login = () => {
	const { store, actions } = useContext(Context);

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
