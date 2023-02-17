import React from 'react';
import { Button, Typography } from './index';
import { Base } from './base';
import { Icons } from '../assets';

type Props = Base & {
  variant: 'error' | 'success' | 'send' | 'reset';
};

const Alert = ({ variant, className, children }: Props) => {
  const iconsVariants = {
    error: {
      icon: <Icons.ErrorIcon />,
      title: 'Sorry',
      subTitle:
        'You can not terminate contract beofre paying all your invoices',
    },
    success: {
      icon: <Icons.SuccessfulIcon />,
      title: 'Successful',
      subTitle:
        'You can not terminate contract beofre paying all your invoices',
    },
    send: {
      icon: <Icons.Mailbox />,
      title: 'Password reset successful!',
      subTitle: 'The code was sent your mobile number. Please enter code',
    },
    reset: {
      icon: <Icons.Mailbox />,
      title: 'We have sent you an e-mail',
      subTitle: 'Kindly check your al8888@gmail.com and verify the message',
    },
  };

  const { icon, title, subTitle } = iconsVariants[variant];
  return (
    <div
      className={`  fixed z-999 top-0 left-0 flex justify-center items-center  h-screen w-screen  bg-black-transparent  ${
        className || ''
      }`}
    >
      <div className="  text-center flex flex-col justify-center  items-center bg-white w-2/4 h-4/5 rounded-2xl	">
        <div> {icon} </div>
        <Typography variant="h3" as="h3" className=' mt-14 mb-4'>
          {title}
        </Typography>
        <Typography variant="body-xl-medium" as="p">
          {subTitle}
        </Typography>

        <Button variant="primary" className=' py-3 px-24  mt-36'>Okay</Button>
      </div>
    </div>
  );
};

export default Alert;
