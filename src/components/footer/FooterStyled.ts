import styled from "styled-components";

export const FooterStyled = styled.footer`
  background-color: #141414;
  color: #fdfdfd;
  font-size: 1.6rem;
  padding: 2rem 4rem;

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

  .social-icons {
    display: flex;
    gap: 1rem;
  }
`;
