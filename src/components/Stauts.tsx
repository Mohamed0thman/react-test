import React from 'react';

type Props = {
  text: 'Pending' | 'Approved' | 'Visited';
};

const Stauts = ({ text }: Props) => {
  let status;
  switch (text.toLowerCase()) {
    case 'pending': {
      status = ' bg-main-yellow-600 ';
      break;
    }
    case 'approved': {
      status = ' bg-main-600 ';
      break;
    }
    case 'visited': {
      status = ' bg-main-orange-600 ';
      break;
    }
  }

  return (
    <div
      className={`flex items-center justify-center w-[88px] h-[32px] rounded-tl-2xl 
      rounded-br-2xl text-white text-sm  font-medium   ${status}`}
    >
      {text}
    </div>
  );
};

export default Stauts;
