import React, { useState } from "react";
import logopic from "../assets/logo-pic.png";
import { CiShoppingCart } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import banner from "../assets/banner-new.jpg";
import Cards from "../cards";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#items", label: "Items" },
  { href: "#offers", label: "Offers" },
  { href: "#aboutus", label: "About Us" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const [isConditionTrue, setIsConditionTrue] = useState(true);
  const togglemenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const linkClasses = (link) =>
    link === activeLink
      ? "text-teal-500 font-bold hover:text-teal hover:border-b-2 hover:border-teal pb-1"
      : "text-teal-500 font-semibold hover:text-teal hover:border-b-2 hover:border-teal pb-1";

  const handleinclick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false);
  };
  return (
    <div className="bg-whitee ">
      <div className="max-w-screen-2xl mx-auto py-2 px-5 flex justify-between items-center">
        <a href="/">
          <img className="w-28 " src={logopic} />
        </a>

        <div className="lg:hidden">
          <button onClick={togglemenu}>
            {isMenuOpen ? (
              <RxCross2 className="text-2xl text-teal-500 cursor-pointer" />
            ) : (
              <GiHamburgerMenu className="text-2xl text-teal-500 cursor-pointer" />
            )}
          </button>
        </div>

        <div className="hidden lg:block">
          <nav>
            <ul className="flex items-center gap-12 text-lg">
              {navItems.map((link) => {
                return (
                  <li key={link.href}>
                    <a
                      onClick={() => handleinclick(link.href)}
                      href={link.href}
                      className={linkClasses(link.href)}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <div className="hidden lg:block">
          <button className="flex items-center rounded-lg px-4 py-2 text-lg">
            <a
              className={
                activeLink === "cart"
                  ? "text-teal-500 font-bold hover:text-teal inline-flex items-center"
                  : "text-teal-500 font-semibold hover:text-teal inline-flex items-center"
              }
              href="cart"
            >
              Cart
              <CiShoppingCart className="w-4 ml-2 text-lg" />
            </a>
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden absolute top-20 py-3 left-0 right-0 bg-white border  shadow-md mx-auto">
            <nav>
              <ul className="flex flex-col items-center gap-8 text-base font-semibold">
                {navItems.map((link) => {
                  return (
                    <li key={link.href}>
                      <a
                        onClick={() => handleinclick(link.href)}
                        href={link.href}
                        className={linkClasses(link.href)}
                      >
                        {link.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <button className="flex items-center  rounded-lg px-4 py-2 mx-auto text-base font-semibold text-red hover:text-teal-500">
              {" "}
              <a
                className="flex items-center gap-1 mt-8 text-teal-500"
                href="cart"
              >
                {" "}
                Cart
                <span>
                  <CiShoppingCart className="w-4 " />
                </span>
              </a>
            </button>
          </div>
        )}
      </div>
      <div>
        <img
          className="h-[380px] md:h-auto w-full"
          src={banner}
          id="home"
        ></img>
      </div>

      <div>
        <Cards />
      </div>
    </div>
  );
};

export default Header;
