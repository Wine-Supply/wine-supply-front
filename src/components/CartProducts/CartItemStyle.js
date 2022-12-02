import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    font-family: Arial, Helvetica, sans-serif;
    border-bottom: 1px solid lightblue;
    padding-bottom: 20px;
    
    
    div {
        flex: 1;
        
    }

    .information,
    .buttons {
        display: flex;
        justify-content: space-between;

    }

    img {
        max-width: 80px;
        object-fit: cover;
        margin-left: 40px;
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
    max-height: 150px;
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