import styled from "styled-components";

export const DivStyled = styled.div`
  display: grid;
  gap: 2rem;
  padding: 2rem 2rem;
  background-color: var(--background-color);
  min-height: 73.7rem;
  color: var(--font-color);

  .secondary-header {
    font-family: var(--font-title);
    font-size: 1.8rem;
    text-transform: uppercase;
    border-bottom: 1px solid currentColor;
    padding-bottom: 0.4rem;
  }

  .input-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .form-input {
    color: var(--black);
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    border: none;
    border-radius: 8px;
    outline: none;
  }

  .half-container {
    display: flex;
    gap: 1rem;
  }

  .half-input {
    width: 50%;
  }

  .summary {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .summary-container {
    padding: 0 3rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .summary-info {
    display: flex;
    justify-content: space-between;
    font-size: 1.6rem;
  }

  .total {
    margin-top: 1rem;
  }

  .pay-btn {
    background-color: var(--btn-color);
    color: var(--font-color);
    border: none;
    border-radius: 8px;
    font-size: 1.6rem;
    padding: 0.8rem 0;
    cursor: pointer;
    transition: all 0.3s;
  }

  .pay-btn:hover {
    background-color: var(--btn-color-hover);
  }

  @media (min-width: 600px) {
    padding: 2rem 5rem;
    justify-content: center;

    .summary,
    .input-container {
      width: 50rem;
    }
  }

  @media (min-width: 1024px) {
    grid-template-columns: 2fr 1fr;
    justify-items: center;
    align-content: center;
    padding: 2rem 15rem;

    .input-container {
      gap: 2rem;
    }

    .summary,
    .input-container {
      width: 100%;
    }

    .summary {
      grid-column: 2;
      grid-row: 1;
    }
  }
`;
