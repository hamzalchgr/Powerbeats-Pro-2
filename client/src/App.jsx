import Auth from "./pages/auth/Auth";
import Cart from "./pages/cart/Cart";
import ProductPage from "./pages/productPage/ProductPage";
import Home from "./pages/home/Home";

import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Overview from "./pages/home/Overview";
import TechSpecs from "./pages/home/TechSpecs";

const App = () => {
  return (
    <>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route element={<Home />}>
          <Route index element={<Overview />} />
          <Route path="overview" element={<Overview />} />
          <Route path="techSpecs" element={<TechSpecs />} />
        </Route>
        <Route path="cart" element={<Cart />} />
        <Route path="auth" element={<Auth />} />
        <Route path="product/:id" element={<ProductPage />} />
      </Route>
    </Routes>
    </>
  );
};

export default App;
