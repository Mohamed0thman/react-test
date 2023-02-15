import React from 'react';
import { Icons, Images } from '../../assets';
import Button from '../Button';
import Icon from '../icon/Icon';
import Stauts from '../Stauts';

import './card.css';

export type Data = {
  title: string;
  price: string;
  address: string;
  bed: string;
  bathroom: string;
  dimension: string;
  image: string;
  status?: 'Pending' | 'Approved' | 'Visited';
};

type Props = {
  row?: boolean;
  data: Data;
  btnText?: string;
  border?: boolean;
  btn?: boolean;
  rooms?: boolean;
};

const Card = ({ row, data, btnText, border, btn, rooms }: Props) => {
  const { title, price, address, bed, bathroom, dimension, image, status } =
    data;

  return (
    <div
      className={` ${
        row ? 'max-w-full flex flex-row h-[220px] p-3' : ''
      } rounded-lg border border-main-100 relative`}
    >
      <div>
        <div className={`relative ${row ? 'w-[200px] h-[200px]' : null}`}>
          <img
            src={image}
            alt="place"
            className={`
             ${row ? 'rounded-lg ' : 'rounded-t-lg'}  object-cover w-full h-full
           `}
          />
          <span className=" absolute top-3 right-4 py-1 px-2 rounded-md bg-white-transparent text-sm  font-medium">
            For Rent
          </span>
        </div>
      </div>
      <div className={`${row ? ' py-1 px-5  w-full' : ' py-8 px-6 '}`}>
        <div className="flex items-center justify-between ">
          <div className=" flex items-center ">
            <h1 className=" text-2xl  text-main-yellow-600 mr-2 font-extrabold">
              {price}
            </h1>
            /month
          </div>
          <Icon icon={<Icons.Heart />} isRounded />
        </div>
        <h1 className="text-2xl mb-2 font-bold">{title}</h1>
        <p
          className={`text-main-black text-base font-medium ${
            row ? 'mb-2' : 'mb-4'
          }`}
        >
          {address}
        </p>
        {border ? <hr className="border-main-100 mb-4" /> : null}
        <div className=" absolute right-0 bottom-0">
          {status ? <Stauts text={status} /> : null}
          {btn ? (
            <Button
              variant="secondary_outline"
              classContainer="mt-auto ml-auto"
            >
              {btnText}
            </Button>
          ) : null}
        </div>
        {rooms ? (
          <div
            className={` flex items-center justify-between  ${
              row ? 'w-6/12' : ''
            } `}
          >
            <Icon icon={<Icons.BedIcon />} text={bed} />
            <Icon icon={<Icons.BathRoomIcon />} text={bathroom} />
            <Icon icon={<Icons.DimensionsIcon />} text={dimension} />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Card;
