import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Landing from "./views/Landing/Landing";
import Home from "./views/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Detail from "./views/Detail/Detail";
import Create from "./views/Create/Create";
import Footer from "./components/Footer/Footer";

function App() {
	return (
		<div className="App">
			<div className="navs">
				<BrowserRouter>
					<NavBar></NavBar>
					<Routes>
						<Route exact path="/" element={<Landing></Landing>}></Route>
						<Route path="/home" element={<Home></Home>}></Route>
						<Route path="/detail" element={<Detail></Detail>}></Route>
						<Route path="/create" element={<Create></Create>}></Route>
					</Routes>
				</BrowserRouter>
				<Footer></Footer>
			</div>
		</div>
	);
}

export default App;
