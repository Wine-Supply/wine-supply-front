import styled from "styled-components";

export const UserStyled = styled.div`
  form{
    display: flex;
    flex-direction: row;
  }

  img {
    margin: 2.5rem;
    min-width: 120px;
    min-height: 120px;
    max-width: 120px;
    max-height: 120px;
    border: 1px solid black;
    border-radius: 50%;
  }

  h2, input, select, textarea, label {
    margin: 2.5rem 1rem;
  }

  input, select, p, h2 {
    width: 25rem;
    font-size: 1.8rem;
    line-height: 2.5rem;
  }

  @media (max-width: 768px) {
    text-align: center;

    form{
      flex-direction: column;
    }

  }
`