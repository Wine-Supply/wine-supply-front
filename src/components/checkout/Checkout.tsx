import { useState, useEffect } from "react";
import { DivStyled } from "./DivStyled";
import Navbar from "../nav/navbar";
import Footer from "../Footer/Footer";
import { useSelector } from "react-redux";
import { State } from "../../redux/reducer";
import { addItemsCartDataBase, buyItems } from "../../redux/action-creators";
import Map from "../google-maps/Map";

type Address = {
  name: string;
  lastName: string;
  street: string;
  placeNumber: string;
  country: string;
  state: string;
  city: string;
  postalCode: string;
};

export default function Checkout() {
  const items = useSelector((state: State) => state.itemsStorage);
  const totalItems = useSelector((state: State) => state.totalItems);
  const price = useSelector((state: State) => state.totalPrice);
  const shippingFee = 10;
  const token = localStorage.getItem("token");

  useEffect(() => {
    addItemsCartDataBase(items)
  }, [])
  

  const [address, setAddress] = useState<Address>({
    name: "",
    lastName: "",
    street: "",
    placeNumber: "",
    country: "",
    state: "",
    city: "",
    postalCode: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };
  console.log(address);

  return (
    <>
      <Navbar />
      <DivStyled>
        <form className="input-container">
          <h2 className="secondary-header">Shipping address</h2>
          <div className="half-container">
            <input
              onChange={handleChange}
              value={address.name}
              name="name"
              className="form-input half-input"
              type="text"
              placeholder="First name"
            />
            <input
              onChange={handleChange}
              value={address.lastName}
              name="lastName"
              className="form-input half-input"
              type="text"
              placeholder="Last name"
            />
          </div>
          <input
            onChange={handleChange}
            value={address.street}
            name="street"
            className="form-input"
            type="text"
            placeholder="Street address"
          />
          <input
            onChange={handleChange}
            value={address.placeNumber}
            name="placeNumber"
            className="form-input"
            type="text"
            placeholder="Apartment/Suite/House #"
          />
          <input
            onChange={handleChange}
            value={address.country}
            name="country"
            className="form-input"
            type="text"
            placeholder="Country"
          />
          <div className="half-container">
            <input
              onChange={handleChange}
              value={address.state}
              name="state"
              className="form-input half-input"
              type="text"
              placeholder="State"
            />
            <input
              onChange={handleChange}
              value={address.city}
              name="city"
              className="form-input half-input"
              type="text"
              placeholder="City"
            />
            <input
              onChange={handleChange}
              value={address.postalCode}
              name="postalCode"
              className="form-input half-input"
              type="text"
              placeholder="Postal code"
            />
          </div>
        </form>
        <Map
          street={address.street}
          placeNumber={address.placeNumber}
          country={address.country}
          state={address.state}
          city={address.city}
          postalCode={address.postalCode}
        />
        <aside className="summary">
          <h2 className="secondary-header">Order summary</h2>
          <div className="summary-container">
            <div className="summary-info">
              <span>Items</span>
              <span>{totalItems}</span>
            </div>
            <div className="summary-info">
              <span>Shipping fee</span>
              <span>{`$${shippingFee} USD`}</span>
            </div>
            <div className="summary-info">
              <span>Subtotal</span>
              <span>{`$${price.toString().substring(0, 5)} USD`}</span>
            </div>
            <div className="summary-info total">
              <span>Total</span>
              <span>{`$${Number(price.toString().substring(0, 5)) + Number(shippingFee)} USD`}</span>
            </div>
          </div>
          <button onClick={() => buyItems(items, token)} className="pay-btn">
            Proceed to payment
          </button>
        </aside>
      </DivStyled>
      <Footer />
    </>
  );
}
