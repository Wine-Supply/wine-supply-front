import { DownOutlined, EditOutlined, UpOutlined } from "@ant-design/icons";
import { Dispatch } from "@reduxjs/toolkit";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserId,
  getUserOrders,
  getWines,
  updateUserInfo,
} from "../../redux/action-creators";
import { State } from "../../redux/reducer";
import Footer from "../Footer/Footer";
import Navbar from "../nav/navbar";
import { ProfileContainer } from "./ProfileContainer";
import ShoppingOrder from "./ShoppingOrder";

export default function Profile() {
  const dispatch: Dispatch<any> = useDispatch();

  const orders = useSelector((state: State) => state.userOrders);
  const user = useSelector((state: State) => state.user);

  const [profilePhoto, setProfilePhoto] = useState<string>(
    user.avatar && user.avatar.length > 0
      ? user.avatar[0]
      : "https://static.vecteezy.com/system/resources/previews/002/732/063/original/full-glass-of-red-wine-icon-illustration-free-vector.jpg"
  );
  const [input, setInput] = useState({
    email: "",
    userName: "",
    isActive: user.isActive,
    // avatar: [""],
    user,
  });
  const [showHistory, setShowHistory] = useState<boolean>(false);

  useEffect(() => {
    dispatch(getUserId());
    dispatch(getUserOrders(user._id));
  }, []);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handlePhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    const file = e.target.files![0];

    setProfilePhoto(URL.createObjectURL(file));
    // setInput({ ...input, avatar: [profilePhoto] });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const updatedSuccesfully = await updateUserInfo({ ...input });
    console.log("updatedSuccesfully");

    if (updatedSuccesfully === 200) alert("User info updated succesfully");
    else alert("try again");
  };

  const handleHistory = () => setShowHistory(!showHistory);

  return (
    <>
      <Navbar />
      <ProfileContainer>
        <form className="profile-form">
          <header className="profile-header">
            <input
              onChange={handlePhoto}
              id="choose-file"
              type="file"
              accept="image/png, image/jpeg"
            />
            <div className="photo-container">
              <label className="edit-btn" htmlFor="choose-file">
                <EditOutlined />
              </label>
              <img
                className="profile-pic"
                src={profilePhoto}
                alt="Glass of wine"
              />
            </div>
            <span>{`${user.name} ${user.lastName}`}</span>
            <span>{user.email}</span>
          </header>
          <div className="input-container">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              onChange={handleInput}
              name="email"
              value={input.email}
              autoComplete="off"
              type="email"
              id="email"
              className="form-input"
              placeholder="Enter your new email"
            />
          </div>
          <div className="input-container">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              onChange={handleInput}
              name="userName"
              value={input.userName}
              autoComplete="off"
              type="text"
              id="username"
              className="form-input"
              placeholder="Enter your new username"
            />
          </div>
          <button onClick={handleSubmit} className="update-btn">
            Update info
          </button>
        </form>
        <div className="purchase-history">
          <div onClick={handleHistory} className="purchase-heading">
            <p>Purchase history</p>
            <span>
              {showHistory ? (
                <UpOutlined className="down-icon" />
              ) : (
                <DownOutlined className="down-icon" />
              )}
            </span>
          </div>
          <div className={`history ${showHistory && "history-display"}`}>
            {orders.length > 0 &&
              orders.map((order) => (
                <ShoppingOrder
                  key={order._id}
                  orderDate={order.orderDate}
                  address={order.order_address}
                  total={order.orderTotal}
                  paymentMethod={order.payment}
                  items={order.items.map((item) => item.id)}
                />
              ))}
          </div>
        </div>
      </ProfileContainer>
      <Footer />
    </>
  );
}
