import styled from "styled-components";

export const ListContainer = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem 0;
  background-color: var(--background-color);
  color: var(--font-color);
  min-height: 100vh;

  .no-items-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2.6rem;
  }

  
  .btn-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }

  .empty-btn {
    width: 100%;
    border: none;
    border-radius: 8px;
    background-color: var(--btn-color);
    color: var(--font-color);
    font-size: 1.8rem;
    padding: 0.6rem 1rem;
    cursor: pointer;
    transition: all 0.3s;
  }

  .empty-btn:hover {
    background-color: var(--btn-color-hover);
  }

  .wishlist-header {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }

  .wishlist-title {
    font-family: var(--font-title);
    font-size: 3rem;
  }

  .header-text {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }

  @media (min-width: 600px) {
    gap: 3rem;
    .empty-btn {
      font-size: 2rem;
      padding: 1rem 1.4rem;
    }

    .wishlist-title {
      font-size: 3.6rem;
    }

    .header-text {
      font-size: 2.4rem;
      margin-bottom: 3rem;
    }
  }

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    align-items: stretch;
    gap: 4rem;
    padding: 2rem 4rem;

    .btn-container {
      flex-direction: row;
      grid-column: 1 / -1;
    }

    .empty-btn {
      font-size: 2rem;
      width: 30rem;
    }

    .no-items-text {
      grid-column: 1 / -1;
      font-size: 3rem;
    }

    .wishlist-header {
      grid-column: 1/-1;
    }
  }
`;

export const CardContainer = styled.article`
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  justify-items: center;
  max-width: 90%;
  padding: 2rem 1.6rem;
  background-color: var(--primary-color);
  border-radius: 8px;

  .card-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;
    font-size: 1.6rem;
  }

  .card-name {
    font-family: var(--font-title);
    font-size: 2.6rem;
  }

  .card-info {
    display: flex;
    gap: 2rem;
    font-size: 3rem;
  }

  .rating-span {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .rating {
    font-size: 2rem;
  }

  .card-description {
    margin-right: 2rem;
    margin-left: 2rem;
    font-size: 1.4rem;
    line-height: 1.4;
    letter-spacing: 0.5px;
    margin-bottom: 2rem;
    text-overflow: ellipsis;
    height: 13rem;
    overflow: hidden;
  }

  .card-btns {
    padding: 1rem;
    display: flex;
    justify-content: space-between;
  }

  .card-btns button {
    letter-spacing: 0.5px;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    padding: 0.6rem 0;
    width: 45%;
    font-size: 1.4rem;
    transition: all 0.3s;
  }

  .add-btn {
    position: relative;
    background-color: var(--btn-color);
    color: var(--white);
  }

  .add-btn:hover {
    background-color: var(--btn-color-hover);
  }

  .remove-btn {
    background-color: var(--white);
    /* color: var(--font-color); */
  }

  .remove-btn:hover {
    color: var(--white);
    background-color: transparent;
    box-shadow: inset 0 0 0 2px currentColor;
  }

  .card-img {
    width: 7.5rem;
    max-width: min-content;
    height: 20rem;
    object-fit: cover;
  }

  .added-to-cart {
    position: absolute;
    top: 50%;
    right: -2.6rem;
    transform: translate(-50%, -50%);
    font-size: 1.6rem;
    opacity: 0;
    transition: all 0.3s;
  }

  .active {
    opacity: 1;
  }

  @media (min-width: 600px) {
    /* gap: 3rem; */
    .card-name {
      font-size: 3rem;
      text-align: center;
    }

    .card-info {
      font-size: 4rem;
    }

    .card-description {
      font-size: 1.8rem;
      line-height: 1.8;
    }

    .card-btns button {
      padding: 0.8rem 0;
      font-size: 1.8rem;
    }

    .card-img {
      width: 100%;
    }

    .remove-btn:hover {
      box-shadow: inset 0 0 0 4px currentColor;
    }

    .added-to-cart {
      top: 50%;
      right: 0;
      transform: translate(-50%, -50%);
    }
  }

  @media (min-width: 1024px) {
    max-width: 100%;
  }
`;

export const Modal = styled.div`
  .wishlist-modal p {
    color: var(--black);
    line-height: 1.6;
  }

  .wishlist-modal {
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
    /* height: 18rem; */
    background-color: var(--white);
    border-radius: 8px;
    font-size: 2.6rem;
    text-align: center;
    padding: 2rem 2rem;
    /* z-index: 1; */
    transition: all 0.3s;
  }

  .wine-img {
    height: 30rem;
    max-width: 28rem;
    object-fit: cover;
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

  .modal-btn {
    color: var(--white);
    background-color: var(--black);
    font-size: 1.8rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    padding: 0.6rem 0;
    width: 100%;
  }

  .modal-btn:hover {
    background-color: rgb(30, 30, 30);
  }
`;
