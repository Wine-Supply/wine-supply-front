import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import CatalogueProducts from "./components/catalogo/CatalogueProducts";
import Form from "./components/form/Form";
import Detail from "./components/detail/Detail";
import WineClubp from "./components/section-wine-club";
import Login from "./components/login/Login";
import "./App.css";
import SignUp from "./components/sign-up/SignUp";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home/products/detail/:id" element={<Detail />} />
        <Route path="/home/products" element={<CatalogueProducts />} />
        <Route path="/wineClubp" element={<WineClubp />} />
        <Route path="/admin" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
