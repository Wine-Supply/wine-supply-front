import React from "react";
import AboutUs from "./section-about-us/AboutUs";
import BanerSection from "./section-baner/BanerSection";
import Newsletter from "./section-newsletter/Newsletter";

export default function Home() {
  return (
    <main>
      <BanerSection />
      <Newsletter />
      <AboutUs />
    </main>
  );
}
