import React from 'react';
import { Base } from './base';

type Props = Base & {};

const Divider = ({ className }: Props) => {
  return <div className={` border border-main-200 ${className || ''}`} />;
};

export default Divider;
