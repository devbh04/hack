"use client";

import { Chart } from "./linechart";
import useStore from "@/app/store"; // Import the Zustand store

const HeroSection = () => {
  // Get state and actions from the store
  const { competitorPrice, ourPrice, suggestedPrice, comparison, productWeight, stockLeft , selectedItem} = useStore();
  
  return (
    <div className="w-full p-10 flex flex-col gap-8 overflow-hidden bg-slate-50">
    {selectedItem ? (
      <>
    <div className="w-full p-10 flex flex-col gap-8 overflow-hidden bg-slate-50"> {/* Prevent overflow */}
      {/* First Row: Price Boxes */}
      <div className="flex flex-col md:flex-row gap-8 items-center">
        {/* Past Price Box */}
        <div className="flex-1 p-6 border-2 border-gray-400 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300">
          <p className="text-xl text-gray-700 text-center">Past Price</p>
          <p className="text-2xl font-bold text-black text-center">{selectedItem.Price}</p>
        </div>

        {/* Suggested Price Box */}
        <div className="flex-1 p-6 border-2 border-yellow-500 rounded-lg bg-white shadow-md shadow-amber-200 hover:shadow-lg transition-all duration-300">
          <div className="flex gap-1 justify-center">
            <p className="text-xl text-gray-700 text-center">Suggested</p>
            <p className="text-xl text-center text-green-700 font-extrabold">Price</p>
          </div>
          <p className="text-2xl font-bold text-black text-center">₹{suggestedPrice.toFixed(2)}</p>
        </div>
        <div className="flex-1 p-6 border-2 border-gray-400 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300">
          <p className="text-xl text-gray-700 text-center">Consumption Time</p>
          <p className="text-2xl font-bold text-black text-center">{selectedItem.Consumption_time}</p>
        </div>
        <div className="flex-1 p-6 border-2 border-gray-400 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300">
          <p className="text-xl text-gray-700 text-center">Competitor Price</p>
          <p className="text-2xl font-bold text-black text-center">₹{competitorPrice}</p>
        </div>
        <div className={`h-min w-min p-6 border-2 border-yellow-500 rounded-lg shadow-md shadow-amber-200 hover:shadow-lg transition-all duration-300 ${comparison.color}`}>
          <p className="text-2xl font-bold text-center text-white">{comparison.sign}</p>
        </div>
        <div className="flex-1 p-6 border-2 border-gray-400 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300">
          <p className="text-xl text-gray-700 text-center">Our Price</p>
          <p className="text-2xl font-bold text-black text-center">₹{selectedItem.Price}</p>
        </div>
      </div>

      {/* Second Row: Price Boxes (Duplicate) */}
      <div className="flex gap-8">
        {/* Past Price Box */}
        <div className="w-64 flex flex-col gap-4">
          <div className="flex-1 p-6 border-2 border-gray-400 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300">
            <p className="text-xl text-gray-700 text-center">Supplier Cost</p>
            <div className="flex justify-center items-center gap-2">
              <p className="text-2xl font-bold text-black text-center">₹{selectedItem.Supplier_cost}</p>
            </div>
          </div>
      
          {/* Suggested Price Box */}
          <div className="flex-1 p-6 border-2 border-gray-400 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300">
            <p className="text-xl text-gray-700 text-center">Delivery Cost</p>
            <p className="text-2xl font-bold text-black text-center">{selectedItem.Delivery_cost}</p>
          </div>
          
          <div className="flex-1 p-6 border-2 border-gray-400 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300">
            <p className="text-xl text-gray-700 text-center">Product Weight</p>
            <p className="text-2xl font-bold text-black text-center">{productWeight}</p>
          </div>
          <div className="flex-1 p-6 border-2 border-gray-400 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300">
            <p className="text-xl text-gray-700 text-center">Expiry Date</p>
            <p className="text-2xl font-bold text-black text-center">
              {selectedItem.Expiry_Date.split('T')[0]}
            </p>
          </div>
        </div>
          {/* Chart Section */}
          <div className="p-6 w-full border-2 border-gray-400 rounded-lg bg-amber-100 shadow-md hover:shadow-lg transition-all duration-300">
            <p className="text-xl text-black text-center mb-4">Price Trend</p>
            <div className="w-full h-min">
              <Chart selectedItem={selectedItem}/> {/* Chart component without dummy data */}
            </div>
          </div>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8 items-center">
        {/* Past Price Box */}
        <div className="flex-1 p-6 border-2 border-gray-400 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300">
          <p className="text-xl text-gray-700 text-center">Stock</p>
          <p className="text-2xl font-bold text-black text-center">{stockLeft}</p>
        </div>
        <div className="flex-1 p-6 border-2 border-gray-400 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300">
          <p className="text-xl text-gray-700 text-center">Rating</p>
          <div className="flex justify-center items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-yellow-500">
            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
          </svg>
            <p className="text-2xl font-bold text-black text-center">{selectedItem.Ratings}</p>
          </div>
        </div>
        <div className="flex-1 p-6 border-2 border-gray-400 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300">
          <p className="text-xl text-gray-700 text-center">Customer Type</p>
          <p className="text-2xl font-bold text-black text-center">{selectedItem.Customer_type}</p>
        </div>
        <div className="flex-1 p-6 border-2 border-gray-400 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300">
          <p className="text-xl text-gray-700 text-center">Purchasing Frequency</p>
          <p className="text-2xl font-bold text-black text-center">{selectedItem.Purchase_Frequency}</p>
        </div>
        <div className="flex-1 p-6 border-2 border-gray-400 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300">
          <p className="text-xl text-gray-700 text-center">Discount</p>
          <p className="text-2xl font-bold text-black text-center">7%</p>
        </div>

        {/* Suggested Price Box */}
      </div>
    </div>
    </>
      ) : (
        // Display a message if no item is selected
        <div className="text-center text-2xl text-gray-700">
          Select an item to view details.
        </div>
      )}
       </div>
  );
};

export default HeroSection;