import { Fragment, useState } from 'react'
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

import { Disclosure, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)
  // const [open, setOpen] = useState(false)

  return (
    <div>
      {isOpen ? (
        <>
          <button
            className="fixed right-10 top-6 z-10"
            onClick={() => setIsOpen((prevOpen) => !prevOpen)}
          >
            <img src={iconCloseMenu} alt="Close Menu" />
          </button>
          {/* Background Shadow */}
          <div
            onClick={() => setIsOpen(false)}
            className="fixed top-0 left-0 w-screen h-screen bg-gray-900 bg-opacity-50"
          />
        </>
      ) : (
        <>
          <button onClick={() => setIsOpen((prevOpen) => !prevOpen)}>
            <img src={iconMenu} alt="Open Menu" />
          </button>
        </>
      )}

      <div
        className={`top-0 right-0 w-[310px] bg-white  p-10 pl-20 text-black fixed h-full ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } ease-in-out duration-300 z-5 before: `}
      >
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex  rounded-lg px-2 py-4 text-left text-xl font-medium text-gray-500 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75 gap-3">
                <span>Features</span>
                <ChevronDownIcon
                  className={`self-end ${
                    open ? 'rotate-180 transform' : ''
                  } h-6 w-6 text-gray-500`}
                />
              </Disclosure.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Disclosure.Panel className="px-9 pt-2 pb-2 text-sm text-gray-500">
                  <ul className="space-y-4">
                    <li className="flex  items-center gap-3">
                      <img className="w-[1.3rem]" src={iconTodo} alt="" />
                      <a href="#" className="text-lg">
                        Todo List
                      </a>
                    </li>
                    <li className="flex  items-center gap-3">
                      <img className="w-[1.3rem]" src={iconCalendar} alt="" />
                      <a href="#" className="text-lg">
                        Calender
                      </a>
                    </li>
                    <li className="flex  items-center gap-3">
                      <img className="w-[1.3rem]" src={iconReminder} alt="" />
                      <a href="#" className="text-lg">
                        Reminders
                      </a>
                    </li>
                    <li className="flex  items-center gap-3">
                      <img className="w-[1.3rem]" src={iconPlanning} alt="" />
                      <a href="#" className="text-lg">
                        Planning
                      </a>
                    </li>
                  </ul>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex  rounded-lg px-2 py-4 text-left text-xl font-medium text-gray-500 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75 gap-3">
                <span>Company</span>
                <ChevronDownIcon
                  className={`self-end ${
                    open ? 'rotate-180 transform' : ''
                  } h-6 w-6 text-gray-500`}
                />
              </Disclosure.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Disclosure.Panel className="px-9 pt-2 pb-2 text-sm text-gray-500">
                  <ul className="space-y-4">
                    <li>
                      <a href="#" className="text-lg">
                        History
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-lg">
                        Our Team
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-lg">
                        Blog
                      </a>
                    </li>
                  </ul>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>

        <ul className="space-y-10 mt-5">
          <li>
            <a
              href="#"
              className=" rounded-lg px-2 py-4 text-xl font-medium text-gray-500 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75 "
            >
              Careers
            </a>
          </li>
          <li>
            <a
              href="#"
              className=" rounded-lg px-2 py-4  text-xl font-medium text-gray-500 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75"
            >
              About
            </a>
          </li>
        </ul>

        <ul className="space-y-10 mt-[8rem] ml-[-2rem]">
          <li>
            <a
              href="#"
              className="flex justify-center text-gray-500 text-lg  hover:text-black  transition duration-400"
            >
              Login
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex justify-center text-gray-500 text-lg border-2 rounded-lg p-2 border-gray-400 hover:text-black  hover:border-black transition duration-400"
            >
              Register
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
