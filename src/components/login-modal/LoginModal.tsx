import React from "react";
import { useDispatch } from "react-redux";
import { showLoginModal } from "../../redux/action-creators";
import { Modal } from "../utils/utils";

type Props = {
  handleLogin: () => void;
};

export default function LoginModal({ handleLogin }: Props) {
  const dispatch = useDispatch();
  return (
    <Modal>
      <div className="overlay"></div>
      <div className="login-modal">
        <p>Please login to continue</p>
        <div className="btn-container">
          <button onClick={handleLogin} className="modal-btn">
            Login
          </button>
          <button
            onClick={() => dispatch(showLoginModal())}
            className="modal-btn"
          >
            Keep looking
          </button>
        </div>
      </div>
    </Modal>
  );
}
