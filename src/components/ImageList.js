import React from 'react';
import './ImageList.css';

// import ImageCard from './ImageCard';
import ImageCardFn from './ImageCardFn';

const ImageList = ({ images }) => {
  return (
    <div className='image-list'>
      {images.map((image) => (
        // <ImageCard key={image.id} image={image} />
        <ImageCardFn key={image.id} image={image} />
      ))}
    </div>
  );
};

export default ImageList;
