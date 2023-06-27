import React from 'react'

const Images = ({src,...rest}) => {
   // Check if the src prop starts with 'https://'
  // If it does, use the src directly as the image source
  // Otherwise, assume the image is hosted locally and construct the source URL
    src = src && src.includes('https://')
    ? src
    : 'http://localhost:5000/uploads/'+src;
    // Render an <img> element with the provided src and other props
  return (
    <img  className="rounded-2xl w-full h-full object-cover" {...rest} src={src} alt={''} />
  );
}

export default Images