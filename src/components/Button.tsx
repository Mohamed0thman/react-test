import React from 'react';

type Props = {
  handleOnClick?: React.MouseEventHandler<HTMLButtonElement>;
  classContainer?: string;
  children: React.ReactNode | string;
  variant: 'primary' | 'secondary' | 'primary_outline' | 'secondary_outline';
};

const Button = ({
  children,
  handleOnClick,
  variant,
  classContainer,
}: Props) => {
  const variants = {
    primary: 'bg-main-600 border-main-600 text-white',
    secondary: 'bg-main-orange-600 border-main-orange-600 text-white',
    primary_outline: 'bg-white border-main-600 text-main-600',
    secondary_outline: 'bg-white border-main-orange-600 text-main-orange-600',
  };

  return (
    <button
      className={`relative px-6 py-3 border rounded-lg ${variants[variant]} ${classContainer}`}
      onClick={handleOnClick}
    >
      {children}
    </button>
  );
};

export default Button;
