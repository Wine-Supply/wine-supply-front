import styled from "styled-components"

const CardContainer = styled.div`
  border-radius: 10px ;
  background-color: #dedede;
  display: flex;
  padding: 10px;
  color: var(--black);
  font-weight: 600;
  margin-bottom: 20px;
  
  .imageMain{
    text-align: center;
    max-height: 110px;
    min-height: 110px;
    min-width: 100px;
    max-width: 300px;
  }

  img{
    max-height: 110px;
  }
  `
const CardInformation = styled.div`
display: flex ;
flex-direction: column;
justify-content: space-around;
margin-right: 10px;
width: 90px;
height:120px;
min-width: 120px;
min-height: 100px;
font-family: var(--font-title);

.descriptionStyle{
  min-width: 100px;
}

.descriptionStyle p{
  font-size: 10px;
  text-overflow: ellipsis;
} 
.rankingStyle{
  display: flex;
  justify-content:flex-end;
  padding-right: 5px;
}

h2{
  margin-top: 1px;
  font-size: 12px;
}

.cardFooter{
  display: flex;
  justify-content:flex-end;
  padding-right: 5px;
}

.cardFooter p{
  font-size: 15px;
}
` 
const ButtonAddCart = styled.button`
border: none;
border-radius: 20px;
color: white;
background-color: #6a2424;
padding: 3px 5px;
font-size: 6px;
text-transform: uppercase;
margin-left: 15px;
border: solid 1px #000;
height: 15px;
`

export{
  CardContainer,
  CardInformation,
  ButtonAddCart
}