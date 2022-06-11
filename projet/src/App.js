import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import List from "./pages/list/List";
import New from "./pages/new/New";
import UsersManager from "./pages/users_manger/UsersManager";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Form_Style/Login";
import "./pages/login/Form_Style/login.css";
import Form from "./pages/form/Form";
import "./pages/login/login.css";
import "./pages/login/Form_Style/signin.scss";
import DatabaseTable from "./pages/databasePage/DatabaseTable";
import "./pages/databasePage/datatable.css";
import SignIn from "./pages/login/Form_Style/SignIn";
import Data from "./Data";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/">
						<Route index element={<Login />} />
						<Route exact path="Home" element={<Home />} />
						<Route exact path="users" element={<UsersManager />}>
							<Route index element={<List />} />
							<Route exact path="new" element={<New />} />
							<Route exact path=":userID" element={<Single />} />
						</Route>
						<Route exact path="database" element={<DatabaseTable />} />

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
