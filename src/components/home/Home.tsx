import React from "react";
import AboutUs from "./section-about-us/AboutUs";
import BanerSection from "./section-baner/BanerSection";
import Newsletter from "./section-newsletter/Newsletter";
import TopRated from "./section-top-rated/TopRated";

export default function Home() {
  return (
    <main>
      <BanerSection />
      <TopRated />
      <Newsletter />
      <AboutUs />
    </main>
  );
}
