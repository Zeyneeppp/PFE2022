import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import List from "./pages/list/List";
import New from "./pages/new/New";
import UsersManager from "./pages/users_manger/UsersManager";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Form_Style/Login";
import "./pages/login/Form_Style/login.css";

import "./pages/login/Form_Style/login.css";
import "./pages/login/Form_Style/signin.scss";
import DatabaseTable from "./pages/databasePage/DatabaseTable";
import "./pages/databasePage/datatable.scss";
import SignIn from "./pages/login/Form_Style/SignIn";

import Mobilis from "./pages/databasePage/Mobilis";
import Ooredoo from "./pages/databasePage/Ooredoo";
import TryTable from "./pages/databasePage/TryTable";
import Notifications from "./pages/notifications/Notifications";
import DataTableG from "./pages/databasePage/DataTableG";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/">
						<Route index element={<SignIn />} />
						<Route exact path="Home" element={<Home />} />
						<Route exact path="users" element={<UsersManager />}>
							<Route index element={<List />} />
							<Route exact path="new" element={<New />} />
							<Route exact path=":userID" element={<Single />} />
						</Route>
						<Route exact path="global" element={<DataTableG />} />
						<Route exact path="database" element={<DatabaseTable />} />
						<Route exact path="try" element={<TryTable />} />
						<Route exact path="mobilis" element={<Mobilis />} />
						<Route exact path="Notifications" element={<Notifications />} />
						<Route exact path="ooredoo" element={<Ooredoo />} />
						<Route exact path="Branches">
							<Route index element={<List />} />
							<Route exact path=":brancheId" element={<Single />} />
							<Route exact path="new" element={<New />} />
						</Route>
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
