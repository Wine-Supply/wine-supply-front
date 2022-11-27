import styled from "styled-components";

export const BurguerButtonStyled = styled.div`
  background-color: var(--black);
  position: absolute;
  z-index: 0;
  
  &.active{
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 5;
    min-height: 200vh; 
  }
`