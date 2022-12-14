import styled from "styled-components";

export const ContactUsFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--background-color);
  color: var(--font-color);
  padding-bottom: 5rem;
  text-align: center;

  h2 {
    text-align: center;
    font-family: var(--font-title);
    font-size: 2.8rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  label {
    font-size: 1.8rem;
    width: 90%;
    margin: 1rem;
  }

  input {
    width: 90%;
    margin-inline: 1rem;
    font-size: 1.8rem;
    line-height: 1.5rem;
    min-height: 4rem;
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    border: none;
    border-radius: 8px;
    outline: none;
  }

  textarea {
    padding: 1.2rem 1.6rem;
    font-size: 1.5rem;
    width: 90%;
    height: 10rem;
    border: none;
    border-radius: 8px;
    margin-inline: 1rem;
    outline: none;
  }

  button {
    transform: scale(0.9);
    margin-left: -1rem;
    margin-top: 1.5rem;
  }

  hr {
    align-self: stretch;
    margin-bottom: 3rem;
  }

  @media (min-width: 1024px) {
    width: 50%;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: var(--background-color);
`;
