import styled from "styled-components";

export const FormStyled = styled.div`
  display: flex;
  flex-direction: row;
  background-color: var(--background-color);
  color: var(--font-color);
  padding-inline: 5rem;
  min-height: 73.7rem;
 
  h2, input, select, textarea, label {
    margin: 1.5rem 1rem;
  }

  input, select {
    width: 25rem;
    font-size: 1.8rem;
    line-height: 1.5rem;
    min-height: 4rem;
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    border: none;
    border-radius: 8px;
    outline: none;
  }


  select {
    height: 3rem;
  }

  textarea {
    padding: 1.2rem 1.6rem;
    font-size: 1.5rem;
    width: 90%;
    height: 10rem;
    border: none;
    border-radius: 8px;
    outline: none;
  }

  label {
    font-size: 1.8rem;
    width: 16rem;
  }

  h2 {
    font-family: var(--font-title);
    font-size: 2.5rem;
    font-weight: 600;
    margin-top: 3rem;
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
    display: flex;
    flex-direction: column;
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
      font-size: 2.5rem;
      max-width: 40rem;
      min-height: 30rem;
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

