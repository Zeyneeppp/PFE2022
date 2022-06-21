import { useTheme } from "@emotion/react";
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
import { useEffect } from "react";
import { useState } from "react";

function DialogData(props) {
	const theme = useTheme();
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
		handlewilaya,
	} = props;
	const {
		CODE_SITE,
		DESIGNATION_STRUCTURE,
		CODE_BR,
		TYPE,
		NOM_WILAYA,
		NUM_LIGNE,
		Date_Act,
		Date_exp,
		NS_MODEM,
		NS_SIM,
		ADR_IP,
		IMEI_MODEM,
		LONGITUDE,
		LATITUDE,
	} = formdata;

	// const names = ["Adsl", "Mobilis", "Ooredoo", "Vpn", "4gLTE"];

	const WILAYA = [
		"Adrar",
		"Chlef",
		"Laghouat",
		"Oum El Bouaghi",
		"Batna",
		"Béjaïa",
		"Biskra",
		"Béchar",
		"Blida",
		"Bouira",
		"Tamanrasset",
		"Tébessa",
		"Tlemcen",
		"Tiaret",
		"Tizi Ouzou",
		"Alger",
		"Djelfa",
		"Jijel",
		"Sétif",
		"Saïda",
		"Skikda",
		"Sidi Bel Abbès",
		"Annaba",
		"Guelma",
		"Constantine",
		"Médéa",
		"Mostaganem",
		"MSila",
		"Mascara",
		"Ouargla",
		"Oran",
		"El Bayadh",
		"Illizi",
		"Bordj Bou Arreridj",
		"Boumerdès",
		"El Tarf",
		"Tindouf",
		"Tissemsilt",
		"El Oued",
		"Khenchela",
		"Souk Ahras",
		"Tipaza",
		"Mila",
		"Aïn Defla",
		"Naâma",
		"Aïn Témouchent",
		"Ghardaïa",
		"Relizane",
		"Timimoun",
		"Bordj Badji Mokhtar",
		"Ouled Djellal",
		"Béni Abbès",
		"In Salah",
		"In Guezzam",
		"Touggourt",
		"Djanet",
		"ElMGhair",
		"ElMeniaa",
	];

	// const [wil, setWil] = useState("");
	// const handlewilaya = (event) => {
	// 	event.target.id = "NOM_WILAYA";
	// 	console.log(event.target.id);
	// 	setWil(event.target.value);
	// 	onChange(event);
	// };
	// useEffect(() => {
	// 	const getwilaya = async () => {
	// 		const req = await fetch("http://localhost/api/wilaya");
	// 		const wilaya = await req.json();
	// 		console.log(wilaya);
	// 		setWil(await wilaya);
	// 	};
	// 	getwilaya();
	// }, []);

	return (
		<Dialog open={openPopup} onClose={handleClose}>
			{/* {Branche ? "Update Data" : "Create Data"} */}
			<DialogTitle>{CODE_SITE ? "Update Data" : "Create Data"} </DialogTitle>
			<DialogContent>
				<form>
					<TextField
						id="DESIGNATION_STRUCTURE"
						placeholder="..."
						label="DESIGNATION_STRUCTURE"
						fullWidth
						variant="outlined"
						margin="dense"
						value={DESIGNATION_STRUCTURE}
						onChange={(e) => onChange(e)}
					/>
					<TextField
						id="CODE_BR"
						placeholder="...."
						label="CODE_BR"
						fullWidth
						variant="outlined"
						margin="dense"
						value={CODE_BR}
						onChange={(e) => onChange(e)}
					/>
					<TextField
						id="NOM_WILAYA"
						placeholder="...."
						label="NOM_WILAYA"
						fullWidth
						variant="outlined"
						margin="dense"
						value={NOM_WILAYA}
						onChange={(e) => onChange(e)}
					/>
					{/* <TextField
						id="NOM_WILAYA"
						select
						placeholder="...."
						label="NOM_WILAYA"
						fullWidth
						variant="outlined"
						margin="dense"
						value={NOM_WILAYA}
						onChange={(e) => {
							e.target.id = "NOM_WILAYA";
							onChange(e);
						}}
					>
						{WILAYA.map((wilaya) => (
							<MenuItem key={wilaya} value={wilaya}>
								{wilaya}
							</MenuItem>
						))}
					</TextField> */}

					{/* <FormControl fullWidth>
						<InputLabel id="WILAYA">WILAYA</InputLabel>
						<Select
							labelId="WILAYA"
							id="NOM_WILAYA"
							label="NOM_WILAYA"
							value={NOM_WILAYA}
							onChange={(e) => {
								e.target.id = "NOM_WILAYA";
								onChange(e);
							}}

							// error={errors.departmentId}
						>
							{WILAYA.map((name) => (
								<MenuItem key={name} value={name}>
									{name}
								</MenuItem>
							))}
						</Select>
					</FormControl> */}
					<TextField
						id="TYPE"
						placeholder="...."
						label="TYPE"
						fullWidth
						variant="outlined"
						margin="dense"
						value={TYPE}
						onChange={(e) => onChange(e)}
					/>
					<TextField
						id="NUM_LIGNE"
						placeholder="...."
						label="NUM_LIGNE"
						fullWidth
						variant="outlined"
						margin="dense"
						value={NUM_LIGNE}
						onChange={(e) => onChange(e)}
					/>
					<TextField
						id="LATITUDE"
						placeholder="...."
						label="LATITUDE"
						fullWidth
						variant="outlined"
						margin="dense"
						value={LATITUDE}
						onChange={(e) => onChange(e)}
					/>
					<TextField
						id="LONGITUDE"
						placeholder="...."
						label="LONGITUDE"
						fullWidth
						variant="outlined"
						margin="dense"
						value={LONGITUDE}
						onChange={(e) => onChange(e)}
					/>
					<TextField
						id="Date_Act"
						placeholder="...."
						label="Date_act"
						fullWidth
						variant="outlined"
						margin="dense"
						value={Date_Act}
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
						id="NS_MODEM"
						placeholder="...."
						label="NS_MODEM"
						fullWidth
						variant="outlined"
						margin="dense"
						value={NS_MODEM}
						onChange={(e) => onChange(e)}
					/>
					<TextField
						id="NS_SIM"
						placeholder="...."
						label="NSSIM"
						fullWidth
						variant="outlined"
						margin="dense"
						value={NS_SIM}
						onChange={(e) => onChange(e)}
					/>

					<TextField
						id="IMEI_MODEM"
						placeholder="...."
						label="IMEI_MODEM"
						fullWidth
						variant="outlined"
						margin="dense"
						value={IMEI_MODEM}
						onChange={(e) => onChange(e)}
					/>
					<TextField
						id="ADR_IP"
						placeholder="...."
						label="Adr_ip"
						fullWidth
						variant="outlined"
						margin="dense"
						value={ADR_IP}
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
					{CODE_SITE ? "Update" : "Submit"}
				</Button>
			</DialogActions>
		</Dialog>
	);
}

export default DialogData;
