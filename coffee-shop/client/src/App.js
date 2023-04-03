import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import CartPage from "./pages/CartPage";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/sepet" element={<CartPage />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
