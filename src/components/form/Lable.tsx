import React from 'react';
import { Typography } from '..';

type Props = {
  className?: string;
  title?: string;
  htmlFor: string;
};

const Lable = ({ className, title, htmlFor }: Props) => {
  return (
    <label
      className={`block select-none  ${className || ''}`}
      htmlFor={htmlFor}
    >
      <Typography variant="body-sm-medium" as="span">
        {title}
      </Typography>
    </label>
  );
};

export default Lable;
