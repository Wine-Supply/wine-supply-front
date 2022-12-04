import styled from "styled-components";

const CatalogoContainer = styled.div`
  background-color: var(--black);
  padding: 5px 0;

  .productCointainer {
    margin-inline: 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 40px;
  }
`;
const TitleCategory = styled.h2`
  margin-left: 6rem;
  font-family: var(--font-title);
  color: var(--white);
  font-size: 3rem;
  margin-bottom: 10px;
`;

export { CatalogoContainer, TitleCategory };
