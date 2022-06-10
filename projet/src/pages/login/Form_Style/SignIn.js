import {
	autocompleteClasses,
	Avatar,
	Button,
	Checkbox,
	FormControlLabel,
	Grid,
	InputAdornment,
	Paper,
	TextField,
} from "@mui/material";

import React from "react";
import "./signin.scss";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { border, height, padding } from "@mui/system";
import { CheckBox } from "@mui/icons-material";
import { useEffect, useRef, useState, useContext } from "react";
import axios from "../../../Api/axios";

import AuthContext from "../ContextApi/AuthProvider";

//path to login in the server
const Log_path = "./auth";

function SignIn() {
	const { setAuth } = useContext(AuthContext);
	const userRef = useRef();
	const errRef = useRef();

	const [userName, setUserName] = useState("");
	const [pwd, setPwd] = useState("");
	const [err, setErr] = useState("");

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
			const roles = response?.data?.roles;
			setUserName("");
			setPwd("");
		} catch (err) {
			if (!err?.response) {
				setErr("No Server Response");
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

	/*********************************STYLING*************************************** */
	const paperStyle = {
		padding: 30,
		height: "45vh",
		width: 280,
		margin: "20px auto",
		marginTop: "73px",
	};
	const buttonstyle = { backgroundColor: "#0000FF" };
	const avatarStyle = { backgroundColor: "#0000FF" };
	return (
		<div className="main-login">
			<div className="login-container">
				<div className="left-side"></div>
				<div className="right-side">
					<Grid>
						<Paper elevation={10} style={paperStyle}>
							<Grid align="center" sx={{ mb: "29px" }}>
								<Avatar
									style={avatarStyle}
									sx={{
										mb: "9px",
									}}
								>
									<LockOutlinedIcon />
								</Avatar>
								<h2>Sign In</h2>
							</Grid>
							<TextField
								id="input-with-icon-textfield"
								InputProps={{
									startAdornment: (
										<InputAdornment position="start">
											<PersonIcon />
										</InputAdornment>
									),
									placeholder: "Your Name",
								}}
								required
								variant="standard"
								margin="normal"
							/>
							<TextField
								id="input-with-icon-textfield"
								InputProps={{
									startAdornment: (
										<InputAdornment position="start">
											<LockIcon />
										</InputAdornment>
									),
									placeholder: "Password",
								}}
								variant="standard"
								margin="normal"
							/>
							<FormControlLabel
								control={
									<Checkbox name="checkedB" color="primary" size="400px" />
								}
								label="Remember me"
								sx={{ display: "flex", ml: "-5px", mt: "3px" }}
							/>
							<Button
								variant="contained"
								style={buttonstyle}
								size="normal"
								sx={{
									width: "%80",
									border: "none",
									cursor: "pointer",

									transition: "all 0.3 ease",
									mt: "1.9rem",
									display: "flex",
									ml: "6rem",
								}}
							>
								<div className="buttontexte">Log in</div>
							</Button>
						</Paper>
					</Grid>
				</div>
			</div>
		</div>
	);
}

export default SignIn;
