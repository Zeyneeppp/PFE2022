import React, { useCallback, useRef, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { Button, Toolbar, Typography } from "@mui/material";
import PrintIcon from "@mui/icons-material/Print";
function DatabaseTable() {
	const gridRef = useRef();
	const rowData = [
		{
			Code_Site: "1",
			Site: "A",
			Branche: "a",
			Numero_ligne: "",
			Amodifier: "",
		},
		{
			Code_Site: "2",
			Site: "B",
			Branche: "b",
			Numero_ligne: "",
			Amodifier: "",
		},
	];
	const ManipulationData = {
		sortable: true,
		filter: true,
		floatingFilter: true,
	};

	const Export = useCallback(() => {
		gridRef.current.api.exportDataAsCsv();
	}, []);

	const [columnDefs] = useState([
		{ field: "Code_Site" },
		{ field: "Site" },
		{ field: "Branche" },
		{ field: "Numero_ligne" },
		{ field: "Amodifier" },
	]);
	return (
		<div>
			<div
				className="ag-theme-alpine"
				style={{ height: "500px", width: "80%", padding: "20px" }}
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
