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
				const res = await fetch("http://localhost:8080/api/one");
				const getData = await res.json();
				setDataBD(getData);
				console.log(getData);
			} catch (e) {
				console.log(e);
			}
		};
		getDataBD();
	}, []);
	const rowData = dataBD.map((getdata) => getdata.CODE_SITE);
	const ManipulationData = {
		sortable: true,
		filter: true,
		floatingFilter: true,
	};

	const Export = useCallback(() => {
		gridRef.current.api.exportDataAsCsv();
	}, []);

	const [columnDefs] = useState([
		{ field: "CODE_SITE" },
		{ field: "CODE_BR" },
		{ field: "CODE_WILAYA" },
		// {
		// 	field: "NOM_WILAYA",
		// 	valueGetter: (params) => params.data.WILAYA.NOM_WILAYA,
		// },
		{ field: "DESIGNATION_STRUCTURE" },
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
					rowData={rowData}
					columnDefs={columnDefs}
					defaultColDef={ManipulationData}
				></AgGridReact>
			</div>
		</div>
	);
}

export default DatabaseTable;
