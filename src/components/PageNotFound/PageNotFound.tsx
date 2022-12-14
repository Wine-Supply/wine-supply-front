import ReactDOM from "react-dom";
import oops from "./media/godzilla.gif";
import { PageNotFoundStyled } from "./PageNotFoundStyled";
import { Link } from "react-router-dom";
import { ButtonAddToCart } from "../utils/utils";

function PageNotFound() {
  return (
     <PageNotFoundStyled>
          <div>
            <h2>Error 404!</h2>
            <Link to="/" className="link">
              <ButtonAddToCart className="btn">
                Go Home
              </ButtonAddToCart>
            </Link>
            <img className="section-img" src={oops} alt="Ops Error 404" />
          </div>
        </PageNotFoundStyled>
      )
    }


export default PageNotFound

