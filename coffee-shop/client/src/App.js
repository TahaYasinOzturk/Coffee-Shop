import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import CartPage from "./pages/CartPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/Login";
import OrdersPage from "./pages/OrdersPage";
import AdminPage from "./pages/AdminPage";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/cart" element={<CartPage />} />
				<Route path="/register" element={<RegisterPage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/orders" element={<OrdersPage />} />
				<Route path="/admin/*" element={<AdminPage />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
