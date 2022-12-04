import styled from "styled-components";

export const Wrapper = styled.aside`
  /* font-family: Arial, Helvetica, sans-serif; */
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 500px;
  padding: 20px;
  background-color: var(--primary-color);
  color: var(--font-color);

  .checkout {
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

  .checkout:hover {
    background-color: var(--btn-color-hover);
  }
`;
