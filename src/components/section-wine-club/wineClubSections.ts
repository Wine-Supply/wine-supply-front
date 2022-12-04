import styled from "styled-components";

export const CardWrapper = styled.div`
  margin: 2rem;
  display: grid;
  grid-template-columns: 300px;
  grid-template-rows: 310px 160px 50px;
  grid-template-areas: "image" "text" "stats";
  border-radius: 18px;
  background: var(--white);
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
  text-align: center;
`;

export const CardImage = styled.div<{ background: string }>`
  grid-area: image;
  background-image: url(${({ background }) => background});
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-size: cover;
`;

export const CardTextWrapper = styled.div`
  grid-area: text;
  margin: 18px 15px;
`;


export const CardTextTitle = styled.h2`
  margin: 0;
  font-size: 2rem;
  box-sizing: border-box;
  min-width: 0px;
  line-height: 5rem;
  background: linear-gradient(
    90deg, rgba(0,0,0,1) 0%,
    rgba(20,20,20,1) 35%,
    rgba(71,69,64,1) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

export const CardTextBody = styled.p`
  color: grey;
  font-size: 15px;
  font-weight: 300;
`;

export const CardStatWrapper = styled.div`
  grid-area: stats;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background: var(--btn-color);
  :hover{
    background: var(--btn-color-hover);
  }
`;

export const CardStats = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: var(--font-color);
  padding: 10px;
  
`;

export const LinkText = styled.a`
  color: var(--font-color);
  text-decoration: none;
  font-size: 2rem;
  
`;
