"use client";
import React, { useState, useEffect } from 'react';
import ItemList from './shopping-list/item-list';
import NewItem from './shopping-list/new-item';
import MealIdeas from './shopping-list/meal-ideas';
import { getItems, addItem } from './_services/shopping-list-service'; // Fixed path
import { useUserAuth } from './_utils/auth-context';

const Page = () => {
  const { user } = useUserAuth();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState('');

  // Fetch items from Firestore
  const loadItems = async () => {
    if (user) {
      const fetchedItems = await getItems(user.uid);
      setItems(fetchedItems);
    }
  };

  useEffect(() => {
    loadItems();
  }, [user]);

  const handleAddItem = async (newItem) => {
    if (user) {
      const newItemId = await addItem(user.uid, newItem);
      setItems([...items, { id: newItemId, ...newItem }]);
    }
  };

  const handleItemSelect = (item) => {
    const cleanedName = item.name
      .split(",")[0]
      .trim()
      .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|[\u2011-\u26FF])/g, '');
    setSelectedItemName(cleanedName);
  };

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
        <div className="max-w-lg">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="ml-10">
          {selectedItemName && <MealIdeas ingredient={selectedItemName} />}
        </div>
      </div>
    </main>
  );
};

export default Page;
