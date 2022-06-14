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
	const gridRef = useRef();
	const [gridApi, setGridApi] = useState(null);
	const [gridColumnApi, setGridColumnApi] = useState(null);
	const [openPopup, setOpenPopup] = useState(false);
	const [formdata, setFormdata] = useState("");
	const [dataBD, setDataBD] = useState([]);
	useEffect(() => {
		const getDataBD = async () => {
			try {
				const res = await fetch("http://localhost:8080/api/all");
				const getData = await res.json();
				// Object.assign({}, getData);
				setDataBD(getData);
				console.log(dataBD);
			} catch (e) {
				console.log(e);
			}
		};
		getDataBD();
	}, []);
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
		setFormdata({ ...formdata, [id]: value });
	};
	const handleDialog = () => {
		setOpenPopup(true);
	};
	const handleClose = () => {
		setOpenPopup(false);
		setFormdata("");
	};
	const handleFormSubmit = () => {
		console.log("Not yet I have to create a server first");
	};

	const handleDelete = () => {
		const confirm = window.confirm(
			"Are you sure, you want to delete this row ?"
		);
		console.log("Not yet I have to create a server first");

		//setData(data.filter((item) => item.id !== id));
	};
	const handleUpdate = (data) => {
		console.log(data);
		setFormdata(data);
		handleDialog();
	};

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
							onClick={() => handleDelete(params.value)}
						></Button>
					</div>
				);
			},
		},
		{ field: "CODE_SITE", width: 150 },
		{ field: "DESIGNATION_STRUCTURE", width: 220 },
		{ field: "CODE_BR", width: 150 },
		// { field: "CODE_WILAYA" },

		{ field: "TYPE", valueGetter: (params) => params.data.LIAISON[0].TYPE },
		{
			field: "NUM_LIGNE",
			valueGetter: (params) => {
				var dataConst = params.data;
				var i = 0;
				while (i < dataConst.LIAISON.length) {
					return dataConst.LIAISON[i].NUM_LIGNE;
				}
				return "/";
			},
		},
		{
			field: "NS_MODEM",
			valueGetter: (params) => {
				var dataConst = params.data;
				var i = 0;
				while (i < dataConst.LIAISON.length) {
					return dataConst.LIAISON[i].EQUIPEMENT.NS_MODEM;
				}
				return "/";
			},
		},
		{
			field: "NS_SIM_ADSL",
			valueGetter: (params) => {
				var dataConst = params.data;
				var i = 0;
				while (i < dataConst.LIAISON.length) {
					if (strCompare(dataConst.LIAISON[i].TYPE, "ADSL") == true) {
						return dataConst.LIAISON[i].EQUIPEMENT.NS_SIM;
					}
					i++;
				}
				return "/";
			},
		},
		{
			field: "Adr_IP_ADSL",
			valueGetter: (params) => {
				var dataConst = params.data;
				var i = 0;
				while (i < dataConst.LIAISON.length) {
					if (strCompare(dataConst.LIAISON[i].TYPE, "ADSL") == true) {
						return dataConst.LIAISON[i].EQUIPEMENT.NS_SIM;
					}
					i++;
				}
				return "/";
			},
		},
		{
			field: "DateAct_ADSL",
			valueGetter: (params) => {
				var dataConst = params.data;
				var i = 0;
				while (i < dataConst.LIAISON.length) {
					if (strCompare(dataConst.LIAISON[i].TYPE, "ADSL") == true) {
						return dataConst.LIAISON[i].DATE_ACTIVATION;
					}
					i++;
				}
				return "/";
			},
		},
		{
			field: "DateExp_ADSL",
			valueGetter: (params) => {
				var dataConst = params.data;
				var i = 0;
				while (i < dataConst.LIAISON.length) {
					if (strCompare(dataConst.LIAISON[i].TYPE, "ADSL") == true) {
						return dataConst.LIAISON[i].DATE_EXPIRATION;
					}
					i++;
				}
				return "/";
			},
		},

		{
			field: "NUM_LIGNE_OOR",
			valueGetter: (params) => {
				var dataConst = params.data;
				var i = 0;
				while (i < dataConst.LIAISON.length) {
					if (strCompare(dataConst.LIAISON[i].TYPE, "OOREDOO") == true) {
						return dataConst.LIAISON[i].NUM_LIGNE;
					}
					i++;
				}
				return "/";
			},
		},
		{
			field: "NS_MODEM_OOR",
			valueGetter: (params) => {
				var dataConst = params.data;
				var i = 0;
				while (i < dataConst.LIAISON.length) {
					if (strCompare(dataConst.LIAISON[i].TYPE, "OOREDOO") == true) {
						return dataConst.LIAISON[i].EQUIPEMENT.NS_MODEM;
					}
					i++;
				}
				return "/";
			},
		},
		{
			field: "NS_SIM_OOR",
			valueGetter: (params) => {
				var dataConst = params.data;
				var i = 0;
				while (i < dataConst.LIAISON.length) {
					if (strCompare(dataConst.LIAISON[i].TYPE, "OOREDOO") == true) {
						return dataConst.LIAISON[i].EQUIPEMENT.NS_SIM;
					}
					i++;
				}
				return "/";
			},
		},
		{
			field: "Adr_IP_OOR",
			valueGetter: (params) => {
				var dataConst = params.data;
				var i = 0;
				while (i < dataConst.LIAISON.length) {
					if (strCompare(dataConst.LIAISON[i].TYPE, "OOREDOO") == true) {
						return dataConst.LIAISON[i].EQUIPEMENT.NS_SIM;
					}
					i++;
				}
				return "/";
			},
		},
		{
			field: "NUM_LIGNE_MOB",
			valueGetter: (params) => {
				var dataConst = params.data;
				var i = 0;
				while (i < dataConst.LIAISON.length) {
					if (strCompare(dataConst.LIAISON[i].TYPE, "MOBILIS") == true) {
						return dataConst.LIAISON[i].NUM_LIGNE;
					}
					i++;
				}
				return "/";
			},
		},
		{
			field: "NS_MODEM_MOB",
			valueGetter: (params) => {
				var dataConst = params.data;
				var i = 0;
				while (i < dataConst.LIAISON.length) {
					if (strCompare(dataConst.LIAISON[i].TYPE, "MOBILIS") == true) {
						return dataConst.LIAISON[i].EQUIPEMENT.NS_MODEM;
					}
					i++;
				}
				return "/";
			},
		},
		{
			field: "NS_SIM_MOB",
			valueGetter: (params) => {
				var dataConst = params.data;
				var i = 0;
				while (i < dataConst.LIAISON.length) {
					if (strCompare(dataConst.LIAISON[i].TYPE, "MOBILIS") == true) {
						return dataConst.LIAISON[i].EQUIPEMENT.NS_SIM;
					}
					i++;
				}
				return "/";
			},
		},
		{
			field: "Adr_IP_MOB",
			valueGetter: (params) => {
				var dataConst = params.data;
				var i = 0;
				while (i < dataConst.LIAISON.length) {
					if (strCompare(dataConst.LIAISON[i].TYPE, "MOBILIS") == true) {
						return dataConst.LIAISON[i].EQUIPEMENT.NS_SIM;
					}
					i++;
				}
				return "/";
			},
		},
		{
			field: "NUM_LIGNE_4GL",
			valueGetter: (params) => {
				var dataConst = params.data;
				var i = 0;
				while (i < dataConst.LIAISON.length) {
					if (strCompare(dataConst.LIAISON[i].TYPE, "4GLTE") == true) {
						return dataConst.LIAISON[i].NUM_LIGNE;
					}
					i++;
				}
				return "/";
			},
		},
		{
			field: "NS_MODEM_4GL",
			valueGetter: (params) => {
				var dataConst = params.data;
				var i = 0;
				while (i < dataConst.LIAISON.length) {
					if (strCompare(dataConst.LIAISON[i].TYPE, "4GLTE") == true) {
						return dataConst.LIAISON[i].EQUIPEMENT.NS_MODEM;
					}
					i++;
				}
				return "/";
			},
		},
		{
			field: "NS_SIM_4GL",
			valueGetter: (params) => {
				var dataConst = params.data;
				var i = 0;
				while (i < dataConst.LIAISON.length) {
					if (strCompare(dataConst.LIAISON[i].TYPE, "4GLTE") == true) {
						return dataConst.LIAISON[i].EQUIPEMENT.NS_SIM;
					}
					i++;
				}
				return "/";
			},
		},
		{
			field: "Adr_IP_4GL",
			valueGetter: (params) => {
				var dataConst = params.data;
				var i = 0;
				while (i < dataConst.LIAISON.length) {
					if (strCompare(dataConst.LIAISON[i].TYPE, "4GLTE") == true) {
						return dataConst.LIAISON[i].EQUIPEMENT.NS_SIM;
					}
					i++;
				}
				return "/";
			},
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
	const onFilterTextChange = (e) => {
		gridApi.setQuickFilter(e.target.value);
	};
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
									type="search"
									style={searchStyle}
									onChange={onFilterTextChange}
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
