'use client';

import Card from '../UI/Card';
import classes from './Pricing.module.scss';
import { Packets } from './DUMMY_PACKETS';
import ServiceComponent from './Service';
import { useState } from 'react';

export default function Pricing() {
  const [activeService, setActiveService] = useState(1);

  function handleActiveService(index: number) {
    setActiveService(index);
  }
  return (
    <div className="container mx-auto mb-40" id="pricing">
      <div className="mb-20 flex flex-col items-center">
        <h1 className="text-4xl font-medium px-2 xl:text-6xl xl:leading-snug mb-10 text-primary_typo text-center  leading-tight">
          Pricing
        </h1>
        <p className="mb-10 text-secondary_typo w-3/4 xl:w-1/4 text-center px-10 xl:p-0">
          You can stay on the $56 plan until you have enough active user to
          justify managing their data or you start settings things.
        </p>
        <Card className="flex gap-3 text-primary_typo">
          <Card className={`${classes.btn} ${classes.active}`}>
            <p>Billed yearly -20%</p>
          </Card>
          <Card className={`${classes.btn}`}>
            <p>Billed monthly</p>
          </Card>
        </Card>
      </div>
      <div className="flex flex-col items-center xl:flex-row xl:justify-center">
        {Packets.map((service, index) => (
          <ServiceComponent
            onActive={handleActiveService}
            active={activeService}
            key={index}
            {...service}
          />
        ))}
      </div>
    </div>
  );
}
