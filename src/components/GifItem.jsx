import React from "react";
import PropTypes from "prop-types";

export const GifItem = ({image}) => {
  return (
    <div className="card">
      <img src={image.url} alt={image.title} />
    </div>
  );
};

GifItem.propTypes = {
  image: PropTypes.object.isRequired,
}
