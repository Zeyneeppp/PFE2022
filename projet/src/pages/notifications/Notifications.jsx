import React from "react";
import Sidebar from "../../componets/sidebar/Sidebar";
import Table from "../../componets/table/Table";
import "./Notifications.scss";

const Notifications = () => {
	return (
		<div className="pagetotale">
			<Sidebar />
			<div className="listContainer">
				<div className="listTitle">
					<h1>Notifications table</h1>
				</div>
				<Table />
			</div>
		</div>
	);
};

export default Notifications;
