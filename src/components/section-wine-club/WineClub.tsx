import { CardType } from "./Types";
import {
  CardWrapper,
  CardImage,
  CardTextWrapper,
  CardTextTitle,
  CardTextBody,
  CardStatWrapper,
  CardStats,
  LinkText
} from "./wineClubSections";
import Tilt from "react-parallax-tilt";

export const WineClub = ({ title, date, imgUrl }: CardType) => {
  return (
    <Tilt>
      <CardWrapper>
        <CardImage background={imgUrl} />
        <CardTextWrapper>
        <CardTextTitle>{title}</CardTextTitle>
          <CardTextBody>
          Recive every motn 3 bottles og our 
          very best selction of wines 
          $80.00 us Dlls
           </CardTextBody>
        </CardTextWrapper>
      <CardStatWrapper>
          
          <CardStats>
            <LinkText href="#">JOIN THE CLUB</LinkText>
          </CardStats>
      </CardStatWrapper>
       </CardWrapper>
    </Tilt>
  );
};
