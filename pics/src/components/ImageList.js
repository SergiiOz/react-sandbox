import React from 'react';

const ImageList = (props) => {
  const imgList = props.images.map((image) => {
    return (
      <li key={image.id}>
        <img
          style={{ maxWidth: '500px' }}
          src={image.urls.regular}
          alt={image.description}
        />
      </li>
    );
  });
  return (
    <div>
      <h1>Image List</h1>
      <ul>{imgList}</ul>
    </div>
  );
};

export default ImageList;
