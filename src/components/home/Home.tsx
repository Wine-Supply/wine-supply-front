import { useEffect, useState } from "react";
import ScrollToTopButton from "./scroll-to-top-button/ScrollToTopButton";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { getItemsStorage } from "../../redux/action-creators";
import { State } from "../../redux/reducer";
import AboutUs from "./section-about-us/AboutUs";
import Navbar from "../nav/navbar";
import Footer from "../Footer/Footer";
import BanerSection from "./section-baner/BanerSection";
import Newsletter from "./section-newsletter/Newsletter";
import TopRated from "./section-top-rated/TopRated";
import CartProducts from "../CartProducts/CartProducts";
import { Drawer } from '@mui/material'
import CarritoFull from "../carritoFull/CarritoFull";

export default function Home() {
  const [showButton, setShowButton] = useState<boolean>(false);
//  const [cartOpen, setCartOpen] = useState<boolean>(true);
  const Items = useSelector((state: State) => state.itemsStorage);
  const dispatch: Dispatch<any> = useDispatch()
  
  useEffect(() => {
    if(Items.length === 0){dispatch(getItemsStorage())}
    window.addEventListener("scroll", () => {
      window.scrollY > 200 ? setShowButton(true) : setShowButton(false);
    });
  }, []);

  return (
    <main>

      {/* <Drawer
        anchor='right' 
        open={cartOpen} 
        onClose= {() => setCartOpen(false)}>
          <CartProducts/>
     </Drawer> */}
      <Navbar/>
<CarritoFull/>

      <BanerSection />
      <TopRated />
      <Newsletter />
      <AboutUs />
      <Footer />
      {showButton && <ScrollToTopButton />}
    </main>
  );
}
