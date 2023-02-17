import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import SideBar from './SideBar';
import menuBar from '../../../assets/header/menu.png';
import { Button, Typography, Avatar } from '../..';
import { useSelector } from 'react-redux';
import {
  selectAuthStatus,
  selectAuthStatusEnum,
  selectUser,
} from '../../../store/slices/auth';
import NotificationDropdown from './NotificationDropdown';
import { Menu } from '@headlessui/react';

const navLinks = [
  { to: '/property-listing/rent', text: 'Rent' },
  { to: '/property-listing/buy', text: 'Buy' },
  { to: '/property-listing/sell', text: 'Sell' },
  { to: '/property-listing/installment', text: 'Installment' },
  { to: '/companies', text: 'Companies' },
  { to: '/videos', text: 'Videos' },
];

function Header() {
  const [visible, setVisible] = useState(false);
  const LinkStyle =
    'capitalize text-base font-medium text-black px-3 py-2 rounded-lg';
  const activeClass = `${LinkStyle} !text-main-600 !font-bold bg-main-100`;
  const authStatus = useSelector(selectAuthStatus);
  const authStatusEnum = selectAuthStatusEnum();
  const user = useSelector(selectUser);

  // const ButtonStyle = 'hidden md:inline-block border-2  rounded-md py-2 px-5 font-bold text-sm hover:bg-main-600 hover:text-white hover:border-main-600 transition-colors duration-500'

  return (
    <header className="sticky top-0 z-20 border-b-2 border-main-100 bg-white">
      <div className="lg:px-15 mx-auto flex items-center px-2 py-4 lg:px-10">
        <div>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <nav className=" mx-16 hidden items-center lg:flex lg:space-x-8">
          {navLinks.map((navLink, i) => (
            <NavLink
              id={navLink.text}
              to={navLink.to}
              key={i}
              className={({ isActive }) => (isActive ? activeClass : LinkStyle)}
            >
              {navLink.text}
            </NavLink>
          ))}
        </nav>
        {/* When user is logged-in */}
        {authStatus === authStatusEnum.LOGGED_IN ? (
          <div className="relative ml-auto flex items-center space-x-4">
            {/* show notification dropdown at large screens */}
            <Menu as="div" className="hidden lg:block">
              <Menu.Button className="flex h-8 w-8 items-center justify-center rounded-lg bg-main-200">
                <NotificationOutline className="h-5 w-5" />
              </Menu.Button>

              <NotificationDropdown />
            </Menu>
            <Link className="flex items-center space-x-2" to="/user/profile">
              <Typography
                variant="body-md-bold"
                as="span"
                className="capitalize"
              >
                {user.name}
              </Typography>
              <Avatar
                className="ml-auto hidden items-center space-x-4 md:flex"
                userName={user.name}
                userImg={user.image}
                isVerified={user.isVerified}
              />
            </Link>
          </div>
        ) : (
          <div
            className="hidden items-center space-x-2 lg:flex"
            style={{ marginInlineStart: 'auto' }}
          >
            <Button variant="primary_outline" to="/login">
              Login
            </Button>
            <Button variant="primary" to="/sign-up">
              Sign up
            </Button>
          </div>
        )}
        <button
          className="ml-auto inline-block lg:hidden"
          onClick={() => setVisible(true)}
        >
          <img src={menuBar} alt="menu bar" />
        </button>
      </div>

      <SideBar visible={visible} setVisible={setVisible} />
    </header>
  );
}

export default Header;
