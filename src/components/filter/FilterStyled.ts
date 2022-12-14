import styled from "styled-components";

export const FilterStyled = styled.div`
  background-color: var(--background-color);
  padding: 1.6rem 0;

  .filter-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    gap: 0.6rem;
  }

  .mb {
    margin-bottom: 1rem;
  }

  .options-label {
    color: var(--font-color);
    font-size: 1.4rem;
  }

  select {
    cursor: pointer;
    font-size: 1.2rem;
    padding: 1rem 1rem;
    border: none;
    border-radius: 8px;
    outline: none;
  }

  button {
    cursor: pointer;
    background-color: var(--white);
    font-size: 1.2rem;
    padding: 1rem 1rem;
    border: none;
    border-radius: 8px;
    margin: 0.5rem;

    :hover {
      background-color: #dedede;
    }
  }

  .options-container {
    display: flex;
    gap: 1rem;
  }

  div {
    display: flex;
    flex-direction: row;
  }

  @media (min-width: 600px) {
    .container {
      display: flex;
      justify-content: space-around;
      flex-direction: row;
    }
  }
  /*
  @media (min-width: 1024px) {
    .container {
      display: flex;
      justify-content: flex-end;
      gap: 4rem;
      margin-right: 5rem;
    }

    .options-label {
      font-size: 1.6rem;
    }

    .mb {
      margin-bottom: 0;
    }
  }*/

  @media (max-width: 768px) {
    div {
      display: flex;
      flex-direction: column;
    }
  }

  @media (max-width: 1142px) {
    .container {
      display: flex;
      flex-direction: column;
    }
  }
`;
