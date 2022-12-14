import styled from "styled-components";

const CatalogoContainer = styled.div`
  background-color: var(--background-color);
  padding: 5px 0;

  .productCointainer {
    position: relative;
    margin-inline: 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 40px;
    min-height: 60rem;
  }

  .no-wines {
    font-size: 3rem;
    text-align: center;
    color: var(--white);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media (max-width: 920px) {
    .productCointainer {
      margin-bottom: 6rem;
      align-items: center;
      display: flex;
      flex-direction: column;
    }
  }

  @media (max-width: 768px) {
    .productCointainer {
      margin-bottom: 6rem;
      align-items: center;
      display: flex;
      flex-direction: column;
    }
  }
`;
const TitleCategory = styled.h2`
  margin-left: 6rem;
  font-family: var(--font-title);
  color: var(--font-color);
  font-size: 3rem;
  margin-bottom: 10px;
  margin-top: 2.5rem;
`;

export { CatalogoContainer, TitleCategory };
