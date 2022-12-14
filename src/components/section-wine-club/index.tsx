import { WineClub } from "./WineClub";
import styled from "styled-components";
import img1 from "./wineclub2.png";
import img2 from "./wineclub1.png";
import Footer from "../Footer/Footer";
import Navbar from "../nav/navbar";

const CardContainer = styled.div`
  padding-inline: 6rem;
  padding: 1.8rem;
  display: flex;
  align-items: center;
  background: var(--background-color);
  overflow: hidden;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Container = styled.div`
  text-align: center;
  padding: 1rem;
  background: var(--background-color);
  color: var(--font-color);

  h1 {
    margin-top: 1.6rem;
    font-size: 6rem;
    font-family: var(--font-title);
    font-weight: 600;
  }
  h2 {
    font-size: 2.1rem;
    margin-top: 0.8rem;
  }
`;

export default function WineClubp() {
  return (
    <>
      <Navbar />
      <div>
        <Container>
          <h1 className="secondary-header">The Wine Club</h1>
          <h2>Join our Exclusive community</h2>
        </Container>
        <CardContainer>
          <WineClub title={"Regular Subscription "  + " Easy Drinking Wines"} date={1} imgUrl={img1} />
          <WineClub title={"Premium Subscription More Complex Flavours"} date={2} imgUrl={img2} />
          <WineClub title={"Sommeliere Subscription Limited Editions"} date={2} imgUrl={img2} />
        </CardContainer>
      </div>
      <Footer />
    </>
  );
}
