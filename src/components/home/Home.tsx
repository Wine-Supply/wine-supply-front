import { useEffect, useState } from "react";
import ScrollToTopButton from "./scroll-to-top-button/ScrollToTopButton";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { getItemsStorage, getUserId } from "../../redux/action-creators";
import { State } from "../../redux/reducer";
import AboutUs from "./section-about-us/AboutUs";
import Navbar from "../nav/navbar";
import Footer from "../footer/Footer";
import BanerSection from "./section-baner/BanerSection";
import Newsletter from "./section-newsletter/Newsletter";
import TopRated from "./section-top-rated/TopRated";
import CarritoFull from "../carritoFull/CarritoFull";
import ContactForm from "../contact-form/ContactUs";

export default function Home() {
  const [showButton, setShowButton] = useState<boolean>(false);
  const Items = useSelector((state: State) => state.itemsStorage);
  const User = useSelector((state: State) => state.user);
  const dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {
    if (Items.length === 0) {
      dispatch(getItemsStorage());
    }
    if (Object.keys(User).length === 0) dispatch(getUserId());
    window.addEventListener("scroll", () => {
      window.scrollY > 200 ? setShowButton(true) : setShowButton(false);
    });
  }, []);

  return (
    <main>
      <Navbar />
      <CarritoFull />
      <BanerSection />
      <TopRated />
      <Newsletter />
      <AboutUs />
      <ContactForm />
      <Footer />
      {showButton && <ScrollToTopButton />}
    </main>
  );
}
