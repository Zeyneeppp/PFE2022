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
	const { id, Username, Email, FirstName, LastName, Branch } = formdata;
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
						value={Username}
						onChange={(e) => onChange(e)}
					/>
					<TextField
						id="email"
						placeholder="Enter email"
						label="Email"
						fullWidth
						variant="outlined"
						margin="dense"
						value={Email}
						onChange={(e) => onChange(e)}
					/>
					<TextField
						id="FirstName"
						placeholder="Enter branche"
						label="FirstName"
						fullWidth
						variant="outlined"
						margin="dense"
						value={FirstName}
						onChange={(e) => onChange(e)}
					/>
					<TextField
						id="LastName"
						placeholder="Enter branche"
						label="LastName"
						fullWidth
						variant="outlined"
						margin="dense"
						value={LastName}
						onChange={(e) => onChange(e)}
					/>
					<TextField
						id="Branch"
						placeholder="Enter branche"
						label="Branch"
						fullWidth
						variant="outlined"
						margin="dense"
						value={Branch}
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
