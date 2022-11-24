import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Navbar from "./components/nav/Navbar";

import "./App.css";
import CatalogueProducts from "./components/catalogo/CatalogueProducts";

function App() {
  return (
    <div className="App">
      <Navbar />

      <CatalogueProducts/>

      <Home />

      <Footer />
    </div>
  );
}

export default App;
