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

import DialogUsers from "../../componets/popupdialog/DialogUsers";
import DataService from "./DataService";
import axios from "../../Api/axios";

import { useEffect } from "react";

const UsersManager = () => {
	const initialValue = { username: "", email: "", branche: "" };
	const [dataTable, setDataTable] = useState(userRows);
	const [openPopup, setOpenPopup] = useState(false);
	const [formdata, setFormdata] = useState(initialValue);
	const [dataUsers, setDataUsers] = useState([]);

	useEffect(() => {
		const getDataBD = async () => {
			try {
				const res = await fetch("http://localhost:8080/api/allUsers");
				const getData = await res.json();
				// Object.assign({}, getData);
				setDataUsers(getData);
				console.log(dataUsers);
			} catch (e) {
				console.log(e);
			}
		};
		getDataBD();
	}, []);

	const userColumns = [
		{ field: "Username", headerName: "Username", width: 100 },
		// {
		// 	field: "user",
		// 	headerName: "User",
		// 	width: 230,
		// 	renderCell: (params) => {
		// 		return (
		// 			<div className="cellWithImg">
		// 				<img src={params.row.img} alt="avatar" />
		// 				{params.row.username}
		// 			</div>
		// 		);
		// 	},
		// },
		{
			field: "Email",
			headerName: "Email",
			width: 230,
		},
		{
			field: "FirstName",
			headerName: "FirstName",
			width: 230,
		},
		{
			field: "LastName",
			headerName: "LastName",
			width: 230,
		},

		{
			field: "Branch",
			headerName: "Branch",
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
			<Sidebar />

			<div className="datatable">
				<div className="datatableTitle">
					<h1>Users Manager</h1>
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
					formdata={formdata}
					onChange={onChange}
					handleClose={handleClose}
					handleFormSubmit={handleFormSubmit}
				/>
			</div>
		</div>
	);
};

export default UsersManager;
