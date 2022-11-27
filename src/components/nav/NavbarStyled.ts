import styled from "styled-components";

export const NavbarStyled = styled.nav`
  z-index: 90;
  background-color: var(--black);
  color: var(--color-light);
  font-size: 3rem;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ul {
    list-style-type: none;
  }

  div {
    z-index: 90;
    display: flex;
    flex-direction: row;
  }

  h2 {
    z-index: 90;
    font-family: var(--font-title);
    font-size: 3rem;
  }

  .logo {
    z-index: 90;
    margin-inline: 2rem;
    width: 3rem;
  }

  .links {
    z-index: 90;
    display: none;
  }

  .link {
    text-decoration: none;
    color: var(--color-light);
    font-size: 1.8rem;
    margin-inline-end: 2.5rem;
    line-height: 5rem;
    display: block;
  }

  .links.active {
    width: 100%;
    display: block;
    position: absolute;
    top: 20%;
    text-align: center;
  }

  .links.active > ul > li > a {
    margin-top: 1rem;
    font-size: 3.5rem;
    padding: 2rem;
  }

  .link:hover {
    color: var(--white);
    text-decoration: underline;
  }

  @media (min-width: 768px) {
    .burguer {
      display: none;
    }
    .links {
      display: block;
    }
    li,
    .link {
      display: inline;
    }
  }
`;
