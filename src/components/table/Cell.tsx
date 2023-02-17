import React from 'react';
import { Base } from '../base';

type Props = Base & {
  text: string;
};

const Cell = ({ text }: Props) => {
  return <td>{text}</td>;
};

export default Cell;
