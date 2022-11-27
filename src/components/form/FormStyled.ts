import styled from "styled-components";

export const FormStyled = styled.div`
  display: flex;
  flex-direction: row;
  background-color: var(--color-light);
  padding-inline: 5rem;
 
  h2, input, select, textarea, label {
    margin: 2.5rem 1rem;
  }

  input, select {
    width: 25rem;
    font-size: 1.8rem;
    line-height: 2.5rem;
  }

  select {
    height: 3rem;
  }

  textarea {
    width: 90%;
    height: 10rem;
  }

  label {
    font-size: 1.8rem;
    width: 16rem;
  }

  h2 {
    font-family: var(--font-title);
    font-size: 2.5rem;
    font-weight: 600;
    margin-top: 3.5rem;
    margin-bottom: 1.5rem;
  }

  hr {
    margin-bottom: 3rem;
  }

  .img{
    width: 100%;
    font-size: 1.6rem;
  }

  .error{
    font-size: 1.3rem;
    min-height: 5rem;
    display: block;
  }

  .div2 {
    display: flex;
    flex-direction: row;
  }

  .end{
    width: 100%;
    line-height: 5rem;
    text-align: center;
    margin-top: 0.8rem;
    margin-bottom: 5rem;
  }

  @media (max-width: 768px) {
    text-align: center;

    input, select {
      width: 35rem;
      font-size: 2.8rem;
      line-height: 5.5rem;
    }

    select {
      height: 5.5rem;
    }

    textarea {
      height: 11rem;
    }

    label {
      font-size: 2.8rem;
      width: 30rem;
    }

    h2 {
      font-size: 3.5rem;
    }
   
    .div2, div {
      align-items: center;
      display: flex;
      flex-direction: column;
    }
    
  }

`

