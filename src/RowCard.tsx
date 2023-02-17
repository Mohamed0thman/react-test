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
  status: string;
};

type Props = {
  data: Data;
};

const RowCard = ({ data }: Props) => {
  const { title, price, address, bed, bathroom, dimension, image, status } =
    data;

  return (
    <Card className=" flex h-[220px]">
      <Card.CardMedia
        src={image}
        alt="place"
        className=" w-[200px] h-[200px] rounded-xl"
        imageClass="rounded-lg object-contain"
      />
      <Card.CardBody className=" ml-4 w-full">
        <Card.Flex justify="justify-between" className=" mt-1">
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
          <Card.Icon
            icon={<Icons.Heart fill="none" stroke="#3DBAEC" />}
            isRounded
          />
        </Card.Flex>
        <Card.Typography as="h4" variant="h4" className=" mb-2">
          {title}
        </Card.Typography>
        <Card.Typography as="p" variant="body-md-medium" className="  mb-4">
          {address}
        </Card.Typography>
        <Card.Divider />
        <Card.Flex justify="justify-between" className=" mt-4 w-9/12">
          <Card.Icon icon={<Icons.BedIcon />} text={bed} />
          <Card.Icon icon={<Icons.BathRoomIcon />} text={bathroom} />
          <Card.Icon icon={<Icons.DimensionsIcon />} text={dimension} />
        </Card.Flex>
      </Card.CardBody>
      <Card.Status
        text={status as 'Pending' | 'Approved' | 'Visited'}
        className="  absolute bottom-0 right-0"
      />
    </Card>
  );
};

export default RowCard;
