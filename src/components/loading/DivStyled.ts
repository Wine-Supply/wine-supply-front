import styled from "styled-components";

export const DivStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .loading-img,
  .error-img {
    height: 30rem;
  }

  span {
    letter-spacing: 0.5px;
    font-size: 2.6rem;
    color: var(--white);
  }

  @media (min-width: 600px) {
    .loading-img,
    .error-img {
      height: 35rem;
    }
  }
`;
