import { CardType } from "./Types";
import {
  CardWrapper,
  CardImage,
  CardTextWrapper,
  CardTextTitle,
  CardTextBody,
  CardStatWrapper,
  CardStats,
  LinkText,
} from "./wineClubSections";
import Tilt from "react-parallax-tilt";
import { buyMembership } from "../../redux/action-creators";

export const WineClub = ({ title, imgUrl }: CardType) => {
  return (
    <Tilt>
      <CardWrapper>
        <CardImage background={imgUrl} />
        <CardTextWrapper>
          <CardTextTitle>{title}</CardTextTitle>
          <CardTextBody>
            Recive three bottles per month.
            <br />
            of our very best selction of wines
            <br />
          </CardTextBody>
        </CardTextWrapper>
        <CardStatWrapper>
          <CardStats>
            <LinkText
              onClick={() => buyMembership(title.split(" ")[0])}
              href="#"
            >
              JOIN THE CLUB
            </LinkText>
          </CardStats>
        </CardStatWrapper>
      </CardWrapper>
    </Tilt>
  );
};
