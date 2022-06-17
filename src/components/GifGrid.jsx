import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { LoadingIcon } from '../helpers/LoadingIcon';
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {isLoading && < LoadingIcon />}
      <div className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id} image={image} />
        ))}
      </div>
    </>
  );
};

