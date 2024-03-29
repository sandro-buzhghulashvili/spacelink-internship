'use client';

import Image from 'next/image';

import classes from './Hero.module.scss';
import Button from '../UI/Button';
import { PlayCircleIcon } from 'lucide-react';
import Card from '../UI/Card';

import { motion } from 'framer-motion';

export default function HeroComponent() {
  return (
    <div
      className="container mx-auto flex flex-col items-center pt-10 mb-40"
      id="home"
    >
      {/* // ARC */}
      <motion.div
        initial={{ opacity: 0, scale: 0.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="h-40 overflow-hidden blur-sm"
      >
        <Image
          src="/arc.png"
          width={900}
          height={400}
          alt="arc"
          className={classes.arc}
        />
      </motion.div>
      <div className="-translate-y-7 flex flex-col items-center xl:items-start xl:flex-row xl:justify-center">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center xl:items-start xl:w-2/5 px-10 mb-20"
        >
          <h1 className="text-5xl lg:text-6xl xl:text-7xl mb-10 w-3/4 xl:w-full text-center xl:text-left text-primary_typo font-semibold leading-tight">
            <span className={classes.gradientText}>Protect your</span> privacy
            online
          </h1>
          <p className="text-lg text-center xl:text-left text-secondary_typo">
            IdentityHub offers a suite of services to help you take back control
            of your online identity. Keep your data secure, manage your digital
            footprint, and protect yourself from identity theft.
          </p>
          <div className={`flex flex-col lg:flex-row mt-5 ${classes.buttons}`}>
            <Button>
              <p className="font-semibold">Start free trial</p>
              <Image
                src="/chevron-right.png"
                width={10}
                height={10}
                alt="chevron"
                className={classes.chevron}
              />
            </Button>
            <Button>
              <PlayCircleIcon className="mr-2" /> How it work
            </Button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative xl:ml-40"
        >
          <Image
            src="/lock.png"
            width={200}
            height={200}
            className="sm:w-72 sm:h-72"
            alt="lock"
          />
          <Card
            className={`flex ${classes.card} h-fit top-0 bottom-0 my-auto -left-20 xl:-left-40`}
            // style={{ position: 'absolute', top: '0', left: '-130px' }}
          >
            <Image src="/convert.png" alt="convert" width={52} height={52} />
            <div className="ml-3">
              <p className="text-secondary_typo">Email address</p>
              <p className="text-lg text-secondary_typo">nija@gmail.com</p>
            </div>
          </Card>
          <Card className={`flex ${classes.card} -bottom-5 `}>
            <Image src="/user.png" alt="convert" width={52} height={52} />
            <div className="ml-3">
              <p className="text-secondary_typo">User name</p>
              <p className="text-lg text-secondary_typo">tufayel nija</p>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
