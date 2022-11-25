import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Navbar from "./components/nav/Navbar";
import CatalogueProducts from "./components/catalogo/CatalogueProducts";
import Filter from "./components/filter/Filter";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Filter />
      <CatalogueProducts />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
