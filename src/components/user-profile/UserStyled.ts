import styled from "styled-components";

export const UserStyled = styled.div`
  color: var(--font-color);
  background-color: var(--background-color);
  padding: 2.5rem;
  min-height: 73.7rem;
  form{
    display: flex;
    flex-direction: column;
    margin: 2rem;
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
    margin: 2.5rem 2rem;
  }

  input, select, p, h2 {
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

  .row{
    display: flex;
    flex-direction: row;
    padding: 3rem;
  }

  .column{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
    min-width: 20rem;
  }

  .btn {
    min-width: 15rem;
    max-width: 15rem;
    min-height: 3rem;
    max-height: 3rem;
    margin: 2rem;
  }

  label, input, span {
    line-height: 2rem;
    margin: 0.2rem;
    font-size: 1.8rem;
    min-width: 35rem;
  }

  #newData {
    display: none;
    background-color: var(--secondary-color);
    padding: 2rem 0;
  }

  .fields {
    display: grid;
    grid-template-columns: 10rem auto 10rem auto;
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }

  .margin {
    margin-left: 2.5rem;
  }

  hr {
    margin-bottom: 2rem;
    margin-inline: 2.5rem;
  }

  h2 {
    font-family: var(--font-title);
    font-size: 2.5rem;
    font-weight: 600;
    margin-top: 0;
    margin-bottom: 1rem;
  }

  @media (max-width: 768px) {
    text-align: center;

    form{
      flex-direction: column;
      align-items: center;
      text-align: center;
      justify-content: center;
    }

    .row{
      flex-direction: column;
      align-items: center;
    }

    .column{
      text-align: center;
    }

    .fields {
      display: grid;
      grid-template-columns: 1fr;
    }

    .upload_img {
      display: grid;
      grid-template-columns: 1fr;
    }
  }
`