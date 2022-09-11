import React, { useCallback, useRef, useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { Box, Button, Toolbar, Typography } from "@mui/material";
import PrintIcon from "@mui/icons-material/Print";
import Sidebar from "../../componets/sidebar/Sidebar";
import Navbar from "../../componets/navbar/Navbar";
import AddBoxIcon from "@mui/icons-material/Add";
import DialogData from "../../componets/popupdialog/DialogData";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import { Delete, Edit } from "@mui/icons-material";
function DatabaseTable() {
	const initialValue = {
		CODE_SITE: "",
		DESIGNATION_STRUCTURE: "",
		CODE_BR: "",
		TYPE: "",
		NOM_WILAYA: "",
		NUM_LIGNE: "",
		Date_Act: "",
		Date_exp: "",
		NS_MODEM: "",
		NS_SIM: "",
		ADR_IP: "",
		IMEI_MODEM: "",
		LONGITUDE: "",
		LATITUDE: "",
	};
	const gridRef = useRef();
	const [gridApi, setGridApi] = useState(null);
	const [gridColumnApi, setGridColumnApi] = useState(null);
	const [openPopup, setOpenPopup] = useState(false);

	const [formdata, setFormdata] = useState(initialValue);
	const [dataBD, setDataBD] = useState([]);
	const [query, setQuery] = useState("");

	const getDataBD = async () => {
		try {
			// const res = await fetch(`http://localhost:8080/api/try?q=${query}`);
			const res = await fetch(`http://localhost:8080/api/try`);
			const getData = await res.json();
			// Object.assign({}, getData);
			setDataBD(getData);
			console.log("my dataa", dataBD);
		} catch (e) {
			console.log(e);
		}
	};
	useEffect(() => {
		getDataBD();
	}, [query]);
	//const rowData = dataBD.map((getdata) => getdata.CODE_SITE);

	const ManipulationData = {
		sortable: true,
		filter: true,
		floatingFilter: true,
	};
	function strCompare(str1, str2) {
		return str1 === str2;
	}

	const Export = useCallback(() => {
		gridRef.current.api.exportDataAsCsv();
	}, []);
	//*****************HANDLE DIALOG********** */
	const onChange = (e) => {
		const { value, id } = e.target;

		// setWILAYA(value);
		// setFormdata({ NOM_WILAYA: WILAYA });
		console.log("id : ", id, "value :", value);
		setFormdata({ ...formdata, [id]: value });

		// setFormdata({ NOM_WILAYA: WILAYA });
	};
	const handleDialog = () => {
		setOpenPopup(true);
	};
	const handleClose = () => {
		setOpenPopup(false);
		setFormdata("");
	};
	const handleFormSubmit = () => {
		console.log("WHAT IS THIS", formdata.NOM_WILAYA);
		if (formdata.CODE_SITE) {
			//updating a user
			const confirm = window.confirm(
				"Are you sure, you want to update this row ?"
			);
			confirm &&
				fetch(`http://localhost:8080/api/site/${formdata.CODE_SITE}`, {
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
		} else {
			console.log(formdata);
			fetch("http://localhost:8080/api/site", {
				method: "POST",
				body: JSON.stringify(formdata),
				headers: {
					"content-type": "application/json",
				},
			})
				.then((resp) => resp.json())
				.then((resp) => {
					handleClose();
					getDataBD();
					setFormdata(initialValue);
				});
		}
	};

	const handleDelete = (id) => {
		const confirm = window.confirm("Are you sure, you want to delete ?");
		if (confirm) {
			fetch(`http://localhost:8080/api/site/${id}`, { method: "DELETE" })
				.then((resp) => resp.json())
				.then((resp) => getDataBD());
		}
	};
	const handleUpdate = (data) => {
		console.log("WHERE IS MY WILAYA", data.SITE.WILAYA.NOM_WILAYA);

		let dataUp = {
			CODE_SITE: data.SITE.CODE_SITE,
			DESIGNATION_STRUCTURE: data.SITE.DESIGNATION_STRUCTURE,
			CODE_BR: data.SITE.BRANCHE.CODE_BR,
			TYPE: data.TYPE,
			// NOM_WILAYA: data.SITE.WILAYA.NOM_WILAYA,
			NOM_WILAYA: data.SITE.WILAYA.NOM_WILAYA,
			NUM_LIGNE: data.NUM_LIGNE,
			Date_Act: data.Date_Act,
			Date_exp: data.Date_exp,
			NS_MODEM: data.NS_MODEM,
			NS_SIM: data.EQUIPEMENT.NS_SIM,
			ADR_IP: data.EQUIPEMENT.ADR_IP,
			IMEI_MODEM: data.EQUIPEMENT.IMEI_MODEM,
			LONGITUDE: data.SITE.LONGITUDE,
			LATITUDE: data.SITE.LATITUDE,
		};

		setFormdata(dataUp);
		handleDialog();
	};

	// const handlewilaya = (event) => {
	// 	event.target.id = "NOM_WILAYA";
	// 	// console.log(event.target.id);
	// 	// setWil(event.target.value);
	// 	onChange(event);
	// };

	//************************************** */
	const [columnDefs] = useState([
		{
			field: "action",
			width: 130,
			filter: false,
			cellRenderer: (params) => {
				return (
					<div className="cellAction">
						<Button
							startIcon={<Edit />}
							onClick={() => handleUpdate(params.data)}
						></Button>
						<Button
							startIcon={<Delete />}
							sx={{
								paddingRight: "100px",
							}}
							onClick={() => handleDelete(params.data.CODE_SITE)}
						></Button>
					</div>
				);
			},
		},
		{ field: "CODE_SITE", width: 150 },
		{
			field: "DESIGNATION_STRUCTURE",
			width: 220,
			valueGetter: (params) => params.data.SITE.DESIGNATION_STRUCTURE,
		},
		{
			field: "CODE_BR",
			width: 150,
			valueGetter: (params) => params.data.SITE.BRANCHE.CODE_BR,
		},
		{
			field: "NOM_WILAYA",
			width: 150,
			valueGetter: (params) => params.data.SITE.WILAYA.NOM_WILAYA,
		},

		{
			field: "TYPE",
		},
		{
			field: "NUM_LIGNE",
		},
		{
			field: "NS_MODEM",
		},

		{
			field: "NS_SIM",
			valueGetter: (params) => params.data.EQUIPEMENT.NS_SIM,
		},
		{
			field: "Date_Act",
		},
		{
			field: "Date_exp",
		},
	]);

	const searchDivStyle = { padding: 10 };
	const searchStyle = {
		width: "90%",
		padding: "10px 20px",
		borderRadius: 20,
		outline: 0,
		border: "1px gray solid",
		fontSize: "60%",
	};
	function onGridReady(params) {
		setGridApi(params.api);
		setGridColumnApi(params.columnApi);
	}
	// const onFilterTextChange = (e) => {
	// 	gridApi.setQuickFilter(e.target.value);
	// };
	return (
		<div className="pagetotale">
			<Sidebar />
			<div
				className="ag-theme-alpine"
				style={{
					flex: 6,
					width: "60%",
					padding: "20px",
					margin: "10px",
					marginRight: "20px",
					height: "600px",
				}}
			>
				<Toolbar>
					<div className="titleDBTable">
						<h2>Global Table</h2>
						<Box ml={63} sx={{ display: "flex" }}>
							<div style={searchDivStyle}>
								<input
									type="text"
									style={searchStyle}
									// onChange={onFilterTextChange}
									onChange={(e) => setQuery(e.target.value)}
									placeholder="Search ..."
								/>
							</div>
							<Box ml={0} pl={0} sx={{ display: "flex" }}>
								<Button
									size="large"
									startIcon={<CloudDownloadIcon />}
									onClick={Export}
								></Button>
								<Button
									startIcon={<AddBoxIcon />}
									size="Large"
									onClick={handleDialog}
								></Button>
							</Box>
						</Box>
					</div>
				</Toolbar>
				<AgGridReact
					onGridReady={onGridReady}
					ref={gridRef}
					rowData={dataBD}
					columnDefs={columnDefs}
					defaultColDef={ManipulationData}
					pagination={true}
					paginationAutoPageSize={true}
				></AgGridReact>
				<DialogData
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
}

export default DatabaseTable;
