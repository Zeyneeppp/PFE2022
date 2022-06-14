import "./Widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

const Widget = ({ type }) => {
	let data;

	//temporary

	switch (type) {
		case "user":
			data = {
				title: "Direction Génèrale",
				amount: "32",
				isMoney: false,
				link: "See all sites",
			};
			break;
		case "order":
			data = {
				title: "Commercialisation",
				amount: "25",
				isMoney: false,
				link: "View all sites",
			};
			break;
		case "earning":
			data = {
				title: "GPL",
				amount: "18",
				isMoney: true,
				link: "View net sites",
			};
			break;
		case "balance":
			data = {
				title: "Carburants",
				amount: "37",
				isMoney: true,
				link: "View net sites",
			};
			break;
		default:
			break;
	}

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
