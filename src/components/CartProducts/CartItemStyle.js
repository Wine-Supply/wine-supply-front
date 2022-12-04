import styled from "styled-components";

export const Wrapper = styled.div`
    color: var(--font-color);
    display: flex;
    justify-content: space-between;
    font-family: var(--font-title);
    font-weight: 900;
    font-size: 15px;
    border-bottom: 1px solid var(--btn-color-hover);
    border-radius: 20px;
    padding: 20px;
    padding-right: 2px;
    margin-top: 20px;
    background: var(--background-color) ;
    
    div {
      flex: 1;    
    }
    .main{
      max-width: 250px;
    }

    .information,
    .buttons {
      display: flex;
      justify-content: space-between;
      margin: 20px 20px;
    }

    Button{
      background:var(--btn-color) ;
      color: var(--font-color);
    }

    Button .buttons{
      font-size: 30px;
    }

    Button:hover{
      background: var(--btn-color-hover)
    }

    img {
      max-height: 100px;
      max-width: 80px;
      object-fit: cover;
       // margin-left: 40px;
    }  

`;


/* const ItemContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 200px;
  padding: 10px 30px;
  margin: 20px 20px;
  border-radius: 20px;
  background-color: var(--color-light);
  font-size: 15px;

  img{
  }

  p{
  }

.image-main{
  max-height: 300px;
  max-width: 300px;
} 
`

const AmountSeccion = styled.div`
  display: flex;
  margin-left: 50px;

  button{
    width: 50px;
    height: 20px;
    border-radius: 10px;
  }

  p{
    font-size: 20px;
    margin: 0 10px;
  }
`


export{
  ItemContainer,
  AmountSeccion
} */