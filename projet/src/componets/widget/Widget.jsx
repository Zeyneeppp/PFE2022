import "./Widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const Widget = ({ type }) => {
	let data;
	const [datadg, setDatadg] = useState([]);
	const [datacom, setDatacom] = useState([]);
	const [datacbr, setDatacbr] = useState([]);
	const [datagpl, setDatagpl] = useState([]);
	const getDatadg = async () => {
		await axios
			.get(`http://localhost:8080/api/dg`)
			.then((res) => {
				setDatadg(res.data);
				console.log(res.data);
				console.log("axios data", res);
			})
			.catch((error) => {
				console.error(error);
			});
	};
	const getDatacom = async () => {
		await axios
			.get(`http://localhost:8080/api/com`)
			.then((res) => {
				setDatacom(res.data);
				console.log(res.data);
				console.log("axios data", res);
			})
			.catch((error) => {
				console.error(error);
			});
	};
	const getDatacbr = async () => {
		await axios
			.get(`http://localhost:8080/api/cbr`)
			.then((res) => {
				setDatacbr(res.data);
				console.log(res.data);
				console.log("axios data", res);
			})
			.catch((error) => {
				console.error(error);
			});
	};
	const getDatagpl = async () => {
		await axios
			.get(`http://localhost:8080/api/gpl`)
			.then((res) => {
				setDatagpl(res.data);
				console.log(res.data);
				console.log("axios data", res);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	useEffect(() => {
		getDatadg();
		getDatacom();
		getDatacbr();
		getDatagpl();
	}, []);
	//temporary

	switch (type) {
		case "user":
			data = {
				title: "Direction Génèrale",
				amount: datadg.length,
				isMoney: false,
				link: "See all sites",
			};
			break;
		case "order":
			data = {
				title: "Commercialisation",
				amount: datacom.length,
				isMoney: false,
				link: "View all sites",
			};
			break;
		case "earning":
			data = {
				title: "GPL",
				amount: datagpl.length,
				isMoney: true,
				link: "View net sites",
			};
			break;
		case "balance":
			data = {
				title: "Carburants",
				amount: datacbr.length,
				isMoney: true,
				link: "View net sites",
			};
			break;
		default:
			break;
	}
	console.log("datacbr", datacbr);
	return (
		<div className="widget">
			<div className="left">
				<span className="title">{data.title}</span>
				<span className="counter">{data.amount}</span>
				<span className="link">{data.link}</span>
			</div>
			<div className="right">{data.icon}</div>
		</div>
	);
};

export default Widget;
