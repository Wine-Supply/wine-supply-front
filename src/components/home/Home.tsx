import { useEffect, useState } from "react";
import ScrollToTopButton from "./scroll-to-top-button/ScrollToTopButton";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { getTotalItems, getUserId } from "../../redux/action-creators";
import { State } from "../../redux/reducer";
import AboutUs from "./section-about-us/AboutUs";
import Navbar from "../nav/navbar";
import Footer from "../Footer/Footer";
import BanerSection from "./section-baner/BanerSection";
import Newsletter from "./section-newsletter/Newsletter";
import TopRated from "./section-top-rated/TopRated";
import CartProducts from "../CartProducts/CartProducts";
import { Drawer } from "@mui/material";
import CarritoFull from "../carritoFull/CarritoFull";
import ContactForm from "../contact-form/ContactUs";

export default function Home() {
  const [showButton, setShowButton] = useState<boolean>(false);
  // const Items = useSelector((state: State) => state.itemsStorage);
  const User = useSelector((state: State) => state.user);
  const dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {
    //---REVISAR PARA TRAER DEL BACK
    /*  if (Items.length === 0) {
      dispatch(getItemsStorage());

    }
    if (Object.keys(User).length === 0) dispatch(getUserId());

    } */
    if (Object.keys(User)) dispatch(getUserId());
    dispatch(getTotalItems());

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
