import styled from "styled-components";

export const SearchBarStyled = styled.nav`
  border-radius: 2rem;
  background-color: var(--white);
  width: fit-content;
  padding-inline: 1rem;
  margin: 1.5rem;

  input{
    font-size: 1.4rem;
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

`