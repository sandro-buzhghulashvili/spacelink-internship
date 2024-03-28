'use client';

import Image from 'next/image';
import { ChevronRight, Menu, X } from 'lucide-react';
import { useState } from 'react';

import classes from './Navbar.module.scss';
import Link from 'next/link';
import Button from '../UI/Button';

export default function Navbar() {
  const [navbarToggled, setNavbarToggled] = useState(false);

  function toggleNavbar() {
    setNavbarToggled((prevValue) => !prevValue);
  }

  return (
    <nav className="container mx-auto py-6 px-6 md:px-0 flex items-center justify-between">
      <div className="flex items-center">
        <Image width={32} height={32} src="/logo.png" alt="logo" />
        <h1 className="ml-3 text-2xl font-bold text-primary_typo">
          IdentityHub
        </h1>
      </div>
      <div
        className={`fixed md:relative top-0 ${
          navbarToggled ? 'left-0' : '-left-full md:left-0'
        } h-screen w-full  md:h-auto md:w-auto duration-300 ${
          classes['linear-background']
        }`}
      >
        <ul className={classes.navlinks}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Features</Link>
          </li>
          <li>
            <Link href="/">Pricing</Link>
          </li>
          <li>
            <Link href="/">Partners</Link>
          </li>
          <li>
            <Link href="/">About us</Link>
          </li>
          <li className="md:hidden">
            <Button>
              Start free trial <ChevronRight className="w-5 h-5 ml-3" />
            </Button>
          </li>
        </ul>
      </div>
      <div className="hidden md:inline-block">
        <Button className=" md:text-sm lg:text-xl">
          Start free trial <ChevronRight className="w-5 h-5 ml-3" />
        </Button>
      </div>
      <span className="cursor-pointer z-10 md:hidden" onClick={toggleNavbar}>
        {navbarToggled ? (
          <X width={32} height={32} className="stroke-primary_typo" />
        ) : (
          <Menu width={32} height={32} className="stroke-primary_typo" />
        )}
      </span>
    </nav>
  );
}
