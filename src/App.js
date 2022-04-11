import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
	return (
		<div className="App">
			<Provider store={store}>
				<BrowserRouter>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />}></Route>
						<Route path="/cart" element={<Cart />}></Route>
					</Routes>
				</BrowserRouter>
			</Provider>
		</div>
	);
}

export default App;
