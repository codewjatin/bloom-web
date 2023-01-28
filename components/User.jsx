"use client";

import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { UserCircleIcon } from "@heroicons/react/solid";

export default function User() {
  return (
    <div className="text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button>
            <UserCircleIcon className="h-10 border-2 rounded-full fill-gray-800 hover:fill-gray-700" />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95">
          <Menu.Items className="absolute right-0 mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-gray-800 text-white" : "text-gray-900"
                    } group flex w-full items-center space-x-3 rounded-md px-2 py-2 text-sm`}>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 20 28"
                      fill={`${active ? "white" : "black"}`}
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.49632 25.0622L15.8416 27.4219C18.3694 27.867 19.9364 26.4373 19.9364 23.6806V9.23933C19.9364 6.7116 18.6827 5.73473 16.1287 5.29293L3.19241 3.00778C1.2846 2.67028 0 3.75051 0 5.64542V22.1785C0 23.7978 0.85359 24.7716 2.49632 25.0622ZM3.17483 22.7855C2.60459 22.6939 2.34443 22.3486 2.34443 21.7782V6.19596C2.34443 5.59057 2.74311 5.2826 3.39866 5.39557L15.9612 7.6001C17.0224 7.79745 17.5898 8.23995 17.5898 9.21589V23.4581C17.5898 24.6284 16.9008 25.2225 15.7786 25.0135L3.17483 22.7855ZM16.6692 7.15831H18.8913V4.22839C18.8913 1.61137 17.1103 0.324415 14.1579 0.848242L1.92656 3.00989L2.68241 4.96151L14.8849 2.9173C15.9851 2.72862 16.6692 3.18284 16.6692 4.13277V7.15831ZM5.20873 10.5834L13.9528 12.1287C14.5479 12.233 14.9362 11.8573 14.9362 11.3103C14.9362 10.827 14.6904 10.5567 14.238 10.4684L5.54295 8.94659C4.95327 8.84229 4.53397 9.19667 4.53397 9.72987C4.53397 10.1822 4.78194 10.5089 5.20873 10.5834ZM5.20873 15.1116L13.9528 16.6589C14.5479 16.7632 14.9362 16.3854 14.9362 15.8384C14.9362 15.3551 14.6904 15.087 14.238 14.9986L5.54295 13.4768C4.95327 13.3725 4.53397 13.7269 4.53397 14.2601C4.53397 14.7103 4.78616 15.037 5.20873 15.1116Z" />
                    </svg>
                    <span>Profile</span>
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-gray-800 text-white" : "text-gray-900"
                    } group flex w-full items-center space-x-3 rounded-md px-2 py-2 text-sm`}>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 20 28"
                      fill={`${active ? "white" : "black"}`}
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.49632 25.0622L15.8416 27.4219C18.3694 27.867 19.9364 26.4373 19.9364 23.6806V9.23933C19.9364 6.7116 18.6827 5.73473 16.1287 5.29293L3.19241 3.00778C1.2846 2.67028 0 3.75051 0 5.64542V22.1785C0 23.7978 0.85359 24.7716 2.49632 25.0622ZM3.17483 22.7855C2.60459 22.6939 2.34443 22.3486 2.34443 21.7782V6.19596C2.34443 5.59057 2.74311 5.2826 3.39866 5.39557L15.9612 7.6001C17.0224 7.79745 17.5898 8.23995 17.5898 9.21589V23.4581C17.5898 24.6284 16.9008 25.2225 15.7786 25.0135L3.17483 22.7855ZM16.6692 7.15831H18.8913V4.22839C18.8913 1.61137 17.1103 0.324415 14.1579 0.848242L1.92656 3.00989L2.68241 4.96151L14.8849 2.9173C15.9851 2.72862 16.6692 3.18284 16.6692 4.13277V7.15831ZM5.20873 10.5834L13.9528 12.1287C14.5479 12.233 14.9362 11.8573 14.9362 11.3103C14.9362 10.827 14.6904 10.5567 14.238 10.4684L5.54295 8.94659C4.95327 8.84229 4.53397 9.19667 4.53397 9.72987C4.53397 10.1822 4.78194 10.5089 5.20873 10.5834ZM5.20873 15.1116L13.9528 16.6589C14.5479 16.7632 14.9362 16.3854 14.9362 15.8384C14.9362 15.3551 14.6904 15.087 14.238 14.9986L5.54295 13.4768C4.95327 13.3725 4.53397 13.7269 4.53397 14.2601C4.53397 14.7103 4.78616 15.037 5.20873 15.1116Z" />
                    </svg>
                    <span>Passes</span>
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-gray-800 text-white" : "text-gray-900"
                    } group flex w-full items-center space-x-3 rounded-md px-2 py-2 text-sm`}>
                    <svg
                      width="20"
                      height="20"
                      fill={`${active ? "white" : "black"}`}
                      viewBox="0 0 28 28"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.4302 4.45901C22.2244 3.25527 20.5516 3.02136 18.417 3.02136H9.40827C7.30453 3.02136 5.62968 3.25527 4.42383 4.45901C3.22008 5.66276 3 7.32167 3 9.42002V18.3614C3 20.5003 3.22008 22.1496 4.42383 23.3512C5.63179 24.5571 7.30453 24.7889 9.42749 24.7889H18.417C20.5516 24.7889 22.2265 24.5571 23.4302 23.3512C24.634 22.1475 24.8541 20.5003 24.8541 18.3614V9.44885C24.8541 7.31206 24.634 5.65104 23.4302 4.45901ZM22.5581 9.12073V18.6799C22.5581 19.9071 22.4037 21.0185 21.7458 21.6785C21.0975 22.3247 19.9627 22.493 18.7472 22.493H9.10898C7.89351 22.493 6.75655 22.3247 6.09866 21.6785C5.45248 21.0185 5.29592 19.9071 5.29592 18.6799V9.14955C5.29592 7.91276 5.45248 6.78213 6.09866 6.13384C6.75655 5.47595 7.90312 5.31728 9.13781 5.31728H18.7472C19.9627 5.31728 21.0975 5.48556 21.7458 6.13384C22.4037 6.79174 22.5581 7.90315 22.5581 9.12073Z" />
                      <path d="M13.9383 7.88794C13.348 7.88794 12.9109 8.30606 12.9109 8.89762V14.4363L13.0098 16.8436L11.9497 15.528L10.6311 14.1577C10.464 13.9683 10.2172 13.8577 9.92984 13.8577C9.38187 13.8577 8.97852 14.2547 8.97852 14.7942C8.97852 15.0783 9.05727 15.304 9.25297 15.4985L13.1269 19.4102C13.3866 19.6784 13.629 19.8028 13.9383 19.8028C14.2669 19.8028 14.5189 19.6687 14.769 19.4102L18.643 15.4985C18.829 15.304 18.9174 15.0783 18.9174 14.7942C18.9174 14.2547 18.5044 13.8577 17.9565 13.8577C17.6733 13.8577 17.4244 13.9587 17.2552 14.1577L15.9483 15.5175L14.8765 16.8553L14.9754 14.4363V8.89762C14.9754 8.30606 14.5383 7.88794 13.9383 7.88794Z" />
                    </svg>

                    <span>Saved</span>
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-red-600 text-white" : "text-red-600"
                    } group flex w-full items-center space-x-3 rounded-md px-2 py-2 text-sm`}>
                    <svg
                      height="16"
                      width="16"
                      className={`${
                        active ? "stroke-white" : "stroke-red-600"
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 14 14">
                      <g>
                        <line
                          x1="6.5"
                          y1="7"
                          x2="13.5"
                          y2="7"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"></line>
                        <polyline
                          points="11.5 5 13.5 7 11.5 9"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"></polyline>
                        <path
                          d="M11.7,11.49a6.5,6.5,0,1,1,0-9"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"></path>
                      </g>
                    </svg>
                    <span>Logout</span>
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
