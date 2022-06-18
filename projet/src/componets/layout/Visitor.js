import { Outlet } from "react-router-dom";
import Unauthorized from "../Unauth/Unauthorized";

const Visitor = () => {
	return (
		<div>
			<Unauthorized />
		</div>
	);
};

export default Visitor;
