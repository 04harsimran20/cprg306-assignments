// new-item.js
"use client";
import { useState } from "react";

const NewItem = ({ onAddItem }) => {
    const [name, setName] = useState('');          
    const [quantity, setQuantity] = useState(1);   
    const [category, setCategory] = useState('produce'); 

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

    const handleSubmit = (e) => {
        e.preventDefault();
        const item = { 
            id: Math.random().toString(36).substr(2, 9),
            name, 
            quantity, 
            category 
        };
        
        onAddItem(item); 
        setName('');
        setQuantity(1);
        setCategory('produce');
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 p-4 w-96 bg-gray-900 rounded-lg shadow-lg text-center">
            <div>
                <input 
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Item name"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
                />
            </div>

            <div className="flex items-center justify-center space-x-4">
                <button 
                    type="button"
                    onClick={decrement} 
                    disabled={quantity === 1} 
                    className="px-3 py-1 bg-gray-300 text-black rounded-full hover:bg-gray-400 disabled:opacity-50"
                >
                    -
                </button>
                <span className="text-black text-lg">{quantity}</span>
                <button 
                    type="button"
                    onClick={increment} 
                    disabled={quantity === 20} 
                    className="px-3 py-1 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 disabled:opacity-50"
                >
                    +
                </button>
            </div>

            <div>
                <select 
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
                >
                    <option value="produce">Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat</option>
                    <option value="frozen">Frozen Foods</option>
                    <option value="canned">Canned Goods</option>
                    <option value="dry">Dry Goods</option>
                    <option value="beverages">Beverages</option>
                    <option value="snacks">Snacks</option>
                    <option value="household">Household</option>
                    <option value="other">Other</option>
                </select>
            </div>

            <button 
                type="submit"
                className="w-full py-2 bg-indigo-500 text-white rounded-lg shadow-md hover:bg-indigo-600"
            >
                +
            </button>
        </form>
    );
};

export default NewItem;
