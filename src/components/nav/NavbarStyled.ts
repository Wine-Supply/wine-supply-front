import styled from "styled-components";

export const NavbarStyled = styled.nav`
  z-index: 90;
  background-color: var(--primary-color);
  color: var(--font-color);
  font-size: 3rem;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .mui {
    size: 30;
  }

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
    color: var(--font-color);
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
    cursor: pointer;
    color: var(--font-color-hover);
  }

  .line:hover {
    border-bottom: 2px solid currentColor;
  }

  .cart {
    display: inline-block;
    position: relative;
  }

  .items-amount {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    right: 1rem;
    font-size: 1.2rem;
    width: 1rem;
    height: 1rem;
    background-color: var(--btn-color);
    padding: 1rem;
    border-radius: 50%;
  }

  .user-photo {
    width: 2.5rem;
    border-radius: 50%;
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

  @media (max-width: 280px) {
    h2 {
      font-size: 2.5rem;
    }

    .logo {
      display: none;
    }
  }
`;
