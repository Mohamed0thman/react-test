import React from 'react';

type Props = {
  icon: React.ReactNode;
  text?: string;
  isRounded?: boolean;
  classContainer?: string;
};
const Icon = ({ icon, text, isRounded, classContainer }: Props) => {
  return (
    <div
      className={`flex items-center ${
        isRounded
          ? `w-12 h-12 flex items-center justify-center rounded-full border-main-200 border bg-white`
          : ''
      }   ${classContainer || ''}
      `}
    >
      {icon}

      {text ? <span className="ml-2"> {text}</span> : null}
    </div>
  );
};

export default Icon;
