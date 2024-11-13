import React from 'react';

const Item = ({ name, quantity, category, onSelect }) => {
  return (
    <li 
      className="bg-gray-900 text-white p-5 rounded mb-4 flex flex-col text-left cursor-pointer hover:bg-gray-700" 
      onClick={onSelect} // Trigger onSelect when clicked
    >
      <span className="font-semibold">{name}</span>
      <span className="text-sm text-gray-500">Buy {quantity} in {category}</span>
    </li>
  );
};

export default Item;
