import styled from "styled-components"

const ButtonBuyNow = styled.nav`
  background-color: var(--black);
  color: var(--white);
  border: 0.1rem solid var(--black);
  border-radius: 5rem;
  padding: 1rem;
  width: 10rem;
  margin: 0.2rem;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  
  :hover{
    cursor: pointer;
    background-color: var(--white);
    color: var(--black);
  }
`

const ButtonAddToCart = styled.nav`
  background-color: var(--red);
  color: var(--white);
  border: 0.1rem solid var(--red);
  border-radius: 5rem;
  padding: 1rem;
  width: 10rem;
  margin: 0.2rem;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  
  :hover{
    cursor: pointer;
    background-color: var(--white);
    color: var(--red);
    border-color: var(--color-light);
  }
`
const ButtonSaveChanges = styled.nav`
  background-color: var(--black);
  color: var(--white);
  border: 0.1rem solid var(--black);
  padding: 0.7rem 1rem;
  width: 10rem;
  margin: 0.2rem;
  text-align: center;
  
  :hover{
    cursor: pointer;
    color: var(--color-dark);
  }
`
const ButtonDeleteAccount = styled.nav`
  background-color: var(--white);
  color: var(--black);
  border: 0.1rem solid var(--color-light);
  padding: 0.7rem 1rem;
  width: 10rem;
  margin: 0.2rem;
  text-align: center;
  
  :hover{
    cursor: pointer;
    background-color: var(--color-light);
  }
`
const ButtonSubscribe = styled.nav`
  background-color: var(--white);
  color: var(--black);
  border: 0.1rem solid var(--black);
  padding: .5rem;
  width: 8rem;
  margin: 0.2rem;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  
  :hover{
    cursor: pointer;
    color: var(--white);
    background-color: var(--black);
  }
`
const ButtonSubscribeRed = styled.nav`
  background-color: var(--red);
  color: var(--white);
  border: 0.1rem solid var(--red);
  padding: .5rem;
  width: 8rem;
  margin: 0.2rem;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  
  :hover{
    cursor: pointer;
    background-color: var(--white);
    color: var(--red);
  }
`
//style={ {transform: "scale(0.5)"}}

export {
  ButtonBuyNow,
  ButtonAddToCart,
  ButtonSaveChanges,
  ButtonDeleteAccount,
  ButtonSubscribe,
  ButtonSubscribeRed,
}