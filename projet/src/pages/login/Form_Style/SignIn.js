import {
	autocompleteClasses,
	Button,
	InputAdornment,
	TextField,
} from "@mui/material";
import React from "react";
import "./signin.scss";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import { border, height, padding } from "@mui/system";
function SignIn() {
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
						<Button
							variant="contained"
							size="normal"
							sx={{
								width: "%80",
								border: "none",
								cursor: "pointer",

								transition: "all 0.3 ease",
								mt: "1.2rem",
							}}
						>
							<div className="buttontexte">Log in</div>
						</Button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default SignIn;
