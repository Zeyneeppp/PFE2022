import "./Navbar.scss";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

function Navbar() {
	return (
		<div className="navbar">
			<div className="wrapper">
				<div className="search">
					<input type="text" placeholder="Search..." />
					<SearchOutlinedIcon />
				</div>
				<div className="items">
					<div className="item">
						<FullscreenExitOutlinedIcon className="icon" />
					</div>
					<div className="item">
						<NotificationsNoneOutlinedIcon className="icon" />
						<div className="counter">1</div>
					</div>

					<div className="item">
						<Stack direction="row" spacing={1}>
							<Avatar src="/broken-image.jpg" />
						</Stack>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
