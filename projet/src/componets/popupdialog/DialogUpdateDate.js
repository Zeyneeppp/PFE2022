import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	TextField,
} from "@mui/material";

function DialogUpdateDate(props) {
	const {
		openPopup,
		setOpenPopup,
		formdata,
		onChange,
		handleFormSubmit,
		handleClose,
	} = props;
	const { id, Date_Act, Date_exp } = formdata;
	return (
		<Dialog open={openPopup} onClose={handleClose}>
			<DialogTitle>{"Update Date"} </DialogTitle>
			<DialogContent>
				<form>
					<TextField
						id="Date_Act"
						placeholder="Enter Date"
						label="Date_Act"
						fullWidth
						variant="outlined"
						margin="dense"
						value={Date_Act}
						onChange={(e) => onChange(e)}
					/>
					<TextField
						id="Date_exp"
						placeholder="Enter Date"
						label="Date_exp"
						fullWidth
						variant="outlined"
						margin="dense"
						value={Date_exp}
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
					{"Update"}
				</Button>
			</DialogActions>
		</Dialog>
	);
}

export default DialogUpdateDate;
