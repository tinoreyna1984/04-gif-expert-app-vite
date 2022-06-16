import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

import spinner from '../../assets/blocks-scale-spinner.svg';

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {isLoading && <img src={spinner} alt="Loading..." />}
      <div className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id} image={image} />
        ))}
      </div>
    </>
  );
};

