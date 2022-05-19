import { Button, InputAdornment, TextField } from "@mui/material";
import React from "react";
import "./signin.scss";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import { border, height } from "@mui/system";
function SignIn() {
	const lockicon = { color: "black" };
	return (
		<div className="main-login">
			<div className="login-container">
				<div className="left-side"></div>
				<div className="right-side">
					<form>
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
							sx={{
								display: "block",
								border: "none",
								height: "2rem",
							}}
							fullWidth
							required
							variant="standard"
							margin="dense"
						/>
						<TextField
							id="input-with-icon-textfield"
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<LockIcon style={lockicon} />
									</InputAdornment>
								),
								placeholder: "Password",
							}}
							variant="standard"
							margin="dense"
						/>
						<Button variant="contained" size="medium">
							Log in
						</Button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default SignIn;
