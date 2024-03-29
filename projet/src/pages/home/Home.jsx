import React from "react";
import "./Home.scss";
import Sidebar from "../../componets/sidebar/Sidebar";
import Navbar from "../../componets/navbar/Navbar";
import Widget from "../../componets/widget/Widget";
import Featured from "../../componets/featured/Featured";
import Featured4 from "../../componets/featured/Featured4";
import FeaturedOo from "../../componets/featured/FeaturedOo";
import Chart from "../../../src/componets/chart/Chart";
import Table from "../../componets/table/Table";
import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import FeaturedParent from "../../componets/featured/FeaturedParent";

const Home = () => {
	const { setAuth } = useContext(AuthContext);
	const navigate = useNavigate();

	const logout = async () => {
		// if used in more components, this should be in context
		// axios to /logout endpoint
		setAuth({});
		navigate("/login");
	};
	// if(roles==1000){<Sidebar />}

	// else {<SidebarVisitor />}
	return (
		<div className="home">
			<Sidebar />
			<div className="homeContainer">
				{/* <Navbar /> */}
				<div className="widgets">
					<Widget type="user" />
					<Widget type="order" />
					<Widget type="earning" />
					<Widget type="balance" />
				</div>
				<div className="charts">
					<FeaturedParent />

					{/* <Chart title="Statistique d'abonnements" aspect={2/1} /> */}
				</div>
				{/* <div className="listContainer">
					<div className="listTitle">
						<h1>Notifications</h1>
					</div>
					<Table />
				</div> */}
			</div>
		</div>
	);
};

export default Home;
