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
    margin: 2.5rem 2.5rem;
  }

  input, select, p, h2 {
    width: 25rem;
    font-size: 1.8rem;
    line-height: 2.5rem;
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
  }

  .btn {
    min-width: 15rem;
    max-width: 15rem;
    min-height: 3rem;
    max-height: 3rem;
    margin: 2rem;
  }

  label, input, span {
    width: 25rem;
    font-size: 1.4rem;
    line-height: 2rem;
    margin: 0.2rem;
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