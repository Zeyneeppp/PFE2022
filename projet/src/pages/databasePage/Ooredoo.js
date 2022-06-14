import React, { useCallback, useEffect, useRef, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { Box, Button, Toolbar, Typography } from "@mui/material";
import PrintIcon from "@mui/icons-material/Print";
import Sidebar from "../../componets/sidebar/Sidebar";
import Navbar from "../../componets/navbar/Navbar";
import AddBoxIcon from "@mui/icons-material/Add";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

function Ooredoo() {
	const gridRef = useRef();
	const [dataBD, setDataBD] = useState([]);
	const [gridColumnApi, setGridColumnApi] = useState(null);
	const [gridApi, setGridApi] = useState(null);
	useEffect(() => {
		const getDataBD = async () => {
			try {
				const res = await fetch("http://localhost:8080/api/oor");
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
					width: "100%",
					padding: "20px",
					margin: "30px",
				}}
			>
				<Toolbar>
					<div className="titleDBTable">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Ooredoo.svg"
							alt=" "
							className="imglogo"
						/>
						<h2>Ooredoo</h2>
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
									startIcon={<CloudDownloadIcon />}
									onClick={Export}
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
					paginationPageSize={8}
					paginationAutoPageSize={true}
				></AgGridReact>
			</div>
		</div>
	);
}

export default Ooredoo;
