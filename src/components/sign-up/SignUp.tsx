import React, { useState } from "react";
import { signUpUser } from "../../redux/action-creators";
import { LeftOutlined } from "@ant-design/icons";
import DivStyled from "../login/DivStyled";
import { Input } from "../login/Login";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [signUp, setSignUp] = useState<Input>({
    name: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<Input>({
    name: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
  });
  const [result, setResult] = useState<string>("");
  const [showMessage, setShowMessage] = useState<boolean>(false);
  //Register new users
  const handleSignUp = async () => {
    for (const value of Object.values(errors)) {
      if (value) return;
    }
    const message = await signUpUser(
      signUp.name,
      signUp.lastName,
      signUp.userName,
      signUp.email,
      signUp.password
    );
    setSignUp({
      name: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
    });
    setResult(message);
    setShowMessage(true);
  };
  const validateSignUp = (input: Input) => {
    let errors: Input = { email: "", password: "" };

    if (input.name?.length === 0) errors.name = "Name is required";
    else if (input.lastName?.length === 0)
      errors.lastName = "Last name is required";
    else if (input.userName?.length === 0)
      errors.userName = "Username is required";
    else if (input.email.length === 0) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(input.email))
      errors.email = "Enter a valid email address";
    else if (input.password.length === 0)
      errors.password = "Password is required";
    else if (!/(?=.*[A-Z])/.test(input.password))
      errors.password = "At least one uppercase letter required";
    else if (!/(?=.*[0-9].*[0-9])/.test(input.password))
      errors.password = "At least two numbers required";
    else if (!/(?=.{8})/.test(input.password))
      errors.password = "At least 8 characters required";

    return errors;
  };
  const handleChangeSignUp = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignUp({ ...signUp, [e.target.name]: e.target.value });
    setErrors(validateSignUp({ ...signUp, [e.target.name]: e.target.value }));
  };
  return (
    <DivStyled>
      <form onSubmit={(e) => e.preventDefault()} className="signup-container">
        <Link to="/login">
          <button className="go-back-btn">
            <LeftOutlined />
          </button>
        </Link>
        <div className="inputs-container">
          <div className="inputs">
            <div className="input-container">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                onChange={handleChangeSignUp}
                name="name"
                value={signUp.name}
                autoComplete="off"
                type="text"
                id="name"
                className={`form-input ${errors?.email && "error-input"}`}
                placeholder="Enter your name"
              />
              <p className={`error-text ${errors?.name && "show-error"}`}>
                {errors?.name || "something"}
              </p>
            </div>
            <div className="input-container">
              <label htmlFor="last-name" className="form-label">
                Last name
              </label>
              <input
                onChange={handleChangeSignUp}
                name="lastName"
                value={signUp.lastName}
                type="text"
                id="last-name"
                className="form-input"
                placeholder="Enter your last name"
              />
              <p className={`error-text ${errors?.lastName && "show-error"}`}>
                {errors?.lastName || "something"}
              </p>
            </div>
            <div className="input-container">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                onChange={handleChangeSignUp}
                name="userName"
                value={signUp.userName}
                autoComplete="off"
                type="text"
                id="username"
                className={`form-input ${errors?.userName && "error-input"}`}
                placeholder="Enter your username"
              />
              <p className={`error-text ${errors?.userName && "show-error"}`}>
                {errors?.userName || "something"}
              </p>
            </div>
            <div className="input-container">
              <label htmlFor="sign-email" className="form-label">
                Email
              </label>
              <input
                onChange={handleChangeSignUp}
                name="email"
                value={signUp.email}
                type="email"
                id="sign-email"
                className="form-input"
                placeholder="Enter your email"
              />
              <p className={`error-text ${errors?.email && "show-error"}`}>
                {errors?.email || "something"}
              </p>
            </div>
            <div className="input-container">
              <label htmlFor="sign-password" className="form-label">
                Password
              </label>
              <input
                onChange={handleChangeSignUp}
                name="password"
                value={signUp.password}
                autoComplete="current-password"
                type="password"
                id="sign-password"
                className="form-input"
                placeholder="Enter your Password"
              />
              <p className={`error-text ${errors?.password && "show-error"}`}>
                {errors?.password || "something"}
              </p>
            </div>
            <span
              onClick={() => handleSignUp()}
              className="form-label create-label"
            >
              Create account &rarr;
            </span>
          </div>
        </div>
      </form>
      {showMessage && (
        <div>
          <div className="overlay"></div>
          <div className="message">
            <p>{result}</p>
            <button onClick={() => setShowMessage(false)} className="ok-btn">
              ok
            </button>
          </div>
        </div>
      )}
    </DivStyled>
  );
}
