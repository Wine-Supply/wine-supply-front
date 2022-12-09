import  styled  from "styled-components";

export const BannerStyled = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  background-color: var(--background-color);
  color: var(--font-color);
  font-family: var(--font-title);
  font-size: 2rem;
  padding: 1.8rem;

  div{
    margin-top: 1.5rem;
    height: 9rem;
    width: 100%;
    background-color: var(--white);
  }
  img{
    width: 20rem;
    margin-top: 0.5rem;
    border-radius: 1.2rem;
    padding: 2rem;
  }
`