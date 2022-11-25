import styled from "styled-components";

export const FormStyled = styled.div`
  display: flex;
  flex-direction: row;
  background-color: var(--color-light);
  align-items: flex-end;

  h2, input, select, textarea {
    margin: 1rem;
  }

  h2 {
    font-family: var(--font-title);
    font-size: 2.5rem;
    font-weight: 600;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

`