"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const TopNav: React.FC = () => {

    const [showProfileMenu, setShowProfileMenu] = React.useState(false);

    const handleProfileMenuClick = () => {
        console.log('Profile menu clicked');
        setShowProfileMenu(!showProfileMenu);
    }

    return (
<nav className="bg-gray-800">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

        <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset" aria-controls="mobile-menu" aria-expanded="false">
          <span className="absolute -inset-0.5"></span>
          <span className="sr-only">Open main menu</span>
        </button>
      </div>
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex shrink-0 items-center">
          <Image src='/ico_megasena.png' alt="Mega Sena" className="h-8 w-auto" width={32} height={32} />
        </div>
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
            <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Home</a>
            <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
              <Link href={'/resultados'} >Resultados</Link>
            </a>
            <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Calendario</a>
            <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Contato</a>
          </div>
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <button type="button" className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
          <span className="absolute -inset-1.5"></span>
          <span className="sr-only">View notifications</span>

        </button>

        <div className="relative ml-3">
          <div>
            <button type="button" onClick={handleProfileMenuClick} className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
              <span className="absolute -inset-1.5"></span>
              <span className="sr-only">Open user menu</span>
              <img className="size-8 rounded-full" src="/user-profile-icon.svg" alt="" />
            </button>
          </div>
        { showProfileMenu && ( 
          <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 focus:outline-hidden" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex={-1}>
            <button className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-0">Your Profile</button>
            <button className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-1">Settings</button>
            <button className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-2">Sign out</button>
          </div>
        )}
        </div>
      </div>
    </div>
  </div>

  <div className="sm:hidden" id="mobile-menu">
    <div className="space-y-1 px-2 pt-2 pb-3">
      <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Home</a>
      <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Resultados</a>
      <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Contato</a>
      <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Calendario</a>
    </div>
  </div>
</nav>

    );
};

export default TopNav;
