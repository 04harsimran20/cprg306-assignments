// page.js
import React from 'react';
import ItemList from './item-list';

const Page = () => {
  return (
    <main className="min-h-screen bg-gray-950 text-white p-9">
      <h1 className="text-3xl font-bold mb-10 text-left">Shopping List</h1>
      <div className="max-w-lg mx-0">
        <ItemList />
      </div>
    </main>
  );
};

export default Page;
