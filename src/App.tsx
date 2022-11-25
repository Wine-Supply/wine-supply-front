import Home from "./components/home/Home";
import Navbar from "./components/nav/Navbar";
import Footer from "./components/footer/Footer";
import CatalogueProducts from "./components/catalogo/CatalogueProducts";

import Form from "./components/form/Form";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Detail from "./components/detail/Detail";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<>landing</>} />
        <Route path="/home/products/detail/:id" element={<Detail />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/products" element={<CatalogueProducts />} />
        <Route path="/admin" element={<Form />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
