import React, { Fragment } from 'react';
import { Disclosure } from '@headlessui/react';
import { ShoppingBagIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import Link from 'gatsby-link';
import Logo from '../assets/shop-logo.svg';

const Header = () => (
    <Disclosure as="nav">
        {({ open }) => (
            <>
                <div className="max-w-7xl mx-auto py-1 md:py-6 px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-center relative h-16">
                        <Link to="/" className="w-full flex justify-center">
                            <div className="flex-shrink-0 flex items-center">
                                <img
                                    className="block h-11 w-auto"
                                    src={Logo}
                                    alt="Workflow"
                                />
                            </div>
                        </Link>
                        <div className="absolute h-full left-0 md:left-auto
                        md:right-0 md:ml-14 flex items-center"
                        >
                            <button
                                type="button"
                                className="p-1 rounded-full text-secondary hover:text-gray focus:outline-none
                                focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 relative"
                            >
                                <span className="sr-only">View notifications</span>
                                <ShoppingBagIcon className="h-8 w-8" aria-hidden="true" />
                                <span className="absolute h-3 w-3 bottom-1 right-1 bg-red rounded-full" />
                            </button>
                        </div>
                        <div className="-mr-2 flex items-center md:hidden">
                            <Disclosure.Button
                                className="inline-flex items-center justify-center p-2 text-secondary"
                            >
                                <span className="sr-only">Open main menu</span>
                                {open ? (
                                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                                ) : (
                                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                )}
                            </Disclosure.Button>
                        </div>
                    </div>
                </div>

                <Disclosure.Panel className="md:hidden bg-white">
                    <div className="px-8 pt-2 pb-3 space-y-1">
                        <div>Your menu items here</div>
                    </div>
                </Disclosure.Panel>
            </>
        )}
    </Disclosure>

);

export default Header;
