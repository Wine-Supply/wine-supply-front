import { NewsletterStyled } from "./NewsletterStyled"
import { Link } from "react-router-dom";
import { ButtonAddToCart } from "../utils/utils";

const Newsletter= () =>{
  return (
    <NewsletterStyled>
      <div>
        <h2>Thank You!</h2>
        <p>Thanks for subscribing to our newsletter </p>
        <p>The newsletter is sent out sometime between Saturday and Monday morning. 
          <br /> Please check your email if you don't see it.
          <br /> We hope you enjoy the news. </p>
        <p className="welcome"> Welcome to Wine Supply Comunity! </p>
        <Link to="/" className="link">
          <ButtonAddToCart className="btn">
            Go Home
          </ButtonAddToCart>
          </Link>
      </div>
    </NewsletterStyled>
  )
}

export default Newsletter