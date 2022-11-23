import { Section } from "./Section";
import about1 from "../../images/about1.jpg";
import about2 from "../../images/about2.jpg";

export default function AboutUs() {
  return (
    <Section>
      <div className="container">
        <div className="about-us info-container grid">
          <div className="section-text">
            <h2 className="secondary-header">About Us</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              accusamus qui id provident, earum molestiae et autem nulla?
              Repudiandae beatae ratione molestiae vitae quia numquam
              consectetur porro incidunt repellendus laudantium. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Placeat quo modi
              doloribus sapiente maiores incidunt labore dolorem, magnam
              expedita officiis quae ad eum velit repudiandae reiciendis sunt
              accusamus facere. Amet.
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, doloribus pariatur incidunt repudiandae eaque hic
              earum tenetur modi velit, consectetur quisquam rerum, quia impedit
              officia mollitia magni sed nemo delectus! Lorem ipsum dolor sit
              amet consectetur, adipisicing elit. Harum dolor ducimus id vero
              inventore odio doloribus, enim dignissimos tenetur. Odio ducimus
              vitae repellendus dignissimos pariatur assumenda sequi magnam.
              Iste, dolorem.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
