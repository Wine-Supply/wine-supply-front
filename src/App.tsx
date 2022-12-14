import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import CatalogueProducts from "./components/catalogo/CatalogueProducts";
import Wishlist from "./components/wishlist/Wishlist";
import Checkout from "./components/checkout/Checkout";
//import Form from "./components/form/Form";
import Detail from "./components/detail/Detail";
import WineClubp from "./components/section-wine-club";
import Login from "./components/login/Login";
import SignUp from "./components/sign-up/SignUp";
import User from "./components/user-profile/User";
import Newsletter from "./components/newsletter/Newsletter";
import "./App.css";
import AdminDash from "./components/admin/AdminDash";

import Profile from "./components/profile/Profile";

import PageNotFound from "./components/PageNotFound/PageNotFound";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home/products/detail/:id" element={<Detail />} />
        <Route path="/home/products" element={<CatalogueProducts />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart/checkout" element={<Checkout />} />
        <Route path="/wineClubp" element={<WineClubp />} />
        <Route path="/wineClubp/checkout" element={<WineClubp />} />
        {/*<Route path="/admin" element={<Form />} />*/}
        <Route path="/user" element={<User />} />
        <Route path="/user/:name/profile" element={<Profile />} />
        <Route path="/newsletter" element={<Newsletter />} />

        <Route path="/admin/*" element={<AdminDash />} />


        <Route path="*"element={<PageNotFound/>} />

      </Routes>
    </div>
  );
}

// cuatro comp por ruta: crear mostrar editar borrar
// get user / get wines

export default App;
