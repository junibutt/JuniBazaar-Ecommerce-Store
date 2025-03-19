import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import { CartProvider } from "./CreateContext";
import CartPage from "./CartPage";
import Home from "./Home"; // Import the Home component

function App() {
  return (
    <Router>
      <CartProvider>
        {/* Header is outside Routes so it appears on all pages */}
        <Header />

        {/* Define your routes here */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home page (default) */}
          <Route path="/cart" element={<CartPage />} /> {/* Cart page */}
        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;