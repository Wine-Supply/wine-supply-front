import { useEffect, useState } from "react";
import ScrollToTopButton from "./scroll-to-top-button/ScrollToTopButton";
import AboutUs from "./section-about-us/AboutUs";
import BanerSection from "./section-baner/BanerSection";
import Newsletter from "./section-newsletter/Newsletter";
import TopRated from "./section-top-rated/TopRated";

export default function Home() {
  const [showButton, setShowButton] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 200 ? setShowButton(true) : setShowButton(false);
    });
  }, []);

  return (
    <main>
      <BanerSection />
      <TopRated />
      <Newsletter />
      <AboutUs />
      {showButton && <ScrollToTopButton />}
    </main>
  );
}
