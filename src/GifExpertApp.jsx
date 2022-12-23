import React from 'react'
import { useState } from "react";
import { AddCategory }   from './components/AddCategory';
export const GifExpertApp = () => {

  const [categories, setCategories] = useState([]);

  const onAddCategory = () => {
    setCategories([...categories,'Valorant']); 
  }

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory setCategories={setCategories} />
      <ol>
        { categories.map( (category) => {
          return <li key={category} > { category } </li>
        } ) }
      </ol>
    </>
  )
}