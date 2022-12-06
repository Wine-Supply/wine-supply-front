import { useState } from "react";
import loading from "../../images/wine-loading.gif";
import error from "../../images/error-img.png";
import { DivStyled } from "./DivStyled";
import { useSelector } from "react-redux";
import { State } from "../../redux/reducer";

export default function Loading() {
  const [showError, setShowError] = useState<boolean>(false);
  const products = useSelector((state: State) => state.allWines);
  setTimeout(() => {
    if (products.length === 0) setShowError(true);
  }, 10000);
  return (
    <DivStyled>
      {!showError && (
        <>
          <img className="loading-img" src={loading} alt="loading gif" />
          <span>Loading...</span>
        </>
      )}
      {showError && (
        <>
          <img className="error-img" src={error} alt="Error" />
          <span>Something went wrong :c</span>
        </>
      )}
    </DivStyled>
  );
}
