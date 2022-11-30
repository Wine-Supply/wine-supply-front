import styled from "styled-components";
import loginImg from "../../images/login-img.jpg";

const DivStyled = styled.div`
  position: relative;
  height: 100vh;
  background-image: linear-gradient(
      rgba(34, 34, 34, 0.6),
      rgba(34, 34, 34, 0.6)
    ),
    url(${loginImg});
  background-size: cover;

  .error-text {
    color: red;
    font-size: 1.4rem;
    opacity: 0;
  }

  .show-error {
    opacity: 1;
  }

  .inputs {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  }

  .login-container {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 80%;
    padding: 1.6rem 1.6rem;
    background-color: rgba(100, 100, 100, 0.5);
  }

  .login-header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1.6rem;
  }

  .login-title {
    text-transform: uppercase;
    font-family: var(--font-title);
    font-size: 3rem;
    color: var(--white);
  }

  .cls-1 {
    fill: #fdfdfd;
    width: 3.4rem;
  }

  .form-input {
    color: var(--color-dark);
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    border: none;
    border-radius: 8px;
    outline: none;
  }

  .inputs-container {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    padding: 0 2rem;
  }

  .input-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .form-label {
    font-size: 1.6rem;
    letter-spacing: 0.5px;
    color: var(--white);
  }

  .form-span {
    display: flex;
    align-items: center;
    gap: 1rem;
    align-self: center;
    color: var(--white);
    letter-spacing: 0.5px;
  }

  .form-span span {
    font-size: 1.8rem;
  }

  .form-span::before,
  .form-span::after {
    content: "";
    display: block;
    width: 10rem;
    height: 1.7px;
    background-color: var(--white);
  }

  .btn-container {
    display: flex;
    justify-content: center;
    gap: 3rem;
  }

  .action-btn {
    font-size: 1.6rem;
    letter-spacing: 0.5px;
    cursor: pointer;
    color: var(--white);
    padding: 0.5em 0;
    width: 10rem;
    border: none;
    border-radius: 6px;
    transition: all 0.3s;
  }

  .login-btn {
    background-color: var(--red);
    font-weight: bold;
  }

  .login-btn:hover {
    background-color: #793a3a;
  }

  .sign-up-btn {
    background-color: var(--white);
    color: var(--color-dark);
    font-weight: bold;
  }

  .sign-up-btn:hover {
    color: var(--white);
    background-color: transparent;
    box-shadow: inset 0 0 0 3px var(--white);
  }

  .social-btn-container {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  .social-btn {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    font-size: 1.6rem;
    letter-spacing: 0.5px;
    border: none;
    border-radius: 6px;
    background-color: var(--white);
    color: var(--color-dark);
    padding: 0.6rem 1rem;
    cursor: pointer;
    transition: all 0.3s;
  }

  .social-btn:hover {
    transform: scale(1.02);
  }

  .social-icon {
    font-size: 2.6rem;
    color: var(--red);
  }

  @media (min-width: 600px) {
    .login-container {
      width: 40rem;
      padding: 2rem 2rem;
    }

    .inputs-container {
      gap: 3.2rem;
    }

    .social-btn-container {
      gap: 3.4rem;
    }
  }

  @media (min-width: 1024px) {
    .login-container {
      width: 50rem;
      padding: 3rem 4.6rem;
    }

    .inputs-container {
      gap: 3.6rem;
      padding: 0 4rem;
    }

    .social-btn-container {
      gap: 3.6rem;
    }
  }
`;

export default DivStyled;
