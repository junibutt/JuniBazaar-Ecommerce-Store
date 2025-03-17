import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Header/Header";
import Items from "./Items";
import Offers from "./Offers";
import AboutUs from "./AboutUs";
import Footer from "./Footer";
import CardsSection from "./CardsSection";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav>
        <Header />
      </nav>
      <main>
        <CardsSection/>
        <Items />
        <Offers />
        <AboutUs />
        <hr className="text-gray-800 font-bold pb-3" />
        <Footer />
      </main>
    </>
  );
}

export default App;
