import styled from "styled-components"

const DetailStyled = styled.div`
  display: flex;
  flex-direction: row;
  background-color: var(--color-light);
  transition: all 0.3s;
  padding-top: 6rem;
  padding-bottom: 10rem;

  span{
    font-size: 2.5rem;
  }

  .bg-container {
    position: relative;
    top: 0;
    left: 0;
  }

  .bg {
    position: relative;
    opacity: 0.4;
    left: -3rem;
    max-width: auto;
    max-height: 40rem;
    object-fit: none;
  }

  .img {
    position: absolute;
    top: 1rem;
    left: 1rem;
    margin-bottom: 5rem;
    margin-left: 3rem;
    object-fit: cover;
    width: 10rem;
    transform: rotate(-10deg)
  }

  .body {
    margin-top: 0.5rem;
  }

  .column {
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    min-width: 20rem;
    margin-right: 8rem;
    margin-left: 1rem;
  }

  .price {
    font-weight: 600;
    font-size: 3rem;
  }

  .add{
    font-family: var(--font-title);
    font-weight: 600;
    font-size: 2.8rem;
    margin-top: 0.8rem;
    margin-bottom: 3rem;
  }

  .btns {
    margin-left: 1rem;
    margin-top: -1.5rem;
    display: flex;
    flex-direction: column;
  }

  @media(max-width: 768px){
    padding-top: 0;
    flex-direction: column;
    text-align: center;
    align-items: center;

    .bg-container {
      height: 32rem;
    }
    .bg {
      opacity: 0%;
    }
    .img {
      top: 6.5rem;
      left: 0;
      width: 9rem;
      transform: none;
    }
    .body {
      margin-right: 4rem;
    }
    .column {
      margin-top: 2rem;
      min-width: 20rem;
      margin: 0;
    }

    .btns {
      margin-left: 3.5rem;
      display: flex;
      flex-direction: column;
    }

  }
`
const WineData = styled.div`
  margin-top: 5rem;
  margin-left: 5rem;
  transition: all 0.3s;
  font-size: 1.4rem;

  h1 {
    font-family: var(--font-title);
    font-size: 4rem;
    width: max-content;
    margin-right: 2rem;
  }
  
  h3 {
    padding: 0.5rem;
  }

  .wine, .data{
    display: flex;
    flex-direction: row;
  }

  .wine {
    object-fit: contain;
  }

  .data{
    justify-content: space-between;
    margin: 2rem 7rem 2rem 0;
    padding: 1rem 2rem;
    border: 0.1rem solid var(--black);
  }

  .description{
    margin: 0 2rem 1rem 0;
  }

  @media(max-width: 768px){
    margin-top: 1.5rem;
    h1 {
      width: auto;
    }
    .wine {
      display: block;
      width: auto;
      margin-right: 3rem;
    }
    .data{
      margin: 2rem 7rem 2rem 3rem;
    }
    .description{
      margin-right: 4rem;
    }
    
  }
`

export {
  DetailStyled,
  WineData,
}