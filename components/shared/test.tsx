"use client";
import useStore from "@/app/store"; // Import the Zustand store

const HeroSection = () => {
  // Get the selected item from the Zustand store
  const { selectedItem } = useStore();

  return (
    <div className="w-full p-10 flex flex-col gap-8 overflow-hidden bg-slate-50">
      {/* Render item details if an item is selected */}
      {selectedItem ? (
        <>
          {/* First Row: Item Details */}
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Item Name */}
            <div className="flex-1 p-6 border-2 border-gray-400 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300">
              <p className="text-xl text-gray-700 text-center">Item Name</p>
              <p className="text-2xl font-bold text-black text-center">
                {selectedItem.Item_name}
              </p>
            </div>

            {/* Item Identifier */}
            <div className="flex-1 p-6 border-2 border-gray-400 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300">
              <p className="text-xl text-gray-700 text-center">Item ID</p>
              <p className="text-2xl font-bold text-black text-center">
                {selectedItem.Item_identifier}
              </p>
            </div>

            {/* Item Type */}
            <div className="flex-1 p-6 border-2 border-gray-400 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300">
              <p className="text-xl text-gray-700 text-center">Item Type</p>
              <p className="text-2xl font-bold text-black text-center">
                {selectedItem.Item_type}
              </p>
            </div>
          </div>

          {/* Second Row: Pricing and Stock */}
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Price */}
            <div className="flex-1 p-6 border-2 border-gray-400 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300">
              <p className="text-xl text-gray-700 text-center">Price</p>
              <p className="text-2xl font-bold text-black text-center">
                ₹{selectedItem.Price}
              </p>
            </div>

            {/* Competitor Price */}
            <div className="flex-1 p-6 border-2 border-gray-400 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300">
              <p className="text-xl text-gray-700 text-center">Competitor Price</p>
              <p className="text-2xl font-bold text-black text-center">
                ₹{selectedItem.Competitor_price}
              </p>
            </div>

            {/* Stock Availability */}
            <div className="flex-1 p-6 border-2 border-gray-400 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300">
              <p className="text-xl text-gray-700 text-center">Stock Available</p>
              <p className="text-2xl font-bold text-black text-center">
                {selectedItem.Stock_availability}
              </p>
            </div>
          </div>

          {/* Third Row: Additional Details */}
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Item Weight */}
            <div className="flex-1 p-6 border-2 border-gray-400 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300">
              <p className="text-xl text-gray-700 text-center">Item Weight</p>
              <p className="text-2xl font-bold text-black text-center">
                {selectedItem.Item_weight} kg
              </p>
            </div>

            {/* Supplier Cost */}
            <div className="flex-1 p-6 border-2 border-gray-400 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300">
              <p className="text-xl text-gray-700 text-center">Supplier Cost</p>
              <p className="text-2xl font-bold text-black text-center">
                ₹{selectedItem.Supplier_cost}
              </p>
            </div>

            {/* Delivery Cost */}
            <div className="flex-1 p-6 border-2 border-gray-400 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300">
              <p className="text-xl text-gray-700 text-center">Delivery Cost</p>
              <p className="text-2xl font-bold text-black text-center">
                ₹{selectedItem.Delivery_cost}
              </p>
            </div>
          </div>

          {/* Fourth Row: Sales and Demand */}
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Sales */}
            <div className="flex-1 p-6 border-2 border-gray-400 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300">
              <p className="text-xl text-gray-700 text-center">Sales</p>
              <p className="text-2xl font-bold text-black text-center">
                {selectedItem.Sales}
              </p>
            </div>

            {/* Demand Surge */}
            <div className="flex-1 p-6 border-2 border-gray-400 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300">
              <p className="text-xl text-gray-700 text-center">Demand Surge</p>
              <p className="text-2xl font-bold text-black text-center">
                {selectedItem.Demand_surge}
              </p>
            </div>

            {/* Purchase Frequency */}
            <div className="flex-1 p-6 border-2 border-gray-400 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300">
              <p className="text-xl text-gray-700 text-center">Purchase Frequency</p>
              <p className="text-2xl font-bold text-black text-center">
                {selectedItem.Purchase_Frequency}
              </p>
            </div>
          </div>

          {/* Fifth Row: Weather and Festive Season */}
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Weather Condition */}
            <div className="flex-1 p-6 border-2 border-gray-400 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300">
              <p className="text-xl text-gray-700 text-center">Weather Condition</p>
              <p className="text-2xl font-bold text-black text-center">
                {selectedItem.Weather_condition}
              </p>
            </div>

            {/* Festive Season */}
            <div className="flex-1 p-6 border-2 border-gray-400 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300">
              <p className="text-xl text-gray-700 text-center">Festive Season</p>
              <p className="text-2xl font-bold text-black text-center">
                {selectedItem.Festive_Season || "N/A"}
              </p>
            </div>

            {/* Ratings */}
            <div className="flex-1 p-6 border-2 border-gray-400 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300">
              <p className="text-xl text-gray-700 text-center">Ratings</p>
              <div className="flex justify-center items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6 text-yellow-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-2xl font-bold text-black text-center">
                  {selectedItem.Ratings}
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        // Display a message if no item is selected
        <div className="">
          Select an item to view details.
        </div>
      )}
    </div>
  );
};

export default HeroSection;