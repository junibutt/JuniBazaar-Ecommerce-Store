import React from "react";
import webpic from "./assets/webpic.jpg";
import certify from "./assets/certified.jpg";
import social from "./assets/socialmedia.jpg";
const AboutUs = () => {
  return (
    <div className=" bg-teal-100 pb-10 px-6 pt-10 md:px-10 lg:px-16 mx-auto" id="aboutus">
      {/* Parent container for both grids */}
      <div className="flex flex-col gap-0 ">
        {/* First Grid */}
        <div className="grid grid-cols-2 gap-0 p-0 m-0 w-full">
          <div className="flex items-center justify-center border-2 h-60 md:h-70">
            <img className="w-full h-full object-cover" src={webpic} alt="webpic" />
          </div>
          <div className="flex items-center justify-center border-2 bg-teal-200 text-wrap px-2 italic">
            <p className="md:text-xl md:py-2 md:leading-loose">
              Founded in 1994, Junibazar has grown into a leading e-commerce platform offering a wide range of products, from electronics and fashion to home essentials and lifestyle items.
            </p>
          </div>
        </div>

        {/* Second Grid */}
        <div className="grid grid-cols-2 gap-0 p-0 m-0 w-full">
          <div className="flex items-center justify-center border-2 bg-blue-300 text-wrap px-2 italic">
            <p className="md:text-xl md:py-2 md:leading-loose">
              Our e-commerce platform is fully certified, ensuring secure transactions, reliable customer service. We prioritize customer satisfaction and adhere to industry standards.
            </p>
          </div>
          <div className="flex items-center justify-center border-2 h-60 md:h-70">
            <img className="w-full h-full object-contain" src={certify} alt="certified" />
          </div>
        </div>


        <div className="grid grid-cols-2 gap-0 p-0 m-0 w-full">
          <div className="flex items-center justify-center border-2 h-60 md:h-70">
            <img className="w-full h-full object-cover" src={social} alt="webpic" />
          </div>
          <div className="flex items-center justify-center border-2 bg-teal-200 text-wrap px-2 italic">
            <p className="md:text-xl md:py-2 md:leading-loose">
            Stay connected with us on social media for the latest updates, exclusive offers, and behind-the-scenes content. Follow us on Instagram, Facebook, and Twitter. Join our community of Junibazar!
            </p>
          </div>
        </div>


      </div>

      
    </div>
  );
};

export default AboutUs;
