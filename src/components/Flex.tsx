import React from 'react';
import { Base } from './base';

type Props = Base & {
  dir?: 'flex-row' | 'flex-col' | 'flex-row-reverse' | 'flex-col-reverse';
  justify?:
    | 'justify-start'
    | 'justify-end'
    | 'justify-center'
    | 'justify-between'
    | 'justify-around'
    | 'justify-evenly';
  align?:
    | 'items-start'
    | 'items-end'
    | 'items-center'
    | 'items-baseline'
    | 'items-stretch';
};

const Flex = ({ children, className, dir, justify, align }: Props) => {
  return (
    <div
      className={`flex ${dir || 'row'} ${justify || 'justify-center'} ${
        align || 'items-center'
      } ${className || ''}`}
    >
      {children}
    </div>
  );
};

export default Flex;
