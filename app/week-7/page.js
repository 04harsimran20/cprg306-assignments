// page.js
"use client";
import React, { useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items.json';

const Page = () => {
  // Initialize state with items from items.json
  const [items, setItems] = useState(itemsData);

  // Handler function to add a new item
  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white p-9">
      <h1 className="text-3xl font-bold mb-10 text-left">Shopping List</h1>
      
      <div className="max-w-lg mx-0">
        {/* Render NewItem component, passing handleAddItem as a prop */}
        <NewItem onAddItem={handleAddItem} />
        
        {/* Render ItemList component, passing items as a prop */}
        <ItemList items={items} />
      </div>
    </main>
  );
};

export default Page;
