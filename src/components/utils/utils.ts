import styled from "styled-components";

const ButtonBuyNow = styled.button`
  background-color: var(--black);
  color: var(--white);
  border: 0.1rem solid var(--black);
  border-radius: 5rem;
  padding: 1rem;
  width: 10rem;
  margin: 0.2rem;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;

  :hover {
    cursor: pointer;
    background-color: var(--white);
    color: var(--black);
  }
`;

const ButtonAddToCart = styled.button`
  background-color: var(--btn-color);
  color: var(--font-color);
  border: 0.1rem solid var(--btn-color);
  border-radius: 5rem;
  padding: 0.7rem 1rem;
  width: 10rem;
  margin: 0.2rem;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;

  :hover {
    cursor: pointer;
    background-color: var(--btn-color-hover);
    border-color: var(--btn-color-hover);
  }
`;
const ButtonSaveChanges = styled.button`
  background-color: var(--primary-color);
  color: var(--font-color);
  border: 0.1rem solid var(--primary-color);
  padding: 0.7rem 1rem;
  min-width: 10rem;
  height: 4.5rem;
  margin: 0.2rem;
  text-align: center;

  :hover {
    cursor: pointer;
    color: var(--primary-color);
    background-color: var(--font-color);
  }

  :disabled {
    cursor: auto;
    background-color: transparent;
    color: #727272;
    border-color: #727272;
  }
`;
const ButtonDeleteAccount = styled.button`
  background-color: var(--white);
  color: var(--black);
  border: 0.1rem solid var(--color-light);
  padding: 0.7rem 1rem;
  min-width: 10rem;
  height: 4.5rem;
  width: 10rem;
  margin: 0.2rem;
  text-align: center;

  :hover {
    cursor: pointer;
    background-color: var(--color-light);
  }
`;
const ButtonSubscribe = styled.button`
  background-color: var(--btn-color2);
  color: var(--font-color);
  border: 0.1rem solid var(--btn-color2);
  padding: 0.6rem;
  width: 9.5rem;
  margin: 0.2rem;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;

  :hover {
    cursor: pointer;
    color: var(--primary-color);
    background-color: var(--btn-color-hover2);
  }
`;
const ButtonSubscribeRed = styled.button`
  background-color: var(--red);
  color: var(--white);
  border: 0.1rem solid var(--red);
  padding: 0.5rem;
  width: 8rem;
  margin: 0.2rem;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;

  :hover {
    cursor: pointer;
    background-color: var(--white);
    color: var(--red);
  }
`;
const ButtonToScrollUp = styled.button`
  position: fixed;
  bottom: 10rem;
  right: 1rem;
  background-color: var(--red);
  color: var(--white);
  border: 0.1rem solid var(--white);
  border-radius: 50%;
  padding: 0.5rem;
  width: 4rem;
  height: 4rem;
  font-weight: 600;
  text-align: center;
  box-shadow: 0 8px 24px 0 rgba(0, 0, 0, 0.6);
  transition: all 0.2s;

  :hover {
    cursor: pointer;
    color: var(--red);
    background-color: var(--color-light);
    border-color: var(--red);
  }
`;

const Modal = styled.div`
  .login-modal p {
    color: var(--black);
  }

  .login-modal {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30rem;
    height: 18rem;
    background-color: var(--white);
    border-radius: 8px;
    font-size: 2.6rem;
    text-align: center;
    padding: 2rem 2rem;
    /* z-index: 1; */
    transition: all 0.3s;
  }

  .btn-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.2rem;
  }

  .modal-btn {
    color: var(--white);
    background-color: var(--black);
    font-size: 1.8rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    padding: 0.6rem 2.4rem;
  }

  .modal-btn:hover {
    background-color: rgb(30, 30, 30);
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
    transition: all 0.3s;
  }
`;

//style={ {transform: "scale(0.5)"}}

export {
  ButtonBuyNow,
  ButtonAddToCart,
  ButtonSaveChanges,
  ButtonDeleteAccount,
  ButtonSubscribe,
  ButtonSubscribeRed,
  ButtonToScrollUp,
  Modal,
};
