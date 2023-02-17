import React, { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

type Props = {
  calssName?: string;
  options: { id: string; option: string; icon?: string }[];
};

const Select = ({ calssName, options }: Props) => {
  const [selected, setSelected] = useState(options[0].option);

  return (
    <Listbox value={selected} onChange={(e) => setSelected(e)}>
      <div className="relative w-36">
        <Listbox.Button
          className={`flex  w-full items-center justify-between  px-4 py-3 border border-gray focus:border-main-yellow-600 rounded-lg  ${
            calssName || ''
          }`}
        >
          <div>{selected}</div>
          <span className="pointer-events-none">
            <ChevronDownIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-200"
          leaveFrom="opacity-100 -translate-10"
          leaveTo="opacity-0 translate-0"
        >
          <Listbox.Options className="absolute cursor-pointer top-full left-0 right-0 p-1 z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 shadow-lg ring-0 ring-black ring-opacity-5 focus:outline-none">
            {options.map((option, i) => (
              <Listbox.Option
                key={option.id}
                className={({ active }) =>
                  `relative flex cursor-pointer select-none items-center rounded-lg py-2 pl-3 pr-4 ${
                    active ? 'bg-main-100' : ''
                  }`
                }
                value={option.option}
              >
                {({ selected }) => (
                  <div
                    className={`${selected ? 'font-medium' : 'font-normal'}  `}
                  >
                    {option.option}
                  </div>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};

export default Select;
