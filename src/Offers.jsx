import React from 'react';
import offerimg from './assets/offers.jpg';
import { BiSolidOffer } from "react-icons/bi";
import InsideOffers from './InsideOffers';

const Offers = () => {
  return (
    <div className="bg-whitee pb-10 " id='offers'>
      <div className="relative pt-2">
        <img className="w-full h-33 object-cover" src={offerimg} alt="Offers" />

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center space-x-2 text-white text-4xl font-bold">
          <h1 className="flex justify-center items-center  font-bold text-5xl text-teal-500">Offers</h1>
          <BiSolidOffer className='text-teal-500 font-bold text-2xl' />
        </div>
      </div>
      <InsideOffers/>
    </div>
  );
};

export default Offers;
