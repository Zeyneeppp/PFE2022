import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	TextField,
} from "@mui/material";

function DialogUsers(props) {
	const {
		openPopup,
		setOpenPopup,
		children,
		title,
		formdata,
		onChange,
		handleFormSubmit,
		handleClose,
	} = props;
	const { id, username, email, branche } = formdata;
	return (
		<Dialog open={openPopup} onClose={handleClose}>
			<DialogTitle>{id ? "Update user" : "Create user"} </DialogTitle>
			<DialogContent>
				<form>
					<TextField
						id="username"
						placeholder="Enter name"
						label="Username"
						fullWidth
						variant="outlined"
						margin="dense"
						value={username}
						onChange={(e) => onChange(e)}
					/>
					<TextField
						id="email"
						placeholder="Enter email"
						label="Email"
						fullWidth
						variant="outlined"
						margin="dense"
						value={email}
						onChange={(e) => onChange(e)}
					/>
					<TextField
						id="branche"
						placeholder="Enter branche"
						label="Branche"
						fullWidth
						variant="outlined"
						margin="dense"
						value={branche}
						onChange={(e) => onChange(e)}
					/>
				</form>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose} color="secondary" variant="outlined">
					Cancel
				</Button>
				<Button
					color="primary"
					variant="contained"
					onClick={() => handleFormSubmit()}
					autoFocus
				>
					{id ? "Update" : "Submit"}
				</Button>
			</DialogActions>
		</Dialog>
	);
}

export default DialogUsers;
