'use client';

import Image from 'next/image';
import { ChevronRight, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

import classes from './Navbar.module.scss';
import Link from 'next/link';
import Button from '../UI/Button';

export default function Navbar() {
  const [navbarToggled, setNavbarToggled] = useState(false);

  function toggleNavbar() {
    setNavbarToggled((prevValue) => !prevValue);
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-primary_background z-20 container mx-auto py-6 px-6 md:px-0 flex items-center justify-between">
      <div className="flex items-center">
        <Image width={32} height={32} src="/logo.png" alt="logo" />
        <h1 className="ml-3 text-2xl font-bold text-primary_typo">
          IdentityHub
        </h1>
      </div>
      <div
        className={`fixed z-20 md:relative top-0 ${
          navbarToggled ? 'left-0' : '-left-full md:left-0'
        } h-screen w-full  md:h-auto md:w-auto duration-300 ${
          classes['linear-background']
        }`}
      >
        <ul className={classes.navlinks}>
          <li>
            <ScrollLink to="home" smooth={true} duration={500}>
              Home
            </ScrollLink>{' '}
            {/* Use ScrollLink instead of Link */}
          </li>
          <li>
            <ScrollLink to="features" smooth={true} duration={500}>
              Features
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="pricing" smooth={true} duration={500}>
              Pricing
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="partners" smooth={true} duration={500}>
              Partners
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="aboutUs" smooth={true} duration={500}>
              About us
            </ScrollLink>
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
      <span
        className={`cursor-pointer z-20 md:hidden ${navbarToggled && 'fixed'}`}
        onClick={toggleNavbar}
      >
        {navbarToggled ? (
          <X width={32} height={32} className="stroke-primary_typo" />
        ) : (
          <Menu width={32} height={32} className="stroke-primary_typo" />
        )}
      </span>
    </nav>
  );
}
