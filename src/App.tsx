import Home from "./components/home/Home";
import Navbar from "./components/nav/navbar";
import Footer from "./components/Footer/Footer";
import CatalogueProducts from "./components/catalogo/CatalogueProducts";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Detail from "./components/detail/Detail";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<>landing</>} /> 
        <Route path="home/products/detail/:id" element={<Detail/>}/>
        <Route path="/home" element={<Home />} />
        <Route path="/home/products" element={<CatalogueProducts />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
