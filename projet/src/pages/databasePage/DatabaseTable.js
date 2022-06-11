import React, { useCallback, useEffect, useRef, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { Button, Toolbar, Typography } from "@mui/material";
import PrintIcon from "@mui/icons-material/Print";
function DatabaseTable() {
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
		// { field: "CODE_WILAYA" },
		{
			field: "NOM_WILAYA",
			valueGetter: (params) => params.data.WILAYA.NOM_WILAYA,
		},
		{ field: "DESIGNATION_STRUCTURE" },
		{
			field: "NUM_LIGNE_ADSL",
			valueGetter: (params) => {
				var dataConst = params.data;
				var i = 0;
				while (i < dataConst.LIAISON.length) {
					if (strCompare(dataConst.LIAISON[i].TYPE, "ADSL") == true) {
						return dataConst.LIAISON[i].NUM_LIGNE;
					}
					i++;
				}
				return "/";
			},
		},
		{
			field: "NS_MODEM_ADSL",
			valueGetter: (params) => {
				var dataConst = params.data;
				var i = 0;
				while (i < dataConst.LIAISON.length) {
					if (strCompare(dataConst.LIAISON[i].TYPE, "ADSL") == true) {
						return dataConst.LIAISON[i].EQUIPEMENT.NS_MODEM;
					}
					i++;
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
						return dataConst.LIAISON[i].ABONNEMENT.DATE_ACTIVATION;
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
						return dataConst.LIAISON[i].ABONNEMENT.DATE_EXPIRATION;
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
	return (
		<div>
			<div
				className="ag-theme-alpine"
				style={{
					height: "500px",
					width: "80%",
					padding: "50px",
				}}
			>
				<Toolbar>
					<div className="titleDBTable">
						Mobilis
						<Button
							size="large"
							startIcon={<PrintIcon />}
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

export default DatabaseTable;
