import React from "react";
import { RxCross2 } from "react-icons/rx";
import { useCart } from "./CreateContext"; // Import useCart hook to access cart context

const CartPage = () => {
  const { cart, removeFromCart, getTotalPrice, increaseQuantity, decreaseQuantity } = useCart();

  return (
    <div className="p-4">
      <p className="text-center pt-4 pb-4">
        <span className="font-bold text-xl">UP TO 60% OFF</span> Shop 400+ fresh, new markdowns in stock and ready to ship →
      </p>
      <hr className="font-bold text-gray-600 text-4xl" />

      <div>
        <div className="pt-10 pb-4 ml-4 mr-4">
          <p className="text-xl">Cart:</p>
          {/* Header Row */}
          <div className="flex justify-between bg-gray-200 p-2">
            <p className="flex-1">Product Name</p>
            <p className="flex-1 text-center">Quantity</p>
            <p className="flex-1 text-right">Price</p>
            <p className="flex-1 text-right">Remove</p>
          </div>
        </div>

        {cart.length === 0 ? (
          <p className="text-center">Your cart is empty.</p>
        ) : (
          <div className="p-10 flex flex-col border-2 border-gray-400 ml-4 mr-4">
            {/* Cart Items */}
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center py-4 border-b-2">
                {/* Product Name */}
                <p className="flex-1">{item.name}</p>

                {/* Quantity Controls */}
                <div className="flex-1 flex items-center justify-center gap-2">
                  <button
                    className="bg-gray-300 px-2.5 rounded-sm cursor-pointer hover:bg-gray-400"
                    onClick={() => decreaseQuantity(item.id)} // Decrease quantity
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="bg-gray-300 px-2 rounded-sm cursor-pointer hover:bg-gray-400"
                    onClick={() => increaseQuantity(item.id)} // Increase quantity
                  >
                    +
                  </button>
                </div>

                {/* Price */}
                <p className="flex-1 text-right">${item.price * item.quantity}</p>

                {/* Remove Button */}
                <div className="flex-1 text-right">
                  <button onClick={() => removeFromCart(item.id)}>
                    <RxCross2 className="cursor-pointer text-red-500 hover:text-red-700" />
                  </button>
                </div>
              </div>
            ))}

            {/* Order Total */}
            <div className="pt-4">
              <div className="flex justify-between border-b-2 border-black">
                <p>Est Order Total:</p>
                <p>${getTotalPrice()}</p>
              </div>

              {/* Checkout Section */}
              <div className="flex flex-col md:flex-row gap-4 mt-4">
                <div className="flex-1">
                  <button className="bg-black cursor-pointer text-white w-full py-2 rounded-lg hover:bg-gray-800">
                    CHECKOUT NOW
                  </button>
                </div>

                <div className="flex-1 flex items-center justify-center">
                  <p className="text-center">
                    By confirming to checkout, you are confirming to our{" "}
                    <span className="underline cursor-pointer hover:text-gray-800">Privacy Policy</span> and{" "}
                    <span className="underline cursor-pointer hover:text-gray-800">Terms Of use</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;