import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Single from "./pages/single/Single";
import List from "./pages/list/List";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route,} from "react-router-dom";


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path="/">
      <Route index element= {<Home/>} />
      <Route path='Login' element= {<Login/>} />
      <Route path='users'>
        <Route index element= {<List />}/>
        <Route path='new' element= {<New/>}/>
        <Route path=':userID' element= {<Single/>}/>
      </Route>

      <Route path='Branches'>
        <Route index element= {<List />}/>
        <Route path=':brancheId' element= {<Single/>}/>
        <Route path='new' element= {<New/>}/>
      </Route>
    </Route>
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
