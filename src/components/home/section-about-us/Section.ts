import styled from "styled-components";

export const Section = styled.section`
  background-color: var(--background-color);
  color: var(--font-color);
  padding: 2rem 0;
  transition: all 0.3s;
  padding-bottom: 9.6rem;

  .container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }

  .info-container {
    display: grid;
    justify-items: center;
    gap: 0.4rem;
  }

  .secondary-header {
    font-family: var(--font-title);
    font-size: 2.6rem;
    color: var(--font-color);
  }

  .section-text {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }

  .section-text p {
    line-height: 1.6;
    font-size: 1.4rem;
  }

  .section-img {
    max-width: 100%;
  }

  .our-history-img {
    grid-row: 2;
  }

  @media (min-width: 600px) {
    transition: all 0.3s;

    .secondary-header {
      font-size: 3rem;
    }

    .section-text p {
      line-height: 1.6;
      font-size: 1.6rem;
    }

    .section-text {
      max-width: 100%;
    }

    .section-img {
      max-width: 55rem;
    }
  }

  @media (min-width: 1024px) {
    padding: 2.5rem 5rem 9.6rem 5rem;
    transition: all 0.3s;

    .container {
      gap: 5rem;
    }

    .grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-content: center;
      align-items: center;
      gap: 3rem;
    }

    .section-text {
      align-self: start;
    }

    .secondary-header {
      font-size: 3.2rem;
    }

    .section-img {
      max-width: 100%;
    }

    .our-history-img {
      grid-row: 1;
    }
  }
`;
