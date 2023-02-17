import React from 'react';
import { CardMedia, CardFooter, CardBody } from '.';
import { Button, Divider, Flex, Icon, Status, Typography } from '..';

import { Base } from '../base';

type MaxWidth = 'max-w-xs' | 'max-w-sm' | 'max-w-md' | 'max-w-lg' | 'max-w-xl';

type Props = Base & {
  maxWidth?: MaxWidth;
};

const Card = ({ children, maxWidth, className }: Props) => {
  return (
    <div
      className={` relative border  border-main-200 rounded-lg p-3 ${
        maxWidth || ''
      } ${className || ''} `}
    >
      {children}
    </div>
  );
};

Card.CardMedia = CardMedia;
Card.CardBody = CardBody;
Card.CardFooter = CardFooter;
Card.Flex = Flex;
Card.Divider = Divider;
Card.Typography = Typography;
Card.Icon = Icon;
Card.Button = Button;
Card.Status = Status;

export default Card;
