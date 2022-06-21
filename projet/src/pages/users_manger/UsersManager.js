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

import { useEffect } from "react";
import axios, { axiosPrivate } from "../../Api/axios";

const UsersManager = () => {
	const initialValue = {
		id: "",
		Username: "",
		Email: "",
		FirstName: "",
		LastName: "",
		Branch: "",
		Password: "",
	};
	// const [dataTable, setDataTable] = useState(userRows);
	const [openPopup, setOpenPopup] = useState(false);
	const [formdata, setFormdata] = useState(initialValue);
	const [dataUsers, setDataUsers] = useState([]);

	// useEffect(() => {
	// 	const getDataBD = async () => {
	// 		try {
	// 			const res = await fetch("http://localhost:8080/api/users");
	// 			const getData = await res.json();
	// 			// Object.assign({}, getData);
	// 			setDataUsers(getData);
	// 			console.log(dataUsers);
	// 		} catch (e) {
	// 			console.log(e);
	// 		}
	// 	};
	// 	getDataBD();
	// }, []);
	const getUsers = async () => {
		try {
			const response = await axios.get("api/users");
			console.log(response.data);
			setDataUsers(response.data);
		} catch (err) {
			console.error(err);
		}
	};

	useEffect(() => {
		getUsers();
	}, []);
	const rowData = dataUsers?.map((user) => {
		return {
			Username: user?.Username,
			Email: user?.Email,
			FirstName: user?.FirstName,
			LastName: user?.LastName,
			Branch: user?.Branch,
			id: user?.UserID,
		};
	});

	const userColumns = [
		{ field: "Username", width: 100 },
		{ field: "Email", width: 230 },
		{ field: "FirstName", width: 230 },
		{ field: "LastName", width: 230 },
		{ field: "Branch", width: 100 },

		{
			headerName: "Action",
			width: 200,
			renderCell: (params) => {
				console.log("tell me what is params", params.value);
				console.log("tell me what is params", params.row.id);
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
							onClick={() => handleDelete(params.row.id)}
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
		console.log("id =", id, "v=", value);
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
		console.log("WHAT IS THIS", formdata);
		if (formdata.id) {
			//updating a user
			const confirm = window.confirm(
				"Are you sure, you want to update this row ?"
			);
			confirm &&
				fetch(`http://localhost:8080/api/${formdata.id}`, {
					method: "PUT",
					body: JSON.stringify(formdata),
					headers: {
						"content-type": "application/json",
					},
				})
					.then((resp) => resp.json())
					.then((resp) => {
						handleClose();
						getUsers();
					});
		} else {
			fetch("http://localhost:8080/api/users", {
				method: "POST",
				body: JSON.stringify(formdata),
				headers: {
					"content-type": "application/json",
				},
			})
				.then((resp) => resp.json())
				.then((resp) => {
					handleClose();
					getUsers();
					setFormdata(initialValue);
				});
		}
	};
	const handleDelete = (id) => {
		const confirm = window.confirm("Are you sure, you want to delete ?");
		if (confirm) {
			fetch(`http://localhost:8080/api/${id}`, { method: "DELETE" })
				.then((resp) => resp.json())
				.then((resp) => getUsers());
		}
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
					rows={rowData}
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
