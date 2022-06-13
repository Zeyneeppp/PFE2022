import React, { useCallback, useEffect, useRef, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { Button, Toolbar, Typography } from "@mui/material";
import PrintIcon from "@mui/icons-material/Print";
import Sidebar from "../../componets/sidebar/Sidebar";
import Navbar from "../../componets/navbar/Navbar";
import AddBoxIcon from "@mui/icons-material/Add";

function Mobilis() {
	const gridRef = useRef();
	const [dataBD, setDataBD] = useState([]);
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

	const [columnDefs] = useState([
		{ field: "CODE_SITE" },
		{
			field: "CODE_BR",
			valueGetter: (params) => params.data.SITE.BRANCHE.CODE_BR,
		},
		{
			field: "NOM_WILAYA",
			valueGetter: (params) => params.data.SITE.WILAYA.NOM_WILAYA,
		},
		{
			field: "DESIGNATION_STRUCTURE",
			valueGetter: (params) => params.data.SITE.DESIGNATION_STRUCTURE,
		},
		{
			field: "NUM_LIGNE_MOB",
		},
		{
			// field: "NS_MODEM_MOB",
			// valueGetter: (params) => params.data.EQUIPEMENT.NS_MODEM,
		},
		{
			field: "NS_SIM_MOB",
			// valueGetter: (params) => params.data.EQUIPEMENT.NS_SIM,
		},
		{
			field: "Adr_IP_MOB",
			// valueGetter: (params) => params.data.EQUIPEMENT.Adr_IP,
		},
	]);
	return (
		<div className="pagetotale">
			<Sidebar/>
			<div
				className="ag-theme-alpine"
				style={{
					flex:6,
					width: "100%",
					padding: "20px",
					margin:"20px",
				}}
			>
				
				<Toolbar>
					<div className="titleDBTable">
						<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/ATM_Mobilis.svg/1200px-ATM_Mobilis.svg.png"  className="imglogomobilis"/>
						<h2>Mobilis</h2>
						<Button
							size="large"
							startIcon={<PrintIcon />}
							onClick={Export}
						></Button>
						<Button
							size="large"
							startIcon={<AddBoxIcon />}
							onClick={Export}
						></Button>
					</div>
				</Toolbar>
				<AgGridReact
					ref={gridRef}
					rowData={dataBD}
					columnDefs={columnDefs}
					defaultColDef={ManipulationData}
				></AgGridReact>
			</div>
		</div>
	);
}

export default Mobilis;
