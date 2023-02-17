import React from 'react';
import { Typography } from '..';

type Props = {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  text?: string;
  className?: string;
  imageClass?: string;
};

const CardMedia = ({
  src,
  alt,
  className,
  imageClass,
  width,
  height,
}: Props) => {
  return (
    <div
      className={` relative w-full  ${className || ''}`}
      style={{
        width,
        height,
      }}
    >
      <img
        className={`w-full h-full object-cover ${imageClass || ''}`}
        src={src}
        alt={alt}
      />
      <Typography
        as="span"
        variant="body-sm-medium"
        className=" px-2 py-1 bg-white-transparent absolute  top-3 right-3 rounded-lg"
      >
        For Rent
      </Typography>
    </div>
  );
};
export default CardMedia;
