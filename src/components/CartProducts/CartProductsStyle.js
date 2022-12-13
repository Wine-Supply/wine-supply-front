import styled from "styled-components";

export const Wrapper = styled.aside`
  /* font-family: Arial, Helvetica, sans-serif; */
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 50rem;
  /* min-width: 100%; */
  height: 100%;
  padding: 20px;
  background-color: var(--primary-color);
  color: var(--font-color);

  h2 {
    font-size: 3rem;
    font-family: var(--font-title);
  }

  .cart-info {
    display: flex;
    align-items: center;
    gap: 1.2rem;
  }

  .cart-info span,
  .no-items {
    font-size: 1.4rem;
  }

  .empty-btn {
    margin-left: auto;
  }

  .checkout,
  .empty-btn {
    align-self: center;
    text-align: center;
    width: 50%;
    border: none;
    border-radius: 8px;
    background-color: var(--btn-color);
    color: var(--font-color);
    font-size: 1.8rem;
    padding: 0.6rem 0;
    cursor: pointer;
    transition: all 0.3s;
  }

  .checkout:hover,
  .empty-btn:hover {
    background-color: var(--btn-color-hover);
  }
`;
