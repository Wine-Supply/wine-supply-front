import styled from "styled-components"

const CardContainer = styled.div`
  transform: scale(1.35);
  border-radius: 1rem;
  background-color: var(--color-light);
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 1rem;
  margin: 4rem 8rem;
  color: var(--black);
  font-weight: 600;
  margin-bottom: 20px;
  min-width: 30rem;
  max-width: 30rem;
  min-height: 12rem;
  max-height: 12rem;
  
  .imageMain{
    text-align: center;
    max-height: 10rem;
    min-height: 10rem;
    min-width: 12rem;
    max-width: 12rem;    
    background-color: var(--white);
    border-radius: 1rem;
  }

  img{
    margin-top: 0.5rem;
    max-width: 12rem;
    max-height: 9rem;
  }
  `
const CardInformation = styled.div`
display: grid;
grid-template-columns: 1fr;
font-family: var(--font-title);
min-width: 13.5rem;
max-width: 13.5rem;
min-height: 10rem;
max-height: 10rem;

.descriptionStyle{
  min-width: 100px;
}

.descriptionStyle p{
  font-size: 0.5rem;
  font-weight: 400;
  text-overflow: ellipsis;
  font-family: var(--font-body);
} 
.rankingStyle{
  font-size: 1.5rem;
  display: flex;
  justify-content:flex-end;
  padding-right: 5px;
}

h2{
  margin-top: -1rem;
  font-size: 1.5rem;
  text-transform: capitalize;
}

.cardFooter{
  display: flex;
  justify-content:flex-end;
  padding-right: 5px;
}

.cardFooter p{
  min-width: 3.5rem;
  max-width: 3.5rem;
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