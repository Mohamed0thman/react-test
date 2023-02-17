import React from 'react';
import { Typography } from '.';

type Props = {
  src: string;
  title: string;
  subTitle: string;
  className?: '';
};

const EmptyList = ({ src, title, subTitle, className }: Props) => {
  return (
    <div
      className={`min-h-screen flex flex-col justify-center items-center ${
        className || ''
      }`}
    >
      <img src={src} alt={title} />
      <div className=" text-center w-[30%] ">
        <Typography as="h1" variant="body-lg-bold">
          {title}
        </Typography>
        <Typography as="p" variant="body-sm-medium">
          {subTitle}
        </Typography>
      </div>
    </div>
  );
};

export default EmptyList;
