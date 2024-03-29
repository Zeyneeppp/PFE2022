import React, { useContext } from "react";
import "./Sidebar.scss";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import { Link, useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import AuthContext from "../../context/AuthContext";
import { Button } from "@mui/material";

function Sidebar() {
	const { auth } = useAuth();
	const { setAuth } = useContext(AuthContext);
	const navigate = useNavigate();

	const logout = async () => {
		// if used in more components, this should be in context
		// axios to /logout endpoint
		setAuth({});
		navigate("/login");
	};
	let notif = "";
	let users = "";
	let globaltable = "";
	if (auth.roles === 1000) {
		notif = (
			<Link to="/Notifications" style={{ textDecoration: "none" }}>
				<li>
					<NotificationsNoneOutlinedIcon
						className="icon"
						style={{ textDecoration: "none" }}
					/>
					<span>Notifications</span>
					{/* <div className="counter">1</div> */}
				</li>
			</Link>
		);
		users = (
			<Link to="/users" style={{ textDecoration: "none" }}>
				<li>
					<GroupOutlinedIcon className="icon" />
					<span>Users</span>
				</li>
			</Link>
		);
		globaltable = (
			<Link to="/database" style={{ textDecoration: "none" }}>
				<li>
					<span>Global Data</span>
				</li>
			</Link>
		);
	}
	return (
		<div className="sidebar">
			<div className="top">
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/c/ce/LogoNAFTAL.svg"
					alt=""
					className="Logonaftal"
				/>
				<Link to="/home" style={{ textDecoration: "none" }}>
					<span className="logo">Network Manager</span>
				</Link>
			</div>
			<div className="center">
				<ul>
					<p className="title">
						NETWORK MANAGER
						<p className="sous_title"> Dashboard et Widgets</p>
					</p>

					<Link to="/home" style={{ textDecoration: "none" }}>
						<li>
							<DashboardOutlinedIcon
								className="icon"
								style={{ textDecoration: "none" }}
							/>
							<span>Dashboard</span>
						</li>
					</Link>
					{/* <Link to="/Notifications" style={{ textDecoration: "none" }}>
						<li>
							<NotificationsNoneOutlinedIcon
								className="icon"
								style={{ textDecoration: "none" }}
							/>
							<span>Notifications</span>
							{/* <div className="counter">1</div> */}
					{/* </li> */}
					{/* </Link>  */}
					{/* <Link to="/users" style={{ textDecoration: "none" }}>
						<li>
							<GroupOutlinedIcon className="icon" />
							<span>Users</span>
						</li>
					</Link> */}

					{users}
					{notif}

					<p className="title">NETWORK</p>
					{globaltable}
					{/* <Link to="/database" style={{ textDecoration: "none" }}>
						<li>
							<span>Global Data</span>
						</li>
					</Link> */}
					{/* <Link to="/admin" style={{ textDecoration: "none" }}>
						<li>
							<span>Admin</span>
						</li>
					</Link> */}
					<Link to="/ooredoo" style={{ textDecoration: "none" }}>
						<li>
							<span>Ooredoo</span>
						</li>
					</Link>
					<Link to="/mobilis" style={{ textDecoration: "none" }}>
						<li>
							<span>Mobilis</span>
						</li>
					</Link>
					<Link to="/ooredoo" style={{ textDecoration: "none" }}>
						<li>
							<span>ADSL</span>
						</li>
					</Link>
					<Link to="/database" style={{ textDecoration: "none" }}>
						<li>
							<span>4G LTE</span>
						</li>
					</Link>
					<Link to="/database" style={{ textDecoration: "none" }}>
						<li>
							<span>VPN</span>
						</li>
					</Link>
				</ul>

				{/* <p className="title">
						Branches
						<p className="sous_title"> Les branches</p>
					</p>
					<Link to="database" style={{ textDecoration: "none" }}>
						<li>
							<span>CBR</span>
						</li>
					</Link>
					<Link to="/database" style={{ textDecoration: "none" }}>
						<li>
							<span>COM</span>
						</li>
					</Link>
					<Link to="/database" style={{ textDecoration: "none" }}>
						<li>
							<span>GPL</span>
						</li>
					</Link> */}
				<div className="logout">
					<Button onClick={logout}>
						<LogoutIcon className="icon" style={{ textDecoration: "none" }} />
					</Button>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
