import { useState, useEffect } from "react";
import { UserStyled } from "./UserStyled";

import { ButtonSaveChanges, ButtonSubscribe } from "../utils/utils";
import { useAuth, upload } from "../login/FirebaseConfig";
import axios from "axios";
import Navbar from "../nav/navbar";
import Footer from "../Footer/Footer";
import { useSelector } from "react-redux";

function validate(input) {
  let errors = {};
  const blanks = /^\s+$/;
  const validateLetters = /^[0-9a-zA-Z ]+$/;
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const phoneformat = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;

  if (!input.name || input.name?.length === 0) {
    errors.name = "Please enter a name";
  } else if (input.name?.length < 2) {
    errors.name = "The name cannot have less than 2 characters";
  } else if (input.name?.match(blanks)) {
    errors.name = "The name cannot contain only blank spaces";
  } else if (!input.name?.match(validateLetters)) {
    errors.name = "You can only use alphanumeric characters for the name field";
  } else if (!input.lastName || input.lastName?.length === 0) {
    errors.lastName = "Please enter a lastname";
  } else if (input.lastName?.length < 3) {
    errors.lastName = "The lastname cannot have less than 3 characters";
  } else if (input.lastName?.match(blanks)) {
    errors.lastName = "The lastname cannot contain only blank spaces";
  } else if (!input.lastName?.match(validateLetters)) {
    errors.lastName =
      "You can only use alphanumeric characters for the lastname field";
  } else if (
    !input.userName ||
    input.userName?.length < 3 ||
    input.userName?.length > 14
  ) {
    errors.userName = "The User Name must have between 3 and 14 characters";
  } else if (
    input.userName?.match(blanks) ||
    !input.userName?.match(validateLetters)
  ) {
    errors.userName =
      "The User Name cannot contain only blank spaces and only use alphanumeric character";
  } else if (!input.email || !input.email?.match(mailformat)) {
    errors.email = "Please, enter a valid email address";
  } else if (!input.date_of_birth) {
    errors.date_of_birth = "Please, enter your birthday date";
  } else if (!input.phone?.match(phoneformat)) {
    errors.phone = "Please, enter a valid phone number";
  }

  return errors;
}

