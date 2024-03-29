'use client';

import Image from 'next/image';
import classes from './HowItWorks.module.scss';
import Card from '../UI/Card';

import { motion } from 'framer-motion';

export default function HowItWorks() {
  return (
    <>
      <div
        className="container mx-auto mb-40 flex flex-col xl:flex-row xl:justify-center items-center"
        id="features"
      >
        <div className="mb-28 xl:m-0 xl:w-2/5">
          <h1 className="text-4xl font-medium px-2 xl:text-6xl xl:leading-snug mb-10 text-primary_typo text-center xl:text-left leading-tight">
            We remove your private information form the online
          </h1>
          <ul className={`${classes.services} text-secondary_typo`}>
            <li>
              People-search sites use government records and online databases to
              create detailed profiles of virtually every citizen. 
            </li>
            <li>
              They then sell this sensitive information online, where it can end
              up in the hands of hackers, identity thieves, and stalkers.
            </li>
            <li>
              ReputationDefender stops people-search sites by opting our clients
              out of them.
            </li>
          </ul>
        </div>
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.05 } }, // Not enough time to finish
          }}
          initial="hidden"
          whileInView="visible"
          className="relative w-full xl:w-fit m-0  xl:ml-32"
        >
          <Image
            src="/card1.png"
            width={350}
            height={300}
            className="relative w-1/2 md:w-96 md:h-72 top-0 right-0 mx-auto left-0 z-10"
            alt="card1"
          />
          <Image
            src="/card2.png"
            width={350}
            height={300}
            className="absolute w-1/2  md:w-96 md:h-72 -top-12 right-0 mx-auto left-28"
            alt="card2"
          />
          <Card className={classes.card}>
            <Image
              src="/gallery.png"
              width={50}
              height={50}
              alt="gallery-icon"
            />
          </Card>
          <Card className={classes.card}>
            <Image src="/ai.png" width={50} height={50} alt="gallery-icon" />
          </Card>
          <span
            style={{ zIndex: 11 }}
            className="absolute bottom-5 right-0 -left-48 sm:-left-80  mx-auto w-fit text-white px-5 py-2 rounded-xl bg-red-500"
          >
            Delete
          </span>
        </motion.div>
      </div>
      <div className="container mx-auto mb-40 flex flex-col items-center xl:flex-row-reverse xl:justify-center">
        <div className="mb-20 xl:m-0 xl:w-2/5">
          <h1 className="text-4xl font-medium px-2 xl:text-6xl xl:leading-snug mb-10 text-primary_typo text-center xl:text-left leading-tight">
            Cloaking identities stand in for your personal data
          </h1>
          <p className="text-secondary_typo text-center px-10 xl:p-0 xl:text-left">
            Forget about spam, advertising mailings, hacking and attacking
            robots. Keep your real mailbox clean and secure. Temp Mail provides
            temporary, secure, anonymous, free, disposable email address.
          </p>
        </div>
        <div
          className={`flex xl:w-1/2 flex-wrap justify-center ${classes['service-card']}`}
        >
          <Card
            className="flex w-fit m-5"
            style={{ padding: '10px 20px 10px 5px' }}
          >
            <Image src="/user.png" alt="user" width={52} height={52} />
            <div className="ml-3">
              <h1 className="text-primary_typo">Username</h1>
              <p className="text-lg text-primary_typo">+1 (456) 453-3456</p>
            </div>
          </Card>
          <Card
            className="flex w-fit m-5"
            style={{ padding: '10px 20px 10px 5px' }}
          >
            <Image src="/phone.png" alt="user" width={52} height={52} />
            <div className="ml-3">
              <h1 className="text-primary_typo">Phone numbers</h1>
              <p className="text-lg text-primary_typo">+1 (456) 453-3456v</p>
            </div>
          </Card>
          <Card
            className="flex w-fit m-5"
            style={{ padding: '10px 20px 10px 5px' }}
          >
            <Image src="/convert.png" alt="user" width={52} height={52} />
            <div className="ml-3">
              <h1 className="text-primary_typo">Email address</h1>
              <p className="text-lg text-primary_typo">+1 (456) 453-3456</p>
            </div>
          </Card>
          <Card
            className="flex w-fit m-5"
            style={{ padding: '10px 20px 10px 5px' }}
          >
            <Image src="/creditcard.png" alt="user" width={52} height={52} />
            <div className="ml-3">
              <h1 className="text-primary_typo">Credit card</h1>
              <p className="text-lg text-primary_typo">+1 (456) 453-3456</p>
            </div>
          </Card>
          <Card
            className="flex w-fit m-5"
            style={{ padding: '10px 20px 10px 5px' }}
          >
            <Image src="/shield.png" alt="user" width={52} height={52} />
            <div className="ml-3">
              <h1 className="text-primary_typo">Password</h1>
              <p className="text-lg text-primary_typo">+1 (456) 453-3456</p>
            </div>
          </Card>
          <Card
            className="flex w-fit m-5"
            style={{ padding: '10px 20px 10px 5px' }}
          >
            <Image src="/lock-2.png" alt="user" width={52} height={52} />
            <div className="ml-3">
              <h1 className="text-primary_typo">One-time passcode</h1>
              <p className="text-lg text-primary_typo">+1 (456) 453-3456</p>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
