import styled from "styled-components"

const CardContainer = styled.div`
  border-radius: 10px ;
  background-color: #dedede;
  display: flex;
  padding: 10px;

  img{
    max-height: 110px;
  }
`

const CardInformation = styled.div`
display: flex ;
flex-direction: column;
justify-content: space-around;
margin-left: 20px;
margin-right: 10px;
width: 90px;
height:120px;
max-width: 100px;
min-height: 100px;


.descriptionStyle{
  min-width: 100px;
}

.descriptionStyle p{
  font-size: 8px;
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
 // padding-right: 5px;
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
`

export{
  CardContainer,
  CardInformation,
  ButtonAddCart
}