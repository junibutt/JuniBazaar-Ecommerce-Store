import React from "react";
import CardsSection from "./CardsSection";
import Items from "./Items";
import Offers from "./Offers";
import AboutUs from "./AboutUs";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <main>
        <div id="home"> {/* Add id for #home link */}
          <CardsSection />
        </div>
        <div id="items"> {/* Add id for #items link */}
          <Items />
        </div>
        <div id="offers"> {/* Add id for #offers link */}
          <Offers />
        </div>
        <div id="aboutus"> {/* Add id for #aboutus link */}
          <AboutUs />
        </div>
        <hr className="text-gray-800 font-bold pb-3" />
        <Footer />
      </main>
    </>
  );
};

export default Home;