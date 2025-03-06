"use client";

import React, { useState } from 'react';
import { ComboboxDemoItem } from '../ui/comboboxitems';
import { TimePicker } from '../ui/time-picker';
import { Input } from '../ui/input';
import { SelectWeather } from '../ui/selectweather';
import { SelectSeason } from '../ui/selectSeason';
import useStore from "@/app/store"; // Import the Zustand store
import { Button } from '../ui/button';

const SideBar = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [sales, setSales] = useState(0);
  const [supplierCost, setSupplierCost] = useState(0);
  const [weatherCondition, setWeatherCondition] = useState("");
  const [festiveSeason, setFestiveSeason] = useState("");
  const [productRating, setProductRating] = useState(0);

  // Get actions and state from the store
  const {
    setCompetitorPrice,
    setOurPrice,
    setSuggestedPrice,
    setComparison,
    setProductWeight,
    setStockLeft,
    updateSampleInput,
    selectedItem,
    setSupplierPrice,
    setItemName,
    setItemCategory,
    setDaysToExpiry,
    setDemandSurge
  } = useStore();

  const {
    stockLeft,
    supplierPrice,
    daystoexpiry,
    demandSurge
  } = useStore();

  const handleDateChange = (newDate: Date | undefined) => {
    if (newDate) {
      console.log(newDate);
      setDate(new Date(newDate));
    } else {
      setDate(undefined);
    }
  };

  const handleCompChange = (e) => {
    const compPrice = Number(e.target.value);
    setCompetitorPrice(compPrice);

    // Determine the comparison sign and color
    if (compPrice > useStore.getState().ourPrice) {
      setComparison(">", "bg-green-500"); // Red for greater than
    } else {
      setComparison("<", "bg-red-500"); // Green for less than
    }
  };

  // Function to calculate the suggested price
  const suggestPrice = (selectedItem, stockLeft,) => {
    // Normalize values
    const normalize = (value, min, max) => (value - min) / (max - min);
  
    // Define normalization ranges
    const competitorPriceRange = { min: selectedItem.Price * 0.5, max: selectedItem.Price * 1.5 };
    const supplierCostRange = { min: selectedItem.Price * 0.2, max: selectedItem.Price * 1.2 };
    const stockLeftRange = { min: 0, max: 1000 };
    const salesRange = { min: 0, max: 500 };
    const expiryRange = { min: 0, max: 365 };
    const demandSurgeRange = { min: 0, max: 100 };
  
    // Normalize each factor
    const CP = normalize(selectedItem.Competitor_price, competitorPriceRange.min, competitorPriceRange.max);
    const SC = normalize(supplierPrice, supplierCostRange.min, supplierCostRange.max);
    const SL = normalize(stockLeft, stockLeftRange.min, stockLeftRange.max);
    const S = normalize(selectedItem.Sales, salesRange.min, salesRange.max);
    const Exp = 1 - normalize(daystoexpiry, expiryRange.min, expiryRange.max); // Less expiry days -> lower price
    const DS = normalize(demandSurge, demandSurgeRange.min, demandSurgeRange.max);
  
    // Weighted sum based on market conditions
    const basePrice = selectedItem.Price;
    const weightedSum = (CP * 0.30) + (SC * 0.20) + (SL * 0.10) + (S * 0.15) + (Exp * 0.15) + (DS * 0.10);
  
    // Adjust price dynamically
    const priceMultiplier = basePrice * (0.85 + weightedSum * 0.3); // Adjust range
  
    return priceMultiplier;
  };
  
  

  const handleClick = () => {
    if (!selectedItem) {
      console.error('No item selected');
      return;
    }

    // Calculate the suggested price using the mathematical algorithm
    const calculatedSuggestedPrice = suggestPrice(selectedItem, stockLeft);

    // Update the suggested price in the Zustand store
    setSuggestedPrice(calculatedSuggestedPrice);

    console.log('Suggested Price:', calculatedSuggestedPrice);
  };

  return (
    <div className='border-r w-1/4 h-screen overflow-y-auto'>
      <div className='text-2xl flex flex-col justify-center items-center font-extrabold px-8 py-4 border-b'>
        <p className='flex justify-center'>Enter Product Information</p>
        <Button className={'w-40 ' + selectedItem? "" : "cursor-not-allowed"} disabled={!selectedItem} onClick={handleClick}>Predict Price</Button>
      </div>
      <div className='px-4 py-2 flex flex-col'>
        <p className='pl-1'>Enter the Product name/ID: </p>
        <ComboboxDemoItem />
      </div>
      <div className='px-4 py-2 flex flex-col'>
        <p className='pl-1'>Set Time: </p>
        <div className="grid">
          <div className="grid gap-2">
            <TimePicker date={date} setDate={handleDateChange} />
          </div>
          {date && <p className="text-sm text-muted-foreground pl-1">Selected time: {date.toLocaleTimeString()}</p>}
        </div>
      </div>
      <div className='px-4 py-2 flex flex-col'>
        <p className='pl-1'>Sales of Product: </p>
        <Input placeholder='Amount' onChange={(e) => setSales(Number(e.target.value))} />
      </div>
      <div className='px-4 py-2 flex flex-col'>
        <p className='pl-1'>Stock Availability: </p>
        <Input placeholder='...' onChange={(e) => setStockLeft(Number(e.target.value))} />
      </div>
      <div className='px-4 py-2 flex flex-col'>
        <p className='pl-1'>Supplier Cost: </p>
        <Input placeholder='Amount' onChange={(e) => setSupplierPrice(Number(e.target.value))} />
      </div>
      <div className='px-4 py-2 flex flex-col'>
        <p className='pl-1'>Weather Condition: </p>
        <SelectWeather onValueChange={(value) => setWeatherCondition(value)} />
      </div>
      <div className='px-4 py-2 flex flex-col'>
        <p className='pl-1'>Select Festive Season: </p>
        <SelectSeason onValueChange={(value) => setFestiveSeason(value)} />
      </div>
      <div className='px-4 py-2 flex flex-col'>
        <p className='pl-1'>Product Weight: </p>
        <Input placeholder='in grams' onChange={(e) => setProductWeight(Number(e.target.value))} />
      </div>
      <div className='px-4 py-2 flex flex-col'>
        <p className='pl-1'>Product Rating: </p>
        <Input placeholder='...' onChange={(e) => setProductRating(Number(e.target.value))} />
      </div>
      <div className='px-4 py-2 flex flex-col'>
        <p className='pl-1'>Competitor Pricing: </p>
        <Input placeholder='Amount' onChange={handleCompChange} />
      </div>
      <div className='px-4 py-2 flex flex-col'>
        <p className='pl-1'>Days to Expiry: </p>
        <Input placeholder='...' onChange={(e) => setDaysToExpiry(Number(e.target.value))} />
      </div>
      <div className='px-4 py-2 flex flex-col'>
        <p className='pl-1'>Demand Surge: </p>
        <Input placeholder='...' onChange={(e) => setDemandSurge(Number(e.target.value))} />
      </div>
    </div>
  );
};

export default SideBar;