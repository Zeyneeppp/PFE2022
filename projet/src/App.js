import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import List from "./pages/list/List";
import New from "./pages/new/New";
import UsersManager from "./pages/users_manger/UsersManager";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Form_Style/Login";
import "./pages/login/login.css";
import "./pages/login/Form_Style/signin.scss";
import DatabaseTable from "./pages/databasePage/DatabaseTable";
import "./pages/databasePage/datatable.css";
import SignIn from "./pages/login/Form_Style/SignIn";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/">
						<Route index element={<Home />} />
						<Route path="Login" element={<Login />} />
						<Route path="users" element={<UsersManager />}>
							<Route index element={<List />} />
							<Route path="new" element={<New />} />
							<Route path=":userID" element={<Single />} />
						</Route>
						<Route path="database" element={<DatabaseTable />} />

						<Route path="Branches">
							<Route index element={<List />} />
							<Route path=":brancheId" element={<Single />} />
							<Route path="new" element={<New />} />
						</Route>
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
