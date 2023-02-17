import React from 'react';
import { FormGroup, Input, Lable, Select } from '.';
import { Button } from '..';
import { Base } from '../base';

type Props = Base & {
  handleOnSubmit?: React.FormEventHandler<HTMLFormElement>;
};

const Form = ({ children, className, handleOnSubmit }: Props) => {
  return (
    <form className={` ${className || ''}`} onSubmit={handleOnSubmit}>
      {children}
    </form>
  );
};

Form.FormGroup = FormGroup;
Form.Input = Input;
Form.Lable = Lable;
Form.Button = Button;
Form.Select = Select;

export default Form;
