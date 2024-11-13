"use client";
import React, { useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import MealIdeas from './meal-ideas';
import itemsData from './items.json';
import { useUserAuth } from "../_utils/auth-context"; // Import the auth hook

const Page = () => {
  const { user } = useUserAuth(); // Get the authenticated user
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState('');

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleItemSelect = (item) => {
    const cleanedName = item.name
      .split(",")[0]
      .trim()
      .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|[\u2011-\u26FF])/g, '');
    setSelectedItemName(cleanedName);
  };

  // Check if the user is authenticated
  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <p>You need to be signed in to view this page.</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-950 text-white p-9">
      <h1 className="text-3xl font-bold mb-10 text-left">Shopping List</h1>

      <div className="flex">
        {/* Left side: NewItem and ItemList */}
        <div className="max-w-lg">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>

        {/* Right side: MealIdeas */}
        <div className="ml-10">
          {selectedItemName && <MealIdeas ingredient={selectedItemName} />}
        </div>
      </div>
    </main>
  );
};

export default Page;
