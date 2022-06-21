import {
	Avatar,
	Button,
	Checkbox,
	FormControlLabel,
	Grid,
	InputAdornment,
	Paper,
	TextField,
	Typography,
} from "@mui/material";

import LockIcon from "@mui/icons-material/Lock";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import PersonIcon from "@mui/icons-material/Person";
import { useEffect, useRef, useState } from "react";

import useAuth from "../../hooks/useAuth";
import "./signin.scss";

import { Link, useNavigate, useLocation } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import axios from "../../Api/axios";

//path to login in the server
const LogIn_path = "api/auth";

function SignIn() {
	const { setAuth } = useAuth();

	const navigate = useNavigate();
	const location = useLocation();
	//when the user want to go before send to the login page
	const from = location.state?.from?.pathname || "/home";
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
				LogIn_path,
				JSON.stringify({ username: userName, password: pwd }),
				{
					headers: { "Content-Type": "application/json" },
					withCredentials: true,
				}
			);

			console.log(JSON.stringify(response?.data));
			console.log(JSON.stringify(response));
			const accessToken = response?.data?.accessToken;
			const roles = response?.data?.roles;
			console.log(roles);
			setAuth({ userName, pwd, roles, accessToken });
			setUserName("");
			setPwd("");
			console.log(response.data);
			navigate("home");
			// navigate(from, { replace: true });
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
		height: "50vh",
		width: 290,
		margin: "20px auto",
		marginTop: "73px",
	};
	const buttonstyle = { backgroundColor: "#213164" };
	const avatarStyle = { backgroundColor: "#213164" };
	return (
		<div className="main-login">
			<div className="login-container">
				<div className="left-side"></div>
				<div className="right-side">
					<Grid>
						<Paper elevation={10} style={paperStyle}>
							<Grid align="center" sx={{ mb: "50px" }}>
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
							<form onSubmit={handleSubmit}>
								<TextField
									id="user"
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
									sx={{ ml: "25px" }}
									value={userName}
									onChange={(e) => {
										setUserName(e.target.value);
									}}
									type="text"
								/>
								<TextField
									id="password"
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
									sx={{ ml: "25px" }}
									value={pwd}
									onChange={(e) => {
										setPwd(e.target.value);
									}}
									type="password"
								/>
								<FormControlLabel
									control={
										<Checkbox name="checkedB" color="primary" size="400px" />
									}
									label="Remember me"
									sx={{ display: "flex", ml: "18px", mt: "3px" }}
								/>
								<p
									ref={errRef}
									className={err ? "errmsg" : "offscreen"}
									aria-live="assertive"
								>
									{err}
								</p>
								<Button
									variant="contained"
									style={buttonstyle}
									size="normal"
									type="submit"
									sx={{
										width: "%80",
										border: "none",
										cursor: "pointer",
										transition: "all 0.3 ease",
										mt: "3.5rem",
										display: "flex",
										ml: "6.5rem",
										position: "absolute",
									}}
								>
									<div className="buttontexte">Log in</div>
								</Button>
							</form>
						</Paper>
					</Grid>
				</div>
			</div>
		</div>
	);
}

export default SignIn;
