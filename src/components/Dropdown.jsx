import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Fragment, useEffect, useRef, useState } from 'react'

import {
  arrowDown,
  arrowUp,
  iconCalendar,
  iconCloseMenu,
  iconMenu,
  iconPlanning,
  iconReminder,
  iconTodo,
} from '../assets'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Dropdown = () => {
  return (
    <div className="px-14 mobile:px-4 tablet:px-10">
      <Menu as="div" className="relative inline-block text-left">
        {({ open }) => (
          <>
            <Menu.Button className="flex rounded-md text-left text-medium font-medium text-gray-500 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75 gap-1 ">
              <span className={`hover:text-black ${open ? 'text-black' : ''}`}>
                Features
              </span>
              <ChevronDownIcon
                className={`self-end hover:text-black ${
                  open ? 'rotate-180 transform text-black' : ''
                } h-6 w-6 text-gray-500`}
              />
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-100"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white divide-y divide-gray-100 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          ' px-4 py-2 text-sm flex gap-2 '
                        )}
                      >
                        <img src={iconTodo} alt="" className="w-[18px]" />

                        <span>Todo List</span>
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="/test.html"
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          ' px-4 py-2 text-sm flex gap-2'
                        )}
                      >
                        <img src={iconCalendar} alt="" className="w-[18px]" />
                        <span>Calender</span>
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="/test.html"
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          ' px-4 py-2 text-sm flex gap-2'
                        )}
                      >
                        <img src={iconReminder} alt="" className="w-[18px]" />
                        <span>Reminders</span>
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="/test.html"
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          ' px-4 py-2 text-sm flex gap-2'
                        )}
                      >
                        <img src={iconPlanning} alt="" className="w-[18px]" />
                        <span>Planning</span>
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>

      <Menu as="div" className="relative inline-block text-left mobile:px-1 tablet:px-7">
        {({ open }) => (
          <>
            <Menu.Button className="flex rounded-md text-left text-medium font-medium text-gray-500 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75 gap-1">
              <span className={`hover:text-black ${open ? 'text-black' : ''}`}>
                Company
              </span>
              <ChevronDownIcon
                className={`self-end hover:text-black ${
                  open ? 'rotate-180 transform text-black' : ''
                } h-6 w-6 text-gray-500`}
              />
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-100"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white divide-y divide-gray-100 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        History
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Our Team
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Blog
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>

      <div className="relative inline-block text-left mobile:px-1 tablet:px-7">
        <a
          href="#"
          className=" rounded-md text-medium font-medium text-gray-500 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75 hover:text-black"
        >
          Careers
        </a>
      </div>

      <div className="relative inline-block text-left mobile:px-2 tablet:px-7 mobile:hidden tablet:inline-block">
        <a
          href="#"
          className=" rounded-md text-medium font-medium text-gray-500 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75 hover:text-black"
        >
          About Us
        </a>
      </div>
    </div>
  )
}

export default Dropdown
