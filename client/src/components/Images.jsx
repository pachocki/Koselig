import React from 'react'

const Images = ({src,...rest}) => {
    src = src && src.includes('https://')
    ? src
    : 'https://koselig-wojciech.s3.amazonaws.com/'+src;
  return (
    <img  className="rounded-2xl w-full h-full object-cover" {...rest} src={src} alt={''} />
  );
}

export default Images