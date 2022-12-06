import styled from "styled-components";

export const NewsletterStyled = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--background-color);
  min-height: 100vmin;
  align-items: center;
  
  div {
    background-color: var(--primary-color);
    width: fit-content;
    font-family: var(--font-title);
    color: var(--font-color);
    font-weight: 600;
    font-size: 2rem;
    text-align: center;
    padding: 2.5rem;
    margin-inline: 4rem;
    margin-top: 15rem;
    border-radius: 2rem;
  }

  h2 {
    font-size: 4.5rem;
    margin: 3rem;
    color: var(--font-color-hover)
  }

  p{
    margin: 2rem 3rem;
  }

  .btn {
    transform: scale(1.5);
    margin-bottom: 3.5rem;
    margin-top: 2rem;
  }

  .welcome{
    font-size: 2.4rem;
  }

  @media (max-width: 920px) {
    min-height: 100vmax;
  }

`