import "./App.css";
import Home from "./components/screen/home/Home";
import ViewAll from "./components/screen/home/ViewAll";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "./components/screen/productDetails/ProductDetails";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/view-all" element={<ViewAll />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default App;
