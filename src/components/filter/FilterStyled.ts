import styled from "styled-components";

export const FilterStyled = styled.div`
  background-color: var(--color-light);
  padding: 1.6rem 0;

  .filter-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.6rem;
  }

  .mb {
    margin-bottom: 1rem;
  }

  .options-label {
    color: var(--black);
    font-size: 1.4rem;
  }

  .options-container {
    display: flex;
    gap: 1rem;
  }

  @media (min-width: 600px) {
    .container {
      display: flex;
      justify-content: space-around;
    }
  }

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
  }
`;
