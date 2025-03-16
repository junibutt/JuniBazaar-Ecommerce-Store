import React from "react";
import { FaTruck } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa";
import { RiSecurePaymentFill } from "react-icons/ri";

const Cards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-screen-xl mx-auto p-4 cursor-pointer pt-6">
      <div className="flex flex-col items-center bg-white border p-6 rounded-lg shadow-md hover:shadow-lg transform hover:translate-y-[-6px] hover:scale-100 transition-all duration-300">
        <div className="text-4xl text-teal-500 mb-4">
          <FaTruck />
        </div>
        <h2 className="text-xl text-red font-semibold mb-2">Free Shipping</h2>
        <p className="text-gray-600 text-center">
          Free shipping on all US orders or orders above $300.
        </p>
      </div>

      <div className="flex flex-col items-center bg-white border p-6 rounded-lg shadow-md hover:shadow-lg transform hover:translate-y-[-10px] hover:scale-105 transition-all duration-300">
        <div className="text-4xl text-teal-500 mb-4">
          <FaBoxOpen />
        </div>
        <h2 className="text-xl text-red font-semibold mb-2">30 Days Return</h2>
        <p className="text-gray-600 text-center">
          Simply return it within 30 days for return policy.
        </p>
      </div>

      <div className="flex flex-col items-center bg-white border p-6 rounded-lg shadow-md hover:shadow-lg transform hover:translate-y-[-10px] hover:scale-105 transition-all duration-300">
        <div className="text-4xl text-teal-500 mb-4">
          <RiSecurePaymentFill />
        </div>
        <h2 className="text-xl text-red font-semibold mb-2 whitespace-nowrap">100% Payment Secure</h2>
        <p className="text-gray-600 text-center">
          You don't have to worry about payment issues. You are just in safe hands.
        </p>
      </div>
    </div>
  );
};

export default Cards;
