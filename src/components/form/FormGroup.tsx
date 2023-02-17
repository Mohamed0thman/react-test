import React from 'react';
import {
  FieldError,
  FieldErrorsImpl,
  Merge,
  UseFormRegisterReturn,
} from 'react-hook-form';
import { Input, Lable } from '.';
import { Typography } from '..';

import { Base } from '../base';

type Props = Base & {
  id: string;
  label?: string;
  labelClass?: string;
  inputClass?: string;
  register: UseFormRegisterReturn;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  placeholder?: string;
  type: string;
};
const FormGroup = ({
  className,
  children,
  label,
  type,
  labelClass,
  inputClass,
  placeholder,
  id,
  register,
  error,
}: Props) => {
  if (children) {
    return <div className={`${className || ''}`}>{children}</div>;
  }
  return (
    <div className={` mb-6  ${className || ''}`}>
      <Lable
        htmlFor={id}
        title={label}
        className={` mb-2 ${labelClass || ''}`}
      />
      <Input
        id={id}
        className={`${inputClass || ''}`}
        placeholder={placeholder}
        register={register}
        type={type}
      />
      {error && (
        <Typography as="p" variant="body-md-medium" className="text-error">
          {error.message as string}
        </Typography>
      )}
    </div>
  );
};

export default FormGroup;
