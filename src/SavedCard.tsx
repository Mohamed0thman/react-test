import React from 'react';
import { Icons } from './assets';
import Card from './components/card/Card';

type Data = {
  title: string;
  price: string;
  address: string;
  bed: string;
  bathroom: string;
  dimension: string;
  image: string;
};

type Props = {
  data: Data;
};

const SavedCard = ({ data }: Props) => {
  const { title, price, address, bed, bathroom, dimension, image } = data;
  return (
    <Card className=" max-w-[352px] ">
      <Card.CardMedia src={image} alt="place" imageClass="rounded-lg" />
      <Card.CardBody className=" px-6 pb-8">
        <Card.Flex justify="justify-between" className=" mt-6 ">
          <Card.Flex>
            <Card.Typography
              as="h1"
              variant="body-2xl-extrabold"
              className=" text-main-yellow-600 mr-1"
            >
              {price}
            </Card.Typography>
            <Card.Typography
              as="span"
              variant="body-md-medium-tall"
              className=" text-black"
            >
              /month
            </Card.Typography>
          </Card.Flex>
          <Card.Icon icon={<Icons.Heart />} isRounded />
        </Card.Flex>
        <Card.Typography as="h4" variant="h4" className=" mb-2">
          {title}
        </Card.Typography>
        <Card.Typography as="p" variant="body-md-medium" className="  mb-4">
          {address}
        </Card.Typography>
        <Card.Divider />
        <Card.Flex justify="justify-between" className=" mt-4">
          <Card.Icon icon={<Icons.BedIcon />} text={bed} />
          <Card.Icon icon={<Icons.BathRoomIcon />} text={bathroom} />
          <Card.Icon icon={<Icons.DimensionsIcon />} text={dimension} />
        </Card.Flex>
      </Card.CardBody>
    </Card>
  );
};

export default SavedCard;
