import React from 'react';
import { Base } from '../base';
import Cell from './Cell';

type Props = Base & {
  headItems?: string[];
  bodyItems?: {
    date: string;
    Purpose: string;
    Amount: string;
  }[];
};

const Table = ({ className, headItems, bodyItems }: Props) => {
  return (
    <table className={` w-full ${className || ''} `}>
      <thead className="  text-center">
        <tr className="  h-20 ">
          {headItems?.map((item, i) => (
            <Cell key={i} text={item} />
          ))}
        </tr>
      </thead>
      <tbody className="  text-center">
        {bodyItems?.map((item, i) => {
          const bgColor = i % 2 ? 'hover:bg-main-100' : '';
          return (
            <tr
              key={i}
              className={` h-20 cursor-pointer border-b border-main-100 px-1 ${bgColor}`}
            >
              <Cell text={item.date} />
              <Cell text={item.Purpose} />
              <Cell text={item.Amount} />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
