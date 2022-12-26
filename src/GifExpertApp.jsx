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
      <div className="titulo-principal">
        <h1>JonHdez GIF's</h1>
      </div>
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
