import styled from "styled-components";

export const SearchBarStyled = styled.nav`
  border-radius: 2rem;
  background-color: var(--white);
  padding-inline: 1rem;
  line-height: 3.6rem;
  margin: 0rem 0rem 1rem 0rem;

  input{
    font-size: 1.6rem;
    border: none;
    outline: none;
    width: 25rem;
    height: 2.5rem;

    ::placeholder{
      font-size: 1.2rem;
    }
  }

  .button{
    cursor: pointer;
    transform: scale(1.5);
    margin-right: 0.5rem;
  }

  @media (max-width: 768px) {
    input{
      width: 15rem;
    }
  }
`