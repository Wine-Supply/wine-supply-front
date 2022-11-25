import { WineClub } from "./WineClub";
import styled from "styled-components";
import img1 from "./wineclub2.png";
import img2 from "./wineclub1.png";


const CardContainer = styled.div`
  padding: 8rem;
  display: flex;
  align-items: center;
  background: var(--color-light);
  overflow: hidden;
  justify-content: space-evenly;
  
  @media (max-width: 768px){
    flex-direction: column;
  }
`;

const Container = styled.div`
  text-align: center;
  padding: 1rem;
  background: var(--color-light);
  
  h1 {
    font-size: 6rem;
    font-family: var(--font-title);
    font-weight: 600;
  }
  h2 {
    font-size: 2.5rem;
    margin-top: 2rem;
  }

`;

export default function WineClubp() {
  return (
    <div>
      <Container>
        <h1 className="secondary-header">The Wine Club</h1>
        <h2>Join our Exclusive community</h2>
      </Container>
      <CardContainer>
        <WineClub title={"Regular Subsciption"} date={1} imgUrl={img1} />
        <WineClub title={"Premium Subscription"} date={2} imgUrl={img2} />
        <WineClub title={"Sommeliere Subscription"} date={2} imgUrl={img2} />
      </CardContainer>
    </div>
  );
}