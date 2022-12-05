import loading from "../../images/wine-loading.gif";
import { DivStyled } from "./DivStyled";

export default function Loading() {
  return (
    <DivStyled>
      <img className="loading-img" src={loading} alt="loading gif" />
      <span>Loading...</span>
    </DivStyled>
  );
}
