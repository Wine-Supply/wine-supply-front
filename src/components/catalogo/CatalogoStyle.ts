import styled from "styled-components";

const CatalogoContainer = styled.div`
  background-color: var(--black);
  padding: 5px 0;

  .productCointainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 40px;
  }
`;
const TitleCategory = styled.h2`
  font-family: var(--font-title);
  color: var(--white);
  font-size: 20px;
  margin-bottom: 10px;
`;

export { CatalogoContainer, TitleCategory };
