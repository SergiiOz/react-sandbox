import React from 'react';
import ImageCard from './ImageCard';
import './ImageList.css';

const ImageList = (props) => {
  const imgList = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });

  return (
    <div>
      <h1>Image List</h1>
      <ul className="image-list">{imgList}</ul>
    </div>
  );
};

export default ImageList;
