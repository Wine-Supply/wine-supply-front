import styled from "styled-components";

export const PageNotFoundStyled = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--background-color);
  min-height: 100vmin;
  align-items: center;
  
  div {
    background-color: var(--primary-color);
    display: flex;
    flex-direction: column;
    width: fit-content;
    font-family: var(--font-title);
    color: var(--font-color);
    font-weight: 600;
    font-size: 2rem;
    text-align: center;
    padding: 2.5rem;
    margin-inline: 4rem;
    margin-top: 5rem;
    border-radius: 2rem;
  }

  h2 {
    font-size: 4.5rem;
    margin: 3rem;
    color: var(--font-color-hover)
  }

  .btn {
    transform: scale(1.5);
    margin-bottom: 0;
    margin-top: 1rem;
    align-items: center;
  }

  .section-img {
    max-width: 50rem;
  }

  @media (max-width: 920px) {
    min-height: 100vmax;
  }

`