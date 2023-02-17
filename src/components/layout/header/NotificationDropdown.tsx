import { Menu, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Typography } from "../../UI";
import { HomeSolid } from "../../UI/icons";

const links = [
  {
    title: "A tour request",
    desc: "Lots of great deals around new york that you should check out",
    bgColor: "bg-red",
  },
  {
    title: "You have new points",
    desc: "Lots of great deals around new york that you should check out",
    bgColor: "bg-main-600",
  },
  {
    title: "The house with the best rating",
    desc: "Lots of great deals around new york that you should check out",
    bgColor: "bg-main-yellow-600",
  },
];

function NotificationDropdown() {
  return (
    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items className="absolute top-full right-0 flex w-[400px] flex-col rounded-lg bg-white py-5 drop-shadow-basic-sm ">
        <div className="max-h-[450px] space-y-6 overflow-y-auto">
          <Typography
            variant="body-md-bold"
            as="h4"
            className="px-5 capitalize text-gray-900"
          >
            Notifications
          </Typography>
          <div>
            <Typography
              variant="body-sm"
              as="span"
              className="px-5 text-gray-500"
            >
              Today
            </Typography>
            <div>
              {links.map((link, i) => (
                /* Use the `active` state to conditionally style the active item. */
                <Menu.Item key={i} as={Fragment}>
                  {({ active }) => (
                    <div className="flex space-x-4 border-b border-gray-300 px-5 py-3 last:border-b-0">
                      <div>
                        <span
                          className={`h-6 w-6 rounded-full ${link.bgColor} flex items-center justify-center`}
                        >
                          <HomeSolid className="h-3 w-3 fill-white" />
                        </span>
                      </div>
                      <div className="space-y-1">
                        <Typography
                          variant="body-sm-bold"
                          as="h6"
                          className="text-black"
                        >
                          {link.title}
                        </Typography>
                        <Typography
                          variant="body-xs-medium"
                          as="p"
                          className="text-gray-600"
                        >
                          {link.desc}
                        </Typography>
                      </div>
                    </div>
                  )}
                </Menu.Item>
              ))}
            </div>
          </div>
          <div>
            <Typography
              variant="body-sm"
              as="span"
              className="px-5 text-gray-500"
            >
              Yesterday
            </Typography>
            <div>
              {links.map((link, i) => (
                /* Use the `active` state to conditionally style the active item. */
                <Menu.Item key={i} as={Fragment}>
                  {({ active }) => (
                    <div className="flex space-x-4 border-b border-gray-300 px-5 py-3 last:border-b-0">
                      <div>
                        <span
                          className={`h-6 w-6 rounded-full ${link.bgColor} flex items-center justify-center`}
                        >
                          <HomeSolid className="h-3 w-3 fill-white" />
                        </span>
                      </div>
                      <div className="space-y-1">
                        <Typography
                          variant="body-sm-bold"
                          as="h6"
                          className="text-black"
                        >
                          {link.title}
                        </Typography>
                        <Typography
                          variant="body-xs-medium"
                          as="p"
                          className="text-gray-600"
                        >
                          {link.desc}
                        </Typography>
                      </div>
                    </div>
                  )}
                </Menu.Item>
              ))}
            </div>
          </div>
          <Link
            to="/notification"
            className="block text-center text-sm font-bold text-main-600"
          >
            See All
          </Link>
        </div>
      </Menu.Items>
    </Transition>
  );
}

export default NotificationDropdown;
