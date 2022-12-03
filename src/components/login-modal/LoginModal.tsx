import React from "react";
import { Modal } from "../utils/utils";

type Props = {
  handleLogin: () => void;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function LoginModal({ handleLogin, setShowModal }: Props) {
  return (
    <Modal>
      <div className="overlay"></div>
      <div className="login-modal">
        <p>Login to purchase products</p>
        <div className="btn-container">
          <button onClick={handleLogin} className="modal-btn">
            Login
          </button>
          <button onClick={() => setShowModal(false)} className="modal-btn">
            Keep looking
          </button>
        </div>
      </div>
    </Modal>
  );
}
