import { Section } from "./Section";
import about1 from "../../../images/about1.jpg";
import about2 from "../../../images/about2.jpg";

export default function AboutUs() {
  return (
    <Section>
      <div className="container">
        <div className="about-us info-container grid">
          <div className="section-text">
            <h2 className="secondary-header">About Us</h2>
            <p>
              We are a small wine retail business, and  we are now launching our 
              ecommerce to  reach more wine passionate customers who are looking 
              for the finest variety of wines.<br/>
                We offer a broad wine selection from 
              different regions. Now you will be able to look at our cellar from the 
              online shop.<br/>
                You can also subscribe to our wine club, to taste and know
              our selected wines each month
            </p>
          </div>
          <div>
            <img
              className="section-img"
              src={about1}
              alt="Two people clinking glasses of wine"
            />
          </div>
        </div>
        <div className="our-history info-container grid">
          <div className="our-history-img">
            <img className="section-img " src={about2} alt="Vineyard" />
          </div>
          <div className="section-text our-history-text">
            <h2 className="secondary-header">Our History</h2>
            <p>
              Wine -suplly started as small gatherings with friends, where we enjoyed,
              tasted and talked about wines.<br/>
                We opened a small  wine retail shop
              in Buenos Aires five year ago, and the business have been growing since.<br/>
                Nowadays the wine-suplly team have grown, and we have developed a
              close relationship with our suppliers, looking for the finest wines
              across many regions, our aim is to  build an exquisite cellar with the
              finest varieties.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
