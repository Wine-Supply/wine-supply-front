
import Footer from "./components/Footer/Footer";
import AboutUs from "./components/section-about-us/AboutUs";

import Navbar from "./components/nav/navbar";


import "./App.css";
import CatalogueProducts from "./components/catalogo/CatalogueProducts";

function App() {
  return (
    <div className="App">
      <Navbar />
      <CatalogueProducts/>
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
