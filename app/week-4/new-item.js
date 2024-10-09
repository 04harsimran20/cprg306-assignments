"use client";
import { useState } from "react";

const NewItem = () => {
    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        if (quantity < 20) {
            setQuantity(quantity + 1);
        }
    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="flex items-center space-x-4">
            <span className="text-black text-xl">{quantity}</span>
            <button 
                onClick={decrement} 
                disabled={quantity === 1} 
                className="px-4 py-2 bg-gray-400 text-white rounded-md shadow-md hover:bg-gray-500 disabled:opacity-50"
            >
                -
            </button>
            <button 
                onClick={increment} 
                disabled={quantity === 20} 
                className="px-4 py-2 bg-indigo-400 text-white rounded-md shadow-md hover:bg-indigo-500 disabled:opacity-50"
            >
                +
            </button>
        </div>
    );
};

export default NewItem;
