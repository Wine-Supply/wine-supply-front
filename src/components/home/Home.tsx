import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { getItemsStorage } from "../../redux/action-creators";
import { State } from "../../redux/reducer";
import AboutUs from "./section-about-us/AboutUs";
import BanerSection from "./section-baner/BanerSection";
import Newsletter from "./section-newsletter/Newsletter";
import TopRated from "./section-top-rated/TopRated";

export default function Home() {

  const Items = useSelector((state: State) => state.itemsStorage);
  const dispatch: Dispatch<any> = useDispatch()
  
  useEffect(() => {
    if(Items.length === 0){
      dispatch(getItemsStorage())
    }
    return
  }, [])
  

  return (
    <main>
      <BanerSection />
      <TopRated />
      <Newsletter />
      <AboutUs />
    </main>
  );
}
