import React, { useState, useEffect } from "react";
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  // signOut,
  getAdditionalUserInfo,
} from "firebase/auth";
import { FacebookOutlined, GoogleOutlined } from "@ant-design/icons";
import { auth } from "./FirebaseConfig";
import DivStyled from "./DivStyled";
import {
  loginUser,
  loginUserWithGoogle,
  loginUserWithFacebook,
} from "../../redux/action-creators";
import { Link, useNavigate } from "react-router-dom";

export type Input = {
  email: string;
  password: string;
  name?: string;
  lastName?: string;
  userName?: string;
};

export default function Login() {
  const [input, setInput] = useState<Input>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<Input>({
    email: "",
    password: "",
  });
  const [token, setToken] = useState<string | null>("");
  const navigate = useNavigate();

  useEffect(() => {
    if (token && token?.length > 0) navigate("/");
  }, [token]);

  //Existing user signing in
  const handleSignIn = async () => {
    for (const value of Object.values(errors)) {
      if (value) return;
    }
    await loginUser(input.email, input.password);
    setToken(localStorage.getItem("token"));
  };

  //Sign in with google
  const handleSignInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const userInfo = getAdditionalUserInfo(result);
      await loginUserWithGoogle(userInfo);
      setToken(localStorage.getItem("token"));
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
      return alert('Inactive user, do you want to recover it? Send a email to winesupplyback@gmail.com');
    }
  };

  const handleSignInWithFacebook = async () => {
    try {
      const provider = new FacebookAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      await loginUserWithFacebook(user);
      setToken(localStorage.getItem("token"));
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
      return alert('Inactive user, do you want to recover it? Send a email to winesupplyback@gmail.com');
    }
  };

  //Sign out
  // const handleSignOut = async () => {
  //   try {
  //     await signOut(auth);
  //   } catch (error: any) {
  //     console.error(error);
  //   }
  // };

  const validateLogin = (input: Input) => {
    let errors: Input = { email: "", password: "" };

    if (input.email.length === 0) errors.email = "Email is required";
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

  const handleChangeLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    setErrors(validateLogin({ ...input, [e.target.name]: e.target.value }));
  };

  return (
    <DivStyled>
      <form onSubmit={(e) => e.preventDefault()} className="login-container">
        <header className="login-header">
          <svg
            className="cls-1"
            id="Capa_2"
            data-name="Capa 2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1045.04 899.48"
          >
            <defs></defs>
            <polygon
              className="cls-1"
              points="189.39 7.3 0 7.3 0 20.87 17.22 25.04 27.65 32.35 38.09 44.35 48 60.52 58.96 84.52 85.56 170.09 156.52 397.56 287.48 832.7 307.83 896.35 440.35 478.96 520.7 235.3 728.87 899.48 807.65 643.83 758.61 644.35 749.22 659.48 543.65 0 328.7 660.52 173.22 160.17 154.96 92.87 151.83 59.48 160.7 37.04 175.3 24 189.91 21.39 189.39 7.3"
            />
            <polygon
              className="cls-1"
              points="902.09 8.87 902.09 20.35 913.04 22.96 926.61 34.44 934.96 53.22 932.35 77.74 915.13 128.87 964.7 132 979.83 77.22 992.35 53.22 1005.39 35.48 1023.65 23.48 1040.87 20.35 1045.04 19.83 1045.04 6.78 902.09 8.87"
            />
            <polygon
              className="cls-1"
              points="953.74 266.09 962.61 266.09 969.91 264 981.91 246.26 988.7 228.52 986.61 200.87 976.17 186.78 953.74 174.26 939.13 170.09 916.7 170.09 895.83 176.87 882.26 183.65 868.17 201.91 859.3 221.22 854.09 247.83 854.09 274.96 867.13 321.91 894.26 396.52 897.39 414.78 904.7 438.26 912 493.04 910.96 531.65 904.17 553.04 892.17 574.43 876 588 859.3 597.91 850.96 600.52 834.26 600.52 818.09 586.43 807.65 573.39 800.35 554.61 795.65 527.48 799.3 500.35 812.87 472.7 825.91 460.29 846.26 445.56 876 433.04 895.3 425.74 942.26 413.74 1004.35 399.13 1008 396.52 997.04 391.3 942.78 402.78 904.7 411.13 856.17 425.22 837.39 432.52 816.52 445.04 802.96 460.29 791.48 469.56 783.65 484.7 778.96 500.87 776.87 519.65 776.87 539.48 782.61 562.43 789.39 580.7 802.43 595.3 812.35 603.65 822.78 607.83 835.83 612.52 860.35 612.52 878.09 607.83 897.39 597.39 916.17 583.3 930.26 562.96 939.13 540 942.26 505.56 940.17 471.65 931.3 427.3 904.17 352.17 882.26 280.17 883.3 263.48 881.74 246.78 885.39 230.61 895.83 212.35 904.7 200.87 916.17 192 929.74 187.83 938.61 184.7 950.09 186.26 956.35 189.91 963.13 195.65 966.26 200.87 969.39 208.7 970.43 216.52 968.35 228.52 964.7 238.44 958.96 247.83 952.17 261.91 949.57 267.65 953.74 266.09"
            />
          </svg>
          <h2 className="login-title">wine supply</h2>
        </header>
        <div className="inputs-container">
          <div className="inputs">
            <div className="input-container">
              <label htmlFor="log-email" className="form-label">
                Email
              </label>
              <input
                onChange={handleChangeLogin}
                name="email"
                value={input.email}
                autoComplete="off"
                type="email"
                id="log-email"
                className={`form-input ${errors?.email && "error-input"}`}
                placeholder="Enter your email"
              />
              <p className={`error-text ${errors?.email && "show-error"}`}>
                {errors?.email || "something"}
              </p>
            </div>
            <div className="input-container">
              <label htmlFor="log-password" className="form-label">
                Password
              </label>
              <input
                onChange={handleChangeLogin}
                name="password"
                value={input.password}
                autoComplete="current-password"
                type="password"
                id="log-password"
                className="form-input"
                placeholder="Enter your password"
              />
              <p className={`error-text ${errors?.password && "show-error"}`}>
                {errors?.password || "something"}
              </p>
            </div>
          </div>
          <div className="btn-container">
            <button onClick={handleSignIn} className="action-btn login-btn">
              Login
            </button>
            <Link to="/signup">
              <button className="action-btn sign-up-btn">Sign up</button>
            </Link>
          </div>
          <div className="form-span">
            <span>or</span>
          </div>
          <div className="social-btn-container">
            <button onClick={handleSignInWithGoogle} className="social-btn">
              <GoogleOutlined className="social-icon" />
              <span>Login with Google</span>
            </button>
            <button onClick={handleSignInWithFacebook} className="social-btn">
              <FacebookOutlined className="social-icon" />
              <span>Login with Facebook</span>
            </button>
          </div>
        </div>
      </form>
    </DivStyled>
  );
}
