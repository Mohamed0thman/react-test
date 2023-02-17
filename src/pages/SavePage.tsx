import React from 'react';
import { data } from '../assets/data';
import SavedCard from '../SavedCard';

const SavePage = () => {
  return (
    <div className=" grid grid-cols-1 gap-8  lg:grid-cols-3  sm:grid-cols-2">
      {data.map((item, i) => (
        <SavedCard key={i} data={item} />
      ))}
    </div>
  );
};

export default SavePage;
