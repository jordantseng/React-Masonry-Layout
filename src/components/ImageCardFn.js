import React, { useEffect, useRef, useState } from 'react';

const ImageCardFn = ({ image }) => {
  const imageRef = useRef(); // useRef can access the DOM
  const [spans, setSpans] = useState(0);

  useEffect(() => {
    // from my observation, the reason getting 0 here is that VDOM is not updated to DOM yet
    // console.log(imageRef.current.clientHeight); // 0

    imageRef.current.addEventListener('load', calculateSpans);
  }, []);

  const calculateSpans = () => {
    const height = imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);

    setSpans(spans);
  };

  return (
    <div style={{ gridRowEnd: `span ${spans}` }}>
      <img ref={imageRef} alt={image.description} src={image.urls.regular} />
    </div>
  );
};

export default ImageCardFn;
