import "./Featured.scss";
import "react-circular-progressbar/dist/styles.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Featured = (props) => {
	const { title, totalNb, expiredNb } = props;
	return (
		<div className="featured">
			<div className="top">
				<h1 className="title">{title}</h1>
				{/* <MoreVertIcon fontSize="small" /> */}
			</div>
			<div className="bottom">
				<div className="featuredChart">
					<CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
				</div>
				<p className="title">Total abonnements </p>
				<p className="amount">{totalNb}</p>

				<div className="summary">
					<div className="item">
						<div className="itemTitle">Non renouvlé</div>
						<div className="itemResult negative">
							<KeyboardArrowDownIcon fontSize="small" />
							<div className="resultAmount">{expiredNb} </div>
						</div>
					</div>
					<div className="item">
						<div className="itemTitle">Renouvlé</div>
						<div className="itemResult positive">
							<KeyboardArrowUpOutlinedIcon fontSize="small" />
							<div className="resultAmount">{totalNb - expiredNb}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Featured;
