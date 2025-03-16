import React from "react";
import greenshirt from "./assets/greenshirt1.jpg";
import yellowshirt from "./assets/yellowshirt1.jpg";
import sneakers from "./assets/sneakers.jpg";
import nailpaint from "./assets/nailpaint.jpg";

const Items = () => {
  return (
    <div className="bg-teal-500 p-5 lg:pl-7" id="items">
      <h1 className="text-5xl font-bold text-white p-5 text-center pt-10 pb-10">Items</h1>
      <div className="container mx-auto md:flex md:flex-row">
        <div className="flex gap-4 flex-col md:gap-2">
          <div className="flex gap-4 md:gap-2 lg:gap-3 flex-col md:flex-row md:mx-auto">
            
            {/* Green Shirt */}
            <div className="md:w-[29%] mx-auto relative">
              <img src={greenshirt} className="w-full h-[400px] md:h-[280px] lg:h-[310px] object-cover" alt="Green Shirt" />
              <div className="absolute top-2 left-2 bg-black text-white px-2 py-1 text-sm font-bold rounded">
               $200/shirt
              </div>
              <button className="absolute top-2 right-2 bg-yellow-400 text-black px-2 py-1 text-xs font-bold rounded">
                + Add to Cart
              </button>
            </div>

            {/* Yellow Shirt */}
            <div className="md:w-[29%] mx-auto relative">
              <img src={yellowshirt} className="w-full h-[400px] md:h-[280px] lg:h-[310px] object-cover" alt="Yellow Shirt" />
              <div className="absolute top-2 left-2 bg-black text-white px-2 py-1 text-sm font-bold rounded">
               $555 only
              </div>
              <button className="absolute top-2 right-2 bg-yellow-400 text-black px-2 py-1 text-xs font-bold rounded">
                + Add to Cart
              </button>
            </div>

            {/* Sneakers */}
            <div className="md:w-[40%] mx-auto relative">
              <img className="md:h-[540px] h-[400px] lg:h-[660px] object-cover" src={sneakers} alt="Sneakers" />
              <div className="absolute top-2 left-2 bg-black text-white px-2 py-1 text-sm font-bold rounded">
              $232 only
              </div>
              <button className="absolute top-2 right-2 bg-yellow-400 text-black px-2 py-1 text-xs font-bold rounded">
                + Add to Cart
              </button>
            </div>
          </div>

          {/* Nail Paint */}
          <div className="flex mx-auto md:w-[100%] md:relative">
            <div className="relative md:w-[58.6%] w-full">
              <img className="w-full h-[400px] md:h-[245px] lg:h-[332px] lg:top-[-340px] md:absolute md:top-[-253px] object-cover" 
                src={nailpaint} 
                alt="Nail Paint" 
              />
              <div className="absolute top-2 md:top-[-246px] lg:top-[-330px] left-2 bg-black text-white px-2 py-1 text-sm font-bold rounded"> 50$ only
              </div>
              <button className="absolute top-2 md:top-[-246px] right-2 lg:top-[-330px] bg-yellow-400 text-black px-2 py-1 text-xs font-bold rounded">
                + Add to Cart
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Items;
