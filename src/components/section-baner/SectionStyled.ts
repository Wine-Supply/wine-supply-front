import styled from "styled-components";

export const SectionStyled = styled.section`
  color: var(--white);
  background-color: var(--color-light);

  .section-img {
    max-width: 100%;
  }

  .explore-img {
    filter: brightness(0.7);
  }

  .main-heading {
    font-family: var(--font-title);
    font-weight: 600;
    font-size: 2.4rem;
  }

  .explore-baner {
    position: relative;
  }

  .explore-baner-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    min-width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .wine-types {
    list-style: none;
    display: flex;
    gap: 1rem;
  }

  .wine-type {
    padding: 0 1rem 0 0;
    border-right: 2px solid var(--white);
    font-size: 1.4rem;
    font-weight: 600;
  }

  .wine-type:last-child {
    border: none;
    padding-right: 0;
  }

  .wine-type:first-child {
    padding-left: 0;
  }

  .wine-link {
    display: inline-block;

    color: var(--white);
    text-decoration: none;
    border-bottom: 2px solid transparent;
    transition: all 0.3s;
  }

  .wine-link:hover {
    border-bottom: 2px solid currentColor;
  }

  .club-baner {
    position: relative;
  }

  .sub-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: 600;
    font-size: 1.2rem;
    transition: all 0.3s;
  }

  @media (min-width: 600px) {
    padding-bottom: 9.6rem;
    .explore-baner-info {
      gap: 3rem;
    }

    .main-heading {
      font-size: 3rem;
    }

    .wine-type {
      font-size: 1.6rem;
    }

    .sub-btn {
      transform: translate(-50%, -50%) scale(1.2);
    }
  }

  @media (min-width: 1024px) {
    .explore-baner-info {
      gap: 5rem;
    }

    .main-heading {
      font-size: 4rem;
    }

    .wine-type {
      font-size: 1.8rem;
    }

    .sub-btn {
      transform: translate(-50%, -50%) scale(1.8);
    }
  }
`;