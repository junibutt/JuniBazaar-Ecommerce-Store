import React, { useEffect } from "react";
import { FaCartPlus } from "react-icons/fa";
import earbuds from "./assets/earbuds.jpg";
import toaster from "./assets/toaster.jpg";
import lamp from "./assets/lamp.jpg";
import racket from "./assets/racket.jpg";
import beachchair from "./assets/beachchair.jpg";
import wallart from "./assets/wallart.jpg";
import { useCart } from "./CreateContext";

const InsideOffers = () => {
  const { Addtocart, cart } = useCart(); // Destructure only what's needed

  const handleaddtocart = (item) => {
    Addtocart(item);
    console.log(item);
  };

  // Log cart and total price whenever cart changes
  useEffect(() => {
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cart]); // Only depend on `cart`

  return (
    <div className="container mx-auto my-8 px-4">
      <div className="space-y-8">
        {/* Wireless Earbuds */}
        <div className="mx-auto flex items-center justify-start space-x-4 border-teal-500 border-2 rounded-md max-w-[26rem] md:max-w-[28rem] lg:max-w-[35rem] md:ml-5 lg:ml-14">
          <img src={earbuds} alt="Earbuds" className="object-cover w-35 h-35 rounded-md md:w-40 md:h-40" />
          <div>
            <h1 className="font-bold text-2xl pb-2 text-teal-500 flex items-center space-x-2">
              <span>Earbuds</span>
              <FaCartPlus
                onClick={() => handleaddtocart({ id: 5, name: "Earbuds", price: 24 })}
                className="text-teal-500 text-lg lg:text-2xl ml-4 cursor-pointer hover:text-teal-600"
              />
            </h1>
            <p className="text-gray-600 lg:text-lg">Noise Cancellation, Spatial Audio, 30-hour Battery</p>
            <div className="flex justify-between mt-4">
              <div className="text-gray-500 text-sm lg:text-base">
                Before: <span className="line-through">$45</span>
              </div>
              <div className="font-semibold text-teal-600 mr-2 text-sm lg:text-base">Now: $24</div>
            </div>
          </div>
        </div>

        {/* Hot Toaster */}
        <div className="mx-auto flex items-center justify-start space-x-4 border-teal-500 border-2 rounded-md max-w-[26rem] md:max-w-[28rem] lg:max-w-[35rem] md:mr-5 lg:mr-14">
          <img src={toaster} alt="Electronic Toaster" className="object-cover w-35 h-37 rounded-md md:w-40 md:h-40" />
          <div>
            <h1 className="font-bold text-2xl pb-2 text-teal-500 flex items-center space-x-2">
              <span>Hot Toaster</span>
              <FaCartPlus
                onClick={() => handleaddtocart({ id: 6, name: "Toaster", price: 65 })}
                className="text-teal-500 text-lg lg:text-2xl ml-4 cursor-pointer hover:text-teal-600"
              />
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

        {/* Aesthetic Lamp */}
        <div className="mx-auto flex items-center justify-start space-x-4 border-teal-500 border-2 rounded-md max-w-[26rem] md:max-w-[28rem] lg:max-w-[35rem] md:ml-5 lg:ml-14">
          <img src={lamp} alt="Lamp" className="object-cover w-70 h-35 rounded-md md:w-77 md:h-40" />
          <div>
            <h1 className="font-bold text-2xl pb-2 text-teal-500 flex items-center space-x-2">
              <span>Lamp</span>
              <FaCartPlus
                onClick={() => handleaddtocart({ id: 7, name: "Lamp", price: 66 })}
                className="text-teal-500 text-lg lg:text-2xl ml-4 cursor-pointer hover:text-teal-600"
              />
            </h1>
            <p className="text-gray-600 lg:text-lg">
              The aesthetic lamp features a stylish design, soft lighting.
            </p>
            <div className="flex justify-between mt-4">
              <div className="text-gray-500 text-sm lg:text-base">
                Before: <span className="line-through">$100</span>
              </div>
              <div className="font-semibold text-teal-600 mr-2 text-sm lg:text-base">Now: $66</div>
            </div>
          </div>
        </div>

        {/* 2X Racket */}
        <div className="mx-auto flex items-center justify-start space-x-4 border-teal-500 border-2 rounded-md max-w-[26rem] md:max-w-[28rem] lg:max-w-[35rem] md:mr-5 lg:mr-14">
          <img src={racket} alt="Racket" className="object-cover w-35 h-35 rounded-md md:w-40 md:h-40" />
          <div>
            <h1 className="font-bold text-2xl pb-2 text-teal-500 flex items-center space-x-2">
              <span>2X Racket</span>
              <FaCartPlus
                onClick={() => handleaddtocart({ id: 8, name: "Racket", price: 15 })}
                className="text-teal-500 text-lg lg:text-2xl ml-4 cursor-pointer hover:text-teal-600"
              />
            </h1>
            <p className="text-gray-600 lg:text-lg">
              The racket offers power, control, and a comfortable grip.
            </p>
            <div className="flex justify-between mt-4">
              <div className="text-gray-500 text-sm lg:text-base">
                Before: <span className="line-through">$35</span>
              </div>
              <div className="font-semibold text-teal-600 mr-2 text-sm lg:text-base">Now: $15</div>
            </div>
          </div>
        </div>

        {/* Wall Art */}
        <div className="mx-auto flex items-center justify-start space-x-4 border-teal-500 border-2 rounded-md max-w-[26rem] md:max-w-[28rem] lg:max-w-[35rem] md:ml-5 lg:ml-14">
          <img src={wallart} alt="Wall Art" className="object-cover w-35 h-35 rounded-md md:w-40 md:h-40" />
          <div>
            <h1 className="font-bold text-2xl pb-2 text-teal-500 flex items-center space-x-2">
              <span>Wall Art</span>
              <FaCartPlus
                onClick={() => handleaddtocart({ id: 9, name: "Wall Art", price: 35 })}
                className="text-teal-500 text-lg lg:text-2xl ml-4 cursor-pointer hover:text-teal-600"
              />
            </h1>
            <p className="text-gray-600 lg:text-lg">
              The wall art enhances your space with vibrant colors.
            </p>
            <div className="flex justify-between mt-4">
              <div className="text-gray-500 text-sm lg:text-base">
                Before: <span className="line-through">$60</span>
              </div>
              <div className="font-semibold text-teal-600 mr-2 text-sm lg:text-base">Now: $35</div>
            </div>
          </div>
        </div>

        {/* Beach Chair */}
        <div className="mx-auto flex items-center justify-start space-x-4 border-teal-500 border-2 rounded-md max-w-[26rem] md:max-w-[28rem] lg:max-w-[35rem] md:mr-5 lg:mr-14">
          <img src={beachchair} alt="Beach Chair" className="object-cover w-35 h-35 rounded-md md:w-40 md:h-40" />
          <div>
            <h1 className="font-bold text-2xl pb-2 text-teal-500 flex items-center space-x-2">
              <span>Beach Chair</span>
              <FaCartPlus
                onClick={() => handleaddtocart({ id: 10, name: "Beach Chair", price: 55 })}
                className="text-teal-500 text-lg lg:text-2xl ml-4 cursor-pointer hover:text-teal-600"
              />
            </h1>
            <p className="text-gray-600 lg:text-lg">
              The beach chair provides comfort and a stylish design.
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