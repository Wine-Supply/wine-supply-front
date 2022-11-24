
import Footer from "./components/footer/Footer";
import AboutUs from "./components/section-about-us/AboutUs";
import Navbar from "./components/nav/Navbar";
import WineClubApp from "./components/section-wine-club/index";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AboutUs />
      <WineClubApp />
      <Footer />
    </div>
  );
}

export default App;
