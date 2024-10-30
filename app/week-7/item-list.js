// item-list.js
"use client"; 

import React, { useState } from 'react';
import Item from './item';

const ItemList = ({ items }) => {
  const [sortBy, setSortBy] = useState('name');

  // Sort the items based on the selected sort option
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  // Group the items by category if the selected sort option is 'grouped-category'
  const groupedItems = items.reduce((groups, item) => {
    if (!groups[item.category]) {
      groups[item.category] = [];
    }
    groups[item.category].push(item);
    return groups;
  }, {});

  return (
    <div>
      {/* Sorting buttons */}
      <div className="mb-5 flex space-x-4">
        <button
          onClick={() => setSortBy('name')}
          className={`px-4 py-2 rounded ${
            sortBy === 'name' ? 'bg-orange-500' : 'bg-gray-700'
          } text-white`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy('category')}
          className={`px-4 py-2 rounded ${
            sortBy === 'category' ? 'bg-orange-500' : 'bg-gray-700'
          } text-white`}
        >
          Sort by Category
        </button>
        <button
          onClick={() => setSortBy('grouped-category')}
          className={`px-4 py-2 rounded ${
            sortBy === 'grouped-category' ? 'bg-orange-500' : 'bg-gray-700'
          } text-white`}
        >
          Grouped by Category
        </button>
      </div>

      {/* Render items based on the selected sort option */}
      {sortBy !== 'grouped-category' ? (
        <ul>
          {sortedItems.map((item) => (
            <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
          ))}
        </ul>
      ) : (
        // Render grouped items when grouped by category
        Object.keys(groupedItems).sort().map((category) => (
          <div key={category}>
            <h2 className="text-xl font-bold mb-3 capitalize">{category}</h2>
            <ul className="mb-6">
              {groupedItems[category].map((item) => (
                <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
};

export default ItemList;
