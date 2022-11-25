import { WineClub } from "./WineClub";
import styled from "styled-components";
import img1 from "./wineclub2.png";
import img2 from "./wineclub1.png";


const CardContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #dedede;
  overflow: hidden;
`;

const Separator = styled.span`
  margin-left: 90px;
  margin-right: 90px;
`;

export default function WineClubp() {
  return (
    <div>
      <h1 className="secondary-header">The Wine Club</h1>
      <h2>Join our Exclusive community</h2>
      <CardContainer>
        <WineClub title={"Regular Subsciption"} date={1} imgUrl={img1} />
        <Separator />
        <WineClub title={"Premium Subscription"} date={2} imgUrl={img2} />
        <Separator />
        <WineClub title={"Sommeliere Subscription"} date={2} imgUrl={img2} />
      </CardContainer>
    </div>
  );
}