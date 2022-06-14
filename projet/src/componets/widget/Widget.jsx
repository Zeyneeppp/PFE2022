import "./Widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

const Widget = ({ type }) => {
	let data;

	//temporary
	const amount = 50;
	const diff = 20;

	switch (type) {
		case "user":
			data = {
				title: "Direction Génèrale",
				isMoney: false,
				link: "See all sites",
			};
			break;
		case "order":
			data = {
				title: "Commercialisation",
				isMoney: false,
				link: "View all sites",
			};
			break;
		case "earning":
			data = {
				title: "GPL",
				isMoney: true,
				link: "View net sites",
			};
			break;
		case "balance":
			data = {
				title: "CBR",
				isMoney: true,
				link: "See details",
			};
			break;
		default:
			break;
	}

	return (
		<div className="widget">
			<div className="left">
				<span className="title">{data.title}</span>
				<span className="counter">{amount}</span>
				<span className="link">{data.link}</span>
			</div>
			<div className="right">
				<div className="percentage positive">
					<KeyboardArrowUpIcon />
					{diff}
				</div>
				{data.icon}
			</div>
		</div>
	);
};

export default Widget;
