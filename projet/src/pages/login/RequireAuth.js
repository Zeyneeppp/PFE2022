import { useLocation, Navigate, Outlet } from "react-router-dom";
import Sidebar from "../../componets/sidebar/Sidebar";
import useAuth from "../../hooks/useAuth";
import Home from "../home/Home";

const RequireAuth = ({ allowedRoles, children }) => {
	const { auth } = useAuth();
	const location = useLocation();
	const userHasRequiredRole =
		auth.userName && allowedRoles.includes(auth.roles) ? true : false;
	console.log("here is my roles", auth.roles);
	console.log(allowedRoles.includes(auth.roles));
	if (!auth) {
		return <Navigate to="/login" state={{ from: location }} replace />;
	}
	// console.log("Can i SEE?", auth.roles, allowedRoles);
	// console.log("Can i SEE?", auth && !userHasRequiredRole);
	// if (auth && !userHasRequiredRole) {
	// 	return <Navigate to="/unauthorized" state={{ from: location }} replace />;
	// }

	return children;
	// return auth?.roles == 1000 ? (
	// 	<Outlet />
	// ) : auth?.userName ? (
	// 	<Navigate to="/unauthorized" state={{ from: location }} replace />
	// ) : (
	// 	<Navigate to="/login" state={{ from: location }} replace />

	// return auth?.userName ? (
	// 	<Outlet />
	// ) : (
	// 	<Navigate to="" state={{ from: location }} replace />
	// );
};

export default RequireAuth;
