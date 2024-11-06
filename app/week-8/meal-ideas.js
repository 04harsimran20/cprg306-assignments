"use client";
import React, { useState, useEffect } from 'react';

const MealIdeas = ({ ingredient }) => {
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState(null);

  // List of alternative ingredient names to try (for broader results)
  const alternativeNames = [ingredient, ingredient.split(" ")[0]]; // Try both full name and the first word

  // Function to fetch meal ideas based on ingredient variations
  const fetchMealIdeas = async () => {
    setLoading(true);
    setMeals([]); // Reset meals for new fetch
    try {
      let allMeals = [];

      for (let name of alternativeNames) {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${name}`);
        const data = await response.json();
        if (data.meals) {
          allMeals = [...allMeals, ...data.meals];
        }
      }

      // Remove duplicates by meal ID
      const uniqueMeals = Array.from(new Set(allMeals.map(meal => meal.idMeal)))
        .map(id => allMeals.find(meal => meal.idMeal === id));

      setMeals(uniqueMeals);
    } catch (err) {
      setError("Failed to fetch meal ideas. Please try again.");
    }
    setLoading(false);
  };

  // Function to fetch detailed meal information, including ingredients
  const fetchMealDetails = async (mealId) => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
      const data = await response.json();
      setSelectedMeal(data.meals[0] || null);
    } catch (err) {
      setError("Failed to fetch meal details. Please try again.");
    }
  };

  // Function to display ingredients in a structured format
  const renderIngredients = (meal) => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      if (ingredient) {
        ingredients.push(`${ingredient} (${measure.trim()})`);
      }
    }
    return ingredients.map((item, index) => (
      <li key={index} className="text-gray-400 text-sm">{item}</li>
    ));
  };

  // Fetch meal ideas when ingredient changes
  useEffect(() => {
    if (ingredient) {
      fetchMealIdeas();
      setSelectedMeal(null); // Reset selected meal when ingredient changes
    }
  }, [ingredient]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Meal Ideas</h2>
      <p className="mb-4">Here are some meal ideas using {ingredient}:</p>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      
      {meals.length > 0 ? (
        <ul>
          {meals.map((meal) => (
            <li 
              key={meal.idMeal} 
              className="bg-gray-800 text-white p-3 rounded mb-2 cursor-pointer hover:bg-gray-700"
              onClick={() => fetchMealDetails(meal.idMeal)}
            >
              <p className="font-semibold">{meal.strMeal}</p>
              {/* Display ingredients if this meal is selected */}
              {selectedMeal && selectedMeal.idMeal === meal.idMeal && (
                <div className="mt-2">
                  <p className="text-gray-400 text-sm font-semibold">Ingredients needed:</p>
                  <ul className="mt-1">{renderIngredients(selectedMeal)}</ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      ) : (
        !loading && <p>No meal ideas found for this ingredient.</p>
      )}
    </div>
  );
};

export default MealIdeas;