export default function User() {
  let userData = useSelector((state) => state.user);
  console.log(userData);
  //console.log("userData", userData)

  /*nt. El user llega sin 'phone'
  user = {
    _id: '63890f3a136a8273a37354d0', 
    name: 'Sol', 
    lastName: 'Diessler', 
    userName: 'sol.diessler@',
    address: [],
    avatar: [],
    createdAt: "2022-12-01T20:31:54.475Z",
    email: "sol.diessler@gmail.com",
    hashedPass: "firebase",
    isActive: true,
    isAdmin: "no",
    lastName: "Diessler",
    membership_id: [],
    name: "Sol",
    order: [],
    review_id: [],
    shopping_cart: [],
    updatedAt: "2022-12-01T20:31:54.475Z",
    userName: "sol.diessler@",
    whishList: [],
    __v: 0,
    _id: "63890f3a136a8273a37354d0",
  }*/

  const currentUser = useAuth();

  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [photoURL, setPhotoURL] = useState(
    "https://static.vecteezy.com/system/resources/previews/002/732/063/original/full-glass-of-red-wine-icon-illustration-free-vector.jpg"
  );

  let defaultimg =
    "https://static.vecteezy.com/system/resources/previews/002/732/063/original/full-glass-of-red-wine-icon-illustration-free-vector.jpg";

  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    name: "",
    lastName: "",
    userName: "",
    email: currentUser?.email,
    isAdmin: "",
    isActive: "",
    hashedPass: "",
    date_of_birth: "",
    phone: "",
    avatar: defaultimg,
    membership_id: [],
    address: [], //* array limit = 3
    whishList: [],
  });

  function showButton() {
    var div = document.getElementById("newData");
    if (div.style.display === "none") {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });

    setTimeout(() => {
      setErrors(
        validate({
          ...input,
          [name]: value,
        })
      );
    }, 1000);
    console.log("form:", input);
  }

  function handleChangeImage(e) {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  }

  function handleClick() {
    upload(photo, currentUser, setLoading);
  }

  useEffect(() => {
    if (currentUser?.photoURL) {
      setPhotoURL(currentUser.photoURL);
    }
  }, [currentUser]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(validate(input));

    try {
      const data = new FormData();
      data.append("name", input.name);
      data.append("lastName", input.lastName);
      data.append("userName", input.userName);
      data.append("email", input.email);
      data.append("isAdmin", input.isAdmin);
      data.append("isActive", input.isActive);
      data.append("hashedPass", input.hashedPass);
      data.append("date_of_birth", input.date_of_birth);
      data.append("avatar", input.avatar);
      data.append("membership_id", input.membership_id);
      data.append("address", input.address);
      data.append("whishList", input.whishList);

      const resp = await axios.put(
        "https://wine-supply-back-production.up.railway.app/user/update",
        data
      );

      if (resp.status >= 200 && resp.status <= 205) {
        alert("Data changed");
        setInput({
          name: "",
          lastName: "",
          userName: "",
          email: currentUser?.email,
          isAdmin: "",
          isActive: "",
          hashedPass: "",
          date_of_birth: "",
          phone: "",
          avatar: defaultimg,
          membership_id: [],
          address: [], //* array limit = 3
          whishList: [],
        });
      } else {
        alert("Something went wrong, please try again");
      }
    } catch (error) {
      console.error(error);
    }
  };

  /*<button disabled={loading || !photo} onClick={handleClick}>Upload</button>*/

  return (
    <>
      <Navbar />
      <UserStyled>
        <h2>Account Data</h2>
        <hr></hr>
        <label className="margin">
          Currently logged in as: {userData.email}{" "}
        </label>
        <div className="row">
          <img src={input.avatar} alt="Avatar" className="avatar" />
          <div className="column">
            <span>Username: {currentUser?.displayName}</span>
            <span>Email: {currentUser?.email}</span>
            <span>Name: {input.name}</span>
            <span>Lastname: {input.lastName}</span>
            <span>Birthday: {input.date_of_birth}</span>
            <span>Phone: {input.phone}</span>
          </div>
          <ButtonSubscribe className="btn" onClick={() => showButton()}>
            Change my Info
          </ButtonSubscribe>
        </div>
        <div id="newData">
          <h2>New Data</h2>
          <form onSubmit={handleSubmit}>
            <div className="upload_img">
              <label>Profile Image:</label>
              <input type="file" onChange={handleChange} />
            </div>
            <div className="fields">
              <label>Username</label>
              <input
                type="text"
                defaultValue={input.userName}
                placeholder={input.userName}
                name="userName"
                onChange={(e) => handleChange(e)}
              />
              <label>Name</label>
              <input
                type="text"
                defaultValue={input.name}
                placeholder={input.name}
                name="name"
                required={true}
                onChange={(e) => handleChange(e)}
              />
              <label>Lastname</label>
              <input
                type="text"
                defaultValue={input.lastName}
                placeholder={input.lastName}
                required={true}
                onChange={(e) => handleChange(e)}
              />
              <label>Email</label>
              <input
                type="text"
                defaultValue={input.email}
                placeholder={input.email}
                name="email"
                required={true}
                onChange={(e) => handleChange(e)}
              />
              <label>Password</label>
              <input
                type="password"
                defaultValue={input.hashedPass}
                placeholder={input.hashedPass}
                name="hashedPass"
                required={true}
                onChange={(e) => handleChange(e)}
              />
              <label>Birthday</label>
              <input
                type="date"
                defaultValue={input.date_of_birth}
                placeholder={input.date_of_birth}
                name="date_of_birth"
                onChange={(e) => handleChange(e)}
              />
              <label>Phone</label>
              <input
                type="text"
                defaultValue={input.phone}
                placeholder={input.phone}
                name="phone"
                onChange={(e) => handleChange(e)}
              />
              <label>Address</label>
              <input
                type="text"
                defaultValue={input.address}
                placeholder={input.address}
                name="address"
                onChange={(e) => handleChange(e)}
              />
            </div>
          </form>
        </div>
        <h2>+ WishList</h2>
        <h2>Historial de compra</h2>
      </UserStyled>
      <Footer />
    </>
  );
}
