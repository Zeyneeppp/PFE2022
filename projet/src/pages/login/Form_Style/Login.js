import React, { useEffect, useRef, useState, useContext } from "react";
import axios from "../../../Api/axios";

import AuthContext from "../ContextApi/AuthProvider";

//path to login in the server
const Log_path = "./auth";

export default function Login() {
	//--------------------------------------LOGIN'S DATA---------------------------------------------------------
	const { setAuth } = useContext(AuthContext);
	const userRef = useRef();
	const errRef = useRef();

	const [userName, setUserName] = useState("");
	const [pwd, setPwd] = useState("");
	const [err, setErr] = useState("");

	//!***!Focus on the input border but it doesnt work :)
	useEffect(() => {
		userRef.current.focus();
	}, []);

	//to clear the error when the user start re-write his data
	useEffect(() => {
		setErr("");
	}, [userName, pwd]);

	//-----------------------------------INTERACT WITH THE SERVER AFTER CLICKING THE SUBMIT BUTTON-------------------------------------------//
	const handleSubmit = async (e) => {
		//for preventing page reloiding
		e.preventDefault();
		//send data to the server
		try {
			const response = await axios.post(
				Log_path,
				JSON.stringify({ userName, pwd }),
				{
					headers: { "Content-Type": "application/json" },
					withCredentials: true,
				}
			);
			console.log(JSON.stringify(response?.data));
			const accessToken = response?.data?.accessToken;
			const refreshToken = response?.data?.refreshToken;
			const roles = response?.data?.roles;
			setUserName("");
			setPwd("");
		} catch (err) {
			if (!err?.response) {
				setErr ("No Server Response");
			} else if (err.response?.status === 400) {
				setErr("Missing Username or Password");
			} else if (err.response?.status === 401) {
				setErr("Unauthorized");
			} else {
				setErr("Login Failed");
			}
			errRef.current.focus();
		}
	};
	//--------------------------------------------------------------------------------------------------//
	return (
		<section className="form-container">
			<div className="form-content-left"></div>
			<div className="form-content-right">
				<p
					ref={errRef}
					className={err ? "err" : "offscreen"}
					aria-live="assertive"
				>
					{err}
				</p>
				<form onSubmit={handleSubmit} className="form">
					<h1>Sign In</h1>

					<div className="form-inputs">
						<label className="form-label" htmlFor="username">
							Username
						</label>
						<input
							className="form-input"
							type="text"
							name="user"
							id="username"
							placeholder="Enter your username"
							required
							ref={userRef}
							autoComplete="off"
							value={userName}
							onChange={(e) => {
								setUserName(e.target.value);
							}}
						/>
						<label className="form-label" htmlFor="password">
							Password
						</label>
						<input
							className="form-input"
							type="password"
							name="pwd"
							id="password"
							placeholder="Enter your password"
							required
							ref={userRef}
							autoComplete="off"
							value={pwd}
							onChange={(e) => {
								setPwd(e.target.value);
							}}
						/>
					</div>

					<button className="form-input-btn" type="submit">
						Sign In
					</button>
				</form>
			</div>
		</section>
	);
}
