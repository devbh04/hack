import { create } from 'zustand';

const useStore = create((set) => ({
  competitorPrice: 0,
  ourPrice: 10,
  suggestedPrice: 0,
  productWeight: 0,
  stockLeft: 0,
  comparison: {
    sign: '>',
    color: 'bg-green-600',
  },
  selectedItem: null, // Store the selected item details
  sample_input: {
    "Item names": "",
    "Item identifier": "",
    "Item type": "",
    "Time of day": "",
    "Sales": 0,
    "Stock availablity": 0,
    "Supplier cost": 0,
    "Weather condition": "",
    "Festive Season": "",
    "Item weight": 0,
    "Ratings": 0,
    "Days to Expiry": 0,
    "Competitor price": 0,
    "Demand surge": 0,
    "Discounts and promotions": "",
    "Item fat content": "",
    "Customer type": "",
    "Seasonlity": "",
    "Purchase frequency": "",
    "Consumption time": "",
    "Delivery cost": 0,
    "Warehouse stock": 0,
    "Day of the week": "",
  },
  chartData: [], // Add chart data to the store

  // Actions to update the state
  setCompetitorPrice: (cPrice) => set({ competitorPrice: cPrice }),
  setOurPrice: (oPrice) => set({ ourPrice: oPrice }),
  setSuggestedPrice: (sPrice) => set({ suggestedPrice: sPrice }),
  setProductWeight: (prodWeight) => set({ productWeight: prodWeight }),
  setStockLeft: (stock) => set({ stockLeft: stock }),
  setComparison: (sign, color) => set({ comparison: { sign, color } }),
  setSelectedItem: (item) => set({ selectedItem: item }), // Set selected item details
  setChartData: (data) => set({ chartData: data }), // Set chart data

  // Update sample_input with all attributes
  updateSampleInput: (data) => set((state) => ({ sample_input: { ...state.sample_input, ...data } })),

  // Function to generate random values for sample_input
  generateRandomValues: () => {
    const randomDiscount = `${Math.floor(Math.random() * 15) + 7}%`; // Random discount between 7% and 21%
    const randomFatContent = ["NA", "Low Fat", "Regular", "No Fat"][Math.floor(Math.random() * 4)]; // Random fat content
    const randomCustomerType = ["Urban", "Suburban", "Rural"][Math.floor(Math.random() * 3)]; // Random customer type
    const randomSeasonality = ["High", "Low", "Medium"][Math.floor(Math.random() * 3)]; // Random seasonality
    const randomPurchaseFrequency = ["Daily", "Monthly", "Occasionally", "Weekly"][Math.floor(Math.random() * 4)]; // Random purchase frequency
    const randomConsumptionTime = ["Evening", "Morning", "Night"][Math.floor(Math.random() * 3)]; // Random consumption time
    const randomDeliveryCost = Math.floor(Math.random() * 26) + 5; // Random delivery cost between 5 and 30
    const randomWarehouseStock = Math.floor(Math.random() * 221) + 80; // Random warehouse stock between 80 and 300
    const randomDayOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"][Math.floor(Math.random() * 7)]; // Random day of the week

    set((state) => ({
      sample_input: {
        ...state.sample_input,
        "Discounts and promotions": randomDiscount,
        "Item fat content": randomFatContent,
        "Customer type": randomCustomerType,
        "Seasonlity": randomSeasonality,
        "Purchase frequency": randomPurchaseFrequency,
        "Consumption time": randomConsumptionTime,
        "Delivery cost": randomDeliveryCost,
        "Warehouse stock": randomWarehouseStock,
        "Day of the week": randomDayOfWeek,
      },
    }));
  },

  // Fetch items by name
  fetchItems: async (name) => {
    try {
      console.log('Fetching items with name:', name); // Debugging
      const response = await fetch(`https://a735-103-181-14-146.ngrok-free.app/api/items?name=${name}`);
      console.log('Response status:', response.status); // Debugging
      if (!response.ok) {
        throw new Error('Failed to fetch items');
      }
      const data = await response.json();
      console.log('Fetched data:', data); // Debugging
      return data;
    } catch (error) {
      console.error('Error fetching items:', error); // Debugging
      return [];
    }
  },

  // Fetch item details by ID
  fetchItemDetails: async (id) => {
    try {
      console.log('Fetching item details for ID:', id); // Debugging
      const response = await fetch(`https://a735-103-181-14-146.ngrok-free.app/api/items/${id}`);
      console.log('Response status:', response.status); // Debugging
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Item not found');
        } else {
          throw new Error('Failed to fetch item details');
        }
      }
      const data = await response.json();
      console.log('Fetched item details:', data); // Debugging
      set({ selectedItem: data }); // Update selected item in the store
    } catch (error) {
      console.error('Error fetching item details:', error); // Debugging
      set({ selectedItem: null }); // Clear selected item in the store
    }
  },
}));

export default useStore;