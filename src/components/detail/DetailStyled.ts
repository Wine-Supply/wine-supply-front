import styled from "styled-components"

const Container = styled.div `
  display: flex;
  flex-direction: column;
  background-color: var(--background-color);
  min-height: 73.7rem;
  align-items: center;
`

const DetailStyled = styled.div`
  color: var(--font-color);
  display: flex;
  flex-direction: row;
  background-color: var(--background-color);
  transition: all 0.3s;
  padding-top: 6rem;
  padding-bottom: 7rem;
  //min-height: 73.7rem;
  span{
    font-size: 2.5rem;
  }

  /* .bg-container {
    position: relative;
    top: 0;
    left: 0;
  } */

  .bg {
    margin-left: 2rem;
    margin-top: 5rem;
    min-width: 25rem;
    min-height: 30rem;
    max-height: 30rem;
    max-width: 25rem;
    border-radius: 2rem;
    background-color: var(--secondary-color);
    text-align: center;
    /* position: relative;
    opacity: 0.4;
    left: -3rem;
    max-width: auto;
    max-height: 40rem;
    object-fit: none; */
  }

  .img {
    //position: absolute;
    //top: 1rem;
    //left: 1rem;
    //margin-bottom: 5rem;
    //margin-left: 3rem;
    padding: 2rem;
    max-width: 25rem;
    min-height: 30rem;
    max-height: 30rem;
    object-fit: cover;
    //transform: rotate(-10deg)
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

    /* .bg-container {
      height: 32rem;
    }
    .bg {
      opacity: 0%;
    } */
    /* .img {
      top: 6.5rem;
      left: 0;
      width: 9rem;
      transform: none;
    } */

    .bg {
      margin-left: 0rem;
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

  @media(max-width: 768px){
    min-width: 25rem;
    max-width: 20rem;
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
    border: 0.1rem solid var(--font-color);
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
      margin-left: 3.5rem;
      min-width: 20rem;
      max-width: 20rem;
    }
    
  }
  
`

const Comments = styled.div`
  background-color: var(--background-color);
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  .textarea{
    background-color: var(--background-color);
    border: solid 2px var(--font-color);
    width: 60vh;
    height: 5rem;
    padding: 1rem;
    color: var(--font-color);
  }

  .comment-title{
    color: var(--font-color);
    font-family: var(--font-title);
    font-size: 3rem;
    margin-bottom: 2rem;
  }

  @media(max-width: 768px){
    min-width: 45rem;
    max-width: 25rem;
    text-align: center;
    justify-content: center;

    .textarea{
      min-width: 20rem;
      max-width: 20rem;
      min-height: 15rem;
      max-height: 15rem;
    }
  }

  @media(max-width: 400px){
    min-width: 20rem;
    max-width: 408px;

    .textarea{
      min-width: 20rem;
      max-width: 20rem;
      min-height: 20rem;
      max-height: 20rem;
    }
  }
`
const RankingValue = styled.div`
    display: flex;
    justify-content: space-around;
    color: var(--font-color);

  .checkPoint{
    margin: 3rem;
    font-size: 1.5rem;
  }

  input[type="radio"] {   
  }

  @media(max-width: 768px){
    min-width: 10rem;
    max-width: 768px;
    
    .checkPoint{
      margin: 1rem;
    }
  }

`

const CommentsUsers = styled.div`
  border: 0.1rem solid var(--font-color);
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: var(--font-color);
  font-size: 2rem;
  padding: 2rem 4rem;
  width: 100vh;

  .user{
    margin-bottom:2rem;
  }

  h3{
    text-align: end;
    top: 0;
  }

  p{
    margin-bottom:2rem;
  }
  
  @media(max-width: 768px){
    min-width: 20rem;
    max-width: 20rem;
  }
  
`

export {
  DetailStyled,
  WineData,
  Comments,
  RankingValue,
  CommentsUsers,
  Container
}