import React from 'react';
import { Base } from './base';

type Props = Base & {
  icon: React.ReactNode;
  text?: string;
  isRounded?: boolean;
};
const Icon = ({ icon, text, isRounded, className }: Props) => {
  return (
    <div
      className={`flex items-center ${
        isRounded
          ? `w-12 h-12 flex items-center justify-center rounded-full border-main-200 border bg-white`
          : ''
      }   ${className || ''}
      `}
    >
      {icon}

      {text ? <span className="ml-2"> {text}</span> : null}
    </div>
  );
};

export default Icon;
