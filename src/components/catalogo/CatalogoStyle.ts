import styled from "styled-components";

const CatalogoContainer = styled.div`
  background-color: var(--black);
  padding: 5px 0;

  .productCointainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 40px;
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
const TitleCategory = styled.h2`
  font-family: var(--font-title);
  color: var(--white);
  font-size: 20px;
  margin-bottom: 10px;
`;

export { CatalogoContainer, TitleCategory };
