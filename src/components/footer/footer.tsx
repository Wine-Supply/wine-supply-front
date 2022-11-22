import { FooterStyled } from "./FooterStyled";

export default function Footer() {
  return (
    <FooterStyled>
      <div className="footer-info">
        <div className="social-copyright">
          <div className="social-icons">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/efra%C3%ADn-chac%C3%B3n-521485234/"
              className="social-icon"
            >
              FB
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/efra%C3%ADn-chac%C3%B3n-521485234/"
              className="social-icon"
            >
              IG
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/efra%C3%ADn-chac%C3%B3n-521485234/"
              className="social-icon"
            >
              TT
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/efra%C3%ADn-chac%C3%B3n-521485234/"
              className="social-icon"
            >
              YT
            </a>
          </div>
          <p className="copyright">&copy; 2022 Wine Supply, Inc</p>
        </div>
        <div className="business-info">BUSINESS INFO</div>
      </div>
    </FooterStyled>
  );
}
