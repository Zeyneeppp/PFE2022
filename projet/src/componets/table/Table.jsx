import "./Table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";

const List = ({ data }) => {
	console.log("data from notif comp", data);
	// console.log("data", data);
	// console.log("display d.date");
	// console.log("data props", data);
	// const rowdata = data.map((d) => {
	// 	console.log(d);
	// });
	// const filteredData = data.filter((d) => {
	// 	console.log("display d.date", d.Date_exp);
	// 	if (d.Date_exp != null) {
	// 		console.log("u here");
	// 		const d1 = new Date();
	// 		const d2 = new Date(d.Date_exp);
	// 		console.log("d2", d2);
	// 		return d1 >= d2;
	// 	} else {
	// 		return false;
	// 	}
	// });
	// console.log("filteredData", filteredData);
	// console.log("filterdata", filteredData);

	// const data = [
	// 	{
	// 		NUM_LIGNE: "661952174",
	// 		CODE_SITE: "DG-16-2",
	// 		NS_MODEM: "321342380615",
	// 		TYPE: "MOBILIS",
	// 		Date_Act: "2021-01-23",
	// 		Date_exp: "2021-06-23",
	// 		MISE_SERVICE: null,
	// 		OPERATEUR: null,
	// 		DEBIT: null,
	// 		RMRQ: null,
	// 	},
	// ];
	// console.log("data : ", data);
	// const dateC = new Date();
	// const ExpDate = new Date(data[0].Date_exp);
	// if (dateC >= ExpDate) {
	// 	console.log("expired");
	// }

	// var dateC = new Date();
	// var date = new Date(data[0].Date_exp);
	// console.log(
	// 	"the exp date " + date[0].Date_exp + "et elle est : " + dateC <= date
	// 		? "expiré"
	// 		: "non expiré"
	// );
	const rows = [
		{
			NUM_LIGNE: "DG-16-0002",
			Site: "CENTRE DE FORMATION EL KHROUB (CFK)",
			Liaison: "Ooredoo",
			Débit: "20",
			Ligne: 541365275,
			status: "Active",
		},
		{
			id: 2235235,
			Site: "SIEGE DISTRICT BLIDA",
			Liaison: "Mobilis",
			Débit: "30",
			Ligne: 642565565,
			status: "Active",
		},
		{
			id: 2342353,
			Site: "CENTRE MARINE ANNABA",
			Liaison: "Adsl",
			Débit: "10",
			Ligne: 21345658547,
			status: "Expiré",
		},
		{
			id: "CBR-16-0004",
			Site: "CM Alger",
			Liaison: "Adsl",
			Débit: "10",
			Ligne: 21315150616,
			status: "Expiré",
		},
	];

	return (
		<TableContainer component={Paper} className="table">
			<Table sx={{ minWidth: 100 }} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell className="tableCell">Code Site</TableCell>
						{/* <TableCell className="tableCell">Site</TableCell> */}
						{/* <TableCell className="tableCell">Liaison</TableCell> */}
						{/* <TableCell className="tableCell">Débit</TableCell> */}
						{/* <TableCell className="tableCell">Ligne</TableCell> */}
						{/* <span className={`status ${row.status}`}>{row.status}</span> */}
						<TableCell className="tableCell">Status</TableCell>
					</TableRow>
				</TableHead>
				{/* <TableBody>
					{filteredData.map((row, index) => (
						<TableRow key={index}>
							<TableCell className="tableCell"> {row.CODE_SITE}</TableCell>

							<TableCell className="tableCell">
								<div>Expiré</div>
							</TableCell>
						</TableRow>
					))}
				</TableBody> */}
			</Table>
		</TableContainer>
	);
};

export default List;
