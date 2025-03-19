import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom"; // Add useLocation
import logopic from "../assets/logo-pic.png";
import { CiShoppingCart } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import banner from "../assets/banner-new.jpg";

// Define navItems with IDs for scrolling
const navItems = [
  { href: "#home", label: "Home" },
  { href: "#items", label: "Items" },
  { href: "#offers", label: "Offers" },
  { href: "#aboutus", label: "About Us" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const navigate = useNavigate(); // Use useNavigate for programmatic navigation
  const location = useLocation(); // Use useLocation to check the current route

  const togglemenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const linkClasses = (link) =>
    link === activeLink
      ? "text-teal-500 font-bold hover:text-teal hover:border-b-2 hover:border-teal pb-1"
      : "text-teal-500 font-semibold hover:text-teal hover:border-b-2 hover:border-teal pb-1";

  const handleNavClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false);

    // Navigate to home page first, then scroll to the section
    if (window.location.pathname !== "/") {
      navigate("/"); // Navigate to home page
    }

    // Scroll to the section after a short delay (to allow the page to load)
    setTimeout(() => {
      const section = document.querySelector(link);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div className="bg-whitee">
      <div className="max-w-screen-2xl mx-auto py-2 px-5 flex justify-between items-center">
        <Link to="/">
          <img className="w-28" src={logopic} alt="Logo" />
        </Link>

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
                      href={link.href} // Use href for # links
                      onClick={(e) => {
                        e.preventDefault(); // Prevent default anchor behavior
                        handleNavClick(link.href); // Handle navigation
                      }}
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
            <Link
              to="/cart" // Use Link for navigation to /cart
              className={
                activeLink === "/cart"
                  ? "text-teal-500 font-bold hover:text-teal inline-flex items-center"
                  : "text-teal-500 font-semibold hover:text-teal inline-flex items-center"
              }
            >
              Cart
              <CiShoppingCart className="w-4 ml-2 text-lg" />
            </Link>
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden absolute top-20 py-3 left-0 right-0 bg-white border shadow-md mx-auto">
            <nav>
              <ul className="flex flex-col items-center gap-8 text-base font-semibold">
                {navItems.map((link) => {
                  return (
                    <li key={link.href}>
                      <a
                        href={link.href} // Use href for # links
                        onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavClick(link.href); // Handle navigation
                        }}
                        className={linkClasses(link.href)}
                      >
                        {link.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <button className="flex items-center rounded-lg px-4 py-2 mx-auto text-base font-semibold text-red hover:text-teal-500">
              <Link
                className="flex items-center gap-1 mt-8 text-teal-500"
                to="/cart"
              >
                Cart
                <CiShoppingCart className="w-4" />
              </Link>
            </button>
          </div>
        )}
      </div>

      {/* Conditionally render the banner image only on the home page */}
      {location.pathname === "/" && (
        <div>
          <img
            className="h-[380px] md:h-auto w-full"
            src={banner}
            alt="Banner"
            id="home" // Add id for #home link
          />
        </div>
      )}
    </div>
  );
};

export default Header;