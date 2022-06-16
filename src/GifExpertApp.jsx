import React from "react";
import { useState } from "react";
import { AddCategory, GifGrid} from "./components";
import "./styles.css";

const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    
  ]);

  const onAddCategory = (cat) => {
    if (categories.includes(cat)) return;
    setCategories([cat, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory addCategory={onAddCategory} />
      {categories.map((category) => (
        <GifGrid category={category} key={category} />
      ))}
    </>
  );
};

export default GifExpertApp;
