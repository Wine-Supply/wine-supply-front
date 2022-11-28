import styled from "styled-components";

const ButtonBuyNow = styled.button`
  background-color: var(--black);
  color: var(--white);
  border: 0.1rem solid var(--black);
  border-radius: 5rem;
  padding: 1rem;
  width: 10rem;
  margin: 0.2rem;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;

  :hover {
    cursor: pointer;
    background-color: var(--white);
    color: var(--black);
  }
`;

const ButtonAddToCart = styled.button`
  background-color: var(--red);
  color: var(--white);
  border: 0.1rem solid var(--red);
  border-radius: 5rem;
  padding: 0.7rem 1rem;
  width: 10rem;
  margin: 0.2rem;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;

  :hover {
    cursor: pointer;
    background-color: var(--white);
    color: var(--red);
    border-color: var(--color-light);
  }
`;
const ButtonSaveChanges = styled.button`
  background-color: var(--black);
  color: var(--white);
  border: 0.1rem solid var(--black);
  padding: 0.7rem 1rem;
  min-width: 10rem;
  height: 4.5rem;
  margin: 0.2rem;
  text-align: center;

  :hover {
    cursor: pointer;
    color: var(--color-dark);
  }

  :disabled {
    cursor: auto;
    background-color: transparent;
    color: #727272;
    border-color: #727272;
  }
`;
const ButtonDeleteAccount = styled.button`
  background-color: var(--white);
  color: var(--black);
  border: 0.1rem solid var(--color-light);
  padding: 0.7rem 1rem;
  min-width: 10rem;
  height: 4.5rem;
  width: 10rem;
  margin: 0.2rem;
  text-align: center;

  :hover {
    cursor: pointer;
    background-color: var(--color-light);
  }
`;
const ButtonSubscribe = styled.button`
  background-color: var(--white);
  color: var(--black);
  border: 0.1rem solid var(--black);
  padding: 0.5rem;
  width: 8rem;
  margin: 0.2rem;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;

  :hover {
    cursor: pointer;
    color: var(--white);
    background-color: var(--black);
  }
`;
const ButtonSubscribeRed = styled.button`
  background-color: var(--red);
  color: var(--white);
  border: 0.1rem solid var(--red);
  padding: 0.5rem;
  width: 8rem;
  margin: 0.2rem;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;

  :hover {
    cursor: pointer;
    background-color: var(--white);
    color: var(--red);
  }
`;
const ButtonToScrollUp = styled.button`
  position: fixed;
  bottom: 10rem;
  right: 1rem;
  background-color: var(--red);
  color: var(--white);
  border: 0.1rem solid var(--white);
  border-radius: 50%;
  padding: 0.5rem;
  width: 4rem;
  height: 4rem;
  font-weight: 600;
  text-align: center;
  box-shadow: 0 8px 24px 0 rgba(0, 0, 0, 0.6);
  transition: all 0.2s;

  :hover {
    cursor: pointer;
    color: var(--red);
    background-color: var(--color-light);
    border-color: var(--red);
  }
`;

//style={ {transform: "scale(0.5)"}}

export {
  ButtonBuyNow,
  ButtonAddToCart,
  ButtonSaveChanges,
  ButtonDeleteAccount,
  ButtonSubscribe,
  ButtonSubscribeRed,
  ButtonToScrollUp,
};
