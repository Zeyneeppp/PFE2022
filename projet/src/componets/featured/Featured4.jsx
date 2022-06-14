import "./Featured.scss";
import "react-circular-progressbar/dist/styles.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">4G LTE</h1>
        {/* <MoreVertIcon fontSize="small" /> */}
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={11} text={"11%"} strokeWidth={5} />
        </div>
        <p className="title">Total abonnements 4G LTE </p>
        <p className="amount">80</p>
        <p className="desc">
          commentaire.
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Non renouvlé</div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon fontSize="small"/>
              <div className="resultAmount">72 </div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Renouvlé</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">8</div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Featured;