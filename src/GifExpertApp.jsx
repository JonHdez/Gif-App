import React from "react";
import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {
    const newCategoryLowerCase = newCategory.toLowerCase();
    if (categories.includes(newCategoryLowerCase)) return;

    setCategories([newCategoryLowerCase, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={onAddCategory} />
        {
          categories.map((category) => 
            <GifGrid 
              key={category} 
              category={category}
            />
          )
        }
    </>
  );
};
