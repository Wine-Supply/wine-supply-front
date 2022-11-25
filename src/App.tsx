import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Navbar from "./components/nav/Navbar";
import CatalogueProducts from "./components/catalogo/CatalogueProducts";
import "./App.css";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<>landing</>} /> 
        <Route path="/wine/:id" element={<>WineDetail</>}/>
        <Route path="/home" element={<Home />} />
        <Route path="/home/products" element={<CatalogueProducts />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
