import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import CatalogueProducts from "./components/catalogo/CatalogueProducts";
import Checkout from "./components/checkout/Checkout";
import Form from "./components/form/Form";
import Detail from "./components/detail/Detail";
import WineClubp from "./components/section-wine-club";
import Login from "./components/login/Login";
import SignUp from "./components/sign-up/SignUp";
import User from "./components/user-profile/User";
import "./App.css";
import Error from "./components/error/Error";
import Newsletter from "./components/newsletter/Newsletter";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home/products/detail/:id" element={<Detail />} />
        <Route path="/home/products" element={<CatalogueProducts />} />
        <Route path="/cart/checkout" element={<Checkout />} />
        <Route path="/wineClubp" element={<WineClubp />} />
        <Route path="/admin" element={<Form />} />
        <Route path="/user" element={<User />} />
        <Route path="*" element={<Error />} />
        <Route path="/newsletter" element={<Newsletter />} />
      </Routes>
    </div>
  );
}

export default App;
