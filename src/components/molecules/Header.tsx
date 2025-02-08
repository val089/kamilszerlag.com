'use client';
import React, { useState } from 'react';
import clsx from 'clsx';

const navItems = [
  { id: 1, text: 'Home', href: '#home' },
  { id: 2, text: 'Section 1', href: '#section1' },
  { id: 3, text: 'Section 2', href: '#section2' },
  { id: 5, text: 'Contact' }
];

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNav = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header
      className="
    flex items-center justify-between md:bg-white fixed top-4 z-10 container rounded-lg inset-x-0 mx-auto md:flex py-4"
    >
      <h1 className="font-bold text-lg pl-4 hidden md:block">KAMIL SZERLAG</h1>

      {/* Desktop Navigation */}

      <ul className="hidden md:flex">
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              onClick={handleNav}
              href={item.href}
              className="py-2 px-4 hover:bg-orange-500 hover:text-white rounded-md mx-2 cursor-pointer duration-30"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div
        onClick={handleNav}
        className="block md:hidden pr-4 absolute right-0"
      >
        <div className="group flex h-12 w-12 cursor-pointer items-center justify-center rounded-3xl p-2 hover:bg-slate-300">
          <div className="space-y-2">
            <span
              className={clsx(
                'block h-1 w-8 origin-center rounded-full bg-orange-600 transition-transform ease-in-out',
                {
                  'w-6 translate-y-1.5 rotate-45': isMobileMenuOpen
                }
              )}
            ></span>
            <span
              className={clsx(
                'block h-1 w-6 origin-center rounded-full bg-orange-600 transition-transform ease-in-out',
                {
                  'w-8 -translate-y-1.5 -rotate-45': isMobileMenuOpen
                }
              )}
            ></span>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={clsx('', {
          'fixed md:hidden left-0 top-0 w-[60%] h-full bg-white ease-in-out duration-500 shadow-xl':
            isMobileMenuOpen,
          'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]':
            !isMobileMenuOpen
        })}
      >
        {/* Mobile Logo */}
        <h1 className="w-full text-lg font-bold m-4">KAMIL SZERLAG</h1>

        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              onClick={handleNav}
              href={item.href || ''}
              className="flex border-b p-6 hover:bg-orange-600 duration-300 hover:text-white cursor-pointer border-b-gray-200"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
};
