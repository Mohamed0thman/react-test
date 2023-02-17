import React from 'react';
import { data, rowData } from '../assets/data';
import RowCard from '../RowCard';

const Request = () => {
  return (
    <div>
      {rowData.map((item, i) => (
        <RowCard key={i} data={item} />
      ))}
    </div>
  );
};

export default Request;
