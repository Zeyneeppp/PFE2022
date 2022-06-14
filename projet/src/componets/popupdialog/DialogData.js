import {
	Box,
	Button,
	Chip,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	FormControl,
	FormControlLabel,
	FormLabel,
	InputLabel,
	MenuItem,
	OutlinedInput,
	Radio,
	RadioGroup,
	Select,
	TextField,
} from "@mui/material";

function DialogData(props) {
	const ITEM_HEIGHT = 48;
	const ITEM_PADDING_TOP = 8;
	const MenuProps = {
		PaperProps: {
			style: {
				maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
				width: 250,
			},
		},
	};
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
	const {
		DESIGNATION_STRUCTURE,
		Branche,
		Type_Liaison,
		Num_ligne,
		Date_act,
		Date_exp,
		NS_sim,
		Adr_ip,
	} = formdata;

	const names = ["Adsl", "Mobilis", "Ooredoo", "Vpn", "4gLTE"];
	return (
		<Dialog open={openPopup} onClose={handleClose}>
			{/* {id ? "Update Data" : "Create Data"} */}
			<DialogTitle>Create Data </DialogTitle>
			<DialogContent>
				<form>
					<TextField
						id="SiteDesign"
						placeholder="..."
						label="DESIGNATION_STRUCTURE"
						fullWidth
						variant="outlined"
						margin="dense"
						value={DESIGNATION_STRUCTURE}
						onChange={(e) => onChange(e)}
					/>
					<TextField
						id="Br"
						placeholder="...."
						label="Branche"
						fullWidth
						variant="outlined"
						margin="dense"
						value={Branche}
						onChange={(e) => onChange(e)}
					/>
					{/* <FormControl sx={{ m: 1, width: 300 }}>
						<InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
						<Select
							labelId="demo-multiple-chip-label"
							id="demo-multiple-chip"
							multiple
							value={personName}
							onChange={handleChange}
							input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
							renderValue={(selected) => (
								<Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
									{selected.map((value) => (
										<Chip key={value} label={value} />
									))}
								</Box>
							)}
							MenuProps={MenuProps}
						>
							{names.map((name) => (
								<MenuItem
									key={name}
									value={name}
									style={getStyles(name, personName, theme)}
								>
									{name}
								</MenuItem>
							))}
						</Select>
					</FormControl> */}
					<TextField
						id="Liaison"
						placeholder="...."
						label="Type_Liaison"
						fullWidth
						variant="outlined"
						margin="dense"
						value={Type_Liaison}
						onChange={(e) => onChange(e)}
					/>
					<TextField
						id="ligneN"
						placeholder="...."
						label="Num_ligne"
						fullWidth
						variant="outlined"
						margin="dense"
						value={Num_ligne}
						onChange={(e) => onChange(e)}
					/>
					<TextField
						id="Date_act"
						placeholder="...."
						label="Date_act"
						fullWidth
						variant="outlined"
						margin="dense"
						value={Date_act}
						onChange={(e) => onChange(e)}
					/>
					<TextField
						id="Liaison"
						placeholder="...."
						label="Type_Liaison"
						fullWidth
						variant="outlined"
						margin="dense"
						value={Type_Liaison}
						onChange={(e) => onChange(e)}
					/>
					<TextField
						id="Date_exp"
						placeholder="...."
						label="Date_exp"
						fullWidth
						variant="outlined"
						margin="dense"
						value={Date_exp}
						onChange={(e) => onChange(e)}
					/>
					<TextField
						id="NS_sim"
						placeholder="...."
						label="NS_sim"
						fullWidth
						variant="outlined"
						margin="dense"
						value={NS_sim}
						onChange={(e) => onChange(e)}
					/>
					<TextField
						id="Adr_ip"
						placeholder="...."
						label="Adr_ip"
						fullWidth
						variant="outlined"
						margin="dense"
						value={Adr_ip}
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
					{/* {id ? "Update" : "Submit"} */}
					Create
				</Button>
			</DialogActions>
		</Dialog>
	);
}

export default DialogData;
