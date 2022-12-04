import styled from "styled-components";

export const Section = styled.section`
  background-color: var(--primary-color);
  color: var(--font-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
  padding: 1.6rem 0;

  .text-container {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    text-align: center;
  }

  .text-container p {
    font-size: 1.2rem;
  }

  .secondary-heading {
    text-transform: uppercase;
    font-family: var(--font-title);
    font-size: 2rem;
  }

  .email-input {
    outline: none;
    padding: 0.2rem 0.4rem;
  }

  .email-input::placeholder {
    color: var(--color-dark);
  }

  @media (min-width: 600px) {
    flex-direction: row;
    gap: 5rem;

    .text-container {
      text-align: right;
    }

    .text-container p {
      font-size: 1.4rem;
    }

    .secondary-heading {
      font-size: 2.2rem;
    }

    .email-input {
      padding: 0.4rem 0.8rem;
    }
  }

  @media (min-width: 1024px) {
    .text-container {
      text-align: right;
    }

    .text-container p {
      font-size: 1.8rem;
    }

    .secondary-heading {
      font-size: 3.6rem;
    }

    .email-input {
      padding: 0.6rem 1rem;
    }
  }
`;
