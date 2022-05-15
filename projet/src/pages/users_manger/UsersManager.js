import "./userdata.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "./UsersData";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import AddBoxIcon from "@mui/icons-material/AddBox";
const UsersManager = () => {
	const [data, setData] = useState(userRows);

	const handleDelete = (id) => {
		setData(data.filter((item) => item.id !== id));
	};

	const actionColumn = [
		{
			field: "action",
			headerName: "Action",
			width: 200,
			renderCell: (params) => {
				return (
					<div className="cellAction">
						<Link to="/users/test">
							<Button startIcon={<Edit />}></Button>
						</Link>
						<Button
							startIcon={<Delete />}
							sx={{
								paddingRight: "100px",
							}}
						></Button>
					</div>
				);
			},
		},
	];
	return (
		<div className="datatable">
			<div className="datatableTitle">
				Users Manager
				<Link to="/users/new">
					<Button startIcon={<AddBoxIcon />} size="Large"></Button>
				</Link>
			</div>
			<DataGrid
				className="datagrid"
				rows={data}
				columns={userColumns.concat(actionColumn)}
				pageSize={9}
				rowsPerPageOptions={[9]}
				checkboxSelection
			/>
		</div>
	);
};

export default UsersManager;
