import React from 'react';
import { Base } from '../base';

type Props = Base & {};

const CardFooter = ({ children, className }: Props) => {
  return <div className={`relative  ${className || ''} `}>{children}</div>;
};

export default CardFooter;
