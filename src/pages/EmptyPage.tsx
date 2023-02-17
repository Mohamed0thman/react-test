import React from 'react';
import { Images } from '../assets';
import EmptyList from '../components/EmptyList';

const EmptyPage = () => {
  return (
    <div>
      <EmptyList
        src={Images.emptysave}
        title="You have no saved real-estates"
        subTitle="The code was sent your mobile number. Please enter code"
      />
    </div>
  );
};

export default EmptyPage;
