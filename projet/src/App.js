import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import UsersManager from "./pages/users_manger/UsersManager";

import DatabaseTable from "./pages/databasePage/DatabaseTable";
import "./pages/databasePage/datatable.scss";

import "./pages/login/signin.scss";

import DataTableG from "./pages/databasePage/DataTableG";
import Mobilis from "./pages/databasePage/Mobilis";
import Ooredoo from "./pages/databasePage/Ooredoo";
import TryTable from "./pages/databasePage/TryTable";
import RequireAuth from "./pages/login/RequireAuth";
import Notifications from "./pages/notifications/Notifications";
import SignIn from "./pages/login/SignIn";
import Missing from "./componets/missingPage/Missing";
import Unauthorized from "./componets/Unauth/Unauthorized";
import Layout from "./componets/layout/Visitor";
import useAuth from "./hooks/useAuth";
import HomeV from "./pages/home/HomeV";
import Admin from "./componets/layout/Admin";
const ROLES = {
	User: 2000,
	Admin: 1000,
};

function App() {
	const { auth } = useAuth();

	return (
		<Routes>
			<Route path="/" element={<SignIn />} />
			<Route path="unauthorized" element={<Unauthorized />} />
			<Route
				path="home"
				element={
					<RequireAuth allowedRoles={[ROLES.Admin, ROLES.User]}>
						<Home />
					</RequireAuth>
				}
			/>

			<Route
				path="mobilis"
				element={
					<RequireAuth allowedRoles={[ROLES.Admin, ROLES.User]}>
						<Mobilis />
					</RequireAuth>
				}
			/>
			<Route
				path="users"
				element={
					<RequireAuth allowedRoles={[ROLES.Admin]}>
						<UsersManager />
					</RequireAuth>
				}
			/>
			<Route
				path="database"
				element={
					<RequireAuth allowedRoles={[ROLES.Admin]}>
						<DatabaseTable />
					</RequireAuth>
				}
			/>

			<Route
				path="Notifications"
				element={
					<RequireAuth allowedRoles={[ROLES.Admin]}>
						<Notifications />
					</RequireAuth>
				}
			/>

			<Route
				path="admin"
				element={
					<RequireAuth allowedRoles={[ROLES.User]}>
						<Admin />
					</RequireAuth>
				}
			/>

			<Route
				path="ooredoo"
				element={
					<RequireAuth allowedRoles={[ROLES.Admin, ROLES.User]}>
						<Ooredoo />
					</RequireAuth>
				}
			/>

			<Route path="/*" element={<Missing />} />
		</Routes>
	);
}

export default App;
