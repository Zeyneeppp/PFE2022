import { useEffect } from "react";
import { useState } from "react";
import Sidebar from "../../componets/sidebar/Sidebar";
import "./Notifications.scss";
import axios from "axios";
import "../../componets/table/Table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CircleIcon from "@mui/icons-material/Circle";
import { Edit } from "@mui/icons-material";
import { Button } from "@mui/material";
import DialogUpdateDate from "../../componets/popupdialog/DialogUpdateDate";

const Notifications = () => {
	const initialValue = {
		id: "",
		Date_Act: "",
		Date_exp: "",
	};
	const [dataDB, setDataDB] = useState([]);
	const [openPopup, setOpenPopup] = useState(false);
	const [formdata, setFormdata] = useState(initialValue);
	const getDataBD = async () => {
		await axios
			.get(`http://localhost:8080/api/try`)
			.then((res) => {
				setDataDB(res.data);
				console.log(res.data);
				console.log("axios data", res);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	useEffect(() => {
		getDataBD();
	}, []);

	const filteredData = dataDB.filter((d) => {
		// console.log("display d.date", d.Date_exp);
		if (d.Date_exp !== null) {
			// console.log("u here");
			const d1 = new Date();
			const d2 = new Date(d.Date_exp);
			// console.log("d2", d2);
			return d1 >= d2;
		} else {
			return false;
		}
	});
	// console.log("filteredData", filteredData.length);
	// console.log("filteredData", filteredData);
	// const getDataBD = async () => {
	// 	try {
	// 		const res = await fetch("http://localhost:8080/api/liaison");
	// 		const getData = await res.json();

	// 		// Object.assign({}, getData);
	// 		setDataBD(getData);
	// 		console.log("my data : ", dataBD);
	// 	} catch (e) {
	// 		console.log(e);
	// 	}
	// };
	// console.log("notif page");

	// useEffect(() => {
	// 	const getDataDB = async () => {
	// 		try {
	// 			const res = await fetch("http://localhost:8080/api/liaison");
	// 			const getData = await res.json();
	// 			// Object.assign({}, getData);
	// 			setDataDB(res.getData);
	// 			console.log("getDATA", getData);
	// 			console.log("mydataDB STATE", dataDB);
	// 		} catch (error) {
	// 			console.log(error);
	// 		}

	// 		// console.log("what us going ooon");
	// 		// console.log(e);
	// 	};

	// 	getDataDB();
	// }, []);
	// const rowData = dataBD.map((getdata) => getdata.CODE_SITE);
	console.log("notif page");
	// const notif = "";
	// if (filteredData.length > 0) notif = <CircleIcon />;
	const handleFormSubmit = () => {
		console.log("SHOW ME FORMDATA DATE", formdata.id);
		fetch(`http://localhost:8080/api/liaison/${formdata.id}`, {
			method: "PUT",
			body: JSON.stringify(formdata),
			headers: {
				"content-type": "application/json",
			},
		})
			.then((resp) => resp.json())
			.then((resp) => {
				handleClose();
				getDataBD();
			});
	};

	const onChange = (e) => {
		const { value, id } = e.target;
		setFormdata({ ...formdata, [id]: value });
		console.log("id =", id, "v=", value);
	};
	const handleDialog = () => {
		setOpenPopup(true);
	};
	const handleUpdate = (data) => {
		let dataUp = {
			id: data.CODE_SITE,
			Date_Act: data.Date_Act,
			Date_exp: data.Date_exp,
		};
		console.log(dataUp);
		setFormdata(dataUp);
		handleDialog();
	};
	const handleClose = () => {
		setOpenPopup(false);
		setFormdata(initialValue);
	};
	const status = "Expiré";
	return (
		<div className="pagetotale">
			<Sidebar />
			<div className="listContainer">
				<div className="listTitle">
					<h1>Notifications table</h1>
				</div>
				<TableContainer component={Paper} className="table">
					<Table sx={{ minWidth: 100 }} aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell className="tableCell">Code Site</TableCell>
								{/* <TableCell className="tableCell">Site</TableCell> */}
								<TableCell className="tableCell">Liaison</TableCell>
								<TableCell className="tableCell">Site</TableCell>
								<TableCell className="tableCell">Ligne</TableCell>
								{/* <span className={`status ${row.status}`}>{row.status}</span> */}
								<TableCell className="tableCell">Status</TableCell>
								<TableCell className="tableCell">Action</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{filteredData.map((row, index) => (
								<TableRow key={index}>
									<TableCell className="tableCell">{row.CODE_SITE}</TableCell>
									<TableCell className="tableCell"> {row.TYPE}</TableCell>
									<TableCell className="tableCell">
										{" "}
										{row.SITE.DESIGNATION_STRUCTURE}
									</TableCell>
									<TableCell className="tableCell"> {row.NUM_LIGNE}</TableCell>

									<TableCell className="tableCell">
										<span className={`status ${status}`}>{status}</span>
										{/* <div>Expiré</div> */}
									</TableCell>
									<TableCell className="tableCell">
										{" "}
										<Button
											startIcon={<Edit />}
											onClick={() => handleUpdate(row)}
										></Button>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
				<DialogUpdateDate
					openPopup={openPopup}
					setOpenPopup={setOpenPopup}
					formdata={formdata}
					onChange={onChange}
					handleClose={handleClose}
					handleFormSubmit={handleFormSubmit}
				/>
			</div>
		</div>
	);
};

export default Notifications;
