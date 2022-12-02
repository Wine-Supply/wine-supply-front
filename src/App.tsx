import Home from "./components/home/Home";
import Navbar from "./components/nav/navbar";
import Footer from "./components/Footer/Footer";
import CatalogueProducts from "./components/catalogo/CatalogueProducts";
import Form from "./components/form/Form";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Detail from "./components/detail/Detail";
import WineClubp from "./components/section-wine-club";
import CartProducts from "./components/CartProducts/CartProducts";
import { useState } from "react";
import { Drawer } from '@mui/material'

function App() {

  const [cartOpen, setCartOpen] = useState(true);

  return (
    <div className="App">
      <Navbar />
      <Drawer
     anchor='right' 
     open={cartOpen} 
     onClose= {() => setCartOpen(false)}>
      <CartProducts/>
     </Drawer>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home/products/detail/:id" element={<Detail />} />
        <Route path="/home/products" element={<CatalogueProducts />} />
        <Route path="/wineClubp" element={<WineClubp />} />
        <Route path="/admin" element={<Form />} />
       {/*  <Route path="/home/cart-products" element={<CartProducts />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
