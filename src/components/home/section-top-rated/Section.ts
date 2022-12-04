import styled from "styled-components";

export const Section = styled.section`
  background-color: var(--background-color);
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1.4rem 0 3rem 0;

  .cards-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: var(--background-color);
    padding: 2rem 6rem;
  }

  .secondary-heading {
    text-transform: uppercase;
    text-align: center;
    font-family: var(--font-title);
    color: var(--font-color);
    font-size: 3rem;
  }

  @media (min-width: 600px) {
    gap: 3rem;

    .cards-container {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      gap: 2rem;
    }
  }
`;
