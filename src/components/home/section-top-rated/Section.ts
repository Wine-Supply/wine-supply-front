import styled from "styled-components";

export const Section = styled.section`
  background-color: var(--background-color);
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1.4rem 0 3rem 0;

  .cards-container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    background-color: var(--background-color);
    min-height: 30rem;
  }

  .secondary-heading {
    text-transform: uppercase;
    text-align: center;
    font-family: var(--font-title);
    color: var(--font-color);
    font-size: 4rem;
  }

  @media (min-width: 600px) {
    gap: 3rem;

    .cards-container {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      min-height: 40rem;
    }
  }
`;
