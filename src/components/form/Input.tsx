import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

type Props = {
  className?: string;
  register: UseFormRegisterReturn;
  as?: 'textarea';
  placeholder?: string;
  id: string;
};

const Input = ({ className, register, as, id, placeholder }: Props) => {
  const defaultClass = `relative block w-full rounded-lg border border-gray-200 py-3 px-5 text-main-secondary text-black outline-none focus:border-main-yellow-600 focus-visible:ring-main-yellow-600 `;
  if (as === 'textarea') {
    <textarea
      className={`relative block w-full rounded-lg border border-gray-200 py-3 px-5 text-main-secondary text-black outline-none focus:border-main-yellow-600 focus-visible:ring-main-yellow-600 ${
        className || ''
      }`}
      rows={5}
      id={id}
      placeholder={placeholder}
      {...register}
    ></textarea>;
  }

  return (
    <input
      id={id}
      placeholder={placeholder}
      {...register}
      className={`${defaultClass} ${className || ''}`}
    />
  );
};

export default Input;
