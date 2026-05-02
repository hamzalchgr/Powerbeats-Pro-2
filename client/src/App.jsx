import Auth from "./pages/auth/Auth";
import Cart from "./pages/cart/Cart";
import ProductPage from "./pages/productPage/ProductPage";
import Home from "./pages/home/Home";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </>
  );
};

export default App;
