import React from 'react';
import { Base } from './base';

type Props = Base & {
  handleOnClick?: React.MouseEventHandler<HTMLButtonElement>;
  variant: 'primary' | 'secondary' | 'primary_outline' | 'secondary_outline';
  type?: 'button' | 'submit' | 'reset';
};

const Button = ({
  children,
  handleOnClick,
  variant,
  className,
  type,
}: Props) => {
  const variants = {
    primary: 'bg-main-600 border-main-600 text-white',
    secondary: 'bg-main-orange-600 border-main-orange-600 text-white',
    primary_outline: 'bg-white border-main-600 text-main-600',
    secondary_outline: 'bg-white border-main-orange-600 text-main-orange-600',
  };

  return (
    <button
      type={type}
      className={`px-6 py-3 border rounded-lg ${variants[variant]} ${
        className || ''
      }  `}
      onClick={handleOnClick}
    >
      {children}
    </button>
  );
};

export default Button;
