import "./userdata.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userRows } from "./UsersData";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button, Popover } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Sidebar from "../../componets/sidebar/Sidebar";
import Navbar from "../../componets/navbar/Navbar";
import { AgGridReact } from "ag-grid-react";
import {
	Dialog,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from "@mui/material";
import Login from "../login/Form_Style/Login";
import DialogUsers from "../../componets/popupdialog/DialogUsers";
import DataService from "./DataService";
import axios from "../../Api/axios";
import "../login/Form_Style/signin.scss";

const UsersManager = () => {
	const initialValue = { username: "", email: "", branche: "" };
	const [dataTable, setDataTable] = useState(userRows);
	const [openPopup, setOpenPopup] = useState(false);
	const [formdata, setFormdata] = useState(initialValue);

	const userColumns = [
		{ field: "id", headerName: "ID", width: 70 },
		{
			field: "user",
			headerName: "User",
			width: 230,
			renderCell: (params) => {
				return (
					<div className="cellWithImg">
						<img className="cellImg" src={params.row.img} alt="avatar" />
						{params.row.username}
					</div>
				);
			},
		},
		{
			field: "email",
			headerName: "Email",
			width: 230,
		},

		{
			field: "branche",
			headerName: "Branche",
			width: 100,
		},
		{
			field: "action",
			headerName: "Action",
			width: 200,
			renderCell: (params) => {
				return (
					<div className="cellAction">
						
						<Button
							startIcon={<Edit />}
							onClick={() => handleUpdate(params.row)}
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
	];

	/******************************** */
	const onChange = (e) => {
		const { value, id } = e.target;
		setFormdata({ ...formdata, [id]: value });
	};
	//-------------------------------------------HANDLE OPERATIONS------------------------------------------------
	const handleDialog = () => {
		setOpenPopup(true);
	};
	const handleClose = () => {
		setOpenPopup(false);
		setFormdata(initialValue);
	};
	const handleFormSubmit = () => {
		console.log("Not yet I have to create a server first");
	};
	const handleDelete = (id) => {
		const confirm = window.confirm(
			"Are you sure, you want to delete this row :",
			id
		);
		console.log("Not yet I have to create a server first");

		//setData(data.filter((item) => item.id !== id));
	};
	const handleUpdate = (data) => {
		console.log(data);
		setFormdata(data);
		handleDialog();
	};

	return (
		<div className="pagetotale">
			<Sidebar/>
			
			<div className="datatable">
			<Navbar />
				<div className="datatableTitle">
					Users Manager
				<Button
					startIcon={<AddBoxIcon />}
					size="Large"
					onClick={handleDialog}
				></Button>
			</div>

			<DataGrid
				className="datagrid"
				rows={dataTable}
				columns={userColumns}
				pageSize={9}
				rowsPerPageOptions={[9]}
				checkboxSelection
			/>
			<DialogUsers
				openPopup={openPopup}
				setOpenPopup={setOpenPopup}
				dataform={formdata}
				onChange={onChange}
				handleClose={handleClose}
				handleFormSubmit={handleFormSubmit}
			/>
		</div>
		</div>
		
	);
};

export default UsersManager;
