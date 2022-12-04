// import { useState, useEffect } from "react";
import { DivStyled } from "./DivStyled";
import Navbar from "../nav/navbar";
import Footer from "../Footer/Footer";
import { useSelector } from "react-redux";
import { State } from "../../redux/reducer";
import { buyItems } from "../../redux/action-creators";

export default function Checkout() {
  const items = useSelector((state: State) => state.itemsStorage);
  const totalItems = useSelector((state: State) => state.totalItems);
  const price = useSelector((state: State) => state.totalPrice);
  const shippingFee = 10;
  const token = localStorage.getItem("token");
  console.log(items);

  return (
    <>
      <Navbar />
      <DivStyled>
        <form className="input-container">
          <h2 className="secondary-header">Shipping address</h2>
          <div className="half-container">
            <input
              className="form-input half-input"
              type="text"
              placeholder="First name"
            />
            <input
              className="form-input half-input"
              type="text"
              placeholder="Last name"
            />
          </div>
          <input
            className="form-input"
            type="text"
            placeholder="Street address"
          />
          <input
            className="form-input"
            type="text"
            placeholder="Apartment/Suite/House #"
          />
          <input className="form-input" type="text" placeholder="Country" />
          <div className="half-container">
            <input
              className="form-input half-input"
              type="text"
              placeholder="State"
            />
            <input
              className="form-input half-input"
              type="text"
              placeholder="City"
            />
          </div>
        </form>
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
              <span>{`$${price} USD`}</span>
            </div>
            <div className="summary-info total">
              <span>Total</span>
              <span>{`$${price + shippingFee} USD`}</span>
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
