import { FooterStyled } from "./FooterStyled";
import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";

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
              <FacebookOutlined />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/wines_supply/?igshid=YmMyMTA2M2Y%3D"
              className="social-icon"
            >
              <InstagramOutlined />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/wines_supply/?igshid=YmMyMTA2M2Y%3D"
              className="social-icon"
            >
              <TwitterOutlined />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/wines_supply/?igshid=YmMyMTA2M2Y%3D"
              className="social-icon"
            >
              <YoutubeOutlined />
            </a>
          </div>
          <p className="copyright">&copy; 2022 Wine Supply, Inc</p>
        </div>
        <div className="business-info">
          <p>Carlos Pellegrini 507, CABA</p>
          <p>Buenos Aires, Argentina</p>
          <p>info@winesupply.com</p>
        </div>
      </div>
    </FooterStyled>
  );
}
