import React from "react";
import { FaCartPlus } from 'react-icons/fa';
import earbuds from "./assets/earbuds.jpg";
import toaster from "./assets/toaster.jpg" 
import lamp from "./assets/lamp.jpg"
import racket from "./assets/racket.jpg"
import beachchair from "./assets/beachchair.jpg"
import wallart from "./assets/wallart.jpg"

const InsideOffers = () => {
  return (
    <div className="container mx-auto my-8">
      <div className="space-y-8">
        <div className="mx-auto flex items-center justify-start space-x-4 border-teal-500 border-2 rounded-md max-w-[26rem] md:max-w-[28rem] lg:max-w-[35rem] md:ml-5 lg:ml-14">
          <img
            src={earbuds}
            alt="Wireless Earbuds"
            className="object-cover w-35 h-35 rounded-md md:w-40 md:h-40"
          />
          <div>
            <h1 className="font-bold text-2xl  pb-2 text-teal-500 flex items-center space-x-2">
              <span>Wireless Earbuds</span>
              {/* Small cart icon */}
              <FaCartPlus className="text-teal-500 text-lg lg:text-2xl ml-4 cursor-pointer hover:text-teal-600" />
            </h1>
            <p className="text-gray-600 lg:text-lg">
              Active Noise Cancellation, Spatial Audio, 30-hour Battery Life
            </p>
            <div className="flex justify-between mt-4">
              <div className="text-gray-500 text-sm lg:text-base">
                Before: <span className="line-through ">$45</span>
              </div>
              <div className="font-semibold text-teal-600 mr-2 text-sm lg:text-base">Now: $24</div>
            </div>
          </div>
        </div>

        <div className="mx-auto flex items-center justify-start space-x-4 border-teal-500 border-2 rounded-md max-w-[26rem] md:max-w-[28rem] lg:max-w-[35rem]  md:mr-5 lg:mr-14">
          <img
            src={toaster}
            alt="Electronic Toaster"
            className="object-cover w-35 h-38 rounded-md md:w-40 md:h-40"
          />
          <div>
            <h1 className="font-bold text-2xl pb-2 text-teal-500 flex items-center space-x-2">
              <span>Hot Toaster</span>
            
              <FaCartPlus className="text-teal-500 text-lg lg:text-2xl ml-4 cursor-pointer hover:text-teal-600" />
            </h1>
            <p className="text-gray-600 lg:text-lg">
            The Electronic Toaster offers adjustable browning, wide slots, and safety.
            </p>
            <div className="flex justify-between mt-4">
              <div className="text-gray-500 text-sm lg:text-base">
                Before: <span className="line-through">$90</span>
              </div>
              <div className="font-semibold text-teal-600 mr-2 text-sm lg:text-base">Now: $65</div>
            </div>
          </div>
        </div>




        <div className="mx-auto flex items-center justify-start space-x-4 border-teal-500 border-2 rounded-md max-w-[26rem] md:max-w-[28rem] lg:max-w-[35rem] md:ml-5 lg:ml-14">
          <img
            src={lamp}
            alt="Lamp"
            className="object-cover w-35 h-35 rounded-md md:w-40 md:h-40"
          />
          <div>
            <h1 className="font-bold text-2xl pb-2 text-teal-500 flex items-center space-x-2">
              <span>Aesthetic Lamp</span>
        
              <FaCartPlus className="text-teal-500 text-lg lg:text-2xl ml-4 cursor-pointer hover:text-teal-600" />
            </h1>
            <p className="text-gray-600 lg:text-lg">
            The aesthetic lamp features a stylish design, soft lighting, and elegance.
            </p>
            <div className="flex justify-between mt-4">
              <div className="text-gray-500 text-sm lg:text-base">
                Before: <span className="line-through">$100</span>
              </div>
              <div className="font-semibold text-teal-600 mr-2 text-sm lg:text-base">Now: $66</div>
            </div>
          </div>
        </div>

       
        <div className="mx-auto flex items-center justify-start space-x-4 border-teal-500 border-2 rounded-md max-w-[26rem] md:max-w-[28rem] lg:max-w-[35rem] md:mr-5 lg:mr-14">
          <img
            src={racket}
            alt="Racket"
            className="object-cover w-35 h-35 rounded-md md:w-40 md:h-40"
          />
          <div>
            <h1 className="font-bold text-2xl pb-2 text-teal-500 flex items-center space-x-2">
              <span>2X Racket</span>
             
              <FaCartPlus className="text-teal-500 text-lg lg:text-2xl ml-4 cursor-pointer hover:text-teal-600" />
            </h1>
            <p className="text-gray-600 lg:text-lg">
            The racket offers power, control and comfortable grip.
            </p>
            <div className="flex justify-between mt-4">
              <div className="text-gray-500 text-sm lg:text-base">
                Before: <span className="line-through">$35</span>
              </div>
              <div className="font-semibold text-teal-600 mr-2 text-sm lg:text-base">Now: $15</div>
            </div>
          </div>
        </div>

       
        <div className="mx-auto flex items-center justify-start space-x-4 border-teal-500 border-2 rounded-md max-w-[26rem] md:max-w-[28rem] lg:max-w-[35rem] md:ml-5 lg:ml-14">
          <img
            src={wallart}
            alt="Wall Art"
            className="object-cover w-35 h-35 rounded-md md:w-40 md:h-40"
          />
          <div>
            <h1 className="font-bold text-2xl pb-2 text-teal-500 flex items-center space-x-2">
              <span>Wall Art</span>
          
              <FaCartPlus className="text-teal-500 text-lg lg:text-2xl ml-4 cursor-pointer hover:text-teal-600" />
            </h1>
            <p className="text-gray-600 lg:text-lg">
            The wall art enhances your space with vibrant colors and style.
            </p>
            <div className="flex justify-between mt-4">
              <div className="text-gray-500 text-sm lg:text-base">
                Before: <span className="line-through">$60</span>
              </div>
              <div className="font-semibold text-teal-600 mr-2 text-sm lg:text-base">Now: $35</div>
            </div>
          </div>
        </div>

        
        <div className="mx-auto flex items-center justify-start space-x-4 border-teal-500 border-2 rounded-md max-w-[26rem] md:max-w-[28rem] lg:max-w-[35rem]  md:mr-5 lg:mr-14">
          <img
            src={beachchair}
            alt="Beach Chair"
            className="object-cover w-35 h-35 rounded-md md:w-40 md:h-40"
          />
          <div>
            <h1 className="font-bold text-2xl pb-2 text-teal-500 flex items-center space-x-2">
              <span>Beach Chair</span>
            
              <FaCartPlus className="text-teal-500 text-lg lg:text-2xl ml-4 cursor-pointer hover:text-teal-600" />
            </h1>
            <p className="text-gray-600 lg:text-lg">
            The beach chair provides comfort and stylish design.


            </p>
            <div className="flex justify-between mt-4">
              <div className="text-gray-500 text-sm lg:text-base">
                Before: <span className="line-through">$90</span>
              </div>
              <div className="font-semibold text-teal-600 mr-2 text-sm lg:text-base">Now: $55</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsideOffers;
