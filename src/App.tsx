import Home from "./components/home/Home";
import Navbar from "./components/nav/navbar";
import Footer from "./components/footer/Footer";
import CatalogueProducts from "./components/catalogo/CatalogueProducts";
import Filter from "./components/filter/Filter";
import Form from "./components/form/Form";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Detail from "./components/detail/Detail";
import WineClubp from "./components/section-wine-club";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Filter />
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/products/detail/:id" element={<Detail />} />
        <Route path="/products" element={<CatalogueProducts />} />
        <Route path="/wineClubp" element={<WineClubp />} />
        <Route path="/admin" element={<Form />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
