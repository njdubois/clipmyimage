import React, { useEffect, useRef } from 'react';

export const ParentCanvas = (
  {
    img,
    scale,
    x, y,
    width,
    height,
    setRef,
    parentXOffset,
    parentYOffset
  }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const image = new Image();
    image.src = img;
    image.onload = () => {
      canvas.width = (image.width * scale) + parseInt(parentXOffset);
      canvas.height = (image.height * scale) + parseInt(parentYOffset);

      context.drawImage(image, parentXOffset, parentYOffset, image.width * scale, image.height * scale);
      context.strokeStyle = 'red';
      context.strokeRect(x - 5, y - 5, parseInt(width) + 10, parseInt(height) + 10);
    };
  }, [img, scale, x, y, width, height, parentXOffset, parentYOffset]);

  setRef(canvasRef);

  return <canvas ref={canvasRef}/>;
};

export default ParentCanvas;