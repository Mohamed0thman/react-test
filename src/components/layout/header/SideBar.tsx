import React, { Fragment } from 'react';
import logo2 from '../../../assets/logo2.png';
import { Button, } from '../../UI';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  selectAuthStatus,
  selectAuthStatusEnum,
  selectUser,
} from '../../../store/slices/auth';
import { Dialog, Transition } from '@headlessui/react';

const navLinks = [
  { to: '/property-listing/rent', text: 'Rent' },
  { to: '/property-listing/buy', text: 'Buy' },
  { to: '/property-listing/sell', text: 'Sell' },
  { to: '/property-listing/installment', text: 'Installment' },
  { to: '/companies', text: 'Companies' },
  { to: '/videos', text: 'Videos' },
];

function SideBar({ visible, setVisible }) {
  const authStatus = useSelector(selectAuthStatus);
  const authStatusEnum = selectAuthStatusEnum();
  const user = useSelector(selectUser);

  function closeModal() {
    setVisible(false);
  }

  return (
    <Transition appear show={visible} as={Fragment}>
      <Dialog as="div" className="relative z-[9999]" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>
        <div className="fixed top-0 left-0 bottom-0 z-[99991] overflow-y-auto">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-100 -translate-x-full"
            enterTo="opacity-100 translate-x-0"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-x-0"
            leaveTo="opacity-100 -translate-x-full"
          >
            <Dialog.Panel
              className={`
                    relative h-full w-[285px] animate-swapOpen
                    bg-white bg-gradient-to-b from-main-100 to-white p-5 text-start`}
            >
              <img className="mx-auto" src={logo2} alt="logo" />

              <div className="mt-4 flex flex-col space-y-4">
                {navLinks.map((navLink, i) => (
                  <NavLink
                    id={navLink.text}
                    to={navLink.to}
                    key={i}
                    className={({ isActive }) =>
                      isActive
                        ? 'rounded-lg bg-main-200 py-2 px-3 text-sm font-medium text-main-600'
                        : 'text-sm font-medium text-main-secondary'
                    }
                  >
                    {navLink.text}
                  </NavLink>
                ))}
              </div>
              {authStatus === authStatusEnum.IDLE ||
              authStatus === authStatusEnum.LOGGED_OUT ? (
                <div className="mt-4 flex flex-col space-y-2">
                  <Button
                    variant="primary-outline"
                    to="/login"
                    className="text-center"
                  >
                    Login
                  </Button>
                  <Button
                    variant="primary"
                    to="/sign-up"
                    className="text-center"
                  >
                    Sign up
                  </Button>
                </div>
              ) : null}
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}

export default SideBar;
