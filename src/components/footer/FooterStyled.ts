import styled from "styled-components";

export const FooterStyled = styled.footer`
  background-color: var(--primary-color);
  color: var(--font-color);
  font-size: 1.2rem;
  padding: 2rem 2rem;
  transition: all 0.3s;

  .footer-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .social-copyright {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .business-info {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }

  .social-icons {
    display: flex;
    gap: 1rem;
    font-size: 1.6rem;
  }

  .social-icon:link,
  .social-icon:visited {
    display: inline-block;
    color: var(--font-color);
    transition: all 0.3s;
  }

  .social-icon:hover,
  .social-icon:active {
    transform: scale(1.2);
    color: var(--font-color-hover);
  }

  @media (min-width: 600px) {
    font-size: 1.4rem;
    padding: 2rem 4rem;
    transition: all 0.3s;
  }

  @media (min-width: 1024px) {
    font-size: 1.4rem;
    padding: 2rem 6rem;
    transition: all 0.3s;
  }
`;
