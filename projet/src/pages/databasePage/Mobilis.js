import React, { useCallback, useEffect, useRef, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { Box, Button, Toolbar, Typography } from "@mui/material";
import PrintIcon from "@mui/icons-material/Print";
import Sidebar from "../../componets/sidebar/Sidebar";
import Navbar from "../../componets/navbar/Navbar";
import AddBoxIcon from "@mui/icons-material/Add";
import { CloudDownload } from "@mui/icons-material";

function Mobilis() {
	const gridRef = useRef();
	const [dataBD, setDataBD] = useState([]);
	const [gridColumnApi, setGridColumnApi] = useState(null);
	const [gridApi, setGridApi] = useState(null);
	useEffect(() => {
		const getDataBD = async () => {
			try {
				const res = await fetch("http://localhost:8080/api/mob");
				const getData = await res.json();
				if (Array.isArray(getData)) {
					setDataBD(getData);
				} else {
					setDataBD([getData]);
				}
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
	const [columnDefs] = useState([
		{ field: "CODE_SITE", width: 150 },
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
			field: "DESIGNATION_STRUCTURE",
			width: 230,
			valueGetter: (params) => params.data.SITE.DESIGNATION_STRUCTURE,
		},
		{
			field: "NUM_LIGNE",
		},
		{
			field: "NS_MODEM",
		},
		{
			field: "NS_SIM",
		},
		{
			field: "Adr_IP",
		},
	]);
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
					marginRight: "50px",
					height: "600px",
				}}
			>
				<Toolbar>
					<div className="titleDBTable">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/ATM_Mobilis.svg/1200px-ATM_Mobilis.svg.png"
							className="imglogomobilis"
						/>
						<h2>Mobilis</h2>
						<Box ml={73} sx={{ display: "flex" }}>
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
									startIcon={<CloudDownload />}
									onClick={Export}
								></Button>
							</Box>
						</Box>
					</div>
				</Toolbar>
				<AgGridReact
					ref={gridRef}
					rowData={dataBD}
					columnDefs={columnDefs}
					defaultColDef={ManipulationData}
					pagination={true}
					paginationPageSize={8}
					paginationAutoPageSize={true}
				></AgGridReact>
			</div>
		</div>
	);
}

export default Mobilis;
