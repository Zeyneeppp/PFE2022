import React, { useCallback, useEffect, useRef, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { Button, Toolbar, Typography } from "@mui/material";
import PrintIcon from "@mui/icons-material/Print";
import Sidebar from "../../componets/sidebar/Sidebar";
import Navbar from "../../componets/navbar/Navbar";
import AddBoxIcon from "@mui/icons-material/Add";

function Ooredoo() {
	const gridRef = useRef();
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

	const [columnDefs] = useState([
		{ field: "CODE_SITE" },
		{ field: "CODE_BR" },
		{
			field: "NOM_WILAYA",
			valueGetter: (params) => params.data.WILAYA.NOM_WILAYA,
		},
		{ field: "DESIGNATION_STRUCTURE" },
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
						< img src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Ooredoo.svg" alt=" " className="imglogo" />
						 <h2>Ooredoo</h2>
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

export default Ooredoo;
